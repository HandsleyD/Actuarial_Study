---
normalized_id: shared-pdf-reference-schaum-s-fluid-mechanics-260
exam_code: SHARED
material_scope: schaum_s fluid mechanics -- 260.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Schaum_s Fluid Mechanics -- 260.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-schaum-s-fluid-mechanics-260

 SCHAUM’S
OUTLINE OF




       FLUID
   MECHANICS
This page intentionally left blank
          SCHAUM’S
         OUTLINE OF




    FLUID
MECHANICS
             MERLE C. POTTER, Ph.D.
  Professor Emeritus of Mechanical Engineering
                      Michigan State University



            DAVID C. WIGGERT, Ph.D.
        Professor Emeritus of Civil Engineering
                     Michigan State University




         Schaum’s Outline Series
                               McGRAW-HILL
New York Chicago San Francisco Lisbon London
 Madrid Mexico City Milan New Delhi San Juan
              Seoul Singapore Sydney Toronto
Copyright © 2008 by The McGraw-Hill Companies, Inc. All rights reserved. Manufactured in the United States of America. Except as
permitted under the United States Copyright Act of 1976, no part of this publication may be reproduced or distributed in any form or by
any means, or stored in a database or retrieval system, without the prior written permission of the publisher.

0-07-159454-X

The material in this eBook also appears in the print version of this title: 0-07-148781-6.

All trademarks are trademarks of their respective owners. Rather than put a trademark symbol after every occurrence of a trademarked
name, we use names in an editorial fashion only, and to the benefit of the trademark owner, with no intention of infringement of the
trademark. Where such designations appear in this book, they have been printed with initial caps.

McGraw-Hill eBooks are available at special quantity discounts to use as premiums and sales promotions, or for use in corporate training
programs. For more information, please contact George Hoare, Special Sales, at george_hoare@mcgraw-hill.com or (212) 904-4069.

TERMS OF USE

This is a copyrighted work and The McGraw-Hill Companies, Inc. (“McGraw-Hill”) and its licensors reserve all rights in and to the work.
Use of this work is subject to these terms. Except as permitted under the Copyright Act of 1976 and the right to store and retrieve one copy
of the work, you may not decompile, disassemble, reverse engineer, reproduce, modify, create derivative works based upon, transmit,
distribute, disseminate, sell, publish or sublicense the work or any part of it without McGraw-Hill’s prior consent. You may use the work
for your own noncommercial and personal use; any other use of the work is strictly prohibited. Your right to use the work may be
terminated if you fail to comply with these terms.

THE WORK IS PROVIDED “AS IS.” McGRAW-HILL AND ITS LICENSORS MAKE NO GUARANTEES OR WARRANTIES AS TO
THE ACCURACY, ADEQUACY OR COMPLETENESS OF OR RESULTS TO BE OBTAINED FROM USING THE WORK,
INCLUDING ANY INFORMATION THAT CAN BE ACCESSED THROUGH THE WORK VIA HYPERLINK OR OTHERWISE, AND
EXPRESSLY DISCLAIM ANY WARRANTY, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. McGraw-Hill and its licensors do not war-
rant or guarantee that the functions contained in the work will meet your requirements or that its operation will be uninterrupted or error
free. Neither McGraw-Hill nor its licensors shall be liable to you or anyone else for any inaccuracy, error or omission, regardless of cause,
in the work or for any damages resulting therefrom. McGraw-Hill has no responsibility for the content of any information accessed through
the work. Under no circumstances shall McGraw-Hill and/or its licensors be liable for any indirect, incidental, special, punitive,
consequential or similar damages that result from the use of or inability to use the work, even if any of them has been advised of the
possibility of such damages. This limitation of liability shall apply to any claim or cause whatsoever whether such claim or cause arises in
contract, tort or otherwise.

DOI: 10.1036/0071487816
        Professional


                Want to learn more?
                    We hope you enjoy this
                    McGraw-Hill eBook! If
you’d like more information about this book,
its author, or related books and websites,
please click here.
                                                        PREFACE


This book is intended to accompany a text used in that ﬁrst course in ﬂuid mechanics
which is required in all mechanical engineering and civil engineering departments, as
well as several other departments. It provides a succinct presentation of the material so
that the students more easily understand those difﬁcult parts. If an expanded
presentation is not a necessity, this book can be used as the primary text. We have
included all derivations and numerous applications, so it can be used with no
supplemental material. A solutions manual is available from the authors at
MerleCP@sbcglobal.net.
     We have included a derivation of the Navier– Stokes equations with several solved
ﬂows. It is not necessary, however, to include them if the elemental approach is selected.
Either method can be used to study laminar ﬂow in pipes, channels, between rotating
cylinders, and in laminar boundary layer ﬂow.
     The basic principles upon which a study of ﬂuid mechanics is based are illustrated
with numerous examples, solved problems, and supplemental problems which allow
students to develop their problem-solving skills. The answers to all supplemental
problems are included at the end of each chapter. All examples and problems are
presented using SI metric units. English units are indicated throughout and are included
in the Appendix.
     The mathematics required is that of other engineering courses except that required
if the study of the Navier– Stokes equations is selected where partial differential
equations are encountered. Some vector relations are used, but not at a level beyond
most engineering curricula.
     If you have comments, suggestions, or corrections or simply want to opine, please
e-mail me at: merlecp@sbcglobal.net. It is impossible to write an error-free book, but if
we are made aware of any errors, we can have them corrected in future printings.
Therefore, send an email when you ﬁnd one.

                                                                                       MERLE C. POTTER
                                                                                       DAVID C. WIGGERT




                                                            v
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
This page intentionally left blank
                   For more information about this title, click here




                                    CONTENTS


CHAPTER I   Basic Information                                               1
            1.1   Introduction                                              1
            1.2   Dimensions, Units, and Physical Quantities                1
            1.3   Gases and Liquids                                         4
            1.4   Pressure and Temperature                                  5
            1.5   Properties of Fluids                                      6
            1.6   Thermodynamic Properties and Relationships               10


CHAPTER 2   Fluid Statics                                                  20
            2.1   Introduction                                             20
            2.2   Pressure Variation                                       20
            2.3   Manometers                                               22
            2.4   Forces on Plane and Curved Surfaces                      24
            2.5   Accelerating Containers                                  27


CHAPTER 3   Fluids in Motion                                               39
            3.1   Introduction                                             39
            3.2   Fluid Motion                                             39
                  3.2.1 Lagrangian and Eulerian Descriptions               39
                  3.2.2 Pathlines, Streaklines, and Streamlines            40
                  3.2.3 Acceleration                                       41
                  3.2.4 Angular Velocity and Vorticity                     42
            3.3   Classiﬁcation of Fluid Flows                             45
                  3.3.1 Uniform, One-, Two-, and Three-Dimensional Flows   46
                  3.3.2 Viscous and Inviscid Flows                         46
                  3.3.3 Laminar and Turbulent Flows                        47
                  3.3.4 Incompressible and Compressible Flows              48
            3.4   Bernoulli’s Equation                                     49


CHAPTER 4   The Integral Equations                                         60
            4.1   Introduction                                             60
            4.2   System-to-Control-Volume Transformation                  60
            4.3   Conservation of Mass                                     63
            4.4   The Energy Equation                                      64
            4.5   The Momentum Equation                                    67




                                         vii
viii                          CONTENTS



CHAPTER 5   Differential Equations                              84
            5.1   Introduction                                   84
            5.2   The Differential Continuity Equation           85
            5.3   The Differential Momentum Equation             87
            5.4   The Differential Energy Equation               92


CHAPTER 6   Dimensional Analysis and Similitude                 97
            6.1   Introduction                                   97
            6.2   Dimensional Analysis                           97
            6.3   Similitude                                    102


CHAPTER 7   Internal Flows                                      110
            7.1   Introduction                                  110
            7.2   Entrance Flow                                 110
            7.3   Laminar Flow in a Pipe                        112
                  7.3.1 The Elemental Approach                  112
                  7.3.2 Applying the Navier –Stokes Equations   113
                  7.3.3 Quantities of Interest                  114
            7.4   Laminar Flow Between Parallel Plates          115
                  7.4.1 The Elemental Approach                  115
                  7.4.2 Applying the Navier –Stokes Equations   116
                  7.4.3 Quantities of Interest                  117
            7.5   Laminar Flow between Rotating Cylinders       118
                  7.5.1 The Elemental Approach                  118
                  7.5.2 Applying the Navier –Stokes Equations   120
                  7.5.3 Quantities of Interest                  120
            7.6   Turbulent Flow in a Pipe                      121
                  7.6.1 The Semi-Log Proﬁle                     123
                  7.6.2 The Power-Law Proﬁle                    123
                  7.6.3 Losses in Pipe Flow                     125
                  7.6.4 Losses in Noncircular Conduits          127
                  7.6.5 Minor Losses                            127
                  7.6.6 Hydraulic and Energy Grade Lines        129
            7.7   Open Channel Flow                             130


CHAPTER 8   External Flows                                      145
            8.1   Introduction                                  145
            8.2   Flow Around Blunt Bodies                      146
                  8.2.1 Drag Coefﬁcients                        146
                  8.2.2 Vortex Shedding                         149
                  8.2.3 Cavitation                              150
                  8.2.4 Added Mass                              152
            8.3   Flow Around Airfoils                          152
                                CONTENTS                                    ix



             8.4    Potential Flow                                          154
                    8.4.1 Basics                                            154
                    8.4.2 Several Simple Flows                              155
                    8.4.3 Superimposed Flows                                157
             8.5    Boundary-Layer Flow                                     159
                    8.5.1 General Information                               159
                    8.5.2 The Integral Equations                            161
                    8.5.3 Laminar and Turbulent Boundary Layers             162
                    8.5.4 Laminar Boundary-Layer Differential Equations     166


CHAPTER 9    Compressible Flow                                              181
             9.1    Introduction                                            181
             9.2    Speed of Sound                                          182
             9.3    Isentropic Nozzle Flow                                  184
             9.4    Normal Shock Waves                                      188
             9.5    Oblique Shock Waves                                     192
             9.6    Expansion Waves                                         195


CHAPTER 10   Flow in Pipes and Pumps                                        206
             10.1    Introduction                                           206
             10.2    Simple Pipe Systems                                    206
                     10.2.1 Losses                                          206
                     10.2.2 Hydraulics of Simple Pipe Systems               207
             10.3    Pumps in Pipe Systems                                  211
             10.4    Pipe Networks                                          215
                     10.4.1 Network Equations                               215
                     10.4.2 Hardy Cross Method                              216
                     10.4.3 Computer Analysis of Network Systems            219
             10.5    Unsteady Flow                                          219
                     10.5.1 Incompressible Flow                             220
                     10.5.2 Compressible Flow of Liquids                    221


APPENDIX A   Units and Conversions                                          232
             A.1    English Units, SI Units, and Their Conversion Factors   232
             A.2    Conversions of Units                                    233

APPENDIX B   Vector Relationships                                           234
APPENDIX C   Fluid Properties                                               235
             C.1     Properties of Water                                    235
             C.1E    English Properties of Water                            235
             C.2     Properties of Air at Atmospheric Pressure              236
             C.2E    English Properties of Air at Atmospheric Pressure      236
             C.3     Properties of the Standard Atmosphere                  237
x                              CONTENTS



             C.3E   English Properties of the Atmosphere                         237
             C.4    Properties of Ideal Gases at 300 K (cv ¼ cp k k ¼ cp =cv )   238
             C.5    Properties of Common Liquids at Atmospheric Pressure
                    and Approximately 16 to 21–C (60 to 70–F)                    239
             Figure C.1 Viscosity as a Function of Temperature                   240
             Figure C.2 Kinematic Viscosity as a Function of Temperature
                         at Atmospheric Pressure                                 241


APPENDIX D   Compressible Flow Table for Air                                     242
             D.1    Isentropic Flow                                              242
             D.2    Normal Shock Flow                                            243
             D.3    Prandtl– Meyer Function                                      244


INDEX                                                                            245
                                                    Chapter 1


                        Basic Information

1.1   INTRODUCTION
Fluid mechanics is encountered in almost every area of our physical lives. Blood ﬂows through our veins
and arteries, a ship moves through water and water ﬂows through rivers, airplanes ﬂy in the air and air
ﬂows around wind machines, air is compressed in a compressor and steam expands around turbine
blades, a dam holds back water, air is heated and cooled in our homes, and computers require air to cool
components. All engineering disciplines require some expertise in the area of ﬂuid mechanics.
     In this book we will present those elements of ﬂuid mechanics that allow us to solve problems
involving relatively simple geometries such as ﬂow through a pipe and a channel and ﬂow around
spheres and cylinders. But ﬁrst, we will begin by making calculations in ﬂuids at rest, the subject of ﬂuid
statics. The math requirement is primarily calculus but some differential equation theory will be used.
The more complicated ﬂows that usually are the result of more complicated geometries will not be
presented in this book.
     In this ﬁrst chapter, the basic information needed in our study will be presented. Much of it has been
included in previous courses so it will be a review. But, some of it should be new to you. So, let us get
started.


1.2   DIMENSIONS, UNITS, AND PHYSICAL QUANTITIES
Fluid mechanics, as all other engineering areas, is involved with physical quantities. Such quantities
have dimensions and units. The nine basic dimensions are mass, length, time, temperature, amount of
a substance, electric current, luminous intensity, plane angle, and solid angle. All other quantities can
be expressed in terms of these basic dimensions, e.g., force can be expressed using Newton’s second
law as
                                                            F ¼ ma                                    ð1:1Þ

In terms of dimensions we can write (note that F is used both as a variable and as a dimension)
                                                                   L
                                                          F¼M                                         ð1:2Þ
                                                                   T2
where F, M, L, and T are the dimensions of force, mass, length, and time. We see that force can be
written in terms of mass, length, and time. We could, of course, write
                                                                   T2
                                                          M¼F                                         ð1:3Þ
                                                                   L

                                                            1
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
2                                                  BASIC INFORMATION                                                       [CHAP. 1



   Units are introduced into the above relationships if we observe that it takes 1 N to accelerate 1 kg at
1 m=s2 (using English units it takes 1 lb to accelerate 1 slug at 1 ft=sec2), i.e.,
                                           N ¼ kg·m=s2                     lb ¼ slug-ft=sec2                                   ð1:4Þ
These relationships will be used often in our study of ﬂuids. Note that we do not use ‘‘lbf’’ since the unit
‘‘lb’’ will always refer to a pound of force; the slug will be the unit of mass in the English system. In the
SI system the mass will always be kilograms and force will always be newtons. Since weight is a force, it
is measured in newtons, never kilograms. The relationship
                                                             W ¼ mg                                                            ð1:5Þ
                                                                                                                           2
is used to calculate the weight in newtons given the mass in kilograms, where g ¼ 9.81 m=s (using
English units g ¼ 32.2 ft=sec2). Gravity is essentially constant on the earth’s surface varying from 9.77 to
9.83 m=s2.
     Five of the nine basic dimensions and their units are included in Table 1.1 and derived units of
interest in our study of ﬂuid mechanics in Table 1.2. Preﬁxes are common in the SI system so they are
presented in Table 1.3. Note that the SI system is a special metric system; we will use the units presented


                                  Table 1.1         Basic Dimensions and Their Units

                Quantity           Dimension                 SI                  Units         English           Units
             Length l                  L                  meter                   m            foot              ft
             Mass m                    M                  kilogram                kg           slug              slug
             Time t                    T                  second                   s           second            sec
             Temperature T             Y                  kelvin                  K            Rankine           –R

             Plane angle                                  radian                  rad          radian            rad



                                 Table 1.2         Derived Dimensions and Their Units

                 Quantity            Dimension                              SI units                    English units
            Area A                   L2                     m2                                        ft2
            Volume V                 L3                     m3 or L (liter)                           ft3
            Velocity V               L=T                    m=s                                       ft=sec
                                            2                      2
            Acceleration a           L=T                    m=s                                       ft=sec2
            Angular velocity O       T 21                   s21                                       sec21
            Force F                  ML=T 2                 kg·m=s2 or N (newton)                     slug-ft=sec2 or lb
            Density r                M=L3                   kg=m3                                     slug=ft3
                                               2    2                  3
            Speciﬁc weight g         M=L T                  N=m                                       lb=ft3
            Frequency f              T 21                   s21                                       sec21
            Pressure p               M=LT 2                 N=m2 or Pa (pascal)                       lb=ft2
            Stress t                 M=LT 2                 N=m2 or Pa (pascal)                       lb=ft2
            Surface tension s        M=T 2                  N=m                                       lb=ft
                                           2        2
            Work W                   ML =T                  N·m or J (joule)                          ft-lb
            Energy E                 ML =T 2
                                           2
                                                            N·m or J (joule)                          ft-lb
            Heat rate Q_             ML2=T 3                J=s                                       Btu=sec
CHAP. 1]                                     BASIC INFORMATION                                                  3


                                                  Table 1.2       Continued

                      Quantity                   Dimension                   SI units        English units
                                                      2       2
                Torque T                         ML =T                N·m                    ft-lb
                Power W_                         ML =T2       3
                                                                      J=s or W (watt)        ft-lb=sec
                Mass ﬂux m_                      M=T                  kg=s                   slug=sec
                Flow rate Q                      L3=T                 m3=s                   ft3=sec
                Speciﬁc heat c                    2
                                                 L =T Y   2
                                                                      J=kg·K                 Btu=slug-– R
                Viscosity m                      M=LT                 N·s=m2                 lb-sec=ft2
                Kinematic viscosity n            L2=T                 m2=s                   ft2=sec


                                                 Table 1.3        SI Preﬁxes

                                 Multiplication factor               Preﬁx          Symbol
                                        1012                         tera               T
                                             9
                                        10                           giga               G
                                             6
                                        10                           mega               M
                                             3
                                        10                           kilo               k
                                             22
                                        10                           centi              c
                                             23
                                        10                           milli              m
                                             26
                                        10                           micro              m
                                        1029                         nano               n
                                           212
                                        10                           pico               p


in these tables. We often use scientiﬁc notation, such as 3 · 105 N rather than 300 kN; either form is
acceptable.
     We ﬁnish this section with comments on signiﬁcant ﬁgures. In every calculation, well, almost every
one, a material property is involved. Material properties are seldom known to four signiﬁcant ﬁgures
and often only to three. So, it is not appropriate to express answers to ﬁve or six signiﬁcant ﬁgures. Our
calculations are only as accurate as the least accurate number in our equations. For example, we use
gravity as 9.81 m=s2, only three signiﬁcant ﬁgures. It is usually acceptable to express answers using four
signiﬁcant ﬁgures, but not ﬁve or six. The use of calculators may even provide eight. The engineer does
not, in general, work with ﬁve or six signiﬁcant ﬁgures. Note that if the leading numeral in an answer is
1, it does not count as a signiﬁcant ﬁgure, e.g., 1248 has three signiﬁcant ﬁgures.


 EXAMPLE 1.1 Calculate the force needed to provide an initial upward acceleration of 40 m=s2 to a 0.4-kg
 rocket.
     Solution: Forces are summed in the vertical y-direction:
                                        X
                                            Fy ¼ may
                                                 F 2 mg ¼ ma
                                                 F 2 0:4 · 9:81 ¼ 0:4 · 40
                                                 \ F ¼ 19:92 N
 Note that a calculator would provide 19.924 N, which contains four signiﬁcant ﬁgures (the leading 1 does not
 count). Since gravity contained three signiﬁcant ﬁgures, the 4 was dropped.
4                                          BASIC INFORMATION                                     [CHAP. 1



1.3   GASES AND LIQUIDS
The substance of interest in our study of ﬂuid mechanics is a gas or a liquid. We restrict ourselves to
those liquids that move under the action of a shear stress, no matter how small that shearing stress may
be. All gases move under the action of a shearing stress but there are certain substances, like ketchup,
that do not move until the shear becomes sufﬁciently large; such substances are included in the subject of
rheology and are not presented in this book.
    A force acting on an area is displayed in Fig. 1.1. A stress vector is the force vector divided by
the area upon which it acts. The normal stress acts normal to the area and the shear stress acts tangent
to the area. It is this shear stress that results in ﬂuid motions. Our experience of a small force parallel
to the water on a rather large boat conﬁrms that any small shear causes motion. This shear stress is
calculated with
                                                             DFt
                                                     t ¼ lim                                          ð1:6Þ
                                                        DA!0 DA




                                       n
                                                 F                      Fn




                                             t
                                                                              Ft

                                   A                               A



                         Figure 1.1 Normal and tangential components of a force.


     Each ﬂuid considered in our study is continuously distributed throughout a region of interest, that
is, each ﬂuid is a continuum. A liquid is obviously a continuum but each gas we consider is also assumed
to be a continuum; the molecules are sufﬁciently close to one another so as to constitute a continuum. To
determine whether the molecules are sufﬁciently close, we use the mean free path, the average distance a
molecule travels before it collides with a neighboring molecule. If the mean free path is small compared
to a characteristic dimension of a device (e.g., the diameter of a rocket), the continuum assumption is
reasonable. In atmospheric air at sea level, the mean free path is approximately 6 · 1026 cm and at an
elevation of 100 km, it is about 10 cm. So, at high elevations, the continuum assumption is not
reasonable and the theory of rariﬁed gas dynamics is needed.
     If a ﬂuid is a continuum, the density can be deﬁned as

                                                             Dm
                                                     r ¼ lim                                          ð1:7Þ
                                                        DV!0 DV


where Dm is the inﬁnitesimal mass contained in the inﬁnitesimal volume DV. Actually, the inﬁnitesimal
volume cannot be allowed to shrink to zero since near zero there would be few molecules in the small
volume; a small volume E would be needed as the limit in Eq. (1.7) for the deﬁnition to be acceptable.
This is not a problem for most engineering applications since there are 2:7 · 1016 molecules in a cubic
millimeter of air at standard conditions.
     So, with the continuum assumption, the quantities of interest are assumed to be deﬁned at all points
in a speciﬁed region. For example, the density is a continuous function of x, y, z, and t, i.e., r ¼
rðx,y,z,tÞ.
CHAP. 1]                                   BASIC INFORMATION                                                5



1.4   PRESSURE AND TEMPERATURE
In our study of ﬂuid mechanics, we often encounter pressure. It results from compressive forces acting on
an area. In Fig. 1.2 the inﬁnitesimal force DFn acting on the inﬁnitesimal area DA gives rise to the
pressure, deﬁned by
                                                               DFn
                                                     p ¼ lim                                             ð1:8Þ
                                                         DA!0 DA

The units on pressure result from force divided by area, that is, N=m2, the pascal, Pa. A pressure of 1 Pa
is a very small pressure, so pressure is typically expressed as kilopascals or kPa. Using English units,
pressure is expressed as lb=ft2 (psf) or lb=in2 (psi). Atmospheric pressure at sea level is 101.3 kPa, or most
often simply 100 kPa (14.7 lb=in2). It should be noted that pressure is sometimes expressed as millimeters
of mercury, as is common with meteorologists, or meters of water; we can use p ¼ rgh to convert the
units, where r is the density of the ﬂuid with height h.



                                                          Fn


                                                               Surface
                                                 A


                             Figure 1.2   The normal force that results in pressure.



    Pressure measured relative to atmospheric pressure is called gage pressure; it is what a gage
measures if the gage reads zero before being used to measure the pressure. Absolute pressure is zero in
a volume that is void of molecules, an ideal vacuum. Absolute pressure is related to gage pressure by
the equation
                                             pabsolute ¼ pgage þ patmosphere                             ð1:9Þ
where patmosphere is the atmospheric pressure at the location where the pressure measurement is made;
this atmospheric pressure varies considerably with elevation and is given in Table C.3 in App. C. For
example, at the top of Pikes Peak in Colorado, it is about 60 kPa. If neither the atmospheric pressure
nor elevation are given, we will assume standard conditions and use patmosphere ¼ 100 kPa. Figure 1.3
presents a graphic description of the relationship between absolute and gage pressure. Several
common representations of the standard atmosphere (at 40– latitude at sea level) are included in
that ﬁgure.
     We often refer to a negative pressure, as at B in Fig. 1.3, as a vacuum; it is either a negative
pressure or a vacuum. A pressure is always assumed to be a gage pressure unless otherwise stated
(in thermodynamics the pressure is assumed to be absolute). A pressure of 230 kPa could be stated
as 70 kPa absolute or a vacuum of 30 kPa, assuming atmospheric pressure to be 100 kPa (note
that the difference between 101.3 and 100 kPa is only 1.3 kPa, a 1.3% error, within engineering
acceptability).
     We do not deﬁne temperature (it requires molecular theory for a deﬁnition) but simply state that we
use two scales: the Celsius scale and the Fahrenheit scale. The absolute scale when using temperature in
degrees Celsius is the kelvin (K) scale and the absolute scale when using temperature in degrees
Fahrenheit is the Rankine scale. We use the following conversions:

                                                  K ¼ –C þ 273:15
                                                 – R ¼ –F þ 459:67                                     ð1:10Þ
6                                                 BASIC INFORMATION                                                     [CHAP. 1



                                        A


                                                                  ( pA )gage
                  Standard atmosphere
                                                                                         Atmospheric    pgage = 0
                       101.3 kPa                                                         pressure
                       14.7 psi
                                                                      ( pB )gage
                       30 in Hg                  ( pA )absolute
                       760 mm Hg
                       1.013 bar                                  B
                       34 ft water
                                                                                   ( pB )absolute


                                                                                        Zero absolute
                                                                                                        pabsolute = 0
                                                                                        pressure

                                        Figure 1.3 Absolute and gage pressure.


In engineering problems we use the numbers 273 and 460, which allows for acceptable accuracy. Note
that we do not use the degree symbol when expressing the temperature in degrees kelvin nor do we
capitalize the word ‘‘kelvin.’’ We read ‘‘100 K’’ as 100 kelvins in the SI system (remember, the SI system
is a special metric system).

    EXAMPLE 1.2 A pressure is measured to be a vacuum of 23 kPa at a location in Wyoming where the elevation
    is 3000 m. What is the absolute pressure?
         Solution: Use Appendix C to ﬁnd the atmospheric pressure at 3000 m. We use a linear interpolation to
    ﬁnd patmosphere ¼ 70.6 kPa. Then,
                                            pabs ¼ patm þ p ¼ 70:6 2 23 ¼ 47:6 kPa
    The vacuum of 23 kPa was expressed as 223 kPa in the equation.




1.5    PROPERTIES OF FLUIDS
A number of ﬂuid properties must be used in our study of ﬂuid mechanics. Mass per unit volume,
density, was introduced in Eq. (1.7). We often use weight per unit volume, the speciﬁc weight g, related to
density by
                                                     g ¼ rg                                          ð1:11Þ

where g is the local gravity. For water, g is taken as 9810 N=m3 (62.4 lb=ft3) unless otherwise stated.
Speciﬁc weight for gases is seldom used.
    Speciﬁc gravity S is the ratio of the density of a substance to the density of water and is often
speciﬁed for a liquid. It may be used to determine either the density or the speciﬁc weight:
                                                   r ¼ Srwater                 g ¼ Sgwater                                ð1:12Þ

As an example, the speciﬁc gravity of mercury is 13.6, which means that it is 13.6 times heavier than
water. So, rmercury ¼ 13:6 · 1000 ¼ 13 600 kg=m3 , where we used the density of water to be 1000 kg=m3,
the value used for water if not speciﬁed.
    Viscosity can be considered to be the internal stickiness of a ﬂuid. It results in shear stresses in a ﬂow
and accounts for losses in a pipe or the drag on a rocket. It can be related in a one-dimensional ﬂow to
the velocity through a shear stress t by
                                                                          du
                                                                  t¼m                                                     ð1:13Þ
                                                                          dr
CHAP. 1]                                    BASIC INFORMATION                                               7



where we call du=dr a velocity gradient, where r is measured normal to a surface and u is tangential to that
surface, as in Fig. 1.4. Consider the units on the quantities in Eq. (1.13): the stress (force divided by an
area) has units of N=m2 (lb=ft2) so that the viscosity has the units N·s=m2 (lb-sec=ft2).
     To measure the viscosity, consider a long cylinder rotating inside a second cylinder, as shown in Fig.
1.4. In order to rotate the inner cylinder with the rotational speed O, a torque T must be applied. The
velocity of the inner cylinder is RO and the velocity of the outer cylinder is zero. The velocity distribution
in the gap h between the cylinders is essentially a linear distribution as shown, so that
                                                             du    RO
                                                       t¼m      ¼m                                     ð1:14Þ
                                                             dr     h


                                        u

                                                   T

                                                                   R



                                                                       r


                                                   h




                         Figure 1.4 Fluid being sheared between two long cylinders.
We can relate the shear to the applied torque as follows:

                                        T ¼ stress · area · moment arm
                                          ¼ t · 2pRL · R
                                                  RO                 R3 OLm
                                            ¼m       · 2pRL · R ¼ 2p                                   ð1:15Þ
                                                   h                    h
where the shear acting on the ends of the long cylinder has been neglected. A device used to measure the
viscosity is a viscometer.
     In this introductory book, we focus our attention on Newtonian ﬂuids, those that exhibit a linear
relationship between the shear stress and the velocity gradient, as in Eqs. (1.13) and (1.14), as displayed
in Fig. 1.5. Many common ﬂuids, such as air, water, and oil are Newtonian ﬂuids. Non-Newtonian ﬂuids
are classiﬁed as dilatants, pseudoplastics, and ideal plastics and are also displayed.


                                       Ideal
                                        plastic
                                                        Dilatant

                                                                       Newtonian
                                                                       fluid


                                                                            Pseudoplastic




                                                                                      du/dy

                              Figure 1.5 Newtonian and Non-Newtonian ﬂuids.
8                                           BASIC INFORMATION                                          [CHAP. 1



     A very important effect of viscosity is to cause the ﬂuid to stick to a surface, the no-slip condition. If a
surface is moving extremely fast, as a satellite entering the atmosphere, this no-slip condition results in
very large shear stresses on the surface; this results in extreme heat which can burn up entering satellites.
The no-slip condition also gives rise to wall shear in pipes resulting in pressure drops that require pumps
spaced appropriately over the length of a pipe line transporting oil or gas.
     Viscosity is very dependent on temperature. Note that in Fig. C.1 in App. C, the viscosity of a liquid
decreases with increased temperature but the viscosity of a gas increases with increased temperature. In a
liquid the viscosity is due to cohesive forces but in a gas it is due to collisions of molecules; both of these
phenomena are insensitive to pressure so we note that viscosity depends on temperature only in both a
liquid and a gas, i.e., m ¼ m(T ).
     The viscosity is often divided by density in equations, so we have deﬁned the kinematic viscosity to be
                                                             m
                                                         n¼                                               ð1:16Þ
                                                             r
It has units of m2=s (ft2=sec). In a gas we note that kinematic viscosity does depend on pressure since
density depends on both temperature and pressure.
    The volume of a gas is known to depend on pressure and temperature. In a liquid, the volume also
depends slightly on pressure. If that small volume change (or density change) is important, we use the
bulk modulus B:
                                                          Dp      Dp
                                                    B¼V        ¼r                                         ð1:17Þ
                                                          DV T    Dr T
The bulk modulus has the same units as pressure. It is included in Table C.1 in App. C. For water at
20– C, it is about 2100 MPa. To cause a 1% change in the volume of water, a pressure of 21 000 kPa is
needed. So, it is obvious why we consider water to be incompressible. The bulk modulus is also used to
determine the speed of sound in water. It is given by
                                                       pﬃﬃﬃﬃﬃ
                                                  c ¼ B=r                                       ð1:18Þ
This yields about c ¼ 1450 m=s for water at 20– C.
    Another property of occasional interest in our study is surface tension s; it results from the attractive
forces between molecules, and is included in Table C.1. It allows steel to ﬂoat, droplets to form, and
small droplets and bubbles to be spherical. Consider the free-body diagram of a spherical droplet and a
bubble, as shown in Fig. 1.6. The pressure force inside the droplet balances the force due to surface
tension around the circumference:
                                                        ppr2 ¼ 2prs

                                                               2s
                                                        \p¼                                               ð1:19Þ
                                                                r


                                           2 r                                 2×2 r



                                                 p r2                                  p r2




                                     (a)                                 (b)
                       Figure 1.6   Free-body diagrams of (a) a droplet and (b) a bubble.
CHAP. 1]                                      BASIC INFORMATION                                                     9



Note that in a bubble there are two surfaces so that the force balance provides
                                                                4s
                                                           p¼                                               ð1:20Þ
                                                                 r
So, if the internal pressure is desired, it is important to know if it is a droplet or a bubble.
    A second application where surface tension causes an interesting result is in the rise of a liquid in a
capillary tube. The free-body diagram of the water in the tube is shown in Fig. 1.7. Summing forces on
the column of liquid gives
                                                                     pD2
                                                   spD cos b ¼ rg        h                                  ð1:21Þ
                                                                      4
where the right-hand side is the weight W. This provides the height the liquid will climb in the tube:
                                                            4s cos b
                                                       h¼                                                   ð1:22Þ
                                                              gD

                                                                         D




                                                       W             h


                                                   D

                                                                              Air
                                                                             Liquid

                                 Figure 1.7   The rise of a liquid in a small tube.


     The ﬁnal property to be introduced in this section is vapor pressure. Molecules escape and reenter a
liquid that is in contact with a gas, such as water in contact with air. The vapor pressure is that pressure
at which there is equilibrium between the escaping and reentering molecules. If the pressure is below the
vapor pressure, the molecules will escape the liquid; it is called boiling when water is heated to the
temperature at which the vapor pressure equals the atmospheric pressure. If the local pressure is
decreased to the vapor pressure, vaporization also occurs. This can happen when liquid ﬂows through
valves, elbows, or turbine blades, should the pressure become sufﬁciently low; it is then called cavitation.
The vapor pressure is found in Table C.1 in App. C.

 EXAMPLE 1.3 A 0:5 m · 2 m ﬂat plate is towed at 5 m=s on a 2-mm-thick layer of SAE-30 oil at 38– C that
 separates it from a ﬂat surface. The velocity distribution between the plate and the surface is assumed to be
 linear. What force is required if the plate and surface are horizontal?
      Solution: The velocity gradient is calculated to be
                                         du Du 5 2 0
                                           ¼  ¼      ¼ 2500 m=ðs·mÞ
                                         dy Dy 0:002
 The force is the stress multiplied by the area:
                                               du
                               F¼t·A¼m            · A ¼ 0:1 · 2500 · 0:5 · 2 ¼ 250 N
                                               dy
 Check the units to make sure the units of the force are newtons. The viscosity of the oil was found in Fig. C.1.
10                                       BASIC INFORMATION                                       [CHAP. 1



 EXAMPLE 1.4 A machine creates small 0.5-mm-diameter bubbles of 20– C water. Estimate the pressure that
 exists inside the bubbles.
      Solution: Bubbles have two surfaces leading to the following estimate of the pressure:
                                             4s 4 · 0:0736
                                        p¼      ¼          ¼ 589 Pa
                                              r   0:0005

 where the surface tension was taken from Table C.1.



1.6   THERMODYNAMIC PROPERTIES AND RELATIONSHIPS
A course in thermodynamics and=or physics usually precedes a ﬂuid mechanics course. Those properties
and relationships that are presented in those courses that are used in our study of ﬂuids are included
in this section. They are of particular use when compressible ﬂows are studied, but they also ﬁnd
application to liquid ﬂows.
    The ideal gas law takes the two forms
                                         pV ¼ mRT        or       p ¼ rRT                            ð1:23Þ
where the pressure p and the temperature T must be absolute quantities. The gas constant R is found in
Table C.4 in App. C.
   Enthalpy is deﬁned as
                                      H ¼ mu~ þ pV          or    h ¼ u~ þ pv                        ð1:24Þ
where u~ is the speciﬁc internal energy. In an ideal gas we can use
                                            Z                       Z
                                      Dh ¼ cp dT        and    Du~ ¼ cv dT                           ð1:25Þ

where cp and cv are the speciﬁc heats also found in Table C.4. The speciﬁc heats are related to the gas
constant by
                                                    cp ¼ cv þ R                                      ð1:26Þ
The ratio of speciﬁc heats is
                                                            cp
                                                       k¼                                            ð1:27Þ
                                                            cv
For liquids and solids, and for most gases over relatively small temperature differences, the speciﬁc heats
are essentially constant and we can use
                                       Dh ¼ cp DT      and        Du~ ¼ cv DT                        ð1:28Þ
    For adiabatic (no heat transfer) quasi-equilibrium (properties are constant throughout the volume at
an instant) processes, the following relationships can be used for an ideal gas assuming constant speciﬁc
heats:

                                      T2   p ðk21Þ=k              p2   r k
                                         ¼ 2                         ¼ 2                             ð1:29Þ
                                      T1   p1                     p1   r1
The adiabatic, quasi-equilibrium process is also called an isentropic process.
   A small pressure wave with a relatively low frequency travels through a gas with a wave speed of
                                                       pﬃﬃﬃﬃﬃﬃ
                                                  c ¼ kRT                                     ð1:30Þ

    Finally, the ﬁrst law of thermodynamics will be of use in our study; it states that when a system,
a ﬁxed set of ﬂuid particles, undergoes a change of state from state 1 to state 2, its energy changes from
CHAP. 1]                                    BASIC INFORMATION                                              11



E1 to E2 as it exchanges energy with the surroundings in the form of work W1---2 and heat transfer Q1---2 .
This is expressed as
                                                  Q1---2 2 W1---2 ¼ E2 2 E1                            ð1:31Þ

To calculate the heat transfer from given temperatures and areas, a course on heat transfer is required, so
it is typically a given quantity in thermodynamics and ﬂuid mechanics. The work, however, is a quantity
that can often be calculated; it is a force times a distance and is often due to the pressure resulting in
                                                           Zl2
                                                W1---2 ¼         F dl
                                                            l1
                                                           Zl2               ZV2                       ð1:32Þ
                                                      ¼          pA dl ¼            p dV
                                                            l1                 V1

The energy E considered in a ﬂuids course consists of kinetic energy, potential energy, and internal
energy:
                                                               !
                                                 V2
                                         E¼m         þ gz þ u~                                ð1:33Þ
                                                  2
where the quantity in the parentheses is the speciﬁc energy e. (We use u~ to represent speciﬁc internal
energy since u is used for a velocity component.) If the properties are constant at an exit and an entrance
to a ﬂow, and there is no heat transferred and no losses, the above equation can be put in the form
                                                V22 p2     V2 p
                                                   þ þ z2 ¼ 1 þ 1 þ z1                                 ð1:34Þ
                                                2g g2      2g g1
This equation does not follow directly from Eq. (1.31); it takes some effort to derive Eq. (1.34). An
appropriate text could be consulted, but we will derive it later in this book. It is presented here as part of
our review of thermodynamics.




                                                Solved Problems

1.1    Show that the units on viscosity given in Table 1.1 are correct using (a) SI units and (b) English
       units.
            Viscosity is related to stress by
                                                                        dy
                                                            m¼t
                                                                        du
            In terms of units this is
                                           N m     N·s                         lb ft        lb-sec
                                    ½m ¼    2 m=s
                                                  ¼ 2                   ½m ¼     2 ft=sec
                                                                                          ¼
                                           m       m                           ft             ft2

1.2    If force, length, and time are selected as the three fundamental dimensions, what are the
       dimensions on mass?
            We use Newton’s second law, which states that
                                                             F ¼ ma
            In terms of dimensions this is written as
                                                       L                            FT 2
                                                 F¼M                    \M¼
                                                       T2                            L
12                                          BASIC INFORMATION                                              [CHAP. 1



1.3   The mean free path of a gas is l ¼ 0:225m=ðrd 2 Þ, where d is the molecule’s diameter, m is its mass,
      and r the density of the gas. Calculate the mean free path of air at 10 000 m elevation, the
      elevation where many commercial airplanes ﬂy. For an air molecule d ¼ 3:7 · 10210 m and m ¼
      4:8 · 10226 kg.
           Using the formula given, the mean free path at 10 000 m is
                                               4:8 · 10226
                             l ¼ 0:225 ·                         ¼ 8:48 · 1027 m or 0:848 mm
                                           0:4136ð3:7 · 10210 Þ2
           where the density was found in Table C.3.


1.4   A vacuum of 25 kPa is measured at a location where the elevation is 3000 m. What is the absolute
      pressure in millimeters of mercury?
           The atmospheric pressure at the given elevation is found in Table C.3. It is interpolated to be
                                                     1
                                       patm ¼ 79:84 2 ð79:84 2 61:64Þ ¼ 70:7 kPa
                                                     2
           The absolute pressure is then
                                       p ¼ pgage þ patm ¼ 225 þ 70:7 ¼ 45:7 kPa
           In millimeters of mercury this is
                                        p          45 700
                                  h¼        ¼                  ¼ 0:343 m or 343 mm
                                       rHg g ð13:6 · 1000Þ9:81


1.5   A ﬂat 30-cm-diameter disk is rotated at 800 rpm at a distance of 2 mm from a ﬂat, stationary
      surface. If SAE-30 oil at 20– C ﬁlls the gap between the disk and the surface, estimate the torque
      needed to rotate the disk.
           Since the gap is small, a linear velocity distribution will be assumed. The shear stress acting on the disk
           will be
                                         Du    ro          rð800 · 2p=60Þ
                                   t¼m      ¼m    ¼ 0:38 ·                ¼ 15 900r
                                         Dy     h              0:002
           where the viscosity is found from Fig. C.1 in App. C. The shear stress is integrated to provide the
           torque:
                           Z         Z                Z0:15                     0:154
                      T¼      r dF ¼    rt2pr dr ¼ 2p       15 900r3 dr ¼ 105 ·       ¼ 12:7 N·m
                            A         A                0                          4
           Note: The answer is not given to more signiﬁcant digits since the viscosity is known to only two
           signiﬁcant digits. More digits in the answer would be misleading.


1.6   Water is usually assumed to be incompressible. Determine the percentage volume change in 10 m3
      of water at 15– C if it is subjected to a pressure of 12 MPa from atmospheric pressure.
           The volume change of a liquid is found using the bulk modulus of elasticity (see Eq. (1.17)):

                                                Dp         12 000 000
                                    DV ¼ 2V        ¼ 210 ·            ¼ 20:0561 m3
                                                B          214 · 107
           The percentage change is
                                               V2 2 V1         20:0561
                                % change ¼             · 100 ¼         · 100 ¼ 20:561%
                                                 V1              10

           This small percentage change can usually be ignored with no signiﬁcant inﬂuence on results, so water is
           essentially incompressible.
CHAP. 1]                                    BASIC INFORMATION                                                     13



1.7    Water at 30– C is able to climb up a clean glass of 0.2-mm-diameter tube due to surface tension.
       The water-glass angle is 0– with the vertical (b ¼ 0 in Fig. 1.7). How far up the tube does the
       water climb?
            The height that the water climbs is given by Eq. (1.22). It provides
                                      4s cos b     4 · 0:0718 · 1:0
                                 h¼            ¼                    ¼ 0:147 m or 14:7 cm
                                        gD       ð996 · 9:81Þ0:0002
            where the properties of water come from Table C.1 in App. C.


1.8    Explain why it takes longer to cook potatoes by boiling them in an open pan on the stove in a
       cabin in the mountains where the elevation is 3200 m.
            Water boils when the temperature reaches the vapor pressure of the water; it vaporizes. The
            temperature remains constant until all the water is boiled away. The pressure at the given elevation is
            interpolated in Table C.3 to be 69 kPa. Table C.1 provides the temperature of slightly less than 90– C
            for a vapor pressure of 69 kPa, i.e., the temperature at which the water boils. Since it is less than the
            100– C at sea level, the cooking process is slower. A pressure cooker could be used since it allows a
            higher temperature by providing a higher pressure inside the cooker.


1.9    A car tire is pressurized in Ohio to 250 kPa when the temperature is 215– C. The car is driven to
       Arizona where the temperature of the tire on the asphalt reaches 65– C. Estimate the pressure in
       the tire in Arizona assuming no air has leaked out and that the volume remains constant.
            Assuming the volume does not change, the ideal gas law requires
                                                   p2 mRV1 T2 T2
                                                     ¼       ¼
                                                   p1 mRV2 T1 T1

                                        T2                 423
                            \ p2 ¼ p1      ¼ ð250 þ 100Þ ·     ¼ 574 kPa abs or 474 kPa gage
                                        T1                 258
            since the mass also remains constant. (This corresponds to 37 lb=in2 in Ohio and 70 lb=in2 in Arizona.)


1.10   A farmer applies nitrogen to a crop from a tank pressurized to 1000 kPa absolute at a
       temperature of 25– C. What minimum temperature can be expected in the nitrogen if it is released
       to the atmosphere?
            The minimum exiting temperature occurs for an isentropic process (see Eq. (1.29)), which is
                                         p2 ðk21Þ=k          100 0:4=1:4
                              T2 ¼ T1               ¼ 298 ·              ¼ 154 K or 2 119– C
                                         p1                 1000
            Such a low temperature can cause serious injury should a line break and nitrogen impact the farmer.




                                      Supplementary Problems

1.11   There are three basic laws in our study of ﬂuid mechanics: the conservation of mass, Newton’s second law,
       and the ﬁrst law of thermodynamics. (a) State an integral quantity for each of the laws and (b) state a
       quantity deﬁned at a point for each of the laws.
14                                           BASIC INFORMATION                                           [CHAP. 1



Dimensions, Units, and Physical Quantities

1.12   Verify the SI units presented in Table 1.2 for the following:
       (a) Force                 (b) Speciﬁc weight                (c) Surface tension
       (d) Torque                (e) Viscosity                     ( f ) Work

1.13   Verify the dimensions presented in Table 1.2 for the following:
       (a) Force                 (b) Speciﬁc weight                (c) Surface tension
       (d) Torque                (e) Viscosity                     ( f ) Work

1.14   Select the F–L–T system of dimensions and state the dimensions on the following:
       (a) Force                 (b) Speciﬁc weight                (c) Surface tension
       (d) Torque                (e) Viscosity                     ( f ) Work

1.15   An equation that provides the ﬂow rate in an open channel is given by
                                                   2   1
                                        Q ¼ kAR 3 S 2
       where k is a constant, A is the area of the channel, R is a radius, and S is a slope.
       Determine both the dimensions and the SI units on k.

1.16   Express the following using powers rather than preﬁxes:
       (a) 200 cm2              (b) 500 mm3                (c) 10 mm
       (d) 32 MPa               (e) 400 kN                 ( f ) 5 nN

1.17   Express the following using preﬁxes rather than powers:
       (a) 2 · 1028 m           (b) 5 · 108 m              (c) 2 · 1025 Pa
       (d) 32 · 108 Pa          (e) 4 · 1026 N             ( f ) 8 · 1011 N


1.18   Quantities are often given in units that are unacceptable when using the SI system of units. Convert each of
       the following to acceptable SI units:
       (a) 60 mi=h              (b) 35 lb=in2              (c) 2 g=cm3
       (d) 22 slug=h            (e) 20 ft3=min             ( f ) 50 kW·h


1.19   What force is needed to accelerate a 1500-kg car at 3 m=s2:
       (a) on the horizontal?                    (b) on a 20– incline?

1.20   An astronaut weighs 850 N on earth. Calculate the weight of the astronaut on the moon, where g ¼ 5.4 ft=sec2.


1.21   Estimate the mean free path of air molecules, using information from Solved Problem 1.3, at an elevation of
       (a) 750 m                (b) 40 000 m               (c) 80 000 m



Pressure and Temperature

1.22   A pressure of 28 kPa is measured at an elevation of 2000 m. What is the absolute pressure in
       (a) kPa                  (b) lb=in2                 (c) mm of Hg              (d) ft of water
CHAP. 1]                                    BASIC INFORMATION                                                      15


1.23   A gage reads a vacuum of 24 kPa. What is the absolute pressure at
       (a) sea level            (b) 4000 m                (c) 8000 m


1.24   The equation pðzÞ ¼ p0 e2gz=RT0 is a good approximation to the pressure in the atmosphere. Estimate the
       pressure at z ¼ 6000 m using this equation and calculate the percent error using the more accurate value
       found in Table C.3. Assume p0 ¼ 100 kPa and T0 ¼ 15– C.

1.25   A pressure of 20 kPa and a shear stress of 80 Pa act on a 0.8-m2-ﬂat surface. Calculate the normal force Fn,
       the tangential shear force Ft, and the total force F acting on the surface. Also, calculate the angle the total
       force makes with respect to a normal coordinate.

1.26   A temperature of 20– C is measured at a certain location. What is the temperature in
       (a) kelvins            (b) degrees Fahrenheit                 (c) degrees Rankine




Properties of Fluids

1.27   A ﬂuid mass occupies 2 m3. Calculate the density, speciﬁc weight, and speciﬁc gravity if the ﬂuid mass is
       (a) 4 kg                 (b) 8 kg                  (c) 15 kg


1.28   A formula that provides a good estimate of the density in kg=m3 of water is
                                                                    ðT 2 4Þ2
                                                  rwater ¼ 1000 2
                                                                      180
       where the temperature T is in degrees Celsius. Use this formula and ﬁnd the density of water at 80– C.
       What is the error?


1.29   The speciﬁc weight of a ﬂuid is 11 200 N=m3. Calculate the mass contained in 2 m3
       (a) Using the standard gravity.
       (b) Using the maximum gravity on the earth’s surface.
       (c) Using the minimum gravity on the earth’s surface.


1.30   The speciﬁc gravity of mercury is given by the formula

                                                   SHg ¼ 13:6 2 0:0024T

       where the temperature is in degrees Celsius. What is the speciﬁc weight of mercury at 45– C? Calculate the
       error if SHg ¼ 13.6 were used at 45– C.

1.31   A viscometer, used to measure the viscosity of a liquid, is composed of two 12-cm-long concentric cylinders
       with radii 4 and 3.8 cm. The outer cylinder is stationary and the inner one rotates. If a torque of 0.046 N·m
       is measured at a rotational speed of 120 rpm, estimate the viscosity of the liquid. Neglect the contribution to
       the torque from the cylinder ends and assume a linear velocity proﬁle.

1.32   Water at 20– C ﬂows in a 0.8-cm-diameter pipe with a velocity distribution of uðrÞ ¼ 5ð1 2 r2 =16 · 1026 Þ m=s.
       Calculate the shear stress on (a) the pipe wall, (b) at a radius where r ¼ 0.2 cm, and (c) at the centerline of
       the pipe.
16                                           BASIC INFORMATION                                              [CHAP. 1



1.33   SAE-30 oil at 30– C ﬁlls the gap between a 40-cm-diameter ﬂat disk rotating 0.16 cm above a ﬂat surface.
       Estimate the torque needed to rotate the disk at
       (a) 200 rpm              (b) 600 rpm               (c) 1200 rpm


1.34   A 2-m-long, 4-cm-diameter shaft rotates inside an equally long 4.02-cm-diameter cylinder. If SAE-10W oil at
       25– C ﬁlls the gap between the concentric cylinders, determine the torque and horsepower needed to rotate
       the shaft at 1200 rpm.


1.35   A 0.1-m3 volume of water is observed to be 0.0982 m3 after a pressure is applied. What is that pressure?


1.36   How long would it take a small wave to travel under 22– C water a distance of 800 m?


1.37   The coefﬁcient of thermal expansion aT allows the expansion of a liquid to be determined using the equation
       DV ¼ aTVDT. Calculate the decrease in 2 m3 of 40– C water if the temperature is lowered by 10– C. What
       pressure would be needed to cause the same decrease in volume?


1.38   Estimate the pressure inside a droplet of 20– C water and a bubble of 20– C water if their diameters are
       (a) 40 mm                (b) 20 mm                 (c) 4 mm


1.39   How high would 20– C water climb in a 24-mm-diameter vertical capillary tube if it makes an angle of 20–
       with the wall of the tube?


1.40   Mercury makes an angle of 130– with respect to the vertical when in contact with clean glass. How far will
       mercury depress in a clean, 10-mm-diameter glass tube if sHg ¼ 0.467 N=m.


1.41   A steel needle of length L and radius r will ﬂoat in water if carefully placed. Write an equation that relates
       the various variables for a ﬂoating needle assuming a vertical surface tension force.


1.42   Using the equation developed in Supplementary Problem 1.41, determine if a 10-cm-long, 1-mm-diameter
       steel needle will ﬂoat in 20– C water. rsteel ¼ 7850 kg=m3.


1.43   Derive an equation that relates the vertical force T needed to just lift a thin wire loop from a liquid assuming
       a vertical surface tension force. The wire radius is r and the loop diameter is D. Assume D q r.




Thermodynamic Properties and Relationships

1.44   Two kilograms of 40– C air is contained in a 4-m3 volume. Calculate the pressure, density, speciﬁc volume,
       and speciﬁc weight.

1.45   The temperature outside a house is – 20– C and inside it is 20– C. What is the ratio of the density of the
       outside air to the density of the inside air? Would inﬁltration, which results from cracks around the windows,
       doors, and siding, etc., occur even with no wind causing a pressure difference?

1.46   A car with tires pressurized to 240 kPa (35 lb=in2) leaves Phoenix with the tire temperature at 50– C. Estimate
       the tire pressure (in kPa and lb=in2) when the car arrives in Alaska with a tire temperature of 230– C.
CHAP. 1]                                          BASIC INFORMATION                                                       17


1.47   Estimate the mass and weight of the air contained in a classroom where Thermodynamics is taught. Assume
       the dimensions to be 3.2 m · 8 m · 20 m.

1.48   Calculate the weight of the column of air contained above a 1-m2 area of atmospheric air from sea level to
       the top of the atmosphere.

1.49   A 100 kg body falls from rest from a height of 100 m above the ground. Calculate its maximum velocity
       when it hits the ground. (a) Use the maximum value for gravity, (b) use the minimum value for gravity, and
       (c) use the standard value for gravity. (The minimum value is at the top of Mt Everest and the maximum
       value is at bottom of the lowest trench in the ocean.)

1.50   Air expands from a tank maintained at 18– C and 250 kPa to the atmosphere. Estimate its minimum
       temperature as it exits.

1.51   Air at 22– C is received from the atmosphere into a 200 cm3 cylinder. Estimate the pressure and temperature
       if it is compressed isentropically to 10 cm3.

1.52   Two cars, each with a mass of 6000 kg, hit head on each traveling at 80 km=h. Estimate the increase in
       internal energy absorbed by the materials in each car.

1.53   A 6500-kg car is traveling at 90 km=h and suddenly brakes to a stop. If the four brake disks absorb all the
       energy, estimate the maximum increase in temperature of those disks, assuming the disks absorb the energy
       equally. The 0.7-cm-thick, 30-cm-diameter disks are made of steel. Use rsteel ¼ 7850 kg=m3 and
       ðcp Þsteel ¼ 0:5 kJ=kg·– C.

1.54   Calculate the speed of sound in: (a) air at 0– C, (b) nitrogen at 20– C, (c) hydrogen at 10– C, (d) air at 100– C,
       and (e) oxygen at 50– C.

1.55   Lightning is observed and thunder is heard 1.5 s later. About how far away did the lightning occur?




                                 Answers to Supplementary Problems

1.11   (a) The mass ﬂux into a jet engine; the force of air on a window; the heat transfer through a wall. (b) The
       velocity V; the pressure p; the temperature T.

1.12   (a)     F ¼ ma. N ¼ kg·m=s2 , etc.

1.13   (a)     F ¼ ma. F ¼ ML=T 2, etc.

1.14   (b)     g ¼ weight=volume ¼ F=L3 , etc.

       L1 3 =T, m1 3 =s
           =        =
1.15

1.16   (a) 2 · 1022 m2             (b)    5 · 1027 m3        (c)   1025 m    (d) 32 · 106 Pa        (e)    4 · 105 N
       ð f Þ 5 · 1029 N

1.17   (a)     20 nm       (b)     500 Mm           (c)   20 mm (d)     320 MPa       (e)   4 mN          (f )   800 GN

1.18   (a) 96.56 m=s         (b)         241 kPa       (c)   2000 kg=m3       (d)   0.0892 kg=s
       (e) 1:573 · 1024 m3 =s              ( f ) 80 MJ

1.19   (a)     4500 N        (b)    9533 N
18                                                         BASIC INFORMATION                                 [CHAP. 1



1.20   468 N

1.21   (a) 0.000308 mm                   (b)    0.0877 mm                (c)   17.5 mm

1.22   (a) 107.5             (b)    15.6             (c)    806          (d)   36

1.23   (a) 77.3 kPa                (b) 37.6 kPa              (c) 11.65 kPa

1.24   49.1 kPa, 4.03%

1.25   16 kN, 64 N, 0:229–

1.26   293 K, 68– F, 528– R

1.27   (a) 2 kg=m3, 19.62 N=m3, 0.002                        (b)    4 kg=m3, 39.24 N=m3, 0.004
       (c) 7.5 kg=m3, 73.6 N=m3, 0.0075

1.28   968 kg=m3, 20.4%

1.29   (a) 2283 kg             (b)       2279 kg             (c)   2293 kg

1.30   13.49, 20.8%

1.31   0.1628 N·s=m2

1.32   (a) 2.5 N=m2                (b)    1.25 N=m2                (c)   0 N=m2

1.33   (a) 7.2 N·m, 0.2 hp                 (b)       21 N·m, 1.81 hp                (c)   43 N·m, 7.2 hp

1.34   0.88 N·m, 0.15 hp

1.35   37.8 MPa

1.36   0.539 s

1.37   20.0076 m3, 7.98 MPa

1.38   (a) 3680 Pa, 7360 Pa                    (b)    36.8 Pa, 73.6 Pa               (c) 7.36 Pa, 14.72 Pa

1.39   1.175 m

1.40   20.900 m

1.41   2s > rpr2

1.42   Yes

1.43   pDð2s þ gwire pr2 Þ

1.44   45 kPa, 0.5 kg=m3, 2 m3=kg, 4.905 N=m3

1.45   1.158, yes

1.46   156 kPa, 22.7 lb=in2
CHAP. 1]                                  BASIC INFORMATION                              19


1.47   609 kg, 5970 N

1.48   100 kN

1.49   44.34 m=s, 44.20 m=s, 44.29 m=s

1.50   269.6– C

1.51   6630 kPa, 705– C

1.52   1.48 MJ

1.53   261– C

1.54   (a)   331 m=s      (b)   349 m=s     (c) 1278 m=s   (d)   387 m=s   (e) 342 m=s

1.55   515 m
                                        Chapter 2


Fluid Statics

2.1   INTRODUCTION
In ﬂuid statics, there is no relative motion between ﬂuid particles, so there are no shear stresses present (a
shear results from a velocity gradient). This does not mean that the ﬂuid particles are not moving, but only
that they are not moving relative to one another; if they are moving, as in a can of water rotating about its
axis, they move as a solid body. The only stress involved in ﬂuid statics is the normal stress, the pressure. It
is the pressure acting over an area that gives rise to the forces in problems involving ﬂuid statics. The three
types of problems that are presented in this chapter are: (1) ﬂuids at rest, as in the design of a dam;
                                                                                         -
(2) ﬂuids undergoing linear acceleration, as in a rocket; and (3) ﬂuids that are rotating about an axis.


2.2   PRESSURE VARIATION
Pressure is a quantity that acts at a point. But, does it have the same magnitude in all directions at the
point? To answer this question, consider Fig. 2.1. A pressure p is assumed to act on the hypotenuse and
different pressures px and py on the other two sides of the inﬁnitesimal element that has a uniform depth
dz into the paper. The ﬂuid particle occupying the ﬂuid element could be accelerating, so we use
Newton’s second law in both the x- and y-directions:
                          P                                             dx dy dz
                              Fx ¼ max : px dy dz 2 p ds dz sin b ¼ r            ax
                                                                            2
                                                                                                           ð2:1Þ
                          P                                               dx dy dz    dx dy dz
                              Fy ¼ may :    py dx dz 2 p ds dz cos b 2 rg          ¼r          ay
                                                                             2           2
                                           y




                                                                   p dsdx
                                                        ds
                          px dy d          dy


                                                       g dV

                                                              dx
                                                                                         x


                                                         py dxd

                               Figure 2.1 Pressure acting on an inﬁnitesimal element.

                                                              20
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 2]                                                FLUID STATICS                                            21


                           dx dy dz
recognizing that dV ¼               . From Fig. 2.1, we have
                              2
                                           dy ¼ ds sin b                 dx ¼ ds cos b                         ð2:2Þ
Substituting these into Eq. (2.1), we obtain
                                                                   dx
                                                         px 2 p ¼ r   a
                                                                    2 x
                                                                                                               ð2:3Þ
                                                                   dy
                                                         py 2 p ¼ r ðay þ gÞ
                                                                    2
Here we see that the quantities on the right-hand sides are inﬁnitesimal, i.e., extremely small, and can be
neglected* so that
                                                               px ¼ py ¼ p                                     ð2:4Þ
Since the angle b is arbitrary, this holds for all angles. We could have selected dimensions dx and dz and
arrived at px ¼ pz ¼ p. So, the pressure is a scalar function that acts equally in all directions at a point in
our applications to ﬂuid statics.
     In the preceding discussion, pressure only at a point was considered. The pressure variation from
point to point will now be investigated. The ﬂuid element of depth dy in Fig. 2.2 can be accelerating as in
a rotating container. Newton’s second law provides
                                             @p
                                p dy dz 2 p þ   dx dy dz ¼ rg dx dy dz ax
                                             @x
                                                                                                               ð2:5Þ
                                             @p
                                p dx dy 2 p þ dz dx dy ¼ 2rg dx dy dz þ rg dx dy dz az
                                             @z
If the element was shown in the y-direction also, the y-component equation would be
                                                               @p
                                              p dx dz 2 p þ       dy dx dz ¼ rg dx dy dz ay                    ð2:6Þ
                                                               @y
Equations (2.5) and (2.6) reduce to
                                     @p                    @p                       @p
                                        ¼ 2rax                ¼ 2ray                   ¼ 2rðaz þ gÞ            ð2:7Þ
                                     @x                    @y                       @z

                                                                       p+      d dxdy


                        (vertical)

                                                                                a
                                                    d
                                     p dy d                                              p+       dx dyd
                                                                                              x


                                                                        g dxdyd

                                                          dx



                                                                      p dxdy

                                                                                                           x

                                      Figure 2.2 Forces acting on an element of ﬂuid.


*
    Mathematically, we could use an element with sides Dx and Dy and let Dx ! 0 and Dy ! 0:
22                                              FLUID STATICS                                            [CHAP. 2



Finally, the pressure differential can be written as
                                              @p      @p      @p
                                         dp ¼    dx þ dy þ dz
                                              @x      @y      @z
                                            ¼ 2rax dx 2 ray dy 2 rðaz þ gÞdz                                  ð2:8Þ
This can be integrated to give the desired difference in pressure between speciﬁed points in a ﬂuid.
    In a ﬂuid at rest, there is no acceleration so that the pressure variation from Eq. (2.8) is
                                       dp ¼ 2rg dz           or        dp ¼ 2g dz                             ð2:9Þ
This implies that as the elevation z increases, the pressure decreases, a fact that we are aware of in nature;
the pressure increases with depth in the ocean and decreases with height in the atmosphere.
    Consider the pressure variation in a liquid in which g is constant. Equation (2.9) allows us to write
                                                       Dp ¼ 2g Dz                                            ð2:10Þ
where Dp is the pressure change over the elevation change Dz. If we desire an expression for the pressure
at a distance h below a free surface where the pressure is zero, it would be
                                                         p ¼ gh                                              ð2:11Þ
where h ¼ 2Dz. Equation (2.11) is used to convert pressure to an equivalent height of a liquid;
atmospheric pressure is often expressed as millimeters of mercury (the pressure at the bottom of a 30-in
column of mercury is the same as the pressure at the earth’s surface due to the entire atmosphere).
    If the pressure variation in the atmosphere is desired, then Eq. (2.9) would be used with the ideal gas
law p ¼ rRT to give
                                             p               Zp dp      g Zz dz
                                     dp ¼ 2    g dz or             ¼2                                ð2:12Þ
                                            RT                p0 p      R 0 T
where p0 is the pressure at z ¼ 0. If the temperature could be assumed constant over the elevation
change, then the above equation could be integrated to obtain
                                                      p ¼ p0 e2gz RT
                                                                  =
                                                                                                             ð2:13Þ
In the troposphere (between the earth’s surface and to a height of about 10 km) where the temperature
(in kelvins) is T ¼ 288 2 0:0065z, Eq. (2.12) can be integrated to give the pressure variation.

 EXAMPLE 2.1 Convert 230 kPa to millimeters of mercury, inches of mercury, and feet of water.
    Solution: Equation (2.11) is applied using the speciﬁc weight of mercury, which is 13:6gwater ,
                                        p ¼ gh     230 000 ¼ ð13:6 · 9800Þh
                                     \ h ¼ 1:726 m or 1726 mm of mercury
                                      ft     in
 This is equivalent to 1:726 m · 3:281 · 12 ¼ 68:0 in of mercury. Returning to Eq. (2.11) ﬁrst convert kPa to
      2                               m       ft
 lb=ft :
                                              lb=ft2
                               230 kPa · 20:89       ¼ 4805 psf       4805 ¼ 62:4h
                                               kPa
                                                         \ h ¼ 77:0 ft of water
 We could have converted meters of mercury to feet of mercury and then multiplied by 13.6 to obtain feet of water.


2.3   MANOMETERS
A manometer is an instrument that uses a column of liquid to measure pressure, rather than using a
pressure gage. Let us analyze a typical U-tube manometer attached to a pipe, as shown in Fig. 2.3, to
illustrate how to interpret a manometer; this one uses water and mercury. There are several ways to
analyze a manometer; this is one way. Identify two points that have the same pressure, i.e., that are at the
same elevation in the same liquid, such as points 2 and 3. Then we can write
CHAP. 2]                                                FLUID STATICS                                             23



                                                                        p2 ¼ p3
                                                                                                              ð2:14Þ
                                                        p1 þ gwater h ¼ p4 þ gHg H
Since point 4 is shown to be open to the atmosphere, the pressure there is zero gage pressure: p4 ¼ 0.
Thus, the manometer would measure the pressure p1 in the pipe to be
                                                           p1 ¼ gHg H 2 gwater h                              ð2:15Þ

Note that a point is positioned at all interfaces. Some manometers will have several ﬂuids with several
interfaces. Each interface should be located with a point when analyzing the manometer.



                                     water                                              4


                                                                                 H
                                                                                                mercury
                               1
                                                                         h
                                             Pipe            2                          3




                          Figure 2.3         A U-tube manometer using water and mercury.


 EXAMPLE 2.2 A manometer connects an oil pipeline and a water pipeline as shown in Fig. 2.4. Determine
 the difference in pressure between the two pipelines using the readings on the manometer. Use Soil ¼ 0:86 and
 SHg ¼ 13:6:
                                                                                            Air

                             Water                                           4
                                                                                            5
                                                                 8 cm
                              1                                                  6 cm
                                                            4 cm                                      6
                                                    2                        3

                                     Mercury                                                    Oil

                                                            Figure 2.4

      Solution: The points of interest have been positioned on the manometer in Fig. 2.4. The pressure at point 2
 is equal to the pressure at point 3:

                                                                   p2 ¼ p3
                                         pwater þ gwater · 0:04 ¼ p4 þ gHg · 0:08

 Note that the heights must be in meters. The pressure at point 4 is essentially the same as that at point 5, since
 the speciﬁc weight of air is negligible compared with that of the oil. So,
                                                        p4 ¼ p5
                                                           ¼ poil 2 goil · 0:06
 Finally,
                 pwater 2 poil ¼ 2gwater · 0:04 þ gHg · 0:08 2 goil · 0:06
                               ¼ 29800 · 0:04 þ ð13:6 · 9800Þ0:08 2 ð0:86 · 9800Þ0:06 ¼ 10 780 Pa
24                                                       FLUID STATICS                                            [CHAP. 2



2.4     FORCES ON PLANE AND CURVED SURFACES
In engineering designs where a liquid is contained by surfaces, such as a dam, the side of a ship, a water
tank, or a levee, it is necessary to calculate the forces and their locations due to the liquid on the various
surfaces. The liquid is most often water, but it could also be oil or some other liquid. We will develop
equations for forces on plane surfaces, but forces on curved surfaces can be determined using the same
equations. Examples will illustrate.
     Consider the general surface shown in Fig. 2.5. The liquid acts on the plane area shown as a section
of the wall; a top view gives additional detail of the geometry. The force on the plane surface is due to the
pressure p ¼ gh acting over the area, i.e.,
                                           Z            Z
                                       F ¼ p dA ¼ g h dA
                                                    A                  A
                                                                            Z
                                                              ¼ g sin a          y dA ¼ g yA sin a                  ð2:16Þ
                                                                             A

where y is the distance* to the centroid of the plane area; the centroid is identiﬁed as the point C.
Equation (2.16) can also be expressed as
                                                                      F ¼ ghA                                       ð2:17Þ
where h is the vertical distance to the centroid. Since gh is the pressure at the centroid, we see that the
magnitude of the force is the area multiplied by the pressure that acts at the centroid of the area. It does
not depend on the angle a of inclination. But, the force does not, in general, act at the centroid.

                  Free surface p = 0                                               O


                                                                                            x
                                          F
                                                          h
                                                               h dA


                                                                                                              O
                                       Inclined
                                       plane area                                      dy
                                                                                                     y
                                                                                            dA
                                                                                   C                 y
                                                                            c.p.

                                                                                                         yp
                                                        Inclined
                                                        plane area
                                                        (top view)


                                       Figure 2.5 The force on an inclined plane area.

      Let us assume that the force acts at some point called the center of pressure, located by the point
ðxp , yp Þ. To determine where the force acts, we must recognize that the sum of the moments of all the
inﬁnitesimal forces must equal the moment of the resultant force, i.e.,
                                                 Z
                                         yp F ¼ g yh dA
                                                                A
                                                                      Z
                                                         ¼ g sin a         y2 dA ¼ gIx sin a                        ð2:18Þ
                                                                       A


*
                    R
    Recall that yA ¼ A y dA.
CHAP. 2]                                              FLUID STATICS                                               25



where Ix is the second moment* of the area about the x-axis. The parallel-axis transfer theorem states that
                                                              Ix ¼ I þ Ay2                                     ð2:19Þ
where I is the moment of the area about its centroidal axis. So, substitution of Eq. (2.19) into Eq. (2.18)
and using the expression for F from Eq. (2.16) results in
                                                                         I
                                                              yp ¼ y þ                                         ð2:20Þ
                                                                         Ay
This helps us to locate where the force acts. For a horizontal surface, the pressure is uniform over the
area so that the pressure force acts at the centroid of the area. In general, yp is greater than y. The
centroids and second moments of various areas are presented in books on Statics or Strength of
Materials. They will be given in the problems in this book.
     If the top of the inclined area in Fig. 2.5 was at the free surface, the pressure distribution on that area
would be triangular and the force F due to that pressure would act through the centroid of that
triangular distribution, i.e., two-thirds the distance from the top of the inclined area.
     To locate the x-coordinate xp of the center of pressure, we use
                                                               Z
                                                 xp F ¼ g sin a xy dA
                                                                         A
                                                              ¼ gIxy sin a                                     ð2:21Þ
where Ixy is the product of inertia of the area. Using the transfer theorem for the product of inertia, the
x-location of the center of pressure is
                                                                         I xy
                                                              xp ¼ x þ                                         ð2:22Þ
                                                                         Ay
    The above equations also allow us to calculate the forces acting on curved surfaces. Consider the
curved gate shown in Fig. 2.6(a). The objective of this problem would be to ﬁnd the force P of the gate on
the vertical wall and the forces on the hinge. From the free-body diagrams in Fig. 2.6(b) and 2.6(c), the
desired forces can be calculated provided the force FW , which acts through the center of gravity of
the area, can be found. The forces F1 and F2 can be found using Eq. (2.17). The forces FH and FV are the
horizontal and vertical components of the force of the water acting on the gate. If a free-body diagram of
only the water above the gate was identiﬁed, then we would see that




                        Water
                                                                 F2

                                                                                P
                                                                                                           P

                                            F1                  FW                                    FV
             Hinge                                                                       FH

                                Curved           Fx                                 Fx
                                surface                  Fy                               Fy



                  (a)                                  (b)                                     (c )

        Figure 2.6 Forces on a curved surface: (a) the gate, (b) the water and the gate, and (c) the gate only.

*
    Recall the second moment of a rectangle about its centroidal axis is bh3 =12.
26                                                   FLUID STATICS                                       [CHAP. 2



                                            FH ¼ F1         and           FV ¼ F2 þ FW                       ð2:23Þ
     Often, the gate is composed of a quarter circle. In that case, the problem can be greatly simpliﬁed
by recognizing that the forces FH and FV , when added together as a vector, must act through the
center of the quarter circle, since all the inﬁnitesimal forces due to the water pressure on the gate that
makes up FH and FV act through the center. So, for a gate that has the form of a part of a circle, the
force components FH and FV can be located at the center of the circular arc. An example will
illustrate.
     A ﬁnal application of forces on surfaces involves buoyancy, i.e., forces on ﬂoating bodies.
Archimedes’ principle states that there is a buoyancy force on a ﬂoating object equal to the weight of the
displaced liquid, written as
                                                       FB ¼ gVdisplaced liquid                               ð2:24Þ

Since there are only two forces acting on a ﬂoating body, they must be equal and opposite and act
through the center of gravity of the body (the body could have density variations) and the centroid of the
liquid volume. The body would position itself so that the center of gravity and centroid would be on a
vertical line. Questions of stability arise (does the body tend to tip?), but are not considered here.



 EXAMPLE 2.3 A 60-cm square gate has its top edge 12 m below the water surface. It is on a 45– angle and its
 bottom edge is hinged as shown in Fig. 2.7(a). What force P is needed to just open the gate?




                                                                                    P
                                 Water
                                            P
                                                                                              y
                                                                           F
                                                                                                  yp


                              Hinge                                  Fx
                                                                                    d
                                           45°                                 Fy


                               (a)                                                      (b)

                                                        Figure 2.7
      Solution: The ﬁrst step is to sketch a free-body diagram of the gate so the forces and distances are clearly
 identiﬁed. It is done in Fig. 2.7(b). The force F is calculated to be

                                F ¼ ghA
                                     ¼ 9810 · ð12 þ 0:3 sin 45– Þð0:6 · 0:6Þ ¼ 43 130 N

 We will take moments about the hinge so that it will not be necessary to calculate the forces Fx and Fy . Let us
 ﬁnd the distance d where the force F acts from the hinge:

                                               h      12 þ 0:3 sin 45–
                                       y¼           ¼                  ¼ 17:27 m
                                            sin 45–       sin 45–

                                            I             0:6 · 0:63 =12
                               yp ¼ y þ        ¼ 17:27 þ                  ¼ 17:272 m
                                            Ay           ð0:6 · 0:6Þ17:27

                                                 \ d ¼ y þ 0:3 2 yp > 0:3 m
CHAP. 2]                                         FLUID STATICS                                                         27


 Note: The distance yp 2 y is very small and can be neglected because of the relatively large 12 m height compared
 with the 0.6 m dimension. So, the force P can be calculated:
                                                     0:3F
                                                P¼        ¼ 21 940 N
                                                      0:6
 Note again that all dimensions are converted to meters.


 EXAMPLE 2.4 Consider the gate in Fig. 2.8 to be a quarter circle of radius 80 cm with the hinge 8 m below the
 water surface. If the gate is 1 m wide, what force P is needed to hold the gate in the position shown?
      Solution: Let us move the forces FH and FV of Fig. 2.6(c) to the center of the circular arc, as shown in
 Fig. 2.8. This is allowed since all the force components that make up the resultant vector force FH þ FV pass
 through the center of the arc. The free-body diagram of the gate would appear as in Fig. 2.8. If moments are
 taken about the hinge, Fx , Fy , and FV produce no moments. So,
                                   P ¼ FH                                                     FV
 a rather simple result compared with the situation if we used                  FH                              P
 Fig. 2.6(c). The force P is

                   P ¼ ghA ¼ 9810 · ð8 2 0:4Þð0:8 · 1Þ
                                                                                                   Water
                           ¼ 93 200 N
                                                                                     Hinge
 where FH ¼ F1 and F1 is the force on the vertical area shown in
 Fig. 2.6(b).                                                                   Fx
                                                                                              Fy

                                                                                                   Figure 2.8


2.5   ACCELERATING CONTAINERS
The pressure in a container accelerating with components ax and az is found by integrating Eq. (2.8)
between selected points 1 and 2 to obtain
                                     p2 2 p1 ¼ 2rax ðx2 2 x1 Þ 2 rðaz þ gÞðz2 2 z1 Þ                                ð2:25Þ
If points 1 and 2 lie on a constant-pressure line (e.g., a free surface) such that p2 ¼ p1 , as in Fig. 2.9, and
az ¼ 0, Eq. (2.25) allows an expression for the angle a:

                                                0 ¼ 2rax ðx2 2 x1 Þ 2 rgðz2 2 z1 Þ
                                                    z 2 z2    a                                                     ð2:26Þ
                                            tan a ¼ 1       ¼ x
                                                    x2 2 x1    g
If az is not zero, then it is simply included. The above equations allow us to make calculations involving
linearly accelerating containers. The liquid is assumed to be not sloshing; it is moving as a rigid body. An
example will illustrate.

                               1




                                                             2
                                                                                         ax




                                   Figure 2.9   A linearly accelerating container.
28                                             FLUID STATICS                                                           [CHAP. 2



    To determine the pressure in a rotating container, Eq. (2.8) cannot be used, and so it is necessary to
derive the expression for the differential pressure. Refer to the inﬁnitesimal element of Fig. 2.10. A top
view of the element is shown. Newton’s second law applied in the radial r-direction provides,
remembering that ar ¼ rO2 ,
                             @p                               dy            dy
            pr dy dz 2 p þ      dr ðr þ drÞdy dz þ p dr dz sin þ p dr dz sin ¼ rr dy dr dz rO2                           ð2:27Þ
                             @r                               2             2
Expand the second term carefully, use sin dy=2 ¼ dy=2, neglect higher-order terms, and simplify
Eq. (2.27) to
                                                     @p
                                                        ¼ rrO2                                                           ð2:28Þ
                                                     @r


                                                                            d /2            p+        dr (r+ dr) d d
                                                                                                   r
                                                           p drd                                   Volume = r d drd
                                                           y                                         sin d = d
                                                                                           d /2

                                                                            prd d          p drd
                                      dr                           r
                                  r        d

                                                                                       x

               Figure 2.10 The rotating container and the top view of the inﬁnitesimal element.

This provides the pressure variation in the radial direction and our usual dp ¼2rg dz provides the
pressure variation in the z-direction. Holding z ﬁxed, the pressure difference from r1 to r2 is found by
integrating Eq. (2.28):

                                                           rO2 2
                                               p2 2 p1 ¼      ðr 2 r12 Þ                                                 ð2:29Þ
                                                            2 2
    If point 1 is at the center of rotation so that r1 ¼ 0, then p2 ¼ rO2 r22 =2. If the distance from point 2
to the free surface is h as shown in Fig. 2.11, so that p2 ¼ rgh, we see that

                                                            O2 r22
                                                      h¼                                                                 ð2:30Þ
                                                             2g
which is a parabola. The free surface is a paraboloid of revolution. An example illustrates the use of the
above equations.




                                                     1                                 h
                                                                       r2
                                                                                   2




                             Figure 2.11 The free surface in a rotating container.
CHAP. 2]                                          FLUID STATICS                                                           29



 EXAMPLE 2.5 A 120-cm-long tank contains 80 cm of water and 20 cm of air maintained at 60 kPa above the
 water. The 60-cm-wide tank is accelerated at 10 m=s2. After equilibrium is established, ﬁnd the force acting on
 the bottom of the tank.
      Solution: First, sketch the tank using the information given in the problem statement. It appears as in
 Fig. 2.12. The distance x can be related to y by using Eq. (2.26):

                                               ax    10   y
                                     tan a ¼      ¼     ¼           \ y ¼ 1:019x
                                               g    9:81 x

                                                                x
                            20 cm
                                                           40        Air       y
                                     80 cm        Water                            ax


                                                120 cm
                                 A                                             B

                                                    Figure 2.12

 Equate the area of the air before and after to ﬁnd either x or y:
                               1     1:019 2
                     120 · 20 ¼ xy ¼      x               \ x ¼ 68:63 cm and       y ¼ 69:94 cm
                               2       2
 The pressure will remain unchanged in the air above the water since the air volume does not change. The
 pressures at A and B are then (use Eq. (2.25))

                      pA ¼ 60 000 þ 1000 · 10 · ð1:20 2 0:6863Þ þ 9810 · 1:0 m ¼ 74 900 Pa
                      pB ¼ 60 000 þ 9810 · ð1:00 2 0:6994Þ ¼ 62 900 Pa

 The average pressure on the bottom is ðpA þ pB Þ=2. Multiply the average pressure by the area to ﬁnd the force
 acting on the bottom:

                                    pA þ pB    74 900 þ 62 900
                             F¼             A¼                 ð1:2 · 0:6Þ ¼ 49 610 N
                                       2              2



                                                                           A
 EXAMPLE 2.6 The cylinder in Fig. 2.13 is rotated
 about the center axis as shown. What rotational speed              2 cm                 Air
 is required so that the water just touches point A.
 Also, ﬁnd the force on the bottom of the cylinder.                                                                   h



                                                                    20 cm
                                                                                                         Water



                                                                                        16 cm                 16 cm
                                                                                                     O

                                                                                                Figure 2.13

      Solution: The volume of the air before and after must be the same. Recognizing that the volume of a
 paraboloid of revolution is half of the volume of a circular cylinder of the same radius and height, the height
 of the paraboloid of revolution is found:
                                                 1
                               p · 0:162 · 0:02 ¼ p · 0:162 h          \ h ¼ 0:04 m
                                                 2
30                                                 FLUID STATICS                                         [CHAP. 2



      Use Eq. (2.30) to ﬁnd O:

                                               O2 · 0:162
                                     0:04 ¼                           O ¼ 5:54 rad=s
                                                2 · 9:81
      The pressure on the bottom as a function of the radius r is p(r), given by

                                                            rO2 2
                                                 p 2 p0 ¼      ðr 2 r12 Þ
                                                             2
      where p0 ¼ 9810 · ð0:20 2 0:04Þ ¼ 1570 Pa. So,

                                       1000 · 5:542 2
                                  p¼               r þ 1570 ¼ 15 346r2 þ 1570
                                            2
      The pressure is integrated over the area to ﬁnd the force to be
                                     Z0:16
                                             ð15 346r2 þ 1570Þ2pr dr ¼ 142:1 N
                                       0




                                               Solved Problems

2.1    Derive an expression for the density variation in a liquid assuming a constant bulk modulus and a
       constant temperature.
           The density varies in a liquid according to Eq. (1.13), B ¼ r Dp=DrjT . Over a small pressure difference,
           this can be written as, using Eq. (2.9),

                                                     B                      dr g
                                              dp ¼     dr ¼ rg dh or          ¼ dh
                                                     r                      r2 B
           Assuming a constant value for B, set up an integration:
                                                        Zr dr         g Zh
                                                              2
                                                                  ¼        dh
                                                         r0 r         B 0

           Integrating gives the increase in density as

                                              1 1  gh                           r0
                                             2 þ ¼                or r ¼
                                              r r0 B                        1 2 gr0 h=B


           This could be used with dp ¼ rg dh to provide the pressure variation in the ocean.


2.2    A U-tube manometer measures the pressure in an air pipe to be 10 cm of water. Calculate the
       pressure in the pipe.
           Refer to Fig. 2.3. Equation (2.15) provides the answer:

                                           p1 ¼ gwater H 2 gair h ¼ 9810 · 0:1 ¼ 981 Pa
           We have neglected the term gair h since gair is small compared with gwater .


2.3    Find the force P needed to hold the 2-m-wide gate in Fig. 2.14 in the position shown if h ¼ 1.2 m.
CHAP. 2]                                           FLUID STATICS                                                    31


                                                                                  P




                                                                                      80 cm

                                                          Water
                                          h
                                                                           65°

                                                                            Hinge

                                                        Figure 2.14


           The force of the water on the gate is given by Eq. (2.17), using h ¼ 0:6 m, to be
                                                                        1:2
                                      F ¼ ghA ¼ 9810 · 0:6 ·                  · 2 ¼ 15 590 N
                                                                      sin 65–
           The force F acts normal to the gate. Moments about the hinge gives
                                                         0:6        1:2
                         Fd1 ¼ Pd2            15 590           ¼P         þ 0:8               \ P ¼ 4860 N
                                                       sin 65–    sin 65–

           We have used d1 as the distance to F and d2 as the distance to P.


2.4   Find the force P needed to hold the 3-m-wide gate in the position shown in Fig. 2.15(a) if
      r ¼ 2 m.


                     60 cm      P
                                                                                               P
                                                                      FW
                                Quarter circle            FH                     F1     FH                Fy
                                     radius = r                                        d1
                Water                                                                                          Fx
                                                                                                   d2
                              Hinge                                   FV
                                                                                              FV
                              (a)                                 (b)                                   (c)

                                                        Figure 2.15

           There are horizontal and vertical force components acting on the gate. The pressure distribution on the
           gate would be the same if water was above and to the right of the gate. So, only a free-body diagram of
           the water is shown in Fig. 2.15(b). The free-body diagram of the gate is shown in Fig. 2.15(c). The forces
           F1 ¼ FH and FW ¼ FV are
                        FH ¼ F1 ¼ ghA                                      FV ¼ FW ¼ gV
                                                                                      1
                          ¼ 9810 · 1 · ð2 · 3Þ ¼ 58 860 N                     ¼ 9810 · p · 22 · 3 ¼ 92 580 N
                                                                                      4
           The distances d1 and d2 (FW acts through the centroid of the quarter circle) are
                                   1                                             4r 4 · 2
                               d1 ¼ · 2 ¼ 0:667 m                       d2 ¼       ¼      ¼ 0:8488 m
                                   3                                             3p 3 · p
           (The force F1 is due to a triangular pressure distribution on the vertical rectangular area, so it must act
           through the centroid of that distribution: two-thirds the distance from the surface, or one-third the
           distance up from the hinge.) Moments about the hinge give

                     2:6P ¼ d1 FH þ d2 FV ¼ 0:667 · 58 860 þ 0:8488 · 92 580                   \ P ¼ 45 300 N
32                                                  FLUID STATICS                                            [CHAP. 2



          We could have simpliﬁed the calculations if we had moved the forces FH and FV to the center of the
          circular arc (review Example 2.4). Then, the moments about the hinge would have provided
                                            2:6P ¼ 2FH            \ P ¼ 45 300 N

2.5   The tank of Example 2.5 is ﬁlled with water but has a small hole at the top of the very left. Now
      ﬁnd the force acting on the bottom of the tank. All other quantities remain as stated in the
      example.
          The constant-pressure line of zero gage pressure passes through the top left corner and extends below B
          at a distance z (make a sketch that has a triangle with the left side (100 þ z) cm high and the base 120 cm
          long), where z is found from
                                                  10    100 þ z
                                       tan a ¼        ¼                 \ z ¼ 22:3 cm
                                                 9:81     120
          Point B is 22.3 cm above the zero-pressure line so that the pressure at B is
                                          pB ¼ 2gz ¼ 29810 · 0:223 ¼ 22190 Pa
          The pressure at A and the average pressure on the bottom area are
                                                                     pA þ pB 9810 2 2190
                      pA ¼ 9810 · 1:0 ¼ 9810 Pa       and   pavg ¼          ¼            ¼ 3810 Pa
                                                                        2         2
          The force on the bottom is then
                                           F ¼ pavg A ¼ 3810ð0:6 · 1:2Þ ¼ 2740 N

2.6   A test tube is placed in a rotating device that gradually positions the tube to a horizontal position
      when it is rotating at a high enough rate. If that rate is 1000 rpm, estimate the pressure at the
      bottom of the relatively small-diameter test tube if the tube contains water and it is 12 cm long.
      The top of the tube is at a radius of 4 cm from the axis or rotation.
          The paraboloid of revolution is a constant-pressure surface. The one that passes through the top of the
          rotating test tube is a surface of zero pressure. If we position point ‘‘1’’ on the axis of rotation and ‘‘2’’
          on the bottom of the test tube, then Eq. (2.29) takes the form
                                    rO2                        1000ð1000 · 2p=60Þ2
                        p2 2 p1 ¼       ðr 2 r1 Þ    or p2 ¼                       0:12 ¼ 65 800 Pa
                                     2 2                               2




                                      Supplementary Problems

Pressure Variation

2.7   Convert the following as indicated:
      (a) 2 m of water to cm of mercury
      (b) 20 kPa to mm of mercury
      (c) 34 ft of water to kPa
      (d ) 760 mm of mercury to ft of water
      (e) 250 kPa to psi
      (f ) 32 psi to kPa

2.8   Calculate the pressure difference from the top of a house to the ground if the distance is 10 m. Make the
      appropriate assumptions.
CHAP. 2]                                             FLUID STATICS                                                   33


2.9    A weather person states that the barometric pressure is 29 in of mercury. Convert this pressure to (a) kPa,
       (b) psi, (c) ft of water, and (d ) bars.

2.10   Determine the depth of a liquid needed to create a pressure difference of 225 kPa if the liquid is (a) water,
       (b) air at standard conditions, (c) mercury, and (d ) oil with S ¼ 0.86.

2.11   The speciﬁc gravity of a liquid is 0.75. What height of that liquid is needed to provide a pressure difference of
       200 kPa?

2.12   Assume a pressure of 100 kPa absolute at ground level. What is the pressure at the top of a 3-m-high wall on
       the outside where the temperature is – 20– C and on the inside of a house where the temperature is 22– C?
       (This difference results in inﬁltration even if no wind is present.)

2.13   Find an expression for the pressure variation in the ocean assuming r0 ¼ 1030 kg=m3 for salt water using the
       bulk modulus to be 2100 MPa (see the solution to Solved Problem 2.1). Estimate the pressure at 2000 m
       using (a) the expression developed and (b) a constant density of 1030 kg=m3. (c) Calculate the percent error
       in (b) assuming (a) is the accurate value.

2.14   From about 12 to 20 km, the temperature in the stratosphere is constant at 217 K. Assuming the pressure
       at 12 km to be 19.4 kPa, use Eq. (2.13) to approximate the pressure at 20 km. Calculate the error using
       Table C.3 in App. C to obtain the more accurate value.

2.15   Assume a temperature distribution of T ¼ 288 2 0:0065z K and integrate to ﬁnd the pressure at 10 km in the
       atmosphere assuming p ¼ 101.3 kPa at z ¼ 0. Calculate the error.




Manometers

2.16   In Fig. 2.3, calculate the pressure in the water pipe if:
       (a) h ¼ 10 cm and H ¼ 20 cm                                  (b) h ¼ 15 cm and H ¼ 25 cm
       (c) h ¼ 20 cm and H ¼ 30 cm                                  (d ) h ¼ 17 cm and H ¼ 32 cm
                                                                   1
2.17   The pressure at the nose of a small airplane is given by p ¼ rV2 , where r is the density of air. A U-tube
                                                                   2
       manometer measures 10 cm of water. Determine the airplane’s speed if it is ﬂying at an altitude of:
       (a) 10 m                     (b) 4000 m               (c) 6000 m

2.18   Calculate the pressure difference between the air pipe and the water pipe in Fig. 2.16 if H is:
       (a) 5 cm                     (b) 8 cm                 (c) 10 cm


                                                                                  Air

                              Air                               4
                                                                                 5
                                                         H
                               1                                        5 cm
                                                      3 cm                              6
                                                 2                  3

                                    Mercury                                          Water

                                                      Figure 2.16
34                                                 FLUID STATICS                                             [CHAP. 2



2.19   Replace the air between points 4 and 5 in Fig. 2.16 with oil having Soil ¼ 0.86 and let z4 – z5 ¼ 6 cm.
       Calculate the pressure difference between the air pipe and water pipe if H is:
       (a) 5 cm                 (b) 8 cm                  (c) 10 cm

2.20   If the manometer top in Fig. 2.17 is open, then the mercury level is 10 cm below the pressureless air pipe. The
       manometer top is sealed and the air pipe is pressurized. Estimate the reading for H for a pressure of 200 kPa
       in the air pipe. Assume an isothermal process for the air above the mercury.

                                                                      Manometer
                                                                      top
                                    Air    15 cm

                                                           H             Mercury




                                                    Figure 2.17




Forces on Plane and Curved Surfaces

2.21   A submersible has a viewing window that is 60 cm in diameter. Determine the pressure force of the water
       on the window if the center of the window is 30 m below the surface and the window is (a) horizontal,
       (b) vertical, and (c) on a 45– angle.

2.22   A concrete septic tank measures 2 m · 80 cm · 120 cm and has sides that are 8 cm thick. It is buried ﬂush
       with the ground. If it is empty, how high would water saturating the soil have to rise on the outside of the
       tank to cause it to rise out of the ground? Assume Sconcrete ¼ 2.4.

2.23   In Solved Problem 2.3, calculate the force P if h is:
       (a) 80 cm                (b) 2 m                   (c) 2.4 m

2.24   The top of a 2-m-diamter vertical gate is 4 m below the water surface. It is hinged on the very bottom. What
       force, acting at the top of the gate, is needed to hold the gate closed?

2.25   Use Eq. (2.20) and show that the force on a plane rectangular surface at an angle b with the horizontal acts
       one-third up from the base provided the top of the rectangle is at the water’s surface.

2.26   At what height H will the gate in Fig. 2.18 open
       if h is:
       (a) 1.0 m
       (b) 1.2 m
                                                                                                      H
       (c) 1.4 m
                                                                                             Water
       (d ) 1.6 m
                                                                                                                Hinge
                                                                                                         h
                                                                                                 80 cm          Stop


                                                                                                  Figure 2.18
CHAP. 2]                                             FLUID STATICS                                                           35


                                              2.27     The gate shown in Fig. 2.19 will open automatically when the
                                                       water level reaches a certain height above the hinge. Determine
          H    Hinge                                   that height if b is:
                                                       (a) 1.2 m               (b) 1.6 m                     (c) 2.0 m
Water            b




        Figure 2.19

2.28     A pressure distribution exists under a concrete                                         2m
         (S ¼ 2.4) dam, as sketched in Fig. 2.20. Will the                        4m
         dam tend to topple (sum moments about the
         lower right-hand corner) if:
         (a) H ¼ 30 m, h ¼ 4 m
         (b) H ¼ 40 m, h ¼ 6 m
                                                                                          H
         (c) H ¼ 50 m, h ¼ 8 m


                                                                                                 10 m                    h

                                                                                 p = H                           p = h

                                                                                          Figure 2.20
2.29     In Solved Problem 2.4, calculate the force P if r is:
         (a) 1.6 m                (b) 2.4 m                  (c) 3 m

2.30     Consider the gate in Fig. 2.21 to be a quarter circle of radius
         80 cm. Find the force P needed to just open the 1-m-wide gate if
         the hinge is:
         (a) 2 m below the surface.                                                      Water
         (b) 3 m below the surface.                                                                                      Hinge
         (c) 4 m below the surface.


                                                                                     P



                                                                                          Figure 2.21

2.31     Calculate the force acting on the hinge of (a) Prob. 2.30a, (b) Prob. 2.30b, and (c) Prob. 2.30c.

2.32     Determine the force P needed to just open the
         2-m-wide parabolic gate in Fig. 2.22 if the hinge                                              2m
         is at the following y-position in the xy-plane:
         (a) 2 m                                                                         Water
         (b) 8 m
                                                                                                                         Hinge
                                                                                          y

                                                                                                               y = 2x2
                                                                                     P
                                                                                                             x


                                                                                                 Figure 2.22
36                                               FLUID STATICS                                                           [CHAP. 2



2.33   A body weighs 200 N in air and 125 N when submerged in water. Calculate its speciﬁc weight.

2.34   An object with a volume of 1200 cm3 weighs 20 N. What will it weigh when submerged in water?

2.35   A body lighter than water requires a force of 20 N to hold it under water. If it weighs 75 N in air, what is its
       density and speciﬁc gravity?

2.36   The cylinder shown in Fig. 2.23 pulls out the plug when the
       water depth reaches a certain height H. The circular plug and                                         R
       2-m-long cylinder weigh 2000 N. Determine H if R is:

       (a) 20 cm                 (b) 40 cm                 (c) 60 cm


                                                                                   Water                                              H
                                                                                                             2m



                                                                                                      12 cm

                                                                                                   Figure 2.23

Accelerating Containers

2.37   The tank displayed in Fig. 2.24 is ﬁlled with water and
       accelerated with the two components shown. Calculate                     Open
       the pressures at A and B if:
                                                                                                                             a
       (a) ax ¼ 6 m=s2, az ¼ 0, and h ¼ 1.4 m                                          Water                     h
       (b) ax ¼ 0, az ¼ 6 m=s2, and h ¼ 2.4 m                                                                                    ax
       (c) ax ¼ 6 m=s2, az ¼ 6 m=s2, and h ¼ 2 m                                           3h
       (d ) ax ¼ 6 m=s2, az ¼ 2 m=s2, and h ¼ 1.4 m                       A                                              B

                                                                                               Figure 2.24

2.38   Find the force acting on the bottom of the 2-m-wide tank of (a) Prob. 2.37a, (b) Prob. 2.37b, (c) Prob. 2.37c,
       and (d ) Prob. 2.37d.

2.39   Find the force acting on the left end of the 2-m-wide tank of (a) Prob. 2.37a, (b) Prob. 2.37b, (c) Prob. 2.37c,
       and (d ) Prob. 2.37d.

2.40   The tank of Prob. 2.37a is accelerated to the left, rather than to the right. Calculate the pressure at A and the
       force on the bottom of the 2-m-wide tank.
                                                                                                                     Open
2.41   Determine the pressures at points A and B in the water in
                                                                                       A
       the U-tube of Fig. 2.25 if:
       (a) L ¼ 40 cm and ax ¼ 6 m=s2
                                                                                               L                     L
       (b) L ¼ 60 cm and ax ¼ 210 m=s2
       (c) L ¼ 50 cm and ax ¼ 4 m=s2
                                                                                                      L
                                                                                                                             B        x

                                                                                                    Figure 2.25


2.42   The U-tube of Prob. 2.41 is rotated about the right leg at 100 rpm. Calculate the pressures at A and B in the
       water if L is:
       (a) 40 cm                 (b) 50 cm                 (c) 60 cm
CHAP. 2]                                          FLUID STATICS                                                          37


2.43   The U-tube of Prob. 2.41 is rotated about the left leg at 100 rpm. Calculate the pressures at A and B in the
       water if L is:
       (a) 40 cm                (b) 50 cm                     (c) 60 cm


2.44   The U-tube of Prob. 2.41 is rotated about the center of the horizontal part at 100 rpm. Calculate the
       pressures at A and B in the water if L is:
       (a) 40 cm                (b) 50 cm                     (c) 60 cm

2.45   Find the pressure at point A in the cylinder of Fig. 2.26 if
       O ¼ 100 rpm and R is:                                                                       Air               0.4R

       (a) 40 cm                (b) 60 cm                     (c) 80 cm


                                                                                                 Water               1.5R


                                                                                                                 R   A


                                                                                                   Figure 2.26

2.46   Determine the force on the bottom of the cylinder of (a) Prob. 2.45a, (b) Prob. 2.45b, and (c) Prob. 2.45c.




                              Answers to Supplementary Problems

2.7    (a) 4.7 cm         (b)   150 mm         (c)      101.7 kPa      (d )    33.9 ft     (e)     36.25 psi
       ( f ) 221 kPa

2.8    120 Pa

2.9    (a)   15.23 kPa    (b)   2.21 psi    (c)     5.09 ft         (d )     0.1523 bars

2.10   (a)   22.9 m       (b)   18 650 m          (c)   1.686 m        (d )    26.7 m

2.11   27.2 m

2.12   99 959 Pa, 99 965 Pa

2.13   (a)   20.3 MPa     (b) 20.21 MPa           (c)   2 0.44%

2.14   5.50 kPa, 20.51%

2.15   26.3 kPa, 20.75%

2.16   (a)   25.7 kPa     (b)   31.9 kPa          (c)   38.1 kPa      (d )    41.0 kPa

2.17   (a)   40.1 m=s     (b)   49.1 m=s          (c)   54.5 m=s

2.18   (a)   6.18 kPa     (b)   10.2 kPa          (c)   12.8 kPa

2.19   (a)   5.67 kPa     (b)   9.68 kPa          (c)   12.34 kPa
38                                                            FLUID STATICS                                           [CHAP. 2



2.20   30.7 cm

2.21   (a) 83.2 kN        (b) 83.2 kN                (c)      83.2 kN

2.22   54.2 cm

2.23   (a) 1212 N         (b) 10.6 kN              (c)        15.96 kN

2.24   24.4 kN

2.25   Answer is given in problem.

2.26   (a) 1.8 m         (b)     0.667 m          (c)      0.244 m          (d )     0m

2.27   (a) 2.08 m        (b)     2.77 m           (c)      3.46 m

2.28   (a) It will tip         (b) It will tip             (c) It will not tip

2.29   (a) 17.1 kN         (b) 28.2 kN                     (c)    36.8 kN

2.30   (a) 6500 N          (b) 7290 N                      (c)    8070 N

2.31   (a) 4710 N          (b) 5490 N                      (c)    6280 N

2.32   (a) 31.9 kN         (b) 91.4 kN

2.33   2.67, 0.00764 m3

2.34   8.23 N

2.35   789 kg/m3, 0.789

2.36   (a) 2.39 m        (b)     2.19 m

2.37   (a) 13.73 kPa, 211.47 kPa               (b)       37.9 kPa, 37.9 kPa               (c)   31.6 kPa, 24.38 kPa
       (d ) 16.53 kPa, 28.67 kPa

2.38   (a) 9.49 kN         (b) 546 kN                 (c)        327 kN           (d ) 66 kN

2.39   (a) 19.22 kN        (b)       53.1 kN            (c)      44.3 kN          (d )   23.1 kN

2.40   13.73 kPa, 221 kN

2.41   (a) 2.40 kPa, 3.92 kPa               (b)      6.00 kPa, 3.92 kPa                  (c)    2.00 kPa, 3.92 kPa

2.42   (a) 8.77 kPa, 3.92 kPa               (b)      13.7 kPa, 4.90 kPa                  (c)    19.73 kPa, 5.89 kPa

2.43   (a) 28.77 kPa, 3.92 kPa              (b)      213.7 kPa, 4.90 kPa                  (c) 219.73 kPa, 5.89 kPa

2.44   (a) 0 kPa, 3.92 kPa            (b)   0 kPa, 4.90 kPa                 (c)     0 kPa, 5.89 kPa

2.45   (a) 10.98 kPa           (b)   21.3 kPa            (c)      39.5 kPa

2.46   (a) 3.31 kN             (b) 12.9 kN                 (c)    44.1 kN
                                                    Chapter 3


                                Fluids in Motion

3.1     INTRODUCTION
This chapter introduces the general subject of the motion of ﬂuid ﬂows. Such motions are quite complex
and require rather advanced mathematics to describe them if all details are to be included. With
experience we can make simplifying assumptions to reduce the mathematics required, but even then the
problems can get rather involved mathematically. To describe the motion of air around an airfoil, water
around a ship, a tornado, a hurricane, the agitated motion in a washing machine, or even water passing
through a valve, the mathematics becomes quite sophisticated and is beyond the scope of an
introductory course. We will, however, derive the equations needed to describe such motions but will
make simplifying assumptions that will allow a number of problems of interest to be solved. These
problems will include ﬂow in a pipe, through a channel, around rotating cylinders, and in a boundary
layer near a ﬂat wall. They will also include compressible ﬂows involving simple geometries.
    The assumptions that we will make include the nature of the geometry: pipes and channels are straight
and possibly smooth, and walls are perfectly ﬂat. Fluids are all viscous (viscosity causes ﬂuid to stick to a
boundary) but often we can ignore the viscous effects; however, if viscous effects are to be included we can
demand that they behave in a linear fashion, a good assumption for water and air. Compressibility effects
can also be ignored for low velocities such as those encountered in wind motions (including hurricanes) and
ﬂows around airfoils at speeds below about 100 m=s (220 mi=h) when ﬂying near the ground.
    In Sec. 3.2, we will describe ﬂuid motion in general, the classiﬁcation of different types of ﬂuid
motions will follow this, and then we will introduce the famous Bernoulli equation along with its
numerous assumptions that make it applicable in only limited situations.



3.2     FLUID MOTION
3.2.1    Lagrangian and Eulerian Descriptions
The motion of a group of particles can be thought of in two basic ways: focus can be on an individual
particle, such as following a particular car on a freeway jammed with cars (a police patrol car may do
this while moving with trafﬁc), or it can be at a particular location as the cars move by (a patrol car
sitting along the freeway does this). When analyzed correctly, the solution to a problem would be the
same using either approach (if you are speeding, you will get a ticket from either patrol car).
     When solving a problem involving a single object, such as in a dynamics course, focus is always on
the particular object. If there were several objects, we could establish the position r(x0, y0, z0, t), velocity
V(x0, y0, z0, t), and acceleration a(x0, y0, z0, t) of the object that occupied the position (x0, y0, z0) at the
starting time. The position (x0, y0, z0) is the ‘‘name’’ of the object upon which attention is focused. This is
                                                           39
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
40                                         FLUIDS IN MOTION                                       [CHAP. 3



the Lagrangian description of motion. It is quite difﬁcult to use this description in a ﬂuid ﬂow where there
are so many particles. Let us consider the second way to describe a ﬂuid motion.
    Let us now focus on a general point (x, y, z) in the ﬂow with the ﬂuid moving by the point having
a velocity V(x, y, z, t). The rate of change of the velocity of the ﬂuid as it passes the point is
@V=@x; @V=@y; @V=@z; and it may also change with time at the point: @V=@t: We use partial derivatives
here since the velocity is a function of all four variables. This is the Eulerian description of motion, the
preferred description in our study of ﬂuids. We have used rectangular coordinates here but other
coordinate systems, such as cylindrical coordinates, can also be used. The region of interest is referred
to as a ﬂow ﬁeld and the velocity in that ﬂow ﬁeld is often referred to as the velocity ﬁeld. The ﬂow
ﬁeld could be the inside of a pipe, the region around a turbine blade, or the water in a washing
machine.
    If the quantities of interest using a Eulerian description were not dependent on time t, we
would have a steady ﬂow; the ﬂow variables would depend only on the space coordinates. For such a
ﬂow

                                      @V                   @p              @r
                                         ¼0                   ¼0              ¼0                       ð3:1Þ
                                      @t                   @t              @t

to list a few. In the above partial derivatives, it is assumed that the space coordinates remain ﬁxed; we
are observing the ﬂow at a ﬁxed point. If we followed a particular particle, as in a Lagrangian approach,
the velocity of that particle would, in general, vary with time as it progressed through a ﬂow ﬁeld. Using
the Eulerian description, as in Eq. (3.1), time would not appear in the expressions for quantities in a
steady ﬂow.


3.2.2   Pathlines, Streaklines, and Streamlines
There are three different lines in our description of a ﬂuid ﬂow. The locus of points traversed by a
particular ﬂuid particle is a pathline; it provides the history of the particle. A time exposure of an
illuminated particle would show a pathline. A streakline is the line formed by all particles passing a
given point in the ﬂow; it would be a snapshot of illuminated particles passing a given point. A
streamline is a line in a ﬂow to which all velocity vectors are tangent at a given instant; we cannot
actually photograph a streamline. The fact that the velocity is tangent to a streamline allows us to
write

                                                       V · dr ¼ 0                                      ð3:2Þ

since V and dr are in the same direction, as shown in Fig. 3.1; recall that two vectors in the same
direction have a cross product of 0.
     In a steady ﬂow, all three lines are coincident. So, if the ﬂow is steady, we can photograph a pathline
or a streakline and refer to such a line as a streamline. It is the streamline in which we have primary
interest in our study of ﬂuids.
     A streamtube is the tube whose walls are streamlines. A pipe is a streamtube as is a channel. We
often sketch a streamtube in the interior of a ﬂow for derivation purposes.


                                                  dr
                                                              V

                                             r                             V
                                                                   V
                                                       y
                                      x

                                          Figure 3.1       A streamline.
CHAP. 3]                                         FLUIDS IN MOTION                                          41



3.2.3   Acceleration
To make calculations for a ﬂuid ﬂow, such as pressures and forces, it is necessary to describe the motion
in detail; the expression for the acceleration is needed assuming the velocity ﬁeld is known. Consider a
ﬂuid particle having a velocity V(t) at an instant t, as shown in Fig. 3.2. At the next instant t þ Dt the
particle will have velocity Vðt þ DtÞ, as shown. The acceleration of the particle is

                                                                   dV
                                                             a¼                                          ð3:3Þ
                                                                   dt

where dV is shown in the ﬁgure. From the chain rule of calculus, we know that

                                                  @V      @V      @V      @V
                                         dV ¼        dx þ    dy þ    dz þ    dt                          ð3:4Þ
                                                  @x      @y      @z      @t

since V ¼ Vðx; y; z; tÞ: This gives the acceleration as
                                             dV @V dx @V dy @V dz @V
                                        a¼      ¼      þ     þ     þ                                     ð3:5Þ
                                             dt   @x dt @y dt @z dt @t



                                                                               dV
                                          V(t)             V(t + dt)
                                                                        V(t)    V(t + dt)
                                                      Fluid particle
                                     Fluid particle
                                                      at time t + dt    Velocity triangle
                                     at time t      y
                                x

                                    Figure 3.2 The velocity of a ﬂuid particle.



Now, since V is the velocity of a particle at (x, y, z), we let

                                                      V ¼ ui þ vj þ wk                                   ð3:6Þ

where ðu; v; wÞ are the velocity components of the particle in the x-, y-, and z-directions, respectively, and
i, j, and k are the unit vectors. For the particle at the point of interest, we have

                                           dx                dy                dz
                                              ¼u                ¼v                ¼w                     ð3:7Þ
                                           dt                dt                dt
so that the acceleration can be expressed as

                                                     @V    @V    @V @V
                                              a¼u       þv    þw    þ                                    ð3:8Þ
                                                     @x    @y    @z   @t

    The time derivative of velocity represents the local acceleration and the other three terms
represent the convective acceleration. In a pipe, local acceleration results if the velocity changes with
time whereas convective acceleration results if velocity changes with position (as occurs at a bend or
valve).
    It is important to note that the expressions for the acceleration have assumed an inertial reference
frame, i.e., the reference frame is not accelerating. It is assumed that a reference frame attached to the
earth has negligible acceleration for problems of interest in this book. If a reference frame is attached to,
say, a dishwasher spray arm, additional acceleration components enter the expressions for the
acceleration vector.
42                                         FLUIDS IN MOTION                                        [CHAP. 3



     The vector equation (3.8) can be written as the three scalar equations
                                                    @u   @u @u @u
                                           ax ¼ u      þv þw þ
                                                    @x   @y @z @t

                                                    @v   @v @v @v
                                           ay ¼ u      þv þw þ                                          ð3:9Þ
                                                    @x   @y @z @t

                                                  @w    @w    @w @w
                                         az ¼ u      þv    þw    þ
                                                  @x    @y    @z   @t
     We usually write Eq. (3.3) (and Eq. (3.8)) as
                                                           DV
                                                      a¼                                               ð3:10Þ
                                                           Dt

where D=Dt is called the material, or substantial, derivative since we have followed a material particle, or
the substance, at an instant. In rectangular coordinates, the material derivative is
                                           D     @    @  @  @
                                              ¼u    þv þw þ                                            ð3:11Þ
                                           Dt    @x   @y @z @t
It can be used with other quantities of interest, such as the pressure: Dp=Dt would represent the rate of
change of pressure of a ﬂuid particle at some point (x, y, z).
     The material derivative and acceleration components are presented for cylindrical and spherical
coordinates in Table 3.1 at the end of this section.


3.2.4   Angular Velocity and Vorticity
Visualize a ﬂuid ﬂow as the motion of a collection of ﬂuid particles that deform and rotate as they travel
along. At some instant in time, we could think of all the particles that make up the ﬂow as being little
cubes. If the cubes simply deform and do not rotate, we refer to the ﬂow, or a region of the ﬂow, as an
irrotational ﬂow. Such ﬂows are of particular interest in our study of ﬂuids; they exist in tornados away
from the ‘‘eye’’ and in the ﬂow away from the surfaces of airfoils and automobiles. If the cubes do rotate,
they possess vorticity. Let us derive the equations that allow us to determine if a ﬂow is irrotational or if
it possesses vorticity.
     Consider the rectangular face of an inﬁnitesimal volume shown in Fig. 3.3. The angular velocity Oz
about the z-axis is the average of the angular velocity of segments AB and AC, counterclockwise taken as
positive:
                                     O þ OAC 1 vB 2 vA 2ðuC 2 uA Þ
                               Oz ¼ AB           ¼             þ
                                          2        2     dx           dy
                                                     2         @u    3
                                                       @v         dy
                                                   16     dx
                                                     6 @x      @y 7  7 ¼ 1 @v 2 @u
                                                 ¼ 4         2                                        ð3:12Þ
                                                   2 dx         dy 5 2 @x @y

If we select the other faces, we would ﬁnd

                                           1 @w @v                 1 @u @w
                                    Ox ¼       2            Oy ¼       2                               ð3:13Þ
                                           2 @y @z                 2 @z @x

These three components of the angular velocity components represent the rate at which a ﬂuid particle
rotates about each of the coordinate axes. The expression for Oz would predict the rate at which a cork
would rotate in the xy-surface of the ﬂow of water in a channel.
CHAP. 3]                                      FLUIDS IN MOTION                                                      43



                                 y            v + v dy
                                                  y
                                          C

                                                   u + u dy
                                                       y
                                              dy
                                              v                          v + v dx
                                                                             x
                                                   u     dx                         u
                                          A                                   u+      dx
                                                                        B           x

                                                                                       x

                               Figure 3.3 The rectangular face of a ﬂuid element.


   The vorticity vector v is deﬁned as twice the angular velocity vector: v ¼ 2O : The vorticity
components are
                                       @w @v                       @u @w                   @v @u
                                ox ¼     2                oy ¼       2          oz ¼         2                  ð3:14Þ
                                       @y @z                       @z @x                   @x @y

The vorticity components in cylindrical coordinates are listed in Table 3.1. The vorticity and angular
velocity components are 0 for an irrotational ﬂow; the ﬂuid particles do not rotate, they only
deform.


    Table 3.1   The Material Derivative, Acceleration, and Vorticity in Rectangular, Cylindrical, and Spherical
                                                   Coordinates

    Material derivative
    Rectangular
    D     @    @  @  @
       ¼u    þv þw þ
    Dt    @x   @y @z @t

    Cylindrical
    D      @ v @       @  @
       ¼ vr þ y    þ vz þ
    Dt     @r r @y     @z @t

    Spherical
    D      @ v @     vf @      @
       ¼ vr þ y   þ          þ
    Dt     @r r @y r sin y @f @t

    Acceleration
    Rectangular
             @u   @u @u @u                             @v   @v @v @v                          @w    @w    @w @w
    ax ¼ u      þv þw þ                   ay ¼ u          þv þw þ                    az ¼ u      þv    þw    þ
             @x   @y @z @t                             @x   @y @z @t                          @x    @y    @z   @t

    Cylindrical
             @vr vy @vr      @v v 2 @v                             @vy vy @vy     @v  vv    @v
     ar ¼ vr    þ       þ vz r 2 y þ r                   ay ¼ vr      þ       þ vz y þ r y þ y
             @r   r @y       @z    r  @t                           @r   r @y      @z    r    @t
             @vz vy @vz      @vz @vz
     az ¼ vr    þ       þ vz     þ
             @r   r @y        @z   @t
44                                                 FLUIDS IN MOTION                                         [CHAP. 3



                                                     Table 3.1   Continued

     Spherical
               @vr vy @vr   vf @vr vy2 þ vf2 @vr                        @vy vy @vy   vf @vy vr vy 2 vf2 cot y @vy
     ar ¼ vr      þ       þ         2       þ                 ay ¼ vr      þ       þ         þ               þ
               @r   r @y r sin y @f    r      @t                        @r   r @y r sin y @f        r          @t
               @vf vy @vf   vf @vf vr vf þ vy vf cot y @vf
     af ¼ vr       þ      þ          þ                þ
                @r   r @y r sin y @f        r           @t

     Vorticity
     Rectangular
            @w @v                 @u @w              @v @u
     ox ¼     2            oy ¼     2         oz ¼     2
            @y @z                 @z @x              @x @y

     Cylindrical
            1 @vz @vy               @vr @vz               1 @ðrvy Þ 1 @vr
     or ¼        2           oy ¼      2           oz ¼            2
            r @y   @z               @z   @r               r @r       r @y



    It is the deformation of ﬂuid particles that leads to the internal stresses in a ﬂow. The study of the
deformation of ﬂuid particles leads to the rate-of-strain components and, with the use of constitutive
equations that introduce the viscosity, to expressions for the normal and shear stresses. If Newton’s
second law is then applied to a particle, the famous Navier– Stokes equations result (see Chap. 5). We
present these equations, along with the continuity equation (to be derived later), in Table 3.2 for
completeness and consider their applications in later chapters.

 Table 3.2       The Constitutive Equations, Continuity Equation, and Navier – Stokes Equations for an Incompressible
                                           Flow Using Rectangular Coordinates

                     Constitutive equations

                                      @u                         @u @v                           @u @w
                     sxx ¼ 2p þ 2m               txy ¼ tyx ¼ m     þ             txz ¼ tzx ¼ m     þ
                                      @x                         @y @x                           @z @x

                                      @v                         @v @w
                      syy ¼ 2p þ 2m              tyz ¼ tzy ¼ m     þ
                                      @y                         @z @y
                                      @w
                      szz ¼ 2p þ 2m
                                      @z
                     Continuity equation

                     @u @v @w
                       þ  þ   ¼0
                     @x @y @z

                     Navier – Stokes equations

                         Du    @p                                 D  @   @    @   @
                     r      ¼ 2 þ rgx þ mH2 u          where        ¼ þu    þv þw
                         Dt    @x                                 Dt @t  @x   @y  @z
                         Dv    @p                                        @2   @2 @2
                     r      ¼ 2 þ rgy þ mH2 v          where     H2 ¼      2
                                                                             þ 2þ 2
                         Dt    @y                                        @x   @y @z
                         Dw    @p
                     r      ¼ 2 þ rgz þ mH2 w
                         Dt    @z
CHAP. 3]                                          FLUIDS IN MOTION                                         45



 EXAMPLE 3.1 A velocity ﬁeld in a plane ﬂow is given by V ¼ 2yti þ xj. Find the equation of the streamline
 passing through (4, 2) at t ¼ 2.
      Solution: Equation (3.2) can be written in the form
                                  ð2yti þ xjÞ · ðdxi þ dyjÞ ¼ ð2yt dy 2 x dxÞk ¼ 0
 This leads to the equation, at t ¼ 2
                                                      4y dy ¼ x dx
 Integrate to obtain
                                                             x2
                                                     2y2 2      ¼C
                                                             2
 The constant is evaluated at the point (4, 2) to be C ¼ 0. So, the equation of the streamline is
                                                       x2 ¼ 4y2
 Distance is usually measured in meters and time in seconds so then velocity would have units of m=s.


 EXAMPLE 3.2 For the velocity ﬁeld V ¼ 2xyi þ 4tz2 j 2 yzk, ﬁnd the acceleration, the angular velocity about
 the z-axis, and the vorticity vector at the point (2, 21, 1) at t ¼ 2.
      Solution: The acceleration is found as follows:
                                        @V    @V    @V @V
                                a¼u        þv    þw    þ
                                        @x    @y    @z   @t
                                  ¼ 2xyð2yiÞ þ 4tz2 ð2xi 2 zkÞ 2 yzð8tzj 2 ykÞ þ 4z2 j
 At the point (2, 21, 1) and t ¼ 2 there results
                          a ¼ 2ð2Þð21Þð22iÞ þ 4ð2Þð12 Þð4i 2 kÞ 2 ð21Þð1Þð16j þ kÞ þ 4ð12 Þj
                            ¼ 8i þ 32i 2 8k þ 16j þ k þ 4j
                            ¼ 40i þ 20j 2 7k
      The angular velocity component Oz is
                                                  1 @v @u  1
                                           Oz ¼       2   ¼ ð0 2 2xÞ ¼ x
                                                  2 @x @y  2
 At the point (2, 21, 1) and t ¼ 2 it is Oz ¼ 2:
     The vorticity vector is
                                           @w @v    @u @w    @v @u
                                   o¼        2   iþ   2   jþ   2   k
                                           @y @z    @z @x    @x @y

                                     ¼ ð2z 2 8tzÞi þ ð0 2 0Þj þ ð0 2 2xÞk
 At the point (2, 21, 1) and t ¼ 2 it is
                                                   o ¼ ð21 216Þi 2 4k
                                                     ¼ 217i 2 4k
 Distance is usually measured in meters and time in seconds. Thus, angular velocity and vorticity would have
 units of m=(s·m) or rad=s.


3.3   CLASSIFICATION OF FLUID FLOWS
Fluid mechanics is a subject in which many rather complicated phenomena are encountered, so it is
important that we understand some of the descriptions and simpliﬁcations of several special ﬂuid ﬂows.
Such special ﬂows will be studied in detail in later chapters. Here we will attempt to classify them in as
much detail as possible.
46                                             FLUIDS IN MOTION                                   [CHAP. 3



3.3.1   Uniform, One-, Two-, and Three-Dimensional Flows
A dependent variable in our study of ﬂuids depends, in general, on the three space coordinates and time,
e.g., V(x, y, z, t). The ﬂow that depends on three space coordinates is a three-dimensional ﬂow; it could be
a steady ﬂow if time is not involved, such as would be the case in the ﬂow near the intersection of a wing
and the fuselage of an aircraft ﬂying at a constant speed. The ﬂow in a washing machine would be an
unsteady, three-dimensional ﬂow.
     Certain ﬂows can be approximated as two-dimensional ﬂows; ﬂows over a wide weir, in the entrance
region of a pipe, and around a sphere are examples that are of special interest. In such two-dimensional
ﬂows the dependent variables depend on only two space variables, i.e., p(r, y) or V(x, y, t). If the space
coordinates are x and y, we refer to the ﬂow as a plane ﬂow.
     One-dimensional ﬂows are ﬂows in which the velocity depends on only one space variable. They are
of special interest in our introductory study since they include the ﬂows in pipes and channels, the two
most studied ﬂows in an introductory course. For ﬂow in a long pipe, the velocity depends on the radius
r, and in a wide channel (parallel plates) it depends on y, as shown in Fig. 3.4.

                    r                        u(r)                     y            u( y)
                         x                                                 x



               Figure 3.4 One-dimensional ﬂow. (a) Flow in a pipe; (b) ﬂow in a wide channel.

     The ﬂows shown in Fig. 3.4 are also referred to as developed ﬂows; the velocity proﬁles do not change
with respect to the downstream coordinate. This demands that the pipe ﬂow shown is many diameters
downstream of any change in geometry, such as an entrance, a valve, an elbow, or a contraction or
expansion. If the ﬂow has not developed, the velocity ﬁeld depends on more than one space coordinate,
as is the case near a geometry change. The developed ﬂow may be unsteady, i.e., it may depend on time,
such as when a valve is being opened or closed.

                                         r
                                                    x                  V



                                     Figure 3.5         A uniform ﬂow in a pipe.

    Finally, there is the uniform ﬂow, as sketched in Fig. 3.5; the velocity proﬁle, and other properties
such as pressure, is uniform across the section of pipe. This proﬁle is often assumed in pipe and channel
ﬂow problems since it approximates the more common turbulent ﬂow so well. We will make this
assumption in many of the problems of future chapters.

3.3.2   Viscous and Inviscid Flows
In an inviscid ﬂow the effects of viscosity can be completely neglected with no signiﬁcant effects on the
solution to a problem involving the ﬂow. All ﬂuids have viscosity and if the viscous effects cannot be
neglected, it is a viscous ﬂow. Viscous effects are very important in pipe ﬂows and many other kinds of
ﬂows inside conduits; they lead to losses and require pumps in long pipe lines. But, are there ﬂows in
which we can neglect the inﬂuence of viscosity? Certainly, we would not even consider inviscid ﬂows if no
such ﬂows could be found in our engineering problems.
    Consider an external ﬂow, ﬂow external to a body, such as the ﬂow around an airfoil or a hydrofoil,
as shown in Fig. 3.6. If the airfoil is moving relatively fast (faster than about 1 m=s), the ﬂow away from
a thin layer near the boundary, a boundary layer, can be assumed to have zero viscosity with no
signiﬁcant effect on the solution to the ﬂow ﬁeld (the velocity, pressure, temperature ﬁelds). All the
viscous effects are concentrated inside the boundary layer and cause the velocity to be zero at the surface
of the airfoil, the no-slip condition. Since inviscid ﬂows are easier to solve than viscous ﬂows, the
CHAP. 3]                                        FLUIDS IN MOTION                                           47



recognition that the viscosity can be ignored in the ﬂow away from the surface in many ﬂows leads to
much simpler solutions. This will be demonstrated in Chap. 8.

                                              Boundary layer
                      Inviscid flow
                                              Chord, c




                                       Figure 3.6 Flow around an airfoil.



3.3.3   Laminar and Turbulent Flows
A viscous ﬂow is either a laminar ﬂow or a turbulent ﬂow. In a turbulent ﬂow there is mixing of ﬂuid
particles so that the motion of a given particle is random and highly irregular; statistical averages are used
to specify the velocity, the pressure, and other quantities of interest. Such an average may be ‘‘steady’’ in
that it is independent of time, or it may be unsteady and depend on time. Figure 3.7 shows steady and
unsteady turbulent ﬂows. Notice the noisy turbulent ﬂow from a faucet when you get a drink of water.
     In a laminar ﬂow there is negligible mixing of ﬂuid particles; the motion is smooth and noiseless, like
the slow water ﬂow from a faucet. If a dye is injected into a laminar ﬂow, it remains distinct for a
relatively long period of time. The dye would be immediately diffused if the ﬂow were turbulent. Figure
3.8 shows a steady and an unsteady laminar ﬂow. A laminar ﬂow could be made to appear turbulent
by randomly controlling a valve in the ﬂow of honey in a pipe so as to make the velocity appear as in
Fig. 3.7. Yet, it would be a laminar ﬂow since there would be no mixing of ﬂuid particles. So, a simple

                         V(t)                                   V(t)




                                                         t                           t

                                 Figure 3.7    Steady and unsteady turbulent ﬂows.

                          V(t)                                 V(t)




                                                         t                           t

                                 Figure 3.8 Steady and unsteady laminar ﬂows.

display of V(t) is not sufﬁcient to decide if a particular ﬂow is laminar or turbulent. To be turbulent, the
motion has to be random, as in Fig. 3.7, but it also has to have mixing of ﬂuid particles.
     As a ﬂow begins, as in a pipe, the ﬂow starts out laminar, but as the average velocity increases, the
laminar ﬂow becomes unstable and turbulent ﬂow ensues. In some cases, as in the ﬂow between rotating
cylinders, the unstable laminar ﬂow develops into a secondary laminar ﬂow of vortices, and then a third
laminar ﬂow, and ﬁnally a turbulent ﬂow at higher speeds.
48                                         FLUIDS IN MOTION                                        [CHAP. 3



     There is a quantity, called the Reynolds number, that is used to determine if a ﬂow is laminar or
turbulent. It is
                                                            VL
                                                      Re ¼                                            ð3:15Þ
                                                             n
where V is a characteristic velocity (the average velocity in a pipe or the speed of an airfoil), L is a
characteristic length (the diameter of a pipe or the distance from the leading edge of a ﬂat plate), and n is
the kinematic viscosity. If the Reynolds number is larger than a critical Reynolds number, the ﬂow is
turbulent; if it is lower than the critical Reynolds number, the ﬂow is laminar. For ﬂow in a pipe,
assuming the usually rough pipe wall, the critical Reynolds number is usually taken to be 2000; if the wall
is smooth and free of vibrations, and the entering ﬂow is free of disturbances, the critical Reynolds
number can be as high as 40 000. The critical Reynolds number is different for each geometry. For ﬂow
between parallel plates, it is taken as 1500 using the average velocity and the distance between the plates.
For a boundary layer on a ﬂat plate with a zero pressure gradient, it is between 3 · 105 and 106, using the
distance from the leading edge.
     We do not refer to an inviscid ﬂow as laminar or turbulent. In an external ﬂow, the inviscid ﬂow is
called a free-stream ﬂow. A free stream has disturbances but the disturbances are not accompanied by
shear stresses, another requirement of both laminar and turbulent ﬂows; this will be discussed in a later
chapter. The free stream can also be irrotational or it can possess vorticity.
     A boundary layer is a thin layer of ﬂuid that develops on a body due to the viscosity causing the ﬂuid
to stick to the boundary; it causes the velocity to be zero at the wall. The viscous effects in such a layer
can actually burn up a satellite on reentry. Figure 3.9 shows the typical boundary layer on a ﬂat plate. It
is laminar near the leading edge and undergoes transition to a turbulent ﬂow with sufﬁcient length. For a
smooth rigid plate with low free-stream ﬂuctuation level, a laminar layer can exist up to Re ¼ 106, where
Re ¼ VL/n, L being the length along the plate; for a rough plate, or a vibrating plate, or high free-stream
ﬂuctuations, a laminar ﬂow exists up to about Re ¼ 3 · 105 .
                          V

                                      Inviscid flow



                                         Laminar            Transition   Turbulent
                                          flow                            flow

                               Figure 3.9 Boundary layer ﬂow on a ﬂat plate.


3.3.4   Incompressible and Compressible Flows
Liquid ﬂows are assumed to be incompressible in most situations (water hammer is an exception).
In such incompressible ﬂows the density of a ﬂuid particle as it moves along is assumed to be
constant, i.e.,
                                                        Dr
                                                           ¼0                                          ð3:16Þ
                                                        Dt

This does not demand that the density of all the ﬂuid particles be the same. For example, salt could be
added to a water ﬂow at some point in a pipe so that downstream of the point the density would be
greater than at some upstream point. Atmospheric air at low speeds is incompressible but the density
decreases with increased elevation, i.e., r ¼ r(z), where z is vertical. We usually assume a ﬂuid to have
constant density when we make the assumption of incompressibility, which is

                               @r               @r              @r           @r
                                  ¼0               ¼0              ¼0           ¼0                     ð3:17Þ
                               @t               @x              @y           @z
CHAP. 3]                                    FLUIDS IN MOTION                                                49



     The ﬂow of air can be assumed to be incompressible if the velocity is sufﬁciently low. Air ﬂow in
conduits, around automobiles and small aircraft, and the takeoff and landing of commercial aircraft are
all examples of incompressible airﬂows. The Mach number M where
                                                                  V
                                                          M¼                                         ð3:18Þ
                                                                  c
                                                                                       pﬃﬃﬃﬃﬃﬃ
is used to determine if a ﬂow is compressible; V is the characteristic velocity and c ¼ kRT is the speed of
sound. If M , 0.3, we assume the ﬂow to be incompressible. For air near sea level this is about 100 m=s
(300 ft=sec) so many air ﬂows can be assumed to be incompressible. Compressibility effects are
considered in some detail in Chap. 9.

 EXAMPLE 3.3 A river ﬂowing through campus appears quite placid. A leaf ﬂoats by and we estimate the
 average velocity to be about 0.2 m=s. The depth is only 0.6 m. Is the ﬂow laminar or turbulent?
     Solution: We estimate the Reynolds number to be, assuming T ¼ 20–C (see Table C.1),

                                                 Vh 0:2 · 0:6
                                          Re ¼      ¼         ¼ 120 000
                                                  n   1026

 This ﬂow is highly turbulent at this Reynolds number, contrary to our observation of the placid ﬂow. Most
 internal ﬂows are turbulent, as observed when we drink from a drinking fountain. Laminar ﬂows are of minimal
 importance to engineers when compared with turbulent ﬂows; a lubrication problem is one exception.



3.4   BERNOULLI’S EQUATION
Bernoulli’s equation may be the most often used equation in ﬂuid mechanics but it is also the most often
misused equation in ﬂuid mechanics. In this section, that famous equation will be derived and the
restrictions required for its derivation will be highlighted so that its misuse can be minimized. Before the
equation is derived let us state the ﬁve assumptions required: negligible viscous effects, constant density,
steady ﬂow, the ﬂow is along a streamline, and in an inertial reference frame. Now, let us derive the
equation.
                          y

                                                                  p+       ds dA
                                                     V                 s

                                                         ds                           streamline
                                                                                  h
                                                                             dh =   ds
                                                dA                                s
                                          pdA


                                      s                   gdsdA        R (radius of curvature)
                                      n


                                                                                           x

                              Figure 3.10 A particle moving along a streamline.

    We apply Newton’s second law to a cylindrical particle that is moving on a streamline, as shown in
Fig. 3.10. A summation of inﬁnitesimal forces acting on the particle is
                                                 @p
                                p dA 2 p þ          ds dA 2 rg ds dA cos y ¼ r ds dA as                 ð3:19Þ
                                                 @s
50                                        FLUIDS IN MOTION                                        [CHAP. 3



where as is the s-component of the acceleration vector. It is given by Eq. (3.9a) where we think of the
x-direction being in the s-direction so that u ¼ V
                                                           @V @V
                                                  as ¼ V      þ                                       ð3:20Þ
                                                           @s   @t
where @V=@t ¼ 0 assuming a steady ﬂow. (This leads to the same acceleration expression as presented in
physics or dynamics where ax ¼ V dV=dx providing an inertial reference frame is used in which no
Coriolis or other acceleration components are present.) Next, we observe that
                                                                    @h
                                              dh ¼ ds cos y ¼          ds                             ð3:21Þ
                                                                    @s
resulting in
                                                               @h
                                                     cos y ¼                                          ð3:22Þ
                                                               @s
Now, divide Eq. (3.19) by ds dA and use the above expressions for as and cos y and rearrange. There
results
                                                  @p      @h      @V
                                             2       2 rg    ¼ rV                                     ð3:23Þ
                                                  @s      @s      @s
If we assume that the density r is constant (this is more restrictive than incompressibility as we shall see
later) so it can be moved after the partial derivative, and we recognize that V@V=@s ¼ @ðV2 =2Þ=@s, we can
write our equation as
                                                                !
                                                @ V2      p
                                                        þ    þh ¼0                                   ð3:24Þ
                                               @s 2g rg
This means that along a streamline the quantity in parentheses is constant, i.e.,
                                              V2   p
                                                 þ   þ h ¼ const                                      ð3:25Þ
                                              2g rg
where the constant may change from one streamline to the next; along a given streamline the sum of the
three terms is constant. This is often written referring to two points on the same streamline as
                                          V12 p1       V2 p
                                             þ   þ h1 ¼ 2 þ 2 þ h2                                    ð3:26Þ
                                          2g rg        2g rg
or
                                         V12 p1      V2 p
                                            þ þ gh1 ¼ 2 þ 2 þ gh2                                     ð3:27Þ
                                          2  r        2   r
Either of the two forms above is the famous Bernoulli Equation used in many applications. Let us
highlight the assumptions once more since the equation is often misused:
     •   Inviscid ﬂow (no shear stresses)
     •   Constant density
     •   Steady ﬂow
     •   Along a streamline
     •   Applied in an inertial reference frame
The ﬁrst three of these are the primary ones that are usually considered, but there are special applications
where the last two must be taken into account; those special applications will not be presented in this
book. Also, we often refer to a constant-density ﬂow as an incompressible ﬂow even though constant
density is more restrictive (refer to the comments after Eq. (3.16)); this is because we do not typically
make application to incompressible ﬂows in which the density changes from one streamline to the next,
such as in atmospheric ﬂows.
CHAP. 3]                                            FLUIDS IN MOTION                                         51



      Note that the units on all the terms in Eq. (3.26) are meters (feet when using English units).
Consequently, V 2 =2g is called the velocity head, p=rg is the pressure head, and h is simply the head. The
sum of the three terms is often referred to as the total head. The pressure p is the static pressure and
the sum p þ rV 2 =2 is the total pressure or stagnation pressure since it is the pressure at a stagnation point,
a point where the ﬂuid is brought to rest along a given streamline.
      The difference in the pressures can be observed by considering the measuring probes sketched in
Fig. 3.11. The probe in Fig. 3.11(a) is a piezometer; it measures the static pressure, or simply, the pressure
at point 1. The pitot tube in Fig. 3.11(b) measures the total pressure, the pressure at a point where the
velocity is 0, as at point 2. And, the pitot-static tube, which has a small opening in the side of the probe as
shown in Fig. 3.11(c), is used to measure the difference between the total pressure and the static pressure,
i.e., rV 2 =2; this is used to measure the velocity. The expression for velocity is
                                                          sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                                           2
                                                    V¼       ð p 2 p1 Þ                                   ð3:28Þ
                                                           r 2
where point 2 must be a stagnation point with V2 ¼ 0. So, if only the velocity is desired, we simply use
the pitot-static probe sketched in Fig. 3.11(c).

                              p1(static pressure)              p2(total pressure)         p2 – p1


                  (a)                                (b)                            (c)




                         V      1                          2


                                                                                          static pressure
                                                                                             opening

           Figure 3.11 Pressure probes: (a) the piezometer, (b) a pitot tube, and (c) a pitot-static tube.

    Bernoulli’s equation is used in numerous ﬂuid ﬂows. It can be used in an internal ﬂow in short
reaches if the viscous effects can be neglected; such is the case in the well-rounded entrance to a pipe (see
Fig. 3.12) or in a rather sudden contraction of a pipe. The velocity for such an entrance is approximated
by Bernoulli’s equation to be
                                                        sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                                          2
                                                  V2 ¼      ðp 2 p2 Þ                                  ð3:29Þ
                                                          r 1



                             Reservoir
                                                               p2
                             V1 = 0
                                                                    V2                    V2
                               p1

                                                    h1 = h2




                                    Figure 3.12 Flow from a reservoir through a pipe.
52                                           FLUIDS IN MOTION                                          [CHAP. 3



    Another common application of the Bernoulli equation is from the free stream to the front area of a
round object such as a sphere or a cylinder or an airfoil. A sketch is helpful as shown in Fig. 3.13. For
many ﬂow situations the ﬂow separates from the surface, resulting in a separated ﬂow, as sketched. If the
ﬂow approaching the object is uniform, the constant in Eq. (3.25) will be the same for all the streamlines
and Bernoulli’s equation can be applied from the free stream to the stagnation point at the front of the
object and to points along the surface of the object up to the separation region.




                           V                     Separation     Separated
                                                 points         region
                                  Inviscid
                                  flow




                               Figure 3.13 Flow around a sphere or a long cylinder.

    We often solve problems involving a pipe exiting to the atmosphere. For such a situation the
pressure just inside the pipe exit is the same as the atmospheric pressure just outside the pipe exit since
the streamlines exiting the pipe are straight near the exit (see Fig. 3.12). This is quite different from the
entrance ﬂow of Fig. 3.12 where the streamlines near the entrance are extremely curved.
    To approximate the pressure variation normal to curved streamlines, consider the particle of
Fig. 3.10 to be a parallelepiped
                      P           with thickness normal to the streamline of dn with area dAs of the side
with length ds. Use Fn ¼ man :
                                             @p                                  V2
                                p dAs 2 p þ dn dAs 2 rg dn dAs ¼ r dn dAs                               ð3:30Þ
                                             @n                                   R
where we have used the acceleration to be V2=R, R being the radius of curvature in the assumed plane
ﬂow. If we assume that the effect of gravity is small when compared with the acceleration term, this
equation simpliﬁes to
                                                          @p    V2
                                                      2      ¼r                                           ð3:31Þ
                                                          @n    R
Since we will use this equation to make estimations of pressure changes normal to a streamline, we
approximate @p=@n ¼ Dp=Dn and arrive at the relationship
                                                          Dp    V2
                                                      2      ¼r                                           ð3:32Þ
                                                          Dn    R
Hence, we see that the pressure decreases as we move toward the center of the curved streamlines; this is
experienced in a tornado where the pressure can be extremely low in the tornado’s ‘‘eye.’’ This reduced
pressure is also used to measure the intensity of a hurricane; that is, the lower the pressure in the
hurricane’s center, the larger the velocity at its outer edges.

 EXAMPLE 3.4 The wind in a hurricane reaches 200 km=h. Estimate the force of the wind on a window facing
 the wind in a high-rise building if the window measures 1 m · 2 m. Use the density of the air to be 1.2 kg=m3.
     Solution: Use Bernoulli’s equation to estimate the pressure on the window
                                       V2         ð200 · 1000=3600Þ2
                                 p¼r      ¼ 1:2 ·                    ¼ 1852 N=m2
                                       2                   2
 where the velocity must have units of m=s. To check on the units, use kg ¼ ðN·s2 Þ=m:
 Assume the pressure to be essentially constant over the window so that the force is then
                                    F ¼ pA ¼ 1852 · 1 · 2 ¼ 3704 N or 833 lb
 This force is large enough to break many windows, especially if they are not properly designed.
CHAP. 3]                                      FLUIDS IN MOTION                                                     53



 EXAMPLE 3.5 A piezometer is used to measure the pressure in a pipe to be 20 cm of water. A pitot tube
 measures the total pressure to be 33 cm of water at the same general location. Estimate the velocity of the water
 in the pipe.
      Solution: The velocity using Eq. (3.27) is found to be
                          sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                            2             pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                     V¼       ðp2 2 p1 Þ ¼ 2gðh2 2 h1 Þ ¼ 2 · 9:81 · ð0:33 2 0:20Þ ¼ 1:60 m=s
                            r
 where we used the pressure relationship p ¼ rgh:




                                             Solved Problems

3.1   A velocity ﬁeld in a plane ﬂow is given by V ¼ 2yti þ xj m=s, as in Example 3.1. Find the
      acceleration, the angular velocity, and the vorticity vector at the point (4 m, 2 m) at t ¼ 3 s.
      (Note: the constants have units so that the velocity has units of m=s.)
           The acceleration is given by

                               @V    @V    @V    @V
                         a¼       þu    þv    þw    ¼ 2yi þ 2ytðjÞ þ xð2tiÞ ¼ 2ðxt þ yÞi þ 2ytj
                               @t    @x    @y    @z

           At the point (4, 2) and t ¼ 3 s the acceleration is
                                       a ¼ 2ð4 · 3 þ 2Þi þ 2 · 2 · 3tj ¼ 28i þ 12j m=s2
           The angular velocity is
                                    1 @w    @v    1 @u @w    1 @v @u    1
                               O¼              iþ     2   jþ     2   k ¼ ð1 2 2tÞk
                                    2 @y    @z    2 @z @x    2 @x @y    2
           At t ¼ 3 s, it is
                                                   1               5
                                               Oz ¼ ð1 2 2 · 3Þ ¼ 2 rad=s
                                                   2               2

           The vorticity vector is twice the angular velocity vector so
                                                       o ¼ 5k rad=s


3.2   Find the rate-of-change of the density in a stratiﬁed ﬂow where r ¼ 1000(1 2 0.2z) and the
      velocity is V ¼ 10ðz 2 z2 Þi:
           The velocity is in the x-direction only and the density varies with z (usually the vertical direction). The
           material derivative provides the answer
                                             Dr   @r  @r      @r @r
                                                ¼u þv    þ 6w   þ   ¼0
                                             Dt   @x  @y      @z @t

           So, there is no density variation of a particular particle as that particle moves through the ﬁeld of ﬂow.

3.3   A velocity ﬁeld is given in cylindrical coordinates as
                                        8                              8
                               vr ¼ 2 2 2 cos y m=s         vy ¼ 2 2 þ 2 sin y m=s        vz ¼ 0
                                       r                              r

           What is the acceleration at the point (3 m, 90–)?
54                                          FLUIDS IN MOTION                                            [CHAP. 3



          Table 3.1 provides the equations for the acceleration components. We have
                               @vr vy @vr     @v v 2 @v
                     ar ¼ vr      þ       þ vz r 2 y þ r
                               @r   r @y      @z   r  @t
                              8       16        2 8           8        1    8 2
                        ¼ 2 2 2 cos y 3 cos y þ þ 3 sin y 2 2 2 sin y 2 2 þ 2 sin2 y
                             r        r         r r          r         r   r
                                 2 8           8  1   8 2
                        ¼0þ       þ       22     2 2þ     ¼ 21:712 m=s2
                                 3 27          9  3   9

                            @vy vy @vy     @v  vv    @v
                  ay ¼ vr      þ       þ vz y þ r y þ y
                            @r   r @y      @z    r    @t
                           8       16       1    8 2             2 8           8
                     ¼ 2 2 2 cos y 3 sin y þ 2 þ 2 sin y cos y 2 2 2 cos y 2 þ 2 sin y
                          r        r        r   r                r r          r
                     ¼0

                   az ¼ 0
          Note that cos 90– ¼ 0 and sin 90– ¼ 1:


3.4   A laminar ﬂow of 20–C water in an 8-mm diameter pipe is desired. A 2-L container, used to catch
      the water, is ﬁlled in 82 s. Is the ﬂow laminar?
          To make the determination, the Reynolds number must be calculated. First, determine the average
          velocity. It is
                                                    Q 2 · 1023 =82
                                               V¼     ¼            ¼ 0:485
                                                    A   p · 0:0042
          Using the kinematic viscosity of water to be about 1026 m2=s (see Table C.1), the Reynolds number is
                                                 Vh 0:485 · 0:008 · 0:5
                                          Re ¼      ¼                   ¼ 3880
                                                  n        1026
          This is greater than 2000 so if the pipe is not smooth or the entrance is not well-rounded, the ﬂow would
          be turbulent. It could, however, be laminar if care is taken to avoid building vibrations and water
          ﬂuctuations with a smooth pipe.
3.5   The pitot and piezometer probes read the
      total and static pressures as shown in
      Fig. 3.14. Calculate the velocity V.                         112 kPa                           240 kPa

          Bernoulli’s equation provides

                                                                             V                      Water
             V22 p2      V2 p
                þ þ gh2 ¼ 1 þ 1 þ gh1
              2  r        2   r

                                                                                  Figure 3.14

          where point 2 is just inside the pitot tube. Using the information given, there results
                                    240 000 V12 112 000
                                           ¼   þ                    \ V1 ¼ 16 m=s
                                     1000    2   1000
                                                                    N=m2    ðkg·m=s2 Þ=m2 m2
          Check the units on the ﬁrst term of the above equation:       3
                                                                          ¼              ¼ 2 :
                                                                    kg m
                                                                      =        kg=m3       s

3.6   A nozzle on a hose accelerates water from 4-cm diameter to 1-cm diameter. If the pressure is
      400 kPa upstream of the nozzle, what is the maximum velocity exiting the nozzle?
CHAP. 3]                                       FLUIDS IN MOTION                                                      55


           The continuity equation relates the velocities
                              A1 V1 ¼ A2 V2       p · 22 · V1 ¼ p · 0:52 · V2     \ V2 ¼ 16V1
           The Bernoulli equation provides
                                       V12 400 000         256V12 100 000
                                          þ        þ gh1 ¼       þ        þ gh2
                                        2   1000             2     1000

                                           \ V1 ¼ 1:534 m=s and V2 ¼ 24:5 m=s
           This represents the maximum since we have assumed no losses due to viscous effects and have assumed
           uniform velocity proﬁles.


3.7    Water ﬂows through a long-sweep elbow on a 2-cm diameter pipe at an average velocity of 20 m=s.
       Estimate the increase in pressure from the inside of the pipe to the outside of the pipe midway
       through the elbow if the radius of curvature of the elbow averages 4 cm at the midway section.
           Equation (3.32) provides the relationship between the pressure increase and the radius of curvature
                         Dp    V2              Dp           202
                     2      ¼r            2        ¼ 1000 ·             \ Dp ¼ 200 000 Pa or 200 kPa
                         Dn    R              0:02          0:04
           This surprisingly high pressure difference can move the slow-moving water near the pipe wall (the water
           sticks to the wall due to viscosity) from the outside to the inside of the corner thereby creating a
           secondary ﬂow as the water leaves the elbow. This secondary ﬂow is eventually dissipated and accounts
           for a relatively large loss due to the elbow.



                                       Supplementary Problems
Fluid Motion

3.8    The trafﬁc in a large city is to be studied. Explain how it would be done using (a) the Lagrangian approach
       and (b) the Eulerian approach.

3.9    A light bulb and battery are attached to a large number of bars of soap that ﬂoat. Explain how pathlines and
       streaklines would be photographed in a stream.

3.10   The light from a single car is photographed from a high vantage point with a time exposure. What is the line
       that is observed in the photograph? A long time passes as a large number of car lights are photographed
       instantaneously on the same road from the same high vantage point. What is the relation between the two
       photographs? Explain similarities and differences.

3.11   The parabolic velocity distribution in a channel ﬂow is given by uðyÞ ¼ 0:2ð1 2 y2 Þ m=s with y measured in
       centimeters. What is the acceleration of a ﬂuid particle on the centerline where y ¼ 0? At a location where
       y ¼ 0.5 cm?

3.12   Calculate the speed and acceleration of a ﬂuid particle at the point (2, 1, 23) when t ¼ 2 s if the velocity ﬁeld
       is given by (distances are in meters and the constants have the necessary units):
           (a)   V ¼ 2xyi þ y2 tj þ yzk m=s
           (b)   V ¼ 2ðxy 2 z2 Þi þ xytj þ xztk m=s

3.13   Find the unit vector normal to the streamline at the point (2, 21) when t ¼ 2 s if the velocity ﬁeld is given by:
           (a)   V ¼ 2xyi þ y2 tj m=s
           (b)   V ¼ 2yðx 2 yÞi þ xytj m=s
56                                            FLUIDS IN MOTION                                             [CHAP. 3



3.14    What is the equation of the streamline that passes through the point (2, 21) when t ¼ 2 s if the velocity ﬁeld
        is given by:
             (a)   V ¼ 2xyi þ y2 tj m=s
             (b)   V ¼ 2y2 i þ xytj m=s

3.15    Determine the acceleration (vector and magnitude) of the ﬂuid particle occupying the point (22, 1, 1) m
        when t ¼ 2 s if the velocity ﬁeld is given by:
             (a) V ¼ 2xyi þ xzj þ yzk m=s
             (b) V ¼ 2y2 i þ ðx 2 2tÞj þ z2 k m=s
             (c) V ¼ 2yzi þ ðx2 2 2y2 Þj þ z2 tk m=s

3.16    Find the angular velocity and vorticity vectors at the point (1, 2, 3) when t ¼ 3 s for the velocity ﬁeld of:
             (a)   Prob. 3.13a
             (b)   Prob. 3.13b
             (c)   Prob. 3.14a
             (d)   Prob. 3.14b

3.17    The velocity ﬁeld in a ﬂuid ﬂow is given by V ¼ 2yi þ xj þ tk: Determine the magnitudes of the acceleration,
        the angular velocity, and the vorticity at the point (2, 1, 21) at t ¼ 4 s.

3.18    The temperature ﬁeld of a ﬂow in which V ¼ 2yi þ xj þ tk is given by Tðx; y; zÞ ¼ 20xy – C:
        Determine the rate of change of the temperature of a ﬂuid particle in the ﬂow at the point (2, 1, 22)
        at t ¼ 2 s.

3.19    A velocity ﬁeld is given in cylindrical coordinates as
                                      1                                 1
                             vr ¼ 4 2 2 sin y m=s            vy ¼ 2 4 þ 2 cos y m=s       vz ¼ 0
                                     r                                 r

             (a) What is the acceleration at the point (0.6 m, 90–)?
             (b) What is the vorticity at the point (0.6 m, 90–)?

3.20    A velocity ﬁeld is given in spherical coordinates as
                                      1                                 1
                             vr ¼ 8 2 3 cos y m=s            vy ¼ 2 8 þ 3 sin y m=s       vf ¼ 0
                                     r                                 r

       What is the acceleration at the point (0.6 m, 90–)?




Classiﬁcation of Fluid Flows

3.21    Select the word: uniform, one-dimensional, two-dimensional, or three-dimensional, that best describes each
        of the following ﬂows:
             (a)   Developed ﬂow in a pipe
             (b)   Flow of water over a long weir
             (c)   Flow in a long, straight canal
             (d)   The ﬂow of exhaust gases exiting a rocket
             (e)   Flow of blood in an artery
             (f)   Flow of air around a bullet
             (g)   Flow of blood in a vein
             (h)   Flow of air in a tornado

3.22    Select the ﬂow in Prob. 3.21 that could be modeled as a plane ﬂow.
CHAP. 3]                                      FLUIDS IN MOTION                                                      57


3.23   Select the ﬂow in Prob. 3.21 that would be modeled as an unsteady ﬂow.

3.24   Select the ﬂow in Prob. 3.21 that would have a stagnation point.

3.25   Which ﬂows in Prob. 3.21 could be modeled as inviscid ﬂows?

3.26   Which ﬂow in Prob. 3.21 would be an external ﬂow?

3.27   Which ﬂows in Prob. 3.21 would be compressible ﬂows?

3.28   Which ﬂow in Prob. 3.21 would have a boundary layer?

3.29   Which ﬂows in Prob. 3.21 would deﬁnitely be modeled as turbulent ﬂows?

3.30   Water exits a 1-cm-diameter outlet of a faucet. Estimate the maximum speed that would result in a laminar
       ﬂow if the water temperature is (a) 20–C, (b) 50–C, and (c) 100–C. Assume Re ¼ 2000.

3.31   Air ﬂows over and parallel to a ﬂat plate at 2 m=s. How long is the laminar portion of the boundary layer if
       the air temperature is (a) 30–C, (b) 70–C, and (c) 200–C. Assume a high-ﬂuctuation level on a smooth rigid
       plate.

3.32   Decide if each of the following can be modeled as an incompressible ﬂow or a compressible ﬂow:
           (a)   the take-off and landing of commercial airplanes
           (b)   the airﬂow around an automobile
           (c)   the ﬂow of air in a hurricane
           (d)   the airﬂow around a baseball thrown at 100 mi/h

3.33   Write all the non-zero terms of Dr/Dt for a stratiﬁed ﬂow in which:
           (a) r ¼ r(z) and V ¼ z(2– z)i
           (b) r ¼ r(z) and V ¼ f(x, z)i þ g(x, z)j




Bernoulli’s equation
3.34   A pitot-static tube measures the total pressure pT and the local pressure p in a uniform ﬂow in a 4-cm-
       diameter water pipe. Calculate the ﬂow rate if:
           (a)   pT ¼ 1500 mm of mercury and p ¼ 150 kPa
           (b)   pT ¼ 250 kPa and p ¼ 800 mm of mercury
           (c)   pT ¼ 900 mm of mercury and p ¼ 110 kPa
           (d)   pT ¼ 10 in. of water and p ¼ 30 lb=ft2

3.35   Find an expression for the pressure distribution along the horizontal negative x-axis given the velocity ﬁeld in
       Solved Problem 3.3 if pð21, 180– Þ ¼ p1 : Viscous effects are assumed to be negligible.

3.36   Determine v the velocity V in the pipe if the ﬂuid
       in the pipe of Fig. 3.15 is:                                              V

           (a)   Atmospheric air and h ¼ 10 cm of water
           (b)   Water and h ¼ 10 cm of mercury
                                                                                               h
           (c)   Kerosene and h ¼ 20 cm of mercury
           (d)   Gasoline and h ¼ 40 cm of water
                                                                                            Figure 3.15
58                                                    FLUIDS IN MOTION                                            [CHAP. 3



3.37                                                                      Determine the velocity V in the pipe if the ﬂuid
             V                       4V                                   in the pipe of Fig. 3.16 is:
                                                                                (a)   Atmospheric air and h ¼ 40 cm of water
                                                                                (b)   Water and h ¼ 20 cm of mercury
                          h
                                                                                (c)   Kerosene and h ¼ 30 cm of mercury
                                                                                (d)   Gasoline and h ¼ 80 cm of water
                      Figure 3.16



                                 Answers to Supplementary Problems

3.8    Ride in cars. Stand on corners.

3.9    A time exposure. An instantaneous picture.

3.10   A pathline. A streakline.

3.11   0, 0

3.12   (a) 5.385 m=s, 10i þ 9j 2 3k m=s2              (b) 12.81 m=s, 156i 2 10j þ 30k m=s2
                    pﬃﬃ                        pﬃﬃﬃ
3.13   (a) ði 2 2jÞ= 5          (b) ð22i þ 3jÞ= 13

3.14   (a) x ¼ 22y            (b) x2 2 y2 ¼ 3

3.15   (a) 22i 2 3j           (b) 224i þ 2k       (c) 24i 2 8j þ 9k

3.16   (a) 6i 2 k, 12i 2 2k          (b) 23i=2 2 6k, 23i 2 12k          (c) 6i 2 k, 12i 2 2k        (d) 23i=2 2 4k, 23i 2 8k

3.17   4.583 m=s2 2 0.5 rad=s 2 1.0 rad=s

3.18   120–C=s

3.19   (a) ar ¼ 11:31 m=s2 , ay ¼ 0           (b) 0

3.20   336.8 m=s2

3.21   (a) 1-D        (b) 2-D          (c) 2-D         (d) 3-D        (e) 1-D         (f) 2-D      (g) 1-D      (h) 3-D

3.22   (b)

3.23   (e)

3.24   (f)

3.25   (b) (h)

3.26   (f)

3.27   (d) (f)

3.28   (f)
CHAP. 3]                                         FLUIDS IN MOTION                                           59


3.29   (c) (d)

3.30   (a) 0.201 m=s         (b) 0.111 m=s        (c) 0.0592 m=s

3.31   (a) 5.58 m        (b) 6.15 m          (c) 7.71 m

3.32   (a) incompressible         (b) incompressible           (c) incompressible      (d) incompressible

3.33   (a) none        (b) none

3.34   (a) 10.01 m=s         (b) 16.93 m=s        (c) 4.49 m=s         (d) 1.451 m=s
                 8 16
3.35   2r 1 þ      2
                 x2 x4
3.36   (a) 39.9 m=s         (b) 4.97 m=s        (c) 7.88 m=s         (d) 1.925 m=s

3.37   (a) 79.8 m=s         (b) 7.03 m=s        (c) 9.65 m=s         (d) 2.72 m=s
                                        Chapter 4


The Integral
Equations

4.1    INTRODUCTION
Fluid mechanics is encountered in almost every area of our physical lives. Many, if not most, of the
quantities of interest are integral quantities; they are found by integrating some property of interest over
an area or a volume. Many times the property is essentially constant so the integration is easily
performed but other times, the property varies over the area or volume and the required integration may
be quite difﬁcult.
     What are some of the integral quantities of interest? The rate of ﬂow through a pipe, the force on the
vertical surface of a dam, the kinetic energy in the wind approaching a wind machine, the power
generated by the blade of a turbine, the force on the blade of a snowplow, and the drag on an airfoil, to
mention a few. There are quantities that are not integral in nature, such as the minimum pressure on a
body or the point of separation on an airfoil; quantities such as these will be considered in Chap. 5.
     To perform an integration over an area or a volume, it is necessary that the integrand be known. The
integrand must either be given or information must be available so that it can be approximated with an
acceptable degree of accuracy. There are numerous integrands where acceptable approximations cannot
be made requiring the solutions of differential equations to provide the required relationships; external
ﬂow calculations, such as the lift and drag on an airfoil, often fall into this category. Some relatively
simple integrals requiring solutions to the differential equations will be included in Chap. 5. In this
chapter, only those problems that involve integral quantities with integrands that are given or that can be
approximated will be considered.


4.2    SYSTEM-TO-CONTROL-VOLUME TRANSFORMATION
The three basic laws that are of interest in ﬂuid mechanics are often referred to as the conservation of
mass, energy, and momentum. The last two are more speciﬁcally called the ﬁrst law of thermodynamics
and Newton’s second law. Each of these laws is expressed using a Lagrangian description of motion;
they apply to a speciﬁed mass of the ﬂuid. They are stated as follows:
      Mass: The mass of a system remains constant.
      Energy: The rate of heat transfer to a system minus the work rate done by a system equals the rate of
      change of the energy E of the system.

                                                           60
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 4]                                 THE INTEGRAL EQUATIONS                                             61



    Momentum: The resultant force acting on a system equals the rate of momentum change of the
    system.
Each of these laws will now be stated mathematically recognizing that the rate of change applies to a
collection of ﬂuid particles and the fact that the density, speciﬁc energy, and velocity can vary from point to
point in the volume of interest. This requires the material derivative and integration over the volume
                                                     DZ
                                                0¼          r dV       ðmassÞ                             ð4:1Þ
                                                    Dt sys
                                                       Z
                                              _ ¼ D
                                         Q_ 2 W               er dV       ðenergyÞ                        ð4:2Þ
                                                  Dt    sys

                                           X         DZ
                                               F¼           Vr dV         ðmomentumÞ                      ð4:3Þ
                                                     Dt sys
where the dot over Q and W signiﬁes a time rate and e is the speciﬁc energy included in the parentheses
of Eq. (1.29). It is very difﬁcult to apply Eqs. (4.1) to (4.3) directly to a collection of ﬂuid particles as
the ﬂuid moves along in either a simple pipe ﬂow or the more complicated ﬂow through a turbine.
So, let us convert these integrals that are expressed using a Lagrangian description to integrals
expressed using an Eulerian description (see Sec. 3.2.1). This is a rather tedious derivation but an
important one.
    In this derivation, it is necessary to differentiate between two volumes: a control volume that is a
ﬁxed volume in space and a system that is a speciﬁed collection of ﬂuid particles. Figure 4.1 illustrates
the difference between these two volumes. It represents a general ﬁxed volume in space through which
a ﬂuid is ﬂowing;
             R      the volumes are shown at time t and at a slightly later time t þ Dt. Let us select the
energy E ¼ sys er dV with which to demonstrate the material derivative; lowercase e denotes the
speciﬁc energy. We then write, assuming Dt to be a small quantity

                    DEsys Esys ðt þ DtÞ 2 Esys ðtÞ
                         >
                     Dt             Dt
                           E3 ðt þ DtÞ þ E2 ðt þ DtÞ 2 E1 ðtÞ 2 E2 ðtÞ
                         ¼
                                               Dt
                           E2 ðt þ DtÞ þ E1 ðt þ DtÞ 2 E2 ðtÞ 2 E1 ðtÞ E3 ðt þ DtÞ 2 E1 ðt þ DtÞ
                         ¼                                             þ                                  ð4:4Þ
                                               Dt                                 Dt



                                               dV3

                                                                      System at
                     Fixed control                         3          time t + t
                     volume

                                                                      Fixed control
                                                                      volume occupies 1 and 2
                   System
                   at time t                     2                      System at time t
                                                                        occupies 1 and 2
                                     1
                               dV1                                       System at time t + t
                                                                         occupies 2 and 3


                               Figure 4.1 The system and the ﬁxed control volume.
62                                    THE INTEGRAL EQUATIONS                                      [CHAP. 4



where we have simply added and subtracted E1 ðt þ DtÞ in the last line. Note that the ﬁrst ratio in the last
line above refers to the control volume so that
                                  E2 ðt þ DtÞ þ E1 ðt þ DtÞ 2 E2 ðtÞ 2 E1 ðtÞ dEcv
                                                                             >                         ð4:5Þ
                                                      Dt                       dt
where an ordinary derivative is used since we are no longer following a speciﬁed ﬂuid mass. Also, we
have used ‘‘cv’’ to denote the control volume. The last ratio in Eq. (4.4) results from ﬂuid ﬂowing into
volume 3 and out of volume 1. Consider the differential volumes shown in Fig. 4.1 and displayed
with more detail in Fig. 4.2. Note that the area A1 þ A3 completely surrounds the control volume so that
                                                     Z                 Z
                         E3 ðt þ DtÞ 2 E1 ðt þ DtÞ ¼   er ^
                                                          n·VDt dA3 þ      er ^
                                                                              n·VDt dA1
                                                       A3                      A1
                                                       Z
                                                   ¼        er ^
                                                               n·VDt dA                                ð4:6Þ
                                                       cs

where ‘‘cs’’ is the control surface that surrounds the control volume. Substituting Eqs. (4.5) and (4.6)
into Eq. (4.4) results in the Reynolds transfer theorem, a system-to-control-volume transformation,
                                       DEsys     dZ           Z
                                             ¼        er dV þ     er ^
                                                                     n·V dA                        ð4:7Þ
                                         Dt     dt cv          cs

where, in general, e would represent the speciﬁc property of E. Note that we could have taken the limit as
Dt ! 0 to make the derivation more mathematically rigorous.



                                     dA1     V t             dA3       V t
                                        n                          n
                                     dV1 =–n·V tdA1           dV3 = n·V tdA3

                           Figure 4.2 Differential volume elements from Fig. 4.1.


     If we return to the energy equation of Eq. (4.2), we can now write it as
                                                  Z          Z
                                     Q_ 2 W_ ¼ d     er dV þ     er ^
                                                                    n·V dA                             ð4:8Þ
                                               dt cv          cs

If we let e ¼ 1 in Eq. (4.7) [see Eq. (4.1)], then the conservation of mass results. It is
                                                 dZ          Z
                                           0¼         r dV þ     r^
                                                                  n·V dA                               ð4:9Þ
                                                dt cv         cs

And ﬁnally, if we replace e in Eq. (4.7) with the vector V [see Eq. (4.3)], Newton’s second law results:
                                      X       dZ            Z
                                         F¼        rV dV þ       Vr ^
                                                                    n·V dA                        ð4:10Þ
                                             dt cv            cs

    These three equations can be written in a slightly different form by recognizing that a ﬁxed control
volume has been assumed. That means that the limits of the ﬁrst integral on the right-hand side of each
equation are independent of time. Hence, the time derivative can be moved inside the integral if desired;
note that it would be written as a partial derivative should it be moved inside the integral since the
integrand depends on x, y, z, and t, in general. The momentum equation would take the form
                                      X      Z @              Z
                                         F¼         ðrVÞdV þ      Vr ^
                                                                     n·V dA                        ð4:11Þ
                                              cv @t            cs

     The following three sections will apply these integral forms of the basic laws to problems in which
the integrands are given or in which they can be assumed.
CHAP. 4]                                 THE INTEGRAL EQUATIONS                                               63



4.3    CONSERVATION OF MASS
The most general relationship for the conservation of mass using the Eulerian description that focuses on
a ﬁxed volume was developed in Sec. 4.2 and is
                                              dZ          Z
                                         0¼        r dV þ      r^
                                                                n·V dA                             ð4:12Þ
                                             dt cv          cs

Since the limits on the volume integral do not depend on time, this can be written as
                                             Z @r        Z
                                         0¼         dV þ     r^
                                                              n·V dA                                      ð4:13Þ
                                              cv @t       cs

If the ﬂow of interest can be assumed to be a steady ﬂow so that time does not enter Eq. (4.13), the
equation simpliﬁes to
                                                  Z
                                             0¼      r^
                                                      n·V dA                                  ð4:14Þ
                                                            cs

Those ﬂows in which the density r is uniform over an area are of particular interest in our study of ﬂuids.
Also, most applications have one entrance and one exit. For such a problem, Eq. (4.14) can then be
written as
                                              r2 A2V 2 ¼ r1 A1V 1                                  ð4:15Þ
                                                               R
where an overbar denotes an average over an area, i.e., V A ¼ V dA. Note also that at an entrance, we
use ^
    n·V1 ¼ 2V1 since the unit vector points out of the volume and the velocity is into the volume, but at
an exit ^
        n·V2 ¼ V2 since the two vectors are in the same direction.
    For incompressible ﬂows in which the density does not change* between the entrance and the exit
and the velocity is uniform over each area, the conservation of mass takes the simpliﬁed form:
                                                      A2 V2 ¼ A1 V1                                       ð4:16Þ
We refer to each of the above equations as the continuity equation. The one in Eq. (4.16) will be used
quite often. These equations are used most often to relate the velocities between sections.
    The quantity rVA is the mass ﬂux and has units of kg=s (slugs per second). The quantity VA is the
ﬂow rate (or discharge) and has units of m3=s (ft3=sec or cfs). The mass ﬂux is usually used in a gas ﬂow
and the discharge in a liquid ﬂow. They are deﬁned by
                                                        m_ ¼ rAV
                                                                                                          ð4:17Þ
                                                        Q ¼ AV
where V is the average velocity at a section of the ﬂow.

    EXAMPLE 4.1 Water ﬂows in a 6-cm-diameter pipe with a ﬂow rate of 0.06 m3=s. The pipe is reduced in
    diameter to 2.8 cm. Calculate the maximum velocity in the pipe. Also calculate the mass ﬂux. Assume uniform
    velocity proﬁles.
         Solution: The maximum velocity in the pipe will be where the diameter is the smallest. In the 2.8-cm-
    diameter section we have
                                       Q ¼ AV
                                     0:02 ¼ p · 0:0142 V2        \ V2 ¼ 32:5 m=s
    The mass ﬂux is
                                         m_ ¼ rQ ¼ 1000 · 0:02 ¼ 20 kg=s



*
 Not all incompressible ﬂows have constant density. Atmospheric and oceanic ﬂows are examples as is salt water
ﬂowing in a canal where fresh water is also ﬂowing.
64                                           THE INTEGRAL EQUATIONS                                        [CHAP. 4



    EXAMPLE 4.2 Water ﬂows into a volume that contains a sponge with a ﬂow rate of 0.02 m3=s. It exits the
    volume through two tubes, one 2 cm in diameter and the other with a mass ﬂux of 10 kg=s. If the velocity out the
    2-cm-diameter tube is 15 m=s, determine the rate at which the mass is changing inside the volume.
        Solution: The continuity equation (4.12) is used. It is written in the form
                                                   dmvol
                                              0¼         þ m_ 2 þ rA3 V3 2 rQ1
                                                    dt
                     R
    where mvol ¼ r dV and the two exits and entrance account for the other three terms. Expressing the derivative
    term as m_ vol , the continuity equation becomes
                                m_ vol ¼ rQ1 2 m_ 2 2 rA3 V3
                                     ¼ 1000 · 0:0221021000 · p · 0:012 · 15 ¼ 5:29 kg=s
    The sponge is soaking up water at the rate of 5.29 kg=s.


4.4     THE ENERGY EQUATION
The ﬁrst law of thermodynamics, or simply, the energy equation, is of use whenever heat transfer or
work is desired. If there is essentially no heat transfer and no external work from a pump or some other
device, the energy equation allows us to relate the pressure, the velocity, and the elevation. Let us see
how this develops. We begin with the energy equation (4.8) in its general form
                                                    Z           Z
                                             _ ¼ d
                                         Q_ 2W          er dV þ     er ^
                                                                       n·V dA                      ð4:18Þ
                                                  dt cv          cs

Most applications allow us to simplify this equation by assuming a steady, uniform ﬂow with one
entrance and one exit. The energy equation simpliﬁes to
                                                Q_ 2W
                                                    _ ¼ e2 r2 V2 A2 2 e1 r1 V1 A1                              ð4:19Þ
where we have used ^
                   n·V ¼ 2V1 at the entrance. Using the continuity equation (4.15), this is written as
                                                       Q_ 2W
                                                           _ ¼ m_ ðe2 2 e1 Þ                                   ð4:20Þ
    The work rate term results from a force moving with a velocity: W          _ ¼ F·V. The force can be a
pressure or a shear multiplied by an area. If the ﬂow is in a conduit, e.g., a pipe or a channel, the walls do
not move so there is no work done by the walls. If there is a moving belt, there could be an input of work
due to the shear between the belt and the ﬂuid. The most common work rate terms result from the
pressure forces at the entrance and the exit (pressure is assumed to be uniform over each area) and from
any device between the entrance and the exit. The work rate term is expressed as
                                                   _ ¼ p2 A2 V22p1 A1 V1 þ W
                                                   W                       _S                                  ð4:21Þ
where power output is considered positive and W  _ S is the shaft power output from the control volume (a
pump would be a negative power and a turbine would provide a positive power output). Using the
expression for e given in Eq. (1.29), Eq. (4.20) takes the form
                                                                                        !
                                                                2                2
                         _                        _ S ¼ m_   V 2              V 1
                        Q 2 p2 A2 V2 þ p1 A1 V12W                 þ gz2 þ u~22 2gz12u~1             ð4:22Þ
                                                              2                2
The heat-transfer term and the internal energy terms form the losses in the ﬂow (viscous effects result in
heat transfer and/or an increase in internal energy). Divide Eq. (4.22) by m_ g and simplify*
                                             W_ S V22 p2       p   V2
                                         2        ¼   þ þ z 2 2 1 2 1 2 z 1 þ hL                               ð4:23Þ
                                             m_ g   2g g2      g1 2g


*
    We used m_ ¼ r2 A2 V2 ¼ r1 A1 V1 .
CHAP. 4]                                THE INTEGRAL EQUATIONS                                                  65



where we have included the loss term as hL, called the head loss; it is hL ¼ ðu~2 2 u~1 Þ=g þ Q_ =m_ g. An
incompressible ﬂow occurs in many applications so that g1 ¼ g2 . Recall that g for water is 9810 N/m3
(62.4 lb/ft3).
    The head loss term is often expressed in terms of a loss coefﬁcient K
                                                               V2
                                                      hL ¼ K                                                ð4:24Þ
                                                               2g
where V is some characteristic velocity in the ﬂow; if it is not obvious it will be speciﬁed. Some loss
coefﬁcients are listed in Table 7.2; in this chapter they will be given.
      The term hL is called the head loss because it has the dimension of length. We also refer to V 2/2g
as the velocity head, p/g as the pressure head, and z as the head. The sum of these three terms is the
total head.
      The shaft-work term in Eq. (4.23) is usually due to either a pump or a turbine. If it is a pump, we can
deﬁne the pump head HP as
                                                       2W  _ S ZP W _P
                                                HP ¼          ¼                                         ð4:25Þ
                                                        m_ g     m_ g
where W   _ P is the power input to the pump and ZP is the pump efﬁciency. For a turbine the turbine head
HT is
                                                       W _       _T
                                                                 W
                                                 HT ¼ S ¼                                               ð4:26Þ
                                                        m_ g m_ g ZT
where W   _ T is the power output of the turbine and ZT is the turbine efﬁciency. Power has units of watts
[(ft-lb)=sec] or horsepower.
      If the ﬂow is not uniform over the entrance and the exit, an integration must be performed to
obtain the kinetic energy. The rate at which the kinetic energy crosses an area is [see Eqs. (4.18)
and (1.29)]
                                                           Z V2         1Z
                                   Kinetic energy rate ¼        rV dA ¼    rV 3 dA                      ð4:27Þ
                                                              2         2
If the velocity distribution is known, the integration can be performed. A kinetic-energy correction factor
a is deﬁned as
                                                        R 3
                                                          V dA
                                                    a¼      3
                                                                                                     ð4:28Þ
                                                         V A
The kinetic energy term can then be written as
                                           1 Z 3     1   3
                                             r V dA ¼ raV A                                                 ð4:29Þ
                                           2         2
so that, for non-uniform ﬂows, the energy equation takes the form
                                      _S       2                 2
                                      W      V         p      V         p
                                  2      ¼ a2 2 þ z 2 þ 2 2 a1 1 2 z 1 2 1 þ hL                             ð4:30Þ
                                      _
                                      mg     2g        g2      2g       g1
where V 1 and V 2 are the average velocities at sections 1 and 2, respectively. Equation (4.30) is used if
the a’s are known; for parabolic proﬁles, a ¼ 2 in a pipe and a ¼ 1.5 between parallel plates. For
turbulent ﬂows (most ﬂows in engineering applications), a > 1.


 EXAMPLE 4.3 Water ﬂows from a reservoir with elevation 30 m out of a 5-cm-diameter pipe that has a 2-cm-
 diameter nozzle attached to the end, as shown in Fig. 4.3. The loss coefﬁcient for the entire pipe is given as
 K ¼ 1.2. Estimate the ﬂow rate of water through the pipe. Also, predict the pressure just upstream of the nozzle
 (the losses can be neglected through the nozzle). The nozzle is at an elevation of 10 m.
66                                       THE INTEGRAL EQUATIONS                                             [CHAP. 4




                                       el. 30m



                          Water
                                                                                 2cm
                                                      5-cm-dia.              p




                                                        Figure 4.3
     Solution: The energy equation is written in the form
                                     W_ S V22        P_  V2       p      V2
                                          ¼    þ z2 þ 2 2 1 2 z1 2 1 þ K
                                     m_ g   2g       g2 2g        g1     2g
 where the pressure is 0 at surface 1 and at the exit 2, the velocity is 0 at the surface, and there is no shaft work
 (there is no pump or turbine). The loss coefﬁcient would be based on the characteristic velocity V in the pipe and
 not on the exit velocity V2. Use the continuity equation to relate the velocities:
                                                     A2     d2       4
                                              V¼        V2 ¼ 22 V2 ¼ V2
                                                     A      d       25
 The energy equation provides
                                                       2 2
                                   V22                 4 V2
                              0¼       þ 10 2 30 þ 1:2                 \ V2 ¼ 19:5 m=s
                                   2g                  25 2g
 The pressure just before the nozzle is found by applying the energy equation across the nozzle assuming no losses
 (Bernoulli’s equation could also be used). It takes the form
                                             _ S V22 P2
                                             W                  V2 p
                                         2      ¼    þ   þ z=2 2 2 2 z=
                                             mg   2g   g        2g g
 where area 2 is at the exit and p and V are upstream of the nozzle. The energy equation gives
                                         2
                    19:52     P           4 19:52     p
              0¼            þ 2 þ z=2 2            2      2 z=    \ p ¼ 185 300 Pa or 185:3 kPa
                   2 · 9:81    g         25 2 · 9:8 9810




 EXAMPLE 4.4 An energy conscious couple decides to dam up the creek ﬂowing next to their cabin and
 estimates that a head of 4 m can be established above the exit to a turbine they bought on eBay. The creek is
 estimated to have a ﬂow rate of 0.8 m3=s. What is the maximum power output of the turbine assuming no losses
 and a velocity at the turbine’s exit of 3.6 m=s?
      Solution: The energy equation is applied as follows:
                                       W_    V2 P          V2 P
                                    2 T ¼ 2 þ 2 þ z=2 2 1 2 1 2 z1 þ hL
                                       m_ g   2g   g        2g    g
 It is only the head of the water above the turbine that provides the power; the exiting velocity subtracts from the
 power. There results, using m_ ¼ rQ ¼ 1000 · 0:8 ¼ 800 kg=s,
                                                 2
                            _ T ¼ m_ gz1 2 m_ V2
                            W
                                               2
                                                             3:62
                                  ¼ 800 · 9:81 · 4 2 800 ·        ¼ 26 200 J=s or 26:2 kW
                                                              2
                                                                           kg m          kg·m m N·m
 Let us demonstrate that the units on m_ gz1 are J=s. The units on m_ gz1 are · 2 ·m¼ 2 · ¼                ¼ J=s
                                                 2
                                                                            s  s          s      s     s
 where, from F ¼ ma, we see that N ¼ kg·m=s . If the proper units are included on the items in our equations, the
                                                     _ T must be J=s.
 units will come out as expected, i.e., the units on W
CHAP. 4]                             THE INTEGRAL EQUATIONS                                             67



4.5   THE MOMENTUM EQUATION
When a force in involved in a calculation, it is often necessary to apply Newton’s second law, or simply,
the momentum equation, to the problem of interest. For some general volume, using the Eulerian
description of motion, the momentum equation was presented in Eq. (4.10) in its most general form for a
ﬁxed control volume as
                                      X         dZ            Z
                                         F¼          rV dV þ      Vr ^
                                                                     n·V dA                         ð4:31Þ
                                               dt cv           cs

When applying this equation to a control volume, we must be careful to include all forces acting on the
control volume, so it is very important to sketch the control volume and place the forces on the sketched
control volume. (The control volume takes the place of the free-body diagram utilized in courses in
statics, dynamics, and solids.)
     Most often, steady, uniform ﬂows with one entrance and one outlet are encountered. For such ﬂows,
Eq. (4.31) reduces to
                                         X
                                             F ¼ r2 A2 V2 V2 2 r1 A1 V1 V1                          ð4:32Þ
Using continuity m_ ¼ r2 A2 V2 ¼ r1 A1 V1 , the momentum equation takes the simpliﬁed form
                                                X
                                                  F ¼ m_ ðV2 2 V1 Þ                                  ð4:33Þ
This is the form most often used when a force is involved in a calculation. It is a vector equation that
contains the three scalar equations in a rectangular coordinate system
                                             X
                                                Fx ¼ m_ ðV2x 2 V1x Þ
                                             X
                                                Fy ¼ m_ ðV2y 2 V1y Þ                              ð4:34Þ
                                             X
                                                Fz ¼ m_ ðV2z 2 V1z Þ
    If the proﬁles at the entrance and exit are not uniform, Eq. (4.31) must be used and the integration
performed or, if the momentum-correction factor b is known, it can be used. It is found from
                                                Z             2
                                                  V2 dA ¼ bV A                                    ð4:35Þ
                                                 A

The momentum equation for a steady ﬂow with one entrance and one outlet then takes the form
                                      X
                                         F ¼ m_ ðb2 V2 2 b1 V1 Þ                           ð4:36Þ
where V1 and V2 represent the average velocity vectors over the two areas.
     For parabolic proﬁles, b ¼ 1.33 for a pipe and b ¼ 1.2 for parallel plates. For turbulent ﬂows (most
ﬂows in engineering applications), b > 1.
     An important application of the momentum equation is to the deﬂectors (or vanes) of pumps,
turbines, or compressors. The applications involve both stationary defectors and moving deﬂectors. The
following assumptions are made for both:
  .   The frictional force between the ﬂuid and the deﬂector is negligible.
  .   The pressure is assumed to be constant as the ﬂuid moves over the deﬂector.
  .   The body force is assumed to be negligible.
  .   The effect of the lateral spreading of the ﬂuid stream is neglected.
A sketch is made of a stationary deﬂector in Fig. 4.4. Bernoulli’s equation predicts that the ﬂuid velocity
will not change (V2 ¼ V1) as the ﬂuid moves over the deﬂector since the pressure does not change, there
is no friction, it is a steady ﬂow, and the body forces are neglected. The component momentum
equations appear as follows:
                                   2Rx ¼ m_ ðV2 cos a 2 V1 Þ ¼ m_ V1 ðcos a 2 1Þ
                                                                                                     ð4:37Þ
                                    Ry ¼ m_ V2 sin a ¼ m_ V1 sin a
68                                         THE INTEGRAL EQUATIONS                                               [CHAP. 4



Given the necessary information, the force components can be calculated.

                                                                                                V2
                                                                    y
                                                        Control
                                                        volume

                                                V1
                                                                                         x
                                                                         Rx
                                         Liquid
                                           jet          Deflector   Ry


                                          Figure 4.4       A stationary deﬂector.

     The analysis of a moving deﬂector is more complicated. Is it a single deﬂector (a water scoop to slow
a high-speed train) or is it a series of deﬂectors as in a turbine? First, let us consider a single deﬂector
moving with speed VB, as sketched in Fig. 4.5. The reference frame is attached to the deﬂector so the ﬂow
is steady from such a reference frame*. The deﬂector sees the velocity of the approaching ﬂuid as the
relative velocity Vr1 and it is this relative velocity that Bernoulli’s equation predicts will remain constant
over the deﬂector, i.e., Vr2 ¼ Vr1. The velocity of the ﬂuid exiting the ﬁxed nozzle is V1. The momentum
equation then provides
                                                     2Rx ¼ m_ r ðV12VB Þðcos a21Þ
                                                                                                                  ð4:38Þ
                                                      Ry ¼ m_ r ðV12VB Þsin a


                                    V1                                                        Vr2 = V1–VB
                                                                              y
                               VB         Vr1


                                           VB t
                   Fixed jet

                                                                                                            x
                                                                                   Rx
                          This fluid does not
                          change momentum                                     Ry
                                                                                                      VB
                                         Vr1 = V1–VB
                                                                                        Vr2
                                                                    Exiting velocity
                                                                        polygon                      V2


                                         Figure 4.5 A single moving deﬂector.


where m_ r is that part of the exiting ﬂuid that has its momentum changed. As the deﬂector moves away
from the nozzle, the ﬂuid represented by the length VB Dt does not experience a change in momentum.
The mass ﬂux of ﬂuid that experiences a momentum change is
                                                          m_ r ¼ rAðV12VB Þ                                       ð4:39Þ
so it is that mass ﬂux used in the expressions for the force components.
     For a series of vanes, the nozzles are typically oriented such that the ﬂuid enters the vanes from
the side at an angle b1 and leaves the vanes at an angle b2, as shown in Fig. 4.6. The vanes are

*
 If the deﬂector is observed from the ﬁxed jet, the deﬂector moves away from the jet and the ﬂow is not a steady
ﬂow. It is steady if the ﬂow is observed from the deﬂector.
CHAP. 4]                                          THE INTEGRAL EQUATIONS                                                          69



designed so that the relative inlet velocity Vr1 enters the vanes tangent to a vane (the relative velocity
always leaves tangent to the vane) as shown in Fig. 4.7. It is the relative speed that remains constant
in magnitude as the ﬂuid moves over the vane, i.e., Vr2 ¼ Vr1 : We also note that all of the ﬂuid
exiting the ﬁxed jet has its momentum changed. So, the expression to determine the x-component of
the force is
                                                                2Rx ¼ m_ ðV2x 2 V1x Þ                                          ð4:40Þ


It is this x-component of the force that allows the power to be calculated; the y-component does no work
and hence does not contribute to the power. The power is found from
                                                                    _ ¼ NRx VB
                                                                    W                                                          ð4:41Þ
where N is the number of jets in the device and we have observed that the force Rx moves with
velocity VB.

                                     Fixed jet

                                 1                                 V1


                                                                              1




                            VB




                                                                              2



                                                                                  Time-average
                                                                                                                      2
                                                                                  position of
                                                                                  exiting jet
                                                                                                                 V2



                                                      Figure 4.6 A series of vanes.




                       V1                        Ry
                   1

                                                       Rx           Vr1             V1
                                                                          1          1                                VB
                                                                                     VB                2              2

                                                                                                 Vr2
                                                                                                                          V2
                            (a)                             2                 (b)                          (c)
                                                      V2


 Figure 4.7   (a) Average position of the jet, (b) the entrance velocity polygon, and (c) the exit velocity polygon.
70                                           THE INTEGRAL EQUATIONS                                         [CHAP. 4



 EXAMPLE 4.5 A 10-cm-diameter hose maintained at a pressure of 1600 kPa provides water from a tanker to a
 ﬁre. There is a nozzle at the end of the hose that reduces the diameter to 2.5 cm. Estimate the force that the water
 exerts on the nozzle. The losses can be neglected in a short nozzle.
      Solution: A sketch of the water contained in the nozzle is important so that the control volume is carefully
 identiﬁed. It is shown in Fig. 4.8. Note that p2 ¼ 0 and we expect that the force FN of the nozzle on the water
 acts to the left. The velocities are needed upstream and at the exit of the nozzle. Continuity provides

                                                                      102
                                       A2 V2 ¼ A1 V1         \ V2 ¼        V1 ¼ 16V1
                                                                      2:52

                                                        V1                     V2
                                                             FN
                                      p1A1

                                                         Figure 4.8

 The energy equation requires
                       V22 p2         V2 p                   V 2 V 2 1 600 000
                          þ þ gz2 ¼ 1 þ 1 þ gz1 þ hL      162 1 ¼ 1 þ
                        2  r           2  r                   2   2    1000
                          \ V1 ¼ 3:54 m=s   and  V2 ¼ 56:68 m=s
 The momentum equation then gives
                                    p1 A1 2 FN ¼ m_ ðV2 2 V1 Þ ¼ rA1 V1 ðV2 2 V1 Þ ¼ 15rA1 V12
                  1 600 000 · p · 0:052 2 FN ¼ 15 · 1000 · p · 0:052 · 3:542           \ FN ¼ 12 400 N
 The force of the water on the nozzle would be equal and opposite to FN.




 EXAMPLE 4.6 A steam turbine contains eight 4-cm-diameter nozzles each exiting steam at 200 m=s as shown
 in Fig. 4.9. The turbine blades are moving at 80 m=s and the density of the steam is 2.2 kg/m3. Calculate the
 maximum power output assuming no losses.

                                Fixed jet


                       1 = 30
                                                       V1 = 200 m/s


                                                                  1




                         VB




                                                             2 = 30



                                                         Figure 4.9

    Solution: The angle a1 is determined from the velocity polygon of Fig. 4.7(b). For the x- and y-
 components, using V1 ¼ 200 m=s and VB ¼ 80 m=s, we have
                                              200 sin 30– ¼ Vr1 sin a1
                                              200 cos 30– ¼ 80 þ Vr1 cos a1
CHAP. 4]                                 THE INTEGRAL EQUATIONS                                                  71


 There are two unknowns in the above two equations: Vr1 and a1. A simultaneous solution provides
                                     Vr1 ¼ 136:7 m=s         and            a1 ¼ 47:0–
 Neglecting losses allows Vr2 ¼ Vr1 ¼ 136:7 m=s so the velocity polygon at the exit [Fig. 4.7(c)] provides
                                           V2 sin b2 ¼ 136:7 sin 30–
                                           V2 cos b2 ¼ 802136:7 cos 30–
 These two equations are solved to give
                                     V2 ¼ 78:39 m=s         and         b2 ¼ 119:3–
 Observe that the exiting velocity polygon appears as in Fig. 4.10.
                                                                       VB
                                                        2         2
                                           Vr2

                                                            V2


                                                       Figure 4.10

 The force acting on the blades due to one nozzle is
                  2F ¼ m_ ðV2x 2V1x Þ
                      ¼ 2:2 · p · 0:022 · 200ð278:39 cos 60:7– 2200 cos 30– Þ            \ F ¼ 11:7 N
 The power output is then
                             _ ¼ N · F · VB ¼ 8 · 11:7 · 80 ¼ 7488 W or 10:04 hp
                             W


 EXAMPLE 4.7 The relatively rapid ﬂow of water in a horizontal rectangular channel can suddenly ‘‘jump’’ to
 a higher level (an obstruction downstream may be the cause). This is called a hydraulic jump. For the situation
 shown in Fig. 4.11, calculate the higher depth downstream. Assume uniform ﬂow.

                                                                                           y2
                                   y1 = 40 cm
                                                                                                V2
                   4 m /s                                             Water




                                                       Figure 4.11

     Solution: For a short section of water, the frictional force on the walls can be neglected. The forces acting
 on the water are F1 acting to the right and F2 acting to the left; they are (assume a width w)
                                                                                         y
                 F1 ¼ gh1 A1 ¼ 9810 · 0:20 · 0:40w ¼ 785w       and       F2 ¼ gh2 A2 ¼ g 2 · y2 w
                                                                                          2
 Applying the momentum equation gives
                                                X
                                                    Fx ¼ m_ ðV22V1 Þ ¼ rA1 V1 ðV22V1 Þ
                               785w 2 4905 · wy22 ¼ 1000 · 0:4w · 4ðV22 4Þ
 The width w divides out of this equation but there are two unknowns, y2 and V2. The continuity equation relates
 these two variables
                                         A2 V2 ¼ A1 V1
                                                                                 1:6
                                        wy2 V2 ¼ w · 0:4 · 4           \ V2 ¼
                                                                                 y2
72                                         THE INTEGRAL EQUATIONS                                                 [CHAP. 4



 Substitute this into the momentum equation and obtain
                                                                      1:6
                                            785 2 4905y22 ¼ 1600          24
                                                                      y2
 This equation is a cubic but with a little ingenuity it is a quadratic. Let us factor:
                                                          1600                1600
                            72 ð4 2 10y2 Þð4 þ 10y2 Þ ¼        ð1:6 2 4y2 Þ ¼       ð4 2 10y2 Þ
                                                           y2                 2:5y2
 The factor (4 2 10y2) divides out and a quadratic equation results
                                                 y22 þ 0:4y2 21:306 ¼ 0
 It has two roots. The one of interest is
                                                      y2 ¼ 2:12 m
 This rather interesting effect is analogous to the shock wave that occurs in a supersonic gas ﬂow. It is nature’s
 way of moving from something traveling quite fast to something moving much slower while maintaining
 continuity and momentum. A signiﬁcant amount of energy is lost when making this sudden change through the
 hydraulic jump; it can be found by using the energy equation.




                                               Solved Problems

4.1    A balloon is being ﬁlled with water at an instant when the diameter is 50 cm. If the ﬂow rate into
       the balloon is 200 gal/min, what is the rate of increase in the diameter?
            The rate of increase in the volume of the balloon is
                                            dV   d 4 3          dR p 2 dD
                                               ¼      pR ¼ 4pR2    ¼ D
                                            dt   dt 3           dt  2  dt
            Convert gallons per minute to m3=s
                                       gallons             m3     1 minute
                                 200           · 0:003785       ·           ¼ 0:01262 m3 =s
                                       minute             gallon 60 seconds
            The above two expressions must be equal if mass is conserved (in this case, volume is conserved because
            water is incompressible). This gives
                                   p           dD                             dD
                                     · 0:502 ·    ¼ 0:01262               \      ¼ 0:0321 m=s
                                   2           dt                             dt

4.2    Air at 40–C and 250 kPa is ﬂowing in a 32-cm-diameter pipe at 10 m=s. The pipe changes
       diameter to 20 cm and the density of the air changes to 3.5 kg/m3. Calculate the velocity in the
       smaller diameter pipe.
            The continuity equation (4.15) is used
                                                     p1 d12       d2                                 d12 p1
                     r1 A1 V1 ¼ r2 A2 V2        \      p V1 ¼ r2 p 2 V2                \ V2 ¼                V1
                                                    RT1 4          4                              r2 d22 RT1
            Substitute the given information into the equation and
                                          d12 p1               0:322 · 350
                               V2 ¼               V 1 ¼                           · 10 ¼ 28:5 m=s
                                       r2 d22 RT1       3:5 · 0:202 · 0:287 · 313
            Note: The pressure is assumed to be gauge pressure when given in a problem statement, so 100 kPa
            is added to convert it to absolute pressure. The pressure is used as kPa since the gas constant has units
            of kJ/(kg·K).
CHAP. 4]                               THE INTEGRAL EQUATIONS                                                73



4.3   A liquid ﬂows as a uniform ﬂow in a 2 cm · 4 cm rectangular conduit. It ﬂows out a 2-cm-
      diameter pipe with a parabolic proﬁle. If the maximum velocity in the pipe is 4 m=s, what is the
      velocity in the rectangular conduit?
           The equation of the parabola for u(r) must allow the velocity to be 4 m=s where r ¼ 0 and 0 m=s where
           r ¼ 0.01 m. The velocity proﬁle that accomplishes this is
                                                  uðrÞ ¼ 40 000ð0:0122r2 Þ
           The continuity equation of the incompressible ﬂow (it is a liquid) takes the form
                                         Z                Z0:01
                                 A1 V1 ¼     uðrÞ2pr dr ¼       40 000ð0:0122r2 Þ2pr dr
                                             A2               0

           where 2pr dr in the integral is the differential area through which the ﬂuid ﬂows. The above equation
           provides
                                                                          !
                                        40 000 · 2p       2   0:012 0:014
                                 V1 ¼                 0:01 ·        2       ¼ 0:785 m=s
                                        0:02 · 0:04             2      4

4.4   A turbine is designed to extract energy from a water source ﬂowing through a 10-cm-diameter
      pipe at a pressure of 800 kPa with an average velocity of 10 m=s. If the turbine is 90 percent
      efﬁcient, how much energy can be produced if the water is emitted to the atmosphere through a
      20-cm-diameter pipe?
           The ﬂow rate and velocity at the exit are
                                                                                d12       102
                   Q ¼ A1 V1 ¼ p · 0:052 · 10 ¼ 0:0854 m3 =s          V2 ¼ V1     2
                                                                                    ¼ 10 · 2 ¼ 2:5 m=s
                                                                                d2        20
           The pressure at the outlet is assumed to be atmospheric, i.e., p2 ¼ 0. The energy equation is applied
           between the inlet and the exit of the turbine
                                          W_ S V22 p2      p   V2
                                      2        ¼   þ þ z2 2 1 2 1 2 z1 þ hL
                                          m_ g   2g g2     g1 2g
           where the head loss term is omitted and included as an efﬁciency of the turbine. Substituting the
           appropriate information gives
                                    W_S        2:52 2 102 800 000
                           2                 ¼           2                    _ S ¼ 72 300 W
                                                                             \W
                               1000 · 0:0854        2      1000
           This is the power extracted from the water. The power produced would be less than this due to the
           losses through the turbine measured by the efﬁciency, i.e.
                                          _ T ¼ ZT W
                                          W        _ S ¼ 0:9 · 72:3 ¼ 65:1 kW

           Check the units on the above equations to make sure they are consistent.

4.5   The ﬂow rate in a pipe is determined by use of the Venturi meter shown in Fig. 4.12. Using the
      information given in the ﬁgure and h ¼ 4 cm, calculate the ﬂow rate assuming uniform ﬂow and
      no losses (these assumptions are reasonable for highly turbulent ﬂows).

                                                            6 cm

                                                                     Water


                                     10 cm
                                                        h
                                                                   Mercury



                                                    Figure 4.12
74                                       THE INTEGRAL EQUATIONS                                            [CHAP. 4



          The manometer allows the pressures (measured at the centerline of the pipe) to be related by
               p1 þ 9810 · z þ 0:04 · 9810 ¼ p2 þ 9810 · z þ 0:04 · 13:6 · 9810         \ p1 2 p2 ¼ 4944 Pa
          where z is measured from the top of the mercury to the centerline. The continuity equation relates V1
          to V2
                                                         d12 102
                                               V2 ¼ V1        ¼ 2 V1 ¼ 2:778V1
                                                         d 22   6
          The energy equation is then used to obtain
               V22 p2     p   V2                                2:7782 V12 2 V12 4944
                  þ þ z2 ¼ 1 þ 1 þ z1 þ hL               or                     ¼            \ V1 ¼ 1:213 m=s
               2g  g       g  2g                                    2 · 9:81      9810
          The ﬂow rate is
                                        Q ¼ A1 V1 ¼ p · 0:052 · 1:213 ¼ 0:00953 m3 =s


4.6   A dam is proposed on a remote stream that measures approximately 25-cm deep by 350-cm wide
      with an average velocity of 2.2 m=s. If the dam can be constructed so that the free surface above a
      turbine is 10 m, estimate the maximum power output of an 88 percent efﬁcient turbine.
          The ﬂow rate of the water passing through the turbine is
                                          Q ¼ A1 V1 ¼ 0:25 · 3:5 · 2:2 ¼ 1:925 m3 =s
          The energy equation is applied between the surface of the reservoir behind the dam, where p1 ¼ 0,
          V1 ¼ 0, and z1 ¼ 10 m and the outlet of the turbine where we assume, for maximum power output,
          that V2 > 0, p2 > 0, and z2 ¼ 0
                                          W_ S V22 p2      p   V1
                                               ¼   þ þ z2 2 1 2 2 2 z1 þ hL
                                          m_ g   2g g2     g1 2g
          or
                                   _ S ¼ m_ gz1 ¼ ð1000 · 1:925Þ · 9:81 · 10 ¼ 189 000 W
                                   W
          The turbine losses are included by the use of the efﬁciency. The maximum turbine output is
                                             _ T ¼ ZT W
                                             W        _ S ¼ 0:88 · 189 ¼ 166 kW


4.7   A pump is used to pump water from a reservoir to a water tank as shown in Fig. 4.13. Most pumps
      have a pump curve that relates the pump power requirement to the ﬂow rate, like the one provided
      in the ﬁgure. Estimate the ﬂow rate provided by the pump. The overall loss coefﬁcient K ¼ 4.

                                                               HP (m)
                                                                        25
                            el. 20 m                                    20
                  Water                                                 15
                                           el.5 m                       10
                                        10-cm-dia.
                                 Pump

                                                                             0.05 0.1 0.15 0.2 0.25
                                                                                      Q (m3/s)

                                                     Figure 4.13
          The loss coefﬁcient would be based on the average velocity in the pipe. The energy equation applied
          between the two surfaces takes the form
                   W_ P V22 p2       p   V2                         V2                Q2
                        ¼    þ þ z2 2 1 2 1 2 z1 þ hL ¼ z2 2 z1 þ K    ¼ 15 þ 4
                   m_ g   2g  g       g  2g                         2g          p · 0:052 · 2g
CHAP. 4]                                 THE INTEGRAL EQUATIONS                                            75


           The energy equation is then [see Eq. (4.25)]
                                                      HP ¼ 15 þ 26Q2
           This energy equation and the equation represented by the pump curve in the ﬁgure are solved
           simultaneously as follows:
                           Try Q ¼ 0:1 :     ðHP Þcurve ¼ 24 m      and     ðHP Þenergy ¼ 15:3 m
                           Try Q ¼ 0:2 :     ðHP Þcurve ¼ 17 m      and     ðHP Þenergy ¼ 16 m
                                                 3
           The estimate is then Q ¼ 0.21 m =s.

4.8   Integrate the appropriate velocity proﬁle and calculate the kinetic energy transported by a ﬂow of
      water that has a parabolic proﬁle in a 4-cm-diameter pipe if the ﬂow rate is 0.005 m3=s.
           The parabolic proﬁle that has u ¼ 0 at the wall where r ¼ 0.02 m and u ¼ umax at the centerline is
           uðrÞ ¼ umax ð12r2 =0:022 Þ. The ﬂow rate is
                               Z
                         Q¼       uðrÞdA
                                A
                                                 !                             !
                                    Z0:02 1 2 r2                   0:022 0:022
                     0:005 ¼ umax                  2pr dr ¼ 2pumax      2        \ umax > 8 m=s
                                      0    0:022                     2     4

           The rate of differential kinetic energy that passes through the differential area 2pr dr is
           1 2 1
             m_ v ¼ ðr2pr dr · vÞv2 . This is integrated to yield
           2       2                                                                 !3
                                       Z 1                           Z0:02    1 2 r2
                                KE ¼         ðr2pr dr · vÞv2 ¼ 1000p       83           r dr
                                        A2                            0       0:022
                                                                            0:02
                                           0:022              ð12r2 =0:022 Þ4
                                    ¼2           · 83 · 1000p                   ¼ 80 J=s
                                             2                       4        0

           This can be checked using a ¼ 2, as noted after Eq. (4.30)
                                      1       2 1
                                        a m_ V ¼ · 2ð0:005 · 1000Þ · 42 ¼ 80 J=s
                                      2         2
           where we have used the average velocity as half of the maximum velocity for a parabolic proﬁle in a
           pipe.

4.9   A nozzle is attached to a 6-cm-diameter hose but the horizontal nozzle turns the water through an
      angle of 90–. The nozzle exit is 3 cm in diameter and the ﬂow rate is 500 L/min. Determine the
      force components of the water on the nozzle and the magnitude of the resultant force. The
      pressure in the hose is 400 kPa and the water exits to the atmosphere.
                                                                   V2




                                                                              Fx
                                  p1A1

                                            V1

                                                                    Fy

                                                     Figure 4.14
76                                       THE INTEGRAL EQUATIONS                                           [CHAP. 4



           First, the control volume should be sketched since it is not given in the problem statement. It appears as
           shown in Fig. 4.14. The control volume shows the water with the force components of the nozzle on the
           water. The velocities are calculated to be
                                      Q   0:50=60
                               V1 ¼     ¼          ¼ 2:95 m=s            V2 ¼ 4 · V1 ¼ 11:79 m=s
                                      A1 p · 0:032
           The pressure p1 is found using the energy equation. The losses are neglected in the accelerated ﬂow:
                                                                                   !
                     V22 p2            V2 p                         11:792 2 2:952
                         þ þ gz2 ¼ 1 þ 1 þ gz1           p1 ¼ 1000                   ¼ 65 150 Pa
                      2     r           2    r                             2

           The momentum equation provides the force components [see Eqs. (4.34)]
                                         p1 A1 2 Fx ¼ m_ ðV2x 2 V1x Þ
                            65 150 · p · 0:032 2 Fx ¼ 2ð0:50=60Þ · 1000 · 2:95        \ Fx ¼ 209 N

                                       Fy 2 p2 A2y ¼ m_ ðV2y 2 V2y Þ
                                                Fy ¼ ð0:50=60Þ · 1000 · 11:79 ¼ 98:2 N
           The magnitude of the resultant force is
                                           qﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                      F ¼ Fx2 þ Fy2 ¼ 2092 þ 98:22 ¼ 231 N

           The force of the water on the nozzle would be equal and opposite to Fx and Fy.


4.10   A ﬂuid ﬂows through a sudden expansion as shown in Fig. 4.15. The pressures before and after
       the expansion are p1 and p2, respectively. Find an expression for the head loss due to the
       expansion if uniform velocity proﬁles are assumed. Note: This problem requires the use of
       momentum, energy, and continuity.
                                                   p2
                       p1

                                              V2                  p1A2                             p2A2
               V1                                                             Control volume



                                                        Figure 4.15
           The control volume is shown from the expansion to the area downstream where the ﬂow ﬁlls the area
           and the velocity is again uniform over the entire area A2. Note that the pressure is p1 over the area
           immediately after the expansion since the ﬂow separates with parallel streamlines and then expands to
           ﬁll the area. (The head loss is due to the energy needed to sustain the ﬂow in the separated region.) The
           momentum equation provides
                   X                                                                p 2p
                      Fx ¼ m_ ðV2x 2V1x Þ    p1 A2 2p2 A2 ¼ rA2 V2 ðV2 2V1 Þ     \ 1 2 ¼ V2 ðV22V1 Þ
                                                                                      r
           The energy equation that introduces the head loss hL, applied between sections 1 and 2, is
                             V12 p1      V2 p                                      p22p1 V222V12
                                þ þ gz1 ¼ 2 þ 2 þ gz2 þ hL                \ hL ¼        2
                             2g  g       2g   g                                      g      2g
           Substituting the pressure difference from the momentum equation gives
                                                 2V2 ðV22V1 Þ V222V12 ðV1 2V2 Þ2
                                          hL ¼               2       ¼
                                                      2g         2g       2g
           The continuity equation requires V2 ¼ V1 A1 =A2 . Substitute this into the above equation and obtain the
           expression for the head loss
CHAP. 4]                                 THE INTEGRAL EQUATIONS                                                    77


                                                                A1 2 V12
                                                     hL ¼ 1 2
                                                                A2 2g
            The loss coefﬁcient of Eq. (4.24) is K ¼ ð12A1 =A2 Þ2 based on the inlet velocity V1.


4.11   The blade on a snowplow turns the wet snow through an angle of 120– but off to one side at 30–.
       If the snow has a density of 500 kg/m3, what power is needed to move the blade at 40 mi/h if it
       scoops snow that is 15-cm deep and 3-m wide?
            The momentum equation (4.37) is written to account for the component due to the side angle (the blade
            is stationary and the snow moves toward the blade)
                             Rx ¼ 2m_ ðV2 cos a1 cos y2V1 Þ ¼ rAV12 ðcos a1 cos y 2 1Þ
                                ¼ 2500ð0:15 · 3Þð40 · 0:447Þ2 ðcos 120– cos 30– 21Þ ¼ 31 150 N
            where 0.447 converts mi=h to m=s. We have neglected the friction generated by the snow moving over
            the blade, which would be small compared to the above force, so that the speed of the snow relative to
            the blade remains constant, i.e., V2 > V1. The power is then
                                        31 150ð40 · 0:447Þ ¼ 557 000 W or 746 hp




                                        Supplementary Problems
                                                                                         P
4.12   What assumptions are needed on a ﬂow to allow Eq. (4.3) to be simpliﬁed to            F ¼ ma.

4.13   Sketch the three volumes V1 , V2 , and V3 , shown generally in Fig. 4.1, assuming a short time-increment Dt for
       the ﬁxed control volume of
           (a) A nozzle on the end of a hose.
           (b) A balloon into which air is entering (the ﬁxed volume is the balloon at time t).
           (c)   A balloon from which air is exiting (the ﬁxed volume is the balloon at time t).
           (d ) A Tee in a pipe line.

4.14   Sketch the velocity vector V and the normal unit vector n^ on each area.
           (a) The free surface area of a water tank that is being drained.
           (b) The inlet area of a turbine.
           (c)   The wall of a pipe.
           (d ) The bottom of a canal.
           (e)   The inlet area to a cylindrical screen around a drain.

4.15   A rectangle surrounds a two-dimensional, stationary airfoil. It is at a distance from the airfoil on all sides.
       Sketch the box containing the airfoil along with the velocity vector V and the normal unit vector n^ on all
       four sides of the rectangle.

4.16   We used
                                                  dZ         Z@
                                                     re dV ¼     ðreÞ dV
                                                  dt          @t
                                                    cv         cv

       in the derivation of the system-to-control-volume transformation. What constraint allows this equivalence?
       Why is it an ordinary derivative on the left but a partial derivative on the right?
78                                      THE INTEGRAL EQUATIONS                                             [CHAP. 4



Conservation of Mass

4.17   Apply Eq. (4.14) to a ﬂow in a pipe that divides into two exiting areas with different densities at each area
       assuming uniform ﬂows over all three areas.
4.18   Water ﬂows in a 4-cm-diameter pipe at 20 m=s. The pipe enlarges to a diameter of 6 cm. Calculate the ﬂow
       rate, the mass ﬂux, and the velocity in the larger diameter section of pipe.
4.19   Water ﬂows at a depth of 40 cm in a 100-cm-diameter storm sewer. Calculate the ﬂow rate and the mass ﬂux
       if the average velocity is 3 m=s.
4.20   Air at 25–C and 240 kPa ﬂows in a 10-cm-diameter pipe at 40 m=s. What are the ﬂow rate and the mass ﬂux
       in the pipe? (Recall that pressures are always gauge pressures unless stated otherwise.)

4.21   Air ﬂows in a 20-cm-diameter duct at 120–C and 120 kPa with a mass ﬂux of 5 kg=s. The circular duct
       converts to a 20-cm square duct in which the temperature and pressure are 140–C and 140 kPa, respectively.
       Determine the velocities in both sections of the duct.

4.22   Air is exiting a 100-cm-diameter balloon out a 1-cm-diameter nozzle. If the pressure and temperature at the
       exit are 110 kPa and 22–C, respectively, and the exit velocity is 30 m=s, calculate the ﬂow rate, the mass ﬂux,
       and the rate at which the diameter is changing.

4.23   Water ﬂows in a 4-cm-diameter pipe at 20 m=s. The pipe divides into two pipes, one 2 cm in diameter and
       the other 3 cm in diameter. If 10 kg=s ﬂows from the 2-cm-diameter pipe, calculate the ﬂow rate from the
       3-cm-diameter pipe.

4.24   Water ﬂows in a 2-cm-diameter pipe at 10 m=s vertically upward to the center of two horizontal circular
       disks separated by 8 mm. It ﬂows out between the disks at a radius of 25 cm. Sketch the pipe/disk
       arrangement. Calculate average velocity of the water leaving the disks. Also, calculate the average velocity of
       the water between the disks at a position where the radius of the disks is 10 cm.

4.25   High-velocity air at 20–C and 100 kPa absolute ﬂows in a conduit at 600 m=s. It undergoes a sudden change
       (a shock wave) to 263 m=s and 438–C with no change in conduit dimensions. Determine the mass ﬂux and
       the downstream pressure if the conduit cross-sectional area is 500 cm2.

4.26   Water ﬂows in a 12-cm-diameter pipe with the velocity proﬁles shown in Fig. 4.16. The maximum velocity
       for each proﬁle is 20 m=s. Calculate the mass ﬂux, the ﬂow rate, and the average velocity.


                                                                  3 cm                      Parabola




                                                                  3 cm

                         (a)                          (b)                            (c)

                                                    Figure 4.16


4.27   Water ﬂows in a rectangular conduit 12-cm high and 60-cm wide having a maximum velocity of 20 m=s with
       the proﬁles shown in Fig. 4.16. Assume the proﬁle exists across the entire cross section with negligible end
       effects. Calculate the mass ﬂux, the ﬂow rate, and the average velocity.

4.28   A sponge is contained in a volume that has one 4-cm-diameter inlet A1 into which water ﬂows and two
       outlets, A2 and A3. Determine dm=dt of the sponge if
           (a)   V1 ¼ 5 m=s, Q2 ¼ 0.002 m3=s, and m_ 3 ¼ 2:5 kg=s.
CHAP. 4]                                 THE INTEGRAL EQUATIONS                                                       79


           (b) V1 ¼ 10 m=s, m_ 2 ¼ 1:5 kg=s, and Q3 ¼ 0.003 m3=s.
           (c)   m_ 3 ¼ 9:5 kg=s; Q2 ¼ 0.003 m3=s, and V1 ¼ 12 m=s.


4.29   A sponge is contained in a volume that has one 4-cm-diameter inlet A1 into which water ﬂows and two 2-cm-
       diameter outlets, A2 and A3. The sponge is to have dm/dt ¼ 0.
           (a) Find V1 if Q2 ¼ 0.002 m3=s and m_ 3 ¼ 2:5 kg=s:
           (b) Find m_ 2 if V1 ¼ 10 m=s and Q3 ¼ 0.003 m3=s.
           (c)   Find Q2 if m_ 1 ¼ 4:5 kg=s and V3 ¼ 4 m=s.


4.30   Atmospheric air ﬂows over a ﬂat plate as shown in Fig. 4.17. Viscosity makes the air stick to the surface
       creating a thin boundary layer. Estimate the mass ﬂux m_ of the air across the surface that is 10 cm above the
       120-cm wide plate if uðyÞ ¼ 800y.

                             y
                    40 m/s                       .
                                                 m                                      40 m/s


                                                                                                  u (y)


                                                     Figure 4.17

4.31   If a streamline is 5 cm above the ﬂat plate of Fig. 4.17 at the leading edge, how far is it above the plate at the
       location where uðyÞ ¼ 800y?




The Energy Equation

4.32   Water enters a horizontal nozzle with diameters d1 and d2 at 10 m=s and exits to the atmosphere. Estimate
       the pressure upstream of the nozzle if
           (a) d1 ¼ 8 cm and d2 ¼ 6 cm
           (b) d1 ¼ 8 cm and d2 ¼ 4 cm
           (c)   d1 ¼ 10 cm and d2 ¼ 6 cm
           (d ) d1 ¼ 12 cm and d2 ¼ 5 cm

4.33   Water is contained in a large tower that supplies a city. If the top of the water is 30 m above an outlet at the
       base of the tower, what maximum velocity can be expected at the outlet (to the atmosphere)? How does this
       maximum velocity compare with that of a rock dropped from the same height?
4.34   A high-speed jet is used to cut solid materials. Estimate the maximum pressure developed on the material if
       the velocity issuing from the water jet is (a) 100 m=s, (b) 120 m=s, and (c) 120 m=s.
4.35   Rework Solved Problem 4.5 with (a) h ¼ 5 cm, (b) h ¼ 6 cm, and (c) h ¼ 8 cm.
4.36   Integrate the appropriate velocity proﬁle and calculate the rate of kinetic energy transported by a ﬂow of
       water that has a parabolic proﬁle in a channel that measures 2 cm · 15 cm if the ﬂow rate is 0.012 m3=s.
       Check your calculation using Eq. (4.30) with a ¼ 1.5.
4.37   The loss coefﬁcient in Example 4.3 is increased to (a) 2.0, (b) 3.2, and (c) 6.0. Rework the problem. (The loss
       coefﬁcient depends primarily on the pipe material, such as plastic, copper, wrought iron, so it can vary
       markedly.)
80                                      THE INTEGRAL EQUATIONS                                            [CHAP. 4



4.38   Water is transported from one reservoir with surface elevation of 135 m to a lower reservoir with surface
       elevation of 25 m through a 24-cm-diameter pipe. Estimate the ﬂow rate and the mass ﬂux through the pipe
       if the loss coefﬁcient between the two surfaces is (a) 20, (b) 30, and (c) 40.
4.39   Assume uniform ﬂow in the pipe of Fig. 4.18 and calculate the velocity in the larger pipe if the manometer
       reading h is (a) 30 cm, (b) 25 cm, and (c) 20 cm.
                                    10 cm dia
                                                                    6 cm dia

                                     Water


                                                         h
                                                                      Mercury



                                                    Figure 4.18


4.40   An 85 percent-efﬁcient pump is used to increase the pressure of water in a 10-cm-diameter pipe from 120 to
       800 kPa. What is the required horsepower of the pump for a ﬂow rate of (a) 0.015 m3=s, (b) 20 L=s, and
       (c) 4000 gal/h?
4.41   A 90 percent-efﬁcient turbine accepts water at 400 kPa in a 16-cm-diameter pipe. What is the maximum
       power output if the ﬂow rate is (a) 0.08 m3=s, (b) 0.06 m3=s, and (c) 0.04 m3=s? The water is emitted to the
       atmosphere.
4.42   Air enters a compressor at 25–C and 10 kPa with negligible velocity. It exits through a 2-cm-diameter pipe at
       400 kPa and 160–C with a velocity of 200 m=s. Determine the heat transfer if the power required is 18 kW.
4.43   Rework Solved Problem 4.7 if the overall loss coefﬁcient K is (a) 2, (b) 8, and (c) 12.



The Momentum Equation

4.44   A strong wind at 30 m=s blows directly against a 120 cm · 300 cm window in a large building. Estimate the
       force of the wind on the window.
4.45   A 10-cm-diameter hose delivers 0.04 m3=s of water through a 4-cm-diameter nozzle. What is the force of the
       water on the nozzle?
4.46   A 90–-nozzle with exit diameter d is attached to a hose of diameter 3d with pressure p. The nozzle changes the
       direction of the water ﬂow from the hose through an angle of 90–. Calculate the magnitude of the force of the
       water on the nozzle if
          (a)   p ¼ 200 kPa, d ¼ 1 cm
          (b)   p ¼ 400 kPa, d ¼ 6 mm
          (c)   p ¼ 300 kPa, d ¼ 1.2 cm
          (d ) p ¼ 500 kPa, d ¼ 2.2 cm
4.47   A hydraulic jump, sketched in Fig. 4.19, can occur in a channel with no apparent cause, such as when a fast
       ﬂowing stream ﬂows from the mountains to the plains. (It is analogous to a shock wave that exists in a gas
       ﬂow.) The momentum equation allows the height downstream to be calculated if the upstream height and
       velocity are known. Neglect any frictional force on the bottom and sidewalls and determine y2 in the
       rectangular channel if
          (a)   V1 ¼ 10 m=s and y1 ¼ 50 cm
          (b)   V1 ¼ 8 m=s and y1 ¼ 60 cm
CHAP. 4]                                 THE INTEGRAL EQUATIONS                                                    81


           (c)   V1 ¼ 12 m=s and y1 ¼ 40 cm
           (d ) V1 ¼ 16 m=s and y1 ¼ 40 cm

                                          y1                                      V2
                                                                         y2
                              V1                            Water



                                                    Figure 4.19


4.48   Determine the power lost in the hydraulic jump if the channel is 8-m wide in
           (a) Prob. 4.47(b)
           (b) Prob. 4.47(d)
                                                                                                                 1
4.49   It is desired to create a hydraulic jump, as in Fig. 4.19, in a 6-m wide, rectangular channel so that V2 ¼ V1 .
                                                                                                                 4
       Calculate V1 and the power lost if
           (a) y1 ¼ 60 cm
           (b) y1 ¼ 40 cm
4.50   A pipe transporting water undergoes a sudden expansion (Fig. 4.15). If the upstream pressure is 200 kPa and
       the mass ﬂux is 40 kg=s, ﬁnd the pressure downstream, where a uniform ﬂow can be assumed, and the head
       lost due to the expansion. Use the following dimensions:
           (a) d1 ¼ 4 cm and d2 ¼ 10 cm
           (b) d1 ¼ 4 cm and d2 ¼ 8 cm
           (c)   d1 ¼ 6 cm and d2 ¼ 12 cm
4.51   A 6-cm-diameter horizontal stationary water jet having a velocity of 40 m=s strikes a vertical plate.
       Determine the force needed to hold the plate if
           (a) it is stationary
           (b) it moves away from the jet at 20 m=s
           (c)   it moves into the jet at 20 m=s
4.52   A 4-cm-diameter horizontal stationary water jet having a velocity of 50 m=s strikes a cone having an
       included angle at the apex of 60–. The water leaves the cone symmetrically. Determine the force needed to
       hold the cone if
           (a) it is stationary
           (b) it moves away from the jet at 20 m=s
           (c)   it moves into the jet at 20 m=s
4.53   A jet boat traveling at 12 m=s takes in 0.08 m3=s of water and discharges it at 24 m=s faster than the boat’s
       speed. Estimate the thrust produced and power required.
4.54   The deﬂector of Fig. 4.4 changes the direction of a 60 mm · 24 cm sheet of water with V1 ¼ 30 m=s such
       that a ¼ 60o. Calculate the force components of the water on the deﬂector if
           (a) it is stationary
           (b) it moves away from the jet at 20 m=s
           (c)   it moves into the jet at 20 m=s
4.55   The blades of Fig. 4.6 deﬂect 10, 2-cm-diameter jets of water each having V1 ¼ 40 m=s. Determine the blade
       angle a1 and the power output assuming no losses if
           (a) b1 ¼ 30–, a2 ¼ 45–, and VB ¼ 20 m=s
           (b) b1 ¼ 20–, a2 ¼ 50–, and VB ¼ 15 m=s
82                                         THE INTEGRAL EQUATIONS                                            [CHAP. 4



           (c) b1 ¼ 20–, a2 ¼ 40–, and VB ¼ 20 m=s
           (d ) b1 ¼ 40–, a2 ¼ 35–, and VB ¼ 20 m=s

4.56   A rectangular jet strikes a stationary plate as shown in Fig. 4.20. Calculate the force F and the two mass
       ﬂuxes if the velocity V1 exiting the jet is (a) 20 m=s, (b) 40 m=s, and (c) 60 m=s. Neglect all frictional forces
       and any spreading of the stream.
                                                                                  m2


                                     2 cm × 24 cm           V1


                                                                                 F
                                                                 .       45°
                                                                 m3


                                                           Figure 4.20

4.57   Estimate the drag force on the plate of Prob. 4.30 up to the position where the velocity proﬁle is shown.




                                  Answers to Supplementary Problems

4.12   r ¼ const, V ¼ V(t), inertial ref frame
4.16   Fixed cv
4.17   r1 A1 V1 ¼ r2 A2 V2 þ r3 A3 V3
4.18   0.0251 m3=s, 25.1 kg=s, 8.89 m=s
4.19   1.182 m3=s, 1182 kg=s
4.20   0.314 m3=s, 1.25 kg=s
4.21   81.6 m=s, 61.7 m=s
4.22   0.236 m3=s, 0.585 kg=s, 0.075 m=s
4.23   0.01513 m3=s
4.24   0.25 m=s, 0.625 m=s
4.25   35.7 kg=s, 554 kPa
4.26   (a) 0.0754 m3=s, 75.4 kg=s, 6.67 m=s               (b) 0.1369 m3=s, 1369 kg=s, 12.1 m=s
       (c) 0.1131 m3=s, 1131 kg=s, 10 m=s
4.27   (a) 180 kg=s, 0.018 m3=s, 10 m=s             (b)    1080 kg=s, 1.08 m3=s, 11.25 m=s
       (c) 960 kg=s, 0.096 m3=s, 10 m=s
4.28   (a) 2.33 kg=s        (b)    8.07 kg=s    (c)       2.58 kg=s
4.29   (a) 3.58 m=s       (b) 9.57 kg=s        (c)        3.24 m3=s
4.30   2.20 kg=s
4.31   52.5 mm
CHAP. 4]                                  THE INTEGRAL EQUATIONS                                                         83


4.32   (a)   17.78 m=s, 108 kPa     (b)   40 m=s, 750 kPa            (c)   27.8 m=s, 336 kPa
       (d)   57.6 m=s, 1609 kPa
4.33   24.3 m=s, same
4.34   (a)   5000 kPa                        (b)   7200 kPa                      (c)    11 250 kPa
                           3                                     3
4.35   (a)   0.01065 m =s                    (b) 0.01167 m =s                    (c) 0.01348 m3=s
4.36   144 J=s
4.37   (a)   181.9 kPa                       (b)   176.6 kPa                     (c)    165.7 kPa
                       3                                     3
4.38   (a)   0.470 m =s, 470 kg=s            (b)   0.384 m =s, 384 kg=s           (c)    0.332 m3=s, 332 kg=s
4.39   (a)   8.58 m=s                        (b)   7.83 m=s                       (c)   7.00 m=s
4.40   (a)   16.1 hp                         (b)   21.4 hp                       (c)    4.51 hp
4.41   (a)   28.8 kW                         (b)   21.6 kW                       (c)    14.4 kW
4.42   2 3140 J=s
4.43   (a)   0.22 m3=s                       (b)   0.20 m3=s                      (c) 0.19 m3=s
4.44   1980 N
4.45   2780 N
4.46   (a)   148 N                          (b)    106.7 N                       (c)    320 N             (d)   1795 N
4.47   (a)   2.95 m                         (b) 2.51 m                           (c)    3.23 m            (d)   4.37
4.48   (a)   439 kW                          (b) 1230 kW
4.49   (a)   7.67 m=s, 272 kW                (b)   6.26 m=s, 99.5 kW
4.50   (a)   336 kPa, 36.4 m                (b)    390 kPa, 29.2 m               (c)    238 kPa, 5.73 m
4.51   (a)   4524 N                          (b)   1131 N                        (c)    10 180 N
4.52   (a)   421 N                           (b)   151.5 N                       (c)    825 N
4.53   30.9 hp
4.54   (a)   6480 N, 11 220 N               (b) 720 N, 1247 N                    (c)    18 000 N, 31 200 N
4.55   (a)   53.79–, 108 hp                 (b)    31.2–, 100 hp                 (c)    37.87–, 17 hp
       (d)   67.5–, 113 hp
4.56   (a) 1358 N, 81.9 kg=s, 11.5 kg=s      (b)   5430 N, 163.9 kg=s, 22.9 kg=s
       (c) 12 220 N, 246 kg=s, 34.4 kg=s
4.57   9.9 N
                                        Chapter 5


Differential
Equations

5.1   INTRODUCTION
The differential equations introduced in this chapter are often omitted in an introductory course. The
derivations in subsequent chapters will either not require these differential equations or there will be two
methods to derive the equations: one using the differential equations and one utilizing differential
elements. So, this chapter can be emitted with no loss of continuity.
      In Chap. 4, problems were solved using integrals for which the integrands were known or could be
approximated. Partial differential equations are needed in order to solve for those quantities in the
integrands that are not known, such as the velocity distribution in a pipe or the pressure distribution on
an airfoil. The partial differential equations may also contain information of interest, such as a point of
separation of a ﬂuid from a surface.
      To solve a partial differential equation for the dependent variable, certain conditions are required,
i.e., the dependent variable must be speciﬁed at certain values of the independent variables. If the
independent variables are space coordinates (such as the velocity at the wall of a pipe), the conditions are
called boundary conditions. If the independent variable is time, the conditions are called initial conditions.
The general problem is usually referred to as a boundary-value problem.
      The boundary conditions typically result from one or more of the following:
  .   The no-slip condition in a viscous ﬂow. Viscosity causes any ﬂuid, be it a gas or a liquid, to stick to
      the boundary so that the velocity of the ﬂuid at a boundary takes on the velocity of the boundary.
      Most often the boundary is not moving.
  .   The normal component of the velocity in an inviscid ﬂow. In an inviscid ﬂow where the viscosity is
      neglected, the velocity vector is tangent to the boundary at the boundary, provided the boundary is
      not porous.
  .   The pressure at a free surface. For problems involving a free surface, a pressure condition is known
      at the free surface. This also applies to separated ﬂows, where cavitation is present, and in wave
      motions.
     For an unsteady ﬂow, initial conditions are required, e.g., the initial velocity must be speciﬁed at
some time, usually at t ¼ 0. It would be a very difﬁcult task to specify the three velocity components at
t ¼ 0 for most unsteady ﬂows of interest. So, the problems requiring the solution of the partial
differential equations derived in this chapter are those requiring boundary conditions.

                                                           84

Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 5]                                   DIFFERENTIAL EQUATIONS                                                 85



    The differential equations in this chapter will be derived using rectangular coordinates. It is often
easier to solve problems using cylindrical or spherical coordinates; the differential equations using those
two-coordinate systems are presented in Table 5.1.
    The differential energy equation will not be derived in this book. It would be needed if there are
temperature differences on the boundaries or if viscous effects are so large that temperature gradients are
developed in the ﬂow. A course in heat transfer would include such effects.


5.2   THE DIFFERENTIAL CONTINUITY EQUATION
To derive the differential continuity equation, the inﬁnitesimal element of Fig. 5.1 is utilized. It is a small
control volume into and from which the ﬂuid ﬂows. It is shown in the xy-plane with depth dz. Let us
assume that the ﬂow is only in the xy-plane so that no ﬂuid ﬂows in the z-direction. Since mass could be
changing inside the element, the mass that ﬂows into the element minus that which ﬂows out must equal
the change in mass inside the element. This is expressed as
                               @ðruÞ                            @ðrvÞ           @
            ru dy dz 2 ru þ          dx dy dz þ rv dx dz 2 rv þ       dy dx dz ¼ ðr dx dy dzÞ                  ð5:1Þ
                                @x                               @y             @t
where the density r is allowed to change* across the element. Simplifying the above, recognizing that the
elemental control volume is ﬁxed, results in
                                                     @ðruÞ @ðrvÞ    @r
                                                          þ      ¼2                                            ð5:2Þ
                                                      @x    @y      @t



                           y                                           ( v)
                                                                 v+         dy dxd
                                                                         y




                                                dy                                        ( u)
                                                                                     u+        dx dy d
                               u dy d                                                      x




                                                                 dx


                                                               v dxd




                                                                                                         x

                                        Figure 5.1 Inﬁnitesimal control volume.

    Differentiate the products and include the variation in the z-direction. Then the differential
continuity equation can be put in the form
                                 @r    @r    @r    @r    @u @v @w
                                    þu    þv    þw    þr   þ  þ   ¼0                                           ð5:3Þ
                                 @t    @x    @y    @z    @x @y @z

*                                              @r                @u
 The product ru could have been included as r þ dx          uþ      dx on the right-hand side of the element, but the
                                               @x                @x
above is equivalent.
86                                            DIFFERENTIAL EQUATIONS                                       [CHAP. 5



The ﬁrst four terms form the material derivative [see Eq. (3.11)] so Eq. (5.3) becomes
                                                  Dr    @u @v @w
                                                     þr   þ  þ   ¼0                                             ð5:4Þ
                                                  Dt    @x @y @z
providing the most general form of the differential continuity equation expressed using rectangular
coordinates.
    The differential continuity equation is often written using the vector operator
                                                           @    @  @
                                                    H¼        iþ jþ k                                           ð5:5Þ
                                                           @x   @y @z
so that Eq. (5.4) takes the form
                                                         Dr
                                                            þ rH ·V ¼ 0                                         ð5:6Þ
                                                         Dt
where the velocity vector is V ¼ ui þ vj þ wk. The scalar H ·V is called the divergence of the velocity
vector.
    For an incompressible ﬂow, the density of a ﬂuid particle remains constant, i.e.,
                                               Dr @r      @r    @r    @r
                                                  ¼    þu    þv    þw    ¼0                                     ð5:7Þ
                                               Dt   @t    @x    @y    @z
so it is not necessary that the density be constant. If the density is constant, as it often is, then each term
in Eq. (5.7) is 0. For an incompressible ﬂow, Eqs. (5.4) and (5.6) also demand that
                                               @u @v @w
                                                 þ  þ   ¼ 0 or             H ·V ¼ 0                             ð5:8Þ
                                               @x @y @z
    The differential continuity equation for an incompressible ﬂow is presented in cylindrical and
spherical coordinates in Table 5.1.

    EXAMPLE 5.1 Air ﬂows with a uniform velocity in a pipe with the velocities measured along the centerline at
    40-cm increments as shown in Fig. 5.2. If the density at point 2 is 1.2 kg=m3, estimate the density gradient at
    point 2.

                                     64 m/s              60 m/s              52 m/s

                                 1                   2                 3

                                                         Figure 5.2

        Solution: The continuity equation (5.3) is used since the density is changing. It is simpliﬁed as follows:
                        @r    @r    @r    @r    @u @r @w                              @r     @u
                           þu    þv    þw    þr   þ  þ   ¼0                      \u      ¼2r
                        @t    @x    @y    @z    @x @y @z                              @x     @x
    Central differences* are used to approximate the velocity gradient @u@x at point 2 since information at three
    points is given as follows:
                                              @u Du 52 2 64
                                                >   ¼       ¼ 215 m=ðs·mÞ
                                              @x Dx   0:80
    The best estimate of the density gradient, using the information given, is then
                                        @r    r @u    1:2
                                           ¼2      ¼2     ð215Þ ¼ 0:3 kg=ðm4 Þ
                                        @x    u @x    60


*
 A forward difference would give @u=@x > ð52 2 60Þ=0:40 ¼220: A backward difference would provide
@u=@x > ð60 2 64Þ=0:40 ¼210: The central difference is the best approximation.
CHAP. 5]                                    DIFFERENTIAL EQUATIONS                                                       87



5.3   THE DIFFERENTIAL MOMENTUM EQUATION
The differential continuity equation derived in Sec. 5.2 contains the three velocity components as the
dependent variables for an incompressible ﬂow. If there is a ﬂow of interest in which the velocity ﬁeld
and pressure ﬁeld are not known, such as the ﬂow around a turbine blade or over a weir, the differential
momentum equation provides three additional equations since it is a vector equation containing three
component equations. The four unknowns are then u, v, w, and p when using a rectangular coordinate
system. The four equations provide us with the necessary equations and then the initial and boundary
conditions allow a tractable problem. The problems of the turbine blade and the weir are quite difﬁcult
to solve, and their solutions will not be attempted in this book, but there are problems with simple
geometries that will be solved.
     So, let us go about deriving the differential momentum equations, a rather challenging task. First,
stresses exist on the faces of an inﬁnitesimal, rectangular ﬂuid element, as shown in Fig. 5.3 for the
xy-plane. Similar stress components act in the z-direction. The normal stresses are designated with s and
the shear stresses with t. There are nine stress components: sxx , syy , szz , txy , tyx , txz , tzx , tyz , and tzy .
If moments are taken about the x-axis, the y-axis, and the z-axis, respectively, they would show that
                                           tyx ¼ txy             tzx ¼ txz                 tzy ¼ tyz                   ð5:9Þ
So, there are six stress components that must be related to the pressure and velocity components. Such
relationships are called constitutive equations; they are equations that are not derived but are found
using observations in the laboratory.
                        y
                                                                           yy
                                                                   yy +         dy
                                                                           y
                                                                                     yx
                                                                          yx +            dy
                                                                                     y
                                                                                           xy
                                                                                xy +            dx
                                                                                           x
                                      xx
                                                  dy                                                    xx
                                                                                                 xx +        dx
                                                                                                        x
                                             xy
                                                            dx
                                                       yx

                                                                  yy


                                                                                                                  x



                            Figure 5.3 Rectangular stress components on a ﬂuid element.

    Next, apply Newton’s second law to the element of Fig. 5.3, assuming that no shear stresses act in
the z-direction (we will simply add those in later) and that gravity acts in the z-direction only:
                      @sxx                            @txy                                 Du
                sxx þ      dx dy dz2sxx dy dz þ txy þ      dy dx dz2txy dx dz ¼ r dx dy dz
                       @x                              @y                                  Dt
                                                                                                                      ð5:10Þ
                      @syy                            @txy                                 Dv
                syy þ      dy dx dz2syy dx dz þ txy þ      dx dy dz2txy dy dz ¼ r dx dy dz
                       @y                              @x                                  Dt
These are simpliﬁed to
                                                       @sxx @txy    Du
                                                           þ     ¼r
                                                        @x   @y     Dt
                                                                                                                      ð5:11Þ
                                                       @syy @txy    Dv
                                                           þ     ¼r
                                                        @y   @x     Dt
88                                      DIFFERENTIAL EQUATIONS                                       [CHAP. 5



If the z-direction components are included, the differential equations become
                                                 @sxx @txy @txz    Du
                                                     þ    þ     ¼r
                                                  @x   @y   @z     Dt
                                                 @syy @txy @tyz    Dv
                                                     þ    þ     ¼r                                     ð5:12Þ
                                                  @y   @x   @z     Dt
                                            @szz @txz @tyz          Dw
                                                þ    þ     2 rg ¼ r
                                             @z   @x   @y           Dt
assuming that the gravity term, rg dx dy dz; acts in the negative z-direction.
     In many ﬂows, the viscous effects that lead to the shear stresses can be neglected and the normal
stresses are the negative of the pressure. For such inviscid ﬂows, Eqs. (5.12) take the form
                                                        Du     @p
                                                       r    ¼2
                                                         Dt    @x
                                                        Dv     @p
                                                       r    ¼2                                         ð5:13Þ
                                                         Dt    @y
                                                     Dw     @p
                                                    r    ¼ 2 2 rg
                                                      Dt    @z
In the vector form [see Eq. (5.5)], they become the famous Euler’s equation
                                                       DV
                                                   r      ¼ 2H p 2 rgk^                                ð5:14Þ
                                                       Dt
which is applicable to inviscid ﬂows. For a constant-density, steady ﬂow, Eq. (5.14) can be integrated
along a streamline to provide Bernoulli’s equation [Eq. (3.25)].
     If viscosity signiﬁcantly affects the ﬂow, Eqs. (5.12) must be used. Constitutive equations* relate the
stresses to the velocity and pressure ﬁelds; they are not derived but are written by making observations in
the laboratory. For a Newtonian,† isotropic{ ﬂuid, they have been observed to be
                                                  @u                            @u @v
                                 sxx ¼ 2p þ 2m       þ lH ·V          txy ¼ m     þ
                                                  @x                            @y @x
                                              @v                                @u @w
                                 syy ¼ 2p þ 2m þ lH ·V               txz ¼ m      þ                    ð5:15Þ
                                              @y                                @z @x
                                                 @w                             @v @w
                                 szz ¼ 2p þ 2m      þ lH ·V          tyz ¼ m      þ
                                                 @z                             @z @y
For most gases, Stokes hypothesis can be used so that l ¼ 22m=3: If the above normal stresses are added,
there results
                                                     1
                                                p ¼ 2 ðsxx þ syy þ szz Þ                               ð5:16Þ
                                                     3
showing that the pressure is the negative average of the three normal stresses in most gases, including air,
and in all liquids in which H ·V ¼ 0:




*
  The constitutive equations for cylindrical and spherical coordinates are displayed in Table 5.1.
†
  A Newtonian ﬂuid has a linear stress– strain rate relationship.
{
  An isotropic ﬂuid has properties that are independent of direction at a point.
CHAP. 5]                                   DIFFERENTIAL EQUATIONS                                                      89


 Table 5.1      The Differential Continuity, Momentum Equations, and Stresses for Incompressible Flows in Cylindrical
                                               and Spherical Coordinates

  Continuity                                                   Stresses
  Cylindrical                                                  Cylindrical
  1@          1 @vy @vz                                                     @v                   @ðvy =rÞ 1 @vz
      ðrv Þ þ      þ    ¼0                                     srr ¼ 2p þ 2m r       try ¼ m r           þ
  r @r r      r @y   @z                                                     @y                     @r      r @y
  Spherical                                                                     1 @vy vr                   @vy 1 @vr
                                                               syy ¼ 2p þ 2m         þ           tyz ¼ m      þ
  1 @ 2           1 @                   1 @vf                                   r @y   r                   @z   r @y
        r vr þ           ðv sin yÞ þ            ¼0
  r2 @r        r sin y @y y          r sin y @f                                @vz             @vr @vz
                                                               szz ¼ 2p þ 2m         trz ¼ m      þ
                                                                               @z              @z   @r
  Momentum
  Cylindrical                                                  Spherical
   Dv v 2     @p               v     2 @v                                   @v
  r r 2 y ¼ 2 þ rgr þ m H2 vr 2 2r 2 2 y                       srr ¼ 2p þ 2m r
   Dt      r  @r               r    r @y                                    @r
                                                                                   1 @vy vr
      Dvy vy vr    1 @p                  v     2 @v            syy ¼ 2p þ 2m               þ
  r      þ      ¼2      þ rgy þ m H2 vy 2 2y þ 2 r                              r sin y @y   r
      Dt   r       r @y                  r    r @y
                                                                                   1 @vf vr vf cot y
      Dvz    @p                                                sff ¼ 2p þ 2m               þ þ
  r       ¼ 2 þ rgz þ mH2 vz                                                    r sin y @f  r  r
      Dt     @z
                                                                           @ vy   1 @vr
  D      @ v @       @  @                                      try ¼ m r        þ
     ¼ vr þ y    þ vz þ                                                    @r r   r @y
  Dt     @r r @y     @z @t
                                                                          sin y @ vf        1 @vy
     @2 1 @    1 @2 @2                                         tyf ¼ m                 þ
      2
  H ¼ 2þ     þ 2 2þ 2                                                       r @y sin y   r sin y @f
     @r  r @r r @y  @z                                                      1 @vr     @ vf
                                                               trf ¼ m             þr
  Spherical                                                               rsiny @f    @r r
                 2    2
      Dvr    vy þ vf    @p
  r       2r         ¼ 2 þ rgr
      Dt        r       @r
             2    2vr 2 @vy 2vy cot y     2 @vf
       þ m H vr 2 2 2 2    2          2 2
                   r  r @y      r2     r sin y @f
                          2
      Dvy    vr vy þ vf cot y    1 @p
  r       þr                  ¼2      þ rgy
      Dt             r           r @y
                   2 @v     v      2 cos y @vf
       þm H2 vy þ 2 r 2 2 y 2 2 2
                   r @y r sin y r sin y @f

      Dvf    vr vf þ vy vf cot y       1 @p
  r       2r                     ¼2            þ rgf
      Dt              r             r sin y @f

                       vf       2    @vr   2 cos y @vy
          þ m H2 vf 2 2 2 þ 2 2          þ
                     r sin y r sin y @f r2 sin2 y @f

  D      @ v @     vf @      @
     ¼ vr þ y   þ          þ
  Dt     @r r @y r sin y @f @t
       1 @ 2 @      1    @        @      1     @2
  H2 ¼ 2   r    þ 2         sin y    þ 2
      r @r   @r  r sin y @y       @y  r sin y @f2
90                                       DIFFERENTIAL EQUATIONS                                  [CHAP. 5



      If Eqs. (5.15) are substituted into Eqs. (5.12) using l ¼ 22m=3, there results
                                                            !
                            Du     @p      @2u @2u @2u          m @ @u @v @w
                          r    ¼2 þm          2
                                                þ 2þ 2 þ                 þ     þ
                            Dt     @x      @x     @y     @z     3 @x @x @y @z
                                                            !
                            Dv     @p      @2v @2v @2v          m @ @u @v @w
                          r    ¼2 þm          2
                                                þ 2þ 2 þ                 þ    þ                      ð5:17Þ
                            Dt     @y      @x     @y     @z     3 @y @x @y @z
                                                              !
                           Dw      @p      @2w @2w @2w           m @ @u @v @w
                         r     ¼2 þm          2
                                                þ 2þ 2 þ                  þ     þ    2 rg
                           Dt      @z      @x      @y     @z      3 @z @x @y @z
where gravity acts in the negative z-direction and a homogeneous* ﬂuid has been assumed so that, for
example, @m=@x ¼ 0:
   Finally, if an incompressible ﬂow is assumed so that H ·V ¼ 0; the Navier – Stokes equations result
                                                                  !
                                    Du      @p      @2u @2u @2u
                                  r     ¼2 þm           þ   þ
                                    Dt      @x      @x2 @y2 @z2
                                                                  !
                                    Dv      @p      @2v @2v @2v
                                  r     ¼2 þm           þ   þ                                    ð5:18Þ
                                    Dt      @y      @x2 @y2 @z2
                                                                    !
                                    Dw       @p     @2w @2w @2w
                                  r     ¼2 þm           þ     þ 2 2 rg
                                    Dt       @z      @x2 @y2    @z
where the z-direction is vertical.
   If we introduce the scalar operator called the Laplacian, deﬁned by
                                                         @2   @2   @2
                                                  H2 ¼      þ    þ                                   ð5:19Þ
                                                         @x2 @y2 @z2
and review the steps leading from Eq. (5.13) to Eq. (5.14), the Navier – Stokes equations can be written in
vector form as
                                                  DV
                                              r      ¼ 2H p þ mH2 V þ rg                             ð5:20Þ
                                                  Dt
The Navier– Stokes equations expressed in cylindrical and spherical coordinates are presented in
Table 5.1.
     The three scalar Navier –Stokes equations and the continuity equation constitute the four equations
that can be used to ﬁnd the four variables u, v, w, and p, provided there are appropriate initial and
boundary conditions. The equations are nonlinear due to the acceleration terms, such as u@v=@y on the
left-hand side; consequently, the solution to these equations may not be unique, i.e., the solution that is
determined from the above equations may not be the one observed in the laboratory. For example, the
ﬂow between two rotating cylinders can be solved using the Navier –Stokes equations to be a relatively
simple ﬂow with circular streamlines; it could also be a ﬂow with streamlines that are like a spring wound
around the cylinders as a torus, and there are even more complex ﬂows that are also solutions to the
Navier –Stokes equations, all satisfying the identical boundary conditions.
     The differential momentum equations (the Navier– Stokes equations) can be solved with relative
ease for some simple geometries. But the equations cannot be solved for a turbulent ﬂow even for the
simplest of examples; a turbulent ﬂow is highly unsteady and three-dimensional and thus requires that
the three velocity components be speciﬁed at all points in a region of interest at some initial time, say
t ¼ 0. Such information would be nearly impossible to obtain, even for the simplest geometry.
Consequently, the solutions of turbulent ﬂows are left to the experimentalist and are not attempted by
solving the equations.

*
    A homogeneous ﬂuid has properties that are independent of position.
CHAP. 5]                                 DIFFERENTIAL EQUATIONS                                                     91



 EXAMPLE 5.2 Water ﬂows from a reservoir in between two closely aligned parallel plates, as shown in Fig.
 5.4. Write the simpliﬁed equations needed to ﬁnd the steady-state velocity and pressure distributions between the
 two plates. Neglect any z variation of the distributions and any gravity effects. Do not neglect v(x, y).


                                         y

                                             x



                                                       Figure 5.4

     Solution: The continuity equation is simpliﬁed, for the incompressible water ﬂow, to
                                             @u @v @w
                                                þ     þ     ¼0
                                             @x @y @z
 The differential momentum equations recognizing that
                                        D      @      @  @  @
                                          ¼u     þv þw þ
                                       Dt     @x      @y @z @t
 are simpliﬁed as follows:
                                                               !
                                      @u  @u   @p  @2u @2u @2u
                                   r u þv    ¼2 þm    þ   þ
                                      @x  @y   @x  @x2 @y2 @z2
                                                               !
                                      @v  @v   @p  @2v @2v @2v
                                   r u þv    ¼2 þm    þ   þ
                                      @x  @y   @y  @x2 @y2 @z2
 neglecting pressure variation in the y-direction since the plates are assumed to be a relatively small distance
 apart. So, the three equations that contain the three variables u, v, and p are
                                             @u @v
                                               þ   ¼0
                                             @x @y
                                                                 !
                                         @u  @u    @p    @2u @2u
                                      r u þv    ¼2 þm         þ
                                         @x  @y    @x    @x2 @y2
                                                            !
                                         @v  @v     @2v @2v
                                      r u þv    ¼m     þ
                                         @x  @y     @x2 @y2
 To ﬁnd a solution to these equations for the three variables, it would be necessary to use the no-slip conditions
 on the two plates and assumed boundary conditions at the entrance, which would include u(0, y) and v(0, y).
 Even for this rather simple geometry, the solution to this entrance ﬂow problem appears, and is, quite difﬁcult. A
 numerical solution could be attempted.


 EXAMPLE 5.3 Integrate Euler’s equation (5.14) along a streamline as shown in Fig. 5.5 for a steady, constant-
 density ﬂow and show that Bernoulli’s equation (3.25) results.
      Solution: First, sketch a general streamline and show the selected coordinates normal to and along the
 streamline so that the velocity vector can be written as V^s; as we did in Fig. 3.10. First, let us express DV=Dt in
 these coordinates.
                                  DV @V      @ðV^sÞ      @V       @V      @^s
                                     ¼    þV        þ Vn    ¼ V^s    þ V2
                                  Dt   @t     @s         @n       @s      @s
 where @^s=@s is nonzero since s^ can change direction from point to point on the streamline; it is a vector quantity
 in the n^ direction. Applying Euler’s equation along a streamline (in the s-direction) allows us to write
                                                      @V    @p    @z
                                                 rV      ¼ 2 2 rg
                                                      @s    @s    @s
92                                         DIFFERENTIAL EQUATIONS                                           [CHAP. 5



                                                                                 V = Vs
                                                             n
                                                                     s


                                                                         Streamline
                                   k
                                       ds
                                             d
                                                        d
                                                           = sin
                                                        ds
                                       g                (k)s = sin


                                                       Figure 5.5
 where we have referred to Fig. 5.5 to write ðk^ Þs ¼ @z=@s: Partial derivatives are necessary because quantities can
 vary in the normal direction. The above equation is then written as
                                                                   !
                                              @       V2
                                                    r    þ p þ rgz ¼ 0
                                             @s       2

 provided the density r is constant. This means that along a streamline,
                                                 V2 p
                                                   þ þ gz ¼ const
                                                 2  r
 This is Bernoulli’s equation requiring the same conditions as it did when it was derived in Chap. 3.


5.4   THE DIFFERENTIAL ENERGY EQUATION
Most problems in an introductory ﬂuid mechanics course involve isothermal ﬂuid ﬂows in which
temperature gradients do not exist. So, the differential energy equation is not of interest. The study of
ﬂows in which there are temperature gradients are included in a course on heat transfer. For
completeness, the differential energy equation is presented here without derivation. In general, it is
                                                       Dh            Dp
                                                   r      ¼ K H2 T þ                                            ð5:21Þ
                                                       Dt            Dt
where K is the thermal conductivity. For an incompressible ideal gas ﬂow, it becomes
                                                             DT
                                                       rcp      ¼ K H2 T                                        ð5:22Þ
                                                             Dt
and for a liquid ﬂow it takes the form
                                                         DT
                                                            ¼ aH2 T                                             ð5:23Þ
                                                         Dt
where a is the thermal diffusivity deﬁned by a ¼ K=rcp :



                                             Solved Problems

5.1    The x-component of the velocity in a certain plane ﬂow depends only on y by the relationship
       u(y) ¼ Ay. Determine the y-component vðx; yÞ of the velocity if vðx; 0Þ ¼ 0.
           The continuity equation for this plane ﬂow (in a plane ﬂow there are only two velocity components that
           depend on two space variables) demands that
                                       @u    @v                  @v   @u  @ðAyÞ
                                          ¼2                 \      ¼2 ¼2       ¼0
                                       @x    @y                  @y   @x   @x
CHAP. 5]                                DIFFERENTIAL EQUATIONS                                                     93


           The solution to @v=@y ¼ 0 is vðx; yÞ ¼ fðxÞ: But vðx; 0Þ ¼ 0; as given, so that fðxÞ ¼ 0 and vðx; yÞ ¼ 0
           The only way for vðx; yÞ to be nonzero would be for vðx; 0Þ to be nonzero.

5.2   Does the velocity ﬁeld
                                           1                        1
                                vr ¼ 4 1 2 2 cosy        vy ¼24 1 þ 2 sin y           vz ¼ 0
                                          r                        r
      represent a possible incompressible ﬂow?
           The (r, y, z) coordinates are cylindrical coordinates. So, Table 5.1 provides the continuity equation to be
           used:
                                               1@            1 @vy @vz
                                                    ðrvr Þ þ      þ    ¼ 0:
                                               r @r          r @y   @z
           Substitute the velocity components into this equation and ﬁnd
                                    4 cos y @   1  24    1 @          @v ?
                                              r2 þ    1þ 2   ðsin yÞ þ z ¼ 0
                                       r @r     r   r   r @y          @z
           Differentiate and ﬁnd
                                            4 cos y     1  4    1
                                                    1 þ 2 2 1 þ 2 cos y ¼ 0
                                               r       r   r   r
           Continuity is satisﬁed, so the velocity ﬁeld is a possible incompressible ﬂow.

5.3   Use the differential momentum equations for an incompressible uniform ﬂow that moves toward
      a ﬂat plate, e.g., the wind hitting a vertical wall, and ﬁnd an expression for the gradient of the
      pressure. Assume a plane ﬂow in which only the x- and y-components are nonzero and viscous
      and gravity effects are negligible.
           The Eqs. (5.18) are simpliﬁed as follows:
                                                               !
                              @u   @u @u  @u   @p  @2u @2u @2u
                            r    þu þv þw    ¼2 þm    þ   þ      þ rgx
                              @t   @x @y  @z   @x  @x2 @y2 @z2
                                                               !
                              @v   @v @v  @v   @p  @2v @2v @2v
                            r    þu þv þw    ¼2 þm    þ   þ      þ rgy
                              @t   @x @y  @z   @y  @x2 @y2 @z2
           This provides the pressure gradient to be related to the velocity ﬁeld by
                                           @p    @p      @u    @u      @v    @v
                                    Hp ¼      i þ j ¼2 u    þv    i2 u    þv    j
                                           @x    @y      @x    @y      @x    @y

5.4   Show that Du=Dt can be written as V·H u for a steady ﬂow. Then write an expression for DV=Dt.
           Expand Du=Dt for a steady ﬂow as
                            Du @u      @u   @u  @u     @    @   @
                               ¼    þu    þv þw    ¼ u    þv þw    u ¼ V·H u
                            Dt   @t    @x   @y  @z     @x   @y  @z
           where we have used
                                                     @    @  @     @    @   @
                             V·H ¼ ðui þ vj þ wkÞ·      iþ jþ k ¼u    þv þw
                                                     @x   @y @z    @x   @y  @z
           Finally, we observe that
                                   DV Du       Dv     Dw
                                      ¼    iþ     jþ      k ¼ V·H ui þ V·H vj þ V·H wk
                                   Dt   Dt     Dt      Dt
                                      ¼ V·H ðui þ vj þ wkÞ
                                      ¼ ðV·H ÞV
94                                      DIFFERENTIAL EQUATIONS                                            [CHAP. 5



                                      Supplementary Problems

The Differential Continuity Equation
                                                 @r     @u
5.5    Refer to the ﬁrst footnote and include r þ dx u þ dx from the right-hand side of the element and
            @r          @v                       @x     @x
        r þ dy v þ dy from the top area of the element and show that Eq. (5.2) results.
            @y          @y

5.6    The divergence theorem, also called Gauss’ theorem, is written in vector form as
                                                  Z           Z
                                                    B· n^ dA ¼ H ·B dV
                                                     A           V

       where B represents any vector and the surface area A surrounds the volume V: Apply this theorem to the
       integral continuity equation of Eq. (4.13) for a steady ﬂow and derive Eq. (5.6).

5.7    A compressible ﬂow of a gas occurs in a pipeline. Assume uniform ﬂow with the x-direction along the pipe
       axis and state the simpliﬁed continuity equation.

5.8    An incompressible steady ﬂow of a ﬂuid, such as a stratiﬁed ﬂow of salt water (as in the isthmus between a
       fresh body of water and a body of salt water), ﬂows in a channel with a sudden change in the height of the
       channel bottom (this allows for nonzero u and v). Assume no variation in the z-direction and write the two
       equations that result from the continuity equation. (Experiments show that a stagnant region of ﬂuid exists in
       front of a sudden increase in the height of the bottom of a channel in a stratiﬁed ﬂow. This phenomenon
       causes the buildup of smog in Los Angeles when air ﬂows toward the city, but substantial smog does not
       appear in the more densely populated New York City. There are mountains east of Los Angeles but not west
       of New York.)

5.9    An isothermal ﬂow occurs in a conduit. Show that the continuity equation can be written as Dp ¼2pH ·V for
       an ideal gas.

5.10   An incompressible ﬂuid ﬂows radially (no y- or f-component) into a small circular drain. How must the
       radial component of velocity vary with radius as demanded by continuity?

5.11   If the x-component of the velocity vector is constant in a plane ﬂow, what is true of the y-component of the
       velocity vector?

5.12   Calculate the density gradient in Example 5.1 if (a) forward differences were used and (b) if backward
       differences were used. What is the percent error for each, assuming the answer in Example 5.1 is correct.

5.13   The x-component of the velocity vector is measured at three locations 8 mm apart on the centerline of a
       symmetrical contraction. At points A, B, and C, the measurements produce 8.2, 9.4, and 11.1 m=s, respectively.
       Estimate the y-component of the velocity 2 mm above point B in this steady, plane, incompressible ﬂow.

5.14   If, in a plane ﬂow, the two velocity components are given by
                                         uðx; yÞ ¼ 8ðx2 þ y2 Þ          vðx; yÞ ¼ 8xy
                                                                 3
       What is Dr=Dt at (1, 2) m if at that point r ¼ 2 kg=m ?

5.15   The velocity ﬁeld for a particular plane ﬂow (w ¼ 0) of air is given by
                                                      4y                           4x
                                        uðx; yÞ ¼                    vðx; yÞ ¼ 2 2
                                                    x þ y2
                                                     2
                                                                                x þ y2
       Show that this is an incompressible ﬂow.
CHAP. 5]                                DIFFERENTIAL EQUATIONS                                                     95


5.16   If u(x, y) ¼ 4 þ 2x=(x2 þ y2) in a plane incompressible ﬂow, what is v(x, y) if v(x, 0) ¼ 0?

5.17   If v(x, y) ¼ 8 þ 4y=(x2 þ y2) in a plane incompressible ﬂow, what is u(x, y) if u(0, y) ¼ 0?

5.18   The velocity component vy ¼ 2(25 þ 1=r2)cos y in a plane incompressible ﬂow. Find vr ðr; yÞ if vr ðr; 0Þ ¼ 0:

5.19   The velocity component vy ¼ 225(1 þ 1=r2)sin y þ 50=r2 in a plane incompressible ﬂow. Find vr (r, y) if
       vr (r, 908) ¼ 0.




The Differential Momentum Equation

5.20   Draw a rectangular element similar to the one in Fig. 5.3 in the xz-plane. Assume that no shear stresses act in
       the y-direction and that gravity acts in the z-direction. Apply Newton’s second law to the element in the
       z-direction and write an equation similar to those of Eqs. (5.11).

5.21   If a steady ﬂow of ﬂuid occurs around a long cylinder, what three equations would be needed to ﬁnd the
       velocity and pressure ﬁelds if viscous effects are signiﬁcant but gravity effects are not signiﬁcant? What
       boundary conditions would exist on the cylinder? Express the equations in cylindrical coordinates. Refer to
       Table 5.1.

5.22   If a steady ﬂow of ﬂuid occurs around a sphere, what three equations would be needed to ﬁnd the velocity
       and pressure ﬁelds if viscous effects are signiﬁcant but gravity effects are not signiﬁcant? What boundary
       conditions would exist on the sphere? Express the equations in spherical coordinates. Refer to Table 5.1.
                     DV
5.23   Verify that      ¼ ðV·H ÞV using rectangular coordinates assuming a steady ﬂow.
                     Dt
5.24   Find the pressure gradient H p for the incompressible ﬂow of Prob. 5.15, assuming an inviscid ﬂow with
       negligible gravity effects.

5.25   Find the pressure gradient H p for the incompressible ﬂow of Solved Problem 5.2, assuming an inviscid ﬂow
       with negligible gravity effects.

5.26   Simplify the appropriate Navier – Stokes equation for the ﬂow between parallel plates assuming u ¼ u(y) and
       gravity in the z-direction. The streamlines are assumed to be parallel to the plates so that v ¼ w ¼ 0.

5.27   Simplify the Navier – Stokes equation for ﬂow in a pipe assuming vz ¼ vz ðrÞ and gravity in the z-direction.
       The streamlines are assumed to be parallel to the pipe wall so that vy ¼ vr ¼ 0:

5.28   The inner cylinder of two concentric cylinders rotates resulting such that vy ¼ vy ðrÞ and vr ¼ 0: What
       equations are needed to ﬁnd the velocity proﬁle assuming vertical cylinders?

5.29   Substitute the constitutive equations (5.15) into the momentum equations (5.12) and show that the Navier –
       Stokes equations (5.18) result, assuming a homogeneous incompressible ﬂuid.

5.30   Assume that a ﬂow is not homogeneous, e.g., there is a temperature gradient in the ﬂow such that the
       viscosity is not constant, and write the x-component differential momentum equations for an incompressible
       ﬂow using the constitutive equations (5.15).

5.31   Let the negative average of the three normal stresses be denoted by p in a gas ﬂow in which Stokes hypothesis
       is not applicable. Find an expression for ð p 2 pÞ:
96                               DIFFERENTIAL EQUATIONS                                 [CHAP. 5



                           Answers to Supplementary Problems

5.5    See problem statement                 5.16   22y=ðx2 þ y2 Þ

5.6    See problem statement                 5.17   24y=ðx2 þ y2 Þ
         @r    @u
5.7    u    þr    ¼0                         5.18   2ð25 2 12 Þ sin y
         @x    @x
         @r     @r   @u    @v
5.8    u    ¼2v         ¼2                   5.19   ð25 2 12 Þ cos y
         @x     @y   @x    @y
                                                    @sxx @txz    Du     @szz @tzx        Dw
5.9    See problem statement                 5.20       þ     ¼r    and     þ     2g ¼ r
                                                     @x   @z     Dt      @z   @x         Dt
5.10   vr ¼ C                                5.23   See problem statement
                                                        16
5.11   v ¼ fðxÞ                              5.24                ðxi þ yjÞ
                                                    rðx2 þ y2 Þ2
                                                    @p      @2u
5.12   0:4 kg=m4 ; 33.3%                     5.26      ¼m 2
                                                    @x      @y
                                                       @p               @2v    1 @vz
5.13   0.36 m=s                              5.27   \     ¼ rgz þ m 2z þ
                                                       @z               @r     r @r !
                                                       1 @p        @ 2 vy 1 @vy vy
5.14   232 kg=ðm3·sÞ                         5.28   \       ¼m           þ       2
                                                       r @y         @r2     r @r r2
       @u @v
5.15     þ   ¼0                              5.31   2ðl þ 2m=3ÞH ·V
       @x @y
                                                    Chapter 6


      Dimensional Analysis
           and Similitude

6.1   INTRODUCTION
Many problems of interest in ﬂuid mechanics cannot be solved using the integral and=or differential
equations. Wind motions around a football stadium, the ﬂow of water through a large hydroturbine, the
airﬂow around the deﬂector on a semitruck, the wave motion around a pier or a ship, and airﬂow around
aircraft are all examples of problems that are studied in the laboratory with the use of models. A laboratory
study with the use of models is very expensive, however, and to minimize the cost, dimensionless
parameters are used. In fact, such parameters are also used in numerical studies for the same reason.
     Dimensionless parameters are obtained using a method called dimensional analysis, to be presented in
Sec. 6.2. It is based on the idea of dimensional homogeneity: all terms in an equation must have the same
dimensions. Simply using this idea, we can minimize the number of parameters needed in an experimental or
analytical analysis, as will be shown. Any equation can be expressed in terms of dimensionless parameters
simply by dividing each term by one of the other terms. For example, consider Bernoulli’s equation
                                      V22 p2          V2 p
                                          þ þ gz2 ¼ 1 þ 1 þ gz1                                         ð6:1Þ
                                        2    r         2     r
Now, divide both sides by gz2. The equation can then be written as
                                                                   !
                                    V22    p2        V12     p1      z
                                         þ     þ1¼       þ      þ1 1                                    ð6:2Þ
                                   2gz2 gz2          2gz1 gz1        z2

Note the dimensionless parameters, V 2 =gz and p=gz:
      Once an analysis is performed on a model in the laboratory and all quantities of interest are measured,
it is necessary to predict those same quantities on the prototype, such as the power generated by a large
wind machine from the measurements on a much smaller model. Similitude is the study that allows us to
predict the quantities to be expected on a prototype from the measurements on a model. This will be done
after our study of dimensional analysis that guides the model study.


6.2   DIMENSIONAL ANALYSIS
An example will be used to demonstrate the usefulness of dimensional analysis. Suppose the drag force
FD is desired on an object with a spherical front that is shaped as shown in Fig. 6.1. A study could be
                                                           97
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
98                            DIMENSIONAL ANALYSIS AND SIMILITUDE                                  [CHAP. 6




                                                          R
                                       V                            FD




                                                                         L


                                       Figure 6.1 Flow around an object.

performed, the drag force measured for a particular radius R and length L in a ﬂuid with velocity V,
viscosity m, and density r. Gravity is expected to not inﬂuence the force. This dependence of the drag
force on the other variables would be written as
                                                 FD ¼ fðR; L; V; m; rÞ                                 ð6:3Þ

To present the results of an experimental study, the drag force could be plotted as a function of V for
various values of the radius R holding all other variables ﬁxed. Then a second plot could show the drag
force for various values of L holding all other variables ﬁxed, and so forth. The plots may resemble those
of Fig. 6.2. To vary the viscosity holding the density ﬁxed and then the density holding the viscosity ﬁxed
would require a variety of ﬂuids leading to a very complicated study, possibly an impossible study.
                  FD                                          FD
                                  R1                                         L3
                                       R2                                         L2

                                            R3                                         L1




                                                      V                                      V

                 Figure 6.2   Drag force versus velocity. (a) L, m, r ﬁxed and (b) R, m, r ﬁxed.

     The actual relationship that would relate the drag force to the other variables could be expressed as a
set of dimensionless parameters, much like those of Eq. (6.2), as
                                                  FD        rVR R
                                                         ¼f    ;                                       ð6:4Þ
                                                 rV 2 R2     m L
(The procedure to do this will be presented next). The results of a study using the above relationship
would be much more organized than the study suggested by the curves of Fig. 6.2. An experimental
study would require only several different models, each with different R=L ratios, and only one ﬂuid,
either air or water. Varying the velocity of the ﬂuid approaching the model, a rather simple task, could
vary the other two dimensionless parameters. A plot of FD =ðrV 2 R2 Þ versus rVR=m for the several values
of R=L would then provide the results of the study.
    Before we present the details of forming the dimensionless parameters of Eq. (6.4), let us review the
dimensions on quantities of interest in ﬂuid mechanics. Many quantities have obvious dimensions, but
for some the dimensions are not so obvious. There are only three basic dimensions since Newton’s
second law can be used to relate the basic dimensions. Using F, M, L, and T as the dimensions on force,
mass, length, and time, we see that F ¼ ma demands that the dimensions are related by
                                                                   L
                                                      F¼M                                              ð6:5Þ
                                                                   T2
CHAP. 6]                        DIMENSIONAL ANALYSIS AND SIMILITUDE                                       99



We choose to select the M 2 L 2 T system* and use Eq. (6.5) to relate F to M, L, and T. If temperature is
needed, as with the ﬂow of a compressible gas, an equation of state, such as
                                                              p ¼ rRT                                   ð6:6Þ
could be expressed dimensionally as
                                                             F L3 ML=T 2 L3 L2
                                          ½RT ¼ ½p=r ¼            ¼        ¼                            ð6:7Þ
                                                             L2 M   L2 M T 2
where the brackets mean ‘‘the dimensions of.’’ The product RT does not introduce additional
dimensions.
     Table 6.1 has been included to aid in selecting the proper dimensions for the quantities of interest. It
will simplify the creation of the dimensionless parameters. The dimensions are displayed for the
M 2 L 2 T system only, since that will be what is used in the solution to the problems in this chapter. The
same results would be obtained using the F 2 L 2 T system, should that system be selected.
     The Buckingham p-theorem is used to create the dimensionless parameters, given a functional
relationship such as that of Eq. (6.3). Write the primary variable of interest as a general function, such as
                                                   x1 ¼ f ðx2 ; x3 ; x4 ; . . . ; xn Þ                  ð6:8Þ


               Table 6.1   Symbols and Dimensions of Quantities of Interest Using the M– L– T System

                                        Quantity               Symbol            Dimensions
                                 Length                             l                     L
                                 Mass                              m                      M
                                 Time                               t                     T
                                 Velocity                          V                     L=T
                                 Acceleration                      a                     L=T 2
                                 Angular velocity                  O                     T 21
                                 Force                             F                      F
                                 Gravity                           g                     L=T 2
                                 Flow rate                         Q                     L3=T
                                 Mass ﬂux                          m_                    M=T
                                 Pressure                          p                M=LT 2
                                 Stress                            t                M=LT 2
                                 Density                           r                 M=L3
                                 Speciﬁc weight                    g                M=L2T 2
                                 Work                              W                ML2=T 2
                                 Viscosity                         m                 M=LT
                                 Kinematic viscosity               n                     L2=T
                                 Power                             _
                                                                   W                ML2=T 3
                                 Heat ﬂux                          Q_               ML2=T 3
                                 Surface tension                   s                 M=T 2
                                 Bulk modulus                      B                M=LT 2


*
    The F– L– T system could have been used. It is simply our choice to use the M– L– T system.
100                          DIMENSIONAL ANALYSIS AND SIMILITUDE                                    [CHAP. 6



where n is the total number of variables. If m is the number of basic dimensions, usually 3, the Buckingham
p-theorem demands that ðn 2 mÞ dimensionless groups of variables, the p-terms, are related by
                                              p1 ¼ f1 ðp2 ; p3 ; . . . ; pn2m Þ                          ð6:9Þ
where p1 is selected to contain the dependent variable [it would be FD of Eq. (6.3)] and the remaining
p-terms contain the independent variables. It should be noted that a functional relationship cannot
contain a particular dimension in only one variable; for example, in the relationship v ¼ fðd; t; rÞ; the
density r cannot occur since it is the only variable that contains the dimension M, so M would not have
the possibility of canceling out to form a dimensionless p-term.
    The steps that are followed when applying the Buckingham p-theorem are:
      1. Write the dependent variable as a function of the ðn 2 1Þ independent variables. This step
         requires knowledge of the phenomenon being studied. All variables that inﬂuence the dependent
         variable must be included and all variables that do not inﬂuence the dependent variable should
         not be included. In most problems, this relationship will be given.
      2. Identify m variables, the repeating variables that are combined with the remaining variables to
         form the p-terms. The m variables must include all the basic dimensions present in the n
         variables of the functional relationship, but they must not form a dimensionless p-term by
         themselves. Note that an angle is dimensionless, so it is not a candidate to be a repeating
         variable.
      3. Combine each of the ðn 2 mÞ variables with the repeating variables to form the p-terms.
      4. Write the p-term containing the dependent variable as a function of the remaining p-terms.
Step 3 is carried out by either inspection or an algebraic procedure. The method of inspection will be
used in an example. To demonstrate the algebraic procedure, let us form a p-term of the variables V, R,
r, and m: This is written as
                                                    p ¼ V a Rb rc md                                   ð6:10Þ
In terms of dimensions, this is
                                                          L a b M c M d
                                         M 0 L0 T 0 ¼        L                                         ð6:11Þ
                                                          T     L3 LT
Equating exponents on each of the basic dimensions provides the system of equations
                                            M:         0¼cþd
                                            L:         0 ¼ a þ b 2 3c 2 d                              ð6:12Þ
                                            T:         0 ¼ 2a 2 d
The solution is
                                        c ¼ 2d           a ¼ 2d              b ¼ 2d                    ð6:13Þ
The p-term is then written as
                                                              m d
                                                     p¼                                                ð6:14Þ
                                                             VRr
This p-term is dimensionless regardless of the value of d. If we desire V to be in the denominator, select
d ¼ 1; if we desire V to be in the numerator, select d ¼ 21. Select d ¼ 21 so that
                                                              VRr
                                                       p¼                                              ð6:15Þ
                                                               m
    Suppose that only one p-term results from an analysis. That p-term would be equal to a constant
which could be determined by an experiment.
    Finally, consider a very general functional relationship between a pressure change Dp, length l,
velocity V, gravity g, viscosity m, density r, speed of sound c, surface tension s, and an angular velocity O.
CHAP. 6]                          DIMENSIONAL ANALYSIS AND SIMILITUDE                                               101



All of these variables may not inﬂuence a particular problem, but it is interesting to observe the ﬁnal
relationship of dimensionless terms. Dimensional analysis using V, l, and r as the repeating variables
provides the relationship
                                                                     !
                                       Dp       V 2 rVl V rlV 2 Ol
                                           ¼f      ;    ; ;      ;                                ð6:16Þ
                                      rV 2      lg m c        s V

Each term that appears in this relationship is an important parameter in certain ﬂow situations. The
dimensionless term with its common name is listed as follows:
                                                Dp
                                                    ¼ Eu          Euler number
                                               rV 2
                                                V
                                               pﬃﬃﬃ ¼ Fr          Froude number
                                                lg
                                               rVl
                                                   ¼ Re           Reynolds number
                                                m
                                                                                                                  ð6:17Þ
                                                 V
                                                   ¼M             Mach number
                                                 c
                                             rlV 2
                                                   ¼ We           Weber number
                                               s
                                               Ol
                                                   ¼ St           Strouhal number
                                                V
Not all of the above numbers would be of interest in a particular ﬂow; it is highly unlikely that both
compressibility effects and surface tension would inﬂuence the same ﬂow. These are, however, the
primary dimensionless parameters in our study of ﬂuid mechanics. The Euler number is of interest in
most ﬂows, the Froude number in ﬂows with free surfaces in which gravity is signiﬁcant (e.g., wave
motion), the Reynolds number in ﬂows in which viscous effects are important, the Mach number in
compressible ﬂows, the Weber number in ﬂows affected by surface tension (e.g., sprays with droplets),
and the Strouhal number in ﬂows in which rotation or a periodic motion plays a role. Each of these
numbers, with the exception of the Weber number (surface tension effects are of little engineering
importance), will appear in ﬂows studied in subsequent chapters. Note: The Froude number is often
deﬁned as V 2 =lg; this would not inﬂuence the solution to problems.

    EXAMPLE 6.1 The pressure drop Dp over a length L of pipe is assumed to depend on the average velocity V,
    the pipe’s diameter D, the average height e of the roughness elements of the pipe wall, the ﬂuid density r, and the
    ﬂuid viscosity m. Write a relationship between the pressure drop and the other variables.
         Solution: First, select the repeating variables. Do not select Dp since that is the dependent variable. Select
    only one D, L, and e since they all have the dimensions of length. Select the variables that are thought* to most
    inﬂuence the pressure drop: V, D, and r: Now, list the dimensions on each variable (Table 6.1):
                        M                           L                                      M             M
               ½Dp ¼            ½L ¼ L       ½V ¼          ½D ¼ L        ½e ¼ L     ½r ¼          ½m ¼
                       LT 2                         T                                      L3            LT
    First, combine Dp, V, D, and m into a p-term. Since only Dp and r have M as a dimension, they must occur as a
    ratio Dp=r: That places T in the denominator so that V must be in the numerator so the T’s cancel out. Finally,
    check out the L’s: there is L in the numerator, so D must be in the denominator providing
                                                                Dp
                                                        p1 ¼
                                                               rV 2 D2


*
    This is often debatable. Either D or L could be selected, whichever is considered to be most inﬂuential.
102                             DIMENSIONAL ANALYSIS AND SIMILITUDE                                       [CHAP. 6



    The second p-term is found by combining L with the three repeating variables V, D, and r. Since both L and D
    have the dimension of length, the second p-term is
                                                            L
                                                       p2 ¼
                                                            D
    The third p-term results from combining e with the repeating variables. It has the dimension of length so the
    third p-term is
                                                           e
                                                      p3 ¼
                                                           D
    The last p-term is found by combining m with V, D, and r. Both m and r contain the dimension M demanding
    that they form the ratio r=m. This puts T in the numerator demanding that V goes in the numerator. This puts L
    in the denominator so that D must appear in the numerator. The last p-term is then
                                                              rVD
                                                       p4 ¼
                                                               m
    The ﬁnal expression relates the p-terms as
                                                   p1 ¼ fðp2 ; p3 ; p4 Þ
    or using the variables
                                                  Dp      L e rVD
                                                   2 2
                                                       ¼f  ; ;
                                                 rV D     D D m
    If L had been chosen as a repeating variable, it would simply change places with D since it has the same
    dimension.


6.3     SIMILITUDE
After the dimensionless parameters have been identiﬁed and a study on a model has been accomplished
in a laboratory, similitude allows us to predict the behavior of a prototype from the measurements made
on the model. The measurements on the model of a ship in a towing basin or on the model of an aircraft
in a wind tunnel are used to predict the performance of the ship or the aircraft.
     The application of similitude is based on three types of similarity. First, a model must look like the
prototype, i.e., the length ratio must be constant between corresponding points on the model and
prototype. For example, if the ratio of the lengths of the model and prototype is l, then every other length
ratio is also l. Hence, the area ratio would be l2 and the volume ratio l3. This is geometric similarity.
     The second is dynamic similarity: all force ratios acting on corresponding mass elements in the model
ﬂow and the prototype ﬂow are the same. This results by equating the appropriate dimensionless numbers
of Eqs. (6.17). If viscous effects are important, the Reynolds numbers are equated; if compressibility is
signiﬁcant, Mach numbers are equated; if gravity inﬂuences the ﬂows, Froude numbers are equated; if an
angular velocity inﬂuences the ﬂow, the Strouhal numbers are equated, and if surface tension affects the
ﬂow, the Weber numbers are equated. All of these numbers can be shown to be ratios of forces, so equating
the numbers in a particular ﬂow is equivalent to equating the force ratios in that ﬂow.
     The third type of similarity is kinematic similarity: the velocity ratio is the same between
corresponding points in the ﬂow around the model and the prototype. This can be shown by considering
the ratio of inertial forces, using the inertial force as
                                                    dV    V2       V2
                                         FI ¼ mV       <m    < rl3    ¼ rl 2 V 2                             ð6:18Þ
                                                    ds     l        l
where the acceleration* a ¼ V dV=ds has been used. The ratio of forces between model and prototype is
then
                                           ðFI Þm Vm2 lm2
                                                 ¼        ¼ const                              ð6:19Þ
                                           ðFI Þp Vp2 lp2


*
    Recall a=dV=dt and V=ds/dt so that a=VdV=ds.
CHAP. 6]                     DIMENSIONAL ANALYSIS AND SIMILITUDE                                          103



showing that the velocity ratio is a constant between corresponding points if the length ratio is a
constant, i.e., if geometric similarity exists (we assume the density ratio rm =rp to be constant between
corresponding points in the two ﬂows).
    Assuming complete similarity between model and prototype, quantities of interest can now be
predicted. For example, if a drag force is measured on ﬂow around a model in which viscous effects play
an important role, the ratio of the forces [see Eq. (6.18)] would be
                                                  ðFD Þm rm Vm2 lm2
                                                         ¼                                             ð6:20Þ
                                                  ðFD Þp   rp Vp2 lp2
The velocity ratio would be found by equating the Reynolds numbers.
                                                            rm Vm lm rp Vp lp
                                       Rem ¼ Rep                    ¼                                  ð6:21Þ
                                                              mm       mp
If the length ratio, the scale, is given and the same ﬂuid is used in model and prototype, the force acting
on the prototype can be found. It would be
                                                                       !2    !2
                                               V p 2 lp 2           lm    lp
                               ðFD Þp ¼ ðFD Þm            ¼ ðFD Þm              ¼ ðFD Þm             ð6:22Þ
                                               Vm    lm             lp    lm
showing that, if the Reynolds number governs the model study and the same ﬂuid is used in the model
and prototype, the force on the model is the same as the force of the prototype. Note that the velocity in
the model study is the velocity in the prototype multiplied by the length ratio so that the model velocity
could be quite large.
    If the Froude number governed the study, we would have
                                                                Vm2    Vp2
                                             Frm ¼ Frp               ¼                                 ð6:23Þ
                                                               l m gm l p gp

The drag force on the prototype, with gm ¼ gp , would then be
                                              Vp 2 lp 2          lp         lp 2          lp 3
                           ðFD Þp ¼ ðFD Þm              ¼ ðFD Þm                 ¼ ðFD Þm              ð6:24Þ
                                              Vm   lm            lm         lm            lm

This is the situation for the model study of a ship. The Reynolds number is not used even though the
viscous drag force acting on the ship cannot be neglected. We cannot satisfy both the Reynolds number
and the Froude number in a study if the same ﬂuid is used for the model study as that exists in the
prototype ﬂow; the model study of a ship always uses water as the ﬂuid. To account for the viscous drag,
the results of the model study based on the Froude number are adapted using industrial modiﬁers not
included in this book.


 EXAMPLE 6.2 A clever design of the front of a ship is to be tested in a water basin. A drag of 12.2 N is
 measured on the 1:20 scale model when towed at a speed of 3.6 m/s. Determine the corresponding speed of the
 prototype ship and the drag to be expected.
     Solution: The Froude number guides the model study of a ship since gravity effects (wave motions) are
 more signiﬁcant than the viscous effects. Consequently,
                                                          Vp       Vm
                                       Frp ¼ Frm    or   pﬃﬃﬃﬃﬃ ¼ pﬃﬃﬃﬃﬃﬃ
                                                          lp gp    lm gm
 Since gravity does not vary signiﬁcantly on the earth, there results
                                               sﬃﬃﬃ
                                                 lp        pﬃﬃﬃ
                                      Vp ¼ Vm       ¼ 3:6 · 20 ¼ 16:1 m=s
                                                lm
104                            DIMENSIONAL ANALYSIS AND SIMILITUDE                                         [CHAP. 6



 To ﬁnd the drag on the prototype, the drag ratio is equated to the gravity force ratio (the inertial force ratio
 could be used but not the viscous force ratio since viscous forces have been ignored).
                 ðFD Þp   rp Vp2 lp2                           Vp2 lp2          16:12
                        ¼                  \ ðFD Þp ¼ ðFD Þm           ¼ 12:2 ·       · 202 ¼ 41 000 N
                 ðFD Þm rm Vm2 lm2                             Vm2 lm2          3:62
 where we used rp > rm since salt water and fresh water have nearly the same density. The above results would be
 modiﬁed based on the established factors to account for the viscous drag on the ship.


 EXAMPLE 6.3 A large pump delivering 1.2 m3/s of water with a pressure rise of 400 kPa is needed for a
 particular hydroelectric power plant. A proposed design change is tested on a smaller 1:4 scale pump. Estimate
 the ﬂow rate and pressure rise which would be expected in the model study. If the power needed to operate the
 model pump is measured to be 8000 kW, what power would be expected to operate the prototype pump?
      Solution: For this internal ﬂow problem, Reynolds number would be equated
                                                     Vp dp Vm dm             Vp d m
                                  Rep ¼ Rem    or         ¼            or      ¼
                                                      np    nm               Vm d p

 assuming np > nm for the water in the model and prototype. The ratio of ﬂow rates is
                      Qp   Ap Vp  lp2 Vp       1                            Qp 1:2
                         ¼       ¼ 2     ¼ 42 · ¼ 4               \ Qm ¼      ¼    ¼ 0:3 m3 =s
                      Qm Am Vm lm Vm           4                            4   4
 The power ratio is found using power as force times velocity; this provides
                                                              !2     !2
                    W_p   rp Vp2 lp2 Vp                    dm     dp dm 8000
                        ¼                       _
                                            \ Wp ¼ Wm _                    ¼   ¼ 500 kW
                    W_ m rm Vm2 lm2 Vm                     dp     dm dp      4

 This is an unexpected result. When using the Reynolds number to guide a model study, the power measured on
 the model exceeds the power needed to operate the prototype since the pressures are so much larger on the
 model. Note that in this example the Euler number would be used to provide the model pressure rise as
                          Dpp   rp Vp2                           dp 2
                              ¼                \ Dpm ¼ Dpp            ¼ 400 · 42 ¼ 6400 kPa
                          Dpm rm Vm2                             dm
 For this reason and the observation that the velocity is much larger on the model, model studies are not common
 for situations (e.g., ﬂow around an automobile) in which the Reynolds number is the guiding parameter.


 EXAMPLE 6.4 The pressure rise from free stream to a certain location on the surface of the model of a rocket
 is measured to be 22 kPa at an air speed of 1200 km/h. The wind tunnel is maintained at 90 kPa absolute and
 15– C. What would be the speed and pressure rise on a rocket prototype at an elevation of 15 km?
      Solution: The Mach number governs the model study. Thus,
                                                    Vm Vp              Vm          Vp
                                Mm ¼ Mp                ¼             pﬃﬃﬃﬃﬃﬃﬃﬃ ¼ pﬃﬃﬃﬃﬃﬃﬃ
                                                    cm   cp           kRTm        kRTp

 Using the temperature from Table B.3, the velocity is
                                          sﬃﬃﬃﬃ        sﬃﬃﬃﬃﬃﬃﬃ
                                            Tp          216:7
                                 Vp ¼ Vm        ¼ 1200          ¼ 1041 km=h
                                            Tm           288

 A pressure force is DpA < Dpl2 so that the ratio to the inertial force of Eq. (6.18) is the Euler number, Dp=rV 2 :
 Equating the Euler numbers gives the pressure rise as
                                  rp Vp2        pp Tm Vp2        12:3 · 288 · 10412
                     Dpp ¼ Dpm           ¼ 22 ·           ¼ 22 ·                    ¼ 3:01 kPa
                                  rm Vm2        pm Tp Vm2        90 · 216:7 · 12002
CHAP. 6]                      DIMENSIONAL ANALYSIS AND SIMILITUDE                                                    105



                                             Solved Problems

6.1   Write the dimensions of the kinetic energy term 12 mV 2 using the F2L2T system of units.
           The dimensions on mV 2 are
                                                           L2     T 2 L2
                                              ½mV 2 ¼ M      2
                                                               ¼F        ¼ FL
                                                           T      L T2
           where M ¼ FT 2 =L comes from Newton’s second law written as m ¼ F/a. The units on FL would be
           N·m in the SI system, as expected. Using the M2L2T system the units would be (kg·m2)/s2, which are
           equivalent to N·m.

6.2   The speed V of a weight when it hits the ﬂoor is assumed to depend on gravity g, the height h from
      which it was dropped, and the density r of the weight. Use dimensional analysis and write a
      relationship between the variables.
           The dimensions of each variable are listed as
                                             L             L                             M
                                      ½V ¼          ½g ¼           ½h ¼ L        ½r ¼
                                             T             T2                            L3
           Since M occurs in only one variable, that variable r cannot be included in the relationship. The
           remaining three terms are combined to form a single p-term; it is formed by observing that T occurs in
           only two of the variables, thus V2 is in the numerator and g is in the denominator. The length
           dimension is then canceled by placing h in the denominator. The single p-term is
                                                                  V2
                                                           p1 ¼
                                                                  gh
           Since this p-term depends on all other p-terms and there are none, it must be at most a constant. Hence,
           we conclude that
                                                              pﬃﬃﬃ
                                                         V ¼ C gh
                                                               pﬃﬃ
           A simple experiment would show that C ¼ 2: We see that dimensional analysis rules out the
           possibility that the speed of free fall, neglecting viscous effects (e.g., drag), depends on the density of the
           material (or the weight).

6.3   A new design is proposed for an automobile. It is suggested that a 1:5 scale model study be done
      to access the proposed design for a speed of 90 km=h. What speed should be selected for the
      model study and what drag force would be expected on the prototype if a force of 80 N were
      measured on the model?
           The Reynolds number would be the controlling parameter. It requires
                            Vm lm Vp lp                                lp
                                 ¼      :               \ Vm ¼ Vp         ¼ 90 · 5 ¼ 450 km=h
                             nm    np                                  lm
           This high speed would introduce compressibility effects. Hence, either a larger model would have to be
           selected or a lower prototype speed would be required.
           For the speed calculated above, the drag force would be found using Eq. (6.22)
                                                                       !2        !2
                                          V p 2 lp 2          l             lp
                          ðFD Þp ¼ ðFD Þm            ¼ ðFD Þm m                       ¼ ðFD Þm ¼ 80 N
                                          Vm    lm            lp            lm
           It should be noted that for high Reynolds number ﬂows, the ﬂow around blunt objects often becomes
           independent of Reynolds number, as observed in Fig. 8.2 for ﬂow around a sphere for Re > 4 · 105 :
           This would probably be the case for ﬂow around an automobile. As long as ðReÞm > 5 · 105 any
           velocity could be selected for the model study. If the model were 40 cm wide, then a velocity of
           100 km=h could be selected; at that velocity the Reynolds number, based on the width, would be
106                            DIMENSIONAL ANALYSIS AND SIMILITUDE                                            [CHAP. 6



             Re ¼ Vm lm =nm ¼ ð100 000=3600Þ · 0:4=1:6 · 1025 ¼ 7 · 105 : This would undoubtedly be an acceptable
             velocity. It is obvious that knowledge and experience is required for such studies.




                                       Supplementary Problems

6.4    Divide Eq. (6.1) by V12 thereby expressing Bernoulli’s equation (6.1) as a group of dimensionless terms.
       Identify the dimensionless parameters introduced.

6.5    If the F– L– T system is used, select the dimensions on each of the following: (a) mass ﬂux, (b) pressure,
       (c) density, (d) viscosity, and (e) power.




Dimensional Analysis

6.6    Combine each of the following groups of variables into a single dimensionless group, a p-term.
       (a)   Velocity V, length l, gravity g, and density r
       (b)   Velocity V, diameter D, density r, and viscosity m
       (c)   Velocity V, density r, diameter D, and kinematic viscosity n
       (d)   Angular velocity O, gravity g, diameter d, and viscosity m
       (e)   Angular velocity O, viscosity m, distance b, and density r
       (f)   Power W _ ; diameter d, velocity V, and pressure rise Dp

6.7    What variable could not inﬂuence the velocity if it is proposed that the velocity depends on a diameter, a
       length, gravity, rotational speed, and viscosity?

6.8    An object falls freely in a viscous ﬂuid. Relate the terminal velocity V to its width w, its length l, gravity g,
       and the ﬂuid density r and viscosity m. Relate the terminal velocity to the other variables. Select (a) w, g, and
       r as the repeating variables and (b) l, g, and r as the repeating variables. Show that the relationship for (a) is
       equivalent to that of (b).

6.9    It is proposed that the velocity V issuing from a hole in the side of an open tank depends on the density r of
       the ﬂuid, the distance H from the surface, and gravity g. What expression relates the variables?

6.10   Include the viscosity m in the list of variables in Prob. 6.9. Find the expression that relates the variables.

6.11   Include the diameter d of the hole and the viscosity m in the list of variables in Prob. 6.9. Find an expression
       that relates the variables.

6.12   The pressure drop Dp over a horizontal section of pipe of diameter d depends on the average velocity, the
       viscosity, the ﬂuid density, the average height of the surface roughness elements, and the length of the pipe
       section. Write an expression that relates the pressure drop to the other variables.

6.13   Assume a vertical pipe and include gravity in the list of variables in Prob. 6.12 and ﬁnd an expression for the
       pressure drop.

6.14   The drag force on a sphere depends on the sphere’s diameter and velocity, the ﬂuid’s viscosity and density,
       and gravity. Find an expression for the drag force.
CHAP. 6]                        DIMENSIONAL ANALYSIS AND SIMILITUDE                                                   107


6.15   The drag force on a cylinder is studied in a wind tunnel. If wall effects are negligible, relate the drag force to
       the wind’s speed, density and kinematic viscosity, and the cylinder’s diameter and length.

6.16   The distance of the ﬂight of a golf ball is assumed to depend on the initial velocity of the ball, the angle of the
       ball from the club, the viscosity and density of the air, the number of dimples on the ball and its diameter,
       and gravity. Write an expression for the ﬂight distance. How would the temperature of the air inﬂuence the
       ﬂight distance?

6.17   The ﬂow rate Q of water in an open channel is assumed to depend on the height h of the water and width w
       and slope S of the channel, the wall roughness height e, and gravity g. Relate the ﬂow rate to the other
       variables.

6.18   The lift FL on an airfoil is related to its velocity V, its length L, its chord length c, its angle of attack a, and
       the density r of the air. Viscous effects are assumed negligible. Relate the lift to the other variables.

6.19   The drag FD on an airfoil is related to its velocity V, its length L, its chord length c, its angle of attack a, and
       the density r and viscosity m of the air. Relate the drag to the other variables.

6.20   Find an expression for the torque required to rotate a disk of diameter d, a distance t from a ﬂat plate at a
       rotational speed O, a liquid ﬁlls the space between the disk and the plate.

6.21   The power W  _ P required for a pump depends on the impeller rotational speed O, the impeller diameter d, the
       number N of impeller blades, the ﬂuid viscosity and density, and the pressure difference Dp: What expression
       relates the power to the other variables?

6.22   Write an expression for the torque required to rotate the cylinder surrounded by a ﬂuid as shown in Fig. 6.3.
       (a) Neglect the effects of h. (b) Include the effects of h.


                                                        T


                                            t       R
                                                                H



                                                                h       Fluid

                                                Figure 6.3 Similitude.

6.23   After a model study has been performed, quantities of interest are often predicted for the prototype. Using
       an average velocity V, a characteristic dimension l, and the ﬂuid density r, write the ratio of prototype to
       model of (a) drag force FD, (b) ﬂow rate Q, (c) pressure drop Dp; and (d) torque T.

6.24   A model of a golf ball is to be studied to determine the effects of the dimples. A sphere 10 times larger than
       an actual golf ball is used in the wind tunnel study. What speed should be selected for the model to simulate a
       prototype speed of 50 m=s?

6.25   A proposed pier design is studied in a water channel to simulate forces due to hurricanes. Using a 1:10 scale
       model, what velocity should be selected in the model study to simulate a water speed of 12 m=s?

6.26   A proposed model study of a low-speed aircraft is to be performed using a 1:10 scale model. If the prototype
       is to travel at 25 m=s, what speed should be selected for a wind tunnel model? Is such a test advisable? Would
       it be better to test a 40:1 scale model in a water channel?
108                               DIMENSIONAL ANALYSIS AND SIMILITUDE                                           [CHAP. 6



6.27   A towing force of 15 N is measured on a 1:40 scale model of a ship in a water channel. What velocity should
       be used to simulate a prototype speed of 10 m=s? What would be the predicted force on the ship at that speed?

6.28   A 1:20 scale model of an aircraft is studied in a 20– C supersonic wind tunnel at sea level. If a lift of 20 N at a
       speed of 250 m=s is measured in the wind tunnel, what velocity and lift does that simulate for the prototype?
       Assume the prototype is at (a) sea level, (b) 3000 m, and (c) 10 000 m.

6.29   The force on a weir is to be predicted by studying the ﬂow of water over a 1:10 scale model. If 1.8 m3=s is
       expected over the weir, what ﬂow rate should be used in the model study? What force should be expected on
       the weir if 20 N is measured on the model?




                               Answers to Supplementary Problems
       gz             p
6.4          and
       V2            rV 2
6.5    (a) FT=L         (b)   F=L2     (c)     FT 2 =L4   (d )   FT=L2    (e)   LF=T

6.6    (a) V 2 =lg      (b)   VrD=m      (c)     VD=n     (d )   O2 d=g   (e) Orb2 =m       (f )   _ =DpV 2 d
                                                                                                   W

6.7    Viscosity
                             pﬃﬃ = !                      pﬃﬃ = !
            V2         w r gw3 2                V2    l r gl3 2
6.8    (a)      ¼f       ;              (b)        ¼f   ;
             gw        l       m                gl    w    m
              pﬃﬃﬃﬃ
6.9    V ¼ C gH
                    pﬃﬃﬃﬃﬃ !
         V        r gH3
6.10   pﬃﬃﬃﬃ ¼ f
         gH           m
                         pﬃﬃﬃﬃﬃ !
         V        H r gH3
6.11   pﬃﬃﬃﬃ ¼ f     ;
         gH        d       m

        Dp     e L rVd
6.12      2
            ¼f ; ;
       rV      d d m
                                  !
        Dp       e L rVd V 2
6.13      2
             ¼f ; ;       ;
       rV        d  d m dg
                           !
         FD        rVd V 2
6.14           ¼f      ;
       rV 2 d2       m dg

        FD         Vd d
6.15            ¼f    ;
       rV 2 d 2     n l
                              !
       L        rVd      V2
6.16     ¼ f a;     ; N;
       d         m       dg

        Q        h      h
6.17   pﬃﬃﬃﬃ ¼ f   ; S;
        gh 5     w      e

        FL        c
6.18           ¼f   ;a
       rV 2 c2    L
CHAP. 6]                          DIMENSIONAL ANALYSIS AND SIMILITUDE                                   109


        FD         c      rVc
6.19           ¼f    ; a;
       rV 2 c2     L        m
                              !
         T         d rOd2
6.20           ¼ f   ;
       rO2 d 5     t      m
                                       !
        W_P        rOd 2        Dp
6.21           ¼ f        ; N;
       rO3 d 5      m          rO2 d 2
                                     !
         T         R R R rOd 2
6.22           ¼ f  ;    ;   ;
       rO2 d 5     t H h        m

             FD;p   rp lp2 Vp2             Qp   Vp lp2         Dpp   rp Vp2           Tp   rp Vp2 lp3
6.23   (a)        ¼                (b)        ¼          (c)       ¼          (d)        ¼
             FD;m rm lm2 Vm2               Qm Vm lm2           Dpm rm Vm2             Tm rm Vm2 lm3

6.24   5 m=s

6.25   3.79 m=s

6.26   500 m=s, 133 m=s. No model study feasible

6.27   1.58 m=s, 60 kN

6.28   (a)   250 m=s, 8000 N        (b)    258 m=s, 6350 N      (c) 283 m=s, 3460 N

6.29   56.9 m3=s, 20 kN
                                        Chapter 7


Internal Flows

7.1   INTRODUCTION
The material in this chapter is focused on the inﬂuence of viscosity on the ﬂows internal to boundaries,
such as ﬂow in a pipe or between rotating cylinders. Chapter 8 will focus on ﬂows that are external to a
boundary, such as an airfoil. The parameter that is of primary interest in an internal ﬂow is the Reynolds
number:
                                                                 rVL
                                                          Re ¼                                             ð7:1Þ
                                                                  m                       -
where L is the primary characteristic length (e.g., the diameter of a pipe) in the problem of interest and V
is usually the average velocity in a ﬂow.
      If viscous effects dominate the ﬂow (this requires a relatively large wall area), as in a long length of
pipe, the Reynolds number is important; if inertial effects dominate, as in a sudden bend or a pipe
entrance, then the viscous effects can often be ignored since they do not have a sufﬁciently large area
upon which to act thereby making the Reynolds number less inﬂuential.
      We will consider internal ﬂows in pipes, between parallel plates and rotating cylinders, and in open
channels in some detail. If the Reynolds number is relatively low, the ﬂow is laminar (see Sec. 3.3.3); if it is
relatively high, then the ﬂow is turbulent. For pipe ﬂows, the ﬂow is assumed to be laminar if R , 2000; for
ﬂow between wide parallel plates, it is laminar if Re , 1500; for ﬂow between rotating concentric cylinders,
it is laminar and ﬂows in a circular motion below Re , 1700; and in the open channels of interest, it is
assumed to be turbulent. The characteristic lengths and velocities will be deﬁned later.


7.2   ENTRANCE FLOW
The comments and Reynolds numbers mentioned above refer to developed ﬂows, ﬂows in which the velocity
proﬁles do not change in the stream-wise direction. In the region near a geometry change, such as an elbow
or a valve or near an entrance, the velocity proﬁle changes in the ﬂow direction. Let us consider the changes
in the entrance region for a laminar ﬂow in a pipe or between parallel plates. The entrance length LE is
sketched in Fig. 7.1. The velocity proﬁle very near the entrance is essentially uniform, the viscous wall layer
grows until it permeates the entire cross section over the inviscid core length Li; the proﬁle continues to
develop into a developed ﬂow at the end of the proﬁle development region.
     For a laminar ﬂow in a pipe with a uniform velocity proﬁle at the entrance,

                                              LE                              VD
                                                 ¼ 0:065Re             Re ¼                                ð7:2Þ
                                              D                                n

                                                          110
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 7]                                                INTERNAL FLOWS                                                                111


                                              Li                 profile development length

                                          Viscous wall layer
                                                                      u(x,y)                              u( y)

                                       Inviscid core

                                                        LE (entrance length)

              Figure 7.1 The laminar-ﬂow entrance region in a pipe or between parallel plates.

where V is the average velocity and D is the diameter. The inviscid core is about half of the entrance
length. It should be mentioned that laminar ﬂows in pipes have been observed at Reynolds numbers as
high as 40 000 in extremely controlled ﬂows in smooth pipes in a building free of vibrations; for a
conventional pipe with a rough wall, we use 2000 as the limit for a laminar ﬂow.
    For ﬂow between wide parallel plates with a uniform proﬁle at the entrance,
                                                    LE                                   Vh
                                                       ¼ 0:04Re                   Re ¼                                               ð7:3Þ
                                                     h                                    n
where h is the distance between the plates and V is the average velocity. A laminar ﬂow cannot exist for
Re . 7700; a value of 1500 is used as the limit for a conventional ﬂow.
    The entrance region for a developed turbulent ﬂow is displayed in Fig. 7.2. The velocity proﬁle is
developed at the length Ld, but the characteristics of the turbulence in the ﬂow require the additional
length. For large Reynolds numbers exceeding 105 in a pipe, we use
                                                   Li              Ld              LE
                                                      > 10            > 40            > 120                                          ð7:4Þ
                                                   D               D               D
                                     Ld

                       Li                   Profile development length                                              Developed
                    Wall layer                                                                                      turbulent flow

                                               u(x,y)

                   Inviscid core


                             LE (entrance length)

                                                                                    u(y) = umax ( y/r0 )1/n 10 > n > 5

                                 Figure 7.2 The turbulent-ﬂow entrance region in a pipe.
               p
                                               Transition near the origin
                                                 (for Re > 300 000)
                                                    Laminar flow
                                                             Transition near Li


                        Transition near Ld
                         (for Re about 10 000)




                                                                                                                     x

                   Figure 7.3 Pressure variation in a pipe for both laminar and turbulent ﬂows.
112                                                 INTERNAL FLOWS                                                  [CHAP. 7



For a ﬂow with Re ¼ 4000, the development lengths are possibly ﬁve times those listed in Eq. (7.4) due
to the initial laminar development followed by the development of turbulence. (Research has not been
reported for ﬂows in which Re , 105).
    The pressure variation is sketched in Fig. 7.3. The initial transition to turbulence from the wall of the
pipe is noted in the ﬁgure. The pressure variation for the laminar ﬂow is higher in the entrance region
than in the fully developed region due to the larger wall shear and the increasing momentum ﬂux.

7.3     LAMINAR FLOW IN A PIPE
Steady, developed laminar ﬂow in a pipe will be derived applying Newton’s second law to the element of
Fig. 7.4 in Sec. 7.3.1 or using the appropriate Navier– Stokes equation of Chap. 5 in Sec. 7.3.2. Either
derivation can be used since we arrive at the same equation using both approaches.

7.3.1     The Elemental Approach
The element of ﬂuid shown in Fig. 7.4 can be considered a control volume into and from which the ﬂuid
ﬂows or it can be considered a mass of ﬂuid at a particular moment. Considering it to be an
instantaneous mass of ﬂuid that is not accelerating in this steady, developed ﬂow, Newton’s second law
takes the form
                      X
                         Fx ¼ 0 or ppr2 2 ðp þ dpÞpr2 2 t2pr dx þ gpr2 dx sin y ¼ 0               ð7:5Þ
where t is the shear on the wall of the element and g is the speciﬁc weight of the ﬂuid. The above equation
simpliﬁes to
                                                                      r d
                                                         t¼2               ðp þ ghÞ                                    ð7:6Þ
                                                                      2 dx
using dh ¼ 2sin y dx with h measured in the vertical direction. Note that this equation can be applied to
either a laminar or a turbulent ﬂow. For a laminar ﬂow, the shear stress t is related to the velocity
gradient* by Eq. (1.9):

                                                                                                 dx
                                                  –dh
                   D                         dx               h                        p r2           (p + dp) r2
                                  ro
                                                                  r
                                                                                                      r2dx
                                                                                         2 rdx

                                                                            u(r)
                                                                                   x


                                       Figure 7.4   Steady, developed ﬂow in a pipe.


                                                             du    r d
                                                        2m      ¼2      ðp þ ghÞ                                       ð7:7Þ
                                                             dr    2 dx
Because we assume a developed ﬂow (no change of the velocity proﬁle in the ﬂow direction), the left-
hand side is a function of r only and so dðp þ ghÞ=dx must be at most a constant (it cannot depend on r
since there is no radial acceleration and since we assume the pipe is relatively small, there is no variation
of pressure with r); hence, we can write
                                             Z      Z r d
                                               du ¼         ðp þ ghÞdr                                   ð7:8Þ
                                                      2m dx

*
    The minus sign is required since the stress is a positive quantity and du=dr is negative near the lower wall.
CHAP. 7]                                            INTERNAL FLOWS                                                      113



This is integrated to provide the velocity proﬁle
                                                                  r2 d
                                                      uðrÞ ¼            ðp þ ghÞ þ C                                   ð7:9Þ
                                                                  4m dx
where the constant of integration C can be evaluated using uðr0 Þ ¼ 0 so that
                                                              ðr2 2 r02 Þ d
                                                    uðrÞ ¼                  ðp þ ghÞ                                  ð7:10Þ
                                                                  4m     dx
For a horizontal pipe for which dh=dx ¼ 0, the velocity proﬁle becomes
                                                                    1 dp 2
                                                          uðrÞ ¼         ðr 2 r02 Þ                                   ð7:11Þ
                                                                   4m dx
The above velocity proﬁle is a parabolic proﬁle; the ﬂow is sometimes referred to as a Poiseuille ﬂow.
     The same result can be obtained by solving the appropriate Navier –Stokes equation; if that is not of
interest, go directly to Sec. 7.3.3.


7.3.2   Applying the Navier – Stokes Equations
The z-component differential momentum equation using cylindrical coordinates from Table 5.1 is applied
to a steady, developed ﬂow in a circular pipe. For the present situation, we wish to refer to the coordinate in
the ﬂow direction as x and the velocity component in the x-direction as u(x); so, let us replace the z with x
and the vz with u. Then, the differential equation takes the form
                                                                                                !
                     @u vy @u       @u @u           @p              @ 2 u 1 @u 1 @ 2 u @ 2 u
                r vr    þ      þu      þ       ¼2       þ rgx þ m        þ     þ         þ               ð7:12Þ
                     @r   r @y      @x @t           @x              @r2 r @r r2 @y2 @x2
                 no radial    no     developed   steady                                       symmetric   developed
                  velocity   swirl     ﬂow        ﬂow                                           ﬂow         ﬂow




Observe that the left-hand side is zero, i.e., the ﬂuid particles are not accelerating. Using rgx ¼ g sin y ¼
2gdh=dx; the above equation simpliﬁes to
                                                     1 @             1 @ @u
                                                          ðp þ ghÞ ¼      r                                           ð7:13Þ
                                                     m @x            r @r @r
where the ﬁrst two terms in the parentheses on the right-hand side of Eq. (7.12) have been combined, i.e.,
                                                      @ 2 u 1 @u 1 @      @u
                                                          2
                                                            þ     ¼     r
                                                      @r      r @r r @r @r
Now, we see that the left-hand side of Eq. (7.13) is at most a function of x and the right-hand side is a
function of r. This means that each side is at most a constant, say l, since x and r can be varied
independently of each other. So, we replace the partial derivatives with ordinary derivatives and write
Eq. (7.13) as
                                                    1 d du                       du
                                             l¼          r            or   d r      ¼ lr dr                           ð7:14Þ
                                                    r dr dr                      dr
This is integrated to provide
                                                                  du   r2
                                                              r      ¼l þA                                            ð7:15Þ
                                                                  dr   2
Multiply by dr=r and integrate again. We have
                                                                     r2
                                                          uðrÞ ¼ l      þ A ln r þ B                                  ð7:16Þ
                                                                     4
114                                         INTERNAL FLOWS                                        [CHAP. 7



Refer to Fig. 7.4: the two boundary conditions are u is ﬁnite at r ¼ 0 and u ¼ 0 at r ¼ r0. Thus, A ¼ 0
and B ¼ 2lr02 =4: Since l is the left-hand side of Eq. (7.13), we can write Eq. (7.16) as
                                                     1 d
                                           uðrÞ ¼         ðp þ ghÞðr2 2 r02 Þ                         ð7:17Þ
                                                    4m dx
This is the parabolic velocity distribution of a developed laminar ﬂow in a pipe, sometimes called a
Poiseuille ﬂow. For a horizontal pipe, dh=dx ¼ 0 and
                                                         1 dp 2
                                               uðrÞ ¼         ðr 2 r02 Þ                              ð7:18Þ
                                                        4m dx


7.3.3   Quantities of Interest
The ﬁrst quantity of interest in the ﬂow in a pipe is the average velocity V. If we express the constant
pressure gradient as dp=dx ¼ 2 Dp=L, where Dp is the pressure drop (a positive number) over the length
of pipe L, there results
                                        1Z
                                    V¼       uðrÞ2pr dr
                                        A
                                                                                                  ð7:19Þ
                                            2p Dp Zr0 2                 r 2 Dp
                                      ¼2 2              ðr 2 r02 Þr dr ¼ 0
                                           pr0 4mL 0                     8mL

The maximum velocity occurs at r ¼ 0 and is
                                                      r 2 Dp
                                                umax ¼ 0     ¼ 2V                                     ð7:20Þ
                                                       4mL
The pressure drop, rewriting Eq. (7.19), is
                                                             8mLV
                                                     Dp ¼                                             ð7:21Þ
                                                              r02
The shear stress at the wall can be found by considering a control volume of length L in the pipe. For a
horizontal pipe, the pressure force balances the shear force so that the control volume yields
                                                                          r Dp
                                       pr02 Dp ¼ 2pr0 Lt0           \ t0 ¼ 0                          ð7:22Þ
                                                                           2L

      Sometimes a dimensionless wall shear, called the friction factor f, is used. It is deﬁned to be
                                                         t
                                                   f¼1 02                                             ð7:23Þ
                                                       8rV

We also refer to a head loss hL deﬁned as Dp=g. By combining the above equations, it can be expressed as
                                                        Dp    L V2
                                                 hL ¼      ¼f                                         ð7:24Þ
                                                         g    D 2g
This is sometimes referred to as the Darcy –Weisbach equation; it is valid for both a laminar and a
turbulent ﬂow in a pipe. In terms of the Reynolds number, the friction factor for a laminar ﬂow is
(combine Eqs. (7.21) and (7.24))
                                                             64
                                                        f¼                                            ð7:25Þ
                                                             Re
where Re ¼ VD=n. If this is substituted into Eq. (7.24), we see that the head loss is directly proportional
to the average velocity in a laminar ﬂow, a fact that is also applied to a laminar ﬂow in a conduit of any
cross section.
CHAP. 7]                                         INTERNAL FLOWS                                                  115



 EXAMPLE 7.1 The pressure drop over a 30-m length of 1-cm-diameter horizontal pipe transporting water
 at 20– C is measured to be 2 kPa. A laminar ﬂow is assumed. Determine (a) the maximum velocity in the pipe,
 (b) the Reynolds number, (c) the wall shear stress, and (d ) the friction factor.
      Solution: (a) The maximum velocity is found to be
                                          r 2 Dp 0:0052 · 2000
                                    umax ¼ 0    ¼                ¼ 0:4167 m=s
                                           4mL    4 · 10 23 · 30
 Note: The pressure must be in pascals in order for the units to check. It is wise to make sure the units check when
 equations are used for the ﬁrst time. The above units are checked as follows:
                                                   m2 · N=m2
                                                                ¼ m=s
                                                  ðN·s=m2 Þ · m
 (b) The Reynolds number, a dimensionless quantity, is
                                                 VD ð0:4167=2Þ0:01
                                         Re ¼       ¼              ¼ 4167
                                                  n      10 26
 This exceeds 2000 but a laminar ﬂow can exist at higher Reynolds numbers if a smooth pipe is used and care is
 taken to provide a ﬂow free of disturbances. But, note how low the velocity is in this relatively small pipe.
 Laminar ﬂows are rare in most engineering applications unless the ﬂuid is extremely viscous or the dimensions
 are quite small.
 (c) The wall shear stress due to the viscous effects is found to be
                                            r Dp 0:005 · 2000
                                        t0 ¼ 0  ¼             ¼ 0:1667 Pa
                                             2L     2 · 30
 If we had used the pressure in kPa, the stress would have had units of kPa.
 (d) Finally, the friction factor, a dimensionless quantity, is
                                       t            0:1667
                                   f¼1 02¼                          ¼ 0:0077
                                     2rV   0:5 · 1000 · ½0:4167=2 2


7.4     LAMINAR FLOW BETWEEN PARALLEL PLATES
Steady, developed laminar ﬂow between parallel plates (one plate is moving with velocity U) will be
derived in Sec. 7.4.1 applying Newton’s second law to the element of Fig. 7.5 or using the appropriate
Navier– Stokes equation of Chap. 5 in Sec. 7.4.2. Either derivation can be used since we arrive at the
same equation using both approaches.

7.4.1    The Elemental Approach
The element of ﬂuid shown in Fig. 7.5 can be considered a control volume into and from which the ﬂuid
ﬂows or it can be considered a mass of ﬂuid at a particular moment. Considering it to be an instantaneous
mass of ﬂuid that is not accelerating in this steady, developed ﬂow, Newton’s second law takes the form
                    X
                       Fx ¼ 0 or p dy 2 ðp þ dpÞdy þ tdx 2 ðt þ dtÞdx þ g dx dy sin y ¼ 0           ð7:26Þ


                                                                                  ( + d )dx
                b                                                       p dy
                                          dx           h
                                               – dh                             dx
                                                        y
                                                                                            (p + dp) dy

                                                             u(y)       U            dxdy


                                                                    x

                           Figure 7.5    Steady, developed ﬂow between parallel plates.
116                                                  INTERNAL FLOWS                                               [CHAP. 7



where t is the shear on the wall of the element and g is the speciﬁc weight of the ﬂuid. We have assumed a
unit length into the paper (in the z-direction). To simplify, divide by dx dy and use dh ¼ 2sin y dx with h
measured in the vertical direction:
                                                                  dt   d
                                                                     ¼   ðp þ ghÞ                                   ð7:27Þ
                                                                  dy dx
For this laminar ﬂow, the shear stress is related to the velocity gradient by t ¼ m du=dy so that Eq. (7.27)
becomes
                                                                  d2 u    d
                                                             m       2
                                                                       ¼    ðp þ ghÞ                                ð7:28Þ
                                                                  dy     dx
The left-hand side is a function of y only for this developed ﬂow (we assume a wide channel with an
aspect ratio in excess of 8) and the right-hand side is a function of x only. So, we can integrate twice on y
to obtain
                                                  1 dðp þ ghÞ 2
                                          uðyÞ ¼               y þ Ay þ B                              ð7:29Þ
                                                 2m     dx
Using the boundary conditions uð0Þ ¼ 0 and uðbÞ ¼ U, the constants of integration are evaluated and a
parabolic proﬁle results:
                                                            1 dðp þ ghÞ 2        U
                                               uðyÞ ¼                  ðy 2 byÞ þ y                                 ð7:30Þ
                                                           2m    dx              b
If the plates are horizontal and U ¼ 0, the velocity proﬁle simpliﬁes to
                                                                       Dp
                                                           uðyÞ ¼         ðby 2 y2 Þ                                ð7:31Þ
                                                                      2mL
where we have let dðp þ ghÞ=dx ¼ 2Dp=L for the horizontal plates where Dp is the pressure drop, a
positive quantity.
     If the ﬂow is due only to the top plate moving, with zero pressure gradient, it is a Couette ﬂow so
that uðyÞ ¼ Uy=b. If both plates are stationary and the ﬂow is due only to a pressure gradient, it is a Poiseuille
ﬂow.
     The same result can be obtained by solving the appropriate Navier– Stokes equation; if that is not of
interest, go directly to Sec. 7.4.3.

7.4.2   Applying the Navier– Stokes Equations
The x-component differential momentum equation in rectangular coordinates (see Eq. (5.18)) is selected
for this steady, developed ﬂow with streamlines parallel to the walls in a wide channel (at least an 8:1
aspect ratio):
                                                                                       !
                        @u    @u     @u     @u        @p                @2u @2u @2u
                      r    þu    þv þw          ¼2        þ g sin y þ m     þ     þ
                        @t    @x     @y     @z        @x                @x2 @y2 @z2               ð7:32Þ
                          steady   developed     streamlines                           developed   wide channel
                                               parallel to wall




where the channel makes an angle of y with the horizontal. Using dh ¼ 2dx sin y, the above partial
differential equation simpliﬁes to
                                          d2 u 1 d
                                              ¼      ðp þ ghÞ                               ð7:33Þ
                                          dy2 m dx
where the partial derivatives have been replaced by ordinary derivatives since u depends on y only and p
is a function of x only.
CHAP. 7]                                        INTERNAL FLOWS                                           117



    Because the left-hand side is a function of y and the right-hand side is a function of x, both of which
can be varied independent of each other, the two sides can be at most a constant, say l, so that
                                                     d2 u
                                                          ¼l                                          ð7:34Þ
                                                     dy2
Integrating twice provides
                                                           1
                                                     uðyÞ ¼ ly2 þ Ay þ B                              ð7:35Þ
                                                           2
Refer to Fig. 7.5: the boundary conditions are u(0) ¼ 0 and u(b) ¼ U provided
                                                        U    b
                                                  A¼      2l             B¼0                          ð7:36Þ
                                                        b    2

The velocity proﬁle is thus
                                                     dðp þ ghÞ=dx 2        U
                                            uðyÞ ¼               ðy 2 byÞ þ y                         ð7:37Þ
                                                          2m               b
where l has been used as the right-hand side of Eq. (7.33).
   In a horizontal channel, we can write dðp þ ghÞ=dx ¼ 2Dp=L. If U ¼ 0, the velocity proﬁle is
                                                               Dp
                                                     uðyÞ ¼       ðby 2 y2 Þ                          ð7:38Þ
                                                              2mL
This is the Poiseuille ﬂow. If the pressure gradient is zero and the motion of the top plate causes the ﬂow,
it is a Couette ﬂow with uðyÞ ¼ Uy=b.

7.4.3     Quantities of Interest
Let us consider several quantities of interest for the case of two ﬁxed plates with U ¼ 0. The ﬁrst quantity
of interest in the ﬂow is the average velocity V. The average velocity is, assuming unit width of the plates,
                                      1 Z
                               V¼          uðyÞdy
                                    b·1
                                                                  "          #                         ð7:39Þ
                                     Dp Zb           2        Dp     b2 b3        b2 Dp
                                 ¼           ðby 2 y Þdr ¼          b 2        ¼
                                    2bmL 0                   2bmL    2     3      12mL
The maximum velocity occurs at y ¼ b=2 and is
                                                           !
                                                  Dp b2 b2     b2 Dp 2
                                          umax ¼       2     ¼      ¼ V                               ð7:40Þ
                                                 2mL 2   4      8mL  3
      The pressure drop, rewriting Eq. (7.39), is for this horizontal* channel,
                                                                12mLV
                                                        Dp ¼                                          ð7:41Þ
                                                                  b2
    The shear stress at either wall can be found by considering a free body of length L in the channel.
For a horizontal channel, the pressure force balances the shear force:
                                                                                   b Dp
                                      ðb · 1ÞDp ¼ 2ðL · 1Þt0              \ t0 ¼                      ð7:42Þ
                                                                                    2L
      In terms of the friction factor f, deﬁned by
                                                                  t0
                                                           f¼1       2
                                                                                                      ð7:43Þ
                                                                8 rV


*
    For a sloped channel simply replace p with (p þ gh).
118                                               INTERNAL FLOWS                                          [CHAP. 7



the head loss for the horizontal channel is
                                                             Dp    L V2
                                                      hL ¼      ¼f                                           ð7:44Þ
                                                              g    2b 2g
      Several of the above equations can be combined to ﬁnd
                                                                  48
                                                             f¼                                              ð7:45Þ
                                                                  Re
where Re ¼ bV=n. If this is substituted into Eq. (7.44), we see that the head loss is directly proportional
to the average velocity in a laminar ﬂow.
    The above equations were derived for a channel with aspect ratio . 8. For lower aspect-ratio
channels, the sides would require additional terms since the shear acting on the side walls would
inﬂuence the central part of the ﬂow.
    If interest is in a horizontal channel ﬂow where the top plate is moving and there is no pressure
gradient, then the velocity proﬁle would be the linear proﬁle
                                                                     U
                                                          uðyÞ ¼       y                                     ð7:46Þ
                                                                     b

    EXAMPLE 7.2 The thin layer of rain at 20– C ﬂows down a parking lot at a relatively constant depth of 4 mm.
    The area is 40 m wide with a slope of 8 cm over 60 m of length. Estimate (a) the ﬂow rate, (b) shear at the
    surface, (c) the Reynolds number, and the velocity at the surface.
         Solution: (a) The velocity proﬁle can be assumed to be one-half of the proﬁle shown in Fig. 7.5, assuming
    a laminar ﬂow. The average velocity would remain as given by Eq. (7.39), i.e.,

                                                             b2 gh
                                                       V¼
                                                             12mL
    where Dp has been replaced with gh. The ﬂow rate is
                                      b2 gh              0:0042 · 9810 · 0:08
                       Q ¼ AV ¼ bw          ¼ 0:004 · 40                      ¼ 2:80 · 10 23 m3 =s
                                      12mL                  12 · 10 23 · 60
    (b) The shear stress acts only at the solid wall, so Eq. (7.42) would provide
                                             bgh 0:004 · 9810 · 0:08
                                      t0 ¼      ¼                    ¼ 0:0523 Pa
                                              L          60
    (c) The Reynolds number is
                                             bV 0:004 0:0042 · 9810 · 0:08
                                     Re ¼       ¼ 26 ·                     ¼ 697
                                              n  10      12 · 10 23 · 60
    The Reynolds number is below 1500, so the assumption of laminar ﬂow is acceptable.


7.5     LAMINAR FLOW BETWEEN ROTATING CYLINDERS
Steady ﬂow between concentric cylinders, as sketched in Fig. 7.6, is another relatively simple example of
a laminar ﬂow that we can solve analytically. Such a ﬂow exists below a Reynolds number* of 1700.
Above 1700, the ﬂow might be a different laminar ﬂow or a turbulent ﬂow. This ﬂow has application in
lubrication in which the outer shaft is stationary. We will again solve this problem using a ﬂuid element
in Sec. 7.5.1 and using the appropriate Navier– Stokes equation in Sec. 7.5.2; either method may be used.

7.5.1     The Elemental Approach
The two rotating concentric cylinders are displayed in Fig. 7.6. We will assume vertical cylinders, so body
forces will act normal to the circular ﬂow in the y-direction with the only nonzero velocity component vy .

*
    The Reynolds number is deﬁned as Re ¼ o1 r1 d=n; where d ¼ r2 2 r1 .
CHAP. 7]                                         INTERNAL FLOWS                                                    119



The element of ﬂuid selected, shown in Fig. 7.6, has no angular acceleration in this steady-ﬂow condition.
Consequently, the summation of torques acting on the element is zero:
                                  t · 2prL · r 2 ðt þ dtÞ · 2pðr þ drÞL · ðr þ drÞ ¼ 0                           ð7:47Þ
where tðrÞ is the shear stress and L is the length of the cylinders, which must be large when compared
with the gap width d ¼ r2 2 r1. Equation (7.47) simpliﬁes to
                                           t2r dr þ r2 dt þ 2r dt dr þ dtðdrÞ2 ¼ 0                               ð7:48Þ
                             2

                                                                                                            dr
                                    Fluid between
                                                                     ( + d )2 (r + dr)L
                                     the cylinders


                                                 r          y
                                       1                                                  2 rL
                      v                                                                              r

                                           r1



                                      r2

                                                                                    Fluid element from
                                                                                    between the cylinders

                                  Figure 7.6     Flow between concentric cylinders.

The last two terms of Eq. (7.47) are higher-order terms that are negligible when compared with the ﬁrst
two terms, so that the simpliﬁed equation is
                                                                    dt
                                                                r      þ 2t ¼ 0                                  ð7:49Þ
                                                                    dr
Now we must recognize that the t of Eq. (7.49) is* 2try of Table 5.1 with entry under ‘‘Stresses.’’ For this
simpliﬁed application, the shear stress is related to the velocity gradient by
                                                                         @ðvy =rÞ
                                                            try ¼ mr                                             ð7:50Þ
                                                                           @r
This allows Eq. (7.49) to be written, writing the partial derivatives as ordinary derivatives since vy
depends on r only, as
                                                     d dðvy =rÞ       dðvy =rÞ
                                                rm      r       þ 2mr          ¼0                                ð7:51Þ
                                                     dr   dr            dr
Multiply by dr, divide by mr, and integrate:
                                                            dðvy =rÞ   v
                                                        r            þ2 y ¼A                                     ð7:52Þ
                                                              dr        r
or, since rdðvy =rÞ=dr ¼ dvy =dr 2 vy =r, this can be written as
                                            dvy vy                             1 dðrvy Þ
                                                þ ¼A                     or              ¼A                      ð7:53Þ
                                             dr  r                             r dr
Now integrate again and obtain
                                                                         A    B
                                                            vy ðrÞ ¼       rþ                                    ð7:54Þ
                                                                         2    r

*
 The minus sign results from the shear stress in Fig. 7.6 being on a negative face in the positive direction, the sign
convention for a stress component.
120                                             INTERNAL FLOWS                                         [CHAP. 7



Using the boundary conditions vy ¼ r1 o1 at r ¼ r1 and vy ¼ r2 o2 at r ¼ r2 , the constants are found to be
                                            o2 r22 2 o1 r12                r 2 r 2 ðo 2 o Þ
                                     A¼2                                 B¼ 1 22 1 2 2                   ð7:55Þ
                                               r22 2 r12                        r2 2 r1
     The same result can be obtained by solving the appropriate Navier– Stokes equation; if that is not of
interest, go directly to Sec. 7.5.3.

7.5.2   Applying the Navier– Stokes Equations
The y-component differential momentum equation of Table 5.1 is selected for this circular motion with
vr ¼ 0 and vz ¼ 0:
                            steady                symmetric

                           @vy     @v  v @v     @v  vv       1 @p
                               þ vr y þ y y þ vz y þ y r ¼ 2       þ gy
                           @t      @r   r @y    @z   r       rr @y
                                                                                                   !     ð7:56Þ
                                          @ 2 vy 1 @vy 1 @ 2 vy @ 2 vy vy 2 @vr
                                       þv       þ     þ        þ 2 2 2þ 2
                                          @r2     r @r r2 @y2   @z     r  r @y
                                                                         symmetric     away from
                                                                                       end walls


Replace the ordinary derivatives with partial derivatives since vy depends on y only and the equation
becomes
                                                         d2 vy 1 dvy vy
                                                   0¼         þ      2 2                                 ð7:57Þ
                                                          dr2   r dr  r
which can be written in the form
                                                     d dvy    dðvy =rÞ
                                                           ¼2                                            ð7:58Þ
                                                     dr dr      dr
Multiply by dr and integrate:
                                           dvy    v                       1 dðrvy Þ
                                               ¼ 2 yþA              or              ¼A                   ð7:59Þ
                                            dr     r                      r dr
Integrate once again:
                                                                   A    B
                                                        vy ðrÞ ¼     rþ                                  ð7:60Þ
                                                                   2    r
The boundary conditions vy ðr1 Þ ¼ ro1 and vy ðr2 Þ ¼ ro2 allow
                                           o2 r22 2 o1 r12                  r 2 r 2 ðo 2 o Þ
                                     A¼2                                  B¼ 1 22 1 2 2                  ð7:61Þ
                                              r22 2 r12                          r2 2 r1


7.5.3   Quantities of Interest
Many applications of rotating cylinders involve the outer cylinder being ﬁxed, that is, o2 ¼ 0. The
velocity distribution, found in the preceding two sections, with A and B simpliﬁed, becomes
                                                                   !
                                                     o1 r12 r22
                                           vy ðrÞ ¼ 2           2r                            ð7:62Þ
                                                   r2 2 r12 r
The shear stress t1 (2try from Table 5.1) acts on the inner cylinder. It is
                                                              dðvy =rÞ       2mr 2 o
                                            t1 ¼ 2 mr                       ¼ 2 2 12                     ð7:63Þ
                                                                dr     r¼r1  r2 2 r1
CHAP. 7]                                       INTERNAL FLOWS                                              121



The torque T needed to rotate the inner cylinder is
                                                   2mr22 o1                  4pmr12 r22 Lo1
                                   T ¼ t1 Ar1 ¼              2pr 1 L · r 1 ¼                            ð7:64Þ
                                                   r22 2 r12                   r22 2 r12
          _ required to rotate the inner cylinder with rotational speed o1 is then
The power W
                                                                     2 2     2
                                                _ ¼ To1 ¼ 4pmr1 r2 Lo1
                                                W                                                       ð7:65Þ
                                                            r22 2 r12
This power, required because of the viscous effects in between the two cylinders, heats up the ﬂuid in
bearings and often demands cooling to control the temperature.
    For a small gap d between the cylinders, as occurs in lubrication problems, it is acceptable to
approximate the velocity distribution as a linear proﬁle, a Couette ﬂow. Using the variable y of Fig. 7.6
the velocity distribution is
                                                         r o
                                                 vy ðrÞ ¼ 1 1 y                                    ð7:66Þ
                                                           d
where y is measured from the outer cylinder in towards the center.


 EXAMPLE 7.3 The viscosity is to be determined by rotating a long 6-cm-diameter, 30-cm-long cylinder inside
 a 6.2-cm-diameter cylinder. The torque is measured to be 0.22 N·m and the rotational speed is measured to be
 3000 rpm. Use Eqs. (7.62) and (7.66) to estimate the viscosity. Assume that S ¼ 0.86.
      Solution: The torque is found from Eq. (7.64) based on the velocity distribution of Eq. (7.62):
                           4pmr12 r22 Lo1 4pm · 0:032 · 0:0312 · 0:3 · ð3000 · 2p=60Þ
                      T¼                 ¼                                            ¼ 0:22
                             r22 2 r12                  0:0312 2 0:032

                                               \ m ¼ 0:0131 ðN·s=m2 Þ
 Using Eq. (7.66), the torque is found to be
                      T ¼ t1 Ar1 ¼ m r1do1 2pr1 L · r1
                                 0:03ð3000 · 2p=60Þ
                      0:22 ¼ m                      2p · 0:032 · 0:3 \ m ¼ 0:0138 ðN·s=m2 Þ
                                    0:031 2 0:03
 The error assuming the linear proﬁle is 5.3 percent.
 The Reynolds number is, using n ¼ m=r,
                                        o1 r1 d ð3000 · 2p=60Þ · 0:03 · 0:001
                                 Re ¼          ¼                              ¼ 619
                                          n         0:0131=ð1000 · 0:86Þ
 The laminar ﬂow assumption is acceptable since Re , 1700.



7.6   TURBULENT FLOW IN A PIPE
The Reynolds numbers for most ﬂows of interest in conduits exceed those at which laminar ﬂows cease
to exist. If a ﬂow starts from rest, it rather quickly undergoes transition to a turbulent ﬂow. The objective
of this section is to express the velocity distribution in a turbulent ﬂow in a pipe and to determine
quantities associated with such a ﬂow.
    A turbulent ﬂow is a ﬂow in which all three velocity components are nonzero and exhibit random
behavior. In addition, there must be a correlation between the randomness of at least two of the
velocity components; if there is no correlation, it is simply a ﬂuctuating ﬂow. For example, a
turbulent boundary layer usually exists near the surface of an airfoil but the ﬂow outside the
boundary layer is not referred to as ‘‘turbulent’’ even though there are ﬂuctuations in the ﬂow; it is
the free stream.
122                                                INTERNAL FLOWS                                           [CHAP. 7



    Let us present one way of describing a turbulent ﬂow. The three velocity components at some point
are written as
                                          u ¼ u þ u0     v ¼ v þ v0          w ¼ w þ w0                       ð7:67Þ
where u denotes a time-average part of the x-component velocity and u0 denotes the ﬂuctuating random
part. The time average of u is
                                                               T
                                                           1Z
                                                        u¼    uðtÞdt                                          ð7:68Þ
                                                           T
                                                               0

where T is sufﬁciently large when compared with the ﬂuctuation time. For a developed turbulent pipe
ﬂow, the three velocity components would appear as in Fig. 7.7. The only time-average component
would be u in the ﬂow direction. Yet there must exist a correlation between at least two of the random
velocity ﬂuctuations, e.g., u0 v0 6¼ 0; such velocity correlations result in turbulent shear.
    u                  u/

                                              v                                   w
                                                        T

                                      u




                 x-component

                                                        r-component                            -component

Figure 7.7 The three velocity components in a turbulent ﬂow at a point where the ﬂow is in the x-direction so that
           v ¼ w ¼ 0 and u 6¼ 0.

     We can derive an equation that relates u0 v0 and the time-average velocity component u in the ﬂow
direction of a turbulent ﬂow, but we cannot solve the equation even for the simplest case of steady* ﬂow
in a pipe. So, we will present experimental data for the velocity proﬁle and deﬁne some quantities of
interest for a turbulent ﬂow in a pipe.
     First, let us describe what we mean by a ‘‘smooth’’ wall. Sketched in Fig. 7.8 is a ‘‘smooth’’ wall and a
‘‘rough’’ wall. The viscous wall layer is a thin layer near the pipe wall in which the viscous effects are
signiﬁcant. If this viscous layer covers the wall roughness elements, the wall is ‘‘smooth,’’ as in Fig. 7.8(a);
if the roughness elements protrude out from the viscous layer, the wall is ‘‘rough,’’ as in Fig. 7.8(b).
                                      viscous
                                      wall layer                                viscous
                                                                                wall layer
                       n
                                 e                                 n    e




                               (a) a smooth wall                            (b) a rough wall

                                       Figure 7.8 A smooth wall and a rough wall.

    There are two methods commonly used to describe the turbulent velocity proﬁle in a pipe. These are
presented in the following sections.



*
    Steady turbulent ﬂow means the time-average quantities are independent of time.
CHAP. 7]                                       INTERNAL FLOWS                                                     123



7.6.1   The Semi-Log Proﬁle
The time-average velocity proﬁle in a pipe is presented for a smooth pipe as a semi-log plot in Fig. 7.9
with empirical relationships near the wall and centerline that allow puð0Þﬃﬃﬃﬃﬃ¼
                                                                               ﬃ 0 and du=dy ¼ 0 at y ¼ r0 . In
the wall region, the characteristic velocity is the shear velocity* ut ¼ t0 =r and the characteristic length is
the viscous length n=ut ; the proﬁles are
                      u     uy          uy
                         ¼ t        0# t #5           ðthe viscous wall layerÞ                           ð7:69Þ
                     ut      n           n

                      u           uy                   uy y
                         ¼ 2:44 ln t þ 4:9          305 t ; 50:15                ðthe turbulent regionÞ         ð7:70Þ
                      ut           n                    n r0
The interval 5 5 ut y=n 5 30 is a buffer zone in which the experimental data do not ﬁt either of the
curves. The outer edge of the wall region may be as low as ut y=n ¼ 3000 for a low-Reynolds-number
ﬂow.
    The viscous wall layer plays no role for a rough pipe. The characteristic length is the average
roughness height e and the wall region is represented by
                         u           y               y
                            ¼ 2:44 ln þ 8:5             50:15         ðthe wall region; rough pipeÞ             ð7:71Þ
                         ut          e               r0
The outer region is independent of the wall effects and thus is normalized for both smooth and rough
walls using the radius as the characteristic length and is given by
                          umax 2 u           y                     y
                                   ¼ 22:44 ln þ 0:8                   # 0:15      ðthe outer regionÞ            ð7:72Þ
                             ut              r0                    r0
An additional empirical relationship hðy=r0 Þ is needed to complete the proﬁle for y . 0.15r0. Most
relationships that satisfy du=dy ¼ 0 at y ¼ r0 will do.
     The wall region of Fig. 7.9(a) and the outer region of Fig. 7.9(b) overlap as displayed in Fig. 7.9(a).
For smooth and rough pipes respectively
                                      umax          ur
                                           ¼ 2:44 ln t 0 þ 5:7             ðsmooth pipesÞ                       ð7:73Þ
                                       ut             n
                                      umax          r0
                                           ¼ 2:44 ln þ 9:3            ðrough pipesÞ                             ð7:74Þ
                                       ut            e
   We do not often desire the velocity at a particular location, but if we do, before umax can be found ut
must be known. To ﬁnd ut we must know t0 . To ﬁnd t0 we can use (see Eq. (7.6))
                                                  r Dp                  1
                                              t0 ¼ 0          or    t0 ¼ rV 2 f                                 ð7:75Þ
                                                   2L                   8
The friction factor f can be estimated using the power-law proﬁle that follows if the pressure drop is not
known.


7.6.2   The Power-Law Proﬁle
Another approach, although not quite as accurate, involves using the power-law proﬁle given by
                                                         u         y 1=n
                                                              ¼                                                 ð7:76Þ
                                                       umax        r0



*
 The shear velocity is a ﬁctitious velocity that allows experimental data to be presented in dimensionless form that is
valid for all turbulent pipe ﬂows. The viscous length is also a ﬁctitious length.
124                                                      INTERNAL FLOWS                                                          [CHAP. 7




                                                                                        Outer region

                                                                     Wall region
                      u                                                                                          Increasing Re
                      u
                                Viscous            Buffer
                          25
                                layer              zone

                          20
                                                                                       u = 2.44 ln u y + 4.9
                          15                                                           u            v


                          10

                           5                       u u y
                                                   u = v

                                           5        10      30           100                 1000             10 000
                                                                               u y/v

                                                                 (a) The wall region


                                                                        umax– u           r
                                                                                = 2.44 ln 0 + 0.8
                                                                          u               y
                           8
                umax– u    6
                  u
                           4                                                                                  h(y/r0)
                           2

                                0.01                                    0.1                            0.15             1.0
                                                                           y/r0
                                                                  (b) The outer region
                   Figure 7.9     Experimental data for a smooth wall in a developed pipe ﬂow.


where n is between 5 and 10, usually an integer. This can be integrated to yield the average velocity
                                      1 Zr0                    2n2
                                V¼ 2        uðrÞ2pr dr ¼                u                        ð7:77Þ
                                     pr0 0               ðn þ 1Þð2n þ 1Þ max
The value of n in Eq. (7.76) is related empirically to f by
                                                                       n ¼ f 21 2
                                                                                   =
                                                                                                                                   ð7:78Þ
For smooth pipes, n is related to the Reynolds number as shown in Table 7.1.

                                          Table 7.1         Exponent n for Smooth Pipes

                                       Re ¼ VD=v            4 · 103        105         106    .2 · 106
                                               n                 6            7        9         10


    The power-law proﬁle cannot be used to estimate the wall shear since it has an inﬁnite slope at the
wall for all values of n. It also does not have a zero slope at the pipe centerline, so it is not valid near the
centerline. It is used to estimate the energy ﬂux and momentum ﬂux of pipe ﬂows.
    Finally, it should be noted that the kinetic-energy correction factor is 1.03 for n ¼ 7; hence, it is
often taken as unity for turbulent ﬂows.
CHAP. 7]                                         INTERNAL FLOWS                                                   125



 EXAMPLE 7.4 Water at 20– C ﬂows in a 4-cm-diameter pipe with a ﬂow rate of 0.002 m3=s. Estimate (a) the
 wall shear stress, (b) the maximum velocity, (c) the pressure drop over 20 m, (d) the viscous layer thickness, and
 (e) determine if the wall is smooth or rough assuming the roughness elements to have a height of 0.0015 mm. Use
 the power-law proﬁle.
      Solution: First, the average velocity and Reynolds number are
                         Q   0:002                                  VD 1:464 · 0:04
                   V¼      ¼       ¼ 1:464 m=s;              Re ¼      ¼            ¼ 5:85 · 104
                         A p0:022                                    n    10 26
 (a) To ﬁnd the wall shear stress, ﬁrst let us ﬁnd the friction factor. From Table 7.1, the value n ¼ 6.8 is selected
 and from Eq. (7.78)
                                                    1      1
                                                f¼ 2¼          ¼ 0:0216
                                                    n     6:82
 The wall shear stress is, see Eq. (7.75),
                                     1        1
                                 t0 ¼ rV 2 f ¼ · 1000 · 1:4642 · 0:0216 ¼ 23:2 Pa
                                     2        2
 (b) The maximum velocity is found using Eq. (7.77):
                                         ðn þ 1Þð2n þ 1Þ    7:8 · 14:6
                                umax ¼                   V¼            1:464 ¼ 1:80 m=s
                                               2n2           2 · 6:82
 (c) The pressure drop is
                                       2Lt0 2 · 20 · 23:2
                                Dp ¼       ¼              ¼ 46 400 Pa or      46:4 kPa
                                        r0       0:02
 (d) The friction velocity is
                                                 rﬃﬃﬃ sﬃﬃﬃﬃﬃﬃ
                                                  t    23:2
                                             ut ¼ 0 ¼         ¼ 0:152 m=s
                                                  r    1000
 and the viscous layer thickness is
                                       5n 5 · 10 26
                                dn ¼      ¼         ¼ 3:29 · 10 25 m or 0:0329 mm
                                       ut   0:152
 (e) The height of the roughness elements is given as 0.0015 mm (drawn tubing), which is less than the viscous
 layer thickness. Hence, the wall is smooth. Note: If the height of the wall elements was 0.046 mm (wrought iron),
 the wall would be rough.


7.6.3   Losses in Pipe Flow
The head loss is of considerable interest in pipe ﬂows. It was presented in Eqs. (7.24) and (4.23) and is
                                                    L V2                Dp
                                           hL ¼ f          or    hL ¼      þ z2 2 z1                            ð7:79Þ
                                                    D 2g                 g
So, once the friction factor is known, the head loss and pressure drop can be determined. The friction
factor depends on a number of properties of the ﬂuid and the pipe:
                                                     f ¼ fðr; m; V; D; eÞ                                       ð7:80Þ
where the roughness height e accounts for the turbulence generated by the roughness elements. A
dimensional analysis allows Eq. (7.80) to be written as
                                                                e VDr
                                                       f¼f        ;                                             ð7:81Þ
                                                                D   m
where e=D is termed the relative roughness.
    Experimental data has been collected and presented in the form of the Moody diagram, displayed in
Fig. 7.10 for developed ﬂow in a conventional pipe. The roughness heights are also included in the
diagram. There are several features of this diagram that should be emphasized. They follow:
126                                                      INTERNAL FLOWS                                                     [CHAP. 7



    .       A laminar ﬂow exists up to Re > 2000 after which there is a critical zone in which the ﬂow is
            undergoing transition to a turbulent ﬂow. This may involve transitory ﬂow that alternates between
            laminar and turbulent ﬂows.
    .       The friction factor in the transition zone, which begins at about Re ¼ 4000 and decreases with
            increasing Reynolds numbers, becomes constant at the end of the zone as signiﬁed by the dashed
            line in Fig. 7.10.
    .       The friction factor in the completely turbulent zone is constant and depends on the relative
            roughness e=D. Viscous effects, and thus the Reynolds number, do not affect the friction factor.
    .       The height e of the roughness elements in the Moody diagram is for new pipes. Pipes become
            fouled with age changing both e and the diameter D resulting in an increased friction factor.
            Designs of piping systems should include such aging effects.
    An alternate to using the Moody diagram is to use formulas developed by Swamee and Jain for pipe
ﬂow; the particular formula selected depends on the information given. The formulas to determine
quantities in long reaches of developed pipe ﬂow (these formulas are not used in short lengths or in pipes
with numerous ﬁttings and geometry changes) are as follows:
                                                 ( "                    #) 22                        e
                                            Q2 L       e         nD 0:9                        10 26 5 510 22
                                  hL ¼ 1:07       ln      þ 4:62                                    D                                   ð7:82Þ
                                            gD5      3:7D         Q                            30005Re53 · 108
                                              sﬃﬃﬃﬃﬃﬃﬃﬃ "                !0:5 #
                                               gD5 hL       e    3:17n2 L
                                   Q ¼ 20:965          ln      þ                                20005Re                                 ð7:83Þ
                                                  L       3:7D    gD3 hL


              0.1
             0.09           Critical
                     Laminar zone Transition
             0.08     flow           zone                        Completely trubulent regime
             0.07                                                                                                      0.05
                              f = 64                                                                                   0.04
                                  Re
             0.06                                                                                                      0.03
             0.05                                                                                                      0.02
                                                                                                                       0.015
             0.04

                                                                                                                                 Relative roughness
                                                                                                                       0.01
                     Recrit                                                                                            0.008
                                                                                                                       0.006
             0.03
        f                                                                                                              0.004
            0.025
                                                                                                                       0.002
                                                                                                                               D
                                                                                                                               e




             0.02                                                                                                      0.001
                                                                                                                       0.0008
                                                                                                                       0.0006
                                       e (ft)       e (mm)
                                                                                                                       0.0004
            0.015       Riveted steel ~ 0.01        3
                        Concrete       ~ 0.001-0.01 0.3-3                                                              0.0002
                        Wood           ~ 0.001      0.3
                        Cast iron       0.00085     0.26                                                               0.0001
                        Galvanized iron 0.0005      0.15        Smooth pipes                                           0.000,05
             0.01       Wrought iron    0.00015     0.046                                            0.000,001
                        Drawn tubing    0.000005 0.0015                                                 0.000,005
            0.009
            0.008                                                                                                      0.000,01
                    7 9         2 3 4 5 67 9     2 3 4 56 7 9    2 3 4 5 67 9          2 3 4 5 67 9      2     4 5 67 9
                      103                  104              105              106                  107                 108
                                                           Reynolds number Re

                                                  Figure 7.10 The Moody diagram.*

*
 Note: If e=D ¼ 0.01 and Re ¼ 104, the dot locates f ¼ 0.043.
Source: From L.F. Moody, Trans. ASME, v. 66, 1944.
CHAP. 7]                                           INTERNAL FLOWS                                               127


                                 "                 !4:75                        #0:04         e
                                     1:25    LQ2                 9:4    L 5:2           10 26 5 510 22
                       D ¼ 0:66 e                          þnQ                                D               ð7:84Þ
                                             ghL                       ghL              50005Re53 · 108
Either SI or English units can be used in the above equations. Note also that the Moody diagram and the
above equations are accurate to within about 5 percent, sufﬁciently accurate for most engineering
applications.

 EXAMPLE 7.5 A pressure drop of 500 kPa is measured over 200 m of a horizontal length of 8-cm-diameter cast
 iron pipe transporting water at 20– C. Estimate the ﬂow rate using (a) the Moody diagram and (b) an alternate
 equation.
      Solution: (a) The relative roughness (ﬁnd e in Fig. 7.10) is
                                                    e   0:26
                                                      ¼      ¼ 0:00325
                                                    D    80
 Assuming a completely turbulent ﬂow, the friction factor from Fig. 7.10 is f ¼ 0.026. The head loss is
                                                       Dp 500 000
                                               hL ¼       ¼       ¼ 51 m
                                                        g   9800
 The average velocity, from Eq. (7.79), is
                                     sﬃﬃﬃﬃﬃﬃﬃﬃﬃ sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                       2gDhL     2 · 9:8 · 0:08 · 51
                                V¼             ¼                         ¼ 3:92 m=s
                                           fL        0:026 · 200
 We must check the Reynolds number to make sure the ﬂow is completely turbulent, and it is
                                                   VD 3:92 · 0:08
                                            Re ¼      ¼           ¼ 3:14 · 105
                                                    n    10 26
 This is just acceptable and requires no iteration to improve the friction factor. So, the ﬂow rate is

                                      Q ¼ AV ¼ p · 0:042 · 3:92 ¼ 0:0197 m3 =s
 (b) Use the alternate equation that relates Q to the other quantities, i.e., Eq. (7.83). We use the head loss from
 part (a):
                            sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ "                               !0:5 #
                              9:8 · 0:085 · 51        0:26     3:17 · 10 212 · 200
                Q ¼ 20:965                       ln          þ                           ¼ 0:0193 m3 =s
                                    200             3:7 · 80    9:8 · 0:083 · 51
 This equation was easier to use and gave an acceptable result.


7.6.4   Losses in Noncircular Conduits
To determine the head loss in a relatively ‘‘open’’ noncircular conduit, we use the hydraulic radius R,
deﬁned as
                                                         A
                                                     R¼                                            ð7:85Þ
                                                         P
where A is the cross-sectional area and P is the wetted perimeter, the perimeter of the conduit that is in
contact with the ﬂuid. The Reynolds number, relative roughness, and head loss are respectively
                                   4VR                      relative    e                          L V2
                            Re ¼                                     ¼                   hL ¼ f               ð7:86Þ
                                    n                      roughness   4R                         4R 2g
A rectangular area should have an aspect ratio , 4. This method should not be used with shapes like an
annulus.

7.6.5   Minor Losses
The preceding losses were for the developed ﬂow in long conduits. Most piping systems, however,
include sudden changes such as elbows, valves, inlets, etc., that add additional losses to the system.
128                                                    INTERNAL FLOWS                                            [CHAP. 7



                                 Table 7.2    Minor Loss Coefﬁcients K for Selected Devices*

    Type of ﬁtting                                        Screwed                              Flanged
    Diameter                                   2.5 cm       5 cm       10 cm        5 cm       10 cm     20 cm
    Globe value (fully open)                     8.2           6.9      5.7          8.5        6.0       5.8
                   (half open)                  20         17          14           21         15        14
                   (one-quarter open)           57         48          40           60         42        41
    Angle valve (fully open)                     4.7           2.0      1.0          2.4        2.0       2.0
    Swing check valve (fully open)               2.9           2.1      2.0          2.0        2.0       2.0
    Gate valve (fully open)                      0.24          0.16     0.11         0.35       0.16      0.07
    Return bend                                  1.5           0.95     0.64         0.35       0.30      0.25
    Tee (branch)                                 1.8           1.4      1.1          0.80       0.64      0.58
    Tee (line)                                   0.9           0.9      0.9          0.19       0.14      0.10
    Standard elbow                               1.5           0.95     0.64         0.39       0.30      0.26
    Long sweep elbow                             0.72          0.41     0.23         0.30       0.19      0.15
    45– elbow                                    0.32          0.30     0.29

    Square-edged entrance                                               0.5

    Reentrant entrance                                                  0.8

    Well-rounded entrance                                              0.03

    Pipe exit                                                           1.0
                                             Area ratio
                         †
    Sudden contraction                        2:1                      0.25
                                              5:1                      0.41
                                             10:1                      0.46
                                             Area ratio A=A0
    Oriﬁce plate                             1.5:1                     0.85
                                              2:1                       3.4
                                              4:1                       29
                                                                                       2
                                                                              A
                                             $6:1                     2.78       2 0:6
                                                                              A0
                                                                            A1 2
    Sudden enlargement{                                               12
                                                                            A2
    90– miter bend (without vanes)                                      1.1

                     (with vanes)                                       0.2

    General contraction                      (30– included anlge)       0.02
                                             (70– included angle)       0.07

*
  Values for other geometries can be found in Technical Paper 410. The Crane Company, 1957.
†
  Based on exit velocity V2.
{
  Based on entrance velocity V1.
CHAP. 7]                                       INTERNAL FLOWS                                                   129



These losses are called minor losses that may, in fact, add up to exceed the head loss found in the
preceding sections. These minor losses are expressed in terms of a loss coefﬁcient K, deﬁned for most
devices by
                                                                 V2
                                                        hL ¼ K                                               ð7:87Þ
                                                                 2g
A number of loss coefﬁcients are included in Table 7.2. Note that relatively low loss coefﬁcients are
associated with gradual contractions, whereas relatively large coefﬁcients with enlargements. This is due
to the separated ﬂows in enlargements. Separated and secondary ﬂows also occur in elbows resulting in
relatively large loss coefﬁcients. Vanes that eliminate such separated or secondary ﬂows can substantially
reduce the losses, as noted in the table.
     We often equate the losses in a device to an equivalent length of pipe, i.e.,
                                                           V2   L V2
                                                  hL ¼ K      ¼f e                                           ð7:88Þ
                                                           2g   D 2g
This provides the relationship
                                                                 D
                                                        Le ¼ K                                               ð7:89Þ
                                                                 f
    A last comment relating to minor losses is in order: if the pipe is quite long, .1000 diameters, the
minor losses are usually neglected. For lengths as short as 100 diameters, the minor losses usually exceed
the frictional losses. For intermediate lengths, the minor losses should be included.


 EXAMPLE 7.6 A 1.5-cm-diameter, 20-m-long plastic pipe transports water from a pressurized 400-kPa tank
 out a free open end located 3 m above the water surface in the tank. There are three elbows in the water line and
 a square-edged inlet from the tank. Estimate the ﬂow rate.
      Solution: The energy equation is applied between the tank and the faucet exit:
                                           V22 2 V12 p2 2 p1
                                      0¼            þ        þ z2 2 z1 þ hL
                                               2g       g
 where
                                                 L                       V2
                                        hL ¼ f     þ 3Kelbow þ Kentrance
                                                 D                       2g
 Assume that the pipe has e=D ¼ 0 and that Re > 2 · 105 so that the Moody diagram yields f ¼ 0.016. The
 energy equation yields
                    V22     400 000                 20                    V2
             0¼           2         þ 3 þ 0:016 ·       þ 3 · 1:6 þ 0:5               \ V ¼ 5:18 m=s
                  2 · 9:8    9800                 0:015                 2 · 9:8
 The Reynolds number is then Re ¼ 5:18 · 0:15=10 26 ¼ 7:8 · 104 . Try f ¼ 0.018. Then

                    V22     400 000                 20                    V2
             0¼           2         þ 3 þ 0:018 ·       þ 3 · 1:6 þ 0:5               \ V ¼ 4:95 m=s
                  2 · 9:8    9800                 0:015                 2 · 9:8
 Thus Re ¼ 4:95 · 0:15=10 26 ¼ 7:4 · 104 . This is close enough so use V ¼ 5.0 m=s. The ﬂow rate is
                                   Q ¼ AV ¼ p · 0:00752 · 5 ¼ 8:8 · 10 24 m3 =s


7.6.6    Hydraulic and Energy Grade Lines
The energy equation is most often written so that each term has dimensions of length, i.e.,
                                  W_     V 2 2 V12 p2 2 p1
                                2 S¼ 2             þ         þ z 2 2 z 1 þ hL                                ð7:90Þ
                                  m_ g       2g          g
In piping systems, it is often conventional to refer to the hydraulic grade line (HGL) and the energy grade
line (EGL). The HGL, the dashed line in Fig. 7.11, is the locus of points located a distance p=g above the
130                                              INTERNAL FLOWS                                          [CHAP. 7



centerline of a pipe. The EGL, the solid line in Fig. 7.11, is the locus of points located a distance V2=2
above the HGL. The following observations relate to the HGL and the EGL.
  .   The EGL approaches the HGL as the velocity goes to zero. They are identical on the surface of a
      reservoir.
  .   Both the EGL and the HGL slope downward in the direction of the ﬂow due to the losses in the
      pipe. The greater the losses, the greater the slope.
  .   A sudden drop occurs in the EGL and the HGL equal to the loss due to a sudden geometry
      change, such as an entrance, an enlargement, or a valve.
  .   A jump occurs in the EGL and the HGL due to a pump and a drop due to a turbine.
  .   If the HGL is below the pipe, there is a vacuum in the pipe, a condition that is most often avoided
      in the design of piping systems because of possible contamination.

                    (hL)entrance
                                   V2/2g    (hL)expansion

                 Reservoir
                                                                 . .
                                                            HT = WT/mg
                                     p/                                  (hL)valve
                                                                                     EGL
                                                                                             (hL)exit
                                                                             HGL
                                                                                                  V
                                     z                 Turbine
                                                                                             Reservoir
                                            Datum

      Figure 7.11 The hydraulic grade line (HGL) and the energy grade line (EGL) for a piping system.



7.7   OPEN CHANNEL FLOW
Consider the developed turbulent ﬂow in an open channel, sketched in Fig. 7.12. The water ﬂows at a
depth of y and the channel is on a slope S, which is assumed to be small so that sin y ¼ S. The cross
section could be trapezoidal, as shown, or it could be circular, rectangular, or triangular. Let us apply
the energy equation between the two sections:

                                        V22 2 V12 p2 2 p1
                                           0¼    þ        þ z 2 2 z 1 þ hL                                 ð7:91Þ
                                             2g      g
The head loss is the elevation change, i.e.,

                                                        hL ¼ z 1 2 z 2
                                                                                                           ð7:92Þ
                                                            ¼ L sin y ¼ LS
where L is the distance between the two selected sections. Using the head loss expressed by Eq. (7.86),
we have
                                                     L V2                            8g
                                           hL ¼ f         ¼ LS      or V 2 ¼            RS                 ð7:93Þ
                                                    4R 2g                             f
CHAP. 7]                                           INTERNAL FLOWS                                             131



                                                                         m
                     1                     L                                 1    y


                 Slope S                                       2                      b
                                               y




                                     Figure 7.12 Flow in an open channel.

The Reynolds number of the ﬂow in an open channel is invariably large and the channel is rough so that
the friction factor is a constant independent of the velocity (see the Moody diagram of Fig. 7.10) for a
particular channel. Consequently, the velocity is related to the slope and hydraulic radius by
                                                         pﬃﬃﬃﬃ
                                                   V ¼ C RS                                       ð7:94Þ
where C is a dimensional constant called the Chezy coefﬁcient; it has been related experimentally to the
channel roughness and the hydraulic radius by
                                                      1 =
                                                 C ¼ R1 6                                         ð7:95Þ
                                                      n
The dimensionless constant n is a measure of the wall roughness and is called the Manning n. Values for a
variety of wall materials are listed in Table 7.3.
    The ﬂow rate in an open channel follows from Q ¼ AV and is
                                                         1
                                                      Q ¼ AR2 3 S1 2
                                                             =    =
                                                                                                           ð7:96Þ
                                                         n
This is referred to as the Chezy –Manning equation. It can be applied using English units by replacing the
‘‘1’’ in the numerator with ‘‘1.49.’’
                                      Table 7.3      Values* of the Manning n

                                   Wall material                      Manning n
                                   Brick                                0.016
                                   Cast or wrought iron                 0.015
                                   Concrete pipe                        0.015
                                   Corrugated metal                     0.025
                                   Earth                                0.022
                                   Earth with stones and weeds          2.035
                                   Finished concrete                    0.012
                                   Mountain streams                     0.05
                                   Planed wood                          0.012
                                   Sewer pipe                           0.013
                                   Riveted steel                        0.017
                                   Rubble                               0.03
                                   Unﬁnished concrete                   0.014
                                   Rough wood                           0.013


*
 The values in this table result in ﬂow rates too large for R . 3 m. The Manning n should be increased by 10 to 15
percent for the larger channels.
132                                            INTERNAL FLOWS                                                [CHAP. 7


    If the channel surface is smooth, e.g., glass or plastic, Eq. (7.96) should not be used since it assumes a
rough surface. For channels with smooth surfaces, the Darcy – Weisbach equation, Eq. (7.86), along with
the Moody diagram should be used.

 EXAMPLE 7.7 Water at 20– C is ﬂowing in a 2-m-wide rectangular, brick channel at a depth of 120 cm. The
 slope is 0.0012. Estimate the ﬂow rate using (a) the Chezy – Manning equation and (b) the Darcy – Weisbach
 equation.
      Solution: First, calculate the hydraulic radius
                                         A      by      2 · 1:2
                                     R¼ ¼             ¼         ¼ 0:545 m
                                         P b þ 2y 2 þ 2 · 1:2
 (a) The Chezy – Manning equation provides
                                   1
                               Q ¼ AR2 3 S1 2
                                         =   =

                                   n
                                     1
                                         · ð2 · 1:2Þ · 0:5452 3 · 0:00121 2 ¼ 3:47 m3 =s
                                                             =           =
                                 ¼
                                   0:016
 (b) To use the Darcy – Weisbach equation, we must ﬁnd the friction factor f. The Moody diagram requires a
 value for e. Use a relatively large value such as that for rougher concrete, i.e., e ¼ 1 mm. Since the hydraulic
 radius R ¼ D/4 for a circle, we use
                                           e   e   0:001
                                             ¼   ¼        ¼ 0:00046
                                           D 4R 4 · 0:545
 The Moody diagram yields f > 0:0165: The Darcy – Weisbach equation takes the form of Eq. (7.93):
                                 sﬃﬃﬃﬃﬃﬃﬃﬃ sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                  8g        8 · 9:8
                            V¼       RS ¼            · 0:545 · 0:0012 ¼ 1:76 m=s
                                   f        0:0165
 The ﬂow rate is then
                                        Q ¼ AV ¼ 2 · 1:2 · 1:76 ¼ 4:23 m3 =s
 Check the Reynolds number
                                             4VR 4 · 1:76 · 0:545
                                      Re ¼      ¼                 ¼ 3:8 · 106
                                              n        10 26
 This is sufﬁciently large so that f is acceptable. Note that the Q of part (a) is about 18 percent lower than that of
 part (b), and that of part (b) is considered more accurate.




                                              Solved Problems

7.1    A 4-mm-diameter horizontal, 40-m-long pipe is attached to a reservoir containing 20– C water.
       The surface of the water in the reservoir is 4 m above the pipe outlet. Assume a laminar ﬂow and
       estimate the average velocity in the pipe. Also, calculate the length of the entrance region.
            Using Eq. (7.21), the average velocity in the pipe is
                                          r 2 Dp 0:0022 · ð9800 · 4Þ
                                        V¼ 0    ¼                    ¼ 0:49 m=s
                                           8mL      8 · 10 23 · 40
            where the pressure at the pipe inlet is p ¼ gh ¼ 9800 · 4 N=m2 , neglecting the velocity head V 2 =2g at the
            entrance. Check the Reynolds number; it is
                                                      Vd 0:49 · 0:004
                                               Re ¼      ¼            ¼ 1960
                                                       n    10 26
            This is acceptable for a laminar ﬂow to exist. We have assumed the velocity head at the entrance to be
            small; it is
CHAP. 7]                                      INTERNAL FLOWS                                                    133


                                                 V2   0:492
                                                    ¼        ¼ 0:102 m
                                                 2g 2 · 9:81
           This is quite small compared with the pressure head of 4 m. So, the calculations are acceptable
           provided the entrance region is not very long.
           We have neglected the effects of the entrance region’s non-parabolic velocity proﬁle (see Fig. 7.1). The
           entrance region’s length is
                                  LE ¼ 0:065 · Re · D ¼ 0:065 · 1960 · 0:004 ¼ 0:51 m
           so the effect of the entrance region is negligible.


7.2   A developed, steady laminar ﬂow exists between horizontal concentric pipes. The ﬂow is in the
      direction of the axis of the pipes. Derive the differential equations and solve for the velocity
      proﬁle.
           The element selected, upon which the forces would be placed, would be a hollow cylindrical shell (a
           sketch may be helpful for visualization purposes), that would appear as a ring from an end view, with
           length dx. The ring would have an inner radius r and an outer radius r þ dr. The net pressure force
           acting on the two ends would be
                                            dr                     dr
                                  p2p r þ      dr 2 ðp þ dpÞ2p r þ    dr ¼ 22pr dr dp
                                            2                      2
           The shear stress forces on the inner and the outer cylinder sum as follows (the shear stress is assumed to
           oppose the ﬂow):
                                2t2pr dx þ ðt þ dtÞ2pðr þ drÞdx ¼ 2pt dr dx þ 2pr dt dx
           For a steady ﬂow, the pressure and shear stress forces must balance. This provides
                                                                               dp   t dt
                                22pr dr dp ¼ 2pt dr dx þ 2pr dt dx        \       ¼2 2
                                                                               dx   r dr
           Substitute the constitutive equation t ¼ 2m du=dr (see footnote associated with Eq. (7.7) assuming the
           element is near the outer pipe) and obtain
                                                             !
                                            dp      1 du d2 u     m d du
                                               ¼m       þ      ¼        r
                                           dx       r dr dr2       r dr dr

           This can now be integrated to yield
                                         r2 dp   du                  r dp du A
                                               ¼r þA           or        ¼  þ
                                         2m dx   dr                 2m dx dr r
           Integrate once more to ﬁnd the velocity proﬁle to be
                                                          r2 dp
                                                 uðrÞ ¼         2 A ln r þ B
                                                          4m dx
           The constants A and B can be evaluated by using uðr1 Þ ¼ 0 and uðr2 Þ ¼ 0.


7.3   What pressure gradient would provide a zero shear stress on the stationary lower plate in Fig. 7.5
      assuming horizontal plates with the top plate moving to the right with velocity U.
           The shear stress is t ¼ 2m du=dy so that the boundary conditions are du=dy (0) ¼ 0, u(0) ¼ 0, and
           u(b) ¼ U. These are applied to Eq. (7.29) to provide the following:
                                          du       1 dp
                                             ð0Þ ¼      0þA¼0            \A¼0
                                          dy       m dx
                                        1 dp                                          1 dp 2
                              uð0Þ ¼         0þB¼0           \B¼0       and uðyÞ ¼         y
                                       2m dx                                         2m dx
134                                           INTERNAL FLOWS                                                  [CHAP. 7



          Now, u(b) ¼ U, resulting in
                                                     1 dp 2         dp 2mu
                                               u¼         b   or       ¼ 2
                                                    2m dx           dx   b
          This is a positive pressure gradient, so the pressure increases in the direction of U.


7.4   Show that the velocity distribution given by Eq. (7.62) approximates a straight line when the gap
      between the two cylinders is small relative to the radii of the cylinders.
          Since the gap is small relative to the two radii, we can let R > r1 > r2 . Also, let d ¼ r2 2 r1 and y ¼ r2 2 r
          (refer to Fig. 7.6) in the velocity distribution of Eq. (7.62). The velocity distribution takes the form
                                                         !
                                         o r2 r2                    o1 r12         ðr2 2 rÞðr2 þ rÞ
                               vy ðrÞ ¼ 2 1 1 2 2 2 r ¼
                                       r2 2 r1 r              ðr2 2 r1 Þðr2 þ r1 Þ        r
                                          o1 R2 yð2R 2 yÞ o1 R
                                      >        ·         >     y
                                          2Rd     R2y      d
          where we have used the approximation
                                                        2R 2 y
                                                               >2
                                                         R2y
          since y is small compared with R and 2R. The above velocity distribution is a straight-line distribution
          with slope o1 R=d.


7.5   Water at 15– C is transported in a 6-cm-diameter wrought iron pipe at a ﬂow rate of 0.004 m3=s.
      Estimate the pressure drop over 300 m of horizontal pipe using (a) the Moody diagram and (b) an
      alternate equation.
          The average velocity and Reynolds number are
                         Q   0:004                                     VD 1:415 · 0:06
                    V¼     ¼         ¼ 1:415 m=s                Re ¼      ¼              ¼ 7:44 · 104
                         A p · 0:032                                    n   1:14 · 10 26
          (a) The value of e is found on the Moody diagram so that
                                               e   0:046
                                                 ¼       ¼ 0:00077
                                              D      60
          The friction factor is found from the Moody diagram to be
                                                         f ¼ 0:0225
          The pressure drop is then
                                       L V2                 300 1:4152
                       Dp ¼ ghL ¼ rf        ¼ 1000 · 0:0225            ¼ 113 000 Pa or 113 kPa
                                       D 2                  0:06 2
          (b) Using Eq. (7.82), the pressure drop is
                                                    ( "                                   !0:9 #) 22
                                       0:0042 · 300     0:00077        1:14 · 10 26 · 0:06
                Dp ¼ ghL ¼ 1:07 · 1000               ln         þ 4:62
                                          0:065           3:7                 0:004
                    ¼ 111 000 Pa or 111 kPa
          These two results are within 2 percent and are essentially the same.

7.6   A pressure drop of 200 kPa is measured over a 400-m length of 8-cm-diameter horizontal cast
      iron pipe that transports 20– C water. Determine the ﬂow rate using (a) the Moody diagram and
      (b) an alternate equation.
          The relative roughness is
                                                    e   0:26
                                                      ¼      ¼ 0:00325
                                                    D    80
CHAP. 7]                                        INTERNAL FLOWS                                                   135


           and the head loss is
                                                       Dp 200 000
                                                hL ¼      ¼       ¼ 20:41 m
                                                        g   9800
           (a) Assuming a completely turbulent ﬂow, Moody’s diagram yields
                                                           f ¼ 0:026
           The average velocity in the pipe is found, using Eq. (7.79), to be
                                       sﬃﬃﬃﬃﬃﬃﬃﬃﬃ sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                        2hL Dg      2 · 20:41 · 0:08 · 9:81
                                  V¼             ¼                              ¼ 1:76 m=s
                                           fL             0:026 · 400
           resulting in a Reynolds number of
                                                     VD 1:76 · 0:08
                                              Re ¼      ¼           ¼ 1:4 · 105
                                                      n    10 26
           At this Reynolds number and e=D ¼ 0.0325, Moody’s diagram provides f > 0.026, so the friction
           factor does not have to be adjusted. The ﬂow rate is then expected to be
                                           Q ¼ AV ¼ p · 0:042 · 1:76 ¼ 0:0088 m3 =s
           (b) Since the head loss was calculated using the pressure drop, Eq. (7.83) can be used to ﬁnd the ﬂow rate:
                            sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ "                               !0:5 #
                               9:81 · 0:085 · 20:41 0:00325        3:17 · 10 212 · 400
                Q ¼ 20:965                            ln       þ                              ¼ 0:00855 m3 =s
                                       400               3:7      9:81 · 0:083 · 20:41
           These two results are within 3 percent and either is acceptable.

7.7   A farmer needs to provide a volume of 500 L every minute of 20– C water from a lake through a
      wrought iron pipe a distance of 800 m to a ﬁeld 4 m below the surface of the lake. Determine the
      diameter of pipe that should be selected. Use (a) the Moody diagram and (b) an alternate equation.
           (a) The average velocity is related to the unknown diameter D by
                                                        Q 0:5=60 0:0106
                                                  V¼     ¼       ¼
                                                        A pD2 =4   D2
           The head loss is 4 m (the energy equation from the lake surface to the pipe exit provides this. We
           assume that V 2 =2g is negligible at the pipe exit), so
                                    L V2               800 0:01062 =D4
                           hL ¼ f                4¼f      ·                     \ D5 ¼ 0:00114f
                                    D 2g                D      2g

           The Reynolds number and relative roughness are
                                            VD   0:0106D    10 600             e   0:046
                                     Re ¼      ¼ 2        ¼                      ¼
                                             n  D · 10 26     D                D     D

           This requires a trial-and-error solution. We can select a value for f and check to see if the equations and
           the Moody diagram agree with that selection. Select f ¼ 0.02. Then, the above equations yield
                                                                  10 600             e   0:046
                  D ¼ ð0:00114 · 0:02Þ0:2 ¼ 0:118 m;       Re ¼          ¼ 90 000;     ¼       ¼ 0:00039
                                                                  0:118              D    118

           The above match very well on the Moody diagram. Usually, another selection for f and a recalculation
           of the diameter, Reynolds number, and relative roughness are required.
           (b) Since the diameter is unknown, Eq. (7.84) is used which provides
                            "                          !4:75                        #0:04
                                          800ð0:5=60Þ2              0:5 9:4 800 5:2
                   D ¼ 0:66 0:0000461:25                     þ10 26                       ¼ 0:12 m
                                            9:81 · 4                60     9:81 · 4

           The two results are within 2 percent, so are essentially the same.
136                                            INTERNAL FLOWS                                                [CHAP. 7



7.8    A smooth rectangular duct that measures 10 · 20 cm transports 0.4 m3=s of air at standard
       conditions horizontal distance of 200 m. Estimate the pressure drop in the duct.
           The hydraulic radius is
                                                   A   0:1 · 0:2
                                              R¼     ¼            ¼ 0:0333 m
                                                   P 2ð0:1 þ 0:2Þ

           The average velocity and Reynolds number in the duct are

                          Q    0:4                                     4VR 4 · 20 · 0:0333
                     V¼     ¼         ¼ 20 m=s                  Re ¼      ¼                ¼ 1:8 · 105
                          A 0:1 · 0:2                                   n    1:5 · 10 25

           The Moody diagram provides f ¼ 0.016. The pressure drop is then

                                        L V2                          200       202
                       Dp ¼ ghL ¼ gf         ¼ 1:23 · 9:81 · 0:016           ·         ¼ 5900 Pa
                                       4R 2g                       4 · 0:0333 2 · 9:81


7.9    Sketch the hydraulic grade line for the piping system of Example 7.6 if the three elbows are spaced
       equally between the pressurized tank and the exit of the pipe.
           The hydraulic grade line is a distance p=g above the surface of the water in the tank at the beginning of
           the pipe. The hydraulic grade line is sketched in Fig. 7.13.


                                HGL              (hL)entrance

                                                                2(hL)elbow + (hL)section

                                      p/                                   V2


                                                                                   (hL)elbow + (hL)section



                           Water




                                                      Figure 7.13


7.10   An 80-cm-diameter sewer pipe (ﬁnished concrete) is selected to transport water at a ﬂow rate of
       0.24 m3=s at a slope of 0.0012. Estimate the depth at which the water will ﬂow.
           Assume the water ﬂows with the pipe half full. The ﬂow rate would be

                             1               1 p · 0:42 0:08p 2=3
                          Q ¼ AR2 3 S1 2 ¼                        · 0:00121 2 ¼ 0:229 m3 =s
                                 =    =                                    =

                             n             0:013  2     0:4p

           Consequently, the pipe is over half full. A sketch of the area is shown in Fig. 7.14.
           For this pipe we have
                                                1
                                                    AR2 3 0:00121 2          \ AR2 3 ¼ 0:09
                                                       =         =                    =
                                     0:24 ¼
                                              0:013
CHAP. 7]                                           INTERNAL FLOWS                                               137


            with
                                           180 2 a                                       A
                                A ¼ 0:8p           þ ðy 2 0:4Þ0:4 sin a    R¼
                                             180                                        180 2 a
                                                                                    0:8p
                                                                                          180




                                           0.4 m

                                                                                y




                                                      Figure 7.14

            Trial and error is needed for a solution.
                                                                                       AR2 3 ¼ 0:108
                                                                                           =
                         Try y ¼ 0:46m : Then A ¼ 0:299             R ¼ 0:217
                                                                                       AR2 3 ¼ 0:100
                                                                                           =
                         Try y ¼ 0:44m : Then A ¼ 0:283             R ¼ 0:211
            Hence, y ¼ 0.42 m is an acceptable result.




                                      Supplementary Problems

Laminar or Turbulent Flow
7.11   Calculate the maximum average velocity in a 2-cm-diameter pipe for a laminar ﬂow using a critical Reynolds
       number of 2000 if the ﬂuid is (a) water at 20– C, (b) water at 80– C, (c) SAE-30 oil at 80– C, and (d)
       atmospheric air at 20– C.

7.12   The Red Cedar River ﬂows placidly through MSU’s campus at a depth of 80 cm. A leaf is observed to travel
       about 1 m in 4 s. Decide if the ﬂow is laminar or turbulent. Make any assumptions needed.

7.13   A drinking fountain has an opening of 4 mm in diameter. The water rises a distance of about 20 cm in the
       air. Is the ﬂow laminar or turbulent as it leaves the opening? Make any assumptions needed.

7.14   SAE-30 oil at 80– C occupies the space between two cylinders, 2 and 2.2 cm in diameter. The outer cylinder is
       stationary and the inner cylinder rotates at 100 rpm. Is the oil in a laminar or turbulent state if
       Recrit ¼ 1700? Use Re ¼ or1 d=n, where d ¼ r2 2 r1 .



Entrance Flow

7.15   Water is ﬂowing in a 2-cm-diameter pipe with a ﬂow rate of 0.0002 m3=s. For an entrance that provides a
       uniform velocity proﬁle, estimate inviscid core length and the entrance length if the water temperature is (a)
       20, (b) 40, (c) 60, and (d) 80– C.
138                                            INTERNAL FLOWS                                               [CHAP. 7



7.16   A parabolic velocity proﬁle is desired at the end of a 10-m-long, 8-mm-diameter tube attached to a tank ﬁlled
       with 20– C water. An experiment is run during which 60 L is collected in 90 min. Is the laminar ﬂow
       assumption reasonable? If so, would the tube be sufﬁciently long?
7.17   A parabolic proﬁle is desired in 20– C air as it passes between two parallel plates that are 80 mm apart in a
       university laboratory. If the Reynolds number Vh=n ¼ 1500, how long would the channel need to be to
       observe a fully developed ﬂow, i.e., a parabolic velocity proﬁle? What would be the average velocity?
7.18   The ﬂow of 20– C water in a 2-cm-diameter pipe oscillates between being laminar and turbulent as it ﬂows
       through the pipe from a reservoir. Estimate the inviscid core and the entrance lengths (a) if the ﬂow is laminar
       and the average velocity is 0.15 m=s, and (b) if the ﬂow is turbulent and the average velocity is 0.6 m=s (use
       the results of Eq. (7.4)).
7.19   Argue that the pressure gradient Dp=Dx in the entrance region is greater than the pressure gradient in the
       developed ﬂow region of a pipe. Use a ﬂuid increment of length Dx and cross-sectional area pr02 in the
       entrance region and in the developed-ﬂow region.
7.20   Explain why the pressure distribution in the entrance region of a pipe for the relatively low-Reynolds-number
       turbulent ﬂow (Re < 10 000) is below the extended straight-line distribution of developed ﬂow. Refer to
       Fig. 7.3.




Laminar Flow in a Pipe

7.21   Show that the right-hand side of Eq. (7.19) does indeed follow from the integration.
7.22   Show that f ¼ 64/Re for a laminar ﬂow in a pipe.
7.23   Show that the head loss in a laminar ﬂow in a pipe is directly proportional to the average velocity in the pipe.
7.24   The pressure drop over a 15-m length of 8-mm-diameter horizontal pipe transporting water at 40– C is
       measured to be 1200 Pa. A laminar ﬂow is assumed. Determine (a) the maximum velocity in the pipe, (b) the
       Reynolds number, (c) the wall shear stress, and (d) the friction factor.
7.25   A liquid ﬂows through a 2-cm-diameter pipe at a rate of 20 L every minute. Assume a laminar ﬂow and
       estimate the pressure drop over 20 m of length in the horizontal pipe for (a) water at 40– C, (b) SAE-10 oil at
       20– C, and (c) glycerin at 40– C. Decide if a laminar ﬂow is a reasonable assumption.
7.26   Water at 20– C ﬂows through a 12-mm-diameter pipe on a downward slope so that Re ¼ 2000. What angle
       would result in a zero pressure drop?
7.27   Water at 40– C ﬂows in a vertical 8-mm-diameter pipe at 2 L/min. Assuming a laminar ﬂow, calculate the
       pressure drop over a length of 20 m if the ﬂow is (a) upwards and (b) downwards.
7.28   Atmospheric air at 25– C ﬂows in a 2-cm-diameter horizontal pipe at Re ¼ 1600. Calculate the wall shear
       stress, the friction factor, the head loss, and the pressure drop over 20 m of pipe.
7.29   A liquid ﬂows in a 4-cm-diameter pipe. At what radius does the velocity equal the average velocity assuming
       a laminar ﬂow? At what radius is the shear stress equal to one-half the wall shear stress?
7.30   Find an expression for the angle y that a pipeline would require such that the pressure is constant assuming a
       laminar ﬂow. Then, ﬁnd the angle of a 10-mm-diameter pipe transporting 20– C water at Re ¼ 2000 so that a
       constant pressure occurs.
7.31   Solve for the constants A and B in Solved Problem 7.2 using cylinder radii of r1 ¼ 4 cm and r2 ¼ 5 cm assuming
       that 20– C water has a pressure drop of 40 Pa over a 10-m length. Also ﬁnd the ﬂow rate. Assume laminar ﬂow.
7.32   SAE-10 oil at 20– C ﬂows between two concentric cylinders parallel to the axes of the horizontal cylinders
       having radii of 2 and 4 cm. The pressure drop is 60 Pa over a length of 20 m. Assume laminar ﬂow. What is
       the shear stress on the inner cylinder?
CHAP. 7]                                      INTERNAL FLOWS                                                    139



Laminar Flow Between Parallel Plates

7.33   What pressure gradient would provide a zero shear stress on the stationary lower plate in Fig. 7.5 for
       horizontal plates with the top plate moving to the right with velocity U. Assume a laminar ﬂow.
7.34   What pressure gradient is needed so that the ﬂow rate is zero for laminar ﬂow between horizontal parallel
       plates if the lower plate is stationary and the top plate moves with velocity U. See Fig. 7.5.
7.35   Fluid ﬂows in a horizontal channel that measures 1 · 40 cm. If Re ¼ 1500, calculate the ﬂow rate and the
       pressure drop over a length of 10 m if the ﬂuid is (a) water at 20– C, (b) air at 25– C, and (c) SAE-10 oil at
       40– C. Assume laminar ﬂow.
7.36   Water at 20– C ﬂows down an 80-m-wide parking lot at a constant depth of 5 mm. The slope of the parking
       lot is 0.0002. Estimate the ﬂow rate and the maximum shear stress. Is a laminar ﬂow assumption reasonable?
7.37   Water at 20– C ﬂows between two parallel horizontal plates separated by a distance of 8 mm. The lower plate
       is stationary and the upper plate moves at 4 m=s to the right (see Fig. 7.5). Assuming a laminar ﬂow, what
       pressure gradient is needed such that:
            (a) The shear stress at the upper plate is zero
            (b) The shear stress at the lower plate is zero
            (c) The ﬂow rate is zero
            (d) The velocity at y ¼ 4 mm is 4 m=s

7.38   Atmospheric air at 40– C ﬂows between two parallel horizontal plates separated by a distance of 6 mm. The
       lower plate is stationary and the pressure gradient is – 3 Pa=m. Assuming a laminar ﬂow, what velocity of the
       upper plate (see Fig. 7.5) is needed such that:
            (a) The shear stress at the upper plate is zero
            (b) The shear stress at the lower plate is zero
            (c) The ﬂow rate is zero
            (d) The velocity at y ¼ 4 mm is 2 m=s


7.39   SAE-30 oil at 40– C ﬁlls the gap between the stationary plate and the 20-cm-diameter rotating plate shown in
       Fig. 7.15. Estimate the torque needed assuming a linear velocity proﬁle if O ¼ 100 rad=s.


                                                               T



                                                                               2 mm




                                                    Figure 7.15

7.40   SAE-10 oil at 20– C ﬁlls the gap between the moving 120-cm-long cylinder and the ﬁxed outer surface.
       Assuming a zero pressure gradient, estimate the force needed to move the cylinder at 10 m=s. Assume a
       laminar ﬂow.



                           F
                                            6 cm           V
                                                                                    0.4 mm



                                                    Figure 7.16
140                                            INTERNAL FLOWS                                                [CHAP. 7



Laminar Flow Between Rotating Cylinders

7.41   Assuming a Couette ﬂow between a stationary and a rotating cylinder, determine the expression for the
       power needed to rotate the inner rotating cylinder. Refer to Fig. 7.6.
7.42   SAE-10 oil at 20– C ﬁlls the gap between the rotating cylinder and the ﬁxed outer cylinder shown in Fig. 7.17.
       Estimate the torque needed to rotate the 20-cm-long cylinder at 40 rad=s (a) using the proﬁle of Eq. (7.62)
       and (b) assuming a Couette ﬂow.
                                                                                   0.4 mm


                                              6 cm



                                                     Figure 7.17

7.43   A 3-cm-diameter cylinder rotates inside a ﬁxed 4-cm-diameter cylinder with 40– C SAE-30 oil ﬁlling the
       space between the 30-cm-long concentric cylinders. Write the velocity proﬁle and calculate the torque and
       the power required to rotate the inner cylinder at 2000 rpm assuming a laminar ﬂow.
7.44   Determine the expressions for the torque and the power required to rotate the outer cylinder if the inner
       cylinder of Fig. 7.6 is ﬁxed. Assume a laminar ﬂow.




Turbulent Flow in a Pipe

7.45   Time average the differential continuity equation for an incompressible ﬂow and prove that two continuity
       equations result:
                                      @u0 @v0 @w0                 @u @v @w
                                         þ     þ      ¼ 0 and       þ    þ      ¼0
                                      @x @y       @z              @x @y @z
7.46   A 12-cm-diameter pipe transports water at 25– C in a pipe with roughness elements averaging 0.26 mm in
       height. Decide if the pipe is smooth or rough if the ﬂow rate is (a) 0.0004, (b) 0.004, and (c) 0.04 m3=s.
7.47   Estimate the maximum velocity in the pipe of (a) Prob. 7.46a, (b) Prob. 7.46b, and (c) Prob. 7.46c.
7.48   Draw a cylindrical control volume of length L and radius r in a horizontal section of pipe and show that the
       shear stress varies linearly with r, that is, t ¼ r Dp=ð2LÞ. The wall shear is then given by t0 ¼ r0 Dp=ð2LÞ (see
       Eq. (7.75)).
7.49   Estimate the velocity gradient at the wall, the pressure drop, and the head loss over 20 m of length for the
       water ﬂow of (a) Prob. 7.46a, (b) Prob. 7.46b, and (c) Prob. 7.46c. Note: Since turbulence must be zero at the
       wall, the wall shear stress is given by m @u=@y y¼0 .
7.50   Water at 20– C ﬂows in a 10-cm-diameter smooth horizontal pipe at the rate of 0.004 m3=s. Estimate the
       maximum velocity in the pipe and the head loss over 40 m of length. Use the power-law velocity distribution.
7.51   SAE-30 oil at 20– C is transported in a smooth 40-cm-diameter pipe with an average velocity of 10 m=s.
       Using the power-law velocity proﬁle, estimate (a) the friction factor, (b) the pressure drop over 100 m of
       pipe, (c) the maximum velocity, and (d) the viscous wall layer thickness.
7.52   Rework Prob. 7.51 using the semi-log velocity proﬁle.
7.53   If the pipe of Prob. 7.51 is a cast iron pipe, rework the problem using the semi-log velocity proﬁle.
CHAP. 7]                                       INTERNAL FLOWS                                                      141



Losses in Pipe Flow

7.54   Water at 20– C ﬂows at 0.02 m3=s in an 8-cm-diameter galvanized iron pipe. Calculate the head loss over
       40 m of horizontal pipe using (a) the Moody diagram and (b) the alternate equation.
7.55   Rework Prob. 7.54 using (a) SAE-10 oil at 80– C, (b) glycerin at 70– C, and (c) SAE-30 oil at 40– C.
7.56   Water at 30– C ﬂows down a 30– incline in a smooth 6-cm-diameter pipe at a ﬂow rate of 0.006 m3=s. Find
       the pressure drop and the head loss over an 80-m length of pipe.
7.57   If the pressure drop in a 100-m section of horizontal 10-cm-diameter galvanized iron pipe is 200 kPa,
       estimate the ﬂow rate if the liquid ﬂowing is (a) water at 20– C, (b) SAE-10 oil at 80– C, (c) glycerin at 70– C,
       and (d) SAE-30 oil at 20– C. Because the Moody diagram requires a trial-and-error solution, one of the
       alternate equations is recommended.
7.58   Air at 40– C and 200 kPa enters a 300-m section of 10-cm-diameter galvanized iron pipe. If a pressure drop
       of 200 Pa is measured over the section, estimate the mass ﬂux and the ﬂow rate. Because the Moody diagram
       requires a trial-and-error solution, one of the alternate equations is recommended. Assume the air to be
       incompressible.
7.59   A pressure drop of 100 kPa is desired in 80 m of smooth pipe transporting 20– C water at a ﬂow rate of
       0.0016 m3=s. What diameter pipe should be used? Because the Moody diagram requires a trial-and-error
       solution, one of the alternate equations is recommended.
7.60   Rework Prob. 7.59 using (a) SAE-10 oil at 80– C, (b) glycerin at 70– C, and (c) SAE-30 oil at 20– C.
7.61   A farmer wishes to siphon 20– C water from a lake, the surface of which is 4 m above the plastic tube exit. If
       the total distance is 400 m and 300 L of water is desired per minute, what size tubing should be selected?
       Because the Moody diagram requires a trial-and-error solution, one of the alternate equations is
       recommended.
7.62   Air at 35– C and 120 kPa enters a 20 · 50 cm sheet metal conduit at a rate of 6 m3=s. What pressure drop is
       to be expected over a length of 120 m?
7.63   A pressure drop of 6000 Pa is measured over a 20 m length as water at 30– C ﬂows through the 2 · 6 cm
       smooth conduit. Estimate the ﬂow rate.




Minor Losses

7.64   The loss coefﬁcient of the standard elbow listed in Table 7.2 appears quite large compared with several of the
       other loss coefﬁcients. Explain why the elbow has such a relatively large loss coefﬁcient by inferring a
       secondary ﬂow after the bend. Refer to Eq. (3.31).
7.65   Water at 20– C ﬂows from a reservoir out a 100-m-long, 4-cm-diameter galvanized iron pipe to the
       atmosphere. The outlet is 20 m below the surface of the reservoir. What is the exit velocity (a) assuming no
       losses in the pipe and (b) including the losses? There is a square-edged entrance. Sketch the EGL and the
       HGL for both (a) and (b).
7.66   Add a nozzle with a 2-cm-diameter outlet to the pipe of Prob. 7.65. Calculate the exit velocity.
7.67   The horizontal pipe of Prob. 7.65 is ﬁtted with three standard screwed elbows equally spaced. Calculate the
       ﬂow including all losses. Sketch the HGL.
7.68   A 4-cm-diameter cast iron pipe connects two reservoirs with the surface of one reservoir 10 m below the
       surface of the other. There are two standard screwed elbows and one wide-open angle valve in the 50-m-long
       pipe. Assuming a square-edged entrance, estimate the ﬂow rate between the reservoirs. Assume a
       temperature of 20– C.
142                                                INTERNAL FLOWS                                           [CHAP. 7



7.69   An 88% efﬁcient pump is used to transport 30– C water from a lower reservoir through an 8-cm-diameter
       galvanized iron pipe to a higher reservoir whose surface is 40 m above the surface of the lower one. The pipe
       has a total length of 200 m. Estimate the power required for a ﬂow rate of 0.04 m3=s. What is the maximum
       distance from the lower reservoir that the pump can be located if the horizontal pipe is 10 m below the
       surface of the lower reservoir?
7.70   A 90% efﬁcient turbine operates between two reservoirs connected by a 200-m length of 40-cm-diameter cast
       iron pipe that transports 0.8 m3=s of 20– C water. Estimate the power output of the turbine if the elevation
       difference between the surfaces of the reservoirs is 40 m.
7.71   The pump characteristic curves, shown in Fig. 7.18, relate the efﬁciency and the pump head (see Eq. (4.25))
       for the pump of this problem to the ﬂow rate. If the pump is used to move 20– C water from a lower reservoir
       at elevation 20 m to a higher reservoir at elevation 60 m through 200 m of 16-cm-diameter cast iron pipe,
       estimate the ﬂow rate and the power required.


                                     100                                           100
                                              HP
                                                                               P
                                         75                                        75
                                HP (m)
                                                                                         P
                                         50                                        50


                                         25                                        25


                                                   0.1           0.2     0.3
                                                              Q (m3/s)

                                                         Figure 7.18




Open Channel Flow

7.72   Water ﬂows at a depth of 80 cm in an open channel on a slope of 0.0012. Find the average shear stress acting
       on the channel walls if the channel cross section is (a) a 140-cm-wide rectangle and (b) a 3.2-m-diameter
       circle. (Draw a control volume and sum forces.)
7.73   Water ﬂows in a 2-m-wide rectangular ﬁnished concrete channel with a slope of 0.001 at a depth of 80 cm.
       Estimate the ﬂow rate using (a) the Chezy– Manning equation and (b) the Moody diagram.
7.74   Water is not to exceed a depth of 120 cm in a 2-m-wide ﬁnished rectangular concrete channel on a slope of
       0.001. What would the ﬂow rate be at that depth? (a) Use the Chezy– Manning equation and (b) the Moody
       diagram.
7.75   Estimate the ﬂow rate in the channel shown in Fig. 7.19 if the slope is 0.0014. The sides are on a slope of 45o.
       (a) Use the Chezy – Manning equation and (b) the Darcy– Weisbach equation. (c) Also, calculate the average
       shear stress on the walls.



                                                         Water                           60 cm
                   Finished
                     concrete
                                                     140 cm

                                                         Figure 7.19
CHAP. 7]                                                 INTERNAL FLOWS                                                     143


7.76   Water ﬂows in a 2-m-diameter sewer (ﬁnished concrete) with S ¼ 0.0016. Estimate the ﬂow rate if the depth
       is (a) 50, (b) 100, (c) 150, and (d) 199 cm.
7.77   Water ﬂows in a 120-cm-diameter sewer (ﬁnished concrete) with S ¼ 0.001 at a ﬂow rate of 0.4 m3=s. What is
       the expected depth of ﬂow?




                               Answers to Supplementary Problems
7.11   (a)   0.1007 m=s       (b)     0.0367 m=s           (c)     1.8 m=s        (d)     1.51 m=s
7.12   Highly turbulent
7.13   Turbulent
7.14   Laminar
7.15   (a)   16.4 m, 8.2 m          (b)    25.1 m, 12.5 m           (c)     34.7 m, 17.4 m           (d)   45.1 m, 22.6 m
7.16   Yes, yes
7.17   4.8 m, 0.283 m=s
7.18   (a)   1.94 m, 3.87 m          (b)    0.2 m, 2.4 m
7.19   See problem statement
7.20   See problem statement
7.21   See problem statement
7.22   See problem statement
7.23   See problem statement
7.24   (a)   0.448 m=s       (b)     2950          (c)   0.16 Pa          (d)   0.0217
7.25   (a)   1114 Pa, not laminar            (b)     153 kPa, laminar            (c) 594 kPa, laminar
7.26   0:219– downward
7.27   (a)   200.6 kPa       (b)     – 191.8 kPa
7.28   0.0091 Pa, 0.04, 3.13 m, 36.4 Pa
7.29   1.414 cm, 1 cm
7.30   sin 21 ð8mV=gr02 Þ, 0:376–
7.31   4.1, 14.8, 0.0117 m3=s
7.32   0.035 N/m2
7.33   2U=b2
7.34   6mU=b2
7.35   (a)   0.0006 m3=s, 180 Pa            (b)     0.0093 m3=s, 51.5 Pa            (c)       0.0024 m3=s, 264 kPa
7.36   0.000653 m3=s, 0.00098 N/m2
7.37   (a)   2125 Pa/m         (b)        125 Pa/m        (c)    375 Pa/m               (d)    20.25 Pa/m
7.38   (a)   2.83 m=s         (b)         22.83 m=s        (c)     20.942 m=s            (d)    1.37 m=s
7.39   12.6 N·m
7.40   565 N
144                                                         INTERNAL FLOWS                                                   [CHAP. 7



7.41   2pmr13 o2 L=d
7.42   (a) 0.346 N·m                (b)   0.339 N·m
7.43   539ð0:0016=r 2 rÞ, 0.325 N·m, 136 W
7.44   T ¼ 4pmr12 r22 Lo2 = r22 2 r12
7.45   See problem statement
7.46   (a) smooth             (b)     rough         (c)    rough
7.47   (a) 0.047 m=s               (b) 0.474 m=s                (c)   4.6 m=s
7.48   See problem statement
7.49   (a) 7.3 s21, 4.4 Pa, 0.00045 m                     (b)     490 s21, 290 Pa, 0.03 m           (c) 45,200 s21, 27 kPa, 2.7 m
7.50   0.63 m=s, 0.125 m
7.51   (a) 0.024            (b) 275 kPa             (c)    12.4 m=s          (d)    1.82 mm
7.52   (a) 0.0255           (b) 292 kPa             (c)    11.9 m=s          (d)    1.77 mm
7.53   (a) 0.0275           (b) 315 kPa             (c)    12.5 m=s          (d)    1.71 mm
7.54   (a) 9.7 m            (b)     9.55 m
7.55   (a) 11.3 m, 11.1 m                 (b)   15.1 m, 15.2 m              (c)    16.1 m, 16.5 m
7.56   2 343 kPa, 4.98 m
7.57   (a) 0.033 m3=s                     (b)   0.032 m3=s                  (c) 0.022 m3=s          (d)   0.022 m3=s
7.58   0.0093 m3=s, 0.031 kg/s
7.59   5.6 cm
7.60   (a) 3.5 cm            (b)     3.9 cm         (c)    3.9 cm
7.61   8.4 cm
7.62   18.8 kPa
7.63   0.00063 m3=s
7.64   See problem statement
7.65   (a) 19.8 m=s               (b) 2.01 m=s
7.66   0.995 m=s
7.67   1.56 m=s
7.68   1.125 m=s
7.69   138 hp, 6.7 m
7.70   173 hp
7.71   0.3 m3=s, 290 hp
7.72   (a) 4.39 Pa            (b)     4.92 Pa
                    3
7.73   (a) 2.45 m =s          (b)     2.57 m3=s
7.74   (a) 0.422 m3=s (b)             0.435 m3=s
7.75   (a) 1.99 m3=s          (b)     2.09 m3=s           (c)     5.32 Pa
                        3                       3
7.76   (a) 0.747 m =s (b)             3.30 m =s           (c)     6.27 m3=s         (d)   6.59 m3=s
7.77   0.45 m
                                                    Chapter 8


                                            External Flows
8.1   INTRODUCTION
The subject of external ﬂows involves both low- and high-Reynolds number ﬂows. Low-Reynolds
number ﬂows are not of interest in most engineering applications and will not be considered in this
book; ﬂow around spray droplets, river sediment, ﬁlaments, and red blood cells would be examples that
are left to the specialists. High-Reynolds number ﬂows are of interest to many engineers and include ﬂow
around airfoils, vehicles, buildings, bridge cables, stadiums, turbine blades, and signs, to name a few.
     It is quite difﬁcult to solve for the ﬂow ﬁeld external to a body, even the simplest of bodies like a long
cylinder or a sphere. We can, however, develop equations that allow us to estimate the growth of the
thin viscous layer, the boundary layer, which grows on a ﬂat plate or the rounded nose of a vehicle. Also,
coefﬁcients have been determined experimentally that allow the drag and the lift to be objects of interest.
We will begin this chapter by presenting such coefﬁcients. But ﬁrst, some deﬁnitions are needed.
     The ﬂow around a blunt body involves a separated region, a region in which the ﬂow separates
from the body and forms a recirculating region downstream, as sketched in Fig. 8.1. A wake, a region
inﬂuenced by viscosity, is also formed; it is a diffusive region that continues to grow (some distance
downstream the velocity is less than the free-stream velocity V). A laminar boundary layer exists near
the front of the body followed by a turbulent boundary layer as shown in Fig. 8.1. An inviscid ﬂow,
often referred to as the free stream, exists on the front of the body and outside the boundary layer,
separated region, and wake. The ﬂow around a streamlined body has all the same components as that
of Fig. 8.1 except that it does not have a signiﬁcant separated region and the wake is much smaller.


                                                                                           V


                   V                                                               Wake

                                                Turbulent bl
                               Inviscid
                               Flow
                                             Laminar bl


                               Stagnation
                                  point
                   V
                                                       Separation   Separated
                                                         point       region                V

                               Figure 8.1   The details of a ﬂow around a blunt body.



                                                           145
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
146                                           EXTERNAL FLOWS                                              [CHAP. 8



     The free-stream inviscid ﬂow is usually irrotational although it could be a rotational ﬂow with
vorticity, e.g., the ﬂow of air near the ground around a tree trunk or water near the ground around a
post in a river; the water digs a depression in the sand in front of the post and the air digs a similar
depression in snow in front of the tree, a rather interesting observation. The vorticity in the approaching
air or water accounts for the observed phenomenon.
     It should be noted that the boundary of the separated region is shown at an average location. It is,
however, highly unsteady and is able to slowly exchange mass with the free stream even though the time-
average streamlines remain outside the separated region. Also, the separated region is always located
inside the wake.
     Interest in the ﬂow around a blunt object is focused on the drag, the force the ﬂow exerts on the body
in the direction of the ﬂow*. Lift is the force exerted normal to the ﬂow direction and is of interest on
airfoils and streamlined bodies. The drag FD and lift FL are speciﬁed in terms of the drag coefﬁcient CD
and lift coefﬁcient CL, respectively, by

                                          1                             1
                                    FD ¼ rAV 2 CD         and     FL ¼ rAV 2 CL                         ð8:1Þ
                                          2                             2
where, for a blunt body, the area A is the area projected on a plane normal to the ﬂow direction,
and for an airfoil the area A is the chord (the distance from the nose to the trailing edge) times the
length.
     The force due to the lower pressure in the separated region dominates the drag force on a blunt
body, the subject of Sec. 8.2. The viscous stress that acts on and parallel to each boundary element is
negligible and thus little, if any, attention is paid to the boundary layer on the surface of a blunt body.
The opposite is true for an airfoil, the subject of Sec. 8.3; the drag force is due primarily to the viscous
stresses that act on the boundary elements. Consequently, there is considerable interest in the boundary
layer that develops on a streamlined body. It is this interest that has motivated much study of boundary
layers. The basics of boundary-layer theory will be presented in Sec. 8.5. But ﬁrst, the inviscid ﬂow
outside the boundary layer (Fig. 8.1) must be known. Therefore, inviscid ﬂow theory will be presented
in Sec. 8.4. The boundary layer is so thin that it can be ignored when solving for the inviscid ﬂow.
The inviscid ﬂow solution provides the lift, which is not signiﬁcantly inﬂuenced by the viscous boundary
layer, and the pressure distribution on the body’s surface as well as the velocity on that surface (since the
inviscid solution ignores the effects of viscosity, the ﬂuid does not stick to the boundary but slips by the
boundary). The pressure and the velocity at the surface are needed in the boundary-layer solution.


8.2     FLOW AROUND BLUNT BODIES

8.2.1    Drag Coefﬁcients
The primary ﬂow parameter that inﬂuences the drag around a blunt body is the Reynolds number. If
there is no free surface, the drag coefﬁcients for both smooth and rough long cylinders and spheres are
presented in Fig. 8.2; the values for streamlined cylinders and spheres are also included.
    Separation always occurs in the ﬂow of a ﬂuid around a blunt body if the Reynolds number is
sufﬁciently high. However, at low Reynolds numbers (it is called a Stokes ﬂow if Re , 5), there is no
separation and the drag coefﬁcient, for a sphere, is given by
                                                         24
                                                  CD ¼            Re 5 1                                       ð8:2Þ
                                                         Re
Separation occurs for Re $10 beginning over a small area on the rear of the sphere until the separated
region reaches a maximum at Re > 1000. The drag coefﬁcient is then relatively constant until a sudden

*
  Actually, the body moves through the stationary ﬂuid. To create a steady ﬂow, the ﬂuid is moved past the
stationary body, as in a laboratory; the pressures and force remains the same. To obtain the actual velocity, the ﬂow
velocity is subtracted from the velocity at each point.
CHAP. 8]                                        EXTERNAL FLOWS                                                           147



drop occurs in the vicinity of Re ¼ 2 · 105 . This sudden drop is due to the transition of the boundary
layer just before separation undergoing transition from a laminar ﬂow to a turbulent ﬂow. A turbulent
boundary layer contains substantially more momentum and is able to move the separation region further
to the rear; see the comparison in Fig. 8.3. The sudden decrease in drag could be as much as 80 percent.
The surface of an object can be roughened to cause the boundary layer to undergo transition
prematurely; the dimples on a golf ball accomplish this and increase the ﬂight by up to 100 percent when
compared with the ﬂight of a smooth ball.



            2.0
                                                                     Smooth circular cylinder
            1.0
            0.8                                                 Rough cylinder
            0.6                                                           Smooth sphere
            0.4                                                          Rough
                                                                         sphere
     CD     0.2

            0.1                                                                        streamlined
                                                                                         cylinder
           0.06
                                                                streamlined
           0.04                                                    sphere
           0.02


                   2     4 6 8102    2   4 6 8103   2   4   6 8104   2     4 6 8105    2      4 6 8106   2   4 6 8 107

                                                            Re = VD/v

                       Figure 8.2   Drag coefﬁcients for ﬂow around spheres and long cylinders.


                                                            V
                            Boundary
                            layer edge
                                                        u(y)

                                                                                           Laminar


                                                                                       Turbulent


            Figure 8.3    Laminar and turbulent velocity proﬁles for the same boundary-layer thickness.

     After the sudden drop, the drag coefﬁcient again increases with increased Reynolds number.
Experimental data do not provide the drag coefﬁcients for either the sphere or the cylinder for high
Reynolds numbers. The values of 0.2 for smooth spheres and 0.4 for long smooth cylinders for Reynolds
numbers exceeding 106 are often used.
     Streamlining can substantially reduce the drag coefﬁcients of blunt bodies. The drag coefﬁcients for
streamlined cylinders and spheres are shown in Fig. 8.2. The included angle at the trailing edge should
not exceed about 20– if the separated region is to be minimized. The drag due to the shear stress acting
on the enlarged surface will certainly increase for a streamlined body, but the drag due to the low
pressure will be reduced much more so that the total drag will be less. Also, streamlining eliminates the
vibrations that often occur when vortices are shed from a blunt body.
     For cylinders of ﬁnite length with free ends, the drag coefﬁcient must be reduced using the data of
Table 8.1. If a ﬁnite-length cylinder has one end ﬁxed to a solid surface, the length of the cylinder is
doubled. Note that the L=D of a cylinder with free ends has to be quite large before the end effects are
not signiﬁcant.
148                                               EXTERNAL FLOWS                                         [CHAP. 8



                  Table 8.1     Drag Coefﬁcients for Finite-Length Circular Cylinders* with Free Ends†

                                               L=D                   CD =CD1
                                                1                         1
                                                40                       0.82
                                                20                       0.76
                                                10                       0.68
                                                 5                       0.62
                                                 3                       0.62
                                                 2                       0.57
                                                 1                       0.53

    Drag coefﬁcients for a number of common shapes that are insensitive to high Reynolds numbers are
presented in Table 8.2.


                                  Table 8.2   Drag Coefﬁcients for Various Blunt Objects

                      Object                                       Re                        CD

                                                                    1 > 104                  2:0
                      Square cylinder of width w             L=w ¼
                                                                     1 > 104                 1:1
                                                                   8
                                                                   >
                                                                   > 1 > 103                 2:0
                                                                   <
                                                                     20 > 103                1:5
                      Rectangular plates                     L=w ¼
                                                                   >
                                                                   >  5 > 103                1:2
                                                                   :
                                                                      1 > 103                1:1

                      Circular disc                                           .103           1.1


                      Parachute                                               >107           1.4


                      Modern automobile                                       >105           0.29


                      Van                                                     >105           0.42
                                                     8
                                                     < upright rider                         1:1
                      Bicycle                          bent over rider                       0:9
                                                     :
                                                       drafting rider                        0:5
                                                     8
                                                     < standard                              0:96
                      Semitruck                        with streamlined deflector            0:76
                                                     :
                                                       with deflector and gap seal           0:70




*
    CD1 is the drag coefﬁcient from Fig. 8.2.
†
    If one end is ﬁxed to a solid surface, double the length of the cylinder.
CHAP. 8]                                      EXTERNAL FLOWS                                                    149



 EXAMPLE 8.1 A 5-cm-diameter, 6-m-high pole ﬁxed in concrete supports a ﬂat, circular 4-m-diameter sign.
 Estimate the maximum moment that must be resisted by the concrete for a wind speed of 30 m=s.
     Solution: To obtain the maximum moment, the wind is assumed normal to the sign. From Table 8.2, the
 drag coefﬁcient for a disk is 1.1. The moment due to the drag force, which acts at the center of the sign, is
                              1                  1
               M1 ¼ FD1 · L1 ¼ rA1 V 2 CD1 · L1 ¼ · 1:22 · p · 22 · 302 · 1:1 · 8 ¼ 60 700 N·m
                              2                  2
 where the density at an elevation above sea level of 0 is used since the elevation is not given. The moment due to
 the pole is
                               1                  1
                M2 ¼ FD2 · L2 ¼ rA2 V 2 CD2 · L2 ¼ · 1:22 · 0:05 · 6 · 302 · 0:7 · 3 ¼ 346 N·m
                               2                  2
 using a Reynolds number of Re ¼ 30 · 0:05=1:5 · 10 5 ¼ 10 5 and assuming high-intensity ﬂuctuations in the air
 ﬂow, i.e., a rough cylinder. The factor from Table 8.1 was not used since neither end was free.
     The moment that must be resisted by the concrete base is
                                  M ¼ M1 þ M2 ¼ 60 700 þ 346 ¼ 61 000 N·m


8.2.2   Vortex Shedding
Long cylindrical bodies exposed to a ﬂuid ﬂow can exhibit the phenomenon of vortex shedding at
relatively low Reynolds numbers. Vortices are shed from electrical wires, bridges, towers, and
underwater communication wires, and can actually cause signiﬁcant damage. We will consider the
vortices shed from a long circular cylinder. The shedding occurs alternately from each side of the
cylinder, as sketched in Fig. 8.4. The shedding frequency f, Hz, is given by the Strouhal number,
                                                                fD
                                                         St ¼                                                  ð8:3Þ
                                                                 V
If this shedding frequency is the same or a multiple of a structure’s frequency, then there is the possibility
that damage may occur due to resonance.

                                                  Vortex
                                                being shed
                                                                                     Shed vortices

                               Free
                               stream
                V



                                                                     Shed vortices


                                    Figure 8.4 Vortices shed from a cylinder.

    The Strouhal number cannot be calculated from equations; it is determined experimentally and
shown in Fig. 8.5. Note that vortex shedding initiates at Re < 40 and for Re $ 300 the Strouhal number
is essentially independent of Reynolds number and is equal to about 0.21. The vortex shedding
phenomenon disappears for Re . 104.

 EXAMPLE 8.2 A 6-cm-diameter cylinder is used to measure the velocity of a slow-moving air stream. Two
 pressure taps are used to determine that the vortices are shed with a frequency of 4 Hz. Determine the velocity of
 the air stream.
      Solution: Assume the Strouhal number to be in the range 300 , Re , 10 000. Then
150                                        EXTERNAL FLOWS                                            [CHAP. 8



                              fD                                 4 · 0:06
                                 ¼ 0:21      so that    V¼                ¼ 1:14 m=s
                               V                                   0:21
 It is quite difﬁcult to measure the velocity of an air stream this low. The measurement of the shed vortices
 is one method of doing so.




                     0.20

                                                        Data
                                                        spread
                     0.18

               St

                     0.16



                     0.14




                                   100             400             1000                 10 000
                                                  Re = VD/v
                      Figure 8.5 Strouhal number for vortex shedding from a cylinder.




8.2.3   Cavitation
When a liquid ﬂows from a region of relatively high pressure into a region of low pressure, cavitation
may occur, that is, the pressure may be sufﬁciently low so that the liquid vaporizes. This can occur in
pipe ﬂows in which a contraction and expansion exists, in the vanes of a centrifugal pump, near the tips
of propellers, on hydrofoils, and torpedoes. It can actually damage the propellers and the steel shafts
(due to vibrations) on ships and cause a pump to cease to function properly. It can, however, also be
useful in the destruction of kidney stones, in ultrasonic cleaning devices, and in improving the
performance of torpedoes.
    Cavitation occurs whenever the cavitation number s, deﬁned by
                                                            p1 2 pv
                                                       s¼    1    2
                                                                                                          ð8:4Þ
                                                             2 rV

is less than the critical cavitation number scrit , which depends on the geometry and the Reynolds
number. In Eq. (8.4) p1 is the absolute pressure in the free stream and pv the vapor pressure of the
liquid.
     The drag coefﬁcient of a body that experiences cavitation is given by
                                               CD ðsÞ ¼ CD ð0Þð1 þ sÞ                                     ð8:5Þ

where CD ð0Þ is given in Table 8.3 for several bodies for Re > 105.
    The hydrofoil, an airfoil-type shape that is used to lift a vessel above the water surface, invariably
cannot operate without cavitation. The area and Reynolds number are based on the chord length. The
drag and lift coefﬁcients along with the critical cavitation numbers are presented in Table 8.4.
CHAP. 8]                                         EXTERNAL FLOWS                                                    151


                      Table 8.3    Drag Coefﬁcients for Zero Cavitation Numbers at Re > 105

                              Geometry                              Angle              CD(0)
                              Sphere                                                   0.30
                              Disk (circular)                                          0.8
                              Circular cylinder                                        0.50
                              Flat plate (rectangular)            8                    0.88
                                                                  >
                                                                  > 120                0:74
                                                                  < 90                 0:64
                              Two-dimensional Wedge            >  60                   0:49
                                                               >
                                                               :
                                                                  30                   0:28
                                                               8
                                                               >
                                                               > 120                   0:64
                                                               < 90                    0:52
                              Cone ðaxisymmetricÞ
                                                               >
                                                               > 60                    0:38
                                                               :
                                                                 30                    0:20




   Table 8.4   Drag and Lift Coefﬁcients and Critical Cavitation Numbers for Hydrofoils for 105 , Re , 106

                             Angle (–)       Lift          Drag           Critical cavitation
                                          coefﬁcient     coefﬁcient             number
                             22                0.2         0.014                 0.5
                               0               0.4         0.014                 0.6
                               2               0.6         0.015                 0.7
                               4               0.8         0.018                 0.8
                               6               0.95        0.022                 1.2
                               8               1.10        0.03                  1.8
                              10               1.22        0.04                  2.5




 EXAMPLE 8.3 A 2-m-long hydrofoil with chord length 40 cm operates 30 cm below the water’s surface with
 an angle of attack of 68 . For a speed of 16 m=s determine the drag and lift and decide if cavitation exists on the
 hydrofoil.
     Solution: The pressure p1 must be absolute. It is
                              p1 ¼ gh þ patm ¼ 9800 · 0:3 þ 100 000 ¼ 102 900 Pa abs
      Assuming that the water temperature is about 15–C, the vapor pressure is 1600 Pa (Table C.1) and the
 cavitation number is
                                              p1 2 pv   102 900 2 1705
                                         s¼    1
                                                      ¼                  ¼ 0:79
                                               2 rV 2   0:5 · 1000 · 162
      This is less than the critical cavitation number of 1.2 given in Table 8.4 and hence cavitation is present. Note
 that we could have used pv ¼ 0, as is often done, with sufﬁcient accuracy.
      The drag and lift are
                               1          1
                           FD ¼ rV 2 ACD ¼ · 1000 · 162 · 2 · 0:4 · 0:022 ¼ 2250 N
                               2          2
                               1          1
                           FL ¼ rV ACL ¼ · 1000 · 162 · 2 · 0:4 · 0:95 ¼ 97 300 N
                                  2
                               2          2
152                                             EXTERNAL FLOWS                                          [CHAP. 8



8.2.4    Added Mass
When a body is accelerated in a ﬂuid, some of the surrounding ﬂuid is also accelerated. This requires a
larger force than that required to accelerate only the body. To account for the increased mass that must
be accelerated, an added mass ma is simply added to the body to calculate the force. For motion in the
horizontal plane, the force needed to accelerate a body is given by
                                                                            dV
                                                     F   FD ¼ ðm þ ma Þ                                     ð8:6Þ
                                                                            dt
where FD is the drag force. If the body is accelerating from rest, the drag force would be 0.
   The added mass is related to the mass of ﬂuid mf displaced by the body. The relationship
                                                              ma ¼ kmf                                      ð8:7Þ
provides the added mass if the factor k is known. For a sphere, k ¼ 0.5; for an ellipsoid with major axis
twice the minor axis and moving in the direction of the major axis, k ¼ 0.2; and for a long cylinder
moving normal to its axis, k ¼ 1.0. These values are for inviscid ﬂows so they are used when starting
from rest or at very low speeds.
     For dense bodies accelerating in air the added mass can be ignored, but for bodies accelerating in a
liquid, the added mass must be included.

 EXAMPLE 8.4 A sphere with a speciﬁc gravity of 3 is released from rest in a body of water. Determine its
 initial acceleration.
       Solution: Apply Newton’s second law including the buoyant force:
                                                                      dV
                                               W     FB ¼ ðm þ ma Þ
                                                                      dt
                                                                                            dV
                               ðSgwater 2 gwater ÞVsphere ¼ ðSrwater þ 0:5rwater ÞVsphere
                                                                                            dt
                                                     dV ð3 1Þg
                                                 \      ¼         ¼ 5:6 m=s2
                                                     dt   3 þ 0:5
 where we have used g ¼ rg.


8.3     FLOW AROUND AIRFOILS
Airfoils are streamlined so that separation does not occur. Airfoils designed to operate at subsonic speeds are
rounded at the leading edge whereas those designed for supersonic speeds may have sharp leading edges. The
drag on an airfoil is due primarily to the shear stress that acts on the surface; there is some drag due to the
pressure distribution. The boundary layer, in which all the shear stresses are conﬁned, that develops on an
airfoil is very thin (see the sketch in Fig. 8.6) and can be ignored when solving for the inviscid ﬂow surrounding
the airfoil. The pressure distribution that is determined from the inviscid ﬂow solution is inﬂuenced very little
by the presence of the boundary layer. Consequently, the lift is estimated on an airfoil by ignoring the
boundary layer and integrating the pressure distribution of the inviscid ﬂow. The inviscid ﬂow solution also
provides the velocity at the outer edge of the thin boundary layer, a boundary condition needed when solving
the boundary-layer equations; the solution of the boundary-layer equations will be presented in Sec. 8.5.

                                             Boundary layer
                      Inviscid flow
                                              chord, c




                           Figure 8.6    Flow around an airfoil at an angle of attack a.
CHAP. 8]                                           EXTERNAL FLOWS                                                    153



    The lift and drag on airfoils will not be calculated from the ﬂow conditions but from graphical
values of the lift and drag coefﬁcients. These are displayed in Fig. 8.7 for a conventional airfoil with
Re ¼ 9 · 106 . The lift and drag coefﬁcients are deﬁned as
                                                      FL                              FD
                                            CL ¼ 1        2
                                                                         CD ¼ 1           2
                                                                                                                    ð8:8Þ
                                                   2 rcLV                          2 rcLV

Conventional airfoils are not symmetric and are designed to have positive lift at zero angle of attack, as
shown in Fig. 8.7. The lift is directly proportional to the angle of attack until just before stall is
encountered. The drag coefﬁcient is also directly proportional to the angle of attack up to about 5–. The
cruise condition is at an angle of attack of about 5– where the drag is a minimum at CL ¼ 0.3 as noted.
Mainly the wings supply the lift on an aircraft but an effective length is the tip-to-tip distance, the
wingspan, since the fuselage also supplies some lift.
     The drag coefﬁcient is essentially constant up to a Mach number of about 0.75. It then increases by
over a factor of 10 until a Mach number of 1 is reached at which point it begins to slowly decrease. So,
cruise Mach numbers between 0.75 and 1.5 are avoided to stay away from the high drag coefﬁcients.
Swept-back airfoils are used since it is the normal component of velocity that is used when calculating
the Mach number, which allows a higher plane velocity before the larger drag coefﬁcients are
encountered.
     Slotted ﬂaps are also used to provide larger lift coefﬁcients during takeoff and landing. Air ﬂows
from the high-pressure region on the bottom of the airfoil through a slot to energize the slow-moving air
in the boundary layer on the top side of the airfoil thereby reducing the tendency to separate and stall.
The lift coefﬁcient can reach 2.5 with a single-slotted ﬂap and 3.2 with two slots.




                    1.6
                                              Stall
                                                                1.6
                    1.2

                                                                1.2
               CL
                    0.8
                                                           CL
                                                                0.8

                                                                           CL
                    0.4                                                       = 47.6
                                                                0.4        CD
                                                                                                CL = 0.3


                      0      4      8   12    16      20                   0.004       0.008        0.012   0.016
                                        a                                                      CD

               Figure 8.7 Lift and drag coefﬁcients for a conventional airfoil at Re ¼ 9 · 106.




 EXAMPLE 8.5 Determine the takeoff speed for an aircraft that weighs 15 000 N including its cargo if its
 wingspan is 15 m with a 2-m chord. Assume an angle of 8– at takeoff.
     Solution: Assume a conventional airfoil and use the lift coefﬁcient of Fig. 8.7 of about 0.95. The velocity is
 found from the equation for the lift coefﬁcient
                                    FL                         15 000
                          CL ¼ 1        2
                                              0:95 ¼ 1                      2
                                                                              :        \ V ¼ 30 m=s
                                 2 rcLV                2 · 1:2 · 2 · 15 · V

 The answer is rounded off to two signiﬁcant digits since the lift coefﬁcient of 0.95 is read from the ﬁgure.
154                                              EXTERNAL FLOWS                                                [CHAP. 8



8.4     POTENTIAL FLOW
8.4.1     Basics
When a body is moving in an otherwise stationary ﬂuid, there is no vorticity present in the undisturbed
ﬂuid. To create a steady ﬂow, a uniform ﬂow with the body’s velocity is superimposed on the ﬂow ﬁeld
so that the vorticity-free ﬂow moves by the stationary body, as in a wind tunnel. The only way vorticity is
introduced into the ﬂow is through the effects of viscosity. For high-Reynolds number ﬂows, the viscous
effects are concentrated in the boundary layer and the wake (the wake includes the separated region).
For a streamlined body and over the front part of a blunt body, the ﬂow outside the boundary layer is
free of viscous effects and thus vorticity so it is an inviscid ﬂow. The solution of the inviscid ﬂow problem
provides the velocity ﬁeld and the pressure ﬁeld in the vicinity of the body. The pressure is not
signiﬁcantly inﬂuenced by the boundary layer so it will provide the lift when integrated over the body’s
surface. The velocity at the boundary of the body* from the inviscid ﬂow solution will be the velocity at
the outer edge of the thin boundary layer, needed in the boundary-layer solution (to be presented in Sec.
8.5). So, before the boundary layer can be analyzed on a body, the inviscid ﬂow must be known.
     A potential ﬂow (or irrotational ﬂow) is one in which the velocity ﬁeld can be expressed as the
gradient of a scalar function, that is,
                                                            V ¼ Hf                                                ð8:9Þ
where f is the velocity potential. For a potential ﬂow, the vorticity is 0

                                                         o ¼H·V¼0                                                ð8:10Þ
This can be shown to be true by expanding in rectangular coordinates and using Eq. (8.9).
    To understand why an irrotational ﬂow cannot generate vorticity consider the three types of forces
that act on a cubic ﬂuid element: the pressure and body forces act through the center of element and
consequently cannot impart a rotary motion to the element. It is only the viscous shear forces that are
able to give rotary motion to ﬂuid particles. Hence, if the viscous effects are non-existent, vorticity
cannot be introduced into an otherwise potential ﬂow. Also, this can be observed to be the case by taking
the curl of the Navier –Stokes equation (5.20).
    If the velocity is given by Eq. (8.9), the continuity equation (5.8) for an incompressible ﬂow provides

                                                       H ·H f ¼ H2 f ¼ 0                                         ð8:11Þ
which is the famous Laplace equation. In rectangular coordinates it is written as

                                                    @2f @2f @2f
                                                       þ   þ    ¼0                                               ð8:12Þ
                                                    @x2 @y2 @z2
With the required boundary conditions, this equation could be solved. But, rather than attempting to solve
the resulting boundary-value problem directly, we will restrict our interest to plane ﬂows, such as airfoils and
cylindrical bodies, identify several simple ﬂows that satisfy Laplace’s equation, and then superimpose those
simple ﬂows to form more complex ﬂows of interest. Since Laplace’s equation is linear, the superposed ﬂows
will also satisfy Laplace’s equation.
     First, however, let us deﬁne another scalar function that will be quite useful in our study. For the
plane ﬂows of interest, the stream function c, is deﬁned by

                                                    @c                        @c
                                               u¼            and       v¼                                        ð8:13Þ
                                                    @y                        @x
so that the continuity equation (5.8) with @w=@z ¼ 0 (for a plane ﬂow) is satisﬁed for all plane ﬂows. The
vorticity, Eqs. (8.10) and (3.14), then provides


*
    If there are insigniﬁcant viscous effects, the ﬂuid does not stick to a boundary but is allowed to slip.
CHAP. 8]                                      EXTERNAL FLOWS                                                    155



                                                   @v @u   @2c @2c
                                            oz ¼     2   ¼2 22 2 ¼ 0                                          ð8:14Þ
                                                   @x @y   @x  @y
so that
                                                     @2c @2c
                                                        þ    ¼0                                               ð8:15Þ
                                                     @x2 @y2
The stream function also satisﬁes the Laplace equation. So, from the above equations we have
                                      @f @c                     @f     @c
                                  u¼     ¼         and      v¼     ¼2                        ð8:16Þ
                                      @x @y                     @y     @x
The equations between f and c in Eq. (8.16) form the Cauchy– Riemann equations and f and c are
referred to as harmonic functions. The function f þ ic is the complex velocity potential. The powerful
mathematical theory of complex variables is thus applicable to this subset of ﬂuid ﬂows: steady,
incompressible plane ﬂows.
     Three items of interest contained in the above equations are:
  .     The stream function is constant along a streamline.
  .     The streamlines and lines of constant potential lines intersect at right angles.
  .     The difference of the stream functions between two streamlines is the ﬂow rate q per unit depth
        between the two streamlines, i.e., q ¼ c2 c1 .
These items will be shown to be true in the examples and solved problems.


 EXAMPLE 8.6 Show that c is constant along a streamline.
      Solution: A streamline is a line to which the velocity vector is tangent. This is expressed in vector form as
 V · dr ¼ 0; which, for a plane ﬂow (no z variation), using dr ¼ dx iþdy j takes the form u dy v dx ¼ 0: Using
 Eq. (8.13), this becomes
                                                @c      @c
                                                   dy þ    dx ¼ 0
                                                @y      @x
 This is the deﬁnition of dc from calculus, thus dc ¼ 0 along a streamline, or, in other words, c is constant along
 a streamline.


8.4.2     Several Simple Flows
Several of the simple ﬂows to be presented are much easier understood using polar (cylindrical)
coordinates. The Laplace equation, the continuity equation, and the expressions for the velocity
components for a plane ﬂow (Table 5.1) are
                                                     1@     @c   1 @2c
                                            H2 c ¼        r    þ 2 2 ¼0                                       ð8:17Þ
                                                     r @r @r    r @y

                                                   1@         1 @vy
                                                        rvr þ       ¼0                                        ð8:18Þ
                                                   r @r       r @y
                                            @f 1 @c                     1 @f      @c
                                     vr ¼      ¼          and    vy ¼        ¼                                ð8:19Þ
                                            @r   r @y                   r @y      @r
where the expressions relating the velocity components to the stream function are selected so that the
continuity equation is always satisﬁed. We now deﬁne four simple ﬂows that satisfy the Laplace equation.
                                      Uniform flow :       c ¼ U1 y       f ¼ U1 x                            ð8:20Þ
                                                                 q                q
                                      Line source     :    c¼      y       f¼       ln r                      ð8:21Þ
                                                                2p               2p
156                                                 EXTERNAL FLOWS                                                     [CHAP. 8



                                                                  G                      G
                                 Vortex :               c¼           ln r       f¼          y                            ð8:22Þ
                                                                  2p                     2p

                                                      m sin y             m cos y
                                  Doublet :             c ¼2      f ¼2                               ð8:23Þ
                                                         r                   r
These simple plane ﬂows are sketched in Fig. 8.8. If a y-component is desired for the uniform ﬂow, an
appropriate term is added. The source strength q in the line source is the ﬂow rate per unit depth; adding
a minus sign creates a sink. The vortex strength G is the circulation about the origin, deﬁned as
                                                       I
                                                  G ¼ V·ds                                           ð8:24Þ
                                                                     L
where L is a closed curve, usually a circle, about the origin with clockwise being positive. The heavy
arrow in the negative x-direction represents the doublet strength m in Fig. 8.8(d). (A doublet can be
thought of as a source and a sink of equal strengths separated by a very small distance.)
    The velocity components are used quite often for the simple ﬂows presented. They follow for both
polar and rectangular coordinates:
                                                         u ¼ U1                           v¼0
                           Uniform flow :                                                                                 (8.25)
                                                        vr ¼ U1 cos y                    vy ¼ 2U1 sin y
                                                              q
                                                        vr ¼                             vy ¼ 0
                                                             2pr
                           Line source          :             q    x                           q     y                    (8.26)
                                                         u¼                               v¼
                                                             2p x2 þ y2                       2p x2 þ y2
                                                                                                  G
                                                        vr ¼ 0                           vy ¼ 2
                           Vortex               :                                                2pr                      (8.27)
                                                                   G     y                     G     x
                                                        u ¼2                              v¼
                                                                   2p x2 þ y2                 2p x2 þ y2
                                                                                           y
                  y         = const
                                                                      = const
                                                    = const


                                                                     =A                                       =0
                                                                                                                   x
                                                                                                              = 2A


                                                    x
                  (a) Uniform flow in the x-direction

                                                                                 (b) Line source

                                      y                                              y          = const

                                           v                         = const
                 = const                                = const
                                            r
                                                              x                                           x




                            (c) Vortex
                                                                                (d) Doublet

                                   Figure 8.8 Four simple plane potential ﬂows.
CHAP. 8]                                      EXTERNAL FLOWS                                                    157


                                                   m cos y                           m sin y
                                             vr ¼ 2                         vy ¼ 2
                                                      r2                               r2
                            Doublet :                                                                         ð8:28Þ
                                                      x2 y2                               2xy
                                              u ¼ 2m 2                          v ¼ 2m 2
                                                    ðx þ y2 Þ2                        ðx þ y2 Þ2
These four simple ﬂows can be superimposed to create more complicated ﬂows of interest. This will be
done in the following section.

 EXAMPLE 8.7 If the stream function of a ﬂow is given as c ¼ Ay, determine the potential function f.
     Solution: We use Eq. (8.19) to relate the stream function to the potential function assuming polar
 coordinates because of the presence of y :
                                   @f 1 @c A
                                      ¼      ¼ :         \ fðr; yÞ ¼ A ln r þ fðyÞ
                                   @r   r @y  r
 Now, use the second equation of Eq. 8.19:
                1 @f 1 df        @c                               df
                    ¼     ¼         ¼0       implying that           ¼0          so that   f ¼ Const
                r @y r dy        @r                               dy
 Since we are only interested in the derivatives of the potential functions to provide the velocity and pressure
 ﬁelds, we simply let the constant be 0 and thus
                                                   fðr; yÞ ¼ A ln r
 So, we see that the potential function can be found if the stream function is known. Also, the stream function can
 be found if the potential function is known.


8.4.3   Superimposed ﬂows
Combining the simple ﬂows introduced in Sec. 8.4.2 can create the most complicated plane ﬂows. Divide
a surface, such as an airfoil, into a large number of segments and place sources or sinks or doublets at the
center of each segment; in addition, add a uniform ﬂow and a vortex. Then, adjust the various strengths
so that the normal velocity component at each segment is 0 and the rear stagnation point is located at
the trailing edge. Obviously, a computer program must be used to create ﬂow around an airfoil.
We will not attempt it in this book but will demonstrate how ﬂow around a circular cylinder can be
created.
    Superimpose the stream functions of a uniform ﬂow and a doublet
                                                                      m sin y
                                                cðr; yÞ ¼ U1 y 2                                              ð8:29Þ
                                                                         r
The velocity component vr is (let y ¼ r sin yÞ
                                                   1 @c             m
                                            vr ¼        ¼ U1 cos y 2 2 cos y                                  ð8:30Þ
                                                   r @y             r
A circular cylinder exists if there is a circle on which there is no radial velocity component, i.e.,
vr ¼ 0 at r ¼ rc . Set vr ¼ 0 in Eq. (8.30) and ﬁnd
                                                                          rﬃﬃﬃﬃ
                                             m                              m
                                 U1 cos y     2
                                                cos y ¼ 0 so that   r c ¼                     ð8:31Þ
                                            rc                             U 1

At this radius vr ¼ 0 for all y and thus r ¼ rc is a streamline and the result is ﬂow around a cylinder. The
stagnation points occur where the velocity is 0; if r ¼ rc this means where vy ¼ 0; that is,
                                @c                     m sin y
                          vy ¼ 2         ¼ 2U1 sin y 2         ¼ 0:             \ 2 2U1 sin y ¼ 0             ð8:32Þ
                                 @r r rc                 rc2
Thus, two stagnation points occur at y ¼ 0– and 180–. The streamline pattern would appear as in the
sketch of Fig. 8.9. The circular streamline represents the cylinder, which is typically a solid, and hence
158                                         EXTERNAL FLOWS                                            [CHAP. 8



our interest is in the ﬂow outside the circle. For a real ﬂow, there would be a separated region on the rear
of the cylinder but the ﬂow over the front part (perhaps over the whole front half, depending on the
Reynolds number) could be approximated by the potential ﬂow shown in the sketch. The velocity that
exists outside the thin boundary layer that would be present on a real cylinder would be approximated as
the velocity on the cylinder of the potential ﬂow, i.e., it would be given by
                                                   vy ¼ 22U1 sin y                                         ð8:33Þ
The pressure that would exist on the cylinder’s surface would be found by applying Bernoulli’s equation
between the stagnation point where the pressure is p0 and V ¼ 0 and some general point at rc and y:
                                                               v2
                                                   p c ¼ p0 2 r y                                          ð8:34Þ
                                                                2


                                                        y




                u
                                                                r

                                                                                               x
                                                               rc




        Figure 8.9 Potential ﬂow around a circular cylinder. (The dashed lines are lines of constant f.)


This pressure would approximate the actual pressure for high-Reynolds number ﬂows up to separation.
For low-Reynolds number ﬂows, say below Re < 50, viscous effects are not conﬁned to a thin boundary
layer so potential ﬂow does not approximate the real ﬂow.
    To create ﬂow around a rotating cylinder, as in Fig. 8.10, add a vortex to the stream function of
Eq. (8.29) (use the cylinder’s radius of Eq. (8.31)):
                                                                    sin y G
                                        cðr; yÞ ¼ U1 y 2 rc2 U1          þ ln r                            ð8:35Þ
                                                                      r   2p
recognizing that the cylinder’s radius remains unchanged since a vortex does not effect vr . The
stagnation points change, however, and are located by letting vy ¼ 0 on r ¼ rc :
                                        @c                         sin y  G
                                vy ¼            ¼ U1 sin y 2 rc2 U1 2 2       ¼0                           ð8:36Þ
                                        @r r¼rc                      rc  2prc
This locates the stagnation points at
                                                                2G
                                                  y ¼ sin21                                                ð8:37Þ
                                                              4prc U1
If G > 4prc U1 , Eq. (8.37) is not valid (this would give jsin yj41) so the stagnation point exists off the
cylinder as sketched in Fig. 8.10(b). The angle y ¼ 270o and the radius are found by setting the velocity
components equal to 0. Problems will illustrate.
CHAP. 8]                                        EXTERNAL FLOWS                                                      159

                                                                                      y
                                      y


                                                                                                  x
                                                 x                                        rc
                                          rc




                           (a)   < 4 U rc                                       (b)   > 4 U rc


                                   Figure 8.10 Flow around a rotating cylinder.

      The pressure on the surface of the rotating cylinder using Bernoulli’s equation is found to be
                                                 v2         U2              G    2
                                      pc ¼ p0 2 r c ¼ p0 2 r 1 2 sin y þ                                          ð8:38Þ
                                                  2          2           2prc U1
If this is integrated around the surface of the cylinder, the component in the ﬂow direction, the drag,
would be 0 and the component normal to the ﬂow direction, the lift, would be
                                                       2p
                                                       Z
                                                FL ¼        pc sin yrc dy ¼ rU1 G                                 ð8:39Þ
                                                       0

It turns out that this expression for the lift is applicable for all cylinders including the airfoil. It is known
as the Kutta–Joukowski theorem; it is exact for potential ﬂows and is an approximation for real ﬂows.

 EXAMPLE 8.8 A 20-cm-diameter cylinder rotates clockwise at 200 rpm in an atmospheric air stream ﬂowing
 at 10 m=s. Locate any stagnation points and ﬁnd the minimum pressure.
                                                             H
      Solution: First, let us ﬁnd the circulation. It is G ¼ L V·ds, the velocity rc O multiplied by 2prc ; recognizing
 that V is in the direction of ds on the cylinder’s surface:
                                 G ¼ 2prc2 O ¼ 2p · 0:12 · ð200 · 2p=60Þ ¼ 1:318 m2 =s
 This is less than 4prc U1 ¼ 12:57 m2 =s so the two stagnation points are on the cylinder at
                                        2G              21:318
                          y ¼ sin21           ¼ sin21               ¼ 26–      and         186–
                                      4prc U1         4p · 0:1 · 10
 The minimum pressure exists at the very top of the cylinder (Fig. 8.10 and Eq. (8.38)), so let us apply Bernoulli’s
 equation between the free stream and the point on the top where y ¼ 90– :
                                      U12      U2              G     2
                          pc ¼ p=1 þ r    2 r 1 2 sin y þ
                                        2       2           2prc U1
                                             "                                #
                                         102              –       1:318     2
                             ¼ 0 þ 1:2 ·      1 2 2 sin 90 þ                    ¼ 2233 Pa
                                          2                   2p · 0:1 · 10

 using r ¼ 1.2 kg=m3 for atmospheric air. (If the temperature is not given, assume standard conditions.)


8.5     BOUNDARY-LAYER FLOW
8.5.1    General Information
Undoubtedly, the identiﬁcation of a boundary layer resulted from interest in the airfoil. The observation
that for a high-Reynolds number ﬂow all the viscous effects can be conﬁned to a thin layer of ﬂuid near
the surface gave rise to boundary-layer theory. Outside the boundary layer the ﬂuid acts as an inviscid
ﬂuid since viscous effects are negligible. So, the potential ﬂow theory of the previous section provides the
160                                                        EXTERNAL FLOWS                                               [CHAP. 8



velocity just outside the boundary layer and the pressure at the surface. In this section, we will provide
both the integral and the differential equations needed to solve for the velocity distribution. But, since
those equations are difﬁcult to solve for curved surfaces, we will restrict our study to ﬂow on a ﬂat plate
with zero pressure gradient.
     The outer edge of a boundary layer cannot be observed so we arbitrarily assign its thickness dðxÞ; as
shown in Fig. 8.11, to be the locus of points where the velocity is 99 percent of the free-stream velocity
U(x) (the velocity at the surface from the inviscid ﬂow solution). Recall also that the pressure at the
surface is not inﬂuenced by the presence of the thin boundary layer so it is the pressure on the surface
from the inviscid ﬂow. Note that the xy-coordinate system is oriented so that the x-coordinate is along
the surface; this is done for the boundary-layer equations and is possible because the boundary layer is so
thin that curvature terms do not appear in the describing equations.

                                            Boundary layer                        y
                                            velocity distribution                            Inviscid flow
                                                                                             velocity distribution
                                                Edge of
                                                boundary layer
                                      (x)
                                                                                                           y
                        y
                                                                                      u(x)
                                                                                                               x
                            x

                                                     Figure 8.11 A boundary layer.

     A boundary layer is laminar near the leading edge or near a stagnation point. It undergoes transition
at xT to a turbulent ﬂow if there is sufﬁcient length, as shown in Fig. 8.12. This transition occurs when
the critical Reynolds number U1 xT =n ¼ 5 · 105 on smooth rigid ﬂat plates in a zero pressure-gradient
ﬂow with low free-stream ﬂuctuation intensity* and U1 xT =n ¼ 3 · 105 for ﬂow on rough ﬂat plates or
with high free-stream ﬂuctuation intensity (intensity of at least 0.1). The transition region from laminar
to turbulent ﬂow is relatively short and is typically ignored so a turbulent ﬂow is assumed to exist at the
location of the ﬁrst burst.

                                                                    First burst       Burst rate
                       u              Laminar                        appears                                Turbulent
                                                                                       is const
                                       flow                                                                   flow
                                                             (x)


                                               xT
                                                                                         Viscous wall
                                                                                           layer thickness n(x)

                                    Figure 8.12 A boundary layer undergoing transition.

     The turbulent boundary layer thickens more rapidly than a laminar boundary layer and contains
signiﬁcantly more momentum (if it has the same thickness), as observed from a sketch of the velocity
proﬁles in Fig. 8.13. It also has a much greater slope at the wall resulting in a much larger wall shear
stress. The instantaneous turbulent boundary layer varies randomly with time and position and can be
20 percent thicker or 60 percent thinner at any position at an instant in time or at any time at a given
position. So, we usually sketch a time-average boundary-layer thickness. The viscous wall layer with
thickness dn in which the viscous effects are thought to be concentrated in a turbulent boundary layer,
is quite thin when compared with the boundary-layer thickness, as sketched.
     It should be kept in mind that a turbulent boundary layer is very thin for most applications. On a
ﬂat plate with U1 ¼ 5 m=s the boundary layer would be about 7 cm thick after 4 m. If this were drawn to


*
                                pﬃﬃﬃ
    Fluctuation intensity is     u02 =U1 [see Eq. (7.67)].
CHAP. 8]                                                   EXTERNAL FLOWS                                                                                    161


                                                       y
                                                                     Average boundary-
                                                                      layer thickness


                                                                                  Laminar
                                                                                   profile
                                                                                                                      Turbulent
                                 (x)                          u(y)                                                     profile
                                               n (x)




                                 Figure 8.13      Laminar and turbulent boundary-layer proﬁles.

scale, the fact that the boundary layer is very thin would be quite apparent. Because the boundary layer
is so thin and the velocity varies from 0 at the wall to U(x) at the edge of the boundary layer, it is possible
to approximate the velocity proﬁle in the boundary layer by assuming a parabolic or cubic proﬁle for a
laminar layer and a power-law proﬁle for a turbulent layer. With the velocity proﬁle assumed, the
integral equations, which follow, give the quantities of interest.

8.5.2   The Integral Equations
An inﬁnitesimal control volume of thickness dx is shown in Fig. 8.14 with mass ﬂuxes in (b) and
momentum ﬂuxes in (d ). The continuity equation provides the mass ﬂux m_ top that crosses into the
control volume through the top; it is
                                                                  0      1
                                                                    d
                                                               @ B Z
                                                                         C
                                     m_ top ¼ m_ out 2 m_ in ¼    @ ru dyAdx                 ð8:40Þ
                                                               @x
                                                                                                         0

The x-component momentum equation (Newton’s second law) is written as
                                X
                                   Fx ¼ mo_mout 2 mo_min 2 mo_mtop                                                                                         ð8:41Þ
which becomes
                                                          0      1            0    1
                                                            d                   d
                                                       @ BZ 2 C            @ BZ    C
                                       2t0 dx 2 d dp ¼    @ ru dyAdx 2 UðxÞ @ ru dyAdx                                                                     ð8:42Þ
                                                       @x                  @x
                                                                      0                                                       0

                                                                                      .
                                                                                  m top
                        U(x)

                                                                          .                                  .
                                                                                                             mout =       udy +             udy dx
                                                                      m in =              udy                                         x0
                                          +d                                                                          0
                                                                                  0

                                 dx
                        (a) Control volume                                                      (b) Mass flux

                 ( p + d p/2)d                                                 .
                                                                              mom         top
                                                                                                                .
                                                                                                             mom out =            u2 dy +        u2 dydx
                   p                      ( p + dp )( + d )                                                                                 x0
                                                                .
                                                              mom =               u2 dy
                                                                                                                          0
                                                                     in
                                                                              0


                                  0dx
                        (c) Forces                                                              (d) Momentum flux


                         Figure 8.14 The inﬁnitesimal control volume for a boundary layer.
162                                             EXTERNAL FLOWS                                  [CHAP. 8



where we have neglected* p dd and dp dd since they are of smaller order than the remaining terms; we also
used mo_mtop ¼ UðxÞm_ top : Divide by (2dx) and obtain the von Karman integral equation:
                                                                 d              d
                                              dp        d Z           d Z 2
                                        t0 þ d ¼ rUðxÞ      u dy 2 r     u dy                       ð8:43Þ
                                              dx       dx            dx
                                                                 0              0

Ordinary derivatives have been used since after the integration only a function of x remains (d is a
function of x). Also, the density r is assumed constant over the boundary layer.
    For ﬂow on a ﬂat plate with zero pressure gradient, i.e., UðxÞ ¼ U1 and @p=@x ¼ 0; Eq. (8.43) can be
put in the simpliﬁed form
                                                             d
                                                          d Z
                                                  t0 ¼ r      uðU1 2 uÞdy                           ð8:44Þ
                                                         dx
                                                             0

If a velocity proﬁle u(x, y) is assumed for a particular ﬂow, Eq. (8.44) along with t0 ¼ m@u=@yjy¼0 allows
both d(x) and t0(x) to be determined.
     Two additional lengths are used in the study of boundary layers. They are the displacement thickness
dd and the momentum thickness y deﬁned by
                                                             d
                                                           1Z
                                                    dd ¼      ðU 2 uÞdy                             ð8:45Þ
                                                           U
                                                             0

                                                            d
                                                        1 Z
                                                    y ¼ 2 uðU 2 uÞdy                                ð8:47Þ
                                                       U
                                                            0

The displacement thickness is the distance the streamline outside the boundary layer is displaced because
of the slower moving ﬂuid inside the boundary layer. The momentum thickness is the thickness of a ﬂuid
layer with velocity U that possesses the momentum lost due to viscous effects; it is often used as the
characteristic length for turbulent boundary-layer studies. Note that Eq. (8.44) can be written as
                                                                     dy
                                                        t0 ¼ rU12                                   ð8:48Þ
                                                                     dx


8.5.3    Laminar and Turbulent Boundary Layers
The boundary conditions that must be met for the velocity proﬁle in a boundary layer on a ﬂat plate with
a zero pressure gradient are
                                                      u¼0            at y ¼ 0
                                                      u ¼ U1         at y ¼ d
                                                     @u                                             ð8:49Þ
                                                        ¼0           at y ¼ d
                                                     @y

Laminar boundary layers
For a laminar boundary layer, we can either solve the x-component Navier– Stokes equation or we can
assume a proﬁle such as a parabola. Since the boundary layer is so thin, an assumed proﬁle gives rather
good results. Let us assume the parabolic proﬁle
                                              u
                                                ¼ A þ By þ Cy2                                   ð8:50Þ
                                            U1

*
    p dd is small since we assume d to be small and dd is then an order smaller.
CHAP. 8]                                    EXTERNAL FLOWS                                   163



The above three boundary conditions require
                                                 0¼A
                                                 1 ¼ A þ Bd þ Cd2                          ð8:51Þ
                                                 0 ¼ B þ 2Cd
the solution of which is
                                                                2           1
                                          A¼0           B¼             C¼                  ð8:52Þ
                                                                d           d2
resulting in the laminar-ﬂow velocity proﬁle
                                                    u    y           y2
                                                      ¼2                                   ð8:53Þ
                                                   U1    d           d2
Substitute this proﬁle into the integral equation (8.44) and integrate:
                                      d                 !            !
                                   d Z      2y y2              2y y2     2    dd
                             t0 ¼      rU12   2             1 2 þ 2 dy ¼ rU12              ð8:54Þ
                                  dx        d d2               d d      15    dx
                                      0

The wall shear stress is also given by
                                                      @u           2
                                                t0 ¼ m       ¼ mU1                         ð8:55Þ
                                                      @y y¼0       d

Equate the two expressions for t0 above to obtain
                                                                15n
                                                   d dd ¼           dx                     ð8:56Þ
                                                                U1
Integrate the above with d ¼ 0 at x ¼ 0 and ﬁnd the expression for dðxÞ
                                                                    rﬃﬃﬃﬃ
                                                                      nx
                                                  dðxÞ ¼ 5:48                              ð8:57Þ
                                                                     U1
                                                                         pﬃﬃﬃﬃﬃﬃﬃﬃﬃ
This is about 10 percent higher than the more accurate solution of 5 nx=U1 found by solving the
Navier– Stokes equation in the next Sec. 8.5.4.
    The wall shear stress is found by substituting Eq. (8.57) into Eq. (8.55) and is
                                                              rﬃﬃﬃﬃﬃﬃ
                                                                 n
                                           t0 ðxÞ ¼ 0:365rU12                             ð8:58Þ
                                                                xU1
The local skin friction coefﬁcient cf is often of interest and is
                                                                    rﬃﬃﬃﬃﬃﬃ
                                                       t0              n
                                           cf ðxÞ ¼ 1     2
                                                            ¼ 0:730                        ð8:59Þ
                                                    2 rU1
                                                                     xU1
The skin friction coefﬁcient Cf is a dimensionless drag force and is
                                                            R
                                                            L
                                                          t0 dx        rﬃﬃﬃﬃﬃﬃ
                                               FD       0                 n
                                       Cf ¼ 1     2L
                                                     ¼ 1     2L
                                                                ¼ 1:46                     ð8:60Þ
                                            2 rU 1     2 rU 1           U 1 L
The more accurate coefﬁcients for t0, cf, and Cf are 0.332, 0.664, and 1.33, respectively, so the
assumption of a parabolic velocity proﬁle for laminar boundary-layer ﬂow has an error of about
10 percent.
164                                          EXTERNAL FLOWS                                            [CHAP. 8



Turbulent boundary layers
For a turbulent boundary layer we often assume a power-law velocity proﬁle* as we did for ﬂow in a
pipe. It is
                                                   8
                                u      y 1=n       <7         Rex < 107
                                   ¼           n ¼ 8 10 < Rex < 108
                                                          7                                 ð8:61Þ
                               U1      d           :
                                                     9 108 < Rex < 109
where Rex ¼ U1 x=n: Substitute this velocity proﬁle with n ¼ 7 into Eq. (8.44) and integrate to obtain
                                                                  7      dd
                                                         t0 ¼       rU12                                  ð8:62Þ
                                                                 72      dx
The power-law velocity proﬁle yields t0 ¼ m @ u=@y ¼ 1 at y ¼ 0 so it cannot be used at the wall. A
second expression for t0 is needed; we select the Blasius formula, given by
                                         n 1=4                                                n 1=4
                           cf ¼ 0:046                      giving          t0 ¼ 0:023rU12                 ð8:63Þ
                                        U1 d                                                 U1 d

Combine Eqs. (8.62) and (8.63) and ﬁnd
                                                                           n 1=4
                                               d1 4 dd ¼ 0:237
                                                 =
                                                                                 dx                       ð8:64Þ
                                                                          U1

Assume a turbulent ﬂow from the leading edge (the laminar portion is often quite short) and integrate
from 0 to x:
                                                n 1=5
                                   d ¼ 0:38x               Rex < 107                           ð8:65Þ
                                              U1 x

Substitute this into the Blasius formula and ﬁnd the local skin friction coefﬁcient to be
                                                           n 1=5
                                         cf ¼ 0:059                          Rex < 107                    ð8:66Þ
                                                          U1 x
The skin friction coefﬁcient becomes
                                                             n      1=5
                                         Cf ¼ 0:073                           Rex < 107                   ð8:67Þ
                                                          U1 L
The above formulae can actually be used up to Re ¼ 108 without substantial error.
    If there is a signiﬁcant laminar part of the boundary layer, it should be included. If transition occurs
at Recrit ¼ 5 · 105 , then the skin friction coefﬁcient should be modiﬁed as
                                                     n     1=5             n
                                  Cf ¼ 0:073                    21700                 Rex < 107           ð8:68Þ
                                                U1 L                      U1 L
For a rough plate, Recrit ¼ 3 · 105 and the constant of 1700 should be replaced with 1060.
    The displacement and momentum thicknesses can be evaluated using the power-law velocity proﬁle
to be
                                                    n 1=5
                                      dd ¼ 0:048x
                                                  U1 x
                                                               Re < 107                      ð8:69Þ
                                                    n 1=5
                                      y ¼ 0:037x
                                                  U1 x



*
 There are other more detailed and complicated methods for considering the turbulent boundary layer. They are all
empirical since there are no analytical solutions of the turbulent boundary layer.
CHAP. 8]                                        EXTERNAL FLOWS                                               165



     There are additional quantities often used in the study of turbulent boundary layers. We will
introduce two such quantities here. One is the shear velocity ut deﬁned to be
                                                        rﬃﬃﬃ
                                                          t
                                                  ut ¼ 0                                    ð8:70Þ
                                                          r
It is a ﬁctitious velocity and often appears in turbulent boundary-layer relationships. The other is the
thickness dn of the highly ﬂuctuating viscous wall layer, displayed in Figs. 8.12 and 8.13. It is in this very
thin layer that the turbulent bursts are thought to originate. It has been related to the shear velocity
through experimental observations by
                                                           5n
                                                     dn ¼                                               ð8:71Þ
                                                           ut


 EXAMPLE 8.9 Atmospheric air at 20–C ﬂows at 10 m=s over a smooth, rigid 2-m-wide, 4-m-long ﬂat plate
 aligned with the ﬂow. How long is the laminar portion of the boundary layer? Predict the drag force on the
 laminar portion on one side of the plate.
      Solution: Assuming the air to free of high-intensity disturbances, use the critical Reynolds number to be
 5 · 105 ; i.e.,
                                                   U1 xT
                                                         ¼ 5 · 105
                                                    n
 so that
                                       xT ¼ 5 · 105 · 1:51 · 10 5 =10 ¼ 0:755 m

 The drag force, using Eq. (8.60) and a coefﬁcient of 1.33 rather than the 1.46 (the coefﬁcient of 1.33 is more
 accurate as stated), is
                                             rﬃﬃﬃﬃﬃﬃ
                                1:33             n
                          FD ¼       rU12 Lw
                                  2            U1 L
                                                               sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                                2               1:51 · 10 5
                              ¼ 0:665 · 1:2 · 10 · 0:755 · 2 ·                 ¼ 0:017 N
                                                                 10 · 0:755
 a rather small force.



 EXAMPLE 8.10 Water at 20–C ﬂows over a 2-m-long, 3-m-wide ﬂat plate at 12 m=s. Estimate the shear
 velocity, the viscous wall layer thickness, and the boundary-layer thickness at the end of the plate (assume a
 turbulent layer from the leading edge). Also, predict the drag force on one side of the plate.
      Solution: The Reynolds number is Re ¼ U1 x=n ¼ 12 · 2=10 6 ¼ 2:4 · 107 . So, with n ¼ 7 Eq. (8.66)
 provides
                                                                                !0:2
                            0:059         n 1=5                           10 6
                       t0 ¼       rU12          ¼ 0:0295 · 1000 · 122 ·              ¼ 142 Pa
                              2         U1 x                             12 · 2

 The shear velocity is then
                                               rﬃﬃﬃ sﬃﬃﬃﬃﬃﬃ
                                                t     142
                                           ut ¼ 0 ¼         ¼ 0:377 m=s
                                                r    1000
 The viscous wall layer thickness is
                                                5n 5 · 10 6
                                         dn ¼      ¼        ¼ 1:33 · 10 5 m
                                                ut   0:377
 The boundary-layer thickness is, assuming a turbulent layer from the leading edge
                                                                    !0:2
                                         n 1=5                 10 6
                            d ¼ 0:38x          ¼ 0:38 · 2 ·              ¼ 0:0254 m
                                       U1 x                   12 · 2
166                                            EXTERNAL FLOWS                                    [CHAP. 8



        The drag force on one side of the plate is
                                      0:073          n 1=5
                               FD ¼         rU12 Lw
                                        2           U1 L
                                                                           !0:2
                                                                      10 6
                                   ¼ 0:0365 · 1000 · 122 · 2 · 3 ·              ¼ 1050 N
                                                                     12 · 2


8.5.4    Laminar Boundary-Layer Differential Equation
The laminar ﬂow solution given in Sec. 8.5.3 was an approximate solution. In this section, we will
present a more accurate solution using the x-component Navier –Stokes equation. It is, for horizontal
plane ﬂow (no z-variation)
                                                                    !
                                      @u    @u    1 @p     @2u @2u
                                    u    þv    ¼2      þn      þ                               ð8:72Þ
                                      @x    @y    r @x    @x2 @y2
We can simplify this equation and actually obtain a solution. First, recall that the boundary layer is very
thin so that there is no pressure variation normal to the boundary layer, i.e., the pressure depends on x
only and it is the pressure at the wall from the potential ﬂow solution. Since the pressure is considered
known, the unknowns in Eq. (8.72) are u and v. The continuity equation
                                                        @u @v
                                                          þ   ¼0                                     ð8:73Þ
                                                        @x @y
also relates u and v. So, we have two equations and two unknowns. Consider Figs. 8.12 and 8.13; u
changes from 0 to U1 over the very small distance d resulting in very large gradients in the y-direction,
whereas u changes quite slowly in the x-direction (holding y ﬁxed). Consequently, we conclude that
                                                        @2u    @2u
                                                            >>                                       ð8:74Þ
                                                        @y2    @x2
The differential equation (8.72) can then be written as
                                                   @u    @u    1 dp   @2u
                                               u      þv    ¼2      þn 2                             ð8:75Þ
                                                   @x    @y    r dx   @y
The two acceleration terms on the left are retained since v may be quite small but the gradient @u=@y is
quite large and hence the product is retained. Equation (8.75) is the Prandtl boundary-layer equation.
    For ﬂow on a ﬂat plate with dp=dx ¼ 0; and in terms of the stream function c (recall that u ¼ @c=@y
and v ¼ @c=@x), Eq. (8.75) takes the form
                                                @c @ 2 c @c @ 2 c   @3c
                                                        2       2
                                                                  ¼n 3                               ð8:76Þ
                                                @y @x@y @x @y       @y
If we let (trial-and-error and experience was used to ﬁnd this transformation)
                                                                  rﬃﬃﬃﬃ
                                                                   U
                                          x¼x      and     Z¼y 1                                     ð8:77Þ
                                                                    nx
Eq. (8.76) becomes*
                                                                        sﬃﬃﬃﬃ
                                        1 @c 2 @c @ 2 c @c @ 2 c   @ 3 c U1
                                              þ         2        ¼n 3                                ð8:78Þ
                                       2x @Z    @Z @x @Z @x @Z2    @Z     nx

This equation appears more formidable than Eq. (8.76), but if we let
                                                   pﬃﬃﬃﬃﬃﬃﬃ
                                          cðx; ZÞ ¼ U1 nxFðZÞ                                        ð8:79Þ
                                   rﬃﬃﬃﬃ
*               @c @c @Z @c @x @c U1
    Note that      ¼      þ     ¼
                @y   @Z @y @x @y @Z nx
CHAP. 8]                                         EXTERNAL FLOWS                                              167


and substitute this into Eq. (8.78), there results
                                                          d2 F   d3 F
                                                      F      2
                                                               þ2 3 ¼0                                     ð8:80Þ
                                                          dZ     dZ
This ordinary differential equation can be solved numerically with the appropriate boundary conditions.
They are
                                   F ¼ F0 ¼ 0 at Z ¼ 0              and       F0 ¼ 1 at large Z            ð8:81Þ
which result from the velocity components
                                                 @c
                                                 u¼  ¼ U1 F0 ðZÞ
                                                 @y
                                                           rﬃﬃﬃﬃﬃﬃ                                     ð8:82Þ
                                                   @c 1 nU1 0
                                             v¼        ¼          ðZF FÞ
                                                   @x 2       x
    The numerical solution to the boundary-value problem is presented in Table 8.5. The last two columns
allow the calculation of v and t0, respectively. We deﬁned the boundary-layer thickness to be that thickness
where u ¼ 0:99U1 and we observe that this occurs at Z ¼ 5, so, from this numerical solution
                                                            rﬃﬃﬃﬃ
                                                              nx
                                                      d¼5                                              ð8:83Þ
                                                              U1
Also
                                                                    rﬃﬃﬃﬃ
                                              @u @u @Z               U1
                                                  ¼       ¼ U1 F 00                                    ð8:84Þ
                                              @y @Z @y                nx
so that the wall shear stress for this boundary layer with dp=dx ¼ 0 is
                                                                     rﬃﬃﬃﬃﬃﬃ
                                                  @u                   nU1
                                           t0 ¼ m        ¼ 0:332rU1                                    ð8:85Þ
                                                  @y y¼0                  x
The friction coefﬁcients are
                                                      rﬃﬃﬃﬃﬃﬃ                           rﬃﬃﬃﬃﬃﬃ
                                                         n                                 n
                                         cf ¼ 0:664                       Cf ¼ 1:33                        ð8:86Þ
                                                       U1 x                              U1 L
and the displacement and momentum thicknesses are (these require numerical integration)
                                           rﬃﬃﬃﬃ                rﬃﬃﬃﬃ
                                             nx                   nx
                                 dd ¼ 1:72            y ¼ 0:644                                            ð8:87Þ
                                            U1                    U1

                       Table 8.5      The Laminar Boundary-Layer Solution with dp/dx ¼ 0
                         pﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                    Z ¼ y U1 =nx             F            F0 ¼ u=U1           1
                                                                              2 ðZF
                                                                                    0
                                                                                          FÞ        F 00
                          0                  0                  0                   0             0.3321
                          1               0.1656           0.3298               0.0821            0.3230
                          2               0.6500           0.6298               0.3005            0.2668
                          3               1.397            0.8461               0.5708            0.1614
                          4               2.306            0.9555               0.7581            0.0642
                          5               3.283            0.9916               0.8379            0.0159
                          6               4.280            0.9990               0.8572            0.0024
                          7               5.279            0.9999               0.8604            0.0002
                          8               6.279            1.000                0.8605            0.0000
168                                             EXTERNAL FLOWS                                            [CHAP. 8



 EXAMPLE 8.11 Air at 30–C ﬂows over a 2-m-wide, 4-m-long ﬂat plate with a velocity of 2 m=s and dp=dx ¼ 0:
 At the end of the plate, estimate (a) the wall shear stress, (b) the maximum value of v in the boundary layer, and
 (c) the ﬂow rate through the boundary layer. Assume laminar ﬂow over the entire length.
      Solution: The Reynolds number is Re ¼ U1 L=n ¼ 2 · 4=1:6 · 10 5 ¼ 5 · 105 so laminar ﬂow is
 reasonable.
 (a) The wall shear stress (this requires F00 at the wall) at x ¼ 4 m is
                                      rﬃﬃﬃﬃﬃﬃ                        sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                        nU1                           1:6 · 10 5 · 2
                      t0 ¼ 0:332rU1           ¼ 0:332 · 1:164 · 2 ·                     ¼ 0:00219 Pa
                                         x                                    4
 (b) The maximum value of v requires the use of ðZF0 FÞ: Its maximum value occurs at the outer edge of the
 boundary layer and is 0.860. The maximum value of v is
                              rﬃﬃﬃﬃﬃﬃ             sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                            1 nU1 0           1    1:6 · 10 5 · 2
                        v¼           ðZF FÞ ¼ ·                      · 0:860 ¼ 0:0012 m=s
                            2    x            2            4
 Note the small value of v compared to U1 ¼ 2 m=s:
 (c) To ﬁnd the ﬂow rate through the boundary layer, integrate the u(y) at x ¼ 4 m

                                 Zd         Z5           rﬃﬃﬃﬃ
                                                dF          nx
                           Q¼      u · 2dy ¼ U1    ·2·          dZ
                                                dZ          U1
                                 0           0
                                                  sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ 3:283
                                                   1:6 · 10 5 · 4 Z
                                           ¼ 2·2·                          dF ¼ 0:0743 m3 =s
                                                           2
                                                                       0




                                               Solved Problems

8.1   A 20-cm-diameter sphere with speciﬁc gravity S ¼ 1.06 is dropped in 20–C water. Estimate the
      terminal velocity if it is (a) smooth and (b) rough.
           At terminal velocity the sphere will not be accelerating so the forces, including the buoyant force
           [Eq. (2.24)], will sum as follows
                                                    W ¼FD þ FB
                                                             1
                                      gsphere · volume ¼ CD · rAV 2 þ gwater · volume
                                                             2
           Using gsphere ¼ Ssphere gwater there results
                                            g                                   4
                                        CD · water · pR2 · V 2 ¼ ðS 2 1Þgwater · pR3
                                              2g                                3
           Substituting in the known values gives
                                      8RðS 1Þg 1=2   8 · 0:1 · ð1:06 2 1Þ · 9:81 1=2 0:396
                               V¼                  ¼                                ¼ pﬃﬃﬃﬃ
                                        3CD                      3CD                   CD
           (a) For a smooth sphere, Fig. 8.2 suggests we assume for 2 · 104 , Re , 2 · 105 that CD ¼ 0:6: Then
                             0:396                                     VD 0:511 · 0:2
                         V ¼ pﬃﬃﬃﬃ ¼ 0:511 m=s            and   Re ¼      ¼           ¼ 1:02 · 105
                               0:6                                      n    1026
           Hence, the terminal velocity of 0.511 m=s is to be expected.

           (b) For a rough sphere, Fig. 8.2 suggests that for Re > 105 we assume CD > 0.3.
           Then
                              0:396                                    VD 0:723 · 0:2
                          V ¼ pﬃﬃﬃﬃ ¼ 0:723 m=s           and   Re ¼      ¼           ¼ 1:4 · 105
                                0:3                                     n    1026
CHAP. 8]                                       EXTERNAL FLOWS                                                           169


           This is quite close to CD ¼ 0.3 so it is an approximate value for the velocity, almost 50 percent greater
           than the velocity of a smooth sphere. A golf ball is roughened for this very reason: a higher velocity over
           much of its trajectory results in a greater ﬂight distance.

8.2   Calculate the power required to move a 10-m-long, 10-cm-diameter smooth circular cylinder that
      protrudes vertically from the deck of a ship at a speed of 30 kn (15.4 m=s). Then streamline the
      cylinder and recalculate the power.
           First, ﬁnd the Reynolds number. It is
                                                    VD 15:4 · 0:1
                                             Re ¼      ¼            ¼ 9:6 · 104
                                                     n   1:6 · 10 5
           The drag coefﬁcient found using Fig. 8.2 and Table 8.1 to be
                                                    CD > 1:2 · 0:85 ¼ 1:02
           The power is then

                               _ ¼ FD · V ¼ 1 CD rV 3 Aprojected
                               W
                                            2
                                            1
                                          ¼ · 1:02 · 1:2 · 15:43 · p · 0:1 · 10 ¼ 7020 W
                                            2
           For the streamlined cylinder, the drag coefﬁcient reduces to
                                                  CD > 0:06 · 0:85 ¼ 0:051
           and the power to

                               _ ¼ FD · V ¼ 1 CD rV 3 Aprojected
                               W
                                            2
                                            1
                                          ¼ · 0:051 · 1:2 · 15:43 · p · 0:1 · 10 ¼ 350 W
                                            2
           The effect of streamlining is to signiﬁcantly reduce the drag coefﬁcient.

8.3   Estimate the power required for the conventional airfoil of Example 8.2 to ﬂy at a speed of 150
      knots.
           Converted to m=s, the speed is V ¼ 150 · 1:688=3:281 ¼ 77:2 m=s: The power is the drag force times the
           velocity. The drag coefﬁcient from Fig. 8.7 is CD ¼ 0:3=47:6 ¼ 0:0063: The power is then

                         _ ¼ FD · V ¼ 1 rcLV 2 CD · V
                         W
                                      2
                                      1
                                    ¼ · 1:2 · 2 · 15 · 77:23 · 0:0063 ¼ 52 000 W          or 70 hp
                                      2

8.4   Show that streamlines and potential lines of an inviscid ﬂow intersect at right angles.
           If the streamlines and potential lines intersect at right angles, calculus says that the slope of a streamline
           will be the negative reciprocal of the potential line. We know that a velocity vector V is tangent to a
           streamline so that the slope of the streamline would be given by (Fig. 8.15)
                                                           v dy
                                                            ¼
                                                           u dx                                                    = const
                                                                                                    V
           The slope of a potential line is found from
                                                         @f      @f                                   u
                                                  df ¼      dx þ    dy ¼ 0
                                                         @x      @y                                       Figure 8.15
           so that for the potential line
                                                     dy    @f=@x         u
                                                        ¼2       ¼
                                                     dx    @f=@y         v
170                                              EXTERNAL FLOWS                                               [CHAP. 8



          Therefore, we see that the slope of the potential line is negative the reciprocal of the slope of the
          streamline. Hence, the potential line intersects the streamline at a right angle.

8.5   A tornado is approximated as an irrotational vortex (except near its ‘‘eye’’ where it rotates as
      a rigid body). Estimate the force tending to lift the ﬂat 5 m · 10 m roof off a building (the
      pressure inside the building is assumed to be atmospheric, i.e., 0) if the pressure on the roof is
      approximated by the pressure at r ¼ 4 m. The velocity at a distance of 60 m from the center
      of the building is observed to be 8 m=s.
          The circulation is found from Eq. (8.27) to be
                                       G ¼ 22prvy ¼ 22p · 60 · 8 ¼ 23320 m2 =s
          The velocity at r ¼ 4 m is then
                                                          G    2ð23320Þ
                                                vy ¼ 2       ¼          ¼ 132 m=s
                                                         2pr    2p · 4
          The pressure using Bernoulli’s equation is found to be, assuming
                                                     V1 ¼ 0 and p1 ¼ 0;

                                 V2        V=2                          1322
                            pþ      ¼ p=1 þ 1 r ¼ 0:            \p¼          · 1:2 ¼ 10 500 Pa
                                 2           2                           2
          The lifting force is then
                                         F ¼ pA ¼ 10 500 · 5 · 10 ¼ 520 000 N

8.6   A 40-cm-diameter cylinder rotates clockwise at 800 rpm in an atmospheric air stream ﬂowing at 8
      m=s. Locate any stagnation points and ﬁnd the minimum pressure.
                               H
          The circulation G ¼ L V·ds is the velocity rc O multiplied by 2prc since the constant velocity V is
          tangent to the cylinder’s surface. The circulation is calculated to be
                                  G ¼ 2prc2 O ¼ 2p · 0:22 · ð800 · 2p=60Þ ¼ 21:1 m2 =s
          This is slightly greater than 4prc U1 ¼ 20:1 m2 =s so a single stagnation point is off the cylinder at
          y ¼ 90– [Fig. 8.10(b)].
          The minimum pressure exists at the very top of the cylinder (Fig. 8.10), so let us apply Bernoulli’s
          equation (Eq. (8.38)) between the free stream where p ¼ 0 and the point on the top where y ¼ 90– :
                                            U21   U2             G     2
                             pc ¼ p=1 þ r       r 1 2 sin y þ
                                             2     2          2prc U1
                                               "                              #
                                            82              –      21:1     2
                                ¼ 0 þ 1:2 ·     1 2 2 sin 90 þ                  ¼ 607 Pa
                                            2                  2p · 0:2 · 8

          using r ¼ 1.2 kg=m3 assuming atmospheric air.

8.7   Move the U(x) under the integral symbol and rewrite the von Karman integral equation (8.43).
                                                                                                     RdðxÞ
          We differentiate a product: ðfgÞ0 ¼ fg0 þ gf 0 : For the present equation, we let gðxÞ ¼    0      ru dy (the y
          dependency integrates out) so that
                                                                        2       3
                                 d       Zd                   d
                                                            d Z          Zd
                                                                        6       7 dUðxÞ
                                   UðxÞ ru dy ¼ UðxÞ            ru dy þ 4 ru dy5
                                dx                         dx                       dx
                                            0                    0          0

          We can move U(x) under the integral since it is a function of x and the integration is on y so that Eq.
          (8.43) takes the form
CHAP. 8]                                         EXTERNAL FLOWS                                                   171


                                                       2      3
                                       dp  d            Zd
                                                             Zd           Zd
                                                       6      7 dUðxÞ d
                            t0 ðxÞ ¼ 2d þ UðxÞ ru dy 2 4 ru dy5      2       ru2 dy
                                       dx dx                     dx    dx
                                                             0               0                        0
                                                       d                            d
                                            dp       d Z                         dU Z
                                     ¼ 2d      þr    uðU 2 uÞdy 2 r                       u dy
                                            dx    dx                dx
                                                       0                              0

           This is an equivalent form of the von Karman integral equation. The density r is assumed constant in
           the thin boundary layer.

8.8   Estimate the drag force on one side of the ﬂat plate of Example 8.9: (a) Assuming turbulent ﬂow
      from the leading edge. (b) Including the laminar portion of the boundary layer.
           (a) Assuming a turbulent ﬂow from the leading edge, the boundary-layer thickness after 4 m is given by
               Eq. (8.65) and is
                                                                          !0:2
                                          n 1=5               1:51 · 10 5
                               d ¼ 0:38x        ¼ 0:38 · 4 ·                   ¼ 0:0789 m
                                         U1 x                    10 · 4

           The drag force on one side is then
                                                                          !1=5
                            1              0:073 1:51 · 10 5
                              Cf rU21 Lw ¼                                       · 1:2 · 102 · 4 · 2 ¼ 1:82 N
                            2                2      10 · 4

           Check the Reynolds number: Re ¼ 10 · 4=1:51 · 10 5 ¼ 2:65 · 106 :                         \ OK:

           (b) First, the boundary layers are sketched with the appropriate distances in Fig. 8.16. The laminar
               boundary-layer length is found using Recrit ¼ 5 · 105 :
                                               Re · n 5 · 105 · 1:51 · 10 5
                                        xL ¼         ¼                      ¼ 0:755 m
                                                U1             10


                                                           Turbulent bl
                                 Laminar bl


                                                 x
                                       xL
                                                                                 xT


                                                           Figure 8.16


           The laminar boundary-layer thickness at xL is, Eq. (8.57),
                                                 sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                       rﬃﬃﬃﬃ
                                          xn      0:755 · 1:51 · 1025
                                  d¼5        ¼5                            ¼ 0:00534 m
                                         U1                 10
           The location of the ﬁctitious origin of the turbulent boundary layer is found by calculating x0 in
           Fig. 8.16. It is found using Eq. (8.65) to be
                                                                   1=5
                                       d U1 1=5 0:00534    10
                           x04 5 ¼                                                               \ x0 ¼ 0:205 m
                             =
                                               ¼                25
                                                                       :
                                     0:38 n       0:38 1:51 · 10
           The distance xT is then xT ¼ L 2 xL þ x0 ¼ 4 2 0:755 þ 0:205 ¼ 3:45 m: The boundary-layer thickness
           at the end of the plate is
                                                                            !0:2
                                         n 1=5                  1:51 · 1025
                              d ¼ 0:38x        ¼ 0:38 · 3:45 ·                   ¼ 0:070 m
                                        U1 x                     10 · 3:45
172                                           EXTERNAL FLOWS                                                [CHAP. 8



           The drag force using Eq. (8.68) is found to be
                                  "                           #
                 1              1           n 1=5          n
                   Cf rU12 Lw ¼     0:073         21700         rU12 Lw
                 2              2         U1 L           U1 L
                                "                   !0:2                   #
                                  0:073 1:51 · 1025       1700 1:51 · 1025
                              ¼                         2                    · 1:2 · 102 · 4 · 2 ¼ 1:51 N
                                    2      10 · 4           2     10 · 4

           The drag force in (a) is about 20 percent too high. The laminar portion with its smaller shear stress
           reduces the overall drag force for short distances.

8.9    Verify that the velocity components are in fact given by Eq. (8.82) when solving the x-component
       Navier– Stokes equation for a laminar boundary-layer ﬂow.
           The x-component of the velocity is given by (use Eqs. (8.77) and (8.79))
                                                                        sﬃﬃﬃﬃ
                                 @c @c @x @c @Z pﬃﬃﬃﬃﬃﬃﬃ 0               U1
                            u¼       ¼        þ        ¼ U1 nxF ðZÞ ·         ¼ U1 F0 ðZÞ
                                 @y    @x @y @Z @y                        nx
           The y-component of the velocity is (use Eqs. (8.77) and (8.79))
                                                         rﬃﬃﬃﬃﬃﬃ                                rﬃﬃﬃﬃ !
                         @c      @c @x @c @Z           1 nU1            pﬃﬃﬃﬃﬃﬃﬃ         1 =     U
                    v ¼2     ¼2         2         ¼2             FðZÞ 2 U1 nxF0 ðZÞ 2 x23 2 y 1
                         @x       @x @x @Z @x          2     x                           2        n
                                   rﬃﬃﬃﬃﬃﬃ                     rﬃﬃﬃﬃ            rﬃﬃﬃﬃﬃﬃ
                                 1 nU1            1 pﬃﬃﬃﬃﬃﬃﬃ      U1 0        1 nU1 0
                             ¼2            FðZÞ þ    U1 nxy 1        F ðZÞ ¼           ðZF 2 FÞ
                                 2    x           2               nx          2    x
           where we have used x and j interchangeably since they are equal, as deﬁned.

8.10   Using the x-component Navier –Stokes equation (8.72), determine an additional boundary
       condition for laminar ﬂow over a ﬂat plate with zero pressure gradient.
           At the wall u ¼ v ¼ 0 so that the left-hand side of Eq. (8.72) is 0 for y ¼ 0. Also, on the wall since
           u ¼ 0, then @u=@x ¼ 0 and @ 2 u=@x2 ¼ 0: So, on the wall where y ¼ 0, Eq. (8.72) provides
                                                                  !
                                @u     @u      1 @r      @2u @2u                     @2u
                              u    þv      ¼        þv       þ           or     0 ¼
                                @x     @y      r @x      @x2 @y2                     @y2
           Therefore, in addition to the conditions of Eq. (8.49), we have the above condition at the wall. This
           condition could not be met with the parabolic proﬁle of Sec. 8.5.3, but if a cubic proﬁle were assumed,
           this condition would be required. If a straight-line proﬁle were assumed, a rather poor assumption, only
           the ﬁrst two conditions of Eq. (8.49) would be used.



                                      Supplementary Problems
Flow Around Blunt Bodies

8.11   Wind is blowing parallel to the long side of a large building with a ﬂat roof. Sketch the expected ﬂow looking
       down on the building from the top and looking at the building from the side. Show the expected regions of
       separation and reattachment points.

8.12   One semitruck has a wind deﬂector on top of the tractor and another one does not. Sketch a side view of the
       airﬂow for both semitrucks showing expected regions of separation, boundary layers, points of
       reattachment, and wakes.

8.13   Sketch the expected ﬂow around a sphere if (a) Re ¼ 4, (b) Re ¼ 4000, and (c) 40 000. Identify the separated
       region, the wake, any laminar or turbulent boundary layers, and the free stream.
CHAP. 8]                                       EXTERNAL FLOWS                                                      173


8.14   Describe the ﬂow to be expected around each of the following and estimate the drag coefﬁcient.
           (a) Air at 10–C ﬂowing around a 4.1-cm-diameter golf ball traveling at 35 m=s.
           (b) A 2-mm-diameter hailstone traveling through air at 210–C at a speed of 5 m=s.
           (c) A 1-mm-diameter grain of sand falling in stagnant 20–C water at 1 m=s.
           (d) Air at 20–C ﬂowing over an 8-cm-diamter sphere at a speed of 1 m=s.
           (e) Air at 0–C moving past a 10-cm-diameter, 4-m-high pole at 2 m=s.

8.15   A 2-cm-diameter sphere moves at Re ¼ 10 (separation is just occurring). What is its speed if it is submerged
       in (a) water at 10–C, (b) air at 40–C and 400 kPa, and (c) water at 90–C.

8.16   Water at 10–C ﬂows by a 2-mm-diameter wire with a speed of 2 m=s. Sketch the expected ﬂow showing the
       separated region, the wake, the boundary layer, and the free stream, should any of these exist.

8.17   A ﬂuid ﬂows by a ﬂat circular disk with velocity V normal to the disk at Re . 103. Estimate the drag
       coefﬁcient if (a) the pressure is assumed constant over the face of the disk and (b) if a parabolic pressure
       proﬁle exists on the front of the disk. Assume the pressure is 0 on the backside. Explain the results in light of
       the drag coefﬁcient of Table 8.1.

8.18   Atmospheric air at 20–C is ﬂowing at 10 m=s. Calculate the drag force on (a) a 10-cm-diameter smooth
       sphere, (b) a 10-cm-diameter, 80-cm-long smooth cylinder with free ends, (c) a 10-cm-diameter disk, and (d) a
       10-cm-wide, 20-cm-long rectangular plate. The velocity vector is normal to all objects.

8.19   A 220-cm-square sign is impacted straight on by a 50 m=s 10–C wind. Estimate the force on the sign. If the
       sign is held by a single 3-m-high post imbedded in concrete, what moment would exist at the base of the post?

8.20   A 20-cm-diameter smooth sphere is rigged with a strain gauge calibrated to measure the force on the sphere.
       Estimate the wind speed in 20–C air if the gauge measures (a) 4 N and (b) 0.5 N.

8.21   An automobile travels on a horizontal section of highway at sea level where the temperature is 20–C.
       Estimate the horsepower needed for a speed of 100 km/h. Make any needed assumptions.

8.22   Estimate the fuel savings for one year on a semitruck that travels 300 000 mi if fuel costs $2.50/gal if the
       truck installs both a deﬂector and a gap seal. Without the deﬂector and seal the truck averages 4 mi/gal. If an
       owner desires a three-year payback, how much could an owner pay for the deﬂector and seal?

8.23   A bike rider expends a certain amount of energy to travel 12 m=s while in the upright position. How fast will
       the rider travel with the same amount of energy expenditure if the bent over position is elected? Assume the
       rider’s projected area is reduced 25 percent in the bent-over position.

8.24   Estimate the speed of fall of a 6-ft man with arms and legs outstretched. Make reasonable assumptions. Now
       give the man a 6-m-diameter parachute and calculate his speed of descent, again making reasonable
       assumptions.

8.25   A blue spruce pine tree has the shape of a triangle which is 15 cm off the ground. The triangle has a
       maximum diameter of 6 m and is 10 m tall. Estimate the drag on the tree if it is exposed to a 25 m=s wind.
       Use CD ¼ 0.4 in your calculations.



Vortex Shedding, Cavitation, and Added Mass

8.26   Vortices are observed downstream of a 2-cm-diameter cylinder in 20–C atmospheric air. How far are the
       shed vortices apart downstream of the cylinder for an air speed of 5 m=s?
174                                            EXTERNAL FLOWS                                                 [CHAP. 8



8.27   A sensor is positioned downstream a short distance from a 4-cm-diameter cylinder in a 20–C atmospheric
       airﬂow. It senses vortex shedding at a frequency of 0.16 Hz. Estimate the airspeed.

8.28   A 10–C wind blows over 6-mm-diameter high-tension wires. Determine the range of velocities over which
       vortex shedding occurs. Could the shedding frequency be heard? Humans with good hearing can hear
       frequencies between 20 and 20 000 Hz. (Such vortex shedding when ice coats the wires can cause ‘‘galloping’’
       where the wires actually oscillate from the usual catenaries to inverted catenaries resulting in wire failure.)

8.29   What drag force acts on a 76-cm-diameter sphere towed 2 m below the surface of water at 20 m=s?

8.30   A 2.2-m-long hydrofoil with chord length 50 cm operates 40 cm below the water’s surface with an angle of
       attack of 4–. For a speed of 15 m=s determine the drag and lift and decide if cavitation exists on the
       hydrofoil.

8.31   A 40-cm-diameter sphere is released from rest under water. If it weighs 380 N in air, what is its initial
       acceleration under water if the added mass is neglected? If the added mass is included?

8.32   A 20-cm-diameter 4-m-long horizontal cylinder is released from rest under water. If it weighs 1500 N in air,
       what is its initial acceleration under water if the added mass is neglected? If the added mass is included?




Lift and Drag on Airfoils

8.33   Sketch the ﬂow ﬁeld around an airfoil that has stalled. Show the boundary layers, the separated region, and
       the wake.

8.34   Estimate the takeoff speed for an aircraft with conventional airfoils if the aircraft with payload weighs
       120 000 N and the effective wing area is 20 m2 assuming a temperature of (a) 30–C, (b) 10–C, and (c) 220–C.
       An angle of attack at takeoff of 8o is desired.

8.35   Rework Prob. 8.34 but assume a temperature of 20–C at a pressure of (a) 100 kPa, (b) 80 kPa, and (c) 60 kPa.

8.36   A 2000-kg airplane is designed to carry a 4000-N payload when cruising near sea level. For conventional
       airfoils with an effective wing area of 25 m2, estimate the takeoff speed for an angle of attack of 10–, the stall
       speed, and the power required (the airfoils account for approximately 40 percent of the drag) for a cruising
       speed of 80 m=s at an elevation of 2000 m.

8.37   If the aircraft of Prob. 8.36 were to ﬂy at 10 km, what power would be required?

8.38   The aircraft of Prob. 8.36 is to land with the airfoils at an angle of attack near stall. Estimate the minimum
       landing speed for no slotted ﬂaps, ﬂaps with one slot, and ﬂaps with two slots. Assume the effective wing
       area is the same for all three situations.




Potential Flow

8.39   Show that the difference of the stream functions between two streamlines is the ﬂow rate q per unit depth
       between the two streamlines, i.e., q ¼ c2 c1 .

8.40   Show that each of the following represents an incompressible plane ﬂow and ﬁnd the associated stream
       function or potential function.
CHAP. 8]                                     EXTERNAL FLOWS                                                     175


           (a) f ¼ 10y
           (b) c ¼ 20xy
           (c) f ¼ 10y (cylindrical coordinates)
           (d) c ¼ ð20=rÞsin y (cylindrical coordinates)

8.41   Does the velocity ﬁeld V ¼ ðxi þ yjÞ=ðx2 þ y2 Þ represent an incompressible ﬂow? If so, ﬁnd the velocity
       potential f and stream function c.

8.42   Show that the ﬂow represented by c ¼ 10 lnðx2 þ y2 Þ m2=s is an incompressible ﬂow. Also,
           (a) Find the velocity potential f.
           (b) Find the pressure along the negative x-axis if atmospheric air is ﬂowing and p ¼ 0 at x ¼ 1.
           (c) Find the x-component of the acceleration at (24, 0).

8.43   Show that the ﬂow represented by f ¼ 20 ln r m2 =s is an incompressible ﬂow. Also,
           (a) Find the stream function c.
           (b) Find the pressure along the negative x-axis if water is ﬂowing and p ¼ 40 kPa at x ¼ 1.
           (c) Find the acceleration at rectangular coordinates (22, 0).

8.44   Show that the ﬂow represented by f ¼ 10r cos y þ 40 ln r m2 =s is an incompressible ﬂow. Also,
           (a) Find the stream function c.
           (b) Find the pressure along the negative x-axis if water is ﬂowing and p ¼ 100 kPa at x ¼ 1.
           (c) Find the acceleration at rectangular coordinates (22, 0).
           (d) Locate any stagnation points.

8.45   Superimpose a uniform ﬂow parallel to the x-axis of 10 m=s and a source at the origin of strength
       q ¼ 10p m2/s.
           (a) Write the velocity potential f and stream function c.
           (b) Locate any stagnation points.
           (c) Sketch the body formed by the streamline that separates the source ﬂow from the uniform ﬂow.
           (d) Locate the positive y-intercept of the body of (c).
           (e) Determine the thickness of the body of (c) at x ¼ 1.

8.46   A uniform ﬂow V ¼ 20i m=s is superimposed on a source of strength 20p m2/s and a sink of equal strength
       located at (22 m, 0) and (2 m, 0), respectively. The resulting body formed by the appropriate streamline is a
       Rankine oval. Determine the length and thickness of the oval. Find the velocity at (0, 0).

8.47   A source near a wall is created by the method of images: superimpose two equal strength sources of strength
       4p m2=s at (2 m, 0) and (22 m, 0), respectively. Sketch the ﬂow showing the wall and ﬁnd the velocity
       distribution along the wall.

8.48   Superimpose a velocity of V ¼ 20i m=s on the ﬂow of Prob. 8.47. Locate any stagnation points.

8.49   A uniform ﬂow V ¼ 10i m=s is superimposed on a doublet with strength 40 m3=s. Find:
           (a) The radius of the cylinder that is formed.
           (b) The velocity distribution vy ðyÞ on the cylinder.
           (c) The locations of the stagnation points.
           (d) The minimum pressure on the cylinder if the pressure at the stagnation point is 200 kPa. Water is
               ﬂowing.

8.50   Superimpose a uniform ﬂow V ¼ 10i m=s, a doublet m ¼ 40 m3/s, and a vortex. Locate any stagnation points
       and ﬁnd the minimum pressure on the cylinder if the pressure of the standard atmospheric air is zero at a
       large distance from the cylinder. The strength of the vortex is (a) G ¼ 40p m2=s, (b) G ¼ 80p m2/s, and
       (c) G ¼ 120p m2/s.
176                                            EXTERNAL FLOWS                                                [CHAP. 8



8.51   Assume an actual ﬂow can be modeled with the ﬂow of Prob. 8.49 on the front half of the cylinder and that
       the pressure on the back half is equal to the minimum pressure on the cylinder (the ﬂow is assumed to
       separate from the cylinder on the back half). Calculate the resulting drag coefﬁcient.



Boundary Layers

8.52   A turbulent boundary layer is studied in a zero pressure-gradient ﬂow on a ﬂat plate in a laboratory.
       Atmospheric air at 20–C ﬂows over the plate at 10 m=s. How far from the leading edge can turbulence be
       expected (a) if the free-stream ﬂuctuation intensity is low? (b) If the free-stream ﬂuctuation intensity is high?

8.53   Respond to Prob. 8.52 if 20–C water is the ﬂuid.

8.54   A laminar boundary layer is to be studied in the laboratory. To obtain a sufﬁciently thick layer, a 2-m-long
       laminar portion is desired. What speed should be used if (a) a water channel is selected? (b) If a wind tunnel is
       selected? It is assumed that the ﬂuctuation intensity can be controlled at a sufﬁciently low level.

8.55   If a differential equation for the boundary layer is to be solved on the front part of a cylinder, the velocity U
       at the outer edge of the boundary layer is needed as is the pressure p in the boundary layer. State U and p for
       the circular cylinder of Prob. 8.49.

8.56   In Fig. 8.13 laminar and turbulent velocity proﬁles are sketched for the same boundary-layer thickness.
       Calculate the percentage increase of the momentum ﬂux for a turbulent layer assuming the power-law proﬁle
       u=U1 ¼ y=d 1=7 compared to a laminar layer assuming the parabolic proﬁle u=U1 ¼ 2y=d ðy=dÞ2 .

8.57   Show that Eq. (8.43) follows from Eq. (8.41).

8.58   Show that the von Karman integral equation of Solved Problem 8.7 can be written in terms of the
       momentum and displacement thicknesses as
                                                           d                dU
                                                 t0 ¼ r      ðyU2 Þ þ rdd U
                                                          dx                dx

       where we have differentiated Bernoulli’s equation to obtain
                                                                         d
                                               dp      dU           r dU Z
                                                  ¼ rU    ¼                U dy
                                               dx      dx           d dx
                                                                         0

8.59   Assume a linear velocity proﬁle in a laminar boundary layer on a ﬂat plate with a zero pressure gradient.
       Find:
           (a) d(x). Compare with the more exact solution and compute the percentage error.
           (b) t0 ðxÞ.
           (c) v at y ¼ d and x ¼ 2 m.
           (d) The drag force if the plate is 2-m wide and 4-m long.

8.60   Assume a sinusoidal velocity proﬁle in a laminar boundary layer on a ﬂat plate with a zero pressure gradient
       using 20–C water with U1 ¼ 1 m=s: Find:
           (a) d(x). Compare with the more exact solution and compute the percentage error.
           (b) t0 ðxÞ.
           (c) The drag force if the plate is 2-m wide and 4-m long.
CHAP. 8]                                     EXTERNAL FLOWS                                                     177


8.61   Assume a cubic velocity proﬁle in a laminar boundary layer on a ﬂat plate with a zero pressure gradient. Use
       @ 2 u=@y2 y ¼ 0 ¼ 0 as an additional boundary condition (Eq. (8.75)). Find:
           (a) d(x). Compare with the more exact solution and compute the percentage error.
           (b) t0 ðxÞ.
           (c) The drag force if the plate is 2-m wide and 4-m long.

8.62   Sketch to scale a relatively thick laminar boundary layer over a 10-m length for the ﬂow of 20–C water on a
       ﬂat plate with zero pressure gradient for U1 ¼ 1 m=s. Let about 15 cm represent the 10-m length of the plate.
       Assume a laminar layer over the entire 10-m length.

8.63   If the walls in a wind tunnel are parallel, the ﬂow will accelerate due to the boundary layers on each of the
       walls. If a wind tunnel is square, how should one of the walls be displaced outward for a zero pressure
       gradient to exist?

8.64   A streamline in 20–C water is 2 mm from a ﬂat plate at the leading edge. Using the parabolic velocity proﬁle
       of Sec. 8.5.3 with U1 ¼ 1 m=s, predict how far from the plate the streamline is when x ¼ 1 m.

8.65   Show that the power-law form for the velocity proﬁle in a turbulent ﬂow is not a good approximation at the
       wall or at the outer edge of the boundary layer.

8.66   Show that Eq. (8.62) follows from Eq. (8.44).

8.67   Air at 20–C ﬂows over a 3-m long and 2-m wide ﬂat plate at 16 m=s. Assume a turbulent ﬂow from the
       leading edge (a trip wire at the leading edge can be used to cause the turbulence) and calculate:
           (a) d at x ¼ 3 m.
           (b) t0 at x ¼ 3 m.
           (c) The drag force on one side of the plate.
           (d) The displacement and momentum thicknesses at x ¼ 3 m.
           (e) The shear velocity and the viscous wall-layer thickness.

8.68   Water at 20–C ﬂows over a 3-m long and 2-m wide ﬂat plate at 3 m=s. Assume a turbulent ﬂow from the
       leading edge (a trip wire at the leading edge can be used to cause the turbulence) and calculate:
           (a) d at x ¼ 3 m.
           (b) t0 at x ¼ 3 m.
           (c) The drag force on one side of the plate.
           (d) The displacement and momentum thicknesses at x ¼ 3 m.
           (e) The shear velocity and the viscous wall-layer thickness.

8.69   Air at 20–C ﬂows over a 2-m-long and 3-m-wide ﬂat plate at 16 m=s. Include the laminar portion near the
       leading edge (Fig. 8.16) assuming low ﬂuctuations and a smooth plate and calculate:
           (a)   d at x ¼ 3 m.
           (b)   The drag force on one side of the plate.

8.70   Water at 20–C ﬂows over a 2-m-long and 3-m-wide ﬂat plate at 3 m=s. Include the laminar portion near the
       leading edge (Fig. 8.16) assuming low ﬂuctuations and a smooth plate and calculate:
           (a)   d at x ¼ 3 m.
           (b)   The drag force on one side of the plate.

8.71   Atmospheric air blows in toward the shore at a beach in Florida. It is assumed that a boundary layer begins
       to develop about 12 km from shore. If the wind speed averages 18 m=s, estimate the thickness of the
       boundary layer and the shear stress on the surface of the water near the shore.
178                                                   EXTERNAL FLOWS                                      [CHAP. 8



8.72   A long cigar-shaped dirigible is proposed to take rich people on cruises. It is proposed to be 1000 m long and
       150 m in diameter. How much horsepower is needed to move the dirigible through sea-level air at 12 m=s if
       the drag on the front and rear is neglected.
8.73   Show that Eq. (8.80) follows from Eq. (8.78).

8.74   Solve Eq. (8.80) with boundary conditions given by Eq. (8.81) using an available software program such as
       MATLAB.

8.75   A laminar boundary layer of 20–C atmospheric air moving at 2 m=s exists on one side of a 2-m-wide,
       3-m-long ﬂat plate. At x ¼ 3 m ﬁnd:
           (a) The boundary-layer thickness.
           (b) The wall shear stress.
           (c) The maximum y-component of velocity.
           (d) The drag force.
           (e) The displacement and momentum thicknesses.
           (f) The ﬂow rate through the boundary layer.

8.76   A laminar boundary layer of 20–C water moving at 0.8 m=s exists on one side of a 2-m-wide, 3-m-long ﬂat
       plate. At x ¼ 3 m ﬁnd:
           (a) The boundary-layer thickness.
           (b) The wall shear stress.
           (c) The maximum y-component of velocity.
           (d) The drag force.
           (e) The displacement and momentum thicknesses.
           (f) The ﬂow rate through the boundary layer.




                                  Answers to Supplementary Problems

8.11   See problem

8.12   See problem

8.13   See problem

8.14   (a) 0.25       (b) 0.55            (c) 0.46       (d)    0.4        (e)   1.14

8.15   (a) 0.000654 m=s            (b)    0.00214 m=s          (c)    0.000164 m=s

8.16   Re ¼ 3060

8.17   (a) 1.0       (b)    0.5

8.18   (a) 0.26 N          (b)    4.0 N      (c)     0.52 N          (d)   1.32 N

8.19   8300 N, 34 000 N·m

8.20   (a) 32.6 m=s          (b) 6.9 m=s

8.21   11.3 hp

8.22   $152,700
CHAP. 8]                                                EXTERNAL FLOWS                                                  179


8.23   14.1 m=s

8.24   73 m=s, 5.8 m=s

8.25   4500 N

8.26   4.25 cm

8.27   0.04 m=s

8.28   0.012 m=s to 29.3 m=s. Yes, for V . 0.57 m=s

8.29   43.5 kN

8.30   99 kN, 2.23 kN, No

8.31   1.32 m=s2, 0.883 m=s2

8.32   1.74 m=s2, 0.870 m=s2

8.33   See problem

8.34   (a)   102 m=s         (b)    98 m=s       (c)     93 m=s

8.35   (a)   100 m=s         (b)    112 m=s       (c)     130 m=s

8.36   36.2 m=s, 33.3 m=s, 129 hp

8.37   53 hp

8.38   33.3 m=s, 25.1 m=s, 22.2 m=s

8.39   See problem

8.40   (a)   210x       (b)     10ðx2 þ y2 Þ       (c)     10 ln r      (d)     20r cos y
         pﬃﬃﬃﬃﬃﬃﬃﬃﬃ
8.41   ln x2 þ y2 ; tan 1 x=y

8.42   (a)     20 tan 1 y=x (b) 240=x2            (c)     6:25m=s2

8.43   (a)   c¼y         (b)       40    200=x2 kPa        (c)    250 m=s2
                                                     1 8
8.44   (a)   10r sin y þ 40y            (b)   100 1 þ 2 2 kPa             (c)    200 m=s2          (d)    (24, 0)
                                                     x x
8.45   (a)   10r cos y þ 5 ln r and 10r sin y þ 5y           (b)     (20.5, 0)       (d)     p=4 m           (e) p m

8.46   4.9 m by 2.1 m

8.47   4y=ðy2 þ 4Þ m=s

8.48   1.902 m, 22.102 m

8.49   (a)   2m        (b)     20 sin y m=s       (c)    ð2 m; 0– Þ; ð2 m; 180– Þ           (d)   200 1    sin2 y kPa
180                                                 EXTERNAL FLOWS                                                          [CHAP. 8



8.50   (a) (2, 230–), (2, 150–), 2488 Pa               (b)   (2, 290–), 2 915 Pa             (c)   (2, 270–), 21464 Pa

8.51   2.67

8.52   (a) 90.5 cm      (b) 54.3 cm

8.53   (a) 5 cm       (b) 3 cm

8.54   (a) 0.25 m=s      (b) 4.52 m=s

8.55   2U1 sin y and p0 2 rU21 sin2 y

8.56   45.8%

8.57   See problem

8.58   See problem
               pﬃﬃﬃﬃﬃﬃﬃﬃﬃ                                                                pﬃﬃﬃﬃﬃﬃﬃ                        pﬃﬃﬃﬃﬃﬃ
8.59   (a) 3:46 nx=U1 , 231%            (b)    0:289rU21 Rex 1=2         (c)     0:0256d2 U31 =n           (d)    2:31rU1 U1 n
                  pﬃﬃ
8.60   (a) 0:00479 x, 24.2%         (b)       0:328x 1=2        (c)   2.62 N
               pﬃﬃﬃﬃﬃﬃﬃﬃﬃ                              pﬃﬃﬃﬃﬃﬃﬃﬃﬃ                            pﬃﬃﬃﬃﬃﬃﬃ
8.61   (a) 4:65 nx=U1 , 27%         (b)       0:323rU21 n=U1 x           (c)         1:29rU21 n=U1

8.62   See problem

8.63   4dd

8.64   2.8 mm

8.65   See problem

8.66   See problem

8.67   (a) 5.92 cm      (b) 0.47 Pa           (c)      3.49 N      (d) 7.47 mm, 5.76 mm                   (e)    0.626 m=s, 0.145 mm

8.68   (a) 4.64 cm      (b) 10.8 Pa           (c)      80.1 N      (d) 5.85 mm, 4.51 mm                   (e)    0.104 m=s, 0.048 mm

8.69   (a) 5.28 cm      (b) 2.90 N

8.70   (a) 4.45 cm      (b) 75 N

8.71   53 m

8.72   800 hp

8.73   See problem

8.74   See problem

8.75   (a) 2.61 cm      (b) 0.000277 Pa                (c)   0.003 m=s         (d)     0.0333 Pa         (e) 3.36 mm (f) 0.068 m3=s

8.76   (a) 9.7 mm       (b)   0.0137 Pa          (c)     0.00044 m=s           (d)     1.65 N      (e)    1.25 mm (f) 0.0102 m3=s
                                                    Chapter 9


                     Compressible Flow

9.1   INTRODUCTION
Compressible ﬂows occur when the density changes are signiﬁcant between two points on a streamline.
Not all gas ﬂows are compressible ﬂows, only those that have signiﬁcant density changes. Flow around
automobiles, in hurricanes, around aircraft during landing and takeoff, and around buildings and
communication towers are a few examples of incompressible ﬂows in which the density of the air does
not change more than 3 percent between points of interest and are consequently treated as
incompressible ﬂows. There are, however, many examples of gas ﬂows in which the density does
change more than 3 percent; they include airﬂow around aircraft that ﬂy faster than a Mach number [see
Eq. (3.18)] of 0.3 (about 100 m=s), through compressors, jet engines, and tornados, to name a few. There
are also compressible effects in liquid ﬂows that give rise to water hammer and underwater compression
waves from blasts; they will not be considered here.
     Only compressible ﬂow problems that can be solved using the integral equations will be considered
in this chapter. The simplest of these is uniform ﬂow in a conduit. Recall that the continuity equation,
the momentum equation, and the energy equation are, respectively
                                                   m_ ¼ r1 A1 V1 ¼ r2 A2 V2                        ð9:1Þ
                                                      X
                                                        F ¼ m_ ðV2 2 V1 Þ                          ð9:2Þ

                                               Q_ 2 W_ S V22 2 V12
                                                        ¼          þ h2 2 h1                       ð9:3Þ
                                                  m_         2
where the enthalpy h ¼ u~ þ p=r is used [see Eqs. (1.20) and (4.23)]. If the gas can be approximated as
an ideal gas, then the energy equation takes either of the following two forms:
                                            Q_ 2 W_ S V22 2 V12
                                                     ¼          þ cp ðT2 2 T1 Þ                    ð9:4Þ
                                               m_         2

                                          Q_ 2 W_ S V22 2 V12     k   p2 p1
                                                   ¼          þ         2                          ð9:5Þ
                                             m_         2       k 2 1 r2 r1
where we have used the thermodynamic relations
                                                                                    cp
                                          Dh ¼ cp DT        cp ¼ cv þ R        k¼                  ð9:6Þ
                                                                                    cv
The ideal gas law will also be used; the form most used is
                                                           p ¼ rRT                                 ð9:7Þ

                                                          181
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
182                                              COMPRESSIBLE FLOW                                                [CHAP. 9



We may also determine the entropy change or assume an isentropic process (Ds ¼ 0). Then, one of the
following equations may be used:
                                                  T         p
                                        Ds ¼ cp ln 2 2 R ln 2                                 ð9:8Þ
                                                  T1        p1

                                  T2   p ðk21Þ=k                p2   r k                T2   p ðk21Þ
                                     ¼ 2                           ¼ 2                     ¼ 2                       ð9:9Þ
                                  T1   p1                       p1   r1                 T1   p1
Recall that the temperatures and pressures must always be absolute quantities when using several of the
above relations, therefore, it is always safe to use absolute temperature and pressure when solving
problems involving a compressible ﬂow.


9.2   SPEED OF SOUND
A pressure wave with small amplitude is called a sound wave and it travels through a gas with the speed of
sound, denoted by c. Consider the small-amplitude wave shown in Fig. 9.1 traveling through a conduit.
In Fig. 9.1(a) it is moving so that a stationary observer sees an unsteady motion, in Fig. 9.1(b) the
observer moves with the wave so that the wave is stationary and a steady ﬂow is observed, and in Fig.
9.1(c) shows the control volume surrounding the wave. The wave is assumed to create a small differential
change in the pressure p, temperature T, density r, and velocity V in the gas. The continuity equation
applied to the control volume provides
                                                    rAc ¼ ðr þ drÞAðc þ dVÞ                                         ð9:10Þ

which simpliﬁes to, neglecting the higher-order term dr dV,
                                                      r dV ¼ 2c dr                                                  ð9:11Þ

                        Moving                                     Stationary
                         wave                                        wave
                              c
              p + dp                     p            p + dp                        p
                                                                 c + dV                      c + dV           c
                       dV                             T + dT                    c   T
              T + dT              V=0    T
                                                       +d                                  (p + dp)A         pA
               +d

                            (a)                                           (b)                          (c)

 Figure 9.1   (a) A sound wave moving through a gas, (b) the gas moving through the wave, and (c) the control
              volume enclosing the wave of (b).


The momentum equation in the streamwise direction is written as
                                             pA 2 ðp þ dpÞA ¼ rAcðc þ dV 2 cÞ                                       ð9:12Þ
which simpliﬁes to
                                                               dp ¼ 2rc dV                                          ð9:13Þ
Combining the continuity and momentum equations results in
                                                  sﬃﬃﬃ
                                                   dp
                                              c¼                                               ð9:14Þ
                                                   dr
for the small-amplitude sound waves.
     The lower-frequency (less than 18 000 Hz) sound waves travel isentropically so that p=rk ¼ const
which, when differentiated, gives
CHAP. 9]                                    COMPRESSIBLE FLOW                                                          183


                                                             dp    p
                                                                ¼k                                                   ð9:15Þ
                                                             dr    r
The speed of sound for such waves is then
                                                     sﬃﬃﬃ
                                                      kp pﬃﬃﬃﬃﬃﬃ
                                                  c¼      ¼ kRT                                                      ð9:16Þ
                                                       r

High-frequency waves travel isothermally resulting in a speed of sound of
                                                  pﬃﬃﬃﬃ
                                              c ¼ RT                                                                 ð9:17Þ

    For small-amplitude waves traveling through a liquid or a solid, the bulk modulus is used [see
Eq. (1.13)]; it is equal to r dp=dr and has a value of 2100 MPa for water at 20– C. This gives a value of
about 1450 m=s for a small-amplitude wave moving through water.
    The Mach number, introduced in Chap. 3, is used for disturbances moving in a gas. It is
                                                                  V
                                                             M¼                                                      ð9:18Þ
                                                                  c
If M , 1 the ﬂow is subsonic and if M . 1 the ﬂow is supersonic. Consider the stationary source of
disturbances displayed in Fig. 9.2(a); the sound waves are shown after three time increments. In
Fig. 9.2(b) the source is moving at a subsonic speed, which is less than the speed of sound, so the source


                                                                                       Mach cone
                          c t                         2c t
 3c t
                                   3c t

                                                                  c t                                             Source
                                                                   Source       3c t
                            2c t
                                                                                       2c t               c t
                                                                                                                 2


                                          V t
                                                                 V t                    V t         V t         V t
                                            V t


             (a)                                (b)                                           (c)

Figure 9.2   The propagation of sound waves from a source: (a) a stationary source, (b) a moving source with M , 1,
             and (c) a moving source with M . 1.


‘‘announces’’ its approach to an observer to the right. In Fig. 9.2(c) the source moves at a supersonic
speed, which is faster than the speed of the source, so an observer is unaware of the source’s approach if
the observer is in the zone of silence, which is outside the Mach cone shown. From the ﬁgure, the Mach
cone has a Mach angle given by
                                                                  c         1
                                                      a ¼ sin21     ¼ sin21                                          ð9:19Þ
                                                                  V         M
The small-amplitude waves discussed above are referred to as Mach waves. They result from sources of
sound and needle-nosed projectiles and the sharp leading edge of supersonic airfoils. Large-amplitude
waves, called shock waves, which emanate from the leading edge of blunt-nosed airfoils, also form zones
of silence but the angles are larger than those created by the Mach waves. Shock waves will be studied in
Secs. 9.4 and 9.5.
184                                          COMPRESSIBLE FLOW                                               [CHAP. 9



 EXAMPLE 9.1 An electronic device is situated on the top of a hill and hears a supersonic projectile that
 produces Mach waves after the projectile is 500 m past the device’s position. If it is known that the projectile ﬂies
 at 850 m=s, estimate how high it is above the device.
      Solution: The Mach number is
                                           V    850             850
                                     M¼      ¼ pﬃﬃﬃﬃﬃﬃ ¼ pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ ¼ 2:5
                                           c    kRT       1:4 · 287 · 288
 where a standard temperature of 288 K has been assumed since the temperature was not given. The Mach angle
 relationship allows us to write
                                                     1        h          1
                                           sin a ¼     ¼ pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ ¼
                                                     M    h2 þ 5002 2:5
 where h is the height above the device [refer to Fig. 9.2(c)]. This equation can be solved for h to give h ¼ 218 m:


9.3    ISENTROPIC NOZZLE FLOW
There are numerous applications where a steady, uniform, isentropic ﬂow is a good approximation to
the ﬂow in conduits. These include the ﬂow through a jet engine, through the nozzle of a rocket, from a
broken gas line, and past the blades of a turbine. To model such situations, consider the control volume
in the changing area of the conduit of Fig. 9.3. The continuity equation between two sections an
inﬁnitesimal distance dx apart is
                                       rAV ¼ ðr þ drÞðA þ dAÞðV þ dVÞ                                            ð9:20Þ
If only the ﬁrst-order terms in a differential quantity are retained, continuity takes the form

                                                dV dA dr
                                                   þ   þ   ¼0                                                    ð9:21Þ
                                                 V   A   r

The energy equation (9.5) with Q_ ¼ W
                                    _ S ¼ 0 is

                                   V2    k p ðV þ dVÞ2     k p þ dp
                                      þ      ¼         þ                                                         ð9:22Þ
                                   2    k21r     2       k 2 1 r þ dr
This simpliﬁes to, neglecting higher-order terms
                                                k r dp 2 p dr
                                           V dV þ             ¼0                                                 ð9:23Þ
                                             k21       r2
      Assuming an isentropic ﬂow, Eq. (9.15) allows the energy equation to take the form
                                                        p
                                              V dV þ k 2 dr ¼ 0                                                  ð9:24Þ
                                                       r


                                                                  dx


                                                                         +d
                                                              h        h + dh
                                                       V                        V + dV
                                                             T
                                                             p         T + dT
                                                                       p + dp



                         Figure 9.3 Steady, uniform, isentropic ﬂow through a conduit.
CHAP. 9]                                COMPRESSIBLE FLOW                                             185



Substitute from the continuity equation (9.21) to obtain
                                                        !
                                              dV rV 2      dA
                                                      21 ¼                                          ð9:25Þ
                                               V kp         A
or, in terms of the Mach number
                                               dV 2         dA
                                                  ðM 2 1Þ ¼                                         ð9:26Þ
                                                V            A
This equation applies to a steady, uniform, isentropic ﬂow.
    There are several observations that can be made from an analysis of Eq. (9.26). They are as follows:
  .   For a subsonic ﬂow in an expanding conduit (M , 1 and dA . 0), the ﬂow is decelerating (dV , 0).
  .   For a subsonic ﬂow in an converging conduit (M , 1 and dA , 0), the ﬂow is accelerating (dV . 0).
  .   For a supersonic ﬂow in an expanding conduit (M . 1 and dA . 0), the ﬂow is accelerating
      (dV . 0).
  .   For a supersonic ﬂow in an converging conduit (M . 1 and dA , 0), the ﬂow is decelerating
      (dV , 0).
  .   At a throat where dA ¼ 0, either M ¼ 1 or dV ¼ 0 (the ﬂow could be accelerating through M ¼ 1
      or it may reach a velocity such that dV ¼ 0).
Observe that a nozzle for a supersonic ﬂow must increase in area in the ﬂow direction and a diffuser must
decrease in area, opposite to a nozzle and diffuser for a subsonic ﬂow. So, for a supersonic ﬂow to
develop from a reservoir where the velocity is 0, the subsonic ﬂow must ﬁrst accelerate through a
converging area to a throat followed by continued acceleration through an enlarging area. The nozzles
on a rocket designed to place satellites in orbit are constructed using such converging–diverging
geometry, as shown in Fig. 9.4.
    The energy and continuity equations can take on particularly helpful forms for the steady, uniform,
isentropic ﬂow through the nozzle of Fig. 9.4. Apply the energy equation (9.4) with Q_ ¼ W
                                                                                         _ S ¼ 0 between
the reservoir and some location in the nozzle to obtain
                                                        V2
                                            cp T0 ¼        þ cp T                                   ð9:27Þ
                                                        2

                                        Converging         Diverging
                                         section            section

                                          dA < 0        dA > 0
                                          dV > 0               M>1
                                                        dV > 0
                     Reservoir            M<1
                             T0
                                                                 Supersonic         Vexit
                             p0                                   flow

                            V0 = 0
                                               Throat
                                               M=1


                                     Figure 9.4 A supersonic nozzle.

Any quantity with a 0 subscript refers to a stagnation point where the velocity is 0, such as in the
reservoir. Using several thermodynamic relations, Eqs. (9.6), (9.9), (9.16), and (9.18), Eq. (9.27) can be
put in the forms

             T0     k21 2            p0      k 2 1 2 k=ðk21Þ             r0      k 2 1 2 1=ðk21Þ
                ¼1þ    M                ¼ 1þ      M                         ¼ 1þ      M             ð9:28Þ
             T       2               p         2                         r         2
186                                       COMPRESSIBLE FLOW                                         [CHAP. 9



If the above equations are applied at the throat where M ¼ 1, the critical area signiﬁed by an asterisk (*)
superscript, the energy equation takes the forms
                         T    2             p     2 k= ðk21Þ            r     2 1= ðk21Þ
                           ¼                   ¼                           ¼                           ð9:29Þ
                         T0 k þ 1           p0   kþ1                    r0   kþ1

The critical area is often referenced even though a throat does not exist, as in Table D.1. For air with
k ¼ 1.4, Eqs. (9.29) provide

                        T ¼ 0:8333T0           p ¼ 0:5283p0           r ¼ 0:6340r0                     ð9:30Þ
      The mass ﬂux through the nozzle is of interest and is given by
                                                           sﬃﬃﬃﬃ
                                            p     pﬃﬃﬃﬃﬃﬃ    k
                                m_ ¼ rAV ¼    · AM kRT ¼ p       AM                                    ð9:31Þ
                                           RT               RT

With the use of Eqs. (9.28), the mass ﬂux, after some algebra, can be expressed as
                                           sﬃﬃﬃﬃﬃﬃ
                                              k       k 2 1 2 ðkþ1Þ= 2ð12kÞ
                                m_ ¼ p0 MA         1þ      M                                           ð9:32Þ
                                            RT0         2

If the critical area is selected where M ¼ 1, this takes the form
                                             sﬃﬃﬃﬃﬃﬃ
                                                k       k 2 1 ðkþ1Þ= 2ð12kÞ
                                   m_ ¼ p0 A         1þ                                                ð9:33Þ
                                              RT0         2

which, when combined with Eq. (9.32), provides
                                          "             #ðkþ1Þ= 2ð12kÞ
                                    A   1 2 þ ðk 2 1ÞM2
                                      ¼                                                                ð9:34Þ
                                    A   M     kþ1

This ratio is included in the isentropic ﬂow (Table D.1) for air. The table can be used in the place of the
above equations.
     Now we will discuss some features of the above equations. Consider a converging nozzle connecting
a reservoir with a receiver, as shown in Fig. 9.5. If the reservoir pressure is held constant and the receiver
pressure reduced, the Mach number at the exit of the nozzle will increase until Me ¼ 1 is reached,
indicated by the left curve in the ﬁgure. After Me ¼ 1 is reached at the nozzle exit for pr ¼ 0:5283p0 ; the
condition of choked ﬂow occurs and the velocity throughout the nozzle cannot change with further
decreases in pr. This is due to the fact that pressure changes downstream of the exit cannot travel
upstream to cause changes in the ﬂow conditions.
     The right curve of Fig. 9.5(b) represents the case when the reservoir pressure in increased and the
receiver pressure is held constant. When Me ¼ 1 the condition of choked ﬂow also occurs but Eq. (9.33)
indicates that the mass ﬂux will continue to increase as p0 is increased. This is the case when a gas line
ruptures.
     It is interesting that the exit pressure pe is able to be greater than the receiver pressure pr. Nature
allows this by providing the streamlines of a gas the ability to make a sudden change of direction at the
exit and expand to a much greater area resulting in a reduction of the pressure from pe to pr.
     The case of a converging–diverging nozzle allows a supersonic ﬂow to occur providing the
receiver pressure is sufﬁciently low. This is shown in Fig. 9.6 assuming a constant reservoir pressure
with a decreasing receiver pressure. If the receiver pressure is equal to the reservoir pressure, no ﬂow
occurs, represented by curve A. If pr is slightly less than p0, the ﬂow is subsonic throughout with a
CHAP. 9]                                         COMPRESSIBLE FLOW                                                        187



minimum pressure at the throat, represented by curve B. As the pressure is reduced still further, a
pressure is reached that results in M ¼ 1 at the throat with subsonic ﬂow throughout the remainder
of the nozzle.
                                                                                                           Choked
                                                          .                                                 flow
                                                          m
                                                                                                           Me = 1

                                                               Choked                                           pe < pr
                                                                flow
                                          pr                   Me = 1             Me < 1
                 0
                T0
                p0                       pe Ve               pr < pe
                V0 = 0                                    Decreasing pr
                                                                                                          Increasing p0
                                                          with p0 const
                                                                                                          with pr const


                            (a)                                          0.5283      1.0             1.893
                                                                        pr /p0                      p0 /pr
                                                                                  (b)

              Figure 9.5    (a) A converging nozzle and (b) the pressure variation in the nozzle.




                                                 Throat                                              pr
                                  0
                             T0                                                                      Ve
                             p0                                                             pe




                                                          A
                                  1.0                                                      1.0
                                                          B

                                                          C
                                  p/p0
                                                                                           pr /p0
                                                           D


                                                                                                 x

                     Figure 9.6       A converging–diverging nozzle with reservoir pressure ﬁxed.


     There is another receiver pressure substantially below that of curve C that also results in isentropic
ﬂow throughout the nozzle, represented by curve D; after the throat the ﬂow is supersonic. Pressures in
the receiver in between those of curves C and D result in non-isentropic ﬂow (a shock wave occurs in the
ﬂow) and will be considered in Sec. 9.4. If pr is below that of curve D, the exit pressure pe is greater than
pr. Once again, for receiver pressures below that of curve C, the mass ﬂux remains constant since the
conditions at the throat remain unchanged.
     It may appear that the supersonic ﬂow will tend to separate from the nozzle, but just the opposite is
true. A supersonic ﬂow can turn very sharp angles, as will be observed in Sec. 9.6, since nature provides
expansion fans that do not exist in subsonic ﬂows. To avoid separation in subsonic nozzles, the
expansion angle should not exceed 10– . For larger angles, vanes are used so that the angle between the
vanes does not exceed 10– .
188                                          COMPRESSIBLE FLOW                                          [CHAP. 9



 EXAMPLE 9.2 Air ﬂows from a reservoir maintained at 300 kPa absolute and 20– C into a receiver maintained
 at 200 kPa absolute by passing through a converging nozzle with an exit diameter of 4 cm. Calculate the mass
 ﬂux through the nozzle. Use (a) the equations and (b) the isentropic ﬂow table.
      Solution: (a) The receiver pressure that would give M ¼ 1 at the nozzle exit is
                          pr ¼ 0:5283 kPa          p0 ¼ 0:5283 · 300 ¼ 158:5 kPa absolute
 The receiver pressure is greater than this, so Me , 1. The second equation of Eqs. (9.28) can be put in the form
                            k21 2  p ðk21Þ=k                                 300 0:4=1:4
                               M ¼ 0        21             or     0:2M2 ¼               21
                             2     p                                         200
 This gives M ¼ 0.784. The mass ﬂux is found from Eq. (9.32) to be
                           sﬃﬃﬃﬃﬃﬃ
                              k       k 2 1 2 ðkþ1Þ=2ð12kÞ
                m_ ¼ p0 MA         1þ       M
                            RT0         2
                                                 sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                                                               22:4= 0:8
                                               2      1:4         0:4
                   ¼ 300 000 · 0:784 · p · 0:02                1þ     · 0:7842           ¼ 0:852 kg=s
                                                  287 · 293        2
 For the units to be consistent, the pressure must be in Pa and R in J=(kg·K).
 (b) Now use Table D.1. For a pressure ratio of p=p0 ¼ 200=300 ¼ 0.6667, the Mach number is found by
 interpolation to be
                                        0:6821 2 0:6667
                                 Me ¼                   ð0:8 2 0:76Þ þ 0:76 ¼ 0:784
                                        0:6821 2 0:6560
                                                                                               pﬃﬃﬃﬃﬃﬃ
 To ﬁnd the mass ﬂux, the velocity must be known which requires the temperature since V ¼ M kRT. The
 temperature is interpolated (similar to the interpolation for the Mach number) from Table D.1 to be Te ¼
 0:8906 · 293 ¼ 261 K: The velocity and density are then
                                        pﬃﬃﬃﬃﬃﬃ       pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                V ¼ M kRT ¼ 0:784 1:4 · 287 · 261 ¼ 254 m=s
                                      p         200
                                r¼       ¼             ¼ 2:67 kg=m3
                                     RT 0:287 · 261
 The mass ﬂux is found to be
                                  m_ ¼ rAV ¼ 2:67 · p · 0:022 · 254 ¼ 0:852 kg=s



9.4   NORMAL SHOCK WAVES
Shock waves are large-amplitude waves that exist in a gas. They emanate from the wings of a supersonic
aircraft, from a large explosion, from a jet engine, and ahead of the projectile in a gun barrel. They can
be oblique waves or normal waves. First, we will consider the normal shock wave, as shown in Fig. 9.7.
In this ﬁgure, it is stationary so that a steady ﬂow exists. If V1 were superimposed to the left, the shock
would be traveling in stagnant air with velocity V1 and the induced velocity behind the shock wave would
be (V1 2 V2). The shock wave is very thin, on the order of ,1024 mm, and in that short distance large
pressure changes occur causing enormous energy dissipation. The continuity equation with A1 ¼ A2 is
                                                        r1 V1 ¼ r2 V2                                       ð9:35Þ

The energy equation with Q_ ¼ W
                              _ S ¼ 0 takes the form

                                             V22 2 V12     k   p2 p1
                                                       þ         2   ¼0                                     ð9:36Þ
                                                 2       k 2 1 r2 r1

The only forces in the momentum equation are pressure forces, so
                                                 p1 2 p2 ¼ r1 V1 ðV2 2 V1 Þ                                 ð9:37Þ
CHAP. 9]                                       COMPRESSIBLE FLOW                                     189



where the areas have divided out since A1 ¼ A2. Assuming that the three quantities r1, p1, and V1 before
the shock waves are known, the above three equations allow us to solve for three unknowns r2, p2, and
V2 since, for a given gas, k is known.

                                                             Control volume

                                          p1        1            p2
                                                                           2

                                           V1                         V2



                                    Figure 9.7          A stationary shock wave.


    Rather than solve Eqs. (9.35) to (9.37) simultaneously, we write them in terms of the Mach numbers
M1 and M2 and put them in more convenient forms. First, the momentum equation (9.37), using
Eq. (9.35) and V 2 ¼ M2 pk=r; can be written as
                                                    p2 1 þ kM12
                                                      ¼                                            ð9:38Þ
                                                    p1 1 þ kM22

    In like manner, the energy equation (9.36), with p ¼ rRT and V 2 ¼ M2 kRT, can be written as
                                                  k21 2
                                         T2 1 þ 2 M1
                                             ¼                                                     ð9:39Þ
                                         T1       k21 2
                                               1þ      M2
                                                    2
                                                        pﬃﬃﬃﬃﬃﬃ
The continuity equation (9.35) with r ¼ p=RT and V ¼ M kRT becomes
                                                 sﬃﬃﬃ
                                            p2 M2 T1
                                                      ¼1                                           ð9:40Þ
                                            p1 M1 T2
If the pressure and temperature ratios from Eqs. (9.38) and (9.39) are substituted into Eq. (9.40), the
downstream Mach number is related to the upstream Mach number by (the algebra to show this is not
shown here)
                                                                    2
                                                           M12 þ
                                                M22 ¼              k21                             ð9:41Þ
                                                           2k
                                                              M 2 21
                                                          k21 1
This allows the momentum equation (9.38) to be written as

                                               p2   2k        k21
                                                  ¼     M12 2                                      ð9:42Þ
                                               p1 k þ 1       kþ1

and the energy equation (9.39) as
                                                    k21 2       2k
                                               1þ       M1         M 2 21
                                   T2                2         k21 1
                                      ¼                                                            ð9:43Þ
                                   T1                  ðk þ 1Þ2
                                                                M2
                                                       2ðk 2 1Þ 1
For air, the preceding equations simplify to
                        M12 þ 5                p2 7M12 2 1                 T2   M12 þ 5 7M12 2 1
                M22 ¼                             ¼                           ¼                    ð9:44Þ
                        7M12 2 1               p1    6                     T1        36M12
190                                         COMPRESSIBLE FLOW                                         [CHAP. 9



      Several observations can be made from these three equations:
  .   If M1 ¼ 1, then M2 ¼ 1 and no shock wave exists.
  .   If M1 . 1, then M2 , 1. A supersonic ﬂow is always converted to a subsonic ﬂow when it passes
      through a normal shock wave.
  .   If M1 , 1, then M2 . 1 and a subsonic ﬂow appears to be converted to a supersonic ﬂow. This is
      impossible since it results in a positive production of entropy, a violation of the second law of
      thermodynamics; this violation will not be proven here.

                                         Shock wave position
                                            for pr /p0 = a
                                     Throat                                     pr   a

                       0
                      T0                                                        Ve   b
                      p0                                               pe


                                                                                     c


                                                                                     d
                       1.0                                         pr / p0

                      p/p0
                                                                   a                 e


                                           D                       b
                                                                   c
                                                                   d
                                                                   e                 f
                                                                   f
                                                                            x

                                  Figure 9.8    Flow with shock waves in a nozzle.

     Several normal shock ﬂow relations for air have been presented in Table D.2. The use of that table
allows one to avoid using Eqs. (9.44). In addition, the ratio p02 =p01 of the stagnation point pressures in
front of and behind the shock wave is listed.
     Return to the converging–diverging nozzle and focus attention on the ﬂow below curve C of Fig. 9.6.
If the receiver pressure decreases to pr =p0 ¼ a in Fig. 9.8, a normal shock wave would be positioned
somewhere inside the nozzle as shown. If the receiver pressure decreased still further, there would be
some ratio pr =p0 ¼ b that would position the shock wave at the exit plane of the nozzle. Pressure ratios c
and d would result in oblique shock wave patterns similar to those shown. Pressure ratio e is associated
with isentropic ﬂow throughout, and pressure ratio f would provide an exit pressure greater than the
receiver pressure resulting in a billowing out, as shown, of the exiting ﬂow, as seen on the rockets that
propel satellites into space.

 EXAMPLE 9.3 A normal shock wave travels at 600 m=s through stagnant 20– C air. Estimate the velocity induced
 behind the shock wave. (a) Use the equations and (b) use the normal shock ﬂow (Table D.2). Refer to Fig. 9.7.
      Solution: Superimpose a velocity of 600 m=s so that the shock wave is stationary and V1 ¼ 600 m=s, as
 displayed in Fig. 9.7. The upstream Mach number is
                                           V1              600
                                     M1 ¼ pﬃﬃﬃﬃﬃﬃ ¼ pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ ¼ 1:75
                                           kRT       1:4 · 287 · 293
 (a) Using the equations, the downstream Mach number and temperature are, respectively
                                               !1=2                !1=2
                                       M12 þ 5          1:752 þ 5
                                M2 ¼                ¼                   ¼ 0:628
                                       7M12 2 1       7 · 1:752 2 1
                             T1 M12 þ 5 7M12 2 1   293ð1:752 þ 5Þð7 · 1:752 2 1Þ
                      T2 ¼                       ¼                               ¼ 438 K
                                    36M12                   36 · 1:752
CHAP. 9]                                     COMPRESSIBLE FLOW                                                    191


 The velocity behind the shock wave is then
                                       pﬃﬃﬃﬃﬃﬃﬃ   pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                              V2 ¼ M2 kRT2 ¼ 0:628 1:4 · 287 · 438 ¼ 263 m=s
 If V1 is superimposed to the left in Fig. 9.7, the induced velocity is
                                     Vinduced ¼ V1 2 V2 ¼ 600 2 263 ¼ 337 m=s
 which would act to the left, in the direction of the moving shock wave.
 (b) Table D.2 is interpolated at M1 ¼ 1.75 to ﬁnd

                            1:75 2 1:72
                       M2 ¼             ð0:6257 2 0:6355Þ þ 0:6355 ¼ 0:6282
                            1:76 2 1:72
                        T2 1:75 2 1:72
                          ¼             ð1:502 2 1:473Þ þ 1:473 ¼ 1:495:    \ T2 ¼ 438 K
                        T1 1:76 2 1:72

 The velocity V2 is then
                                       pﬃﬃﬃﬃﬃﬃﬃ     pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                V2 ¼ M2 kRT2 ¼ 0:628 1:4 · 287 · 438 ¼ 263 m=s
 and the induced velocity due to the shock wave is
                                     Vinduced ¼ V1 2 V2 ¼ 600 2 263 ¼ 337 m=s



 EXAMPLE 9.4 Air ﬂows from a reservoir maintained at 20– C and 200 kPa absolute through a converging–
 diverging nozzle with a throat diameter of 6 cm and an exit diameter of 12 cm to a receiver. What receiver
 pressure is needed to locate a shock wave at a position where the diameter is 10 cm? Refer to Fig. 9.8.
      Solution: Let us use the isentropic ﬂow (Table D.1) and the normal shock (Table D.2) Tables. At the
 throat for this supersonic ﬂow Mt ¼ 1. The Mach number just before the shock wave is interpolated from
 Table D.1 where A1 =A ¼ 102=62 ¼ 2:778 to be
                                                    M1 ¼ 2:556
 From Table D.2
                                                             p02
                                           M2 ¼ 0:5078           ¼ 0:4778
                                                             p01
 so that
                                          p02 ¼ 0:4778 · 200 ¼ 95:55 kPa
 since the stagnation pressure does not change in the isentropic ﬂow before the shock wave so that p01 ¼ 200 kPa.
 From just after the shock wave to the exit, isentropic ﬂow again exists so that from Table D.1 at M2 ¼ 0.5078
                                                     A2
                                                        ¼ 1:327
                                                     A
 We have introduced an imaginary throat between the shock wave and the exit of the nozzle. The exit area Ae is
 introduced by
                                        Ae  A A             122
                                           ¼ 2 · e ¼ 1:327 · 2 ¼ 1:911
                                        A   A A2            10
 Using Table D.1 at this area ratio (make sure the subsonic part of the table is used), we ﬁnd
                                                              pe
                                     Me ¼ 0:3223     and          ¼ 0:9305
                                                              p0e
 so that
                                          pe ¼ 0:9305 · 95:55 ¼ 88:9 kPa
 using p0e ¼ p02 for the isentropic ﬂow after the shock wave. The exit pressure is equal to the receiver pressure for
 this isentropic subsonic ﬂow.
192                                        COMPRESSIBLE FLOW                                        [CHAP. 9



9.5   OBLIQUE SHOCK WAVES
Oblique shock waves form on the leading edge of a supersonic sharp-edged airfoil or in a corner, as
shown in Fig. 9.9. A steady, uniform plane ﬂow exists before and after the shock wave. The oblique
shock waves also form on axisymmetric projectiles.


                                     Oblique
                                      shock
                                                                  V2
                                                                                     Oblique
                                                                                               V2
                                                                                      shock
                V1


                                                                       V1

                                                                 V2


                                               (a)                                 (b)

               Figure 9.9 Oblique shock waves (a) ﬂow over a wedge and (b) ﬂow in a corner.


    The oblique shock wave turns the ﬂow so that V2 is parallel to the plane surface. Another variable,
the angle through which the ﬂows turns, is introduced but the additional tangential momentum
equation allows a solution. Consider the control volume of Fig. 9.10 surrounding the oblique shock
wave. The velocity vector V1 is assumed to be in the x-direction and the oblique shock wave turns the
ﬂow through the wedge angle or deﬂection angle y so that V2 is parallel to the wall. The oblique shock
wave makes an angle of b with V1. The components of the velocity vectors are shown normal and
tangential to the oblique shock. The tangential components of the velocity vectors do not cause ﬂuid to
ﬂow into or out of the control volume, so continuity provides

                                                     r1 V1n ¼ r2 V2n                                  ð9:45Þ


                                                          Oblique
                                                           shock

                                                       Control
                                                       volume          V2
                                                                             V2t
                                   V1t           V1n
                                                                       V2n

                                                V1



                              Figure 9.10 Oblique shock wave control volume.


The pressure forces act normal to the control volume and produce no net force tangential to the oblique
shock. This allows the tangential momentum equation to take the form
                                                     m_ 1 V1t ¼ m_ 2 V2t                              ð9:46Þ

Continuity requires m_ 1 ¼ m_ 2 so that
                                                        V1t ¼ V2t                                     ð9:47Þ
CHAP. 9]                                  COMPRESSIBLE FLOW                                                193



The momentum equation normal to the oblique shock is

                                          p1 2 p2 ¼ r2 V2n2 2 r1 V1n2                                   ð9:48Þ

The energy equation, using V 2 ¼ Vn2 þ Vt 2 , can be written in the form

                                      V1n2 k 2 1 p1 V2n2 k 2 1 p2
                                          þ        ¼    þ                                               ð9:49Þ
                                       2     k r1    2     k r2

since the tangential velocity terms cancel.
    Observe that the tangential velocity components do not enter Eqs. (9.45), (9.48), and (9.49). They are
the same three equations used to solve the normal shock wave problem. Therefore, the components V1n
and V2n can be replaced with V1 and V2, respectively, of the normal shock wave problem and a solution
obtained. Table D.2 may also be used. We also replace M1n and M2n with M1 and M2 in the equations
and table.
    To often simplify a solution, we relate the oblique shock angle b to the deﬂection angle y. This is
done using Eq. (9.45) to obtain

                                  r2 V1n   V1t tan b      tan b
                                    ¼    ¼             ¼                                                ð9:50Þ
                                  r1 V2n V2t tanðb 2 yÞ tanðb 2 yÞ

Using Eqs. (9.42) and (9.43), this density ratio can be written as

                                        r2 p2 T1   ðk þ 1ÞM1n2
                                          ¼      ¼                                                      ð9:51Þ
                                        r1 p1 T2 ðk 2 1ÞM1n2 þ 2

Using this density ratio in Eq. (9.50) allows us to write
                                                                     !
                                               tan b           2
                                  tanðb 2 yÞ ¼       k21 þ                                              ð9:52Þ
                                               kþ1         M12 sin2 b

With this relationship, the oblique shock angle b can be found for a given incoming Mach number and
wedge angle y. A plot of Eq. (9.52) is useful to avoid a trial-and-error solution. It is included as Fig. 9.11.
Three observations can be made by studying the ﬁgure.
  .   For a given Mach number M1 and wedge angle y there are two possible oblique shock angles b. The
      larger one is the ‘‘strong’’ oblique shock wave and the smaller one is the ‘‘weak’’ oblique shock
      wave.
  .   For a given wedge angle y, there is a minimum Mach number for which there is only one oblique
      shock angle b.
  .   If the Mach number is less than the minimum for a particular y, but greater than one, the shock
      wave is detached as shown in Fig. 9.12. Also, for a given M1, there is a sufﬁciently large y that will
      result in a detached shock wave.
    The required pressure rise determines if a weak shock or a strong shock exists. The pressure rise is
determined by ﬂow conditions.
    For a detached shock wave around a blunt body or a wedge, a normal shock wave exists on the
stagnation streamline; the normal shock is followed by a strong oblique shock, then a weak oblique
shock, and ﬁnally a Mach wave, as shown in Fig. 9.12. The shock wave is always detached on a blunt
object.
194                                           COMPRESSIBLE FLOW                                                      [CHAP. 9




                   80

                                                                                                  M2 < 1
                   70                 Strong shock
                                                             M2 = 1
                   60
                                          Weak shock                                 = 30°
                                                                                                    = 35°
                                                                          M2 > 1
                   50

                                                                                                       = 25°
                   40
                                                                                                       = 20°
                                                                                                       = 15°
                   30
                                                                                                       = 10°
                                                                                                       = 5°
                   20
                                                                              = 0°
                                      1.5              2.0              2.5                 3.0                3.5
                                                             M1

       Figure 9.11 Oblique shock wave angle b related to wedge angle y and Mach number M1 for air.

                                              Weak                                           Weak
                                              shock                            Strong        shock
                             Strong                                             shock
                             shock


                  V1                                               V1



                                 M2 < 1                                            M2 < 1
                                              M2 > 1                                          M2 > 1
                                      (a)                                                     (b)

             Figure 9.12   Detached shock waves around (a) a plane, blunt object and (b) a wedge.

 EXAMPLE 9.5 Air at 30– C ﬂows around a wedge with an included angle of 60– [Fig. 9.9(a)]. An oblique
 shock emanates from the wedge at an angle of 50– . Determine the approach velocity of the air. Also ﬁnd M2
 and T2.
     Solution: From Fig. 9.11 the Mach number, at y ¼ 30– and b ¼ 50– , is
                                                        M1 ¼ 3:1
 The velocity is then
                                        pﬃﬃﬃﬃﬃﬃ   pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                 V1 ¼ M1 kRT ¼ 3:1 1:4 · 87 · 303 ¼ 1082 m=s
 If Eq. (9.52) were used for greater accuracy, we have
                                                                       !
                                            tan 50o              2
                        tanð50o 2 30o Þ ¼           1:4 2 1 þ 2 2 o :                 \ M1 ¼ 3:20
                                            1:4 þ 1          M1 sin 50
 The velocity would be V1 ¼ 1117 m=s.
 To ﬁnd M2, the approaching normal velocity and Mach number are
                                                                                  856
                V1n ¼ V1 sin b ¼ 1117 sin 50o ¼ 856 m=s:           \ M1n ¼ pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ ¼ 2:453
                                                                            1:4 · 287 · 303
CHAP. 9]                                                 COMPRESSIBLE FLOW                                                     195



    From Table D.2 interpolation provides M2n ¼ 0.5176 so that
                                                              M2n         0:5176
                                                  M2 ¼                  ¼        ¼ 1:513
                                                         sinð50o 2 30o Þ sin 20o
    The temperature behind the oblique shock is interpolated to be
                                                 T2 ¼ T1 · 2:092 ¼ 303 · 2:092 ¼ 634 K


9.6      EXPANSION WAVES
Supersonic ﬂow exits a nozzle, as for the pressure ratio f in Fig. 9.8, and billows out into a large exhaust
plume. Also, supersonic ﬂow does not separate from the wall of a nozzle that expands quite rapidly, as in
the sketch of Fig. 9.8. How is this accomplished? Consider the possibility that a single ﬁnite wave, such
as an oblique shock, is able to turn the ﬂow around the convex corner, as shown in Fig. 9.12(a). From
the tangential momentum equation, the tangential component of velocity must remain the same on both
sides of the ﬁnite wave. For this to be true, V2 . V1 as is obvious from the simple sketch. As before, this
increase in velocity as the ﬂuid ﬂows through a ﬁnite wave requires an increase in entropy, a violation of
the second law of thermodynamics, making a ﬁnite wave an impossibility.
     A second possibility is to allow an inﬁnite fan of Mach waves, called an expansion fan, emanating
from the corner, as shown in Fig. 9.13(b). This is an ideal isentropic process so the second law is not
violated; such a process may be approached in a real application. Let us consider the single inﬁnitesimal
Mach wave displayed in Fig. 9.14, apply our fundamental laws, and then integrate around the corner.
Since the tangential velocity components are equal, the velocity triangles yield
                                                 Vt ¼ V cos m ¼ ðV þ dVÞ cosðm þ dyÞ                                         ð9:53Þ
                                 *
This can be written as, neglecting higher-order terms, Eq. (9.53) becomes
                                                                  V dy sin m ¼ cos m dV                                      ð9:54Þ

                                                         Finite                                               Expansion
                                           V1t           wave                                 V1                 fan
                                                                                              M1
                                                                                                                        M2
                                                                            V2n                                    V2
                                           V1                      V2



                                        (a) A single finite wave                          (b) An infinite number
                                                                                              of Mach waves

Figure 9.13 Supersonic ﬂow around a convex corner. (a) A single ﬁnite wave. (b) An inﬁnite number of Mach waves.

                                                                                   Control
                                                                                    volume
                                                            Vt
                                                                            Vn
                                                                                               +d
                                                                  V
                                                                                  V +dV
                                                                      Vn + dVn            d
                                                                                    Vt

                                                   Mach wave

                                         Figure 9.14 A Mach wave in an expansion fan.
                                                     pﬃﬃﬃﬃﬃﬃﬃﬃﬃ
Substitute sin m ¼ 1=M [see Eq. (9.19)] and cos m ¼ M2 2 1= M, to obtain
                                                 pﬃﬃﬃﬃﬃﬃﬃﬃﬃ dV
                                           dy ¼ M2 2 1                                                                       ð9:55Þ
                                                             V
*
    Recall that cosðm þ dyÞ ¼ cos m cos dy 2 sin m sin dy ¼ cos m 2 dy sin m, since cos d y < 1 and sin d y < d y.
196                                        COMPRESSIBLE FLOW                                            [CHAP. 9


                                pﬃﬃﬃﬃﬃﬃ
Differentiate the equation V ¼ M kRT and put in the form
                                                dV dM 1 dT
                                                   ¼  þ                                                     ð9:56Þ
                                                 V   M 2 T
The energy equation V 2 =2 þ kRT=ðk 2 1Þ ¼ const can also be differentiated to yield
                                            dV     1     dT
                                               þ       2
                                                            ¼0                                              ð9:57Þ
                                             V ðk 2 1ÞM T
Combine Eqs. (9.56) and (9.57) to obtain
                                           dV          2      dM
                                              ¼              2 M
                                                                                                            ð9:58Þ
                                            V   2 þ ðk 2 1ÞM
Substitute this into Eq. (9.55) to obtain a relationship between y and M
                                                   pﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                                 2 M2 2 1 dM
                                         dy ¼                                                               ð9:59Þ
                                               2 þ ðk 2 1ÞM2 M
This is integrated from y ¼ 0 and M ¼ 1 to a general angle y called the Prandtl–Meyer function, and
Mach number M [this would be M2 in Fig. 9.12(b)] to ﬁnd that
                               k þ 1 1=2 21 k 2 1         1=2
                                                  ðM2 2 1Þ 2tan21 ðM2 2 1Þ1 2
                                                                           =
                         y¼             tan                                                                 ð9:60Þ
                               k21          kþ1
The solution to this relationship is presented for air in Table D.3 to avoid a trial-and-error solution
for M given the angle y. If the pressure or temperature is desired, the isentropic ﬂow table can be
used. The Mach waves that allow the gas to turn the corner are sometimes referred to as expansion
waves.
     Observe from Table D.3 that the expansion fan that turns the gas through the angle y results in
M ¼ 1 before the fan to a supersonic ﬂow after the fan. The gas speeds up as it turns the corner and
it does not separate. A slower moving subsonic ﬂow would separate from the corner and would slow
down. If M ¼ 1 is substituted into Eq. (9.60), y ¼ 130:5– ; which is the maximum angle through
which the ﬂow could turn. This shows that turning angles greater than 90– are possible, a rather
surprising result.

 EXAMPLE 9.6 Air at 150 kPa and 140– C ﬂows at M ¼ 2 and turns a convex corner of 30– . Estimate the
 Mach number, pressure, temperature, and velocity after the corner.




                                                            M1=2
                            M=1                                                   M2
                                                                            30°
                                        26.4°
                                                                                  V2

                                                   Figure 9.15

      Solution: Table D.3 assumes the air is initially at M ¼ 1. So, assume the ﬂow originates from M ¼ 1 and
 turns a corner to M1 ¼ 2 and then a second corner to M2, as shown in Fig. 9.15. From Table D.3, an angle of
 26.4– is required to accelerate the ﬂow from M ¼ 1 to M ¼ 2. Add another 30 to 26.4– and at y ¼ 56.4– we ﬁnd
 that
                                                   M2 ¼ 3:37
 Using the isentropic ﬂow table (Table D.1), the entries from the reservoir to state 1 and also to state 2 can be
 used to ﬁnd
CHAP. 9]                                     COMPRESSIBLE FLOW                                          197



                              p0 p2            1
                       p2 ¼ p1      ¼ 150 ·        · 0:01580 ¼ 18:54 kPa
                              p1 p0         0:1278
                               T T               1
                       T2 ¼ T1 0 2 ¼ 413 ·           · 0:3058 ¼ 227 K    or        2 46 – C
                               T1 T0          0:5556
 The velocity after the corner is then
                                        pﬃﬃﬃﬃﬃﬃﬃ    pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                 V2 ¼ M2 kRT2 ¼ 3:37 1:4 · 287 · 227 ¼ 1018 m=s



                                             Solved Problems

9.1   Two boys decide to estimate how far it is across a lake. One bangs two rocks together underwater
      on one side and the other estimates that it takes 0.4 s for the sound to reach the other side. What
      is the distance across the lake?
           Using the bulk modulus as 2110 · 106 Pa, the speed of sound in water is
                                  sﬃﬃﬃ sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                    dp     1 dp           1
                              c¼       ¼      r      ¼        · 2110 · 106 ¼ 1453 m=s
                                    dr     r dr          1000
           At this speed, the distance is
                                               d ¼ c Dt ¼ 1453 · 0:4 ¼ 581 m

9.2   Show that Eq. (9.26) follows from Eq. (9.22).
           The right-hand side of Eq. (9.22) is expanded so that
                        V2     k p V 2 þ 2V dV þ ðdVÞ2     k p þ dp
                           þ      ¼                    þ
                         2   k21r           2            k 2 1 r þ dr
                                        .
                                           2
                        V 2 V 2 2V dVþ ðdVÞ      k   p þ dp p
                           ¼    þ            þ              2
                         2   2       2         k 2 1 r þ dr r
                             2V dV    k  pr þ rdp 2 pr 2 pdr           k  kp dr 2 p dr
                        0¼         þ                         ¼ V dV þ
                               2     k21      rðr þ dnrÞ              k21      r2
           using r dp ¼ kp dr for an isentropic process [see Eq. (9.15)]. This is then
                                                     p dr           p dV dA
                                      0 ¼ V dV þ k        ¼ V dV þ k 2 2
                                                      r2            r  V  A
           when dr=r is substituted from Eq. (9.21). This can be written as
                                                                !
                                                 dA     V 2r      dV
                                                     ¼       21
                                                  A      kp       V

           Using c2 ¼ kp=r and M ¼ V=c, this is put in the form
                                                     dA            dV
                                                        ¼ ðM2 2 1Þ
                                                      A            V

9.3   A converging nozzle with an exit diameter of 6 cm is attached to a reservoir maintained at 30– C
      and 150 kPa absolute. Determine the mass ﬂux of air ﬂowing through the nozzle if the receiver
      exits to the atmosphere. (a) Use equations and (b) use the appropriate table.
           Is the ﬂow choked?
                                         0:5283 · 150 ¼ 79:2 kPa:   \ pr > 0:5283p0
           and the ﬂow is not choked and Me , 1. (The receiver pressure, the atmosphere, is assumed to be at
           100 kPa.)
198                                        COMPRESSIBLE FLOW                                                    [CHAP. 9



          a) Using the equations, we have energy and the isentropic relation providing
                             .
                             V02                V 2 1:4 100 000        100      re 1:4
                                 þ 1000 · 303 ¼ e þ                        ¼
                              2                  2    0:4 re           150    1:725
            where
                               150
                    r0 ¼               ¼ 1:725      \ re ¼ 1:291 kg=m3             and      Ve ¼ 253 m=s
                           0:287 · 303
            The mass ﬂux follows:
                                  \ m_ ¼ re Ae Ve ¼ 1:291 · p · 0:032 · 253 ¼ 0:925 kg=s
          b) Use Table D.1 and ﬁnd
                                                    pe 100
                                                      ¼    ¼ 0:6667
                                                    p0 150
            Interpolation gives Me ¼ 0:784 and Te ¼ 0:8906 · 303 ¼ 270 K: Then
                            100                                               pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                 re ¼               ¼ 1:290 kg=m3       and         Ve ¼ 0:784 1:4 · 287 · 270 ¼ 258 m=s
                        0:287 · 270

                                  \ m_ ¼ re Ae Ve ¼ 1:290 · p · 0:032 · 258 ¼ 0:941 kg=s

9.4   Air ﬂows through a converging–diverging nozzle, with a throat diameter of 10 cm and an exit
      diameter of 20 cm, from a reservoir maintained at 20– C and 300 kPa absolute. Estimate the two
      receiver pressures that provide an isentropic ﬂow throughout (curves C and D of Fig. 9.6). Also,
      determine the associated exit Mach numbers.
          Let us use Table D.1 rather than the equations. The area ratio is A=A* ¼ 4. There are two pressure
          ratios in Table D.1 corresponding to this area ratio. They are interpolated to be
                                p      4:0 2 3:6727
                                    ¼                ð0:9823 2 0:990Þ þ 0:990 ¼ 0:988
                                p0 C 4:8643 2 3:6727
                                p     4:0 2 3:924
                                    ¼              ð0:02891 2 0:03071Þ þ 0:03071 ¼ 0:0298
                                p0 D 4:076 2 3:924
          The two pressures are
                        pr ¼ 0:988 · 300 ¼ 296:4 kPa       and           pr ¼ 0:0298 · 300 ¼ 8:94 kPa
          The two Mach numbers are interpolated in Table D.1 to be
                                                 Me ¼ 0:149        and     2:94

9.5   Gas ﬂows can be considered to be incompressible if the Mach number is less than 0.3. Estimate
      the error in the stagnation pressure in air if M ¼ 0.3.
          The stagnation pressure is found by applying the energy equation between the free stream and the
          stagnation point where V0 ¼ 0. Assuming incompressible ﬂow, Eq. (9.3) with Q_ ¼ W_ S ¼ 0 and u~2 ¼
          u~1 ðno lossesÞ provides
                                                                    V2
                                                      p0 ¼ p þ r
                                                                    2
          For isentropic ﬂow with k ¼ 1.4, the energy equation (9.28) can be put in the form
                                                  p0 ¼ pð1 þ 0:2M2 Þ3:5
          This can be expanded using the binomial theorem ð1 þ xÞn ¼ 1 þ nx þ nðn 2 1Þx2 =2 þ . . . by letting
          x ¼ 0.2M2. We then have
                  p0 ¼ pð1 þ 0:7M2 þ 0:175M4 þ . . .Þ         or         p0 2 p ¼ pM2 ð0:7 þ 0:175M2 þ . . .Þ
CHAP. 9]                                      COMPRESSIBLE FLOW                                              199


           Using Eqs. (9.16) and (9.18), this takes the form
                                                            V2
                                              p0 2 p ¼ r       ð1 þ 0:25M2 þ . . .Þ
                                                            2
           Let M ¼ 0.3 so that
                                                                V2
                                              p0 2 p ¼ r           ð1 þ 0:0225 þ . . .Þ
                                                                2
           Compare this to the incompressible ﬂow equation above and we see that the error is about 2.25 percent.
           So, if M , 0.3 (about 100 m=s for air at standard conditions), the ﬂow of a gas is considered to be
           incompressible.

9.6   A pitot probe (Fig. 3.11) is used to measure the stagnation pressure in a supersonic ﬂow. The
      stagnation pressure is measured to be 360 kPa absolute in an airﬂow where the pressure is 90 kPa
      absolute and the temperature is 15– C. Find the free-stream velocity V1. (A shock wave will be
      positioned in front of the probe. Let state 2 be located just after the shock and p3 be the
      stagnation pressure at the probe opening.)
           The pressure ratio across the shock is given by Eq. (9.42)
                                                    p2   2k      k21
                                                       ¼    M 22
                                                    p1 k þ 1 1 k þ 1
           The Mach numbers are related by Eq. (9.41)
                                                                 ðk 2 1ÞM12 þ 2
                                                        M22 ¼
                                                                 2kM12 2 k þ 1
           The isentropic ﬂow from behind the shock to the stagnation point provides the pressure ratio as [see
           Eq. (9.28)]
                                            p3        k 2 1 2 k=ðk21Þ
                                               ¼ 1þ         M2
                                            p2          2
           The above three equations can be combined to eliminate p2 and M2 to yield the Raleigh pitot-tube
           formula for a supersonic ﬂow, namely
                                                        k þ 1 2 k=ðk21Þ
                                                             M1
                                               p3         2
                                                  ¼
                                               p1    2k         k 2 1 1=ðk21Þ
                                                          M12 2
                                                    kþ1         kþ1
           Using k ¼ 1.4, p1 ¼ 90 kPa, and p3 ¼ 350 kPa, the above equation becomes
                                               360         ð1:2M12 Þ3:5
                                                   ¼
                                                90   ð1:167M12 2 0:1667Þ2:5
           A trial-and-error solution results in
                                                             M1 ¼ 1:65
           The free-stream velocity is then
                                            pﬃﬃﬃﬃﬃﬃﬃ    pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                     V1 ¼ M1 kRT1 ¼ 1:65 1:4 · 287 · 288 ¼ 561

9.7   Air ﬂows with M1 ¼ 2 such that a weak oblique shock wave at b1 ¼ 40– reﬂects from a plane
      wall, as shown in Fig. 9.16. Estimate M3 and b3. (Note V3 must be parallel to the wall.)
                                                    1
                                                           V2
                            V1                                                            V3
                                                                                      2

                                                1                 2
                                                                             3


                                                         Figure 9.16
200                                         COMPRESSIBLE FLOW                                           [CHAP. 9



           The various angles are shown in Fig. 9.16. From Fig. 9.11 with b ¼ 40– and M ¼ 2, we see that
           y ¼ 11– . The normal shock wave is of magnitude

                                                 M1n ¼ 2 sin 40– ¼ 1:28

           From the shock (Table D.2), we ﬁnd M2n and then M2 to be

                                   M2n ¼ 0:7963 ¼ M2 sinð40– 2 11– Þ:       \ M2 ¼ 1:64
           The reﬂected wave must then turn the ﬂow through 11– to be parallel to the wall so that y2 is also 11– .
           Using Fig. 9.11 again at M2 ¼ 1.64, we ﬁnd b2 > 50– . So, M2n relative to the reﬂected shock is

                                                M2n ¼ 1:64 sin 50– ¼ 1:26

           From the shock table, we ﬁnd M3n and then M3 to be

                                   M3n ¼ 0:807 ¼ M3 sinð50– 2 11– Þ:      \ M3 ¼ 1:28
           Since b3 þ 11– ¼ 50– , we see that b3 ¼ 39– .




                                      Supplementary Problems
9.8    Show that cv ¼ R=ðk 2 1Þ:

9.9    Using English units, cp ¼ 0.24 Btu=(lbm-– R). Show that this is equivalent to 1.0 kJ= (kg·K).

9.10   Show that Eq. (9.8) implies Eq. (9.9) providing Ds ¼ 0:

9.11   Show that the energy equation (9.5) follows from Eq. (9.3).

9.12   Differentiate p=rk ¼ const and show that Eq. (9.15) results.




Speed of a Small Disturbance

9.13   Show that the energy equation relates the temperature rise to the velocity change for a small adiabatic
       disturbance traveling in a gas by cp DT ¼ 2c DV:

9.14   Show that a small disturbance travels in water at about 1450 m=s and in air at standard conditions at about
       340 m=s.

9.15   Two rocks are slammed together by a friend on one side of a lake. A listening device picks up the wave
       generated 0.75 s later. How far is it across the lake?

9.16   An underwater animal generates a signal that travels through water until it hits an object and then echoes
       back to the animal 0.46 s later. How far is the animal from the object?

9.17   Estimate the Mach number for a projectile ﬂying at:
           (a) 1000 m at 100 m=s
           (b) 10 000 m at 200 m=s
           (c) 30 000 m at 300 m=s
           (d) 10 000 m at 250 m=s
CHAP. 9]                                    COMPRESSIBLE FLOW                                                   201


9.18   A bolt of lightning lights up the sky and 1.5 s later you hear the thunder. How far did the lightning strike
       from your position?

9.19   A supersonic aircraft passes 200 m overhead on a day when the temperature is 26– C.
            Estimate how long it will be before you hear its sound after it passes directly overhead and how far the
       aircraft is from you if its Mach number is
            (a) 1.68
            (b) 2.02
            (c) 3.49

9.20   A small-amplitude wave travels through the atmosphere creating a pressure rise of 5 Pa. Estimate the
       temperature rise across the wave and the induced velocity behind the wave.




Isentropic Nozzle Flow

9.21   Show that
          (a) Eq. (9.21) follows from Eq. (9.20)
          (b) Eq. (9.24) follows from Eq. (9.22)
          (c) Eq. (9.26) follows from Eq. (9.24)
          (d) Eq. (9.33) follows from Eq. (9.31)
          (e) Eq. (9.34) follows from Eq. (9.33)

9.22   A pitot probe is used to measure the speed of a ground vehicle on the Salt Lake ﬂats. It measures 3400 Pa in
       28– C air. Estimate its speed assuming:
            (a) An isentropic process
            (b) The air to be incompressible

9.23   Rework Example 9.2 but assume the receiver pressure to be 100 kPa absolute. Use
          (a) The equations
          (b) Table D.1

9.24   A converging nozzle with an exit area of 10 cm2 is attached to a reservoir maintained at 250 kPa absolute
       and 20– C. Using equations only, calculate the mass ﬂux if the receiver pressure is maintained at:
           (a) 150 kPa absolute
           (b) 100 kPa absolute
           (c) 50 kPa absolute

9.25   Solve Prob. 9.24b using Table D.1.

9.26   A converging nozzle with an exit area of 10 cm2 is attached to a reservoir maintained at 350 kPa absolute
       and 20– C. Determine the receiver pressure that would just provide Me ¼ 1 and the mass ﬂux from the nozzle
       for that receiver pressure. Use (a) the equations and (b) Table D.1.

9.27   A converging nozzle with an exit area of 5 cm2 is attached to a reservoir maintained at 20– C and exhausts
       directly to the atmosphere. What reservoir pressure would just result in Me ¼ 1? Calculate the mass ﬂux for
       that pressure. Use (a) the equations and (b) Table D.1.

9.28   Double the reservoir pressure of Prob. 9.27 and calculate the increased mass ﬂux. Use the equations or
       Table D.1.
9.29   A large 25– C airline pressurized to 600 kPa absolute suddenly bursts. A hole with area 20 cm2 is measured
       from which the air escaped. Assuming the airline pressure remained constant, estimate the cubic meters of air
       that was lost to the atmosphere in the ﬁrst 30 s. (The same analysis can be used for a gas line that bursts.)
202                                             COMPRESSIBLE FLOW                                       [CHAP. 9



9.30   If hydrogen was contained in the reservoir of Prob. 9.27, calculate the mass ﬂux for the condition of that
       problem. The equations must be used.

9.31   A Venturi tube, shown in Fig. 9.17, is used to measure the mass ﬂux of air through the pipe by measuring the
       pressures before the reduced section and at the minimum area. If the temperature before the reduced section
       is 30– C, determine the mass ﬂux.

                                      200 kPa                     120 kPa




                           V


                                                         4 cm dia


                          12 cm dia

                                                    Figure 9.17

9.32   Air ﬂows through a converging–diverging nozzle attached from a reservoir maintained at 400 kPa absolute
       and 20– C to a receiver. If the throat and exit diameters are 10 and 24 cm, respectively, what two receiver
       pressures will result in isentropic ﬂow throughout such that M ¼ 1 at the throat? Use (a) equations only and
       (b) Table D.1.

9.33   Air ﬂows from a converging–diverging nozzle from a reservoir maintained at 400 kPa absolute and 20– C
       through a 12-cm-diameter throat. At what diameter in the diverging section will M ¼ 2? Use the equations
       or the tables.

9.34   Calculate the exit velocity and mass ﬂux for both pressures of Prob. 9.32.

9.35   Air enters a diffuser at 50 kPa absolute and 120– C with a M ¼ 2.4 and a mass ﬂux of 8.5 kg=s. Sketch the
       general shape of the diffuser and then determine the throat diameter and the exit pressure assuming
       isentropic ﬂow throughout. Neglect the exiting kinetic energy.




Normal Shock Wave

9.36   The temperature, pressure, and velocity before a normal shock wave are 20– C, 100 kPa absolute, and
       600 m=s, respectively. Determine the temperature, pressure, velocity, and Mach number after the shock
       wave. Assume air and use (a) the basic equations (9.35)–(9.37), (b) the specialized equations, and (c) the
       normal shock table.

9.37   Air ﬂows through a shock wave. Given the quantities in the ﬁrst parentheses before the shock and the
       quantities in the second parentheses after the shock, ﬁnd the unknown quantities. (Pressures are absolute.)
           (a) (20– C, 400 kPa, 480 m=s, M1) (T2, p2, M2, V2)
           (b) (20– C, 400 kPa, V1, M1) (T2, p2, 0.5, V2)
           (c) (20– C, 400 kPa, V1, M1) (T2, 125 kPa, M2, V2)

9.38   A large explosion occurs on the earth’s surface producing a shock wave that travels radially outward. At a
       particular location, the Mach number of the wave is 2.0. Determine the induced velocity behind the shock
       wave. Assume standard conditions.
CHAP. 9]                                    COMPRESSIBLE FLOW                                                    203


9.39   A pitot probe is used to measure the pressure in a supersonic pipe ﬂow (review Solved Problem 9.6). If the
       pressure in the pipe is 120 kPa absolute, the temperature is 30– C, and the Mach number is 2.0, what pressure
       is measured by the pitot probe?

9.40   Air ﬂows from a reservoir maintained at 400 kPa absolute and 20– C out a nozzle with a 10-cm-diameter
       throat and a 20-cm-diameter exit into a receiver. Estimate the receiver pressure needed to locate a shock
       wave at a diameter of 16 cm. Also, ﬁnd the mass ﬂux and the velocity just before the shock.

9.41   Air ﬂows from a reservoir through a nozzle into a receiver. The reservoir is maintained at 400 kPa absolute
       and 20– C. The nozzle has a 10-cm-diameter throat and a 20-cm-diameter exit. Determine the receiver
       pressure needed to locate a shock wave at the exit. For that pressure, calculate the mass ﬂux and the velocity
       just before the shock.




Oblique Shock Wave

9.42   A supersonic airﬂow changes direction 20– due to a sudden corner [Fig. 9.9(b)]. If T1 ¼ 40– C, p1 ¼ 60 kPa
       absolute, and V1 ¼ 900 m=s, calculate M2, p2, and V2 assuming (a) a weak shock and (b) a strong shock.

9.43   An airﬂow at 25– C and 50 kPa absolute with a velocity of 900 m=s is turned by an abrupt 25– corner with a
       weak oblique shock. Estimate the pressure, velocity, and Mach number after the corner.

9.44   A weak oblique shock reﬂects from a plane wall (Fig. 9.15). If M1 ¼ 3 and b1 ¼ 35– , ﬁnd the angle of the
       reﬂected oblique shock and M3.

9.45   If T1 ¼ 10– C, ﬁnd V3 for the reﬂected oblique shock of Prob. 9.44.

9.46   A strong oblique wave is reﬂected from a corner. If the upstream Mach number is 2.5 and the ﬂow turns
       through an angle of 25– , ﬁnd the obtuse angle the wave makes with the wall and the downstream Mach
       number.

9.47   If T1 ¼ 10– C in Prob. 9.46, calculate the downstream velocity.




Expansion Waves

9.48   An airﬂow with a Mach number of 2.4 turns a convex corner of 40– . If the temperature and pressure are 5– C
       and 60 kPa absolute, respectively, determine the Mach number, pressure, and velocity after the corner.

9.49   An airﬂow with M ¼ 3.6 is desired by turning a 20– C supersonic ﬂow with a Mach number of 1.8 around a
       convex corner. If the upstream pressure is 40 kPa absolute, what angle should the corner possess? What is
       the velocity after the corner?

9.50   A ﬂat plate, designed to ﬂy at an angle of 6– , is used as an airfoil in a supersonic ﬂow. Sketch the ﬂow
       pattern to be expected on the airfoil.

9.51   The airfoil of Prob. 9.50 is to ﬂy at M ¼ 2.4 at 16 000 m elevation. Find (a) the pressures on the upper and
       lower surfaces of the plate, (b) the Mach numbers (on the upper and lower parts) after the plate assuming the
       ﬂow to be parallel to the original direction, and (c) the lift coefﬁcient, deﬁned by
                                                               1
                                                  CL ¼ lift      r V 2A
                                                               2 1 1
204                                              COMPRESSIBLE FLOW                       [CHAP. 9



                              Answers to Supplementary Problems
9.8    See problem.

9.9    See problem.

9.10   See problem.

9.11   See problem.

9.12   See problem.

9.13   See problem.

9.14   See problem.

9.15   1087 m

9.16   333 m

9.17   (a) 0.297        (b)   0.668           (c)   0.996       (d)    0.835

9.18   510 m

9.19   (a) 336 m, 0.463 s           (b)    404 m, 0.501 s        (c)    672 m, 0.552 s

9.20   0.00406– C, 1.19 · 1025 m=s

9.21   See problem.

9.22   (a) 75.6 m=s           (b)     76.2 m=s

9.23   (a) 0.890 kg=s         (b)   0.890 kg=s

9.24   (a) 0.584 kg=s         (b)   0.590 kg=s          (c)   0.590 kg=s

9.25   0.590 kg=s

9.26   (a) 0.826 kg=s         (b)   0.826 kg=s

9.27   (a) 0.226 kg=s         (b)   0.226 kg=s

9.28   0.452 kg=s

9.29   44.5 m3

9.30   0.00187 kg=s

9.31   0.792 kg=s

9.32   (a) 388 and 6.69 kPa               (b) 397 and 6.79 kPa

9.33   15.59 cm
CHAP. 9]                                       COMPRESSIBLE FLOW                                        205


9.34   34.8 m=s and 7.41 kg=s, 632 m=s and 7.42 kg=s

9.35   9.23 cm, 731 kPa absolute

9.36   (a)   145– C, 340 kPa, 264 m=s, 0.629

9.37   (a) 1.4, 95– C, 848 kPa, 0.628, 264 m=s            (b) 906 m=s, 2.64, 395– C, 319 kPa, 259 m=s
       (c) 583 m=s, 1.7, 154– C, 0.640, 265 m=s

9.38   425 m=s

9.39   677 kPa

9.40   192 kPa, 7.41 kg=s, 569 m=s

9.41   118.2 kPa, 7.41 kg=s, 611 m=s

9.42   (a)   1.71, 192 kPa, 733 m=s        (b)    0.585, 431 kPa, 304 m=s

9.43   124 kPa absolute, 602 m=s, 1.51

9.44   47– , 1.39

9.45   667 m=s

9.46   104– , 0.67

9.47   324 m=s

9.48   4.98, 1.697 kPa, 998 m=s

9.49   39.4– , 835 m=s

9.51   (a)   6.915 kPa, 14.52 kPa        (b)     2.33, 2.46      (c) 0.182
                                        Chapter 10


Flows in Pipes
and Pumps

10.1     INTRODUCTION
Flows in pipes and ducts occur throughout the world. They are used to convey potable water,
wastewater, crude oil, gasoline, chemicals, and many other liquids. They vary in size from large piping—
                                                                                      -
e.g., the Alaska pipeline—to medium-sized ducts found in heating and air-conditioning systems to very
small tubing found in cardiovascular and pulmonary systems. In this chapter we begin with analysis of
the hydraulics associated with a single pipe, followed with a brief introduction to pumps, since they often
are an integral part of pipelines. Then we focus on the analysis of steady ﬂows in more complex systems
that are best solved with an iterative technique called the Hardy Cross method. We conclude with a brief
introduction to unsteady ﬂows in pipelines.


10.2     SIMPLE PIPE SYSTEMS
10.2.1    Losses
In Secs. 7.6.3 to 7.6.5 we represent piping losses with the Darcy – Weisbach relation, Eq. (7.78) to account
for friction and Eq. (7.86) to handle minor losses. They are repeated here for convenience:
                                                                  L V2
                                                         hL ¼ f                                       ð7:78Þ
                                                                  D 2g
                                                                   V2
                                                          hL ¼ K                                      ð7:86Þ
                                                                   2g
Since use will be made of those concepts, the reader should review those sections in their entirety before
proceeding. Figure 7.10 may be utilized to determine the friction factor. In addition to the Darcy –
Weisbach formulation, the Hazen – Williams formula has found wide use among practitioners. It is
                                                      K L
                                              hL ¼ 1:851 4:87 Q1:85                                 ð10:1Þ
                                                    C D
where Q ¼ discharge
       L ¼ length of the pipe element
       C ¼ coefﬁcient dependent on the pipe roughness
      K1 ¼ 10.59 (for SI units) and 4.72 (for English units); note that K1 depends on the system of units

                                                          206
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
CHAP. 10]                             FLOWS IN PIPES AND PUMPS                                              207



     Values of C are provided in Table 10.1. The Hazen – Williams loss formula is empirically based, and
is less accurate than the Darcy – Weisbach relation; hence Eq. (7.78) is preferred.

                            Table 10.1 Values of the Hazen – Williams Coefﬁcient

                       Type of pipe                                                       C
                       Extremely smooth; ﬁbrous cement                                 140
                       New or smooth cast iron; concrete                               130
                       Newly welded steel                                              120
                       Average cast iron; newly riveted steel; vitriﬁed clay           110
                       Cast iron or riveted steel after some years of use            95 – 100
                       Deteriorated old pipes                                        60 – 80



 EXAMPLE 10.1 A cast iron pipe (L ¼ 400 m, D ¼ 150 mm) is carrying 0.05 m3=s of water at 15– C. Compare
 the loss due to friction using the Darcy – Weisbach and the Hazen– Williams formulas.
      Solution: First determine the friction factor and ﬁnd the Hazen– Williams coefﬁcient:
                 Q    0:05                                                                VD
            V¼     ¼            ¼ 2:83m=s          n ¼ 1:141 · 1026 m2 =s          Re ¼      ¼ 3:72 · 105
                 A p · 0:152 =4                                                            n
     e 0:26
       ¼     ¼ 0:00173, and from Fig. 7.10: f ¼ 0.024, and from Table 10.1: C ¼ 100.
     d 150
 Using the Darcy – Weisbach relation, Eq. (7.78):
                                                  400   2:832
                                     hL ¼ 0:024 ·     ·         ¼ 26:2 m
                                                  0:15 2 · 9:81
 With the Hazen– Williams formula, Eq. (10.1):
                                            10:59 · 400
                                   hL ¼                      · 0:051:85 ¼ 34:1 m
                                          1001:85 · 0:154:87
 The Darcy – Weisbach relation provides the more accurate result.



10.2.2   Hydraulics of Simple Pipe Systems
Flows in single-pipe reaches are examined in Secs. 7.6.3 to 7.6.5. The reader should pay particular
attention to the use of the Moody diagram (Fig. 7.10) and to the three categories of pipe problems given
by Eqs. (7.81) to (7.83). Examples 7.6 and 7.7 illustrate how the analysis proceeds. In this section, we
study ﬂows in three relatively simple pipe systems: series, parallel, and branching. Solution techniques
are simpliﬁed due to the exclusion of pumps and lack of complexity of the piping; they are suitable for
use with calculators, spreadsheet algorithms, and computational software. The fundamental principle in
this so-called ad hoc approach is to identify the unknowns and write an equivalent number of
independent equations to be solved. Subsequent simpliﬁcation by eliminating as many variables as
possible results in a series of single-pipe problems to be solved simultaneously; these may be solved by
trial and error or by use of an equation system solver.
     The energy and continuity equations are employed to analyze pipe systems. Normally, the predicted
parameters are discharge Q and piezometric head H ¼ p=g þ z. Throughout this chapter we assume that
the kinetic energy term is negligible compared to the magnitude of the hydraulic grade line, that is,
V 2 =2g p p=g þ z. Referring to Fig. 10.1(a), the energy equation for a single reach of pipe is
                                                 X         L 1        SK
                                     HA 2 HB ¼      hf ¼ f         þ       Q2                      ð10:2Þ
                                                           D 2gA2 2gA2
208                                  FLOWS IN PIPES AND PUMPS                                        [CHAP. 10



                                 A


                                                 L, f, D, K                     B
                         HA
                                                              Q
                                                                                                HB

                                                      Datum

                                                     (a) Single element


                                     A

                                             Q
                                         1                                                  B
                                                                   2
                                                                                    3

                                         (b) Three elements in series

                                                              1    Q1
                                             A
                                                                                        B

                                                          2
                                                                  Q2

                                         (c) Two parallel elements


                                     A                                          B


                                             Q1
                                                                           2
                                                 1
                                                                        Q2              C
                                                           D
                                                      (junction)               Q3
                                                                       3



                                             (d) Three branch elements

                                     Figure 10.1 Simple pipe systems.



Here the Darcy – Weisbach equation is used to represent friction losses and SK is the sum of the minor
loss coefﬁcients in the reach. More simply, if we let the friction and minor loss terms be represented by a
resistant, or loss, coefﬁcient R, deﬁned as
                                                     1      L X
                                             R¼           f   þ     K                                ð10:3Þ
                                                   2gA2 D
Then Eq. (10.2) becomes
                                                         HA 2 HB ¼ RQ2                                  ð10:4Þ
CHAP. 10]                                 FLOWS IN PIPES AND PUMPS                                           209



This simpliﬁed relation contains all of the information necessary to solve a simple pipe problem that
employs the Darcy – Weisbach relation for pipe friction. We make use of that relationship exclusively
throughout the developments in this chapter.

 EXAMPLE 10.2 Compute the discharge using the pipe data of Example 10.1 if the difference in piezometric
 head is 20 m. Assume the minor loss coefﬁcients amount to SK ¼ 2:5 and f ¼ 0.025.
     Solution: First compute the resistance coefﬁcient with Eq. (10.3):
                      1   L                 1                     400
               R¼        f þ SK ¼                         0:025 ·      þ 2:5 ¼ 1:13 · 104 s2 =m5
                    2gA2 D        2 · 9:81ðp · 0:152 =4Þ2         0:15
      Then ﬁnd the discharge using Eq. (10.4):
                                      rﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                        HA 2 HB           20
                                 Q¼                ¼               ¼ 0:042 m3 =s
                                            R        1:13 · 104


    Figure 10.1(b) shows a series pipe system consisting of three reaches, each with a speciﬁed loss
coefﬁcient. Since the same discharge Q exists in each reach, the energy equation from location A to
location B is
                                HA 2 HB ¼ R1 Q2 þ R2 Q2 þ R3 Q2 ¼ ðR1 þ R2 þ R3 ÞQ2                       ð10:5Þ
Obviously, this relation can be expanded to any number of piping elements. To evaluate the loss
coefﬁcients, one can substitute Eq. (10.3), and employ Fig. 7.10 for the friction factor f along with Table
7.2 for the minor loss coefﬁcient K. Note that a trial-and-error solution results, since f is dependent on Q.
In many situations, the friction factor can be assumed constant; hence R can be evaluated with Eq. (10.3)
prior to determining either the discharge or the change in piezometric head. We proceed with that
assumption throughout this chapter.

 EXAMPLE 10.3 For the three pipes in series shown in Fig. 10.1(b), determine the discharge if the difference in
 piezometric head is HA 2 HB ¼ 10 m. Use L1 ¼ 2000 m, D1 ¼ 450 mm, L2 ¼ 650 m, D2 ¼ 150 mm, K2 ¼ 2.0,
 L3 ¼ 1650 m, D3 ¼ 300 mm, and f1 ¼ f2 ¼ f3 ¼ 0.03.
      Solution: First compute the resistance coefﬁcients using Eq. (10.3):
                                          1                    2000
                           R1 ¼                         0:03 ·       ¼ 269 s2 =m5
                                2 · 9:81ðp · 0:452 =4Þ2        0:45
                                          1                    650
                           R2 ¼                         0:03 ·      þ 2:0 ¼ 21 550 s2 =m5
                                2 · 9:81ðp · 0:152 =4Þ2        0:15
                                          1                    1650
                           R3 ¼                         0:03 ·       ¼ 1684 s2 =m5
                                2 · 9:81ðp · 0:302 =4Þ2        0:30
 Calculate the discharge with Eq. (10.4):
                               sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                   HA 2 HB                     10
                          Q¼                      ¼                            ¼ 0:0206 m3 =s
                                R1 þ R2 þ R3        269 þ 21 550 þ 1684


    Parallel piping is illustrated in Fig. 10.1(c); even though only two pipes are shown, any number of
pipes can be placed in parallel. The pipes are joined at locations A and B, and each pipe has its own
unique geometry and minor loss term. The continuity balance at either junction A or B requires that
                                                         Q ¼ Q1 þ Q2                                       ð10:6Þ
For the two pipe elements, the required energy equations from location A to B are
                                                       HA 2 HB ¼ R1 Q12
                                                                                                           ð10:7Þ
                                                       HA 2 HB ¼ R2 Q22
210                                     FLOWS IN PIPES AND PUMPS                                  [CHAP. 10



Assuming that Q is known, the unknowns in the above equations are Q1, Q2, and DH ¼ HA 2 HB. They
are solved simultaneously in the manner shown in the following example.

 EXAMPLE 10.4 Find the ﬂow distribution and change in hydraulic grade line for the parallel piping shown in
 Fig. 10.1(c) using the following data: L1 ¼ 50 m, D1 ¼ 100 mm, K1 ¼ 2, L2 ¼ 75 m, D2 ¼ 150 mm, K2 ¼ 10.
 The total discharge in the two pipes is Q ¼ 0.04 m3=s.
      Solution: Combine Eqs. (10.6) and (10.7) in the manner
                                        sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                         HA 2 HB       HA 2 HB pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ 1         1
                       Q ¼ Q1 þ Q2 ¼                 þ              ¼ HA 2 HB pﬃﬃﬃﬃ þ pﬃﬃﬃﬃ
                                             R1            R2                  R1      R2
 Note that HA 2 HB is also an unknown, and we ﬁrst solve for that value:
                                          1                       50
                          R1 ¼                          0:025 ·        þ 2 ¼ 11 980 s2 =m5
                               2 · 9:81ðp · 0:102 =4Þ2           0:10
                                          1                       75
                          R2 ¼                          0:030 ·        þ 10 ¼ 4082 s2 =m5
                               2 · 9:81ðp · 0:152 =4Þ2           0:15
                                            Q2                    0:042
                          HA 2 HB ¼                  2
                                                       ¼                        2
                                                                                  ¼ 2:604 m
                                        1       1             1           1
                                      pﬃﬃﬃﬃ þ pﬃﬃﬃﬃ        pﬃﬃﬃﬃﬃﬃﬃﬃﬃ þ pﬃﬃﬃﬃﬃﬃ
                                        R1      R2          11 980       4082
 Lastly, the ﬂows in the two parallel pipes are computed using Eq. (10.7):
                                         sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ sﬃﬃﬃﬃﬃﬃﬃﬃ
                                           HA 2 HB       2:604
                                   Q1 ¼               ¼          ¼ 0:0147 m3 =s
                                               R1       11 980
                                         sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ sﬃﬃﬃﬃﬃﬃﬃ
                                           HA 2 HB      2:604
                                   Q2 ¼               ¼         ¼ 0:0253 m3 =s
                                               R2       4082


     An example of branch piping is illustrated in Fig. 10.1(d); it is made up of three elements connected
to a single junction. Typically, the piezometric heads at locations A to C are considered to be known, and
the unknowns are the discharges Q1, Q2, and Q3 in each line and the piezometric head at location D.
Analysis proceeds by assuming the direction of ﬂow and writing the energy balance in each element:
                                                   HA 2 HD ¼ R1 Q12                                   ð10:8Þ

                                                   HD 2 HB ¼ R2 Q22                                   ð10:9Þ

                                                   HD 2 HC ¼ R3 Q32                                  ð10:10Þ
The continuity balance at location D is
                                                    Q1 2 Q2 2 Q3 ¼ 0                                 ð10:11Þ
Note that a ﬂow direction was assumed in each pipe. One method of solution is as follows:
      1. Assume HD at the junction.
      2. Compute Q1, Q2, and Q3 in the three branches using Eqs. (10.8) to (10.10).
      3. Substitute Q1, Q2, and Q3 into Eq. (10.11) to check for continuity balance. Generally, the ﬂow
         imbalance DQ ¼ Q1 2 Q2 2 Q3 will be nonzero at the junction.
      4. Adjust the head HD and repeat steps 2 and 3 until DQ is within desired limits. It may be necessary
         to correct the sign in one or more of the equations if during the iterations HD moves from above
         or below one of the reservoirs or vice versa.
    An alternative method of solution is to combine the equations and eliminate all of the variables
except one (commonly HD) and employ a numerical solving technique. Example 10.5 represents a level
of complexity that represents a limit using a calculator-based solution. For more complex systems that
CHAP. 10]                                      FLOWS IN PIPES AND PUMPS                                               211



might include pumps, additional reservoirs, or pipe elements, the network analysis described in Sec. 10.4
is recommended.

 EXAMPLE 10.5 Determine the ﬂow rates and the piezometric head at the junction for the branch system of
 Fig. 10.1(d). Assume constant friction factors. HA ¼ 12 m, HB ¼ 15 m, HC ¼ 5 m, f1 ¼ f2 ¼ f3 ¼ 0.02,
 L1 ¼ 200 m, D1 ¼ 100 mm, L2 ¼ 150 m, D2 ¼ 100 mm, L3 ¼ 750 m, D3 ¼ 150 mm.
     Solution: Use the four-step procedure outlined above. First compute the resistance coefﬁcients using
 Eq. (10.3); the result is R1 ¼ 33 890 s2=m5, R2 ¼ 27 280 s2=m5, and R3 ¼ 16 570 s2=m5. We assume that HD is
 lower than HA and HB, but higher than HC. Consequently, the resulting ﬂow directions are Q1 from A to D, Q2
 from B to D, and Q3 from D to C. An iterative solution is shown in the accompanying table. Iteration ceases
 when jDQj50:001 units.

       Iteration           HD                     Q1               Q2                  Q3          Q1 þ Q2 2 Q3
                        (assumed)             (Eq. (10.8))     (Eq. (10.10))       (Eq. (10.9))    (Eq. (10.11))
          1                  12                      0           0.01049             0.02055         2 0.01006
          2                  11                 0.00543          0.01211             0.01903         2 0.00149
          3                  10                 0.00768          0.01354             0.01737         þ 0.00385
          4                 10.74               0.00610          0.01250             0.01861         2 0.00002

 Hence the resulting solution is HD ¼ 10.7 m, Q1 ¼ 0.0061 m3=s, Q2 ¼ 0.0125 m3=s, and Q3 ¼ 0.0186 m3=s.


10.3   PUMPS IN PIPE SYSTEMS
Until now, we have considered systems that have not involved a pump. If a pump is included in the pipe
system and the ﬂow rate is speciﬁed, the solution is straightforward using the methods we have already
developed. On the other hand, if the discharge is not known, which is commonly the case, a trial-and-
error solution is required. The reason for this is that the pump head HP depends upon the discharge, as
shown by the pump characteristic curve, the solid curve in Fig. 10.2. Pump manufacturers provide the
characteristic curves. Figure 10.3 shows a complete set of curves for a manufactured centrifugal pump;
included are sets of head versus discharge curves for various impeller sizes, as well as efﬁciency and
power curves. The power requirement for a pump is given by the expression (see Eq. (4.25))

                                                              _ P ¼ gQHP
                                                              W                                                    ð10:12Þ
                                                                      Z
    Determining the discharge in a pumped line requires an additional relation, namely the demand
curve, which is generated by writing the energy balance across the system for varying discharges.
Referring to the pump – pipe system in Fig. 10.2, the energy equation (see Eq. (10.4)) for the pipe
including the pump is a quadratic in Q:
                                                         HP ¼ HB 2 HA þ RQ2                                        ð10:13Þ

                            H
                                                  HP
                                                                                               B
                      HD
                                                                           A            Q

                                                                               P        R
                   HB –HA
                                    HB –HA   + RQ2
                                                                Q
                                                         QD

                                      Figure 10.2 Pump and system demand curves.
212                                        FLOWS IN PIPES AND PUMPS                                                          [CHAP. 10



                                                                            Q(gal/min)
                                           0                 500                   1000              1500
                                     100
                                               260 40 50         60         70     75 P (%)
                                      90                                                                               300

                                      80       240
                                                                                                            75         250
                                      70
                                               220
                                      60                                                                               200
                                               205
                            Hp (m)    50                                                                                     Hp (ft)
                                                                                                     70                150
                                                  Outer diameter
                                      40         of impeller (mm)
                                      30                                                                               100

                                      20
                                                                                                                       50
                                      10

                                       0                                                                               0
                                     100
                                                                                                             260
                                                                                                            240
                           Wp (kw)                                                                    220
                                      50
                                                                                                    205


                                       0
                                      12
                                      10                     205            220
                                                                                                                       30
                                       8                                                                    260
                        NPSH(m)        6                                                            240                20 NPSH (ft)
                                       4                                                                               10
                                       2
                                                                                                                       0
                                           0         50    100        150         200   250   300     350        400
                                                                             Q(m3/h)

Figure 10.3   Centrifugal pump and performance curves for four different impellers. Water at 20– C is the pumped
              liquid. (Courtesy Sulzer Pumps Ltd).



The demand curve is illustrated in Fig. 10.2 by the dashed line (see Eq. (10.13)). The ﬁrst term on the
right-hand side of Eq. (10.13) is the static head and the second term accounts for the system losses. The
steepness of the demand curve depends on the losses in the piping; as the losses increase, the required
pumping head increases and vice versa. Piping may experience short-term alterations in the demand
curve such as throttling of valves, and over the long term, aging of pipes may permanently increase the
demand. The intersection of the pump characteristic curve and the demand curve will provide the design
head HD and discharge QD in Fig. 10.2. It is desirable to have the solution occur at or close to the point
of best efﬁciency of the pump.
    Instead of an actual pump curve, an approximate pump head– discharge representation is sometimes
used:
                                                     HP ðQÞ ¼ a0 þ a1 Q þ a2 Q2                                                   ð10:14Þ
where the coefﬁcients a0, a1, and a2 are assumed to be known; they may be found by substituting three
known data points from a speciﬁed pump curve into Eq. (10.14) and solving the three resulting equations
simultaneously.
CHAP. 10]                               FLOWS IN PIPES AND PUMPS                                                213



 EXAMPLE 10.6 Estimate the discharge in the pipe system shown in Fig. 10.2, and in addition ﬁnd the required
 pump power. For the pipe, L ¼ 700 m, D ¼ 300 mm, f ¼ 0.02, and HB 2 HA ¼ 30 m. Use the 240-mm curve in
 Fig. 10.3 for the pump head– discharge relation.
      Solution: First determine R from Eq. (10.3):
                                               1                    700
                               R¼                            0:02 ·      ¼ 476 s2 =m5
                                     2 · 9:81ðp · 0:302 =4Þ2        0:30
 A trial solution is utilized to determine the pump head and discharge. The procedure is as follows: (1) guess a
 discharge; (2) compute HP with Eq. (10.13); and (3) compare that value with the one from the 240-mm pump
 curve of Fig. 10.3. Continue estimating values of Q until the two pump heads agree. The solution is shown in the
 table.

                    Q, m3=h        Q, m3=s        HP, m (Eq. (10.13))         HP, m (Fig. 10.3)
                        150          0.042                  70.8                        74
                        250          0.069                  72.3                        67
                        200          0.056                  71.5                        72

 Hence, the approximate solution is Q ¼ 200 m3=h and HP ¼ 72 m. From Fig. 10.3, the efﬁciency is approximately
 75%, so that the required power is
                                     gQHp 9800 · 0:056 · 72
                              _P ¼
                              W          ¼                  ¼ 52 700 W or 706 hp
                                       Z        0:75
 In some instances, pumping installations may require a wide range of heads or discharges, so that one pump
 cannot meet the required demand range. In such situations, the pumps may be staged in series or in parallel to
 provide operation at greater efﬁciency. When a large variation in ﬂow demand occurs, two or more pumps may
 be placed in parallel, as in Fig. 10.4(a). The combined characteristic curve is determined by recognizing that the
 head HP across each pump is identical, and the total discharge through the system SQ is the sum of the
 discharges through each pump for a given head. For demands that require high heads, placing the pumps in
 series will provide a head greater than the pumps individually (Fig. 10.4(b)). Since the discharge through each
 pump in series is the same, the combined characteristic curve is found by summing the heads SHP across the
 pumps for a given discharge.


                                                             A
                Head


                                                             B


                                                     Pumps A and B combined


                                                                              System demand
                   HD

                                 Pump A             Pump B




                                                    QA             QB     QD = Q              Discharge
                                                 (a) Parallel pumping

                                              Figure 10.4    Continued
214                                      FLOWS IN PIPES AND PUMPS                                     [CHAP. 10



                                       Head                    A        B


                                                    Pumps A and B combined




                                                                       System demand

                                HD =    HP


                                              Pump B




                                              Pump A




                                                              QB     QD     Discharge

                                                       (b) Series pumping

                                       Figure 10.4 Multiple pump operation.


 EXAMPLE 10.7 Water is pumped between two reservoirs in a single pipe with the value of R ¼ 85 s2=m5. For
 the pump characteristic curve, use HP ¼ 22:9 þ 10:7Q 2 111Q2 . Compute the discharge Q and pump head HP
 for:
      (a) HB 2 HA ¼ 15 m with one pump placed in operation
      (b) HB 2 HA ¼ 15 m with two identical pumps operating in parallel
      (c) HB 2 HA ¼ 25 m with two pumps operating in series
      Solution: Since the pump curve is provided in quadratic form, Eqs. (10.13) and (10.14) can be combined to
 eliminate HP and solve for Q. The solutions are as follows:
 (a) Equate the system demand curve to the pump characteristic curve and solve the resulting quadratic equation:
                             15 þ 85Q2 ¼ 22:9 þ 10:7Q 2 111Q2
                             195Q2 2 10:7Q 2 7:9 ¼ 0
                                    1           pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                             Q¼          10:7 þ 10:72 þ 4 · 195 · 7:9 ¼ 0:23 m3 =s
                                 2 · 195
                             HP ¼ 15 þ 85 · 0:232 ¼ 19:5 m
 (b) For two pumps in parallel, the characteristic curve is
                                               Q       Q 2
                           HP ¼ 22:9 þ 10:7      2 111     ¼ 22:9 þ 5:35Q 2 27:75Q2
                                               2       2
 The system demand curve is equated to this result and solved for Q:
                           15 þ 85Q2 ¼ 22:9 þ 5:35Q 2 27:75Q2
                           112:8Q2 2 5:35Q 2 7:9 ¼ 0
                                    1           pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                           Q¼             5:35 þ 5:352 þ 4 · 112:8 · 7:9 ¼ 0:29 m3 =s
                                2 · 112:8
                           HP ¼ 15 þ 85 · 0:292 ¼ 22:2 m
CHAP. 10]                             FLOWS IN PIPES AND PUMPS                                          215


 (c) With two pumps in series, the characteristic curve becomes
                             HP ¼ 2ð22:9 þ 5:35Q 2 111Q2 Þ ¼ 45:8 þ 21:4Q 2 222Q2
 Equate this to the system demand curve and solve for Q:
                            25 þ 85Q2 ¼ 45:8 þ 21:4Q 2 222Q2
                            307Q2 2 21:4Q 2 20:8 ¼ 0
                                   1           pﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                            Q¼          21:4 þ 21:42 þ 4 · 307 · 20:8 ¼ 0:30 m3 =s
                                2 · 307
                            HP ¼ 25 þ 85 · 0:302 ¼ 32:5 m



10.4     PIPE NETWORKS
10.4.1    Network Equations
Simple pipe system solution techniques, as outlined above, are limited to the size and complexity of a
piping system that can be analyzed. Indeed, it is advantageous to seek a more generalized method that
can handle a system, or so-called network, consisting of a number of pipe elements, one or more pumps
and perhaps several reservoirs. Quite often the objective of the analysis would be to predict the
discharges in the network. There are a number of pipe network solutions available, and nearly all of
them make use of a trial-and-error method. The one technique that we utilize herein is called the Hardy
Cross method; it can easily be adapted to a computer-based algorithm; however, we make use of
spreadsheet software as an alternate.
     Consider piping as shown in Fig. 10.5(a); it is more complex than those analyzed in Secs. 10.2 and
10.3, hence it would be difﬁcult to solve in an ad hoc method. Any of the piping systems we have
previously studied in this chapter can be solved using the Hardy Cross technique, but ﬁrst we need to
state the problem in a consistent and systematic manner.
     Piping networks such as those shown in Fig. 10.5(a) can be viewed to be made up of interior nodes,
interior loops, and paths that connect two ﬁxed-grade nodes (sometimes these paths are called
pseudoloops). An interior node is a location where two or more pipes connect and the head is unknown,
and ﬁxed-grade nodes are reservoirs and locations of constant pressure. Figure 10.5(b) shows the
nodes and loops for the piping system of Fig. 10.5(a). Nodes A and E are ﬁxed-grade nodes, and nodes
B, C, and D are interior nodes. Loop I is an interior loop and loop II is a pseudoloop. For this or any
other pipe system, the generalized network equations are as follows.
  .    Energy balance in a clockwise positive manner around an interior loop or along a unique path or
       pseudoloop which connects ﬁxed-grade nodes:
                                       X
                                           ð6Þi ½Ri Qi 2 2 ðHP Þi þ DH ¼ 0                     ð10:15Þ

       where i ¼ pipe elements that make up the loop or path
         (HP)i ¼ head across a pump that may exist in pipe i
          DH ¼ difference in magnitude of the two ﬁxed-grade nodes in the path ordered in a clockwise
                 fashion across an imaginary pipe (the dashed line in Fig. 10.5(b))
       For an interior loop, DH ¼ 0, and if no pump is located in the loop or path, (HP)i ¼ 0. The plus or
       minus sign pertains to the assumed ﬂow direction in each pipe relative to clockwise positive.
  .    Continuity at an interior node:
                                                X
                                                  ð6Þj Qj 2 Qe ¼ 0                                 ð10:16Þ

       where the subscript j refers to all pipes connected to node j and Qe is the external demand. The plus
       or minus sign pertains to the assumed ﬂow direction (positive for ﬂow into the node and negative
       for ﬂow out).
216                                   FLOWS IN PIPES AND PUMPS                                       [CHAP. 10



                                                                          Qe
                                  A
                                                                  C
                                      5             4
                                                                      3                      E
                                          B
                                                        2                           1
                                                                  D

                                                 (a) Physical system



                                                    II                         Qe
                                      A
                                                            Q4             C
                                          Q5
                                                                  I            Q3                E
                                                B
                                                                 Q2
                                                                               D        Q1

                                                        (b) Loops and nodes

                                 Figure 10.5 Representative pipe network.



To determine if the network is properly deﬁned, one can use the following rule. Let F be the number of
ﬁxed-grade nodes, P the number of pipe elements, J the number of interior nodes, and L the number of
interior loops. Then, if the network is properly deﬁned the following relation will hold:
                                                        P ¼ J þ L þ F21                                ð10:17Þ

In Fig. 10.4, J ¼ 3, F ¼ 2, and P ¼ 5, so that L ¼ 1.


10.4.2   Hardy Cross Method
The Hardy Cross solution is a trial-and-error technique and it requires that the network equations be
linear. Equation (10.15) is a general relation that can be applied to any path or closed loop in a network;
as stated earlier, if there is no pump (HP)i ¼ 0, and for an interior loop DH ¼ 0. Let the variable
discharge Q~ be determined from a previous estimate, and Q be the new estimate. Then the nonlinear
terms in Eq. (10.15) are linearized in the following manner:

                                                       dðRQ2 Þ
                                                            2
                                      RQ2 ¼ RQ~ þ              ðQ 2 Q~ Þ þ · · ·
                                                         dQ                                            ð10:18Þ
                                                    2
                                               < RQ~ þ 2RQ~ ðQ 2 Q~ Þ

                                                    dHP ðQÞ
                                HP ðQÞ ¼ HP ðQ~ Þ þ          ðQ 2 Q~ Þ þ · · ·
                                                      dQ                                               ð10:19Þ
                                                           2
                                       < a0 þ a1 Q~ þ a2 Q~ þ ða1 þ 2a2 Q~ ÞðQ 2 Q~ Þ
CHAP. 10]                           FLOWS IN PIPES AND PUMPS                                           217



In expanding Eq. (10.19), we have made use of Eq. (10.14). The loop or path energy relation (Eq. (10.15))
now becomes
                               X               2                         2
                                  ð6Þi ½Ri Q~ i 2 ða0 þ a1 Q~ i þ a2 Q~ i Þ
                                  X                                                               ð10:20Þ
                                þ   ½2Ri Q~ i 2 ða1 þ 2a2 Q~ i Þ ðQi 2 Q~ i Þ þ DH ¼ 0

Note that the second term does not contain the plus or minus sign. Deﬁning a ﬂow adjustment
for a given loop or path to be DQ ¼ Q 2 Q~ , substituting it into Eq. (10.20) and solving for DQ, we
obtain
                                   P            2                          2
                                 2 ð6Þi ½Ri Q~ i 2 ða0 þ a1 Q~ i þ a2 Q~ i Þ 2 DH
                            DQ ¼            P                                                  ð10:21Þ
                                              ½2Ri Q~ i 2 ða1 þ 2a2 Q~ i Þ

In the Hardy Cross method, it is assumed that the ﬂow adjustment DQ is applied independently to all
pipes in a given loop. It is required that the algebraic sign of Q be positive in the direction of normal
pump operation; otherwise, the pump curve will not be represented properly and Eq. (10.21) will not be
valid. In addition, it is important that the discharge through the pump remains within the limits of the
data employed to generate the pump curve. For a closed loop in which no pumps or ﬁxed-grade nodes
exist, Eq. (10.21) reduces to the simpler form
                                                       P            2
                                                     2 ð6Þi Ri Q~ i
                                               DQ ¼     P                                          ð10:22Þ
                                                           2Ri Q~ i

In the Hardy Cross iterative solution, continuity (Eq. (10.16)) is satisﬁed initially with assumed ﬂows
that are assigned and remains satisﬁed throughout the solution process. The method is summarized in
the following steps:
  1. Assume an initial ﬂow distribution in the network that satisﬁes Eq. (10.16). The closer the initial
     estimates are to the true values, fewer iterations will be necessary for convergence. One rule to
     follow is to recognize that as R increases for a pipe element, Q will decrease.
  2. Determine DQ in each path or loop using either Eq. (10.21) or (10.22) as appropriate. The
     numerators will approach zero as the paths or loops become balanced.
  3. Adjust the ﬂows in each pipe element in all loops and paths using the relation
                                                          X
                                              Qi ¼ Q~ i þ    DQ                                 ð10:23Þ
                    P
     Here the term DQ is employed as a correction because a given pipe may be part of more than
     one loop or path. As a result, the correction will be the sum of corrections from all loops for which
     the pipe element is common.
  4. Repeat steps 2 and 3 until a desired accuracy is reached. One convergence criterion is
                                                 P
                                                   jQi 2 Q~ i j
                                                   P            #e                                  ð10:24Þ
                                                      jQi j

      where e is an arbitrarily small number, say 0.001, e ,0.005. Another criterion is to continue
      iteration until each of the loop DQ’s reach an arbitrarily small value.
218                                           FLOWS IN PIPES AND PUMPS                                                           [CHAP. 10



 EXAMPLE 10.8 Determine the ﬂow distribution and piezometric heads at the junctions using the Hardy Cross
 method for the network shown in Fig. 10.5(a). HA ¼ 45 m, HE ¼ 0, Qe ¼ 0.025 m3=s.

                                                                                                          P
                                   Pipe            L, m            D, mm                   f                  K
                                      1             100              100                 0.02                1
                                      2              75              100                 0.02                0
                                      3             120              150                 0.02                0
                                      4              80              150                 0.02                0
                                      5              20              300                 0.02                1


      Solution: There are three junctions (J ¼ 3), ﬁve pipes (P ¼ 5), and two ﬁxed-grade nodes (F ¼ 2), hence
 L ¼ 5 2 3 2 2 þ 1 ¼ 1 interior loop. In addition, there is one pseudoloop. The two loops and assumed ﬂow
 directions (clockwise positive) are shown in Fig. 10.5(b). Equation (10.22) is applied to loop I and Eq. (10.21) to
 loop II:
                                2ðR2 Q~ 2 jQ~ 2 j þ R3 Q~ 3 jQ~ 3 j 6 R4 Q~ 4 jQ~ 4 jÞ
                       DQI ¼
                                   2ðR1 jQ~ 1 j þ R2 jQ~ 2 j þ R3 jQ~ 3 jÞ

                                2ðR1 Q~ 1 jQ~ 1 j þ R3 Q~ 3 jQ~ 3 j þ R4 Q~ 4 jQ~ 4 j þ R5 Q~ 5 jQ~ 5 jÞ 2 ðHA 2 HE Þ
                      DQII ¼
                                                  2ðR1 jQ~ 1 j þ R3 jQ~ 3 j þ R4 jQ~ 4 j þ R5 jQ~ 5 jÞ
                            2
 Note that the terms 6RQ~ and RQ~ have been replaced by RQ~ jQ~ j and RjQ~ j in the equations which allow for the
 correct sign to be automatically attributed. The values of Q take on a positive or negative sign depending on the
 assumed ﬂow direction relative to the assigned positive clockwise direction for each loop. A spreadsheet solution
 is illustrated in the two tables, which show respectively the spreadsheet formulas and the numerical solution.
 Values of R are calculated with the given data using Eq. (10.3) and are entered in column B. Initial estimates of Q
 are provided in column C, and updated values are shown for four iterations in columns F, I, L, and O. The
 convergence criterion used here is to cease iterations when the absolute value of DQ falls below 0.001. Note that
 Q3 changes direction by the ﬁnal iteration. The discharges after the fourth iteration are shown in Fig. 10.6. The
 piezometric heads at junctions B, C, and D are
                                   HB ¼ HA 2 R5 Q52 ¼ 45 2 24 · 0:07252 ¼ 44:9 m
                                  HC ¼ HB 2 R4 Q42 ¼ 44:9 2 1741 · 0:0502 ¼ 40:5 m
                                  HD ¼ HE þ R1 Q12 ¼ 0 þ 17 350 · 0:04752 ¼ 39:2 m
 Spreadsheet Formulas
                            A             B                C                 D                          E               F
                 1                        R                Q               RQQ                     2RQ              Q
                 2
                 3                                                                                  Iteration 1
                 4
                 5 Loop1
                 6 Pipe 2        12390           –0.035             =B6*C6*ABS(C6)             =2*B6*ABS(C6)      =C6+E12
                 7 Pipe 3        2611            –0.015             =B7*C7*ABS(C7)             =2*B7*ABS(C7)      =C7+E12–E22
                 8 Pipe 4        1741             0.01              =B8*C8*ABS(C8)             =2*B8*ABS(C8)      =C8+E12–E22
                 9
                10                                                  =SUM(D6:D8)                =SUM(E6:E8)
                11
                12                                                                       QI= =–D10/E10
                13 Loop 2
                14 HA–HE                                            45
                15 Pipe 1        17350            –0.02             =B15*C15*ABS(C15)=2*B15*ABS(C15)              =C15+E22
                16 Pipe 3        2611              0.015            =B15*C15*ABS(C16)=2*B16*ABS(C16)              =C16+E22–E12
                17 Pipe 4        1741             –0.01             =B17*C17*ABS(C17)=2*B17 ABS(C17)              =C17+E22–E12
                18 Pipe 5        24               –0.045            =B18*C18*ABS(C18)=2*B18 ABS(C18)              =C18+E22
                19
                20                                                  =SUM(D14:D18)     =SUM(E15:E18)
                21                                                  =B16*C15*ABS(C16)
                22                                                              QII= =–D20/E20
CHAP. 10]                                                       FLOWS IN PIPES AND PUMPS                                                                                                  219



         Spreadsheet Solution
         A        B       C          D                E            F            G                H            I          J               K          L         M               N          O
 1                R       Q         RQQ          2RQ         Q         2RQ              2RQ           Q        RQQ          2RQ         Q        RQQ         2RQ         Q
 2
 3                                                Iteration 1                                Iteration 2                             Iteration 3                          Iteration 4
 4
 5     Loop 1
 6     Pipe 2     12390   –0.035     –15.178          867.300   –0.0191         –4.519           473.248     –0.0303    –11.355         750.165    –0.0235                   582.306    –0.0225
 7     Pipe 3      2611   –0.015      –0.587           78.330    0.0484          6.111           252.643      0.0198      1.023         103.368     0.0250      1.631        130.533    –0.0250
 8     Pipe 4      1741    0.01       –0.174           34.820    0.0734          9.375           255.511      0.0448      3.493         155.975     0.0500      4.352        174.089    –0.0500
 9
 10                                  –15.591          980.450                   10.967           981.402                 –6.838        1009.508                –0.858        886.928
 11                                                                                                                      –6.838
 12                                      QI=         1.59E–02                       QI=        1.12E–02                     QI=        6.77E–03                   QI=      9.68Ε−04
 13    Loop 2
 14    HA–HE                          45.000                                 45.000                                      45.000                                45.000
 15    Pipe 1     17350    –0.02      –6.940          694.000   –0.0675     –79.000            2341.502      –0.0501    –43.493        1737.349    –0.0485    –40.804       1682.804    –0.0475
 16    Pipe 3      2611    –0.015      0.587           78.330   –0.0484      –6.111             252.643      –0.0198     –1.023         103.368    –0.0250     –1.631        130.533    –0.0250
 17    Pipe 4      1741    –0.01      –0.174           34.820   –0.0734      –9.375             255.511      –0.0448     –3.493         155.975    –0.0500     –4.352        174.089    –0.0500
 18    Pipe 5        24    –0.045     –0.049            2.160   –0.0925      –0.205               4.439      –0.0751     –0.135           3.603    –0.0735     –0.130          3.528    –0.0725
 19
 20                                   38.425          809.310               –49.692            2854.094                  –3.144        2000.295                –1.917       1990.954
 21
 22                                       QII =    –4.75E–02                         QII =     1.74E–02                      QII =     1.57E–03                   QII =     9.63E–04
 23



                                                                                                     0.025


                                                                           0.05
                                                          0.0725
                                                                                                 0.025



                                                                       0.0225

                                                                                                           0.0475
                                                            Figure 10.6             Flow after four iterations.



10.4.3          Computer Analysis of Network Systems
The Hardy Cross analysis is a modiﬁed version of the method of successive approximations used to solve
a set of linear equations. Since it does not require the inversion of a matrix, the Hardy Cross method can
be used to solve relatively small networks using a calculator or spreadsheet software. However, for larger
networks that contain multiple loops and branches, spreadsheet programming becomes time-consuming
as well as cumbersome. Generalized pipe network solution software is now available that has robust
solutions and provides convenient input and output schemes. For example, the source code and users
manual for the cost-free network analysis program EPANET can be obtained from the website of the
United States Environmental Protection Agency (www.epa.gov). EPANET is a comprehensive program
that simulates both ﬂow and water quality in pressurized pipe networks. For the hydraulic analysis, it
incorporates a hybrid node – loop algorithm termed the gradient method. In addition to piping, systems
can include pumps, valves, reservoirs, and storage water tanks. Pipe friction losses are represented with
the Darcy – Weisbach, Hazen –Williams, or Chezy – Manning formulations.

10.5      UNSTEADY FLOW
While many transient, or unsteady, ﬂows have in the past focused on problems dealing with hydropower
systems, and water and oil pipelines, more recently applications have expanded to include control system
operation, and nuclear and thermal power plant piping. The excitation that generates the transient can
be one of a number of causes, but typically it is rapid valve closing or opening, pipe rupture or break,
pump or turbine operation, or cavitation phenomenon. In this section we focus on a single horizontal
pipe and examine two fundamental types of ﬂow: (1) incompressible and inelastic unsteady ﬂow, called
surging, and (2) slightly compressible and elastic unsteady ﬂow, termed water hammer.
220                                  FLOWS IN PIPES AND PUMPS                                    [CHAP. 10



10.5.1   Incompressible Flow
We consider a horizontal length L of pipe with constant diameter D, shown in Fig. 10.6. The upstream
end of the pipe is connected to a reservoir with head H1, and at the downstream end there is a valve
exiting to a reservoir with head H3. Both H1 and H3 are time invariant. Initially, in the pipe, there is a
steady velocity V0 and the valve is partially open. Then the valve is opened to a new position, resulting
ultimately in a new and increased steady-state velocity. For situations where the valve is closed, either
partially or completely, one must consider the possible occurrence of water hammer (see Sec. 10.5.2).
     In Fig. 10.7, location 2 is upstream of the valve and location 1 is just inside the pipe. Applying the
linear momentum equation to the water between the two locations, we have
                                                                      dV
                                         Aðp1 2 p2 Þ 2 t0 pDL ¼ rAL                                 ð10:25Þ
                                                                      dt
where A ¼ pipe cross section
      V ¼ time-variable velocity
      t0 ¼ wall shear stress




                 H1


                                                                                    H3



                                            V
                          1                          4                     2    3


                                                     L


                               Figure 10.7 Unsteady ﬂow in a horizontal pipe.
It is reasonable to assume quasi-steady ﬂow conditions across the valve so that
                                                               V2
                                                 p2 ¼ p3 þ K                                        ð10:26Þ
                                                               2g
where K is the valve loss coefﬁcient. We additionally assume that the Darcy – Weisbach friction factor f
based on steady-state ﬂow can be employed without serious error, and that it is furthermore constant.
The shear stress is (see Eq. (7.74)):
                                                        rfV 2
                                                  t0 ¼                                           ð10:27Þ
                                                          8
Substituting Eqs. (10.26) and (10.27) into Eq. (10.25), dividing by the liquid column mass rAL, and
recognizing that p1 2 p3 ¼ rgðH1 2 H3 Þ, we have, after rearranging,
                                       dV   f K V2   H 2 H3
                                          þ  þ     2g 1     ¼0                                      ð10:28Þ
                                       dt   D L 2       L
This relation for unsteady incompressible ﬂow has the initial condition V ¼ V0 at time t ¼ 0. After the
valve is opened further by altering the coefﬁcient K, the velocity accelerates to a ﬁnal steady-state
velocity Vss. Since at steady-state conditions, dV=dt ¼ 0, we can determine Vss by setting the derivative in
Eq. (10.28) to zero and solving for V ¼ Vss:          sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                                       2gðH1 2 H3 Þ
                                                Vss ¼                                               ð10:29Þ
                                                         fL=D þ K
CHAP. 10]                                 FLOWS IN PIPES AND PUMPS                                               221



Substituting Eq. (10.29) into Eq. (10.28), we can separate variables and express the result in integral
form:
                                       Zt         Vss2 L  ZV      dV
                                          dt ¼                                                  ð10:30Þ
                                        0      gðH1 2 H3 Þ V0 Vss2 2 V 2
After integrating, the result provides a relation between the velocity and the time subsequent to the valve
excitation:
                                               Vss L     ðV þ VÞðVss 2 V0 Þ
                                      t¼               ln ss                                        ð10:31Þ
                                           2gðH1 2 H3 Þ ðVss 2 VÞðVss þ V0 Þ
According to the result, inﬁnite time is required for steady-state velocity Vss to be reached. In reality, it
will be attained somewhat sooner since losses have not been completely accounted for. However, we can
state for engineering purposes that the time when a percentage of Vss has been reached is adequate using
the equation. Note that V0 may be equal to zero, i.e., initially the ﬂuid is at rest. Remember that Eq.
(10.31) is based on assuming that the liquid is incompressible and the pipe is inelastic; Sec. 10.5.2
addresses the situation in which those assumptions are not valid.

 EXAMPLE 10.9 A horizontal pipe (L ¼ 500 m, D ¼ 250 mm, V0 ¼ 0.35 m=s) is suddenly subjected to a new
 head differential H1 2 H3 ¼ 15 m when a valve at the downstream end is suddenly opened wider and its
 coefﬁcient changes to K ¼ 0.2. If the friction factor is f ¼ 0.02, determine the ﬁnal steady-state velocity and the
 time when the actual velocity is 99% of that ﬁnal value.
     Solution: The ﬁnal steady-state velocity is determined by substituting the given data into Eq. (10.29):
                                           sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                                  2 · 9:81 · 15
                                    Vss ¼                                 ¼ 2:705 m=s
                                             0:02 · 500=0:250 þ 0:2
 Ninety-nine percent of Vss is V99 ¼ 0:99Vss ¼ 0:99 · 2:705 ¼ 2:68 m=s. The time corresponding to that velocity is
 found using Eq. (10.31):
                                     2:705 · 500 ð2:705 þ 2:68Þð2:705 2 0:35Þ
                             t99 ¼                ln                            ¼ 23:5 s
                                     2 · 9:81 · 15 ð2:705 2 2:68Þð2:705 þ 0:35Þ
 The ﬁnal steady-state velocity is 2.70 m=s and the time when the velocity is 99% of that value is approximately
 23.5 s.



10.5.2   Compressible Flow of Liquids
There are a number of situations in which a liquid-ﬁlled pipe, when subjected to an excitation, may not
react in an incompressible, rigid manner. Indeed, both liquid compressibility and pipe elasticity play a
signiﬁcant role in the nature of the response. This action is traditionally caller water hammer, but it can
occur in piping that contains any type of liquid. Herein, we focus our attention to a simple situation in
which a valve at the downstream end of a pipe closes rapidly to initiate water hammer.
     There are two fundamental equations to develop that will enable us to understand the nature in
which pressure waves travel in the pipe due to water hammer. Again, consider the horizontal pipe
shown in Fig. 10.7. In contrast to the development in Sec. 10.5.1, we now assume that the valve closes
rapidly so that the ﬂuid compressibility and pipe elasticity occur. The valve movement causes an
acoustic, or pressure, wave to propagate upstream with speed a. Figure 10.8(a) is a control volume of
liquid in the pipe upstream of the valve, showing the pressure wavefront located at a given instant.
Since unsteady ﬂow is taking place inside the control volume, the velocity upstream of the front is V,
while at the exit to the control volume it is V þ DV. The wavefront can be made to appear stationary
by superposing to the right the acoustic velocity a; the result is shown in Fig. 10.8(b), where the
entrance velocity is now V þ a and the exit velocity is V þ DV þ a. Due to the passage of the wave,
the pressure p, pipe area A, and liquid density r are altered to p þ Dp, A þ DA, and r þ Dr,
respectively.
222                                        FLOWS IN PIPES AND PUMPS                                   [CHAP. 10



                                 Instantaneous position of wave




                              V                    a                             V+ V




                                                              (a)




                          V+a                                                    V+ V+a




                                                              (b)




                            pA                                                   (p + p)(A + A)
                                            (p +       p) A



                                                              (c)

Figure 10.8 Pressure wave traveling in a pipe: (a) wave moving to the left at speed a; (b) wave appears stationary
            using superposition principle; (c) pressure forces acting on control volume.

      Apply the conversation of mass to the control volume of Fig. 10.8(b):
                                    0 ¼ ðr þ DrÞðV þ DV þ aÞðA þ DAÞ 2 rðV þ aÞA                          ð10:32Þ
With reference to Fig. 10.8(c), we neglect frictional and gravitational forces so that only pressure forces
act on the control volume in the ﬂow direction, and apply the conversation of momentum with the result
                 pA þ ðp þ DpÞA 2 ðp þ DpÞðA þ DAÞ ¼ rAðV þ aÞ½V þ DV þ a 2 ðV þ aÞ                       ð10:33Þ
                                                                                  2       3
Expanding Eqs. (10.32) and (10.33) and deleting terms containing D and D since they are smaller than
the remaining ones, we have the results
                                     rADV þ ðV þ aÞðADr þ rDAÞ ¼ 0                           ð10:34Þ

                                                        2ADp ¼ rAðV þ aÞDV                                ð10:35Þ
In almost all industrial ﬂow situations, V p a, so that Eq. (10.35) reduces to
                                                                    Dp ¼ 2rADV                            ð10:36Þ
    Equation (10.36) is labeled the Joukowsky equation; it relates the pressure change to the identity, the
acoustic wave speed and the change in velocity. It is clear that a velocity reduction (negative DV) results
in a pressure rise (positive Dp) and a velocity increase results in a pressure drop. The wave, passing
through the control volume, yields the altered conditions p þ Dp, V þ DV, A þ DA, and r þ Dr. These
conditions will persist in the pipe until the moment when the wave reﬂects from the upstream boundary
and returns to the given position; this wave motion will be discussed later.
    In order to determine magnitude of the acoustic wave speed, we combine Eqs. (10.34) and (10.35)
and eliminate DV, recognizing again that V p a:
                                                               Dp Dr DA
                                                                   ¼   þ                                  ð10:37Þ
                                                               ra2   r   A
CHAP. 10]                             FLOWS IN PIPES AND PUMPS                                          223



The relative change in density is related to the change in pressure by the relation Dr=r ¼ Dp=B, where B
is the bulk modulus of elasticity for the liquid. Also, the relative change in pipe area is related to the
change in pressure using DA=A ¼ DpðD=eEÞ. In this latter relation we have assumed instantaneous elastic
response of a thin-wall circular pipe to pressure changes, with E being the elastic modulus of the pipe
wall material and e the pipe thickness. Substituting these two relations into Eq. (10.37) and rearranging,
we have the expression for the pressure pulse wave speed:
                                                  sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                                          B=r
                                               a¼                                                   ð10:38Þ
                                                   1 þ ðD=eÞðB=EÞ

It can be seen that a depends upon the properties of the liquid contained in the pipe (r and B) and those
of the pipe wall (D, e,pﬃﬃﬃﬃﬃ
                         and E). If the pipe is very rigid, then the denominator approaches unity and Eq.
(10.38) becomes a ¼ B=r, which is the speed of sound in an unbounded liquid. Note that the effect of
pipe elasticity is to reduce the magnitude of the pressure wave.
     In addition to using Eqs. (10.36) and (10.38) to predict the pressure rise and pressure pulse wave
speed, it is necessary to understand the periodic nature of water hammer in a pipe of length L.
Consider the case in which a downstream valve is suddenly closed in a horizontal, frictionless pipe
with an open reservoir at the upstream end. One cycle of motion is illustrated in Fig. 10.9 and
described as follows:
  .   A steady-state velocity V0 exists throughout, the hydraulic grade line is horizontal, and the valve is
      suddenly closed at time zero.
  .   The wave travels upstream at speed a, subsequent to valve closure, and behind the wave the
      velocity is zero, the pressure rises by amount Dp, the liquid is compressed, and the pipe slightly
      expanded.
  .   The wave reaches the reservoir at time L=a, and an unbalanced force acts at the pipe inlet. At
      that location, the pipe pressure reduces to the reservoir pressure and the velocity reverses
      direction.
  .   The wave propagates downstream to the valve.
  .   The wave reaches the valve at time 2L=a and the velocity has magnitude 2V0 throughout the pipe.
  .   The velocity reduces to zero and the pressure reduces by magnitude Dp, adjacent to the closed valve.
      Behind the wave, the liquid is expanded and the pipe wall is contracted. (If the pressure behind the
      wave reduces to vapor pressure, cavitation will occur causing the liquid to vaporize, a condition
      termed column separation.)
  .   The pressure wave reaches the reservoir at time 3L=a, where an unbalanced condition again occurs,
      and opposite in magnitude to that at time L=a.
  .   Forces equilibrate and a wave travels downstream with elevated pressure Dp and liquid
      velocityþV0 behind the front.
  .   The wave reaches the valve at time 4L=a with initial steady-state conditions once again prevailing
      throughout the pipe.
The process repeats itself every 4L=a seconds and for the ideal frictionless sequence described herein
the motion will be cyclic. The pressure waveform at the valve and midpoint of the pipe, and the
velocity at the pipe entrance are shown in Fig. 10.9. In a real pipe, the action of liquid friction, pipe
motion, and inelastic behavior of the pipe material will eventually cause the water hammer oscillation
to dissipate.
       The pressure rise Dp predicted by Eq. (10.36) is based on the assumption that the valve closes
instantaneously, but it can also be used to predict the maximum pressure rise for valve closure in any
time less than 2L=a, the travel time for the pressure wave to travel from the valve to the reservoir and
back again. For valve closure times greater than 2L=a, and for more complicated piping systems that
may contain multiple piping elements, addition of friction, and more complicated boundary conditions
such as pumps and surge suppressors, computer-based analyses are required.
224                                      FLOWS IN PIPES AND PUMPS                                          [CHAP. 10



                              P2


                  P = aV0

                  P1 = H1

                        0                                                                        ta/L
                               0     2     4     6     8     10    12    14    16    18    20


                              P4


                  P = aV0

                  P1 = H1

                        0                                                                        ta/L
                               0     2     4     6     8     10    12    14    16    18    20


                              V1




                         V0
                        0                                                                        ta/L
                               0     2     4     6     8     10    12    14    16    18    20



  Figure 10.9 Pressure waves at the valve (p2) and pipe midpoint (p4), and velocity at the pipe entrance (V1).


 EXAMPLE 10.10 A steel pipe (E ¼ 220 · 106 kPa, L ¼ 2300 m, D ¼ 500 mm, e ¼ 10 mm) conveys water
 with an initial velocity of V0 ¼ 0.75 m=s. A valve at the downstream end of the horizontal pipe is closed
 suddenly so that the excitation is considered instantaneous, reducing the velocity to zero. Determine (a) the
 pressure pulse wave speed in the pipe, (b) the speed of sound in an unbounded water medium, (c) the pressure
 rise at the closed valve, (d) the time it takes for the wave to travel to the reservoir and return to the valve, and
 (e) the period of water hammer oscillation.
      Solution: Since the water temperature is not speciﬁed, assume that B ¼ 210 · 107 Pa and r ¼ 1000 kg=m3.
 (a) The wave speed is computed using Eq. (10.38):
                                       vﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                       u
                                       u 210 · 107 =1000
                                    a¼uu                          ¼ 1190 m=s
                                       t     500 210 · 107
                                         1þ       ·
                                              10 220 · 109
 (b) The speed of sound in an unbounded medium is
                                        sﬃﬃ sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                         B     210 · 107
                                     a¼     ¼             ¼ 1450 m=s
                                          r       1000

 Note that the speed of sound in the water medium is about 23% higher than the wave speed in the pipe.
 (c) Equation (10.36) is employed to ﬁnd the pressure rise, noting that the reduction in velocity is DV ¼ 2V0 :
                               Dp ¼ 21000 · 1190ð20:75Þ ¼ 8:92 · 105 Pa or 892 kPa
 (d) The time of wave to travel two pipe lengths is 2L=a ¼ 2 · 2300=1190 ¼ 3:87 s
 (e) The period of oscillation is 4L=a ¼ 4 · 2300=1190 ¼ 7:73 s.
CHAP. 10]                                   FLOWS IN PIPES AND PUMPS                                            225



                                               Solved Problems

10.1   Find the ﬂow distribution in the three-parallel pipe system shown in Fig. 10.10. Qin ¼
       2500 L=min.
                                              P                                      1
        Element L, m D, mm              f         K                  Qin     A
            1       50      75        0.02     2                                             2              B
            2       80      85        0.03     4
                                                                                                        3
            3       120     100       0.025    2
                                                                                         Figure 10.10

            The resistance coefﬁcients are computed using Eq. (10.3); the results are R1 ¼ 40 060, R2 ¼ 34 280,
            R3 ¼ 22 320. Then write Eqs. (10.6) and (10.7) for three elements, combine, and solve for HA 2 HB:
                                     Qin2                        ð2:50=60Þ2
                 HA 2 HB ¼      21=2 21=2 21=2 2
                                                 ¼        21=2
                                                                                            ¼ 5:94 m
                              ðR1 þ R2 þ R3 Þ      ð40 060     þ 34 28021=2 þ 22 32021=2 Þ2
            The individual discharges are
                                      sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ sﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                        HA 2 HB         5:94
                                Q1 ¼               ¼           ¼ 0:0122 m3 =s or 731 L=min
                                            R1         40 060
                                      sﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                          5:94
                                Q2 ¼             ¼ 0:0132 m3 =s or 790 L=min
                                        34 280
                                      sﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                          5:94
                                Q3 ¼             ¼ 0:0163 m3 =s or 979 L=min
                                        22 320


10.2   Find the water ﬂow distribution and the piezometric head at the junction of Fig. 10.11. The
       pump head – discharge curve is HP ¼ 20 2 30Q2, where the head is in m and the discharge
       is in m3=s. HA ¼ 10 m, HB ¼ 20 m, HC ¼ 18 m, R1 ¼ 112.1 s2=m5, R2 ¼ 232.4 s2=m5, R3 ¼
       1773 s2=m5.
                                                             B


                                                                                 C
                             A
                                                         2
                                              1                       3
                                  P
                                                        D

                                                      Figure 10.11


            Let HD be the hydraulic grade line at the junction. Write the energy equations for each branch:
                 Pipe 1 : 10 þ HP ¼ R1 Q12 þ HD or HD ¼ 10 þ ð20 2 30Q12 Þ 2 112:1Q12 ¼ 30 2 142:1Q12
                                                   sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                    2               ðHD 2 20Þ
                 Pipe 2 : HD ¼ R2 Q2 þ 20 or Q2 ¼
                                                       232:4
                                                   sﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                                    ðHD 2 18Þ
                 Pipe 3 : HD ¼ R3 Q32 þ 18 or Q3 ¼
                                                        1773
                                   P
            Continuity at junction: Q ¼ Q1 2 Q2 2 Q3 ¼ 0
226                                    FLOWS IN PIPES AND PUMPS                                        [CHAP. 10


                                                                    P
           Assume Q1 , then solve for HD, Q2, and Q3 until j            Qj is acceptably low:
                                                                                         P
                      Q1, m3=s       HD, m           Q2, m3=s           Q3, m3=s             Q, m3=s
                        0.15          26.80           0.1711             0.0705          20.0916
                        0.20          24.32           0.1363             0.0597          þ0.004
                        0.1982        24.42           0.1379             0.0602          20.0001

           Hence, the approximate solution is
                        Q1 ¼ 0:198 m3 =s, Q2 ¼ 0:138 m3 =s, Q3 ¼ 0:060 m3 =s, and HD ¼ 24:4 m


10.3   Water is pumped through three pipes in series. Compute the discharge if the power delivered to
       the pump is W_ P ¼ 1920 kW and the pump efﬁciency is Z ¼ 82%. The pipe resistance coefﬁcients
       are R1 ¼ 13.2 s2=m5, R2 ¼ 204.1 s2=m5, R3 ¼ 25.8 s2=m5, and the head difference between the
       downstream and upstream reservoirs is 50 m.
           Employ Eq. (10.12) for the pump head and write the energy equation from the lower to the upper
           reservoir as a function of the unknown discharge Q:

                                              _ PZ
                                              W
                                     FðQÞ ¼        2 ½HB 2 HA þ ðR1 þ R2 þ R3 ÞQ2
                                              gQ

           Substituting the given data into the relations results in

                                                           160:5
                                                  FðQÞ ¼         2 243:1Q2 2 50
                                                            Q

           A root-solving algorithm, trial method, or exact solution can be used to ﬁnd the result Q ¼ 0.792 m3=s.


10.4   Determine the ﬂow of water in the system shown in Fig. 10.12 using the Hardy Cross method.
       The pump curve is HP ¼ 30 2 8.33Q2, with HP in m and Q in m3=s. Use R1 ¼ 30 s2=m5,
       R2 ¼ 20 s2=m5, DH ¼ 20 m, and Qe ¼ 0.25 m3=s.



                                                                                     H
                                              2

                                                                          Q1
                                                                1
                                                                    P
                                                      Qe


                                                     Figure 10.12
           Consider the ﬂow correction in a clockwise sense through the system:

                                          2½R1 Q1 jQ1 j 2 ða0 2 a2 Q12 Þ þ R2 Q2 jQ2 j 2 DH
                                  DQ ¼
                                                    2ðR1 jQ1 j 2 a2 Q1 þ R2 jQ2 jÞ
                                          2½30Q1 jQ1 j 2 ð30 2 8:33Q12 Þ 2 20Q2 jQ2 j 2 20
                                      ¼
                                                  2ð30jQ1 j þ 8:33Q1 þ 40jQ2 jÞ

           Assume Q1 ¼ 0.650 m3=s, Q2 ¼ 0.400 m3=s, and iterate until jDQj # 0:001 m3 =s.
CHAP. 10]                              FLOWS IN PIPES AND PUMPS                                                 227



                                      Q1, m3=s       Q2, m3=s       DQ, m3=s
                                         0.640        0.390          20.030
                                         0.610        0.360          20.011
                                         0.599        0.349          20.004
                                         0.595        0.345          20.001

            Hence Q1 ¼ 0.595 m3=s and Q2 ¼ 0.345 m3=s.


10.5   Water (B ¼ 2.20 GPa) is ﬂowing in a pipe (D ¼ 200 mm, L ¼ 800 m). The pipe is cast iron
       (E ¼ 150 GPa, e ¼ 12 mm). A reservoir is situated at the upstream end of the pipe, and
       downstream there is a valve. At steady-state conditions, the discharge is Q ¼ 50 L=s, and then a
       valve is rapidly actuated.
       (a) Determine the time it takes for the pressure wave to travel from the valve to the reservoir and
           back to the valve.
       (b) What is the change in pressure at the valve if the valve is partially opened and the original
           discharge is doubled?
       (c) What is the change in pressure at the valve if the valve is partially closed and the original
           discharge is halved?
       Compute the acoustic wave speed:
                                vﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ v
                                                 u
                                                  ﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ
                                u      B         u            220 · 107
                                u                                                  ! ¼ 1330 m=s
                              a¼u               ¼u
                                                 u
                                t        DB      t             200 · 2:20 · 109
                                 r 1þ             1000 1 þ
                                          eE                    12 · 150 · 109


                        L      800
            (a) t ¼ 2 ·   ¼2·      ¼ 1:203 s
                        a     1330
            (b) First compute the change in velocity and then use Eq. (10.36) to compute the pressure change
                (assume water hammer occurs):

                                                  Q         0:05
                                        DV ¼           ¼              ¼ 1:592 m=s
                                                 pD2 =4 0:7854 · 0:22

                          Dp ¼ 2raDV ¼ 21000 · 1330 · 1:592 ¼ 22:12 · 106 Pa or 2 2120 kPa

               Note the large pressure reduction due to the water hammer effect. The original pressure at the valve
               must be sufﬁciently large so that cavitation will not occur. Cavitation at the valve could be avoided
               by opening the valve slowly.
            (c) The change in velocity and the pressure rise are
                                                        0:05=2
                                           DV ¼ 2                  ¼ 20:796 m=s
                                                     0:7854 · 0:22

                                       Dp ¼ 21000 · 1330ð20:796Þ ¼ 1:06 · 106 Pa
               Hence the pressure rise will be 1060 kPa.
228                                    FLOWS IN PIPES AND PUMPS                                               [CHAP. 10



                                       Supplementary Problems

10.6   A pump is located between two reaches of horizontal piping. The conditions upstream of the
       pump are D1 ¼ 75 mm and p1 ¼ 450 kPa, and downstream of the pump D2 ¼ 100 mm and
       p2 ¼ 900 kPa. For a discharge of Q ¼ 100 L=min and a loss across the pump of hL ¼ 7 m, what is
       the required input power of the pump if its efﬁciency is 78%?

10.7   Two pipes in series have the following properties: L1 ¼ 200 m, D1 ¼ 400 mm, K1 ¼ 2,
       L2 ¼ 650 m, D2 ¼ 350 mm, K2 ¼ 3. The upstream piezometric head is HA ¼ 200 m and
       downstream HB ¼ 57 m. For both pipes, the friction factor is f ¼ 0.025. Estimate the discharge
       ﬂowing in the two pipes.

10.8   Water ﬂows in the system shown. The pump curve is approximated by HP ¼ 150 2 5Q12 , with HP
       in m and Q in m3=s. Find (a) the ﬂow distribution. (b) If the pump efﬁciency is 75%, what is the
       required pump power? Use R1 ¼ 400 s2=m5, R2 ¼ 1000 s2=m5, R3 ¼ 1500 s2=m5, HA ¼ 10 m, and
       HB ¼ 40 m.
                                                                2
                                           A
                                               p
                                                   1                            B
                                                                 3

10.9   An oil pipeline (S ¼ 0.86) has three segments as shown, with a booster pump for each segment
       employed to overcome pipe friction. Reservoirs A and B are at the same elevation. Find the
       discharge for the following conditions:
                                Pipe           R, s2=m5         _ P , kW
                                                                W                   Z, %
                                   1               40 000           200              80
                                   2               30 000           200              80
                                   3           200 000              250              70


                               A                                                          B
                                   P                P           P
                                       1                    2              3

10.10 Oil (S ¼ 0.92) is pumped from a storage tank and discharges into a reservoir through a pipe
      whose length is L ¼ 550 m and diameter is D ¼ 350 mm. The pump efﬁciency is Z ¼ 80% and its
      power output is W_ P ¼ 10 kW. Determine the discharge Q if the elevation in the tank is zA ¼ 24 m,
      the tank pressure is pA ¼ 110 kPa, and the lower reservoir elevation is zB ¼ 18 m. The sum of the
      minor losses in the pipe is SK ¼ 4.5 and the friction factor is f ¼ 0.015.

10.11 Determine the total discharge and the individual ﬂows in the four parallel pipes shown. The
      hydraulic grade line difference between A and B is HA 2 HB ¼ 60 m. The following data apply:
                                                                                                                 P
                        1                                           Pipe       L, m           D, mm     f            K
                        2                                            1          650            850    0.02        1
        A                                  B
                                                                      2        1000           1000    0.025       3
                        3
                                                                      3         500            750    0.015       0
                        4
                                                                      4         750           1000    0.03        2
CHAP. 10]                                FLOWS IN PIPES AND PUMPS                                                         229



10.12 What is the required head and discharge of water to be handled by the pump for the branching
      system? The ﬂow in pipe 3 is Q3 ¼ 40 L=s in the direction shown. Use HA ¼ 3 m, HB ¼ 11.5 m,
      HC ¼ 12 m, HD ¼ 10 m, R1 ¼ 1400 s2=m5, R2 ¼ 2000 s2=m5, R3 ¼ 1500 s2=m5, and R4 ¼
      1000 s2=m5.
                                                                          C
                                                      B

                                                                                                D
                                     A                                3
                                                              2                        4
                                         P
                                              1

10.13 An irrigation system lies in a horizontal plane, with a large diameter pipe delivering water
      through a single line to three branches. The delivery pipe has an internal pressure p0 ¼ 200 kPa
      and is sufﬁciently large that internal kinetic energy terms can be neglected. Find the ﬂow
      distribution in the four irrigation pipes if R1 ¼ 1.6 · 104, R2 ¼ 5.3 · 105, R3 ¼ 6.0 · 105,
      R4 ¼ 8.1 · 105 (all in units of s2=m5).
                                                                                   2
                                                  1                       3

                                                                          4


10.14 It is common in pump design and manufacturing to make use of dimensionless coefﬁcients that
      relate to pump power W   _ P , pressure rise Dp, and discharge Q. Additional variables include the
      density r, diameter of the pump impeller D, and rotational speed of the impeller o. Using r, D,
      and o as repeating variables, compute the three dimensionless coefﬁcients related to power,
      pressure rise, and discharge.

10.15 Find the ﬂow distribution of water in the branching system using a trial method. Assume for all
      pipes f ¼ 0.02. The pump curve is represented by the relation HP ¼ 120 2 0.5Q2 (head in m,
      discharge in m3=s), HA ¼ 20 m, HB ¼ 50 m, HC ¼ 100 m, and HD ¼ 40 m. Neglect minor losses.



                                                                                                    Pipe   L, m   D, mm
                                                  C
                                B                                                                    1      250    500
                                                      3                   D                          2      700    300
                   A             2                                                                   3     2000    300
                                                                  4
                    P                                                                                4     1500    350
                         1       J


10.16 Find the ﬂow distribution using the Hardy Cross method. Given data are QB ¼ 30 L=s,
      QC ¼ 30 L=s, R1 ¼ 30 s2=m5, R2 ¼ 50 s2=m5, and R3 ¼ 20 s2=m5.

                                                          A
                                                                      1                    QB

                                                                                       B

                                                              2
                                                                               3

                                                                      C
                                                                          QC
230                                FLOWS IN PIPES AND PUMPS                                [CHAP. 10



10.17 Find the discharge in the pumping system using the Hardy Cross method. The pump curve is
      HP ¼ 100 2 50Q 2 850Q2, with head in m and discharge in m3=s. Use R1 ¼ 5000 s2=m5,
      R2 ¼ 300 s2=m5, HA ¼ 35 m, and HB ¼ 10 m.

                                    A
                                        1                                B
                                                                 2
                                                                     P


10.18 Work Solved Problem 10.2 using the Hardy Cross method.

10.19 Add a pump to pipe 1 in Fig. 10.5(a) and solve using the Hardy Cross method. The head across
      the pump is represented by HP ¼ 150 2 30Q2, with head in m and discharge in m3=s. Use the pipe
      and reservoir data provided in Example 10.8.

10.20 Determine the ﬂow distribution in the water supply system shown using the Hardy Cross
      method. The piezometric head at location A is HA ¼ 30 m, and the head at the reservoir is
      HF ¼ 0 m. For all six pipes, f ¼ 0.03 and D ¼ 75 mm. The ﬂow demands at C and D are
      QC ¼ 5 L=s and QD ¼ 12 L=s. After determining the ﬂows, compute the piezometric heads at
      locations B through E.

                                                        QC
                      1            3
                                                                             Pipe   L, m     K
                  A                                 C
                              B                                               1      10      1
                                                                              2      30      0
                              2                 5                             3      75      0
                                                                              4      60      0
                                                                              5      35      0
                          D        4        E                F                6      80      2
                      QD                                6



10.21 Select an appropriate pipe diameter and size of pump using Fig. 10.3 to deliver water at
      Q ¼ 250 m3=h between two reservoirs. The maximum allowable pipe velocity is 3 m=s, the length
      of the line is 1500 m, and the difference in elevation between the reservoirs is 30 m. Assume
      f ¼ 0.02 and K ¼ 0.5.

10.22 Oil (S ¼ 0.86) is pumped through 5 km of 500-mm-diameter pipe (f ¼ 0.017). The rise in
      elevation between the upstream and downstream sections is 165 m. If an available pump is the
      260-mm-diameter pump shown in Fig. 10.3, ﬁnd the discharge and the necessary number of
      pumps to be placed in series. What is the power requirement? Neglect minor losses.

10.23 The 220-mm-diameter pump curve shown in Fig. 10.3 delivers water in a piping system whose
      system demand is HP ¼ 50 þ 270Q2, with discharge in m3=s and head in m. Find the discharge
      and required pump power for (a) one pump and (b) two pumps in parallel.

10.24 A horizontal water supply pipe has a length of 2000 m and a diameter of 150 mm. The pipe is
      connected to an open tank at one end where the elevation of water is 4 m, and at the other end
      there is a quick-opening valve. Determine the time it will take for the ﬂow to reach 99% of the
      ﬁnal steady-state velocity if the valve is initially closed and then suddenly opened at t ¼ 0.
      Assume incompressible water and inelastic piping. Let f ¼ 0.030 and K ¼ 0.2 once the valve is
      opened.
CHAP. 10]                           FLOWS IN PIPES AND PUMPS                                        231



10.25 Oil is ﬂowing at a discharge of 0.50 m3=s in a 4-km, 50-mm-diameter steel pipe. The elastic
      modulus of the pipe is 200 · 106 kPa and its thickness is 5 mm. The oil has a speciﬁc gravity of
      0.86 and a bulk modulus of 1.50 · 106 kPa. A valve at the end of the pipe is partially closed in a
      rapid fashion so that water hammer occurs and a pressure wave propagates upstream in the pipe.
      The magnitude of the pressure wave is not to be greater than 600 kPa. Determine the percent
      decrease of ﬂow rate tolerable during the valve closure and the period of the water hammer
      oscillation.


                           Answers to Supplementary Problems

10.6   1109 W

10.7   0.669 m3=s

10.8   (a)   0.413 m3=s, 0.227 m3=s, 0.185 m3=s    (b)   1070 hp

10.9   0.0601 m3=s

10.10 0.365 m3=s

10.11 4.82 m3=s, 5.10 m3=s, 4.79 m3=s, 5.44 m3=s

10.12 0.144 m3=s, 40.4 m

10.13 0.0154 m3=s, 0.0056 m3=s, 0.00526 m3=s, 0.00453 m3=s

      _ P =ro3 D5 , Dp=ro2 D2 , Q=oD3
10.14 W

10.15 1.063 m3=s, 0.433 m3=s, 0.170 m3=s, 0.459 m3=s

10.16 33.75 L=s into B, 26.25 L=s into C, 3.75 L=s into C

10.17 0.106 m3=s

10.18 0.198 m3=s out of A, 0.138 m3=s into B, 0.060 m3=s into C

10.19 0.0749 m3=s into D, 0.0249 m3=s into B, 0.050 m3=s into C, 0.0250 m3=s into B, 0.0499 m3=s into A

10.20 27.7 L=s, 17.0 L=s, 10.7 L=s, 5.0 L=s, 10.7 L=s, 20 m, 11 m, 10.9 m, 9.35 m

10.21 200 mm, 240 mm

10.22 270 m3=h with two pumps, 186 hp

10.23 (a)    250 m3=h, 63 hp    (b) 450 m3=h, 120 hp

10.24 58.4 s

10.25 73%, 16 s
                                        Appendix A


Units and
Conversions
                          Table A.1   English Units, SI Units, and Their Conversion Factors

       Quantity               English units               International systema              Conversion
                                                                    SI                          factor
       Length           inch                             millimeter                   1 in ¼ 25.4 mm
                        foot                             meter                        1 ft ¼ 0.3048 m
                        mile                             kilometer                    1 mi ¼ 1.609 km
       Area             square inch                      square centimeter            1 in2 ¼ 6.452 cm2
                        square foot                      square meter                 1 ft2 ¼ 0.09290 m2
       Volume           cubic inch                       cubic centimeter             1 in3 ¼ 16.39 cm3
                        cubic foot                       cubic meter                  1 ft3 ¼ 0.02832 m3
                        gallon                                                        1 gal ¼ 0.003789 m3
       Mass             pound mass                       kilogram                     1 lb ¼ 0.4536 kg
                        slug                                                          1 slug ¼ 14.59 kg
       Density          slug per cubic foot              kilogram per cubic meter     1 slug=ft3 ¼ 515.4 kg=m3
       Force            pound force                      newton                       1 lb ¼ 4.448 N
       Work=torque      foot pound                       newton meter                 1 ft-lb ¼ 1.356 N·m
       Pressure         pound per square inch            newton per square            1 lb=in2 ¼ 6895 Pa
                                                         meter (pascal)
                        pound per square foot                                         1 lb=ft2 ¼ 47.88 Pa
       Temperature      degree Fahrenheit                degree Celsius               – F ¼ 9=5– C þ 32

                        degree Rankine                   kelvin                       – R ¼ 9=5 K

       Energy           British thermal unit             joule                        1 Btu ¼ 1055 J
                        calorie                                                       1 cal ¼ 4.186 J
                        foot pound                                                    1 ft-lb ¼ 1.356 J
       Power            horsepower                       watt                         1 hp ¼ 745.7 W
                        foot pound per second                                         1 ft-lb=s ¼ 1.356 W
       Velocity         foot per second                  meter per second             1 ft=s ¼ 0.3048 m=s
       Acceleration     foot per second squared          meter per second squared     1 ft=s2 ¼ 0.3048 m=s2
       Frequency        cycle per second                 hertz                        1 c=s ¼ 1.000 Hz
       Viscosity        pound second per square          newton second per            1 lb-s=ft2 ¼ 47.88 N·s=m2
                        foot                             square meter
  a
      The reversed initials in this abbreviation come from the French form of the name: Système International.


                                                          232
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
                                                                                                                                                                APPENDIX A]
                                                            Table A.2      Conversions of Units

         Length                                     Force                                        Mass                                        Velocity
 1 cm ¼ 0.3937 in                           1 lb ¼ 0.4536 kg                             1 oz ¼ 28.35 g                              1 mph ¼ 1.467 ft=s
 1 m ¼ 3.281 ft                             1 lb ¼ 0.4448 · 106 dyn                      1 lb ¼ 0.4536 kg                            1 mph ¼ 0.8684 kn
 l km ¼ 0.6214 mi                           1 lb ¼ 32.17 pdl                             1 slug ¼ 32.17 lb                           1 ft=s ¼ 0.3048 m=s
 1 in ¼ 2.54 cm                             1 kg ¼ 2.205 lb                              1 slug ¼ 14.59 kg                           1 m=s ¼ 3.281 ft=s
 1 ft ¼ 0.3048 m                            1 N ¼ 0.2248 lb                              1 kg ¼ 2.205 lb                             1 km=h ¼ 0.278 m=s
 1 mi ¼ 1.609 km                            1 dyn ¼ 2.248 · 1026 lb                      1 kg ¼ 0.06852 slug
 1 mi ¼ 5280 ft                             1 lb ¼ 4.448 N
 1 mi ¼ 1760 yd




                                                                                                                                                                UNITS AND CONVERSIONS
    Work, energy,                Pressure                          Volume                              Flow rate                           Viscosity
      and power
1 Btu ¼ 778.2 ft-lb    1 lb=in2 ¼ 2.036 in Hg           1 ft3 ¼ 28.32 L                   1 ft3=min ¼ 4.719 · gal 10 – 4 m3=s   1 stoke ¼ 1024 m2=s
1 J ¼ 107 ergs         1 lb=in2 ¼ 27.7 in H2O           1 ft3 ¼ 7.481 gal (U.S.)          1 ft3=s ¼ 0.02832 m3=s                1 P ¼ 0.1 (N·s)=m2
1 J ¼ 0.7376 ft-lb     14.7 lb=in2 ¼ 22.92 in Hg        1 gal (U.S.) ¼ 231 in3            1 m3=s ¼ 35.31 ft3=s                  1 (lb·s)=ft2 ¼ 47.88 (N·s)=m2
1 cal ¼ 3.088 ft-lb    14.7 lb=in2 ¼ 33.93 ft H2O       1 gal (Brit.) ¼ 1.2 gal (U.S.)    1 gal=min ¼ 0.002228 ft3=s            1 ft2=s ¼ 0.0929 m2=s
1 cal ¼ 0.003968 Btu   14.7 lb=in2 ¼ 1.0332 kg=cm2      1 m3 ¼ 1000 L                     1 ft3=s ¼ 448.9 gal=min
1 kWh ¼ 3413 Btu       14.7 lb=in2 ¼ 1.0133 bar         1 ft3 ¼ 0.02832 m3
                        1 kg=cm2 ¼ 14.22 lb=in2
1 Btu ¼ 1.055 kJ       1 in Hg ¼ 0.4912 lb=in2          1 m3 ¼ 35.31 ft3
1 ft-lb ¼ 1.356 J      1 ft H2O ¼ 0.4331 lb=in2
1 hp ¼ 550 ft-lb=sec   1 lb=in2 ¼ 6895 Pa
1 hp ¼ 0.7067 Btu=s    1 lb=ft2 ¼ 47.88 Pa
1 hp ¼ 0.7455 kW       105 Pa ¼ 1 bar
1 W ¼ 1 J=s            1 kPa ¼ 0.145 lb=in2
1 W ¼ 1.0 · 107
 (dyn·cm)=s
1 erg ¼ 1027 J
1 quad ¼ 1015 Btu




                                                                                                                                                                233
1 therm ¼ 105 Btu
                                        Appendix B


Vector Relationships

                                               A·B ¼ Ax Bx þ Ay By þ Az Bz
                            A · B ¼ ðAy Bz 2 Az By Þi þ ðAz Bx 2 Ax Bz Þj þ ðAx By 2 Ay Bx Þk
                                                                    @    @  @
                                        gradient operator : H ¼        iþ jþ k
                                                                    @x   @y @z
                                                                @u @v @w
                                         divergence of V ¼ H ·V ¼ þ þ
                                                                @x @y @z
                                                                             
                                                @w @v          @u @w        @v @u
                           curl of V ¼ H · V ¼      2     iþ      2    jþ     2     k
                                                 @y   @z       @z @x        @x @y
                                                Laplace’s equation: H2 f ¼ 0
                                             Irrotational vector ﬁeld: H · V¼ 0




                                                          234
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
                                                 Appendix C


                                   Fluid Properties
                                            Table C.1 Properties of Water

   Temperature,        Density,         Viscosity,         Kinematic          Surface     Vapor        Bulk
     T (–C)           r (kg/m3)        m [(N·s)/m2]        viscosity,         tension,   pressure,   modulus,
                                                            n (m2/s)          s (N/m)    pv (kPa)     B (Pa)
         0             999.9           1.792 · 1023       1.792 · 1026        0.0762       0.610     204 · 107
         5            1000.0           1.519              1.519               0.0754       0.872     206
        10             999.7           1.308              1.308               0.0748       1.13      211
        15             999.1           1.140              1.141               0.0741       1.60      214
        20             998.2           1.005              1.007               0.0736       2.34      220
        30             995.7           0.801              0.804               0.0718       4.24      223
        40             992.2           0.656              0.661               0.0701       3.38      227
        50             988.1           0.549              0.556               0.0682      12.3       230
        60             983.2           0.469              0.477               0.0668      19.9       228
        70             977.8           0.406              0.415               0.0650      31.2       225
        80             971.8           0.357              0.367               0.0630      47.3       221
        90             965.3           0.317              0.328               0.0612      70.1       216
       100             958.4           0.284 · 1023       0.296 · 1026        0.0594     101.3       207 · 107


                                      Table C.1E      English Properties of Water
   Temperature        Density          Viscosity         Kinematic           Surface      Vapor        Bulk
      (–F)           (slug/ft3)       (lb·sec/ft2)       viscosity           tension     pressure    modulus
                                                          (ft2/sec)           (lb/ft)    (lb/in2)    (lb/in2)
        32              1.94          3.75 · 1025       1.93 · 1025       0.518 · 1022     0.089     293 000
        40              1.94          3.23              1.66              0.514            0.122     294 000
        50              1.94          2.74              1.41              0.509            0.178     305 000
        60              1.94          2.36              1.22              0.504            0.256     311 000
        70              1.94          2.05              1.06              0.500            0.340     320 000
        80              1.93          1.80              0.93              0.492            0.507     322 000
        90              1.93          1.60              0.83              0.486            0.698     323 000
       100              1.93          1.42              0.74              0.480            0.949     327 000
       120              1.92          1.17              0.61              0.465            1.69      333 000
       140              1.91          0.98              0.51              0.454            2.89      330 000
       160              1.90          0.84              0.44              0.441            4.74      326 000
       180              1.88          0.73              0.39              0.426            7.51      318 000
       200              1.87          0.64              0.34              0.412           11.53      308 000
       212              1.86          0.59 · 1025       0.32 · 1025       0.404 · 1022    14.7       300 000



                                                          235
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
236                                   FLUID PROPERTIES                                       [APPENDIX C




                     Table C.2      Properties of Air at Atmospheric Pressure

      Temperature,        Density,            Viscosity,            Kinematic          Velocity
         T (–C)           r (kg/m3)           m (N·s/m2)            viscosity,        of sound,
                                                                     n (m2/s)          c (m/s)
          2 50                1.582           1.46 · l025          0.921 · 1025          299
          2 30                1.452           1.56                 1.08                  312
          2 20                1.394           1.61                 1.16                  319
          2 10                1.342           1.67                 1.24                  325
             0                1.292           1.72                 1.33                  331
           10                 1.247           1.76                 1.42                  337
           20                 1.204           1.81                 1.51                  343
           30                 1.164           1.86                 1.60                  349
           40                 1.127           1.91                 1.69                  355
           50                 1.092           1.95                 1.79                  360
           60                 1.060           2.00                 1.89                  366
           70                 1.030           2.05                 1.99                  371
           80                 1.000           2.09                 2.09                  377
           90                 0.973           2.13                 2.19                  382
          100                 0.946           2.17                 2.30                  387
          200                 0.746           2.57                 3.45                  436
          300                 0.616           2.93 · 1025          4.75 · 1025           480



                 Table C.2E    English Properties of Air at Atmospheric Pressure

      Temperature       Density           Viscosity             Kinematic          Velocity of
         (–F)          (slug/ft3)       [(lb·sec)/ft2]      viscosity (ft2/sec)   sound (ft/sec)
         220           0.00280           3.34 · 1027            11.9 · 1025           1028
            0          0.00268           3.38                   12.6                  1051
           20          0.00257           3.50                   13.6                  1074
           40          0.00247           3.62                   14.6                  1096
           60          0.00237           3.74                   15.8                  1117
           68          0.00233           3.81                   16.0                  1125
           80          0.00228           3.85                   16.9                  1138
          100          0.00220           3.96                   18.0                  1159
          120          0.00213           4.07                   18.9                  1180
          160          0.00199           4.23                   21.3                  1220
          200          0.00187           4.50                   24.1                  1258
          300          0.00162           4.98                   30.7                  1348
          400          0.00144           5.26                   36.7                  1431
         1000          0.000844          7.87 · 1027            93.2 · 1025           1839
APPENDIX C]                        FLUID PROPERTIES                                           237


                     Table C.3    Properties of the Standard Atmosphere

         Altitude   Temperature         Pressure          Density              Velocity
           (m)         (K)               (kPa)            (kg/m3)          of sound (m/s)
               0       288.2            101.3           1.225                    340
            500        284.9             95.43          1.167                    338
           1000        281.7             89.85          1.112                    336
           2000        275.2             79.48          1.007                    333
           4000        262.2             61.64          0.8194                   325
           6000        249.2             47.21          0.6602                   316
           8000        236.2             35.65          0.5258                   308
         10 000        223.3             26.49          0.4136                   300
         12 000        216.7             19.40          0.3119                   295
         14 000        216.7             14.17          0.2278                   295
         16 000        216.7             10.35          0.1665                   295
         18 000        216.7              7.563         0.1216                   295
         20 000        216.7              5.528         0.0889                   295
         30 000        226.5              1.196         0.0184                   302
         40 000        250.4              0.287         4.00 · 1023              317
         50 000        270.7              0.0798        1.03 · 1023              330
         60 000        255.8              0.0225        3.06 · 1024              321
         70 000        219.7              0.00551       8.75 · 1025              297
         80 000        180.7              0.00103       2.00 · 1025              269




                     Table C.3E    English Properties of the Atmosphere

         Altitude   Temperature        Pressure          Density              Velocity
           (ft)        (–F)             (lb/ft2)        (slug/ft3)        of sound (ft/sec)
               0       59.0              2116          0.00237                  1117
            1000       55.4              2014          0.00231                  1113
            2000       51.9              1968          0.00224                  1109
            5000       41.2              1760          0.00205                  1098
          10 000       23.4              1455          0.00176                  1078
          15 000         5.54            1194          0.00150                  1058
          20 000      2 12.3              973          0.00127                  1037
          25 000      2 30.1              785          0.00107                  1016
          30 000      2 48.0              628          0.000890                  995
          35 000      2 65.8              498          0.000737                  973
          36 000      2 67.6              475          0.000709                  971
          40 000      2 67.6              392          0.000586                  971
          50 000      2 67.6              242          0.000362                  971
         100 000      2 51.4               23.2        3.31 · 1025               971
238                                 FLUID PROPERTIES                                         [APPENDIX C



              Table C.4 Properties of Ideal Gases at 300 K (cv ¼ cp     k k ¼ cp =cv )

        Gas       Chemical      Molar                R                        cp               k
                  formula       mass
                                          ðft-lbÞ=         kJ=     ðft-lbÞ=          kJ=
                                          slug-–R        ðkg·KÞ    slug-–R         ðkg·KÞ
      Air                       28.97       1716          0.287      6012           1.004    1.40
      Argon       Ar            39.94       1244          0.2081     3139           0.5203   1.667
      Carbon      CO2           44.01       1129          0.1889     5085           0.8418   1.287
       dioxide
      Carbon      CO            28.01       1775         0.2968       6238          1.041    1.40
       monoxide
      Ethane      C2H6          30.07      1653          0.2765    10 700           1.766    1.184
      Helium      He             4.003     12 420        2.077     31 310           5.193    1.667
      Hydrogen    H2             2.016     24 660        4.124     85 930          14.21     1.40
      Methane     CH4           16.04      3100          0.5184    13 330           2.254    1.30
      Nitrogen    N2            28.02      1774          0.2968     6213            1.042    1.40
      Oxygen      O2            32.00      1553          0.2598     5486            0.9216   1.394
      Propane     C3H8          44.10      1127          0.1886    10 200           1.679    1.12
      Steam       H2O           18.02      2759          0.4615    11 150           1.872    1.33
                                                                                                                                                                 APPENDIX C]
                           Table C.5     Properties of Common Liquids at Atmospheric Pressure and Approximately 16 to 21–C (60 to 70–F)

Liquid                           Speciﬁc weight                               Density                 Surface tension                     Vapor pressure
                                     3                3                   3                    3                                      2
                             lb/ft              N/m             slug/ft                 kg/m        lb/ft          N/m           lb/in abs           kPa abs
Ethyl alcohol                 49.3             7744               1.53                  789        0.0015          0.022                               —




                                                                                                                                                                 FLUID PROPERTIES
Benzene                       56.2             8828               1.75                  902        0.0020          0.029            1.50              10.3
Carbon                        99.5             15 629             3.09                  1593       0.0018          0.026           12.50              86.2
 tetrachloride
Glycerin                      78.6             12 346             2.44                  1258       0.0043          0.063          2 · 1026          1.4 · 1025
Kerosene                      50.5             7933               1.57                  809        0.0017          0.025             —                 —
           a                                                                                                                                25
Mercury                      845.5             132 800           26.29                  13 550     0.032           0.467         2.31 · 10         1.59 · 1024
SAE 10 oil                    57.4             9016               1.78                  917        0.0025          0.036             —                 —
SAE 30 oil                    57.4             9016               1.78                  917        0.0024          0.035             —                 —
Water                         62.4             9810               1.94                  1000       0.0050          0.073            0.34              2.34
a
    In contact with air.




                                                                                                                                                                 239
240                                                                FLUID PROPERTIES                                                 [APPENDIX C



                                                                       Temperature (˚F)
                                                20            60        100              140        180            220


                                      2.0                                          Glycerine                               4

                                      1.0                                                                                  2
                                        8
                                        6                                                   Castor oil                     1×10–2
                                        4                                                                                  8
                                                                                                                           6
                                        2                                                      SAE-30 oil                  4

                                   1×10–1                                                                                  2
                                        8
                                        6                                                                                  1×10–3
                                        4                                                                                  8
                                            SAE-10W-30 oil                                                                 6
                                        2                                                                                  4




                                                                                                                                    Viscosity (lb-sec/ft2)
              Viscosity (N·s/m2)




                                               SAE-10W oil
                                   1×10–2                                                                                  2
                                        8
                                        6             Mercury                                                              1×10–4
                                        4                                                                                  8
                                                                                                                           6
                                                                                 Kerosene
                                        2                                                        Carbon tetrachloride      4

                                   1×10–3                                                                                  2
                                        8
                                        6                                                                                  1×10–5
                                        4                                                                                  8
                                                                                                                           6
                                                      Water
                                        2                                                                                  4
                                                                   Octane
                                                                             Heptane
                                   1×10–4                                                                                  2
                                        8
                                        6                                                                                  1×10–6
                                        4   Helium            Carbon dioxide                             Methane           8
                                                                                   Air                                     6
                                        2                                                                                  4

                                   1×10–5                                                                                  2×10–6
                                        8                                                                    Hydrogen

                                                  0           20            40         60          80        100         120
                                                                       Temperature (˚C)

Figure C.1   Viscosity as a function of temperature. (From R.W. Fox and T.A. McDonald, Introduction to Fluid
                         Mechanics, 2nd ed., John Wiley & Sons, Inc., New York, 1978.)
APPENDIX C]                                                              FLUID PROPERTIES                                                                                      241


                                                                                 Temperature (˚F)
                                                    20            60             100               140          180            220
                                           1×10–2
                                                8
                                                6
                                                4                                                  1 m2/sec = 10.76 ft2/sec          4




                                                                   Gl
                                                2                                                                                    2




                                                                      yc
                                                             SA


                                                                         eri
                                                               E-


                                                                           n
                                           1×10–3                                                                                    1×10–2




                                                                30
                                                    SA
                                                8                                                                                    8

                                                         E-


                                                                  oil
                                                           10
                                                6                                                                                    6


                                                             W
                                                              -3
                                                4                                                                                    4


                                                                 0
                                                                 oi
                                                                                                                Helium

                                                                   l
                                                2                                                                                    2




                                                                                                                                               Kinematic viscosity (ft2/sec)
                                                                                                               Hydrogen
              Kinematic viscosity (m2/s)




                                           1×10–4                                                                                    1×10–3
                                                8                              SA                                                    8
                                                6                                 E-                                                 6
                                                                                    10
                                                                                         W                                           4
                                                4                                            oil                          Methane

                                                2                                                                              Air   2

                                           1×10–5                                                                                    1×10–4
                                                8                                                                                    8
                                                6        Ca  rbon dioxide
                                                                                                                                     6
                                                4                                                                                    4
                                                              Kero
                                                                   sin e
                                                2                                                                                    2
                                                                  Wate
                                                                       r
                                           1×10–6                                                                                    1×10–5
                                                8                                                                                    8
                                                6   Heptane                                                           Octane         6
                                                4                                                                                    4
                                                                                                        Carbon tetr
                                                2                                                                  achloride         2
                                                     Mercury

                                           1×10–7                                                                                    1×10– 6
                                                8
                                                         0           20             40             60         80         100
                                                                               Temperature (˚C)

Figure C.2 Kinematic viscosity as a function of temperature at atmospheric pressure. (From R.W. Fox and T.A.
        McDonald, Introduction to Fluid Mechanics, 2nd ed., John Wiley & Sons, Inc., New York, 1978.)
                                            Appendix D


Compressible Flow
Table for Air
                                               Table D.1    Isentropic Flow

   M       p/p0           T/T0     A/A*      M      p/p0           T/T0    A/A*      M      p/p0          T/T0    A/A*
   0      1.0000         1.0000       0     1.76   0.1850         0.6175   1.397    3.48   0.1349   21   0.2922    6.664
  0.04    0.9989         0.9997   14.4815   1.80   0.1740         0.6068   1.439    3.52   0.1274   21   0.2875    6.917
  0.08    0.9955         0.9987    7.2616   1.84   0.1637         0.5963   1.484    3.56   0.1204   21   0.2829    7.179
  0.12    0.9900         0.9971    4.8643   1.88   0.1539         0.5859   1.531    3.60   0.1138   21   0.2784    7.450
  0.16    0.9823         0.9949    3.6727   1.90   0.1492         0.5807   1.555    3.64   0.1076   21   0.2740    7.730
  0.20    0.9725         0.9921    2.9635   1.92   0.1447         0.5756   1.580    3.68   0.1018   21   0.2697    8.020
  0.24    0.9607         0.9886    2.4956   1.96   0.1360         0.5655   1.633    3.72   0.9633   22   0.2654    8.320
  0.28    0.9470         0.9846    2.1656   2.00   0.1278         0.5556   1.688    3.76   0.9116   22   0.2613    8.630
  0.32    0.9315         0.9799    1.9219   2.04   0.1201         0.5458   1.745    3.80   0.8629   22   0.2572    8.951
  0.36    0.9143         0.9747    1.7358   2.08   0.1128         0.5361   1.806    3.84   0.8171   22   0.2532    9.282
  0.40    0.8956         0.9690    1.5901   2.12   0.1060         0.5266   1.869    3.88   0.7739   22   0.2493    9.624
  0.44    0.8755         0.9627    1.4740   2.16   0.9956   21    0.5173   1.935    3.92   0.7332   22   0.2455    9.977
  0.48    0.8541         0.9560    1.3801   2.20   0.9352   21    0.5081   2.005    3.96   0.6948   22   0.2418   10.34
  0.52    0.8317         0.9487    1.3034   2.24   0.8785   21    0.4991   2.078    4.00   0.6586   22   0.2381   10.72
  0.56    0.8082         0.9410    1.2403   2.28   0.8251   21    0.4903   2.154    4.04   0.6245   22   0.2345   11.11
  0.60    0.7840         0.9328    1.1882   2.32   0.7751   21    0.4816   2.233    4.08   0.5923   22   0.2310   11.51
  0.64    0.7591         0.9243    1.1452   2.36   0.7281   21    0.4731   2.316    4.12   0.5619   22   0.2275   11.92
  0.68    0.7338         0.9153    1.1097   2.40   0.6840   21    0.4647   2.403    4.16   0.5333   22   0.2242   12.35
  0.72    0.7080         0.9061    1.0806   2.44   0.6426   21    0.4565   2.494    4.20   0.5062   22   0.2208   12.79
  0.76    0.6821         0.8964    1.0570   2.48   0.6038   21    0.4484   2.588    4.24   0.4806   22   0.2176   13.25
  0.80    0.6560         0.8865    1.0382   2.52   0.5674   21    0.4405   2.686    4.28   0.4565   22   0.2144   13.72
  0.84    0.6300         0.8763    1.0237   2.56   0.5332   21    0.4328   2.789    4.32   0.4337   22   0.2113   14.20
  0.88    0.6041         0.8659    1.0129   2.60   0.5012   21    0.4252   2.896    4.36   0.4121   22   0.2083   14.70
  0.92    0.5785         0.8552    1.0056   2.64   0.4711   21    0.4177   3.007    4.40   0.3918   22   0.2053   15.21
  0.96    0.5532         0.8444    1.0014   2.68   0.4429   21    0.4104   3.123    4.44   0.3725   22   0.2023   15.74
  1.00    0.5283         0.8333    1.000    2.72   0.4165   21    0.4033   3.244    4.48   0.3543   22   0.1994   16.28
  1.04    0.5039         0.8222    1.001    2.76   0.3917   21    0.3963   3.370    4.52   0.3370   22   0.1966   16.84
  1.08    0.4800         0.8108    1.005    2.80   0.3685   21    0.3894   3.500    4.54   0.3288   22   0.1952   17.13
  1.12    0.4568         0.7994    1.011    2.84   0.3467   21    0.3827   3.636    4.58   0.3129   22   0.1925   17.72
  1.16    0.4343         0.7879    1.020    2.88   0.3263   21    0.3761   3.777    4.62   0.2978   22   0.1898   18.32
  1.20    0.4124         0.7764    1.030    2.92   0.3071   21    0.3696   3.924    4.66   0.2836   22   0.1872   18.94
  1.24    0.3912         0.7648    1.043    2.96   0.2891   21    0.3633   4.076    4.70   0.2701   22   0.1846   19.58
  1.28    0.3708         0.7532    1.058    3.00   0.2722   21    0.3571   4.235    4.74   0.2573   22   0.1820   20.24
  1.32    0.3512         0.7416    1.075    3.04   0.2564   21    0.3511   4.399    4.78   0.2452   22   0.1795   20.92
  1.36    0.3323         0.7300    1.094    3.08   0.2416   21    0.3452   4.570    4.82   0.2338   22   0.1771   21.61
  1.40    0.3142         0.7184    1.115    3.12   0.2276   21    0.3393   4.747    4.86   0.2229   22   0.1747   22.33
  1.44    0.2969         0.7069    1.138    3.16   0.2146   21    0.3337   4.930    4.90   0.2126   22   0.1724   23.07
  1.48    0.2804         0.6954    1.163    3.20   0.2023   21    0.3281   5.121    4.94   0.2028   22   0.1700   23.82
  1.52    0.2646         0.6840    1.190    3.24   0.1908   21    0.3226   5.319    4.98   0.1935   22   0.1678   24.60
  1.56    0.2496         0.6726    1.219    3.28   0.1799   21    0.3173   5.523    6.00   0.0633   22   0.1219   53.19
  1.60    0.2353         0.6614    1.250    3.32   0.1698   21    0.3121   5.736    8.00   0.0102   22   0.0725   109.11
  1.64    0.2217         0.6502    1.284    3.36   0.1602   21    0.3069   5.956   10.00   0.0236   23   0.0476   535.94
  1.68    0.2088         0.6392    1.319    3.40   0.1512   21    0.3019   6.184     1        0             0       1
  1.72    0.1966         0.6283    1.357    3.44   0.1428   21    0.2970   6.420




                                                            242
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
APPENDIX D]               COMPRESSIBLE FLOW TABLE FOR AIR                                   243


                                  Table D.2   Normal Shock Flow

 M1       M2      p2/p1   T2/T1         p02/p01     M1        M2      p2/p1   T2/T1     p02/p01
 1.00   1.000     1.000   1.000         1.000       3.12    0.4685    11.19    2.823   0.2960
 1.04   0.9620    1.095   1.026         0.9999      3.16    0.4664    11.48    2.872   0.2860
 1.08   0.9277    1.194   1.052         0.9994      3.20    0.4643    11.78    2.922   0.2762
 1.12   0.8966    1.297   1.078         0.9982      3.24    0.4624    12.08    2.972   0.2668
 1.16   0.8682    1.403   1.103         0.9961      3.28    0.4605    12.38    3.023   0.2577
 1.20   0.8422    1.513   1.128         0.9928      3.30    0.4596    12.54    3.049   0.2533
 1.24   0.8183    1.627   1.153         0.9884      3.32    0.4587    12.69    3.075   0.2489
 1.28   0.7963    1.745   1.178         0.9827      3.36    0.4569    13.00    3.127   0.2404
 1.30   0.7860    1.805   1.191         0.9794      3.40    0.4552    13.32    3.180   0.2322
 1.32   0.7760    1.866   1.204         0.9758      3.44    0.4535    13.64    3.234   0.2243
 1.36   0.7572    1.991   1.229         0.9676      3.48    0.4519    13.96    3.288   0.2167
 1.40   0.7397    2.120   1.255         0.9582      3.52    0.4504    14.29    3.343   0.2093
 1.44   0.7235    2.253   1.281         0.9476      3.56    0.4489    14.62    3.398   0.2022
 1.48   0.7083    2.389   1.307         0.9360      3.60    0.4474    14.95    3.454   0.1953
 1.52   0.6941    2.529   1.334         0.9233      3.64    0.4460    15.29    3.510   0.1887
 1.56   0.6809    2.673   1.361         0.9097      3.68    0.4446    15.63    3.568   0.1823
 1.60   0.6684    2.820   1.388         0.8952      3.72    0.4433    15.98    3.625   0.1761
 1.64   0.6568    2.971   1.416         0.8799      3.76    0.4420    16.33    3.684   0.1702
 1.68   0.6458    3.126   1.444         0.8640      3.80    0.4407    16.68    3.743   0.1645
 1.72   0.6355    3.285   1.473         0.8474      3.84    0.4395    17.04    3.802   0.1589
 1.76   0.6257    3.447   1.502         0.8302      3.88    0.4383    17.40    3.863   0.1536
 1.80   0.6165    3.613   1.532         0.8127      3.92    0.4372    17.76    3.923   0.1485
 1.84   0.6078    3.783   1.562         0.7948      3.96    0.4360    18.13    3.985   0.1435
 1.88   0.5996    3.957   1.592         0.7765      4.00    0.4350    18.50    4.047   0.1388
 1.92   0.5918    4.134   1.624         0.7581      4.04    0.4339    18.88    4.110   0.1342
 1.96   0.5844    4.315   1.655         0.7395      4.08    0.4329    19.25    4.173   0.1297
 2.00   0.5774    4.500   1.688         0.7209      4.12    0.4319    19.64    4.237   0.1254
 2.04   0.5707    4.689   1.720         0.7022      4.16    0.4309    20.02    4.301   0.1213
 2.08   0.5643    4.881   1.754         0.6835      4.20    0.4299    20.41    4.367   0.1173
 2.12   0.5583    5.077   1.787         0.6649      4.24    0.4290    20.81    4.432   0.1135
 2.16   0.5525    5.277   1.822         0.6464      4.28    0.4281    21.20    4.499   0.1098
 2.20   0.5471    5.480   1.857         0.6281      4.32    0.4272    21.61    4.566   0.1062
 2.24   0.5418    5.687   1.892         0.6100      4.36    0.4264    22.01    4.633   0.1028
 2.28   0.5368    5.898   1.929         0.5921      4.40    0.4255    22.42    4.702   0.994821
 2.30   0.5344    6.005   1.947         0.5833      4.44    0.4247    22.83    4.771   0.962821
 2.32   0.5321    6.113   1.965         0.5745      4.48    0.4239    23.25    4.840   0.93202l
 2.36   0.5275    6.331   2.002         0.5572      4.52    0.4232    23.67    4.910   0.902221
 2.40   0.5231    6.553   2.040         0.5401      4.56    0.4224    24.09    4.981   0.873521
 2.44   0.5189    6.779   2.079         0.5234      4.60    0.4217    24.52    5.052   0.845921
 2.48   0.5149    7.009   2.118         0.5071      4.64    0.4210    24.95    5.124   0.819221
 2.52   0.5111    7.242   2.157         0.4991      4.68    0.4203    25.39    5.197   0.793421
 2.56   0.5074    7.479   2.198         0.4754      4.72    0.4196    25.82    5.270   0.768521
 2.60   0.5039    7.720   2.238         0.4601      4.76    0.4189    26.27    5.344   0.744521
 2.64   0.5005    7.965   2.280         0.4452      4.80    0.4183    26.71    5.418   0.721421
 2.68   0.4972    8.213   2.322         0.4307      4.84    0.4176    27.16    5.494   0.699121
 2.72   0.4941    8.465   2.364         0.4166      4.88    0.4170    27.62    5.569   0.677521
 2.76   0.4911    8.721   2.407         0.4028      4.92    0.4164    28.07    5.646   0.656721
 2.80   0.4882    8.980   2.451         0.3895      4.96    0.4158    28.54    5.723   0.636621
 2.84   0.4854    9.243   2.496         0.3765      5.00    0.4152    29.00    5.800   0.617221
 2.88   0.4827    9.510   2.540         0.3639      6.00    0.4042    41.83    7.941   0.296521
 2.92   0.4801    9.781   2.586         0.3517      7.00    0.3974    57.00   10.469   0.153521
 2.96   0.4776   10.06    2.632         0.3398      8.00    0.3929    74.50   13.387   0.084921
 3.00   0.4752   10.33    2.679         0.3283      9.00    0.3898    94.33   16.693   0.049621
 3.04   0.4729   10.62    2.726         0.3172     10.00    0.3875   116.50   20.388   0.030421
 3.08   0.4706   10.90    2.774         0.3065      1       0.3780     1        1      0
244            COMPRESSIBLE FLOW TABLE FOR AIR                        [APPENDIX D



                   Table D.3   Prandtl – Meyer Function

       M        y           m             M            y        m
      1.00      0         90.00          3.04        50.523   19.20
      1.04    0.3510      74.06          3.08        51.277   18.95
      1.08    0.9680      67.81          3.12        52.020   18.69
      1.12    1.735       63.23          3.16        52.751   18.45
      1.16    2.607       59.55          3.20        53.470   18.21
      1.20    3.558       56.44          3.24        54.179   17.98
      1.24    4.569       53.75          3.28        54.877   17.75
      1.28    5.627       51.38          3.32        55.564   17.53
      1.32    6.721       49.25          3.36        56.241   17.31
      1.36    7.844       47.33          3.40        56.907   17.10
      1.40    8.987       45.58          3.44        57.564   16.90
      1.44   10.146       43.98          3.48        58.210   16.70
      1.48   11.317       42.51          3.52        58.847   16.51
      1.52   12.495       41.14          3.56        59.474   16.31
      1.56   13.677       39.87          3.60        60.091   16.13
      1.60   14.861       38.68          3.64        60.700   15.95
      1.64   16.043       37.57          3.68        61.299   15.77
      1.68   17.222       36.53          3.72        61.899   15.59
      1.72   18.397       35.55          3.76        62.471   15.42
      1.76   19.565       34.62          3.80        63.044   15.26
      1.80   20.725       33.75          3.84        63.608   15.10
      1.84   21.877       32.92          3.88        64.164   14.94
      1.88   23.019       32.13          3.92        64.713   14.78
      1.92   24.151       31.39          3.96        65.253   14.63
      1.96   25.271       30.68          4.00        65.785   14.48
      2.00   26.380       30.00          4.04        66.309   14.33
      2.04   27.476       29.35          4.08        66.826   14.19
      2.08   28.560       28.74          4.12        67.336   14.05
      2.12   29.631       28.14          4.16        67.838   13.91
      2.16   30.689       27.58          4.20        68.333   13.77
      2.20   31.732       27.04          4.24        68.821   13.64
      2.24   32.763       26.51          4.28        69.302   13.51
      2.28   33.780       26.01          4.32        69.777   13.38
      2.32   34.783       25.53          4.36        70.245   13.26
      2.36   35.771       25.07          4.40        70.706   13.14
      2.40   36.746       24.62          4.44        71.161   13.02
      2.44   37.708       24.19          4.48        71.610   12.90
      2.48   38.655       23.78          4.52        72.052   12.78
      2.52   39.589       23.38          4.56        72.489   12.67
      2.56   40.509       22.99          4.60        72.919   12.56
      2.60   41.415       22.62          4.64        73.344   12.45
      2.64   42.307       22.26          4.68        73.763   12.34
      2.68   43.187       21.91          4.72        74.176   12.23
      2.72   44.053       21.57          4.76        74.584   12.13
      2.76   44.906       21.24          4.80        74.986   12.03
      2.80   45.746       20.92          4.84        75.383   11.92
      2.84   46.573       20.62          4.88        75.775   11.83
      2.88   47.388       20.32          4.92        76.162   11.73
      2.92   48.190       20.03          4.96        76.544   11.63
      2.96   48.980       19.75          5.00        76.920   11.54
      3.00   49.757       19.47
                                                          INDEX




A                                                               Completely turbulent zone, 126
Absolute pressure, 5                                            Complex velocity potential, 155
Accelerating containers, 27                                     Compressible ﬂow, 48, 181
Acceleration, 2, 40                                             Conservation:
Added mass, 152                                                    of energy, 60, 62, 64
Adiabatic, 10                                                      of mass, 60, 62, 63
Airfoils, 152                                                      of momentum, 61, 62, 67
Angular velocity, 2, 42                                         Constitutive equations, 44, 63
Archimedes principle, 26                                        Continuity equation, 44, 63
Area, 2                                                            differential, 85
Aspect ratio, 118                                               Continuum, 4
Atmospheric pressure, 5                                         Control volume, 61
                                                                Convective acceleration, 41
B                                                               Couette ﬂow, 116, 117, 121
Bernoulli’s equation, 50, 87                                    Critical area, 186
Blades, 66                                                      Critical Reynolds number, 48, 160
Blasius formula, 164
Boiling, 9                                                      D
Boundary conditions, 84                                         Darcy – Weisbach equation, 114
Boundary layer, 48, 159                                         Deﬂection angle, 192
Boundary-value problem, 84                                      Deﬂectors, 67
Bubble, 8                                                       Demand curve, 211
Buckingham p-theorem, 99                                        Density, 2, 4
Bulk modulus, 8                                                 Detached shock, 193
Buoyancy, 26                                                    Developed ﬂow, 456, 110
                                                                Differential continuity equation, 86
C                                                               Diffuser, 185
Capillary tube, 9                                               Dilitant, 7
Cauchy– Riemann equations, 155                                  Dimensional analysis, 97
Cavitation, 9, 150                                              Dimensional homogeneity, 97
Cavitation number, 150                                          Dimensions, 1
Celsius scale, 5                                                   table, 2
Center of pressure, 24                                          Discharge, 63
Centrifugal pump, 212                                           Displacement thickness, 162, 167
Centroid, 24                                                    Divergence, 86
Channel ﬂow, 115                                                Divergence theorem, 94
Characteristic pump curve, 74, 142, 211                         Doublet, 156
Characteristic dimension, 4, 47                                 Drag, 146
Choked ﬂow, 186                                                    on airfoil, 153
Chord, 146                                                      Drag coefﬁcient, 146
Chezy – Manning coefﬁcient, 131                                    curves, 147
Chezy – Manning equation, 131                                      table, 148
Circulation, 156                                                Droplet, 8
Coefﬁcient of thermal expansion, 16                             Dynamic similarity, 102


                                                          245
Copyright © 2008 by The McGraw-Hill Companies, Inc. Click here for terms of use.
246                                     INDEX



E                                           I
Efﬁciency, 65                               Ideal gas law, 10
Energy, 2                                   Incompressible ﬂow, 48, 86
   conservation of, 61                      Induced velocity, 188
Energy equation, 11, 64, 92                 Inertial reference frame, 41
Energy grade line, 129                      Initial conditions, 84
Enthalpy, 10                                Integral equations, 60
Entrance ﬂow, 110                           Interior nodes, 215
   turbulent, 111                           Interior loops, 215
Entrance length, 110                        Internal energy, 10
Equivalent length, 129                      Internal ﬂow, 110
Eulerian description, 40                    Inviscid ﬂow, 46, 145
Euler number, 101                           Inviscid core length, 110
Euler’s equation, 88                        Irrotational ﬂow, 42, 154
Expansion fan, 195                          Isentropic, 10
Expansion waves, 196                           nozzle ﬂow, 184
External ﬂow, 46, 145                       Isotropic ﬂuid, 88

F                                           J
Fahrenheit scale, 5                         Joukowsky equation, 221
First law, 10
Flow ﬁeld, 40
Flow rate, 2, 63                            K
Force, 1,2                                  Karman integral equation, 162
   on a curved surface, 25                  Kelvin scale, 6
   on a plane surface, 24                   Kinematic similarity, 102
Free-stream ﬂow, 48, 145, 160               Kinematic viscosity, 2, 8, 47
Free-stream ﬂuctuation intensity, 160       Kinetic-energy correction factor, 65
Frequency, 2                                Kutta– Joukowski theorem, 159
Friction factor, 114
Froude number, 101                          L
                                            Lagrangian description, 40
G                                           Laminar boundary layer, 162
Gage pressure, 5                            Laminar ﬂow, 47
Gas constant, 10                               in a channel, 116
Gases, 4                                       in a pipe, 112
Gauss’ theorem, 94                          Laplace’s equation, 154
Geometric similarity, 102                   Laplacian, 90
                                            Length, 1
                                            Lift, 146
H
                                               on an airfoil, 153
Hardy Cross Method, 216
                                            Line coefﬁcient, 146
Harmonic functions, 155
                                            Line source, 155
Head, 51, 65
                                            Liquids, 4
  pump, 65
                                            Local acceleration, 41
  total, 51, 65
                                            Local skin friction coefﬁcient, 163
  turbine, 65
                                            Loss coefﬁecient, 64, 129
  velocity, 51, 65
Head loss, 65, 115
Heat rate, 2                                M
Heat transfer, 11                           Mach angle, 183
Homogeneous ﬂuid, 90                        Mach cone, 183
Hydraulic grade line, 129                   Mach number, 49, 101, 183
Hydraulic jump, 71                          Mach waves, 183
Hydraulic radius, 127                       Manning n, 131
Hydrofoil, 150                              Manometer, 22
                                       INDEX                                 247


Mass, 1                                       static, 51
  conservation of, 61, 63                     total, 51
Mass ﬂux, 2, 63                               vapor, 9
Material derivative, 42                    Pressure head, 51, 65
Mean free path, 4, 12                      Pressure pulse, 223
Method of images, 175                      Pressure waves, 224
Minor losses, 129                          Proﬁle development region, 110
Momentum, conservation of, 61              Pseudoloops, 215
  equation, 67                             Pseudoplastics, 7
Momentum correction factor, 67             Pump curve, 74, 142, 211
Momentum thickness, 162, 167               Pump efﬁciency, 65
Moody diagram, 125                         Pump head, 65

N                                          Q
Navier – Stokes equations, 44, 90          Quasi-equilibrium, 10
Network analysis, 219
Newtonian ﬂuid, 7, 88                      R
Newton’s second law, 1, 67, 87             Raleigh pitot-tube formula, 199
Noncircular conduits, 127                  Rankine oval, 175
Normal pressure variation, 52              Rankine scale, 6
Normal shock waves, 188                    Ratio of speciﬁc heats, 10
Normal stress, 4, 44, 87                   Relative roughness, 125
No-slip condition, 8, 46                   Repeating variables, 100
Nozzle ﬂow, 186                            Reynolds number, 48, 101
                                             critical, 48, 160
O                                          Reynolds transfer theorem, 62
Oblique shock waves, 192                   Roughness, relative, 125
One-dimensional ﬂow, 46                    Rotating containers, 27
Open channel ﬂow, 130                      Rotating cylinders, 119
Outer region, 124
                                           S
P                                          Scale, 103
Pascal, 5                                  Separated region, 52, 145
Pathline, 40                               Shaft work, 64
Piezometer, 51                             Shear stress, 4, 87
Piezometric head, 207                      Shear velocity, 123, 165
Pipe ﬂow, 112                              Shock waves, 183, 188
Pipe networks, 215                            oblique, 192
Pipe systems, 208                             strong, 193
Pitot-static probe, 51                        weak, 193
Pitot tube, 51                             Similitude, 97, 102
Power, 2, 64                               Sink, 159
Power-law proﬁle, 123                      Skin friction coefﬁcient, 163
Plane ﬂow, 46                              Sound wave, 182
Plastics, 7                                Source strength, 156
Poiseuille ﬂow, 113, 114                   Speciﬁc energy, 11
Potential ﬂow, 154                         Speciﬁc gravity, 6
   around a cylinder, 158                  Speciﬁc heat, 2
Power-law proﬁle, 164                      Speciﬁc internal energy, 10
Prandtl boundary layer equation, 166       Speciﬁc weight, 2, 6
Prandtl– Meyer function, 196               Speed of sound, 8, 49, 182
Pressure, 2, 3, 5, 20                      Stagnation point, 51
   absolute, 5                             Stagnation pressure, 51
   atmospheric, 5                          Standard atmosphere, 5
   gage, 5                                 Static head, 210
248                             INDEX



Static pressure, 51                 Units, 1
Statics, 20                           table, 2
Steady ﬂow, 40                      Unsteady ﬂow, 46
Steady turbulent ﬂow, 47
Stokes ﬂow, 146
                                    V
Stokes hypothesis, 88
                                    Vacuum, 5
Streakline, 40
                                    Vanes, 67, 69
Stream function, 154
                                    Vapor pressure, 9
Streamline, 40
                                    Velocity, 2
Streamtube, 40
                                    Velocity ﬁeld, 40
Stress, 2
                                    Velocity gradient, 7
Stress vector, 4
                                    Velocity head, 51, 65
Strouhal number, 101, 149
                                    Velocity potential, 154
Subsonic, 2, 8, 183
                                    Velocity vector, 41
Substantial derivative, 42
                                    Venturi meter, 73
Supersonic, 183
                                    Venturi tuve, 202
Surface tension, 2, 8
                                    Viscometer, 7
Superposition, 157
                                    Viscosity, 2, 6
Surging, 219
                                    Viscous ﬂow, 47
Swamee and Jain formulas, 126
                                    Viscous wall layer, 110, 122, 162
System, 10, 61
                                    Volume, 2
                                    Von Karman integral equation, 162
T                                   Vortex, 156
Temperature, 6                      Vortex shedding, 149
Thermal conductivity, 92            Vortex strength, 156
Thermal diffusivity, 92             Vorticity, 43
Three-dimensional ﬂow, 46
Time, 1                             W
Time average, 122                   Wake, 145
Torque, 2, 7                        Wall region, 123
Total head, 51, 65                  Water hammer, 221
Total pressure, 51                  Waves, 224
Transition zone, 126                Wave speed, 10
Turbine efﬁciency, 65               Weber number, 101
Turbine head, 65                    Wedge angle, 192
Turbulent boundary layer, 164       Wetted perimeter, 127
Turbulent ﬂow, 47, 121              Wing span, 153
Turbulent zone, 122                 Work, 2, 10, 64
Two-dimensional ﬂow, 46             Work rate, 64

U                                   Z
Uniform ﬂow, 46, 155                Zone of silence, 183



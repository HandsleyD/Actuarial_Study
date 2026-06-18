---
normalized_id: shared-pdf-reference-schaum-s-basic-electricity-465
exam_code: SHARED
material_scope: schaum_s basic electricity -- 465.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Schaum_s Basic Electricity -- 465.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-schaum-s-basic-electricity-465

                                                I   .   -   w




            SCHAUM’S OUTLZNE OF

 THEORY AND PROBLEMS
                            OF




BASIC ELECTRICITY




            MILTON GUSSOW, M.S.
                     Senior Engineer
                Applied Physics Laboratory
               The Johns Hopkins University




                     McGraw-Hill
New York San                   D.C. Auckland
  Caracas
        Montreal New Delhi          Singapore
                Sydney Tokyo Toronto
                        To Libbie, Myra, and Susan




MILTON GUSSOW is a senior                    at Johns
Applied Physics                              his B.S. (1949) from the U.S.
Naval             his B.S.E.E. (1956) from
 School,     his M.S. (1957) from                           of Technology.
He is an Adjunct Professor at American University                  George
Washington                        he teaches           in mathematics
elkctrical engineering. Mr. Gussow was                      Vice President
for Education at the McGraw-Hill Continuing                             is
the         of over fifty technical

Schaum’s Outline of Theory and Problems of
BASIC ELECTRICITY

Copyright 0 1983 by The McGraw-Hill Companies, Inc.                             in the
States of America.       as permitted                             no part
may be reproduced or distributed in any form or by any   or stored in a data base or retrieval
system,                                     of the

16 17 18 19 20 BAW 9

I S B N 0-03-025240-8
Sponsoring Editor, John Aliano
Consulting Editor, Gordon Rockmaker
Editing Supervisor, Marthe Grice
Production Manager, Nick Monti



Library of Congress Catalogjng in Publication Data

Gussow, Milton.
   Schaum’s outline of theory and problems of basic
electricity.
  (Schaum’s
  Includes
  1 . Electricity. I. Title.
TK146.G974 1983            62 1.3‘02‘02     82-467 1
ISBN 0-07-025240-8



McGraw-Hill                                              E
                  A Division of 7-kMc#uw.Ha Companies
                                   Preface


     This book is intended as a basic text to cover the fundamentals of electricity
and electric circuits. It may be used by beginning students in            schools,
technical institutes, and colleges who have no experience in electricity.
     Explanations and step-by-step solutions are deliberately detailed so that the
text can stand alone. Thus it also may be used as a home-study or reference
book. A knowledge of basic algebra and trigonometry is assumed. Designed to
provide a broad and deep background in the nature of electricity and the opera-
tion and application of electric circuits, the text uses numerous and easy-to-
follow examples accompanied by diagrams. Starting with the physics of electric
current flow, the book describes and analyzes both direct-current and alterna-
ting-current electric circuits, generators and motors, transformers, and measuring
instruments. To assure correlation to modern practice and design, illustrative
problems are presented in terms of commonly used voltages and current ratings,
covering circuits and equipments typical of those found in today’s electrical
systems.
    There are several special features of this book. One is the use of the
International System of Units (SI) throughout. A second is the prolific use of
equation numbers for reference so that the reader will always know the source of
each equation used. Other features include simplified ways to solve problems on
three-phase transformer windings, series and parallel resonance, and RL and RC
circuit waveforms.
    I wish to thank John Aliano, Gordon Rockmaker, and Marthe Grice of the
McGraw-Hill Book Company for their many constructive criticisms and con-
tinuing efforts to get this book published.

                                                           MILTON Gussow
This page intentionally left blank
                                           Contents


Chapter   1 THE NATURE OF ELECTRICITY .................................                         1
              Structure of the Atom ...................................................         1
              The Electric Charge .....................................................         3
              The Coulomb ...........................................................           4
              The Electrostatic Field ...................................................       4
              Potential Difference .....................................................        5
              Current ................................................................          5
              Current Flow ...........................................................          6
              Sources of Electricity ....................................................       7
              Direct                 Currents and           ..............................      8


Chapter   2   ELECTRICAL                       AND CONVENTIONS           ..................    15
              Units
              Introduction ............................................................        15
              Metric Prefixes ..........................................................       15
              Powers of 10 ...........................................................         16
              Scientific Notation .......................................................      20
              Rounding Off Numbers ..................................................          20
              Graphical Symbols and Electrical Diagrams
              Schematic Diagram ......................................................         27
              One-Line Diagram .......................................................         28
              Block            ..........................................................      31
              Wiring            .........................................................      31
              Electric Plan ............................................................       31


Chapter   3 OHM’S LAW AND                      .......................................         38
              The Electric Circuit .....................................................       38
              Resistance ..............................................................        39
              Fixed Resistors .........................................................        39
              Variable Resistors .......................................................       40
              Ohm’s Law .............................................................          41
              Electric Power ..........................................................        42
              Horsepower ............................................................          43
              Electrical Energy ........................................................       44



Chapter   4   DIRECT-CURRENT                                ............................       50
              Voltage. Current. and Resistance in Series Circuits ..........................   50
              Polarity of Voltage Drops ................................................       53
              Conductors .............................................................         53
              Total Power in a Series Circuit ...........................................      57
              Voltage Drop by Proportional Parts .......................................       58
                                           CONTENTS


Chapter   5   DIRECT-CURRENT                       CIRCUITS     ........................     69
              Voltage and          in a Parallel       ...................................    69
              Resistances in Parallel ...................................................     71
              Open and Short            .................................................     74
              Division of Current in Two                    ..............................    75
              Conductances in Parallel .................................................      75
              Power in Parallel          ................................................     77




Chapter   6 BATTERIES .....................................................                  88
              The Voltaic Cell .........................................................      88
              Series             Cells .................................................      89
              Primary                 Cells .............................................     90
              Types of Batteries .......................................................      90
              Battery                ...................................................      94




Chapter   7   KIRCHHOFF’S LAWS          ............................................         101
              Kirchhoff’s Voltage Law (KVL) ..........................................       101
              Kirchhoff’s Current Law (KCL) ..........................................       103
              Mesh Currents ..........................................................       104
              Node           ..........................................................      106




Chapter   8   NETWORK CALCULATIONS              .....................................        116
              Y and                 ...................................................      116
              Superposition ...........................................................      120
              Thevenin’s          .....................................................      122
              Norton’s          .......................................................      124
              Series-Parallel       ...................................................      126
              Wheatstone Bridge Circuit ...............................................      128
              Maximum Power Transfer ................................................        129
              Line-Drop              ..................................................      130
              Three-Wire                      ..........................................     131




Chapter   9 MAGNETISM                                           ........................     162
              The Nature of Magnetism ................................................       162
              Magnetic Materials ......................................................      163
              Electromagnetism .......................................................       164
              Magnetic Units ..........................................................      167
              BH Magnetization          ................................................     168
              Magnetic Circuits .......................................................      170
              Electromagnetic           ................................................     172
              International       of Units .............................................     174
                                            CONTENTS


Chapter 10 DIRECT-CURRENT                                                 .................   184
           Motors                  ..................................................         184
           Simple DC Generator ....................................................           185
           Armature Windings ......................................................           186
           Field Excitation ........................................................          187
           DC Generator                     ..........................................        188
           Generator Voltage Equations and Voltage Regulation .......................         189
           Losses and Efficiency of a DC Machine ...................................          189
           Direct-Current Motor ....................................................          191
           DC Motor Equivalent          .............................................         192
           Speed of a Motor .......................................................           193
           Motor Types ............................................................           194
           Starting              for Motors .........................................         1%



Chapter 11     PRINCIPLES OF ALTERNATING CURRENT                   .......................    205
               Generating                 Voltage .........................................   205
               Angular Measurement ...................................................        205
               Sine Wave ..............................................................       206
               Alternating         ......................................................     207
               Frequency               ...................................................    208
               Phase Relationships .....................................................      209
               Phasors ................................................................       209
               Characteristic Values of Voltage and Current ...............................   211
               Resistance in AC Circuits ................................................     213



Chapter 12 INDUCTANCE.                                        AND INDUCTIVE
           CIRCUITS         .......................................................           225
           Induction ...............................................................          225
           Characteristics of Coils ..................................................        226
           Inductive             .....................................................        227
           Inductors in Series or Parallel ............................................       228
           Inductive          .......................................................         231
           Q of a Coil .............................................................          237
           Power in RL Circuits ....................................................          237



Chapter 13 CAPACITANCE.
           CIRCUITS        .......................................................            251
           Capacitor ...............................................................          251
           Capacitance ............................................................           252
           Types of Capacitors .....................................................          254
           Capacitors in Series              ..........................................       254
           Capacitive             ....................................................        256
           Capacitive           ......................................................        257
           Power in RC Circuits ....................................................          262
                                           CONTENTS


Chapter 14 SINGLE-PHASE CIRCUITS             .......................................       275
           The General RLC Circuit ................................................        275
           RLC in Series ..........................................................        275
           RLC in Parallel .........................................................       278
           R L and RC Branches in Parallel ..........................................      280
           Power                    .................................................      282


Chapter 15 ALTERNATING-CURRENT GENERATORS AND MOTORS                          ........... 300
             Alternators ..............................................................    300
             Paralleling            ....................................................   302
             Ratings .................................................................     303
             Losses and Efficiency ....................................................    303
             Polyphase                   ...............................................   303
             Synchronous           .....................................................   306
             Single-Phase Motors .....................................................     310



Chapter 16 TRANSFORMERS            ................................................        322
           Ideal Transformer Characteristics .........................................     322
           Transformer           ......................................................    325
           Impedance         ........................................................      326
           Autotransformer ........................................................        326
           Transformer          and Efficiency ........................................    327
           No-Load             ......................................................      328
           Coil Polarity ............................................................      329


Chapter 17 THREE-PHASE SYSTEMS              ........................................       339
           Characteristics of Three-Phase          ...................................     339
           Three-Phase                            ....................................     340
           Power in Balanced Three-Phase          ....................................     342
           Unbalanced                     ...........................................      346



Chapter 16 SERIES AND PARALLEL RESONANCE                  ............................     362
           Series Resonance .................................................              362
           Q of Series Circuit ................................................            365
           Parallel Resonance ................................................             366
           Q of Parallel Circuit ..............................................            369
           Bandwidth and Power of Resonant Circuit ..........................              370



Chapter 19 WAVEFORMS AND TIME CONSTANTS                    ...........................     384
           RL Series                   ............................................        384
           RL Time          ......................................................         388
           RC Series                   ............................................        390
           RC Time Constants .....................................................         393
           Calculation  Time r ...................................................         394
                                  CONTENTS


Chapter 20 ELECTRICAL MEASUREMENTS            ..................................      411
         Basic Measuring Instruments .............................................    411
         Ammeters ..............................................................      411
         Voltmeters .............................................................     414
         Ohmmeters .............................................................      416
         Multimeters .............................................................    419
         Alternating-Current Meters ...............................................   419
         Wattmeters and Watthour Meters .........................................     425
         Analog Electronic Meters ................................................    427
         Digital Meters ...........................................................   429



          INDEX   ..........................................................          447
This page intentionally left blank
                                                                                Chapter 1

                         The Nature of Electricity
STRUCTURE OF THE ATOM
    Matter is            that has                                                      of very small
particles       atoms. All matter            classified into        one of two groups: elements or
compounds. In an element, all the atoms are the same.                    of elements are aluminum,
copper, carbon, germanium,                A compound is a combination of elements. Water, for
example, is a compound            of the elements                                                     of
any compound that retains the original characteristics of that compound             a molecule.
    Atoms are composed of subatomic                 of electrons, protons, and neutrons in various
combinations. The electron is the fundamental                          (-) of electricity. Electrons
revolve about the nucleus or center of the          in paths of concentric “shells,” or orbits (Fig.
1-1). The proton is the fundamental            (+) charge of electricity. Protons are found in the
nucleus. The number of protons within the               of any particular                  the atomic
number of that atom. For example,        silicon atom        14 protons in its nucleus so the
number of silicon is 14. The neutron, which is the fundamental                   of electricity, is also
found in the nucleus.




                                   Electrons                       Nucleus
                                   Fig. 1-1 Electrons                    of
                                            an atom
    Atoms of different                         one another in the number of electrons and protons
they contain       1-2). In its        state, an atom of any element            an equal          of
electrons and                  the negative (-) charge of each electron is equal in magnitude to the
positive (+) charge of each proton, the two opposite                    An atom in this            is
electrically        or in balance      1-2).

Example 1.1 Describe the two
     The simplest       is the hydrogen          which contains 1 proton in its nucleus          by 1 electron
orbiting              (Fig. 1-2a). The                        is helium,              2 protons in its
balanced by 2 electrons                        (Fig. 1-2b).

    A stable                   has a certain amount of energy, which is equal to the sum of the
energies of its electrons. Electrons, in turn, have                             energy levels. The
energy       of an          is proportional to its distance from the nucleus. Therefore, the energy
levels of electrons in shells farther from the nucleus are higher than those of electrons in shells

                                                        1
2                                                   THE NATURE OF ELECTRICITY                                              [CHAP. 1


                                                                                                                      Nucleus
                                                    Number of orbiting electrons                               (2 Protons, 2 Neutrons)
                              1   / Orbiting electron
                I/   /
                         /
                             @;
                              ;
                              ;:
                               :
                               ;)
                                                                                              /
                                                                                                  /
                                                                                                      /



                                                                                          I
                I                                                                         I
                                                                                          \
                 \                                                                            \
                     \                     /
                                       /                                                                   /
                         \
                             ‘-/   /




        (a) Hydrogen atom, 1 orbiting electron                                     (6)Helium atom, 2 orbiting electrons


                                                                                         Second shell

              Second shell                     Third shell




    I    I.         /                                              \


                                                                   I
                                                               /
                                                           /




                                                 Nucleus
                                   (14 protons, 14 neutrons)



        (c) Silicon atom, 14 orbiting electrons                                    (d)Copper atom, 29 orbiting electrons

                                       Fig. 1-2 Atomic structure of four common elements

nearer                  The electrons in the                        are called valence electrons. When
external energy        as heat, light, or electric          is applied to certain
gain energy. This may cause                      to move to a higher energy level. An atom in which
this has occurred         to be in an excited state. An atom in an                 state is unstable.
     When an electron        moved to the outermost shell of its atom, it is least attracted by the
positive          of the protons within the            of its          If enough           is then         to
the atom, some of the outermost shell or valence                   will leave                These  electrons
are        free electrons. It is the                of free electrons that provides              current in a
metal conductor.
     Each       of an       can contain        a certain maximum number of electrons.
is called     quota of a shell.                             are in successive                       K,L, M,
N, 0, P, and Q at increasing                                                                has a maximum
number of electrons for stability        1-3). After       K shell            filled with 2 electrons, the L
CHAP. I]                               THE NATURE OF ELECTRICITY                                           3




                                                   0

                                               N

                                           M



                                    K

                                                          or
                                                          32

                             Nucleus
                             Fig. 1-3 Energy                      of electrons for
                                      each shell

shell     take up to 8 electrons.          maximum number of electrons in the remaining shells can be
8, 18, or 32 for different                   maximum for an outermost                is always 8.

Example 1.2 Structure the copper            by identifying its energy       (Fig. 1-2d).
     In the copper          there are 29 protons in the                          29 orbiting             29
electrons fill the K shell with 2 electrons       L shell with 8 electrons. The remaining 19 electrons   fill
the M shell        18 electrons, and              is 1 electron in the           N shell.

     If the quota is filled in the outermost shell of an atom, an element made up of such         is said
to be inert. When the K shell is filled with 2 electrons, we have                           helium (Fig.
1-2b). When the outer shell of an atom                   quota of electrons, is capable of gaining or
losing electrons. If an atom                or more electrons in its outer shell,   protons outnumber
the            so that the                a net
called a positive ion. If an atom gains electrons,
atom           called a negative ion. The               by which atoms         gain or lose            is
called ionization.

Example 1.3 Describe                   to the copper       when it
   The copper                  a positive         a net        of + 1.


THE ELECTRIC CHARGE
    Since                                                         gain electrons, is possible to cause a
transfer of electrons           object to another. When this                                        of the
positive                        in each object no longer exists. Therefore, one object will contain
excess number of electrons                             a negative, or minus (-), electric
other object will contain                    of protons      its charge            a positive, plus (+),
polarity.
    When a pair of objects contains                    that is,              (+) or both          (-), the
objects are said to have like charges. When a pair of bodies                                  that is, one
body is positive (+) while the               is negative (-), they       said to have unlike or opposite
charges.        law of electric          may be stated as follows:

                 1 Like                  each other; unlike charges attract each other.     I
4                                     THE NATURE OF ELECTRICITY                                                  [CHAP. 1


    If a negative (-) charge placed next another negative (-) charge,                                   will repel each
other       1-4a). If a positive (+) charge is placed next to a negative (-) charge,                     will be drawn
together       1-4c).




                     Like - charges repel        Like + charges repel          Unlike charges attract
                               (4                         (b)                            (c)
                                         Fig. 1-4 Force

THE COULOMB
    The magnitude of electric        a body possesses               by the      of electrons
compared       the number of protons within the          The symbol for the magnitude of the
electric         Q, expressed in units of coulombs (C). A charge of one                 -Q,
means a body          a charge of 6.25 x 10" more electrons

Example 1.4 What the meaning of +Q?
     A charge of one             means a body contains                               of 6.25 x 10l8 more protons
electrons.

Example 1.5 A dielectric                     a negative            of 12.5 X 10'8 electrons.            is its         in
coulombs?
    Since the number of electrons                             of 1 C (1 C = 6.25 x 10'* electrons), - Q = 2 C.


THE ELECTROSTATIC FIELD
    The                             of an electric         is its         to exert a force. This force is
present within the electrostatic field surrounding                       object. When two objects of
opposite          are brought        each other, the electrostatic field is                  in the area
between them (Fig. 1-5). The electric field is indicated by lines of force drawn
objects. If an electron is released at point A in this field, it will be           by the

                                                                Electrostatic lines of force




                   Fig. 1-5 The                  field between                   of opposite

*See page 16 for an explanation of how to use powers of 10.
CHAP. 11                           T H E NATURE OF ELECTRICITY                                              5


and will be attracted to the                             will tend to move the           in the
direction of the       of force between     objects. The               in Fig. 1-5 indicate
direction of motion that would be taken by the electron if it        in different areas of the
electrostatic field.

Example 1.0 Draw the electrostatic field that would exist between two negatively charged objects.
    When two like charges are placed near each other, the lines of force repel each other as shown below.




                               <




    A charged object will retain                            if there is no immediate transfer of electrons
to or         In                                 is said to be at rest. Electricity at rest is called static
electricity.


POTENTIAL DIFFERENCE
    Because of the force of its                field, an electric           the ability to do              of
moving another charge        attraction or               The ability of a charge to do          is called
potential. When one              is different            other, there       be a difference in potential
between
    The sum of the                of potential of all the charges in the               field is            to
as electromotive force (emf).
    The basic       of potential                    volt (V). The           for potential               is V,
indicating the ability to do             of forcing             to move. Because
potential               called voltage.

Example 1.7 What is the meaning of a battery voltage output of 6 V?
    A voltage output of 6 V means that the potential difference between the two terminals of the battery is
6 V. Thus, voltage is fundamentally the potential difference between two points.

CURRENT
    The                  flow of electrons           current. To produce current, the
must    moved by a potential                Current               by the                 I. The
basic   in which current is measured is the         (A). One         of current is defined as the
movement of one                          of a conductor                   of time.

Example 1.8 If a current of 2 A flows through a meter for 1 minute (min), how many coulombs pass through
the meter?
    1 A is 1 C per second (C/s). 2 A is 2 C/s. Since there are 60 s in 1 min, 60 x 2 C = 120 C pass through
the meter in 1 min.
    The definition of current can                   as an equation:
                                                  I = -Q
                                                       T
6                                   THE NATURE OF ELECTRICITY                                [CHAP. 1


where    I = current, A
         Q = charge,
         T = time, s
or                                            Q = I x T = IT                                     ( 1-21
    Charge differs from               in that Q is        accumulation of charge, while I measures the
intensity of moving charges.

Example 1.Q Find the             to Example 1.8 by using           (1-2).
   Write down the
                                           I = 2A           T=Ws
Write down the
                                                       Q=?
Use Eq. (1-2) to solve for the
                                                   Q = I x T
Substitute I = 2 A and T = 60 s:
                                              Q = (2A) x (60s)
Solve for Q:
                                             Q = 120C              Ans.

CURRENT FLOW
    In                                                          are charges that can be forced to move
with relative       by a potential difference. If a            difference is connected        two ends
of a copper wire (Fig. M),the applied voltage (1.5 V) forces                               move. This
current is a drift of electrons           point of negative charge, -0, at one end of the wire, moving
through the wire, and returning to the positive charge, +Q, at the           end. The            of the
electron       is from       negative side of the           through the wire, and back to the positive
side of the             The           of electron flow is from a point of negative potential to a point
of positive potential. The solid arrow (Fig. 1-6) indicates                     of current in terms of

                                                Conventional flow
                                               +----
                                                   Electron flow

                                     Copper wire                   Free electrons
                                      conductor                      in motion




                                    r                                           I


                                                         \     Battery cell
                                           Potential           = 1.5 V
                                   Fig. 1-6 Potential           across two
                                            ends of a wire conductor causes
                                            electric current
CHAP. I]                          THE NATURE OF ELECTRICITY                                      7


electron flow. The direction of moving positive charges,             from electron flow, is con-
sidered      conventional flow of current and is indicated by the            (Fig. 1-6). In
electricity,         are usually analyzed in terms of conventional                       positive
potential is                       negative potential. Therefore, the direction of conventional
current is the           of positive charges in motion. Any circuit can be analyzed by either
electron flow or conventional flow in the                         In    book current      always
considered as conventional flow.

SOURCES OF ELECTRICITY
Chemical Battery
    A          chemical cell is a combination of materials which are used for converting chemical
energy into          energy. A            is formed when two or more cells are connected. A
chemical reaction                    charges  on two dissimilar metals, which serve      negative
and positive terminals (Fig. 1-7). The metals are in contact with an electrolyte.

                                                     Metal




                           Electrolyte

                                         Fig. 1-7 Voltaic    cell

Generator
     The           is a machine in which electromagnetic inductance is used to produce a voltage by
rotating coils of wire through a             magnetic field or by rotating a magnetic field through
stationary coils of wire. Today more than 95 percent of the world's energy is produced by
generators.

Thermal Energy
    The             of most electric energy begins with the formation of heat energy. Coal, oil, or
natural gas can be burned to release large quantities of heat. Once heat energy is available,
conversion to mechanical energy is the next step. Water is heated to produce steam, which is then
used to turn                                                    direct conversion from heat energy
to electric energy will increase efficiency and reduce thermal pollution of water          and the
atmosphere.

Magnetohydrodynamic (MHD)Conversion
    In MHD converter, gases are ionized by very high temperatures, approximately 3000 degrees
Fahrenheit (3000°F), or 1650 degrees Celsius (1650'C). The hot gases pass through a strong
magnetic field with current resulting. The                  then moved back to the
to form a complete cycle (Fig. 1-8). MHD converters have no mechanical moving parts.

Thermionic Emission
   The thermionic energy converter a device that           of two electrodes in a vacuum. The
emitter                  and produces free electrons.                          is maintained at a
much lower temperature and receives the          released at the
                                 T H E NATURE OF ELECTRICITY                                [CHAP. 1




                                 Fig. 1-8 Principles of M H D converter



Solar Cells
    Solar cells convert light energy directly into electric energy. They consist of semiconductor
material like            are used in large arrays in spacecraft to recharge batteries. Solar cells are
also used in home heating.

Piezoelectric Effect
    Certain crystals, such as quartz and Rochelle salts, generate a voltage when they are vibrated
mechanically. This action is known as the piezoelectric efect. One example is the crystal
phonograph cartridge, which contains a Rochelle salt crystal to which a needle is fastened. As the
needle moves in the grooves of a record, it         from side to side. This mechanical motion is
applied to the crystal, and a voltage then generated.

Photoelectric Effect
     Some materials, such as zinc, potassium, and cesium oxide, emit electrons when light strikes
their surfaces. This action is known as the photoelectric efect. Common applications of photo-
electricity are television camera tubes and photoelectric cells.

Thermocouples
    If wires of two different metals, such as iron and copper, are welded together and the joint is
heated, the difference in electron activity in the two metals produces an emf across the
joint. Thermocouple junctions can be used to measure the amount of current because current acts
to heat the junction.




DIRECT AND ALTERNATING CURRENTS AND VOLTAGES
    Direct current (dc) is current that moves through a conductor or circuit in one direction only
(Fig. 1-90). The reason for the unidirectional current is that voltage sources such as cells and
batteries maintain the same polarity of output voltage         1-9b). The voltage supplied by these
sources is        direct-current voltage, or simply dc uoltage. A dc voltage source can change the
amount of its output voltage, but if the same polarity is maintained, direct current will flow in one
direction only.
CHAP. 11                                  THE NATURE OF ELECTRICITY                                                9



                                        dc Current                                    dc Voltage
                           + I                                         + v
                                                               9
                  Magnitude
                                                         V
                                                              '
                                                              1 Magnitude
                                                                of voltage
                  of current
                                                              -T
                                                               6
                             0                                               0
                                         Time   +

                       Fig. 1-9 Waveforms of a constant                       and dc voltage


Example 1.10 Assuming the polarity of the                                     in Fig. 1-9b,draw        new curves of
current and
    With polarity reversed, the current will now flow in the                                   The curves would then
appear as follows:



                       o                             r   v~            0~




                     - I                                             - v
                                  dc Current                                     dc



    An alternating-current         (ac voltage)         periodically reverses or alternates in polarity
(Fig. 1- 10a). Therefore, the resulting             current also              reverses direction
1-lob). In terms of conventional flow, the current flows from                           of the voltage
source, through the circuit, and      to the negative                      the generator alternates in
polarity, the current must reverse its direction. The ac power line              in most           is a
common              The voltage        current direction go through many reversals each second in
these systems.

                           ac                                              ac Current




                                  (0)                                            (b)

                                 Fig. 1-10 Waveforms of ac voltage           ac current
10                                                  THE NATURE OF ELECTRICITY                                                   [CHAP. 1


                                                        Solved Problems
1.1   Match each term in column 1 to its                                    meaning in column 2.
                                 Column 1                                          Column 2
                  1.       Electron                             (a) Positive charge
                  2.       Neutron                              (b) Same number of electrons and protons
                  3.       Compound                             ( c ) Electrons in first shell
                 4.        Neutral                              ( d ) Released electrons
                 5.        Valence electrons                     (e) Neutral
                 6.        Atomic number                         cf) Electrons in outermost shell
                  7.       Free                                 ( 8 ) Quota filled in outermost shell
                 8.        K shell                              (h) Number of electrons in nucleus
                 9.        Ion                                    ( i ) Negative charge
                10.        Inert                                  (j) Quota of 2 electrons
                                                                (k) Combined elements
                                                                  (I) Number of protons in nucleus
                                                                (m) Charged atom
      Ans.   1. (i)    2. (e)           3. (k) 4. ( b ) 5 . (f) 6 . (I)               7. ( d ) 8. (j) 9. (m) 10. (g)


1.2   Show the                                       of the element aluminum with atomic number 13. What is its
      electron
           Because aluminum has 13 protons in the                                            it must have 13 orbiting                to be
      electrically              with the innermost                                              1-3), we have
                                                           K shell                2 electrons
                                                           L shell                8 electrons
                                                           M shell                3 electrons
                                                            Total                13 electrons
      The atomic structure for aluminum then is shown in Fig. 1-11. Its electron                                              -3 because it
      has 3 valence


                                        /&, /
                                                I
                                                                \
                                                                    \

                                   //' -0".     /           \
                                                                        \
                                                                            \


                                    ,'a ,&,
                           /
                               i
                                            Q                       \
                                                                                \
                                                                                 M
                       I                        /           \           L         \

                                                                                                 3 electrons in 18-electron
                                                                                                      shell

                                                                                             '   2-electron
                                                                            /-

                                                  -0-2,.
                                                '.--/\
                                        \
                                            \


                                                                                8-electron
                                                                Fig. 1-11
CHAP. I]                                T H E NATURE OF ELECTRICITY                                          11


1.3   In observing the maximum number of electrons in shells K, L, M,and N in Fig. 1-3, you will
      find that they are 2, 8, 18, and 32 electrons, respectively.           a formula that describes
      this                      n is the shell         in sequential order outward       the nucleus.
             The            2n2 because the maximum number of electrons in the
                                     K or      shell (n = 1) is      = 2(1) = 2
                                     L or         shell (n = 2) is 2(23 = 2(4) = 8
                                     M or       shell (n = 3) is 2(33 = 2(9) = 18
                                     N or fourth shell (n = 4) is 2(43 = 2(16) = 32
      This                  true for most


1.4   What is the net charge of a body that contains 8 protons and 4 electrons?
           The numerical      of the net charge is found by                     the number of one type of charge
      from the number of the other type. So a                           of 8 (+8) and                  of 4 (-4)
      yields                of 4 (+4).


1.5   A charged                         a deficiency of 50 x 10l8 electrons.           its charge in coulombs
      with
          Since C = 6.25 x 10" electrons, 8 C = 50 x 10" electrons. Deficiency of electrons                  an
      excess of protons. So the                             of 8 C, or + Q = 8 C.


1.6   Write the word                                             each of the following statements:
      ( a ) A rubber                   a second         rod, so both                                   charges.
      ( b ) Glass                    silk attracts rubber        with fur. If the               rod is negative,
            the glass                be
      ( a ) like (law of charges);      (b) positive (law of charges)


1.7   Find the current needed to charge a dielectric so that it will accumulate a charge of 20C
      after 4 s.
               Known            Q = 20C; T = 4 s
               Unknown:          I=?
             Use Eq. (1-1) to find I:

                                             I = - = - -* O C - 5 A       Ans.
                                                  T      4s


1.8   A current of 8 A charges an insulator for 3 s. How                            is accumulated?
              Known              I = 8 A; T = 3 s
              Unknown:          Q=?
           Use Eq. (1-2) to find Q:
                                          Q = IT = (8 A)(3 s) = 24 C         Ans.


1.9   Write the word or words                       correctly complete each of the following statements.
      ( a ) The            of a charge to do work is its
12                                    THE NATURE OF ELECTRICITY                               [CHAP. 1


              When one charge is different                            other, there is a              of

              The unit of potential                  is the
              The         of potential                         of all charges

              The             of charges
              A greater amount of moving charges             a                  value for the current.
              When the potential                zero, the value of current is
              The rate of flow of charge is called
              The direction of the                flow of current is from a point of
              potential to a point of                  potential.
              Electron flow is opposite in direction to                   flow.
              Direct current (dc) has just                   direction.
              A                   is an example of a dc voltage source.
              An alternating current (ac)                   its polarity.
              ( a ) potential                     ( h ) current
              (b) difference, potential            (i) positive, negative
              (c) volt                             (j) conventional
              (d) electromotive force             (k) one
              (e) current                          ( I ) battery
               (f) higher                        (m) reverses
              ( 8 ) zero


1.10   Match each device in column 1 to its closest principle in column 2.
                                      Column 1                            Column 2
                           1.   Battery                       (a)   Electromagnetic
                           2.   Generator                     (b)   Free electrons
                           3.   TV camera tube                (c)   Ionized
                           4.   Vacuum tube                   (d)   Chemical
                           5.   Phonograph                    (e)   Thermal
                                                              cf)   Photoelectricity
                                                              (g)   Mechanical
       Ans.   1. ( d ) 2 . (a) 3. (1) 4. ( b ) 5 . ( g )
CHAP. I]                             THE NATURE OF ELECTRICITY


                                     Supplementary Problems
1.11   Match             in column 1 to its          meaning in column
                      Column 1                                Column 2
                 1. Proton                        ( a ) Negative
                2. Molecule                      (b) Quota of 8 electrons
                3. Quota                         (c) Excited state
                4. L shell                       ( d ) Maximum number of electrons in a shell
                5. Element                       (e) Atom negatively
                6. Unstable                       cf) Positive
                7. Shell                         (g) Mass and volume
                8. Copper                        ( h ) Atomic number is 29
                9. Negative                       (i) Quota of 18 electrons
               10. Matter                         (j) Orbit
                                                 (k) Smallest           having same
                                                       characteristics
                                                  (I) Atomic           is 14
                                                 (m) All atoms
       Ans. 1. cf) 2. (k) 3. ( d ) 4. ( b ) 5. (m) 6. (c)           7. (j) 8. ( h ) 9. (e)   10. ( g )

1.12   Write      word or words which most                                 of the following statements.
       ( a ) Electrons move about the        of an atom in paths which are
       (b) The nucleus of an atom consists of particles called              and
       (c) The           of protons in the              of an atom is known as the
                             of that
       ( d ) When all the          within a substance are alike,                   called a chemical

       (4 A                      is                      of a compound which retains all the           of that
             compound.
        cf) The energy                     of an electron                  by its distance   the nucleus of an
             atom.
       (8) If a neutral             electrons, it becomes a                       ion.
       ( h ) If a neutral                      it becomes a                       ion.
        (i) Unlike charges                      each other, while like charges                  each
        (j) A charged object is surrounded by an                        field.
       Ans. ( a ) shells or orbits            cf) level
            (b) protons,                      (8) negative
            ( c ) atomic                      (h) positive
            ( d ) element                      (i) attract, repel
            (e) molecule                       (j) electrostatic

1.13   Show the atomic structure of the element          which has an atomic                        of 15. What is its
       electron             Ans. See Fig. 1-12. Electron          -5.

1.14   Show the        structure of the element   which has                  of 10. What is its
       valence?      Ans. See Fig. 1-13. Electron         0. Thus, neon is inert.

1.15   What is                if 13 electrons are added to 12 protons?           Ans. -1 electron
14                                     THE NATURE OF ELECTRICITY                                                 [CHAP. 1




                                Fig. 1-12                                           Fig. 1-13


1.16   What becomes of the                         it loses all the                         in its
       Ans. It                         ion with a net charge of -4.            Fig. 1-2c.

1.17   A charged                            of 25 x 10" electrons. Find its charge in coulombs with polarity.
       Ans. - Q = 4 C

1.18   A material with an excess of 25 x 10'' electrons  6.25 x 10l8electrons. The excess electrons are
       then       to flow past a given point in 2s. Find the current produced by the resultant
       flow.   ~ n s .r = 1 . 5 ~

1.19   A charge of 10 C flows past      given point         2 s. What         the current?           Ans. I = 5 A

1.20   How much charge                                current of 5 A charges an insulator for 5 s?
       Ans. Q = 2 5 C

1.21   Match        item in section 1 with its               in section 2.

                        Section 1                                                           Section 2
       1. Water               4. Quartz                          (a)   Solar cell                    (e)   Photoelectric sell
       2. Cesium              5. Carbon-zinc                     (b) Generator                        (f) Turbine
       3. Silicon             6. Iron-copper                     ( c ) Battery                       (g) MHD converter
                                                                 ( d ) Crystal                       ( h ) Thermocouple

       Ans.    1. (f) 2. (e)   3. (a) 4. (d) 5. (c) 6. ( h )

1.22   Fill in the missing quantity:


                       1, A     Q,C                                    Ans.

                         ?       10         2
                         5       ?          4
                         ?       9          2
                         7       ?          3
                         2        6
                                         -
                                         ?
                                                                               Chapter 2

         Electrical Standards and Conventions

                                                 Units

INTRODUCTION
     The                              of units                 commonly called SI, is used in elec-
tricity. The              SI stands for systkme internationale. The                    of SI are length,
mass,                current, thermodynamic                 light intensity,              of substance
(Table 2-1). Formerly       MKS metric system                      M stands for meter             K for
kilogram (mass), and S for seconds (time). The two supplementary             of SI are plane angle and
solid angle (Table 2-2).

                         Table 2-1 Base Units of the International Metric System

                                   Quantity            I Base Unit        Symbol

                         Length                             meter          m
                         Mass                               kilogram       kg
                         Time                               second         S

                         Electric current                   ampere         A
                         Thermodynamic temperature          kelvin         K
                         Light intensity                    candela        cd
                         Amount of substance                mole           mol


                                    Tabk 2-2 Supplementary SI Units

                                   Quantity          Unit        Symbol




    Other
unit of charge                  which is derived                          of second
of the units that are     in electricity              ones (Table 2-3).


METRIC PREFIXES
    In the study of basic                                    are too small or too       to express
conveniently. For example, in the case of resistance, we often use         in thousands or millions
of ohms (a). The prefix kilo (denoted by the letter k) is a convenient way of expressing a
thousand.                 of saying a resistor has a value of 10 OOO 0,we normally refer to it as a
10-kilohm (10-kR) resistor.            case of current, we often use            in thousandths
millionths of an          We use               such as milliamperes and                 The prefix
16                           ELECTRICAL STANDARDS AND CONVENTIONS                                 [CHAP. 2


rnilli is a     way of saying a                 and micro is a             way of saying a millionth. Thus
0.012 A becomes 12 milliamperes (mA) and O.OO0 005 A becomes 5 microamperes (pA). Table 2-4
lists the metric prefixes commonly used in electricity and their numerical equivalents.

                                        Table 2-3 Derived SI Units

                                     Quantity              Unit       Symbol

                                Energy                    joule        J
                                Force                     newton       N
                                Power                     watt         W
                                Electric                  coulomb      C
                                Electric                  volt         V
                                Electric                  ohm          n
                                Electric                  siemens      S
                                Electric                  farad        F
                                Electric                  henry        H
                                Frequency                 hertz        Hz
                                Magnetic flux             weber        wb
                                Magnetic flux density     tesla        T




                   Prefix
              (Letter Symbol)                     Value                        Pronunciation

               mega (W                         million         1OOO OOO      as in megaphone
               kilo (k)                      thousand              loo0      kill’oh
               milli(m)                    thousandth              0.001     as in military
               micro ( p )                   millionth         O.OOO001      as in microphone
               nano (n)            thousand-millionth      0.000 OOO 001     nan’oh
               PiCO (PI              million-millionth 0.OOO OOO OOO 001     peek’oh


Example 2.1 A resistor      a value of 10M stamped on its case.        many ohms of resistance
resistor have?
     The       M denotes mega, or million. Thus                a value of 10 megohms (MR)or 10 million
ohms.

Example 2.2 A power                 a capacity of delivering 500000 watts (W).       What is the capacity in
kilowatts (kw)?
    Refer to Table 2-4. Kilo stands for 1OOO. Thus, 500 OOO W = 500 kW.

POWERS OF 10
    We have seen          is often necessary or desirable to        one unit of measurement to
another unit that may be larger or smaller. In the previous section we did this by substituting a
metric prefix for        values. Another way would be to                 number to a power of
10. Powers of 10 are        termed the “engheer*s shorthand.** Examples of expressing numbers
as powers of 10 are shown in Table 2-5.
CHAP. 21                ELECTRICAL                            CONVENTIONS                       17




                          Number        Power of 10      Commonly Read As

                        o.Oo0 001 =         1o-6       10 to     minus sixth
                         o.Oo0 01 =         lo-s       10 to the minus fifth
                           o.Oo0 1 =        10-~       10 to     minus fourth
                             0.001 =        10-~       10 to     minus third
                             0.01 =          10-'      10 to     minus second
                              0.1 =          10-'      10 to the minus one
                                1=           1oo       10 to
                               10=           10'       10 to     first
                              l00=           10'       10 squared
                             1000=           103       10 cubed
                            1oOOo=           10'       10 to
                          1OOOOO=            105       10 to     fifth
                         1Oo0OOo=            106       10 to


Rule 1: To express numbers larger than 1 as a small                  a power of 10, move the
        decimal       to the Left as many        as desired. Then multiply the number
        by 10 to a power                to the number of places
Example 2.3
                   3000 = 3,0009        (Decimal point moved three           to the left.)
                        = 3 x 103       (Therefore the power,                 3.)
                   6500 = 65&           (Decimal point moved two
                        = 65 x 10'      (Therefore the exponent 2.)
                 880000 = 88A0000,      (Decimal point moved left four places.)
                        = 88 x 104      (Therefore the exponent is 4.)
                   42.56 = 4&56            (Decimal point is moved left one place.)
                         = 4.256 x 10      (Therefore the exponent is 1.)

Rule 2: To express numbers less than 1 as a whole           times a power of 10, move the decimal
        point to the right as many         as desired. Then multiply the number              10 to
        a negative power         is equal to the number of places

Example 2.4
                  0.006 = 09006,        (Decimal point moved three places to the right.)
                       = 6 x 10-3       (Therefore the power           is -3.)

                  0.435 = 0&35            (Decimal point moved one           to the right.)
                        = 4.35 x 10-'     (Therefore the exponent - 1.)
                ~.OW92 = 0~~ 92<          (Decimal point moved right five places.)
                        = 92 x 10-~       (Therefore the exponent is -5.)
                  0.578 = 0&8             (Decimal point is moved right two places.)
                       = 57.8 x 10-*      (Therefore                 -2.)
18                               ELECTRICAL STANDARDS AND CONVENTIONS                                              [CHAP. 2


Rule 3: To convert number expressed          positive power of 10 to a decimal number, move the
        decimal point to the right as many places as the value of the

Example 2.5
      0.615 x 10' = 09615,         (The exponent is 3. Therefore move the decimal                  three places to the right.)
                  = 615

      0.615 x 106 =                     (Move the decimal                         to the right.)
                            OOOi
                  = 615000

     0.0049 x 103 = O$M39           (Move                   right three places.)
                  = 4.9

         84 X 102= 84&             (Move decimal           right two places.)
                  = 8400


Rule 4: To convert number expressed as a negative power of 10 to a decimal number, move the
        decimal point to the left as many places as the value of the

Example 2.6
     70 x lW3= O&                (The              -3.     Therefore move the decimal              three places to the left.)
                = 0.07
  82.4 x 10-' =    O
                   w             (Move decimal
                = 0.824
60OOO X 10a =             OOOp       (Move                      left six
                = 0.06
     0.5 X lO-' = O B 5            (Move                         three places.)
                = 0.0005


Rule 5: To multiply two or more numbers expressed                           powers of 10, multiply the coefficients to
        obtain    new coefficient and add the                                to obtain    new exponent of 10.

Example 2.7
                             102x 104 = 1 0 ~ + =~ 10'             Ans.
                            10-I x 104 = 10-'+~= 103                 Ans.
                 (40 x 103(25 x 107 = 40 X 25 X 103X 10'     (40 X 25 = 1OOO,3 + 2 = 5)
                                    = 1OOO x 105    (But 1000 = 109
                                    = 103 x 105
                                    = 108      Ans.
                 (2 x l0-%50 x 102) = 2 X 50 X 10-' X 10'
                                           = 100 x 10"      (But 100 = 109
                                           = 102 x 1      (loo = 1)
                                           = 10'         Ans.
CHAP. 21                   ELECTRICAL                          AND CONVENTIONS                         19


Rule 6: To divide        powers of 10, use the formula
                                                         - - - 1 x 10-
                                                         10"
We therefore can transfer any power of 10 from numerator to denominator, or vice versa, simply
by changing the sign of the exponent.

Example 2.8
                         15                                       1500
                              = 15 X 10' = 150                    -4 =    1500 x 10a4= 0.15
                                                                   10
                         15 = 15 X 103 = 15000
                        10-3
    The prefixes in Table 2-4 are expressed as powers of 10 in Table 2-6.

                                              Table 2-6 Metric Prefixes
                                              Expressed as Powers of 10

                                           Metric Prefix       Power of 10

                                           mew (M)                1o6
                                           kilo (k)               1o3
                                           milli (m)              10-~
                                           micro ( p )            10+
                                           nano (n)               10-~
                                           PiCO (PI               1o-I2



Example 2.9    Problem answers can be expressed in different                                  3 OOO OOO R
is different             to 3 Mfl.
    ( a ) Express 2.1 V in millivolts (mV).

                                           1 v = 103mV
                                          2.1 v = 2.1 x 103 = 2 1 0 0 m ~       Ans.
    ( b ) Express 0.006 A in milliamperes (mA).
                                              1 A = 103mA
                                         0.006A = 0.006 x 103= 6mA              Ans.
    (c)   Change 356mV to         (V).
                                           1 mV = iO-'V
                                         356mV = 356 x 10-' = 0.356V             Ans.
    ( d ) Change 500 000 Q to megohms (MR).
                                                          1 Q = 10-"MR
                                          500 OOOR x 10-6 = 0.5 MR             Ans.

    (e)   Change 20 OOO OOO picofarads              farads (F).
                                                   1 pF = 10-'*F
                                     20000OOOpF x 1O-I2 = 0.00002F                Ans.
20                           ELECTRICAL STANDARDS AND                                                         [CHAP. 2


SCIENTIFIC NOTATION
    In scientific notation,   coefficient of the power of 10 is always                                with one decimal
place and      required power of 10. Several examples will make the

Example 2.10 Express the following                   in scientific

         300000 = 3pOO009 x 10’           (Move                  left five places-power     is 5 by Rule 1)
                = 3 x 10’

             871 = 8& x 102          (Move                             places-power     is 2 by Rule 1)
                 = 8.71 X 102

           7425 = &
                  7      X 103         (Move                  left three places-power     is 3 by Rule 1)
                = 7.425 X 103

           0.001 = O        ~ 10-~ X    (Move                  right three places-power      is -3 by Rule 2)
                 = 1 x 10-~

           0.015 = w5 X 10-2            (Move decimal          right two places-power      is -2 by Rule 2)
                 = 1.5 X 10-2




ROUNDING OFF NUMBERS
     A number is rounded off by dropping one more digits at its right. If the digit to be dropped
is less than 5, we leave          digit as it is. For example, 4.1632, if rounded to four digits, would be
4.163; if rounded to three digits, 4.16. If the digit to be dropped is greater than 5 , we increase
digit to its left by 1. For example, 7.3468, if rounded to four digits, would be 7.347; if rounded to
three digits, 7.35. If the digit to be dropped is exactly 5 (that is, 5 followed by nothing but
we increase        digits to its left by 1 if it is an odd number and we leave        digit to the      as it if
it is an         number. For example, 2.175, when rounded to three digits, becomes 2.18. The
number 2.185 would also round to the same value, 2.18, if rounded to three digits.
     Any digit that is needed to define the specific value is said to be significant. For example, a
voltage of 115 V has three significant digits: 1, 1, and 5. When rounding off numbers, zero is not
counted as a significant digit if it                immediately after       decimal point and is followed by
other significant digits. Such              must be retained and the           of significant digits must begin
at the first significant digit beyond them. For example, 0.O00 12 has two significant digits, 1 and 2,
and      preceding zeros don’t count.                     18.0 has three significant digits; in this case     is
significant because is not followed by other significant digits. In                          specific values are
usually expressed in three significant digits.

Example 2.11 Round off the following                   to three significant digits.
     We look at the fourth significant digit to the right                        this digit is less       5 , greater
5 , or equal to 5.
                                  5.6428 = 5.64                      0.01695 = 0.0170
                                   49.67 = 49.7                         2078 = 2080
                                  305.42 = 305                 1.003 x 10-’ = 1.00 x 10+
                                  782.51 = 783                  12.46 X 10’ = 12.5 X 10’
                               0.003 842 = 0.003 84             1.865 x 102= 1.86 X 102
CHAP. 21                       ELECTRICAL STANDARDS AND CONVENTIONS                               21


   Scientific               is a convenient way to work problems in electricity. Often we express a
numerical             in terms of a prefix rather         the answer in scientific

Example 2.12 Express each of the following first in scientific notation and then with a prefix.
      (a) O.OO0 53 A to milliamperes (mA)
                                                    0.000 53 A = 5.3 x 1 0 - ~A
                                                               = 0.53 x ~ o - ~ A
                                                               = 0.53 mA

      (b) 2500 V to kilovolts (kV)
                                                      2500V = 2.5 X 103V
                                                              = 2.5 kV

      ( c ) 0.0oOOOO 1 F to microfarads ( p F )
                                                   o.oooooo 1 F = 1 x 10-’ F
                                                                = 10 x 10-6F
                                                                = 10pF




                                              Solved Problems
Express each of the                  in the

2.1      2 A to milliamperes
                                                    l A = 1OOOmA= 103mA
                                      Multiply 2 by 1O00 to get 2000 mA.            Ans.
         or                       Multiply 2 by 103to get 2 x 103mA, which          2000mA.


2.2      1327 mA to amperes
                                                    1 mA = 0.001 A = 10-3A
                                     Multiply 1327 by 0.001 to get 1.327 A.          Ans.
         or                    Multiply 1327 by 10-3 to get 1327 x 10-3A,              1.327 A.

2.3      8.2 k R to
                                                  1 k R = 1OOOR = 103R
                                     Multiply 8.2 by 1OOO to get 8200R.        Ans.
         or                       Multiply 8.2 by 103to get 8.2 x 103R which is 8200 R.

2.4     680 k R to megohms
              Use two steps.
        Step 1: Convert to ohms.
                                                  Multiply 680 by 1O00 to get 680000R.
22                         ELECTRICAL STANDARDS AND CONVENTIONS                                            [CHAP. 2


       Step 2: Convert to megohms.

                                  Multiply 680 OOO R by O.OO0 001 to get 0.68 MR.              Ans.


2.5    10 OOO pF to
                                             1 p F = O.OOOOO1 F = 10-6F
                               Multiply 10 OOO by 0.OOO 001 to get 0.01 F.     Ans.
       or                    Multiply 1OOOO by 1Od6 to get 100oO X 10-6, which is 0.01 F.


2.6    0.OOOOOO 04 s to nanoseconds (ns)
                                             I s = IOOOOOOOOOns = 109ns
                             Multiply O.OOOOOO04 by 1 OOO 0oO0oO to get 40 ns.               Ans.
       or     Multiply 0.OOO OOO 04 by 109to get 0.OOO OOO 04 X 109ns, which is equal to 4 x 10' or 40 ns.

Express the following numbers as decimal numbers.

2.7    0.75 x 103
            Move decimal point right three places-Rule     3:
                                        0.75 X 103 = O         a = 750        Ans.


2.8    0.75 x 10-~
            Move decimal point left three places-Rule     4:
                                    0.75 x 1 0 - ~ = 0.000.75 = 0.00075           Ans.
                                                    L.2
2.9    (2.1 X 10-')(4 X 109
                                  (2.1 X 10-')(4 X 109 = 2.1 X 4 x 10-' X 102
                                                       = 8.4 x 10'     (Rule 5 )
                                                       = 84     (Rule 3)         Ans.


2.10   Express 4160 in scientific notation.
            Move decimal point left three places-Rule     I:
                                    4160 = 4~      x 103 = 4.160 x 103            Ans.

Express        quantity in the following problems in scientific notation and then perform the
indicated arithmetic calculation.

2.11   0.072 X 1OOO
            Express        0.072 = 7.2 x 10-2     (Move decimal point right two places-Rule           2)
       Then                               0.072 x loo0 = (7.2 X 10-3(1 X 10')
                                                         = (7.2 x ixio-* x 107
                                                         = 7.2 x 10       (Rule 5 )
                                                         = 72      (Rule 3)           Ans.
CHAP. 21                  ELECTRICAL STANDARDS AND CONVENTIONS                                                         23


2.12   0.0045 x 100
              Express   0.0045 = 4.5 x lW3         (Move                           three places-Rule              2)
                          100 = 1 x 102        (Move                           two places-Rule     1)

        Then                               0.0045 x 100 = (4.5 X lO-.')(l X 103
                                                           = (4.5 x 1 ) ( W x 103
                                                           = 4.5 x 10-'        (Rule 5 )
                                                           = 0.45       (Rule 4)           Ans.



2.13   7500 c 100
            Express      7500 = 7.5 x 103         (Move             point left three places-Rule             1)
                          100 = 1 x 102       (Move                     left two places-Rule      1)

        Then                                 - - 7.5 x 10.'
                                           7500
                                           -
                                            loo      1 x 102
                                                  = 7.5(103 x 10-3          (1/102= 10-2)
                                                  = 7.5 X 10'      (Rule 5 )
                                                  = 75      (Rule 3)         Ans.




            Express      4000 = 4 x 103       (Move                point left three places-Rule         1)
                         2000 = 2 x 10.'      (Move                           three places-Rule     1)
                                      I
                         4 0 0-_'
                         2000   4F     -
                                  x $ -@                 Ans.
                                      I

       Note that any factor divided            cancels out to 1. That is, lO'/lO' = lO'-'         = 10" = 1.



       1000 x 0.008
2e15   0.002 x 500
           Express       loo0 = 1 x 103       (Move                point left three places-Rule 1)
                        0.008 = 8 x 10-3       (Move                            three places-Rule 2)
                        0.002 = 2 x lOP3       (Move                point right three places-Rule            2)
                          500 = 5 x 102       (Move decimal point left two places-Rule             1)

                                           loo0 x 0.008 -
                                                        - (1 x 103)(S x W3)
       Then                                0.002 x 500    (2 x 1 0 3 5 x 103
                                                           -
                                                           - 1 X 8 X 103X lO-.'
                                                                2 x 5 x lo-3 x 102

                                                           -         loo1      (Rule 5 )
                                                                10 x 10-
                                                                8x1
                                                           = 7 (Rule 5 )
                                                                 10
                                                           =8           Ans.
24                       ELECTRICAL STANDARDS AND CONVENTIONS                                              [CHAP. 2


                1
2*16   4 x 100000 x 0.00005
           Express            4=4
                        100000 = 1 x 10'       (Move decimal             left five places-Rule   1)
                       0.00005 = 5 x lO-'        (Move decimal point right five places-Rule           2)
                                      1           -          1
       Then
                             4 x 100OOO x 0.00005 - 4(1 x 105)(5 x 1OP5)



                                                      -       1
                                                                         (Rule 5 )
                                                          20 x 106
                                                      -      1
                                                                           (Rule 1)
                                                          2xlOx1
                                                      - -lop'
                                                            (Rule 6, 1/10 = lop')
                                                           2
                                                      = 0.5 X 10-'
                                                      = 0.05      (Rule 4)           Ans.



2.17   We might read 220V on a certain type of voltmeter, but a precision instrument might show
       that voltage to be 220.4V, and a series of precise measurements might show the voltage to
       be 220.47 V. How many                      does each measurement have?
                                              220 V, three significant
                                            220.4 V, four significant
                                           220.47 V, five significant
            If the accuracy of measurement required is five places, then the instrument must measure to at
       least five significant


     In Problems 2.18-2.20, perform the indicated operations. Round off the figures in the results,
if necessary, and express answers to three significant      as a number from 1 through 10 and the
proper power of 10.


       0.256 x 338 x 10-9
2.18
             865 OOO
           Express                                0.256 = 2.56 X 10-'
                                                    338 = 3.38 X 102
                                                865000 = 8.65 X 10'
                           0.256 x 338 x 10-9 - (2.56 x 10-')(3.38 x 102)(10-4
       Then                      865 OOO                  8.65 x 105
CHAP. 23                    ELECTRICAL STANDARDS AND CONVENTIONS                                                 25


        2800 X 75.61
2019 0.0009005 X 0.0834
            Express                                   2800 = 2.8 X 103
                                                     75.61 = 7.561 X 10'
                                                0.0009005  = 9.005 x 10-~
                                                    0.0834 = 8.34 X 1W2

       Then
                                  2800 x 75.61    - (2.8 x 103(7.561 x 10')
                               O.OOO9005 x 0.0834 - (9.005 x 10-')(8.34 x 10-2)
                                                     - 2.8 x 7.561 103 x 10' - 21.17 104
                                                        9.005 x 8.34 10-4 x 10-2   75.10F
                                                     = 0.2819 X 10"
                                                     = 2.819 X 10-' X 10"
                                                     = 2.82 x 109         Ans.

                     1
2.20
       6.28 x 400 x 106 x 25 x 10-"

       Then
                                        1                    -                     1
                      6.28(4 x 102)(106)(2.5 x 10')(10-'2)     (6.28 x 4 x 2.5)(102 x 10" x 10' x 10-'2)
                                                             -       1      = 0.0159 X 103 = 1.59 X 10-2 X 103
                                                               62.80 x 10-3
                                                             = 1.59 X 10' = 15.9        Ans.




                                        Supplementary Problems
Express each of the following in the units              (use powers of 10 where

2.21   5 600 OOO R in megohms           Ans. 5.6 MR

2.22   2.2 MR in ohms          Ans. 2 200 OOO R or 2.2 x 10"R

2.23   0.330 MR in kilohms         Ans. 330 kR

2.24   0.013 kV in volts       Ans.    13 V

2.25   0.24 A in milliamperes         Ans. 240 mA

2.26   20 0O0 p A in amperes          Ans. 0.02 A

2.27   0.25 mA in microamperes           Ans. 250 p A

2.28   10 OOO V in kilovolts      Ans. 10 kV

2.29   4 OOO OOO W in megawatts (MW)           Ans. 4 MW

2.30   5 OOO kW in megawatts          Ans. 5 MW

2.31   200 ns in seconds        Ans. O.OO0 0oO 2 s or 2 x lO-'s
26                           ELECTRICAL STANDARDS AND CONVENTIONS                                 [CHAP. 2


Express each of the following         decimal numbers.

2.32   0.006 x 102         Ans. 0.6

2.33   43.41 x 100         Ans. 4341

2.34   0.0053 x 103        Ans. 5.3

2.35   400/103      Ans. 0.4

2.36   3 x 10-*      Ans. 0.03

2.37   100OOO x 10-4         Ans. 10

2.38   (0.5 x 0.03)/10-'       Ans. 1.5

2.39   (3.1 x 10-')(2 x 0-3           Ans. 0.0062

2.40   600/(5 x 102)        Ans. 1.2

Express each of the following in scientific notation, that is, as a number from 1 to 10 and the proper power
of 10.

2.41   120000       Ans. 1.2 x 10'

2.42   0.00645       Ans. 6.45 X 10-3

2.43   2300000         Ans. 2.3 X 10"

2.44   550 x 10-4       Ans. 5.5 x 10-2

2.45   0.0008 x 103        Ans. 8 X 10-'

Perform the indicated operations. Express the answer in scientific notation.

       2000                 Ans. 8 x 10-'
2A6     0.02 x 10

                  1
2.47   (4 x l0')(0.5 x 10-7       Ans. 5




2*49 2 x 10         Ans. 2 x 10-2




Round off the following numbers to three significant digits.

2.51   3.824      Ans. 3.82

2.52   3.825      Ans. 3.82
CHAP. 21                      ELECTRICAL                                                          27


2.53   3.826       Ans. 3.83

2.54   205.6       Ans. 206

2.55   0.004 152      Ans. 0.004 15

2.56   20%     Ans. 2100

2.57   7.803 x 102        Ans.        X   102

2.58   0.001 205 x 10-3          Ans. 0.00120 x 10-3

Perform the indicated                  Round off the         to three-place




                          Graphical Symbols and Electrical Diagrams

SCHEMATIC DIAGRAM
    A simple electric         is shown in pictorial   in Fig. 2-la. The                is drawn in
schematic form in Fig. 2-lb. The schematic diagram is a                 to draw an electric circuit,
and                    are represented in this way. In            to the connecting           three
components are shown symbolically in Fig. 2-lb: the dry cell,                    lamp. Note
positive (+) and the negative (-) markings in both                                       of the dry



                                                                              A




               Dry cell                         Lamp

                           (a) Pictorial diagram                    (b) Schematic diagram
                                           Fig. 2-1 A simple lamp
28                         ELECTRICAL                                                                  [CHAP. 2


cell. The                           represent the                                   in a simplified manner. A
schematic diagram then is one that shows by means of graphic
the            of the         parts of a circuit.
     The                           for the commonly used electrical                                           are
given in Fig. 2-2.
     Examples of common letter              used to denote                                          are given in
Table 2-7.
                        Table 2 7 Examples of Letter Symbols for Circuit Components

                                  Part                  Letter                Example

                      Resistor                              R         R3,   120kn
                      Capacitor                             C         Cs20pF
                      Inductor                              L         L , , 25 mH
                      Rectifier (metallic                   CR        CR*
                      Transformer                           T         TZ
                      Transistor                            Q         Qs,2N482 Detector
                      Tube                                  V         V3, 6AU6 1st IF amp
                      Jack                                  J         J,


    A schematic diagram of a two-transistor                           is shown in Fig. 2-3. The
diagram in Fig. 2-3 shows                     in the order from         to right in which they are used to
convert radio                               With the       of the              is then possible to trace the
operation of the                       incoming signal at the antenna to the output at the
phones.                      in a schematic diagram are identified by letter symbols such as R for
resistors, C for capacitors, L for inductors,        Q for transistors          2-7). Symbols are further
identified by letter-number                       as RI, R2,and R3 (sometimes                as R1,R2, R3)
to prevent             when more than            of component is used (Fig. 2-3). The letters B, C, and E
near the transistor                       base, collector,               of the transistors (Fig. 2-3). The
numerical          of components are often indicated             in the                            as 220 k l l
for R , and 0.022 p F for C2(Fig. 2-3). When these             are not given in this            are stated in
the parts list              which accompany
     A schematic diagram does        show the                       of the
connect the


ONE-LINE DIAGRAM
     A one-line,   single-line, diagram shows                  parts of a circuit by means of single
lines                                       The single lines represent the two or more conductors
that are connected           the components in the                  The one-line diagram shows the
necessary                       about the             of a circuit      does not give the
information that is found in a schematic diagram. One-line diagrams are generally used to show
complex                                  individual conductors to the

 Example 2.13 Draw a one-line diagram showing
 circuits of an electric
      See Fig. 2-4. The single line                              three lines in this                    The power
 path       be traced                      aluminum cable                      (ACSR) downward          a grounded
 lightning arrester, through a disconnect                                            a step-down
 continues                         oil circuit                                          lightning arrester, and
through       ACSR line.
CHAP. 21               ELECTRICAL STANDARDS AND CONVENTIONS                                       29



Ammeter                       Generator (dc)                      Switch                    d-

Antenna                       Ground                              Semiconductor diode




Appliance                      Headphones                         Transformer (general)
                                                                                             U
Arc lamp                       Inductor (air-core)                Transformer (iron-core)
                                                                                             Ill[
Battery cell                   Inductor (iron-core)
                                                                  Transistor (NPN)          *-qQ

Battery                        Inductor (tapped)
                                                                  Transistor (PNP)          -qQ

Bell                           Lamp                               Vacuum-tube cathode
                                                                                             1
Buzzer                         Lightning arrestor                 Vacuum-tube filament
                                                                                             n
Capacitor (fixed)             Loudspeaker                         Vacuum-tube grid          --I-




Capacitor (variable)          Microphone                          Vacuum-tube plate
                                                                                             _L
Circuit breaker                Motor (ac)
                                                                  Voltmeter                 -=a-
Crystal                       Motor (dc)                          Wattmeter



Fuse                          Resistor (fixed)                    Wires (connected)
                                                                                             +
Galvanometer                  Resistor (variable)                 Wires (unconnected)
                                                                                             +
Generator (ac)                Rheostat                            Zener diode
                                                                                            +
                              Fig. 2 2 Standard circuit symbols
                                                         ~   Double
                                                         b




Fig. 2-3 Schematic diagram of a two-transistor radio




         ACSR
                             ~~




                   c
                             Lightning arresters



                             Disconnect



                             Three-fused



                             Three-phase



                             Disconnect



                             OCB (oil circuit breaker)



                             Disconnect



                             Lightning arresters




                  ACSR

    Fig. 2-4 A one-line diagram of a substation
CHAP. 21                      ELECTRICAL STANDARDS             CONVENTIONS                            31


BLOCK DIAGRAM
    The block diagram is used to show the                                                              or
stages in the            of a circuit. It shows in block form the           of a signal through a circuit
from        to output (Fig. 2-5). The                     in the       of squares                that are
joined by single lines.                placed at the                 of the                            of
the signal path                output as the diagram is read            to right. As a general
necessary               to describe                              is placed within the block. On some
block                           as antennas and loudspeakers are shown by standard
of by blocks (Fig. 2-5).


                                                               h


              Mixer         4 1st IF amp      II) 2nd IF amp       Detector   4Audio output


         EIlOscillator

                         Fig. 2 5 Block diagram of a typical

     Because a block diagram shows                   of the                of a circuit           single
lines,     a type of functional one-line diagram. The block diagram gives no information about
specific components or wiring connections. Therefore, it is limited in use                give a simple
way of illustrating           features of a circuit.                    block diagrams
used by electricians,                        and engineers as a first step in designing and laying out
new equipment.
    To show how easy it to understand a circuit’s operation by means of a block diagram, look at
Fig. 2-5. The signal comes                                                                mixer circuit,
through the intermediate-frequency (IF) amplifier stages            detector stage, and finally to the
output stage                The             is in an                         so it is not         in the
main signal path.

WIRING DIAGRAM
     The wiring, or connection, diagram is used to show wiring connections in a simple,
follow way. They are very commonly used with home appliances and electrical
automobiles (Fig. 2-6). The         wiring diagram shows                of a circuit in a pictorial
manner.                     are identified by name. Such a diagram also often shows
location of the             within a given space. A color-coding        may be used to identify
certain                    2-6).

ELECTRICAL PLAN
    An integral     of any set of drawings for the construction of a building is the wiring plan or
layout.                                        contractors use floor-plan diagrams to locate
ponents of the building’s electrical              as receptacle                    lighting fixtures,
and other wiring devices. These                  wiring arrangements are represented by means of
symbols (Fig. 2-7). The living-room plan (Fig. 2-7) show
ments. In one                 a ceiling outlet                      door locations. Similarly, two
receptacle                        wall are switched
between               ceiling outlet is drawn with a medium-weight solid line,              that the
connection                      is to be concealed in the walls or ceiling above. The cross lines
 indicate the conductors in the conduit                If cross lines are omitted,               are
understood to be in the
     Starter safety
         switch                                  Battery

                                     I
                                                                         -

                 Green W/T
                                     I
                                     I




                                                     I
                                                                   --------       ,           Starter




                                     I
                                     I
                                     I
                                     I         $
                                     I           c
                                   a
                                   21
                                    I
                                               3
                                    I
                                                                                      coil



      Low-current

                      Fig. 2-6 Wiring                    of an automobile starting




                                                                                                          N




                                                                 Living room




                 -           Wiring concealed in
                             ceiling or wall.                                Three wires


                 -9          Duplex receptacle
                             outlet, ungrounded                    S2        Double-pole switch

                             Duplex receptacle
                             outlet, grounded                      S,          Three-way switch



Fig. 2-7   Floor plan of a
                             Special-purpose
                             connection, TV                       0          Ceiling lamp fixture

                                         fixtures, outlets, and switches. Standard                  symbols are
           shown.
CHAP. 21                     ELECTRICAL STANDARDS AND CONVENTIONS                                            33


                                              Solved Problems
2.63   Write the word or words which most correctly                    the following statements.
       ( a ) A picture                            parts of a circuit                                          a
                                   diagram.
       (6) On a schematic                           are represented
       ( c ) Schematic          are often drawn   the input the                  and the output
             on the
       ( d ) Examples of letter symbols to identify                on a schematic diagram are
                             for diodes,                 for capacitors, and                for
             inductors.
       (e) A single-line diagram is also called a               diagram.
        cf) Color                  on a                diagram.
       Ans. (a) pictorial; (b) symbols; ( c ) left, right; (d) CR, C, L; (e) one-line; cf) wiring or
       connection


2.64   In Fig. 2-3, identify




       (a) Variable capacitor                    (g) Conductors crossing but not connected
       ( b ) Fixed capacitors                    ( h ) Conductors electrically connected
       (c) Crystal rectifier ( C R ) diode        (i) Fixed resistors
       (d) PNP transistors                        (j) Variable iron-core inductor (antenna coil)
       (e) Jacks                                 (k) Battery
        cf) Single-pole single-throw switch       (I) Antenna


2.65   Using the circuit         in Fig. 2-2, draw a schematic                                  ac generator, a
       switch, an ammeter, a bell,     a buzzer.         the diagram carefully.
            See Fig. 2-8.




                            Fig. 2 8                                                 Fig. 2-9
34                          ELECTRICAL STANDARDS AND CONVENTIONS                                 [CHAP. 2


2.66   Identify        symbols for transformers shown in Fig. 2-9.
            1. Air-core transformer; 2. Iron-core transformer; 3. Iron-core variable transformer. The
       heavy lines between the coils represent an iron core. The iron core is simply a piece of iron around
       which the coils are wrapped. An arrow running through the coils of a                      means the
       transformer is variable.

2.67   Since                   is a path for current to flow through, a break in this path would stop
       current flow. Switches         simply ways to           this path or to control       flow of
       current. Some more symbols for                 are shown in Fig. 2-10. To remember these
       switches, think of the number of poles as       number of wires coming to either side of the
       switch. The                 be thought of as the number of on positions. Answer the
       following questions:
       (a)   The number of wires coming to     side of a double-pole switch is
       (b) The number of on positions a DPST switch has is
       ( c ) The number of on positions a DPDT switch has is
       ( a ) two;   (b) one; ( c ) two




                              Single-pole,                           Single-pole,
                              single-throw                           double-throw
                              switch (SPST)                          switch (SPDT)




                              Double-pole,                           Double-pole,
                              single-throw                           double-throw
                              switch (DPST)                          switch (DPDT)

                                                 Fig. 2-10



2.68   The ground symbol is often used in schematic diagrams. Some components            grounded to
       the                   of the            in which they are located.           automobiles, and
       TV sets are grounded in this               A frame or other ground must be a good conduc-
       tor.       ground (frame) is the         path for          back to the power source.
       circuit shown in Fig.  2-11, complete the         by putting in the ground symbols:
 CHAP. 21                 ELECTRICAL                                                                               35




              Battery


                        --I            Frame

                                Fig. 2 1 1                                       Fig. 2 1 2

            See Fig. 2-12. In                      flows from the plus terminal of the battery, through
        switch, to the     to ground,         to the                 of the battery.             the battery
        and the lamp are grounded to the frame, there



                                       Supplementary Problems
2.69   Write the words                                the following
       ( a ) The use of a                  diagram makes                   trace the function of a
                                to
       (b) Examples of letter             to identify                           diagram are                       for
             transformers,                      for resistors,                        for transistors.
       (d The                          symbol         to show that wires are electrically                      at that
             point.
       ( d ) The                          diagram is       often used to show
       (e) The                        diagram is         way to show the relationships of various parts of a
        (f) Floor-plan               are used with electrical                   systems.
       Ans. ( a ) input, output; ( b ) T,R, Q; (c) dot, connected; ( d ) one-line or single-line; (e) block; cf)
       wiring

2.70   Draw              diagram showing dc generator,                   fuse, an arc lamp,
       the diagram carefully.   Ans. See Fig. 2-13.




                                                         R
                                                     Fig. 2-13

2.71   A                    that changes               current to       current. Show a            for the

       Ans.
36                             ELECTRICAL STANDARDS AND CONVENTIONS                                                  [CHAP. 2


2.72   Match


                               If
                                                                                          ( a ) Voltmeter

                    1.
                                                     6.                   &               (b) Resistor
                                                                                          (c)   Cell
                   2. 4 1 1 1 -                                                           ( d ) Ammeter
                                                                                          (e) Battery


                   3.     +                          *- 4
                                                                                          cf) Rheostat
                                                                                          (g) Iron-core
                                                                                          (h) Variable

                   4.     -IF                        9.     T                             (i) Ground
                                                                                          (j) Air-core transformer
                                                                                          (k) Capacitor
                   5.                               1°.     1-                            ( 1 ) Lamp
                                                                                          (m) Variable

       Ans.    1. (j) 2. (e)    3. ( a ) 4. ( k ) 5 . (g)        6. (i)     7. (d) 8. (h) 9. U) 10. (c)

2.73   Place a ground                               is needed in the diagram of Fig. 2-14.               Ans. See Fig. 2-15.


  n                                                                           n
                                                                              1
  I                      Fig. 2-14                                                               Fig. 2-15


2.74   For the wire connections                                           each as “connection”




       Ans. (a) No connection; (b) connection; ( c ) connection; (d) no

2.75   A fuse is a safety device    operates as a switch to turn a circuit off when the current exceeds a
       specific value. A circuit                the same                      as a fuse, but unlike a fuse it
       can be reset. Show the symbols for a fuse and

       Ans.     Fuse:     Lll/tLI                Circuit breaker:             --  n
CHAP. 21                    ELECTRICAL STANDARDS AND CONVENTIONS                                          37


2.76   Match the name of each component with its respective symbol.

                1. Unconnected wire                             (a)     --      n

                2. Ground
                3. Lamp
                4. Voltmeter                                    (b)      - +a




                5. Zener diode
                6. PNP transistor
                7. Circuit breaker
                8. Variable capacitor
                9. Air-core transformer
               10. Connected wire




                                                                U)              +
       Am. 1. ( b ) 2. ( g ) 3. (m) 4. (e)         5. (j) 6. ( d ) 7. ( a ) 8. (c)    9. (h) 10. cf)

2.77   An elementary radio receiver consists of four major stages: an antenna, a tunable resonant circuit, a
       detector circuit, and headphones. Draw a block diagram of this elementary receiver.
       Ans. See Fig. 2-16.


                      Antenna       +          Tuned
                                               Circuit
                                                              I) Detector                 . Headphones


                                                            Fig. 2-16


2.78   Match each symbol                                    in architectural floor-plan

                          Symbol                                             Meaning
                     1.   sz                                    Special-purpose connection, dishwasher
                                                                Duplex receptacle outlet
                     2.   fh3L                                  Four wires
                                                                Range outlet
                                                                Three wires
                                                                Double-pole switch




       Ans. 1. (f) 2. (c)      3. ( d ) 4. ( a ) 5. ( b )
                                                                                   Chapter 3

                         Ohm’s Law and Power
THE ELECTRIC CIRCUIT
     A practical electric circuit has at least four parts: (1) a source of electromotive force, (2)
conductors, (3) a load, and (4) a means of control (Fig. 3-1). The emf is the battery, the conductors
are wires that connect the various parts of the circuit and conduct the current, the resistor is the
load, and the switch is the control device. The most                sources of emf are batteries and
generators. Conductors are wires                   low resistance to a current. The load resistor
represents a device that uses electric energy, such as a lamp,               radio, a motor.
trol devices might be switches, variable resistances, fuses, circuit breakers, or
                                                        Conductor (wire)
                                                                I




                                                    Control (switch)

                                                               Conductor (wire)
                                           Fig. 3-1 Closed circuit

    A complete or closed circuit (Fig. 3-1) is an unbroken path for current from the emf, through a
load,     back to the source. A circuit is called incomplete or open (Fig. 3-2a) if a break in the
circuit does not provide a complete path for current.



           “B




                         Switch open
                      (a) Open circuit                                     ( b ) Short circuit
                                       Fig. 3-2 Open and short circuits

    To protect a circuit, a fuse is placed         into the circuit    3-2b). A fuse will open the
circuit whenever a dangerously          current starts to flow. A fuse will permit currents smaller
than the fuse value to flow but will melt      therefore break or open the circuit if a larger current
flows. A dangerously           current will flow when a “short circuit” occurs. A short circuit
usually caused by an accidental connection between two points in a circuit
resistance (Fig. 3-2b).
    A ground              often used to show that a number of wires are connected to a common
point in a circuit. For example, in Fig. 3-3a, conductors are shown              a complete circuit,
while in Fig. 3-3b, the same circuit is shown with two ground            at G 1 and G2. Since the
ground                  that the two points are connected to a common                         the two
circuits (Fig. 3-3a and 3b) are exactly the same.

                                                      38
CHAP. 31                              OHM’S LAW AND POWER                                             39




                              Fig. 3-3 Closed          Q and b are the same


Example 3.1 Replace        ground symbols the return wire of the closed circuit (in Fig. 3-40).
   See Fig. 3-4b.




RESISTANCE
    Resistance is the               to current flow. To add resistance to a circuit,
components called resistors are used. A resistor is a device                        to current flow is a
known, specified value.               is measured in ohms         is represented by the            R in
equations. One ohm is defined as that                of resistance         will limit the current in a
conductor to one ampere             voltage applied to the              is one volt.
    Resistors      common components of many electrical                                        frequent
uses for resistors are to establish          value of circuit voltage, to limit current, and to provide
a load.

FIXED RESISTORS
    A fixed resistor is       that has a single value of resistance which remains
normal conditions. The         main types of fixed resistors                      and wire-wound
resistors.
Carbon-Cornposition Resistors
    The                       primarily graphite                        of solid carbon carefully made
to provide                          These                         are inexpensive
values that range from 0.1 R to 22 MR.
Wire-Wound Resistors
    The                         usually nickel-chromium wire wound on a ceramic          The entire
assembly is normally covered with a ceramic                or a special
values        1 R to 100 kR.
     The                   of a resistor may be                             or nominal value. The
limit of actual                      tolerance. Common tolerances of carbon-composition
are + 5 , 2 10, and 220 percent.                  a resistor having a rated         of 100 R and a
tolerance of f 10 percent may have                          of any value       90 and 110 R, that is,
1 0 0 less or more than                    of 100. Wire-wound resistors usually have a tolerance of
+ 5 percent.
40                                         OHM‘S LAW AND POWER                                           [CHAP. 3



     Resistors having high tolerances of +20 percent can still be used in many electric circuits. The
advantage of using a high-tolerance resistor in any circuit where it is permissible is that it is less
expensive than a low-tolerance resistor.
     The power rating of a resistor (sometimes called the “wattage” rating) indicates how much heat
a resistor can dissipate. or throw off, before being damaged. If more heat is generated than can be
dissipated, the resistor will be damaged. The power rating is specified in watts. Carbon-
composition resistors have wattage ratings which range from 1/16 to 2 W. while wire-wound
resistors have ratings from 3 W to hundreds of watts.
     The physical size of a resistor is no indication of its resistance. A tiny resistor can have a very
low or a very high resistance. The physical size, however, gives some indication of its power
rating. For a given value of resistance, the physical size of a resistor increases as the power rating
increases.


VARIABLE RESISTORS
    Variable resistors are used to vary or change the amount of resistance in a circuit. Variable
resistors are called potentiorneters or rheostats. Potentiometers generally consist of carbon-
composition resistance elements, while the resistance element in a rheostat is usually made of
resistance wire. In both devices. a sliding arm makes contact with the stationary resistance
element (Fig. 3-5).




Fig. 3-5    When the sliding arm of a variable resistor is moved. the resistance between the center terminal and end
            terminals changes.

    As the sliding arm rotates, its point of contact on the resistance element changes, thus changing
the resistance between the sliding arm terminal and the terminals of the stationary resistance (Fig.
3-5).
    Rheostats are often used to control very high currents such as those found in motor and lamp
loads (Fig. 3-6).




 Fig. 3-6    Use of rheostat to control current in           Fig. 3-7   Use of potentiometer to change voltage
             a lamp circuit

    Potentiometers can be used to vary the value of voltage applied to a circuit (Fig. 3-7). In this
circuit, the input voltage is applied across the terminals AC of the stationary resistance. By
varying the position of the sliding arm (terminal B), the voltage across terminals BC will
CHAP. 31                             OHM’S LAW AND POWER                                               41


change. As the sliding arm                   to terminal C, the voltage of the output circuit
decreases. As the sliding                      to terminal A, the output voltage of the circuit
increases. Potentiometers as control          are found in              radios, television sets, and
electrical                        of a variable resistor is the resistance of the entire stationary
resistance element    one end           to the other.


OHM’S LAW
   Ohm’s law defines the relationship                current, voltage,                    There are three
ways to express Ohm’s law mathematically.
    1. The current in a circuit is equal to the voltage                  to the circuit           by the
        resistance of the circuit:
                                                      I = -V                                        (3-0
                                                           R
    2. The resistance of a circuit is equal to the voltage               to the circuit           by the
       current in the circuit:
                                                R = -V                                              (3-2)
                                                     I
    3. The applied            to a circuit is equal to the product of the current and the resistance of
       the circuit:
                                                  V = l x R = I R                                   (3-3)
        where    I = current, A
                 R = resistance,
                 V = voltage, V
     If you know any two of the quantities V, I, and R, you                   the third.
    The Ohm’s law equations can be                                              by using   Ohm’s law
circle       3-8a). To find the equation for V, I, or R when                      are known, cover the
unknown                           finger.




                                     Q63v
                                        I =   -

                                              R
                                                                             & V = IR


                      (4                                       (b)
                                     Fig. 3-8 The Ohm’s law circle


     The other two quantities in the circle will indicate how the covered quantity may be
3-8 b ) .

Example 3.2 Find I when V = 120V and R = 3OR. Use
Eq. (3-1) to find the unknown I.

                  I = VR
                    = -120
                        -    -4A      Ans.
                       30
42                                         OHM’S LAW AND POWER                                       [CHAP. 3


Example 3.3 Find R when V = 220V and I = 11 A. Use
Eq. (3-2) to find the  R.
                   R = -V
                        I
                      ---220
                         =     20a           Ans.
                         11

Example 3.4    Find V when I = 3.5 A and R = 2 0 a . Use Eq. (3-3) to find the unknown V.
                  V = IR = 3.5(20) = 70V             Ans.




Example 3.5 An electric light bulb                  1.0A when operating on a 120-V dc circuit.            the
resistance of the
     The first step in solving a circuit              to sketch a schematic diagram of the circuit    labeling
each of the parts and                                       3-9).




                                     -
                                                       Fig. 3-9


     Since I and V are known, we use Eq. (3-2) to solve for R.

                                                      1 - 120a
                                         R = - I= - -120               Ans.



ELECTRIC POWER
   The electric power P used in any part of a circuit is equal to the current I in that part
multiplied by          V across that part of the circuit. Its formula is
                                                      P = VI                                            (3-4)
where     P = power, W
          V = voltage, V
          I = current, A
Other forms for P = VI are I = P/V and V = P/I.
    If we know the current I and the resistance R but not the voltage V, we can find the power P
by using Ohm’s law for voltage, so that substituting
                                                    V = IR                                              (3-3)
into (3-4) we have
                                               P = IR x I = 12R                                          (3-5)
CHAP. 31                                OHM’S LAW AND POWER                                                          43


    In the same manner, if we      the voltage V and the resistance R but not the current I, we
can find the power P by using Ohm’s law for current, so that substituting



into (3-4) we have
                                               p = v -v- = -v2                                                    (3-6)
                                                        R      R
If you        any two of the quantities, you can calculate the third.

Example 3.6 The current through a 1 0 0 4 resistor to be used in a circuit is 0.20 A. Find the power rating of
the resistor.
     Since I and R are known,       (3-5)to find P.
                            P = 12R = (0.20)2(100)= 0.04(100) = 4 w               Ans.
     To prevent a resistor              out, the power rating of any                     in a circuit         be twice
the wattage           by the                          the resistor used in this                          a power rating
of 8 W.

Example 3.7 How many kilowatts of power are delivered to a circuit by a 240-V generator                            20 A
to the
     Since V and I are           (3-4) to find P.
                               P = VI = 240(20) = 4800W = 4.8kW               Ans.


Example 3.8 If the voltage across a 25 0004 resistor        500 V, what is the                          in the resistor?
 Since R and V are known,      Eq. (3-6) to find P.




HORSEPOWER
    A motor is a device which converts electric power into the mechanical          of a rotating
shaft. The electric power         to a motor              in watts or kilowatts; the mechanical
power               a motor             in horsepower (hp).        horsepower is equivalent to
746 W of electric power. The metric system will be       to express horsepower in watts. For
most                               accurate to consider 1 hp = 750 W or 1 hp = 3/4kW. To
convert between horsepower and                     the following equations.

                                                                                                                  (3-7)

                                              750 x hp    3
                                      kW =               =axhp                                                    (3-8)
                                                 loo0

Example 3.9 Change the                    of measurement: (a) 7.5 kW to                          (b) 3/4 hp to
( a ) Use    (3-7):
                                        4
                                   hp = - x kW = $(7.5) = 10           Ans.
                                        3
44                                      OHM’S LAW AND POWER                                      [CHAP. 3


( b ) Use Eq. (3-8):
                                             3 x hp = - - = -
                                      kW =            33      = 0.563
                                                      4 4 16
                                     1 k W = 1OOOW
                                        W = lOOO(0.563) = 563      Ans.


ELECTRIC ENERGY
     Energy              are essentially the same and are expressed in identical            Power is
different, however, because it is the time rate of doing                the watt unit for power, one
watt used          one second equals the work of one joule, or one watt is one joule per second. The
joule (J) is a basic practical unit of work or energy (see Table 2-3).
     The kilowatthour               a unit                  for large amounts of electric energy
work. The amount of kilowatthours is calculated as the product of the power in kilowatts (kW)
and the time in hours (h) during           the power
                                              kWh = kW x h                                          (3-9)

Example 3.10 How much                          in 2 h by a generator          10 kW?
   Write Eq. (3-9)and substitute given values.
                                              kWh = kW x h = lO(2) = 20
                                  Energy          = 20 kWh      Ans.



                                           Solved Problems
3.1    Write the word or words which             correctly complete the following statements.
               The four basic parts of a complete circuit are the                      9                9

                                , and
               A fixed resistor is one which has a                    resistance value.
               In a carbon-film resistor, a film of                  is deposited upon a ceramic core.
               The                    rating of a resistor indicates how much current the resistor can
               conduct before becoming
               The physical size of a resistor has no relationship to its
               The two most                types of variable resistors are called                   and

               The rated resistance of a variable resistor is the resistance between its
               terminals.
                                 are used as current-limiting devices.
               If the voltage          to a circuit                 the resistance remains the same, the
               current in the circuit will increase to                  the original
               If the current through a conductor is doubled         the resistance is constant, the power
               consumed by the conductor will increase to                       times the original amount.
        Ans.     (a) voltage source, conductors,           device         cf) rheostats,
                 ( b ) specific or single                                 ( 8 ) end
                 ( c ) carbon                                             (h) Rheostats
                 (d) wattage or power, overheated or damaged               (i) twice (I = V/R)
                 (e) resistance                                            (j) four (P = I’R)
CHAP. 31                                 OHM'S LAW AND POWER                                        45


3.2   In Fig. 3-10, the resistor limits the current in the circuit to 5 A when connected to a 10-V
      battery. Find its resistance.



                                     v = 10v- +I             I = 5 A




                                             -T         Fig. 3-10


              Since I and V are known, solve for R by Ohm's

                                               R = -V                                           (3-2)
                                                        r
                                                   = -1°-
                                                       -      2fl      Ans.
                                                        5


3.3   Figure 3-1 1 shows a doorbell circuit. The bell has a resistance of 8 IR and requires a 1.5 A
      current to operate. Find the voltage required to ring the bell.
              Since R and I are known, solve for V by Ohm's
                                             V = IR                                             (3-3)
                                               = 1.5(8) = 12V            Ans.



     +
                       +                                                        +
       A
                     r = 1.5 A                                                  r=?
  v=?=    w
                                                R = 8 Q              V = 115V            R = 360 $2
      -




3.4   What current will flow through a lamp when it has a resistance of 360 Cl and is connected to an
      ordinary house voltage of 115 V as shown in Fig. 3-12?
              Since R and V are given, calculate I by Ohm's law.

                                            I = -V                                              (3- 1 )
                                                 R
                                              = -'15=       0.319A       Ans.
                                                  360
      Values generally will be computed to three significant


3.5   Find the current drawn by a 60-W incandescent lamp rated for 120-V operation. Also find
      the current drawn by a 150-W, 120-V lamp and a 300-W,120-V lamp. As the wattage
      increases, what happens to the current?
              P and V are known and we        to find 1. Solving for I in Eq. ( 3 4 ,
                                                                D
46                                      OHM’S LAW A N D POWER                                           [CHAP. 3


      For the 60-W, 120-V lamp:
                                                 60
                                             I = -= 0.5A               Ans.
                                                 120
      For the 150-W, 120-V lamp:

                                            I = -150
                                                  =       1.25         Ans.
                                                 120
      For the 3 W W , 120-V lamp:
                                                 300
                                             I = -= 2.5A               Ans.
                                                 1 20
      We see that if V remains                  the greater             of P, the            will be the value of
      I. That is to say, higher wattages         higher currents for the same


3.6   Find the power consumed by a fixed 2 5 4 resistor for each of the following currents: 3A,
      6 A , and M A . What effect does a change in current have on the amount of power
      dissipated by a fixed resistor?
           I and R are               we wish to find P.
                                                       P = 12R                                               (3-5)
      at                               3 A: P = 32(25) = 225                 Ans.
                                       6 A : P = 6*(25) = 9OOW               Ans.
                                     1.5 A: P = (1.5)2(25) = 56.2 W             Ans.
      If the current is          to 6 A from 3 A , the         will increase by 2*, or 4, so 9ooW =
      4 X 225 W. If the current is halved to 1.5 A from 3 A, the         will decrease by (1/2)2, or
      so 56.2 W = 1/4 X 225 W. We see        if R does not change,         will change
      square of the       in current.


3.7   The efficiency of a motor is calculated by dividing its output by its input. The output is
      measured in horsepower, while the input is measured in watts or kilowatts. Before the
      efficiency can be calculated, the output and the input must be expressed in the same units of
      measurement. Find the efficiency of a motor which receives 4 kW and delivers 4 hp.
      Step 1. Express all measurements in the
                                                Input = 4 k W
                                                        3
                                               Output = 4 x hp = 4 4 = 3kW                                   (3-8)

      Step 2. Find the efficiency by dividing output by input.
                                                          output
                                             Efficiency = -- - -  kW - 0.75
                                                           input 4kW
              Efficiency is                  in any              To change               efficiency into a percent
              efficiency, move the                                                     a percent sign (%).
                                             Efficiency = 0.75 = 75%            Ans.


3.8   The motor in a washing machine uses 1200 W. How much energy in kilowatthours is used
      in a week by a laundromat with eight washers if they are all use 10 hours per day (h/day)
      for a 6-day week?
           Change 1200W to 1.2kW.
CHAP. 31                                   OHM’S LAW A N D POWER                                                        47


       For one motor:                                    10 h
                                       Energy = 1.2 kW x -x 6-              = 72 kWh
                                                                &Y
       For eight motors:                         = 8 x 72kWh = 576kWh               Ans.


3.9    A radio receiver draws 0.9 A at 110 V. If the set is                   3 h/day, how much                   does it
       consume in 7 days?
             Find the power.
                                         P = VI = 1lO(0.9) = 99 W = 0.099 kW
       Then find the
                                                    3h
                                                         *
                                Energy = 0.099 kW x - x 7-             = 2.08 kWh            Ans.



3.10   Electric utility companies establish their rates at a given            of cents per
       hour. Rates for electric energy in the United States depend          the method by which the
       electricity is generated, the type and                of the transmission           distribution
       systems, the maintenance cost, and many other factors. By knowing the amount of energy
       you use (from the meter                the cost per               of energy in your area, you
       can calculate your              electric bill.
           One residence used 820 kWh of electric energy in one                If the utility rate is 6
       cents per kilowatthour, what was the owner’s electrical bill for the month?
             A convenient            for calculating            cost is:
                             Total cost = kWh x unit cost
                                        = 820 x 6cents = 4920cents = $49.20*                    Ans.

       *Here are using an average unit cost. Most utility rates are stepped according            of kilowatthour usage plus
       minimum charges, not to mention full adjustment charges and taxes.




                                      Supplementary Problems
3.11   Write the word or words which most
       ( a ) Common sources of energy used in electric                                           and
       (b) In                                is treated as a                            load.
       (c) The resistance         of a wire-wound resistor           made of                          wire.
       (d) The amount     which the actual            of a              may vary             its rated      is called its

       (e) A large             of a given type         higher                     rating        a smaller          of the
           same
       (f) A common                 defect is an open or burned-out                                         by excessive
                              through
       ( 8 ) The amount of resistance can be                by a                                    resistor.
       (h) A variable              used to change the value of voltage                            to a             is the

       (i)   If the resistance of a           is doubled         the current remains                                  will
             increase to                     its original value.
       (j) If a toaster rated at loo0 W is               for 30 min, the energy         is                      kWh.
48                                              OHM’S LAW AND POWER                                            [CHAP. 3


       Ans. (a) batteries, generators; ( b ) resistive; ( c )nickel-chromium; ( d ) tolerance; (e) wattage or
       power; (f) current; (8) variable; (h) potentiometer; (i) twice (V = IR); (j) 0.5

3.12   Use Ohm’s law to fill in the

                            V               I            R

                            ?          2A               3R
                           120v        ?             2400 fi
                           120V       24A               ?
                            ?          8 mA             5 kR
                           6ov         ?         ’     12kR
                           ll0V        2 mA      I      ?
                            ?          2.5 A            6.4 R
                                                 I
                          2400 V        ?        I      IMR


3.13   A circuit           of a 6-V battery, a switch,          a lamp. When the                        2 A flows in the
       circuit.           the resistance of the lamp?           Ans. 3 R

3.14   Suppose          the lamp in Prob. 3.13 with      one, requiring                        6 V across it
       only 0.04 A. What the resistance of the new lamp?    Ans. 150 R

3.15   A voltage of 20V is measured across a 200-R resistor.                               current flowing through
       resistor?   Ans. 0.10 A or 100 mA

3.16   If the         of the air in an automobile                 plug is 2500 R, what                   to force 0.20 A
       through it?    Ans. 500V

3.17   The           of a television            has a resistance of 90R. What                           to produce
       tube’s               of 0.3 A?           Ans. 27 V

3.18   A 110-V line is protected            a 15-A fuse. Will the fuse “carry” a 6-R load?          Ans. No

3.19   A sensitive dc meter          9 mA from a line when the               is 108 V. What is the               of the
       meter?     Ans. 12 kR

3.20   An automobile                                  10.8 A of current flowing when the headlights are lit. If the
       current is drawn             12-V storage battery, what is the           of the               Ans. 1.11 R

3.21   A 160-R telegraph relay coil operates on a voltage of 6.4V. Find the current drawn by the
       relay.  Ans. 0.04A

3.22   What is the power           by a soldering                3 A at 110 V?     Ans. 330 W

3.23   A 12-V battery is connected          a lamp that has a 10-R resistance.           much power is delivered to the
       load?    Ans. 14.4 W

3.24   An electric              35.5 A at 118 V. Find the wattage                  by the             Ans. 4190 W

3.25   A 12-R resistor in a power                       carries 0.5 A. How many watts of power are dissipated        the
       resistor?              be the wattage                 of the resistor in order to dissipate                    as
       heat?     Ans. 3W, 6 W
CHAP. 31                                 OHM’S LAW AND POWER                                                    49


3.26   Find the power used by a lO-kfl resistor drawing 0.01 A.       Ans.    1W

3.27   Find the current through a 40-W lamp at 110 V.        Ans. 0.364 A

3.28   An electric dryer requires 360 W and draws 3.25 A. Find its operating voltage.         Ans.     111 V

3.29   Fill in the indicated quantity.

                                                                     Ans.




3.30   A motor delivers 2 hp and receives 1.8 kW of energy.     Find its efficiency (See Prob. 3.7).
       Ans. 83.3 percent

3.31   A generator receives 7 hp and supplies 20 A at 220 V. Find the power supplied by the generator and
       its efficiency.  Ans. 4400 W, 83.8 percent

3.32   A 4-hp lathe motor runs 8 h/day. Find the electric energy in kilowatthours used in a day.
       Ans. 24kWh

3.33   How much power and energy is drawn from a 110-V line by a 2 2 4 electric iron in 3 h?
       Ans. 550 W, 1.65 kWh

3.34   What does it cost to operate a 5.5-kW electric range for 3; h at 3.8 cents per kilowatthour?
       Ans. 73 cents

3.35   In a certain community, the average rate of electric energy is 4.5 cents per kilowatthour.    Find the cost
       of operating a 200-W stereo receiver in this community for 12 h.        Ans. 1 1 cents
                                                                           Chapter 4
                   Direct-Current                                       Circuits
VOLTAGE, CURRENT, AND RESISTAIYCE IN SERIES CIRCUITS
    A series circuit is a circuit in which there is only one      for current to flow along. In the
circuit (Fig. 4-1), the current I is            in all parts of the                       that the current
flowing through R I is             as the current through R2,is the        as the current through R3, and
is            as the current supplied by the battery.



                                                     --+
                                                        I
                               '     V

                                         -T+ l l     I
                                                    t--


                                                      R3
                                         Fig. 4-1    A series circuit


    When resistances are cannected in series (Fig. 4-1), the tot21 resistance in the           is equal to
the sum of the resistances of all the parts of the
                                           RT = RI + R2 + R3                                         (4-1)
where                RT = total
         R I , R2,and R3 = resistances in series, Ir'z

Example 4.1 Aseries circuit has a 50-0, a 75-s1, and 8 100-0 resistor in series (Fig. 4-2). Find the total
resistance of the circuit.




                                                     R3
                                                    Fig. 4-2


   Use Eq.(4-1) and add the values of the three resistors in series.
                         RT = R I + Rz + R , = 5 0 + 75 + 100 = 225n        Ans.

    The        voltage across -ss series             is equal to the sum of the              across each
resistance of the            4-3), or
                                           t'T   = v1     + v*+ v3                                  (4-2)

                                                      50
CHAP. 41                          DIRECT-CURRENT SERIES CIRCUITS


where     VT = total voltage, V
          V1 = voltage across resistance R1,V
          V2 = voltage across resistance R2, V
        . V3 = voltage across resistance R3, V
    Although Eqs. (4-1) and (4-2) were applied to circuits containing                   three resistances, they
are applicable to any number of resistances n ; that is,
                                     RT = RI + R2 + R3 + . * * + R,                                     (4-14
                                      VT = vl + V2-k v3+ " *        + vn                                 (4-2a)
    Ohm's law may be applied to an entire series circuit               to the individual parts of the
circuit.                  on a particular part of a circuit, the voltage across that part is    to the
current in that part multiplied   the resistance of that part. For the circuit shown in Fig. 4-3,
                                                  v, = IR,




               r-v'-l                                             rV= 6 v
                                                                    1         1



                                                         VT = ?


                                                                        R3


                                                                  I
                                                                  v3 = 54 V I
                       Fig. 4-3                                              Fig. 4-4


Example 4.2 A series                6 V across R I , 30 V across R2,and 54 V across R, (Fig. 4-4). What is the
total voltage across the circuit?
     Write      (4-2) and     the voltage across each of the
                            V~=Vi+V2+V3=6+30+54=9oV                           Ans.

    To find the total voltage across a series circuit, multiply the current by the total resistance, o r
                                                 VT = IRT                                                 (4-3)
where    VT = total voltage, V
          I = current, A
         RT = total resistance, s1

Remember that in a series circuit the same current flows in every part of the circuit.             Do not add
the currents in each part of the circuit to obtain I in the Eq. (4-3).

Example 4.3 A resistor of 45 and bell of 60 are                         in series        4-5). What          is
required across this combination to produce current of 0.3 A?
Step 1. Find the current I. The value of the current is the same in each part of a
                                                I = 0.3A      (Given)
52                                 DIRECT-CURRENT SERIES CIRCUITS                                      [CHAP. 4


Step 2. Find the total              RT. Add the two
                                               RT = R1 + R2
                                                  = 45 + 60 = 105R

Step 3. Find the total            VT. Use Ohm’s law.
                                           VT = IRT
                                              = 0.3(105) = 31.5V            Ans.



                     R, = 4 5 0



  VT = ?                                                     VT = 95
                                                                                       20 n


                                                                                                         6J

                                                                                I              I
                                                                                L@J
                     R2 = 6011
                  Fig. 4-5                                                          Fig. 4-6

Example 4.4 A 95-V battery is                    in series         three resistors: 20Q, 50R, and 120R (Fig.
    Find
4-6).             across each resistor.
Step 1. Find the total              RT.
                                              RT = R , + Rz + R3
                                                 - 20 + 50 + 120 = 190R
Step 2. Find the current I. Write Ohm’s law,


           from       we get



Step 3. Find the voltage across each part. In a series                 the current is the same in each part; that
        is, I = 0.5 A through
                                          VI = IR1 = 0.5(20) = 1OV            Ans.
                                          V2 = I& = OS(50) = 25 V             Ans.
                                          V3 = IR3 = 0.5(120) = 60 V           Ans.

    The voltages V,, Vz, and V3 found in Example 4.4 are known as voltage drops or IR
drops. Their effect is to reduce         voltage that is available to be applied across          of the
components in the                 s u m of the voltage drops in any series        is always equal to the
voltage that is applied to the circuit. This relationship is               in Eq. (4-2), where the
voltage VT is the same as the applied voltage, and can be verified in Example 4.4.
                                            VT = v1 + vz + v3
                                            95 = 10 + 25 + 60
                                           95V = 95V     Check
CHAP. 41                         DIRECT-CURRENT SERIES CIRCUITS                                                  53


POLARITY OF VOLTAGE DROPS
    When there is a voltage drop across a resistance, one end                              or more
negative than the other end. The polarity of the voltage drop is determined by the direction of
conventional current from a positive to a more                     Current direction is through R ,
from        A to B (Fig. 4-7). Therefore the end of R I connected to point A has a more
potential than point B. We say that the voltage across R , is such that point A is
than point B. Similarly, the voltage of point C is         with respect to point D. Another way
to look at polarity between any two points     that the one nearer to the positive           of the
voltage source is more positive; also, the point nearer to the negative            of the applied
voltage                     Therefore, point A is more          than B, while D is more
than C (Fig. 4-7).
                                                                                    n
                                    A
                                                                    A                              B
                                                                                +

                                                             95




    Fig. 4-7   Polarity of voltage drops                                            Fig. 4-8

Example 4.5 Refer                 4.4. Ground        negative terminal of the 95-V battery      4-6). Mark the
polarity of voltage      in the               4-8), and find the voltage         at points A, B, C, and D with
respect to ground.
     Trace the complete        in the direction                               terminal of the           A, A to
B, B to C, C to D, and D to the negative terminal. Mark plus (+) where                 enters each
minus (-) where current leaves                (Fig. 4-8).
     The                          in Example 4.4 are             (Fig. 4-8). Point A is
positive     of the          so voltage at A is
                                            v* = + 9 5 v          Ans.
There is a voltage      of 1OV across R I , so voltage at B is
                                        V B = 95 - 10 = +85 V            Ans.
There   a voltage drop of 25 V across R2, so voltage at C is
                                        Vc = 85 - 25 = +60V              Ans.
There   a voltage drop of 60 V across RJ, so voltage at D is
                                         VD = 60 - 60 = OV           Ans.
     Since we grounded            at D, V, must equal OV. If on tracing             voltage values, we find that V,
is not equal to OV, then we have made an error.


CONDUCTORS
   A conductor is a material                      free electrons. Three good                      conductors are
copper, silver,                                              are good conductors.              Copper is the most
54                                DIRECT-CURRENT SERIES CIRCUITS                                   [CHAP. 4


common material used in electrical              Second to copper is aluminum. Certain          are
also used as conductors under special conditions. For example, neon gas, mercury vapor, and
sodium vapor are used in various kinds of lamps.
    Conductors have very low resistance. A typical value for copper wire is less       1 fl for 10
feet (ft).              of the wire conductor is to         a source of applied voltage to a load
resistance with a minimum IR voltage drop in the conductor so that most of the applied voltage
can                 in the load resistance.

Example 4.6 The               of two 10-ft lengths of copper wire conductors about O.O5(n, which is very
small compared with the 1 5 0 4 resistance of the              filament in the              in Fig. 4-9a. The
conductors               minimum resistance       light the     with full brilliance. When the current of 0.8A
flows in the                                   IR voltage        across the conductors O.O4V, with 109.%V
across the bulb (Fig. 4-9b). Practically all the applied voltage of llOV is across the filament of the bulb.


                                                                                    J



                                                                  4
                                                                I = 0.8 A
           110 v                                        110 v




                                                                  R = 0.05 fl
                   Copper conductors                              IR = 0.04 V



                                                   Fig. 4-9



Wire Measurement
    Table 4-1 lists        wire sizes which correspond           American Wire Gauge
(AWG). The gauge numbers specify            of round wire in terms of its        and
cross-sectional                  following:
     1. As the gauge numbers increase            1 to 40, the                and circular
        decrease. Higher gauge numbers mean smaller wire sizes. Thus, No. 12 is a smaller wire
        than No. 4.
     2. The                                   gauge sizes.       example, No. 12 wire has
        twice the area of No. 15 wire.
     3. The higher the gauge number and the smaller the wire, the                          of the
        wire for any given length. Therefore,  loo0f t of wire, No. 12 has a resistance of 1.62 il
        while No. 4 has 0.253 s1.
    In typical house wiring applications, No. 14 or No. 12 wire is used for circuits where the
is not           to exceed 15 A. Hookup wire for radio receiver circuits with current in milliam-
peres is about No. 22 wire. For              0.5 to 1 A is the maximum current         wire can
without excessive heating.
    The                        of round wire is measured in circular mils (abbreviated cmil or
CM). A mil is one-thousandth of an inch (0.001 in). One circular mil is the                          of
a wire having a diameter of one mil. The number of circular mils in any circular            is equal to
the square of the           in mils, or
                                             cmil = CM = d 2                                            (4-4)
CHAP. 41                             DIRECT-CURRENT SERIES CIRCUITS                                                       55


                                                 Table 4-1 Copper Wire Table
                                      ~~    -~      ~~~~~




                                         Ohms per                                                            Ohms per
                                          loo0 ft                                                              loo0 ft
                                        of Copper                                                            of Copper
   Gauge      Diameter, d, Circular-mil    Wire                      Gauge     Diameter, d, Circular-mil        Wire
    No.           mil       Area, d 2    at 25°C"                      No.         m il      Area, d 2        at 25"C*

     1            289.3            83 690               0.1264         21         28.46         810.1             13.OS
     2            257.6            66 370               0.1593         22         25.35         642.4             16.46
     3            229.4            52 640               0.2009         23         22.57         509.5            20.76
     4            204.3            41 740               0.2533         24         20.10         404.0            26.17
     5            181.9            33 100               0.3 195        25         17.90         320.4            33.00
     6            162.0            26 250               0.4028         26         15.94         254.1            41.62
     7            144.3            20 820               0.5080         27         14.20         201.5            52.48
     8            128.5            16 510               0.6405         28         12.64         159.8            66.17
     9            114.4            13090                0.8077         29         11.26         126.7            83.44
    10            101.9            10 380               1.018          30         10.03         100.5           105.2
    11             90.74            8 234               1.284          31          8.928         79.70          132.7
    12             80.8 1           6 530               1.619          32          7.950         63.21          167.3
    13             71.96            5 178               2.042          33          7.OS0         50.13          21 1.0
    14             64.08            4 107               2.575.         34          6.305         39.75          266.0
    15             57.07            3 257               3.247          35          5.615         31.52          335.0
    16             50.82            2 583               4.094          36          5.000         25.00          423.0
    17             45.26            2 048               5.163          37          4.453         19.83          533.4
    18             40.30            1624                6.5 10         38          3.965         15.72          672.6
    19             35.89            1288                8.210          39          3.531         12.47          848.1
    20             31.96            1022               10.35           40          3.145          9.88         1069

*20 to 25°C or 68 to 77°F is considered                     temperature.




Example 4.7 Find the area in circular mils of a wire with a diameter of 0.004in.
   First, convert the diameter to mils: 0.004 in = 4 mil. Then    Eq.(4-4)to find the cross-sectional area.
                                           C M = d 2 = (4mil)' = 16             Ans.
    To prevent                                                    to each other or to some other metal m the
wires are insulated.                                                         high resistance, be tough,
becoming

Resistivity
    For                                       of a given length depends upon the                         of the material,
the length of the wire, and            cross-sectional area of the wire according to the
                                                             R = p xI
                                                                                                                    (4-5)

where R = resistance of the              Q
       I = length of the wire, ft
      A = cross-sectional       of the wire, CM
      p = specific resistance or resistivity, CM n/ft
56                                   DIRECT-CURRENT SERIES CIRCUITS                                    [CHAP. 4


     The factor p (Greek letter rho, pronounced “roe”) permits                       to be compared
for resistance according to their nature without        to different           areas. Higher
of p mean         resistance.
     Table 4-2 lists resistance values for different                 the standard wire size of a 1-ft
length       a cross-sectional area of 1 CM. Since            copper, gold,                      the
lowest         of resistivity, they are the best conductors. Tungsten and              a much
resistivity.
                                   Table 4-2   Properties of Conducting Materials*

                                                    p = Specific
                                                     Resistance,       Temperature
                                                      at 2OoC,          Coefficient,
                                    Material          CM * R/ft        R per OC, a

                                    Aluminum               17              0.004
                                    Carbon                  t            -0.0003
                                    Constantan            295          0 (average)
                                    Copper                 10.4            0.004
                                    Gold                   14              0.004
                                    Iron                   58              0.006
                                    Nichrome              676              0.0002
                                    Nickel                 52              0.005
                                    Silver                  9.8            0.004
                                    Tungsten               33.8            0.005

                                  *Listings approximate only, since precise values
                                   depend on exact composition of material.
                                  ?Carbon has about 2500 to 7500 times the resistance of
                                   copper. Graphite is a form of carbon.

Example 4.8 What the resistance of 500ft of No. 20 copper
     From Table 4-1, the                   area for No. 20 wire is                     From   4-2, p for copper
10.4 CM Q/ft. Use        (4-5) to find the           of 500 ft of wire.
                                       I
                                                           (fg2)
                                  R = ~2 = (10.4) x - = 5.09 R                     Ans.


Example 4.9 What is the resistance of 500ft of No. 23 copper
   From Table 4-1,
                                                     A = 509.5CM
From Table 4-2,
                                                  p = 10.4 CM * R/ft

Substituting      Eq. ( 4 - 9 ,

                                         ‘
                                  R = p ; l -- (10.4) x   (g)      = 10.2 R        Ans.


    Note from             4.8 and 4.9 that the increase in gauge   of 3 from No. 20 to No. 23 gives
one-half the circular area and doubles the resistance for the same

Temperature Coefficient
    The temperature coefficient of resistance, a (Greek letter alpha), indicates how much the
resistance changes for a change in temperature. A positive        for a means R increases with
CHAP. 41                            DIRECT-CURRENT SERIES CIRCUITS                                           57


temperature; a negative a means R decreases; and a zero a means R is constant, not            with
changes in temperature. Typical          of a are listed in Table 4-2.
    Although for a given             a may vary                  temperature, an increase in wire
resistance caused by a rise in temperature can                                    the equation
                                            R, = Ro + Ro(aAT)                                             (4-6)
where     R, = higher resistance at higher temperature, R
          Ro = resistance at 20”C,R
           a = temperature coefficient, R/T
         AT = temperature rise above 20”C, “C
    Note that carbon     a negative                               4-2). In         a is negative
for all semiconductors such as germanium                    A negative        for a means
resistance at higher                Therefore, the resistance of semiconductor
sistors can be                                           hot with        load current. Observe
also that constantan has a value of zero for a (Table 4-2). Thus           be used for precision
wire-wound resistors, which do not        resistance when the temperature increases.

Example 4.10 A tungsten wire has a 10-Rresistance at 20°C. Find its resistance at 120°C.
   From Table 4-2,


The temperature rise is
                                           AT = 120 - 20 = 100°C
Substituting into Eq. (4-6)*
                 R, = Ro + Ro(aAT) = 10 + lO(0.005 x 100) = 10 + 5 = 15R               Ans.
Because of the 100°C rise in temperature, the wire resistance is increased by 5 R, or 50 percent of its original
value of 10R.




TOTAL POWER IN A SERIES CIRCUIT
    We found that Ohm’s law could                    for total       in a series circuit as well as for
individual parts of the circuit.               the formula for power               for total values.
                                                   PT = IvT                                               (4-7)
where PT = total               W
       I = current, A
      VT = total                V
    The total power PTproduced by the source in a series circuit can also be expressed as the sum
of the individual           in each part of the circuit.


where    PT = total             W
         PI = power            in first part, W
         P2 = power            in second part, W
         P3 = power            in third part, W
         P, = power            in nth part, W
58                                    DIRECT-CURRENT SERIES                                             [CHAP. 4




             I = v T = v T = - -6o               -4A                                         +
                                                                                             I
                   RT     R I + R2     5 + 10                                   +
                                                                                    .c
                                                                                -
                  PI = 12Rl = 42(5) = 8 0 W
                  P2 = 12R2 = 42(10) = 160 W




VOLTAGE DROP BY PROPORTIONAL PARTS
    In a series circuit, each resistance provides a voltage drop V equal to its proportional part of
the applied voltage. Stated as an equation,



where         V = voltage, V
              R = resistance, n
             RT = total resistance, n
           R/RT = proportional part of resistance
             VT = total voltage, V
    A higher resistance R has a greater voltage drop than a smaller resistance in the same series
circuit. Equal resistances have equal voltage drops.

Example 4.12 The                 (Fig.4-1 1) is an example of a proportional voltage divider. Find the voltage drop
across                           method of proportional
     Write the                using Eq. (4-9).



Find RT.
        RT = RI + R2 + R3 = 20 + 30 + 50 = 100kfi
Substitute values.



                                                                                                             I
                                                                                                                   kO
                        20                       Ans.
                 Vl = - l o o = 20v
                       100
                        30                                                                              R,       50 kO
                 V2 = -100 = 30V                 Ans.
                       100
                        50
                 V3 = -100 = 50V                 Ans.
                        100                                                              Fig. 4-11
CHAP. 41                         DIRECT-CURRENT SERIES CIRCUITS                                       59


    The formula for the proportional method is derived from Ohm's law. For example, add V1, V2, and V3 to
obtain



Factor the right side of the equation.

                                     VI + V2 + V3 = VT(RI + R2 + R3)
                                                    RT
Use the relationships



and substitute.




                                             Solved Problems
4.1    Find the voltage needed so that a current of 10 A will flow through the series circuit shown in
       Fig. 4-12a.
       Step 1. Find total resistance.
                                                  RT = RI + R2 + R3
                                                     =2+3+5=10a
       Step 2. Find the voltage (we show the series circuit with RT in Fig. 4-12b).
                                               VT = IRT
                                                  = lO(10) = 1oov        Ans.

                                                       2 0




                                    v* = ?                             t3 a




                                                                                + 20v -


                                                                                               +
                                                                 100                           30 V
                                                                                               -




                                                     Fig. 4-12
60                               DIRECT-CURRENT SERIES CIRCUITS                                                   [CHAP. 4


4.2   Find the voltage across      resistor in the circuit of Fig. 4-12a. Show that the sum of the
      voltage drops equals the applied voltage of 1oOV.
                                           Vl = IRI = lO(2) = 20V                  Ans.
                                           V2 = IR2 = 1q3) = 3 0 V                 Ans.
                                           V, = IR3 = 1q5) = 5 0 V                 Ans.
           See Fig. 4-12c. Remember that the polarity               to the resistors                         the direction of
      voltage drops not current direction as the + and - next to the source indicate.
                                       Sum of voltage drops = applied
                                                   v, + v2 + v, = VT
                                                    20 + 30 + 50 = 100
                                                           1oov = 1oov                Check

4.3   In Fig. 4-13, a 12-V battery supplies a current of 2 A. If R2 = 2 R, find R I and VI.
      Step 1. Find RT. By Ohm’s law,



      Step 2. Find R I .
                                                        RT = RI + R2
               Transposing,
                                                RI = RT - R2 = 6 - 2 = 4 R                  Ans.
      Step 3. Find VI.
                                                   VI = IRI = 2(4) = 8 V              Ans.
                     An alternative method of solution is using voltage drops.
      Step 1. Find V,.
                                                            VT   = VI+        vz
               Transposing,
                                                      v1 = V T   - v2 = 12 - v*
               But                                               V2 =   IR2
               so                    V1 = 12 - IR2 = 12 - 2(2) = 12 - 4 = 8 V                      Ans.
      Step 2. Find R I .




                                                                                          R,          R2
                                                                                          10 V        15 V


              v,=    12v                                            6OV       --
                                                                              -
                                                                              A




                           T               2Q

                                           R2
                                                                                          1ov         8V

                                                                                          R5          R4

                               Fig. 4-13                                                  Fig. 4-14
CHAP. 41                         DIRECT-CURRENT SERIES CIRCUITS                                                61


4.4   For the circuit in Fig. 4-14, find the voltage drop of R3.
                                 Sum of voltage drops = applied
                                10 + 15 + V3 + 8 + 10 = 60
                                              43 + V3 = 60
                                                   V1 = 60 - 43 = 17V             Ans.


4.5   A series circuit (Fig. 4-15a) uses ground as a common connection and a reference point for
      voltage measurement. (The ground connection is at 0 V.) Mark the polarity of the voltage
      drops across the resistances R1,RZ, and find the voltage drops at points A and B with respect to
      ground.
                v, = 1oov                                                                   100 v



                                                                          A                                A


                                                                          Rl                               50 V



                                              ov                     ov            ov                   ov
                                                           (b)
                                                        Fig. 4-15

      Step 1. Mark the polarities. The current I flows from the positive terminal of the battery through R I ,
              through ground, up through R2, and back to the negative terminal of the battery (Fig.
              4-15b).          a + sign where the current enters the resistance and a - sign to the end where the
              current emerges (Fig.                 the ground voltage 0 V as the reference to measure voltage
              drops.
      Step 2. Find the total resistance, using Eq. (4-1)
                                             RT = R I + R2 = 100 + 100 = 200a
      Step 3. Find the current in the circuit.



      Step 4. Find the voltage drops.
                                                 VI = IR1 = 0.5( 100) = 50 V
                                                 V2 =   IRZ = O.S(l00) = 50 V
      Step 5.   Find                 at points A and B. Point A is 50 V positive      respect to ground, while
                point B is 50 V negative with respect to ground (Fig.         Point A is nearer to the positive
                terminal, while       B is nearer to the negative terminal.
      Step 6. Verify the voltage drops.
                                          Sum of voltage drops = applied
                                                                 VT = VI + vz
                                                              100 = 50 + 50
                                                            1OOV = 100V     Check

4.6   The terminal voltage of the motor (Fig. 4-16) should be not less than 223 V at a rated current
      of 20A. Utility voltage variations produce a minimum of 228V at the panel. What size
      branch circuit conductors are needed?
62                                 DIRECT-CURRENT SERIES CIRCUITS                                                [CHAP. 4


           Find the minimum allowable wire size for the               drop by calculating its resistance.
      The maximum voltage                is 228 - 223 = 5 V.    Then      maximum wire resistance is
      5/20= 0.25R/500ft = 0.50fk/1000ft.                   4-1, No. 6 wire is                      it has
      0.40 flll000 ft (No. 7 wire has 0.51 fl/lWft).
                                                                                              100 ft of No. 12 wire

      Panel board
                                                                                       c
                    Two-conductor branch circuit   DC motor
                        Temperature 25OC

                              I=20A


                                                                                              100 ft of No. 12 wire

                            Fig. 4-16                                                              Fig. 4-17



4.7   How much current will      in the circuit (Fig. 4-17) if No. 12 conductors are (a) copper, (b)
      tungsten, and (c) Nichrome? (Temperature is 20°C.)
      ( a ) Copper
                                                    p = 10.4         (Table 4-2)
                                                   A = 6530CM            (Table 4-1)
            Copper
                                                     R = p x1
                                                                                                                      (4-5)




                              Total                        = conductor                 + load resistance
                                            RT = R + RL = 0.319 + 10 = 10.319fl
                                             I=-=-= '
                                                   RT
                                                             120
                                                            10.319
                                                                       11.6A           Ans.

      (b) Tungsten
                                    p = 33.8 (Table 4-2)
                                   A = 6530CM (equal                        of copper




                                            RT     =R    + RL = 1.035+ 10 = 11.035s1
                                                    '
                                               I=-=--
                                                    RT
                                                             120 - 10.9A
                                                            11.035
                                                                                       Ans.

       (c) Nichrome
                                   p = 676         (Table 4-2)
                                   A = 6530CM           (equal              of copper
                                                         R ' p xI
CHAP. 41                                DIRECT-CURRENT SERIES CIRCUITS                                                  63


                                               RT = R + R, = 20.7 + 10 = 30.70

                                                I = - = - = 120     3.91 A          Ans.
                                                     RT 30.7
      Notice that as the factor p increases,                                                             current decreases.

4.8   Five lamps are connected in series (Fig. 4-18). Each lamp requires 16V and 0.1 A. Find
      the total power used.
           The total             VT equals the sum of the                           across all parts in the series
                                            VT = VI + v2 + v, + v4 + vs                                               (4-2)
                                               = 16+16+16+16+16=80V

           The current through each resistance (lamp) is the single current in the series
                                                          I = 0.1 A
      So the                                   PT = IvT
                                                   = 0.1(80) = 8W            Ans.
      Also total                    sum of the individual powers.
      For one lamp,                             PI = VII = 16(0.1) = 1.6W
      For five lamps,                        PT = 5Pl = 5(1.6) = 8W       Ans.
                v = l 6 V      V,=16V                                                        P I = 80 W
                                                                                                   RI


      TI o - y ~ y ~ -
      vr                I = 0.1 A             V3 = 16 V



                V5 = 16 V      V4 = 16 V
                            Fig. 4-18                                                        Fig. 4-19


4.9   Find I, V1,V2,Pz, and R2in the circuit shown (Fig. 4-19).
      Step 1.    Find I.
                 Use                         PI = I?@l. Then


                Taking the square root,
                                                            II =   l/a = 4 A
                Since           a series
                                                       I = I, = 4 A          Ans.
      Step 2. Find VI, V2.
                                                 VI = IRI = 4 5 ) = 20v              Ans.
                                            v2 = VT   - v, = 120 - 20 = 1oov                Ans.
      Step 3. Find P2,R2.
64                                 DIRECT-CURRENT SERIES CIRCUITS                                           [CHAP. 4


4.10   Three 20-kfl resistors R,, R2, and R3 are in series across an applied                       of 120 V. What
       is the voltage drop across each resistor?
             Since R I , R2, and R3 are                                                           of the
       and              the total                  So
                                                   1
                                               v = 3120 = 4ov            Ans.

4.11   Use the voltage-divider                to find voltage drop (Fig. 4-20) across each resistor.

                                                                               Ans.
                                                R
                                           v* = 2       7
                                                  v, = -10
                                                   RT
                                                           =7 v
                                                            10
                                                                               Ans.




                                                        Fig. 4-20

            An important          of using the                                    that we can find the
       from VT and                        finding the
            If we found   current first,     we could calculate                       drop by multiplying current and
       resistance. For example,



       Then                                   V, = IRI = l(3) = 3 V      Check
                                              V2 = IR2 = l(7) = 7 V      Check

4.12   Compare the effect on voltage drop of a 1-n resistor                   a 9 9 4 resistor in series.
            Because                                                         a very small resistance (1 52) has a
       very small effect in series with a much larger resistance (99 52). For example, if the applied voltage
       were lOOV, the                             1-0 resistor would be 1 V [(l/lOO)(lOO) = 1 V], while across
       the 99-52 resistor it would be 99 V [(99/1OO)(100) = 99 V].

4.13   A voltage of 5 V is to be made available        a 12-V source using a two-resistor
       divider         4-21). The current in the divider    to be 100mA. Find the values for
       resistors R , and R2.


                                          i,,,,i
                                            12 v
                                                                          ~




                                                                               +5 v




                                          I             Fig. 4-21
                                                                    ov
CHAP. 41                          DIRECT-CURRENT SERIES CIRCUITS                                               65


       step 1. Find RT.
                                                                          = 120n

       step 2. Find RI. From Fig. 4-21, tracing the voltage across the                       at OV, we
               have 5 V across RZ (V, = 5 V), so that there is 7 V across R1 ( V , = 7 V) for a     of
               12V (VT = 12V). Use the voltage-divider formula.

                                                                                                             (4-9)

                Then

                The ratio of the two                                         of the two             7/12. So
                                                  7     7
                                             RI = ERT =-I20          = 70n       Ans.
                                                        12
       step 3. Find Rz.
                                                          RT = R1 + RZ
                Transpose
                                          Rz = RT - R1 = 120 .-. 70 = 50R            Ans.


                                     Supplementary Problems
4.14   What                         of three 2042 resistors             in series?      Ans. 60R
4.15   A     has a 3-V, 1 . 5 4 dash light and 3-V, 1 . 5 4 taillight            in series to a battery delivering
       2 A (Fig. 4-22). Find               voltage and                  of the
       Ans. VT = 6 V ; RT = 3 . 0 n




                                                        Fig. 4 2 2

4.16   A 3 4 , a 5-R and 4-l2 resistor are connected in series across a                              drop across
       a 3 - 0 resistor 6 V. What is the                    Ans. 24 V
4.17   If three resistors are connected in series across a 12-V battery and the voltage drop across one resistor
       is 3 V and the voltage drop across the second            is 7 V, what is the voltage drop across the third
       resistor?     Ans. 2 V
4.18   A lamp using 10 V, a 1 0 4 resistor          4 A, and 24-V motor are connected in series.              the
       total           the total                  Ans. V T = 74 V; RT = 18.5 R
4.19   Find all missing values current, voltage,               in a high-voltage regulator             in a
       television         (Fig. 4-23). The       drop across each resistor is used to supply             in other
       parts of the receiver.
       Ans. V , = 700 V, I2 = 0.07 mA; Vz = 105 V, I3 = 0.07 mA;
               R3 = 500kR, VT = 840V; RT = 12MR, I = 0.07mA
66                                 DIRECT-CURRENT SERIES CIRCUITS                                      [CHAP. 4



                                                                                              +
                                                                                              I


                    v, = ?                v2 = ?
       R, = ?                                             R, = ?
                                                                       -


4.20   Given I = 2 A , RI = 10% V2 = 50V, and V3 = 4OV, find Vl, VT, R2, R3, and RT (Fig. 4-24).
       Ans. Vl = 20V; VT = llOV; R2 = 25Q; R3 = 2OQ; R T = 5 5 0

4.21   A current of 3 mA flows through a resistor that is                 to a 1.5-V dry cell. If three additional
       1.5-V cells are connected in series to the first                 find the current flowing through the
       resistor.   Ans. I = 0.012A = 12mA

4.22   A                         of a 30004, a 5000-R, and 1000O-nresistor in series. The series current
       is 15 mA. Find ( a ) the voltage drop across each resistance, (b) the               (c) the
       resistance.  Ans. (a) Vl = 45 V, V2 = 75 V, V3 = 150 V; (b) VT = 270 V; (c) RT = 18 ()OOQ

4.23   A dc circuit to a                                 can be          as shown in Fig. 4-25. Find the total
       resistance                                  A and B.     Ans. RT = 50 kQ; V,, = 30 V



                           IL = 0.6 mA
                                                                            Spotlight
                           R, = 12 kn                         0


       I=OA
                                                                  +        V, = 31.2 V
        *                  R,   = 13 kQ
                                                     vr = ?
                                                     I = ?
                                                                  I        I, = ?
                                                                           R , = 12n
                                                     R, = ?
                           RE = 25 kn
                                                              0




4.24   A 12-52 spotlight in a theater is connected in series        dimming resistor of 32Q (Fig. 4-26). If the
       voltage drop across the light is 31.2 V, find the missing values          in Fig. 4-26.
       Ans. II = 12 = I = 2.6A; V2 = 83.2V; VT = 114.4V; R T = 44Q

4.25   Find all missing values of current, vol-
       tage, and
       in Fig. 4-27.
       Ans. V3 = 30V;
                           in the circuit


                r = I~ = l2= 13 = 0 . 6 6 7 ~ ;
                                                                   fi  v, = 20v
                                                                                    R , = 165 n

                                                                                        v2 = 6ov     v3 = ?
                                                                       I, = ?           I2 = ?      I3 = ?
              RI = 30Q,                                                R, = ?           R, = ?      R, = ?
              R2 = 90Q,
              R3 = 45Q

                                                                   0

                                                                                        Ng.4-27
CHAP. 41                           DIRECT-CURRENT SERIES CIRCUITS                                                     67


 4.26    Find            at points A, B, C, and D shown in the                        4-28) with respect to ground.
         Ans. V A = +60V; VB = +50V; Vc = +30V; VD = OV

                             A              5n           B                                50 V



                                                                         A
                      60                                     10 n




                                            15 Q         c
                                     Fig. 4-28                                       Fig. 4-29


4.27    Find the voltage at points A and B with respect to            (Fig. 4-29).
        Ans. V A = +20V; VB = -3OV

4.28    A coil wound with 4OOO turns of No.20 copper       If the average                         of wire in a turn 3 in,
        how much is the total           of the             will be its                           if No. 25 wire is used
        instead?                   25°C.)     Ans. 10.35 R, 33.0 R

4.29    Find the voltage          across 1OOOft of No. 10 gauge copper                                  to a 3-A load.
        Ans. 3.05 V

4.30    If                is 200 ft, find the smallest   copper wire that will limit the               drop to 5 V with
        115 V applied and a 6-A load.      Ans. No. 16 copper wire

4.31    A copper wire has a diameter of 0.031 96in. Find (a) the         area, (b) its AWG size, and ( c )
        the resistance of a 2Wft length.    Ans. (a) 1024 CM; (b) No. 20; ( c ) 2.07 R (for No. 20 wire)

4.32    What                    of a 200-ft length of (a) No. 16 copper wire and (b) No. 20 aluminum wire?
        (Obtain            from Table 4-1.)    Ans. ( a ) 0.805 R; ( b ) 1.32 R

4.33    A copper                          0.8n at 20°C. What is its            at 25"C?           Ans. 0.816R

4.34    If a copper wire has a resistance of 4 R at 20°C, how much                         at 75"C? If the wire is No.
        10, what is its length in feet?   Ans. 4.88 0,4800 ft

4.35    Calculate the load current I (Fig. 4-30) for the wire IR drop of 24.6 V with a supply of 115 V.            Also
        find the value of RL. Ans. I = 30 A; RL = 3.01 R


                                                                                     R,
                                  I = ?
                                                                        (7



4.36    Two            form the base-bias                   for an audio amplifier. The voltage drops across
        them are 2.4 V and 6.6 V in the 1.5-mA circuit. Find the power used by each                   power
        used in milliwatts (mW).      Ans. PI = 3.6 mW; Pz= 9.9 m W ; PT = 13.5 mW
68                                DIRECT-CURRENT SERIES CIRCUITS                                   [CHAP. 4


4.37    Find I, V,,VZ, PI,Pz,and PT (Fig. 4-31).
        Ans. I = 5mA; VI = 1OV; V2 = 30V; PI = 50mW; P2 = 150mW; PT = 200mW

4.38    Find V,,V2,V3, PI, P2,P,,Pf,and R , (Fig. 4-32).
        Ans.  V , = 30 V; Vz = 15 V; V3 = 55 V; P I = 150 m W ; P2 = 75 m W ; P, = 275 m W ; P,- = 500 mW;
               R , = Ilkn
                                 R,                                              R,

                         + 6 kQ
                      I=5mA
                                                    3 kQ                                       1.7 MR




                                                                           1.7 M Q
                              Fig. 4-32                                    Fig. 433
4.39    Find PT, Pz,and V3 (Fig. 4-33).        Ans. PT = 298 pW; P2= 99.5 pW; V, = 13 V

4.40    A 90-Sz and a WSz resistor are in series across a 3-V source. Find the voltage drop across each
        resistor by the voltage-divider          Ans. 2.7 V, 0.3 V

4.41    Eight 1 0 4 resistances are in series across a 120-V source. What is the          drop across each
        resistance?     Ans. 15V

4.42    A potentiometer        be considered a simple two-resistor                    (Fig. 4-34). To what
        resistance      would the                to be set in a 120-52 potentiometer to obtain 2.5 V between
        the arm (point A) of the                 ground (point B)?       Ans. 25-52 point from ground




                                        12 v                             2.5 V




                                                    Fig. 4-34

4.43    Find the IR drop across each resistor in the            by the voltage-divider                  (Fig.
        4-35).
        Ans. (a) V ,= 6OV; Vz = 180V ( b ) V, =.25V; V 2 = 50V; V, = 35V
               (c) VI = 11.5 V; V2 = 23V; V, = 34.5 V; V4 = 46V




240 v                                 110 v                     10 n



                                                      7R
                                                                                         115 v
                                                      (6)                                 (d
                                                    Fig. 4-35
                                                                                     Chapter 5

                   Direct-Current Parallel Circuits
VOLTAGE AND CURRENT IN A PARALLEL CIRCUIT
    A parallel         is a circuit in which two or more components are connected across the same
voltage source (Fig. 5-1). The resistors R I , R2, and R3 are in parallel   each other and with the
battery. Each parallel path is then a branch with its own individual current. When the total
current IT leaves the voltage source V, part II of the current IT will flow through R I , part I2 will
flow through RZ, and the remainder I3 through R3. The branch currents 11, 12, and I3 can be
different. However, if a voltmeter (an instrument for measuring the voltage of a circuit) is
connected across R I , R2, and Rj, the respective voltages VI, Vz, and V3 will be equal. Therefore,




                                              Fig. 5-1 A parallel circuit

      The total current ITis equal to the sum of all branch currents.
                                                     IT   = 11   + 1 2 + I3                            (5-2)
This formula applies for any number of parallel branches whether the resistances are equal or
unequal.
     By         law, each branch current equals the applied voltage divided by the resistance
between the two points where the voltage applied. Hence (Fig. 5-1) for each branch we have the
following equations:
Branch 1:

Branch 2:                                                                                             (5-3)

Branch 3:

With the same applied voltage, any branch that has less resistance allows more current through it
than a branch with       resistance.

Example 5.1 Two lamps each                 2 A and a third lamp drawing 1 A are         in parallel across a
110-V line (Fig. 5-2). What is the        current?
    The           for total current is
                                         IT   = I,   + I* +   I3                                       (5-2)
                                              = 2+2+ 1=5A                     Ans.
The       current is 5 A.
                                                              69
70                                DIRECT-CURRENT PARALLEL CIRCUITS                                                         [CHAP. 5
     1




         0



             r
                   v                   .
                                       I



                                           .1
                                            I2
                                                                                             - \Ir1
                                                                                               +
                                                                                             I , = 20 A
                                                                                                                   = l2A

      110 v
                             2A                       2A                       1A          110 v          R,
 dc power supply



         0         A




                                Fig. 5-2
                                                                                             -            ~~




                                                                                                               Fig. 5-3


Example 5.2 Two                 R I and R2 across a 110-V power line                           a total line current of 20 A (Fig.
5-3). Branch R I takes 12 A. What is the current 1, in branch R2?
     Starting with Eq.(5-2), transpose to find Iz and
                                           IT    = rI      + r2
                                            1 2 = IT- I]
                                                 =20-12=8A                          Ans.
The current in branch R2is 8 A.

Example 5.3 A parallel                    of a coffee       a toaster, and a frying pan plugged into a kitchen
appliance        on a 120-V line (Fig. 5-4a). What currents will flow in each        of the
the      current drawn by all the appliances?

                       12




                                                  ~        ~~~~~




                            Coffee maker (15 0)                    Toaster (15 0)           Frying pan (12 0)

                                                                        (4




    First, draw                diagram (Fig. 5-4b). Show the resistance for each appliance. There is a 120-V
potential across each                Then, using Eq.(5-3),apply Ohm’s law to each appliance.
                                                V = 120 =
                                           1, = -                                   Ans.
Coffee                                                RI           15
CHAP. 51                       DIRECT-CURRENT PARALLEL CIRCUITS                                                71



Toaster:

Frying pan:                           I, = - = -
                                               120 = 10A                  Ans.
                                              Rj       12
Now find total current, using Eq. (5-2).
                                     IT =      + + Ij
                                           = 8 + 8 + 10 = 26A              Ans.
With this load of 26A, a 20-A circuit                       fuse will open
desirability of having 20-A kitchen


RESISTANCES IN PARALLEL

Total Resistance
    The                  in a parallel        is found by applying Ohm's law: Divide the
voltage across the parallel            by the



RT is the total            of all the parallel                  across the voltage source V, and I T is the sum
of all the         currents.

Example 5.4    What is the                  of the                     in Fig. 5-4 (Example 5.3)?
   In           5.3 the              is 120 V and                             is 26 A. Therefore,

                                     R T = -IT= - -120
                                                   26
                                                       - 4.62R             Ans.

The total load connected to the 120-V line is               as the single equivalent          of 4.62 R connected
across the line (Fig. 5-5). The words total                 and equivalent           are used interchangeably.



                                                   I , = 26 A
                                            120 v               R , = 4.62 fl




                                           Fig. 5-5 Equivalent
                                                    that of Fig. 5-4
General Reciprocal Formula
    The                    in parallel is given by the
                                      - --- + -1+ - +1. . . + -  1
                                                                                                             (5-5)
                                      RT RI R2 R3               Rn
where RT is the total               in parallel RI, R2,R3, and Rn are the branch

Example 5.5 Find the                       of a 2 4 , a 4-R,and       8-R resistor in parallel (Fig. 5-6).
   Write the       for three                   in parallel.
72                             DIRECT-CURRENT PARALLEL CIRCUITS                                                            [CHAP. 5


                 0




                                                                                                               R T -- ?



                 0                                -
                                                  i


                              ( a) Parallel branch circuit                                        (b) Equivalent circuit

                                                               Fig. 5-6


Substitute the resistance values.                        I + - I+ - 1
                                                      - I= -
                                                      R T 2 4 8



Add fractions.

Invert both sides of the equation to solve for RT.
                                                8
                                           RT = - = 1.14R                              Ans.
                                                7
Note that when resistances are connected in parallel, the total resistance is always less than the resistance of
any single branch. In this case, RT = I . 14 0 is less than R I = 2 R , R, = 4 R, and R , = 8 R.

Example 5.6 Add a fourth resistor of 2 R in parallel to the circuit in Fig. 5-6. What is the new total
resistance and         the net        of adding another resistance in parallel?
     Write the formula for four resistances in parallel.
                                             - 1= - + 1- + - +
                                                             1-               1            1
                                                                                                                               (5-5)
                                             RT         RI          Rz        R3           Rq

Substitute values.
                                                 -.=-          I + - 1+ - + 1-         1
                                                  R        T     2 4 8                 2
Add fractions.
                                             -1- - 4- + 2- + 1- + 4- = 1- 1
                                             R    T            8    8     8        8       8
Invert.

                                          RT=-=                    0.73R                   Ans.
                                                      11
Thus we see that the net effect of adding another resistance in parallel is a reduction of the total resistance
from 1.14 to 0.73 R .

Simplified Formulas
    The total resistance of equal resistors in parallel is equal to the resistance of one resistor
divided by the number of resistors.
                                                                R
                                                           RT = -                                                              (5-6)
                                                                N
where RT = total resistance of equal resistors in parallel, R
       R = resistance of one of the equal resistors, 0
      N = number of equal resistors
CHAP. 51                      DIRECT-CURRENT PARALLEL CIRCUITS                                                73


Example 5.7 Four                   having a resistance of 6 0 0 , are                 in parallel. Find the
resistance.
     Given are
                                      R = R I = RZ = R3 = R., = 60R
                                      N=4
Write Eq.(5-6) and

                                      RT=-=-=
                                         N 4
                                                 * 15R               Ans.


   When any                                 in parallel, is often easier to calculate the total
by multiplying the                              dividing the          by the sum of the



where RT is                         in parallel and R I and R2 are the                     in parallel.

Example 5.8 Find the                   of a 6-R and an 18-0 resistor in parallel.
   Given are R I = 6 R , Rz = 18R.
   Write Eq. (5-7) and substitute values.
                             RT = -RlR2 = -  6(18) = -
                                                     108 = 4.50                Ans.
                                  R l + R z 6 + 18 24

    In       cases with two parallel resistors, is useful to find what      Rx to connect in parallel
with a known R in order to obtain a required           of R T . To find the                      we
start with Eq. (5-7) and transpose the factors as follows:

                                               RT =     -RRX
                                                        R + R,
Cross-multiply.                             RTR + RTR, = RR,
Transpose.                                  RR, - RTR, = RTR
Factor.                                     Rx(R - R T ) = RTR

Solve for R,.

Example 5.9 What value of resistance must be                  in parallel with a 4-R resistor to provide a total
resistance of 3 R (Fig. 5-7)?

                                      0             v                -I




                                                                          R, = ?




                                                   Fig. 5-7


    Given are R = 4     and RT = 3 R. Write Eq. (5-8) and
74                              DIRECT-CURRENT PARALLEL CIRCUITS                                         [CHAP. 5


OPEN AND SHORT CIRCUITS
     An “open” in any       of a circuit    in effect,             high resistance that results in no
current flow in the          When there is an open in the main line       “X” in Fig. 5-8a), current
to all the parallel          is stopped. When there                in one                   2 in Fig.
5-86), only that        will have                         current in branches 1 and 3 will continue
to flow so long as they                to the voltage source.




               (a) Open in main line                                    ((I) Open in parallel branch

                                        Fig. 5-8 Open parallel circuits

     A “short” in any         of a circuit is, in effect, an extremely low resistance.                 is that
very high current will flow through          short circuit. Assume that a conducting wire at point a in
Fig. 5-9 should                 contact the wire at point 6. Since the wire is                     conductor,
the short circuit        a parallel        with practically                                  a to 6. Almost
all the current will flow in this                                of the short circuit is practically zero, the
voltage drop across a6 will be                   (by Ohm’s law).                     RI, R t , and R3 will not
draw                 current.
                                                                    a




                                                                    b
                                       Fig. 5-9 Short in parallel circuit

Example 5.10 Find the current in each                     (Fig. 5-lOa). If the                  in the
burns out, causing an open             5-10b), find the new branch
    Use Eq. (5-3)and substitute values. With circuits normal (Fig. 5-10a),




                           (a) Normal circuit                                (6) Open circuit
                                                     Fig. 5-10

                                       I1 = - = -l0- - 0.5 A        Ans.
                                            RI 20
                                       12 =
                                                v   10
                                                - = - = 0.5 A       Ans.
                                                R2 20
CHAP. 51                              DIRECT-CURRENT PARALLEL CIRCUITS                               75


With branch 2 open (Fig. S l o b ) ,

                                                    l0
                                              11=-=-=              0.5 A     Ans.
                                                 RI 20

Branch 1 still operates normally at 0.5A. This example shows the advantage of wiring components in
parallel. An open circuit in one component merely opens the branch containing the component, while the
other        branch keeps its normal voltage and current.



DIVISION OF CURRENT IN TWO PARALLEL BRANCHES
     It is sometimes necessary to find the individual branch currents in a parallel circuit if the
resistances and total current are known, but the voltage across the resistance bank is not
known. When only two branches are involved, the current in one branch will be some fraction of
the total current. This fraction is the quotient of the second resistance divided by the sum of the
resistances.

                                                                                                  (5-9)

                                                                                                (5-10)

where II and I2 are the currents in the respective branches. Notice that the equation for each
branch current has the opposite R in the numerator. The reason is that each branch current is
inversely proportional to the branch resistance. The denominator is the same in both equations,
equal to the sum of the two branch resistances.

Example 5.11    Find the branch currents I, and I2for the circuit shown in Fig. 5-11.
    Given are IT = 18 A, R 1 = 3 R, and R2 = 6 a. Write the equations and substitute values.

                    II =     R2      IT                                     (5-9)
                           RI + Rz                                                    5
                      =-          18 = 6 1 8 = 12A          Ans.                    I,=   18A
                           3+6            9

                                                                           (5-10)                   6 3

Since IT and II were known, we could have found I2 simply by
subtracting:
        IT   = I,   + rz
        12 = IT - 11 = 18 - 12 = 6 A                 Ans.




CONDUCTANCES IN PARALLEL
    Conductance is the opposite of resistance. The less the resistance, the higher the conduc-
tance. The symbol for conductance is G and its unit is siemens (S). G is the reciprocal of R, or

                                                            G = -1                              (5-1 1 )
                                                                   R
For example, 6rcZ resistance is equal to 1/6S conductance.
76                            DIRECT-CURRENT PARALLEL CIRCUITS                                 [CHAP. 5


    Since conductance is equal to the reciprocal of resistance, the reciprocal resistance equation,
Eq. ( 5 - 9 , can be written for conductance as
                                      GT=G,+G2+G3+.**+Gn                                          (5-22)
where GT is the total conductance in parallel            G,, G2, G3, and Gn are the branch conductances.


Example 5.12 Find the total            of the circuit in Fig. 5-12. Then find the total          RT and
check        with that computed in Example 5.5.




                                                  Fig. 5-12


    This        is the       as that of Fig. 5-6 used in Example 5.5. Convert                         to
conductance, using Eq. (5-11), and         the values of conductance to obtain GT.



                                 G2=-=-       = 0.25 S
                                      Rz 4
                                 G3 = - = - = 0.125 S
                                      R3    8
                                 GT = G1 + Gz + G,                                                (5-12)
                                    = 0.5 + 0.25 + 0.125 = 0.875 S      Ans.
Finally
                                    R T = - -1
                                               - - - - 1.14R
                                          GT 0.875
                                                                     Ans.

which                 RT value         in Example 5.5.

     Ohm’s law can be             in terms of conductance.            that




                                                                                                  (5-13)



Example 5.13 If the source voltage across the        in Fig. 5-12 is 100 V, find the total current.
   Given     V = 100V and GT = 0.875 S. Using Eq.(5-13),
                                 IT = VGT = loo(0.875) = 87.5A         Ans.
CHAP. 51                       DIRECT-CURRENT PARALLEL CIRCUITS                                          77


POWER IN PARALLEL
    Since the power            in the branch resistance must             the voltage source, the
total power       the sum of the individual        of power in each branch.
                                      PT    = PI    + P2 + p3 +    * "    +   pn                     (5-24)
where PT is the total                PI,P2,P3, and Pn are the branch
   Total power can also be                       equation
                                                     PT   = VIT                                      (5-25)
where PT is the total power, V is the voltage source across all parallel branches, and ITis the total
current.
    The power P dissipated in each branch is equal to VI and           to V2/R.
    In              and series arrangements the sum of the individual         of power             in
the circuit equals the total power                  the source. The circuit arrangements cannot
change the fact that all power in the circuit comes from the source.


Example 5.14 Find the power dissipated in each branch and the total power of the circuit in Fig. 5-13.
   First find the branch current and the power in each branch.

            I , = -V- -20=2A
                   RI   10                                                                    7



            1 2 = -' -- 2 0 = 4 A
                  R2        5
           PI = VII = 20(2) = 40 W           Ans.                        v = 20v-
                                                                                   -
                                                                                   -
           P2 = VIZ = 20(4) = 80 W           Ans.
Then add these values for power in each branch to find PT.
            PT = PI + P2
                = 4 0 + 80 = 120W           Ans.          (5-14)                       Fig. 5-13

    Another way to find PT is to solve for IT.
                                           IT = Il + I2 = 2 + 4 = 6 A
Then                                  PT = VI,                                                       (5-15)
                                            = 20(6) = 120 W              Ans.
The 120 W of power supplied by the source is dissipated in the branch resistances.
    There are still other ways to find power used each branch and total power.




                                  &=-v
                                     =2            V2GT = (20)*(0.3)= 120W
                                        RT

where
78                          DIRECT-CURRENT PARALLEL CIRCUITS                                               [CHAP. 5


                                          Solved Problems
5.1   Write       word or       which most                                     the following
      (a) The                          RT of parallel                         is                   than the smallest
          branch                     all the                               take                    current from the
          source than any
      (b) When two                                              in parallel, the voltage across each is the

      (c) An open in one                         in                     current through that branch,      the
            other branches can have                                  current.
      ( d ) A short circuit                             resistance,           in                 current.
      (e) If each of two                                 in parallel           5 W, the total power
            by the          source equals                         W.
      Ans. (a) less,        (b) same; ( c ) zero,                     (d) zero, excessive; (e) 10

5.2   Branch          in a       wiring system are parallel                               A toaster, a
      and a frying pan are plugged into                                                   across a 110-V line (Fig.
      5-14). The current through         toaster is 8.3A; through                                         8.3A; and
      through                9.6 A.   Find ( a ) the    current from                       main line, (b) the voltage
      across each appliance,     (c) the                 of the


                                                                r2L    I   8*3A




                                                          Mg. 5-14
      (a)   Find IT.
                                     IT   = It   + 12 +    13

                                          = 8.3   + 8.3 + 9.6 = 26.2A                Ans.
      (b) Find V,,V2,V3,using Eq. (5-2).
                                     v = v, =           v 2 = v3 =     ll0V          Ans.
      (c)   Find RT.



                                          =--         - 4.198 = 4.20n              Ans.
                                            26.2

5.3   Four 60-W lamps, each having the same                  are connected in parallel across a
      household         of 120 V, producing line current of 2 A (Fig. 5-15a). The schematic
      diagram shows             that represent          (Fig. 5-156). What is ( a ) the
      resistance of the     ( b ) the          R of each lamp, and (c) the current that each lamp
      draws?
CHAP. 51                          DIRECT-CURRENT PARALLEL CIRCUITS                                               79




                         0                      -
                                     I , = 2A       I'


                             120 v          R




                         o    v

                                                                (b)
                                                              Fig. 5-15
                                                      R
      (b)                                        RT = -                                                        (5-6)
                                                      N
            so that
                                                R = RTN = 60(4) = 240R              Ans.

                                         I1 = I 2 = I , = I 4 = -
                                                                IT   2
                                                                   = 4 = 0.5A           Ans.

            With equal resistance in each branch, the current in each branch is equal and the power
            by      branch is

5.4   For the circuit in Fig. 5-16, find (a) the total resistance, ( b ) each branch current, and (c) the
      total current.




                                                              Fig. 5-16

      (a) Since there are only                           in parallel, use the simplified formula, Eq. (5-7).
                                          R T = - - RiR2
                                                    -.=-=        20(30)     12R        Ans.
                                                 R I + R2       2 0 + 30
      (b)   Use Eq. (5-3).
80                            DIRECT-CURRENT PARALLEL CIRCUITS                                   [CHAP. 5


      (c)                                 IT = 11 + 1 2 = 0.6 + 0.4 = 1 A              Ans.
            Or, as a check,

                                               I , = - = - = l2 1 A             Ans.
                                                       RT    12


5.5   Find the total resistance RT of each                           arrangement in Fig. 5-17.




                                                         (6)
                                                             Fig. 5-17

      (a) Use Eq. (5-7) for two parallel branches.



      ( b ) Since all the             are equal,               (5-6).
                                                  R =-
                                             RT = -  300 = loon
                                                                                     Ans.
                                                  N   3
      ( c ) For three parallel branches                      resistances, use Eq. (5-5).



                                               72
                                          RT = -  = 6.55 Q               Ans.
                                                 11
      Note that the total              of a parallel circuit          always less than the          of any
      individual resistor.

5.6   A spotlight of unknown resistance placed in parallel with an automobile cigarette lighter of
      75 R resistance        5-18). If a current of 0.8 A flows when a voltage of 12 V is applied,
      find the resistance of the spotlight.

                                               *
                                  0                      v


                                           I , = 0.8 A                           Spotlight

                                                                            J    resistance

                                                                            Rx = ?




                                                             Fig. 5-18

            Find RT.

                                                              - - 15Q
                                                      R T = -l2
                                                               0.8
CHAP. 51                        DIRECT-CURRENT PARALLEL CIRCUITS                                      81


      Then use Eq. (5-8) to find the unknown resistance.



       Another way to find the answer is to use Ohm’s                  the total          equation.
                                                  12
                                              =
                                        I\i&ter     = 0.16 A
                                                 75
                                         Ispot = 0.8 - 0.16 = 0.64 A

                                              12
                                           = - = 18.75 = 18.80
                                        Rspot                                      Ans.
                                                  0.64


5.7   (U)   Derive Eq. (5-7) RT = RIR2/(RI+ R2) from the reciprocal formula for two parallel
            resistances.
      (6) Derive a formula for RT, given three parallel resistances.


                 Add fractions.



                 Invert.

                                                  RT = - which is Eq. (5-7)
                                                       R I+ RZ
            ( b ) Use the



                 Find       common denominator and combine numerators.



                 Invert.




5.8   Find the voltage required to send 2 A through a parallel combination of a 2 0 4 , a 30-R, and a
      404 resistance       5-19).


                             +
                            r , = 2 ~


                    V = ?
82                               DIRECT-CURRENT PARALLEL CIRCUITS                                            [CHAP. 5


           Find R T .
                                                  - 1= - + 1- + - 1     1
                                                                                                                     (5-5)
                                                  RT      RI     R2     R,
                                                       = -1+ - +
                                                               1 - =1 - 1     3
                                                          20     30    40    120

                                                  RT   =-
                                                        I2O = 9 . 2 3 0
                                                           13
       Then
       As a check,
                                                     11=-=--           - 0.925 A
                                                          R1      20
                                                     12=-=--           - 0.617A
                                                          R2     30
                                                     I3 = - = - - 0.463 A
                                                          R3  40
                                 IT = I1 + 12 + 1 3 = 0.925 + 0.617 + 0.463 = 2.005               2A
       which checks with the given value.                 sum of the currents            exactly 2 A due to rounding off
       the individual branch currents.)

5.9    Two                   are arranged in parallel (Fig. 5-20). Find the current in each
           Use formulas for the                of current.

                                           I, = -  R2    IT                                                          (5-9)
                                                R I + R2
                                             = -3018           = Is30 = 6mA             Ans.
                                                18 + 72          90

                                           r2 = -
                                                R I + R2
                                                         IT                                                      (5-10)

                                                  72             72
                                             = -30             = -30   = 24mA            Ans.
                                                18 + 72          90
       Check: IT = I1 + I, = 6 + 24 = 30 mA, which                                 given value.




                - IP=?
              I , = 30 mA
                                                                                                          if2
                                                                                                          P2=2W
                                                                                                               = ?




                               Fig. 5-20                                                  Fig. 5-21


5.10   Two                  dissipating 2 W, are connected in parallel across 40 V (Fig. 5-21). What
       is the current in each resistor? What is the total current drawn?
           Find I,, 12,IT.
CHAP. 51                          DIRECT-CURRENT PARALLEL CIRCUITS                                                 83


                                            I , = >P= - = 0.05 A          Ans.
                                                   v 4 0
                                      IT = It + 1 2 = 0.05 + 0.05 = 0.1 A      Ans.
       Check:


                                                 I , = - pT
                                                         =-=         0.1 A
                                                        V      40
       which           with the


5.11   The combined resistance of a coffee percolator and toaster in parallel is 24 a. Find the total
       power used if the line          120V.




5.12   Find I3 in the parallel                                      5-22).




                                                                             I   413=?      I
                                                        Fig. 5-22

            Find RT.




       Find V.
                                            V = I T R T = 96(1.25) = 120mV
       Then find 13.

                                                 - = - ':o = 24mA
                                           1 3 = R3                          Ans.




                                  \   Supplementary Problems
5.13   Write     word or words which most                           the following statements.
       (a) There is only                       voltage across all                in parallel.
       (b) If a parallel circuit is open in the main line,     current is                       in all the
       ( c ) For              of conductances   in parallel,             are                       to obtain GT.
84                              DIRECT-CURRENT PARALLEL CIRCUITS                                        [CHAP. 5


       (d) When IT divides                  currents, each branch current is                        proportional to
           the branch
       (e) The sum of the                      values of power              in parallel
                              power           by the source.
       Ans. ( a ) one; (b) zero; ( c ) added; ( d ) inversely; (e) individual,

5.14   A 1004 and a 150-R resistor are connected in parallel. What is the             resistance?
       Ans. R T = 6 0 R

5.15   When the voltage across R4 is lOV, what       the source voltage in Fig. 5-23?        Ans.   V = 1OV




5.16   Find the equivalent            in the circuits      in Fig. 5-24.
       Ans. ( a ) RT = 1 R; ( b ) R T = 2 0 ; (c) R T = 4.8 R; ( d ) RT = 3.6R




                                                              (c)

                                                      Fig. 5-24

5.17   Find the missing branch or total current as indicated in Fig. 5-25.
       Ans. (a) IT = 3 A ; (b) I3 = 2 A




5.18   Four equal            are connected in parallel across a 90-Vsource. If the resistances are 36 fl for each
       branch,    the total resistance     the total current.      Ans. RT = 9 a; IT = 10 A

5.19   Find the total         each branch current, and              current (Fig. 5-26).
       Ans. R T = 2.67 R; I, = 2 A; I2 = 1 A; IT = 3 A
CHAP. 51                          DIRECT-CURRENT PARALLEL CIRCUITS                                              85




               Fig. 5-26                                                     Fig. 5-27

5-20   In the circuit shown (Fig. 5-27), find the total resistance, each branch current, and total current.
       Ans. RT = 4 0 ; 1 1 = 20A; 1 2 = 4 A ; 1 3 = 1 A ; IT = 25A

5.21   If the 25-0 resistor is removed from the circuit in Fig. 5-27, what is the total current and total
       resistance?   Ans. IT = 21 A; R T = 4.76

5.22   An ammeter (instrument that measures current) carries 0.05 A and is in parallel          a shunt resistor
       drawing 1.9 A (Fig. 5-28). If the voltage across the combination is 4.2 V, find (a) the total current, ( b )
       resistance of the shunt, (c) resistance of the ammeter, and ( d ) total resistance.
       Ans. (a) IT = 1.95 A; (b) Shunt R = 2.21 0; (c) Ammeter R = 84.00; ( d ) R T = 2.15 0

        _j
                        = 1.9 A    J, I2 = 0.05 A
         IT


                                                          V


                    Shunt
                   resistor        Ammeter


                   Fig. 5-28                                                       Fig. 5-29

5.23   Find the total resistance, each branch current, and total current (Fig. 5-29).
       Ans. RT = 2.67R; 1 1 = 8 A; 1 2 = 6 A ; 1 3 = 4 A ; I T = 18 A

5.24   A circuit consists of five identical resistances connected in       across a voltage source. If the total
       circuit current is 1 A, what is the current through each resistance?    Ans. I = 0.2 A

5.25   In the circuit of Fig. 5-30,find V if I3 = 0.2 A. Then find IT.      Ans.     V = 2 V; IT = 0.4 A
                                                                      sw

                                       Y3    = Oe2*

                                      10 n                V




                    Mg. 5-30                                                       Flg. 5-31

5.26   The ignition      and the starting motor of a car are connected in      across a 12-V battery through an
       ignition switch (Fig. 5-31). Find (a) the total current drawn from the battery, (b) the voltage across the
       coil and the motor, and (c) the total resistance of the circuit.
       A ~ s (. U ) I = 105 A; (b) V1 = Vz = 12V; (c) RT = 0.114R
86                                   DIRECT-CURRENT PARALLEL CIRCUITS                                                [CHAP. 5


5.27     Two                 each drawing 4 A, and  taillight lamps, each drawing 1 A,                         wired in parallel
         across a 12-V storage battery. What is the       current drawn                                                  of the
         circuit?  Ans. IT = 10A; RT = 1.20

5.28     What is the       of a resistor that must be connected in parallel across a 1WkR resistance to reduce RT to
         (a) 50 kR, (b) 25 kR, and (c) 10 kR?
         Ans. (a) R, = 100kR; (b) R, = 33.3 kR; (c) R, = 11.1 kR

5.29     What                     be connected in parallel with a 20-51 and a 60-0 resistor in parallel in order to provide
         a total              of 10 R?     Ans. 30 R

5.30     Two resistances are          in parallel. R , = 24 R, Rz = 24 R,and IT = 6 A. Find                           current in
         each branch.    Ans. I, = Iz = 3 A

5.31     Find     current in each           a parallel circuit        of a 20-R percolator                  a 30-R toaster if the
         total current is 10 A.       Ans. I in percolator = 6 A; I in toaster = 4 A




        -
5.32     Find the missing values in Fig. 5-32.           Ans. V = 4.5 V; II = 1.50 A; Iz = 1.13 A; I, = 0.38 A



       I T = 3 A
                    Jf1 = ?      L12 = ?     Lf3   = ?
                                                                          A        T

                                                                                       lfl = ?
                                                                                                 T

                                                                                                     if2    = ?    1 1 3 = 0.8 A


 V = ?              30          4Q          12 n            RT=?      V=32V                          16 Q         R 3 = 7-




                    Fig. 5-32                                                             Fig. 5-33



5.33     Find the missing values in Fig. 5-33.
         Ans. R3 = 4 0 0 ; RT = 5.33R;I, = 3.2A; I2 = 2A; IT = 6 A

5.34     Find the total                in siemens for the following parallel branches: GI= 6OOO pS, G2= 7000 pS,
         and G3= 20000pS.             Ans. GT = 33000pS

5.35     IT is 12 mA for two                         R Iis 10 kR and R2 is 36 kR. Find II and I2 in this parallel
         current-divider circuit.       Ans. I, = 9.39mA; I2 = 2.61 mA

5.36     What is the total       used by a 4.5-A electric         a 0.9-A fan, and a 2.4-A refrigerator               if they are
         all connected in parallel across a 120-V line?          Ans. PT = 936 W

5.37     Find the                    a 12-V battery by a parallel circuit of two                                      4.2 A, and
         two             each drawing 0.9 A.    Ans. PT = 122.4 W

5.38     Five 150-W light bulbs are connected in parallel across a 120-V power line. If one bulb opens, how many
         bulbs               Ans. Four

5.39     In Fig. 5-34 find ( a ) each branch current; (b) I T ; ( c ) RT; and ( d ) PI, P2,P3, and PT.
         Ans. (a) I1 = 30mA,             I2 = 14.6mA,         I3 = 60mA; (b) IT = 104.6mA; ( c ) RT = 1.15 kR;
         ( d ) PI = 3.60 W, Pz = 1.75 W,P3 = 7.20 W, PT = 12.6 W

5.40     Find R2in Fig. 5-35.         Ans. Rz = 1 kR
CHAP. 51                        DIRECT-CURRENT PARALLEL CIRCUITS                                              87




                            V = 120 v                                                   2 kR




                                                         Fig. 5-34


                                      0




                                 R , = 500R       R,


                                      0

                                                         Fig. 5-35


5.41   Refer to Fig. 5-34 and assume that R2 opens. ( a ) What is the current through R2? (b) What is the
       current through RI? and through R,? (c) What is the line or total current? (d) What is the total
       resistance of the circuit? (e) How much power is generated by the battery?
       Ans. (a) I2 = OA; (b) I1 = 30mA, I, = 60mA; (c) IT = 90mA; (d) RT = 1.33 kR; (e) PT =
       10.8 W

5.42   Find I2 and I4 in the parallel current-divider circuit (Fig. 5-36).   Ans.   I2 = 2.5 A; I4 = 1.67 A




                                                         Fig. 5-36
                                                                                       Chapter 6
                                                   Batteries
THE VOLTAIC CELL
    A voltaic chemical cell is a combination of materials        to convert chemical         into
electric energy. The chemical       consists of two electrodes made of different     of metals
metallic compounds, and an electrolyte, which is a solution             of conducting an electric
current (Fig. 6-la). A battery is formed when two or             are connected.



                                       Negative            Positive
         Electrodes                    electrode          elect rode



                                       \
                                                               I
                      Electrolyte



                                Zinc   4                           /CopperZinc   A       h,Copper




Negatiie ion


               (0)




                                                     (4
                                    Fig. 6-1 Basic                      of a voltaic

    An excellent example of a pair of electrodes is zinc     copper. Zinc contains an abundance
of negatively         atoms, while copper has an abundance of positively             atoms. When
plates of these metals are immersed in an electrolyte, chemical action between the two
begins.             electrode accumulates a much                                       it gradually
dissolves         electrolyte. The atoms which           the zinc electrode are positively charged.
They are attracted by the                             (-) of the electrolyte, while they
positively             (+) of the electrolyte toward the copper electrode (Fig. 6-lb). This causes
electrons to be                the copper, leaving it with an excess of positive charge. If a load

                                                          88
CHAP. 61                                                     BATTERIES                                             89


such      light bulb is connected             terminals on the                          of attraction and
repulsion will cause free electrons in the negative zinc electrode, connecting wires, and light bulb
filament to move toward the positively charged copper                       (Fig. 6-lc). The
difference that         permits the cell to function             of applied voltage V (Fig. 6-ld).
    The              of a cell may be liquid or a        If the              is a liquid, the cell is often
called a wet cell. If the             is in a                 cell is referred          dry cell.


SERIES AND PARALLEL CELLS
    When cells are                in series (Fig. 6-2), the      voltage across               of cells is
equal to the sum of the voltage of each of the individual cells. In Fig. 6-2 the          1 . 5 4 cells in
series provide a               voltage of 6 V. When cells are placed in series,       positive terminal
of one cell is connected to the negative terminal of the            cell. The          flowing through
such           of series cells is     same as for       cell because the same current flows through all
the

                    .1J6v&


                             Cell 1                   Cell 2              Cell 3         Cell 4


                             +   !: -                -t-     -            + -           +       -

                             1.5 V                    1.5 V                1.5 V         1.5 V

                                                 Mg. 6-2 Cells               series

    To                                     has cells in parallel (Fig. 6-3). When cells are placed in
parallel, all the positive terminals are connected together and all the negative terminals are
connected              Any point on the positive side                as the positive terminal of the
battery and any point on the negative side     be the negative terminal.




                                             1.5 v                       1.5 v                1.5 V

                                             Cell 1                  Cell 2                 Cell 3



                                 +
                             -
                                     1.5 v   +L
                                             -                   1.5 v   .-I-
                                                                         -
                                                                                      1.5 v   .--
                                                                                                1
                                              Fig. 6-3 Cells

    The        voltage output of a                         of three parallel cells is the- same as        single cell
(Fig. 63), but     available current                         times that of one cell. The parallel connection     the
90                                             BATTERIES                                         [CHAP. 6


same         of increasing           of the                           in a single cell, which increases
the current capacity.
    Identical       in parallel all supply        parts of the current to the                        of
three identical                           a load current of 270 mA, each                   90 mA.


PRIMARY AND SECONDARY CELLS
     Primary cells are those which cannot be recharged               to good condition after their
voltage output drops too low. Dry cells used in flashlights and                    are examples of
primary
     Secondary cells are        which are rechargeable. During recharging,                   which
provide                  are restored to their original condition.              is done by passing
direct current through a cell in a direction          to the         of the current which the cell
delivers to a circuit.
     A cell is            by connecting      to a battery          in “like-to-like” polarity (Fig.
6-4). Some                          a voltmeter and an          which indicate              voltage
and current.




                                                          U
                                   Fig. 6-4 Recharging a secondary cell
                                            with a battery charger

    The                          of a secondary cell is                      battery. Secondary
cells    batteries are particularly        for powering mobile equipment           a generator is
available to keep                                               are used to power
equipment as shavers, electronic                                                        be easily
charged                       current by simple,                      built into
appliance

TYPES OF BATTERIES

Lead-Acid Battery
    The                               of a number of lead-acid          Each cell has                of lead
plates; one set is the                                                               All positive        are
connected             with a connecting strap (Fig. 6-5). All negative            are similarly
together. The positive                             are interlaced so that alternately there is a positive
plate     a negative                                  are sheets of insulating                   separators,
made either of porous                                                     separators prevent the positive
and                                                                 a short circuit, which would destroy
the                                                     to form lead peroxide                    of lead and
oxygen),                                           of porous,                            sets of plates
the separators between them are placed in a container filled with a dilute                  of sulfuric acid
and           The term lead-acid battery refers to the lead plates                        acid that are
principal                of the
    The           in this      of cell is slightly more      2 V. Batteries used in modern
contain six cells             in series so that the output voltage from the           is slightly more than
C H A P . 61                                    BATTERIES                                            91




                            Fig. 6-5   Cutaway view of a lead-acid battery.
                                       (From B. Grob, Basic Electronics, 4th ed.,
                                       McGraw-Hill, New York, 1977, p. 247.)

12V. Older automobiles made before the mid-1950s used batteries in which three cells were
connected in series to give an output voltage of slightly more than 6 V .
     The storage battery can supply current for a much longer time than the average dry
cell. When the storage battery is discharged and is no longer able to supply the current required
by the circuit, the battery can be removed from the circuit and recharged by passing current through it
in the opposite direction. Once the battery has been recharged, it can again be connected to the circuit
and will supply current to the circuit.
     In an automobile, the battery is connected to a device called an alternator. As long as the car
is running at a reasonable speed, the alternator is both charging the battery and supplying the
current needed to operate the car. However, when the car is operated at a slow speed or when it
is stopped, the alternator is not turning fast enough to provide the electricity needed by the
car. The battery then supplies this energy, causing it to slowly discharge.
     When the battery discharges, some of the acid of the electrolyte combines with the active
material on the plates (Fig. 6-6a). This chemical action changes the material in both plates to lead
sulfate. When the battery is being charged by the alternator, the reverse action takes place, and
the acid which was absorbed by the plates is returned to the electrolyte (Fig. 6-6b).The result is that
the active material on the plates is changed back into the original (charged condition) lead peroxide
and sponge lead, and the electrolyte is restored to its original strength.




                              Fig. 6-6 Chemical actions of a lead-acid cell
92                                         BATTERIES                                      [CHAP. 6


    Whenever a battery is charging, the chemical action produces hydrogen gas on one plate
surface and oxygen gas on the other. These gases bubble to the surface and escape through the
vent hole in the cap on the cell. Thus water (H20)    is lost to the cell when the gases leave. The
water that escapes must be replaced to maintain the proper electrolyte level. Only distilled water
should     added to the cell. Otherwise, any impurity in the added water will combine chemically
with the sulfuric acid on the plates and form a stable compound that will not enter into the charge
or discharge action of the battery.

Carbon-Zinc Cell
     This is one of the oldest and most widely        commercial types of dry cell. The carbon, in
the form of a rod that is placed the center of the cell, is the positive terminal. The case of the
cell is made of zinc, which the negative electrode (Fig. 6-7). Between the carbon electrode and
the zinc case is the electrolyte of a chemical pastelike mixture. The cell is sealed to prevent the
liquid in the paste from evaporating. The voltage of a cell of this type is about 1.5 V.




                           Ng.6 7 Construction of carbon-zinc        No.
                                   6. (Courtesy NRI Schools.)




Alkaline Cell
    The secondary alkaline cell is so called because it has an alkaline electrolyte of potassium
hydroxide. One battery type that goes by the name alkaline battery has a negative electrode of
zinc and a positive electrode of manganese dioxide. It generates 1.5 V.
    The primary                         in construction to the rechargeable type and has the same
operating voltage       6-8). This cell has extended life over a carbon-zinc cell of the same size.
CHAP. 61                                     BATTERIES                                               93




           Fig. 6-8 Manganese-alkaline
                    battery.     (From                       Fig. 6-9 Nickel-cadmium battery
                    Grob, p. 251.)                                    (From Grob, p. 253.)
Nickel-Cadmium
    In the secondary nickel-cadmium dry cell, the electrolyte is potassium hydroxide, the negative
electrode is        hydroxide, and the positive electrode is        oxide. The operating voltage
1.25V. These cells are manufactured in several sizes, including        button shapes, The nickel-
cadmium battery is the only dry battery that is a true storage battery with a reversible chemical
reaction, allowitlg recharging many times (Fig. 6-9). It is a rugged device which gives dependable
service under extreme conditions of shock, vibration, and temperature. Therefore, it         suited
for use in powering portable communication equipment such as a two-way radio.
Edison
    A lighter, more rugged secondary cell than the lead-acid              the Edison, or nickel-iron-
alkaline, cell. It operates at a no-load voltage of 1.4 V. When the voltage drops to 1.0 V, the cell
should be recharged. When fully charged, it has a positive plate of nickel and nickel hydrate and a
negative plate of iron. Like the lead-acid cell, the Edison cell also produces hydrogen and oxygen
gases. As a result the electrolyte requires filling up with distilled water.
Mercury
  There are two different types of mercury cells. One is a flat            that is shaped like a button,
while the other is a cylindrical cell that looks like a standard flashlight        The advantage of the
button-type cell is that several of them can be stacked inside one container to form a battery. A
typical battery is made up of three flat cells (Fig. 6-10). A cell produces 1.35 V.
    Mercury cells and batteries have a good shelf         and are very rugged. Because they produce
a constant output voltage under different load conditions, they are used in many different products,
including electric watches, hearing aids, test instruments, and alarm systems.




                                Fig. 6-10 A typical mercury battery
                                          (Courtesy NRI Schools.)
94                                            BATTERIES                                            [CHAP. 6


BATTERY CHARACTERISTICS

Internal Resistance
     A battery      dc voltage              All generators                          Ri. In
cell,                  of the                                                  for most of the cell's
internal             (Fig. 6-11). Since        current in the battery must flow through
resistance, Ri is in series with the            voltage V B (Fig. 6-12a). With no current, the voltage
drop across Ri is zero so that the                   voltage VB develops across the output terminals
(Fig. 6-12a). This is                                   no-load voltage. If a load resistance RL is
connected across the battery, RL is in series with Ri (Fig. 6-12b). When current IL flows in this
circuit,               voltage drop, ILRi, decreases                 voltage VL of the         so that
 VL = VB - ILRi.




                                 Fig. 6-11 Internal resistance in a cell




                                                                           VL (terminal voltage)


            (no-load



                       (4                                           (4
                                     Fig. 6-12 Internal I& drop




                                                Fig. 613
CHAP. 61                                            BATTERIES                                              95


Example 6.1 A dry battery has an open-circuit, or no-load, voltage of 1oOV (Fig.               If the internal
resistance is 100R and the load resistance is 600R, find the voltage VL across the output terminals.
     The battery is marked 1OOV because 1OOV is its open-circuit voltage. With no load, the load current
is zero. When load resistance RL is added, there is a closed circuit, and the load current is calculated by
Ohm’s law.
                                  IL=-- V                 100
                                                        = - = 0.143A
                                     Ri + RL - loo + 600 700
The internal battery drop is
                                           I&      = 0.143(100) = 14.3 V
so that the voltage at the battery’s terminal is
                                VI_ = Vs - ILRi = 100 - 14.3 = 85.7 V      Ans.



Specific
     The specific gruvity of any liquid is a ratio                         with the          of an equal
volume of water. Pure sulfuric acid has a specific             of 1.835 since it weighs 1.835 times as
much as water per
     The specific        of the electrolyte solution in a lead-acid                    1.210 to 1.300 for
new,                batteries. The                      gravity, the less internal resistance of the cell
and the higher the possible load current. As the cell discharges, the water formed
and the specific                   decreases to about 1.150, at which        the cell               to be
fully                                is measured       a hydrometer of the syringe type, which has a
compressible rubber bulb at the top, a glass barrel, and a rubber hose at the bottom of the
barrel. In taking                 a hydrometer, the decimal                                For example,
a specific         of 1.270 is read         as “twelve-seventy.” A hydrometer reading of 1210 to
1300 indicates full charge; about 1250 is half-charge;       1150 to 1200 is complete discharge.


Capacity
    The capacity of a battery is rated in ampere-hours            The capacity of a storage battery
determines how long it will operate at a given discharge rate. For           a 90-Ah battery must be
recharged after 9 h of an average 10-A discharge.
     A cell of a lead-acid              battery, when        charged, has an initial         of about
2.1 V at no load, but discharges           The battery is “dead” after about 2 h of discharging under
load condition. However, under normal use, this battery type is constantly recharged by the
alternator in the automobile.


Shelf Life
     The shelf life of a cell is that period of time during which the cell can be stored without
more than approximately 10 percent of its original capacity. The capacity of a cell is its ability to
deliver a given amount of current to the circuit in which              The loss of capacity of a stored
cell due primarily to the drying out of its electrolyte (wet                 to chemical actions which
change the materials            the cell. Since heat stimulates both these actions, the shelf life of a
cell can be extended by                in a cool, dry place.


Comparison of Types
    Table 6- 1 compares the types of cells described.
96                                             BATTERIES                                              [CHAP. 6


                                          Table 6-1 Types of cells

                                                      Primary                   Examples
                                  Volt-               Secondary                    and
                Name              age                    Type                 Characteristics

       Lead-acid cell              2.2                Secondary        Very low Ri and high
                                                                       current ratings; 6-
                                                                       and 12-V batteries
       Carbon-zinc cell            1.5                Primary          AA, A, B, C, and D size
                                                                       flashlight batteries;
                                                                       lowest         short
                                                                       shelf life; low current capacity
       Manganese-alkaline cell     1.5                Both types       Manganese dioxide
                                                                       zinc in hydroxide;
                                                                       rents
       Nickel-cadmium cell         1.25               Secondary        Hydroxide
                                                                       constant
                                                                       versible
                                                                       reaction;       in re-
                                                                       chargeable flash-
                                                                       lights,
                                                                       power tools
       Edison                      1.4                Secondary        Nickel and        in hy-
                                                                       droxide;
                                                                       uses
       Mercury cell                1.35               Both types       Mercuric
                                                                       zinc in hydroxide;
                                                                       constant
                                                                       long shelf life; B bat-
                                                                       teries; miniature
                                                                       button        for hear-
                                                                       ing aids, cameras,
                                                                       watches,




                                          Solved Problems
6.1   Write the word or          which most correctly
      (4 A                   consists of                             or more cells               in series
          parallel.
      (b) A chemical               basically of                           electrodes of different            of
          metals metallic compounds                      by an
      (c) Cells which cannot be effectively                 are called                       cells.
CHAP. 61                                                BATTERIES                                                   97


      ( d ) A cell or a battery is recharged                       current through                      in a direction
                               to the direction of its discharge current.
      (e)     In order to obtain                        are connected in
      Ans. (a) battery, two; (b) two,                          (c) primary;    ( d ) opposite; (e) series


6.2   Match the type of cell in column 1 to its characteristic in column 2 (use a letter once only)
                            Column 1                                 Column 2
                   1.   Lead-acid                       (a) Long shelf life
                   2.   Carbon-zinc                     (b) 1.44 voltage
                   3.   Nickel-cadmium                  (c) Automobile battery
                   4.   Edison                          (d) Inexpensive flashlight cell
                   5.   Mercury                         (e) Potassium
                                                        cf) 3-V voltage
      Ans. 1. (c)       2. ( d ) 3. (e) 4. ( b ) 5. (a)


6.3   A 6-V battery is temporarily                                The short-circuit current Isc is 30 A. What is
      the internal resistance?
            The battery rating of 6 V in this case         the open-circuit,                       So



      Note that the              of internal                              current from becoming very high.


6.4   A battery has a 12-V output on                               which drops to 11.5 V with a load current of
      1 A. Find the internal
                           Open-circuit             = internal                   + terminal
                                   VB               -            ILRl            +       VL
      Solving for Ri,
                                          I*,   =   ve - VL

      We see that the internal            of any battery                be calculated by determining how much the
      output        drops for a specific amount of load


6.5   A discharged storage battery of three cells connected in series has an open-circuit     of
      1.8 V per       Each cell     an internal resistance of 0.1 R. What is the minimum voltage
      of a charging battery to produce an initial         rate of 10 A?
                         Charging battery voltage = battery voltage + internal                   drop
                                                                                 18V
                                                          in series) = 3 cells x -= 5.4V
                               Battery
                                                                                 cell
                                   Internal               drop = IRi = lO(3 x 0.1) = 3 V
      Then,
                                 Charging                      = 5.4   + 3 = 8.4 V       Ans.
98                                                      BATTERIES                                            [CHAP. 6


6.6    A lead-acid battery is       at 200Ah. Based on an 8-h discharge,                                            load
       current can    battery supply?
             In                                    Capacity = amperes x hours
                                                                          capacity
       Then,                                  Load current (in amperes) = -
                                                                           hours

       and                                    Load current = -
                                                             2oo = 25A          Ans.
                                                              8


6.7    What is the no-load voltage across four carbon-zinc                    in series?
                                          Voltage = 4 x no-load voltage of a single cell
                                                  = 4(1.5) = 6 V      Ans.


6.8    What         the specific gravity of a                with equal parts of sulfuric            water?
           A solution with equal parts of sulfuric                              weight equally
       sulfuric              (that is, each accounts for one-half           weight of the solution). If pure
       acid has a                of 1.835, then
                                                    1           1
                     Specific gravity of solution = - (1.835) + 5 (1) = 0.918 + 0.500 = 1.418         Ans.
                                                    2




                                          Supplementary Problems
6.9    Write the word or
       (a)    A cell        converts                      energy                         energy is called a
              cell.
       (b)    A      in which the electrolyte     liquid is                     to as a                  cell, while a
              cell in which the                in a                 called a                    cell.
       (c)    Cells             be effectively              are called                   cells.
       (d)    When charging cell or a battery, its                           is connected
              terminal of the                                                              to the
               terminal of the charger.
       (e)    In order to obtain            current capacity,                         in
       Ans. (a) chemical, electric; (b) wet, dry; ( c ) secondary; ( d ) positive,                   (e) parallel


6.10   Match the type of cell in column to its characteristic in column
                                          Column 1                      Column
                                1. Lead-acid                  (a)   Nickel-iron-alkaline
                                2. Carbon-zinc                ( b ) 12-V battery
                                3. Nickel-cadmium             ( c ) Secondary dry battery
                                4. Edison cell                ( 4 1.5-V primary
                                5 . Mercury                   (4 5-V battery
                                                              U) Ideal for transistorized
                                                                    equipment

       Ans.       1. ( 6 ) 2. ( d ) 3. ( c ) 4. (a) 5. (f)
CHAP. 61                                             BATTERIES                                            99


6.11   Fill in the missing quantities (Fig. 6-14).




       Ans.

                                                                                             ~-


                                                                                      Fig. 6-14




6.12   The                   VL drops as the load current It increases.         a 12-V battery
       resistance of 1 R, we vary    load resistance      a very high value to zero in order            how
       the terminal               with changing load current. Fill in the missing values of the




       Ans.     V B ,V     Ri, a

                ....        ....
                ....
                ....
                ....
                           ....
                           ....
                           ....
                                      . . ..
                                      - . * .   I       10
                                                         6       I :'" I im2I                10.8
                                                                                             10


                ....       ....
                ....       ....



6.13   For Prob. 6.12 make a plot with terminal              V L as the          and load current IL as the
       abscissa.
       Ans. See Fig. 6-15. The plot is a straight              V L is a maximum when           is open (ILis
       zero) and a minimum when the          is shorted (IL is a maximum).
100                                                  BATTERIES                                                    [CHAP. 6


                                   ,Open     circuit




                                                                                             Short circuit

                                        2        4       6         8        10      I2

                                                       IL, A
                                                             Fig. 6-15
6.14   A 6-V lead-acid battery has an internal                 of 0.02 Cl. How much current will flow if the
       has a short circuit?    Ans. 300A

6.15   A new carbon-zinc                     of 1.5 V. A                   made up of 30 cells        in series
       so that its no-load voltage            15 percent.                   is the no-load voltage of the cell and
       battery?    Ans. 1.28V, 38.2V

6.16   What         specific gravity of the          of a lead-acid battery with one-fourth                           acid
       and                 part water? Would a                         of that solution
       half-charge,                    Ans. 1.209,full charge

6.17   How many cells are necessary                      battery with double    voltage and current rating of a
       single cell? Draw a                               Ans. Four cells;    Fig. 6-16.




                                                             Fig. 6-16

6.18   Draw pictorial                                                  12-V lead-acid batteries being charged by a 15-V
       source. Show the direction       current during                     Ans. See Fig. 6-17.



                                                                                         I-rl
                                                                                 15 V +- T      :2   V - 1   2:    V - r


             15 V                12 v                    12 v

                             L

                                                             Fig. 6-17
                                                                           Chapter 7

                                   Kirchhoff’s Laws
KIRCHHOFF’S
    Kirchhoff’s voltage law states that the voltage applied to a closed circuit equals the sum of the
voltage drops in that circuit. This fact was       in the study of series circuits and      expressed
as follows:
                                Voltage          = sum of voltage drops
                                              VA = vl + v2 + v3                                     (7-0
where VA is the applied            Vl, V2,and V3 are voltage drops.
    Another way of stating KVL is that the                  of the voltage       and voltage drops
must be equal to zero. A voltage source or emf is considered a voltage rise; a voltage across a
resistor is a voltage drop. Often for convenience in              letter subscripts are shown for
voltage sources and          subscripts for voltage drops. This          of the law can be written
by transposing the right        of Eq. (7-1) to the left side.
                               Voltage         - sum of voltage drops = 0
Substitute letters:


or
Using a new symbol, Z,the Greek capital letter sigma, we have
                                     2 v = VA - vl - v2 - v3 = 0                                    ( 7-21
in which 2 V, the algebraic sum of all the voltages around any closed circuit, equals zero. Z
means
    We          a + sign to a voltage rise and a - sign to a voltage drop for the 2 V = 0 formula (Fig.
7-1). In tracing voltage drops around a circuit, start at the negative                   of the voltage
source. The path from the negative                  to the positive             through the source is a
voltage        We continue to trace the circuit from the positive                       all resistors and
back to the negative terminal of the source. In Fig. 7-1 if we start at point a, the negative
of the battery, and         around the circuit in the direction abcda, we go through VAfrom - to +
and V A= + 100 V. If we start at point b and             in the opposite direction badcb, we go through
VAfrom + to - and VA = - 100 V. The voltage drop across any resistance will be                      (-) if
we trace it in the + to - direction. Thus in Fig. 7-1, if we trace the circuit in the direction
abcda, V, = -5OV, V2 = -3OV, and V3 = -2OV. The voltage drop will be positive (+) if we

                           b      v, = 50 v          C

                                    + R I -

                       +                                            c v = ( - v, - v z - v3
                                                 -
                                                                        =o
                                    - R3 +




                                                     101
102                                           KIRCHHOFF’S LAWS                                          [CHAP. 7


go through the resistance in the - to + direction. So in tracing the circuit in the direction abcda,
we have
                                                             zv=o
                                             V A - v1 - v2 - v3 = 0
                                             100 - 50 - 30 - 20 = 0
                                                                o=o
Example 7.1 Determine the direction of voltage                       abcda (Fig. 7-2), and                      the
expression for voltages        the circuit.
    Assume            of current as shown. Mark the + and - polarities of each resistor.
      VA is         source (+). (It is a              in the current direction
      Vl is         drop (-). (It is decrease in the direction
      Vz is         drop (-). (It is a decrease in the direction assumed.)
      VB is         source (-). (It      decrease in voltage in the current direction
      V, is         drop (-). (It      decrease in the direction
                                                                 zv=o
                                        + v, - VI -   v2   - VB - v3 = 0
Group the voltage           the voltage drops.
                                             VA - (VI + v2 + v3 + VB)
Notice that the voltage drops include              source Ve. Ordinarily source would be              In
case the polarity of the source is                 the assumed         of current. Therefore, its effect to
decrease the voltage.

          b            v2               C
                                                                              v, = 3 v



                                                                 +                                  Vz = 6 V

                                                                                                    +


                                                                                  ...
          a            v3               d                            a         v3 = 2 v
      Fig. 7-2 KVL illustration with two                          Fig. 7-3 Finding a source voltage
               sources

Example 7.2 Determine the voltage VB (Fig. 7-3).
     The direction of current flow is        by the arrow. Mark the polarity of the voltage drops across the
resistors. Trace the circuit in the direction of current flow starting at point a. Write the voltage
around
                                                     zv=o                                                      (7-21
Use + and - rules for voltage
                                            VA - VI - v2 - VB - v3 = 0
Solve for VB.
                        VB = VA- V I - Vz- V3= 1 5 - 3 - 6 - 2 = 4 V                 Ans.
Since VB was found to be positive, the assumed               of current is in fact the actual direction of current.
CHAP. 71                                       KIRCHHOFF’S LAWS                                             103


KIRCHHOFF’S CURRENT LAW (KCL)
   Kirchhoff’s current law states      the sum of the currents entering a junction is equal to the
sum of the currents leaving the junction. Suppose we have six currents leaving and entering a
common junction            shown as P (Fig. 7-4). This common point is also called a node.




                                                 Common point, junction, or node
                                        Fig. 7-4 Currents at a common point

                       Sum of all currents entering = sum of all currents leaving
Substitute
                                          11   + 1 3 + I4+ l6= I2 + Is
If we consider                flowing toward a junction     positive (+) and those         flowing
away from the same junction    negative (-), then    law also states        algebraic sum of all the
currents meeting at a common junction is zero. Using the symbol 2,we have
                                                                                                          (7-3)
where Z I, the algebraic sum of all the currents at the common point, is zero.
                                         11 - I2   + 13 +   14   - 1s + 16 = 0
If the negative terms are transposed to the right side of the                            we would have the same
form as     original equation.

Example 7.3    Write the equation for current I, for part a and part b of Fig. 7-5.




                                  1(‘          FQ. 7-5 KCL illustration            (b)

    The algebraic sum of all currents at the node is zero. Entering currents are +; leaving currents are -.
    (a) +II- I2 - I3 = 0
                    I1 = I* + 1 3        Ans.
    (b) +I1 - 1 2 - 1 3 - 1 4 = 0
                          I1 = 12 + I 3 + 1 4        Ans.
104                                          KIRCHHOFF’S LAWS                                           [CHAP. 7


Example 7.4 Find the                         in part a and part b of Fig. 7-6.




                                      (4                                      (b)
                                            Fig. 7-6 Finding current

      The algebraic sum of all currents             is zero. Entering                are +; leaving       are -.
      (a) --I1 + 1 2 - I, = 0
                       I1 = 1 2 - I , = 7 - 3 = 4 A Ans.
      (b) +I1 + 1 2 - I, + = 0
                            L = -I,-I,+I,= - 2 - 3 + 4 =        -IA          Ans.
The negative           14 means that the                    of 14 is incorrect and that I4 is actually flowing away
from       P.


MESH CURRENTS
    A simplification of Kirchhoff’s       is a method that makes     of mesh or loop currents. A
mesh is               path of a circuit. It does not matter whether the path contains a voltage
source. In solving a circuit with           currents, we first                    paths will be the
meshes.          we assign a mesh current to each mesh. For convenience, mesh currents are
usually          in a clockwise direction. This direction is          but the clockwise direction is
usually assumed. Kirchhoff’s             law is then applied about the path of each mesh. The
resulting equations determine the unknown            currents. From these currents, the current or
voltage of any resistor can be found.

                                  C        + R, -       d       + R3 -           e




                              5




                                            Fig. 7-7 Two-mesh circuit

   In Fig. 7-7, we have a two-mesh                     1 and mesh 2. Mesh 1 is path abcda and
mesh 2 is path adefa. All voltage sources and resistances are known. A procedure for finding
mesh currents I , and I2 is as follows:
Step 1. After the meshes are selected, show the direction of mesh currents I, and I2 in a clockwise
        direction. Mark the voltage           across each resistor, consistent with the assumed
CHAP. 71                                   KIRCHHOFF'S                                                      105


          current. Remember that conventional current flow in a resistor
          where    current enters.
Step 2. Apply Kirchhoff's voltage law, 2 V = 0, around each mesh. Trace each mesh in the
        direction of mesh current.          that there are two          currents (Il,Id flowing in
        opposite                                        R2, which is common to both
        this            sets of polarities are shown by R2 (Fig. 7-7). Trace mesh 1 in direction
        abcda.




          Note that in the first expression 12R2is + since we go through a voltage drop from - to +.
             Trace mesh 2 in direction adefa.



          Note that IlR2is a + voltage drop since we go through a voltage drop from - to +.
Step 3. Find Il and I2 by solving Eqs. (1) and (2) simultaneously.
Step 4. When mesh currents are known, find all resistor voltage drops by using Ohm's law.
Step 5. Check the solution of mesh currents by tracing mesh abcdefa.


Example 7.5 Given V A = 58 V, V B = 10 V, R I = 4n, R 2 = 3 0,and R , = 2 R (Fig. 7-8a), find all mesh
currents and     drops in the

          C        4      -     d      + R 3 -         e                                    d




  = 58                                                                     I , = 10                     = 4 A

                                                                                                        I, = 6 A



          b                     a                     f                                     a

                               (a)                                                         (b)
                              Fig. 7-8 Finding mesh currents and

Step 1. Choose                 or meshes              Show mesh current in the clockwise                  Show
        polarity       across each resistor.
Step 2. Apply Z V = 0 in mesh 1 and            2 and trace the mesh in the direction of mesh current.
         Mesh 1, abcda:                        +58 - 411 - 311 + 312 = O
                                                         +71, - 312 = 58
         Mesh 2, adefa:                        311 - 312 - 212 - 10 = 0
                                                          311 - 512 = 10
         Note that mesh currents I1and I2flow through the common              R2.
106                                            KIRCHHOFF'S LAWS                                       [CHAP. 7


Step 3. Find II and l2by            Eqs. ( 2 ) and (2) simultaneously.
                                                        711 - 312 = 58                                       (1)
                                                        311 - SI2 = 10                                       (2)
          Multiply Eq. ( 2 ) by 5 and multiply Eq. (2) by 3, getting Eqs. (Za) and (2a) and     subtract Eq. (2a)
          from Eq. (Za).




          Substitute II = 10 A in Eq. (1) to find 12.
                                        7I1 - 312 = 58
                                      7(10) - 312 = 58
                                               -3I2 = 58 - 70
                                                      70 - 58 - 12
                                                  12=---=                   4A           Ans.
                                                         3      3
          The current through          da is
                                         I& = I I - I 2 =    10-4=6A                Am.
          In       case the                  current direction was correct because        current values are
          positive. If the current value                     true direction would be opposite to the assumed
          direction of current. (See Fig. 7-8b.)
Step 4.   Find all voltage
                                    VI = IIRI = 1q4) = 40V        Ans.
                                    V2 = (11 - I2)RZ = 6(3) = 18V      Ans.
                                    V3 = 12Rj = 4(2) z= 8 V      Ans.
Step 5. Check mesh current solution by tracing              abcdefa and              KVL.
                                            v* - VI -       v3   - Ve = 0
                                                58-40-8-10=0
                                                      58 - 58 = 0
                                                                    0=0          Check




NODE VOLTAGES
     Another method for solving a         with mesh currents          voltage drops to specify
currents at a node. Then node equations of currents are written to satisfy Kirchhoff's current
law. By solving the node equations, we can                  unknown node voltages. A node is a
common connection         two or more components. A principal node has                   more con-
nections.           node in a               or number is assigned. A, B, G, and N are nodes, and
G and N are principal nodes, or junctions (Fig. 7-9). A node ooltage is the voltage of a given node
with respect to one           node called the reference node. Select node G connected to chassis
ground as the           node. Then V A G is the voltage between        A and G, VBG is the voltage
between         B and G,and VNG is       voltage between        N and G. Since the node voltage
is always determined with respect to a specified reference                      VA for VAG,V B for
 VBG, and V N for VNo are used.
     With the          of the reference node, equations using KCL can be written at each principal
node. Thus         required number of equations is one                       number of principal
CHAP. 71                                 KIRCHHOFF'S LAWS                                          107


                               A      + R, -




                                                        *
                                   Fig. 7-9 Nodes in a two-mesh circuit

nodes. Since               shown (Fig. 7-9) has two principal nodes (N and G), only one
need be written at node N to find all voltage drops and currents in the
    Assume that branch            I1and Izenter node N, and I3 leaves      node (Fig. 7-9). The
selection of the direction of the         is arbitrary. From KCL,
                                                       Zf = o
                                          r1+ f2- r3 = o
                                                  r3 = + f2
By Ohm's law,

                                                I3 =
                                                       VN
                                                       -
                                                        R2




Substitute                     into Eq. (1).



If VA,VB,RI, R2, and R3 are known, VN can be calculated from Eq. (2). Then all voltage drops
and currents in the          be determined.

Example 7.6 The           of Fig. 7-8 (Example 7.5) solved by the method of branch       is redrawn in
Fig. 7-10. Solve by node-voltage analysis.




                              -T
                    5 = 58V                                                  VB = 10 v



                               1 T-
                                                   v2


                                                             ;I3
                                       Mesh 1


                      Fig. 7-10 Node-voltage analysis for same circuit as in Fig. 7-8
108                                       KIRCHHOFF’S LAWS                                      [CHAP. 7


Step 1. Assume the direction of currents shown (Fig. 7-10). Mark           A, B, N,and G. Mark the voltage
        polarity across each resistor         with assumed              of current.
Step 2. Apply KCL at principal        N and             for VN.
                                                 I3 =   I1   + I2



        Clear fractions by multiplying each term by 12.
                                           4vN = 3(58 - VN) + 6(10 - VN)
                                           4 v =~ 174 - 3 v +~ 60 - 6 v ~
                                          13VN = 234
                                            VN = 18V
Step 3. Find             drops and currents.
                                    VI = VA - V N = 5 8 - 18 = 40V           Ans.
                                    V 2 = VN = 18V        Ans.
                                    V3=VB-V~=l0-18=-8V                           Ans.
        The negative        for V3 means I2 is flowing opposite to the assumed           the polarity of Vf
        is the reverse of the signs       across R3 (Fig. 7-10).

                                                   = 10A
                                       I 1 = - L -40              Ans.
                                            RI 4
                                            v =-
                                       I2 = 3     -8 = -4A
                                                                   Ans.
                                            R3     2
                                       I3 = I, + I2 = 10 - 4 = 6 A      Ans.



        All calculated             with those of Example 7.5.



                                          Solved Problems
7.1    Find the signs of the voltages when tracing the mesh ufedcba and write the expression for
       KVL (Fig. 7-11).




                                          -v.4
                                       Fig. 7-11 Tracing
CHAP. 71                                 KIRCHHOFFS LAWS                                              109


           Assume directions of current flow as indicated. Mark the                     across each
           V3 is - since we go through a voltage drop + to -.
           Vc is - since we go through a voltage rise + to -.
           V2 is - since we go through a voltage drop + to -.
           VB is - since we go through a voltage rise + to -.
           VA is + since we go through a voltage      - to +.
           V1 is - since we go through a voltage drop + to -.




7.2   Find I3 and I4(Fig. 7-12).
                                            a
                                            v                   -
                                                                b

                                   __j           +
                           +
                                                                             b

                           V                                                 ;I3 = ?



                                            -                   -       ~~




                                   Fig. 7-12 Finding currents by KCL

         Apply KCL, 2 I = 0 at node a.
                                   30 - 12 - 14 = 0
                                             14 = 30 - 12 = 18 A                 Ans.
      Apply KCL, 21 = 0 at node b.
                                     18 - 10 - I3 = 0
                                                1, = 18- 10 = 8 A            Ans.
      Check
                                                IT     + 12 + I3
                                                     = I1
                                                30 = 12 + 10 + 8
                                                30 = 30             Check

7.3    Solve the two-mesh circuit for all mesh currents (Fig. 7-13).




                               5 = 85

                                                            a
                               Fig. 7-13 Two            with voltage             in
                                         middle leg
110                                      KIRCHHOFF'S LAWS                                 [CHAP. 7


      Step 1. Show mesh currents in clockwise direction.
      Step 2. Apply Z: V = 0 for mesh 1 and mesh and trace each mesh from a in the direction of mesh
              current.
              Mesh 1:                     85 - 1011 - 45 = 0
                                                    101, = 40
                                                       I1=4A      Ans.
               Mesh 2:



      Step 3. Check by tracing the loop of mesh 1 and 2 by using Z: V = 0.
                                             V A- IlRl - 12R2 = 0
                                             85 - 4(10) - 9(5) = 0
                                                 85 - 40 - 45 = 0
                                                           85 - 85 = 0      Check

7.4   Find all mesh currents and voltage drops for the two-mesh circuit shown in Fig. 7-14.




                                +
                                     r      5n            +
                                                                    15n




                                -


                                                      '4 T 4


              Mesh 1, abcda:



              Mesh 2, adefa:

      Step 3. Find 1, and I2by solving Eqs.( I ) and (2) simultaneously.
                                                      -1011 + 512 = 80
                                                        511 - 4012 = -190


              Multiply Eq.(2) by 2 to get Eq. (Za); then add.
                                                     -101~+ 5r2 = 80
                                                       101, - 8012 = -380
                                                            -7512 = -300

                                                          300
                                                   12 =   -
                                                          75
                                                              =4         Ads.
CHAP. 71                                    KIRCHHOFF'S LAWS                                                            111


                Substitute I2 = 4 A in Eq.(1) to find II.
                                                    -101, + 5(4) = 80
                                                                -1011 = 60
                                                                    I1 = - 6 A           Ans.
                The negative sign means that the assumed                      for II was     correct. II is actually
                going in a                                                    ad, I, and I2 are going in the same
                direction. Therefore,
                                             lad   = I1   + 12 = 6 + 4 = 10 A         Ans.
      step 4.   Find the voltage
                                            V1 = IlRl = 6(5) = 30V         Ans.
                                            V2 = ( I , + I2)R2 = 1q5) = 50V      Ans.
                                            V3 = IzR3 = 415) = 60V          Ans.
                                            V4 = I2R4 = 4(20) = 8 0 V       Ans.
      Step 5. Check. Trace the loop abcdefa (use the original                                   for I , and 12).
                                            +vA - r,R, - - I ~ =Ro ~
                                                                1 2 ~ 3

                                        110 - (-6)(5)- 4(15) - 420) = 0
                                                      110 + 30 - 60 - 80 = 0
                                                               140 - 140 = 0         Check

7.5   Find the voltage V2 across R2 by the method of node-voltage analysis                             7-15a).




                                                                             = 6 V




                              (4) Circuit                                                  (b) Closed path GBG
                            Fig. 7-15 Finding V2 by the                         method

      Step 1. Assume               of currents shown.                                    Show             A, B, N, G.
      Step 2. Apply 2 I = 0 at principal              N.
                                            I3   = I , + I2                                                             (1)




      We are unable to determine V B by                       in Eq. (Zc) because           drop V4 is            (Fig.
      7-150). So we use KVL to find V B by                    the complete                G to B in the direction of I2
      (Fig. 7-15b). GBG is                                     V B is the voltage at B with        to ground.
112                                          KIRCHHOFF'S LAWS                                        [CHAP. 7


                                                - 6 - 212 - VB = 0
                                                            VB = -6 - 212
      Substitute               for VB into      ( 1 c),
                                                          -6 - 212 - VN
                                                   12 =
                                                                4
      from         we obtain



      Substitute     three expressions for current into Eq.( 1 ) .



      Now Eq. (2) has one                 VN.
      Step 3.   Find V2 ( V2 = VN). Multiply each member of Eq. (2) by 24.
                                                12vN = (36 - 3vN) + (-24 - 4 v N )
                                                19VN = 12
                                                        I2
                                                  VN = 3 = 0.632V
                                                   Vz = VN = 0.632V       Ans.


7.6   Write the mesh equations for the three-mesh circuit (Fig. 7-16). Do not solve.

                                    2fl                   4fl               6fl




                    20 v                                                                  5v




                                          Ng.7-16 A three-mesh

          Show mesh currents in clockwise                       Trace loops in assumed         of current, using
      KVL, Z V = 0.
      Mesh 1:                                        20 - 211 - 311 + 312 = 0                                (1)
      Mesh 2:                                -412 - 512 + 5 1 3 - 312 + 311 = 0                              (2)
      Mesh 3:                                       -6I3 + 5 - 513 + 512 = 0                                 (3)
      Combine                   terms in each equation.
      Mesh 1:                               20 = 51, - 31,      Ans.
      Mesh 2:                                0 = -31, + 1212 - 5 1 3      Ans.
      Mesh 3:                                5 = -512 + 1 1 1 3      Ans.
      A set with any            of simultaneous          for any                  of meshes,           by using
      determinants.                    is shown in mathematics
CHAP. 71                                     KIRCHHOFF'S LAWS                                                  113


                                       Supplementary Problems
7.7    Find the unknown                          in Fig. 7-17a and b .      Ans. (a) I = 8 A; (b) Ve = 10 V
                                                                               2v




7.8    Find the series current and   drops across R I and R2 (Fig. 7-18).
       Ans. I = 1A; VI = 1OV; V 2 = 20V



           *-ii-&-l+
                                                                               1OV          4 0       15 V

          +


                                        T-
 VA = 40 V-


          -1
                                             Vc = 50 V         R = ?

                          -,,,,+
                         VB = 20 v                                                      VG = 115 V
                         Fig. 7-18                                                      Fig. 7-19

7.9    A current of 6 A flows in the          (Fig. 7-19). Find the value of R.          Ans. R = 5 0

7.10   Find 12,G, and V A (Fig. 7-20). Ans. I2 = 6 A; Is = 2 A; V,, = 152 V




                                              i6Q3           120 v                                           i33




                                                                             12 3                    sn
                         Fig. 7-24)                                                 Fig. 7-21

7.11   Find mesh currents II and I2 and all voltage drops by the mesh-current (Fig. 7-21).
       Ans. II = 5A; I2 = 3A; V 1= 30V; V 2 = 30V; V3 = 6OV; v, = 6 v ; v, = 9 v ; v6 = 15v

7.12   Find                through the resistances by the mesh-current              (Fig. 7-22).
       Ans.   I1 =   3     I2 = 1 A; I , - IZ = 2 A (flowing from U to b)
114                                         KIRCHHOFF'S LAWS                                        [CHAP. 7


               4 0        a          10                                             a



                               r                                                                         0

 25 V                          5 0            6Q

                                                                                                         10 v




                10         b
                      Fig. 7-22
                                     30                                             b
                                                                                        T-
                                                                                Flg. 7-23
7.13    Find     current in each resistor, using the mesh-current        (Fig. 7-23).
        Ans. I, = 2 A; I, = - 1 A (current direction                                   I2 = 1 A in counter-
        clockwise             I, + Iz = 3 A (flowing from a to b)
7.14    Find currents I , and IZ and the current through        20-V battery using the mesh-current
        (Fig. 7-24).   Ans. I, = 2 A; I2 = 5 A; Iz - I, = 3 A (flowing         b to a)
                          a                                              30 0       a




                                                             10 0

 22




                          b                                                         b
                      Fig. 7-24                                                 Fig. 7-25
7.15    Find currents II and Iz and the current through               in series       20-V battery      7-25).
        Use the mesh-current
        Ans. I, = -0.1 A (direction                             I, is actually going in the counterclockwise
        direction); I2 = 0.7 A; II + Iz = 0.8 A (flowing from b to a)
7.16    Find currents I, and Iz and current through       20-42 resistor        to meshes 1 and 2 (Fig. 7-26).
        Use the                            Ans. I, = 0.6 A; Iz = 0.4 A; I, - Iz = 0.2 A (flowing from Q to b )
               10 Q        a         15 Q                                30         a




 20 v                                        t 200         28 V

                                                                                                         10 v




                          b                                               IQ        b
                       Fig. 7-26                                                Fig. 7-27
 CHAP. 71                                       KIRCHHOFF'S LAWS                                      115


7.17   Find all the currents in the circuit      by the mesh-current                  (Fig. 7-27).
       Ans. I , = 6 A; I2 = 7 A; I 2 - I , = 1 A (flowing from b to a )

7.18   Find all the currents and    drops by the method of node-voltage           (Fig. 7-28).
       Ans. I1= 5 A; I2 = - 1 A (opposite todirection shown); I3 = 4 A; V, = 60 V; V, = 24 V; V3 = 3 V




7.19   Find by the                     currents and voltage drops (Fig. 7-29).
       Ans. I1 = 1.42A; I2 = -1.10A (opposite to direction              I , = 0.32A; VI = 11.4V; V 2 =
       0.64v; v3 = 2 . 2 v ; vs = 4.4v

7.20   Write the mesh          for the circuit (Fig. 7-30). Do not
       Ans. 611 - 212 = 10; -21, + 812 - 213 = 0; -212 613 = -4  +
                                        20                 2Q                 2Q




7.21   Verify          of currents in circuit          in Fig. 7-23 (Prob. 7.13) by

7.22   Verify          of currents in circuit of Fig. 7-25 (Prob. 7.15) by the node-voltage




                                                                                                     ElOQ
                                                        ' 30 V                          -
                                                                                        - 15 v
                      0.83 A                                  -                        +
7.24   If the 20-R resistor (Fig. 7-3 1) is replaced                                  G
                                                                                Chapter 8

                          Network Calculations
Y AND DELTA NETWORKS
   The network in Fig. 8-1 is called a T (“tee”) or Y (“wye”) network because of its        T and




                                                             Y
                                                             y
Y are different names for the same network, except       in the Y network the R, and Rb arms form
the upper part of a Y.
                          a       Ra         Rb   b             a               b



                      T



                                         C                              C

                                        F’ig. 8-1 Form of a T       Y network
    The network in Fig. 8-2 is called a n (pi) or A (delta) network because its        resembles
these Greek letters; 27 and A are different names for   same network.




                              C                   C                      C

                                       Ng. 8-2 Form of a ?T or A network
    In analyzing networks it is helpful to convert Y to A or A to Y to simplify the solution. The
formulas for these                  derived from Kirchhoffs laws. Note that              in Y have
subscript        R,, Rb, and R,, while the            in A are numbered R1, R2, and R3.
    Resistances are shown in a three-terminal network with three terminals a, b, and c. After the
conversion formulas are        one network is equivalent to the                    have equivalent
resistances        any one pair of terminals.

A to Y Conversion, or lZ to T
    See Fig. 8-3.
                                              R, =     RIR3
                                                   RI + R2 + R3
                                              Rb =     RlR2
                                                   RI + R2 + R3
                                                       R2R3                                  (8-3)
                                              Rc = R1 + R2 + R3
Rule 1: The rule for A to Y conversion     be stated as follows: The             of any branch of
        the Y network is equal to the         of the two adjacent sides of the A network divided
        by the sum of the       A resistances.

                                                       116
CHAP. 81                             NETWORK CALCULATIONS                                           117


                                     a                             b




                                                    C

                                   Fig. 8-3 Conversion between Y
                                            and A networks

Y to A Conversion, or T to
    See Fig. 8-3.




Rule 2: The rule for Y to A conversion can      stated as follows: The resistance of any side of
        the A network is equal to the sum of the Y network resistances multiplied two at a time,
        divided    the resistance of the opposite branch of the Y network.
    As an aid in using Eqs. (8-1) to (8-6), the following scheme is useful. Place the Y inside the A
(Fig. 8-3). Note that the A has three closed sides, while the Y has three open arms. Also note
how each resistor in the open has two adjacent resistors in the closed               For R,, adjacent
resistors are R I and R,; for Rb, adjacent resistors are R I and R2;and for R,, adjacent resistors are
R2 and R3. Furthermore, each resistor can be considered opposite each other in the two
networks. For example, open arm R, is opposite closed              R , ; Rb is opposite R3; and Ra is
opposite R2.

Example 8.1 A A network              in Fig.        Find the           of an           Y network
8-4b) and draw the network.
    Place Y network within A network and find resistances       A to Y conversion rule (see Fig. 8-4c).

                                R, = R, +RIR3
                                          R2 + R3
118                                          NETWORK CALCULATIONS                                           [CHAP. 8


               a              R, = 4 8                b
                                                                          a                         b




                                                                                      C


                                 C


                        (a) A Known                                           (b) Y Unknown



               a              R, = 4 0                b           a                 R, = ?              b




                                 C                                                    C


                                 (c)                                                  (4
                                              Fig. 8-4 4 to Y conversion


The equivalent Y network is                       a                   b




                                                  Y       C                   Am.

Example 8.2 Given the calculated resistances of the Y network in Example 8.1, R,, = 1.2 0, Rb = 2 0,and
R, = 3n, confirm the values of equivalent resistances in the A network of R I = 4Q, R1 = IOQ, and
Rj = 6n.
     Place Y network within A network as in previous example and find A resistance by using Y to A
rule. (See Fig. 8-4d.)


                                                                 - 12 - 412
                       - 1.2(2) + 2(3) + 3(1.2) -- 2.4 + 6 + 3.6 -                           Ans.
                                         3                    3     3          -/
CHAP. 81                             NETWORK CALCULATIONS                                                     119



                                                                                                             (8-5)




                                            12 = 6 f i
                                           =-                 Ans.
                                              2
     The results show that the A and Y networks       8-4) are equivalent to each other when             three
resistance

Example 8.3 Use                         to find the                                 RT between a and d in a
bridge                   of two            8-5a).




  i
R, = ?
                                                          a     .




  I                  d                 C                                        b




                                                                                                a



                                                                     0.667 Cl




                                                                     3n                             3.67 Q




                                                                d



                          Fig. 8-5 Reducing bridge circuit by A to Y conversion
120                                    NETWORK CALCULATIONS                                                [CHAP. 8


Step 1. Transform A network abc into                        Y. Use        rule for A to Y conversion         8-5b).




Step 2. Replace the A with its Y equivalent           8-5c) in the            bridge circuit.
Step 3. Simplify the series-parallel             First, combine                                       R, and R4 are in
        series, and Rb and R5 are in                 8-5d(l)].
                                                  R, + R4 = 1 + 5 = 6 0
                                                  Rb+R5=2+4=60
            Next combine the parallel branches, R, + R4 and Rb + R5. Since the resistances
        8-5d(2)1,
                                                   R , = C -- 3 0
                                                         2
             Finally,                               Ra and R, [Fig. 8-5d(3)].
                                     RT = R, + R, = 0.667 + 3 = 3 . 6 7 0              Ans.

SUPERPOSITION
     The superposition theorem states that in a network        two or more sources the current or
voltage for any component      the algebraic       of the effects               each source acting
independently. In order to use one source at a time, all other sources are removed                the
circuit. A voltage source is                                  a short circuit. A current source is
removed                      an open
     In order to superimpose currents and               all the components must
bilateral. Linear means that the current is proportional to the applied          that is, the current
and         obey Ohm’s law, I = V / R . Then the currents calculated for different source voltages
can be superimposed, that is, added                  Bilateral means that the current is the same
amount for opposite            of the source voltage. Then the            for opposite directions of
current can be
Example 8.4 Find             currents 11,12,and I3by the superposition                 (Fig. 8-6a).
Step 1, Find the currents produced                 source V1 only.
             Replace          source V2 with a short circuit      8-6b). Use              V, after a
             to indicate that only source V1 is             the circuit. For example, Il.vlis current I, due
             only to source VI and 12,v1is current I2 due only to source VI.
             Combine                       resistances to                        single source and single
             resistance       8-6c). Solve for currents produced by V1.

                                     R4 = R I + -R2R3 = 1 + -1(1) = 1 + 0.5 = 1.5
                                                R2 + R3     1 + 1

                                                     IlJl   =   Rs = 1.5 --2 A
             Il.v 1 will divide                at point a because of equal                R2 and R3 (Fig. 8-6b) so that

                                       I2.vl =   - j1I 1 , v I = - -212 = - 1 A
                                                            1
                                       13.~1   = iZ1,vl = - 2 = 1 A
                                                            2
CHAP. 81                                   NETWORK CALCULATIONS                                                        121




  v, = 3 v                             n             <.-    V2 is short-circuited               -
                                                                                       v, = 3 v -
                                                                                                  ,I-
                                                                                                   +
                                                                                                             4 , v1
                                                                                                                      E   R.4



                                                                                                  -T

V , is short-circuited                                            v2 = 4.5 v
                                                                                        T{      12, v2

                                                                                                                v2 = 4.5 v




                t--                   f--
           I , , y2 = 1.5 A        12, v2 = 3 A




     1                        A




             The negative sign is used to show that 12.v1
                                                        actually                     a rather            enters point a as
             assumed.
Step 2. Find the currents produced            source V2 only.
           ( a ) Replace          source V, with a short circuit      8-6d). Use a subscript Vz after a comma to
                 indicate that only source V2 is           the circuit.              I , , V 2is current I , due only
                 to source V2.
122                                       NETWORK CALCULATIONS                                            [CHAP. 8


           (6) Reduce the             to a single source and a single resistance (Fig. 8-6e). Solve for
               produced by V2.




                  will divide symmetrically at point a (Fig. 8-6d) so that
               IzVv2
                                                          1
                                                 13, v2 = j 12, v2 = 2 3 = 1.5 A

                                                           1
                                                 I1,vZ = -212.v2 = - - 13    = -1.5A
                                                                         2
             The negative sign shows that 11,v2actually leaves point a and does            point a as
             assumed.
Step 3. Add algebraically the individual currents find the currents produced by both VI and V2 (Figs.
        8-6f and 8).
                                       rl = I    ~ + I.      ~~= 2,~- 1.5
                                                                      ~ =~0.5 A     Ans.
                                                    1 1 2 . ~ 2= - 1 + 3 = 2 A
                                       12 = 1 2 . ~ +                              Ans.
                                       I 3 = 4,v1 + 1 3 , v2 = 1 + 1.5 = 2.5 A      Ans.


THEVENIN’S THEOREM
     Thevenin’s theorem is method used to change a complex circuit                simple equivalent
circuit. Thevenin’s theorem states        any linear network of voltage sources and resistances, if
viewed from any two points in the               can be replaced by an equivalent resistance Rn in
series with an equivalent source VTh. Figure 8-7a shows the original linear network with terminals
a and b; Fig. 8-7b shows its connection to an             network or       and Fig. 8-7c shows the
Thevenin equivalent Vn and Rn that          be substituted        linear network at the terminals a
and b. The polarity of Vn is               will produce current      a to b in the same direction as
in the original network. Rn is the Thevenin resistance          the network terminals a and 6 with
each internal voltage source short-circuited. VThis      Thevenin voltage that would appear
the terminals a and b with the voltage sources in place and no load connected         a and b. For
this reason, Vn is also called the open-circuit voltage.




               I
  Linear                       I                                                                           External
 network           +RTh      ‘Th                                                                           network
                               I



               (4                                          (b)                                      (c)
                               Flg. 8-7 Thevenin equivalent, Vn, and series RW

Example 8.5 Find the Thevenin equivalent to                        terminals a and b (Fig. 8-8a).
Step 1. Find RW. Short-circuit the voltage source V = 10 V (Fig. 8-86). R l and Rz are in parallel.



Step 2.    Find Vn. Vn, is         voltage across terminals U and b, which is the same as      voltage drop
           resistance R2.
CHAP. 81                                  NETWORK CALCULATIONS                                       123


                         R,                    a                                             a



           +r            40                                                       4 0


 v = 1ov-
           -
             -                                          Short



                                               0
                                               b                                             b




                                     VTh = 6
                                               +L
                                                   -T

                                                                                  b

                                                         (c)

                                  Fig. 8-8 Thevenin                         load



                                          Vn, = Vz = IRZ
          Then                            V n = l(6) = 6 V          Ans.
          The Thevenin                     as in Fig. 8-8c.

Example 8.6 To the circuit in Fig. 8-8a, add             RL of 3.6 0 and find the current I L through the
load and        V L across the load.
    The new circuit as shown in Fig. &9a and with the Thevenin              as shown in Fig. 8-9b.

                              IL =     vm     = - = -6=              1A           Ans.
                                    R m + RL 2.4 + 3.6          6
                              V L = I&   = l(3.6) = 3.6V            Ans.




                                 3
Note how the Thevenin             simplified the solution of the given two-mesh network. Further, if the
load RL were         we would not    to recalculate the entire

                         R,




                                                                                                      T
              I          40


Y = 1ov
          +   I                                                                              3.6 0 VL = ?



          -I                          b
                                                                    -I
                                                                                         b


                                     Fig. 8-9 Thevenin                     load
124                                       NETWORK CALCULATIONS                              [CHAP. 8


NORTON’S THEOREM
    Norton’s theorem used to simplify a                in terms of currents          of voltages. For
current                             be used to reduce               to a simple parallel circuit with a
current         which supplies         line current           be divided among parallel branches.
    If the        I (Fig. 8-10) is  4-A  source,    supplies 4 A no               is connected
the                  a and   b.  With  nothing connected           a and b, all the 4 A flows through
shunt R. When a load resistance RL is connected                a and b, then      4-A current divides
according to the current-division rule for parallel branches.
                                                                        ia




                                      Fig. 8-10 I source with parallel R

    The symbol for a                  is a     with an arrow inside (Fig. 8-10) to show the
of current.                   must be the same as the             produced by the polarity of the
corresponding voltage source. Remember that                                       flow out from the
positive terminal.
    Norton’s theorem states          any network connected to terminals a and b [Fig. 8-lla(l)]
can be replaced by a single current              IN in parallel with a single resistance RN [Fig.
8-11a(2)]. IN is equal to                           through the ab terminals (the
network would produce              a and b with a                                  terminals). RN is
the             at terminals a and b, looking back from the open a b terminals. The value of the
single resistor is the same for both            and Thevenin equivalent circuits.




                                                  -
                                                                                   a



                     Linear
                    network                                 IN



                                                                                   b
                              (1)                                       (2)
                                    (a)    Norton equivalent, IN and parallel RN
                                                                 I




                                                                                            b

                                                    Fig. 8-llu, b
CHAP. 81                               NETWORK CALCULATIONS                                                   125


                     RI                        a

                     4 3


Short circuit                                   <-    R,         IN = 2.5 A


                                                                                                              -
                r                              0
                                               b
                                                                                               -
                                                                                               m
                                                                                                                  4
                                                                                                                  b




                                                                         a




                                                       R.,   k   2.4 3          R,   k 3.6 3

                                                                         b
                                                                                 'I
                                                      (4
                                                Fig. 8-llc, d, e



Example 8.7 Calculate the current IL(see Fig. 8-9a) by Norton's                                    in Example 8.6
by
Step 1. Find IN. Short-circuit across ab terminals (Fig. 8-1 1b). A short           across ab short-circuits RL
        and the parallel RZ. Then                     in the circuit is R , in series with source V.



Step 2. Find RN. Open                ab and                  V (Fig. 8-1 lc). R I and Rzare in parallel, so
                                               R N = -q6)
                                                      = - = 24           2.4R
                                                      4+6          10
           Note that RN is the same as Rn.
           The Norton                   as in Fig. 8-lld. The arrow on the current source shows the direction
           of conventional current from          a to terminal b, as in the original circuit.

Step 3. Find IL. Reconnect RL to ab terminals (Fig. 8-1 le). The current source still delivers 2.5 A, but now
        the current divides               branches RN and RL.



           This value is the same    current calculated in Example 8.6. Also, V L can be                as        or
           (1 A)(3.6 R) = 3.6 V.

    We therefore see that the Thevenin equivalent circuit (Fig. 8-12a) corresponds to the Norton
equivalent circuit (Fig. 8-12b). So a general         source with a series resistance (Fig. 8-12a)
can be converted to an equivalent current source with the same resistance in
8-12b). Divide the general source V by its series resistance R to find the value of I for the
equivalent current source shunted by the same resistance R ; that is, IN = Vn/Rn.
126                                           NETWORK CALCULATIONS                                      [CHAP. 8


                                 RTh                  U




          +   I
                                                      b                                                       b
                  (U) Thevenin circuit                                        (b) Norton circuit
                                              Fig. 8-12 Equivalent circuits

SERIESIPARALLEL CIRCUITS
    Many circuits           of a combination of series and parallel circuits. These combination
circuits    called series-parallel circuits. An example of a series-parallel circuit is shown in Fig.
8-13, where two parallel resistors R2and R3 are                in series with the resistor R I and the
voltage source V. In a circuit of this type, the current IT divides after flows through RI, and part
flows through R2 and part flows through R3. Then the current joins at the junction of the two
resistors and flows back to the negative terminal of the voltage source and through the voltage
source to the positive terminal.



                                               c
                                                                       T


                                          +                     r2J/       a
                                          -


                                                                               A




    In solving for values of current, voltage, and resistance in a series-parallel circuit, follow the
rules that apply to a series                            of the        and follow the rules that apply to
a parallel circuit         parallel part of the circuit. Solving series-parallel circuits is simplified if
all parallel and series groups are first reduced to single equivalent resistances and the
redrawn in simplified form.          redrawn circuit is called an equiualent circuit.
    There       no general formulas            solution of series-parallel circuits                    so
many different forms these circuits.

Example 8.8 Find the total resistance, total circuit current, and branch currents of the circuit shown in Fig.
8-14a.
                                   10 n




                                                           R,   3 24 0


                                   Original circuit                                Equivalent circuit
                                                          Fig. 8-140
CHAP. 81                                NETWORK CALCULATIONS                                                      127


                                10 a




                                                                            V                          18 fl




                                                        I   12A             I. I   I1




                                                       (4
                                                  Fig. 8-14b,C, d

    It is best to solve                     in steps:
step 1. Find the equivalent             of the parallel



        The equivalent                                            8-14b).
Step 2. Find the resistance of the equivalent
                                       RT = RI + Rp = 10 + 8 = 18 R                 Ans.
        The equivalent                   to a single voltage source and         single resistance (Fig. 8-14c).
Step 3. Find IT. (IT is the        current being supplied in the original series-parallel



Step 4. Find I2and 4. The voltage across R2 and R3 is equal to the applied voltage V less the voltage drop
        across R1. See Fig. 8-14d.
                                    V2 = V3 = V - ITR1 = 54 - (3 X 10) = 2 4 V

        Then                               I* = -
                                                v2= -
                                                    24 = 2 A           Ans.
                                                R2 12



        or, by KCL,




Example 8.9 Find the total             RT (Fig. 8-15a).
Step 1. Add series             in each branch (Fig. 8-15b).
        Branch ab:                             R1+R2=5+10=15n
        Branch cd:                             R3+R4=6+9=150
        Branch ef:                        R , + R a + R 7 = 8 + 5 + 2 = 15n
128                                  NETWORK CALCULATIONS                                            [CHAP. 8

                      a                  C                     e




                      b                  d                     f
                                Original circuit                                Equivalent circuit
                                                         (0)

                      a                  C                     e




                      b                  d                     f
                                        (b)
                                                       Fig. 8-15

Step 2. Find RT. Each of three parallel resistors is 15 a. See Fig. 8-15c.

                                              RT=-=-=              551   Ans.
                                                 N 3

WHEATSTONE BRIDGE CIRCUIT
    The Wheatstone bridge (Fig. 8-16) can be used to measure an unknown resistance R,. Switch
S2 applies battery voltage to the four       in the bridge. To balance the bridge, the value of R3
is varied. Balance is indicated by zero         in galvanometer G when switch S, is closed.




                                                                           Rx, an unknown resistor
               “T                                                    C     R l / R 2 , ratio arm
                                                                           R3, standard resistor




                                                   d
                                        Fig. 8-16 Wheatstone bridge

      When the bridge is balanced, points 6 and c must be at the same potential. Therefore
                                                   IxRx = IlRi                                             (1)
                                                   IxRJ= IlRz                                              (2)
CHAP. 81                                 NETWORK CALCULATIONS                                             129


Divide Eqs. ( 1 ) and (2). Note           Ix and I1cancel.




Solve for Rx.
                                                         RI
                                                    Rx = j p   3


    The ratio arm of the bridge is R1/R2. A rotary switching arrangement is used often in
commercial bridges to                  arm over a wide range of ratios. The bridge is balanced by
varying R3 for zero          in the meter. A decade box, where resistance can be varied in small
ohmic steps up to high as 10 Kfl, is commonly used as R3. The value of R, can be read directly
from the calibrated scale of the          when R3 is adjusted    balance.
    When current flows through the meter path bc, the bridge circuit is unbalanced and must be
analyzed by Kirchhoff’s laws or network theorems.

Example 8.10 An unknown resistance is be measured by the Wheatstone bridge. If the ratio of R J R 2 is
lll00 and R3 is 352R when the bridge is balanced, find the value of the unknown resistance.
    Substitute known values into Eq. (8-7).

                                                                              Ans.



MAXIMUM POWER TRANSFER
    The maximum power is supplied by the voltage source and received by the load resistor if the
value of the load resistor equals the value of the internal resistance of the voltage source (Fig.
8-17). For maximum power transfer, then


and power received at the load is
                                                                         V
                                   PL = 12RL         where         I =-
                                                                      Ri + RL


    Internal
   resistance
                                     b
                                         Load resistor

         ’V                                                        v = 10

                       Fig. 8-17                                                     Fig. 8-18


Example          If a 10-V Pattery has an internal resistance of Ri = 5 R, what is the maximum power that can
be delivered to the load resistor (Fig. 8-18)?
    For maximum power transfer,
                                    R L = R =5n
                                     I=-- V      - - =10
                                                       - = 10           1A
                                         R+RL 5+5          10
                                    PL = 12RL = 12(5) = 5W                  Ans.
130                                   NETWORK CALCULATIONS                                   [CHAP. 8


Example 8.12 For Example 8.11 prepare a table of values of power delivered to the load when the load
resistance RL is 1 Q, 3 Q, 4 Q, 5 a, 6 a, 7 Q, and 10 a.



                           RL, Q      Ri, Q       I =-              pL= I ~ R ~ , W
                                                     Ri + RL' A

                             1          5             1.67               2.79
                             3          5             1.25               4.69
                             4          5             1.11               4.93
                             5          5             1.oo               5 .oo
                                                                    (max. power)
                              6         5             0.91               4.97
                              7         5             0.83               4.82
                             10         5             0.67               4.49


Notice that when RL = R, = 5 a, the maximum power of 5 W is transferred to the load.


LINE-DROP CALCULATIONS
    The connecting wires are generally very short in electric circuits. Because the resistance of
these short lengths is low, it was neglected in previous calculations. However, in home and
factory electrical installations, where long lines of wires or feeders are used, the resistance of these
long lengths must be included in all calculations.
    The voltage drop across the resistance of the line wires is called the line drop. For example, if
a generator delivers 120 V but the voltage available at a motor some distance away is only 117 V,
then there has been a line drop in voltage of 3 V.
    We must be careful about specifying the kind and size of wires used in any installation. If the
wires are incorrectly chosen, then the line drop may be too large so that the voltage available to an
electrical apparatus will be too low for proper operation (refer to the section on wire measurement
in Chap. 4).

Example 8.19 A lamp bank consisting of three lamps, each drawing 1.5 A, is connected to a 12GV source
(Fig. 8-19). Each line wire has a resistance of 0.25Q. Find the line drop, line power loss, and voltage
available at the load.

                                    R, = 0.25 Q

                       1 - 4                                 I




Step 1. Find the line current fl.
                                    II = I1 + I2 + 1 3 = 1.5 + 1.5 + 1.5 + = 4.5 A
     CHAP. 81                                   NETWORK CALCULATIONS                                                 131


     Step 2. Find the               of the line wires RI. Since the line wires are in series,
                                                 & = RI + R2 = 0.25 + 0.25 = 0.5n
     Step 3. Find the line drop by Ohm's law.
                                                Vl = I&   = 4.5(0.5) = 2.25V           Ans.
     Step 4. Find the line power loss.
                                             A = I?Rl = (4.5)2(0.5)= 10.1 W             Ans.
     Step 5. Find voltage available at load.
                                     V L = Va   - Vi = 120 - 2.25 = 117.75 = 117.8 V             AnS.

     Example 8.14 A bank of lathes is operated by individual motors in a machine shop (Fig. 8-20). The motors
     draw a       of 60 A at 110 V from the distributing panel box. What is the smallest size copper wire required
     for     two-wire line between the panel box and the                 located 1OOft away, if the switchboard
     voltage is 115 V?
     Step 1. Find the line drop between the switchboard and the panel box.
                                                    Vi = V, - V L = 115 - 110 = 5 V
     Step 2. Find the line resistance RI for this drop.
                                                        Vl = &RI



     Step 3. Find the circular-mil area of the wire that has this resistance. Since there            two wires, I = 2L =
             2(100) = 200ft. Use 1resistivity formula to solve for        A of wire.

                               RI =

                               A=     e!
                                      RI
                                  P = 10.4      (from Table 4-2)      I = 200ft           RI = 0.0833In
                               A=

     Step 4. Find the gauge number of the wire whose circular-mil area is larger than 25 OOO CM. Refer to Table
             4-1. Read down column 3, circular-mil area, until you get to a number just larger than
             25 OOO CM. The number is 26 250 CM. Read left column 1 to find gauge No. 6.             Ans.




                                                                                                                     T
                                       VL = l l 0 V
                     L = loo ft.
                                                                               120 v
                                                                                               Neutral

'   Switchboard
                     IL = 6 0 A
                                                                                                 -
                                                                               120 v
                     L = looft                                                                               Black
                                        Panel box
                         Fig. 8-24                                        Fig. 8-21 Three-wire distribution system


     THREEWIRE DISTRIBUTION SYSTEMS
        The basic circuit described so far has been a two-wire circuit to a lamp, motor, or other load
     device. The basic two-wire circuit dses 120V to supply the many household and factory load
     devices designed for that voltage. The three-wire circuit was           to reduce the problems of
132                                    NETWORK CALCULATIONS                                     [CHAP. 8


voltage drop and power loss in the lines while still providing 120-V supply. The            wires of Fig.
8-21, including the grounded neutral,       be used for either 240 or 120 V. From either        or black
high side to neutral, 120 V is available for separate                 to the lights and           Across
the          black wires, 240 V is available for high-power appliances         as a freezer or automatic
clothes                120/240.V three-wire distribution with a grounded neutral is called the Edison
s ys tern.

The Edison System with Two Voltage Sources
    This system (Fig. 8-22) has two direct-current            GA and GB, with load voltages VLl
and VL2. Rl, R2, and R3 are the resistances of the line wires between                    and the
load. RL1and RL2are the load resistances. I , , 12,and I3are the        in the line wires.

                                   +             + R, -




                                   -
                                                   -    I3
                                                                         4
                              Fig. 8-22 Three-wire system with two voltage
                                        sources

    Il and I3 will always flow in the                        I2 may flow in either                       The
actual          of flow will be determined by the sign of 12. A + sign for I2means that              actually
flows in the                     while a - sign means I2 flows in the reverse
    By KCL and KVL, we can write




If the three wires are equal in size, as they usually are, their                are equal. So R = R1 =
R2 = R3.
     Equations (I), (2), and (3) can be solved to find the line currents.




                                I3 = I1 - I2                                                          (8-10)

Examp10 8.15 A three-wire 240/120-V circuit has line resistances of 0.5 il per line and load resistors RL1 =
10 R and RL2 = 5 il (Fig.8-23). V A and VB are 120 V each. Find the currents and voltages at the loads.
Step 1. Solve for It, Iz, and 13. Substitute known values into the line current equations.
                                RVB + VA(2R + RL3
                       = (R  + RLr)(2R+ RLJ + R(RL2+ R)
                       -
                       -      0.5(120) + 12q1.0 + 5)       - 60 + 720 - 780 - 11.9A           Ans.
                         (0.5 + lOXl.0 + 5) + 0.5(5 + 0.5) - 63 + 2.75 - 65.75
         81                                                                                                     133


                           +                        0.5   a

                          VA = 120 v
                                                I1 +                                           I
                                                                                              VLI
                                  I

                                                    0.5 il


                                  I                                                            I

                                                    -
                          VB = 120 v
                                  I                 0.5 Q                                      I
                                                              I3
                                                              Fig. 8-23



                      - 11.9(5 + 0.5) - 120 - -54.55 - -9.1 A                        Ans.
                                 1.0 + 5                      6
         I2                                                                      8-23).
                                   I3 = II - I2                                                               (8-10)
                                   I3 = 11.9 - (-9.1) = 11.9 + 9.1 = 21 A                      Ans.
                           I,
                                                                                                              120-V
                                                                          (RLI = RL2),                 no
         (I2 =
    2.                                     by
                                         VLI = IlRLl = 11.9(10) = 119V                      Ans.
                                         V L=~ I~R=  L ~21(5) = 105V                      Ans.
Example 8.16                                                                                          8-23.

                                                                            8-24).
                                                240
                                      I=                      240 15A
                                         0.5 + 10 + 5 + 0.5 = 16 =
                                   VLI = IRLI = 15(10) = 150 V     Ans.
                                   VL2 = IRL2 = 15(5) = 75 V      Ans.
                       150V                     10R
                                                                                                               31-V
         (150 - 119 = 31). For



                                            _3
                                                I


                                 240 V




                                                              0.5 fl
134                                    NETWORK CALCULATIONS                                                 [CHAP. 8


                                           Solved Problems
8.1   Reduce       bridge circuit (Fig. 8-25a) to a single equivalent input resistance at terminals a
      and d.

      Step 1. Convert Y network bcd to                equivalent A network. Use Rule 2 and visual aid. (See
              Fig. 8-25b.)

                                           R, = 10(10) + 10(10) + 10(10) = 300 = 30R
                                                           10               10

                                           R2 = -
                                                300 = 30R
                                                 10
                                                 - -~ O R
                                           & = -300
                                                 10

      Step 2. Redraw Y as          A equivalent and connect                           of the original circuit. (See Fig.
              8-25 c.)

      Step 3. Reduce the circuit. The two 10- and 30-R branches are in parallel. (See Fig. 8-25d.)




8.2   Find the                            RT and                    voltage V, of a            with a bridged T form
      (Fig. 8-26a).

      Step 1. Transform          T (or Y) network into its equivalent A. Use the rule for Y to A conversion
              (Fig. 8-266).

                                               RI = 2(2) + 2(2) + 2(2) = 12 = 6
                                                            2
                                               R2 = 12 = 6 R
                                                        2
                                               & = - l2
                                                     =          6R
                                                        2

      Step 2. Redraw T as its A equivalent and connect it to the remainder of the original circuit (Fig.
              8-26~).

      Step 3. Redraw the         to show more clearly the two parallel branches,      containing two 6-R
               resistances. Then reduce             until you get a single equivalent resistance RT (Fig.
               8-26d and e). Two 6-R resistances in parallel are equal to 6/2 = 3 R.
                                                                6
                                                      RT =      3 = 3R         Ans.

      Step 4. Solve for V by voltage distribution of lOV. Look at circuit (3) in Fig. 8-26d.
                      By the voltage-division rule,
                                                        3R
               V, = (resistance                = (3         +          ~ =~ 63 10 = 5 v
                                                                n ) ( V)                         Ans.
              4       10 n    b                                               b


                                   10 n                            10 n
                                              10 n
            R, = ?

                                   10 n                            10 n


              0
              d              d

                                   (4




                                                     io n
                                                     C



                                                     10 n

                  0
                  d           d
                             (1)




U   10Q b                                 U    10n b                      U   100 b




                         C




d          d                              d              d                d       d
            (3)                                              (4)                        (5)


4   10 n                b                 4    10 Q                       4
                                                                          0




                                                                          *

                                                                          0
                                                                          d
                                                                                  (8)




                                                             135
                                                  a                     C




                                6 Q V'=?
10




                         ...
              I          6Q                 I




         6Q                                             a     3 Q   c
     7

                                           10 v




     d                                                  d
                                                        (3)



                   a                                    a




                  d                                     d
                  (4)                             (5)

                              (d

                        Mg. 8-26

                          136
CHAP. 81                                        NETWORK CALCULATIONS                                              137


8.3       For a two-delta bridge circuit (Fig.8-27a), find the values of current through all the resistors.
                                                                                   a




                               .Vr = 30 V




                      a                                                                             a
                                                                 0
                                                                     ___,
                                                                      4


                                                         Y, = 30V
                                                                            4 - 13



                                                             0
      C                                     b



                                                     a                                 a


                                                         1.5 n




           9    d
                       1  I3
                       Rb i- R4




                                                7n
                                                -
                                                 2
                                                     d
                                                         3.5 n




                                                   = 3.5 a
                                                                                       d

                                                                            3.5 n + 1 . 5 n = 5 n

                                                                                       (3)
                                                                                                        d




                                                                                                            (4)
                                                                                                                  5n
138                                    NETWORK CALCULATIONS                                          [CHAP. 8


      Step 1. Find the equivalent                                      a and d.
               (a) Transform A abc to its equivalent Y (Fig. 8-27b).



               (b) Connect the Y equivalent              to the                    (Fig. 8-27c).
               (c) Reduce the series-parallel            to its equivalent          8-27d).
      Step 2. Find ll and 4.



               II divides               the two 7-R parallel branches so that




      Step 3. Solve for I2 by KVL, 2 V = 0. Trace circuit abca in the                                 8-27a).
                                             -12R1 - (12 - 1 3 ) R 3 + ( 1 1 - 1z)R2 = 0
               Substitute R I = 9i2, R2 = 3i2, R3 = 6 R , I1 = 6 A , and l3 = 3A.
                                            -912 - (I2 - 3)(6)    + (6 - 1&3) = 0
                                                  -912 - 612 + 18 + 18 - 312 = 0
                                                                 -1812 + 36 = 0
                                                                           -1812 = -36
                                                                               12=2A
      Step 4. Show currents through                                   8-27a).
                                               11 - 1 2 = 6 - 2 = 4 A             Ans.
                                                                  2A
                                                              I 2 =               Ans.
                                               I1 - I 3 = 6 - 3 = 3 A             Ans.
                                               12 - 13 = 2 - 3 = - 1 A             Ans.
                                                              I 3 =   3A          Ans.
               The negative sign for I2 - 1, indicates that the current actually flows in the         of c to b.


8.4   The superposition principle can be applied to a voltage-divider circuit with two
      8-28a). Find V,,.
          The method is to calculate V, contributed by each source separately
      these voltages algebrai-cally.
      Step 1. Short-circuit G2 and find V , , G l due only to source G1 (Fig. 8-286).
                   R I and R2 form                               for the V1 source. V,,,, is the same as the
              voltage across R2. To find V,,,, use the voltage-divider



               V,,,l is positive           V1is
      Step 2. Short-circuit Gl and find V , , G 2 due       to source G2(Fig. 8-28c).
              R I and R2 form                                            V,.0 2 is the same as the       across
              R I . To find V p . 0 2 we use                                     time we have
              source G2.
CHAP. 81                                 NETWORK CALCULATIONS                                                                        139




                                          b               O    vP       O               4)




                                         1-Q-A
                                             + -J                     40 k Q
                                                   V2 = 60 V
                                 (a) Voltage divider circuit with two voltage sources

                                                                          G,short-




      G, short

                                                          Fig. 8-28

                                          RI      20
                                  Vp.02 = -v2 = -
                                                20 ,(-6OV)                              = $(-6OV)      = -2OV
                                                   + R2
                                                                    +

                                              RI

          Step 3. To find V, add the voltages calculated.
                                       vp = Vp,,, + vp,,2= 160 - 20 = 14ov                            Ans.

8.5       Find the current through the load resistor RL in the two-generator source circuit (Fig.8-29a)
          by superposition. RI and R2are the internal resistances of the generators.
          Step 1. Find the current in RL due to G,alone,                        I,,,.
                                                                                                  a



                                                                                                                    1
                                                                                                                        1   IL. GI



                                                                                                                    ; 100
                                                                    120


                                                                                                       G, short-circuited



                                                      10 n

  120 v
                                                                            +
                                                                                             R3

                                                      Fig. 8~29%b
140                                     NETWORK CALCULATIONS                                               [CHAP. 8


              (a)     Short-circuit G2and             the circuit           8-29b).




              ( b ) Use                                    find          at point a.
                                                                                 1
                                                         = -II.GI= -62.8
                                                                 R 2
                                              I L G I                                  = 5.71 A
                                                           R 2 + RL 11
      Step 2. Find the current in R L due to G2alone, namely IL,G2.Short-circuit G,and
              (Fig. 8-29c).




                                                        Fig. 8 - 2 9 ~

      Step 3. Add the             currents algzbraically.
                                   ZL   = ZL,GI   +   ZL.GZ   = 5.71     + 4.76 = 10.5 A      Ans.


8.6   Find the load current IL and the load voltage V L in the circuit (Fig. 8-30a) by use of
      Thevenin's theorem.

                                                          20 R                   a




                    120




                                                                                 h
                                                      Fig. 8-30a

      Step 1. Find R T ~ . Remove           load RL. Short-circuit               voltage source of 120V (Fig. 8-30b).
              Short-circuiting                                               10-fl resistor,         2 0 4 resistors in
              parallel.
                                                                      10 n
                                                              R-,.,,=E=
                                                                    2
      Step 2. Find VTh. The two 2 0 4 resistors are in series across the 120-V line (Fig. 8-30a). Since
              voltage is the      across equal               V-m is the                     at a and b across
              the 20-fl resistor,
CHAP. 81                                        NETWORK CALCULATIONS                                                 141


                               20 Q             a                                        RTh       a




 Short circuit                                                             30 Q   'Th
                                                                                                         7   30 fl   VL




                                                                  +
                                                          Fig. 8-30b,c




       Step 3. Draw the equivalent circuit with RL and find IL and VL (Fig. 8-3Oc).



                                              VL = I&     = 1.5(30) = 45V         Ans.

8.7    Find the Thevenin equivalent across RL of the Wheatstone bridge network (Fig. 8-31a).




         d>
       Step 1. For greater clarity, move the voltage source inside the bridge and show the load outside the
                   bridge (Fig. 8-31b).

                              b




                    30 Q                 60 Q




                                          b                                                    b
                                          -
                      b




                                                                                               -
            24 Q                  12 Q                        Circuit 1



                                                    RTh                                                RTh




                                          C

                                                      Fig. &31a, b, c, d
142                                     NETWORK CALCULATIONS                                       [CHAP. 8


                  b                      b                    b                        b




                                                                                       I
                                                                                           -30 V


                                             T+30v
                                             1
                                                                                           d
                                                                      ov
                      603   60v

                                                                                       =ov
                                         C                    C

                                                                           v,
                                                   RTh            b




                                  'Th




                                                                  C
                                                         k)
                                                 Fig. &31e, f, g

      step 2.   Find RTh. Short-circuit the 90-V source (Fig. 8-31c).
                Redraw the circuit for simplicity (Fig. 8-31d). Find k1
                                                                      for circuit 1, RW2for circuit 2, and
                then combine Reql and RW2in series to find Rm.



                                        Req2 = 30(60) = 2 0 a
                                        Rm = R,1+ R-2 = 8 + 20 = 2 8 0          Ans.
      step 3. Find VTh. Vn, is the open-circuit voltage across terminals b and c and is equal to the
              algebraic sum of voltages across Rzand R4 (see Fig. 8-31e). By the             rule,


                                               60
                                          v, = - 3090 = $90 = 6 0 v
                                                   +




                                         Vn, = V4 - V2 = 60 - 30 = 30V          Ans.
                To show the polarity of VTh,ground d and note that  voltage at b is +30 V and the voltage
                at c is +60V with respect ground. So the voltage at b is -3OV with respect c. This
                can be seen if we ground point c. (See Fig. 8-31f.)
      Step 4.   Draw the equivalent circuit with RL. Note the polarity of the source. (See Fig. 8-3lg.)

8.8   Convert the voltage source circuit (Fig. 8-32a) to its equivalent current source cir-
      cuit. Prove that the two circuits are equivalent by calculating the voltage drop and current
      through a 10-rcZ load resistor.
      Step 1. Find the current           equivalent.
                                                         I=-  'l5 3 A
                                                           R = T =
CHAP. 81                                   NETWORK CALCULATIONS                                                                143


                                                                                                                 1 ;
                                                                                                                 I
                                                                                                                           +



                                                 1
                                                                                                                 I

                 1-57:                                                                                           I
            +
             -1
           V’ISV

                                                      ~
                                                                                                                 I
                                                                                                                 I
                                                                                                                 I ,
                                                                                                                 I     b
                                                                                                                           -
                   (a) Voltage source circuit                                  ( b ) Equivalent current source

                              R                  a                                                              a




                                                     10 n




                                              b                                                               b
           (c)    Voltage source          with load                       ( d ) Equivalent current source circuit with load
                                                              Fig. 8-32

                 Shunt R is equal to the series I?of 5 0. Therefore, the equivalent current source circuit is as
                 shown in Fig. 8-32b.
      Step 2. Add RL at terminals a and b. Find ILand VL in each equivalent circuit and compare their
                 values. From Fig. 8-32c:
                                                             I t = - - V ---l5 - l A
                                                                     R + R L 5+10
                                                            VL = I J Z L = l(10) = 1ov
                 From Fig. 8-32d:

                                           IL = -  R I = - -5- +5 1 0 3 =1- 3 = l A
                                                R + RL                   3
                                          VL = I& = l(10) = 10 v
                 The vdues of load current and load voltage are the same for each circuit.

8.9   Conversion of voltage and current sources can often simplify circuits when there are two or
      more sources. Voltage sources are easier for series connections because we can add
      voltages, whereas current sources are easier for parallel connections because we can add
      currents. Find the current It through the middle load resistor RL (Fig. 8-33a).


                                                                                         -.-
                                                                                         3sl

                                                                                                  V,   l+24 V




                                             I
                                                                      -
                               Voltage                                b          I     voltage
                               source 1                                                source 2
                                                                (a)
                                                             Fig. 133a
144                                      NETWORK CALCULATIONS                                               [CHAP. 8


                           I       a       I                                                                     a




        Current                    b                     Current                                                 b
        source 1                                         source 2




       Step 1. Convert              sources V ,and V 2into current sources.
                                            V = 72
                                       I1 = 1   -= 8A                  Shunt RI = series RI = 9 0
                                            RI   9
                                       12,V,=2= 8A                     Shunt R2 = series R2 = 3 R
                                               R2   3
       Step 2. Draw the equivalent current source circuit                 Fig. 8-33b). II and I2 can be              for
               one           current source IT. Since                            current in the same
               RL,they are added.
                                                        IT   = I l + & = 8 + 8 = 16A
                   The shunt R for the 16-A combined current source is the combined                       of the 9-i2 R I
                   and the 3-R R2 in parallel. So



                   The         of Fig. 8-33b can be redrawn as shown in Fig. 8-33c.
       Step 3. Find I=. Use the current-divider                     for the 6- and 2.25-R branches.
                                                 2.25      2.25
                                          rL = -
                                               2.25
                                                      16 = -16 = 4.36A
                                                        +  8.25
                                                                                          Ans.


8.10   Find the current IL by converting the series current sources I, and Iz into series voltage
       sources (Fig. 8-34a).

                                                                                     a




                                                                                     b
CHAP. 81                                NETWORK CALCULATIONS                                           145


                                           a

                                                                          R




                                               63                                            63




                                           b




       Step 1. Convert II and I2 into
                                V1 = IIR1 = 3(4) = 12V            Shunt R 1 = series R 1 = 4 R
                                V2 = 12R2 = 4(2) = 8 V            Shunt R2 = series R2 = 2 R

       Step 2. Draw the equivalent                                 Fig. 8-34b). The series        are added
               because


               The                      are added.
                                                    R = RI + R 2 = 4 + 2 = 6 R
               Then by Ohm's law,

                                          vT _ -2o- 2o 1.67A
                                        I==------
                                         R+RL 6+6-12=
                                                                                   Ans.


8.11   Find the                  RT of the              shown in Fig. 8-35a.




       Step 1. Reduce the parallel
               RIN. (See Fig. 8-35b.)
                                                    Rz,R, and 4,
                                                                        10 n




                                                               R5 to a single resistance.
                                                                                          I]            for



        I
146                                   NETWORK CALCULATIONS                                 [CHAP. 8


       Step 2. Add series resistances. (See Fig. 8-35c.)
                                                     RP=10+5+3=18Q
       Step 3. Find RT. (See Fig. 8-35d.)



                     33
                                              0




                                 5n                                                          60



                                              0
                    10 n
                   (b)                                              (a
                                                  Fig. &35b, c, d

8.12   For the circuit in Fig. 8-35a, determine the current values through all the resistors when the
       applied voltage is 54 V. Having found the equivalent resistances by steps in Prob. 8.11, we
       shall work backward, starthg with RT and proceeding toward the original circuit.



                                                                                    .1I2
                                      6Q            V                               18 0




       Step 1. Find IT (Fw.8-35e).



       Step 2. Find I, and I2 (Fig. 8-35f).   By Ohm's law,
CHAP. 81                                            NETWORK CALCULATIONS                                                147


        Step 3. Show the circuit equivalent. (See Fig. 8-35g.)
        Step 4. Show the original circuit. (See Fig. 8-3%)




                                                                                                            I
                                                                                                I           I
                                                                                                            I
                                                    I                                                       I
                                                    I                                    10 n           10n I
                                                I                                                           I
                                                I                                                           I
                                            I                                                               I
                                           I
                                            I
                                                                                                T
                                                                                             _ _ _ _ _ _ _ _J_
                                       I                    3A                      ,t
                                      1                 -                                I
                                  I                                                      1




                         - 4
                          1.5 A




                Because the parallel resistances are equal, the current of 3 A divides equally into 1.5 A and
                1.5 A.




8.13   Find the total resistance of the circuit (Fig. 8-36a).
       Step 1. Reduce the circuit progressively from right to                      Add series              (See Fig. 8-36b.)
                                                        RA = R g   + R, + R, = 30 + 40 + 50 = 120 R
148                                   NETWORK CALCULATIONS                                        [CHAP. 8


                           R4            R5                R6

                          10 n          25 0              30 Q




                          R9             Ra                R,

                          15 Q          35 Q              50 f l




          10 Q           25 Q                                               10 Q           25 Q




                                                                     0




                                                    Fig. 8-36


       Step 2. Combine parallel branches (Fig. 8-36c).



       Step 3. Add series resistances (Fig.8-361).
                                                  & = 35 + 40 + 25 = 100n
       Step 4. Combine parallel branches (Fig. 8-36e).



       Step 5.   Find R T by combining series resistances (Fu.8-36f).
                                              R T = 10   + 75 + 15 = 100R          Ans.

8.14   In the Wheatstone bridge circuit (Fig.8-37), the bridge is balanced. Calculate Rx,Ix, I , , and
       each voltage.
       Step 1. Calculate R, by Eq.(8-7).
                                                     loo0
                                         R, = %R3
                                              RI
                                                  = -42
                                                    10 OOO
                                                                   = 4.2n           Ans.
CHAP. 81                              NETWORK CALCULATIONS                                               149




                          VT




                                                                b
                                                  Fig. 8-37


       Step 2. Calculate currents I, and I,. Express the voltage drop across terminals a and b.
                               IxRx+ lxR3= VT
                                    + R3) = VT
                                        Ix=vT=-=-=
                                             11 l1 0.238A                                  Ans.
                                              R, + R3     4.2 + 42     46.2
                             + IIR2= VT
               Similarly, IIRl
                          II(RI+ R2) = VT
                                  I,=&=                 11    =-- l 1 - 0.001A                Ans.
                                          R \ + R 2 lOOO+lOooO 11ooO
       Step 3. Find each voltage. By Ohm’s law,
                                        V, = I,R, = 0.237(4.2) = 1 V            Ans.
                                        V1 = IlRl = O.oOl(looO) = 1V             Ans.
                                        V2 = I1Rz = O.OOl(l0 OOO) = 10 V            Ans.
                                        V3 = IxR3= 0.237(42) = 1OV              Ans.
               When the bridge is balanced,      current flows through the galvanometer, so that
                                                      v, = v1
                                                      1V = 1V        Check
               and                                    v3 =   v*
                                                    1OV = 1OV        Check
       An alternative          to find each voltage    by the voltage-divider        With this method we need
       not      for the
                                                   1
                                         RI V,=-ll=-ll=lV  1
                                    VI = -      1 + 10
                                          R I+ R2         11


       Similarly,




8.15   Find the value of load resistance RL that will provide the maximum power delivered to the
       load (Fig. 8-38a). Also calculate maximum power PL.
       Step 1. Show the Thevenin                        (Fig. 8-36b). R Iand R2are in parallel.
150                                   NETWORK CALCULATIONS                                                 [CHAP. 8




                                                                                                                   a
                             7

                 20 n                   50

                             o a
Short V ,                                              Short V2      or       R,
                             o b


                             -
                             A




                                                                                                                   a




v, = 14ov                                                   v* = wv           or
                                                                                         2oQ
                                                                                       14oV'
                                                                                               +              +
                                                                                                            =9OV
                                                                                               -T            T-
                                                                                                                   b




                                                     4Q
                                                                          n
                                                                                   f
                                                                                   b
                                                                                       R, = ?
                                                                                       P, = ?


                                        (d) Thevenin              circuit
                                                 Flg. 8-38

                By Ohm's law (see Fig. 8-38c).



                                   vn, = vd = vI- i l ~= ,140 - 2(m)= 140 - 40 = ioov
                The Thevenin equivalent circuit is          in Fig. 8-38d.
        sttp 2. Find RL and PL. For maximum power to be delivered to the load, RL = Rn,. Therefore,
                                                     RL = 4n                Ans.

                                             (
                                             + RLy(RL) = ( E y ( 4 ) = 625 W
                             PL = ILRL = RThvTh                                                     Ans.
CHAP. 81                                      NETWORK CALCULATIONS                                                     151


                  Or, more                                                 half between RThand RL,
                                                                                            625w
                                              VL = 50V        and       PL = -V', = -502
                                                                                      =
                                                                              RL      4
       Note that maximum power                     by the           if the load resistance RL is       to a fixed value of
       series               may include                                      of the                           problem the
       series                                                               Rm.

8.16   A motor          8333 W is operating                         a 2 3 2 4 source 100ft away          8-39). For
       power             the National                                            a 5 percent               is the line
       power                   minimum size                                  that may be used for the line
       the     to avoid               5 percent                            drop?
       Step 1. Find the minimum voltage at the                 load, VL.
                                           Vnouce = 232V
                                          VIine drop = 0.05(232) = 1 1 a6 v
                                                 VL = Vnouce - Vlinedrop = 232 - 11.6 = 220.4 V
       Step 2. Find current drawn by motor, IL.                                                L = 100ft

                        PL =     ILVL
                        I L = p L = - 8333
                                      =          37.8A
                                 VL     220.4
                                                                                   vc =
       Step 3. Find line power            PI.
                  Line drop       V, = 0.05(232) = 11.6 V
                                  It = 37.8A
                                  PI = VJ,                                                     L = looft
                                     = 11.q37.8) = 438 W               Ans.                      Minimum size o f wire = ?
                                                                                                   Fig. 8-39
       Step 4. Find the resistance of the line wires, RI.
                                                      VI = I&
                                                      R,=-=-=                 0.307 R
                                                         IL  37.8
       Step 5. Find                       area of the wire that
                                          I
                                RI = p x

                                          I
                                 A=p-
                                         RI

                                 p = 10.4       (Table 4-2)           I = 2L = 200ft           RI = 0.307R
                                 A = - 10'4(200)
                                       -
                                         0.307
                                                 - 6780CM
       Step 6. Find the gauge         of the wire                                area is           6780CM. Refer to
               Table 4-1; No. 11 wire is the minimum wire                   that can be used to limit voltage drop to 5
               percent.    Ans.

8.17   Find the              across the                  across the lamp      of the         (Fig. 8-40). The
       motor          4 A and the lamp bank 5 A.            Resistances of the feeder line are indicated.
       Step 1. Find      current distribution.
                                                     I0 = I M + I L = 4 + 5 = 9 A
               In             1 the current is 9 A, and                2 the current is 5 A.
152                                          NETWORK CALCULATIONS                                                     [CHAP. 8

                                            0.3 Q
                                                              a
                                                                        0.1    a
                                                              -7                         1




                                                                                             7
                           vC
                                -




                                            0.3 Q                       0.1 Q
                                       Section 1                   Section 2
                                                              Fig. 8-40
          Step 2. Find the line           in each
                    Section 1:                            Ri1 = 0.3 + 0.3 = 0.6IR
                                                           VI = IGRl1 = 9(0.6)= 5.4V
                    Section 2:                            RI2 =  0.1 + 0.1 = 0.20
                                                           V12 = ILRIZ = 5(0.2) = 1 V
          Step 3. Find the load




8.18      Compare            drop and load voltage of a three-wire system and a two-wire system. Use
          the circuit of Fig. 8-23 with the 10-nload for your              (see Fig. 8-41).



                                                       T
l f
                           +

                            -
                        I , = 11.9 A



                           +
                            0.5 Q
                                            loQ
                                                       4                  r
                                                                           I
                                                                        120 v
                                                                                    +
                                                                                    e
                                                                                                      0.5 Q


                                                                                                                             T  VLI
                                                                           I
                                                                          L.                          0.5 n                 I1
                                                                                    -

          (a) Original three-wire system (Fig. 8-23)                                         (b) Two-wire system
                                                              Ng. 8-41

   For three-wire               with respect to 104 load               For                             8-41b):
(Fig. 8-41a):

                  V1l = 11.9(0.5) = 5.95V                                                    120
                                                                                   I =                   120 - 10.9A
                  VIZ = 9.1(0.5) = 4.55 V                                              0.5 + 10 + 0.5 = 11-
  Total        drop = Vll+ VIZ= 5.95 + 4.55 = 10.5 V                               Total     drop = 10.9(1) = 10.9 V
                   VLl = 11.9(10) = 119V                                                 VL, = 10.9(10) = 1WV
          Then,                            Difference in line             = 10.9 - 10.5 = 0.4V                Ans.
                                          Difference in load                   = 119 - 109 = 10 V          Ans.
          So we see that in this case a                                              drop of 0.4V less          that of a two-wire
          system       higher load                     lOV.
CHAP. 81                                   NETWORK CALCULATIONS                                                                  153




avn
                                         Supplementary Problems
8.19     Transform the A networks                  8-42a into Y networks. (Hint: Draw visual aid.)
         Ans. See Fig. 8-42b.

                                          a                                                                                a




30 Q




          C                    C         50 R          b                                b                          b    15 R          C




    y
    a




           C
                      b


                 3.33 n

                              12.5 f l


                               C
                                           a




                                                    16.7 R


                                                       b
                                                                             Y
                                                                             a



                                                                         0.43 n




                                                                                        b
                                                                                                   C



                                                                                                4.35 n


                                                                                            8.67 f l


                                                                                                                   b
                                                                                                                           (4)

                                                                                                                            a




                                                                                                                                      C

                                          (2)                                                                              (4)

                                                             Fig. 8-42
8.20     Transform the Y networks of Fig. 8-43a into A networks. (Hint: Draw visual aid.)
         Ans. See Fig. 8-43b.

a                 b                                                          a   20 Q                                      a




    v*
                          a                    b                 C                          b          c       C                  b




    a     35 Q        b         a        66 f l         C                           a                                  a




17.5 R




           C                               b                             b         25 12           C       C           60Q        b
154                                         NETWORK CALCULATIONS                                                         [CHAP. 8


8.21    Find the equivalent                                 a and d for the bridge networks                                8-44).
        Ans. ( U ) RT = 1OR; ( b ) R T = 11.0R; ( c ) RT = 5 0
                a                                          a                                                         a




8.22    If 50V were                                a and d to the circuit        Fig. 8-44c, find the current in
        each resistor.          Ans. Ilon= 4.5 A; Isn = 5.5 A; Izn = 0.5 A; II = 5 A;      = 5A


8.23    Find the equivalent                     output voltage V, of a                  T network (Fig. 8-45).
        Ans. RT = 25R; V, = 7.5V

                                  R2                                         a          15Q        b

                                  30 Q

                                                                                                       40 Q                      10 n

                                                                                                                 25 Q
                                                                          R, = ?


         +                                                                                             20 n
            -
                                                                                                                                 30 Q
v, = 20 v E
           -
                                   -
                                   A                                                               -
                                                                             d                     d
                                Fig. 8-45                                                          Fig. 8-46

8.24    Find the equivalent                                             a and d (Fig. 8-46).              Ans.     RT    = 37R

8.25    Determine the voltage V, by superposition              8-47).      Ans. V, = 30V
                                                                                 10 Q                         15 Q


150 v   @
                                                           20 v                                                                  20 n




                    Fig. 8-47                                                                 Fig. 8-48
CHAP. 81                               NETWORK CALCULATIONS                                                     155


8.26   Solve for the indicated currents by using superposition (Fig. 8-48).
       AM. I1 = 0.6A; I2 = 0.4A; I-, = 0.2A

8.27   Find the current in the load RL by superposition (Fig. 8-49).
       Ans. IL = 14.8A (rounded           14.84A)




                Fig. 8-49                                                     Fig. 8-50
8.28   Find currents I,, I*,and I3in a two-mesh circuit                       (Fig. 8-50).
       Ans. I, = - 6 A (actual             of current               to the assumed                   I2 = 4 A ; I3 =
       - 10 A (actual                      to assumed
8.29   Find the Thevenh equivalents to the circuits of Fig. 8-51.
       Ans. ( a ) Rn, = 1.2i-k; Vn, = 4.8V; ( b ) Rm = 1.6i-k; Vn, = 2.4V;
       (c) Rn, = 0.89i-k; Vn, = 1.33V
           RI         a                        R,             a                                                 a




                                              SQ              b
                                                    (b)
                                                    Ng.8-51
8.30   Add a resistor   RL of 5 R between         a and b to each circuit of Prob. 8.29, and find the load
       current IL and            VL.
       Ans. (a) IL = 0.77A; VL = 3.87V; ( b ) IL = 0.36A; VL = 1.82V; (c) IL = 0.23A; VL = 1.13V
8.31   Find IL and V L by the                       for the       of Fig. 8-52        Ans.    IL = 2 A; VL = 20 V
                                                                                                 b




   V                                         10 3




                43                                                                               C
                     Fig. 8-52                                                    Fig. 8-53
156                                    NETWORK CALCULATIONS                                         [CHAP. 8


8.32    In the Wheatstone              (Fig. 8-53), find the Thevenin                 Rm and Vm, and
        ILand VL.     Ans. RTh = 21 0 ; VTh = 30V; IL = 1 A; VL = 9 V

8.33    Find It and VL (Fig. 8-54) by the Thevenin
        Ans. IL = 3 A; VL = 18 V; ( R T =  ~ 1.71 a; VTh = 23.1 V)




                                            6 0                                                             400

10 v




                     Fig. 8-54                                                    Fig. 8-55

8.34    Find IL and VL (Fig. 8-55).    Ans. IL = 1 A; VL = 40V; (RTh = 6.67 0 ; VTh = 46.7 V)

8.35    A voltage source has 24V in series              6 R (Fig. 8-56a). Draw the equivalent current source
        circuit.  Ans. See Fig. 8-568.

                                                                                                    - a




             I
                                                                                                        0




        24 V -
                                                                                          6 0



            +                                     b
                                                                                      -
                                                                                      i
                                                                                                    +
                                                                                                        0




                                                      Fig. 8-56

 8.36   Show the Norton equivalent                8-57a) and find I=.     Ans. See Fig. 8-57b. IL= 2.14 A.


                                             a                                                  a




                                                  4 0




                                             b                                                  b
                                 (a)                                            (6)
                                                      Fig. 8-57

 8.37    Find the Norton           to the circuits of Fig. 8-58a, b, and c. (These are the same   for
         which           the Thevenin                Prob.  8.29.)
         Ans. (a) IN = 4 A ; RN = 1.20; (b) IN = 1.5 A; RN = 1.60; (c) IN = 1.5 A; RN = 0 . 8 9 0
CHAP. 81                            NETWORK CALCULATIONS                                            157


           R,         a                                    a                    Rl                  a




                                           5 Q             b                                        b
                                           (b)
                                                 Fig. 8-58

8.38   Add a resistor      RL of 5 R between          a and b to each        of Prob. 8.37. Calculate
       load current IL and             VL. Check       answers with those for Prob. 8.30.
       Ans. (a) I L = 0.77A; VL = 3.87V; ( b ) I L = 0.36A; VL = 1.82V; (c) I L = 0.23A; V L = 1.13V

8.39   Show the Thevenin              8-59) and                VL.
       Ans. RTh = 3 R ; Vn, = 22.5V; VL = 18V

8.40   In Fig. 8-59, solve for VL by superposition.
       Ans. V L = 18 V (IL.vl= 1 A, ILv2= 0.5 A, IL = 1.5 A)

8.41   In Fig. 8-59, solve for VLby the Norton
       Ans. VL = 18V (IN = 7 S A , RN = 3 0 )


                          a                                                                     a




                          b                                                                     b
                     Fig. 8-59                                                Fig. 8-60

8.42   Find the current through                  RL (Fig. 8-60).     Ans. IL = 0.2 A

8.43   Find the total        of each circuit in Fig. 8-61a, b, c, and d.
       Ans. (a) RT = 1 8 0 ; (b) RT = 10.6fl; (c) RT = 3.21 R; (d) RT = 2.86R


                          12 Q       I                               5Q                   4Q


                                                      7Q                                  2 3
                                             0


                                                                     5 Q                  8Q
158                                     NETWORK CALCULATIONS                                                [CHAP. 8


              0




                   5Q             30


                             2Q
             0


                                                                                  (4
                                                       Ng. 8-61~,d

8.44   Find the total resistance RT (Fig. 8-62).         Ans. RT = 1.43 R

                                    Original circuit                                    Equivalent circuit
                         a                c




                                                                                                     E R,
                  'I         R2f10Q                                     5 Q




                         b                d
                                                        Fig. 8-62

8.45   Find the equivalent resistance of each resistance configuration (Fig. 8-63a, b, and c).
       A ~ s .( a ) RT = 2.86Q; ( b ) RT = 13.5 Q; (c) RT = 15 Q


                                                                                              30 Q
                                                                                                              +

                                                                                       20 0          30 Q
                                                                              0                Y
                                                                                               A




                                                                                                     15 Q




8.46   For the circuit (Fig. 8-64), find RT, 11, 12, and 13.
       Ans. R T = 10 a; 11 = 15 A; 1 2 = 10 A; 1, = 5 A

8.47   Find the total resistance of the circuit (Fig. 8-65).         Ans. RT = 30R

8.48   Find the total resistance of the circuit in Fig. 8-65 if the 60-Q resistor were to bum out and open.
       Ans. RT = 600
CHAP. 81                                 NETWORK CALCULATIONS                                             159




                                                 i

                                                                          160 R                   WQ
                       Fig. 8-64                                                     Fig. 8-65


8.49   An unknown               to be checked by the   bridge circuit (Fig. 8-66). When R , is
       for 54a, there is zero deflection on the        Find R, and each voltage.
       A ~ s .R, = lO8OQ; V, = VI = 20V; Vz = V, = 1 V



                                                 R


       “7-


                                                             ‘V a 6.6 V



                          Fig. 8-66                                           Mg. 8-67


8.50   What                 RL will produce maximum power at the load (Fig. 8-67) and             the value of
       that power?      Ans. RL = 0.075 a; PL = 145 W

8.51   Determine the size of the load                for maximum transfer of power (Fig. 8-68). How much
       power      will be dissipated by the           Ans. RL = 2.4R; PL = 3.75 W


                                          a                                                   b



                                           b
                                           ERL=?
                                            PL = ?


                                           I

                                          b                                                   d
                      Fig. 8-68                                                   Fig. 8-69


8.52   The unbalanced                               a resistance R, in series an ammeter (Fig. 8-69). Find
       the value of R, so that it             maximum power. (Hint: Reduce            bridge circuit to its
       Thevenin                   Ans.   R g = 99.5  (R, = RTh)
160                                        NETWORK CALCULATIONS                                       [CHAP. 8


8.53      Calculate the value of maximum power for the circuit in Fig. 8-69. What   the reading of the
          ammeter?      Ans. PL = 0.628 mW; I L = 2.51 mA (Vn = 0.5 V, Rn = 99.5 R)

8.54      A motor               to a             by two           each having             of 0.15 R. The motor
          takes 30   at 21 1 V. What is the line drop, line
          AM.    Vi = 9 V; PI = 270 W; V a = 220

8.55      Fixture wiring is often done with          16 wire,                      of 0.409R for a 100-ft
          length.        is the loss in voltage                   to an               using 10A and
          100 ft from the meter?             the power        Ans. Vl = 8.18 V; P, = 81.8 W

8.56      A generator            current to a            lamp bank            in parallel (Fig. 8-70). The feeder
          lines     the resistance            Find            across the motor
          A ~ s .V, = 113.8V; V L = 112V

       0.2 Q              0.3 Q                                        0.5 Q              0.4 !1




       0..2 D             0.3 Q                                       0.5 D               0.4 Q

                       Fig. 8-70                                                  Fig. 8-71

8.57      Each lamp takes 0.5 A (Fig. 8-71). Find V Aand VB.         Ans. V A = 112 V; V, = 109.6

8.58      A 20-kW motor               100ft from 230-V source. If the allowable drop is 5 percent,           is the
          smallest                wire that can be used? Ans. No. 8 wire (circular-mil area = 16 500)

8.59      A load 400ft from                 80 A. The                     115.6 V, and
          110 V. What the smallest         that may be        so that no  than 110 V will be across the
          load? (Note: Not               drop be considered, but the amperage          of the wire
          not be            Ans. No. 2 wire (circular-mil area = 59400)

8.60      Find the currents in the three lines of the Edison                          sources (Fig. 8-72).
          Ans. I, = 6.64A; I2 = 1.65 A; 1 3 = 4.99 A

                                                     0.05 Q



                             100 v I




                              loo v



                                                     t--
                                                     I, = ?
                                                      Fig. 8-72
CHAP. 81                                  NETWORK CALCULATIONS                                                  161


8.61   If the        leg (Fig. 8-72) is broken at point X,possibly by a blown fuse, what is the current through
       the loads and the voltages across      loads?      Ans. I = 5.70 A; VL1= 85.5 V; VL2 = 114 V

8.62   If the 15-R resistor (Fig. 8-72) is now replaced by a 20-R resistor, find the new values for             in
       the               lines (with equal source voltages, line resistances, and load resistances, the three-wire
       system is balanced).
       Ans. II = 4.99A; Iz = OA (current in neutral wire is zero for balanced three-wire system); I3 =
       4.99 A

8.63   If each lamp (Fig. 8-73) requires          of 1 A, find (a) the current in each of the       lines, ( 6 ) the
       IR drop in each line, and (c) the voltages V1and Vz. ( d ) Which line carries        heavier load?
       Ans. (a) I , = 4 A ; I2 = 2A; I3 = 2A; (b) Positive line, 3.2V; neutral, 1.6V; negative, 1.6V;
       (c) V1 = 115.2V; V 2= 120V; ( d ) Positive line




                                                            L                      L.              v,
            -
                                                    >           A   -
                                                                     -    -




                     Neutral              0.8 fl
                (1                                                   1.                            \/

                                          t--




                                                   Fig. 8-73

8.64   In the three-wire dc distribution system (Fig. 8-74), each lamp bank consists of 50 lamps. Each lamp
       takes power of 60W when the voltage is 115 V. All three                      of the same size. Specify
       the      of copper wire to be used in order         voltage at each bank be 115 V with all lamps turned
       on.     Ans. No.5AWG
                                    te-----500 ft4-
                                 +I
                                  120 v

                                                           Q    Fifty lamps
                                                                                      Chapter 9
             Magnetism and Electromagnetism
THE NATURE OF MAGNETISM
    Most electrical equipment depends directly or indirectly upon magnetism. Without magnetism
the           world we perceive today would not                   are few electrical      used
today     do not make use of magnetism.

Natural Magnets
    The phenomenon of magnetism was discovered by the Chinese about 2 6 3 7 ~ . c . The magnets
used in their primitive compasses were called lodestones or leading stones. It is now known that
lodestones were crude pieces of iron ore known as magnetite. Since magnetite has magnetic
properties in its natural state,              classified as natural magnets. The only other natural
magnet is the        itself. All other magnets are human-made and are known as artificial magnets.

Magnetic Fields
     Every magnet has two points opposite                         which most readily attract pieces of
iron. These points are called the poles of the magnet: the north pole and the                 pole. Just
like electric charges repel each          and opposite charges attract                  like magnetic poles
repel each         and unlike poles attract each
     A magnet clearly attracts a bit of iron because of some force                              around the
magnet. This force is called the magnetic field. Although it is invisible to the naked eye, force
can be shown to exist by sprinkling small iron filings on a sheet of glass or paper over a bar magnet
(Fig. 9-la). If the               tapped gently, the filings will move into a definite pattern which
describes the field of force around the magnet. The field seems to be made up of lines of force
that          to leave the magnet at the north pole, travel through the air around the magnet, and
continue through the magnet to                  pole to form a closed loop of force.
magnet, the                number of lines of force and the larger the                    by the field.
     In        to visualize the magnetic field w'ithout iron filings, the field is shown as lines of force in
Fig. 9 4 . The               of the lines outside the magnet shows the            a north pole would follow
in the field, repelled away from the north pole of the magnet and attracted to its               pole.


                                                             Glass sheet



                                                             Iron filings



                                                            'Magnet
                     ( U ) Field outlined by iron filings                   (b) Field indicated by lines of force
                              Fig. 9-1 Magnetic field of force around              magnet

Magnetic Flux 4
    The entire group of magnetic field lines, which flow outward from the north pole of a magnet, is
called the magnetic flux. The symbol for magnetic flux is the Greek lowercase letter 4 (phi).

                                                                162
CHAP. 91                       MAGNETISM AND ELECTROMAGNETISM                                       163


    The SI unit of magnetic flux is the weber (Wb). One weber equals 1 x 108 magnetic field
lines. Since the weber is a large unit for typical fields, the microweber (pWb) is used (1 pWb =
lod wb).
Example 9.1 If a magnetic flux 4 has 3000 lines, find the number of microwebers.
    Convert number of lines to microwebers.




Magnetic Flux Density B
    The magnetic p.x ‘density is the magnetic flux per unit area of a                            to the
direction of flux. The              magnetic flux density is



where B = magnetic flux density in teslas (T)
        = magnetic flux, Wb
      A = area in square        (m’>
We see          SI unit for B is webers per square meter (Wb/m’>. One weber per square meter is
called a tesla.

Example 9.2 What is the flux density in teslas when there exists      flux of 6OOpWb through an area of
0.0003 m2?
    Given                               4 = 6OOpWb = 6 X 10-4Wb
                                        A = 0.0003m2 = 3 X lOM4rn2
                                             I




Substitute values of 4 and A in Eq. (9-1).
                                             6 X 10e4Wb= 2 T
                                                                     Ans.
                                             3 x 10-~m’



MAGNETIC MATERIALS
    Magnetic materials are          materials which are              repelled by a magnet and which
can be magnetized themselves.             and steel are the most common magnetic materials. Per-
manent magnets are those of hard magnetic materials,               as cobalt         that retain
magnetism when the magnetizing field is removed. A temporary                   one           no ability
to retain a magnetized state when the magnetizing field is removed.
    Permeability refers to the ability of a magnetic material to concentrate magnetic flux. Any
material that is easily magnetized has high permeability. A measure of permeability for different
materials in comparison with air or vacuum is called relative permeability. The symbol for
relative permeability is p,(mu), where the               r stands    relative. p, is not            in
units because is a          of two flux densities, so the      cancel.
    Classifying magnetic materials as either magnetic or nonmagnetic is based on
magnetic properties of iron. However,             weak magnetic materials can be important in some
applications, classification includes three groups:
    1. Ferromagnetic materials. These include iron,      nickel, cobalt, and commercial alloys
       such      alnico and Permalloy. The fenites are nonmagnetic materials that
       magnetic properties of iron. A ferrite           material. Thepermeability of ferrites
       is in the range of 50 to 3000. A common application is femte core in the coils for RF
       (radio-frequency) transformers.
164                          MAGNETISM AND ELECTROMAGNETISM                                          [CHAP. 9


      2. Paramagnetic materials. These include
         Relative              slightly more than 1.
      3. Diamagnetic materials. These include                               copper, zinc,
         and                             is less than 1.


ELECTROMAGNETISM

     In 1819 a                 named Oersted                                    magnetism and
current. He found that an electric current flowing through                                           field
around that conductor.       Fig. 9-2a filings in a definite pattern of concentric rings around
conductor       the magnetic field of the current in the wire. Every section of the wire has this field of
force around in a                          to the       (Fig. 9-2b). The strength of the             field
around a                    current depends the current. A high current will produce many lines
of force extending far from           while a low current will produce      a few            to the wire
(Fig. 9-3).
                                                                                    Circular lines of force


                        Current in conductor


                                 Iron filings

                                 Cardboard



                                                                                                V
                                                                                             Conductor
                      (4                                                     (b)
                 Fig. 9-2 Circular pattern of magnetic lines around current in a conductor

                                           Large field
                                                                           /            fie’d




                            High current                              Low current

                 Fig. 9 3 Strength of the magnetic field depends on the amount of current

Polarity of a Single Conductor
    The right-hand rule is a                 way to determine the relationship               the flow of
current in a                            the direction of the magnetic             of force around
conductor. Grasp the current-carrying wire in the right hand,                the four fingers around the
wire and             the thumb        the wire. If the thumb                 the wire in the direction of
current flow, the fingers will be pointing in the direction of the lines of force around
(Fig. 9-4).

Magnetic Fields Aiding or Cameling
    In Fig. 9-5 the magnetic fields are shown for two       conductors with opposite            of
current. The cross in the middle of the field of the conductor in Fig. 9-5a symbolizes the back of
CHAP. 91                      MAGNETISM AND ELECTROMAGNETISM                                           165


                                               r\




                                                                                flow




                           Fingers curl
                           of magnetic




an arrow to indicate current into
                                                    %-
                                           Fig. 9-4 Right-hand rule

                                                       of it as the feathers at the      of an arrow
moving away         you.) The dot (Fig. 9-Sb) symbolizes current moving out of the paper.
case, it’s a      of the                      you.) By applying       right-hand rule, you determine
the                       of the field of the          in Fig. 9-5a and                         field
direction of the conductor in Fig. 9-5b. Because the magnetic lines                 conductors are in
the same direction,      fields aid to make a               field. On either      of the conductors,
the two fields are opposite in direction         to cancel each other.




                        (a) Clockwise field                    ( b ) Counterclockwise field
                         Fig. 9-5 Fields                                  of current

Magnetic Field and Polarity of a Coil
     Bending a                                      of a single loop                    First, the magnetic
field lines are more dense inside                        the total         of lines is the same as for the
straight                        all the              the loop are aiding in the same
     A coil of wire conductor                      there is more than one         or turn. To determine
the                     of a            the right-hand rule (Fig. 9-6). If the coil
fingers of the right hand         in the direction of current flow through the coil,                     to
the north pole of the coil.
     Adding an        core inside the coil             the flux density.                 of the core is the
same as that of the coil. The                        on the direction of current flow and the direction of
166                                     MAGNETISM                                                          [CHAP. 9


winding. Current flow is from      positive side of the voltage source, through the coil, and back to
the negative terminal (Fig. 9-7). The        pole is found by using the right-hand rule.


                                                              to



                                                                     N


Fingers coil in direction o
current flow through coil



                              Current   ’
                                        A-S



Fig. 9-6 Right-hand rule for coil of wire with several               Fig. 9-7 Right-hand rule to find north pole of an
         turns (solenoid)                                                      electromagnet

Example 9.3 Determine             magnetic polarity of the                                9-8) by the right-hand
rule.
      The correct polarities are circled.         that A has                     of winding and current as in Fig.
9-7. In B, the battery polarity                     A to reverse the direction of current. In C, the            of
winding is                  A; and in 0,  it                 B.




              A                                   B                          c                         D
                                             Fig. 9-8 Finding the polarity of a coil

Electromagnet Applications
    If a       of iron or soft steel is placed in the magnetic field of a coil (Fig. 9-9), the   will
become magnetized. If the magnetic field is strong                    bar will be drawn into the coil
until it is approximately           within the magnetic field.




                                             / IL---1llc----1 t.
                                        Bar of iron
                                                                     V

                                        Fig. 9-9 A current-carrying coil magnetizes
                                                 attracts an         placed in its field
     Electromagnets are widely used in electrical            One of the simplest and most common
applications is in arelay. When the switch S is closed in a relay circuit (Fig. 9-10), current flows in
the coil, causing a        magnetic field around       coil. The            bar in the lamp circuit
attracted toward the right end of the                and makes contact with the              at A. A
path         completed for current in the lamp circuit. When the           is opened,              flow
through                              and the magnetic field collapses and disappears. Since the
CHAP. 91                      MAGNETISM AND ELECTROMAGNETISM                                           167


attraction            iron bar by the                 no longer exists,            iron bar is pulled away
from the contact by the piece of spring steel to which it is attached.                                 at A
and                       the lamp.




                         Relay circuit                         Lamp circuit
                                         Fig. 9-10 A simple relay circuit

MAGNETIC UNITS

Ampere-Turns NI
    The            of a magnetic field in a coil of wire depends      how much current flows in the
turns of the coil. The more current, the stronger the magnetic field. Also, the more turns, the
more concentrated are the lines of force.                 of the        times the number of turns of
the coil, which is expressed in units called ampere-turns (At), is known as the magnetomotiue force
(mmf). As a formula,
         F = ampere-turns = NI                                                                        (9-2)
where F = magnetomotive force, At
      N = number of turns
       I = current,

Example 9.4 Calculate the ampere-turns for a coil with 1500 turns and a 4-mA current.
   Use Eq. ($2) and substitute N = 150 turns and I = 4 x 10-3A.
                                   NI = 1500(4 x 10-3 = 6At              Ans.

Field Intensity H
     If a coil with a        number of ampere-turns                    to twice its original length, the
intensity of the magnetic field, that                    of lines of force, will be half as great.
field intensity                   how long the coil is. Expressed as an equation,
                                                   H = -NI
                                                           I                                          (9-3)

where   H = magnetic field intensity,                                     (Atlm)
        NI = ampere-turns, At
         I = length between poles of the coil, m
Equation (9-3) is for a solenoid. H is the          at the        of an air core. With an iron core,
H is the           through the             and I is     length or distance         poles of the iron
core.
168                              MAGNETISM                                                                  [CHAP. 9


Example 9.5 (a) Find the field intensity of a &turn, 10-cm-long coil,            3 A flowing in it (Fig. 9-1la). (b)
If the              stretched to 20cm, with the wire length        current remaining         same, what’is the new
value of field intensity       9-1 lb)? (c) The 10-cm coil in part (a) with the          3 A flowing is now wound
around                that is 20 cm long (Fig. 9-1 lc). What is the field ifitensity?


           N = 40                                  N = 40                            N = 40
           I = 3 A                                 I = 3 A                           I = 3 A
                                                                                                Iron core

             NI = 120At                                      NI = 120At                                  NI = 120 At
             If    = 1200 At/m




             (a)                                      (b)                                         ((‘1
                   Fig. 9-11 Relation between mmf and field intensity with same value of mmf


          Apply Eq. (9-3), where N = 40 turns, I = 10 cm = 0.1 m, and I = 3 A.

                                                                                 Ans.

          The length 1 in Eq. (9-3) is                  The coil stretched from 10 to 20 cm.                  the wire
          length is the                                  is 20 cm = 0.2 m. So



          Stretching      the coil to twice its original distance              mmf by one-half.
          The length I in Eq. (9-3) is 20 cm between              at the ends of the iron                  the winding
          is 10cm long.

                                             H = 40(3)
                                                 -0.2
                                                       = 600At/m              Ans.

          Note that cases (b) and (c) have the same H value.


BH MAGNETIZATION CURVE
     The BH curve (Fig. 9-12) is used to show how much flux density B results
amount of field intensity H. This curve is for two       of soft iron      for typical          It
shows that soft iron           1 increases        in B with           in H before               a
“knee”                saturated at H = 2000 Atlm, B = 0.2 T. Past the        an increase in H has
little              B value. Soft iron          2 needs much more H to reach its
at H = 5000At/m, B = 0,3T. Similar curves are obtained for all magnetic                 Air,being
nonmagnetic,       a very low BH profile (Fig. 9-12).
      The              p of a magnetic                    of B to H.
                                                             B
                                                      P=H                                                        (9-4)

Its average           is measured at the                                                                          9-12
illustrates that the normal or average                       is as follows:

                        p for soft iron            1= -= -
                                                         Oa2 - 1 X 10-4(T-m)/At
                                                      H 2000
                        p for soft iron number 2 = - = -
                                                       Oe3 = 6 X 10-5(T m)/At
                                                        H        5000
                                                                                     -
CHAP. 91                          MAGNETISM AND ELECTROMAGNETISM                                           169


                                                                                  Knee

                            0.3


                                  I                  Knee

                            0.2




                            0.1




                                                 I
                                                 I
                                                 I             I      I       4           I
                                      1000      2000         3000    4ooo    5000        6ooo

                                                            H,Atlm
                           Fig. 9-12 Typical BH curve for two types of soft iron



In SI units,   permeability of air is po = 47r x lO-’ or 1.26 x 10d.                To          p, the value of
relative permeability Pr must be multiplied by po.
                                                 P = Pr X PO                                              ($5)

Example 9.6 If a magnetic material has a relative permeability p r of 100, find its permeability k.
   Use Eq. (9-5) and substitute known values.
                                        p = prko = lOO(1.26 x 10-7
                                             = 126 x lO”(T.m)/At            Ans.


Hysteresis
     When the            in a coil of wire reverses             of times per second,
cause                   loss of energy. Hysteresis means “a lagging behind”; that is, the magnetic
flux in an iron core lags behind the             or decreases of the magnetizing force.
     The             loop is a         of curves       show the                  of a magnetic material
(Fig. 9-13). Opposite directions of current             in the                     of + H and -H for
field intensity. Similarly, opposite               are shown for flux density as +B or -B. The
current          at the          0 (zero) when the material is unmagnetized. The                  line is
recognized as the magnetization curve                  in Fig. 9-12. Positive H values increase B to
saturation at +Bm,.       Next H decreases to zero,           B drops to the value of Br because of
hysteresis.                        produced the original magnetization now is reversed so that H
becomes negative. B drops to zero and continues to 43-.             Then as     -H values decrease, B
is reduced to -Br when H is zero. Now with a positive swing of current, H becomes positive,
producing saturation at +B,, again. The                    loop is now completed. The            doesn’t
return to zero at the                   of hysteresis.
     The value of + Br or - B , which is the flux density remaining after the magnetizing force is zero
(H = 0), is called the retentivity of a magnetic material. The value of -Hc,which is the
magnetizing force         must be applied in the                     to reduce      flux density to zero
(B = 0), is called the coercive force of the material.
     The larger the       enclosed by the hysteresis         the greater the hysteresis
170                            MAGNETISM AND ELECTROMAGNETISM                                     [CHAP. 9


                        I +B,T



                                                                    Ampere-turns of mmf

                                                                     P              P



                        I -B
   Fig. 9-13 Hysteresis loop for magnetic materials         Fig. 9-14 Magnetic circuit with closed iron path


MAGNETIC CIRCUITS
    A magnetic circuit    be compared with an              in which an emf produces
flow. Consider a simple magnetic circuit (Fig. 9-14). The              NI of the magnetomo-
tive force             magnetic flux 4. Therefore,    mmf compares to emf or voltage and the
flux 4 compares to current. Opposition to the              of flux in a material is called its
reluctance, which corresponds to resistance.
Reluctance 9
    The symbol for reluctance 9. Reluctance is inversely                        to permeability. Iron
has high permeability and therefore low reluctance. Air has low permeability and hence high
reluctance.
     Different forms of electromagnets generally have different values of reluctance (Fig. 9- 15).
The air gap is the air space                  poles of a magnet. Since air has high reluctance,
size of the     gap affects      value of reluctance.        magnetic circuit in Fig. 9-15a has widely
spaced poles in air so it has a high reluctande. In Fig. 9 4 % the              has been decreased by
bringing the      poles closer                  field between N and S is more intense, assuming the
same number of ampere-turns in the coils. In Fig. 9-15c the air gap is smaller than that in Fig.
9 4 % so the              is lower. In Fig. 9-15d there is no air gap in the toroid-shaped core so its
reluctance very low.
     The             air gap, the              field in the gap. Since air is     magnetic and thus is
unable to concentrate magnetic lines, larger air gap only provides more space for the magnetic
lines to spread
Ohm’s Law for Magnetic Circuits
      Ohm’s law for magnetic circuits,                   to   r = V / R , is
                                                   mmf
                                               (#)=-
                                                        9
where       4 = magnetic flux, Wb
          mmf = magnetomotive force, At
           9 = reluctance,
      Reluctance     be expressed as an               as follows:

                                               a = -1                                                  (9-7)
                                                       PA
CHAP. 91                          MAGNETISM                                                                 17 1


where 9 = reluctance,
       I = length of coil, m
      p = permeability of magnetic material, (T - m)/At
      A = cross-sectional    of coil, m2




                                (a) High reluctance                  ( b ) Lower reluctance




                            (c) Still lower reluctance                (d)Lowest reluctance
                             Fig. 9-15 Different               forms of electromagnets

Example 9.7   A          an mmf of 500At and                         of 2 x lO"At/Wb. Compute the total flux 4.
    Write Ohm's law for magnetic
                        # = -mmf
                                  %
                                  !
                            -       500 At   = 250 X 10-" Wb = 250 pWb                   Ans.
                                2 x 106At/Wb

Example 9.8 Starting with Eq. (9-6), show that            3 = !/FA, which is Eq. (9-7).
                                                         # = -mmf
                                                              $9
Also                                        4 = BA
Substitute B = p H [Eq. ( 9 4 1 and H = NI/I [Eq.($3)] to obtain




But Eq.($6) tells us that



By comparing                  of the two expressions for 4 with the same                      we see that



which is Eq. (9-7).
172                           MAGNETISM AND ELECTROMAGNETISM                                    [CHAP. 9


ELECTROMAGNETIC INDUCTION
     In 183 1 Michael Faraday discovered the principle of electromagnetic                  It states that
if a conductor “cuts across” lines of magnetic force, or if lines of force cut across a conductor, an
emf, or voltage, is induced across the ends of the conductor. Consider a magnet               its lines of
force extending from the north to the south pole         9-16). A conductor C, which can be
between                  connected to a galvanometer G used to indicate the presence of an
emf.           the conductor is not moving, the galvanometer                   zero emf. If the wire
conductor is moving outside the magnetic field at position 1, the galvanometer will still
zero.          the conductor is         to the left to position 2, it cuts across the lines of magnetic
force and the galvanometer           will deflect to A. This            that an emf was             in the
conductor because lines of force were cut. In position 3, the galvanometer                              to
zero because no         of force are being           Now reverse the direction of the conductor by
moving it                the lines of force back to position 1. During this movement, the pointer
will deflect to B, showing that an emf has                               the wire,      in the opposite
direction. If the wire      held stationary in the middle of the field of force at position 2, the
galvanometer                 If the conductor is moved up or down parallel to the lines of force so
that none is cut, no emf will be




                     a‘
                     I
                          V




                            I
             Fig. 9-16 When conductor cuts lines of force, an emf is induced in the conductor


      In summary,
      1. When         of force are cut by a conductor or lines of force cut a conductor, an emf, or
         voltage, is induced the conductor.
      2. There must be relative                    the conductor and the lines of force in order to
         induce an emf.
      3. Changing the direction of cutting will change the direction of the induced
The                             of relative                 conductor and           field is made in
electric generators. In a dc generator, fixed electromagnets are arranged      a cylindrical
ing. Many conductors in the form of a coil are rotated on a core within the magnetic field so that
these conductors are continually                 of force. As a result, voltage is induced in each
of the conductors. Since the conductors are in series in the COG, the induced
to produce the output voltage of the generator.

Faraday’s Law of Induced Voltage
   The value of the induced           depends upon the number of turns of a coil and how fast the
conductor cuts across the lines of force or flux. Either the conductor or the flux can move. The
CHAP. 91                      MAGNETISM AND                                                                   173


equation to calculate the value of the induced



where        l)ind = induced          v
               N = number of turns in a coil
         A 4 / A t = rate at which the flux cuts across the conductor, Wb/s
    From Eq. (9-8) we see that uind is                    three factors:
    1. Amount of flux. The more          of force that cut across the conductor, the higher the
       value of induced
    2. Number of turns. The more turns in a coil, the higher the induced
    3. Time rate of cutting. The faster the flux cuts a conductor or the conductor cuts the flux,
       the higher the induced                            of force cut the conductor within a given
       period of time.

Example 9.9 The flux of an                    is 6Wb. The flux increases                   12Wb in a period of
2 s. Calculate the voltage        in a coil that    10 turns if the coil is stationary in the
     Write
                       At$ = change in flux = 12Wb - 6 Wb = 6Wb
                        At = change in time corresponding to the            in flux = 2 s
Then

We are given that N = 10 turns.                         Eq. (9-8) and solve for i)ind-

                                  uind   =N    = lO(3) = 30   v      Ans.

Example 9.10 In            9.9 what is the value of induced         if the flux remains at 6 Wb after 2 s ?
   Since there is no change in flux, At$ = 0. Using Eq. (9-8),




    That no          is induced in Example 9.10 confirms the principle that there must
motion          the conductor and the flux in order to induce a voltage. A magnetic field whose flux is
increasing or decreasing in strength is, in        moving relative to any conductors in the field.

Lenz’s Law
    The polarity of the induced          is determined                   The induced          has the
polarity that opposes the change            the induction.          a current flows as a result of an
induced          this current sets up a magnetic field about the conductor such that this conductor
magnetic field reacts with the external magnetic field, producing the induced           to oppose the
change in the external magnetic field. If the external field increases, the conductor magnetic field
of the induced current will be in the opposite direction. If the external field decreases, the
conductor magnetic field will be in the same             thus sustaining the external field.

Example 9.11 A permanent magnet is moved into a coil       causes an induced current to flow in the
circuit (Fig. 9-17a). Determine the polarity the coil and            of the induced current.
     By use of Lenz’s                left end of the coil be the N pole to oppose          motion of the
magnet. Then the direction of the induced current can be             by the right-hand        If the right
thumb          to the left for the N pole, the fingers        direction of current (Fig. 9-17b).
174                                MAGNETISM AND ELECTROMAGNETISM                                          [CHAP. 9


                                     Motion
                                      in




                                                                             Induced
                                                                             current
                                        (4                                               (b)
                                            Fig. 9-17 Illustration of Lenz's law

INTERNATIONAL SYSTEM OF UNITS
      Table 9-1 lists          SI units for magnetism.
                                Table 9-1     Intemdonal System of Units for Magnetism

          Term                              Symbol                          Unit (Abbreviation)

  Flux                                         4              Weber (Wb)
  Flux density                                B               Weber per square meter (Wb/m*) = tesla(T)
  Potential                                  mmf              Ampere-turn (At)
  Field intensity                             H               Ampere-turn per meter (Atlm)
  Reluctance                                  9               Ampere-turn per weber (At/Wb)
  Relative permeability                    Fr                 None, pure number
  Permeability                     p = pr x 1.26 X 10-6       B / H = tesla per ampere-turn per meter [(T * m)/At]



                                                   Solved Problems
9.1     Match the term in column 1 with its                     meaning in column 2.
                                 Column 1                                          Column 2
                  1. One weber                                     BIII
                  2.    Lenz's law                                 Ceramic material
                  3.    Two north poles                            Force of repulsion
                  4.    Uind                                       Inversely              to permeability
                  5.    Field intensity                            HIB
                  6.    Electric                                   1 x 10~ lines of force
                  7.    Relative permeability                      Application of electromagnetic
                  8.    High permeability                          N@At
                  9. Ferrite                                       Respect to air
                 10. Reluctance                                    Polarity of induced voltage
                                                                   NI
                                                                   Force of attraction
                                                                   At/m
                                                                   Easily magnetized
         Ans.    1. cf) 2. 0') 3. (c)       4. (h) 5. (m) 6. (g)    7. ( i ) 8. (n) 9. (b)     10. ( d )
CHAP. 91                        MAGNETISM AND ELECTROMAGNETISM                                                175


9.2     Describe the                     place when two like poles and when two unlike poles are
        placed near each
            See Fig. 9-18. If the N poles of two magnets are placed near each              (Fig. 9-18a),
        the lines of force emanating from the N poles have the same direction and thus repel each
        other. This force of repulsion tends move the two magnets apart. On the                       if
        the N and the S poles of two magnets are placed near each            (Fig. 9-186), the adjacent
        lines of force     opposite in direction and they link together to form long loops. These
        long, continuous lines tend to            and this force of attraction pulls the two magnets
        together. So fields from like poles repel, tending to push the magnets apart, while fields
        from unlike poles attract, tending to pull the magnets together.




                   (a) Like          other                          (6)Unlike               other
                                  Mg. 9-18 Interaction of magnetic poles
9.3     An example of magnetic attraction is the navigator’s compass and the earth’s magnetic
        field. The       itself is huge natural magnet. The earth has its magnetic south (S) pole
        near the geographic north (N) pole, and its magnetic north (N) pole near the geographic
        south (S) pole. The compass needle is a long, thin permanent magnet that is free move
        on            bearing point. The compass needle always lines up     magnetic field with the
        magnetic field of the        with its north end pointing toward the earth’s magnetic south
        pole. The geographic N pole is located near the magnetic S pole. Show how a magnetic
        compass is used to indicate direction.
             See Fig. 9-19.                  Geographic
                                             (located
                                             magnetic S pole)


                   N-pointing
                                                                        N-pointing


              Compass                                                     Compass. The N     of the pointer
                                                                           sually        by color, always
                                                                \         points      the magnetic S pole.




      N-pointing
                                                                          N-pointing




                                    Geographic S pole
                                    F’ig. 9-19 The earth as a magnet
176                                MAGNETISM AND ELECTROMAGNETISM                                                  [CHAP. 9


9.4   Would 1 A flowing through a 2-m length of wire         into a single loop produce more, the
      same, or less mmf if it were wound into a coil 2 cm in diameter and 4 cm long?
          Basically flux is produced by current flowing in a                           The mmf produced is the product of the
      current times the number of turns of the coil. Since                          is flowing through       of 1      in both
      cases, though the physical              of the                                      the mmf is the same at 1 At.

9.5   (a) Consider a coil with an air core (Fig. 9-20a). The coil is 5 cm long and has 8
            turns. When the switch is closed, a current of 5 A flows in it.      the mmf and H.
      (b) If an iron core were slipped into the coil   9-20b), what is now the mmf and H? What
            qualitative changes take place?
      ( c ) The coil                   the same, but the iron core is              to 10cm (Fig.
            9-2Oc). What are the values of the mmf and H?

                          w-5cm-
                     P5cm;1
                     I  I I    I
                               N = 8 turns                                           N = 8 turns


                    .f   [ = S A
                                                                             .f   [=SA




                           10 v          S
                                    (4




                               I             F-5cm-
                                             n        n    n     n   n   n    n     A              I
                                               vI wl J I J J j
                                                            N = 8 turns



                                             .E   I = 5 A




                                                          10 v           S
                                                                 (d
                                     Ng. 9-20 Relation                            mmf and H

                                         F = mmf = NI
                                                           = (8 turns)(5 A) = 400 At               Ans.
                                             H - NI
                                                 T

                                                  -     400At = 8000Atlm                       Ans.
                                                      5 x W2m
      (b)   Since the quantities N , I, and I haven’t                        the values of mmf and H remain the same as in
            part(a). So
                                                      mmf = 400At                    Ans.
                                                       H = 8000Atlm                     Ans.
            What                            in flux density B. Suppose the iron core in air produced 50 lines
            of force. With the core placed into                      number of lines in the core area might
CHAP. 91                         MAGNETISM AND ELECTROMAGNETISM                                               177


            be 250,000. In      case, iron would have                 5000 times that of air. Therefore, the
            use of an iron                of an air core increases the effectiveness of the magnet several
            thousand          For this                            are made with iron
      ( c ) The lengthening of the iron core doesn’t                          of the     so
                                               mmf = 400 At         Ans.
                 However, with                            twice the initial length (10 cm = 2 x 5 cm), the field
                 intensity           by half.
                           1
                      H = 5 x 8000Atlm = 4000At/m         or                                           Ans.

9.6   An iron ring has a mean circumferential length of 40cm and a cross-sectional area of
      1 cm2. It is wound              with 500 turns of wire. Measurements made with a search
      coil            ring show that the current in the windings is 0.06 A and flux in the ring is
      6 x 1O”Wb. Find the flux density B, field intensity H, permeability p, and
      permeability p,.
             B is found by using Eq. (9-1).


      H is found by using Eq.(9-3)


      p is found           Eq.(9-4).

                                     ,=iT=-- 75lo-* - 8 X 10-4(T-m)/At           Ans.

      p r   is        by Eq.(9-5).




      The relative                                                   of measurement.

9.7   Hysteresis loops of three different magnetic materials are shown in Fig. 9-21. Rank them in
      order from       to most
           The smaller the area enclosed     the hysteresis    the lower the hysteresis loss. Hysteresis
      loss          to magnetic         that must            in magnetizing a            Curve B,having
      the smallest area, has the least            loss. Loop B is characteristic of a temporary-magnet
      material. The coercive force is      small and          loss would be negligible. Next in area size
      is      A, which           of a                                       And loop C with
      area has                                               typifies permanent-magnet                 as
      alnico.

9.8   A core of annealed        with a B of 0.72T has a permeability p of 8 x lO-’(T.m)/At. If
      the length of the coil is 20cm and      area of the core is 3cm2, find the reluctance of the
      path.
          Given are 1 = 20 cm = 0.2 m, A = 3 cm2 = 3 x 10-4 m2,            p = 8 x 10-3(T   - m)/At.
      these values the formula for reluctance.



                                       -        U.L

                                       - (8 x 10-3(3 x 1 0 9 = 83 300 At/Wb       Ans.
178                               MAGNETISM AND ELECTROMAGNETISM                                     [CHAP. 9


                    I+B                                  I+B




                    I -B                                 I -B                           I -B
                                                        (b)
                                              Fig. 9-21 Hysteresis loops

9.9    If the magnetic circuit of Prob. 9.8 has an air gap of 0.2cm in addition to the 20cm of
       annealed steel path, what is the reluctance of the air gap and how many ampere-turns would
       be needed to maintain a B of 0.72T? Assume that the area of the air gap is the same as the
       area of the steel
            The total reluctance of the magnetic circuit, BT,is the reluctance of the   path plus the reluctance
       of the air gap. The po of air is 1.26 x 10-6 (T * m)/At. The reluctance 92 of the steel, determined in
       Prob. 9.8, is 83 300 At/Wb. The reluctance of the air gap is



                                   -
                                   -           2 x 10-~
                                                              = 5 290 OOO AtlWb     Ans.
                                        (1.26 X 106)(3 X 10-3
       The total reluctance aT is the sum of Se and $RA.
                           9 T   = 9   + SeA = 83300 + 529OOOO = 5373300 = 5.37 x 106At/Wb
       To maintain a B of 0.72T requires a            flux of
                                          4 = BA = 0.72(3 X 10-7 = 216 X 10aWb
       The mmf in ampere-turns is found by use of Eq. (9-6).
                                 + = -mmf
                                        9 T

       from which
                             mmf = B T =~(5.37 X IO”N216X 10-6) = 1160At            Ans.

9.10   Explain the terms of the induced voltage formula.
           The equation is



       N,the number of turns,                 More turns will provide more induced voltage, while fewer
       turns mean less voltage. Two factors     included in A+/At. Its value can   increased by a higher
       value of A4 or a smaller value of At. As an example, the value of 4Wb/s for A+/At can be doubled
       by either increasing A+ to 8Wb or reducing At to is. Then A&/At is 811 or 4/(1/2), which equals
       8Wb/s in either case. For the opposite case, A+/At can be reduced by a smaller value of A+ or
       higher value of At.
CHAP. 91                      MAGNETISM AND ELECTROMAGNETISM                                           179


9.11   The hysteresis        for a magnetic material is shown by plotting a curve of flux density B for
       a periodically reversing magnetizing force H (Fig. 9-22). For this material what are its (a)
       permeability, ( b ) retentivity, and (c) coercive



                                                   I




                                                   I-E
                                 Fig. 9-22 Hysteresis loop, B H curve


       (a)     = B/H, which               of the curve      zero at the center (current zero when
             material                  to +B,.     Since     curve is normally not a straight     we
             approximate               Fig. 9-22. Approximately,

                                             0 0 = 1.5 x 10-3(T . m)/At
                                    F = H = 4Oh                                  Ans.

       (b) +B, or -B, is the flux           remaining after the magnetizing force H has been reduced to
             zero.                       of a magnetic          is called  retentivity. From Fig. 9-22,
                                                B, = 0.6T          Ans.
       ( c ) The coercive force of the material is -Hc,which              the magnetizing force that
             applied to reduce flux density to zero.   Fig. $22,
                                             H, = 300Atlm           Ans.
180                              MAGNETISM                                                                                  [CHAP. 9


                                         Supplementary Problems
9.12   Match the term             1 with its closest meaning in column 2.
                            Column 1                                  Column 2
                 1. North and south pole            ( a ) natural
                 2. Ohm's law                       ( b ) NI
                 3. Magnetite                       ( c ) Iron
                 4. North pole                      ( d ) Value of B when H = 0
                 5. Relative                        (e) Force of attraction
                 6. Induced                          cf) p, less than 1
                 7. Ferromagnetic                   (8) mmfM
                 8. Retentivity                     (h) H value           B =0
                 9. Diamagnetic                      (i) Lines of force cutting conductor
                10. mmf                              0') BIH
                                                    (k) PolP
                                                     (I) Lines of force flowing from
                                                   (m) Force of repulsion
                                                    ( n ) Aluminum
       Ans. 1. (e) 2. ( g ) 3. ( a ) 4. ( I ) 5. (k) 6. ( i ) 7. ( c ) 8. ( d ) 9. cf) 10. ( b )

9.13   What       the flux density                       20 0oO lines                              area of 5 cm2?
       Ans. B = 0.4T

9.14   Fill in the indicated             All answers             be in SI units.
                                                                                       ~~~~~~~              ~    ~    ~




                     4               B           A                       Ans.                      4                  B         A
             :
       (a)        35PW               ?        0.001 m2                                            ....          0.035T         ....
       (b)           ?          0.8T          0.005 m2                                           4oopwb              ....      ....
       (c)       loo00 lines         ?          2 cm2                                             ....          0.5T           ....
       (4         9opW               ?        0.003 m2                                            ....          0.03 T         ....

9.15   Draw              of force between            south poles of two
       fields.      Ans. See Fig. 9-23.
                                                         Strong field


                                     Weaker                                Weaker field in
                                                                           external area




                                              Strong field between poles (aiding)
                                                          Fig. 9-23

9.16   Draw the lines of force for two       conductors having the same                                  of current and
       the strong    weak fields.     Ans. See Fig. 9-24.
CHAP. 91                             MAGNETISM AND ELECTROMAGNETISM                                                       181


                              Lines of force
                                                             Conductor




                  Strong                                                                              Strong
                  (aiding)                                                                            (aiding)
                              or




                   Strong                                                                             Strong
                   (aiding)                                                                           (aiding)

                                                             Fig. 9-24


9.17       Compute the ampere-turns rating of an electromagnet wound with 600 turns of wire when it              energized
           with 3 A of current.  Ans. NI = 1800At

9.18       A core of annealed sheet steel is wound with 1500 turns of wire through which a current of 12mA is
           flowing. If the length of the coil is 20 cm, find the magnetomotive force and field intensity.
           Ans. NI = 18At, H = 90Atlm

9.19       A coil has a field intensity of 300 At. Its length is doubled from 20 to 40 cm for the same NI. What is
           the new magnetic field intensity?       Ans. H = 750Atlm

9.20       An iron core has 250 times more flux density than air for the same field intensity.        What is the value of
           pr?    Ans. p, = 250

9.21       Fill in the indicated values.       All answers are in SI units.


           B,T      H,Atlm         p,(T.m)/At           pr        Ans.        B, T        H, Atlm   p,(T.m)/At      p r


(a)         ?         1200         650 x 10+j           ?           (a)       0.78         ....        .. ..       5 16
(b)         ?         loo0              ?              200          (b)       0.25         ....     252 x 10-"    ....
(c)        0.8          ?               ?              500          (c)       .. ..        1270     630 x 10d     ....
(d)        0.1         150              ?               ?           (d)       ....         ....     667 x 10+      529
       c




9.22       A BH curve for soft iron is shown (Fig. P25). Find the value of permeability, retentivity, and
           coercive force.                                                            -
                           Ans. p = B/H = 0.4/200 = 2000 x 10d (T m)/At; Br = 0.4T; H, = 200 Atlm
182                            MAGNETISM AND ELECTROMAGNETISM                                           [CHAP. 9


                                                           I+B




                                        1
                                        I
                                             I     I               I
                                                                        I      I

                                                                  100   200   300   +H




                                                           I -B
                                                       Mg. 9-25


9.23   When it has an annealed iron core, a coil has a flux density of 1.44T at a field intensity of
       500At/m. Find p and p,.    Ans. p = 2880 x 10-6(T*m)/At;p r = 2290

9.24                                                        -
       The p of an annealed iron core is 5600 X 10d (T m)/At when the current            80 mA. The coil consists
       of 200 turns on core 20cm in length. Find H, B, and p,
       Ans. H = 80Atlm; B = 0.45T; p, = 4440

9.w    A coil of 100 turns 8 cm in length. The       in the coil is 0.2 A. If the                    iron with a B
       of 0.13 T, find H, p, and p,
       Ans. H = 250 At/m; p = 520 X 10-6 (T * m)/At; pr = 413

9.26   If the     in Prob. 9.25 has a cross-sectional area of 2cm2, find the                  and the mmf of this
       magnetic circuit.    Ans. 99 = 769000AtlWb; mmf = 20At

9.27   A coil has 200 At (Fig. 9-26a) with a flux of 25 pWb in the iron core. Calculate the reluctance. If the
       reluctance of the path with an air gap were 800 X lO"At/Wb (Fig. 9-266), how much mmf would be
       needed for      same flux of 25 pWb?        Ans. 99 = 8 x 10" Atlwb; mmf = 20 OOO At

9.28   A magnetic flux of loo0 lines cuts         a coil of 800 turns in 2 ps. What is the voltage induced in the
       coil?  Ans. uind = 4kV

9.29   In a stationary field coil of 500 turns calculate the induced voltage produced by the following flux
       changes: (a) 4Wb increasing to 6 Wb in 1 s; ( b )Wb decreasing to 4 W b in 1 s; ( c ) 4OOO lines of flux
       increasing to 5000 lines in 5 ps; ( d ) 4 Wb remaining the same over 1 s.
       Ans. (a) uind = 1 kV; (b) uM = 1 kV; ( c ) urn = 1 kV; ( d ) uind = OV

9.30   A magnetic circuit       a 10-V battery             to a 50-Q coil of 500 turns with an iron core of 20 cm
       in length (Fig. 9-27). Find (a) mmf; ( b ) field intensity H; ( c ) flux density E in a core with p r of 600;
       and ( d ) the     flux C$ at     pole with an        of 4cm2.
       Ans. (a) mmf = 1OOAt; (b) H = 500Atlm; ( c ) E = 0.378T;(d) 4 = 1.51 x 104Wb
CHAP. 91                          MAGNETISM AND ELECTROMAGNETISM                                              183




                                                            500 turns
                                                                                   .Iron core with CI’OSS-
                                                                                    sectional area of 4 cm2




                                                           10 v




                                                                        Mg. 9-27

9.31   If a               cuts 3.5 Wb in 0.25 s, what is the voltage         in the conductor?
        Ans.   Z)ind =   14V

9.32   If the .iron core is            the coil in Prob. 9.30, ( a ) What will the flux be in the air-core     (b)
       What          of induced       would be produced                    in flux while the core is being moved
       out in s? ( c ) What the induced            after the core is removed         the flux remains constant?
       Ans. ( a ) 4 = 2.52 x w ’ w b ; (b) t)ind = 0.151 v; (C) t)ind = ov

9.33   The N pole of a            magnet is moved away        coil (Fig. P28a). What is the                    of
       the coil   the direction of induced current?  Ans. See Fig. 9-28b.




                                                                                     -             +

                                                    Fig. 9-28

9.34   A B H magnetization curve for soft iron has the following


                                                 B,T      H,At/m

                                                0.126      1000
                                                0.252      2000
                                                0.378      3000
                                                0.428      4O00
                                                0.441      5000


       (a) What is the value of p? ( b ) Find p,
                                             ( c ) At what     of H does the BH curve begin to saturate?
       Ans. (a) p = 1.25 x lO-*(T-m)/At; (b) p, = 100; ( c ) H = 4000At/m
                                                                   Chapter 10

        Direct-Current Generators and Motors
MOTORS AND GENERATORS
    A motor is a machine that converts electric energy into rotary mechanical energy. Motors
turn washing machines, dryers, fans, furnace blowers, and much of the machinery found in
industry. A generator, on the other hand, is a machine that converts rotary mechanical energy into
electric energy. The mechanical energy might be supplied by a waterfall, steam, wind, gasoline or
diesel engine, or an electric motor.

Components
   The main parts of direct-current motors and generators are basically the same (Fig. 10-1).




                           Fig. 10-1 Main parts of a dc motor. (From B.
                                     Grob, Basic Electronics, McGraw-Hill,
                                     New York, 1977, 4th, ed., p. 338)
Armature
    In a motor, the armature receives current from an external electrical source. This causes the
armature to turn. In a generator, the armature is rotated by an external mechanical force. The
voltage generated in the armature is then connected to an external circuit. In brief, the motor
armature receives current from an external circuit (the power supply), and the generator armature
delivers current to an external circuit (the load). Since the armature rotates, it is also called a
rotor.

                                                184
    CHAP. 101                DIRECT-CURRENT GENERATORS AND MOTORS                                      185


    Commutator
        A dc machine has a commutator to convert                  current flowing in its
    the direct current at its          (in the case of the                                 (Fig. 10-1)
    consists of copper          with one pair of segments for each           coil. Each
    segment is insulated      the others by mica. The              are mounted
    shaft and are insulated          shaft and                 Two stationary            are mounted
    on     frame of the         so that they                           of the

    Brushes
        These          connectors are stationary                         to slide
    commutator on the            shaft. Thus,                        a connection               armature
    coils    the external

    Field Winding
        This                             flux cut by the                 a motor, current for the field is
    provided     the same source that supplies                      a generator,                  source
    may come        a separate source called an exciter or           own armature



    SIMPLE DC GENERATOR
      A simple dc generator             of an                 with a single turn of wire. This armature
coil cuts across the magnetic field to produce                If a complete         present, current will
move through                in the                   by the         (Fig. 10-24. In                 of the
coil,                         1 is in contact with brush 1, while commutator              2 is in contact
with brush 2. As the                 rotates a half turn in a clockwise                contacts between
the commutator                                 are reversed (Fig. 10-2b). Now,             1 is in contact
with        2 and             2 is in contact with brush 1. Because of this                   action, that
side of the                which is in contact with either of the                              across the
magnetic field in the                                            1 and  2 have                           a
pulsating        current is             to the external




                                 Rotation
                                  fl




                               Armature coil
                               Commutator



I   T
                Load                                                    Load
                        (4                                                          (b)
                                 Fig. 10-2 Basic operation of a dc generator
186                                 DIRECT-CURRENT GENERATORS AND MOTORS                         [CHAP. 10


Example 10.1 A dc generator with a single coil produces a pulsating dc output. By using more coils and
combining their output, a smoother waveform can be obtained. Draw a voltage output waveform that results
when a second coil is added to the armature and placed perpendicular to the first coil.
    See Fig. 10-3. Notice that a voltage is induced at all times. Although the current still pulsates, the
output is smoother. In practical generators, many coils are wound around the armature to produce a still
smoother dc output.

       Commutator                Commutator
      connects output           connects output
        to other coil             to other coil



                                                                                  Coils




                                                     Armature core

                                                                                                     :ator

                        1 XO'         270'



            Coil 1 output
 - - - Coil 2 output

            Generator output
Fig. 10-3 Output of a two-coil dc generator                      Fig. 10-4 Simplex lap winding


ARMATURE WINDINGS
    The armature coils used in large dc machines are usually wound in their final shape before being put
on the armature. The sides of the preformed coil are placed in the slots of the laminated armature
core. There are two ways the coils can be connected, lap winding and wave winding.
    In a simplex lap riinding, the ends of each coil are connected to adjacent commutator segments
(Fig. 10-4). In this way all the coils are connected in series. In a duplex lap winding there are in effect
two separate sets of coils, each set connected in series (Fig. 10-5). The two sets of coils are connected




               Fig. 10-5 Duplex lap winding               Fig. 10-6 Wave winding for a four-pole dc machine
CHAP. 101                   DIRECT-CURRENT GENERATORS AND MOTORS                                                 187


to each other only by the brushes. Similarly, a triplex lap winding is in effect three separate sets of
series-connected coils. In a simplex lap winding, a single brush short-circuits the two ends of a single
coil.
     In a wave winding, the ends of each coil are connected to commutator segments two pole spans
apart (Fig. 10-6). Instead of short-circuiting a single coil, a brush will short-circuit a small group of
coils in series.
     The area in a generator where no voltage can be induced in an armature coil is called the
commutating or neutral plane. This plane is midway between adjacent north aqd south field
poles. The brushes are always set so that they short-circuit the armature coils passing through the
neutral plane while, at the same time, the output is taken from the other coils.

Example 10.2 Explain the commutating action in a simplex lap-wound armature that has 22 coils.
    See Fig. 10-7. An armature with 22 coils is connected to 22 commutator segments. There are two
                +
brushes. The brush is short-circuiting armature coil 1 1 , while the - brush is short-circuiting armature coil
22. There is no voltage induced in either of these coils. The two coil groups, 1 to 10 and 12 to 21, are connected in
parallel by the brushes because the voltages in both coil groups have the same polarity. The brushes also connect
the generated voltage to the external load circuit. While the brush is short-circuiting one armature coil, it is
receiving the voltage and current induced in the other armature coils because one end of two different coils is
connected to the same commutator segment (e.g., coil 21 and coil




Fig. 10-7 Brush-commutator action in a simplex lap-                Fig. 10-8 Circuit diagram of separately excited
           wound armature                                                    generator

FIELD EXCITATION
     Dc generators take their names from the type of field excitation used. When the generator’s field
is supplied or “excited” from a separate dc source, such as a battery, it is called a separately excited
generator (Fig. 10-8). When a generator supplies its own excitation, it               called a self-excited
generator. If its field is connected in parallel with the armature circuit, it is called a shunt generator
(Fig. 10-9a). When the field         series with the armature, the generator is called a series generator
(Fig. 10-9b). If both shunt and series fields are used, the generator is called a compound
generator. Compound generators may be connected short-shunt (Fig. 10-9c), with the shunt field
parallel only with the armature, or long-shunt (Fig. 10-9d), with the shunt field in parallel with both the
armature and series field. When the series field so connected that its ampere-turns act in the same
direction as those of the shunt field, the generator is said to be a cumulative-compound genera-
tor. Field rheostats are adjustable resistances placed in the field circuits to vary the field         and
therefore the emf generated by the generator.
    The compound generator is used more extensively than other types of generators because it can be
designed so that it has a wide variety of characteristics.
 188                         DIRECT-CURRENT                                        MOTORS                     [CHAP. 10




                                                                                     Series
                                                                                     field
            Shunt field




                            (a) Shunt                                               (b) Series




                                                                  Shunt field
           Shunt field




                   (c) Short-shunt compound                                 (d)Long-shunt compound

                                   F'ig. 10-9 Circuit             of dc generators


DC GENERATOR EQUIVALENT CIRCUIT
    Voltage        current relationships of a dc generator                                         10-10) are, according
to Ohm's law,
                Vta = Vg - I a r a                      (10-1)
                 Vt = Vg - I a ( r a + ~ s )            ( 10-2)                   777
                 I L = I,   - I,                        (10-3)                         4
where     Vta = armature terminal           V
          Vg = armature generated             V                              f'
           10 = armature current, A
          V t = generator                   V
           ra = armature-circuit resistance, (n
           r, = series-field resistance, R
           r, = shunt-field resistance, R
                                                                                      I/'

                                                                                      .&?  T-
           IL = line current, A                                       L                     -
                                                                                            1            \L          %-
           I, = shunt-field current, A                                    Fig. 10-10 'DCgenerator

Example 10.3 A dc                    has a 100-kW,   250-V rating. What do these
    The generator                                100 kW of power to an external                                 Vt of the
generator 250 V when it                     its rated

Example 10.4 A 100-kW,       250-V dc generator                    current of 400 A,                          (including
brushes) of 0.025 a, and series-field resistance of 0.005 a. It is driven at 1200 revolutions                       by a
constant-speed           Compute                                                   ( 10-2),
                          Vg = Vt + Ia(ra + rs)
                             = 250 + 400(0.025 + 0.005) = 250 + 12 = 262V                   Ans.
CHAP. 101                  DIRECT-CURRENT GENERATORS AND MOTORS                                           189


GENERATOR VOLTAGE EQUATIONS AND VOLTAGE REGULATION
    The average generated voltage Vg of a generator may be calculated                 the formula
                                                     PZ4n
                                              vg = 60b                                                 ( 10-4)
                                                       x 10*
where    Vg = average generated voltage of a dc generator, V
          P = number of poles
          z = total        of conductors on armature (also       inductors)
          4=  flux  per
          n = speed of the armature, rpm
          b = number of parallel paths through armature, depending          of armature winding
For any generator, all factors in Eq. (10-4) are fixed values except 4 and n. Hence Eq. (10-4) may be
simplified to
                                                 Vg = k 4 n                                            (10-5)

where    k =      PZ
               60b x 108
Equation (10-5) indicates that the value of an induced emf in any circuit is proportional to the rate at
which       flux is being cut. Thus, if 4 is           while the n remains constant, Vg is doubled.
Similarly, if n is doubled, 4 remaining constant, Vg will be

Example 10.5 When a generator is being driven at 1200 rpm, the generated voltage          120 V. What will be
the generated voltage (a) if the field flux is decreased by 10 percent with the speed remaining    and (b) if
the speed is reduced to 1000 rpm, the field flux staying unchanged?

                                                         or

                                                                                              Ans.




    V o l t a g e regufation is the difference between the no-load (NL) and                  (FL) terminal
voltage of a generator and expressed as a percentage of the full-load
                                                     NL voltage - FL voltage
                            Voltage              =
                                                           FL voltage
Low-percentage regulation, characteristic of lighting circuits, means that the generator’s
voltage        the same at full load as it is at no

Example 10.6 A shunt generator has a full-load terminal voltage of 120V. When the load         removed, the
voltage increases to 150V. What is the percentage voltage regulation?
                               N L voltage - FL voltage - 150 - 120 - 30
                                                                    --=
        Voltage            =                                                  o.25 = 25%        Ans.
                                      FL voltage        - 120         120



LOSSES AND EFFICIENCY OF A DC MACHINE
   The losses of generators and motors consist of copper losses in the electric circuits and
mechanical losses due to the rotation of the machine. Losses include:
190                         DIRECT-CURRENT GENERATORS AND MOTORS                                       [CHAP. 10


      1. Copper losses
          (a) Armature 12R losses
         ( b ) Field losses
                (1) Shunt field 12R
                (2) Series field 12R
      2. Mechanical or rotational losses
         ( a ) Iron
               (1) Eddy-current loss
               (2) Hysteresis loss
         ( b ) Friction losses
               (1) Bearing friction
               (2) Brush friction
               (3) Windage or air friction loss
Copper losses are present because power                        a current is made to flow through a
resistance. As the armature rotates in a magnetic           the emf induced in the iron parts causes
eddy currents to flow which heat the iron        thus represent wasted           Hysteresis loss also
results when a magnetic                                   in one direction and then in an opposite
direction. Other rotational losses are caused by bearing friction, the friction of the brushes riding
on the commutator, and        friction or windage.
    Eficiency is the ratio of the useful        output to total       input.
                                           output
                              Efficiency = -
                                            input

Also                          Efficiency = input - losses -
                                                          -     output
                                                input       output + losses
Efficiency is usually expressed as a percentage.
                                                        output
                                        Efficiency(%) = -input x 100

Example 10.7 A shunt generator has an armature-circuit resistance of 0.4R,a field-circuit resistance of
60R, and a terminal voltage of 120V when it is supplying a load current of 30A (Fig. 10-11). Find the (a)
field current, (b) armature current, (c) copper losses at the above load. ( d ) If the rotational losses are 350 W,
what is the efficiency at the above load?




                                         Fig. 10-11 DC shunt generator




          r, = rt + I, = 30 + 2 = 3 2 ~ Ans.
          Armature loss = Izra = 322(0.4) = 410 W
          Shunt-field loss = I;rf = 22(60) = 240 W
          Copper loss = armature loss + shunt-field loss = 410 + 240 = 650W              Ans.
CHAP. 101                  DIRECT-CURRENT GENERATORS AND MOTORS


                                                               output
    (4                                        Efficiency = output + losses
         Output = P = VJL = 120(30) = 3600W
         Total losses = copper losses + rotational losses = 650 + 350 = 10oOW
         Efficiency (%) = 36003600
                               + loo0 100 = 3600
                                            4600
                                                 100 = 0.783(100) = 78.3%              Ans.




DIRECT-CURRENT MOTOR

Motor Principle
    Although the mechanical construction of dc motors and generators is very similar,
functions are different. The function of a generator is to generate a voltage        conductors are
moved           a field, while that of a motor to develop a turning           or torque, to produce
mechanical rotation.

Direction of Armature Rotation
     The left-hand rule is          to determine the direction of rotation of the. armature conduc-
tors. The left-hand         for motors is as follows:        the forefinger, middle finger,      thumb of
the left hand            perpendicular, point the forefinger in the direction of the field and the middle
finger in the direction of the current in the conductor; the thumb will point in the direction in which
the conductor tends to move           10-12a). In a single-turn                             to a magnetic
field (Fig. 10-12b), the direction of current in the left-hand conductor is out of the paper, while in
the right-hand conductor it is into the paper. Therefore, the left-hand conductor tends to move
upward        a force F,, and the right-hand conductor tends to move                       an equal force
F2. Both forces act to develop a torque which turns the coil in a clockwise direction. A
single-coil              10-12b) is              because it has dead centers and the torque developed
is                     results are obtained         a large           of coils is used as in a four-pole
motor        10-13). As the armature rotates and the conductors move away from under a pole into
the neutral plane, the current is reversed in them          the action of the commutator. Thus, the
conductors under a given          carry current in the same direction at all times.




                                                                                                             >
                                                                                                            >
                                                                             N                                    S
                                                                                                     1        >
                                                                                 -
                                                                                 --




                     ( a ) Single conductor                              ( b ) Two conductors of a single-loop coil
                             Fig. 10-12 Applications of left-hand rule for motors
192                      DIRECT-CURRENT GENERATORS AND MOTORS                                    [CHAP. 10


Torque
    The torque T developed by a motor                           to the strength of the magnetic field and to
the armature current.
                                                    T = k,+I,                                         (10-9)
where     T = torque, ft-lb
          k, = constant depending on physical               of motor
          + =  total number of lines of flux entering the armature from one N pole
          I, = armature current, A
                           Neutral plane




  Fig. 10-13 Armature-current directions in a four-
             pole      for counterclockwise rota-
             tion

DC MOTOR EQUIVALENT
      Voltage and current relationships of a dc motor equivalent circuit            10-14) are as follows:

                                           v,, = vg + I,r,                                           (10-10)
                                            V, = Vg + Ia(ra + rs)                                    ( 1 0 - 1 1)
                                            I L = I , + I,                                           (10-12)
where     V,, = armature terminal               V
          Vg = counter emf, V
           I, = armature current, A
           V, = motor                      V
and ra, r,, rr, IL, and If are as defined for the dc generator equivalent circuit (Fig. 10-10). A
comparison of a generator equivalent circuit        10-10) with a motor equivalent circuit   10-14)
shows that the only               the direction of line     armature current.
    The counter emf of a motor, Vg, is generated by the action of the armature conductors cutting
lines of force. If in a shunt motor, Eq. (10-11) is             by I, (rs = 0),
                                               V,Ia = VgI, + 1:r,                                    (10-13)
CHAP. 101                 DIRECT-CURRENT GENERATORS AND MOTORS                                           193


VJ, is the power             to the armature of the motor; I:r, is the power lost as heat in the
armature current; and VJ, is the power              by the armature. But this armature power is
not the useful output since some of it must        to overcome the mechanical or rotational losses
of the motor. The rated output of the motor is equal to the input (VJJ less the heat losses (12R)
and            losses. The common         for motor output is horsepower (hp),
                                                        watts
                                           Horsepower = -                                            (10-14)
                                                             746

Example 10.8 ( a ) Find the counter emf of a motor when the terminal voltage is 240V and the armature
current is 50 A. The armature resistance is 0.08 R. The field current is             (b) What is the power
developed by the motor armature? ( c ) What is the power delivered to the motor in kilowatts?
    (a)   Vt = vg + Iara      r, = 0
          Vg = Vt - Iara = 240 - SO(0.08) = 240 - 4 = 236V          Ans.
    (b) Power developed = V81a = 236(50) = 1 1 800 W
                      watts 1 1 800 15.8hp
        Horsepower = -= -=                          Ans.
                       746
    ( c ) Power delivered = VtlL = 240(50) = 12 000 W = 12 kW            Ans.


SPEED OF A MOTOR
    Speed                 by the number of revolutions of the shaft with respect to time           is
expressed in units of revolutions                    A reduction of the field flux of a motor causes
the               to increase. Conversely, an increase in the field flux causes the motor         to
decrease. Because the speed of a motor                   field excitation, a convenient means for
controlling the speed to vary the field flux by adjusting the resistance in the field circuit.
    If a motor          to maintain a nearly constant speed for varying loads, the motor          to
have a good speed regulation.                     is usually expressed as a percentage as follows:
                                               no-load speed - full-load
                          Speed regulation =                                                         (20-15)
                                                       full-load

Example 10.9 A 220-V shunt motor has an armature resistance of 0.2 R.     For a given    on the motor, the
armature current is 25 A. What is the immediate effect on the torque developed by the motor if the field flux
is reduced by 2 percent?
     The torque developed when I, = 25 A is
                                             TI = k&Ia   = 25kt4
and the counter emf is
                                  V,, = V, - Iar, = 220 - 25(0.2) = 215 V
If 4 is reduced by 2 percent, the value of V, is also reduced by 2 percent since V, = k4n and the speed n
cannot change instantly. Hence, the new counter emf is
                                         Vg2 = 0.98(215) = 210.7V
The new armature current is


and the new torque developed is

                                       T2 = kr(0.98)4(46.5) = 45.6 kt4
The torque increase is
194                       DIRECT-CURRENT GENERATORS AND MOTORS                                      [CHAP. 10


Thus a decrease in flux by 2 percent increases the torque of a motor 1.82 times. This increased torque causes
the armature speed to increase to a higher value, at which the increased counter emf (V,a n) limits the
armature current to a value just high enough to carry the load at the higher speed.

Example 10.10 The no-load speed of a dc shunt motor is 1200rpm. When the motor carries its rated load,
the speed drops to 1140. What is the speed regulation?
                                             NL speed - FL speed
                        Speed regulation =                                                                    (10-15)
                                                  FL speed




MOTOR TYPES

Shunt Motor
    This is the most common type of dc motor. It is connected in the same way as the shunt
generator (Fig. 10-15a). Its characteristic speed-load and torque-load curves (Fig. 10-15 b) show
that the torque increases linearly with an increase in armature current, while the speed drops
slightly as the armature current is increased. The basic speed is the full-load speed. Speed
adjustment is made by inserting resistance in the field circuit with a field rheostat. At one setting
of the rheostat, the motor speed remains practically constant for all loads. Starters used with dc
motors limit the armature starting current to 125 to 200 percent of full-load current. Care must be
taken never to open the field circuit of a shunt motor that is running unloaded because the motor
speed will increase without limit      the motor destroys itself.

                                                                                           I              I
                                                                         Speed             I              I
                                                                                                          I
                                                                                           I
                                                                                       c
                                                                                       51                 I
                                                                                                          I
                                                            Y                                             I
                                                            c



                                                            d
                                                            cn




            --
                                                                                           I              I
                                                                            Armature current

                     (a) Schematic diagram                        (6) Speed-load and torque-load curves

                             Fig. 10-15 Characteristics of a typical shunt motor


Series Motor
     The field of this type of motor is connected in series with the armature (Fig. 10-16a). The
speed varies from a very high speed at light load to a lower speed at full load (Fig. 10-16b). The
series motor is suitable for starting with heavy, connected loads (driving cranes and winches)
because at high armature currents, it develops a high torque and operates at low speed (Fig.
10-16b). At no load the speed of a series motor will increase without limit until the motor destroys
itself (Fig. 10-16b). Large series motors are therefore generally connected directly to their load
rather than by belts and pulleys.
CHAP. 101                DIRECT-CURRENT GENERATORS AND MOTORS                                            195




                               ‘s
                                              +
                              f--                          %
                                                           P
                                                           U




                                                           1
                                                           m




                                                                         Armature current
                 (a) Schematic                                 (b) Speed-load and torque-load
                              Fig. 10-16 Characteristics of a typical series motor
Compound Motor
     It combines the operating characteristics of the shunt and series motors (Fig. 10-170 and
b ) . The compound motor may be operated safely at no load. As load is added, its speed
decreases, and torque is greater compared with that of a shunt motor (Fig. 10-18).




                                                   +
                                                               9)


                                                               z
                                                               0
                                                               U




                                                               d
                                                               m
                                                                    1y;   $o<Q..e
                                                                                                MI


                                                                                                ‘J
                                                                                                51
                                                                                                rn
                                                                                                     I




                          I
                                                       I
                                                       I            1/ Torque, series
                                                                                compound

                                                                                shunt




                                        Armature current
                      Fig. 10-18 Comparative characteristics for shunt, series,
                                     and compound dc motors
196                         DIRECT-CURRENT GENERATORS AND MOTORS                                         [CHAP. 10


STARTING REQUIREMENTS FOR MOTORS
      There are two starting requirements for motors:
      1. Both                            are protected from flow of excessive current during the
         starting period by placing external resistance in series with the armature circuit.
      2. Motor-starting torque should              as large as possible to bring the motor up to full
         speed in minimum time.
    The amount of starting resistance needed to limit the armature starting current to the desired
value
                                          R , = -vt-  rll                                  (10-16)
                                                         1,
where      R, = starting resistance, R
           Vr = motor            V
           I, = desired armature starting current, A
           r, = armature resistance, R

Example 10.11 A shunt motor on a 240-V line has an armature current of 75A. If the field-circuit
resistance is IWR, find the field current, line current, and power input to the motor (Fig. 10-19).



                            1, = 1, + I, = 2.4 + 75 = 77.4A           Ans.
                          PIN = VtI, = 240(77.4) = 18 576 W = 18.6 kW              Ans.




                                                                                           I, = starting current
                                                                                           R, = starting resistance




               Fig. 10-19 Shunt motor                           Fig. 10-20 Equivalent dc motor circuit at
                                                                           start-up

Example 10.12 A 10-hp shunt motor with an armature resistance of 0.5R is connected directly to a 220-V
supply line. What is the resulting current if the armature is held stationary? Neglect the field current. If
the full-load armature current is 40 A and it is desired to limit the starting current to 150 percent of this value,
find the starting resistance that must be added in series with the armature.
    At start-up, when a motor armature is stationary, no counter emf                  generated. The only factor
limiting the current being drawn from the supply, therefore, is the armature-circuit resistance (Fig. 10-20). At
motor start-up, with R, = 0, V, = 0, and negligible shunt current,

                                        l = vr, r =220
                                                    - = 440A
                                                   0.5                 Ans.

which is far above the normal full-load armature current for a motor of this size. The result will be probable
damage to brushes, commutator, and windings.          R, added in series in the armature circuit,



                                  - 220
                                  ---          0.5 = 3.67 - 0.5 = 3.17n          Ans.
                                    40( 1.5)
CHAP. 101                    DIRECT-CURRENT GENERATORS AND MOTORS                                            1 97


                                             Solved Problems
10.1   A generator has an emf of 520 V, has 2000 armature conductors or inductors, a flux per pole
       of 1300000 lines, a speed of 1200rpm, and the armature has four paths. Find the number
       of poles.
            From Eq. (10-4)'
                             Vg(60b x 10') -          520[60(4) x 10'1
                                                                               = 4poles        Ans.
                       P =          z4n        (2 x 103)(1.3 x 106)(1.2 x 103)


10.2   A shunt-field winding of a 240-V generator has a resistance of 50 LR (Fig. 10-21). How much
       field-rheostat resistance must be added to limit the field current to 3 A when the generator is
       operating at rated voltage?

            Solve Ohm's        for r : I, = - Vf
                                            r, + r




                                                                            +
                                                                          I , = 20 A




                                                                   -     Vg = 115 V




       Fig. 10-21 Adding resistance to limit I,                                   Fig. 10-22


10.3   The terminal voltage of a shunt generator is 110 V when the generated voltage is 115 V and
       the armature current is 20 A (Fig. 10-22). What is the armature resistance?
            The generated voltage minus the voltage drop across the armature equals the               voltage.
                                                     V, - l U r a = Vt                                     (10-2)

       Solve for r,:



10.4   The terminal voltage of a 75-kW shunt generator is 600V at rated load. The resistance of
       the shunt field is 120 LR and the armature resistance is 0.2 R (Fig. 10-23). Find the generated
       emf.
           The rated           is




                                    I , = If + I L = 5 + 125 = 130A
                                    Vg = Vt + Iura = 600 + 130(0.2) = 626V             Ans.
198                           DIRECT-CURRENT                                AND MOTORS                    [CHAP. 10


10.5   A shunt generator requires 50-hp input from its prime mover when it delivers 150A at
       240V. Find the efficiency of the generator.
                                        Output = 240(150) = 36 000 W
                                         Input = 50(746) = 37 300 W
                                                 output x 100
                                Efficiency (%) = -
                                                  input
                                                 36 000
                                               = -100 = 0.965(100) = 96.5%                      Ans.
                                                 37 300




v =



                       Fig. 10-23                                      Fig. 10-24 Short-shunt


10.6   A short-shunt compound generator has a terminal voltage of 240V when the line current is
       50 A (Fig. 10-24). The series-field resistance is 0.04 CCZ. (a) Find the voltage drop across the
       series field. (b) Find the voltage drop across the armature. ( c ) Find the armature current if
       the shunt-field current is 2 A. ( d ) If the losses are 2000 W, what is the efficiency?
       (a)   ILrs = SO(0.04) = 2 V           Ans.
       ( b ) Vt, = Vt + ILrs = 240 + 2 = 242V     Ans.
       (c) I, = r, + = 2 + 50 = 5 2 ~ Ans.
       ( d ) Output = V , I L = 240(50) = 12000 W
                                           output
                   Efficiency       = output + losses    x 100

                                    -      l2 Oo0
                                                     100 = 12000100 = 0.857( 100) = 85.7%              Ans.
                                        12000 + 2000       14


10.7   From the following data on a shunt generator (Fig. 10-25), find the efficiency at full load:
                                                  Rated power output = 10 kW
                                                         Rated voltage = 230V
                                                  Armature resistance = 0.6In
                                                       Field resistance = 182Cn
                                          Rotational losses at full     = 700 W
             First find the                     and then the copper losses.



                                                    I , = - = - =230     1.26 A
                                                           rf    182
                                           I , = I, + I L = 1.26 + 43.48 = 44.74 A
CHAP. 101               DIRECT-CURRENT GENERATORS AND MOTORS                                    199


       Copper losses:
                                    Armature: I:ra = (44.74)*(0.6)= 1201 W
                                    Field:     I;rf = (1.26)*(182) = 289W
                                              Total copper losses = 1490 W
       Total losses:
                                             Copper:       1490 W
                                             Rotational:    700 W
                                                  Total = 2190W



                              -       10 OOO
                                                         looOO100 = 0.820(100) = 82.0%   Ans.
                              - 1 0 0 0 0 + 2 1 9 0 1 ~ =12
                                                          - 190




                                                                         Fig. 10-26

10.8   A shunt motor draws 6 kW from a 240-V line (Fig. 10-26). If the field resistance is 100 R,
       find IL, If, and I,.
                            PIN = VtIL




                                  = IL - If = 25 - 2.4 = 22.6 A     Ans.

10.9   A shunt motor connected       a 1 2 0 4 line runs at a speed of 1200rpm when the armature
       current is 20A (Fig. 10-27). The armature resistance is 0.05R. Assuming constant field
       flux, what is the speed when the armature current is 60A?
200                       DIRECT-CURRENT GENERATORS AND MOTORS                                       [CHAP. 10


          Speed is directly proportional to counter emf.
                                 V,I = Vt - lalra = 120 - 20(0.05) = 119V
                                 vg2 = v, -       = 120 - 60(0.5) = 117 v
                                 b=It!
                                 V,,       n2
                                  n2 = b n l         =   1117
                                                           19 1200 = 1180rpm          Ans.
                                       R   '    I



10.10 The counter emf of a shunt motor is 218 V, the field resistance is 150 0, and the field current
      is 1.5 A. The line current is 36.5A (Fig. 10-28). (a) Find the armature resistance. (b) If
      the line current during start-up must be limited to 55 A, how much starter resistance must be
      added in series with the armature? (c) What is the horsepower developed by the
      motor? If the mechanical and iron losses total 550 W, what is the horsepower output?


           1, = 1L. - 1, = 36.5 - 1.5 = 35 A                                                        *
                                                                                                  rL = 36.5 A
           lara + V, = Vt



           Neglecting the field current,                                           218 V          I, = 1.5 A
                                                                         Vs    T



                  R , = ' -V
                           r     = -225
                                     -         0.2


           The horsepower of the motor the horsepower developed by the armature. The power output is the
           horsepower available at the motor shaft.
                                                    V,lu = 218(35) = 7630 W
                                                    1 hp = 746W

           so                                        hp = 7630 = 10.2          Ans.
                                                           746
           The horsepower output is the horsepower developed by the armature less the power                     to
           overcome the mechanical or rotational losses of the motor.

                                    hp output =
                                                       7630 - 550 -   - - 9.5
                                                                  - -7080                  Ans.
                                                          746        746

10.11 The efficiency at rated load of a 100-hp 600-V shunt motor is 85 percent (0.85) (Fig. 10-29). The
      field resistance is 1900 and the armature resistance is 0.220. The full-load speed is
      1200 rpm. Find (a) the rated line current, (b) the field current, (c) the armature current at full
      load, and ( d ) the counter emf at full load.
                       output
      (a) Efficiency = -
                        input

            Input = Output = 100(746)= 87765W
                       efficiency     0.85
            V,lI. = input = 87 765 W
                      87 765 -
               1 1 ~= -       --       - 146.3A
                                87 865 -
                                                  Ans.
                        vt        600

                '   V
      ( b ) 1, = rf = -
                          600
                          190
                              = 3.16A       Ans.

      (c) 1, = 11. - 1, = 146.3 - 3.2 = 143.1 A       Ans.
      ( d ) V, = V, - luru = 600 - 143.1(0.22) = 600 - 31.5 = 568.5                    Ans.
CHAP. 101                      DIRECT-CURRENT                                      MOTORS                               20 1




                                                                                                                 I5 V




                          Fig. 10-29                                                      Fig. 10-30


10.12 A long-shunt                   has an armature current of 12 A, armature resistance of O.OSR,
      and a series-field resistance of 0.15s1 (Fig. 10-30). The motor is connected to a 1 1 5 4
      supply.        (a) the counter emf and ( 6 ) the horsepower developed in the armature.




                                  -
      (a)   Vr = Vg + L(ra + rs)
            Vg = Vt - Ia(ra + rs) = 115 - 12(0.05 + 0.15) = 115 - 12(0.2) = 115 - 2.4 = 112.6V                       Ans.
                                                - 1.8hp
                                        112*6(12)
                                  746 = - 746 -
      (b) Developed             =                                    Ans.



10.13 At full    a 15-hp motor draws 55 A from a 2 4 0 4 line. (a) What is the motor                                    (6)
      What is the motor efficiency at no load?
      (a) Motor input = ILVt = 55(240) = 13200 W
          Motor output = 15 hp = 15(746) = 1 1 190 W
                         Motor efficiency (%) = -
                                                                  11 190
                                                Output x 100 = -100 = 0.848(100) = 84.8%                      Ans.
                                                 input         13 200
      (b) The       of a motor is considered                                       a load. At no load,
          zero. Therefore,
                                                   Motor efficiency = 0%           Ans.


10.14 At rated       the rotational       losses plus                       of a 240-V shunt motor are
      900 W (Fig. 10-31). The field resistance is 94 R and the armature-circuit resistance is
      0.15fl. The rated motor current is 145 A. Find (a) the field copper loss, ( b ) the armature
      copper loss, ( c ) the rated horsepower output, and ( d ) the efficiency.

      ( a ) If = - =
                    Vr            2.55A
                    rf

                                       Field copper loss = I?r, = (2.55)2(94) = 611 W            Ans.
      ( b ) I, = I L - If = 145 - 2.55 = 142.5A               Ans.
                                Armature                = Iira = (142.5)2(0.15) = 3046 W               Ans.
      ( c ) Total                   = 61 1 + 3046 = 3657 W
                                 Rotational losses = 900 W
                                         Total       = 4557 W
                           Output = input - total
                                  = VtfL - total           = 240(145) - 4557 = 34 800 - 4557 = 30 243 W
                                                                 30243      40.5
                                             Rated hp output = -=                         Ans.
                                                                  746
202                         DIRECT-CURRENT                                  MOTORS                [CHAP. 10


                               output x 100
        ( d ) Efficiency (%) = -
                                input
                               30 243
                             = -100 = 0.869(100) = 86.9%              Ans.
                               34 800




                            IL = 145 A                                      I r I                      I
                                                                                                 v, = 120 v
                                                                                                     I
 ‘f                                                                           I        v.- = ?         I

                    vg


                    Fig. 10-31                                                Fig. 10-32

10.15 A 10-hp short-shunt compound motor is supplied by a 1 2 0 4 source (Fig. 10-32). The full
      load current is 95 A. The shunt-field resistance is 90n, the armature resistance is 0.060
      and the series-field resistance is 0.04. Find (a) the shunt-field current, ( b ) the armature
      current, (c) the counter emf, (d) the efficiency at full load, (e) the full-load copper losses, and
        cf) the rotational losses.



        ( b ) I, = I L - If = 95 - 1.29 = 93.7 A           Ans.
        (c) V, = Vt, - IJ, = 116.2 - 93.7(0.06) = 110.6V             Ans.
        (d) Efficiency = -  output ---10hp --=lO(746) -=
                                                             7460 o.654
                             input    VtIL 120(95) 1 1 400
              Efficiency (%) = 0.654(100) = 65.4%            Ans.
        (e) Shunt-field copper         = I;rf = (1.29)2(90) = 150 W
              Series-field             = I z r , = (95)’(0.04) = 361 W
                Armature               = I:r, = (93.7)’(0.06) = 527 W
                                        Total             = 1038W       Ans.
        cf) Total         = input - output = 11 400 - 7460 = 3940 W
             Total        = total             + rotational       = 3940
             Rotational        = 3940 - 1038 = 2902 W       Ans.




                                     Supplementary Problems
10.16   How many amperes will a 60-kW 240-V dc                        at full load?        Ans. 250A

10.17   What is the full-load kilowatt       of a dc              if the full-load line current is 30A and the
        terminal        is 115 V?     Ans. 3.45 kW
CHAP. 101                   DIRECT-CURRENT GENERATORS AND MOTORS                                                 203


10.18   A shunt generator generates 100 V when its speed is 800 rpm. What emf does it generate if the speed
        is increased to 1200rpm, the field flux remaining constant?  Ans. 150V

10.19   If the generated voltage of a generator is 120 V and the IR drop in the armature circuit is 5 V, what is
        the terminal voltage?     Ans. 115 V

10.20   A 240-V shunt generator has a field resistance of 100R. What           the field current when the generator
        operates at rated voltage?   Ans. 2.4A

10.21 A shunt generator is rated at 200 kW at 240 V.       ( a ) What is the full-load current? (b) If the field
        resistance is 120R, what is the field current? (c) What is the full-load armature current?
        Ans. (a) 833.3A; (b) 2A; (c) 835.3A

10.22   In a 50-kW 250-V shunt generator, 260 V is generated in the armature when the generator delivers rated
        current at rated voltage. The shunt-field current is 4A. What is the resistance in the armature
        circuit?    Ans. r, = 0.049R

10.23   A shunt generator has a field resistance of 50R in series with a rheostat. When the terminal
        of the generator is 110 V, the field current is 2 A. How         resistance is cut in on the shunt-field
        rheostat?    Ans. 5R

10.24   Find the efficiency at full      of a 50-kW generator when the input is 80               Ans. 83.8%

10.25   The losses of a 20-kW generator at full        are 5000 W. What        its efficiency?      Ans.   80%

10.26   The full-load losses of a 20-kW 230-V shunt generator are as follows:
                                                      Field 12R loss = 200W
                                                  Armature 1*R loss = 1200 W
                                          Windage and friction losses = 400 W
                                                            Iron loss = 350 W
        Find the efficiency at full          Ans. 90.3%

10.27   A short-shunt compound generator delivers 210A to a load at 250V. Its shunt-field resistance is
        24.6 R,its shunt-field rheostat resistance is 6.4 0,its             resistance is 0.038 R, and      armature
        resistance is 0.094R. Find the copper losses in ( a ) the shunt-field                   ( b ) the shunt-field
        rheostat, (c) the series field, and ( d ) the armature winding. (e) If the rotational losses at full      are
        800 W, find the efficiency.
        Ans. ( a ) 1704W; ( b ) 443W; (c) 1676W; (d) 4480W; (e) 85.2%

10.28   The voltage of a 110-V generator rises to 120 V when                   removed. What is the percent of
        regulation of the generator?  Ans. 9.1%

10.29   Indicate direction of rotation of the motor armature in        10-33a and b.
        Ans. ( a ) Clockwise; (b) counterclockwise




                                                                    E
                                                                                     A



                                                                                                  n
204                        DIRECT-CURRENT GENERATORS A N D MOTORS                                   [CHAP.10


10.30   Find the armature current of a shunt motor when the terminal voltage is l l O V , the counter emf is
        108 V , and the armature-circuit resistance is 0.2 R. Ans. 10 A

10.31 A certain shunt motor is connected to a 240-V line. The armature-circuit resistance is 0.1 R.      When
      the armature current is 50 A, what is the counter emf?  Ans. 235 V

10.32 A shunt motor draws a current of 38 A from a 120-V source. The field-circuit resistance is 50 R and
      the armature-circuit resistance is 0.25 R. Find (a) the field current, (b) the armature current, (c) the
      counter emf, and ( d ) the counter emf at start-up.
      Ans. (a) 2.4 A; (b) 35.6A; (c) 1 1 1 . 1 V; (d) OV

10.33 A 10-hp motor has a shunt-field resistance of 110 Q and a field current of 2 A. What is the applied
      voltage?   Ans. 220V

10.34 What horsepower is developed by a motor when the armature current is H A , the applied voltage is
      130 V, and the counter emf 124 V?    Ans. 3 hp

10.35   A motor has a no-load speed of 900rpm and a full-load speed of 855rpm. What is the speed
        regulation?  Ans. 5.3%

10.36 The armature resistance of a shunt motor is 0.05 R.     When the motor is connected across 120 V, it
        develops a counter emf of 1 1 1 V. Find (a) the IR drop in the armature circuit, ( b ) the armature
        current, (c) the armature current if the armature were stationary, and ( d ) the counter emf when the
        armature current is 155 A.     Ans. (a) 9 V ; (b) I, = 180 A; (c) I, = 2400A; ( d ) V, = 112.2V

10.37   The power input to a shunt motor is 5810 W for a given          on the motor. The terminal voltage
        220 V, the I,& drop is 5.4 V, and the armature resistance is 0.25 Q. Find (a) the counter emf, ( b ) the
        power taken by the field, and (c) the field current.
        A ~ s .( a ) V, = 214.6V; ( b ) 1056 W; (c) If = 4 . 8 A

10.38 A 10-hp short-shunt compound motor is supplied by a 120-V source. The full-load current is
      86A. The shunt-field resistance is 90Q, the armature resistance is O.O7R, and the series-field
      resistance is 0.06. Find (a) the shunt-field current, (b) the armature current, (c) the counter emf, ( d )
      the efficiency at full load, (e) the full-load copper losses, and cf) the rotational losses.
      Ans. (a) If = 1.28 A; (b) I, = 84.7 A; (c) V, = 108.9V; (d) 72.3%; (e) 1093 W; cf) 1767 W

10.39 If the 10-hp motor of Prob. 10.38 is connected by long-shunt and the parameters given remain the
      same, find the same quantities.
      Ans. (a) If = 1.33 A; (b) I, = 84.7 A; (c) V, = 109.0V; (d) 72.3%; (e) 1091 W; (f) 1769 W
                                                                         Chapter 11

               Principles of Alternating Current
GENERATING AN ALTERNATING
    An ac voltage is one that continually          in magnitude                 reverses in polarity
(Fig. 11-1). The zero        is a horizontal line across the center. The
voltage                             in magnitude.                        the horizontal
positive (+) polarity, while voltages below the                              (-) polarity.




          +
Voltage   0


          -




          Fig. 11-1 An ac voltage waveform                    Fig. 11-2 Loop rotating in magnetic field
                                                                        produces an ac voltage

    An ac voltage can be                   by a generator, called        alternator (Fig. 11-2). In the
simplified generator shown,        conductor loop rotates through        magnetic field and cuts lines of
force to generate an            ac voltage across its                                         of the loop
around the          is a cycle. Consider                of the       at each quarter turn during a cycle
(Fig. 11-3). At position A, the loop                         to the           flux and therefore cuts no
lines of force. The                     is zero. At top           B, the       cuts across the field at 90"
to produce maximum voltage. When it reaches C, the conductor is again moving parallel to the field
and cannot cut across the flux. The ac wave                A to C is cycle of revolution, called an
alternation. In D, the         cuts across the flux again for maximum voltage,                 flux is cut
in the                                                B (right to left). Thus the                at D is
negative.                         the last quarter turn in the cycle           returns to position A, the
point        it started. The cycle of voltage                       in positions A'B'C'D'A"as the loop
continues to rotate (Fig. 11-3). A cycle                                               successive points
having            value and           in the                   For example, 1 cycle       be shown
between B and B' (Fig. 11-3).


ANGULAR
    Because              of voltage          to rotation of the             a circle, parts of the
circle are expressed in angles. The complete       is 360". One half cycle, or one alternation, is

                                                   205
206                            PRINCIPLES OF ALTERNATING CURRENT                          [CHAP. 11




                   Fig. 11-3 Two cycles of alternating voltage generated by rotating
                             loop. (From B . Grob, Basic Electronics, 4th. ed., McGraw-
                             Hill, New York, 1977, p. 313)

180". A quarter turn is 90". Degrees are also expressed in radians (rad). One radian is equal to
57.3'. A complete circle has 27r rad; therefore
                                                  360" = 27r rad
                                                           7r
Then                                                1" = -rad                                 (1 1-1)
                                                         180

or                                                       180"
                                                 1 rad = -                                    ( 1 1-2)
                                                               7r

    In a two-pole generator (Fig. 11-2), the rotation of the armature coil through 360 geometric
degrees (1 revolution) will always generate 1 cycle (360") of ac voltage.             in a four-pole
generator, an armature rotation through         180 geometric degrees will generate 1 ac cycle or 180
electrical            Therefore, the degree markings           the horizontal axis of ac voltage or
current refer to electrical degrees rather than geometric degrees.

Example 11.1 How many radians are there in 30'?
   Use Eq. ( 1 1 - 1 ) to convert from degrees into radians.



Example 11.2 How many degrees are there in 7r/3 rad?
   Use Eq. ( 1 1-2) to convert from radians into degrees.
                        7r       7T         equivalent" 7r
                        --ad   = --ad   x              = --ad
                         3       3             1 rad      3

    In              calculators, there is a selector switch to designate       either in degrees or
radians          RAD), so it normally             necessary to convert the angles. However, it
useful to know how the angle conversions can be done.

SINE WAVE
    The            waveform (Fig. 11-3) is called a sine waue. The instantaneous value of voltage
at any point      the sine       expressed by the equation
                                                   U = V M sin 8                              ( 1 1-3)
 CHAP. 111                   PRINCIPLES OF ALTERNATING CURRENT                                                     207


where       U = instantaneous value of voltage, V
           VM = maximum value of voltage, V
            8 = angle of rotation, degrees (8 is the Greek lowercase letter theta)

Example 11.3 A sine                                       to a maximum of 10 V. What            the value of voltage at
the instant that the cycle is at 30'3 45'3 60'3 90'3 180'3 270'3
     Substitute 10 for V M in Eq.( I 2-3):
                                     U = 10 sin 8

At 30":                              U = 10sin30" = lO(0.5) = 5 V          Ans.
At 45":                              U = 10 sin 45" = lO(0.707) = 7.07 V          Ans.
At 60":                              U = 10sin60" = lO(0.866) = 8.66V             Ans.
At 90":                              U = 10sinW = lO(1) = 1OV              Ans.
At 180":                             U = 10sin180" = 1qO) = OV             Ans.
At 270":                             U = 10sin270" = 10(-1)   = -1OV          Ans.


ALTERNATING CURRENT
    When a sine wave of alternating voltage is connected across a load resistance, the current that
flows in the circuit is also a sine wave (Fig. 11-4).



                                   +
                           AC
                           current
                           i, A

                                   -


                                   Fig. 11-4 One         of alternating

Example 11.4 The ac sine                     (Fig. 11-5a) is applied across a load resistance    10R (Fig.
11-56). Show the resulting sine
    The instantaneous       of current is i = u/R. In a pure                      current waveform
the polarity of the voltage            The maximum value of current is



     In the form of an            i = IM sin 8. (See Fig. 11-6.)


 + 10 v                                                                                     I   lM


AC
voltage,                                                                          current
V                                                                                 i, A

 - 10 v                                                                                     I
                                                                                                         -1,


Fig. 11-5 An ac voltage         is applied to a simple resistance                                Fig. 11-6
208                                 PRINCIPLES OF ALTERNATING CURRENT                                 [CHAP. I1


FREQUENCY AND PERIOD
    The number of cycles per second is     frequency. It is            the symbol f and
expressed in hertz (Hz). One           second equals one hertz. Thus 60 cycles per second
(sometimes abbreviated cps) equals 60Hz. A frequency of 2 H z (Fig.                    the
frequency of 1 Hz (Fig. 11-70).




                            (U)   f = 1 HZ                                            ( b )f = 2 HZ
                                         Fig. 11-7 Comparison of frequencies

    The amount of time for the completion of 1 cycle is the period. It is indicated    the symbol T
for time      expressed in seconds (s). Frequency and             are reciprocals of each other.
                                                                 1
                                                           f =.r                                         ( 2 2-4)

                                                                 1
                                                           T=r                                           ( 1 1-5)

The higher the frequency, the shorter the period.
    The angle of 360" represents the time for 1 cycle, or the period T. So we can show the
horizontal axis of the sine     in units of either electrical    or seconds (Fig. 11-8).



                                                                     +5 A

           v or i                                                         i

                0                                                         (I




                                                                      -5 A
                    k+---- 1 period-4
          Fig. 11-8 Relationship between electrical                                   Fig. 11-9
                    degrees and

Example 11.5 An ac current varies through one complete cycle in 1/1OOs. What are the period and
frequency? If the current has a maximum    of 5 A, show the current waveform in units of degrees and
milliseconds.

                                  T = -100     or       0.01 s       or        10ms   Ans.

                                                    1
                                             f'-T                                                         ( I 1-4)

                                               =-- I       - 100Hz             Ans.
                                                    1/10
      See Fig. 11-9 for the waveform.
CHAP. 111                   PRINCIPLES OF ALTERNATING                                                  209


    The wavelength A (Greek                           is the length of one                   or cycle. It
depends                    of the                                            of transmission.
as a formula,
                                                     velocity
                                              A =                                                   ( 1 1-6)
                                                    frequency
For electromagnetic                             in air or a vacuum is 186 0o0 mi/s,      3 x 108m/s, which
is the speed of light. Equation ( 1 1-6) is written in the          form

                                                     = -C                                           ( 1 1-7)
                                                        f
where A = wavelength, m
      c = speed of light, 3 x 108m/s,a constant
      f = radio frequency, Hz

Example 11.6 TV Channel 2 has           of 60 MHz. What is its
   Convert f = 60 MHz to f = 60 X 10" Hz                  Eq. ( 1 1-7).

                                   A = - c=    3x10'=5m          Ans.
                                          f   60 x log

PHASE RELATIONSHIPS
    The phase angle between                     of the same                                      at a
given instant of time. As an                         angle between         B and A (Fig. ll-10a) is
90". Take             of time at 90". The                            in angular     of time. Wave
B starts at maximum value                   to zero         at W",while wave A starts at zero
increases to maximum value at 90". Wave B reaches           maximum value 90" ahead of wave A, so
wave B leads          A by 90". This 90" phase                              B and A is maintained
throughout                          all successive           At any        of time,       B has
value that wave A will have 90" later. Wave B is a cosine wave because it is               90" from
wave A, which is a sine                            are called sinusoids.

                         ,Cosine wave B                              ve
                                                                     A
            Voltage
                                                                           Counterclockwise
                  +                                                        direction


                                                                                         3

                                                                             Reference
                                                                             phasor



                              (a) Waveforms                               (b) Phasor diagram
                        Fig. 11-10 Wave B leads wave A by a          angle of 90"

PHASORS
    To compare               or phases of alternating           currents, it is more
to use                                 to the voltage     current waveforms. A phasor is a
quantity that has magnitude and             The terms phasor and vector are used for quantities
2 10                         PRINCIPLES OF ALTERNATING CURRENT                               [CHAP. 11


that                                  a phasor                   with time, while a vector
direction in space.                   of the arrow in a phasor diagram indicates       magnitude of the
alternating voltage. The angle of the arrow with respect to the
angle. One                              as the reference.
with the                by means of the angle between                         For example,             VA
represents the voltage wave A with a phase angle of 0" (Fig. 11-lob). The                  V B is
(Fig. ll-lob) to show                       angle of 90" with respect to phasor VA, which is
reference.              lead angles are shown in the
phasor, VB leads V Aby 90"(Fig. 11-lob).
     Generally,                           is horizontal,                to 0". If V B were         as the
reference (Fig. 11-llb), V A would have to be 90" clockwise in order to have
angle. In this case VA lags V B by 90". There is no fundamental                            VB leading V A
by 90"(Fig. l l - l l a ) or V Alagging V B by 90"(Fig. 11-llb).




                               Reference
                               phasor
                                                                   Clockwise
                                                                   direction




                          (a) 5 leads 5 by 90"              ( b ) 5 lags VB by 90"


                               Fig. 11-11 Leading and        phase angles



    When two waves    in phase     l l - l 2 u ) , the  angle is zero. Then                       add
(Fig. 11-12b). When two        are exactly out of phase (Fig. 11-13a), the                    angle is
180". Their          are opposing          11-13b). Equal         of opposite
other.




                      I

                           (a) Waveforms                     (b) Phasor diagram

                              Fig. 11-12 Two waves in phase with        of 0"
CHAP. 111                      PRINCIPLES OF ALTERNATING                                                           ,211




                        (a) Waveforms                             (b) Phasor
                        Fig. 11-13 Two              in opposite     with angle of 180"

Example 11.I What                 angle between       A and B (Fig. 1 1- 14)? Draw the                     diagram first
with     A as reference            with wave B as reference.




                                            /
                                        /
                                        0                            Time




                                                30'4      t


                                    Fig. 11-14 Finding the           angle
                                                    between        A and
                                                    wave B
    The phase           the angular                                                              A and B. Convenient
corresponding        are the maximum, minimum, and zero               of each                   At the zero crossings on
the               (Fig. 11-14), the    angle 8 = 30". Since            A reaches
B does, A leads B.
Wave A as reference: VB lags V A by 30".                                   nce       Ans.



                                                       Wave A
                                                                           ve
Wave B as reference: V,, leads VB by 30".
                                                  Wave B
                                                                       ~




                                                                                Ve, reference     Ans.

Though             are not       to scale, V A is                     VBbecause the maximum value of wave
A is              of wave B.

CHARACTERISTIC                    OF VOLTAGE AND CURRENT
    Since an ac sine                or current has      instantaneous values              cycle, it
is convenient to specify               for comparing one wave       another. The peak, average, or
root-mean-square (rms) value          be specified (Fig. 11-15). These values       to current or
voltage.
212                              PRINCIPLES OF ALTERNATING CURRENT                            [CHAP. 11


                                       rrns = 0.707 peak
               av = 0.637 peak




                                  Fig. 11-15 Amplitude values
    The peak value is the maximum value V M or IM. It applies to either
peak.      peak-to-peak (p-p) value may be specified and                          value when the
positive                   are symmetrical.
    The average value is                       of all values in a sine      for 1 half-cycle.
half-cycle used for the                       a full                   value is
                              Average value = 0.637 x peak value                              ( 11-8)
or                                      V,, = 0.637 Vm
                                         I,, = 0.637 I M
      The root-mean-square value or efectiue value is 0.707 times               peak value.
                                       RMS value = 0.707 x peak value                            ( I 1-9)
or                                              V,,, = 0.707 V M
                                                I,,, = 0.707 I M
 The              of an                                      to the                of direct current or
 voltage in heating           An alternating voltage with an rms value of 115 V, for example, is just
 as effective in heating     filament of a light bulb as 115 V from a steady dc voltage source.
this reason, the                    called the
     Unless                        all sine        ac measurements are given in rms values.
letters V and I are used to denote rms voltage and current. For                     V = 220V (an
 power-line voltage) is understood to mean 220 V rms.
     Use         11-1 as a convenient way to convert         one characteristic value to another.
                     Tablell-1 Conversion Table for AC Sine Wave Voltage and Current

                                 Multiply the        I      BY     To Get the Value

                                 Peak                      2       Peak-to-peak
                                 Peak-to-peak              0.5     Peak
                                 Peak                      0.637   Average
                                 Average                   1.570   Peak
                                 Peak                      0.707   RMS (effective)
                                 RMS (effective)           1.414   Peak
                                 Average                   1.110   RMS (effective)
                                 RMS (effective)           0.901   Average
CHAP. 111                      PRINCIPLES OF ALTERNATING CURRENT                                                   213


Example 11.8 If the peak              for an ac wave      60 V, what are its average and
                                    Average        = 0.637 x peak value                                         ( I 1-8)
                                                   = 0.637(60) = 38.2V               Ans.
                                   RMS         = 0.707 x peak value                                             ( 11-9)
                                               = 0.707(60) = 42.4V           Ans.

Example 11.9 It is often necessary to convert from            to peak                       the formula.
   Start with
                                         RMS           = 0.707 x peak                                           ( I 1-9)
Then invert:

                             Peak value = -x rms                  = 1.414 X rms
                                          0.707
or


Verify this relationship by referring to Table 11-1.

Example 11.10 A commercial ac power-line                      is 240V. What are the peak
voltages?
     AC measurements are given in rms                           otherwise. From Table 11-1,
                              V,    = 1.414 Vrms = 1.414(240) = 339.4V               Ans.
                                   VP-,,= 2VM = 2(339.4) = 678.8V               Ans.


RESISTANCE            AC CIRCUITS
    In an ac circuit with only resistance, the current variations are in phase with the applied voltage
(Fig. 11-16). This in-phase relationship between V and I means that such an ac circuit can be
analyzed by the same methods used for dc circuits. Therefore, Ohm’s laws for dc circuits are
applicable also to ac circuits with resistance only. The calculations in ac circuits are generally in rms
values, unless otherwise specified. For the series circuit (Fig. 11-16a), I = V / R = 1 loll0 = 1 1 A.
The rms power dissipation is P = I’R = 1l2(10) = 1210 W.


                                                          V




               U
     (a) Schematic diagram                         (b) Waveforms of i and t’                     (c) Phasor diagram, I
                                                                                                     in phase with V
                                   Fig. 11-16 AC circuit                resistance

Example 11.11 A 110-V ac voltage                 across 5- and 15-R resistances in series (Fig. 11-17a). Find
the current and         drop across each resistance. Draw the phasor
     Use Ohm’s law.


                                              ’
                                         I=-=--
                                              RT    20
                                                         - 5.5A          Ans.
2 14                            PRINCIPLES OF ALTERNATING CURRENT                                                 [CHAP. 11


                                          V1 = 1RI = 5.5(5) = 27.5 V                Ans.
                                          V2 = lR2 = 5.5(15) = 82.5V                 Ans.
Since    ac voltages VI and Vzare in phase,                    Vt and V2 are       to obtain             V. See Fig. 11-17b.
The length of each phasor is proportional                              I is in phase with V.

                                                                  V phasor                                I, V phasors
                                                 0                                   9v            /
                                                                                                            I                  V



                                                             LV*J
                                                              \




                                                 +-v,                                  v2



                  (4                                                                   (b)
                                                             Fig. 11-17



                                                 Solved Problems
11.1      Find the instantaneous current when 8 = 30" and 225" for the ac current wave                                   11-18),
          and locate these points   the waveform.
               It is seen that 1" = 100mA.              current wave is
                                                         i = IM sin 8 = 100 sin 8
          At 8 = 30":                    i = 100 sin 30" = lOO(0.S) = 50 mA                 Ans.
          At 8 = 225":            i = 100 sin 225" = loo(-0.707) = -70.7 mA                     Ans.
          See Fig. 1 1- 19.

                                                                     + 100 mA
                                                                      -+ 50 mA
                                                                             I




       Fig. 11-18 Alternating-current
                                         7-    360"     8"


                                                                    - 70.7 mA
                                                                     - 100 mA
                                                                             0




                                                                                            Fig. 11-19

11.2      Many ac waves (e.g., sine                          be produced     a device called a signal
          generator. This unit            generate an ac voltage with a frequency as low as 20 Hz or
          as high as 200MHz. Three basic                        are function, frequency, and am-
          plitude. The operator selects the controls to produce a sine                    at 100kHz
          (frequency) with 5 V amplitude (maximum value). Draw 2 cycles of the ac voltage
          generated. Show both
               To obtain time units,         for the period T,using Eq. ( 1 1-5).



          Now draw                     of voltage (Fig. 11-20).
 CHAP. 111                    PRINCIPLES OF ALTERNATING CURRENT                                                        215




                              +5 v
                          >




                              -5    v t

                                       C       2    T        -     Y
                                               Fig. 11-20 AC voltage wave

11.3   Calculate the time             for a phase angle of 45" at a frequency of 500 Hz.
            Find     period that                       to the time for 1 cycle of 360", and       find the
       of the period that                       45".
                                                     T = 1f                                                         ( 1 1-5)

                                                         =--           - 2 x 10-3 = 2ms
                                                                 500
                                                       45"
       At 8 = 45":                             t = -(2 ms) = 0.25 ms                      Ans.
                                                    360"

11.4   The sine        of an alternating current shows a maximum value of 80 A. What                                of dc
       current will produce
            If an ac wave                  as much heat as l.A of direct current, we say                the ac wave is as
       effective as 1 A of direct              So
                                        Idc =    I,.,,,, = 0.707IM                                                  ( 11-9)
                                               = 0.707(80) = 56.6A                 Ans.

11.5   If an ac voltage        a peak value of 155.6V, what is the phase                                     at which the
       instantaneous voltage is 110V ?
            Write                                                  U = V M sin 8                                    ( 1 1-3)
                                           U
       Solve for 8:           sin 8 = -
                                        VM
                                                    U                     110
                                    8 = arcsin-          = arcsin-             = 0.707 = 45"     Ans.
                                                   V M                   155.6

11.6   The frequency of the                                                 20 Hz to 20 kHz. Find              of period
       and            over the                     of audio
            Range of T:                                                 T = r1
                                                                                                                    ( 11-5)


       At 20Hz:                                         T = - = 0.05s = 50ms
                                                            20

       At 20 kHz:                                       T = 20 x 103 = 0.05ms
       so                                      T is from 0.05 to 50 ms                Ans.
216                            PRINCIPLES OF ALTERNATING CURRENT                                           [CHAP. 11



       Range of A :                                        A = -C                                                ( 1 1-7)
                                                                  f
       where   c = speed of light at 3 x 108m/s

       At 20Hz:

       At 20kHz:

       so                              A is from 15 X 103to 15 X 1O6m               Arts.

11.7   Find the phase angle for the following ac waves (Fig. 11-21) and draw their phasor
       diagrams.

        a          / "                                                                        a
                                                            V




                                                                                      i


             (a)                                          (b)                                (d
                   Fig. 11-21 Finding the phase          between voltage and current waveforms

            To determine the phase angle, select a corresponding point on each wave. The maximum and
       zero crossing corresponding points are convenient. The angular difference of the two points is the
       phase angle. Then compare the two points to decide if one wave is in phase with, leading, or lagging
       the other wave.
            In Fig. 11-21a, curves U and i reach their maximum values at the same instant, so they are in phase
       (the phasor diagram is as shown).
                                                  >- ,
                                    Phasor diagram:
                                                                      I         V

            In Fig. 1 1-2 1 b curve L) reaches its zero value at 0,45" before curve i is zero at the corresponding point
       b, so v leads i by 45" (phasor diagram as shown).
                                                                      V




            In Fig. 11-21c, curve i reaches its                 at b before curve      reaches its maximum       Q   so i
       leads U by 45" (phasor diagram as shown).




11.8   A, B, and C are three sine ac voltage waveforms of the same frequency. Sine wave A leads
       sine wave B by a phase angle of 60" and lags sine wave C by 130". What is the phase angle
       between wave B and wave C? Which wave is leading?
CHAP. 111                        PRINCIPLES OF ALTERNATING CURRENT                                                        217


            Draw the sine                      angles described. A convenient way to draw or measure the
       phase                                   is to                zero crossings. Wave A is           as the
       reference beginning at 0" (Fig. 11-22). Wave B is         beginning at 60"to indicate          A leads
       wave B by 60". Wave C is             beginning at -130" to show that A lags C by that angle. Compare
       the zero crossings                        of waves B and C as they move toward the positive           B
       crosses the axis           at 60",while C does SO at 230". The phase angle is the            difference
       between 230" and 60",or 170". Since B crosses the axis                  C, B leads C.



                                           +I
                                 AC voltage


                                       C                A       B                  C




                                                                    P\   /1230°        3600/




                                              1      k--17O0+

                           Fig. 11-22 Measuring phase angle between

11.9   Alternating-current                     are always                                to read                       An ac
       voltmeter           that the voltage across a resistive                          40 V.      What     the peak
       across this
            From        1 1-1,
                              VM = 1.414V     (effective                          is understood for V)
                                 = 1.414(40) = 56.6V                 Ans.

11.10 The current through an incandescent lamp is measured with an ac ammeter                                          to be
      0.95 A. What is the average       of this current?
            From       11-1,
                              1," = 0.9011         (effective or rms value is understood for 1)
                                   = O.Wl(0.95) = 0.86A            Ans.

11.11 Find V, period T, frequency f, and                                          Vp-pof the voltage waveform
      (Fig. 11-23).
            Use     (11-9).
                                   V = 0.707 V M = 0.707(48 pV) = 33.9 p V                      Ans.
       The time for 1 cycle is 5 ps. Therefore,
                                              T = 5ps = 5 x 1 0 3                  Ans.
                                              f = -1
                                                                                                                       ( 1 1-4)
                                                    T
                                                  - 5 x 104 = 200 x 103Hz = 200kHz                        Ans.

       The ac wave is symmetric with respect to the                                So
                                           Vp-p   = 2VM = 2(48) = 96pV                  Ans.
218                               PRINCIPLES OF ALTERNATING                                                                 [CHAP. 11


48 /Lv                                         +5 v                               +lOV        I
    V                                          Volts                               Volts
                                                                Peak-to-peak
      0                                            0                                      0

                                              -2 v                                 -5 v
                                                       I           I
                                                   (a) Rectangular wave                                  (6)Sawtooth wave
Fig. 11-23 Finding characteris-                                        Fig. 11-24 Nonsinusoidal
           tics of a sine wave

11.12 Any waveform that is not a sine or cosine wave is a nonsinusoidal waveform.
      examples are the rectangular and sawtooth waves      11-24). What are the peak-to-peak
          voltages for these particular waves?
              Peak-to-peak                                                maximum and minimum peak
          used for measuring                                                     often have                                         By
          inspection of Fig. 11-24.
          Rectangular                             vp-p   = 5 +2 =7 v              Ans.
          Sawtooth wave:                          V p - p= 10 + 5 = 15 V            Ans.


11.13 Calculate the frequency of the nonsinusoidal waveforms shown in Fig. 11-24.
                The period T for a complete                is 4 ps (Fig. 11-24a) and 2 ps (Fig. 11-24b).
                                              f = -1
                                                            also for periodic

          Rectangular                             f=--    - 0.25MHz                 Ans.
                                                     4 PS

          Sawtooth wave:                          f = - =          0.5 MHz         Ans.
                                                      2 PS

11.14 A 120-V ac voltage is applied across a 20-R resistive                         (Fig. 11-25).            Find            of I, V,,
      Vp-p,V,,, IM,    I,,, and P.
                By Ohm’s law,



          Use         11-1 to                              current values.
                                       VM = 1.414 V = 1.414(120) = 169.7 V                         Ans.
                                         V p - p= 2VM = 2(169.7) = 339.4V                     Ans.
                                      Va, = 0.637 VM = 0.637(169.7) = 108.3 V                        Ans.
                                          ZM    = 1.4141 = 1.414(6) = 8.5A                    Ans.
                                              Ip-p = 2IM = 2(8.5) = 17.0A                 Ans.
                                        Zav   = 0.637 ZM = 0.637(8.5) = 5.4 A                     Ans.
                                              P = 12R, = 6*(20) = 720W                   Ans.

          or            p = -V=2- - 120’ - 7 2 o w            or          P = VZ = 120(6) = 720 W                   Ans.
                             RL      20
        111                                                                                                 219




 Fig. 11-25                                                  Fig. 11-26 AC


11.15 A                                100-R                                                a
              11-26).                                                                                  by

                                  VT = VI = V2 =


                                                                                    Ans.

                                       R T = -vT
                                               = - =120            16.7n     Ans.
                                                IT     7.2
                                                                               IT
        VT.                                            0".
                         P = V&    COS 8 =                       0") =            = 864         Ans.




                                        -
                I,       I2
                                                                 II                             1,

                                           I2




                                                             V        &       >
                                                              I1      I2      VT



11.16                                                                               60-Hz 120-V
                        11,   13,V1,             V3.




                                   11-27
220                         PRINCIPLES OF ALTERNATING CURRENT                                           [CHAP. 11


          Proceed to solve the ac circuit with resistance         in the same            as a dc circuit.
      Step 1: Simplify the circuit to a single resistance RT.




      Step 2: Solve for the total current IT.




      Step 3: Solve for the branch currents I2 and I,.

                                        I2 =    - R3
                                                R2 + R3 IT = 303 = 1.8A           Ans.

                                        r3 =      - r2 = 3 - 1.8 = 1 . 2 ~        Ans.

      Step 4   Solve for the branch             V 2and V3.
                                       VI = IIRl = 3(28) = 84V             Ans.
                                       v2= v3=            = 1.2(20) = 36   v       Ans.

      Step 5: Verify
                                                 VT   =v, +  v2

                                                 120 = 84 + 36
                                            120V = 120V           Check
CHAP. 111                               PRINCIPLES OF ALTERNATING CURRENT                                              22 1


                                            Supplementary
11.17 The peak voltage of an ac sine wave is 100 V. Find the instantaneous voltage at 0,30,60,90, 135, and
      245". Plot these points and drsw the sine wave voltage.     Ans. See Fig. 11-28.


                                                    100
                                                   86.6

                 eo              V                 10.1

                                                     50
                  0              0
                 30             50                v, v

                 60             86.6
                 90            100                    0

                135              70.7
                245            -90.6


                                                 - 90.6


                                                          F'ig. 11-28


11.18 If an ac voltage wave has an instantaneous value of 90V at 30", find the peak value.
      A ~ s .V M = 180V

11.19 An ac wave has an effective value of 50 mA. Find the maximum value and the instantaneous value at
      60".   Ans. IM = 70.7mA; i = 61.2mA

11.20 An electric stove draws 7.5 A from a 120-V dc source. What is the maximum value of an alternating
      current which will produce heat at the same rate? Find the power drawn from the ac line.
      Ans. IM = 10.6A; P = 9OOW

11.21 Calculate V, Vp-p,T,and f for the sine wave voltage in 11-29.
      Ans. V = 38.2pV; Vp-p = 108pV; T = 2ps; f = 0.5MHz


                                                                        + 20
                      54 p v
            V                                                              V



            0                                                              0 -
                                                                         -5    -
                                                                               <   T = lops


                                  Fig. 11-29                                       Fig. 11-30


11.22 What is the peak-to-peak voltage and frequency of the nonsymmetrical rectangular waveform in
      11-30?    A ~ s .Vp-p = 25 V; f = 0.1 MHz

11.23 Find the instantaneous voltage at 45" in a wave whose peak value is 175 V.                Ans.     V = 123.7 V

11.24 Find the peak value of an ac wave if the instantaneous current is 35 A at 30".              Ans.    IM = 70 A
222                            PRINCIPLES OF ALTERNATING CURRENT                                         [CHAP. 11


11.25   Find the        angle at which an instantaneous              of 36.5 V appears in a wave               value
        is 125V.      Ans. 8 = 17"

11.26   What is the     of an ac voltage that has a frequency of (a) 50 Hz, (b) 95 kHz, and (c) 106 kHz?
        Ans. (a) T = 0.02 s; ( b ) T = 0.0105 ms; ( c ) T = 0.00943 ms or 9.43 ps

11.27   Find the frequency of an ac current when its period is (a) 0.01 s, (b) 0.03 ms,       (c) 0.006 ms.
        Ans. (a) f = 100Hz; (b) f = 33.3 kHz; (c) f = 166.7 kHz

11.28 What is the                 of radio        WMAL which broadcasts FM (frequency                           at a
        frequency of 107.3 kHz?       Ans.   A = 2796 m

11.29   What is the           of an ac wave                 (a) 60 Hz, (b) 1 kHz, ( c ) 30 kHz, and (d)
        800kHz?     Ans. (a) A = 5 X 106m; (b) A = 3 x 10'm; ( c ) A = 10000m; (d) A = 375m

11.30   Find the            of a radio                        is (a) 600111, ( b ) 2000m, (c) 3000m,             (4
        6000m.        Ans. (a) f = 500kHz; ( b ) f = 150 kHz; ( c ) f = 100kHz; ( d ) f = 50kHz

11.31 Determine the phase angle for each ac wave                 (Fig. 11-31) and        its phasor.
      shown for each wave. Show I as the reference
                        V

                                                                 I       "




                  I     i
                                                                 I              i




              0




                                                       (4
                                                    Fig. 11-31

        Ans. (a) U and i are in phase                  Phasor diagram: >-0                             8 =oo
                                                                                    I              V
CHAP. 111                        PRINCIPLES OF ALTERNATING CURRENT                                                                    223



               (b) U leads i by 180" or i lags U by 180"                     Phasor diagram:                                      8 = 180"
                                                                                                   V                        I
               (c) i leads U by 90" or U lags i by 90"


                                                                                                  Tr
                                                                             Phasor diagram:


                                                                                                                            e =
                                                                                                   V
               ( d ) i leads U by 90" or U lags i by 90"

                                                                                                  P+
                                                                             Phasor diagram:                      I       8 = -90"



                                                                                                   V
                                                                                            V




11.32
               (e) U leads i by 130" or i lags U by 130"

        The ac power
                                                                             Phasor diagram:

                                                                               This is the
                                                                                            .bL>  as measured by an ac
                                                                                                                      I    8 = 130"


        voltmeter.        is the peak value of this                            Ans. V M = 169.7 V
11.33   An industrial                 8.5 A          120-V dc source.                             maximum value of an ac current
        which will heat at the           rate?      Ans. IM = 12.0A
11.34   Find the

                             Peak
                             Value

                                 45 A
                                           RMS
                                          -Value

                                             ?
                                                     I    Average
                                                           Value

                                                             ?
                                                                         I   Phase
                                                                             Angle

                                                                               45"
                                                                                            Instantaneous
                                                                                                Value

                                                                                                   ?
                                  ?        220 v             ?           ~     60"                 ?
                                  ?          ?             10 A          I     30"                 ?
                             200 v           ?               ?           '     60"                 ?
                                  ?        ll0V              ?                 75"                 ?
                                  ?          ?               ?                 15"               75.1 V
                             100 v           ?               ?                  ?                86.6 V
                                 ?           ?             20 A                 ?                15.7 A
                                 ?          30 A             ?                  ?                30 A
                                 ?           ?            100.1 v              ?                136.1 V


        Ans.                  Peak               RMS         Average                Phase        Instantaneous
                              Value              Value        Value                 Angle            Value

                                 ....            31.8 A           28.7 A             ....               31.8 A
                             311.1 V             ....            198.2 V             ....              269.4 V
                              15.7 A          11.1 A              ....               ....                7.85 A
                                 ....        141.4 V             127.4 V             ....              173.2 V
                             155.6 V             ....             99.1 v             ....              150.3 V
                             290.2 v         205.2 V             184.9 V             ....               ....
                                 ....        141.4 V              63.7 V             60"                ....
                              31.4 V          22.2 A              ....               30"                ....
                              42.4 A             ....            27.0 A              45"                ....
                             157.1 V         111.1 V              ....               60"                ....
224                            PRINCIPLES OF ALTERNATING CURRENT                                   [CHAP. 11


11.35   An ac ammeter reads 22 A rms current through                    a voltmeter        385 V rms drop
        across the load.       are the peak              the average       of the alternating current and
        voltage?     Ans. IM = 31.1 A; VM = 545 V; I a v = 19.8 A; VaV= 347 V

11.36   An ac power line delivers 240 V to a                     that has                     of 5 R. Find I,
        VM, Vp-p,Vav, IM, Ip-p,I a v , and P.
        Ans. I = 48 A; V M = 339 V; V,,-p = 678 V; VaV= 216 V;
             1 M = 67.9 A; Ip-p = 135.8 A; Iav = 43.3 A; P = 11 520 W


11.37   An electric                     0.8 A from 120-V 60-Hzpower line. What is its resistance? How
        much,power will it             Draw the phasor          Ans. R = 150 R; P = 96 W

                                   Phasor       >   -   @

                                                                  I          V
11.38   Find the current and                            110-V 60-Hzline by a tungsten                       is
        275 R. Draw the phasor                 Ans. I = 0.4 A; P = 44 W

                                   Phasor               I\
                                                                  I              V

11.39   A circuit has a 5-MR resistor R I in series with a 15-MR resistor R2 across a 200-V ac source. Cal-
        culate I, V,,Vz,PI,and P2.
        Ans. I = 10 FA; V , = 50V; V 2 = 150V; PI = 0.5 mW; P2 = 1.5 mW

11.40 For the ac series-parallel             11-32), find the current, the current through each resistance,
      and              across each resistance.
      Ans. IT = I, = 24A; Iz = 12A; 1, = 12A; V, = % V ; V2 = V, = 24V




                      VT = 120 v                                                        b
                                                                                        ;2n
                       f = 60 Hz



                                                    Fig. 11-32

11.41 A series-parallel ac circuit has two      across the 60-Hz 120-V power                 has a
        20-R R , in series       10-R R2. The other branch        30-MR R, in series with a 10-MR
        R4. Calculate V1,V2,V3, and V4. Ans. VI = 80V; Vz = 40V; V, = 9OV; V4 = 30V
11.42   An ac circuit        5-Mn resistor R I in parallel with a 10-MR resistor R2across a 200-V source. Find
        11,12, VI, VZ,PI,and P2.
        A ~ s .11 = 40 p A ; 1 2 = 20 pA; Vl = Vz = 200V; PI = 8 mW; P2 = 4 mW
                                                                        Chapter 12

              Inductance, Inductive Reactance,
                   and Inductive Circuits
INDUCTION
    The ability of a conductor to induce             in itself when the current changes       its
self-inductance, or simply inductance. The          for inductance L, and              the henry
(H). One henry is the amount of inductance that permits one volt to be induced       the current
changes at the rate of one ampere per se%ond (Fig. 12-1). The formula for inductance is
                                                 L = u L                                             (12-1)
                                                       AilAt
where       L = inductance, H
            uL = induced         across the coil, V
         Ai/At = rate of change of current, A/s
                                        !!- = 1 A/5
                                        At




                                   Fig. 12-1 The            of a coil is
                                             1 H when a change    1 A/s
                                             induces 1 V across      coil
     The self-induced           uL from Eq.(22-1) is
                                                            Ai                                       (12-2)
                                                 UL = L -
                                                            At

Example 12.1 What is the value of inductance of a coil that induces 20V when the current through
changes      12 to 20 A in 2 s?
    We are given that
                            UL = 2 0 v   Ai = 20- 12 = 8 A           At = 2 s
so

                                             L    = L                                                (12-1)
                                                  AilAt



Example 12.2 A coil has an inductance of 50 pH. What              is induced across the   when the       of
change of the current is 10 OOO A/s?
                                          Ai
                                   uL= L-                                                            ( 12-2)
                                          At
                                     = (50 x 10-">104) = 0.5 v      Ans.

                                                      225
226                         INDUCTANCE AND INDUCTIVE REACTANCE                                       [CHAP. 12


    When the current in a conductor or coil changes, the varying flux can cut across any other
conductor or coil located nearby, thus inducing              in both. A varying current in L , ,
therefore, induces voltage across L , and across L2 (Fig. 12-2). When the induced               uL2
produces current in L2, its varying         field induces voltage in L , . Hence, the two coils L ,
and L2 have mutual inductance because current change          one coil can induce voltage in the
other. The unit of mutual inductance is the henry, and the symbol is LM. Two coils          LM of
1 H when a current change of 1 A/s in one coil induces 1 V in the other coil.
    The schematic symbol for two coils               inductance is shown in Fig. 12-3.




                                Magnetic flux                 (a) Air core           (b) Iron core
                   Fig. 12-2 Mutual inductance be-           Fig. 123 Schematic           symbols
                             tween L , and L2                                for two coils with
                                                                             mutual inductance
CHARACTERISTICS OF COILS

Physical Characteristics
   A coil's inductance depends on how it is wound, the core material on which it is                        the
number of turns of wire            it is wound.
      1. Inductance L increases as the number of turns of wire N around the core increases. In-
         ductance increases as the square of the turns increases. For example, if the number of turns
         is doubled ( 2 ~ )inductance
                            ,         increases 22or 4 x , assuming the area and        of the coil
         constant .
      2. Inductance increases as the relative                  p, of the core material increases.
      3. As the area A enclosed by each turn increases, the inductance increases. Since the area is a
         function of the square of the diameter of the coil, inductance increases as the square of the
         diameter.
      4. Inductance decreases as the         of the coil increases (assuming the number of turns remains
         constant) .
Example 12.3 An approximate formula in SI units for the inductance of a coil where the length is at least 10
times the diameter is
                                  L = pr q ( 1 . 2 6 X 10-6), H

Note that this formula follows the proportional relationships described. Find L when p r = 200, N = 200
turns, A = 1 x 10-4 m2, and 1 = 0.1 m.

                   L = 200 2o02(1     10-4) (1.26 x
                                                      = 10 x 10-3H = 10 mH              Ans.
                                0.1

Core Losses
     Losses in the magnetic core are due to eddy-current losses and hysteresis losses. Eddy cur-
rents flow in a circular path within the core material itself and dissipate as heat in the core. The loss
is equal to 12R,where R is the resistance of the path through the core. The higher the frequency of
alternating current in the inductance, the higher the eddy currents and the greater the eddy-current loss.
CHAP. 121                  INDUCTANCE AND INDUCTIVE REACTANCE                                              227


    Hysteresis losses arise from the additional                    to reverse the magnetic field in
magnetic                    an alternating current. Hysteresis losses generally are less than eddy-
current losses.
    To reduce eddy-current losses while sustaining flux density, the iron core can be made of
laminated sheets insulated           each other, insulated                         pressed into one
solid, or ferrite material.                                  no losses from eddy currents or hys-
teresis.


INDUCTIVE REACTANCE
     Inductive reactance X L is            to ac current due to the            in the circuit. The
unit of inductive reactance is the ohm. The formula for inductive reactance is
                                                XL = 27rfL                                             ( 22-3)
Since 27r = 2(3.14) = 6.28, Eq. (12-3) becomes
                                               XL = 6.28 fL
where    X , = inductive reactance, R
          f = frequency, Hz
          L = inductance, H
If any two quantities are known in Eq. (12-3), the third            be found.
                                                L = - XL                                               (12-4)
                                                      6.28 f
                                                f = - XL
                                                                                                       ( 12-5)
                                                     6.28 L



                                                                                            n
                                   XL                          ( 12-6)           5
                                   VL

                           VL = ILXL                           ( 12-8)                                  v = VL

        V L = voltage across the inductance, V                               Fig. 12-4 Circuit with only X L
        X L = inductive reactance, R

Example 12.4 A resonant tank circuit consists of a 20-mH coil operating at a                of 950 kHz. What
is the inductive     of the coil?
                  X L = 6.28 fL                                                                         ( 12-3)
                      = 6.28(950 x 103)(20 x 10-~) = 11.93 x 104 = 119 300 n         Ans.

Example 12.5 What must the inductance of a           in order that it have            of 942 s1 at a frequency
of 60 kHz?
                          L = X r
                                 6.28f
                             -        942       = 2.5 x 10-3 = 2.5mH         Ans.
                                 6.28(60 x 103)
228                        INDUCTANCE                                                              [CHAP. 12


Example 12.6 A tuning coil in a radio                       an inductance of 300 pH. At what           will it
have          reactance of 3768 52?
                            f = - XL
                                                                                                       ( 12-5)
                                6.28L
                              -
                              - 6.28(300
                                      3768
                                                = 2 X 10" = 2MHz              Ans.
                                         x 104)

Example 12.7 A choke coil of negligible resistance is to limit the current through it to 50 mA when 25 V is
applied across it at 400 kHz.  its inductance.
    Find X L by Ohm's law and    find L.

                                     XL =      2                                                       (12-7)

                                           -      25       =500R      Ans.
                                               50 x 10-3

                         L = x L
                             6.28f
                                     500
                                            103) = 0.199 x 10-3 = 0.20 m H      Ans.
                           - 6.28(400
Example 12.8 The primary             of a power                   an inductance of 3 0 m H with negligible
resistance      12-5). Find its inductive         at a frequency of 60 Hz and   current it will draw     a
120-V line.
     Find X L by using Eq. (12-4) and     ILby using Ohm's law [Eq. (12-6)J.
                          XL = 6.28fL = 6.28(60)(30 X lO-') = 11.352           Ans.
                                         "'= -
                                     IL= -   120 - 10.6A
                                            XL 11.3                   Ans.




Fig. 12-5 X L circuit                       Fig. 12-6 Inductances in series          mutual coupling




INDUCTORS IN SERIES OR PARALLEL
    If inductors are spaced sufficiently far apart so that they do not interact electromagnetically
with each other, their             be combined just like resistors when connected together. If a
number of inductors are connected in series         12-6), the total          LT is the sum of the
individual inductances, or
Series:                               LT = L, + L , + L , + * . '    + L,                              ( 12-9)

    If two                                 are spaced close             so that their          field lines
interlink,                                  will have an effect       the circuit. In that case the total
inductance is
CHAP. 121                  INDUCTANCE AND INDUCTIVE REACTANCE                                       229


where LM is the mutual inductance between the coils. The plus (+) sign in Eq. (12-10) is             if
the coils are arranged in series-aiding form, while the minus (-) sign is            if the coils are
connected in series-opposing form. Series                   that the common current produces the
same direction of magnetic field for the two coils. The series-opposing connection results in
opposite fields.
    Three different arrangements for coils L , and L2 are shown both
in Fig. 12-7. In          12-7a, the coils are spaced too far apart to interact electromagnetic-
ally. There is              inductance, so LM is zero. The total inductance is LT = L , + L2. In
Fig. 12-7b,the coils are spaced close             have windings in the same direction, as indicated
the dots. The coils are series-aiding, so LT = L , + L2 + 2LM. In Fig. 12-7c,the coil            are in
the opposite direction, so the coils are series-opposing,     LT = L , + L2 - 2LM.


                         Spaced far
                           apart                                                    LM = 0




                                                            L , = L , + L,
                                                            L, = 0

       I                                              I
                                                                                Schematic diagram

                                           (a) No mutual inductance



                       Spaced                                                          LM
                       closely




                                                    L , = L , + L, + 2 L ,




                                                                                Schematic
                                              (b) Series-aiding



                     Spaced                                                           LM
                     closely




                                                    L , = L , 4- L, - 2 L ,




                                                                               Schematic diagram
                                              (c)
                         Fig. 12-7    L 1and L2 in series with mutual coupling LM
230                            INDUCTANCE AND INDUCTIVE REACTANCE                                [CHAP. 12


    The       dots above             (Fig. 12-7b and c ) are used to indicate              of the windings
without having to show                                             Coils with dots at the             (Fig.
 12-7b) have                      or same            of winding. When current enters the dotted
for Ll and L2,  their fields are aiding and LM has               sense as L.
    If inductors are spaced sufficiently far apart so that their mutual inductance is negligible (L M= 0),
the        for combining                 in parallel are the          as for resistors. If a number of
inductors are connected in parallel (Fig. 12-8), their                     LT is
Parallel:                                                                                            (12-11)




                             Fig. 12-8 Inductances in parallel without mutual coupling

      The                      of two                   in parallel is

Parallel:                                         LT = LlL2                                          (12-12)
                                                      L + L2
A11 inductances must be given in the                 shortcuts for calculating parallel R can be
used with parallel L. For            if two 8-mH inductors      in parallel,
is LT = L/n = 8/2 = 4mH.

Example 12.9 A 10- and a 12-H choke used to limit current in a circuit are connected in series.      Initially
they are spaced far apart. What is the total inductance?
                                         LT = LI + Lz                                                  ( 12-9)
                                            = 10 + 12 = 22H          Ans.

Example 12.10 The two chokes of Example 12.9 are moved close together so that they are coupled by a
mutual inductance of 7 H. What are the total inductances if (a) the coils are wound in the same direction and
(b) the coils are wound in opposing directions?
      (a)   Series-aiding:
                                LT = LI + Lz + 2LM                                                    (12-10)
                                   = 10 + 12 + 2(7) = 22 + 14 = 36H          Ans.
      (b) Series-opposing:
                                 LT = LI + Lz - 2LM                                                   (12-10)
                                    = 10 + 12 - 2(7) = 22 - 14 = 8H          Ans.

Example 12.11 What is the total inductance of two parallel inductors with values of 8 and 12H?

                                                                                                      (12-12)




Example            A 6-H inductor and a 22-H inductor are connected in series and plugged into a 120-V ac
60-Hzoutlet. Assume that their resistance is negligible and that they have no mutual inductance. What is
their inductive reactance and what current will they draw?
CHAP. 121                  INDUCTANCE AND INDUCTIVE REACTANCE                                                            23 1


                                  LT=LI+L2=6+22=28H
                                  XL = 6.28fLT                                                                        ( 12-3)
                                     = 6.28(60)(28) = 10 550 SZ               Ans.

                         jL = - = -
                                  120 - 0.0114A               or      11.4mA              Ans.                        ( 12-6)
                             XL     10550


INDUCTIVE CIRCUITS

Inductance Only
     If an ac voltage U is applied across a circuit         only inductance         12-9a), the
ac current through        inductance, iL, will lag the voltage across the inductance, uL, by 90" (Fig.
12-9b and c ) . Voltages U and uL are the                                               is dropped
across the                  Both iL and uL are sine            with the         frequency. Lowercase
letters such as i and U indicate                 values; capital letters such as I and V show dc or ac
rms

                                            , vL




                                                                                                    Lead direction
                                                                                                    (counterclockwise)



                                                                                            790'                I,, reference

 (a) Schematic diagram              ( b ) Time diagram: il. lags v1. by 90"                      (c) Phasor diagram

                                           Fig. 12-9 Circuit with L only

RL in Series
     When a coil     series resistance (Fig. 12-10a), the rms current I is limited by both X L and R. I
is the same in X L and R since       are in series. The           drop across R is VR = IR, and the
voltage drop across X L is V L = IXL. The current I through X L must lag VL by 90"because             is
the       angle between current through                    and its                       (Fig. 12-lob).
The current I through R and its IR voltage drop are in phase so the           angle is 0" (Fig. 12-lob).




                                                                                     VR
                             (a) Circuit                                  ( 0 ) Phasor diagram
                                       Fig. 1210 R and XLin series
232                         INDUCTANCE AND INDUCTIVE REACTANCE                                         [CHAP. 12


    To combine two                out of phase, we add                                 The method is to
add         of one           to the               of the other, using the angle to show their
phase.       sum of the           is a resultant                  start of one           to the of the
other                       VR and VL phasors             a right angle,
hypotenuse of a right triangle (Fig. 12-11). From the               of a right triangle,
theorem states that the                          to the        root of the sum of the squares of the
sides. Therefore, the            is
                                                VT = d v i + v',                                         (12-13)
where            voltage VT is the        sum of the              VR and VL that are 90" out of
phase. All the                  be in the      units-rms values, peak values,
values.                 when VT is an rms value, VR and VL also are rms         Most of the ac
calculations will be made in rms units.




                                                               v, = Jv2 + VL2
                                                               0 = arctan    YL
                                                                             VR


                                                              reference
                                     V R = IR

                                        Fig. 12-11 Phasor-voltage triangle


      The       angle 8 between VT and VR (Fig. 12-11) is
                                                        VL
                                                tan 8 = -
                                                        VR
                                                   8 = arctan-VL                                         (12-14)
                                                              VR
Since VR is in phase with I, 6 is also                 angle between VT and I where I lags V,.


Example 12.13 A RL series ac circuit has a current of 1 A peak with R = 5 0 0 and XL = 50n (Fig.
12-12a). Calculate VR, VL, VT, and 8. Draw the phasor diagram of VT and I. Draw also the time diagram
of i, vR, vL, and vT.

                                  VR = IR = l(50) = 50 V peak             Ans.
                                  V, = IXL = l(50) = 50 V peak            Ans.
Then (see Fig. 12-12b)     Vr = V V ; + Vi~                                                               (12-13)
                               = VSO' + 502 = V2500 + 2500 = dsooo = 70.7 V peak                Ans.
                                                VL         50
                                  8 = arctan-      = arctan- = arctan 1 = 45"         Ans.
                                                VR          50

    In a series circuit, since I is the same in R and X L , it is convenient to show I as the reference phasor at
0". The phasor diagram is shown as Fig. 12-12c and the time diagram as Fig. 12-12d.
   R = 50Q
 I = 1 A peak
                                 VT = ?            VL = 30 V peak


                                      9=?
                                 VR = SO V peak

(a) RL series circuit                                              (c) Phasor diagram ( I lags YT by 45")



                                  i
                                              i is reference for time curves
              I A



                0
             - 1A
                            I         vR
                        1   1


             50 v




                0




                        '
            -50 v
                            I

             50 v           "L    vL leads i by 90"



                0                                                         360"
                                                                                    t
            -50 v



           10.1 v


             50 v                          vT leads i by 45"



                0


           -50 v


          -10.1 v


                                  (d) Time diagram

                                      Fig. 12-12
234                          INDUCTANCE AND INDUCTIVE REACTANCE                                     [CHAP. 12


Impedance in Series RL

    The           of the                  of R and XL is called impedance. The            for
impedance 2. Impedance the total opposition to the flow of current, expressed in ohms. The
impedance          (Fig. 12-13) corresponds to the voltage triangle (Fig. 12-11), but the
factor I cancels.                for impedance            angle are derived as follows:
                   v: = v’, + v;
                      = (I2q2+ (Ix,)2
                   z2= R 2 + xi                                                                z=   Jm
                    Z=dR*+X:                             (12-25)                               e = arctan %
                                                                                                         R
                         XL
                  tan8 = -
                         R                                                      R
                                                                          Fig. 12-13 Phasor addition of R and
                         8 = arctan-XL                   (12-16)                     X L to find 2
                                       R

Example 12.14 If a 50-42 R and a 70-52 XL are in series with 120 V applied (Fig.           the following:
2,8, I, V R ,and VL. What is the phase angle of Vr,VR,and VT with respect to I? Prove that the sum of the
series voltage drops equals the applied voltage VT.




                                                       A
                                                                                               vT



                                                       Z = ?


                                                           8 = ?

                                                          R = 500

                   ( U ) Series RL circuit                         (b)




                                  VR                                VR = 70 V

                                                                          (4
                                                     Fig. 12-14

Step 1. Find 2 and 8 (see Fig.
                            Z=dR*+XZ                                                                   (12-15)
                                = VSO’       + 702 = V2500 + 4900 = v%%= 86a            Ans.
CHAP. 121                          INDUCTANCE AND INDUCTIVE                                                                  235


                                                           XL                                                            ( 22- 16)
                                           8 = arctan-
                                                            R
                                                           70
                                                = arctan   -
                                                           50
                                                              = arctan 1.40 = 54.5"      Ans.
          VT leads I by 54.5" (see Fig. 12-14c).
Step 2.


                                                VR = IR = 1.40(50) = 70.0 V           Ans.
                                                VL = IXL = 1.40(70) = 98.0 V          Ans.
          I and VR are in phase.         VL leads I by 90"(see Fig. 12-14d).
Step 3. Show that VT is                     sum of VR and VL (see Fig. 12-14e).
                                      VT = vvi + v i                                                                   (12-13)
                                         = g(70.0)2 + (98.0)* = d14504 = 120V                  Ans.
          (The               is not         120 V because of rounding off I.) Therefore, the sum of the
          equals           applied voltage.

RL in Parallel
     For parallel circuits with R and XL(Fig. 12-15a), the same               VT is across R and
XL since both are in parallel            VT. There is no phase               between these vol-
tages. Therefore, VT will be used as the reference phasor. The                 current IR = VT/R
is in phase with V F The inductive branch current IL = VJXL lags VT by 90" (Fig. 12-15b) be-
cause the current in an inductance lags the voltage across it by 90". The phasor sum of IR and It




                                            r:
equals the total line current IT(Fig. 12-15c), or
                                                                                                                      (22-17)



                                                           e = arctan   (-k)                                          (22-28)


                                                                                                              Jm-
                                                                                                        r 7 =V , reference

                                                                                                        e = arctan    ( - t)
                                                                                                                          I




                                           IL
           ( a ) Circuit                        (b) Phasor diagram                      (c) Current-phasor triangle
                                                Fig. 1215 R and X L in parallel

Example 12.15 A RL parallel ac circuit    100-Vpeak applied across R = 20 and XL = 20 (Fig. 12-16a).
Find IR,IL, IT,and 8. (See Fig. 12-16b.) Draw the             time diagrams of t)T, iR, iL, and iT.



                                                       I = = - vT
                                                               - = - loo = 5Apeak            Ans.
                                                              X L    20
                                                       IT   =                                                         (12-17)
                                                            = d5*    + 5* = ds = 7.07 A peak          Ans.
236                             INDUCTANCE AND INDUCTIVE REACTANCE                                                 [CHAP. 12



                                e = arctan (-$)                                                                         (12-18)

                                   = arctan   (-g)   = arctan (-1)    = -450            Ans.

Since VT is the same throughout the parallel circuit, VT is shown as the reference phasor at 0". IT lags VT by
45". (See Fig. 12-16c.)  For the time diagram, see Fig. 12-16d.




                (a ) RL parallel                                                  (b)                        (c) Phasor diagram




                                                                      v T is reference for time curves




                                   I
                  -lOoV     -      I
                                   I
                                                                          i, in phase with V ,



                    . 5 A   -      I
                                   I
                                   I
                                   I          'L
                                                                           iL lags v , by 90"
                                   I            \




                   7.07 V   -                                              i, lags v , by 45"


                                                                                            360"         *
                                                                                                         t


                                                     (6) Time diagram
                                                         Fig. 12-16


Impedance in Parulfel RL

    For the general case of calculating the total           ZT of R and X L in parallel,
number for the                  VT because in the            of ZT in terms of the        currents
the value of VT cancels. A convenient value to assume for VT is the value of either R or XL,
whichever is the higher number.          is only one method among others for calculating ZT.
CHAP. 121                   INDUCTANCE                                                                          237


Example 12.16 What is                     ZT of a 200-n R in parallel with a 400-RXL? Assume 400 V for
applied      VT.




                                       &=-=
                                          vT- - - 400 - 178.6R           Ans.
                                            IT     2.24
The combined             of a 2 0 0 4 R in parallel with a 400-R XL is equal to 178.6 R regardless of the
of the applied          The combined                                     lowest number of ohms in the
branches. The total              of a parallel RL circuit does not           that of a series RL circuit; that
is ZT# v R 2 + X z , because                 and inductive                     to present a different load con-
dition to the

Q OF A COIL
    The quality or merit Q of a coil is indicated
                                             Q = -X =
                                                    , -
                                                      6.28fL
                                                                                                ( 12-19)
                                               Ri        Ri
where Ri is               resistance of the coil equal to the resistance of the wire the coil




             11
12-17). Q is a numerical                            since the ohms         in the ratio of reactance to
resistance. If the Q of a coil is 200, it        that the XLof the      is 200 times                 Ri.
     The Q of a coil may range in value            than 10 for a low-Q      up to 10o0 for a very high
Q coil.         frequency (RF)              a Q of about 30 to 300.
     As an           a coil with an XL of 300 R and a Ri of 3 R has a Q of 300/3 = 100.


      I
      1--
      I
      I
                x,
                -7 =         ~
                                                  y q      Real power
                                                                                                 v, reference

                                                                                Reactive power
      I                                           Apparent power                Q = VI sin 8
      I        R,                                 s = VI
      I,-      --I
Fig. 12-17 Schematic diagram of Q                         Fig. 12-18 Power triangle for RL circuit
           of a coil. X L and Ri are
           distributed
           over the length of the
           coil

POWER IN RL CIRCUITS
     In    ac circuit                 reactance, the line current I lags the applied           V. The
real        P is equal to the           multiplied by       that portion of the line current which is in
phase with the             Therefore,
                                Real         P = V ( I cos 8 ) = VI cos 8                        (12-20)
where 8 is the phase                        V and I, and cos8 is the power factor (PF) of the
circuit. Also,
                                         Real          P = 12R                                   (12-21)
where R is the total                        of the circuit.
     Reactive         Q in voltamperes            (VAR), is expressed as follows:
                                       Reactive            Q = VI sin 8                                    (12-22)
238                           INDUCTANCE                                                                           [CHAP. 12


      Apparent power S is              product of V x I. The unit is                           (VA). In formula form,
                                              Apparent power S = Vf                                                  (22-23)
In all the                            V and f are in rms values.                                                         and
apparent power               illustrated by the phasor diagram of power                       12-18).

Example 12.17 The ac circuit (Fig. 12-19a) has                            1 7 3 4 R in series with an X, of 100 R. Find
the     factor, the                V, real                  P, reactive           Q,and apparent power S.




       ( a ) Power in    R L circuit             ( b ) Impedance                                    (d

                                                          Fig. 12-19


Step 1. Find the         angle 8, cos 8, and                  2 by the                                  12-19b).
                                                    100
                               8 = arctan& = arctan-    = arctan0.578 = 30"                       Ans.
                                         R          173
                                            PF = COS e = COS 30" = 0.866               Ans.
                                            z = - =R- -       173 - 200R            Ans.
                                                 COS^       cos300
          An alternative method to find Z is by using 2 = VR2+ Xz.

Step 2. Find V.
                                              V = IZ = 2(200) = 400V              Ans.

Step 3. Find P.
                                                P = 12R                                                               (12-21)
                                                  = 22(173) = 692 W             Ans.
          or                                      P = V I COS e                                                       ( 12-20)
                                                    = 400(2)(cos 30") = 692 W
          In     P calculations,               power is the same                                        of power          by
          the                                     in the                                                   merely transforms
          power back                                     for P can be used, depending                       more convenient.

Step 4. Find Q and S.
                                        Q = VI sin 8                                                                  ( 12-22)
                                          = 400(2)(sin 30") = 400 VAR lagging              Ans.
          In an                               power is lagging because I lags V.
                                                s = VI                                                                ( 12-23)
                                                  = 400(2) = 800VA              Ans.

          See Fig. 12-19c.
CHAP. 121                     INDUCTANCE AND INDUCTIVE REACTANCE                                                                 239


                              Summary Table for Series and Parallel Z U Circuits
                                ~~~             ~~~



                       I
                       I     X L and R in Series                          X L and R in Parallel

                           I the     in X L and R                   VT the                    X L and R
                           VT = d v i + v:                          IT   = VI;      + 1;

                           V R lags VL by 90"                   I IL lags IR by 90"                         I
                           8 = arctan-
                                            XL
                                            R
                                                                Ie       = arctan   (-k)

                                                       Solved Problems
12.1   A steady current of 20mA is passed                                 a coil           an inductance of 100mH. What
       the voltage
           If the circuit is dc, the rate of change of current Ai/At = 0. So
                                                                 Ai
                                                         VL =   L-                                                             ( 12-2)
                                                                 At
                                                            = L(0) =      ov          Ans.
       A voltage can be induced                 when a coil is carrying a changing current.

12.2   Current through a coil increases to 20 A in l/lOOO s. If its inductance is 100 pH, what                                   the
       induced         at that instant?
                                         Ai
                             VL = L-                                                                                           ( 12-2)
                                         At
                                                                                                            Ans.


12.3   A 120-Hz 20-mA ac current is present in a 10-Hinductor.                                                  the reactance of the
       inductor and the voltage drop across the inductor?
                                                XL =     6.28fL                                                               ( 12-3)
                                                      = 6.28( 120)(10) = 7536 R              Ans.
                                                VL = I L X L
                                                   = (20 x 10-3)(7536) = 150.7V                     Ans.

12.4   In Prob. 12.3,what are the maximum and average values of the                                                       across the
       inductor?
           In a reactive ac circuit                                    for the             of voltage      as rms,
       average, and instantaneous.                    rms value is implied when no statement is made otherwise.
                                       VM     = 1.414V
                                      V , M = 1.414VL             1.414(150.7) = 213.1V              Ans.
                                        V,, = 0.91 V
                                       V L ,=~0.91 VL = 0.91(150.7) = 137.lV                        Ans.
240                         INDUCTANCE AND INDUCTIVE REACTANCE                                           [CHAP. 12


12.5   A 255-pH choke coil of negligible resistance is to limit the current through                  to 25 mA when
       40V are          across it. What is the                of the current?

                                                  x, = -
                                                       VL
                                                       IL
                                                                                                             ( 12-7)

                                                      -      4o 3 = 1 6 0 0 n
                                                          25 x 10-
                             f=-     XL                                                                      ( 12-5)
                                    6.28 L
                               --         1600
                                                     = 10" = 1 MHz or 1OOOkHz                 Ans.
                                    6.28(255 x 10-6)

12.6   A simple high-pass filter (Fig. 12-20) is  in which high-frequency
       capacitor C to the output and                                                  L. What is
       the           of the 15-mH coil to (a) a 2000-Hz (low-frequency) current and (b) a 4WkHz
       (high-frequency) current?
       (a)                  X t = 6.28fL                                                                     ( 12-3)




                                                                 -
                                = 6.28(2 X 103)(15 x lop') = 188.4R               Ans.
       (b)                  X L = 6.28(400 X 103)(15 X 10-3) = 37 680               Ans.
                                                             High frequency



                                                                     C

                                                                                  output




                                                      Fig. 12-20

12.7   What is the                           of the                      in Fig
       Step 1. Reduce the parallel inductors to their equivalents.




                 See Fig. 12-21b.
       Step 2.   Add the series inductors.
                                             LT=LI+L4=10+2=12mH                            Ans.




             10 mH                                                   10 mH
CHAP. 121                  INDUCTANCE                                                                                 24 1


12.8   If a frequency of 2MHz is                to the circuit of Fig. 12-21, what is the reactance of the
       circuit?
                  XL = 6.28fLT = 6.28(2 X lO")( 12 X 10-3) = 150.72 x 103 = 150 720 R                    Ans.

12.9   With             L , and L2 as wound (Fig. 12-22), find the total inductance.
            Since      windings are wound in the                                      to the dots, L , and L2 are
       series-aiding. Then, using Eq. (12-lO),
                               LT = L1 + L2 + 2LM = 9 + 13 + 6 = 28H                   Ans.

12.10 The windings of L2 (Fig. 12-22) are now wound in reverse (Fig. 12-23). What is the total
       inductance now?
            Because     windings are wound in opposite                                to the dots, L1 and La are
       series-opposing.
                               LT = L1+ L2-2LM = 9 + 1 3 - 6 = 16H                     Ans.
                        LM=3H                                                           LM=3H

          L, = 9 H                     L, = 1 3 H
                                       - - - -
       "!_I       I                    I




 0


 0                                                           0
                      Fig. 1222                                                      Fig. 12-23

12.11 A 20-H coil is connected across a 110-V 60-Hz power                        If the              zero resistance,
       find the current and                             the phasor
                                            XL = 6.28fL                                                            ( 12-3)
                                                = 6.28(60)(20) = 7536fl

                      IL = VL                                                                                      ( 12-6)
                           XL
                         =--       - 14.6mA         Ans.
                           7536
                       P = VICOS~                                                                                 ( 12-20)
                         = llO(14.6 X lO-')(cos 90")= 11q14.6 X 10A3)(0)= 0 W                     Ans.
       In a purely                (R = 0), real        is zero because                                          Also P =
       IZR = I'(0) = 0. In the phasor          IL lags VL by 90".




                                  vL



                                   0
                                       1      0 = 90"

                                                        ,J       00 reference line



                                                        IL
                                                Phasor diagram
242                       INDUCTANCE AND INDUCTIVE REACTANCE                                     [CHAP. 12


12.12 A tuning coil has               of 39.8 p H and                                     of 20 R. Find its
      impedance to a frequency of 100 kHz and the current through                 coil if the voltage drop is
      8 0 V across the      coil. Also find the        drop and                                   of the
      and draw            diagram.
          A coil with Ri and Xt is treated as a series RL circuit.
      Step 1. Find X L and then 2,8.
                                           XL = 6.28fL                                                 (12-3)
                                              = 6.28(105)(39.8X lO-") = 25 R
                                            Z=dR:+XL                                                  (12- 25)
                                              =                    320    Ans.

                                            8 = arctan-XL                                             (12-16)
                                                       Ri
                                                         25
                                              = arctan - = arctan 1.25 = 5 1.3"
                                                         20
      Step 2. Find I.

                                              I = -   '- 8o - 2.5 A
                                                      z-32-               Ans.

      Step 3. Find V R ,VL, and check 8.
                                       VR = IRi = 2.5(20) = 50V          Ans.
                                       VL = I X L = 2.5(25) = 62.5 V      Ans.

               Also                  8 = arctan-VL                                                     (12-14)
                                                VR
                                                62 5
                                       = arctan- 50 = 1.25 = 51.3"       Check

      Step 4. Draw phasor diagram.

                                                         Ans.




                                           VR = 50 V      VR        I

                                                  Phasor diagram



12.13 A choke is an inductance coil with a very low resistance.        ac voltage drop across R is
      therefore       low. That is, practically all the ac voltage drop is across L. For
      occur, XL is        as 10 or more     the series R. Find the minimum inductance
      for a choke with a resistance of 100n when the               of the          is ( a ) 5 kHz, (b)
      5 MHz,       (c) 50 MHz. If the applied voltage VT is 200 V, ( d ) what is the voltage across
      the       and the
CHAP. 121                    INDUCTANCE AND INDUCTIVE REACTANCE                                                  243


                                                      XL = 10R = lO(100) = 1OOOR

                                     L=&                                                                       ( 12-5)
                                       6.28f
                                          -        'O0O      =32mH               Ans.
                                               6.28(5 X 103)
                                                       'O0O       =32pH          Ans.
                                    L = 6.28(5 X 106)
                                    L=             'Oo0      = 3.2pH             Ans.
                                               6.28(5 X 10')
                                                                                                              (12-15)


                                          = - - 200 - 0.199A
                                    I = - vT
                                          2     1005
                                  V R = IR = 0.199(100) = 19.9V                 A~s.
                                  V L = IXL = 0.199(1000) = 199 V                    Ans.
             Note that V L is practically all the applied                       V R is          comparison.


12.14 The purpose of a high-pass                     12-24) is to permit high frequencies to pass on
      to the load but to prevent the passing of low frequencies. Find the branch currents, the
      total current, and the percentage of the total current passing            the resistor for (a) a
      1.5-kHz (low) audio-frequency signal and (6) a 1-MHz (high)

                                          0                            '
                                                                       I                 1



                         (a) V = 80 V, 1.5 kHz
                                               I I,
                                                                  rL

                                                                  L    11
                                                                        20 mH
                                                                                    IR
                                                                                    R),,,
                                                                                         I
                         (b) V = 80 V, 1 MHz

                                                                       1                 I
                                                              Fig. 12-24

      (a) Step 1. Find XL at f = 1.5 kHz.
                                           XL = 6.28fL = 6.28(1.5 X 103)(20X 10-3) = 188.4R
            Step 2. Find branch currents IL and I R .

                                                        rL = -V =-80
                                                                       = 0.425 A              Ans.
                                                             X L 188.4
                                                                '
                                                        I , = - = - - 8o - 0.016A
                                                               R 5000
                                                                                             Ans.

            Step 3. Find total current I T .
                                     IT   = dIi          + 1;                                                 (12-17)
                                          = d(0.425)'           + (0.016)* = vO.1809 = 0.425 A         Ans.
                     Since XL   * R, the current is mostly inductive.
            Step 4. Find IR as a percentage of IT.
                                                        -
                                                x 100 = 0 016 100 = 0.038(100) = 3.8%
                                                                                                     Ans.
                                          IT                  0.425
                     Therefore, only 3.8 percent of the 1.5-kHz audio signal passes through the resistor.
244                         INDUCTANCE                                                                        [CHAP. 12


      (b) Step 1. Find X L now at f = 1 MHz.
                                        XL = 6.28fL = 6.28(1 X 106)(20 X 1O-q = 125.6 kR
           Step 2. Find IL and IR.
                                                V
                                            I,=-=
                                                 XL              8o      - 0.637mA
                                                             125.6 x 103 -
                                                                                                 Ans.

                                            IR = 16mA           Ans.
                    IR   remains the same as in part (a).
           Step 3. Find IT.
                              IT   = dIi   + I: = d 1 6 2 + (0.637)2 =                     = 16.01 mA        Ans.
                    Since R 4 XL,the current is
           Step 4. Find IR as a percentage of IT.

                                      IT
                                           x 100 =   1 6100 = 0.999(100) = 99.%
                                                     16.01
                                                                                                    Ans.

                    Thus, theoretically 100 percent of the 1-MHz radio signal passes
          It is clear that the        an excellent high-pass filter by passing                 100percent of the high radio
      frequency to the load and        3.8 percent of the low audio                        to the load.

12.15 If the Q of a                     than 5 , its                  Ri may be             so that
      2 = XL.If the Q is               than 5 , then                             to the          to
      obtain
      at a
                                by the           2=          wL.
                                   Find the Q and 2 of the coil.
                                                                 A coil    Ri = 5 fi and X, = 30 fi

                                                Q = -XL
                                                                                                                    (12-19)
                                                        Rr
                                                     = -30=    6           Ans.
                                                        5
      Since Q > 5 , the resistance may be disregarded, so the impedance is equal to the inductive
                                              2 = XL = 3 0 n                Ans.
      We can determine                error by finding 2 with R included
                                              + X: = d52 302 = 30.40
                                       2 = dl??                        +
      With R not               Z = 30R, as found                   The error is 30.4 - 30 = 0.40. Therefore, the
      percent error is
                                                     0.4
                                                     30.4
                                                          100 = 1.3%

      The error is well within the         of human            in taking                                     is negligible.

12.16 What                         of a coil whose                     is 100      if it          0.55 A from a 110-V,
      60-Hz power
      Step 1. Find 2.



      Step 2. Find Xr.
CHAP. 121                      INDUCTANCE AND INDUCTIVE                                                          245


      Step 3. Find L.
                                           L = - =XL            173 = 0.459H           Ans.
                                                6.28f        6.28 x 60

12.17 A 500-0 R is in parallel with 300-0 X L (Fig. 12-25). Find IT, 8, and Z T .




                                                          Fig. 12-25


            Assume VT = 500V. Then




                                   IT = d I i + 1; = d l ' + (1.67)' = 1.95A            Ans.
                                 e = arctan   (- 2) = arctan (- 1.67) = -59.1"           Ans.




12.18 The frequency in Prob. 12.17 is increased by a factor of 2.                 Now find IT, 8, and ZT.
            Since X L is                          to f,
                                                       XL = 300(2) = 600n
      Assume VT = 6OOV. Then




                                   IT = dIi + 1; = d(1.2)' + l2 = 1.56A                Ans.
                      8 = arctan    (- 5)= arctan         (-A)   = arctan (-0.83) = -39.8"      Ans.

                                          z,=-=--
                                                600 - 384.6R
                                             vT 1.56
                                                  IT
                                                                                Ans.

      Increasing                   in a RL parallel circuit              6,since more X L means        It.

                                          cos 8.
12.19 Show that the real power P = ( VMIM/2)
                                                           P = VICOS~                                        ( 12-20)
      The                  rms value of voltage        current) is its maximum value divided by fi. So substitute
246                           INDUCTANCE AND INDUCTIVE REACTANCE                                        [CHAP. 12


        into Eq. (12-20) to obtain




12.20 An induction motor operating at a power                     of 0.8 draws 1056 W from a 1 1 0 4 ac
        line. What is the current?
                Given P F = cos 8 = 0.80, V = 110 V, and P = 1056W.
                                                      P = VICOStl                                           (12-20)
        from
                                       I = - = -P=       1056     12A           Ans.
                                            v COS e    iio(o.8)




                                        Supplementary Problems
12.21   If the rate of change of current in a coil is large,                    is high. Compare the induced
        voltages of a                             10 mH when the rate of change of current is 2000 A/s and
        the rate is 5 times faster at 10 0oO A/s.
        Ans. When Ai/At = 2000A/s, U L = 20V. When AilAt = 10000A/s, uL = 1OOV.

12.22   How fast must current change in a 1 W p H coil so that a voltage of 3 V is                  Ans. Ai/At =
        30 OOO A/s

12.23 At a                    the current changes at loo0         If 1.5 V is                     the inductance of
        the coil?      Ans. L = 1.5 mH

12.24   Find the inductive                0.5-H choke coil at (a) 200Hz, (6) 2000Hz, ( c ) 20kHz, and (d)
        2 MHz.     Ans. ( a ) X L = 628 R; (b) X L = 6280 R; ( c ) X L = 62 8 0 0 0 ; ( d ) XL = 6280 k 0

12.25   A choke          in a FM receiver             an inductance of 20pH. What is its reactance at
        lOMHz?         Ans. XL = 1256n

12.26   A 2-mH coil in a             is resonant at 460 kHz. What                 its inductive             at. this
        frequency?   Ans. X L = 57780

12.27   A                                                  of 95.6n at 3.9MHz.             the inductance of the
        coil.       Ans. L = 3.9 pH

12.28   A 25-H choke coil in a filter circuit of a                   operates at 60Hz. Find ( a ) its inductive
        reactance, (6)the      current flowing if the voltage across the coil 105 V,and ( c ) the
        average        of this current.
        Ans. (a) X L = 9420R; ( b ) IL = 1l.lmA; ( c ) IL = 1l.lmA; IL,M = 15.7mA;                = 10.1mA

12.29   A choke coil      no resistance acts as a current limiter to 25 mA when 40 V is applied across it at a
        frequency of 500 kHz.           its inductance?     Ans. L = 0.51 mH

12.30 Two 2-H coils are connected in series so that the mutual                                     0.2H. Find the
        total                               to be (a) series-aiding             ( b ) series-opposing.
        Ans. ( a ) LT = 4.4H; (b) LT = 3.6H
 CHAP. 121                     INDUCTANCE AND INDUCTIVE REACTANCE                                                247


12.31 A number of coils are connected                 to form                                     A is made up of
        three 12-H chokes in parallel;         B of a 3- and a 5-H choke in                       C of a 4- and 6-H
        choke in parallel. Groups A, B, and C are                       in series. Find
        of ( a ) group A, (b) group B, and (c) group C; and ( d ) find the                   of the
        Ans. (a) 4 H ; (b) 1.88H; (c) 2.4H; (d) 8.3H

12.32   Find the total            of the   (Fig. 12-26). The   are spaced far apart so that mutual
        inductance is negligible.
        Ans. (a) LT = 15 mH; ( b ) LT = 4mH; (c) LT = 1.48 H; (d) LT = 5.1 H

                                                                  L,

                                                                 2mH               I
             L,          L2           L3
                                                                       L2                       3mH
           2mH          7mH          6mH




                                                            L6

                                                           2H


                                                   Fig. 12-26
                                                                             (4
                                                                                             3H
                                                                                                      L414H




12.33   Find the                   of the       (Fig. 12-27). The coils are               sufficiently close so that
        mutual             is present.
        Ans. ( a ) LT = 1 1 H; ( b ) LT = 8 H ; (c) LT = 14H; (d) LT = 8 H


                         L,=    1H                                                L , = 0.5 H




                              (4                                                       (6)
                                                 Fig. 1%27a, b
248                                 INDUCTANCE AND INDUCTIVE REACTANCE                                        [CHAP. 12


                              L,=    2H                                                L , = 1.5 H

           L, = 6 H                           L,=4H

                                              -I ! ! 1
                -   A                     a    a   a   a


                    I


                                                                                           (4
                                                       Fig. 1%27c,d


12.34   A resistance of 12 R is connected in series with a coil whose inductive reactance is 5 R. If the
        impressed ac voltage is 104 V, find the impedance, the line current, the voltage drop across the resistor
        and coil, the phase angle, and the power. Draw the voltage-phasor
        Ans. 2 = 13 R; 1 = 8 A; V R = 96V; VL = 40V; 8 = 22.6", 1 lags VT; P = 768 W; phasor dia-
        gram: see Fig. 12-28.

12.35   A lightning protector circuit contains a 55.7-mH coil series with a 6-R resistor. What current will
        flow when it is tested with a 110-V 60-Hz                                will the lightning protector
        consume?       Ans. I = 5.05A (2 = 21.80); P = 153W


               V,   --L   104 V
                                                                      Vco,, = 4.12 V
                                                                                                     =   1v
                                                                                                              I
           0              V , = 96 V                              0            v, = 4 v
                 Fig. 12-28 Phasor diagram                            Fig. 12-29 Phasor diagram


12.36   The coil of a telephone relay has a resistance of 4 0 0 0 and an inductance of 16mH. If the relay is
        operated at a frequency of 1 kHz,find the impedance of the coil       the voltage that must be impressed
        across the coil in order to operate the relay at its rated current of 10mA. Draw the voltage-phasor
        diagram.     Ans. 2 = 412.4 0; Vcoil = 4.12 V ; phasor diagram; see Fig. 12-29.

12.37   A 60-V source at 1.5 kHz is impressed across a loudspeaker of 5000 0 and 2.12 H inductance.                Find
        the current and power drawn.     Ans. I = 2.9 mA (2 = 20 600 Cl): P = 42.1 mW

12.38   What is the inductive reactance of a single-phase motor if the line           220V, the line current is
        15 A, and the resistance of the motor          1 0 n ? Also what is the angle of lag, the power factor,
        and the power consumed by the motor? (Treat this              as a simple RL series circuit.)
        A ~ S .xr> = 1 0 . 7 ~ ;e = 47"; PF = 0.682; P = m o w

12.39   What is      minimum inductance for a RF choke in series with a resistance of 50 0 at a radio frequency
        of loo0 kHz, if the resistive drop is to be considered negligible? If the applied           100 V, what
        is the voltage across the resistance? (See Prob. 12.13.)       Ans. L = 0.08 mH; VR = 9.95 V

12.40   A 20-R resistor and a 1 5 4 inductive reactance are placed          across a 120-V ac line.      the
        branch currents, the total current, the impedance, and the power drawn; and draw the phasor diagram.
        Ans. ZR = 6 A; ZL- = 8 A; IT = 10A; ZT = 12R; P = 720 W; phasor diagram: see Fig. 12-30.

12.41 A 100-0 R is in parallel    a 100-R XL. If VT = 100 V, calculate IT, 8, and ZT.
      A ~ S .lT= 1.41 A; e = -450;        zT
                                       = 70.7 R
CHAP. 121                       INDUCTANCE                                                                    249




                                                r, = I O A
                                           Fig. 12-30 Phasor diagram

12.42 The frequency is halved             12.41. Find IT, 8, and ZT. Compare the difference
      Ans. IT = 2.24A; 8 = -63.4';        ZT = 44.6R.                          in a RL parallel                in-
        creases 8 because        XL means more IL. With less XL,ZT is less.

12.43   A 50-R R and a 1 2 0 4 XL are connected in parallel across a 120-V ac line. Find the ( a ) branch
        currents, (b) total current, ( c ) impedance, ( d ) power drawn; and (e) draw the phasor diagram.
        Ans. ( a ) IR = 2.4A; IL = 1 A; (b) IT = 2.6A; (c) ZT = 46.2R; ( d ) P = 288 W; (e) phasor
        diagram:      Fig. 12-31.
                                         V, = 120 v


             7 Y-
                                                                                           V, = 80 V
                      - 22.6"                                       -51.3"




                                  r, = 2.6 A
                                                                         r, = 3.2 A
                            Fig. 12-31                                        Fig. 12-32

12.44   A 40-R resistor       a 10-mH coil are in parallel across an 80-V 500-H~ac line. Find the (a) branch
        currents, (b) total current, ( c ) impedance,   ( d ) power          (e) draw
        Ans. (a) I R = 2A; I L = 2.5 A; (b) IT = 3.2A; (c) ZT = 2 5 a ; (d) P = 16OW; (e) phasor
        diagram: see Fig. 12-32.

12.45   For the high-pass filter circuit (Fig. 12-33), find the (a) branch currents, (b) total current, and ( c )
        percentage of total current that passes            the resistor for the case of audio           (AF)at
        1 kHz         for the case of radio                     at 2MHz. (Calculate current values to three
        significant figures.)
        Ans. AF case: (a) ZL = 0.797 A; ZR = 0.0333 A; (b) IT = 0.798 A; (c) 4.2%. RF case: (a) IL =
        0.398mA; IR = 33.3mA; (b) IT = 33.3mA; ( c ) 100%




                                                   Fig. 12-33

12.46   A 120-V 60-Hz power line is                    a 12-H choke                            50042.   Find ( a )
        the                    (b) the Q of the coil, ( c ) the     (d) the
        Ans. (a) XL = 4522R; (b) Q = 9.0; ( c ) 2 = 4522R; (d) IL = 27 mA

12.47   The primary of an                                        a resistance of 100R and an inductance of
        25 mH. What are                                                at 2 kHz?
        Ans. XL = 314n; Z = 330n
250                           INDUCTANCE                                                               [CHAP. 12


12.48   Find the inductance of a                                 50042 if it         10mA from       110-V 60-Hz
        source.    Ans. L = 29.2 H (XL= 11 OOO n)

12.49   A                 Q of 25 draws 20mA when                  to a 12-V, 1-kHz                    What is its
        inductance?       Ans.  L = 95.5 mH (XL= 600 a)

12.50   For the         (Fig. 12-34), find (a) the inductive          (b) the impedance, ( c ) the rms current, and
        (d) the peak
        Ans. ( a ) XL = 37.7a;      (b) 2 = 41.0n (circuit R = 16Q); ( c ) I = 5.85A; (d) IM = 8.27A

12.51 An inductive             at a                angle of 53" draws 1400 W from   120-V line. Find the current
      drawn.     Ans. I = 19.4A

12.52   An inductance of 5 0 resistance          12    reactance          across a 117-V 60-Hz ac line. Find
        the     apparent, and                           Ans. P = 405 W; S = 1053 VA; Q = 972 VAR lagging

                  0.5 0



                                    Load resistance
                                    R, = I 5 0


240 V
60 Hz

                                    L = 100mH
                                    (R of coil negligible)



                       Fig. 1234                                                    Fig. 1235

12.53   A                                          2442 lamp in parallel                     of 30-Q inductive
        reactance (Fig. 12-35). If it operates from the 12-V winding of a 60-Hz power transformer, find ( a ) the
        total current, (b) the impedance, ( c ) the phase      (d) the power            (e) the reactive
        Ans. ( a ) IT = 0.64A; ( b ) ZT= 18.8n; ( c ) 8 = -38.7"; (d) P = 6W; (e) Q = 4.8VARlagging
                                                                                       Chapter 13

             Capacitance,
                  and                                                             Circuits
CAPACITOR
    A capacitor is an                          which consists of two                             of metal separated
by an                                a dielectric (Fig. 13-la). Schematic                              13-1b and c)
apply to all capacitors.
                                     Dielectric


                                                                                        +
                     7Kk
                   plate A
                   Conducting


                                (a) Structure
                                                plate B
                                                Conducting
                                                                      4-
                                                                          (Less


                                                                           (b) Fixed
                                                                                        +--76-
                                                                                         (Less


                                                                                         (c) Variable
                                    Fig. 13-1 Capacitor and schematic symbols


     A capacitor stores electric         in the                               of the                   in
Fig. 13-2a are electrically                 there are as many protons                       as electrons
(negative          on each           Thus                     no charge. Now a battery is connected
across the        (Fig. 13-2b). When the            is closed (Fig. 13-2c), the negative charge on plate
A is attracted to the                       of the battery, while the                     on plate B is
attracted to the negative           of the                 movement of charges will continue until the
difference in charge                    A and B is equal to the                   force (voltage) of the
battery.                  is now charged. Since              none of the
between                          will remain in this                   if the          is removed (Fig.
13-3a). However, if a conductor is placed across                       13-3b), the           find a path
back to plate A and the                    each plate are again neutralized.                        now




- p 11- -1 pr 8q
discharged.

       A                   B                       A                  B                      A             B




     0
                                                                                          0


           ( a ) Neutral                          ( b ) Neutral capacitor                ( c ) Charged capacitor
                                            Fig. 13-2 Charging a capacitor

                                                               25 1
252                          CAPACITANCE:                                                           [CHAP. 13




                -B
                        +               -
                        A               B                         A                  B




                                (a)                                        (b)
                                        Fig. 13-3 Discharging a

Example 13.1 Explain the charging                             of a simple capacitor           when switch 1 is
closed with switch 2 open (Fig. 13-4a),and when switch 1 is        with switch 2 closed (Fig. 13-46).
     When switch S1 is                     S2 is          13-4a),the battery                     across the two
plates A and B. The capacitor            to a            to that of the battery. Plate A is
and       B is                        When S1 is           S2 is               excess electrons on plate B will
move          232 to plate A (Fig. 13-4b). Now the capacitor acts as a          source with plate A the positive
terminal           B the negative             The motion of electrons off plate B reduces its negative
and              at plate A reduces its positive              motion of electrons                    there is no




                                                                                     E
charge on plate A or plate B and                      the two         is zero.

                                                                                         B


                        0
                        -0                                                                   -
                        0
                            0                                                                  1
                                                            I
                                                                                 L




                                                            -411-

                            (a) Charging action                       (b) Discharging action
                                        Fig. 13-4 Simple capacitor


CAPACITANCE
   Electrically, capacitance is the ability to store an electric charge. Capacitance is equal to the
amount of charge that can be stored in a capacitor divided by the voltage applied across the plates

                                                    c=Q
                                                      -V                                                 (13-1)
where C = capacitance, F
      Q = amount of charge, C
      V = voltage, V
CHAP. 131                      CAPACITANCE:                             AND CIRCUITS                      253


Equation (13-1) can be rewritten as follows:
                                                             Q = CV                                    ( 13-2)

                                                             v = -QC                                   (13-3)

      The        of capacitance                        (F). The             that capacitance that will. store
one              of charge in the                   when the voltage applied across the                    is
one
      The                 of a dielectric                    ability to store electric           called the
dielectric constant.    Air is used as a reference         given a dielectric            of 1. Some other
dielectric             are Teflon, paper, mica, Bakelite,                     Paper, for example,        an
average                        of 4, meaning it                            flux density            as great
as that for air for the        applied voltage and
    The                 of a capacitor                    area of the
between               and the                      of the insulating material.         a capacitor with two
parallel                       to find its             is



where         = capacitance, F
            k = dielectric             of the insulating material
            A = area of the           m2
            d = distance                         m
    The                  high a unit for most capacitors.              we conveniently
microfarad ( p F ) , which equals one-millionth farad (10-6 F), the         (nF), which equals
one-billionth         (10-9F), and the                    which equals one-millionth microfarad
(10-6 pF). Thus, 1 F = 106pF = 109nF = 10'* pF.

Example 13.2 What is the capacitance of a capacitor that stores 4 C of charge at 2 V?
                                               c = Q-                                                  (13-1)
                                                         V
                                                    = - = 2F           Ans.
                                                         2

Example 13.3 What is the charge taken on by a 10-F capacitor at 3 V?
                                    Q = CV                                                             ( 13-2)
                                       = 1q3) = 30C         Ans.

Example 13.4 What is the voltage across a 0.001-F capacitor that stores 2 C?
                                          V = Qc                                                       ( 13-3)

                                             --- =   *
                                                   0.001
                                                              2000v       Ans.


Example 13.5 The area of one plate of a two-plate mica capacitor is 0.0025 m 2and the separation between
plates is 0.02 m. If the dielectric constant of mica is 7, find the capacitance of the capacitor.
                             A
                       C = k ~ ( 8 . 8 5X 10-I')                                                       ( 23-4)

                          = 7%(8.85         x 10-'3 = 7.74 x 10-12F = 7.74pF           Ans.
254                                                                               13


Example 13.6                               13.5


        so
                           C = 5(7.74) =              Ans.




TYPES OF CAPACITORS


13-1.




                            Table 13-1 Types of Capacitors

                             I

                                                         10-5000

                                                        0.5-1600
                                                      0.002-0.1 p
                                                          5-1000
                                                       0.01-300 pF




CAPACITORS IN SERIES AND PARALLEL
                                             13-5),                      CT

                                                                              (13-5)


                                            n n
                                                                              (13-6)

        n                                                    CT = C/n.

             ^-;&+go  c2               .+  cn


                           Fig. 13-5


                                                                         CT
CHAP. 131                    CAPACITANCE:                                                                   255


Parallel:                             CT = c, + c,+ c3+ * . .+ C”                                       (13-7)
    There a limit to the voltage that may be           across any           If too high a voltage
applied, a current will be                                             burning a hole in it. The
capacitor      will short-circuit and must be discarded.       maximum voltage that may be applied
to a capacitor is called the working voltage and should     be exceeded.




                                      Fig. 13-6 Capacitances in parallel

Example 13.7 Find the                       of a 3-pF, a 5-pF, and a 10-pF capacitor            in series
13-7).
    Write   (13-5) for three               in series.
                                    - 1= - +1 - +1- = -1+ - 1+ - =1 - 1 1 9
                                    C T C1 Ct C, 3 5 10 30
                                                                    Ans.




                                          “T’*”’
            Fig. 13-7                                    Fig. 138                        Fig. 13-9



Example 13.8 What is the                             working voltage of a capacitor                  if CI and
C2are     200-pF 150-V capacitors           13-8)?

                                     C T = - --200
                                               -=            100pF         Ans.
                                            n        2
The                    may be applied across a group of capacitors in series is equal    sum of the
voltages of the individual             Therefore,
                              Working voltage = 150 + 150 = 300V                  Ans.

Example 13.9 A capacitor in a radio                            a capacitance of 310 pF (Fig. 13-9). When
the                 a variable        (called a trimmer) in parallel with it is adjusted to a capacitance of
50pF. What is the                 of the
    Write Eq. (13-7) for two         in parallel.
                               CT = CI + C2 = 310 + 50 = 360pF                    Ans.
256                        CAPACITANCE: REACTANCE AND CIRCUITS                                 [CHAP. 13


CAPACITIVE
    Capacitive reactance Xc is the opposition to the flow of ac current due to the capacitance in the
circuit.          of capacitive reactance is the ohm. Capacitive reactance can be found by
the equation
                                    &=-- 1                   1       0.159
                                                                                                  ( 13-8)
                                       27rfC -           6.28fC = f c
where X c = capacitive reactance, R
        f = frequency, Hz
       C = capacitance, F
      If any two quantities in Eq. (13-8) are known,                  can be found.

                                                   c =0.159
                                                      -                                           ( 13-9)
                                                          fXC
                                                   f = -0.159
                                                                                                 (13-10)
                                                          CXC
    Voltage   current in a circuit                            reactance can be                    Ohm’s
law. However, in the case of a capacitive circuit, R is replaced    Xc.
                                                   vc = I C X C                                  (13-1I )
                                                        VC
                                                   Ic = -                                        (13-12)
                                                           XC

                                                   xc = -
                                                        VC
                                                        IC
                                                                                                 (13-13)

where      Ic = current through the capacitor, A
          Vc = voltage across the capacitor, V
          Xc = capacitive reactance, Ln
Example 13.10 What is the capacitive reactance of a 0.001-F capacitor at 60 Hz (Fig. 13-10)?
                                           0.159
                                   xc = -                                                          ( 13-8)
                                            fC
                                       =--              - 2.65 R       Ans.
                                           6O(O.O0 1)

                                                                            I, = ?




                              Fig. 13-10                                    Fig. 13-11




                                           --
Example 13.11 A capacitor in a telephone circuit has a capacitance of 3 p F (Fig. 13-11). What current
flows through it when 15 V at 800 Hz is impressed across it?
    Find Xc and then Ic by Ohm’s law.
                                               0.159
                                      xc = -                                                       ( 13-8)
                                                fC
                                           -                     = 66.25R
CHAP. 131                        CAPACITANCE: REACTANCE AND CIRCUITS                                             257


                                           VC
                                      Ic = -                                                                  (13-12)
                                            xc
                                         = - -l5
                                           66.25
                                                   - 0.226 = 226mA         Ans.


Example 13.12 A 120-Hz 25-mA ac current flows in a circuit containing a 10pF capacitor (Fig. 13-12).
What is the voltage drop across the capacitor?
                                                                            I , = 25 mA




                                                                                              r
                                                                                              l
   Find Xc and then VC by Ohm's law.

                        xc = 0.159
                             -
                              fC
                                                                      ( 13-8)
                                                                                     V = ?
                            -       0.159      -

                                                                                              U
                                               - 132.5                               120 Hz               C = 10pF
                                120(10 x 10-6)
                 vc = I C X C                                        (13-1 1 )
                     = (25 x 10-3)(132.5) = 3.3 V          Ans.
                                                                                                 Fig. 13-12

CAPACITIVE CIRCUITS

Capacitance Only
    If an ac voltage U is applied across a circuit       only capacitance        13-13a), the resulting
ac current through the capacitance, i,, will lead the voltage across the capacitance, U,, by 90" (Fig.
13-136 and c). (Quantities                 as lowercase letters, i, and U,, indicate instantaneous
values.)            U and U, are the same                are parallel. Both i, and U, are sine
with the same frequency. In                         current Ic is the horizontal         for reference
(Fig. 13-13d) so the voltage Vc can be considered to lag Ic by 90".



   '
   C




                                                                                 L
                                                                                 L   direction


                                                                                        v, vc




 (a) Schematic                             (6) Time diagram, ic            (c) Phasor             (d)Phasor diagram,
                                               leads vc by 90"                 V reference           Ic reference

                                           Fig. 13-13 Circuit with C only


RC in Series
     As with         circuits, the combination of resistance and            reactance (Fig. 13-14a)
is called impedance. In a series circuit            R and Xc, the same current I flows in Xc and
R. The voltage drop across R is VR = IR, and the voltage drop across Xc is Vc = IXc. The
voltage across Xc lags the current through Xc by 90" (Fig. 13-146). The voltage across R is in
phase with I since                     produce a phase shift (Fig. 13-14b).
     To find the            VT, we add           VRand Vc. Since they form a right triangle
13- 1S),
258                           CAPACITANCE: REACTANCE AND CIRCUITS                                                [CHAP. 13




                               (a) Circuit                             ( 6 ) Phasor
                                             Fig. 13-14 R and X c in series

Note that the IXc phasor is                              from an IX, phasor (see Fig. 12-11),
because    the opposite
    The phase angle 8 between V, and V R (Fig. 13-15) is                    to the following
equation:
                                                         vc
                                               tan 8 = - -
                                                           VR
                                                   e = arctan (- K)
                                                                 VC
                                                                                                                       (13-15)




                              vc = I X ,                                                                        - 67.4'

VT




                                                                ((I)   Circuit                          ( b ) Phasor
     Fig. 13-15 Voltage-triangle phasor                                               Fig. 13--16a, b

Example 13.13 A RC series ac circuit has a current of 1 A peak        R = 5 0 0 and X c = 120R (Fig.
13-16a). Calculate VR, Vc,VT, and 8. Draw the phasor diagram of Vc and'I. Also draw the time       i,
uR, uc, and uT.

                              VR = IR = l(50) = 50V peak                 Ans.
                              Vc = IXc = l(120) = 120V                        Ans.
Then                          VT   =   dvk + v',                                                                       ( 13- 14)
                                   = d50'     + 1202
                                   = d2500     + 14 400 = d 1 6 900 = 130 V peak                Ans.

                               e = arctan   (- 2)                                                                      (13-15)

                                   = arctan (- g)= arctan(-2.4) = -67.4'                       Ans.

In a series circuit since I is the same in R and Xc,I is shown as the reference phasor at 0" (Fig. 13-16b). I
leads VT by 67.4' or, equivalently, VT lags I by 67.4'. For the time diagram, see Fig. 13-16c.
         I       i




         I   I          i reference



   5ov   -
     0

 -50v    -
             I           vR in phase with i




                           vc lags i by 90"
             I
             I
 130V    -


     0                                          360"   t+




-130 V   -               vT lags i by 67.4"



                        (c) Time

                     Fig. 13-16c Time diagram
260                         CAPACITANCE:                      AND CIRCUITS                           [CHAP. 13


Impedance in Series RC
   The voltage        (Fig. 13-15) corresponds to the                                  (Fig. 13-17) because
common factor I in Vc and VR,cancels.




Impedance 2 is           to the phasor sum of R        Xc.              FLg. 13-17 Series RC         impedance
                                                                                   triangle
                     Z = v R 2 + X',                    (23-26)
The phase        6 is

                                             e = arctan (- $)                                           (13-1 7)

Example 13.14 A 40-R Xc and 30-R R are in series across a 120-V source                  13-18a). Calculate Z, I,
and 8. Draw the phasor diagram.
                                z     - r n                                                              (23-16)
                                    = VWTiP = rn= socl                   Ans.
By Ohm's law,
                                             120 - 2.4A
                                       I=v,=--                    Ans.
                                          Z  50

                          6 = arctan  (- %)                                                             (13-17)

                             = arctan (- f ) = arctan(-1.33) = -53.1'           Ans.

For the phasor           see Fig. 13-18b.


                                     R = 3on




             v, = 120v                                  xc = m n



                                        (4                                      (b) Phasor diagram

                                                 Fig. 13-18



RC in Parallel
   In the RC .parallel circuit (Fig. 13-19a), the            the same across the source, R, and Xc
since        are all in parallel. Each                               current. The resistive
current IR = VAR is in phase           VT. The                     current Ic = VdXc          VT by
90" (Fig. 13-19b). The           diagram has the source voltage VT as the reference
it                                                line current IT equals the phasor sum of IR and Ic
(Fig. 13-19c).
CHAP. 131                     CAPACITANCE: REACTANCE AND CIRCUITS                                                           26 1




                                                                                      =J


                                                                      'R        'T                      IR
                (a) Circuit                          (b) Phasor diagram                            (c) Current-trianglephasor
                                      Fig. 13-19 X c and R in parallel



                                                  tan e =
                                                            IR
                                                                           T

                                                     e = arctan2                                                        (13-19)
                                                                           IR

Impedance              RC
    The impedance of a parallel circuit equals the total voltage VT divided by the total current IT.

                                                     ZT= v,                                                             ( 13-20)
                                                                 IT

Example 13.15 A 15-n resistor and a capacitor of 2 0 n capacitive reactance are placed in parallel across a
120-V ac line (Fig. 13-20a). Calculate IR, Ic, IT, 8, and 2. Draw the phasor diagram.

                                   R
                               IR=&=!.?!=8A
                                          15                          Ans.

                                             120
                               Ic = x c = -
                                          20
                                             = 6A                     Ans.

                               IT = dI5(+ I :                                                                           (13-18)
                                  = v82+ 6' =        v% = 10A                        Ans.

                                8 = arctan-IC                                                                           (13-19)
                                             IR

                                             6
                                  = arctan- = arctan0.75 = 36.9"                        Ans.
                                             8
                                                                                                                        ( 13-20)




For the phasor diagram, see Fig. 13-20b.




                                           (0)
                                                                                     LVT        120 v
                                                                                               36.9"


                                                                                        (b) Phasor diagram     .
                                                     Fig. 13-20
262                          CAPACITANCE:                                                         [CHAP. 13


POWER IN RC CIRCUITS
      The                    given previously for RL circuits are equally                 to RC circuits.
                                         Real power P = VI cos 8, W                                  (23-22)
                                                               V2
or                                                  P = 12R = R, W                                   ( 23-22)

                                     Reactive         Q = VI sin 8, VAR                              ( 23-23)
                                     Apparent         S = VI, VA                                     ( 13-24)
   Capacitance,                                                    The only part of the circuit
power
                              Summary Table for Series and Parallel RC Circuits
                       -~        ~




                          Xc and R in Series                Xc and R in Parallel

                        I the        in Xc and R       VT the     across Xc and R
                        VT   =   qvi + v'c.            IT = dIi + 1:
                        2 = d R 2 + X', = -VrT         ZT = -
                                                            VT
                                                              IT

                        Vc lags V R by 90"             Ic leads IR by 90"
                        e = arctan   (- 2)             8 = arctan-IC
                                                                   IR




                                          Solved Problems
13.1    What                          of three capacitors          in parallel if their are 0.15 pF,
        50 V; 0.015 p F , 100 V; and 0.003 pF, 150 V (Fig. 13-21)? What would be the working voltage
        of this
            Write Eq. (13-5) for three             in parallel.
                         C T = CI + C2 + C , = 0.15 + 0.015 + 0.003 = 0.168 /LF         Ans.
        The working voltage of a group of parallel                        only as high as the        working
        voltage. Therefore, the working voltage of this                 is only 50 V.




13.2    A technician                                      300 pF, 75 V; 250 pF, 50 V; 200 pF, 50 V;
        150 pF, 75 V; and 50 pF, 75 V. Which of these          be connected in parallel to form a
        combination with a capacitance of 500 pF and 75 V working voltage?
            Capacitors                           75 V must not                  of possible
        damage. The remaining capacitors with 75-V ratings are 300, 150, and 50pF, the sum of which is
        500pF. Therefore, the     parallel combination is as shown in Fig. 13-22, where CT = 300 +
        150 + 50 = 500 pF.
CHAP. 131                         CAPACITANCE:                          AND CIRCUITS                           263


13.3   What is the range of total                         in an                    that uses a variable
       tuning capacitor of 35- to 300-pF range in series with a fixed capacitor of 250 pF (Fig. 13-23)?
           At the low point in the range of total                   we have 35 pF in series with 250 pF.



       At the high point in the           we have 300pF in series with 250pF.



       Therefore, the                   30.7 to 136.4pF.

13.4   What                              in parallel                a 550-pF capacitor in order to get a total
       capacitance of 750 pF (Fig. 13-24)?
           Write Eq. (13-7) for two                in parallel.
                                           CT = CI + c2
                                           750 = 550 + C2
                                            C2 = 750 - 550 = 200pF            Ans.



                                                                                                     3rJ;



                      35-300 pF


                                                                                                     2 PF
          Fig. 13-23                                       Fig. 13-24                             Fig. 13-25

13.5   Find                               of the                                     in Figs. 13-25, 13-26a, and
       13-27a.
       ( a ) See Fig. 13-25. Simple series

                                                                                      Ans.

       (b) See Fig. 13-26a, b, and c. Series-parallel
            Parallel:               C a = Cz + C, = 0.1 + 0.2 = 0.3pF
            Series:                                                                     Ans.




                                                                                         -l
264                           CAPACITANCE: REACTANCE AND CIRCUITS                                    [CHAP. 13


       (c)   See Fig.         b, and c. Parallel-series combination:

             Series:
             Par alle1:        CT = CI + C2 + C, = 2 + 3 + 2.22 = 7.22pF             Ans.




                                                                        (b)
                                                     Fig. 13-27

13.6   Find the total capacitance of the series circuit     the capacitive reactance of the group of
       capacitors when        in a 6@Hz circuit       13;28).
       1 = -1+ - +1-
       -                  1
                                                       ( 13-5)
       CT     CI c* c3
             =-1
               + - + -1= - 1      8
              0.1 0.5 0.25       0.5
              05
       CT = A = 0.0625 p F             Ans.
              8
       xc = 0- 159                                     ( 13-8)
             fCT
          -        0.159      = 424000              Ans.                               0.25 pF
             60(0.0625 x lO+)                                                         Fig. 13-28

13.7   A capacitor draws 6 m A when connected across a 110-V 60-Hz line.                           will be the
       current drawn if both the frequency and capacitance are doubled?
           We look at two relationships.      First, because Ic = Vc/Xc, we can say Ic is inversely proportional
       to Xc, or
                                                                1
                                                           Ic a -
                                                                  XC

                                    we can say Xc is inversely proportional to the product of f and C, or
       Second, because Xc = 0.159/fC,

                                                           xc a   fc1
       So if f and C are doubled, Xc is decreased by 1/4.



       And when X c is decreased by 1/4, Ic is increased four times. Therefore
                                              Ic = 4(6) = 24mA            Ans.

13.8   A 2@kF capacitor in an audio amplifier circuit produces a voltage drop of 5 V at
       1 kHz. Find the current passed by the capacitor.
CHAP. 131                   CAPACITANCE: REACTANCE AND CIRCUITS                                            265


            Find Xc and then Ic.
                                                  0.159
                                          xc =    -
                                                  fC
                                                                                                         ( 13-8)

                                                -        0.159
                                                - (1 x 103(20 x 10-6) = 7.95n
                                                                                                        (13-12)

                                                =--
                                                  7.95
                                                         - 0.629A     Ans.



13.9   Calculate             of the bypass                  in an audio         if it is to have a reactance of
       800R at 10kHz.
                                     c = -0.159                                                          ( 13-9)
                                           fXC
                                       -        0'159      = 0.02p.F         Ans.
                                           (10 x 103)(800)


13.10 A capacitor is inserted in a circuit to obtain a leading current of 5 A.         If the        is 110 V,
       60 Hz, what is the
           Find X, and then C.

                                                                                                        (23-13)



                                   c = 0.159
                                        -                                                                ( 13-9)
                                          fXC
                                     =--          - 121 x 10-6 = 121 p.F        Ans.
                                       60(22)



13.11 A capacitance of 20pF draws 10mA when                                         a 95-V source. Find the
       frequency of the ac voltage.
           Find Xc and then f.

                                                                                                        (13-13)

                                      -    95 j = 95000
                                        10 x 10-
                                       0.159
                                    f =-                                                                (13-10)
                                          cxc
                                      -
                                      -         0.159
                                                           - 838 kHz            Ans.
                                          (20 x 10-'~(9500)-



13.12 Find the            of a RC combination when the                     is 0.01 pF,the
       frequency is 1 kHz, and the            of the circuit is 3 kR (Fig. 13-29). A coupling
       capacitor,                  more reactance at lower frequencies,        in less ac voltage
       across R and more across C.
266                            CAPACITANCE:                                         CIRCUITS                             [CHAP. 13


            Find X c and         Z.                                                                        C

                 0.159
        xc = -                                                       ( 13-9)                          0.01 pF
                  fC
             -       0.159
             (1 x 103)(0.01 x 10-7
                                   = 15900R
                                                                                                           kHz
                                                                                                                 R
                                                                                                                     i* - - -
                                                                                                                          3kn
         Z = d R 2+ X:
           = d3O0O2 + 15 9002 = 16 180 R                   Ans.
                                                                    (13-16)

                                                                                                    Fig. 13-29
                                                                                                                     1
                                                                                                                     =
13.13 In a series RC circuit, the higher the X c compared          R, the                 is the
      circuit. With higher X c there is            drop across the capacitive reactance, and the
      phase angle increases toward -90". To illustrate, find the indicated quantity.


                                                                                               Nature of
                                       Case        R, R     Xc,R          2, R          8       Circuit




                                      Z=dR2+XC                                                                              (13-16)
                                       = g 1 0 2 + 102 = 14.1 R            Ans.

                                      8 = arctan   (- 2)                                                                    (13-17)
                                                   - 10
                                        = arctan- 10 = arctan(-1) = -45"                    Ans.

            The circuit is capacitive.
      (b)                                     2 = d102 + l2 = 10.0R                 Ans.
                                              8 = arctan (-0.1) = -5.7"              Ans.
         The circuit is only slightly capacitive.
      (d                              2 = d12+ 102 = 10.0R                          Ans.
                                      8 = arctan(-10) = -84.3"                          Ans.
               The circuit is almost                        Recall that if R = 0 (pure capacitive circuit), 2 = Xc =
               10R at 8 = -90". The complete                  is as follows:


                                                                                                   Nature of
                              Case       R, R       Xc, R         Z, R          e                   Circuit

                             Xc = R        10         10          14.1     -45"             Capacitive
                             Xc < R        10          1          10.0         - 5.7"       Slightly
                             Xc > R         1         10          10.0     -84.3"           Very
                         i




13.14 In a parallel RC circuit, as X c becomes smaller compared                                R, practically all the line
      current is the Ic component. Thus the parallel                                    is capacitive. The phase angle
      approaches 90" because the line current is mostly                                           To illustrate, find the
      indicated                  VT = 1OV.
CHAP. 131                      CAPACITANCE: REACTANCE AND CIRCUITS                                                                         267



                                                                                                                           Nature of
                       Case         R, 51          X c , 51             IR,   A           iC,A           IT,
                                                                                                          A          8      Circuit

                     Xc = R             10             10                 ?                ?                         ?         ?
                     Xc > R              1             10                 ?                ?             ?           ?         ?
                     Xc < R             10              1                 ?                ?             ?           ?




                                                                                                                                       (13-18)


                                                8 = arctan-Ic                                                                          (13-19)
                                                                   IR

                                                   = arctan 1 = 45"                       Ans.
             The circuit is capacitive.




                                             I c = - -l100 - 1 A               Ans.

                                             IT = g 1 0 2 4- 1' = 10.0A                         Ans.
                                                              1
                                              8 = arctan-           = 5.7"                Ans.
                                                              '0
             The circuit is only                capacitive.


      (c)                                I R = -l 0=        1A                Ans.
                                                10

                                               1
                                                 - lOA         Ans.

                                         IT = g12+ 102 = 10.0 A       Am.
                                          8 = arctan 10 = 84.3"     Ans.
             The circuit is almost entirely capacitive.
      Recall that if R = 0 (pure capacitive circuit), IT = Ic = 10A at 8 = 90". The complete table is as
      follows:

                                                                                                                         Nature of
                   Case        R,              Xc, n          IR, A               lc, A        IT,   A       e            Circuit

        (U)      Xc = R            10             10                1               1           1.4      45"         Capacitive
       (6)       Xc > R             1             10               10               1          10.0          5.7"    Slightly capacitive
       (c)       xc < R            10              1                1              10          10.0      84.3"       Very capacitive



13.15 A voltage of 1OV at a            of 20kHz is applied across                                                1-pF capacitor. Find the
      current and the real power used. Draw the phasor diagram.
268                           CAPACITANCE: REACTANCE AND CIRCUITS                                               [CHAP. 13


          Find Xc and then Ic.

                    x, = 0.159
                         -
                          fC
                                                                              ( 13-9)

                        -
                        -          0.159
                                                = 1.95fi
                            (20 x 103)(1 x 10-7
                    lc =    -
                            vc
                                                                           (23-22)
                            xc                                                                    “C

                        = - -l0    - 1.26A             Ans.                                  Fig. 13-30 Phasor diagram
                            7.95
      Now find P.
                                              P = VICOS~                                                             (23-22)
                                              V = Vc     and       I = Ic      so
                                              P = 10(1.26)(cos 90’) = 10( 1.26)(0) = 0 W               Ans.
      No net power is consumed in the circuit when there is no resistance.               For the phasor diagram, see Fig.
      13-30. lc leads Vc by 90”.


13.16 A capacitance of 3.53 p F and a resistance of 40 are connected in series across a 110-V
      1.5-kHz ac source (Fig. 13-31). Find Xc, 2,8, I, VR, Vc, and P. Draw the phasor diagram.
      Step 1. Find Xc.
                                     xc=--
                                        0 159 -                  0.159
                                                                                  = 300           Ans.
                                                 fC      (1.5 x lOq(3.53 x 10-9
      Step 2. Find 2 and 6.
                            2 = VR2+ X’, = V402+ 302 = 50R                     Ans.
                            6 = arctan   (- %) = arctan (- g) = arctan (-0.75) = -36.9”                       Ans.

      Step 3. Find I.



      Step 4. Find VR and Vc.         By Ohm’s
                                                  VR   = IR = 2.2(40) = 88V             Ans.
                                                  V c = IXc = 2.2(30) = 66V              Ans.
      Step 5. Find P.
                                     P = 12R = (2.2)2(40)= 193.6 W         Ans.
      Step 6. Draw the phasor diagram (see Fig. 13-31b). I leads VT by 36.9”.

                                             R

                              r          40 Q

           v, = 11ov
                                                         C 7; 3.53 p F
             1.5 kHz




                                         (4                                             (6)Phasor diagram
                                                         Fig. 13-31
CHAP. 131                    CAPACITANCE: REACTANCE AND CIRCUITS                                                           269


13.17 The purpose of a low-pass filter circuit (Fig. 13-32)is to permit low frequencies to pass on to
      the load but to prevent the passing of high frequencies. Find the         currents, total
      current, phase                         of the     current passing                    for
          a 1.<kHz (low) audio-frequency signal and (b) a 1-MHz (high) radio-frequency signal.


                                                        IT
                                                                   IC   I           IR   I

                                                           Fig. 13-32


            Step 1. Find Xc at f = 1.5 kHz.
                                           xc=--
                                              0 159 -      0.159
                                               f c (1.5 x 103)(1 x 10-4 = 106 kR
            Step 2. Find branch currents Ic and IR.

                                            I c = xvcT = 106x
                                                           loo 3 = 0.94mA
                                                              10
                                                                                               Ans.

                                            IR=vT=    3 = 20mA                           Ans.
                                               R  5x10
            Step 3. Find IT and 8.
                  IT =                           +
                                     = v202 (0.94)' = v400                  + 0.88 = v400.88 = 20.02mA              Ans.
                              IC          0 94
                   e = arctan-IR = arctan-
                                           20
                                               = arctan0.047 = 2.7"                          Ans.

            Step 4. Find IR as a                     of IT.
                                         x 100 = -20 100 = 0.999(100) = 99.9%
                                    IT           20.02                                                Ans.

            Thus, practically all the 1S-kHzaudio-signal current passes                             the resistor.

            Step 1. Find Xc now at f = 1 MHz.
                                              0 159A -
                                             &=       0.159   -                          = 159n
                                                      fC          (1 x 107(1 x 10-7
            Step 2. Find Ic and I R .

                                          I , = -vT
                                                  = - - loo - 0.629 = 629mA                     Ans.
                                                 Xc 159
                                          I R = 20mA          Ans.
                     IRis the            as in part (a).
            Step 3. Find IT and 8.
                 IT = VI; + I : = V202 + 629' = q400 + 395 641 = V3%041 = 629.3 mA                                  Ans.
                                        629
                  8 = arctan - = arctan - = arctan 3 1.45 = 88.2"
                             IC
                                                                   Ans.
                             IR          20
            Step 4. Find I R as a                 of IT.
                                    ! E x 1 0 0 = - 2o 100 = 0.032(100) = 3.2%                       Ans.
                                    IT             629.3
270                               CAPACITANCE:                                                             [CHAP. 13


              Thus, only 3.2 percent of the 1-MHz radio signal current passes              the resistor.
        It                            is an                            filter by passing              all the low-
        frequency (1.5-kHz) current through                                  of the                (1-MHz) current
        through




                                          Supplementary Problems
13.18   What is the                 of a capacitor    stores 10.35 C at 3 V?      Ans. C = 3.45 F

13.19   What           is taken     by a 0.5-F capacitor              across a 50-V source?     Ans. Q = 25 C

13.20   Find the                  of a capacitor           one plate area of 0.5 m2, a distance                  of
        0.01 m, and a dielectric of paper with a dielectric constant of 3.5.     Ans. C = 1549pF

13.21 What is the        of a 500-pF capacitor at (a) 40 kHz, (b) 100 kHz, and ( c ) 1200 kHz?
      Ans. (a) X c = 7950R; (b) X c = 3180R; (c) X c = 265R

13.22   Two capacitors in parallel are connected across a 120-V line. The first capacitor   a charge of
        0.00006C and                            a charge of O.ooOo48C. What is the capacitance of each
        capacitor         is the                      Ans. CI = 0.5 p F ; Cz = 0.4 pF; CT = 0.9 p F

13.23   Find the indicated


                C,F       Q,C         V, V                     Ans.

        (a)        ?         11           110
        (b)     0.3           ?           220
        (c)     0.2          50            ?


13.24   The               of a known parallel-plate              with air as a dielectric 0.248 pF. What is the
        capacitance if (a) Teflon with a dielectric constant of 2.1 replaces air; (b) the area of one plate
        reduced by one-half; ( c ) the                       is increased by a factor of 1s; and ( d ) rubber with a
        dielectric constant of 3 replaces air, the area of a plate             by If,and the separation           is
        reduced                       original value?
        Ans. (a) C = 0.521 p F ; (b) C = 0.124pF; ( c ) C = 0.165 p.F; ( d ) C = 1.24pF

13.25   What is the               of an                     of 400 pF to a frequency of 630 kHz?
        A ~ s .X c = 631 R

13.26   Find                   of the                                 13-33).
        Ans. (a) CT = 0.40 pF; ( b ) C T = 0.065 p F ; (c) CT = 0.04 pF; (d) C T = 0.05 pF;
             (e) CT = 0.84 p F

13.27   A 10-V I-MHz signal appears  a 1200-pF capacitor. Find the current passed by the
        Ans. Ic = 75.2mA; (Xc= 133R)

13.28   A filter circuit        of an                                        13-34). Its purpose is to smooth
        power-supply           so that a pure          current is           to the        If the          of C1is
        175 R at a frequency of 60 Hz, what is                          Ans. C1= 15.1 pF
CHAP. 131                       CAPACITANCE:                                                                                27 1




                                                                                                   o--it--lt-
                                                                                                         0.16 pF 0.16 pF


                                              0.25 pF                                  0.3 pF

                                                                    c3             I
                                                                   0.5 pF                               0.16 pF 0.16 pF
                                                                            (b)                                   (c)




                                   (4
                                                            Fig. 13-33

                                    Filter
   c
                                 A

          Power
                                                                 Load

   1                   I                                1                    J

                                  Fig. 13-34                                                            Fig. 13-35

13.29   Find           of the      of the                                         (Fig. 13-35).
        Ans. 2 = 4700n (Xc= 3980n)

13.30   What      the total                  of each of the                                                in parallel: 30epF
        l W V ,0.001-pF 150-V,and          SO-V? What is the working voltage of the parallel combination?
        Ans. CT = 4300 pF or 0.0043 p F , 50 V

13.31 What                  must be added in parallel to a 2WpF capacitor in order to obtain
        of ll00pF?         Ans. 900pF

13.32 Two              are placed in series across the secondary line of a                to reduce
        peaks. What is the                            is the working voltage of the pair of 0.008-pF 650-V
        capacitors?   Ans. CT = 0.004pF, 1300V

13.33 A                                                 in series, C, = 300pF and C2 = 300pF, and                           at a
        frequency of 100kHz. What is the                                     is the reactance?
        Ans. CT = 150pF; X c = 10600R

13.34   What the capacitive                                                            if the stray capacitance            them
        is 10 pF and  wire carries a                             of 1200kHz?
        Ans. Xc = 13 250n or 13.25 kR
272                          CAPACITANCE: REACTANCE AND CIRCUITS                                              [CHAP. 13


13.35   Find the indicated

                                              f            C            IC


                                     ?    120 Hz        10 pF          25 mA           ?
                                    ?       4.2MHz         ?          160 mA          400
                                    200   600 kHz          ?            ?              10
                                    ?     800 Hz         2PF            ?              20
                                   loo0   500 Hz           ?          22 mA            ?
                                    ?         ?         30 pF         20 mA           106
                                    ?         ?          0.01 p F      4A               3


        Ans.                    xc,               f             C            Ic

                                 133          ....             ....      ....
                                2500          ....         15.2pF        ....
                                   ....       ....       1325 pF        50 mA
                                   99.4       ....             ....      0.2 A
                                   ....       ....          0.318pF      ....
                                5300        1 MHz              ....      ....
                                   0.75    21.25 MHz           ....      ....

13.36   Find                                if its reactance is 40 R and its resistance is 20 R.
        Ans. 2 = 44.7R

13.37   Find the            of a                         1.5-kHz audio signal if the
        capacitance   0.02 pF.        Ans. 2 = 5670 R

13.38   What is the impedance of a                to a 20-kHz frequency if its resistance                400R and its
        capacitance is 0.032 p F ? Ans. 2 = 471 R

13.39 A 120-V 60-Hz ac voltage is impressed across a          of a 10-R resistor
      reactance 15 R. Find the impedance,             line current, voltage drop across the resistor
      the capacitor, and         Draw the
      Ans. 2 = 18R; 8 = 56.3", I leading VT; I = 6.67A; VR = 66.7V; Vc = 1OOV; P = 444 W. For
      the                see Fig. 13-36.

                  VR = 66.7 v
                                                                       VR = 1oov
                                                                                                I reference

                                                                                            Vc = 50 v




                       Mg. 13-36                                                  Mg. 13-37
13.40 A 110-V 200-Hz ac voltage             across a
      capacitor. Find 2,8, I, VR,Vc, and P. Draw the phasor
      Ans. 2 = 122R; 8 = 26.6", I leading V T ;I = 0.982A; VR = 100V; Vc = 50V; P = 100W.
      the                    Fig. 13-37.
 CHAP. 131                   CAPACITANCE: REACTANCE AND CIRCUITS                                         273


 13.41 A 5-kR resistor       an unknown           are placed in series across a 60-Hz line. If the voltage
         across the resistor 30V and    voltage across the capacitor 6OV, find the
         current in the                                                   of the capacitor.
         Ans. VT = 67.1 V; I = I R = 6mA; X c = 10kR; C = 0.265 pF

13.42   A circuit         of a 30-pF capacitance in series with a rheostat is connected across a 120-V 60-Hz
        line. What must the       of the             be in order to permit a current of 1 A to flow? (Hint:
        Solve                      in Fig. 13-38 for R.)     Ans. R = 81.2 R

13.43   In a resistance-coupled        (Fig. 13-39), the        drop across        A and B is 14.14V. If the
        frequency of the current is 1 kHz, find the                               Draw the
        Ans. V R = 1OV; for the                          Fig. 13-40.




                                                      0.159 pF




-883.                        fl        BO
                                                                   -
           Fig. 13-38                                 Fig. 13-39                           Fig. 13-40


13.44   A 15-R resistor         8-fl capacitive      are placed in parallel across a 120-V ac line. Find the
        phasor          currents, total current and                        and power drawn; and draw
        phasor
        Ans. I R = 8 A ; Zc = 15 A; ZT = 17A, 8 = 61.9", ZT leads VT; ZT = 7.1 R; P = 960 W; for the
        phasor               Fig. 13-41.




                                       VT reference                                        reference


                          Fig. 13-41                                          Fig. 13-42

13.45   A 2 0 4 resistor     a 7.95-pF capacitor are connected in parallel across a 100-V 2-kHz source. Find
        the        currents, total current and                                     drawn; and
        diagram.
        Ans. ZR = 5 A ; IC = 10A; IT = 11.2A, 8 = 63.4", IT leads V,; ZT = 8.9R; P = 500W;for the
        phasor               Fig. 13-42.

13.46   For                         (Fig. 13-43), find Ic, IR, IT,and       of IT that
        the        for an                 at 1 kHz       for a radio  at 2 MHz.
        Ans. AF case: IC = 0.5 mA; IR = 19.9mA; IT = 19.9mA; 100 percent; RF case: Zc = 1 A; IR =
        19.9 mA; IT = 1.002 A; 2 percent
274                           CAPACITANCE: REACTANCE AND CIRCUITS                                       [CHAP. 13




                              AF: VT = 79.5 V, 1
                              RF: VT = 79.5 V, 2




13.47 Find the indicated values for an RC parallel circuit.

                                                                I



                          VT,  v        R          XC     IR        re     IT     ZT        80   P,w
                           120         120n      6oQ      ?         ?      ?      ?               ?
                             8           4kR      8kR     ?         ?      ?      ?
                            20          4On      40Q      ?                       2         ?     ?



       Ans.           vT,v         R        XC      IR         rc          IT          ZT        8"     P,w
                       ....        ........        1A      2A            2.24A     54.5R   63.4        120
                       ....        ........        2mA     1 mA          2.24mA     3.57kn 26.6          0.016
                      ....         ........        0.5A    0.5A          0.707A    28.2n   45           10
                                                                              Chapter 14

                                Single-Phase Circuits
THE GENERAL RLC CIRCUIT
     The preceding       chapters have             how a combination of inductance      resistance
and then capacitance and resistance behave in a series circuit      in a parallel         We saw
how the RL and RC combination                 current, voltages,           factor, and
of a circuit. In this chapter all three fundamental                               capacitance, and
resistance-are combined                     on circuit


RLC IN SERIES
    Current in a series circuit                                reactance, and         reactance
(Fig. 14-la) is determined    the total impedance the combination. The current I is the      in
R, X,, and Xc since        are in series. The voltage drop across each element found by Ohm's
law:


where    V R = voltage drop across the resistance, V
         V L = voltage drop across the             V
         Vc = voltage drop across the capacitance, V


                                                VL   VL = IXL




                                      VL - Vc
                                                                         -VL - vc


                                                                          I


                                                w                                   VT = Jv; + (VL - Vc)2
                                                Vc   Vc = IXC
                                                                                               VL - Vc
                                                                                    8 = arctan -
                                                                                                   VR




   ( U ) Series RLC circuit diagram    (b) Phasor diagram; VL >Vc          (c) Voltage-phasor triangle, VL > Vc
                        Fig. 14-1 R, XL,and  Xc  in series; XL > Xc for inductive circuit

The           drop across the resistance is in phase        the current through the resistance (Fig.
14-lb). The voltage across the                     the current through the inductance       90". The
voltage across the capacitance lags the current through the capacitance by 90"(Fig. 14-lb). Since
V, and Vc are exactly 180"out of phase                in exactly                       they are added
algebraically. When X L is greater than Xc, the circuit                 V L is greater than Vc,and I
lags VT (Fig. 14-lc).

                                                         275
276                                        SINGLE-PHASE CIRCUITS                                        [CHAP. 14


    When Xc is greater than XL, the circuit is capacitive. Now VC is greater than VL so that I
leads V T (Fig. 14-2).

                    VL
                    t
                                                  I                                         I , reference

          vc - VL                                     ____)

                                                      vc   - VL

                                                                        YT = Jv; -t (VC - vLp



                                   > VL
                ( U ) Phasor diagram, Vc           (6) Voltage-phasor triangle, Vc > VL
                     Fig. 14-2 R,XL,and Xc in series; XC > XL for capacitive circuit

   When XL > Xc, the voltage-phasor diagram (Fig. 14-lc) shows that the total voltage VT and
phase angle are as follows:
                                           VT =


                                            e = arctan V L - vc
                                                             VR
    When Xc > XL (Fig. 14-2b),
                                           v, =
                                            6 = arctan     (- v~V,     L
                                                                       ')


where VT = applied voltage, V
      VR = voltage drop                     V
      VL = voltage drop                      V
      vc = voltage drop                       V
       6 = phase angle between VT and I, degrees

Example 14.1 In a RLC series ac circuit (Fig. 14-3a), find the applied voltage and phase angle. Draw the
voltage-phasor diagram.

    By Ohm's law,
        VR = IR = Z(4) = 8 V      VL = IXL = Z(19.5) = 39 V  Vc = IXC = Z(12) = 24 V
With VL > Vc,
              V, = VV?,+ (VL - Vc)' = V8' + (39 - 24)' V F T S = 17V
                                                                  =C       Ans.                             (14-1)


               8 = arctan
                            VL - v c                                                                        ( 14-21
                              VR
                            39 - 24           15
                  =.arctan -= arctan
                               8
                                              -
                                              8
                                                 = arctan 1.88 = 61.90         I lags VT        Ans.

For the phasor diagram, see Fig. 14-3b.
CHAP. 141                                   SINGLE-PHASE CIRCUITS                                         277


                            R




        VT                                     19.5 Q
        60 Hz




                            12 Q                                                 VR = 8 V

                   (a) Series RLC circuit                                    (b) Voltage-phasor diagram
                                                         Fig. 14-3


Impedance in Series RLC
       Impedance 2 is equal to the phasor sum of R, X,, and &.                   In Fig. 14-40:
When X , > Xc,                               2 = VR2+ ( X L - Xc)2
In Fig. 14-4b:
When Xc > X L ,                              2 = VR2+ (Xc- XL)2
    It is                  define net reactance X as
                                                  x = x, - xc
Then, from Eqs. (14-5) and (14-6),
                                                 z = VR2+ x 2
for both inductive and capacitive RLC series circuits (Fig. 14-4).




                z = J R +~ (xL- xCl2=                                z = J R ~+ (xc- xL)2= J Z T 2
                           X                                                      X
                8 = arctan -                                         8 = arctan - -
                           R                                                      R

                           (4 & > xc                               (4 xc > XL
                              Fig. 14-4 Series RLC impedance-phasor triangle

Example 14.2 Find the impedance of the                  RLC circuit in Example 14.1
                                        z = v m
                                       X = XL - X c = 19.5 - 12 = 7.5R
Then                                   2 = d 4 2 + (7.5)* = 8.5 R         Ans.
Or, more simply, by Ohm's law,

                                        z=-=-=
                                          vT
                                           1 2
                                               8.5R                       Ans.
278                                                                                                                                         14


Example 14.3                                              XL                                Xc
                                      series resonance                                         = 4 SZ               XL = XC = 19.5 a,
2             VT.
                                                  z = v m                                                                              ( 14-8)
                                                  X = X L - X c = 19.5 - 19.5 = 0




                                                                                                                             flow.


RLC IN PARALLEL
          A                                                     14-5a)

                   so VT = V R = VL = Vc.                                          VT
                       8.                 IT                                             IR, IL,              Ic.
                       IR                                               VT          14-5b).                                      IL
                            VT by                                                  Ic                         VT by 90". IL      Ic
                        180"                                                                            14-5b).         IL > Ic, IT
          VT              14-5c)
                                                                I,
                   .
                   I
                                                                A
    IT        'R

                                                                     + 90"         'R     "T                                  IR     V,,


                                                      1, - Ic                            ____, ------
                                                                                   =
                                                                                                   I, =       41; + ( I , - I c y


    (a)                                                                             >                   (c)                                I, >
                                   Fig. 14-5    XL,                           I L 7 Ic

     If Ic > IL,                                                                          14-6)                       IT               VT so
                                   RLC




                               i
                                                                                                    IR              Y,,



                               IL
                                                   > IL                      (b)                                     > IL
                                   Fig. 14-6    XL,       Xc                 Ic > I L
CHAP. 141                                           SINGLE-PHASE CIRCUITS                                                          279


     When IL > Ic, the circuit
                                                                         +
                                                           = d ~ i(IL - I ~ ) *                                                (14-9)



and when Ic > It, the circuit is capacitive
                                                      IT


                                                       e = arctan (-              v)                                          (14-20)



                                                                                                                              (14-1 1)
                                                       8 = arctan- Ic - IL                                                    ( 14- 12)
                                                                               IR

    In a parallel RLC circuit, when X L > Xc, the capacitive current will be greater than the induc-
tive current and the circuit is capacitive. When Xc > XL,the               current is greater than the
capacitive current and the circuit is inductive. These relationships are opposite to those for a series
RLC circuit.

Impedance in Parallel RLC
    The total impedance ZT of a parallel RLC circuit equals the total voltage VT divided                                   the total
current IT.

                                                                 2, = !
                                                                      !I                                                      ( 14- 23)
                                                                             IT

Example 14.4 A 400-R resistor, a 50-R inductive                                      and a 40-R capacitive             are placed in
parallel across a 120-V ac line (Fig. 14-7a). Find the                                     currents, total current, phase       and
impedance. Draw the
                                         A                       a
                                         7                       w
                  IT                IR                      IL
                                                                                                   IT = 0.671 A
                                                                                                                    Ic - IL = 0.6 A
                                                                                    xc f - m n

              *                          -                                                               IR = 0.3 A
                                                                                                                              VT

                                (a) Parallel RLC circuit                                                  (b) Phasor
                                                                     Fig. 14-7
Step 1.   Find lR,lL,lc.




Step 2.   Find IT, 8. Since XL > Xc (50a > 40R) or Ic > lL (3.0A > 2.4A),                                         is capacitive.
                       IT   = dli   + (IC - I=)*                                                                              (14-1 2 )
                                      +                                    +
                            = d(0.3)2 (3.0 - 2.4)2 = d(0.3)2 (0.6)2 = 0.671 A                         Ans.

                            8 = arctan- Ic - IL                                                                               ( 24- 22)
                                               IR

                                             3 0 - 2.4         06
                              = arctan-                = arctan-   = arctan2 = 63.4"               IT leads VT         Ans.
                                                0.3            0.3
280                                     SINGLE-PHASE CIRCUITS                                     [CHAP. 14


Step 3. Find ZT, using       (14-13)

                                            z,=-=-=
                                                vT
                                                IT
                                                     I2O
                                                    0.671
                                                                  179R         Ans.

Step 4. Draw the phasor diagram             14-7b).

Example 14.5 A parallel RLC circuit in which XL = X c is said to be in parallel resonance. Since X L and
Xc are dependent upon the values of L, C, and frequency f, parallel resonance (that is, X L = X,) can be
obtained by choosing the proper values of L and C for a given frequency. If the values of L and C are
already given, then the frequency can be          XL = Xc. If in Example 14.4,X I . = X c = 40 SZ, find the
values of the same quantities as in that example.
Step 1. Find IR, IL, Ic.




Step 2. Find IT, 8. Since IL and Ic are equal and opposite in phase,
                                                  = Vr;   + (Ic - rL)*                                (14-1 1 )
                                                  = V c = I R = 0.3A          Ans.
         Note that only 0.3 A comes from the source though the reactive branch currents are each 3 A. At
         resonance these currents are equal and opposite so that they cancel each other.

                            8 = arctan- IL - Ic                                                       (14-12)
                                             IT

                                        0
                              = arctan - = arctan 0 = 0'          IT   in phase with VT   Ans.
                                        IT

Step 3. Find Z T , using Eq. (14-13).



Step 4. Draw the phasor diagram.




             Note that a parallel resonant circuit reduces to a resistive circuit (8 = 0'). Because IL and Ic
         cancel each other, the current IT is a minimum so impedance ZT is a maximum.


Z U AND RC BRANCHES IN PARALLEL
   Total current IT for a circuit containing parallel branches of R L and RC (Fig. 14-8) is the
phasor sum of the branch currents I , and 12. A convenient way to find IT is to (1) add algebraically
 CHAP. 141                                 SINGLE-PHASE CIRCUITS                                             28 1


the horizontal                      I , and I2 with respect to the phasor reference VT,(2) add algebraically
the                            of I1and I*, and (3) form a right triangle with these two sums as legs and
calculate                    the hypotenuse ( I T ) and its angle to the




                              Branch 1        Branch 2                               (4
        Fig. 14-8 Parallel RL and RC branches                                   Fig. 14-9a

Example 14.6 An ac circuit     a RL branch parallel to a RC branch (Fig. 14-9a). Find the                current,
phase                   of this
Step 1. For the RL branch, find ZI, 01, and II.

                                                                                 X           8
                      z,=vR:+X:m=1052
                                                                     e1 = arctan 1
                                                                                 RI
                                                                                    = arctan - = 53.1"
                                                                                             6



        1, lags VT in the RL branch                          by 53.1'.   Resolve lIinto
        components with respect to VT (Fig. 14-9b).

        Horizontal                             I1 COS 81 = 6 COS (-53.1') = 3.6 A
        Vertical                                lIsin 8, = 6 sin (-53.1') = -4.8 A

                     3.6 A




                                                                            7.5 A

                                                                                    (a
                                                     Fig. 14-9b,c


Step 2. For      RC branch,         Z2,02, and 12.
282                                        SINGLE-PHASE CIRCUITS                                           [CHAP. 14


        I 2 leads VT in the RC branch                           by 45". Resolve I2 into its horizontal
        components with respect to V T (Fig. 14-9c).
        Horizontal                                    12COS e2 = 10.6 COS 450 = 7.5 A
        Vertical                                      I2 sin O2 = 10.6 sin 45" = 7.5 A
Step 3. Find IT. IT is the phasor sum of II and 12. Add the                                     of II and 12.
                                                      3.6 + 7.5 = 11.1 A
        Add the                          of II and 12.
                                                      -4.8 + 7.5 = 2.7 A
        The resultant            is IT (Fig. 169d).

        IT   = d(1 1.1)2 + (2.7)' = dBG = 11.4 A              Ans. 0        -       4       .         8   2.7    +
                                                                                                            ; A = 7.5 A
                        27                                                                                      VT
         8 = arctan-          = arctan0.243 = 13.7"        Ans.      I
                       11.1                                             11.1 A = 3.6 A + 7.5 A

         z,=-=
             vT- - 11.4
                    6o - 5.260               Ans.                                        Fig. 14-9d
             IT

        Note      IT leads VT (Fig. 14-9d) so that                 is leading and

POWER AND POWER FACTOR
    The instantaneous power p is the product of the current i and the voltage U at that instant of
time t.
                                                       p = ui                                                   (14-14)
When U and i are both positive or both negative,      product p is positive. Therefore, power
being expended throughout the cycle (Fig. 14-10). If U is negative         i is positive
part of the cycle       14-11), or if i is negative while U is positive,           product will be
negative. This                   is not          for work; it is power returned to the line.

                     Power
                                                                                        Power
CHAP. 141                                    SINGLE-PHASE CIRCUITS                                                     283


     The product of the voltage across the resistance and the current through the resistance is
always positive and is called real power. Real power can be considered as resistive power that is
dissipated as heat. Since the voltage across a reactance is always 90" out of phase with the cur-
rent through the reactance, the product p x = uxix is always negative. This product is called reactive
power and is due to the reactance of a circuit. Similarly, the product of the line voltage and the
line current is known as apparent power.
     Real power, reactive power, and apparent power can be represented by a right triangle (Fig.
 14-12a). From this triangle the power formulas are:
                                       Real power P = VRIR= V I cos 8, W                                          ( 24- 25)
or                                                    P = 12R,W                                                   (14-16)
                                                         V2
                                                      P =R'w                                                      (24-17)

                                   Reactive power Q = VxIx = VI sin 8, VAR                                        (14-18).
                                   Apparent power S = VI, VA                                                      (14- 19)
    With line voltage V as reference phasor, in an inductive circuit, S lags P (Fig. 14-12b); while in a
capacitive circuit, S leads P (Fig. 14-12c).



                                                                  fl              D




                                                                                                 Q lagging
                                                                                                              V, reference




                                         Reactive power
                                       Q = %Ix = VI sine                  ( b ) Lagging PF (e.g., induction
                                     (Power returned to line)


       P = VRIR = VI cos 8

             Real power
             True
            Active
      (Power available for work)
                    (U)   General formulas
                                                                            ( c ) Leading PF (e.g., synchronous
                                                                                  motor, bank of capacitors)
                                              Fig. 14-12 Power triangle



     The ratio of real power to apparent power, called the power factor (PF), is
                                       real power = VRIR- VI c o s 8 = cos 8
                             PF =                                                                                ( 14-20)
                                     apparent power  Vf     VI
Also from Eq. (14-19,
                                                                P
                                                 PF = c o s 8 = -                                                (24-22)
                                                                VI
    The cos 8 of a circuit is the power factor, PF, of the circuit. The power factor determines
what portion of the apparent power is real power and can vary from 1 when the phase angle 8 is 0",
to 0 when 8 is 90". When 8 = 0", P = VI, the formula for voltage and current of a circuit in
phase. When 8 = 90", P = VI x 0 = 0, indicating that no power is being expended or consumed.
284                                      SINGLE-PHASE CIRCUITS                                     [CHAP. 14


     A circuit in which the current lags the voltage (i.e., an inductive         is said to have a lagging P F
(Fig. 14-12b); a circuit in which the current leads      voltage (i.e., a capacitive            said to have a
leading PF.
     Power factor is              as a decimal or as a percentage. A power factor of 0.7 is
as a power factor of 70 percent. At unity (PF = 1, or 100 percent),               current and voltage are in
phase. A 70 percent PF means that the                       only 70 percent of the                        It is
desirable to design           that have a high P F since                    make the most efficient use of
the current delivered to the load.
     When we state that a motor draws 10 kVA ( I kVA = loo0 VA) from a power                    we recognize
that      is the apparent power taken by the                                           refers to the apparent
power.                when we say a motor             10 kW, we mean that the                           by the
motor is 10kW.

Example 14.7 A current of 7 A lags a voltage of 220 V by 30". What is the P F and                       by the
load?
                                        PF = COS e                                                     (14-20)
                                           = COS 30" = 0.866         Ans.
                                   P = VICOS~                                                          (14-15)
                                       = 220(7)(0.866) = 1334 W           Ans.

Example 14.8 A motor            at 240 V, 8 A draws 1536 W at full load. What is its PF?
   Use Eq. (14-21).

                           p F = - = - = 1536     0.8   or      80%             Ans.
                                   V l 240(8)

Example 14.9 In the RLC series ac circuit          in Fig. 14-3a, the line current of 2 A lags the applied
voltage of 17 V by 61.9". Find PF, P, Q, and S. Draw the
                             PF = COS e                                                                (14-20)
                                = cos 61.9" = 0.471      or       47.1% lagging         Ans.
                                       P = V l cos8                                                    (14-15)
                                         = 17(2)(0.471) = 16W          Ans.
or                                        P = 12R                                                      (14-16)
                                            = 2'(4) = 16W          Ans.
                       Q = V l sin 8                                                                    ( 14- 18)
                         = 17(2)(sin 61.9") = 17(2)(0.882) = 30 VAR lagging            Ans.
                                         s = VI                                                         (14-19)
                                           = 17(2) = 34VA           Ans.



                                                                     ,reference



                                  S =                                 lagging          AnS.
CHAP. 141                               SINGLE-PHASE CIRCUITS                                                285


Power Factor Correction
    In order to make the most efficient use of the current delivered to a load, we desire a high P F or
a PF that approaches unity. A low P F is generally             to the large                    such as
 induction                 take a lagging current. In order to correct this low PF, it is necessary
to bring the current as closely in phase with the          as possible. That is, the phase         8 is
made as small as possible.          is usually          placing a capacitive        which produces a
leading current, in parallel
Example 14.10 With the           of a phasor diagram show how the P F produced by an                         be
corrected to unity.
    We show                               (Fig. 14-13a) and its current-phasor diagram (Fig. 14-13b). Current I
lags the          V by angle 8 where P F = cos 8 = 0.7. We desire                    P F to 1.0. We do this by
connecting a capacitor across the            (Fig. 14-14a). If the capacitor current is          to the
current, the two cancel                    14-14b). The       current I, is now less     its original value  in
phase with V so that P F = cos 0" = 1. Notice              current through           I remains
reactive part of the current to the        is being supplied by the             The line now has only to supply
the             of current for the                of the

                                              Equivalent
                                              motor



                                               PF = 0.7 lagging




                         (a) Circuit                                             (b) Current-phasor
                     Fig. 14-13 An induction motor represented by a series RL circuit




                                                                         T
                                                                             ,z = z,
                                                                                  r, = r,
                                                     PF    1.o                                           V




                         (a) Circuit                                       (b) Current-phasor
                          Fig. 14-14 Induction         with parallel capacitor


Example 14.11 An induction                      1.5 kW and 7.5 A from a 220-V 60-Hz line. What must be the
capacitance of a capacitor in parallel in order                 P F to unity (Fig. 14-15a)?
Step 1. Find         angle OM and then the reactive power QM of the
                                             P, = VMIMcoseM                                            (14-15)

        from which                        COS 8,   =-
                                                    PM
                                                       =-    - 0.909
                                                        l5Oo -
                                                    VMIM     220(7.5)
                                              OM = arccos0.909 = 24.6"
286                                           SINGLE-PHASECIRCUITS                                   [CHAP. 14


        From                        triangle (Fig. 14-156),
                                             QM = 1500 tan 24.6" = 687 VAR lagging

        0
                            A

                            w




                                                                        4
                                                  IC
                                IM = 7.5 A                                PM = 1500 w

                                               ;;C=?                                           VARlagging
      220 v
      60 Hz


                                PM = 1.5 kW
        0                   -
        (U)   Adding parallel capacitor to raise PF to 1
                                                           Fig. 14-15

Step 2. Find     current Ic drawn by the capacitor. For the current to have PF = 1, the          citor          h re
        a Qc = 687 VAR leading to balance          QM = 687 VAR lagging. Since                           in a
        capacitor            apparent power,
                                                       Q c = Sc = VcIc                                     (14-18)
                                                       Ic = -
                                                            sc = -
                                                                 687 = 3.12A
                                                              vc    220
Step 3. Find the reactance of the capacitor.



Step 4. Find the capacitance of the capacitor, using Eq. (13-9).




Example 14.12 An induction                 takes 15 kVA at 440 V and 75 percent P F lagging. What must be the PF
of 10-kVA capacitive                         in parallel in order to raise the total PF to unity?
Step 1. Find the reactive             of the induction             QM.
                                      PF, = COS e = 0.75
                                         8 = arccos 0.75 = 41.4'
                                       QM = VI sin 8 = 15 sin 41.4' = 9.92 kVAR lagging




                                                        Induction motor

Step 2. Find the                    P F for the capacitive       To have a circuit with P F = I, the
        reactive                                          9.92 kVAR lagging, the leading PF load must also
        use 9.92 kVAR. From the power triangle for leading load,
CHAP. 141                                      SINGLE-PHASE CIRCUITS                                 287




                                   8 = arcsin0.992 = 82.7"
                                  PF = cos 8 = cos 82.7" = 0.127 = 12.7% leading           Ans.




                                                      PS
                                                       Synchronous motor




                                                 Solved Problems
14.1   For the RLC series circuit (Fig. 14-16a), find X,, Xc, 2, I , VR, VL, Vc, P, and PF. Draw the
       voltage-phasor diagram.
                              R




 VT = 30 V                                         2.55 m H
   2 kHz




                            1.5'9 -pF

                  (U)   Series RLC circuit
                                                         Fig. 14-16


       Step 1.   Find XL, Xc,and then 2.
                                             XL = 6.28fL                                          ( 12-4)
                                                = 6.28(2 x 103)(2.55x 10-3) = 3 2 f l    Ans.
                                                      0.159
                                              xc = -                                              ( 13-8)
                                                       fC
                                                  -
                                                  -           0.159
                                                                              = 50fl    Ans.
                                                      (2 x lO3)(l.59 x 10-9
                                                      X = XL - Xc = 32 - 50 = -18 fl
                 Minus indicates                                (Xc> XL).
                                        2 = VR2+ X 2= V24* + (-18)* = 30n                 Ans.
                                                        X
                                         8 = arctan - = arctan                           Ans.
                                                        R
       Step 2. Find I, VR, VL, and Vc by Ohm's law.
288                                          SINGLE-PHASE CIRCUITS                                            [CHAP. 14


                                                    VR   = IR = l(24) = 24V          Ans.
                                                VL = IXL = l(32) = 32V               Ans.
                                                Vc = IXc = l(50) = 50V               Ans.
       Step 3. Find P and PF.
                                                P = 12R = 12(24) = 24W               Ans.
                                         P F = cos 8 = cos (-36.9") = 0.8 leading             Ans.
        Step 4. Draw the voltage-phasor diagram (see Fig. 14-16b).


14.2   The output signal of a rectifier is 200 V at 120 Hz. It is fed to a filter circuit of a
       30-H filter choke             a 20-pF capacitor (Fig. 14-17). How much 120-Hz voltage
       appears across the                                of the filter is to reduce
       voltage across the
       Step 1. Find XL,Xc,and 2.
                                         XL = 6.28 fL = 6.28(120)(30) = 22 600 R


                 X = XL - X , = 22 600 - 66 = 22 542 42 = 22 500 42 (rounded to three significant figures)
                                                               Z=VXTF
                    Since X   * R,
                                                             Z = X = 2250042
        Step 2. Find I.
                                                               = - - 200 - 8.89mA
                                                         I = - vT
                                                               Z     22500
        Step 3. Find Vc.
                                         Vc = IXC = (8.89 x 10-3)(66) = 0.587V                Ans.
        This is a                             only 0.587 V out of a           of 200 V ac gets             to the output
        circuit.


       r--------1


v, = 200 v
  120 Hz
                                     C -20

                                       T
                                              pF         I
                                              vc = ? output
                                                         i
                                                                               4 I

                                                                                            25 0       15 n
                                                                                                           x-   ~
                                                                                                                    a


                                                                                                                    .o Q



              Fig. 14-17 Filter                                                               Fig. 14-18

14.3   Find the                         current of a RLC series                                    a number of series
       resistances                      (Fig. 14-18).
             Add the           of similar circuit
        Resistance:                           R T = R t + R z = 10+ 1 5 = 2 5 R
CHAP. 141                              SINGLE-PHASE CIRCUITS                                             289


       Capacitance:                    Xc,T = XcI + Xc2 = 20 + 10 = 30R
       Inductance:                     XL.T = XLI + XLZ = 30 + 25 = 55R
       Net reactance:                  XT = XL, T - X c , T = 55 - 30 = 25 R
                                Z = dR;+ X: = d 2 5 2 + 252 = 35.4R                     Ans.

                                        I = - vT
                                               = - = loo        2.82A      Ans.
                                               z 35.4
14.4   A 30-0 resistor, a 40-52inductive             and a 6 0 4 capacitive         are connected
       in parallel across a 120-V 60-Hz ac line (Fig. 14-19a). Find IT, 0, ZT,and P. Is the
       inductive or capacitive? Draw the                   diagram.




                                 (4
                                                   Fig. 14-19

       Step 1. Find IT and 8.



               Since It > Ic, the circuit is inductive.
                                             IT   = d1;   + -
                                                            (IL     IC)2                               ( 14-9)
                                                  = d42   + I' = 4.12A        Ans.

                                              8 = arctan   (- 9)                                       (1410)

                                                  = arctan (- f) = - 14" Ans.

       Step 2. Find ZT.

                                           z,=-=--
                                               vT  12* - 29.1 A
                                               IT 4.12
                                                                              Ans.

       Step 3. Find P.
                                                              14") = 480 w
                                 P = vT1T cos 8 = 120(4.12)(~0~                                Ans.
               or                         P = 1 i R = 42(30) = 480 W              Ans.
       Step 4. Draw the current-phasor diagram (see Fig. 14-19b). IT lags VT by 14".


14.5   An ac circuit             a number of parallel resistances and reactances (Fig. 14-20). This
       circuit has more components          Fig. 14-19a (Prob. 14.4). Verify that it has the
       value of I T , 27, and 8.
                           120 =                                                          120
                      IRI= -     2A               I,, = -
                                                        120 - 1.5 A               Icl   =-=       1A
                           60                           80                                120
                           120                          120
                         2 -= 2 A
                      1 ~=                        IL2 =     = 1.5 A               Ic* = -
                                                                                        120 = 1 A
                           60                           80                              120
290                                   SINGLE-PHASE CIRCUITS                                                [CHAP. 14


       The                 branch current is 4 A;                branch current, 3 A; and total
       branch current, 2 A. These current values are the same, respectively, in Fig. 14-19a. Therefore, IT,
       ZT, and 8 have




                                                  Fig. 14-20

14.6   An induction          of 6rR. resistance        8rzZ inductive             is in parallel with a
       synchronous         of 8 rR. resistance and 15 s1 capacitive reactance (Fig. 14-21a). Find the
       total current drain      a 150-V 60-Hz source, phase                              power factor,
       and power drawn by the                Find the                     current, and         angle for
       each
                                          Branch 1                 Branch 2                  Branch 3




          V , = 150V
             60 Hz




                                                                     Induction           Synchronous
                                                                       motor                   motor
                                                                    (RL series)              (RC series)

                                   (a) Three-branch parallel R L C circuit



                                              9A




                                                                                    I3 = 8




                                                                                               4.15 A

                                                       (d                                               (4
                                             23.2 A
                                                                                    Vr
                                                                              -4.22 A



                                                  Fig. 14-21
CHAP. 141                                  SINGLE-PHASECIRCUITS                                                     29 1


       Step 1. Find Z1,11,and O1 for branch 1.



                                                 e1 = 0"      since I1is in phase         VT

                 Calculate                                           of current with respect to VT (Fig. 14-21b).
                 Horizontal                 10 A
                 Vertical                0A

       Step 2. Find Z2,12,and O2 for branch 2.

                               2 2 =   VRf+ X z 2 = m2
                                                     = 10R                          r , = b150
                                                                                           =--1-5 A
                                                                                         2 2      10
                                                                              8
                                                   O2 = arctan   xL2
                                                                  RZ
                                                                     = arctan - = 53.1"
                                                                              6
                 I2 lags VT in RL series             by 53.1" (Fig. 14-21c).
                 Horizontal                                15 COS (-53.1") = 9 A
                 Vertical                                  15 sin (-53.1") = -12 A

       Step 3. Find Z3, 13,and O3 for branch 3.




                                           83 =    arctan   (-2) (-F)
                                                                    = arctan           = -61.9"

                 I3 leads VT in RC series             by 61.9" (Fig. 14-21d).
                 Horizontal                                    8.82 cos 61.9" = 4.15 A
                 Vertical                                      8.82 sin 61.9" = 7.78 A

       Step 4. Find LT, 8, ZT, PF, and P of the             IT is                          sum of 11, 12, and 13. The
               horizontal              IT is the sum of the horizontal                        of 11,12,and 13,and
               vertical          of IT is the sum of their
                                       Horizontal                of IT = 10 + 9 + 14.15 = 23.2 A
                                         Vertical                of IT = 0 - 12 + 7.78 = -4.22A
                 The                       IT(Fig. 14-21e).
                                           IT   = V(23.2)2    + (-4.22)2 = 23.6A           Ans.

                                                8 = arctan   (- g )= - 10.3"             Ans.


                                                 zT=vT.=--
                                                    IT 23.6
                                                        150 - 6.36n                   Ans.

                              P F = cos 8 = cos (- 10.3") = 0.984 lagging            (IT lags VT)        Ans.
                                       P = VTIT CO'se = 150(23.6)(0.984) = 3480 w                 Ans.


14.7   What value of resistance dissipates 800 W of ac power with 5 A rms current?
           Use                                               P = IZR
292                                      SINGLE-PH ASE                                                               [CHAP. 14


14.8   An ac motor               at 75 percent P F draws 8 A from a 110-V ac line.                                 the apparent
       and
           Apparent                         s = VI                                                                      (14-19)
                                               = llO(8) = 880VA                   Ans.
           Real (true)                    P = VI COS e                                                                  (14-15)
                                         PF = COS e = 0.75
                                          P = 110(8)(0.75) = 660 W                      Ans.


14.9   A motor               at 85 percent P F draws 300 W from a 120-V line. What is the current
       drawn?
                                      P = VICOS~                                                                        (14-15)
       from which
                                      I = - = -P-              300   - 2.94A                 Ans.
                                           v COS e           nqo.85)


14.10 A 10-kVA induction                        at 80 percent lagging P F and a 5-kVA synchronous
      motor                at 70 percent leading P F are connected in parallel across a 220-V 60-Hz
      power        (Fig. 14-22a). Find the                    PT, total               QT, total
      factor ( P n T , total apparent power ST,and        current IT.

                                                         A                              B

                                 IT
                                                             7
                                                      Induction
                                                                                        1
                                                                                Synchronous
                                                       motor                       motor




                                                                 SA = 10 kVA                Se = 5 kVA
                                                                 (PF), = 0.80 lagging       (PF)B = 0.70 leading
                                                             6
                                                                 (0)

                                                       Fig. l422a


           The approach to this problem with two         in parallel       to solve the power          for the
       induction             the power         for the synchronous               finally to combine by phasor
       addition                 of the                      to arrive at the         triangle of the combined
       motors.

       Step 1. Find the power                       of the
                 S A = VI = 10 kVA, given
                 PA = VI COS      = lO(0.80) = 8 kW
                 OA = arccos0.8 = 36.9”
                 QA   = VI sin OA = lqsin 36.9”) = lO(0.6) = 6 kVAR lagging because
               The induction           power triangle             as shown in Fig. 14-22b.
CHAP. 141                              SINGLE-PHASE CIRCUITS                                                293


   P, = 8 kW
                                                            3.57 kVAR leading
                      = 6 kVAR lagging
                                                                   P, = 11.5 kW
                             SE
SA =                                                                                     QT = 2.43 kVAR lagging


                                                Fig. 14=22b,c, d

       Step 2. Find power                 of the
                                                  SE = Vl = 5 kVA, given
                                              PB = Vl COS 8s = 5(0.70) = 3.5 kW
                                                   OS = arccosO.7 = 45.6"
               QB = Vl sin OB = 5(sin 45.6") = 5(0.71) = 3.57 kVAR leading because              is capacitive
               The                       power triangle    as shown in Fig. 14-22c.
       Step 3. Find power relations of combined motors. If the power drawn by one      is not in phase
               with the              by another        power must be added by phasor
               fore, PT and QT are                of PA,PE and QA, QB, respectively. STis
                phasor PT and QT.
                                      PT = P A + PB = 8 + 3.5 = 11.5kW                Ans.
                                         QT   = QA - QB = 6 - 3.57         (QA > QB)
                                              = 2.43 kVAR lagging          Ans.
                                                               2 43
                                    8T = arctan - = arctan - = arctan 0.21 1 = 1 1 .9"
                                                   QT
                                                   PT          11.5
                               (PF)T = cos 8T = cos 11.9" = 0.979 = 97.9% lagging            Ans.
                               ST = VP; + Q$ = V(11.5)2 + (2.43)' = 11.8kVA                  Ans.
               The combined motors' power triangle is as shown in Fig. 14-22d. Notice that the                  of
               the                   has raised the P F from 0.80 to 0.979.

14.11 An induction motor takes 7.2 kW at 80 percent P F lagging from a 220-V 6 e H z power line (Fig.
      14-23). Find the capacitance of a capacitor placed across the motor terminals in order to
       increase the PF to 1.

       Step 1. Find S and Q of the

                       s = P-F= -0.8
                                 7-* 2 - 9 k V A        PF = COS e = 0.8          8 = arccos0.8 = 36.9"

                                      Q = P tan 8 = 7.2 tan 36.9" = 5.4 kVAR lagging
       Step 2. Find the              by the        Ic. To balance 5.4 kVAR lagging, it is necessary
               the           take 5.4kVAR leading. Since                in a pure                   its
               apparent
                                                   Sc = VCIC = 5.4kVA



       Step 3. Find the              the capacitor.
294                                            SINGLE-PHASE CIRCUITS                                                  [CHAP. 14


           Step 4. Find the capacitance of the

                                           c = -0*159
                                                 - ---
                                                fXc
                                                       0*159 - 296 x
                                                      60(8.94)
                                                                                   = 296pF               Ans.


                                                                                           P = 5 k W
              I
                                                          I

                                                                                          0
                                                     IM                                        53.1'
            --A
            LLU
                  .,
                  v
                                                              Induction motor
           60 Hz                                                                                                Q lagging
                                                              P = 7.2 kW


              v-                  -
                                        Fig. 14-23                                                     Fig. 14-24


14.12 An inductive load draws 5 kW at 60 percent P F lagging from a 220-V line.                                         Find the
           kilovoltampere               of the capacitor               to raise the total P F unity.
           Step 1. Find the                        of the inductive load (see Fig. 14-24).

                            s = P-F= -0.6=        8.33kVA           PF = COS e = 0.6           8 = arccos 0.6 = 53.1"

                                                     Q = 8.33 sin 53.1" = 6.66 kVAR lagging
           Step 2. Find the kilovoltampere      of the                                to raise    P F to 1, the
                   must provide 6.66 kVAR of reactive                   leading. Since the apparent power in a capacitor
                   is
                                                          Sc = Qc = 6.66kVA              Am.


14.13 A plant load draws 2000kVA                         a 240-V line at a P F of 0.7 lagging. Calculate the
           kilovoltamperage                  of a capacitor bank in parallel    the plant for the overall P F to
           be 0.9 lagging.
                  We use                of power triangles.
                                           PF = COS e = 0.7            8 = arccos0.7 = 45.6"
           Real power of the
                                                  P = vr COS e = 2000(0.7) = i m k w
           Reactive power of the
                                         Q = VI sin 8 = 2000 sin 45.6" = 1430 kVAR lagging
           Therefore, the                    of the original plant is as shown in Fig. 14-251.




      VI
                                      = 1430 kVAR lagging
                                                                         7  P = 1400 kW




                                                                                   \           I
                                                                                                   = 677 kVAR lagging




                                                                                    *\     I       QCAp = 753 kVAR leading




                  (a) Original plant, P F = 0.7                             (b) Plant with capacitors added, PF = 0.9
                                           Fig. 14-25 Method of power triangles
CHAP. 141                                  SINGLE-PHASE CIRCUITS                                                 295


             We add a parallel capacitor              the power factor of the                0.9 lagging. The
      real                  the same. We calculate the new Q of the
         (PF)~= COS e = 0.9              e1 = arcc0~0.9= 25.80        QI = 1400 tan 25.8" = 677 kVAR lagging
      The                           of a circuit            to the          sum of the                      of each
      branch. Therefore,
                        Q of the                   = original Q of the plant - new Q of the plant
                                                   = 1430   - 677 = 753 kVAR leading
      Thus              S of the capacitor         = 753 kVA         Ans.
      The power               with the                        (Fig. 14-25b) shows how the           Q of the
      capacitors                               Q to 677 kVAR lagging to        an improved P F of 0.9.

14.14 A series R L combination in an ac circuit has R = 10 SZ and X L = 12                 a. A capacitor is con-
      nected across    combination (Fig. 1426a). What should be the                                 of the capaci-
      tor if the             is to have a P F of unity?




             VF
                                                            xc = ?




                                    (a)
                                                     Fig. 14-26


      Step 1. Find I,.

                       2, = VR2+ X L = d102        + 122 = 15.6il                  XL = arctan-12 = 50.2"
                                                                         8 = arctan-
                                                                                       R           10

                  Assume VT = 156 V. This        is arbitrary        is conveniently used because
                  of the RL branch 15.6l-l. Then


                  The phasor diagram is as shown in Fig. 14-26b.


     Step 2. Find 12. For PF = 1, IT must be in phase with VT. IT is the                    sum of I , and 12. The
             current in the        I2 (leading V?-by WO), must                                         of I, in order
             for IT to be in phase     VT (Fig. 14266). Therefore,
                                                     Iz = 10 sin 50.2" = 7.68 A
     Step 3.      Find Xc.
296                                         SINGLE-PHASE CIRCUITS                                           [CHAP. 14


                                       Supplementary Problems
14.15    In a series         R = 12R, X L = 7 0 , and XC = 2R. Find the                         angle of
         circuit and the line current when the ac voltage is 110 V. Also find all voltage drops
         voltage-phasor
         Ans. Z = 1 3 0 , 8 = 22.6'; I = 8.46A(lagging); VR = 101.5 V; VL = 59.2V; Vc = 16.9V;
         diagram: Fig. 14-27.

                    V , = 59.2 V                                   r---------                   7



                                                    From       V , = 250 V                               23 pP
                                                   rectifier      120 Hz

                    Vc = 16.9 V
                                                               -                                                 c

        Fig. 1427 Phasor diagram                                                 Fig. 14-28


14.16     In a series       R = 6 R, X L = 4 0,and XC = 12 R. Find 2, 8, I, VR,VL, Vc, and P when the line
          voltage is 115 V.
          Ans. Z = 10R; 8 = -53.1"; I = 11.5A(leading); VR = 69V; VL = 46V; V, = 138V; p = 794w

14.17     A 130-V 200-Hz power                       a 10-kR resistor, a 0.05-pF        and a 10-H
          coil in series. Find XL, Xc,2,8, I, and P.
          Ans. X L = 12560R; Xc = 15900R; Z = 10540R; 8 = -18.5'; I = 12.3 mA(1eading); P = 1.51 W

14.18     A rectifier delivers 250 V at 120 Hz a filter circuit          of a filter choke coil having 25 H inductance
          and 400 R resistance,       a 25-pF capacitor       14-28). Find the             of the                   of
          the             the impedance the circuit, the current, and                  of the 120-Hz voltage that will
          appear
          Ans. X, = 18 840 R; XC = 53 0;Z = 18 790 R. For practical                                   is predominantly
          inductive (2 = X L ) . I = 13.3mA; Vc = 0.7V. Note             only 0.7V         of a total of 250V of the
           120-Hz ac reaches       output.

14.19     A series circuit       R = 3000, Xcl = 300R, Xcz = 5000, XL1= 400fl,and X L z = 800R, all in
          series with an applied voltage VT of 400 V. Calculate 2, I, and 8.
          Ans. 2 = 500Q; I = 0.8A(lagging); 8 = 53.1"

14.20     A 10-H coil     a 0.75-kF capacitor    in series with a variable                    What must be the value of
          the          in order to draw 0.4 A from a 120-V 60-Hz line?
          A ~ s .R = 186R; ( X L - X c = 23551)

14.21 A series                     ( X L = X c ) has a 0.1-H inductance, a 1.013-pF         a 5-0 resistor
          connected across a SO-V 500-Hz supply           Find the
          phase       current, and          across each       of the         Draw the
          A ~ S .xr.= 314R; xC = 314R; z = 5 ~ e ;= 00; r = I O A ; vR= 5 0 v ; vL = 3 1 4 0 ~ ;
                 Vc = 3140V;                      Fig. 14-29.


                                                                   VL - Vc = 0

                                          2 VR = 5 0 V                   I

                                             Fig. 1429 Phasor diagram
CHAP. 141                                       SINGLE-PHASE CIRCUITS                                              2!n


14.22   Fill in the indicated values for                RLC circuit.
                                                                                                             Circuit
          VT,V      6"    I,A         R,n       XL,52    Xc,52   Z,52          VL, v        vc, v     p,w    Type

            ?       ?        1          3         8         4      ?     ?       ?           ?         ?
          104       ?         ?        12          2        7      ?     ?       ?           ?         ?
          110       ?                  22         18       18      ?     ?       ?           ?
            ?      45"        ?        15         30       ?       ?     30      ?           ?         ?
            14.1    ?        0.1        ?        150      250      ?     ?       ?           ?         ?

        Ans.
                                                                                                       Circuit
                                                                                                       Type
                                                                                                     Inductive
                                                                                                     Capacitive
                                                                                                     Resonant
                                                                                                     Inductive
                                                                                                     Capacitive

14.23   A 30-n resistor, 15-52 inductive reactance, and a 12-52 capacitive reactance   connected in parallel
        across 120-V 60-Hz line. Find (a) the phasor branch currents, (b) total         and phase angle, ( c )
        impedance, and ( d ) power drawn by the        and (e) draw the current-phasor diagram.
        Ans. (a) IR = 4A; I L = 8A; Ic = lOA; (b) I T = 4.47A (leading); 8 = 26.6"; ( c ) ZT = 26.811;
        ( d ) P = 480 W; (e) phasor diagram: Fig. 14-30

                                   I , = 10 A




                                                                                       r, = 0.63 A
                                                                                       A
                                                                        IR=2A
                                                                                                 \
                                                                                                 w           v,
                                                                                        I , - I , = 0.43 A
                                                                                        I



                                                                                       V
                                  v                                                    I , = 1.06 A
                                   I,=8A

            Fig. 14-30 Phasor diagram                                   Fig. 14-31 Phasor diagram

14.24   A 100-52 resistor,      3-mH coil, and a 0.05-pF capacitor         in parallel across 200-V 10-kHz ac
        source. Find ( a ) the            of the coil and capacitor, (6) phasor current drawn by each        (c)
        total current, ( d ) impedance and phase angle, and (e) power drawn by the              and (f) draw the
        phasor diagram.
        Ans. (a) XL = 188 52; Xc = 3180; (b) I R = 2A; I L = 1.06 A; Ic = 0.63 A; (c) IT = 2.05 A
        (lagging); ( d ) ZT = 97.6 0;8 = - 12.1"; (e) P = 400 W; (f) phasor diagram: Fig. 14-31

14.25   With 420 mV applied, an ac circuit has the following parallel branches: R I = 100 R; R2 = 175 0;
        XLI= 6052; XLZ= 42052; XC = 7052. Calculate IT, ZT, and 6.
        Ans. IT = 6.9mA(lagging); ZT = 60.9n, 6 = -16.9"
298                                         SINGLE-PHASE CIRCUITS                                                 [CHAP. 14


14.26   Repeat          14.23 but substitute a 1542 capacitive             for the given 1 2 4 capacitive
        reactance. Because XL = X c = 15 R, we have now a parallel                      A parallel
        circuit     a maximum impedance       a minimum current at the resonant
        Ans. (a) IR = 4 A; IL = 8 A; Ic = 8 A; (b) IT = 4 A (compare          Prob. 14.23); 8 = 0";
                (c) ZT = 30 R (compare             14.23); (d) P = 480 W; (e) phasor             Fig. 14-32
                                                                      IL - I , = 0
                                                 IR = 4 A
                                            0                    v              T
                                                                                '
                                                                 IT
                                                Fig. 1432 Phasor diagram

14.27   Find the indicated          for a RLC parallel circuit.

                                                                                                           Circuit
                    V,V      R,R     XL,R           Xc,O    1R        IL   Ic       IT   ZT     8   P, W   Type

                    110      27.5      22            55     ?         ?    ?        ?    ?     ?    ?         ?
                     90      45        40            30     ?         ?    ?        ?    ?     ?    ?         ?
                     9o      45        40                   ?         ?    ?        ?    ?     ?    ?         ?




14.28   Find IT, 8, PF, and ZT of an ac circuit with a RL branch in parallel to a RC branch (Fig. 14-33).
        Ans. IT = 7.82A; 8 = -33.5"; P F = 0.834 lagging; Z = 3 . 0 7 0



                                                n                                                                    n



                                                13 Cl                                                                12 n




                   Fig. 1433                                                                 Fig. 14-34

14.29   For the                      IT, 8, Z T , PF, and P (Fig. 14-34).
        Ans. IT = 44.8 A; 8 = 53"; ZT = 14.5 n; P F = 0.602 leading; P = 17 530 W

14.30 With 420 mV applied,    ac circuit   the five following parallel branches: R I = 100 R; R , = 175 R;
        XL1= 60Q; X L 2 = 420R; and XC = 70R. Find IT, 8, and ZT.
        Ans. IT = 6.90mA(lagging); 8 = -16.9"; Z T = 6 0 . 9 0
14.31 Find the power factor of a washing-machine motor if it draws 4 A and 420 W from a 110-V ac line.
        Ans. P F = 0.955, or 95.5%

14.32 Find the P F of a refrigerator             if it draws 300 W and 3.5 A from a 120-V ac line.
        Ans. P F = 71.4%
CHAP. 141                                SINGLE-PHASE CIRCUITS                                                299


14.33   The lights and motors in a shop draw 20 kW of power. The P F of the entire load 60 percent.       Find the
        number of kilovoltamperes of power              to the load. Ans. S = 33.3 kVA
14.34   A 50-V 60-Hzpower supply     connected across a RLC series ac circuit with R = 3 R , XL = 6 0 ,
        and Xc = 2 R. Find the apparent power,    power, reactive power, and power factor; and draw the
        power triangle.
        Ans. S = 500 VA; P = 300 W; Q = 400 VAR lagging; P F = 0.6, power triangle:       14.35
                                       P = 300w



                                                          Q = 400VAR lagging




                                           Fig. 14-35 Power triangle
14.35   A current of 8 A lags a voltage 250 V by 30'. What is the power factor and the real power taken by
        the load?     Ans. P F = 0.866 lagging; P = 1732 W
14.36   A motor operating at an 85 percent P F draws 300 W from a 120-V line.              is the current drawn?
        Ans. 1 = 2.94A
14.37   A 220-V line delivers 15 kVA to a load at 80 percent P F lagging. Find the PF of a 12-kVA
        synchronous motor in parallel to raise the P F to 100 percent.
        Ans. P F = 66.1 % leading
14.38   A bank of motors draws 30kW at 75 percent P F lagging from a 440-V 60-Hz                               the
        kilovoltamperage and the capacitance of a capacitor placed across the motor terminals if it is to raise
        the total P F to 1.0.    Ans. S = 26.5 kVA; C = 363 pF
14.39   A motor draws 2 kW          10 A from a 220-V 60-Hzline.         the voltamperage and the capacitance of
        a capacitor in parallel that will raise the total P F to 1. Ans. S = 916 VA; C = 50 pF
14.40   A 220-V 20-A induction motor draws 3 kW of power. A 4-kVA capacitive load                   in parallel to
        adjust the P F to unity. What           be the PF of the capacitive load?    Ans. P F = 59.3%
14.41 A plant load draws 2000kVA from a 240-V line at a P F of 0.7 lagging.              the kilovoltamperage
        required of a capacitor bank in parallel            the plant for the overall P F to be 0.9 leading.
        Ans. 2107kVA
14.42   A series RL branch in an ac circuit has R = 8 R and XL = 10 R. A capacitor is connected in parallel
        across the branch. What              the reactance of the capacitor if the unit is to have a P F of unity?
        A ~ s . X c = 16.4R
14.43   Find IT, 8, ZT,PF, and P for the circuit shown (Fig. 14-36).
        Ans. IT = 4.49A; 8 = -20.9'; ZT = 22.30; P F = 0.9341agging; P = 419 W




                                                   Fig. 14-36
                                                                          Chapter 15
                  Alternating-Current Generators
                            and Motors
ALTERNATORS
     Alternating-current              are also        alternators. Almost all electric           for homes
and            is supplied by alternators in power                A simple alternator consists of (1) a
strong, constant magnetic field; (2) conductors that rotate across the                 field; and (3) some
means of making a continuous                   to the conductors as they are rotating (Fig. 15-1). The
magnetic field is            by current flowing through                      stator, field coil. Field-coil
excitation               by a battery     other dc source.                    or rotor, rotates within the
magnetic field. For a single turn of wire around          rotor, each end is connected to a separate slip
ring, which is                      shaft. Each time the           turn makes one complete
one                    of alternating current is                (Fig. 15-2). A practical                has
several            turns wound                  of the                        are spring-held against the
slip rings to                                                                current induced in the rotor
or            coil and




                                                                        Stator
                                                                        field (stationary)




                        Slip rings



                                           '
                                         Brush      p          output
                        Fig. 15-1 A simple
                                     rotating armature
     The small ac generator usually has a stationary field and a rotating                  (Fig. 15-1). One
disadvantage is that the slip-ring and brush contacts are in series with the                  If these parts
become             dirty, current flow may be                                  if the dc field excitation
connected to the rotor, the                               will have               current induced        them
(Fig. 15-3). A load can be                  across these                                               of any
moving contacts in the             Field excitation is fed to the           field through           rings and
brushes.                         of this rotating-field and                                       the greater
ease of insulating stator fields compared with insulating              field coils.                   as high
as 18 O00 to 24 0o0 V are commonly generated,              high voltage need not be brought out through
slip rings and          but can                          to the switch
the stationary armature.
     The          of generated voltage of an ac generator                on the field strength              of
the                 most generators                   at constant speed, the             of emf depends
field excitation.

                                                         300
CHAP. 151      ALTERNATING-CURRENT                              AND MOTORS                              30 1


                                                                 0     Start         0




                   Position 1




                                                                                      0     90"




                   Position 2




                                                                                      0     90" 180"




                                                                180"


                   Position 3




                   Position 4


                                 n

                                                                360"                  0 90" 180" 270" 360"




                   Position 5

            Fig. 15-2 Generating 1 cycle of ac voltage with a                  alternator
302                    ALTERNATING-CURRENT                                          MOTORS                    [CHAP.15


                             Stator field (rotating)

                                Rotor




                                                                                        itput




                             Field
                             excitation


                        Fig. 153 A simple alternator having a                    field and a
                                 stationary
   The                of the           emf depends on the number of field poles and on                              at
which the                 operated, or
                                                         f = -Pn
                                                                                                                 (15-1)
                                                              120
where     f = frequency of generated voltage, Hz
          p = total number of poles
          n = rotor         revolutions per minute (rpm)
      Regulation of an ac generator is the percentage rise in terminal voltage as load is reduced from
the        full-load current to zero, with the speed and excitation being constant, or
                                                       no-load voltage - full-load voltage
                       Voltage regulation =                                                                      (25-2)
                                                                full-load voltage

Example 15.1 What is the frequency of a                     alternator operating at a           of 1500rpm?
                                          j=E                                                                    (25-1)
                                            120



Example 15.2 An alternator                   at 120V                  A load is now applied to the genera-
tor. The voltage output drops (the field current remains the same) to I10 V. What the regulation?
                                                no-load voltage - full-load voltage
                      Voltage               =                                                                    (25-2)
                                                         full-load voltage


When the output voltage is not steady, there would be constant flickering of electric                   sets
would not operate properly.                                  are used to make       for the drop in output
voltage              the field current. Voltage regulation                            to the alternator.

PARALLELING GENERATORS
    Most power plants                 ac generators           in parallel in order to increase the
power available. Before two generators may be paralleled, their terminal voltages must be equal,
their voltages must be in phase, and their frequencies must be equal. When these conditions are
met,     two generators are operating in synchronism. The            of getting the
synchronism is called synchronizing.
CHAP. 151              ALTERNATING-CURRENT GENERATORS AND MOTORS                                              303


RATINGS
    Nameplate data for a typical ac generator (Fig. 15-4) include manufacturer's               and
type               (rpm), number of poles,             of output, number of phases, and maximum
supply                         in kilovoltamperes                  at a specified power factor and
maximum output                         field current per        and maximum temperature

                             r-                   Westinghouse

                                 AC generator air cooled NO. 6750616 Type ATB
                                                    3600 RPM

                                   2 poles 60 hertz 3-phase wye-connected for
                                                    13 800 volts

                                  Rating 15'625 KVA 12 500 kW 0.80 PF exciter
                                                   250 volts

                            I            Armature 654 amp field 183 amp

                                       Guaranteed temp. rise not to exceed
                                        60°C on armature by detector
                                        80°C on field by resistance
                                Ng. 15-4 Nameplate data for typical ac generator

LOSSES AND EFFICIENCY
     Losses of an ac generator     similar to those of a dc                     and include
loss, field-excitation copper    and mechanical losses.
    Efficiency (Eff) is the    of the        power output to the                 power input:
                                                  output
                                           Eff = -                                                         (15-3)
                                                   input
Example 15.3 A 2-hp motor running at rated output acts as the prime mover for an alternator that has a load
demand of 1.1 kW. What is the efficiency of the alternator in percent? Neglect field excitation.
                                    746 W
               Input power = 2 hp x -= 1492 W           Output power = 1. I kW = I100 W
                                      hP
                                   output - - -
                             ER=--
                                    input
                                                - 0.737 = 73.7%      Ans.

Since the prime mover is supplying 1492 W but the alternator is delivering 1100 W to the load, there must be 392 W
of loss in the alternator.

POLYPHASE INDUCTION MOTORS
Principle of Operation
    The                     is the most commonly used type of ac motor             of its        rugged
construction and good operating                         It consists of two            stator (stationary
part)                                         stator is             to the ac supply. The          is not
connected                to the                most important        of polyphase           motor is the
three-phase                                       have three windings and deliver an output
several        of wires.) When the stator winding is energized from a three-phase             a rotating
magnetic field is               As the field sweeps across the                    an emf is            in
these              which causes current to flow in them.                                      current in
the stator field thus have a torque            upon them that spins
304                    ALTERNATING-CURRENT GENERATORS AND MOTORS                              [CHAP. 15


Squirrel-Cage Motor and Wound-Rotor Motor
    Three-phase induction motors are classified into two types: squirrel-cage (Fig. 15-5) and
wound-rotor motors (Fig. 15-6). Both motors have the same stator construction, but differ in rotor
construction. The stator core is built of slotted sheet-steel laminations. Windings are spaced in
the stator slots to form the three separate sets of poles.




Fig. 15-5 Cutaway view of a squirrel-cage in-
          duction motor (Courtesy of General
          Electric Company; from E. C. Lister,         Fig. 15-6 Cutaway view of a wound rotor induction
          Electric Circuits and Machines, 5th ed.,               motor (Courtesy of General Electric Com-
          McGraw-Hill, New          1975, p. 247)                puny; from Lister, p . 248)

    The rotor of a squirrel-cage motor has a laminated core, with conductors placed parallel to the
shaft and embedded in slots around the perimeter of the core. The rotor conductors are not
insulated from the core. At each end of the rotor, the rotor conductors are all short-circuited by
continuous end rings. If the laminations were not present, the rotor conductors and their end rings
would resemble a revolving squirrel cage (Fig. 15-7).
                                          End rings




                                                          conductors
                                                          welded to end
                                                          pieces
                                       Fig. 15-7 A simple squirrel-cage
                                                 rotor with rotor con-
                                                 ductors welded to end
                                                 rings on a shaft
    The rotor of a wound-rotor motor is wound with an insulated winding similar to the stator
winding. The rotor phase windings are brought out to the three slip rings mounted on the motor
shaft (Fig. 15-6). The rotor winding is not connected to the supply. The slip rings and brushes
merely provide a means of connecting an external rheostat into the rotor circuit. The purpose of
the rheostat is to control the speed of the motor.
CHAP. 151                ALTERNATING-CURRENT                                 AND MOTORS                           305


Speed and Slip
     The speed of the rotating                field is            the synchronous speed of the motor.
                                                    n = -120f                                                 (15-4)
                                                             P
where n = speed of rotating          field, rpm
      f = frequency of rotor current, Hz
      p = total number of poles
It is        that the same relation exists between the frequency, number of poles,     synchronous
speed of a motor          (15-4)] as exists between the frequency, number of poles,        speed of
rotation of an ac generator [Eq. (15-I)].
      An induction         cannot run at synchronous speed since then the rotor would       standing
still      respect to the rotating field and   emf would be induced in the rotor. The rotor speed
must be slightly less than synchronous speed in order that current be induced in the rotor to permit
rotor rotation. The difference between rotor speed          synchronous speed            slip and
expressed as a percent of synchronous speed.

                                          Percent s = N~ - N~ 100                                             (15-5)
                                                                 NS
where         S = slip
         Ns = synchronous speed, rpm
         NR = rotor speed, rpm

Example 15.4 A four-pole 6 0 - H ~squirrel-cage                  a full-load speed of 1754 rpm. What is the
slip at full
                                                              120f
                               Synchronous               Ns = -                                               ( 25-41
                                                                  P


                                 Slip = NS - NR = 1800 - 1754 = 46rpm

                                                                                                              ( 2 5-5)

                                                 =-
                                                  46 100 = 2.6%
                                                                            Ans.
                                                  1800


Rotor Frequency
     For any value of slip, the rotor frequency is equal to the stator frequency times the percent slip,
or
                                                    f R = SfS                                                 (15-6)
where    fR    = rotor frequency, Hz
          S = percent slip        as a decimal)
         fs = stator frequency, Hz

Example 15.5 At a slip of 2.6 percent for the                         in Example 15.4, what is the      frequency?
                                   fs = 60Hz         given
                                   f R   = Sfs                                                                ( 2 5-6)
                                         = 0.026(60) = 1.56 Hz           Ans.
306                  ALTERNATING-CURRENT                                   AND MOTORS       [CHAP. 15


Torque
     The         of an induction motor depends on the                      of the           and stator
fields and the phase relations         them.


where        T = torque, lb ft
             k = constant
             4 = rotating       flux, lines of flux
             IR = rotor         A
         cos OR = rotor power factor

Throughout                                       +,
                 normal range of operation, k, and cos OR are nearly constant so that T is directly
proportional to IR. Rotor current IR in turn              in almost direct            to the motor
slip. Variation of torque with slip (Fig. 15-8) shows that as slip            from zero to about 10
percent,            linearly increases with the slip. As load and slip are          beyond rated
full-load torque,                     a maximum value at about 25 percent slip. This maximum
value of torque is called the breakdown torque of the motor. If the load is further
beyond the breakdown point, the motor will quickly come to a stop. For typical squirrel-cage
motors, the breakdown torque varies from 200 to 300 percent of full-load torque. The
torque is the value at 100 percent slip (rotor speed is zero) and is normally 150 to 200 percent of
full-load rating. As the rotor                the torque                   maximum value and then
decreases to the value required to carry      load on the motor at a constant


                                                       1       1
                                                 , Breakdown torque    I            I




                                                                               /
                                                               r
                                                            Starting torque


                                     0      20        40       60     80           100

                                                      Percent slip
                                    100     80        60       40     20            0
                                            Percent synchronous speed

                              Fig. 15-8 Variation of torque with              for a
                                        typical squirrel-cage motor



SYNCHRONOUS MOTORS
    Like induction motors,                   motors have stator wiodings that              a rotating
magnetic field. But unlike the induction motor,                    of a synchronous motor is excited
by a dc                                      with the          magnetic field and rotates at the same
speed,     given by Eq. (25-4). If the         is pulled out of step with the                 field, no
torque is developed and the motor stops. Since a synchronous motor develops                only when
running at synchronous         it is not self-starting and hence needs some device to bring the
to               speed.
CHAP. 151               ALTERNATING-CURRENT GENERATORS AND MOTORS                                         307


Example 15.6 What is the slip of a synchronous motor?
   Since the synchronous speed is equal to the rotor speed, Ns = NR,

                                                                                                        (15-5)

                                                        0
                                                    = -100   = 0%        Am.
                                                       Ns
An ac electric clock uses a synchronous motor to maintain the correct time (as long as the frequency of the ac
supply remains constant).

Starting Synchronous Motors
     A synchronous motor may be started rotating           a dc motor     a common shaft. After the
motor             to synchronous speed, alternating current is applied to the stator windings. The
dc starting        now acts as a dc generator, which            dc field excitation for the rotor. The
load       can be coupled to the motor. More often synchronous motors are started by               of a
squirrel-cage winding embedded in the face of the rotor poles. The                is then started as an
induction              is brought to about 95 percent of synchronous               At the
direct current is applied      the motor pulls into                  The amount of torque needed to
pull the                          is called the pull-in torque.

Effect of Loading Synchronous Motors
     In the synchronous motor the rotor is            into step magnetically with the rotating
field and                to rotate at synchronous           for all loads. At no load the center lines of
a pole of the rotating            field and a dc field pole coincide       15-9a). When load is added
to the motor, there is a backward shift of the rotor pole relative to the stator pole (Fig.
15-9b). There is no             in speed.                                               rotor and stator
poles               torque angle a.
                                     cr=o
                                      I                                               Torque angle
                    S      t     a        q    T      F      s       t            a            s

                                              Rotation of

                                J U
                                                                                      Rotation of
                                              rotor and                               rotor and
                                              air-gap flux                            air-gap flux




                                (a ) No load                         ( b ) With
                        Fig. 15-9 Relative positions of a stator pole and a dc field pole
    When a synchronous             operates at no       (torque angle practically O"), the counter emf
 V6 is equal to the          or terminal           Vt (neglecting                 (Fig. 15-10a). With
increasing             torque angIes, the phase             of vg changes         respect to V, which
allows        stator current to flow to carry the additional load (Fig. 15-lob). V, and Vg are no
longer in direct opposition.          resultant voltage Vr causes a current I to flow in the stator
windings. I lags Vr by nearly 90" because of the high inductance of the stator windings. 8 is the
phase angle between V,and I. An increase in load results in a larger torque angle, which increases
Vr and I (Fig. 15-10~).
    If the             load is too high, the rotor is pulled out of synchronism               to a stop.
The maximum value of torque that a motor can develop                      its synchronism is called its
pull-out torque. If the synchronous motor has a squirrel-cage               it will continue to operate
as an
   308                 ALTERN ATING-CURRENT GENERATORS AND MOTORS                                [CHAP. 15


                                       Terminal or
Counter emf                           applied voltage




                   (a) No load                                                 (b) With load




                                           (c) With increased load

  Fig. 15-10 Phasor diagrams for a synchronous          for three         load conditions           dc field
             excitation


  Ratings and Eflticiency
      Synchronous-motor             data include the same              on ac generator
  with the horsepower
      The efficiency of synchronous                     higher than that. of induction        of the
  same                                            are the      as those of synchronous
      Synchronous          are used for constant-speed                      in sizes above 20hp. A
  common                           or gas

  Power Factor Correction with Synchronous Motors
       An outstanding             of a                        that it operates at unity or leading power
  factor (PF). By varying                  of the dc field, the                 factor of a
  motor                    over a                                           can be made to appear as a
  leading load across the line. If an                                        at a lagging power factor,
  synchronous                       across the line and           for leading PF can
  raise)              PF. Any improvement in P F increases                           to the load,
  efficiency, and in general                                          of the system.

  Field Excitation Used to Change Power Factor of Motor
      For constant mechanical                PF of a synchronous              may be varied
  value to a lagging value by adjusting its dc field excitation (Fig. 15-11). Field excitation
  so that P F = 1 (Fig. 15-lla). At the                           field excitation is increased, the counter
  emf Vg increases.                 in a         in phase             stator current I and
   V,so that the        operates at a leading PF (Fig. 15-llb). If the field excitation               below
  the                    (Fig. H-lla), the          operates at a lagging PF (Fig. 15-llc). An example
  of a V curve for a                                          a manufacturer,            how stator current
  varies at a constant load with         field excitation        15-12). Power factor may also
  when      field current is
CHAP. 151                ALTERNATING-CURRENT GENERATORS AND MOTORS                                                 309




              ( 0 ) PF   = I , e = 00                                        (6) Leading PF, field overexcited




                                         ( c ) Lagging PF, field underexcited
Fig. 15-11 Phasor diagrams of a synchronous motor             a constant load but different amounts of field excitation




                                                 Field current, dc amperes
                                           Underexcited +Overexcited             -->f
                                  Fig. 15-12 Variation of stator           synch-
                                             ronous motor PF with varying dc field
                                             excitation at a constant load
310                        ALTERNATING-CURRENT GENERATORS AND MOTORS                                                 15


Example 15.7 The load of an industrial       is 400kVA at a P F of 75 percent lagging. What must be the
P F of the added 1WkW load of a synchronous         if it improved the overall     P F to 100 percent?
     For P F = 1, the net reactive    of the plant        be equal to zero.
Step 1. Find the initial reactive            of the plant (Fig. 15-13a,and 6).
                             PF = cos 8 = 0.75     given
                              9 = arccos 0.75 = 41.4"       P = S cos 8 = w 0 . 7 5 ) = 300 kW
                              Q = S sin 8 = 400 sin 41.4" = 264.5 kVAR lagging


              P = real power, kW                                                        P


                                     Q = reactive power,
                                     kVAR

                                                 i

                                                                             PF = cos 8 = 0.75 lagging
               (a) General power triangle                                 (b) Initial plant power triangle




                                                                                         v


                                                                      P = 400kW
                                                                                                Q = 264.5 kVAR lagging

       P = 100kW
                                                                   Q~ = Q,e = 00            4

          (c) Synchronous motor power triangle                    (d) Resultant plant power triangle with PF = I
                                       Fig. 15-13 Power-triangle


Step 2.    Find the P F of the synchronous            (Fig. 15-13c). For a net P F = 1, the reactive      of
           the motor               the initial            of the plant in the opposite          The Q of the
           plant       1) is 264.5 kVAR lagging. So the Qt of the added load must be 264.5 kVAR leading.

                                 OL = arctan-264 5 = arctan2.64 = 69.3"
                                              100
                                P F = cos OL = cos 69.3" = 0.353 = 35.3% leading             Ans.
           The resultant                    (Fig. 15-13d) shows a plant     of 400 kW (300 kW + 100 kW) at a P F
           of unity.


SINGLEPHASE MOTORS
    Single-phase motors are so called because their field windings are connected directly to a
single-phase source. Single-phase motors are classified as commutator, induction, or synchronous
motors according to the method used to start them, as follows:
      1. Commutator motor
         ( a ) AC series motor
         ( b ) Repulsion motor
CHAP. 151            ALTERNATING-CURRENT                                AND MOTORS                 311


     2. Induction motor
        ( a ) Split-phase
              (1) Capacitor-start motor
              (2) Capacitor motor
        (b) Repulsion-start
        ( c ) Shaded-pole
     3. Synchronous motor

Commutator Motor
AC Series Motor
     When an ordinary dc series motor connected to an ac supply, the current drawn by the motor
is      due to the high series-field impedance. The result is                  torque. To reduce the
field reactance to a minimum, ac series motors are built          as few turns as possible.
reaction is overcome by                                     the pole
     The operating characteristics are similar to those of dc series motors. The speed increases to a
high value       a decrease in load. The torque is        for high armature currents so that the motor
has a good starting torque. AC series motors operate more efficiently at low frequencies. Some
of the larger                in railroad            operate at 25Hz or less. However, fractional
horsepower sizes are designed to operate at 50 or 60Hz.
Repulsion Motor
    The repulsion        has an armature and commutator similar to that of a dc motor. However,
the brushes are not connected to the supply but are short-circuited (Fig. 15-14). The stator
windings produce a current in the rotor windings by induction. This current produces magnetic
poles in the rotor. The orientation of these poles is dependent on the position of the
brushes. The interaction of the rotor field with the stator field creates the motor torque. The
repulsion            a high starting torque and a high speed at light loads. It is used
starting loads are expected.



                          I                                              I
                          I I                    Rotor field    I        I   Stator field




                                    Short-circuiting       Commutator
                                       brushes
                                      Fig. 15-14 Repulsion motor


Induction Motor
    A single-phase                                        The magnetic field set up in the stator by
the ac power            stays lined up in one direction. This                              stationary,
pulsates as the voltage           does. This pulsating field induces a voltage in the rotor windings,
3 12                  ALTERNATING-CURRENT GENERATORS AND MOTORS                          [CHAP. 15


but the rotor field can only      up with the stator field. With these two fields in direct line, no
torque is developed. It is necessary then to turn the rotor by
rotor is rotating with            speed, the interaction between the rotor and stator fields will
maintain rotation. The rotor will continue to increase in speed, trying to lock into synchronous
speed. It finally will reach an equilibrium speed equal to the synchronous speed




                                  a




                                        0




                                             Main
                                            winding
                                                                                        Starting
                                                                                         switch
                             rn         0
                                                         Auxiliary
                                                         winding
       Fig. 15-16 Phase relations in                  Fig. 15-17 Capacitor motor
                  the capacitor-start
                  motor
CHAP. IS]              ALTERNATING-CURRENT                            AND MOTORS                              3 13


     Capacitor Motor. The capacitor motor operates with an auxiliary               series capacitor
permanently connected to the line        15-17). The capacitance in series may be of one value for
starting and another value for running. As the motor approaches synchronous speed, the cen-
trifugal switch disconnects one section of the capacitor.

Repulsion-Start Induction Motor
    Like a dc motor, the rotor of the repulsion-start           has windings connected to a
commutator. Starting brushes make contact with the commutator so the motor starts as a
repulsion motor, As the motor nears full speed, a centrifugal                           the
commutator segments so that it operates as an induction      This type of motor           in
sizes ranging      to 15 hp              in applications   a high starting torque.

Shaded-Pole Motor
     A shaded pole                  by a short-circuited                      a part of each pole of a
motor. The coil               a single       or strap of copper. The          of the coil to produce a
small                     of the field flux from one side of the pole          to the other as the field
pulsates (Fig. 15-18). This          shift*inthe magnetic field produces a small starting torque. Thus
shaded-pole           are self-starting. As the field in the pole        increases, a current is
in the shading         This current causes a magnetic field that opposes the main field. The main
field therefore will concentrate on the opposite side of the pole                 15-18a). As the field
begins to decrease, the shading-coil field will aid the main field. The concentration of flux then
moves to the other edge of the pole                 15-18b). This           of motor starting is      in
very small motors, up to about hp, for driving             fans, small appliances, and


                            Pole piece




                                Rotor                                   Rotor
                   (a) Shaded                   field        (b) Shaded pole

                       Fig. 15-18 Action of the magnetic field in a shaded-pole motor



Synchronous Motor
    Several types exist to drive electric clocks,             turntables, and other devices requiring
precise rotation. One type is            the Warren synchronous motor. It starts by the use of
shading       in the pole         The motor             up to synchronous speed from the effects of
eddy currents flowing in the rotor iron       of hysteresis. Its principal use is in clocks and other
timing devices.

Example 15.8 List the type of field excitation                                 field is usually the stator or the
rotor for each of the following: alternator, polyphase
3 14                          ALTERNATING-CURRENT                                   AND MOTORS                     [CHAP. 15


       The list is           in the          below.


                                                                            Field Excitation

                                        Device                    Input Field         Output Field

                             Alternator
                               Rotating                           DC (stator)
                               Stationary                         DC (rotor)         Stator (ac

                             Polyphase                 motor               AC (stator)

                             Synchronous                                   DC (rotor)
                                                                           AC (stator)


Example 15.9           Fill in the                  word to complete each of the
       (a)   The magnetic field of a single-phase motor does not          to
       ( 6 ) Repulsion                                  starting torques.
       ( c ) Induction        are classified by different                    methods.
       (4                             must          so that    stator and rotor fields are not         lined up.
       (e)     Split-phase                                        separate windings.
       (a) rotate (a                   field does                       ( b ) high, (c) starting, ( d ) Slip, (e) two




                                                       Solved Problems
15.1         An alternator has a characteristic curve showing percentage of terminal voltage and
             percentage of full-load ampere output for three types of loading (Fig. 15-19). Calculate the
             percent regulation for the three types of loading.




                                     Fig. 15-19 Effect of power factor on alternator output
CHAP. 151                   ALTERNATING-CURRENT                                               MOTORS                          315


            When 100 percent                                          by the alternator, the full-load (FL) voltages          85,
       70, and 120 percent               no-load (NL)                for P F = 1, 0.8 lagging, and 0.8 leading,
       (Fig. 15-19).

                                                                                NL - FL
                                                  Voltage regulation =                                                     ( 15-2)
                                                                                  FL
       When P F = 1:

                                                      ?!k!!
                                   Voltage regulation =
                                                                 85
                                                                         = 0.176 = 17.6%           Ans.

       P F = 0.8 lagging:

                                   Voltage regulation =                       0.429 = 42.9%        Ans.
                                                                 70
       P F = 0.8 leading:

                               Voltage regulation =              - 120 = -0.167 = - 16.7%              Ans.
                                                                120
       The negative                             that the full-load voltage                             no-load voltage.


15.2   Draw phasor diagrams of an ac generator operating when PF = 1.0, 0.8 lagging, and 0.8
       leading.
           Let IR and IXL be voltage                       due to                                              in the
       winding, respectively.
                      v g   = generated emf               Vt = terminal                   I = armature current
       V, is the phasor sum of V,,the IR drop which is in phase with I, and IX, drop which leads I by 90"
       (Fig. 15-20). V, is                        with the amount of load and P F of the      At laggicg
       PF, V, is lowered. The lower         P F in the lagging direction,         V,. At leading PF, V,
       increases with load.




                                                            e
                      V,      IR             I                           vt                                         vt
                                        (reference)              I                IR

         (U)    At PF = 1.0, 8 = 0"                   (b) At PF = 0.8 lagging,                   (c)   At PF = 0.8 leading,
                                                          PF = 0.8 = COS 8;                            8 = 36.9" leading
                                                          8 = arc cos 0.8 = 36.9" lagging

               Fig. 15-20 Phasor diagrams of ac generator                         at three different load factors



15.3   A diesel-driven 60-Hz synchronous generator produces 60 Hz when                                                  200 rpm.
       How many poles does it have?

                                                                                                                          (15-1)

       from which
3 16                 ALTERNATING-CURRENT GENERATORS AND MOTORS                                    [CHAP. 15


15.4   At              will a              25-Hz synchronous generator produce 25 Hz?
                                      f   =E                                                           (15-1)
                                            120




15.5   An alternator has a                           of 10.0 percent. If the full-load voltage is 220 V, what
       is the no-load voltage?
                                      N L - FL
               Voltage regulation =                                                                    ( 15-2)
                                         FL
       from which               N L = FL(vo1tage regulation + 1) = 22q0.10 + 1) = 242 V         Ans.


15.6   A four-pole 60-Hz induction                                     of 5 percent.         is the full-load
       rotor speed?
                                                      l20f
                                                 Ns = -                                                (15-4)
                                                        P



                                                                                                       ( 15-5)




       Then


15.7   A                          stator winding is wound for four poles. At full       the motor
       operates at 1740rpm                      of 60rpm. What is the supply frequency?
                                     Slip = Ns - NR
                                      Ns = NR + Slip = 1740 + 60 = 1800rpm
                                      Ns = 12of                                                        (154)
                                                 P
       from which



15.8   What    the rotor frequency of an eight-pole 6 0 - H ~squirrel-cage                       at 850 rpm?
                                          & = - -120f ---
                                                        W 6 0 ) - 9()Orpm
                                                  P       8
                                          Slip = Ns - N R = 900 - 850 = 50rpm

                                            S=
                                                  NS - N R                                             ( 15-5)
                                                     N S

                                                  2
                                                - - - - 0.056
                                           fR   = SfS                                                  (15-6)
                                                = 0.056(60) = 3.33Hz        Ans.
       This means that a rotor conductor will have induced in it an emf with a frequency of 3.33 Hz.
CHAP. 151             ALTERNATING-CURRENT GENERATORS AND MOTORS                                                      317


15.9   How much larger is the rotor reactance of a squirrel-cage motor at start-up (with the rotor at
       a standstill) than it is when the motor operates at 4 percent slip?
                                                 Rotor               XR = 272fRLR
       with LR constant,                                             XR a fR     so
       rotor            is directly                 to rotor
            At start-up,            of the            NR = 0 so slip = 1.00. During motor                     slip = 0.04
       (given), so
                                           fR1   = SIfS                                                           ( 15-6)
                                           fR2   = s2fS

       Dividing,



       Since XR a fR, the                        at start is 25 times                    at 4 percent slip.       Ans.


15.10 A motor-generator set used for frequency conversion has a lepole 25-Hz synchronous
       motor and a direct-connected 24-pole synchronous generator. What is the generator
       frequency?
            Synchronous



       Synchronous

                                       f   = @k= 2          4 0 = 60Hz            Ans.
                                                 120       120

15.11 The load of an industrial plant is 400 kVA at a P F of 75 percent lagging. An additional motor
       load of 100 kW needed. Find the new kilovoltampere load and the P F of the load, if the
       motor to be added is (a) an induction motor with a PF of 90 percent lagging, and ( b ) a
       synchronous motor with a P F of 80 percent leading.
           The            is simplified by drawing and solving a series of power
       Step 1. Set up a power triangle for current industrial              (IL) (Fig. 15-21a).
                                     PIL = W c o s 8 = W ( 0 . 7 5 ) = 300 kW

                                     QIL= 400 sin 8 = 400 sin 41.4" = 264.5 kVAR lagging




                                                                 Q I L lagging




                                       Given: PF = cos 8 = 0.75 lagging
                                               8 = 41.4"

                                                   (a) Industrial load

                                                       Fig. 15-21a
318                ALTERNATING-CURRENT                                                 MOTORS                     [CHAP. 15


      Step 2. Add induction            (IM) to industrial            (Fig. 15-21b).
                                              QIM =   100tan 25.8" = 48.3 kVAR lagging

                             PIM                                          P




                                                                       q"'"
                         100 kW                                         400kW

                                                                \e        .I
                                                                                       laggingkVAR

                   Given: P F = cos 8 = 0.9 lagging
                            e = 25.a"
                       (b) Induction motor                           (c) Combined industrial load
                                                                          and induction motor
                                                     Fig. 15=21b,c


             The resultant                          as shown in Fig. 15-21c.
                                   P = PI= + P I M = 300 + 100 = 400kW
                                   Q = QI' + QIM = 264.5 + 48.3 = 312.8 kVAR lagging
                                   8 = arctan-
                                                Q = arctan-312 8 = 38"
                                                P       400
             (a)               P F = cos 8 = cos 38" = 0.788 = 78.8% lagging    Ans.
                                s = - P- ---400 - 508 kVA (3 significant figures)                          Ans.
                                     cos6 cos38"
      Step 3. Add synchronous                (SM)to industrial load (Fig. 15-21d).
                                              Q S M = 100   tan 36.9" = 75.1 kVAR leading




                   /( J
                     36.9"
                               A
                                      QSMleading
                                                                               P

                                                                                          189.4 kVAR
                                                                                          lagging




               Given: P F = cos 8 = 0.80 leading
                        9 = 36.9"

                    (d) Synchronous motor                              (e) Combined industrial load
                                                                            and synchronous motor

                                                     Fig. 15-21d,e


             The resultant                          as shown in Fig. 15-21e.
                                     P = PIL+ P s M = 300 + 100 = 400kW
                                     Q = QIL - QSM = 264.5 - 75.1 = 189.4 kVAR lagging
                                                                  189 4
                                                       8 = arctan- 400 = 25.3"
                               P F = cos 6 = cos 25.3" = 0.904 = 90.4% lagging                      Ans.

                                   s=-- 400 -442kVA
                                      cos 25.3"
                                                                          Ans.
CHAP. 151              ALTERNATING-CURRENT                                             MOTORS                       3 19


15.12 A 220-V 50-A induction motor draws 10kW of power                                     15-220). An 8-kVA syn-
      chronous motor is placed parallel with it in order to adjust                        PF to unity. What must be
      the PF of the            motor?

                                                                                       PA
                                                                                     10 kW
                          A                      B

                                                                                                   QA   lagging

                                                                                  11 kVA
                                                                                     SA
   v, = 220 v                                                                     (b) Induction motor




                                                                             r(s
                                                     S, = 8 kVA
                              PA = 10 kW             PF = ?


                      (a) P F correction t o unity
                                                                                                   28    kVAR leading



                                                                                       (c) Synchronous motor

                                                       Fig. 15-22


        Step 1. Set up a power triangle for the                          (Fig. 15-22b).
                                            SA = VtIA = 220(50) = ll000VA = 11 kVA
                                                  PA        10
                                       8 = arccos- = arccos- = 24.6"
                                                      SA            11
                                      QA   = SA sin 8 = 11 sin 24.6" = 4.58 kVAR lagging
        Step 2. Set up a power triangle for the                          15-22c). For              load P F = 1, the
                number of kilovoltamperes                  must be 0. Therefore, the                  power of the
                chronous
                                                                                QB             4 58
                               QB   = 4.58 kVAR leading             8 = arcsin-      = arcsin-      = 34.9"
                                                                                SB              8
                 P F = cos 8 = cos 34.9' = 0.820 = 82.0% leading                Ans.




                                      Supplementary Problems
15.13 A 60-Hz alternator operates at 900rpm.          How many poles does it have?             Ans. Eight poles

15.14   How many cycles are generated in 1 revolution of a 12-pole ac generator? How many revolutions per
        second (rps) must it make to generate a frequency of WHz? How many revolutions
        Ans. 6 cycles; 10 rps;

15.15   (a) At what           a six-pole synchronous                                to produce 25 Hz? (b) At what
        speed must a four-pole 60-Hz synchronous                         be driven to produce MHz?
        Ans. (a) 500rpm; (b) 1800rpm

15.16   To produce 50Hz with a two-pole rotating-coil alternator,                            must be the prime-mover
        rpm?     Ans. 3000rpm
320                     ALTERNATING-CURRENT                                       MOTORS                       [CHAP. 15


15.17   Find the regulation of an ac generator that has a full-load voltage of 2600V and a no-load voltage of
        3310 V at a PF of 80 percent lagging. Will the percent                at a P F of unity be higher than,
        lower than,             as at a P F of 80 percent lagging?       Ans. 27.3%; lower than

15.18   When the load is           it more efficient to use                                   at its rated              to
        share the load between                              at less
        Ans. It is more efficient to use                at rated

15.19   An alternator      a voltage              of 10.0 percent. If the no-load voltage             220V, what is the
        full-load             Ans. 220 V

15.20   A fully loaded 10-hp electric                a 120-V ac output alternator          6.5 kW to a remote
        lighting system. If the                                                is the approximate       in the
        alternator? What is the efficiency of the alternator?    Ans. 660 W; Eff = 91.2%

15.21 A 440-V alternator                   a 30-hp prime mover       at full                                  20 kW into a
        load. Find the efficiency of the alternator.   Ans. Eff = 89.4%

15.22   A 5-kW alternator is known to be 92 percent efficient when it is at full                     What is the
        requirement in horsepower for the prime mover?    Ans. 7.3 hp

15.23   Find the                        of a 60-Hz motor                         stator winding.             Ans. 900rpm

15.24   Make a table                                 speeds of 2-, 4-, 6,8-, and 12-pole induction                     for
        frequencies of 25, 50, and 60 Hz.


        Ans.                        I         I                n, rpm                     I
                                    I     p   -f=25Hz      1 f=50Hz 1 f=60Hz




15.25   A six-pole 60-Hz induction                  a full-load slip of 4 percent. Find the                         at full
        load.   Ans. 1152rpm

15.26   What is the                     of a six-pole 60-Hz squirrel-cage                       at 1130rpm?
        Ans. 3.5Hz

15.27   The three-phase                          an aircraft carrier     stators that may be connected to
        either 22 or 44 poles. The frequency of the supply may be varied        20 to 65 Hz.          the
        maximum and minimum speeds available         the motors?
        Ans. Maximum speed, 354.5 rpm; minimum speed, 54.5 rpm

15.2s   How much greater is the                       an induction          at start-up          it is when operating at 5
        percent        Ans. 20 times

15.29   What is the                                   a %pole 60-Hz 440-V synchronous
        Ans. 240rpm; 0.0%
CHAP. 151               ALTERNATING-CURRENT GENERATORS AND MOTORS                                               321


15.30   The propulsion motors used     a naval vessel are rated 5900 hp, three-phase, 2400 V, 62.5 Hz, and
        139rpm. How               do they have? The speed of these motors may be changed               the
        supply frequency between 16 and 62.5 Hz. What are the maximum and minimum speeds?
        Ans. 54 poles; maximum speed, 139 rpm; minimum speed, 35.6 rpm

15.31 A transmission line delivers a load of 7500kVA at a PF of 70 percent lagging. If a synchronous
        condenser is to be located at the end of the line to improve the load power factor to 100 percent, how
        many kilovoltamperes must           from the line. Assume the condenser is 100 percent reactive.
        Ans. 5360kVA

15.32   A 440-V line delivers 15-kVA to a load at a PF of 75 percent lagging. To what P F should a 10-kVA
        synchronous motor be adjusted in order to raise the P F to unity     connected in
        Ans. PF = 12.6% leading

15.33   A 220-V 20-A induction motor draws 3kW of power. A 4-kVA synchronous motor is placed
        parallel to adjust the PF to unity. What be the PF of the synchronous motor?
        Ans. P F = 59.3% leading

15.34   A 30-kW induction motor operates at a P F of 80 percent lagging. In parallel                      a 50-kW
        induction motor operating at a P F of 90 percent lagging. ( a ) Find the new kilovoltampere load and P F of
        the load. (b) Find the P F adjustment which         be made on a 20-kW synchronous motor in
        the two induction motors in order to raise the PF of the line to unity.
        Ans. ( a ) 92.6 kVA, PF = 86.3% lagging; (b) P F = 39.4% leading

15.35   A synchronous motor which has an input of 500 kW added to a system which has an existing load of
        800 kW at a P F of 80 percent lagging. What will be the new system kilowatt load, kilovoltampere
        load, and P F if the new motor is operated at a P F of ( a ) 85 percent lagging, (b) 100 percent, and (c) 85
        percent leading?
        Ans. ( a ) 1300 kW, 1590 kVA, 81.9% lagging; ( b ) 1300 kW, 1430 kVA, 90.8% lagging; (c) 1300 kW,
        1320 kVA, 97.6% lagging

15.36   When is a synchronous motor said to be ( a ) overexcited, (b) underexcited?
        Ans. ( a ) Operates at leading P F (field excitation greater than that for PF = 1);        (b) Operates at
        lagging P F (field excitation less than that for P F = 1). (See   15.12.)

15.37   For a constant field excitation, what is the effect on a synchronous motor with a lagging PF if the load
        is increased?     Ans. Phase angle increases in lagging direction so P F becomes less.

15.38   What is meant by ( a ) pull-in torque, and (b) pull-out torque for a synchronous motor?
        Ans. ( a ) Torque value to pull the motor into synchronous speed; (b) Maximum torque developed
        without losing synchronous speed (stalling).

15.39   Why is a centrifugal switch used in a split-phase motor?
        Ans. Starting winding                    to help develop starting torque. Once the motor approaches
        running speed, it no longer needed. Starting windings are usually                             wire,
        which       overheat and       out if not disconnected.

15.40   How does a shaded-pole motor create a rotating magnetic
        Ans. Short-circuited coil on one edge of pole piece produces a field that first weakens and then aids
        the    field.
                                                                         Chapter 16

                                   Transformers
IDEAL TRANSFORMER CHARACTERISTICS
     The                               of two coils electrically               each other      wound
upon a common                 16-1). Magnetic coupling is used to transfer electric               one
coil to another. The        which receives energy         an ac source is      the primary. The coil
which delivers energy to an       load is called the secondary. The core of transformers used at low
frequencies is generally made of magnetic material, usually sheet              Cores of transformers
used at higher frequencies are made of powdered
als.               are simply wound on                   hollow forms such as cardboard             so
that the                is actually
     If a transformer               to be operating under an ideal                         transfer of
energy             voltage to another is accompanied by no losses.
                                                     Iron core

                                        J

             AC      V                                                                    Load
            supply




                              Fig. 16-1 Simple             of a transformer
Voltage Ratio
    The voltage on           of a transformer is directly                     to the       of turns on
coils.                   is expressed by the

                                                                                                      (16-1)

where   Vp = voltage on                 V
        V, = voltage on secondary           V
        Np = number of turns on                 coil
        N, = number of turns                      coil
The      Vp/Vs is called the voltage ratio (VR). The                    Np/N, is called          turns ratio
(TR). By substituting               Eq. (16-l), we obtain
                                                 VR = TR                                              (16-2)
    A voltage ratio of 1 :4 (read as 1 to 4) means that for each volt on
there is 4 V on the                When the            voltage is greater
transformer is called a step-up transformer. A voltage ratio of 4: 1 means that for each 4 V on the
primary,        is only 1 V on the               When the              voltage is less
voltage,                   is called a step-down transformer.

                                                     322
CHAP. 161                                      TRANSFORMERS                                                           323


Example 16.1 A filament transformer (Fig. 16-2) reduces                   120 V in the              to 8 V on
dary. If there 150 turns on the primary and 10 turns                                     find the
ratio.




    Note that VR = TR [Eq. (26-2)].

                                              Primary




                                                             NS

                                                        NP
                                        vp = 120 v            V, = 8 V
                                        Np = 150 turns       N, = 10 turns

                                       Fig. 16-2 Filament

Example 16.2 An iron-core                                         a 120-V line has 500 turns in the                   100
turns in the         Find the                  voltage.



Solve for V, and substitute known values.
                                       Ns
                                  v, = -v,      = 3 2 0 = *4v                  Ans.
                                        N P        500

Example 16.3 A power transformer has a turns                 of 1 :5. If the                 coil has loo0 turns
secondary voltage is 30 V, find the voltage ratio,                         and the               of primary
                                              VR = TR                                                              (26-2)
                                                 = 1:s             Ans.



                                                                          Ans.



                                        1
                                 N,,= 3 N, = E
                                             5
                                               = 200 turns                     Ans.


Current Ratio
    The current in the coils of a transformer is inversely proportional to the voltage in the coils. This
relationship is expressed by the equation

                                                                                                                   ( 16-3)
324                                             TRANSFORMERS                                               [CHAP. 16


where Ip= current in primary      A
      Is = current in secondary coil, A
From Eq. (16-1) we may substitute Np/Nsfor Vp/Vs,so we have




Example 16.4 Derive                                   Vp/V, = Is/&,.
    For        transformer, the                     to the primary             to the power output of the secon-
dary. Thus, an                                      operate at an efficiency of 100 percent. Therefore,
                                            Power     = power output
                                                   Pp = P,
                                          Power       = Pp = VpIp
                                         Power output = P, = VJ,
Substituting for Pp and P,,                         VPIP= V,I,

from which



Example 16.5 When the          winding of an                                               at 120 V, the current in the
winding is 2 A. Find  current in the                   winding load if the                           to 600 V.



Solve for I, and              known values.
                                            V
                                     I, =         =3      2 = 0.4A       Ans.
                                                    600


Example 16.6 A bell transformer with 240 turns                               30 turns on                         0.3 A
from a 120-V line.     the secondary current.



      Solve for Is and substitute known values.
                                        N
                                    I, = $ Ip = 240 (0.3) = 2.4 A            Ans.
                                                 30


Efficiency
   The efficiency of a transformer is equal to the ratio of the power output of the secondary
winding to the power         of the primary winding. An ideal transformer is 100 percent efficient
because            all the        it receives.          of core and copper losses, the efficiency of
even     best practical transformer is less     100 percent. Expressed as an equation,

                                                 power output - -
                                                                P,
                                            E* = power          P,,

where Eff = efficiency
       P, = power output from secondary, W
      Pp = power       to primary, W
CHAP. 161                                        TRANSFORMERS                                              325


Example 16.7 What        the efficiency of a transformer if it draws 900 W and delivers 600 W?
                                          P,
                                    Eff = -                                                              ( 16-5)
                                          PP
                                           E
                                        _- - -   - 0.667 = 66.7%      Ans.


Example 16.8 A transformer is 90 percent efficient. If it delivers 198 W from a 110-V line, find the power
input and the primary current.

                                                    Eff = -P,
                                                           P P

Solve for power input P,.

                                     p =s=  198 -220w
                                                  =                   Ans.
                                        Eff 0.90
Write the power input formula.
                                                    P, = v,r,
Solve for I,.

                                           v,
                                       I,=!&--      220
                                                    110 - 2 A      Ans.


Example 16.9 A transformer draws 160 W from a 120-V line            delivers 24 V at 5 A. Find
                                          P, = 160 W, given
                                          P, = V,Is = 24(5) = 120 W

Then                              ER = -
                                       ps = -
                                            120 - 0.75 = 75%            Ans.
                                       P,   160



TRANSFORMER RATINGS
   Transformer capacity is rated in kilovoltamperes. Since power in a n a c circuit depends o n the
power factor of the load and the current in the load, an output rating in kilowatts must specify the
power factor.

Example 16.10 What is the kilowatt output of a 5-kVA 2400/120-V transformer serving loads                 the
following       factors: (a) 100 percent, ( b ) 80 percent, and (c) 40 percent? What the rated output current
of the transformer?
     Power output:
    (U)   P, = kVA X PF = 5(1.0) = 5 kW             Ans.
    ( b ) P, = 5(0.8) = 4kW      Ans.
    (c) P, = 30.4) = 2kW         Ans.
Current output:
                                                    P, = l,V,
Solving for I,,



Since rated current is determined by the rated kilovoltamperage, the full-load current of 41.7 A is supplied
the transformer at the three different PFs even though the kilowatt output is          for each case.
326                                        TRANSFORMERS                                        [CHAP. 16


IMPEDANCE RATIO
     A maximum amount of power is transferred from one circuit to another when the impedances
of the two circuits are equal or matched. If the two circuits have unequal impedances, a coupling
transformer may be used as an impedance-matching device between the two circuits. By con-
structing the transformer’s winding so that it has a definite turns ratio, the transformer can perform
any impedance-matching function. The turns ratio establishes the proper relationship between the
ratio of the primary and secondary winding impedances. This relationship is expressed by the
equation

                                                                                                    ( 16-6)

Taking the square root of both sides, we obtain

                                                                                                    (16-7)

where Np = number of turns on primary
      N, = number of turns on secondary
      Zp = impedance of primary, R
      2, = impedance of secondary, R

Example 16.11 Find the turns ratio of a transformer used to match a 14400-R load to a 400-R load.

                                                                                                    (16-7)




Example 16.12 Find the turns ratio of a transformer to        a 20-R load to a 72000-R load.
   Use Eq. (16-7).




Example 16.13 The secondary load of a step-down transformer with a turns ratio of 5 : 1 is 900 R. Find the
impedance of the primary.



Solve for Zp and substitute given

                             2, =   (25z, (;j
                                           =      (WO)= 22 500R         Ans.




AUTOTRANSFORMER
    An autotransformer is a special type of power transformer. It consists of only one wind-
ing. By tapping, or connecting, at points along the length of the winding, different voltages may
be obtained. The autotransformer (Fig. 16-3) has a single              between terminals A and
C. The winding tapped and a wire brought out as terminal B. Winding AC is the primary while
winding BC is the secondary. The simplicity of the autotransformer makes it economical and
space-saving. However, it does not provide electrical isolation between primary and secondary
circuits.
CHAP. 161                                   TRANSFORMERS                                                327

                     A




                     c                                                                c
                               Fig. 16-3 Autotransformer schematic diagram

Example 16.14 An autotransformer             200 turns is           to a 120-V line       16-3). To obtain
24-V output, find the number of turns of the           and the turn number at             transformer should
be                  from terminal A.



                                               24
                                            = -200 = 40 turns
                                      V S
                               Ns = -                                   Ans.
                                    v, N       120
Since the secondary turns include primary, the B tap should where the turn number is 160 (160 = 200 - 40).
If tap B is made movable, the autotransformer becomes a variable transformer. As the tap is
ward toward C, the secondary          decreases.

TRANSFORMER LOSSES AND EFFICIENCY
    Actual transformers have copper losses and core losses. Copper           the power lost in the
primary      secondary windings due to the ohmic resistance of the windings. Copper loss in watts
is obtained by the formula
                                  Copper       = I$,    +I~R,                               (16-8)
where   Ip = primary current, A
         I, = secondary current, A
        R, = resistance of the primary winding,
        R, = resistance of the secondary winding, R
    Core loss is caused by two factors: hysteresis loss       eddy-current loss. Hysteresis loss is
the energy       by reversing the magnetic field in the core as the magnetizing alternating current
rises                  reverses direction. Eddy-current loss                   of induced currents
circulating in the core material.
     Copper loss in both             may. be measured by means of a wattmeter. The wattmeter is
placed in the primary             of the transformer while the secondary is                      The
voltage          to the primary is then increased       the rated           current is flowing in the
short-circuited secondary. At that point the wattmeter will read the total copper loss. Core loss
may be                    by a wattmeter in the primary          by applying                   to the
primary with the secondary circuit open.
     The efficiency of an actual transformer is expressed as follows:
                                   power output -
                                                - -P,
                            Eff =                                                                    (16-5)
                                    power          Pp
                                 -
                                               power output
                                   power output + copper loss + core loss
                                                VJ, x PF
and                         Eff =                                                                    ( 16-9)
                                    (VJS x PF) + copper loss + core loss
where    PF = power factor of the load
328                                                TRANSFORMERS                                           [CHAP. 16


Example 16.15 A 10: 1 step-down 5-kVA transformer has a full-load secondary current rating of 50 A. A
short-circuit test for copper loss at a full               a wattmeter reading of 100 W. If the resistance of the
primary              0 . 6 0 , find the resistance of the secondary winding      the power loss in the secondary.
    Use Eq. (16-8).
                                         Copper loss = I i R , + IIR, = 100 W
To find I, at full load, write Eq. (16-4).



from which

Solve for R, from the copper-loss equation above.
                            I:Rs = 100 - I i R ,
                                   100 - I i R , - 100 - 52(0.6) = 0.034R
                              R, =                                                  Ans.
                                       15              502
                       Power loss in secondary = I:Rs = 502(0.034)= 85 W               Ans.
or                Power loss in secondary = 100 - I % R , = 100 - 52(0.6) = 85 W              Ans.

Example 16.16 An open-circuit test for core loss in the 5-kVA transformer of Example 16.15 gives a reading
of 70 W. If the PF of the load 85 percent, find the efficiency of the transformer at full load.
                                                         VJ, x P F
                                   Eff =                                                                         ( 16-9)
                                             (VJ, x PF) + copper loss + core loss
                                  VJ, = transformer rating = 5 kVA = 5000 VA
                         P F = 0.85           Copper loss = 100 W       Core loss = 70 W
Substitute known values and solve.
                                      SOW(0.85)
                        Eff =                           4250 = 0.962 = 96.2%           Ans.
                                5000(0.85) + 100 + 70 = 4420


NOILOAD CONDITION
    If the secondary winding of a transformer is left open-circuited (Fig. 16-4a), the primary
current is very low and is referred to as the no-load current. The no-load current produces the
magnetic flux and supplies the hysteresis and eddy-current losses in the core. Therefore, the
no-load current IE consists of two components: the magnetizing-current component IM and the
core-loss component IH. The magnetizing current IM lags the applied primary voltage Vp by 90°,
while the core-loss component IH is always in phase with Vp (Fig. 16-4b). Note also that the
primary applied voltage Vp and the induced secondary voltage V, are shown 180" out of phase with



                  -
each other. Since in practice IH is small in comparison with IM, the magnetizing current IM is very
nearly equal to the total no-load current IE. IE is also called the exciting current.




      +T/ll[T;
             /P                 1s +                             "*                                 IH      "P
                                                                 <                                  \




                                              Open-circuit
                                              secondary



                                                                                     I;\,            /E
                   ( a ) No-load condition                                   ( b ) Phasor diagram
                       Fig. 16-4 Iron-core transformer with the secondary open-circuited
CHAP. 161                                         TRANSFORMERS                                             329


Example 16.17 When the secondary of a 120/240-V transformer is open, the primary current is 0.3 A at a P F
of 20 percent. The transformer is rated at 4 kVA. Find (a) the full-load current I,, (b) the no-load exciting
current IE, (c) the core-loss current IH,and ( d ) the magnetizing current IM. (e) Determine the percentages of
each current with respect to full-load current. cf) Draw the phasor diagram.
                                                           transformer kVA rating
                                   Full-load current =
                                                               primary voltage
                                                        = ---33.3 A
                                                    I p4000                    Ans.
                                                           120
     The primary current measured at no load (secondary open) is the exciting current IE. Thus,
                                                   IE   = 0.3 A      Ans.
     From Fig. 16-4b,
                             IH    = I E COS 6 = I E X PF = 0.3(0.2) = 0.06 A          Ans.
     From Fig. 16-4b,
                                                  IM = IE sin 6
                                                   8 = arccos0.2 = 78.5"
     Then                         IM = 0.3 sin 78.5" = 0.3(0.980) = 0.294 A           Ans.
     Percent no-load primary current (exciting current) to full-load primary current:
                                          -OS3
                                            - - 0.0090 = 0.90%              Ans.
                                           33.3
     Percent core-loss current to full-load current:
                                          - - - 0.0018 = 0.18%
                                          0.06                              Ans.
                                           33.3
     Percent magnetizing current to full-load current:

                                       - - - 0.0088 = 0.88%
                                       0.294                            Ans.
                                        33.3
    Notice that the magnetizing current (0.294 A) has nearly the same values as the no-load primary current
    (0.3 A).
    Phasor diagram: See Fig 16-5.

                               = 240 V            IH = 0.06 A       Vp = 120 V, reference




                                            Fig. 16-5 Phasor diagram



COIL POLARITY
    The symbol for a transformer gives no indication of the phase of the voltage across the
secondary since the phase of that voltage actually depends on the direction of the windings around
the core. To solve this problem, polarity dots are used to indicate the phase of primary and
secondary signals. The voltages are either in phase (Fig. 16-6a) or 180" out of phase with respect
to the primary voltage (Fig. 16-6b).
330                                                TRANSFORMERS                                           [CHAP. 16




                                                                                              0
                          (a) Voltages in phase                             ( b ) Voltages out of phase
                                   Fig. 16-6 Polarity                 of transformer coils


                                                Solved Problems
16.1   A power transformer is      to couple electric energy from a power-supply    to one or
       more components of the system. In one type of power transformer (Fig. 16-7), there are
       three separate secondary windings, each designed for a different          output. The
       primary of the transformer is connected to a 120-V source of supply           has 100
       turns. Find the number of turns on each secondary.




                                                               t   N5 = ?
                                                                               600-V
                                                                               high-voltage
                                                                               winding




                                                               f
                                                                               6.3-V
                                                                   N5 = ?      filament
                                                                               winding

                                             I

                                                               fL  N, = ?
                                                                               2.5-v
                                                                               filament
                                                                               winding


                                             Primary                    Secondary

                                      Fig.   16-7 Power transformer
                                                       diagram

       Find N, by using Eq. ( 1 6 - 1 ) .



       For the 600-V secondary:               N, =           100 = 500 turns           Ans.
                                                       120
                                                        6.3
       For the 6.3-V secondary:                N, = -
                                                    120
                                                        100 = 5 turns               Ans.

                                                     2.5
       For the 2.5-V secondary:                 Ns = -
                                                     120
                                                         100 = 2 turns              Ans.
CHAP. 161                                        TRANSFORMERS                                                          33 1


16.2   A transformer whose           is connected to a 110-V source delivers 11 V. If the number
       of turns on the secondary is 20 turns, find the number of turns on the primary.
       extra turns must be added to the secondary if it              33 V?
              Find Np by        Eq. (16-1).
                     V
                     9 = -E
                     v,   ,
                           N
                           N,
                                   from which              Np =       <
                                                                      V
                                                                              Ns = @
                                                                                   ! (20) = 200 turns
                                                                                    11
                                                                                                              Ans.

                                                         v s            33
       For Vs = 3 3 V ,                       Ns = -  Np = -200                          = 60 turns
                                                   VP      110
       Hence 40 turns (60- 20) must                               Ans.


16.3   A step-down transformer with a turns ratio of 50 000: 500 has its primary connected to a
       200oO-V transmission         If the secondary is connected to a 25-R load, find (a) the
       secondary voltage, (b) the secondary current, (c) the         current, and ( d ) the power
       output.
                                                     T R = NA = - 50000-
                                                                  --     100
                                                           N,      500    1
                                                                      !!E=%
       (a)                                                                                                           (16-1)
                                                                      Ns            vs
              Then
                                          Ns
                                     vs = -vp     1
                                              = -(20OOO)                            = 200v             Ans.
                                          NP    100
       ( b ) By Ohm's law,

                                                 I, - "s         - -200
                                                                      - - 8A                    Ans.
                                                           R L        25

       (c)                                                            b = L                                          (16-3)
                                                                      vs            Ip


              Then                               Ip= -
                                                     200 8 = 0.08A                              Ans.
                                                          20 OOO
       ( d ) P, = V,I, = 200(8) = 1600W                  Ans.


16.4   A 7 : 5 step-down transformer draws 2 A. Find the secondary current.


                                                                 4N = L
                                                                 Ns           I p

                                                     N            7
       Then                                   I, =              = - 2 = 2.8A                    Ans.
                                                     N,           5


16.5   A transformer draws 2.5 A at 110 V and           7.5 A at 24 V to a load with a PF of 100
       percent. Find the efficiency of the transformer.
                                      Power in = Pp = VpIp= llO(2.5) = 275 W
                                     Power out = P, = VsIs = 247.5) = 180 W
                                               Eff = P,
                                                          P P


                                                     = 180 = 0.655 = 65.5%                            Ans.
                                                          275
332                                            TRANSFORMERS                                            [CHAP. 16


16.6   A transformer delivers 550 V at 80 mA at an efficiency of 90 percent. If the primary current
       is 0.8 A, find the power input in voltamperes and the primary voltage.
                                   Power out = P, = V,I, = 550(80 x 10-3) = 44 VA

                                           Eff = 5                                                         ( 16-5)
                                                 PP
       Then                         Power in = P, = -
                                                    ps = -
                                                         44 - 48.9VA                 Ans.
                                                    Eff 0.9
       Since the P F of the load    not specified, power is expressed in voltamperes.           Also

                               Pp = V,I,      so      v, = EI,l = -
                                                                  48'9 - 61.1 V
                                                                  0.8
                                                                                          Ans.


16.7   The rating of a power-supply transformer that is to be operated from a 60-Hz 120-V power
       line      read as follows: 600 CT (center tap) at 90 mA, 6.3 V at 3 A, 5 V at 2 A. Find
       the wattage rating of this transformer.
            The wattage rating is the total power delivered at 100 percent PF. It is found by adding the power
       ratings of the individual secondary windings. The general formula to use is P, = VJ,.
                               At     V tap: P, = 600(90 x 1O-q = 54 W
                               At 6.3V tap: P, = 6.3(3)         = 18.9W
                                 At 5 V tap: P, = 5(2)          = IOW
                                                 Total power PT = 82.9 W                 Ans.


16.8   The step-down autotransformer at a power factor of unity is designed to deliver 240V to a
       load of 5 kW (Fig. 16-8). The autotransformer's primary winding connected to a 6 W V
       source, Find the current in (a) the load, (b) the primary winding, and ( c ) the secondary
       winding.




                                    Fig. 16-8 Step-down autotransformer



       ( a ) Write P, = V,I,   (Is in this case is the load current). So
                                             I , = - '= - - 'Oo0 - 20.8A     Ans.
                                                     V, 240
       (b) At unity P F and 100 percent efficiency, V,I, = VJS. So



       ( c ) The current in the secondary winding       I, - I, by Kirchhoff's current law.
                                           I, - I, = 20.8 - 8.3 = 12.5 A          Ans.
CHAP. 161                                        TRANSFORMERS                                                        333


16.9   A 60: 1 output transformer is      to match an output transistor to a 4-IR voice                            Find
       the impedance of the output circuit.



       In this case the output transistor is in the primary circuit and the voice coil          in the secondary circuit.

                                      2, =   (2s  2, = (YJ(4) = 14400R                 Ans.



16.10 A 1 : 10 step-up transformer is used to match a 500-0 line to a circuit.                    Find
       of the circuit.



       In this case the circuit is     the secondary.

                              2, = (55. = (yj(500)= 5 0 W n = 50kR                            Ans.
                                    NP


16.11 A 240/720-V 5-kVA transformer undergoes a short-circuit test for copper loss. At the start
       of the test, the primary                       the ammeter across the secondary indicates
       rated           secondary current. The           resistance of the primary winding is 0.05 IR
       and that of the secondary winding is 1.5 IR. Calculate the total copper loss.

       Step 1. Calculate the copper loss in the secondary.

                                           Full-load secondary current Is = -
                                                                            'Oo0 - 6.94A
                                                                             720
                so                                   I f R , = (6.94)2(1.5) = 72.2 W

       Step 2. Calculate the copper loss in the primary.

                                             Full-load primary current Ip = 5ooo = 20.8 A         ,
                                                                             240
                so                                  I i R , = (20.8)2(0.05) = 21.6 W

       Step 3. Calculate total copper loss. The total copper loss is the sum of the losses in both windings.
                                     Total copper loss = I i R p + I f R ,                                        ( 16-8)
                                                       = 21.6 + 72.2 = 93.8 W            Ans.
                The wattmeter in the primary circuit should read 93.8 W.


16.12 On an open-circuit test for core loss in the 5-kVA transformer of Prob. 16.11, when the
       primary            set at the               of 240V, the wattmeter in the primary
       indicates 80 W. If the power factor of the load 0.8, find the efficiency of the transformer
       at full
           Use the efficiency formula:

                           Eff =                VJ, x P F
                                                                                                                  ( 26-9)
                                 ( V L x PF) + copper loss + core loss
                               -       5 OOO(0.8)
                                                          4000 - 0.958 = 95.8%                  Ans.
                                 SOOO(0.8) + 93.8 + 80 = 4174 -
334                                            TRANSFORMERS                                           [CHAP. 16


16.13 When the secondary of a power transformer is open, the no-load current in the primary




                                                                                               AIM
      0.4 A. If the power factor of the input                    is 0.10, find the exciting current IE,
      the core-loss current I,,, and the magnetizing current IM.
           The          current is the same as the no-load primary current.
      so                          IE = 0.4A         Ans.
      From                                        Fig. 16-9),
                   I~ = I~ COS e = o.qo.10)= 0.04 A             Ans.
                  PF = cos8 = 0.10             8 = arccos 0.10 = 84.3"
      Then         IM   = I E sin 8 = 0.4 sin 84.3" = 0.4A       Ans.                              Fig. 1 6 9


16.14 The no-load current taken    a 110/220-V transformer is 0.7 A. The transformer is rated at
      2.2kVA. If the          factors of the primary       secondary circuits are equal, find the
      primary current when the secondary is supplying its rated 2.2 kVA to the load.

                                    Full-load secondary current I, = -
                                                                     2200 - 10A
                                                                     220
      Since    PFs for primary                               at full load, the main component of load current in
      the primary is



      To 1; we add               0.7-A no-load current. So
                                          I, = 20 + 0.7 = 20.7 A           Ans.
      Because       no-load components IH and IM of the                current are much          the load-current
      component I;, the no-load current can be added                                  of vectorially to the total
      load-current.

16.15 Indicate the correct polarity dots for the secondary                   (Fig. 16-10a).

                   Input              output                       Input              output




                                           Fig. 161Oa Coil polarity

          For diagram (1) (Fig. 16-10~),
                                       the         at point B with respect to ground     the same        as
      the voltage at point A with respect to ground (Fig. 16-lob). For diagram (2) (Fig. 16-10~),the
      secondary windings are now reversed so that the output voltage at B is now 180" out of phase with the
      input        at A (Fig. 16-1Oc).
CHAP. 161                                   TRANSFORMERS                                                   335




                      3c                                                      e
                                    Supplementary Problems
16.16 A bell transformer              voltage from 110 to 1 1 V. If there are 20 turns in the secondary, find
      the         of turns on the primary and the                 Ans. N,,= 200 turns; TR = 10:1

16.17 Find               at the      plugs connected to the             of a coil with 60 turns on the
      and          turns on                if the                        to a 12-V alternator.
      Ans.     V, = 7200V

16.18   A coil with a primary winding of 80 turns must supply 4800 V. If the primary is connected to an 8-V
        source, find the number of turns on                   Ans. N, = 48 OOO turns

16.19 The 110-Vprimary a power                   220 turns.                               to deliver ( a ) 600 V,
      (b) 35 V, and (c) 12.5 V. Find the     of turns needed on
      Ans. (a) N, = 1200 turns; (b) N, = 70 turns; (c) N, = 25 turns

16.20 The secondary coil of a transformer     100 turns               voltage is 10 V. If the turns
      is 18: 1, find ( a ) the         (b) the primary voltage, (c) the          of primary turns.
      Ans. (a) V R = 18:1; ( b ) V, = 180V; (c) Np = 1800 turns

16.21 A step-down                   with 55 turns                    to a 110-V ac line. If a 28-V output is
      desired, find the                                           be tapped.
      Ans. N, = 14 turns; tap at turn 31

16.22   A 2201110-V step-down            in a stage-lighting circuit           12 A from the line. Find the
        current             Ans. 1, = 24A

16.23   An ideal transformer with 2400 turns on the primary      600 turns on                  9.5 A at 100
        percent PF from a 220-V line. Find Is,V,,and P,.         Ans. Z, = 38 A; V, = 55 V; P, = 2090 W

16.24 A transformer with 96 percent efficiency is               to a 2OOO-V line. If it     10 OOO VA, find
      the power input P,, in voltamperes                             Z, .  Ans. Pp = 10417 VA; I,, = 5.21 A

16.25   A transformer with an efficiency of 85 percent              650V and 120mA       100 percent PF to a
        secondary load. The primary current is 0.6A.          Find the power input           primary voltage.
        Ans. Pp = 91.8W; V,, = 153V
336                                           TRANSFORMERS                                          [CHAP. 16


16.26   The three secondary coils of a power-supply transformer deliver 85 mA at 300 V, 1.4 A at 12.6 V, and
        1.9 A at 2.5 V. Find the power delivered to the secondary loads. Find also the efficiency if the
        transformer draws 55 W from a 110-V line. (Assume unity P F in both primary and secondary.)
        Ans. P, = 47.9 W; Eff = 87.1%

16.27   Find the current rating   each winding of a 100-kVA               6 0 - H ~transformer.
        Ans. Primary winding, 41.7 A; secondary winding, 833.3 A

16.28   Find the turns ratio of a transformer used to match a 50-R load to a 450-0 line.       Ans. TR = 3: 1

16.29   Find the turns ratio of a transformer used to match a 30-fl load to a 48 000-R load.
        Ans. TR = 1:40

16.30   Find the turns ratio of the transformer needed to match a load       4 0 0 0 0 to three 12-0 speakers in
        parallel.   Aw. TR = 31.6: 1 = 32: 1

16.31   A 1: 18 step-up output transformer is    to match a microphone with a grid circuit impedance of
        35 kR. Find the impedance of the microphone.    Ans. 2, = 108R

16.32   A 6: 1 step-down transformer matches an input load to a secondary load of 800n. Find the
        impedance of the input.  Ans. 2, = 28.8 kR

16.33   A step-up autotransformer requires 100 turns for its 120-V primary. To obtain an output of 300 V, find
        the number of turns that must be added to the primary.       Ans. 150 turns (Ns= 250 turns)

16.34   A load     12 kW at 480 V and 100 percent P F is to be        by a step-down autotransformer whose
        high-voltage            connected to a 1200-V source. Find the current in (a) the load, (b) the primary
        winding,      (c) the secondary winding.
        Ans. (a) I , = 25 A; ( b ) I, = 10A; ( c ) I, - I, = 15 A

16.35   An autotransformer starter used to start an induction motor on a 440-V line applies 70 percent of line
        voltage to the motor during the starting period. If the motor current is 140A at start-up, what is the
        current drawn from the line?     Ans. 9 8 A

16.36   A step-down 600/480-V autotransformer supplies a 10-kVA load. Find the primary and secondary line
        currents and the current in the winding        to both           secondary circuits.
        Ans. I, = 16.7 A; I, = 20.8 A; I, - I, = 4.1 A

16.37   A 5-kVA 480/120-V transformer is equipped with                taps so that it    be operated at 480,
        456, or 432 V depending on the tap setting. Find the current in the high-voltage       for each tap
        setting. The transformer supplies the rated kVA load at 120 V in each case.
        Ans. 10.4 at 480 V; 11.0 A at 456 V; 11.6 at 432

16.38   A transformer with 800 turns in its                    160 turns in its secondary is rated 10kVA at
        480 V. Find (a) the VR, (b) the primary voltage, (c) the rated full-load secondary current, and (d) the
        rated full-load         current, disregarding the no-load current.
        Ans. (a) 5 : 1; ( b ) 2400V; ( c ) 20.8A; (d) 4.16A

16.39   A 250-kVA 2400/480-V transformer has copper losses of 3760 W and core losses of 1060 W. What is
        the efficiency    the transformer is fully     at 0.8 PF?    Ans. Eff = 97.6%

16.40   An open-circuit test for core loss in a 240/720-V             transformer gives a reading of 60 W. The
        measured resistance of the low side winding 0.03 R and that of the high side winding 1.3 R. Find
        (a) the total copper loss and ( b ) the transformer efficiency       the power factor of the load 0.85.
        Ans. (a) Total copper loss = 303 W; ( b ) Eff = 95.9%
CHAP. 161                                       TRANSFORMERS                                                    337


16.41   A short-circuit test for copper loss at full         a wattmeter reading of 175 W. The transformer
        undergoing the test is a 240/24-V step-down transformer that has a full-load secondary current rating of
        60A. If the resistance of the primary is 0.7R, find the resistance of the secondary.
        Ans. R, = 0.042R

16.42   On an open-circuit test for core loss, the transformer of Prob. 16.41 takes 1.5A from a 240-V ac
        source. The wattmeter reads 95 W. Determine ( a ) the copper loss at no-load condition and (b) the
        core loss.
        Ans. (a) 1.58 W; (b) 93.4 W (In        case, the wattmeter reading of 95 W indicates core loss
        copper loss at no

16.43   A 10-kVA 2400/24O-V 60-Hz transformer has a primzry          resistance of 6 0 and a secondary
        winding resistance of 0.06 0. The core loss  W. Find ( a ) the full-load copper loss and (b) the
        efficiency of the transformer when             at 0.9PF.
        Ans. (a) 208W; (b) Eff = 97.1%

16.44   If the transformer of Prob. 16.43 had operated at 0.6PF with the same kilovoltampere loading, what
        would be its               Ans. Eff = 95.7%

16.45   A 10-kVA 7200/120-V transformer has a resistance in the primary               of 12 R and in the secondary
        winding of 0.0033 R. Find the copper loss ( a ) at full load, (b) at half load (5 kVA),     (c) at a load of
        2 kVA.      Ans. (a) 46.0W; (b) 11.5 W; (c) 1.84W

16.46   A 5-kVA 480/240-V transformer has its secondary open-circuited. Under this no-load condition, the
        primary current is 0.15 A at a P F of 0.6. Find (a) the full-load current I,, ( b ) the core-loss component
        IH,(c) the magnetizing current IM,and ( d ) the percentage of each current with respect to full-load
        current; and (e) draw the phasor diagram.
        Ans. (a) Ip = 10.4A; ( b ) IH = 0.09 A; (c) IM = 0.12 A; ( d ) percent exciting current = 1.44%;
        percent core-loss current = 0.87%; percent magnetizing current = 1.15%; (e) see Fig. 16-11
                             V, = 240 V           rH = 0.09 A            Vp = 480 V




                                            Fig. 16-11 Phasor diagram


16.47   If a transformer circuit has a polarity    16-12) where the output is 180" out of phase    the input,
        show the correct polarity dots when the leads to the load are reversed.     Ans. See Fig. 16-13.


                          Input              output




                                   0




                                        0                                              0
                                          Fig. 16-12 Transformer polarity
338                                                TRANSFORMERS                                                [CHAP. 16


                           Input                 output




                                                                                    3t
                                      0                                                   0        0




                                           0

                                                          Fig. 16-13

16.48   A secondary                                is shown in Fig. 16-14. Indicate the correct output
        at points A and B.          Ans. See Fig. 16-15.




                                       0                    A


                                                                         At output A :



                                                                         At output B:


                                                            B
                    Fig. 16-14 Center-tap                                          Mg. 16-15

16.49   Two                      be connected          to obtain a higher voltage by connecting
        together in parallel and                             in series.    the secondaries are properly
        the output will be the sum of the secondary             If the output is the           of the
        voltages,                  to one                   may be reversed,          of the primary windings
        may be reversed. For a series               of two transformers, each with a secondary          of 4 V
        (Fig. 16-16),find the
        Am. (a) Output = 8 V ; ( b ) output = 0 V (secondaries

                       0      0                                                                0       .




                                                                                                           b
                                               output                                                          output = ?

  A C input                                                            A C input
                                                                                                       0




                                0

                           (4                                                                      (b)
                                      Fig. 16-16 Connection of two
                                                                         Chapter 17
                             Three-Phase Systems
CHARACTERISTICS OF THREE-PHASE
    A three-phase (3-4) system is a combination of three single-phase (1-4) systems. In a 3-4
balanced system, the power comes from an ac generator that produces three separate but equal
voltages, each of which is out of phase with the other voltages by 120" (Fig. 17-1). Although 1-4
circuits are widely used in electrical systems, most generation and distribution of alternating current is
3-4. Three-phase circuits require less weight of conductors than 1-4 circuits of the same
power rating; they permit flexibility in the choice of voltages; and they can be used for single-phase
loads. Also, 3-4 equipment is smaller in size, lighter in weight, and more efficient than 1-4 machinery
of the same rated capacity. The three phases of a 3-4 system may be connected in two ways. If the
three common ends of each phase are connected together at a common terminal marked N for neutral,
and the other three ends are connected to the 3-4 line, the system is wye- or Y-connected (Fig.
17-2a). If the three phases are connected in series to form a closed loop, the system is delta- or
A-connected (Fig. 17-2b).



                                         "3



  +V


    0                                                                                               v2
                                                      Time   +
  -v
        I
        ,1200+       1200&       12004



                 ( a ) Three sine wave voltages                     (b) Three corresponding phasor voltage!
                 Fig. 17-1 Three-phase alternating voltages with 120" between each phase




                               Line conductor

                          ( a ) Wye or Y connection               ( b ) Delta or A connection

                                   Fig. 17-2 Connections for 3-4 ac power

                                                       339
340                                          THREE-PHASE SYSTEMS                                 [CHAP. 17


THREEPHASE TRANSFORMER CONNECTIONS
    Three-phase transformers may consist of three separate but          1-4 transformers   a
single 3-4 unit                     windings. The                windings (three in the
and three in the          may be           to form a 3-4 bank in any     of four common ways
(Fig. 17-3). Each        winding is matched to the           winding drawn parallel to it.



                                                                                                 al d




      Primary                           Secondary     .       Primary                       Secondary

                ( a ) Delta-to-delta (A-A)                              (b) Wye-to-wye (Y-Y)-*




         T                                                                                       T
        V
        -
        vl-5                                        -
                                                    V
                                                    J5a
                                                          V
                                                                               I
                                                                               -
                                                                                15               7     JTV
                                                                                                         a




                (c)   Wye-to-delta (Y -A)                               (6) Delta-to-wye (A-Y)

Ng. 17-3 Common 3-41 transformer connections. The transformer windings are indicated                 the heavy
           lines. a = Nl/N2



     Shown                       currents in terms of the                line-to-line voltage V and
line current I, where a = N1/N2,the          of the        of primary                         A line
voltage is a voltage between              while a phase voltage is a voltage across a transformer
winding. A line current is a current in one of the        while a phase current is a current in the
transformer winding. Voltage and current ratings of the               transformers depend on the
connections         (Fig. 17-3) and are indicated in tabular              17-1) for convenience in
calculations.                     are assumed. The                          of each                is
one-third of the                       of the bank,           of the
CHAP. 171                                 THREE-PHASE SYSTEMS                                               34 1


          Table 17-1 Voltage and Current Relationships for Common 3-4 Transformer Connections

                I                    Primary                    I                 Secondary
  Transformer
  Connection  -1          Line                   Phase              Line               Phase
  (Primary to
  Secondary)        Voltage     Current    Voltage
                                                    1

                                                    1
                                                     Current    I
                                                             Voltage*
                                                                               7
                                                                         Current Voltage   Current




                                                                                          I         I



*a = NIIN2; d j = 1.73



Example 17.1 If the line voltage V is 2200V to a 3 - 4 transformer bank, find the voltage across each
transformer primary winding for all four types of transformer connection. Refer to Fig. 17-3 and Table 17-1.
A-A:                              Primary winding voltage = V = 2200V          Ans.

Y-Y:                          Primary winding voltage = T= -2200 - 1270V              Ans.
                                                        v 3 1.73

Y-A:                          Primary winding voltage = - = -    - 1270V
                                                            2200 -                    Ans.
                                                        vj  1.73
A-Y:                              Primary winding voltage = V = 2200 V         Ans.
It is clear that in any A connection the total voltage across any winding in the primary or secondary equals the
line voltage in the primary or secondary, respectively, because each winding is directly across the line. The
voltage in each winding will be out of phase by 120" with the voltages in the other windings.


Example 17.2 If the line current 1 is 20.8 A to a 3-4 transformer connection, find the current through each
primary winding for all four transformer configurations. Refer to Fig. 17-3 and Table 17-1.

A-A:                           Primary winding current = - = - - 12A               Ans.
                                                         dj 1.73
Y-Y:                              Primary winding current = 1 = 20.8 A         Ans.
Y-A:                              Primary winding current = 1 = 20.8 A         Ans.

h-Y:                           Primary winding current = - = - - 12A               Ans.
                                                         vj    *
                                                               '*
                                                                '

                                                             1.73
The current in each winding will be out of phase by 120" with the currents in the other windings.


Example 17.3 For each type of transformer connection, find the secondary line current and secondary phase
current if the primary line current I is A and the turns ratio is 2: 1. Refer to Fig. 17-3 and Table 17-1.
A-A:                          Secondary line current = a1 = 2(10.4) = 20.8 A          Ans.

                              Secondary phase current = - = -
                                                            2(10.4) - 12 A            Ans.
                                                        vj   1.73
342                                         THREE-PHASE SYSTEMS                                           [CHAP.17


Y-Y:                           Secondary line current = a1 = 2( 10.4) = 20.8 A               Ans.
                              Secondary            current = a1 = 2(10.4) = 20.8 A            Ans.
Y-A:                        Secondary line current = d3aI = 1.73(2)(10.4) = 36 A                Ans.
                              Secondary            current = a l = 2(10.4) = 20.8 A           Ans.

A-Y                                                        - 2(10.4) - 12A
                                Secondary line current = - ---                               Ans.
                                                         dj 1.73
                               Secondary           current = -    2(10*4) - 12A
                                                             a' = -                          Ans.
                                                             dj 1.73
The current in each secondary line will be out of phase by 120" with the currents in the other secondary
lines.           the current in each          winding will be out of phase by 120" with the currents in the
other secondary windings.


POWER IN BALANCED THREE-PHASE LOADS
    A balanced load has                        in each               winding (Fig. 17-4). The im-
pedance of each winding in the A load is shown       to Z,, (Fig. 17-4a),and in the Y load equal to
Zy (Fig. 17-4b). For either                       A, B, and C provide a three-phase              of
voltages.                    N in the                        fourth conductor of the three-phase
four-wire


            IL = J31p   +                                                      IL = Ip   *
                                                               A 0         A             m
Al
                                              7    vP
                                                               VL = J3vp



                                                               NO
                                                                          vL
                                                                                         I           2,




                                                               B O >(
                                                                               *
                                                                               'L

                                               C




      (0)   Balanced A load, 2, = 2, = Z , = Z ,                     (b) Balanced Y load, Z , = 2, = Z , = 2,
                                     Fig. 17-4 Three-phase                load types


    In a balanced A-connected load (Fig. 17-4a), as well as in the windings of a transformer,
line voltage V L and the windingor phase voltage Vp are            the line current It is fi times
the        current Ip. That
A -load:                                                VL =   vp                                               (17-1)
                                                        I L = VjIP                                              ( 17-2)
    For a balanced                        load (Fig. 17-4b),the line current IL and     winding or
current Ipare equal, the                 current IN is zero, and        voltage V L is fi times
voltage Vp. That is,
CHAP. 171                                 THREE-PHASE SYSTEMS                                                      343


Y load:                                               I L = Ip                                                ( 2 7-3)
                                                     IN   =0                                                  (27-4)
                                                     V L = *VP                                                (27-5)
(These             are also observed in Fig. 17-3 and      17-1.)
   Since the phase impedance of balanced Y or A loads have equal currents, the phase                               or
power of one phase             the total          Phase power Pp is
                                                  pp =    vPrpCOS e                                           ( 2 7-6)
and                 PT is
                                                PT    =   ~ v , ICOS, e                                       ( 2 7-7)
Since VL = V p [Eq. (17-Z)] and Ip = d 3 I J 3 from Eq. (17-2), for a balanced A load,
A load:                                      PT      = V ~ V L I L COS e                                      (27-8)
Since IL= Ip[Eq. (27-3)] and Vp = d 3 V J 3 from Eq. (27-5), for balanced Y loads, substitution
in Eq. (17-7) gives
Y load:                                      PT      = V ~ V L I L COS e                                      ( 2 7-8)
Thus the total-power formulas for A and Y loads are identical. 8 is the phase          between the
voltage      current of the load impedance, so cos 8 is the power factor of the load.
    The total apparent power ST in voltamperes          the total reactive power QT in voltamperes
reactive are related to total real     PT in watts (Fig. 17-5). Therefore, a balanced three-phase
load has the real power, apparent power,      reactive power given by the equations
                                             PT      = V ~ V L I L COS e                                      (27-8)
                                             ST      = VTVLIL                                                 (27-9)
                                             QT      = V ~ V L I L sin e                                    (27-20)

where       PT = total       power, W
             S T = total apparent power, VA
            Q T = total reactive power, VAR
            VL = line           V
              IL= line current, A
                                                                                           p , , kW
               8 = load
                                                                                 Fig. 17-5 Power-triangle
            dj = 1.73, a constant
                                                                                           ships for 3-4 circuit
Transformer ratings are specified            in kilovoltamperes. The relationships of voltage,
current, and       expressed in Eqs. (17-2) to (27-10) are applicable to all balanced 3-4 circuits.

Example 17.4 How much power is delivered by a balanced 3-4 system if each wire carries 20A and the
voltage                is 220 V at a P F of unity?
     Using Eq. (17-8),
                                       J ~e = 1.73(220)(20)(1) = 7612 w
                            pT = V ~ V COS                                              Ans.


Example 17.5 Each             of a 3-4 A-connected generator            a full-load current of 100 A at a voltage
of 240V      at a P F of 0.6 lagging (Fig. 17-6). Find the ( a ) line voltage, (b) line current, (c) 3-4 power in
kilovoltamperes, and ( d ) 3-4 power in kilowatts.
( a ) Use      (17-1).
                                         VL =     v, = 240v               Ans.
344                                         THREE-PHASE SYSTEMS                                             [CHAP. 17


( b ) Use Eq. (17-2).
                                    1L = 1.731, = 1.73(100) = 173A               Ans.
( c ) Use Eq. (17-9).
                        ST = V ~ V L I L= 1.73(240)(173) = 71 800 VA = 71.8 kVA             Ans.
                                  PT = ST COS 8 = 71.8(0.6) = 43.1 kW              Ans.




                                Ip = 100A   T
                                  Fig. 17-6 Three-phase A -connected generator



Example 17.6 Three resistances of 20 each are Y-connected        240-V 3-4 line operating at a PF of unity
(Fig. 17-7). Find the (a) current through each       ( b ) line current, and ( c ) power taken by the three
resistances.




( b ) Use Eq. (17-3).
                                                I L = I , = 6.94A        Ans.
( c ) Use Eq. (17-6).
                         PT   = 3 ~=        , e = 3(138.7)(6.94)(1) = 2890
                                   , ~ v , Icos                                    w       Ans.




                                                                     A




                                                                    “L




                                                                     B
                                                                           I
                                                                         240 V
                                                                                                     20 R
      240 V
                                                                     C

              Fig. 17-7 Y-connected load                                         Fig. 17-8 A-connected load
      CHAP. 171                                       THREE-PHASE SYSTEMS                                                                 345


      Example 17.7 Repeat                     17.6if the                                                  in delta       17-8).
      ( a ) Use Eq. (17-1).

                                               v, = V L = 240v
                                                r p =2,4 h =R,b = 240
                                                                   -=
                                                                   20                12A         Ans.

      (b) Use        (17-2).
                                             IL = vjIp= 1.73(12) = 20.8 A                        Ans.
      (c) Use        (17-6).
                                      PT   = 3V,Ip cos 8 = 3(240)(12)(1)             = 8640 W            Ans.
            Or          (17-8).
                                  P-,-= ~ v L I LCOS e = 1.73(240)(20.8)(1) = 8640 w                        Ans.

      Example 17.8 A 3-4 Y-connected                                       a four-wire 208-V ABC system
      17-9). Thirty      each rated at 120V and 2A, are to be connected                               Show the
      connection of the   load if the load is to be balanced,                                 by each
      the power         by the                       lamps are resistive.)


                                                                             Panel




hp[ . : . ; \    A
                       N
                                                                                                                              I
                                                           '1
                                                       120 v
                                                           I
                                                                I I
                                                                l        l
                                                                              Phase B


                                                                                        I
                                                                                                          b 10 lamps




                                    Fig. 17-9 Load connections for a balanced 3-4 circuit


          The line voltage is given as VL = 208V. The                                       voltage or                            V,.   Using
      Eq. (17-9,



      In order to have a balanced     30 lamps must be distributed                               across three 120-V phases. Thus, 10
      lamps are connected across each 120-V phase (Fig. 17-9). The                                           Pp is      by using Eq.
      ( 1 7-6):


                                                  (                 ")
                     Pp = V,I, cos 8 = 120 10lamps x lamp (1) = 120(20)(1) = 2400 w                                    Ans.

      and                  is three           the phase
                                             PT = 3Pp= 3(2.400) = 7200 W                        Ans.



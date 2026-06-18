---
normalized_id: shared-pdf-reference-ebook-pdf-mathematics-an-introduction-to-cybernetics
exam_code: SHARED
material_scope: (ebook-pdf) - mathematics - an introduction to cybernetics.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/(ebook-pdf) - Mathematics - An Introduction to Cybernetics.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-ebook-pdf-mathematics-an-introduction-to-cybernetics

By the same author                                                 AN INTRODUCTION TO
DESIGN FOR A BRAIN
                                                                   CYBERNETICS
                                                                                  by
                                                                      W. ROSS ASHBY
              Copyright © 1956, 1999
                                                                      M.A., M.D.(Cantab.), D.P.M.
          by The Estate of W. Ross Ashby                                 Director of Research
                                                                      Barnwood House, Gloucester
      Non- profit reproduction and distribution of this text for
         educational and research reasons is permitted
          providing this copyright statement is included
                      Referencing this text:
        W. Ross Ashby, An Introduction to Cybernetics,
        Chapman & Hall, London, 1956. Internet (1999):
             http://pcp.vub.ac.be/books/IntroCyb.pdf

                  Prepared for the Principia                             SECOND IMPRESSION
                      Cybernetica Web
           With kind permission of the Estate trustees
                           Jill Ashby
                         Sally Bannister
                           Ruth Pettit
                          Many thanks to
                           Mick Ashby
                              Concept
                       Francis Heylighen
                             Realisation
                       Alexander Riegler

                                                                              LONDON
                     with additional help from
                          Didier Durlinger                          CHAPMAN & HALL LTD
                            An Vranckx
                                                                      37 ESSEX STREET WC2
                        Véronique Wilquet
                                                                                1957
                  First published 1956
                Second impression 1957
                                                                                PR E FAC E
                                                          Many workers in the biological sciences—physiologists,
                                                       psychologists, sociologists—are interested in cybernetics and
                                                       would like to apply its methods and techniques to their own spe-
                                                       ciality. Many have, however, been prevented from taking up the
                                                       subject by an impression that its use must be preceded by a long
                                                       study of electronics and advanced pure mathematics; for they
                                                       have formed the impression that cybernetics and these subjects
                                                       are inseparable.
                                                          The author is convinced, however, that this impression is false.
                                                       The basic ideas of cybernetics can be treated without reference to
                                                       electronics, and they are fundamentally simple; so although
                                                       advanced techniques may be necessary for advanced applications,
                                                       a great deal can be done, especially in the biological sciences, by
                                                       the use of quite simple techniques, provided they are used with a
                                                       clear and deep understanding of the principles involved. It is the
                                                       author’s belief that if the subject is founded in the common-place
                                                       and well understood, and is then built up carefully, step by step,
                                                       there is no reason why the worker with only elementary mathe-
                                                       matical knowledge should not achieve a complete understanding
                                                       of its basic principles. With such an understanding he will then be
                                                       able to see exactly what further techniques he will have to learn if
                                                       he is to proceed further; and, what is particularly useful, he will be
                                                       able to see what techniques he can safely ignore as being irrele-
                                                       vant to his purpose.
                                                          The book is intended to provide such an introduction. It starts
                                                       from common-place and well-understood concepts, and proceeds,
                                                       step by step, to show how these concepts can be made exact, and
                                                       how they can be developed until they lead into such subjects as
                                                       feedback, stability, regulation, ultrastability, information, coding,
                                                       noise, and other cybernetic topics. Throughout the book no
                                                       knowledge of mathematics is required beyond elementary alge-
                                                       bra; in particular, the arguments nowhere depend on the calculus
                                                       (the few references to it can be ignored without harm, for they are
                                                       intended only to show how the calculus joins on to the subjects
                                                       discussed, if it should be used). The illustrations and examples are
                                                       mostly taken from the biological, rather than the physical, sci-
                                                       ences. Its overlap with Design for a Brain is small, so that the two
                 Catalogue No. 567/4                   books are almost independent. They are, however, intimately
                                                       related, and are best treated as complementary; each will help to
        MADE AND PRINTED IN GREAT BRITAIN BY
WILLIAM CLOWES AND SONS, LIMITED, LONDON AND BECCLES
                                                       illuminate the other.
                                                                                         v
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                             PREFACE

   It is divided into three parts.                                        Exercises have been numbered within their own sections; thus
   Part I deals with the principles of Mechanism, treating such           Fig. 9/14/2 is the second figure in S.9/14. A simple reference, e.g.
matters as its representation by a transformation, what is meant by       Ex. 4, is used for reference within the same section. Whenever a
“stability”, what is meant by “feedback”, the various forms of            word is formally defined it is printed in bold-faced type.
independence that can exist within a mechanism, and how mech-                I would like to express my indebtedness to Michael B. Sporn,
anisms can be coupled. It introduces the principles that must be          who checked all the Answers. I would also like to take this oppor-
followed when the system is so large and complex (e.g. brain or           tunity to express my deep gratitude to the Governors of Barnwood
society) that it can be treated only statistically. It introduces also    House and to Dr. G. W. T. H. Fleming for the generous support that
the case when the system is such that not all of it is accessible to      made these researches possible. Though the book covers many top-
direct observation—the so-called Black Box theory.                        ics, these are but means; the end has been throughout to make clear
   Part II uses the methods developed in Part I to study what is          what principles must be followed when one attempts to restore nor-
meant by “information”, and how it is coded when it passes                mal function to a sick organism that is, as a human patient, of fear-
through a mechanism. It applies these methods to various prob-            ful complexity. It is my faith that the new understanding may lead
lems in biology and tries to show something of the wealth of pos-         to new and effective treatments, for the need is great.
sible applications. It leads into Shannon’s theory; so after reading
this Part the reader will be able to proceed without difficulty to the    Barnwood House                                     W. ROSS ASHBY
study of Shannon’s own work.                                                Gloucester
   Part III deals with mechanism and information as they are used
in biological systems for regulation and control, both in the inborn
systems studied in physiology and in the acquired systems studied
in psychology. It shows how hierarchies of such regulators and
controllers can be built, and how an amplification of regulation is
thereby made possible. It gives a new and altogether simpler
account of the principle of ultrastability. It lays the foundation for
a general theory of complex regulating systems, developing fur-
ther the ideas of Design for a Brain. Thus, on the one hand it pro-
vides an explanation of the outstanding powers of regulation
possessed by the brain, and on the other hand it provides the prin-
ciples by which a designer may build machines of like power.
   Though the book is intended to be an easy introduction, it is not
intended to be merely a chat about cybernetics—it is written for
those who want to work themselves into it, for those who want to
achieve an actual working mastery of the subject. It therefore con-
tains abundant easy exercises, carefully graded, with hints and
explanatory answers, so that the reader, as he progresses, can test his
grasp of what he has read, and can exercise his new intellectual mus-
cles. A few exercises that need a special technique have been marked
thus: *Ex. Their omission will not affect the reader’s progress.
   For convenience of reference, the matter has been divided into
sections; all references are to the section, and as these numbers are
shown at the top of every page, finding a section is as simple and
direct as finding a page. The section is shown thus: S.9/14—indi-
cating the fourteenth section in Chapter 9. Figures, Tables, and

                                  vi                                                                       vii
                                                                                                             CONTENTS

                                                                                    8: TRANSMISSION OF VARIETY . . . . . .                  .   .   .   .   .   . 140
                                                                                         Inversion . . . . . . . . . . . .                  .   .   .   .   .   . 145
                                                                                         Transmission from system to system. .              .   .   .   .   .   . 151
                    CO N TEN T S                                                         Transmission through a channel . . .               .   .   .   .   .   . 154
                                                                                    9: INCESSANT TRANSMISSION .         .   .   .   .   .   .   .   .   .   .   . 161
                                                                                         The Markov chain . . .         .   .   .   .   .   .   .   .   .   .   . 165
                                                Page                                     Entropy. . . . . . . .         .   .   .   .   .   .   .   .   .   .   . 174
Preface . . . . . . . . . . . . . . . . . . . . . . v                                    Noise . . . . . . . .          .   .   .   .   .   .   .   .   .   .   . 186
Chapter                                                                                 PART THREE: REGULATION AND CONTROL
 1: WHAT IS NEW . . . . . . . . . . . . . . . . . . 1
     The peculiarities of cybernetics . . . . . . . . . . 1                         10: REGULATION IN BIOLOGICAL SYSTEMS . . . . . . 195
     The uses of cybernetics . . . . . . . . . . . . . 4                                 Survival. . . . . . . . . . . . . . . . . . . 197
                PART ONE: MECHANISM                                                 11: REQUISITE VARIETY .    .   .    .   .   .   .   .   .   .   .   .   .   . 202
                                                                                         The law. . . . . .    .   .    .   .   .   .   .   .   .   .   .   .   . 206
 2: CHANGE . . . . . . . . . . . . . . . . . . . . 9                                     Control . . . . . .   .   .    .   .   .   .   .   .   .   .   .   .   . 213
      Transformation . . . . . . . . . . . . . . . . 10                                  Some variations . .   .   .    .   .   .   .   .   .   .   .   .   .   . 216
      Repeated change . . . . . . . . . . . . . . . 16                              12: THE ERROR-CONTROLLED REGULATOR .                    .   .   .   .   .   . 219
 3: THE DETERMINATE MACHINE . . . . . . . . . . . 24                                     The Markovian machine . . . . . .                  .   .   .   .   .   . 225
      Vectors . . . . . . . . . . . . . . . . . . . 30                                   Markovian regulation . . . . . . .                 .   .   .   .   .   . 231
                                                                                         Determinate regulation. . . . . . .                .   .   .   .   .   . 235
 4: THE MACHINE WITH INPUT . . .           .   .   .   .   .   .   .   .   .   42        The power amplifier. . . . . . . .                 .   .   .   .   .   . 238
      Coupling systems . . . . . .         .   .   .   .   .   .   .   .   .   48        Games and strategies . . . . . . .                 .   .   .   .   .   . 240
      Feedback . . . . . . . . .           .   .   .   .   .   .   .   .   .   53
      Independence within a whole .        .   .   .   .   .   .   .   .   .   55   13: REGULATING THE VERY LARGE SYSTEM .                      .   .   .   .   . 244
      The very large system . . . .        .   .   .   .   .   .   .   .   .   61        Repetitive disturbance . . . . . . . .                 .   .   .   .   . 247
                                                                                         Designing the regulator . . . . . . .                  .   .   .   .   . 251
 5: STABILITY . . . . . . . . . . . . . . . . . . . 73                                   Quantity of selection . . . . . . . .                  .   .   .   .   . 255
      Disturbance . . . . . . . . . . . . . . . . . 77                                   Selection and machinery . . . . . . .                  .   .   .   .   . 259
      Equilibrium in part and whole . . . . . . . . . . 82
                                                                                    14: AMPLIFYING REGULATION .         .   .   .   .   .   .   .   .   .   .   . 265
 6: THE BLACK BOX. . . . . . . . .             .   .   .   .   .   .   .   . 86          What is an amplifier? . .      .   .   .   .   .   .   .   .   .   .   . 265
      Isomorphic machines . . . . .            .   .   .   .   .   .   .   . 94          Amplification in the brain     .   .   .   .   .   .   .   .   .   .   . 270
      Homomorphic machines . . . .             .   .   .   .   .   .   .   . 102         Amplifying intelligence .      .   .   .   .   .   .   .   .   .   .   . 271
      The very large Box . . . . . .           .   .   .   .   .   .   .   . 109
      The incompletely observable Box          .   .   .   .   .   .   .   . 113    REFERENCES . . . . . . . . . . . . . . . . . . . 273
                                                                                    ANSWERS TO EXERCISES . . . . . . . . . . . . . . 274
                   PART TWO: VARIETY
                                                                                    INDEX . . . . . . . . . . . . . . . . . . . . . 289
 7: QUANTITY OF VARIETY. . .       .   .   .   .   .   .   .   .   .   .   . 121
      Constraint . . . . . . .     .   .   .   .   .   .   .   .   .   .   . 127
      Importance of constraint .   .   .   .   .   .   .   .   .   .   .   . 130
      Variety in machines.. . .    .   .   .   .   .   .   .   .   .   .   . 134
                                                                                                                   ix
Chapter                                                              1

                    WHAT IS NE W

1/1. Cybernetics was defined by Wiener as “the science of control
and communication, in the animal and the machine”—in a word,
as the art of steermanship, and it is to this aspect that the book will
be addressed. Co-ordination, regulation and control will be its
themes, for these are of the greatest biological and practical inter-
est.
  We must, therefore, make a study of mechanism; but some
introduction is advisable, for cybernetics treats the subject from a
new, and therefore unusual, angle. Without introduction, Chapter
2 might well seem to be seriously at fault. The new point of view
should be clearly understood, for any unconscious vacillation
between the old and the new is apt to lead to confusion.
1/2. The peculiarities of cybernetics. Many a book has borne the
title “Theory of Machines”, but it usually contains information
about mechanical things, about levers and cogs. Cybernetics, too,
is a “theory of machines”, but it treats, not things but ways of
behaving. It does not ask “what is this thing?” but “what does it
do?” Thus it is very interested in such a statement as “this variable
is undergoing a simple harmonic oscillation”, and is much less
concerned with whether the variable is the position of a point on
a wheel, or a potential in an electric circuit. It is thus essentially
functional and behaviouristic.
   Cybernetics started by being closely associated in many ways
with physics, but it depends in no essential way on the laws of
physics or on the properties of matter. Cybernetics deals with all
forms of behaviour in so far as they are regular, or determinate, or
reproducible. The materiality is irrelevant, and so is the holding or
not of the ordinary laws of physics. (The example given in S.4/15
will make this statement clear.) The truths of cybernetics are not
conditional on their being derived from some other branch of sci-
ence. Cybernetics has its own foundations. It is partly the aim of
this book to display them clearly.
                                  1
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                         WHAT IS NEW

1/3. Cybernetics stands to the real machine—electronic, mechani-           The biologist knows and uses the same principle when he gives
cal, neural, or economic—much as geometry stands to a real object       to Amphioxus, or to some extinct form, a detailed study quite out Of
in our terrestrial space. There was a time when “geometry” meant        proportion to its present-day ecological or economic importance.
such relationships as could be demonstrated on three-dimensional           In the same way, cybernetics marks out certain types of mech-
objects or in two-dimensional diagrams. The forms provided by           anism (S.3/3) as being of particular importance in the general the-
the earth—animal, vegetable, and mineral—were larger in number          ory; and it does this with no regard for whether terrestrial
and richer in properties than could be provided by elementary           machines happen to make this form common. Only after the study
geometry. In those days a form which was suggested by geometry          has surveyed adequately the possible relations between machine
but which could not be demonstrated in ordinary space was suspect       and machine does it turn to consider the forms actually found in
or inacceptable. Ordinary space dominated geometry.                     some particular branch of science.
   Today the position is quite different. Geometry exists in its own
right, and by its own strength. It can now treat accurately and         1/5. In keeping with this method, which works primarily with the
coherently a range of forms and spaces that far exceeds anything        comprehensive and general, cybernetics typically treats any
that terrestrial space can provide. Today it is geometry that con-      given, particular, machine by asking not “what individual act will
tains the terrestrial forms, and not vice versa, for the terrestrial    it produce here and now?” but “what are all the possible behav-
forms are merely special cases in an all-embracing geometry.            iours that it can produce?”
   The gain achieved by geometry’s development hardly needs to             It is in this way that information theory comes to play an essen-
be pointed out. Geometry now acts as a framework on which all           tial part in the subject; for information theory is characterised
terrestrial forms can find their natural place, with the relations      essentially by its dealing always with a set of possibilities; both its
between the various forms readily appreciable. With this increased      primary data and its final statements are almost always about the
understanding goes a correspondingly increased power of control.        set as such, and not about some individual element in the set.
   Cybernetics is similar in its relation to the actual machine. It        This new point of view leads to the consideration of new types
takes as its subject-matter the domain of “all possible machines”,      of problem. The older point of view saw, say, an ovum grow into
and is only secondarily interested if informed that some of them        a rabbit and asked “why does it do this”—why does it not just stay
have not yet been made, either by Man or by Nature. What cyber-         an ovum?” The attempts to answer this question led to the study
netics offers is the framework on which all individual machines         of energetics and to the discovery of many reasons why the ovum
may be ordered, related and understood.                                 should change—it can oxidise its fat, and fat provides free energy;
                                                                        it has phosphorylating enzymes, and can pass its metabolises
1/4. Cybernetics, then, is indifferent to the criticism that some of    around a Krebs’ cycle; and so on. In these studies the concept of
the machines it considers are not represented among the machines        energy was fundamental.
found among us. In this it follows the path already followed with          Quite different, though equally valid, is the point of view of
obvious success by mathematical physics. This science has long          cybernetics. It takes for granted that the ovum has abundant free
given prominence to the study of systems that are well known to         energy, and that it is so delicately poised metabolically as to be, in
be non-existent—springs without mass, particles that have mass          a sense, explosive. Growth of some form there will be; cybernetics
but no volume, gases that behave perfectly, and so on. To say that      asks “why should the changes be to the rabbit-form, and not to a
these entities do not exist is true; but their non-existence does not   dog-form, a fish-form, or even to a teratoma-form?” Cybernetics
mean that mathematical physics is mere fantasy; nor does it make        envisages a set of possibilities much wider than the actual, and then
the physicist throw away his treatise on the Theory of the Mass-        asks why the particular case should conform to its usual particular
less Spring, for this theory is invaluable to him in his practical      restriction. In this discussion, questions of energy play almost no
work. The fact is that the massless spring, though it has no physi-     part—the energy is simply taken for granted. Even whether the sys-
cal representation, has certain properties that make it of the high-    tem is closed to energy or open is often irrelevant; what is important
est importance to him if he is to understand a system even as           is the extent to which the system is subject to determining and con-
simple as a watch.                                                      trolling factors. So no information or signal or determining factor

                                   2                                                                      3
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                           WHAT IS NEW

may pass from part to part without its being recorded as a signifi-       tem in which complexity is outstanding and too important to be
cant event. Cybernetics might, in fact, be defined as the study of sys-   ignored Such systems are, as we well know, only too common in
tems that are open to energy but closed to information and                the biological world!
control—systems that are “information-tight” (S.9/19.).                      In the simpler systems, the methods of cybernetics sometimes
                                                                          show no obvious advantage over those that have long been
1/6. The uses of cybernetics. After this bird’s-eye view of cyber-        known. It is chiefly when the systems become complex that the
netics we can turn to consider some of the ways in which it prom-         new methods reveal their power.
ises to be of assistance. I shall confine my attention to the                Science stands today on something of a divide. For two centuries
applications that promise most in the biological sciences. The            it has been exploring systems that are either intrinsically simple or
review can only be brief and very general. Many applications              that are capable of being analysed into simple components. The fact
have already been made and are too well known to need descrip-            that such a dogma as “vary the factors one at a time” could be
tion here; more will doubtless be developed in the future. There          accepted for a century, shows that scientists were largely concerned
are, however, two peculiar scientific virtues of cybernetics that         in investigating such systems as allowed this method; for this
are worth explicit mention.                                               method is often fundamentally impossible in the complex systems.
   One is that it offers a single vocabulary and a single set of con-     Not until Sir Donald Fisher’s work in the ’20s, with experiments
cepts suitable for representing the most diverse types of system.         conducted on agricultural soils, did it become clearly recognised that
Until recently, any attempt to relate the many facts known about,         there are complex systems that just do not allow the varying of only
say, servo-mechanisms to what was known about the cerebellum              one factor at a time—they are so dynamic and interconnected that
was made unnecessarily difficult by the fact that the properties of       the alteration of one factor immediately acts as cause to evoke alter-
servo-mechanisms were described in words redolent of the auto-            ations in others, perhaps in a great many others. Until recently, sci-
matic pilot, or the radio set, or the hydraulic brake, while those of     ence tended to evade the study of such systems, focusing its attention
the cerebellum were described in words redolent of the dissecting         on those that were simple and, especially, reducible (S.4/14).
room and the bedside—aspects that are irrelevant to the similari-            In the study of some systems, however, the complexity could
ties between a servo-mechanism and a cerebellar reflex. Cyber-            not be wholly evaded. The cerebral cortex of the free-living
netics offers one set of concepts that, by having exact                   organism, the ant-hill as a functioning society, and the human
correspondences with each branch of science, can thereby bring            economic system were outstanding both in their practical impor-
them into exact relation with one other.                                  tance and in their intractability by the older methods. So today we
   It has been found repeatedly in science that the discovery that        see psychoses untreated, societies declining, and economic sys-
two branches are related leads to each branch helping in the devel-       tems faltering, the scientist being able to do little more than to
opment of the other. (Compare S.6/8.) The result is often a mark-         appreciate the full complexity of the subject he is studying. But
edly accelerated growth of both. The infinitesimal calculus and           science today is also taking the first steps towards studying “com-
astronomy, the virus and the protein molecule, the chromosomes            plexity” as a subject in its own right.
and heredity are examples that come to mind. Neither, of course,             Prominent among the methods for dealing with complexity is
can give proofs about the laws of the other, but each can give sug-       cybernetics. It rejects the vaguely intuitive ideas that we pick up
gestions that may be of the greatest assistance and fruitfulness.         from handling such simple machines as the alarm clock and the
The subject is returned to in S.6/8. Here I need only mention the         bicycle, and sets to work to build up a rigorous discipline of the sub-
fact that cybernetics is likely to reveal a great number of interest-     ject. For a time (as the first few chapters of this book will show) it
ing and suggestive parallelisms between machine and brain and             seems rather to deal with truisms and platitudes, but this is merely
society. And it can provide the common language by which dis-             because the foundations are built to be broad and strong. They are
coveries in one branch can readily be made use of in the others.          built so that cybernetics can be developed vigorously, without t e
                                                                          primary vagueness that has infected most past attempts to grapple
1/7. The complex system. The second peculiar virtue of cybernet-          with, in particular, the complexities of the brain in action.
ics is that it offers a method for the scientific treatment of the sys-      Cybernetics offers the hope of providing effective methods for

                                   4                                                                        5
              A N IN T R O D U C T IO N T O C Y BERNETI CS

the study, and control, of systems that are intrinsically extremely
complex. It will do this by first marking out what is achievable
(for probably many of the investigations of the past attempted the
impossible), and then providing generalised strategies, of demon-
strable value, that can be used uniformly in a variety of special
cases. In this way it offers the hope of providing the essential
methods by which to attack the ills—psychological, social, eco-
nomic—which at present are defeating us by their intrinsic com-
plexity. Part III of this book does not pretend to offer such
methods perfected, but it attempts to offer a foundation on which                  PART ONE
such methods can be constructed, and a start in the right direction.
                                                                                     ME CHANI S M

                                                                       The properties commonly ascribed to any object
                                                                       are, in last analysis, names for its behavior.
                                                                                                            (Herrick)




                                   6
Chapter                                                             2

                         C HANGE

2/1. The most fundamental concept in cybernetics is that of “dif-
ference”, either that two things are recognisably different or that
one thing has changed with time. Its range of application need not
be described now, for the subsequent chapters will illustrate the
range abundantly. All the changes that may occur with time are
naturally included, for when plants grow and planets age and
machines move some change from one state to another is implicit.
So our first task will be to develop this concept of “change”, not
only making it more precise but making it richer, converting it to
a form that experience has shown to be necessary if significant
developments are to be made.
   Often a change occurs continuously, that is, by infinitesimal
steps, as when the earth moves through space, or a sunbather’s
skin darkens under exposure. The consideration of steps that are
infinitesimal, however, raises a number of purely mathematical
difficulties, so we shall avoid their consideration entirely. Instead,
we shall assume in all cases that the changes occur by finite steps
in time and that any difference is also finite. We shall assume that
the change occurs by a measurable jump, as the money in a bank
account changes by at least a penny. Though this supposition may
seem artificial in a world in which continuity is common, it has
great advantages in an Introduction and is not as artificial as it
seems. When the differences are finite, all the important ques-
tions, as we shall see later, can be decided by simple counting, so
that it is easy to be quite sure whether we are right or not. Were
we to consider continuous changes we would often have to com-
pare infinitesimal against infinitesimal, or to consider what we
would have after adding together an infinite number of infinitesi-
mals—questions by no means easy to answer.
   As a simple trick, the discrete can often be carried over into the
continuous, in a way suitable for practical purposes, by making a
graph of the discrete, with the values shown as separate points. It
                                  9
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                              CHANGE

is then easy to see the form that the changes will take if the points        Another example of a transformation is given by the simple
were to become infinitely numerous and close together.                    coding that turns each letter of a message to the one that follows
   In fact, however, by keeping the discussion to the case of the         it in the alphabet, Z being turned to A; so CAT would become
finite difference we lose nothing. For having established with cer-       DBU. The transformation is defined by the table:
tainty what happens when the differences have a particular size                                          A→B
we can consider the case when they are rather smaller. When this                                         B→C
case is known with certainty we can consider what happens when                                             …
they are smaller still. We can progress in this way, each step being                                     Y→Z
well established, until we perceive the trend; then we can say what                                      Z→A
is the limit as the difference tends to zero. This, in fact, is the
method that the mathematician always does use if he wants to be           Notice that the transformation is defined, not by any reference to
really sure of what happens when the changes are continuous.              what it “really” is, nor by reference to any physical cause of the
   Thus, consideration of the case in which all differences are           change, but by the giving of a set of operands and a statement of
finite loses nothing, it gives a clear and simple foundation; and it      what each is changed to. The transformation is concerned with
can always be converted to the continuous form if that is desired.        what happens, not with why it happens. Similarly, though we may
   The subject is taken up again in S.3/3.                                sometimes know something of the operator as a thing in itself (as
                                                                          we know something of sunlight), this knowledge is often not
2/2. Next, a few words that will have to be used repeatedly. Con-         essential; what we must know is how it acts on the operands; that
sider the simple example in which, under the influence of sun-            is, we must know the transformation that it effects.
shine, pale skin changes to dark skin. Something, the pale skin, is          For convenience of printing, such a transformation can also be
acted on by a factor, the sunshine, and is changed to dark skin.          expressed thus:
That which is acted on, the pale skin, will be called the operand,
                                                                                                   ↓
the factor will be called the operator, and what the operand is                                         A B…Y Z
changed to will be called the transform. The change that occurs,                                        B C…Z A
which we can represent unambiguously by                                   We shall use this form as standard.
                      pale skin → dark skin
                                                                          2/4. Closure. When an operator acts on a set of operands it may
is the transition.                                                        happen that the set of transforms obtained contains no element
   The transition is specified by the two states and the indication       that is not already present in the set of operands, i.e. the transfor-
of which changed to which.                                                mation creates no new element. Thus, in the transformation

                                                                                                   ↓
                    TR A N S F O R M A TION                                                                A B…Y Z
                                                                                                          B C…Z A
2/3. The single transition is, however, too simple. Experience has
shown that if the concept of “change” is to be useful it must be          every element in the lower line occurs also in the upper. When this
enlarged to the case in which the operator can act on more than           occurs, the set of operands is closed under the transformation. The
one operand, inducing a characteristic transition in each. Thus the       property of “closure”, is a relation between a transformation and
operator “exposure to sunshine” will induce a number of transi-           a particular set of operands; if either is altered the closure may
tions, among which are:                                                   alter.
                                                                             It will be noticed that the test for closure is made, not by refer-
                   cold soil → warm soil                                  ence to whatever may be the cause of the transformation but by
unexposed photographic plate → exposed plate                              reference of the details of the transformation itself. It can there-
           coloured pigment → bleached pigment                            fore be applied even when we know nothing of the cause respon-
  Such a set of transitions, on a set of operands, is a transformation.   sible for the changes.

                                  10                                                                       11
                  A N IN T R O D U C T IO N T O C Y BERNETI CS                                                            CHANGE

Ex. 1: If the operands are the positive integers 1, 2, 3, and 4, and the operator is    2/6. Notation. Many transformations become inconveniently
    “add three to it”, the transformation is:                                           lengthy if written out in extenso. Already, in S.2/3, we have been
                                       1 2 3 4
                                    ↓ 4 5 6 7                                           forced to use dots ... to represent operands that were not given
                                                                                        individually. For merely practical reasons we shall have to
    Is it closed ?                                                                      develop a more compact method for writing down our transforma-
Ex. 2. The operands are those English letters that have Greek equivalents (i.e.         tions though it is to be understood that, whatever abbreviation is
    excluding j, q, etc.), and the operator is “turn each English letter to its Greek
    equivalent”. Is the transformation closed ?                                         used, the transformation is basically specified as in S.2/3. Several
Ex. 3: Are the following transformations closed or not:                                 abbreviations will now be described. It is to be understood that
                    a b c d                         f g p q                             they are a mere shorthand, and that they imply nothing more than
            A: ↓ a a a a                  B: ↓
                                                    g f q p                             has already been stated explicitly in the last few sections.
                                                                                           Often the specification of a transformation is made simple by
                    f g p
           C: ↓                           D: ↓ fg gf                                    some simple relation that links all the operands to their respective
                    g f q
                                                                                        transforms. Thus the transformation of Ex. 2/4/1 can be replaced
Ex. 4: Write down, in the form of Ex. 3, a transformation that has only one oper-
    and and is closed.                                                                  by the single line
Ex. 5: Mr. C, of the Eccentrics’ Chess Club, has a system of play that rigidly pre-                        Operand → operand plus three.
    scribes, for every possible position, both for White and slack (except for          The whole transformation can thus be specified by the general
    those positions in which the player is already mated) what is the player’s best
    next move. The theory thus defines a transformation from position to posi-          rule, written more compactly,
    tion. On being assured that the transformation was a closed one, and that C                                    Op. → Op. + 3,
    always plays by this system, Mr. D. at once offered to play C for a large
    stake. Was D wise?                                                                  together with a statement that the operands are the numbers 1, 2 3
                                                                                        and 4. And commonly the representation can be made even
2/5. A transformation may have an infinite number of discrete                           briefer, the two letters being reduced to one:
operands; such would be the transformation                                                                    n → n + 3 (n = 1, 2, 3, 4)

                              ↓
                              1 2 3 4 …                                                    The word “operand” above, or the letter n (which means exactly
                              4 5 6 7 …                                                 the same thing), may seem somewhat ambiguous. If we are think-
where the dots simply mean that the list goes on similarly without                      ing of how, say, 2 is transformed, then “n” means the number 2
end. Infinite sets can lead to difficulties, but in this book we shall                  and nothing else, and the expression tells us that it will change to
consider only the simple and clear. Whether such a transformation                       5. The same expression, however, can also be used with n not
is closed or not is determined by whether one cannot, or can                            given any particular value. It then represents the whole transfor-
(respectively) find some particular, namable, transform that does                       mation. It will be found that this ambiguity leads to no confusion
not occur among the operands. In the example given above, each                          in practice, for the context will always indicate which meaning is
particular transform, 142857 for instance, will obviously be found                      intended.
among the operands. So that particular infinite transformation is                       Ex. 1: Condense into one line the transformation
closed.                                                                                                                         1 2 3
                                                                                                                       A: ↓ 11 12 13
Ex. 1: In A the operands are the even numbers from 2 onwards, and the trans-
    forms are their squares:                                                            Ex. 2: Condense similarly the transformations:

                                                                                                           {              {                   { 23 →→ 1/2
                                       2 4 6 …                                                              1→ 7              1 →1               1 →1
                             A: ↓      4 16 36 …                                                     a:     2 → 14 b:         2 →4       c:
                                                                                                            3 → 21            3 →9                    1/3
    Is A closed?

                                                                                                           { 32 →→ 89 e: { 32 →→ 11           { 23 →→ 23
Ex. 2: In transformation B the operands are all the positive integers 1, 2, 3, …and                            1 → 10         1 →1               1 →1
    each one’s transform is its right-hand digit, so that, for instance, 127 → 7,                     d:                                 f:
    and 6493 → 3. Is B closed?

                                        12                                                                                    13
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                                CHANGE

  We shall often require a symbol to represent the transform of                         transformation that is single-valued but not one-one will be
such a symbol as n. It can be obtained conveniently by adding a                         referred to as many-one.
prime to the operand, so that, whatever n may be, n → n'. Thus, if
the operands of Ex. 1 are n, then the transformation can be written                     Ex. 1: The operands are the ten digits 0, 1, … 9; the transform is the third decimal
                                                                                            digit of log10 (n + 4). (For instance, if the operand is 3, we find in succession,
as n' = n + 10 (n = 1, 2, 3).                                                               7, log107, 0.8451, and 5; so 3 → 5.) Is the transformation one-one or many-
                                                                                            one? (Hint: find the transforms of 0, 1, and so on in succession; use four-fig-
Ex. 3: Write out in full the transformation in which the operands are the three             ure tables.)
    numbers 5, 6 and 7, and in which n' = n – 3. Is it closed?
Ex. 4: Write out in full the transformations in which:                                  2/9. The identity. An important transformation, apt to be dis-
                             (i) n'   = 5n (n = 5, 6, 7);                               missed by the beginner as a nullity, is the identical transforma-
                            (ii) n'   = 2n2 (n = – 1, 0,1).                             tion, in which no change occurs, in which each transform is the
Ex. 5: If the operands are all the numbers (fractional included) between O and I,       same as its operand. If the operands are all different it is necessar-
    and n' = 1/2 n, is the transformation closed? (Hint: try some representative        ily one-one. An example is f in Ex. 2/6/2. In condensed notation
    values for n: 1/2, 3/4, 1/4, 0.01, 0.99; try till you become sure of the answer.)   n' = n.
Ex. 6: (Continued) With the same operands, is the transformation closed if n' =
    1/(n + 1)?                                                                          Ex. 1: At the opening of a shop’s cash register, the transformation to be made on
                                                                                            its contained money is, in some machines, shown by a flag. What flag shows
2/7. The transformations mentioned so far have all been charac-                             at the identical transformation ?
terised by being “single-valued”. A transformation is single-val-                       Ex. 2: In cricket, the runs made during an over transform the side’s score from
ued if it converts each operand to only one transform. (Other                               one value to another. Each distinct number of runs defines a distinct trans-
                                                                                            formation: thus if eight runs are scored in the over, the transformation is
types are also possible and important, as will be seen in S.9/2 and                         specified by n' = n + 8. What is the cricketer’s name for the identical trans-
12/8.) Thus the transformation                                                              formation ?
                                      A B C D
                                 ↓    B A A D
                                                                                        2/10. Representation by matrix. All these transformations can be
                                                                                        represented in a single schema, which shows clearly their mutual
is single-valued; but the transformation                                                relations. (The method will become particularly useful in Chapter
                                                                                        9 and subsequently.)
                               A          B      C              D
                   ↓ B or D
                                                                                           Write the operands in a horizontal row, and the possible trans-
                                          A B or C              D                       forms in a column below and to the left, so that they form two
                                                                                        sides of a rectangle. Given a particular transformation, put a “+”
is not single-valued.                                                                   at the intersection of a row and column if the operand at the head
                                                                                        of the column is transformed to the element at the left-hand side;
2/8. Of the single-valued transformations, a type of some impor-                        otherwise insert a zero. Thus the transformation
tance in special cases is that which is one-one. In this case the
                                                                                                                    ↓ A C C
transforms are all different from one another. Thus not only does                                                       A B C
each operand give a unique transform (from the single-valued-
ness) but each transform indicates (inversely) a unique operand.                        would be shown as
Such a transformation is                                                                                        ↓    A     B      C
                            A B C D E F G H                                                                    A     +      0      0
                       ↓    F H K L G J E M                                                                    B     0      0      0
                                                                                                               C     0      +      +
This example is one-one but not closed.
On the other hand, the transformation of Ex. 2/6/2(e) is not one-                       The arrow at the top left corner serves to show the direction of the
one, for the transform “1” does not indicate a unique operand. A                        transitions. Thus every transformation can be shown as a matrix.
                                        14                                                                                       15
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                            CHANGE

   If the transformation is large, dots can be used in the matrix if                 The generation and properties of such a series must now be con-
their meaning is unambiguous. Thus the matrix of the transforma-                     sidered.
tion in which n' = n + 2, and in which the operands are the positive                    Suppose the second transformation of S.2/3 (call it Alpha) has
integers from 1 onwards, could be shown as                                           been used to turn an English message into code. Suppose the
                                                                                     coded message to be again so encoded by Alpha—what effect will
                ↓      1        2       3       4       5      …                     this have ? The effect can be traced letter by letter. Thus at the first
            1      0      0      0     0      0      …                               coding A became B, which, at the second coding, becomes C; so
            2                                        …                               over the double procedure A has become C, or in the usual nota-
                   0      0      0     0      0                                      tion A → C. Similarly B → D; and so on to Y → A and Z → B.
            3      +      0      0     0      0      …                               Thus the double application of Alpha causes changes that are
            4      0      +      0     0      0      …                               exactly the same as those produced by a single application of the
            5      0      0      +     0      0      …                               transformation
            …      …      …     …     …       …      …                                                                A B … Y Z
(The symbols in the main diagonal, from the top left-hand corner,                                                 ↓ C D … A B
have been given in bold type to make clear the positional relations.)
                                                                                     Thus, from each closed transformation we can obtain another
Ex. 1: How are the +’s distributed in the matrix of an identical transformation?     closed transformation whose effect, if applied once, is identical
Ex. 2: Of the three transformations, which is (a) one-one, (b) single-valued but     with the first one’s effect if applied twice. The second is said to be
    not one-one, (c) not single-valued ?                                             the “square” of the first, and to be one of its “powers” (S.2/14). If
              (i)                      (ii)                      (iii)               the first one was represented by T, the second will be represented
     ↓ A B C D                 ↓ A B C D                 ↓ A B C D                   by T2; which is to be regarded for the moment as simply a clear
     A + 0 0 +                 A 0 + 0 0                   A 0 0 0 0                 and convenient label for the new transformation.
     B 0 0 + 0                 B 0 0 0 +                   B + 0 0 +
     C + 0 0 0                 C + 0 0 0                   C 0 + 0 0                                a b c
     D 0 + 0 +                 D 0 0 + 0                   D 0 0 + 0                 Ex. 1: If A: ↓ c c a' what is A2?
Ex. 3: Can a closed transformation have a matrix with (a) a row entirely of zeros?   Ex. 2: Write down some identity transformation; what is its square?
    (b) a column of zeros ?                                                          Ex. 3: (See Ex. 2/4/3.) What is A2?
Ex. 4: Form the matrix of the transformation that has n' = 2n and the integers as
    operands, making clear the distribution of the +’s. Do they he on a straight     Ex. 4: What transformation is obtained when the transformation n' = n+ 1 is
    line? Draw the graph of y = 2x; have the lines any resemblance?                      applied twice to the positive integers? Write the answer in abbreviated
                                                                                         form, as n' = . . . . (Hint: try writing the transformation out in full as in
Ex. 5: Take a pack of playing cards, shuffle them, and deal out sixteen cards face       S.2/4.)
    upwards in a four-by-four square. Into a four-by-four matrix write + if the
    card in the corresponding place is black and o if it is red. Try some examples   Ex. 5: What transformation is obtained when the transformation n' = 7n is applied
    and identify the type of each, as in Ex. 2.                                          twice to the positive integers?
Ex. 6: When there are two operands and the transformation is closed, how many        Ex. 6: If K is the transformation
    different matrices are there?                                                                                       ↓ A B C
Ex. 7: (Continued). How many are single-valued ?
                                                                                                                     A    0        +   +
                    R EP EA TED C H A N GE                                                                           B    0        0   0
                                                                                                                     C    +        0   0
2/11. Power. The basic properties of the closed single-valued                            what is K2? Give the result in matrix form. (Hint: try re-writing K in some
transformation have now been examined in so far as its single                            other form and then convert back.)
action is concerned, but such a transformation may be applied                        Ex. 7: Try to apply the transformation W twice:
more than once, generating a series of changes analogous to the
series of changes that a dynamic system goes through when active.                                                     W: ↓ f g h
                                                                                                                            g h k

                                       16                                                                                     17
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                                   CHANGE

2/12. The trial in the previous exercise will make clear the impor-       So the double application causes the same change as a single
tance of closure. An unclosed transformation such as W cannot be          application of the transformation m' = 4m – 9.
applied twice; for although it changes h to k, its effect on k is
undefined, so it can go no farther. The unclosed transformation is        2/14. Higher powers. Higher powers are found simply by adding
thus like a machine that takes one step and then jams.                    symbols for higher transforms, n"', etc., and eliminating the sym-
                                                                          bols for the intermediate transforms. Thus, find the transforma-
2/13. Elimination. When a transformation is given in abbreviated          tion caused by three applications of n' = 2n – 3. Set up the
arm, such as n' = n + 1, the result of its double application must be     equations relating step to step:
found, if only the methods described so far are used, by re-writing
he transformation to show every operand, performing the double                                  n' = 2n – 3
application, and then re-abbreviating. There is, however, a                                     n" = 2n' – 3
quicker method. To demonstrate and explain it, let us write out In                              n"' = 2n" – 3
full he transformation T: n' = n + 1, on the positive integers, show-     Take the last equation and substitute for n", getting
ing he results of its double application and, underneath, the gen-
eral symbol for what lies above:                                                                      n"' = 2(2n' – 3) – 3
                                                                                                          = 4n' – 9.
                     T: ↓ 1 2 3 … n …                                     Now substitute for n':
                           2 3 4 … n' …
                     T: ↓ 3 4 5 … n" …                                                           n"' = 4(2n – 3) – 9
n" is used as a natural symbol for the transform of n', just as n' is                                = 8n – 21.
the transform of n.                                                       So the triple application causes the same changes as would be
   Now we are given that n' = n + 1. As we apply the same trans-          caused by a single application of m' = 8m – 21. If the original was
formation again it follows that n" must be I more than n". Thus           T, this is T3.
n" = n' + 1.
   To specify the single transformation T 2 we want an equation           Ex. 1: Eliminate n' from n" = 3n' and n' = 3n. Form the transformation corre-
                                                                              sponding to the result and verify that two applications of n' = 3n gives the
that will show directly what the transform n" is in terms of the              same result.
operand n. Finding the equation is simply a matter of algebraic           Ex. 2: Eliminate a' from a" = a' + 8 and a' = a + 8.
elimination: from the two equations n" = n' + 1 and n' = n + 1,           Ex. 3: Eliminate a" and a' from a'" = 7a", a" = 7a', and a' = 7a.
eliminate n'. Substituting for n' in the first equation we get (with      Ex. 4: Eliminate k' from k" = –3k' + 2, k' = – 3k + 2. Verify as in Ex.1.
brackets to show the derivation) n" = (n + 1) + 1, i.e. n" = n + 2.       Ex. 5: Eliminate m' from m" = log m', m' = log m.
   This equation gives correctly the relation between operand (n)         Ex. 6: Eliminate p' from p"=(p')2, p' =p2
and transform (n") when T 2 is applied, and in that way T 2 is speci-     Ex. 7: Find the transformations that are equivalent to double applications, on all
fied. For uniformity of notation the equation should now be re-writ-          the positive numbers greater than 1, of:
ten as m' = m + 2. This is the transformation, in standard notation,                                    (i) n' = 2n + 3;
whose single application (hence the single prime on m) causes the                                      (ii) n' = n2 + n;
same change as the double application of T. (The change from n to                                     (iii) n' = 1 + 2log n.
m is a mere change of name, made to avoid confusion.)                     Ex. 8: Find the transformation that is equivalent to a triple application of
   The rule is quite general. Thus, if the transformation is n' =             n' = –3n – 1 to the positive and negative integers and zero. Verify as in
2n – 3, then a second application will give second transforms n"              Ex. 1.
that are related to the first by n" = 2n' – 3. Substitute for n', using   Ex. 9: Find the transformations equivalent to the second, third, and further
brackets freely:                                                              applications of the transformation n' = 1/(1 + n). (Note: the series discov-
                                                                              ered by Fibonacci in the 12th century, 1, 1, 2, 3, 5, 8, 13,... is extended by
                        n" = 2(2n – 3) – 3                                    taking as next term the sum of the previous two; thus, 3 + 5 = 8, 5 + 8 = 13,
                           = 4n – 9.                                          8 + 13 = ......, etc.)

                                  18                                                                             19
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                            CHANGE

Ex. 10: What is the result of applying the transformation n' = 1/n twice,              transformation U, which will give a transform U(T(n)). Thus, if
    when the operands are all the positive rational numbers (i.e. all the              they are
    fractions) ?
                                                                                                            a b c d                          a b c d
                                                                                                  T: ↓                      and U: ↓
Ex. 11: Here is a geometrical transformation. Draw a straight line on paper and
    mark its ends A and B. This line, in its length and position, is the operand.                           b d a b                          d c d b
    Obtain its transform, with ends A' and B', by the transformation-rule R: A' is
    midway between A and B; B' is found by rotating the line A'B about A'              then T(b,) is d, and U(T(b)) is U(d), which is b. T and U applied in
    through a right angle anticlockwise. Draw such a line, apply R repeatedly,         that order, thus define a new transformation, V, which is easily
    and satisfy yourself about how the system behaves.
                                                                                       found to be
*Ex. 12: (Continued). If familiar with analytical geometry, let A start at (0,0) and
    B at (0,1), and find the limiting position. (Hint: Build up A’s final x-co-ordi-                                         a b c d
    nate as a series, and sum; similarly for A’s y-co- ordinate.)                                                 V: ↓
                                                                                                                             c b d c
2/15. Notation. The notation that indicates the transform by the                       V is said to be the product or composition of T and U. It gives
addition of a prime (') is convenient if only one transformation is                    simply the result of T and U being applied in succession, in that
under consideration; but if several transformations might act on n,                    order one step each.
the symbol n' does not show which one has acted. For this reason,                        If U is applied first, then U(b) is, in the example above, c, and
another symbol is sometimes used: if n is the operand, and trans-                      T(c) is a: so T(U(b)) is a, not the same as U(T(b)). The product,
formation T is applied, the transform is represented by T(n). The                      when U and T are applied in the other order is
four pieces of type, two letters and two parentheses, represent one                                                          a b c d
quantity, a fact that is apt to be confusing until one is used to it.                                             W: ↓
T(n), really n' in disguise, can be transformed again, and would be                                                          b a b d
written T(T(n)) if the notation were consistent; actually the outer                      For convenience, V can be written as UT, and W as TU. It must
brackets are usually eliminated and the T ’s combined, so that n"                      always be remembered that a change of the order in the product
is written as T2(n). The exercises are intended to make this nota-                     may change the transformation.
tion familiar, for the change is only one of notation.                                   (It will be noticed that V may be impossible, i.e. not exist, if
                                                                                       some of T ’s transforms are not operands for U.)
                1 2 3
Ex. 1: If f: ↓ 3 1 2
                                                                                       Ex. 1: Write out in full the transformation U2T.
    what is f(3)? f(1)? f2(3)?                                                         Ex. 2: Write out in full: UTU.
Ex. 2: Write out in full the transformation g on the operands, 6, 7, 8, if g(6) = 8,   *Ex. 3: Represent T and U by matrices and then multiply these two matrices in
    g(7) = 7, g(8) = 8.                                                                    the usual way (rows into columns), letting the product and sum of +’s be +:
                                                                                           call the resulting matrix M1. Represent V by a matrix, call it M2. Compare
Ex. 3: Write out in full the transformation h on the operands α, β, χ, δ, if h( α) =       M1 and M2.
    χ, h2(α) = β, h3( α) = δ , h4( α) = α.
Ex. 4: If A(n) is n + 2, what is A(15)?                                                2/17. Kinematic graph. So far we have studied each transforma-
Ex. 5: If f(n) is –n2 + 4, what is f(2)?                                               tion chiefly by observing its effect, in a single action on all its pos-
Ex. 6: If T(n) is 3n, what is T2(n) ? (Hint: if uncertain, write out T in extenso.)    sible operands (e g. S.2/3). Another method (applicable only
Ex. 7: If I is an identity transformation, and t one of its operands, what is I(t)?
                                                                                       when the transformation is closed) is to study its effect on a single
                                                                                       operand over many, repeated, applications. The method corre-
                                                                                       sponds, in the study of a dynamic system, to setting it at some ini-
2/16. Product. We have just seen that after a transformation T has                     tial state and then allowing it to go on, without further
been applied to an operand n, the transform T(n) can be treated as                     interference, through such a series of changes as its inner nature
an operand by T again, getting T(T(n)), which is written T2(n). In                     determines. Thus, in an automatic telephone system we might
exactly the same way T(n) may perhaps become operand to a                              observe all the changes that follow the dialling of a number, or in

                                        20                                                                                  21
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                                 CHANGE

an ants’ colony we might observe all the changes that follow the
placing of a piece of meat near-by.                                       When the transformation becomes more complex an important
  Suppose, for definiteness, we have the transformation                 feature begins to show. Thus suppose the transformation is
                              A B C D E
                       U: ↓                                                   T: ↓ D H D I Q G Q H A E E N B A N E
                                                                                    A B C DE F G H I J K L M N P Q
                              D A E D D
If U is applied to C, then to U(C), then to U2(C), then to U3(C) and    Its kinematic graph is:
so on, there results the series: C, E, D, D, D,... and so on, with D             P                           C           M → B →H
continuing for ever. If U is applied similarly to A there results the
series A, D, D, D, . . . with D continuing again.                                       N→ A → D                    K
These results can be shown graphically, thereby displaying to the
glance results that otherwise can be apprehended only after
detailed study. To form the kinematic graph of a transformation,
                                                                                 L                 I                     E      Q ←G ←F
the set of operands is written down, each in any convenient place,
and the elements joined by arrows with the rule that an arrow goes                                          J
from A to B if and only if A is transformed in one step to B. Thus      By starting at any state and following the chain of arrows we can
U gives the kinematic graph                                             verify that, under repeated transformation, the representative
                        C→E→D←A←B                                       point always moves either to some state at which it stops, or to
                                                                        some cycle around which it circulates indefinitely. Such a graph
(Whether D has a re-entrant arrow attached to itself is optional if     is like a map of a country’s water drainage, showing, if a drop of
no misunderstanding is likely to occur.)                                water or a representative point starts at any place, to what region
  If the graph consisted of buttons (the operands) tied together        it will come eventually. These separate regions are the graph’s
with string (the transitions) it could, as a network, be pulled into    basins. These matters obviously have some relation to what is
different shapes:                                                       meant by “stability”, to which we shall come in Chapter 5.
            C→E                        B→ A                             Ex. 1: Draw the kinematic graphs of the transformations of A and B in Ex. 2/4/3.
                                                                        Ex. 2: How can the graph of an identical transformation be recognised at a
                        D       or:                                         glance?
                                                                        Ex. 3: Draw the graphs of some simple closed one-one transformations. What is
           B→A                           D ←E←C                             their characteristic feature?
                                                                        Ex. 4: Draw the graph of the transformation V in which n, is the third decimal
and so on. These different shapes are not regarded as different             digit of log10(n + 20) and the operands are the ten digits 0, 1, . . ., 9.
graphs, provided the internal connexions are identical.                 Ex. 5: (Continued) From the graph of V read off at once what is V(8), V2(4),
                                                                            V4(6), V84(5).
   The elements that occur when C is transformed cumulatively by        Ex. 6: If the transformation is one-one, can two arrows come to a single point?
U (the series C, E, D, D, …) and the states encountered by a point      Ex. 7: If the transformation is many-one, can two arrows come to a single point ?
in the kinematic graph that starts at C and moves over only one         Ex. 8: Form some closed single-valued transformations like T, draw their kine-
arrow at a step, always moving in the direction of the arrow, are           matic graphs, and notice their characteristic features.
obviously always in correspondence. Since we can often follow           Ex. 9: If the transformation is single-valued, can one basin contain two cycles?
the movement of a point along a line very much more easily than
we can compute U(C), U2(C), etc., especially if the transforma-
tion is complicated, the graph is often a most convenient represen-
tation of the transformation in pictorial form. The moving point
will be called the representative point.
                                  22                                                                           23
                                                                                           THE DETERMINATE MACHINE

                                                                         system, started at a given “state”, will thus repeatedly pass
                                                                         through the same succession of states
                                                                           By a state of a system is meant any well-defined condition or
Chapter                                                             3    property that can be recognised if it occurs again. Every system
                                                                         will naturally have many possible states.
                                                                           When the beads are released, their positions (P) undergo a
                                                                         series of changes, P0, P1, P2 ...; this point of view at once relates
  T H E D ETERMIN A TE M ACHI NE                                         the system to a transformation
                                                                                                    P0 P1 P2 P3 …
3/1. Having now established a clear set of ideas about transforma-
                                                                                               ↓    P1 P2 P3 P4 …
tions, we can turn to their first application: the establishment of an
exact parallelism between the properties of transformations, as          Clearly, the operands of the transformation correspond to the
developed here, and the properties of machines and dynamic sys-          states of the system.
tems, as found in the real world.                                           The series of positions taken by the system in time clearly cor-
   About the best definition of “machine” there could of course be       responds to the series of elements generated by the successive
much dispute. A determinate machine is defined as that which             powers of the transformation (S.2/14). Such a sequence of states
behaves in the same way as does a closed single-valued transfor-         defines a trajectory or line of behaviour.
mation. The justification is simply that the definition works— that         Next, the fact that a determinate machine, from one state, can-
it gives us what we want, and nowhere runs grossly counter to            not proceed to both of two different states corresponds, in the
what we feel intuitively to be reasonable. The real justification        transformation, to the restriction that each transform is sin-
does not consist of what is said in this section, but of what follows    gle-valued.
in the remainder of the book, and, perhaps, in further develop-             Let us now, merely to get started, take some further examples,
ments.                                                                   taking the complications as they come.
   It should be noticed that the definition refers to a way of behav-       A bacteriological culture that has just been inoculated will
ing, not to a material thing. We are concerned in this book with         increase in “number of organisms present” from hour to hour. If
those aspects of systems that are determinate—that follow regular        at first the numbers double in each hour, the number in the culture
and reproducible courses. It is the determinateness that we shall        will change in the same way hour by hour as n is changed in suc-
study, not the material substance. (The matter has been referred to      cessive powers of the transformation n' = 2n.
before in Chapter 1.)                                                       If the organism is somewhat capricious in its growth, the sys-
   Throughout Part I, we shall consider determinate machines, and        tem’s behaviour, i.e. what state will follow a given state, becomes
the transformations to be related to them will all be single-valued.     somewhat indeterminate So “determinateness” in the real system
Not until S.9/2 shall we consider the more general type that is          evidently corresponds’ in the transformation, to the transform of
determinate only in a statistical sense.                                 a given operand being single-valued.
   As a second restriction, this Chapter will deal only with the            Next consider a clock, in good order and wound, whose hands,
machine in isolation—the machine to which nothing actively is            pointing now to a certain place on the dial, will point to some
being done.                                                              determinate place after the lapse of a given time. The positions of
   As a simple and typical example of a determinate machine, con-        its hands correspond to the transformation’s elements. A single
sider a heavy iron frame that contains a number of heavy beads           transformation corresponds to the progress over a unit interval of
joined to each other and to the frame by springs. If the circum-         time; it will obviously be of the form n' = n + k.
stances are constant, and the beads are repeatedly forced to some           In this case, the “operator” at work is essentially undefinable for
defined position and then released, the beads’ movements will on         it has no clear or natural bounds. It includes everything that makes
each occasion be the same, i.e. follow the same path. The whole          the clock go: the mainspring (or gravity), the stiffness of the brass

                                 24                                                                       25
               A N IN T R O D U C T IO N T O C Y BERNETI CS                                    THE DETERMINATE MACHINE

in the wheels, the oil on the pivots, the properties of steel, the inter-                Appears                                 
actions between atoms of iron, and so on with no definite limit. As                                          Zigzag dance        
we said in S.2/3, the “operator” is often poorly defined and some-                           Courts                              
what arbitrary—a concept of little scientific use. The transforma-                                           Leads               
tion, however, is perfectly well defined, for it refers only to the facts                  Follows                               
                                                                                 Female 
of the changes, not to more or less hypothetical reasons for them.                                            Shows nest entrance  Male
   A series of changes as regular as those of the clock are not                          Enters nest                             
readily found in the biological world, but the regular courses of                                            Trembles            
                                                                                                                                 
some diseases show something of the same features. Thus in the                              Spawns                               
days before the sulphonamides, the lung in lobar pneumonia                                                   Fertilises          
passed typically through the series of states: Infection → consol-
idation → red hepatisation → grey hepatisation → resolution →               He thus describes a typical trajectory.
health. Such a series of states corresponds to a transformation that           Further examples are hardly necessary, for the various branches
is well defined, though not numerical.                                      of science to which cybernetics is applied will provide an abun-
   Next consider an iron casting that has been heated so that its           dance, and each reader should supply examples to suit his own
various parts are at various but determinate temperatures. If its           speciality.
circumstances are fixed, these temperatures will change in a                   By relating machine and transformation we enter the discipline
determinate way with time. The casting’s state at any one moment            that relates the behaviours of real physical systems to the proper-
will be a set of temperatures (a vector, S.3/5), and the passage            ties of symbolic expressions, written with pen on paper. The
from state to state, S0 → S1 → S2 →…, will correspond to the                whole subject of “mathematical physics” is a part of this disci-
operation of a transformation, converting operand S0 successively           pline. The methods used in this book are however somewhat
to T(S0), T2(S0), T3(S0),…, etc.                                            broader in scope for mathematical physics tends to treat chiefly
   A more complex example, emphasising that transformations do              systems that are continuous and linear (S.3/7). The restriction
not have to be numerical to be well defined, is given by certain            makes its methods hardly applicable to biological subjects, for in
forms of reflex animal behaviour. Thus the male and female                  biology the systems arc almost always non- linear, often
threespined stickleback form, with certain parts of their environ-          non-continuous, and in many cases not even metrical, i.e. express-
ment, a determinate dynamic system. Tinbergen (in his Study of              ible in number, The exercises below (S.3/4) are arranged as a
Instinct) describes the system’s successive states as follows: “Each        sequence, to show the gradation from the very general methods
reaction of either male or female is released by the preceding reac-        used in this book to those commonly used in mathematical phys-
tion of the partner. Each arrow (in the diagram below) represents a         ics. The exercises are also important as illustrations of the corre-
causal relation that by means of dummy tests has actually been              spondences between transformations and real systems.
proved to exist. The male’s first reaction, the zigzag dance, is               To summarise: Every machine or dynamic system has many
dependent on a visual stimulus from the female, in which the sign           distinguishable states. If it is a determinate machine, fixing its cir-
stimuli “swollen abdomen” and the special movements play a part.            cumstances and the state it is at will determine, i.e. make unique
The female reacts to the red colour of the male and to his zigzag           the state it next moves to. These transitions of state correspond to
dance by swimming right towards him. This movement induces                  those of a transformation on operands, each state corresponding to
the male to turn round and to swim rapidly to the nest. This, in turn,      a particular operand. Each state that the machine next moves to
entices the female to follow him, thereby stimulating the male to           corresponds to that operand’s transform. The successive powers
point its head into the entrance. His behaviour now releases the            of the transformation correspond, in the machine, to allowing
female’s next reaction: she enters the nest.... This again releases         double, treble, etc., the unit time-interval to elapse before record-
the quivering reaction in the male which induces spawning. The              ing the next state. And since a determinate machine cannot go to
presence of fresh eggs in the nest makes the male fertilise them.”          two states at once, the corresponding transformation must be sin-
Tinbergen summarises the succession of states as follows:                   gle-valued.
                                   26                                                                         27
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                       THE DETERMINATE MACHINE

    Ex.: Name two states that are related as operand and transform, with   3/4. Machine and transformation. The parallelism between
time as the operator, taking the dynamic system from:                      machine and transformation is shown most obviously when we
    (a) Cooking, (b) Lighting a fire; (c) The petrol engine; (d) Embryo-   compare the machine’s behaviour, as state succeeds state, with the
logical development; (e) Meteorology; (f) Endocrinology; (g) Econom-       kinematic graph (S.2/17), as the arrows lead from element to ele-
ics; (h) Animal behaviour; (i) Cosmology. (Meticulous accuracy is not
required.)                                                                 ment. If a particular machine and a particular graph show full cor-
                                                                           respondence it will be found that:
3/2. Closure. Another reason for the importance of closure can
now be seen. The typical machine can always be allowed to go on               (1) Each possible state of the machine corresponds uniquely to
in time for a little longer, simply by the experimenter doing noth-        a particular element in the graph, and vice versa. The correspon-
ing! This means that no particular limit exists to the power that the      dence is one-one.
transformation can be raised to. Only the closed transformations              (2) Each succession of states that the machine passes through
allow, in general, this raising to any power. Thus the transforma-         because of its inner dynamic nature corresponds to an unbroken
tion T                                                                     chain of arrows through the corresponding elements.
                                                                              (3) If the machine goes to a state and remains there (a state of
                                                                           equilibrium, S.5/3) the element that corresponds to the state will
                     T: ↓
                             a b c d e f g
                             e b m f g c f                                 have no arrow leaving it (or a re-entrant one, S.2/17).
                                                                              (4) If the machine passes into a regularly recurring cycle of
is not closed. T4(a) is c and T5(a) is m. But T(m) is not defined, so      states, the graph will show a circuit of arrows passing through the
T6(a) is not defined. With a as initial state, this transformation         corresponding elements.
does not define what happens after five steps. Thus the transfor-             (5) The stopping of a machine by the experimenter, and its
mation that represents a machine must be closed. The full signif-          restarting from some new, arbitrarily selected, state corresponds,
icance of this fact will appear in S.10/4.                                 in the graph, to a movement of the representative point from one
                                                                           element to another when the movement is due to the arbitrary
3/3. The discrete machine. At this point it may be objected that           action of the mathematician and not to an arrow.
most machines, whether man-made or natural, are smooth-work-                  When a real machine and a transformation are so related, the
ing, while the transformations that have been discussed so far             transformation is the canonical representation of the machine,
change by discrete jumps. These discrete transformations are,              and the machine is said to embody the transformation.
however, the best introduction to the subject. Their great advan-          Ex. 1: A culture medium is inoculated with a thousand bacteria, their number
tage IS their absolute freedom from subtlety and vagueness, for                doubles in each half-hour. Write down the corresponding transformation
every one of their properties is unambiguously either present or           Ex. 2: (Continued.) Find n after the 1st, 2nd, 3rd, . . ., 6th steps.
absent. This simplicity makes possible a security of deduction that        Ex. 3: (Continued.) (i) Draw the ordinary graph, with two axes, showing the cul-
is essential if further developments are to be reliable. The subject           ture’s changes in number with time. (ii) Draw the kinematic graph of the sys-
was touched on in S.2/1.                                                       tem’s changes of state.
   In any case the discrepancy is of no real importance. The discrete      Ex. 4: A culture medium contains 109 bacteria and a disinfectant that, in each
change has only to become small enough in its jump to approximate              minute, kills 20 per cent of the survivors. Express the change in the number
                                                                               of survivors as a transformation.
as closely as is desired to the continuous change. It must further be
                                                                           Ex. 5: ( Continued.) (i) Find the numbers of survivors after 1, 2, 3, 4, 5 minutes.
remembered that in natural phenomena the observations are almost               (ii) To what limit does the number tend as time goes on indefinitely?
invariably made at discrete intervals; the “continuity” ascribed to        Ex. 6: Draw the kinematic graph of the transformation in which n' is, in a table
natural events has often been put there by the observer’s imagina-             of four-figure logarithms, the rounded-off right-hand digit of log10 (n+70).
tion, not by actual observation at each of an infinite number of               What would be the behaviour of a corresponding machine?
points. Thus the real truth is that the natural system is observed at      Ex. 7: (Continued, but with 70 changed to 90).
discrete points, and our transformation represents it at discrete          Ex. 8: (Continued, but with 70 changed to 10.) How many basins has this
points. There can, therefore, be no real incompatibility.                      graph?

                                  28                                                                              29
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                             THE DETERMINATE MACHINE

Ex. 9: In each decade a country’s population diminishes by 10 per cent, but in         cerned with them. It should be noticed that we are now beginning
    the same interval a million immigrants are added. Express the change from          to consider the relation, most important in machinery that exists
    decade to decade as a transformation, assuming that the changes occur in
    finite steps.                                                                      between the whole and the parts. Thus, it often happens that the
Ex. 10: (Continued.) If the country at one moment has twenty million inhabit-          state of the whole is given by a list of the states taken, at that
    ants, find what the population will be at the next three decades.                  moment, by each of the parts.
Ex. 11: (Continued.) Find, in any way you can, at what number the population              Such a quantity is a vector, which is defined as a compound
    will remain stationary. (Hint: when the population is “stationary” what rela-      entity, having a definite number of components. It is conve-
    tion exists between the numbers at the beginning and at the end of the             niently written thus: (a1, a2, . . ., an), which means that the first
    decade?—what relation between operand and transform?)                              component has the particular value a1, the second the value a2,
Ex. 12: A growing tadpole increases in length each day by 1.2 mm. Express this         and so on.
    as a transformation.
Ex. 13: Bacteria are growing in a culture by an assumed simple conversion of
                                                                                          A vector is essentially a sort of variable, but more complex than
    food to bacterium; so if there was initially enough food for 108 bacteria and      the ordinary numerical variable met with in elementary mathe-
    the bacteria now number n, then the remaining food is proportional to 108–         matics. It is a natural generalisation of “variable”, and is of
    n. If the law of mass action holds, the bacteria will increase in each interval    extreme importance, especially in the subjects considered in this
    by a number proportional to the product: (number of bacteria) x (amount of         book. The reader is advised to make himself as familiar as possi-
    remaining food). In this particular culture the bacteria are increasing, in each
    hour, by 10–8n (108–n). Express the changes from hour to hour by a transfor-       ble with it, applying it incessantly in his everyday life, until it has
    mation.                                                                            become as ordinary and well understood as the idea of a variable.
Ex. 14: (Continued.) If the culture now has 10,000,000 bacteria, find what the         It is not too much to say that his familiarity with vectors will
    number will be after 1, 2, . . ., 5 hours.                                         largely determine his success with the rest of the book.
Ex. 15: (Continued.) Draw an ordinary graph with two axes showing how the                 Here are some well-known examples.
    number of bacteria will change with time.
                                                                                         (1) A ship’s “position” at any moment cannot be described by a
                                                                                       simple number; two numbers are necessary: its latitude and its
                                 V EC TO RS                                            longitude. “Position” is thus a vector with two components. One
3/5. In the previous sections a machine’s “state” has been                             ship s position might, for instance, be given by the vector (58°N,
regarded as something that is known as a whole, not requiring                          17°W). In 24 hours, this position might undergo the transition
more detailed specification. States of this type are particularly                      (58°N, 17°W) → (59°N, 20°W).
common in biological systems where, for instance, characteristic                         (2) “The weather at Kew” cannot be specified by a single num-
postures or expressions or patterns can be recognised with confi-                      ber, but it can be specified to any desired completeness by our tak-
dence though no analysis of their components has been made. The                        ing sufficient components. An approximation would be the
states described by Tinbergen in S.3/1 are of this type. So are the                    vector: height of barometer, temperature, cloudiness, humidity),
types of cloud recognised by the meteorologist. The earlier sec-                       and a particular state might be (998 mbars, 56.2°F, 8, 72%). A
tions of this chapter will have made clear that a theory of such                       weather prophet is accurate if he can predict correctly what state
unanalysed states can be rigorous.                                                     this present a state will change to.
   Nevertheless, systems often have states whose specification                           (3) Most of the administrative “forms” that have to be filled in
demands (for whatever reason) further analysis. Thus suppose a                         are really intended to define some vector. Thus the form that the
news item over the radio were to give us the “state”, at a certain                     motorist has to fill in:
hour, of a Marathon race now being run; it would proceed to give,
for each runner, his position on the road at that hour. These posi-                                           Age of car: ......................
tions, as a set, specify the “state” of the race. So the “state” of the                                       Horse-power: ..................
                                                                                                              Colour: ............................
race as a whole is given by the various states (positions) of the
various runners, taken simultaneously. Such “compound” states                          is merely a vector written vertically.
are extremely common, and the rest of the book will be much con-                          Two vectors are considered equal only if each component of
                                        30                                                                                    31
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                              THE DETERMINATE MACHINE

the one is equal to the corresponding component of the other.                        Ex. 4: (Continued.) Express the transformation as a kinematic graph.
Thus if there is a vector (w,x,y,z), in which each component is                      Ex. 5: The first operand, x, is the vector (0,1,1); the operator F is defined thus:
some number, and if two particular vectors are (4,3,8,2) and                             (i) the left-hand number of the transform is the same as the middle number
(4,3,8,1), then these two particular vectors are unequal; for, in the                    of the operand;
fourth component, 2 is not equal to 1. (If they have different com-                      (ii) the middle number of the transform is the same as the right-hand number
                                                                                         of the operand;
ponents, e.g. (4,3,8,2) and (H,T), then they are simply not compa-
                                                                                         (iii) the right-hand number of the transform is the sum of the operand’s mid-
rable.)                                                                                  dle and right-hand numbers.
  When such a vector is transformed, the operation is in no way                          Thus, F(x) is (1,1,2), and F2(x) is (1,2,3). Find F3(x), F4(x), F5(x). (Hint:
different from any other transformation, provided we remember                            compare Ex. 2/14/9.)
that the operand is the vector as a whole, not the individual com-
ponents (though how they are to change is, of course, an essential                   3/6. Notation. The last exercise will have shown the clumsiness of
part of the transformation’s definition). Suppose, for instance, the                 trying to persist in verbal descriptions. The transformation F is in
“system” consists of two coins, each of which may show either                        fact made up of three sub-transformations that are applied simul-
Head or Tail. The system has four states, which are                                  taneously, i.e. always in step. Thus one sub-transformation acts on
                   (H,H) (H,T) (T,H) and (T,T).                                      the left-hand number, changing it successively through 0 → 1 →
                                                                                     1 → 2 → 3 → 5, etc. If we call the three components a, b, and c,
Suppose now my small niece does not like seeing two heads up,                        then F, operating on the vector (a, b, c), is equivalent to the simul-
but always alters that to (T,H), and has various other preferences.                  taneous action of the three sub-transformations, each acting on
It might be found that she always acted as the transformation                        one component only:
                       N: ↓   (H,H) (H,T) (T,H) (T,T)                                                               a' = b
                              (T,H) (T,T) (T,H) (H,H)                                                           F:  b' = c
As a transformation on four elements, N differs in no way from                                                      c' = b + c
those considered in the earlier sections.                                            Thus, a' = b says that the new value of a, the left-hand number in
   There is no reason why a transformation on a set of vectors                       the transform, is the same as the middle number in the operand;
should not be wholly arbitrary, but often in natural science the                     and so on. Let us try some illustrations of this new method; no
transformation has some simplicity. Often the components                             new idea is involved, only a new manipulation of symbols. (The
change in some way that is describable by a more or less simple                      reader is advised to work through all the exercises, since many
rule. Thus if M were:                                                                important features appear, and they are not referred to elsewhere.)
                   M: ↓ (H,H)     (H,T) (T,H) (T,T)
                          (T,H) (T,T) (H,H) (H,T)
                                                                                     Ex. 1: If the operands are of the form (a,b), and one of them is (1/2,2), find the
                                                                                         vectors produced by repeated application to it of the transformation T:
it could be described by saying that the first component always                                                             a' = b
                                                                                                                       T:  b' =– a
changes while the second always remains unchanged.
   Finally, nothing said so far excludes the possibility that some or                    (Hint: find T(1/2,2), T2(l,2), etc.)
all of the components may themselves be vectors! (E.g. S.6/3.)                       Ex. 2: If the operands are vectors of the form (v,w,x,y,z) and U is
But we shall avoid such complications if possible.
                                                                                                                              v' = w
Ex. 1: Using ABC as first operand, find the transformation generated by repeated                                              w' = v
    application of the operator “move the left-hand letter to the right” (e.g. ABC                                      U:  x' = x
    → BCA).                                                                                                                   y' = z
Ex. 2: (Continued.) Express the transformation as a kinematic graph.                                                          z' = y
Ex. 3: Using (1, –1) as first operand, find the other elements generated by              find U(a), where a = (2,1,0,2,2).
    repeated application of the operator “interchange the two numbers and then
    multiply the new left-hand number by minus one”.                                 Ex. 3: (Continued.) Draw the kinematic graph of U if its only operands are a,
                                                                                         U(a), U2(a), etc.
                                       32                                                                                   33
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                  THE DETERMINATE MACHINE

Ex. 4: (Continued.) How would the graph alter if further operands were                   Ex. 19: (Continued.) The system is next changed so that its transformation
    added ?                                                                                  becomes x' = 1/2(x + y), y = 1/2(x–y) + 100. It starts with wages and prices
Ex. 5: Find the transform of (3, – 2,1) by A if the general form is (g,h,j) and the          both at 110. Calculate what will happen over the next ten years.
    transformation is                                                                    Ex. 20: (Continued.) Draw an ordinary graph to show how prices and wages will
                                                                                             change.
                                       g' = 2g – h
                                  A:  h' = h – j                                        Ex. 21: Compare the graphs of Exs. 18 and 20. How would the distinction be
                                       j' = g + h                                           described in the vocabulary of economics?
                                                                                         Ex. 22: If the system of Ex. 19 were suddenly disturbed so that wages fell to 80
Ex. 6: Arthur and Bill agree to have a gamble. Each is to divide his money into              and prices rose to 120, and then left undisturbed, what would happen over
    two equal parts, and at the umpire’s signal each is to pass one part over to the         the next ten years? (Hint: use (80,120) as operand.)
    other player. Each is then again to divide his new wealth into two equal parts
    and at a signal to pass a half to the other; and so on. Arthur started with 8/-      Ex. 23: (Continued.) Draw an ordinary graph to show how wages and prices
    and Bill with 4/-. Represent the initial operand by the vector (8,4). Find, in           would change after the disturbance.
    any way you can, all its subsequent transforms.                                      Ex. 24: Is transformation T one-one between the vectors (x1, x2) and the vectors
                                                                                             (x1', x2') ?
Ex. 7: (Continued.) Express the transformation by equations as in Ex. 5
                                                                                                                             x ' = 2x + x
    above.                                                                                                              T:  1        1    2
                                                                                                                              x2' = x1 + x2
Ex. 8: (Continued.) Charles and David decide to play a similar game except that
    each will hand over a sum equal to a half of what the other possesses. If they          (Hint: If (x1, x2) is given, is (x1', x2') uniquely determined ? And vice versa ?)
    start with 30/- and 34/- respectively, what will happen to these quantities ?        *Ex. 25: Draw the kinematic graph of the 9-state system whose components are
Ex. 9: (Continued.) Express the transformation by equations as in Ex. 5.                    residues:
                                                                                                                       x' = x + y        
Ex. 10: If, in Ex. 8, other sums of money had been started with, who in general                                                           (Mod 3)
    would be the winner?                                                                                               y' = y + 2        

                                                                                            How many basins has it ?
Ex. 11 : In an aquarium two species of animalcule are prey and predator. In each
    day, each predator destroys one prey, and also divides to become two pred-
    ators. If today the aquarium has m prey and n predators, express their               3/7. (This section may be omitted.) The previous section is of fun-
    changes as a transformation.                                                         damental importance, for it is an introduction to the methods of
Ex. 12: (Continued.) What is the operand of this transformation?                         mathematical physics, as they are applied to dynamic systems.
Ex. 13: (Continued.) If the state was initially (150,10), find how it changed over
                                                                                         The reader is therefore strongly advised to work through all the
    the first four days.                                                                 exercises, for only in this way can a real grasp of the principles be
Ex. 14: A certain pendulum swings approximately in accordance with the trans-
                                                                                         obtained. If he has done this, he will be better equipped to appre-
    formation x' = 1/2(x–y), y' = 1/2(x + y), where x is its angular deviation from      ciate the meaning of this section, which summarises the method.
    the vertical and y is its angular velocity; x' and y' are their values one second      The physicist starts by naming his variables—x1, x2, … xn. The
    later. It starts from the state (10,10); find how its angular deviation changes      basic equations of the transformation can then always be obtained
    from second to second over the first eight seconds. (Hint: find x', x", x"', etc.;   by the following fundamental method:—
    can they be found without calculating y', y", etc.?)
Ex. 15: (Continued.) Draw an ordinary graph (with axes for x and t) showing how             (1) Take the first variable, x1, and consider what state it will
    x’s value changed with time. Is the pendulum frictionless ?
                                                                                         change to next. If it changes by finite steps the next state will be
Ex. 16: In a certain economic system a new law enacts that at each yearly read-          x1' if continuously the next state will be x1+ dx1. (In the latter case
    justment the wages shall be raised by as many shillings as the price index
    exceeds 100 in points. The economic effect of wages on the price index is            he may, equivalently, consider the value of dx1/dt.)
    such that at the end of any year the price index has become equal to the wage           (2) Use what is known about the system, and the laws of phys-
    rate at the beginning of the year. Express the changes of wage-level and             ics, to express the value of x1', or dx1/dt (i.e. what x1 will be) in
    price-index over the year as a transformation.                                       terms of the values that x1, …, xn (and any other necessary factors)
Ex. 17: (Continued.) If this year starts with the wages at 110 and the price index       have now. In this way some equation such as
    at 110, find what their values will be over the next ten years.
                                                                                                        x1' = 2αx1 – x3 or dx1/dt = 4k sin x3
Ex. 18: (Continued.) Draw an ordinary graph to show how prices and wages will
    change. Is the law satisfactory?                                                     is obtained.
                                         34                                                                                      35
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                          THE DETERMINATE MACHINE

   (3) Repeat the process for each variable in turn until the whole                  3/9. “Unsolvable” equations. The exercises to S.3/6 will have
transformation is written down.                                                      shown beyond question that if a closed and single-valued transfor-
   The set of equations so obtained—giving, for each variable in                     mation is given, and also an initial state, then the trajectory from
the system, what it will be as a function of the present values of                   that state is both determined (i.e. single-valued) and can be found
the variables and of any other necessary factors—is the canonical                    by computation For if the initial state is x and the transformation
representation of the system. It is a standard form to which all                     T, then the successive values (the trajectory) of x is the series
descriptions of a determinate dynamic system may be brought.                                         x, T(x), T2(x), T3(x), T4(x), and so on.
   If the functions in the canonical representation are all linear, the
system is said to be linear.                                                            This process, of deducing a trajectory when given a transforma-
   Given an initial state, the trajectory or line of behaviour may                   tion and an initial state, is, mathematically, called “integrating”
now be computed by finding the powers of the transformation, as                      the transformation (The word is used especially when the trans-
in S.3/9.                                                                            formation is a set of differential equations, as in S.3/7; the process
                                                                                     is then also called “solving” the equations.)
*Ex. 1: Convert the transformation (now in canonical form)                              If the reader has worked all through S.3/6, he is probably
                        dx/dt = y                                                    already satisfied that, given a transformation and an initial state,
                        dy/dt = z                                                    he can always obtain the trajectory. He will not therefore be dis-
                        dz/dt = z + 2xy–x2                                           couraged if he hears certain differential equations referred to as
   to a differential equation of the third order in one variable, x. (Hint: Elimi-   “nonintegrable” or “unsolvable”. These words have a purely tech-
   nate y and z and their derivatives.)                                              nical meaning, and mean only that the trajectory cannot be
*Ex. 2: The equation of the simple harmonic oscillator is often written              obtained i f one is restricted to certain defined mathematical oper-
                                        d 2x                                         ations. Tustin’s Mechanism of Economic Systems shows clearly
                                        --------2 + ax = 0
                                         dt                                          how the economist may want to study systems and equations that
   Convert this to canonical form in two independent variables. (Hint: Invert        are of the type called “unsolvable”; and he shows how the econo-
   the process used in Ex. 1.)                                                       mist can, in practice get what he wants.
*Ex. 3: Convert the equation
                          d 2x                    2 dx        2                      3/10. Phase space. When the components of a vector are numerical
                        x --------2 – ( 1 – x ) ----- + --------------2 = 0
                           dt                       dt 1 + x                         variables, the transformation can be shown in geometric form, and
   to canonical form in two variables.                                               this form sometimes shows certain properties far more clearly and
                                                                                     obviously than the algebraic forms that have been considered so far.
3/8. After this discussion of differential equations, the reader who                    As example of the method, consider the transformation
is used to them may feel that he has now arrived at the “proper”                                               x' = 1/2x + 1/2y
way of representing the effects of time, the arbitrary and discrete                                            y' = 1/2x + 1/2y
tabular form of S.2/3 looking somewhat improper at first sight. He                   of Ex. 3/6/7. If we take axes x and y, we can represent each partic-
should notice, however, that the algebraic way is a restricted way,                  ular vector, such as (8,4), by the point whose x-co-ordinate is 8
applicable only when the phenomena show the special property of                      and whose y- co-ordinate is 4. The state of the system is thus rep-
continuity (S.7/20). The tabular form, on the other hand, can be                     resented initially by the point P in Fig. 3/10/l (I).
used always; for the tabular form includes the algebraic. This is of                   The transformation changes the vector to (6,6), and thus changes
some importance to the biologist, who often has to deal with phe-                    the system’s state to P'. The movement is, of course, none other than
nomena that will not fit naturally into the algebraic form. When                     the change drawn in the kinematic graph of S.2/17, now drawn in a
this happens, he should remember that the tabular form can always                    plane with rectangular axes which contain numerical scales. This
provide the generality, and the rigour, that he needs. The rest of                   two- dimensional space, in which the operands and transforms can
this book will illustrate in many ways how naturally and easily the                  be represented by points, is called the phase-space of the system.
tabular form can be used to represent biological systems.                            (The “button and string” freedom of S.2/17 is no longer possible.)
                                       36                                                                              37
               A N IN T R O D U C T IO N T O C Y BERNETI CS                                      THE DETERMINATE MACHINE

  In II of the same figure are shown enough arrows to specify               Ex.: Sketch the phase-spaces, with detail merely sufficient to show the main fea-
generally what happens when any point is transformed. Here the                  tures, of some of the systems in S.3/4 and 6.
arrows show the other changes that would have occurred had
other states been taken as the operands. It is easy to see, and to          3/11. What is a “system”? In S.3/1 it was stated that every real
prove geometrically, that all the arrows in this case are given by          determinate machine or dynamic system corresponds to a closed,
one rule: with any given point as operand, run the arrow at 45° up          single-valued transformation; and the intervening sections have
and to the left (or down and to the right) till it meets the diagonal       illustrated the thesis with many examples. It does not, however,
represented by the line y = x.                                              follow that the correspondence is always obvious; on the contrary,
                                                                            any attempt to apply the thesis generally will soon encounter cer-
                                                                            tain difficulties, which must now be considered.
                                                                               Suppose we have before us a particular real dynamic system—
                                                                            a swinging pendulum, or a growing culture of bacteria, or an auto-
                                                                            matic pilot, or a native village, or a heart-lung preparation—and
                                                                            we want to discover the corresponding transformation, starting
                                                                            ,from the beginning and working from first principles. Suppose it
                                                                            is actually a simple pendulum, 40 cm long. We provide a suitable
                                                                            recorder, draw the pendulum through 30° to one side, let it go, and
                                                                            record its position every quarter-second. We find the successive
                                                                            deviations to be 30° (initially), 10°, and –24° (on the other side).
                                                                            So our first estimate of the transformation, under the given condi-
                                                                            tions, is

                                                                                                             ↓ 10° –24°
                                                                                                                 30°    10°
                               Fig. 3/10/1
                                                                            Next, as good scientists, we check that transition from 10°: we
   The usefulness of the phase-space (II) can now be seen, for the          draw the pendulum aside to 10°, let it go, and find that, a quar-
whole range of trajectories in the system can be seen at a glance, fro-     ter-second later, it is at +3°! Evidently the change from 10° is not
zen, as it were, into a single display. In this way it often happens that   single-valued—the system is contradicting itself. What are we to
some property may be displayed, or some thesis proved, with the             do now?
greatest ease, where the algebraic form would have been obscure.               Our difficulty is typical in scientific investigation and is funda-
   Such a representation in a plane is possible only when the vec-          mental: we want the transformation to be single-valued but it will
tor has two components. When it has three, a representation by a            not come so. We cannot give up the demand for singleness, for to
three- dimensional model, or a perspective drawing, is often still          do so would be to give up the hope of making single-valued pre-
useful. When the number of components exceeds three, actual                 dictions. Fortunately, experience has long since shown what s to
representation is no longer possible, but the principle remains, and        be done: the system must be re-defined.
a sketch representing such a higher-dimensional structure may                  At this point we must be clear about how a “system” is to be
still be most useful, especially when what is significant are the           defined Our first impulse is to point at the pendulum and to “the
general topological, rather than the detailed, properties.                  system is that thing there”. This method, however, has a funda-
   (The words “phase space” are sometimes used to refer to the              mental disadvantage: every material object contains no less than
empty space before the arrows have been inserted, i.e. the space            an infinity of variables and therefore of possible systems. The real
into which any set of arrows may be inserted, or the diagram, such          pendulum, for instance, has not only length and position; it has
as II above, containing the set of arrows appropriate to a particular       also mass, temperature, electric conductivity, crystalline struc-
transformation. The context usually makes obvious which is                  ture, chemical impurities, some radio-activity, velocity, reflecting
intended.)                                                                  power, tensile strength, a surface film of moisture, bacterial con-
                                   38                                                                          39
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                 THE DETERMINATE MACHINE

tamination, an optical absorption, elasticity, shape, specific grav-     in the variable “colour of the next throw”, which is a variable that
ity, and so on and on. Any suggestion that we should study “all”         has only two values: Red and Black. A system that includes the
the facts is unrealistic, and actually the attempt is never made.        latter variable is almost certainly not predictable, whereas one that
What is try is that we should pick out and study the facts that are      includes the former (the probability) may well be predictable, for
relevant to some main interest that is already given.                    the probability has a constant value, of about a half.)
   The truth is that in the world around us only certain sets of facts      The “absolute” system described and used in Design for a Brain
are capable of yielding transformations that are closed and single.      is just such a set of variables.
The discovery of these sets is sometimes easy, sometimes diffi-             It is now clear why it can be said that every determinate
cult. The history of science, and even of any single investigation,      dynamic system corresponds to a single-valued transformation (in
abounds in examples. Usually the discovery involves the other            spite of the fact that we dare not dogmatise about what the real
method for the defining of a system, that of listing the variables       world contains, for it is full of surprises). We can make the state-
that are to be taken into account. The system now means, not a           ment simply because science refuses to study the other types, such
but a list of variables. This list can be varied, and the experi-        as the one-variable pendulum above, dismissing them as “cha-
menter’s commonest task is that of varying the list (“taking other       otic” or “non-sensical”. It is we who decide, ultimately, what we
variables into account”) until he finds a set of variables that he       will accept as “machine-like” and what we will reject. (The sub-
required singleness. Thus we first considered the pendulum as if         ject is resumed in S.6/3.)
it consisted solely of the variable “angular deviation from the ver-
tical”; we found that the system so defined did not give single-
ness. If we were to go on we would next try other definitions, for
instance the vector:
                  (angular deviation, mass of bob),
which would also be found to fail. Eventually we would try the
             (angular deviation, angular velocity)
and then we would find that these states, defined in this way,
would give the desired singleness (cf. Ex. 3/6/14).
   Some of these discoveries, of the missing variables, have been
of major scientific importance, as when Newton discovered the
importance of momentum, or when Gowland Hopkins discovered
the importance of vitamins (the behaviour of rats on diets was not
single-valued until they were identified). Sometimes the discovery
is scientifically trivial, as when single-valued results are obtained
only after an impurity has been removed from the water-supply, or
a loose screw tightened; but the singleness is always essential.
   (Sometimes what is wanted is that certain probabilities shall be
single-valued. This more subtle aim is referred to in S.7/4 and 9/
2. It is not incompatible with what has just been said: it merely
means that it is the probability that is the important variable, not
the variable that is giving the probability. Thus, if I study a rou-
lette-wheel scientifically I may be interested in the variable
“probability of the next throw being Red”, which is a variable
that has numerical values in the range between 0 and 1, rather than

                                  40                                                                      41
                                                                                           THE MACHINE WITH INPUT

                                                                        the special case in which the several transformations act on the
                                                                        same set of operands. Thus, if the four common operands are a, b,
                                                                        c, and d, there might be three transformations, R1, R2, and R3:
Chapter                                                            4
                                                                           R1: ↓ c d d b       R2: ↓ b a d c           R3: ↓ d c d b
                                                                                 a b c d             a b c d                 a b c d

                                                                        These can be written more compactly as
     T H E MA CH IN E WITH I NPUT
                                                                                                 ↓    a    b   c   d

4/1. In the previous chapter we studied the relation between trans-                             R1      c d d b
formation and machine, regarding the latter simply as a unit. We                                R2     b a d c
now proceed to find, in the world of transformations, what corre-                               R3     d c d b
sponds to the fact that every ordinary machine can be acted on by
various conditions, and thereby made to change its behaviour, as        which we shall use as the standard form. (In this chapter we shall
a crane can be controlled by a driver or a muscle controlled by a       continue to discuss only transformations that are closed and sin-
nerve. For this study to be made, a proper understanding must be        gle-valued.)
had of what is meant by a “parameter”.                                      A transformation corresponds to a machine with a characteris-
   So far, each transformation has been considered by itself; we        tic way of behaving (S.3/1); so the set of three—R1, R2, and R3—
must now extend our view so as to consider the relation between         if embodied in the same physical body, would have to correspond
one transformation and another. Experience has shown that just the      to a machine with three ways of behaving. Can a machine have
same methods (as S.2/3) applied again will suffice; for the change      three ways of behaving?
from transformation A to transformation B is nothing but the transi-       It can, for the conditions under which it works can be altered.
tion A → B. (In S.2/3 it was implied that the elements of a transfor-   Many a machine has a switch or lever on it that can be set at any
mation may be anything that can be clearly defined: there is            one of three positions, and the setting determines which of three
therefore no reason why the elements should not themselves be           ways of behaving will occur. Thus, if a, etc., specify the machine’s
transformations.) Thus, if T1, T2, and T3 are three transformations,    states, and R1 corresponds to the switch being in position 1, and R2
there is no reason why we should not define the transformation U:       corresponds to the switch being in position 2, then the change of
                                                                        R’s subscript from 1 to 2 corresponds precisely with the change of
                                                                        the switch from position 1 to position 2; and it corresponds to the
                         U: ↓ T1 T2 T3
                               T T T
                                 2    2   1                             machine’s change from one way of behaving to another.
All that is necessary for the avoidance of confusion is that the           It will be seen that the word “change” if applied to such a
changes induced by the transformation T1 should not be allowed          machine can refer to two very different things. There is the change
to become confused with those induced by U; by whatever                 from state to state, from a to b say, which is the machine’s behav-
method is appropriate in the particular case the two sets of            iour, and which occurs under its own internal drive, and there is
changes must be kept conceptually distinct.                             the change from transformation to transformation, from R1 to R2
   An actual example of a transformation such as U occurs when          say, which is a change of its way of behaving, and which occurs
boy has a toy-machine T1 built of interchangeable parts, and the        at the whim of the experimenter or some other outside factor. The
dismantles it to form a new toy-machine T2 . (In this case the          distinction is fundamental and must on no account be slighted.
changes that occur when T1 goes from one of its states to the next         R’s subscript, or any similar symbol whose value determines
(i.e. when T1 “works”) are clearly distinguishable from the change      which transformation shall be applied to the basic states will be
that occurs when T1 changes to T2.)                                     called a parameter. If numerical, it must be carefully distin-
   Changes from transformation to transformation may, in general        guished from any numbers that may be used to specify the oper-
be wholly arbitrary. We shall, however, be more concerned with          ands as vectors.
                                42                                                                        43
                  A N IN T R O D U C T IO N T O C Y BERNETI CS                                                THE MACHINE WITH INPUT

   A real machine whose behaviour can be represented by such a                        quantities that appear on the right, but not on the left, must be
set of closed single-valued transformations will be called a trans-                   parameters. The examples below will clarify the facts.
ducer or a machine with input (according to the convenience of
the context). The set of transformations is its canonical represen-                   Ex. 1: What are the three transformations obtained by giving parameter a the val-
                                                                                          ues –1, 0, or +1 in Ta :
tation. The parameter, as something that can vary, is its input.                                                     
                                                                                                               Ta :  g' = (1 – a)g + (a – 1)h
                  a b                                                                                                  h' = 2g + 2ah
Ex. 1: If S is   ↓b a ,
                                                                                      Ex. 2: What are the two transformations given when the parameter a takes the
    how many other closed and single-valued transformations can be formed on              value 0 or 1 in S?:
    the same two operands?                                                                                       h' = (1 – α)j + log (1 + α + sin αh)
                                                                                                           S:  j' = (1 + sin
Ex. 2: Draw the three kinematic graphs of the transformations R1, R2, and R3                                                   αj) e(α –1)h
    above. Does change of parameter-value change the graph?                           Ex. 3: The transducer n' = n + a2, in which a and n can take only positive integral
Ex. 3: With R (above) at R1, the representative point is started at c and allowed         values, is started at n = 10. (i) At what value should a be kept if, in spite of
    to move two steps (to R12(c)); then, with the representative point at this new        repeated transformations, n is to remain at 10? (ii) At what value should a be
    state, the transformation is changed to R2, and the point allowed to move two         kept if n is to advance in steps of 4 at a time (i.e. 10, 14 18, …)? (iii) What
    more steps. Where is it now?                                                          values of a, chosen anew at each step, will make n follow the series 10, 11,
Ex. 4: Find a sequence of R’s that will take the representative point (i) from d to       15, 16, 20, 21, 25, 26, …, in which the differences are, alternately 1 and 4?
    a, (ii) from c to a.                                                                  (iv) What values of a will make n advance by unit steps to 100 and then jump
Ex. 5: What change in the transformation corresponds to a machine having one              directly to 200?
    of its variables fixed? What transformation would be obtained if the system       Ex. 4: If a transducer has n operands and also a parameter that can take n values,
                             x' = –x + 2y                                                 the set shows a triunique correspondence between the values of operand,
                             y' = x – y                                                   transform, and parameter if (1) for given parameter value the transformation
   were to have its variable x fixed at the value 4?                                      is one-one, and (2) for given operand the correspondence between parame-
                                                                                          ter-value and transform is one-one. Such a set is
Ex. 6: Form a table of transformations affected by a parameter, to show that a
    parameter, though present, may in fact have no actual effect.                                                      ↓ a b c d
                                                                                                                   R1 c d a b
4/2. We can now consider the algebraic way of representing a                                                       R2 b a c d
transducer.                                                                                                        R3 d c b a
                                                                                                                   R4 a b d c
   The three transformations
                                                                                          Show that the transforms must form a Latin square, i.e. one in which each
      R1: n' = n + 1      R2: n' = n + 2 R3: n' = n + 3                                   row (and each column) contains each transform once and once only.
                                                                                      Ex. 5: A certain system of one variable V behaves as
can obviously be written more compactly as
                                                                                                                    V' = -----  V + -----
                                                                                                                           1         90
                         Ra : n' = n + a,                                                                                 10         P
and this shows us how to proceed. In this expression it must be                           where P is a parameter. Set P at some value P1, e.g. 10, and find the limit
noticed that the relations of n and a to the transducer are quite dif-                    that V tends to as the transformation is repeated indefinitely often, call this
                                                                                          limit V1. Then set P at another value P2, e.g. 3, and find the corresponding
ferent, and the distinction must on no account be lost sight of. n is                     limit V2. After several such pairs of values (of P and limit-V) have been
operand and is changed by the transformation; the fact that it is an                      found, examine them to see if any law holds between them. Does V behave
operand is shown by the occurrence of n'. a is parameter and                              like the volume of a gas when subjected to a pressure P?
determines which transformation shall be applied to n. a must                         Ex. 6: What transformation, with a parameter a will give the three series of val-
therefore be specified in value before n’s change can be found.                           ues to n?:
                                                                                                           a = 1: 0, → 1, → 2, → 3, → 4, …
  When the expressions in the canonical representation become                                              a = 2: 0, → 4, → 8, → 12, → 16, …
more complex, the distinction between variable and parameter                                               a = 3: 0, → 9, → 18, → 27, → 36, …
can be made by remembering that the symbols representing the                              (Hint: try some plausible expressions such as n' – n + a, n' = a2n, etc.)
operands will appear, in some form, on the left, as x' or dx/dt; for                  Ex. 7: If n' = n + 3a, does the value given to a determine how large is n’s jump
the transformation must tell what they are to be changed to. So all                       at each step?

                                       44                                                                                     45
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                 THE MACHINE WITH INPUT

4/3. When the expression for a transducer contains more than one                       The parameters thus include the conditions in which the organism
meter, the number of distinct transformations may be as large e                        lives. In the chapters that follow, the reader must therefore be pre-
number of combinations of values possible to the parameters each                       pared to interpret the word “input” to mean either the few parame-
combination may define a distinct transformation), but never                           ters appropriate to a simple mechanism or the many parameters
exceed it.                                                                             appropriate to the free-living organism in a complex environment.
                                                                                       (The increase in the number of parameters does not necessarily
Ex. 1: Find all the transformations in the transducer Uab when a can take the val-     imply any diminution in the rigour of the argument, for all the
    ues 0, 1, or 2, and b the values 0 or 1.
                                  s' = (1 – a)s + abt
                                                                                       quantities concerned can be measured with an accuracy that is
                          Uab :  t' = (1 + b)t + (b –1)a                             bounded only by the experimenter’s resources of time and money.)
    How many transformations does the set contain?                                     Ex. 1: An electrical machine that receives potentials on its two input- terminals
                                                                                           is altered by having the two terminals joined permanently by a wire. To what
Ex. 2: (continued.) if the vector (a,b) could take only the values (0,1), (1n1), and       alteration in Tab would this correspond if the machine were represented as in
    (2,0), how many transformations would the transducer contain?                          Ex. 4/3/3.
Ex. 3: The transducer Tab,with variables p and q: f p = ap + bq                        Ex. 2: “When an organism interacts with its environment, its muscles are the
                                 
                          Tab :  p' = ap + bq
                                                                                           environment’s input and Its sensory organs are the environment’s output.”
                                   q' = bp + aq                                            Do you agree ?

    is started at (3,5). What values should be given to the parameters a and if
    (p,q) is to move, at one step, to (4,6)? (Hint: the expression for Tab can be      4/5. Transient. The electrical engineer and the biologist tend to test
    regarded as a simultaneous equation.)                                              their systems by rather different methods. The engineer often
Ex. 4: (Continued.) Next find a value for (a,b) that will make the system move,        investigates the nature of some unknown system by submitting it
    in one step, back from (4,6) to (3,5).
Ex. 5: The transducer n' = abn has parameters a and b, each of which can take
                                                                                       to an incessant regular change at its input while observing its out-
    any of the values o, 1, and 2. How many distinct transformations are there?        put. Thus, in Fourier analysis, he submits it to prolonged stimula-
    (Such indistinguishable cases are said to be “degenerate”; the rule given at       tion by a regular sinusoidal potential of a selected frequency, and
    the beginning of this section refers to the maximal number o transformations       he observes certain characteristics in the output; then he repeats the
    that are possible; the maximal number need not always be achieved).                test with another frequency, and so on; eventually he deduces
                                                                                       something of the system’s properties from the relations between
4/4. Input and output. The word “transducer” is used by the phys-                      the input-frequencies and the corresponding output-characteristics.
icist, and especially by the electrical engineer, to describe any                      During this testing, the machine is being disturbed incessantly.
determinate physical system that has certain defined places of                            The biologist often uses a method that disturbs the system not at
input, which the experimenter may enforce changes that affect its                      all, after the initial establishment of the conditions. Thus he may cut
behaviour, and certain defined places of output, at which he                           a piece of meat near an ants’ colony and then make no further
observes changes of certain variables, either directly or through                      change whatever—keeping the conditions, the parameters, con-
suitable instruments. It will now be clear that the mathematical                       stant—while watching the whole evolution of the complex patterns
system described in S.4/1 is the natural representation of such a                      of behaviour, individual and social, that develop subsequently.
material system. It will also be clear that the machine’s “input”                         Contrary to what is observed in living systems, the behaviour of
corresponds he set of states provided by its parameters; for as the                    mechanical and electrical systems often settles to some uniformity
parameters input are altered so is the machine’s or transducer’s                       fairly quickly from the moment when incessant change at the input
behaviour affected.                                                                    stops. The response shown by the machine after some disturbance,
   With an electrical system, the input is usually obvious and                         the input being subsequently held constant, is called a transient. It is
restricted to a few terminals. In biological systems, however, the                     important to appreciate that, to the engineer, the complex sequence
number of parameters is commonly very large and the whole set of                       of events at the ants’ nest is a transient. It may be defined in more
them is by no means obvious. It is, in fact, co-extensive with the                     general terms as the sequence of states produced by a transducer in
set of “all variables whose change directly affects the organism”.                     constant conditions before the sequence starts repeating itself.
                                        46                                                                                   47
                A N IN T R O D U C T IO N T O C Y BERNETI CS                                          THE MACHINE WITH INPUT

   To talk about the transient, as distinct from the repetitive part              so that they become “coupled” as two automobiles may be locked
that follows, it is convenient to be able to mark, unambiguously,                 together after an accident. This form, however, is of little interest
its end. If the transformation is discrete, the following method                  to us, for the automobiles are too much changed by the process. U
gives its length rigorously: Let the sequence of states go on till                flat we want is a way of coupling that does no violence to each
repetition becomes evident, thus                                                  machine’s inner working, so that after the coupling each machine
    A B C D C D C D C D C … or H E F G G G G G G G …                              is ,till the same machine that it was before.
                                                                                     For this or this to be so, the coupling must be arranged so that, in
Then, coming in from the right, make the mark “1” as soon as the                  principlen each machine affects the other only by affecting its con-
sequence departs from the cycle, thus                                             ditions, i. e. by, affecting its input. Thus, if the machines are to
  A B1 C D C D C D C D C … or H E F1 G G G G G G G …                              retain their individual natures after being coupled to form a whole,
                                                                                  the coupling must be between the (given) inputs and outputs, other
Next add the mark “2”, to the right of 1, to include one complete                 parts being left alone no matter how readily accessible they may be.
cycle, thus
 A B1 C D2 C D C D C D C … or H E F1 G2 G G G G G G G…                            4/7. Now trace the operation in detail. Suppose a machine (trans-
                                                                                  ducer) P is to be joined to another, R. For simplicity assume that
Then the transient is defined as the sequence of states from the                  P is going to affect R, without R affecting P, as when a micro-
initial state to the mark 2: A B C D, or H E F G.                                 phone is joined to an amplifier, or a motor nerve grows down to
   Rigorous form can now be given to the intuitive impression that                supply an embryonic muscle. We must couple P’s output to R’s
complex systems can produce, in constant conditions, more com-                    input. Evidently R’s behaviour, or more precisely the transforma-
plex forms of behaviour than can the simple. By drawing an arbi-                  tion that describes R’s changes of state, will depend on, and
trary kinematic graph on N states it is easy to satisfy oneself that              change with, the state of P. It follows that R must have parame-
if a closed single-valued transformation with N operands is                       ters, for input, and the values of these parameters must be at each
applied repeatedly, then the length of transient cannot exceed N                  moment some function of the state of P. Suppose for definiteness
states.                                                                           that the machine or transducer R has the three transformations
Ex. 1: What property must the graph have if the onset of a recurrence is to be    shown in S 4/1, i.e.
    postponed as long as possible?                                                                            ↓ a b c d
Ex. 2: What is the transient of the system of Ex. 3/6/6, started from the state
    (8,5)?                                                                                                  R1c d d b
                                                                                                            R2b a d c
                    C O U P LI N G S Y S T E M S                                                            R3d c d b
4/6. A fundamental property of machines is that they can be cou-                  and that P has the transformation, on the three states i, j, k:
pled. Two or more whole machines can be coupled to form one
                                                                                                                 P: ↓ k i i
                                                                                                                      i j k
machine; and any one machine can be regarded as formed by the
coupling of its parts, which can themselves be thought of as small,
sub-, machines. The coupling is of profound importance in sci-                    P and R are now to be joined by our specifying what value R’s
ence, for when the experimenter runs an experiment he is cou-                     parameter, call it x, is to take when P has any one of its states.
pling himself temporarily to the system that he is studying. To                   Suppose we decide on the relation Z (a transformation, single-val-
what does this process, the joining of machine to machine or of                   ued but not closed):
                                                                                                           state of P:
                                                                                                      Z:  value of α: ↓ 2 3 2
part to part, correspond in the symbolic form of transformations?                                                          i j k
Of what does the operation of “coupling” consist?                                                         
  Before proceeding to the answer we must notice that there is                    (The relation between P and α has been made somewhat irregular
more than one answer. One way is to force them roughly together,                  to emphasise that the details are quite arbitrary and are completely
                                     48                                                                            49
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                 THE MACHINE WITH INPUT

under the control of whoever arranges the coupling.) Let us fur-                          and join them into a single long chain
ther suppose—this is essential to the orderliness of the coupling—                                          input → Α →          → C → etc.,
that the two machines P and R work on a common time-scale, so
that their changes keep in step.                                                          so that A affects B, B affects C, and so on, by Z:
                                                                                                                               0 1 2
   It will now be found that the two machines form a new machine                                                          Z: ↓ α β γ
of completely determined behaviour. Thus, suppose the whole is                            If the input to A is kept at a, what happens to the states down the chain?
started with R at a and P at i. Because P at i., the R- transformation                Ex. 8: (Continued. ) What happens if the input is now changed for one step to β
will be R2 (by Z). This will turn a to b; P’s i will turn to k; so the                    and then returned to α, where it is held?
states a and i have changed determinately to b and k. The argu-
ment can now be repeated. With P at k, the R-transformation will                      4/8. Coupling with feedback. In the previous section, P was cou-
again (by Z) be R2 ; so b will turn (under R2 ) to a, and k will turn                 pled to R so that P’s changes affected, or determined in some way,
(under P) to i. This happens to bring the whole system back to the                    what R’s changes would be, but P’s changes did not depend on
initial state of (a,i), so the whole will evidently go on indefinitely                what state R was at. Two machines can, however, be coupled so
round this cycle.                                                                     that each affects the other.
                                                                                        For this to be possible, each must have an input, i.e. parameters.
   The behaviour of the whole machine becomes more obvious if                         P had no parameters, so this double coupling cannot be made
we use the method of S.3/5 and recognise that the state of the                        directly on the machines of the previous section. Suppose, then,
whole machine is simply a vector with two components (x,y),                           that we are going to couple R (as before) to S, given below:
where x is one of a, b, c, d and y is one of i, j, k. The whole
machine thus has twelve states, and it was shown above that the                                           ↓    a    b    c    d            ↓    e    f
state (a,i) undergoes the transitions
                                                                                                        R1     c    d    d    b           S1
                                                                                                                                        f f
                   (a,i) → (b,k) → (a,i) → etc.                                                         R2     b    a    d    c           S2
                                                                                                                                        e f
Ex. 1: If Q is the transformation of the whole machine, of the twelve states (x,y),                     R3     d    c    d    b           S3
                                                                                                                                        f f
    complete Q.                                                                                                                           S4
                                                                                                                                        f e
Ex. 2: Draw Q’s kinematic graph. How many basins has it?
Ex. 3: Join P and R by using the transformation Y                                     S could be coupled to affect R by Y(if R’s parameter is α):
                                
                            Y:  state of P: ↓ i j k                                                          
                                                                                                            Y:  state of S:α: ↓ 3e 1f
                                  value of α: 1 2 3
                                                                                                                value of
    What happens when this machine is started from (a,i) ?                            and R to affect S by X (if S’s parameter is β):
Ex. 4: If two machines are joined to form a whole, does the behaviour of the                               
    whole depend on the manner of coupling? (Hint: use the previous Ex.)                                X:  state of R: ↓ a b c d
                                                                                                            value of β:       3 1 1 2
Ex. 5. If two machines of n1 and n2 states respectively are joined together, what
    is the maximal length of transient that the whole can produce ?                   To trace the changes that this new whole machine (call it T) will
Ex. 6: If machine M has a maximal length of transient of n states, what will be       undergo, suppose it starts at the vector state (a,e). By Y and X, the
    the maximal length of transient if a machine is formed by joining three M’s       transformations to be used at the first step are R3 and S3. They, act-
    together ?                                                                        ing on a and e respectively, will give d and f; so the new state of
Ex. 7: Take many parts (A, B, C, . . .) each with transformation                      the whole machine is (d,f). The next two transformations will be
                                 ↓ 0 1 2                                              R1 and S2, and the next state therefore (b,f); and so on.
                                 α 0 2 0
                                 β 1 1 1                                              Ex. 1: Construct T’s kinematic graph.
                                 γ 2 2 2                                              Ex. 2: Couple S and R in some other way.
                                                                                      Ex. 3: Couple S and R so that S affects R but R does not affect S. (Hint: Consider
                                                                                          the effect in X of putting all the values of β the same.

                                       50                                                                                    51
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                             THE MACHINE WITH INPUT

4/9. Algebraic coupling. The process of the previous sections, by                      4/10. Ex. 4/7/4 has already shown that parts can, in general, be
treating the changes that each state and parameter undergo indi-                       coupled in different ways to form a whole. The defining of the
vidually, shows the relations that are involved in “coupling” with                     component parts does not determine the way of coupling.
perfect clarity and generality. Various modifications can be devel-                      From this follows an important corollary. That a whole machine
oped without any loss of this clarity.                                                 should be built of parts of given behaviour is not sufficient to
   Thus suppose the machines are specified, as is common, in                           determine its behaviour as a whole: only when the details of cou-
terms of vectors with numerical components; then the rule for                          pling are added does the whole’s behaviour become determinate.
coupling remains unaltered: each machine must have one or more
parameters, and the coupling is done by specifying what function                                                   F E E DBACK
these parameters are to be of the other machine’s variables. Thus                      4/11. In S.4/7, P and R were joined so that P affected R while R
the machines M and N                                                                   had no effect on P. P is said to dominate R, and (to anticipate S.4/
              a' = a2 + pb              c' = rsc + ud2                               12) we may represent the relation between the parts by
          M:  b' = – qa
                                    N:  d' = 2tue                                                                     P→ R
                                         e' = uce                                     (The arrow cannot be confused with that used to represent a tran-
might be joined by the transformations U and V:                                        sition (S.2/2), for the latter always relates two states, whereas the
                                                                                       arrow above relates two parts. In the diagrams to come, parts will
                p = 2c
                                         rs == aa –+ bb                               always be shown boxed.)
          U: 
                q = de2             V:  t = – a                                         Cybernetics is, however, specially interested in the case of S.4/8
                                         u = b2                                       where each affects the other, a relation that may be represented by
                                                                                                                        P← → R
U is a shorthand way of writing a whole set of transitions from a                      When this circularity of action exists between the parts of a
value of (c,d,e) to a value of (p,q), e.g.                                             dynamic system, feedback may be said to be present.
                  U: ↓ (0,0) (0,0) (2,75) (4,32)
                       (0,0,0) (0,0,1) (1,3,5) (2,2,4)                                    The definition of feedback just given is that most in accord with
                                                                                       the spirit of this book, which is concerned essentially with princi-
Similarly for V, a transformation from (a,b) to (r,s,t,u), which                       ples.
includes, e.g. (5,7) → (12, –2, –5, 49) (and compare P of S.6/9).                         Other definitions, however, are possible, and there has been
   The result of the coupling is the five-variable system with rep-                    some dispute as to the best; so a few words in explanation may be
resentation:                                                                           useful. There are two main points of view that have to be consid-
                        a' = a2 + 2bc                                                  ered.
                        b' = – ade2                                                       On the one side stand those who are following the path taken by
                        c' = (a2 – b2)c + b2d2                                         this book—those whose aim is to get an understanding of the prin-
                        d' – 2ab2e                                                     ciples behind the multitudinous special mechanisms that exhibit
                        e' = b2ce                                                      them To such workers, “feedback” exists between two parts when
(Illustrations of the same process with differential equations have                    each affects the other, as for instance, in
been given in Design for a Brain, S.21/6.)                                                                         x' = 2xy
                                                                                                                   y' = x – y2
Ex. 1.: Which are the parameters in M? Which in N?
Ex. 2.: Join M and N by W and X, and find what state (1, 0, 0, 1, 0), a value of (a,   for y’s value affects how x will change and so does x’s value affect
    b, c, d, e), will change to:                                                       y. By contrast, feedback would not be said to be present in
                                                 r = a
                         
                      W:  p = d            X:    st == ab                                                     x' = 2x
                          q = c                          a                                                     y' = x – y2
                                                 u = a
                                        52                                                                              53
                A N IN T R O D U C T IO N T O C Y BERNETI CS                                     THE MACHINE WITH INPUT

for x’s change does not now depend on y’s value; x dominates y,          Ex. 2: A machine with input a, has the transformation
and the action is one way only.                                                                            x' = y – αz
   On the other side stand the practical experimenters and con-                                       T:  y' = 2z
structors, who want to use the word to refer, when some forward                                            z' = x + α
effect from P to R can be taken for granted, to the deliberate con-          What machine (as transformation) results if its input α is coupled to its out-
duction of some effect back from R to P by some connexion that               put z, by α =–z?
i; physically or materially evident. They object to the mathemati-       Ex. 3: (Continued.) will this second machine behave differently from the first
cian’s definition, pointing out that this would force them to say            one when the first has α held permanently at–1 ?
that feed back was present in the ordinary pendulum (see Ex. 3/6/        Ex. 4: A machine has, among its inputs, a photoelectric cell; among its outputs a
14) between its position and its momentum—a “feedback” that,                 lamp of variable brightness. In Condition I there is no connexion from lamp
                                                                             to cell, either electrical or optical. In Condition 2 a mirror is placed so that
from the practical point of view, is somewhat mystical. To this the          variations in the lamp’s brightness cause variations in the cell’s potential (i.e.
mathematician retorts that if feedback is to be considered present           so that the machine can “see itself”). Would you expect the behaviours in
only when there is an actual wire or nerve to represent it, then the         Conditions 1 and 2 to differ? (Hint: compare with Ex. 3.)
theory becomes chaotic and riddled with irrelevancies.
   In fact, there need be no dispute, for the exact definition of
“feedback” is nowhere important. The fact is that the concept of                    INDE P E NDE NCE WI T HI N A WHOL E
“feedback”, so simple and natural in certain elementary cases,           4/12. In the last few sections the concept of one machine or part
becomes artificial and of little use when the interconnexions            or variable “having an effect on” another machine or part or vari-
between the parts become more complex. When there are only               able has been used repeatedly. It must now be made precise, for it
two parts joined so that each affects the other, the properties of the   is of profound importance. What does it mean in terms of actual
feedback give important and useful information about the proper-         operations on a given machine? The process is as follows.
ties of the whole. But when the parts rise to even as few as four,          Suppose we are testing whether part or variable i has an imme-
if every one affects the other three, then twenty circuits can be        diate effect on part or variable j. Roughly, we let the system show
traced through them; and knowing the properties of all the twenty        its behaviour, and we notice whether the behaviour of part j is
circuits does not give complete information about the system.            changed when part i’s value is changed. If part j’s behaviour is
Such complex systems cannot be treated as an interlaced set of           just the same, whatever i’s value, then we say, in general, that i
more or less independent feedback circuits, but only as a whole.         has no effect on j.
   For understanding the general principles of dynamic systems,             To be more precise, we pick on some one state S (of the whole
therefore, the concept of feedback is inadequate in itself. What is      system) first. With i at some value we notice the transition that
important is that complex systems, richly cross-connected inter-         occurs in part j (ignoring those of other variables). We compare
nally, have complex behaviours, and that these behaviours can be         this transition with those that occur when states S1, S2, etc.—other
goal-seeking in complex patterns.                                        than S—are used, in which S1, S2, etc. differ from S only in the
                                                                         value of the i-th component. If S1, S2, etc., give the same transition
Ex. 1: Trace twenty circuits in the diagram of Fig. 4/11/1:              in part j as S, then we say that i has no immediate effect on j, and
                                                                         vice versa. (“Immediate” effect because we are considering j’s
                                                                         values over only one step of time.)
                                                                            Next consider what the concept means in a transformation. Sup-
                                                                         pose its elements are vectors with four components (u,x,y,z), and
                                                                         that the third line of the canonical equations reads
                                                                                                      y' = 2uy – z.
                                   Fig. 4/11/1
                                                                         This tells us that if y is at some value now, the particular value it
                                                                         will be at the next step will depend on what values u and z have,
                                       54                                                                         55
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                THE MACHINE WITH INPUT

but will not depend on what value x has. The variables u and z are     arbitrariness in the distribution of the immediate effects over the
said to have an immediate effect on y.                                 phase space. Often, however, the distribution shows continuity, so
   It should be noticed, if the rigour is to be maintained, that the   that over some appreciable region, the variable u, say, has an
presence or absence of an immediate effect, of u on y say, can be      immediate effect on y while over the same region x has none.
stated primarily only for two given states, which must have the        When this occurs, a diagram can often usefully be drawn showing
same values in their x, y, and z-components and must differ in         these relations as they hold over the region (which may some-
their u-components. For an immediate effect at one pair of states      times be the whole phase-space). An arrow is drawn from u to y
does not, in general, restrict the possibilities at another pair of    if and only if u has an immediate effect on y. Such a diagram will
states. Thus, the transformation mentioned above gives the transi-     be called the diagram of immediate effects.
tions:                                                                    Such diagrams are already of common occurrence. They are
                         (0,0,0,0) → ( , ,0, )                         often used in physiology to show how a related set of variables
                         (1,0,0,0) → ( , ,0, )                         (such as blood pressure, pulse rate, secretion of adrenaline, and
                         (0,0,1,0) → ( , ,0, )                         activity at the carotid sinus) act on one another. In the design of
                         (1,0,1,0) → ( , ,2, )                         computing machines and servomechanisms they are known as
                                                                       “control-flow charts”. They are also used in some large busi-
(where irrelevant values have been omitted). The first two show        nesses to show the relations of control and information existing
that in one region of space u does not have an immediate effect on     between the various departments.
y, and the second two show that in another region it does. Strictly,      The arrow used in such a diagram is, of course, profoundly dif-
therefore, the question “what is the immediate effect of u on y?”      ferent in meaning from the arrow used to show change in a tran-
can be answered only for a given pair of states. Often, in simple      sition (S.2/2). In the latter case it means simply that one state
systems, the same answer is given over the whole phase space; if       changes to another; but the arrow in the diagram of immediate
this should happen we can then describe the immediate effect of        effects has a much more complex meaning. In this case, an arrow
u on y unconditionally. Thus in the example above, u has an            from A to B says that if, over a series of tests, A has a variety of
immediate effect on y at all points but a particular few.              different values—B and all other conditions starting with the same
   This test, for u’s immediate effect on y, simply does in symbols    value throughout—then the values that B changes to over the
what the experimenter does when he wishes to test whether one          series will also be found to show variety. We shall see later (S.8/
variable has an immediate effect on another: he fixes all variables    11) that this is simply to say that a channel of communication goes
except this pair, and compares how one behaves when the other          from A to B.
has a value u1 with how it behaves when the other has the value u2.       When a transducer is given, either in algebraic or real material
   The same method is, in fact, used generally in everyday life.       form, we can examine the immediate effects within the system
Thus, if we go into a strange room and wish to turn on the light,      and thus deduce something of its internal organisation and struc-
and find switches, our problem is to find which switches are and       ture. In this study we must distinguish carefully between “imme-
which are not having an effect on the light’s behaviour. We            diate” and “ultimate” effects. In the test given above, the effect of
change one of the switches and observe whether this is followed        x on y was considered over a single step only, and this restriction
by a change in the light’s behaviour. In this way we discover on       is necessary in the basic theory. x was found to have no immediate
which switch the light is dependent.                                   effect on y; it may however happen that x has an immediate effect
   The test thus accords with common sense and has the advantage       on u and that u has an immediate effect on y, then x does have
of being applicable and interpretable even when we know nothing        some effect on y, shown after a delay of one extra step. Such an
of the real physical or other factors at work. It should be noticed    effect, and those that work through even longer chains of vari-
that the test requires no knowledge of extraneous factors: the         ables and with longer delay, will be referred to as ultimate
result is deduced directly from the system’s observed behaviour,       effects. A diagram of ultimate effects can be constructed by
and depends only on what the system does, not on why it does it.       drawing an arrow from A to B if and only if A has an ultimate
   It was noticed above that a transducer may show any degree of       effect on B. The two diagrams are simply related, for the diagram

                                  56                                                                    57
                A N IN T R O D U C T IO N T O C Y BERNETI CS                                              THE MACHINE WITH INPUT

of immediate effects, if altered by the addition of another arrow                    What of y’s transitions? We can re-classify them, with x as
wherever there are two joined head to tail, turning                                parameter, by representing, e.g. “00 → 01” as “when x = 0, y goes
                                                                                   from 0 to 1”. This gives the table
                          u                         u                                                                   y
                                                                                                                ↓    0 1 2
                    x           y             x    →      y                                                     0     1 0 1
                                                                                                          x     1     1 0 1
and continuing this process until no further additions are possible,
gives the diagram of ultimate effects.                                                                          2     1 0 1
  If a variable or part has no ultimate effect on another, then the                  It shows at once that y’s transitions do not depend on the value
second is said to be independent of the first.                                     of x. So x has no immediate effect on y.
  Both the diagrams, as later examples will show, have features                      Now classify x’s transitions similarly. We get:
corresponding to important and well-known features of the sys-                                                           y
tem they represent.
                                                                                                                ↓     0 1 2
Ex. 1: Draw the diagrams of immediate effects of the following absolute sys-
    tems; and notice the peculiarity of each:                                                                        01 1 1
    (i) x' = xy, y' = 2y.                                                                                      x     10 0 2
    (ii) x' = y, y' = z + 3, z' = x2.
    (iii) u' = 2 + ux, v' = v – y, x' = u + x, y' = y + v2.                                                          21 2 1
    (iv) u' = 4u – 1, x' = ux, y' = xy + 1, z' = yz.
    (v) u' = u + y, x' = 1 – y, y' = log y, z' = z + yz.                           What x will do (i.e. x’s transition) does depend on y’s value, so y
    (vi) u' = sin 2u, x' = x2, y' = y + 1, z' = xy + u.                            has an immediate effect on x.
Ex. 2: If y' = 2uy – z, under what conditions does u have no immediate effect on      Thus, the diagram of immediate effects can be deduced from a
    y?                                                                             statement of the primary transitions. It is, in fact,
Ex. 3: Find examples of real machines whose parts are related as in the diagrams
    of immediate effects of Ex. 1.                                                                                y → x
Ex. 4: (Continued.) Similarly find examples in social and economic systems.        and y has been proved to dominate x.
Ex. 5: Draw up a table to show all possible ways in which the kinematic graph
    and the diagram of immediate effects are different.                            Ex.: A system has three variables—x, y, z—each of which can take only the val-
                                                                                       ues 0 or 1. If the transformation is
                                                                                                        000 001 010 011 100 101 110 111
4/13. In the discussion of the previous section, the system was                                     ↓ 110 111 100 101 110 011 100 001
given by algebraic representation; when described in this form,                        what is the diagram of immediate effects ? (Hint: First find how z’s transi-
the deduction of the diagram of immediate effects is easy. It                          tions depend on the values of the others.)
should be noticed, however, that the diagram can also be deduced
directly from the transformation, even when this is given simply                   4/14. Reducibility. In S.4/11 we noticed that a whole system may
as a set of transitions.                                                           consist of two parts each of which has an immediate effect on the
  Suppose, for instance that a system has two variables, x and y,                  other:
each of which can take the values 0, 1 or 2, and that its (x,y)-states
behave as follows (parentheses being omitted for brevity):                                                       P←→ Q
                                                                                   We also saw that the action may be only one way, in which case
               ↓
                   00 01 02 10 11 12 20 21 22                                      one part dominates the other:
                   01 00 11 11 00 21 11 20 11                                                                    P→ Q

                                      58                                                                                 59
                A N IN T R O D U C T IO N T O C Y BERNETI CS                                     THE MACHINE WITH INPUT

In this case the whole is less richly connected internally, for one             At this minute of writing, the Laughter and Singing are
of the actions, or channels, is now missing.                                  troth sounding. Please tell me what manipulations of
  The lessening can continue. We may find that the diagram of                 incense and organ I should make to get the house quiet, and
immediate effects is simply                                                   to keep it so.
                               P    Q                                      (Hint: Compare Ex. 4/1/4.)
so that the whole consists really of two parts that are functionally       Ex. 2: (Continued.) Does the Singing have an immediate effect on the Laughter ?
independent. In this case the whole is said to be reducible. The           Ex. 3: (Continued.) Does the incense have an immediate effect on the Singing ?
importance of this concept will be referred to later (S.13/21).            Ex. 4: (Continued.) Deduce the diagram of immediate effects of this machine
                                                                               with input (with two parameters and two variables).
Ex.: Of the systems in Ex. 4/12/1, which are reducible?

                                                                                            T HE VE RY L ARGE S YS T E M
4/15. Materiality. The reader may now like to test the methods of
this chapter as an aid to solving the problem set by the following         4/16. Up till now, the systems considered have all seemed fairly
letter. It justifies the statement made in S.1/2 that cybernetics is not   simple, and it has been assumed that at all times we have under-
bound to the properties found in terrestrial matter, nor does it draw      stood them in all detail. Cybernetics, however, looks forward to
its laws from them. What is important in cybernetics is the extent         being able to handle systems of vastly greater complexity—com-
to which the observed behaviour is regular and reproducible.               puting machines, nervous systems, societies. Let us, then, con-
                                                                           sider how the methods developed so far are to be used or modified
                                                                           when the system is very large.
                                                          “Graveside”
                                                            Wit’s End
                                                              Haunts.      4/17. What is meant by its “size” needs clarification, for we are
   Dear Friend,                                                            not here concerned with mere mass. The sun and the earth form
      Some time ago I bought this old house, but found it to be            only a “small” system to us, for astronomically they have only
   haunted by two ghostly noises—a ribald Singing and a sar-               twelve degrees of freedom. Rather, we refer to the system’s com-
   donic Laughter. As a result it is hardly habitable. There is            plexity. But what does that mean here ? If our dynamic system
   hope, however, for by actual testing I have found that their            were a native family of five persons, would we regard it as made
   behaviour is subject to certain laws, obscure but infallible,           of 5 parts, and therefore simple, or as of 1025 atoms, and therefore
   and that they can be affected by my playing the organ or                very complex ?
   burning incense.                                                           In the concepts of cybernetics, a system’s “largeness” must
      In each minute, each noise is either sounding or silent—             refer to the number of distinctions made: either to the number of
   they show no degrees. What each will do during the ensu-                states available or, if its states are defined by a vector, to the num-
   ing minute depends, in the following exact way, on what                 ber of components in the vector (i.e. to the number of its variables
   has been happening during the preceding minute:                         or of its degrees of freedom, S.7/13). The two measures are corre-
   The Singing, in the succeeding minute, will go on as it was             lated, for if other things are equal, the addition of extra variables
   during the preceding minute (sounding or silent) unless there           will make possible extra states. A system may also be made larger
   was organ-playing with no Laughter, in which case it will               from our functional point of view if, the number of variables
   change to the opposite (sounding to silent, or vice versa).             being fixed, each is measured more precisely, so as to make it
      As for the Laughter, if there was incense burning, then it           show more distinguishable states. We shall not, however, be
   will sound or not according as the Singing was sounding or              much interested in any exact measure of largeness on some par-
   not (so that the Laughter copies the Singing a minute later).           ticular definition; rather we shall refer to a relation between the
   If however there was no incense burning, the Laughter will              system and some definite, given, observer who is going to try to
   do the opposite of what the Singing did.                                study or control it. In this book I use the words “very large” to
                                      60                                                                        61
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                    THE MACHINE WITH INPUT

imply that some definite observer en, with definite resources and         than the more usual variables, that it requires no explicit mention of
techniques, and that the system some practical way, too large for         the system’s number of parts; and theorems once proved true are
him; so that he cannot observe completely, or control it com-             true for systems of all sizes (provided, of course, that the systems
pletely, or carry out the calculations for prediction completely. In      conform to the suppositions made in the argument).
other words, he says the system “very large” if in some way it               What remains valid is, of course, the truth of the mathematical
beats him by its richness and complexity.                                 deductions about the mathematically defined things. What may
   Such systems are common enough. A classic case occurred                change, as the system becomes very large, is the applicability of
when the theoretical physicist of the nineteenth century tried to         these theorems to some real material system. The applicability,
use Newtonian mechanics to calculate how a gas would behave.              however, can be discussed only in relation to particular cases. For
The number of particles in an ordinary volume of gas is so vast           the moment, therefore, we can notice that size by itself does not
that no practical observation could record the system’s state, and        invalidate the reasonings that have been used so far.
no practical relation could predict its future. Such a system was
“very ” in relation to the nineteenth century physicist.                  4/19. Random coupling. Suppose now that the observer faces a
   The stock-breeder faces a “very large” system in the genes he is       system that, for him, is very large. How is he to proceed ? Many
g to mould to a new pattern. Their number and the complexities            questions arise, too many to be treated here in detail, so I shall
of their interactions makes a detailed control of them by impossi-        select only a few topics, letting them serve as pattern for the rest.
ble in practice.                                                          (See S.6/19 and Chapter 13.) First, how is the system to be speci-
   Such systems, in relation to our present resources for observa-        fied ?
tion control, are very common in the biological world, and in its            By definition, the observer can specify it only incompletely.
social and economic relatives. They are certainly common in the           This is synonymous with saying that he must specify it “statisti-
brain, though for many years the essential complexity was given           cally”, for statistics is the art of saying things that refer only to
only grudging recognition. It is now coming to be recognised,             some aspect or portion of the whole, the whole truth being too
however, that this complexity is something that can be ignored no         bulky for direct use. If it has too many parts for their specification
longer. “Even the simplest bit of behavior”, says Lashley,                individually they must be specified by a manageable number of
“requires the integrated action of millions of neurons.... I have         rules, each of which applies to many parts. The parts specified by
come to believe almost every nerve cell in the cerebral cortex may        one rule need not be identical; generality can be retained by
be excited in every activity.... The same neurons which maintain          assuming that each rule specifies a set statistically. This means
the memory traces and participate in the revival of a memory are          that the rule specifies a distribution of parts and a way in which it
also involved, in different combinations, in thousands of other           shall be sampled. The particular details of the individual outcome
memories acts.” And von Neumann: “The number of neurons in                are thus determined not by the observer but by the process of sam-
the central nervous system is somewhere of the order of 1010. We          pling (as two people might leave a decision to the spin of a coin).
have absolutely no past experience with systems of this degree of            The same method must be used for specification of the cou-
complexity. All artificial automata made by man have numbers of           pling. If the specification for coupling is not complete it must in
parts which by any comparably schematic count are of the order            some way be supplemented, for ultimately some individual and
103 to 106.” (Cerebral Mechanisms in Behavior.)                           single coupling must actually occur between the parts. Thus the
                                                                          coupling must contain a “random” element. What does this mean?
4/18. It should be noticed that largeness per se in no way invalidates       To make the discussion definite, suppose an experimenter has
the principles, arguments, and theorems of the previous chapters.         before him a large number of identical boxes, electrical in nature,
Though the examples have been confined to systems with only a             each with three input and three output terminals. He wishes to form
states or a few variables, this restriction was solely for the author’s   an extensive network, coupled “at random”, to see what its proper-
and reader’s convenience: the arguments remain valid without any          ties will be. He takes up some connecting wires and then realises
restriction on the number of states or variables in the system. It is a   that to say “couple them at random” is quite insufficient as a defi-
peculiar advantage of the method of arguing about states, rather          nition of the way of coupling; all sorts of “couplings at random”
                                  62                                                                       63
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                        THE MACHINE WITH INPUT

are possible. Thus he might, if there are n boxes, label 6n cards         must specify a general method by which the details shall be spec-
with numbers from 1 to 6n, label the terminals similarly, shuffle         ified by some source other than himself. In the examples above, it
the cards and then draw two cards to nominate the two terminals           was a pack of cards that made the final decision. A final, unique
that shall be joined with the first wire. A second pair of cards will     system can thus be arrived at provided his specification is supple-
name the terminals joined by the second wire; and so on. A deci-          mented. (The subject is developed more thoroughly in S.13/18.)
sion would have to be made whether the first two drawn cards were
to be replaced or not before the next shuffling and drawing. The          Ex. 1: Define a method (using dice, cards, random numbers, etc.) that will bring
                                                                              the closed single-valued transformation T:
decision is important, for replacement allows some terminals to                                          S S S S S S
have no wire and others to have several, while non-replacement                                      T: ↓ ?1 ?2 ?3 ?4 ?5 ?6
forces every terminal to have one wire and one only. This distinc-            to some particular form, so that the final particular form is selected by the
tion would probably be significant in the characteristics of the net-         method and not by the reader.
work and would therefore require specification. Again, the method         Ex. 2: (Continued.) Define a method so that the transformation shall be one-one,
just mentioned has the property of allowing output to be joined to            but not otherwise restricted.
output. If this were undesirable a new method would have to be            Ex. 3: (Continued.) Define a method so that no even-numbered state shall trans-
                                                                              form to an odd-numbered state.
defined; such might be: “Label the inputs 1 to 3n and also outputs        Ex. 4: (Continued.) Define a method so that any state shall transform only to a
1 to 3n; label 3n cards with numbers 1 to 3n; join a wire to input 1          state adjacent to it in number.
and draw a card to find which output to connect it to; go on simi-        Ex. 5: Define a method to imitate the network that would be obtained if parts
larly through inputs 2, . . ., 3n”. Here again replacement of the card        were coupled by the following rule: In two dimensions, with the parts placed
means that one output may go to several inputs, or to none; non-              m a regular pattern thus:
replacement would give one output to each input.                                                              0 0 0
   Enough has probably been said to show how essential an accu-                                               0 0 0
rate definition of the mode of sampling can be. Sometimes, as                                                 0 0 0
when the experimenter takes a sample of oxygen to study the gas               extending indefinitely in all directions in the plane, each part either has an
laws in it, he need not specify how he obtained the sample, for               immediate effect on its neighbour directly above it or does not, with equal
almost all samples will have similar properties (though even here             probability; and similarly for its three neighbours to right and left and below.
the possibility of exact definition may be important, as Rayleigh             Construct a sample network.
and Ramsay found when some specimens of nitrogen gave persis-
tently different atomic weights from others).                             4/20. Richness of connexion. The simplest system of given large-
   This “statistical” method of specifying a system—by specifica-         ness is one whose parts are all identical, mere replicates of one
tion of distributions with sampling methods—should not be                 another, and between whose parts the couplings are of zero degree
thought of as essentially different from other methods. It includes       (e.g. Ex. 4/1/6). Such parts are in fact independent of each other
the case of the system that is exactly specified, for the exact spec-     which makes the whole a “system” only in a nominal sense, for it
ification is simply one in which each distribution has shrunk till        is totally reducible. Nevertheless this type of system must be con-
its scatter is zero, and in which, therefore, “sampling” leads to one     sidered seriously, for it provides an important basic form from
inevitable result. What is new about the statistical system is that       which modifications can be made in various ways. Approximate
the specification allows a number of machines, not identical, to          examples of this type of system are the gas whose atoms collide
qualify for inclusion. The statistical “machine” should therefore         only rarely, the neurons in the deeply narcotised cortex (if they
be thought of as a set of machines rather than as one machine. For        can be assumed to be approximately similar to one another) and a
this chapter, however, this aspect will be ignored (it is taken up        species of animals when the density of population is so low that
fully in Chapter 7).                                                      they hardly ever meet or compete. In most cases the properties of
   It will now be seen, therefore, that it is, in a sense, possible for   this basic type of system are fairly easily deducible.
an observer to specify a system that is too large for him to specify!        The first modification to be considered is obviously that by
The method is simple in principle: he must specify broadly, and           which a small amount of coupling is allowed between the parts,

                                  64                                                                              65
              A N IN T R O D U C T IO N T O C Y BERNETI CS               THE MACHINE WITH INPUT

so that some coherence is introduced into the whole. Suppose then
that into the system’s diagram of immediate effects some actions,
i.e. some arrows, are added, but only enough to give coherency to
the set of parts. The least possible number of arrows, if there are
n parts, is n–1; but this gives only a simple long chain. A small
amount of coupling would occur if the number of arrows were
rather more than this but not so many as n2–n (which would give
every part an immediate effect on every other part).
   Smallness of the amount of interaction may thus be due to
smallness in the number of immediate effects. Another way,
important because of its commonness, occurs when one part or
variable affects another only under certain conditions, so that the
immediate effect is present for much of the time only in a nominal
sense. Such temporary and conditional couplings occur if the vari-
able, for any reason, spends an appreciable proportion of its time
not varying (the “part-function”). One common cause of this is the
existence of a threshold, so that the variable shows no change
except when the disturbance coming to it exceeds some definite
value. Such are the voltage below which an arc will not jump
across a given gap, and the damage that a citizen will sustain




                                                                                                  Figure 4/20/1
before he thinks it worth while going to law. In the nervous sys-
tem the phenomenon of threshold is, of course, ubiquitous.
   The existence of threshold induces a state of affairs that can be
regarded as a cutting of the whole into temporarily isolated sub-
systems; for a variable, so long as it stays constant, cannot, by S.4/
12, have an effect on another; neither can it be affected by another.
In the diagram of immediate effects it will lose both the arrows
that go from it and those that come to it. The action is shown dia-
grammatically in Fig. 4/20/1.
   The left square shows a basic network, a diagram of immediate
effects, as it might have been produced by the method of Ex. 4/19/
5. The middle square shows what remains if thirty per cent of the
variables remain constant (by the disturbances that are coming to
them being below threshold). The right square shows what
remains if the proportion constant rises to fifty per cent. Such
changes, from left to right, might be induced by a rising threshold.
It will be seen that the reacting sub-systems tend to grow smaller
and smaller, the rising threshold having the effect, functionally, of
cutting the whole network into smaller and smaller parts.
   Thus there exist factors, such as “height of threshold” or “pro-
portion of variables constant”, which can vary a large system con-
tinuously along the whole range that has at one end the totally
joined form, in which every variable has an immediate effect on

                                  66                                               67
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                           THE MACHINE WITH INPUT

every other variable, and at the other end the totally-unjoined                      cies are more or less alike. In this system various properties, if
form, in which every variable is independent of every other. Sys-                    they exist in one place, can also exist in other places. It follows
tems can thus show more or less of “wholeness”. Thus the degree                      that the basic properties of the biological world will be of the
may be specifiable statistically even though the system is far too                   types to be described in the following sections.
large for the details to be specified individually.
Ex.: Can a disturbance a: A (Fig. 4/20/1) affect B in the left-hand system? In the   4/22. Self-locking properties. It is a general property of these sys-
    other two?                                                                       tems that their behaviour in time is much affected by whether
                                                                                     there can, or cannot, develop properties within them such that the
4/21. Local properties. Large systems with much repetition in the                    property, once developed, becomes inaccessible to the factors that
parts, few immediate effects, and slight couplings, can commonly                     would “undevelop” it. Consider, for instance, a colony of oysters.
show some property .n a localised form, so that it occurs in only                    Each oyster can freely receive signals of danger and can shut
a few variables, and so :hat its occurrence (or not) in the few vari-                close; once shut, however, it cannot receive the signals of safety
ables does not determine whether or not the same property can                        that would re-open it. Were these the only factors at work we
occur in other sets of a few variables. Such localisable properties                  could predict that in time the colony of oysters would pass entirely
are usually of great importance in such systems, and the remain-                     into the shut condition—an important fact in the colony’s history!
der of this chapter will be given to their consideration. Here are                      In many other systems the same principle can be traced more
some examples.                                                                       seriously, and in almost all it is important. Consider, for instance
   In simple chemistry the reaction of silver nitrate in solution                    a solution of reacting molecules that can form various compounds
with sodium chloride for instance—the component parts number                         some of which can react again but one of which is insoluble, so
about 1022, thus constituting a very large system. The parts                         that molecules in that form are unreactive. The property of “being
(atoms, ions, etc.) are largely repetitive, for they consist of only                 the insoluble compound” is now one which can be taken by part
a dozen or so types. In addition, each part has an immediate effect                  after part but which, after the insolubility has taken the substance
on only a minute fraction of the totality of parts. So the coupling                  out of solution, cannot be reversed. The existence of this property
(or not) of one silver ion to a chloride ion has no effect on the                    is decisive in the history of the system, a fact well known in chem-
great majority of other pairs of ion; As a result, the property                      istry where it has innumerable applications.
“coupled to form AgCl” can exist over and over again in recogn-                         Too little is known about the dynamics of the cerebral cortex for
isable form throughout the system. Contrast this possibility of                      us to be able to say much about what happens there. We can how-
repetition with what happens in a well coupled system, in a ther-                    ever see that if the nerve cells belong to only a few types, and if
mostat for instance. In the thermostat, such a localised property                    the immediate effects between them are sparse, then if any such
can hardly exist, and can certainly not be repeated independently                    “self-locking” property can exist among them it is almost certain
elsewhere in the system; for the existence of any property at one                    to be important—to play a major part in determining the cortex’s
point is decisive in determining what shall happen at the other                      behaviour, especially when this continues over a long time. Such
points.                                                                              would occur, for instance, if the cells had some chance of getting
   The change from the chemistry of the solution in a test tube to                   into closed circuits that reverberated too strongly for suppression
that of protoplasm is probably of the same type, the protoplasm,                     by inhibition. Other possibilities doubtless deserve consideration.
as a chemically dynamic system, being too richly interconnected                      Here we can only glance at them.
in its parts to allow much local independence in the occurrence of                      The same principle would also apply in an economic system if
some property.                                                                       workers in some unpleasant industry became unemployed from
   Another example is given by the biological world itself,                          time to time, and during their absence discovered that more pleas-
regarded as a system of men’ parts This system, composed ulti-                       ant forms of employment were available. The fact that they would
mately of the atoms of the earth’s surface, is made of parts that are                pass readily from the unpleasant to the pleasant industry, but
largely repetitive, both at a low level in that all carbon atoms are                 would refuse to go back, would clearly be a matter of high impor-
chemically alike, and at a high level in that all members of a spe-                  tance in the future of the industry.
                                  68                                                                                  69
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                   THE MACHINE WITH INPUT

  In general, therefore, changes that are self-locking are usually of    is shown, for instance, in a piece of pitchblende, by the number of
high importance in determining the eventual state of the system.         atoms that are of radium. It is also shown by the number in a spe-
                                                                         cies when the species is tending to extinction.
4/23. Properties that breed. It should be noticed that in the previ-        (2) k = 1. In this case the number tends to stay constant. An
ous section we considered, in each example, two different sys-           example is given by the number of molecules dissociated when
tems. For though each example was based on only one material             the percentage dissociated is at the equilibrial value for the condi-
entity, it was used to provide two sets of variables, and these sets     tions obtaining. (Since the slightest deviation of k from 1 will take
form, by S. 3/11, two systems. The first was the obvious set, very       the system into one of the other two cases it is of little interest.)
large in number, provided by the parts; the second was the system           (3) k > 1. This case is of great interest and profound importance.
with one variable: “number of parts showing the property”. The           The property is one whose presence increases the chance of its
examples showed cases in which this variable could not diminish          further occurrence elsewhere. The property “breeds”, and the sys-
with time. In other words it behaved according to the transforma-        tem is, in this respect, potentially explosive, either dramatically,
tion (if the number is n):                                               as in an atom bomb, or insidiously, as in a growing epidemic. A
                                                                         well known example is autocatalysis. Thus if ethyl acetate has
                                n' ≥ n.                                  been mixed with water, the chance that a particular molecule of
                                                                         ethyl acetate will turn, in the next interval, to water and acetic acid
   This transformation is one of the many that may be found when         depends on how many acetate molecules already have the prop-
the changes of the second system (number of parts showing the            erty of being in the acid form. Other examples are commonly
property) is considered. It often happens that the existence of the      given by combustion, by the spread of a fashion, the growth of an
property at some place in the system affects the probability that it     avalanche, and the breeding of rabbits.
will exist, one time-interval later, at another place. Thus, if the         It is at this point that the majestic development of life by Dar-
basic system consists of a trail of gunpowder along a line 12            winian evolution shows its relation to the theory developed here
inches long, the existence of the property “being on fire” now at        of dynamic systems. The biological world, as noticed in S.4/21, is
the fourth inch makes it highly probable that, at an interval later,     a system with something like the homogeneity and the fewness of
the same property will hold at the third and fifth inches. Again, if     immediate effects considered in this chapter. In the early days of
a car has an attractive appearance, its being sold to one house is       the world there were various properties with various k’s. Some
likely to increase its chance of being sold to adjacent houses. And      had k less than 1—they disappeared steadily. Some had k equal to
if a species is short of food, the existence of one member               1—they would have remained. And there were some with k
decreases the chance of the continued, later existence of another        greater than I—they developed like an avalanche, came into con-
member.                                                                  flict with one another, commenced the interaction we call “com-
   Sometimes these effects are of great complexity; sometimes            petition”, and generated a process that dominated all other events
however the change of the variable “number having the property”          in the world and that still goes on.
can be expressed sufficiently well by the simple transformation             Whether such properties, with k greater than I, exist or can exist
n' = kn, where k is positive and independent of n.                       in the cerebral cortex is unknown. We can be sure, however, that
   When this is so, the history of the system is often acutely depen-    ~f such do exist they will be of importance, imposing outstanding
dent on the value of k, particularly in its relation to + 1. The equa-   characteristics on the cortex’s behaviour. It is important to notice
tion has as solution, if t measures the number of time- intervals        that this prediction can be made without any reference to the par-
that have elapsed since t = 0, and if n0 was the initial value:          ticular details of what happens in the mammalian brain, for it is
                                                                         true of all systems of the type described.
                            n = n0 e (k - 1)t
Three cases are distinguishable.                                         4/24. The remarks made in the last few sections can only illus-
   (1) k < 1. In this case the number showing the property falls         trate, in the briefest way, the main properties of the very large sys-
steadily, and the density of parts having the property decreases. It     tem. Enough has been said, however, to show that the very large
                                  70                                                                       71
              A N IN T R O D U C T IO N T O C Y BERNETI CS

system is not wholly different from the systems considered in the
earlier chapters, and to show that the construction of a really ade-
quate theory of systems in general is more a question of time and
labour than of any profound or peculiar difficulty.
  The subject of the very large system is taken up again in S.6/14.




                                  72
Chapter                                                             5

                       ST AB IL IT Y
5/1. The word “stability” is apt to occur frequently in discussions
of machines, but is not always used with precision. Bellman refers
to it as “. . . stability, that much overburdened word with an unsta-
bilised definition”. Since the ideas behind the word are of great
practical importance, we shall examine the subject with some care,
distinguishing the various types that occur.
   Today’s terminology is unsatisfactory and confused; I shall not
attempt to establish a better. Rather I shall focus attention on the
actual facts to which the various words apply, so that the reader will
tend to think of the facts rather than the words. So far as the words
used are concerned, I shall try only to do no violence to established
usages, and to be consistent within the book. Each word used will
be carefully defined, and the defined meaning will be adhered to.

5/2. Invariant. Through all the meanings runs the basic idea of an
“invariant”: that although the system is passing through a series of
changes, there is some aspect that is unchanging; so some state-
ment can be made that, in spite of the incessant changing, is true
unchangingly. Thus, if we take a cube that is resting on one face
and tilt it by 5 degrees and let it go, a whole series of changes of
position follow. A statement such as “its tilt is 1°” may be true at
one moment but it is false at the next. On the other hand, the state-
ment “its tilt does not exceed 6°” remains true permanently. This
truth is invariant for the system. Next consider a cone stood on its
point and released, like the cube, from a tilt of 5°. The statement
“its tilt does not exceed 6°” is soon falsified, and (if we exclude
reference to other subjects) so are the statements with wider lim-
its. This inability to put a bound to the system’s states along some
trajectory corresponds to “instability”.
   These are the basic ideas. To make them incapable of ambiguity
we must go back to first principles.
5/3. State of equilibrium. The simplest case occurs when a state
and a transformation are so related that the transformation does
                                 73
                A N IN T R O D U C T IO N T O C Y BERNETI CS                                                            STABILITY

not cause the state to change. Algebraically it occurs when T(x) =                  Ex. 4: Find all the states of equilibrium of the transformation:
x. Thus if T is                                                                                                   dx/dt = e- sin x, dy/dt = x2.
                                                                                    Ex. 5: If x' = 2x–y + j, y' = x + y + k, find values for j and k that will give a state
                                  a b c d e f g h
                       T: ↓                                                             of equilibrium at (1,1). (Hint: First modify the equations to represent the
                                                                                        state of equilibrium.)
                                  d b h a e f b e
                                                                                    Ex. 6: If T(b) = b, must T2(b), T3(b), etc., all also equal b?
then since T(b) = b, the state b is a state of equilibrium under T.                 Ex. 7: Can an absolute system have more states of equilibrium than it has basins ?
So also are e and f.
                                                                                    Ex. 8: What is the characteristic appearance of the kinematic graph of a transfor-
   If the states are defined by vectors, then, for a vector to be                       mation whose states are all equilibrial ?
unchanged, each component must be unchanged (by S.3/5). Thus
                                                                                    Ex. 9: (Continued.) What special name was such a transformation given in an
if the state is a vector (x, y), and the transformation is                              earlier chapter ?
                              
                           U:  xy'' = 2x – y + 2                                   Ex. 10: If the transformation is changed (the set of operands remaining the same)
                                    =x + y + 3                                         are the states of equilibrium changed?
                                                                                    Ex. 11: If a machine’s input is changed, do its states of equilibrium change?
then, at a state of equilibrium (x', y') must equal (x, y), and values                  (Hint: See Ex.5.)
for x and y must satisfy the equations
                                  x = 2x – y + 2                                   S/4. Cycle. Related to the states of equilibrium is the cycle, a
                                                                                   sequence of states such that repeated application of the transforma-
                                  y =x + y + 3
                                                                                    tion takes the representative point repeatedly round the sequence.
i.e.                                                                                Thus if T is
                                 x–y =– 2
                              
                                                                                                             T: ↓ c h b h a c c g
                                   x =– 3                                                                        a b c d e f g h
So this system has only one state of equilibrium, at ( – 3, – 1). Had
the equations not been linear there might have been more.                           then, from a, T generates the trajectory
   Exactly the same state, of course, is obtained by using the fact                                      a c b h g c b h g c b ...
that at a state of equilibrium each component’s change must be
zero, giving x' – x = 0, y'– y = 0; which leads to the same equations               and the representative point repeatedly traverses the cycle
as before.
   If the equations are in differential form, then the statement that                                                     c → b
x is to be unchanged with time is equivalent to saying that dx/dt                                                         ↑   ↓
must be zero. So in the system                                                                                            g ← h
                            dx/dt = 2x – y2
                            dy/dt = xy – 1/2                                        Ex. 1: Write down a transformation that contains two distinct cycles and three
                                                                                        states of equilibrium.
the state (1/2,1) is one of equilibrium, because when x and y have                  Ex. 2: (Continued.) Draw its kinematic graph.
these values all the derivatives become zero, i.e. the system stops                 Ex. 3: Can a state of equilibrium occur in a cycle ?
moving.                                                                             Ex. 4: Can an absolute system have more cycles than it has basins?
Ex. 1: Verify that U transforms ( – 3, – 1) to ( – 3, – 1).                         Ex. 5: Can one basin contain two cycles ?
Ex. 2: Has the system (of the last paragraph) any state of equilibrium other than   *Ex. 6: Has the system dx/dt = y, dy/dt = –x a cycle?
    (1/2,1)?                                                                        *Ex. 7: If the transformation has a finite number of states and is closed and sin-
Ex. 3: Find all the states of equilibrium of the transformation:                        gle-valued, can a trajectory end in any way other than at a state of equilib-
                            x'= e–y sin x,      y' = x2.                                rium or in a cycle?

                                       74                                                                                    75
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                                   STABILITY

5/5. Stable region. If a is a state of equilibrium, T(a) is, as we saw   where it was pointed out that only when the set is stable can the
in S.5/3, simply a. Thus the operation of T on a has generated no        transformation proceed to all its higher powers unrestrictedly.
new state.                                                                  Another reason is discussed more fully in S.10/4, where it is
  The same phenomenon may occur with a set of states. Thus,              shown that such stability is intimately related to the idea of some
suppose T is the (unclosed) transformation                               entity “surviving” some operation.

                    T: ↓ p g b f a a b m
                         a b c d e f g h                                 Ex. 1: What other sets are stable with respect to T?
                                                                         Ex. 2: Is the set of states in a basin always stable?
It has no state of equilibrium; but the set composed of b and g has      Ex. 3: Is the set of states in a cycle always stable ?
the peculiarity that it transforms thus                                  Ex. 4: If a set of states is stable under T, and also under U, is it necessarily stable
                                                                             under UT?

                               T: ↓ g b
                                     b g
                                                                                                  DI S T URBANCE
i. e. the operation of T on this set has generated no new state. Such    5/6. In the cases considered so far, the equilibrium or stability has
a t is stable with respect to T.                                         been examined only at the particular state or states concerned.
                                                                         Nothing has been said, or implied, about the behaviour at neigh-
                                                                         bouring states.
                                                                            The elementary examples of equilibrium—a cube resting on its
                                                                         face, a billiard ball on a table, and a cone exactly balanced on its
                                                                         point—all show a state that is one of equilibrium. Yet the cone is
                                                                         obviously different, and in an important way, from the cube. The
                                                                         difference is shown as soon as the two systems are displaced by
                                                                         disturbance from their states of equilibrium to a neighbouring
                                                                         state. How is this displacement, and its outcome, to be represented
                                                                         generally ?
                                                                            A “disturbance” is simply that which displaces, that which
                                                                         moves a system from one state to another. So, if defined accu-
                                                                         rately, it will be represented by a transformation having the sys-
                                                                         tem’s states as operands. Suppose now that our dynamic system
                                                                         has transformation T, that a is a state of equilibrium under T, and
                               Fig. 5/5/1                                that D is a given displacement-operator. In plain English we say:
                                                                         “Displace the system from its state of equilibrium and then let the
   This relation between a set of states and a transformation is, of     system follow its own laws for some time and see whether the sys-
course, identical with that described earlier (S.2/4) as “closure”.      tem does or does not come back to the same state”. In algebraic
(The words “stable set” could have been used from there onwards,         form, we start with a state of equilibrium a, displace the system to
but they might have been confusing before the concept of stability       state D(a), and then find TD(a), T2D(a), T3D(a), and so on; and we
was made clear; and this could not be done until other matters had       notice whether this succession of states does or does not finish as
been explained first.)                                                   a, a, a, .... More compactly: the state of equilibrium a in the sys-
   If the transformation is continuous, the set of states may lie in a   tem with transformation T is stable under displacement D if and
connected region. Thus in Fig. 5/5/1, the region within the bound-       only if
                                                                                                          n
ary A is stable; but that within B is not, for there are points within                             lim T D ( a ) = a
the region, such as P, which are taken outside the region.                                             n→∞
   The concept of closure, of a stable set of states, is of fundamen-      Try this formulation with the three standard examples. With the
tal importance in our studies. Some reasons were given in S.3/2,         cube, a is the state with angle of tilt = 0°. D displaces this to, say,
                                  76                                                                              77
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                       STABILITY

5°, and T eventually will bring this back to 0°. With the cone (hav-                   5/8. In general, the results of repeated application of a transforma-
ing transformation U, say) D can be the same displacement, but                         tion to a state depend on what that state is. The outcome of the test
the limit, whatever it is, of UnD(a) is certainly not a tilt of 0°, the                of finding what is
equilibrium is unstable. With the billiard ball, at position a, the                                                         n
                                                                                                                     lim T ( x )
dynamic laws will not bring it back to a after displacement, so it                                                  n→∞
is not stable by the definition given here. It has the peculiarity,                    will thus depend in general on which state is x. Thus if there are
however, that the limit is D(a); i.e. it retains the displacement,                     two disturbances available, D and E, and D takes a to b, while E
annulling it nor exaggerating it. This is the case of neutral equi-                    takes a to c (no order being implied between a, b and c) the limits
librium.                                                                               of TnD(a) and TnE(a) may be different.
   (It will be noticed that this study of what happens after the sys-                     Thus the result of a test for stability, carried out in the manner
tem has been displaced from a is worth making only if a is a state                     of S.5/6, may give different results according to whether the dis-
of equilibrium.)                                                                       placement is D or E. The distinction is by no means physically
                                                                                       unreasonable. Thus a pencil, balanced on its square-cut base, may
Ex. 1: Is the state of equilibrium c stable to T under the displacement D if T
    given by:                                                                          be stable to D, if D is a displacement of 1° from the vertical, but
                                   a b c d e
                                                                                       may be unstable to E, if E is a displacement of 5°.
                                 ↓                                                        The representation given in S.5/6 thus accords with common
                          T        c d c a e
                          D        b a d e d                                           practice. A system can be said to be in stable equilibrium only if
Ex. 2: (Continued.) What if the state of equilibrium is e?                             some sufficiently definite set of displacements D is specified. If
Ex. 3: The region composed of the set of states b, c and d is stable under U:          the specification is explicit, then D is fully defined. Often D is not
                                 a b c d e f
                                                                                       given explicitly but is understood; thus if a radio circuit is said to
                              ↓                                                        be “stable”, one understands that D means any of the commonly
                        U        d c b b c a
                        E        b e f        f f d                                    occurring voltage fluctuations, but it would usually be understood
                                                                                       to exclude the stroke of lightning. Often the system is understood
    What is the effect of displacement E, followed by repeated action of U?            to be stable provided the disturbance lies within a certain range
    (Hint: Consider all three possibilities.)
                                                                                       What is important here is that in unusual cases, in biological sys-
5/7. When the dynamic system can vary continuously, small dis-                         tems for instance, precise specification of the disturbances D, and
turbances are, in practice, usually acting on it incessantly. Elec-                    of the state of equilibrium under discussion a, may be necessary
tronic systems are disturbed by thermal agitation, mechanical                          if the discussion is to have exactness.
systems by vibration, and biological systems by a host of minor
disturbances. For this reason the only states of equilibrium that                      5/9. The continuous system. In the previous sections, the states
can, in practice, persist are those that are stable in the sense of the                considered were usually arbitrary. Real systems, however, often
previous section. States of unstable equilibrium are of small prac-                    show some continuity, so that the states have the natural relation-
tical importance in the continuous system (though they may be of                       ship amongst themselves (quite apart from any transformation im-
importance in the system that can change only by a discrete jump).                     posed by their belonging to a transducer) that two states can be
   The concept of unstable equilibrium is, however, of some theo-                      “near” or “far from” one another.
retical importance. For if we are working with the theory of some                         With such systems, and a state of equilibrium a, D is usually
mechanism, the algebraic manipulations (S.5/3) will give us all                        defined to be a displacement, from a, to one of the states “near” a.
the states of equilibrium—stable, neutral, and unstable—and a                          If the states are defined by vectors with numerical components,
good deal of elimination may be necessary if this set is to be                         i.e. based on measurements, then D often has the effect of adding
reduced to the set states that have a real chance of persistence.                      small numerical quantities δ1, δ2, .., δn to the components, so that
                                                                                       the vector (x1, . . ., xn) becomes the vector (x1 +δ1, . . ., xn + δn).
Ex.:Make up a transformation with two states of equilibrium, a and b, and two
    disturbances, D and E, so that a is stable to D but not to E, and b is stable to      In this form, more specialised tests for stability become possi-
    E but not to D.                                                                    ble. An introduction to the subject has been given in Design...
                                        78                                                                               79
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                              STABILITY

The subject soon becomes somewhat mathematical; here it is suf-                          Ex. 7: A bus service starts with its buses equally spaced along the route. If a bus
ficient to notice that these questions are always capable of being                           is delayed, extra passengers collect at the stopping points, so it has to take
                                                                                             up, and set down, more passengers than usual. The bus that follows has fewer
answered, at least in principle, by the process of actually tracing                          passengers to handle and is delayed less than usual. Are irregularities of
the changes through the states D(a), TD(a), T2D(a), etc. (Com-                               spacing self-correcting or self-aggravating?
pare S.3/9). The sole objection to this simple, fundamental and                          Ex. 8: What would happen if an increase of carbon dioxide in the blood made the
reliable method is that it is apt to become exceedingly laborious                            respiratory centre less active?
in the complicated cases. It is, however, capable of giving an                           Ex. 9: Is the system x'= 1/2y, y' = 1/2 x stable around (0,0)?
answer in cases to which the more specialised methods are inap-
plicable. In biological material, the methods described in this
chapter are likely to prove more useful than the more specialised;                       5/10. Positive feedback. The system described in the last exercise
for the latter often are applicable only when the system is contin-                      deserves closer attention.
uous and linear, whereas the methods of this chapter are applica-
ble always.                                                                                 From (10,10) it goes to (5,5)
   A specially simple and well known case occurs when the sys-                                ,, (10,12) ,, ,, ,, (6,5);
tem consists of parts between which there is feedback, and when                          so an increase in y (from 10 to 12) leads to an increase in x (from
this has the very simple form of a single loop. A simple test for                        5 to 6). (Compare S.4/13.) Similarly,
stability (from a state of equilibrium assumed) is to consider the
sequence of changes that follow a small displacement, as it travels                          from (10,10) it goes to (5,5)
round the loop. If the displacement ultimately arrives back at its                             ,, (12,10) ,, ,, ,, (5,6)
place of origin with size and sign so that, when added algebra-                          so an increase in x (from 10 to 12) leads to an increase in y (from
ically to the initial displacement, the initial displacement is dimin-                   5 to 6). Each variable is thus having a positive effect on the other
ished, i.e. is (commonly) stable. The feedback, in this case, is said                    and if the system were discussed in plain words these facts might
to be “negative” (for it causes an eventual subtraction from the                         be used to “prove” that it is unstable, for a vicious circle seems to
initial displacement).                                                                   be acting.
   The test is simple and convenient, and can often be carried out                          The system’s behaviour, by converging back to (0,0), declares
mentally; but in the presence of any complications it is unreliable                      indisputably that the system is stable around this state of equilib-
if carried out in the simple form described above. The next section                      rium. It shows clearly that arguments based on some short cut, e.g.
gives an example of one way in which the rule may break down if                          by showing that the feedback is positive, may not be reliable. (It
applied crudely.                                                                         shows also that feedback can be positive and yet leave the system
                                                                                         stable; yet another example of how unsuitable is the concept of
                                                                                         feedback outside its particular range of applicability.)
Ex. 1: Identify a, D and Tin Ex. 3/6/17. Is this system stable to this displacement?
Ex. 2: (Continued.) Contrast Ex. 3/6/19.
                                                                                         5/11. Undesirable stability. Stability is commonly thought of as
                                                                                         desirable, for its presence enables the system to combine of flex-
Ex. 3: Identify a and Tin Ex. 2/14/11. Is it stable if D is any displacement from        ibility and activity in performance with something of permanence.
    a?
                                                                                         Behaviour that is goal-seeking is an example of behaviour that is
Ex. 4 Take a child’s train (one that runs on the floor, not on rails) and put the line   stable around a state of equilibrium. Nevertheless, stability is not
    of carriages slightly out of straight. Let M be the set of states in whichthe
    deviations from straightness nowhere exceed 5°. Let T be the operation of            always good, for a system may persist in returning to some state
    drawing it along by the locomotive. Is M stable under T?                             that, for other reasons, is considered undesirable. Once petrol is lit
Ex. 5: (Continued.) Let U be the operation of pushing it backwards by the loco-          it stays in the lit state, returning to it after disturbance has changed
    motive. Is M stable under U?                                                         it to “half-lit”—a highly undesirable stability to a fireman.
Ex. 6: Why do trains have their locomotives in front?                                       Another example is given by the suggestion that as the more
                                                                                         intelligent members of the community are not reproducing their
                                         80                                                                                     81
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                               STABILITY

kind as freely as are the less intelligent, the Intelligence Quotient    system, an input-value that makes the other’s state to be one of
of the community will fall. Clearly it cannot fall very low, because     equilibrium. Then neither can change, and the whole cannot
the feebleminded can reproduce better than the idiot. So if these        change; and thus the whole must be at a state of equilibrium.
were the only factors in the situation, the I.Q. would be stable at        Thus each implies the other. Formally: the whole is at a state of
about 90. Stability at this figure would be regarded by most peo-        equilibrium if and only if each part is at a state of equilibrium in
ple as undesirable.                                                      the conditions provided by the other part. (If there are several
   An interesting example of stability occurs in the condition           parts the last word is merely changed to “parts”.)
known as “causalgia”, in which severe pain, without visible
cause, occurs in a nerve which has previously been partly divided.       5/13. Power of veto. The same thesis can be stated more vividly
Granit has shown that it is almost certainly due to conduction, at       making it more useful conceptually. Suppose A and B are coupled
the site of injury, of impulses from the motor (outgoing) to the         and suppose we are interested only in the occurrence of a state of
sensory (incoming) nerves, allowing the formation of a regenera-         equilibrium (not of cycles). When the whole is started from some
tive circuit via the reflex centres in the spinal cord. Such a circuit   initial state, and goes along some trajectory, A and B will pass
has two states of equilibrium, each stable: conducting few               through various states. Suppose it happens that at some moment
impulses or conducting the maximal number. It is like a top-heavy        B’s state provides conditions that make A’s present state one of
see-saw, that will rest in either of two extreme conditions but will     equilibrium. A will not change during the next step. If B is not
not rest in between. The patient is well aware that “stability” can      itself at a state of equilibrium in the conditions provided by A, it
be either good or bad, for of the two stable states one is comfort-      will move to a new state. A’s conditions will thereby be changed,
able and the other extremely painful.                                    its states of equilibrium will probably be changed, and the state it
                                                                         is at will probably no longer be one of equilibrium. So A will start
                                                                         moving again.
        E Q U I LI BRI U M I N P A RT A ND W H OL E                         Picturesquely, we can say that A proposed a state of equilibrium
5/12. We can now notice a relation between coupling and equilib-         (for A was willing to stop), but B refused to accept the proposal,
rium that will be wanted later (S.12/14 and 13/19), for it has           or vetoed the state. We can thus regard each part as having, as it
important applications.                                                  were, a power of veto over the states of equilibrium of the whole.
   Suppose some whole system is composed of two parts A and B,           No state (of the whole) can be a state of equilibrium unless it is
which have been coupled together:                                        acceptable to every one of the component parts, each acting in the
                                                                         conditions given by the others.
                               A←
                                → B                                      Ex.: Three one-variable systems, with Greek-letter parameters, are:
                                                                                     x' = – x + α,     y' = 2βy + 3,        z' =– γz + δ.
and suppose the whole is at a state of equilibrium.                          Can they be coupled so as to have a state of equilibrium at (0,0,0)? (Hint:
   This means that the whole’s state is unchanging in time. But the          What value would β have to have ?)
whole’s state is a vector with two components: that of A’s state
and that of B’s. It follows that A, regarded as a sub-system, is also    5/14. The homeostat. This principle provides a simple way of
unchanging; and so is B.                                                 looking at the homeostat and of understanding its working. It can
   Not only is A’s state unchanging but so is the value of A’s           be regarded as a part A coupled to a part B (Fig. 5/14/1).
input; for this value is determined by B’s state (S.4/7), which is         Part A consists essentially of the four needles (with ancillary
unchanging. Thus A is at a state of equilibrium in the conditions        coils, potentiometers, etc.) acting on one another to form a
provided by B. (Cf. Ex. 5/3/11.) The similar property holds for B.       four-variable system to which B’s values are input. A’s state is
Thus, if the whole is at a state of equilibrium, each part must be       specified by the positions of the four needles. Depending on the
in a state of equilibrium in the conditions provided by the other.       conditions and input, A may have states of equilibrium with the
   The argument can also be reversed. Suppose A and B are at             needles either central or at the extreme deviation.
states of equilibrium, and that each state provides, for the other         Part B consists essentially of a relay, which can be energised or

                                  82                                                                          83
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                           STABILITY

not, and four stepping-switches, each of which can be in any one       5/15. The complex of ideas involved in “stability” can now be
of 25 positions (not shown accurately in the Figure). Each posi-       summarised.
tion carries a resistor of some value. So B has 2 × 25 × 25 × 25 ×        First there is the state of equilibrium—the state that is
25, i.e. 781250, states. To this system A is input. B has been built   unchanged by the transformation. Then the state may become
so that, with the relay energised, none of B’s states is equilibrial   multiple, and we get the stable set of states, of which the cycle and
(i.e. the switches keep moving), while, with the relay not ener-       basin are examples.
gised, all are equilibrial (i.e. all switches stay where they are).       Given such a state or set of states and some particular distur-
   Finally, B has been coupled to A so that the relay is non-ener-     bance we can ask whether, after a disturbance, the system will
gised when and only when A is stable at the central positions.         return to its initial region. And if the system is continuous, we can
                                                                       ask whether it is stable against all disturbances within a certain
                                                                       range of values.
                                                                          Clearly, the concept of stability is essentially a compound one.
                                                                       Only when every aspect of it has been specified can it be applied
                                                                       unambiguously to a particular case. Then if its use calls for so
                                                                       much care, why should it be used at all ? Its advantage is that, in
                                                                       the suitable case, it can sum up various more or less intricate pos-
                                                                       sibilities briefly. As shorthand, when the phenomena are suitably
                                                                       simple, words such as equilibrium and stability are of great value
                                                                       and convenience. Nevertheless, it should be always borne in mind
                                                                       that they are mere shorthand, and that the phenomena will not
                                                                       always have the simplicity that these words presuppose. At all
                             Fig. 5/14/1                               times the user should be prepared to delete them and to substitute
                                                                       the actual facts, in terms of states and transformations and trajec-
   When a problem is set (by a change of value at some input to A      tories, to which they refer.
not shown formally in the Figure), A has a variety of possible            It is of interest to notice, to anticipate S.6/19, that the attempt to
states of equilibrium, some with the needles at the central posi-      say what is significant about a system by a reference to its stability
tions, some with the needles fully diverged. The whole will go to      is an example of the “topological” method for describing a large
some state of equilibrium. An equilibrium of the whole implies         system. The question “what will this system do?”, applied to, say,
that B must be in equilibrium, by the principle of the previous sec-   an economic system, may require a full description of every detail
tion. But B has been made so that this occurs only when the relay      of its future behaviour, but it may be adequately answered by the
is non-energised. And B has been coupled to A so that the relay is     much simpler statement “It will return to its usual state” (or per-
non-energised only when A’s needles are at or near the centres.        haps “it will show ever increasing divergence”). Thus our treat-
Thus the attachment if B vetoes all of A’s equilibria except such      ment in this chapter has been of the type required when dealing
as have the needles at he centre.                                      with the very large system.
   It will now be seen that every graph shown in Design . . . could
have been summed up by one description: “trajectory of a system
tinning to a state of equilibrium”. The homeostat, in a sense, does
nothing more than run to a state of equilibrium. What Design . . .
showed was that this simple phrase may cover many intricate and
interesting ways of behaving, many of them of high interest in
physiology and psychology.
   (The subject of “stability” recurs frequently, especially in S.9/
6, 0/4, 12/11; that of the homeostat is taken up again in S.12/15.)

                                  84                                                                      85
                                                                                               THE BLACK BOX

                                                                        The experimenter who is not interested in Black Box theory
                                                                      usually regards any casing as merely a nuisance, for it delays his
                                                                      answering the question “what is in this Box?” We, however, shall
Chapter                                                          6    be considering such larger questions as
                                                                        “How should an experimenter proceed when faced with a Black
                                                                         Box ?”
                TH E BLA CK BOX                                         “What properties of the Box’s contents are discoverable and
                                                                         what are fundamentally not discoverable ?”
6/1. The methods developed in the previous chapters now enable          “What methods should be used if the Box is to be investigated
us to undertake a study of the Problem of the Black Box; and the         efficiently ?”
study will provide an excellent example of the use of the methods.
  The Problem of the Black Box arose in electrical engineering.       Proper attention can be given to these questions only by our
The engineer is given a sealed box that has terminals for input, to   accepting the existence, at least temporarily, of a casing, and pro-
which he may bring any voltages, shocks, or other disturbances he     ceeding accordingly. Then, and only then, can we develop a sci-
pleases, and terminals for output, from which he may observe          entific epistemology.
what he can. He is to deduce what he can of its contents.
  Sometimes the problem arose literally, when a secret and sealed     6/2. To start with, let us make no assumptions at all about the
bomb-sight became defective and a decision had to be made,            nature of the Box and its contents, which might be something, say,
without opening the box, whether it was worth returning for repair    that has just fallen from a Flying Saucer. We assume, though, that
or whether it should be scrapped. Sometimes the problem arose         the experimenter has certain given resources for acting on it (e.g.
practically, as when a telephone engineer considered a compli-        prodding it, shining a light on it) and certain given resources for
cated set of relations between tests applied and results observed,    observing its behaviour (e.g. photographing it, recording its
in the middle of a mass of functioning machinery that was not to      temperature). By thus acting on the Box, and by allowing the Box
be dismantled for insufficient reason.                                to affect him and his recording apparatus, the experimenter is cou-
  Though the problem arose in purely electrical form, its range of    pling himself to the Box, so that the two together form a system
application is far wider. The clinician studying a patient with       with feedback:
brain damage and aphasia may be trying, by means of tests given                               Box ←→ Experimenter
and speech observed, to deduce something of the mechanisms that
are involved. And the psychologist who is studying a rat in a maze       For the coupling to be made in some defined and reproducible
may act on the rat with various stimuli and may observe the rat’s     way, the Box’s “input” must be specified, if only arbitrarily and
various behaviours; and by putting the facts together he may try      provisionally. Every real system has an indefinitely large number
to deduce something about the neuronic mechanism that he can-         of possible inputs—of possible means by which the experimenter
not observe. I need not give further examples as they are to be       may exert some action on the Box. Equally, it has an indefinitely
found everywhere (S.6/17).                                            large number of possible outputs—of ways by which it may affect
  Black Box theory is, however, even wider in application than        the experimenter, perhaps through recording instruments. If the
these professional studies. The child who tries to open a door has    investigation is to be orderly, the set of inputs to be used and of
to manipulate the handle (the input) so as to produce the desired     outputs to be observed must be decided on, at least provisionally.
movement at the latch (the output); and he has to learn how to        Let us assume, then, that this has been done.
control the one by the other without being able to see the internal      The situation that we (author and reader) are considering can be
mechanism that links them. In our daily lives we are confronted at    made clearer by the introduction of two harmless conventions. Let
every turn with systems whose internal mechanisms are not fully       it be assumed that the inputs, whatever their real nature, are
open to inspection, and which must be treated by the methods          replaced by, or represented by, a set of levers or pointers—like the
appropriate to the Black Box.                                         controls to a domestic cooking oven. We can then be quite clear
                                86                                                                    87
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                                   THE BLACK BOX

as to what is meant by the input “being in a certain state”—it is              sible input states α and β, and possible output states f, g, h and j,
the state that would be shown on a snapshot of the controls. Also              a typical protocol might read (and be yet another transformation!):
let us assume that the output consists of a set of dials, attached to             Time: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
the Box and affected by the mechanism inside, so that the pointers                State: αg αj αf αf αf βf βh βh αh αj βf αh βj βf αh βj αf
on the dials show, by their positions at any particular moment, the              (Parentheses have been omitted for brevity.)
state of the output.                                                              This form, though it may seem artificial and unnatural, is in fact
   We now see the experimenter much like the engineer in a ship,               typical and general. It will represent anything from the investiga-
who sits before a set of levers and telegraphs by which he may act             tion of an electrical network by putting in a sinusoidal voltage and
on the engines, and who can observe the results on a row of dials.             observing the output, to a psychiatric interview at which questions
The representation, though it may seem unnatural, is in fact, of               α, β were put and answers g, f, h, j elicited.
course, capable of representing the great majority of natural sys-                Thus, the primary data of any investigation of a Black Box con-
tems, even if biological or economic.                                          sists of a sequence of values of the vector with two components:
6/3. The Investigation. A man cannot step twice into the same                                        (input state, output state).
water; neither can he twice conduct the same experiment. What he                  (The possibility is not excluded that each component may itself
can do is to perform another experiment which differs from the                 be a vector (S.3/5).)
first only in some way that is agreed to be negligible.                           From this there follows the fundamental deduction that all
   The same fact applies to an examination of the Black Box. The               knowledge obtainable from a Black Box (of given input and out-
sic data will always be of the form:                                           put) is such as can be obtained by re-coding the protocol; all that,
                                                                               and nothing more.
                                 States of input and
                         Time                                                  Ex.: Tabulate the transitions observed in the system that started at αγ. Find some
                                       output
                                                                                   regularities in them.
                         …      …      …
                        ↓
                         …      …      …                                       6/4. It will be noticed that nothing has been said about the skill of
in which, at each of a sequence of times, the states of the Box’s              the experimenter in manipulating the input. The omission was
various parts, input and output, are recorded. Thus, the Box that              deliberate, for no skill is called for! We are assuming, remember,
fell from the Flying Saucer might lead to the protocol:                        that nothing is known about the Box, and when this is so the
                                                                               method of making merely random variations (e.g. guided by
    Time                                  State                                throws of a die) on the input-switches is as defensible as any other
                                                                               method, for no facts yet exist that could be appealed to as justifi-
11.18 a.m.   I did nothing—the Box emitted a steady hum at 240 c/s.            cation for preferring any particular method. With terrestrial
             I pushed over the switch marked K: the note rose to 480 c/s and   machinery—industrial, biological, neuronic—the experimenter
11.19                                                                          has often had previous experiences with Boxes of the same class.
             remained steady.
                                                                               When this is so he may be able to use a method that explores what
11.20        Accidentally I pushed the button marked “!”—the Box increased     he does not know about the present Box more efficiently than
             in temperature by 20°C.                                           some other method. (These matters, of exploring a partly known
…            Etc.                                                              system, lead into questions of altogether more advanced type, and
                                                                               their consideration must be postponed; a little is said on the sub-
(The word protocol will be reserved for such a form and                        ject in S.13/5 and onwards.)
sequence.)
  Thus every system, fundamentally, is investigated by the col-                6/5. Absoluteness. When a generous length of record has been
lection of a long protocol, drawn out in time, showing the                     obtained, the experimenter will look for regularities, for repeti-
sequence of input and output states. Thus if one system had pos-               tiveness in the behaviour (S.7/19). He may notice, for instance, in
                                    88                                                                                89
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                            THE BLACK BOX

Ex. 6/3/1, that α j is always followed by either αf or βf—that             One way is to alter the set of inputs and outputs—to take more
although the α’s transition is not single-valued, that of the j is.     variables into account—and then to see if the new system (equiv-
   So he examines the record. Usually his first concern is to see       alent to a new Box, S.3/11) is determinate. Thus a chemist may
whether the Box is absolute if the input state is given. He does this   find that a system’s behaviour is at first not determinate, but that
by collecting:                                                          when the presence of traces of chloride is taken into account it
                                                                        becomes determinate. A great deal of research consists of such
    (i) all the transitions that followed the input state α, sorting    searches for a suitable set of variables.
        them into what g went to, what h went to, and so on through        A second way is to abandon the attempt to find strict determi-
        all the output states;                                          nacy and to look for statistical determinacy, i.e. determinacy in
   (ii) the same for input β;                                           averages etc. The experimenter, with extensive records available,
  (iii) and so on through all the observed input states.                then studies them in long sections, to see whether, if the details are
What he tries, in other words, is to fill in a set of transformations   not predictable from step to step, the averages (or similar statis-
like those of S.4/1, and he examines what he gets to see if they are    tics) are predictable from section to section. He may find that the
single- valued.                                                         records show the statistical determinateness of the Markov chain;
   Thus, if the given protocol is tested, and if every one of the 16    (but discussion of this will be left to Chapter 9, for until then we
transforms is recorded, there results:                                  shall be concerned only with machines that are determinate from
                                                                        step to step).
                   ↓      f      g        h        j                       To summarise: once the protocol has been obtained, the sys-
                                                                        tem’s determinateness can be tested, and (if found determinate) its
                  α      fff     j       jjj      ff                    canonical representation can be deduced.
                  β     hhh      .       hh       ff
(No transition was observed from g with input at β.) Within each        Ex. 1: Deduce the kinematic graph for input at α directly from the protocol of the
cell the letters are all equal, so the table can be simplified to:          system of S.6/3.
                                                                        Ex. 2: (Continued.) and for input at f.
                          ↓ f g h j                                     Ex. 3: A system with only one input state gave the following sequence of states
                                                                            as output:
                         α f j j f                                                     D G A H C L H C L H C F C…
                         β h . h f                                          Is it absolute?
                                                                        Ex. 4: A system has two variables, x and y, each of which can take the values 0,
with a statement that throughout the protocol this closed single-           1 or 2. The input can take two values, α or β. The protocol gave:
valued transformation was observed.                                                Time:      1 2 3 4 5             6 7 8 9 10 11 12 13
   Thus by direct re-coding of the protocol the experimenter can                   Input:     α α α α α             β α α α α α α α
demonstrate that the behaviour is machine-like, and he can                         x:         1 0 0 0 0             0 1 2 2 1 0 0 0
deduce its canonical representation.                                               y:         1 0 1 0 1             0 2 1 0 1 0 1 0
   It should be noticed that he has deduced it from direct observa-
tion of the Box’s actual behaviour. He has relied on no “bor-                      Time:     14 15 16 17 18 19 20 21 22 23 24 25
                                                                                   Input:     β α α β β β α β β β α β
rowed” knowledge. Whatever he may have expected, and                               x:         0 0 1 0 1 1 1 1 1 2 2 1
regardless of the confidence of his expectation, the final deduc-                  y:         1 2 1 0 2 1 0 1 0 0 2 1
tion depends only on what actually happened. Thus, in any con-
flict between what he, or others, expected and what was found,              Is it a machine with input ?
these empirical results are final as a statement of the Box’s nature.   Ex. 5: (Continued.) What is its transformation if the input is held at α?
   Should the system not be determinate, i.e. the transformation        Ex. 6: If a machine has m input-states and n output-states, what is the least
not single-valued, he can proceed in either of two ways.                    number of steps of observation sufficient for its complete study?

                                  90                                                                           91
                A N IN T R O D U C T IO N T O C Y BERNETI CS                                                   THE BLACK BOX

Ex. 7: Two Black Boxes are of identical external appearance, and each has a sin-   connexions” is not unique. The radio set, for instance, has one dia-
    gle input α and a single output x, each a numerical variable. They were        gram of connexions if considered electrically and another if con-
    labelled I and II, and their canonical representations were found to be
                                                                                   sidered mechanically. An insulator, in fact, is just such a
                              I: x' = x + 1— α                                     component as will give firm mechanical connexion while giving
                             II: x' = (1 + α)x —2 + α.
                                                                                   no electrical connexion. Which pattern of connexions will be
   Unfortunately the labels “I” and “II” have since become detached and it is      found depends on which set of inputs and outputs is used.
   now not known which is which. Suggest a simple test that will re- identify         Even if the diagram of immediate effects is unique, it does not
   them.
                                                                                   indicate a unique pattern of connexions within the Box. Thus sup-
6/6. Inaccessible states. Examination of the transformations                       pose a Black Box has an output of two dials, x and y; and suppose
                                                                                   it has been found that x dominates y. The diagram of immediate
                             ↓    f    g    h    j                                 effects is thus
                            α  f j j f                                                                            x → y
                            β  h f h f                                             (in which the two boxes are parts of the whole Box). This relation-
                                                                                   ship can be given by an infinity of possible internal mechanisms.
shows that the state g, once past in the protocol, cannot be made                  A particular example occurs in the case in which relays open or
to re-appear by any manipulations of the input. The transitions                    close switches in order to give a particular network of connexions.
from g thus cannot be explored further or tested repeatedly. This                  It has been shown by Shannon that any given behaviour can be
fact, that certain states of the Box cannot be returned to at will, is             produced by an indefinitely large number of possible networks.
very common in practice. Such states will be called inaccessible.                  Thus let x represent a contact that will be closed when the relay X
   In its most dramatic form it occurs when the investigation of a                 is energised, and let x represent one that will be opened. Suppose
new type of enemy mine leads to an explosion—which can be                          similarly that another relay Y has similar contacts y and y. Sup-
described more abstractly by saying that the system has passed                     pose that the network is to conduct from p to q when and only
from a state to which no manipulation at the input can make the                    when both X and Y are energised.
system return. Essentially the same phenomenon occurs when
experiments are conducted on an organism that learns; for as time
goes on it leaves its “unsophisticated” initial state, and no simple
manipulation can get it back to this state. In such experiments,
however, the psychologist is usually investigating not the partic-
ular individual but the particular species, so he can restore the ini-
tial state by the simple operation of taking a new individual.
   Thus the experimenter, if the system is determinate, must either
restrict himself to the investigation of a set of states that is both
closed and freely accessible, such as f, h, j in the example, or he
must add more states to his input so that more transformations
become available and thus, perhaps, give a transition to g.                                                         Fig. 6/7/1
6/7. Deducing connexions. It is now clear that something of the                      The network A of Fig. 6/7/1, in which x and y are connected in
connexions within a Black Box can be obtained by deduction. For                    series, will show the required behaviour. So also will B, and C,
direct manipulation and observation gives the protocol, this (if the               and an indefinitely large number of other networks.
system is determinate) gives the canonical representation, and this                  The behaviour does not specify the connexions uniquely.
gives the diagram of immediate effects (one for each input state)
(S.4/13). But we must go cautiously.                                               Ex.: (Ex. 6/5/4 continued.) Deduce the diagram of immediate effects when the
                                                                                       input is fixed at α. (Hint: S.4/13.)
  It must be noticed that in a real system the “diagram of internal
                                      92                                                                               93
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                         THE BLACK BOX

                  I S O M O RP H I C M A C H IN E S                        through a spring S to a heavy wheel M, which is rigidly connected
6/8. Study of a Black Box can thus give the experimenter infor-            to the output shaft O. O’s degree of rotation is shown on the dial
mation up to a certain amount; and, if the inputs and outputs are          v, which is its output. The wheel dips into a trough with liquid F
given, cannot possibly be made to give more. How much informa-             which applies a frictional force to the wheel, proportional to the
tion will be discussed in S. 13/15 (especially its last Ex.). Here it      wheel’s velocity. If now, starting from given conditions, the input
is sufficient if we notice that the canonical representation speci-        u is taken through some sequence of values, so will the output v
fies or identifies the mechanism “up to an isomorphism”.                   pass through some determinate sequence of values, the particular
   “Isomorphic” means, roughly, “similar in pattern”. It is a con-         sequence depending on v’s initial value, on v’s rate of change at
cept of the widest range and of the utmost importance to all who           that moment, and on the sequence used for the input at u.
would treat accurately of matters in which “pattern” plays a part.
Let us consider first a few examples merely to illustrate the basic
ideas.
   A photographic negative and the print from it are, so far as the
pattern of the picture is concerned, isomorphic. Squares in the
negative appear as squares in the print; circles appear as circles;
parallel lines in the one stay as parallel lines in the other. Thus cer-
tain relations between the parts within the negative appear as the
same relations in the print, though the appearances so far as
brightness is concerned are different, exactly opposite in fact.
Thus the operation of changing from negative to print leaves these
relations unaltered (compare S.5/2).
   A map and the countryside that it represents are isomorphic (if
the map is accurate!). Relationships in the country, such as that
towns A, B and C form an equilateral triangle, occur unchanged
on the map, where the representative dots for A, B and C also
form an equilateral triangle.
   The patterns need not be visual. If a stone is thrown vertically                                     Fig. 6/8/1
upwards with an initial velocity of 50 ft. per second, there is an
isomorphism between the set of points in the air such that at time            The lower system is electrical. Its input is a potentiometer, or
t the stone was h feet up and the set of those points on a graph that      other device, J, that emits the voltage shown on the scale x. In
satisfy the equation                                                       series are an inductance L, a resistance R, and a capacitance C. P
                                                                           is a current meter (such as is used in domestic supplies) recording
                           y = 50x – 16x2.                                 the sum of the currents that have passed through it. The sum is
                                                                           shown on the scale y, which is its output.
  The lines along which air flows (at sub-sonic speeds) past an               If now the values of L, R and C are adjusted to match the stiff-
aerofoil form a pattern that is identical with the lines along which       ness of the spring, inertia of the wheel, and friction at F (though
electric current flows in a conducting liquid past a non- conductor        not respectively), then the two systems can show a remarkable
of the same shape as the aerofoil. The two patterns are the same,          functional identity. Let them both start from rest. Apply any
though the physical bases are different.                                   input-sequence of values at u, however long and arbitrary, and get
  Another isomorphism is worth consideration in more detail.               an output sequence at v, of equal length: if the same sequence of
Fig. 6/8/1 shows two dynamic systems, each with an input and an            values is given at x, the output at y will be identical, along its
output. In the upper one, the left-hand axle I is the input; it can be     whole length with that at v. Try another input sequence to u and
rotated to any position, shown on the dial u. It is connected              record what appears at v: the same input given to x will result in
                                  94                                                                       95
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                       THE BLACK BOX

an output at y that copies that at v. Cover the central parts of the    It is important because most systems have both difficult and easy
mechanism and the two machines are indistinguishable through-           patches in their properties. When an experimenter comes to a dif-
out an infinite number of tests applied. Machines can thus show         ficult patch in the particular system he is investigating he may if
the profoundest similarities in behaviour while being, from other       an isomorphic form exists, find that the corresponding patch in the
points of view, utterly dissimilar.                                     other form is much easier to understand or control or investigate.
  Nor is this all. Well known to mathematicians are equations of        And experience has shown that the ability to change to an isomor-
the type                                                                phic form, though it does not give absolutely trustworthy evi-
                          2                                             dence (for an isomorphism may hold only over a certain range), is
                          d z          dz                               nevertheless a most useful and practical help to the experimenter.
                        a -------2 + b ----- + cz = w
                          dt           dt                               In science it is used ubiquitously.
by which, if a graph is given showing how w varied with time (t),
the changes induced in z can be found. Thus w can be regarded as        6/9. It must now be shown that this concept of isomorphism, vast
an “input” to the equation and z an “output”. If now a, b, and c are    though its range of applicability, is capable of exact and objective
given values suitably related to L, R, S, etc., the relation between
w and z becomes identical with those between u and v, and
between x and y. All three systems are isomorphic.
   The great practical value of isomorphisms is now becoming
apparent. Suppose the problem has arisen how the mechanical
system will behave under certain conditions. Given the input u,
the behaviour v is required. The real mechanical system may be
awkward for direct testing: it may be too massive, or not readily                                    Fig. 6/9/1
accessible, or even not yet made! If, however, a mathematician is
available, the answer can be found quickly and easily by finding        definition. The most fundamental definition has been given by
the output z of the differential equation under input w. It would be    Bourbaki; here we need only the form suitable for dynamic sys-
said, in the usual terms, that a problem in mathematical physics        tems It applies quite straightforwardly once two machines have
had been solved. What should be noticed, however, is that the           been reduced to their canonical representations.
process is essentially that of using a map—of using a convenient          Consider, for instance, the two simple machines M and N, with
isomorphic representation rather than the inconvenient reality.         canonical representations
   It may happen that no mathematician is available but that an
electrician is. In that case, the same principle can be used again.                ↓   a   b    c   d             ↓   g   h    j   k
The electrical system is assembled, the input given to x, and the
answer read off at y. This is more commonly described as “build-                 α     a c d c                   δ k j h g
ing an electrical model”.
                                                                              Μ: β                          Ν: ε
                                                                                       b a d c                       k h g g
   Clearly no one of the three systems has priority; any can substi-
tute for the others. Thus if an engineer wants to solve the differ-     They show no obvious relation. If, however, their kinematic
ential equation, he may find the answer more quickly by building        graphs are drawn, they are found to be as in Fig. 6/9/1. Inspection
the electrical system and reading the solutions at y. He is then usu-   shows that there is a deep resemblance. In fact, by merely rear-
ally said to have “built an analogue computer”. The mechanical          ranging the points in N without disrupting any arrow (S.2/17) we
system might, in other circumstances, be found a more convenient        can get the form shown in Fig. 6/9/2.
form for the computer. The big general-purpose digital computer         These graphs are identical with M’s graphs, apart from the label-
is remarkable precisely because it can be programmed to become          ling.
isomorphic with any dynamic system whatever.                               More precisely: the canonical representations of two machines
   The use of isomorphic systems is thus common and important.          are isomorphic if a one-one transformation of the states (input and
                                  96                                                                    97
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                           THE BLACK BOX

output) of the one machine into those of the other can convert the     The transformation P:
one representation to the other.
                                                                                                       P: ↓
  Thus, in the example given, apply the one-one transformation P                                         u  v
                                                                                                         y –x
                            δ ε g h j k
                      P: ↓ β α c a b d                                 is a shorthand way of describing the one-one transformation that
                                                                       pairs off states in S and R thus:
to N’s table, applying it to the borders as well as to the body. The
result is                                                                                in S, (2,3) against (–3,2) in R
                                                                                         ,, ,, (1,0) ,,           (0,1) ,, ,,
                          ↓       c    a       b   d                                     ,, ,, (4,5) ,,          (–5,4) ,, ,,
                                                                                         ,, ,, (–3,0) ,,         (0,–3) ,, ,,
                         β    d b a c                                               i.e. ,, ,,    (u,v) ,,       (–v,u) ,, ,,
                         α    d a c c                                  (Compare U of S.4/9.) Apply P to all the description of S; the
This is essentially the same as M. Thus, c and β in the border give    result is
                                                                                                    y' = – y + x
                                                                                                
                                                                                                   –x' = – y – x
                                                                       which is algebraically identical with R. So R and S are isomorphic.
                                                                       Ex. 1: What one-one transformation will show these absolute systems to be iso-
                                                                           morphic?
                                                                                   Y: ↓ ac bc dc dd be           Z: ↓ pr qq qr ps rt

                               Fig. 6/9/2                                  (Hint: Try to identify some characteristic feature, such as a state of equilib-
                                                                           rium.)
d in both. The isomorphism thus corresponds to the definition.         Ex. 2: How many one-one transformations are there that will show these absolute
(The isomorphism can be seen more clearly if first the rows are            systems to be isomorphic?
interchanged, to                                                                                  a b c
                      ↓ c a b d                                                              A: ↓ b c a              B: ↓ pr qp qr

                         α d a c c                                     *Ex. 3: Write the canonical equations of the two systems of Fig. 6/8/1 and show
                                                                           that they are isomorphic. (Hint: How many variables are necessary if the sys-
                         β d b a c                                         tem is to be a machine with input ?)
                                                                       Ex. 4: Find a re-labelling of variables that will show the absolute systems A and
and then the columns interchanged, to                                      B to be isomorphic.
                                                                                             x' = – x2 + y               u' = w2 + u
                          ↓   a       b    c       d                                    A:  y' = – x2 – y          B:  v' = – v2 + w
                                                                                             z' = y2 + z                 w' = – v2 – w
                         α   a c d c
                         β   b a d c                                       (Hint: On the right side of A one variable is mentioned only once; the same
                                                                           is true of B. Also, in A, only one of the variables depends on itself quadrat-
but this re-arrangement is merely for visual convenience.)                 ically, i.e. if of the form a' = + a2 . . . ; the same is true of B.)
  When the states are defined by vectors the process is essentially
unchanged. Suppose R and S are two absolute systems:                   6/10. The previous section showed that two machines are isomor-
                                                                     phic if one can be made identical to the other by simple relabel-
             R:  x' = x + y       S:  u' =– u – v
                                                                       ling. The “re-labelling”, however, can have various degrees of
                 y' = x – y           v' = – u + v
                                                                       complexity, as we will now see.
                                      98                                                                      99
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                               THE BLACK BOX

   The system that is specified only by states, as in the previous        Ex. 1: (Ex. 6/9/4 continued.) Compare the diagram of immediate effects of A and
section, contains no direct reference either to parts or to variables.        B.
In such a case, “re-labelling” can mean only “re-labelling the            Ex. 2: Mark the following properties of an absolute system as changed or
                                                                              unchanged by a re-labelling of its states: (i) The number of basins in its
states”. A system with parts or variables, however, can also be               phase-space; (ii) whether it is reducible; (iii) its number of states of equilib-
re-labelled at its variables—by no means the same thing. Relabel-             rium; (iv) whether feedback is present; (v) the number of cycles in its
ling the variables, in effect, re-labels the states but in a way sub-         phase-space.
ject to considerable constraint (S.7/8), whereas the re-labelling of      Ex. 3: (Continued.) How would they be affected by a re-labelling of variables?
states can be as arbitrary as we please. So a re-labelling of the
states is more general than a re-labelling of the variables.              6/11. The subject of isomorphism is extensive, and only an intro-
   Thus suppose a system has nine states; an arbitrary re-labelling       duction to the subject can be given here. Before we leave it, how-
of eight of the states does not restrict what label shall be given to     ever, we should notice that transformations more complex than a
the ninth. Now suppose that the system has two variables, x and           simple re-labelling of variables can change the diagram of imme-
y, and that each can take three values: x1, x2, x3 and y1, y2, y3. Nine   diate effects. Thus the systems
states are possible, of which two are (x2,y3) and (x3,y1). Suppose                  x' = 1/2(x2 + y2) + xy + y          u' = – u
this system is re-labelled in its variables, thus                               A:             2    2               B:             2
                                                                                    y' = 1/2(x + y ) + xy + x           v' = v + v
                                                                          are isomorphic under the one-one transformation
                               ↓ ξ η
                                  x y
                                                                                                                    u =x – y
                                                                                                         P: 
                                                                                                                    v =x + y
If now (x2,y3) is transformed to some state (α,β), and (x3,y1) is
transformed to (γ,δ), then, for consistency, the state (x2,y1) must       Yet A’s diagram is
transform to (α,δ). (Draw the phase spaces and identify the values
on the ξ and η axes.) Thus the nine states now cannot be trans-                                                  x ←
                                                                                                                   → y
formed arbitrarily and independently. A re-labelling of the varia-        while B’s diagram is
bles offers less scope for change than a re-labelling of states.
   As a result, certain features that are destroyed by a re-labelling                                            u         v
of states are preserved by a re-labelling of variables. Among them
is the diagram of immediate effects.                                      i.e. two unconnected variables.
   The system described by its states has, of course, no such dia-           The “method of normal co-ordinates”, widely used in mathe-
gram, for it has in effect only one variable. A system with varia-        matical physics, consists in applying just such a transformation as
bles, however, has a diagram of immediate effects. The                    will treat the system not in its obvious form but in an isomorphic
phase-space now has axes; and it is easily seen, after a few trials,      form that has all its variables independent. In this transformation
that a one-one transformation that re- labels the variables, changes      the diagram of immediate effects is altered grossly; what is
the diagram of immediate effects only to the extent of a “button          retained is the set of normal modes, i.e. its characteristic way of
and string” change; turning, say, A into B:                               behaving.
                                                                             Such a transformation (as P above), that forms some function
              A                        B                j                 of the variables (i.e. x—y) represents, to the experimenter, more
                                                                          than a mere re-labelling of the x-, y-output dials. It means that the
                   p                                                      Box’s output of x and y must be put through some physical appa-
                   ↓                   h ←
                                         → l                              ratus that will take x and y as input and will emit x—y and x + y
               r → q ←
                     → s                                                  as new outputs. This combining corresponds to a more complex
                                                                          operation than was considered in S.6/10.
                                                        k
                                                                          Ex.: Show that A and B are isomorphic. (Hint: (x—y)' = x'—y': why?)

                                 100                                                                                 101
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                       THE BLACK BOX

               H O M O M O R P H I C M A C HIN E S                     It will be found that the repetitions do not contradict one another,
6/12. The definition given for isomorphism defines “equality” in       and that the table can equally well be given as
the strictest sense—it allows that two machines (or two Black                                        ↓   h     g
Boxes) are “equal” only when they are so alike that an accidental
interchange of them would be subsequently indetectable, at least                                     β   h     h
by any test applied to their behaviours.                                                             α   h     g
  There are, however, lesser degrees of resemblance. Thus two
pendulums, one beating seconds and the other half-seconds, are         which is isomorphic with N.
obviously similar, yet they are not isomorphic in the strict sense.       Examination of M shows now where the resemblance to N lies.
There is, however, some similarity, which is shown by the fact         Within M the transitions occur in blocks; thus a, b and c always
that they become isomorphic if they are measured on separate           go to some one of a, b or c. And the blocks in M undergo transi-
timescales, the one having half the values of the other.               tions in the same way as the states in N. N is thus equivalent to a
  Two machines may also be related by a “homomorphism.” This           simplified version of M.
occurs when a many-one transformation, applied to the more                The relation can be displayed in another way. Suppose first the
complex, can reduce it to a form that is isomorphic with the sim-      two machines are viewed by some one who can distinguish all the
pler. Thus the two machines M and N                                    five states of M; he will report simply that M is different from N
                                                                       (i.e. not isomorphic) and more complex. Suppose next that they
             ↓    a   b    c    d    e              ↓    g   h         are viewed by some observer with less power of discrimination,
                                                                       one who cannot discriminate between a, b, and c, but lumps them
             i     b a b c a                     α g h
             j
                                             Ν: β                      all together as, say, A; and who also lumps d and e together as B,
                   a b c b c                        h h                i and j as I', and k and l as d. This new observer, seeing this sim-
          Μ:                                                           plified version of M, will report that it is isomorphic with N. Thus
               k a b b e d
                                                                       two machines are homomorphic when they become alike if one is
               l b c a e e                                             merely simplified, i.e. observed with less than full discrimination.
may seem at first sight to have little resemblance. There is, how-        Formally, if two machines are so related that a many-one trans-
ever, a deep similarity. (The reader will gain much if he reads no     formation can be found that, applied to one of the machines, gives
further until he has discovered, if only vaguely, where the similar-   a machine that is isomorphic with the other, then the other (the
ity lies; notice the peculiarity of N’s table, with three elements     simpler of the two) is a homomorphism of the first.
alike and one different—can anything like that be seen in the table    Ex.: Is isomorphism simply an extreme case of homomorphism?
of M7.—if cut into quadrants?)                                             Problem: What other types of homomorphism are there between machine
   Transform M by the many-one transformation T:                           and machine?

                 T: ↓ h h h g g β β α α
                      a b c d e i j k l                                6/13. If the methods of this book are to be applied to biological
                                                                       systems, not only must the methods become sufficiently complex
(which is single-valued but not one-one as in S.6/9) and we get        to match the systems but the systems must be considerably sim-
                                                                       plified if their study is ever to be practical. No biological system
                       ↓    h   h    h    g    g                       has yet been studied in its full complexity, nor is likely to be for a
                       β    h   h    h    h    h                       very long time. In practice the biologist always imposes a tremen-
                                                                       dous simplification before he starts work: if he watches a bird
                       β    h   h    h    h    h                       building its nest he does not see all the intricate pattern of detailed
                       α    h   h    h    g    g                       neuronic activities in the bird’s brain; if he studies how a lizard
                                                                       escapes from its enemies he does not observe the particular
                       α    h   h    h    g    g                       molecular and ionic changes in its muscles; if he studies a tribe at
                                 102                                                                     103
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                               THE BLACK BOX

its council meeting he does not observe all the many detailed             This is the machine as seen by the first observer (call him One).
processes going on in the individual members. The biologist thus          Suppose now that another observer (call him Two) was unable to
usually studies only a small fraction of the system that faces him.       distinguish states a and d, and also unable to distinguish b and e.
Any statement he makes is only a half-truth, a simplification. To         Let us give the states new names for clarity:
what extent can systems justifiably be simplified? Can a scientist                                   a d c b e
work properly with half-truths?
   The practical man, of course, has never doubted it. Let us see
                                                                                                        ↓ 123
                                                                                                           K
                                                                                                           L M
                                                                                                                          123

whether we can make the position clear and exact.                         The second observer, seeing states K, L or M would find the
   Knowledge can certainly be partial and yet complete in itself.         machine’s behaviour determinate. Thus when at K (really a or d)
Perhaps the most clear-cut example occurs in connexion with               it would always go to M (either b or e), and so on. He would say
ordinary multiplication. The complete truth about multiplication          that it behaved according to the closed transformation
is, of course, very extensive, for it includes the facts about all pos-
                                                                                                     ↓ M K M
sible pairs, including such items as that                                                              K L M
                14792 × 4,183584 = 61883,574528.                          and that this was single-valued, and thus determinate.
There is, however, a much smaller portion of the whole which                 The new system has been formed simply by grouping together
consists simply in the facts that                                         certain states that were previously distinct, but it does not follow
                                                                          that any arbitrary grouping will give a homomorphism. Thus sup-
                       Even × Even = Even                                 pose yet another observer Three could distinguish only two states:
                       Even × 0dd = Even
                       0dd × Even = Even                                                             a b c d e
                       0dd × 0dd = 0dd                                                                P
                                                                                                        ↓    14243
                                                                                                                Q
                                                                                                                          123

What is important here is that though this knowledge is only an           He would find that P changed sometimes to Q (when P was really
infinitesimal fraction of the whole it is complete within itself. (It     at a) and sometimes to P (when P was really at b or c). The change
was, in fact, the first homomorphism considered in mathematics.)          from P is thus not single-valued, and Three would say that the
Contrast this completeness, in respect of Even and Odd, with the          machine (with states P and Q) was not determinate. He would be
incompleteness shown by                                                   dissatisfied with the measurements that led to the distinction
                           2 × 2 = 4                                      between P and Q and would try to become more discriminating,
                           2 × 4 = 8                                      so as to remove the unpredictability.
                           4 × 2 = 8                                         A machine can thus be simplified to a new form when its states
                           4 × 4 = 16                                     are compounded suitably. Scientific treatment of a complex sys-
                                                                          tem does not demand that every possible distinction be made.
which leaves unmentioned what is 4 × 8, etc. Thus it is perfectly
possible for some knowledge, though partial in respect of some            Ex. 1: What homomorphism combines Odd and Even by the operation of addi-
                                                                              tion ?
larger system, to be complete within itself, complete so far as it
                                                                          Ex. 2: Find all possible simplifications of the four-state system
goes.
                                                                                                              a b c d
   Homomorphisms may, as we have seen, exist between two dif-                                             ↓ b b d c
ferent machines. They may also exist within one machine:
between the various possible simplifications of it that still retain          which leaves the result still a determinate machine.
the characteristic property of being machine-like (S.3/1). Sup-           Ex. 3: What simplification is possible in
pose, for instance, that the machine were A:                                                                  x' = – y
                                                                                                                    2
                                                                                                              y' = x + y,

                        A: ↓ e b a b e
                             a b c d e
                                                                              if the result is still to be a determinate machine ?
                                 104                                                                             105
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                            THE BLACK BOX

6/14. The deliberate refusal to attempt all possible distinctions,         sub-machine (with states r and s) given by the transformation
and the deliberate restriction of the study of a dynamic system to                                  h b j k l
some homomorphism of the whole, become justified, and in fact                                     ↓        r        s
almost unavoidable, when the experimenter is confronted with the
system of biological origin.                                               has graph s → r, with one basin and no cycle. Both statements are
   We usually assumed, in the earlier chapters, that the observer          equally true, and are compatible because they refer to different
knew, at each moment, just what state the system was in. It was            systems (as defined in S.3/11).
assumed, in other words, that at every moment his information                 The point of view taken here is that science (as represented by
about the system was complete. There comes a stage, however, as            the observer’s discoveries) is not immediately concerned with
the system becomes larger and larger, when the reception of all            discovering what the system “really” is, but with co-ordinating
the information is impossible by reason of its sheer bulk. Either          the various observers’ discoveries, each of which is only a por-
the recording channels cannot carry all the information, or the            tion, or an aspect, of the whole truth.
observer, presented with it all, is overwhelmed. When this occurs,            Were the engineer to treat bridgebuilding by a consideration of
what is he to do? The answer is clear: he must give up any ambi-           every atom he would find the task impossible by its very size. He
tion to know the whole system. His aim must be to achieve a par-           therefore ignores the fact that his girders and blocks are really
tial knowledge that, though partial over the whole, is none the less       composite, made of atoms, and treats them as his units. As it hap-
complete within itself, and is sufficient for his ultimate practical       pens, the nature of girders permits this simplification, and the
purpose.                                                                   engineer’s work becomes a practical possibility. It will be seen
   These facts emphasise an important matter of principle in the           therefore that the method of studying very large systems by stud-
study of the very large system. Faced with such a system, the              ying only carefully selected aspects of them is simply what is
observer must be cautious in referring to “the system”, for the            always done in practice. Here we intend to follow the process
term will probably be ambiguous, perhaps highly so. “The sys-              more rigorously and consciously.
tem” may refer to the whole system quite apart from any observer
to study it— the thing as it is in itself; or it may refer to the set of   6/15. The lattice. The various simplifications of a machine have
variables (or states) with which some given observer is con-               exact relations to one another Thus, the six forms of the system of
cerned. Though the former sounds more imposing philosophi-                 Ex. 6/13/2 are:
cally, the practical worker inevitably finds the second more                                     (1) a, b, c, d
important. Then the second meaning can itself be ambiguous if                                    (2) a + b, c, d
the particular observer is not specified, for the system may be any                              (3) a, b, c + d
one of the many sub-machines provided by homomorphism. Why                                       (4) a + b, c + d
all these meanings should be distinguished is because different                                  (5) a, b + c + d
sub-machines can have different properties; so that although both                                (6) a + b + c + d
sub-machines may be abstracted from the same real “thing”, a               where, e.g. “a + b” means that a and b are no longer distinguished.
statement that is true of one may be false of another.                     Now (4) can be obtained from (3) by a merging of a and b. But (5)
   It follows that there can be no such thing as the (unique) behav-       cannot be obtained from (4) by a simple merging; for (5) uses a
iour of a very large system, apart from a given observer. For there        distinction between a and b that has been lost in (4). Thus it is
can legitimately be as many sub-machines as observers, and                 soon verified that simplification can give:
therefore as many behaviours, which may actually be so different
as to be incompatible if they occurred in one system. Thus the                                 from (1): all the other five,
5-state system with kinematic graph                                                              ,, (2): (4) and (6),
                                                                                                 ,, (3): (4), (5) and (6),
                    h ←
                      → k            m→ l ←
                                          → j                                                    ,, (4): (6),
                                                                                                 ,, (5): (6),
has two basins, and always ends in a cycle. The homomorphic                                      ,, (6): none.
                                 106                                                                       107
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                           THE BLACK BOX

The various simplifications are thus related as in the diagram, in       tem with a vast number of interacting parts, going through a trade
which a descending line connects the simpler form (below) with           cycle, to the simple form of two states:
the form from which it can be directly obtained (above):
                                                                                                    Boom           Slump
                                    1
                                                                           Thus, the various simplifications of a dynamic system can
                               2         3                               ordered and related.
                                                                         6/16. Models. We can now see much more clearly what is meant
                               4         5                               by a “model”. The subject was touched on in S.6/8, where three
                                                                         systems were found to be isomorphic and therefore capable of
                                                                         being used as representations of each other. The subject is some
                                    6                                    of importance to those who work with biological systems, for in
                                                                         many cases the use of a model is helpful, either to help the worker
   This diagram is of a type known as a lattice—a structure much         think about the subject or to act as a form of analogue computer.
studied in modern mathematics. What is of interest in this Intro-           The model will seldom be isomorphic with the biological sys-
duction is that this ordering makes precise many ideas about sys-        tem: usually it will be a homomorphism of it. But the model is
tems, ideas that have hitherto been considered only intuitively.         itself seldom regarded in all its practical detail: usually it is only
   Every lattice has a single element at the top (like 1) and a single   some aspect of the model that is related to the biological system;
element at the bottom (like 6). When the lattice represents the pos-     thus the tin mouse may be a satisfactory model of a living
sible simplifications of a machine, the element at the top corre-        mouse—provided one ignores the tinniness of the one and the
sponds to the machine with every state distinguished; it                 proteinness of the other. Thus what usually happens is that the two
corresponds to the knowledge of the experimenter who takes note          systems, biological and model, are so related that a homomor-
of every distinction available in its states. The element at the bot-    phism of the one is isomorphic with a homomorphism of the
tom corresponds to a machine with every state merged; if this            other. (This relation is symmetric, so either may justifiably be said
state is called Z the machine has as transformation only                 to be a “model” of the other.) The higher the homomorphisms are
                                                                         on their lattices, the better or more realistic will be the model.
                                   ↓ Z
                                     Z                                      At this point this Introduction must leave the subject of Homo-
                                                                         morphisms. Enough has been said to show the foundations of the
                                                                         subject and to indicate the main lines for its development. But
This transformation is closed, so something persists (S.10/4), and       these developments belong to the future.
the observer who sees only at this level of discrimination can say
of the machine: “it persists”, and can say no more. This persist-        Ex. 1: What would be the case when it was the two top-most elements of the two
ence is, of course, the most rudimentary property of a machine,              lattices that were isomorphic?
distinguishing it from the merely evanescent. (The importance of         Ex. 2: To what degree is the Rock of Gibraltar a model of the brain?
“closure”, emphasised in the early chapters, can now be appreci-         Ex. 3: To what extent can the machine
                                                                                                            p q r
ated —it corresponds to the intuitive idea that, to be a machine, an                                      ↓ q r r
entity must at least persist.)                                               provide models for the system of Ex. 6/13/2?
   Between these extremes lie the various simplifications, in their
natural and exact order. Near the top lie those that differ from the                      T HE VE RY L ARGE BOX
full truth only in some trifling matter. Those that lie near the bot-
tom are the simplifications of the grossest type. Near the bottom        6/17. The previous sections have shown how the properties that are
lies such a simplification as would reduce a whole economic sys-         usually ascribed to machines can also be ascribed to Black Boxes.

                                   108                                                                       109
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                         THE BLACK BOX

We do in fact work, in our daily lives, much more with Black              (2) Carbon, hydrogen and oxygen are all practically tasteless, yet
Boxes than we are apt to think. At first we are apt to think, for        the particular compound “sugar” has a characteristic taste pos-
instance, that a bicycle is not a Black Box, for we can see every        sessed by none of them.
connecting link. We delude ourselves, however. The ultimate links          (3) The twenty (or so) amino-acids in a bacterium have none of
between pedal and wheel are those interatomic forces that hold the       them the property of being “self-reproducing”, yet the whole, with
particles of metal together; of these we see nothing, and the child      some other substances, has this property.
who learns to ride can become competent merely with the knowl-
edge that pressure on the pedals makes the wheels go round.                 If these examples are compared in detail with the processes of
   To emphasise that the theory of Black Boxes is practically            study and coupling of Black Boxes, it is soon seen that the exam-
coextensive with that of everyday life, let us notice that if a set of   ples postulate much less knowledge of their parts than is postu-
Black Boxes has been studied by an observer, he is in a position         lated of the Black Boxes. Thus the prediction in regard to
to couple them together to form designed machinery. The method           ammonia and hydrogen chloride is based on no more knowledge
is straightforward: as the examination of each Box has given its         of each substance than that it is a gas. Similarly, of the twenty
canonical representation (S.6/5), so can they be coupled, inputs to      amino-acids all that is asked is “is it self- reproducing?” Were
outputs, to form new systems exactly as described in S.4/8.              each amino-acid treated as a Black Box the examination would be
   What is being suggested now is not that Black Boxes behave            far more searching. The input to a molecule is the set of electrical
somewhat like real objects but that the real objects are in fact all     and mechanical forces, in all distributions and combinations, that
Black Boxes, and that we have in fact been operating with Black          can affect it; and its output is the set of all states, electrical and
Boxes all our lives. The theory of the Black Box is merely the the-      mechanical, that it can be in. Were this complete knowledge
ory of real objects or systems, when close attention is given to the     available, then the method of S.4/8 shows how the behaviour of
question, relating object and observer, about what information           many coupled amino-acids could be predicted; and among the
comes from the object, and how it is obtained. Thus the theory of        predicted behaviours would be that of self-reproduction of the
the Black Box is simply the study of the relations between the           whole.
experimenter and his environment, when special attention is given           It will be seen that prediction of the whole’s behaviour can be
to the flow of information. “A study of the real world thus              based on complete or on incomplete knowledge of the parts. If the
becomes a study of transducers.” (Goldman, Information theory.)          knowledge is complete, then the case is that of the Black Box
                                                                         whose canonical representation is known, the inputs or circum-
6/18. Before we go further, the question of “emergent” properties        stances being all those that may be given by the other Boxes to
should be clarified.                                                     which it is to be coupled. When the knowledge of the parts is so
   First let one fact be established. If a number of Black Boxes are     complete, the prediction can also be complete, and no extra prop-
given, and each is studied in isolation until its canonical represen-    erties can emerge.
tation is established, and if they are coupled in a known pattern by        Often, however, the knowledge is not, for whatever reason,
known linkages, then it follows (S.4/8) that the behaviour of the        complete. Then the prediction has to be undertaken on incomplete
whole is determinate, and can be predicted. Thus an assembly of          knowledge, and may prove mistaken. Sometimes all that is known
Black Boxes, in these conditions, will show no “emergent” prop-          of the parts is that every one has a certain characteristic. There
erties; i.e. no properties that could not have been predicted from       may be no better way of predicting than to use simple extrapola-
knowledge of the parts and their couplings.                              tion —to predict that the whole will have it. Sometimes this
     The concept of “emergence” has never been defined with pre-         proves justified; thus, if a whole is of three parts, each of pure cop-
cision, but the following examples will probably suffice as a basis      per, then we shall be correct if we predict that the whole is of pure
for discussion:                                                          copper. But often the method fails, and a new property can, if we
                                                                         please, be said to “emerge”.
  (1) Ammonia is a gas, and so is hydrogen chloride. When the               It does in fact very commonly happen that when the system
two gases are mixed, the result is a solid—a property not pos-           becomes large, so that the range of size from part to whole is very
sessed by either reactant.                                               large, the properties of the whole are very different from those of
                                 110                                                                      111
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                           THE BLACK BOX

the parts. Biological systems are thus particularly likely to show        although the Newtonian theory has, in principle, solved all gravi-
the difference. We must therefore be on guard against expecting           tational problems, yet its application to three bodies is most com-
the properties of the whole to reproduce the properties of the parts,     plex, and its application to half a dozen is prohibitively laborious.
and vice versa.                                                           Yet astrophysicists want to ask questions about the behaviour of
   The examples of ammonium chloride and sugar mentioned                  star clusters with 20,000 members! What is to be done?
above are simple examples, but more complex cases occur. Con-                Experience has shown that in such cases the scientist must be
sider, for instance, the concept of “localisation” of some function       very careful about what questions he asks. He must ask for what
in a system. It may well happen that the view taken when the mat-         he really wants to know, and not for what he thinks he wants. Thus
ter is examined in the small is quite different from that taken in the    the beginner will say simply that he wants to know what the clus-
large. Thus suppose it is asked whether the brewing industry in           ter will do, i.e. he wants the trajectories of the components. If this
England is localised. The Exciseman, knowing of every building            knowledge, however, could be given to him, it would take the
in his district whether it is or is not part of the brewing trade, will   form of many volumes filled with numerical tables, and he would
say that brewing is undoubtedly “localised”. On the other hand,           then realise that he did not really want all that. In fact, it usually
the map-maker of England, being unable to mark any particular             happens that the significant question is something simple, such as
county as being the seat of brewing, will say that it is not local-       “will the cluster contract to a ball, or will it spread out into a disc?”
ised. Each, of course, is correct. What allows the contradiction is          The physicists, led originally by Poincare, have now a well
that when the range of size is great, what is true at one end of the      developed method for dealing with such matters—that of topol-
scale may be false at the other.                                          ogy. By its means, unambiguous answers can be given to simple
   Another example showing how contradictory may be the proper-           questions, so that the intricacies that would overwhelm the
ties in the small and the large is given by an ordinary piece of elas-    observer are never encountered.
tic. For years physical chemists searched for what made the                  A similar method, applied to complicated differential equa-
molecule contractile. They have since discovered that they were           tions, enables the main important features of the solutions to be
making exactly the mistake that this section is attempting to pre-        deduced in cases where the full solutions would be unmanageably
vent. It is now known that the rubber molecule has no inherent con-       complicated. This is the so-called “stability” theory of these equa-
tractility: stretch one out and let it go, and nothing happens! Why       tions.
then does rubber contract ? The point is that “stretching rubber” is         What is important for us here is that these methods exist. They
not “stretching one…”; the molecules, when there are more than            suggest that if a Black Box (such as a brain) has far too many var-
one, jostle each other and thereby force the majority to take lengths     iables for a study in every detail to be practical then it should be
less than their maxima. The result is that a shortening occurs, just as   possible for the cybernetically-minded psychologist to devise a
if, on a crowded beach, a rope fifty feet long is drawn out straight:     “topological” approach that shall enable him to get what informa-
after a few minutes the ends will be less than fifty feet apart!          tion he really wants (not what he thinks he wants!) without his
   Further examples are hardly necessary, for the point to be made        being overwhelmed with useless detail. Lewin attempted such a
is the merely negative one that in a large system there is no a priori    psychology; but in the '30s topology was not yet developed to be
necessity for the properties of the whole to be a simple copy of          a useful tool. In the '50s, however, it is much better developed,
those of the parts. (S.7/3 adds some further examples.)                   especially in the form published under the pseudonym of Nicholas
                                                                          Bourbaki, by the French School. At last we have before us the
6/19. As the system becomes larger, so does the fundamental               possibility of a psychology that shall be at once rigorous and prac-
method of study (S.6/3) become more laborious in application.             tical.
Eventually the amount of labour necessary becomes prohibitive.
What then is the observer to do? The question is of great impor-               T H E I NCOMP L E T E L Y OBS E RVABL E BOX
tance in the biological sciences, whether zoological or sociologi-        6/20. So far, in this chapter, we have assumed that the observer of
cal, for the size and complexity of the systems is great indeed.          the Black Box has the necessary means for observing all that per-
  The same difficulty has occurred in other sciences. Thus                tains to the Box’s state, so that he is like a Ship’s Engineer (S.6/2)
                                 112                                                                        113
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                         THE BLACK BOX

who faces a complete set of dials. Often, however, this is not so—          Observer One can see, like us, the values of both A and Z. He
some of the dials are hidden, or missing—and an important part of        studies the various combinations that may lead to the appearance
Black Box theory is concerned with making clear what peculiari-          of B, and he reports that B appears whenever the whole shows a
ties appear when the observer can observe only certain compo-            state with Z at y and the input at a. Thus, given that the input is at
nents of the whole state.                                                a, he relates the occurrence of B to whether Z is at y now.
   The theoretical developments are large, and little explored.             Observer Two is handicapped—he can see only I and A, not Z.
They will almost certainly be of importance in psychology; for, to       He will find that knowledge of A’s state and of I’s state is not suf-
the psychologist, the individual subject, whether a neurotic person      ficient to enable him to predict reliably whether B will be shown;
or a rat in a maze, is largely a system that is not wholly observa-      (for sometimes Z will be at y and sometimes at some other state).
ble; for the events in the subject’s brain are not directly observable   If however Two turns his attention to earlier events at I he finds
at the clinical or experimental session.                                 he can predict B’s appearance accurately. For if I has in succes-
   It should be noticed that as soon as some of a system’s variables     sion the values µ, α then behaviour B will appear, and not other-
become unobservable, the “system” represented by the remainder           wise. Thus, given that the input is at α, he relates the occurrence
may develop remarkable, even miraculous, properties. A com-              of B to whether I did have the value µ earlier.
monplace illustration is given by conjuring, which achieves                 Thus Two, being unable to observe Z directly, can none the less
(apparently) the miraculous, simply because not all the significant      make the whole predictable by taking into account earlier values
variables are observable. It is possible that some of the brain’s        of what he can observe. The reason is, the existence of the corre-
“miraculous” properties—of showing “foresight”, “intelligence”,          spondence:
etc.—are miraculous only because we have not so far been able to
observe the events in all the significant variables.                                        I at µ earlier ↔ Z at y now
                                                                                        I not at µ earlier ↔ Z not at y now.
6/21. As an example of the profound change that may occur in the         As this correspondence is one-one, information about I’s state a step
observer’s opinion about a mechanism if part of it becomes inac-         earlier and information about Z’s state now are equivalent, and each
cessible to direct observation, consider the following example.          can substitute for the other; for to know one is to know the other.
   The observer is assumed to be studying a Black Box which con-            If One and Two are quarrelsome, they can now fall into a dis-
sists of two interacting parts, A and Z. Both are affected by the        pute. One can maintain that the system shows no “memory”, i.e.
common input I. (Notice that A’s inputs are I and Z.)                    its behaviour requires no reference to the past, because the appear-
                                         A                               ance of behaviour B can be fully accounted for by the system’s
                                                                         present state (at I, A and Z). Two can deny this, and can point out
                               I         ↓↑                              that the system of I and A can be shown as determinate only when
                                         Z                               past values of I are taken into account, i.e. when some form of
Suppose the important question is whether the part A does or does        “memory” is appealed to.
not show some characteristic behaviour B (i.e. follow trajectory            Clearly, we need not take sides. One and Two are talking of dif-
B). Suppose this is shown (followed) only on the simultaneous            ferent systems (of I + A + Z or of I + A), so it is not surprising that
occurrence of                                                            they can make differing statements. What we must notice here is
                          (1) I at state α                               that Two is using the appeal to “memory” as a substitute for his
                      and (2) Z at state y.                              inability to observe Z.
                                                                            Thus we obtain the general rule: If a determinate system is only
Suppose that Z is at state y only after I has had the special value µ.   partly observable, and thereby becomes ( for that observer) not
  We (author and reader) are omniscient, for we know everything          predictable, the observer may be able to restore predictability by
about the system. Let us, using full knowledge, see how two              taking the system’s past history into account, i.e. by assuming the
observers (One and Two) could come to different opinions if they         existence within it of some form of “memory”.
had different powers of observation.                                        The argument is clearly general, and can be applied equally
                                   114                                                                    115
                A N IN T R O D U C T IO N T O C Y BERNETI CS                                                 THE BLACK BOX

well if the special, earlier, event (µ) occurred not one step earlier,              that it carries a + now is sufficient to allow prediction that the
but many. Thus in general, if earlier events E1, E2, . . ., Ek leave                machine’s next state will be a 1.
traces T1, T2, . . ., Tk respectively, which persist; and if later the                 On the other hand, an observer who cannot observe the tape can
remainder of the system produces behaviours B1, B2, . . ., Bk cor-                  predict its behaviour only by reference to what was done to the
responding to the value of T, then the various behaviours may be                    switch ten minutes ago. He will insist that the machine has “mem-
related to, or explained by, either                                                 ory”.
  (1) the present value of T, in which case there is no need for the                   The two observers are not really in conflict, as we can see at
invocation of any “memory”, or                                                      once when we realise that they are talking of two “machines” that
  (2) the past value of E, in which case the observer is compelled                  are not identical. To the first observer, “the machine” means “cal-
to postulate some form of “memory” in the system.                                   culator + tape + switch”; to the second it means “calculator +
                                                                                    switch”. They are talking about different systems. (Again it must
Thus the possession of “memory” is not a wholly objective prop-                     be emphasised that in complex systems a mere reference to the
erty of a system—it is a relation between a system and an observer;                 material object is often not sufficient to define adequately the sys-
and the property will alter with variations in the channel of com-                  tem under discussion.) (Compare S.6/14, 12/9.)
munication between them.                                                               Essentially the same difference can occur in a more biological
  Thus to invoke “memory” in a system as an explanation of its                      system. Thus, suppose I am in a friend’s house and, as a car goes
behaviour is equivalent to declaring that one cannot observe the                    past outside, his dog rushes to a corner of the room and cringes.
system completely. The properties of “memory” are not those of                      To me the behaviour is causeless and inexplicable. Then my
the simple “thing” but the more subtle “coding”.                                    friend says, “He was run over by a car six months ago.” The
                                                                                    behaviour is now accounted for by reference to an event of six
*Ex. 1: Prove the statement (Design. . S.19/22) that in an absolute system we can   months ago. If we say that the dog shows “memory” we refer to
   avoid direct reference to some of the variables provided we use derivatives
   of the remaining variables to replace them.                                      much the same fact—that his behaviour can be explained, not by
*Ex. 2: Prove the same statement about equations in finite differences.             reference to his state now but to what his state was six months ago.
*Ex. 3: Show that if the system has n degrees of freedom we must, in general,       If one is not careful one says that the dog “has” memory, and then
   always have at least n observations, each of the type “at time t1 variable xi    thinks of the dog as having something, as he might have a patch
   had value Xi” if the subsequent behaviour is to be predictable.                  of black hair. One may then be tempted to start looking for the
                                                                                    thing; and one may discover that this “thing” has some very curi-
6/22. A clear example showing how the presence of “memory” is                       ous properties.
related to the observability of a part is given by the digital calcu-                  Clearly, “memory” is not an objective something that a system
lator with a magnetic tape. Suppose, for simplicity, that at a cer-                 either does or does not possess; it is a concept that the observer
tain moment the calculator will produce a 1 or a 2 according to                     invokes to fill in the gap caused when part of the system is unob-
whether the tape, at a certain point, is magnetised + or—, respec-                  servable. The fewer the observable variables, the more will the
tively; the act of magnetisation occurred, say, ten minutes ago,                    observer be forced to regard events of the past as playing a part in
and whether it was magnetised + or—depended on whether the                          the system’s behaviour. Thus “memory” in the brain is only partly
operator did or did not, respectively, close a switch. There is thus                objective. No wonder its properties have sometimes been found to
the correspondence:                                                                 be unusual or even paradoxical. Clearly the subject requires thor-
                            switch closed ↔+↔1                                      ough re-examination from first principles.
                             switch open ↔–↔2
   An observer who can see the magnetic tape now can argue that
any reference to the past is unnecessary, for he can account for the
machine’s behaviour (i.e. whether it will produce a 1 or a 2) by its
state now, by examining what the tape carries now. Thus to know
                                      116                                                                           117
                 PART TWO
                      VARI E T Y

Now the soldier realised what a capital tinder-box this
was. If he struck it once, the dog came who sat upon the
chest of copper money, if he struck it twice, the dog came
who had the silver; and if he struck it three times, then
appeared the dog who had the gold.
                                     (“The Tinder-Box”)
                      QUANTITY OF VARIETY




Chapter                                                              7

         Q UANT IT Y OF VAR IE T Y

7/1. In Part I we considered the main properties of the machine
usually with the assumption that we had before us the actual thing
about which we would make some definite statement, with refer-
ence to what it is doing here and now. To progress in cybernetics
however, we shall have to extend our range of consideration. The
fundamental questions in regulation and control can be answered
only when we are able to consider the broader set of what it might
do, when “might” is given some exact specification.
  Throughout Part II, therefore, we shall be considering always a
set of possibilities. The study will lead us into the subjects c infor-
mation and communication, and how they are coded in their pas-
sages through mechanism. This study is essential for the thorough
understanding of regulation and control. We shall start from the
most elementary or basic considerations possible.

7/2. A second reason for considering a set of possibilities is the
science is little interested in some fact that is valid only for a sin-
gle experiment, conducted on a single day; it seeks always for
generalisations, statements that shall be true for all of a set of
experiment; conducted in a variety of laboratories and on a variety
of occasions. Galileo’s discovery of the law of the pendulum
would have been a little interest had it been valid only for that
pendulum on that afternoon. Its great importance is due precisely
to the fact that it is true over a great range of space and time and
materials. Science looks for the repetitive (S.7/15).

7/3. This fact, that it is the set that science refers to, is often
obscured by a manner of speech. “The chloride ion ...”, says the
lecturer, when clearly he means his statement to apply to all chlo-
ride ions. So we get references to the petrol engine, the growing
child the chronic drunkard, and to other objects in the singular,
when the reference is in fact to the set of all such objects.
                                 121
                A N IN T R O D U C T IO N T O C Y BERNETI CS                                             QUANTITY OF VARIETY

   Sometimes it happens that a statement is equally true of the                    the set, but has little meaning for any individual, each of whom
individual and the set: “the elephant eats with its trunk”, for                    either is or is not married. Examine each man as closely as you
instance. But the commonness of such a double application                          please, you will find nothing of “0.82” about him; and if he moves
should not make us overlook the fact that some types of statement                  to another village this figure may change to another without his
are applicable only to the set (or only to the individual) and                     having changed at all. Evidently, the “0.82” is a property of the
become misleading and a source of confusion if applied to the                      village, not of the individual.
other. Thus a gramme of hot hydrogen iodide gas, at some partic-                      Nevertheless, it is sometimes found convenient to pretend that
ular moment, may well be 37 per cent ionised; yet this statement                   the fraction has a meaning for the individual, and it may be said
must not be applied to the individual molecules, which are all                     that any one person has a “probability” 0.82 of being married.
either wholly ionised or not at all; what is true of the set is false of           This form of words is harmless provided it is borne in mind that
the individuals. Again, the Conservative M.P.s have, at the                        the statement, in spite of its apparent reference to the individual,
moment, a majority in Parliament; the statement is meaningless if                  is really a statement about the village. Let this be forgotten and a
applied to an individual member. Again, a tyre on a motor-car                      host of “paradoxes” arise, as meaningless and silly as that of
may well be travelling due west at 50 m.p.h. when considered as                    attempting to teach the “half”-child. Later (in Chapter 9) we shall
a whole; yet the portion in contact with the road is motionless, that              have to use the concept of probability in conjunction with that of
at the top is travelling due west at 100 m.p.h., and in fact not a sin-            machine; the origin and real nature of the concept should be borne
gle particle in the tyre is behaving as the whole is behaving.                     in mind perpetually.
   Again, twenty million women may well have thirty million
children, but only by a dangerous distortion of language can we                    7/5. Communication. Another subject in which the concept of a
say that Mrs. Everyman has one and a half children. The statement                  set plays an essential part is that of “communication”, especially
can sometimes be made without confusion only because those                         in the theory developed by Shannon and Wiener. At first, when
who have to take action, those who have to provide schools for the                 one thinks of, say, a telegram arriving, one notices only the sin-
children, for instance, know that the half-child is not a freak but a              gleness of one telegram. Nevertheless, the act of “communica-
set of ten million children.                                                       tion” necessarily implies the existence of a set of possibilities, i.e.
   Let us then accept it as basic that a statement about a set may be              more than one, as the following example will show.
either true or false (or perhaps meaningless) if applied to the ele-                  A prisoner is to be visited by his wife, who is not to be allowed
ments in the set.                                                                  to send him any message however simple. It is understood that
                                                                                   they may have agreed, before his capture, on some simple code.
Ex.: The following statements apply to “The Cat”, either to the species Felis      At her visit, she asks to be allowed to send him a cup of coffee;
    domestica or to the cat next door. Consider the applicability of each state-   assuming the beverage is not forbidden, how is the warder to
    ment to (i) the species, (ii) the individual:                                  ensure that no coded message is transmitted by it? He knows that
                         1. It is a million years old,                             she is anxious to let her husband know whether or not a confeder-
                         2. It is male,                                            ate has yet been caught.
                         3. Today it is in every continent,
                         4. It fights its brothers,                                   The warder will cogitate with reasonings that will go somewhat
                         5. About a half of it is female,                          as follows: “She might have arranged to let him know by whether
                         6. It is closely related to the Ursidae.                  the coffee goes in sweetened or not—I can stop that simply by
                                                                                   adding lots of sugar and then telling him I have done so. She might
7/4. Probability. The exercise just given illustrates the confusion                have arranged to let him know by whether or not she sends a
and nonsense that can occur when a concept that belongs properly                   spoon—I can stop that by taking away any spoon and then telling
to the set (or individual) is improperly applied to the other. An                  him that Regulations forbid a spoon anyway. She might do it by
outstanding example of this occurs when, of the whole set, some                    sending tea rather than coffee—no, that’s stopped because, as
fraction of the set has a particular property. Thus, of 100 men in a               they know, the canteen will only supply coffee at this time of
village 82 may be married. The fraction 0.82 is clearly relevant to                day.” So his cogitations go on; what is noteworthy is that at each
                                     122                                                                            123
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                         QUANTITY OF VARIETY

possibility he intuitively attempts to stop the communication by         which contains twelve elements, contains only three distinct ele-
enforcing a reduction of the possibilities to one—always sweet-          ments —a, b and c. Such a set will be said to have a variety of
ened, never a spoon, coffee only, and so on. As soon as the possi-       three elements. (A qualification is added in the next section.)
bilities shrink to one, so soon is communication blocked, and the           Though this counting may seem simple, care is needed. Thus
beverage robbed of its power of transmitting information. The            the two-armed semaphore can place each arm, independently of
transmission (and storage) of information is thus essentially            the other, in any of eight positions; so the two arms provide 64
related to the existence of a set of possibilities. The example may      combinations. At a distance, however, the arms have no individu-
make this statement plausible; in fact it is also supported by all the   ality—“arm A up and arm B down” cannot be distinguished from
work in the modern theory of communication, which has shown              “arm A down and arm B up”—so to the distant observer only 36
abundantly how essential, and how fruitful, is the concept of the        positions can be distinguished, and the variety is 36, not 64. It will
set of possibilities.                                                    be noticed that a set’s variety is not an intrinsic property of the set:
   Communication thus necessarily demands a set of messages.             the observer and his powers of discrimination may have to be
Not only is this so, but the information carried by a particular mes-    specified if the variety is to be well defined.
sage depends on the set it comes from. The information conveyed
is not an intrinsic property of the individual message. That this is     Ex. 1: With 26 letters to choose from, how many 3-letter combinations are avail-
so can be seen by considering the following example. Two sol-                able for motor registration numbers ?
diers are taken prisoner by two enemy countries A and B, one by          Ex. 2: If a farmer can distinguish 8 breeds of chicks, but cannot sex them, while
each; and their two wives later each receive the brief message “I            his wife can sex them but knows nothing of breeds, how many distinct
am well”. It is known, however, that country A allows the pris-              classes of chicks can they distinguish when working together?
oner a choice from                                                       Ex. 3: A spy in a house with four windows arranged rectangularly is to signal out
                                                                             to sea at night by each window showing, or not showing, a light. How many
                    I am well,                                               forms can be shown if, in the darkness, the position of the lights relative to
                    I am slightly ill,                                       the house cannot be perceived ?
                    I am seriously ill,                                  Ex. 4: Bacteria of different species differ in their ability to metabolise various
                                                                             substances: thus lactose is destroyed by E. cold but not by E. typhi. If a bac-
while country B allows only the message                                      teriologist has available ten substances, each of which may be destroyed or
                                                                             not by a given species, what is the maximal number of species that he can
                 I am well                                                   distinguish ?
                                                                         Ex. 5: If each Personality Test can distinguish five grades of its own character-
meaning “I am alive”. (Also in the set is the possibility of “no             istic, what is the least number of such tests necessary to distinguish the
message”.) The two wives will certainly be aware that though                 2,000,000,000 individuals of the world’s population?
each has received the same phrase, the informations that they have       Ex. 6: In a well-known card trick, the conjurer identifies a card thus: He shows
received are by no means identical.                                          21 cards to a by-stander, who selects, mentally, one of them without reveal-
  From these considerations it follows that, in this book, we must           ing his choice. The conjurer then deals the 21 cards face upwards into three
                                                                             equal heaps, with the by-stander seeing the faces, and asks him to say which
give up thinking, as we do as individuals, about “this message”.             heap contains the selected card. He then takes up the cards, again deals them
We must become scientists, detach ourselves, and think about                 into three equal heaps, and again asks which heap contains the selected card,
“people receiving messages”. And this means that we must turn                and similarly for a third deal. The conjurer then names the selected card.
our attention from any individual message to the set of all the pos-         What variety is there in (i) the by-stander’s indications, (ii) the conjurer’s
                                                                             final selection ?
sibilities.
                                                                         Ex. 7: (Continued.) 21 cards is not, in fact, the maximal number that could be
                             V A RI ETY                                      used. What is the maximum, if the other conditions are unaltered?
                                                                         Ex. 8: (Continued.) How many times would the by-stander have to indicate
7/6. Throughout this Part we shall be much concerned with the                which of three heaps held the selected card if the conjurer were finally to be
question, given a set, of how many distinguishable elements it               able to identify the correct card out of the full pack of 52?
contains. Thus, if the order of occurrence is ignored, the set           Ex. 9: If a child’s blood group is O and its mother’s group is 0, how much variety
                                                                             is there in the groups of its possible fathers?
                    c, b, c, a, c, c, a, b, c, b, b, a
                                 124                                                                            125
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                  QUANTITY OF VARIETY

7/7. It will have been noticed that many of the exercises involved                   Ex. 8: (Continued.) If the closed transformation had n states what variety is
the finding of products and high powers. Such computations are                           there?
often made easier by the use of logarithms. It is assumed that the                   Ex. 9: If the English vocabulary has variety of 10 bits per word, what is the stor-
                                                                                         age capacity of 10 minutes, speech on a gramophone record, assuming the
reader is familiar with their basic properties, but one formula will                     speech is at 120 words per minute?
be given for reference. If only logarithms to base a are available                   Ex. 10: (Continued.) How does this compare with the capacity of a printed page
and we want to find the logarithm to the base b of some number                           of newspaper (approximately)?
N, then                                                                              Ex. 11: (Continued.) If a pamphlet takes 10 minutes to be read aloud, how does
                                     log aN                                              its variety compare with that of the gramophone record?
                          log bN = --------------                                    Ex. 12: What set is the previous Ex. referring to?
                                     log ab                                          Ex. 13: Can a merely negative event—a light not being lit, a neuron not being
In particular, log2N = 3.322 log10N.                                                     excited, a telegram not arriving—be used as a contribution to variety ?
  The word variety, in relation to a set of distinguishable ele-
ments, will be used to mean either (i) the number of distinct ele-                                             CONS T RAI NT
ments, or (ii) the logarithm to the base 2 of the number, the
context indicating the sense used. When variety is measured in the                   7/8. A most important concept, with which we shall be much con-
logarithmic form its unit is the “bit”, a contraction of “BInary                     cerned later, is that of constraint. It is a relation between two sets,
digiT”. Thus the variety of the sexes is 1 bit, and the variety of the               and occurs when the variety that exists under one condition is less
52 playing cards is 5.7 bits, because log2 52 = 3.322 log1052 =                      than the variety that exists under another. Thus, the variety in the
3.322 x 1.7160 = 5.7. The chief advantage of this way of reckon-                     human sexes is I bit; if a certain school takes only boys, the variety
ing is that multiplicative combinations now combine by simple                        in the sexes within the school is zero; so as 0 is less than 1, con-
addition. Thus in Ex. 7/6/2 the farmer can distinguish a variety of                  straint exists.
3 bits, his wife 1 bit, and the two together 3 + 1 bits, i.e. 4 bits.                   Another well-known example is given by the British traffic
  To say that a set has “no” variety, that the elements are all of                   lights, which have three lamps and which go through the sequence
one type, is, of course, to measure the variety logarithmically; for                 (where “+” means lit and “1” unlit):
the logarithm of 1 is 0.                                                                                          (1) (2) (3) (4) (1) …
Ex. 1: In Ex. 7/6/4 how much variety, in bits, does each substance distinguish?                      Red:          + +     0   0   + …
Ex. 2: In Ex. 7/6/s: (i) how much variety in bits does each test distinguish? (ii)                   Yellow:       0   +   0   +   0 …
    What is the variety in bits of 2,000,000,000 distinguishable individuals?                        Green:        0   0   +   0   0 …
    From these two varieties check your previous answer.
Ex. 3: What is the variety in bits of the 26 letters of the alphabet?                Four combinations are thus used. It will be noticed that Red is, at
Ex. 4: (Continued.) What is the variety, in bits, of a block of five letters (not    various times, both lit and unlit; so is Yellow; and so is Green. So
    restricted to forming a word) ? Check the answer by finding the number of        if the three lights could vary independently, eight combinations
    such blocks, and then the variety.                                               could appear. In fact, only four are used; so as four is less than
Ex. 5: A question can be answered only by Yes or No; (i) what variety is in the      eight, constraint is present.
    answer? (ii) In twenty such answers made independently?
Ex. 6: (Continued.) How many objects can be distinguished by twenty questions,
    each of which can be answered only by Yes or No ?                                7/9. A constraint may be slight or severe. Suppose, for instance,
Ex. 7: A closed and single-valued transformation is to be considered on six          that a squad of soldiers is to be drawn up in a single rank, and that
    states:                                                                          “independence” means that they may stand in any order they
                                a b c d e f                                          please. Various constraints might be placed on the order of stand-
                            ↓ ? ? ? ? ? ?
                                                                                     ing, and these constraints may differ in their degree of restriction.
    in which each question mark has to be replaced by a letter. If the replace-      Thus, if the order were given that no man may stand next a man
    ments are otherwise unrestricted, what variety (logarithmic) is there in the     whose birthday falls on the same day, the constraint would be
    set of all possible such transformations ?
                                                                                     slight, for of all the possible arrangements few would be
                                      126                                                                                   127
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                       QUANTITY OF VARIETY

excluded. If, however, the order were given that no man was to          defined set of cars, then the three components would be said to be
stand at the left of a man who was taller than himself, the con-        “independent”, or to “vary independently”, within this defined set.
straint would be severe; for it would, in fact, allow only one order       It should be noticed that such a statement refers essentially to
of standing (unless two men were of exactly the same height). The       what is observed to occur within the set; it need contain no refer-
intensity of the constraint is thus shown by the reduction it causes    ence to any supposed cause for the independence (or for the con-
in the number of possible arrangements.                                 straint).
7/10. It seems that constraints cannot be classified in any simple      Ex. 1: When Pantagruel and his circle debated whether or not the time had come
                                                                            for Panurge to marry, they took advisers, who were introduced thus: “...
way, for they include all cases in which a set, for any reason, is          Rondibilis, is married now, who before was not—Hippothadeus was not
smaller than it might be. Here I can discuss only certain types of          before, nor is yet—Bridlegoose was married once, but is not now—and
outstanding commonness and importance, leaving the reader to                Trouillogan is married now, who wedded was to another wife before.” Does
add further types if his special interests should lead him to them.         this set of vectors show constraint ?
                                                                        Ex. 2: If each component can be Head (H) or Tail (T), does the set of four vectors
                                                                            (H,H,H), (T,T,H), (H,T,T), (T,H,T) show constraint in relation to the set
7/11. Constrain in vectors. Sometimes the elements of a set are             showing independence ?
vectors, and have components. Thus the traffic signal of S.7/8 was
a vector of three components, each of which could take two values.      7/13. Degrees of freedom. When a set of vectors does not show the
In such cases a common and important constraint occurs if the           full range of possibilities made available by the components (S.7/
actual number of vectors that occurs under defined conditions is        11), the range that remains can sometimes usefully be measured
fewer than the total number of vectors possible without conditions      by saying how many components with independence would give
(i.e. when each component takes its full range of values independ-      the same variety. This number of components is called the degrees
ently of the values taken by the other components). Thus, in the        of freedom of the set of vectors. Thus the traffic lights (S.7/8)
case of the traffic lights, when Red and Yellow are both lit, only      show a variety of four. If the components continued to have two
Green unlit occurs, the vector with Green lit being absent.             states apiece, two components with independence could give the
   It should be noticed that a set of vectors provides several varie-   same variety (of four). So the constraint on the lights can be
ties, which must be identified individually if confusion is not to      expressed by saying that the three components, not independent,
occur. Consider, for instance, the vector of S.3/5:                     give the same variety as two would if independent; i.e. the three
                                                                        lights have two degrees of freedom.
                (Age of car, Horse-power, Colour).                         If all combinations are possible, then the number of degrees of
The first component will have some definite variety, and so will        freedom is equal to the number of components. If only one com-
the second component, and the third. The three varieties need not       bination is possible, the degrees of freedom are zero.
be equal. And the variety in the set of vectors will be different          It will be appreciated that this way of measuring what is left free
again.                                                                  of constraint is applicable only in certain favourable cases. Thus,
   The variety in the set of vectors has, however, one invariable       were the traffic lights to show three, or five combinations, the
relation to the varieties of the components—it cannot exceed their      equivalence would no longer be representable by a simple, whole,
sum (if we think in logarithms, as is more convenient here). Thus,      number. The concept is of importance chiefly when the compo-
if a car may have any one of 10 ages, of 8 horse-powers, and of 12      nents vary continuously, so that each has available an infinite
colours, then the variety in the types of car cannot exceed 3.3 +       number of values. A reckoning by degrees of freedom may then
3.0 + 3.6 bits, i.e. 9.9 bits.                                          still be possible, though the states cannot be counted.
                                                                        Ex. 1: If a dealer in second-hand cars boasts that his stock covers a range of 10
7/12. The components are independent when the variety in the                ages, 8 horse powers, and 12 colours, in all combinations, how many degrees
whole of some given set of vectors equals the sum of the (logarith-         of freedom has his stock ?
mic) varieties in the individual components. If it were found, for      Ex. 2: The angular positions of the two hands on a clock are the two components
                                                                            of a vector. Has the set of vectors (in ordinary working round the 12 hours)
instance, that all 960 types of car could be observed within some           a constraint if the angles are measured precisely?
                                 128                                                                          129
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                  QUANTITY OF VARIETY

Ex. 3: (Continued.) How many degrees of freedom has the vector? (Hint: Would             Science looks for laws; it is therefore much concerned with
    removal of the minute-hand cause an essential loss ?)                              looking for constraints. (Here the larger set is composed of what
Ex. 4: As the two eyes move, pointing the axes in various directions, they define      might happen if the behaviour were free and chaotic, and the
    a vector with four components: the upward and lateral deviations of the right
    and left eyes. Man has binocular vision; the chameleon moves his two eyes          smaller set is composed of what does actually happen.)
    independently, each side searching for food on its own side of the body. How         This point of view, it will be noticed, conforms to what was said
    many degrees of freedom have the chameleonts eyes ? Man’s ?                        in S.1/5. Cybernetics looks at the totality, in all its possible rich-
Ex. 5: An arrow, of fixed length, lying in a plane, has three degrees of freedom       ness, and then asks why the actualities should be restricted to
    for position (for two co-ordinates will fix the position of its centre, say, and   some portion of the total possibilities.
    then one angle will determine its direction). How many degrees of freedom
    has it if we add the restriction that it must always point in the direction of a   Ex. 1: How is the chemist’s Law of Simple Proportions a constraint?
    given point P?                                                                     Ex. 2: How is the Law of Conservation of Energy a constraint?
Ex. 6: T is a given closed and single-valued transformation, and a any of its oper-
    ands. Consider the set of vectors, each of three components,
                                    (a, T(a), T2(a)),                                  7/16. Object as constraint. Constraints are exceedingly common
    with a given all its possible values in turn. How many degrees of freedom          in the world around us, and many of our basic concepts make use
    has the set ?                                                                      of it in an essential way. Consider as example the basic concept of
Ex. 7: In what way does the ordinary graph, of y on x, show constraint ?               a “thing” or “object”, as something handled in daily life. A chair
Ex. 8: How many degrees of freedom has an ordinary body—a chair say—in                 is a thing because it has coherence, because we can put it on this
    three dimensional space?
                                                                                       side of a table or that, because we can carry it around or sit on it.
                                                                                       The chair is also a collection of parts.
              I M P O R TA N C E O F C O N ST R A IN T                                    Now any free object in our three dimensional world has six
                                                                                       degrees of freedom for movement. Were the parts of the chair
7/14. Constraints are of high importance in cybernetics, and will                      unconnected each would have its own six degrees of freedom; and
be given prominence through the remainder of this book, because                        this is in fact the amount of mobility available to the parts in the
when a constraint exists advantage can usually be taken of it.                         workshop before they are assembled. Thus the four legs, when
   Shannon’s work, discussed chiefly in Chapter 9, displays this                       separate, have 24 degrees of freedom. After they are joined, how-
thesis clearly. Most of it is directed to estimating the variety that                  ever, they have only the six degrees of freedom of the single
would exist if full independence occurred, showing that con-                           object. That there is a constraint is obvious when one realises that
straints (there called “redundancy”) exist, and showing how their                      if the positions of three legs of an assembled chair are known, then
existence makes possible a more efficient use of the channel.                          that of the fourth follows necessarily—it has no freedom.
   The next few sections will also show something of the wide                             Thus the change from four separate and free legs to one chair
applicability and great importance of the concept.                                     corresponds precisely to the change from the set’s having 24
                                                                                       degrees of freedom to its having only 6. Thus the essence of the
7/15. Laws of Nature. First we can notice that the existence of any                    chair’s being a “thing”, a unity, rather than a collection of inde-
invariant over a set of phenomena implies a constraint, for its exist-                 pendent parts corresponds to the presence of the constraint.
ence implies that the full range of variety does not occur. The gen-
eral theory of invariants is thus a part of the theory of constraints.
  Further, as every law of nature implies the existence of an                          7/17. Seen from this point of view, the world around us is
invariant, it follows that every law of nature is a constraint. Thus,                  extremely rich in constraints. We are so familiar with them that
the Newtonian law says that, of the vectors of planetary positions                     we take most of them for granted, and are often not even aware
and velocities which might occur, e.g. written on paper (the larger                    that they exist. To see what the world would be like without its
set), only a smaller set will actually occur in the heavens; and the                   usual constraints we have to turn to fairy tales or to a “crazy” film,
law specifies what values the elements will have. From our point                       and even these remove only a fraction of all the constraints.
of view, what is important is that the law excludes many positions                       A world without constraints would be totally chaotic. The tur-
and velocities, predicting that they will never be found to occur.                     bulent river below Niagara might be such a world (though the
                                       130                                                                                 131
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                  QUANTITY OF VARIETY

physicist would still find some constraint here). Our terrestrial                    7/20. Within the set of determinate machines further constraints
world, to which the living organism is adapted, is far from pre-                     may be applied. Thus the set can be restricted to those that have a
senting such a chaos. Later (S.13/5) it will be suggested that the                   certain set of states as operands, or to those that have only one
organism can adapt just so far as the real world is constrained, and                 basin, or to those that are not reducible.
no further.                                                                             A common and very powerful constraint is that of continuity. It
                                                                                     is a constraint because whereas the function that changes arbitrar-
Ex.: Attempt to count, during the next one minute, all the constraints that are      ily can undergo any change, the continuous function can change,
    operating in your surroundings.
                                                                                     at each step, only to a neighbouring value. Exercise 4 gives but a
                                                                                     feeble impression of the severity of this constraint.
7/18. Prediction and constraint. That something is “predictable”
implies that there exists a constraint. If an aircraft, for instance,                Ex. 1: The set of closed single-valued transformations (absolute systems) on
were able to move, second by second, from any one point in the                           three states a, b, c has 27 members (compare Ex. 7/7/7). How many members
sky to any other point, then the best anti-aircraft prediction would                     remain if we add the restriction that the absolute system is to have no state
                                                                                         of equilibrium?
be helpless and useless. The latter can give useful information only
                                                                                     Ex. 2: (Continued.) Similarly, but the restriction is that there must be only one
because an aircraft cannot so move, but must move subject to sev-                        basin.
eral constraints. There is that due to continuity—an aircraft cannot                 Ex. 3: (Continued.) Similarly, but the restriction is that the transitions a -> b and
suddenly jump, either in position or speed or direction. There is the                    b → c may not occur.
constraint due to the aircraft’s individuality of design, which                      Ex. 4: A vector has ten components, each of which can take one of the values: 1,
makes this aircraft behave like an A-10 and that one behave like a                       2, 3, 4. How much variety has the set of vectors if (i) the components vary
Z-20. There is the constraint due to the pilot’s individuality; and so                   independently (S.7/12); (ii) under the rule that no two adjacent components
on. An aircraft’s future position is thus always somewhat con-                           may differ in value by more than one unit ?
strained, and it is to just this extent that a predictor can be useful.
                                                                                     7/21. Learning and constraint. For the psychologist, an important
                                                                                     example of constraint occurs in learning. Pavlov, for instance, in
7/19. Machine as constraint. It will now be appreciated that the                     one experiment gave both thermal and tactile stimuli, as well as
concept of a “machine“, as developed from the inspection of a                        reinforcement by meat powder, in the following combinations:
protocol (S.6/5), comes from recognising that the sequence in the
protocol shows a particular form of constraint. Were the protocol                                     Thermal       Tactile     Reinforcement
to show no constraint, the observer would say it was chaotic or                                1         +             +              +
unpredictable, like a roulette-wheel.                                                          2         +             –               –
  When it shows the characteristic form of constraint, the                                     3         –             +              +
observer can take advantage of the fact. He does this by re-coding                             4         –             –               –
the whole protocol into a more compact form, containing only:                        (The fourth combination occurred, of course, in the intervals.)
                                                                                     Now the total combinations possible are eight; Pavlov presented
                  (i) a statement of the transformation                              only four. It was an essential part of the experiment that the full
             and (ii) a statement of the actual input given.                         set should not be given, for otherwise there would be nothing par-
Subsequently, instead of the discussion being conducted in terms                     ticular for the animal to learn. Constraint was an essential feature
of a lengthy protocol, it is conducted compactly in terms of a suc-                  of the experiment.
cinct transformation; as we did throughout Part I.                                      The same principle can be seen more simply in learning by
  Thus, use of the transformation is one example of how one can                      association. Suppose one wanted the subject, given a letter, to
turn to advantage the characteristic constraint on behaviour                         reply with a number according to the rule
imposed by its being “machine-like”.                                                                         A given : reply with 2
Ex.: If a protocol shows the constraint characteristic of a machine, what does the
                                                                                                             B   ,,  : ,,     ,, 5
    constraint exclude ?                                                                                     C   ,,  : ,,     ,, 3
                                      132                                                                                    133
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                          QUANTITY OF VARIETY

The subject might then be given a sequence such as A2, B5, C3,             It is not necessary that the transformation should be closed.
B5, C3, A2, A2, C3, and so on.                                           Thus if the same set of ten letters is transformed by Y:
   Now this sequence, as a sequence of vectors with two compo-
                                                                                                  Y: ↓ p q p
nents, shows constraint; and if learning is to occur the constraint                                     A B C
is necessary; for without constraint A would be followed equally
by 2, 3 or 5; and the subject would be unable to form any specific       giving q q p p p p p p q p, the variety falls. It is easy to see that
associations. Thus learning is possible only to the extent that the      only when the transformation is one-one (over the letters that
sequence shows constraint.                                               actually occur in the set to be transformed) is the set’s variety
   The same is true of learning a maze. For this to occur the maze       unchanged; and this is a very special type of transformation.
must retain the same pattern from day to day during the period of
learning. Were the maze to show no constraint, the animal would          Ex. 1: Write the letters A to Z in a row; under it, letter by letter, write the first 26
be unable to develop the particular (and appropriate) way of                 letters of some well known phrase. The transition from upper row to lower
behaving. Thus, learning is worth while only when the environ-               now defines a single-valued transformation (u). Write your name in full, find
ment shows constraint. (The subject is taken up again in S.13/7.)            the variety among its letters, transform by u (i.e. “code” it) and find the vari-
                                                                             ety in the new set of letters How has the variety changed ? Apply u repeat-
                                                                             edly; draw a graph of how the variety changes step by step.
                                                                         Ex. 2: In a certain genus of parasite, each species feeds off only one species of
                  V A RI ETY I N M A C H IN E S                              host. If the varieties (in our sense) of parasites’ species and hosts’ species are
7/22. We can now turn to considering how variety is affected by              unequal, which is the larger?
a machine’s activities, making our way towards an understanding          Ex. 3: “A multiplicity of genotypes may show the same phenotypic feature.” If
                                                                             the change from each genotype to its corresponding phenotype is a transfor-
of what happens to information when it is handled by a machine.              mation V, what change in variety does V cause ?
First, let us notice a fundamental peculiarity of the single-valued      Ex. 4: When a tea-taster tastes a cup of tea, he can be regarded as responsible for
transformation in its relation to variety.                                   a transformation Y converting “sample of leaf” as operand to “opinion” as
   Consider for instance the single-valued transformation                    transform. If the taster is perfect, Y will be one-one. How would he be
                                                                             described if Y were many-one ?
                                  A B C                                  Ex. 5: When read to the nearest degree on each of seven occasions, the temper-
                           Z: ↓                                              atures of the room and of a thermostatically-controlled water-bath were
                                  B C C                                      found to be
                                                                                                     Room: 65, 62, 68, 63, 62, 59, 61.
and apply it to some set of the operands, e.g.                                                 Water-bath: 97, 97, 98, 97, 97, 97, 97.
               B B A C C C A A B A                                           How much variety is shown (i) by the room’s temperatures, (ii) by those of
The result is C C B C C C B B C B                                            the bath ? What would have been said had the variety in (i) exceeded that of
                                                                             (ii)?
What is important is that the variety in the set has fallen from 3       * Ex. 6: If the transformation has been formed by letting each state go to one state
to 2. A further transformation by Z leads to all C’s, with a variety         selected at random from all the states (independently and with equal proba-
of 1.                                                                        bilities), show that if the number of states is large, the variety will fall at the
   The reader can easily satisfy himself that such a set, operated on        first step, in the ratio of 1 to 1 - 1/e, i.e. to about two-thirds. (Hint: The prob-
                                                                             lem is equivalent (for a single step) to the following: n hunters come sud-
by a single-valued transformation, can never increase in variety,            denly on a herd of n deer. Each fires one shot at a deer chosen at random.
and usually falls. The reason for the fall can readily be identified.        Every bullet hits. How many deer will, on the average, be hit? And to what
                                                                             does the average tend as n tends to infinity?)
In the graph, a confluence of arrows           can occur, but a diver-
                                                                         7/23. Set and machine. We must now be clear about how a set of
gence       is impossible. Whenever the transformation makes two         states can be associated with a machine, for no real machine can,
states change to one, variety is lost; and there is no contrary proc-    at one time, be in more than one state. A set of states can be con-
ess to replace the loss.                                                 sidered for several reasons.
                                 134                                                                              135
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                         QUANTITY OF VARIETY

   We may, in fact, not really be considering one machine, however       particular message, then as time goes on the amount of informa-
much we speak in the singular (S.7/3), but may really be consider-       tion it stores can only diminish. Thus one of three messages might
ing a set of replicates, as one might speak of “the Model T Ford”, or    be carried to a prisoner by a cup of coffee, the message depending
“the anterior horn cell”, or “the white rat”. When this is so we can     on whether it was hot, tepid, or cold. This method would work sat-
consider all the replicates together, one in one state and one in        isfactorily if the time between despatch and receipt was short, but
another; thus we get a set of states for one transformation to act on.   not if it were long; for whichever of the three states were selected
   A set of states can also arise even if the machine is unique. For     originally, the states after a short time would be either “tepid” or
we may wish to consider not only what it may do at one time from         “cold”, and after a long time, “cold” only. Thus the longer the
one state but also what it may do at another time from another           time between despatch and receipt, the less is the system’s capac-
state. So its various possible behaviours at a set of times are natu-    ity for carrying information, so far as this depends on its being at
rally related to a set of states as operands.                            a particular state.
   Finally, a set may be created by the fiat of a theoretician who,
not knowing which state a particular machine is at, wants to trace       Ex. 1: If a ball will rest in any one of three differently coloured basins, how much
out the consequences of all the possibilities. The set now is not the        variety can be stored ?
set of what does exist, but the set of what may exist (so far as the     Ex. 2: (Continued.) If in addition another ball of another colour can be placed,
theoretician is concerned). This method is typically cybernetic,             by how much is the variety increased ?
for it considers the actual in relation to the wider set of the possi-   Ex. 3: That a one-one transformation causes no loss of variety is sometimes used
ble or the conceivable (S.1/3).                                              as a parlour trick. A member of the audience is asked to think of two digits.
                                                                             He is then asked to multiply one of them by 5, add 7, double the result, and
                                                                             add the other number. The result is told to the conjurer who then names the
7/24. Decay of variety. Having, for one of these reasons, a set of           original digits. Show that this transformation retains the original amount of
states and one single-valued transformation, we can now, using               variety. (Hint: Subtract 14 from the final quantity.)
the result of S.7/22, predict that as time progresses the variety in     Ex. 4 (Continued.) What is the set for the first measure of variety?
the set cannot increase and will usually diminish.                       Ex. 5: (Another trick.) A member of the audience writes down a two-digit
                                                                             number, whose digits differ by at least 2. He finds the difference between
   This fact may be seen from several points of view.                        this number and the number formed by the same digits in reverse order. To
   In the first place it gives precision to the often made remark that       the difference he adds the number formed by reversing the digits of the dif-
any system, left to itself, runs to some equilibrium. Usually the            ference. How much variety survives this transformation?
remark is based on a vague appeal to experience, but this is unsat-      Ex. 6: If a circuit of neurons can carry memory by either reverberating or not,
isfactory, for the conditions are not properly defined. Sometimes            how much variety can the circuit carry ? What is the set having the variety ?
the second law of thermodynamics is appealed to, but this is often       Ex. 7: Ten machines, identical in structure, have run past their transients and now
                                                                             have variety constant at zero. Are they necessarily at a state of equilibrium ?
irrelevant to the systems discussed here (S.1/2). The new formu-
lation shows just what is essential.
   In the second place it shows that if an observer has an absolute      7/25. Law of Experience. The previous section showed that the
system, whose transformation he knows but whose states cannot,           variety in a machine (a set being given and understood) can never
for any reason, be observed, then as time goes on his uncertainty        increase and usually decreases. It was assumed there that the
about its state can only diminish. For initially it might be at any      machine was isolated, so that the changes in state were due only
one of all its states, and as time goes on so does the number of its     to the inner activities of the machine; we will now consider what
possible states diminish. Thus, in the extreme case in which it has      happens to the variety when the system is a machine with input.
only one basin and a state of equilibrium, he can, if initially uncer-      Consider first the simplest case, that of a machine with one
tain, ultimately say with certainty, without making any further          parameter P that changes only at long intervals. Suppose, for clar-
observation, at which state it is.                                       ity, that the machine has many replicates, identical in their trans-
   The diminution can be seen from yet another point of view. If         formations but differing in which state each is at; and that we are
the variety in the possible states is associated with information, so    observing the set of states provided at each moment by the set of
that the machine’s being at some particular state conveys some           machines. Let P be kept at the same value for all and held at that

                                 136                                                                            137
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                    QUANTITY OF VARIETY

value while the machines change step by step. The conditions are         proper correspondence. This point of view would be more appro-
now as in the previous section, and if we measure the variety in         priate if we were studying some very complex transducer, making
state over the set of replicates, and observe how the variety            fresh experiments on it each day. If it contained great numbers of
changes with time, we shall see it fall to some minimum. When the        rather inaccessible parts, there might be difficulty in bringing it
variety has reached its minimum under this input-value (P~), let P       each morning back to some standardised state ready for the next
be changed to some new value (P2), the change being made uni-            experiment. The theorem says that if its input is taken, in the early
formly and simultaneously over the whole set of replicates. The          morning, through some standardised routine, then the longer the
change in value will change the machine’s graph from one form to         routine, the more certain is it that the machine will be brought,
another, as for example (if the machine has states A, B,…, F,)           ready for the experimenter, to some standard state. The experi-
                                                                         menter may not be able to name the state, but he can be confident
             A       B   C                      A → B         C          that it tends to be reproducible.
    from     ↓           ↓                to        ↑         ↑             It should be noticed that mere equality of the set’s parameter at
             D       E ← F                      D → E         F          each step of the sequence is not sufficient; if the effect is to be
                    (P1)                           (P2)                  more than merely nominal (i.e. null) the parameters must undergo
Under P1, all those members that started at A, B or D would go to        actual, non- zero, change.
D, and those that started at C, E, or F would go to E. The variety,         The theorem is in no way dependent for its truth on the size of
after some time at P1, would fall to 2 states. When P is changed to      the system. Very large systems are exactly as subject to it as small,
P2, all those systems at D would go, in the first step, to E (for the    and may often be expected to show the effect more smoothly and
transformation is single-valued), and all those at E would go to B.      regularly (by the statistical effect of largeness). It may therefore
It is easy to see, therefore, that, provided the same change is made     be usefully applicable to the brain and to the social and economic
to all, change of parameter-value to the whole set cannot increase       system.
the set’s variety. This is true, of course, whether D and E are states      Examples that may correspond to this process are very com-
of equilibrium or not. Now let the system continue under P2. The         mon. Perhaps something of this sort occurs when it is found that
two groups, once resting apart at D and E, will now both come to         a number of boys of marked individuality, having all been through
B; here all will have the same state, and the variety will fall to       the same school, develop ways that are more characteristic of the
zero. Thus, change of parameter-value makes possible a fall to a         school they attended than of their original individualities. The
new, and lower, minimum.                                                 extent to which this tendency to uniformity in behaviour is due to
   The condition that the change P1 -> P2 may lead to a further fall     this property of transducers must be left for further research.
in variety is clearly that two or more of P1’s states of equilibrium        Some name is necessary by which this phenomenon can be
lie in the same P2 basin. Since this will often happen we can make       referred to. I shall call it the law of Experience. It can be
the looser, but more vivid, statement that a uniform change at the       described more vividly by the statement that information put in by
inputs of a set of transducers tends to drive the set’s variety down.    change at a parameter tends to destroy and replace information
   As the variety falls, so does the set change so that all its mem-     about the system’s initial state.
bers tend, at each moment, to be at the same state. In other words,
changes at the input of a transducer tend to make the system’s
state (at a given moment) less dependent on the transducer’s indi-
vidual initial state and more dependent on the particular sequence
of parameter-values used as input.
   The same fact can be looked at from another point of view. In
the argument just given, “the set” was taken, for clarity, to be a set
of replicates of one transducer, all behaving simultaneously. The
theorem is equally applicable to one transducer on a series of
occasions, provided the various initial times are brought into
                                 138                                                                     139
                                                                                               TRANSMISSION OF VARIETY

                                                                          brief account mentions no less than sixteen major transformations
                                                                          through all of which something has been preserved, though the
                                                                          superficial appearances have changed almost out of recognition.
Chapter                                                              8
                                                                          8/3. Complexity of coding. When considering such repeated cod-
                                                                          ings the observer may easily over-estimate the amount of com-
                                                                          plexity that has been introduced. It not uncommonly happens that
    T R A NS MIS S IO N O F VARI ETY                                      the amount of complexity is nothing like as large as a first impres-
                                                                          sion might suggest.
8/1. The previous chapter has introduced the concept of “variety”,           A simple example, showing how a complex coding may have
a concept inseparable from that of “information”, and we have             hidden simplicities, occurs when a simple one-one coding of the al-
seen how important it is, in some problems, to recognise that we          phabet is applied first to the message, then to the first coded form to
are dealing with a set of possibilities.                                  give a second (doubly-) coded form, then to the second coded form,
   In the present chapter we shall study how such possibilities are       and so on for many codings. The final form might be thought to be
transmitted through a machine, in the sense of studying the rela-         extremely mixed, and to need for its decoding as many operations
tion that exists between the set that occurs at the input and the con-    backwards as were used forwards; in fact, as can easily be verified,
sequent set that occurs, usually in somewhat coded form, at the           it differs from the original message only by as much as is caused by
output. We shall see that the transmission is, if the machine is          a single application of some one-one coding. The final message can
determinate, perfectly orderly and capable of rigorous treatment.         thus be turned back to the original by a single operation.
Our aim will be to work towards an understanding good enough              Ex.: Arrange the cards of a pack in order, and place it on the table face down-
to serve as a basis for considering the extremely complex codings             wards. Cut. Cut again. Cut again and again until you are satisfied that the
used by the brain.                                                            original order is lost totally. Now pick the pack up and examine its order;
                                                                              how much order has been lost?
8/2. Ubiquity of coding. To get a picture of the amount of coding
that goes on during the ordinary interaction between organism and         8/4. De-coding. The general study of codings is best introduced
environment, let us consider, in some detail, the comparatively sim-      by noticing some of the features of military codings.
ple sequence of events that occurs when a “Gale warning” is broad-           We must be careful from the beginning not to interpret “code”
cast. It starts as some patterned process in the nerve cells of the       too narrowly. At first we tend to think only of those methods that
meteorologist, and then becomes a pattern of muscle-movements as          turn each letter of the message to some other letter, but this class
he writes or types it, thereby making it a pattern of ink marks on        is too restricted, for there are many other methods. Thus the
paper. From here it becomes a pattern of light and dark on the            “Playfair” code operates on the letters in pairs, turning each pair
announcer’s retina, then a pattern of retinal excitation, then a pat-     (a vector with two components ) to some other pair. Other codes
tern of nerve impulses in the optic nerve, and so on through his          put the letters into some new arrangement, while others are
nervous system. It emerges, while he is reading the warning, as a         wholly arbitrary, turning, for instance, “two divisions will arrive”
pattern of lip and tongue movements, and then travels as a pattern        to “Arthur”. These considerations make it clear that if the coding
of waves in the air. Reaching the microphone it becomes a pattern         is a transformation, the operand is the whole message rather than
of variations of electrical potential, and then goes through further      a letter (though the latter possibility is not excluded). The trans-
changes as it is amplified, modulated, and broadcast. Now it is a         formation is therefore essentially of the form
pattern of waves in the ether, and next a pattern in the receiving set.                               M1 M2 M3 …
Back again to the pattern of waves in the air, it then becomes a pat-                                U: ↓
                                                                                                      C1 C2 C3 …
tern of vibrations traversing the listener’s ear-drums, ossicles, coch-
lea, and then becomes a pattern of nerve-impulses moving up the           where M1, M2, . . . are the various messages and C1, C2, … are
auditory nerve. Here we can leave it, merely noticing that this very      their coded forms. A coding, then, is specified by a transforma-
                                 140                                                                           141
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                               TRANSMISSION OF VARIETY

tion.                                                                                 Ex. 10: The concentrations “high” or “low” of sex-hormone in the blood of a cer-
   Often the method uses a “key-word” or some other factor that                           tain animal determines whether it will, or will not, go through a ritual of
                                                                                          courtship. If the sex-hormone is very complicated chemically and the ritual
is capable of changing the code from one form to another. Such a                          very complicated ethnologically, and if the variable “behaviour” is regarded
factor corresponds, of course, to a parameter, giving as many par-                        as a coded form of the variable “concentration”, how much variety is there
ticular codings (or transformations) U1, U2, ... as there are values                      in the set of messages ?
to the factor.
   “Decoding” means applying such a transformation to the trans-
form Ci as will restore the original message Mi :                                     8/5. Coding by machine. Next we can consider what happens when
                              C1 C2 C3 …                                              a message becomes coded by being passed through a machine.
                             V: ↓                                                        That such questions are of importance in the study of the brain
                              M1 M2 M3 …                                              needs no elaboration. Among their other applications are those
Such a transformation V is said to be the inverse of U; it may then                   pertaining to “instrumentation”—the science of getting informa-
be written as U-1. In general, only one-one transformations have                      tion from some more or less inaccessible variable or place, such
single-valued inverses.                                                               as the interior of a furnace or of a working heart, to the observer.
  If the original message Mi is to be recoverable from the coded                      The transmission of such information almost always involves
form Ci, whatever value i may have, then both U and U-1 must be                       some intermediate stage of coding, and this must be selected suit-
one-one; for if both Mi and Mj were to be transformed to one form                     ably. Until recently, each such instrument was designed simply on
Ck, then the receiver of Ck could not tell which of the M’s had                       the principles peculiar to the particular branch of science; today,
been sent originally, and Ck cannot be decoded with certainty.                        however, it is known, after the pioneer work of Shannon and
  Next suppose that a set of messages, having variety v, is sent                      Wiener, that certain general laws hold over all such instruments.
coded by a one-one transformation U. The variety in the set of                        What they are will be described below.
coded forms will also be v. Variety is not altered after coding by                       A “machine” was defined in S.3/4 as any set of states whose
a one-one transformation.                                                             changes in time corresponded to a closed single-valued transfor-
  It follows that if messages of variety v are to pass through sev-                   mation. This definition applies to the machine that is totally iso-
eral codes in succession, and are to be uniquely restorable to their                  lated i.e. in constant conditions; it is identical with the absolute
original forms, then the process must be one that preserves the                       system defined in Design.... In S.4/ I the machine with input was
variety in the set at every stage.                                                    defined as a system that has a closed single-valued transformation
                                                                                      for each one of the possible states of a set of parameters. This is
Ex. 1: Is the transformation x' = log10 x, applied to positive numbers, a one-one     identical with the “transducer” of Shannon, which is defined as a
    coding? What is “decoding” it usually called?
                                                                                      system whose next state is determined by its present state and the
Ex. 2: Is the transformation x' = sin x, applied to the positive numbers, a one-one
    coding?                                                                           present values of its parameters. (He also assumes that it can have
Ex. 3: What transformation results from the application of, first, a one-one trans-   a finite internal memory, but we shall ignore this for the moment,
    formation and then its inverse ?                                                  returning to it in S.918.)
Ex. 4: What transformation is the inverse of n' = n + 7?                                 Assume then that we have before us a transducer M that can be
Ex. 5: What transformation is the inverse of x' = 2x + y, y' = x + y?                 in some one of the states S1, S2, . . ., Sn, which will be assumed
Ex. 6: If the coded form consists of three English letters, e.g. JNB, what is the     here to be finite in number. It has one or more parameters that can
    variety of the possible coded forms (measured logarithmically) ?                  take, at each moment, some one of a set of values P1, P2, . . ., Pk.
Ex. 7: (Continued.) How many distinct messages can be sent through such a             Each of these values will define a transformation of the S’s. We
    code, used once?                                                                  now find that such a system can accept a message, can code it, and
Ex. 8. Eight horses are running in a race, and a telegram will tell Mr. A. which      can emit the coded form. By “message” I shall mean simply some
    came first and which second. What variety is there in the set of possible mes-    succession of states that is, by the coupling between two systems,
    sages ?
Ex. 9: (Continued.) Could the set be coded into a single letter, printed either as
                                                                                      at once the output of one system and the input of the other. Often
    capital or                                                                        the state will be a vector. I shall omit consideration of any “mean-
                                       142                                                                                 143
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                     TRANSMISSION OF VARIETY

ing” to be attached to the message and shall consider simply what                        Ex. 6: Pass the message “314159 . . .” (the digits of π) through the transducer n'
will happen in these determinate systems.                                                    = n + a—5, starting the transducer at n = 10.
   For simplicity in the example, suppose that M can take any one                        Ex. 7: If a and b are parameters, so that the vector (a,b) defines a parameter state,
of four states: A, B, C, and D; that the parameters provide three                            and if the transducer has states defined by the vector (x,y) and transformation
states Q, R, and S. These suppositions can be shown in tabular                                                            
                                                                                                                          
                                                                                                                              x' = ax + by
form, which shows the essentials of the “transducer” (as in S.4/l):                                                          y' = x + (a – b)y,

                               ↓    A    B     C D                                           complete the trajectory in the table:

                              Q C C A B                                                                       a       1       –2   0     –1      2    5   –2
                                                                                                              b      –1        1   1      0      1   –2    0
                              R A C B B                                                                       x       2        1   2      ?      ?    ?    ?
                                                                                                              y       1        4 –11      ?      ?    ?    ?
                              S B D C D
                                                                                         *Ex. 8: A transducer, with parameter u, has the transformation dx/dt = – (u + 4)x;
Given its initial state and the sequence of values given to the                             it is given, from initial state x = 1, the input u = cos t; find the values of x as
parameter, its output can be found without difficulty, as in S.4/1.                         output.
Thus, suppose it starts at B and that the input is at R; it will change                  *Ex. 9: If a is input to the transducer
to C. If the input goes next to Q, it will go from C to A. The results                                               dx/dt = y
so far can be shown in tabular form:                                                                                 dy/dt = – x – 2y + a,
                                                                                            with diagram of immediate effects
                     Input-state:                R     Q
                     Transducer-state:           B     C      A                                                             a → y →    ← x,
                                                                                            what is the output from x if it is started at (0,0) with input a = sin t? (Hint:
It can now easily be verified that if the initial state is B and the                        Use the Laplace transform.)
input follows the sequence R Q R S S Q R R Q S R, the output                             *Ex. 10: If a is input and the transducer is
will follow the sequence B C A A B D B C B C C B.
   There is thus no difficulty, given the transducer, its initial state,                                                      dx/dt = k(a – x)
and the input sequence, in deducing its trajectory. Though the                               what characterises x’s behaviour as k is made positive and numerically larger
example may seem unnatural with its arbitrary jumps, it is in fact                           and larger?
quite representative, and requires only more states, and perhaps
the passage to the limit of continuity to become a completely nat-
ural representation. In the form given, however, various quantita-                                     I NVE RT I NG A CODE D ME S S AGE
tive properties are made obvious and easily calculable, where in
the continuous form the difficult technique of measure theory                            8/6. In S.8/4 it was emphasised that, for a code to be useful as a
must be used.                                                                            message-carrier, the possibility of its inversion must exist. Let us
                                                                                         attempt to apply this test to the transducer of S.8/5, regarding it as
Ex. 1: Pass the same message (R Q R S S Q R R Q S R) through the same trans-             a coder.
    ducer, this time starting at A.                                                         There are two transformations used, and they must be kept care-
Ex. 2: Pass the message “R1, R2, R3, R1, R2, R3” through the transducer of S.4/1,        fully distinct. The first is that which corresponds to U of S.8/4,
    starting it at a.
Ex. 3: (Continued.) Encode the same message through the same transducer, start-
                                                                                         and whose operands are the individual messages; the second is
    ing it at b.                                                                         that of the transducer. Suppose the transducer of S.8/5 is to be
Ex. 4: (Continued.) Does a transducer’s output depend, for given input, on its ini-      given a “message” that consists of two letters, each of which may
    tial state?                                                                          be one of Q, R, S. Nine messages are possible:
Ex. 5: If the transducer is n' = n – a, where a is a parameter, what will its trajec-                  QQ, QR, QS, RQ, RR, RS, SQ, SR, SS
    tory be if it starts at n = 10 and receives the input sequence 2, 1, –3, –1, 2, 1?

                                        144                                                                                        145
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                            TRANSMISSION OF VARIETY

and these correspond to M1, M2, . . ., M9 of U. Suppose the trans-                   8/7. Designing an inverter. The previous section showed that pro-
ducer is always started at A; it is easy to verify that the corre-                   vided the transducer did not lose distinctions in transmission from
sponding nine outputs will be (if we ignore the initial and                          input to output, the coded message given as output could always
invariable A):                                                                       be decoded. In this section we shall show that the same process
            CA, CB, CC, AC, AA, AB, BC, BC, BB.                                      can be done automatically, i.e. given a machine that does not lose
                                                                                     distinctions, it is always possible to build another machine that,
These are the C1, C2, . . ., C9 of U. Now the coding performed by                    receiving the first’s output as input, will emit the original message
the transducer is not one-one, and there has been some loss of                       as its own output.
variety, for there are now only eight distinguishable elements, BC                      We are now adopting a rather different point of view from that
being duplicated. This transducer therefore fails to provide the                     of the previous section. There we were interested in the possibility
possibility for complete and exact decoding; for if BC arrives,                      of a message being decoded and in whether the decoding could be
there is no way of telling whether the original message was SQ or                    done or not—by whom did not matter. We are now turning to the
SR.                                                                                  question of how a mechanism can be built, by us, so that the
   In this connexion it must be appreciated that an inability to                     mechanism shall do the decoding automatically. We seek, not a
decode may be due to one of two very different reasons. It may be                    restored message but a machine. How shall it be built? What we
due simply to the fact that the decoder, which exists, is not at hand.               require for its specification, of course, is the usual set of transfor-
This occurs when a military message finds a signaller without the                    mations (S.4/1).
code-book, or when a listener has a gramophone record (as a                             A possible method, the one to be used here, is simply to convert
coded form of the voice) but no gramophone to play it on. Quite                      the process we followed in the preceding section into mechanistic
different is the inability when it is due to the fact that two distinct              form, using the fact that each transition gives information about
messages may result in the same output, as when the output BC                        the parameter-value under which it occurred. We want a
comes from the transducer above. All that it indicates is that the                   machine, therefore, that will accept a transition as input and give
original message might have been SQ or SR, and the decoder that                      the original parameter value as output. Now to know which tran-
might distinguish between them does not exist.                                       sition has occurred, i.e. what are the values of i and j in “Xi -> Xj”,
   It is easy to see that if, in each column of the table, every state               is clearly equivalent to knowing what is the value of the vector
had been different then every transition would have indicated a                      (i,j); for a transition can also be thought of as a vector having two
unique value of the parameter; so we would thus have been able                       components. We can therefore feed the transitions into an inverter
to decode any sequence of states emitted by the transducer. The                      if the inverter has an input of two parameters, one to take the value
converse is also true; for if we can decode any sequence of states,                  of the earlier state and the other to take the value of the later.
each transition must determine a unique value of the parameter,                         Only one difficulty remains: the transition involves two states
and thus the states in a column must be all different. We have thus                  that do not exist at the same moment of time, so one of the
identified the characteristic in the transducer that corresponds to                  inverter’s inputs must behave now according to what the trans-
its being a perfect coder.                                                           ducer’s output was. A simple device, however, will get over this
                                                                                     difficulty. Consider the transducer
Ex. 1: In a certain transducer, which has 100 states, the parameters can take 108
    combinations of values; can its output always be decoded? (Hint: Try simple                                   ↓    q    r   s
    examples in which the number of transformations exceeds that of the states.)
Ex. 2: (To emphasise the distinction between the two transformations.) If a trans-                                Q   q q q
    ducer’s input has 5 states, its output 7, and the message consists of some
    sequence of 12, (i) how many operands has the transducer’s transformation,                                    R   r r r
    and (ii) how many has the coding transformation U?
                                                                                                                 S s s s
Ex. 3: If a machine is continuous, what does “observing a transition” correspond
    to in terms of actual instrumentation ?                                          Suppose it is started at state r and is given the input Q S S R Q S R
*Ex. 4: If the transducer has the transformation dx/dt = ax, where a is the input,   R Q; its output will be r q s s r q s r r q, i.e. after the first letter it
    can its output always be decoded ? (Hint: Solve for a.)                          just repeats the input, but one step later. Two such transducers in
                                      146                                                                               147
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                   TRANSMISSION OF VARIETY

series will repeat the message two steps later, and so on. Clearly     The inverter will now emit the same sequence as was put into
there is no difficulty in principle in getting delay.                the coder. Thus suppose Q was put in and caused the transition
  Suppose that the first transducer, the coder, is:                  A → D in the coder. This implies that the inverter will be receiv-
                                                                     ing at this step, D directly from the coder (for the coder is at D),
                          ↓   A       B   C D                        and a from the delayer (for the coder was at A the step before).
                      Q D A D B                                      With input (a, D), the inverter goes to state Q, which is the state
                      R B B B C                                      we supposed. And similarly for the other possible states put in.
                      S A C A D                                        Thus, given a transducer that does not lose distinctions, an
                                                                     automatic inverter can always be built. The importance of the
What we require is a machine that, e.g.                              demonstration is that it makes no reference to the transducer’s
                 given input A, A will emit S                        actual material—it does not matter whether it is mechanical, or
                   ,,    ,, A, B ,,     ,, R                         electronic, or neuronic, or hydraulic—the possibility of inversion
                   ,,    ,, A, D ,,     ,, Q                         exists. What is necessary is the determinateness of the coder’s
                   ,,    ,, B, A ,,     ,, Q                         actions, and its maintenance of all distinctions.
                                       etc.
                                                                     Ex. 1: Why cannot the Coder of S.8/5 be used as example?
(The input A,C will never actually come to it, for the transition
                                                                     Ex. 2: Complete the specification of the inverter just given.
cannot be emitted from the coder.)
                                                                     Ex. 3: Specify a two-step delayer in tabular form.
  The three machines are coupled thus:
                    → Coder → Delayer                                8/8. (This section may be omitted at first reading.) Now that the
                                ↓                                    construction of the inverter has been identified in the most general
                              Inverter →                             form, we can examine its construction when the transducer is less
                                                                     general and more like the machines of every-day life. The next
The delayer has the simple form:                                     step is to examine the construction of the inverter when the trans-
                          ↓   a       b   c   d                      formations, of transducer and inverter, are given, not in the
                                                                     abstract form of a table but by some mathematical function.
                        A     a       a   a   a                         As a preliminary, consider building an inverter for the trans-
                        B     b       b   b   b                      ducer with input a, variable n, and transformation n' = n + a. A
                        C     c       c   c   c                      suitable device for delay would be the transducer with parameter
                        D     d       d   d   d                      n, variable p, and transformation p' = n. It is now easily verified
and the inverter the form:                                           that, given the input a as shown, n (if started at 3) and p (if started
                                                                     at 1) will change as:
                          ↓       Q       R   S
                                                                                        a:    4 –2 –1         0     2 –1 –1          3
                       (a, A) S       S    S                                            n:    3 7 5           4     4 6 5            4
                       (a, B) R      R     R                                            p:    1 3 7           5     4 4 6            5
                       (a, C) (will not occur)
                       (a, D) Q Q Q                                  It is now obvious that if the inverter, with a variable m, is to
                       (b, A) Q Q Q                                  receive n and p as input, as vector (n,p), and give back a as output,
                       etc.    etc.                                  then M, as transformation, must include such transitions as:

                                                                                      M: ↓
to which the input is the vector                                                             (7, 3) (5, 7) (4, 5) (4, 4)        …
                (state of delayer, state of coder).                                            4      –2     –1     0           …

                                  148                                                                      149
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                      TRANSMISSION OF VARIETY

Examination of these in detail, to find how the transform follows         There results the transducer
from the operand, shows that in all cases
                                                                                            m1' = (c1 – 2d1)/d2
                           m' = n – p                                                       m2' = d2(c2 – 2d2)/(c1 – 2d1)
It is easily verified that the whole system will now emit the values      If now this transducer is joined to the original transducer by d1 =
that the original input had two steps earlier.                            x1, d2 = x2, and to the delayers by c1= p1, c2 = p2, then m1 and m2
   (The reader might be tempted to say that as n' = n + a, therefore      will give, respectively, the values that a1 and a2 had two steps ear-
a = n' – n, and the code is solved. This statement is true, but it        lier.
does not meet our purpose, which is to build a machine (see pare.
2 of S.8/7). It enables us to decode the message but it is not the        Ex. 1: Build an inverter for the transducer n' = an.
specification of a machine. The building or specification requires        Ex. 2: Similarly for n' = n – 2a + 4.
the complications of the previous paragraph, which finishes with          Ex. 3: Similarly for x' = ax – by, y' = ax + by.
m' = n – p, a specification for a machine with input.)                    Ex. 4: Try to build an inverter for the transducer n' = n + a + b, why can it not
                                                                              be done ?
   The general rule is now clear. We start with the transducer’s          *Ex. 5: Build an inverter for the transducer
equation, n' = n + a, and solve it for the parameter: a = n' – n. The
                                                                                                   dx1/dt = a1x1x2 + a2
delaying device has the transformation p' = n. The transformation                                  dx2/dt = (a1—1)x1 + a2x2.
for the inverter is formed by the rules, applied to the equation          Ex. 6: Why, in the section, does M have to transform (7,3) to 4, and not to —2,
a = n' – n:                                                                   as the table a few lines higher might suggest ?
                   1: replace a by the new transducer’s symbol m';
                   2: replace n' by a parameter c;                        8/9. Size of the inverter. With the facts of the previous section, it
                   3: replace n by a parameter d.                         is now possible to make some estimate of how much mechanism
                                                                          is necessary to invert the output of some given transducer. S.8/7
Then, if this inverter is joined to the original transducer by putting    makes clear that if the original transducer is not to lose distinc-
d = n, and to the delayer by c = p, it will have the required prop-       tions it must have at least as many output values as the input has
erties.                                                                   distinct values. Similarly the inverter must have at least as many,
   If the original transducer has more than one variable, the proc-       but need not necessarily have more. The delayers will require lit-
ess needs only suitable expansion. An example, without explana-           tle, for they are simple. It seems, therefore, that if the inverter is
tion, will be sufficient. Suppose the original transducer has             made of similar components to the original transducer then, what-
parameters a1 and a2, variables x1 and x2, and transformation             ever the complexity or size of the original transducer, the inverter
                                                                          will have a complexity and size of the same order.
                       x1' = 2x1 + a1x2                                      The importance of this observation is that one sometimes feels,
                       x2' = 2x2 + a1a2                                   when thinking of the complexities in the cerebral cortex or in an
Solving for the parameters gives                                          ecological system, that any effect transmitted through the system
                                                                          must almost at once become so tangled as to be beyond all possi-
                  a1 = (x1' – 2x1)/x2                                     ble unravelling. Evidently this is not so; the complications of cod-
                  a2 = x2(x2' – 2x2)/(x1' – 2x1)                          ing added by one transducer are often or usually within the
                                                                          decoding powers of another transducer of similar size.
A delayer for x1 is p1' = x1, and one for x2 is p2' = x2. The equations
of the inverter are formed from those for a1 and a2 by applying the
rules:                                                                       T R A NS MI S S I ON F ROM S YS T E M T O S YS T E M
         1: replace each ai by a new symbol a1= m1', a2 = m2';            8/10. “Transmitting” variety. It may be as well at this point to
         2: replace each xi 'by a parameter ci : x1' = c1, x2' = c2;      clarify a matter on which there has been some confusion. Though
         3: replace each xi by a parameter di: x1 = d1, x2 = d2;          it is tempting to think of variety (or information) as passing
                                 150                                                                            151
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                       TRANSMISSION OF VARIETY

through a transducer, or variety passing from one transducer to          set of U’s that has all its representative points at the same state can
another, yet the phrase is dangerously misleading. Though an             thus, under the effect of T’s variety, change to a set with its points
envelope can contain a message, the single message, being                scattered over not more than nT states. There are nu such sets of
unique, cannot show variety; so an envelope, though it can con-          U’s, each capable of being scattered over not more than nT states,
tain a message, cannot contain variety: only a set of envelopes can      so the total scattering cannot, after one step, be greater than over
do that. Similarly, variety cannot exist in a transducer (at any         nTnU states. If variety is measured logarithmically, then the vari-
given moment), for a particular transducer at a particular moment        ety in U after one step cannot exceed the sum of those initially in
is in one, and only one, state. A transducer therefore cannot “con-      U and T. In other words, the U’s cannot gain in variety at one step
tain” variety. What can happen is that a number of transducers           by more than the variety present in the T’s.
(possibly of identical construction), at some given moment, can            This is the fundamental law of the transmission of variety from
show variety in the states occupied; and similarly one transducer,       system to system. It will be used frequently in the rest of the book.
on a number of occasions, can show variety in the states it occu-
pied on the various occasions.
   (What is said here repeats something of what was said in S.7/5,       Ex. 1: A system has states (t,u) and transformation t' = 2', u' = u + t, so t dominates
                                                                             u. Eight such systems are started at the states (O,9), (2,5), (0,5), (1,9), (1,5),
but the matter can hardly be over-emphasised.)                               (2,5), (0,9), (1,9) respectively. How much variety is in the t’s ? How much
   It must be remembered always that the concepts of “variety”, as           in the u’s ?
used in this book, and that of “information”, as used in communi-        Ex. 2: (Continued.) Find the states at the next step. How much variety has t now?
cation theory, imply reference to some set, not to an individual.            Predict an upper limit to u’s variety. How much has u now?
Any attempt to treat variety or information as a thing that can exist    Ex. 3: In another system, T has two variables, t1 and t2, and U has two, u1 and
in another thing is likely to lead to difficult “problems” that              u2. The whole has states ( t1, t2, u1, u2), and transformation t1' = t1t2, t2' = t1,
should never have arisen.                                                    u1' = u1 + t2u2, u2' = t1u2, so that T dominates U. Three replicas are started
                                                                             from the initial states (0,0,0,1), (0,0,1,1) and (1,0,0,1). What is T’s variety ?
                                                                             What is U’s ?
8/11. Transmission at. one step. Having considered how variety           Ex. 4: (Continued.) Find the three states one step later. What is U’s variety now ?
changes in a single transducer, we can now consider how it passes
from one system to another, from T to U say, where T is an abso-
lute system and U is a transducer.                                       8/12. Transmission at second step. We have just seen that, at the
                                                                         first step, U may gain in variety by an amount up to that in T; what
                               T→ U                                      will happen at the second step? T may still have some variety: will
As has just been said, we assume that many replicates exist, iden-       this too pass to U, increasing its variety still further ?
tical in construction (i.e. in transformation) but able to be in vari-      Take a simple example. Suppose that every member of the
ous states independently of each other. If, at a given moment, the       whole set of replicates was at one of the six states (Ti,Uk), (Ti, Ul),
T’s have a certain variety, we want to find how soon that variety        (Ti, Um), (Tj,Uk), (Tj,Ul), (Tj,Um), so that the T’s were all at either
spreads to the U’s. Suppose that, at the given moment, the T’s are       T' or T and the U’s were all at Ul, Ul or Um. Now the system as a
occupying nT distinct states and the U’s are occupying nut (The          whole is absolute; so all those at, say (Ti, Uk), while they may
following argument will be followed more easily if the reader will       change from state to state, will all change similarly, visiting the
compose a simple and manageable example for T and U on which             various states together. The same argument holds for those at each
the argument can be traced.)                                             of the other five states. It follows that the set’s variety in state can-
   T is acting as parameter to U, and to each state of Twill corre-      not exceed six, however many replicates there may be in the set,
spond a graph of U. The set of U’s will therefore have as many           or however many states there may be in T and U, or for however
graphs as the T’s have values, i.e. nT graphs. This means that from      long the changes may continue. From this it follows that the U’s
each U-state there may occur up to nT different transitions (pro-        can never show more variety than six U-states. Thus, once U has
vided by the nT different graphs), i.e. from the U-state a represent-    increased in variety by the amount in T, all further increase must
ative point may pass to any one of not more than nT U-states. A          cease. If U receives the whole amount in one step (as above) then

                                 152                                                                              153
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                        TRANSMISSION OF VARIETY

U receives no further increase at the second step, even though T           which will be used repeatedly later: given long enough, any trans-
still has some variety.                                                    ducer can transmit any amount of variety.
   It will be noticed how important in the argument are the pair-             An important aspect of this theorem is its extreme generality.
ings between the states of T and the states of U, i.e. which value         What sort of a machine it is that is acting as intermediate trans-
of T and which of U occur in the same machine. Evidently merely            ducer, as channel, is quite irrelevant: it may be a tapping-key that
knowing the quantities of variety in T and in U (over the set of           has only the two states “open” and “closed”, or an electric poten-
replicates) is not sufficient for the prediction of how they will          tial that can take many values, or a whole neural ganglion, or a
change.                                                                    newspaper—all are ruled by the theorem. With its aid, quantita-
                                                                           tive accuracy can be given to the intuitive feeling that some
8/13. Transmission through a charmer. We can now consider how              restriction in the rate of communication is implied if the commu-
variety, or information, is transmitted through a small intermedi-         nication has to take place through a small intermediate transducer,
ate transducer—a “channel”—where “small” refers to its number              such as when the information from retina to visual cortex has to
of possible states. Suppose that two large transducers Q and S are         pass through the lateral geniculate body, or when information
connected by a small transducer R, so that Q dominates R, and R            about the movements of a predator have to be passed to the herd
dominates S.                                                               through a solitary scout.
                           Q → R → S
                                                                           Ex. 1: An absolute system, of three parts, Q, R and S, has states (q,r,s) and trans-
As usual, let there be a great number of replicates of the whole tri-          formation
ple system. Let R’s number of possible states be r. Put log2r equal                           q:      1 2 3 4 5 6 7 8 9
to ρ. Assume that, at the initial state, the Q’s have a variety much                          q': ↓ 4 6 6 5 6 5 8 8 8
larger than r states, and that the R’s and S’s, for simplicity,have                                       0,
                                                                                                   r' =  1, if
                                                                                                                 q + r is even,
none. (Had they some variety, S.8/11 shows that the new variety,                                              ,, ,, ,, odd.
                                                                                                   s' = 2s – r.
gained from Q, would merely add, logarithmically, to what they
possess already.)                                                              Q thus dominates R, and R dominates S. What is R’s capacity as a channel ?
    Application of S. 8/11 to R and S shows that, at the first step,       Ex. 2: (Continued.) Nine replicates were started at the initial states (1,0,0),
S’s variety will not increase at all. So if the three initial varieties,       (2,0,0), . . ., (9,0,0), so that only Q had any initial variety. (i) How did the
                                                                               variety of the Q’s change over the first five steps? (ii) How did that of the
measured logarithmically, were respectively N, O and 0, then                   R’s ? (iii) That of the S’s ?
after the first step they may be as large as N, ρ, and 0, but cannot       Ex. 3: (Continued.) Had the answer to Ex. 2(iii) been given as “S:1,1,4,5,5”, why
be larger.                                                                     would it have been obviously wrong, without calculation of the actual trajec-
    At the next step, R cannot gain further in variety (by S.8/12), but        tories ?
S can gain in variety from R (as is easily verified by considering
an actual example such as Ex. 2). So after the second step the vari-       8/14. The exercise just given will have shown that when Q, R and
eties may be as large as N, ρ and ρ. Similarly, after the third step       S form a chain, S can gain in variety step by step from R even
they may be as large as N, ρ and 2ρ; and so on. S’s variety can thus       though R can gain no more variety after the first step (S.8/12). The
increase with time as fast as the terms of the series, O, ρ, 2ρ, 3ρ,       reason is that the output of R, taken step by step as a sequence,
. . ., but not faster. The rule is now obvious: a transducer that can-     forms a vector (S.9/9), and the variety in a vector can exceed that
not take more than r states cannot transmit Variety at more than           in a component. And if the number of components in a vector can
log2r bits per step. This is what is meant, essentially, by different      be increased without limit then the variety in the vector can also
transducers having different “capacities” for transmission.                be increased without limit, even though that in each component
    Conversely, as S’s variety mounts step by step we can see that         remains bounded. Thus a sequence of ten coin-spins can have
the amount of variety that a transducer (such as R) can transmit           variety up to 1024 values, though each component is restricted to
is proportional to the product of its capacity, in bits, and the           two. Similarly R’s values, though restricted in the exercises to
number of steps taken. From this comes the important corollary,            two, can provide a sequence that has variety of more than two. As
                                 154                                                                              155
                  A N IN T R O D U C T IO N T O C Y BERNETI CS                                                    TRANSMISSION OF VARIETY

the process of transmission goes on, S is affected (and its variety                        has no immediate effect on the cortex) the action has to take place
increased) by the whole sequence, by the whole vector, and thus a                          through a chain of systems: the sense organs, the sensory nerves,
variety of much more than two can pass through R. A shrinkage                              the sensory nuclei, and so on; and some delay is thereby imposed.
in the capacity of a channel can thus be compensated for (to keep                          Even within one such part some transfer has to take place from
the total variety transmitted constant) by an increase in the length                       point to point thereby delaying its transfer to the next part.
of the sequence— a fact already noticed in the previous section,                              Conversely, if a system such as T is found on testing to transmit
and one that will be used frequently later.                                                its variety to another system only over a number of steps, then it
                                                                                           may be predicted that T, if examined in detail, will be found to
Ex. 1: An absolute system T dominates a chain of transducers A1, A2, A3, A4,…:             consist of sub- systems coupled so that not all of T’s variables
                         T → A 1 → A2 → A3 → A4 → …                                        have an immediate effect on S.
    A set of replicates commences with variety in T but with none in A1, nor in            Ex. 1: If T consists of the sub-systems A, . . ., F joined to each other and to S as
    A2, etc. Show that after k steps the varieties in A1, A2, . . ., Ak may be                 shown in the diagram of immediate effects:
    non-zero but that those in Ak+1, Ak+2, . . . must still be zero (i.e. that T’s vari-
    ety “cannot have spread farther than Ak”.).                                                                           A ← B →
                                                                                                                                ← C
Ex. 2: Of 27 coins, identical in appearance, one is known to be counterfeit and to                                        ↓   ↑               S
    be light in weight. A balance is available and the counterfeit coin is to be                                          D → E → F
    identified by a series of balancings, as few as possible. Without finding the
    method—by regarding the balance as a transducer carrying information from
    the coins to the observer—give a number below which the number of bal-                     how many steps are necessary for all the variety in T to be transferred to S?
    ancings cannot fall. (Hint: What is the variety at a single balancing if the           Ex. 2: (Continued.) How long does it take to get a “message”, telling of T’s state,
    results can be only: equality, left pan heavier, right pan heavier?)                       uniquely from T to S?
                                                                                           Ex. 3: If J, with the variables w, x, y, z, dominates K, with the variable k, by the
8/15. Delay. The arrangement of the system of S.8/13:                                          transformation w' = w—y, x' = w + xz, y' = 2wy—z, z, = yz2, k'= x—3k, how
                                                                                               many steps are necessary for all the variety in J to be transferred to K?
                                  Q→ R→ S                                                  Ex. 4: (Continued.) In the same system, how long would it take to get a message
                                                                                               from w to z?
can also be viewed as
                                                                                           8/16. To improve our grasp of these matters, let us next consider
                                       T→ S                                                the case of two systems joined so that there is feedback:
in which Q and R have been regarded as forming a single system                                                                  T←
                                                                                                                                 → U
T which is, of course, absolute. If now an observer studies the
transfer of variety from T to S, with exactly the same events as                           S.8/11 showed that T will pass variety to U; will U, now having
those of S.8/13 actually occurring, he will find that the variety is                       this variety, pass it back to T and thereby increase T’s variety still
moving across in small quantities, step by step, unlike the transfer                       further ?
of S.8/11, which was complete in one step.                                                    Again the answer is given straightforwardly when we consider
   The reason for the distinction is simply that in S.8/11 the whole                       a set of replicates. Suppose that initially the variety existed only
of the dominating system (T) had an immediate effect on the dom-                           between the T’s, the U’s being all at the same state. Divide the
inated (U), while in S.8/13 T contained a part Q which had no                              whole set into sub- sets, each sub-set consisting of those with T at
immediate effect on the receiver S. Q’s effect had to be exerted                           a particular state, so that set i, say, consists of the systems with T
through R, and was thereby delayed.                                                        at state Ti. Within such a subset there is now no variety in state,
   This more time-consuming transfer is common in real systems                             and no variety can develop, for the whole (T,U)-system is abso-
simply because many of them are built of parts not all of which                            lute. The initial variety of the T’s, therefore, will not increase,
have an immediate effect on the receiving system. Thus if the cer-                         either at the first step or subsequently. In a determinate system,
ebral cortex, as receiver, is affected by the environment (which                           feedback does not lead to a regenerative increase in variety.
                                         156                                                                                      157
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                 TRANSMISSION OF VARIETY

   What was important in the argument about U’s feedback to T is        interact. Nevertheless the interaction is not destructive to the
that what U feeds back to T is highly correlated with what is in T,     information about where the treasure and the weapons are, for
for each U feeds back into the particular T that acted on it a step     given the positions of A"' and B"', those of A and B can always be
earlier, and no other. The argument thus demands an accurate            reconstructed, i.e. the messages are still capable of being exactly
treatment of the correspondences between the various T’s and U’s.       decoded.
   The arguments of the previous few sections have shown that              The conditions necessary that two messages should not inter-
though the matter can be treated in words in the simple cases           fere destructively can be found by considering the basic fact of
(those just considered), the attempt to handle complex cases in the     coding—that a set of messages are converted to a set of trans-
verbal form is likely to lead to intolerable complexities. What is      forms (S.8/4)—and by using the fact that any two messages of dif-
wanted is a symbolic machinery, an algebra, which will enable the       ferent type can be laid side by side and considered as components
relations to be handled more or less mechanically, with the rules       of one “vector” message, just as any two variables can always be
of the symbolic manipulation looking after the complexities. It         regarded as components of one vector. Thus if, in the example of
seems likely that the theory of sets, especially as developed by        the printed letter, x represents the variable “which message of the
Bourbaki and Riguet, will provide the technique. But further            26” and y represents the variable “which of the two”, then the
research is needed into these questions.                                printed symbol is a coding of the single message (x,y).
                                                                           Suppose it is given that the two messages x and y do not interfere
                                                                        destructively. This implies that both x’s and y’s values are recon-
8/17. Interference. If acid and alkali are passed along the same        structible from the received form. It follows that if two primary
pipe they destroy each other; what will happen if two messages          messages are distinct, then their coded forms must be distinct (for
are passed along the same channel?—will they interfere with, and        otherwise unique decoding would not be possible). From this it fol-
destroy, each other?                                                    lows that, if the interaction is to be non-destructive, the variety in
   Simple examples are quite sufficient to establish that the same      the received forms must be not less than that in the original. This
physical channel may well carry more than one message without           condition holds in the example of the printed letter, for both the
interference, each message travelling as if the others did not exist.   original messages and the printed form have variety of 26 × 2.
Suppose, for instance, that a sender wanted to let a recipient know        The fact that chaos does not necessarily occur when two mes-
daily, by an advertisement in the personal column of a newspaper,       sages meet in the same channel is of great importance in
which of 26 different events was being referred to, and suppose he      neuro-physiology, especially in that of the cerebral cortex. Here
arranged to print a single letter as the coded form. The same chan-     the richness of connexion is so great that much mixing of mes-
nel of “one printed letter” could simultaneously be used to carry       sages must inevitably occur, if only from the lack of any method
other messages, of variety two, by letting the letter be printed as     for keeping them apart. Thus a stream of impulses coming from
lower case or capital. The two messages would then be transmit-         the auditory cortex and carrying information relevant to one reac-
ted with as little interference as if they were on separate pages.      tion may meet a stream of impulses coming from the visual cortex
Thus, if ten successive messages were sent, N K e S z t y Z w m         carrying information relevant to some other reaction. It has been
would transmit both n k e s z t y z w m and 1 1 0 1 0 0 0 1 0 0         an outstanding problem in neurophysiology to know how destruc-
completely. It is thus possible for two messages to pass through        tive interaction and chaos is avoided.
the same physical thing without mutual destruction.                        The discussion of this section has shown, however, that the
   As an example of rather different type, consider the transforma-     problem is badly stated. Chaos does not necessarily occur when
tion of Ex. 2/14/11, and regard the position of, say, A''' as a coded   two messages meet, even though each affects the same physical
form of that of A (with B''' similarly as the coded form of B). Thus    set of variables. Through all the changes, provided that no variety
treasure might be buried at A and weapons at B, with recording          is lost and that the mechanism is determinate in its details, the two
marks left at A''' and B'''. Now a change in the position of B leads    messages can continue to exist, passing merely from one coding
to a change of A''', so B’s value plays an essential part in the cod-   to another. All that is necessary for their recovery is a suitable
ing of A to A''' (and conversely of A on B'''); so the two messages     inverter; and, as S.8/7 showed, its construction is always possible.

                                 158                                                                    159
                 A N IN T R O D U C T IO N T O C Y BERNETI CS

Ex. 1: (See Ex. 2/14/11.) If A"' is at the point (0,0) and B"' at (0,1), reconstruct
    the position of A.
Ex. 2: A transducer has two parameters: α (which can take the values a or A) and
    β (which can take the values b or B). Its states—W, X, Y, Z—are trans-
    formed according to:
                             ↓     W X         Y     Z
                           (a,b) W        Y    Y     Y
                           (a,B) X        X W W
                           (A,b) Z       W X         X
                           (A,B) Y        Z    Z     Z
    Two messages, one a series of α−values and the other a series of β− values,
    are transmitted simultaneously, commencing together. If the recipient is
    interested only in the α−message, can he always re-construct it, regardless
    of what is sent by β? (Hint: S.8/6.)
Ex. 3: Join rods by hinge-pins, as shown in Fig. 8/17/1:




                                    Fig 8/17/1


    (The pinned and hinged joints have been separated to show the construc-
    tion.) P is a pivot, fixed to a base, on which the rod R can rotate; similarly
    for Q and S. The rod M passes over P without connexion; similarly for N and
    Q. A tubular constraint C ensures that all movements, for small arcs, shall be
    to right or left (as represented in the Figure) only.
         Movements at A and B will cause movements at L and N and so to Y and
    Z and the whole can be regarded as a device for sending the messages “posi-
    tion of A” and “position of B”, via L and N, to the outputs Y and Z. It will
    be found that, with B held fixed, movements at A cause movements of both
    L and N; similarly, with A held fixed, movements at B also affect both L and
    N. Simultaneous messages from A and B thus pass through both L and N
    simultaneously, and evidently meet there. Do the messages interact destruc-
    tively? (Hint: How does Y move if A alone moves?)
Ex. 4: (Continued.) Find the algebraic relation between the positions at A, B, Y
    and Z. What does “decoding” mean in this algebraic form?

                                       160
Chapter                                                            9

    I NC E SSANT T R ANSM ISSION
9/1. The present chapter will continue the theme of the previous,
and will study variety and its transmission, but will be concerned
rather with the special case of the transmission that is sustained
for an indefinitely long time. This is the case of the sciatic nerve,
or the telephone cable, that goes on incessantly carrying mes-
sages, unlike the transmissions of the previous chapter, which
were studied for only a few steps in time.
  Incessant transmission has been specially studied by Shannon,
and this chapter will, in fact, be devoted chiefly to introducing his
Mathematical Theory of Communication, with special emphasis
on how it is related to the other topics in this Introduction.
  What is given in this chapter is, however, a series of notes,
intended to supplement Shannon’s masterly work, rather than a
description that is complete in itself. Shannon’s book must be
regarded as the primary source, and should be consulted first. I
assume that the reader has it available.

9/2. The non-determinate transformation. If the transmission is to
go on for an indefinitely long time, the variety must be sustained,
and therefore not like the case studied in S.8/11, in which T’s
transmission of variety stopped after the first step. Now any deter-
minate system of finite size cannot have a trajectory that is infi-
nitely long (S.4/5). We must therefore now consider a more
comprehensive form of machine and transformation—the non-
determinate.
   So far all our transformations have been single-valued, and
have thus represented the machine that is determinate. An exten-
sion was hinted at in S.2/10, and we can now explore the possibil-
ity of an operand having more than one transform. Some
supplementary restriction, however, is required, so as to keep the
possibilities within bounds and subject to some law. It must not
become completely chaotic. A case that has been found to have
many applications is that in which each operand state, instead of
                                161
                  A N IN T R O D U C T IO N T O C Y BERNETI CS                                INCESSANT TRANSMISSION

being transformed to a particular new state, may go to some one            ing Head, then the probability of its going to state 5 is 1/2 and so
of the possible states, the selection of the particular state being        would be its probability of staying at 4.
made by some method or process that gives each state a constant
probability of being the transform. It is the unchangingness of the                            ↓ … 3        4    5   6 …
probability that provides the law or orderliness on which definite
statements can be based.                                                                       … … … … … … …
   Such a transformation would be the following: x' = x + a, where                             3 … 1/2 0 0 0 …
the value of a is found by spinning a coin and using the rule Head:                            4 … 1/2 1/2 0 0 …
a = 1; Tail: a = 0. Thus, if the initial value of x is 4, and the coin                         5 … 0 1/2 1/2 0 …
gives the sequence T T H H H T H T T H, the trajectory will be 4,                              6 … 0 0 1/2 1/2 …
4, 4, 5, 6,7, 7, 8, 8, 8,9. If the coin gives H T H H T T T H T T, the                         … … … … … … …
trajectory will be 4, 5, 5, 6, 7, 7, 7, 7, 8, 8, 8. Thus the transforma-
tion and the initial state are not sufficient to define a unique tra-      All other transitions have zero probability. So the matrix can be
jectory, as was the case in S.2/17; they define only a set of              constructed, cell by cell.
trajectories. The definition given here is supplemented by instruc-           This is the matrix of transition probabilities. (The reader
tions from the coin (compare S.4/19), so that a single trajectory is       should be warned that the transposed form, with rows and col-
arrived at.                                                                umns interchanged, is more common in the literature; but the form
   The transformation could be represented (uniformly with the             given has substantial advantages, e.g. Ex. 12/8/4, besides being
previously used representations) as:                                       uniform with the notations used throughout this book.)
                                                                              We should, at this point, be perfectly clear as to what we mean
                                                                           by “probability”. (See also S.7/4.) Not only must we be clear
              3                      4                5                    about the meaning, but the meaning must itself be stated in the
        1/2         1/2        1/2       1/2    1/2       1/2    etc.      form of a practical, operational test. (Subjective feelings of
        3            4         4          5      5         6               “degree of confidence” are here unusable.) Thus if two observers
                                                                           differ about whether something has a “constant probability”, by
                                                                           what test can they resolve this difference ?
where the 1/2 means that from state 3 the system will change                  Probabilities are frequencies. “A ‘probable’ event is a frequent
                                                                           event.” (Fisher.) Rain is “probable” at Manchester because it is
                          with probability 1/2 to state 3,                 frequent at Manchester, and ten Reds in succession at a roulette
                  and      ,,      ,,       ,, ,, ,, 4.                    wheel is “improbable” because it is infrequent. (The wise reader
                                                                           will hold tight to this definition, refusing to be drawn into such
Such a transformation, and especially the set of trajectories that it      merely speculative questions as to what numerical value shall be
may produce, is called “stochastic”, to distinguish it from the sin-       given to the “probability” of life on Mars, for which there can be
gle-valued and determinate.                                                no frequency.) What was said in S.7/4 is relevant here, for the
   Such a representation soon becomes unmanageable if many                 concept of probability is, in its practical aspects, meaningful only
transitions are possible from each state. A more convenient, and           over some set in which the various events or possibilities occur
fundamentally suitable, method is that by matrix, similar to that          with their characteristic frequencies.
of S.2/10. A matrix is constructed by writing the possible oper-              The test for a constant probability thus becomes a test for a con-
ands in a row across the top, and the possible transforms in a col-        stant frequency. The tester allows the process to continue for a
umn down the left side; then, at the intersection of column i with         time until some frequency for the event has declared itself. Thus,
row j, is put the probability that the system, if at state i, will go to   if he wished to see whether Manchester had a constant, i.e.
state j.                                                                   unvarying, probability of rain (in suitably defined conditions), he
   As example, consider the transformation just described. If the          would record the rains until he had formed a first estimate of the
system was at state 4, and if the coin has a probability 1/2 of giv-       frequency. He would then start again, collect new records, and
                                         162                                                               163
                   A N IN T R O D U C T IO N T O C Y BERNETI CS                                          INCESSANT TRANSMISSION

form a second estimate. He might go on to collect third and fourth                    of the type we have considered throughout the book till now. The
estimates. If these several estimates proved seriously discrepant                     single-valued, determinate, transformation is thus simply a spe-
he would say that rain at Manchester had no constant probability.                     cial, extreme, case of the stochastic. It is the stochastic in which
If however they agreed, he could, if he pleased, say that the frac-                   all the probabilities have become 0 or 1. This essential unity
tion at which they agreed was the constant probability. Thus an                       should not be obscured by the fact that it is convenient to talk
event, in a very long sequence, has a “constant” probability of                       sometimes of the determinate type and sometimes of the types in
occurring at each step if every long portion of the sequence shows                    which the important aspect is the fractionality of the probabilities.
it occurring with about the same relative frequency.                                  Throughout Part III the essential unity of the two types will play
   These words can be stated more accurately in mathematical                          an important part in giving unity to the various types of regulation.
terms. What is important here is that throughout this book any                           The word “stochastic” can be used in two senses. It can be used
phrases about “probability” have objective meanings whose                             to mean “all types (with constant matrix of transition probabili-
validity can be checked by experiment. They do not depend on                          ties), the determinate included as a special case”, or it can mean
any subjective estimate.                                                              “all types other than the determinate”. Both meanings can be
                                                                                      used; but as they are incompatible, care must be taken that the
Ex. 1: Take the five playing cards Ace, 2, 3, 4, 5. Shuffle them, and lay them in     context shows which is implied.
    a row to replace the asterisks in the transformation T:
                                Ace 2        3    4   5
                         T: ↓ *        *     *    *   *                                                  T HE MARKOV CHAI N
    Is the particular transformation so obtained determinate or not? (Hint: Is it     9/4. After eight chapters, we now know something about how a sys-
    single-valued or not?)                                                            tem changes if its transitions correspond to those of a singlevalued
Ex. 2: What rule must hold over the numbers that appear in each column of a           transformation. What about the behaviour of a system whose tran-
    matrix of transition probabilities?                                               sitions correspond to those of a stochastic transformation? What
Ex. 3: Does any rule like that of Ex. 2 hold over the numbers in each row?            would such a system look like if we met one actually working?
Ex. 4: If the transformation defined in this section starts at 4 and goes on for 10      Suppose an insect lives in and about a shallow pool—some-
    steps, how many trajectories occur in the set so defined?
Ex. 5: How does the kinematic graph of the stochastic transformation differ from
                                                                                      times in the water (W), sometimes under pebbles (P), and some-
    that of the determinate ?                                                         times on the bank (B). Suppose that, over each unit interval of
                                                                                      time, there is a constant probability that, being under a pebble, it
   9/3. The stochastic transformation is simply an extension of the                   will go up on the bank; and similarly for the other possible transi-
determinate (or single valued). Thus, suppose the matrix of tran-                     tions. (We can assume, if we please, that its actual behaviour at
sition probabilities of a three-state system were:                                    any instant is determined by minor details and events in its envi-
                                                                                      ronment.) Thus a protocol of its positions might read:
               ↓      A     B    C                   ↓    A      B     C
                                                                                              WBWBWPWBWBWBWPWBBWBWPWBWPW
      first A 0 0.9 0.1 and then A 0                 1    0                                     BWBWBBWBWBWBWPPWPWBWBBBW
            B 0.9 0        0               B 1       0    0                              Suppose, for definiteness, that the transition probabilities are
            C 0.1 0.1 0.9                  C 0       0    1                                                     ↓   B     W    P
The change, from the first matrix to the second, though small (and                                            B 1/4 3/4 1/8
could be made as small as we please) has taken the system from                                                W 3/4 0 3/4
the obviously stochastic type to that with the single-valued trans-                                           P 0 1/4 1/8
formation:
                                                                                        These probabilities would be found (S.9/2) by observing its
                                ↓ B
                                     A    B    C                                      behaviour over long stretches of time, by finding the frequency of,
                                          A    C                                      say, B → W, and then finding the relative frequencies, which are
                                         164                                                                            165
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                 INCESSANT TRANSMISSION

the probabilities. Such a table would be, in essence, a summary of                     He can deduce that if it is in water it will not stay there, for W → W
actual past behaviour, extracted from the protocol.                                    has probability zero, but will go usually to the bank, for W → B
   Such a sequence of states, in which, over various long stretches,                   has the highest probability in the column. From the bank it will
the probability of each transition is the same, is known as a                          probably go to the water, and then back to the bank. If under a
Markov chain, from the name of the mathematician who first                             pebble it also tends to go to the water. So clearly it spends much
made an extensive study of their properties. (Only during the last                     of its time oscillating between bank and water. Time spent under
decade or so has their great importance been recognised. The                           the pebbles will be small. The protocol given, which was con-
mathematical books give various types of Markov chain and add                          structed with a table of random numbers, shows these properties.
various qualifications. The type defined above will give us all we                        Thus the matrix contains information about any particular sys-
want and will not clash with the other definitions, but an impor-                      tem’s probable behaviour.
tant qualification is mentioned in S.9/7.)
   The term “Markov chain” is sometimes applied to a particular                        Ex. 1 Had the P-column of the matrix a 1 in the lowest cell and zero elsewhere,
                                                                                           what could be deduced about the insect’s mode of life ?
trajectory produced by a system (e.g. the trajectory given in Ex. 1)                   Ex. 2: A fly wanders round a room between positions A, B, C, and D, with tran-
and sometimes to the system (defined by its matrix) which is                               sition probabilities:
capable of producing many trajectories. Reference to the context                                                   ↓ A         B     C      D
must show which is implied.                                                                                        A 1/2       0     0     1/3
                                                                                                                   B 1/4       1     0     1/3
                                                                                                                   C 1/4       0    1/2 1/3
Ex. 1: A system of two states gave the protocol (of 50 transitions):                                               D     0     0    1/2     0
    ABABBBABAABABABABBBBABAABABBAAB
    A B B A B A A A B A B B A A B B A B B A.                                               One of the positions is an unpleasantly hot stove and another is a fly-paper.
    Draw up an estimate of its matrix of transition probabilities.                         Which are they ?
Ex. 2: Use the method of S.9/2 (with the coin) to construct several trajectories,      Ex. 3: If the protocol and matrix of Ex. 9/4/1 are regarded as codings of each
    so as to establish that one matrix can give rise to many different trajectories.       other, which is the direction of coding that loses information?
Ex. 3: Use a table of random numbers to generate a Markov chain on two states
    A and B by the rule:                                                               9/6. Equilibrium in a Markov chain. Suppose now that large num-
                                   If                                                  bers of such insects live in the same pond, and that each behaves
                                                          Then                         independently of the others. As we draw back from the pond the
                   Present state Random number next state                              individual insects will gradually disappear from view, and all we
                         A                0 or 1            A                          will see are three grey clouds, three populations, one on the bank,
                         ,,             2, 3 … 9            B
                         B             0, 1, 2, 3, 4        A                          one in the water, and one under the pebbles. These three popula-
                         ,,            5, 6, 7, 8, 9        B                          tions now become three quantities that can change with time. If
Ex. 4: (Continued.) What is its matrix of transition probabilities?                    they are dB, dW, and dP respectively at some moment, then their
                                                                                       values at one interval later, dB' etc., can be found by considering
9/5. Ex. 9/4/1 shows how the behaviour of a system specifies its                       what their constituent individuals will do. Thus, of the insects in
matrix. Conversely, the matrix will yield information about the                        the water, three-quarters will change over to B, and will add their
tendencies of the system, though not the particular details. Thus                      number on to dB, while a quarter will add their number to dP.
suppose a scientist, not the original observer, saw the insect’s                       Thus, after the change the new population on the bank, dB', will be
matrix of transition probabilities:                                                    1/4 dB + 3/4 dW + 1/8 dP . In general therefore the three populations
                                                                                       will change in accordance with the transformation (on the vector
                               ↓     B     W      P                                    with three components)
                              B 1/4 3/4 1/8                                                             dB' = 1/4 dB + 3/4 dW + 1/8 dP
                              W 3/4 0 3/4                                                               dw' = 3/4 dB              + 3/4dP
                              P 0 1/4 1/8                                                               dP' =             1/4 dW + 1/8dP
                                                                                       It must be noticed, as fundamentally important, that the system
                                         166                                                                                 167
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                       INCESSANT TRANSMISSION

composed of three populations (if large enough to be free from               The equilibrial values of a Markov chain are readily computed.
sampling irregularities) is determinate, although the individual          At equilibrium the values are unchanging, so dB', say, is equal to
insects behave only with certain probabilities.                           dB. So the first line of the equation becomes
   To follow the process in detail let us suppose that we start an                                 dB = 1/4 dB + 3/4 dW + 1/8 dP
experiment by forcing 100 of them under the pebbles and then              i.e.                     0 = – 3/4 dB + 3/4 dW + 1/8 dP
watching what happens. The initial vector of the three populations
(dB , dW, dP) will thus be (0, 0, 100). What the numbers will be at       The other lines are treated similarly. The lines are not all inde-
the next step will be subject to the vagaries of random sampling;         pendent, however, for the three populations must, in this example,
for it is not impossible that each of the hundred might stay under        sum to 100; one line (any one) is therefore struck out and replaced
the pebbles. On the average, however (i.e. the average if the whole       by
100 were tested over and over again) only about 12.5 would                                         dB + dW + dP = 100
remain there, the remainder going to the bank (12.5 also) and to          The equations then become, e.g.,
the water (75). Thus, after the first step the population will have
shown the change (0, 0, 100) → (12.5, 75, 12.5).                                           – 3/4 dB + 3/4 dW + 1/8 dP = 0
   In this way the average numbers in the three populations may                                  dB +       dW +     dP = 100
be found, step by step, using the process of S.3/6. The next state                                      1/4 dW – 7/8 dP = 0
is thus found to be (60.9, 18.8, 20.3), and the trajectory of this sys-   which can be solved in the usual way. In this example the equi-
tem (of three degrees of freedom—not a hundred ) is shown in              librial values are (44 9, 42 9, 12 2); as S.9/S predicted, any indi-
Fig. 9/6/1.                                                               vidual insect does not spend much time under the pebbles.
                                                                          Ex. 1: Find the populations that would follow the initial state of putting all the
                                                                              insects on the bank.
                                                                          Ex. 2: Verify the equilibrial values.
                                                                          Ex. 3: A six-sided die was heavily biased by a weight hidden in face x. When
                                                                              placed in a box with face f upwards and given a thorough shaking, the prob-
                                                                              ability that it would change to face g was found, over prolonged testing, to
                                                                              be:
                                                                                                                          f
                                                                                                  ↓    1      2      3         4     5     6
                                                                                                 1    0.1    0.1    0.1       0.1   0.1   0.1
                                                                                                 2    0.1    0.1    0.1       0.1   0.1   0.1
                                                                                                 3    0.5    0.5    0.5       0.5   0.5   0.5
                                                                                            g    4    0.1    0.1    0.1       0.1   0.1   0.1
                               Fig. 9/6/1
                                                                                                 5    0.1    0.1    0.1       0.1   0.1   0.1
                                                                                                 6    0.1    0.1    0.1       0.1   0.1   0.1
   It will be seen that the populations tend, through dying oscilla-
tions, to a state of equilibrium, at (44.9, 42.9, 12.2), at which the         Which is x? (Hint: Beware!)
system will remain indefinitely. Here “the system” means, of              Ex. 4: A compound AB is dissolved in water. In each small interval of time each
course, these three variables.                                                molecule has a 1% chance of dissociating, and each dissociated A has an
   It is worth noticing that when the system has settled down, and            0.1% chance of becoming combined again. What is the matrix of transition
                                                                              probabilities of a molecule, the two states being “dissociated” and “not dis-
is practically at its terminal populations, there will be a sharp con-        sociated”? (Hint: Can the number of B’s dissociated be ignored ?)
trast between the populations, which are unchanging, and the              Ex. 5: (Continued.) What is the equilibrial value of the percentage dissociated?
insects, which are moving incessantly. The same pond can thus             Ex. 6: Write out the transformations of (i) the individual insect’s transitions and
provide two very different meanings to the one word “system”.                 (ii) the population’s transitions. How are they related ?
(“Equilibrium” here corresponds to what the physicist calls a             Ex. 7: How many states appear in the insect’s transitions? How many in the sys-
“steady state”.)                                                              tem of populations ?

                                 168                                                                               169
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                               INCESSANT TRANSMISSION

*Ex. 8: If D is the column vector of the populations in the various states, D' the       These dependencies are characteristic in language, which con-
   vector one step later, and M the matrix of transition probabilities, show that,    tains many of them. They range from the simple linkages of the
   in ordinary matrix algebra,
                                                                                      type just mentioned to the long range linkages that make the end-
                       D'=MD, D"=M2D, and D(n) = MnD.
                                                                                      ing “… of Kantian transcendentalism” more probable in a book
   (This simple and natural relation is lost if the matrix is written in transposed
   form. Compare Ex. 2/16/3 and 12/8/4.)                                              that starts “The university of the eighteenth century…” than in
                                                                                      one that starts “The modern racehorse …”.
9/7. Dependence on earlier values. The definition of a Markov                         Ex.: How are the four transitions C → C, C → D, D → C, and D → D affected
chain, given in S.9/4, omitted an important qualification: the                            in frequency of occurrence by the state that immediately preceded each oper-
probabilities of transition must not depend on states earlier than                        and, in the protocol:
the operand. Thus if the insect behaves as a Markov chain it will                     DDCCDCCDDCCDCCDDCCDCCDDCCDDDDDDDDC
be found that when on the bank it will go to the water in 75% of                      C D D D C C D C C D C?
the cases, whether before being on the bank it was at bank, water,                        (Hint: Classify the observed transitions.)
or pebbles. One would test the fact experimentally by collecting
the three corresponding percentages and then seeing if they were                      9/8. Re-coding to Markov form. When a system is found to pro-
all equal at 75%.                                                                     duce trajectories in which the transition probabilities depend in a
   Here is a protocol in which the independence does not hold:                        constant way on what states preceded each operand, the system,
AABBABBAABBABBABBABBAABBABBABABA
                                                                                      though not Markovian, can be made so by a method that is more
                                                                                      important than may at first seem—one re-defines the system.
The transitions, on a direct count, are                                                 Thus suppose that the system is like that of Ex. 9/7/1 (the pre-
                                  ↓    A      B                                       ceding), and suppose that the transitions are such that after the
                                                                                      two-state sequence … CC it always goes to D, regardless of what
                            A 3 10                                                    occurred earlier, that after … DC it always goes to C, that after
                                                                                      … CD it goes equally frequently in the long run to C and D, and
                            B 10 8                                                    similarly after … DD. We now simply define new states that are
In particular we notice that B is followed by A and B about                           vectors, having two components—the earlier state as first compo-
equally. If we now re-classify these 18 transitions from B accord-                    nent and the later one as second. Thus if the original system has
ing to what letter preceded the B we get:                                             just produced a trajectory ending … DC, we say that the new sys-
                                                                                     tem is at the state (D, C). If the original then moves on to state C,
              … AB was followed by  A: 2 times                                       so that its trajectory is now … DCC, we say that the new system
                                          B: 8 ,,
                                                                                     has gone on to the state (C, C). So the new system has undergone
              … BB ,,         ,,    ,,  A: 8 ,,                                      the transition (D, C) → (C, C). These new states do form a
                                          B: 0 ,,
                                                                                      Markov chain, for their probabilities (as assumed here) do not
So what state follows B depends markedly on what state came                           depend on earlier state in fact the matrix is
before the B. Thus this sequence is not a Markov chain. Some-
times the fact can be described in metaphor by saying that the sys-                                          ↓    (C,C) (C,D) (D,C) (D,D)
tem’s “memory” extends back for more than one state (compare
S.6/21).                                                                                                  (C,C)      0       0       1       0
   This dependence of the probability on what came earlier is a                                           (C,D)      1       0       0       0
marked characteristic of the sequences of letters given by a lan-                                         (D,C)      0      1/2      0      1/2
guage such as English. Thus: what is the probability that an s will                                       (D,D)      0      1/2      0      1/2
be followed by a t? It depends much on what preceded the s; thus
es followed by t is common, but ds followed by t is rare. Were the                    (Notice that the transition (C,D) → (C,D) is impossible; for any
letters a Markov chain, then s would be followed by t with the                        state that ends (–,D) can only go to one that starts (D,–). Some
same frequency in the two cases.                                                      other transitions are similarly impossible in the new system.)
                                       170                                                                                 171
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                         INCESSANT TRANSMISSION

   If, in another system, the transition probabilities depend on val-      ent, would make possible. If the sequence is of finite length, e.g.
ues occurring n steps back, then the new states must be defined as         five spins of a coin, as in the previous paragraph, the constraint
vectors over n consecutive states.                                         can be identified and treated exactly as in S.7/11. When, however,
   The method of re-defining may seem artificial and pointless.            it is indefinitely long, as is often the case with sequences (whose
Actually it is of fundamental importance, for it moves our attention       termination is often arbitrary and irrelevant) we must use some
from a system that is not state-determined to one that is. The new         other method, without, however, changing what is essential.
system is better predictable, for its “state” takes account of the orig-      What the method is can be found by considering how an infi-
inal system’s past history. Thus, with the original form, to know          nitely long vector can be specified. Clearly such a vector cannot
that the system was at state C did not allow one to say more than          be wholly arbitrary, in components and values, as was the vector
that it might go to either C or D. With the second form, to know that      in S.3/5, for an infinity of time and paper would be necessary for
it was at the state (D,C) enabled one to predict its behaviour with        its writing down. Usually such indefinitely long vectors are spec-
certainty, just as with the original form one could predict with cer-      ified by some process. First the value of the initial component is
tainty when one knew what had happened earlier. What is impor-             given and then a specified process (a transformation) is applied to
tant is that the method shows that the two methods of “knowing” a          generate the further components in succession (like the “integra-
system—by its present state or by its past history— have an exact          tion” of S.3/9).
relation. The theory of the system that is not completely observable          We can now deduce what is necessary if a set of such vectors is
(S.6/21) made use of this fact in essentially the same way. We are         to show no constraint. Suppose we build up the set of “no con-
thus led again to the conclusion that the existence of “memory” in         straint”, and proceed component by component. By S.7/12, the first
a real system is not an intrinsic property of the system—we hypoth-        component must take its full range of values; then each of these val-
esise its existence when our powers of observation are limited.            ues must be combined with each of the second component’s possi-
Thus, to say “that system seems to me to have memory” is equiva-           ble values; and each of these pairs must be combined with each of
lent to saying “my powers of observation do not permit me to make          the third component’s possible values; and so on. The rule is that as
a valid prediction on the basis of one observation, but I can make a       each new component is added, all its possible values must occur.
valid prediction after a sequence of observations”.                           It will now be seen that the set of vectors with no constraint cor-
                                                                           responds to the Markov chain that, at each transition, has all the
9/9. Sequence as vector. In the earlier chapters we have often used        transitions equally probable. (When the probability becomes an
vectors, and so far they have always had a finite and definite             actual frequency, lots of chains will occur, thus providing the set
number of components. It is possible, however, for a vector to             of sequences.) Thus, if there are three states possible to each com-
have an infinite, or indefinitely large number of components. Pro-         ponent, the sequences of no constraint will be the set generated by
vided one is cautious, the complication need cause little danger.          the matrix
  Thus a sequence can be regarded as a vector whose first com-                                        ↓ A B C
ponent is the first value in the sequence, and so on to the n-th com-
ponent, which is the n-th value. Thus if I spin a coin five times,                                        A 1/3 1/3 1/3
the result, taken as a whole, might be the vector with five compo-                                        B 1/3 1/3 1/3
nents (H, T, T, H, T). Such vectors are common in the theory of                                           C 1/3 1/3 1/3
probability, where they may be generated by repeated sampling.
  If such a vector is formed by sampling with replacement, it has          Ex. 1: The exponential series defines an infinitely long vector with components:
                                                                                                              2    3       4
only the slight peculiarity that each value comes from the same                                        1, x, ----
                                                                                                              x x
                                                                                                                   , --------- , ----------------- , … 
                                                                                                                                       x
component set, whereas a more general type, that of S.3/5 for                                                 2 2⋅3 2⋅3⋅4                             
instance, can have a different set for each component.                         What transformation generates the series by obtaining each component from
                                                                               that on its left? (Hint: Call the components t1, t2, ..., etc.; ti' is the same as
9/10. Constraint in a set of sequences. A set of such sequences can            t1+1.)
show constraint, just as a set of vectors can (S.7/11), by not having      Ex. 2: Does the series produced by a true die show constraint ?
the full range that the range of components, if they were independ-        Ex. 3: (Continued.) Does the series of Ex. 9/4/3 ?

                                 172                                                                               173
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                       INCESSANT TRANSMISSION

                            EN TRO P Y                                   0.6232 = – 0.3768; so the first term is ( – 0.42)( – 0.3768), which
9/11. We have seen throughout S.7/5 and Chapter 8 how informa-           is + 0.158; and similarly for the other terms.) Had the logs been
tion cannot be transmitted in larger quantity than the quantity of       taken to the base 2 (S.7/7) the result would have been 1.63 bits.
variety allows. We have seen how constraint can lessen some                 The word “entropy” will be used in this book solely as it is used
potential quantity of variety. And we have just seen, in the previ-      by Shannon, any broader concept being referred to as “variety” or
ous section, how a source of variety such as a Markov chain has          in some other way.
zero constraint when all its transitions are equally probable. It fol-   Ex. 1: On 80 occasions when I arrived at a certain level-crossing it was closed on
lows that this condition (of zero constraint) is the one that enables        14. What is the entropy of the set of probabilities?
the information source, if it behaves as a Markov chain, to trans-       Ex. 2: From a shuffled pack of cards one is drawn. Three events are distin-
mit the maximal quantity of information (in given time).                     guished:
   Shannon has devised a measure for the quantity of variety shown                                E1 the drawing of the King of Clubs,
by a Markov chain at each step—the entropy—that has proved of                                     E2: the drawing of any Spade
fundamental importance in many questions relating to incessant                                    E3: the drawing of any other card.
transmission. This measure is developed in the following way.                What is the entropy of the variety of the distinguishable events ?
   If a set has variety, and we take a sample of one item from the       Ex. 3: What is the entropy of the variety in one throw of an unbiased die ?
set, by some defined sampling process, then the various possible         Ex. 4: What is the entropy in the variety of the set of possibilities of the outcomes
                                                                             (with their order preserved) of two successive throws of an unbiased die ?
results of the drawing will be associated with various, correspond-      Ex. 5: (Continued.) What is the entropy of n successive throws ?
ing probabilities. Thus if the traffic lights have variety four, show-   *Ex. 6: What is the limit of –p log p as p tends to zero ?
ing the combinations
                              1 Red                                      9/12. The entropy so calculated has several important properties.
                              2 Red and Yellow                           First, it is maximal, for a given number (n) of probabilities, when
                              3 Green                                    the probabilities are all equal. H is then equal to log n, precisely
                              4 Yellow,                                  the measure of variety defined in S.7/7. (Equality of the probabil-
                                                                         ities, in each column, was noticed in S.9/10 to be necessary for the
and if they are on for durations of 25, 5, 25 and 5 seconds respec-      constraint to be minimal, i.e. for the variety to be maximal.) Sec-
tively, then if a motorist turns up suddenly at irregular times he       ondly, different H’s derived from different sets can, with suitable
would find the lights in the various states with frequencies of          qualifications, be combined to yield an average entropy.
about 42, 8, 42 and 8% respectively. As probabilities these                 Such a combination is used to find the entropy appropriate to a
become 0.42, 0.08, 0.42 and 0.08. Thus the state “Green” has (if         Markov chain. Each column (or row if written in the transposed
this particular method of sampling be used) a probability of 0 42;       form) has a set of probabilities that sum to 1. Each can therefore
and similarly for the others.                                            provide an entropy. Shannon defines the entropy (of one step of
   Conversely, any set of probabilities—any set of positive frac-        the chain) as the average of these entropies, each being weighted
tions that adds up to 1—can be regarded as corresponding to some         by the proportion in which that state, corresponding to the col-
set whose members show variety. Shannon’s calculation proceeds           umn, occurs when the sequence has settled to its equilibrium (S.9/
from the probabilities by the calculation, if the probabilities are      6). Thus the transition probabilities of that section, with corre-
p1, p2, …, pn, of                                                        sponding entropies and equilibrial proportions shown below, are
               – p1 log p1 – p2 log p2 – … pn log pn ,
                                                                                                            ↓    B     W     P
a quantity which he calls the entropy of the set of probabilities
and which he denotes by H. Thus if we take logs to the base 10,                                             B 1/4 3/4 1/8
the entropy of the set associated with the traffic lights is                                               W 3/4       0    3/4
                                                                                                            P    0    1/4 1/8
– 0.42 log100.42 – 0.08 log100.08 – 0.42 log100.42 – 0.08 log100.08                                  Entropy: 0.811 0.811 1.061
which equals 0.492. (Notice that log10 0.42 = 1.6232 = –1.0000 +                       Equilibrial proportion: 0.449 0.429 0.122
                                 174                                                                             175
                       A N IN T R O D U C T IO N T O C Y BERNETI CS                                                                        INCESSANT TRANSMISSION

   Then the average entropy (per step in the sequence) is                                                              (2) If applied to an information source, with several sets of prob-
   0.449 × 0.811 + 0.429 × 0.811 + 0.122 × 1.061 = 0.842 bits.                                                      abilities, the matrix of transition probabilities must be Markovian;
                                                                                                                    that is to say, the probability of each transition must depend only
A coin spun repeatedly produces a series with entropy, at each                                                      on the state the system is at (the operand) and not on the states it
spin, of 1 bit. So the series of locations taken by one of the insects                                              was at earlier (S.9/7). If necessary, the states of the source should
as time goes on is not quite so variable as the series produced by                                                  first be re-defined, as in S.9/8, so that it becomes Markovian.
a spun coin, for 0.842 is less than 1.00. In this way Shannon’s                                                        (3) The several entropies of the several columns are averaged
measure enables different degrees of variety to be compared.                                                        (S.9/12) using the proportions of the terminal equilibrium (S.9/6).
   The reason for taking a weighted average is that we start by                                                     It follows that the theorems assume that the system, however it
finding three entropies: 0.811, 0.811, and 1.061; and from them                                                     was started, has been allowed to go on for a long time so that the
we want one. Were they all the same we would obviously just use                                                     states have reached their equilibrial densities.
that value, but they are not. We can, however, argue thus: When                                                        Shannon’s results must therefore be applied to biological mate-
the system has reached equilibrium, 45°/O of the insects will be at                                                 rial only after a detailed check on their applicability has been made.
state B, 43% at W, and 12% at P. This is equivalent, as the insects                                                    A similar warning may be given before any attempt is made to
circulate between all the states, to saying that each insect spends                                                 play loosely, and on a merely verbal level, with the two entropies
45% of its time at B, 43% at W, and 12% at P. In other words, 45%                                                   of Shannon and of statistical mechanics. Arguments in these sub-
of its transitions will be from B, 43% from W, and 12% from P.                                                      jects need great care, for a very slight change in the conditions or
Thus 45% of its transitions will be with entropy, or variety, of                                                    assumptions may make a statement change from rigorously true
0.811, 43% also with 0.811, and 12% with 1.061. Thus, transi-                                                       to ridiculously false. Moving in these regions is like moving in a
tions with an entropy of 0.811 will be frequent (and the value                                                      jungle full of pitfalls. Those who know most about the subject are
“0.811” should count heavily) and those with an entropy of 1.061                                                    usually the most cautious in speaking about it.
will be rather rare (and the value “1.061” should count little). So
the average is weighted: 88% in favour of 0.811 and 12% in                                                          Ex. 1: Work out mentally the entropy of the matrix with transition probabilities
favour of 1.061, i.e.                                                                                                                             ↓     A     B      C
                             45 × 0.811 + 43 × 0.811 + 12 × 1.061                                                                                 A    0.2     0    0.3
     weighted average = -----------------------------------------------------------------------------------------                                 B    0.7    1.0   0.3
                                                      45 + 43 + 12
which is, effectively, what was used above.                                                                                                       C    0.1     0    0.4

Ex. 1: Show that the series of H’s and T’s produced by a spun coin has an average                                       (Hint: This is not a feat of calculation but of finding a peculiar simplicity.
    entropy of 1 bit per spin. (Hint: Construct the matrix of transition probabili-                                     What does that 1 in the main diagonal mean (Ex. 9/5/1)? So what is the final
    ties.)                                                                                                              equilibrium of the system? Do the entropies of columns A and C matter? And
Ex. 2: (Continued.) What happens to the entropy if the coin is biased ? (Hint: Try                                      what is the entropy of B’s column (Ex. 9/11/6)?)
    the effect of changing the probabilities.)                                                                      Ex. 2: (Continued.) Explain the paradox: “When the system is at A there is vari-
                                                                                                                        ety or uncertainty in the next state, so the entropy cannot be zero.”
9/13. Before developing the subject further, it is as well to notice
that Shannon’s measure, and the various important theorems that                                                     9/14. A little confusion has sometimes arisen because Shannon’s
use it, make certain assumptions. These are commonly fulfilled in                                                   measure of “entropy”, given over a set of probabilities P1, P2, ….
telephone engineering but are by no means so commonly fulfilled                                                     is the sum of Pi log Pi, multiplied by –1 whereas the definition
in biological work, and in the topics discussed in this book. His                                                   given by Wiener in his Cybernetics for “amount of information”
measure and theorems must therefore be applied cautiously. His                                                      is the same sum of Pi log Pi unchanged (i.e. multiplied by +1).
main assumptions are as follows.                                                                                    (The reader should notice that p log p is necessarily negative, so
   (1) If applied to a set of probabilities, the various fractions must                                             the multiplier “–1” makes it a positive number.)
add up to 1; the entropy cannot be calculated over an incomplete                                                       There need however be no confusion, for the basic ideas are
set of possibilities.                                                                                               identical. Both regard information as “that which removes uncer-
                                                     176                                                                                                    177
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                 INCESSANT TRANSMISSION

tainty”, and both measure it by the amount of uncertainty it              Thus the two measures are no more discrepant than are the two
removes. Both further are concerned basically with the gain or          ways of measuring “how far is point Q to the right of point P”
increase in information that occurs when a message arrives—the          shown in Fig. 9/14/2.
absolute quantities present before or after being of minor interest.
   Now it is clear that when the probabilities are well spread, as in
A of Fig. 9/14/1, the uncertainty is greater than when they are
compact, as in B.



                                                                                                      Fig. 9/14/2

                                                                        Here P and Q can be thought of as corresponding to two degrees
                                                                        of uncertainty, with more certainty to the right, and with a mes-
                                                                        sage shifting the recipient from P to Q.
                               Fig. 9/14/1                                The distance from P to Q can be measured in two ways, which
So the receipt of a message that makes the recipient revise his esti-   are clearly equivalent. Wiener’s way is to lay the rule against P
mate, of what will happen, from distribution A to distribution B,       and Q (as W in the Fig.); then the distance that Q lies to the right
contains a positive amount of information. Now Σp log p (where          of P is given by
Σ means “the sum of”), if applied to A, will give a more negative                       (Q’s reading) minus (P’s reading).
number than if applied to B; both will be negative but A’s will be
the larger in absolute value. Thus A might give–20 for the sum          Shannon’s way (S in the Fig.) is to lay the zero opposite Q, and
and B might give –3. If we use Σp log p multiplied by plus 1 as         then the distance that Q is to the right of P is given by
amount of information to be associated with each distribution, i.e.                            minus (P’s reading).
with each set of probabilities, then as, in general,
                                                                        There is obviously no real discrepancy between the two methods.
  Gain (of anything) = Final quantity minus initial quantity
so the gain of information will be                                      9/15. Channel capacity. It is necessary to distinguish two ways of
                           ( – 3) – (– 20)                              reckoning “entropy” in relation to a Markov chain, even after the
                                                                        unit (logarithmic base) has been decided. The figure calculated in
which is + 17, a positive quantity, which is what we want. Thus,        S.9/12, from the transition probabilities, gives the entropy, or
looked at from this point of view, which is Wiener’s, Σp log p          variety to be expected, at the next, single, step of the chain. Thus
should be multiplied by plus 1, i.e. left unchanged; then we calcu-     if an unbiased coin has already given T T H H T H H H H, the
late the gain.                                                          uncertainty of what will come next amounts to I bit. The symbol
   Shannon, however, is concerned throughout his book with the          that next follows has also an uncertainty of 1 bit; and so on. So the
special case in which the received message is known with cer-           chain as a whole has an uncertainty, or entropy, of 1 bit per step.
tainty. So the probabilities are all zero except for a single I. Over      Two steps should then have an uncertainty, or variety, of 2 bits,
such a set Σp log p is just zero; so the final quantity is zero, and    and this is so; for the next two steps can be any one of HH, HT,
the gain of information is                                              TH or TT, with probabilities 1/4, 1/4, 1/4 and 14, which gives H
                       0 – (initial quantity).                          = 2 bits. Briefly it can be said that the entropy of a length of
In other words, the information in the message, which equals the        Markov chain is proportional to its length (provided always that
gain in information, is Σp log p calculated over the initial distri-    it has settled down to equilibrium).
bution, multiplied by minus 1, which gives Shannon’s measure.              Quite another way of making the measurement on the chain is
                                 178                                                                    179
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                  INCESSANT TRANSMISSION

introduced when one considers how fast in time the chain is being       the paper, then the marks will affect his retina and so on to his brain
produced by some real physical process. So far this aspect has          where an interaction will occur with the trace (whatever that may
been ignored, the sole graduation being in terms of the chain’s         be) of “118213”; he will then give a final answer. What we must
own steps. The new scale requires only a simple rule of proportion      notice here is that this process, from brain, through motor cortex,
for its introduction. Thus if (as in S.9/12) the insects’ “unit time”   arm, pencil, marks, light rays, retina, and visual cortex back to
for one step is twenty seconds, then as each 20 seconds produces        brain, is, to the communication engineer, a typical “channel”, link-
0 84 bits, 60 seconds will produce (60/20)0 84 bits; so each insect     ing “transmitter” to “receiver”. To the cyberneticist, therefore, the
is producing variety of location at the rate of 2 53 bits per minute.   white matter, and similar fibres, are not the only channels of com-
   Such a rate is the most natural way of measuring the capacity of     munication available to the brain: some of the communication
a channel, which is simply anything that can be driven by its input     between part and part may take place through the environment.
to take, at each moment, one of a variety of states, and which can
transmit that state to some receiver. The rate at which it can trans-   9/16. Redundancy. In S.7/14 it was stated that when a constraint
mit depends both on how fast the steps can succeed one another          exists, advantage can usually be taken of it. An illustration of this
and on the variety available at each step.                              thesis occurs when the transmission is incessant.
   It should be noticed that a “channel” is defined in cybernetics        For simplicity, reconsider the traffic lights —Red, Yellow, and
purely in terms of certain behavioural relations between two            Green—that show only the combinations
points; if two points are so related then a “channel” exists between                              (1) Red
them, quite independently of whether any material connexion can                                   (2) Red and Yellow
be seen between them. (Consider, for instance, Exs. 4/15/2, 6/7/                                  (3) Green
1.) Because of this fact the channels that the cyberneticist sees                                 (4) Yellow.
may be very different from those seen by one trained in another
science. In elementary cases this is obvious enough. No one             Each component (each lamp or colour) can be either lit or unlit, so
denies the reality of some functional connexion from magnet to          the total variety possible, if the components were independent
magnet, though no experiment has yet demonstrated any interme-          would be 8 states. In fact, only 4 combinations are used, so the set
diate structure.                                                        shows constraint.
   Sometimes the channel may follow an unusual path. Thus the             Now reconsider these facts after recognising that a variety of
brain requires information about what happens after it has emitted      four signals is necessary:
“commands” to an organ, and usually there is a sensory nerve
from organ to brain that carries the “monitoring” information.                                    (i) Stop
Monitoring the vocal cords, therefore, may be done by a sensory                                  (ii) Prepare to go
nerve from cords to brain. An effective monitoring, however, can                                (iii) Go
also be achieved without any nerve in the neck by use of the sound                              (iv) Prepare to stop.
waves, which travel through the air, linking vocal cords and brain,     If we have components that can each take two values, + or –, we can
via the ear. To the anatomist this is not a channel, to the commu-      ask how many components will be necessary to give this variety.
nication engineer it is. Here we need simply appreciate that each       The answer is obviously two; and by a suitable re-coding, such as
is right within his own branch of science.
   More complex applications of this principle exist. Suppose we                                 + + = Stop
ask someone whether 287 times 419 is 118213; he is likely to reply                               + – = Prepare to go
“I can’t do it in my head—give me pencil and paper”. Holding the                                 – – = Go
numbers 287 and 419, together with the operation “multiply”, as                                  – + = Prepare to stop
parameters he will then generate a process (a transient in the termi-   the same variety can be achieved with a vector of only two com-
nology of S.4/5) which will set up a series of impulses passing         ponents. The fact that the number of components can be reduced
down the nerves of his arm, generating a series of pencil marks on      (from three to two) without loss of variety can be expressed by
                                 180                                                                     181
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                       INCESSANT TRANSMISSION

saying that the first set of vectors shows redundancy, here of one        some arbitrariness. (Compare S.6114.) There is therefore every
lamp.                                                                     temptation to let one’s grasp of the set under discussion be intui-
   The constraint could clearly be taken advantage of. Thus, if           tive and vague rather than explicit and exact. The reader may
electric lights were very expensive, the cost of the signals, when        often find that some intractable contradiction between two argu-
re-coded to the new form, would be reduced to two-thirds.                 ments will be resolved if a more accurate definition of the set
   Exactly the same lights may also show quite a different redun-         under discussion is achieved; for often the contradiction is due to
dancy if regarded as the generators of a different set of vectors.        the fact that the two arguments are really referring to two distinct
Suppose that the lights are clock-operated, rather than traf-             sets, both closely associated with the same object or organism.
fic-operated, so that they go through the regular cycle of states (as
numbered above)                                                           Ex. 1: In a Table for the identification of bacteria by their power to ferment sug-
                                                                              ars, 62 species are noted as producing “acid”, “acid and gas”, or “nothing”
                      ...3, 4, 1, 2, 3, 4, 1, 2, 3, ...                       from each of 14 sugars. Each species thus corresponds to a vector of 14 com-
                                                                              ponents, each of which can take one of three values. Is the set redundant ?
  The sequence that it will produce (regarded as a vector, S.9/9)             To how many components might the vector be reduced ?
can only be one of the four vectors:                                      Ex. 2: If a Markov chain has no redundancy, how may its matrix be recognised
                       (i) (1, 2, 3, 4, 1, 2, …)                              at a glance?
                      (ii) (2, 3, 4, 1, 2, 3, …)
                    (iii) (3, 4, 1, 2, 3, 4, …)                           9/17. It is now possible to state what is perhaps the most funda-
                     (iv) (4, 1, 2, 3, 4, 1, …)                           mental of the theorems introduced by Shannon. Let us suppose
Were there independence at each step, as one might get from a             that we want to transmit a message with H bits per step, as we
four-sided die, and n components, the variety would be 4n; in fact        might want to report on the movements of a single insect in the
it is only 4. To make the matter quite clear, notice that the same        pool. H is here 0 84 bits per step (S.9/12), or, as the telegraphist
variety could be obtained by vectors with only one component:             would say, per symbol, thinking of such a series as … P W B W
                                                                          B B B W P P P W B W P W …. Suppose, for definiteness, that 20
                               (i) (1)                                    seconds elapse between step and step. Since the time-rate of these
                              (ii) (2)                                    events is now given, H can also be stated as 2.53 bits per minute.
                             (iii) (3)                                    Shannon’s theorem then says that any channel with this capacity
                             (iv) (4)                                     can carry the report, and that it cannot be carried by any channel
all the components after the first being omitted; so all the later        with less than this capacity. It also says that a coding always exists
components are redundant.                                                 by which the channel can be so used.
   Thus a sequence can show redundancy if at each step the next              It was, perhaps, obvious enough that high-speed channels could
value has not complete independence of the earlier steps. (Com-           report more than slow; what is important about this theorem is,
pare S.9/10.) If the sequence is a Markov chain, redundancy will          first, its great generality (for it makes no reference to any specific
be shown by its entropy having a value less than the maximum.             machinery, and therefore applies to telegraphs, nerve-fibres, con-
   The fact that the one set of traffic lights provides two grossly       versation, equally) and secondly its quantitative rigour. Thus, if
different sets of vectors illustrates yet again that great care is nec-   the pond were far in the hills, the question might occur whether
essary when applying these concepts to some object, for the object        smoke signals could carry the report. Suppose a distinct puff
often provides a great richness of sets for discussion. Thus the          could be either sent or not sent in each quarter-minute, but not
question “Do traffic lights show redundancy?” is not admissible;          faster. The entropy per symbol is here I bit, and the channel’s
for it fails to indicate which of the sets of vectors is being consid-    capacity is therefore 4 bits per minute. Since 4 is greater than 2 53,
ered; and the answer may vary grossly from set to set.                    the channel can do the reporting, and a code can be found, turning
   This injunction is particularly necessary in a book addressed to       positions to puffs, that will carry the information.
workers in biological subjects, for here the sets of vectors are             Shannon has himself constructed an example which shows
often definable only with some difficulty, helped out perhaps with        exquisitely the exactness of this quantitative law. Suppose a
                                 182                                                                             183
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                 INCESSANT TRANSMISSION

source is producing letters A, B, C, D with frequencies in the ratio                   Ex. 2: Printed English has an entropy of about 10 bits per word. We can read
of 4, 2, 1, 1 respectively, the successive symbols being independ-                         about 200 words per minute. Give a lower bound to the channel capacity of
                                                                                           the optic nerve.
ent. A typical portion of the sequence would be … B A A B D A
                                                                                       Ex. 3: If a pianist can put each of ten fingers on any one of three notes, and can
A A A B C A B A A D A .... At equilibrium the relative frequen-                            do this 300 times a minute, find a lower bound to the channel capacity of the
cies of A, B, C, D would be 1/2, 1/4, 1/8, 1/8 respectively, and the                       nerves to the upper limbs.
entropy is 14 bits per step (i.e. per letter).                                         Ex. 4: A bank’s records, consisting of an endless sequence of apparently random
   Now a channel that could produce, at each step, any one of four                         digits, O to 9, are to be encoded into Braille for storage. If 10,000 digits are
states without constraint would have a capacity of 2 bits per step.                        to be stored per hour, how fast must the Braille be printed if optimal coding
Shannon’s theorem says that there must exist a coding that will                            is used? (Hint: There are 64 symbols in the Braille “alphabet”.)
enable the latter channel (of capacity 2 bits per step) to transmit
such a sequence (with entropy 1 3/4 bits per step) so that any long                    9/18. One more example will be given, to show the astonishing
message requires fewer steps in the ratio of 2 to 1 3/4, i.e. of 8 to                  power that Shannon’s method has of grasping the essentials in
7. The coding, devised by Shannon, that achieves this is as fol-                       communication. Consider the system, of states a, b, c, d, with tran-
lows. First code the message by                                                        sition probabilities

                                A     B C D                                                                   ↓        a           b           c         d
                            ↓   0     10 110 111                                                              a         0           0          0.3       0.3
                                                                                                              b        0.6         0.6          0         0
e.g. the message above,                                                                                       c        0.4         0.4          0         0
    B . AAB . D . . AAAAB . C . . AB . AAD . . A                                                              d         0           0          0.7       0.7
  ↓100010111000010110010001110                                                         A typical sequence would be
Now divide the lower line into pairs and re-code into a new set of                        …b b b c a b c a b b c d d a c d a b c a c d d d d d d a b b…
letters by                                                                             The equilibrial probabilities are 6/35, 9/35, 6/35, 14/35 respec-
                          00 01 10 11                                                  tively. The entropy is soon found to be 0.92 bits per letter. Now
                        ↓ E F G H                                                      suppose that the distinction between a and d is lost, i.e. code by
                                                                                                                       b   a c     d
These codes convert any message in “A to D” into the letters “E                                                    ↓ X b     c     X
to H”, and conversely, without ambiguity. What is remarkable is
that if we take a typical set of eight of the original letters (each                     Surely some information must be lost? Let us see. There are
represented with its typical frequency) we find that they can be                       now only three states X, b, c, where X means “either a or d”. Thus
transmitted as seven of the new:                                                       the previous message would now start … b b b c X b c X b b c X
                                                                                       X X c .... The transition probabilities are found to be
             A A A A B . B . C . . D . .
            ↓0 0 0 0 1 0 1 0 1 1 0 1 1 1                                                                           ↓           X         b           c
             . E . E . G . G . H . F . H                                                                          X 0.70                  0          1
thus demonstrating the possibility of the compression, a compres-                                                 b 0.18                 0.6         0
sion that was predicted quantitatively by the entropy of the origi-                                               c 0.12                 0.4         0
nal message!                                                                           (Thus c → X must be 1 because c always went to either a or d; the
Ex. 1: Show that the coding gives a one-one correspondence between message             transitions from a and from d need weighting by the (equilibrial)
    sent and message received (except for a possible ambiguity in the first letter).   probabilities of being at a or d.) The new states have equilibrial
                                       184                                                                                          185
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                  INCESSANT TRANSMISSION

probabilities of X, 20/35; b, 9/35; c, 6/35 and entropies of Hx,        in other sciences need not follow suit. In biology especially
1.173; Hb, 0.971; Hc, 0. So the entropy of the new series is 0.92       “noise” will seldom refer to this particular source; more com-
bits per letter—exactly the same as before!                             monly, the “noise” in one system will be due to some other mac-
  This fact says uncompromisingly that no information was lost          roscopic system from which the system under study cannot be
when the d’s and a’s were merged to X’s. It says, therefore, that       completely isolated.
there must be some way of restoring the original four-letter mes-          Should the two (or more) messages be completely and simultane-
sage from the three, of telling which of the X’s were a’s and which     ously recoverable, by de-coding of the output, the concept of noise
were d’s. Closer examination shows that this can be done, strik-        is of little use. Chiefly it is wanted when the two messages (one
ingly verifying the rather surprising prediction.                       wanted, one unwanted) interact with some mutual destruction,
                                                                        making the coding not fully reversible. To see this occur let us go
Ex.: How is                                                             back to the fundamental processes. The irreversibility must mean
           bbbcXbcXbbcXXXcXXbcXcXXXXXXXbb                               that the variety is not sustained (S.8/6), and that distinct elements at
    to be de-coded to its original form?                                the inputs are represented at the output by one element. Consider
                                                                        the case in which the input is a vector with two components,
                               NOISE                                           the first having possible values of A, B or C
                                                                                ,, second      ,,       ,,      ,,    ,, E, F or G.
9/19. It may happen that the whole input to a transducer can be
divided into two or more components, and we wish to consider the        Suppose the output is a variable that can take values 1, 2, …, 9,
components individually. This happened in Ex. 8/17/3, where the         and that the coding was
two messages were sent simultaneously through the same trans-                       AE AF AG BE BF BG CE CF CG
ducer and recovered separately at the output. Sometimes, how-                    ↓ 6     4    2     2     9      1     3 7 5
ever, the two inputs are not both completely deducible from the
output. If we are interested solely in one of the input components,     If now the input message were the sequence B A C B A CA A B B,
as a source of variety, regarding the other as merely an unavoida-      while the “noise” gave simultaneously the sequence G F FE E E
ble nuisance, then the situation is commonly described as that of       G F G E, then the output would be
a “message corrupted by noise”.                                                             1, 4, 7, 2, 6, 3, 2, 4, 1, 2
   It must be noticed that noise is in no intrinsic way distinguish-
able from any other form of variety. Only when some recipient is        and the de-coding could give, for the first component, only the
given, who will state which of the two is important to him, is a dis-   approximation
tinction between message and noise possible. Thus suppose that                     B, A, C, A or B, A, C, A or B, A, B, A or B.
over a wire is coming both some conversation and some effects
from a cathode that is emitting irregularly. To someone who             Thus the original message to this input has been “corrupted” by
wants to hear the conversation, the variations at the cathode are       “noise” at the other input.
“noise”; but to the engineer who is trying to make accurate meas-         In this example the channel is quite capable of carrying the mes-
urements of what is going on at the cathode, the conversation is        sage without ambiguity if the noise is suppressed by the second
“noise”. “Noise” is thus purely relative to some given recipient,       input being held constant, at E say. For then the coding is one-one:
who must say which information he wants to ignore.                                                    A     B    C
   The point is worth emphasis because, as one of the commonest                                   ↓ 6       2    3
sources of uninteresting variety in electronic systems is the ther-
mal dance (Brownian movement) of the molecules and electrons,           and reversible.
electronic engineers tend to use the word “noise” without qualifi-        It will be noticed that the interaction occurred because only
cation to mean this particular source. Within their speciality they     eight of the nine possible output states were used. By this perma-
will probably continue to use the word in this sense, but workers       nent restriction, the capacity of the channel was reduced.
                                 186                                                                      187
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                        INCESSANT TRANSMISSION

Ex. 1: What is the coding, of first input to output, if the second output is kept con-   measure for the amount of information lost, but this interpretation
    stant (i) at F; (ii) at G?                                                           leads to nonsense. Thus if, in the same transmission, the line were
Ex. 2: A system of three states —P, Q, R—is to transmit changes at two inputs,           actually cut and the recipient simply tossed a coin to get a “mes-
    α and β, each of which can take two states. The states of the inputs and of
    the system change in step. Is noise-free transmission possible ?                     sage” he would get about a half of the symbols right, yet no infor-
                                                                                         mation whatever would have been transmitted. Shannon has
                                                                                         shown conclusively that the natural measure is the equivocation,
9/20. Distortion. It should be noticed that falsification of a mes-                      which is calculated as follows.
sage is not necessarily identical with the effect of noise. “If a par-                     First find the entropy over all possible classes:
ticular transmitted signal always produces the same received
signal, i.e. the received signal is a definite function of the trans-                                     – 0.495 log 0.495 – 0.005 log 0.005
mitted signal, then the effect may be called distortion. If this func-                                    – 0.005 log 0.005 – 0.495 log 0.495
tion has an inverse—no two transmitted signals producing the                             Call this H1 it is 1.081 bits per symbol. Next collect together the
same received signal—distortion may be corrected, at least in                            received signals, and their probabilities; this gives the table
principle, by merely performing the inverse functional operation
on the received signal.” (Shannon.)                                                                               Symbol received 0                     1
                                                                                                                  Probability     0.5                  0.5
Ex. 1: Is the change by which the erect object falls on to the retina inverted a dis-    Find its entropy:
    tortion or a corruption ?
Ex. 2: A tension applied to a muscle evokes a steady stream of impulses whose                                         – 0.5 log 0.5 – 0.5 log 0.5
    frequency is not proportional to the tension. Is the deviation from propor-
    tionality a distortion or a corruption?                                              Call this H2. It is 1.000 bits per symbol. Then the equivocation is
Ex. 3: (Continued.) If the nerve carrying the impulses is subjected to alcohol           H1 – H2 : 0.081 bits per symbol.
    vapour of sufficient strength it will cease to conduct for all tensions. Is this        The actual rate at which information is being transmitted,
    a distortion or a corruption?                                                        allowance being made for the effect of noise, is the entropy of the
                                                                                         source, less the equivocation. The source here has entropy 1.000
9/21. Equivocation. A suitable measure for the degree of corrup-                         bits per symbol, as follows from:
tion has not, so far as I am aware, been developed for use in the
basic cases. In the case of the channel that transmits incessantly,                                       Symbol sent         0      1
however, Shannon has developed the appropriate measure.                                                   Probability        0.5    0.5
   It is assumed first that both the original signals and the received                   So the original amount supplied is 1.000 bits per symbol. Of this
signals form Markov chains of the type defined in S.9/4. The data                        0.919 gets through and 0.081 is destroyed by noise.
of the messages can then be presented in a form which shows the
frequencies (or probabilities) with which all the possible combi-                        Ex. 1: What is the equivocation of the transmission of S.9/19, if all nine combi-
                                                                                             nations of letters occur, in the long run, with equal frequency?
nations of the vector (symbol sent, symbol received) occur. Thus,                        Ex. 2: (Continued.) What happens to the equivocation if the first input uses only
to use an example of Shannon’s suppose 0’s and 1’s are being                                 the symbols B and C, so that the combinations BE, BF, BG, CE, CF, CG
sent, and that the probabilities (here relative frequencies) of the                          occur with equal frequencies? Is the answer reasonable?
symbols being received are:                                                              *Ex. 3: Prove the following rules, which are useful when we want to find the
                                                                                             value of the expression–p loga p, and p is either very small or very near to 1:
            Symbol sent      0     0     1     1                                              (i) If p = xy, – p log a p = – xy ( log ax + log ay );
            Symbol received 0      1     0     1                                                                                             –z
            Probability    0.495 0.005 0.005 0.495                                                          –z               z × 10
                                                                                              (ii) If p = 10 , – p log a p = ------------------ ;
                                                                                                                               log 10a
Of every thousand symbols sent, ten arrive in the wrong form, an                                                                                                                  2
                                                                                             (iii) If p is very close to 1, put 1 – p = q , and – p log a p = ------------  q – ---- …
error of one per cent.                                                                                                                                             1             q
  At first sight this “one per cent wrong” might seem the natural                                                                                             log ea             2 

                                        188                                                                                             189
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                            INCESSANT TRANSMISSION

Ex. 4: Find –p log2 p when p is 0.00025. (Hint: Write p as 2.5 × 10–4 and use (i)).   whether by growth in embryogeny or by some functional tak-
Ex. 5: During a blood count, lymphocytes and monocytes are being examined             ing-over in learning.
    under the microscope and discriminated by the haematologist. If he mistakes          The full impact of this theorem on neuropsychology has yet to
    one in every hundred lymphocytes for a monocyte, and one in every two             be felt. Its power lies not so much in its ability to solve the prob-
    hundred monocytes for a lymphocyte, and if these cells occur in the blood in
    the ratio of 19 lymphocytes to 1 monocyte, what is his equivocation? (Hint:       lem “How does the brain overcome the ever-increasing corruption
    Use the results of the previous two exercises.)                                   of its internal messages?” as in its showing that the problem
                                                                                      hardly arises, or that it is a minor, rather than a major, one.
                                                                                         The theorem illustrates another way in which cybernetics can
9/22. Error-free transmission. We now come to Shannon’s funda-                        be useful in biology. Cybernetic methods may be decisive in the
mental theorem on the transmission of information in the presence                     treatment of certain difficult problems not by a direct winning of
of noise (i.e. when other, irrelevant, inputs are active). It might be                the solution but by a demonstration that the problem is wrongly
thought that when messages are sent through a channel that sub-                       conceived, or based on an erroneous assumption.
jects each message to a definite chance of being altered at random,                      Some of today’s outstanding problems about the brain and
then the possibility of receiving a message that is correct with cer-                 behaviour come to us from mediaeval and earlier times, when the
tainty would be impossible. Shannon however has shown conclu-                         basic assumptions were very different and often, by today’s stand-
sively that this view, however plausible, is mistaken. Reliable                       ards, ludicrously false. Some of these problems are probably
messages can be transmitted over an unreliable channel. The                           wrongly put, and are on a par with the problem, classic in medi-
reader who finds this incredible must go to Shannon’s book for                        aeval medicine: what are the relations between the four elements
the proof; here I state only the result.                                              and the four humours? This problem, be it noticed, was never
   Let the information to be transmitted be of quantity H, and sup-                   solved—what happened was that when chemists and pathologists
pose the equivocation to be E, so that information of amount H–E                      got to know more about the body they realised that they must
is received. (It is assumed, as in all Shannon’s book, that the trans-                ignore it.
mission is incessant.) What the theorem says is that if the channel                      Some of our classic problems in the brain—perhaps some of
capacity be increased by an amount not less than E—by the provi-                      those relating to localisation, causation, and learning—may well
sion perhaps of another channel in parallel—then it is possible so                    be found to be of this type. It seems likely that the new insight
to encode the messages that the fraction of errors still persisting                   given by cybernetics may enable us to advance to a better discrim-
may be brought as near zero as one pleases. (The price of a very                      ination; if this happens, it will dispose of some questions by a
small fraction of errors is delay in the transmission, for enough                     clear demonstration that they should not be asked.
message-symbols must accumulate to make the average of the
accumulated material approach the value of the average over all
time.)
   Conversely, with less delay, one can still make the errors as few
as one pleases by increasing the channel capacity beyond the min-
imal quantity E.
   The importance of this theorem can hardly be overestimated in
its contribution to our understanding of how an intricately con-
nected system such as the cerebral cortex can conduct messages
without each message gradually becoming so corrupted by error
and interference as to be useless. What the theorem says is that if
plenty of channel capacity is available then the errors may be
kept down to any level desired. Now in the brain, and especially
in the cortex there is little restriction in channel capacity, for
more can usually be obtained simply by the taking of more fibres,
                                       190                                                                            191
              PART THREE
       RE GUL AT I ON AND CONT ROL

The fourldation of all physiology must be the physiology
of permanence.
                                           (Darlington)
             REGULATION IN BIOLOGICAL SYSTEMS




Chapter                                                           10

  REG UL AT ION IN B IOL OGIC AL
             SYST E M S
10/1. The two previous Parts have treated of Mechanism (and the
processes within the system) and Variety (and the processes of
communication between system and system). These two subjects
had to be studied first, as they are fundamental. Now we shall use
them, and in Part III we shall study what is the central theme of
cybernetics —regulation and control.
   This first chapter reviews the place of regulation in biology, and
shows briefly why it is of fundamental importance. It shows how
regulation is essentially related to the flow of variety. The next
chapter (11) studies this relation in more detail, and displays a
quantitative law—that the quantity of regulation that can be
achieved is bounded by the quantity of information that can be
transmitted in a certain channel. The next chapter (12) takes up the
question of how the abstract principles of chapter 11 are to be
embodied—what sort of machinery can perform what is wanted.
This chapter introduces a new sort of machine, the Markovian,
which extends the possibilities considered in Part I. The remain-
ing chapters consider the achievement of regulation and control as
the difficulties increase, particularly those that arise when the sys-
tem becomes very large.
   At first, in Part III, we will assume that the regulator is already
provided, either by being inborn, by being specially made by a
manufacturer, or by some other means. The question of what
made the regulator, of how the regulator, which does such useful
things, came itself to be made will be taken up at S.13/10.

10/2. The present chapter aims primarily at supplying motive to
the reader, by showing that the subjects discussed in the later
chapters (11 onwards) are of fundamental importance in biology.
The subject of regulation in biology is so vast that no single chap-
ter can do it justice. Cannon’s Wisdom of the Body treated it ade-
quately so far as internal, vegetative activities are concerned, but
                                195
              A N IN T R O D U C T IO N T O C Y BERNETI CS                            REGULATION IN BIOLOGICAL SYSTEMS

there has yet to be written the book, much larger in size, that shall   10/4. What has just been said is well enough known. It enables us,
show how all the organism’s exteriorly-directed activities—its          however, to join these facts on to the ideas developed in this book
“higher” activities—are all similarly regulatory, i.e. homeostatic.     and to show the connexion exactly.
In this chapter I have had to leave much of this to the reader’s           For consider what is meant, in general, by “survival”. Suppose
imagination, trusting that, as a biologist, he will probably already    a mouse is trying to escape from a cat, so that the survival of the
be sufficiently familiar with the thesis. The thesis in any case has    mouse is in question. As a dynamic system, the mouse can be in
been discussed to some extent in Design for a Brain.                    a variety of states; thus it can be in various postures, its head can
  The chief purpose of this chapter is to tie together the concepts     be turned this way or that, its temperature can have various val-
of regulation, information, and survival, to show how intimately        ues, it may have two ears or one. These different states may occur
they are related, and to show how all three can be treated by a         during its attempt to escape and it may still be said to have sur-
method that is entirely uniform with what has gone before in the        vived. On the other hand if the mouse changes to the state in
book, and that can be made as rigorous, objective, and unambig-         which it is in four separated pieces, or has lost its head, or has
uous as one pleases.                                                    become a solution of amino-acids circulating in the cat’s blood
                                                                        then we do not consider its arrival at one of these states as corre-
                                                                        sponding to “survival”.
10/3. The foundation. Let us start at the beginning. The most basic        The concept of “survival” can thus be translated into perfectly
facts in biology are that this earth is now two thousand million        rigorous terms, similar to those used throughout the book. The
years old, and that the biologist studies mostly that which exists      various states (M for Mouse) that the mouse may be in initially
today. From these two facts follow a well-known deduction,              and that it may pass into after the affair with the cat is a set M1,
which I would like to restate in our terms.                             M2, …, Mk, …, Mn. We decide that, for various reasons of what is
   We saw in S.4/23 that if a dynamic system is large and com-          practical and convenient, we shall restrict the words “living
posed of parts with much repetition, and if it contains any prop-       mouse” to mean the mouse in one of the states in some subset of
erty that is autocatalytic, i.e. whose occurrence at one point          these possibilities, in M1 to Mk say. If now some operation C (for
increases the probability that it will occur again at another point,    cat) acts on the mouse in state Mi, and C(Mi) gives, say, M2, then
then such a system is, so far as that property is concerned, essen-     we may say that M has “survived” the operation of C, for M2 is in
tially unstable in its absence. This earth contained carbon and         the set M1, … Mk.
other necessary elements, and it is a fact that many combinations          If now a particular mouse is very skilled and always survives
of carbon, nitrogen, and a few others are self-reproducing. It fol-     the operation C, then all the states C(M1), C(M2), …, C(Mk), are
lows that though the state of “being lifeless” is almost a state of     contained in the set M1, …, Mk. We now see that this representa-
equilibrium, yet this equilibrium is unstable (S.5/6), a single devi-   tion of survival is identical with that of the “stability” of a set (S.5/
ation from it being sufficient to start a trajectory that deviates      5). Thus the concepts of “survival” and “stability” can be brought
more and more from the “lifeless” state. What we see today in the       into an exact relationship; and facts and theorems about either can
biological world are these “autocatalytic” processes showing all        be used with the other, provided the exactness is sustained.
the peculiarities that have been imposed on them by two thousand           The states M are often defined in terms of variables. The states
million years of elimination of those forms that cannot survive.        M1, …, Mk, that correspond to the living organism are then those
   The organisms we see today are deeply marked by the selective        states in which certain essential variables are kept within
action of two thousand million years’ attrition. Any form in any        assigned (“physiological”) limits.
way defective in its power of survival has been eliminated; and
today the features of almost every form bear the marks of being         Ex. 1: If n is 10 and k is 5, what would the operation C(M7) = M9 correspond
adapted to ensure survival rather than any other possible outcome.          to?
Eyes, roots, cilia, shells and claws are so fashioned as to maximise    Ex. 2: (Continued.) What would the operation C(M8) = M4 correspond to?
the chance of survival. And when we study the brain we are again        Ex. 3: What would be an appropriate definition of “lethal”, if C’s attack were
studying a means to survival.                                               invariably fatal to M?

                                 196                                                                        197
              A N IN T R O D U C T IO N T O C Y BERNETI CS                              REGULATION IN BIOLOGICAL SYSTEMS

                                                                        whole regulatory machinery. F, by its action, tends to lessen the
10/5. What is it survives, over the ages ? Not the individual organ-    effect of D on E.
ism, but certain peculiarly well compounded gene-patterns, par-            (2) The automatic pilot. E is a vector with three components—
ticularly those that lead to the production of an individual that       yaw, pitch, and roll—and η is the set of positions in which these
carries the gene-pattern well protected within itself, and that,        three are all within certain limits. D is the set of disturbances that
within the span of one generation, can look after itself.               may affect these variables, such as gusts of wind, movements of
   What this means is that those gene-patterns are specially likely     the passengers in the plane, and irregularities in the thrusts of the
to survive (and therefore to exist today) that cause to grow,           engines. F is the whole machinery—pilot, ailerons, rudder, etc.—
between themselves and the dangerous world, some more or less           whose action determines how D shall affect E.
elaborate mechanism for defence. So the genes in Testudo cause             (3) The bicycle rider. E is chiefly his angle with the vertical. ,1
the growth of a shell; and the genes in Homo cause the growth of        is the set of small permissible deviations. D is the set of those dis-
a brain. (The genes that did not cause such growths have long           turbances that threaten to make the deviation become large. F is
since been eliminated.)                                                 the whole machinery—mechanical, anatomical, neuronic—that
Now regard the system as one of parts in communication. In the          determines what the effect of D is on E.
previous section the diagram of immediate effects (of cat and              Many other examples will occur later. Meanwhile we can sum-
mouse) was (or could be regarded as)                                    marise by saying that natural selection favours those gene-pat-
                                                                        terns that get, in whatever way, a regulator F between the
                               C→ M                                     disturbances D and the essential variables E. Other things being
We are now considering the case in which the diagram is                 equal, the better F is as a regulator, the larger the organism’s
                                                                        chance of survival.
                            D→ F→ E
                                                                        Ex.: What variables are kept within limits by the following regulatory mecha-
in which E is the set of essential variables, D is the source of dis-       nisms: (i) the air-conditioner; (ii) the climber’s oxygen supply; (iii) the wind-
turbance and dangers (such as C) from the rest of the world, and            screen-wiper; (iv) the headlights of a car; (v) the kitchen refrigerator; (vi) the
F is the interpolated part (shell, brain, etc.) formed by the gene-         phototaxic plant; (vii) sun-glasses; (viii) the flexion reflex (a quick lifting of
                                                                            the foot evoked by treading on a sharp stone); (ix) blinking when an object
pattern for the protection of E. (F may also include such parts of          approaches the eye quickly; (x) predictor for anti-aircraft gunfire.
the environment as may similarly be used for E’s protection—
burrow for rabbit, shell for hermit-crab, pike for pike-man, and        10/6. Regulation blocks the flow of variety. On what scale can any
sword (as defence) for swordsman.)                                      particular mechanism F be measured for its value or success as a
   For convenience in reference throughout Part III, let the states     regulator ? The perfect thermostat would be one that, in spite of
of the essential variables E be divided into a set η∇those that cor-    disturbance, kept the temperature constant at the desired level. In
respond to “organism living” or “good”—and not-η∇those that             general, there are two characteristics required: the maintenance of
correspond to “organism not living” or “bad”. (Often the classifi-      the temperature within close limits, and the correspondence of
cation cannot be as simple as this, but no difficulty will occur in     this range with the desired one. What we must notice in particular
principle; nothing to be said excludes the possibility of a finer       is that the set of permissible values, η, has less variety than the set
classification.)                                                        of all possible values in E; for η is some set selected from the
   To make the assumptions clear, here are some simple cases, as        states of E. If F is a regulator, the insertion of F between D and E
illustration. (Inanimate regulatory systems are given first for sim-    lessens the variety that is transmitted from D to E. Thus an essen-
plicity.)                                                               tial function of F as a regulator is that it shall block the transmis-
   (1) The thermostatically-controlled water-bath. E is its temper-     sion of variety from disturbance to essential variable.
ature, and what is desired (η) is the temperature range between,           Since this characteristic also implies that the regulator’s func-
say 36° and 37°C. D is the set of all the disturbances that may         tion is to block the flow of information, let us look at the thesis
drive the temperature outside that range—addition of cold water,        more closely to see whether it is reasonable.
cold draughts blowing, immersion of cold objects, etc. F is the            Suppose that two water-baths are offered me, and I want to
                                 198                                                                            199
              A N IN T R O D U C T IO N T O C Y BERNETI CS                           REGULATION IN BIOLOGICAL SYSTEMS

decide which to buy. I test each for a day against similar distur-      information about the times reaching the essential variables. In
bances and then look at the records of the temperatures; they are       the same way, the skilled provider for a family may go through
as in Fig. 10/6/1:                                                      difficult times without his family realising that anything unusual
                                                                        has happened. The family of an unskilled provider would have
                                                                        discovered it.
                                                                          In general, then, an essential feature of the good regulator is
                                                                        that it blocks the flow of variety from disturbances to essential
                                                                        variables.

                                                                        10/7. The blocking may take place in a variety of ways, which
                                                                        prove, however, on closer examination to be fundamentally the
                                                                        same. Two extreme forms will illustrate the range.
                                                                           One way of blocking the flow (from the source of disturbance
                                                                        D to the essential variable E) is to interpose something that acts as
                                                                        a simple passive block to the disturbances. Such is the tortoise’s
                               Fig. 10/6/1                              shell, which reduces a variety of impacts, blows, bites, etc. to a
                                                                        negligible disturbance of the sensitive tissues within. In the same
There is no doubt that Model B is the better; and I decide this pre-    class are the tree’s bark, the seal’s coat of blubber, and the human
cisely because its record gives me no information, as does A’s,         skull.
about what disturbances, of heat or cold, came to it. The thermom-         At the other extreme from this static defence is the defence by
eter and water in bath B have been unable, as it were, to see any-      skilled counter-action—the defence that gets information about
thing of the disturbances D.                                            the disturbance to come, prepares for its arrival, and then meets
   The same argument will apply, with obvious modifications, to         the disturbance, which may be complex and mobile, with a
the automatic pilot. If it is a good regulator the passengers will      defence that is equally complex and mobile. This is the defence of
have a smooth flight whatever the gustiness outside. They will, in      the fencer, in some deadly duel, who wears no armour and who
short, be prevented from knowing whether or not it is gusty out-        trusts to his skill in parrying. This is the defence used mostly by
side. Thus a good pilot acts as a barrier against the transmission      the higher organisms, who have developed a nervous system pre-
of that information.                                                    cisely for the carrying out of this method.
   The same argument applies to an air-conditioner. If I live in an        When considering this second form we should be careful to
air-conditioned room, and can tell, by the hotness of the room,         notice the part played by information and variety in the process.
that it is getting hot outside, then that conditioner is failing as a   The fencer must watch his opponent closely, and he must gain
regulator. If it is really good, and the blinds are drawn, I shall be   information in all ways possible if he is to survive. For this pur-
unable to form any idea of what the outside weather is like. The        pose he is born with eyes, and for this purpose he learns how to
good conditioner blocks the flow inwards of information about           use them. Nevertheless, the end result of this skill, if successful,
the weather.                                                            is shown by his essential variables, such as his blood-volume,
   The same thesis applies to the higher regulations achieved by        remaining within normal limits, much as if the duel had not
such activities as hunting for food, and earning one’s daily bread.     occurred. Information flows freely to the non-essential variables,
Thus while the unskilled hunter or earner, in difficult times, will     but the variety in the distinction “duel or no-duel” has been pre-
starve and will force his liver and tissues (the essential variables)   vented from reaching the essential variables.
to extreme and perhaps unphysiological states, the skilled hunter          Through the remaining chapters we shall be considering this
or earner will go through the same difficult times with his liver       type of active defence, asking such questions as: what principles
and tissues never taken to extremes. In other words, his skill as a     must govern it? What mechanisms can achieve it? And, what is to
regulator is shown by the fact, among others, that it prevents          be done when the regulation is very difficult?
                                 200                                                                    201
                                                                                                    REQUISITE VARIETY

                                                                         D must play first, by selecting a number, and thus a particular row.
                                                                         R, knowing this number, then selects a Greek letter, and thus a
                                                                         particular column. The italic letter specified by the intersection of
Chapter                                                           11     the row and column is the outcome. If it is an a, R wins; if not, R
                                                                         loses.
                                                                           Examination of the table soon shows that with this particular
            R EQ U IS ITE V A RI ETY                                     table R can win always. Whatever value D selects first, R can
                                                                         always select a Greek letter that will give the desired outcome.
11/1. In the previous chapter we considered regulation from the          Thus if D selects 1, R selects β; if D selects 2, R selects α; and so
biological point of view, taking it as something sufficiently well       on. In fact, if R acts according to the transformation
understood. In this chapter we shall examine the process of regu-
                                                                                                        ↓ β
lation itself, with the aim of finding out exactly what is involved                                         1 2 3
and implied. In particular we shall develop ways of measuring the                                             α γ
amount or degree of regulation achieved, and we shall show that          then he can always force the outcome to be a.
this amount has an upper limit.                                            R’s position, with this particular table, is peculiarly favourable,
                                                                         for not only can R always force a as the outcome, but he can as
11/2. The subject of regulation is very wide in its applications,        readily force, if desired, b or c as the outcome. R has, in fact, com-
covering as it does most of the activities in physiology, sociology,     plete control of the outcome.
ecology, economics, and much of the activities in almost every
branch of science and life. Further, the types of regulator that exist   Ex. 1: What transformation should R use to force c as outcome?
are almost bewildering in their variety. One way of treating the         Ex. 2: If both R’s and D’s values are integers, and the outcome E is also an inte-
                                                                             ger, given by
subject would be to deal seriatim with the various types, and chap-                                            E = R – 2D,
ter 12 will, in fact, indicate them. In this chapter, however, we            find an expression to give R in terms of D when the desired outcome is 37.
shall be attempting to get at the core of the subject—to find what       Ex. 3: A car’s back wheels are skidding. D is the variable “Side to which the tail
is common to all.                                                            is moving”, with two values, Right and Left. R is the driver’s action “Direc-
   What is common to all regulators, however, is not, at first sight         tion in which he turns the steering wheel” with two values, Right and Left.
much like any particular form. We will therefore start anew in the           Form the 2 x 2 table and fill in the outcomes.
next section, making no explicit reference to what has gone              Ex. 4: If R’s play is determined by D’s in accordance with the transformation
before. Only after the new subject has been sufficiently developed
will we beam to consider any relation it may have to regulation.                                        ↓ β1      2
                                                                                                                  α
                                                                                                                        3
                                                                                                                        γ

11/3. Play and outcome. Let us therefore forget all about regula-            and many games are observed, what will be the variety in the many outcomes?
tion and simply suppose that we are watching two players, R and          Ex. 5: Has R complete control of the outcome if the table is triunique?
D, who are engaged in a game. We shall follow the fortunes of R,
who is attempting to score an a. The rules are as follows. They          11/4. The Table used above is, of course, peculiarly favourable to
have before them Table 11/3/1, which can be seen by both:                R. Other Tables are, however, possible. Thus, suppose D and R,
                                                                         playing on the same rules, are now given Table 11/4/1 in which D
                          Table 11/3/l                                   now has a choice of five, and R a choice of four moves.
                                   R                                        If a is the target, R can always win. In fact, if D selects 3, R has
                                α β γ                                    several ways of winning. As every row has at least one a, R can
                                                                         always force the appearance of a as the outcome. On the other
                            1      b   a    c                            hand, if the target is b he cannot always win. For if D selects 3,
                          D 2      a   c    b                            there is no move by R that will give b as the outcome. And if the
                            3      c   b    a                            target is c, R is quite helpless, for D wins always.
                                202                                                                             203
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                 REQUISITE VARIETY

  It will be seen that different arrangements within the table, and                                                Table 11/5/l
different numbers of states available to D and R, can give rise to
a variety of situations from the point of view of R.                                                                        R
                                                                                                                         α β      γ
                                 Table 11/4/l
                                                                                                                     1    f f k
                                          R                                                                          2   k e f
                                    α β γ              δ                                                             3 m k a
                              1        b     d    a    a                                                             4   b b b
                              2        a     d    a    d                                                        D 5      c q c
                                                                                                                     6   h h m
                            D 3        d     a    a    a                                                             7    j d d
                              4        d     b    a    b                                                             8   a p j
                              5        d     a    b    d                                                             9    l n h
Ex. 1: With Table I l /4/ l, can R always win if the target is d?                     only one move in response to each possible move of D. His spec-
Ex. 2: (Continued.) What transformation should R use?                                 ification, or “strategy” as it might be called, might appear:
Ex. 3: (Continued.) If a is the target and D, for some reason, never plays 5, how                       If D selects 1, I shall select γ
    can R simplify his method of play?                                                                  ,, ,, ,, 2, ,, ,,         ,, α
Ex. 4: A guest is coming to dinner, but the butler does not know who. He knows
    only that it may be Mr. A, who drinks only sherry or wine, Mrs. B, who
                                                                                                        ,, ,, ,, 3, ,, ,,         ,, β
    drinks only gin or brandy, or Mr. C, who drinks only red wine, brandy or                                         …                 …
    sherry. In the cellar he finds he has only whisky, gin, and sherry. Can he find                     ,, ,, ,, 9, ,, ,,         ,, α
    something acceptable to the guest, whoever comes ?
                                                                                      He is, of course, specifying a transformation (which must be sin-
                                                                                      glevalued, as R may not make two moves simultaneously):
11/5. Can any general statement be made about R’s modes of play                                                1    2    3    … 9
and prospects of success ?
   If full generality is allowed in the Table, the possibilities are so
                                                                                                            ↓ γ     α    β    … α
many, arbitrary and complicated that little can be said. There is
one type, however, that allows a precise statement and is at the                        This transformation uniquely specifies a set of outcomes—
same time sufficiently general to be of interest. (It is also funda-                  those that will actually occur if D, over a sequence of plays,
mental in the theory of regulation.)                                                  includes every possible move at least once. For 1 and γ give the
   From all possible tables let us eliminate those that make R’s                      outcome k, and so on, leading to the transformation:
game too easy to be of interest. Ex. 11/4/3 showed that if a column                                         (1,γ) (2,α) (3,β) … (9,α)
contains repetitions, R’s play need not be discriminating; that is,                                     ↓     k     k     k   …   l
R need not change his move with each change of D’s move. Let
us consider, then, only those tables in which no column contains                      It can now be stated that the variety in this set of outcomes cannot
a repeated outcome. When this is so R must select his move on full                    be less than
knowledge of D’s move; i.e. any change of D’s move must require                                                    D ’s variety
a change on R’s part. (Nothing is assumed here about how the out-                                                 ----------------------------
                                                                                                                    R ’s variety
comes in one column are related to those in another, so these rela-
tions are unrestricted.) Such a Table is 11/5/1. Now, some target                     i.e., in this case, 9/3.
being given, let R specify what his move will be for each move by                        It is easily proved. Suppose R marks one element in each row
D. What is essential is that, win or lose, he must specify one and                    and concentrates simply on keeping the variety of the marked ele-
                                       204                                                                              205
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                    REQUISITE VARIETY

ments as small as possible (ignoring for the moment any idea of a      Then the previous section has proved that VO cannot be less,
target). He marks an element in the first row. In the second row he    numerically, than the value of VD – VR. Thus VO’s minimum is VD
must change to a new column if he is not to increase the variety       – VR.
by adding a new, different, element; for in the initially selected       If VD is given and fixed, VD – VR can be lessened only by a cor-
column the elements are all different, by hypothesis. To keep the      responding increase in VR. Thus the variety in the outcomes, if
variety down to one element he must change to a new column at          minimal, can be decreased further only by a corresponding
each row. (This is the best he can do; it may be that change from      increase in that of R. (A more general statement is given in S.11/9.)
column to column is not sufficient to keep the variety down to one       This is the law of Requisite Variety. To put it more pictur-
element, but this is irrelevant, for we are interested only in what    esquely: only variety in R can force down the variety due to D;
is the least possible variety, assuming that everything falls as       variety can destroy variety.
favourably as possible). So if R has n moves available (three in the     This thesis is so fundamental in the general theory of regulation
example), at the n-th row all the columns are used, so one of the      that I shall give some further illustrations and proofs before turn-
columns must be used again for the next row, and a new outcome         ing to consider its actual application.
must be allowed into the set of outcomes. Thus in Table 11/5/1,
selection of the k’s in the first three rows will enable the variety   11/8. (This section can be omitted at first reading.) The law is of
to be kept to one element, but at the fourth row a second element      very general applicability, and by no means just a trivial outcome
must be allowed into the set of outcomes.                              of the tabular form. To show that this is so, what is essentially the
   In general: If no two elements in the same column are equal,        same theorem will be proved in the case when the variety is spread
and if a set of outcomes is selected by R, one from each row, and      out in time and the fluctuation incessant—the case specially con-
if the table has r rows and c columns, then the variety in the         sidered by Shannon. (The notation and concepts in this section are
selected set of outcomes cannot be fewer than r/c.                     those of Shannon’s book.)
                                                                          Let D, R, and E be three variables, such that each is an informa-
                                                                       tion source, though “source” here is not to imply that they are act-
         TH E LA W O F REQ U I S I T E VAR IE T Y                      ing independently. Without any regard for how they are related
                                                                       causally, a variety of entropies can be calculated, or measured
11/6. We can now look at this game (still with the restriction that    empirically. There is H(D,R,E), the entropy of the vector that has
no element may be repeated in a column) from a slightly different      the three as components; there is HD (E), the uncertainty in E
point of view. If R, S move is unvarying, so that he produces the      when D, S state is known; there is HED (R), the uncertainty in R
same move, whatever D, S move, then the variety in the outcomes        when both E and D are known; and so on.
will be as large as the variety in D’S moves. D now is, as it were,       The condition introduced in S.11/5 (that no element shall occur
exerting full control over the outcomes.                               twice in a column) here corresponds to the condition that if R is
  If next R uses, or has available, two moves, then the variety of     fixed, or given, the entropy of E (corresponding to that of the out-
the outcomes can be reduced to a half (but not lower). If R has        come) is not to be less than that of D, i.e.
three moves, it can be reduced to a third (but not lower); and so
on. Thus if the variety in the outcomes is to be reduced to some                                 HR (E) > HR (D)
assigned number, or assigned fraction of D, S variety, R, S variety      Now whatever the causal or other relations between D, R and E,
must be increased to at least the appropriate minimum. Only vari-      algebraic necessity requires that their entropies must be related so
ety in R, S moves can force down the variety in the outcomes.          that
                                                                                         H(D) + HD (R) = H(R) + HR (D)
11/7. If the varieties are measured logarithmically (as is almost      for each side of the equation equals H(R,D). Substitute HR(E) for
always convenient), and if the same conditions hold, then the the-     HR(D), and we get
orem takes a very simple form. Let VD be the variety of D, VR that                       H(D) + HD (R) < H(R) + HR (E)
of R, and VO that of the outcome (all measured logarithmically).                                         < H(R,E).
                                 206                                                                   207
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                       REQUISITE VARIETY

But always, by algebraic necessity,                                      thrown by the invention of some new device or some new elec-
                       H(R, E) < H(R) + H(E)                             tronic circuit, or the discovery of some new element. It does not
                                                                         even have anything to do with the properties of the machine in the
so              H(D) + HD (R) < H(R) + HR (E)                            general sense of Chapter 4; for it comes from the Table, such as
i. e.                     H(E) > H(D) + HD (E) – H(R).                   that of S.11/4; this Table says simply that certain D-R combina-
                                                                         tions lead to certain outcomes, but is quite independent of what-
Thus the entropy of the E’s has a certain minimum. If this mini-         ever it is that determines the outcome. Experiments can only
mum is to be affected by a relation between the D- and R-sources,        provide such tables.
it can be made least when HD(R) = 0, i.e. when R is a determinate           The theorem is primarily a statement about possible arrange-
function of D. When this is so, then H(E)’s minimum is H(D) –            ments in a rectangular table. It says that certain types of arrange-
H(R), a deduction similar to that of the previous section. It says       ment cannot be made. It is thus no more dependent on special
simply that the minimal value of E’s entropy can be forced down          properties of machines than is, say, the “theorem” that four
below that of D only by an equal increase in that of R.                  objects can be arranged to form a square while three can not. The
                                                                         law therefore owes nothing to experiment.
11/9. The theorems just established can easily be modified to give
a worth-while extension.
  Consider the case when, even when R does nothing (i.e. pro-            11/11. Regulation again. We can now take up again the subject of
duces the same move whatever D does) the variety of outcome is           regulation, ignored since the beginning of this chapter, for the law
less than that of D. This is the case in Table 11/4/1. Thus if R gives   of Requisite Variety enables us to apply a measure to regulation.
the reply α to all D’s moves, then the outcomes are a, b or d— a         I et us go back and reconsider what is meant, essentially, by “reg-
variety of three, less than D’s variety of five. To get a manageable     ulation”.
calculation, suppose that within each column each element is now            There is first a set of disturbances D, that start in the world out-
repeated k times (instead of the “once only” of S.11/5). The same        side the organism, often far from it, and that threaten, if the regu-
argument as before, modified in that kn rows may provide only            lator R does nothing, to drive the essential variables E outside
one outcome, leads to the theorem that                                   their proper range of values. The values of E correspond to the
                                                                         “outcomes” of the previous sections. Of all these E-values only a
                      VO > VD – log k – log VR ,                         few (η) are compatible with the organism’s life, or are unobjec-
in which the varieties are measured logarithmically.                     tionable, so that the regulator R, to be successful, must take its
   An exactly similar modification may be made to the theorem in         value in a way so related to that of D that the outcome is, if possi-
terms of entropies, by supposing, not as in S.11/8 that                  ble, always within the acceptable set 17, i.e. within physiological
                                                                         limits. Regulation is thus related fundamentally to the game of
                          HR (E) > HR (D), but that                      S.11/4. Let us trace the relation in more detail.
                          HR (E) > HR (D) – K.                              The Table T is first assumed to be given. It is the hard external
H(E)’s minimum then becomes                                              world, or those internal matters that the would-be regulator has to
                                                                         take for granted. Now starts a process. D takes an arbitrary value,
                         H(D) – K – H(R),                                R takes some value determined by D’s value, the Table deter-
with a similar interpretation.                                           mines an outcome, and this either is or is not in η. Usually the
                                                                         process is repeated, as when a water-bath deals, during the day,
                                                                         with various disturbances. Then another value is taken by D,
11/10. The law states that certain events are impossible. It is          another by R, another outcome occurs, and this also may be either
important that we should be clear as to the origin of the impossi-       in η or not. And so on. If R is a well-made regulator—one that
bility. Thus, what has the statement to fear from experiment?            works successfully—then R is such a transformation of D that all
   It has nothing to do with the properties of matter. So if the law     the outcomes fall within η. In this case R and T together are act-
is stated in the form “No machine can …”, it is not to be over-          ing as the barrier F (S.10/5.)
                                 208                                                                       209
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                          REQUISITE VARIETY

  We can now show these relations by the diagram of immediate           The law of Requisite Variety says that R’s capacity as a regulator
effects:                                                                cannot exceed R’s capacity as a channel of communication.
                                                                           In the form just given, the law of Requisite Variety can be
                                   T                                    shown in exact relation to Shannon’s Theorem 10, which says that
                                                                        if noise appears in a message, the amount of noise that can be
                                                                        removed by a correction channel is limited to the amount of infor-
                            D            E                              mation that can be carried by that channel.
                                                                           Thus, his “noise” corresponds to our “disturbance”, his “correc-
                                   R                                    tion channel” to our “regulator R”, and his “message of entropy
                                                                        H” becomes, in our case, a message of entropy zero, for it is con-
The arrows represent actual channels of communication. For the          stancy that is to be “transmitted”. Thus the use of a regulator to
variety in D determines the variety in R, and that in T is deter-       achieve homeostasis and the use of a correction channel to sup-
mined by that in both D and R. If R and T are in fact actual            press noise are homologous.
machines, then R has an input from D, and T has two inputs.
   (When R and T are embodied in actual machines, care must be          Ex. 1: A certain insect has an optic nerve of a hundred fibres, each of which can
                                                                            carry twenty bits per second; is this sufficient to enable it to defend itself
taken that we are clear about what we are referring to. If some             against ten distinct dangers, each of which may, or may not, independently,
machine is providing the basis for T, it will have (by S.4/1) a set         be present in each second?
of states that occur step by step. These states, and these steps, are   Ex. 2: A ship’s telegraph from bridge to engine-room can determine one of nine
essentially independent of the discrete steps that we have consid-          speeds not oftener than one signal in five seconds, and the wheel can deter-
ered to be taken by D, R, and T in this chapter. Thus, T gives the          mine one of fifty rudder-positions in each second. Since experience has
outcome, and any particular outcome may be compared with                    shown that this means of control is normally sufficient for full regulation,
                                                                            estimate a normal upper limit for the disturbances (gusts, traffic, shoals, etc.)
another, as unit with unit. Each individual outcome may, how-               that threaten the ship’s safety.
ever, in another context, be analysed more finely. Thus a thirsty       Ex. 3: A general is opposed by an army of ten divisions, each of which may
organism may follow trajectory 1 and get relief, or trajectory 2            manoeuvre with a variety of 106 bits in each day. His intelligence comes
and die of thirst. For some purposes the two outcomes can be                through 10 signallers, each of whom can transmit 60 letters per minute for 8
treated as units, particularly if they are to be contrasted. If how-        hours in each day, in a code that transmits 2 bits per letter. Is his intelli-
                                                                            gence-channel sufficient for him to be able to achieve complete regulation?
ever we want to investigate the behaviour in more detail, we can
                                                                        Ex. 4: (Continued.) The general can dictate orders at 500 bits/minute for 12
regard trajectory 1 as composed of a sequence of states, separated          hours/day. If his Intelligence were complete, would this verbal channel be
by steps in time that are of quite a different order of size from           sufficient for complete regulation ?
those between successive regulatory acts to successive distur-
bances.)                                                                11/12. The diagram of immediate effects given in the previous
   We can now interpret the general phenomenon of regulation in         section is clearly related to the formulation for “directive correla-
terms of communication. If R does nothing, i.e. keeps to one            tion” given by Sommerhoff, who, in his Analytical Biology, uses
value, then the variety in D threatens to go through T to E, con-       the diagram
trary to what is wanted. It may happen that T, without change by                                         Rt1
R, will block some of the variety (S.11/9), and occasionally this
blocking may give sufficient constancy at E for survival. More                                      CVo                   Gt2
commonly, a further suppression at E is necessary; it can be
achieved, as we saw in S.11/6, only by further variety at R.
   We can now select a portion of the diagram, and focus attention                                             Et1
on R as a transmitter:
                            D→ R→ T                                                                   t0        t1         t2

                                 210                                                                            211
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                    REQUISITE VARIETY

If I am not misinterpreting him, his concepts and those used here      pher would deal with twenty subjects that are (for exposure and
are equivalent thus:                                                   distance) distinct, then his camera must obviously be capable of
                                                                       at least twenty distinct settings if all the negatives are to be
             Coenetic variable (CVo) ↔ Disturbance (D)                 brought to a uniform density and sharpness. Where the law, in its
                      Response (Rt1) ↔ Response (R)                    quantitative form, develops its power is when we come to con-
   Environmental circumstances (Et1) ↔ Table (T)                       sider the system in which these matters are not so obvious, and
         Subsequent occurrence (Gt2) ↔ Outcome (E)                     particularly when it is very large. Thus, by how much can a dicta-
                                                                       tor control a country? It is commonly said that Hitler’s control
A reading of his book may thus help to extend much of the theory       over Germany was total. So far as his power of regulation (in the
given in this Part, for he discusses the subject extensively.          sense of S.10/6) was concerned, the law says that his control
                                                                       amounted to just 1 man-power, and no more. (Whether this state-
11/13. The law now enables us to see the relations existing            ment is true must be tested by the future; its chief virtue now is
between the various types of variety and information that affect       that it is exact and uncompromising.) Thus the law, though trite in
the living organism.                                                   the simple cases, can give real guidance in those cases that are
   A species continues to exist (S.10/14) primarily because its        much too complex to be handled by unaided intuition.
members can block the flow of variety (thought of as disturbance)
to the gene-pattern (S.10/6), and this blockage is the species’ most
fundamental need. Natural selection has shown the advantage to                                    CONT ROL
be gained by taking a large amount of variety (as information)
partly into the system (so that it does not reach the gene-pattern)    11/14. The formulations given in this chapter have already sug-
and then using this information so that the flow via R blocks the      gested that regulation and control are intimately related. Thus, in
flow through the environment T.                                        S.11/3, Table 11/3/1 enables R not only to achieve a as outcome
   This point of view enables us to resolve what might at first seem   in spite of all D’s variations; but equally to achieve b or c at will.
a paradox—that the higher organisms have sensitive skins,                 We can look at the situation in another way. Suppose the deci-
responsive nervous systems, and often an instinct that impels          sion of what outcome is to be the target is made by some control-
them, in play or curiosity, to bring more variety to the system than   ler, C, whom R must obey. C’s decision will affect R’s choice of
is immediately necessary. Would not their chance of survival be        α, β or γ; so the diagram of immediate effects is
improved by an avoidance of this variety?
   The discussion in this chapter has shown that variety (whether                                   D→ T→ E
information or disturbance) comes to the organism in two forms.
There is that which threatens the survival of the gene-pattern—the
direct transmission by T from D to E. This part must be blocked                                  C→ R
at all costs. And there is that which, while it may threaten the
gene-pattern, can be transformed (or re-coded) through the regu-       Thus the whole represents a system with two independent inputs,
lator R and used to block the effect of the remainder (in T). This     C and D.
information is useful, and should (if the regulator can be pro-          Suppose now that R is a perfect regulator. If C sets a as the tar-
vided) be made as large as possible; for, by the law of Requisite      get, then (through R’s agency) E will take the value a, whatever
Variety, the amount of disturbance that reaches the gene-pattern       value D may take. Similarly, if C sets b as target, b will appear as
can be diminished only by the amount of information so transmit-       outcome whatever value D may take. And so on. And if C sets a
ted. That is the importance of the law in biology.                     particular sequence—a, b, a. c, c, a, say—as sequential or com-
   It is also of importance to us as we make our way towards the       pound target, then that sequence will be produced, regardless of
last chapter. In its elementary forms the law is intuitively obvious   D’s values during the sequence. (It is assumed for convenience
and hardly deserving statement. If, for instance, a press photogra-    that the components move in step.) Thus the fact that R is a perfect

                                 212                                                                   213
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                  REQUISITE VARIETY

regulator gives C complete control over the output, in spite of the                    11/15. In our treatment of regulation the emphasis has fallen on its
entrance of disturbing effects by way of D. Thus, perfect regula-                      property of reducing the variety in the outcome; without regula-
tion of the outcome by R makes possible a complete control over                        tion the variety is large—with regulation it is small. The limit of
the outcome by C.                                                                      this reduction is the regulation that holds the outcome rigorously
   We can see the same facts from yet another point of view. If an                     constant. This point of view is undoubtedly valid, but at first it
attempt at control, by C over E:                                                       may seem to contrast sharply with the naive view that living
                                                                                       organisms are, in general, anything but immobile. A few words,
                                     C → E                                             in addition to what was said in S.11/13, may be useful.
                                                                                          It should be appreciated that the distinction between “constant”
is disturbed or made noisy by another, independent, input D, so                        and “varying” often depends on the exact definition of what is
that the connexions are                                                                being referred to. Thus if a searchlight follows an aircraft accu-
                                                                                       rately we may notice either that the searchlight moved through a
                                                                                       great range of angles (angles in relation to the earth) or that the
                      D                      D                                         angle it made with the aircraft remained constant at zero. Obvi-
                                                                                       ously both points of view are valid; there is no real contradiction
                              E     or             T → E                               in this example between “great range” and “constant”, for they
                                                                                       refer to different variables.
                      C                      C                                            Again, the driver who steers a car accurately from one town to
                                                                                       another along a winding lane can be regarded either as one who
                                                                                       has caused the steering wheel to show much activity and change
then a suitable regulator R, taking information from both C and D,                     or as one who, throughout the trip, has kept the distance between
and interposed between C and T:                                                        car and verge almost constant.
                                                                                          Many of the activities of living organisms permit this double
                                  D→ T → E                                             aspect. On the one hand the observer can notice the great deal of
                                         ↑                                             actual movement and change that occurs, and on the other hand he
                                  C → R                                                can observe that throughout these activities, so far as they are co-
                                                                                       ordinated or homeostatic, there are invariants and constancies that
may be able to form, with T, a compound channel to E that trans-                       show the degree of regulation that is being achieved.
mits fully from C while transmitting nothing from D.                                      Many variations are possible on the same theme. Thus if varia-
  The achievement of control may thus depend necessarily on the                        ble x is always doing just the same as variable y, then the quantity
achievement of regulation. The two are thus intimately related.                        x – y is constant at zero. So if y’s values are given by some outside
                                                                                       factor, any regulator that acts on x so as to keep x – y constant at
                                                                                       zero is in fact forcing x to vary, copying y. Similarly, “making x
Ex. 1: From Table 31/3/l form the set of transformations, with c as parameter,
                                                                                       do the opposite to y” corresponds to “keeping x + y at some con-
    that must be used by R if C is to have complete control over the outcome.          stant value”. And “make the variable w change so that it is always
    (Hint: What are the operands?)                                                     just twice as large as v’s (fluctuating) rate of change” corresponds
Ex. 2: If, in the last diagram of this section, C wants to transmit to E at 20 bits/   to “keep the quantity w – 2dv/dt constant”.
    second, and a source D is providing noise at 5 bits/second, and T is such             It is a great convenience in exposition and in the processes of
    that if R is constant, E will vary at 2 bits/second, how much capacity must        general theory to be able to treat all “targets” as if they were of the
    the channel from D to R have (at least) if C s control over E is to be             form “keep the outcome constant at a”. The reader must, however,
    complete?
                                                                                       not be misled into thinking that the theory beat’ only of immobil-
Ex. 3: (Continued.) How much capacity (at least) is necessary along the channel
    from C to R ?                                                                      ity; he must accustom himself to interchanging the corresponding
Ex. 4: (Continued.) How much along that from R to T?
                                                                                       concepts freely.

                                       214                                                                              215
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                       REQUISITE VARIETY

                    S O M E V A R I A TI ONS                             is now “that which disturbs”, and T has no third input, so the for-
                                                                         mulation agrees with that of S.11/4.
11/16. In S.11/4 the essential facts implied by regulation were             There is, of course, no suggestion here that the noise, as a dis-
shown as a simple rectangular table, as if it were a game between        turbance, can be allowed for magically by merely thinking differ-
two players D and R. The reader may feel that this formulation is        ently about it. The suggestion is that if we start again from the
much too simple and that there are well known regulations that it        beginning and re-define D and T then some new transformation of
is insufficient to represent. The formulation, however, is really        D may be able to restore regulation. The new transformation will,
much more general than it seems, and in the remaining sections of        of course, have to be more complex than the old, for D will have
this chapter we shall examine various complications that prove,          more components.
on closer examination, to be really included in the basic formula-
tion of S.11/4.                                                          11/19. Initial states. A related case occurs when T is some machine
                                                                         that shows its behaviour by a trajectory, with the outcome E
11/17. Compound disturbance. The basic formulation of S.11/4             depending on the properties of T’s trajectory. The outcomes will
included only one source of disturbance D, and thus seems, at first      then usually be affected by which of T’s states is the initial one.
sight, not to include all those cases, innumerable in the biological     How does T’s initial state come into the basic formulation of S.11/4?
world, in which the regulation has to be conducted against several          If the initial state can be controlled, so that the trajectory can be
disturbances coming simultaneously by several channels. Thus, a          started always from some standardised state, then no difficulty
cyclist often has to deal both with obstructions due to traffic and      arises. (In this connexion the method of S.7/25 may be useful.) It
with disequilibrations due to gusts.                                     may however happen, especially if the system is very large, that
   In fact, however, this case is included; for nothing in this chap-    T’s initial state cannot be standardised. Does the basic formula-
ter excludes the possibility that D may be a vector, with any            tion include this case?
number of components. A vectorial D is thus able to represent all           It does; for D, as a vector, can be re-defined to include T’s initial
such compound disturbances within the basic formulation.                 state. Then the variety brought to E by the variety in T’s initial
                                                                         state is allotted its proper place in the formulation.
11/18. Noise. A related case occurs when T is “noisy”—when T
has an extra input that is affected by some disturbance that inter-      11/20. Compound target. It may happen that the acceptable states
feres with it. This might be the case if T were an electrical            η at E may have more than one condition. Thus of a thermostat it
machine, somewhat disturbed by variations in the mains’ voltage.         might be demanded that
At first sight this case seems to be not represented in the basic for-       (i) it shall usually stay between 36° and 37°C;
mulation.                                                                   (ii) if displaced by + 10° it shall return to the allowed range
   It must be appreciated that D, T, E, etc. were defined in S.11/3              within one minute.
in purely functional form. Thus “D” is “that which disturbs”.
Given any real system some care may b necessary in deciding                This difficulty can be dealt with by the same method as in S.11/
what corresponds to D, what to T, and so on. Further, a boundary         17, by recognising that E may be a vector, with more than one
drawn provisionally between D and T (and the other boundaries)           component, and that what is acceptable (η) may be given in the
may, on second thoughts, require moving. Thus one set of bound-          form of separate specifications for each component.
aries on the real system may give a system that purports to be of          Thus, by allowing E to become a vector, the basic formulation
D, T, etc. yet does not agree with the basic formulation of S.11/4.      of S. 11/4 can be made to include all cases in which the target is
Then it may be found that a shifting of the boundaries, to give a        complex, or conditional, or qualified.
new D. T, etc., gives a set that does agree with the formulation.
   If a preliminary placing of the boundaries shows that this (pro-      11/21. Internal complexities. As a last example, showing how
visional) T is noisy, then the boundaries should be re-drawn so as       comprehensive the basic formulation really is, consider the case
to get T’s input of noise (S.9/19) included as a component in D. D       in which the major problem seems to be not so much a regulation
                                 216                                                                      217
              A N IN T R O D U C T IO N T O C Y BERNETI CS

as an interaction between several regulations. Thus a signalman
may have to handle several trains coming to his section simulta-
neously. To handle any one by itself would be straightforward,
but here the problem is the control of them as a complex whole
pattern.
   This case is in fact still covered by the basic formulation. For
nothing in that formulation prevents the quantities or states or ele-
ments in D, R, T, or E from being made of parts, and the parts
interrelated. The fact that “D” is a single letter in no way implies
that what it represents must be internally simple or unitary.
   The signalman’s “disturbance” D is the particular set of trains
arriving in some particular pattern over space and time. Other
arrangements would provide other values for D, which must, of
course, be a vector. The outcomes E will be various complex pat-
terns of trains moving in relation to one another and moving away
from his section. The acceptable set η will certainly include a com-
ponent “no collision” and will probably include others as well. His
responses R will include a variety of patterns of movements of sig-
nals and points. T is what is given—the basic matters of geography,
mechanics, signalling techniques, etc., that lead determinately from
the situation that has arisen and his reaction pattern to outcome.
   It will be seen therefore that the basic formulation is capable, in
principle, of including cases of any degree of internal complexity.




                                 218
Chapter                                                           12

      TH E E R R OR -C ONT R OL L E D
              R E GUL AT OR
12/1. In the previous chapter we studied the nature of regulation,
and showed that certain relations and laws must hold if regulation
is to be achieved. There we assumed that regulation was achieved,
and then studied what was necessary. This point of view, however,
though useful, hardly corresponds with that commonly used in
practice. Let us change to a new point of view.
   In practice, the question of regulation usually arises in this way:
The essential variables E are given, and also given is the set of
states η in which they must be maintained if the organism is to
survive (or the industrial plant to run satisfactorily). These two
must be given before all else. Before any regulation can be under-
taken or even discussed, we must know what is important and
what is wanted. Any particular species has its requirements
given—the cat must keep itself dry, the fish must keep itself wet.
A servo-mechanism has its aim given by other considerations—
one must keep an incubating room hot, another must keep a refrig-
erating room cold. Throughout this book it is assumed that outside
considerations have already determined what is to be the goal, i.e.
what are the acceptable states η. Our concern, within the book, is
solely with the problem of how to achieve the goal in spite of dis-
turbances and difficulties.
   The disturbances D threaten to drive E outside the set η. If D
acts through some dynamic system (an environment) T, then the
diagram of immediate effects is initially
                           D→ T→ E
The organism (or whoever is interested in E), however, has some
power of forming another dynamic system R (e.g. a brain or a ser-
vomechanism) which can be coupled to T and which, if properly
made, will form with T a whole, F, so that the diagram of immediate
effects becomes
                           D→ F→ E

                                219
              A N IN T R O D U C T IO N T O C Y BERNETI CS                             THE ERROR-CONTROLLED REGULATOR

and such that F blocks the flow of variety from D to E, so that E            A similar restriction of R’s capacity may occur in those cases
stays within η.                                                           where R’s effect on T is vectorial, i.e. effected through more than
   T is usually given. It is the environment which the organism is        one channel or component to T, and some diminution has
facing together with those parts of the organism that have to be          occurred in the number of T’s parameters accessible to R. (Com-
taken as given in the regulation. It cannot just be abolished, but        pare S.7/12.) Thus a failure at one of the controls on the dashboard
can usually be manipulated. The problem of regulation is then, in         may impair the driver’s ability to keep the car running well.
general:                                                                     The case when R cannot receive full information about T’s ini-
   Given E, η, T, and D, to form the mechanism R so that R and            tial state (discussed in S.11/19) is really included in the cases
T, coupled, act to keep E within η.                                       mentioned above. Such a difficulty occurs to a railway signalman
   From now to the end of the book we shall be studying how var-          in a fog. He is well informed that a disturbance “fog” has arrived,
ious types of data (E, η, T, and D) can specify the form of               but he often has difficulty in ascertaining the present state of the
machine with input (R) that will give regulation. We want to              system he is controlling, i.e. the present positions of the trains in
deduce the form of R.                                                     his sector. With this restriction in the flow of information from T
   Were the situation always as simple as it was in Table 11/3/1,         to R goes the difficulty, or even impossibility, of maintaining full
the subject would soon be exhausted. As it is, many deviations            regulation.
from that form are possible, so we shall proceed to examine vari-
ous deviations, as they put various difficulties in the way of the        12/3. The basic formulation of S.11/4 assumed that the process of
design or specification of the regulator R.                               regulation went through its successive stages in the following order:
   We can now assume, in discussing some particular regulation,
that full use has been made of the possibilities of redefining (S.11/       (1) a particular disturbance threatens at D;
16) so that the formulation is either like that of S.11/3, which gave       (2) it acts on R, which transforms it to a response;
perfect regulation and control, or like those in S.11/4, in which           (3) the two values, of D and R, act on T simultaneously to pro-
such perfection was impossible. The remainder of the book will                  duce T’s outcome;
be concerned essentially with those cases in which perfect regula-          (4) the outcome is a state in E, or affects E.
tion is not possible but in which we wish the regulation to be as         Thus (3) supposes that if R is an actual material system, it performs
good as is possible in the conditions given.                              all its work before T starts to move. We assumed, in other words
                                                                          that the regulator R moved at a higher order of speed than T.
12/2. Sensory and motor restriction. A simple introduction to the            This sequence does actually occur in many cases. When the cat
real difficulties is that given when R’s capacity, as a channel for       approaches, the mouse may react so as to get to its hole before the
transmitting variety or information from D to T, becomes insuffi-         cat’s claws actually strike. We say in general that the organism
cient, according to the law of Requisite Variety, to reduce the vari-     has reacted to the threat (at D) rather than to the disaster itself (at
ety in E to that in η. When this happens, the regulation is necessarily   E), and has thus forestalled the disaster. The formulation is thus
imperfect.                                                                properly representative of many important regulations.
   Examples of the phenomenon are myriad. First are all the cases            On the other hand, there are many important cases in which this
of sensory restriction, of deafness, of the driver who cannot see         anticipation is not possible—in which R’s action cannot be com-
clearly through a rain-obscured windscreen. There are the organ-          pleted before the outcome (at T) starts to be determined. (An
isms that cannot see ultra-violet light, and the tabetic who cannot       example is given in the next section.) In such cases the regulation
feel where his feet are. These are restrictions in the channel from       envisaged in S.11/3 is impossible. What then is to be done?
D to R.                                                                      One method, of course, is to speed up the transmission of infor-
   Then there are the restrictions in the channel from R to T, those      mation from D to R; and many regulating systems have various
on the effector side of R. There is the man who has lost an arm,          devices specially to this end. Primitive nerve fibres develop mye-
the insect that cannot fly, the salivary gland that cannot secrete,       lin sheaths, so that the passage to the brain may be faster. Some
and the rudder that is stuck.                                             organisms develop a sense of smell, so that the appropriate
                                 220                                                                       221
              A N IN T R O D U C T IO N T O C Y BERNETI CS                            THE ERROR-CONTROLLED REGULATOR

response may be prepared in time for the actual bodily encounter.        and the information available for regulatory purposes is whatever
And economic systems send messages by cable rather than by               survives the coding imposed by its passage through T (S.8/5).
messenger so that the arrival in port of a ship with a perishable          Sometimes the information available to R is forced to take an
cargo can be prepared for.                                               even longer route, so that R is affected only by the actual effect at
   Sometimes, however, the available resources do not include a          E. The diagram of immediate effects is then
speeding-up of the transmission through R; R’s reaction cannot be
got to T before the outcome commences. In that case, the best that                                  D→ T → E
can be done is that the imperfect regulation should at least be as                                         ↑
good as it can be made in the circumstances. The succeeding sec-
tions will discuss how this can be done.                                                                   R

                                                                         and we have the basic form of the simple “error-controlled servo-
12/4. Regulation by error. A well-known regulator that cannot react      mechanism” or “closed loop regulator”, with its well-known feed-
directly to the original disturbance D is the thermostat controlled      back from E to R. The reader should appreciate that this form differs
water- bath, which is unable to say “I see someone coming with a         from that of the basic formulation (S.11/4) only in that the informa-
cold flask that is to be immersed in me—I must act now”. On the          tion about D gets to R by the longer route
contrary, the regulator gets no information about the disturbance
until the temperature of the water (E) actually begins to drop. And                             D→ T → E → R →
the same limitation applies to the other possible disturbances, such
as the approach of a patch of sunlight that will warm it, or the leav-
ing open of a door that will bring a draught to cool it.                 Again, the information available to R is only such as survives the
   The same limitation holds over many important regulators.             transmission through T and E:
There is, for instance, a mechanism that helps to keep constant the         This form is of the greatest importance and widest applicability.
oxygen supply to the tissues: any long-continued lack of oxygen          The remainder of the book will be devoted to it. (The other cases
causes eventually an increase in the number of red corpuscles            are essentially simpler and do not need so much consideration.)
contained in the blood. So people with certain types of heart dis-
ease, and those living at high altitudes, where the air is thin, tend
to develop such an increase. This regulation draws its information
from the harmful effect (the lack of oxygen) itself, not from the        12/5. A fundamental property of the error-controlled regulator is
cause (D) of the heart disease, or from the decision to live at a        that it cannot be perfect in the sense of S.11/3.
higher altitude.                                                           Suppose we attempt to formulate the error-controlled system by
   From the point of view of communication, the new phenomena            the method used in S.11/3 and 4. We take a table of double entry,
are easily related to those of the old. The difference is simply that    with D and R determining an outcome in E. Each column has a
now the information from D to R (which must pass if the regulator        variety equal to that of D. What is new is that the rules must be
R is to play any useful part whatever) comes through T. Instead of       modified. Whereas previously D made a selection (a particular
                                                                         disturbance), then R, and thus E was determined, the play now is
           D→ T→ E                           D→ T→ E                     that after D’s initial selection, R must take a value that is a deter-
                  ↑            we have              ↑↓
                                                                         minate function of the outcome E (for R is error-controlled). It is
                                                                         easily shown that with these conditions E’s variety will be as
                 R                                  R                    large as D’s—i.e. R can achieve no regulation, no matter how R is
                                                                         constructed (i.e. no matter what transformation is used to turn E’s
R is thus getting its information about D by way of T:                   value to an R-value).
                          D→ T→ R→                                         If the formal proof is not required, a simpler line of reasoning
                                                                         can show why this must be so. As we saw, R gets its information
                                 222                                                                     223
              A N IN T R O D U C T IO N T O C Y BERNETI CS                            THE ERROR-CONTROLLED REGULATOR

through T and E. Suppose R is somehow regulating successfully;           ring in industrial machinery but of the commonest occurrence and
then this would imply that the variety at E is reduced below that        highest importance in biological systems. The subject is returned
of D—perhaps even reduced to zero. This very reduction makes             to in S.12/11. Meanwhile we must turn aside to see what is
the channel                                                              involved in this idea of a “non-determinate” machine.

                          D→ T → E →
                                                                                       T HE MARKOVI AN MACHI NE
to have a lessened capacity; if E should be held quite constant then     12/8. We are now going to consider a class of machine more general
the channel is quite blocked. So the more successful R is in keeping     than that considered in Parts I and II. (Logically, the subject should
E constant, the more does R block the channel by which it is receiv-     have been considered earlier, but so much of those Parts was con-
ing its necessary information. Clearly, any success by R can at best     cerned with the determinate machine (i.e. one whose transforma-
be partial.                                                              tions are single- valued) that an account of a more general type
                                                                         might have been confusing.)
12/6. Fortunately, in many cases complete regulation is not neces-          A “machine” is essentially a system whose behaviour is suffi-
sary. So far, we have rather assumed that the states of the essential    ciently law-abiding or repetitive for us to be able to make some
variables E were sharply divided into “normal” (η) and “lethal”, so      prediction about what it will do (S.7/19). If a prediction can be
occurrence of the “undesirable” states was wholly incompatible           made, the prediction may be in one of a variety of forms. Of one
with regulation. It often happens, however, that the systems show        machine we may be able to predict its next state—we then say it
continuity, so that the states of the essential variables lie along a    is “determinate” and is one of the machines treated in Part I. Of
scale of undesirability. Thus a land animal can pass through many        another machine we may be unable to predict its next state, but we
degrees of dehydration before dying of thirst; and a suitable reversal   may be able to predict that, if the conditions are repeated many
from half way along the scale may justly be called “regulatory” if it    times, the frequencies of the various states will be found to have
saves the animal’s life, though it may not have saved the animal         certain values. This possible constancy in the frequencies has
from discomfort.                                                         already been noticed in S.9/2. It is the characteristic of the Markov
   Thus the presence of continuity makes possible a regulation           chain.
that, though not perfect, is of the greatest practical importance.          We can therefore consider a new class of absolute system: it is
Small errors are allowed to occur; then, by giving their informa-        one whose states change with time not by a single-valued trans-
tion to R, they make possible a regulation against great errors.         formation but by a matrix of transition probabilities. For it to
This is the basic theory, in terms of communication, of the simple       remain the same absolute system the values of the probabilities
feedback regulator.                                                      must be unchanging.
                                                                            In S.2/10 it was shown that a single-valued transformation
                                                                         could be specified by a matrix of transitions, with 0’s or 1’s in the
12/7. The reader may feel that excessive attention has just been         cells (there given for simplicity as 0’s or +’s). In S.9/4 a Markov
given to the error-controlled regulator, in that we have stated with     chain was specified by a similar matrix containing fractions. Thus
care what is already well known. The accuracy of statement is,           a determinate absolute system is a special case of a Markovian
however, probably advisable, as we are going now to extend the           machine; it is the extreme form of a Markovian machine in which
subject of the error- controlled regulator over a range much wider       all the probabilities have become either O or 1. (Compare S.9/3.)
than usual.                                                                 A “machine with input” was a set of absolute systems, distin-
    This type of regulator is already well known when embodied in        guished by a parameter. A Markovian machine with input must
a determinate machine. Then it gives the servo-mechanism, the            similarly be a set of Markovian machines, specified by a set of
thermostat, the homeostatic mechanism in physiology, and so on.          matrices, with a parameter and its values to indicate which matrix
It can, however, be embodied in a non-determinate machine, and           is to be used at any particular step.
it then gives rise to a class of phenomena not yet commonly occur-          The idea of a Markovian machine is a natural extension of the
                                 224                                                                     225
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                                THE ERROR-CONTROLLED REGULATOR

idea of the ordinary, determinate machine—the type considered                             *Ex. 4: (Continued.) What general rule, using matrix multiplication, allows the
throughout Part I. If the probabilities are all O or I then the two are                      answer to be written down algebraically? (Hint: Ex. 9/6/8.)
identical. If the probabilities are all very near to O or I, we get a                     *Ex. 5: Couple the Markovian machine (with states a, 6, c and input-states α,
                                                                                             β)
machine that is almost determinate in its behaviour but that occa-
sionally does the unusual thing. As the probabilities deviate fur-                                               ↓       a       b        c                          ↓       a         b       c
ther and further from O and 1, so does the behaviour at each step                                                a       0.2 0.3 0.3                                 a       0.3 0.9 0.5
become less and less determinate, and more and more like that of                                        α:       b        . 0.7 0.2                         β:       b       0.6 0.1 0.5
one of the insects considered in S.9/4.                                                                          c       0.8 . 0.5                                   c       0.1 .    .
   It should be noticed that the definition, while allowing some
indeterminacy, is still absolutely strict in certain respects. If the                        to the Markovian machine (with states e, f and input-states δ, ε, θ)
machine, when at state x, goes on 90% of occasions to y and on                                      ↓        e       f                            ↓     e        f                         ↓       e    f
10% of occasions to z, then those percentages must be constant
(in the sense that the relative frequencies must tend to those per-                            δ:   e    0.7 0.5                     ε:           e    0.2 0.7                    θ:       e       0.5 0.4
                                                                                                    f    0.3 0.5                                  f    0.8 0.3                             f       0.5 0.6
centages as the sequence is made longer; and the limits must be
unchanging as sequence follows sequence). What this means in                                 by the transformations
practice is that the conditions that determine the percentages must
                                                                                                                             a       b        c                          e    f
remain constant.                                                                                                         ↓ ε δ θ                                 ↓ β α
   The exercises that follow will enable the reader to gain some
familiarity with the idea.                                                                   What is the Markovian machine (without input) that results ? (Hint: Try
                                                                                             changing the probabilities to O and 1, so as to make the systems determi-
Ex. 1: A metronome-pendulum oscillates steadily between its two extreme                      nate, and follow S.4/8; then make the probabilities fractional and follow
    states, R and L, but when at the right (R) it has a 1% chance of sticking there          the same basic method.)
    at that step. What is its matrix of transition probabilities ?
                                                                                          *Ex. 6: (Continued.) Must the new matrix still be Markovian?
Ex. 2: A determinate machine α has the transformation
                                                                                          *Ex. 7: If M is a Markovian machine which dominates a determinate machine N,
                                     A   B     C D                                           show that N’s output becomes a Markov chain only after M has arrived at
                                    ↓ B D D D                                                statistical equilibrium (in the sense of S.9/6).

    A Markovian machine β has the matrix of transition probabilities
                                                                                          12/9. Whether a given real machine appears Markovian or deter-
                              ↓      A     B    C  D
                                                                                          minate will sometimes depend on how much of the machine is
                              A      0     0     0 0                                      observable (S.3/11); and sometimes a real machine may be such
                              B 0.9 0            0 0
                              C      0     0 0.2 0                                        that an apparently small change of the range of observation may
                              D 0.1 1.0 0.8 1.0                                           be sufficient to change the appearances from that of one class to
    How do their behaviours differ? (Hint: Draw α’s graph and draw β’s graph              the other.
    after letting the probabilities go to 1 or 0.)                                           Thus, suppose a digital computing machine has attached to it a
Ex. 3: A Markovian machine with input has a parameter that can take three val-            long tape carrying random numbers, which are used in some proc-
    ues—p, q, r—and has two states, a and b, with matrices                                ess it is working through. To an observer who cannot inspect the
                          (p)                  (q)                 (r)                    tape, the machine’s output is indeterminate, but to an observer
                ↓     a         b    ↓     a         b   ↓     a         b                who has a copy of the tape it is determinate. Thus the question “Is
                a    1/2        1    a   1/4 3/4         a    1/3 3/4
                                                                                          this machine really determinate?” is meaningless and inappropri-
                b    1/2        0    b   3/4 1/4         b    2/3 1/4                     ate unless the observer’s range of observation is given exactly. In
                                                                                          other words, sometimes the distinction between Markovian and
    It is started at state b, and goes one step with the input at q, then one step with   determinate can be made only after the system has been defined
    it at r, then one step with it at p. What are the probabilities that it will now be   accurately. (We thus have yet another example of how inadequate
    at a or b?                                                                            is the defining of “the system” by identifying it with a real object.
                                         226                                                                                                          227
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                            THE ERROR-CONTROLLED REGULATOR

  Real objects may provide a variety of equally plausible “sys-             single-valued, more than one arrow can go from each state. Thus
tems”, which may differ from one another grossly in those prop-             the Markovian machine
erties we are interested in here, and the answer to a particular
question may depend grossly on which system it happens to be                                         ↓      a     b       c
applied to.) (Compare S.6/22.)                                                                       a     0.2   0.3     0.1
                                                                                                     b     0.8   0.7     0.5
12/10. The close relation between the Markovian machine and the                                      c      .     .      0.4
determinate can also be shown by the existence of mixed forms.
Thus, suppose a rat has partly learned the maze, of nine cells, shown       has the graph of Fig. 12/11/1, in which each arrow has a fraction
in Fig. 12/11/1,                                                            indicating the probability that that arrow will be traversed by the
                                                                            representative point.




                                    Fig. 12/10/1

                                                                                                          Fig. 12/11/1
in which G is the goal. For reasons that need not be detailed here,
the rat can get no sensory clues in cells 1, 2, 3 and 6 (lightly shaded),
so when in one of these cells it moves at random to such other cells        In this particular example it can be seen that systems at c will all
as the maze permits. Thus, if we put it repeatedly in cell 3 it goes        sooner or later leave it, never to return.
with equal probability to 2 or to 6. (I assume equal probability               A Markovian machine has various forms of stability, which
merely for convenience.) In cells 4, 5, 7, 8 and G, however, clues          correspond to those mentioned in Chapter 5. The stable region is
are available, and it moves directly from cell to cell towards G.           a set of states such that once the representative point has entered
Thus, if we put it repeatedly in cell 5 it goes always to 8 and then to     a state in the set it can never leave the set. Thus a and b above form
G. Such behaviour is not grossly atypical in biological work.               a stable region.
  The matrix of its transitions can be found readily enough. Thus,             A state of equilibrium is simply the region shrunk to a single
from 1 it can go only to 2 (by the maze’s construction). From 2 it          state. Just as, in the determinate system, all machines started in a
goes to 1, 3, or 5 with equal probability. From 4 it goes only to 5.        basin will come to a state of equilibrium, if one exists, so too do
From G, the only transition is to G itself. So the matrix can be            the Markovian; and the state of equilibrium is sometimes called
built up.                                                                   an absorbing state. The example of S.9/4 had no state of equilib-
                                                                            rium. It would have acquired one had we added the fourth position
Ex.: Construct a possible matrix of its transition probabilities.           “on a fly-paper”, whence the name.
                                                                               Around a state of equilibrium, the behaviour of a Markovian
                                                                            machine differs clearly from that of a determinate. If the system
12/11. Stability. The Markovian machine will be found on exami-             has a finite number of states, then if it is on a trajectory leading to
nation to have properties corresponding to those described in Part I,       a state of equilibrium, any individual determinate system must
though often modified in an obvious way. Thus, the machine’s kin-           arrive at the state of equilibrium after traversing a particular tra-
ematic graph is constructible; though, as the transformation is not         jectory and therefore after an exact number of steps. Thus, in the
                                       228                                                                   229
                  A N IN T R O D U C T IO N T O C Y BERNETI CS                                                           THE ERROR-CONTROLLED REGULATOR

first graph of S.2/17, a system at C will arrive at D in exactly two                                        Movement to a goal by the process of hunt and stick is thus
steps. If the system is Markovian, however, it does not take a                                            homologous, by S.12/8, to movement by a determinate trajectory
unique number of steps; and the duration of the trajectory can be                                         for both are the movement of a machine to a state of equilibrium.
predicted only on the average. Thus suppose the Markovian                                                 With caution, we can apply the same set of principles and argu-
machine is                                                                                                ments to both.
                                ↓      a    b                                                             Ex. 1: What states of equilibrium has the system of Ex. 12/10/l ?
                                a      1 1/2                                                              Ex. 2: A Markovian machine has matrix
                                b      0 1/2                                                                                    ↓     a     b    c     d    e     f
with a a state of equilibrium. Start a great number of such systems                                                             a    1/3 1/3     .     .    .     .
all at b. After the first step, half of them will have gone to a and half                                                       b    1/3 1/3     .     .    .     .
will be still at b. At the second step, a half of those still at b will                                                         c    1/3 1/3     .     .    .     .
move over to a and a half (i.e. a quarter of the whole) will remain at                                                          d     .   .      1     .    .     .
                                                                                                                                e     .   .      .     1    .     .
b. By continuing in this way we find that, of those that were started                                                           f     .   .      .     .    1     1
at b,
                        1/2 reach a after 1 step                                                             It is started at a on many occasions; how would its behaviour be described
                        1/4 ,, ,, ,, 2 ,,                                                                    in the language of rat-maze psychology ?
                        1/8 ,, ,, ,, 3 ,,
                                                                                                                           MARKOVI AN RE GUL AT I ON
and so on. The average time taken to get from b to a is thus
                                                                                                          12/12. The progression of a single Markovian machine to a state of
          1⁄2×1+1⁄4×2+1⁄8×3+…                                                                             equilibrium is much less orderly than that of a determinate machine,
          ---------------------------------------------------------------------------------- = 2 steps.
                        1⁄2+1⁄4+1⁄8+…                                                                     so the Markovian type is little used in the regulators of industry. In
                                                                                                          comparison with the smooth and direct regulation of an ordinary
Some of the trajectories will be much longer than 2 steps.                                                servo- mechanism it must seem fumbling indeed. Nevertheless, liv-
   As is now well known, a system around a state of equilibrium                                           ing organisms use this more general method freely, for a machine
behaves as if “goal-seeking”, the state being the goal. A corre-                                          that uses it is, on the whole, much more easily constructed and
sponding phenomenon appears in the Markovian case. Here,                                                  maintained; for the same reason it tends to be less upset by minor
instead of the system going determinately to the goal, it seems to                                        injuries. It is in fact often used for many simple regulations where
wander, indeterminately, among the states, consistently moving to                                         speed and efficiency are not of importance.
another when not at the state of equilibrium and equally consist-                                            A first example occurs when the occupant of a room wishes to
ently stopping there when it chances upon that state. The state still                                     regulate the number of flies in the room at, or near, zero. Putting
appears to have the relation of “goal” to the system, but the system                                      a flypaper at a suitable site causes no determinate change in the
seems to get there by trying a random sequence of states and then                                         number of flies. Nevertheless, the only state of equilibrium for
moving or sticking according to the state it has arrived at. Thus, the                                    each fly is now “on the paper”, and the state of equilibrium for
objective properties of getting success by trial and error are shown                                      “number of flies not on the paper” is zero. The method is primitive
when a Markovian machine moves to a state of equilibrium.                                                 but it has the great virtues of demanding little and of working suf-
   At this point it may be worth saying that the common name of                                           ficiently well in practice.
“trial and error” is about as misleading as it can be. “Trial” is in                                         A similar method of regulation is that often used by the golfer
the singular, whereas the essence of the method is that the                                               who is looking for a lost ball in an area known to contain it. The
attempts go on and on. “Error” is also ill-chosen, for the important                                      states are his positions in the area, and his rule is, for all the states
element is the success at the end. “Hunt and stick” seems to                                              but one, “go on wandering”; for one however it is “stop the wan-
describe the process both more vividly and more accurately. I                                             dering”. Though not perhaps ideal, the method is none the less
shall use it in preference to the other.                                                                  capable of giving a simple regulation.
                                                    230                                                                                      231
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                         THE ERROR-CONTROLLED REGULATOR

   Another example of regulation, of a low order of efficiency,                        12/14. Regulation by error. The basic formulation of S 11/4 is of
would be shown by a rat with serious brain damage who cannot                           extremely wide applicability. Perhaps its most important particular
remember anything of a maze, but who can recognise food when                           case occurs when both T and R are machines (determinate or Mark-
encountered and who then stops to eat. (Contrast his behaviour                         ovian) and when the values of E depend on the various states of
with that of a rat who does not stop at the food.) His progression                     equilibrium that T may come to, with ,η as some state (or states)
would be largely at random, probably with some errors repeated;                        that have some appropriate or desired property. Most physical reg-
nevertheless his behaviour shows a rudimentary form of regula-                         ulators are of this type. If R and T are Markovian machines the
tion, for having found the food he will stop to eat it, and will live,                 bringing of T to a desired state of equilibrium η by the action of R
while the other rat will keep moving and starve.                                       can readily be achieved if advantage is taken of the fundamental
                                                                                       fact that if two machines (such as T and R are now assumed to be)
Ex. 1: A married couple decide to have children till they have a boy and then to       are coupled, the whole can be at a state of equilibrium only when
    stop. (i) Is the process regulatory ? (ii)What is the matrix of transition prob-
    abilities ?                                                                        each part is itself at a state of equilibrium, in the conditions pro-
Ex. 2: Is the game “Heads, I win; Tails, we toss again” regulatory?                    vided by the other. The thesis was stated in S.5/13 for the determi-
                                                                                       nate machine, but it is just as true for the Markovian.
                                                                                          Let the regulator R be built as follows. Let it have an input that
                                                                                       can take two values, β and γ. When its input is β (for “bad”) let no
12/13. So far we have considered only the way in which a Marko-                        state be one of equilibrium, and when its input is γ (for “good”) let
vian machine moves to its goal. In principle, its sole difference from                 them all be equilibrial. Now couple it to T so that all the states in
a determinate machine is that its trajectory is not unique. Provided                   η are transformed, at R’s input, to the value γ, and all others to the
we bear this difference in mind, regulation by the Markovian                           value β. Let the whole follow some trajectory. The only states of
machine can have applied to it all the concepts we have developed                      equilibrium the whole can go to are those that have R at a state of
in the earlier chapters of this Part.                                                  equilibrium (by S.5/13); but this implies that R’s input must be at
   (The warning given in S.11/11 (pare. 5) must be borne in mind.                      γ, and this implies that T’s state must be at one of η. Thus the con-
The steps that take a Markovian machine along its trajectory are                       struction of R makes it a vetoer of all states of equilibrium in T
of a smaller order of magnitude than the steps that separate one act                   save those in η. The whole is thus regulatory; and as T and R are
of regulation (one “move” in the sense of S.11/3) from another.                        here Markovian, the whole will seem to be hunting for a “desira-
The latter steps correspond to change from one trajectory to                           ble” state, and will stick to it when found. R might be regarded as
another —quite different to the change from one point to the next                      “directing” T’s hunting.
along one trajectory.)                                                                    (The possibility that T and R may become trapped in a stable
   Thus the basic formulation of S.11/4 is compatible with either                      region that contains states not in η can be made as small as we
determinate or Markovian machines in T and R to provide the                            please by making R large, i.e. by giving it plenty of states, and by
actual outcome. No difference in principle exists, though if we                        seeing that its β −matrix is richly connected, so that from any state
describe their behaviour in psychological or anthropomorphic                           it has some non- zero probability of moving to any other state.)
terms the descriptions may seem very different. Thus if R is
required (for given disturbance) to show its regulatory power by                       Ex. 1: What, briefly, must characterise the matrix γ, and what β?
going to some state, then a determinate R will go to it directly, as                   *Ex. 2: Show that the thesis of S.5/13 is equally true for the Markovian machine.
if it knows what it wants, while a Markovian R will appear to
search for it.                                                                         12/15. The homeostat. In this form we can get another point of view
   The Markovian machine can be used, like the determinate, as a                       on the homeostat. In S.5/14 (which the reader should read again) we
means to control; for the arguments of S.11/14 apply to both (they                     considered it as a whole which moved to an equilibrium, but there
were concerned only with which outcomes were obtained, not                             we considered the values on the stepping-switches to be soldered
with how they were obtained.) So used, it has the disadvantage of                      on, given, and known. Thus B’s behaviour was determinate. We
being uncertain in its trajectory, but it has the advantage of being                   can, however, re- define the homeostat to include the process by
easily designed.
                                       232                                                                                   233
               A N IN T R O D U C T IO N T O C Y BERNETI CS                                 THE ERROR-CONTROLLED REGULATOR

which the values in Fisher and Yates’ Table of Random Numbers                  generality freely, so that often we shall not need to make the distinc-
acted as determinants (as they certainly did). If now we ignore (i.e.          tion between determinate and Markovian.
take for granted) the resistors on the switches, then we can regard               Another example of regulation by a Markovian system is worth
part B (of S.5/14) as being composed of a relay and a channel only,            considering as it is so well known. Children play a game called
to which comes values from the Table. We now regard B as having                “Hot or Cold?” One player (call him Tom for T) is blindfolded.
two inputs.                                                                    The others then place some object in one of a variety of places,
                                                                               and thus initiate the disturbance D. Tom can use his hands to find
                                                                               the object, and tries to find it, but the outcome is apt to be failure.
                                                B                              The process is usually made regulatory by the partnership of Rob
                                  Relay                                        (for R), who sees where the object is (input from D) and who can
                   A                                                           give information to Tom. He does this with the convention that
                                                                               the object is emitting heat, and he informs Tom of how this would
                                                                               be felt by Tom: “You’re freezing; still freezing; getting a little
                                Channel              Table                     warmer; no, you’re getting cold again; …”. And the children (if
                                                                               young) are delighted to find that this process is actually regula-
                                                                               tory, in that Tom is always brought finally to the goal.
                                                                                  Here, of course, it is Tom who is Markovian, for he wanders, at
B’s state is still a vector of two components—a value provided by              each next step, somewhat at random. Rob’s behaviour is more
the Table and the state of the relay (whether energised or not). To            determinate, for he aims at giving an accurate coding of the rela-
an Observer who cannot observe the Table, B is Markovian (com-                 tive position.
pare S.12/9). Its input from A has two states, β and γ; and it has been           Regulation that uses Markovian machinery can therefore now
built so that at β no state is equilibrial, and at γ every state is. Finally   be regarded as familiar and ordinary.
it is coupled as in S.5/14.
   The whole is now Markovian (so long as the Table is not
observed). It goes to an equilibrium (as in S.5/14), but will now                           DE T E RMI NAT E RE GUL AT I ON
seem, to this Observer, to proceed to it by the process of hunt and
stick, searching apparently at random for what it wants, and                   12/17. Having treated the case in which T and R are embodied in
retaining it when it gets it.                                                  machines, and considered that in which the machinery is Marko-
   It is worth noticing that while the relay’s input is at β, variety in       vian, we can now take up again the thread dropped in S.12/7, and
the Table is transmitted to A, but when the input comes to y, the              can specialise further and consider the case in which the probabili-
transmission is stopped. The relay thus acts as a “tap” to the flow            ties have all become 0 or 1 (S.12/8), so that the machinery is deter-
of variety from the Table to A. The whole moves to a state of equi-            minate. We continue with the regulator that is error-controlled. In
librium, which must be one in which the entry of variety from the              order, as biologists, to explore thoroughly the more primitive forms
Table is blocked. It has now gone to a state such that the entry of            of regulation, let us consider the case in which the feedback has a
variety from the Table (which would displace it from the state) is             variety of only two states.
prevented. Thus the whole is, as it were, self-locking in this con-               An example of such a system occurs in the telephone exchange
dition. (It thus exemplifies the thesis of S.4/22.)                            when a selector starts to hunt for a disengaged line. The selector
                                                                               tries each in turn, in a determinate order, gets from each in turn the
                                                                               information “engaged” or “disengaged”, and stops moving
12/16. The example of the previous section showed regulation                   (arrives at a state of equilibrium) at the first disengaged line. The
occurring in a system that is part determinate (the interactions               set of disturbances here is the set of possible distributions of
between the magnets in A) and part Markovian (the values taken by              “engaged” or “disengaged” among the lines. The system is regu-
the channel in part B). The example shows the essential uniformity             latory because, whatever the disturbance, the outcome is always
and generality of the concepts used. Later we shall want to use this           connexion with a disengaged line.
                                   234                                                                          235
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                     THE ERROR-CONTROLLED REGULATOR

   The mechanism is known to be error-controlled, for the infor-                       The diagram of immediate effects is specially worth noting. It is
mation that determines whether it shall move on or stick comes
from the line itself.                                                                                             Temp. of               Temp. of
   This case is so simple as to be somewhat degenerate. If we pay                         Disturbances            incubator                eggs
no attention to the internal actions between R and T, so that they
fuse to form the F of S.10/5, then the case becomes simply that of
a determinate system which, when the initial state is given, runs
along a determinate trajectory to a state of equilibrium. Thus                                                                   Temp. of
                                                                                                  Size of flame                  Capsule
every basin with a state of equilibrium in η can be said to show a
simple form of regulation; for it acts so as to reduce the variety in
the initial states (as disturbance D) to the smaller variety in the ter-
minal state.                                                                                                      Diam. of
   Much the same can be said of the rat that knows its way about                                                  Capsule
a warehouse; for wherever it gets to it can make its way back to
the nest. As much can be said for the computer that is pro-                          or some equivalent form. In it, D, T, R and E are readily identified
grammed to work by a method of successive approximation; for,                        (though the distinctions between T and R and their parts are some-
at whatever value it is started, the successive values are moved                     what arbitrary). The whole acts to block the passage of variety from
determinately to the goal, which is its only state of equilibrium.                   the Disturbances (whatever they are) to the eggs. If the aim of the
                                                                                     regulator is re-defined slightly as being to keep constant the temper-
Ex.: A card is to be found in a shuffled pack of 52 by examination of them one       ature of the incubator, then the regulator is controlled by the error
    by one. How many will have to be examined, on the average, if (i) the cards      rather than by the disturbances themselves.
    are examined seriatim, (ii) if one is drawn, examined, returned if not wanted,      In this form of regulator, the system must, of course, be stable
    the pack shuffled, a card drawn, and so on? (Systematic versus random            for any given disturbance, and the desired temperature must be the
    searching.)
                                                                                     system’s state of equilibrium. The feedback around the circuit
                                                                                     must thus usually be negative.
                                                                                        Many regulators in the living body are of this simple form, and
12/18. When the machinery is all determinate, the problem of S. 12/                  Cannon’s work has made them well known. Typical is that which
14 may arise—that of getting T to go to some state of equilibrium                    regulates the pH of the blood by the amount of carbon dioxide in it:
that has some desired property. When this is so, the solution given
there for the Markovian machine is, of course, still valid: one cou-
ples on a vetoer.                                                                                                 pH of the            pH of body’s
                                                                                          Disturbances             blood                 tissues

12/19. Continuous variation. After these primitive forms, we
arrive at the regulators whose variables can vary continuously. (It                              Concentration                 Activity of
must be remembered that the continuous is a special case of the                                  CO2 in blood                  respiration
discrete, by S.2/1.) Of the great numbers that exist I can take only
one or two for mention, for we are interested here only in their
general principles.                                                                                               rate of Ex-
  Typical is the gas-heated incubator. It contains a capsule which                                              cretion of CO2
swells as the temperature rises. The mechanism is arranged so that
the swelling of the capsule cuts down the size of the gas flame (or                  Again the system shows the features just mentioned.
of the amount of hot air coming to the incubator); an undue rise of                    Among the innumerable examples of such mechanisms
temperature is thus prevented.                                                       should be included the economic. Tustin’s Mechanism of Eco-
                                      236                                                                            237
               A N IN T R O D U C T IO N T O C Y BERNETI CS                                 THE ERROR-CONTROLLED REGULATOR

nomic Systems shows how closely their properties are cussed                    one end of a light stiff rod J, which can turn on a pivot K. Thus if
here.                                                                          K is unmoving, a movement down at the other end L will lift the
                                                                               cone, will allow air to escape, and will cause a fall of the pressure
Ex. 1: Draw the diagram of immediate effects of any regulator known to you.    z inside B; conversely, a movement up at L will make z rise.
Ex. 2: (Continued.) Think of some other parameters whose change would affect      The air pressure in B works in opposition to a heavy weight P,
    the regulator’s working; add them to the diagram.
                                                                               which IS continued upwards as a pillar, the whole weight being
12/20. A variant of this class, worth mention for the sake of com-             able to move only up or down. The pillar carries two pivots, K and
pleteness, is that in which the regulating mechanism becomes
active only intermittently.
   A reservoir tank, for instance, may have the level of fluid in it
kept between two given levels by a siphon which has its inner
opening at the lower level and its bend at the upper level. If the
supply is usually greater than the demand, the siphon, by coming
into action when the fluid reaches the upper level and by stopping
its action when it reaches the lower, will keep the level within the
desired range.
   Many physiological regulators act intermittently. The reaction
to cold by shivering is such a case. This particular reaction is of
special interest to us (compare S.12/4) in that activity in the regu-
lator can be evoked either by an actual fall in the bodily tempera-
ture (error-control, from E) or, before the body has had time to
cool, by the sight of things that will bring cold (control from D).

                  TH E P O WER A M P L IFIE R
12/21. The fact that the discussion in this chapter has usually
referred to the output E as being constant must not be allowed to
obscure the fact that this form can cover a very great number of
cases that, at first sight, have no element of constancy in them. The
subject was referred to in S.11/15. Here we shall consider an appli-                                        Fig. 12/21/1
cation that is important in many ways already, and that will be
needed for reference when we come to Chapter 14. I refer to those              M. M is pivot for a strong bar G, which is fixed at one end, F Thus
regulators and controllers that amplify power.                                 if P moves upwards, M must move upwards by the same amount,
   Power amplifiers exist in many forms. Here I shall describe                 and G’s free end H must move upwards by twice the distance.
only one, selecting a form that is simple and clear (Fig. 12/21/1).               Now let us see what happens if L is moved. Suppose the opera-
   Compressed air is supplied freely at A and makes its way past               tor lifts L by one inch. The other end (V) falls at once by one inch
the constriction C before either going into the bellows B or escap-            the valve is more obstructed, less air escapes, and more accumu-
ing at the valve V. The pressure at A is much higher than the usual            lates in B, sending up the pressure. The increased pressure will lift
working pressure in B, and the aperture at C is small, so air flows            P, and thus M and H. Thus H’s movements tend simply to copy
past C at a fairly constant rate. It must then either escape at V or           L’s. (We can notice that the upward movement of P (L being fixed
accumulate in B, driving up the pressure z. How fast the air escapes           after its one inch rise) will make the valve V open, so the response
at V, where a hole is obstructed to some degree by a cone, depends             of the whole system to L’s movement will be self-limiting, for the
on the movement up or down (x) of the cone, which is attached to               feedback is negative; subject to certain quantitative details, which

                                   238                                                                         239
               A N IN T R O D U C T IO N T O C Y BERNETI CS                              THE ERROR-CONTROLLED REGULATOR

would require exact treatment in any particular embodiment, the                This, for instance, may be the case in wild life when a prey
system is thus stable at a state of equilibrium whose position is           attempts to regulate against an attack by a predator, when the
determined by L’s position.)                                                whole struggle progresses through alternating stages of threat and
   The whole can thus also be regarded as a stable system that acts         parry. Here the predator’s whole attack consists of a sequence of
so that, while a movement of, say, one inch at L would tend to              actions D1, D2, D3 …, each of which evokes a response, so that the
cause, at V, a movement of one inch also, the reaction of the sys-          whole response is also a sequence, R1, R2, R3, …,The whole strug-
tem annuls this. So the system can also be regarded as one that             gle thus consists of the double sequence
acts so as to keep the position of V constant.
   We can now see how it can become a power amplifier, and be                                    D1, R1, D2, R2, D3 , R3, …
used as a crane.                                                            The outcome will depend on some relation between the predator’s
   The designer takes care to see that the lever J is light, and that       whole attack and the prey’s whole response.
the valve is shaped so that the escaping air, or the pressure z, has           We are now considering an even more complex interpretation
little effect on the force required at L. He also takes care that B         of the basic formulation of S.11/4. It is common enough in the
shall have a large area of action on P, and that the average work-          biological world however. In its real form it is the Battle of Life;
ing pressure z shall be high (with the pressure at A higher still). If      in its mathematical form it is the Theory of Games and Strategies.
he is successful, a small force at L, raising it through one inch, will     Thus in a game of chess the outcome depends on what particular
be sufficient to evoke a large force at H sufficient to raise a heavy       sequence of moves by White and Black
mass through the same distance. Thus a force of 1 lb. moving
through one inch at L may result in a force of 1000 lbs. moving                                 W1, B1, W2, B2, W3 , B3, …
through one inch at H. It is thus a work- (or power-) amplifier.            has been produced. (What was called a “move” in S.11/4 corre-
   So far it has given merely a simple and clear exemplification of         sponds, of course, to a play here.)
the principles of regulation and control described earlier. Later              This theory, well founded by von Neumann in the ’30s, though
(S.14/1) we shall return to it, for we shall have to be clear about         not yet fully developed, is already too extensive for more than
how we can have, simultaneously, a law saying that energy cannot            mention here. We should, however, take care to notice its close
be created, and also a power-amplifier.                                     and exact relation to the subject in this book. It will undoubtedly
                                                                            be of great scientific importance in biology; for the inborn char-
Ex. 1: How many degrees of freedom for movement have the three bodies, P,   acteristics of living organisms are simply the strategies that have
    J, G?                                                                   been found satisfactory over centuries of competition, and built
Ex. 2: Modify the arrangement so as to make H move oppositely to L while    into the young animal so as to be ready for use at the first demand.
    keeping the equilibrium stable.                                         Just as many players have found “P—Q4” a good way of opening
Ex. 3: Modify the arrangement so that the equilibrium is unstable.          the game of Chess, so have many species found “Grow teeth” to
                                                                            be a good way of opening the Battle of Life.
                                                                               The relation between the theory of games and the subjects
                G A M ES A N D S TR A T E GIE S                             treated in this book can be shown precisely.
                                                                               The first fact is that the basic formulation of S.11/4—the Table of
12/22. The subjects of regulation and control are extremely exten-          Outcomes, on which the theory of regulation and control has been
sive, and what has been said so far only begins to open up the sub-         based—is identical with the “Pay-off matrix” that is fundamental in
ject. Another large branch of the subject arises when D and R are           the theory of games. By using this common concept, the two theories
vectors, and when the compounding that leads eventually to the              can readily be made to show their exact relation in special cases.
outcome in T or E is so distributed in time that the components of             The second fact is that the theory of games, as formulated by
D and R occur alternately. In this case the whole disturbance pre-          von Neumann and Morgenstern, is isomorphic with that of certain
sented and the whole response evoked each consists of a sequence            machines with input. Let us consider the machine that is equiva-
of sub-disturbances and sub- responses.                                     lent to his generalised game (Fig. 12/22/1). (In the Figure, the let-
                                  240                                                                       241
             A N IN T R O D U C T IO N T O C Y BERNETI CS                          THE ERROR-CONTROLLED REGULATOR

ters correspond with those by von Neumann in his Chapter 2,           retain their values and his strategy will be unchanged; but if dis-
which should be consulted; his T’s do not correspond to the usage     satisfied (i.e. if the payment falls below some critical value) the
in this book.)                                                        step-functions will change value, and the loser, at the next play,
   There is a machine M with input. Its internal structure (its       will use a new strategy.
transformations) is known to the players Ti It has three types of        A related subject is the theory of military codings and de-cod-
input: Γ, V, and T. A parameter Γ, a witch perhaps, determines        ings. Shannon’s Communication theory of secrecy systems has
which structure it shall have, i.e. which game is to be played.       shown how intimately related are these various subjects. Almost
Other inputs Vi allow random moves to be made (e.g. effects           any advance in our knowledge of one throws light on the others.
from a roulette wheel or pack of shuffled cards to be injected; cf.      More than this cannot be said at present, for the relationships
S.12/15). Each player, Ti, is a determinate dynamic system, cou-      have yet to be explored and developed. It seems to be clear that the
pled to M both ways. He receives information from M by speci-         theory of regulation (which includes many of the outstanding prob-
                                                                      lems of organisation in brain and society) and the theory of games
                                                                      will have much to learn from each other. If the reader feels that
                                                                      these studies are somewhat abstract and devoid of applications, he
                                                                      should reflect on the fact that the theories of games and cybernetics
                                                                      are simply the foundations of the theory of How to get your Own
                                                                      Way. Few subjects can be richer in applications than that!

                                                                      12/23. We are now at the end of the chapter, and the biologist may
                                                                      feel somewhat dissatisfied, for this chapter has treated only of sys-
                                                                      tems that were sufficiently small and manageable to be understood.
                                                                      What happens, he may ask, when regulation and control are
                                                                      attempted in systems of biological size and complexity ? What hap-
                                                                      pens, for instance, when regulation and control are attempted in the
                                                                      brain or in a human society?
                                                                         Discussion of this question will occupy the remaining chapters.
                             Fig 12/22/1

fied channels Ii and then acts determinately on M. The site of
connexion of the I’s is defined by Γ. Effects from each T,
together with those of the other T’s and the V’s, exert, through M,
complex controls over the dials G. When the play, i.e. trajectory,
is completed, the umpire H reads the G’s and then makes corre-
sponding payments to the T’s.
   What we have here is evidently the case of several regulators,
each trying to achieve a goal in G, working simultaneously, and
interacting competitively within M. (The possibility of competi-
tion between regulators has not been considered explicitly in these
chapters till now.)
   If the system is ultrastable, each T’s behaviour will be deter-
mined by parameters, behaving as step-functions. If a particular
player is “satisfied” by the payment from H, his parameters will

                                242                                                                   243
                                                                                        REGULATING THE VERY LARGE SYSTEM

                                                                           lated with the variety in D for several reasons. If T is made of many
                                                                           parts, and there is uncertainty about the initial state of any part, then
                                                                           that variety will be allocated to D (S. 11/19); so in general, other
Chapter                                                             13     things being equal, the greater the number of parts the greater the
                                                                           variety in D. Secondly, if each part is not completely isolated from
                                                                           the world around, each part’s input will contribute some variety
R E G U L A TIN G TH E V ER Y LARGE                                        which will be allocated to D; so in general, the greater the number of
                                                                           parts the greater the number of components in D; and therefore, if
                S Y S TEM                                                  the components have some independence, the greater the variety in
                                                                           D. (There may be other reasons as well but these will suffice.)
13/1. Regulation and control in the very large system is of pecu-             Thus, when the effects of size are distinguished from those that
liar interest to the worker in any of the biological sciences, for         affect the variety in D, it will usually be found that the former is,
most of the systems he deals with are complex and composed of              in itself, irrelevant, and that what matters is the latter.
almost uncountably many parts. The ecologist may want to regu-                It now follows that when the system T is very large and the
late the incidence of an infection in a biological system of great         regulator R very much smaller (a common case in biology), the
size and complexity, with climate, soil, host’s reactions, preda-          law of Requisite Variety is Likely to play a dominating part. Its
tors, competitors, and many other factors playing a part. The              importance is that, if R is fixed in its channel capacity, the law
economist may want to regulate against a tendency to slump in a            places an absolute limit to the amount of regulation (or control)
system in which prices, availability of labour, consumer’s                 that can be achieved by R, no matter how R is re-arranged inter-
demands, costs of raw materials, are only a few of the factors that        nally, or how great the opportunity in T. Thus the ecologist, if his
play some part. The sociologist faces a similar situation. And the         capacity as a channel is unchangeable, may be able at best only to
psychotherapist attempts to regulate the working of a sick brain           achieve a fraction of what he would like to do. This fraction may
that is of the same order of size as his own, and of fearful com-          be disposed in various ways —he may decide to control outbreaks
plexity. These regulations are obviously very different from those         rather than extensions, or virus infections rather than bacillary—
considered in the simple mechanisms of the previous chapter. At            but the quantity of control that he can exert is still bounded. So too
first sight they look so different that one may well wonder                the economist may have to decide to what aspect he shall devote
whether what has been said so far is not essentially inapplicable.         his powers, and the psychotherapist may have to decide what
                                                                           symptoms shall be neglected and what controlled.
13/2. This, however, is not so. To repeat what was said in S.4/18,            The change in the point of view suggested here is not unlike that
many of the propositions established earlier are stated in a form          introduced into statistics by the work of Sir Ronald Fisher. Before
that leaves the size of the system irrelevant. (Sometimes the              him, it was taken for granted that, however clever the statistician,
number of states or the number of variables may be involved, but           a cleverer could get more information out of the data. Then he
in such a way that the proposition remains true whatever the               showed that any given extraction of information had a maximum,
actual number.)                                                            and that the statistician’s duty was simply to get near the maxi-
   Regulation in biological systems certainly raises difficult prob-       mum— beyond that no man could go. Similarly, before Shan-
lems —that can be admitted freely. But let us be careful, in admit-        non’s work it was thought that any channel, with a little more
ting this, not to attribute the difficulty to the wrong source.            skill, could be modified to carry a little more information. He
Largeness in itself is not the source; it tends to be so regarded partly   showed that the engineer’s duty is to get reasonably near the max-
because its obviousness makes it catch the eye and partly because          imum, for beyond it no-one can go. The law of Requisite Variety
variations in size tend to be correlated with variations in the source     enforces a similar strategy on the would-be regulator and control-
of the real difficulty. What is usually the main cause of difficulty is    ler: he should try to get near his maximum—beyond that he can-
the variety in the disturbances that must be regulated against.            not go. Let us therefore approach the very large system with no
   The size of the dynamic system that embodies T tends to be corre-       extravagant ideas of what is achievable.

                                 244                                                                         245
              A N IN T R O D U C T IO N T O C Y BERNETI CS                           REGULATING THE VERY LARGE SYSTEM

13/3. Before we proceed we should notice that when the system is        13/5. Constraints. What this means, by the law of Requisite Vari-
very large the distinction between D, the source of the distur-         ety, is that the variety in the disturbances D is not really as large
bances, and T, the system that yields the outcome, may be some-         as it seems; in other words, by S.7/8, the disturbances show a con-
what vague, in the sense that the boundary can often be drawn in        straint.
a variety of ways that are equally satisfactory.                           Thus the case we are led to is the following: D has many com-
   This flexibility is particularly well-marked among the systems       ponents, each of which shows variety. The first estimate of D’s
that occur on this earth (for the terrestrial systems tend markedly     variety puts it too high, and we are in danger of deducing (if the
to have certain general characteristics). On this earth, the whole      regulator’s capacity is given) that regulation of E to a certain
dynamic biological and ecological system tends to consist of            degree is not possible. Further examination of D may, however,
many subsystems loosely coupled (S.4/20); and the sub-systems           show that the components are not independent, that constraint
themselves tend to consist of yet smaller systems, again more           exists, and that the real variety in D is much lower than the first
closely coupled internally yet less closely coupled between one         estimate. It may be found that, with R’s capacity given, this
another; and so on. Thus in a herd of cattle, the coupling between      smaller variety can be regulated against, and full regulation or
members is much looser than the couplings within one member             control achieved at E. Thus the discovery of a constraint may con-
and between its parts (e.g. between its four limbs); and the four       vert “regulation impossible” to “regulation possible”. If R’s
limbs are not coupled as closely to one another as are the mole-        capacity is fixed, it is the only way.
cules within one bone. Thus if some portion of the totality is             We are thus led again to the importance and usefulness of dis-
marked out as T, the chief source D of disturbance is often other       covering constraints, and to yet another example of the thesis that
systems that are loosely coupled to T, and often sufficiently sim-      when a constraint exists it can be turned to use (S.7/14).
ilar to those in T that they might equally reasonably have been            Let us then consider the question of what constraints may occur
included in it. In the discussion that follows, through the rest of     in the disturbances that affect very large systems, and how they
the book, this fact must be borne in mind: that sometimes an            may be turned to use. The question is of major practical impor-
equally reasonable demarcation of T and D might have drawn the          tance, for if R’s capacity is not easily increased and the other meth-
boundary differently, without the final conclusions being affected      ods are not possible, then the law of Requisite Variety says that the
significantly. Arbitrary or not, however, some boundary must            discovery of a constraint is the would-be regulator’s only hope.
always be drawn, at least in practical scientific work, for other-
wise no definite statement can be made.                                 13/6. As was said in S.7/10, constraints do not fall into a few sim-
                                                                        ply- described classes. Having indicated some of the more inter-
13/4. When the system T is very large—when the organism as              esting possibilities in Chapter 7, I can only continue to mention
regulator faces a very large and complex environment with lim-          those classes that are of peculiar interest to us now. With this brief
ited resources—there are various ways that may make regulation          reference I shall pass by a vast subject, that comprises a major part
possible. (If regulation is not possible, the organism perishes—an      of all human activity.
extremely common outcome that must not be forgotten; but this              Accordingly we shall study one particular form of constraint. It
case needs no detailed consideration.)                                  is of great interest in itself, it will illustrate the thesis of the last
   Sometimes regulation may be made possible by a re-defining of        chapter, and it is of considerable practical importance in the reg-
what is to be regarded as acceptable—by a lowering of standards.        ulation of the very large system.
This is a somewhat trivial solution, though not to be forgotten as
a possibility.                                                                         RE P E T I T I VE DI S T URBANCE
   Another possibility is to increase the scope and power of R, until
R’s capacity is made adequate. This method must obviously never         13/7. Though little reference has been made to the fact in the last
be forgotten; but we shall give it no detailed consideration. Let us    few chapters, many disturbances (and the corresponding regula-
consider more fully the interesting case in which the regulation,       tory responses) are repetitive, especially if the system is viewed
apparently most difficult or impossible, is actually possible.          over a long time. The cough reflex is regulatory and useful not
                                 246                                                                      247
              A N IN T R O D U C T IO N T O C Y BERNETI CS                            REGULATING THE VERY LARGE SYSTEM

merely because it removes this particle of dust but because, in a        in that minute. There is also the long interval. After it has worked
lifetime, it removes particles again and again—as many times as          for a year someone may ask me whether it has proved a good reg-
are necessary. Most of the physiological regulators act again and        ulator over the year. While deciding the reply, I think of the whole
again, as often as is necessary. And the coastal lifeboat saves lives    year’s disturbance as a sort of Grand Disturbance (made up of
not once but again and again. If, in the last few chapters, we have      many individual disturbances, with a small d), to which it has pro-
spoken of “the regulatory response” in the singular, this is only        duced a Grand Response (made up of many individual responses,
because the single action is typical of the set, not because the set     with a small r). According to some standard of what a bath should
necessarily has only one element.                                        do over a year (e.g. never fail badly once, or have an average devi-
   So many of the well-known regulations are repetitive that it is       ation of less than 1/2°, etc.) I form an opinion about the Grand
difficult to find a regulation that acts once only. A possible exam-     Outcome— whether it was Good or Bad—and answer the ques-
ple is given by an observatory making plans so as to have every-         tion accordingly.
thing ready in case a supernova should occur, an event not likely           It should be noticed that what is “Good” in the Grand Outcome
to occur twice in the director’s lifetime. Various possibilities         does not follow necessarily from what is “good” (η) in the indi-
would have to be considered—in which part of the sky it might            vidual outcomes; it must be defined anew. Thus, if I go in for a
appear, whether during day or night, the spectral and other pecu-        lottery and have three tickets, a win on one (and consequent loss
liarities which would determine what particular type of plate and        on the other two) naturally counts as “Good” in the Grand Out-
filter should be used in photographing it, and so on. In making his      come; so here I good + 2 bad = Good. On the other hand, if I am
plans, the director would, in fact, draw up a table like that of S.11/   tried three times for murder and am found not guilty for one, the
4, showing the uncertainties (D) to be feared, the resources (R)         individual results are still I good + 2 bad, but in this case the
available, and the outcomes (E). Inspection of the table, as in Ex.      Grand Outcome must naturally count as Bad. In the case when the
11/4/4, would then enable him to decide whether, in all cases, he        individual disturbances each threaten the organism with death,
would get what he wanted.                                                Good in the Grand Outcome must naturally correspond to “good
   There are, therefore, cases in which the regulation has to be         in every one of the individual outcomes”.
exerted against a non-repetitive disturbance, but they are uncommon.        These Grand Disturbances are vectors whose components are
   From here on we shall consider the case in which the distur-          the individual disturbances that came hour by hour. These vectors
bance, and the regulatory response, occur more than once; for            show a form of constraint. Thus, go back to the very first example
such cases show constraint, of which advantage can be taken.             of a vector (S.3/5). It was A; contrast it with B:
                                                                                        A                                B
13/8. The constraint occurs in the following way.                             Age of car: ............     Age of Jack’s car: ............
   The basic formulation of the regulatory process referred to a set          Horse power: ............     ,, ,, Jill’s   ,, ............
of disturbances but assumed only that the separate elements in the            Colour:      ............     ,, ,, Tom’s ,, ............
set were distinct, nothing more. Like any other quantity, a distur-
bance may be simple or a vector. In the latter case, at least two        Obviously B is restricted in a way that A is not. For the variety in
main types are distinguishable.                                          the left-hand words in A’s three rows is three; in B’s three rows it
   The first type was discussed in S.11/17: the several components       is one.
of the disturbance act simultaneously; as an air-conditioner might,         Vectors like B are common in the theory of probability, where
at each moment, regulate both temperature and humidity.                  they occur under the heading “sampling with replacement”. Thus,
   The second type is well shown by the thermostatically-control-        the spin of a coin can give only two results, H or T. A coin spun
led water bath, it can be regarded as a regulator, over either short     six times in succession, however, can give results such as (H, H,
or long intervals of time. Over the short interval, “the distur-         T, H, T, H), or (T, T, H, H, T, H), and so on for 64 possibilities.
bance” means such an event as “the immersion of this flask”, and         (Compare S.9/9.)
“its response” means “what happens over the next minute”. Its               What is important here is that, in such a set of vectors (in those
behaviour can be judged good or bad according to what happened           whose components all come from the same basic class, as in B),
                                 248                                                                      249
              A N IN T R O D U C T IO N T O C Y BERNETI CS                            REGULATING THE VERY LARGE SYSTEM

two varieties can be distinguished: there is (i) the variety within       verified that this sequence, as a protocol, defines the machine with
the basic class (2 for the coin, the number of distinct possible ages     input:
in B), and (ii) the variety built up by using the basic class n times                              ↓      α     β     γ
over (if the vector has n components). In the example of the coin,                                 a      α     α     α
the two varieties are 2 and 64. In general, if the variety within the                              b      β     β     β
basic class is k, and the vector has n components, each a member                                   c      γ     γ     γ
of the class, then the two varieties are, at most, k, and kn. In par-
ticular it should be noticed that if the variety in the basic class has   Thus when the Grand Disturbance is a vector whose components
some limit, then a suitably large value of n will enable the second       are all from a basic set of disturbances, the Grand Response can
variety to be made larger than the limit.                                 either be a vector of equal variety or the output of a suitable
                                                                          machine with input.
13/9. These considerations are applicable in many cases of regu-          13/10. Suppose that the regulation discussed throughout Part III is
lation. Suppose, for definiteness, that the water bath may be             the responsibility of some entity Q, often the possessor of the
affected in each minute by one of the three individual distur-            essential variables E. Through the previous chapters we have stud-
bances:                                                                   ied how the regulator R must behave. We have now seen that in the
   (a) a draught of air cooling it,                                       case when the disturbances are repetitive, Q has the option of
   (b) sunshine warming it,                                               either being the regulator (i.e. acting as R) or of building a machine
   (c) a cold object being immersed in it.                                that, once built, will act as R and will carry out a regulation of
                                                                          indefinite length without further action by Q. We have thus arrived
  The variety is three, but this number is hardly representative of       at the question: should Q achieve the regulation directly, by his
the variety that will actually occur over a long time. Over a year,       own actions, or should he build a machine to undertake the work?
say, the Grand Disturbance is a long vector, with perhaps some               The question would also have arisen for another reason. From
hundreds of components. Thus one Grand Disturbance might be               the beginning of Part III we took for granted that the regulator
the vector (i.e. the sequence) with 400 components:                       existed, and we then asked what properties it must have. Nothing
           (a, b, a, b, b, a, c, b, b, c, c, b, b, …c, b, a, b).          was said about how the regulator came to be made, about the fac-
                                                                          tors that brought it into existence. Thus, having seen in S.10/5 how
And if the individually correct responses are, respectively α, β          advantageous it would be if the organism could have a regulator,
and γ, then the Grand Response appropriate to this particular Dis-        we showed no means by which the advantage could be gained.
turbance would be the vector (i.e. sequence)                                 For both these reasons we must now start to consider how a reg-
         (α, β, α, β, β, α, γ, β, β, γ, γ, β, β, …γ, β, α, β).            ulatory machine is actually to be designed and made. Here we
                                                                          shall be thinking not so much of the engineer at his bench as of the
  If there is no constraint in the Disturbance from component to          brain that, if it is to achieve regulation in its learned reactions,
component as one goes from left to right, the whole set of possible       must somehow cause the development of regulatory machinery
Disturbances has variety of 3400; and the Grand Response must             within the nervous material available; or of the sociologist who
have at least as much if full regulation is to be obtained.               wants a regulatory organisation to bring harmony into society.
  We now come to the point: the double sequence, as it occurred              To understand what is involved, we must look more closely at
in time, shows the characteristic constraint of a machine, i.e. it        what is implied, in principle, in the “designing” of a regulatory
defines a machine up to an isomorphism. Thus, in the example              machine.
just given, the events occurred in the order, from left to right:
                                                                                       DE S I GNI NG T HE RE GUL AT OR
                        a b a b b a c b b c c …, etc.
                      α β α β β α γ β β γ γ …, etc.                       3|11. Design as communication. Let us forget, temporarily, all
                                                                          about “regulation”, and turn simply to certain questions related to
(though not necessarily at equal time-intervals). It is now easily        the design and construction of a machine, any machine.
                                 250                                                                      251
              A N IN T R O D U C T IO N T O C Y BERNETI CS                            REGULATING THE VERY LARGE SYSTEM

  Our treatment of it, while losing nothing in precision, must be            It will be noticed that the concepts of design or construction are
very broad—that is to say, abstract—for, as biologists, we want to        essentially applicable to sets, in spite of the common linguistic use
consider machines of far wider type than those of steel and brass.        of the singular. (Compare S.7/3.) Thus “the gene-pattern deter-
Within the formula                                                        mines the form of the heart” is a shorthand way of saying that ele-
                 Entity Ω designs machine M                               ments in the set of gene-patterns among different species can be
                                                                          put into correspondence with those in the set of possible hearts in
we want to include such cases as                                          the various species, like the wires at the two ends of a telephone
 (l) The genes determining the formation of the heart.                    cable. Thus the act of “designing” or “making” a machine is
 (2) A mechanic making a bicycle.                                         essentially an act of communication from Maker to Made, and the
 (3) One part of the brain determining the internal connexions in         principles of communication theory apply to it. In particular the
     a nerve-net.                                                         measures that were developed for treating the case in which vari-
 (4) A works-manager laying out a factory to get production go-           ous possible messages are reduced to one message can now be
     ing along certain lines.                                             applied to the case when various possible machines are reduced to
 (5) A mathematician programming an automatic computer to                 one machine.
     behave in a certain way.                                                A useful conceptual device for forcing this aspect into promi-
                                                                          nence is to imagine that the act of designing has to take place
   What we shall be concerned with, if we hold to the cybernetic          through the telephone, or by some other specific channel. The
point of view, is not the more obvious processes of shaping or            quantities of variety can then readily be identified by identifica-
assembling pieces of matter, but with the less obvious questions of       tion of the actual quantity of information that will have to be trans-
what determines the final model, of how it comes to be selected.          mitted.
We are interested in tracing long chains of cause and effect, so that
we can relate a set of possible initial causes to a set of final          13/12. When a designer selects the final form of the machine,
machines issuing as consequence; as a telephone mechanic, with a          what does “selecting” the machine mean in terms of the general
cable of a hundred wires, relates each one going in at one end to         concepts of this book? Consider the following sequence of exam-
some one coming out at the other. By treating the matter in this          ples, in which the final machine is a radio receiver.
way we shall find that certain quantitative relations must hold; on         The first is the case of the buyer who has three machines before
them we can base the ideas of the last chapter. Throughout, we            him, and he selects one. The second case, equivalent to the first
shall be exemplifying the thesis of D. M. MacKay: that quantity of        from the abstract point of view, occurs when the designer of a
information, as measured here, always corresponds to some quan-           radio set, wavering between three possible circuits, finally selects
tity, i.e. intensity, of selection, either actual or imaginable.          one. The third case, abstractly equivalent to the previous two,
   The concepts of selecting, designing, constructing, building           occurs when the owner of a radio set that has three circuits built
(briefly, in any way being responsible for the eventual appearance        into it, moves a switch to one of three positions and thereby
of) an actual machine share a common property, when one identi-           selects which circuit shall actually be used. Thus, from the
fies and measures the varieties concerned in the process. What            abstract point of view, selecting one machine from three is equiv-
might turn up as M has variety—an embryo might produce any one            alent to selecting one value from three at a parameter. For exam-
of many forms of muscular blood-pump. In fact, the gene-pattern in        ple, suppose the choice is to be between the three machines α, β
Lumbricus leads to the production of an earthworm’s heart, the            and γ (each on the states a and b);
gene-pattern in Rana leads to the production of a frog’s heart, and
that in Homo to a man’s heart. Control, by the gene-pattern over the                  α: ↓ ba ab        β: ↓ aa ab     γ: ↓ ba bb
heart, is clearly involved. So too is regulation, for in whatever state
the molecules in Lumbricus happen to be initially (there being vari-      Suppose β is selected and the selector finishes with the machine
ety in the possibilities), under the action of the gene-pattern the                                         a b
                                                                                                          ↓ a a
variety disappears, and a heart of standard worm’s form appears.
                                 252                                                                      253
              A N IN T R O D U C T IO N T O C Y BERNETI CS                          REGULATING THE VERY LARGE SYSTEM

Abstractly this selection is identical with having initially a         (In the transformation, dots represent values that do not matter.)
machine with three-valued input:                                       If now µ is chosen, one part gives the machine
                            ↓       a       b                                                                a b
                                                                                                        ↓
                            α       b       a                                                                b a
                            β       a       a
                            γ       b       b                          the other components being ignored; while if v is chosen, the
                                                                       other part gives
and then deciding that the input shall be fixed permanently at β.
                                                                                                            p q r
(The processes are identical in the sense that if some observer                                     ↓
watches only the results of the processes, he cannot tell which has                                         r q r
occurred except by reference to other, unmentioned, criteria.)
   In this example, fixing the input at β leaves the resulting           Thus the initial formulation is really quite general.
machine an absolute system, without input. If the result of the
selection is to be a machine with input, then the original machine     13/14. Design in a Black Box. It will be noticed that the operation
must start with two or more inputs, so that the fixing of one by the   of “design”, as understood here, can be carried out within a Black
act of design selection leaves the others free for further variation   Box, if it has an input. In fact, the owner of the radio set (S.13/12),
as ordinary inputs.                                                    if he knows nothing of its contents, but does know how the output
   The designer’s act of selecting one model from many is equivalent   is affected by the switch, does perform the act of “design in a Black
to some determining factor fixing an input at a permanent value.       Box” when he sets the switch and gets the desired behaviour.
                                                                          Other examples extend the range of the same theme. The Black
                                                                       Box, or the radio set, may be dominated by another machine,
13/13. (This section treats a minor complication.)                     whose activities and values determine the switch’s position. If so,
  In the examples above, the choice has been between machines          we can say (provided we remember the sense in which we are
whose transformations have had the same set of operands, i.e. the      using the words) that the dominating machine, when it sets the
same set of states in the machine. What if the choice were to lie      switch at a particular position, “designs” the radio set. What is
between, say,                                                          important is that the dominating machine shows to the radio set
                                                                       those properties that are objectively shown by the behaviour of a
                    a b                         p q r                  designer.
                ↓             and       ↓             ?                   The same point of view may be applied to the brain, and we can
                    b a                         r q r
                                                                       see how one part of a brain can show towards another part the
Can such a selection be represented by the fixing of an input          objective behavioural relationship of designer to machine. We can
value? Such a choice might occur in the early stages of design, as     begin to see how one part—a basal structure perhaps—can act as
when the first decision is made whether the components shall be        “designer” towards a part it dominates, towards a neural network,
electronic or hydraulic.                                               say.
  In fact this case is contained in the former, and can be repre-         Thus the idea of one machine designing another can be stated in
sented in it by a mere change of notation. Thus the choice just        exact and general terms—exact in the sense that experiment can
mentioned can equally be represented as that between µ and v in        be used to show objectively whether or not this relationship holds.
the (reducible) machine, whose states are couples:
                                                                                      QUANT I T Y OF S E L E CT I ON
               ↓    (a,p) (a,q) (a,r) (b,p) (b,q) (b,r)
               µ    (b .) (b .) (b .) (a .) (a .) (a .)                13/15. This aspect of design—of the reduction in numbers that
               ν     (. r) (. q) (. r) (. r) (. q) (. r)               occurs when the many initial possibilities are reduced to the final
                                                                       few or one—can easily be measured. We can use the same scales
                                 254                                                                        255
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                         REGULATING THE VERY LARGE SYSTEM

as are used for measuring variety and information (S.7/7 and 9/11)                    13/16. Exactly the same measure may be applied to the design of
and they can be measured either directly or logarithmically.                          a Markovian machine. Thus the variety between the two Marko-
  The measure, besides being convenient, has the natural prop-                        vian machines
erty that it specifies the capacity that the channel C must have
                                                                                                  ↓                             ↓
                       Designer → Machine                                                            1/3 1/2 1/4        and       1/3 1/3 1/3
                                 C                                                                     1/3 . 1/2                    1/3 1/3 1/3
                                                                                                       1/3 1/2 1/4                  1/3 1/3 1/3
if the transmission of the necessary variety or information from                      is just 1 bit, for we are choosing between two objects, whose inner
Designer to Machine is to be possible.                                                contents—the various fractions—are here irrelevant. (This quantity
   It will be noticed that this method does nothing to answer the                     of 1 bit is, of course, different from the 1.58 bits that would be asso-
question “how much design is there in this machine (without ref-                      ciated with the right-hand matrix regarded as an information source
erence to what it might have been)?” for the measure exists only                      that produces 1 58 bits on the average, at each step (S.9/12).)
over the set of possibilities. It applies, not to the thing that results,
but to the act of communication (S.13/11).
   The exercises will help to give reality to the somewhat abstract                   13/17. Selection in stages. The process of selection may be either
arguments, and will show that they agree satisfactorily with what                     more or less spread out in time. In particular, it may take place in
is evident intuitively.                                                               discrete stages.
                                                                                         The driver about to choose a new car often proceeds in this way.
                                                                                      He first says, perhaps, “It must cost less than £1000”. This crite-
Ex. 1: At one stage in the design of a certain electrical machine, three distinct     rion effects some reduction in the number of possibilities. Then
    ohmic resistances must have their values decided on. Each may have any
    one of the values 10, 15, 22, 33, 47, 67 or loo ohms independently. How           perhaps he adds that it must also be able to take five people. So he
    much variety must the designer supply (by the law of Requisite Variety) if        goes on. Each new criterion makes the surviving possibilities
    the possibilities are to be reduced to one?                                       fewer. If he can buy only one car then the criteria must eventually
Ex. 2: (Continued. A similar three is to have its resistances selected to the near-   reduce the possibilities to one. Somehow this reduction must be
    est ohm, i.e. from the set 10, 11, 12, …, 99, 100. How much variety must          made, even if the spin of a coin has to be used as final selector.
    the designer now supply ?                                                            The abstract selection (or design) of a machine can similarly
Ex. 3: Three resistances can each have the value of 10, 20 or 30 ohms. If they        take place in stages. Thus suppose the machine has the four states
    are connected in parallel, how much variety must the designer supply if the       a, b, c, d. The transformation T
    possible electrical properties are to be reduced to one ?
Ex. 4: How much design is needed if the decision lies between the two                                                a b c d
    machines, both with states a, b, c, d:                                                                      T: ↓ * * * *

                   a   b    c   d               a   b    c   d                        —in which the asterisks are not yet decided on—leaves all possi-
                ↓ b a b c             and    ↓ c b c a ?                              bilities open. The change to transformation U
                                                                                                                     a b c d
Ex. 5: How much design goes to the production of a penny stamp, (i) as con-                                     U: ↓ c * b *
    sisting of 15,000 half-tone dots each of which may be at any one of 10
    intensities? (ii) as the final form selected by Her Majesty from three sub-
    mitted forms? Explain the lack of agreement.                                      represents a partial selection. U also represents a set of transfor-
Ex. 6: How much variety must be supplied to reduce to one the possible
                                                                                      mations, though a smaller set. So does V:
    machines on a given n states? (Hint: Ex. 7/7/8.)                                                                  a     b c d
Ex. 7: (Continued.) Similarly when the machine’s states number n and the                                      V: ↓
    input’s states (after design) number i.                                                                          b or c * * *
                                       256                                                                                257
                 A N IN T R O D U C T IO N T O C Y BERNETI CS                                      REGULATING THE VERY LARGE SYSTEM

which excludes all single-valued transformations that include the                     first card is led has been selected partly by the bids of the players and
transitions a → a or a → d. A machine can thus be selected in                         partly by chance—by the outcome of the statistically standardised
stages, and the stages may be defined in various ways.                                act of shuffling—which has selected the distribution of the cards.
   What is fundamental quantitatively is that the overall selection                   (Compare Fig. 12/22/1.) The Rules of Bridge ensure, in fact, that a
achieved cannot be more than the sum (if measured logarithmically)                    definite part of the whole determination shall be assigned to chance,
of the separate selections. (Selection is measured by the fall in vari-               i.e. to shuffling carried out in a prescribed way. Such an appeal to
ety.) Thus if a pack of cards is taken, and a 2-bit selection is made                 chance was frequently used in the past as a method for supplement-
and then a 3-bit, a unique card cannot be indicated unless a further                  ing selection. The Roman general, for instance, after having made
selection of at least 0.7 bits is made, for log2 52 is 5.7. The limitation            many decisions, would often leave the remainder to be determined
is absolute, and has nothing to do (if a machine is selected) with the                by some other factor such as the flight of the next flock of birds, or
type of machine or with the mode of selection used.                                   the configurations shown in the entrails of a freshly-killed sheep.
                                                                                      (Supplementation was used earlier in this book in S.4/19 and 12/15.)
Ex. 1: How many possibilities are removed when, to the closed, single-valued             In scientific work the first deliberate use of wholly uncorrelated
    transformation on a, b and c with all 27 forms initially possible, the restric-
    tion is added “It must have no state of equilibrium” ?                            selectors to provide “random” determination to complete the
Ex. 2: (Continued.) When the restriction is “It must have three states of equilib-    selection imposed by the experimenter, was made apparently by
    rium” ?                                                                           Sir Ronald Fisher; for he first appreciated its fundamental impor-
Ex. 3: In logarithmic measure, how much selection was exerted in Ex. I ?              tance and usefulness.
*Ex. 4: How much selection is exerted on an absolute system of n states, a1, a2,         (By saying a factor is random, I do not refer to what the factor
    …, an, with all transformations initially possible, if the restriction is added   is in itself, but to the relation it has with the main system. Thus the
    “It must contain no state of equilibrium?” (Hint: To how many states may          successive digits of π are as determinate as any numbers can be,
    al now transform, instead of to the n previously?) (Cf. Ex. 1.)
                                                                                      yet a block of a thousand of them might serve quite well as ran-
*Ex. 5: (Continued.) To what does this quantity tend as n tends to infinity?
    (Hint: Calculate it for n = 10, 100, 1000.) (This estimation can be applied       dom numbers for agricultural experiments, not because they are
    to the machine of S.12/15.)                                                       random but because they are probably uncorrelated with the
*Ex. 6: If, as described in this section, the cards of a shuffled pack are searched   peculiarities of a particular set of plots. Supplementation by
    (without further shuffling) one by one in succession for a particular card,       “chance” thus means (apart from minor, special requirements)
    how much information is gained, on the average, as the first, second, third,      supplementation by taking effects (or variety) from a system
    etc., cards are examined? (Systematic searching.)                                 whose behaviour is uncorrelated with that of the main system. An
*Ex. 7: (Continued.) How much if, after each failure, the wrong card is               example was given in S.12/15. Thus if a chance variable were
    replaced and the pack shuffled before the next card is drawn? (Random
    searching.)                                                                       required, yesterday’s price of a gold-share might be suitable if the
                                                                                      main system under study was a rat in a maze, but it would not be
                                                                                      suitable if the main system were a portion of the financial-eco-
13/18. Supplementation of selection. The fact that selection can                      nomic system.)
often be achieved by stages carries with it the implication that the
whole selection can often be carried out by more than one selec-                                   S E L E CT I ON AND MACHI NE RY
tor, so that the action of one selector can be supplemented by the
action of others.                                                                     13/19. Selection by machine. In the preceding sections we have
   An example would occur if a husband, selecting a new car from                      considered the questions of communication involved when a
the available models, first decided that it must cost less than £1000,                machine is to be selected. Whatever does the selecting is, how-
and then allowed his wife to make the remainder of the selection. It                  ever, on general cybernetic principles, also to be considered as a
would occur again if the wife, having reduced the number to two                       mechanism. Thus, having considered the system
models, appealed to the spin of a coin to make the final decision.                                                 L→ M
   Examples are ubiquitous. (Those that follow show supplementa-
tion by random factors, as we shall be interested in them in the next                 when L acts so as to design or select the machine M, we must now
chapter.) At Bridge, the state of the game at the moment when the                     consider L as a machine, in some way acting as designer or selec-
                                       258                                                                              259
               A N IN T R O D U C T IO N T O C Y BERNETI CS                               REGULATING THE VERY LARGE SYSTEM

tor. How can a machine select? The answer must, of course, be                method that achieves the whole selection in the fewest steps is
given in terms compatible with those already used in this Part.              selection by successive dichotomies, so that the early selections
   Perhaps the simplest process of selection occurs when a machine           are between group and group, not between elements. This method
goes along a particular trajectory, so that after state i (say) it goes to   is much faster than the method of examining the N one by one,
state j (say) and not to any other of its states. This is the ordinary       seriatim. And if N becomes very large, the method of selecting
selection that a machine makes when its “message” (the protocol              among groups becomes almost incomparably faster. Lack of
from it) says that the machine has this transformation and no other.         space prohibits an adequate treatment of this important subject,
   Another process of selection shown by a machine is that noticed           but it should not be left until I have given an example to show
in S.7/24: every determinate machine shows selection as it                   something of how enormously faster the dichotomising method is.
reduces the variety in its possible states from the maximum ini-                Let us consider a really big selection. Suppose that, somewhere in
tially to the number of its basins finally.                                  the universe (as visible to the astronomer) there is a unique atom; the
   Another process of selection was treated in S.5/13, when one part         selector wants to find it. The visible universe contains about
of a whole can select from states of equilibrium in the other part by        100,000000 galaxies, each of which contains about 100000,000000
“vetoing” some of them. This is perhaps the most obvious form of             suns and their systems; each solar system contains about 300000
selection, for, as the two are watched, the imaginative observer can         bodies like the earth, and the earth contains about 1,000000,000000
almost hear the vetoing part say “… no good, still no good, I won’t          cubic miles. A cubic mile contains about 1000,000000,000000,000000
have it, still no good, Hold It!—yes, we’ll keep that permanently.”          dust particles, each of which contains about 10000,000000,000000
If a machine is to be built as a selector (perhaps to carry out the pro-     atoms. He wants to find a particular one!
gramme hinted at in the final section) it will, so far as I can see, have       Let us take this as a unit of very large-scale selection, and call
to be built to act in this way. It is the way of the second-order feed-      it 1 mega-pick; it is about 1 from 1073. How long will the finding
back in Fig. 5/14/1 (supplemented in S.12/15).                               of the particular atom take?
   There are doubtless other methods, but these will suffice for                Two methods are worth comparing. By the first, the atoms are
illustration, and they are sufficient to give definiteness to the idea       examined one at a time, and a high-speed electronic tester is used to
of a machine “selecting”; (though special consideration is hardly            examine a million in each second. Simple calculation shows that the
necessary, for in Shannon’s theory every act of communication is             number of centuries it would take to find the atom would require
also one of selection—that by which the particular message is                more than the width of this page to write down. Thus, following this
caused to appear).                                                           method dooms the selection to failure (for all practical purposes).
                                                                                In the second method he uses (assuming it possible) the method
                                                                             of dichotomy, asking first: is the atom in this half or that? Then,
13/20. Duration of selection. At this point a word should be said            taking what is indicated, is it in this half or that?. And so on. Sup-
about how long a given act of selection may take, for when actual            pose this could be done only at one step in each second. How long
cases are examined, the time taken may, at first estimate, seem too          would this method take ? The answer is: just over four minutes!
long for any practical achievement. The question becomes specially           With this method, success has become possible.
important when the regulator is to be developed for regulation of a             This illustration may help to give conviction to the statement
very large system. Approximate calculation of the amount of selec-           that the method of selection by groups is very much faster than the
tion likely to be necessary may suggest that it will take a time far         method of searching item by item. Further, it is precisely when the
surpassing the cosmological; and one may jump to the conclusion              time of searching item by item becomes excessively long that the
that the time taken in actually achieving the selection would have to        method of searching by groups really shows its power of keeping
be equally long. This is far from being the case, however.                   the time short.
   The basic principles have been made clear by Shannon, espe-
cially in his Communication theory of secrecy systems. He has
shown that if a particular selection is wanted, of 1 from N, and if          13/21. Selection and reducibility. What does this mean when a
the selector can indicate (or otherwise act appropriately) only as           particular machine is to be selected ? Suppose, for definiteness
to whether the required element is or is not in a given set, then the        that it has 50 inputs, that each input can take any one of 25 values,
                                  260                                                                         261
              A N IN T R O D U C T IO N T O C Y BERNETI CS                          REGULATING THE VERY LARGE SYSTEM

and that a particular one of the possible forms is sought. This         responsible entity Q (of S.13/10) has worked successfully to a
selection is just about 1 megapick, and we know that the attempt        goal With whatever variety the components were initially availa-
to select seriatim is hopeless. Can the selection be made by            ble, an with whatever variety the designs (i.e. input values) might
groups? We can if there can be found some practical way of              have varied from the final appropriate form, the maker Q acted in
grouping the input-states.                                              relation to the goal so as to achieve it. He therefore acted as a reg-
   A particular case, of great practical importance, occurs when        ulator. Thus the making of a machine of desired properties (in the
the whole machine is reducible (S.4/14) and when the inputs go          sense of getting it rather than one with undesired properties) is an
separately to the various sub-systems. Then the sequence: select        act of regulation.
the right value for part 1, on part 1’s input; select the right value      Suppose now that this machine of desired properties is the reg-
for part 2, on part 2’s input; and so on—corresponds to the selec-      ulator discussed throughout Part III—how is it to be made The
tion being conducted by groups, by the fast method. Thus, if the        answer is inescapable: by another regulator.
machine is reducible the fast method of selection can be used.             Is this a reduction ad absurdum of our whole position? I thin
   In fact, reducibility is extremely common in our terrestrial sys-    not. For the obvious question “where does it all start?” is readily
tems. It is so common that we usually take it for granted, but he       answered. As biologists, our fundamental fact (S.10/3) is that the
who would learn how to regulate the very large system must              earth has now existed for a long time, that selection has acted
become fully aware of it.                                               throughout this time, and that selection favours the appearance c
   To get some idea of how much the world we live in shows              regulators (S.10/5). These facts alone are sufficient to account for
reducibility, compare its ordinary behaviour with what would            the presence on the earth today of many good regulators. And n~
happen if, suddenly, the reducibility were lost, i.e. if every varia-   further explanation is necessary if it should be found that some o
ble had an effect, immediate or delayed, on every other variable.       these regulators have as goal the bringing of some mechanism to
The turning over of a page of this book, instead of being just that     standard form, even if the standard form is that of a regulator
and nothing more, might cause the lights to change, the table to        (with goal, of course, distinct from that of the first). The scientist
start moving, the clock to change its rate, and so on throughout the    would merely be mildly curious as to why something that could
room. Were the world really to be irreducible, regulation would         be done directly, in one stage, is actually done indirectly, in two.
be so difficult as to be impossible, and no organised form of life         We can thus answer this section’s question by saying that a reg-
could persist (S.7/17).                                                 ulator can be selected from some general set of mechanisms (man,
   The subject must be left now, but what was said in Design … on       non- regulatory) only by being either the survivor of some process
“Iterated systems”, and in the chapters that followed, expands the      of natural selection or by being made (another process of selection
thesis. Meanwhile we can draw the conclusion that if a responsi-        by another regulator.
ble entity Ω (S.13/10) is to design (i.e. select) a machine to act as
regulator to a very large system, so that the regulator itself is       13/23. Is not this making of the desired regulator by two stages
somewhat large, the achieving of the necessary selection within a       wasteful? That it should be arrived at in two stages suggests that
reasonably short time is likely to depend much on whether the           the problem of getting a regulator always has to be solved before
regulator can be made in reducible form.                                it can be tackled!
                                                                           Again, what does this imply when the very large system to be
13/22. Whence the Regulator? Now at last we can answer the              regulated is the social and economic world and the responsible
question that has been latent throughout Part III: how is the           entity Ω is some set, of sociologists perhaps, whose capacity, as a
desired regulator to be brought into being? The question was            regulator, is limited to that available to the members of the species
raised in S.13/10, but since then we have explored a variety of top-    Homo? Does this imply that no advance in regulation is possible
ics, which had to be discussed before the threads could be pulled       (for the regulator will have to be built by members of the species)?
together. Let us now survey the position.                                  It does not; for when regulation is achieved in stages—when a
  The process of arriving eventually at a particular machine with       regulator R1 acts so as to bring into existence a regulator R2—the
desired properties implies selection, and it also implies that the      capacity of R2 is not bounded by that of R1. The possibility arises
                                 262                                                                    263
              A N IN T R O D U C T IO N T O C Y BERNETI CS

that R2 may be of capacity greater than R1, so that an amplification
occurs. This possibility is studied in the next chapter, where we
shall see that, apart from being necessarily wasteful, the method
of regulation by stages opens up some remarkable possibilities.




                                 264
Chapter                                                             14

     AMPL IFYING R E GUL AT ION
14/1. What is an amplifier? An amplifier, in general, is a device
that, if given a little of something, will emit a lot of it. A sound
amplifier, if given a little sound (into a microphone) will emit a
lot of sound. A power-amplifier, such as the one described in
S.12/21, if given a little power (enough to move L) will emit a lot
of power (from H). And a money-amplifier would be a device
that, if given a little money, would emit a lot.
   Such devices work by having available a generous reservoir of
what is to be emitted, and then using the input to act as controller
to the flow from the reservoir. Rarely an amplifier acts by directly
magnifying the input, as does the cine-projectionist’s lens; but
more commonly it works by supplementation. Thus the
power-amplifier has some source that will provide power abun-
dantly (the compressed air at A in Fig. 12/21/1), and it is this
source that provides most of the power in the output, the input
contributing little or nothing towards the output. Similarly, the
work performed by the cranedriver on the control-handle does
nothing directly towards lifting the main weight, for the whole of
his work is expended in moving electrical or other switch gear.
   It will be seen that in the power amplifier (e.g. that of Fig. 12/21/
1) the whole process—that of lifting a heavy weight at H, by a
force at L—goes in two stages, by two coupled systems. It is this
separation into two stages that makes power-amplification possi-
ble, for otherwise, i.e. in one stage, the law of conservation of
energy would make any simple and direct amplification of power
impossible. Stage 1 consists of the movement, by the operator, of
the point L against the friction at K and the pressure at V; over this
stage energy, or power, is conserved strictly. Stage 2 consists of the
movement of compressed air into or out of B and the lifting of P,
G and H; over this stage, also, energy is conserved; for the energy
used when the weight at H is lifted is derived from the expansion
of the compressed air. Thus the whole system can be regarded as
composed of two systems, within each of which energy is con-
served strictly, and so coupled that forces of 0, 1, 2…dynes at L
correspond respectively to forces of 0, 1000, 2000,… dynes (or
                                 265
                A N IN T R O D U C T IO N T O C Y BERNETI CS                                           AMPLIFYING REGULATION

some other multiple) at H. It is the division into two stages that                   Obviously, both points of view are right. Designers of cranes
enables a power-amplifier to be built in spite of the law of conser-               should be well aware that they are not really amplifiers, but the
vation of energy, the point being that the energy supplied to the                  users of them should think of them as if they were.
input in stage 1 can be supplemented to give the output in stage 2.
  Sometimes the proportionality is important, as in the radio                      14/3. We can now see how we should view the question of ampli-
amplifier. Then the machine has to be made so that the ratio has                   fying regulation. During the designing (in this chapter) we shall
the same value all along the scale. In other cases the exact value                 have to be clearly aware that the designer is really achieving only
of the ratio is of little importance, as in the crane, the essential               a supplementation, by robbing some easily available and abun-
point in it being that the input values shall all be within some                   dant source of it. When he comes to use it, however (a matter for
given limit (that set by the strength of the crane driver’s arm) and               the future), he should forget the fact, and should know only that
that the output shall be supplemented generously, so that it much                  he is now like a workman equipped with power-operated tools,
exceeds the value of the input.                                                    able to achieve tasks impossible to the unaided workman.
Ex.: Design a “water-amplifier”, i.e. a device that, if water is pumped into the   14/4. Regulation and selection. In S.13/10 we started to consider
    input at x ml/see will emit, from its output, water at 100x ml/sec.            what would get the regulator (previously assumed to be given)
                                                                                   into actual existence, either as a formula for behaving, contained
14/2. The process of amplification can thus be looked at from two                  within the organism (Q) that wants the regulation, or as a material
very different points of view, which are apt to lead to two very dif-              machine built by the organism to act for him. We saw that the
ferent opinions about whether amplification does or does not                       quantity of design that goes to it can be measured (by the amount
occur.                                                                             of selection necessary) and we saw (S.13/18) that selection can, in
   On the one side stands the theoretician—a designer of cranes,                   a sense, be amplified. To make the matter clearer, let us consider
perhaps, who must understand the inner nature of the process if he                 more directly the relation between regulation and selection, espe-
is to make the crane effective. To him there is no real amplifica-                 cially so far as the quantities of variety or information are con-
tion: the power emitted does not exceed the (total) power sup-                     cerned. If the diagram of immediate effects is
plied. He knows that the operator at the control is successful                                        Designer → Regulator
simply because the operator can, as it were, rob other sources of                                                    C
energy (coal, oil, etc.) to achieve his end. Had Nature not provided               we want to know how much variety or information the channel C
the coal as a generous source of supplementation, the operator                     between them will have to carry.
would not be able to lift the heavy load. The operator gets “ampli-                   To get a regulator made, selection is essential. Here are three
fication” simply by calling in King Coal to help him. So the basic                 examples:
type of amplifier is the boy who can lift big weights—because his                     The first regulator we discussed (S.11/3) led to our identifying
father is willing to lift them for him!                                            it as
   All this is true; yet on the other side stands the practical man
                                                                                                                     1 2 3
who wants to use the thing, the man who decides what machinery                                                  R: ↓ β α γ
to install at the quay-side, say. If he has access to an abundant
source of cheap power, then for him “amplification” becomes                        and this particular transformation (the regulatory) had to be
very real and practical. It means the difference between the ships                 selected from the set of all transformations possible, which num-
being loaded quickly and easily by movements of a control han-                     bered, in this case, 27 (cf. Ex. 7/7/8). Here the regulator is “made”
dle, or slowly and laboriously by hand. When the load is larger, a                 by being unambiguously specified, i.e. distinguished from the
locomotive for instance, the non-availability of a power-amplifier                 others.
might mean that the job could not be done at all. Thus, to the prac-                  In S.13/12 another method was used, and a machine, which
tical man the possibility of such an apparent amplification is of                  might be a regulator, was “designed” by a particular value being
great importance.                                                                  selected from the set of possible input-values.
                                     266                                                                           267
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                   AMPLIFYING REGULATION

   A third method for getting a regulator made is to assemble it in      not worth serious consideration. (It is not, however, more blatant
hardware, as a mechanic makes a water bath. Again selection is           than the crane-driver’s dependence on a suitable power supply.)
necessary: components have to be selected (distinguished) from           This case, however, is only somewhat extreme (having been
other possible objects, and the mode of assembling and coupling          selected to show one end of the scale). Other cases lie further
has to be selected from the other, incorrect, modes. The quantity        along the scale, and are of more general interest. The principle,
of selection used can be measured; and any dispute about the             however, remains unaltered.
measurement can be resolved by the method of S.13/11 (final par-            Next consider the case in which Q wants a water bath to be
agraph).                                                                 restored to a certain temperature; restorations will be required 100
   It follows from S.13/18 that if the final regulator can be arrived    times in each day and over a whole year. This means that on
at by stages (the whole selection occurring in stages) the possibil-     36,500 occasions the temperature must be corrected by a raising
ity exists that the provision of a small regulator at the first stage    or a lowering—a one-bit selection, say. The whole Grand Distur-
may lead to the final establishment of a much bigger regulator (i.e.     bance (S.13/8) thus has variety of 236S00 possibilities. Q proba-
one of larger capacity) so that the process shows amplification.         bly could transmit this in the year, but finds it inconvenient. If
   This is the sense in which “amplifying” regulation is to be           then his resources are such that he can make a thermostat at a cost
understood. The law of Requisite Variety, like the law of Conser-        of, say, 1000 bits, then by using the fact that the Grand Distur-
vation of Energy, absolutely prohibits any direct and simple mag-        bance is repetitive (S.13/9), the act of selecting appropriately from
nification but it does not prohibit supplementation.                     1000 bits has as consequence the correct selection from 36,500
                                                                         bits. So an amplification of about x 36 (if measured on the loga-
14/5. Let us consider some examples which will actually show             rithmic scale) has occurred.
such amplification of regulation.                                           This second example is more ordinary than the first. The fact
  Suppose the disturbances are fluctuations in the mains’ voltage,       that its method is widely used in practice shows whether or not the
which come to an apparatus owned by Q at the rate of hundreds a          practical man thinks it worth while.
second, and threaten to disturb it. Assume that the variety per sec-        There is, of course, not necessarily any amplification; and the
ond provided by these disturbances far exceeds his capacity as a         practical man, before he builds a machine to do a job, always
channel, so it is impossible for him to regulate against them by         makes at least an intuitive assessment of the balance:
direct personal action. However, he has available a manufac-             Cost (in some sense) of making          Cost incurred by doing it
turer’s catalogue, which shows three items:                                 the machine which will do the           himself.
  1: Television set,                                                        job.
  2: Mains stabiliser,
  3: Frequency changer.                                                  What this chapter deals with are the actual quantities involved,
                                                                         when our interest is centred on the amount of communication and
Assume that it is within his capacity for him to make a suitable         selection that is required.
selection of one from three; if now he performs the appropriate            Finally let us consider an example in which the possibility of
selection, the end result will be that the brains’ supply to his appa-   amplification is obvious and of practical use. Suppose twenty men
ratus will become stabilised. Thus his three possible primary            are given the task of keeping two thousand rooms constant in tem-
selections can be put into correspondence with three outcomes,           perature and humidity. If some means of control exists in each
one of which is “mains’ voltage stabilised”.                             room, the twenty may yet find the task beyond their capacity if
   The latter regulation (over, say, a year) involves far more selec-    they try to compensate for all the atmospheric variations by
tion than of one from three; so over the whole transaction an            manipulation of the controls directly. It may happen, however,
undoubted amplification has occurred.                                    that machines are available such that if the men become mechan-
   In this example the supplementation is so obvious, and his            ics and act as regulators to the machines, the machines can be
dependence on the manufacturer’s power as a designer so blatant,         made into air-conditioners and maintained as such. And it may
that the reader may be tempted to dismiss this “amplification” as        further happen that the amount of regulation that the mechanics
                                 268                                                                     269
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                 AMPLIFYING REGULATION

can supply to the conditioners is sufficient to keep the condition-    ultimate regulation far greater than could be achieved by the
ers effectively in control of the two thousand rooms. Thus the reg-    gene-pattern directly.
ulation that could not be done in one stage may, if the conditions        A clear example of how one regulator can act so as to cause the
are suitable, be possible in two.                                      development of another occurred in S.12/15. Part B of the home-
   The quantities of communication (the channel capacities)            ostat was built and thus became the primary regulator Rl. Coupled
involved in these regulations could be measured to any desired         to Part A, it acts so as to cause A to become stable with its needles
accuracy, and the exact degree of any amplification ascertained.       at the centre. When this is achieved, A acts as a regulator (R2)
Thus if amplification had actually occurred, the reality of the fact   towards disturbances coming to it that would make the needles
could be demonstrated beyond dispute.                                  diverge. Though the R2 of this particular example is extremely
   Whence (in the last example) comes the supplementation? In          simple, nothing in principle separates this case from those in
general, from whatever supplies the other inputs. In the example       which the regulator R2 is of any degree of complexity.
just given, these include the other factors that contributed to the       The method of achieving regulation in two stages, by which the
machines’ design and manufacture, and also the environment             gene- pattern makes R1, and Rl makes R2, is the method of the
itself, which communicates to the conditioner, and not to the          mammals, whose gene-pattern is used, in its action on the embryo
mechanic, what is the temperature and humidity at each moment.         brain, to determine the development at birth of some fundamental
As a result, these sources of information play a part in the total     regulators (Rl) whose action is not immediately to the organism’s
regulation, without using the mechanic as a channel.                   advantage. From birth onwards, however, they act towards the
   The example just given shows two levels of regulation, but there    cerebral cortex so as to develop in it a vast regulatory mechanism
is no reason why the number should stop at two. A doctor who           (R2) that, by the time adulthood arrives, is a much better regulator
looks after the set of mechanics and keeps them healthy and able       (i.e. of larger capacity) than could have been produced by the
to work might claim, so far as the rooms were concerned, to be a       action of the gene-pattern directly.
regulator at the third level. The matter need not be pursued further      Whence comes the supplementation? From random sources as
once the principle is clear, especially since many cases will proba-   in S.12/15 and from the environment itself! For it is the environ-
bly not show the various regulators arranged in a simple hierarchy.    ment that is forced to provide much of the determination about
                                                                       how the organism shall act. Thus gene-pattern and environment
14/6. Amplification in the brain. We can now understand quanti-        both contribute to the shaping of the fully developed adult, and in
tatively why this indirect method has proved superior—why it is        this way the quantity of design supplied by the gene-pattern is
the method used by those organisms that have the most powerful         supplemented by design (as variety and information) coming
resources for regulation—it allows amplification.                      from the environment. Thus the adult eventually shows more reg-
   The gene-pattern, as a store or channel for variety, has limited    ulatory capacity than could have been determined by the
capacity. Survival goes especially to those species that use the       gene-pattern alone. The amplification of regulation is thus no new
capacity efficiently. It can be used directly or indirectly.           thing, for the higher animals, those that adapt by learning, discov-
   The direct use occurs when the gene-pattern is used directly to     ered the method long ago.
specify the regulator. The regulator is made (in the embryo) and          May it not be possible that the amplification can be increased
the organism passes its life responding to each disturbance as the     even further? If so, is there not a possibility that we can use our
gene-pattern has determined. Amplification does not occur (from        present powers of regulation to form a more highly developed
our present point of view, though some advantage is gained (S.13/      regulator, of much more than human capacity, that can regulate
9) if the disturbances recur frequently in the organism’s lifetime).   the various ills that occur in society, which, in relation to us, is a
   The indirect use occurs when the gene-pattern builds a regulator    very large system?
(R1) whose action is to build the main regulator (R2), especially if
this process is raised through several orders or levels. By achiev-    14/7. Amplifying intelligence. This book is intended to be an
ing the ultimate regulation through stages, the possibility of         Introduction, and for twelve chapters it has kept to its purpose.
large-scale supplementation occurs, and thus the possibility of an     The last two chapters, however, have developed the subject some-
                                 270                                                                   271
              A N IN T R O D U C T IO N T O C Y BERNETI CS                                               REFERENCES

what speculatively, partly to give the reader practice in applying
the earlier methods, and partly to show what lies ahead, for the
prospects are exciting.
   In S.13/18 we saw that selection can be amplified. Now “prob-                                 R E FE R E NC E S
lem solving” is largely, perhaps entirely, a matter of appropriate
selection. Take, for instance, any popular book of problems and
puzzles. Almost every one can be reduced to the form: out of a
certain set, indicate one element. Thus of all possible numbers of        ASHBY, W. ROSS. Design for a Brain. Chapman & Hall, London; 2nd imp.,
apples that John might have in his sack we are asked to find a cer-           1954.
tain one; or of all possible pencil lines drawn through a given pat-      ldem. The applications of cybernetics to psychiatry. Jounial of Mental
                                                                              Science; 100, 114–124, 1954.
tern of dots, a certain one is wanted; or of all possible distributions   Idem. The effect of experience on a determinate dynamic system. Behavioral
of letters into a given set of spaces, a certain one is wanted. It is,        Science, 1, 35–42, 1956
in fact, difficult to think of a problem, either playful or serious,      BELLMAN, R. Stability theory of differential equations. McGraw-Hill Book
that does not ultimately require an appropriate selection as neces-           Co., New York, 1953.
                                                                          BOURBAKI, N. Theorie des ensembles; fascicule de resultats. A.S.E.I. No.
sary and sufficient for its solution.                                         1141 Hermann & Cie., Paris; 2nd edition, 1951.
   It is also clear that many of the tests used for measuring “intel-     Idem. Aigebre, Chapire I, A.S.E.I. No. 1144
ligence” are scored essentially according to the candidate’s power        Idem. Topologie generale, Chapitre 1, A.S.E.I. No. 1142.
of appropriate selection. Thus one test shows the child a common          CANNON, WALTER B. The wisdom of the body. London, 1932.
object and asks its name: out of all words the child must select the      FISHER, SIR R. and YATES, F. Statistical tables. Oliver & Boyd, Edinburgh,
                                                                              1943.
proper one. Another test asks the child how it would find a ball in       GOLDMAN, S. Information theory. Constable & Co., London; 1953.
a field: out of all the possible paths the child must select one of the   GRANIT, R., LEKSELL, L., and SKOGLUND, C. R. Fibre interaction in injured
suitable few. Thus it is not impossible that what is commonly                 or compressed region of nerve. Brain; 67, 125–140, 1944.
referred to as “intellectual power” may be equivalent to “power of        LASHLEY, K. S. in Cerebral mechanisms in behavior. John Wiley & Sons,
                                                                              New York; 1951.
appropriate selection”. Indeed, if a talking Black Box were to            LEWIN, K. Principles of topological psychologJe McGraw-Hill Book Co.,
show high power of appropriate selection in such matters—so                   New York, 1936.
that, when given difficult problems it persistently gave correct          MACKAY, D. M. Quantal aspects of scientific information. Philosophical
answers—we could hardly deny that it was showing the behavio-                 Magazine; 41, 289–311; 1950.
ral equivalent of “high intelligence”.                                    NEUMAN, J. VON, and MORGENSTERN, O. Theory of games and economic
                                                                              behavior. Princeton, 1947.
   If this is so, and as we know that power of selection can be           PAVLOV, I. P. Conditioned reflexes. Oxford University Press, 1927.
amplified, it seems to follow that intellectual power, like physical      RIGUET, J. Fondements de la théorie des relations binaires. Thèse de Paris;
power, can be amplified. Let no one say that it cannot be done, for           1951
the gene-patterns do it every time they form a brain that grows up        Idem. Sur les rapports entre les concepts de machine de multipole et de
                                                                              structure algebrique. Comptes rendues de l'Academie des Sciences, 237,
to be something better than the gene-pattern could have specified             425–7, 1953.
in detail. What is new is that we can now do it synthetically, con-       SHANNON, C. E. Communication theory of secrecy systems. Bell System
sciously, deliberately.                                                       technical Journal, 28, 656–715, 1949.
   But this book must stop; these are not matters for an Introduction.    Idem. The synthesis of two-terminal switching circuits. Ibid.; 28, 59–98, 1949.
                                                                          Idem. Computers and automata. Proceedings of the Institute of Radio
                                                                              Engineers; 41, 1235–41; 1953.
                                                                          Idem and WEAVER, W. The mathematical theory of communication.
                                                                              University of Illinois Press, Urbana, 1949.
                                                                          SOMMERHOFF, G. Analytical biology. Oxford University Press, London; 1950.
                                                                          TINBERGEN, N. The study of instinct. Oxford University Press, London; 1951.
                                                                          TUSTIN, A. The mechanism of economic systems. Heinemann, London, 1953.
                                                                          WIENER, N. Cybernetics. John Wiley & Sons, New York; 1948.


                                 272                                                                           273
                               INDEX
(The number refers to the page. A bold-faced number indicates a definition.)

ABSOLUTE SYSTEM, 41, 89                    Boom and slump, 109
Absorbing state, 229                       Borrowed knowledge, 90
Aerofoil, 94                               Bourbaki, N., 97, 113, 158, 273
Air-conditioner, 200                       Boyle’s law, 45
Altitude, 222                              Braille, 185
Amino-acid, 111, 197                       Breeding, 70
Ammonia, 110                               Brewing, 112
Amphioxus, 3                               Bridge, 258
Amplifier, of power, 238                   Brownian movement, 78, 186
— of regulation, 265                       Buses, aggregation, 81
— of intelligence, 271                     Button and string, 22, 100
Andersen, H., 119
Aphasia, 86                                CANNON, W. B., 195, 273
Argon, 64                                  Canonical representation, 29, 36
Arrow, 130                                 — —, deduction of, 90
Ashby, W. Ross, 273                        Capacity, 179
Association, 133                           Car, 215, 257
Asterisk, vi                               — skidding, 203
Atom, 261                                  Carbon dioxide, 81, 237
Auspices, 259                              Card, identifying, 125
Autocatalysis, 71, 196                     — cutting, 141
Automatic pilot, 199, 200                  Cash register, 15
Avalanche, 71                              Casting, 26
Averages, 91                               Cat, 122, 197
                                           Causalgia, 82
BACTERIA, 29, 30, 125, 183                 Chain, Markov, 165
Balancing, 156                             Chair, 131
Basin, 23                                  Chameleon, 130
— as selector, 260                         Change of state, 9
Battle of Life, 241                        — of input, 43
Behaviour, line of, 25                     Channel, 130, 154
—, change of, 43                           — capacity, 179
Behaviourism, I                            Chaos, 131
Bellman, R., 73, 273                       Chasing, 145
Beverage, 123                              Chess, 12, 241
Bicycle, 199                               Clock, 25
Binary digit, 126                          Closure, 11, 28, 76, 108
Bit, 126                                   Cloud, 30
Black Box, 86, 255                         Coding, 140, 243
Blood count, 190                           —, alphabetic, 11
Blood group, 125                           —in brain, 140
Bomb-sight, 86                             Coenetic variable, 212

                                    289
               AN INTRODUCTION TO CYBERNETICS                                                                      INDEX

Coffee, 123, 137                         Degrees of freedom, 129                 136, 177                                  Ghosts, 60
Coin, 156, 232                           Delay, 156                              Environment, 271                          Goal, 81, 219, 230
Cold, 238                                Delayer, 148                            Epistemology, 87                          Goldman, S., 110, 273
Commander, 211                           Derivative, 116                         Equality of vectors, 31                   Golfer, 231
Communication, 123                       Design, 251                             Equations, differential, 35               Grand Disturbance, 249
Complex system, 4                        Design for a Brain, v, 41, 52, 79, 84   —, unsolvable, 37                         — Response, 249
Component, 31                            116, 143, 196, 262, 273                 Equilibrium, 74                           Granit, R., 82, 273
Composition, 21                          Determinacy, search for, 91             —, stable, 77                             Graph, 94
Compound, 216, 217                       — in Bridge, 259                        —, unstable, 78                           —, kinematic, 22
Computer, 96, 116                        Determinate machine, 24, 225            —, neutral, 78                            — as constraint, 130
Conditioned reflex, 133                  Diagonal, 16                            — and coupling, 82                        Guest, 204
Cone, 73                                 Diagram of immediate effects, 57        — in Markov chain, 167, 229               Gunpowder, 70
Confidence, 163                          — — —, deduction of, 92                 —, absent, 258                            HALF-TRUTH, 104
Confluence, 134                          Diagram of ultimate effects, 57         Equivocation, 189                         Haunted house, 60
Conjuring, 114, 125, 137                 Dichotomy, 261                          Error, 190, 219                           Heart, 252
Connexion, 65                            Dictator, 213                           Essential variables, 197                  History of system, 115, 170
—, deducing, 92                          Die, 169                                Ethyl acetate, 71                         Hitler, A., 213
Conservation of energy, 131, 265         Difference, 9                           Even and odd, 104                         Homeostasis, 81, 196
Constant, 215                            Differential equation, 35, 96           Everyman, 122                             Homeostat, 83, 233, 260, 271
Constraint, 100, 127, 173, 247           — —, stability theory, 113              Evolution, 196                            Homo, 198, 252
Continuity, 9, 28                        Discrete change, 9, 28                  Exercises, vi                             Homomorphism, 103
— as constraint, 133                     Discrimination, 103                     Experience, law of, 137                   Hot or cold ?, 235
Control, 193, 213                        Displacement, 77                        Experimentation, 89                       House lights, 125
— -flow chart, 57                        Dissociation, 169                       Exponential growth, 70                    Humours, 191
— by error, 219                          Distinction, 103                        — series, 173                             Hunt and stick, 230
— panel, 88                              Distortion, 188                         Expression, 30                            Hunter, 200
Convergence, 134                         Disturbance, 77, 198                    Eyes, 130                                 Hunting, 236
Cooling, 26, 137                         repetitive, 247                                                                   Hydrogen chloride, 110
Correction, 211                          Divergence, 134                         FACTOR, 5                                 — 1odide, 122
Corruption, 186                          Dominance, 53                           Feedback, 51, 53, 237
Cough, 247                               Door, 86                                — and stability, 80                       IDENTITY, 15
Counterfeit coin, 156                    Duel, 201                               — and variety, 157                        Immediate effect, 56
Coupling, 48                             Duration of selection, 260              Felis, 122                                diagram, 57
—, random, 63                                                                    Fencer, 201                               Inaccessible, 92
— and equilibrium, 82                    EARTH, CONSTRAINTS ON, 131              Fermentation, 125, 183                    Incense, 60
— Markovian machines, 227                —, age of, 196                          Fibonacci, 19                             Incessant transmission, 161
Crane, 240                               —, reducibility on, 262                 Fisher, Sir Ronald, 5, 245, 259           Incomplete observation, 113
Cricket, 15                              Economic system, 37                     — and F. Yates, 234, 273                  Incubator, 236
Criterion, 257                           Effect, immediate, 56                   Fluxion, 74                               Independence in behaviour, 58
Cube, 73                                 —, ultimate, 57                         Fly-paper, 167, 229                       — in variety, 128
Culture medium, 29, 30                   Effector, 220                           Flying Saucer, 87                         Infinitesimal, 9
Cutting pack, 141                        Elastic, 112                            Form, 31                                  Information, 123, 245
Cybernetics defined, 1                   Electro-mechanical analogy, 96          Fourier analysis, 47                      — theory, 3
Cycle, 75                                Element, 122, 191                       Frequency, 47, 163                        —, gain of, 178
                                         Elimination, 18                                                                   Initial state as noise, 217
DARLINGTON, C. D., 193                   Embody, 29                              GALE WARNING, 140                         Input, 44, 87
Death, 197                               Emergent property, 110                  Galileo, 121                              — and design, 254
Decay of variety, 136                    Energy, 3, 131, 240, 265                Game, 202, 240                            Insect, 165
De-coding, 141                           English, 170                            Gas law, 45, 62                           Insolubility, 69
Definition, vii                          Entropy (of communication theory),      Gene-pattern, 62, 198, 270                Instinct, 26
Degeneracy, 46                           174, 207                                General, 211                              Instrumentation, 143
Degree of confidence, 163                Entropy (of thermodynamics), 112        Geometry, 2                               Insulator, 93

                                   290                                                                              291
                AN INTRODUCTION TO CYBERNETICS                                                        INDEX

Integration, 37, 173                 — as regulator, 251               Normal co-ordinates, 101               Posture, 30
Intelligence, 82, 271                — as selector, 259                Notation, 13, 20, 33                   Power amplifier, 238
Interference, 158                    MacKay, D. M., 252, 273                                                  Power of transformation, 16, 170
Invariant, 73, 121, 130, 215         Magnetic tape, 116                OBJECT, 131
Inverse, 142                         Maiden over, 15                   Observation, incomplete, 113           Predator, 241
Inversion, 145                       Main diagonal, 16                 Odd and even, 104                      Prediction, 132
Inverter, 147                        Manipulation, 92                  Omen, 259                              Pre-fabrication, 268
Iionization, 122                     Maneuvre, 211                     One-one, 14                            Pressure, 45
I.Q., 272                            Many-one, 15                      Operand, 10                            Prey, 241
Isomorphism, 92, 97                  Map, 94                           Operator, 10                           Prices, 34
Iterated systems, 262                Markov chain, 91, 166             — of clock, 25                         Prisoner, 123, 124
                                     Markovian machine, 225            Organ-playing, 60                      Probability, 122
JOINING, 48                          Massless spring, 2                Oscillation, 168                       — as variable, 40
— and equilibrium, 82                Materiality, 60                   Oscillator, 36                         —, constant, 162
Jump, 9, 28                          Mathematical physics, 2, 27, 96   Outcome, 203                           Problem-solving, 272
                                     Matrix, 15                        Output, 46, 88                         Product, 21
                                     — transition probabilities, 163   Ovum, 3                                Programming, 252
KEY, 142                             —, pay-off, 241
Kinematic graph, 22                                                    Oxygen, 222                            Properties, breeding, 70
                                     Matter, laws of, 60               Oyster, 69                             Protocol, 88
                                     Maze, 86, 114, 134, 228                                                  —, constraint in, 132
LACTOSE, 125                         Meaning, 143                                                             Protoplasm, 68
Laplace transform, 145               Mechanism, 24                     PANTAGRUEL, 129
                                                                       Parameter, 43                          Provider, 201
Large system: see Very               Mega-pick, 261                                                           Psychology, topological, 113
Lashley, K. S., 62, 273              Memory, 115, 170                  Parry, 201, 241
                                                                       Part, 100, 112                         Puzzle, 272
Lattice, 107                         Message, 123
Laughter, 60                         Mine, 92                          — and equilibrium, 82
Law of Nature, 130                   Mode, 101                         Part-function, 66                      RADIO DESIGNING, 253
— of Experience, 137                 Model, 96, 105                    Pattern, 30, 94                        Rana, 252
— of Requisite Variety, 206          Momentum, 40                      Pavlov, I. p., 133, 273                Random, 63, 259
Learning, 92, 133, 271               Monitoring, 180                   Pay-off matrix, 241                    — numbers, 234
Lethal, 197                          Morgenstern, 0., 241, 273         Pendulum, 34, 39, 121                  — searching, 236, 258
Lewin, K., 113,273                   Motor channel, 220                —, feedback within, 54                 Rayleigh, Lord, 64
Lights, house, 125                   Mouse, 197                        Permanence, 193                        Receptor, 220
—, traffic, 127                      Multiplication, 104               Persistence, 108, 193                  Red corpuscles, 222
Limit, 197                           —, mental, 180                    Personality Test, 125                  Reducibility, 60
— of regulation, 211                 Myelin, 221                       Petrol, 81                             — and selection, 261
Line, transformation of, 20                                            pH, 237                                Redundancy, 130, 182
— of behaviour, 25                                                     Phase space, 37                        References, 273
                                     NATURAL SELECTION, 196            Photograph, 94                         Reflex, 247
Linear system, 36                    Nature, law of, 130
LocalisatiOn, 68, 112                                                  Physiological limits, 197              Regenerative circuit, 82, 137
                                     Neighbourhood, 77                 Physiology, 193                        Region, stable, 76, 229
Locomotive, 80                       Negative feedback, 80
Logarithm to new base, 126                                             π, 259                                 Regulation, 193
                                     Network, 66, 93, 160, 252         Pilot, 211                             —, limit of, 211
Lumbricus, 252                       Neumann, J. von, 62, 241, 273     —, automatic, 199, 200                 —, automatic, 251
                                     Neurons, 252                      Playfair, 141                          —, amplifying, 265
MACHINE, THEORY OF, 1                —, number of, 62                  Pneumatic amplifier, 238               Reinforcement, 133
—, determinate, 24                   —, circuit of, 82, 137            Pneumonia, 26                          Re-labelling, 97
— with input, 44                     Neutral equilibrium, 78           Poincaré, H., 113                      Relay, 84, 93
— seeing itself, 55                  Nitrogen, 64                      Point, representative, 22              Repetition, 89, 121, 247
—, test for, 90                      Noise, 186, 216                   Pool, 165                              Replicates, 136
— as constraint, 132                 —, correction of, 211             Population, 29, 30, 167                Representation, canonical, 29
— set of states, 135                 Noises, ghostly, 60               Position, 31                           Representative point, 22
—, Markovian, 225                    Non-determinate, 161              Positive feedback, 81                  Requisite Variety, law of, 206, 245

                               292                                                                     293
                AN INTRODUCTION TO CYBERNETICS                                                             INDEX

Reservoir, 238                            Square of transformation, 17      Thermal agitation, 78, 186             Uniselector, 84
Residues, 35                              Stability, 23, 73, 113            Thermodynamics, 136                    Unsolvable equations, 37
Resistances, 256                          — under displacement, 77          Thermostat, 135, 198, 200              Unstable, 78
Respiratory centre, 81                    — and survival, 197               Thing, 131
Retina, 188                               — in Markovian machine, 228       Thirst, 224                            VARIABLE, 31, 100
Reverberation, 137                        Stable region, 76, 229            Threat, 221                            — in system, 40
Riguet, J., 158, 273                      Stages of regulation, 263         Threshold, 66                          —, missing, 114
Rods, 160                                 — of amplification, 265           Till, 15                               —, essential, 197
Rubber, 112                               Stamp, 256                        Tinbergen, N., 26, 273                 Variety, 119, 125, 126
                                          Standard, 246                     Tinder Box, 119                        —, requisite, 206
SAMPLING, REPEATED, 172                   Star cluster, 113                 Topology, 85, 113                      — in vectors, 249
School, 139                               State, 25                         Tortoise, 198                          Vector, 31
Science, 107, 121, 131                    stationary, 30                    Trace, 115                             — equality, 31
Scout, 155                                — of equilibrium, 74, 229         Traffic lights, 127                    — constraint, 128
Searching, 236, 258                       —, inaccessible, 92               Train, 80                              —, sequence as, 172
Secrecy system, 141, 243, 273             —, initial, as noise, 217         Trajectory, 25, 94                     —, variety in, 249
See-saw, 82                               —, absorbing, 229                 — of Markovian machine, 229            Velocity, 74
Selection, 235, 236                       Stationary, 30                    Transducer, 44, 143                    Very large system, 61, 85, 109
natural, 196                              Statistical mechanics, 62         Transform, 10                          —— —, regulating the, 244
—, quantity of, 255                       Statistics, 245                   —, multiple, 161                       Veto, 83
by machine, 259                           —, determinacy in, 91             Transformation, 10                     —, regulation by, 233, 260
Self-locking, 69, 234                     Steady state, 30, 169             —, single-valued, 14                   Vitamins, 40
Self-observation, 55                      Steering, 203, 211, 215           —, one-one, 14                         Vocabulary, 4
Self~reproduction, 111, 196               Steermanship, 1                   —, many-one, 15                        Vocal cords, 180
Semaphore, 125                            Step-function, 242                —, identical, 15                       Volume, 45
Sensory channel, 220                      Stepping switch, 84               —, geometric, 20
Sequence, 155, 172                        Stickleback, 26                   —, embodiment, 29
                                          Stochastic, 162                   —, random, 65, 126, 135                WAGES, 34
Series, exponential, 173                                                                                           Warder, 123
Set, 122                                  Stock breeder, 62                 —, inverse, 142
                                          Strategy, 205, 240                Transient, 48                          Water-amplifier, 266
— and machine, 135                                                                                                 Water-bath, 135, 198, 249
Shannon, C. E., vi, 93, 123, 161,         Sub-system, 48                    Transition, 10
                                          Sugar, 111                        —, observing, 146                      Way of behaving, 43
207, 243, 245, 260, 273                                                                                            Weather, 31
Shell, 198                                Supernova, 248                    —, probability, 163
                                          Supplementation, 65, 162          Transmission, 140                      Weaver, W., 273
Shivering, 238                                                                                                     Weighing coins, 156
Shuffling, 259                            — of selection, 258               —, incessant, 161
                                          Survival, 77, 197                 Trial and error, 230                   Whole, 112
Signal, 183, 221                                                                                                   — and equilibrium, 82
Silver chloride, 68                       Switch, as input, 43, 253         Triunique, 45
                                          System, 40                        Tustin, A., 37, 237, 273               Wholeness, degree of, 68
Simple proportions, 131                                                                                            Wiener, N., 1, 123, 177, 273
Simplification, 103                       —, complex, 4                     Twenty Questions, 126
                                          —, economic, 37                   Tyrant, 213                            Work amplifier, 240
Singing, 60
Single-valued, 14                         —, absolute, 41                   Tyre, 122
— system, 39                              —, definition of, 106, 227                                               ZERO VARIETY, 126, 137
Siphon, 238                               —, very large: see Very           ULTIMATE EFFECT, 57                    — entropy, message of, 211
Size of system, 61                                                          Ultrastability, 83, 233, 242
— of inverter, 151                        TABETIC, 220
Skid, 203                                 Tachometer, 146
Skull, 201                                Tap, 234
Smoke, 183                                Tea-taster, 135
Sommerhoff, G., 211, 273                  Telegraph, 161, 211
Sophistication, 92                        Telephone, 161
Speech, 127                               Temperature, 135, 198, 237, 238
Speedometer, 146                          Testudo, 198

                                    294                                                                     295



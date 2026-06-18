---
normalized_id: shared-pdf-reference-statistical-theory-and-econometrics
exam_code: SHARED
material_scope: statistical theory and econometrics.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Statistical Theory and Econometrics.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-statistical-theory-and-econometrics

Chapter 2


STATISTICAL                     THEORY AND ECONOMETRICS
ARNOLD       ZELLNER*

University of Chicago




Contents
1.   Introduction and overview                                                                 68
2.   Elements of probability theory                                                            69
     2.1. Probability models for observations                                                  70
     2.2.    Definitions      of probability                                                   71
     2.3.    Axiom systems for probability              theory                                 74
     2.4.    Random        variables    and probability     models                             82
     2.5.    Elements      of asymptotic       theory                                         110
3.   Estimation theory                                                                        117
     3. I.   Point estimation                                                                 117
     3.2.    Criteria   for point estimation                                                  118
4.   Interval estimation: Confidence bounds, intervals, and regions                           152
     4. I.   Confidence       bounds                                                          152
     4.2.    Confidence       intervals                                                       154
     4.3.    Confidence       regions                                                         156
5.   Prediction                                                                               158
     5.1.    Sampling       theory prediction      techniques                                 159
     5.2.    Bayesian      prediction     techniques                                          162
6.   Statistical analysis of hypotheses                                                       164
     6.1.    Types of hypotheses                                                              164
     6.2.    Sampling       theory     testing procedures                                     165
     6.3.    Bayesian      analysis     of hypotheses                                         169
7. Summary and concluding remarks                                                             172
References                                                                                    174



   *Research for this paper was financed by NSF Grant SES 7913414 and by income from the H.G.B.
Alexander Endowment Fund, Graduate School of Business, University of Chicago. Part of this work
was done while the author was on leave at the National Bureau of Economic Research and the Hoover
Institution, Stanford, California.


Handbook of Econometrics, Volume I, Edited by Z. Griliches and M.D. Intriligator
0 North-Holland Publishing Company, I983
68                                                                            A. Zellner




1.   Introduction and overview

Econometricians, as well as other scientists, are engaged in learning from their
experience and data - a fundamental objective of science. Knowledge so obtained
may be desired for its own sake, for example to satisfy our curiosity about aspects
of economic behavior and/or for use in solving practical problems, for example
to improve economic policymaking. In the process of learning from experience
and data, description and generalization both play important roles. Description
helps us to understand “what is” and what is to be explained by new or old
economic generalizations or theories. Economic generalizations or theories are not
only instrumental in obtaining understanding of past data and experience but
also are most important in predicting as yet unobserved outcomes, for example
next year’s rate of inflation or the possible effects of an increase in government
spending. Further, the ability to predict by use of economic generalizations or
theories is intimately related to the formulation of economic policies and solution
of problems involving decision-making.
   The methods and procedures by which econometricians and other scientists
learn from their data and use such knowledge to predict as yet unobserved data
and outcomes and to solve decision problems constitutes the subject-matter of
statistical theory. A principal objective of work in statistical theory is to formulate
methods and procedures for learning from data, making predictions, and solving
decision problems that are generally applicable, work well in applications and are
consistent with generally accepted principles of scientific induction and decision-
making under uncertainty. Current statistical theories provide a wide range of
methods applicable to many problems faced by econometricians and other
scientists. In subsequent sections, many theories and methods will be reviewed.
   It should be appreciated that probability theory plays a central role in statisti-
cal theory. Indeed, it is generally hypothesized that economic and other types of
data are generated stochastically, that is by an assumed probabilistic process or
model. This hypothesis is a key one which has been found fruitful in econometrics
and other sciences. Thus, under this assumption, most operational economic
generalizations or theories are probabilistic, and in view of this fact some
elements of probability theory and probabilistic models will be reviewed in
Section 2.
   The use of probability models as a basis for economic generalizations and
theories is widespread. If the form of a probability model and the values of its
parameters were known, one could use such a model to make probability
statements about as yet unobserved outcomes, as for example in connection with
games of chance. When the probability model’s form and nature are completely
known, using it in the way described above is a problem in direct probability. That
Ch. 2: Statistical   Theory and Econometrics                                                             69

is, with complete knowledge of the probability model, it is usually “direct” to
compute probabilities associated with as yet unobserved possible outcomes.
   On the other hand, problems usually encountered in science are not those of
direct probability but those of inverse probability. That is, we usually observe data
which are assumed to be the outcome or output of some probability process or
model, the properties of which are not completely known. The scientist’s problem
is to infer or learn the properties of the probability model from observed data, a
problem in the realm of inverse probability. For example, we may have data on
individuals’ incomes and wish to determine whether they can be considered as
drawn or generated from a normal probability distribution or by some other
probability distribution. Questions like these involve considering alternative prob-
ability models and using observed data to try to determine from which hypothe-
sized probability model the data probably came, a problem in the area of
statistical analysis of hypotheses. Further, for any of the probability models
considered, there is the problem of using data to determine or estimate the values
of parameters appearing in it, a problem of statistical estimation. Finally, the
problem of using probability models to make predictions about as yet unobserved
data arises, a problem of statistical prediction. Aspects of these major topics,
namely (a) statistical estimation, (b) statistical prediction, and (c) statistical analysis
of hypotheses, will be reviewed and discussed.
   Different statistical theories can yield different solutions to the problems of
statistical estimation, prediction, and analysis of hypotheses. Also, different
statistical theories provide different justifications for their associated methods.
Thus, it is important to understand alternative statistical theories, and in what
follows attention is given to features of several major statistical theories. Selected
examples are provided to illustrate differences in results and rationalizations of
them provided by alternative statistical theories.’
   Finally, in a concluding section a number of additional topics are mentioned
and some concluding remarks are presented.


2.   Elements of probability theory

We commence this section with a discussion of the elements of probability models
for observations. Then a brief consideration of several views and definitions of
probability is presented. A summary of some properties of axiom systems for
probability theory is given followed by a review of selected results from probabil-
ity theory that are closely related to the formulation of econometric models.



    ‘For valuable discussions of many of the statistical   topics considered   below and references   to the
statistical literature, see Kruskal and Tanur (1978).
70                                                                            A. Zellner


2.1.   Probability models for observations

As remarked in Section 1, probability models are generally employed in analyzing
data in econometrics and other sciences. Lindley (1971, p. 1) explains: “The
mathematical model that has been found convenient for most statistical problems
contains a sample space X of elements x endowed with an appropriate u-field of
sets over which is given a family of probability measures. These measures are
indexed by a quantity 8, called a parameter belonging to the parameter space 0.
The values x are referred to variously as the sample, observations or data.” Thus, a
statistical model is often represented by the triplet (X, 0, Pe( x)), where X denotes
the sample space, 0 the parameter space, and P,(x) the probability measures
indexed by the parameter 8 belonging to 0. For many problems, it is possible to
describe a probability measure Pe( x) through its probability density function (pdf),
denoted by ~(~10). For example, in the case of n independent, identically
distributed normal observations, the sample space is - cc -KXi -Cco, i = 1,2,. . . , n,
the pdf is p(xj8)=n~=,f(xi18),          where x’=(x,,x~,...,x,)        and f(xJe)=
(2a~~)-‘/~exp(-     (xi - ~)~/2a~}, with 8’= (CL,a) the parameter vector, and 0:
 - cc < p -Ccc and 0 < u -Ccc the parameter space.
   While the triplet (X, 0, ~(~18)) contains the major elements of many statistical
problems, there are additional elements that are often relevant. Some augment the
triplet by introducing a decision space D of elements d and a non-negative convex
loss function L(d, 6). For example, in connection with the normal model de-
scribed at the end of the previous paragraph, L(d, 0) might be the following
“squared error” loss function, L(d, p) = c(p - d)2, where c is a given positive
constant and d = d(x) is some estimate of p belonging to a decision space D. The
problem is then to choose a d from D that is in some sense optimal relative to the
loss function L( d, p).
   An element that is added to the triplet (X, 0, p(xl 0)) in the Bayesian approach
is a probability measure defined on the u-field supported by 0 that we assume
can be described by its pdf, ~(6). Usually r(e) is called a prior pdf and its
introduction is considered by many to be the distinguishing feature of the
Bayesian approach. The prior pdf, r(e), represents initial or prior information
about the possible values of 8 available before obtaining the observations.
   In summary, probabilistic models for observations can be represented by
(X, 0, ~(~10)). This representation is often extended to include a loss function,
L(d, fI>, a decision space D, and a prior pdf, r(e). As will be seen in what
follows, these elements play very important roles in statistical theories.
   Statistical theories indicate how the data x are to be employed to make
inferences about the possible value of 8, an estimation problem, how to test
hypotheses about possible values of 0, e.g. 8 = 0 vs. 0 f 0, a testing problem, and
how to make inferences about as yet unobserved or future data, the problem of
prediction. Also, very importantly, the information in the data x can be employed
Ch. 2: Statistical   Theory and Econometrics                                         71

to explore the adequacy of the probability model (X, 0, ~(~18)) a procedure
called “model criticism” by Box (1980). Model criticism, involving diagnostic
checks of the form of p(xJ 6) and other assumptions, may indicate that the model
is adequate or inadequate. If the model is found to be inadequate, then it has to
be reformulated. Thus, work with probability models for observations has an
important iterative aspect, as emphasized by Box (1976) Box and Tiao (1973),
and Zellner (1975, 1979). While some elements of the theory of hypothesis testing
are relevant for this process of iterating in on an adequate probability model for
the observations, additional research is needed to provide formalizations of the
many heuristic procedures employed by applied researchers to iterate in on an
adequate model, that is a model that achieves the objectives of an analysis. See
Learner (1978) for a thoughtful discussion of related issues.


2.2.    Definitions of probability

Above, we have utilized the word “probability” without providing a definition of
it. Many views and/or definitions of probability have appeared in the literature.
On this matter Savage (1954) has written, “It is unanimously agreed that statistics
depends somehow on probability. But, as to what probability is and how it is
connected with statistics, there has seldom been such complete disagreement and
breakdown of communication since the Tower of Babel. Doubtless, much of the
disagreement is merely terminological and would disappear under sufficiently
sharp analysis” (p. 2). He distinguishes three main classes of views on the
interpretation of probability as follows (p. 3):
          Objectivistic views hold that some repetitive events, such as tosses of a
       penny, prove to be in reasonably close agreement with the mathematical
       concept of independently repeated random events, all with the same
       probability. According to such views, evidence for the quality of agreement
       between the behavior of the repetitive event and the mathematical concept,
       and for the magnitude of the probability that applies (in case any does), is to
       be obtained by observation of some repetitions of the event, and from no
       other source whatsoever.
          Personalistic views hold that probability measures the confidence that a
       particular individual has in the truth of a particular proposition, for example,
       the proposition that it will rain tomorrow. These views postulate that the
       individual concerned is in some way “reasonable”, but they do not deny the
       possibility that two reasonable individuals faced with the same evidence may
       have different degrees of confidence in the truth of the same proposition.
         Necessary views hold that probability measures the extent to which one set
       of propositions, out of logical necessity and apart from human opinion,
       confirms the truth of another. They are generally regarded by their holders as
12                                                                           A. Zellner


     extensions of logic, which tells when one set of propositions necessitates the
     truth of another.
   While Savage’s classification scheme probably will not satisfy all students of
the subject, it does bring out critical differences of alternative views regarding the
meaning of probability. To illustrate further, consider the following definitions of
probability, some of which are reviewed by Jeffreys (1967, p. 369 ff).
1.   Classical or Axiomatic Definition

If there are n possible alternatives, for m of which a proposition denoted by p is
true, then the probability of p is m/n.
2.   Venn Limit Definition

If an event occurs a large number of times, then the probability of p is the limit of
the ratio of the number of times when p will be true to the whole number of trials,
when the number of trials tends to infinity.
3.   Hypothetical Infinite Population Definition

An actually infinite number of possible trials is assumed. Then the probability of
p is defined as the ratio of the number of cases where p is true to the whole
number.
4.   Degree of Reasonable Belief Definition

Probability is the degree of confidence       that we may reasonably      have in a
proposition.
5.   Value of an Expectation Definition

If for an individual the utility of the uncertain outcome of getting a sum of s
dollars or zero dollars is the same as getting a sure payment of one dollar, the
probability of the uncertain outcome of getting s dollars is defined to be
#(1)/u(s), where u( .) is a utility function. If u( .) can be taken proportional to
returns, the probability of receiving s is l/s.
    Jeffreys notes that Definition 1 appeared in work of De Moivre in 1738 and of
J. Neyman in 1937; that R. Mises advocates Definition 2; and that Definition 3 is
usually associated with R. A. Fisher. Definition 4 is Jeffreys’ definition (1967, p.
20) and close to Keynes’ (1921, p. 3). The second part of Definition 5 is involved
in Bayes (1763). The first part of Definition 5, embodying utility comparisons, is
central in work by Ramsey (1931), Savage (1954), Pratt, Raiffa and Schlaifer
(1964), DeGroot (1970), and others.
    Definition 1 can be shown to be defective, as it stands, by consideration of
particular examples- see Jeffreys (1967, p. 370ff.). For example, if a six-sided die
is thrown, by Definition 1 the probability that any particular face will appear is
 l/6. Clearly, this will not be the case if the die is biased. To take account of this
Ch. 2: Statistical   Theory and Econometrics                                        73

possibility, some have altered the definition to read, “If there are n equal@ likely
possible alternatives, for m of which p is true, then the probability of p is m/n.”
If the phrase “equally likely” is interpreted as “equally probable,” then the
definition is defective since the term to be defined is involved in the definition.
Also, Jeffreys (1967) points out in connection with the Venn Limit Definition
that, “For continuous distributions there are an infinite number of possible cases,
and the definition makes the probability, on the face of it, the ratio of two infinite
numbers and therefore meaningless” (p. 371). He states that attempts by Neyman
and Cramer to avoid this problem are unsatisfactory.
   With respect to Definitions 2 and 3, it must be recognized that they are both
non-operational, As Jeffreys (1967) puts it:

       No probability has ever been assessed in practice, or ever will be, by
       counting an infinite number of trials or finding the limit of a ratio in an
       infinite series. Unlike the first definition, which gave either an unacceptable
       assessment or numerous different assessments, these two give none at all. A
       definite value is got on them onb by making a hypothesis about what the
       result would be. The proof even of the existence is impossible. On the limit
       definition, without some rule restricting the possible orders of occurrence,
       there might be no limit at all. The existence of the limit is taken as a
       postulate by Mises, whereas Venn hardly considered it as needing a
       postulate.. . the necessary existence of the limit denies the possibility of
       complete randomness, which would permit the ratio in an infinite series to
       tend to no limit (p. 373, fn. omitted).

Further, with respect to Definition 3, Jeffreys (1967) writes, “On the infinite
population definition, any finite probability is the ratio of two infinite numbers
and therefore is indeterminate” (p. 373, fn. omitted). Thus, Definitions 2 and 3
have some unsatisfactory features.
   Definition 4, which defines probability in terms of the degree of confidence
that we may reasonably have in a proposition, is a primitive concept. It is
primitive in the sense that it is not produced by any axiom system; however, it is
accepted by some on intuitive grounds. Furthermore, while nothing in the
definition requires that probability be measurable, say on a scale from zero to
one, Jeffreys (1967, p. 19) does assume measurability [see Keynes (1921) for a
critique of this assumption] and explores the consequences of the use of this
assumption in a number of applications. By use of this definition, it becomes
possible to associate probabilities with hypotheses, e.g. it is considered meaning-
ful to state that the probability that the marginal propensity to consume is
between 0.7 and 0.9 is 0.8, a statement that is meaningless in terms of Definitions
l-3. However, the meaningfulness of the metric employed for such statements is
a key issue which, as with many measurement problems will probably be resolved
by noting how well procedures based on particular metrics perform in practice.
14                                                                          A. Zellner


   Definition 5, which views probability as a subjective, personal concept, involves
the use of a benefit or utility metric. For many, but not all problems, one or the
other of these metrics may be considered satisfactory in terms of producing useful
results. There may, however, be some scientific and other problems for which a
utility or loss (negative utility) function formulation is inadequate.
   In summary, several definitions of probability have been briefly reviewed.
While the definitions are radically different, it is the case that operations with
probabilities, reviewed below, are remarkably similar even though their interpre-
tations differ considerably.


2.3.   Axiom systems for probability theory

Various axiom systems for probability theory have appeared in the literature.
Herein Jeffreys’ axiom system is reviewed that was constructed to formalize
inductive logic in such a way that it includes deductive logic as a special limiting
case. His definition of probability as a degree of reasonable belief, Definition 4
above, allows for the fact that in induction, propositions are usually uncertain
and only in the limit may be true or false in a deductive sense. With respect to
probability, Jeffreys, along with Keynes (1921), Uspensky (1937), Renyi (1970)
and others, emphasizes that all probabilities are conditional on an initial informa-
tion set, denoted by A. For example, let B represent the proposition that a six will
be observed on a single flip of a coin. The degree of reasonable belief or
probability that one attaches to B depends on the initial information concerning
the shape and other features of the coin and the way in which it is thrown, all of
which are included in the initial information set, A. Thus, the probability of B is
written P(B) A), a conditional probability. The probability of B without specify-
ing A is meaningless. Further, failure to specify A clearly and precisely can lead to
confusion and meaningless results; for an example, see Jaynes (1980).
   Let propositions be denoted by A, B, C,. . . . Then Jeffreys’ (1967) first four
axioms are:
Axiom 2 (Comparability)
Given A, B is either more, equally, or less probable than C, and no two of these
alternatives can be true.
Axiom 2 (Transitivity)
If A, B, C, and D are four propositions and given A, B is more probable than C
and C is more probable than D, then given A, B is more probable than D.
Axiom 3 (Deducibility)
All propositions deducible from a proposition A have the same probability given
A. All propositions inconsistent with A have the same probability given data A.
Ch. 2: StatisticalTheory and Econometrics                                          75

Axiom 4

If given A, B, and B, cannot both be true and if, given A, C, and C, cannot both
be true, and if, given A, B, and C, are equally probable and B, and C, are equally
probable, then given A, B, or B2 and C, or C, are equally probable.
   Jeffreys states that Axiom 4 is required to prove the addition rule given below.
DeGroot (1970, p. 71) introduces a similar axiom.
   Axiom 1 permits the comparison of probabilities or degrees of reasonable belief
or confidence in alternative propositions. Axiom 2 imposes a transitivity condi-
tion on probabilities associated with alternative propositions bused on a common
information set A. The third axiom is needed to insure consistency with deductive
logic in cases in which inductive and deductive logic are both applicable. The
extreme degrees of probability are certainty and impossibility. As Jeffreys (1967,
p. 17) mentions, certainty on data A and impossibility on data A “do not refer to
mental certainty of any particular individual, but to the relations of deductive
logic...” expressed by B is deducible from A and not-B is deducible from A, or in
other words, A entails B in the former case and A entails not-B in the latter.
Axiom 4 is needed in what follows to deal with pairs of exclusive propositions
relative to a given information set A. Jeffreys’ Theorem 1 extends Axiom 4 to
relate to more than two pairs of exclusive propositions with the same probabilities
on the same data A.
   Jeffreys (1967) remarks that it has “. . . not yet been assumed that probabilities
can be expressed by numbers. I do not think that the introduction of numbers is
strictly necessary to the further development; but it has the enormous advantage
that it permits us to use mathematical technique. Without it, while we might
obtain a set of propositions that would have the same meanings, their expression
would be much more cumbersome” (pp. 18-19). Thus, Jeffreys recognizes that it
is possible to have a “non-numerical” theory of probability but opts for a
“numerical” theory in order to take advantage of less cumbersome mathematics
and that he believes leads to propositions with about the same meanings.
   The following notation and definitions are introduced to facilitate further
analysis.


Definitions ’


(1)    -A means “not-A”, that is, A is false.
(2)   A f~ B means “A and B “, that is, both A and B are true. The proposition
      A n B is also termed the “intersection” or the “joint assertion” or “conjunc-
      tion” or “logical product” of A and B.


  *These are presented in Jeffreys (I 967, pp. 17- 18) using different notation.
76                                                                             A. Zellner

(3)  A U B means “A or B “, that is, at least one of A and B is true. The
     proposition A U B is also referred to as the “union” or “disjunction” or
     “logical sum” of A and B.
(4) A n B n C f~ D means “A and B and C and D “, that is, A, B, C, and D are
     all true.
(5) A U B UC U D means “A or B or C or D”, that is, at least one of A, B, C,
     and D is true.
(6) Propositions Bi, i = 1,2,. . . , n, are said to be exclusive on data A if not more
     than one of them can be true given A.
(7)’ Propositions Bi, i = 1,2,. . . , n, are said to be exhaustive on data A if at least
     one of them must be true given A.
Note that a set of propositions can be both exclusive and exhaustive. Also, for
example, Axiom 4 can be restated using the above notation and concepts as:
Axiom 4
If B, and B2 are exclusive and C, and C, are exclusive, given data A, and if,
given A, B, and C, are equally probable and B2 and C, are equally probable, then
given A, B, U B, and C, U C, are equally probable.
  At this point in the development of his axiom system, Jeffreys introduces
numbers associated with or measuring probabilities by the following conventions.
Convention 1
A larger number is assigned to the more probable proposition            (and therefore
equal numbers to equally probable propositions).
Convention 2
If, given A, B, and B, are exclusive, then the number assigned on data A to “Bl or
B,“, that is B, U’B,, is the sum of those assigned to B, and to B,.
  The following axiom is needed to insure that there are enough numbers
available to associate with probabilities.
Axiom 5
The set of possible probabilities on given data, ordered in terms of the relation
“more probable than” can be put into a one-one correspondence with a set of real
numbers in increasing order.
   It is important to realize that the notation P( BI A) stands for the number
associated with the probability of the proposition B on data A. The number
expresses or measures the reasonable degree of confidence in B given A, that is,
the probability of B given A, but is not identical to it.
   The following theorem that Jeffreys derives from Axiom 3 and Convention 2
relates to the numerical assessment of impossible propositions.
Ch. 2: Statistical   Theoy and Econometrics                                           17

Theorem 2

If proposition A entails -B, then P( BI A) = 0. Thus, Theorem 2 in conjunction
with Convention 1 provides the result that all probability numbers are 2 0.

   The number associated with certainty is given in the following convention.
Convention       3

If A entails B, then P(B1 A) = 1.

The use of 1 to represent certainty is a pure convention. In some cases it is useful
to allow numerical probabilities to range from 0 to cc rather than from 0 to 1. On
given data, however, it is necessary to use the same numerical value for certainty.

Axiom      6

IfAnBentailsC,thenP(BnC(A)=P(BlA).

That is, given A throughout, if B is false, then B n C is false. If B is true, since
A fl B entails C, C is true and therefore B n C is true. Similarly, if B n C is true, it
entails B and if B n C is false, B must be false on data A since if it were true,
B n C would be true. Thus, it is impossible, given A, that either B or B n C should
be true without the other. This is an extension of Axiom 3 that results in all
equivalent propositions having the same probability on given data.

Theorem 3

If B and C are equivalent in the sense that each entails the other, then each entails
B n C, and the probabilities of B and C on any given data must be equal.
Similarly, if A n B entails C and A n C entails B, P( BJ A) = P(C1 A), since both
are equal to P( B n Cl A).

   A theorem following from Theorem 3 is:

Theorem 4

P(BI A) = P(B n Cl A)+P(B              n - Cl A).

Further, since P(Bn -ClA)aO,        P(BIA)>P(BnClA).         Also, by using BUC
for B in Theorem 4, it follows that P( B U Cl A) z P(C1 A).
   The addition rule for numerical probabilities is given by Theorem 5.

Theorem 5

If B and C are two propositions, not necessarily exclusive on data A, the addition
rule is given by

      P(BIA)+P(C(A)=P(BnCIA)+P(BuCIA).
18                                                                           A. Zellner


It follows that

     P(BUCIA)     < P(BIA)+P(ClA),

since P(B n CIA) z 0. Further, if B and C are exclusive, then P( B n CIA) = 0 and
P(B u CIA) = P(B(A)+P(ClA).
  Theorems 4 and 5 together express upper and lower bounds on the possible
values of P( B U CIA) irrespective of exclusiveness, that is

     max[P(BlA),P(ClA)]      GP(BUCIA)<P(BIA)+P(CIA).

Theorem 6
IfB,,Bz ,..., B,, are a set of equally probable and exclusive alternatives on data A,
and if Q and R are unions of two subsets of these alternatives, of numbers m and
n, then P(QIA)/P(RIA)       = m/n. This follows from Convention 2 since P(QlA) =
mu and P( RI A) = na, where a = P( Bil A) for all i.
Theorem 7
Under the conditions of Theorem 6, if B,, B2,. . . , B, are exhaustive on data A, and
R denotes their union, then R is entailed by A and by Convention 3, P( R IA) = 1,
and it follows that P(QIA) = m/n.
As Jeffreys notes, Theorem 7 is virtually Laplace’s rule stated at the beginning of
his Thkorie Analytique. Since R entails itself and is a possible value of A, it is
possible to write, P(QlR) = m/n, which Jeffreys (1967) interprets as, “. . .given
that a set of alternatives are equally probable, exclusive and exhaustive, the
probability that some one of any subset is true is the ratio of the number in that
subset to the whole number of possible cases” (p. 23). Also, Theorem 6 is
consistent with the possibility that the number of alternatives is infinite, since it
requires only that Q and R shall be finite subsets.
   Theorems 6 and 7 indicate how to assess the ratios of probabilities and their
actual values. Such assessments will always be rational fractions that Jeffreys calls
R-probabilities. If all probabilities were R-probabilities, there would be no need
for Axiom 5. But, as Jeffreys points out, many propositions are of a form that a
magnitude capable of a continuous range of values lies within a specified part of
the range and it may not be possible to express them in the required form. He
explains how to deal with this problem and puts forward the following theorem:
Theorem 8
Any probability can be expressed by a real number. For a variable z that can
assume a continuous set of values, given A, the probability that z’s value is less
than a given value z0 is P(z < zolA) = F(z,), where F(z,) is referred to as the
cumulative probability density function (cdf). If F(z,) is differentiable, P(z, -z z
Ch. 2: Statistical Theory and Econometrics                                                          19

 < .zO+ dzlA) = f(z,)dz +O(dz), where f(zo) = F’(zO) is the probability density
function (pdf) and this last expression gives the probability that .z lies in the
interval z0 to z0 + dz.
Theorem 9

If Q is the union of a set of exclusive alternatives, given A, and if R and S are
subsets of Q (possibly overlapping), and if the alternatives in Q are all equally
probable on data A and also on data R fl A, then

     P(R nSIA)=P(RIA)P(SJRnA)/P(RjRnA).

Note that if Convention 3 is employed, P( RI R n A)= 1, since R fl A entails R
and then Theorem 9 reads

     P(R nSIA)=P(RIA)P(SIRnA).

In other words, given A throughout, the probability that the true proposition is in
the intersection of R and S is equal to the probability that it is in R times the
probability that it is in S, given that it is in R. Theorem 9 involves the assumption
that the alternatives in Q are equally probable, both given A and also given
R n A.Jeffreys notes that it has not been possible to relax this assumption in
proving Theorem 9. However, he regards this theorem as suggestive of the
simplest rule that relates probabilities based on different data, here denoted by A
and R n A, and puts forward the following axiom.
Axiom    7

P(B n CIA)=       P(BIA)P(CJBn
                           A)/P(BJBn A).
If Convention 3 is used in Axiom 7, P(RIB n A) = 1 and

     P(BnCIA)=P(BIA)P(CJBnA),
which is the product rule. Thus, the product rule relates to probability statements
regarding the logical product or intersection B n C, often also written as BC,
while the addition or sum rule relates to probability statements regarding the
logical sum or union, B U C.
   Since Axiom 7 is just suggested by Theorem 9, Jeffreys shows that it holds in
several extreme cases and concludes that, “The product rule may therefore be
taken as general unless it can be shown to lead to contradictions” (p. 26). Also, he
states, “When the probabilities.. . are chances, they satisfy the product rule
automatically” (p. 5 1).3

  3Jeffreys (1967) defines “chance” as follows: “If q,, q2,. ..,q! are a set of alternatives, mutually
exclusive and exhaustive on data r, and if the probabilities of p gven any of them and r are the same,
each of these probabilities is called the chance of p on data r ” (p. 5 1).
80                                                                              A. Zellner


   In general, if P(ClB n A) = P(ClA), B is said to be irrelevant to or independent
of C, given A. In this special case, the product rule can be written as P( B n CIA)
 = P( BI A)P( CIA), a form of the product rule that is valid only when B is
irrelevant to or independent of C.
Theorem 10

If q1,q2,.-., q, are a set of alternatives, A, the information     already available and
x, some additional information, then the ratio

       %lx f-lmYh7r f-l4
         p(d4Wq,   n4
is the same for all the q,.
     If we use Convention 3, P( q, Iq, n A) = 1, then

       P(q,ix n A) = cP(q,WP(xlq,       n A),
where l/c = c,P( q,( A)P( xlq, n A). This is the principle of inverse probability or
Bayes’ Theorem, first given in Bayes (1763). The result can also be expressed as

       Posterior probability a (prior probability)(likelihood    function)

where a denotes “is proportional to”, P(q,lx n A) is the posterior probability,
P( q&4) is the prior probability, and P(xlq, n A) is the likelihood function.
   In general terms, Jeffreys describes the use of Bayes’ Theorem by stating that if
several hypotheses q,, q2,, . . , q, are under consideration and, given background
information A there is no reason to prefer any one of them, the prior probabili-
ties, P(q,(A), r = 1,2,.. ., n, will be taken equal. Then, the most probable hypothe-
sis after observing the data x, that is, the one with the largest P(q,lx n A), will be
that with the largest value for P(xlq, n A), the likelihood function. On the other
hand, if the data x are equally probable on each hypothesis, the prior views with
respect to alternative hypotheses, whatever they were, will be unchanged. Jeffreys
(1967) concludes: “The principle will deal with more complicated circumstances
also; the immediate point is that it does provide us with what we want, a formal
rule in general accord with common sense, that will guide us in our use of
experience to decide between hypotheses” (p. 29). Jeffreys (1967, p. 43) also
shows that the theory can be utilized to indicate how an inductive inference can
approach certainty, though it cannot reach it, and thus explains the usual
confidence that most scientists have in inductive inference. These conclusions are
viewed as controversial by those who question the appropriateness of introducing
prior probabilities and associating probabilities with hypotheses. It appears
that these issues can only be settled by close comparative study of the results
yielded by various approaches to statistical inference as Anscombe (1961) and
82                                                                              A. Zellner


Assumption    2

Indifference surfaces extend smoothly from boundary to boundary in the r-space,
R, of the ui’s, i = 1,2,. . . ,r.

Assumption    3

If d,, d,, and d, are three decision functions such that d, and d, are indifferent,
then given any p such that 0 < p G 1, a mixed strategy that selects d, with
objective probability p and d, with objective probability 1 - p is indifferent to a
strategy which selects d, with objective probability p and d, with objective
probability 1 - p.

   From these three assumptions that are discussed at length in Lute and Raiffa
(1957), Raiffa and Schlaifer (1961) show that “. . . the decision-maker’s indif-
ference surfaces must be parallel hyper-planes with a common normal going into
the interior of the first orthant, from which it follows that all utility characteristics
u = (u,, u2 )...) u,.) in R can in fact be ranked by an index which applies a
predetermined set of weights P = (P,, P2,. . . , P,) to their r components” (p. 25).
That is ci=, P,u, and cr=, P,v, can be employed to rank decision functions d,
and d, with utility characteristics u and t), respectively, where the Pi’s are the
predetermined set of non-negative weights that can be normalized and have all
the properties of a probability measure on 0. Since the Pi’s are intimately related
to a person’s indifference surfaces, it is clear why some refer to the normalized
Pi’s as “personal probabilities”. For more discussion of this topic see Blackwell
and Girshick (1954, ch. 4), Lute and Raiffa (1957, ch. 13), Savage (1954, ch. l-5),
and DeGroot (1970, ch. 6-7). Further, Jeffreys (1967) remarks:

       The difficulty about the separation of propositions into disjunctions of
       equally possible and exclusive alternatives is avoided by this [Bayes, Ramsey
       et al.] treatment, but is replaced by difficulties concerning additive
       expectations ‘[and utility comparisons]. These are hardly practical ones in
       either case.. . In my method expectation would be defined in terms of value
       [or utility] and probability; in theirs [Bayes, Ramsey et al.], probability is
       defined in terms of values [or utilities] and expectations. The actual
       propositions [of probability theory] are of course identical (p. 33).



2.4.    Random variables and probability   models

As mentioned in Section 1, econometric and statistical models are usually
stochastic, involving random variables. In this section several important probabil-
ity models are reviewed and some of their properties are indicated.
Ch. 2: Statistical   Theory and Econometrics                                         83


2.4.1.     Random variables

A random variable (rv) will be denoted by _Z.There are discrete, continuous, and
mixed rvs. If f is a discrete rv, it can, by assumption, just assume particular
values, that is 5 = xj, j = 0,1,2,. . _,WI, where m can be finite or infinite and the
xj’s are given values, for example x0 = 0, x, = 1, x2 = 2, and x, = m. These xj
values may represent quantitative characteristics, for example the number of
purchases in a given period or qualitative characteristics, for example different
occupational categories. If 2 can assume just two possible values, it is termed a
dichotomous rv, if three, a trichotomous t-v, if more than three, a polytymous rv.
For quantitative discrete rvs the ordering x0 -Cx, < x,_ < * - * < x, is meaningful,
while for some qualitative discrete rvs such an ordering is meaningless.
   A continuous rv, 2, such that a < 1~ b, where a and b are given values,
possibly with a = - 00 and/or b = 00, can assume a continuum of values in the
interval a to b, the range of the rv. A mixed rv, 2, a < _f -Cb, assumes a continuum
of values over part of its range, say for a < 2 < c, and discrete values over the
remainder of its range, c < 2 < b. Some econometric models incorporate just
continuous or just discrete rvs while others involve mixtures of continuous,
discrete, and mixed rvs.

2.4.2.      Discrete random variables

For a discrete rv, 2, that can assume the values, x,, x2,. . . ,x,, where the xi’s are
distinct and exhaustive, the probability that R = xj, given the initial information
A, is

         P( 2 = x,lA) = pi,            j=1,2   ,*.*, m,                          (2.1)

with

         p,>O        and      5 Pj”.                                             (2.2)
                             j=l



The collection of pj’s in (2.1), subject to (2.2), defines the probability mass
function (pmf) for the discrete rv, 2’. A plot of the pj’s against the xj’s may be
unimodal, bimodal, U-shaped, J-shaped, uniform ( p, = p2 = . . * = p,,,), etc. If it
is unimodal, the pmf’s modal value is the value of f associated with the largest pj.
Further, the mean of 2, denoted by EL;= E_Zis:

         p; = E.f = f        pjxj.                                               (2.3)
                       j=1
84                                                                             A. Zellner

In general, the zeroth and higher order moments about zero are given by


     &= ET=             g pjx;,          r=0,1,2    )....                         (2.4
                       j=l

Moments about the mean, Erl, called central moments, are given by

     Pr=E(+EZ)r=                  E   pj(xj-EZ)‘,           r=1,2,...   .         (2.5)
                                  j =1

Note that p, = 0 and that pL2,defined as the variance of 1, V(X), is

     /.L* =   V(Z) = E(s? - Em?)'

         =    5     p,(x,-   E2)‘.                                                (2.6)
              j=l

From the first line of (2.6), V(Z) = E.Z2 - 2( EZ)2 + ( ET)2 = EZ2 - ( E_T)2= p; -
(P’,)~. Similar relations can be obtained that relate higher order central moments
 to moments about zero. Also, the following unitless measures of skewness are
 available to characterize unimodal pmfs: sk = (mean- mode)/$i2,             p, = p’,/&,
 and Y=IL~/P      ‘2/’
                     .  Further, a unitless measure   of kurtosis  for unimodal  pmfs is
 given by p2 = p4/& that frequently measures the peakedness of a pmf although
 its value is sensitive to the characteristics of the tails of a pmf.
    If 2 is a discrete rv assuming only non-negative integer values with P(Z = j) =
Pjl_i=O~1~2~~~~7      thenp(z)=Cp.    ,zj is called the probability generating function
with the obvious property that p( 1) = 1, given property (2.6). Further, the ath
derivativeofp(z),evaluatedatz=O,isjusta!p,,wherecu!=cw(cw-l)(a-2)...1,
and it is in this sense that the probability generating function “generates” the
probabilities, the pj’s of a pmf.
    If in p(z) = CJYopjzjT z = e’, the result is the moment-generating function
associated with a pmf, po, p,, pz,. . . , namely


     p (e’) = C p>tj/j!,                                                          (2.7)
              i- 0

where the ~5 are given in (2.4). The expression in (2.7) is obtained by noting that



              j=O
Ch. 2: Statistical Theory and Econometrics                                                          85

and


        5 p,e*‘=       g    E   pa&j/j!      = E      fJ    p,d       tj/j!=   E     pltj/j!,
      a-0              j=Oa=O                 j=O   i a=0         i            a=0


where v; = ~~zop~d. On taking the jth derivative of (2.7) with respect to t and
evaluating it at t = 0, the result is just ~5, and it is in this sense that (2.7)
“generates” the moments of a pmf. Upon taking z = ei’ in p(z), where i = m,
by similar analysis the characteristic function for a pmf can be obtained, namely


                                                                                                (2.8)
                 j=O


from which the moments, p;, j = 0,1,2,. . . , can be obtained by differentiation
with respect to t and evaluating the derivatives at t = 0. It can be shown by
complex Fourier series analysis that a specific pmf function has a unique
characteristic function and that a specific characteristic function implies a unique
pmf. This is important since, on occasion, manipulating characteristic functions is
simpler than manipulating pmfs.
   We now turn to consider some specific pmfs for discrete TVS.

2.4.2.1. The binomial process. Consider a dichotomous rv, jji, such that Ji = 1
with probability p and jj = 0 with probability 1 - p. For example, yi = 1 might
denote the appearance of a head on a flip of a coin andyi = 0 the appearance of a
tail. Then E_j7i=l.p+0.(1-p)=p           and V(~i)=E(~i-E’i)2=(1-p)2p+
(O-p)2(1-p)=p(l-p).         Now consider a sequence of suchyi’s, i=1,2,...,n,
such that the value of any member of the sequence provides no information about
the values of others, that is, the yi’s are independent rvs. Then any particular
realization of r ones and n - r zeros has probability ~‘(1 - p)“-‘. On the other
hand, the probability of obtaining r ones and n - r zeros is

      P(F=rln,p)=(:)p’(l-p)“-‘,                                                                 (2.9)

where


      (:1=n!/r!(n -r)!.
Note that the total number of realizations with r ones and n - r zeros is obtained
by recognizing that the first one can occur in n ways, the second in n - 1 ways, the
third in n - 2 ways, and the rth in n -(r - 1) ways. Thus, there are n(n - 1)
86                                                                          A. Zellner

(n-2)...(n-r+l)        ways of getting r ones. However, r(r-l)(r-2)...2.1         of
these ways are indistinguishable.       Then n( n - l)( n - 2). . . (n - r + 1)/r!
 = n!/r!(n - r)! is the number of ways of obtaining r ones in n realizations. Since
~‘(1 - p)“-’ is the probability of each one, (2.9) provides the total probability of
obtaining r ones in n realizations.
   The expression in (2.9) can be identified with coefficients in a binomial
expansion,




where q = 1 - p, and hence the name “binomial” distribution. Given the value of
p, it is possible to compute various probabilities from (2.9). For example,




where r, is a given value of r. Further, moments of r can be evaluated directly
from


     E(J”lp,n)=      2 r”P(i=rlp,n).
                    r=O

By such direct evaluation:

     &=EP=np,

     /LL;= Er”* = (np)*+   np(l-   p),                                        (2.10)

     /L~=E(~“-EF)*=np(l-p).

Further, higher central moments can be evaluated directly or computed from the
Ramonovsky recursion formula, CL,+, =pq[anpL,_, -dp,/dq],           (~=1,2,..., with
q = 1 - p. From these results the skewness measure y, introduced above, is
Y = P3/PY2    = (q - p)/6,        while the kurtosis measure & = p4/& = l/npq +
3(n - 2)/n and the “excess” is fi2 - 3 = l/npq -6/n.     For p = q = l/2, y = 0, that
is, the binomial pmf is symmetric.
   From (2.10), the moments of the proportion of ones, f//n, are easily obtained:
E/n = p, E(F/n)* = p* + p(l- p)/n and E[F/n - E?/n]* = p(l- p)/n. Also
note that E(f/n)” = ( EJa)/na, a = 1,2, . . . .
   It is of great interest to determine the form of the binomial pmf when both r
and n - r are large and p is fixed, the problem solved in the DeMoivre-Laplace
Ch. 2: Statistical   Theory and Econometrics                                                             87

Theorem. With m = n - r,



Stirling’s formula, log n ! = (n + 1/2)log n - n + (1/2)log 27r+ 0( n- ‘), can be ap-
plied for large r and m to yield

       -logP(J=         rln,p)    G (1/2)log(2nrm/n)
                                     +rlog(r/np)+mlog[m/n(l-p)]

or4

       P(r”=rlp,n)G           [2anp(l-p)]-        1’2exp{-(r-np)2/2np(1-p)},                       (2.11)

which is a normal approximation5 to the binomial pmf when r and m = n - r are
both large. In (2.1 l), the mean and variance of f are np and np( 1 - p), respec-
tively, the same as the exact values for these moments. See, for example, Kenney
and Keeping (195 1, p. 36ff) and Jeffreys (1967, pp. 61-62) for discussions of the
quality of this approximation. If we let 7 = f/‘/n, with the condition underlying
(2.1 l), 7 has an approximate normal distribution with mean p and variance
p(1 - p)/n. Thus, (2.11) is an important example of a case in which a discrete
rv’s pmf can be well approximated by a continuous probability density function
(pdf).

2.4.2.2. The Poisson process. The Poisson process can be developed as an
approximation to the binomial process when n is large and p (or ~7= 1- p) is
small. Such situations are often encountered, for example, in considering the
number of children born blind in a large population of mothers, or the number of
times the volume of trading on a stock exchange exceeds a large number, etc. For
such rare (low p) events from a large number of trials, (2.11) provides a poor
approximation to the probabilities of observing a particular number of such rare
events and thus another approximation is needed. If n is large but np is of
moderate size, say approximately of order 10, the Poisson exponential function
can be employed to approximate




   4Let r/n = p + e/n’/‘,     where E is small, or I = np + n ‘12~ and n-r=m=n(l-p)-n’/2e.               On
substituting  these expressions for r and m in the logarithmic      terms, this produces terms involving
log[ I+ e/pn”2]    and log[ I- E/( I- p) n ‘I2 j. Expanding these as log( I+ x) = x - x 2/2 and collecting
dominant terms in Ed, the result is (2.11).
   ‘See below for a discussion of the normal distribution.
88                                                                            A. Zellner


That is, with 8 = np, if 8 and r are fixed and n + co,

                                                                                 (2.12)

which is the Poisson approximation to the probability of r occurrences of the rare
event in a large number of trials [see, for example, Kenny and Keeping (195 1, p.
44ff) for a discussion of the quality of the approximation]. In the limit as n + 00,
P(P = r(e) = Ore-‘/r! is the exact Poisson pmf. Note that ~;C”=,B’e-e/r! = 1 and
qqe) = 8, qf*je) = e(e + i), E(F - EF)* = 8, qf - ~r”)~= 8, and E(p - EF)~
= 30* + 8. It is interesting that the mean, variance, and third central moment are
all equal to 8. From these moments, measures of skewness and kurtosis can be
evaluated.

2.4.2.3. Other variants of the binomial process. Two interesting variants of the
binomial process are the Poisson and Lexis schemes. In the Poisson scheme, the
probability that yi = 1 is pi, and not p as in the binomial process. That is,
the probability of a one (or “success”) varies from trial to trial. As before, the yi’s
are assumed independent. Then the expectation of 7, the number of ones, is


      EP=Eiyi=
             tpi=njj,
                i=l         i=l


where



          i=l


and




where


      Zj=l-p          and         up’= i    (pi-p)*/n.
                                      i=l



Note that I’( ?) is less than the variance of f associated with independent binomial
trials with a fixed probability B at each trial.
   Extensions of the Poisson scheme that are widely used in practice involve the
assumption that pi = f ( xi,/3),where xi is a given vector of observed variables and
Ch. 2: Statistical Theory and Econometrics                                             89

j3 is a vector of parameters. The functionf(   .) is chosen so that 0 < f(a) < 1 for all
i. For example, in the probit model,

      pi = (2~)-‘
                /2~pe-r’/2dt,                                                     (2.13)
                          -CC



while in the logit model,

      pi = l/( 1 + eexiB).                                                        (2.14)

Then the probability of any particular realization of the pi, i = 1,2,. . . , n, is given
bY

      i_, PY’(l-     Pi)l-“,                                                      (2.15)


where yi = 0 or 1 are the observations. By inserting (2.13) or (2.14) in (2.15), the
probit and logit models, respectively, for the observations are obtained. Of course,
other functions f( a) that satisfy 0 -Cf( .) < 1 for all i can be employed as well, for
examplepi=f(xi,~)=1-e-8xf,with~>OandO~x~cco,etc.
   In the Lexis scheme, m sets of n trials each are considered. The probability of
obtaining a one (or a “success”) is assumed constant within each set of trials but
varies from one set to another. The random number of ones in the jth set is 5,
with expectation Eq = npj. Then, with r”= ~~=, 5, Er”= nci”_, pi = nmp, where
here j? = cy=, pj/m. Also, by direct computation,

      var(?) = npq + n(n - l)u,“,                                                 (2.16)

whereg=l-P        and u~=c~=,(pj-#/         m. It is seen from (2.16) that KU(~) is
larger than from binomial trials with a fixed probability jS on each trial.
   If a2 is the variance of ?, the number of ones or successes in a set of n trials,
and if us2is the variance calculated on the basis of a binomial process, then the
ratio L = u/up is called the Lexis ratio. The dispersion is said to be subnormal if
L<l,andsupernormalifL>l.
   The negative binomial process involves observing independent yi’s, as in the
binomial process, but with the condition that a preassigned number of ones be
observed. Thus r, the number of ones (or successes) to be observed, is fixed and
the number of observations or trials, n, is random. Since the last observation is a
one with probability p and the probability of getting r - 1 ones in the first n - 1
trials is
90                                                                               A. Zellner


the desired probability of observing r ones, with r fixed beforehand in n trials, is


      P(fi=nlr,p)=      (:I:)p’(l-p)‘-r.                                            (2.17)


with n 2 r 2 1, which should be compared with the pmf for the usual binomial
process in (2.9).

2.4.2.4.    Multinomial process. Let pj be the probability that a discrete rv, jji,
assumes the value j, j = 1,2,. . . , J. If we observe n independent realizations of jjj,
i = 1,2 ,.**, n, the probability that r, values havej = 1, r. havej = 2,. . . , and r- have
j=J,withn=xJ         i_,ri, is given by


      P(F=rlp)=      &:!      rJ,P;‘P;‘***P;J,                                      (2.18)
                       . . ... .


withr”‘=(f,,J,    ,..., llJ),r=(r,,rz ,..., r,),p’=(p,,p, ,..., p,), O,<pj, andCj=ipj
 = 1. If J = 2, the multinomial pmf in (2.18) becomes identical to the binomial pmf
in (2.9). As with the binomial pmf, for large n and q’s, we can take the logarithm
of both sides of (2.18), use Stirling’s approximation, and obtain an approximating
multivariate normal distribution [see Kenney and Keeping (195 1, pp. 113- 114)
for analysis of this problem]. Also, as with (2.13) and (2.14), it is possible to
develop multivariate probit and logit models.
   The pmfs reviewed above are some leading examples of probability models for
independent discrete rvs. For further examples, see Johnson and Kotz (1969).
When non-independent discrete rvs are considered, it is necessary to take account
of the nature of dependencies, as is done in the literature on time series point
processes [see, for example, Cox and Lewis (1966) for a discussion of this topic].

2.4.3.     Continuous random variables

We first describe some properties of models for a single continuous rv, that is,
univariate probability density functions (pdfs), and then turn to some models for
two or more continuous rvs, that is, bivariate or multivariate pdfs.
   Let 2 denote a continuous rv that can assume a continuum of values in the
interval a to b and let f(x) be a non-negative function for a < x < b such that
Pr(x < 2 < x +dx) =f(x)dx,      where a < x < b and /,bf(x)dx     = 1. Then f(x) is
the normalized pdf for the continuous rv, 2. In this definition, a may be equal to
 - cc and/or b = 00. Further, the cumulative distribution function (cdf) for ZZis
given by F(x)= /cf(t)dt     with a <x < b. Given that ],6f(t)dt = 1,0 < F(x) < 1.
Further,Pr(c<Z:d)=F(d)-F(c),wherea<c<d<b.
Ch. 2: Statistical    Theory and Econometrics                                                                     91

   The moments around zero of a continuous rv, 2, with pdf f(x),                                   are given by

       r;=E~‘=/bx~(x)dx,                        r=0,1,2    ,...,                                             (2.19)
                   0

with PL;= the mean of f. The central moments are given by

       pr=E(it-EZ)‘=                   b(Z-E_?‘)rf(x)dx,              r=0,1,2        ,***,                   (2.20)
                                     /a

with /.L*= u2, the variance, and u, the standard deviation. Note that p, = 0. Also,
moments are said to exist when the integrals in (2.19) and (2.20) converge; in
cases in which particular integrals in (2.19) and (2.20) fail to converge, the
associated moments do not exist or are infinite.6
   For unimodal pdfs, unitless measures of skewness are sk = (mean - mode)/u,
P, = P:/l-& and y, = p3/&12. For symmetric, unimodal pdfs, mean = modal
value and thus sk = 0. Since all odd order central moments are equal to zero,
given symmetry, /3, = y, = 0. Measures of kurtosis are given by p2 = p4/& and
y2 = p2 - 3, the “excess”. For a normal pdf, p2 = 3, and y2 = 0. When y2 > 0, a
pdf is called leptokurtic, and platykurtic when y2 < 0.
   The moment-generating function for f with pdf f(x) is

       M(t) =lbf(x)e’“dx                                                                                     (2.21)
               a

from which

         d’M( t)             = Ef’
              dt       r=O

under the assumption that the integral in (2.21) converges for some t = to > 0. In
(2.21), a may equal - co and/or b may equal co. Thus, knowing the form of M(t)
allows one to compute moments conveniently.
   The characteristic function associated with the continuous rv, 2, with pdf f(x),
is given by

       C(t)    =     /“f( x)eirxd.x,                                                                         (2.22)
                      El

where i = J-1.   It is known that the integral (2.22) converges uniformly in t.
Thus, the rth derivative of C(t) with respect to t is i’l,6x’f(x)e”“dx. On setting

   6For analysis regarding the convergence and divergence      of integrals,   see, for example,    Widder    (I 96 I,
p. 27 1ff.), or other advanced calculus texts.
92                                                                                      A. Zellner


t = 0, Ccr)(0)= i’p:, which provides a useful expression for evaluating moments
when they exist. See Kendall and Stuart (1958, ch. 4) for further discussion and
uses of characteristic functions.
   For each characteristic function there exists a unique pdf and vice versa. On the
other hand, even if moments of all orders exist, it is only under certain conditions
that a set of moments uniquely determine a pdf or cdf uniquely. However, as
Kendall and Stuart (1958) point out, “. . . fortunately for statisticians, those
conditions are obeyed by all the distributions arising in statistical practice” (p. 86;
see also p. 109ff.).
   Several examples of univariate pdfs for continuous rvs follow.

2.4.3. I.   Uniform.           A N    2   has a uniform pdf if and only if its pdf is

                                                                                           (2.23)

and f(x) = 0 elsewhere. That (2.23) is a normalized                      pdf is apparent    since
/,hf(x)dx = 1. By direct evaluation,

      &=                X’
                     b-ddx=          $---&(b’+‘-a’+‘),                r=1,2...,
            /   (1     b-a

and thus EZ = (a + b)/2 and EZ2 = ( b3 - a3)/3( b - a) = ( a2 + ab + b2)/3. Also,
from V(Z) = EZ2 -(EQ2,    V(Z) = (b - ~)~/12. Note too that the moment-gener-
ating function is

      M(t) = /“&                dx = G-5;
              ”
                     = 1 + l/2( a + b)t + l/3( a2 + ab + b2)2!t2 + . * - ,

where eb*= 1 + bt + (bt)2/2! + - - - and a similar expression for ear have been
employed. Then, for example, & = M’(0) = (a + b)/2, pL; = M”(0) = ( a2 + ab +
b2)/3, etc. Finally, observe that (2.23) can be expressed as df/dx = 0, a < x c b.
The solution of this differential equation subject to the normalization condition
and f (x) = 0 for x < a and x > b leads to (2.23).

2.4.3.2. Cauchy. A rv 2 is distributed in the Cauchy form if and only if its pdf
has the following form:




                                                                                           (2.24)
Ch. 2: Statistical Theory and Econometrics                                               93


That (2.24) is a normalized pdf can be established by making a change of
variable, z = (x - @)/a, and noting that /T,(l+     z2)-‘dz = 7~.Further, note that
(2.24) is symmetric about 8, the location parameter which is the modal value and
median of the Cauchy pdf. However, 8 is not the mean since the mean and higher
order moments of the Cauchy pdf do not exist. The non-existence of moments is
fundamentally due to the fact that the pdf does not rapidly approach zero as
(x - ~)‘/cI 2 grows large; that is, the Cauchy pdf has heavy tails. A useful measure
of dispersion for such a pdf is the inter-quartile range (IQR), that is, the value of
2c, with c > 0, such that F(8 + c)- E;(B - c) = 0.5, where F( .) is the Cauchy cdf.
For the Cauchy pdf, IQR = 2~.
   On making a change of variable in (2.24), z = (x-8)/u,           the standardized
Cauchy pdf is obtained, namely




which is symmetric about z = 0, the modal value and median. Further, it is
interesting to note that (2.25) can be generated by assuming that the arc tangent
of an angle, say w, ranging from - r/2 to 7r/2 is uniformly distributed, that is,
w = tan-‘z has a pdf p(w)dw = da/m, - rr/2 < w < r/2. Since do = dtan-‘z =
dz/(l + z)~, this uniform pdf for w implies (2.25).

2.4.3.3.    Normal.       A rv 2 is said to be normally distributed if and only if its pdf
is

      jyxle,   u) = (l/dG)exp{               - (x - ej2/202},
                                             -C%Io<X~CQ,        co<8<oo,   O<u<cc.   (2.26)

The pdf in (2.26) is the normal pdf that integrates to one and thus is normalized.
It is symmetric about 8, a location parameter that is the modal value, median, and
mean. The parameter u is a scale parameter, the standard deviation of the normal
pdf as indicated below. Note that from numerical evaluation, Pr{lx - 8) 6 1.96~)
= 0.95 for the normal pdf (2.26) indicating that its tails are rather thin or,
equivalently, that (2.26) decreases very rapidly as (x - 8)2 grows in value, a fact
that accounts for the existence of moments of all orders. Since (2.26) is symmetric
about 0, all odd order central moments are zero, that is, p2r+, = 0, r = 0,1,2,. . . .
From E(z? - 0) = 0, ET = 8, the mean of the normal pdf. As regards even central
moments, they satisfy

                        = u2’2’r( r + 1/2)/h
      pLZr= E( 2 - E_%?)2r
           = u2’(2r)!/2’r!,                                                          (2.27)
94                                                                                            A. Zettner

where r( r + l/2) is the gamma function, r(q), with argument q = r + l/2, that
is, r(q) = jo” ~q-‘e-~du, with 0 < q -c 00.~ From (2.27), p2 = a2 and p4 = 3a4.
Thus, the kurtosis measure p2 = p,/& = 3 and y2 = & - 3 = 0 for the normal
pdf.
   The standardized form of (2.26) may be obtained by making a change of
variable, z = (x - @)/a, to yield

        f(z) = (l/G+qo                z2/2},        --oo<z<co,                                   (2.28)

with modal value, median, and mean at z = 0. Also, V(Z) = 1 and E(L? - z)~ = 3
from (2.27).
   As was shown in Section 2.4.2.1, the normal pdf can be viewed as a limiting
form of the binomial process. Below it will be indicated that central limit
theorems show that more general sequences of rvs have limiting normal distribu-
tions. These results underline the importance of the normal distribution in
theoretical and applied statistics.

2.4.3.4. Student-t.    A N 2 is distributed in the univariate Student-t (US-t) form
if and only if it has the following pdf:




                           --oo~x~~,           --oo<e~oo,          O<v,h<co,                     (2.29)

with c = r[( Y+ 1)/2]/fir(    v/2), wh ere r( *) denotes the gamma function. From
inspection of (2.29) it is seen that the US-t pdf has a single mode at x = 8 and is
symmetric about the modal value. Thus, x = 0 is the median and mean (which
exists for Y> 1 -see below) of the US-t pdf. As will be seen, the parameter h is
intimately linked to the dispersion of the US-t, while the parameter V, often called
the “degrees of freedom” parameter, is involved both in the dispersion as well as
the kurtosis of’the pdf. Note that if Y= 1, the US-t is identical to the Cauchy pdf
in (2.24) with h = l/a2. On the other hand, as Y grows in value, the US-t
approaches the normal pdf (2.29) with mean t9 and variance l/h.
   In Zellner (1971, p. 367 ff) it is shown that the US-t pdf in (2.29) is a
normalized pdf. The odd order moments about 8, pLZr_,= E(5 - 0)2r-1, r =
1,2,..., exist when v > 2r - 1 and are all equal to zero given the symmetry of the
pdf about 0. In particular, for v > 1, E(T - 0) = 0 and EZ = 8, the mean which
exists, given Y> 1. The even order central moments, p2, = E(R - 0)2r, r = 1,2,. . . ,

     ‘See, for example, Zellner (1971, p. 365) for a derivation of (2.27). From the calculus, T(q + 1) =
qT( q), r( 1)= 1,and r( l/2) = &. Using these relations, the second line of (2.27) can be derived from
the first.
Ch. 2: Statistical Theory and Econometrics                                                            95

exist given that v z=-2r and are given by

                                 r(r++)r(v/2-r)                 v     r
      p2r   =   E( 2 - q2, =                                                  r=1,2   >***, v > 2r.
                                     I71/2)I+/2)              (h 1 ’
                                                                                                  (2.30)

From (2.30), the second and fourth central moments are pL2= E(Z - 13)~= v/
(v -2)/z, v > 2, and p4 = E(_+Z- e)4 = 3v2/(v -2)(v -4)h2, v > 4. The kurtosis
measure is then y2 = p4/& - 3 = 6/(v -4), for v > 4, and thus the US-t is
leptokurtic (y2 > 0). As v gets large, y2 3 0, and the US-t approaches a normal
form with mean fI and variance l/h. When v > 30, the US-t’s form is very close
to that of a normal pdf. However, for small v, the US-t pdf has much heavier tails
than a normal pdf with the same mean and variance.
   The standardized form of (2.29) is obtained by making the change of variable,
t = fi(x - e), that yields

     f( tjv) = (c/q/(           1+ P/v)‘” + ‘)‘2,            --OO<t<co,                          (2.31)

where c has been defined in connection with (2.29). The standardized US-t pdf in
(2.31) has its modal value at t = 0 which is also the median. The moments of
(2.31) may easily be obtained from those of X - 6’presented above.
   Finally, it is of interest to note that the US-t pdf in (2.29) can be generated as a
“continuous mixture” of normal pdfs, that is,

                                                                                                 (2.32)


wheref,(xle, a) is the normal pdf in (2.26) andf,,(uIh,                       v) is an inverted gamma
pdf “mixing distribution” for u, 0 < U.-C00, given by


     fro(crlv, h) = L(                y)‘/2u-(V+1)exp(          s),                              (2.33)
                    Qv/2)             2h

where v and h are the parameters in the US-t pdf in (2.29).8 From (2.32), it is seen
that fN( ~10, u) is averaged over possible values of u. This is an example in which
the standard deviation u of a normal pdf can be viewed as random with the pdf
shown in (2.33). The fact that (2.32) yields the US-t pdf is a useful interpretation
of the US-t pdf. Many well-known pdfs can be generated as continuous mixtures
of underlying pdfs.


  ‘See Zellner (1971, p. 371ff) for properties   of this and other inverted   gamma   pdfs.
96                                                                                            A. Zellner


2.4.3.5.    Other important univariate pdfs. Among many pdfs that are important
in theoretical and applied statistics and econometrics, the following are some
leading examples.
    The gamma pdf, f (x(y, a) = ~~-‘e-~/y/y~I’(a),      with 0 < x < cc and parame-
ters 0 -C(Y,y is a rich class of pdfs. With a change of variable, z = x/y, it can be
brought into standardized form, p( z/a) = za- ‘e-‘//T(a), 0 -Cz < cc. In this form
its relation to the gamma function is apparent. If in the non-standardized gamma
pdf (Y= v/2 and y = 2, the result is the &i-squared pdf with v “degrees of
freedom”, p(xlv) = x v~2-‘e-x~2/2’~2~(v/2),       with 0 -Cx <co and 0 <V-C cc. If
the transformation       x = l/Y2 is made, the pdf for Y is p( y ly,a) =
2e- ‘/yyZ/y2a+ ‘r( (~)y~, 0 < y < co. The particular inverted gamma pdf in (2.32)
can be obtained from p( yly, a) by setting u = Y, (Y= v/2, and y = 2h/v. Proper-
ties of these and other gamma-related densities are discussed in Raiffa and
 Schlaifer (1961), Zellner (197 I), and Johnson and Kotz (1970).
    For a continuous rv that has a range 0 < x < c, the beta pdf, f (xla, b, c) =
(x/c)“- ‘( 1 - x/c)~- ‘/cB( a, b), where B( a, b) is the beta function’ with a, b > 0,
is a flexible and useful pdf that can assume a variety of shapes. By a change of
variable, Y = x - d, the range of the beta pdf above can be changed to Y = - d to
Y = c-d.     Also, by taking z =x/c,      the standardized form is f(zla, b) = z”-’
(1 - ~)~-‘/ll(a,   b), with 0 d z d 1. There are various pdfs associated with the beta
pdf. The inverted beta pdf is obtained from the standardized beta by the
 change of variable z=l/(l+u),           so that 0~ u<oc and f(ula,b)=           u”-‘/
 (1 + u)a+bB(a, b) is the inverted beta pdf. Another form of the inverted beta pdf
 is obtained by letting u = Y/c, with 0 < c < cc. Then f(yla, b, c) = (Y/c)~-‘/(~ +
Y/C) U+bcB(a, b), with 0 -Cy < 00. The Fisher-Snedecor F distribution is a special
 case of this last density with a = v2/2, b = v, /2, and c = v2/v,. The parameters
 v, and v2 are referred to as “degrees of freedom” parameters. Properties of the
 pdfs mentioned in this paragraph are given in the references cited at the end of
 the previous paragraph.
    The discussion above has emphasized the importance of the normal, Student-t,
 beta, and gamma distributions. For each of the distributions mentioned above
 there are often several ways of generating them that are useful, lead to greater
 insight, and are of value in analysis and applications. For example, generation of
 the US-t as a special continuous mixture of normal pdfs was mentioned above. A
  rv with the &i-squared pdf with v degrees of freedom, say 22, can be considered
  as the sum of v squared independent, standardized normal variables, 2; = cy_, ff,
  with i; = (ni - 19)/a. If x:, and $z, are two independent &i-squared variables
  with v, and v2 degrees of freedom, respectively, then &=         (X~,/V,)/(~~,/V~)
  has an F-pdf with v, and v2 degrees of freedom. These are just some of the ways

     ‘From    the calculus,   B(a, b) = B(b, n) = r(a)T(b)/r(o   + b).   Also,   B(u,   b) = /d   ~“~‘(1-
 ~)~-‘clr,   a, b > 0.
Ch. 2: Statistical Theoty and Econometrics                                             91

in which particular pdfs can be generated. Further examples are provided in the
references mentioned above.
   Above, the reciprocal transformation was employed to produce “inverted”
pdfs. Many other transformations can be fruitfully utilized. For example, if the
continuous rv jj is such that 0 < jj < cc and 2 = In J, - 00 < K < co, has a normal
pdf with mean 8 and variance a*, 7 is said to have a “log-normal” pdf whose
form can be obtained from the normal pdf for 2 by a simple change of variable.
The median of the pdf for 9 = e’ is ee, while the mean of jj is Ej? = Ee"l = e’+“‘/*.
Thus, there is an interesting dependence of the mean of jj on the variance of X.
This and many other transformations have been analyzed in the literature.
   Finally, it should be noted that many of the pdfs mentioned in this section can
be obtained as solutions to differential equations. For example, the normal pdf in
(2.26) is the solution to (l/f)df/dx     = -(x - ~)/a*. The generalization of this
differential equation that yields the Pearson system of pdfs is given by

       1 df
      --=              -(x-u)
                                                                                  (2.34)
      f   dx      (b, + b,x + b,X2).
The integral of (2.34) is

      f(x)    = A(x - C,yyC*         - xy,                                        (2.35)

where the value of A is fixed by /f (x)dx = 1 and c, and c2 are the roots, possibly
complex, of b, + b,x + b2x2 = 0. See Jeffreys (1967, p. 74ff.) for a discussion of
the solutions to (2.35) that constitute the Pearson system which includes many
frequently encountered pdfs. For a discussion of other systems of pdfs, see
Kendall and Stuart (1958, p. 167 ff.).

2.4.3.6. Multivariate pdfs for continuous random variables. Consider a random
vector 2 = (n,, Z,, . . . ,a,), with elements z~, i = 1,2,. . . ,m, that are scalar con-
tinuous rvs. Assume that f c R,, the sample space. For example, R, might be
 - OO~~~<OO, i=1,2 ,..., m. The pdf for Z’, or equivalently the joint pdf for the
elements of -3,f(x) = f(x,, x2 ,..., xm), is a non-negative continuous and single-
valued function such thatf(x)dx=        f(x,,x2,...,xm)dx,dx2...dx,         is the proba-
bility that f is contained in the infinitesimal element of volume dx =
dx,dx,...  dx,. If

      j$x)dx=jh             . ..jf(x.,x2     ,..., x,)dxldx2...dx,=1,             (2.36)
         X                 x
then f (x) is a normalized pdf for f. When f has just two elements, m = 2, f(x) is
a bivariate pdf, if three elements, m = 3, a trivariate pdf, and if m > 3, a
multivariate pdf.
98                                                                                             A. Zellner


   When R, is -cc<~?~<cc,     i=1,2 ,..., m, the cumulative distribution function
associated with f(x) is F(a) given by

      F(a) = Pr(x < u) = /=’ Ia2 . ..j-.,f(x,,x2                  ,..., x,)dx,dxZ...dx,,
                          -m -cc

where a’ = (a,, u2,. . . , a,) is a given vector and Pr(f G a) is the probability of the
intersection of the events 5!‘i6 a,, i = 1,2,. . . ,m.
   The mean, assuming that it exists, of an m X 1 random vector f is

                              ’4 ’
                               4
                                         = 0,                                                     (2.37)

                              \ &I ,

where, if 2 has pdf f(x)        and 2 c R,,

      EZi=8,=~xif(x)dr,                         i=1,2 ,..., m.                                    (2.38)
                   x
This means that the di’s exist and are finite if and only if each integral in (2.38)
converges to a finite value.
  Second order moments about the mean vector 8 are given by
      V(J)=E(x-8)(x-8)‘={E(Zi-f3,)(Zj-6j)},                                   i,j=1,2,...,m,
                                                                                                  (2.39)
and the typical element of the symmetric m X m matrix V(a) is given by

      E(~~-t$)(f~--o~)=~~,=~                     (Xi-8i)(xj-q)f(x)dx.                             (2.40)
                                                x
If, in (2.40), i = j, uii = E(Zi - 0,)’ is the variance of Zi, i = 1,2,. ..,m, while if
i * j, uij, given in (2.40), is the covariance of Zi and Zj. Clearly, uij = uji and thus
the m x m matrix of variances and covariances,

                (JII   u,2         ...       elm
                U21    a22         ...       U2m
      V(f)=      .        .        .           .     =Z,                                          (2.41)
                                         .      .

               _ Uml   Urn2        ***       Umm


the   “covariance matrix” for 5 is symmetric with m( m + 1)/2 distinct elements.
Ch. 2: Statistical Theory and Econometrics                                                        99

   The “correlation matrix,” denoted by P, associated with V(a) is given by

              1       PI2      PI3     ...       Plm

              P21     1        P23     ” *       P2m

                               1       ...
      P=      P3I     P32                        PJm

                                             .   .




where pij = oij/fi,                i, j = 1,2,3 ,..., m. Note that P is symmetric and that
P = D-‘2D-‘,       with E given in (2.41) and D is an m X m diagonal matrix with
typical element crii‘I2 . In general, mixed central moments are given by P,,,~,,,.,,~,=
E(~,-8,)‘~(~2-f32)‘2...(Xm-~~)‘~,          li=0,1,2 ,..., i=1,2 ,..., m.
   To illustrate linear transformations of the elements of 2 - 8, consider the m x 1
random vector z’= H( f - 8), where H is an m x m non-stochastic matrix of rank
m. Then from the linearity property of the expectation operator, EC = HE( 2 - d)
 = 0, since E_$= B from (2.37). Thus, z’has a zero mean vector. By definition from
(2.39), V(Z) = Ed = HE(f - e)(_i! - @‘H’ = HZH’, the covariance matrix of 5
Now if 2 is positive definite, there exists a unique H such that HZH’= Im.” If H
issochosen,thenF/(Z)=E~~‘=I,;thatis,EZ,2=1,i=1,2,...,m,andE~~~~=O
for all i * j. From H2H’ = I,, 2 = H - ‘(H’) - ’ and 2 - ’= H’H. Furthermore,
from z = H( x - d), the Jacobian of the transformation is

      J= mod 2             = modlH1,                                                         (2.42)
                  I    I

where “mod” denotes absolute value, and the Jacobian matrix is

                  --az, az,   dz,
                  ax, ax, .*- ax,

                                                       =H,


                  mm
                  i?Z        aZ      az
                  ax,        ax2 -** e


   “That is, given that 2 is a positive definite symmetric matrix, B can be diagonalized as follows:
P’ZP = D(Xi), where P is an m X m orthogonal          matrix and the A, are the roots of 2. Then
D-‘/2P’.YPD-‘/2     = I and H= D-‘i2P’,      where D- ‘/’ = D(X; ‘/2), an m X m diagonal matrix with
typical element XT I”.
100                                                                                    A. Zellner


and dz = Jdx shows how the transformation from z to x modifies the infinitesi-
mal unit of volume. Thus, the pdf for z, f(z) gets transformed as follows:
f(z)dz = Jf[H(x - @Id x and f [ H( x - 0)] is the pdf for x.”
   Associated with bivariate and multivariate pdfs are marginal and conditional
pdfs. For example, in terms of a bivariate pdf, f(x,, x2), the marginal pdf for 2,
is given by

                                                                                         (2.43)


while the marginal pdf for f, is


         hh)          =s,fhx,)dx,.
                            XI




Note that


         J, dx,)dx, =s,
                      h(x,)dx, =l
            XI                     x*


given that f(x,, x2) satisfies (2.36). Also, g(x,)dx, is the probability that 2, is in
the interval (xl, x1 +dx,) for all values of zZ2and similarly for h(xZ).
Definition

The rvs 2, and 2, are independent if and only if their joint pdf, f (x1, x2), satisfies
f (x19    x2)     =   g(X,V(X*)*


   The conditional pdf for Zr given Z7,, denoted by f (x,lx,),           is

         f blI4          =fh       xM(4                                                  (2-W


provided that h ( x2) > 0. Similarly, the conditional pdf for Z2 given Zi, denoted by
f(xAx,),    if f(xAx,)=f(   x1, x*)/g(x,),   provided that g(x,) > 0. From (2.44),
f (xl, x2) = f (x11x2)h(x2)  which, when inserted in (2.43), shows that the margi-
nal pdf


         s(x,)        =s,    f (x,lxdh(x&xz
                            x2

   “Ifz.=+(x)      i=1,2,...,m,orz=~(x)r~presentsasetofone-to-onetransformationsfromxtoz
and if i’has bdfj(z), thenf(z)dz = Jf[+(x)ld x, where J = mod1&$/axl is assumed not equal to zero
in R,.
Ch. 2: Siatistical        Theory and Econometrics                                                       101


can be interpreted as an average of the conditional pdf f(x, 1x2) with the marginal
pdf h(xZ) serving as the weighting function. Also, from (2.44),


        / R f(x,lx,)dx, = 1
             XI


since

        L fh               x,)dx, = hhh
             XI


   An instructive interpretation                      of (2.44) is obtained by writing

       f(x,,xz)dx,dx,=                       [h(x,)dx,l[f(x,lx,)dx,l
                                          = Pr(x, < z2 -Cx2 +dx,)Pr(x,       -K2, <x1 +dx,ll,   =x2).

   Some of these general features of multivariate pdfs will be illustrated below in
terms of specific, important pdfs that are frequently employed in econometrics.

(1) Bivariate Normal (BN).    A two-element random vector, f’ = (n,, a,), has a
BN distribution if and only if its pdf is


       fh              = (2no,eZ/~)-‘exp{-Q/2},
                    “%I@                                                      -~~xx1,x2<co,
                                                                                                 (2.45)
where

        Q=        [(x,     -d2/u:           +(x2      -~2)~/u22



                  -2P(x,-Bl)(x2-~2)/u,u~]/(1-P2)
                                                                                                 (2.46)


andfi’= (P,, p2,(J,,a,, P), with IPI < 1, -coco~i~co, and O<ui~ccco, i=1,2.
Under these conditions, Q is a positive definite quadratic form.
    To obtain the standardized form of (2.45), let zI = (x, - ~,)/a, and z2 = (x2 -
p2)/u2,  with dz,dz2 = dx,dx,/u,u,.   Further, let the 2X2 matrix P-’ be defined
by

        P-L-+[                      -‘p        ;p].


Then Q = z’P - ‘z, where z’= (z,, z2) and (2.45) becomes

       f(zlp)            = (2~)-11PI-‘/2exp{-z’P-‘z/2},                                          (2.47)
102                                                                                     A. Zellner


with -CO-CZ,,Z~ <cc, and where lPl-1/2 =1/(1-p2)‘/2.             This is the stan-
dardized BN pdf.
  Now in (2.47) let z = Hu, where V’= (II,, v2) and H is a 2 X 2 non-singular
matrix such that H’P - ‘H = 12. Then dz = (Hldv, and, from H’P - ‘H = I,,
JH’P-‘HJ = JH)2)P-‘) = 1 or JHJ = IPl ‘I* . Using these results, (2.47) becomes

      f(u)   = (2?r)-‘exp{       - v/u/2}

             = [(24)P”2exp{           - r$/2}] [(29r)-““exp{       - u:/2}].               (2.48)

Thus, 6, and d, are independent, standardized normal rvs and /f( u)dv = 1,
implying that /f(xlB)dx = 1. Furthermore, from (2.48), EC= 0, so that Ez’= HE6
 = 0, and from the definition of z, E5il = p, and EJ?, =p2. Thus, Ei =p, p’=
(p,, p2), is the mean of f. Also, from Efk?’= I, and z’= Hi?, EC? = HEiYH    =
HH’ = P, since from H’P - ‘H = I,, P = HH’. Therefore,


                                                                                           (2.49)


where the matrix involving p is the inverse of P - ‘, introduced above. Then (2.49)
yields
                             2

                                 =l      or   E(Z,-p,)2=uf,




and


      EZlf2=E(~)(~)=p                                  or     E(Tl-p1)(322-p2)=~1~2p.


From these results, V(_Z,)= u:, V(Z2) = u: and p = E(Zl - pl)(Z2 - p2)/alu2 is
the correlation coefficient for _Z,and Z2.
   To obtain the marginal and conditional pdfs associated with the BN pdf, write
Q in (2.46) as

                                                                                          (2SOa)

                                                                                         (2SOb)
Ch. 2: Statistical   Theory and Econometrics                                              103

where zi = (x, - p,)/q,              i = 1,2. Substituting (2SOa) into (2.45) and noting that
dz,dz, = dx,dx,/o,u,,                the pdf for f, and i, is

      f(z,,     ZAP) =f(z,lz,,           IMz,L                                         (2.51)

where




and

      g(z,) = (21r)-“2exp{              - zf/2}.                                     (2.51b)

That (2.51b) is the marginal pdf for Z, can be established by integrating (2.51)
with respect to z2. Given this result, f(z21z,, p) =f(z,, z,lp)/g(z,)  is the condi-
tional pdf for f, given 2, and is shown explicitly in (2.5la).
   From (2.5lb), it is seen that the marginal pdf for Z, is a standardized normal
pdf with zero mean and unit variance. Since Z, = (2, - ~,)/a,, the marginal pdf
for _E,is

      dx,lh,u,)             = (2~O:)-,‘2exp{-(x,         --P,)~/~J?},

a normal pdf with mean p, and variance u:.
  From (2.5la), the conditional pdf for Z,, given Z,, is normal with conditional
mean pz, and conditional variance 1 - p2. Since t, = (2, - p2)/u2 the conditional
pdf for Z2, given Z,, is normal, that is,

      f(x,lx,J)=              [2nu;(1-PZ)]-“2

                              Xexp{-[x2-~2-_2.~(x~-11.~)12/2(1-P2)u22}~               (2.52)

wheree’= (P,P,, PEPS.,,u2), with p,. , = u,p/u,.                   From (2.52),

      G2I4           =x,>     =I42 +/32.,(x*       Y-4                                (2.53)

and

       v(it2p,       =x,)     = $(l-      p’),                                        (2.54)

where E(.C2JZ, =x,) is the conditional mean of Z,, given f,, and I/(2:,(X, =x,) is
the conditional variance of JZ2, given X,. Note from (2.53) that the conditional
mean of z2 is linear in x, with slope or “regression” coefficient /I2 , = u2p/u,.
104                                                                          A. Zellner

   The marginal pdf for Z2 and the conditional pdf for Z,, given _z,, may be
obtained by substituting (2.50b) into (2.45) and performing the operations in the
preceding paragraphs. The results are:

       fh       x2m =f(x,Ix2,~,)g(x21~2),                                      (2.55)

with

       g(xJ.)      = (2ncf;)-“2   exp{-(x2-P2)2/2~~,2)                         (2.56)

and

       f(xJx2;)=         [27ro:(1-p2)]-“2

                         Xexp{-[x,-~,-p,.2(x2-~2)12/2(1-p2)o:},                (2.57)


where p,. 2 = a,p/u,. From (2.56), it is seen that the marginal pdf for Z2 is normal
with mean p2 and variance u:, while from (2.57) the conditional pdf for _%,,given
Z2, is normal with

       E(f,lZ, = x2)=P,+P,.2(x2-P2)                                            (2.58)

and

       V(~,~~,=x,)=u,2(1-p2).                                                  (2.59)

fi, 2 = u,p/u2 is the regression coefficient.
   From what has been presented above, it is the case that (1) all marginal and
conditional pdfs are in the normal form and (2) both conditional means in (2.53)
and (2.58) are linear in the conditioning variable. Since E(X,(P,) and E(_Z?,lS,)
define the “regression functions” for a bivariate pdf in general, the bivariate
normal pdf is seen to have both regression functions linear. Further, from the
definitions of p2., and p, .2, 4,. ,& ,2 = p2, the squared correlation coefficient, so
that the regression coefficients have the same algebraic signs. Further, if p = 0, the
joint pdf in (2.45) factors into


       ii, (2?ru~)-1’2exp{ -(Xi - pi)2/2uf},

showing that with p = 0, f, and R, are independent. Thus, for the BN distribu-
tion, p = 0 implies independence and also, as is true in general, independence
implies p = 0. Note also that with p = 0, the conditional variances reduce to
Ch. 2: Statistical   Theory and Econometrics                                                   105

marginal variances and j3,. z = & _, = 0, that is, the regressions in (2.53) and (2.58)
have zero slope coefficients.

(2) Multivariate normal (MVN). An m-element random vector, f’ = (Z,, &, . . . ,
T,), has a MVN distribution if and only if its pdf is

                                                                                           (2.60)

with -cc-~x~<co,i=1,2       ,..., m,9’=(8,,6, ,..., B,,,),-o0<8~<co,i=1,2  ,..., m,
and Z = {a,,) is an m X m positive definite symmetric matrix. When m = 1, (2.60)
is a univariate normal pdf, and when m = 2 it is a bivariate normal pdf.
   If H is an m x m non-singular matrix such that H’E - 'H = I,,, and x - 0 = Hz,
then the pdf for z’= (z,, z*,...,z,)   is’*

       f(z) = (2C m’2exp{ - z ‘z/2}.                                                       (2.61)

From (2.61), the Zii’s are independent, standardized normal variables and there-
fore (2.60) and (2.61) integrate to one. In addition, (2.61) implies EZ = H - 'E(P
-e)=o,     or

       EZ=8.                                                                               (2.62)

Thus, B is the mean of the MVN pdf. Also, (2.61) implies that Esz’= I,, since the
elements of Z are independent standardized normal rvs. It follows that H -‘E(J
- e)cx - e)‘(w) -I = I,; that is, E(f - @(a - 0)’ = HH’, or

       T/(Z) = ~(f        - e)(a    - e>‘= 2,                                              (2.63)

since from H% - ‘H = I,, 2 = HH’. Thus, E is the covariance matrix of Z.
   To obtain the marginal and conditional pdfs associated with (2.60), let G = 2-l
and partition x - 0 and G correspondingly as




Then the exponent of (2.60) can be expressed as

       (x-e)‘G(x-B)=Q,+Q,,                                                                 (2.64)



   “Note that the Jacobian of the transformation from x - f? to z is 1HI and [El - I” = 1HI - ’ fmm
(WE-‘HI=(r,,J=I.     Thus,IBJ-“*lHI=I.
106                                                                                                A. Zellner

with

       Q, =       [x,- 4 + G-%( x2 - ez)]‘G,,[x, -8, + G,‘G,,(x,                          - e,)]      (2.65)
and

                                                                                                      (2.66)



       W’         = IGI = IG,,lh        - GdG’%I~
(2.60) can be expressed as

       j-(x,,     x,le, G) = I-b,Ix*,      G, ~M%lG~              a                                   (2.67)

where

       f(xllx2,G,e) = (2~)-““21G,111~2exp{-                           Q,/2)                         (2.67a)

and

       dx,lce,)          =   w- m2’21G22
                                      - %GII’G1211/2w{- Q2/2),                                      (2.67b)

with mi the number of elements in xi, i = 1,2, ml + m2 = m, Q,, and Q2 as
defined in (2.65) and (2.66), respectively, and G = 2-l.
   On integrating (2.67) with respect to x,, the result is g(x,lG, e,), the marginal
pdf for x2, where f(x,lx,,G,8)      is the conditional pdf for f,, given 2,. Both
(2.67a) and (2.67b) are normal pdfs. The mean and covariance matrices of the
marginal pdf in (2.67b) areI

            Ez2=e2,

       V(Z’,) = (G,,-         G21G,1G,2)-1=X22.


  I3 On partitioning     G = 2 - ’and I: correspondingly     as




and




then from results on invertin   partitioned      matrices,   B 22 = (G22 - G2,G,; ‘G,2) - ‘, Z,2z??~2’= - G,; ’
                              9
G,,, andGfi’=8,,-&2L1G          Z2,.
Ch. 2: Statistical Theory and Econometrics                                          107

The mean and covariance matrices of the conditional pdf in (2.67a) are

     E(f,(P,) =8, - G,,'G,,(x,               - 0,)
                  = 0, + &-q(x*              - e,),                             (2.68)
      V(x’,lJ,) =G$=Z,,            -Z,J&,.                                      (2.69)

   Similar operations can be utilized to derive the marginal pdf for x”, and the
conditional pdf for 5,, given f,. As in the case of (2.67a) and (2.67b), the
marginal and conditional pdfs are MVN pdfs. In addition, just as E(Z,(Z2,) in
(2.68) is linear in x2, E(l,lf,)   = 6, + &,E~‘(x,    - 6,) is linear in x,. Thus, both
conditional expectations, or regression functions, are linear in the conditioning
variables.
   The conditional expectation of Z,, given f,, is called the regression function for
f,, given f,. As (2.68) indicates, in the case of the MVN distribution,
this regression function is linear and B’ = 2,.JG,         is the m, X rr2 matrix of
partial regression coefficients. If x, has just one element, then the vector of partial
regression coefficients is /3’= u&S;~‘, where ai2 is a 1 x m2 vector of covariances
of 1,, and the elements of Z2 are the first row of Z,*. With respect to partial
regression coefficients, it is instructive to write



where ti’ is a 1 X m, random vector with Etilf, = 0 and E(f, - 0,)rY = 0. Then
on multiplying (2.70) on the left by x2 - 0, and taking the expectation of both
sides, the result is Z2, = Zz2B or

     B = 2&X2,.                                                                 (2.71)

Note that (2.71) was obtained from (2.70) without assuming normality but, of
course, it also holds in the normal case. Without normality, it is not true in
general that both E(_f,lf, =x2) and E(f,lZ, =x,) are linear in x2 and x,,
respectively. For the cases of non-normality, it may be that one of these
conditional expectations is linear, but in general both will not be linear except in
special cases, for example the multivariate Student-t distribution discussed below.
   If in the MVN distribution the elements off are mutually uncorrelated, that is,
E(1, - ei)(Zj - ej) = 0, for all i * j, then 2 in (2.63) is a diagonal matrix,
E= D(qi) and from (2.60) f(xle, 0) = n~,g(x,)f$,        a;,), where g(x,l& a,,) is a
univariate normal pdf with mean fl, and variance uii. Thus, diagonality of Z
implies that the elements of f are independently distributed and then they are
mutually uncorrelated, a result that holds in general. Thus, for the MVN
distribution, diagonality of 2 implies independence, and independence of the
108                                                                          A. Zellner

 elements of f implies diagonality of Z. Also, if 2 is diagonal, ,X1*= Z& = 0 and
 thus B = 2;‘E2, = 0; that is, with Z diagonal, all partial regression coefficients
 are equal to zero. Further, with 2 diagonal, P’(Z,lZ,) in (2.69) specializes to
 I’(Z,(Z,) = D,,(u,,), an m, x m, diagonal matrix with typical element, uii, the
 variance of Zi.
    Among many other results for the MVN distribution, the fact that linear
 combinations of normal variables are normally distributed is of great importance.
That is, let G = CZ, where C is a q x m given matrix of rank q and thus G is a
 q X 1 random vector. It can be established that D has a q-dimensional MVN
 normal distribution with mean vector EG = C8 and covariance matrix E(G -
 EB)( G - EG)’ = CE( f - e)(Z - Q’C’ = CX’, a q X q positive definite symmet-
 ric matrix.
    Another important result is that the random variable p = (f - 8)‘Z-‘(f - 8)
 has a x2 distribution with m degrees of freedom. Let Z - 8 = Hz’, where H and %
 are as defined in connection with (2.61). Then y =Z’f = cy=,Z? is a sum of
 independent, squared, standardized normal rvs and thus has a x2 pdf with m
 degrees of freedom. A generalization of this result is that if the random m X m
 symmetric matrix A = cy_ ,Q$ where the Z,‘s are mutually independent normal
‘random vectors, each with zero mean vector and common pds covariance matrix
 2, then the m( m + 1)/2 distinct elements of 2 have a central Wishart pdf and
 those of A-’ an inverted Wishart pdf; for 2 a scalar, its pdf is a x2 pdf with v
 degrees of freedom, while its reciprocal has an inverted x2 pdf.

(3) Multivariate Student-t     (MVS). An m-element random vector                f’ =
($,&,...,    Z,), with -oc~<~<co,   i=1,2,...,m, has aMVSdistributionif          and
only if its pdf is

      f(xle,vv> = C~~~1~2~[v+(X-e)~v(X-e)](~+~)~2,                             (2.72)

where c = JJ”/~~[(Y+ m)/2]/n “12r(v/2), I > 0, V is an m X m pds matrix, and
et= (e,,e, ,..., em), with -cc<8i<cc,       i=1,2 ,..., m. The pdf in (2.72) is an
m-dimensional MVS pdf with Ydegrees of freedom and is denoted MVS,( 8, V, v).
If m = 1, (2.72) is the US-t pdf. Further, if v = 1, (2.72) is the multivariate Cauchy
pdf and the univariate Cauchy pdf when m = 1. As v grows large, the MVS
approaches a limiting MVN form with mean 8 and covariance matrix V - ‘.
   From the form of (2.72), it is the case that the pdf is symmetric about 8, the
modal value. A standardized form of (2.72) is obtained by making the change of
variable x - 8 = Cz, where C is an m X m non-singular matrix such that C’VC =
Z,. Then the pdf for z is

      f(zlv)   = C/(V +Zk)(m+“)‘2                                              (2.73)
Ch. 2: Statistical   Theory and Econometrics                                        109

an m-dimensional, standardized MVS density. It can be shown that (2.72) and
(2.73) are normalized pdfs, that is, that they integrate to one. Also, the first two
moments of Z are Ez’= 0 for v > 1 and Ezz’ = I,v/( v - 2) for v > 2, which imply
that

       EZ=t?,            v>l,                                                   (2.74)

and

       V(f)=E(x-0)(x-8)‘=V-‘v/(v-2),                    v > 2.                  (2.75)

The conditions v > 1 and v > 2 are needed for the existence of moments.
   If f is partitioned, f’ = (Z;, ii), marginal and conditional pdfs can be obtained
by methods similar to those employed in connection with the MVN. Let V in
(2.72) be partitioned, V = {yj}, i, j = 1,2, to correspond to the partitioning of 2
into f, with m, elements and Z2 with m2 elements. Then the marginal pdf, for ZZ,
is in the MVS form, that is, MVS,J82, V, ,, v), where 0, is a subvector of
8’= (&, &), partitioned to correspond to the partitioning of f, and V, , = V,, -
V,2V,;‘V,2. As regards the conditional pdf for Z,, given f,, it too is a MVS pdf,
namely MVS,,(G,.,, M, v’), with v’= m2 + v:

      a,., = e,-v,;lv,,(x,
                         -e,)                                                   (2.76)

and

                                                                                (2.77)

 For v’> 1, S,., in (2.76) is the conditional mean of Z,, given ZZ; note its similarity
 to the conditional mean for the MW’pdf in (2.68) in that it is linear in x2. Also,
 E_f,Ix, is linear in x,. Thus, the MVS pdf with v > 1 has all conditional means or
 regression functions linear. In addition, if V is diagonal, (2.75) indicates that all
 elements of 5 are uncorrelated, given v > 2, and from (2.76), 6,. 2 = 8, when V is
 diagonal. From the form of (2.72), it is clear that diagonahty of V, or lack of
correlation, does not imply independence for the MVS pdf, in contrast to the
 MVN case. This feature of the MVS pdf can be understood by recognizing that
 the MVS can be generated as a continuous mixture of normal pdfs. That is, let f
have a MVN pdf with mean vector B and covariance matrix a2v - ‘, denoted by
fhr( 8, T/ -‘a2), and consider (I to be random with the inverted gamma pdf in
(2.33). Then
110                                                                                              A. Zellner


Thus, if V is diagonal, independence does not result because of the common
random u inf,(8,V-‘a2).
   Three other important features of the MVS pdf are: (1) If f is MVS, then
ti = L2, where L is a given q x m matrix of rank q, is MVS; (2) the quadratic
form in (2.72) divided by m, that is, (2 - e)‘V(S - 8)/m, has an F,,, pdf [see, for
example, Zellner (1971, p. 385)]; and (3) the quantity ti = (ai - ei)/o       has a
univariate Student-t pdf with Y degrees of freedom where vii is the i, ith element
of v-‘.


2.5.     Elements of asymptotic theory’4

In previous sections specific pdfs for rvs were described and discussed, the use of
which permits one to make probability statements about values of rvs. This
section is devoted to a review of some results relevant for situations in which the
exact pdfs for rvs are assumed unknown. Use of asymptotic theory provides,
among other results, approximate pdfs for rvs under relatively weak assumptions.
As Cox and Hinkley (1974, p. 247) state: “The numerical accuracy of such an
[asymptotic] approximation always needs consideration.. . .” For example, con-
sider a random sample mean, x, = cy=, Xi /n. Without completely specifyin& the
pdfs for the Xi’s, central limit theorems (CLTs) yield the result that X,, is
approximately normally distributed for large finite n given certain assumptions
about the Xi. Then it is possible to use this approximate normal distribution to
make probability statements regarding possible values of xn. Similar results are
available relating to other functions of the Xi’s, for example, S,” = cy_ ,( Xi -
x,)‘/n,   etc. The capability of deducing the “large sample” properties of func-
tions of rvs such as x,, or S,’ is very useful in econometrics, especially when exact
pdfs for the Xi’s are not known and/or when the Xi’s have known pdfs but
functions of the Xi’s have complicated or unknown pdfs.
   The following are some useful inequalities for rvs that are frequently employed
in asymptotic theory and elsewhere.

2.5.1.     Selected inequalities for random variables

Chebychev’s Inequality: Let X be any rv with EX2 < 00. Then, with E an arbitrary
constant such that E> 0,
       ~(1x1 > E}d EX2/s2.                                                                           (2.78)

As an example of (2.78), let X, = Z, - 8, where Z, is the random proportion                               of

    14For simplicity of notation, in this section rvs are denoted by capital letters, e.g. X, Y, Z, etc. See,
for example, Cramer (1946), Lo&e (1963), Rao (1973), Cox and Hinkley (1974) and the references
cited in these works for further consideration    of topics in asymptotic theory.
Ch. 2: Statistical Theory and Econometrics                                            111

successes in n independent binomial trials with EZ,, = 8, the common probability
of success on individual trials, and EX: = E( Z,, - fl)2 = /3(1 - 0)/n, the variance
of Z,. Then P{lZ, - 8(> E}d E(Z, - 8)2/~2 = @(I - 8)/ne2, which approaches 0
as n + 00. In this sense, the rv Z,, approaches 8 as n grows large, a type of
convergence that is defined below as “convergence in probability (i.p.)” and
denoted by plim Z, = 8 or Z, ‘2 8. Note further that if X, were known to be
N(0, l), Pr{lX,l > 1.96) = 0.05 and (2.78) yields Pr{lX,l > 1.96) G 1/(1.96)2 = 0.260.
Thus, in this case while (2.78) is true, it does not yield a very strong bound. On
the other hand, if X, has a symmetric pdf with mean zero, finite second moment,
and heavier tails than the normal pdf, P{lX,l > 1.96) > 0.05 and the bound yielded
by (2.78) is closer to P{lX,l > 1.96).
  A useful generalization of (2.78) is

      P{Y’ ~1 G Eg(Y)/g(&                                                         (2.79)
where E> 0 is given, Y is any rv, g( .) is a non-negative, even function, defined on
the range of Y such that g(a) is non-decreasing, and Eg( .) < CO. If in (2.79)
Y= 1x1 and g(lXI) = X2 for 1x12 0 and zero otherwise, (2.79) reduces to (2.78). If
in (2.79) Y = (Xl and g(l Xl) = (Xl for (Xl >, 0 and zero otherwise, (2.79) reduces to
P{lXl 7 E) Q E 1X(/&. Other choices of g(e), for example g(lXl) = (XI’, r > 0,
produce inequalities involving higher order moments, P{IXJ 7 E}d EIXI’/&‘,
Markov’s Inequality that includes (2.78) as a special case.
   Some additional inequalities are: I5
(1)   EIX+YI’GC,(EIXI’+EIYI’),           where cr=l for r61 and cr=2’-’           for
      r 2 1. Thus, if the r th absolute moments of X and Y exist and are finite, so is
      the r th absolute moment of X + Y.
(2)   Hiilder Inequality: ElXYl G [EIXI’]“‘[EIYIS]““,    where r 7 1 and l/r + l/s

(3)   &l&wskiInequalify:                           Ylr]i/r< [ElXl’]‘/‘+[ElYl’]‘/‘.
                                    If r > 1, then[EIX+
(4)   Schwarz Inequality:           ElXYl     G [EIX12EIY12]
                                                       or [EIXYl12 Q EIX12EIY12,
      which is a special case of Holder’s Inequality with r = s = 2.
These inequalities are useful in establishing properties of functions of rvs.
  Now various types of convergence of sequences of rvs will be defined.

2.5.2.   Convergence of sequences of random variables

Consider a sequence of rvs (X,}, n = 1,2,. . . . A specific example of such a
sequence is “1, X2, x3,. . .,x,,,. . . , where x, = X,, x2 = cz=,X;/2,  x3 =
c:=,XJ3 ,...) X,, = CT=, Xi/n, a sequence of means. Since the members of such

  15For proofs of these and other inequalities,   see Lobe   (1963, p. 154 ff.)
112                                                                             A. Zellner

sequences are rvs, the usual mathematical limit of a sequence of non-stochastic
quantities does not apply. Thus, it is necessary to define appropriate limits of
sequences of rvs. Sequences of rvs can converge, in senses to be defined below, to
a non-stochastic constant or to a random variable. The following are the major
modes of convergence for sequences of rvs.

1. Weak convergence or convergence in probability (i.p.). If for the sequence (X,,},
n = 1,2 ,***,

       lim P{IX, - cl > E}= 0                                                      (2.80)
      n+oa

for every given E> 0, then the sequence converges weakly or i.p. to the constant c.
                                              i.p.
Alternative ways of writing (2.80) are X, --, c, or X, 5 c, or plim X, = c, where
“plim” represents the particular limit given in (2.80) and is the notation most
frequently employed in econometrics.

2.    Strong convergence or convergence almost sure4       (ax).    If for the sequence
{X,},n=1,2    ,...,

      P( lim X,=,)=1,                                                              (2.81)
        n+oo
                                                                                as.
then the sequence converges strongly or a.s. to c, denoted             by X,    + c. An
alternative way of expressing (2.81) is

        lim P( sup IX, - cl > E) = 0
       N-CC     n>N


for every given E> 0.

3.    Convergence in quadratic mean (q.m.).      If for the sequence {X,}, n = 1,2,. . . ,

        lim E(X,-C)~=O,                                                            (2.82)
       “+C0
                                                                               q.m.
then the sequence converges in quadratic mean to c, also expressed as X, -+ c.
   Asequenceofrvs{X,},n=1,2        ,..., is said to converge to a rv X in the sense of
(2.80), (2.81), or (2.82) if and only if the sequence {X, - X}, n = 1,2,. . . , con-
verges to c = 0 according to (2.80), (2.X1), or (2.82). In the case of (2.80) such
convergence is denoted by X, ‘2 X or plim( X, - X) = 0; in the case of (2.81) by

X, “2 X, and in the case of (2.82) by Xnqz’ X.
Ch. 2: Statistical   Theory and Econometrics                                                          113

      Rao (1973, p. 110f.) proves the following relations:
(a)      Convergence in q.m. (2.82) implies convergence i.p. (2.80).
(b)      Convergence as. (2.81) implies convergence i.p. (2.80).
(c)     IfX,q~‘cinsuchawaythatC~=,E(X,-c)2<w,                              thenX,?c.

  In connection with a sequence of sample means, {x,}, n = 1,2,. . . , with ET,, = p
and Var( x,) = u2/n, Chebychev’s Inequality (2.78) yields P{I??, - PI> E}G E( x,,
- PL)~/E~= 02/ne2. Thus, lim n+mP{IX,-p[>~}=O;          that is, plim xn,=p or
xn ‘2 p. Further, on applying (2.82), lim, ~ ,E( x,, - p)2 = lim, _ ,u2/n                      = 0 and
            qJn.
thus x, + /L.
   In the case of a sequence of sample means, and in many other cases, it is
valuable to know under what general conditions if and how X, converges to a
limiting constant. Laws of large numbers (LLN) provide answers to these
questions.

2.5.3.     Laws of large numbers (LLN)

In this section several LLN are reviewed. Weak laws of large numbers (WLLN)
relate to cases in which sequences of rvs converge weakly or in probability while
strong laws of large numbers (SLLN) relate to cases in which sequences converge
strongly, that is almost surely or with probability 1. In what follows, the sequence
ofrvsis{X,),n=1,2      ,..., and sequences of averages X, = cy_, Xi/n, n = 1,2,. . . ,
are considered.

Chebychev’s WLLN
If EX, = pi, V(q) = E( Xi - pi)2 = uf, and cov( X, Xi) = E( & - pi)( Xj - pj) =
0, i z j for all i, j = 1,2,. . . , then lim, _*,02/n = 0, where c2 = cy_ ,uf/n implies
that

                  i.p.
        I-, - jl” + 0,


or plim ( xn - fi,) = 0, with Jo, = cy= ,pi/n.16
   As a special case of this WLLN, if pi = p and ai = u for all i and cov( Xi, Xi) = 0,
            i.p.
then z,, + ~1or plim xn = p.


   ‘6Proof is by use of Chebychev’s Inequality (2.78) with X= F” -b,, since E( %,, - pn)’ = (J’/n.
Therefore P(( X, - ,&I > e) 6 i?*/ne and thus lim, _ m P(lX, - ,I?,,[> F) = 0. For proofs and discussion
of this and other LLN see, for example, Rao (1973, p. I I1 ff.).
I14                                                                             A. Zellner

Khintchin ‘s WLLN

If X,, X,,...   are independent and identically distributed (i.i.d.) rvs and EX, = ,u <
00, then~~i~~(orplim~“=~).

    In Khintchin’s WLLN, there is no requirement that second moments exist as in
Chebychev’s WLLN; however, the former WLLN does require that the Xi’s be
i.i.d. and have a common finite mean. As an example in which Khintchin’s
WLLN applies but Chebychev’s does not, consider the Xi’s to be i.i.d. each with a
univariate Student-t pdf with degrees of freedom Y= 2. For v = 2, EXi = ,a < co
but the second moment does not exist and thus Chebychev’s WLLN cannot be
applied but Khintchin’s WLLN can. On the other hand, for the Xi’s i.i.d.
univariate Cauchy, the mean does not exist and thus neither law can be applied.
While these exceptions are worth noting, there are many sequences to which these
WLLN can be applied. However, special results are needed to handle cases in
which the Xi’s do not possess moments and/or are correlated.
Kolmogorov’s First SLLN
If x,, x,,... is a sequence of independent rvs such that EXi = pi and V( Xi) = uf,
i=1,2 ,*--, and if cT_,uf/i2 < co, then, with j.i, = cy_ ,pi/n,




and the sequence X, , X,, . . . is said to obey the SLLN. Further, if pi = p for all i,
FnZr.

Kolmogorov’s Second SLLN

If X,, X2,;:.. is a sequence of i.i.d. rvs, then a necessary and sufficient condition
that xn + p is that EXi = I_L < co for all i.

   Kolmogorov’s Second SLLN does not require the existence of the second
moments of the independent Xi’s as in his first law; however, in the second law
the Xi must be independently and identically distributed, which is not assumed in
his first law. In the first law, if pi = ,u and u: = u 2, the Xi’s need not be identically
distributed and still, x, “2 /J since u2CTs ,l/i2 < co.

2.5.X Convergence of sequences of distributions and density functions and central
limit theorems (CLTs)

Let{F,},n=1,2    ,..., be a sequence of cumulative distribution functions (cdfs) for
the rvs {X,}, n = 1,2 ,..., respectively. Then {X,} converges in distribution or in
lawtoarvXwithcdfFifF,(t)+F(t)asn               + cc for every point t such that F(t)
Ch. 2: Statistical   Theoy and Econometrics                                                   115

is continuous at t. This convergence in distribution or law is denoted by X,              2   X.

The cdf F of the rv X is called the limiting or asymptotic distribution of X,.
   Further, if X, has pdf f,(x) and f,(x) + f(x) as n + 00 and if f(x) is a pdf,
then /If,(x)-    f(x)ld x --, 0 as n -+ co. In addition, if If,(x)1 < q(x) and /q(x)dx
exists and is finite, this implies thatf(x) is a pdf such that IIf,(f(x)ldx          + 0
asn-+oo.
      Several additional results that are very useful in practice are:
(1)      Hehj-  Bray Theorem: F, 3 F implies that !gdF,                 + JgdF   as n 3 co for
         every bounded continuous function g.
      For example,        the Helly-Bray Theorem can be employed to approximate
Eg’= Jg’dF,, r = 1,2 ,...,          when g’ satisfies the conditions of the theorem and
F’s form is known.

(2)      With g a continuous function, (a) if X, : X, then g( X,) 5 g(X), and (b) if
         X, ‘5 X, then g( X,) ‘5 g(X).

      As a special case of (b), if X,, ‘2 c, a constant, g( X,) ‘5 g(c).
(3)      Continuity     Theorem.    Let c,(t)   be the characteristic   function (cf) of X,. If
         X, 5 X, then c,(t) + c(t), where c(t) is the cf of X. Also, if cJ t) + c(t) and
        c(t) is continuous at t = 0, then X, 5 X with the distribution function of X
        having cf c(t).
   By the Continuity Theorem, derivation of the form of c(t) = lim n-+mc n(t) often
permits one to determine the form of the limiting distribution of X,.
   The following convergence results relating to {X,, Y,}, n = 1,2,. . . , a sequence
of pairs of rvs are frequently employed:

(a)     If IX, - Y,l’z 0 and Y, 4 Y, then X, + Y, that is, the limiting cdf of X,,
        exists and is the same as that of Y,.
                                                       i.p.
(b)     X, : X and Y, ‘T 0, implies that X,Y, -+ 0.
(c)     X, 4 X and Y, ‘z c, implies that (i) X, + Y, 4 X + c; (ii) X,Y, 4 cX, and
        (iii)X,/Y,5X/cifc*O.

(d)     X, - Y, ‘2 0 and X,, : X, implies that Y, 4 X.

The results (a)-(d) can be generalized to apply to cases in which X, and Y, are
vectors of rvs.
  The following lemma relates to the convergence of sequences of random
vectors, {X,“), X,‘*),. . . ,Xik)}, n = 1,2,. . . .
116                                                                                        A. Zeher

Lemma

If for any real A,, X,, . . . ,A,

      h,X,(‘) +A2Xp             + * * * + XkXn(Q 4 h,X(‘)          + A,XQ) + . . * X,X’y


where Xc’), Xc2), . . _,Xck) have a joint cdf P(x,, x2,. . . ,xk), then the limiting joint
cdf of the sequence of random vectors exists and is equal to F(x,, x2,. . . ,x,).
   Central Limit Theorems (CLTs) establish particular limiting cdfs for sequences
of rvs. While only CLTs yielding limiting normal cdfs will be reviewed below, it is
the case that non-normal limiting cdfs are sometimes encountered.
Lindeberg - Levy CLT

Let { X,}, n = 1,2,. . _, be a sequence of i.i.d. rvs such that EX,, = p and I’( X,,) = u ’
f 0 exist. Then the cdf of Y, = fi( x,, - ~)/a + @, where @ is the normal cdf,
Q(y) = (2a)-‘/2JY_me -tZ/2dt and x,, = cr_,Xi/n.
Liapunov CLT

Let (X,}, n = 1,2 ,..., be a sequence of independent rvs. Let EX,, = p.,, E( X, -
l.~,)~=u,+O     and E(X,-/JJ~=&,        exist for each n. Furthermore, let B,, =
(Cy= pi)1’3 and C, = (c~z1~i2)‘/2. Then if lim(B,/C,) = 0 as n + co, the cdf of
q = hy= ,( x]: - pi)/C, --) Q(y), a normal cdf.
Lindeberg - Feller CLT

Let (X,}, n =1,2 ,..., be a sequence of independent rvs and G, be the cdf of X,.
Further, let EX, = p,, and V( X,) = u,’f 0 exist. Define Y, = cy= 1(X, - pi)/Cn,
where C,, = 65, with E2 = cy_ ,ui2/n. Then the relations

       lim      max 0,/C, =0                  and      FYn* G(y)
      n-02     I<i<n



hold if and only if for every E> 0,


      nhimm-$          i     l~x_r,~,E~n(X-~i)2dGi(X)=o’
                 n     i=l




Multivariate      CLT

Let E;, denote the joint cdf of the k-dimensional random vector {X,“), XA2),. . . ,
Xck)}, n = 1 2 _ and Fhn the cdf of the linear function X, X,“’+ X2Xi2) + . . . +
A,“Xjk). A neceisary and sufficient condition that F, tend to a k-variate cdf F is
that F,,, converges to a limit for each vector h.
Ch. 2: Statistical   Theory and Econometrics                                      117

   With F,, F,,, and F as defined in the Multivariate CLT, if for each vector X,
F,,, + F,, the cdf of A, X(I) + AI Xc2)+ . . . + X, Xck), then F, + F. As an applica-
tion, consider the random vector-U; = cU,,,,U2,,, . . . &Jk,,) with EU, = p and v(U,)
 =x, a kxk       matrix. Define U,,=(U,,,U,, ,..., U,,), n=1,2 ,..., with L&,=
Cy,,qj/n.     Then th e asymptotic cdf of fi(u, - cc) is that of a random normal
vector with zero mean and covariance matrix 2.
   For use of these and related theorems in proving the asymptotic normality of
maximum likelihood estimators and posterior distributions, see, for example,
Heyde and Johnstone (1979) and the references in this paper that relate both to
cases in which rvs {X,} are i.i.d. and statistically dependent. Finally, for a
description of Edgeworth and other asymptotic expansion approaches for ap-
proximating finite sample distributions and moments of random variables, see,
for example, Kendall and Stuart (1958), Jeffreys (1967, appendix A), Copson
(1965), and Phillips (1977a, 1977b). Such asymptotic expansions and numerical
integration approaches are useful in checking the quality of approximate asymp-
totic results and in obtaining more accurate approximations.


3.     Estimation theory

Learning the values of parameters appearing in econometric models is important
for checking the implications of economic theories and for practical uses of
econometric models for prediction and policy-making. Thus, much research in
statistical and econometric theory has been concentrated on developing and
rationalizing procedures for using data to infer or estimate the values of parame-
ters. It is to a review of the major elements of this work on estimation that we
now turn.


3.1.     Point estimation

Consider a parameter 8 contained in 0, the parameter space. It is often assumed
that there exists a true, unknown value of 8,&,. Whether the true value 8, exists in
nature or just in the mind of an investigator is a philosophical issue that will not
be discussed. Given 0 and its associated parameter space, assume that a sample of
data, denoted by x’ = (x,, x2,. . . , xn) is randomly drawn or generated and that it
has probability density function (pdf), p(xl8). With this conception of how the
data are drawn or generated, x is a particular value of a random vector 2, with
pdf ~(~18) and is referred to as a random sample. The problem of point
estimation is how to form a function of the sample observations x, denoted by
b(x), that will, in some sense, be a good approximation to or close to the true,
unknown value of 0. The function of the data, d(x), whatever it is, is by definition
118                                                                         A. ZeNner

a point estimate of the true, unknown value of 8. A point estimate is a non-ran-
dom quantity since it depends just on the given, observed data x and, by
definition, the function e(x) does not involve 8. On the other hand, a point
estimator is the random quantity 8(Z), where the tilde denotes that 2 is considered
to be random. Also, the random function or estimator, e(Z), does not depend on
0 and its stochastic properties can be determined before observing the value of 2,
namely x. As a slight generalization, we may be interested in estimating g(8), a
single-valued function of 8. A special case is g(B) = 8. Then g(x) is a point
estimate of g(e), and g(a) is a point estimator of g(8). The problem of point
estimation is how to pick the form of g(x) so that g(x) will be close to the true,
unknown value of g(0). Various definitions of “closeness” and criteria for
choosing the functional forms of estimates have been put forward, and are
discussed below.


3.2.     Criteria for point estimation

There are two general types of criteria that are employed in evaluating properties
of point estimates. First, sampling criteria involve properties of the sample space
and relate to sampling or frequency properties of particular or alternative
estimates. The overriding considerations with the use of sampling criteria are
properties of estimates in actual or hypothetical repeated samples. Second,
non-sampling criteria involve judging particular or alternative estimates just on the
basis of their properties relative to the given, actually observed data, X. With
non-sampling criteria, other as yet unobserved samples of data and long-run
frequency properties are considered irrelevant for the estimation of a parameter’s
value from the actually observed data. The issue of whether to use sampling or
non-sampling criteria for constructing and evaluating estimates is a crucial one
since these different criteria can lead to different estimates of a parameter’s value
from the same.set of data. However, it is the case, as will be seen, that some
non-sampling-based procedures yield estimates that have good sampling proper-
ties as well as optimality properties relative to the actually observed data.

3.2.1.     Sampling criteria for point estimation

According to sampling theory criteria, a, particular point estimate, say e(x) is
judged with respect to the properties of e(Z), the point estimator. For example,
 the point estimate, 8(x) = c:= ,xi/n, the sample mean is judged by reference to
 the sampling properties of 8( 5) = cl= ,Zi/n, the random sample mean or estima-
 tor.

3.2.1.1.  ‘Perfect” estimation criteria. One sampling criterion in point estima-
tion is given by P[&Z) = @I= 1 for whatever the value of 8. Unfortunately, this
Ch. 2: Statistical Theory and Econometrics                                           119


criterion of perfection cannot be realized since f can assume many different
values and thus it is impossible to estimate the value of B without error. That is,
the probability that the random sampling error g = e(J)- 8 is equal to zero, is
zero.
   The fact that estimation error is generally unavoidable has led some to
introduce the criterion of mean squared error (MSE), Et2 = E[ d(i)- LJ]*and to
seek the estimator &a) that minimizes MSE for all possible values of 8. Again,
unfortunately, such an estimator does not exist. For example, if we use the
“estimator” 6 = 5, no matter what the sample data are, we will experience a lower
MSE when t9= 5 than that associated with any other estimator. Thus, no one
estimator can dominate all others in terms of MSE for all possible values of 8.
Some other conditions have to be put on the problem in order to obtain a unique,
optimal estimator relative to the MSE criterion.
   Another sampling criterion for estimation is the highest degree of concentration
about the value of the parameter being estimated. That is, we might seek an
estimator 8(Z) such that

      P[B -x,     <e(a)     < 8 + h2] z P[B - A, < t$(a) <e +x2]                  (3.1)

for all 8 with h, and X2 in the interval 0 to X and where da(Z) is any other
estimator. A necessary condition for (3.1) to hold is that E [ 8( 5)- t?]* G E [ d,( 2)
- e]* for all 8. As mentioned above, it is not possible to satisfy this necessary
MSE condition and thus the criterion of highest degree of concentration cannot
be realized.
   Since the strong sampling theory criteria of error-free, minimal MSE, and
highest degree of concentration cannot be realized, several weaker criteria for
estimators have been put forward. One of these is the criterion of unbiasedness.

3.2.1.2.     Unbiasedness.
Definition
An estimator 8( 2) of a parameter 8 is unbiased if and only if E [ 8( .f)ld] = B for all
8 c 0.
Thus, if an estimator is unbiased, its mean is equal to the value of the parameter
being estimated.

Example 3.1
As an example of an unbiased estimator, consider the model, gi = t9+ ei, with
qqe)=e      for i=1,2,..., n. Then &Z)=Cy_,Ri/n     is an unbiased estimator
since E[&J)lO]= C~=,E(ZjjQ/n     = 8.
120                                                                            A. Zellner

Example 3.2

Consider the multiple regression model, ~7= X/3 + u”,where I = ( fi, _&. . . &)), X
is an n x k non-stochastic matrix of rank k, Ip’= (p,, &, . . . ,Pk), and C’=
(fi,, i&,,. . . , ii,,), a vector of unobservable random errors or disturbances. Assume
that E( pl Xfi) = X& Then b = (X’X) - ‘X’p, the “least squares” estimator of /3, is
unbiased since E(blX/3)= (X/X)-‘X’E(flXj3)=              (XX)-‘X’Xf3     =/3 for all /3.

   While unbiasedness is often regarded as a desirable property of estimators, the
following qualifications should be noted. First, there are usually many unbiased
estimators for a particular parameter. With respect to Example 3.1, the estimator
4,(f) = c;= ,w;i;, with the wi’s given, has mean E[L!&(~)~~]=~~~~w~E(~~~~)=
Ocy= ,wi, and is unbiased for all wi’s satisfying cy= ,wi = 1. Similarly, with respect
to Example 3.2, & = [( X’X) -IX’+ C’] ~7, where C’ is a non-stochastic k X n
matrix and has mean E( &]Xp, C) = B + C’X/3 = B for all C such that C’X = 0.
Thus, unbiased estimators are not unique.
   Secondly, imposing the condition of unbiasedness can lead to unacceptable
results in frequently encountered problems. If we wish to estimate a parameter,
such as a squared correlation coefficient, that satisfies 0 d 8 < 1, an unbiased
estimator &a) must assume negative as well as positive values in order to satisfy
E@(T) = 8 for all 0, 0 G 8 < 1. Similarly, an unbiased estimator for a variance
parameter r2 that is related to two other variances, uf and ut, by r2 = uf - u;,
with u: z u: > 0, has to assume negative as well as positive values in order to be
unbiased for all values of r2. Negative estimates of a variance, that is known to be
non-negative, are unsatisfactory.
   Third, and perhaps of most general importance, the criterion of unbiasedness
does not take account of the dispersion or degree of concentration of estimators.
Biased estimators can be more closely concentrated about a parameter’s value
than are unbiased estimators. In this connection, the criterion of MSE can be
expressed in general as: ”

      MSE( 8) = V( 8) + (Bias)2,                                                   (3.2)

where V(6) = E(6 - E8)2, the variance of fi, and bias = Ed - 8 is the bias of 8.
Thus, MSE depends on both dispersion, as measured by I’(@, and squared bias,
and gives them equal weights. In terms of (3.2), the criterion of unbiasedness gives
zero weight to var(6) and unit weight to the bias squared term which is
considered unsatisfactory by many.
   Fourth, on considering just unbiased estimators for a parameter, denoted by
I$( Z), it is clear from (3.2) that MSE = var[8,(Z)]. While the restriction that an

  “No_te MSE (i) = E( i - 0)’ = E[(~-E~)+(E~-O)]2=E(bE~)2+[E6e]2,           since E(i-
Ei)(EB-B)=O.
Ch. 2: Statistical Theory and Econometrics                                      121

estimator belong to the class of unbiased estimators can be costly in terms of
MSE, such a restriction permits estimators to be ordered in terms of their
variances and suggests seeking the unbiased estimator with minimal variance.
Such an estimator, if it exists, is called a minimum variance unbiased estimator.

3.2.1.3. Criterion of minimum variance unbiased estimation. Some fundamental
results on minimum variance unbiased estimators (MVUEs) have been provided
by Rao (1973), among others. With reference to the triplet (X, Pe, 8 c O), where fI
may be vector-valued, consider estimation of g( 19)a real-valued function of 8. Let
U, denote the class of unbiased estimators of g( 6); that is, an estimator 6 belongs
to lJg if and only if E(#3) = g(8) for each 8 c 0. Also,define U, as the class of
all functions with zero expectation; that is, f c U, if and only if E( f 10) = 0 for
each 8. Then the following results, proved in Rao (1973) are available.
Rao Theorem

A necessary and sufficient condition that an estimator 2 c Up, that is, E(#I) =
g(B), has minimum variance at the value t9= (3, is that cov(g, f 10,) = 0 for every
f c U, such that W( f p,) < CXJprovided that var( g&) < 00.

    From the Rao Theorem it follows that: (a) the correlation between a MVUE
and any other estimator is non-negative; (b) if there are two unbiased estimators
with the same minimum variance, their correlation is equal to one, that is,
p(8,) = 1, and therefore they are the same except for a set of samples of
probability measure zero for 8 = e,,; and (c) if g, and & are MVUEs of g,(e) and
g2(Q, respectively, then b,g, + b,g, is a MVUE of b,g,(Q+ b,g,(@), where b,
and b, are fixed constants. Also, if g has minimum variance for each 8,g is called
a uniformly MVUE.
   As an example of Rao’s Theorem, consider Example 3.1 with the Zi’s assumed
normally and independently distributed, each with mean t9 and variance u 2. Then
f (2) C U, implies


      /f(x)exp{      -    jJ(xi-B)‘/Zo’)dx=O.
                         i=l

Differentiating     this last expression with respect to 0 yields


                         - e    (xi - 8)2/2a2       dx = 0
                          i=l                   I


where Z = cl= ,x,/n, the sample mean, and this result implies that cov( f, X) = 0,
the necessary and sufficient condition for Z?to be a MVUE. By similar analysis,
Rao shows that for the multiple regression model in Example 3.2, with j assumed
122                                                                                       A. Zelher

to be normally distributed with mean Xl3 and covariance matrix a21,,, B =
(X’X)       - 'X'y and s2 = ( y - X/?)‘( y - Xfi)/(n - k) are MVUEs for /3 and u2,
respectively.
    The existence of MVUEs is closely linked to the concepts of sufficiency,
sufficient statistics, and completeness, concepts that are important generally.
With respect to sufficiency, for some problems certain aspects of the sample data
x provide no information about the value of a parameter. For example, in n
independent binomial trials with probability of “success” 8 on each trial, the
order of the occurrence of successes and failures provides no information about
the value of 8. The number of successes, t(x) = cy,_ ,xi, where xi = 1, denotes a
success and xi = 0 a failure, is a statistic that maps many different sequences of
observations into a single value, t(x), and thus represents a reduction of the
sample data. The basic idea of sufficiency involves a reduction of the dimen-
sionality of the data without loss of sample information.
    As regards estimation of a scalar parameter, 8, with a sample of size n > 2,
consider the joint distribution of a set of r functionally independent statistics,
p,(t,t1,t2,...,    t,_,lQ, r=2,3 ,,..., n, where t is a statistic of particular interest.
Then

      P&7     t,,t2,...,    t,_,m       =   gw>h,-,(t,,   t2,...,trd).                        (3.3)

As Kendall and Stuart (1961, pp. 22-23) point out, if hr_,(t,,t2,...,tr_,le)          is
independent of 8, then t,, t,, . . . , t,_ , contribute nothing to our knowledge of the
value of 8. Thus, formally t is sufficient for 8 if and only if

      Pr(tJ,,t2>...J,-l             10) = dtvw-dt,,       t2,...,tr-,it),                      (3.4)

whereh,_,isindependentoft)forr=2,3            ,..., n,andanychoiceoft,,t,    ,..., I,_,.
Then t is said to be sufficient for 8. A similar definition applies when 8 is a vector
of parameters and the t’s are vectors. A minimal sufficient statistic is one that
achieves the greatest reduction of the sample information without loss of informa-
tion.‘*
   While (3.4) defines sufficiency in general, it does not indicate how sufficient
statistics can be found in specific problems. The Factorization Theorem is helpful
in this regard.
Factorization          Theorem’g

A necessary and sufficient condition for a statistic t = t(x) to be sufficient for a
parameter vector 8 appearing in f(rle), the probability density function for the

   ‘“See Kendall and Stuart (1961, pp. 193-194) and Silvey (1970, p. 29) for a discussion of minimal
sufficient statistics.
   ‘9Proofs may be found in Kendall and Stuart (1961, p. 23) and Lebmann (1959, p. 47).
Ch. 2: Statistical   Theory and Econometrics                                                       123

sample data x is that f(xle)            can be expressed as

      fW>            = &lWG)Y                                                                  (3.5)
where h(x) does not depend on 8.
   Let us apply the Factorization Theorem to Examples 3.1 and 3.2 under the
assumption that in both examples the random observations are normally and
independently distributed. For Example 3.1, with the Zi’s normally and indepen-
dently distributed, each with mean 8 and variance a’,

      f(qe,      u) = (2sa2)-“‘2exp                - f     (xi - eJ2/2c2
                                               i     i=l                   i

                      =   (2?ra2)_ ““exp{ - [ ~8~ + n(x - ej2]/2e2}            = g(ss, ?le, u2),

where ~~=~~~‘=,x~,vs~=~~~,(x~-x)~        and v=n -1.20 Thus, E and s2 are
sufficient statistics.
  In Example 3.2, with j? normal with mean Xp and covariance matrix u21,,,

      f(   YIP, 0’) = PC              n’2exp{ - ( y - Xfi)‘( y - X~)/2u2}

                          = (2au2)-n’2exp{          - [ us2 + (/9 - @‘X’X( /.I - /q/202}

                          =g(BJ218dJ2),
where / = (X’X) - ‘x’$, us2 = ( y - Xb)‘( y - Xb), and v = n - /c.~’Thus, b and
s2 are sufficient statistics.
  The fundamental Rao-Blackwell Theorem provides a link between sufficiency
and MVUE.
Rao - Blackwell Theorem22

Let t be a sufficient statistic for 8, where both t and 8 may be vector-valued and t,
any other statistic. If g is any function of 8, then

       ~[t, -        gwl’2 ~[w-d~)12~                                                         (3.6)
  “Note that with all summations extending from i = 1 to i = n,

      C(Xi-8)2=C[Xi-~-(e-a)]2=C(Xi-_)2+n(E-8)2=vs2+n(~-8),

since E( xi - X) = 0.
   2’Note:




since Y( y - Xb) = 0.
   22See Rao (1973, pp. 320-321) and also Rao (1945) and Blackwell (1947).
124                                                                                           A. Zellner

where h(t) = E(t,lt) is independent of 8. Furthermore,                  Eh(t) = g(e), that is, h(t)
is unbiased if Et, = g(8).
See Rao (1973, p. 321) for a proof of this theorem. As Rao (1973) notes: “Given
any statistic [t ,I, we can find a function of the sufficient statistic [h(t)] which is
uniformly better in the sense of mean square error or minimum variance (if no
bias is imposed)” (p. 321). He also notes that if a complete sufficient statistic
exists, that is, one such that no function of it has zero expectation unless it is zero
almost everywhere with respect to each of the measures PO, then every function of
it is a uniformly MVUE of its expected value. In view of the Rao-Blackwell
Theorem and assuming the existence of complete sufficient statistics, to find a
MVUE it is enough to start with any unbiased estimator and take its conditional
expectation given the sufficient statistic, that is, E( t,lt) = h(t).
   Since these results depend strongly on the existence of complete statistics, it is
relevant to ask which classes of distribution functions possess sufficient statistics
for their parameters. The Pitman-Koopman              Theorem [Pitman (1936) and
Koopman (1936)] provides an answer to this question.
Pitman - Koopman Theorem
For a parameter 8, scalar or vector-valued, if the range of f(xlO) is independent
of 8, a distribution will have a sufficient statistic (or statistics) if and only if it is a
member of the exponential class of distributions, that is,

      me) = exkWWb)+ c(x)+ W)>                                                                     (3.7)

in the scalar case, and


      _+I@      = exp ,+,(e)tr,(4+W+                         Ne)                                   (3.8)
                     i
in the case that &is a k-element vector.
   The exponential class includes many distributions that arise in practice, for
example binomial, normal, geometric, exponential, and Poisson distributions.23
However, there are many cases in which minimal sufficient statistics are not
complete and then it is not possible to use the Rao-Blackwell Theorem to
establish the existence of a MVUE. In such cases there may be several different

  23For example,   the binomial     pdf,




is in the exponential   form      (3.7) with   &x)=x,   A(B)=log[B/(l   -@)I, D(e)=n   log(l-O),     and
C(x) = 0.
Ch. 2: Statistichi   Theov and Econometrics                                          125

functions of the minimal sufficient statistic which are unbiased estimators of the
parameter and there is no general means of comparing their variances. Silvey
(1970, pp. 34-35) presents the following example to illustrate this problem.
Suppose that n independent binomial trials, each with probability 0 of success, are
carried out; then trials are continued until an additional k successes are obtained,
this requiring s additional trials.24 Let the sample be denoted by x = (xi, x2,. . . ,
X,,X,+1,X,+2,...,X,+,-I,      l), where xi = 1 for a success and xi = 0 for a failure.
Then f(xl8) = fPk(l - fl)n+s-r-k, where r = cy= ,xi and s depends on x also.
The statistic t = (r, s) is sufficient for 8 and is also a minimal sufficient statistic.
However, t is not complete because if




then


       Ef (t) = E;       - Ez         = e-e=0        forallt9.


However, f (t) z 0, as is required for a complete sufficient statistic, and thus there
are problems in applying the Rao-Blackwell Theorem to this and similar prob-
lems.
   In problems in which it is difficult or impossible to obtain a MVUE, it is useful
to consider the Cramer-Rao Inequality that provides a lower bound for the
variance of an unbiased estimator.
Cram& - Rao Inequality
Given (X, p(xlQ, 0 c O), with 0 an interval on the real line, then subject to
certain regularity conditions, the variance of any unbiased estimator 2 of g(8)
satisfies the following inequality:


                                                                                  (3.9)

where Ie = E( d logp(xlf?)/6ie)2 was interpreted by R. A. Fisher as the amount of
information about 0 contained in x. If g(0) = 0 and 2 = 8, then (3.9) becomes

       var( 8) > l/l@.                                                           (3.10)


  z4This latter part of the process is a negative binomial process.
126                                                                                 A. Zellner

Proof

Differentiate Es = j,gp(x]tI)dx    = g(0) with respect to 8, assuming that it is
permissible to differentiate under the integral to obtain:



      s’W =/g[~logp(xle)/~elp(xle)dx
                 x

or


      g’(e) =   /xri- @>I      [~logp(xle)/delp(xle)dx,                                (3.11)



since from /,p(x]Qdx    = 1, lx[ 6’p(x]@)/%J]dx           = 0, and E[ a logp(xl8)/M]        =
/[8logp(x]Q/6’8]p(x]Qdx=O.

On applying the Cauchy-Schwarz          integral inequality to (3.1 l),




or




   The following lemma provides an alternative             expression     for IO, the Fisher
information measure.

Lemma

IO = E[ 8 logp(xlB)/d8]2       = - E[ a210g p(x10)/a02].

Proof

Differentiate    /x[ 8 log p(xl8)/M]p(xl8)       dx = 0 with respect to 8 to obtain:


             a2logp(xle)/ae2]p(xle)+[alogp(xJB)/aB][~p(xle)/ae]}dx=O
      /{[x
Ch. 2: Statistical    Theory and Econometrics                                      127

or




or

       E[ai0gp(xp3)/ae]2               =   -    E[a2i0gp(qe)/ae2].

  In (3.9) [g’(8)]*/Ie   is called the minimum variance bound (MVB) for the
unbiased estimator 2. As Kendall and Stuart (1961, p. 10) point out, the MVB
was obtained by application of the Cauchy-Schwarz inequality and thus the
necessary and sufficient condition that equality holds in (3.9), that is, that the
MVB is attained, is that g - g(e) is proportional to 8 logp(xl0)/&3 for all sets of
observations, that is,

       ahp(xbWae = a9[2 - de)l,                                                 (3.12)

where A(B) may depend on 8 but does not depend on x, the observations. From
(3.12), var[a log p(xlO)/M] = A*(Qvar(g) and then from the equality form of
(3.9),

       varg=g’(B)/A(B),                                                         (3.13)

or in terms of (3.10), var(8) = i/A(e).
   To illustrate use of the MVB in (3.13), consider

       &e,           ,,2) = h(x)(27&/n)-"*exp{             - n(x - S)*/20,'},

where ui is a known value for u* and x= c:=,xi/n.     Then a logp(xl8, a:)/&? =
n(K- 0)/a:.     With g = K and g(e) = 8, A(B) = n/u,“. Thus, since alog
p(xl8, ui)/ae is proportional to X - 8, with the factor of proportionality A(B) =
n/qf’, X is the h4VB unbiased estimator with var(~) = l/A(8) = cri/n_
   While MVUEs are ingenious constructs and useful in a variety of situations, as
Silvey (1970) points out: “There are many situations where either no MVUE
exists or where we cannot establish whether or not such an estimator exists” (p.
43). For example, even in the case of a simple binomial parameter, 8, there exists
no unbiased estimator of 7 = e/(1 - e), the odds in favor of success. Also,
problems arise in obtaining unbiased estimators of the reciprocals and ratios of
means and regression coefficients and coefficients of structural econometric
models. For these and other problems there is a need for alternative estimation
principles.
128                                                                                                A. Zellner


3.2.1.4.   Least squares (LS) and other goodness of fit criteria. With LS and other
goodness of fit criteria, a sample estimate of a parameter 0, scalar or vector-
valued appearing in a model, is determined so that a given sample of observations
is most closely approximated by the estimated or fitted model, a heuristic,
non-sampling criterion. The sampling properties of the estimate e(x) so obtained
are then shown to be optimal in certain senses to be reviewed below and it is the
sampling properties that are usually utilized to justify the LS or goodness of fit
estimation procedure.
    To illustrate LS and other goodness of fit criteria, let xi = 8 + ei, i = 1,2,. . . , n,
be the model for the actual, given observations x’ = (x,, x2,. . . ,x,,), where 8 is a
scalar parameter and the si’s are unobserved, non-random errors. To estimate 8,
the LS principle involves finding the value of 8 that minimizes the sum of squared
errors, SS = C~=,.E?= cyZ=,(xi - 6J)2. The value of 8 that minimizes SS is 8 =
C:=,xi/n,      the sample mean. 25 To this point thex,‘s and ei’s are non-random.
Indeed, it is meaningless to attempt to minimize SS = cl= ,.$ = cl= ,(Zi - t9)2, a
random function. However, now that we have the LS estimate O(x), the sample
mean, it is possible to explore properties of &Z)=Cr, iZi/n, the random sample
mean or estimator given various assumptions about the probability model gener-
 ating the observations, the xi%. Similarly, with respect to the multiple regression
model, y = Xfi + U, where y is a given n X 1 vector of observations, X is a given
n x k non-stochastic matrix of rank k, /3 is a k X 1 vector of regression parameters
with unknown values, and u is an n x 1 vector of unobserved, realized error terms.
The sum of squared error terms to be minimized with respect to the value of /3 is
 SS = U’U= ( y - X&‘( y - Xfl). The minimizing, LS value of /3 is fi =
( X’X)-‘X’JJ.~~ Note that B depends on the given sample data and thus is a
non-random estimate. Also, ri = y - X/?, the LS residual vector, is an estimate of
the unobserved, non-random vector U. To determine the sampling properties of B,
6, and other quantities, it is necessary to provide stochastic assumptions about the
model for the observations, y = Xp + U.27 Before considering this problem, it is
relevant to ask: Why minimize the sum of squared errors, and not some other
function of the errors?
    In general, the sum of squared errors, SS = cy= ,E;, is employed because, as
 shown in the previous paragraph, it leads in many cases to simple expressions for

   Z5Note that @S/d8 = -2c:_,(xi        - 0) and d2SS/de2 = 2 n > 0. Thus, the value of f for which
dSS/dB = 0 is 0 = cy= ,x,/n and this is a minimizing value since d2SS/dt12 > 0 at 0 = 8.
   26Note ass/a/3 = - 2 X’y + 2 X’Xg and ~2SS/ag = 2X’X. The value of B setting aSS/ag = 0 is
obtained from - 2 X’y + 2 X’Xjl = 0 or X’X = X’y, the so-called “normal equations:, the solution of
which is j3 = (X’X)-‘X’y. Since a2SS/6’g iB.   IS a positive definite symmetric matrix, /I is a minimizing
value of /I.
   27While these examples involve models linear in the parameters and error terms, it is also possible to
use the LS principle in connection with non-linear models, for example yi = f( zi, 0) + ui , i = 1,2,     ,n ,
where f( z,, 0) is a known function of a vector of given variables, .zi, and a vector of parameters. In
this case, the LS principle involves finding the value of 0 such that xy_, [ y, - f( zi, 6J)]2 is minimized.
Ch. 2: Statistical Theory and Econometrics                                                    129

parameter estimates. Further, as will be shown below, in important problems
minimizing SS leads to estimates that are identical to maximum likelihood and
Bayesian estimates. However, criteria other than minimizing SS are available, for
example minimizing SAD = cy= r]~~],the sum of absolute deviations that leads to
minimum absolute deviation (MAD) estimates or minimizing WSS = cy= ,w&,
the weighted sum of squares, where the wi’s are weights, leads to weighted least
squares (WLS) estimates. Basically, the choice among these alternative criteria for
generating estimates depends importantly on what is assumed about the probabil-
ity model for the observations. Given a probability model for the observations
and general principles of estimation, it is possible to obtain a unique estimate that
is optimal according to the general principle of estimation adopted.
   The Gauss-Markov Theorem involves specifying a probability model for the
observations and applying a principle of estimation, that of minimum variance
linear unbiased estimation to obtain an estimator. A version of the Gauss-Markov
Theorem is:

Gauss - Markoc Theorem

Assume that the random n X 1 observation vector jj is generated by the model
y’=Xp+u’, wh ere X is a non-stochastic, known n x k matrix of rank k, /3 a k X 1
vector of parameters with unknown values, and iZ an n X 1 vector of unobserved
random errors. Further, assume Eti = 0 and EW = a21,, where u2 is the common
unknown variance of the errors. Then, in the class of unbiased estimators of I’&
where 1is a given k X 1 vector of rank one, the minimum variance linear unbiased
estimator2’ of rl/3 is l$, where B = (X’X)- ‘X’y’, the LS estimator.

Proof

Consider B = [(X/X)- ‘X’+ C’] y’, where C’ is an arbitrary k X n matrix. This
defines a class of linear (in y’) estimators. For I’/? to be an unbiased estimator of
l’j3, C must be such that C’X = 0 since El’fi = I’/3 + rlC’X& With the restriction
C’X = 0 imposed,




since

        E(b-B)(kB)‘=              [(X’X)-
                                       ‘X’+C’]Etiti’[X(X’X)-‘+C]


                              =   [(x/x)-‘+c’c]02
  2sSome use the term “best linear unbiased estimator” (BLUE) rather than minimum variance linear
unbiased estimator” (MVLUE) with “best” referring to the minimal variance property.
130                                                                         A. Zellner

on utilizing EIZ’ = u 21n and C’X = 0. Thus,




attains a minimum for C = 0 which results in l’fi = l’b, where fi = (XX)-    ‘X’j is
the LS estimator with covariance matrix, V( 8) = (X’X)) ‘u2.
    Thus, the Gauss-Markov (GM) Theorem provides a justification for the LS
estimator for the regression coefficient vector /3 under the hypotheses that the
regression model 7 = Xfi + ti is properly specified, Ey’= Xfi and V( 1) = V(c) =
u21n, that is, that the errors or observations have a common variance and are
uncorrelated. Further, the GM Theorem restricts the class of estimators to be
linear and unbiased, restrictions that limit the range of candidate estimators and
involves the use of the MSE criterion that here is equivalent to variance since only
unbiased estimators are considered. As will be shown below, dropping the
restrictions of linearity and unbiasedness can lead to biased, non-linear estimators
with smaller MSE than that of the LS estimator under frequently encountered
conditions.
    While the GM Theorem is remarkable in providing a justification for the LS
estimator in terms of its properties in repeated (actual or hypothetical) samples, it
does not provide direct justification for the LS estimate that is based on a given
sample of data. Obviously, good performance on average does not always insure
good performance in a single instance.
    An expanded version of the GM Theorem in which the assumption that
Eiiii’= u21,, is replaced by EC’ = VU-~,with V an n X n known positive definite
symmetric matrix, shows that I’/3 is the MVLUE of l’/3, where fi =
(X’V- IX)- ‘X’V- ‘9 is the generalized least squares (GLS) estimator. On sub-
stituting y’= Xg + 6 into B, B = /3 +( X’V-‘X)-‘X’V-‘ii           and thus Eb = /3
and V(B) = ( X’V- IX)- ‘u2 . Also, the GLS estimate can be given a weighted
least squares interpretation      by noting that minimizing the weighted SS,
( y - Xfi)‘V- ‘( y - Xp) with respect to fi yields the GLS estimate. Various forms
of the GM Theorem are available in the literature for cases in which X is not of
full column rank and/or there are linear restrictions on the elements of /3, that is,
A/3 = a, where A is a 4 X k given matrix of rank q and u is a 4 X 1 given vector.
    The parameter u2 appears in the GM Theorem and in the covariance matrices
of the LS and GLS estimators. The GM Theorem provides no guidance with
respect to the estimation of u2. Since fi = y - Xb, the n X 1 LS residual vector is
an estimate of u, the true unobserved error vector, it seems natural to use the
average value of the sum of squared residuals as an estimate of u2, that is,
 -2
U    = ri’ii/n. As will be seen, 62 is the maximum likelihood estimate of u2 in the
regression model with normally distributed errors. However, when d2 is viewed as
Ch. 2: Statistical   Theory and Econometrics                                                  131

an estimator, Eh2 = a2( 1 - k/n), that is, 15~is biased downward.29 The unbiased
estimator of u2, s2 = ri’ri/(n - k), is widely used even though it has a larger MSE
than that of 62 = ti’;/(n - k + 2), the minimal MSE estimator in the class
62 = 4’6, where c > 0 is a constant. That is, with ri assumed N(O, a21,), xz =
ri’ij/a2 has a &i-squared pdf with v = n - k degrees of freedom. Then MSE =
E(cY2 - u2)2 = c~u~E(x~)~ -2cu4Ex:        + u4, and the minimizing value of c, c,, is
c* = Exz/E(~z)~       = v/(v2 +2v) = I/(v +2) and thus 15; = P’lj/(v +2) is the
minimum MSE estimator. The MSE of 62 is MSE(6~)= 2u4/v +2), while
MSE(s2) = 2u4/v. Thus, MSE(6i))/MSE(s2) = v/(v +2), which for small v is
appreciably below one. 3o This is an example illustrating that a biased estimator,
62 can have a smaller MSE than an unbiased estimator s 2.
    Above, the LS approach was considered in relation to linear models for which
minimization of the SS led to solutions, say b = (XX)-                  ‘X’y or B =
(XV IX)- ‘XV ‘y, that do not depend on parameters with unknown values and
hence are estimates that can be viewed as estimators. In a number of generally
encountered problems, this is not the case. For example, if in the usual regression
model $ = Xfi + ii, Eti = 0, and Etiii’ = u2V( d), where V( 0) is an n x n matrix
with elements depending on some parameters 8 with unknown values,
then a problem arises in applying the LS or GLS approach. That is, minirni-
zation of u’Y- ‘(0)~ = ( y - X/3)7’(13)( y - Xfi) with respect to j9 yields fi =
(XV-‘(8)X)-‘XV-‘(C?)y          which is not an estimate since b depends on 8, a
vector of parameters with unknown values. In some problems it is possible to
estimate 8 from the LS residuals, ri = y - Xb, where /3 = (XX)- ‘X’y. Let 4 be
this estimate. Then a “feasible” or “operational” or approximate GLS estimator,
&,, is defined by & = (XV-‘(8)X))‘XV           ‘(4) j7 Since j$ is just an approxima-
tion to B, it is not exactly a GLS estimate. Often when n is large, the large sample
distributions of b and a, coincide. However, when n is small, the distributions of
B and & are different and further analysis is required to establish the sampling
properties of &. To illustrate consider the following example:
Example        3.3

Let y” = ( ~7;$), X’= (Xix;), and ti’= (Q&) and consider the regression model,
$=Xfi+ti      with /3 a k x 1 vector, EU = 0, Eii,ti,’ = ufI,,, Eii’,u’,’ = $I,,*, and
Eu”,ii,’ = 0. For this specification


       v(e)=         Ed=
                             I u?In
                                 o, ’   u2;
                                         2 “2
                                              ,
                                               1
                                               u~=E~‘Mij=02trM=02(n-k),
   29From ci = i - Xb = [I,, - X( X’X)-‘X’]i, E^’                                  where M=
I, - X(X’X)-‘X’ and trM= n -k. Thus, Eo2 = 02(n - k)/n.
   30The MSE of 6’ = ii’ri/n is MSE (6’) = 0”(2/v)[(l+ k2/2v)/(1 + k/v)]   which is smaller than
MSE(s*) = 204/v for k > 2.
132                                                                       A. Zeher

with 8’= (a:, u,‘). Then ( y - Xfi)‘V-‘(Q(   y - X/3) has minimal value for


      /!3= (XT’(e)x)-‘xv-‘(B)y
       = [ xlrx,/cr: + X,‘X,/u,‘] -‘( X1’y1/u2 + X2’y2/u2),

which is clearly a function u: and cr:. Estimates of u: and u: are s/ =
(Yi - xibi>< Yi - xiJi>/‘i, with vi=ni-k and &=(X:Xi)-‘X,ly,  for i=1,2.
Then the approximate GLS estimate is




Further, V( 8) = [Xix, /uf + XGX2 /u,” ]- ’ which is often approximated by V,(b)
= [ X;X,/s: + X;X,/sf]-‘.      For large sample sizes, these approximations have
been shown to be very good. For small samples, some of the properties of these
approximations have been studied in the literature. Also, above the unbiased
estimates, 8: and sl have been and usually are inserted for uf and u;. Whether
other estimates, for example ML or minimum MSE estimates of u: and u;, would
produce better or worse results in estimating /3 requires additional analysis.
   The basic problem brought out in the above example is that the GLS approach
can lead to a non-operational result. Then approximations to the non-operational
result are introduced. Fortunately, in many cases these approximations are rather
good in large samples. However, in small samples, the definition of which
depends on various properties of the model as well as the sample size, there is no
assurance that these approximate GLS estimates will have good sampling proper-
ties. Each case must be considered carefully using analytical and/or Monte Carlo
techniques. For examples of such studies, see Rao and Griliches (1969), Fomby
and Guilkep (1978), Taylor (1978), Revankar (1974), Mehta and Swamy (1976),
and Srivastava and Dwivedi (1979). From a practical point of view, it would be
desirable to have estimation principles that yield estimators with good small and
large sample properties.


3.2.1.5. Maximum likelihood estimation. In maximum likelihood (ML) estima-
tion, a basic element is the likelihood function. Let the sample observations be
denoted by x and the joint pdf for the observations be p(x]O), with XC R, the
sample space, and 8 c 0 the parameter space. The likelihood function is ~(~18)
viewed as a function of 8 defined on the parameter space 0. To emphasize this
point, the likelihood function is denoted by /(e(x) and is clearly not a pdf for 8.
To make this point explicitly, the joint pdf of n independent observations from a
Ch. 2: Statistical    Theory and Econometrics                                     133

normal distribution with mean p and variance a2 is


       p(.+.,        u’) = (2aa2)-“‘2exp         i    (xi - P)~/~IJ~
                                                i=l


The likelihood function for this problem is


       l(p, a21x)= (2ma2)-n’2exp { -,%,(xi-P)z/zo2},                          (3.14)


 with -co<xi<cc,i=1,2,...         ,n, thesamplespace,and      -cco<p<cc     andO<a2
  <cc, the parameter space. In (3.14), the likelihood function, I(p,u21x), is a
 function of p and u2 given x.
    According to the ML estimation principle, estimates of parameters are obtained
 by maximizing the likelihood function given the data. That is, the ML estimate is
 the quantity 0(x) c 0 such that I(&r) = max;coI(Blx).         For a very broad range
 of problems the ML estimate d(x) exists and is unique. In the likelihood
 approach, 1(01~) expresses the “plausibility” of various values of 6, and I, the
 ML estimate, is regarded as the “most plausible” or “most likely” value of 8. This
 view is a basic non-sampling argument for ML estimation, although the terms
 “most plausible” or “most likely” cannot be equated with “most probable” since
 the likelihood function, Z(elx), is not a pdf for 8. As with LS estimates, ML
estimates can be viewed as estimators and their properties studied to determine
whether they are good or optimal in some senses.
    From the likelihood function in (3.14), log I@, u21x) = -II log u - c
(xi - ~)~/2u~ + constant. The necessary conditions for a maximum are
 8 logl/+    =0 and d log l/au = 0 which yield cyC=,(xi - p)/2a2 = 0 and - n/a
 +C~=,(X~-~)~/U~=~,         the solutions of which are P=Cy=,x,/n           and s2=
Cy= i(xi - P)‘/ n and these values can be shown to be global-maximizing values
and hence are ML estimates. In this particular case, fi is the sample mean which,
as mentioned above, is a minimum variance unbiased estimator of p. With respect
to s2 = cy_, (Zi - fi)2/n, it was shown above that this estimator is biased. Thus,
with ML estimation, there is no assurance that ML estimators will be unbiased.
Indeed, the ML estimator of 6 = l/p is 6 = l/fi, which does not possess a mean.
However, as emphasized above, the criterion of unbiasedness is subject to
important limitations. Further, note that in this problem the ML estimates are
functions of the sufficient statistics, p and cy= ,(xi - p)2. Given the Factorization
Theorem described above, it is the case that ML estimates are always functions of
minimal sufficient statistics when they exist. This is not to say, however, that the
ML estimator necessarily makes the best possible use of the information con-
tained in minimal sufficient statistics.
134                                                                                           A. Zellner

   For the usual multiple regression model, j7 = X/4 + u’, with u”assumed normal
with mean 0 and covariance matrix, cr21,,, the joint pdf for the observations is
p( ylX, B, a2) = (2aa2)-n/2exp{ -( y - Xb)‘( y - Xfi)/2a2} and the likelihood
function, Q3, u21X, y), isp( ylX, 8, u2) viewed as a function of /3 and u2, that is,

      1( /3, fJ21x, y) = (277u2)_ n’2exp{ - ( y - Xfi)‘( y - Xp)/2u2}

                        = (2mu2)-“‘2exp{         - [ fi’ri + (/I - @xtx(       B - /3)]/2u2},

where b=(X’X)-‘X’y        and li=y-Xb.        On maximizing logZ(/3,u21X,y) with
respect to B and u 2, the ML estimates are b = (XX)- ‘X’y and c+~= ri’ri/n. The
ML estimate B is just the LS estimate, (X’X)) ‘X’y, while again the ML estimator
for u2, e2, is biased. Above, the GM Theorem led to the LS estimate fi without a
normality assumption. In this connection it is interesting to observe that for all
likelihood functions of the form, a-“f(u’u/a2>,         where the function f(e) is
monotonically decreasing in u’u/u’, minimizing U’U= ( y - X&‘( y - X/3) with
respect to /3 produces a ML estimate equal to the LS estimate. Therefore, the
normal case f(u’u/u2) a exp{- u’u/2u2) is just a special case of a class of
likelihood functions for which the ML estimate is identical to the LS estimate.3’
   In the case where the error vector in the multiple regression model is normal,
with Eti = 0 and Eiiti’ = u2V(t9), the likelihood function is

      1(P,u2,8ly,      x) = (27ru2)-“‘21V(e)I-‘/2
                               Xexp{ - ( y - Xb)‘V-‘(0)(            y - XP)/2u2}.

The quadratic form in the exponential is minimized for any given value of 8 by
&, = [XV ‘( 0) Xl- ‘XV ‘( 0) y, the GLS quantity. Also, the_ conditional maxi-
mizing value of u 2, given 8, is 15~
                                  B - ( y - XB)‘V-‘(e)( y - X&/n. On substitu-
tion these conditional maximizing values in the likelihood function, the result is
the so-called concentrated log-likelihood function, log I,( 81y, X) = constant -
n /2 log 6: - + loglV( 0)l. By numerical evaluation of this function for various
values of 0 it is possible to find a maximizing value for 0, say 8, which when
substituted into fiO and 6; provides ML estimates of all of the parameters. This

   3’On the other hand, if the likelihood function is a monotonically decreasing function of z:_, 1uil/u,
then minimizing the sum of the absolute deviations produces ML estimates. Such a likelihood function
is encbuntered when the ii’s are identically and independently distributed, each with a double
exponential pdf,p(u,) a o-‘exp(-luil/a>,      -co -CU, < co. Then the joint pdf of the ui’s is

        ”
       ll p(q)   a “-.‘“xP{ - jI,lW”}
      ,=I

and minimizing c:_, Iuil maximizes the likelihood function.
Ch. 2: Statistical Theory and Econometrics                                                     135

procedure is useful for computing ML estimates only when there are a few, say
one or two, parameters in t9.
   A more general procedure, the Newton method, for maximizing log-likelihood
functions, L = log r(t!?lx), where 6 is an m X 1 vector of parameters and x a vector
of observations, commences with the first-order conditions, aL/dO = 0.Given an
initial estimate, 0(O),of the solution e^of aL/iM = 0,expand aL/atlina Taylor’s
Series about 0(O),that is,



where all partial derivatives on the right-side are evaluated at B(O).Then,

      e(i)=e(O)-[      a2L/aeaef]-'[aL/ae],                                                (3.15)

with the derivatives evaluated at 8 = t?(O),IS
                                            . an approximation to the ML estimate,
d. By repeating this process, the sequence 8(l), gc2),. . . , usually converges to the
ML estimate. Other numerical algorithms for solving non-linear optimization
problems are described in Goldfeld and Quandt (.1972). What is of great impor-
tance is that the ML method provides estimates of all parameters of a model in
accord with a well-defined criterion and is generally applicable to most economet-
ric estimation problems. Some further properties of ML estimation are sum-
marized in the next paragraph.
   First, as pointed out above, ML estimators are not necessarily unbiased in
finite samples. However, insistence on the property of unbiasedness in general is
not necessarily desirable. The discussion of the criterion of unbiasedness, pre-
sented above, and the examples considered are relevant. Second, when an
unbiased estimator, 8, exists that attains the Cramer-Rao lower bound, it was
mentioned above that in such a case alog_,(8lx)/&9 = a(@(6 - 6) and thus the
only solution to alog1(8lr)JaB = 0’ is 8. In this case, the ML estimator is
identical to the MVB unbiased estimator. Third, in some cases, but not all, when
a ML estimator is unbiased, its variance may be close to the Cramer-Rao lower
bound, a property that has to be checked in individual cases. Fourth, ML
estimates have an invariance property, namely if 8 is the ML estimate of t!Iand
q= g(B) is a one-to-one transformation, then $ = g(e) is the ML estimate of q.
This property also applies when 0 and q are vectors of parameters. Finally, the
most important sampling justification for ML estimators is that they usually have
very good properties in large samples. That is, under certain regularity
conditions,32 ML estimators are consistent in the sense that the sequence of ML
estimators, depending on n, the sample size, (8(,,} converges to 8 as n -+ cc in

  32The~e regularity conditions are presented and discussed in Kendall and Stuart (1961) and Heyde
and Johnstone ( 1979).
136                                                                          A. Zellner

either a weak probability sense, 8(,,# 8, or a strong probability sense, 8,,,%0,
depending upon whether a weak or strong law of large numbers is employed in
the derivation. Further, in large samples (large n), ML estimators are approxi-
mately unbiased and have variances close to the Cramer-Rao lower bound under
regularity conditions. Also, as n grows large, the ML estimator’s distribution is
approximately a normal distribution with mean 8 and variance 1i ‘, where IO is
the Fisher information matrix or Cramer-Rao lower bound for an unbiased
estimator based on n independent and identically distributed observations. In the
case of a vector ML estimator, f$,,,, for large n and under regularity conditions, its
approximate distribution is multivariate normal with mean B and covariance
Zi ‘, where le is n times the Fisher information matrix for a single observation.
For proofs of these properties that generally assume that observations, vector or
scalar, are independently and identically distributed and impose certain condi-
tions on the higher moments or other features of the observations’ common
distribution, see Cramer (1946, p. 500), Wald (1949), and Anderson (1971). For
dependent observations, for example those generated by time series processes,
additional assumptions are required to establish the large sample properties of
ML estimators; see, for example, Anderson (1971) and Heyde and Johnstone
(1979).
    A basic issue with respect to the large sample properties of ML estimators is
 the determination of what constitutes a “large sample”. For particular problems,
mathematical analysis and/or Monte Carlo experiments can be performed to
 shed light on this issue. It must be emphasized that not only is the sample size
 relevant, but also other features of the models, including parameter values, the
properties of independent variables, and the distributional properties of error
 terms. Sometimes the convergence to large sample properties of ML estimators
 is rapid, while in other cases it can be quite slow. Also, in “irregular” cases,
 the above large sample properties of ML estimators may not hold. One such
 simple case isjji=eBi+Ei, i=1,2 ,..., n, where the Ei’s are NID(0, a*). The ML
 estimate of B, is 4, = y,, and it is clear that 4, does not converge to ei as n grows
 since there is just one observation for each 0,. The irregular aspect of this problem
 is that the number of parameters grows with the sample size, a so-called
 “incidental parameter” problem. Incidental parameters also appear in the func-
 tional form of the errors-in-the-variables model and affect asymptotic properties
 of ML estimators; see, for example, Neyman and Scott (1948) and Kendall and
 Stuart (1961). Thus, such “irregular” cases, and also others in which the ranges of
 observations depend on parameters with unknown values or observations are
 dependent and generated by non-stationary time series processes and have to be
 analyzed very carefully since regular large sample ML properties, including
 consistency, normality, and efficiency, may not hold.

3.2.1.6. Admissibility criterion. The admissibility criterion is a sampling crite-
rion for alternative estimators that involves separating estimators into two classes,
Ch. 2: Statistical Theory and Econometrics                                         137

namely those that are admissible and those that are inadmissible with respect to
estimators’ risk properties relative to given loss functions. In this approach,
inadmissible estimators are regarded as unacceptable and attention is con-
centrated on the class of admissible estimators. Since this class usually contains
many estimators, additional criteria are required to choose a preferred estimator
from the class of admissible estimators.
   The basic elements in applying the admissibility criterion are (1) loss functions,
(2) risk functions, and (3) comparisons of risk functions associated with alterna-
tive estimators. Consider a scalar parameter 8, and 4 an estimator for 8. Some
examples of loss functions are given below, where the c’s are given positive
constants:

   (1)   Quadratic (or squared error): L(@,r$ = c,(B - 8)2.
   (2)   Absolute error: L(8,fi) = c,le - 81.
   (3)   Relative squared error: L(t9,8) = cs(0 - @*/(I*.
   (4)   Generalized quadratic: L( 0,8) = h(B)( t9- r3)*.
   (5)   Exponential: L(8,d) = c,[l -exp{- c,(B - $)*}I.

These are but a few of many possible loss functions that can be employed. Note
that they all are monotonically increasing functions of the absolute error of
estimation, ]e] = ]fi - 81. The first three loss functions are unbounded while the
fifth is an example of a bounded loss function that attains a maximal value of c5
as 18 - 01-+ co. The relative squared error loss function (3) is a special case of the
generalized loss function (4) with h( 0) = c3/0*. Note too that, as is customary,
these loss functions have been scaled so that minimal loss equals zero when
8 - 8 = 0. Also, negative loss can be interpreted as utility, that is, U(0, 6) =
 - qe, 6).
   In the case of a vector of parameters, 8, and a vector estimator, 0, a quadratic
loss function is given by L(0,8) = (r9 - @Q(@ - d), where Q is a given pds
matrix. A generalized quadratic loss function is L(8,@ = h(B)(8 - l)‘Q(r3 - d),
where h(e) is a given function of 8. One example is h( 0) = l/( rW)“‘, where m is a
given non-negative constant.
   In a particular estimation problem, the choice of an appropriate loss function is
important. Sometimes subject-matter considerations point to a particular form for
a loss (or utility) function. The widespread use of quadratic loss functions can
perhaps be rationalized by noting that a Taylor’s Series expansion of any loss
function, L(e), about e = 4 - 8 = 0, such that L(0) = 0 and L’(0) = 0, yields
L(e) A L”(O)e*/2, an approximate quadratic loss function. This, it must be
emphasized, is a local approximation which may not be very good for asymmetric
loss functions and/or bounded loss functions [see, for example, Zellner and
Geisel (1968)].
   Given that a loss function, L(B, 8), has been selected, the next step in applying
the admissibility criterion is to evaluate the risk function, denoted by r;(e) and
138                                                                                  A. Zellner

defined by

                                                                                       (3.16)

where ~(~18) is the pdf for the observations given 19. It is seen that the risk
function in (3.16) is defined for a particular estimator, 8, and a particular loss
function, L(8,e). While it would be desirable to choose an estimator 4 so as to
minimize r;(e) for all values of 8, unfortunately this is impossible. For example,
an “estimator” 8 = 5 will have lower risk when 8 = 5 than any other estimator and
thus no one estimator can minimize risk for all possible values of 8. In view of
this fact, all that is possible at this point is to compare the risk functions of
alternative estimators, say 8,, dz,. . . , with risk functions r;,(e), r;,(e), . . . , relative
to a given loss function. From such a comparison, it may be that ,‘e^,(r3) I r;,( 8)
for all B with the inequality being strict for some 0. In such a case, 0, is said to be
dominated by 8,, and fiz is termed an inadmissible estimator. That 4, dominates r$
does not necessarily imply that 4, is itself admissible. To be admissible, an
estimator, say 8,, must have a risk function r;,(e) such that r;,(e) I r,-=(f) for all
8, where r;,(e) is the risk function associated with any other estimator 0,. Work
on proof of admissibility of estimators is given in Brown (1966).
   A leading example of the inadmissibility of a maximum likelihood and least
squares estimator has been given by Stein (1956) and James and Stein (1961).
Let yi=ei+gi,      i=1,2 ,..., n, with the &‘s NID(O,a*) and the Bi’s the means
of the yi’s, - 00 < fli < CO. Further, let the loss function be L(B, 4) =
(8 - l)ye - I),       a quadratic loss function. The likelihood function is
P( vle) = (2aa2)-42 exp(-(y-@‘(y-8)/2?*},                 wherey’=(y,,Y2,...,Yn)            and
e’= (e,,e, ,..., en). Then the ML estimator is 8, = y’, with risk function qO(e) =
~(8~ - e)@$ - e) = nu*. When u* has a known value, say u* = 1, James and
Stein (1961) put forward the following estimator for 8 when n r 3,

      4   = [l-b   -WY’YI       y,                                                     (3.17)

that has uniformly lower risk than the ML (and LS) estimator, t$ = y; that is,
r;, -c rio or E(d, - e)‘(l, - 0) < E(t$, - Q’(& - 0) for 0 -C0’8 < 00 [see James and
Stein (1961) for a proof]. As James and Stein show, use of 8, in (3.17) rather than
the ML estimator results in a large reduction in risk, particularly in the vicinity of
8 = 0. They also develop an estimator similar to (3.17) for the case of u* unknown
and show that it dominates the ML estimator uniformly. For details , see James
and Stein (1961), Zellner and Vandaele (1975), and the references in the latter
paper. Also, as shown in Stein (1960), Sclove (1968), and Zellner and Vandaele
(1975), Stein’s result on the inadmissibility of the ML (and LS) mean estimator
carries over to apply to regression estimation problems when the regression
coefficients number three or more and an unbounded quadratic loss function is
Ch. 2: Sfatistical Theory and Econometrics                                          139

utilized. It is also the case that for certain problems, say estimating the reciprocal
of a population mean, the ratio of regression coefficients, and coefficients of
simultaneous equation models, ML and other estimators’ moments usually or
often do not exist, implying that such estimators are inadmissible relative to
quadratic and many other unbounded loss functions [see Zellner (1978) and
Zellner and Park (1979)]. While use of bounded loss functions will result in
bounded risk for these estimators, see Zaman (198 l), it is not clear that the ML
and other estimators for these problems are admissible.
   Another broad class of estimators that are inadmissible are those that are
discontinuous functions of the sample data, for example certain “pre-test”
estimators. That is, define an estimator by 8 = 4, if i > a and fi = t$ if i I a, where
i is a test statistic. If Pr(? > a) = w, then the risk of this estimator relative to
quadratic loss is r;(e) = wE(8, - 8)* + (1 - w)E(d, - 6)*. As an alternative
estimator, consider 4s = wfi, + (1 - w)4 with risk function




Then r;(S)-r;,(B)   = w(l- w)E[(8,    - 0)-(d,  - @)I* > 0 and thus the discontinu-
ous estimator 8 is inadmissible. For further properties of “preliminary-test”
estimators, see Judge and Bock (1978).
   Since the class of admissible estimators relative to a specific loss function
contains many estimators, further conditions have to be provided in order to
choose among them. As seen above, the conditions of the Gauss-Markov
Theorem limits the choice to linear and unbiased estimators and thus rules out,
for example, the non-linear, biased James-Stein estimator in (3.17) and many
others. The limitation to linear and unbiased estimators is not only arbitrary but
can lead to poor results in practice [see, for example, Efron and Morris (1975)].
   Another criterion for choosing among admissible estimators is the Wald
minimax criterion; that is, choose the estimator that minimizes the maximum
expected loss. Formally, find 4 such that max;r,(e) I maxi r$ (8), where & is any
other estimator. While this rule provides a unique solution Innmany problems, its
very conservative nature has been criticized; see, for example, Ferguson (1967, p.
58) and Silvey (1970, p. 165). A much less conservative rule is to choose the
estimator, when it exists, that minimizes the minimum risk or, equivalently,
maximizes the maximum utility. While these rules may have some uses in
particular cases, in many others they lead to solutions that are not entirely
satisfactory.
   To illustrate the use of risk functions, consider Figure 3.1 in which the risk
functions associated with three estimators, 8,, d2, and es, have been plotted. As
140                                                                          A. Zellner

                     risk




                                       Figure 3.1



drawn, e, and r$ clearly dominate d3 since r;, lies everywhere above the other two
risk functions. Thus, & is inadmissible. In choosing between 4, and b,, it is clearly
important to know whether 13’s value is to the right or left of the point of
intersection, 13= d. Without this information, choice between 8, and d2 is difficult,
if not impossible. Further, unless admissibility is proved, there is no assurance
that either 4, or I$ is admissible. There may be some other estimator, say d4, that
dominates both f, and &. Given these conditions, there is uncertainty about the
choice between 8, and 4 and, as stated above, without a proof of admissibility
there is no assurance that either is admissible. For a practical illustration of these
problems in the context of estimating the parameter p in a stationary, normal,
first-order autoregressive process, y, = pyl_, + et, see Thomber (1967). He pro-
vides estimated risk functions for ML and several other estimators for p. These
risk functions cross and thus no one estimator uniforrnIy dominates the others.
The shapes of the estimated risk functions are also of interest. See also Fomby
and Guilkey ( 1978).
   In summary, the criterion of admissibility, a sampling criterion, provides a
basis for ruling out some estimators. Indeed, according to this criterion, Stein’s
results indicate that many ML and LS estimators are inadmissible relative to
quadratic loss. In other cases in which estimators do not possess finite moments,
they are inadmissible relative to quadratic and other loss functions that require
estimators’ moments to be finite in order for risk to be finite. Even if just
bounded loss functions are considered, there is no assurance that ML and LS
estimators are admissible relative to them without explicit proofs that they do
Ch. 2; Statistical   Theov and Econometrics                                       141


indeed possess this property. As regards admissible estimators, they are not in
general unique so that the problem of choice among them remains difficult. If
information is available about the range of “plausible” or “reasonable” values of
parameters, a choice among alternative admissible estimators can sometimes be
made. In terms of Figure 3.1, if it is known that e, and & are admissible
estimators and if it is known that 8 > d, then I$ would be preferred to 6,. Below,
in the Bayesian approach, it is shown how such information can be employed in
obtaining estimators.


3.2.1.7. Buyesian approach. In the Bayesian approach to estimation, both ob-
servations and parameters are considered random. Let p( n, 6)) be the joint pdf for
an observation vector 2 c R, and 0 c 0. Then, according to the usual rules for
analyzing joint pdfs, the joint pdf can be expressed as


      p(xJ)          = P(xl@Pw

                     = P(elx)P(xL                                             (3.18)


where the functions p( 0) are labelled by their arguments. From (3.18), p( 01x) =
pwp(xwp(x)                 or

                                                                              (3.19)


where the factor of proportionality in (3.18) is the reciprocal of/,p(8)p(x)f?)d6
= p(x). The result in (3.19) is Bayes’ Theorem withp(8)x) the posterior pdf for
8, p(0) the prior pdf for 8, and p(xl8) the likelihood function. Thus, (3.19) can
be expressed as,

      posterior pdf a (prior pdf) X (likelihood function).

   As an example of the application of (3.19), consider n independent     binomial
trials with likelihood function


      p(rln,e)=(:)e’(l-e)“‘,

with 0 I B I 1. As prior pdf for 8, assume that it is given by p(Bla, b) = 8”- ‘(1 -
e)“- '/B(n, b) a beta pdf with a, b > 0 having given values so as to represent the
available information regarding possible values of 8. Then the posterior pdf for 0
142                                                                         A. Zellner

is given by



                                                                               (3.20)

where D denotes the prior and sample information and the factor of proportional-
ity, the normalizing constant is l/B(r + a, n - r + b). It is seen that the posterior
pdf in (3.20) is a beta-pdf with parameters r + a and n - r + b. The sample
information enters the posterior pdf through the likelihood function, while the
prior information is introduced via the prior pdf. Note that the complete posterior
pdf for 8 is available. It can be employed to make probability statements about 8,
e.g. Pr( c, -C8 < c2 1D) = jc:‘p (81 D) de. Also, the mean and other moments of the
posterior pdf are easily evaluated from properties of the beta distribution. Thus,
the prior pdf, p(@la, b), has been transformed into a posterior pdf, p(QD), that
incorporates both sample and prior information.
   As mentioned in Section 2.2, the added element in the Bayesian approach is the
prior pdf, p(8), in (3.19), or p(Qz, b) in (3.20). Given a prior pdf, standard
mathematical operations yield the posterior pdf as in (3.19). Explicit posterior
distributions for parameters of many models encountered in econometrics have
been derived and applied in the literature; see, for example, Jeffreys (1967)
Lindley (1965), DeGroot (1970), Box and Tiao (1973), Learner (1978), and Zellner
(1971). Further, from (3.19), the marginal pdf for a single element or a subset of
the elements of 8 can be obtained by integration. That is, if 8’= (QY;), the
marginal posterior pdf for 8, is given by




              = J( P 4i4,   D)p(aD)w,                                         (3.21)

where in the second line the integration over the elements of 0, can be interpreted
as an averaging of the conditional posterior pdf for 8, given e,, p(O,lfl,, D), with
the marginal posterior pdf for e,, p(tl,l D), serving as the weight function. This
integration with respect to the elements of t9, is a way of getting rid of parameters
that are not of special interest to an investigator, the so-called nuisance parame-
ters. In addition, the conditional posterior pdf, ~(8, IO,, D), can be employed to
determine how sensitive inferences about B, are to what is assumed about the
value of f$; that is, p(S,@, D) can be computed for various values of Q see, for
example, Box and Tiao (1973) and Zellner (1971) for examples of such sensitivity
analyses. Finally, as will be explained below, given a loss function point estimates
can be obtained.
Ch. 2: Statistical Theory and Econometrics                                          143

   The prior pdf, p(e), in (3.19) is formulated to reflect an investigator’s prior
information, that is, information available about possible values of 8 before
observing a current sample. The information represented in a prior distribution
may be past sample information and/or non-sample information derived perhaps
from economic theory or other sources. The problem of representing such
information accurately and adequately is not an easy one even though consider-
able effort has been devoted to the problem of assessing or determining the forms
of prior pdfs [see, for example, Winkler (1980) Kadane et al. (1980), and Zellner
(1972, 1980)]. In some cases, particularly when the sample size is moderately
large, the posterior properties of pdfs are not very sensitive to minor alterations in
the forms of prior pdfs. In terms of the binomial example above, when n and r are
moderately large, altering slightly the values of the prior parameters a and b does
not change features of the posterior pdf very much.
   As regards the often-mentioned issue that different investigators may have
different prior pdfs and thus will obtain different posterior distributions from the
same likelihood function, this is hardly surprising since they have different initial
information. On pooling their initial information, they will obtain similar in-
ferences. Or if it is a matter of comparing the compatibility of prior information
with sample information, as explained below predictive and posterior odds
techniques can be employed. Given that researchers tend to be individualistic in
their thinking, it is not surprising that initial views differ. Generally, the informa-
tion in data, as reflected in the hkelihood, will modify prior views and dominate
as the sample size grows large. In fact, for any non-degenerate prior, as the
sample size grows, the posterior pdf in (3.19) assumes a normal shape centered at
the ML estimate with posterior covariance matrix approximately equal to the
inverse of the Fisher information matrix evaluated at the ML estimate; see, for
example, Jeffreys (1967, p. 193ff.) for details. Jeffreys (1967, p. 194) regards this
as a justification of ML estimation in large samples, a non-sampling argument.
Thus, in large samples, the information in the sample dominates the posterior pdf
in the sense that the prior pdf’s influence on the shape of the posterior pdf
becomes negligible.
   In some cases there may be little or practically no prior information available
about the possible values of parameters, as in the early stages of an investigation.
In such cases Bayesians employ so-called “non-informative” or “diffuse” prior
pdfs. For some work on the formulation of such prior distributions, see Jeffreys
(1967), Box and Tiao (1973) Jaynes (1968, 1980), Savage (1961), and Zellner
(1971, 1975). In the case of a parameter 8 such that - cc < 0 < 00, Jeffreys
recommends using p(0) a constant, while for a parameter with a semi-infinite
range, such as a standard deviation u satisfying 0 < (I < m, he recommends taking
log CJuniformly distributed that implies p(a) a l/a. It is the case that these are
improper priors since they do not integrate to a finite constant and hence are
144                                                                                            A. Zellner

termed “improper”.33 Others, notably Savage (1961) and Box and Tiao (1973)
define a “diffuse” prior for 8 as uniform over a very wide, finite interval, that is,
p( 0) a constant for - M < e < M with M large but finite. In this case the prior is
proper but a choice of the value of M is required. An example will be presented to
illustrate the use of diffuse prior pdf.
Example 3.4

Consider the normal mean problem y; = p + E;, i = 1,2,. . . , n, where the E~‘Sare
NID(0, 1). The likelihood function is (277) n/2exp{-[Ys2 + n(p - JJ)~]/~}, where
7 is the sample mean, vs2 = c:= ,( y, - T)~, and v = n - 1. Let the diffuse prior be
p(p) a constant. Then the posterior pdf for p, p(pID), where D represents the
prior, and sample information is

      P(!JlD)   a c2+       n’2exp{ - [vs2/2}+n(p           - J)2]/2}     cf exp{ - n(p - J)2/2},

is in the normal form with posterior mean 7, the sample mean and posterior
variance l/n.34
   In this example it is seen that the mean and mode of the posterior pdf are equal
to the sample mean, p, the ML estimate. Some have crudely generalized this and
similar results to state that with the use of diffuse prior pdfs, Bayesian and
non-Bayesian estimation results are equivalent, aside from their differing interpre-
tations. This generalization is not true in general. If a prior pdf is uniform,
p(O) a constant, then the posterior pdf in (3.19) is given byp(8]x) a p(xlt?), that
is, it is proportional to the likelihood function. Thus, the modal value of the
posterior pdf will be exactly equal to the ML estimate and in this sense there is an
exact correspondence between Bayesian and non-Bayesian results. However, as
shown below, the posterior mean of 8 is optimal relative to a quadratic loss
function. If a posterior pdf (and likelihood function) is asymmetric, the posterior
mean of 8 can be far different from the modal value. Thus, the optimal Bayesian
point estimate can be quite different from the ML estimate in finite samples.
Asymmetric likelihood functions are frequently encountered in econometric
analyses.
   As regards point estimation, a part of the Bayesian approach, given a loss
function, L(l), d), wherein t9 is viewed as random and 8 is any non-random
estimate, b = 8(x), a non-sampling criterion is to find the value of 4 that

   33Jeffreys (1967) interprets      such improper   priors_ as implying that cc rather than 1 is being
employed to represent the certain event, Pr( - 00 < 0 < co). Then the probability      that 0 lies in any
finite interval, Pr( cI -C B -C 6) = 0 and Pr(a -C 0 < h)/Pr(c < 0 < d) being of the form O/O is inde-
terminate.
   341f the prior pdf p(c) a constant,      - M < p < M, had been used, the posterior pdf is p(nID) a
exp( - no,t - ~3*/2) with - M < p < M. For M large relative to I/n, the posterior is very closely
normal.
Ch. 2: Statistical   Theory and Econometrics                                                          145

minimizes the posterior expectation of the loss function. Explicitly the problem                        is
as follows:

       minEL(8,8)           = min/oL(r9,d)P(elx)de,                                               (3.22)
        i                      8
where ~(81~) is the posterior pdf in (3.19). The minimizing value of 8, say f&, is
the optimal Bayesian estimate, optimal in a non-sampling sense since the observa-
tion vector x is given. In the case of a quadratic loss function, L(B, 4) = (t9 -
@Q(e - I), where Q is a given pds matrix, 6, = 8 = E(Blx), the posterior mean
vector. That is,




since E(B - 8) = 0. Thus, since Q is pds, taking 4 = 8 leads to minimal expected
loss. For a scalar parameter, 8, and an absolute error loss function, L(B, 4) =
cl@- 61, it can be shown that the median of the posterior pdf for 8 is the optimal
point estimate in the sense of minimizing posterior expected 10~s.~~When the
minimization problem in (3.22) cannot be solved analytically, it is often possible
to determine the solution by use of numerical integration procedures. Thus, the
optimal Bayesian estimate is tailored to be optimal relative to the loss function
that is considered appropriate..
   Above, the optimal Bayesian estimate is defined as the solution to the minimi-
zation problem in (3.22). Before the data are observed, it is of interest to consider
the sampling properties of the Bayesian estimate 6,. Given a loss function
L(B,fi), the risk function, discussed above, is q(e)= /RXL(B,~)p(xl@dx             for
0 c 0. The Bayesian estimator is defined as the solution to the following problem:

                                                                                                  (3.23)


That is, choose the estimator 8 so as to minimize average risk, EG(e), where the
expectation is taken with respect to the prior pdf p(8). On substituting the
integral expression for G(e) in (3.23), the minimand is


       S,S,L(e,B)p(e)p(xie)dxde=JBjR
                               L(e,B)p(eix)p(x)dxde,(3.24)
              x                                           x




   35See, for example, Zellner (1971, p. 25) for a proof. Also, the particular loss structure that yields
the modal value of a posterior pdf as an optimal point estimate is described in Blackwell and Girshick
(1954, p. 305). This loss structure implies zero loss for very small estimation errors and constant
positive loss for errors that are not small.
146                                                                                       A. Zellner

whereP(QP(.W = P(x)P(@) from (3.18) has been employed. On inter-
changing the order of integration in (3.24), the right side becomes


              qe,d)p(elx)de
                                     1p(x)dx.                                                (3.25)


When this multiple integral converges, the quantity 0, that minimizes the expres-
sion in square br?ckets will minimize the entire expression given that p( x) 2 0 for
x c R 36 Thus, @a, the solution to the problem in (3.22), is the Bayesian estimator
that minimizes average risk in (3.23).
   Some properties of 0, follow:
(1) 6, has the optimal non-sampling property in (3.22) and the optimal sam-
      pling property in (3.23).
(2) Since 8, minimizes average risk, it is admissible relative to L(e, e). This is so
      because if there were another estimator, say dAA,  that uniformly dominates 6,
      in terms of risk, it would have lower average risk and this contradicts the
      fact that e, is the estimator with minimal average risk. Hence, no such dA
      exists.
(3)   The class of Bayesian estimators is complete in the sense that in the class of
      all estimators there is no estimator outside the subset of Bayesian estimators
      that has lower average risk than every member of the subset of Bayesian
      estimators.
(4)   Bayesian estimators are consistent and normally distributed in large samples
      with mean equal to the ML estimate and covariance matrix equal to the
      inverse of the estimate information matrix. Further, in large samples the
      Bayesian estimator (as well as the ML estimator) is “ third-order” asymptoti-
      cally efficient.37 These results require certain regularity conditions [see, for
      example, Heyde and Johnstone (1979)].
   A key point in establishing these sampling properties of the Bayesian estimator,
8,, is the assumption that the multiple integral in (3.24) converges. It usually does
when prior pdfs are proper, although exceptions are possible. One such case
occurs in the estimation of the reciprocal of a normal mean, 8 = l/p, using
quadratic loss, (0 - e)2. The posterior pdf for CL,based on a proper normal prior
for CL,is normal. Thus, B = l/p, the reciprocal of a normal variable, possesses no
finite moments and the integral defining posterior expected loss does not con-
verge. With more information, say B > 0, this problem becomes amenable to
solution. Also, if the loss function is (0 - d)2/02, a relative squared error loss

  36See Blackwell and Girshick (1954), Ferguson (1967), and DeGroot (1970) for consideration of this
and the following topics.
  37See, for example, Takeuchi (1978) and Pfanzagl and Wefelmeyer (1978).
Ch. 2: Statistical Theory and Econometrics                                                              147

function, there is a well-defined, Bayesian estimator that minimizes average risk
[see Zellner (1978) for details]. Also, if the loss function is bounded, solutions
exist [see Zaman (1981)]. In terms of the Stein normal vector-mean problem,
y = 8 + e, considered above, if the prior pdf is p(0) a constant, the posterior pdf
is p (8) 0) a exp( - (8 - y )‘( 8 - y)/2} that has posterior mean y, the inadmissible
ML and LS estimator relative to L(e, I) = (0 - I)‘(@ - d) when n 2 3. However,
when n = 1 or n = 2 the posterior mean is admissible even though it is associated
with a posterior pdf based on an improper prior pdf. While inadmissible, the
estimate e^= y with n > 2 does satisfy the optimality criterion in (3.22). Also, as
Hill (1975) points out, if the elements of the mean vector 8 are independently
distributed a priori, then the joint prior pdf is p(B)= n~=,pi(di)               and the
associated posterior pdf is p(81x) a ~~=,pi(8,)p(yilf?,).     Thus, the Bi’s are inde-
pendently distributed a posteriori and, using any separable loss function, for
example L(B, 8) = c:= ,(6, - r$)‘, the Bayesian estimate of 0, is its posterior mean
that just depends on yi and not on the other yi’s. 38 If the priors, pi( e,), are normal
with very large dispersion, Hill shows that the admissible Bayesian estimates, the
posterior means of the ei’s, are not far different from the Bayesian diffuse prior
andMLestimates,di=yi,id1,2           ,..., n.
   The important point brought out by Hill’s (1975) cogent analysis is that if the
means in the Stein problem are mean rainfall in Calcutta, mean income in Palo
Alto, and mean annual attendance at the Milan opera, these Bi’s are reasonably
considered independent a priori. Given this property and Hill’s analysis, the
estimate of a single @,,say mean rainfall in Calcutta, will just depend on observed
rainfall in Calcutta and not on observed income in Palo Alto and attendance at
Milan’s opera. Therefore, the Stein-James estimate (3.17) is inappropriate for
such data and assumptions. On the other hand, there are many situations in
which the r$‘s are dependent a priori39 and for them use of an appropriate prior
pdf reflecting such dependence can lead to substantial improvement in estimation
and prediction results. Specific prior assumptions leading to a Bayesian estimate
close to or equal to the Stein-James estimate in (3.17) are reviewed in Zellner and
Vandaele (1975).
   In summary, the Bayesian prescription, i.e. choose the estimate that minimizes
expected loss, is a general principle that is widely applicable. Its use in finite
samples does involve the choice of an appropriate prior pdf for parameters. While
this is difficult, particularly in multi-parameter problems, a basic issue is whether
it is possible to get sensible estimation results from any point of view without
information as to what the probable values of parameters are. Bayesians formally

   3sThis implies that the Stein-James    estimate in (3.17) is suboptimal for this specification.
   39Lindley (1962) provides the following model to rationalize           dependent  Oi’s: y, = 0, + ai and
Bi = ~9+ vi, i = 1,2,. , n, where the q’s and u!‘s are independent          normal error terms and t9 is
interpreted as a “common effect”. Analysis of thrs model produces estimates of the Bi’s very similar to
those in (3.17) [see, for example, Zellner and Vandaele (1975)].
148                                                                                A. Zeher

represent such information by use of prior pdfs, while non-Bayesians often use
such information informally. Evidence is being accumulated on the relative merits
of these alternative approaches to parameter estimation and other inference
problems.

3.2.1.8. Robustness criterion. The robustness criterion relates to the sensitivity
of point estimation and other inference procedures to departures from specifying
assumptions regarding models and prior distributions and to unusual or outlying
data. Since specifying assumptions are usually only approximately valid, it is
important that the sensitivity of inference techniques to departures from specify-
ing assumptions and to outlying observations be understood and that methods be
available that are relatively robust to possible departures and outlying observa-
tions. For example, it is well known that least squares estimates can be vitally
affected by one or a few outlying data points. Also, in some cases, Bayesian
inferences are sensitive to slight changes in the formulation of prior distributions.
   In dealing with robustness issues two general approaches have been pursued. In
the first, attempts are made to formulate estimation and other inference proce-
dures that retain desirable properties over a range of alternative models and/or in
the presence of outlying observations. For example, in estimating a population
mean, the sample median is less sensitive to outlying observations that is the
sample mean. Such procedures are called “blanket procedures” by Barnett and
Lewis (1978, p. 47).@ The second app roach, which may be called a “nesting
approach”, involves broadening an initial model to accommodate suspected
departures from specifying assumptions and/or possible outlying observations
and then proceeding with an analysis of the broader model. In both approaches,
the nature of alternatives to the initially entertained model must be given careful
consideration in order to obtain sensible results in estimation. Mechanical down-
weighting of outlying observations does not necessarily lead to satisfactory
results. For example, use of the median to estimate the location of a distribution
when outlying observations are present may suggest a unimodal distribution when
in fact the true distribution is bimodal. In this case, the outlying observations may
give some information about the location of a second mode. Or in some cases,
outlying observations in regression analysis may indicate that the assumed
functional form for the regression equation is incorrect and thus such outlying
points should not be carelessly discarded or down-weighted. On the other hand, if
outlying observations are in some sense spurious, say the result of transcription
errors, then down-weighting them in estimation can lead to more sensible results.
   An example of the first approach, the blanket approach, is Huber’s (1972)
linear order statistics estimators or L-estimators for a location parameter p based

 40For examples of this approach, see Tukey (1977), Huber (1964, 1972), and Belsley, Kuh and
Welsch (1980).
Ch. 2: Statistical Theory and Econometrics                                         149

on a sample of independent observations, x,, x2.. . . ,x,. The ordered observations,
X(l) < X(Z)< * * * < X(n) are combined with weights ci to yield the estimate p =
C;=,C;X(~), with th e c i ‘s smaller in value for the extreme observations than for the
central observations. The L-class of estimators includes various “trimmed-mean”
estimates (those that disregard extreme observations $&d just average central
observations), the sample median, and the sample mean (ci = l/n) as special
cases. Judicious choice of the ci’s can lead to estimates that have better sampling
properties than the sample mean when the underlying distribution departs from,
for example, a normal distribution and in this sense are more robust than the
sample mean. Other robust estimates, discussed by Jeffreys (1967, pp. 214-216)
and Huber (1972), are maximum likelihood-type estimates, called M-estimates by
Huber for estimating a location parameter from n independent observations with
log-likelihood function cy= ,logf(xi - CL).The necessary condition for a maxi-
mum of the likelihood function can be written as

       i    f’(Xi - fi)/f(x;     - p) = f          Wi(Xi- p) = 0,
      i=l                                    i-l

where p is the ML estimate and wi = f’(xi - fi)/(xi - fi)f(xi - p), as Jeffreys
(1967, p. 214) explains. Or, in Huber’s (1972) notation, it may be written as
c~=,#(xi-fl)=O       with #(xi-fi)=(xi-@)oi.          Thus, fi=c~=‘=,oixi/c~=,     wi is
the form of the estimate with the wi’s data dependent. Choice of the form of +(a)
or of the wi’s depends on the nature of the underlying distribution which usually
is not known exactly. If the underlying distribution is normal, then wi = constant
and equal weights are appropriate. If f’/f does not increase as fast as Ixi - /A],
then Jeffreys (1967) remarks: “. . . the appropriate treatment will give reduced
weights to the large residuals. If it [f’/f] increases faster, they should receive
more weight than the smaller ones” (p. 214). See Jeffreys (1967, pp. 214-215) for
an application of this approach, and Huber (1972) for further discussion of the
appropriate choice of weights. For independently and identically distributed
(i.i.d.) observations #(xi - p) = f’(xi - p)/f(xi - p), i = 1,2,. . . , n, and on in-
tegration log f( ui) = /# ( ui) dui + constant), where ui = xi - p. Thus, choice of a
particular form for \c/(vi) implies a form of the likelihood function when /J, ( vi) dui
converges and the i.i.d. assumption is satisfied. Viewed in this way, the M-
estimation approach is a “nested approach”. However, this interpretation is not
generally possible if the observations are not i.i.d.
   The second approach, the nesting approach, involves representing suspected
departures and/or outlying observations from an initial model by formulating a
broader model and analyzing it. There are many examples of this approach in
econometrics and statistics. Student-t distributions that include Cauchy and
normal distributions as limiting cases can be employed in analyzing regression
and other models [see, for example, Jeffreys (1973, p. 68) and Zellner (1976)]. The
heavy tails of Student distributions for low degrees of freedom accommodate
150                                                                         A. Zeher


outlying observations. Also, see Bamett and Lewis (1978) for a review of a
number of models for particular kinds of outlying observations. Many production
function models including the CES, trans-log, and other generalized production
function models include the Cobb-Douglas and other models as special cases.
Box-Cox (1964) and other transformations [see, for example, Tukey (1957) and
Zellner and Revankar (1969)] can be employed to broaden specifying assump-
tions and thus to guard against possible specification errors. In regression
analysis, it is common practice to consider models for error terms, say autoregres-
sive and/or moving average processes when departures from independence are
thought to be present. Such broadened models can of course be analyzed in either
sampling theory or Bayesian approaches. With respect to Bayesian considerations
of robustness, see, for example, Savage et al. (1963), Box and Tiao (1973), and
DeRobertis (1978).


3.2.1.9. Invariance criterion. The invariance criterion, discussed for example in
Cox and Hinkley (1974, pp. 41-45) and Arnold (1981, pp. 20-24), relates to
properties of estimation and other inference procedures when sample observa-
tions and parameters are subjected to certain types of transformations. For
example, if in a model for i.i.d. observations the observations are reordered or
permuted, the results obtained with most estimation procedures will be unaffected
and are thus invariant to such transformations of the data. Further, if the Ti’s are
i.i.d., each with pdf f(x - t9), and the zi’s are transformed to yi = zi + a, where
 - O!I< a -CCO, then each yi has a pdf f(v - tY*)= f(x - 0), where 8* = 8 + a. If
the parameter spaces for 0 and 8* are identical, say the real line, then the
invariance criterion requires that an estimate of 8, d(x), based on the x.‘s, be
identical to that obtained from the yi’s to estimate 8*, d(y), and then getting an
estimate of f from S( y) = d*(y)- a. That is, an invariant estimate must satisfy
e( x + ar) = t9(x)+ a for all values of a, where 6 denotes a column of ones. As Cox
and Hinkley (1974, p. 43) point out, a crucial point is that there are no external
reasons for preferring some values of 0 to others. For example, they mention that
if 6’2 0, the invariance condition above would not hold since the parameter space
is not invariant under the transformation when 6’2 0 is imposed.
    Conditions under which estimates are invariant in the above sense to more
general transformations of the data, say yi = czi + a or yi = gzi, where g is a
member of a class of transformations G, have been analyzed in the literature.
Also, Arnold (1981, p. 20 ff.) defines conditions under which an estimation
problem and associated loss function are invariant under both transformations of
the data, parameters, and loss function and goes on to discuss “best invariant” or
“minimum risk invariant” estimators. See also Cox and Hinkley (1974, p. 443) for
a discussion of the famous Pitman minimum risk invariant estimate of a location
Ch. 2: Statistical   Theoty and Econometrics                                      151

parameter B in the likelihood function ny= ,f(xi - e), - co < 8 < 00. The result is
that the Pitman estimate is “. . . the mean of the normalized likelihood function”
(p. 444), that is, the mean of a posterior distribution based on a uniform,
improper prior for 19.
   In the Bayesian approach, invariance of estimation results to transformations
of the data and parameters has been considered in Jeffreys (1967), Hartigan
(1964), and Zellner (1971). Hartigan, building on Jeffreys’ pioneering work,
defines various kinds of invariance and provides classes of prior distributions,
including Jeffreys’ that lead to invariant estimation results.
   Requiring that estimation procedures be invariant places restrictions on the
forms of estimators. Having invariance with respect to changes in units of
measurement and some other types of transformations suggested by the nature of
specific problems seems desirable. However, as Cox and Hinkley (1974) state,
“. . . in a decision-making context [as in choice of an estimator relative to a given
loss or utility function].. . there is sometimes a clash between the invariance
principle and other apparently more compelling requirements; there can be a
uniform loss of expected utility from following the invariance principle” (p. 45).
Thus, for each problem it is important to consider carefully the types of
transformations for which invariance is required and their effects on estimation
and other inference procedures.


3.2.1.10. Cost criterion. Practically speaking, the cost of applying alternative
estimation techniques is of importance. Some estimation procedures involve
difficult numerical procedures. Generally, cost-benefit analysis is relevant in
choosing among alternative estimation procedures. While this is recognized, it is
difficult to generalize about the range of considerations. Each case has to be
considered separately. In some cases, ,cost of computation can be formally
introduced in loss functions and these broadened loss functions can be employed
to choose among alternative estimation procedures. However, in many cases, cost
considerations are dealt with in an informal, heuristic manner.
   In this section various approaches and criteria for point estimation have been
considered. While point estimation is important, it must be emphasized that a
point estimate unaccompanied by a measure of precision is very unsatisfactory. In
the sampling theory approach, point estimates are supplemented by their associ-
ated standard errors (estimates of standard deviations of estimators). In the
Bayesian approach, point estimates are usually accompanied by a measure of the
dispersion of posterior distributions, e.g. posterior standard deviations or com-
plete posterior distributions. In the next section attention is directed toward
explaining methods for computing intervals or regions that in one of several
senses probably include the values of parameters being estimated.
152                                                                         A. Zellner

4.     Interval estimation: Confidence bounds, intervals, and regions

To provide a quantitative expression of the uncertainty associated with a scalar
point estimate 8 of a parameter 8, confidence bounds and intervals are available
both in the sampling theory and Bayesian approaches. Similarly, for a vector
point estimate 19of a parameter vector B, sampling theory and Bayesian confi-
dence regions for 8 can be computed. As will be seen, the probabilistic interpreta-
tions of sampling theory and Bayesian confidence bounds, intervals, and regions
are radically different.

4.1.    Confidence bounds

Let B c 0 be a scalar parameter appearing in a probability pdf, f (xl@), for a
random observation vector f. Further, let 5, = a,(n) be a statistic, that is, a
function of 2, such that

       P( a’, a ele)   = i - a.                                               (4.la)

In addition, it is required that if (Y,> (Y*and if H,, and 6,* are both defined in
accord with (4.1), then H,, Q Ha2, that is, the larger 1 - (Y,the larger is the upper
bound. Then 5, is called a (1 - a)100 percent upper confidence bound for 8.
From (4.1 a) the random event cl, > 8 has probability 1 - (Yof occurrence and this
is the sense in which 6, is a probabilistic bound for 8. When 2 is observed, a,(Z)
can be evaluated with the given sample data X. The result is a,(x), a non-stochas-
tic quantity, say a,(x) = 1.82, and the computed upper confidence bound is 1.82.
In a similar way a (1 - a) x 100 percent lower confidence bound for 8 is & = b,(n)
such that

                                                                              (4.lb)

with ia, 2 haa,.when CX,> (Y*;that is, the larger is 1 - (Y,the smaller is the lower
bound.
   Bayesian confidence bounds are based on the posterior pdf for 8, p( 0 Ix) a
a(tl)f(nld), where a(0) is a prior pdf for 8. A (l- a)~100 percent Bayesian
upper bound, c, = c,(x), is defined by

       p(e G c,~x) = i - a,                                                   (4.2a)

where t9is considered random and the sample data x are given. Note that

       p(e G c,Ix) =f           p(elx)de
                          --m

is just the posterior cdf evaluated at c,.
Ch. 2: Statistical   Theory and Econometrics                                                                153


   A (1 - c-x)X 100 percent Bayesian lower bound is d, = d,(x)                         satisfying

       P(e>&]x)=l-cw,                                                                                  (4.2b)

where




   The fundamental differences in the probability statements in (4.1) and (4.2)
must be emphasized. A sampling theory bound has the interpretation that in
repeated samples the bound so computed will be correct in about 1 - (Y, say
1 - C-I
      = 0.95 of the cases. The Bayesian bound states that the random parameter 8
will satisfy the bound with posterior probability 1 - (Ygiven the sample and prior
information. The following example is a case in which Bayesian and sampling
confidence bounds are numerically identical.
Example 4. I

Let n Zi’s be i.i.d. N(8,l).         Then

      jtX]e)         = (2+“12     exp( -C(xi-e)2/2)                aexp{-n(8-z)2/2},

where X is the sample mean. Then with the prior n(e) a constant, - cc < 8 -C00,
the posterior pdf is j( 8 IX) a exp( - n( Cl- ~)~/2}, a normal pdf. Thus, z =
\/;2-(0 - a) is N(0,1) a posteriori and the constant c, can be found such that
P(z<c,(X)=l-cw.         z<cc, is equivalent to &(e-z)Gcc,         or eGx+c,/&
Thus, P( 8 Q ,Y+ c,/& IX) = 1 - (Yand X + c,/h          is the Bayesian upper confi-
dence bound. Now from a sampling theory point of view, X has a normal
sampling pdf with mean 8 and variance l/n. Thus, z = &(X - 8) is N(0, l), given
8. From P(~a-c~ld)=l-            (Y it follows that P[&(n - 6) > - c,]e] = P(x+
c,/fi    2 6]r3) = 1 - (Y and X + c,/fi    is the sampling theory upper confidence
bound that is numerically identical to the Bayesian bound.
  The example indicates that when a uniform prior pdf for the parameter 8 is
appropriate and when a “pivotal quantity”, such as z = fi(~ - e), that has a pdf
not involving the parameter 8 exists4’ Bayesian and sampling theory confidence
bounds are numerically identical. Other examples involving different pivotal
quantities will be presented below. Also, a connection of confidence bounds with
construction of tests of hypotheses will be discussed below in the section on
hypothesis testing.

  4’Note that the pdf for z =&(a        - 0) in tb e example   is lv(0, I) both from the sampling   theory and
Bayesian points of view.
154                                                                         A. Zellner


4.2.    Confidence intervals

By use of both a lower and an upper confidence bound for a scalar parameter 8,
an interval estimate or a confidence interval is obtained. In the sampling theory
approach the random quantities (i = a(f) and b = b(f) such that

       P(6<8+-@9)=1-a                                                           (4.3)

yields a random interval that has probability 1 - 1yof including or covering the
fixed unknown value of 8. On combining a lower confidence bound, Aa,, with an
upper confidence bound Z,*, with ~1,+ ~1~= (Y, (4.3) will be satisfied. Similar
considerations apply to combinations of Bayesian lower and upper confidence
bounds to obtain a Bayesian confidence interval. In general, since there are many
values for cr, and (Yesatisfying (Y,+ (Ye= (Y,confidence intervals with probability
content 1 - (Yare not unique.
Example 4.2

Consider the standard normal regression model y”= Xp + u”,where the n x 1 vector
rSisMVN(O,o21,).ThenB=(X’X)-‘X’~hasapdfthatisMVN[8,(X’X)-’a2]
and vs*/u*, where v = n - k and vs* = ( j - XB)‘( j - Xfi), has a X2 pdf with v
degrees of freedom (d.f.). It follows ihat t = (bi - &)/sj, has a univaqate Stu-
dent-t (US-t) pdf yth v d.f., where pi and pi are the ith elements of fi and B,
respectively, and $3, = miis2, with mii the i, ith element of (X’X) - ‘. Then from
tables of the Student-t distribution with v d.f., a constant_ c, > 0 can be found
such that with given probability 1 T a, P( 1rl 2 CJ = P( 1pi - piA/sj, < c, 1PI) =
1-a. Since ]&-&I/ s; < c, is equivalent to pi - c&, < pi < pi + csi,, P( pi -
CASK</3i<&+c,s$]&)‘=1-a            and &&c&.       is a (1-a)XlOO     percent confi-
dence interval for &.’Note that the interval is random and pi has a fixed unknown
value. With given data bi f CASK, can be evaluated to yield, for example 0.56 f 0.12.
Example 4.3

If the regression model in the previous example is analyzed with a diffuse prior
pdf, p(/3, a) a l/o, the posterior pdf is p(jI, sly) a a-(“+‘)exp{-[vs*       +(/3 -
b>‘X’X(/3 - h1/2~*>and on integrating over u, 0 < u < 00, the marginal poste-
rior pdf for fi is p(fily) a [vs* +(fl -B)‘X’X(/3 -j?l)]-(Y+k)/2, a pdf in the
MVS-t form with v = n - k, fi = (X’X) - ‘X’y, and vs* = ( y - X&I< y - Xb).
Then it follows that t = (pi - &)/si, h as a US-t pdf with v d.f. where pi and & are
the ith elements of /3 and fi, respectively, and sj, = miis2, where mii is the i-ith
element of ( X’X) - ‘. Thus, c, can be found such that for given probability 1 - (r,
P(Itl<c~)=P(IPi-biI/        sp,
                             -. c c,ly) = 1 - (Y.Equivalently, P(& - c& < pi < fii +
CASK ]y) = 1 - a! and bi f CASK,  is a (1 - a) 100 percent Bayesian confidence inter-
val for pi in the sense that the posterior probability that the random pi lies in the
fixed interval j$ + c~.s~,is 1 - (Y.
Ch. 2: Statistical Theory and Econometrics                                                            155

    In these two examples t = (& - /3,)/ s,$,.is a pivotal quantity. Its pdf,p(t) =
c(v)/(l+    P/V)@+‘)‘*,   with C(V) a normalizing constant, does not involve /3 and
u. Also, the pdf for t is the same in the sampling theory and Bayesian approaches
when the diffuse prior p( /3, u) cx l/a is employed and in this case sampling theory
and Bayesian confidence intervals are numerically identical. However, if an
informative prior pdf were employed, reflecting additional information, the
intervals would not be numerically identical. Generally the Bayesian interval,
incorporating more information, will be shorter in length for a given confidence
level 1 - CL Generally, as 1 - (Yis increased in value both sampling theory and
Bayesian confidence intervals get broader; that is, to be more confident (higher
1 - CY)that the interval probably covers or includes the value of a parameter, it
will have to be of greater length.
    The intervals discussed in the two examples above, bi f CASK,,a;e “central”
intervals. As mentioned above, cp, and cDllcan be found such that pi - c,,sii to
fii + c,~s~ is a 1 - a confidence mterval for &. In this case, the interval is not
symmetric with respect to bi. Similarly, a confidence interval for a* need not be a
central interval. That is, the sampling pdf of z = VS*/CJ’is x2 with v d.f. Then
constants c,, and c,~ exist such that P(c,, < z < c,J = P(c,, -Cvs*/u’ < c,*lu) =
 1 - (Yor, equivalently, P(vs*/c,~ < u* < vs*/c,, la) = I- ff. The interval VS*/C,~
to vs*/c,, is not centered at s * .42 Also, there are many ways of selecting c,, and
ca2 such that the probability associated with an interval for u* is 1 - a.
    The problem of obtaining a unique confidence interval for a scalar parameter 8
can be solved in many cases by applying the criterion that for a given confidence
level 1 - (Ythe interval selected be of shortest, in some sense, length. In a Bayesian
context with a posterior pdf for 8, p( OlD), where D denotes the sample and prior
information, an interval b to a is sought such that a - b is minimized subject to
/,“p(O(D)d@ = l- (Y, where I- LYis given. The solution to this constrained
minimization problem is to select u = u * and b = b * such that p( a * ID) =
p( b, 1D).43 Then the interval b, to a, has probability content I- (Yand is of
minimal length. For a unimodal p (0 1D), the ordinate of p (8 (D) in the interval b *
to u* is everywhere higher than the ordinates outside this interval and thus the
interval b, to a, is often called a highest posterior density (HPD) interval with
probability content 1 - (Y.If p (0 1D) is unimodal and symmetric about the modal
value 6,, then the HPD interval can be expressed as 8, f c,, a central interval

   4=Ys=/c,2to vs=/c,,     is also a I- a Bayesian interval when the diffuse prior p(B, o) a I/o is
em lo ed since then YS’/CJ”has a x2 posterior pdf with Yd.f. In this problem the pivotal quantity is
vs P/u Y, which
           ‘.   has a x * pdf not involving /3 or (r in both the sampling theory and Bayesian approaches.
   43Write a - b + X /b”p (8 1D) dB, where X is a Lagrange multiplier. On differentiating this expression
partially with respect to a and to b and setting first partial derivatives equal to zero yields
 I+Xp(alD)=O        and l+Xp(bJD)=O          so that p(alD)=p(b)D)          is necessary for a-b    to be
minimized subject to the restriction. Under weak conditions, this condition is also sufficient. Also, this
interval can be obtained by minimizing expected loss with a loss function of the following type:
L = q(a - b)- I if b 6 0 < LI and L = q(a - b) otherwise, with q > 0 a given constant. This loss
function depends on the length of the interval, a - b.
156                                                                         A. Zellner


with ~(4~ + c,lD)= p(& - c,lD) and Pr(dm - c, < 8 < 8,,,+ c,lD) = 1- (Y.For
bimodal and some other types of posterior pdfs, a single interval is not very useful
in characterizing a range of probable values for 8.
   In the sampling theory approach various definitions of interval shortness have
been proposed. Since the sampling theory confidence interval is random, its
length is random. Attempts to obtain confidence intervals with minimum ex-
pected length have not been successful in general. Another criterion is to
maximize the probability of coverage, that is, to find ba and H, such that
1-a=P(~~,e8~d,18)~P(~~ne81~H,IB’)               for every 8 and PC@, where 8 is
the true value and 8’ is some other value. That is, the interval must be at least as
likely to cover the true value as any other value. An interval satisfying this
criterion is called an unbiased confidence interval of level 1 - (Y.Pratt (1961) has
shown that in many standard estimation problems there exist 1 - (Ylevel confi-
dence intervals which have uniformly minimum expected length among all 1 - a
level unbiased confidence intervals. Also, a concept of shortness related to
properties of uniformly most powerful unbiased tests will be discussed below.
   In summary, for a scalar parameter 8, or for a function of 8, g(e) results are
available to compute upper and lower confidence bounds and confidence inter-
vals in both the sampling theory and Bayesian approaches. For some problems,
for example g(0) = l/e, where Zi = 0 + Ei, with the Ei’s NID (0, I?), both the
sampling distribution of l/X and the posterior pdf for l/e can be markedly
bimodal and in such cases a single interval is not very useful. Some other
pathological cases are discussed in Lindley (1971) and Cox and Hinkley (1974, p.
232 ff.). The relationship of sampling properties of Bayesian and sampling theory
intervals is discussed in Pratt (1965).


4.3.    Confidence regions

A confidence region is a generalization of a confidence interval in the sense that it
relates to a vector of parameters rather than a scalar parameter. A sampling
theory 1 - (Yconfidence region for a vector of parameters 0 c 0 is a nested set of
regions in the sample space denoted by (j, = w,(S), where 1 is the random
observation vector such that for all 8 c 0,

       qe   c   qe)   = i - a,                                                  (4.4
and w,,(Z) c w,,(2) when (Y,> (Ye.This last condition insures that the confidence
region will be larger the larger is 1 - (Y.In particular problems, as with confidence
intervals, some additional considerations are usually required to determine a
unique form for ca. If Cs,is formed so that all parameter values in Ga have higher
likelihood than those outside, such a region is called a likelihood-based confi-
dence region by Cox and Hinkley (1974, p. 218).
Ch. 2: Statistical Theory and Econometrics                                          151

  A Bayesian 1 - (Yconfidence region for a parameter vector B is based on the
posterior pdf for 8. That is, a nested set of regions w, = We, where x is a given
vector of observations such that

      P(fkw,(x)Jx)=l-a,                                                           (4.5)

and o,,(x) c o+(x) for C-Z,   > (Yeis a 1 - a Bayesian confidence region for 8. On
comparing (4.4) and (4.5) it is the case that they involve different probability
statements, (4.4) relating to properties of the random region Ga given 8, and (4.5)
relating to posterior properties of the random 6 given the region w, = w,(x). Two
examples will be provided to illustrate these concepts.
Example 4.4

From Example 4.2 the sampling distribution of E = (b - B)‘X’X(b - j3)/ks2 is
known to be an F pdf with k and v d.f. From tables of this distribution, c, can be
determined such that P( P Q c,) = 1 - ar. Then F = (b - &‘X’X( b - @/k,s2 Q c,
defines a set of nested regions (ellipsoids) that constitu\e a confidence region for
8. In the case where /3 has two elements, (/3 - &‘X’X(B - /3)/ks2 Q c, defines a
set of nested ellipses. For k = 1, the result (b - /3)2cx~/~2 Q c, is consistent with
the confidence interval for a single parameter discussed earlier. The bounding
contours of these confidence regions have constant marginal likelihood.
Example 4.5

From the marginal posterior             pdf for j3 in Example 4.3, it is the case that
F = (j3 - &‘X’X@     - j?)/ks2 has a posterior pdf in the form of an F pdf with k
and v d.f. Thus, c, can be obtained such that P[(j3 - B)‘X’X(j3 - fi)/ks2 < c,lD]
= 1 - (Y.Then (/3 - &X’X( B - b)/k s2 d c, defines a set of nested regions or
confidence region for B. For j3 having two elements, the nested regions are
ellipses. Also, it is the case that these confidence regions are highest posterior
density regions.
   That the regions in Examples 4.4 and 4.5 are identical is due to the fact that
there exists a pivotal quantity, namely F = (b - &‘X’X( B - /3)/ks2, that has the
same pdf under the sampling theory and Bayesian assumptions and does not
involve any parameters with unknown values. These confidence regions relate to
the entire coefficient vector /3. Similar results can be obtained for any subvector
of 8. Further, there are several types of “simultaneous” confidence intervals for
all differences of means or contrasts for various analysis of variance models,
including that for independent, normal observations, Zij, with EZjj = 8 + yi,
var(Tij)=a2,i=1,2      ,..., k and j=1,2 ,..., n and cfC,ui=O;     see, for example,
Arnold (1981, p. 135 ff. and ch. 12) for derivations of simultaneous confidence
intervals for regression and analysis of variance models.
   For many problems involving a parameter vector 0’= (e;, 0;) if pivotal quanti-
ties do not exist, it is difficult to obtain an exact 1 - (Yconfidence region for 8,
158                                                                                              A. Zellner


without additional conditions; see Cox and Hinkley (1974, p. 230 ff.) for analysis
of this problem. In a Bayesian approach the marginal posterior pdf for 8,,
h( 8, 1D), is obtained from the joint posterior pdf p( 8,, 6, ID) and confidence
regions can be based on h(8, LO). Another serious problem arises if the sampling
distribution of an estimator 8 or the posterior pdf for B is multi-modal or has
some other unusual features. In such cases sampling theory and Bayesian confi-
dence regions can be misleading. Finally, in large samples, maximum likelihood
and other estimators are often approximately normally distributed and the large
sample normal distribution can be employed to obtain approximate confidence
intervals and regions in a sampling theory approach. Similarly, in large samples,
posterior pdfs assume an approximate normal form and approximate Bayesian
intervals and regions can be computed from approximate normal posterior
distributions. For n large enough, these approximations will be satisfactory.


5.    Prediction

Prediction is a most important part of econometrics and other sciences. Indeed,
Jeffreys (1967) defines induction to be the process “. . . of making inferences from
past experience to predict future experience” (p. 1). Also, causation has been
defined to be confirmed predictability from a law or set of laws by Feigl (1953)
and other philosophers. Since induction and causation are directly linked to
prediction, and since prediction is intimately involved in economic research,44
econometric modelling, and policy analysis, it is a topic that deserves considerable
emphasis in econometrics and other sciences, a point of view stressed strongly by
Geisser (1980).
   Prediction usually involves the study of past data, denoted by x and formula-
tion of a probability model for them. For simplicity, assume that the n elements
of f are independently and identically distributed and that the model for f is
p(xI8) = nyE,f(xilB),     where 0 is a vector of parameters. Now consider some
future or as yet unobserved data. These future or as yet unobserved data are
denoted by z”,a q x 1 random vector. If it is further assumed that the elements of
Z are generated by the same probability model that generated 5, then the
probability model for Z is g(z 10) = ny= ,f( zi It?). If the form of f( .) and the value
of 0 were known exactly, then g(z ItI) would be completely determined and could
be employed to make various probability statements about the elements of Z.
Unfortunately, the value of 8 is not usually known and this fact makes it
important to have prediction techniques that are operational when the value of 0
is uncertain. Also, if there are serious errors in the assumptions underlying the

   “See, for example, the predictions   that Friedman   (1957, pp. 214-219)   derived   from his theory   of
the consumption  function.
Ch. 2: Statistical   Theory and Econometrics                                                   159

probability models for f and for z’, then predictions of i will usually be adversely
affected.45


5. I.    Sampling theory prediction techniques46

With past data x and future or as yet unobserved data z”,a point prediction of the
random vector Z! is defined to be z”= p(x), where p(x)’ = [q,(x), q2( x), . . . ,
cp,(x)] is a function of just x and thus can be evaluated given x. When the value
of Z is observed, say za, then e, = i - zO is the observed forecast error vector. In
general perfect prediction in the sense e, = 0 is impossible and thus some other
criteria have to be formulated to define good prediction procedures. The paral-
lelism with the problem of defining good estimation procedures, discussed in
Section 3, is very close except that here the object of interest, Z, is random.
   In the sampling theory approach, prediction procedures are evaluated in terms
of their sampling properties in repeated (actual or hypothetical) samples. That is,
the sampling properties of a predictor, cp(Z), are considered in defining good or
optimal prediction procedures which involves the choice of an explicit functional
form for q(f). Note that use of the term “point predictor” or “predictor” implies
that the random function cp(%) is being considered, while use of the term “point
prediction” or “prediction” implies that the non-random function q(x) is being
considered.
   Some properties of predictors are reviewed below with e’= z”- cp(5) the random
forecast error vector. For brevity of notation, cp(Z) will be denoted by 9.

(1) Minimal MSE predictor.          If I’Z, where I is a given vector of rank one, has
        minimal MSE, then $5is a minimal MSE predictor.
(2)     Unbiasedness. If Elf = 0, then 9 is an unbiased predictor. If Et? * 0, then @
        is a biased predictor.
(3)     Linearity. If 8 = AZ, where A is a given matrix, then (?,is a linear predictor.
(4)     Minimum variance linear unbiased (MVLU) predictor. Consider I’& where I
        is a given q x 1 vector of rank one and the class of linear, unbiased
        predictors, @”= A,& with A,, not unique, such that E(Z - A,f) = 0. If
        var(l’e’) is minimized by taking A, = A,, then 6, = A, f is the MVLU
        predictor.
(5)     Prediction risk. If L(Z) is a convex loss function, then the risk associated
        with $5relative to L(C) is r( 0) = EL(C). For example, if L (2) = S’QZ, where
        Q is a given q x q positive definite symmetric matrix, the risk associated with


  45Statistical tests of these assumptions, e.g. the i.i.d. assumption, can be performed.
  46For further discussion of sampling theory prediction and forecasting techniques for a range of
problems, see Granger and Newbold (1977).
160                                                                              A. Zellner


      C$is EZ’QZ = A’QA + tr Qv( P), where A = Ee”, the bias vector, and V(C) =
      E(5 - A)(: - A)‘, the covariance matrix of Z. In the case of a scalar forecast
      error e”,with L(Z) = 2’

           EC2 =A2 +var(t?),                                                         (5-l)
    where E.5 = A is the prediction bias and var(&) is the variance of the forecast
    error.
(6) Admissible predictor.   Let r,( 0) = EL(B,) be the risk associated with predic-
    tor @, and rO(0) = EL(ga) be the risk associated with any other predictor. If
    there does not exist another predictor such that r,(e) G r,(O) for all 8 in the
    parameter space, then the predictor I#, is admissible relative to the loss
    function L. If another predictor exists such that r,(O) G r,(O) for all B in the
    parameter space, with r,(e) < r,(e) for some values of 8, then c#, is inadmis-
    sible relative to L.
(7) Robust predictor. A robust predictor is a predictor that performs well in the
    presence of model specification errors and/or in the presence of unusual
    data.
   Much of what has been said above with respect to criteria for choice of
estimators is also applicable to choice of predictors. Unfortunately, minimal MSE
predictors do not in general exist. The unbiasedness property alone does not lead
to a unique predictor and insisting on unbiasedness may be costly in terms of
prediction MSE. In terms of (5. l), it is clear that a slightly biased predictor with a
very small prediction error variance can be better in terms of MSE than an
unbiased predictor with a large prediction error variance. Also, as with admissible
estimators, there usually are many admissible predictors relative to a given loss
function. Imposing the condition that a predictor be linear and unbiased in order
to obtain a MVLU predictor can be costly in terms of MSE. For many prediction
problems, non-linear biased Stein-like predictors have lower MSE than do MVLU
predictors; see, .for example, Efron and Morris (1975). Finally, it is desirable that
predictors be robust and what has been said above about robust estimators can be
adapted to apply to predictors’ properties.
   To illustrate a close connection between estimation and prediction, consider the
standard multiple regression model y = Xb + rZ, where j is n x 1, X is a given
non-stochastic n X k matrix of rank k, B is a k X 1 vector of parameters, and ti is
an n x 1 disturbance vector with Eii = 0 and E&Z’= 17~1,. Let a future scalar
observation Z be generated by Z = w’j3+ d, where w’ is a 1 X k given4’ vector of
rank one and d is a future disturbance term, uncorrelated with the elements of II
with Efi = 0 and EC2 = u2. Then a predictor of Z, denoted by 2, is given by


  47For some analysis of this problem when w is random, see Feldstein (197 1).
Ch. 2: Statistical   Theory and Econometrics                                                         161

I = w’b,    where   B is an estimator for j3. Then 5 = z^- z = w’(j - p)- u’ and
Eg = w’E( B - B), SO that if E(b - 8) = 0,that is, B is unbiased, EZ = 0 and the
predictor i = w’fi is unbiased. Furthermore, if b is a linear estimator, say B = my’,
then ,? is a linear predictor. Further relative to L(c) = g*, the risk of P in general is
E~*=E[W'(~-/~)-B]X[(~-~~)'W-~]=W'E(~-/~)(~-~)'W+~*.~~                               If in
this last expression, fi = fi = (X’X) - ‘X’y, the MVLU least squares estimator,
then EC = 0 and EC* assumes a minimal value in the class of unbiased linear
predictors, that is, i = w’A, j, where A,,= (X'X)-'X'+C' and C’ is such that
 C’X =, 0. Finally, if b is an estimator such that w'E(fi               - jl)(b - j3)'w <
 w'E(/3  - /3)(/l - /3)'w for all values of /3, then L = w’b is an inadmissible predictor
relative to L( e’) = f?*.
   As is seen from the above discussion, much traditional analysis has been
carried forward under the assumption that the appropriate loss function is
quadratic, for example L(c) = e”* or L(i?) = t?‘QE While such quadratic loss
functions are appropriate or are a reasonable approximation in a number of
problems, there are problems for which they are not. For example, Varian (1975)
analyzed a problem employing an asymmetric “linex” loss function, L(E) = bexp
(at?)- cg - b, with a = 0.0004; b = 2500, and c = 0.1. He considered this asym-
metric loss function more appropriate for his problem than L(e’) = e’*. Also, as
pointed out in the estimation section, bounded loss functions may be appropriate
for some problems. Use of an appropriate loss function for prediction and other
problems is important and solutions can be sensitive to the form of the loss
function utilized [see, for example, Varian (1975), Zellner and Geisel (1968), and
Zellner (1973)].
   Sampling theory prediction bounds, intervals, and regions are available that
relate to future observations; for discussion of these topics, see, for example,
Christ (1966, pp. 557-564) and Guttman (1970). It must be emphasized that
sampling theory prediction intervals or regions are subsets of the sample space
that have a specified probability of including the random future observations. For
example, rj _t c,(n) is a (1 - a)~ 100 percent central predictive interval for Z, a
future random scalar observation if P[ @- ca( 2) < z’< @+ c,(a)] = 1 - (Y. Note
that Q = q(P), the predictor, c,(a), and 2 are all random in this probability
statement. For a particular sample, x, the computed prediction interval is cp(x)&
c,Jx), for example 50.2* 1.1, where q(x) = 50.2 is the point prediction and
c,(x) = 1.1. Other types of prediction intervals, for example random intervals that
are constructed so that in repeated sampling the proportion of cases in which ,? is
included in the interval has a specified expected value with a given probability or


   48Note that Ew’(j - j3)tY = 0 if the elements of j - /3 and C are uncorrelated as they are under the
above assumptions     if fi is a linear estimator. On the other hand, if b is a non-linear    estimator,
sufficient conditions _for this result to hold are that the elements of r? and 0 are independently
distributed and Ew’(/3 - 8); is finite.
162                                                                          A. Zellner

such that the proportion is not less than a specified value with given probability,
are called tolerance intervals. See Christ (1966) and Guttman (1970) for further
discussion and examples of tolerance intervals. Finally, in many econometric
problems, exact prediction intervals and regions are not available and large
sample approximate intervals and regions are often employed.


5.2.   Bayesian prediction techniques

Central in the Bayesian approach to prediction is the predictive pdf for f, p (z 1D),
where f is a vector of future observations and D denotes the sample, x, and prior
information. To derive the predictive pdf, let f and i be independent49 with pdfs
g(zl& and f(40           wh ere 8 c 0 is a vector of parameters with posterior pdf
h(6Jl D) = clr(O)f(xle),     where c is a normalizing constant and r(e) is the prior
pdf. Then,


                                                                                (5.2)

is the predictive pdf for z”.Note that (5.2) involves an averaging of the conditional
pdfs g(z Id), with h(Ol D), the posterior pdf for 8, serving as the weight function.
Also, p (z ID) incorporates both sample and prior information reflected in h( 8 ID).
For examples of explicit predictive pdfs for regression and other models, see
Aitchison and Dunsmore (1975), Box and Tiao (1973) Guttman (1970), and
Zellner (1971).
   If z is partitioned as z’= (z;,z;), the marginal predictive pdf for z, can be
obtained from (5.2) by analytical or numerical integration. Also, a pdf for z2
given z, and/or the distribution of functions of z can be derived from (5.2).
   If a point prediction of z”is desired, the mean or modal value of (5.2) might be
used. If a convex prediction loss function L(z’, i) is available, where z^= z^(D) is
some point prediction depending on the given sample x and prior information,
Bayesians choose i so as to minimize expected loss, that is, solve the following
problem:


       min/ L(z,i)p(zlD)dz.                                                     (5 -3)
        i

The solution, say z^= z^*(D), is the Bayesian point prediction relative to the loss
function L(&i). For example, if L(& i) = (f - z^)‘Q(f - z^), with Q a given


  491ndependence, assumed here for simplicity, can be relaxed.
Ch. 2: Statistical   Theory and Econometrics                                                         163

positive definite symmetric matrix, the optimal z^is i* = E(z]D), the mean of the
predictive pdf in (5.2). 5o For other loss functions, Bayesian minimum expected
loss point predictions can be obtained [see Aitchison and Dunsmore (1975),
Litterman (1980) and Varian (1975) for examples]. Prediction intervals and
regions can be computed from (5.2) in the same way that posterior intervals and
regions are computed for parameters, as described above. These prediction
intervals and regions are dependent on the given data D and hence are not viewed
as random. For example, in the case of a scalar future observation, 2, given the
predictive pdf for 5, p(z] D), the probability that b < .f < a is just /,6p(z] D)dz =
 1- (Y.If a and b are given, 1 - a can be calculated. If 1 - (Yis given, then a and b
are not uniquely determined; however, by requiring that b - a be a minimum
subject to a given 1 - (Y,unique values of a and b can be obtained.
   To this point, all results in this subsection are for given data x and given prior
information. The sampling properties of Bayesian procedures are of interest,
particularly before % is observed and also in characterizing average properties of
procedures. In this regard, the solution, i* to the problem in (5.3) can be viewed
as a Bayesian predictor, random since it is a function of f. For brevity, write a
predictor as i = z^(a). Then the prediction risk function, r( @), relative to the loss
function L(i, i), is


                                                                                                  (5 *4)


where the integrations are over the sample spaces of 2 and Z. Risk, r(e), can be
computed for alternative predictors, i = ,?(a). The Bayesian predictor is the one,
if it exists, that minimizes average risk, AR = /or(B)r( 8)de, where a( 0) is a
prior for 8. If AR is finite, then the Bayesian predictor is admissible and also is
given by the solution to the problem in’(5.3).
   From what has been presented, it is the case that both sampling theory and
Bayesian techniques are available for predictive inference. As with estimation, the
approaches differ in terms of justifications for procedures and in that the
Bayesian approach employs a prior distribution, whereas it is not employed in
the sampling theory approach. Further, in both approaches predictive inference
has been discussed in terms of given models for the observations. Since there is
often uncertainty about models’ properties, it is important to have testing
procedures that help determine the forms of models for observations. In the next
section general features of testing procedures are presented.



   “The   proof is very similar to that presented   above   in connection   with   Bayesian   parameter
estimation with a quadratic loss function.
164                                                                        A. Zellner


6.     Statistical analysis of hypotheses

Statistical procedures for analyzing and testing hypotheses, that is, hypothesized
probability models for observations, are important in work to obtain satisfactory
econometric models that explain past economic behavior well, predict future
behavior reliably, and are dependable for use in analyzing economic policies. In
this connection, statistical theory has yielded general procedures for analyzing
hypotheses and various justifications for them. In what follows, some basic results
in this area will be reviewed.


6.1.     Types of hypotheses

 Relative to the general probability model, {X, 0, p (x 18)) hypotheses can relate to
 the value of 8, or a subvector of 8, and/or to the form of ~(~10). For example,
9 = 0 or 8 = c, a given vector, are examples of simple hypotheses, that is,
 hypotheses that completely specify the parameter vector 8 appearing in p( x 119).
 On the other hand, some hypotheses about the value of 8 do not completely
 specifyp(xl8).   For example, 0 c w, a subspace of 0, does not imply a particular
value for B and thus is not a simple hypothesis but rather is termed a composite
hypothesis. In terms of a scalar parameter 0 c 0, where 0 is the entire real line,
 19= 0 is a simple hypothesis, whereas 0 -K0 and 0 > 0 are composite hypotheses.
 Further, it is often the case that two or more hypotheses are considered.
For example 8 = 0 and 8 = 1, two simple hypotheses, or 8 = 0 and 6 > 0, a simple
hypothesis and a composite hypothesis, or 0 > 0 and 8 < 0, two com-
posite hypotheses, may be under study. Finally, various forms for p(x 10) may
be hypothesized, for example p[(x - p,)/a,] normal or p[(x - p2)/u2] double-
exponential are two alternative hypotheses regarding the form of p( 0) with the
same parameter space 0: - cc -Cpi -Ccc and 0 -Cui < cc, i = 1,2. In other cases,
p (x 10) and g( x Icp) may be two alternative hypothesized forms for the pdf for the
observations involving parameter vectors 8 and cp and their associated parameter
spaces. Finally, if the probability model is expanded to include a prior pdf for 0,
denoted by p(d), different p( Q’s can be viewed as hypotheses. For example, for a
scalar 8, p, (0) in the form of a normal pdf, with given mean I?, and given variance
u:, 8 - N(&, u:) and f3- N(I?2, u,‘), with I?~ and CJ; given, can be viewed as
hypotheses.
    Whatever the hypothesis or hypotheses, statistical testing theory provides
procedures for deciding whether sample observations are consistent or incon-
 sistent with a hypothesis or set of hypotheses. Just as with estimation and
prediction procedures, it is desirable that testing procedures have reasonable
justifications and work well in practice. It is to these issues that we now turn.
Ch. 2: Stutistical   Theory and Econometrics                                                           165


6.2.     Sampling theory testing procedures

The Neyman-Pearson (NP) sampling theory testing procedures are widely utilized
and described in most statistics and econometrics textbooks.5’ In the NP ap-
proach, two hypotheses are considered, which in terms of a scalar parameter
0 c 0 can be described by 8 c w and 13c 0 - w,where o is a subspace of 0, and
0 - w denotes the region of 0 not including w, that is, the complement of w. For
example, fl = 0 and 8 * 0, with 0 the entire real line, might be two hypotheses
under consideration. Usually 0 c w is called the “null hypothesis” and 8 c 0 - O,
the “alternative hypothesis”, nomenclature that suggests an asymmetric view of
the hypotheses. In NP theory, the sample space X is partitioned into two regions:
(1) the “region of acceptance” or the region in which outcomes are thought to be
consistent with the 8 c w,the null hypothesis, and (2) a “region of rejection” or a
region, complementary to the “acceptance region”, in which outcomes are thought
to be inconsistent with the null hypothesis. This “rejection region” is usually
called “the critical region” of the test. Example 6.1 illustrates these concepts.
Example 6. I

Let Zi, i=1,2 ,..., n, be NID (f3,l) with 0: - cc -C8 c co, and consider the null
hypothesis, Ha: 0 = 0, and the alternative hypothesis, H,: 0 * (3,. Here w c 0 is
8 = 6’,,and 0 - w is 8 f 0,. Suppose that we consider the random sample mean
i = Cr=,.$/n.    A “region of acceptance” might be 1~ - &,I 6 c and a “region of
rejection”, or critical region IX - &,I > c, where c is a given constant. Thus, given
the value of c, the sample space is partitioned into two regions.
   Two major questions raised by Example 6.1 are: Why use X in constructing the
regions and on what grounds can the value of c be selected? In regard to these
questions, NP theory recognizes two types of errors that can be made in testing
8 c w and 8 c 0 - w. An error of type I, or of the first kind, is rejecting5* 8 c w
when it is true, while an error of type II, or of the second kind, is accepting 8 c w
when it is false. The operating characteristics of a NP test are functions that
describe probabilities of type I and type II errors. Let i = i(n) be a test statistic,
for example x in Example 6.1, and let R be the region of rejection, a subset of the
sample space. Then a(0) = P(i c RIO c w) is the probability of a type I error
expressed as a function of 8, which specializes to CY(  0) = P( 1X - 0, I a c 18 = 0,) in
terms of Example 6.1. The probability of a type II error is given by p( (3) = P(t”c
Rl8cO-w)=l-P(~cR18cO-w),                    whereRis theregion of acceptance, the
complement of R. In terms of Example 6.1, P(e)= P(IX- &,I Q cl@ f &,)=

   “For a detailed account see, for example, Lehmann (1959).
   52The common terminology     “reject” and “accept” will be employed   even though   “inconsistent
with” and “consistent with” the data appear to be preferable.
166                                                                                            A. Zeher

 1 - P( 1I - &,I > c 18 * 0). The function 1- P(e), the probability of rejecting 13c w
when 8 c 0 - w is true, is called the power function of the test.
    A test with minimal probabilities of type I and type II errors, that is, minimal
 a( 8) and P(e), would be ideal in the NP framework. Unfortunately, such tests do
 not exist. What NP do to meet this problem is to look for tests with minimal
value for p( f3), the probability of type II error subject to the condition that for all
8 r w, a(0) < ~1,a given value, usually small, say 0.05, the “significance level of
 the test”.53 By minimizing p(e), of course, the power of the test, 1 - /3(e), is
maximized. A test meeting these requirements is called a uniformly most powerful
(UMP) test.
    Unfortunately, except in special cases, uniformly most powerful tests do not
exist. In the case of two simple hypotheses, that is, 0 = (e,, 0,) with w: 8 = 8, and
 0 - w: 8 = t$, and data pdf p(xlO), the famous NP lemma54 indicates that a test
based on the rejection region t(x)=p(x18,)/p(xle2)~             k,, where k, satisfies
p[t(a)2 k,le = e,] = a, with a! given, is a UMP test. This is of great interest since
in this case t(x) is the likelihood ratio and thus the NP lemma provides a
justification for use of the likelihood ratio in appraising two simple hypotheses.
When composite hypotheses are considered, say t9f 0, it is usually the case that
UMP tests do not exist. One important exception to this statement is in terms of
Example 6.1 testing 0 = 8, against 0 > 0. Then with fi(X - 0,) as the test statistic
and using &(x - 8,) > k, as the region of rejection, where k, is determined so
that P(~(x-eo)>k,~e=eo)= a, for given (Y, this test can be shown to be
UMP.55 Similarly, a UMP test of e = t9,,against 8 -C0, exists for this problem.
However, a UMP test of 8 = 8, against 8 f 8, does not exist. That is, using
6 IX - e,,l> k, as a region of rejection with k, such that P(h IZ - &,I > k,) = a,
given (Y,is not a UMP test.
    Given that UMP tests are not usually available for many testing problems, two
further conditions have been utilized to narrow the range of candidate tests. First,
only unbiased tests are considered. A test is an unbiased a-level test if its
operating characteristics satisfy a(e) Q (Yfor all e c w and 1 - p(0) > cwfor all
8 c 0 - w. This requirement seems reasonable since it implies 1 - a > P(e), that
is, that the probability, 1 - (Y,of accepting 8 c w when it is true is greater than or
equal to the probability /3(e), 8 c 0 - w, of accepting it when it is false. Many
tests of a null hypothesis, B = 8,, with 8, given, against composite hypotheses
B * 8 are UMP unbiased tests. In terms of Example 6.1 the test statistic IX -
0,( \/;2Iwith rejection region IX - &,I6 > k, is a UMP unbiased test of 8 = @a

    53Some call OLthe “size of the test”.
    54See Lehmann (1959,p. 65 ff.) for proof of the NP lemma.
    55Note that j2 is normal with mean 8, and variance l/n under the null hypotheses ,9 = 0,. Thus,
fi(jz - eO) is N(0, I) under 0 = 0, and tables of the normal distribution can be utilized to evaluate k,
forgivenqsaya=O.lO.
Ch. 2: Statistical Theory and Econometrics                                            167

against 0 f 0,. See Lehmann (1959, ch. 4-5) for many examples of UMP
unbiased tests.
   It is also interesting to note that IX - @,I& -Ck, can be written as x - k,/&
 < 0, -CX + k,/fi      and that, given B = &,, the probability that x f k,/fi      covers
0, is 1 - (Y.Thus, there is a close mathematical relationship between test statistics
and confidence intervals, discussed above, and in many cases optimal tests
produce optimal intervals (in a shortness sense). However, there is a fundamental
difference in that in testing 8 = f3,, 0, is given a specific value, often B,,= 0, which
is of special interest. On the other hand, with a confidence interval or interval
estimation problem the value of 0, is not specified; that is, e,, is the true unknown
value of B. Thus, if X f k,/[ n , with (Y= 0.05 assumes the value 0.32 + 0.40, this is
a 95 percent confidence interval for 0, that extends from -0.08 to 0.72. That the
interval includes the value 0 does not necessarily imply that f3, = 0. It may be that
8, * 0 and the precision of estimation is low. In terms of testing 0 = 6, = 0, the
result 0.32+ 0.40 implies that the test statistic assumes a value in the region of
acceptance, IX1fi -c k,, and would lead to the conclusion that the data are
consistent with 0 = 0, = 0. In NP theory, however, this is an incomplete reporting
of results. The power of the test must be considered. For example, if 8 = + 0.20
represent important departures from 0 = 0, the probabilities of rejecting 8 = 0
when 8 = + 0.20, that is, 1 - p(0.2) and 1 - p( - 0.2), should be reported. Under
the above conditions, these probabilities are quite low and thus the test is not very
powerful relative to important departures from 8 = 0. More data are needed to
get a more powerful test and more precise estimates.
   The above discussion reveals an important dependence of a test’s power on the
sample size. Generally, for given (Y, the power increases with n. Thus, to
“balance” the probabilities of errors of type I and II as n increases requires some
adjustment of (Y.See DeGroot (1970) for a discussion of this problem.56
   A second way of delimiting candidate tests is to require that tests be invariant,
that is, invariant to a certain group of transformations. See Lehmann (1959, ch.
6-7) for discussion of UMP invariant tests that include the standard t and F tests
employed to test hypotheses about regression coefficients that are UMP invariant
tests under particular groups of linear transformations. They are also UMP
unbiased tests. In a remarkable theorem, Lehmann (1959, p. 229) shows that there
exists a unique UMP unbiased test for a given testing problem and that there also
exists a UMP almost invariants test with respect to some group of transforma-
tions G. Then the latter is also unique and the two sets coincide almost
everywhere.



  56Very few econometrics and statistics texts treat this problem.
  “See Lehmann (1959,p. 225) for a definition of “almost invariant”!
168                                                                                             A. Zellner


Example 6.2
In terms of the normal regression model of Example 4.2, to test H,,: pi = &,, a
given value against H,: pi * 0 with all other regression coefficients and u
unrestricted, the test statistic t = (& - &,)/sj, has a univariate Student-t pdf with
Y d.f. Then 1t 1> k,, where k, is such that Pr{ 1t 1a k, IPi = &} = a, with (Y,the
significance level given, is a rejection region. Such a test is a UMP unbiased and
invariant (with respect to a group of linear transformations) a-level test. In a
similar fashion, from Example 4.4, the statistic fi = (b - &,)‘X’X(b - &))/ks*
that has an F pdf with k and Y d.f. under HO: /3 = &, can be used to test HO
against H,: /3 * &, with a* unrestricted under both hypotheses. The rejection
region is E>, k,, with k, such that P(i > k,) = a, a given value. This test is a
UMP unbiased and invariant a-level test.
   In many testing problems, say those involving hypotheses about the values of
parameters of time series models, or of simultaneous equations models, exact tests
are generally not available. In these circumstances, approximate large sample
tests, for example approximate likelihood ratio (LR), Wald (W), and Lagrange
Multiplier (LM) tests, are employed. For example, let 8’= (ai, 0;) be a parameter
vector appearing in a model with likelihood function p( x16) and let the null
hypothesis be H,,: 8, = 8,, and i3, unrestricted and H,: 8, and 0, both unrestricted.
Then h(x), the approximate LR, is defined to be

                                                                                                    (6.1)
where d2 is the value of f2 that maximizes p(xlO,,, 8,), the restricted likelihood
function (LF), while (e,, 0,) is the value of (B,, t9,) that maximizesp(xle,, e,), the
unrestricted LF. Since the numerator of (6.1) is less than or equal to the
denominator, given that the numerator is the result of a restricted maximization,
0 -CA(x) d 1. The larger X(x), the “more likely” that the restriction 8, = 8,, is
consistent with the data using a relative maximized LF criterion for the meaning
of “ more likely”. In large samples, under regularity conditions and H,,,
 - 210g A( 2) = R? has an approximate x2 pdf with 4 d.f., where q is the number of
restrictions implied by HO, here equal to the number of elements of 8,. Then a
rejection region is R* 2 k,, where k, is such that P(x* > k,l H,,) A (Y, the given
significance level. 58 Many hypotheses can be tested approximately in this ap-
proach given that regularity conditions needed for - 2 log A( 2) to be approxi-
mately distributed as 2: in large samples under HO are satisfied.
   In the Wald large sample approach to the test, for example H,,: 8 = e,, against
H,: 8 * &,, let e be a ML estimator for B that, under HO, is known to be
approximately normally distributed in large samples with asymptotic mean 0, and

   “km is obtained from the tables for xi. Since x2 is only approximately   distributed   in the xi form,
the significance level is approximately a.
Ch. 2: Stutistical   Theory and Econometrics                                                                   169

large sample approximate covariance matrix v = Ii- ‘, where Ii is Fisher’s     infor-
mation matrix evaluated at the ML estimate 8, then under H,, the test statistic,
w = (8 - 0,)‘t - ‘( e^- 0,), has an approximate large sample x’, pdf, where 4 is
the number of restrictions implied by fl,,. 59 Then a rejection region is ti’>, k,,
where k, is determined such that P(W> k,) A a, the given significance level,
where k, is obtained from tables of the x’, pdf.
   In the LM large sample approach to testing restrictions on 8, for example H,:
8, = B,, against H,: 0, * 8,, with 8, unrestricted under both hypotheses, where
8’= (0;, Q, use is made of the fact that if H,, is true, then the restricted and
unrestricted estimates of 8 will be very close to each other in large samples. If the
log LF is regular, then the partial derivatives of this function at the restricted
maximizing values will tend to be small. On the other hand, if q0 is false these
partial derivatives will not in general be small. Let d,!= (8,,, 8,) be the ML
estimate for the restricted log LF, = log p(xlt$,, 6,). Then it can be shown that

       ( aiOgLR/ae)~~~~l(aiOgLR/ae)e^~,

where the partial derivatives are evaluated at 8,,, the restricted ML estimate, and
Iir is the information matrix evaluated at 4, has an approximate x”, pdf in large
samples under H, and regularity conditions, and this fact can be employed to
construct an approximate a-level test of FO. The LM test requires just the
computation of the restricted ML estimate, e,, and is thus occasionally much less
computationally burdensome than the LR and W tests that require the unre-
stricted ML estimate. On the other hand, it seems important in applications to
view and study both the unrestricted and restricted estimates.
   Finally, it is the case that for a given pair of hypotheses, the LR, W, and LM
test statistics have the same large sample x2 pdf so that in large samples there are
no grounds for preferring any one. In small samples, however, their properties are
somewhat different and in fact use of large sample test results based on them can
give conflicting results [see, for example, Berndt and’savin (1975)]. Fortunately,
research is in progress on this problem. Some approximations to the finite sample
distributions of these large sample test statistics have been obtained that appear
useful; see, for example, Box (1949) and Lawley (1956). Also, Edgeworth expan-
sion techniques to approximate distributions of various test statistics are currently
being investigated by several researchers.


6.3.     Bayesian analysis of hypotheses

Bayesian procedures are available for analyzing various types of hypotheses that
yield posterior probabilities and posterior odds ratios associated with alternative

  59Any consistent,     asymptotically   efficient   estimator   can be employed   in place of the ML estimator.
170                                                                          A. Zellner

hypotheses which incorporate both sample and prior information. Further, given
a loss structure, it is possible to choose between or among hypotheses in such a
manner so as to minimize expected loss. These procedures, which are discussed in
Jeffreys (1967), DeGroot (1970), Learner (1978) Bernard0 et al. (1980) and
Zellner (1971), are briefly reviewed below.
   With respect to hypotheses relating to a scalar parameter 8, - cc < 8 < co, of
the form H,: 8 > c and Hz: 0 < c, where c has a given value, e.g. c = 0, assume
that a posterior pdf for 13,p (8 1D), is available, where D denotes the sample and
prior information. Then in what has been called the Laplacian Approach, the
posterior probabilities relating to H, and to Hz are given by Pr(8 > cl D) =
/,“p(QD)dO      and Pr(0 < c 1D) = /T mp( 0 1D) de, respectively. The posterior odds
ratio for H, and H,, denoted by K,*, is then K,, = Pr(8 > clD)/Pr(8 < CID).
Other hypotheses, e.g. It3I < 1 and I@I > 1, can be appraised in a similar fashion.
That is, Pr(l81 <llD)=      J!,p(elD)dO    is the posterior probability that 101~1
and 1 - Pr( 10I < 11D) is the posterior probability that 18I > 1.
Example 6.3

Lety,,i=1,2   ,..., n, be independent observations from a normal distribution with
mean 0 and unit variance. If a diffuse prior for 8, p(e) a const., is employed, the
posterior pdf is p( 8) D) a exp{ - n( 8 - y)*/2}, where p is the sample mean; that
is, z = &(0 - J) has a N(0, 1) posterior pdf. Then for the hypothesis 8 > 0,
Pr(8>OlD)=Pr(z>          -&ylD)=l-@(-fiJ),           where a(.) is the cumulative
normal pdf. Thus, Pr( t9> 0 ID) can be evaluated from tables @( e).
   When a vector of parameters, 8, with 0 c 0 and posterior pdf ~(01 D), is
considered, and the hypotheses are HA: 8 c w and Hs: B c 0 - w, where w is a
subspace of 0, Pr( 8 c w ID) = /, p (8 ID) de is the posterior probability associated
with HA while 1 - Pr( 8 c w )D) is that associated with HB and the posterior odds
ratio is the ratio of these posterior probabilities. The above posterior probabilities
can be evaluated either analytically, or by the use of tabled values of integrals or
by numerical integration. For an example of this type of analysis applied to
hypotheses about properties of a second order autoregression, see Zellner (1971,
p. 194 ff.).
   For a very wide range of different types of hypotheses, the following Jeffreys
Approach, based on Bayes Theorem, can be employed in analyzing alternative
hypotheses or models for observations. Let p( y, H) be the joint distribution for
the data y and an indicator variable H. Then p( y, H) = p(H)p( ylH) =
PC y)~(Hly)   mdp(Hly)     = P(H)P( YIHVP(Y).         If H can assume v&es H, ad
H2, it follows that the posterior odds ratio, K,*, is

      K = P(H,IY) =-.P(H,)        P(YW,)
                                                                                 (6.2)
       ‘*     ~0321~)   p(H2)     P(YIH,)
where p(Hi) is the prior probability assigned to Hi, i = 1,2, p(H,)/p(H,)       is the
Ch. 2: Statistical Theory and Econometrics                                                    171


prior odds ratio for H, versus Hz, and p( yl Hi) is the marginal pdf for y under
hypothesis Hi, i = 1,2. The ratio p( y 1H,)/p( y/I-&) Is called the Bayes Factor
(BF). In the case that both H, and H, are simple hypotheses, the BF
p( y[ H,)/p( y[H,) is just the Likelihood Ratio (LR).

Example            6.4

Let y, = 8 + E;, i = 1,2,. . . , n, with the ei’s assumed independently drawn from a
normal distribution with zero mean and unit variance. Consider two simple
hypotheses, H, : B = 0 and Hz: 8 = 1, with prior probabilities p( H,) = l/2 and
p( Hz) = l/2. Then from (6.2),

      K,,=           o~f)P(Yl~=O)/P(Yle=1)

               = exp{ - y’y/WW             - ( Y - I>‘( Y - ~)/2),   = exp(2n (4 - 7 )},

wherey’=(y,,_y,  ,..., _yn),t’=(l,l ,..., l), and jj is the sample mean. In this case
K,, = LR and its value is determined by the value of 2n(f - 7).
   In cases in which non-simple hypotheses are considered, that is, hypotheses that
do not involve assigning values to all parameters of a pdf for the data y,
p( y If$, Hi), given that a prior pdf for ei is available, p(Q Hi), it follows that
p( ylH,)=     /p( ylBi, Hi)p(eilHi)d8, and in such cases (6.2) becomes

      K        =
                    -.P(H,)   Jp(yie,,H,)p(e,iH,)de,
                                                                                           (6.3)
          ‘*        P(H2)     lP(Yl@*v H*)P(~*lH,)d~*~

Thus, in this case, K,, is equal to the prior odds ratio, p( H,)/p( H2) times a BF
that is a ratio of averaged likelihood functions. For discussion and applications of
(6.3) to a variety of problems, see, for example, Jeffreys (1967), DeGroot (1970),
Learner (1978), and Zellner (1971).
   In (6.2) and (6.3) it is seen that a prior odds ratio gets transformed into a
posterior odds ratio. If a loss structure is available, it is possible to choose
between or among hypotheses so as to minimize expected loss. To illustrate,
consider two mutually exclusive and exhaustive hypotheses, H, and H2, with
posterior odds ratio K,, = p, /( 1 - p, ), where p, is the posterior probability for
H, and 1- p, is the posterior probability for H2. Suppose that the following
two-action, two-state loss structure is relevant:

                                             State of world

                                             Hi         H2
                    A, : Choose H,
     Acts
    -               A,: Choose H2
172                                                                            A. Zellner

The two “states of the world” are: H, is in accord with the data or H2 is in accord
with the data; while the two possible actions are: choose H, and choose Hz.
L,, > 0 and L,, > 0 are losses associated with incorrect actions. Then using the
posterior probabilities, p, and 1 - p1 , posterior expected losses associated with A,
and A, are:




       av,)                Lm
       E(LIA,)   =+,L,




If this ratio of expected losses is larger than one, choosing A, minimizes expected
loss, while if it is less than one, choosing A, leads to minimal expected loss. Note
from the second line of (6.4) that both K,, and L,,/L,,      affect the decision. In the
very special case L,,/L,,     = 1, the symmetric loss structure, if K,, > 1 choose H,,
while if K,, < 1 choose Hz. The analysis can be generalized to apply to more than
two hypotheses. Also, there are intriguing relations between the results provided
by the Bayesian approach and sampling theory approaches to testing hypotheses
that are discussed in the references cited above.
   Finally, given the posterior probabilities associated with the hypotheses, it is
possible to use them not only in testing but also in estimation and prediction.
That is, if two hypotheses are H,: 8 = c and Hz: 8 * c, where c has a given value
and p, and 1 - p, are the posterior probabilities associated with H, and Hz,
respectively, then relative to quadratic loss, an optimal estimate is




where 8 is the posterior mean of 0 under H2 and K,, = p,/(l - p,), the posterior
odds ratio [see Zellner and Vandaele (1975) for details]. Also, in Geisel (1975)
posterior probabilities associated with two different models for the same set of
observations. are employed to average their predictions and thus to obtain an
optimal prediction relative to quadratic loss.


7.    Summary and concluding remarks

Research in statistical theory has yielded very useful procedures for learning from
data, one of the principal objectives of econometrics and science. In addition, this
research has produced a large number of probability models for observations that
Ch. 2: Statistical   Theory and Econometrics                                       173

 are widely utilized in econometrics and other sciences. Some of them were
 reviewed above. Also, techniques for estimation, prediction, and testing were
 reviewed that enable investigators to solve inference problems in a scientific
 manner. The importance of utilizing sound, scientific methods in analyzing data
 and drawing conclusions from them is obvious since such conclusions often have
 crucial implications for economic policy-making and the progress of economic
 science. On the other hand, it is a fact that statistical and econometric analysis
 frequently is a mixture of science and art. In particular, the formulation of
 appropriate theories and models is largely an art. A challenge for statistical theory
is to provide fruitful, formal procedures that are helpful in solving model
 formulation problems.
    While many topics were discussed in this chapter, it is necessary to point to
 some that were not. These include non-parametric statistics, survey methodology,
 design of experiments, time series analysis, random parameter models, statistical
control theory, sequential and simultaneous testing procedures, empirical Bayes
procedures, and fiducial and structural theories of inference. Some of these topics
 are treated in other parts of this Handbook. Also, readers may refer to Kruskal
 and Tanur (1978) for good discussions of these topics that provide references to
 the statistical literature. The annual issues of the ASA/IMS Current Index to
Statistics are a very useful guide to the current statistical literature.
    In the course of this chapter a number of controversial issues were mentioned
that deserve further thought and study. First, there is the issue of which concept
of probability is most fruitful in econometric work. This is a critical issue since
probability statements play a central role in econometric analyses.
    Second, there are major controversies concerning the most appropriate ap-
proach to statistical inference to employ in econometrics. The two major ap-
proaches to statistical inference discussed in this chapter are the sampling theory
approach and the Bayesian approach. Examples illustrating both approaches
were presented. For further discussion, of the issues involved see, for example,
Barnett (1973), Bernard0 et al. (1980), Cox and Hinkley (1974), Lindley (1971),
Rothenberg (1975), Zellner (1975), and the references in these works.
    Third, with respect to both sampling theory and Bayesian approaches, while
there are many problems for which both approaches yield similar solutions, there
are some problems for which solutions differ markedly. Further attention to such
problems, some of which are discussed in Bernard0 et al. (1980), Cox and Hinkley
(1974), Jaynes (1980), Lindley (1971), and the references cited in these works,
would be worthwhile.
    Fourth, there is controversy regarding the implications of the likelihood princi-
ple for econometric and statistical practice. Briefly, the likelihood principle states
that if x and y are two data sets such that ~(~10) = cf( y IO), with 8 c 0 and c not
depending on 8, then inferences and decisions based on x and on y should be
identical. The Bayesian approach satisfies this condition since for a given prior
pdf, a(e), the posterior pdfs for 0 based on ~(~18) and on cf( ~10) are identical
174                                                                                     A. Zellner


given p( XI 8) = cf( y IO). On the other hand, sampling theory properties and
procedures that involve integrations over the sample space, as in the case of
unbiasedness, MVU estimation, confidence intervals, and tests of significance
violate the likelihood principle. Discussions of this range of issues are provided in
Cox and Hinkley (1974, ch. 2) and Lindley (1971, p. 10 ff.) with references to
important work by Bimbaum, Barnard, Durbin, Savage, and others.
   Fifth, the importance of Bayesian logical consistency and coherence is em-
phasized by most Bayesians but is disputed by some who argue that these
concepts fail to capture all aspects of the art of data analysis. Essentially, what is
being criticized here is the Bayesian learning model and/or the precept, “act so as
to maximize expected utility (or equivalently minimize expected loss)“. If im-
provements can be made to Bayesian and other learning and decision procedures,
they would constitute major research contributions.
   Sixth, some object to the introduction of prior distributions in statistical
analyses and point to the difficulty in formulating prior distributions in multi-
parameter problems. Bayesians point to the fact that non-Bayesians utilize prior
information informally in assessing the “reasonableness” of estimation results,
choosing significance levels, etc. and assert that formal, careful use of prior
information provides more satisfactory results in estimation, prediction, and
testing.
   Seventh, frequentists assert that statistical procedures are to be assessed in
terms of their behavior in hypothetical repetitions under the same conditions.
Others dispute this assertion by stating that statistical procedures must be
justified in terms of the actually observed data and not in terms of hypothetical,
fictitious repetitions. This range of issues is very relevant for analyses of non-
experimental data, for example macro-economic data.
   The above controversial points are just some of the issues that arise in judging
alternative approaches to inference in econometrics and statistics. Furthermore,
Good has suggested in a 1980 address at the University of Chicago and in Good
and Crook (1974) some elements of a Bayes/non-Bayes synthesis that he expects
to see emerge in the future. In a somewhat different suggested synthesis, Box
(1980) proposes Bayesian estimation procedures for parameters of given models
and a form of sampling theory testing procedures for assessing the adequacy of
models. While these proposals for syntheses of different approaches to statistical
inference are still being debated, they do point toward possible major innovations
in statistical theory and practice that will probably be of great value in economet-
ric analyses.


References

Aitchison,   J. and I. R. Dunsmore    (1975) Statistical Prediction Analysis. Cambridge: Cambridge
   University Press.
Anderson, T. W. (1971) The Statistical Analysis of Time Series. New York: John Wiley & Sons, Inc.
Ch. 2: Statistical   Theory and Econometrics                                                                175

Anscombe, F. J. (1961) “Bayesian Statistics”, American Statistician, 15, 21-24.
Arnold, S. F. (1981) The Theory of Linear Models and Multioariate Analysis. New York: John Wiley &
 . Sons, Inc.
Bamett, V. D. (1973) Comparative Statistical Inference. New York: John Wiley & Sons, Inc.
Bamett, V. and T. Lewis (1978) Outliers in Statistical Data. New York: John Wiley & Sons, Inc.
Bayes, T. (1763) “An Essay Toward Solving a Problem in the Doctrine of Chances”, Philosophical
   Transactions of the Royal Society (London),     53, 370-418; reprinted in Biometrika, 45 (1958),
  293-315.
Belsley, D. A., E. Kuh and R. E. Welsch (1980) Regression Diagnostics. New York: John Wiley &
  Sons, Inc.
Bemardo, J. M., M. H. DeGroot, D. V. Lindley and A.F.M. Smith (eds.) (1980) Bayesian Statistics.
  Valencia, Spain: University Press.
Bemdt, E. and N. E. Savin (1977) “Conflict Among Criteria for Testing Hypotheses in the
  Multivariate Linear Regression Model”, Econometrica, 45, 1263- 1272.
Blackwell, D. (1947) “Conditional Expectation and Unbiased Sequential Estimation,” Annals of
   Mathematical      Statistics,      18, 105-I 10.
Blackwell, D. and M. A. G&chick (1954) Theory of Games and Statistical Decisions. New York: John
  Wiley & Sons, Inc.
Box, G. E. P. (I 949) “A General Distribution Theory for a Class of Likelihood Criteria”, Biometrika,
  36, 3 17-346.
Box, G. E. P. (1976) “Science and Statistics”, Journal of the American         Statistical   Association,   71,
  791-799.
Box, G. E. P. (1980)“Sampling and Bayes’ Inference in Scientific Modelling and Robustness”, Journal
  of the Royal Statistical Association A, 143, 383-404.
Box, G. E. P. and D. R. Cox ( 1964) “An Analysis of Transformations”, Journal of the Royal Statistical
  Association     B, 26, 21 l-243.
Box, G. E. P. and G. C. Tiao (1973) Bayesian Inference in Statistical Analysis. Reading, Mass.:
  Addison-Wesley Publishing Co.
Brown, L. (1966) “On the Admissibility of Estimators of One or More Location Parameters”, Annals
  of Mathematical       Statistics,     37, 1087-I 136.
Christ, C. (1966) Econometric Models and Methods. New York: John Wiley & Sons, Inc.
Copson, E. T. (I 965) Asymptotic Expansions. Cambridge: Cambridge University Press.
Cox, D. R. and D. V. Hinkley (1974) Theoretical Statistics. London: Chapman and Hall.
Cox, D. R. and P. A. W. Lewis (1966) The Statistical Analysis of Series of Events. London: Methuen.
Cramer, H. (1946) Mathematical Methods of Statistics. Princeton: Princeton University Press.
DeGroot, M. H. (1970) Optimal Statistical Decisions. New York: McGraw-Hill Book Co.
DeRobertis, L. (1978) “The Use of Partial Prior Knowledge in Bayesian Inference”, unpublished
  doctoral dissertation, Department of Statistics, Yale University.
Efron, B. and C. Morris (1975) “Data Analysis Using Stein’s Estimator and Its Generalizations”,
  Journal of the American          Statistical Association,   70, 3 11-3 19.
Feigl, H. (1953) “Notes on Causality”, in: H. Feigl and M. Brodbeck (eds.), Readings in the Philosophy
   of Science. New York: Appleton-Century-Crofts,     Inc., pp. 408-418.
Feldstein, M. S. (1971) “The Error of Forecast in Econometric Models when the Forecast-Period
   Exogenous Variables are Stochastic”, Econometrica, 39, 55-60.
Ferguson, T. S. (1967) Mathematical Statistics: A Decision Theory Approach. New York: Academic
   Press, Inc.
Fisher, R. A. (1959) Statistical Methods and Scientific Inference (2nd edn.). New York: Hafner
   Publishing Co.
Fomby, T. B. and D. K. Guilkey (1978) “On Choosing the Optimal Level of Significance for the
   Durbin-Watson Test and the Bayesian Alternative”, Journal of Econometrics, 8, 203-214.
Friedman, M. (1957) A Theory of the Consumption Function. Princeton: Princeton University Press.
Geisel, M. S. (1975) “Bayesian Comparisons of Simple Macroeconomic Models”, in: S. E. Fienberg
   and A. Zellner (eds.). Studies in Bavesian Econometrics and Statistics in Honor of Leonard J. Savage.
  Amsterdam: North%Iolland Publishing Co., pp. 227-256.
Geisser, S. (1980)“A Predictivistic Primer”, in: A. Zellner (ed.), Bayesian Analysis in Econometrics and
  Statistics: Essays in Honor of Harold Jeffrreys. Amsterdam: North-Holland Publishing CO., pp.
  363-381.
176                                                                                                     A. Zellner

Goldfeld, S. M. and R. E. Quandt (1972) Nonlinear Methods in Econometrics. Amsterdam:                   North-Hol-
   land Publishing Co.
Good, I. J. and J. F. Crook (1974) “The Bayes/Non-Bayes                    Compromise      and the Multinomial
   Distribution”,   Journal of the American Statistical Association, 69, 71 I-720.
Granger, C. W. J. and P. Newbold (1977) Forecasting Economic Time Series. New York: Academic
   Press, Inc.
Guttman, I. (1970)Statistical Tolerance Regions: Classical and Bayesian. London: Charles Griffen &
   Co., Ltd.
Hartigan, J. (1964) “Invariant     Prior Distributions,”    Annals of Mathematical Statistics, 35, 836-845.
Heyde, C. C. and I. M. Johnstone            (1979) “On Asymptotic         Posterior   Normality     for Stochastic
   Processes”, Journal of the Royal Statistical Association B, 41, 184- 189.
Hill, B. M. (1975) “On Coherence,          Inadmissibility    and Inference about Many Parameters             in the
   Theory of Least Squares”, in: S. E. Fienberg and A. Zellner (eds.), Studies in Bayesian Econometrics
   and Statistics. Amsterdam:     North-Holland     Publishing Co., pp. 555-584.
Huber, P. J. (1964) “Robust Estimation of a Location Parameter,”             Annals of Mathematical Statistics,
   35, 73-101.
Huber, P. J. (1972) “Robust Statistics: A Review”, Annals of Mathematical Statistics, 43, 1041-1067.
James, W. and C. Stein (1961) “Estimation             with Quadratic     Loss”, in: Proceedings of the Fourth
   Berkeley Symposium on Mathematical Statistics and Probability Theory, vol. I. Berkeley: University
   of California Press, pp. 361-397.
Jaynes, E. T. (1968) “Prior Probabilities”,        IEEE Transactions on Systems Science and Cybernetics,
   SSC-4, 227-241.
Jaynes, E. T. (1974) “Probability     Theory”, manuscript. St. Louis: Department         of Physics, Washington
   University.
Jaynes, E. T. (1980) “ Marginalization      and Prior Probabilities”,   in: A. ZeIIner (ed.), Bayesian Analysis
   in Econometrics and Statistics: Essays in Honor of Harold Jeffreys. Amsterdam:                  North-Holland
   Publishing Co., pp. 43-78.
Jeffreys, H. (1967) Theory of Probability (3rd rev. edn.; 1st ed. 1939). London: Oxford University
   Press.
Jeffreys, H. (1973) Scientific Inference (3rd edn.). Cambridge:       Cambridge University Press.
Johnson, N. L. and S. Kotz (1969) Discrete Distributions. Boston: Houghton                Mifflin Publishing Co.
Johnson, N. L. and S. Kotz (1970) Continuous Unioariate Distributions, ~01s. 1 and 2. New York: John
   Wiley & Sons, Inc.
Judge, G. G. and M. E. Bock (1978) The Statistical Implications of Pre-Test and Stein-Rule Estimators
   in Econometrics. Amsterdam:      North-Holland      Publishing Co.
Kadane, J. B., J. M. Dickey, R. L. Winkler, W. S. Smith and S. C. Peters (1980) “Interactive
   Elicitation of Opinion for a Normal Linear Model”, Journal of the American Statistical Association,
   75, 845-854.
Kendall, M. G. and A. Stuart (1958) The Aduanced Theory of Statistics, vol. 1. London: C. Griffen &
   Co., Ltd.
Kendall, M. G. and’ A. Stuart (1961) The Adwanced Theory of Statistics, vol. 2. London: C. Griffen &
   Co., Ltd.
Kenney, J. F. and E. S. Keeping (1951) Mathematics of Statistics (Part Two). New York: D. Van
   Nostrand Company, Inc.
Keynes, J. M. (1921) Treatise on Probability. London: Macmillan and Co., Ltd.
Koopman,       B. 0. (1936) “On Distributions         Admitting   a Sufficient Statistic”,    Transactions of the
   American Mathematical Society, 39, 399-409.
Kruskal, W. J. and J. M. Tanur (eds.) (1978), International Encyclopedia of Statistics, ~01s. 1 and 2.
   New York: The Free Press (Division of Macmillan Publishing Co., Inc.).
Lawley, D. N. (I 956) “A General Method for Approximating              to the Distribution    of Likelihood Ratio
   Criteria”, Biometrika, 43, 295-303.
Learner, E. E. (1978) Specification Searches. New York: John Wiley & Sons, Inc.
Lehmann, E. L. (1959) Testing Statistical Hypotheses. New York: John Wiley & Sons, Inc.
Lindley, D. V. (1962) “Discussion          on Professor Stein’s Paper”, Journal of the Royal Statistical
   Association B, 24, 285-287.
Lindley, D. V. (1965) Introduction to Probability and Statistics from a Bayesian Viewpoint. Part 2:
   Inference. Cambridge:    Cambridge University Press.
Ch. 2: Statistical   Theory and Econometrics                                                                          117

Lindley, D. V. (1971) Bayesian Statistics, A Review. Philadelphia:                Society for Industrial and Applied
   Mathematics.
Litterman, R. (1980)“A Bayesian Procedure for Forecasting with Vector Autoregressions”,                      manuscript.
   Department       of Economics, MIT; to appear in Journal of Econometrics.
Lo&e, M. (1963) Probability Theory (3rd edn.). Princeton: D. Van Nostrand Co., Inc.
Lute, R. D. and H. Raiffa (1957) Games and Decisions. New York: John Wiley & Sons, Inc.
Mehta, J. S. and P. A. V. B. Swamy (1976) “Further Evidence on the Relative Efficiencies of Zellner’s
   Seemingly Unrelated Regressions Estimators”,               Journal of the American Statistical Association, 7 1,
   634-639.
Neyman, J. and E. L. Scott (1948) “Consistent             Estimates Based on Partially Consistent Observations”,
   Econometrica, 16, l-32.
Pfanzagl,     .I. and W. Wefelmeyer         (1978) “A Third Order Optimum                Property    of the Maximum
   Likelihood Estimator”, Journal of Multivariate Analysis, 8, l-29.
Phillips, P. C. B. (1977a) “A General Theorem in the Theory of Asymptotic                                Expansions     for
   Approximations        to the Finite Sample Distribution         of Econometric     Estimators”,    Econometrica, 45,
    1517-1534.
Phillips, P. C. B. (I 977b) “An Approximation            to the Finite Sample Distribution       of Zellner’s Seemingly
   Unrelated Regression Estimator”, Journal of Econometrics, 6, 147- 164.
Pitman, E. J. G. (1936), “Sufficient         Statistics and Intrinsic Accuracy”,        Proceedings of the Cambridge
   Philosophical Society, 32, 567-579.
Pratt, J. W. (1961) “Length of Confidence Intervals”, Journal of the American Statistical Association,
   56, 549-567.
Pratt, J. W. (1965) “Bayesian Interpretation           of Standard Inference Statements”, Journal of the Royal
   Statistical Association B, 27, 169-203.
Pratt, J. W., H. Raiffa and R. Schlaifer (1964) “The Foundations                 of Decision Under Uncertainty:        An
   Elementary Exposition”, Journal of the American Statistical Association, 59, 353-375.
Raiffa, H. and R. Schlaifer (I 96 I) Applied Statistical Decision Theory. Boston: Graduate                     School of
   Business Administration,       Harvard University.
Ramsey, F. P. (1931) The Foundations of Mathematics and Other Essays. London:                              Kegan, Paul,
   Trench, Truber & Co., Ltd.
Rao, C. R. (1945) “Information           and Accuracy Attainable          in Estimation of Statistical Parameters”,
   Bulletin of the Calcutta Mathematical Society, 37, 8 1-9 1.
Rao, C. R. (1973) Linear Statistical Inference and Its Applications. New York: John Wiley & Sons, Inc.
Rao, P. and Z. Griliches (1969) “Small-Sample                Properties of Two-Stage Regression Methods in the
   Context of Auto-correlated        Errors”, Journal of the American Statistical Association, 64, 253-272.
Renyi, A. (1970)Foundations of Probability. San Francisco: Holden-Day,                    Inc.
Revankar, N. S. (1974) “Some Finite Sample Results in the Context of Two Seemingly Unrelated
   Regression Equations”, Journal of the American Statistical Association, 69, 187- 190.
Rothenberg,       T. J. (1975) “The Bayesian Approach              and Alternatives”,     in: S. E. Fienberg and A.
   Zellner (eds.), Studies in Bayesian Econometrics and Statistics. Amsterdam:                 North-Holland     Publish-
   ing Co., pp. 55-67.
Savage, L. J. (1954) The Foundations of Statistics. New York: John Wiley & Sons, Inc.
Savage, L. J. (1961) “The Subjective Basis of Statistical Practice”, manuscript.               University of Michigan,
   Ann Arbor.
Savage, L. J., et al. (1962) The Foundations of Statistical Inference. London: Meuthen.
Savage, L. J., N. Edwards and H. Lindman (1963) “Bayesian Statistical Inference for Psychological
   Research”, Psychological Review, 70, 193-242.                      _
Sclove, S. L. (1968) “Improved           Estimators     for Coefficients     in Linear Regression”,       Journal of the
   American Statistical Association, 63, 596-606.
Silvey, S. D. (1970) Statistical Inference. Baltimore, Md.: Penguin Books.
Srivastava,      V. K. and T. D. Dwivedi (1979) “Estimation                    of Seemingly     Unrelated     Regression
   Equations: A Brief Survey”, Journal of Econometrics, 10, 15-32.                         - _
Stein, C. (1956) “Inadmissibility         of the Usual Estimator         for the Mean of a Multivariate          Normal
   Distribution”,     in: Proceedings of the Third Berkeley Symposium on Mathematical Statistics and
   Probability, vol. I. Berkeley: University of California Press, pp. 197-206.
Stein, C. (1960) “Multiple Regression”,           in: I. Olkin (ed.), Contributions to Probability and Statistics:
   Essays in Honour of Harold Hotelling. Stanford: Stanford University Press.
178                                                                                                           A. Zellner


Takeuchi, K. (1978) “Asymptotic           Higher Order Efficiency of ML Estimators of Parameters in Linear
   Simultaneous      Equations”, paper presented at the Kyoto Econometrics             Seminar Meeting, University
  of Kyoto, 27-30 June.
Taylor, W. E. (1978) “The Heteroscedastic          Linear Model: Exact Finite Sample Results”, Econometrica,
  46, 663-675.
Thomber, E. H. (1967) “Finite Sample Monte Carlo Studies: An Autoregressive                     Illustration”,    Journal
   of the American Statistical Association, 62, 80 l-8 18.
Tukey, J. W. (1957) “On the Comparative               Anatomy of Transformations”,          Annals of Mathematical
   Statistics, 28, 602-632.
Tukey, J. W. (1977) Exploratory Data Analysis. Reading, Mass.: Addison-Wesley                     Publishing Co.
Uspensky, J. V. (1937) Introduction to Mathematical Probability. New York: McGraw-Hill                         Book Co.,
   Inc.
Varian, H. R. (1975) “A Bayesian Approach to Real Estate Assessment”,                    in: S. E. Fienberg and A.
  Zellner (eds.), Studies in Bayesian Econometrics and Statistics in Honor of Leonard J. Savage.
   Amsterdam:       North-Holland     Publishing Co., pp. 195-208.
Wald, A. (1949) “Note on the Consistency of Maximum Likelihood Estimate”, Annals of Mathemati-
   cal Statistics, 20, 595-601.
Widder, D. V. (1961) Advanced Calculus (2nd edn.). New York: Prentice-Hall,                   Inc.
Winkler, R. L. (1980) “Prior Information.          Predictive Distributions    and Bavesian Model-Buildinu”.            in:
   A. Zellner (ed.), Bayesian Analysis in Econometrics and Statistics: Essaysin Honor of Harold Jeyfreys.
  Amsterdam:        North-Holland     Publishing Co., pp. 95-109.
Zaman, A. (1981) “Estimators           Without Moments: The Case of the Reciprocal of a Normal Mean”,
  Journal of Econometrics, 15, 289-298.
Zellner, A. (1971) An Introduction to Bavesian Inference in Econometrics. New York: John Wilev &
   Sons, Inc.’
Zellner, A. (1972) “On Assessing Informative                 Prior Distributions    for Regression         Coefficients”,
   manuscript.     H. G. B. Alexander Research Foundation,           Graduate School of Business, University of
   Chicago.
Zellner, A. (1973) “The Quality of Quantitative            Economic Policy-making       When Targets and Costs of
   Change are Misspecified”, in: W. Sellekaerts (ed.), Selected Readings in Econometrics and Economic
   Theory: Essays in Honor of Jan Tinbergen, Part II. London:                     Macmillan      Publishing      Co., pp.
    147-164.
Zellner, A. (1975) “Time Series Analysis and Econometric                  Model Construction”,         in: R. P. Gupta
   (ed.), Applied Statistics. Amsterdam:        North-Holland     Publishing Co., pp. 373-398.
Zellner, A. (1976) “Bayesian and Non-Bayesian              Analysis of the Regression Model with Multivariate
   Student-t Error Terms”, Journal of the American Statistical Association. 71. 400-405.
Zellner, A. (1978) “Estimation            of Functions     of Population     Means and ‘Regression           Coefficients
   Including     Structural   Coefficients:   A Minimum Expected Loss (MELO) Approach”,                        Journal of
   Econometrics, 8, 127- 158.
Zellner, A. (1979) “Statistical       Analysis of Econometric       Models”, Journal of the American Statistical
  Association, 74, 628-65 1.
Zellner, A. (1980) “On Bayesian Regression Analysis with g-Prior Distributions”,                   paper presented at
   the Econometric       Society Meeting, Denver, Colorado.
Zellner, A. and M. S. Geisel (1968) “Sensitivity of Control to Uncertainty               and Form of the Criterion
   Function”,     in: D. G. Watts (ed.), The Future of Statistics. New York: Academic Press, Inc., pp.
   269-289.
Zellner, A. and S. B. Park (1979) “Minimum               Expected Loss (MELO) Estimators              for Functions of
   Parameters and Structural Coefficients of Econometric Models”, Journal of the American Statistical
  Association, 74, 185-193.
Zellner, A. and N. S. Revankar (1969) “Generalized                 Production    Functions”,     Review of Economic
   Studies, 36, 241-250.
Zellner, A. and W. Vandaele (1975) “Bayes-Stein               Estimators for /c-Means, Regression and Simulta-
  neous Equation Models’“, in: S. E. Fienberg and A. Zellner (eds.), Studies in Bayesian Econometrics
  and Statistics. Amsterdam:         North-Holland     Publishing Co., pp. 627-653.



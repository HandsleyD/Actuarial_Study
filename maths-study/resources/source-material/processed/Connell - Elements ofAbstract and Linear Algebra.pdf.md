---
normalized_id: shared-pdf-reference-connell-elements-ofabstract-and-linear-algebra
exam_code: SHARED
material_scope: connell - elements ofabstract and linear algebra.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Connell - Elements ofAbstract and Linear Algebra.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-connell-elements-ofabstract-and-linear-algebra

        Elements of
Abstract and Linear Algebra

        E. H. Connell
ii




E.H. Connell
Department of Mathematics
University of Miami
P.O. Box 249085
Coral Gables, Florida 33124 USA
ec@math.miami.edu




Mathematical Subject Classifications (1991): 12-01, 13-01, 15-01, 16-01, 20-01




 c 1999   E.H. Connell

December 20, 2002    [http://www.math.miami.edu/∼ec/book/]
                                                                                   iii

Introduction
    In 1965 I first taught an undergraduate course in abstract algebra. It was fun to
teach because the material was interesting and the class was outstanding. Five of
those students later earned a Ph.D. in mathematics. Since then I have taught the
course about a dozen times from various texts. Over the years I developed a set of
lecture notes and in 1985 I had them typed so they could be used as a text. They
now appear (in modified form) as the first five chapters of this book. Here were some
of my motives at the time.

 1) To have something as short and inexpensive as possible. In my experience,
    students like short books.

 2) To avoid all innovation. To organize the material in the most simple-minded
    straightforward manner.

 3) To order the material linearly. To the extent possible, each section should use
    the previous sections and be used in the following sections.

 4) To omit as many topics as possible. This is a foundational course, not a topics
    course. If a topic is not used later, it should not be included. There are three
    good reasons for this. First, linear algebra has top priority. It is better to go
    forward and do more linear algebra than to stop and do more group and ring
    theory. Second, it is more important that students learn to organize and write
    proofs themselves than to cover more subject matter. Algebra is a perfect place
    to get started because there are many “easy” theorems to prove. There are
    many routine theorems stated here without proofs, and they may be considered
    as exercises for the students. Third, the material should be so fundamental
    that it be appropriate for students in the physical sciences and in computer
    science. Zillions of students take calculus and cookbook linear algebra, but few
    take abstract algebra courses. Something is wrong here, and one thing wrong
    is that the courses try to do too much group and ring theory and not enough
    matrix theory and linear algebra.

 5) To offer an alternative for computer science majors to the standard discrete
    mathematics courses. Most of the material in the first four chapters of this text
    is covered in various discrete mathematics courses. Computer science majors
    might benefit by seeing this material organized from a purely mathematical
    viewpoint.
iv

   Over the years I used the five chapters that were typed as a base for my algebra
courses, supplementing them as I saw fit. In 1996 I wrote a sixth chapter, giving
enough material for a full first year graduate course. This chapter was written in the
same “style” as the previous chapters, i.e., everything was right down to the nub. It
hung together pretty well except for the last two sections on determinants and dual
spaces. These were independent topics stuck on at the end. In the academic year
1997-98 I revised all six chapters and had them typed in LaTeX. This is the personal
background of how this book came about.

    It is difficult to do anything in life without help from friends, and many of my
friends have contributed to this text. My sincere gratitude goes especially to Marilyn
Gonzalez, Lourdes Robles, Marta Alpar, John Zweibel, Dmitry Gokhman, Brian
Coomes, Huseyin Kocak, and Shulim Kaliman. To these and all who contributed,
this book is fondly dedicated.

     This book is a survey of abstract algebra with emphasis on linear algebra. It is
intended for students in mathematics, computer science, and the physical sciences.
The first three or four chapters can stand alone as a one semester course in abstract
algebra. However they are structured to provide the background for the chapter on
linear algebra. Chapter 2 is the most difficult part of the book because groups are
written in additive and multiplicative notation, and the concept of coset is confusing
at first. After Chapter 2 the book gets easier as you go along. Indeed, after the
first four chapters, the linear algebra follows easily. Finishing the chapter on linear
algebra gives a basic one year undergraduate course in abstract algebra. Chapter 6
continues the material to complete a first year graduate course. Classes with little
background can do the first three chapters in the first semester, and chapters 4 and 5
in the second semester. More advanced classes can do four chapters the first semester
and chapters 5 and 6 the second semester. As bare as the first four chapters are, you
still have to truck right along to finish them in one semester.

    The presentation is compact and tightly organized, but still somewhat informal.
The proofs of many of the elementary theorems are omitted. These proofs are to
be provided by the professor in class or assigned as homework exercises. There is a
non-trivial theorem stated without proof in Chapter 4, namely the determinant of the
product is the product of the determinants. For the proper flow of the course, this
theorem should be assumed there without proof. The proof is contained in Chapter 6.
The Jordan form should not be considered part of Chapter 5. It is stated there only
as a reference for undergraduate courses. Finally, Chapter 6 is not written primarily
for reference, but as an additional chapter for more advanced courses.
                                                                                      v

    This text is written with the conviction that it is more effective to teach abstract
and linear algebra as one coherent discipline rather than as two separate ones. Teach-
ing abstract algebra and linear algebra as distinct courses results in a loss of synergy
and a loss of momentum. Also with this text the professor does not extract the course
from the text, but rather builds the course upon it. I am convinced it is easier to
build a course from a base than to extract it from a big book. Because after you
extract it, you still have to build it. The bare bones nature of this book adds to its
flexibility, because you can build whatever course you want around it. Basic algebra
is a subject of incredible elegance and utility, but it requires a lot of organization.
This book is my attempt at that organization. Every effort has been extended to
make the subject move rapidly and to make the flow from one topic to the next as
seamless as possible. The student has limited time during the semester for serious
study, and this time should be allocated with care. The professor picks which topics
to assign for serious study and which ones to “wave arms at”. The goal is to stay
focused and go forward, because mathematics is learned in hindsight. I would have
made the book shorter, but I did not have any more time.

    When using this text, the student already has the outline of the next lecture, and
each assignment should include the study of the next few pages. Study forward, not
just back. A few minutes of preparation does wonders to leverage classroom learning,
and this book is intended to be used in that manner. The purpose of class is to
learn, not to do transcription work. When students come to class cold and spend
the period taking notes, they participate little and learn little. This leads to a dead
class and also to the bad psychology of “O K, I am here, so teach me the subject.”
Mathematics is not taught, it is learned, and many students never learn how to learn.
Professors should give more direction in that regard.

   Unfortunately mathematics is a difficult and heavy subject. The style and
approach of this book is to make it a little lighter. This book works best when
viewed lightly and read as a story. I hope the students and professors who try it,
enjoy it.


                                                E. H. Connell

                                                Department of Mathematics
                                                University of Miami
                                                Coral Gables, FL 33124
                                                ec@math.miami.edu
vi

Outline
Chapter 1    Background and Fundamentals of Mathematics
     Sets, Cartesian products                                        1
     Relations, partial orderings, Hausdorff maximality principle,   3
       equivalence relations
     Functions, bijections, strips, solutions of equations,          5
       right and left inverses, projections
     Notation for the logic of mathematics                           13
     Integers, subgroups, unique factorization                       14

Chapter 2    Groups
     Groups, scalar multiplication for additive groups               19
     Subgroups, order, cosets                                        21
     Normal subgroups, quotient groups, the integers mod n           25
     Homomorphisms                                                   27
     Permutations, the symmetric groups                              31
     Product of groups                                               34

Chapter 3    Rings
     Rings                                                           37
     Units, domains, fields                                          38
     The integers mod n                                              40
     Ideals and quotient rings                                       41
     Homomorphisms                                                   42
     Polynomial rings                                                45
     Product of rings                                                49
     The Chinese remainder theorem                                   50
     Characteristic                                                  50
     Boolean rings                                                   51

Chapter 4    Matrices and Matrix Rings
     Addition and multiplication of matrices, invertible matrices    53
     Transpose                                                       56
     Triangular, diagonal, and scalar matrices                       56
     Elementary operations and elementary matrices                   57
     Systems of equations                                            59
                                                                     vii

     Determinants, the classical adjoint                             60
     Similarity, trace, and characteristic polynomial                64

Chapter 5    Linear Algebra
     Modules, submodules                                              68
     Homomorphisms                                                    69
     Homomorphisms on Rn                                              71
     Cosets and quotient modules                                      74
     Products and coproducts                                          75
     Summands                                                         77
     Independence, generating sets, and free basis                    78
     Characterization of free modules                                 79
     Uniqueness of dimension                                          82
     Change of basis                                                  83
     Vector spaces, square matrices over fields, rank of a matrix     85
     Geometric interpretation of determinant                          90
     Linear functions approximate differentiable functions locally    91
     The transpose principle                                          92
     Nilpotent homomorphisms                                          93
     Eigenvalues, characteristic roots                                95
     Jordan canonical form                                            96
     Inner product spaces, Gram-Schmidt orthonormalization            98
     Orthogonal matrices, the orthogonal group                       102
     Diagonalization of symmetric matrices                           103

Chapter 6    Appendix
     The Chinese remainder theorem                                   108
     Prime and maximal ideals and UFDs                               109
     Splitting short exact sequences                                 114
     Euclidean domains                                               116
     Jordan blocks                                                   122
     Jordan canonical form                                           123
     Determinants                                                    128
     Dual spaces                                                     130
viii




                               1        2       3        4
                               5        6       7        8
                               9       11      10

            Abstract algebra is not only a major subject of science, but it is also
       magic and fun. Abstract algebra is not all work and no play, and it is
       certainly not a dull boy. See, for example, the neat card trick on page
       18. This trick is based, not on sleight of hand, but rather on a theorem
       in abstract algebra. Anyone can do it, but to understand it you need
       some group theory. And before beginning the course, you might first try
       your skills on the famous (some would say infamous) tile puzzle. In this
       puzzle, a frame has 12 spaces, the first 11 with numbered tiles and the
       last vacant. The last two tiles are out of order. Is it possible to slide the
       tiles around to get them all in order, and end again with the last space
       vacant? After giving up on this, you can study permutation groups and
       learn the answer!
Chapter 1
Background and Fundamentals of
Mathematics

This chapter is fundamental, not just for algebra, but for all fields related to mathe-
matics. The basic concepts are products of sets, partial orderings, equivalence rela-
tions, functions, and the integers. An equivalence relation on a set A is shown to be
simply a partition of A into disjoint subsets. There is an emphasis on the concept
of function, and the properties of surjective, injective, and bijective. The notion of a
solution of an equation is central in mathematics, and most properties of functions
can be stated in terms of solutions of equations. In elementary courses the section
on the Hausdorff Maximality Principle should be ignored. The final section gives a
proof of the unique factorization theorem for the integers.

Notation      Mathematics has its own universally accepted shorthand. The symbol
∃ means “there exists” and ∃! means “there exists a unique”. The symbol ∀ means
“for each” and ⇒ means “implies”. Some sets (or collections) are so basic they have
their own proprietary symbols. Five of these are listed below.

       N = Z+ = the set of positive integers = {1, 2, 3, ...}
       Z = the ring of integers = {..., −2, −1, 0, 1, 2, ...}
       Q = the field of rational numbers = {a/b : a, b ∈ Z, b 6= 0}
       R = the field of real numbers
       C = the field of complex numbers = {a + bi : a, b ∈ R} (i2 = −1)

Sets    Suppose A, B, C,... are sets. We use the standard notation for intersection
and union.

       A ∩ B = {x : x ∈ A and x ∈ B} = the set of all x which are elements

                                           1
2                                                           Background        Chapter 1

        of A and B.

       A ∪ B = {x : x ∈ A or x ∈ B} = the set of all x which are elements of
       A or B.

Any set called an index set is assumed to be non-void. Suppose T is an index set and
for each t ∈ T , At is a set.
       [
             At = {x : ∃ t ∈ T with x ∈ At }
       t∈T

       \
             At = {x : if t ∈ T, x ∈ At } = {x : ∀t ∈ T, x ∈ At }
       t∈T


Let ∅ be the null set. If A ∩ B = ∅, then A and B are said to be disjoint.

Definition    Suppose each of A and B is a set. The statement that A is a subset
of B (A ⊂ B) means that if a is an element of A, then a is an element of B. That
is, a ∈ A ⇒ a ∈ B. If A ⊂ B we may say A is contained in B, or B contains A.

Exercise   Suppose each of A and B is a set. The statement that A is not a subset
of B means                         .

Theorem (De Morgan’s laws)             Suppose S is a set. If C ⊂ S (i.e., if C is a subset
of S), let C 0 , the complement of C in S, be defined by C 0 = S − C = {x ∈ S : x 6∈ C}.
Then for any A, B ⊂ S,

             (A ∩ B)0 = A0 ∪ B 0   and

             (A ∪ B)0 = A0 ∩ B 0




Cartesian Products         If X and Y are sets, X × Y = {(x, y) : x ∈ X and y ∈ Y }.
In other words, the Cartesian product of X and Y is defined to be the set of all
ordered pairs whose first term is in X and whose second term is in Y .

Example          R × R = R2 = the plane.
Chapter 1        Background                                                                3

Definition     If each of X1 , ..., Xn is a set, X1 × · · · × Xn = {(x1 , ..., xn ) : xi ∈ Xi
for 1 ≤ i ≤ n} = the set of all ordered n-tuples whose i-th term is in Xi .

Example        R × · · · × R = Rn = real n-space.

Question       Is (R × R2 ) = (R2 × R) = R3 ?

                                       Relations

    If A is a non-void set, a non-void subset R ⊂ A × A is called a relation on A. If
(a, b) ∈ R we say that a is related to b, and we write this fact by the expression a ∼ b.
Here are several properties which a relation may possess.

           1) If a ∈ A, then a ∼ a.     (reflexive)
           2) If a ∼ b, then b ∼ a.     (symmetric)
            0
           2 ) If a ∼ b and b ∼ a, then a = b.     (anti-symmetric)
           3) If a ∼ b and b ∼ c, then a ∼ c.       (transitive)

Definition      A relation which satisfies 1), 20 ), and 3) is called a partial ordering.
In this case we write a ∼ b as a ≤ b. Then

           1) If a ∈ A, then a ≤ a.
           20 ) If a ≤ b and b ≤ a, then a = b.
           3) If a ≤ b and b ≤ c, then a ≤ c.

Definition A linear ordering is a partial ordering with the additional property
that, if a, b ∈ A, then a ≤ b or b ≤ a.

Example        A = R with the ordinary ordering, is a linear ordering.

Example        A = all subsets of R2 , with a ≤ b defined by a ⊂ b, is a partial ordering.




Hausdorff Maximality Principle (HMP)              Suppose S is a non-void subset of A
and ∼ is a relation on A. This defines a relation on S. If the relation satisfies any
of the properties 1), 2), 20 ), or 3) on A, the relation also satisfies these properties
when restricted to S. In particular, a partial ordering on A defines a partial ordering
4                                                       Background         Chapter 1

on S. However the ordering may be linear on S but not linear on A. The HMP is
that any linearly ordered subset of a partially ordered set is contained in a maximal
linearly ordered subset.

Exercise      Define a relation on A = R2 by (a, b) ∼ (c, d) provided a ≤ c and
b ≤ d. Show this is a partial ordering which is linear on S = {(a, a) : a < 0}. Find
at least two maximal linearly ordered subsets of R2 which contain S.

    One of the most useful applications of the HMP is to obtain maximal monotonic
collections of subsets.

Definition       A collection of sets is said to be monotonic if, given any two sets of
the collection, one is contained in the other.

Corollary to HMP            Suppose X is a non-void set and A is some non-void
collection of subsets of X, and S is a subcollection of A which is monotonic. Then ∃
a maximal monotonic subcollection of A which contains S.

Proof     Define a partial ordering on A by V ≤ W iff V ⊂ W, and apply HMP.

    The HMP is used twice in this book. First, to show that infinitely generated
vector spaces have free bases, and second, in the Appendix, to show that rings have
maximal ideals (see pages 87 and 109). In each of these applications, the maximal
monotonic subcollection will have a maximal element. In elementary courses, these
results may be assumed, and thus the HMP may be ignored.




Equivalence Relations         A relation satisfying properties 1), 2), and 3) is called
an equivalence relation.

Exercise      Define a relation on A = Z by n ∼ m iff n − m is a multiple of 3.
Show this is an equivalence relation.

Definition      If ∼ is an equivalence relation on A and a ∈ A, we define the equiva-
lence class containing a by cl(a) = {x ∈ A : a ∼ x}.
Chapter 1       Background                                                              5

Theorem

       1)   If b ∈ cl(a) then cl(b) = cl(a). Thus we may speak of a subset of A
            being an equivalence class with no mention of any element contained
            in it.
       2)   If each of U, V ⊂ A is an equivalence class and U ∩ V 6= ∅, then
            U = V.
       3)   Each element of A is an element of one and only one equivalence class.

Definition A partition of A is a collection of disjoint non-void subsets whose union
is A. In other words, a collection of non-void subsets of A is a partition of A provided
any a ∈ A is an element of one and only one subset of the collection. Note that if A
has an equivalence relation, the equivalence classes form a partition of A.

Theorem        Suppose A is a non-void set with a partition. Define a relation on A by
a ∼ b iff a and b belong to the same subset of the partition. Then ∼ is an equivalence
relation, and the equivalence classes are just the subsets of the partition.

Summary There are two ways of viewing an equivalence relation — one is as a
relation on A satisfying 1), 2), and 3), and the other is as a partition of A into
disjoint subsets.

Exercise   Define an equivalence relation on Z by n ∼ m iff n − m is a multiple
of 3. What are the equivalence classes?

Exercise     Is there a relation on R satisfying 1), 2), 20 ) and 3) ?   That is, is there
an equivalence relation on R which is also a partial ordering?

Exercise       Let H ⊂ R2 be the line H = {(a, 2a) : a ∈ R}. Consider the collection
of all translates of H, i.e., all lines in the plane with slope 2. Find the equivalence
relation on R2 defined by this partition of R2 .

                                      Functions

    Just as there are two ways of viewing an equivalence relation, there are two ways
of defining a function. One is the “intuitive” definition, and the other is the “graph”
or “ordered pairs” definition. In either case, domain and range are inherent parts of
the definition. We use the “intuitive” definition because everyone thinks that way.
6                                                        Background         Chapter 1

Definition       If X and Y are (non-void) sets, a function or mapping or map with
domain X and range Y , is an ordered triple (X, Y, f ) where f assigns to each x ∈ X
a well defined element f (x) ∈ Y . The statement that (X, Y, f ) is a function is written
                       f
as f : X → Y or X → Y .

Definition      The graph of a function (X, Y, f ) is the subset Γ ⊂ X × Y defined
by Γ = {(x, f (x)) : x ∈ X}. The connection between the “intuitive” and “graph”
viewpoints is given in the next theorem.

Theorem         If f : X → Y , then the graph Γ ⊂ X × Y has the property that each
x ∈ X is the first term of one and only one ordered pair in Γ. Conversely, if Γ is a
subset of X × Y with the property that each x ∈ X is the first term of one and only
ordered pair in Γ, then ∃! f : X → Y whose graph is Γ. The function is defined by
“f (x) is the second term of the ordered pair in Γ whose first term is x.”




Example        Identity functions   Here X = Y and f : X → X is defined by
f (x) = x for all x ∈ X. The identity on X is denoted by IX or just I : X → X.

Example        Constant functions       Suppose y0 ∈ Y . Define f : X → Y by f (x) =
y0 for all x ∈ X.

Restriction      Given f : X → Y and a non-void subset S of X, define f | S : S → Y
by (f | S)(s) = f (s) for all s ∈ S.

Inclusion         If S is a non-void subset of X, define the inclusion i : S → X by
i(s) = s for all s ∈ S. Note that inclusion is a restriction of the identity.

                              f     g
Composition Given W → X → Y                define g ◦ f : W → Y by
(g ◦ f )(x) = g(f (x)).

                                                                f      g      h
Theorem          (The associative law of composition) If V → W → X → Y , then
h ◦ (g ◦ f ) = (h ◦ g) ◦ f. This may be written as h ◦ g ◦ f .
Chapter 1       Background                                                                 7

Definitions      Suppose f : X → Y .

      1)    If T ⊂ Y , the inverse image of T is a subset of X, f −1 (T ) = {x ∈ X :
            f (x) ∈ T }.

      2)    If S ⊂ X, the image of S is a subset of Y , f (S) = {f (s) : s ∈ S} =
            {y ∈ Y : ∃s ∈ S with f (s) = y}.

      3)    The image of f is the image of X , i.e., image (f ) = f (X) =
            {f (x) : x ∈ X} = {y ∈ Y : ∃x ∈ X with f (x) = y}.

      4)    f : X → Y is surjective or onto provided image (f ) = Y i.e., the image
            is the range, i.e., if y ∈ Y , f −1 (y) is a non-void subset of X.

      5)    f : X → Y is injective or 1-1 provided (x1 6= x2 ) ⇒ f (x1 ) 6= f (x2 ), i.e.,
            if x1 and x2 are distinct elements of X, then f (x1 ) and f (x2 ) are
            distinct elements of Y .

      6)    f : X → Y is bijective or is a 1-1 correspondence provided f is surjective
            and injective. In this case, there is function f −1 : Y → X with f −1 ◦ f =
            IX : X → X and f ◦ f −1 = IY : Y → Y . Note that f −1 : Y → X is
            also bijective and (f −1 )−1 = f .

Examples

      1)    f : R → R defined by f (x) = sin(x) is neither surjective nor injective.

      2)    f : R → [−1, 1] defined by f (x) = sin(x) is surjective but not injective.

      3)    f : [0, π/2] → R defined by f (x) = sin(x) is injective but not surjective.

      4)    f : [0, π/2] → [0, 1] defined by f (x) = sin(x) is bijective.   (f −1 (x) is
            written as arcsin(x) or sin−1 (x).)

      5)    f : R → (0, ∞) defined by f (x) = ex is bijective. (f −1 (x) is written as
            ln(x).)

Note      There is no such thing as “the function sin(x).” A function is not defined
unless the domain and range are specified.
8                                                          Background         Chapter 1

Exercise    Show there are natural bijections from (R × R2 ) to (R2 × R) and
from (R2 × R) to R × R × R. These three sets are disjoint, but the bijections
between them are so natural that we sometimes identify them.

Exercise        Suppose X is a set with 6 elements and Y is a finite set with n elements.

         1)   There exists an injective f : X → Y iff n                       .
         2)   There exists a surjective f : X → Y iff n                       .
         3)   There exists a bijective f : X → Y iff n                        .

Pigeonhole Principle        Suppose X is a finite set with m elements, Y is a finite
set with n elements, and f : X → Y is a function.

         1)   If m = n, then f is injective iff f is surjective iff f is bijective.
         2)   If m > n, then f is not injective.
         3)   If m < n, then f is not surjective.

    If you are placing 6 pigeons in 6 holes, and you run out of pigeons before you fill
the holes, then you have placed 2 pigeons in one hole. In other words, in part 1) for
m = n = 6, if f is not surjective then f is not injective. Of course, the pigeonhole
principle does not hold for infinite sets, as can be seen by the following exercise.

Exercise       Show there is a function f : Z+ → Z+ which is injective but not
surjective. Also show there is one which is surjective but not injective.

Exercise       Suppose f : [−2, 2] → R is defined by f (x) = x2 . Find f −1 (f ([1, 2])).
Also find f (f −1 ([3, 5])).

Exercise        Suppose f : X → Y is a function, S ⊂ X and T ⊂ Y . Find the
relationship between S and f −1 (f (S)). Show that if f is injective, S = f −1 (f (S)).
Also find the relationship between T and f (f −1 (T )). Show that if f is surjective,
T = f (f −1 (T )).



Strips        We now define the vertical and horizontal strips of X × Y .

If x0 ∈ X, {(x0 , y) : y ∈ Y } = (x0 × Y ) is called a vertical strip.
If y0 ∈ Y, {(x, y0 ) : x ∈ X} = (X × y0 ) is called a horizontal strip.
Chapter 1       Background                                                              9

Theorem     Suppose S ⊂ X × Y . The subset S is the graph of a function with
domain X and range Y iff each vertical strip intersects S in exactly one point.

    This is just a restatement of the property of a graph of a function. The purpose
of the next theorem is to restate properties of functions in terms of horizontal strips.


Theorem        Suppose f : X → Y has graph Γ. Then

       1)   Each horizontal strip intersects Γ in at least one point iff f is            .
       2)   Each horizontal strip intersects Γ in at most one point iff f is             .
       3)   Each horizontal strip intersects Γ in exactly one point iff f is             .




Solutions of Equations         Now we restate these properties in terms of solutions of
equations. Suppose f : X → Y and y0 ∈ Y . Consider the equation f (x) = y0 . Here
y0 is given and x is considered to be a “variable”. A solution to this equation is any
x0 ∈ X with f (x0 ) = y0 . Note that the set of all solutions to f (x) = y0 is f −1 (y0 ).
Also f (x) = y0 has a solution iff y0 ∈ image(f ) iff f −1 (y0 ) is non-void.

Theorem        Suppose f : X → Y .

       1)   The equation f (x) = y0 has at least one solution for each y0 ∈ Y iff
            f is                        .
       2)   The equation f (x) = y0 has at most one solution for each y0 ∈ Y iff
            f is                        .
       3)   The equation f (x) = y0 has a unique solution for each y0 ∈ Y iff
            f is                        .




Right and Left Inverses         One way to understand functions is to study right and
left inverses, which are defined after the next theorem.

                            f      g
Theorem        Suppose X → Y → W are functions.

       1)   If g ◦ f is injective, then f is injective.
10                                                         Background         Chapter 1

       2)   If g ◦ f is surjective, then g is surjective.
       3)   If g ◦ f is bijective, then f is injective and g is surjective.

Example         X = W = {p}, Y = {p, q}, f (p) = p, and g(p) = g(q) = p. Here
g ◦ f is the identity, but f is not surjective and g is not injective.

Definition Suppose f : X → Y is a function. A left inverse of f is a function
g : Y → X such that g ◦ f = IX : X → X. A right inverse of f is a function
h : Y → X such that f ◦ h = IY : Y → Y .

Theorem       Suppose f : X → Y is a function.

       1)   f has a right inverse iff f is surjective. Any such right inverse must be
            injective.
       2)   f has a left inverse iff f is injective. Any such left inverse must be
            surjective.

Corollary          Suppose each of X and Y is a non-void set. Then ∃ an injective
f : X → Y iff ∃ a surjective g : Y → X. Also a function from X to Y is bijective
iff it has a left inverse and a right inverse iff it has a left and right inverse.

Note      The Axiom of Choice is not discussed in this book. However, if you worked
1) of the theorem above, you unknowingly used one version of it. For completeness,
we state this part of 1) again.

The Axiom of Choice            If f : X → Y is surjective, then f has a right inverse
h. That is, for each y ∈ Y , it is possible to choose an x ∈ f −1 (y) and thus to define
h(y) = x.

Note      It is a classical theorem in set theory that the Axiom of Choice and the
Hausdorff Maximality Principle are equivalent. However in this text we do not go
that deeply into set theory. For our purposes it is assumed that the Axiom of Choice
and the HMP are true.

Exercise        Suppose f : X → Y is a function. Define a relation on X by a ∼ b if
f (a) = f (b). Show this is an equivalence relation. If y belongs to the image of f ,
then f −1 (y) is an equivalence class and every equivalence class is of this form. In the
next chapter where f is a group homomorphism, these equivalence classes will be
called cosets.
Chapter 1         Background                                                                   11




Projections     If X1 and X2 are non-void sets, we define the projection maps
π1 : X1 × X2 → X1 and π2 : X1 × X2 → X2 by πi (x1 , x2 ) = xi .

Theorem       If Y, X1 , and X2 are non-void sets, there is a 1-1 correspondence
between {functions f: Y → X1 × X2 } and {ordered pairs of functions (f1 , f2 ) where
f1: Y → X1 and f2 : Y → X2 }.

Proof     Given f , define f1 = π1 ◦ f and f2 = π2 ◦ f . Given f1 and f2 define
f : Y → X1 × X2 by f (y) = (f1 (y), f2 (y)). Thus a function from Y to X1 × X2 is
merely a pair of functions from Y to X1 and Y to X2 . This concept is displayed in
the diagram below. It is summarized by the equation f = (f1 , f2 ).


                                           Y
                                                @
                                  f1                @ f2
                                               f     @
                                                       @
                                            ?              R
                                                           @
                           X1    π1   X1 × X 2
                                                     π2 -
                                                               X2



   One nice thing about this concept is that it works fine for infinite Cartesian
products.

Definition Suppose      an index set and for each t ∈ T , Xt is a non-void set.
                 Y T is Q
Then the product  Xt = Xt is the collection of all sequences {xt }t∈T = {xt }
                     t∈T
where xt ∈ Xt . Formally these sequences are functions α from T to Xt with each
                                                                                S

α(t) in Xt and written as α(t) = xt . If T = {1, 2, . . . , n} then {xt } is the ordered
n-tuple (x1 , x2 , . . . , xn ). If T = Z+ then {xt } is the sequence (x1 , x2 , . . .). For any T
and any s in T , the projection map πs : Xt → Xs is defined by πs ({xt }) = xs .
                                                Q



Theorem          If Y is any non-void set, there is a 1-1 correspondence between
{functions f : Y → Xt } and {sequences of functions {ft }t∈T where ft : Y → Xt }.
                      Q

Given f , the sequence {ft } is defined by ft = πt ◦ f. Given {ft }, f is defined by
f (y) = {ft (y)}.
12                                                         Background         Chapter 1

A Calculus Exercise          Let A be the collection of all functions f : [0, 1] → R
which have an infinite number of derivatives. Let A0 ⊂ A be the subcollection of
those functions f with f (0) = 0. Define D : A0 → A by D(f ) = df /dx. Use the mean
value theorem to show that D is injective. Use the fundamental theorem of calculus
to show that D is surjective.

Exercise      This exercise is not used elsewhere in this text and may be omitted. It
is included here for students who wish to do a little more set theory. Suppose T is a
non-void set.

1) If Y is a non-void set, define Y T to be the collection of all functions with domain
T and range Y . Show that if T and Y are finite sets with m and n elements, then
Y T has nm elements. In particular, when T = {1, 2, 3}, Y T = Y × Y × Y has
n3 elements. Show that if n ≥ 3, the subset of Y {1,2,3} of all injective functions has
n(n − 1)(n − 2) elements. These injective functions are called permutations on Y
taken 3 at a time. If T = N, then Y T is the infinite product Y × Y × · · · . That is,
Y N is the set of all infinite sequences (y1 , y2 , . . .) where
                                                              Y each yi ∈ Y . For any Y and
                                                          T
T , let Yt be a copy of Y for each t ∈ T. Then Y =               Yt .
                                                         t∈T
2) Suppose each of Y1 and Y2 is a non-void set. Show there is a natural bijection
from (Y1 × Y2 )T to Y1T × Y2T . (This is the fundamental property of Cartesian products
presented in the two previous theorems.)

3) Define P(T ), the power set of T , to be the collection of all subsets of T (including
the null set). Show that if T is a finite set with m elements, P(T ) has 2m elements.

4) If S is any subset of T , define its characteristic function χS : T → {0, 1} by
                                                | S. Define α : P(T ) → {0, 1}T by
letting χS (t) be 1 when t ∈ S, and be 0 when t ∈
α(S) = χS . Define β : {0, 1}T → P(T ) by β(f ) = f −1 (1). Show that if S ⊂ T then
β ◦ α(S) = S, and if f : T → {0, 1} then α ◦ β(f ) = f . Thus α is a bijection and
β = α−1 .

                                   P(T ) ←→ {0, 1}T

5) Suppose γ : T → {0, 1}T is a function and show that it cannot be surjective. If
t ∈ T , denote γ(t) by γ(t) = ft : T → {0, 1}. Define f : T → {0, 1} by f (t) = 0 if
ft (t) = 1, and f (t) = 1 if ft (t) = 0. Show that f is not in the image of γ and thus
γ cannot be surjective. This shows that if T is an infinite set, then the set {0, 1}T
represents a “higher order of infinity than T ”.

6)   An infinite set Y is said to be countable if there is a bijection from the positive
Chapter 1       Background                                                           13

integers N to Y. Show Q is countable but the following three collections are not.
   i) P(N), the collection of all subsets of N.
   ii) {0, 1}N , the collection of all functions f : N → {0, 1}.
   iii) The collection of all sequences (y1 , y2 , . . .) where each yi is 0 or 1.
   We know that ii) and iii) are equal and there is a natural bijection between i)
and ii). We also know there is no surjective map from N to {0, 1}N , i.e., {0, 1}N is
uncountable. Finally, show there is a bijection from {0, 1}N to the real numbers R.
(This is not so easy. To start with, you have to decide what the real numbers are.)

                     Notation for the Logic of Mathematics

    Each of the words “Lemma”, “Theorem”, and “Corollary” means “true state-
ment”. Suppose A and B are statements. A theorem may be stated in any of the
following ways:

Theorem        Hypothesis Statement A.
               Conclusion Statement B.

Theorem        Suppose A is true. Then B is true.

Theorem        If A is true, then B is true.

Theorem        A ⇒ B (A implies B ).

    There are two ways to prove the theorem — to suppose A is true and show B is
true, or to suppose B is false and show A is false. The expressions “A ⇔ B”, “A is
equivalent to B”, and “A is true iff B is true ” have the same meaning (namely, that
A ⇒ B and B ⇒ A).
    The important thing to remember is that thoughts and expressions flow through
the language. Mathematical symbols are shorthand for phrases and sentences in the
English language. For example, “x ∈ B ” means “x is an element of the set B.” If A
is the statement “x ∈ Z+ ” and B is the statement “x2 ∈ Z+ ”, then “A ⇒ B”means
“If x is a positive integer, then x2 is a positive integer”.




Mathematical Induction is based upon the fact that if S ⊂ Z+ is a non-void
subset, then S contains a smallest element.
14                                                         Background          Chapter 1

Theorem Suppose P (n) is a statement for each n = 1, 2, ... . Suppose P (1) is
true and for each n ≥ 1, P (n) ⇒ P (n + 1). Then for each n ≥ 1, P (n) is true.

Proof          If the theorem is false, then ∃ a smallest positive integer m such that
P (m) is false. Since P (m − 1) is true, this is impossible.

Exercise      Use induction to show that, for each n ≥ 1, 1 + 2 + · · · + n = n(n + 1)/2.

                                     The Integers

    In this section, lower case letters a, b, c, ... will represent integers, i.e., elements
of Z. Here we will establish the following three basic properties of the integers.

       1)    If G is a subgroup of Z, then ∃ n ≥ 0 such that G = nZ.
       2)    If a and b are integers, not both zero, and G is the collection of all linear
             combinations of a and b, then G is a subgroup of Z, and its
             positive generator is the greatest common divisor of a and b.
       3)    If n ≥ 2, then n factors uniquely as the product of primes.

All of this will follow from long division, which we now state formally.

Euclidean Algorithm        Given a, b with b 6= 0, ∃! m and r with 0 ≤ r <|b| and
a = bm + r. In other words, b divides a “m times with a remainder of r”. For
example, if a = −17 and b = 5, then m = −4 and r = 3, −17 = 5(−4) + 3.

Definition       If r = 0, we say that b divides a or a is a multiple of b. This fact is
written as b | a. Note that b | a ⇔ the rational number a/b is an integer ⇔ ∃! m
such that a = bm ⇔ a ∈ bZ.


Note        Anything (except 0) divides 0. 0 does not divide anything.
            ± 1 divides anything . If n 6= 0, the set of integers which n divides
            is nZ = {nm : m ∈ Z} = {..., −2n, −n, 0, n, 2n, ...}. Also n divides
            a and b with the same remainder iff n divides (a − b).


Definition      A non-void subset G ⊂ Z is a subgroup provided (g ∈ G ⇒ −g ∈ G)
and (g1 , g2 ∈ G ⇒ (g1 + g2 ) ∈ G). We say that G is closed under negation and closed
under addition.
Chapter 1           Background                                                           15

Theorem       If n ∈ Z then nZ is a subgroup. Thus if n 6= 0, the set of integers
which n divides is a subgroup of Z.

   The next theorem states that every subgroup of Z is of this form.

Theorem           Suppose G ⊂ Z is a subgroup. Then

         1)     0 ∈ G.
         2)     If g1 and g2 ∈ G, then (m1 g1 + m2 g2 ) ∈ G for all integers m1 , m2 .
         3)     ∃! non-negative integer n such that G = nZ. In fact, if G 6= {0}
                and n is the smallest positive integer in G, then G = nZ.

Proof      Since G is non-void, ∃ g ∈ G. Now (−g) ∈ G and thus 0 = g + (−g)
belongs to G, and so 1) is true. Part 2) is straightforward, so consider 3). If G 6= 0,
it must contain a positive element. Let n be the smallest positive integer in G. If
g ∈ G, g = nm + r where 0 ≤ r < n. Since r ∈ G, it must be 0, and g ∈ nZ.




   Now suppose a, b ∈ Z and at least one of a and b is non-zero.

Theorem       Let G be the set of all linear combinations of a and b, i.e., G =
{ma + nb : m, n ∈ Z}. Then

   1)     G contains a and b.
   2)     G is a subgroup. In fact, it is the smallest subgroup containing a and b.
          It is called the subgroup generated by a and b.
   3)     Denote by (a, b) the smallest positive integer in G. By the previous
          theorem, G = (a, b)Z, and thus (a, b) | a and (a, b) | b. Also note that
          ∃ m, n such that ma + nb = (a, b). The integer (a, b) is called
          the greatest common divisor of a and b.
   4)     If n is an integer which divides a and b, then n also divides (a, b).

Proof of 4)      Suppose n | a and n | b i.e., suppose a, b ∈ nZ. Since G is the
smallest subgroup containing a and b, nZ ⊃ (a, b)Z, and thus n | (a, b).

Corollary          The following are equivalent.

    1)        a and b have no common divisors, i.e., (n | a and n | b) ⇒ n = ±1.
16                                                         Background          Chapter 1

      2)    (a, b) = 1, i.e., the subgroup generated by a and b is all of Z.
      3)    ∃ m, n ∈Z with ma + nb = 1.

Definition       If any one of these three conditions is satisfied, we say that a and b
are relatively prime.



     This next theorem is the basis for unique factorization.

Theorem          If a and b are relatively prime with a not zero, then a|bc ⇒ a|c.

Proof     Suppose a and b are relatively prime, c ∈ Z and a | bc. Then there exist
m, n with ma + nb = 1, and thus mac + nbc = c. Now a | mac and a | nbc. Thus
a | (mac + nbc) and so a | c.

Definition    A prime is an integer p > 1 which does not factor, i.e., if p = ab then
a = ±1 or a = ±p. The first few primes are 2, 3, 5, 7, 11, 13, 17,... .

Theorem          Suppose p is a prime.

     1)    If a is an integer which is not a multiple of p, then (p, a) = 1. In other
           words, if a is any integer, (p, a) = p or (p, a) = 1.
     2)    If p | ab then p | a or p | b.
     3)    If p | a1 a2 · · · an then p divides some ai . Thus if each ai is a prime,
           then p is equal to some ai .

Proof       Part 1) follows immediately from the definition of prime. Now suppose
p | ab. If p does not divide a, then by 1), (p, a) = 1 and by the previous theorem, p
must divide b. Thus 2) is true. Part 3) follows from 2) and induction on n.



The Unique Factorization Theorem                  Suppose a is an integer which is not 0,1,
or -1. Then a may be factored into the product of primes and, except for order, this
factorization is unique. That is, ∃ a unique collection of distinct primes p1 , ..., pk and
positive integers s1 , s2 , ..., sk such that a = ±ps11 p2s2 · · · pskk .

Proof    Factorization into primes is obvious, and uniqueness follows from 3) in the
theorem above. The power of this theorem is uniqueness, not existence.
Chapter 1         Background                                                                  17

   Now that we have unique factorization and part 3) above, the picture becomes
transparent. Here are some of the basic properties of the integers in this light.

Theorem (Summary)
       1)     Suppose | a |> 1 has prime factorization a = ±ps11 · · · pskk . Then the only
              divisors of a are of the form ±pt11 · · · ptkk where 0 ≤ ti ≤ si for i = 1, ..., k.

       2)     If | a |> 1 and | b |> 1, then (a, b) = 1 iff there is no common prime in
              their factorizations. Thus if there is no common prime in their
              factorizations, ∃ m, n with ma + nb = 1, and also (a2 , b2 ) = 1.

       3)     Suppose | a |> 1 and | b |> 1. Let {p1 , . . . , pk } be the union of the distinct
              primes of their factorizations. Thus a = ±ps11 · · · pskk where 0 ≤ si and
              b = ±pt11 · · · ptkk where 0 ≤ ti . Let ui be the minimum of si and ti . Then
              (a, b) = pu1 1 · · · puk k . For example (23 · 5 · 11, 22 · 54 · 7) = 22 · 5.

       30 )    Let vi be the maximum of si and ti . Then c = pv11 · · · pvkk is the least
              (positive) common multiple of a and b. Note that c is a multiple of
              a and b, and if n is a multiple of a and b, then n is a multiple of c.
              Finally, if a and b are positive, their least common multiple is
              c = ab/(a, b), and if in addition a and b are relatively prime,
              then their least common multiple is just their product.

       4)     There is an infinite number of primes. (Proof: Suppose there were only
              a finite number of primes p1 , p2 , ..., pk . Then no prime would divide
              (p1 p2 · · · pk + 1).)
                                                               √                 √
       5)     Suppose c is an integer √           √ 1. Then c is rational iff √c is an
                                         greater than
              integer. In particular,     2 and 3 are irrational. (Proof: If c is
                                                          √
              rational, ∃ positive integers a and b with     c = a/b and (a, b) = 1.
              If b > 1, then it is divisible by some prime, and since cb2 = a2 , this
              prime will also appear in the prime factorization of a. This is a
                                                    √
              contradiction and thus b = 1 and c is an integer.) (See the fifth
              exercise below.)

Exercise        Find (180,28), i.e., find the greatest common divisor of 180 and 28,
i.e., find the positive generator of the subgroup generated by {180,28}. Find integers
m and n such that 180m + 28n = (180, 28). Find the least common multiple of 180
and 28, and show that it is equal to (180 · 28)/(180, 28).
18                                                         Background         Chapter 1

Exercise        We have defined the greatest common divisor (gcd) and the least com-
mon multiple (lcm) of a pair of integers. Now suppose n ≥ 2 and S = {a1 , a2 , .., an }
is a finite collection of integers with |ai | > 1 for 1 ≤ i ≤ n. Define the gcd and the
lcm of the elements of S and develop their properties. Express the gcd and the lcm
in terms of the prime factorizations of the ai . When is the lcm of S equal to the
product a1 a2 · · · an ? Show that the set of all linear combinations of the elements of
S is a subgroup of Z, and its positive generator is the gcd of the elements of S.

Exercise     Show that the gcd of S = {90, 70, 42} is 2, and find integers n1 , n2 , n3
such that 90n1 + 70n2 + 42n3 = 2. Also find the lcm of the elements of S.

Exercise        Show that if each of G1 , G2 , ..., Gm is a subgroup of Z, then
G1 ∩ G2 ∩ · · · ∩ Gm is also a subgroup of Z. Now let G = (90Z) ∩ (70Z) ∩ (42Z)
and find the positive integer n with G = nZ.

Exercise        Show that if the nth root of an integer is a rational number, then it
itself is an integer. That is, suppose c and n are integers greater than 1. There is a
unique positive real number x with xn = c. Show that if x is rational, then it is an
integer. Thus if p is a prime, its nth root is an irrational number.

Exercise       Show that a positive integer is divisible by 3 iff the sum of its digits is
divisible by 3. More generally, let a = an an−1 . . . a0 = an 10n + an−1 10n−1 + · · · + a0
where 0 ≤ ai ≤ 9. Now let b = an + an−1 + · · · + a0 , and show that 3 divides a and b
with the same remainder. Although this is a straightforward exercise in long division,
it will be more transparent later on. In the language of the next chapter, it says that
[a] = [b] in Z3 .

Card Trick      Ask friends to pick out seven cards from a deck and then to select one
to look at without showing it to you. Take the six cards face down in your left hand
and the selected card in your right hand, and announce you will place the selected
card in with the other six, but they are not to know where. Put your hands behind
your back and place the selected card on top, and bring the seven cards in front in
your left hand. Ask your friends to give you a number between one and seven (not
allowing one). Suppose they say three. You move the top card to the bottom, then
the second card to the bottom, and then you turn over the third card, leaving it face
up on top. Then repeat the process, moving the top two cards to the bottom and
turning the third card face up on top. Continue until there is only one card face
down, and this will be the selected card. Magic? Stay tuned for Chapter 2, where it
is shown that any non-zero element of Z7 has order 7.
Chapter 2
Groups

Groups are the central objects of algebra. In later chapters we will define rings and
modules and see that they are special cases of groups. Also ring homomorphisms and
module homomorphisms are special cases of group homomorphisms. Even though
the definition of group is simple, it leads to a rich and amazing theory. Everything
presented here is standard, except that the product of groups is given in the additive
notation. This is the notation used in later chapters for the products of rings and
modules. This chapter and the next two chapters are restricted to the most basic
topics. The approach is to do quickly the fundamentals of groups, rings, and matrices,
and to push forward to the chapter on linear algebra. This chapter is, by far and
above, the most difficult chapter in the book, because group operations may be written
as addition or multiplication, and also the concept of coset is confusing at first.

Definition       Suppose G is a non-void set and φ : G × G → G is a function. φ is
called a binary operation, and we will write φ(a, b) = a·b or φ(a, b) = a+b. Consider
the following properties.

1) If a, b, c ∈ G then a · (b · c) = (a · b) · c. If a, b, c ∈ G then a + (b + c) = (a + b) + c.

2) ∃ e = eG ∈ G such that if a ∈ G             ∃ 0=0G ∈ G such that if a ∈ G
                                                 ¯ ¯
            e · a = a · e = a.                          0+a = a+0= a.
                                                        ¯         ¯
3) If a ∈ G, ∃b ∈ G with a · b = b · a = e If a ∈ G, ∃b ∈ G with a + b = b + a = 0
                                                                                 ¯
        (b is written as b = a−1 ).              (b is written as b = −a).

4) If a, b ∈ G, then a · b = b · a.            If a, b ∈ G, then a + b = b + a.

Definition      If properties 1), 2), and 3) hold, (G, φ) is said to be a group. If we
write φ(a, b) = a · b, we say it is a multiplicative group. If we write φ(a, b) = a + b,

                                              19
20                                                                   Groups        Chapter 2

we say it is an additive group. If in addition, property 4) holds, we say the group is
abelian or commutative.

Theorem         Let (G, φ) be a multiplicative group.
     (i)     Suppose a, c, c̄ ∈ G. Then a · c = a · c̄ ⇒ c = c̄.
                                    Also c · a = c̄ · a ⇒ c = c̄.
             In other words, if f : G → G is defined by f (c) = a · c, then f is injective.
             Also f is bijective with f −1 given by f −1 (c) = a−1 · c.
     (ii)    e is unique, i.e., if ē ∈ G satisfies 2), then e = ē. In fact,
             if a, b ∈ G then (a · b = a) ⇒ (b = e) and (a · b = b) ⇒ (a = e).
             Recall that b is an identity in G provided it is a right and left
             identity for any a in G. However, group structure is so rigid that if
             ∃ a ∈ G such that b is a right identity for a, then b = e.
             Of course, this is just a special case of the cancellation law in (i).

     (iii)   Every right inverse is an inverse, i.e., if a · b = e then b = a−1 .
             Also if b · a = e then b = a−1 . Thus inverses are unique.

     (iv)    If a ∈ G, then (a−1 )−1 = a.

     (v)     The multiplication a1 · a2 · a3 = a1 · (a2 · a3 ) = (a1 · a2 ) · a3 is well-defined.
             In general, a1 · a2 · · · an is well defined.

     (vi)    If a, b ∈ G, (a · b)−1 = b−1 · a−1 . Also (a1 · a2 · · · an )−1 =
                     −1       −1
             a−1
              n · an−1 · · · a1 .


     (vii)   Suppose a ∈ G. Let a0 = e and if n > 0, an = a · · · a (n times)
             and a−n = a−1 · · · a−1 (n times). If n1 , n2 , ..., nt ∈ Z then
             an1 · an2 · · · ant = an1 +···+nt . Also (an )m = anm .
             Finally, if G is abelian and a, b ∈ G, then (a · b)n = an · bn .

Exercise.       Write out the above theorem where G is an additive group. Note that
part (vii) states that G has a scalar multiplication over Z. This means that if a is in
G and n is an integer, there is defined an element an in G. This is so basic, that we
state it explicitly.

Theorem.          Suppose G is an additive group. If a ∈ G, let a0 =0 and if n > 0,
                                                                    ¯
let an = (a + · · +a) where the sum is n times, and a(−n) = (−a) + (−a) · · + (−a),
Chapter 2       Groups                                                               21

which we write as (−a − a · · − a). Then the following properties hold in general,
except the first requires that G be abelian.

       (a + b)n   =    an + bn
       a(n + m)   =    an + am
       a(nm)      =    (an)m
       a1         =    a

    Note that the plus sign is used ambiguously — sometimes for addition in G
and sometimes for addition in Z. In the language used in Chapter 5, this theorem
states that any additive abelian group is a Z-module. (See page 71.)

Exercise        Suppose G is a non-void set with a binary operation φ(a, b) = a·b which
satisfies 1), 2) and [ 30 ) If a ∈ G, ∃b ∈ G with a · b = e]. Show (G, φ) is a group,
i.e., show b · a = e. In other words, the group axioms are stronger than necessary.
If every element has a right inverse, then every element has a two sided inverse.

Exercise        Suppose G is the set of all functions from Z to Z with multiplication
defined by composition, i.e., f · g = f ◦ g. Note that G satisfies 1) and 2) but not 3),
and thus G is not a group. Show that f has a right inverse in G iff f is surjective,
and f has a left inverse in G iff f is injective (see page 10). Also show that the set
of all bijections from Z to Z is a group under composition.

Examples       G = R, G = Q, or G = Z with φ(a, b) = a + b is an additive
               abelian group.

Examples       G = R − 0 or G = Q − 0 with φ(a, b) = ab is a multiplicative
               abelian group.
               G = Z − 0 with φ(a, b) = ab is not a group.
               G = R+ = {r ∈ R : r > 0} with φ(a, b) = ab is a multiplicative
               abelian group.

                                     Subgroups

Theorem        Suppose G is a multiplicative group and H ⊂ G is a non-void subset
satisfying

          1) if a, b ∈ H then a · b ∈ H
and       2) if a ∈ H then a−1 ∈ H.
22                                                             Groups         Chapter 2

Then e ∈ H and H is a group under multiplication. H is called a subgroup of G.
Proof      Since H is non-void, ∃a ∈ H. By 2), a−1 ∈ H and so by 1), e ∈ H. The
associative law is immediate and so H is a group.

Example      G is a subgroup of G and e is a subgroup of G. These are called the
improper subgroups of G.

Example        If G = Z under addition, and n ∈ Z, then H = nZ is a subgroup of
Z. By a theorem in the section on the integers in Chapter 1, every subgroup of Z
is of this form (see page 15). This is a key property of the integers.




Exercises         Suppose G is a multiplicative group.

1)   Let H be the center of G, i.e., H = {h ∈ G : g · h = h · g for all g ∈ G}. Show
     H is a subgroup of G.

2)   Suppose H1 and H2 are subgroups of G. Show H1 ∩ H2 is a subgroup of G.

3)   Suppose H1 and H2 are subgroups of G, with neither H1 nor H2 contained in
     the other. Show H1 ∪ H2 is not a subgroup of G.

4)        \ T is an index set and for each t ∈ T , Ht is a subgroup of G.
     Suppose
     Show    Ht is a subgroup of G.
            t∈T                                              [
5)   Furthermore, if {Ht } is a monotonic collection, then         Ht is a subgroup of G.
                                                             t∈T
6)   Suppose G= {all functions f : [0, 1] → R}. Define an addition on G by
     (f + g)(t) = f (t) + g(t) for all t ∈ [0, 1]. This makes G into an abelian group.
     Let K be the subset of G composed of all differentiable functions. Let H
     be the subset of G composed of all continuous functions. What theorems
     in calculus show that H and K are subgroups of G? What theorem shows
     that K is a subset (and thus subgroup) of H?




Order       Suppose G is a multiplicative group. If G has an infinite number of
Chapter 2        Groups                                                                   23

elements, we say that o(G), the order of G, is infinite. If G has n elements, then
o(G) = n. Suppose a ∈ G and H = {ai : i ∈ Z}. H is an abelian subgroup of G
called the subgroup generated by a. We define the order of the element a to be the
order of H, i.e., the order of the subgroup generated by a. Let f : Z → H be the
surjective function defined by f (m) = am . Note that f (k + l) = f (k) · f (l) where
the addition is in Z and the multiplication is in the group H. We come now to the
first real theorem in group theory. It says that the element a has finite order iff f
is not injective, and in this case, the order of a is the smallest positive integer n
with an = e.
Theorem          Suppose a is an element of a multiplicative group G, and
H = {a : i ∈ Z}. If ∃ distinct integers i and j with ai = aj , then a has some finite
        i

order n. In this case H has n distinct elements, H = {a0 , a1 , . . . , an−1 }, and am = e
iff n|m. In particular, the order of a is the smallest positive integer n with an = e,
and f −1 (e) = nZ.

Proof      Suppose j < i and ai = aj . Then ai−j = e and thus ∃ a smallest positive
integer n with an = e. This implies that the elements of {a0 , a1 , ..., an−1 } are distinct,
and we must show they are all of H. If m ∈ Z, the Euclidean algorithm states that
∃ integers q and r with 0 ≤ r < n and m = nq + r. Thus am = anq · ar = ar , and
so H = {a0 , a1 , ..., an−1 }, and am = e iff n|m. Later in this chapter we will see that
f is a homomorphism from an additive group to a multiplicative group and that,
in additive notation, H is isomorphic to Z or Zn .

Exercise     Write out this theorem for G an additive group. To begin, suppose a is
an element of an additive group G, and H = {ai : i ∈ Z}.

Exercise      Show that if G is a finite group of even order, then G has an odd number
of elements of order 2. Note that e is the only element of order 1.

Definition     A group G is cyclic if ∃ an element of G which generates G.

Theorem         If G is cyclic and H is a subgroup of G, then H is cyclic.
Proof      Suppose G = {ai : i ∈ Z} is a cyclic group and H is a subgroup
of G. If H = e, then H is cyclic, so suppose H 6= e. Now there is a small-
est positive integer m with am ∈ H. If t is an integer with at ∈ H, then by
the Euclidean algorithm, m divides t, and thus am generates H. Note that in
the case G has finite order n, i.e., G = {a0 , a1 , . . . , an−1 }, then an = e ∈ H,
and thus the positive integer m divides n. In either case, we have a clear picture
of the subgroups of G. Also note that this theorem was proved on page 15 for the
additive group Z.
24                                                           Groups       Chapter 2




Cosets      Suppose H is a subgroup of a group G. It will be shown below that H
partitions G into right cosets. It also partitions G into left cosets, and in general
these partitions are distinct.

Theorem        If H is a subgroup of a multiplicative group G, then a ∼ b defined by
a ∼ b iff a · b−1 ∈ H is an equivalence relation. If a ∈ G, cl(a) = {b ∈ G : a ∼ b} =
{h · a : h ∈ H} = Ha. Note that a · b−1 ∈ H iff b · a−1 ∈ H.
    If H is a subgroup of an additive group G, then a ∼ b defined by a ∼ b iff
(a − b) ∈ H is an equivalence relation. If a ∈ G, cl(a) = {b ∈ G : a ∼ b} = {h + a :
h ∈ H} = H + a. Note that (a − b) ∈ H iff (b − a) ∈ H.

Definition      These equivalence classes are called right cosets. If the relation is
defined by a ∼ b iff b−1 · a ∈ H, then the equivalence classes are cl(a) = aH and
they are called left cosets. H is a left and right coset. If G is abelian, there is no
distinction between right and left cosets. Note that b−1 · a ∈ H iff a−1 · b ∈ H.

   In the theorem above, H is used to define an equivalence relation on G, and thus
a partition of G. We now do the same thing a different way. We define the right
cosets directly and show they form a partition of G. You might find this easier.

Theorem        Suppose H is a subgroup of a multiplicative group G. If a ∈ G, define
the right coset containing a to be Ha = {h · a : h ∈ H}. Then the following hold.

1) Ha = H iff a ∈ H.
2) If b ∈ Ha, then Hb = Ha, i.e., if h ∈ H, then H(h · a) = (Hh)a = Ha.
3) If Hc ∩ Ha 6= ∅, then Hc = Ha.
4) The right cosets form a partition of G, i.e., each a in G belongs to one and
    only one right coset.
5) Elements a and b belong to the same right coset iff a · b−1 ∈ H iff b · a−1 ∈ H.

Proof    There is no better way to develop facility with cosets than to prove this
theorem. Also write this theorem for G an additive group.



Theorem       Suppose H is a subgroup of a multiplicative group G.
Chapter 2          Groups                                                               25

1)      Any two right cosets have the same number of elements. That is, if a, b ∈ G,
        f : Ha → Hb defined by f (h · a) = h · b is a bijection. Also any two left cosets
        have the same number of elements. Since H is a right and left coset, any
        two cosets have the same number of elements.

2)      G has the same number of right cosets as left cosets. The function F defined
        by F (Ha) = a−1 H is a bijection from the collection of right cosets to the left
        cosets. The number of right (or left) cosets is called the index of H in G.

3)      If G is finite, o(H) (index of H) = o(G) and so o(H) | o(G). In other words,
        o(G)/o(H) = the number of right cosets = the number of left cosets.

4)      If G is finite, and a ∈ G, then o(a) | o(G). (Proof: The order of a is the order
        of the subgroup generated by a, and by 3) this divides the order of G.)

5)      If G has prime order, then G is cyclic, and any element (except e) is a generator.
        (Proof: Suppose o(G) = p and a ∈ G, a 6= e. Then o(a) | p and thus o(a) = p.)

6)      If o(G) = n and a ∈ G, then an = e. (Proof: ao(a) = e and n = o(a) (o(G)/o(a)) .)




Exercises

i)       Suppose G is a cyclic group of order 4, G = {e, a, a2 , a3 } with a4 = e. Find the
         order of each element of G. Find all the subgroups of G.

ii)      Suppose G is the additive group Z and H = 3Z. Find the cosets of H.

iii)     Think of a circle as the interval [0, 1] with end points identified. Suppose G = R
         under addition and H = Z. Show that the collection of all the cosets of H
         can be thought of as a circle.

iv)      Let G = R2 under addition, and H be the subgroup defined by
         H = {(a, 2a) : a ∈ R}. Find the cosets of H. (See the last exercise on p 5.)

                                   Normal Subgroups

       We would like to make a group out of the collection of cosets of a subgroup H. In
26                                                            Groups       Chapter 2

general, there is no natural way to do that. However, it is easy to do in case H is a
normal subgroup, which is described below.

Theorem        If H is a subgroup of G, then the following are equivalent.

       1)   If a ∈ G, then aHa−1 = H
       2)   If a ∈ G, then aHa−1 ⊂ H
       3)   If a ∈ G, then aH = Ha
       4)   Every right coset is a left coset, i.e., if a ∈ G, ∃ b ∈ G with Ha = bH.

Proof      1) ⇒ 2) is obvious. Suppose 2) is true and show 3). We have (aHa−1 )a ⊂
Ha so aH ⊂ Ha. Also a(a−1 Ha) ⊂ aH so Ha ⊂ aH. Thus aH = Ha.
3) ⇒ 4) is obvious.      Suppose 4) is true and show 3). Ha = bH contains a, so
bH = aH because a coset is an equivalence class. Thus aH = Ha.
Finally, suppose 3) is true and show 1). Multiply aH = Ha on the right by a−1 .

Definition    If H satisfies any of the four conditions above, then H is said to be a
normal subgroup of G. (This concept goes back to Evariste Galois in 1831.)

Note      For any group G, G and e are normal subgroups. If G is an abelian group,
then every subgroup of G is normal.

Exercise      Show that if H is a subgroup of G with index 2, then H is normal.

Exercise      Show the intersection of a collection of normal subgroups of G is a
normal subgroup of G. Show the union of a monotonic collection of normal subgroups
of G is a normal subgroup of G.

Exercise       Let A ⊂ R2 be the square with vertices (−1, 1), (1, 1), (1, −1), and
(−1, −1), and G be the collection of all “isometries” of A onto itself. These are
bijections of A onto itself which preserve distance and angles, i.e., which preserve dot
product. Show that with multiplication defined as composition, G is a multiplicative
group. Show that G has four rotations, two reflections about the axes, and two
reflections about the diagonals, for a total of eight elements. Show the collection of
rotations is a cyclic subgroup of order four which is a normal subgroup of G. Show
that the reflection about the x-axis together with the identity form a cyclic subgroup
of order two which is not a normal subgroup of G. Find the four right cosets of this
subgroup. Finally, find the four left cosets of this subgroup.
Chapter 2       Groups                                                                  27

Quotient Groups         Suppose N is a normal subgroup of G, and C and D are
cosets. We wish to define a coset E which is the product of C and D. If c ∈ C and
d ∈ D, define E to be the coset containing c · d, i.e., E = N (c · d). The coset E does
not depend upon the choice of c and d. This is made precise in the next theorem,
which is quite easy.

Theorem        Suppose G is a multiplicative group, N is a normal subgroup, and
G/N is the collection of all cosets. Then (N a) · (N b) = N (a · b) is a well de-
fined multiplication (binary operation) on G/N , and with this multiplication, G/N
is a group. Its identity is N and (N a)−1 = (N a−1 ). Furthermore, if G is finite,
o(G/N ) = o(G)/o(N ).
Proof       Multiplication of elements in G/N is multiplication of subsets in G.
(N a) · (N b) = N (aN )b = N (N a)b = N (a · b). Once multiplication is well defined,
the group axioms are immediate.

Exercise     Write out the above theorem for G an additive group. In the additive
abelian group R/Z, determine those elements of finite order.

Example          Suppose G = Z under +, n > 1, and N = nZ. Zn , the group of
integers mod n is defined by Zn = Z/nZ. If a is an integer, the coset a + nZ is
denoted by [a]. Note that [a] + [b] = [a + b], −[a] = [−a], and [a] = [a + nl] for any
integer l. Any additive abelian group has a scalar multiplication over Z, and in this
case it is just [a]m = [am]. Note that [a] = [r] where r is the remainder of a divided
by n, and thus the distinct elements of Zn are [0], [1], ..., [n − 1]. Also Zn is cyclic
because each of [1] and [−1] = [n − 1] is a generator. We already know that if p is a
prime, any non-zero element of Zp is a generator, because Zp has p elements.

Theorem        If n > 1 and a is any integer, then [a] is a generator of Zn iff (a, n) = 1.
Proof        The element [a] is a generator iff the subgroup generated by [a] contains
[1] iff ∃ an integer k such that [a]k = [1] iff ∃ integers k and l such that ak + nl = 1.


Exercise       Show that a positive integer is divisible by 3 iff the sum of its digits is
divisible by 3. Note that [10] = [1] in Z3 . (See the fifth exercise on page 18.)

                                  Homomorphisms

   Homomorphisms are functions between groups that commute with the group op-
erations. It follows that they honor identities and inverses. In this section we list
28                                                              Groups          Chapter 2

the basic properties. Properties 11), 12), and 13) show the connections between coset
groups and homomorphisms, and should be considered as the cornerstones of abstract
algebra. As always, the student should rewrite the material in additive notation.

Definition        If G and Ḡ are multiplicative groups, a function f : G → Ḡ is a
homomorphism if, for all a, b ∈ G, f (a · b) = f (a) · f (b). On the left side, the group
operation is in G, while on the right side it is in Ḡ. The kernel of f is defined by
ker(f ) = f −1 (ē) = {a ∈ G : f (a) = ē}. In other words, the kernel is the set of
solutions to the equation f (x) = ē. (If Ḡ is an additive group, ker(f ) = f −1 (0).)
                                                                                    ¯
Examples       The constant map f : G → Ḡ defined by f (a) = ē is a homomorphism.
If H is a subgroup of G, the inclusion i : H → G is a homomorphism. The function
f : Z → Z defined by f (t) = 2t is a homomorphism of additive groups, while the
function defined by f (t) = t + 2 is not a homomorphism. The function h : Z → R − 0
defined by h(t) = 2t is a homomorphism from an additive group to a multiplicative
group.



    We now catalog the basic properties of homomorphisms. These will be helpful
later on in the study of ring homomorphisms and module homomorphisms.

Theorem            Suppose G and Ḡ are groups and f : G → Ḡ is a homomorphism.

1)   f (e) = ē.

2)   f (a−1 ) = f (a)−1 . The first inverse is in G, and the second is in Ḡ.

3)   f is injective ⇔ ker(f ) = e.

4)   If H is a subgroup of G, f (H) is a subgroup of Ḡ. In particular, image(f ) is
     a subgroup of Ḡ.

5)   If H̄ is a subgroup of Ḡ, f −1 (H̄) is a subgroup of G. Furthermore, if H̄ is
     normal in Ḡ, then f −1 (H̄) is normal in G.

6)   The kernel of f is a normal subgroup of G.

7)   If ḡ ∈ Ḡ, f −1 (ḡ) is void or is a coset of ker(f ), i.e., if f (g) = ḡ then
     f −1 (ḡ) = N g where N = ker(f ). In other words, if the equation f (x) = ḡ has a
Chapter 2       Groups                                                                 29

     solution, then the set of all solutions is a coset of N = ker(f ). This is a key fact
     which is used routinely in topics such as systems of equations and linear
     differential equations.
                                                                                   =
8)   The composition of homomorphisms is a homomorphism, i.e., if h : Ḡ →G is
                                     =
     a homomorphism, then h ◦ f : G →G is a homomorphism.

9)   If f : G → Ḡ is a bijection, then the function f −1 : Ḡ → G is a homomorphism.
     In this case, f is called an isomorphism, and we write G ≈ Ḡ. In the case
     G = Ḡ, f is also called an automorphism.

10) Isomorphisms preserve all algebraic properties. For example, if f is an
    isomorphism and H ⊂ G is a subset, then H is a subgroup of G
    iff f (H) is a subgroup of Ḡ, H is normal in G iff f (H) is normal in Ḡ, G is
    cyclic iff Ḡ is cyclic, etc. Of course, this is somewhat of a cop-out, because an
    algebraic property is one that, by definition, is preserved under isomorphisms.

11) Suppose H is a normal subgroup of G. Then π : G → G/H defined by
    π(a) = Ha is a surjective homomorphism with kernel H. Furthermore, if
    f : G → Ḡ is a surjective homomorphism with kernel H, then G/H ≈ Ḡ
    (see below).

12) Suppose H is a normal subgroup of G. If H ⊂ ker(f ), then f¯ : G/H → Ḡ
    defined by f¯(Ha) = f (a) is a well-defined homomorphism making
    the following diagram commute.

                                             f      - Ḡ
                                       G
                                                   >
                                                    
                                   π           
                                             ¯
                                            f
                                       ?
                                   G/H
     Thus defining a homomorphism on a quotient group is the same as defining a
     homomorphism on the numerator which sends the denominator to ē. The
     image of f¯ is the image of f and the kernel of f¯ is ker(f )/H. Thus if H = ker(f ),
     f¯ is injective, and thus G/H ≈ image(f ).

13) Given any group homomorphism f , domain(f )/ker(f ) ≈ image(f ). This is
    the fundamental connection between quotient groups and homomorphisms.
30                                                            Groups       Chapter 2

14) Suppose K is a group. Then K is an infinite cycle group iff K is isomorphic to
    the integers under addition, i.e., K ≈ Z. K is a cyclic group of order n iff
    K ≈ Zn .

Proof of 14)      Suppose Ḡ = K is generated by some element a. Then f : Z → K
defined by f (m) = am is a homomorphism from an additive group to a multiplicative
group. If o(a) is infinite, f is an isomorphism. If o(a) = n, ker(f ) = nZ and
f¯ : Zn → K is an isomorphism.

Exercise     If a is an element of a group G, there is always a homomorphism from Z
to G which sends 1 to a. When is there a homomorphism from Zn to G which sends [1]
to a? What are the homomorphisms from Z2 to Z6 ? What are the homomorphisms
from Z4 to Z8 ?

Exercise      Suppose G is a group and g is an element of G, g 6= e.
1)   Under what conditions on g is there a homomorphism f : Z7 → G with
     f ([1]) = g ?

2)   Under what conditions on g is there a homomorphism f : Z15 → G with
     f ([1]) = g ?

3)   Under what conditions on G is there an injective homomorphism f : Z15 → G ?

4)   Under what conditions on G is there a surjective homomorphism f : Z15 → G ?


Exercise     We know every finite group of prime order is cyclic and thus abelian.
Show that every group of order four is abelian.

Exercise       Let G = {h : [0, 1] → R : h has an infinite number of derivatives}.
Then G is a group under addition. Define f : G → G by f (h) = dh     dt
                                                                        = h0 . Show f
is a homomorphism and find its kernel and image. Let g : [0, 1] → R be defined by
g(t) = t3 − 3t + 4. Find f −1 (g) and show it is a coset of ker(f ).

Exercise       Let G be as above and g ∈ G. Define f : G → G by f (h) = h00 + 5h0 +
6t2 h. Then f is a group homomorphism and the differential equation h00 +5h0 +6t2 h =
g has a solution iff g lies in the image of f . Now suppose this equation has a solution
and S ⊂ G is the set of all solutions. For which subgroup H of G is S an H-coset?
Chapter 2       Groups                                                             31

Exercise     Suppose G is a multiplicative group and a ∈ G. Define f : G → G to
be conjugation by a, i.e., f (g) = a−1 · g · a. Show that f is a homomorphism. Also
show f is an automorphism and find its inverse.

                                  Permutations

    Suppose X is a (non-void) set. A bijection f : X → X is called a permutation
on X, and the collection of all these permutations is denoted by S = S(X). In this
setting, variables are written on the left, i.e., f = (x)f . Therefore the composition
f ◦ g means “f followed by g”. S(X) forms a multiplicative group under composition.

Exercise      Show that if there is a bijection between X and Y , there is an iso-
morphism between S(X) and S(Y ). Thus if each of X and Y has n elements,
S(X) ≈ S(Y ), and these groups are called the symmetric groups on n elements.
They are all denoted by the one symbol Sn .

Exercise      Show that o(Sn ) = n!. Let X = {1, 2, ..., n}, Sn = S(X), and H =
{f ∈ Sn : (n)f = n}. Show H is a subgroup of Sn which is isomorphic to Sn−1 . Let
g be any permutation on X with (n)g = 1. Find g −1 Hg.

   The next theorem shows that the symmetric groups are incredibly rich and com-
plex.

Theorem       (Cayley’s Theorem)       Suppose G is a multiplicative group with n
elements and Sn is the group of all permutations on the set G. Then G is isomorphic
to a subgroup of Sn .
Proof     Let h : G → Sn be the function which sends a to the bijection ha : G → G
defined by (g)ha = g · a. The proof follows from the following observations.

       1)   For each given a, ha is a bijection from G to G.
       2)   h is a homomorphism, i.e., ha·b = ha ◦ hb .
       3)   h is injective and thus G is isomorphic to image(h) ⊂ Sn .




The Symmetric Groups               Now let n ≥ 2 and let Sn be the group of all permu-
tations on {1, 2, ..., n}. The following definition shows that each element of Sn may
32                                                                     Groups         Chapter 2

be represented by a matrix.

Definition      Suppose 1 < k ≤ n, {a1 , a2 , ..., ak } is a collection of distinct inte-
gers with 1 ≤ ai ≤ n, and {b1 , b!2 , ..., bk } is the same collection in some different order.
                   a1 a2 ... ak
Then the matrix                     represents f ∈ Sn defined by (ai )f = bi for 1 ≤ i ≤ k,
                   b1 b2 ... bk
and (a)f = a for all other a. The composition of two permutations is computed by
applying the matrix on the left first and the matrix on the right second.

   There is a special type of permutation called a cycle. For these we have a special
notation.
                                     !
                   a1 a2 ...ak−1 ak
Definition                          is called a k-cycle, and is denoted by (a1 , a2 , ..., ak ).
                   a2 a3 ...ak a1
A 2-cycle is called a transposition. The cycles (a1 , ..., ak ) and (c1 , ..., c` ) are disjoint
provided ai 6= cj for all 1 ≤ i ≤ k and 1 ≤ j ≤ `.

    Listed here are eight basic properties of permutations. They are all easy except
4), which takes a little work. Properties 9) and 10) are listed solely for reference.

Theorem

1)   Disjoint cycles commute. (This is obvious.)

2)   Every nonidentity permutation can be written uniquely (except for order) as
     the product of disjoint cycles. (This is easy.)

3)   Every permutation can be written (non-uniquely) as the product of transposi-
     tions. (Proof: I = (1, 2)(1, 2) and (a1 , ..., ak ) = (a1 , a2 )(a1 , a3 ) · · · (a1 , ak ). )

4)   The parity of the number of these transpositions is unique. This means that if
     f is the product of p transpositions and also of q transpositions, then p is
     even iff q is even. In this case, f is said to be an even permutation. In the other
     case, f is an odd permutation.

5)   A k-cycle is even (odd) iff k is odd (even). For example (1, 2, 3) = (1, 2)(1, 3) is
     an even permutation.

6)   Suppose f, g ∈ Sn . If one of f and g is even and the other is odd, then g ◦ f is
Chapter 2        Groups                                                                           33

     odd. If f and g are both even or both odd, then g ◦ f is even. (Obvious.)

7)   The map h : Sn → Z2 defined by h(even)= [0] and h(odd)= [1] is a
     homomorphism from a multiplicative group to an additive group. Its kernel (the
     subgroup of even permutations) is denoted by An and is called the alternating
     group. Thus An is a normal subgroup of index 2, and Sn /An ≈ Z2 .

8)   If a, b, c and d are distinct integers in {1, 2, . . . , n}, then (a, b)(b, c) = (a, c, b)
     and (a, b)(c, d) = (a, c, d)(a, c, b). Since I = (1, 2, 3)3 , it follows that for
     n ≥ 3, every even permutation is the product of 3-cycles.

The following parts are not included in this course. They are presented here merely
for reference.

9)   For any n 6= 4, An is simple, i.e., has no proper normal subgroups.

10) Sn can be generated by two elements. In fact, {(1, 2), (1, 2, ..., n)} generates Sn .
    (Of course there are subgroups of Sn which cannot be generated by two
    elements).

Proof of 4)           It suffices to prove if the product of t transpositions is the identity I
on {1, 2, . . . , n}, then t is even. Suppose this is false and I is written as t transposi-
tions, where t is the smallest odd integer this is possible. Since t is odd, it is at least 3.
Suppose for convenience the first transposition is (a, n). We will rewrite I as a prod-
uct of transpositions σ1 σ2 · · · σt where (n)σi = (n) for 1 ≤ i < t and (n)σt 6= n, which
will be a contradiction. This can be done by inductively “pushing n to the right”
using the equations below. If a, b, and c are distinct integers in {1, 2, . . . , n − 1},
then (a, n)(a, n) = I, (a, n)(b, n) = (a, b)(a, n), (a, n)(a, c) = (a, c)(c, n), and
(a, n)(b, c) = (b, c)(a, n). Note that (a, n)(a, n) cannot occur here because it would
result in a shorter odd product. (Now you may solve the tile puzzle on page viii.)

Exercise
                                        !
              1 2 3 4 5 6 7
1)   Write                            as the product of disjoint cycles.
              6 5 4 3 1 7 2
     Write (1,5,6,7)(2,3,4)(3,7,1) as the product of disjoint cycles.
     Write (3,7,1)(1,5,6,7)(2,3,4) as the product of disjoint cycles.
     Which of these permutations are odd and which are even?
34                                                                    Groups         Chapter 2

2)   Suppose (a1 , . . . , ak ) and (c1 , . . . , c` ) are disjoint cycles. What is the order of
     their product?

3)   Suppose σ ∈ Sn . Show that σ −1 (1, 2, 3)σ = ((1)σ, (2)σ, (3)σ). This shows
     that conjugation by σ is just a type of relabeling. Also let τ = (4, 5, 6) and
     find τ −1 (1, 2, 3, 4, 5)τ .

4)   Show that H = {σ ∈ S6 : (6)σ = 6} is a subgroup of S6 and find its right
     cosets and its left cosets.

5)   Let A ⊂ R2 be the square with vertices (−1, 1), (1, 1), (1, −1), and (−1, −1),
     and G be the collection of all isometries of A onto itself. We know from a
     previous exercise that G is a group with eight elements. It follows from Cayley’s
     theorem that G is isomorphic to a subgroup of S8 . Show that G is isomorphic
     to a subgroup of S4 .

6)   If G is a multiplicative group, define a new multiplication on the set G by
     a ◦ b = b · a. In other words, the new multiplication is the old multiplication
     in the opposite order. This defines a new group denoted by Gop , the opposite
     group. Show that it has the same identity and the same inverses as G, and
     that f : G → Gop defined by f (a) = a−1 is a group isomorphism. Now consider
     the special case G = Sn . The convention used in this section is that an element
     of Sn is a permutation on {1, 2, . . . , n} with the variable written on the left.
     Show that an element of Snop is a permutation on {1, 2, . . . , n} with the variable
     written on the right. (Of course, either Sn or Snop may be called the symmetric
     group, depending on personal preference or context.)

                                   Product of Groups

    The product of groups is usually presented for multiplicative groups. It is pre-
sented here for additive groups because this is the form that occurs in later chapters.
As an exercise, this section should be rewritten using multiplicative notation. The
two theorems below are transparent and easy, but quite useful. For simplicity we
first consider the product of two groups, although the case of infinite products is only
slightly more difficult. For background, read first the two theorems on page 11.

Theorem          Suppose G1 and G2 are additive groups. Define an addition on G1 × G2
by (a1 , a2 ) + (b1 , b2 ) = (a1 + b1 , a2 + b2 ). This operation makes G1 × G2 into a group.
Its “zero” is (01 , 02 ) and −(a1 , a2 ) = (−a1 , −a2 ). The projections π1 : G1 × G2 → G1
                 ¯ ¯
Chapter 2         Groups                                                                      35

and π2 : G1 × G2 → G2 are group homomorphisms. Suppose G is an additive group.
We know there is a bijection from {functions f : G → G1 × G2 } to {ordered pairs of
functions (f1 , f2 ) where f1 : G → G1 and f2 : G → G2 }. Under this bijection, f is a
group homomorphism iff each of f1 and f2 is a group homomorphism.

Proof         It is transparent that the product of groups is a group, so let’s prove
the last part. Suppose G, G1 , and G2 are groups and f = (f1 , f2 ) is a function
from G to G1 × G2 . Now f (a + b) = (f1 (a + b), f2 (a + b)) and f (a) + f (b) =
(f1 (a), f2 (a)) + (f1 (b), f2 (b)) = (f1 (a) + f1 (b), f2 (a) + f2 (b)). An examination of these
two equations shows that f is a group homomorphism iff each of f1 and f2 is a group
homomorphism.

Exercise       Suppose G1 and G2 are groups. Show that G1 × G2 and G2 × G1 are
isomorphic.

Exercise       If o(a1 ) = m and o(a2 ) = n, find the order of (a1 , a2 ) in G1 × G2 .

Exercise     Show that if G is any group of order 4, G is isomorphic to Z4 or Z2 ×Z2 .
Show Z4 is not isomorphic to Z2 × Z2 . Show Z12 is isomorphic to Z4 × Z3 . Finally,
show that Zmn is isomorphic to Zm × Zn iff (m, n) = 1.

Exercise          Suppose G1 and G2 are groups and i1 : G1 → G1 × G2 is defined by
i1 (g1 ) = (g1 , 02 ). Show i1 is an injective group homomorphism and its image is a
                 ¯
normal subgroup of G1 × G2 . Usually G1 is identified with its image under i1 , so G1
may be considered to be a normal subgroup of G1 × G2 . Let π2 : G1 × G2 → G2
be the projection map defined in the Background chapter. Show π2 is a surjective
homomorphism with kernel G1 . Therefore (G1 × G2 )/G1 ≈ G2 as you would expect.



Exercise    Let R be the reals under addition. Show that the addition in the
product R × R is just the usual addition in analytic geometry.

Exercise     Suppose n > 2. Is Sn isomorphic to An × G where G is a multiplicative
group of order 2 ?

   One nice thing about the product of groups is that it works fine for any finite
number, or even any infinite number. The next theorem is stated in full generality.
36                                                             Groups       Chapter 2

Theorem       Suppose T is anYindex set, and for any t ∈ T , Gt is an additive
group. Define an addition on   Gt = Gt by {at } + {bt } = {at + bt }. This op-
                                    Q

                                  t∈T
eration makes the product into a group. Its “zero” is {0̄t } and −{at } = {−at }.
Each projection πs : Gt → Gs is a group homomorphism. Suppose G is an ad-
                      Q

ditive group. Under the natural bijection from {functions f : G →              Gt } to
                                                                             Q

{sequences of functions {ft }t∈T where ft : G → Gt }, f is a group homomorphism
iff each ft is a group homomorphism.        Finally, the scalar multiplication on Gt
                                                                                  Q

by integers is given coordinatewise, i.e., {at }n = {at n}.

Proof      The addition on       Gt is coordinatewise.
                             Q


Exercise      Suppose s is an element of T and πs : Gt → Gs is the projection map
                                                         Q

defined in the Background chapter. Show πs is a surjective homomorphism and find
its kernel.

Exercise     Suppose s is an element of T and is : Gs → Gt is defined by is (a) =
                                                             Q

{at } where at = 0 if t 6= s and as = a. Show is is an injective homomorphism
                   ¯
and its image is a normal subgroup of   Gt . Thus each Gs may be considered to be
                                      Q

a normal subgroup of     Gt .
                       Q


Exercise      Let f : Z → Z30 × Z100 be the homomorphism defined by f (m) =
([4m], [3m]). Find the kernel of f. Find the order of ([4], [3]) in Z30 × Z100 .

Exercise       Let f : Z → Z90 × Z70 × Z42 be the group homomorphism defined by
f (m) = ([m], [m], [m]). Find the kernel of f and show that f is not surjective. Let
g : Z → Z45 × Z35 × Z21 be defined by g(m) = ([m], [m], [m]). Find the kernel of
g and determine if g is surjective. Note that the gcd of {45, 35, 21} is 1. Now let
h : Z → Z8 × Z9 × Z35 be defined by h(m) = ([m], [m], [m]). Find the kernel of h
and show that h is surjective. Finally suppose each of b, c, and d is greater than 1
and f : Z → Zb × Zc × Zd is defined by f (m) = ([m], [m], [m]). Find necessary and
sufficient conditions for f to be surjective (see the first exercise on page 18).

Exercise        Suppose T is a non-void set, G is an additive group, and GT is the
collection of all functions f : T → G with addition defined by (f + g)(t) = f (t) + g(t).
Show GT isYa group. For each t ∈ T , let Gt = G. Note that GT is just another way
of writing      Gt . Also note that if T = [0, 1] and G = R, the addition defined on
           t∈T
GT is just the usual addition of functions used in calculus. (For the ring and module
versions, see exercises on pages 44 and 69.)
Chapter 3
Rings

Rings are additive abelian groups with a second operation called multiplication. The
connection between the two operations is provided by the distributive law. Assuming
the results of Chapter 2, this chapter flows smoothly. This is because ideals are also
normal subgroups and ring homomorphisms are also group homomorphisms. We do
not show that the polynomial ring F [x] is a unique factorization domain, although
with the material at hand, it would be easy to do. Also there is no mention of prime
or maximal ideals, because these concepts are unnecessary for our development of
linear algebra. These concepts are developed in the Appendix. A section on Boolean
rings is included because of their importance in logic and computer science.

   Suppose R is an additive abelian group, R 6= 0, and R has a second binary
                                                   ¯
operation (i.e., map from R × R to R) which is denoted by multiplication. Consider
the following properties.
       1)     If a, b, c ∈ R, (a · b) · c = a · (b · c). (The associative property
              of multiplication.)
       2)     If a, b, c ∈ R, a · (b + c) = (a · b) + (a · c) and (b + c) · a = (b · a) + (c · a).
              (The distributive law, which connects addition and
              multiplication.)
       3)     R has a multiplicative identity, i.e., there is an element
              1 = 1R ∈ R such that if a ∈ R, a · 1 = 1 · a = a.
              ¯ ¯                                        ¯ ¯
       4)     If a, b ∈ R, a · b = b · a. (The commutative property for
              multiplication.)
Definition        If 1), 2), and 3) are satisfied, R is said to be a ring. If in addition 4)
is satisfied, R is said to be a commutative ring.

Examples        The basic commutative rings in mathematics are the integers Z, the

                                             37
38                                                                  Rings       Chapter 3

rational numbers Q, the real numbers R, and the complex numbers C. It will be shown
later that Zn , the integers mod n, has a natural multiplication under which it is a
commutative ring. Also if R is any commutative ring, we will define R[x1 , x2 , . . . , xn ],
a polynomical ring in n variables. Now suppose R is any ring, n ≥ 1, and Rn is the
collection of all n×n matrices over R. In the next chapter, operations of addition and
multiplication of matrices will be defined. Under these operations, Rn is a ring. This
is a basic example of a non-commutative ring. If n > 1, Rn is never commutative,
even if R is commutative.

    The next two theorems show that ring multiplication behaves as you would wish
it to. They should be worked as exercises.

Theorem         Suppose R is a ring and a, b ∈ R.

       1)     a · 0 = 0 · a = 0. Since R 6= 0, it follows that 1 6= 0.
                  ¯ ¯         ¯              ¯                 ¯ ¯
       2)     (−a) · b = a · (−b) = −(a · b).


   Recall that, since R is an additive abelian group, it has a scalar multiplication
over Z (page 20). This scalar multiplication can be written on the right or left, i.e.,
na = an, and the next theorem shows it relates nicely to the ring multiplication.

Theorem         Suppose a, b ∈ R and n, m ∈ Z.

       1)    (na) · (mb) = (nm)(a · b). (This follows from the distributive
             law and the previous theorem.)

       2)    Let n = n1. For example, 2 = 1 + 1. Then na = n · a, that is, scalar
                 ¯     ¯                ¯ ¯ ¯                  ¯
             multiplication by n is the same as ring multiplication by n.
                                                                       ¯
             Of course, n may be 0 even though n 6= 0.
                         ¯        ¯

                                          Units

Definition   An element a of a ring R is a unit provided ∃ an element a−1 ∈ R
with a · a = a−1 · a = 1.
          −1
                       ¯

Theorem        0 can never be a unit. 1 is always a unit. If a is a unit, a−1 is also a
               ¯                      ¯
unit with (a−1 )−1 = a. The product of units is a unit with (a · b)−1 = b−1 · a−1 . More
Chapter 3         Rings                                                                          39

generally, if a1 , a2 , ..., an are units, then their product is a unit with (a1 · a2 · · · an )−1 =
      −1          −1
a−1
 n · an−1 · · · a1 . The set of all units of R forms a multiplicative group denoted by
R∗ . Finally if a is a unit, (−a) is a unit and (−a)−1 = −(a−1 ).

    In order for a to be a unit, it must have a two-sided inverse. It suffices to require
a left inverse and a right inverse, as shown in the next theorem.

Theorem        Suppose a ∈ R and ∃ elements b and c with b · a = a · c = 1. Then
                                                                         ¯
b = c and so a is a unit with a−1 = b = c.

Proof       b = b · 1 = b · (a · c) = (b · a) · c = 1 · c = c.
                    ¯                               ¯

Corollary        Inverses are unique.




Domains and Fields         In order to define these two types of rings, we first consider
the concept of zero divisor.

Definition        Suppose R is a commutative ring. An element a ∈ R is called a zero
divisor provided it is non-zero and ∃ a non-zero element b with a · b = 0. Note that
                                                                        ¯
if a is a unit, it cannot be a zero divisor.

Theorem       Suppose R is a commutative ring and a ∈ (R − 0) is not a zero divisor.
                                                              ¯
Then (a · b = a · c) ⇒ b = c. In other words, multiplication by a is an injective map
from R to R. It is surjective iff a is a unit.

Definition       A domain (or integral domain) is a commutative ring such that, if
a 6= 0, a is not a zero divisor. A field is a commutative ring such that, if a 6= 0, a is
     ¯                                                                            ¯
a unit. In other words, R is a field if it is commutative and its non-zero elements
form a group under multiplication.

Theorem          A field is a domain. A finite domain is a field.
Proof      A field is a domain because a unit cannot be a zero divisor. Suppose R is
a finite domain and a 6= 0. Then f : R → R defined by f (b) = a · b is injective and,
                          ¯
by the pigeonhole principle, f is surjective. Thus a is a unit and so R is a field.
40                                                                 Rings       Chapter 3

Exercise         Let C be the additive abelian group R2 . Define multiplication by
(a, b) · (c, d) = (ac − bd, ad + bc). Show C is a commutative ring which is a field.
Note that 1 = (1, 0) and if i = (0, 1), then i2 = −1̄.
              ¯

Examples        Z is a domain. Q, R, and C are fields.

                                 The Integers Mod n

     The concept of integers mod n is fundamental in mathematics. It leads to a neat
little theory, as seen by the theorems below. However, the basic theory cannot be
completed until the product of rings is defined. (See the Chinese Remainder Theorem
on page 50.) We know from page 27 that Zn is an additive abelian group.

Theorem         Suppose n > 1. Define a multiplication on Zn by [a] · [b] = [ab]. This
is a well defined binary operation which makes Zn into a commutative ring.
Proof       Since [a + kn] · [b + l n] = [ab + n(al + bk + kl n)] = [ab], the multiplication
is well-defined. The ring axioms are easily verified.

Theorem        Suppose n > 1 and a ∈ Z. Then the following are equivalent.

       1)   [a] is a generator of the additive group Zn .
       2)   (a, n) = 1.
       3)   [a] is a unit of the ring Zn .

Proof       We already know from page 27 that 1) and 2) are equivalent. Recall that
if b is an integer, [a]b = [a] · [b] = [ab]. Thus 1) and 3) are equivalent, because each
says ∃ an integer b with [a]b = [1].

Corollary       If n > 1, the following are equivalent.

       1)   Zn is a domain.
       2)   Zn is a field.
       3)   n is a prime.

Proof      We already know 1) and 2) are equivalent, because Zn is finite. Suppose
3) is true. Then by the previous theorem, each of [1], [2],...,[n − 1] is a unit, and
thus 2) is true. Now suppose 3) is false. Then n = ab where 1 < a < n, 1 < b < n,
Chapter 3         Rings                                                                        41

[a][b] = [0], and thus [a] is a zero divisor and 1) is false.

Exercise        List the units and their inverses for Z7 and Z12 . Show that (Z7 )∗ is
a cyclic group but (Z12 )∗ is not. Show that in Z12 the equation x2 = 1 has four
                                                                          ¯
solutions. Finally show that if R is a domain, x2 = 1 can have at most two solutions
                                                      ¯
in R (see the first theorem on page 46).



Subrings       Suppose S is a subset of a ring R. The statement that S is a subring
of R means that S is a subgroup of the group R, 1 ∈ S , and (a, b ∈ S ⇒ a · b ∈ S).
                                                      ¯
Then clearly S is a ring and has the same multiplicative identity as R. Note that Z
is a subring of Q, Q is a subring of R, and R is a subring of C. Subrings do not play
a role analogous to subgroups. That role is played by ideals, and an ideal is never a
subring (unless it is the entire ring). Note that if S is a subring of R and s ∈ S, then
s may be a unit in R but not in S. Note also that Z and Zn have no proper subrings,
and thus occupy a special place in ring theory, as well as in group theory.

                              Ideals and Quotient Rings

     Ideals in ring theory play a role analagous to normal subgroups in group theory.
                                                         
                                                left
                                                         
                                                          
Definition       A subset I of a ring R is a
                                          right       ideal provided it is a subgroup
                                          2−sided 
                                               
                                                   
                                                                             
                                                         a·b ∈ I
                                                                             
                                                                              
of the additive group R and if a ∈ R and b ∈ I, then      b·a∈I                 . The
                                                          a · b and b · a ∈ I 
                                                        
                                                                             

word “ideal ” means “2-sided ideal”. Of course, if R is commutative, every right or
left ideal is an ideal.

Theorem         Suppose R is a ring.

1)    R and 0 are ideals of R. These are called the improper ideals.
            ¯
                                                                               \
2)    If {It }t∈T is a collection of right (left, 2-sided) ideals of R, then         It is a
                                                                               t∈T
      right (left, 2-sided) ideal of R. (See page 22.)
42                                                                 Rings        Chapter 3
                                                         [
3)   Furthermore, if the collection is monotonic, then         It is a right (left, 2-sided)
                                                         t∈T
     ideal of R.

4)   If a ∈ R, I = aR is a right ideal. Thus if R is commutative, aR is an ideal,
     called a principal ideal. Thus every subgroup of Z is a principal ideal,
     because it is of the form nZ.

5)   If R is a commutative ring and I ⊂ R is an ideal, then the following are
     equivalent.
         i) I = R.
         ii) I contains some unit u.
         iii) I contains 1.
                         ¯

Exercise     Suppose R is a commutative ring. Show that R is a field iff R contains
no proper ideals.

    The following theorem is just an observation, but it is in some sense the beginning
of ring theory.

Theorem         Suppose R is a ring and I ⊂ R is an ideal, I 6= R. Since I is a normal
subgroup of the additive group R, R/I is an additive abelian group. Multiplication
of cosets defined by (a + I) · (b + I) = (ab + I) is well-defined and makes R/I a ring.
Proof       (a + I) · (b + I) = a · b + aI + Ib + II ⊂ a · b + I. Thus multiplication
is well defined, and the ring axioms are easily verified. The multiplicative identity is
(1 + I).
 ¯

Observation       If R = Z, n > 1, and I = nZ, the ring structure on Zn = Z/nZ
is the same as the one previously defined.

                                 Homomorphisms

Definition    Suppose R and R̄ are rings. A function f : R → R̄ is a ring homo-
morphism provided

       1)   f is a group homomorphism
       2)   f (1R ) = 1R̄ and
               ¯      ¯
       3)   if a, b ∈ R then f (a · b) = f (a) · f (b). (On the left, multiplication
Chapter 3       Rings                                                         43

            is in R, while on the right multiplication is in R̄.)

The kernel of f is the kernel of f considered as a group homomorphism, namely
ker(f ) = f −1 (0).
                ¯



   Here is a list of the basic properties of ring homomorphisms. Much of this
work has already been done by the theorem in group theory on page 28.

Theorem       Suppose each of R and R̄ is a ring.

1)   The identity map IR : R → R is a ring homomorphism.

2)   The zero map from R to R̄ is not a ring homomorphism
     (because it does not send 1R to 1R̄ ).
                               ¯     ¯
3)   The composition of ring homomorphisms is a ring homomorphism.

4)   If f : R → R̄ is a bijection which is a ring homomorphism,
     then f −1 : R̄ → R is a ring homomorphism. Such an f is called
     a ring isomorphism. In the case R = R̄, f is also called a
     ring automorphism.

5)   The image of a ring homomorphism is a subring of the range.

6)   The kernel of a ring homomorphism is an ideal of the domain.
     In fact, if f : R → R̄ is a homomorphism and I ⊂ R̄ is an ideal,
     then f −1 (I) is an ideal of R.

7)   Suppose I is an ideal of R, I 6= R, and π : R → R/I is the
     natural projection, π(a) = (a + I). Then π is a surjective ring
     homomorphism with kernel I. Furthermore, if f : R → R̄ is a surjective
     ring homomorphism with kernel I, then R/I ≈ R̄ (see below).

8)   From now on the word “homomorphism” means “ring homomorphism”.
     Suppose f : R → R̄ is a homomorphism and I is an ideal of R, I 6= R.
     If I ⊂ ker(f ), then f¯ : R/I → R̄ defined by f¯(a + I) = f (a)
44                                                               Rings     Chapter 3

     is a well-defined homomorphism making the following diagram commute.

                                            f
                                   R                   -    R̄
                                                       >
                                                        
                                                   
                               π               
                                           
                                           f¯
                                   ? 
                                 R/I

     Thus defining a homomorphism on a quotient ring is the same as
     defining a homomorphism on the numerator which sends the
     denominator to zero. The image of f¯ is the image of f , and
     the kernel of f¯ is ker(f )/I. Thus if I = ker(f ), f¯ is
     injective, and so R/I ≈ image (f ).

     Proof We know all this on the group level, and it is only necessary
     to check that f¯ is a ring homomorphism, which is obvious.

9)   Given any ring homomorphism f, domain(f )/ker(f ) ≈ image(f ).

Exercise     Find a ring R with an ideal I and an element b such that b is not a unit
in R but (b + I) is a unit in R/I.

Exercise    Show that if u is a unit in a ring R, then conjugation by u is an
automorphism on R. That is, show that f : R → R defined by f (a) = u−1 · a · u is
a ring homomorphism which is an isomorphism.

Exercise        Suppose T is a non-void set, R is a ring, and RT is the collection of
all functions f : T → R. Define addition and multiplication on RT point-wise. This
means if f and g are functions from T to R, then (f + g)(t) = f (t) + g(t) and
(f · g)(t) = f (t)g(t). Show that under these operations R T is a ring. Suppose S is a
non-void set and α : S → T is a function. If f : T → R is a function, define a function
α∗ (f ) : S → R by α∗ (f ) = f ◦ α. Show α∗ : RT → RS is a ring homomorphism.

Exercise       Now consider the case T = [0, 1] and R = R. Let A ⊂ R[0,1] be the
collection of all C ∞ functions, i.e., A ={f : [0, 1] → R : f has an infinite number of
derivatives}. Show A is a ring. Notice that much of the work has been done in the
previous exercise. It is only necessary to show that A is a subring of the ring R[0,1] .
Chapter 3        Rings                                                                   45

                                  Polynomial Rings

     In calculus, we consider real functions f which are polynomials, f (x ) = a0 + a1 x +
· · +an x n . The sum and product of polynomials are again polynomials, and it is easy
to see that the collection of polynomial functions forms a commutative ring. We can
do the same thing formally in a purely algebraic setting.

Definition              Suppose R is a commutative ring and x is a “variable” or “symbol”.
The polynomial ring R[x ] is the collection of all polynomials f = a0 + a1 x + · · +an x n
where ai ∈ R. Under the obvious addition and multiplication, R[x ] is a commutative
ring. The degree of a non-zero polynomial f is the largest integer n such that an 6= 0,
                                                                                           ¯
and is denoted by n = deg(f ). If the top term an = 1, then f is said to be monic.
                                                                           ¯
     To be more formal, think of a polynomial a0 + a1 x + · · · as an infinite sequence
(a0 , a1 , ...) such that each ai ∈ R and only a finite number are non-zero. Then
(a0 , a1 , ...) + (b0 , b1 , ...) = (a0 + b0 , a1 + b1 , ...) and
(a0 , a1 , ...) · (b0 , b1 , ...) = (a0 b0 , a0 b1 + a1 b0 , a0 b2 + a1 b1 + a2 b0 , ...).
Note that on the right, the ring multiplication a · b is written simply as ab, as is
often done for convenience.




Theorem        If R is a domain, R[x ] is also a domain.

Proof     Suppose f and g are non-zero polynomials. Then deg(f )+deg(g) = deg(f g)
and thus f g is not 0. Another way to prove this theorem is to look at the bottom
                    ¯
terms instead of the top terms. Let ai xi and bj xj be the first non-zero terms of f
and g. Then ai bj xi+j is the first non-zero term of f g.

Theorem         (The Division Algorithm)     Suppose R is a commutative ring, f ∈
R[x ] has degree ≥ 1 and its top coefficient is a unit in R. (If R is a field, the
top coefficient of f will always be a unit.) Then for any g ∈ R[x ], ∃! h, r ∈ R[x ]
such that g = f h + r with r = 0 or deg(r) < deg(f ).
                                ¯
Proof       This theorem states the existence and uniqueness of polynomials h and
r. We outline the proof of existence and leave uniqueness as an exercise. Suppose
f = a0 + a1 x + · · +am xm where m ≥ 1 and am is a unit in R. For any g with
deg(g) < m, set h = 0 and r = g. For the general case, the idea is to divide f into g
                     ¯
until the remainder has degree less than m. The proof is by induction on the degree
of g. Suppose n ≥ m and the result holds for any polynomial of degree less than
46                                                                 Rings       Chapter 3

n. Suppose g is a polynomial of degree n. Now ∃ a monomial bxt with t = n − m
and deg(g − f bxt ) < n. By induction, ∃ h1 and r with f h1 + r = (g − f bxt ) and
deg(r) < m. The result follows from the equation f (h1 + bxt ) + r = g.

Note       If r = 0 we say that f divides g. Note that f = x − c divides g iff c is
                   ¯
a root of g, i.e., g(c) = 0. More generally, x − c divides g with remainder g(c).
                          ¯

Theorem             Suppose R is a domain, n > 0, and g(x) = a0 + a1 x + · · · + an xn is a
polynomial of degree n with at least one root in R. Then g has at most n roots. Let
c1 , c2 , .., ck be the distinct roots of g in the ring R. Then ∃ a unique sequence of
positive integers n1 , n2 , .., nk and a unique polynomial h with no root in R so that
g(x) = (x − c1 )n1 · · · (x − ck )nk h(x). (If h has degree 0, i.e., if h = an , then we say
“all the roots of g belong to R”. If g = an xn , we say “all the roots of g are 0”.)
                                                                                     ¯
Proof      Uniqueness is easy so let’s prove existence. The theorem is clearly true
for n = 1. Suppose n > 1 and the theorem is true for any polynomial of degree less
than n. Now suppose g is a polynomial of degree n and c1 is a root of g. Then ∃
a polynomial h1 with g(x) = (x − c1 )h1 . Since h1 has degree less than n, the result
follows by induction.

Note       If g is any non-constant polynomial in C[x], all the roots of g belong to C,
i.e., C is an algebraically closed field. This is called The Fundamental Theorem of
Algebra, and it is assumed without proof for this textbook.

Exercise       Suppose g is a non-constant polynomial in R[x]. Show that if g has
odd degree then it has a real root. Also show that if g(x) = x2 + bx + c, then it has
a real root iff b2 ≥ 4c, and in that case both roots belong to R.

Definition     A domain T is a principal ideal domain (PID) if, given any ideal I,
∃ t ∈ T such that I = tT. Note that Z is a PID and any field is PID.

Theorem        Suppose F is a field, I is a proper ideal of F [x ], and n is the smallest
positive integer such that I contains a polynomial of degree n. Then I contains a
unique polynomial of the form f = a0 + a1 x + · · +an−1 x n−1 + x n and it has the
property that I = f F [x ]. Thus F [x ] is a PID. Furthermore, each coset of I can be
written uniquely in the form (c0 + c1 x + · · +cn−1 x n−1 + I).
Proof.      This is a good exercise in the use of the division algorithm. Note this is
similar to showing that a subgroup of Z is generated by one element (see page 15).
Chapter 3        Rings                                                                      47

Theorem.        Suppose R is a subring of a commutative ring C and c ∈ C. Then
∃! homomorphism h : R[x ] → C with h(x ) = c and h(r) = r for all r ∈ R. It is
defined by h(a0 + a1 x + · · +an x n ) = a0 + a1 c + · · +an cn , i.e., h sends f (x) to f (c).
The image of h is the smallest subring of C containing R and c.

   This map h is called an evaluation map. The theorem says that adding two
polynomials in R[x ] and evaluating is the same as evaluating and then adding in C.
Also multiplying two polynomials in R[x ] and evaluating is the same as evaluating
and then multiplying in C. In street language the theorem says you are free to send
x wherever you wish and extend to a ring homomorphism on R[x].

Exercise     Let C = {a + bi : a, b ∈ R}. Since R is a subring of C, there exists a
homomorphism h : R[x] → C which sends x to i, and this h is surjective. Show
ker(h) = (x2 + 1)R[x ] and thus R[x ]/(x 2 + 1) ≈ C. This is a good way to look
at the complex numbers, i.e., to obtain C, adjoin x to R and set x2 = −1.

Exercise       Z2 [x ]/(x 2 + x + 1) has 4 elements. Write out the multiplication table
for this ring and show that it is a field.

Exercise      Show that, if R is a domain, the units of R[x ] are just the units of R.
Thus if F is a field, the units of F [x ] are the non-zero constants. Show that [1] + [2]x
is a unit in Z4 [x ].




    In this chapter we do not prove F [x] is a unique factorization domain, nor do
we even define unique factorization domain. The next definition and theorem are
included merely for reference, and should not be studied at this stage.

Definition       Suppose F is a field and f ∈ F [x] has degree ≥ 1. The statement
that g is an associate of f means ∃ a unit u ∈ F [x] such that g = uf . The statement
that f is irreducible means that if h is a non-constant polynomial which divides f ,
then h is an associate of f .
    We do not develop the theory of F [x ] here. However, the development is easy
because it corresponds to the development of Z in Chapter 1. The Division Algo-
rithm corresponds to the Euclidean Algorithm. Irreducible polynomials correspond
to prime integers. The degree function corresponds to the absolute value function.
One difference is that the units of F [x ] are non-zero constants, while the units of Z
48                                                                   Rings       Chapter 3

are just ±1. Thus the associates of f are all cf with c 6= 0 while the associates of an
                                                           ¯
integer n are just ±n. Here is the basic theorem. (This theory is developed in full in
the Appendix under the topic of Euclidean domains.)

Theorem        Suppose F is a field and f ∈ F [x ] has degree ≥ 1. Then f factors as the
product of irreducibles, and this factorization is unique up to order and associates.
Also the following are equivalent.

       1)     F [x ]/(f ) is a domain.
       2)     F [x ]/(f ) is a field.
       3)     f is irreducible.




Definition    Now suppose x and y are “variables”. If a ∈ R and n, m ≥ 0, then
  n m      m n
ax y = ay x is called a monomial. Define an element of R[x , y] to be any finite
sum of monomials.

Theorem       R[x , y] is a commutative ring and (R[x ])[y] ≈ R[x , y] ≈ (R[y])[x ]. In
other words, any polynomial in x and y with coefficients in R may be written as a
polynomial in y with coefficients in R[x ], or as a polynomial in x with coefficients in
R[y].

Side Comment            It is true that if F is a field, each f ∈ F [x , y] factors as the
product of irreducibles. However F [x , y] is not a PID. For example, the ideal
I = xF [x, y] + yF [x, y] = {f ∈ F [x, y] : f (0, 0) = 0} is not principal.
                                               ¯ ¯     ¯

    If R is a commutative ring and n ≥ 2, the concept of a polynomial ring in
n variables works fine without a hitch. If a ∈ R and v1 , v2 , ..., vn are non-negative
integers, then ax1v1 x2v2 · · · xnvn is called a monomial. Order does not matter here.
Define an element of R[x1 , x2 , ..., xn ] to be any finite sum of monomials. This
gives a commutative ring and there is canonical isomorphism R[x1 , x2 , ..., xn ] ≈
(R[x1 , x2 , ..., xn−1 ])[xn ]. Using this and induction on n, it is easy to prove the fol-
lowing theorem.

Theorem         If R is a domain, R[x1 , x2 , ..., xn ] is a domain and its units are just the
units of R.
Chapter 3        Rings                                                                  49

Exercise     Suppose R is a commutative ring and f : R[x, y] → R[x] is the eval-
uation map which sends y to 0. This means f (p(x, y)) = p(x, 0). Show f is a ring
                               ¯                                 ¯
homomorphism whose kernel is the ideal (y) = yR[x, y]. Use the fact that “the do-
main mod the kernel is isomorphic to the image” to show R[x, y]/(y) is isomorphic
to R[x]. That is, if you adjoin y to R[x] and then factor it out, you get R[x] back.

                                  Product of Rings

   The product of rings works fine, just as does the product of groups.

Theorem                T is an index set and for each t ∈ T , Rt is a ring. On the
               Suppose Y
additive abelian group   Rt = Rt , define multiplication by {rt } · {st } = {rt · st }.
                               Q

                         t∈T
Then Rt is a ring and each projection πs : Rt → Rs is a ring homomorphism.
      Q                                           Q

Suppose R is a ring. Under the natural bijection from {functions f : R → Rt }
                                                                          Q

to {sequences of functions {ft }t∈T where ft : R → Rt }, f is a ring homomorphism
iff each ft is a ring homomorphism.

Proof       We already know f is a group homomorphism iff each ft is a group homo-
morphism (see page 36). Note that {1̄t } is the multiplicative identity of Rt , and
                                                                                 Q

f (1R ) = {1̄t } iff ft (1R ) = 1t for each t ∈ T. Finally, since multiplication is defined
   ¯                     ¯      ¯
coordinatewise, f is a ring homomorphism iff each ft is a ring homomorphism.

Exercise      Suppose R and S are rings. Note that R × 0 is not a subring of R × S
because it does not contain (1R , 1S ). Show R × 0 is an ideal and (R × S/R × 0) ≈ S.
                             ¯ ¯                 ¯                            ¯
Suppose I ⊂ R and J ⊂ S are ideals. Show I ×J is an ideal of R×S and every
ideal of R × S is of this form.

Exercise    Suppose R and S are commutative rings. Show T = R × S is not a
domain. Let e = (1, 0) ∈ R × S and show e2 = e, (1 − e)2 = (1 − e), R × 0 = eT ,
and 0 × S = (1 − e)T .

Exercise     If T is any ring, an element e of T is called an idempotent provided
 2
e = e. The elements 0 and 1 are idempotents called the trivial idempotents. Suppose
T is a commutative ring and e ∈ T is an idempotent with 0 6= e 6= 1. Let R = eT
and S = (1 − e)T . Show each of the ideals R and S is a ring with identity, and
f : T → R × S defined by f (t) = (et, (1 − e)t) is a ring isomorphism. This shows that
a commutative ring T splits as the product of two rings iff it contains a non-trivial
idempotent.
50                                                                 Rings       Chapter 3

                        The Chinese Remainder Theorem

   The natural map from Z to Zm × Zn is a group homomorphism and also a ring
homomorphism. If m and n are relatively prime, this map is surjective with kernel
mnZ, and thus Zmn and Zm × Zn are isomorphic as groups and as rings. The next
theorem is a classical generalization of this.

Theorem          Suppose n1 , ..., nt are integers, each ni > 1, and (ni , nj ) = 1 for all
i 6= j. Let fi : Z → Zni be defined by fi (a) = [a]. (Note that the bracket symbol is
used ambiguously.) Then the ring homomorphism f = (f1 , .., ft ) : Z → Zn1 × · · ×Znt
is surjective. Furthermore, the kernel of f is nZ, where n = n1 n2 · · nt . Thus Zn
and Zn1 × · · ×Znt are isomorphic as rings, and thus also as groups.
Proof        We wish to show that the order of f (1) is n, and thus f (1) is a group
generator, and thus f is surjective. The element f (1)m = ([1], .., [1])m = ([m], .., [m])
is zero iff m is a multiple of each of n1 , .., nt . Since their least common multiple is n,
the order of f (1) is n. (See the fourth exercise on page 36 for the case t = 3.)

Exercise        Show that if a is an integer and p is a prime, then [a] = [ap ] in Zp
(Fermat’s Little Theorem). Use this and the Chinese Remainder Theorem to show
that if b is a positive integer, it has the same last digit as b5 .

                                    Characteristic

    The following theorem is just an observation, but it shows that in ring theory, the
ring of integers is a “cornerstone”.

Theorem        If R is a ring, there is one and only one ring homomorphism f : Z → R.
It is given by f (m) = m1 = m. Thus the subgroup of R generated by 1 is a subring
                           ¯    ¯                                        ¯
of R isomorphic to Z or isomorphic to Zn for some positive integer n.

Definition       Suppose R is a ring and f : Z → R is the natural ring homomor-
phism f (m) = m1 = m. The non-negative integer n with ker(f ) = nZ is called the
                  ¯    ¯
characteristic of R. Thus f is injective iff R has characteristic 0 iff 1 has infinite
                                                                         ¯
order. If f is not injective, the characteristic of R is the order of 1.
                                                                      ¯
   It is an interesting fact that, if R is a domain, all the non-zero elements of R
have the same order. (See page 23 for the definition of order.)
Chapter 3       Rings                                                                51

Theorem       Suppose R is a domain. If R has characteristic 0, then each non-zero
a ∈ R has infinite order. If R has finite characteristic n, then n is a prime and each
non-zero a ∈ R has order n.
Proof      Suppose R has characteristic 0, a is a non-zero element of R, and m is a
positive integer. Then ma = m · a cannot be 0 because m, a 6= 0 and R is a domain.
                             ¯               ¯          ¯      ¯
Thus o(a) = ∞. Now suppose R has characteristic n. Then R contains Zn as a
subring, and thus Zn is a domain and n is a prime. If a is a non-zero element of R,
na = n · a = 0 · a = 0 and thus o(a)|n and thus o(a) = n.
      ¯        ¯      ¯

Exercise     Show that if F is a field of characteristic 0, F contains Q as a subring.
That is, show that the injective homomorphism f : Z → F extends to an injective
homomorphism f¯ : Q → F .

                                  Boolean Rings

    This section is not used elsewhere in this book. However it fits easily here, and is
included for reference.

Definition      A ring R is a Boolean ring if for each a ∈ R, a2 = a, i.e., each
element of R is an idempotent.

Theorem        Suppose R is a Boolean ring.

       1)  R has characteristic 2. If a ∈ R, 2a = a + a = 0, and so a = −a.
                                                          ¯
       Proof (a + a) = (a + a)2 = a2 + 2a2 + a2 = 4a. Thus 2a = 0.
                                                                   ¯
       2)   R is commutative.
       Proof (a + b) = (a + b)2 = a2 + (a · b) + (b · a) + b2
       = a + (a · b) − (b · a) + b. Thus a · b = b · a.

       3)   If R is a domain, R ≈ Z2 .
       Proof Suppose a 6= 0. Then a · (1 − a) = 0 and so a = 1.
                          ¯            ¯        ¯            ¯
       4)   The image of a Boolean ring is a Boolean ring. That is, if I is an ideal
            of R with I 6= R, then every element of R/I is idempotent and thus
            R/I is a Boolean ring. It follows from 3) that R/I is a domain iff R/I
            is a field iff R/I ≈ Z2 . (In the language of Chapter 6, I is a prime
            ideal iff I is a maximal ideal iff R/I ≈ Z2 ).
52                                                              Rings      Chapter 3

    Suppose X is a non-void set. If a is a subset of X, let a0 = (X −a) be a complement
of a in X. Now suppose R is a non-void collection of subsets of X. Consider the
following properties which the collection R may possess.

       1)   a ∈ R ⇒ a0 ∈ R.
       2)   a, b ∈ R ⇒ (a ∩ b) ∈ R.
       3)   a, b ∈ R ⇒ (a ∪ b) ∈ R.
       4)   ∅ ∈ R and X ∈ R.

Theorem        If 1) and 2) are satisfied, then 3) and 4) are satisfied. In this case, R
is called a Boolean algebra of sets.
Proof     Suppose 1) and 2) are true, and a, b ∈ R. Then a ∪ b = (a0 ∩ b0 )0 belongs to
R and so 3) is true. Since R is non-void, it contains some element a. Then ∅ = a ∩ a0
and X = a ∪ a0 belong to R, and so 4) is true.

Theorem        Suppose R is a Boolean algebra of sets. Define an addition on R by
a + b = (a ∪ b) − (a ∩ b). Under this addition, R is an abelian group with 0 = ∅ and
                                                                           ¯
a = −a. Define a multiplication on R by a · b = a ∩ b. Under this multiplication R
becomes a Boolean ring with 1 = X.
                              ¯

Exercise     Let X = {1, 2, ..., n} and let R be the Boolean ring of all subsets of
X. Note that o(R) = 2n . Define fi : R → Z2 by fi (a) = [1] iff i ∈ a. Show each
fi is a homomorphism and thus f = (f1 , ..., fn ) : R → Z2 × Z2 × · · ×Z2 is a ring
homomorphism. Show f is an isomorphism. (See exercises 1) and 4) on page 12.)

Exercise     Use the last exercise on page 49 to show that any finite Boolean ring is
isomorphic to Z2 × Z2 × · · ×Z2 , and thus also to the Boolean ring of subsets above.

Note       Suppose R is a Boolean ring. It is a classical theorem that ∃ a Boolean
algebra of sets whose Boolean ring is isomorphic to R. So let’s just suppose R is
a Boolean algebra of sets which is a Boolean ring with addition and multiplication
defined as above. Now define a ∨ b = a ∪ b and a ∧ b = a ∩ b. These operations cup
and cap are associative, commutative, have identity elements, and each distributes
over the other. With these two operations (along with complement), R is called a
Boolean algebra. R is not a group under cup or cap. Anyway, it is a classical fact
that, if you have a Boolean ring (algebra), you have a Boolean algebra (ring). The
advantage of the algebra is that it is symmetric in cup and cap. The advantage of
the ring viewpoint is that you can draw from the rich theory of commutative rings.
Chapter 4
Matrices and Matrix Rings

We first consider matrices in full generality, i.e., over an arbitrary ring R. However,
after the first few pages, it will be assumed that R is commutative. The topics,
such as invertible matrices, transpose, elementary matrices, systems of equations,
and determinant, are all classical. The highlight of the chapter is the theorem that a
square matrix is a unit in the matrix ring iff its determinant is a unit in the ring.
This chapter concludes with the theorem that similar matrices have the same deter-
minant, trace, and characteristic polynomial. This will be used in the next chapter
to show that an endomorphism on a finitely generated vector space has a well-defined
determinant, trace, and characteristic polynomial.

Definition       Suppose R is a ring and m and n are positive integers. Let Rm,n be
the collection of all m × n matrices
                                            
                            a1,1    . . . a1,n
                           .              .. 
                           ..
            A = (ai,j ) =                  .  where each entry ai,j ∈ R.
                             am,1   . . . am,n

A matrix may be viewed as m n-dimensional row vectors or as n m-dimensional
column vectors. A matrix is said to be square if it has the same number of rows
as columns. Square matrices are so important that they have a special notation,
Rn = Rn,n . Rn is defined to be the additive abelian group R × R × · · · × R.
To emphasize that Rn does not have a ring structure, we use the “sum” notation,
Rn = R ⊕ R ⊕ · · · ⊕ R. Our convention is to write elements of Rn as column vectors,
i.e., to identify Rn with Rn,1 . If the elements of Rn are written as row vectors, Rn is
identified with R1,n .




                                           53
54                                                                  Matrices      Chapter 4

Addition of matrices        To “add” two matrices, they must have the same number
of rows and the same number of columns, i.e., addition is a binary operation Rm,n ×
Rm,n → Rm,n . The addition is defined by (ai,j ) + (bi,j ) = (ai,j + bi,j ), i.e., the i, j term
of the sum is the sum of the i, j terms. The following theorem is just an observation.

Theorem        Rm,n is an additive abelian group. Its “zero” is the matrix 0 = 0m,n
all of whose terms are zero. Also −(ai,j ) = (−ai,j ). Furthermore, as additive groups,
Rm,n ≈ Rmn .



Scalar multiplication           An element of R is called a scalar. A matrix may be
“multiplied” on the right or left by a scalar. Right scalar multiplication is defined
by (ai,j )c = (ai,j · c). It is a function Rm,n × R → Rm,n . Note in particular that
scalar multiplication is defined on Rn . Of course, if R is commutative, there is no
distinction between right and left scalar multiplication.

Theorem         Suppose A, B ∈ Rm,n and c, d ∈ R. Then
                 (A + B)c = Ac + Bc
                  A(c + d) = Ac + Ad
                    A(cd) = (Ac)d
and                    A1 = A

This theorem is entirely transparent. In the language of the next chapter, it merely
states that Rm,n is a right module over the ring R.



Multiplication of Matrices              The matrix product AB is defined iff the number
of columns of A is equal to the number of rows of B. The matrix AB will have the
same number of rows as A and the same number of columns as B, i.e., multiplication
is a function Rm,n × Rn,p → Rm,p . The product (ai,j )(bi,j ) is defined to be the matrix
whose (s, t) term is as,1 · b1,t + · · · + as,n · bn,t , i.e., the dot product of row s of A
with column t of B.
                                                         !                 !                 !
                                                   a b               2 0               0 1
Exercise       Consider real matrices A =                    ,U =              ,V =              ,
                                                   c d               0 1               1 0
                    !
              1 2
and W =                 . Find the matrices AU, UA, AV, VA, AW , and WA.
              0 1
Chapter 4               Matrices                                                                  55

Definition The identity matrix In ∈ Rn is the square matrix whose diagonal terms
are 1 and whose off-diagonal terms are 0.

Theorem               Suppose A ∈ Rm,n .
      1)              0p,m A = 0p,n A0n,p = 0m,p
      2)              Im A = A = AIn

Theorem               (The distributive laws)              (A + B)C = AC + BC     and
                                                           C(A + B) = CA + CB     whenever the
operations are defined.

Theorem        (The associative law for matrix multiplication) Suppose A ∈ Rm,n ,
B ∈ Rn,p , and C ∈ Rp,q . Then (AB)C = A(BC). Note that ABC ∈ Rm,q .
Proof     We must show that the (s, t) terms are equal. The proof involves writing
it out and changing the order of summation. Let(xi,j ) = AB and (yi,j ) = BC.
                                  X              X X                  X
Then the (s, t) term of (AB)C is     xs,i ci,t =     as,j bj,i ci,t =   as,j bj,i ci,t =
            X                                    i             i   j              i,j
X                              X
     as,j        bj,i ci,t =       as,j yj,t which is the (s, t) term of A(BC).
 j           i                 j




Theorem               For each ring R and integer n ≥ 1, Rn is a ring.
Proof      This elegant little theorem is immediate from the theorems above. The
units of Rn are called invertible or non-singular matrices. They form a group under
multiplication called the general linear group and denoted by GLn (R) = (Rn )∗ .

Exercise     Recall that if A is a ring and a ∈ A, then aA is right ideal of A. Let
A = R2 and a = (ai,j ) where a1,1 = 1 and the other entries are 0. Find aR2 and R2 a.
Show that the only ideal of R2 containing a is R2 itself.




Multiplication by blocks      Suppose A, E ∈ Rn , B, F ∈ Rn,m , C, G ∈ Rm,n , and
D, H ∈ Rm . Then multiplication in Rn+m is given by
                               !               !                                          !
                  A        B         E     F                   AE + BG      AF + BH
                                                       =                                      .
                  C        D         G     H                   CE + DG      CF + DH
56                                                                Matrices        Chapter 4

                                          Transpose

Notation        For the remainder of this chapter on matrices, suppose R is a commu-
tative ring.   Of course, for n > 1, Rn is non-commutative.

    Transpose is a function from Rm,n to Rn,m . If A ∈ Rm,n , At ∈ Rn,m is the matrix
whose (i, j) term is the (j, i) term of A. So row i (column i) of A becomes column
i (row i) of At . If A is an n-dimensional row vector, then At is an n-dimensional
column vector. If A is a square matrix, At is also square.

Theorem         1)       (At )t = A
                2)       (A + B)t = At + B t
                3)       If c ∈ R, (Ac)t = At c
                4)       (AB)t = B t At
                5)       If A ∈ Rn , then A is invertible iff At is invertible.
                         In this case (A−1 )t = (At )−1 .

Proof of 5)          Suppose A is invertible.     Then I = I t = (AA−1 )t = (A−1 )t At .

Exercise     Characterize those invertible matrices A ∈ R2 which have A−1 = At .
Show that they form a subgroup of GL2 (R).

                                   Triangular Matrices

   If A ∈ Rn , then A is upper (lower) triangular provided ai,j = 0 for all i > j (all
j > i). A is strictly upper (lower) triangular provided ai,j = 0 for all i ≥ j (all j ≥ i).
A is diagonal if it is upper and lower triangular, i.e., ai,j = 0 for all i 6= j. Note
that if A is upper (lower) triangular, then At is lower (upper) triangular.

Theorem         If A ∈ Rn is strictly upper (or lower) triangular, then An = 0.
Proof     The way to understand this is just multiply it out for n = 2 and n = 3.
The geometry of this theorem will become transparent later in Chapter 5 when the
matrix A defines an R-module endomorphism on Rn (see page 93).

Definition    If T is any ring, an element t ∈ T is said to be nilpotent provided ∃n
such that t = 0. In this case, (1 − t) is a unit with inverse 1 + t + t2 + · · · + tn−1 .
           n

Thus if T = Rn and B is a nilpotent matrix, I − B is invertible.
Chapter 4       Matrices                                                               57
                                                                 
                                                  1 2 −3
Exercise      Let R = Z.    Find the inverse of  0 1  4 
                                                         .
                                                

                                                  0 0  1

                                                      
                                a1
                                     a2       0
                                                      
                                                      
                                                      
Exercise      Suppose A = 
                                         ·             is a diagonal matrix, B ∈ Rm,n ,
                                                       
                          
                                    0        ·        
                                                       
                                          an
and C ∈ Rn,p . Show that BA is obtained from B by multiplying column i of B
by ai . Show AC is obtained from C by multiplying row i of C by ai . Show A is a
unit in Rn iff each ai is a unit in R.




Scalar matrices         A scalar matrix is a diagonal matrix for which all the diagonal
terms are equal, i.e., a matrix of the form cIn . The map R → Rn which sends c to
cIn is an injective ring homomorphism, and thus we may consider R to be a subring
of Rn . Multiplying by a scalar is the same as multiplying by a scalar matrix, and
thus scalar matrices commute with everything, i.e., if B ∈ Rn , (cIn )B = cB = Bc =
B(cIn ). Recall we are assuming R is a commutative ring.

Exercise     Suppose A ∈ Rn and for each B ∈ Rn , AB = BA. Show A is a scalar
matrix. For n > 1, this shows how non-commutative Rn is.

             Elementary Operations and Elementary Matrices

   Suppose R is a commutative ring and A is a matrix over R. There are 3 types of
elementary row and column operations on the matrix A. A need not be square.

 Type 1     Multiply row i by some                Multiply column i by some
            unit a ∈ R.                           unit a ∈ R.

 Type 2     Interchange row i and row j.          Interchange column i and column j.

 Type 3     Add a times row j                     Add a times column i
            to row i where i 6= j and a           to column j where i 6= j and a
            is any element of R.                  is any element of R.
58                                                                   Matrices          Chapter 4

Elementary Matrices         Elementary matrices are square and invertible. There
are three types. They are obtained by performing row or column operations on the
identity matrix.

                            1
                                                      
                     
                               1            0         
                                                       
                                    a
                                                      
                                                      
Type 1             B=                                    where a is a unit in R.
                     
                                       1              
                                                       
                                0            1
                                                      
                                                      
                                                   1

                            1
                                                      
                     
                               0            1         
                                                       
                                    1
                                                      
                                                      
Type 2             B=                                 
                     
                                       1              
                                                       
                                1            0
                                                      
                                                      
                                                   1

                            1
                                                      
                     
                               1           ai,j       
                                                       
                                    1                       where i 6= j and ai,j is
                                                      
                                                      
Type 3             B=                                 
                     
                                       1              
                                                           any element of R.
                                0            1
                                                      
                                                      
                                                   1

    In type 1, all the off-diagonal elements are zero. In type 2, there are two non-zero
off-diagonal elements. In type 3, there is at most one non-zero off-diagonal element,
and it may be above or below the diagonal.

Exercise      Show that if B is an elementary matrix of type 1,2, or 3, then B is
invertible and B −1 is an elementary matrix of the same type.

     The following theorem is handy when working with matrices.

Theorem       Suppose A is a matrix. It need not be square. To perform an elemen-
tary row (column) operation on A, perform the operation on an identity matrix to
obtain an elementary matrix B, and multiply on the left (right). That is, BA = row
operation on A and AB = column operation on A. (See the exercise on page 54.)
Chapter 4       Matrices                                                              59

Exercise      Suppose F is a field and A ∈ Fm,n .

       1)    Show ∃ invertible matrices B ∈ Fm and C ∈ Fn such that BAC = (di,j )
             where d1,1 = · · · = dt,t = 1 and all other entries are 0. The integer t is
             called the rank of A. (See page 89 of Chapter 5.)
       2)    Suppose A ∈ Fn is invertible. Show A is the product of elementary
             matrices.
       3)    A matrix T is said to be in row echelon form if, for each 1 ≤ i < m, the
             first non-zero term of row (i + 1) is to the right of the first non-zero
             term of row i. Show ∃ an invertible matrix B ∈ Fm such that BA is in
             row echelon form.
                                !                     !
                        3 11                 3 11
       4)    Let A =             and D =              . Write A and D as products
                        0 4                  1 4
             of elementary matrices over Q. Is it possible to write them as products
             of elementary matrices over Z?

   For 1), perform row and column operations on A to reach the desired form. This
shows the matrices B and C may be selected as products of elementary matrices.
Part 2) also follows from this procedure. For part 3), use only row operations. Notice
that if T is in row-echelon form, the number of non-zero rows is the rank of T .

                              Systems of Equations


                                                  c1
                                                    
                                                · 
    Suppose A = (ai,j ) ∈ Rm,n and C =               ∈ Rm = Rm,1 . The system
                                                    
                                                · 
                                                  cm
 a1,1 x1 + · · · + a1,n xn = c1
   ..                    ..   .. of m equations in n unknowns, can be written as one
    .                     .    .
 am,1 x1 + · · · + am,n xn = cm
                                                        x1        c1
                                                                  
                                                       ·      · 
matrix equation in one unknown, namely as (ai,j )         =
                                                              
                                                                      or AX = C.
                                                                     
                                                       ·      · 
                                                      

                                                        xn        cm
60                                                                Matrices        Chapter 4

    Define f : Rn → Rm by f (D) = AD. Then f is a group homomorphism and also
f (Dc) = f (D)c for any c ∈ R. In the language of the next chapter, this says that
f is an R-module homomorphism. The next theorem summarizes what we already
know about solutions of linear equations in this setting.

Theorem

       1)      AX = 0 is called the homogeneous equation. Its solution set is ker(f ).
       2)     AX = C has a solution iff C ∈ image(f ). If D ∈ Rn is one
              solution, the solution set f −1 (C) is the coset D + ker(f ) in Rn .
              (See part 7 of the theorem on homomorphisms in Chapter 2, page 28.)
       3)     Suppose B ∈ Rm is invertible. Then AX = C and (BA)X = BC have
              the same set of solutions. Thus we may perform any row operation
              on both sides of the equation and not change the solution set.
       4)     If m = n and A ∈ Rm is invertible, then AX = C has the unique
              solution X = A−1 C.

   The geometry of systems of equations over a field will not become really trans-
parent until the development of linear algebra in Chapter 5.

                                      Determinants

    The concept of determinant is one of the most amazing in all of mathematics.
The proper development of this concept requires a study of multilinear forms, which
is given in Chapter 6. In this section we simply present the basic properties.

   For each n ≥ 1 and each commutative ring R, determinant
                                                 !         is a function from Rn
                                            a b
to R. For n = 1, | (a) | = a. For n = 2,            = ad − bc.
                                            c d

Definition      Let A = (ai,j ) ∈ Rn . If σ is a permutation on {1, 2, ..., n}, let sign(σ) =
1 if σ is an even permutation, and Xsign(σ) = −1 if σ is an odd permutation. The
determinant is defined by | A |=        sign(σ) a1,σ(1) · a2,σ(2) · · · an,σ(n) . Check that for
                                      all σ
n = 2, this agrees with the definition above. (Note that here we are writing the
permutation functions as σ(i) and not as (i)σ.)
Chapter 4             Matrices                                                                                       61

     For each σ, a1,σ(1) · a2,σ(2) · · · an,σ(n) contains exactly one factor from each row and
one factor from each column. Since R is commutative, we may rearrange the factors
so that the first comes from the first column, the second from the second column, etc.
This means that there is a permutation τ on {1, 2, . . . , n} such that a1,σ(1) · · · an,σ(n) =
aτ (1),1 · · · aτ (n),n . We wish to show that τ = σ −1 and thus sign(σ) = sign(τ ). To
reduce the abstraction, suppose σ(2) = 5. Then the first expression will contain
the factor a2,5 . In the second expression, it will appear as aτ (5),5 , and so τ (5) = 2.
Anyway, τ is the inverse of σ and thus there are two ways to define determinant. It
follows that the determinant of a matrix is equal to the determinant of its transpose.

                        X                                                  X
Theorem |A| =                   sign(σ)a1,σ(1) · a2,σ(2) · · · an,σ(n) =           sign(τ )aτ (1),1 · aτ (2),2 · · · aτ (n),n .
                        all σ                                              all τ



Corollary        |A| = |At |.


   You may view an n × n matrix A as a sequence of n column vectors or as a
sequence of n row vectors. Here we will use column vectors. This means we write the
matrix A as A = (A1 , A2 , . . . , An ) where each Ai ∈ Rn,1 = Rn .


Theorem       If two columns of A are equal, then |A| = 0.
                                                                    ¯
Proof     For
          X simplicity, assume the first two columns are equal, i.e., A1 = A2 .
Now |A| =     sign(τ )aτ (1),1 · aτ (2),2 · · · aτ (n),n and this summation has n! terms and
              all τ
n! is an even number. Let γ be the transposition which interchanges one and two.
Then for any τ , aτ (1),1 · aτ (2),2 · · · aτ (n),n = aτ γ(1),1 · aτ γ(2),2 · · · aτ γ(n),n . This pairs up
the n! terms of the summation, and since sign(τ )=−sign(τ γ), these pairs cancel
in the summation. Therefore |A| = 0.
                                             ¯

Theorem        Suppose 1 ≤ r ≤ n, Cr ∈ Rn,1 , and a, c ∈ R. Then |(A1 , . . . , Ar−1 ,
aAr + cCr , Ar+1 , . . . , An )| = a|(A1 , . . . , An )| + c|(A1 , . . . , Ar−1 , Cr , Ar+1 , . . . , An )|

Proof     This is immediate from the definition of determinant and the distributive
law of multiplication in the ring R.


Summary        Determinant is a function d : Rn → R. In the language used in the
Appendix, the two previous theorems say that d is an alternating multilinear form.
The next two theorems show that alternating implies skew-symmetric (see page 129).
62                                                                        Matrices           Chapter 4

Theorem           Interchanging two columns of A multiplies the determinant by minus
one.
Proof        For simplicity, show that |(A2 , A1 , A3 , . . . , An )| = −|A|. We know 0 =
                                                                                                        ¯
|(A1 + A2 , A1 + A2 , A3 , . . . , An )| = |(A1 , A1 , A3 , . . . , An )| + |(A1 , A2 , A3 , . . . , An )| +
|(A2 , A1 , A3 , . . . , An )| + |(A2 , A2 , A3 , . . . , An )|. Since the first and last of these four
terms are zero, the result follows.

Theorem           If τ is a permutation of (1, 2, . . . , n), then
                  |A| = sign(τ )|(Aτ (1) , Aτ (2) , . . . , Aτ (n) )|.
Proof        The permutation τ is the finite product of transpositions.

Exercise         Rewrite the four preceding theorems using rows instead of columns.

     The following theorem is just a summary of some of the work done so far.

Theorem       Multiplying any row or column of matrix by a scalar c ∈ R, multiplies
the determinant by c. Interchanging two rows or two columns multiplies the determi-
nant by −1. Adding c times one row to another row, or adding c times one column
to another column, does not change the determinant. If a matrix has two rows equal
or two columns equal, its determinant is zero. More generally, if one row is c times
another row, or one column is c times another column, then the determinant is zero.




    There are 2n ways to compute | A |; expansion by any row or expansion by any
column. Let Mi,j be the determinant of the (n − 1) × (n − 1) matrix obtained by
removing row i and column j from A. Let Ci,j = (−1)i+j Mi,j . Mi,j and Ci,j are
called the (i, j) minor and cofactor of A. The following theorem is useful but the
proof is a little tedious and should not be done as an exercise.

Theorem        For any 1 ≤ i ≤ n, | A |= ai,1 Ci,1 + ai,2 Ci,2 + · · · + ai,n Ci,n . For any
1 ≤ j ≤ n, | A |= a1,j C1,j + a2,j C2,j + · · · + an,j Cn,j . Thus if any row or any column is
zero, the determinant is zero.
                                             
                           a1 a2 a3
Exercise         Let A =  b1 b2 b3 . The determinant of A is the sum of six terms.
                                   

                           c1 c2 c3
Chapter 4        Matrices                                                                  63

Write out the determinant of A expanding by the first column and also expanding by
the second row.

Theorem       If A is an upper or lower triangular matrix, | A | is the product of the
diagonal elements. If A is an elementary matrix of type 2, | A |= −1. If A is an
elementary matrix of type 3, | A |= 1.
Proof      We will prove the first statement for upper triangular matrices. If A ∈ R2
is an upper triangular matrix, then its determinant is the product of the diagonal
elements. Suppose n > 2 and the theorem is true for matrices in Rn−1 . Suppose
A ∈ Rn is upper triangular. The result follows by expanding by the first column.
    An elementary matrix of type 3 is a special type of upper or lower triangular
matrix, so its determinant is 1. An elementary matrix of type 2 is obtained from the
identity matrix by interchanging two rows or columns, and thus has determinant −1.

Theorem      (Determinant by blocks)
                                  !    Suppose A ∈ Rn , B ∈ Rn,m , and D ∈ Rm .
                           A B
Then the determinant of              is | A || D |.
                           O D
Proof      Expand by the first column and use induction on n.

   The following remarkable theorem takes some work to prove. We assume it here
without proof. (For the proof, see page 130 of the Appendix.)

Theorem         The determinant of the product is the product of the determinants,
i.e., if A, B ∈ Rn , | AB | = | A || B |. Thus | AB | = | BA | and if C is invertible,
| C −1 AC | = |ACC −1 | = | A |.

Corollary       If A is a unit in Rn , then | A | is a unit in R and | A−1 | = | A |−1 .
Proof      1 = | I | = | AA−1 | = | A || A−1 | .

   One of the major goals of this chapter is to prove the converse of the preceding
corollary.




Classical adjoint           Suppose R is a commutative ring and A ∈ Rn . The classical
adjoint of A is (Ci,j )t , i.e., the matrix whose (j, i) term is the (i, j) cofactor. Before
64                                                                   Matrices    Chapter 4

we consider the general case, let’s examine 2 × 2 matrices.
                       !                               !                              !
                a b                          d −c                      t       d −b
     If A =                then (Ci,j ) =                  and so (Ci,j ) =               . Then
                c d                         −b  a                             −c  a
                                            !
        t          t            |A| 0
A(Ci,j ) = (Ci,j ) A =                          = | A | I. Thus if | A | is a unit in R, A is
                                 0 |A|
                                                                                              !
                                                                                   d −b
invertible and A−1 = | A |−1 (Ci,j )t . In particular, if | A | = 1, A−1 =                        .
                                                                                  −c  a
Here is the general case.

Theorem          If R is commutative and A ∈ Rn , then A(Ci,j )t = (Ci,j )t A = | A | I.
Proof        We must show that the diagonal elements of the product A(Ci,j )t are all
| A | and the other elements are 0. The (s, s) term is the dot product of row s of A
with row s of (Ci,j ) and is thus | A | (computed by expansion by row s). For s 6= t,
the (s, t) term is the dot product of row s of A with row t of (Ci,j ). Since this is the
determinant of a matrix with row s = row t, the (s, t) term is 0. The proof that
(Ci,j )t A = |A|I is similar and is left as an exercise.

  We are now ready for one of the most beautiful and useful theorems in all of
mathematics.

Theorem          Suppose R is a commutative ring and A ∈ Rn . Then A is a unit in
Rn iff | A | is a unit in R. (Thus if R is a field, A is invertible iff | A | 6= 0.) If A is
invertible, then A−1 = | A |−1 (Ci,j )t . Thus if | A | = 1, A−1 = (Ci,j )t , the classical
adjoint of A.
Proof         This follows immediately from the preceding theorem.

Exercise    Show that any right inverse of A is also a left inverse. That is, suppose
A, B ∈ Rn and AB = I. Show A is invertible with A−1 = B, and thus BA = I.

                                            Similarity

   Suppose A, B ∈ Rn . B is said to be similar to A if ∃ an invertible C ∈ Rn such
that B = C −1 AC, i.e., B is similar to A iff B is a conjugate of A.

Theorem          B is similar to B.
Chapter 4         Matrices                                                                    65

                B is similar to A iff A is similar to B.
                If D is similar to B and B is similar to A, then D is similar to A.
                “Similarity” is an equivalence relation on Rn .

Proof       This is a good exercise using the definition.

Theorem         Suppose A and B are similar. Then | A | = | B | and thus A is invertible
iff B is invertible.
Proof       Suppose B = C −1 AC. Then | B | = | C −1 AC | = |ACC −1 | = | A |.




Trace         Suppose A = (ai,j ) ∈ Rn . Then the trace is defined by trace(A) = a1,1 +
a2,2 + · · · + an,n . That is, the trace of A is the sum of its diagonal terms.

   One of the most useful properties of trace is trace(AB) = trace(BA) whenever AB
and BA are defined. For example, suppose A = (a1 , a2 , ..., an ) and B = (b1 , b2 , ..., bn )t .
Then AB is the scalar a1 b1 + · · · + an bn while BA is the n × n matrix (bi aj ). Note
that trace(AB) = trace(BA). Here is the theorem in full generality.

Theorem       Suppose A ∈ Rm,n and B ∈ Rn,m . Then AB and BA are square
matrices with trace(AB) = trace(BA).
Proof    ThisX
             proof involves a change inX       the order of X summation. By definition,
trace(AB) =     ai,1 b1,i + · · ·+ ai,n bn,i =    ai,j bj,i =    bj,1 a1,j + · · ·+ bj,m am,j =
               1≤i≤m                           1≤i≤m           1≤j≤n
                                               1≤j≤n
trace(BA).

Theorem      If A, B ∈ Rn , trace(A + B) = trace(A) + trace(B) and
trace(AB) = trace(BA).

Proof      The first part of the theorem is immediate, and the second part is a special
case of the previous theorem.

Theorem         If A and B are similar, then trace(A) = trace(B).

Proof       trace(B) = trace(C −1 AC) = trace(ACC −1 ) = trace(A).
66                                                                Matrices        Chapter 4

Summary         Determinant and trace are functions from Rn to R. Determinant is a
multiplicative homomorphism and trace is an additive homomorphism. Furthermore
| AB | = | BA | and trace(AB) = trace(BA). If A and B are similar, | A | = | B | and
trace(A) = trace(B).
Exercise       Suppose A ∈ Rn and a ∈ R. Find |aA| and trace(aA).



Characteristic polynomials         If A ∈ Rn , the characteristic polynomial CPA (x) ∈
R[x] is defined by CPA (x) = | (xI − A) |. Any λ ∈ R which is a root of CPA (x) is
called a characteristic root of A.

Theorem       CPA (x) = a0 + a1 x + · · · + an−1 xn−1 + xn where trace(A) = −an−1
and | A | = (−1)n a0 .
Proof       This follows from a direct computation of the determinant.

Theorem         If A and B are similar, then they have the same characteristic polyno-
mials.

Proof       Suppose B = C −1 AC.       CPB (x) = | (xI − C −1 AC) | = | C −1 (xI − A)C | =
| (xI − A) | = CPA (x).
                                                                    !
                                                       a b
Exercise      Suppose R is a commutative ring, A =            is a matrix in R2 , and
                                                       c d
CPA (x) = a0 + a1 x + x2 . Find a0 and a1 and show that a0 I + a1 A + A2 = 0, i.e.,
show A satisfies its characteristic polynomial. In other words, CPA (A) = 0.

Exercise       Suppose F is a field and A ∈ F2 . Show the following are equivalent.
      1)      A2 = 0.
      2)      | A |= trace(A) = 0.
      3)      CPA (x) = x2 .
      4)      ∃ an elementary matrix C such that C −1 AC is strictly upper triangular.


Note       This exercise is a special case of a more general theorem. A square matrix
over a field is nilpotent iff all its characteristic roots are 0 iff it is similar to a strictly
                                                               ¯
upper triangular matrix. This remarkable result cannot be proved by matrix theory
alone, but depends on linear algebra (see pages 93, 94, and 98).
Chapter 5
Linear Algebra

The exalted position held by linear algebra is based upon the subject’s ubiquitous
utility and ease of application. The basic theory is developed here in full generality,
i.e., modules are defined over an arbitrary ring R and not just over a field. The
elementary facts about cosets, quotients, and homomorphisms follow the same pat-
tern as in the chapters on groups and rings. We give a simple proof that if R is a
commutative ring and f : Rn → Rn is a surjective R-module homomorphism, then
f is an isomorphism. This shows that finitely generated free R-modules have a well
defined dimension, and simplifies some of the development of linear algebra. It is in
this chapter that the concepts about functions, solutions of equations, matrices, and
generating sets come together in one unified theory.

    After the general theory, we restrict our attention to vector spaces, i.e., modules
over a field. The key theorem is that any vector space V has a free basis, and thus
if V is finitely generated, it has a well defined dimension, and incredible as it may
seem, this single integer determines V up to isomorphism. Also any endomorphism
f : V → V may be represented by a matrix, and any change of basis corresponds to
conjugation of that matrix. One of the goals in linear algebra is to select a basis so
that the matrix representing f has a simple form. For example, if f is not injective,
then f may be represented by a matrix whose first column is zero. As another
example, if f is nilpotent, then f may be represented by a strictly upper triangular
matrix. The theorem on Jordan canonical form is not proved in this chapter, and
should not be considered part of this chapter. It is stated here in full generality only
for reference and completeness. The proof is given in the Appendix. This chapter
concludes with the study of real inner product spaces, and with the beautiful theory
relating orthogonal matrices and symmetric matrices.




                                          67
68                                                     Linear Algebra       Chapter 5

Definition    Suppose R is a ring and M is an additive abelian group. The state-
ment that M is a right R-module means there is a scalar multiplication

      M ×R → M          satisfying     (a1 + a2 )r = a1 r + a2 r
      (m, r) → mr                      a(r1 + r2 ) = ar1 + ar2
                                       a(r1 · r2 ) = (ar1 )r2
                                           a1      = a
                                            ¯
for all a, a1 , a2 ∈ M and r, r1 , r2 ∈ R.

     The statement that M is a left R-module means there is a scalar multiplication

      R×M → M           satisfying     r(a1 + a2 ) = ra1 + ra2
      (r, m) → rm                      (r1 + r2 )a = r1 a + r2 a
                                       (r1 · r2 )a = r1 (r2 a)
                                           1a      = a
                                           ¯
Note that the plus sign is used ambiguously, as addition in M and as addition in R.




Notation       The fact that M is a right (left) R-module will be denoted by M = MR
(M = R M ). If R is commutative and M = MR then left scalar multiplication defined
by ra = ar makes M into a left R-module. Thus for commutative rings, we may write
the scalars on either side. In this text we stick to right R-modules.

Convention      Unless otherwise stated, it is assumed that R is a ring and the word
“R-module” (or sometimes just “module”) means “right R-module”.

Theorem         Suppose M is an R-module.

        1)    If r ∈ R, then f : M → M defined by f (a) = ar is a homomorphism of
              additive groups. In particular (0M )r = 0M .
                                              ¯       ¯
        2)    If a ∈ M , a0R = 0M .
                           ¯     ¯
        3)    If a ∈ M and r ∈ R, then (−a)r = −(ar) = a(−r).

Proof        This is a good exercise in using the axioms for an R-module.
Chapter 5         Linear Algebra                                                     69

Submodules       If M is an R-module, the statement that a subset N ⊂ M is a
submodule means it is a subgroup which is closed under scalar multiplication, i.e., if
a ∈ N and r ∈ R, then ar ∈ N. In this case N will be an R-module because the
axioms will automatically be satisfied. Note that 0 and M are submodules, called the
                                                  ¯
improper submodules of M .

Theorem       Suppose M is an R-module, T is an index set, and for each t ∈ T ,
Nt is a submodule of M .
            \
       1)         Nt is a submodule of M .
            t∈T                                   [
       2)   If {Nt } is a monotonic collection,         Nt is a submodule.
                                                  t∈T
       3)   +t∈T Nt = {all finite sums a1 + · · +am : each ai belongs
            to some Nt } is a submodule. If T = {1, 2, .., n},
            then this submodule may be written as
            N1 + N2 + · · +Nn = {a1 + a2 + · · +an : each ai ∈ Ni }.

Proof      We know from page 22 that versions of 1) and 2) hold for subgroups, and
in particular for subgroups of additive abelian groups. To finish the proofs it is only
necessary to check scalar multiplication, which is immediate. Also the proof of 3) is
immediate. Note that if N1 and N2 are submodules of M , N1 + N2 is the smallest
submodule of M containing N1 ∪ N2 .

Exercise       Suppose T is a non-void set, N is an R-module, and N T is the collection
of all functions f : T → N with addition defined by (f +g)(t) = f (t)+g(t), and scalar
multiplication defined by (f r)(t) = f (t)r. Show N T is an R-module. (We know from
the last exercise in Chapter 2 that N T is a group, and so it is only necessary to check
scalar multiplication.) This simple fact is quite useful in linear algebra. For example,
in 5) of the theorem below, it is stated that HomR (M, N ) forms an abelian group.
So it is only necessary to show that HomR (M, N ) is a subgroup of N M . Also in 8) it
is only necessary to show that HomR (M, N ) is a submodule of N M .

                                  Homomorphisms

    Suppose M and N are R-modules. A function f : M → N is a homomorphism
(i.e., an R-module homomorphism) provided it is a group homomorphism and if
a ∈ M and r ∈ R, f (ar) = f (a)r. On the left, scalar multiplication is in M and on
the right it is in N . The basic facts about homomorphisms are listed below. Much
70                                                    Linear Algebra    Chapter 5

of this work has already been done in the chapter on groups (see page 28).

Theorem

        1)    The zero map M → N is a homomorphism.
        2)    The identity map I : M → M is a homomorphism.
        3)    The composition of homomorphisms is a homomorphism.
        4)    The sum of homomorphisms is a homomorphism. If f, g : M → N are
              homomorphisms, define (f + g) : M → N by (f + g)(a) = f (a) + g(a).
              Then f + g is a homomorphism. Also (−f ) defined by (−f )(a) = −f (a)
              is a homomorphism. If h : N → P is a homomorphism,
              h ◦ (f + g) = (h ◦ f ) + (h ◦ g). If k : P → M is a homomorphism,
              (f + g ) ◦ k = (f ◦ k) + (g ◦ k).
        5)    HomR (M, N ) = Hom(MR , NR ), the set of all homomorphisms from M
              to N , forms an abelian group under addition. HomR (M, M ), with
              multiplication defined to be composition, is a ring.
        6)    If a bijection f : M → N is a homomorphism, then f −1 : N → M is also
              a homomorphism. In this case f and f −1 are called isomorphisms. A
              homomorphism f : M → M is called an endomorphism. An isomorphism
              f : M → M is called an automorphism. The units of the endomorphism
              ring HomR (M, M ) are the automorphisms. Thus the automorphisms on
              M form a group under composition. We will see later that if M = R n ,
              HomR (Rn , Rn ) is just the matrix ring Rn and the automorphisms
              are merely the invertible matrices.
        7)    If R is commutative and r ∈ R, then g : M → M defined by g(a) = ar
              is a homomorphism. Furthermore, if f : M → N is a homomorphism,
              f r defined by (f r)(a) = f (ar) = f (a)r is a homomorphism.
        8)    If R is commutative, HomR (M, N ) is an R-module.
        9)    Suppose f : M → N is a homomorphism, G ⊂ M is a submodule,
              and H ⊂ N is a submodule. Then f (G) is a submodule of N
              and f −1 (H) is a submodule of M. In particular, image(f ) is a
              submodule of N and ker(f ) = f −1 (0) is a submodule of M .
                                                 ¯

Proof        This is just a series of observations.
Chapter 5       Linear Algebra                                                      71




Abelian groups are Z-modules            On page 21, it is shown that any additive
group M admits a scalar multiplication by integers, and if M is abelian, the properties
are satisfied to make M a Z-module. Note that this is the only way M can be a Z-
module, because a1 = a, a2 = a + a, etc. Furthermore, if f : M → N is a group
homomorphism of abelian groups, then f is also a Z-module homomorphism.

Summary        Additive abelian groups are “the same things” as Z-modules. While
group theory in general is quite separate from linear algebra, the study of additive
abelian groups is a special case of the study of R-modules.

Exercise   R-modules are also Z-modules and R-module homomorphisms are also
Z-module homomorphisms. If M and N are Q-modules and f : M → N is a
Z-module homomorphism, must it also be a Q-module homomorphism?

                             Homomorphisms on Rn

    Rn as an R-module          On page 54 it was shown that the additive abelian
group Rm,n admits a scalar multiplication by elements in R. The properties listed
there were exactly those needed to make Rm,n an R-module. Of particular importance
is the case Rn = R ⊕ · · ⊕R = Rn,1 (see page 53). We begin with the case n = 1.

R as a right R-module        Let M = R and define scalar multiplication on the right
by ar = a · r. That is, scalar multiplication is just ring multiplication. This makes
R a right R-module denoted by RR (or just R). This is the same as the definition
before for Rn when n = 1.

Theorem        Suppose R is a ring and N is a subset of R. Then N is a submodule
of RR (R R) iff N is a right (left) ideal of R.
Proof     The definitions are the same except expressed in different language.

Theorem      Suppose M = MR and f, g : R → M are homomorphisms with f (1) =
                                                                                ¯
g(1). Then f = g. Furthermore, if m ∈ M , ∃! homomorphism h : R → M with
  ¯
h(1) = m. In other words, HomR (R, M ) ≈ M .
  ¯
Proof     Suppose f (1) = g(1). Then f (r) = f (1 · r) = f (1)r = g(1)r = g(1 · r) =
                     ¯      ¯                   ¯           ¯       ¯       ¯
g(r). Given m ∈ M , h : R → M defined by h(r) = mr is a homomorphism. Thus
72                                                    Linear Algebra        Chapter 5

evaluation at 1 gives a bijection from HomR (R, M ) to M , and this bijection is clearly
              ¯
a group isomorphism. If R is commutative, it is an isomorphism of R-modules.

   In the case M = R, the above theorem states that multiplication on left by some
m ∈ R defines a right R-module homomorphism from R to R, and every module
homomorphism is of this form. The element m should be thought of as a 1 × 1
matrix. We now consider the case where the domain is Rn .



                                                                                    
                                                        0                            r1
                                                       ¯ 
                                                       ·                        · 
                                                                                       

Homomorphisms on Rn           Define ei ∈ Rn by ei = 
                                                                                     
                                                       1i . Note that any 
                                                                                      
                                                       ¯ 
                                                                                        
                                                       ·                        · 
                                                                                       
                                                        0                            rn
                                                        ¯
can be written uniquely as e1 r1 + · · +en rn . The sequence {e1 , .., en } is called the
canonical free basis or standard basis for R n .

Theorem           Suppose M = MR and f, g : Rn → M are homomorphisms with
f (ei ) = g(ei ) for 1 ≤ i ≤ n. Then f = g. Furthermore, if m1 , m2 , ..., mn ∈ M , ∃!
homomorphism h : Rn → M with h(ei ) = mi for 1 ≤ i ≤ m. The homomorphism
h is defined by h(e1 r1 + · · +en rn ) = m1 r1 + · · +mn rn .

Proof      The proof is straightforward. Note this theorem gives a bijection from
HomR (R , M ) to M n = M × M × · · ×M and this bijection is a group isomorphism.
        n

We will see later that the product M n is an R-module with scalar multiplication
defined by (m1 , m2 , .., mn )r = (m1 r, m2 r, .., mn r). If R is commutative so that
HomR (Rn , M ) is an R-module, this theorem gives an R-module isomorphism from
HomR (Rn , M ) to M n .

   This theorem reveals some of the great simplicity of linear algebra. It does not
matter how complicated the ring R is, or which R-module M is selected. Any
R-module homomorphism from Rn to M is determined by its values on the basis,
and any function from that basis to M extends uniquely to a homomorphism from
Rn to M .

Exercise      Suppose R is a field and f : RR → M is a non-zero homomorphism.
Show f is injective.
Chapter 5        Linear Algebra                                                          73




   Now let’s examine the special case M = Rm and show HomR (Rn , Rm ) ≈ Rm,n .

Theorem      Suppose A = (ai,j ) ∈ Rm,n . Then f : Rn → Rm defined by f (B) = AB
is a homomorphism with f (ei ) = column i of A. Conversely, if v1 , . . . , vn ∈ Rm , define
A ∈ Rm,n to be the matrix with column i = vi . Then f defined by f (B) = AB is
the unique homomorphism from Rn to Rm with f (ei ) = vi .

    Even though this follows easily from the previous theorem and properties of ma-
trices, it is one of the great classical facts of linear algebra. Matrices over R give
R-module homomorphisms! Furthermore, addition of matrices corresponds to addi-
tion of homomorphisms, and multiplication of matrices corresponds to composition
of homomorphisms. These properties are made explicit in the next two theorems.

Theorem       If f, g : Rn → Rm are given by matrices A, C ∈ Rm,n , then f + g is
given by the matrix A + C. Thus HomR (Rn , Rm ) and Rm,n are isomorphic as additive
groups. If R is commutative, they are isomorphic as R-modules.

Theorem      If f : Rn → Rm is the homomorphism given by A ∈ Rm,n and g :
R → R is the homomorphism given by C ∈ Rp,m , then g ◦ f : Rn → Rp is given by
  m      p

CA ∈ Rp,n . That is, composition of homomorphisms corresponds to multiplication
of matrices.

Proof      This is just the associative law of matrix multiplication, C(AB) = (CA)B.

   The previous theorem reveals where matrix multiplication comes from. It is the
matrix which represents the composition of the functions. In the case where the
domain and range are the same, we have the following elegant corollary.

Corollary      HomR (Rn , Rn ) and Rn are isomorphic as rings. The automorphisms
correspond to the invertible matrices.

   This corollary shows one way non-commutative rings arise, namely as endomor-
phism rings. Even if R is commutative, Rn is never commutative unless n = 1.

   We now return to the general theory of modules (over some given ring R).
74                                                           Linear Algebra   Chapter 5

                          Cosets and Quotient Modules

   After seeing quotient groups and quotient rings, quotient modules go through
without a hitch. As before, R is a ring and module means R-module.

Theorem        Suppose M is a module and N ⊂ M is a submodule. Since N is a
normal subgroup of M , the additive abelian quotient group M/N is defined. Scalar
multiplication defined by (a + N )r = (ar + N ) is well-defined and gives M/N the
structure of an R-module. The natural projection π : M → M/N is a surjective
homomorphism with kernel N . Furthermore, if f : M → M̄ is a surjective homomor-
phism with ker(f ) = N , then M/N ≈ M̄ (see below).
Proof       On the group level, this is all known from Chapter 2 (see pages 27 and 29).
It is only necessary to check the scalar multiplication, which is obvious.



    The relationship between quotients and homomorphisms for modules is the same
as for groups and rings, as shown by the next theorem.

Theorem        Suppose f : M → M̄ is a homomorphism and N is a submodule of M .
If N ⊂ ker(f ), then f¯ : (M/N ) → M̄ defined by f¯(a + N ) = f (a) is a well-defined
homomorphism making the following diagram commute.

                                             f
                                    M                   - M̄

                                                        >
                                                         
                                                    
                                π               
                                            
                                            f¯
                                    ? 
                                 M/N

Thus defining a homomorphism on a quotient module is the same as defining a homo-
morphism on the numerator that sends the denominator to 0. The image of f¯ is the
                                                              ¯
image of f , and the kernel of f¯ is ker(f )/N . Thus if N = ker(f ), f¯ is injective, and
thus (M/N ) ≈ image(f ). Therefore for any homomorphism f , (domain(f )/ker(f )) ≈
image(f ).

Proof      On the group level this is all known from Chapter 2 (see page 29). It is
only necessary to check that f¯ is a module homomorphism, and this is immediate.
Chapter 5       Linear Algebra                                                       75




Theorem        Suppose M is an R-module and K and L are submodules of M .

       i)  The natural homomorphism K → (K + L)/L is surjective with kernel
                                   ≈
           K ∩ L. Thus (K/K ∩ L) → (K + L)/L is an isomorphism.
       ii) Suppose K ⊂ L. The natural homomorphism M/K → M/L is surjective
                                               ≈
           with kernel L/K. Thus (M/K)/(L/K) → M/L is an isomorphism.

Examples       These two examples are for the case R = Z, i.e., for abelian groups.

       1)   M =Z     K = 3Z    L = 5Z    K ∩ L = 15Z               K +L=Z
            K/K ∩ L = 3Z/15Z ≈ Z/5Z = (K + L)/L

       2)   M =Z    K = 6Z   L = 3Z    (K ⊂ L)
            (M/K)/(L/K) = (Z/6Z)/(3Z/6Z) ≈ Z/3Z = M/L

                            Products and Coproducts

    Infinite products work fine for modules, just as they do for groups and rings.
This is stated below in full generality, although the student should think of the finite
case. In the finite case something important holds for modules that does not hold
for non-abelian groups or rings – namely, the finite product is also a coproduct. This
makes the structure of module homomorphisms much more simple. For the finite
case we may use either the product or sum notation, i.e., M1 × M2 × · · ×Mn =
M1 ⊕ M2 ⊕ · · ⊕Mn .

Theorem                    an index set and for each t ∈ T , Mt is an R-module. On
              Suppose T is Y
the additive abelian group    Mt = Mt define scalar multiplication by {mt }r =
                                    Q

                             t∈T
{mt r}. Then Mt is an R-module and, for each s ∈ T , the natural projection
               Q

πs : Mt → Ms is a homomorphism. Suppose M is a module. Under the natural 1-1
    Q

correspondence from {functions f : M → Mt } to {sequence of functions {ft }t∈T
                                        Q

where ft : M → Mt }, f is a homomorphism iff each ft is a homomorphism.
Proof      We already know from Chapter 2 that f is a group homomorphism iff each
ft is a group homomorphism. Since scalar multiplication is defined coordinatewise,
f is a module homomorphism iff each ft is a module homomorphism.
76                                                              Linear Algebra             Chapter 5




Definition       If T is finite, the coproduct
                                     a       M and product are the same module. If T
is infinite, the coproduct or sum       Mt =     Mt = ⊕Mt is the submodule of Mt
                                                                               Q

                                           t∈T       t∈T
consisting of all sequences {mt } with only a finite number of non-zero terms. For
each s ∈ T , the inclusion homomorphisms is : Ms → ⊕Mt is defined by is (a) = {at }
where at = 0 if t 6= s and as = a. Thus each Ms may be considered to be a submodule
            ¯
of ⊕Mt .

Theorem       Suppose M is an R-module. There is a 1-1 correspondence from
{homomorphisms g : ⊕Mt → M } and {sequences of homomorphisms {gt }t∈T where
g t : Mt → X
           M } . Given g, gt is defined by gt = g ◦ it . Given {gt }, g is defined by
g({mt }) =   gt (mt ). Since there are only a finite number of non-zero terms, this
             t
sum is well defined.

   For T = {1, 2} the product and sum properties are displayed in the following
commutative diagrams.


                       M                                                     M
                             @                                                6 I
                                                                                 @
           f1                    @    f                         g1                @       g2
                         f           @ 2                                       g      @
                                      @                                                   @
                         ?             R
                                       @                                                   @
     M1  π          M1 ⊕ M 2          - M
                                      π2         2         M1          - M
                                                                             1 ⊕ M2
                                                                                              M2
                 1                                                i1                      i2


Theorem      For finite T , the 1-1 correspondences in the above theorems actually
produce group isomorphisms. If R is commutative, they give isomorphisms of R-
modules.

           HomR (M, M1 ⊕ · · ⊕Mn ) ≈ HomR (M, M1 ) ⊕ · · ⊕HomR (M, Mn )                         and
           HomR (M1 ⊕ · · ⊕Mn , M ) ≈ HomR (M1 , M ) ⊕ · · ⊕HomR (Mn , M )

Proof        Let’s look at this theorem for products with n = 2. All it says is that if f =
(f1 , f2 ) and h = (h1 , h2 ), then f + h = (f1 + h1 , f2 + h2 ). If R is commutative, so that
the objects are R-modules and not merely additive groups, then the isomorphisms
are module isomorphisms. This says merely that f r = (f1 , f2 )r = (f1 r, f2 r).
Chapter 5       Linear Algebra                                                     77

Exercise     Suppose M and N are R-modules. Show that M ⊕ N is isomorphic to
N ⊕ M. Now suppose A ⊂ M, B ⊂ N are submodules and show (M ⊕ N )/(A ⊕ B)
is isomorphic to (M/A) ⊕ (N/B). In particular, if a ∈ R and b ∈ R, then
(R ⊕ R)/(aR ⊕ bR) is isomorphic to (R/aR) ⊕ (R/bR). For example, the abelian
group (Z ⊕ Z)/(2Z ⊕ 3Z) is isomorphic to Z2 ⊕ Z3 . These isomorphisms are trans-
parent and are used routinely in algebra without comment (see Th 4, page 118).

Exercise     Suppose R is a commutative ring, M is an R-module, and n ≥ 1. Define
a function α : HomR (Rn , M ) → M n which is a R-module isomorphism.

                                    Summands

  One basic question in algebra is “When does a module split as the sum of two
modules?”. Before defining summand, here are two theorems for background.

Theorem     Consider M1 = M1 ⊕0̄ as a submodule of M1 ⊕M2 . Then the projection
map π2 : M1 ⊕ M2 → M2 is a surjective homomorphism with kernel M1 . Thus
(M1 ⊕ M2 )/M1 is isomorphic to M2 . (See page 35 for the group version.)

   This is exactly what you would expect, and the next theorem is almost as intuitive.

Theorem         Suppose K and L are submodules of M and f : K ⊕ L → M is the
natural homomorphism, f (k, l) = k + l. Then the image of f is K + L and the
kernel of f is {(a, −a) : a ∈ K ∩ L}. Thus f is an isomorphism iff K + L = M and
K ∩ L = 0. In this case we write K ⊕ L = M . This abuse of notation allows us to
          ¯
avoid talking about “internal” and “external” direct sums.

Definition     Suppose K is a submodule of M . The statement that K is a summand
of M means ∃ a submodule L of M with K ⊕ L = M . According to the previous
theorem, this is the same as there exists a submodule L with K + L = M and
K ∩ L = 0. If such an L exists, it need not be unique, but it will be unique up to
         ¯
isomorphism, because L ≈ M/K. Of course, M and 0 are always summands of M .
                                                   ¯

Exercise    Suppose M is a module and K = {(m, m) : m ∈ M } ⊂ M ⊕ M . Show
K is a submodule of M ⊕ M which is a summand.

Exercise    R is a module over Q, and Q ⊂ R is a submodule. Is Q a summand of
R? With the material at hand, this is not an easy question. Later on, it will be easy.
78                                                     Linear Algebra          Chapter 5

Exercise      Answer the following questions about abelian groups, i.e., Z-modules.
(See the third exercise on page 35.)

       1)   Is 2Z a summand of Z?
       2)   Is 2Z4 a summand of Z4 ?
       3)   Is 3Z12 a summand of Z12 ?
       4)   Suppose m, n > 1. When is nZmn a summand of Zmn ?

Exercise       If T is a ring, define the center of T to be the subring {t : ts =
st for all s ∈ T }. Let R be a commutative ring and T = Rn . There is a exercise
on page 57 to show that the center of T is the subring of scalar matrices. Show R n
is a left T -module and find HomT (Rn , Rn ).

                Independence, Generating Sets, and Free Basis

   This section is a generalization and abstraction of the brief section Homomor-
phisms on Rn . These concepts work fine for an infinite index set T because linear
combination means finite linear combination. However, to avoid dizziness, the student
should first consider the case where T is finite.

Definition      Suppose M is an R-module, T is an index set, and for each t ∈ T ,
st ∈ M . Let S be the sequence {st }t∈T = {st }. The statement that S is dependent
means ∃ a finite number of distinct elements t1 , ..., tn in T , and elements r1 , .., rn in
R, not all zero, such that the linear combination st1 r1 + · · +stn rn = 0. Otherwise,
                                                                          ¯
S is independent. Note that if some st = 0, then S is dependent. Also if ∃ distinct
                                            ¯
elements t1 and t2 in T with st1 = st2 , then S is dependent.

    Let SR be the set of all linear combinations st1 r1 + · · +stn rn . SR is a submodule
of M called the submodule generated by S. If S is independent and generates M ,
then S is said to be a basis or free basis for M . In this case any v ∈ M can be written
uniquely as a linear combination of elements in S. An R-module M is said to be a
free R-module if it is zero or if it has a basis. The next two theorems are obvious,
except for the confusing notation. You might try first the case T = {1, 2, ..., n} and
⊕Rt = Rn (see p 72).

                                                                                     M
Theorem        For each t ∈ T , let Rt = RR and for each c ∈ T , let ec ∈ ⊕Rt =            Rt
                                                                                     t∈T
be ec = {rt } where rc = l and rt = 0 if t 6= c. Then {ec }c∈T is a basis for ⊕Rt called
                         ¯          ¯
the canonical basis or standard basis.
Chapter 5       Linear Algebra                                                        79

Theorem          Suppose N is an R-module and M is a free R-module with a basis
{st }. Then ∃ a 1-1 correspondence from the set of all functions g : {st } → N and the
set of all homomorphisms f : M → N . Given g, define f by f (st1 r1 + · · +stn rn ) =
g(st1 )r1 + · · +g(stn )rn . Given f , define g by g(st ) = f (st ). In other words, f is
completely determined by what it does on the basis S, and you are “free” to send the
basis any place you wish and extend to a homomorphism.

    Recall that we have already had the preceding theorem in the case S is the canon-
ical basis for M = Rn (p 72). The next theorem is so basic in linear algebra that it
is used without comment. Although the proof is easy, it should be worked carefully.

Theorem      Suppose N is a module, M is a free module with basis S = {st }, and
f : M → N is a homomorphism. Let f (S) be the sequence {f (st )} in N .

       1)   f (S) generates N iff f is surjective.
       2)   f (S) is independent in N iff f is injective.
       3)   f (S) is a basis for N iff f is an isomorphism.
       4)   If h : M → N is a homomorphism, then f = h iff f | S = h | S.

Exercise        Let (A1 , .., An ) be a sequence of n vectors with each Ai ∈ Zn .
Show this sequence is linearly independent over Z iff it is linearly independent over Q.
Is it true the sequence is linearly independent over Z iff it is linearly independent
over R? This question is difficult until we learn more linear algebra.

                       Characterization of Free Modules

   Any free R-module is isomorphic to one of the canonical free R-modules ⊕Rt .
This is just an observation, but it is a central fact in linear algebra.

Theorem
    M       A non-zero R-module M is free iff ∃ an index set T such that
M≈    Rt . In particular, M has a finite free basis of n elements iff M ≈ Rn .
     t∈T



Proof      If M is isomorphic to ⊕Rt then M is certainly free. So now suppose M
has a free basis {st }. Then the homomorphism f : M → ⊕Rt with f (st ) = et sends
the basis for M to the canonical basis for ⊕Rt . By 3) in the preceding theorem, f is
an isomorphism.
80                                                      Linear Algebra          Chapter 5




Exercise       Suppose R is a commutative ring, A ∈ Rn , and the homomorphism
      n      n
f : R → R defined by f (B) = AB is surjective. Show f is an isomorphism, i.e.,
show A is invertible. This is a key theorem in linear algebra, although it is usually
stated only for the case where R is a field. Use the fact that {e1 , .., en } is a free basis
for Rn .

     The next exercise is routine, but still informative.
                                                 !
                                 2 1     0
Exercise    Let R = Z, A =                    and f: Z3 → Z2 be the group homo-
                                 3 2 −5
morphism defined by A. Find a non-trivial linear combination of the columns of A
which is 0. Also find a non-zero element of kernel(f ).
         ¯

   If R is a commutative ring, you can relate properties of R as an R-module to
properties of R as a ring.

Exercise       Suppose R is a commutative ring and v ∈ R, v 6= 0.
                                                               ¯
        1)   v is independent iff v is                                      .
        2)   v is a basis for R iff v generates R iff v is                         .

Note that 2) here is essentially the first exercise for the case n = 1. That is, if
f : R → R is a surjective R-module homomorphism, then f is an isomorphism.




Relating these concepts to matrices

    The theorem stated below gives a summary of results we have already had. It
shows that certain concepts about matrices, linear independence, injective homo-
morphisms, and solutions of equations, are all the same — they are merely stated in
different language. Suppose A ∈ Rm,n and f : Rn → Rm is the homomorphism associ-
ated with A, i.e., f (B) = AB.Let v1 , .., vn ∈ Rm be the columns of A, i.e., f (e
                                                                                   i
                                                                                      ) = vi
                                b1                                                     c1
= column i of A. Let B =  .  represent an element of Rn and C =  . 
                                                                                        

                                bn                                                     cm
Chapter 5         Linear Algebra                                                           81

represent an element of Rm .

Theorem

       1)     The element f (B) is a linear combination of the columns of A, that is
              f (B) = f (e1 b1 + · · +en bn ) = v1 b1 + · · +vn bn . Thus the image of f
              is generated by the columns of A. (See bottom of page 89.)

       2)     {v1 , .., vn } generates Rm iff f is surjective iff (for any C ∈ Rm , AX = C
              has a solution).

       3)     {v1 , .., vn } is independent iff f is injective iff AX = 0 has a unique
                                                                        ¯
              solution iff (∃ C ∈ Rm such that AX = C has a unique solution).

       4)     {v1 , .., vn } is a basis for Rm iff f is an isomorphism iff (for any C ∈ Rm ,
              AX = C has a unique solution).

Relating these concepts to square matrices

    We now look at the preceding theorem in the special case where n = m and R
is a commutative ring. So far in this chapter we have just been cataloging. Now we
prove something more substantial, namely that if f : Rn → Rn is surjective, then f
is injective. Later on we will prove that if R is a field, injective implies surjective.

Theorem       Suppose R is a commutative ring, A ∈ Rn , and f : Rn → Rn is defined
by f (B) = AB. Let v1 , .., vn ∈ Rn be the columns of A, and w1 , .., wn ∈ Rn = R1,n
be the rows of A. Then the following are equivalent.

       1)     f is an automorphism.
       2)     A is invertible, i.e., | A | is a unit in R.
       3)     {v1 , .., vn } is a basis for Rn .
       4)     {v1 , .., vn } generates Rn .
       5)     f is surjective.
       2t )   At is invertible, i.e., | At | is a unit in R.
       3t )   {w1 , .., wn } is a basis for Rn .
82                                                        Linear Algebra    Chapter 5

        4t )    {w1 , .., wn } generates Rn .

Proof         Suppose 5) is true and show 2). Since f is onto, ∃ u1 , ..., un ∈ Rn with
f (ui ) = ei . Let g : Rn → Rn be the homomorphism satisfying g(ei ) = ui . Then f ◦ g
is the identity. Now g comes from some matrix D and thus AD = I. This shows that
A has a right inverse and is thus invertible. Recall that the proof of this fact uses
determinant, which requires that R be commutative (see the exercise on page 64).

    We already know the first three properties are equivalent, 4) and 5) are equivalent,
and 3) implies 4). Thus the first five are equivalent. Furthermore, applying this
result to At shows that the last three properties are equivalent to each other. Since
| A |=| At |, 2) and 2t ) are equivalent.

                                 Uniqueness of Dimension

   There exists a ring R with R2 ≈ R3 as R-modules, but this is of little interest. If
R is commutative, this is impossible, as shown below. First we make a convention.

Convention           For the remainder of this chapter, R will be a commutative ring.

Theorem           If f : Rm → Rn is a surjective R-module homomorphism, then m ≥ n.


Proof       Suppose k = n − m is positive. Define h : (Rm ⊕ Rk = Rn ) → Rn by
h(u, v) = f (u). Then h is a surjective homomorphism, and by the previous section,
also injective. This is a contradiction and thus m ≥ n.

Corollary          If f : Rm → Rn is an isomorphism, then m = n.
Proof          Each of f and f −1 is surjective, so m = n by the previous theorem.

Corollary          If {v1 , .., vm } generates Rn , then m ≥ n.
Proof      The hypothesis implies there is a surjective homomorphism R m → Rn . So
this follows from the first theorem.

Lemma       Suppose M is a f.g. module (i.e., a finite generated R-module). Then
if M has a basis, that basis is finite.
Chapter 5       Linear Algebra                                                        83

Proof      Suppose U ⊂ M is a finite generating set and S is a basis. Then any
element of U is a finite linear combination of elements of S, and thus S is finite.

Theorem        Suppose M is a f.g. module. If M has a basis, that basis is finite
and any other basis has the same number of elements. This number is denoted by
dim(M ), the dimension of M. (By convention, 0 is a free module of dimension 0.)
                                             ¯
Proof     By the previous lemma, any basis for M must be finite. M has a basis of
n elements iff M ≈ Rn . The result follows because Rn ≈ Rm iff n = m.

                                  Change of Basis

    Before changing basis, we recall what a basis is. Previously we defined generat-
ing, independence, and basis for sequences, not for collections. For the concept of
generating it matters not whether you use sequences or collections, but for indepen-
dence and basis,!you must use sequences. Consider the columns of the real matrix
           2 3 2
A=                    . If we consider the column vectors of A as a collection, there are
           1 4 1
only two of them, yet we certainly don’t wish to say the columns of A form a basis for
R2 . In a set or collection, there is no concept of repetition. In order to make sense,
we must consider the columns of A as an ordered triple of vectors, and this sequence
is dependent. In the definition of basis on page 78, basis is defined for sequences, not
for sets or collections.
    Two sequences cannot begin to be equal unless they have the same index set.
Here we follow the classical convention that an index set with n elements will be
{1, 2, .., n}, and thus a basis for M with n elements is a sequence S = {u1 , .., un }
or if you wish, S = (u1 , .., un ) ∈ M n . Suppose M is an R-module with a basis of
n elements. Recall there is a bijection α : HomR (Rn , M ) → M n defined by α(h) =
(h(e1 ), .., h(en )). Now h : Rn → M is an isomorphism iff α(h) is a basis for M .

Summary         The point of all this is that selecting a basis of n elements for M
is the same as selecting an isomorphism from Rn to M , and from this viewpoint,
change of basis can be displayed by the diagram below.

    Endomorphisms on Rn are represented by square matrices, and thus have a de-
terminant and trace. Now suppose M is a f.g. free module and f : M → M is a
homomorphism. In order to represent f by a matrix, we must select a basis for M
(i.e., an isomorphism with Rn ). We will show that this matrix is well defined up to
similarity, and thus the determinant, trace, and characteristic polynomial of f are
well-defined.
84                                                    Linear Algebra         Chapter 5

Definition      Suppose M is a free module, S = {u1 , .., un } is a basis for M , and
f : M → M is a homomorphism. The matrix A = (ai,j ) ∈ Rn of f w.r.t. the basis
S is defined by f (ui ) = u1 a1,i + · · +un an,i . (Note that if M = Rn and ui = ei , A is
the usual matrix associated with f ).

Theorem          Suppose T = {v1 , .., vn } is another basis for M and B ∈ Rn is the
matrix of f w.r.t. T . Define C = (ci,j ) ∈ Rn by vi = u1 c1,i + · · +un cn,i . Then C is
invertible and B = C −1 AC, i.e., A and B are similar. Therefore |A| = |B|,
trace(A)=trace(B), and A and B have the same characteristic polynomial (see page
66 of chapter 4).
   Conversely, suppose C = (ci,j ) ∈ Rn is invertible. Define T = {v1 , .., vn } by
vi = u1 c1,i + · · +un cn,i . Then T is a basis for M and the matrix of f w.r.t. T is
B = C −1 AC. In other words, conjugation of matrices corresponds to change of basis.

Proof      The proof follows by seeing that the following diagram is commutative.

                                           B
                    Rn                                       -        Rn
                         ei                                     ei
                         @
                         I                                        
                             @I
                              @                             
                             ≈@@R
                                @
                                  vi                  vi     ≈
                                @R
                                 @         f
                  C ≈                  M        - M                  ≈ C
                                 
                                 ui                   uI
                                                       @
                                                       i@ ≈
                             ≈                           @
                                                          I
                                                           @
                                                           @
                     ?                                                 ?
                                                             R@
                                                             @
                         ei                                     e@
                                                                 R
                                                                 i
                    Rn                                       -        Rn
                                           A

   The diagram also explains what it means for A to be the matrix of f w.r.t. the
basis S. Let h : Rn → M be the isomorphism with h(ei ) = ui for 1 ≤ i ≤ n. Then
the matrix A ∈ Rn is the one determined by the endomorphism h−1 ◦ f ◦ h : Rn → Rn .
In other words, column i of A is h−1 (f (h(ei ))).
   An important special case is where M = Rn and f : Rn → Rn is given by some
matrix W . Then h is given by the matrix U whose ith column is ui and A =
U −1 W U. In other words, W represents f w.r.t. the standard basis, and U −1 W U
represents f w.r.t. the basis {u1 , .., un }.

Definition      Suppose M is a f.g. free module and f : M → M is a homomorphism.
Define |f | to be |A|, trace(f ) to be trace(A), and CPf (x) to be CPA (x), where A is
Chapter 5       Linear Algebra                                                        85

the matrix of f w.r.t. some basis. By the previous theorem, all three are well-defined,
i.e., do not depend upon the choice of basis.



                                                                                  !
                                        2       2                          3  3
Exercise      Let R = Z and f : Z → Z be defined by f (D) =                           D.
                                                                           0 −1
                                        (       !           !)
                                            2           3
Find the matrix of f w.r.t. the basis               ,            .
                                            1           1

Exercise       Let L ⊂ R2 be the line L = {(r, 2r)t : r ∈ R}. Show there is one
and only one homomorphism f : R2 → R2 which is the identity on L and has
f ((−1, 1)t ) = (1, −1)t . Find the matrix A ∈ R2 which represents f with respect
to the basis {(1, 2)t , (−1, 1)t }. Find the determinant, trace, and characteristic
polynomial of f . Also find the matrix B ∈ R2 which represents f with respect to
the standard basis. Finally, find an invertible matrix C ∈ R2 with B = C −1 AC.

                                  Vector Spaces

    So far in this chapter we have been developing the theory of linear algebra in
general. The previous theorem, for example, holds for any commutative ring R, but
it must be assumed that the module M is free. Endomorphisms in general will not
have a determinant, trace, or characteristic polynomial. We now focus on the case
where R is a field F , and show that in this case, every F -module is free. Thus any
finitely generated F -module will have a well-defined dimension, and endomorphisms
on it will have well-defined determinant, trace, and characteristic polynomial.
    In this section, F is a field. F -modules may also be called vector spaces and
F -module homomorphisms may also be called linear transformations.

Theorem        Suppose M is an F -module and v ∈ M . Then v 6= 0 iff v is independent.
                                                               ¯
That is, if v ∈ V and r ∈ F , vr = 0 implies v = 0 in M or r = 0 in F .
                                   ¯             ¯                ¯
Proof       Suppose vr = 0 and r 6= 0. Then 0= (vr)r −1 = v1 = v.
                         ¯          ¯        ¯             ¯

Theorem        Suppose M 6= 0 is an F -module and v ∈ M . Then v generates M iff v
                             ¯
is a basis for M . Furthermore, if these conditions hold, then M ≈ FF , any non-zero
element of M is a basis, and any two elements of M are dependent.
86                                                         Linear Algebra           Chapter 5

Proof      Suppose v generates M . Then v 6= 0 and is thus independent by the
                                                ¯
previous theorem. In this case M ≈ F , and any non-zero element of F is a basis, and
any two elements of F are dependent.

Theorem          Suppose M 6= 0 is a finitely generated F -module. If S = {v1 , .., vm }
                                ¯
generates M , then any maximal independent subsequence of S is a basis for M . Thus
any finite independent sequence can be extended to a basis. In particular, M has a
finite free basis, and thus is a free F -module.
Proof       Suppose, for notational convenience, that {v1 , .., vn } is a maximal inde-
pendent subsequence of S, and n < i ≤ m. It must be shown that vi is a linear
combination of {v1 , .., vn }. Since {v1 , .., vn , vi } is dependent, ∃ r1 , ..., rn , ri not all
zero, such that v1 r1 + · · +vn rn + vi ri = 0. Then ri 6= 0 and vi = −(v1 r1 + · · +vn rn )ri−1 .
                                             ¯              ¯
Thus {v1 , .., vn } generates S and thus all of M . Now suppose T is a finite indepen-
dent sequence. T may be extended to a finite generating sequence, and inside that
sequence it may be extended to a maximal independent sequence. Thus T extends
to a basis.

    After so many routine theorems, it is nice to have one with real power. It not
only says any finite independent sequence can be extended to a basis, but it can be
extended to a basis inside any finite generating set containing it. This is one of the
theorems that makes linear algebra tick. The key hypothesis here is that the ring
is a field. If R = Z, then Z is a free module over itself, and the element 2 of Z is
independent. However it certainly cannot be extended to a basis. Also the finiteness
hypothesis in this theorem is only for convenience, as will be seen momentarily.




    Since F is a commutative ring, any two bases of M must have the same number
of elements, and thus the dimension of M is well defined (see theorem on page 83).

Theorem       Suppose M is an F -module of dimension n, and {v1 , ..., vm } is an
independent sequence in M. Then m ≤ n and if m = n, {v1 , .., vm } is a basis.
Proof       {v1 , .., vm } extends to a basis with n elements.

     The next theorem is just a collection of observations.

Theorem         Suppose M and N are finitely generated F -modules.
Chapter 5         Linear Algebra                                                  87

        1)    M ≈ F n iff dim(M ) = n.
        2)    M ≈ N iff dim(M ) = dim(N ).
        3)    F m ≈ F n iff n = m.
        4)    dim(M ⊕ N ) = dim(M ) + dim(N ).




   Here is the basic theorem for vector spaces in full generality.

Theorem          Suppose M 6= 0 is an F -module and S = {vt }t∈T generates M .
                               ¯
        1)    Any maximal independent subsequence of S is a basis for M .
        2)    Any independent subsequence of S may be extended to a maximal
              independent subsequence of S, and thus to a basis for M .
        3)    Any independent subsequence of M can be extended to a basis for M .
              In particular, M has a free basis, and thus is a free F -module.
Proof      The proof of 1) is the same as in the case where S is finite. Part 2) will
follow from the Hausdorff Maximality Principle. An independent subsequence of S is
contained in a maximal monotonic tower of independent subsequences. The union of
these independent subsequences is still independent, and so the result follows. Part
3) follows from 2) because an independent sequence can always be extended to a
generating sequence.

Theorem         Suppose M is an F -module and K ⊂ M is a submodule.

        1)    K is a summand of M , i.e., ∃ a submodule L of M with K ⊕ L = M .
        2)    If M is f.g., then dim(K) ≤ dim(M ) and K = M iff dim(K) = dim(M ).

Proof    Let T be a basis for K. Extend T to a basis S for M . Then S −T generates
a submodule L with K ⊕ L = M. Part 2) follows from 1).

Corollary    Q is a summand of R. In other words, ∃ a Q-submodule V ⊂ R
with Q ⊕ V = R as Q-modules. (See exercise on page 77.)
Proof        Q is a field, R is a Q-module, and Q is a submodule of R.

Corollary    Suppose M is a f.g. F -module, N is an F -module, and f : M → N
is a homomorphism. Then dim(M ) = dim(ker(f )) + dim(image(f )).
88                                                           Linear Algebra           Chapter 5

Proof      Let K = ker(f ) and L ⊂ M be a submodule with K ⊕ L = M . Then
f | L : L → image(f ) is an isomorphism.

Exercise     Suppose R is a domain with the property that, for R-modules, every
submodule is a summand. Show R is a field.

Exercise        Find a free Z-module which has a generating set containing no basis.

Exercise          The real vector space R2 is generated by the sequence S =
{(π, 0), (2, 1), (3, 2)}. Show there are three maximal independent subsequences of
S, and each is a basis for R2 . (Row vectors are used here just for convenience.)
    The real vector space R3 is generated by S = {(1, 1, 2), (1, 2, 1), (3, 4, 5), (1, 2, 0)}.
Show there are three maximal independent subsequences of S and each is a basis
for R3 . You may use determinant.




Square matrices over fields

     This theorem is just a summary of what we have for square matrices over fields.

Theorem           Suppose A ∈ Fn and f : F n → F n is defined by f (B) = AB. Let
v1 , .., vn ∈ F n be the columns of A, and w1 , .., wn ∈ F n = F1,n be the rows of A.
Then the following are equivalent.

        1)     {v1 , .., vn } is independent, i.e., f is injective.

        2)     {v1 , .., vn } is a basis for F n , i.e., f is an automorphism, i.e., A is
               invertible, i.e., | A |6= 0.
                                           ¯
        3)     {v1 , .., vn } generates F n , i.e., f is surjective.

        1t )   {w1 , .., wn } is independent.

        2t )   {w1 , .., wn } is a basis for F n , i.e., At is invertible, i.e., | At |6= 0.
                                                                                          ¯
        3t )   {w1 , .., wn } generates F n .
Chapter 5        Linear Algebra                                                           89

Proof      Except for 1) and 1t ), this theorem holds for any commutative ring R.
(See the section Relating these concepts to square matrices, pages 81 and 82.)
Parts 1) and 1t ) follow from the preceding section.

Exercise      Add to this theorem more equivalent statements in terms of solutions
of n equations in n unknowns.

Overview          Suppose each of X and Y is a set with n elements and f : X → Y is a
function. By the pigeonhole principle, f is injective iff f is bijective iff f is surjective.
Now suppose each of U and V is a vector space of dimension n and f : U → V is
a linear transformation. It follows from the work done so far that f is injective iff
f is bijective iff f is surjective. This shows some of the simple and definitive nature
of linear algebra.

Exercise      Let A = (A1 , .., An ) be an n × n matrix over Z with column i = Ai ∈
Zn . Let f : Zn → Zn be defined by f (B) = AB and f¯ : Rn → Rn be defined by
f¯(C) = AC. Show the following are equivalent. (See the exercise on page 79.)

       1)    f : Zn → Zn is injective.

       2)    The sequence (A1 , .., An ) is linearly independent over Z.

       3)    |A| 6= 0.

       4)    f¯ : Rn → Rn is injective.

       5)    The sequence (A1 , .., An ) is linearly independent over R.




Rank of a matrix        Suppose A ∈ Fm,n . The row (column) rank of A is defined
to be the dimension of the submodule of F n (F m ) generated by the rows (columns)
of A.

Theorem       If C ∈ Fm and D ∈ Fn are invertible, then the row (column) rank of
A is the same as the row (column) rank of CAD.
Proof      Suppose f : F n → F m is defined by f (B) = AB. Each column of A
is a vector in the range F m , and we know from page 81 that each f (B) is a linear
90                                                    Linear Algebra         Chapter 5

combination of those vectors. Thus the image of f is the submodule of F m generated
by the columns of A, and its dimension is the column rank of A. This dimension
is the same as the dimension of the image of g ◦ f ◦ h : F n → F m , where h is any
automorphism on F n and g is any automorphism on F m . This proves the theorem
for column rank. The theorem for row rank follows using transpose.

Theorem        If A ∈ Fm,n , the row rank and the column rank of A are equal. This
number is called the rank of A and is ≤ min{m, n}.
Proof        By the theorem above, elementary row and column operations change
neither the row rank nor the column rank. By row and column operations, A may be
changed to a matrix H where h1,1 = ·· = ht,t = 1 and all other entries are 0 (see the
                                               ¯                           ¯
first exercise on page 59). Thus row rank = t = column rank.

Exercise       Suppose A has rank t. Show that it is possible to select t rows and t
columns of A such that the determined t × t matrix is invertible. Show that the rank
of A is the largest integer t such that this is possible.

Exercise    Suppose A ∈ Fm,n has rank t. What is the dimension of the solution
set of AX = 0?
            ¯

Definition      If N and M are finite dimensional vector spaces and f : N → M is a
linear transformation, the rank of f is the dimension of the image of f . If f : F n → F m
is given by a matrix A, then the rank of f is the same as the rank of the matrix A.

                   Geometric Interpretation of Determinant

    Suppose V ⊂ Rn is some nice subset. For example, if n = 2, V might be the
interior of a square or circle. There is a concept of the n-dimensional volume of V .
For n = 1, it is length. For n = 2, it is area, and for n = 3 it is “ordinary volume”.
Suppose A ∈ Rn and f : Rn → Rn is the homomorphism given by A. The volume of
V does not change under translation, i.e., V and V + p have the same volume. Thus
f (V ) and f (V + p) = f (V ) + f (p) have the same volume. In street language, the next
theorem says that “f multiplies volume by the absolute value of its determinant”.

Theorem       The n-dimensional volume of f (V ) is ±|A|(the n-dimensional volume
of V ). Thus if |A| = ±1, f preserves volume.
Chapter 5       Linear Algebra                                                        91

Proof      If |A| = 0, image(f ) has dimension < n and thus f (V ) has n-dimensional
volume 0. If |A| 6= 0 then A is the product of elementary matrices (see page 59)
and for elementary matrices, the theorem is obvious. The result follows because the
determinant of the composition is the product of the determinants.

Corollary          If P is the n-dimensional parallelepiped determined by the columns
v1 , .. , vn of A, then the n-dimensional volume of P is ±|A|.

Proof      Let V = [0, 1] × · · ×[0, 1] = {e1 t1 + · · +en tn : 0 ≤ ti ≤ 1}. Then
P = f (V ) = {v1 t1 + · · +vn tn : 0 ≤ ti ≤ 1}.

       Linear functions approximate differentiable functions locally

    We continue with the special case F = R. Linear functions arise naturally in
business, science, and mathematics. However this is not the only reason that linear
algebra is so useful. It is a central fact that smooth phenomena may be approx-
imated locally by linear phenomena. Without this great simplification, the world
of technology as we know it today would not exist. Of course, linear transforma-
tions send the origin to the origin, so they must be adjusted by a translation. As
a simple example, suppose h : R → R is differentiable and p is a real number. Let
f : R → R be the linear transformation f (x) = h0 (p)x. Then h is approximated near
p by g(x) = h(p) + f (x − p) = h(p) + h0 (p)(x − p).

   Now suppose V ⊂ R2 is some nice subset and h = (h1 , h2 ) : V →!R2 is injective
                                                                 ∂h1   ∂h1
                                                                 ∂x    ∂y
and differentiable. Define the Jacobian by J(h)(x, y) =          ∂h2   ∂h2   and for each
                                                                 ∂x    ∂y
(x, y) ∈ V , let f (x, y) : R2 → R2 be the homomorphism defined by J(h)(x, y).
Then for any (p1 , p2 ) ∈ V , Zh Zis approximated near (p1 , p2 ) (after translation) by
f (p1 , p2 ). The area of V is        1dxdy. From the previous section we know that
                                  V
any homomorphism f multiplies area by | f |. The student may now understand
the following theorem from calculus. (Note that if h is the restriction of a linear
transformation from R2 to R2 , this theorem is immediate from the previous section.)

Theorem         Suppose the determinant
                                   Z Z of J(h)(x, y) is non-negative for each
(x, y) ∈ V . Then the area of h(V ) is          | J(h) | dxdy.
                                            V
92                                                  Linear Algebra         Chapter 5

                            The Transpose Principle

   We now return to the case where F is a field (of arbitrary characteristic). F -
modules may also be called vector spaces and submodules may be called subspaces.
The study of R-modules in general is important and complex. However the study of
F -modules is short and simple – every vector space is free and every subspace is a
summand. The core of classical linear algebra is not the study of vector spaces, but
the study of homomorphisms, and in particular, of endomorphisms. One goal is to
show that if f : V → V is a homomorphism with some given property, there exists
a basis of V so that the matrix representing f displays that property in a prominent
manner. The next theorem is an illustration of this.

Theorem       Let F be a field and n be a positive integer.

       1)   Suppose V is an n-dimensional vector space and f : V → V is a
            homomorphism with |f | = 0. Then ∃ a basis of V such that the matrix
                                         ¯
            representing f has its first row zero.
       2)   Suppose A ∈ Fn has |A| = 0. Then ∃ an invertible matrix C such that
                                         ¯
            C −1 AC has its first row zero.
       3)   Suppose V is an n-dimensional vector space and f : V → V is a
            homomorphism with |f | = 0. Then ∃ a basis of V such that the matrix
            representing f has its first column zero.
       4)   Suppose A ∈ Fn has |A| = 0. Then ∃ an invertible matrix D such that
                                         ¯
            D −1 AD has its first column zero.

    We first wish to show that these 4 statements are equivalent. We know that
1) and 2) are equivalent and also that 3) and 4) are equivalent because change of
basis corresponds to conjugation of the matrix. Now suppose 2) is true and show
4) is true. Suppose |A| = 0. Then |At | = 0 and by 2) ∃ C such that C −1 At C has
                            ¯                  ¯
first row zero. Thus (C −1 At C)t = C t A(C t )−1 has first row column zero. The result
follows by defining D = (C t )−1 . Also 4) implies 2).

    This is an example of the transpose principle. Loosely stated, it is that theorems
about change of basis correspond to theorems about conjugation of matrices and
theorems about the rows of a matrix correspond to theorems about the columns of a
matrix, using transpose. In the remainder of this chapter, this will be used without
further comment.
Chapter 5        Linear Algebra                                                         93

Proof of the theorem          We are free to select any of the 4 parts, and we select
part 3). Since | f |= 0, f is not injective and ∃ a non-zero v1 ∈ V with f (v1 ) = 0.
                                                                                     ¯
Now v1 is independent and extends to a basis {v1 , .., vn }. Then the matrix of f w.r.t
this basis has first column zero.
                                  !
                           3π 6
Exercise      Let A =                 . Find an invertible matrix C ∈ R2 so that C −1 AC
                           2π 4
                                               
                                   0 0 0
has first row zero. Also let A =  1 3 4  and find an invertible matrix D ∈ R3
                                        

                                   2 1 4
           −1
so that D AD has first column zero.

Exercise       Suppose M is an n-dimensional vector space over a field F , k is an
integer with 0 < k < n, and f : M → M is an endomorphism of rank k. Show
there is a basis for M so that the matrix representing f has its first n − k rows zero.
Also show there is a basis for M so that the matrix representing f has its first n − k
columns zero. Work these out directly without using the transpose principle.

                            Nilpotent Homomorphisms

   In this section it is shown that an endomorphism f is nilpotent iff all of its char-
acteristic roots are 0 iff it may be represented by a strictly upper triangular matrix.
                     ¯

Definition     An endomorphism f : V → V is nilpotent if ∃ m with f m = 0. Any
                                                                               ¯
f represented by a strictly upper triangular matrix is nilpotent (see page 56).

Theorem       Suppose V is an n-dimensional vector space and f : V → V is a
nilpotent homomorphism. Then f n = 0 and ∃ a basis of V such that the matrix
                                          ¯
representing f w.r.t. this basis is strictly upper triangular. Thus the characteristic
polynomial of f is CPf (x) = xn .
Proof       Suppose f 6= 0 is nilpotent. Let t be the largest positive integer with
                             ¯
f t 6= 0. Then f t (V ) ⊂ f t−1 (V ) ⊂ ·· ⊂ f (V ) ⊂ V . Since f is nilpotent, all of these
       ¯
inclusions are proper. Therefore t < n and f n = 0. Construct a basis for V by
                                                          ¯
starting with a basis for f t (V ), extending it to a basis for f t−1 (V ), etc. Then the
matrix of f w.r.t. this basis is strictly upper triangular.

Note       To obtain a matrix which is strictly lower triangular, reverse the order of
the basis.
94                                                   Linear Algebra        Chapter 5

Exercise      Use the transpose principle to write 3 other versions of this theorem.

Theorem        Suppose V is an n-dimensional vector space and f : V → V is a
homomorphism. Then f is nilpotent iff CPf (x) = xn . (See the exercise at the end
of Chapter 4 for the case n = 2.)

Proof      Suppose CPf (x) = xn . For n = 1 this implies f = 0, so suppose n > 1.
                                                               ¯
Since the constant term of CPf (x) is 0, the determinant of f is 0. Thus ∃ a basis
                                      ¯                           ¯
of V such that the matrix A representing f has its first column zero. Let B ∈ Fn−1
be the matrix obtained from A by removing its first row and first column. Now
CPA (x) = xn = xCPB (x). Thus CPB (x) = xn−1 and by induction on n, B is
nilpotent and so ∃ C such that C −1 BC is strictly upper triangular. Then
                                                                          
       1 0 · ·0            0 ∗ · ·∗           1 0 · ·0       0 ∗ · ·∗
      0                  ·                 0             0
                                                               
                                                                   
            −1                                                  −1
                                                               
      ·                                     ·
          C                    B                  C     =  · C BC 
                                                                 
                                        
      ·                  ·                 ·             ·
                                                               
                                                                   
       0                   0                  0              0

is strictly upper triangular.




Exercise             F is a field, A ∈ F3 is a lower triangular matrix of rank 2,
               Suppose
             0 0 0
and B =  1 0 0 . Using conjugation by elementary matrices, show there is an
                    

             0 1 0
invertible matrix C so that C −1 AC = B. Now suppose V is a 3-dimensional vector
space and f : V → V is a nilpotent endomorphism of rank 2. We know f can be
represented by a lower triangular matrix. Show there is a basis {v1 , v2 , v3 } for V so
that B is the matrix representing f . Also show that f (v1 ) = v2 , f (v2 ) = v3 , and
f (v3 ) = 0. In other words, there is a basis for V of the form {v, f (v), f 2(v)} with
          ¯
f 3 (v) = 0.
          ¯

Exercise    Suppose V is a 3-dimensional vector space and f : V → V is a nilpotent
endomorphism
            of
              rank 1. Show there is a basis for V so that the matrix representing
       0 0 0
f is  1 0 0 .
            

       0 0 0
Chapter 5         Linear Algebra                                                               95

                                        Eigenvalues

   Our standing hypothesis is that V is an n-dimensional vector space over a field F
and f : V → V is a homomorphism.

Definition       An element λ ∈ F is an eigenvalue of f if ∃ a non-zero v ∈ V with
f (v) = λv. Any such v is called an eigenvector. Eλ ⊂ V is defined to be the set of
all eigenvectors for λ (plus 0). Note that Eλ = ker(λI − f ) is a subspace of V . The
                             ¯
next theorem shows the eigenvalues of f are just the characteristic roots of f .

Theorem         If λ ∈ F then the following are equivalent.

        1)   λ is an eigenvalue of f , i.e., (λI − f ) : V → V is not injective.
        2)   | (λI − f ) |= 0.
                            ¯
        3)   λ is a characteristic root of f , i.e., a root of the characteristic
             polynomial CPf (x) = | (xI − A) |, where A is any matrix representing f .


Proof      It is immediate that 1) and 2) are equivalent, so let’s show 2) and 3)
are equivalent. The evaluation map F [x] → F which sends h(x) to h(λ) is a ring
homomorphism (see theorem on page 47). So evaluating (xI − A) at x = λ and
taking determinant gives the same result as taking the determinant of (xI − A) and
evaluating at x = λ. Thus 2) and 3) are equivalent.

  The nicest thing you can say about a matrix is that it is similar to a diagonal
matrix. Here is one case where that happens.

Theorem         Suppose λ1 , .., λk are distinct eigenvalues of f , and vi is an eigenvector
of λi for 1 ≤ i ≤ k. Then the following hold.

        1)   {v1 , .., vk } is independent.

        2)   If k = n, i.e., if CPf (x) = (x − λ1 ) · · · (x − λn ), then {v1 , .., vn } is a
             basis for V . The matrix of f w.r.t. this basis is the diagonal matrix whose
             (i, i) term is λi .

Proof       Suppose {v1 , .., vk } is dependent. Suppose t is the smallest positive integer
such that {v1 , .., vt } is dependent, and v1 r1 + · · +vt rt = 0 is a non-trivial linear
                                                                        ¯
combination. Note that at least two of the coefficients must be non-zero. Now
(f − λt )(v1 r1 + · · +vt rt ) = v1 (λ1 − λt )r1 + · · +vt−1 (λt−1 − λt )rt−1 + 0 = 0 is a shorter
                                                                                ¯ ¯
96                                                  Linear Algebra         Chapter 5

non-trivial linear combination. This is a contradiction and proves 1). Part 2) follows
from 1) because dim(V ) = n.
                                  !
                           0 1
Exercise       Let A =            ∈ R2 . Find an invertible C ∈ C2 such that
                         −1 0
C −1 AC is diagonal. Show that C cannot be selected in R2 . Find the characteristic
polynomial of A.

Exercise     Suppose V is a 3-dimensional vector space and f : V → V is an endo-
morphism with CPf (x) = (x − λ)3 . Show that (f − λI) has characteristic polynomial
x3 and is thus a nilpotentendomorphism.
                                       Show there is abasis for V so that the
                            λ 0 0         λ 0 0             λ 0 0
matrix representing f is  1 λ 0 ,  1 λ 0  or  0 λ 0 .
                                                                 

                            0 1 λ         0 0 λ             0 0 λ

    We could continue and finally give an ad hoc proof of the Jordan canonical form,
but in this chapter we prefer to press on to inner product spaces. The Jordan form
will be developed in Chapter 6 as part of the general theory of finitely generated
modules over Euclidean domains. The next section is included only as a convenient
reference.

                             Jordan Canonical Form

    This section should be just skimmed or omitted entirely. It is unnecessary for the
rest of this chapter, and is not properly part of the flow of the chapter. The basic
facts of Jordan form are summarized here simply for reference.

  The statement that a square matrix B over a field F is a Jordan block means that
∃ λ ∈ F such that B is a lower triangular matrix of the form
                       
       λ            0
      1 λ
                       
                        
                        . B gives a homomorphism g : F m → F m with g(em ) = λem
                       
B=
             ·         
     
                 ·     
                        
         0        1 λ

and g(ei ) = ei+1 + λei for 1 ≤ i < m. Note that CPB (x) = (x − λ)m and so λ is the
only eigenvalue of B, and B satisfies its characteristic polynomial, i.e., CPB (B) = 0.
                                                                                     ¯
Chapter 5            Linear Algebra                                                        97

Definition           A matrix D ∈ Fn is in Jordan form if ∃ Jordan blocks B1 , .. , Bt such

                B1
                                           
         
                     B2           0        
                                            
                           ·
                                           
                                           
that D =                                   .   Suppose D is of this form and Bi ∈ Fni has
         
                              ·            
                                            
                       0
                                           
                                           
                                       Bt

eigenvalue λi . Then n1 + · · +nt = n and CPD (x) = (x − λ1 )n1 · ·(x − λt )nt . Note that
a diagonal matrix is a special case of Jordan form. D is a diagonal matrix iff each
ni = 1, i.e., iff each Jordan block is a 1 × 1 matrix.

Theorem           If A ∈ Fn , the following are equivalent.

       1)       ∃ an invertible C ∈ Fn such that C −1 AC is in Jordan form.

       2)       ∃ λ1 , .., λn ∈ F (not necessarily distinct) such that CPA (x) = (x − λ1 ) · ·
                (x − λn ). (In this case we say that all the eigenvalues of A belong to F .)

Theorem         Jordan form (when it exists) is unique. This means that if A and D are
similar matrices in Jordan form, they have the same Jordan blocks, except possibly
in different order.

    The reader should use the transpose principle to write three other versions of the
first theorem. Also note that we know one special case of this theorem, namely that
if A has n distinct eigenvalues in F , then A is similar to a diagonal matrix. Later on
it will be shown that if A is a symmetric real matrix, then A is similar to a diagonal
matrix.
    Let’s look at the classical case A ∈ Rn . The complex numbers are algebraically
closed. This means that CPA (x) will factor completely in C[x], and thus ∃ C ∈ Cn
with C −1 AC in Jordan form. C may be selected to be in Rn iff all the eigenvalues
of A are real.

Exercise       Find all real matrices in Jordan form that have the following charac-
teristic polynomials: x(x − 2), (x − 2)2 , (x − 2)(x − 3)(x − 4), (x − 2)(x − 3)2 ,
(x − 2)2 (x − 3)2 , (x − 2)(x − 3)3 .

Exercise        Suppose D ∈ Fn is in Jordan form and has characteristic polynomial
a0 + a1 x + · · +xn . Show a0 I + a1 D + · · +D n = 0, i.e., show CPD (D) = 0.
                                                    ¯                       ¯
98                                                         Linear Algebra            Chapter 5

Exercise      (Cayley-Hamilton Theorem)            Suppose E is a field and A ∈ En .
Assume the theorem that there is a field F containing E such that CPA (x) factors
completely in F [x]. Thus ∃ an invertible C ∈ Fn such that D = C −1 AC is in Jordan
form. Use this to show CPA (A) = 0. (See the second exercise on page 66.)
                                   ¯

Exercise     Suppose A ∈ Fn is in Jordan form. Show A is nilpotent iff An = 0
                                                                            ¯
iff CPA (x) = xn . (Note how easy this is in Jordan form.)

                                   Inner Product Spaces

    The two most important fields for mathematics and science in general are the
real numbers and the complex numbers. Finitely generated vector spaces over R or
C support inner products and are thus geometric as well as algebraic objects. The
theories for the real and complex cases are quite similar, and both could have been
treated here. However, for simplicity, attention is restricted to the case F = R.
In the remainder of this chapter, the power and elegance of linear algebra become
transparent for all to see.

Definition      Suppose V is a real vector space. An inner product (or dot product)
on V is a function V × V → R which sends (u, v) to u · v and satisfies


  1)    (u1 r1 + u2 r2 ) · v = (u1 · v)r1 + (u2 · v)r2     for all u1 , u2 , v ∈ V
        v · (u1 r1 + u2 r2 ) = (v · u1 )r1 + (v · u2 )r2   and r1 , r2 ∈ R.

  2)    u·v = v·u                                          for all u, v ∈ V .

  3)    u · u ≥ 0 and u · u = 0 iff u = 0                  for all u ∈ V .
                                        ¯

Theorem          Suppose V has an inner product.

        1)   If v ∈ V , f : V → R defined by f (u) = u · v is a homomorphism.
             Thus 0 · v = 0.
                    ¯
        2)   Schwarz’ inequality. If u, v ∈ V, (u · v)2 ≤ (u · u)(v · v).

                               √                 √
Proof of 2)         Let a = v · v and b = u · u. If a or b is 0, the result is obvious.
Suppose neither a nor b is 0. Now 0 ≤ (ua ± vb) · (ua ± vb) = (u · u)a2 ± 2ab(u · v)+
(v · v)b2 = b2 a2 ± 2ab(u · v) + a2 b2 . Dividing by 2ab yields 0 ≤ ab ± (u · v) or | u · v |≤ ab.
Chapter 5          Linear Algebra                                                                    99

Theorem √Suppose V has an inner product. Define the norm or length of a vector
v by kvk = v · v. The following properties hold.

        1)    kvk = 0 iff v = 0.
                              ¯
        2)    kvrk = kvk | r |.

        3)    | u · v | ≤ kukkvk.              (Schwarz’ inequality)

        4)    ku + vk ≤ kuk + kvk.            (The triangle inequality)

Proof of 4)     ku + vk2 = (u + v) · (u + v) = kuk2 + 2(u · v) + kvk2 ≤ kuk2 +
2kukkvk + kvk2 = (kuk + kvk)2 .

Definition      An Inner Product Space (IPS) is a real vector space with an
inner product. Suppose V is an IPS. A sequence {v1 , .., vn } is orthogonal provided
vi · vj = 0 when i 6= j. The sequence is orthonormal if it is orthogonal and each
vector has length 1, i.e., vi · vj = δi,j for 1 ≤ i, j ≤ n.

Theorem      If S = {v1 , .., vn } is an orthogonal
                                                 ( sequence of non-zero
                                                                     )       vectors in an
                                                    v1          vn
IPS V, then S is independent. Furthermore                ,···,         is orthonormal.
                                                   kv1 k       kvn k

Proof     Suppose v1 r1 + · · +vn rn = 0. Then 0 = (v1 r1 + · · +vn rn ) · vi = ri (vi · vi )
                                       ¯
and thus ri = 0. Thus S is independent. The second statement is transparent.

    It is easy to define an inner product, as is shown by the following theorem.

Theorem        Suppose V is a real vector space with a basis S = {v1 , .., vn }. Then
there is a unique inner product on V which makes S an orthornormal basis. It is
given by the formula (v1 r1 + · · +vn rn ) · (v1 s1 + · · +vn sn ) = r1 s1 + · · +rn sn .

Convention                 Rn will be assumed to have the standard inner product defined by
(r1 , .., rn )t · (s1 , .., sn )t = r1 s1 + · · +rn sn . S = {e1 , .., en } will be called the canonical
or standard orthonormal basis (see page 72). The next theorem shows that this
inner product has an amazing geometry.

Theorem           If u, v ∈ Rn , u · v = kukkvk cos Θ where Θ is the angle between u
100                                                      Linear Algebra          Chapter 5

and v.
Proof     Let u = (r1 , .., rn ) and v = (s1 , .., sn ). By the law of cosines ku − vk2 =
kuk + kvk2 − 2kukkvk cos Θ. So (r1 − s1 )2 + · · +(rn − sn )2 = r12 + · · +rn2 + s21 + · ·
    2

+s2n − 2kukkvk cos Θ. Thus r1 s1 + · · +rn sn = kukkvk cos Θ.

Exercise       This is a simple exercise to observe that hyperplanes in Rn are cosets.
Suppose f : Rn → R is a non-zero homomorphism given by a matrix A = (a1 , .., an ) ∈
R1,n . Then L = ker(f ) is the set of all solutions to a1 x1 + · · +an xn = 0, i.e., the
                                                                                  c1
                                                                                    
                                                                                 · 
set of all vectors perpendicular to A. Now suppose b ∈ R and C =                     ∈ Rn
                                                                                    
                                                                                 · 
                                                                                  cn
has f (C) = b. Then f −1 (b) is the set of all solutions to a1 x1 + · · +an xn = b which
is the coset L + C, and this the set of all solutions to a1 (x1 − c1 ) + · · +an(xn − cn ) = 0.




Gram-Schmidt orthonormalization

Theorem          (Fourier series)   Suppose W is an IPS with an orthonormal basis
{w1 , .., wn }. Then if v ∈ W , v = w1 (v · w1 ) + · · +wn (v · wn ).

Proof      v = w1 r1 + · · +wn rn and v · wi = (w1 r1 + · · +wn rn ) · wi = ri

Theorem           Suppose W is an IPS, Y ⊂ W is a subspace with an orthonormal basis
{w1 , .., wk }, and v ∈ W −Y . Define the projection of v onto Y by p(v) = w1 (v ·w1 )+··
+wk (v ·wk ), and let w = v −p(v). Then (w ·wi ) = (v −w1 (v ·w1 )··−wk (v ·wk ))·wi = 0.
                      w
Thus if wk+1 =           , then {w1 , .., wk+1 } is an orthonormal basis for the subspace
                     kwk
generated by {w1 , .., wk , v}. If {w1 , .., wk , v} is already orthonormal, wk+1 = v.

Theorem        (Gram-Schmidt)         Suppose W is an IPS with a basis {v1 , .., vn }.
Then W has an orthonormal basis {w1 , .., wn }. Moreover, any orthonormal sequence
in W extends to an orthonormal basis of W .
                      v1
Proof      Let w1 =        . Suppose inductively that {w1 , .., wk } is an orthonormal
                     kv1 k
basis for Y , the subspace generated by {v1 , .., vk }. Let w = vk+1 − p(vk+1 ) and
Chapter 5        Linear Algebra                                                          101

          w
wk+1 =       . Then by the previous theorem, {w1 , .., wk+1 } is an orthonormal basis
         kwk
for the subspace generated by {w1 , .., wk , vk+1 }. In this manner an orthonormal basis
for W is constructed. Notice that this construction defines a function h which sends
a basis for W to an orthonormal basis for W (see topology exercise on page 103).
    Now suppose W has dimension n and {w1 , .., wk } is an orthonormal sequence in
W . Since this sequence is independent, it extends to a basis {w1 , .., wk , vk+1 , .., vn }.
The process above may be used to modify this to an orthonormal basis {w1 , .., wn }.


Exercise      Let f : R3 → R be the homomorphism defined by the matrix (2,1,3).
Find an orthonormal basis for the kernel of f.. Find the projection of (e1 + e2 ) onto
ker(f ). Find the angle between e1 + e2 and the plane ker(f ).

Exercise        Let W = R3 have the standard inner product and Y ⊂ W be the
subspace generated by {w1 , w2 } where w1 = (1, 0, 0)t and w2 = (0, 1, 0)t . W is
generated by the sequence {w1 , w2 , v} where v = (1, 2, 3)t . As in the first theorem
of this section, let w = v − p(v), where p(v) is the projection of v onto Y , and set
        w
w3 =        . Find w3 and show that for any t with 0 ≤ t ≤ 1, {w1 , w2 , (1 − t)v + tw3 }
      kwk
is a basis for W . This is a key observation for an exercise on page 103 showing O(n)
is a deformation retract of GLn (R).




Isometries        Suppose each of U and V is an IPS. A homomorphism f : U → V
is said to be an isometry provided it is an isomorphism and for any u1 , u2 in U ,
(u1 · u2 )U = (f (u1 ) · f (u2 ))V .

Theorem             Suppose each of U and V is an n-dimensional IPS, {u1 , .., un } is an
orthonormal basis for U , and f : U → V is a homomorphism. Then f is an isometry
iff {f (u1 ), .., f (un )} is an orthonormal sequence in V .
Proof            Isometries certainly preserve orthonormal sequences. So suppose T =
{f (u1 ), .., f (un )} is an orthonormal sequence in V . Then T is independent and thus
T is a basis for V and thus f is an isomorphism (see the second theorem on page 79).
It is easy to check that f preserves inner products.

   We now come to one of the definitive theorems in linear algebra. It is that, up to
isometry, there is only one inner product space for each dimension.
102                                                    Linear Algebra         Chapter 5

Theorem      Suppose each of U and V is an n-dimensional IPS. Then ∃ an isometry
f : U → V. In particular, U is isometric to Rn with its standard inner product.
Proof         There exist orthonormal bases {u1 , .., un } for U and {v1 , .., vn } for V .
By the first theorem on page 79, there exists a homomorphism f : U → V with
f (ui ) = vi , and by the previous theorem, f is an isometry.

Exercise       Let f : R3 → R be the homomorphism defined by the matrix (2,1,3).
Find a linear transformation h : R2 → R3 which gives an isometry from R2 to ker(f ).


                                Orthogonal Matrices

    As noted earlier, linear algebra is not so much the study of vector spaces as it is
the study of endomorphisms. We now wish to study isometries from Rn to Rn .
    We know from a theorem on page 90 that an endomorphism preserves volume iff
its determinant is ±1. Isometries preserve inner product, and thus preserve angle and
distance, and so certainly preserve volume.

Theorem      Suppose A ∈ Rn and f : Rn → Rn is the homomorphism defined by
f (B) = AB. Then the following are equivalent.

       1)   The columns of A form an orthonormal basis for Rn , i.e., At A = I.
       2)   The rows of A form an orthonormal basis for Rn , i.e., AAt = I.
       3)   f is an isometry.

Proof         A left inverse of a matrix is also a right inverse (see the exercise on
page 64). Thus 1) and 2) are equivalent because each of them says A is invert-
ible with A−1 = At . Now {e1 , .., en } is the canonical orthonormal basis for Rn , and
f (ei ) is column i of A. Thus by the previous section, 1) and 3) are equivalent.

Definition       If A ∈ Rn satisfies these three conditions, A is said to be orthogonal.
The set of all such A is denoted by O(n), and is called the orthogonal group.

Theorem

       1)   If A is orthogonal, | A |= ±1.

       2)   If A is orthogonal, A−1 is orthogonal. If A and C are orthogonal, AC is
            orthogonal. Thus O(n) is a multiplicative subgroup of GLn (R).
Chapter 5       Linear Algebra                                                        103

       3)   Suppose A is orthogonal and f is defined by f (B) = AB. Then f preserves
            distances and angles. This means that if u, v ∈ Rn , ku − vk =
            kf (u)−f (v)k and the angle between u and v is equal to the angle between
            f (u) and f (v).

Proof      Part 1) follows from |A|2 = |A| |At | = |I| = 1. Part 2) is imme-
diate, because isometries clearly form a subgroup of the multiplicative group of
all automorphisms. For part 3) assume f : Rn → Rn is an isometry. Then
ku − vk2 = (u − v) · (u − v) = f (u − v) · f (u − v) = kf (u − v)k2 = kf (u) − f (v)k2 .
The proof that f preserves angles follows from u · v = kukkvkcosΘ.
                                                                                  !
                                                                   cosΘ −sinΘ
Exercise      Show that if A ∈ O(2) has |A| = 1, then A =                             for
                                                                   sinΘ  cosΘ
some number Θ. (See the exercise on page 56.)
                                        2
Exercise (topology) Let Rn ≈ Rn have its usual metric topology. This means
a sequence of matrices {Ai } converges to A iff it converges coordinatewise. Show
GLn (R) is an open subset and O(n) is closed and compact. Let h : GLn (R) →
O(n) be defined by Gram-Schmidt. Show H : GLn (R) × [0, 1] → GLn (R) defined
by H(A, t) = (1 − t)A + th(A) is a deformation retract of GLn (R) to O(n).

                    Diagonalization of Symmetric Matrices

    We continue with the case F = R. Our goals are to prove that, if A is a symmetric
matrix, all of its eigenvalues are real and that ∃ an orthogonal matrix C such that
C −1 AC is diagonal. As background, we first note that symmetric is the same as
self-adjoint.

Theorem        Suppose A ∈ Rn and u, v ∈ Rn . Then (At u) · v = u · (Av).
Proof    If y, z ∈ Rn , then the dot product y · z, is the matrix product y t z, and
matrix multiplication is associative. Thus (At u) · v = (ut A)v = ut (Av) = u · (Av).

Definition       Suppose A ∈ Rn . A is said to be symmetric provided At = A. Note
that any diagonal matrix is symmetric. A is said to be self-adjoint if (Au)·v = u·(Av)
for all u, v ∈ Rn . The next theorem is just an exercise using the previous theorem.

Theorem        A is symmetric iff A is self-adjoint.
104                                                   Linear Algebra         Chapter 5

Theorem         Suppose A ∈ Rn is symmetric. Then ∃ real numbers λ1 , .., λn (not
necessarily distinct) such that CPA (x) = (x − λ1 )(x − λ2 ) · · · (x − λn ). That is, all
the eigenvalues of A are real.
Proof       We know CPA (x) factors into linears over C. If µ = a + bi is a complex
number, its conjugate is defined by µ̄ = a − bi. If h : C → C is defined by h(µ) = µ̄,
then h is a ring isomorphism which is the identity on R. If w = (ai,j ) is a complex
matrix or vector, its conjugate is defined by w̄ = (āi,j ). Since A ∈ Rn is a real
symmetric matrix, A = At = Āt . Now suppose λ is a complex eigenvalue of A
and v ∈ Cn is an eigenvector with Av = λv. Then λ(v t v̄) = (λv)t v̄ = (Av)t v̄ =
(v t A)v̄ = v t (Av̄) = v t (Av) = v t (λv) = λ̄(v t v̄). Thus λ = λ̄ and λ ∈ R. Or
you can define a complex inner product on Cn by (w · v) = w t v̄. The proof then
reads as λ(v · v) = (λv · v) = (Av · v) = (v · Av) = (v · λv) = λ̄(v · v). Either way,
λ is a real number.

   We know that eigenvectors belonging to distinct eigenvalues are linearly indepen-
dent. For symmetric matrices, we show more, namely that they are perpendicular.


Theorem      Suppose A is symmetric, λ1 , λ2 ∈ R are distinct eigenvalues of A, and
Au = λ1 u and Av = λ2 v. Then u · v = 0.
Proof      λ1 (u · v) = (Au) · v = u · (Av) = λ2 (u · v).




Review       Suppose A ∈ Rn and f : Rn → Rn is defined by f (B) = AB. Then A
represents f w.r.t. the canonical orthonormal basis. Let S = {v1 , .., vn } be another
basis and C ∈ Rn be the matrix with vi as column i. Then C −1 AC is the matrix
representing f w.r.t. S. Now S is an orthonormal basis iff C is an orthogonal matrix.

Summary       Representing f w.r.t. an orthonormal basis is the same as conjugating
A by an orthogonal matrix.

Theorem       Suppose A ∈ Rn and C ∈ O(n). Then A is symmetric iff C −1 AC
is symmetric.
Proof      Suppose A is symmetric. Then (C −1 AC)t = C t A(C −1 )t = C −1 AC.

    The next theorem has geometric and physical implications, but for us, just the
incredibility of it all will suffice.
Chapter 5       Linear Algebra                                                               105

Theorem        If A ∈ Rn , the following are equivalent.
       1)   A is symmetric.
       2)   ∃ C ∈ O(n) such that C −1 AC is diagonal.

Proof      By the previous theorem, 2) ⇒ 1). Show 1) ⇒ 2). Suppose A is a
symmetric 2 × 2 matrix. Let λ be an eigenvalue for A and {v1 , v2 } be an orthonormal
basis for R2 with Av1 = λv1 . Then
                              !     w.r.t this basis, the transformation determined
                         λ b
by A is represented by          . Since this matrix is symmetric, b = 0.
                         0 d

    Now suppose by induction that the theorem is true for symmetric matrices in
Rt for t < n, and suppose A is a symmetric n × n matrix. Denote by λ1 , .., λk the
distinct eigenvalues of A, k ≤ n. If k = n, the proof is immediate, because then there
is a basis of eigenvectors of length 1, and they must form an orthonormal basis. So
suppose k < n. Let v1 , .., vk be eigenvectors for λ1 , .., λk with each k vi k= 1. They
may be extended to an orthonormal basis v1 , .., vn . With respect to this basis, the

                                                             λ1
                                                                                      
                                                        
                                                                  ·                     
                                                                                   (B) 
                                                                                      
                                                                      ·
                                                                             
                                                                                     
transformation determined by A is represented by                                         .
                                                                               
                                                       
                                                       
                                                                         λk             
                                                                                         
                                                                                        
                                                                                        
                                                                  (0)              (D)
    Since this is a symmetric matrix, B = 0 and D is a symmetric matrix of smaller
size. By induction,
            !        ∃ an orthogonal C such that C −1 DC is diagonal. Thus conjugating
      I 0
by             makes the entire matrix diagonal.
      0 C

    This theorem is so basic we state it again in different terminology. If V is an IPS, a
linear transformation f : V → V is said to be self-adjoint provided (u·f (v)) = (f (u)·v)
for all u, v ∈ V .

Theorem        If V is an n-dimensional IPS and f : V → V is a linear transformation,
then the following are equivalent.
       1)   f is self-adjoint.
       2)   ∃ an orthonormal basis {v1 , ..., vn } for V with each
            vi an eigenvector of f .
106                                                  Linear Algebra           Chapter 5



                               !
                         2 2
Exercise     Let A =             . Find an orthogonal C such that C −1 AC is diagonal.
                         2 2
                             !
                        2 1
Do the same for A =            .
                        1 2

Exercise     Suppose A, D ∈ Rn are symmetric. Under what conditions are A and D
similar? Show that, if A and D are similar, ∃ an orthogonal C such that D = C −1 AC.

Exercise      Suppose V is an n-dimensional real vector space. We know that V is
isomorphic to Rn . Suppose f and g are isomorphisms from V to Rn and A is a subset
of V . Show that f (A) is an open subset of Rn iff g(A) is an open subset of Rn . This
shows that V , an algebraic object, has a god-given topology. Of course, if V has
an inner product, it automatically has a metric, and this metric will determine that
same topology. Finally, suppose V and W are finite-dimensional real vector spaces
and h : V → W is a linear transformation. Show that h is continuous.

Exercise       Define E : Cn → Cn by E(A) = eA = I + A + (1/2!)A2 + ··. This series
converges and thus E is a well defined function. If AB = BA, then E(A + B) =
E(A)E(B). Since A and −A commute, I = E(0) = E(A − A) = E(A)E(−A), and
                                                 ¯
thus E(A) is invertible with E(A)−1 = E(−A). Furthermore E(At ) = E(A)t , and
if C is invertible, E(C −1 AC) = C −1 E(A)C. Now use the results of this section to
prove the statements below. (For part 1, assume the Jordan form, i.e., assume any
A ∈ Cn is similar to a lower triangular matrix.)

       1)   If A ∈ Cn , then | eA |= etrace(A) . Thus if A ∈ Rn , | eA |= 1
            iff trace(A) = 0.

       2)   ∃ a non-zero matrix N ∈ R2 with eN = I.

       3)   If N ∈ Rn is symmetric, then eN = I iff N = 0.
                                                        ¯
       4)   If A ∈ Rn and At = −A, then eA ∈ O(n).
Chapter 6
Appendix


The five previous chapters were designed for a year undergraduate course in algebra.
In this appendix, enough material is added to form a basic first year graduate course.
Two of the main goals are to characterize finitely generated abelian groups and to
prove the Jordan canonical form. The style is the same as before, i.e., everything is
right down to the nub. The organization is mostly a linearly ordered sequence except
for the last two sections on determinants and dual spaces. These are independent
sections added on at the end.
    Suppose R is a commutative ring. An R-module M is said to be cyclic if it can
be generated by one element, i.e., M ≈ R/I where I is an ideal of R. The basic
theorem of this chapter is that if R is a Euclidean domain and M is a finitely generated
R-module, then M is the sum of cyclic modules. Thus if M is torsion free, it is a
free R-module. Since Z is a Euclidean domain, finitely generated abelian groups
are the sums of cyclic groups – one of the jewels of abstract algebra.
    Now suppose F is a field and V is a finitely generated F -module. If T : V → V is
a linear transformation, then V becomes an F [x]-module by defining vx = T (v). Now
F [x] is a Euclidean domain and so VF [x] is the sum of cyclic modules. This classical
and very powerful technique allows an easy proof of the canonical forms. There is a
basis for V so that the matrix representing T is in Rational canonical form. If the
characteristic polynomial of T factors into the product of linear polynomials, then
there is a basis for V so that the matrix representing T is in Jordan canonical form.
This always holds if F = C. A matrix in Jordan form is a lower triangular matrix
with the eigenvalues of T displayed on the diagonal, so this is a powerful concept.
    In the chapter on matrices, it is stated without proof that the determinant of the
product is the product of the determinants. A proof of this, which depends upon the
classification of certain types of alternating multilinear forms, is given in this chapter.
The final section gives the fundamentals of dual spaces.

                                           107
108                                                                Appendix           Chapter 6

                          The Chinese Remainder Theorem

    On page 50 in the chapter on rings, the Chinese Remainder Theorem was proved
for the ring of integers. In this section this classical topic is presented in full generality.
Surprisingly, the theorem holds even for non-commutative rings.

Definition        Suppose R is a ring and A1 , A2 , ..., Am are ideals of R. Then the sum
A1 + A2 + · · · + Am is the set of all a1 + a2 + · · · + am with ai ∈ Ai . The product
A1 A2 · · · Am is the set of all finite sums of elements a1 a2 · · · am with ai ∈ Ai . Note
that the sum and product of ideals are ideals and A1 A2 · · · Am ⊂ (A1 ∩ A2 ∩ · · · ∩ Am ).

Definition        Ideals A and B of R are said to be comaximal if A + B = R.

Theorem          If A and B are ideals of a ring R, then the following are equivalent.

1)    A and B are comaximal.
2)    ∃ a ∈ A and b ∈ B with a + b = 1.
                                     ¯
3)    π(A) = R/B where π : R → R/B is the projection.

Theorem       If A1 , A2 , ..., Am and B are ideals of R with Ai and B comaximal for
each i, then A1 A2 · · · Am and B are comaximal. Thus A1 ∩ A2 ∩ · · · ∩ Am and B
are comaximal.
Proof   Consider π : R → R/B. Then π(A1 A2 · · · Am ) = π(A1 )π(A2 ) · · · π(Am ) =
(R/B)(R/B) · · · (R/B) = R/B.

Chinese Remainder Theorem             Suppose A1 , A2 , ..., An are pairwise comaximal
ideals of R, with each Ai 6= R. Then the natural map π : R → R/A1 × R/A2 × · · · ×
R/An is a surjective ring homomorphism with kernel A1 ∩ A2 ∩ · · · ∩ An .
Proof       There exists ai ∈ Ai and bi ∈ A1 A2 · · · Ai−1Ai+1 · · · An with ai + bi = 1. Note
                                                                                            ¯
that π(bi ) = (0, .., 0, 1i , 0, .., 0). If (r1 + A1 , r2 + A2 , ..., rn + An ) is an element of the
                         ¯
range, it is the image of r1 b1 +r2 b2 +···+rn bn = r1 (1 −a1 )+r2 (1 −a2 )+···+rn (1 −an ).
                                                             ¯              ¯                ¯

Theorem       If R is commutative and A1 , A2 , ..., An are pairwise comaximal ideals
of R, then A1 A2 · · · An = A1 ∩ A2 ∩ · · · ∩ An .
Proof for n = 2.      Show A1 ∩ A2 ⊂ A1 A2 . ∃ a1 ∈ A1 and a2 ∈ A2 with a1 + a2 = 1.
                                                                                  ¯
If c ∈ A1 ∩ A2 , then c = c(a1 + a2 ) ∈ A1 A2 .
Chapter 6       Appendix                                                           109

                    Prime and Maximal Ideals and UFDs

    In the first chapter on background material, it was shown that Z is a unique
factorization domain. Here it will be shown that this property holds for any principle
ideal domain. Later on it will be shown that every Euclidean domain is a principle
ideal domain. Thus every Euclidean domain is a unique factorization domain.

Definition      Suppose R is a commutative ring and I ⊂ R is an ideal.

     I is prime means I 6= R and if a, b ∈ R have ab ∈ I, then a or b ∈ I.
     I is maximal means I 6= R and there are no ideals properly between I and R.

Theorem       0 is a prime ideal of R iff R is
              ¯
              0 is a maximal ideal of R iff R is
              ¯

Theorem       Suppose J ⊂ R is an ideal, J 6= R.
              J is a prime ideal iff R/J is
              J is a maximal ideal iff R/J is

Corollary      Maximal ideals are prime.
Proof     Every field is a domain.

Theorem       If a ∈ R is not a unit, then ∃ a maximal ideal I of R with a ∈ I.
Proof      This is a classical application of the Hausdorff Maximality Principle. Con-
sider {J : J is an ideal of R containing a with J 6= R}.   [ This collection contains a
maximal monotonic collection {Vt }t∈T . The ideal V =         Vt does not contain 1 and
                                                          t∈T
                                                                                  ¯
thus is not equal to R. Therefore V is equal to some Vt and is a maximal ideal
containing a.

Note     To properly appreciate this proof, the student should work the exercise in
group theory at the end of this section (see page 114).




Definition       Suppose R is a domain and a, b ∈ R. Then we say a ∼ b iff there
exists a unit u with au = b. Note that ∼ is an equivalence relation. If a ∼ b, then a
110                                                            Appendix          Chapter 6

and b are said to be associates.

Examples        If R is a domain, the associates of 1 are the units of R, while the only
                                                    ¯
associate of 0 is 0 itself. If n ∈ Z is not zero, then its associates are n and −n.
              ¯     ¯
If F is a field and g ∈ F [x] is a non-zero polynomial, then the associates of g are
all cg where c is a non-zero constant.

   The following theorem is elementary, but it shows how associates fit into the
scheme of things. An element a divides b (a|b) if ∃! c ∈ R with ac = b.

Theorem         Suppose R is a domain and a, b ∈ (R − 0). Then the following are
                                                      ¯
equivalent.

1)    a ∼ b.
2)    a|b and b|a.
3)    aR = bR.

    Parts 1) and 3) above show there is a bijection from the associate classes of R to
the principal ideals of R. Thus if R is a PID, there is a bijection from the associate
classes of R to the ideals of R. If an element of a domain generates a non-zero prime
ideal, it is called a prime element.

Definition       Suppose R is a domain and a ∈ R is a non-zero non-unit.

1)    a is irreducible if it does not factor, i.e., a = bc ⇒ b or c is a unit.
2)    a is prime if it generates a prime ideal, i.e., a|bc ⇒ a|b or a|c.

Note       If a is a prime and a|c1 c2 · · · cn , then a|ci for some i. This follows from the
definition and induction on n. If each cj is irreducible, then a ∼ ci for some i.

Note       If a ∼ b, then a is irreducible (prime) iff b is irreducible (prime). In other
words, if a is irreducible (prime) and u is a unit, then au is irreducible (prime).

Note       a is prime ⇒ a is irreducible. This is immediate from the definitions.

Theorem            Factorization into primes is unique up to order and associates, i.e., if
d = b1 b2 · · · bn = c1 c2 · · · cm with each bi and each ci prime, then n = m and for some
permutation σ of the indices, bi and cσ(i) are associates for every i. Note also ∃ a unit
u and primes p1 , p2 , . . . , pt where no two are associates and du = ps11 ps22 · · · pst t .
Chapter 6       Appendix                                                            111

Proof      This follows from the notes above.

Definition     R is a factorization domain (FD) means that R is a domain and if a is
a non-zero non-unit element of R, then a factors into a finite product of irreducibles.

Definition       R is a unique factorization domain (UFD) means R is a FD in which
factorization is unique (up to order and associates).

Theorem       If R is a UFD and a is a non-zero non-unit of R, then a is irreducible
⇔ a is prime. Thus in a UFD, elements factor as the product of primes.
Proof       Suppose R is a UFD, a is an irreducible element of R, and a|bc. If either
b or c is a unit or is zero, then a divides one of them, so suppose each of b and c is
a non-zero non-unit element of R. There exists an element d with ad = bc. Each of
b and c factors as the product of irreducibles and the product of these products is
the factorization of bc. It follows from the uniqueness of the factorization of ad = bc,
that one of these irreducibles is an associate of a, and thus a|b or a|c. Therefore
the element a is a prime.

Theorem        Suppose R is a FD. Then the following are equivalent.

1)   R is a UFD.
2)   Every irreducible element of R is prime, i.e., a irreducible ⇔ a is prime.

Proof      We already know 1) ⇒ 2). Part 2) ⇒ 1) because factorization into primes
is always unique.

    This is a revealing and useful theorem. If R is a FD, then R is a UFD iff each
irreducible element generates a prime ideal. Fortunately, principal ideal domains
have this property, as seen in the next theorem.

Theorem        Suppose R is a PID and a ∈ R is non-zero non-unit. Then the following
are equivalent.

1)   aR is a maximal ideal.
2)   aR is a prime ideal, i.e., a is a prime element.
3)   a is irreducible.
Proof      Every maximal ideal is a prime ideal, so 1) ⇒ 2). Every prime element is
an irreducible element, so 2) ⇒ 3). Now suppose a is irreducible and show aR is a
maximal ideal. If I is an ideal containing aR, ∃ b ∈ R with I = bR. Since b divides
a, the element b is a unit or an associate of a. This means I = R or I = aR.
112                                                          Appendix         Chapter 6

    Our goal is to prove that a PID is a UFD. Using the two theorems above, it
only remains to show that a PID is a FD. The proof will not require that ideals be
principally generated, but only that they be finitely generated. This turns out to
be equivalent to the property that any collection of ideals has a “maximal” element.
We shall see below that this is a useful concept which fits naturally into the study of
unique factorization domains.

Theorem         Suppose R is a commutative ring. Then the following are equivalent.

1)    If I ⊂ R is an ideal, ∃ a finite set {a1 , a2 , ..., an } ⊂ R such that I =
      a1 R + a2 R + · · · + an R, i.e., each ideal of R is finitely generated.
2)    Any non-void collection of ideals of R contains an ideal I which is maximal in
      the collection. This means if J is an ideal in the collection with J ⊃ I, then
      J = I. (The ideal I is maximal only in the sense described. It need not contain
      all the ideals of the collection, nor need it be a maximal ideal of the ring R.)
3)    If I1 ⊂ I2 ⊂ I3 ⊂ ... is a monotonic sequence of ideals, ∃ t0 ≥ 1 such that It = It0
      for all t ≥ t0 .

Proof        Suppose 1) is true and show 3). The ideal I = I1 ∪ I2 ∪ . . . is finitely
generated and ∃ t0 ≥ 1 such that It0 contains those generators. Thus 3) is true. Now
suppose 2) is true and show 1). Let I be an ideal of R, and consider the collection
of all finitely generated ideals contained in I. By 2) there is a maximal one, and it
must be I itself, and thus 1) is true. We now have 2)⇒1)⇒3), so suppose 2) is false
and show 3) is false. So there is a collection of ideals of R such that any ideal in the
collection is properly contained in another ideal of the collection. Thus it is possible
to construct a sequence of ideals I1 ⊂ I2 ⊂ I3 . . . with each properly contained in
the next, and therefore 3) is false. (Actually this construction requires the Hausdorff
Maximality Principle or some form of the Axiom of Choice, but we slide over that.)

Definition       If R satisfies these properties, R is said to be Noetherian, or it is said
to satisfy the ascending chain condition. This property is satisfied by many of the
classical rings in mathematics. Having three definitions makes this property useful
and easy to use. For example, see the next theorem.

Theorem         A Noetherian domain is a FD. In particular, a PID is a FD.

Proof      Suppose there is a non-zero non-unit element that does not factor as the
finite product of irreducibles. Consider all ideals dR where d does not factor. Since
R is Noetherian, ∃ a maximal one cR. The element c must be reducible, i.e., c = ab
where neither a nor b is a unit. Each of aR and bR properly contains cR, and so each
Chapter 6       Appendix                                                              113

of a and b factors as a finite product of irreducibles. This gives a finite factorization
of c into irreducibles, which is a contradiction.

Corollary       A PID is a UFD. So Z is a UFD and if F is a field, F [x] is a UFD.




   You see the basic structure of UFDs is quite easy. It takes more work to prove
the following theorems, which are stated here only for reference.

Theorem              If R is a UFD then R[x1 , ..., xn ] is a UFD. Thus if F is a field,
F [x1 , ..., xn ] is a UFD. (This theorem goes all the way back to Gauss.)
    If R is a PID, then the formal power series R[[x1 , ..., xn ]] is a UFD. Thus if F
is a field, F [[x1 , ..., xn ]] is a UFD. (There is a UFD R where R[[x]] is not a UFD.
See page 566 of Commutative Algebra by N. Bourbaki.)

Theorem        Germs of analytic functions on Cn form a UFD.
Proof      See Theorem 6.6.2 of An Introduction to Complex Analysis in Several Vari-
ables by L. Hörmander.

Theorem           Suppose R is a commutative ring. Then R is Noetherian ⇒ R[x1 , ..., xn ]
and R[[x1 , ..., xn ]] are Noetherian. (This is the famous Hilbert Basis Theorem.)

Theorem        If R is Noetherian and I ⊂ R is a proper ideal, then R/I is Noetherian.
(This follows immediately from the definition. This and the previous theorem show
that Noetherian is a ubiquitous property in ring theorem.)




Domains With Non-unique Factorizations             Next are presented two of the
standard examples of Noetherian domains that are not unique factorization domains.

                           √             √
Exercise       Let R = Z( 5) = {n + m 5 : n, m ∈√Z}. Show that  √ R is a subring of
R which is not a UFD. In particular 2 · 2 = (1 − 5) · (−1 − 5) are two distinct
irreducible factorizations of 4. Show R is isomorphic to Z[x]/(x2 − 5), where (x2 − 5)
represents the ideal (x2 − 5)Z[x], and R/(2) is isomorphic to Z2 [x]/(x2 − [5]) =
Z2 [x]/(x2 + [1]), which is not a domain.
114                                                         Appendix        Chapter 6

Exercise       Let R = R[x, y, z]/(x2 − yz). Show x2 − yz is irreducible and thus
prime in R[x, y, z]. If u ∈ R[x, y, z], let ū ∈ R be the coset containing u. Show R
is not a UFD. In particular x̄ · x̄ = ȳ · z̄ are two distinct irreducible factorizations
of x̄2 . Show R/(x̄) is isomorphic to R[y, z]/(yz), which is not a domain. An easier
approach is to let f : R[x, y, z] → R[x, y] be the ring homomorphism defined by
f (x) = xy, f (y) = x2 , and f (z) = y 2 . Then S = F [xy, x2 , y 2 ] is the image of
f and S is isomorphic to R. Note that xy, x2 , and y 2 are irreducible in S and
(xy)(xy) = (x2 )(y 2 ) are two distinct irreducible factorizations of (xy)2 in S.

Exercise In Group Theory          If G is an additive abelian group, a subgroup H
of G is said to be maximal if H 6= G and there are no subgroups properly between
H and G. Show that H is maximal iff G/H ≈ Zp for some prime p. For simplicity,
consider the case G = Q. Which one of the following is true?

        1)   If a ∈ Q, then there is a maximal subgroup H of Q which contains a.
        2)   Q contains no maximal subgroups.

                        Splitting Short Exact Sequences

   Suppose B is an R-module and K is a submodule of B. As defined in the chapter
on linear algebra, K is a summand of B provided ∃ a submodule L of B with
K + L = B and K ∩ L = 0. In this case we write K ⊕ L = B. When is K a summand
                         ¯
of B? It turns out that K is a summand of B iff there is a splitting map from
B/K to B. In particular, if B/K is free, K must be a summand of B. This is used
below to show that if R is a PID, then every submodule of Rn is free.

Theorem 1       Suppose R is a ring, B and C are R-modules, and g : B → C is a
surjective homomorphism with kernel K. Then the following are equivalent.

1)    K is a summand of B.
2)    g has a right inverse, i.e., ∃ a homomorphism h : C → B with g ◦ h = I : C → C.
      (h is called a splitting map.)

Proof      Suppose 1) is true, i.e., suppose ∃ a submodule L of B with K ⊕ L = B.
Then (g|L) : L → C is an isomorphism. If i : L → B is inclusion, then h defined
by h = i ◦ (g|L)−1 is a right inverse of g. Now suppose 2) is true and h : C → B
is a right inverse of g. Then h is injective, K + h(C) = B and K ∩ h(C) = 0.
                                                                               ¯
Thus K ⊕ h(C) = B.
Chapter 6        Appendix                                                        115

Definition       Suppose f : A → B and g : B → C are R-module homomorphisms.
                                f    g
The statement that 0 → A → B → C → 0 is a short exact sequence (s.e.s) means
f is injective, g is surjective and f (A) = ker(g). The canonical split s.e.s. is A →
A ⊕ C → C where f = i1 and g = π2 . A short exact sequence is said to split if ∃
                      ≈
an isomorphism B → A ⊕ C such that the following diagram commutes.


                                      f       -
                                                          g         -
                     0→ A                         B                     C →0
                              Z                                     >
                                                                    
                                                                    
                                  Z                            
                                  iZ              ≈           π2
                                   1 Z                    
                                          Z
                                          ~
                                          Z       ?   
                                              A⊕C

     We now restate the previous theorem in this terminology.

Theorem 1.1       A short exact sequence 0 → A → B → C → 0 splits iff f (A) is
a summand of B, iff B → C has a splitting map. If C is a free R-module, there is
a splitting map and thus the sequence splits.

Proof      We know from the previous theorem f (A) is a summand of B iff B → C
has a splitting map. Showing these properties are equivalent to the splitting of the
sequence is a good exercise in the art of diagram chasing. Now suppose C has a free
basis T ⊂ C, and g : B → C is surjective. There exists a function h : T → B such
that g ◦ h(c) = c for each c ∈ T . The function h extends to a homomorphism from
C to B which is a right inverse of g.

Theorem 2        If R is a domain, then the following are equivalent.

1)    R is a PID.
2)    Every submodule of RR is a free R-module of dimension ≤ 1.

    This theorem restates the ring property of PID as a module property. Although
this theorem is transparent, 1)⇒2) is a precursor to the following classical result.

Theorem 3      If R is a PID and A ⊂ Rn is a submodule, then A is a free R-module
of dimension ≤ n. Thus subgroups of Zn are free Z-modules of dimension ≤ n.
Proof     From the previous theorem we know this is true for n = 1. Suppose n > 1
and the theorem is true for submodules of Rn−1 . Suppose A ⊂ Rn is a submodule.
116                                                        Appendix        Chapter 6

Consider the following short exact sequences, where f : R n−1 → Rn−1 ⊕ R is inclusion
and g = π : Rn−1 ⊕ R → R is the projection.

                                    f              π
                       0 −→ Rn−1 −→ Rn−1 ⊕ R −→ R −→ 0

                       0 −→ A ∩ Rn−1 −→ A −→ π(A) −→ 0

By induction, A ∩ Rn−1 is free of dimension ≤ n − 1. If π(A) = 0, then A ⊂ Rn−1 .
                                                                  ¯
If π(A) 6= 0, it is free of dimension 1 and thus the sequence splits by Theorem 1.1.
           ¯
In either case, A is a free submodule of dimension ≤ n.

Exercise     Let A ⊂ Z2 be the subgroup generated by {(6, 24), (16, 64)}. Show A
                                                            ×3
is a free Z-module of dimension 1. Also show the s.e.s. Z4 −→ Z12 −→ Z3 splits
         ×2                   ×2
but Z −→ Z −→ Z2 and Z2 −→ Z4 −→ Z2 do not (see top of page 78).

                               Euclidean Domains

    The ring Z possesses the Euclidean algorithm and the polynomial ring F [x] has
the division algorithm (pages 14 and 45). The concept of Euclidean domain is an
abstraction of these properties, and the efficiency of this abstraction is displayed in
this section. Furthermore the first axiom, φ(a) ≤ φ(ab), is used only in Theorem
2, and is sometimes omitted from the definition. Anyway it is possible to just play
around with matrices and get some deep results. If R is a Euclidean domain and M
is a finitely generated R-module, then M is the sum of cyclic modules. This is one of
the great classical theorems of abstract algebra, and you don’t have to worry about
it becoming obsolete. Here N will denote the set of all non-negative integers, not
just the set of positive integers.

Definition      A domain R is a Euclidean domain provided ∃ φ : (R − 0) −→ N such
                                                                     ¯
that if a, b ∈ (R − 0), then
                    ¯
       1) φ(a) ≤ φ(ab).
       2) ∃ q, r ∈ R such that a = bq + r with r = 0 or φ(r) < φ(b).
                                                     ¯
Examples of Euclidean Domains

       Z with φ(n) = |n|.
       A field F with φ(a) = 1 ∀ a 6= 0 or with φ(a) = 0 ∀ a 6= 0.
                                        ¯                              ¯
       F [x] where F is a field with φ(f = a0 + a1 x + · · · + an xn ) = deg(f ).
       Z[i] = {a + bi : a, b ∈ Z} = Gaussian integers with φ(a + bi) = a2 + b2 .
Chapter 6       Appendix                                                            117

Theorem 1        If R is a Euclidean domain, then R is a PID and thus a UFD.
Proof     If I is a non-zero ideal, then ∃ b ∈ I − 0 satisfying φ(b) ≤ φ(a) ∀ a ∈ I − 0.
                                                   ¯                                  ¯
Then b generates I because if a ∈ I − 0, ∃ q, r with a = bq + r. Now r ∈ I and
                                          ¯
r 6= 0 ⇒ φ(r) < φ(b) which is impossible. Thus r = 0 and a ∈ bR so I = bR.
     ¯                                                  ¯

Theorem 2          If R is a Euclidean domain and a, b ∈ R − 0, then
                                                             ¯
        φ(1) is the smallest integer in the image of φ.
          ¯
        a is a unit in R iff φ(a) = φ(1).
                                       ¯
        a and b are associates ⇒ φ(a) = φ(b).
Proof      This is a good exercise. However it is unnecessary for Theorem 3 below.

   The following remarkable theorem is the foundation for the results of this section.

Theorem 3       If R is a Euclidean domain and (ai,j ) ∈ Rn,t is a non-zero matrix,
then by elementary row and column operations (ai,j ) can be transformed to


                              d1 0 · · ·              0
                                                         
                             0 d                         
                                 2                       
                             .     ..
                             .
                                                          
                             .        .                  
                                                          
                                             dm
                                                         
                                                         
                                                         
                            
                                                 0       
                                                          
                                                         
                                                         
                                0                     0


where each di 6= 0, and di |di+1 for 1 ≤ i < m. Also d1 generates the ideal of R
                 ¯
generated by the entries of (ai,j ).
Proof       Let I ⊂ R be the ideal generated by the elements of the matrix A = (ai,j ).
If E ∈ Rn , then the ideal J generated by the elements of EA has J ⊂ I. If E is
invertible, then J = I. In the same manner, if E ∈ Rt is invertible and J is the ideal
generated by the elements of AE, then J = I. This means that row and column
operations on A do not change the ideal I. Since R is a PID, there is an element
d1 with I = d1 R, and this will turn out to be the d1 displayed in the theorem.
    The matrix (ai,j ) has at least one non-zero element d with φ(d) a miminum.
However, row and column operations on (ai,j ) may produce elements with smaller
118                                                               Appendix         Chapter 6

φ values. To consolidate this approach, consider matrices obtained from (ai,j ) by a
finite number of row and column operations. Among these, let (bi,j ) be one which
has an entry d1 6= 0 with φ(d1 ) a minimum. By elementary operations of type 2, the
entry d1 may be moved to the (1, 1) place in the matrix. Then d1 will divide the other
entries in the first row, else we could obtain an entry with a smaller φ value. Thus
by column operations of type 3, the other entries of the first row may be made zero.
In a similar manner, by row operations of type 3, the matrix may be changed to the
following form.

                                         d1 0 · · · 0
                                                        
                                                        
                                                        
                                         0
                                                        
                                                        
                                         ..
                                                        
                                                        
                                     
                                         .      cij     
                                                         
                                                        
                                                        
                                         0


Note that d1 divides each ci,j , and thus I = d1 R. The proof now follows by induction
on the size of the matrix.

   This is an example of a theorem that is easy to prove playing around at the
blackboard. Yet it must be a deep theorem because the next two theorems are easy
consequences.

Theorem 4              Suppose R is a Euclidean domain, B is a finitely generated free R-
module and A ⊂ B is a non-zero submodule. Then ∃ free bases {a1 , a2 , ..., at } for A
and {b1 , b2 , ..., bn } for B, with t ≤ n, and such that each ai = di bi , where each di 6= 0,
                                                                                             ¯
and di |di+1 for 1 ≤ i < t. Thus B/A ≈ R/d1 ⊕ R/d2 ⊕ · · · ⊕ R/dt ⊕ Rn−t .
Proof       By Theorem 3 in the section Splitting Short Exact Sequences, A has a
free basis {v1 , v2 , ..., vt }. Let {w1 , w2 , ..., wn } be a free basis for B, where n ≥ t. The
composition

                                          ≈      ⊂       ≈
                                     Rt −→ A −→ B −→ Rn

                                      ei −→ vi         wi −→ ei

is represented by a matrix (ai,j ) ∈ Rn,t where vi = a1,i w1 + a2,i w2 + · · · + an,i wn . By
the previous theorem, ∃ invertible matrixes U ∈ Rn and V ∈ Rt such that
Chapter 6        Appendix                                                                 119
                                                                
                                            d1    0     ··· 0
                                           0     d2     0
                                                             
                                                              
                                           ..          ..
                                                             
                                           .      0       .
                                                              
                            U (ai,j )V =                     
                                                                 
                                          
                                                            dt 
                                                                
                                                                
                                                                
                                              0   ···        0


                                                         ≈               ≈
with di |di+1 . Since changing the isomorphisms Rt −→ A and B −→ Rn corresponds
to changing the bases {v1 , v2 , ..., vt } and {w1 , w2 , ..., wn }, the theorem follows.

Theorem 5     If R is a Euclidean domain and M is a finitely generated R-module,
then M ≈ R/d1 ⊕ R/d2 ⊕ · · ·⊕ R/dt ⊕ Rm where each di 6= 0, and di |di+1 for 1 ≤ i < t.
                                                         ¯

Proof     By hypothesis ∃ a finitely generated free module B and a surjective homo-
                                                              ⊂
morphism B −→ M −→ 0. Let A be the kernel, so 0 −→ A −→ B −→ M −→ 0 is
a s.e.s. and B/A ≈ M. The result now follows from the previous theorem.

    The way Theorem 5 is stated, some or all of the elements di may be units, and for
such di , R/di = 0. If we assume that no di is a unit, then the elements d1 , d2 , ..., dt are
                 ¯
called invariant factors. They are unique up to associates, but we do not bother with
that here. If R = Z and we select the di to be positive, they are unique. If R = F [x]
and we select the di to be monic, then they are unique. The splitting in Theorem 5
is not the ultimate because the modules R/di may split into the sum of other cyclic
modules. To prove this we need the following Lemma.

Lemma        Suppose R is a PID and b and c are non-zero non-unit elements of R.
Suppose b and c are relatively prime, i.e., there is no prime common to their prime
factorizations. Then bR and cR are comaximal ideals. (See p 108 for comaximal.)
Proof     There exists an a ∈ R with aR = bR + cR. Since a|b and a|c, a is a
unit, so R = bR + cR.

Theorem 6          Suppose R is a PID and d is a non-zero non-unit element of R.
Assume d = ps11 ps22 · · · pst t is the prime factorization of d (see bottom of p 110). Then
                                 ≈
the natural map R/d −→R/ps11 ⊕ · · · ⊕ R/pst t is an isomorphism of R-modules.
(The elements psi i are called elementary divisors of R/d.)
                                s
Proof      If i 6= j, psi i and pj j are relatively prime. By the Lemma above, they are
120                                                        Appendix        Chapter 6

comaximal and thus by the Chinese Remainder Theorem, the natural map is a ring
isomorphism (page 108). Since the natural map is also an R-module homomorphism,
it is an R-module isomorphism.

   This theorem carries the splitting as far as it can go, as seen by the next exercise.


Exercise   Suppose R is a PID, p ∈ R is a prime element, and s ≥ 1. Then the
R-module R/ps has no proper submodule which is a summand.




Torsion Submodules          This will give a little more perspective to this section.

Definition      Suppose M is a module over a domain R. An element m ∈ M is said
to be a torsion element if ∃ r ∈ R with r 6= 0 and mr = 0. This is the same as
                                                   ¯             ¯
saying m is dependent. If R = Z, it is the same as saying m has finite order. Denote
by T (M ) the set of all torsion elements of M . If T (M ) = 0, we say that M is torsion
                                                             ¯
free.

Theorem 7    Suppose M is a module over a domain R. Then T (M ) is a submodule
of M and M/T (M ) is torsion free.
Proof      This is a simple exercise.

Theorem 8      Suppose R is a Euclidean domain and M is a finitely generated
R-module which is torsion free. Then M is a free R-module, i.e., M ≈ Rm .
Proof      This follows immediately from Theorem 5.

Theorem 9      Suppose R is a Euclidean domain and M is a finitely generated
R-module. Then the following s.e.s. splits.


                       0 −→ T (M ) −→ M −→ M/T (M ) −→ 0


Proof     By Theorem 7, M/T (M ) is torsion free. By Theorem 8, M/T (M ) is a free
R-module, and thus there is a splitting map. Of course this theorem is transparent
anyway, because Theorem 5 gives a splitting of M into a torsion part and a free part.
Chapter 6       Appendix                                                             121

Note     It follows from Theorem 9 that ∃ a free submodule V of M such that T (M )⊕
V = M . The first summand T (M ) is unique, but the complementary summand V is
not unique. V depends upon the splitting map and is unique only up to isomorphism.




   To complete this section, here are two more theorems that follow from the work
we have done.

Theorem 10          Suppose T is a domain and T ∗ is the multiplicative group of units
of T . If G is a finite subgroup of T ∗ , then G is a cyclic group. Thus if F is a finite
field, the multiplicative group F ∗ is cyclic. Thus if p is a prime, (Zp )∗ is cyclic.
Proof        This is a corollary to Theorem 5 with R = Z. The multiplicative group G
is isomorphic to an additive group Z/d1 ⊕ Z/d2 ⊕ · · · ⊕ Z/dt where each di > 1 and
di |di+1 for 1 ≤ i < t. Every u in the additive group has the property that udt = 0.
                                                                                   ¯
So every g ∈ G is a solution to xdt − 1 = 0. If t > 1, the equation will have degree
                                         ¯ ¯
less than the number of roots, which is impossible. Thus t = 1 and so G is cyclic.

Exercise      For which primes p and q is the group of units (Zp ×Zq )∗ a cyclic group?

   We know from Exercise 2) on page 59 that an invertible matrix over a field is the
product of elementary matrices. This result also holds for any invertible matrix over
a Euclidean domain.

Theorem 11        Suppose R is a Euclidean domain and A ∈ Rn is a matrix with
non-zero determinant. Then by elementary row and column operations, A may be
transformed to a diagonal matrix


                                     d1                 0
                                                            
                                 
                                         d2                 
                                                             
                                 
                                               ..            
                                 
                                                   .        
                                                             
                                     0                  dn


where each di 6= 0 and di |di+1 for 1 ≤ i < n. Also d1 generates the ideal generated
                   ¯
by the entries of A. Furthermore A is invertible iff each di is a unit. Thus if A is
invertible, A is the product of elementary matrices.
122                                                         Appendix        Chapter 6

Proof       It follows from Theorem 3 that A may be transformed to a diagonal matrix
with di |di+1 . Since the determinant of A is not zero, it follows that each di 6= 0.
                                                                                       ¯
Furthermore, the matrix A is invertible iff the diagonal matrix is invertible, which is
true iff each di is a unit. If each di is a unit, then the diagonal matrix is the product
of elementary matrices of type 1. Therefore if A is invertible, it is the product of
elementary matrices.

                                          !                     !
                                  3 11               3 11
Exercise      Let R = Z, A =               and D =          . Perform elementary
                                  0 4                1 4
operations on A and D to obtain diagonal matrices where the first diagonal element
divides the second diagonal element. Write D as the product of elementary matri-
ces. Find the characteristic polynomials of A and D. Find an elementary matrix B
over Z such that B −1 AB is diagonal. Find an invertible matrix C in R2 such that
C −1 DC is diagonal. Show C cannot be selected in Q2 .

                                   Jordan Blocks

    In this section, we define the two special types of square matrices used in the
Rational and Jordan canonical forms. Note that the Jordan block B(q) is the sum
of a scalar matrix and a nilpotent matrix. A Jordan block displays its eigenvalue
on the diagonal, and is more interesting than the companion matrix C(q). But as
we shall see later, the Rational canonical form will always exist, while the Jordan
canonical form will exist iff the characteristic polynomial factors as the product of
linear polynomials.

      Suppose R is a commutative ring, q = a0 + a1 x + · · · + an−1 xn−1 + xn ∈ R[x]
is a monic polynomial of degree n ≥ 1, and V is the R[x]-module V = R[x]/q.
V is a torsion module over the ring R[x], but as an R-module, V has a free basis
{1, x, x2 , . . . , xn−1 }. (See the last part of the last theorem on page 46.) Multipli-
cation by x defines an R-module endomorphism on V , and C(q) will be the ma-
trix of this endomorphism with respect to this basis. Let T : V → V be defined
by T (v) = vx. If h(x) ∈ R[x], h(T ) is the R-module homomorphism given by
multiplication by h(x). The homomorphism from R[x]/q to R[x]/q given by
multiplication by h(x), is zero iff h(x) ∈ qR[x]. That is to say q(T ) = a0 I + a1 T +
· · · + T n is the zero homomorphism, and h(T ) is the zero homomorphism iff
h(x) ∈ qR[x]. All of this is supposed to make the next theorem transparent.

Theorem        Let V have the free basis {1, x, x2 , ..., xn−1 }. The companion matrix
Chapter 6       Appendix                                                             123

representing T is

                                                           
                                   0 . . . . . . 0 −a0
                                  1 0 . . . 0 −a1 
                                                       
                                                       
                          C(q) =  0 1 0
                                                   −a2 
                                                        
                                  .       .. ..     .. 
                                  ..          .  .   . 
                                                       
                                   0 . . . . . . 1 −an−1


The characteristic polynomial of C(q) is q, and |C(q)| = (−1)n a0 . Finally, if h(x) ∈
R[x], h(C(q)) is zero iff h(x) ∈ qR[x].

Theorem         Suppose λ ∈ R and q(x) = (x − λ)n . Let V have the free basis
{1, (x − λ), (x − λ)2 , . . . , (x − λ)n−1 }. Then the matrix representing T is


                                      λ     0   ... ... 0
                                                          
                                     1     λ    0 ... 0 
                                                           
                                                        .. 
                           B(q) =  0        1 λ          . 
                                    
                                                            
                                   ..          . . . . .. 
                                                           
                                   .              .   . . 
                                        0   ... ... 1 λ


The characteristic polynomial of B(q) is q, and |B(q)| = λn = (−1)n a0 . Finally, if
h(x) ∈ R[x], h(B(q)) is zero iff h(x) ∈ qR[x].

Note     For n = 1, C(a0 + x) = B(a0 + x) = (−a0 ). This is the only case where a
block matrix may be the zero matrix.

Note      In B(q), if you wish to have the 1s above the diagonal, reverse the order of
the basis for V .

                             Jordan Canonical Form

    We are finally ready to prove the Rational and Jordan forms. Using the previous
sections, all that’s left to do is to put the pieces together. (For an overview of Jordan
form, read first the section in Chapter 5, page 96.)
124                                                                    Appendix   Chapter 6

   Suppose R is a commutative ring, V is an R-module, and T : V → V is an
R-module homomorphism. Define a scalar multiplication V × R[x] → V by
v(a0 + a1 x + · · · + ar xr ) = va0 + T (v)a1 + · · · + T r (v)ar .

Theorem 1         Under this scalar multiplication, V is an R[x]-module.

   This is just an observation, but it is one of the great tricks in mathematics.
Questions about the transformation T are transferred to questions about the module
V over the ring R[x]. And in the case R is a field, R[x] is a Euclidean domain and so
we know almost everything about V as an R[x]-module.

    Now in this section, we suppose R is a field F , V is a finitely generated F -module,
T : V → V is a linear transformation and V is an F [x]-module with vx = T (v). Our
goal is to select a basis for V such that the matrix representing T is in some simple
form. A submodule of VF [x] is a submodule of VF which is invariant under T . We
know VF [x] is the sum of cyclic modules from Theorems 5 and 6 in the section on
Euclidean Domains. Since V is finitely generated as an F -module, the free part of
this decomposition will be zero. In the section on Jordan Blocks, a basis is selected
for these cyclic modules and the matrix representing T is described. This gives the
Rational Canonical Form and that is all there is to it. If all the eigenvalues for T are
in F , we pick another basis for each of the cyclic modules (see the second theorem in
the section on Jordan Blocks). Then the matrix representing T is called the Jordan
Canonical Form. Now we say all this again with a little more detail.

   From Theorem 5 in the section on Euclidean Domains, it follows that
                        VF [x] ≈ F [x]/d1 ⊕ F [x]/d2 ⊕ · · · ⊕ F [x]/dt
where each di is a monic polynomial of degree ≥ 1, and di |di+1 . Pick {1, x, x2 , . . . , xm−1 }
as the F -basis for F [x]/di where m is the degree of the polynomial di .

Theorem 2         With respect to this basis, the matrix representing T is

                                                                  
                                 C(d1 )
                               
                                     C(d2 )                       
                                                                   
                                                                  
                                                                  
                                                                  
                                                ..                
                               
                                                     .            
                                                                   
                                                                  
                                                                  
                                                          C(dt )
Chapter 6        Appendix                                                                 125

The characteristic polynomial of T is p = d1 d2 · · · dt and p(T ) = 0. This is a type of
                                                                     ¯
canonical form but it does not seem to have a name.

    Now we apply Theorem 6 to each F [x]/di . This gives VF [x] ≈ F [x]/ps11 ⊕ · · · ⊕
F [x]/psrr where the pi are irreducible monic polynomials of degree at least 1. The pi
need not be distinct. Pick an F -basis for each F [x]/psi i as before.

Theorem 3         With respect to this basis, the matrix representing T is


                                C(ps11 )
                                                                      

                                        C(ps22 )               0
                                                                      
                                                                      
                                                                      
                                                                      
                                                                      
                                                  ..                  
                              
                                   0                   .              
                                                                       
                                                            C(psrr )


The characteristic polynomial of T is p = ps11 · · · psrr and p(T ) = 0. This is called the
                                                                      ¯
Rational canonical form for T .

    Now suppose the characteristic polynomial of T factors in F [x] as the product of
linear polynomials. Thus in the Theorem above, pi = x − λi and

                    VF [x] ≈ F [x]/(x − λ1 )s1 ⊕ · · · ⊕ F [x]/(x − λr )sr

is an isomorphism of F [x]-modules. Pick {1, (x − λi ), (x − λi )2 , . . . , (x − λi )m−1 } as
the F -basis for F [x]/(x − λi )si where m is si .

Theorem 4         With respect to this basis, the matrix representing T is


                          B((x − λ1 )s1 )
                                                                             
                      
                                                                      0      
                                                                              
                                                   s2
                                        B((x − λ2 ) )
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                  ..                         
                      
                               0                       .                     
                                                                              
                                                                             
                                                                             
                                                            B((x − λr )sr )
126                                                             Appendix          Chapter 6

The characteristic polynomial of T is p = (x − λ1 )s1 · · · (x − λr )sr and p(T ) = 0. This
                                                                                    ¯
is called the Jordan canonical form for T. Note that the λi need not be distinct.

Note       A diagonal matrix is in Rational canonical form and in Jordan canonical
form. This is the case where each block is one by one. Of course a diagonal matrix
is about as canonical as you can get. Note also that if a matrix is in Jordan form,
its trace is the sum of the eigenvalues and its determinant is the product of the
eigenvalues. Finally, this section is loosely written, so it is important to use the
transpose principle to write three other versions of the last two theorems.



Exercise        Suppose F is a field of characteristic 0 and T ∈ Fn has trace(T i ) = 0
                                                                                         ¯
for 0 < i ≤ n. Show T is nilpotent. Let p ∈ F [x] be the characteristic polynomial of
T . The polynomial p may not factor into linears in F [x], and thus T may have no
conjugate in Fn which is in Jordan form. However this exercise can still be worked
using Jordan form. This is based on the fact that there exists a field F̄ containing F
as a subfield, such that p factors into linears in F̄ [x]. This fact is not proved in this
book, but it is assumed for this exercise. So ∃ an invertible matrix U ∈ F̄n so that
U −1 T U is in Jordan form, and of course, T is nilpotent iff U −1 T U is nilpotent. The
point is that it sufficies to consider the case where T is in Jordan form, and to show
the diagonal elements are all zero.
    So suppose T is in Jordan form and trace (T i ) = 0 for 1 ≤ i ≤ n. Thus trace
                                                           ¯
(p(T )) = a0 n where a0 is the constant term of p(x). We know p(T ) = 0 and thus
                                                                               ¯
trace (p(T )) = 0, and thus a0 n = 0. Since the field has characteristic 0, a0 = 0
                  ¯                     ¯                                                ¯
and so 0 is an eigenvalue of T . This means that one block of T is a strictly lower
         ¯
triangular matrix. Removing this block leaves a smaller matrix which still satisfies
the hypothesis, and the result follows by induction on the size of T . This exercise
illustrates the power and facility of Jordan form. It also has a cute corollary.

Corollary        Suppose F is a field of characteristic 0, n ≥ 1, and (λ1 , λ2 , .., λn ) ∈ F n
satisfies λi1 + λi2 + · · +λin = 0 for each 1 ≤ i ≤ n. Then λi = 0 for 1 ≤ i ≤ n.
                                 ¯                                  ¯



Minimal polynomials          To conclude this section here are a few comments on the
minimal polynomial of a linear transformation. This part should be studied only if
you need it. Suppose V is an n-dimensional vector space over a field F and T : V → V
is a linear transformation. As before we make V a module over F [x] with T (v) = vx.
Chapter 6       Appendix                                                                127

Definition       Ann(VF [x]) is the set of all h ∈ F [x] which annihilate V , i.e., which
satisfy V h = 0. This is a non-zero ideal of F [x] and is thus generated by a unique
               ¯
monic polynomial u(x) ∈ F (x), Ann(VF [x]) = uF [x]. The polynomial u is called the
minimal polynomial of T. Note that u(T ) = 0 and if h(x) ∈ F [x], h(T ) = 0 iff
                                                 ¯                                   ¯
h is a multiple of u in F [x]. If p(x) ∈ F [x] is the characteristic polynomial of T ,
p(T ) = 0 and thus p is a multiple of u.
        ¯
    Now we state this again in terms of matrices. Suppose A ∈ Fn is a matrix
representing T . Then u(A) = 0 and if h(x) ∈ F [x], h(A) = 0 iff h is a multiple of
                                 ¯                               ¯
u in F [x]. If p(x) ∈ F [x] is the characteristic polynomial of A, then p(A) = 0 and
                                                                                    ¯
thus p is a multiple of u. The polynomial u is also called the minimal polynomial of
A. Note that these properties hold for any matrix representing T , and thus similar
matrices have the same minimal polynomial. If A is given to start with, use the linear
transformation T : F n → F n determined by A to define the polynomial u.

   Now suppose q ∈ F [x] is a monic polynomial and C(q) ∈ Fn is the compan-
ion matrix defined in the section Jordan Blocks. Whenever q(x) = (x − λ)n , let
B(q) ∈ Fn be the Jordan block matrix also defined in that section. Recall that q is
the characteristic polynomial and the minimal polynomial of each of these matrices.
This together with the rational form and the Jordan form will allow us to understand
the relation of the minimal polynomial to the characteristic polynomial.

Exercise      Suppose Ai ∈ Fni has qi as its characteristic polynomial and its minimal

                          A1                 0
                                                 
                    
                              A2                 
                                                  
polynomial, and A =                ..            .   Find the characteristic polynomial
                    
                                        .        
                                                  
                          0                  Ar
and the minimal polynomial of A.

Exercise      Suppose A ∈ Fn .


 1)   Suppose A is the matrix displayed in Theorem 2 above. Find the characteristic
      and minimal polynomials of A.

 2)   Suppose A is the matrix displayed in Theorem 3 above. Find the characteristic
      and minimal polynomials of A.

 3)   Suppose A is the matrix displayed in Theorem 4 above. Find the characteristic
      and minimal polynomials of A.
128                                                                    Appendix             Chapter 6

 4) Suppose λ ∈ F . Show λ is a root of the characteristic polynomial of A iff λ
    is a root of the minimal polynomial of A. Show that if λ is a root, its order
    in the characteristic polynomial is at least as large as its order in the minimal
    polynomial.

 5) Suppose F̄ is a field containing F as a subfield. Show that the minimal poly-
    nomial of A ∈ Fn is the same as the minimal polynomial of A considered as a
    matrix in F̄n . (This funny looking exercise is a little delicate.)
                                                     
                         5 −1  3
 6) Let F = R and A =  0   2  0 
                                 . Find the characteristic and minimal
                      

                        −3  1 −1
    polynomials of A.


                                         Determinants

    In the chapter on matrices, it is stated without proof that the determinant of the
product is the product of the determinants (see page 63). The purpose of this section
is to give a proof of this. We suppose R is a commutative ring, C is an R-module,
n ≥ 2, and B1 , B2 , . . . , Bn is a sequence of R-modules.

Definition    A map f : B1 ⊕ B2 ⊕ · · · ⊕ Bn → C is R-multilinear means that if
1 ≤ i ≤ n, and bj ∈ Bj for j 6= i, then f |(b1 , b2 , . . . , Bi , . . . , bn ) defines an R-linear
map from Bi to C.

Theorem          The set of all R-multilinear maps is an R-module.
Proof       From the first exercise in Chapter 5, the set of all functions from B1 ⊕ B2 ⊕
· · · ⊕ Bn to C is an R-module (see page 69). It must be seen that the R-multilinear
maps form a submodule. It is easy to see that if f1 and f2 are R-multilinear, so is
f1 + f2 . Also if f is R-multilinear and r ∈ R, then (f r) is R-multilinear.

    From here on, suppose B1 = B2 = · · · = Bn = B.

Definition
        1)   f is symmetric means f (b1 , . . . , bn ) = f (bτ (1) , . . . , bτ (n) ) for all
             permutations τ on {1, 2, . . . , n}.
        2)   f is skew-symmetric if f (b1 , . . . , bn ) = sign(τ )f (bτ (1) , . . . , bτ (n) ) for all τ .
Chapter 6            Appendix                                                                                  129

         3)     f is alternating if f (b1 , . . . , bn ) = 0 whenever some bi = bj for i 6= j.
                                                           ¯

Theorem
         i)   Each of these three types defines a submodule of the set of all
              R-multilinear maps.
         ii) Alternating ⇒ skew-symmetric.
         iii) If no element of C has order 2, then alternating ⇐⇒ skew-symmetric.

Proof            Part i) is immediate. To prove ii), assume f is alternating. It sufficies to
show that f (b1 , ..., bn ) = −f (bτ (1) , ..., bτ (n) ) where τ is a transposition. For simplicity,
assume τ = (1, 2). Then 0 = f (b1 + b2 , b1 + b2 , b3 , ..., bn ) = f (b1 , b2 , b3 , ..., bn ) +
                                       ¯
f (b2 , b1 , b3 , ..., bn ) and the result follows. To prove iii), suppose f is skew symmetric
and no element of C has order 2, and show f is alternating. Suppose for convenience
that b1 = b2 and show f (b1 , b1 , b3 , . . . , bn ) = 0. If we let τ be the transposition (1, 2),
                                                              ¯
we get f (b1 , b1 , b3 , . . . , bn ) = −f (b1 , b1 , b3 , . . . , bn ), and so 2f (b1 , b1 , b3 , . . . , bn ) = 0,
                                                                                                                  ¯
and the result follows.

    Now we are ready for determinant. Suppose C = R. In this case multilinear
maps are usually called multilinear forms. Suppose B is Rn with the canonical basis
{e1 , e2 , . . . , en }. (We think of a matrix A ∈ Rn as n column vectors, i.e., as an element
of B ⊕ B ⊕ · · · ⊕ B.) First we recall the definition of determinant.

    Suppose A = (ai,j ) ∈ Rn . Define d : B ⊕B ⊕· · ·⊕B → R by d(a1,1 e1 +a2,1 e2 +· · ·+
an,1 en , ....., a1,n e1 + a2,n e2 + · · · + an,n en ) = all τ sign(τ )(aτ (1),1 aτ (2),2 · · · aτ (n),n ) = |A|.
                                                        P



    The next theorem follows from the section on determinants on page 61.

Theorem            d is an alternating multilinear form with d(e1 , e2 , . . . , en ) = 1.
                                                                                        ¯

    If c ∈ R, dc is an alternating multilinear form, because the set of alternating forms
is an R-module. It turns out that this is all of them, as seen by the following theorem.


Theorem               Suppose f : B ⊕ B ⊕ . . . ⊕ B → R is an alternating multilinear form.
Then f = df (e1 , e2 , . . . , en ). This means f is the multilinear form d times the scalar
f (e1 , e2 , ..., en ). In other words, if A = (ai,j ) ∈ Rn , then f (a1,1 e1 + a2,1 e2 + · · · +
an,1 en , ....., a1,n e2 + a2,n e2 + · · · + an,n en ) = |A|f (e1 , e2 , ..., en ). Thus the set of alter-
nating forms is a free R-module of dimension 1, and the determinant is a generator.
130                                                                           Appendix              Chapter 6

Proof           For n = 2, you can simply write it out. f (a1,1 e1 + a2,1 e2 , a1,2 e1 + a2,2 e2 ) =
a1,1 a1,2 f (e1 , e1 ) + a1,1 a2,2 f (e1 , e2 ) + a2,1 a1,2 f (e2 , e1 ) + a2,1 a2,2 f (e2 , e2 ) = (a1,1 a2,2 −
a1,2 a2,1 )f (e1 , e2 ) = |A|f (e1 , e2 ). For the general case, f (a1,1 e1 + a2,1 e2 + · · · +
an,1 en , ....., a1,n e1 + a2,n e2 + · · · + an,n en ) = ai1 ,1 ai2 ,2 · · · ain ,n f (ei1 , ei2 , ..., ein ) where
                                                                P

the sum is over all 1 ≤ i1 ≤ n, 1 ≤ i2 ≤ n, ..., 1 ≤ in ≤ n. However, if any is = it
for s 6= t, that term is 0 because f is alternating. Therefore the sum is
just all τ aτ (1),1 aτ (2),2 · · · aτ (n),n f (eτ (1) , eτ (2) , . . . , eτ (n) ) = all τ sign(τ )aτ (1),1
       P                                                                           P

aτ (2),2 · · · aτ (n),n f (e1 , e2 , . . . , en ) = |A|f (e1 , e2 , ..., en ).

    This incredible classification of these alternating forms makes the proof of the
following theorem easy. (See the third theorem on page 63.)

Theorem            If C, A ∈ Rn , then |CA| = |C||A|.
Proof          Suppose C ∈ Rn . Define f : Rn → R by f (A) = |CA|. In the notation of
the previous theorem, B = Rn and Rn = Rn ⊕ Rn ⊕ · · · ⊕ Rn . If A ∈ Rn , A =
(A1 , A2 , ..., An ) where Ai ∈ Rn is column i of A, and f : Rn ⊕ · · · ⊕ Rn → R
has f (A1 , A2 , ..., An ) = |CA|. Use the fact that CA = (CA1 , CA2 , ..., CAn ) to
show that f is an alternating multilinear form. By the previous theorem, f (A) =
|A|f (e1 , e2 , ..., en ). Since f (e1 , e2 , ..., en ) = |CI| = |C|, it follows that |CA| = f (A) =
|A||C|.

                                               Dual Spaces

    The concept of dual module is basic, not only in algebra, but also in other areas
such as differential geometry and topology. If V is a finitely generated vector space
over a field F , its dual V ∗ is defined as V ∗ = HomF (V, F ). V ∗ is isomorphic to V , but
in general there is no natural isomorphism from V to V ∗ . However there is a natural
isomorphism from V to V ∗∗ , and so V ∗ is the dual of V and V may be considered
to be the dual of V ∗ . This remarkable fact has many expressions in mathematics.
For example, a tangent plane to a differentiable manifold is a real vector space. The
union of these spaces is the tangent bundle, while the union of the dual spaces is the
cotangent bundle. Thus the tangent (cotangent) bundle may be considered to be the
dual of the cotangent (tangent) bundle. The sections of the tangent bundle are called
vector fields while the sections of the cotangent bundle are called 1-forms.
    In algebraic topology, homology groups are derived from chain complexes, while
cohomology groups are derived from the dual chain complexes. The sum of the
cohomology groups forms a ring, while the sum of the homology groups does not.
Chapter 6       Appendix                                                                131

Thus the concept of dual module has considerable power. We develop here the basic
theory of dual modules.

   Suppose R is a commutative ring and W is an R-module.

Definition   If M is an R-module, let H(M ) be the R-module H(M )=HomR (M, W ).
If M and N are R-modules and g : M → N is an R-module homomorphism, let
H(g) : H(N ) → H(M ) be defined by H(g)(f ) = f ◦ g. Note that H(g) is an
R-module homomorphism.
                                                      g
                                    M                             -   N
                                          Z
                                              Z
                                                  Z
                                                      Z                   f
                               H(g)(f ) = f ◦ g Z
                                                              Z           ?
                                                                  Z
                                                                  ~
                                                                  Z
                                                                      W

Theorem

      i)    If M1 and M2 are R-modules, H(M1 ⊕ M2 ) ≈ H(M1 ) ⊕ H(M2 ).

      ii)   If I : M → M is the identity, then H(I) : H(M ) → H(M ) is the
            identity.
                  g        h
      iii) If M1 −→ M2 −→ M3 are R-module homomorphisms, then H(g)◦H(h) =
           H(h ◦ g). If f : M3 → W is a homomorphism, then
           (H(g) ◦ H(h))(f ) = H(h ◦ g)(f ) = f ◦ h ◦ g.


                                      g                               h
                          M1                  - M                             - M
                                                          2                         3
                                 PP                           Z
                                      PP
                                           f ◦ hZZ
                                           PP
                                          PP                                        f
                                   f ◦h◦g    PP    Z
                                                PP Z
                                                   PP~
                                                     Z
                                                     q
                                                     P                          ?
                                                                               W



Note      In the language of the category theory, H is a contravariant functor from
the category of R-modules to itself.
132                                                                    Appendix            Chapter 6

Theorem      If M and N are R-modules and g : M → N is an isomorphism, then
H(g) : H(N ) → H(M ) is an isomorphism with H(g −1 ) = H(g)−1 .
Proof

                       IH(N ) = H(IN ) = H(g ◦ g −1 ) = H(g −1 ) ◦ H(g)

                       IH(M ) = H(IM ) = H(g −1 ◦ g) = H(g) ◦ H(g −1 )

Theorem
        i)    If g : M → N is a surjective homomorphism, then H(g) : H(N ) → H(M )
              is injective.
        ii)   If g : M → N is an injective homomorphism and g(M ) is a summand
              of N, then H(g) : H(N ) → H(M ) is surjective.
        iii) If R is a field and g : M → N is a homomorphism, then g is surjective
             (injective) iff H(g) is injective (surjective).
Proof         This is a good exercise.

  For the remainder of this section, suppose W = RR . In this case H(M ) =
HomR (M, R) is denoted by H(M ) = M ∗ and H(g) is denoted by H(g) = g ∗ .

Theorem             Suppose M has a finite free basis {v1 , ..., vn }. Define vi∗ ∈ M ∗ by
vi∗ (v1 r1 + · · · + vn rn ) = ri . Thus vi∗ (vj ) = δi,j . Then v1∗ , . . . , vn∗ is a free basis for
M ∗ , called the dual basis.                                                                                
                                                                                                          0
                                                                                                      · 
                                                                                                            

             First consider the case of Rn = Rn,1 , with basis {e1 , . . . , en } where ei = 
                                                                                                            
Proof                                                                                                 1i .
                                                                                                             
                                                                                                      · 
                                                                                                            
                                                                                                          0
                  n ∗                                                 n
We know (R ) ≈ R1,n , i.e., any homomorphism from R to R is given by a 1 × n
matrix. Now R1,n is free with dual basis {e∗1 , . . . , e∗n } where e∗i = (0, . . . , 0, 1i , 0, . . . , 0).
                                      ≈
For the general case, let g : Rn → M be given by g(ei ) = vi . Then g ∗ : M ∗ → (Rn )∗
sends vi∗ to e∗i . Since g ∗ is an isomorphism, {v1∗ , . . . , vn∗ } is a basis for M ∗ .

Theorem         Suppose M is a free module with a basis {v1 , . . . , vm } and N is a free
module with a basis {w1 , . . . , wn } and g : M → N is the homomorphism given by
A = (ai,j ) ∈ Rn,m . This means g(vj ) = a1,j w1 + · · · + an,j wn . Then the matrix of
g ∗ : N ∗ → M ∗ with respect to the dual bases, is given by At .
Chapter 6           Appendix                                                                                133

Proof          Note that g ∗ (wi∗ ) is a homomorphism from M to R. Evaluation on vj gives
g ∗ (wi∗ )(vj ) = (wi∗ ◦ g)(vj ) = wi∗ (g(vj )) = wi∗ (a1,j w1 + · · · + an,j wn ) = ai,j . Thus g ∗ (wi∗ )
= ai,1 v1∗ + · · · + ai,m vm
                           ∗
                             , and thus g ∗ is represented by At .

Exercise       If U is an R-module, define φU : U ∗ ⊕ U → R by φU (f, u) = f (u).
Show that φU is R-bilinear. Suppose g : M → N is an R-module homomorphism,
f ∈ N ∗ and v ∈ M . Show that φN (f, g(v)) = φM (g ∗ (f ), v). Now suppose M =
N = Rn and g : Rn → Rn is represented by a matrix A ∈ Rn . Suppose f ∈ (Rn )∗
and v ∈ Rn . Use the theorem above to show that φ : (Rn )∗ ⊕ Rn → R has the
property φ(f, Av) = φ(At f, v). This is with the elements of Rn and (Rn )∗ written as
column vectors. If the elements of Rn are written as column vectors and the elements
of (Rn )∗ are written as row vectors, the formula is φ(f, Av) = φ(f A, v). Of course
this is just the matrix product f Av. Dual spaces are confusing, and this exercise
should be worked out completely.

Definition      “Double dual” is a “covariant” functor, i.e., if g : M → N is
a homomorphism, then g ∗∗ : M ∗∗ → N ∗∗ . For any module M , define α : M → M ∗∗
by α(m) : M ∗ → R is the homomorphism which sends f ∈ M ∗ to f (m) ∈ R, i.e.,
α(m) is given by evaluation at m. Note that α is a homomorphism.

Theorem        If M and N are R-modules and g : M → N is a homomorphism, then
the following diagram is commutative.

                                                         α -
                                             M               M ∗∗

                                            g                        g ∗∗
                                                ?                  ?
                                                         α -
                                             N               N ∗∗


Proof      On M, α is given by α(v) = φM (−, v). On N, α(u) = φN (−, u).
The proof follows from the equation φN (f, g(v)) = φM (g ∗ (f ), v).

Theorem     If M is a free R-module with a finite basis {v1 , . . . , vn }, then
         ∗∗
α : M → M is an isomorphism.

Proof        {α(v1 ), . . . , α(vn )} is the dual basis of {v1∗ , . . . , vn∗ }, i.e., α(vi ) = (vi∗ )∗ .
134                                                                   Appendix         Chapter 6

Note      Suppose R is a field and C is the category of finitely generated vector spaces
over R. In the language of category theory, α is a natural equivalence between the
identity functor and the double dual functor.

Note           For finitely generated vector spaces, α is used to identify V and V ∗∗ . Under
this identification V ∗ is the dual of V and V is the dual of V ∗ . Also, if {v1 , . . . , vn }
is a basis for V and {vi∗ , . . . , vn∗ } its dual basis, then {v1 , . . . , vn } is the dual basis
for {v1∗ , . . . , vn∗ }.

   In general there is no natural way to identify V and V ∗ . However for real inner
product spaces there is.

Theorem     Let R = R and V be an n-dimensional real inner product space.
Then β : V → V ∗ given by β(v) = (v, −) is an isomorphism.
Proof       β is injective and V and V ∗ have the same dimension.

Note     If β is used to identify V with V ∗ , then φV : V ∗ ⊕ V → R is just the dot
product V ⊕ V → R.

Note      If {v1 , . . . , vn } is any orthonormal basis for V, {β(v1 ), . . . , β(vn )} is the dual
basis of {v1 , . . . , vn }, that is β(vi ) = vi∗ . The isomorphism β : V → V ∗ defines an
inner product on V ∗ , and under this structure, β is an isometry. If {v1 , . . . , vn } is
an orthonormal basis for V, {v1∗ , . . . , vn∗ } is an orthonormal basis for V ∗ . Also, if U
is another n-dimensional IPS and f : V → U is an isometry, then f ∗ : U ∗ → V ∗
is an isometry and the following diagram commutes.

                                                        β -
                                                 V          V∗
                                                               6
                                             f                   f∗
                                                  ?
                                                        β -
                                                 U          U∗

Exercise     Suppose R is a commutative
                               M        ring, T is an infinite Y
                                                               index set, and
for each t ∈ T , Rt = R. Show ( Rt )∗ is isomorphic to RT =      Rt . Now let
                                M                t∈T                             t∈T
       +                                                ∗
T = Z , R = R, and M =                Rt .       Show M is not isomorphic to M .
                                t∈T
Index

Abelian group, 20, 71                             Cofactor of a matrix, 62
Algebraically closed field, 46, 97                Comaximal ideals, 108, 120
Alternating group, 32                             Commutative ring, 37
Ascending chain condition, 112                    Complex numbers, 1, 40, 46, 47, 97, 104
Associate elements in a domain, 47, 109           Conjugate, 64
Automorphism                                      Conjugation by a unit, 44
    of groups, 29                                 Contravariant functor, 131
    of modules, 70                                Coproduct or sum of modules, 76
    of rings, 43                                  Coset, 24, 42, 74
Axiom of choice, 10                               Cycle, 32
                                                  Cyclic
Basis or free basis                                  group, 23
    canonical or standard for Rn , 72, 79            module, 107
    of a module, 78, 83
Bijective or one-to-one correspondence,7          Determinant
Binary operation, 19                                 of a homomorphism, 85
Boolean algebras, 52                                 of a matrix, 60, 128
Boolean rings, 51                                 Diagonal matrix, 56
                                                  Dimension of a free module, 83
Cancellation law                                  Division algorithm, 45
    in a group, 20                                Domain
    in a ring, 39                                    euclidean, 116
Cartesian product, 2, 11                             integral domain, 39
Cayley’s theorem, 31                                 of a function, 5
Cayley-Hamilton theorem, 66, 98, 125                 principal ideal, 46
Center of group, 22                                  unique factorization, 111
Change of basis, 83                               Dual basis, 132
Characteristic of a ring, 50                      Dual spaces, 130
Characteristic polynomial
    of a homomorphism, 85, 95                     Eigenvalues, 95
    of a matrix, 66                               Eigenvectors, 95
Chinese remainder theorem, 50, 108                Elementary divisors, 119, 120
Classical adjoint of a matrix, 63                 Elementary matrices, 58

                                            135
136                                                                   Index

Elementary operations, 57, 122            multiplicative, 19
Endomorphism of a module, 70              symmetric, 31
Equivalence class, 4
Equivalence relation, 4                Hausdorff maximality principle, 3, 87,
Euclidean algorithm, 14                         109
Euclidean domain, 116                  Hilbert, 113
Evaluation map, 47, 49                 Homogeneous equation, 60
Even permutation, 32                   Homormophism
Exponential of a matrix, 106               of groups, 23
                                           of rings, 42
Factorization domain (FD), 111             of modules, 69
Fermat’s little theorem, 50            Homomorphism of quotient
Field, 39                                  group, 29
Formal power series, 113                   module, 74
Fourier series, 100                        ring, 44
Free basis, 72, 78, 79, 83
Free R-module, 78                      Ideal
Function or map, 6                         left, 41
    bijective, 7                           maximal, 109
    injective, 7                           of a ring, 41
    surjective, 7                          prime, 109
Function space Y T                         principal, 42, 46
    as a group, 22, 36                     right, 41
    as a module, 69                    Idempotent element in a ring, 49, 51
    as a ring, 44                      Image of a function, 7
    as a set, 12                       Independent sequence in a module, 78
Fundamental theorem of algebra, 46     Index of a subgroup, 25
                                       Index set, 2
Gauss, 113                             Induction, 13
General linear group GLn (R), 55       Injective or one-to-one, 7, 79
Generating sequence in a module, 78    Inner product spaces, 98
Generators of Zn , 40                  Integers mod n, 27, 40
Geometry of determinant, 90            Integers, 1, 14
Gram-Schmidt orthonormalization, 100   Invariant factors, 119
Graph of a function, 6                 Inverse image, 7
Greatest common divisor, 15            Invertible or non-singular matrix, 55
Group, 19                              Irreducible element, 47, 110
   abelian, 20                         Isometries of a square, 26, 34
   additive, 20                        Isometry, 101
   cyclic, 23                          Isomorphism
Index                                                                             137

    of groups, 29                             Order of an element or group, 23
    of modules, 70                            Orthogonal group O(n), 102
    of rings, 43                              Orthogonal vectors, 99
                                              Orthonormal sequence, 99
Jacobian matrix, 91
Jordan block, 96, 123                         Partial ordering, 3
Jordan canonical form, 96, 123, 125           Partition of a set, 5
                                              Permutation, 31
Kernel, 28, 43, 70                            Pigeonhole principle, 8, 39
Least common multiple, 17, 18                 Polynomial ring, 45
Linear combination, 78                        Power set, 12
Linear ordering, 3                            Prime
Linear transformation, 85                         element, 110
                                                  ideal, 109
Matrix                                            integer, 16
   elementary, 58                             Principal ideal domain (PID), 46
   invertible, 55                             Principal ideal, 42
   representing a linear transformation,      Product
        84                                        of groups, 34, 35
   triangular, 56                                 of modules, 75
Maximal                                           of rings, 49
   ideal, 109                                     of sets, 2, 11
   independent sequence, 86, 87               Projection maps, 11
   monotonic subcollection, 4
   subgroup, 114                              Quotient group, 27
Minimal polynomial, 127                       Quotient module, 74
Minor of a matrix, 62                         Quotient ring, 42
Module over a ring, 68
                                              Range of a function, 6
Monomial, 48
                                              Rank of a matrix, 59, 89
Monotonic collection of sets, 4
Multilinear forms, 129                        Rational canonical form, 107, 125
                                              Relation, 3
Multiplicative group of a finite field, 121
                                              Relatively prime
Nilpotent                                        integers, 16
    element, 56                                  elements in a PID, 119
    homomorphism, 93                          Right and left inverses of functions, 10
Noetherian ring, 112                          Ring, 38
Normal subgroup, 26                           Root of a polynomial, 46
                                              Row echelon form, 59
Odd permutation, 32
Onto or surjective, 7, 79                     Scalar matrix, 57
138                                      Index

Scalar multiplication, 21, 38, 54, 71
Self adjoint, 103, 105
Short exact sequence, 115
Sign of a permutation, 60
Similar matrices, 64
Solutions of equations, 9, 59, 81
Splitting map, 114
Standard basis for Rn , 72, 79
Strips (horizontal and vertical), 8
Subgroup, 14, 21
Submodule, 69
Subring, 41
Summand of a module, 77, 115
Surjective or onto, 7, 79
Symmetric groups, 31
Symmetric matrix, 103

Torsion element of a module, 121
Trace
   of a homormophism, 85
   of a matrix, 65
Transpose of a matrix, 56, 103, 132
Transposition, 32

Unique factorization,
   in principal ideal domains, 113
   of integers, 16
Unique factorization domain (UFD), 111
Unit in a ring, 38

Vector space, 67, 85
Volume preserving homomorphism, 90

Zero divisor in a ring, 39



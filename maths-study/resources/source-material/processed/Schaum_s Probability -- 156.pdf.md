---
normalized_id: shared-pdf-reference-schaum-s-probability-156
exam_code: SHARED
material_scope: schaum_s probability -- 156.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Schaum_s Probability -- 156.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-schaum-s-probability-156

                                           CONTENTS

                                                                                                           Page
 Chapter    I       SET THEORY ......................................................                         1
                    Introduction. Sets, elements. Set operations. Finite and countable sets. Product
                    sets. Classes of sets.



 Chapter    2       TECHNIQUES OF COUNTING ....................................                             16
                    Introduction. Fundamental principle of counting. Factorial notation. Permutations.
                    Permutations with repetitions. Ordered samples. Binomial coefficients and theorem.
                    Combinations. Ordered partitions. Tree diagrams.



 Chapter    3       INTRODUCTION TO PROBABILITY ..............................                              38
                    Introduction. Sample space and events. Axioms of probability. Finite probability
                    spaces. Finite equiprobable spaces. Infinite sample spaces.



 Chapter    4       CONDITIONAL PROBABILITY AND INDEPENDENCE ..........                                     54
                    Conditional probability. Multiplication theorem for conditional probability. Finite
                    stochastic processes and tree diagrams. Partitions and Bayed theorem. Inde-
                    pendence. Independent o r repeated trials.



 Chapter    5       RANDOM VARIABLES ............................................                           74
                    Introduction. Distribution and expectation of a finite random variable. Variance
                    and standard deviation. Joint distribution. Independent random variables. Func-
                    tions of a random variable. Discrete random variables in general. Continuous
                    random variables. Cumulative distribution function. Tchebycheff’s inequality.
                    Law of large numbers.



. Chapter   6       BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS .......... 105
                    Binomial distribution. Normal distribution. Normal approximation to the binomial
                    distribution. Central limit theorem. Poisson distribution. Multinomial distribution.



Chapter     7       MARKOV CHAINS ................................................                         126
                    Introduction. Probability vectors, stochastic matrices. Regular stochastic matrices.
                    Fixed points and regular stochastic matrices. Markov chains. Higher transition
                    probabilities. Stationary distribution of regular Markov chains. Absorbing states.
                ~




INDEX       ...........................................................................                    152
                                                                       Chapter I

                                        Set Theory

INTRODUCTION
   This chapter treats some of the elementary ideas and concepts of set theory which are
necessary for a modern introduction to probability theory.

SETS, ELEMENTS
    Any well defined list or collection of objects is called a set; the objects comprising the
set are called its elements or members. We write
                            p EA       if p is an element in the set A
If every element of A also belongs to a set B, i.e. if p E A implies p E B, then A is called a
subset of B or is said to be contained in B; this is denoted by
                                        A c B or B 3 A
Two sets are equaZ if each is contained in the other; that is,
                         A =B      if and only if     A c B and B c A
The negations of p E A , A c B and A = B are written p           A , A $ZB and A + B respectively.
   We specify a particular set by either listing its elements or by stating properties which
characterize the elements of the set. For example,
                                       A = {I,3, 5,7, 9}
means A is the set consisting of the numbers 1,3,5,7 and 9; and
                           B = {x : x is a prime number, x < 15)
means that B is the set of prime numbers less than 15.
    Unless otherwise stated, all sets under investigation are assumed to be subsets of some
fixed set called the universal set and denoted (in this chapter) by U. We also use 9 to denote
the emptg or nuZZ set, i.e. the set which contains no elements; this set is regarded as a subset
of every other set. Thus for any set A , we have 9 C A C U .

       Example 1.1:   The sets A and B above can also be written as
                           A = {x : x is an odd number, z < 10) and B = {2,3,6, 7,11,13}
                      Observe that 9 E A but 9 4 B , and 11 E B but 11 4 A ; whereas 3 E A and 3 EB, and
                      6 B A and 6 B B .


                                                  1
2                                            SET THEORY                                         [CHAP. 1


       Example 1.2:   We use the following special symbols:
                          N = the set of positive integers: 1,2, 3, . . .
                          Z = the set of integers: . . ., -2, -1, 0, 1, 2, . . .
                          R = the set of real numbers.
                      Thus we have N C Z C R .

       Example 1.3:   Intervals on the real line, defined below, appear very often in mathematics.     Here
                      a and b are real numbers with a < b.
                          Open interval from a to b        = (a,b ) = {x : a < x < b}
                          Closed interval from a to b      = [a,b] = {x : a f x 4 b}
                          Open-closed interval from a to b = (a, b] = {x : a < x f b}
                          Closed-open interval from a to b = [a,b ) = {x : a f x < b }
                      The open-closed and closed-open intervals are also called half-open intervals.

       Example 1.4:   In human population studies, the universal set consists of all the people in the
                      world.

       Example 15:    Let C = {x : x2 = 4, x is odd}.     Then C = (B; that is, C is the empty set.


    The following theorem applies.
Theorem 1.1:     Let A , B and C be any sets. Then: (i) A C A ; (ii) if A c B and B C A then
                 A = B ; and (iii) if A c B and B c C then A c e .
   We emphasize that A c B does not exclude the possibility that A = B. However, if
A C B but A # B, then we say that A is a proper subset of B. (Some authors use the symbol
c for a subset and the symbol c only for a proper subset.)

SET OPERATIONS
   Let A and B be arbitrary sets. The union of A and B, denoted by A U B , is the set of
elements which belong to A or to B:
                               AUB       =     { x : x E A or x E B }
Here “or” is used in the sense of and/or.
   The intersection of A and B, denoted by A n B , is the set of elements which belong to
both A and B:
                          A n B = { x : x E A and x E B }
If A n B = @, that is, if A and B do not have any elements in common, then A and B
are said to be disjoint.
   The differenceof A and B or the relative complement of B with respect to A , denoted by
A \ B, is the set of elements which belong to A but not to B:
                                A\B        =     { x : x E A ,x 4 B )
Observe that A\B      and B are disjoint, i.e. (A\B)          n B = @.
   The absolute complement or, simply, complement of A, denoted by A“, is the set of
elements which do not belong to A :
                                   Ac = ( x : x E U , x B A )
That is, A” is the difference of the universal set U and A .
CHAP. 11                                        SET THEORY                                               3

      Example 1.6:       The following diagrams, called Venn diagrams, illustrate the above set operations.
                         Here sets a r e represented by simple plane areas and U, the universal set, by
                         the area in the entire rectangle.




      Example 1.7:       Let A = {1,2,3,4} and B = {3,4,5, 6} where U = {1,2,3, . . .}.           Then
                                        A U B = (1, 2, 3, 4, 5, 6)          A n B = {3,4}
                                        A\B      = {1,2}                    Ac = (5, 6, 7, ...}

    Sets under the above operations satisfy various laws or identities which are listed
in the table below (Table 1). In fact, we state

Theorem 1.2:     Sets satisfy the laws in Table 1.
                     ~   ~~




                                  LAWS OF THE ALGEBRA OF SETS

                                               Idempotent Laws
           la. A u A = A                                   lb. A n A = A

                                               Associative Laws
           2a. ( A u B ) u C = A u ( B u C )                2b. ( A n B ) n C = A n ( B n C )

                                               Commutative Laws
           3a. A u B = B u A                                3b. A n B = B n A

                                              Distributive Laws
           4a. A u ( B n C ) = ( A u B ) n ( A u C )        4b. A n ( B u C ) = ( A n B ) u ( A n C )

                                                 Identity Laws
           6a. A U @ = A                                    5b. A n U = A
           6a. A U U = U                                     6b. A n @ = @

                                               Complement Laws
           7a. A uAC = U                                   7b. A n A c = @
           8a. (Ac)c = A                                     8b. Uc = @,    @C   =U
                                               De Morgan’s Laws
           9a. ( A u B ) ~= A c n Bc                        9b. (AnB)c = A c u BE

                                                   Table 1
4                                             SET THEORY                                                [CHAP. 1


Remark: Each of the above laws follows from an analogous logical law. For example,
               A n B = { x : x E A and x E B } = { x : x E B and x E A } = B n A
Here we use the fact that the composite statement “ p and q”, written p ~ is qlogically
                                                                                 ~
equivalent to the composite statement “ q and p”, i.e. q A p.
   The relationship between set inclusion and the above set operations follows:
Theorem 1.3:    Each of the following conditions is equivalent to ACB:
                           (i) A n B = A               (iii) B c c A c                   (v) BUAc = U
                           (ii) A U B = B              (iv) A n B C = 9

FINITE AND COUNTABLE SETS
   Sets can be finite or infinite. A set is finite if it is empty or if it consists of exactly n
elements where n is a positive integer; otherwise it is infinite.
       Example 1.8:    Let M be the set of the days of the week; that is,
                          M = {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}
                       Then M is finite.
       Example 1.9:    Let P = {z : x is a river on the earth}. Although it may be difficult to count the
                       number of rivers on the earth, P is a finite set.
       Example 1.10:   Let Y be the set of (positive) even integers, i.e.         Y = {2,4,6, .. .}. Then Y is an
                       infinite set.
       Example 1.U:    Let Z be the unit interval of real numbers, i.e. Z = { x : 0 f z f 1).           Then Z is
                       also an infinite set.
   A set is countable if it is finite or if its elements can be arranged in the form of a
sequence, in which case it is said to be countablg infinite; otherwise the set is uncountable.
The set in Example 1.10 is countably infinite, whereas it can be shown that the set in
Example 1.11 is uncountable.

PRODUCT SETS
   Let A and B be two sets. The product set of A and Bydenoted by A X B, consists of all
ordered pairs (a,b) where a E A and b E B:
                                AxB       =    { ( a , b ) :a E A , b E B }
The product of a set with itself, say A x A , is denoted by A2.
       Example 1.12:   The reader is familiar with the cartesian plane R2 = R X R as shown below.
                       Here each point P represents an ordered pair (a,b) of real numbers, and vice versa.

                                                                      2
                                                                  b               ?P
                                                                      1

                                                              , o         0   0      1


                                                  -3    -2   -1           i   i a i




       Example 1.13:   Let A = (1,2,3} and B = {a,b}.          Then
CHAP. 11                                     SET THEORY                                                     5

   The concept of product set is extended to any finite number of sets in a natural way.
The product set of the sets AI,A2, . . .,A,, written A1 x A2 x - x A,, is the set of all
ordered m-tuples (a1,a ~.,. .,am) where ai E At for each i.


CLASSES OF SETS
    Frequently the members of a set are sets themselves. For example, each line in a set
of lines is a set of points. To help clarify these situations, we usually use the word class
or family for such a set. The words subclass and subfamily have meanings analogous to
subset.
       Example 1.14:   The members of the class {{2,3}, {2}, {5,6}} are the sets {2,3}, (2) and (5, 6}.

       Example 1.15:   Consider any set A . The power set of A , denoted by "(A), is the class of all sub-
                       sets of A . In particular, if A = {a,b, c}, then
                                                          w,
                                         W A ) = { A , {a, {a,c), { b , cl, {a>,{a>, {c>, P}
                       In general, if A is finite and has n elements, then T(A) will have 2n elements.

   A partition of a set X is a subdivision of X into nonempty subsets which are disjoint and
whose union is X , i.e. is a class of nonempty subsets of X such that each a E X belongs to
a unique subset. The subsets in a partition are called ct?ZZs.




                       Then (i) is not a partition of X since 7 € X but 7 does not belong to any of the cells.
                       Furthermore, (ii) is not a partition of X since 5 E X and 5 belongs to both {1,3,5}
                       and {5,7,9}. On the other hand, (iii) is a partition of X since each element of X
                       belongs to exactly one cell.

    When we speak of an indexed class of sets {A*: i E I ) or simply {Ai},we mean that there
is a set Ai assigned to each element i E I . The set I is called the indexing set and the sets
At are said to be indexed by I . When the indexing set is the set N of positive integers, the
indexed class {A1,A2, . . . } is called a sequence of sets. By the union of these A*, denoted
by UiEr At (or simply U iAi), we mean the set of elements each belonging to a t least one of
the Ai; and by the intersection of the Ai, denoted by niE1 At (or simply n Ai), we mean the
set of elements each belonging to every Ai. We also write
                  U,"=, Ai = ArUAzU                and      n;=, Ai = A 1 n A 2 n
for the union and intersection, respectively, of a sequence of sets.

Definition:   A nonempty class CA of subsets of U is called an algebra (U-algebra)of sets if:
                  (i) the complement of any set in eA belongs to C A ; and
                  (ii) the union of any finite (countable) number of sets in CA belongs to C A ;
              that is, if CA is closed under complements and finite (countable) unions.

    It is simple to show (Problem 1.30) that an algebra (a-algebra) of sets contains U and
Iz, and is also closed under finite (countable) intersections.
6                                               SET THEORY                                            [CHAP. 1


                                          Solved Problems
SETS, ELEMENTS, SUBSETS
1.1. Let A = { x : 3 x = 6 } . Does A = 2 ?
            A is the set which consists of the single element 2, that is, A = (2). The number 2 belongs
       to A ; i t does not equal A. There is a basic difference between an element p and the singleton
       set (PI.

1.2.   Which of these sets are equal: {r,s, t}, { t, s, r } , {s, r, t } , { t, r, s} ?
             They are all equal. Order does not change a set.

1.3.   Determine whether or not each set is the null set:
       (i) X = {x:x2 = 9, 2x = 4}, (ii) Y = {x:x # x}, (iii) 2 = {x:x                     + 8 = 8}.
       (i)   There is no number which satisfies both    = 9 and 22 = 4; hence X is empty, i.e. X = 9.
                                                         22

       (ii) We interpret “=” to mean “is identical with” and so Y is also empty. In fact, some texts define
             the empty set as follows: @ ( 2 : z#z).
       (iii) The number zero satisfies x + 8 = 8; hence 2 = (0). Accordingly, 2 is not the empty set
             since it contains 0. That is, 2 # (B.

1.4.   Prove that A = {2,3,4,5} is not a subset of B = {x :x is even).
            It is necessary to show that a t least one element in A does not belong to B. Now 3 € A and,
       since B consists of even numbers, 3 B B; hence A is not a subset of B.

1.5.   Let V = { d } , W = {c, d } , X = {a,b, c } , Y = {a,b} and Z = {a,b , d } . Determine
       whether each statement is true or false:
       (i) Y c X, (ii) W f: 2, (iii) Z V, (iv) V c X, (v) X = W, (vi) W c Y.
       (i) Since each element in Y is a member of X, Y c X is true.
       (ii) Now a E 2 but a B W ;hence W # 2 is true.
       (iii) The only element in V is d and i t also belongs to 2;hence 23 V is true.
       (iv) V is not a subset of X since d E V but d B X;hence V C X is false.
       (v) Now a E X but a B W; hence X = W is false.
       (vi) W is not a subset of Y since c E W but c 6Z Y; hence W c Y is false.

1.6.   Prove: If A is a subset of the empty set Q), then A = 9.
           The null set Q, is a subset of every set; in particular, @ C A . But, by hypothesis, A c g ;
       hence A = 9.

1.7.   Prove Theorem l.l(iii): If A c B and B c C, then A C C.
           We must show that each element in A also belongs to C. Let z E A. Now A C B implies
       x E B. But B c C; hence z E C. We have shown that 2: E A implies z E C, that is, that A C C.

1.8.   Which of the following sets are finite?
       (i) The months of the year.                                   (iv) The set Q of rational numbers.
       (ii) {I,2,3, . . .,99,100).                                   (v) The set R of real numbers.
       (iii) The number of people living on the earth.
           The first three sets are finite; the last two are infinite. (It can be shown that Q is countable
       but R is uncountable.)
CHAP. 13                                           SET THEORY                                                7

1.9.    Consider the following sets of figures in the Euclidean plane:
                        A = {x : x is a quadrilateral)                   C = {x : x is a rhombus}
                        B = {z : x is a rectangle}                       D = {x : x is a square}
        Determine which sets are proper subsets of any of the others.
            Since a square has 4 right angles i t is a rectangle, since i t has 4 equal sides i t is a rhombus,
        and since i t has 4 sides it is a quadrilateral. Thus
                                              DcA,       DcB       and     DCCC
        that is, D is a subset of the other three. Also, since there are examples of rectangles, rhombuses and
        quadrilaterals which are not squares, D is a proper subset of the other three.
            In a similar manner we see that B is a proper subset of A and C is a proper subset of A. There
        are no other relations among the sets.


1.10.   Determine which of the following sets are equal: @ {0}, {Iz)).
             Each is different from the other. The set (0) contains one element, the number zero. The
        set (b contains no elements; it is the empty set. The set {(b} also contains one element, the null set.


SET OPERATIONS
1.11. Let U = { l , Z , . . .,8,9}, A = {1,2,3,4}, B = {2,4,6,8} and C = {3,4,5,6}.                     Find:
      (i) Ac, (ii) A n C , (iii) (AnC)", (iv) A u B, (v) B\C.
        (i)   Ac cansists of the elements in U that are not in A; hence Ac = {6,6,7,8,9}.
        (ii) A nC consists of the elements in both A and C; hence A n C = {3,4).
        (iii) (A n C)" consists of the elements in U that are not in A nC. Now by (ii), A nC = {3,4} and
              so (AnC)C = {1,2,5,6,7,8,9).
        (iv) A u B consists of the elements in A or B (or both): hence A U B = {1,2,3,4,6,8).
        (v)   B \ C consists of the elements in B which are not in C; hence B \ C = {2,8).


1.12.   Let U = { a , b , c , d , e } , A = { a , b , d } and B = { b , d , e } . Find:
        (i) A U B         (iii) Bc             (v) A c n B         (vii) A c n B c        (ix) (AnB)c
        (ii) B n A        (iv) B\A             (vi) AUBc           (viii) BC\Ac           (x) (AM?)"
        (i)   The union of A and B consists of the elements in A or in B (or both); hence A UB = {a,b, d, 6).
        (ii) The intersection of A and B consists of those elements which belong to both A and B; hence
             AnB = {b,d}.
        (iii) The complement of B consists of the letters in U but not in B; hence Bc = (a,c).
        (iv) The difference B\A         consists of the elements of B which do not belong to A ; hence
             B\A   = (e).
        (v) Ac = {a, e) and B = {b, d, e); then A c n B = {e).
        (vi) A = {a,b, d } and Bc = (a,c}; then A uBc = (a,b, c, d).
        (vii) and (viii). Ac = {c, e) and Bc = {U,c); then
                                         A c n B c = {c}   and           Bc\Ac    = {U)
        (ix) From (ii), A nB = { b , d); hence (A nB)c = (a,c, e).
        (x) From (i), A u B = {a, b, d, e); hence (A uB)c = {c).
8                                              SET THEORY                                          [CHAP. 1


1.13.   In the Venn diagram below, shade: (i) Bc, (ii) (A uB)c,(iii) (B\A)c,              (iv) A c n B c .




            Bc consists of the elements which do not belong to B; hence shade the area outside B as follows:




                                                     Bc is shaded.

             First shade A U B ; then (A uB)c is the area outside A UB:




                            A U B is shaded.                               (A uB)c is shaded.

            First shade B\A,     the area in B which does not lie in A; then (B\A)c     is the area outside
            B\A:




                            B \ A is shaded.                              ( B \ A)c is shaded.

            First shade Ac, the area outside of A, with strokes slanting upward to the right (////), and
            then shade Bc with strokes slanting downward to the right (\\\\);      then AcnBc is the
            cross-hatched area:




                         Ac and Bc are shaded.                             Acn Bc is shaded.

        Observe that (A u B ) =
                              ~ ACnBc, as expected by De Morgan's law.
CHAP. 11                                      SET THEORY                                               9

1.14. Prove: B\A     = BnAc. Thus the set operation of difference can be written in
      terms of the operations of intersection and complementation.
                      B\A     = {z: x E B , z 4 A } = { z : x E R , z E A c } = B n A c

1.15. Prove: For any sets A and B, A n B c A c A U B .
          Let 2: E A n B ; then z E A and 1~ E B. In particular, z E A. Since x E A nB implies 5 € A ,
      A nB c A . Furthermore if x E A , then z E A or z E Byi.e. x E A UB. Hence A c A UB. In other
      words, A n B c A c A u B .

1.16. Prove Theorem 1.3(i): A c B if and only if A nB = A .
           Suppose A c B . Let z E A ; then by hypothesis, z E B. Hence 1~ E A and x E B, i.e. 1~ E A nB.
      Accordingly, A c A nB. On the other hand, it is always true (Problem 1.15) that A n B c A .
      Thus A n B = A .
          Now suppose that A n B = A . Then in particular, A c A n B . But it is always true that
      A n B c B. Thus A c A n B c B and so, by Theorem 1.1, A c B.


PRODUCT SETS
1.17. Let M = {Tom, Marc, Erik} and W = {Audrey, Betty}. Find M X W.
            M X W consists of all ordered pairs (a,b) where a E M and b E W. Hence
                           M X W = ((Tom, Audrey), (Tom, Betty), (Marc, Audrey),
                                           (Marc, Betty), (Erik, Audrey), (Erik, Betty)}

1.18. Let A = {1,2,3}, B = {2,4} and C = {3,4,5}. Find A x B X C .
         A convenient method of finding A X B X C is through the so-called “tree diagram” shown below:




      The “tree” is constructed from the left to the right. A X B X C consists of the ordered triples
      listed to the right of the “tree”.

1.19. Let A = { a , b } , B = {2,3} and C = {3,4}. Find:
      (i) A x (BuC), (ii) (A x B) U ( A x C), (iii) A x (BnC), (iv) ( Ax B) n (A x C).
      (i)   First compute BUC = {2,3,4}.      Then
                                 A x (BUC) = {(a,21, (a,3), (a,41, ( b , 21, (b,3)s (b,4))
10                                                 SET THEORY                                               [CHAP.1




             Then compute the union of the two sets:
                               ( A x B ) U ( A x C) = {(a,2), (a,3), ( 6 , 2), ( b , 3), (a,4), ( b , 4))
             Observe from (i) and (ii) that          .
                                               Ax(BuC) = ( A x B ) u ( A X C )




        (iv) Now A X B and A x C were computed above. The intersection of A X B and A X C consists of
             those ordered pairs which belong to both sets:
                                          ( A x B ) n ( A x C) = {(a,3), (6,311
             Observe from (iii) and (iv) that
                                           A x (BnC) = ( A x B ) n ( A x C)


1.20. Prove: A x (BnC) = ( A x 23) n (A x C).
                               -4 x (BnC) =      {(x,y) : x € A , y E B n C }
                                               = {(x,y) : x E A , y E B, y E C}
                                               = {(x,2/): (%?h E A x B , (%   E!AIx)c>
                                               = ( A x B ) n ( A x C)


1.21. Let S = { a , b } , W = {1,2,3,4,5,6} and V = {3,5,7,9}. Find (SX W) n (SX V ) .
            The product set (SX W) n (S X V) can be found by first computing S X W and S X V, and
        then computing the intersection of these sets. On the other hand, by the preceding problem,
        (Sx W) n (S X V ) = S x ( W n V). Now W n V = {3,5}, and so
                           ( S x W ) n ( S x V ) = S x ( W n v ) = {(a,3), (a,5 ) , ( b , 3), ( b , 5 ) )


1.22. Prove: Let A cB and CCD ; then ( A x C) c ( B x D).
             Let (x,y) be any arbitrary element in A X C ; then x: E A and y E C. By hypothesis, A C B and
        C c D ; hence x E B and y E D . Accordingly (x,y) belongs to B X D . We have shown that
        (2,y) E A X C implies (2,y) E B X D ; hence ( A X C) c ( B X D ) .




CLASSES OF SETS
1.23. Consider the class A = {{2,3}, ( 4 3 1 , (6)). Which statements are incorrect and
      why? (i) {4,5}C A , (ii) {4,5} E A , (iii) { {4,5}}cA.
            The members of A are the sets {2,3}, (4,6) and (6). Therefore (ii) is correct but (i) is a n
        incorrect statement. Moreover, (iii) is also a correct statement since the set consisting of the single
        element {4,5} is a subclass of A .


1.24.   Find the power set T(S) of the set S = { 1,2,3}.
             The power set T(S) of S is the class of all subsets of S; these are {1,2,3}, {1,2}, {1,3), {2,3},
        {l}, {2}, (3) and the empty set @. Hence
                                    T(S) = {S, {1,3), {2,3}, {1,2), {I}, (21, (311 @I
            Note that there are 23 = 8 subsets of S.
CHAP. 13                                        SET THEORY                                                  11

1.25.   Let X = (a, b, c, d, e, f , g } , and let:
        (i) A I = { a , c , e } , A2 = { b } , A3 = { d , g } ;
        (ii) B1 = { a , e , g } , BZ= { c , d } , B3 = { b , e , f } ;
        (iii) CI = { a , b , e , g } , C Z = { c } , C3 = { d , f } ;
        (iv) D1 = {a, b, c , d , e, f , s > .
        Which of (AI,A2, A3}, {BI,Bz, B3}, {CI,CZ,C3}, (01)are partitions of X ?
        (i) {Al,A2,A3} is not a partition of X since f E X but f does not belong to either A,, AS, or A,.
        (ii) { B l , B,, B3) is not a partition of X since e E X belongs t o both Bl and B3.
        (iii) {C1,C2,C3} is a partition of X since each element in X belongs to exactly one cell, i.e.
              X = ClUC2UC3 and the sets are pairwise disjoint.
        (iv) {Ill} is a partition of X.




1.27.   Let N be the set of positive integers and, for each n E N, let
                      A, = {x : x is a multiple of n} == {n,2n,3n, . . .}
        Find (i) A3nA5, (ii) A 4 n A s , (iii) U ~ E Ai,
                                                     P where! P is the set of prime numbers,
        2,3,5,7,11,... .
        (i) Those numbers which are multiples of both 3 and 6 are the multiples of 15; hence A , n A 5 = A15.
        (ii) The multiples of 12 and no other numbers belong to both A4 and A,; hence A 4 n A , = A12.
        (iii) Every positive integer except 1 is a multiple of at least one prime number; hence



1.28. Prove: Let {Ai : i E I } be an indexed class of sets and let io E I . Then
                                      niErAi c Ai, c UiEi Ai
              Let x E n i E I Ai; then x E Ai for every i E I. In particular, x E Aio. Hence   niEI Ai   c Aio.
              Now let y E Ai,. Since io E I, y E U j E I Ai. Hence Aio c u ~ E A
                                                                               I i.




1.29. Prove (De Morgan's law): For any indexed class (Ai : i E I } , ( U iAi)' = ni A:.
       (uiA,)c =: {x : z B u i A i ) = {x : x @ A i for every i} = (x : x € A t for every i} = n i A t

1.30.   Let CA be an algebra (a-algebra) of subsets of U . Show that: (i) U and 9 belong to
        CA; and (ii) d is closed under finite (countable) intersections.
             Recall that CA is closed under complements and finite (countable) unions.
        (i)  Since CA is nonempty, there is a set A E CA. Hence the complement Ac E CA, and the union
              U =A u A E  ~ CA. Also the complement (3 = Uc E CA..
        (ii) Let {Ai} be a finite (countable) class of sets belonging to CA. By De Morgan's law (Problem 1.29),
             (uiA;)c = n i A T = n,A,. Hence n i A i belongs to CA, as required.
12                                                  SET THEORY                                                  [CHAP.1


                                     Supplementary Problems
SETS, ELEMENTS, SUBSETS
1.31. Write in set notation:
      (a) R is a subset of T.              (d) M is not a subset of S .
      (b) x is a member of Y.              (e) z does not belong t o A.
      (c) The empty set.                   ( f ) R belongs to CA.

1.32.   Rewrite explicitly giving the elements in each set:
        (i) A = { x : x 2 - x - 2 = 0 }
        (ii) B = {x : x is a letter in the word “follow”}
        (iii) C = {z : x2 = 9, x - 3 = 5 )
        (iv) D = {x : x is a vowel}
        (v) E = {x : z is a digit in the number 2324)

1.33.   Let A = (1,2 ,...,8,9}, B = {2,4,6,8}, C = (1,3,6,7,9), D = {3,4,5} and E = {3,6}.
        Which sets can equal X if we are given the following information?
        (i) X and B are disjoint. (ii) X C D but X $ B . (iii) X C A but X e C . (iv) X C C but X $ A .




1.35.   Let A = {l,O}. State whether or not each statement is correct:
        (i) (0) E A, (ii) @ E A , (iii) (0) C A , (iv) 0 E A, (v) 0 c A.

1.36.   State whether each set is finite or infinite:
        (i) The set of lines parallel to the x axis.
        (ii) The set of letters in the English alphabet.
        (iii) The set of numbers which are multiples of 6.
        (iv) The set of animals living on the earth.
        (v) The set of numbers which are solutions of the equation          $27   + 26x18 - 17x11 -t7~ - 10 = 0.
        (vi) The set of circles through the origin (0,O).

SET OPERATIONS
1.37. Let U = {a,b, c, d , e, f , g } , A = {a,b, c, d, e>, B = {a,c, e, g } and C = { b , e, f , g } . Find:
                  (i) A U C                (iii) C\B           (v) C c n A          (vii) (A \ B c ) c
                  (ii) B n A               (iv) Bc U C         (vi) ( A\Clc         (viii) ( AnAc)c

1.38.   I n the Venn diagrams below, shade        (i) W \ V, (ii) V c U W , (iii) V n Wc, (iv) V c\ Wc.




1.39.   Prove: (a) A U B = (Ac n BC)c; ( b ) A \ B = A n Bc. (Thus the union and difference operations can
        be defined in terms of the operations of intersection and complement.)

1.40.   Prove Theorem 1.3(ii): A c B if and only if A U B = B.

1.41.   Prove: If A nB = @, then A c Bc.

1.42.   Prove: Ac\Bc      = B\A.
CHAP. 11                                                   SET THEORY                                                  13

1.43.   Prove: A c B implies A U (B \A)                = B.

1.44.   (i)    Prove: A n (B \ C ) = ( AnB) \ ( An C ) .
        (ii) Give an example to show that A U (B \ C ) # ( AU B ) \ ( AU C).


PRODUCT SETS
1.45. Let W = {Mark, Eric, Paul} and let V = {Eric, David}. Find:
        (i) W x V, (ii) V x W , (iii) V2 = V X V .

1.46.   Let A = { 2 , 3 } , B = { 1 , 3 , 5 } and C = { 3 , 4 } . Construct the “tree diagram” of A X B X C and then
        find A X B X C. (See Problem 1.18.)

1.47.   Let S = { a , b, c}, T = {b, c, d} and             W = {a, d}. Construct the tree diagram of S X T X W and
        then find S X T X W .

1.48.   Suppose that the sets V, W and 2 have 3, 4 and 6 elements respectively. Determine the number
        of elements in (i) V X W X 2, (ii) 2 X V X W , (iii) W X 2 X: V .

1.49.   Let A = B n C. Determine if either statement is true:
        (i) A X A = ( B X B ) n (CX C), (ii) A X A = ( B X C ) n (C X B ) .

1.50.   Prove: A X ( B u C ) = ( A X B ) U ( A X C).


CLASSES OF SETS
1.51. Let A,, = {z : z is a multiple of n } = {n, 2n, 3n, . . .}, where n E N, the positive integers. Find:
               A,; (ii) A , n A,; (iii) A3 U A12; (iv) A , n AI,; (v) A , U Ast, where 8, t E N; (vi) A , n ASt,
      (i) A , f~
      where s, t E N. (vii) Prove: If J c N is infinite, then ni,: J A , = @.

1.52.   Find the power set %?(A) of A = ( 1 , 2 , 3 , 4 } and the power set T(B) of              = (1, {2,3}, 4).

1.53.




1.54.   Find all partitions of         V = {1,2,3}.

1.55.   Let [ A l , A 2 ,. . . , A m ] and [B,,B,,   . . .,E?,,]be partitions of a set X. Show that the collection of sets
                                           [A,nBj : i = 1 , . .. , m , j = I., . . .,n]
        is also a partition (called the cross partition) of X.

1.56.   Prove: For any indexed class { A i :i E I } and any set B,
        (a) B u ( n i A i ) = n i ( B u A i ) , ( b ) B n ( u , A , ) = u i ( B n A i ) .

1.57.   Prove (De Morgan’s law): ( n i A i ) c = U , A ; .

1.58.   Show that each of the following is an algebra of subsets of U:
        (i) CA = {@, U}; (ii) 93 = (@,A,AC,U}; (iii) T ( U ) , the power set of U.

1.59.   Let CA and 53 be algebras (a-algebras) of subsets of U. Prove that the intersection CAng is also
        an algebra (a-algebra) of subsets of U.
14                                                     SET THEORY                                               [CHAP. 1


                             Answers to Supplementary Problems
1.31.   (a)R c T, ( b ) x E Y, ( c ) e), (d) M Q!S, (e) z 4 A , ( f ) R E CA.

1.32.   (i) A = {--1,2},       (ii) B = { f ,0, L W } , (iii) C = e), (iv) D = {a,e, i,o,u}, (v) E = {2,3,4}.

1.33.   (i) C and E, (ii) D and E, (iii) A, B and D , (iv) none.

1.34.   All the statements are true except (v).

1.35.   (i) incorrect, (ii) incorrect, (iii) correct, (iv) correct, (v) incorrect.

1.36.   (i) infinite, (ii) finite, (iii) infinite, (iv) finite, (v) finite, (vi) infinite.

1.37.   (i) A UC = U
        (ii) B n A = {a,c, e}
        (iii) C \ B = { b ,f }
        (iv) B c u C = { b , d , e , f , g }

1.38.   (a)




                                                    vcu w                         V n Wc




                        w\v             vcu w                      V n Wc                                 vc\   wc
        Observe that VcU W = U and V n W c= e) in case ( 6 ) where VC W.

1.45.   (i)   W X V = {(Mark, Eric), (Mark, David), (Eric, Eric), (Eric, David), (Paul, Eric), (Paul, David)}
        (ii) V X W = ((Eric, Mark), (David, Mark), (Eric, Eric), (David, Eric), (Eric, Paul), (David, Paul)}
        (iii) V X V = {(Eric, Eric), (Eric, David), (David, Eric), (David, David)}

1.46.




                                                           t
                                               2<      3
                                                           4
        The elements of A X B X C are the ordered triplets to the right of the tree diagram above.
CHAP. 11                                        SET THEORY                                            16

1.47.




        The elements of S X T X W are the ordered triplets listed to the right of the tree diagram.

1.48.   Each has 60 elements.

1.49.   Both are true: A X A = ( B X B ) n (CX C) = ( B x C) n (CX B).

1.51.


1.52.

1.53.   (i) no, (ii) no, (iii) yes, (iv) yes.
                                                                           Chapter 2

                              Techniques of Counting
INTRODUCTION
    In this chapter we develop some techniques for determining without direct enumeration
the number of possible outcomes of a particular experiment or the number of elements in
a particular set. Such techniques are sometimes referred to as combinatorial analysis.

FUNDAMENTAL PRINCIPLE OF COUNTING
  We begin with the following basic principle.
Fundamental Principle of Counting: If some procedure can be performed in nl dif-
           ferent ways, and if, following this procedure, a second procedure can be
           performed in n 2 different ways, and if, following this second procedure, a
           third procedure can be performed in n3 different ways, and so forth; then the
           number of ways the procedures can be performed in the order indicated is the
           product n~ n2 n 3 . . . .
       Example 2.1:   Suppose a license plate contains two distinct letters followed by three digits with
                      the first digit not zero. How many different license plates can be printed?
                           The first letter can be printed in 26 different ways, the second letter in 25 dif-
                      ferent ways (since the letter printed first cannot be chosen for the second letter),
                      the first digit in 9 ways and each of the other two digits in 10 ways. Hence
                                                  26 25 9 10 10 = 585,000
                      different plates can be printed.


FACTORIAL NOTATION
   The product of the positive integers from 1 to n. inclusive occurs very often in mathe-
matics and hence is denoted by the special symbol n ! (read “n factorial”):
                             ~ 2 != 1 0 2 . 3 . - - * ( n - 2 ) ( n - l ) n

It is also convenient to define O ! = 1.
       Example 2.2:              2 ! = 1 . 2 = 2, 3 ! = 1 . 2 0 3 = 6, 4 ! = 1 . 2 . 3 . 4 = 24,
                                   5! = 5 * 4 ! = 5 . 2 4 = 120, 6 ! = 6 * 5 ! = 6 . 1 2 0 = 720
                           8! -          -                                      12-11*10*9! -
       Example 2.3:        -  - -
                                8 ~ 7 * 6-
                                         ! 8 . 7 = 56            12*11*10 =                 -
                            6!         6!                                           9!        9!


PERMUTATIONS
   An arrangement of a set of n objects in a given order is called a permutation of the
objects (taken all a t a time). An arrangement of any r L n of these objects in a given
order is called an r-permutation or a permutation o f the n objects taken r at a time.
       Example 2.4:   Consider the set of letters a , b, c and d . Then:
                      (i) bdca, d c b a and acdb are permutations of the 4 letters (taken all at a time);
                      (ii) bad, a d b , cbd and bca are permutations of the 4 letters taken 3 at a time;
                      (iii) a d , cb, d a and bd are permutations of the 4 letters taken 2 at a time.


                                                   16
CHAP. 21                                TECHNIQUES OF COUNTING                                                  17

   The number of permutations of n objects taken r a t a time will be denoted by
                                                      P(n, r )
Before we derive the general formula f o r P(n,r ) we consider a special case.
         Example 25:      Find the number of permutations of 6 objects, say a,b, c, d, e,f, taken three a t a
                          time. In other words, find the number of “three letter words” with distinct letters
                          that can be formed from the above six letterls.
                                 Let the general three letter word be represented by three boxes:




                          Now the first letter can be chosen in 6 different ways; following this, the second
                          letter can be chosen in 5 different ways; and, following this, the last letter can be
                          chosen in 4 different ways. Write each number in its appropriate box a s follows:




                          Thus by the fundamental principle of counting there are 6 5 4 = 120 possible
                          three letter words without repetitions from the six letters, or there are 120 permu-
                          tations of 6 objects taken 3 a t a time. That is,
                                                                 P ( 6 , 3 ) = 120

    The derivation of the formula for P(n,r ) follows the procedure in the preceding example.
The first element in an r-permutation of n-objects can be chosen in n different ways; follow-
ing this, the second element in the permutation can be chosen in n - 1 ways; and, following
this, the third element in the permutation can be chosen in n - 2 ways. Continuing in this
manner, we have that the rth (last) element in the r-permutation can be chosen in n - (r - 1)=
     +
n - Y 1ways. Thus

Theorem 2.1:       P(n,r ) = n(n - l)(n- 2 ) . (n - r  -         + 1) = -(-nn- rf ) !
   The second part of the formula follows from the fact that

    n(n - l ) ( n- 2 )   - (n- Y + 1) = n(n- I)@-2 )(. n--(rn)-!-r + 1) (n - r ) ! --                 n!
                                                                                                    (n- r ) !
In the special case that r = n, we have
                                 P(n,n) = n ( n - l ) ( n - 2 ) - 3 * 2 * 1     = n!
Namely,
Corollary 2.2:       There are n ! permutations of n objects (taken all a t a time).
         Example 2.6:     How many permutations a r e there of 3 objects, say, a, b and c?
                              By the above corollary there are 3! = 1 2 3 = 6 such permutations.           These
                          are abc, acb, bac, bca, cab, cba.


PERMUTATIONS WITH REPETITIONS
    Frequently we want to know the number of permutations of objects some of which are
alike, as illustrated below. The general formula follows.

Theorem 2.3:       The number of permutations of n objects of which nl are alike, n2 are
                             .
                   alike, . .,n+ are alike is
                                                                    n!
18                                 TECHNIQUES O F COUNTING                                      [CHAP. 2


     We indicate the proof of the above theorem by a particular example. Suppose we want
t o form all possible 5 letter words using the letters from the word DADDY. Now there
are 5 ! = 120 permutations of the objects D I ,A , D2, D3, Y where the three D’s are dis-
tinguished. Observe that the following six permutations


produce the same word when the subscripts are removed. The 6 comes from the fact that
there are 3 ! = 3-20 1 = 6 different ways of placing the three D’s in the first three posi-
tions in the permutation. This is true for each of the other possible positions in which the
D’s appear. Accordingly there are
                                       5 ! - 120
                                       _
                                       3! - 6
                                             - = 20
different 5 letter words that can be formed using the letters from the word DADDY.

       Example 2.7:   How many different signals, each consisting of 8 flags hung in a vertical line,
                      can be formed from a set of 4 indistinguishable red flags, 3 indistinguishable white
                      flags, and a blue flag? We seek the number of permutations of 8 objects of which
                      4 are alike (the red flags) and 3 are alike (the white flags). By the above theorem,
                      there are


                      different signals.




ORDERED SAMPLES
    Many problems in combinatorial analysis and, in particular, probability are concerned
with choosing a ball from an urn containing n balls (or a card from a deck, or a person
from a population). When we choose one ball after another from the urn, say r times, we
call the choice an ordered sample of size r . We consider two cases:

(i) SampZing with replacement. Here the ball is replaced in the urn before the next ball
    is chosen. Now since there are n different ways to choose each ball, there are by the
    fundamental principle of counting
                                               r times
                                           &
                                           n * n - n - . . n = nr
     different ordered samples with replacement of size r .

(ii) Sampling without replacement. Here the ball is not replaced in the urn before the next
     ball is chosen. Thus there are no repetitions in the ordered sample. In other words,
     an ordered sample of size r without replacement is simply an r-permutation of the
     objects in the urn. Thus there are
                                                      - -
                         P(n,r ) = n(n - l ) ( n- 2) . ( n - r      + 1) = - n!
                                                                           (n-r)!
     different ordered samples of size r without replacement from a population of n objects.

       Example 2.8:   In how many ways can one choose three cards in succession from a deck of 52 cards
                      (i) with replacement, (ii) without replacement? If each card is replaced in the
                      deck before the next card is chosen, then each card can be chosen in 52 different
                      ways. Hence there are
                                                52052.52 = 523 = 140,608
                      different ordered samples of size 3 with replacement.
CHAP. 21                                  TECHNIQUES OF COUNTING                                                     19

                              On the other hand if there is no replacement, then the first card can be chosen
                          in 52 different ways, the second card in 51 different ways, and the third and last
                          card in 60 different ways. Thus there are
                                                         5 2 * 5 1 * 5 0 = 132,600
                          different ordered samples of size 3 without replacement.


BINOMIAL COEFFICIENTS AND THEOREM

    The symbol
as follows:
                   ()\': , read "nCr", where r and n are positive integers with r                   6 n,   is defined
                                          n(n - l ) ( n- 2 ) . . .(n- r + 1 )
                                   ():         =     1 2 3 . * ( r- l ) r
These numbers are called the binomial coefficientsin view of Theorem 2.5 below.




    Observe that     (:> has exactly r factors in both the numerator and denominator. Also,
                                                - n(n - 1 ) (n - r + l ) ( n- r ) !
    ();       =
                   n(n- 1 ) . * . ( n - r + 1 ) -
                     1 * 2 * 3 - . ( r - 1)r        1 * 2 * 3 -* ( r - l ) r ( n - r ) !
                                                                                             -
                                                                                             -           n!
                                                                                                    r ! (n - r ) !
Using this formula and the fact that n - ( n - r ) = r , we obtain the following important
relation.

Lemma 2.4:        (. E .) = (y) or, in other words, if a + b := n then (): = (:)*
          ExampIe 2.10:  (y)             10*9*8*7*6*5.4
                                   = 1*2*3*4*5*6*7
                                                          ~   120
                                                                 (tp> = (;") = 1.2.3
                                                                     or                              10.9.8
                                                                                                                = 120
                          Note that the second method saves both space and time.


Remark: Motivated by the second formula for
                                         n
                                         - f
                                                              (3
                                                              . .
                                           = 1 and, in particular,
                                                                    and the fact that O ! = 1, we define:
                                                                                            O!
                                                                                           O !O !
    The Binomial Theorem, which is proved (Problem 2.18) by mathematical induction, gives
the general expression for the expansion of (a b)".       +
Theorem 2.5 (Binomial Theorem) :




          Example 2.11:      (a   + b)5 = a5 + 6a4b + 02 a3b2 + FAa2b3
                                                                 1-2     + 5ab4 + b5
                                        = a5 + 5a4b + lOa3b2 + lOa2b3 + Sub4 + b5

                             ( a + b)6    =    + 6a5b + g a 4 b 2 + -
                                               a6                    '
                                                                    1.2.3
                                                                          a3b3 + E a 2 b 4 + 6ab5 + be

                                          = a6 -I- 6a5b + 15aW + 2OaSb3 + 15a2b4 + 6ab5 + be
20                                                 TECHNIQUES O F COUNTING                                                            [CHAP. 2


     The following properties of the expansion of (a b)" should be observed:+
(i) There are n      + 1 terms.
(ii) The sum of the exponents of a and b in each term is n.
(iii) The exponents of a decrease term by term from n to 0; the exponents of b increase
      term by term from 0 to n.
(iv) The coefficient of any term is                             where 7c is the exponent of either a or b. (This fol-
     lows from Lemma 2.4.)
(v) The coefficients of terms equidistant from the ends are equal.
    We remark that the coefficients of the successive powers of a                                 + b can be arranged in a
triangular array of numbers, called Pascal's triangle, as follows:
                                  ( a + b)O =              1                                                              1
                            (a   + b)l =           a       +    b                                                     1       1
                   (a   +   b)2   =       + 2ab + b2
                                          a2                                                                      1       2       1
                ( a + b)3 =       a3+ 3a2b + 3 a b 2 + b3                                                     1       3       3       1
          ( a + b)4 =       a4  + 4 a 3 b + 6aW + 4 a b 3 + b4                                            1
    ( a + b)5 =    a5     + 5 a 4 b + lOa3b2 + lOa2b3 + 5 a b 4 + b5
(a+  b)6 =    a6      + 6 a 5 b + 15a4b2 + 20aW + 16a2b4 + 6 a b 5 + b6
........................          ........................................                        ............................
     Pascal's triangle has the following interesting properties.
(a) The first number and the last number in each row is 1.
( b ) Every other number in the array can be obtained by adding the two numbers appearing
      directly above it. For example: 10 = 4 6, 15 = 5 10, 20 = 10 10.+                +                      +
    We note that property ( b ) above is equivalent to the following theorem about binomial
coefficients.

Theorem 2.6:       ("Y) (A) (:)       =                        +

     Now let nl, n2, . . ., n, be nonnegative integers such that nl                              + n2 +           + n, = n. Then
the expression              n
                     nl, n2, . . ., n,
                                               )
                                       is defined as follows:

                                                           n                   n!
                                               nl, n2,     . . .,nr        nl!n2!  -       n,!
F o r example,
               7                                       =       210          8                   8!
                                       7!                                                             =                   420
           (2,3,2)          =     2!3!2!                               (4,2,2,0)       =     4!2!2!0!
These numbers are called the multinomial coefficients in view of the following theorem
which generalizes the binomial theorem.

Theorem 2.7: (al        + + - - + a,)"
                            a2                             =                                 n            ayla?. . . a,".
CHAP. 21                             TECHNIQUES O F COUNTING                                                                 21

COMBINATIONS
    Suppose we have a collection of n objects. A combination of these n objects taken r at
a time, or an r-combination, is any subset of r elements. In other words, an r-combination
is any selection of r of the n objects where order does not count.

       Example 2.12:   The combinations of the letters a,b , c , d taken 3 a t a time are
                                {a, b, c } , {a, b , d } , . [ a , c , d } , { b , c, d }   or simply   abc, abd, acd, bcd
                       Observe that the following combinations are equal:
                                                                 abc, acb, bac, bca, cab, cba
                       That is, each denotes the same set {a,b, c } .

    The number of combinations of n objects taken r a t a time will be denoted by
                                                            C(n, r )
Before we give the general formula for C(n,r ) , we consider a special case.




                                          Combinations                                        Permutations

                                                   abc                                abc, acb, bac, bca, cab, cba

                                                   abd                               abd, adb, bad, bda, dab, dba

                                                   acd                                acd, adc, cad, cda, dac, dca

                                                   bcd                                bcd, bdc, cbd, cdb, dbc, dcb

                       Thus the number of combinations multiplied by 3! equals the number of permu-
                       tations:
                                       C ( 4 , 3 ) * 3 ! = P(4,3) or          -
                                                                     C(4,3) = P(4,3)
                                                                                                             3!
                       Now P(4,3) = 4 3 2 = 24 and 3! = 6; hence C(4,3) = 4 a s noted above.


    Since each combination of n objects taken r a t a time determines r ! permutations of the
objects, we can conclude that
                                    P(n, r ) = r ! C(n, r )
Thus we obtain
                           P(n,r) -                  n!
Theorem 2.8:    C(n, r ) = --
                                r!               r !(n-r)!

   Recall that the binomial coefficient                                                 ! r ) ! , hence
                                                               was defined to be r ! (nn-




We shall use C(n, r ) and
                            (? interchangeably.
22                                  TECHNIQUES O F COUNTING                                  [CHAP. 2


        Example 2.14:   How many committees of 3 can be formed from 8 people? Each committee is
                        essentially a combination of the 8 people taken 3 at a time. Thus



                        different committees can be formed.



ORDERED PARTITIONS
    Suppose an urn A contains seven marbles numbered 1 through 7. We compute the num-
ber of ways we can draw, first, 2 marbles from the urn, then 3 marbles from the urn, and
lastly 2 marbles from the urn. In other words, we want to compute the number of ordered
partitions
                                              (AI,
                                                 A2,A3)
of the set of 7 marbles into cells A1 containing 2 marbles, AP containing 3 marbles and As
containing 2 marbles. We call these ordered partitions since we distinguish between


each of which yields the same partition of A.
     Since we begin with 7 marbles in the urn, there are
                                                                    (3   ways of drawing the first 2
marbles, i.e. of determining the first cell AI;following this, there are 5 marbles left in the
urn and so there are
                         (3   ways of drawing the 3 marbles, i.e. of determining A2; finally,
there are 2 marbles left in the urn and so there are                ways of determining the last cell
As. Thus there are
                           7 5 2           7.6 5.4-3 2.1           210
                        (2)(3)(2)     = ~                     '=               ~                          '

different ordered partitions of A into cells A1 containing 2 marbles, A2 containing 3 marbles,
and AS containing 2 marbles.
     Now observe that
                                              7!     5!        2!            7!

since each numerator after the first is cancelled by the second term in the denominator of
the previous factor. In a similar manner we prove (Problem 2.28)

Theorem 2.9:     Let A contain n elements and let nl,n2,. . .,n,be positive integers with
                 nl + n2 + - + n, = n. Then there exist
                                                              n!
                                                n1!n2!ns! n,!
                  different ordered partitions of A of the form (AI,A2, . . .,A,) where AI con-
                  tains nl elements, A2 contains n2 elements, . . ., and A, contains n, elements.

        Example 2.15 : I n how many ways can 9 toys be divided between 4 children if the youngest child
                       is to receive 3 toys and each of the other children 2 toys?
                            We wish to find the number of ordered partitions of the 9 toys into 4 cells
                        containing 3,2, 2 and 2 toys respectively. By the above theorem, there are
                                                          9!
                                                       3!2!2!2!     = 7560
                        such ordered partitions.
CHAP. 21                           TECHNIQUES O F COUNTING                                             23

TREE DIAGRAMS
    A tree diagram is a device used to enumerate all the passible outcomes of a sequence of
experiments where each experiment can occur in a finite number of ways. The construction
of tree diagrams is illustrated in the following examples.

       Example 2.16:   Find the product set A X B X C where A =I {1,2}, B = {a,b, c } and C = {3,4}.
                           The tree diagram follows:




                           Observe that the tree is constructed from left to right, and that the number of
                       branches a t each point corresponds to the number of possible outcomes of the next
                       experiment.

       Example 2.17:   Mark and Eric are to play a tennis tournament. The first person to win two games
                       in a row or who wins a total of three games wins the tournament. The following
                       diagram shows the possible outcomes of the tournament.




                          Observe that there are 10 endpoints which correspond to the 10 possible out-
                       comes of the tournament:
                        MM, MEMM, MEMEM, MEMEE, MEE, EMM, EMEMM, EMEME, EMEE, E E
                       The path from the beginning of the tree to the endpoint indicates who won which
                       game in the individual tournament.
24                                           TECHNIQUES O F COUNTING                                            [CHAP. 2



                                                 Solved Problems
FACTORIAL
2.1. Compute 4!, 5!, 6!, 7! and 8!.
       4! = 1 . 2 0 3 0 4 = 24                                                7! = 7 * 6 ! = 7.720 = 5040
       5! = 1 . 2 . 3 . 4 . 5       = 5 * 4 ! = 5 - 2 4 = 120                 8! = 8 - 7 ! = 8.5040 = 40,320
       6! = 1 . 2 0 3 . 4 . 5 . 6     = 6 * 5 ! = 6.120 = 720

                               7!
2.2.
                     13 I
       Compute: (i) -L
                     ll!’
                          (ii)            m.
          13! -
              - 1 3 ~ 12~11*10*9*8*7°6~5*4*-
                                           3-- 213.12
                                                 *1   = 156
       (i)    ig       11~10.9.8*7~6.5*4-3*2*1
                13!
            or - -  - 13*12*11! -      - 13.12 = 156
                11!            11 !
            7’
       (ii) A -
                        7!          - - -1     -1
            10! - 1 0 * 9 - 8 . 7 !   1009.8 - 720



2.3.   Simplify: (i)
                                   n!              + .
                                                (n 2) !
                                           (ii) I
                                (n - 1) !’        n.

                      - n(n - l ) ( n - 2). - - 3 2 1 = n
              - n!    -                                                                n!
                                                                                       -- - -
                                                                                            n(n-l)! -
                         (n - l ) ( n - 2). - * 3 2 1
       (i)                                                            or, simply,                   - n
              (n- l)!                                                                  (n- l)!       (n- l)!

                                                                     - ( n + 2 ) ( n + 1) = n2 + 3n + 2
              (n+2)! - (n+2)(n+ l)n(n- l ) ( n - 2 ) - - . 3 * 2 * 1 -
       (ii)   - n!
                     -      n(n - l ) ( n - 2). - - 3 2 1

              or, simply,         --        -   ( n + N n + l ) * n ! = ( n + 2 ) ( n + 1 ) = n2 + 3 n + 2
                                   n!                   n!



PERMUTATIONS, ORDERED SAMPLES
2.4. If repetitions are not permitted, (i) how many 3 digit numbers can be formed from
     the six digits 2, 3, 5, 6, 7 and 9 ? (ii) How many of these are less than 400? (iii) How
     many are even? (iv) How many are odd? (v) How many are multiples of 5 ?
           In each case draw three boxes              -[I   nrl
                                                             to represent an arbitrary number, and then
       write in each box the number of digits that can be placed there.

              The box on the left can be filled in 6 ways; following this, the middle box can be filled in
              5 ways; and, lastly, the box on the right can be filled in 4 ways:
              are 6 - 5 . 4 = 120 numbers.
                                                                                            1
                                                                                            6
                                                                                            1            Fl.   Thus there


              The box on the left can be filled in only 2 ways, by 2 or 3, since each number must be less
              than 400; the middle box can be filled in 5 ways; and, lastly, the box on the right can be filled
              in 4 ways:                   PI.     Thus there are 2 5 4 = 40 numbers.

              The box on the right can be filled in only 2 ways, by 2 or 6, since the numbers must be even;
              the box on the left can then be filled in 6 ways; and, lastly, the middle box can be filled in
              4 ways:   rl              PI.      Thus there are 5 4 2 = 40 numbers.

              The box on the right can be filled in only 4 ways, by 3, 5, 7 or 9, since the numbers must be

              be filled in 4 ways:      rl Fl.
              odd; the box on the left can then be filled in 5 ways; and, lastly, the box in the middle can
                                                              Thus there are 6 4 4 = 80 numbers.
CHAP. 21                              TECHNIQUES O F COUNTING                                           25

       (v) The box on the right can be filled in only 1 way, by 5, since the numbers must be multiples
           of 5; the box on the left can then be filled in 5 ways; a.nd, lastly, the box in the middle can
             be filled in 4 ways:   1
                                    7
                                    1 rl.             Thus there are 5 4 1 = 20 numbers.



2.5.   In how many ways can a party of 7 persons arrange themselves (i) in a row of
       7 chairs? (ii) around a circular table?
       (i)   The seven persons can arrange themselves in a row in 7 6 5 4 3 2 1 = 7! ways.
       (ii) One person can sit a t any place in the circular table. The other six persons can then arrange
            themselves in 6 5 4 3 2 1 = 6! ways around the table.
                  This is an example of a circular permutation. In general, n objects can be arranged in
             a circle in (n - l)(n - 2) * 3 2 1 = (n - l)! ways.


2.6.   (i) In how many ways can 3 boys and 2 girls sit in a row? (ii) In how many ways
       can they sit in a row if the boys and girls are each to sit together? (iii) In how
       many ways can they sit in a row if just the girls are to sit together?
       (i)   The five persons can sit in a row in 5 4 3 2 1 = 5! := 120 ways.
       (ii) There are 2 ways to distribute them according to sex: BBBGG or GGBBB. In each case the
            boys can sit in 3 2 1 = 3! = 6 ways, and the girls can sit in 2 1 = 2! = 2 ways. Thus,
            altogether, there are 2 3! 2 ! = 2 6 2 = 24 ways.
       (iii) There are 4 ways to distribute them according to sex: GGBBB, BGGBB, BBGGB, BBBGG.
             Note that each way corresponds to the number, 0, 1, 2 or 3, of boys sitting to the left of the
             girls. In each case, the boys can sit in 3! ways, and the girls in 2! ways. Thus, altogether,
             there are 4*3!*2!= 406.2 = 48 ways.



2.7.   How many different signals, each consisting of 6 flags hung in a vertical line, can
       be formed from 4 identical red flags and 2 identical blue flags?
           This problem concerns permutations with repetitions. There are - 6 ! - 15 signals since
                                                                          4 ! 2!
       there are 6 flags of which 4 are red and 2 are blue.



2.8.   How many distinct permutations can be formed from all the letters of each word:
       (i) them, (ii) unusual, (iii) sociological ?
       (i)   4! = 24, since there are 4 letters and no repetitions.
             7! -
       (ii) - - 840, since there are 7 letters of which 3 are U.
             3!
       (iii)    12!     since there are 12 letters of which 3 are 0 , 2 are c, 2 are i, and 2 are 1.
             3!2!2!2! '


2.9.   (i) In how many ways can 3 Americans, 4 Frenchmen, 4 Danes and 2 Italians be
            seated in a row so that those of the same nationality sit together?
       (ii) Solve the same problem if they sit a t a round table.
       (i)   The 4 nationalities can be arranged in a row in 4 ! ways. In each case the 3 Americans can
             be seated in 3! ways, the 4 Frenchmen in 4! ways, the 4 Danes in 4! ways, and the 2 Italians
             in 2! ways. Thus, altogether, there are 4! 3! 4!4!2! = 165,888 arrangements.
       (ii) The 4 nationalities can be arranged in a circle in 3! ways (see Problem 14.4 on circular
            permutations). In each case the 3 Americans can be seated in 3! ways, the 4 Frenchmen in
            4! ways, the 4 Danes in 4! ways, and the 2 Italians in 2! ways, Thus, altogether, there are
            3!3! 4 ! 4 ! 2! = 41,472 arrangements.
26                                           TECHNIQUES O F COUNTING                                                    [CHAP. 2


2.10.   Suppose an urn contains 8 balls. Find the number of ordered samples of size 3
        (i) with replacement, (ii) without replacement.
                                         '




        (i)   Each ball in the ordered sample can be chosen in 8 ways; hence there a r e 8 . 8 0 8 = 83 = 512
              samples with replacement.
        (ii) The first ball in the ordered sample can be chosen in 8 ways, the next in 7 ways, and the last
             in 6 ways. Thus there are 807.6 = 336 samples without replacement,


2.11. Find n if (i) P(n, 2) = 72, (ii) P(n, 4) = 42P(n, Z), (iii) ZP(n, 2) 50 = P(2n, 2).                     +
      (i) P(n, 2) = n(n - 1) = n2- n; hence n2 - n = 72 or n2 - n - 72 = 0 or (n - 9)(n + 8) = 0.
                       Since n must be positive, the only answer is n = 9.

        (ii) P(n, 4) = n(n - l ) ( n- 2)(n - 3) and P(n, 2) = n(n - 1). Hence
                     n(n - l ) ( n- 2)(n - 3) = 42n(n - 1)     or, if n # 0, # 1,                       (n - 2)(n - 3) = 42
                           or     n2-5n+6        = 42    or      n2-5n-36               = 0   or   (n-9)(n+4)       = 0
                       Since n must be positive, the only answer is n = 9.
        (iii) P(n, 2) = n(n - 1) = n2 - n and P(2n, 2) = Zn(2n - 1) = 4n2 - 2n.                    Hence
                   Z(n2- n)      + 50 = 4n2 - 2n or 2n2 - 2n + 50 = 4n2 - 2n or 50 = 2n2 or n2 = 25
                       Since n must be positive, the only answer is n = 5.


BINOMIAL COEFFICIENTS AND THEOREM
2.12. Compute:             (i)   (136) , (ii) (142)      (iii)   (55).
              Recall that there are a s many factors in the numerator a s in the denominator.

                                                              (iii)   (;">   =
                                                                                   15 14 13 012011
                                                                                     1-2.3*4*5     = 3003




2.13. Compute:             (i)   (:) , (ii) (:) , (iii) (y).
               \   I



              Note t h a t 8 - 5 = 3; hence we could also compute                (58)     as follows:


                                                  (58)   =     (:)     =
                                                                             807.6
                                                                           1.2.3 = 56

        (ii) Now 9 - 7 = 2; hence
                                             (;) = G> = 1.2       9.8 = 36.



        (iii) Now 10-6 = 4; hence
                                                                       1-2-3.4


2.14.   Expand and simplify: ( 2 x y2)5.     +
CHAP. 21                                          TECHNIQUES O F COUNTING                                                                              27




2.16. Prove:          24 =           16       =       (t) + (;) + (i) + (t) + (:) .
           Expand (1         +   l ) 4 using the binomial         theorem:

                 24     =:        (1+1)*      =       (:)I4         + (:)1311 + (i):w +                                    (:)ill3        + (:)14

                                              =       (:)       +    (14)     +    (3 (i) (:>
                                                                                            +                    +




2.17. Prove Theorem 2.6:                   (" '> = (                   + (:) .    l)
           Now        (l-nl) + (:)                = ( r - 1)! (n- + 1)! + -
                                                              n!
                                                                          r! -
                                                                              !
                                                                             7"
                                                                                                        72
                                                                               - r ) ! To obtain the same denomi-
                                                                                                    (12              *

                                                                                                                                          n-r+l
     nator in both fractions, multiply the first fraction by                               and the second fraction by                               Hence
                                                                                                                                          n-r+l'

                      (A) (:> =      +                      r
                                                                            r.n!
                                                                (r - I)! (n - r        +I)!         +
                                                                                                                     (n-r+l)-n!
                                                                                                             r ! (n- r       +
                                                                                                                          1) (n - r ) !
                                                    -            ran!
                                                            r ! (n-r+l)!
                                                                                   + -+-
                                                                                       (n- r
                                                                                       1) n !
                                                                                           r! (n-r+l)!

                                                    -
                                                    -
                                                                     +
                                                            r-n! (n-r+l)*n!                             __
                                                                                                        .-
                                                                                                                  [r+ (n-r+           l)] o n !
                                                               r ! ( n - r + l)!                                      r ! (n-Y+ l ) !
                                                   -
                                                   -            (n   +l)n!             -             (n 1)!  +
                                                            r !(n-r+l)!                -         r ! (n--r+ l ) !




2.18. Prove the Binomial Theorem 2.5: (a                                    + b)" = 5(:) an-r b'.
                                                                                           r=O
           The theorem is true for n = 1, since

                       $ (:>d - r b r
                      f=;O
                                                  =     (:>.lbO             + (:)aobl              ==         U      +b       =       (a+b)l

     We assume the theorem holds for (a4- b)n and prove it is true for (a                                                + b)n+l.
                       (a    + b)n+l      =         +
                                                  (a b)(a b)n   +
                                          =       (a+b)[an          +                       +     '*.        + (r          1) u n - r + l br-1


                                                                     + (:>.n-r,r             +      *..       +      (:)a6n-1          + bn   1
     Now the term in the product which contains br is obtained from

            (E(   r - 1 )an-r+l,r-l]               + a[(:)un-rbr]                      =         (,c         l)~n-r+lbr             + (:>..-r+lbr
                                                                                       =
                                                                                                 [(,r:l)
                                                                                                                      + (:)]un-r+lbr
28                                          TECHNIQUES O F COUNTING                                                 [CHAP. 2



        But, by Theorem 2.6,

                            +
        Note that (a3- b)(a b)n is a polynomial of degree n            + 1 in b. Consequently,
                               (a+ b)n+'      =   (a+ b ) ( a + b)n     =     y( ;
                                                                              r=O
                                                                                          ')an-..'        b7
        which was to be proved.


2.19.   Compute the following multinomial coefficients:

                                      (& 1> '             (,,,s,,                               10
                                (i)                                     0)'      Pii) ( 5 ' 3 ' 2 , Z )




        (iii) The expression    ( 3,:f
                                 5,         2) has no meaning since 5         + 3 + 2 + 2 # 10.

COMBINATIONS
   In how many ways can a committee consisting of 3 men and 2 women be chosen
2.20.
   from 7 men and 5 women?            /T \
              The 3 men can be chosen from the 7 men in (             ) ways,
                                                                          - . and the 2 women can be chosen from the

                           ways.
                                                               \$/
                                      Hence the committee can be chosen in          (37) (:)     =
                                                                                                     102-3
                                                                                                               E=   350 ways.


2.21.   A delegation of 4 students is selected each year from a college to attend the National
        Student Association annual meeting. (i) In how many ways can the delegation be
        chosen if there are 12 eligible students? (ii) In how many ways if two of the
        eligible students will not attend the meeting together? (iii) In how many ways if
        two of the eligible students are married and will only attend the meeting together?

        (i)   The 4 students can be chosen from the 12 students in                  (7)      =
                                                                                                     l2 l1 l0
                                                                                                      1-2.3-4    = 495 ways.
        (ii) Let A and B denote the students who will not attend the meeting together.
              Method 1.
                  If neither A nor B is included, then the delegation can be chosen in
                                                                                                       (y)       10.9.8.7
                                                                                                               = 1.2.3.4
                                                                                                                            -
                                                                                                                            -
              210 ways. If either A or B, but not both, is included, then the delegation can be chosen in

              2   (y)        1009-8
                       = 2 01.2.3    = 240 ways. Thus, altogether, the delegation can be chosen in
              210+240 = 450 ways.

              Method 2.
                  If A and B are both included, then the other 2 members of the delegation can be chosen in

               (3    = 45 ways.          Thus there are 495 - 45 = 450 ways the delegation can be chosen if
               A and B are not both included.
        (iii) Let C and D denote the married students. If C and D do not go, then the delegation can be
               chosen in   (y)     = 210 ways.      If both C and D go, then the delegation can be chosen in
                     = 45 ways. Altogether, the delegation can be chosen in 210                      + 46 = 255 ways.
CHAP. 21                                 TECHNIQUES O F COUNTING                                            29

2.22.   A student is to answer 8 out of 10 questions on an exam. (i) How many choices
        has he? (ii) How many if he must answer the first 3 questions? (iii) How many
        if he must answer a t least 4 of the first 5 questions?

        (i)   The 8 questions can be selected in                         -   y::   - 45 ways.



                                (i) (i)
        (ii) If he answers the first 3 questions, then he can choose the other 5 questions from the last
                                 =       = 1.2
                                             7 6 = 21 ways.
             7 questions in

        (iii) If he answers all the first 5 questions, then he can choose the other 3 questions from the last
              5 in   (i,) =
                     /-\

                               10 ways. On the other hand, if he answers only 4 of the first 6 questions, then

              he can choose these 4 in  (:) (15) =
                                                =           5 ways, and he can choose the other 4 questions


              from the last 5 in    (:) (;> =
                                          =          5 ways; hence he can choose the 8 questions in 6 . 5   =
              25 ways. Thus he has a total of 35 choices.



2.23.   Find the number of subsets of a set X containing n elements.
        Method 1.
            The number of subsets of X with T


                                   (0 (;)+       +   (1)   +   ...   +   ( ) (:)
                                                                             n-1   +

        subsets of X. The above sum (Problem 2.61) is equal to 2n, i.e. there are 2n subsets of X.




                                                     -
        Method 2.
            There are two possibilities for each element of X either it belongs to the subset or it doesn't;
        hence there are
                                                    n times
                                                 2 . 2 . . . . . 2 = 2n
        ways to form a subset of X,i.e. there are 2n different subsets of X.


2.24.   In how many ways can a teacher choose one or more students from six eligible
        students ?
        Method 1.
            By the preceding problem, there are 26 = 64 subsets of the set consisting of the six students.
        However, the empty set must be deleted since one or more students are chosen. Accordingly there
        are 26 - 1 = 64 - 1 = 63 ways to choose the students.
        Method 2.
            Either 1,2,3,4,5 or 6 students are chosen. Hence the number of choices is

         (3 (3 (0+ (3 + (3+ (i)
               +           +                                   =     6   + 15 + 20 + 15 + 6 + 1 = 63

ORDERED AND UNORDERED PARTITIONS
    In how many ways can 7 toys be divided among 3 children if the youngest gets
2.25.
    3 toys and each of the others gets 2?
            We seek the number of ordered partitions of 7 objects into cells containing 3, 2 and 2 objects,
        respectively. By Theorem 2.9, there are jj-&jj
                                                   7'  = 210 such partitions.
30                                        TECHNIQUES O F COUNTING                                                           [CHAP. 2


2.26.   There are 12 students in a class. In how many ways can the 12 students take
        3 different tests if 4 students are to take each test?
        Method 1.
            We seek the number of ordered partitions of the 12 students into cells containing 4 students
                                        12! = 34,650 such partitions.
        each. By Theorem 2.9, there are -
                                                4 ! 4! 4!
        Method 2.
        (:)There  are    (y)   ways to choose 4 students to take the first test; following this, there are
              ways to choose 4 students to take the second test. The remaining students take the third test.
        Thus, altogether, there are    (“> (8q)       = 495 70 = 34,650 ways for the students to take the tests.



2.27. In how many ways can 12 students be partitioned into 3 teams, A I , A2 and As, so that
      each team contains 4 students?
        Method 1.
             Observe that each partition {Al,Az,A3} of the students can be arranged in 3 ! = 6 ways
        as an ordered partition. Since (see the preceding problem) there are
                                                                             12                         ’
                                                                                                    4!4!4!
                                                                                = 34,650 such ordered
        partitions, there are 34,650/6 = 6775 (unordered) partitions.

        Method 2.
            Let A denote one of the students. Then there are                           ways to choose 3 other students to be
        on the same team as A. Now let B denote a student who is not on the same team as A; then there
        are   (i)   ways to choose 3 students of the remaining students to be on the same team as B. The
        remaining 4 students constitute the third team.
        165 35 = 5775 ways to partition the students.
                                                                            Thus, altogether, there are
                                                                                                                        (;’>.(:) =
2.28. Prove Theorem 2.9: Let A contain n elements and let nl, n2, . . .,n, be positive integers
      with nl n2    + +          +
                          f i r = n. Then there exist

                                                                  n!
                                           nl!np!n3! nr!
        different ordered partitions of A of the form (Al,A2, . . . , A , ) where A1 contains nl
        elements, A2 contains n2 elements, . . ., and Ar contains n, elements.
              We begin with n elements in A; hence there are               (l)     ways of selecting the cell Al. Following

        this, there are n - n, elements left, i.e. in A \ A l ,            and so there are            (“    i2n1)   ways of selecting

        A2. Similarly, for i = 3, . . ., T , there are                                    ni- I
                                                                                                     ways of selecting A i . Thus
        there are

                               (n:>(n--2n1)(n-:3-n2)                     ... (“-“I-          nr
                                                                                              * . * enr-1)
                                                                                                                                   (*)

        different ordered partitions of A. Now (*) is equal to
                                    n!               ( n - n l )!
                             n l ! (n- n , ) ! - n2! (n- nl - n 2 ) !
                                                                     a        .   (n-nl-
                                                                                  n,! ( n - n l -
                                                                                                      -nr-l)!
                                                                                                     - . a   -nr)!
                                     n!
        But this is equal to nl!n 2 ! . , . n r ! since each numerator after the first is cancelled by the second
        term in the denominator and since (n - nl- *              - - nr)! = O! = 1. Thus the theorem is proved.
CHAP. 21                                  TECHNIQUES O F COUNTING                                   31

TREE DIAGRAMS
2.29.   Construct the tree diagram for the number of permutations of (a, b, c}.



                                                                        C           bac
                                                                        a           bca
                                                                        b           cab
                                                                        a           cba
            The six permutations are listed on the right of the diagram.


2.30.   A man has time to play roulette a t most five
        times. At each play he wins or loses a dollar.
        The man begins with one dollar and will stop
        playing before the five times if he loses all his
        money or if he wins three dollars, i.e. if he has
        four dollars. Find the number of ways that the
        betting can occur.
             The tree diagram on the right describes the way the
        betting can occur. Each number in the diagram denotes
        the number of dollars the man has at that point. Observe                              3-2
        that the betting can occur in 11 different ways. Note
        that he will stop betting before the five times are up in
        only three of the cases.




                                     Supplementary Problems
FACTORIAL
2.31.   Compute:    (i) 9!,   (ii) lO!,   (iii) 11!

                          16 !      14!        8’       10 !
2.32.   Compute:    (i)   z,   (ii)     (iii) j$ , (iv) E .


2.33.   Simplify:   (i) 7
                                         nl   -        (n- l)!
                        (n+ I)! , (ii) (n- 2) !’ (iii) -
                                                                          (n - r l)!+
                                                       ( n + 2 ) ! ’ (iv) ( n - r - l ) ! .


PERMUTATIONS
2.34. (i) How many automobile license plates can be made if each plate contains 2 different letters
      followed by 3 different digits? (ii) Solve the problem if the first digit cannot be 0.

2.35.   There are 6 roads between A and B and 4 roads between El and C.
        (i) In how many ways can one drive from A to C by way of B?
        (ii) In how many ways can one drive roundtrip from A to C by way of B?
        (iii) In how many ways can one drive roundtrip from A to C without using the same road more
              than once?
32                                        TECHNIQUES OF COUNTING                                        [CHAP. 2


2.36.   Find the number of ways in which 6 people can ride a toboggan if one of three must drive.

2.37.   (i) Find the number of ways in which five persons can sit in a row.
        (ii) How many ways are there if two of the persons insist on sitting next to one another?
2.38.   Solve the preceding problem if they sit around a circular table.

2.39.   (i) Find the number of four letter words that can be formed from the letters of the word HISTORY.
        (ii) How many of them contain only consonants? (iii) How many of them begin and end in a
        consonant? (iv) How many of them begin with a vowel? (v) How many contain the letter Y?
        (vi) How many begin with T and end in a vowel? (vii) How many begin with T and also contain S?
        (viii) How many contain both vowels?

2.40.   How many different signals, each consisting of 8 flags hung in a vertical line, can be formed from
        4 red flags, 2 blue flags and 2 green flags?

2.41.   Find the number of permutations that can be formed from all the letters of each word: (i) queue,
        (ii) committee, (iii) proposition, (iv) baseball.

2.42.   (i)   Find the number of ways in which 4 boys and 4 girls can be seated in a row if the boys and
              girls are to have alternate seats.
        (ii) Find the number of ways if they sit alternately and if one boy and one girl are to sit in
              adjacent seats.
        (iii) Find the number of ways if they sit alternately and if one boy and one girl must not sit in
              adjacent seats.

2.43.   Solve the preceding problem if they sit around a circular table.

2.44.   An urn contains 10 balls. Find the number of ordered samples (i) of size 3 with replacement,
        (ii) of size 3 without replacement, (iii) of size 4 with replacement, (iv) of size 5 without replacement.

2.45.   Find the number of ways in which 5 large books, 4 medium-size books and 3 small books can be
        placed on a shelf so that all books of the same size are together.

2.46.   Consider all positive integers with 3 different digits. (Note that 0 cannot be the first digit.)
        (i) How many are greater than 700? (ii) How many are odd? (iii) How many are even? (iv) How
        many are divisible by 5?

2.47.   (i) Find the number of distinct permutations that can be formed from all of the letters of the word
        ELEVEN. (ii) How many of them begin and end with E ? (iii) How many of them have the 3 E’s
        together? (iv) How many begin with E and end with N?


BINOMIAL COEFFICIENTS AND THEOREM

2.48.



2.49.   Compute:    (i) (3,   ;, , (8 2p2,
                               1)             (3,       9   (iii)   (     6
                                                                                )
                                                                    2, 2, 1, 1, 0

2.50.   Expand and simplify:                                          ) ~(&a~+ 26)5, (iv) (2a2 - b)6.
                                          + 2 / 9 5 , (ii) (x2 - 3 ~ (iii)
                                    (i) (2%


2.51.   Showthat
                      (:) + (2) + (:>+ (i) + ... + (z) =                            2%.


2.52.   Showthat
                      (:) - (y) + (3 (i) + - . . (3 =
                                                    -                   2           0.

2.53.   Find the term in the expansion of (2x2-.+@3)8 which contains x*.

2.54.   Find the term in the expansion of ( 3 2 ~ -
                                                  2 22)‘ which contains g6.
CHAP. 21                              TECHNIQUES OF COUNTING                                                33

COMBINATIONS
2.55. A class contains 9 boys and 3 girls. (i) In how many ways can the teacher choose a committee of 4?
      (ii) How many of them will contain a t least one girl? (iii) How many of them will contain exactly
      one girl?

2.56.   A woman has 11 close friends. (i) In how many ways can she invite 6 of them to dinner? (ii) In
        how many ways if two of the friends are married and will not attend separately? (iii) In how
        many ways if two of them are not on speaking terms and will not attend together?

2.57.   There are 10 points A , B , . . . in a plane, no three on the same line. (i) How many lines are
        determined by the points? (ii) How many of these lines do not pass through A or B? (iii) How
        many triangles are determined by the points? (iv) How many of these triangles contain the
        point A ? (v) How many of these triangles contain the side AB?

2.58.   A student is to answer 10 out of 13 questions on an exam. (i) How many choices has he? (ii) How
        many if he must answer the first two questions? (iii) How many if he must answer the first or
        second question but not both? (iv) How many if he must answer exactly 3 of the first 6 questions?
        (v) How many if he must answer at least 3 of the first 5 questions?

2.59.   A man is dealt a poker hand (5 cards) from an ordinary playing deck. In how many ways can he
        be dealt (i) a straight flush, (ii) four of a kind, (iii) a straight, (iv) a pair of aces, (v) two of a
        kind (a pair)?

2.60.   The English alphabet has 26 letters of which 6 are vowels.
        (i)    How many 6 letter words containing 3 different consonants and 2 different vowels can be
               formed ?
        (ii) How many of them contain the letter b?
        (iii) How many of them contain the letters b and c?
        (iv) How many of them begin with b and contain the letter c?
        (v) How many of them begin with b and end with c?
        (vi) How many of them contain the letters a and b ?
        (vii) How many of them begin with a and contain b ?
        (viii) How many of them begin with b and contain a?
        (ix) How many of them begin with a and end with b?
        (x) How many of them contain the letters a, b and c?

ORDERED AND UNORDERED PARTITIONS
2.61. In how many ways can 9 toys be divided evenly among 3 children?

2.62.   In how many ways can 9 students be evenly divided into three teams?

2.63.   In how many ways can 10 students be divided into three teams, one containing 4 students and
        the others 3?

2.64.   There are 12 balls in an urn, In how many ways can 3 balls be drawn from the urn, four times
        in succession, all without replacement?

2.65.   In how many ways can a club with 12 members be partitioned into three committees containing
        5, 4 and 3 members respectively?

2.66.   In how many ways can n students be partitioned into two teams containing at least one student?

2.67.   In how many ways can 14 men be partitioned into 6 committees where 2 of the committees contain
        3 men and the others 2?

TREE DIAGRAMS
2.68.   Construct the tree diagram for the number af permutations of {a,b, C, d).

2.69.   Find the product set {1,2,3) X {2,4) X {2,3,4) by constructing the appropriate tree diagram.
34                                           TECHNIQUES O F COUNTING                                                         [CHAP. 2


2.70.   Teams A and B play in a basketball tournament. The first team that wins two games in a row or a
        total of four games wins the tournament. Find the number of ways the tournament can occur.

2.71.   A man has time to play roulette five times. He wins or loses a dollar at each play. The man begins
        with two dollars and will stop playing before the five times if he loses all his money or wins three
        dollars (i.e. has five dollars). Find the number of ways the playing can occur.

2.72.   A man is a t the origin on the x-axis and takes a unit step either to the left o r to the right. He
        stops after 5 steps or if he reaches 3 or -2. Construct the tree diagram to describe all possible
        paths the man can travel.

2.73.   In the following diagram let A , B , . . . , F denote islands, and the lines connecting them bridges.
        A man begins a t A and walks from island to island. He stops for lunch when he cannot continue
        to walk without crossing the same bridge twice. Find the number of ways that he can take his walk
        before eating lunch.




2.74.    Consider the adjacent diagram with nine points A, B, C, R , S, T,X,                                    A-B-C
         Y , Z . A man begins at X and is allowed to move horizontally or ver-
         tically, one step a t a time. He stops when he cannot continue to walk                                 I        l    l
         without reaching the same point more than once. Find the number of
        'ways he can take his walk, if he first moves from X to R. (By sym-
         metry, the total number of ways is twice this.)




                          Answers to Supplementary Problems
2.31.   (i) 362,880       (ii) 3,628,800        (iii) 39,916,800

2.32.   (i) 240       (ii) 2184       (iii) 1/90      (iv) U1716

2.33.   (i) n   +1      (ii) n(n - 1) = n2 - n         (iii) l / [ n ( n4-l ) ( n   + 2)]   (iv) (n - r ) ( n - r f 1)

2.34.   (i) 26 25 10 9 8 = 468,000                 (ii) 26 25 9 9 8 = 421,200

2.35.   (i) 6 4 = 24        (ii) 6 4 4 6 = 24 24 = 576                   (iii) 6 4 3 5 = 360

2.36.   3 . 5 . 4 . 3 . 2 . 1 = 360

2.37.   (i) 5 ! = 120       (ii) 4 * 2 ! * 3 ! = 48

2.38.   (i) 4! = 24        (ii) 2! 3! = 12

2.39.   (i) 7 6 5 4 = 840               (iii) 5 5 4 4         400           (v) 4 * 6 * 5 * 4 = 4 8 0        (vii) 1 3 5 4 = 60
        (ii) 5 4 3 2 = 120              (iv) 2 6 5 4 = 240                  (vi) 1 . 5 . 4 . 2 = 4 0         (viii) 4 3 5 4 = 240

          8!
2.40.   -      - 420
        4!2!2! -

             5!                       9!                               11 !                                8!
2.41.   (i) 2!2! = 30        (ii)            = 45,360        (iii)              = 1,663,200        (iv) --
                                                                                                        2!2!2! 5040
CHAP. 21                                              TECHNIQUES O F COUNTING                                                                           35

2.42.   (i) 2 * 4 ! 4! =I 1152                 (ii) 2 7 * 3 ! -3! = 504                (iii) 1152 - 504 = 648

2.43.   (i) 3!*4! = 144               (ii) 2 * 3 ! * 3 ! = 72            (iii) 144-72 = 72

2.44.   (i) 1 0 * 1 0 * 1 0= 1000                    (iii) 10 10 10 10 = 10,000
        (ii) 10 9 8 = 720                            (iv) . 1 0 * 9 * 8 * 7 *=
                                                                             6 30,240

2.45.   3!5!4!3!          = 103,680
2.46.   (i) 3 0 9 . 8 = 216      (ii) 8 . 8 0 5 = 320
        (iii) 9 . 8 . 1 = 72 end in 0, and 8 0 8 . 4 = 256 end in the other even digits; hence, altogether,
              72+256 = 328 are even.
        (iv) 9 - 8 . 1 := 72 end in 0, and 8 - 8 01 = 64 end in 5; h.ence, altogether, 72 64 = 136 are                                   +
              divisible by 5.
               61                                                                            41
2.47.   (i)       - 120         (ii) 4! = 24             (iii) 4 3! = 24                (iv) $ = 12
               3! -
2.48.   (i) 10           (ii) 35        (iii) 91          (iv) 15         (v) 1140              (vi) 816

2.49.   (i) 504           (ii) 210           (iii) 180

2.50.                +
        (i) 8x3 12x2342 6x114 346   +            +
                                   +
        (ii) x8 - 12x62/ 54x4~2- 108x2~3 81344                   +
                          +             +
        (iii) aV32 5 a W 8 5a3b2 2OdW 40ab4 32b5     +            +               +
                                         +
        (iv) 64a12 - 192alob 240a8b2 - 160aeb3 60a4b4 - l2a2b5 C b6       +
2.51.   Hint. Expand (1              + 1)n.              2.53.    7Ox8gl2

2.52.   Hint. Expand (1- l ) n .                         2.54.    945x33469

2.55.   (i)    (142)     = 495,         (ii)     ("> - (49)         = 369,            (iii) 3        (3     = 252


2.56.   (i)    (y)       = 462,         (ii)    (39) + (:)       = 210,             (iii)   ("5> +       2*(:)          = 378


2.57.   (i)    (:">      = 45,        (ii)     (3    = 28,        (iii)   (y)          = 120,         (iv)       (2")    = 36,     (v) 8


2.58.   (i)     (ii) ('3") ==            = 286


        (ii)    (y) (f)    z=             = 165                           (v)         (;)(;)         +    (3(D (:)(:)    +               = 276

        (iii) 2   ( y ) (">     = 2                  = 110

2.59.   (i) 4.10 = 40, (ii) 13.48 = 624, (iii) 10 045 - 40 = 10,200. (We subtract the number of straight
                         4 12
        flushes.) (iv) (2)( 3 ) 43 = 84,480, (v) 13                  d3 = 1,098,240         (:)(:)
2.60.   (i)     ( 21 5
                  3)(2)         - 5 ! = 1,596,000                 (v)         19.     (E)    * 3 ! = 1140                    (ix) 4 .   (y)   - 3 ' = 4560


        (ii)    (:)(:)             5! = 228,000                   (vi)        4   ("2")        5! = 91,200                   (x) 4 * 1 9 * 5 ! = 9120


        (iii) 19         (:)*   Ei! = 22,800                      (vii) 4         (y)          4! = 18,240


        (iv) 19          (i).   4! = 4560                         (viii) 18,240 (same a:3 (vii))
36                                      TECHNIQUES OF COUNTING                                  [CHAP. 2

         9!
        --
2.61.
        3!3!3! - 1680
2.62.   1680/3! = 280    or
                              C)(:)              = 280

2.63.
        4!3!3! -
        - 10!
            0
               1 -
               2! - 2100      or      (140)(;)       = 2100

2.64.      12!
        3!3!3!3! -
                 - 369,600               2.66.      2n-1 - 1

        - 12!
          -                                              14 !         -
2.65.              27,720
        5!4!3! -                                    3!3!2!2!2!2! 2!4! - 3,153,150
                                                                0 -
                                         2*67'

2.69.
                                                                      2
                                                           2          3
                                                                      4


                                                           4




        The eighteen elements of the product set are listed to the right of the tree diagram.

2.70.   14 ways

2.71.   20 ways (as seen in the following diagram):
CHAP. 21                                TECHNIQUES O F COUNTING                                           37

2.72.   Hint. The tree is essentially the same as the tree of the preceding problem.

2.73.   The appropriate tree diagram follows:




        There are eleven ways to take his walk. Observe that he must eat his lunch at either B, D or E.

2.74.   The appropriate tree diagram follows:




        There are 10 different trips.   (Note that in only 4 of them are all nine points covered.)
                                                               Chapter 3


                         Introduction to Probability
INTRODUCTION
    Probability is the study of random or nondeterministic experiments. If a die is tossed
in the air, then it is certain that the die will come down, but it is not certain that, say,
a 6 will appear. However, suppose we repeat this experiment of tossing a die; let s be
the number of successes, i.e. the number of times a 6 appears, and let n be the number of
tosses. Then it has been empirically observed that the ratio f = s/n, called the relative
frequency, becomes stable in the long run, i.e. approaches a limit. This stability is the
basis of probability theory.
    In probability theory, we define a mathematical model of the above phenomenon by
assigning “probabilities” (or: the limit values of the relative frequencies) to the “events”
copnected with an experiment. Naturally, the reliability of our mathematical model for a
given experiment depends upon the closeness of the assigned probabilities to the actual
relative frequency. This then gives rise to problems of testing and reliability which form
the subject matter of statistics.
    Historically, probability theory began with the study of games of chance, such as
roulette and cards. The probability p of an event A was defined as follows: if A can occur
in s ways out of a total of n equally likely ways, then
                                                  s
                                       p = P(A) = -
                                                  n
For example, in tossing a die an even number can occur in 3 ways out of 6 “equally likely”
ways; hence p = = &. This classical definition of probability is essentially circular since
the idea of “equally likely” is the same as that of “with equal probability” which has not
been defined. The modern treatment of probability theory is purely axiomatic. This means
that the probabilities of our events can be perfectly arbitrary, except that they must satisfy
certain axioms listed below. The classical theory will correspond to the special case of
so-called equiprobable spaces.

SAMPLE SPACE AND EVENTS
     The set S of all possible outcomes of some given experiment is called the sample space.
A particular outcome, i.e. an element in S, is called a sample point or sample. An event A
is a set of outcomes or, in other words, a subset of the sample space S. The event { a } con-
sisting of a single sample a E S is called an elementary event. The empty set @ and S
itself are events; is sometimes called the impossible event, and S the certain or sure event.
     We can combine events to form new events using the various set operations:
(i) A U B is the event that occurs iff A occurs or B occurs (or both);
(ii) A n B is the event that occurs iff A occurs and B occurs;
(iii) A“, the complement of A , is the event that occurs iff A does not occur.

                                             38
CHAP. 31                          INTRODUCTION TO PROBABILITY                                          39

    Two events A and B are called mutuubby excEusive if they are disjoint, i.e. if A nB = Q>.
In other words, A and B are mutually exclusive if they cannot occur simultaneously.

       Example 3.1:   Experiment: Toss a die and observe the number that appears on top.      Then the
                      sample space consists of the six possible numbers:

                                                     S = (1, 2, 3, 4, 5, 6)

                      Let A be the event that an even number occurs, B that an odd number occurs and
                      C that a prime number occurs:

                                       A = {2,4,6},     B = {1,3,5},          C = {2,3,5}
                      Then:

                          A U C = {2,3,4, 5, 6} is the event that a n even or a prime number occurs;
                          B n C = (3, 5} is the event that an odd prime number occurs;
                          C c = (1, 4, 6} is the event that a prime number does not occur.

                      Note that A and B are mutually exclusive: A n B = @; in other words, an even
                      number and an odd number cannot occur simultaneously.


       Example 3.2:   Experiment: Toss a coin 3 times and observe the sequence of heads (H) and
                      tails (T) that appears. The sample space S consists of eight elements:

                                    S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}

                      Let A be the event that two or more heads appear consecutively, and B that all
                      the tosses are the same:

                                     A = {HHH,HHT,THH}            and   B = {HHH,TTT}

                      Then A nB = {HHH} is the elementary event in which only heads appear. The
                      event that 5 heads appear is the empty set (3.


       Example 3.3:   Experiment: Toss a coin until a head appears and then count the number of times
                      the coin was tossed. The sample space of this experiment is S = {1,2,3, . . ., a).
                      Here 03 refers to the case when a head never appears and so the coin is tossed a n
                      infinite number of times. This is an example of a sample space which is countably
                      infinite.


       Example 3.4:   Experiment: Let a pencil drop, head first, into a
                      rectangular box and note the point on the bottom
                      of the box that the pencil first touches. Here S
                      consists of all the points on the bottom of the box.
                      Let the rectangular area on the right represent
                      these points. Let A and B be the events that the
                      pencil drops into the corresponding areas illus-
                      trated on the right. This is an example of a sam-
                      ple space which is not finite nor even countably
                      infinite, i.e. which is uncountable.


Remark: If the sample space S is finite or countably infinite, then every subset of S is
        an event. On the other hand, if S is uncountable, as in Example 3.4, then for
        technical reasons (which lie beyond the scope of this text) some subsets of S
        cannot be events. However, in all cases the events shall form a a-algebra & of
        subsets of S.
40                              INTRODUCTION TO PROBABILITY                            [CHAP. 3


AXIOMS OF PROBABILITY
    Let S be a sample space, let & be the class of events, and let P be a real-valued function
defined on 6 . Then P is called a probability function, and P ( A ) is called the probability of
the event A if the following axioms hold:
[ P I ] For every event A , 0 4 P ( A ) L 1.
[P2]    P ( S ) = 1.
[P3]   If A and B are mutually exclusive events, then
                                     P ( A U B ) = P ( A )+ P ( B )
[P4]   If Al,A2, . . . is a sequence of mutually exclusive events, then
                              P(AiUA2U         a )   = P(A1)   + P(A2) +   *



    The following remarks concerning the axioms [P3] and [P4] are in order. First of all,
using [P3] and mathematical induction we can prove that for any mutually exclusive events
A1,A2, .. .,An,
                                                          +
                   P(A1UAzU - * * UA,) = P(A1) P(A2) . - P(A,)         +   +          (*)
We emphasize that [P4] does not follow from [P3]even though (*) holds for every positive
integer n. However, if the sample space S is finite, then clearly the axiom [P4]is superfluous.
     We now prove a number of theorems which follow directly from our axioms.
Theorem 3.1:      If tz, is the empty set, then P ( p ) = 0.
     Proof: Let A be any set; then A and tz, are disjoint and A u P = A . By [PSI,
                                P ( A ) = P ( A Up) = P ( A )     + P(@)
Subtracting P ( A )from both sides gives our result.

Theorem 3.2:      If A" is the complement of an event A , then P(Ac) = 1 - P ( A ) .
   Proof: The sample space S can be decomposed into the mutually exclusive events A and
Ac;that is, S = A u A c . By [ P z ] and [P3] we obtain
                              1 = P(S) = P(AUAc) = P ( A ) + P ( A c )
f rom which our result follows.
Theorem 3.3:      If A c B , then P ( A )6 P(B).
    Proof. If A c B , then B can be decomposed into the mutually
exclusive events A and B\A        (as illustrated on the right).
Thus
                                      +
                    P(B) = P ( A ) P(B\A)
The result now follows from the fact that P(B\A)                  0.

Theorem 3.4:      If A and B are any two events, then
                   P ( A\B)     = P ( A ) - P ( A nB)
    Proof. Now A can be decomposed into the mutually ex-
clusive events A \ B and A nB ; that is, A = ( A\ B) U ( AnB).
Thus by [PSI,
                 P ( A ) = P ( A \B)      +
                                     P ( A nB)
from which our result follows.
C H A P . 31                        INTRODUCTION TO PROBABILITY                                              41

Theorem 3.5:         If A and B are any two events, then
                                                                   +
                                             P ( AUB) = P ( A ) P(B)- P(A nB)
    Proof. Note that A UB can be decomposed into the mutually
exclusive events A \ B and B ; that is, A UB = ( A\ B ) UB. Thus
by [PSIand Theorem 3.4,
                  P ( A UB) = P ( A \ B )   +P(B)
                             = P ( A ) - P ( AnB)+ P(B)
                             = P ( A ) + P(B) - P ( A n B )
which is the desired result.
     Applying the above theorem twice (Problem 3.23) we obtain
Corollary 3.6:        For any events A , B and C ,
                                                                                            +
      P ( AUBUC) = P ( A ) + P(B)+ P ( C ) - P ( A nB) - P ( A n C ) - P(BnC) P ( A n B n C )


FINITE PROBABILITY SPACES
    Let S be a finite sample space; say, S = {UI,up, . . .,a,}.A finite probability space is
obtained by assigning to each point a+ E S a real number pi, called the probability of ai,
satisfying the following properties:
      (i) each pi is nonnegative, pi 2 0
      (ii) the sum of the pi is one, PI pz   + + - - - + p , = 1.
The probability P ( A ) of any event A, is then defined to be the sum of the probabilities of
the points in A . For notational convenience we write P ( a ) for P({a+}).

           Example 3.5:   Let three coins be tossed and the number of heads observed; then the sample space
                          is S = {0,1,2,3}. We obtain a probability space by the following assignment
                                         P(0) = 4,    P(1) = 8,         P(2) = 8    and   P(3) = Q
                          since each probability is nonnegative and the sum of the probabilities is 1. Let A
                          be the event that at least one head appears and let B be the event that all heads
                          or all tails appear:
                                                   A = {1,2, 3 ) and B = (0, 3 )
                          Then, by definition,
                                             P ( A ) = P(1) + P(2) + P ( 3 ) = 8 + 8 + Q = f
                          and                      P ( B ) = P(0) + P(3) = Q + Q = 4

           Example 3.6:   Three horses A , B and C are in a race; A is twice as likely to win as 3 and B is
                          twice a s likely to win a s C. What are their respective probabilities of winning,
                          i.e. P ( A ) ,P ( B ) and P(C)?
                              Let P(C)= p; since B is twice as likely to win as C, P(B) = 2p; and since
                          A is twice as likely to win as B, P ( A ) = 2P(B) = 2 ( 2 p ) = 413. Now the sum of the
                          probabilities must be 1; hence
                                             p+2p+4p         = 1   or     7p = 1    or    p =   3
                          Accordingly,
                                         P ( A ) = 4p = 4,    P ( B ) = 2 p = +,    P(C) = p =      +
                                Question: What is the probability that B or C wins, i.e. P({B,C})? By definition
                                                P({B,C}) = P ( B ) + P ( C ) =     +++= $
42                              INTRODUCTION TO PROBABILITY                                        [CHAP. 3


FINITE EQUIPROBABLE SPACES
     Frequently, the physical characteristics of an experiment suggest that the various
outcomes of the sample space be assigned equal probabilities. Such a finite probability
space S, where each sample point has the same probability, will be called an equiprobable
or uniform space. In particular, if S contains n points then the probability of each point
                                                                               1    r
is lln. Furthermore, if an event A contains r points then its probability is r ; = .; I n
other words,
                                       number of elements in A
                            P(A) =
                                       number of elements in S
                                 number of ways that the event A can occur
or              P(A) =
                              number of ways that the sample space S can occur
We emphasize that the above formula for P ( A ) can only be used with respect to an
equiprobable space, and cannot be used in general.
   The expression “at random” will be used only with respect to an equiprobable space;
formally, the statement “choose a point at random from a set S” shall mean that S is an
equiprobable space, i.e. that each sample point in S has the same probability.

       Example 3.7:   Let a card be selected a t random from an ordinary deck of 52 cards.        Let
                                                    A = {the card is a spade}

                      and           B = {the card is a face card, i.e. a jack, queen or king}
                            We compute P ( A ) ,P ( B ) and P(A nB). Since we have an equiprobable space,

                      P ( A ) = number of spades - 13 2
                                                                                number of face cards 12   3
                                                                      P(B)=
                                number of cards - 52 - 4                          number of cards - 52 - 13
                                                        number of spade face cards - 3
                                          P ( A nB) =       number of cards        - 52


       Example 3.8:   Let 2 items be chosen at random from a lot containing 12 items of which 4 are
                      defective. Let
                         A = (both items a r e defective)     and     B = {both items are non-defective)
                      Find P ( A ) and P(B). Now
                            S can occur in ( y ) = 66 ways, the number of ways t h a t 2 items can be
                                                      chosen from 12 items;
                            A can occur in    (i) = 6 ways, the number of ways that 2 defective items
                                                      can be chosen from 4 defective items;
                            B can occur i n   (l)= 28 ways, the number of ways t h a t 2 non-defective
                                                     items can be chosen from 8 non-defective items.
                      Accordingly, P ( A ) =   4=     and P ( B ) =    =   g.
                            Question: What is the probability that at least one item is defective? Now
                                                C = (at least one item is defective)
                      is the complement of B; that is, C = Bc. Thus by Theorem 3.2,
                                          P(C) = P(BC) = 1 - P ( B ) = 1         -g = g
                      The odds that a n event with probability p occurs is defined to be the ratio p : (1- p).
                      Thus the odds that a t least one item is defective i s     g: or 19:14 which is read
                      “19 to 14”.
CHAP. 31                        INTRODUCTION TO PROBABILITY                                                              43

       Example 3.9:    (Classical Birthday Problem.) We seek the probability p that n people have dis-
                       tinct birthdays. In solving this problem, we ignore leap years and assume that a
                       person’s birthday can fall on any day with the same probability.
                            Since there are n people and 365 different days, there are 365n ways in which
                       the n people can have their birthdays. On the other hand, if the n persons are to
                       have distinct birthdays, then the first person can be born on any of the 365 days,
                       the second person can be born on the remaining 364 days, the third person can be
                       born on the remaining 363 days, etc. Thus there are 365 364 363 * (365 - n 4-1 )        -
                       ways the n persons can have distinct birthdays. Accordingly,

                                     365 364 363    ---
                                                    (365 - n                   365 364 363 .. 365 - n + 1
                                                                       + 1) - -*-.-.
                             P =               365n                            - 365      365   365                365
                       It can be shown that for n 2 23, p < -&;i n other words, amongst 23 or more
                       people it is more likely that at least two of them have the same birthday than
                       that they all have distinct birthdays.


INFINITE SAMPLE SPACES
    Now suppose S is a countably infinite sample space; say S = {al,u2, . . .}. As in the
finite case, we obtain a probability space by assigning to each uiE S a real number P i , called
its probability, such that
                     (i) pi 2 0 and (ii) p1 + p 2 + ... = C p i = 1
                                                                                    CO



                                                                                   i= 1
The probability P ( A ) of any event A is then the sum of the probabilities of its points.

       Example 3.10:                                                           .
                       Consider the sample space S = ( 1 , 2 , 3 , . . , a) of the experiment of tossing a
                       coin till a head appears; here n denotes the number of times the coin is tossed.
                       A probability space is obtained by setting
                                   p ( 1 ) = 4,   p(2) =   i, . .., p(n) = l/Zn, .. .)                1.403)       = o

     The only uncountable sample spaces S which we will consider here are those with some
finite geometrical measurement m(S) such as length, area or volume, and in which a point
is selected a t random. The probability of an event A , i.e. that the selected point belongs
to A , is then the ratio of m(A) to m(S); that is,
                   length of A                  area of A               volume of A
                = l e n g t h o f s Or      = area of S or           = volume of^
Such a probability space is said t o be uniform.
       Example 3.11:   On the real line R, points a and b are selected at random such that -2 L b 4 0
                       and 0 4 a f 3, as shown below. Find the probability p that the distance d be-
                       tween a and b is greater than 3.

                                                     -     Y   d       +   -
                                             I                     I                                  I
                                           -2        b             0                       a          3

                              The sample space S consists of the or-
                       dered pairs (a, b) and so forms the rectangu-
                       l a r region shown in the adjacent diagram.
                       On the other hand, the set A of points (a,b)
                       for which d = a - b > 3 consists of those
                       points of S which lie below the line x - y = 3,
                       and hence forms the shaded area in the
                       diagram.
                            -       Thus
                              p = P(A) =
                                            area of A -
                                             area of S - 6 - 3
                                                               z
                                                              - I


Remark:    A finite o r countably infinite probability space is said to be discrete, and an
           uncountable space is said to be nondiscrete.
44                                INTRODUCTION TO PROBABILITY                                      [CHAP. 3



                                        Solved Problems
SAMPLE SPACES AND EVENTS
3.1. Let A and B be events. Find an expression and exhibit the Venn diagram for the
     event that: (i) A but not B occurs, i.e. only A occurs; (ii) either A or B, but not
     both, occurs, i.e. exactly one of the two events occurs.
       (i)   Since A but not B occurs, shade the area of A outside of B as in Figure (a) below. Note
             that Be, the complement of B, occurs since B does not occur; hence A and Bc occurs. In other
             words, the event is A nBc.




       (ii) Since A or B but not both occurs, shade the area of A and B except where they intersect as
            in Figure (b) above. The event is equivalent to A but not B occurs or B but not A occurs.
            Now, as in (i), A but not B is the event A nBc, and B but not A is the event B nAc. Thus
            the given event is (A nBc) U ( BnAc).


3.2.   Let A , B and C be events. Find an expression and exhibit the Venn diagram for
       the event that (i) A and B but not C occurs, (ii) only A occurs.
       (i)   Since A and B but not C occurs, shade the intersection of A and B which lies outside of C,
             as in Figure ( a ) below. The event is A nB nC C .




       (ii) Since only A is t o occur, shade the area of A which lies outside of B and of C, as in Figure (b)
            above. The event is A nBcn C C .


33.    Let a coin and a die be tossed; let the sample space S consist of the twelve elements:
                           S = {Hl,
                                  H2,H3,H4,H5,H6,Tl,T2,T3,T4,T5,T6}
       (i) Express explicitly the following events: A = {heads and an even number ap-
             pear}, B = {a prime number appears}, C = {tails and an odd number appear}.
       (ii) Express explicitly the event that: (a) A or B occurs, ( b ) B and C occurs,
             ( c ) only B occurs.
       (iii) Which of the events A , B and C are mutually exclusive?
CHAP. 31                            INTRODUCTION TO PROBABILITY                                            45

       (i)   To obtain A, choose those elements of S consisting of an H and an even number: A =
             {H2, H4, H6).
             To obtain B, choose those points in S consisting of a prime number: B = (H2, H3, H5, T2, T3, T5).
             To obtain C, choose those points in S consisting of a T and an odd number: C = ( T l , T3, T5).
       (ii) (a) A or B = A u B = {H2, H4, H6, H3, H5, T2, T3, T5)
             (b) B and C = B n C = { T 3 , T 5 }
             (c)   Choose those elements of B which do not lie in A or C: BnAcnCC = (H3, H5, T2).
       (iii) A and C are mutually exclusive since A n C = @.


FINITE PROBABILITY SPACES
3.4. Suppose a sample space S consists of 4 elements: S = {al,a2, a3, a4>. Which func-
     tion defines a probability space on S?
       (i) P(a1) = 4, P(a2) = Q, P(a3) = &, P(a4) = 3.
       (ii) P(a1) = 8, P(a2) = $, P(a3) = -$, P(a4) = +.
       (iii) P(a1) = 4, P(a2) = &, P(a3) = Q, P(a4) = Q.
       (iv) P(a1) = 8, P(a2) = &, P(a3) = &, P(a4) = 0.

       (i)   Since the sum of the values on the sample points is greater than one,        8 + Q + & + 5 = a,
                                                                                                          77

             the function does not define a probability space on S.
       (ii) Since P(a3)= -&,       a negative number, the function does not define a probability space on S.
       (iii) Since each value is nonnegative, and the sum of the values is one,       6+ & + Q + Q = 1, the
             function does define a probability space on S.
       (iv) The values are nonnegative and add up to one; hence the function does define a probability
            space on S .


3.5.   Let S = {al,a2, a3, a4}, and let P be a probability function on S.
       (i) Find P(a1)if P(a2) = Q, P(a3) = 9, P(a4)= Q.
       (ii) Find P(a1) and P(a2)if P(a3) = P(a4) = & and P(u1) = 2P(a2).
       (iii) Find P(a1) if P((a2,as}) = 8, P( (a2,a4}) = 4 and P(a2) = Q.

       (i)   Let P ( a l ) = p. Then for P to be a probability function, the sum of the probabilities on the
                                             + + +
             sample points must be one: p Q Q $ = 1 or p =           5.
       (ii) Let P(a2)= p, then P(al) = 2p. Hence 2 p + p +      & +& = 1 or p = 9. Thus P(a2)= Q and
            P(a1) == Q.
       (iii) Let P(aJ = p.              P(a3) = P({az,a3N - P(a2) = Q - Q = -g
                                         W 4 )= Wa2, a4N - P(a,) =      +-Q = Q
             Then p + Q   +   Q + Q = 1 or p = 9, that is, P(al) = Q.


3.6.   A coin is weighted so that heads is twice as likely to appear as tails.                   Find P ( T )
       and P(H).
           Let P(T) = p; then P(H) = 2p. Now set the sum of the probabilities equal to one: p        + 2p = 1
       or p = 9. Thus P(T) = p = Q and P(H)= 2 p = 6.
46                                       INTRODUCTION TO PROBABILITY                                          [CHAP. 3


       Two men, ml and m2, and three women, WI,w z and w3, are in a chess tournament.
       Those of the same sex have equal probabilities of winning, but each man is twice
       as likely to win as any woman. (i) Find the probability that a woman wins the
       tournament. (ii) If ml and W I are married, find the probability that one of them
       wins the tournament.
           Set P(wl)= p ; then P(w2)= P(w3)= p and P(ml) = P(m2)= 2 p . Next set the sum of the
                                                                        + + + +
       probabilities of the five sample points equal to one: p p p 2 p 2 p = 1 or p = 3.
             We seek (i) P ( { w l ,w2,w3}) and (ii) P({ml, wl}).Then by definition,
                                       w3})= P(Wl) P ( W 2 )
                                P({Wl,W2,                     +   + P(w3) = 3 + 3 + 3 = +
                                                  = P(m,) + P(Wl)= 3 + 3 = $



3.8.   Let a die be weighted so that the probability of a number appearing when the die
       is tossed is proportional to the given number (e.g. 6 has twice the probability of
       appearing as 3). Let A = {even number}, B = {prime number}, C = (odd number).
       (i) Describe the probability space, i.e. find the probability of each sample point.
       (ii) Find P(A),P ( B ) and P(C).
       (iii) Find the probability that: (a) an even or prime number occurs; ( 6 ) an odd
            prime number occurs; ( c ) A but not B occurs.
       (i)   Let P(l) = p . Then P ( 2 ) = 2 p , P(3) = 3 p , P ( 4 ) = 4 p , P(5) = 5 p and P ( 6 ) = 6 p . Since the sum
                                                                     + + + + +
             of the probabilities must be one, we obtain p 2 p 3 p 4 p 5p 6 p = 1 or p = 1/21. Thus
                              P(1) = $,          P(2) =  6, P(3) = 3, P ( 4 ) = 2, P ( 5 ) = &, P ( 6 ) = 3
       (ii) P ( A ) = P ( { 2 , 4 , 6 } ) = 3,      P ( B ) = P({2,3,5}) = E,     P(C) = P({1,3,5}) = 3.
       (iii) (a) The event that an even or prime number occurs is A UB = { 2 , 4 , 6 , 3 , 5 } , or t h a t 1 does
                                                        20
                 not occur. Thus P(A U B ) = 1 - P(l) = h.
             (b) The event that an odd prime number occurs is                   B n C = {3,5}.        Thus   P(BnC) =
                                 8
                 P ( { 3 , 5 H = 5.

             (c) The event that A but not B occurs is A nBc = { 4 , 6 } . Hence P ( A nBc) = P ( { 4 , 6 } ) =        g.

FINITE EQUIPROBABLE SPACES
3.9. Determine the probability p of each event:
       (i) an even number appears in the toss of a fair die;
       (ii) a king appears in drawing a single card from an ordinary deck of 52 cards;
       (iii) a t least one tail appears in the toss of three fair coins;
       (iv) a white marble appears in drawing a single marble from an urn containing
            4 white, 3 red and 5 blue marbles.
       (i)   The event can occur in three ways (a 2 , 4 or 6 ) out of 6 equally likely cases; hence p = = f.
       (iij There are 4 kings among the 52 cards; hence p = 4 = B.
                                                                1


       (iii) If we consider the coins distinguished, then there are 8 equally likely cases: HHH,HHT,
             HTH,HTT,THH,THT,TTH,TTT.Only the first case is not favorable to the given event;
             hence p = 5.
                       7


       (iv) There are 4       + 3 + 5 = 12 marbles, of which 4 are white; hence p =            = $.
CHAP. 31                             INTRODUCTION TO PROBABILITY                                             47

3.10. Two cards are drawn a t random from an ordinary deck of 52 cards. Find the proba-
      bility p that (i) both are spades, (ii) one is a spade and one is a heart.
            There are (",") = 1326 ways to draw 2 cards from 52 cards.

      (i)   There are    (123) = 78 ways to draw 2 spades from 13 spades; hence
                                     number of ways 2 spades can be dr;=          -    78    -    1
                                                                                                  -
                                 =   number of ways 2 cards can be dra.wn             1326        17
      (ii) Since there are 13 spades and 13 hearts, there are 13.13 = 169 ways to draw a spade and a
           heart; herice p =     = 102
                                   2
                                          -

3.11. Three light bulbs are chosen a t random from 15 bulbs of which 5 are defective.
      Find the probability p that (i) none is defective, (ii) exactly one is defective, (iii) at
      least one is defective.
            There are   (135) = 455 ways to choose 3 bulbs from the 15 bu.lbs.
      (i)   Since there are 15 - 5 = 10 nondefective bulbs, there are            ('i)= 120 ways to choose 3 non-
            defective bulbs. Thus p =3 %.
                                        =
      (ii) There are 5 defective bulbs and ( y )= 45 different paiirs of nondefective bulbs; hence there
                                                                                           = z.
                                                                                       225   45
            are 5 45 = 225 ways to choose 3 bulbs of which one is d.efective. Thus p = 455
      (iii) The event that at least one is defective is the complement of the event that none are defective
            which has, by (i), probability    E.
                                             Hence p = 1- =     3 E.


3.12. Two cards are selected a t random from 10 cards numbered 1 to 10. Find the proba-
      bility p that the sum is odd if (i) the two cards are drawn together, (ii) the two
      cards are drawn one after the other without replacement, (iii) the two cards are
      drawn one after the other with replacement.
      (i)   There are    (y)= 45 ways to select 2 cards out of 10. The sum is odd if one number is odd
            and the other is even. There are 5 even numbers and 5 odd numbers; hence there are
            5 . 5 = 25 ways of choosing an even and an odd number. Thus p = =                i.
      (ii) There are 10.9 = 90 ways to draw two cards one after the other without replacement.
           There are 5 5 = 25 ways to draw an even number and then an odd number, and 5 5 = 25
           ways to draw an odd number and then an even number; hence p =    = =       9 2 :.
      (iii) There are 10.10 = 100 ways to draw two cards one :after the other with replacement. As
            in (ii), there are 5 . 5 = 25 ways to draw an even number and then a n odd number, and
                                                                                    25+25   50   1
            5.5 = 25 ways to draw an odd number and then an even number; hence p = 100 = 100 = p




3.13. Six married couples are standing in a room.
      (i) If 2 people are chosen a t random, find the probability p that (a) they are
          married, ( b ) one is male and one is female.
      (ii) If 4 people are chosen at random, find the probability p that (a) 2 married
           couples are chosen, ( b ) no married couple is among the 4, ( c ) exactly one
           married couple is among the 4.
      (iii) If the 12 people are divided into six pairs, find the probability p that (a) each
            pair is married, ( b ) each pair contains a male and a female.
48                                       INTRODUCTION TO PROBABILITY                                       [CHAP. 3


      (i)   There are    ( y ) = 66 ways t o choose 2 people from the 12 people.
            (a) There are 6 married couples; hence p =       & = A.
            (b) There are 6 ways to choose a male and 6 ways to choose a female; hence p = gs =
                                                                                                     6.6
                                                                                                            fi.
      (ii) There are  ( y ) = 495 ways to choose 4 people from the 12 people.
            (a) There are (i)= 15 ways to choose 2 couples from the 6 couples; hence p = 495
                                                                                          15
                                                                                             = 33.
                                                                                                1

                                                                                6
            (b) The 4 persons come from 4 different couples. There are t4) = 15 ways to choose 4 couples
                from the 6 couples, and there are 2 ways to choose one person from each couple. Hence
                 p = - 2.2-2.2.15
                       - 49s
                                    - 33'
             (c) This event is mutually disjoint from the preceding two events (which are also mutually
                 disjoint) and a t least one of these events must occur. Hence p          + & + = 1 or p =Is      33


      (iii) There are 2!21i:A!2!2!       = 26
                                           12!
                                               ways to partition the 12 people into 6 ordered cells with 2 people
            in each.
             (a) The 6 couples can be placed into the 6 ordered cells in 6! ways. Hence p = 12!/26 = 10,395
            (b) The six men can be placed one each into the 6 cells in 6! ways, and the 6 women can be
                                                                        12!/26 - 231 *
                placed one each into the 6 cells in 6! ways. Hence p = 8!6!


3.14. A class contains 10 men and 20 women of which half the men and half the women
      have brown eyes. Find the probability p that a person chosen a t random is a man
      or has brown eyes.
            Let A = {person is a man} and B = {person has brown eyes}.              We seek P(A U B ) .
            Then P ( A ) =     = f, P ( B ) =   i, P ( A nB) = 6= $. Thus by Theorem 3.5,
                                                   =

                             p = P ( A u B ) = P(A) + P(B)- P ( A n B ) = g + + - Q = Q



UNCOUNTABLE UNIFORM SPACES
3.15. A point is selected at random inside a circle. Find the
      probability p that the point is closer to the center of the
      circle than to its circumference.
          Let S denote the set of points inside the circle with radius r,
      and let A denote the set of points inside the concentric circle of
      radius Qr. (Thus A consists precisely of those points of S which
      are closer to its center than to its circumference.) Accordingly,

                      p = P(A) =                       - -~ (-Q-T )-~ 1
                                            area o f A -
                                            area of S      rr2        4


3.16. Consider the Cartesian plane R2,and let X denote the subset of points for which
      both coordinates are integers. A coin of diameter 4 is tossed randomly onto the
      plane. Find the probability p that the coin covers a point of X.
            Let S denote the set of points inside a square with corners
                (m,n), ( m , n + l ) ,      (m+l,n),    (m+l,n+l) E X
      Let A denote the set of points in S with distance less than $ from
      any corner point. (Observe that the area of A is equal to the area
      inside a circle of radius &.) Thus a coin whose center falls in S will
      cover a point of X if and only if its center falls in a point of A.
      Accordingly,
                  p = P(A) =
                                  area of A -    ~($1' - T
                                             - - - - - x
                                   area of S        1    16    '2
           Note. We cannot take S to be all of R2 because the latter has
      infinite area.
CHAP. 31                                    INTRODUCTION TO PROBABILITY                                         49

3.17. Three points a, b and c are selected a t random from the
      circumference of a circle. Find the probability p that the
      points lie on a semicircle.
            Suppose the length of the circumference is 2s. Let x denote
       the clockwise arc length from a to b, and let y denote the clockwise
       arc length from U to c. Thus
                         O<x<2s        and O < y < 2 s                 (*)
       Let S denote the set of points in R2 for which condition (*) holds.
       Let A denote the subset of S for which any of the following condi-
       tions holds:
                    (i) x,y < s      (iii) x < s and y - x > s
                             (ii) x,y > s      (iv) y < s and x- y > s
       Then A consists of those points for which a, b and c lie on a semi-
       circle. Thus
                                area of A -- 3s2     3
                          P = area of s       4.92 - 4


MISCELLANEOUS PROBLEMS
3.18. Let A and B be events with P ( A )= Q , P(B) = 4 and P ( A nB) = -S;. Find (i) P ( A UB),
          P(Ac) and P ( B c ) , (iii) P ( A c n B C ) ,(iv) P ( A c u B c ) , (v) P ( An B c ) , (vi) P ( B n A C ) .
          P ( A u B ) = P ( A ) + P(B) - P ( A n B ) = Q + - $ = Q  +
              P(Ac) = 1 - P ( A ) = 1 - Q = Q                and    P(Bc) = 1 - P ( B ) = 1 - -& = 4
              Using De Morgan’s Law, (A uB)c = ACnBC, we have
                                       P(AcnBC) = P ( ( A u B ) c ) = 1 - P ( A u B ) = 1 - Q = Q
              Using De Morgan’s Law, ( A nB)c = ACUBC, we have
                                       P(AcuBc) = P ( ( A n B ) c ) = 1 - P ( A n B ) = 1- -S; = 3
              Equivalently,
                                   ’
                                       P(AcuBc) = P(Ac)    + P(Bc) - P(AcnBC) = Q + 4 - Q = $
              P(AnBC) = P(A\B)                = P(A)- P(AnB) = 8 - & = Q

              P(BnAC) = P ( B ) - P ( A n B ) = &--& = &


3.19. Let A and B be events with P ( A u B ) = 3, P(Ac) = Q and P ( A n R ) = &.                             Find
      (i) P(A), (ii) P(B), (iii) P ( A n B c ) .
       (i)    P(A) = 1 -P(Ac) = 1 - Q =                +
       (ii) Substitute in P ( A U B ) = P ( A )       + P(B) - P ( A nB) to obtain 3 = Q + P(B) - & or P ( B ) = -&
       (iii) P(AnBC) = P ( A ) - P ( A n B ) = Q - & = &


3.20. Find the probability p of an event if the odds that it will occur are a :b, that is,
      “ a to b”.
             The odds that an event with probability p occurs is the ratio p : (1- p ) . Hence
                   P                                                                           a
                    l - - p-
                           - b - or
                               U
                                        b p = a - a p    or     a p + b p = a    or     p = -a + b



3.21. Find the probability p of an event if the odds that it will occur are “3 to 2”.
             p
             l--p  from which p = j . We can also use the formula of the preceding problem to obtain
                    -    3
                        -5
       the answer directly: p = & =    =         & g.
50                               INTRODUCTION TO PROBABILITY                                                [CHAP. 3


3.22. A die is tossed 100 times. The following table lists the six numbers and frequency
      with which each number appeared:

                              Number            1      2       3      4       5      6

                                               14      17     20      18     15      16

      Find the relative frequency f of the event (i) a 3 appears, (ii) a 5 appears, (iii) an
      even number appears, (iv) a prime appears.
                                         number of successes
         The relative frequency f =
                                        total number of trials *
                  20                    15                     17+ 1 8 + 16                  17+ 2 0 + 15
          (i) f = 100 = 3 0   (ii) f = 100 = .15     (iii) f = 1  0   0 = .51       (iv) f = T =            .52



3.23. Prove Corollary 3.6: For any events A , B and C,
       P(AWBUC) = P ( A )        + P(B)+ P ( C ) - P ( A n B ) - P ( A n C ) - P(Bnc) + P ( A n B n C )
          Let D = B u C .      Then A n D = A n ( B u C ) = ( A n B ) u ( A n C ) and
             P(AnD) = P(AnB)      + P(AnC)- P ( A n B n A n C ) = P(AnB) + P(AnC)- P(AnBnC)
      Thus
             P(AuBuC) = P(AuD) = P(A)               + P(D) - P(AnD)
                         = P(A) + P ( B ) + P ( C ) - P ( B n C ) - [ P ( A n B )+ P ( A n C ) - P ( A n B n C ) ]
                         = P(A) + P(B) + P(C) - P(BnC) - P ( A n B ) - P(AnC) + P ( A n B n C )



3.24. Let S = {al,a2, . . ., a,} and T = { b l , bz, . . ., b t } be finite probability spaces.
      Let the number pij = P(ai)P(bj) be assigned to the ordered pair (ai, bj) in the product
      set S X T = { ( s , t ) : s E S , t E T}. Show that the pij define a probability space on
      S X T,i.e. that the pii are nonnegative and add up to one. (This is called the product
      probability space. We emphasize that this is not the only probability function that
      can be defined on the product set S x T.)
CHAP. 31                            INTRODUCTION TO PROBABILITY                                             51


                                   Supplementary Problems
SAMPLE SPACES AND EVENTS
3.25. Let A and B be events. Find an expression and exhibit the Venn diagram for the event that
      (i) A or not B occurs, (ii) neither A nor B occurs.

3.26.   Let A , B and C be events. Find an expression and exhibit the Venn diagram for the event that
        (i) exactly one of the three events occurs, (ii) at least two of the events occurs, (iii) none of
        the events occurs, (iv) A or B, but not C, occurs.

3.27.   Let a penny, a dime and a die be tossed.
        (i) Describe a suitable sample space S.
        (ii) Express explicitly the following events: A = {two heads and a n even number appear},
              B = {a 2 appears}, C = {exactly one head and a prime number appear}.
        (iii) Express explicitly the event t h a t (a)A and B occur, (b) only B occurs, (c) B or C occurs.


FINITE PROBABILITY SPACES
3.28. Which function defines a probability space on S = {al,a2,a,}'?
                                                   ...
      (i) P(al) = 6, P ( a 2 )= 1,
                                8 P(a3 ) = 4     (111) P(a1) = Q, P(a2) =       a,
                                                                              P(a,) =       4
      (ii) P(ai) = 3,         = -&, P(a3) =   +                                       ) 8
                                                                         ) 9, ~ ( a , =
                                                 (iv) p(al) = 0, ~ ( a , =

3.29.   Let P be a probability function on S = { a l , a 2 , a 3 } .Find P(al) if (i) P(a2) = g and P(a3) = $,
        (ii) P(al) = 2P(a2) and P(a3) = $, (iii) P({a2,a,}) = 2P(a1), (iv) P(a,) = 2 P ( a 2 ) and
        P(a2)= 3 P ( a , ) .

3.30.   A coin is weighted so that heads is three times as likely to appear as tails. Find P(H)and P(T).

3.31.   Three students A , B and C are in a swimming race. A and B have the same probability of winning
        and each is twice a s likely to win as C. Find the probability that B or C wins.

3.32.   A die is weighted so that the even numbers have the same chance of appearing, the odd numbers
        have the same chance of appearing, and each even number is twice as likely to appear as any
        odd number. Find the probability that (i) an even number appears, (ii) a prime number appears,
        (iii) an odd number appears, (iv) a n odd prime number appears.

3.33.   Find the probability of an event if the odds that i t will occur are (i) 2 to 1, (ii) 5 to 11.

3.34.   In a swimming race, the odds that A will win are 2 to 3 and. the odds t h a t B will win are 1 to 4.
        Find the probability p and the odds that A or B wins the race.


FINITE EQUIPROBABLE SPACES
3.35. A class contains 5 freshmen, 4 sophomores, 8 juniors and 3 seniors. A student is chosen at random
      to represent the class. Find the probability that the student is (i) a sophomore, (ii) a senior,
      (iii) a junior or senior.

3.36.   One card is selected a t random from 50 cards numbered 1 to 50. Find the probability t h a t the
        number on the card is (i) divisible by 5, (ii) prime, (iii) ends in the digit 2.

3.37.   Of 10 girls in a class, 3 have blue eyes. If two of the girls are chosen at random, what is the
        probability that (i) both have blue eyes, (ii) neither has blue eyes, (iii) at least one has blue eyes?

3.38.   Three bolts and three nuts are put in a box.          If two parts are chosen at random, find the
        probability that one is a bolt and one a nut.
52                                    INTRODUCTION TO PROBABILITY                                           [CHAP. 3


3.39.   Ten students, A , B , . . ., are in a class. If a committee of 3 is chosen at random from the class,
        find the probability that (i) A belongs to the committee, (ii) B belongs to the committee,
        (iii) A and B belong to the committee, (iv) A or B belongs to the committee.

3.40.   A class consists of 6 girls and 10 boys. If a committee of 3 is chosen at random from the class,
        find the probability that (i) 3 boys are selected, (ii) exactly 2 boys are selected, (iii) at least one
        boy is selected, (iv) exactly 2 girls are selected.

3.41.   A pair of fair dice is tossed.     Find the probability that the maximum of the two numbers is
        greater than 4.

3.42.   Of 120 students, 60 are studying French, 60 are studying Spanish, and 20 are studying French
        and Spanish. If a student is chosen at random, find the probability that the student (i) is studying
        French or Spanish, (ii) is studying neither French nor Spanish.

3.43.   Three boys and 3 girls sit in a row. Find the probability that                (i) the 3 girls sit together,
        (ii) the boys and girls sit in alternate seats.


NONCOUNTABLE UNIFORM SPACES
3.44. A point is selected at random inside an equilateral triangle whose side length is 3. Find the
      probability that its distance to any corner is greater than 1.

3.45.   A coin of diameter -& is tossed randomly onto the Cartesian plane R2. Find the probability that the
        coin does not intersect any line whose equation is of the form (a)x = k, ( b ) x             +
                                                                                           = k, (c) x = k
        or y = k. (Here k is an integer.)

3.46.   A point X is selected a t random from a line segment A B with midpoint 0 . Find the probability that
        the line segments A X , XB and A 0 can form a triangle.


MISCELLANEOUS PROBLEMS
3.47. Let A and B be events with P ( A u B ) = 8, P ( A n B ) = & and P(Ac) = 8. Find P ( A ) , P ( B ) and
      P ( AnBe).

3.48.   Let A and B be events with P ( A ) = 8, P ( A u B ) = 3 and P(Bc) = If.            Find P ( A n B ) , P(AcnBc),
        P(AcuBc) and P ( B nAc).

3.49.   A die is tossed 50 times.      The following table gives the six numbers and their frequency of



                                      f i l
        occurrence:
                                       Number



        Find the relative frequency of the event (i) a 4 appears, (ii) an odd number appears, (iii) a prime
        number appears.

3.50.   Prove: For any events A l , A,, . . ., A,,
          P(AlU.**UA,) = XP(A,) - i7jP(A,nAj)
                                  2
                                                          + i < y < k P ( A , n A j n A k )-   ..*   2 P(A,n-nA,)


        (Remark: This result generalizes Theorem 3.5 and Corollary 3.6.)
CHAP. 31                                INTRODUCTION TO PROBABILITY                        53


                           Answers to Supplementary Problems
3.25.   (i) AuBc, (ii) ( A u B ) ~

3.26.   (i) (AnBcnCC) u (BnAcnCC) u (CnAcnBC)           (iii) ( A u B L J C ) ~
        (ii) (AnB) u (AnC) u (BnC)                      (iv) (A U B) n Cc

3.27.   (i)   S = (HH1, HH2, HH3, HH4, HH5, HH6, HT1, HT2, HT3, HT4, HT5, HT6,
                      TH1, TH2, TH3, TH4, TH5, TH6, TT1, TT2, TT3, TT4, TT5, TT6)
        (ii) A = (HH2, HH4, HH6}, B = (HH2, HT2, TH2, TT2), C = (HT2, TH2, HT3, TH3, HT5, TH5}
        (iii) (a) A n B = (HH2)
              (b) B\(AuC)   = (TT2)
              (c) B u C = (HH2, HT2, TH2, TT2, HT3, TH3, HT5, TH5)

3.28.   (i) no, (ii) no, (iii) yes, (iv) yes

3.29.

3.30.   P ( H ) = 9, P ( T ) = 4

3.31.   6
3.32.   (i) Q , (ii) 4, (iii) 9,(iv)8

3.33.

3.34.   p = #; the odds are 3 to 2.

3.35.

3.36.

3.37.

3.38.

3.39.

3.40.

3.41.

3.42.

3.43.

3.44.   1- 2 a / ( 9 6 )

3.45.

3.46.

3.47.

3.48.

3.49.
                                                                                  Chapter 4

                                    Conditional Probability
                                     and Independence
CONDITIONAL PROBABILITY
    Let E be an arbitrary event in a sample space S with P ( E ) > 0 . The probability that
an event A occurs once E has occurred or, in other words, the conditional probability of
                                I
A given E, writter. P ( A E ) , is defined as follows:
                                P ( A nE )
                  P(A1E) =
                                  P(E)
As seen in the adjoining Venn diagram, P ( A 1 E ) in a
certain sense measures the relative probability of A
with respect to the reduced space E.
    In particular, if S is a finite equiprobable space and IAJdenotes the number of elements
in an event A , then
       P(AnE) = I A n E ' ,
                                           PI
                                 P(E)= - andso P ( A I E ) =
                                                                   P ( A n E ) - IAnEI
                       IS1                                                         1El
                      ~




                                           IS1                                 -
That is,
Theorem 4.1:    Let S be a finite equiprobable space with events A and E . Then
                                             number of elements in A nE
                               P(A1E) =
                                               number of elements in E
                or
                               P ( A I E ) = number of ways A and E can occur
                                                number of ways E can occur
       Example 4.1:       Let a pair of f a i r dice be tossed. If the sum is 6, find the probability t h a t one of
                          the dice is a 2. In other words, if
                                             E = {sum is 61 = {(1,5), (2,4), (3,3), (4,219 ( 5 , W
                          and                      A = {a 2 appears on at least one die}
                          find P ( A I E).
                               Now E consists of five elements and two of them, (2,4) and (4,2), belong to A :
                          A n E = {(2,4), (4,2)}. Then P ( A 1 E) =       p.
                                On the other hand, since A consists of eleven elements,
                               A = ((2, I), (2, a, (2,3), (2,4), (2,5), (2,6>,(1,2), (3, a, (4,2), (5,219 (6, 2))
                          and S consists of 36 elements, P ( A ) =   E.
       Example 4.2:       A couple has two children. Find the probability p that both children are boys if (i>we are
                          given that the younger child is a boy, (ii) we are given that (at least) one of the children
                          is a boy.
                                The sample space for the sex of two children is S = { b b , b g , g b , g g } with
                          probability & for each point. (Here the sequence of each point corresponds to the
                          sequence of births.)
                          (i) The reduced sample space consists of two elements, {bb, ~ b }hence      ;       p =   *.
                          (ii) The reduced sample space consists of three elements, { b b , b g , g b } ; hence p =      8.

                                                         54
CHAP. 41              CONDITIONAL PROBABILITY AND INDEPENDENCE                                          55

MULTIPLICATION THEOREM FOR CONDITIONAL :PROBABILITY
    If we cross multiply the above equation defining conditional probability and use the
fact that A nE = E nA, we obtain the following useful formula.
Theorem 4.2: P ( E n A) = P(E)P(A I E)
   This theorem can be extended by induction as follows:
Corollary 4.3:   For any events A1,A*, . . .,A,,
                      P(AlnA2n * nA,)
                                                               **. A,-i)
                           = P(Ai)P(A21Ai)P(A31AinAz)***P(AnIAinA,n
   We now apply the above theorem which is called, appropriately, the multiplication
theorem.
       Example 4.3:   A lot contains 12 items of which 4 are defective. Three items are drawn at ran-
                      dom from the lot one after the other. Find the probability p that all three are
                      nondef ective.
                           The probability that the first item is nondefective is $ since 8 of 12 items are
                      nondefective. If the first item is nondefective, then the probability that the next
                      item is nondefective is&   since only 7 of the remaining 11 items are nondefective.
                      If the first two items are nondefective, then the probability that the last item is
                      nondefective is 5   since only 6 of the remaining 10 items are now nondefective.
                      Thus by the multiplication theorem,
                                                     P = -  8 -7- - 6 -- - 14
                                                          12 11 10 - 65


FINITE STOCHASTIC PROCESSES AND TREE DIAGRAMS
    A (finite) sequence of experiments in which each experiment has a finite number of
outcomes with given probabilities is called a (finite) stochastic process. A convenient
way of describing such a process and computing the probability of any event is by a tree
diagram as illustrated below; the multiplication theorem of the previous section is used to
compute the probability that the result represented by any given path of the tree does occur.
       Example 4.4:   We are given three boxes as follows:
                            Box I has 10 light bulbs of which 4 axe defective.
                            Box I1 has 6 light bulbs of which 1 is defective.
                           Box I11 has 8 light bulbs of which 3 are defective.
                      We select a box at random and then draw a bulb at random. What is the proba-
                      bility p that the bulb is defective?
                           Here we perform a sequence of two experiments:
                                (i) select one of the three boxes;
                                (ii) select a bulb which is either defective ( D ) or nondefective (N).
                      The following tree diagram describes this process and gives the probability of each
                      branch of the tree:
                                                                             n
56                    CONDITIONAL PROBABILITY AND INDEPENDENCE                                [CHAP. 4


                      The probability that any particular path of the tree occurs is, by the multiplica-
                      tion theorem, the product of the probabilities of each branch of the path, e.g.,
                                                                                    5 -5 6.
                      the probability of selecting box I and then a defective bulb is    =
                           Now since there are three mutually exclusive paths which lead t o a defective
                      bulb, the sum of the probabilities of these paths is the required probability:



       Example 4.5:   A coin, weighted so that P(H) = 8 and P(T) =             9,
                                                                          is tossed. If heads appears,
                      then a number is selected at random from the numbers 1 through 9; if tails ap-
                      pears, then a number is selected at random from the numbers 1 through 6. Find
                      the probability p that an even number is selected.
                          The tree diagram with respective probabilities is


                                                               H




                                                               .T


                          Note that the probability of selecting an even number from the numbers 1
                      through 9 is $ since there are 4 even numbers out of the 9 numbers, whereas the
                      probability of selecting an even number from the numbers 1 through 5 is 6 since
                      there are 2 even numbers out of the 5 numbers. Two of the paths lead to a n
                      even number: HE and TE. Thus
                                             P = P(E) = -3 * -9+ 3 0 g -
                                                         2 4       1 2   58
                                                                         -
                                                                       - 135

PARTITIONS AND BAYES' THEOREM
                                 .
    Suppose the events AI, A2, . .,A,, form a partition
of a sample space S; that is, the events Ai are mutually
exclusive and their union is S. Now let B be any other
event. Then
        B = SnB = (AluA2u.-uA,)nB
           = ( A l n B )U ( A 2 n B )U . - u ( A , n B )
where the A i n B are also mutually exclusive. Ac-
cordingly,
                                             +
                      P(B) = P(A1nB) P ( A 2 n B )         +  P(AnnB)
                                                               *   a   *   +
Thus by the multiplication theorem,
                                         +
             P(B) = P ( A i ) P ( BI AI) P(A2)P ( B I A2)  *   + P(An)P(B1 An) +
On the other hand, for any i, the conditional probability of Ai given B is defined by


                                                                                      I
In this equation we use (I) t o replace P(B) and use P ( A i n B ) = P(Ai)P ( B Ai) to replace
P(Ai nB), thus obtaining
Bayes' Theorem 4.4:      Suppose A I ,A2, . . .,A , is a partition of S and B is any event. Then
                         for any i,
CHAP. 41              CONDITIONAL PROBABILITY AND INDEPENDENCE                                      57

       Example 4.6:   Three machines A , B and C produce respectively 50%, 30% and 20% of the total
                      number of items of a factory. The percentages of defective output of these ma-
                      chines are 3%, 4% and 5%. If an item is selected a t random, find the probability
                      that the item is defective.
                           Let X be the event that an item is defective.
                      Then by (I) above,
                                                   +
                          P(X) = P ( A ) P ( X I A ) P ( B ) P ( X [ B )                           N
                                         + P ( C )P(X I c)
                                = (.50)(.03)   + (.30)(.04) + (.20)(..05)
                                - .037
                                -
                      Observe that we can also consider this problem as
                      a stochastic process having the adjoining tree
                      diagram.                                                                      N
       Example 4.7:   Consider the factory in the preceding example. Suppose an item is selected at
                      random and is found to be defective. Find the probability that the item was pro-
                      duced by machine A ; that is, find P(A X). I
                          By Bayes' theorem,
                                                                  PIA) P ( X I A )
                                 P ( A IX) =
                                               P ( A )P ( X I A ) +
                                                                  P ( B )P(X I B ) +
                                                                                   P ( C )P ( X I C)

                                                                          + (.20)(.05) -- _
                                                                                         15
                                           -
                                                (.50)(.03)   + (.30)(.04)
                                                               (.50)(.03)
                                                                                          37
                      In other words, we divide the probability of the required path by the probability
                      of the reduced sample space, i.e. those paths which lead to a defective item.



INDEPENDENCE
  An event B is said to be independent of an event A if the probability that B occurs is
not influenced by whether A has or has not occurred. In other words, if the probability
of B equals the conditional probility of B given A : P(B) = P(B I A ) . Now substituting
P(B)for P(B I A ) in the multiplications theorem P ( AnB) = P(A)P ( B I A ) , we obtain
                                   P ( A n B ) = P(A)P(B)
We use the above equation as our formal definition of independence.
Definition:     Events A and B are independent if P ( A n B ) = P ( A ) P ( B ) ; otherwise they
                are dependent.
       Example 4.8:   Let a fair coin be tossed three times; we obtain the equiprobable space
                                  S = {HHH, HHT, HTH, HT'I', THH, THT, TTH, TTT}
                      Consider the events
                                 A = {first toss is heads},     B = {second toss is heads}
                                         C = {exactly two heads are tossed in a row}
                      Clearly A and B are independent events; this fact is verified below. On the other
                      hand, the relationship between A and C or B and C is not obvious. We claim
                      that A and C are independent, but that B and C are dependent. We have
                                                                                               1
                                      P ( A ) = P({HHH,HHT,HTH,HTT}) =                   = z
                                                                                           1
                                      P ( B ) = P({HHH, HHT, THH, THT}) =                = 2
                                                                              1
                                      P ( C ) = P({HHT,THH}) =              = 4
                      Then
                                                           1                                  1
                             P ( A n B ) = P({HHH, HHT}) = 4,        P ( A n C ) = P({HHT}) = g ,
                                                                                  1
                                               P ( B n C ) = P({HHT, THH}) =
58                        CONDITIONAL PROBABILITY AND INDEPENDENCE                                                           [CHAP. 4


     Accordingly,
                                     1 1   1
                    P ( A )P ( B ) = 2 5 = - = P ( A n B ) ,                    and so A and B are independent;
                                            4
                                     1 1
                    P ( A )P ( C ) = 2 4 = a = P ( A nC),                       and so A and C are independent;

                                           1
                    P ( B )P(C) =   0
                                         = - # P ( B nC ) ,                     and so B and C are dependent.
                                           8
    Frequently, we will postulate that two events are independent,or it will be clear from
the nature of the experiment that two events are independent.
         Example 4.9:      The probability that A hits a target is & and the probability that B hits it is 8.
                           What is the probability that the target will be hit if A and B each shoot a t the
                           target?
                               We are given that P ( A ) = b; and P ( B ) = Q , and we seek P ( A u B ) . Further-
                           more, the probability that A o r B hits the target is not influenced by what the
                           other does; that is, the event that A hits the target is independent of the event
                           that B hits the target: P ( A n B ) = P ( A )P ( B ) . Thus
                                                                         +
                                 P ( A u B ) = P ( A ) P ( B ) - P ( An B ) = P ( A )                     + P ( B ) - P ( A )P ( B )
                                             -
                                             - 1 -   +2  1 2 = __
                                                         -   -   -   O11 F


                                               4      5 4 5           20
     Three events A , B and C are independent if:
     (i) P ( A nB) = P ( A )P(B), P ( An C ) = P ( A )P(C) and P ( B nC) = P(B)P(C)
i.e. if the events are pairwise independent, and
     (ii) P ( A nB n C) = P ( A )P ( B )P(C).
   The next example shows that condition (ii) does not follow from condition (i); in other
words, three events may be pairwise independent but not independent themselves.
         Example 4.10:     Let a pair of fair coins be tossed; here S = {HH, HT, TH, TT} is a n equiprobable
                           space. Consider the events
                                                A = {heads on the first coin}   = {HH, HT}'
                                                B = {heads on the second coin} = {HH, TH}
                                                C = {heads on exactly one coin} = {HT, TH}
                           Then P ( A ) = P ( B ) = P(C) = f = f and
                                                                     1                               1                                 1
                           P ( A n B ) = P({HH}) = :,                        P ( A n C ) = P({HT}) = 4,     P ( B n C ) = ({TH}) =

                           Thus condition (i) is satisfied, i.e., the events are pairwise independent. However,
                           A n B n C = 12, and so
                                              P ( A n B n C ) = P(12,)= 0 Z P ( A ) P ( B ) P ( C )
                           In other words, condition (ii) is not satisfied and so the three events are not inde-
                           pendent.


INDEPENDENT OR REPEATED TRIALS
    We have previously discussed probability spaces which were associated with an experi-
ment repeated a finite number of times, as the tossing of a coin three times. This concept
of repetition is formalized as follows:
Definition:         Let S be a finite probability space. By n independent or repeated trials, we
                    mean the probability space T consisting of ordered n-tuples of elements of S
                    with the probability of an n-tuple defined to be the product of the probabilities
                    of its components:
                                        P((s1,s2, .. . 9 sn)) = P(Sl)P(S2) * .P(sn)
CHAP. 41                    CONDITIONAL PROBABILITY AND INDEPENDENCE                                                                 59

        Example 4.11:        Whenever three horses a, b and c race together, their respective probabilities of
                             winning are -&, and Q. In other words, S = {a, b, c } with P(a) = 3, P ( b ) = Q
                             and P(c) = 8. If the horses race twice, then the sample space of the 2 repeated
                             trials is
                                                  T = (aa, ab, ac, ba, bb, bc, ca, cb, cc>
                             For notational convenience, we have written ac for the ordered pair ( a , ~ ) .The
                             probability of each point in T is
                                                                 1 -
                                       P(aa) = P ( a ) P ( a ) = - 1 = -
                                                                       1                         1                      1
                                                                                         P(ba) = -             P(cu) = -
                                                                                                 6                     12
                                                                 1 -
                                       P(ab) = P ( a ) P ( b ) = - 1 - -
                                                                       1                         1                           1
                                                                     -                   P(bb) = 9             P ( c b ) I= -
                                                                                                                            18

                                       P ( m ) = P(a)P(c) = - - = -                      P(bc) = -             P(cc) = -1
                                                            2 6   12                             18                    36
                             Thus the probability of c winning the first race and a winning the second race is


     From another point of view, a repeated
trials process is a stochastic process whose
tree diagram has the following properties:
(i) every branch point has the same outcomes;
(ii) the probability is the same for each
branch leading to the same outcome. For
example, the tree diagram of the repeated
trials process of the preceding experiment
is as shown in the adjoining figure.


                                                                                        Vc*:
     Observe that every branch point has the
outcomes a, b and c, and each branch lead-
ing to outcome a has probability 8, each                                                                                         C

branch leading to b has probability 9, and
each leading to c has probability Q.




                        I



                                                Solved Problems
CONDITIONAL PROBABILITY IN FINITE EQUIPROBABLE SPACES
4.1. A pair of fair dice is thrown. Find the probability p that the sum is 10 or greater if
     (i) a 5 appears on the first die, (ii) a 5 appears on a t least one of the dice.
      (i)   If a 5 appears on the first die, then the reduced sample space is
                                               A = ( ( 5 , I), (5, a, (5,3), (5,4), (5,5), (5,611
            The sum is 10 or greater on two of the six outcomes: (5,6), (6,6). Hence p = $ =                            i.
      (ii) If a 6 appears on a t least one of the dice, then the reduced sample space has eleven elements:
                            B = ( ( 5 , I), (5,2), (6,3), (5,4), ( 5 , 5), ( 5 , 6 ) , (1,5), (2,5), (3,5), (4, 5), (6,5)}
            The sum is 10 or greater on three of the eleven outcomes: (5, €9, (6,6), (6,6). Hence p = $.
60                          CONDITIONAL PROBABILITY AND INDEPENDENCE                                 [CHAP. 4


4.2.   Three fair coins are tossed. Find the probability p that they are all heads if (i) the
       first coin is heads, (ii) one of the coins is heads.
             The sample space has eight elements: S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT).
       (i)   If the first coin is heads, the reduced sample space is A = {HHH,HHT,HTH,HTT}.               Since
             the coins are all heads in 1 of 4 cases, p = $.
       (ii) If one of the coins is heads, the reduced sample space is B = {HHH, HHT, HTH, HTT, THH,
            THT, TTH}. Since the coins are all heads in 1 of 7 cases, p = 3.


4.3.   A pair of fair dice is thrown. If the two numbers appearing are different, find the
       probability p that (i) the sum is six, (ii) an ace appears, (iii) the sum is 4 or less.
             Of the 36 ways the pair of dice can be thrown, 6 will contain the same numbers: ( l , l ) , (2,2),
       . .., (6,6). Thus the reduced sample space will consist of 36 - 6 = 30 elements.
       (i)   The sum 6 can appear in 4 ways: (1,5), (2,4), (4,2), ( 5 , l ) . (We cannot include (3,3) since
             the numbers are the same.) Hence p = $ = &.
       (ii) An ace can appear in 10 ways: (1,2), (1,3), . . ., (1,6) and (2,1), (3,1), . . ., ( 6 , l ) . Hence
             p=E=l
                  30   3'

       (iii) The sum of 4 or less can occur in 4 ways: (3, l), (1,3), (2,1), (1,2). Thus p = f =     i.
4.4.   Two digits are selected at random from the digits 1 through 9. If the sum is even,
       find the probability p that both numbers are odd.
          The sum is even if both numbers are even or if both numbers are odd. There are 4 even
       numbers (2,4,6,8); hence there are (:) = 6 ways to choose two even numbers. There are 5 odd
                                                  (i)
       numbers ( 1 , 3 , 5 , 7 , 9 ) ; hence there are = 10 ways to choose two odd numbers. Thus there are
         +
       6 10 = 16 ways to choose two numbers such that their sum is even; since 10 of these ways occur
       when both numbers are odd, p = =          g.

4.5.   A man is dealt 4 spade cards from an ordinary deck of 52 cards. If he is given
       three more cards, find the probability p that at least one of the additional cards is
       also a spade.
           Since he is dealt 4 spades, there are 52 - 4 = 48 cards remaining of which 13 - 4 = 9 are
       spades. There are (",", = 17,296 ways in which he can be dealt three more cards. Since there are
       48 - 9 = 39 cards which are not spades, there are              (y)
                                                              = 9139 ways he can be dealt three cards
                                                                                                   9139
       which are not spades. Thus the probability q that he is not dealt another spade is q = 17,296;
       hence p = 1 - q = 17,296.
                          8157




4.6.   Four people, called North, South, East and West, are each dealt 13 cards from an
       ordinary deck of 52 cards.
       (i) If South has no aces, find the probability p that his partner North has exactly
            two aces.
       (ii) If North and South together have nine hearts, find the probability p that East
            and West each has two hearts.
       (i)   There are 39 cards, including 4 aces, divided among North, East and West.               There are
             (y:) ways that North can be dealt 13 of the 39 cards. There are (",, ways he can be dealt 2 of
             the four aces, and )(:;   ways he can be dealt 11 cards from the 39 - 4 = 36 cards which are
             not aces. Thus                      4 35
                                                (2)(1i)       -   6 * 1 2 * 1 3 * 2 5 * 2 6 = 650
                                       P    =      T      -         36 37 38 39               2109
                                                 (13)
CHAP. 41                 CONDITIONAL PROBABILITY AND INDEPENDENCE                                              61

        (ii) There are 26 cards, including 4 hearts, divided among East and West. There are ):(;     ways
             that, say, East can be dealt 13 cards. (We need only analyze East's 13 cards since West must
             have the remaining cards.) There are       (i)
                                                         ways East can be dealt 2 hearts from 4 hearts,
             and  (t;)ways he can be dealt 11 non-hearts from the 26 --4 = 22 non-hearts. Thus




MULTIPLICATION THEOREM
4.7. A class has 12 boys and 4 girls. If three students are selected a t random from the
     class, what is the probability p that they are all boys?
             The probability that the first student selected is a boy is 12/16 since there are 12 boys out of
        16 students. If the first student is a boy, then the probability that the second is a boy is 11/15
        since there are 11 boys left out of 15 students. Finally, if the first two students selected were boys,
        then the probability that the third student is a boy is 10/14 since there are 10 boys left out of
        14 students. Thus, by the multiplication theorem, the probability that all three are boys is



             Another Method. There are ( y ) = 560 ways to select 3 students of the 16 students, and
        ( y )= 220 ways to select 3 boys out of 12 boys; hence p = = E.
             A Third Method. If the students are selected one after the other, then there are 16 15 14 ways
        to select three students, and 12 11 10 ways to select three boys; hence p =       - g.=


4.8.    A man is dealt 5 cards one after the other from an ordinary deck of 52 cards. What
        is the probability p that they are all spades?
             The probability that the first card is a spade is 13/52, the second is a spade is 12/51, the third
        is a spade is 1.1/50, the fourth is a spade is 10/49, and the last is a spade is 9/48. (We assumed in
                                                                        13
        each case that the previous cards were spades.) Thus p = 55 ' j ~50
                                                                            12 11 10 9
                                                                                              -
                                                                                      * z= 66,640
                                                                                              33
                                                                                                  *




4.9.    An urn contains 7 red marbles and 3 white marbles. Three marbles are drawn from
        the urn one after the other. Find the probability p that the first two are red and
        the third is white.
            The probability that the first marble is red is 7/10 since there are 7 red marbles out of 10
        marbles. If the first marble is red, then the probability that the second marble is red is 6/9 since
        there are 6 red marbles remaining out of the 9 marbles. If the first two marbles are red, then
        the probability that the third marble is white is 3/8 since there are 3 white marbles out of the
        8 marbles in the urn. Hence by the multiplication theorem,
                                                      7 6 3 = -
                                                  p = G.5.s    7
                                                              40



4.10.   The students in a class are selected at random, one after the other, for an examina-
        tion. Find the probability p that the boys and girls in the class alternate if (i) the
        class consists of 4 boys and 3 girls, (ii) the class consists of 3 boys and 3 girls.
        (i)   If the boys and girls are to alternate, then the first student examined must be a boy. The
              probability that the first is a boy is 4/7. If the first is a boy, then the probability that the
              second is a girl is 3/6 since there are 3 girls out of 6 students left. Continuing in this manner,
              we obtain the probability that the third is a boy is 3/5, the fourth is a girI is 2/4, the fifth is a
              boy is 2/3, the sixth is a girl is 1/2, and the last is a boy is 1/1. Thus
                                              p = -f.6.5.4.3*2.i
                                                  4 3 3 2 2 1 1 = 35
                                                                   1
62                          CONDITIONAL PROBABILITY AND INDEPENDENCE                                               [CHAP.4

        (ii) There are two mutually exclusive cases: the first pupil is a boy, and the first is a girl. If the
             first student is a boy, then by the multiplication theorem the probability p1 that the students
             alternate is


                    If the first student is a girl, then by the multiplication theorem the probability p 2 that
                the students alternate is
                                                               3.3.2.2.1.L      = 1
                                                    I P 2 = z 5 4 3 2 1                 20




MISCELLANEOUS PROBLEMS ON CONDITIONAL PROBABILITY
4.11. In a certain college, 25% of the students failed mathematics, 15% of the students
      failed chemistry, and 10% of the students failed both mathematics and chemistry.
      A student is selected a t random.
        (i) If he failed chemistry, what is the probability that he failed mathematics?
        (ii) If he failed mathematics, what is the probability that he failed chemistry?
        (iii) What is the probability that he failed mathematics or chemistry?
                Let M = (students who failed mathematics} and            C = (students who failed chemistry}; then
                                          P(M) = .25,          P(C) = .15, P ( M n C ) = .10
        (i)     The probability that a student failed mathematics, given that he has failed chemistry is
                                              P(M1C) = P ( M n C ) - -  .10 - -2
                                                            P(C) - .15 - 3
                                                                   ~




        (ii) The probability that a student failed chemistry, given that he has failed mathematics is
                                            P ( C I M ) = P(CnM) - - -.10 - 2
                                                                          - -5
                                                           P(M)       .25
                                                                   ~




        (iii)                P(MUC) = P(M)         + P(C>-P(MnC) = .25 + .15                 -.
                                                                                                              3
                                                                                                              -
                                                                                                  .10 = .30 = 10


4.12.   Let A and B be events with P ( A ) = 8, P(B) = Q and P ( A nB) = t. Find (i) P ( A I B),
        (ii) P(B I A ) , (iii) P ( AU B ) , (iv) P(AcI Bc), (v) P(BcI Ac).



                P(AuB) = P(A)      + P ( B ) - P ( A n B ) = -21+ -31 - -41 --1 -
                                                                                7
                                                                                2
                First compute P(Bc) and P(AcnBc). P(Bc) = 1 - P ( B ) = 1 Q = Q. By De Morgan's   -
                               ~ AcnBc; hence P(AcnBC) = P((AuB)c) = 1 - P ( A U B ) = 1 -
                law, ( A u B ) =                                                           = 6.
                     Thus P(AcIBC) =
                                            P ( A c n B C )=   & -5
                                              P(W              3       8'

                P(Ac) = 1 - P ( A ) = 1 -   + = +. Then P(Bc I Ac) = P(BcnAc) --
                                                                               A =g
                                                                       P(Ac)   8 6'

4.13.       A and B be events with P ( A ) = 8, P(B) = Q and P ( A U B ) = f. Find P ( A B )                           I
        and P(B I A ) .
                                                                                    +
                First compute P ( AnB) using the formula P ( A U B ) = P ( A ) P(B) - P ( A nB):
                                       3     3 5                                   1
                                          = g+g-P(AnB)           or P ( A n B ) = 4
CHAP. 41                 CONDITIONAL PROBABILITY AND INDEPENDENCE                                               63

4.14.   Find P(B ( A )if (i) A is a subset of B, (ii) A and B are mutually exclusive.
        (i)   If A is a subset of B, then whenever A occurs B must occur; hence P ( B I A ) = 1. Alternately,
              if A is a subset of B then A n B = A ; hence




                                    6)                                              (ii)

        (ii) If A and B are mutually exclusive, i.e. disjoint, then whenever A occurs B cannot occur; hence
             P ( B I A ) = 0 . Alternately, if A and B are mutually exclusive then A n B = (B; hence




4.15.   Three machines A , B and C produce respectively 60%, 30% and 10% of the total
        number of items of a factory. The percentages of defective output of these machines
        are respectively 2%, 3% and 4%. An item is selected at random and is found defective.
        Find the probability that the item was produced by machine C.
            Let X = {defective items}. We seek P(C I X),the probability that an item is produced by machine
        C given that the item is defective. By Bayes’ theorem,


                                                                            - -4
                                       - (.60)(.02) + (.30)(.03) + (.lO>m
                                       -              (.10)(.04)
                                                                        - 25


4.16.   In a certain college, 4% of the men and 1%of the women are taller than 6 feet.
        Furthermore, 60% of the students are women. Now if a student is selected at
        random and is taller than 6 feet, what is the probability that the student is a woman?
           Let A = {students taller than 6 feet}. We seek P ( W I A ) , the probability that a student is a
        woman given that the student is taller than 6 feet. By Bayes’ theorem,
                                        W W Y AI W)             -       (.60)(.01)                     -
                                                                                                       - -3
                   P(w A ) = P ( W )P ( A I W )+ P(M)P ( A I M) - (.60)(.01)+ (.40)(.04)                   11


4.17.   Let E be an event for which P ( E ) > 0. Show that the conditional probability function
        P(* I E) satisfies the axioms of a probability space; that is,
        [PI] For any event A, 0 4 P ( A 1 E ) 1.
        [P2] For the certain event S, P(SI E) = 1.
        [PSI If A and B are mutually exclusive, then P(A uB I E) = P ( A[ E) P(B I E).                 +
        [PiJ If AI, A2, ... is a sequence of mutually exclusive events, then
                                  P(AlUA2U . * * !E)= P ( A I I E ) + P ( A 2 I E ) +      0   .   .




        (i)   We have A nE c E; hence P ( An E ) f P(E). Thus P ( A \ E) = - n E ) - 1 and is also non-
              negative. That is, 0 f P ( A I E ) f 1 and so [PI]holds.     P(E)
64                        CONDITIONAL PROBABILITY AND INDEPENDENCE                                          [CHAP. 4


        (5) We have S n E = E; hence P(S 1 E) = -      - -= 1. Thus [P,] holds.
                                                P(SnE) -
                                                 P(E)    P(E)
        (iii) If A and B are mutually exclusive events, then so are A n E and B n E .                    Furthermore,
              ( A u B ) n E = ( A n E ) u ( B n E ) . Thus
                                P ( ( Au B ) n E ) = P ( ( An E ) u (BnE))= P ( An E )     + P(BnE)
             and therefore




             Hence [PSI holds.

                                                                                                     . Thus
        (iv) Similarly if A , , A,, .. . are mutually exclusive, then so are A , n E , A , n E , . . .
                  P ( ( A , u A , u . . . ) n E ) = P ( ( A , n E )U ( A , n E ) U
                                                                           . a - )              +
                                                                                       = P(A,nE) P(A,nE)   + -..
             and therefore
                P ( A , u A , u * * *I E ) =
                                                  P ( ( A , u A , u . - . ) n E ) - P(A,nE)+P(A,nE)
                                                                                  -
                                                                                                     +
                                                             P(E)                           P(E)




FINITE STOCHASTIC PROCESSES
    A box contains three coins; one coin is fair, one coin is two-headed, and one coin is
4.18.
     weighted so that the probability of heads appearing is 9. A coin is selected at
     random and tossed. Find the probability p that heads appears.
             Construct the tree diagram as shown in Figure (a)below. Note that I refers to the fair coin,
        I1 to the two-headed coin, and I11 to the weighted coin. Now heads appears along three of the
        paths; hence
                                              L.L+L.1+1.1 = -         11
                                       p = 3 2       3       3 3      18




4.19.   We are given three urns as follows:
            Urn A contains 3 red and 5 white marbles.
             Urn B contains 2 red and 1white marble.
             Urn C contains 2 red and 3 white marbles.
        An urn is selected a t random and a marble is drawn from the urn. If the marble
        is red, what is the probability that it came from urn A ?
             Construct the tree diagram as shown in Figure (b) above.
             We seek the probability that A was selected, given that the marble is red; that is, P ( A I R).
        In order to find P ( A I R), it is necessary first to compute P ( AnR) and P(R).
             The probability that urn A is selected and a red marble drawn is +*:              =          i;
                                                                                                       that is,
        P ( AnR) =  5. Since there are three paths leading to a red marble, P(R) = 1     3 ii
                                                                                           8         +
                                                                                              3 3 + I3* 5 = 173
                                                                                                            360'
        Thus
CHAP. 41                 CONDITIONAL PROBABILITY AND INDEPENDENCE                                    65




        Alternately, by Bayes’ theorem,




4.20.   Box A contains nine cards numbered 1 through 9, and box B contains five cards
        numbered 1through 5. A box is chosen a t random and a card drawn. If the number
        is even, find the probability that the card came from box A.
              The tree diagram of the process is shown in Figure (a)below.
            We seek P(A IE), the probability that A was selected, given that the number is even. The
        probability that box A and an even number is drawn is *:     = $; that is, P ( A nE) =  i.
                                                                                                Since
        there are two paths which lead t o an even number, P ( E ) = 1 9   +      -
                                                                               2*5-45.   Thus
                                                                   2




4.21.   An urn contains 3 red marbles and 7 white marbles. A marble is drawn from the
        urn and a marble of the other color is then put into the urn. A second marble is
        drawn from the urn.
        (i) Find the probability p that the second marble is red.
        (ii) If both marbles were of the same color, what is the probability p that they were
             both white?
              Construct the tree diagram as shown in Figure (b) above.
        (i)                                                 &+ & $j= E.
              Two paths of the tree lead to a red marble: p = $j

        (ii) The probability that both marbles were white is $j*5 =%. The probability that both
             marbles were of the same color, i.e. the Probability of the reduced sample space, is
             $, + $ 5 = E. Hence the conditional probability p = %/$= 5.

4.22.   We are given two urns as follows:
           Urn A contains 3 red and 2 white marbles.
           Urn B contains 2 red and 5 white marbles.
        An urn is selected at random; a marble is drawn and put into the other urn; then
        a marble is drawn from the second urn. Find the probability p that both marbles
        drawn are of the same color.
              Construct the following tree diagram:
66                          CONDITIONAL PROBABILITY AND INDEPENDENCE                                                   [CHAP. 4




            Note that if urn A is selected and a red marble drawn and put into urn B, then urn B has
        3 red marbles and 5 white marbles.
             Since there are four paths which lead to two marbles of the same color,
                                    1 3 3--.-.-                      2 7 2
                                                                                   901
                                                                                   1680

INDEPENDENCE
4.23. Let A = event that a family has children of both sexes, and let B = event that a
      family has a t most one boy. (i) Show that A and B are independent events if a
      family has three children. (ii) Show that A and B are dependent events if a family
      has two children.
        (i)   We have the equiprobable space S = { b b b , b b g , b g b , b g g , g b b , g b g , g g b , g g g ) . Here
                                                                                               P(A) = -        6 = - 3
                            A = W g , b s b , bgg7 g b b , g b g , g g b ) and so                              8     4




              Since P ( A )P ( B ) = 2     -& = Q = P ( AnB), A and B are independent.
        (ii) We have the equiprobable space                                          Here
                                                                                               1
                                      A =                                               P(A) = -
                                                                                               2
                                                                                               3
                                               B =                                      P(B) = -
                                                                                               4
                                                                                               1
                                           AnB =                                     P(AnB) = -
                                                                                               2
              Since P ( A )P ( B ) # P ( AnB), A


4.24.   Prove: If A and B are independent events, then Ac and Bc are independent events.
              P(AcnBC) = P ( ( AuB)c) = 1 - P ( A uB) = 1 - P ( A ) - P ( B ) + P ( A n B )
                       = 1 - P ( A ) - P ( B ) + P ( A )P ( B ) = [l - P ( A ) ] [ l- P(B)] = P(Ac)P(Bc)


4.25.   The probability that a man will live 10 more years is $, and the probability that his
        wife will live 10 more years is 9. Find the probability that (i) both will be alive in
        10 years, (ii) a t least one will be alive in 10 years, (iii) neither will be alive in
        10 years, (iv) only the wife will be alive in 10 years.
            Let A = event that the man is alive in 10 years, and B = event that his wife is alive in
        10 years; then P ( A ) = #, and P ( B ) = Q.
        (i)   We seek P(A nB). Since A and B a r e independent, P(A nB) = P ( A )P ( B ) =                       + = A.
CHAP. 41                   CONDITIONAL PROBABILITY AND INDEPENDENCE                                              67

        (ii) We seek P ( A U B ) . P ( A UB) = P ( A )   + P ( B ) - P ( An B ) = 5 + Q -   =   +
        (iii) We seek P(AcnBc). Now P(Ac) = 1- P ( A ) = 1 - t = 8 and P(Bc) = 1- P ( B ) = 1 - Q = 3.
              Furthermore, since Ac and Bc are independent, P(AcnBc:, = P(Ac)P(Bc) = 2 8 =                 a.
                  Alternately, since ( A uB)c = ACnBC, P(AcnBC) = P ( ( AuB)c)= 1 - P ( A U B ) = 1 -           = 4.
        (iv) We seek P ( A c n B ) . Since P(Ac) = 1- P ( A ) = 0 and Ac and B are independent (see Problem
             4.56), P ( A c n B ) = P(Ac)P(B) = %.



4.26. Box A contains 8 items of which 3 are defective, and box B contains 5 items of which
      2 are defective. An item is drawn a t random from each box.
        (i) What is the probability p that both items are nondefective?
        (ii) What is the probability p that one item is defective and one not?
        (iii) If one item is defective and one is not, what is the probability p that the defec-
              tive item came from box A ?
        (i)   The probability of choosing a nondefective item from .A is              and from B is     t. Since the
              events are independent, p =    i-!=#.
        (ii) Method 1. The probability of choosing two defective items is : o f =                   $. From (i) the
             probability that both are nondefective is        5.
                                                       Hence p = 1 - - = E40 .       &
              Method 2. The probability p 1 of choosing a defective item from A and a nondefective item
                                   9
              from B is 53 - 53 = 40. The probability p , of choosing a nondefective item from A and a
              defective item from B is f - $ =   i.                      +
                                                Hence p = pl p , = ;9~ i i 4
                                                                           1
                                                                                +
                                                                             = 19      z.
        (iii) Consider the events X = {defective item from A } and Y = {one item is defective and one
              nondefective}. We seek P(X I Y). By (ii), P ( X n Y)= p1 =        %
                                                                         and P ( Y ) = Hence    E.


4.27.   The probabilities that three men hit a target are respectively Q, t and 4. Each
        shoots once a t the target. (i) Find the probability p that exactly one of them hits
        the target. (ii) If only one hit the target, what is the probability that it was the
        first man ?
            Consider the events A = {first man hits the target}, B = {second man hits the target), and
        C = {third man hits the target}; then P ( A ) = Q, P ( B ) = & and P(C) = Q. The three events are
        independent, and P(Ac) = Q, P(Bc) = 9, P(Cc) = 8.
        (i)   Let E Z= {exactly one man hits the target}.              Then
                                        E = (AnBcnCC) U (AcnBnCc:)U (AcnBcnC)
              In other words, if only one hit the target, then it was either only the first man, AnBcnCC,
              or only the second man, AcnBnCC, or only the third man, AcnBcnC. Since the three events
              are mutually exclusive, we obtain (using Problem 4.62)
                       p   = P ( E ) = P(AnBCnCC)            +
                                                         P(AcnBnCc)            +
                                                                         P(AcnBCnC)
                                                                   +                  +
                                     = P ( A )P(Bc) P(Cc) P(Ac)P ( B ) P(Cc) P(Ac)P(Bc)P ( C )
                                       - -                                                                31
                                                                                                          72

        (ii) We seek P ( A I E), the probability that the first man hit the target given that only one man

             By (i), P ( A n E ) = P(AnBCnCC) =       &                   z;
             hit the target. Now A nE = A nBcn CC is the event that only the first man hit the target.
                                                     and P ( E ) =   hence
68                        CONDITIONAL PROBABILITY AND INDEPENDENCE                                         [CHAP. 4


INDEPENDENT TRIALS
4-28, A certain type of missile hits its target with probability .3. How many missiles
      should be fired so that there is a t least an 80% probability of hitting a target?
            The probability of a missile missing its target is .7; hence the probability that n missiles miss a
        target is (.7)". Thus we seek the smallest n for which
                                     1 - (.7)n > .8      or equivalently           (.7)n < .2
        Compute: (.7)1 = .7, (.7)2 = .49, (.7)3 = .343, (.7)4 = .2401, (.7)5 = .16807. Thus at least 6 missiles
        should be fired.


4.29.   A certain soccer team wins (W) with probability .6, loses (L) with probability .3
        and ties (T) with probability .l. The team plays three games over the weekend.
        (i) Determine the elements of the event A that the team wins a t least twice and doesn't
        lose; and find P ( A ) . (ii) Determine the elements of the event B that the team wins,
        loses and ties; and find P(B).

        (i)   A consists of all ordered triples with at least 2 W's and no L's.            Thus
                                            A = {WWW, WWT, WTW, TWW}
              Furthermore,        P ( A ) = P(WWW)     + P(WWT) + P(WTW) + P(TWW)
                                        = (.6)(.6)(.6) + (.6)(.6)(.1)4- (.6)(.1)(.6) 4- (.1)(.6)(.6)
                                        = .216 + .036 + .036 + .036 = .324

        (ii) Here B = {WLT, WTL, LWT, LTW, TWL, TLW).                        Since each element of B has probability
             (.6)(.3)(.1) = .018, P ( B ) = 6(.018) = .108.



4.30.   Let S be a finite probability space and let T be the probability space of n independent
        trials in S. Show that T is well defined; that is, show (i) the probability of each
        element of T is nonnegative and (ii) the sum of their probabilities is 1.
              If S = {a1,.. .,a,}, then T can be represented by
                                       T = {ail...ain : i,, . . ., i n = l , . . ., r }
        Since P(ai) 2 0, we have
                                         P(ail * at,) = P(Ui1)      * *   P(ai,)      0

        for a typical element ail. .ai, in T,which proves (i)
            We prove (ii) by induction on n. It is obviously true for n = 1. Therefore we consider n > 1
        and assume (ii) has been proved for n - 1. Then




        by the inductive hypothesis, which proves (ii) for n.
CHAP. 41                   CONDITIONAL PROBABILITY AND INDEPENDENCE                                                      69


                                      Supplementary Problems
CONDITIONAL PROBABILITY
4.31.A die is tossed. If the number is odd, what is the probability that it is prime?

4.32.   Three fair coins are tossed. If both heads and tails appear, determine the probability that exactly
        one head appears.

4.33.   A pair of dice is tossed. If the numbers appearing are different, find the probability that the sum
        is even.

4.34.   A man is dealt 6 red cards from an ordinary deck of 62 cards. What is the probability that they
        are all of the same suit, i.e. hearts or diamonds?

4.35.   A man is dealt 3 spade cards from an ordinary deck of 62 cards. If he is given four more cards,
        determine the probability that at least two of the additional cards are also spades.

4.36.   Two different digits are selected a t random from the digits 1 through 9.
        (i) If the sum is odd, what is the probability that 2 is one of the numbers selected?
        (ii) If 2 is one of the digits selected, what is the probability that the sum is odd?

4.37.   Four persons, called North, South, East and West, are each dealt 13 cards from an ordinary deck
        of 52 cards.
        (i) If South has exactly one ace, what is the probability that his partner North has the other
             three aces?
        (ii) If North and South together have 10 hearts, what is the probability that either East or
             West has the other 3 hearts?


4.38.   A class has 10 boys and 6 girls. Three students are selected from the class at random, one after
        the other. Find the probability that (i) the first two are boys and the third is a girl, (ii) the first
        and third are boys and the second is a girl, (iii) the first and third are of the same sex, and the
        second is of the opposite sex.

4.39.   In the preceding problem, if the first and third students selected are of the same sex and the second
        student is of the opposite sex, what is the probability that the second student is a girl?

4.40.   In a certain town, 40% of the people have brown hair, 26% have brown eyes, and 16% have both
        brown hair and brown eyes. A person is selected at random from the town.
        (i) If he has brown hair, what is the probability that he also has brown eyes?
        (ii) If he has brown eyes, what is the probability that he does not have brown hair?
        (iii) What is the probability that he has neither brown hair nor brown eyes?

4.41.   Let A and B be events with P ( A ) = 9, P(B) = f                    and P(A U B ) =      *. Find (i) P(A IB ) ,
        (ii) P(B I A), (iii) P(A nBc), (iv) P ( A I Bc).

4.42.   Let S = { a , b , c , d , e , f } with P(a) = &, P(b) =       A,     P ( c ) = Q, P(d) = A, P(e) = f and
        P(f) =  A.    Let A = { a , c , e } , B = { c , d , e , f ) and C = { b , c , f } . Find (i) P ( A 1 % (ii) P(B I c?,
        (iii) P(C I Ac), (iv) P(Ac I C).

4.43.   In a certain college, 25% of the boys and 10% of the girls are studying mathematics. The girls
        constitute 6070 of the student body. If a student is selected at random and is studying mathematics,
        determine the probability that the student is a girl.
70                       CONDITIONAL PROBABILITY AND INDEPENDENCE                                     [CHAP. 4


FINITE STOCHASTIC PROCESSES
4.44. We are given two urns as follows:
            Urn A contains 5 red marbles, 3 white marbles and 8 blue marbles.
            Urn B contains 3 red marbles and 5 white marbles.
      A fair die is tossed; if 3 or 6 appears, a marble is chosen from B, otherwise a marble is chosen
      from A. Find the probability that (i) a red marble is chosen, (ii) a white marble is chosen,
      (iii) a blue marble is chosen.

4.45.   Refer to the preceding problem. (i) If a red marble is chosen, what is the probability that it came
        from urn A ? (ii) If a white marble is chosen, what is the probability that a 5 appeared on the die?

4.46.   An urn contains 5 red marbles and 3 white marbles. A marble is selected at random from the urn,
        discarded, and two marbles of the other color are put into the urn. A second marble is then selected
        from the urn. Find the probability that (i) the second marble is red, (ii) both marbles are of the
        same color.

4.47.   Refer to the preceding problem. (i) If the second marble is red, what is the probability that the
        first marble is red? (ii) If both marbles are of the same color, what is the probability that they
        are both white?

4.48.   A box contains three coins, two of them fair and one two-headed. A coin is selected at random
        and tossed twice. If heads appears both times, what is the probability that the coin is two-headed?

4.49.   We are given two urns as follows:
             Urn A contains 5 red marbles and 3 white marbles.
             Urn B contains 1 red marble and 2 white marbles.
        A fair die is tossed; if a 3 or 6 appears, a marble is drawn from B and put into A and then a marble
        is drawn from A; otherwise, a marble is drawn from A and put into B and then a marble is drawn
        from B.
        (i) What is the probability that both marbles are red?
        (ii) What is the probability that both marbles are white?

4.50.   Box A contains nine cards numbered 1 through 9, and box B contains five cards numbered 1
        through 5. A box is chosen at random and a card drawn; if the card shows a n even number,
        another card is drawn from the same box; if the card shows an odd number, a card is drawn from
        the other box.
        (i) What is the probability that both cards show even numbers?
        (ii) If both cards show even numbers, what is the probability that they come from box A ?
        (iii) What is the probability that both cards show odd numbers?

4.51.   A box contains a fair coin and a two-headed coin. A coin is selected at random and tossed. If
        heads appears, the other coin is tossed; if tails appears, the same coin is tossed.
        (i) Find the probability that heads appears on the second toss.
        (ii) If heads appeared on the second toss, find the probability that it also appeared on the first toss.

4.52.   A box contains three coins, two of them fair and one two-headed. A coin is selected at random
        and tossed. If heads appears the coin is tossed again; if tails appears, then another coin is selected
        from the two remaining coins and tossed.
        (i) Find the probability that heads appears twice.
        (ii) If the same coin is tossed twice, find the probability that it is the two-headed coin.
        (iii) Find the probability that tails appears twice.

4.53.   Urn A contains x red marbles and y white marbles, and urn B contains x red marbles and v white
        marbles.
        (i) If an urn is selected at random and a marble drawn, what is the probability that the marble
             is red?
        (ii) If a marble is drawn from urn A and put into urn B and then a marble is drawn from urn B,
             what is the probability that the second marble is red?
CHAP. 41                CONDITIONAL PROBABILITY AND INDEPENDENCE                                                    71

4.54.   A box contains 5 radio tubes of which 2 are defective. The tubes are tested one after the other
        until the 2 defective tubes are discovered. What is the probability that the process stopped on the
        (i) second test, (ii) third test?

4.55.   Refer to the preceding problem. If the process stopped on the third test, what is the probability
        that the first tube is nonde€ective?


INDEPENDENCE
4.56. Prove: If A and B are independent, then A and Bc are independent and Ac and B are independent.

4.57.   Let A and B be events with P ( A ) = i, P ( A u B ) = 6 and P ( B ) = p. (i) Find p if A and B are
        mutually exclusive. (ii) Find p if A and B are independent. (iii) Find p if A is a subset of B.

4.58.   Urn A contains 5 red marbles and 3 white marbles, and urn B contains 2 red marbles and
        6 white marbles.
        (i)  ff a marble is drawn from each urn, what is the probability that they are both of the game
             color?
        (ii) If two marbles are drawn from each urn, what is the probability that all four marbles are
             of the same color?

4.59.   Let three fair coins be tossed. Let A = {all heads or all tails}, B = {at least two heads} and
        C = {at most two heads}. Of the pairs ( A , B ) , ( A , C ) and (B,C), which are independent and
        which are dependent?

4.60.   The probability that A hits a target is & and the probability that B hits a target is 9.
        (i) If each fires twice, what is the probability that the target will be hit at least once?
        (ii) If each fires once and the target is hit only once, what is the probability that A hit the target?
        (iii) If A can fire only twice, how many times must B fire so that there is at least a 90% proba-
              bility that the target will be hit?

4.61.   Let A and B be independent events with P ( A ) =                  and P(AUB) = 3. Find (i) P(B), (ii) P(A I B),
        (iii) P(Bc I A ) .

4.62.   Suppose A, B, C are independent events. Show that any of the combinations
                               AC, B , C ; A , Bc, C ; . . .; Ac, Bc, C ; . . .; Ac, Bc, Cc
        are also independent. Furthermore, show that A and B U C are independent; and so forth.


INDEPENDENT TRIALS
4.63. A rifleman hits (H) his target with probability .4, and hence misses (M)with probability .6. He
      fires four times. (i) Determine the elements of the event A that the man hits the target exactly
      twice; and find P ( A ) . (ii) Find the probability that the man hits the target at least once.

4.64.   A team wins (W) with probability .5, loses (L) with probability .3 and ties (T) with probability .2.
        The team plays twice. (i) Determine the sample space S and the probabilities of the elementary
        events. (ii) Find the probability that the team wins at least once.

4.65.   Consider a countably infinite probability space S = {al,u2, . . .}. Let
                                        T = S" = ((81, 82, . . ., 8,) : ~i E S }
        and let                       P(S1, 82,   *   -   9   87%)   =   ml)Pb2) - - P(s,)
                                                                                   *


        Show that T is also a countably infinite probability space. (This generalizes the definition (page 68)
        of independent trials to a countably infinite space.)
72                                CONDITIONAL PROBABILITY AND INDEPENDENCE                                         [CHAP. 4



                                  Answers to Supplementary Problems
4.31.    2                                               4.40.   (i) 8, (ii) g, (iii) Q

4.32.    4                                               4.41.   (i) 8, (ii) &, (iii) &, (iv) 8

         2
4.33.
                                                         4.42.   (i) 4, (ii)   s, (iii) 8, (iv) 3
                                                         4.43.   Q


                                                         4.44.   (i) Q

4.36.    (i) &, (ii) 8
                                                                 (ii)    +
                                                                 (iii)




                10    9       5     15
4.38.    (i)                  E =
         (ii)
                ig

                i10 g5 *9 z *15 ~ = ~
                                                         4.46.   (i) $, (ii)     2
         (iii) 15    +5
                      20
                         = 5                             4.47.   (i) E
                                                                     20 , (ii)   &
         -
         15

4.39.    ;= $
         -                                               4.48.   #
         21




                          Tree diagram for Problem 4.49                              Tree diagram f o r Problem 4.50




                                         -1

 4.50.   (i)     + $ = &,                12
                                     (ii) 2 =
                                         -      5, (iii) 6 + Q = +
                                         15


 4.51.   (i) 8, (ii)      +
CHAP. 41                         CONDITIONAL PROBABILITY AND INDEPENDENCE                          73

4.52.   (i) &     + + Q = a, (ii) 4,        (iii) &




                            \      I                                        ~N-J-D-D          1
                                C-H-    ‘ H
                   Tree diagram for Problem 4.52              Tree diagram for Problem 4.54




4.54.   (i) &, (ii) &; we must include the case where the three nondefective tubes appear first, since
        the last two tubes must then be the defective ones.

4.55.   Q

4.57.   (i)   A,(ii)+, (iii) Q
4.58.   (i)   &, (ii) 784
                       55



4.59.   Only A and B are independent.

4.60.   (i) 2, (ii) 3, (iii) 5

4.61.   (i) Q, (ii)   a, (iii) Q
4.63.   (i) A = {HHMM, H M H M , HMMH, MHHM, MHMH, MMHH},              P ( A ) = .3456
        (ii) 1- (.6)4 = 3 7 0 4

4.64.   (i) S = {WW, WL, WT, LW, LL, LT, TW, TL, TT}
        (ii) .75
                                                                         Chapter 5

                                 Random Variables

INTRODUCTION
    We recall the concept of a function. Let S and T be arbitrary sets. Suppose to each
s E S there is assigned a unique element of T ;the collection f of such assignments is called
a function (or: mapping or map) from S into T,and is written f : S + T. We write f ( s ) for
the element of T that f assigns to s E S, and call it the image of s under f o r the value of f
at s. The image f ( A ) of any subset A of S, and the preimage f-’(B)         of any subset B of T
are defined by
                   f ( A ) = { f ( s ) : s E A } and f - l ( B ) = { s : f(s)E B )
In words, f ( A )consists of the images of points of A and f - l ( B )consists of those points whose
images belong to B. In particular, the set f(S) of all the image points is called the image set
(or: image or range) of f .
    Now suppose S is the sample space of some experiment. As noted previously, the
outcomes of the experiment, i.e. the sample points of S, need not be numbers. However,
we frequently wish to assign a specific number to each outcome, e.g. the sum of the points
on a pair of dice, the number of aces in a bridge hand, or the time (in hours) it takes for a
lightbulb to burn out. Such an assignment is called a random variable; more precisely,
Definition:   A random variable X on a sample space S is a function from S into the set R
              of real numbers such that the preimage of every interval of R is an event of S.
    We emphasize that if S is a discrete space in which every subset is an event, then every
real-valued function on S is a random variable. On the other hand, it can be shown that if
S is uncountable then certain real-valued functions on S are not random variables.
                                                                                     +
    If X and Y are random variables on the same sample space S, then X Y ,X Ic, XCX and         +
XY (where k is a real number) are the functions on S defined by
                     (X  + Y)(s) = X(s)+ Y(s)             ( k X ) ( s )= k X ( s )
                     ( X + k)(s) = X ( s ) + k       ( X Y ) ( s ) = X ( s ) Y(S)
for every s E S. It can be shown that these are also random variables. (This is trivial in
the case that every subset of S is an event.)
    We use the short notation P ( X = a) and P ( a L X L b ) for the probability of the events
“ X maps into U’’ and “X maps into the interval [a,b].” That is,
                              P ( X = a ) = P({sE S : X ( s ) = a ] )
and                        P(a   X     b) = P ( { s E S : a f X ( s )    b}),
Analogous meanings are given to P ( X L a), P ( X = a, Y = b), P(u 4 X               f   b, c =G Y 4. d), etc.

                                                 74
CHAP. 51                                     RANDOM VARIABLES                                                                 75

DISTRIBUTION AND EXPECTATION OF A FINITE RANDOM VARIABLE
     Let X be a random variable on a sample space S with a finite image set; say,
X ( S ) = {xl, x2, . . . ,x,}. We make X ( S ) into a probability space by defining the probability
of xi to be P ( X = x i ) which we write f(xi). This fundion f on X ( S ) , i.e. defined by
f(xi) = P ( X = xi), is called the distribution or probabilitv function of X and is usually given
in the form of a table:




The distribution f satisfies the conditions
                              (i) f ( x i ) 2 0         and              (ii)   5f ( x i ) = 1
                                                                                i= 1

    Now if X is a random variable with the above distribution, then the mean or expectation
(or: expected value) of X , denoted by E ( X ) or px, or simply E or p, is defined by

                E(X) =        Xlf(X1)      +   x2f(x2)      + - - + xnf(x,)
                                                                     *                           =        2
                                                                                                         i=l
                                                                                                               Xif(Xi)


That is, E ( X ) is the weighted average of the possible values of X , each value weighted by its
probability.

        Example 5.1:   A pair of fair dice is tossed. We obtain the finite equiprobable space S consisting
                       of the 36 ordered pairs of numbers between 1 and 6 :
                                                            s = -31, I), (1,%           * * *,   (6,W
                       Let X assign t o each point (a,b ) in S the maximum of its numbers, i.e. X ( a , b ) =
                       max (a,b). Then X is a random variable with image set
                                                                X ( S ) = (1, 2, 3 , 4, 5 , 61
                       We compute the distribution f of X :
                             f ( 1 ) = P(X=1) = P(((1,l))) = $

                             f ( 2 ) = P ( X = 2 ) = P(W,l), ( 2 , 2 ) , (1,W) =                     2
                              f ( 3 ) = P ( X = 3 ) = q u 3 , U, (3,211 ( 3 , 3 ) , ( 2 , 3 ) , ( L 3 ) ) ) =       &
                              f(4) = P ( X = 4) = q u 4 , I), (49% ( 4 , 3 ) , (4,4), (3,4), (2,4), (1,4))) =            6
                       Similarly,
                                        f(5) = P ( X = 5 ) =             5 and           f(6) = P ( X = 6 ) =
                       This information is put in the form of a table as follows:



                                                    f(Xi)       -
                                                                36
                                                                           -
                                                                           36
                                                                                   --
                                                                                   36
                                                                                           -
                                                                                           36
                                                                                                     -
                                                                                                     36
                                                                                                               -
                                                                                                               11
                                                                                                               36



                       We next compute the mean of X :
                              E(X) =         xxif(xi)       =        1.k + 2 0 s 4- 3 . 2 + 4 * $ + 5 * & + 6 * 2        36

                                                            = 136
                                                               61 = 4.47

                            Now let Y assign to each point (a,b ) in S the sum of its numbers, i.e. Y ( a ,b ) =
                       U -I- b.Then Y is also a random variable on S with image set
                                                    Y ( S ) = ( 2 , 3 , 4, 5 , 6, 7, 8, 9, 10, 11, 12)
76                                      RANDOM VARIABLES                                                                                [CHAP. 5


                    The distribution g of Y follows:
                        c



                            Yi          2       3          4         5          6         7        8        9 1 0 1 1 1 2

                            g     (    Y    i        )      L        L      3        4        s    s    s        L    3           L         .        L
                                       36       36         36        36         36       36        36       36       36           36            36



                    We obtain, for example, g(4) =                   4
                                                       from the fact that (1,3), (2,2), and ( 3 , l ) are
                    those points of S for which the sum of the components is 4; hence
                                         g(4) = P ( Y = 4) = P(((1,3), (2,2), (391))) = zj
                                                                                                                          3


                    The mean of Y is computed as follows:
                                 E ( Y ) = x y i g ( y i ) = 2.k                     + 3 - & + -.. + 12.k = 7
                        The charts which follow graphically describe the above distributions:




                       Distribution of X                                                          Distribution of Y

                    Observe that the vertical lines drawn above the numbers on the horizontal axis are
                    proportional to their probabilities.

     Example 5.2:   A coin weighted so that P(H) = Q and P(T) = Q is tossed three times. The
                    probabilities of the points in the sample space S = (HHH, HHT, HTH, HTT,
                    THH, THT, TTH, TTT} are as follows:

                                      P(HHH) =           # a # * $        = 7-
                                                                             :           P(THH) = 8 - Q . 8 = $

                                      P(HHT) = 3.3.9                     = 2,            P(THT) = & . 3 * & =                     &
                                      P(HTH) = # * Q * Q = $                             P(TTH) = Q 0 * * 3 = $
                                      P(HTT) = 3.Q-9 =                      &            P(TTT) = 9.9.9 = 27
                       Let X be the random variable which assigns to each point in S the largest
                    number of successive heads which occurs. Thus,
                                X(TTT) = 0
                                X(HTH) = 1, X(HTT) = 1, X(THT) = 1, X(TTH) = 1
                                X(HHT) = 2, X(THH) = 2
                                X(HHH) = 3
                    The image set of X is X ( S ) = (0,1,2,3}.                           We compute L e distribution f of X:

                                 f ( 0 ) = P(TTT) = $

                                 f(1) = P({HTH, HTT, THT, TTH}) =                                  5 +% + 6 + E = E           2        10



                                 f ( 2 ) = P({HHT, THH})                   = $+ $ = $
                                 f(3) = P(HHH) = .$
CHAP. 51                               RANDOM VARIABLES                                                          77

                      This information is put in the form of a table as follows:




                      The mean of X is computed a s follows:
                            E(X) = Cxif(xi) =              O*&       + I*;: + 2 * $ + 3 0 % =    27   -
                                                                                                      -   1.85

       Example 5.3:   A sample of 3 items is selected a t random from a box containing 12 items of which
                      3 are defective. Find the expected number E of defective items.

                           The sample space S consists of the
                      ples of size 3. We note that there are:
                                                                        (12) =
                                                                         a
                                                                                 220 distinct equally likely sam-


                                                    = 84 samples with no defective items;


                                        3   -(;)    = 108 samples with 1 defective item;


                                               9 = 27 samples with 2 defective items;



                                             (3     = 1 sample with 3 defective items.

                      Thus the probability of getting 0, 1, 2 and 3 defective items is respectively 84/220,
                      108/220, 27/220 and 1/220. Thus the expected number E of defective items is


                          Remark: Implicitly we have obtained the expectation of the random variable X
                      which assigns to each sample the number of defective items in the sample.
    In a gambling game, the expected value E of the game is considered to be the value of
the game to the player. The game is said to be favorable to the player if E is positive, and
unfavorable if E is negative. If E = 0, the game is fair.

       Example 5.4:   A player tosses a fair die. If a prime number occurs he wins t h a t number of
                      dollars, but if a non-prime number occurs he loses that number of dollars. The
                      possible outcomes xi of the game with their respective probabilities f(xi) are as
                      follows:



                                             f(xJ      Q         Q           Q     Q     Q
                      The negative numbers -1, -4 and -6 correspond to the fact that the player loses
                      if a non-prime number occurs. The expected value of the game is
                                E = 2 . 8 + 3.9         + 5 . 4 - '1.9 - 4 . 8 - 6 - Q = -4
                      Thus the game is unfavorable to the player since the expected value is negative.

   Our first theorems relate the notion of expectation to operations on random variables.
Theorem 5.1:    Let X be a random variable and FG a real number. Then (i) E ( k X )= IcE(X)
                                               +
                and (ii) E ( X + k ) = E ( X ) k.
Theorem 5.2:    Let X and Y be random variables on the same sample space S. Then
                E ( X + Y ) = E(X) + E(Y).
78                                          RANDOM VARIABLES                                               [CHAP. 5


     A simple induction argument yields
Corollary 5.3:     Let XI, X2, . . .,X n be random variables on S. Then
                                          E(X1+        * .   *   + Xn) = E(X1) +        + E(Xn)

VARIANCE AND STANDARD DEVIATION
    The mean of a random variable X measures, in a certain sense, the “average” value of
X . The next concept, that of the variance of X , measures the “spread” or “dispersion” of X .
     Let X be a random variable with the following distribution:




Then the variance of X , denoted by Var ( X ) ,is defined by



where p is the mean of X . The standard deviation of X , denoted by u ~ is, the (nonnegative)
square root of Var ( X ) :
                                                ax =          vTiiF(z)
    The next theorem gives us an alternate and sometimes more useful formula for cal-
culating the variance of the random variable X .
                                  n
Theorem 5.4:      Var ( X ) =         x t f ( x i ) - p2 = E ( X 2 )- p 2 .
                                i=1

     Proof.   Using     zif(xi)       = p and                f(xi)    = 1, we have




                                               3                                                  1
        Example 5.5:   Consider the random variable X of Example 5.1 (which assigns the maximum of
                       the numbers showing on a pair of dice). The distribution of X is



                                                   f(xi)         36     36   36   36   36    36



                       and its mean is p X = 4.47. We compute the variance and standard deviation of X .
                       First we compute E ( X 2 ) :


                                                           -
                                                           -     -
                                                                 791
                                                                     = 21.97
                                                                  36
                       Hence
                        Var ( X ) = E ( X 2 ) - ,U$ = 21.97 - 19.98 = 1.99             and        ux     9 = 1.4
                                                                                                       = m
                            Now consider the random variable Y of Example 5.1 (which assigns the sum
                       of the numbers showing on a pair of dice). The distribution of Y is
CHAP. 61                                     RANDOM VARIABLES                                                                    79


                                   yi       2        3        4      5       6       7    8         9 1 0 1 1 1 2

                                  g(ll{)    r
                                            36      2
                                                    36        3
                                                              36     36
                                                                             4
                                                                             36
                                                                                     3-
                                                                                     36
                                                                                          2.
                                                                                          36
                                                                                                    4
                                                                                                    36
                                                                                                              3
                                                                                                              36
                                                                                                                   z
                                                                                                                   36
                                                                                                                          I
                                                                                                                          36


                       and its mean is by = 7. We compute the variance and standard deviation of Y.
                       First we compute E(Y2):
                         ~ ( y 2 )=        xy;g(yi)= 2 2 . 1 + 3 2 . 6 -1 ... + 122-& = 1974 = 64.8
                                                                     36                                            36

                       Hence
                           Var (Y)= E(Y2)- p z = 64.8 - 49 = 5.8                           and           ay   =         = 2.4
   We establish some properties of the variance in
Theorem 5.5:     Let X be a random variable and k a real number. Then (i) Var (X k) =                                       +
                 Var (X)and (ii) Var (kX) = k2Var(X). Hence       = uX and ukX = lkluX.

Remark 1.      There is a physical interpretation of mean and variance. Suppose at each
               point zt on the x axis there is placed a unit with mass f(zi). Then the mean is
               the center of gravity of the system, and the variance is the moment of inertia
               of the system.

Remark 2.      Many random variables give rise to the same distribution; hence we frequently
               speak of the mean, variance and standard deviation of a distribution instead
               of the underlying random variable.

Remark 3.      Let X be a random variable with mean p and standard deviation U > 0. The
               standardized random variable X* corresponding to X is defined by
                                                                   x* = X - p
                                                                                 U

               We show (Problem 5.23) that E(X*) = 0 and Var (X*)
                                                                = 1.


JOINT DISTRIBUTION
   Let X and Y be random variables on a sample space S with respective image sets
                  X ( S ) = {xi, x2, . . ., z n }             and         Y ( S ) = {yi, ~ 2 .,. .)yrn}
We make the product set




                         Yl                         'U2
                                                                           ...                   'Um                    Sum

      X1              W l , 111)                 h(x1, Y2)                 ...                Mz1, 'Urn)                f(4
      x2              h(x2, Y1)                  w 2 , 'U21                ...                w 2 ,)U
                                                                                                    ,'                  f (22)
      ...                ...                        ...                    ...                   ...                     ...
      Xn              MXn, YI)                   MZn, YZ)                  ...             h(xn, 'Urn)                  f (2,)
     Sum               Q(Y1)                      g(Y2)                    ...                 gbm)
80                                                   RANDOM VARIABLES                                        [CHAP. 6


The above functions f and g are defined by
                                       m                                           n
                          f(xi) =      C h(xi,yj)
                                       J=l
                                                             and       g(Yi) =    C h(xi,~i)
                                                                                  t= 1

i.e. f ( x i ) is the sum of the entries in the ith row and g(yj) is the sum of the entries in the jth
column; they are called the marginal distributions and are, in fact, the (individual) distribu-
tions of X and Y respectively (Problem 5.12). The joint distribution h satisfies the
conditions                                                    n  m
                            (i) h(xi,yj) 1 0      and    (ii)       h(x.i,yj) = 1
                                                                        i=1 J=1

   Now if X and Y are random variables with the above joint distribution (and respective
means p x and py), then the covariunce of X and Y,denoted by Cov ( X ,Y ) ,is defined by
            cov (x,Y) =          CJ (xi - P,)(Y~ -
                                 i s
                                                              PY)   '(xi, ~ j ) = E [ ( X - t*.X)(Y- PY)I
or equivalently (see Problem 5.18) by
                 COV(X, Y) =               c "iYjh(z,
                                           i s   I
                                                             Yj)    - PxPy    =        E(XY) - PxPy
The correlation of X and Y, denoted by p(X, Y ) ,is defined by
                                                                    Cov(X, Y)
                                                 p(X, Y ) =
                                                                       ax
The correlation p is dimensionless and has the following properties:
            (i) p(X, Y ) = p ( Y , X )                (iii) p(X, X ) = 1, p(X, -X) = -1
            (ii) -1   p f1                            (iv) p(aX   + b, cY + d) = p ( X , Y ) , if a, c # 0
We show below (Example 5.7) that pairs of random variables with identical (individual)
distributions can have distinct covariances and correlations. Thus Cov(X, Y) and p(X, Y)
are measurements of the way that X and Y are interrelated.

        Example 5.6:    A pair of fair dice is tossed. We obtain the finite equiprobable space S consisting
                        of the 36 ordered pairs of numbers between 1 and 6:
                                                             S = {(1,1>,(1,2)9 * - - 9 ( 6 , W
                        Let X and Y be the random variables on S in Example 5.1, i.e. X assigns the maxi-
                        mum of the numbers and Y the sum of the numbers to each point of S. The joint
                        distribution of X and Y follows:
CHAP. 51                                 RANDOM VARIABLES                                                  81

                      The above entry h(3,5) =      6
                                                   comes from the fact that (3,2) and (2,3) are the
                      only points in S whose maximum number is 3 and whose sum is 5; hence
                                       h(3,5) = P(X = 3, Y = 5) = P({(3,2), (2,3)}) = s
                                                                                      2

                      The other entries are obtained in a similar manner.
                            We compute the covariance and correlation of X and Y. First we compute E(XY):
                                   E(XY)   =    I:XiYj h(z,,Yj)


                      By Example 5.1, px = 4.47 and p y = 7, and by Example 5.6, ux = 1.4 and
                      ay = 2.4;
                             hence
                                 COV(X, Y) = E(XY) - pxpy      34.2 - (4.47)(7) = 2.9

                      and


       Example 5.7:   Let X and Y, and X’ and Y’ be random variables with the following joint dis-
                      tributions:


                                               10       Sum                                10        Sum

                             1         t       t          9             1          0       4         4
                             3         4       t          4             3          4       0          8
                            Sum        4       9                       Sum         9
                      Observe that X and X’, and Y and Y’have identical distributions:




                                     Distribution of X and X‘         Distribution of Y and Y‘

                      W e show that Cov (X,Y)# Cov (X’, Y’) and hence p(X, Y) Z p(X’, Y’). We first
                      compute E(XY) and E(X’Y’):
                               E(XY) = 1 . 4 . i      + 1 * l O * ) + 3 . 4 . i + 3 * 1 0 * & = 14
                                  E(X’Y‘) = 1 . 4 . 0 + 1 . l O . g + 3 * 4 . + + 3 - 1 0 * 0 = 11
                      Since p x = ,ux’= 2 and ,q= py‘ = 7,
                      Cov(X,Y) = E(XY) - pxpy = 0 and              Cov(X’,Y’) = E(X’Y’) - pxtpy’ = -3


Remark: The notion of a joint distribution h is extended to any finite number of random
        variables X,Y,. . .,Zin the obvious way; that is, h is a function on the product
        set X ( S ) X Y ( S )X - x Z(S) defined by
                             ?&(xi,yj, . . ., zk) = P(x = xi, Y = yj, . . = zk)
                                                                             - 9




INDEPENDENT RANDOM VARIABLES
    A finite number of random variables X, Y,. . .,Z on a sample space S are said to be
independent if
82                                       RANDOM VARIABLES                                         [CHAP. 5


for any values X i , yj, . . . ,zk. In particular, x and Y are independent if


Now if X and Y have respective distributions f and g, and joint distribution h, then the above
equation can be written as
                                  h(%, Yj) = f(%)S(%)
In other words, X and Y are independent if each entry h(xi,y~j)is the product of its marginal
entries.

        Example 5.8:   Let X and Y be random variables with the following joint distribution:




                       Thus the distributions of X and Y are as follows:




                                   Distribution of X                          Distribution of Y

                       X and Y are independent random variables since each entry of the joint distribu-
                       tion can be obtained by multiplying its marginal entries; that is,
                                              P ( X = xi, Y = yj) = P ( X = Xi) P ( Y = yj)
                       for each i and each j .

    We establish some important properties of independent random variables which do not
hold in general; namely,
Theorem 5.6:      Let X and Y be independent random variables. Then:
                  (i) E ( X Y ) = E(X)E(Y),
                               +                      +
                  (ii) Var ( X Y ) = Var (A? Var ( Y ) ,
                  (iii) Cov (X, Y ) = 0.
     Part (ii) in the above theorem generalizes to the very important
Theorem 5.7:      Let XI, XZ,. . .,X, be independent random variables. Then
                           Var(X1       +         +
                                               X,) = Var(X1)                   +
                                                                     . . . Var(X,)      +

FUNCTIONS OF A RANDOM VARIABLE
    Let X and Y be random variables on the same sample space S. Then Y is said to be a
function of X if Y can be represented Y = @(X) for some real-valued function cp of a real
                                                                                              +
variable; that is, if Y ( s )= cp[X(s)] for every s E S. F o r example, k X , X 2 , X k and (X k)2   +
                                                          +
are all functions of X with ~ ( x=) kx, x2, x k and (x+ k ) 2 respectively. We have the
fundamental
CHAP. 51                            RANDOM VARIABLES                                         83

Theorem 5.8:    Let X and Y be random variables on the same sample space S with
                Y = @ ( X ) . Then
                                     E(Y) =      @(Xi)f(xi)2
                                                           f= 1

                where f is the distribution function of X .

   Similarly, a random variable 2 is said to be a function of X and Y if 2 can be represented
2 = @ ( X ,Y ) where @ is a real-valued function of two real variables; that is, if


for every s E S. Corresponding to the above theorem, we have
Theorem 5.9:    Let X , Y and 2 be random variables on the same sample space S with
                2 = @ ( X ,Y ) . Then
                                      E(Z) =     @(Xi, Yi)qxi, Yi)
                                                    i, J

                where h is the joint distribution of X and Y .
    We remark that the above two theorems have been used implicitly in the preceding dis-
cussion and theorems. We also remark that the proof of Theorem 5.9 is given as a supple-
mentary problem, and that the theorem generalizes to a function of n random variables in
the obvious way.


DISCRETE RANDOM VARIABLES IN GENERAL
     Now suppose X is a random variable on S with a countably infinite image set; say
X ( S ) = {XI,X Z , . . .}. Such random variables together with those with finite image sets
(considered above) are called discrete random variables. As in the finite case, we make
X(S) into a probability space by defining the probability of xi to be f ( x i )= P ( X = xi) and
call f the distribution of X :




The expectation E(X) and variance Var ( X ) are defined by

                    E ( X ) = x,f(x1)   + Xzf(X2) + - -           =   2 xif(xr)
                                                                      i=l




when the relevant series converge absolutely. It can be shown that Var(X) exists if and
only if = E ( X ) and E(X2)both exist and that in this ca,se the formula
                                    Var (X) = E(X2)- p2
is valid just as in the finite case. When Var (X) exists, the standard deviation      is defined
as in the finite case by
                                       ux = dviG-(q

    The notions of joint distribution, independent random variables and functions of random
variables carry over directly to the general case. It can be shown that if X and Y are
defined on the same sample space S and if Var (X)and Var ( Y ) both exist, then the series
84                                      RANDOM VARIABLES                             [CHAP. 6




converges absolutely and the relation

                 Cov(X, Y )                            PxPy   =       - PXPY

holds just as in the finite case.

Remark:     To avoid technicalities we will establish many theorems in this chapter only for
            finite random variables.


CONTINUOUS RANDOM VARIABLES
     Suppose that X is a random variable whose
image set X(S) is a continuum of numbers
such as an interval. Recall from the definition
of random variables that the set { a 4x4 b }
is an event in S and therefore the probability
P ( a L X 6 b ) is well defined. We assume that
there is a piecewise continuous function
f : R-,R such that P ( a 4X b ) is equal to the
area under the graph o f f between x = a and
x = b (as shown on the right). In the lan-
guage of calculus,

                                    P ( a " X 6 b) = Sbf(Z)dx

In this case X is said to be a continuous random variable. The function f is called the
distribution or the continuous probability function (or: density function) of X ; it satisfies
the conditions
                          (i) f ( x ) 1 0 and (ii) j f ( x ) d x = 1
                                                        R

That is, f is nonnegative and the total area under its graph is 1.
     The expectation E(X)is defined by



when it exists. Functions of random variables are defined just as in the discrete case; and
it can be shown that if Y = @ ( X ) ,then



when the right side exists. The variance Var (X)is defined by



when it exists. Just as in the discrete case, it can be shown that Var (X)exists if and only
if ,U = E(X) and E(X2) both exist and then

                      Var(X)        =   E(X2) - p2 =
CHAP. 61                                        RANDOM VARIABLES                                                   85

The standard deviation ox is defined by ux = d m q when Var ( X ) exists.
    We have already remarked that we will establish many results for finite random
variables and take them for granted in the general discrete case and in the continuous case.

       Example 5.9:   Let X be a continuous random variable
                      with the following distribution:
                                                           if 0 5 x 6 2
                                                           elsewhere
                      Then
                        P(l X ZG 1.5) = area of shaded
                                                     region in diagram
                                                   - 1.11
                                                     2  2 ( 2 +$> =        *
                                                                           16

                      We next compute the expectation, variance and standard deviation of x

                                          E(X) =               xf(z)dx = i 2 - & x 2 d x =   [$I2       =
                                                                                                            4
                                                                                                            -
                                                                                                            3

                                                                                                            2


                       Var(X) = E(X2) - p2                      = 2 --
                                                                     9
                                                                       -
                                                                            16     2
                                                                                       and   ux     =   49” 7



                                                                                                            - -
                                                                                                              -   ?fi

   A finite number of continuous random variables, say X , Y , . . .,Z, are said to be inde-
pendent if for any intervals [a, a’], [b,b’], . ., [c, c’],
    P(a--’X=%’, b‘Y&b’,             .. . , C ‘ Z L C ’ )      = P(agX=%’)P(b”YLb’). * . P ( C ~ Z ~ C ’ )
Observe that intervals play the same role in the continuous case as points did in the
discrete case.


CUMULATIVE DISTRIBUTION FUNCTION
    Let X be a random variable (discrete or continuous). The cumulative distribution func-
tion F of X is the function F : R R defined by
                                             +



                                                     F(a) = P(X‘a)
If X is a discrete random variable with distribution f , then F is the “step function”
defined by
                                  F(x) =
                                                                 X i L X


On the other hand, if X is a continuous random variable with distribution f , then



In either case, F is monotonic increasing, i.e.
                                         F(a) L F ( b ) whenever                 a6b
and the limit of F to the left is 0 and to the right is 1:
                              Lim F ( x ) = 0                  and         Lim F ( x ) = 1
                             2 3 - C O                                     5-m
86                                          RANDOM VARIABLES                                            [CHAP. 6


        Example 5.10:   Let X be a discrete random variable with the following distribution:




                        The graph of the cumulative distribution function F of X follows:


                                                           ‘t
                                                                     J
                                       I
                                       I
                          4    ,
                                        I
                                       I          I                  I        I     I           I            I   )
                              -3      -2         -1        0         1        2     3           4            5


                                                                Graph of F

                        Observe that F is a “step function” with a step at the xi with height f(xi).

        Example 5.11:   Let X be a continuous random vari-
                        able with the following distribution:
                                              if O L - x r 2
                                              elsewhere
                                                                                  ‘t A  i           2    i
                                                                                   Graph of f

                        The cumulative distribution function
                        F and its graph follows:




                                                                                  Graph of F
                        Here we use the fact that for 0 L- z L- 2,




TCHEBYCHEFF’S INEQUALITY. LAW OF LARGE NUMBERS
    The intuitive idea of probability is the so-called “law of averages”, i.e. if an event A
occurs with probability p then the “average number of occurrences of A” approaches p as
the number of (independent) trials increases. This concept is made precise by the Law of
Large Numbers stated below. The proof of this theorem uses the well-known Tchebycheff’s
inequality which follows:
Theorem 5.10 (Tchebycheff’s inequality): Let X be a random variable with mean p and
                standard deviation U. Then for every E > 0,
                                                                             a2
                                                      P ( I X - pl 1 €)      -
                                                                             2
     Proof. We begin with the definition of variance:
                          2 = Var(X) = 2 ( ~ i - p ) ~ f ( a )
CHAP. 61                               RANDOM VARIABLES                                                     87

We delete all the terms in the above series for which Izi - pl < E .                 This does not increase the
value of the series, since all its terms are nonnegative; that is,

                                                 I.


where the asterisk indicates that the summation extends only over those i for which
Ix~
  - p1 2 E. Thus this new summation does not increase in value if we replace each - pI
by E; that is,
                           a2 1 E*€ 2 f ( X i ) = 8 C * f ( X i )
                                        a                              i

But E*f ( x i ) is equal to the probability that IX - pI 1 E; hence
                                     2 1.- ,2P(IX- pI s E )
Dividing by 2 we get the desired inequality.

Theorem 5.11     (Law of Large Numbers): Let X I , X Z ., . . be a sequence of independent
                 random variables with the same distribution with mean ,U and variance 2.
                 Let
                                            Sn        = (xi   + xz + - + X n ) / n
                  (called the sample mean). Then for any E > 0
                      lim P(ISn - pI        = o or equivalently                  lim P(ISn - p / < €1 = 1
                      n+m                                                        n4w

      Proof. Note first that
                      E(Sn) = E(X1)     + E(X2) +              + E(&)- -- -np =
                                                       n                         n       p
Since X I , . . . , X , are independent, it follows from Theorem 5.7 that
                   Var (XI   +    + Xn) = Var (XI) +                       + Var (X,) = na2
Therefore by Theorem 5.5(ii),



Thus by Tchebycheff’s inequality,
                                                                  02
                                       P(IS,-pl”E)
The theorem now follows from the fact that the limit of the right side is 0 as n + 00.

      The following remarks are in order.
Remark 1. We proved Tchebycheff’s inequality only for the discrete case. The con-
          tinuous case follows from an analogous proof which uses integrals instead
          of summations.

Remark 2. We proved the Law of Large Numbers only in the case that the variance of the
          Xi exists, i.e. does not diverge. We note that the theorem is true whenever E(Xi)
          exists.

Remark 3. The above Law of Large Numbers is also called the Weak Law of Large
          Numbers because of a similar, but stronger, theorem called the Strong Law
          of Large Numbers.
88                                                RANDOM VARIABLES                               [CHAP.5


                                                  Solved Problems
RANDOM VARIABLES AND EXPECTATION
5.1. Find the expectation p, variance 02 and standard deviation U of each of the following
     distributions:




              U    = d8.25      = 2.9

       (iii) p     =                      + 3(.1) + 4(.2) + 5(.3) = 3
                          z i f ( z i ) = 1(.4)
              2 z:f(zi)     = 1(.4) + 9(.1) + 16(.2) + 25(.3) = 12
              U2   = x s f f ( z i )- p2 = 12 - 9 = 3
              U    =   fi = 1.7

5.2.   A fair die is tossed. Let X denote twice the number appearing, and let Y denote 1or 3
       according as an odd or an even number appears. Find the distribution, expectation,
                                                                          +
       variance and standard deviation of (i) X, (ii) Y, (iii) X Y, (iv) XY.
             The sample space is S = {1,2,3,4,5, 6}, and each number appears with probability 9.

       (i)   X(l) = 2, X(2) = 4, X(3) = 6, X(4) = 8, X(6) = 10, X(6) = 12. Thus X ( S ) = {2,4,6,8,10,12}
             and each number has probability 8. Thus the distribution of X is as follows:




             Accordingly,
CHAP. 61                                    RANDOM VARIABLES                                                   89

      (ii) Y(l) = 1, Y(2) = 3, Y(3) = 1, Y(4) = 3, Y(6) = 1, Y(6) = 3. Hence Y(S) = (1,3} and
           g(1) = P ( Y = l ) = P({1,3,6}) =         =                g(3) = P ( Y = 3 ) = P({2,4,6}) =       = 1
                                                                                                          3
                                                              and

           Thus the distribution of Y is as follows:




           Accordingly,




      (iii) Using ( X + Y)(s) = X ( s )   + Y(s), we obtain
           (X+Y)(l) = 2 +1= 3                    (X+Y)(3) = 6 + 1 = 7                (X+Y)(6) = 10 + 1 = 11
           (X+Y)(2) = 4 + 3 = 7                  (X+Y)(4) = 8       + 3 = 11         (X+Y)(6) = 12 + 3 = 16

                                           +
           Hence the image set is (X Y ) ( S )= {3,7,11, IS} and 3 and 16 occur with probability f, and
                                                                               +
           7 and 11 with probability $. That is, the distribution of X Y is as follows:




           Thus
               E(X+Y)            + 7.: + 11*:+ 16.; = - = 9
                             = 3.:
                                                                        54
                                                                        6

                  E((X+Y)2) = 9 * $ + 49.: + 121.: + 226.; = !E = 96.7         6

                  Var(X+ Y) = E ( ( X + Y)2) - p2 = 96.7 - 92 = 14.7
                  ux+y =             = 3.8
                                          +
                  Observe that E(X) E(Y) = 7           + 2 = 9 = E(X+ Y), but Var ( X ) + Var (Y) =
           11.7   + 1 = 12.7 # Var (X Y). +
      (iv) Using (XY)(s) = X(s) Y(s), we obtain
                   (XY)(l) = 2 . 1 = 2             (XY)(3) = 6 . 1 = 6              (XY)(6) = 10.1 = 10

                   (XY)(2) = 4 . 3 = 12            (XY)(4) = 8.3 = 24               (XY)(6) = 12.3 = 36

           Hence the distribution of XY is as follows:




           Thus
                  E(XY) = 2 . 9      + 6 . 9 + 1 0 . 9 + 12.Q + 2 4 . 9 + 3 6 . 9     =      = 16




                  Var(XY) = E((XY)2) - p2           = 369.3 - 162 == 134.3
90                                             RANDOM VARIABLES                                        [CHAP. 6


5.3.   A coin weighted so that P(H) = 3 and P(T) = $ is tossed three times. Let X be the
       random variable which denotes the longest string of heads which occurs. Find the
       distribution, expectation, variance and standard deviation of X .
           The random variable X is defined on the sample space
                               S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}
       The points in S have the following respective probabilities:
                             P(HHH) = 3   4 . l4 = 27
                                      4 . a        64             P(THH) = $ - S * $ = &
                             P(HHT) = & * 3 * & = 9               P(THT) = I * & - &= 3
                                           4   4        64                 4 4        64

                             P(HTH) = $ * & * $ = &               P(TTH) = & * & * $ = &
                             P(HTT) = $ - $ * & = 3
                                                  64              P(TTT) = & * & * &   = &
       Since X denotes the longest string of heads,
                         X(TTT) = 0;     X(HTT) = 1, X(HTH) = 1, X(THT) = 1, X(TTH) = 1;
                                        X(HHT) = 2, X(THH) = 2;          X(HHH) = 3

       Thus the image set of X is X ( S ) = (0, 1,2,3}. The probability f ( x i ) of each number xi in X ( S ) is
       obtained by summing the probabilities of the points in S whose image is xi:
                               f ( 0 ) = P(TTT) = &
                               f(1) = P(HTT)+ P(HTH) + P(THT) + P(TTH) =
                               f(2) = P(HHT) + P(THH) = #
                               f(3) = P(HHH) =

       Accordingly, the distribution of X is as follows:




       Thus
                                           1           64    64     64      64




              P
                               + 1.E + 2 .6u4 + 3.27
                   - E(X) = 0 . h
                   -                               64
                                                         = - -
                                                           64
                                                              - 2.1

              E(X2) = 0.A + 1.18 + 4.18 + 9 . 2 7 = -333 = 5.2
                               b4     64       64     64

              u2       = Var (X) = E(X2) - p 2      = 5.2 - (2.1)2 = .8
              u = f i = . 9



5.4.   A fair coin is tossed until a head o r five tails occurs. Find the expected number E
       of tosses of the coin.
            Only one toss occurs if heads occurs the first time, i.e. the event H. Two tosses occur if the first
       is tails and the second is heads, i.e. the event TH. Three tosses occur if the first two are tails and
       the third is heads, i.e. the event TTH. Four tosses occur if TTTH occurs, and five tosses occur if
       either TTTTH or TTTTT occurs. Hence
                                 f(1) = P(H) =     +
                                 f(2) = P(TH) = &
                                 f(3) = P(TTH) = 4
                                 f(4)   = P(TTTH) =
                                 f ( 5 ) = P(TTTTH)    + P(TTTTT) = & + & = &
CHAP. 51                                     RANDOM VARIABLES                                         91

5.5.   Concentric circles of radius 1 and 3 inches are drawn
       on a circular target of radius 5 inches. A man re-
       ceives 10,5 or 3 points according if he hits the target,
       inside the smaller circle, inside the middle annular
       region or inside the outer annular region respectively.
       Suppose the man hits the target with probability 4
       and then is just as likely to hit one point of the target,
       as the other. Find the expected number E of points
       he scores each time he fires.
             The probability of scoring 10, 6, 3 or 0 points follows:
                              f(lo) =                        - -.--
                                        1. area of 10 points - 1 ~(1)2- 1
                                                                      - -
                                        2      area of target            2 T(5)2      50
                                       1     area of 5 points    - -1 T(3)2 - T(1)2 -
                                                                 -                    8
                                                                                    - -
                              f(5)   = -
                                       2      area of target         2       T(5)2           50
                                        1
                                        -   . area of 3 points -- -1 .71.(E;)2- ~ ( 3 ) 2 -- -16
                              f(3)   = 2      area of target         2       45)2            50




5.6.   A player tosses two fair coins. He wins $1 or $2 according as 1 or 2 heads appear.
       On the other hand, he loses $5 if no heads appear. Determine the expected value E
       of the game and if it is favorable to the player.
            The probability that 2 heads appear is &, that 2 tails (no heads) appear is  and that 1 head
       appears is 4. Thus the probability of winning $2 is      of winning $1 is 4, and of losing $6 is i.
                                                                   B,
                          +
       Hence E = 2 &- 1 9 - 5 &- = -& = -0.25. That is, the expected value of the game is minus
       254, and so is unfavorable to the player.


5.7.   A player tosses two fair coins. He wins $5 if 2 heads occur, $2 if 1head occurs and
       $1 if no heads occur. (i) Find his expected winnings. (ii) How much should he pay
       to play the game if it is to be fair?
       (i)   The pro'bability of winning $5 is a;, of winning $2 is 3, and of winning $1 is &; hence
             E = 6 & 2  + ++     1 &- = 2.50, that is, the expected winnings are $2.50.

       (ii) If he pays $2.50 to play the game, then the game is fair.


JOINT DISTRIBUTIONS, INDEPENDENT RANDOM VARIABLES
5.8. Suppose X and Y have the following joint distribution:




       (i) Find the distributions of X and Y .
       (ii) Find Cov ( X , Y ) ,i.e. the covariance of X and Y .
       (iii) Find p(X, Y ) ,i.e. the correlation of X and Y .
       (iv) Are X and Y independent random variables?
 92                                                   RANDOM VARIABLES                                [CHAP. 6


        (i)     The marginal distribution on the right is the distribution of X , and the marginal distribution
                on the bottom is the distribution of Y . Namely,




                                             Distribution of X               Distribution of Y

        (ii)




        (iii) First compute uX and ay:
                       E(X2) =       2 x : f ( x i ) = (1)(.6) + (9)(.5) = 5
                       ug   = v a r ( x ) = E(XZ)- p i = 5 - ( 2 ) ~ = 1
                       u x = f i = l
                and
                       E(Y2) =       2 yig(yj)        = (9)(.4)   + (4)(.3) + (16)(.3) = 9.6
                       U;   = Var(Y) = E(Yz) - p i = 9.6 - (.6)2 = 9.24
                       ~y   = d9.24 = 3.0

                Then


        (iv> X and Y are not independent, since P ( X = 1, Y = -3) # P ( X = 1) P ( Y = -3), i.e. the entry
             h(1,-3) = .1 is not equaI to f(l)g(-3) = (.5)(.4) = .2, the product of its marginal entries.



 5.9.   Let X and Y be independent random variables with the following distributions:




                                           Distribution of X               Distribution of Y




.''I
        Find the joint distribution h of X and Y .
             Since X and Y are independent, the joint distribution h can be obtained from the marginal
        distributions f and g. First construct the joint distribution table with only the marginal distributions
        as shown below on the left, and then multiply the marginal entries to obtain the other entries, i.e.
        set h(xi,yj) = f(xi)g(yj), as shown below on the right.
                        I        I           I          I




                1                                           .6

                2                                           .4

               Sum          .2        .5         .3
CHAP. 61                                     RANDOM VARIABLES                                           93

5.10.   A fair coin is tossed three times. Let X denote 0 or 1 according as a head or a tail
        occurs on the first toss, and let Y denote the number of heads which occur. Determine
        (i) the distributions of X and Y,(ii) the joint distribution h of X and Y,(iii) Cov (X, Y).

        (i)     The sample space S consists of the following eight points, each with probability Q:

                                   S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT)

                We have            X(HHH) = 0, X(HHT) = 0, X(HTH) = 0, X(HTT) = 0
                                   X(THH) = 1, X(THT) = 1, X(TTH) = 1, X(TTT) = 1

                and                         Y(HHH) = 3
                                            Y(HHT) = 2, Y(HTH) = 2, Y(THH) = 2
                                            Y(HTT) = 1, Y(THT) = 1, 17(TTH) = 1
                                            Y(TTT) = 0

                Thus the distributions of X and Y are as follows:




                                   Distribution of X                 Distribution of Y

        (ii) The joint distribution h of X and Y follows:




                We obtain, for example, the entry h(O,2) = P(X = 0, Y = 2) = P({HTH, HHT)) = 9.

        (iii)          px   = Xqf(xJ =          o * * + 1 - 4 = ?J
                       py   =   XIdjg(yj)   =   0-Q     + 1-9+ 2-9+ 3 - 9 = Q
                   E(XY) = 2 z f g j h ( z i , y j ) = 1 1 - 8 + 1 - 2 -Q + terms with a factor 0 = 4

                Cov(X,Y) = E(XY) - pxpy          =    4-        =     -*
5.11.   Let X be a random variable with the following distribution and let Y = P:




        Determine (i) the distribution g of Y, (ii) the joint distribution h of X and Y ,
                    Y) and p(X, Y).
        (iii) Cov (X,
94                                               RANDOM VARIABLES                                                 [CHAP. 6


        '   (i)   Since   Y = X2, the random variable Y can only take on the values 4 and 1. Furthermore,
                   g(4) = P ( Y = 4 ) = P ( X = 2 o r X = - 2 )  = P(X=2)            +
                                                                                 P(X=-2)              =     &+%       =    3
                  and, similarly, g(1) = 4. Hence the distribution g of Y is as follows:




            (ii) The joint distribution h of X and Y appears below. Note that if X = -2, then Y = 4; hence
                 h(-2,1) = 0 and h(-2,4) = f(-2) = $. The other entries are obtained in a similar way.




            Remark: This example shows that although Y is a function of X it is still possible for the
                    covariance and correlation of X and Y to be 0, as in the case when X and Y are inde-
                        pendent (Theorem 5.6).     Notice, however, that X and Y are not independent in this
                        example.


PROOFS OF THEOREMS
Remark: In all the proofs, X and Y are random variables with distributions f and g
        respectively and joint distribution h.

5.12.       Show that f(xj) =               h(x,yj) and g(gJ =            h(xj,yj), i.e. that the marginal distribu-
                                       3                              t
            tions are the (individual) distributions of X and Y.
                Let Ai = (X = xi} and B j = {Y = yj}; that is, let A, = X-l(xi) and Bj = Y-l(gj). Thus the
            B j are disjoint and S = U Bj. Hence
                                       Ai = A , n S = A i n ( u j B j ) = u j ( A i n B j )
            where the A @ ,      are also disjoint. Accordingly,
                  f ( x i ) = P ( X = xi)   = P(Ai) =      25 P ( A i n B j ) = 2J P ( X = xi,Y = g j ) =       h(xi,yj)
                                                                                                            5
            The proof for g is similar.


5.13. Prove Theorem 5.8: Let X and Y be random variables on the same sample space S
                       ) . E ( Y ) = 2 @(xi) f(xi) where f is the distribution of X.
      with Y = ( ~ ( x Then
                                                       i
                  (Proof is given for the case X is discrete and finite.)
CHAP. 51                                   RANDOM VARIABLES                                                           95

                                                      .. .
             Suppose that X takes on the values sl, ,s, and that +(s$ takes on the values yl,    y,, as      ...,
                                                                                          ..
        i runs from 1 to n. Then clearly the possible values of Y = +(X) are yl, .,y, and the diatribu-
        tion g of Y is given by
                                               dYj)   =          3          f(*S
                                                          {t : (P(Zr)=Uj)
        Therefore
                                             m                     m




        which proves the theorem.



5.14.   Prove Theorem 6.1: Let X be a random variable and k a real number.                                          Then
                                                  +
        (i) E(kX) = k E ( X ) and (ii) E(X k) = E ( X ) k.             +
            (Proof is given for the general discrete case with the assumption that E(X)exists.)




5.15.   Prove Theorem 5.2: Let X and Y be random variables on the same sample space S.
                     +
        Then E(X Y)= E(X) E(Y).       +
           (Proof is given for the general discrete case with the assumption that E(X)and E ( Y ) both
        exist.)
             Now X 4- Y = +(X,Y) where +(s,y) = s         + y. Therefore by Theorem 6.9,
                     E(X+ Y) =      77    (.i+Yj)Wi,Yj)        =   7 7 z i h ( z * d j ) +? 7   yjwwj)

        Applying Problem 5.12, we get
                               E(X + Y) =     $I .tf(s$ + 7 Yj8(2/j) = mx) +

5.16.   Prove Corollary 5.3: Let X1,X2, . . .,Xn
                                               be random variables on S. Then
                                  E(Xi+           + X,) = E(X1) +                  + E(X,)
             (Proof is given for the general discrete case with the assumption that E(Xl), . .,B(X,) all .
        exist.)
             We prove this by induction on n. The case n = 1 is trivial and the case n = 2 is just Theorem
        6.2 (Problem 6.16). For the case n > 2 we apply the case n = 2 to obtain
                              E(X1+       + xn-l+ X,) = E(X1+ + Xn-l)+ E ( X J
                                                                             " '

                                                         + - + E(X,,,) + E(&).
        and by the inductive hypothesis this becomes E ( X l )



5.17.                                         +
        Prove Theorem 5.5: (i) Var (X k) = Var ( X ) and (ii) Var (kX)= P V a r ( X ) . Hence
        u ~ =+ox ~and okX= Ik[ ox.
           By Theorem 6.1, p X + k = px + k and PkX = kpx. Also 2 xi f(s$= px and f(z$ = 1. Hence
96                                       RANDOM VARIABLES                               [CHAP. 6




5.18.   Show that


            (Proof is given for the case when X and Y are discrete and finite.)
            Since




5.19.   Prove Theorem 5.6: Let X and Y be independent random variables. Then
                                                                      +                    Y)= 0.
        (i) E ( X Y ) = E ( X ) E ( Y ) , (ii) Var ( X + Y) = Var (X) Var (Y), (iii) Cov (X,
            (Proof is given for the case when X and Y are discrete and finite.)
           Since X and Y are independent, h(zi,yj) = f ( x i )g(yj). Thus
CHAP. 51                                        RANDOM VARIABLES                                                    97

5.20.   Prove Theorem 5.7: Let X1,X2, . . .,Xn be independent random variables. Then
                            V a r ( X l + - - + X n ) = Var(Xl)+              +Var(X,)
           (Proof is given for the case when X l , . . .,X , are all discrete and finite.)
              We take for granted the analogs of Problem 5.12 and Theorem 5.9 for n random variables.              Then
                 Var ( X ,   + - - + X,) = E ( ( X l + - - + X , - pxl+ . . .
                                                        *                           +xn)2)


                                           =   2 (21+   * * *   + xn - pxl+ . . .   +x,)2 h(xl,   - - x,)
                                                                                                   *   9




                                                                                                  +        +
        where h is the joint distribution of X,,. . .,X,, and pxl+ . . . +x, = pxl * * * px, (Corollary 5.3).
        Since the X i are pairwise independent, 2 xixi h(xl, . . .,x,) = p x i p x j for i f j . Hence




        as required.


MISCELLANEOUS PROBLEMS
5.21. Let X be a continuous random variable with distribution
                                                                Qx+k      ifOgxg3
                                                                          elsewhere
        (i) Evaluate k. (ii) Find P(16 X =G 2).
        (i)   The graph of f is drawn below. Since f is a continuous probability function, the shaded
              region A must have area 1. Note A forms a trapezoid with parallel bases of lengths k and k 4,        +
                                                                     + +
              and altitude 3. Hence the area of A = +(k k +) 3 = 1 or k = &.




        (ii) P(l f X f 2) is equal to the area of B which is under the graph of f and between 5 = 1 and
             x = 2 as shown above on the right. Note f(1) = Q                   +
                                                                         = A, f ( 2 ) = Q   = A. Hence         +
             P ( l r X " 2 ) = a r e a o f B = +(&+&).1 = 9.


5.22.   Let X be a continuous random variable whose distribution f is constant on an interval,
        say Z = { u Ax 4 b } , and 0 elsewhere:
                                                k ifagx'b
                                                0 elsewhere
        (Such a random variable is said to be uniformly distributed on I.) (i) Determine k.
        (ii) Find the mean p of X . (iii) Determine the cumulative distribution function F of X .
98                                          RANDOM VARIABLES                                                      [CHAP.5

              The graph of f appears on the right. The region
              A must have area 1; hence
                                                    1
                    k ( b - a ) = 1 or     k = -
                                                  b - a
              If we view probability as weight or mass, and
              the mean as the center of gravity, then it is
              intuitively clear that
                                     - a + b
                                 P - -   2
              the point midway between a and b. We verify this mathematically using calculus:

                                   = E(X) =
                                                  R
                                                      xf(x)dx =        hb&

                                                                                           /r
                                            - - -b2-              a2       -
                                                                           - a+b
                                              2(b - U )         2(b -U )      2

        (iii) Recall that the cumulative distribution function
              F is defined by F ( k ) = P(X f k). Hence F ( k )                                                   F=l
              gives the area under the graph of f to the left
              of x = k. Since X is uniformly distributed on
              the interval I = {a f x f b } , it is intuitive that
              the graph of F should be as shown on the right,                   F=O
              i.e. F 0 before the point a, F = 1 after the                                U                   b
              point b, and F is linear between a and b. We
              verify this mathematically using calculus:                                         Graph of F


                                                        f f ( t ) d t = J-1O d t = 0
                  (a) for x < a,
                                              F(x) =
                                                          -CO

                  (b) for a f x    f   b,



                  ( c ) for x > b, F ( x ) = P ( X 6 x ) 5 P ( X 6 b) = F(b) = 1 and also 1 2 P ( X f x) = F ( x ) ;
                        hence F ( x ) = 1.


5.23. Let X be a random variable with mean ,U and standard deviation U > 0; and let X* be
      the standardized random variable corresponding to X , i.e. X* = ( X - p ) / ~ . Show
      that E ( X * ) = 0 and Var ( X * ) = 1. (Hence uXz= 1.)
              By Theorem 5.1 and Theorem 5.5,

                              E(X*) = E(+)             = +(X--)            = ,1( E ( X ) - p )   = 0

        and



5.24.   Let X be a random variable with distribution f . The rth moment M, of X is defined by
                                             M, = E ( F ) = C x ; f ( x i )
        Find the first five moments of X if X has the following distribution:




        (Note that M Iis the mean of X , and Mz is used in computing the variance and standard
        deviation of X . )
CHAP. 61                                       RANDOM VARIABLES                                        99




5.25. Let h be the joint distribution of the random variables X and Y. (i) Show that the
                                                       +
      distribution f of the sum 2 = X Y can be obtained by summing the probabilities
                                          +
      along the diagonal lines x y = z k , i.e.

                                 f(zk)   =      h(%,yj) =      h(xi, z k - x i )
                                           + gjzk=xi        zi

      (ii) Apply (i) to obtain the distribution f of the sum Z = X Y where X and Y have+
      the following joint distribution:




     (ii)




            Adding along the diagonal lines in the above table, we obtain
                         f(-2)= .06                                               + .10 + .07 = .22
                                                                       f ( 2 ) = .06
                        f(-1) = .06   + .10 = .16                      f(3) = .06 + 0 + .06 = .ll
                        f(0) = .10 + .05 + .03 = .18                   f(4) = .06 + .03 = .08
                        f(1) = 0 + .05 + .12 = .17           f(5) = .04
            In other words, the distribution of 2 = X + Y is as follows:

                                 xi      -2      -1        0     1       2        3        4     5

                                         .05     .15       .I8   .17    .22      .ll       .08   .04
100                                       RANDOM VARIABLES                                        [CHAP. 6


                                  Supplementary Problems
RANDOM VARIABLES
5.26. Find the mean p , variance US and standard deviation U of each distribution:




5.27.   A pair of fair dice is thrown. Let X be the random variable which denotes the minimum of the
        two numbers which appear. Find the distribution, mean, variance and standard deviation of X.

5.28.   A fair coin is tossed four times. Let X denote the number of heads occurring. Find the distribution,
        mean, variance and standard deviation of X.

5.29.   A fair coin is tossed four times. Let Y denote the longest string of heads occurring. Find the
        distribution, mean, variance and standard deviation of Y.

5.30.   Find the mean p, variance 02 and standard deviation U of the two-point distribution




        where p + q = 1.

5.31.   Two cards are selected at random from a box which contains five cards numbered 1, 1, 2, 2 and 3.
        Let X denote the sum and Y the maximum of the two numbers drawn. Find the distribution, mean,
                                                               +
        variance and standard deviation of (i) X,(ii) Y,(iii)X Y,(iv) XY.

EXPECTATION
5.32.A fair coin is tossed until a head or four tails occur. Find the expected number of tosses of the coin.

5.33.   A coin weighted so that P(H) = Q and P(T) = # is tossed until a head or five tails occur. Find
        the expected number of tosses of the coin.

5.34.   A box contains 8 items of which 2 are defective. A man selects 3 items from the box. Find the
        expected number of defective items he has drawn.

5.35.   A box contains 10 transistors of which 2 are defective. A transistor is selected from the box and
        tested until a nondefective one is chosen. Find the expected number of transistors to be chosen.

5.36.   Solve the preceding problem in the case that 3 of the 10 items are defective.

5.37.   The probability of team A winning any game is #. A plays team B in a tournament. The first team
        to win 2 games in a row or a total of three games wins the tournament. Find the expected number
        of games in the tournament.

5.38.   A player tosses three fair coins. He wins $5 if 3 heads occur, $3 if 2 heads occur, and $1 if only
        1 head occurs. On the other hand, he loses $15 if 3 tails occur. Find the value of the game to the
        player.

5.39.   A player tosses three fair coins. He wins $8 if 3 heads occur, $3 if 2 heads occur, and $1 if only 1
        head occurs. If the game is to be fair, how much should he lose if no heads occur?
CHAP. 51                                    RANDOM VARIABLES                                            101

5.40.   A player tosses three fair coins. He wins $10 if 3 heads occur, $5 if 2 heads occur, $3 if 1 head
        occurs and $2 if no heads occur. If the game is to be fair, how much should he pay to play the game?

JOINT DISTRIBUTION, INDEPENDENT RANDOM VARIABLES
5.41. Consider the following joint distribution of X and Y :




        Find (i) E ( X ) and E ( Y ) , (ii) Cov (X,Y),(iii) ux,uy and p(X, Y).

5.42.   Consider the following joint distribution of X and Y :




                                         Y),(iii) UX,uy and p(X, Y).
        Find (i) E(X)and E(Y),(ii) Cov (X,

5.43.   Suppose X and Y are independent random variables with the following respective distributions:




                                                                       Y)= 0.
        Find the joint distribution of X and Y , and verify that Cov (X,

5.44.   A fair coin is tossed four times. Let X denote the number of heads occurring and let Y denote the
        longest string of heads occurring (see Problems 5.28 and 5.29). (i) Determine the joint distribution
        of X and Y. (ii) Find Cov ( X , Y ) and p(X, Y).

5.45.   Two cards are selected at random from a box which contains five cards numbered 1, 1, 2, 2 and 3.
        Let X denote the sum and Y the maximum of the two numbers drawn (see Problem 6.31). (i) Deter-
        mine the joint distribution of X and Y. (ii) Find Cov ( X ,Y) and p(X, Y ) .


MISCELLANEOUS PROBLEMS
5.46. Let X be a continuous random variable with distribution

                                              f(4 =       ("
                                                        if O f x S g
                                                             0   elsewhere
                                                          *
        (i) Find: P ( 2 fX f 5 ) , P(3 f X f 7 ) and P ( X 6).
        (ii) Determine and plot the graph of the cumulative distribution function F of X.

5.47.   Let X be a continuous random variable with distribution

                                             f(4 =       { kx
                                                           0
                                                                 ifOexS5
                                                                 elsewhere
        (i) Evaluate k. (ii) Find P ( l L X 5 3), P(2 fX f 4) and P ( X .f 3).
102                                                                   RANDOM VARIABLES                                               [CHAP. 6


5.48.   Plot the graph of the cumulative distribution function F of the random variable X with distribution




5.49.   Show that uX = 0 if and only if X is a constant functwn, i.e. X(8) = k for every 8 E S,or simply
        X = k.

5.50.   If ox P 0, show that p ( X , X ) = 1 and p(X,-X) = -1.

5.51.   Prove Theorem 6.9: Let X, Y and 2 be random variables on S with 2 = @(X,Y). Then
                                                                            E(Z) = 2 “(i, Yj) wi,Yj)
                                                                                          5.4
        where h is the joint distribution of X and Y.




                                     Answers to Supplementary Problems
5.26.   (i) p = 4, f = 6.6, U = 2.3; (ii) p = 0, f = 10, U = 3.2; (iii) p = 1, Z = 2.4, U = 1.6.


               ~            ~             1            2              3         4          6         6
5.27.                                                                                     E ( X ) = 2.6, Var ( X ) = 2.1, ux = 1.4
            f(xi)           11
                            36       s
                                     36           1
                                                  36
                                                             2
                                                             36
                                                                      s
                                                                      36
                                                                               r36


5.28.




5.29.   1                                                                            1   E(Y)= 1.7, Var (Y)= 0.9, uy = 0.96



5.30.   P =        up   + bq,        u2 = pq(a             - b)2,     U    = Ia - bl*


                        x        i        2        3         4        6
5.31.   (9                                                                     E(X) = 3.6, Var ( X ) = .84, OX = -9
                       f(Xi)         .1           .4        .3        .2



        (ii)       lwl
                   I             I            I        I          I
                                                                          E(Y)= 2.3, Var (Y)= .41, uY = .64
CHAP. 61                                   RANDOM VARIABLES



                g                                  l
                                                                                                             103


        (iii)                                          E(X   + Y) = 6.9, Var (X -tY) = 2.3, u   ~ = +1.6 ~




        (iv)    9                                  1   E(XY) = 8.8, Var (XY) = 17.6, uxY = 4.2


5.32.   1618

5.33.   211181

5.34.   314

5.35.   1119

5.36.   11/8

5.37.   2318

5.38.   26# in favor of the player

5.39.

5.40.   $4.60

5.41.   (i)E(X) = 3, E(Y) = 1; (ii) Cov (X,Y)= 1.6; (iii) ux = 2, cry = 4.3, p(X, Y) = .17

5.42.   (i) E(X)= 1.4, E(Y)= 1; (ii) Cov(X, Y) = -3; (iii) OX = .49, uy = 3.1, p(X, Y) = -.3

5.43.
                                     8     Sum

               1     .21    .36      .14    .7

                2    .09    .16      .06    .3
           Sum       .3     .6       .2

5.44.




        (ii) Cov(X,Y) = .86, p(X,Y) = .89
104                                                RANDOM VARIABLES                                                 [CHAP. 6

5.45.   (i)                                                       (ii)       Cov ( X ,Y ) = 52, p ( X , Y ) = .9




5.46.   (i)    P ( 2 fX f 6 ) = 8, P(3 SX f 7) = 9, P(X 5- 6)= &




        (ii)         F(x) =
                                   t   0
                                       QX
                                       1
                                                ifx<O
                                                if 0 x 6 8
                                                ifx>8
                                                      f



                                                                                              I"
                                                                                              1




                                                                                                       Graph of F
                                                                                                                    0




5.47.   (i) k = $, (ii) P(lfX f 3) =            &, P(2 X  f   f   4) =   g, P(X 3) = &
5.48.
                                                          I

                               I
                          I    I            I     I                      I               I
                                                          o       1               I                I    f    I
                              -3                                                  3                     6



                                                              Graph of F
                                                                             Chapter 6


                               Binomial, Normal and
                                Poisson Distributions

BINOMIAL DISTRIBUTION
    We consider repeated and independent trials of an experiment with two outcomes; we
call one of the outcomes success and the other outcome failure. Let p be the probability of
success, so that q = 1- p is the probability of failure. If we are interested in the number
of successes and not in the order in which they occur, then the following theorem applies.

Theorem 6.1:    The probability of exactly k successes in n repeated trials is denoted and
                given by
                                         b ( k n, P) = G)Pk
Here (JLk) is the binomial coefficient (see page 19). Observe that the probability of no suc-
cesses is qn, and therefore the probability of a t least one success is 1- p.

       Example 6.1:   A fair coin is tossed 6 times or, equivalently, six fair coins are tossed; call heads
                      a success. Then n = 6 and p = q = Q.

                      (i)   The probability that exactly two heads occur (i.e. k = 2) is
                                                    b(2; 6,#   =        (*)2(Q)4     =

                      (ii) The probability of getting at least four heads (i.e. k = 4, 6 or 6 ) is
                             b(4; 6,   + W;6, ?J) -t W;6, Q) = (): (+I4 <#2 -t (:) (&)5 (# i-              (*I6
                                                                    =               -
                                                                          & f + 6 + 1
                                                                                    11 =
                                                                                    64   64   32


                      (iii) The probabiiity of no heads (i.e. all failures) is q6 = (+)6 = &, and so the
                            probability of at least one head is 1-- q6 = 1 - 2 6 4 = 63
                                                                                      4'




       Example 6.2:   A fair die is tossed 7 times; call a toss a success if a 6 or a 6 appears. Then n = 7,
                      p = P ( { 6 , 6 } )= Q and q = 1 - p = Q.

                      (i)   The probability that a 6 or a 6 occurs exactly 3 times (i.e. k = 3) is
                                                    M3; 7 , Q ) =   (3  (Q)3 ($14   =

                      (ii) The probability that a 5 or a 6 never occurs (i.e. all failures) is 47 = (8)' =   g;
                           hence the probability that a 6 or a 6 occurs at least once is 1 - q7 =     -.
                                                   105
106                         BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                                     [CHAP.6


    If we regard n and p as constant, then the above function P ( k ) = b ( k ; n , p ) is a dis-
crete probability distribution:

                       c            I           I                 I                  1                I                I



It is called the binomial d i s t r i b u t i o n since for k = 0,1,2, . . .,n it corresponds to the suc-
cessive terms of the binomial expansion
                           (q+p)"           =   qn   + ( Y ) q " - ' p + (;)q"-"p" +              * * *    + p"
This distribution is also called the Bernoulli distribution, and independent trials with two
outcomes are called Bernoulli trials.
      Properties of this distribution follow:

Theorem 6.2:
                                                                  Binomial distribution

                                                      I           Mean

                                                                 Variance

                                                          Standard deviation


         Example 6.3:           A fair die is tossed 180 times. The expected number of sixes is                            p   = np =
                                180 Q = 30. The standard deviation is Q =     =d        m = 5.

NORMAL DISTRIBUTION
  The normal (or: Guussiun) d i s t r i b u t i o n or curve is defined as follows:
                                                f(x) = -
                                                       1 e-M(s-w)2/u2
                                                             U        G

where ,U and U > 0 are arbitrary constants. This function is certainly one of the most
important examples of a continuous probability distribution. The two diagrams below
show the changes in f as ,U varies and as U varies. In particular, observe that these bell-
shaped curves are symmetric about x = p.
                                                                                                          f
                                                                                                          /)


                            f                                                                                  U = +




                   I        I                                X                                1                        I         X
              -2            0           2                                                -2               0            2

       Normal distributions with U fixed (U = 1)                            Normal distributions with p fixed ( p = 0)
CHAP. 61             BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                          107

   Properties of the normal distribution follow:

Theorem 6.3:

                                                         Mean               P


                                                      Variance              U2


                                                  Standard deviation        U



   We denote the above normal distribution with mean ,U and variance 2 by


If we make the substitution t = (x- p ) / a in the above formula for N ( p , 2) we obtain the
standard normal distribution or curve



which has mean ,U = 0 and variance 2 = 1. The graph of this distribution appears below.
We note that for -1 5 t 4 1 we obtain 68.2% of the area under the curve, and for
-2 A t f 2 we obtain 95.4%of the area under the curve.




   A table on page 111 gives the area under the standard normal curve between t = 0 and
any positive value of t. The symmetry of the curve about t = 0 permits us to obtain the area
between any two values of t (see Problem 6.14).
    Now let X be a continuous random variable with a normal distribution; we frequently
say that X is normally distributed. We compute the probability that X lies between a and b,
denoted by P(a--'X" b), as follows. First we change a and b into standard units
                           a' = ( U - , U ) / C    and     b' = ( b - , +
respectively. Then
           P(a X A b ) = P(a' A X * 6 b')
                        = area under the standard normal curve between a' and b'

Here X* is the standardized random variable (see page 79) corresponding to X , and hence
X * has the standard normal distribution N(0,l).
108                 BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                             [CHAP. 6


NORMAL APPROXIMATION TO THE BINOMIAL DISTRIBUTION.
CENTRAL LIMIT THEOREM
    The binomial distribution P ( k ) = b ( k ;n, p ) is closely approximated by the normal
distribution providing n is large and neither p nor q is close to zero. This property is
indicated in the following diagram where we have chosen the binomial distribution corre-
sponding to n = 8 and p = q = 8.

                   k      0      1      2        3           4    5     6        7   8

                  P(k)   2
                         256
                                 -
                                 8
                                 256
                                        -
                                        28
                                        256
                                                __
                                                56
                                                256
                                                          -
                                                          70      -
                                                                  56    -
                                                                        28    8      2
                                                            256   256   256   256    256

                         Binomial distribution with n = 8 and p = q = 8




   The above property of the normal distribution is generalized in the Central Limit
Theorem which follows. The proof of this theorem lies beyond the scope of this text.
Central Limit Theorem 6.4: Let X I ,X 2 , . . . be a sequence of independent random variables
                           with the same distribution with mean 1-1 and variance U?
                           Let


                                 Then for any interval            {U& X Lb } ,
                                                      limP(a&Z,Lb) = P(aL+'b)
                                                      n+a

                                 where + is the standard normal distribution.
                                       + +            +
    Recall that we called S n = (XI X 2 - - X n ) / n the sample mean of the random vari-
ables X I , . . .,X,. Thus 2, in the above theorem is the standardized sample mean. Roughly
speaking, the central limit theorem says that in any sequence of repeated trials the standard-
ized sample mean approaches the standard normal curve as the number of trials increase.


POISSON DISTRIBUTION
  The Poisson distribution is defined as follows:

                                              k! ' k = 0 , 1 , 2 , . . .
                               p(k;h) = -
                                        Xke-x


where X > 0 is some constant. This countably infinite distribution appears in many natural
phenomena, such as the number of telephone calls per minute a t some switchboard, the
number of misprints per page in a large text, and the number of particles emitted by a
radioactive substance. Diagrams of the Poisson distribution for various values of X follow.
CHAP. 61                  BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                                   109




 0.1



               0
                     L4   6           0
                                                                                                   I                Ill,,
                    h=l                    h=2                               h=5                           h = 10

                                     Poisson distribution for selected values of A


       Properties of the Poisson distribution follow:

Theorem 6.5:




    Although the Poisson distribution is of independent interest, it also provides us with a
close approximation of the binomial distribution for small k provided that p is small and
  = np (see Problem 6.27). This is indicated in the following table.


              F
              I
                   Binomial

                   Poisson
                                     0

                                    .366

                                    ,368
                                                  1

                                                 .370

                                              .368
                                                                  2

                                                                .185

                                                                .184
                                                                                3

                                                                              .0610

                                                                              ,0613
                                                                                         4

                                                                                        .0149

                                                                                       .0153
                                                                                                  .0029

                                                                                                 .00307
                                                                                                       6




                                                                   ~~




                                  Comparison of Binomial and Poisson distributions
                                    with n = 100, p = U100 and X = np = 1


MULTINOMIAL DISTRIBUTION
   The binomial distribution is generalized as follows. Suppose the sample space of an
experiment is partitioned into, say, s mutually exclusive events AI, AB, . . .,A, with respective
probabilities p1,p2, . . .,p,. (Hence p1 +p2                  +
                                                   +p, = 1.) Then:

Theorem 6.6:         In n repeated trials, the probability that AI occurs k~ times, A2 occurs k2
                     times, . . ., and A, occurs k, times is equal t o


                     where kl      + kz + - + k, = n.
    The above numbers form the so-called muZtinomiaZ distribution since they are precisely
the terms in the expansion of ( P I + p2              +          +
                                            - p,)". Observe that if s = 2 then we obtain
the binomial distribution, discussed a t the beginning of the chapter.

          Example 6.4:        A fair die is tossed 8 times. The probability of obtaining the faces 6 and 6 twice
                              and each of the others once is
                                                   2! 2! l! l! l! l!    (Q>"Q>"(Q>(QNQ>(Q> = & = -006
110               BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                         [CHAP.6


                       STANDARD NORMAL CURVE ORDINATES


    This table gives values +(t) of the
standard normal distribution     +
                              at t 2 0
in steps of 0.01.


  t      0       1         2         3     4           5       6       7       8        9

 0.0   .3989   .3989     .3989   .3988   .3986       .3984   .3982   .3980   .3977    .3973
 0.1   .3970   ,3965     .3961   .3956   .3951       .3945   .3939   .3932   .3925    .3918
 0.2   .3910   .3902     .3894   .3885   .3876       .3867   .3857   .3847   .3836    .3825
 0.3   .3814   .3802     .3790   .3778   .3765       .3752   .3739   .3725   .3712    .3697
 0.4   .3683   .3668     .3653   .3637   .3621       .3605   .3589   .3572   .3556    .3538

 0.5   .3521   .3503     .3485   .3467   .3448       .3429   .3410   ,3391   .3372    .3352
 0.6   .3332   .3312     ,3292   .3271   .3251       .3230   .3209   .3187   .3166    .3144
 0.7   .3123   .3101     .3079   .3056   .3034       .3011   .2989   .2966   .2943    ,2920
 0.8   .2897   .2874     .2850   .2827   .2803       .2780   .2756   .2732   .2709    .2685
 0.9   .2661   .2637     .2613   .2589   .2565       .2541   .2516   .2492   .2468    .2444

 1.o   .2420   .2396     .2371   .2347   .2323       .2299   .2275   .2251   .2227    ,2203
 1.1   .2179   .2155     .2131   .2107   .2083       .2059   .2036   .2012   ,1989    .1965
 1.2   .1942   .1919     .1895   .1872   .1849       .1826   .1804   .1781   .1758    .1736
 1.3   .1714   .1691     ,1669   .1647   .1626       .1604   ,1582   .1561   .1539    .1518
 1.4   .1497   .1476     .1456   ,1435   .1415       A394    .1374   .1354   .1334    .1315

 1.5   .1295   .1276     .1257   .1238   .1219       .1200   ,1182   .1163   .1145    .U27
 1.6   .1109   A092      A074    ,1057   A040        .1023   .loo6   .0989   .0973    .0957
 1.7   .0940   .0925     .0909   .0893   .0878       .0863   .0848   .0833   .0818    .0804
 1.8   .0790   .0775     .0761   .0748   ,0734       .0721   .0707   .0694   .0681    .0669
 1.9   .0656   .0644     .0632   .0620   .0608       .0596   .0584   .0573   .0562    .0551

 2.0   .0540   .0529     .0519   .0508   .0498       .0488   .0478   .0468   .0459    .0449
 2.1   .0440   .0431     .0422   .0413   ,0404       .0396   .0387   ,0379   .0371    .0363
 2.2   .0355   .0347     .0339   .0332   .0325       .0317   .0310   .0303   .0297    .0290
 2.3   .0283   ,0277     .0270   .0264   .0258       .0252   .0246   ,0241   .0235    .0229
 2.4   .0224   .0219     .0213   .0208   .0203       .0198   .0194   .0189   .0184    .0180

 2.5   .0175   .0171     .0167   .0163   .0158       .0154   .0151   .0147   .0143    .0139
 2.6   .0136   .0132     .0129   .0126   .0122       .0119   ,0116   .0113   .0110    .0107
 2.7   .0104   .0101     .0099   .0096   .0093       .0091   .0088   .0086   .0084    .0081
 2.8   .0079   .0077     .0075   .0073   ,0071       .0069   ,0067   .0065   .0063    .0061
 2.9   .0060   .0058     .0056   ,0055   .0053       ,0051   .0050   .0048   .0047    .0046

 3.0   ,0044   .0043     .0042   .0040   .0039       .0038   .0037   .0036   .0035    .0034
 3.1   .0033   .0032     .0031   .0030   .0029       .0028   .0027   .0026   .0025    .0025
 3.2   .0024   .0023     .0022   .0022   .0021       ,0020   .0020   .0019   .0018    .0018
 3.3   .0017   .0017     ,0016   .0016   .0015       .0015   .0014   .0014   .0013    .0m3
 3.4   .0012   .0012     .0012   .0011   .0011       .0010   .0010   .0010   .0009    .0009

 3.5   .0009   ,0008     .0008   .0008   .0008       .0007   .0007   .0007   .0007    .0006
 3.6   .0006   .0006     .0006   .0005   .0005       .0005   .0005   .0005   .0005    .0004
 3.7   .0004   .0004     .0004   .0004   .0004       .0004   .0003   ,0003   .0003    .0003
 3.8   .0003   .0003     .0003   .0003   .0003       .0002   .0002   .0002   .0002    .0002
 3.9   .0002   .0002     .0002   .0002   .0002       .0002   .0002   .0002   .0001    .0001
                                         Table 6.1
CHAP. 61                 BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                           111


                            STANDARD NORMAL CURVE AREAS


    This table gives areas under the stand-
 ard normal distribution + between 0 and
 t 0 in steps of 0.01.

-
-
t            0       1         2      3       4           5       6       7       8       9
 0.0       .oooo   .0040     .0080   .0120   .0160       .0199   .0239   .0279   .0319   .0359
 0.1       .0398   .0438     .0478   .0517   .0557       .0596   .0636   .0675   ,0714   .0754
 0.2       .0793   .0832     .0871   .0910   .0948       .0987   .1026   .1064   .1103   A141
 0.3       .1179   .1217     .1255   ,1293   .1331       ,1368   .1406   .1443   .1480   .1517
 0.4       .1554   .1591     ,1628   .1664   .1700       .1736   .1772   .1808   .1844   .U379

 0.5       .1915   .1950     .1985   ,2019   .2054       .2088   .2123   .2157   .2190   .2224
 0.6       .2258   .2291     .2324   .2357   .2389       .2422   .2454   .2486   .2518   .2549
 0.7       .2580   ,2612     .2642   .2673   .2704       .2734   .2764   .2794   .2823   .2852
 0.8       .2881   ,2910     .2939   .2967   ,2996       .3023   .3051   .3078   .3106   .3133
 0.9       .3159   .3186     .3212   .3238   .3264       .3289   ,3315   .3340   ,3365   .3389

 1.o       .3413   .3438     .3461   .3485   .3508       .3531   .3554   .3577   .3599   .3621
 1.1       .3643   ,3665     .3686   .3708   .3729       .3749   .3770   .3790   .3810   3830
 1.2       .3849   .3869     .3888   .3907   .3925       .3944   .3962   .3980   .3997   ,4015
 1.3       .4032   .4049     .4066   .4082   ,4099       .4115   .4131   .4147   .4162   .4177
 1.4       .4192   .4207     .4222   .4236   .4251       ,4265   .4279   .4292   .4306   .4319

 1.5       ,4332   .4345     ,4357   .4370   ,4382       .4394   .4406   ,4418   .4429   .4441
 1.6       .4452   .4463     .4474   .4484   .4495       .4505   .4515   .4525   .4535   .4545
 1.7       .4554   .4564     .4573   .4582   .4591       ,4599   .4608   .4616   .4625   .4633
 1.8       .4641   .4649     ,4656   .4664   .4671       ,4678   .4686   ,4693   ,4699   .4706
 1.9       .4713   .4719     .4726   .4732   .4738       .4744   ,4750   .4756   .4761   .4767

 2.0       .4772   .4778     .4783   .4788   ,4793       .4798   .4803   .4808   .4812   .4817
 2.1       .4821   .4826     .4830   .4834   .4838       .4842   ,4846   .4850   ,4854   .4857
 2.2       .4861   .4864     .4868   .4871   .4875       .4878   .4881   ,4884   .4887   .4890
 2.3       .4893   .4896     ,4898   .4901   .4904       .4906   .4909   .4911   .4913   ,4916
 2.4       .4918   .4920     .4922   .4925   .4927       .4929   .4931   .4932   .4934   .4936

 2.5       ,4938   ,4940     .4941   .4943   .4945       .4946   .4948   .4949   .4951   .4952
 2.6       .4953   .4955     .4956   .4957   .4959       .4960   .4961   .4962   .4963   .4964
 2.7       .4965   .4966     .4967   .4968   .4969       .4970   .4971   .4972   .4973   .4974
 2.8       .4974   .4975     .4976   .4977   ,4977       .4978   .4979   .4979   .4980   .4981
 2.9       .4981   .4982     .4982   .4983   .4984       .4984   .4985   .4985   .4986   ,4986

 3.0       ,4987   .4987     .4987   .4988   .4988       .4989   .4989   .4989   .4990   .4990
 3.1       .4990   ,4991     .4991   .4991   .4992       .4992   .4992   ,4992   .4993   .4093
 3.2       .4993   .4993     .4994   ,4994   .4994       .4994   .4994   .4995   .4995   .4995
 3.3       .4995   .4995     .4995   .4996   .4996       .4996   .4996   ,4996   .4996   .4997
 3.4       .4997   .4997     .4997   .4997   .4997       .4997   .4997   .4997   .4997   .4998

  3.5      .4998   .4998     .4998   .4998   .4998       .4998   .4998   .4998   .4998   .4998
  3.6      .4998   .4998     ,4999   ,4999   .4999       .4999   .4999   .4999   .4999   .4999
  3.7      .4999   .4999     .4999   .4999   .4999       .4999   .4999   ,4999   .4999   .4999
  3.8      .4999   ,4999     .4999   .4999   .4999       .4999   .4999   .4999   .4999   .4999
  3.9      .5000   .5000     .5000   .5000   .5000       .5000   .5000   ,5000   .5000   ,5000

                                             Table 6.2
112                            BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                                [CHAP. 6




   x            0.0      0.1       0.2       0.3            0.4                 0.5          0.6       0.7       0.8       0.9

  e--h         1.000    .905      .819      .741           .670             ,607            .549       .497     .449      .407

   x             1        2         3            4           5                   6            7            8     9         10

  e--h         .368     .135     .0498      ,0183         .00674           .00248          .000912   .000335   .000123   .000045




                                                     Solved Problems




6.2.     A fair coin is tossed three times. Find the probability P that there will appear
         (i) three heads, (ii) two heads, (iii) one head, (iv) no heads.
         Method 1. We obtain the following equiprobable space of eight elements:
                                    S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}

         (i)     Three heads (HHH) occurs only once among the eight sample points; hence P = &.
         (ii) Two heads occurs 3 times (HHT, HTH, and THH); hence P = 8.
         (iii) One head occurs 3 times (HTT, THT and TTH); hence P = #.
         (iv) No heads, i.e. three tails (TTT), occurs only once; hence P = &.

         Method 2. Use Theorem 6.1 with n = 3 and p = q = 4.

         (i)                                  (i)
                 Here k = 3 and P = b(3; 3,+) =          = 1 . g . 1 = 9.
                                                                        (-&)3(-&)0

         (ii) Here k = 2 and P = b(2; 3, +) = (i)    (4) = 3 & * + = 8. (-&)2

         (iii) Here k = 1 and P = b(1; 3,-&)  (i)(4)l = 3 . -&*& = 8.           (-&)2

         (iv) Here k = 0 and P = b(0; 3,4) =                      (z)(Q)O(<3)3          = 1 . 1 . 9 = Q.


6.3.     Team A has probability Q of winning whenever it plays. If A plays 4 games, find
         the probability that A wins (i) exactly 2 games, (ii) at least 1game, (iii) more than
         half of the games.
                Here n = 4 , p = $       and q = l - p = i .
         (i)     P ( Zwins) = b ( 2 ; 4, Q ) =        ( ~ 1 (
                                                            2 912   = 5.
CHAP. 61                BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                                                 113

       (ii) Here q4 = (&)4 = $ i s the probability t h a t A loses all four games. Then 1- q4 =                                  is the
            probability of winning a t least one game.

       (iii) A wins more than half the games if A wins 3 o r 4 games. Hence the required probability i s
                         ~ ( wins)
                              3             +
                                      ~ ( wins)
                                           4    =    (313 (Q)      < ~ > 4= 32     =    + (t)             +            27




6.4.   A family has 6 children. Find the probability P that there are (i) 3 boys and 3 girls,
       (ii) fewer boys than girls. Assume that the probability of any particular child being
       a boy is +.
             Here n = 6 and p = q = +.

       (i)   P = P ( 3 boys) =   (1)( 4 ) 3 ( 4 ) 3 =         =    A.
       (ii) There a r e fewer boys than girls if there a r e 0, 1 or 2 boys. Hence
                  P = P(0 boys)          + P(l boy) + P ( 2 boys) = (a)6 + (;) (3>(3)5+ (!) (+I2                      (+>4   =



6.5.   How many dice must be thrown so that there is a better than even chance of obtaining
       a six?
           The probability of not obtaining a six on n dice is (8)~l.Hence we seek the smallest n for
       which (8). i s less than 3:
                                  = 4;                  = E-           (2)s   = 193. but               = -
                                                                                                         625
                          (#)1                  (Q)2
                                                              36   ’            216 ’
                                                                                                (@)4
                                                                                                         1206   < 3
       Thus 4 dice must be thrown.



6.6.   The probability of a man hitting a target is &. (i) If he fires 7 times, what is the
       probability P of his hitting the target a t least twice‘? (ii) How many times must he
       fire so that the probabiIity of his hitting the target a t least once is greater than                                        s?
       (i)   We seek the sum of the probabilities f o r k = 2, 3, 4, 5, 6 and 7. It is simpler in this case to
             find the sum of the probabilities f o r k = 0 and 1,i.e. no hits o r 1 hit, and then subtract i t from 1.

                                 P(nohits) = (9)’ = -,                          P(l hit) = (;)    (i)( $)6 = 5103
                                                                                                             16,384




       (ii) The probability of not hitting the t a r g e t i s qn. Thus we seek the smallest n f o r which qn i s
            less than 1 - $ = Q, where q = 1 - p = 1 - = 9. Hence compute successive powers of
            q until q n < & is obtained:



             In other words, he must fire 4 times.



6.7.   Prove Theorem 6.1: The probability of exactly k successes in 32 repeated trials is
       b ( k ;n, p ) = ( i )p k p - k .
             The sample space of the n repeated trials consists of all ordered 72-tuples whose components
       a r e either s (success) or f (failure). The event A of k successes consists of all ordered n-tuples of
       which k Components a r e s and the other n - k components a r e f . The number of n-tuples i n the
       event A is equal to the number of ways t h a t k letters s can be distributed among the n components
       of a n n-tuple; hence A consists of              (E)
                                                     sample points. Since the probability of each point in A is
       pk q”--k, we have P ( A ) = (:) p k q n - k .
114                           BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                                     [CHAP. 6


6.8.   Prove Theorem 6.2: Let X be a random variable with the binomial distribution
       b ( k ;n,p). Then (i) E ( X ) = n p and (ii) Var ( X ) = npq. Hence ux = m q .

       (i)       Using b ( k ; n , p ) = ( ; ) p k q n - k , we obtain
                                                 n                             n
                                     E(X) =      2 k * b(k; n , p ) = k z 0                 n!            k   n-k
                                                k=O                                    k! ( n - k ) !
                                                                                   n
                                                                          -                 (n-l)!        pk-l  n k
                                                                              np k Z 1 ( k - 1)! (n- k) !      9 -

                 (we drop the term k = 0 since its value is zero, and we factor out n p from each term). We let
                 s = k - 1 in the above sum. As k runs through the values 1 to n, s runs through the values
                 0 t o n - 1. Thus



                 since, by the binomial theorem,
                                              n-1
                                               2 b(s; n - 1 , p )     = (p+q)n-1             = In-1           = 1
                                              s=o



       (ii) We first compute E(X2):




                 Again we let s = k - 1 and obtain




                                                                                                + 3 b(s;n-1,p)
                               n-1                                  n-1                            n-1
                 But                 (s+l)b(s;n-1,p)         =            s*b(s;n-1,p)
                               s=o                                  s=o                             s=o

                                                             = (n-l)p+1                  = n p + l - p              = np+q
                 where we use (i) to obtain (n- 1)p. Accordingly,

                                                     E(X2)= n p ( n p + q) = (np)2 + n p q


                 Thus the theorem is proved.



6.9.   Determine the expected number of boys in a family with 8 children, assuming the
       sex distribution to be equally probable. What is the probability that the expected
       number of boys does occur?
           The expected number of boys is E = n p = 8 * Q = 4. The probability that the family has four
       boys is
                            b(4; 8 , & ) =             (3
                                           (&)4 (&)4 = -(*)8       =     = .27



6.10. The probability is 0.02 that an item produced by a factory is defective. A shipment
      of 10,000 items is sent to its warehouse. Find the expected number E of defective
      items and the standard deviation U.
             E = n p = (10,000)(0.02) = 200.
             U   =                               = m 6 = 14.
                           = ~(10,000)(0.02)(0.98)
CHAP. 61                BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                               115

NORMAL DISTRIBUTION
6.11. The mean and standard deviation on an examination are 74 and 12 respectively.
      Find the scores in standard units of students receiving grades (i) 65, (ii) 74, (iii) 86,
      (iv) 92.
               (i) t = - -p -- 65 - 74 = -0.75       (iii) t = - p -- 86 - 74 = 1.0
                                                 12                                                12
                                                                                   ~




                           X-CL - 74-74                   -                        X - P     -   92-74
                  (ii) t = - -                            - 0            (iv)   t = - - -= 1.5
                                    12                                                             12



6.12. Referring to the preceding problem, find the grades corresponding to standard scores
      (i) -1, (ii) 0.5, (iii) 1.25, (iv) 1.75.
            (i)   x = at+ p = (12)(-1) + 74 = 62                        (iii) x = at+ p = (12)(1.25) + 74 = 89
            (ii) x = at + p = (12)(0.5) + 74 = 80                       (iv) x = at + p = (12)(1.75) + 74 = 95



6.13. Let + be the standard normal distribution.                        Find +(t)at (i) t = 1.63, (ii) t = -0.75,
      (iii) t = -2.08.
      (i)    In Table 6.1, page 110, look down the first column until the entry 1.6 is reached.          Then con-
             tinue right to column 3. The entry is .1057. Hence $(1.63) = .1057.
      (ii) By symmetry, $(--0.75) = $(0.75) = .3011.
      (iii) +(-2.08) = $(2.08) = .0459.


6.14. Let X be a random variable with the standard normal distribution +. Find:
                   (i) P(0 X 4 1.42)            (v) P(-1.79 4 X L -0.54)
                        (ii) P(-0.73 6 X                   0)           (vi) P(X       1.13)
                        (iii) P(-1.37 6 X 4 2.01)                       (vii) P(lX1 4 0.5)
                        (iv) P(0.65 4 X 4 1.26)

      (i)    P(0 fX 6 1.42) is equal to the area under the
             standard normal curve between 0 and 1.42. Thus
             in Table 6.2, page 111,look down the first column
             until 1.4 is reached, and then continue right
             to column 2. The entry is .4222. Hence
             P(0 f X f 1.42) = .4222.



       (ii) By symmetry,
             P(--0.73 6 X 6 0)
                  = P(0 “ X r 0 . 7 3 ) = .2673




       (iii) P(--1.37 L X L 2.01)
                  = P(--1.37   f   X   f   0)   + P(0 X
                                                      L    f    2.01)
                  = .4147   + .4778 = ,8925
116                       BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                    [CHAP.6

        (iv) P(0.65 6 X 6 1.26)
                 = P(0 5 X 6 1.26) - P(0 fX f 0.65)
                   = .3962 - 2422 = S540




        (v)    P(--1.79 6 X f -0.54)
                   = P(0.54 f X f 1.79)
                   = P(0 6 X     1.79) - P(0 fX zs 0.54)
                   = .4633 - ,2054 = 2579



        (vi)   P ( X 2 1.13)
                   = P ( X 0) - P(0 f X f 1.13)
                   = .5000 - ,3708 = .1292




        (vii) P(lX1    0.5)
                   = P(-0.5 fX f 0.5)
                   = 2P(O 6 X f 0.5)
                   = 2(.1916) = .3830




6.15.   Let X be a random variable with the standard normal distribution 4. Determine the
        value of t if (i) P(0 4X 4 t) = .4236, (ii) P(X 6 t) = .7967, (iii) P(t 6 X 6 2) = .1000.


        (i)    In Table 6.2, page 111, the entry .4236 appears
               to the right of row 1.4 and under column 3.
               Hence t = 1.43.




        (ii) Note first that t must be positive since the
             probability is greater than 9. We have
                      P(0'Xft)    = P(Xft)-*
                                  = .7967 - .5000 = .2967
               Thus from Table 6.2 we obtain t = 3 3 .


        (iii) P(0 fX f t) = P(0 fX f2) - P ( t fX 6 2)
                          = .4772 - .loo0 = .3772
               Thus from Table 6.2 we obtain t = 1.161 (by
               linear interpolation) or simply t = 1.16.
CHAP. 61                 BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                              117

6.16.   Suppose the temperature T during June is normally distributed with mean 68" and
        standard deviation 6". Find the probability p that the temperature is between 70"
        and 80".
              70" in standard units = (70 - 68)/6 = .33.
              80" in standard units = (80-68)/6             = 2.00.
        Then
                p = P(70 6 T f 80) = P(.33 f T* f 2)
                   = P(0   f   T* 4 2) - P(0 f T* .33)
                   = .4772 - .1293 = .3479
             Here T* is the standardized random variable
        corresponding to T,and so T* has the standard normal
        distribution +.



6.17.   Suppose the heights H of 800 students are normally distributed with mean 66 inches
        and standard deviation 5 inches. Find the number N of students with heights
        (i) between 65 and 70 inches, (ii) greater than or equal to 6 feet (72 inches).

        (i)    65 inches in standard units = (65 - 66)/5 = -.20.
               70 inches in standard units = (70 - 66)/5 = .80.
               Hence
                  P(65 5 H f 70) = P(-.20         f   H* 5 . 8 0 )
                                       = .0793   + .2881 = .3674
               Thus N = 800(.3674) = 294.

        (ii) 72 inches in standard units = (72-66)/5 = 1.20.
             Hence
                   P(H"72) = P(H*'1.2)
                                     = .5000 - .3849 = .1151
               Thus N = 800(.1151) = 92.
                   Here H * is the standardized random variable
               corresponding to H and so H* has the standard
               normal distribution 9.



NORMAL APPROXIMATION TO THE BINOMIAL DISTRIBUTION
6.18. A fair coin is tossed 12 times. Determine the probability P that the number of heads
      occurring is between 4 and 7 inclusive by using (i) the binomial distribution, (ii) the
      normal approximation t o the binomial distribution.

        (i)    By Theorem 6.1 with n = 12 and p = q = Q,

                                                   P ( 4 heads) =     (y)  (-&)4 (&)8   = -
                                                   P ( 5 heads) =     ( y )(*)5(.&)7    = 4096
                                                 ( y ) (i)6=
                                                   P(6 heads) =            <.&)6          4096


                                    P(7 heads) = (7)(*)'   =                    (*)5


               Hence P = 4096 + %+E +2 = - = .7332.
                               495
118                     BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                       [CHAP.6

      (ii)




                 Here p = np = 12 -& = 6 and U =        = d F &= 1.73. Let X denote the number
             of heads occurring. We seek P(4 X f 7). But if we assume the data is continuous, in order
                                                    f


             to apply the normal approximation, we must find P ( 3 . 5 4 X 6 7 . 5 ) as indicated in the above
             diagram. Now
                 3.5 in standard units = (3.5 - 6)/1.73 = -1.45.
                 7.5 in standard units = (7.5 - 6)/1.73 = .87.
             Then          P = P(3.5 6x6 7.5)
                             = P(--1.45 X* 3 7 )
                                             f     f



                                = .4265   + .3078 = .7343
6.19. A fair die is tossed 180 times. Find the probability P that the face 6 will appear
      (i) between 29 and 32 times inclusive, (ii) between 31 and 35 times inclusive.
          Here p = np = 180 Q = 30 and                  U   = &= d           m = 5. Let X denote the number of
      times the face 6 appears.

      (i)    We seek P(29 5 X f 32) or, assuming the data is con-
             tinuous, P(28.5 6 X e 32.5). Now
                 28.5 in standard units = (28.5 - 30)/5 = -.3
                 32.5 in standard units = (32.5 - 30)/5 = .5
             Hence
                  P      P(28.5 f X f 32.5) = P(-.3          f   X * f .5)
                      = P(-.3    f   X* f 0) + P(0 f X* 5 . 5 )
                      = A179    + .1915 = .3094
      (ii) We seek P ( 3 1 L X f 35) or, assuming the data is continuous, P(30.5 fX         36.6). NOW
              30.5 in standard units = (30.5 - 30)/5 = .1
              35.5 in standard units = (35.5 - 30)/5 = 1.1
             Then
                    P = P(30.5 f Xf 35.5) = P(.1 f X * f 1.1)
                      = P(0 f f 1.1) - P(0 f f .l)
                                 x*                     x*
                       = .3643 - .0398 = .3245


6.20. Among 10,000 random digits, find the probability P that the digit 3 appears at most
      950 times.
         Here p = np = 10,000 & = 1000 and U = 6    = dl0,OOO &, & = 30. Let X denote the
      number of times the digit 3 appears. We seek P(X f 950). Now
CHAP. 61                  BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                               119

                   950 in standard units = (950 - 1000)/30
                                                = -1.67
       Thus          P x P ( X 5 950) = P(X* -1.67)  f


                       = P ( X * 5 0) - P(--1.67 5 X * 4 0)
                        = .5000 - .4525 = .0475




POISSON DISTRIBUTION
6.21. Find: (i) e-1.3, (ii) e-2.5.
             By Table 6.3, page 112, and the law of exponents:
       (i)    e-1.3 = ( e - l ) ( ~ O . ~=) (.368)(.741) = .273.
      (ii) e-2.5 = (e-2)(e-0.5)       = (.135)(.607) = .0819.



                                                           Xke-A
6.22. For the Poisson distribution p ( k ; h) = 7find
                                                  ,   (i) p ( 2 ; l), (ii) p ( 3 ; *), (iii) p ( 2 ; .7).
             (Use Table 6.3, page 112, to obtain e-A.)
                       12e-1 e-l .368
      (i)    p(2; 1) = - - - - - - .184.
                        2! - 2

      (ii) p(3;        (-&)3e-.5 - e-.5
                  6) = -         - -- - -
                                         .607 - .013.
                          3!        48 - 48

                       ( 7)2e-.7 - (.49)(.497) = .12.
      (iii) p(2; .7) = -         -
                           2!           2



6.23. Suppose 300 misprints are distributed randomly throughout a book of 500 pages.
      Find the probability P that a given page contains (i) exactly 2 misprints, (ii) 2 or
      more misprints.
          We view the number of misprints on one page a s the number of successes in a sequence of
      Bernoulli trials. Here n = 300 since there are 300 misprints, and p = 1/500, the probability that
      a misprint appears on the given page. Since p is small, we use the Poisson approximation to the
      binomial distribution with h = np = 0.6.
                                  (.6)2e -0.6
      (i)    P = p(2; 0.6) =                    = (.36)(.549)/2 = .0988 = .l.
                                      2!


      (ii)

             P(l misprint)       ('6)e-0.6 = (.6)(.549) = .329
                               = -
                                     l!
             Then P = 1 - P(0 or 1misprint) = 1 - (.549            + .329) = .122.


6.24. Suppose 2% of the items made by a factory are defective. Find the probability P
      that there are 3 defective items in a sample of 100 items.
          The binomial distribution with n = 100 and p = .02 applies. However, since p is small, we
      use the Poisson approximation with h = n p = 2. Thus
                                                           23e-2
                                         P = p(3; 2) = -= 8(.135)/6 = .180
                                                             3!
120                         BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                                             [CHAP. 6


6.25.   Show that the Poisson distribution p ( k ; A) is a probability distribution, i.e.

                                                            2 p(k;A) = 1
                                                            k=O

                                                                    m

              BY known results of analysis, ex =                         Xklk! .    Hence
                                                                k=O
                               00

                              B p(k;
                              k=O
                                              =



6.26.   Prove Theorem 6.5: Let X be a random variable with the Poisson distribution
        p ( k ; A). Then (i) E ( X ) = A and (ii) Var ( X ) = A. Hence ux = fl.

        (i)   Using p ( k ; A) = Xke-Alk! , we obtain



              (we drop the term k = 0 since its value is zero, and we factor out X from each term). Let
              s = k - 1 in the above sum. As k runs through the values 1 to 00, s runs through the values
              0 to 00. Thus


                       00

              since    2 p ( s ; h ) = 1 by the preceding problem.
                      s=O


        (ii) We first compute E ( X 2 ) :
                              E(X2) =           00
                                                     k z p ( k ; A)      =     CO
                                                                                    k xb3-x
                                                                                       z r       -    X   00
                                                                                                                k- x k - l e - A
                                              k=O                             k=O                         k=l      (k-l)!

              Again we let s = k - 1 and obtain
                                                                                                m
                                                            c, ( S + xse-x
                                                           00

                                          E(X2) = x                  l ) T              = x B (s+ 1)p ( s ; A)
                                                           s=o                              s=o



                                                                        2 sp(s; A) + s=o p ( s ; A)        = x +1
                                     CO                                  00                00

              But                   2 ( s + 1)p ( s ; A)
                                    s=o                         =       s=O


              where we use (i) to obtain h and the preceding problem to obtain 1. Accordingly,
                                                         E ( X 2 ) = h ( X + 1) = A2            +x
              and                            Var ( X ) = E ( X 2 ) - p i = ~2              + x - ~2 = A
              Thus the theorem is proved.



6.27.
                                                                                    -
        Show that if p is small and n is large, then the binomial distribution is approximated
        by the Poisson distribution; that is, b ( k ;n, p ) p ( k ; A) where h = np.
              We have b(0; n, p ) = (1- p)" = (1 -                            Taking the natural logarithm of both sides,
                                                     In b(0; n, p ) = n In (1- h / n )
        The Taylor expansion of the natural logarithm is
                                                              x 2 + 23 -
                                                ln(l+z) = x - -                                 ...
                                                              2      3

        and so
CHAP. 61                BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                                                        121

      Therefore if n is large,
                                                                                              x2        x3
                             In b(0; n , p ) = n In                                                                  -A
                                                                                             2n         3n2
      and hence b(0; n , p ) = e-A.
            Furthermore if p is very small and hence q = 1, we have
                                     b(k; n , P ) -
                                                  - b - k + UP -                      x - (k- U P               xk
                                    w - 1 ; n,P)         k9    -                                 kq
                                x
      That is, b(k; n , p ) = k b ( k - 1 ; n , p ) . Thus usingb(0; n , p ) = e - i , we obtain                          b(1; n , p ) = Ae-A,
                                                                 xke-h
      b ( 2 ;n , p ) = x2e-A/2 and, by induction, b ( k ; n,p) = ---p ( k ; A).
                                                                   k!


MISCELLANEOUS PROBLEMS
6.28. The painted light bulbs produced by a company are 50% red, 30% green and 20% blue.
      In a sample of 5 bulbs, find the probability P that 2 are red, 1 is green and 2 are blue.
            By Theorem 6.6 on the multinomial distribution,
                                                p=-         5!       (.5)2   (.3) (.2)2 = .09
                                                        2 ! l !2 !


6.29. Show that the normal distribution
                                                                    1 e-#M(z-w12/g2
                                                                 a.\/27F
                                                f(4 = -

      is a continuous probability distribution, i.e.            1;                     f ( : c ) d x = 1.

            Substituting t = (x - p ) / u in    J-: f ( x )d x , we obtain the integral
                                                        =    1
                                                             &
                                                               sw            -a
                                                                                  e-t2/2 d t

      It suffices to show that Z2 = 1. We have



      We introduce polar coordinates in the above double integral. Let                                   8    = T cos e and t = T sin 8.
      Then d s d t = r d r d e , and 0'8 5 2~ and O S r r 00. That is,




      But

      Hence Z2 =       -&i 2 r d e = 1 and the theorem is proved.
6.30. Prove Theorem 6.3: Let X be a random variable with the normal distribution



      Then (i) E ( X ) = p and (ii) Var ( X ) = a2. Hence                                (   T   = U.
                                                                                                 ~




      (i)   By definition,   E ( X ) =- .        Jax e - ~ ( x - ~ ) ' / ud2x .              Setting t = (x - p ) / u , we obtain
                                            U
                                            &      -a
122                       BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                                            [CHAP. 6


                  E(X) = -                       (at   + p)edt2l2d t = 2-
                                                                             &
                                                                                 s-m
                                                                                   --m
                                                                                         te--'l2 d t    + -U
                                                                                                           ,
                                                                                                               &
                                                                                                                    sW--m
                                                                                                                            e-t2/2 d t

             But g ( t ) = t e - t 2 / 2 is an odd function, i.e. g ( - t ) = - g ( t ) ; hence        (" t e - t 2 / 2 d t = 0. Further-
             more,
                     6
                           Sm --m
                                                                                                    J--m
                                    e - t 2 / 2 d t = 1 by the preceding problem. Accordingly, E ( X ) =

             as claimed.

        (ii) By definition, E(X2) = -Jw                         x2e-%U(X-P12/U2d x . Again setting t = (z- p ) / ~ , we obtain


                                           s +
                                            &
                                            a            --03



                   E(X2) =                  " (at        p)2e-t2/2 d t
                                     j/G   --m




             which reduces as above to            E(X2) =           02   1 t2e-t2/2 d t + p2
                                                                            Jm

                                                                         & -"
             We integrate the above integral by parts. Let U = t and d v = t e - t 2 / 2 d t . Then v = -e-t2/2
             and d u = d t . Thus



             Consequently,          E(X2) = u 2 *1      + ,u2 = a2 + p2 and
                                            Var (X) = E(X2) -              pi = ,,2 +    p2 - p 2   = ,2
             Thus the theorem is proved.




                                        Supplementary Problems
BINOMIAL DISTRIBUTION
6.31.   Find (i) b(1; 5,4), (ii) b(2; 7,*), (iii) b(2; 4,4).

6.32.   A card is drawn and replaced three times from a n ordinary deck of 52 cards. Find the probability
        that (i) two hearts are drawn, (ii) three hearts are drawn, (iii) at least one heart is drawn.

6.33.   A baseball player's batting average is .300. If he comes to bat 4 times, what is the probability
        t h a t he will get (i) two hits, (ii) at least one hit?

6.34.   A box contains 3 red marbles and 2 white marbles. A marble is drawn and replaced three times
        from the box. Find the probability that (i) 1 red marble was drawn, (ii) 2 red marbles were
        drawn, (iii) at least one red marble was drawn.

6.35.   Team A has probability Q of winning whenever it plays. If A plays 4 games, find the probability
        that A wins (i) 2 games, (ii) a t least 1game, (iii) more than half of the games.

6.36.   A card is drawn and replaced in an ordinary deck of 52 cards. How many times must a card be
        drawn so t h a t (i) there is at least a n even chance of drawing a heart, (ii) the probability of
        drawing a heart is greater than % ?
CHAP. 61                  BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                   123

6.37.   The probability of a man hitting a target is Q. (i) If he fires 5 times, what is the probability of
        hitting the target a t least twice? (ii) How many times must he fire so that the probability of
        hitting the target at least once is more than 90%.

6.38.   The mathematics department has 8 graduate assistants who are assigned to the same office. Each
        assistant is just as likely to study at home a s in the office. How many desks must there be in the
        office so that each assistant has a desk a t least 90% of the time?

6.39.   Of the bolts produced by a factory, 2% are defective. In a shipment of 3600 bolts from the factory,
        find the expected number of defective bolts and the standard deviation.

6.40.   A f a i r die is tossed 1620 times. Find the expected number of times the face 6 occurs and the
        standard deviation.

6.41.   Let X be a binomially distributed random variable with E ( X ) = 2 and Var (X) = 4/3. Find the
        distribution of X.

6.42.   Consider the binomial distribution P ( k ) = b ( k ; n , p ) . Show that:


                                            +
        (ii) P ( k ) > P(k - 1) for k < (n 1)p and P ( k ) < P(k - 1) for k 3 (n 1)p.   +
NORMAL DISTRIBUTION
6.43.   Let @ be the standard normal distribution.
        (i) Find d*),d+)and d-3).
        (ii) Find t such that (a) + ( t ) = .loo, ( b ) $ ( t )= .2500, (c) $(,t)= .4500.

6.44.   Let X be a random variable with the standard normal distribution +. Find:
        (i) P(-$1 5 X 1.13), (ii) P(.53 6 X 5 2.03), (iii) P(X .73), (iv) P(!XI
                        f                                            f
                                                                                            a).
6.45.   Let X be normally distributed with mean 8 and standard deviation 4. Find:
        (i) P ( 5 5 X If l O ) , (ii) P(10 5 X f 15), (iii) P(X 15), (iv) P(.X 5).
                                                                               f




6.46.   Suppose the weights of 2000 male students are normally distributed with mean 155 pounds and
        standard deviation 20 pounds. Find the number of students with weights (i) less than or equal to
        100 pounds, (ii) between 120 and 130 pounds, (iii) between 150 and 175 pounds, (iv) greater than
        or equal to 200 pounds.

6.47.   Suppose the diameters of bolts manufactured by a company are normally distributed with mean
        .25 inches and standard deviation .02 inches. A bolt is considered defective if its diameter is
         5 .20 inches or s= .28 inches. Find the percentage of defective bolts manufactured by the company.


6.48.   Suppose the scores on an examination are normally distributed with mean 76 and standard deviation
        15. The top 15% of the students receive A’s and the bottom 10% receive F’s. Find (i) the minimum
        score to receive an A and (ii) the minimum score to pass (not to receive an F).

NORMAL APPROXIMATION TO THE BINOMIAL DISTRIBUTION
6.49. A fair coin is tossed 10 times. Find the probability of obtaining between 4 and 7 heads inclusive
      by using (i) the binomial distribution, (ii) the normal approximation to the binomial distribution.

6.50.   A fair coin is tossed 400 times. Find the probability that the number of heads which occur differs
        from 200 by (i) more than 10, (ii) more than 25.

6.51.   A fair die is tossed 720 times. Find the probability that the face 6 will occur (i) between 100 and
        125 times inclusive, (ii) more than 150 times.

6.52.   Among 625 random digits, find the probability that the digit 7 appears (i) between 50 and 60 times
        inclusive, (ii) between 60 and 70 times inclusive.
124                             BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                     [CHAP.6

POISSON DISTRIBUTION
6.53. Find (i) e--le6, (ii) e--2.3.

6.54.   For the Poisson distribution p ( k ; A), find (i) p(2; 1.5), (ii) p(3; l ) , (iii) p(2; .6).

6.55.   Suppose 220 misprints are distributed randomly throughout a book of 200 pages. Find the probability
        that a given page contains (i) no misprints, (ii) 1 misprint, (iii) 2 misprints, (iv) 2 or more
        misprints.

6.56.   Suppose 1%of the items made by a machine are defective. Find the probability that 3 or more items
        are defective in a sample of 100 items.

6.57.   Suppose 2% of the people on the average are left-handed. Find the probability of 3 or more left-
        handed among 100 people.

6.58.   Suppose there is an average of 2 suicides per year per 50,000 population. In a city of 100,000 find
        the probability that in a given year there are (i) 0, (ii) 1, (iii) 2, (iv) 2 or more suicides.


MULTINOMIAL DISTRIBUTION
6.59. A die is “loaded” so that the face 6 appears .3 of the time, the opposite face 1 appears .1 of the
      time, and each of the other faces appears .15 of the time. The die is tossed 6 times. Find the
      probability that (i) each face appears once, (ii) the faces 4, 5 and 6 each appears twice.

6.60.   A box contains 5 red, 3 white and 2 blue marbles. A sample of six marbles is drawn with replace-
        ment, i.e. each marble is replaced before the next one is drawn. Find the probability t h a t (i) 3 are
        red, 2 are white and 1 is blue; (ii) 2 are red, 3 are white and 1 is blue; (5)
                                                                                     2 of.each color appears.




                                Answers to Supplementary Problems
6.31.   (i) 243,
             80  (ii)    %, (iii) $
6.32.   (i) &, (ii)      A,(iii) E
6.33.   (i) 0.2646, (ii) 0.7599

6.34.        36
        (i) 125, (ii) $, (iii) 117
                               125


6.35.
            216
        (i) E   , (ii)   E , (iii) 112
                                  625


6.36.   (i) 3, (ii) 5

6.37.   (i)   2, (ii) 6
6.38.   6

6.39.   p      72,   U   = 8.4

6.40.   p =    270, U = 15
        .
              Xi            0              1         2           3            4             5            6
6.41.
            f(xJ         64/729         192/729   240/729    160/729       60/729        12/729        1/729
                                         Distribution of X with n = 6 and p = 1/3
CHAP. 61                   BINOMIAL, NORMAL AND POISSON DISTRIBUTIONS                                          125

6.43.   (i) +(&) = .3867, +(*) = .3521, #(-$) = .3011.
        (ii) (a)t = k1.66, ( b ) t = 2.97, (c) there i s no value of t.

6.44.   (i) .2910   + .3708 = .6618, (ii) .4788 - ,2019 = .2769, (iii) .5000 + .2673 = .7673, (iv) 2(.0987) = ,1974.
6.45.   (i) .4649, (ii) .2684, (iii) .0401, (iv) .2266

6.46.   (i) 6, (ii) 131, (iii) 880, (iv) 24

6.47.   7.3%

6.48.   (i) 92, (ii) 57

6.49.   (i) .7734, (ii) .7718

6.50.   (i) .2938, (ii) .0108

6.51.   (i) .6886, (ii) .0011

6.52.   (i) .3518, (ii) ,5131

6.53.   (i) .202, (ii) .100

6.54.   (i) ,251, (ii) .0613, (iii) .0988

6.55.   (i) .333, (ii) .366, (iii) .201, (iv) ,301

6.56.   0.080

6.57.   0.325

6.58.   (i) .0183, (ii) .0732, (iii) .1464, (iv) .909

6.59.   (i) .0109, (ii) .00103

6.60.   (i) .135, (ii) .0810, (iii) .0810
                                                                                                  Chapter 7


                                           Markov Chains
INTRODUCTION
   We review the definitions and elementary properties of vectors and matrices which are
required for this chapter.
   By a vector U we simply mean an n-tuple of numbers:
                                   2.4 = ( U l , u 2 , . . ., &)

The ui are called the components of U. If all the          = 0, then U is called the zero vector. By
a scalar multiple ku of U (where k is a real number), we mean the vector obtained from U
by multiplying its components by k:
                                  ku = ( k u l , k u 2 , . . ., k u n )
We note that two vectors are equal if and only if their corresponding components are
equal.
   By a matrix A we mean a rectangular array of numbers:




                                                      (c.                              :I)
                                                      all               a12            ain

                                                                       a22
                                                       s.................




                                     A      =                          am2
The m horizontal n-tuples
                              ...,
                  (ail, ~ 1 2 ,      U l n ) , (@I,   ~ 2 2 ,    . . .,           . . .,
                                                                            ~ 2 4 ,        ( h i , am2,   . . .,   amn)

are called the rows of A, and the n vertical m-tuples




its columns. Note that the element aj, called the ij-entry, appears in the ith row and the
jth column. We frequently denote such a matrix simply by A = (ajr).
    A matrix with m rows and n columns is said to be an m by n matrix, written m x n
matrix; if m = n, then it is called a square matrix (or: n-square matrix). We also note
that a matrix with only one row may be viewed as a vector, and vice versa.
    Now suppose A and B are two matrices such that the number of columns of A is equal
to the number of rows of B, say A is an m x p matrix and B is a p X n matrix. Then the
product of A and B, written AB, is the m x n matrix whose ij-entry is obtained by multiply-
ing the elements of the ith row of A by the corresponding elements of the jth column of B
and then adding:

                                                                   126
CHAP. 71                                       MARKOV CHAINS                                                 127




where

If the number of columns of A is not equal to the number of rows of B, say A is m x p
and B is q x n where p # q, then the product AB is not defined.
    There are special cases of matrix multiplication which are of special interest. If A
is an n-square matrix, then we can form all the powers of A :
                                 A 2 = A A , A 3 = A A 2 , A 4 = A A 3 , ...
In addition, if U is a vector with n components, then we can form the product
                                                    uA
which is again a vector with n components. We call U # 0 a fixed vector (or: fixed point)
of A , if U is “left fixed”, i.e. is not changed, when multiplied by A :
                                                 uA = U
In this case, for any scalar k # 0, we have
                                         (ku)A = k(uA) = ku
That is,
Theorem 7.1:      If U is a fixed vector of a matrix A , then every nonzero scalar multiple ku
                  of U is also a fixed vector of A .
                                                                      ral + ra2 + sb2 ra3 +
                                                                            8b1                   8b3
                                                                      ta, + ub, ta2 + ub2 ta3 + ub3
        Example 7.1:



        Example 7.2:   If    A =   (’
                                    3
                                                 then


                              A2     =    (i 42)(: :)            =
                                                                        1+6
                                                                       (3+12
                                                                                  2+8)
                                                                                  6+16
                                                                                           =   (7 10)
                                                                                                15 22



        Example 7.3:
                              (1 1 :i
                       (1,2, 3) 4 5 6           =         + + 21,2 + 10 + 24, 3 + 12 + 27) = (30,36, 42)
                                                         (1 8



        Example 7.4:   Consider the matrix A =
                       of A. For,
                                                          (i ;>.     Then the vector U = (2,-1) is a fixed point


                        uA    =     (2,-1)(:        :)     =    (2*2-1*2,2*1-1*3) =             (2,-1)   =    U


                       Thus by the above theorem, the vector 2u = (4,-2) is also a fixed point of A:

                                   (4,-2)(:         ;)    =     (4.2-2*2,4*1--2.3)        =    (4,-2)



PROBABILITY VECTORS, STOCHASTIC MATRICES
   A vector U = (u1,u2,. . .,U,,) is called a probability vector if the components are non-
negative and their sum is 1.
128                                          MARKOV CHAINS                                        [CHAP. 7


       Example 7.5:    Consider the following vectors:
                                  U = (2, 0, -&, Q), v = (2, Q, 0, $1     and w = <&, 4, 0, 6)
                       Then:
                         U is not a probability vector since its third component is negative;
                         v is not a probability vector since the sum of its components is greater than 1;
                             w is a probability vector.

       Example 7.6:    The nonzero vector v = (2,3,5,0,1) is not a probability vector since the sum of
                                                          + +
                       its components is 2 + 3 + 5 0 1 = 11. However, since the components of v
                       are nonnegative, v has a unique scalar multiple AV which is a probability vector;
                       it can be obtained from v by multiplying each component of v by the reciprocal
                       of the sum of the components of U :        AV
                                                               = ( 11'
                                                                    L 11, E,O,A).
   A square matrix P = ( p i j ) is called a stochastic matrix if each of its rows is a probability
vector, i.e. if each entry of P is nonnegative and the sum of the entries in each row is 1.

       Example 7.7 :   Consider the following matrices:




                                                  (U               (ii)               (iii)
                       (i)     is not a stochastic matrix since the entry in the second row and third column
                               is negative;
                       (ii) is not a stochastic matrix since the sum of the entries in the second row is
                            not 1;
                       (iii) is a stochastic matrix since each row is a probability vector.

   We shall prove (see Problem 7.10)
Theorem 7.2:     If A and B are stochastic matrices, then the product AB is a stochastic
                 matrix. Therefore, in particular, all powers An are stochastic matrices.


REGULAR STOCHASTIC MATRICES
   We now define an important class of stochastic matrices whose properties shall be
investigated subsequently.

Definition:    A stochastic matrix P is said to be regular if all the entries of some power
               Pm are positive.

       Example 7.8:    The stochastic matrix A =          (: ;)    is regular since




                       is positive in every entry.


       Example 7.9:    Consider the stochastic matrix A =         (: i).      Here




                       In fact every power A m will have 1 and 0 in the first row; hence A is not regular.
CHAP. 71                                 MARKOV CHAINS                                                                129

FIXED POINTS AND REGULAR STOCHASTIC MATRICES
   The fundamental property of regular stochastic matrices is contained in the following
theorem whose proof lies beyond the scope of this text.

Theorem 7.3:     Let P be a regular stochastic matrix. Then:
                 (i) P has a unique fixed probability vector t, and the components of t
                       are all positive;
                 (ii) the sequence P , P2,P3, . . . of powers of P approaches the matrix T
                       whose rows are each the fixed point t;
                 (iii) if p is any probability vector, then the sequence of vectors
                       pP, pP2,pP3, . . . approaches the fixed point t.

    Note: Pn approaches T means that each entry of P" approaches the corresponding
entry of T , and pPn approaches t means that each component of pPn approaches the cor-
responding component of t.

       Example 7.10 : Consider the regular stochastic matrix P =                               We seek a probability

                      vector with two components, which we can denote by t = (x, 1 -x),                          such that
                      tP = t:



                      Multiplying the left side of the above matrix equation, we obtain
                                                                             (4-Q. = x
                             (4- -&x, Q + Qx) = (5,1 - x)          or
                                                                            '19+Qx = 1 - x
                                                                                                     or    x=Q

                      Thus t = (Q, 1 - +) = (Q,3) is the unique fixed probability vector of P . By
                      Theorem 7.3, the sequence P , P2, P3, .. . approaches the matrix T whose rows are
                      each the vector t:
                                              T    =       (i :)            -- ; :1(     :;)
                           We exhibit some of the powers of P to indicate the above result


                                p2 =   (59 t4) =   (
                                                    .50 .50
                                                    .25 .75        );       p3 =       (i :>       .25
                                                                                               = (.37
                                                                                                          .75
                                                                                                          .63)




                                                                    (;;%)
       Example 7.11 : Find the unique fixed probability vector of the regular stochastic matrix


                                                       P       =


                      Method 1. We seek a probability vector with three components, which we can
                      represent by t = (x,y, 1 - x - y), such that tP = t:


                                       (z,y,l-x-y)
                                                           ir I 11
                                                           0   0        1       =      (x,y,l-x-y)
130                                            MARKOV CHAINS                                                                [CHAP. 7


                       Multiplying the left side of the above matrix equation and then setting correspond-
                       ing components equal to each other, we obtain the system
                                   +-+x-&y                = x                            3x+y = 1
                                                                                                                  x = *
                                   x+&-&x-+y                    = y        or            x-3g     = -1      or
                                                                                                                 u = Z
                                   y = 1-x-y                                             x+2y = 1
                                                                                                                       r)




                       Thus t = (&,-&+) is the unique fixed probability vector of P.

                       Method 2.    We first seek any fixed vector                        U = (x,y, z )   of the matrix P:


                                   (x, Yt 2)
                                               i, .il
                                                0
                                                0
                                                     1
                                                     0
                                                     !i
                                                           0
                                                           1         =     (x, Y, 4              or


                       We know that the system has a nonzero solution; hence we can arbitrarily assign
                                                                                                          1      &z = x
                                                                                                            x+&z = y
                                                                                                                 y = z


                       a value to one of the unknowns. Set z = 2. Then by the first equation x = 1,
                       and by the third equation y = 2. Thus U = (1,2,2) is a fixed point of P. But
                       every multiple of U is a fixed point of P; hence multiply U by 8 to obtain the re-
                       quired fixed probability vector t = &U = (1   2’ ”).
                                                                   5’5  5




MARKOV CHAINS
    We now consider a sequence of trials whose outcomes, say, X1,X2,. . ., satisfy the
following two properties:
(i) Each outcome belongs to a finite set of outcomes {al, a2,.. .,am} called the state space
    of the system; if the outcome on the nth trial is ai, then we say that the system is in
    state ai a t time n or a t the nth step.
(ii) The outcome of any trial depends a t most upon the outcome of the immediately pre-
     ceding trial and not upon any other previous outcome; with each pair of states (ai,aj)
     there is given the probability pij that aj occurs immediately after ai occurs.
Such a stochastic process is called a (finite) Markov chain. The numbers Pij, called the


                                                                                         ;: ‘i
transition probabilities, can be arranged in a matrix



                                               1
                                                    PI1        p12       -.      *



                                   P    =           P21        pzz       * . .

                                                    ..................
                                                \pmt           pm2       .‘.             pmml
called the transition matrix.
     Thus with each state ai there corresponds the ith row (ptl,pi2, . . .,pim) of the transition
matrix P ; if the system is in state ai, then this row vector represents the probabilities of
all the possible outcomes of the next trial and so it is a probability vector. Accordingly,
Theorem 7.4:     The transition matrix P of a Markov chain is a stochastic matrix.

       Example 7.12:   A man either drives his car or takes a train to work each day. Suppose he never
                       takes the train two days in a row; but if he drives to work, then the next day
                       he is just a s likely to drive again a s he is to take the train.
                            The state space of the system is {t (train), d (drive)}. This stochastic process
                       is a Markov chain since the outcome on any day depends only on what happened
                       the preceding day. The transition matrix of the Markov chain is
                                                                                     t    d
CHAP. 71                                  MARKOV CHAINS                                                  131

                            The first row of the matrix corresponds to the fact that he never takes the
                       train two days in a row and so he definitely will drive the day after he takes the
                       train. The second row of the matrix corresponds to the fact that the day after
                       he drives he will drive or take the train with equal probability.


       Example 7.13:   Three boys A , B and C are throwing a ball to each other. A always throws the ball
                       to B and B always throws the ball to C; but C is just as likely to throw the ball
                       to B a s to A. Let X, denote the nth person to be thrown the ball. The state space
                       of the system is { A , B , C } . This is a Markov chain since the person throwing the
                       ball is not influenced by those who previously had the ball. The transition matrix
                       of the Markov chain is
                                                                  A B C




                            The first row of the matrix corresponds to the fact that A always throws the
                       ball to B . The second row corresponds to the fact that B always throws the ball
                       to C. The last row corresponds to the fact that C throws the ball to A or B with
                       equal probability (and does not throw i t to himself).


       Example 7.14:   A school contains 200 boys and 150 girls. One student is selected after another
                       to take an eye examination. Let X, denote the sex of the nth student who takes
                       the examination. The state space of the stochastic process is {m (male), f (female)).
                       However, this process is not a Markov chain since, for example, the probability
                       that the third person is a girl depends not only on the outcome of the second trial
                       but on both the first and second trials.


       Example 7.15:   (Random walk with reflecting barriers.) A man is a t an integral point on the
                       z-axis between the origin 0 and, say, the point 5. He takes a unit step to the
                       right with probability p or to the left with probability q = 1- p, unless he is a t
                       the origin where he takes a step to the right to 1 or at the point 6 where he takes
                       a step to the left to 4. Let X, denote his position after n steps. This is a Markov
                       chain with state space {ao,al,a2,a3,a4,a5}  where ai means that the man is at the
                       point i. The transition matrix is
                                                                a0         a1   a2    a3      a4   a5



                                                      ::/:                  1
                                                                            0
                                                                                0
                                                                                p
                                                                                          0
                                                                                          0
                                                                                              0
                                                                                              0    0




                                                      a5            0       0   0     0       1    0

                           Each row of the matrix, except the first and last, corresponds to the fact that
                       the man moves from state at to state a i + l with probability p o r back to state ai-l
                       with probability q = 1- p. The first row corresponds to the fact that the man
                       must move from state a. to state al,and the last row t h a t the man must move
                       from state a5 to state a,.




HIGHER TRANSITION PROBABILITIES
    The entry pij in the transition matrix P of a Markov chain is the probability that the
system changes from the state ai t o the state aj in one step: ai + aj. Question: What is
the probability, denoted by pi;), that the system changes from the state ai to the state aj in
exactly n steps:
                               ai + a k l 4 U k 2 +   * *   -   3       Uk,-l   3    Uj
132                                         MARKOV CHAINS                                                  [CHAP. 7


The next theorem answers this question; here the p g ) are arranged in a matrix Pen) called
the n - s t e p transition m a t r i x :

Theorem 7.5:     Let P be the transition matrix of a Markov chain process. Then the n-step
                 transition matrix is equal to the nth power of P ; that is, P(n)= P n .

    Now suppose that, a t some arbitrary time, the probability that the system is in state
Ui is pi; we denote these  probabilities by the probability vector p = (pl,p2, . . . , p m ) which
is called the probability distribution of the system a t that time. In particular, we shall let
                                      p'0' = ( p y , p y , . . ., pA0))
denote the initid probability distribution, i.e. the distribution when the process begins,
and we shall let
                                pCn' = ( p y , pin), . . .,p2')
denote the nth s t e p probubizity distribution. i.e. the distribution after the first n steps.
The following theorem applies.


Theorem 7.6:     Let P be the transition matrix of a Markov chain process. If p = (pi) is
                 the probability distribution of the system a t some arbitrary time, then
                 p P is the probability distribution of the system one step later and p P n is
                 the probability distribution of the system n steps later. In particular,



       Example 7.16:   Consider the Markov chain of Example 7.12 whose transition matrix is
                                                                          t   d



                       Here t is the state of taking a train to work and d of driving to work. By Ex-
                       ample 7.8,




                       Thus the probability that the system changes from, say, state t to state d in exactly
                                             = 9. Similarly, p i t ) = 3, pi:) =
                       4 steps is 9, i.e. p::)                                      and p(4)dd = -i-6'
                                                                                                  11

                           Now suppose that on the first day of work, the man tossed a fair die and drove
                       to work if and only if a 6 appeared. In other words, p ( 0 ) = (Q,Q) is the initial
                       probability distribution. Then




                       is the probability distribution after 4 days, i.e. p y ) =   g and p j 4 ) =!!L
                                                                                                     96'




       Example 7.17:   Consider the Markov chain of Example 7.13 whose transition matrix is
CHAP. 71                                     MARKOV CHAINS                                                      133

                       Suppose C was the first person with the ball, i.e. suppose p ( 0 ) = (0,0,1) is the
                       initial probability distribution. Then




                       ball is & and that C has the ball is          +:                    *
                       Thus, after three throws, the probability that A has the ball is &, that B has the
                                                                pi31 = &, pL3) =    and pA3) = 8.


       Example 7.18:   Consider the random walk problem of Example 7.15. Suppose the man began at the
                       point 2 ; find the probability distribution after 3 steps and after 4 steps, i.e. p ( 3 )
                       and ~ ( 4 ) .
                           Now p ( 0 ) = (0, 0 , 1,0, 0,O) is the initial probability distribution.      Then

                                p ( 1 ) = p ( 0 ) P = ( 0 , q, 0 , p , 0,O)

                                p'2'   = p ( W = (92, 0 , 2 p q , 0 , p2, 0 )
                                p(3' = p ( 2 ) P = (0, q2      + 2pq2, 0 , 3p29, 0, rps)

                       Thus after 4 steps he is at, say, the origin with probability 93        + 2pq3.

STATIONARY DISTRIBUTION OF REGULAR MARKOV CHAINS
    Suppose that a Markov chain is regular, i.e. that its transition matrix P is regular.
By Theorem 7.3 the sequence of n-step transition m.atrices Pn approaches the matrix T
whose rows are each the unique fixed probability vector t of P; hence the probability p:?
that aj occurs for sufficiently large n is independent of the original state ai and it approaches
the component tj of t. In other words,
Theorem 7.7:     Let the transition matrix P of a Markav chain be regular. Then, in the
                 long run, the probability that any state aj occurs is approximately equal
                 to the component tj of the unique fixed probability vector t of P.
    Thus we see that the effect of the initial state or the initial probability distribution of
the process wears off aq the number of steps of the process increase. Furthermore, every
sequence of probability distributions approaches the fixed probability vector t of P, called
the stationary distribution of the Markov chain.

       Example 7.19:   Consider the Markov chain process of Example 7.12 whose transition matrix is
                                                                                t   d
134                                       MARKOV CHAINS                                                      [CHAP. 7


                       By Example 7.10, the unique fixed probability vector of the above matrix is (*,#).
                       Thus, in the long run, the man will take the train to work of the time, and drive
                       to work the other 6 of the time.
                                                                                                         *
       Example 7.20:   Consider the Markov chain process of Example 7.13 whose transition matrix is
                                                                         A        B        C

                                                    P     =     ;(:: ;)
                                                                C        &        +        O
                       By Example 7.11, the unique fixed probability vector of the above matrix is
                       (i,8, 8). Thus, in the long run, A will be thrown the ball 20% of the time, and
                       B and C 40% of the time.


ABSORBING STATES
   A state ai of a Markov chain is called absorbing if the system remains in the state ai
once it enters there. Thus a state ai is absorbing if and only if the ith row of the transition
matrix P has a 1 on the main diagonal and zeros everywhere else. (The main diagonal of
an n-square matrix A = ( a ~consists
                              )        of the entries all, a 2 2 , . . ., aan.)

       Example 7.21:   Suppose the following matrix is the transition matrix of a Markov chain:
                                                                a1       a2       a3       a4       a5




                       The states u2 and a5 are each absorbing, since each of the second and fifth rows
                       has a 1 on the main diagonal.

       Example 7.22:   (Random walk with absorbing barriers.) Consider the random walk problem of
                       Example 7.16, except now we assume that the man remains at either endpoint when-
                       ever he reaches there. This is also a Markov chain and the transition matrix is
                       given by
                                                           a0 a1 a2 a3 a4 a5

                                                                s i o o o o o
                                                        : / q        0        p        0        0        0




                            We call this process a random walk with absorbing barriers, since the a. and
                       a5 are absorbing states. In this case, p i n ) denotes the probability that the man
                       reaches the state a. on or before the nth step. Similarly, pin) denotes the proba-
                       bility that he reaches the state u5 on or before the nth step.

       Example 7.23:   A player has, say, z dollars. He bets one dollar at a time and wins with probability
                       p and loses with probability q = 1- p . The game ends when he loses all his
                       money, i.e. has 0 dollars, or when he wins N - s dollars, i.e. has N dollars. This
                       game is identical to the random walk of the preceding example except that here
                       the absorbing barriers are at 0 and N.
CHAP. '71                                     MARKOV CHAINS                                                   135

          Example 7.24:   A man tosses a fair coin until 3 heads occur in a row. Let X,,= k if, at the nth
                          trial, the last tail occurred at the (n - k)-th trial, i.e. X, denotes the longest string
                          of heads ending at the nth trial. This is a Markov chain process with state space
                          {ao,ul, U,, u3}, where ui means the string of heads has length i. The transition
                          matrix is




                               Each row, except the last, corresponds to the fact that a string of heads is
                          either broken if a tail occurs or is extended by one if a head occurs. The last
                          line corresponds to the fact that the game ends if three heads are tossed in a row.
                          Note that a, is an absorbing state.

       Let aj be an absorbing state of a Markov chain with transition matrix P. Then, for
j # i, the n-step transition probability p:) = 0 for every n. Accordingly, every power of
P has a zero entry and so P is not regular. Thus:
Theorem 7.8:        If a stochastic matrix P has a 1on the main diagonal, then P is not regular
                    (unless P is a 1x 1matrix).




                                          Solved Problems
MATRIX MULTIPLICATION

7.1.    Let U = (1,-2,4) and A = 0
                                            6 1 -:)2    5   . Find uA.
             The product of the vector U with 3 components by the 3 X 3 matrix A is again a vector with 3
         components. To obtain the first component of uA, multiply the elements of U by the corresponding
         elements of the first column of A and then add:




         To obtain the second component of uA,multiply the elements of U by the corresponding elements of
         the second column of A and then add:




         To obtain the third component of uA,multiply the elements of U by the corresponding elements of
         the third column of A and then add:
136                                            MARKOV CHAINS                                          [CHAP. 7



7.2.   Let A = (I
                2 -1
                           ’) and B = (23 -2 -“).
                                              6
                                                  Find (i) A B , (ii) B A .

       (i)   Since A is 2 X 2 and B is 2 X 3, the product A B is a 2 X 3 matrix. To obtain the first row of


                           (:) , (-3 (-:)
             AB, multiply the elements of the first row (1, 3) of A by the corresponding elements of each of
             the columns                and          of B and then add:




             To obtain the second row of A B , multiply the elements of the second row (2,-1) of A by the
             corresponding elements of each of the columns of B and then add:




       (ii) Note B is 2 X 3 and A is 2 X 2. Since the “inner numbers’’ 3 and 2 are not equal, i.e. the num-
            ber of columns of B is not equal to the number of rows of A , the product B A is not defined.



7.3.   Let A =                  . Find (i) A 2 , (ii) A3.
                    (4 -3)

       (i)   A2 = A A       =    (: -:)(: -:)
                                    1*1+2-4        1.2+2*(-3)      ) (=      9   -4)
                            = (4.1     +
                                       (-3)*4     4.2  +
                                                       (-3)*(-3)           -8     17

       (ii) A3   = AA2       =
                                 (: -:)(-: ):T
                                           +
                                    1 9 2 (-8)          1 (-4) + 2 17
                                   4 9 4-(-3) (-8)     4 (-4) + (-3) 17

PROBABILITY VECTORS AND STOCHASTIC MATRICES
7.4. Which vectors are probability vectors ?
     (i) U = (9,0,-& a-, 9), (ii) v = (9,0,Q, *, 91, p i ) w = (*,O,O,Q, 9).
             A vector is a probability vector if its components are nonnegative and their sum is 1.
             (i) U is not a probability vector since its third component is negative.
             (ii) v is not a probability vector since the sum of the components is greater than 1.
             (iii) w is a probability vector since the components are nonnegative and their sum is 1.


7.5.   Multiply each vector by the appropriate scalar to form a probability vector:
       (i) (2, 1, 0,2, 3), (ii) (4, 0, 1,2, 0,5), (iii) (3,0, -2, I), (iv) (0, 0, 0, 0, 0).
       (i)                                       + + + +
             The sum of the components is 2 1 0 3 2 = 8; hence multiply the vector, i.e. each
             component, by Q to obtain the probability vector (i,9,0, &, 3).
CHAP. 71                                                MARKOV CHAINS                                                              137

                                                        + + +                 +
       (ii) The sum of the components is 4 0 1 2 -I-0 6 = 12; hence multiply the vector, i.e. each
            component, by    to obtain the probability vector (Q,0, +5, Q,0, A).
       (iii) The first component is positive and the third is negative; hence it is impossible to multiply the
             vector by a scalar to form a vector with nonnegative components. Thus no scalar multiple
             of the vector is a probability vector.
       (iv) Every scalar multiple of the zero vector is the zero vector whose components add to 0. Thus
            no multiple of the zero vector is a probability vector.




7.6.   Find a multiple of each vector which is a probability vector:
       (i) (3, 6 9 0 9 2, Q), (ii) (076, 1, 8).    $9


             In each case, first multiply each vector by a scalar so that the fractions are eliminated.
       (i)    First multiply the vector by 6 to obtain (3,4,0,12,5). Then multiply by 1/(3 4                  + + 0 + 12 + 5) =
              & to obtain (3,Q,0, 4, &) which is a probability vector.
       (ii) First multiply the vector by 30 to obtain (0,20,30,18,25). Then multiply by 1/(0 20                            + + 30 +
                 +
            18 25) = f to obtain (0,           g, g, E , 8 )
                                                     which is a probability vector.




7.7.   Which of the following matrices are stochastic matrices ?



       (i)    A is not a stochastic matrix since it is not a square matrix.
       (ii) B is not a stochastic matrix since the sum of the components in the last row is greater than 1.
       (iii) C is a stochastic matrix.
       (iv) D is not a stochastic matrix since the entry in the first row, second column is negative.




7.8.   Let A =         a2

                              (:I ::::)
                              b2   c2    be a stochastic matrix and let                       U = (u1,
                                                                                                     u2,~3)           be a proba-




                                    (1: : r:)
       bility vector. Show that uA is also a probability vector.

             U A = ( ~ 1 up,
                         ,   ~ 3 )a2    b2    ~2        = (ulal+ ~    2   +   ~ 3 2~ ulb1+
                                                                              ~       3 ,        +
                                                                                           ~ 2 b 2 ~ 3 b 3 ,ulcl+ ~    2   +~~ 32 ~ 3 )



           Since the ui,ai, bi and ci are nonnegative and since the products and sums of nonnegative
       numbers are nonnegative, the components of U A are nonnegative as required. Thus we only need
       to show that the sum of the components of UA is 1. Here we use the fact that u1 u2 u3,                              + +
             + +            + +           + +
       al bl c1, a2 b2 c2 and a3 b3 c3 are each 1:
                            ulal + u2a2+ u3a3 + ulbl 4- u2b2 + u3b3 + ulcl+ u2c2 + u3c3
                                     =        b1+
                                             Ui(al+   +      + + + + +
                                                            ~ 1 )    ~2(a2        b2   ~2)   ~ 3 ( a 3 b3   ~3)

                                     = U101 +       + U301 = U1 +
                                                         u2.1                  = 1        u,+u3




7.9.   Prove: If A = (Q) is a stochastic matrix of order n and                                                    ..
                                                                                                     U = ( u I , ~ , .,I%)        is a
       probability vector, then uA is also a probability vector.
             The proof is similar to that of the preceding problem for the case n = 3:
138                                                  MARKOV CHAINS                                     [CHAP. 7


                                       a11     a12   ..*
                                       a21      .-.
                                               a22
      UA =     ( ~ 1 up,
                     ,     .. ., U,)   .................
           -
           -   (u,all+ u2a21       + - - + unanl, ula12+ u2a22+ - - + unan2, . ., ulaln + ~~a~~+ - - - + unarm)
                                        *                                              ,


          Since the ui and aij are nonnegative, the components of U A are also nonnegative.             Thus we
      only need to show that the sum of the components of U A is 1:




7.10. Prove Theorem 7.2: If A and B are stochastic matrices, then the product AB is a
      stochastic matrix. Therefore, in particular, all powers An are stochastic matrices.
          The ith-row si of the product matrix A B is obtained by multiplying the ith-row ri of A by
      the matrix B: si = riB. Since each ri is a probability vector and B is a stochastic matrix, by
      the preceding problem, siis also a probability vector. Hence A B is a stochastic matrix.



7.11. Prove: Let $1 = (pl,p2, .. . , p m ) be a probability vector, and let T be a matrix
      whose rows are each the same vector t = (tl,t 2 , .... tm). Then pT = t.
          Using the fact that p l           + p2 + - + pm = 1, we have




REGULAR STOCHASTIC MATRICES AND FIXED PROBABILITY VECTORS
7.12. Find the unique fixed probability vector of the regular stochastic matrix A =
      What matrix does An approach? .


                                                                   :>
          We seek a probability vector t = ( x , 1 - x ) such that tA = t:

                                                 (x,1 - x )   (;        = (x,1 - x )

      Multiply the left side of the above matrix equation and then set corresponding components equal
      to each other to obtain the two equations
                                       $x+*-+x             = x,    $xif-*x        = 1-x
      Solve either equation to obtain x = 8. Thus t = (Q,Q) is the required probability vector.
          Check the answer by computing the product tA:



      The answer checks since tA = t.
          The matrix An approaches the matrix T whose rows are each the fixed point t: T =
CHAP. 71                                            MARKOV CHAINS                                           139

7.13. (i) Show that the vector U = ( b , a) is a fixed point of the general 2 x 2 stochastic



        (ii) Use the result of (i) to find the unique fixed probability vector of each of the
             following matrices:




        (i)   up     = ( b , u ) (l   a
                                           1-b ">    = ( b - ~ b + ~ bu,b + ~ - a b ) = ( b , U) =   U.


        (ii) By (i), U = (1,$) is a fixed point of A. Multiply U by 3 to obtain the fixed point (3,2) of A
                                                                                 +
             which has no fractions. Then multiply (3,2) by 1/(3 2) = Q to obtain the required unique
             fixed probability vector (E,#).
                  By (i), U = (#,&) is a fixed point of B. Multiply U by 6 to obtain the fixed point (4,3),
              and then multiply by 1/(4+ 3) =            3
                                                    to obtain the required unique fixed probability vector
              ($1   3).
                  By (i), U = (3,.3) is a fixed point of C. Hence (8,3) and the probability vector        (k,& )
              are also fixed points of C,



7.14.   Find the unique fixed probability vector of the regular stochastic matrix




        Method 1. We seek a probability vector t = (x, g, 1 - x - y) such that tP = t


                                                                           =     (X&    1-x-Y)


        Multiply the left side of the above matrix equation and then set corresponding components equal




                                                                                 1
        to each other to obtain the system of three equations
                                          &x   + &y = x                                x-y = 0
                                          & x + ~ - - x - - Y= 2/         or      3 ~ + 8 3= 4
                                          &x+&y = 1 - x - y                            +
                                                                                  5% 6y = 4
        Choose any two of the equations and solve for x and g to obtain z =                      &
                                                                                  and g = $. Check the
        solution by substituting for x and y into the third equation. Since 1 - x - g =              A,
                                                                                           the required




                                                                      a
                                         4  4   3
        fixed probability vector is t = (E, 11, E).




                                                            (1 :
        Method 2. We seek any fixed vector           U = (x, y, x )   of the matrix P:


                                                 (x, Y, 4    &   0    &    = (x,Y, 4


        Multiply the left side of the above matrix equation and set corresponding components equal to each
        other to obtain the system of three equations
                                            +x+Qy = x                      x-y       = 0
                                            &X+Z=                or        x - 411 -k 42 = 0
                                            &x+&y = 2                     ~ + 2 @ - 4 z= 0
140                                             MARKOV CHAINS                                                   [CHAP. 7


        We know that the system has a nonzero solution; hence we can arbitrarily assign a value to one
        of the unknowns. Set y = 4. Then by the first equation z = 4, and by the third equation z = 3.
        Thus U = (4,4,3) is a fixed point of P. Multiply U by 1/(4 4 3) =        + +
                                                                                  to obtain t = ;U =
        (A, &, s)  which is a probability vector and is also a fixed point of P.



7.15.   Find the unique fixed probability vector of the regular stochastic matrix


                                                    P = ( % l i )

        What matrix does P" approach?
              We first seek any fixed vector U = ( z , y , z ) of the matrix P:


                                             (2,2/, z )
                                                          6 1 I)
                                                          Q 4 P          = (x,
                                                                             2 / 9 2 )




        Multiply the left side of the above matrix equation and set corresponding components equal to




                                                      1
        each other to obtain the system of three equations




                   1"
                       y = x
                     x+*Y+@
                     Qy+Qz     = z
                                     = Y      or
                                                          y
                                                          6~
                                                          y+z
                                                               = 62
                                                               + 3y + 42 = 61/
                                                                  = 32
                                                                                         or
                                                                                              1y = 62
                                                                                              62   + 42 = 31/
                                                                                               y = 22
        We know that the system has a nonzero solution; hence we can arbitrarily assign a value to one
        of the unknowns. Set x = 1. Then by the first equation y = 6, and by the last equation z = 3. Thus
        U = (1,6,3) is a fixed point of P. Since 1              + +
                                                         6 3 = 10, the vector t = (&,A,&) is the


                                                                                                    (i $)
        required unique fixed probability vector of P.
                                                                                                     l o 6m m
                                                                                                            3

              Pn approaches the matrix T whose rows are each the fixed point t:               T =                  .
                                                                                                     -
                                                                                                     10
                                                                                                        -
                                                                                                        10
                                                                                                           -
                                                                                                           10




7.16.   If t = (i,0, 4, 4,O) is a fixed point of a stochastic matrix P, why is P not regular?
            If P is regular then, by Theorem 7.3, P has a unique fixed probability vector, and the
        components of the vector are positive. Since the components of the given fixed probability vector
        are not all positive, P cannot be regular.



7.17.   Which of the following stochastic matrices are regular?




              Recall that a stochastic matrix is regular if a power of the matrix has only positive entries.



                     (y :)(: :> (: :)
        (i)   A is not regular since there is a 1 on the main diagonal (in the second row).

        (ii) B2 =                     =             = the identity matrix I

              B3   = (; ;)(; ;)        = (01 0
                                             1) = B

              Thus every even power of B is the identity matrix I and every odd power of B is the matrix B.
              Accordingly every power of B has zero entries, and so B is not regular.
CHAP. 71                                    MARKOV CHAINS                                             141

      (iii) C is not regular since i t has a 1 on the main diagonal.




           Since all the entries of 0 3 are positive, D is regular.



MARKOV CHAINS
7.18. A student's study habits are as follows. If he studies one night, he is 70% sure not
      to study the next night. On the other hand, if he does not study one night, he is 60%
      sure not to study the next night as well. In the long run, how often does he study?
           The states of the system are S (studying) and T (not studying). The transition matrix is
                                                                  S T

                                                P      =    :(:: :>
      To discover what happens in the long run, we must find the unique fixed probability vector t of P.
      By Problem 7.13, U = (.4,.7) is a fixed point of P and so t =            (A,&)
                                                                                is the required proba-
      bility vector. Thus in the long run the student studies  of the time.



7.19. A psychologist makes the following assumptions concerning the behavior of mice
      subjected to a particular feeding schedule. For any particular trial 80% of the mice
      that went right on the previous experiment will go right on this trial, and 60% of
      those mice that went left on the previous experiment will go right on this trial. If
      50% went right on the first trial, what would he predict for (i) the second trial,
      (ii) the third trial, (iii) the thousandth trial?
           The states of the system are R (right) and L (left). The transition matrix is
                                                                  R L

                                                       =         (:: :)
           The probability distribution for the first trial is p = (.6,.6). To compute the probability
      distribution for the next step, i.e. the second trial, multiply p by the transition matrix P:
                                        1




      Thus on the second trial he predicts that 70% of the mice will go right and 30% will go left. To
      compute the probability distribution for the third trial, multiply that of the second trial by P:

                                            (.7,.3)   ('* .">
                                                       .6   .4
                                                                 = (.74, 26)

      Thus on the third trial he predicts that 74% of the mice will go right and 26% will go left.

          We assume that the probability distribution for the thousandth trial is essentially the
     stationary probability distribution of the Markov chain, i.e. the unique fixed probability vector t
     of the transition matrix P. By Problem 7.13, U = (.6,.2) is a fixed point of P and so
     t = (f,&)= (.75, .25). Thus he predicts that, on the thousandth trial, 76% of the mice will go to
     the right and 25% will go to the left.
142                                             MARKOV CHAINS                                           [CHAP. 7



7.20.   Given the transition matrix                                      with initial probability distribution
        p(0)   = (&,*).      Define and find:    (i)p',s,', (ii) p C 3 ) ,(iii)p y ) .

        (3     p(3) is the probability of moving from state u2 to state ul in 3 steps. It can be obtained from
                 21
               the 3-step transition matrix P3; hence first compute P3:




               Then p g ) is the entry in the second row first column of P3: p g ) = 3.

        (ii) p(3) is the probability distribution of the system after three steps. It can be obtained by
             successively computing p ( l ) , p(2) and then ~ ( 3 ) :




               However, since the 3-step transition matrix P3 has already been computed in (i),p(3) can also
               be obtained as follows:



        (iii) p(3) is the probability that the process is in the state a, after 3 steps; it is the second com-
              ponent of the 3-step probability distribution ~(3): p y ) = A.




7.21.   Given the transition matrix P =

        p ( 0 ) = (#,O,+).
                                                      (:1 :)
                                                      8 4        0       and the initial probability distribution

                       Find: (i) p g ) and p::), (ii) p ( 4 ) and p',"), (iii) the vector that pto)Pn
        approaches, (iv) the matrix that Pn approaches.




                                                                                         (i i i)
        (i)    First compute the 2-step transition matrix P2:

                                                  o t f o 4 ! i
                                      p2   =    ( t 4 o)(i
                                                  0   1    0    0 1 0
                                                                     +    0)    =

               Then p g ) = 9 and pi:) = 0, since these numbers refer to the entries in P2.

        (ii) To compute ~ ( 4 1use
                               ,   the 2-step transition matrix P2 and the initial probability distribution
               pco,:
                                p(2) = p(O>p2 = (g,   8, 0)     and       p(4) = p(2)PZ = (&, &p   9)
               Since p y ) is the third component of pc4), p y ) = 8.

        (iii) By Theorem 7.3, p(0)Pr approaches the unique fixed probability vector t of P. To obtain t ,
              first find any fixed vector U = (2, y, 2):
CHAP. 71                                            MARKOV CHAINS                                                              143




                                             i:f D
                                              **                                               *v = x
                              (2,   II, 2)          0       = (x,Y, 4                 or       *x+*y+z              = y
                                                                                               82 = z
              Find any nonzero solution of the above system of equations. Set z = 1; then by the third
              equation 5 = 2, and by the first equation y = 4. Thus U = (2,4,1) is a fixed point of P and so
              t = (g,++). In other words, p(0)Pn approaches (+,+, 3).



                              (;
        (iv) Pn approaches the matrix T whose rows are each the fixed probability vector of P; hence

              Pn approaches       !).
                              b 4 +
                                       T - T



7.22.   A salesman's territory consists of three cities, A, B and C. He never sells in the
        same city on successive days. If he sells in city A, then the next day he sells in
        city B. However, if he sells in either B or C, then the next day he is twice as likely
        to sell in city A as in the other city. In the long run, how often does he sell in each
        of the cities?




                                                            ="i;: ;)
              The transition matrix of the problem is as follows:
                                                                         A        B        C

                                                        P
                                                                   C     Q        Q        O
              We seek the unique fixed probability vector t of the matrix P. First find any fixed vector




                                                                                               1
        U = (5, y,2 ) :
                                                                                               Q y + Qz = x




        U =   (i,
                            (2,   v, 2) Q
                                             (I I :)
                                                0   Q       =   (5, II,z )            or


        Set, say, z = 1. Then by the third equation y = 3, and by the first equation z =
                                                                                               x+gz
                                                                                               *I4


                3, 1). Also 324 = (8,9, 3) is a fixed vector of P. Multiply 3u by 1/(8 4- 9 4- 3) =
                                                                                                       =
                                                                                                    Thus
                                                                                                      to
                                                                                                            = y


                                                                                                                          i.
        obtain the required fixed probability vector t = ($,&,&) = (.40,.45,.15). Thus in the long
        run he sells 40% of the time in city A , 45% of the time in B and 16% of the time in C.



7.23.   There are 2 white marbles in urn A and 3 red marbles in urn B. At each step of
        the process a marble is selected from each urn and the two marbles selected are
        interchanged. Let the state ai of the system be the number i of red marbles in urn A.
        (i) Find the transition matrix P. (ii) What is the probability that there are 2 red
        marbles in urn A after 3 steps? (iii) In the long run, what is the probability that
        there are 2 red marbles in urn A ?

        (i)   There are three states, ao,al and a, described by the following diagrams:



                                        A           B               A             B                A            B
                                               a0                            a1                            a2


                  If the system is in state uo, then a white marble must be selected from urn A and a red
              marble from urn B, so the system must move to state al. Accordingly, the first row of the
              transition matrix is (0, 1,O).
144                                                MARKOV CHAINS                                                                                [CHAP. 7


                   Suppose the system is in state al. It can move to state a. if and only if a red marble is
             selected from urn A and a white marble from urn B; the probability of that happening is
             + * Q = 6. Thus pl0 = Q. The system can move from state a, to a2 if and only if a white
             marble is selected from urn A and a red marble from urn B; the probability of that happening
             is      Q = Q. Thus p12= 9. Accordingly, the probability that the system remains in state
             a , is p , , = 1 - Q - Q = &. Thus the second row of the transition matrix is (&,&,+).   (Note
             that p,, can also be obtained from the fact that the system remains in the state a, if either
             a white marble is drawn from each urn, probability 4 Q =             or a red marble is drawn          9,
             from each urn, probability -& 8 = Q; thus p11 = 8 Q = &.)                       +
                  Now suppose the system is in state a,. A red marble must be drawn from urn A. If a
             red marble is selected from urn B, probability Q, then the system remains in state a2; and if
             a white marble is selected from urn B, probability 3, then the system moves to state al. Note
             that the system can never move from state a, to the state a@ Thus the third row of the transi-
                                   6).
             tion matrix is ( O , % , That is,
                                                                                    a0       a1          a2




        (ii) The system began in state ao, i.e.           p ( 0 ) = (l,O,0).            Thus:
                  p")   = p ( 0 ) p = (0, 1, O),        p'2'       = pc1>p = ( Q , & , Q ) ,                       p'3'       = p'2'P = ( 12'
                                                                                                                                          A 23    5
                                                                                                                                              36' 18)

             Accordingly, the probability that there are 2 red marbles in urn A after 3 steps is $.

        (iii) We seek the unique fixed probability vector t of the transition matrix P. First find any fixed
              vector U = (x,y,z):
                                                                             QY = x
                                                 = (2,2/, 4        or        x+-&y+#z    = y
                                                                             Qy+Qz = 2

             Set, say, z = 1. Then by the first equation y = 6, and by the third equation z = 3. Hence
             U = (1,6,3). Multiply U                           +
                                         by 1/(1+ 6 3) = & to obtain the required unique fixed proba-
             bility vector t = (A, .6,.3). Thus, in the long run, 30% of the time there will be 2 red marbles
             in urn A.
                 Note that the long run probability distribution is the same as if the five marbles were
             placed in an urn and 2 were selected at random to put into urn A.



7.24,   A player has $2. He bets $1 a t a time and wins $1 with probability 4. He stops play-
        ing if he loses the $2 or wins $4. (i) What is the probability that he has lost his money
        a t the end of, a t most, 5 plays? (ii) What is the probability that the game lasts
        more than 7 plays?
            This is a random walk with absorbing barriers at 0 and 6 (see Examples 7.22 and 7.23). The
        transition matrix is
                                                               %               a2       a3        a4          a5      a6




                                                          1
                                                   a.          1       0       0         0        0           0           0
                                                   al          +       O       +        O        O        O          O
                                                   a2          O       +       O        +        O        O          O
                                     P    =        a3          O       O       &         O        &           O       O
                                                   a4          O       O       O         &       O            &       O
                                                   as          O           O        O        O            ~           O         +
                                                   a6          0       0       0         0           0        0           1

        with initial probability distribution p ( 0 ) = (0, O,l, O,O, 0,O) since he began with $2.
CHAP. 71                                            MARKOV CHAINS                                                           145

        (i)    We seek p(,5), the probability that the system is in state a. after five steps. Compute the
               6th step probability distribution ~ ( 5 ) :
                     p(” = p c o > p = (O,*,    O,iJ,O, 0, 0)               P(4)   = P ( 3 ) P = (8, 0, A, 0, &, 0,   A)
                     p(2’   = p ( 1 ) P = (i,0, *, 0, f, 0, 0)              P(5)   = P ( 4 ) p = (8’&, 0, &, 0, 9,     A)
                     P(3)                       0, 8, O,&, 0)
                            = P ( 2 ) P = (*, -&,
                    Thus p0(5),the probability that he has no money after 6 plays, is 8.

        (ii) Compute ~ ( 7 ) : p ( 6 ) = p ( 5 ) P = 0, &, 0,
                                                    (E,       0,      B, 9).
                                                                    p ( 7 ) = p ( 6 ) P = (z
                                                                                           2991         2 8 9 O, 1l23
                                                                                              64’ ‘ 9 127           89 8 )


                  The probability that the game lasts more than 7 plays, i.e. that the system is not in state
             a. or a6 after 7 steps, is    & + ,&+ &   = 27
                                                         64’



7.25.   Consider repeated tosses of a fair die. Let X , be the maximum of the numbers
        occurring in the first n trials.
        (i) Find the transition matrix P of the Markov chain. Is the matrix regular?
        (ii) Find p c l ) ,the probability distribution after the first toss.
        (iii) Find p C 2 a) nd p C 3 ) .
        (i)    The state space of the Markov chain is {1,2,3,4,5,6}. The transition matrix is
                                                                 1 2 3 4 5 6




                                               P     =




             We obtain, for example, the third row of the matrix as follows. Suppose the system is in
             state 3, i.e. the maximum of the numbers occurring on the first n trials is 3. Then the
             system remains in state 3 if a 1, 2,or 3 occurs on the (n+l)-st trial; hence p33 = 8. On the other
             hand, the system moves to state 4,5 or 6,respectively, if a 4,5 or 6 occurs on the (n 4- 1)-sttrial;
             hence p 3 , = pS5= p 3 6 = Q. The system can never move to state 1 or 2 since a 3 has occurred
             on one of the trials; hence ~ 3 =  1 ~ 3 =2 0. Thus the third row of the transition matrix is
             (0, 0, #, 9,9,9). The other rows are obtained similarly.
                  The matrix is not regular since state 6 is absorbing, i.e. there is a 1 on the main diagonal
             in row 6.
        (ii) On the first toss of the die, the state of the system Xl is the number occurring; hence
              P(”     = (9,Q, 6, Q, 9,Q).
        (iii) p ( 2 ) = p > p= ( % 1 3 2 2. s ”). $3,            = p c 2 , p = (1
                                                                               216’ 216’ 19 218’
                                                                                     7 216’      61 91
                                                                                             37 216’
                                     * 36’ 36’ 36’ 36’ 36


7.26.   Two boys b 1 and b2 and two girls gl and 9 2 are throwing a ball from one to the other.
        Each boy throws the ball to the other boy with probability & and to each girl with
        probability $. On the other hand, each girl throws the ball to each boy with
        probability 3 and never to the other girl. In the long run, how often does each
        receive the ball ?
              This is a Markov chain with state space {bl, b2, gl, g 2 } and transition matrix
                                                                 bl    b2     9,    6rZ




                                                P    =
146                                          MARKOV CHAINS                                           [CHAP. 7


         We seek a fixed vector U = (x,y,x,w)                   = (x,g,z,w).
                                                 of P: (x,y,z,w)P          Set the corresponding
      components of UP equal to U to obtain the system
                                               &y + +z + &w = x
                                               &x + &z + &w = y
                                               &x + &y = z
                                               &x + &g = w
      We seek any nonzero solution. Set, say, x = 1; then w = 1, x = 2 and y = 2. Thus U = (2,2,1,1)
      and so the unique fixed probability of P is t = (Q,Q,Q,Q). Thus, in the long run, each boy
      receives the ball Q of the time and each girl Q of the time.



7.27. Prove Theorem 7.6: Let P = (pij) be the transition matrix of a Markov chain.
      If p = (pi) is the probability distribution of the system a t some arbitrary time k,
      then pP is the probability distribution of the system one step later, i.e. a t time k 1;             +
      hence pPn is the probability distribution of the system n steps later, i.e. a t time
        +
      k n. In particular, p C 1 =                ) p ( l ) P , . . . and also pen) = pco)Pn.
                                  ) p(O)P, p C 2 =
                                                  .
           Suppose the state space is { a l , u2,. . , a m } . The probability that the system is in state aj at
                                              +
      time k and then in state ai at time k 1 is the product p j p j i . Thus the probability that the system
                              +
      is in state ui a t time k 1 is the sum                                  m
                                   PlPli   + P Z P ~ +~ ... + PmPmi   =   2 Pjpji
                                                                          J=1
      Thus the probability distribution at time k     + 1 is

      However, this vector is precisely the product of the vector p = ( p i ) by the matrix P = (pi$: p* = p P .



7.28. Prove Theorem 7.5: Let P be the transition matrix of a Markov chain.                          Then the
      n-step transition matrix is equal to the nth power of P : P ( n )= Pn.
           Suppose the system is in state ai at, say, time lc. We seek the probability p:;) that the system
      is in state uj at time k + n . Now the probability distribution of the system at time k, since the
      system is in state ui,is the vector ei = (0, .. .,O, 1,0, .. .,O) which has a 1 at the ith position
      and zeros everywhere else. By the preceding problem, the probability distribution at time k + n
      is the product e i P . But e i P is the ith row of the matrix Pn. Thus Pi;) is the jth component
      of the ith row of Pn, and so P(n) = Pn.



MISCELLANEOUS PROBLEMS
7.29. The transition probabilities of a Markov chain can be represented by a diagram,
      called a transition diagram, where a positive probability pij is denoted by an arrow
      from the state a-i to the state aj. Find the transition matrix of each of the following
      transition diagrams:
CHAP. 71                                        MARKOV CHAINS                                                147

        (i)   Note first that the state space is {al,as,a3} and so the transition matrix is of the form

                                                                      a1       a2   a3




              The ith row of the matrix is obtained by finding those arrows which emanate from a, in the
              diagram; the number attached to the arrow from ai to ui is the jth component of the ith row.
              Thus the transition matrix is
                                                                      a1   a2       a3



                                                    P    =



        (ii) The state space is {al,a2,a3,a4}. The transition matrix is




7.30.   Suppose the transition matrix of a Markov chain is as follows:




                                                         a4   \*      &        i    a/
        Is the Markov chain regular?
               Note that once the system enters the state al or the state a2, then it can never move to
        state u3 or state a4, i.e. the system remains in the state subspace {al,uz}. Thus, in particular,
        p ( n ) = 0 for every n and so every power Pn will contain a zero entry. Hence P is not regular.
         13




7.31. Suppose m points on a circle are numbered respectively 1,2, . ..,m in a counterclock-
      wise direction. A particle performs a “random walk” on the circle; it moves one
        step counterclockwise with probability p or one step clockwise with probability
        q = 1 - p . Find the transition matrix of this Markov chain.
            The state space is {1,2, . . .,m}. The diagram to the right below can be used to obtain the
        transition matrix which appears to the left below.




                                                                                                “;I
                         1        2                  4         ...     m-2          m-1         m
                                                                                                       3


                  1      0        P                  0         ...         0             0
                  2      Q        0                  0         ...         0             0
                  3                                           ...          0             0      ..
        P =       .      0        !l                P
                         .............. .... . . . . . . . .. . . . . . . . ............. ...
               m-1       0        0        0         0        ...          Q             0      P
                 m       P        0        0         0        ...          0             Q      0 1
                                                                                                      Vl-1
148                                                     MARKOV CHAINS                                          [CHAP. 7


                                             Supplementary Problems
MATRIX MULTIPLICATION

7.32.   Given A =                            . Find uA if (i) U = (1,-3,2),    (ii) U = (3,0,-2),   (iii) U = (4,-1,-1).




7.33.   Given A = (3
                    1 -1
                                        :)    and B =               . Find A B and BA.


7.34.   Given A =                        Find A2 and A3.



7.35.   Given A =          (i :>.        Find An.



PROBABILITY VECTORS AND STOCHASTIC MATRICES
7.36. Which vectors are probability vectors?
        (i) ( $ 9 * 9 --& *)       (ii) (*, o,+,*,              * ,+,o, )).
                                                     9) (iii) (A,



7.38.   Which matrices are stochastic?




REGULAR STOCHASTIC MATRICES AND FIXED PROBABILITY VECTORS
7.39. Find the unique fixed probability vector of each matrix:




7.40.   (i)   Find the unique fixed probability vector t of P =


        (ii) What matrix does P n approach? (iii) What vector does              (a,&, Q)Pn approach?
7.41.   Find the unique fixed probability vector t of each matrix:
                                                        0   1   0

                       0       1   0


7.42.   (i)   Find the unique fixed probability vector t of P =
        (ii) What matrix does P n approach?
        (iii) What vector does ($, 0, 8, &)Pn approach?
        (iv) What vector does (*, 0, 0, &)Pn approach?
CHAP. 71                                           MARKOV CHAINS                                                      149

7.43.   (i) Given that t = (a,O,&,&)            is a fixed point of a stochastic matrix P, is P regular?
        (ii) Given that t = (&,&,&,&)           is a fixed point of a stochastic matrix P, is P regular?

7.44.   Which of the stochastic matrices are regular?




7.45.   Show that ( c f   + ce + de, af + b f + ae, ad + bd + bc) is a fixed point of the matrix
                                                      1-a-b              a
                                       P    =     (      c          1-C-d
                                                         e              f        1-e-f



MARKOV CHAINS
7.46. A man’s smoking habits are as follows. If he smokes filter cigarettes one week, he switches to
      nonfilter cigarettes the next week with probability .2. On the other hand, if he smokes nonfilter
      cigarettes one week, there is a probability of .7 that he will smoke nonfilter cigarettes the next week
      as well. In the long run, how often does he smoke filter cigarettes?

7.47.   A gambler’s luck follows a pattern. If he wins a game, the probability of winning the next game
        is .6. However, if he loses a game, the probability of losing the next game is .7. There is an
        even chance that the gambler wins the first game.
        (i> What is the probability that he wins the second game?
        (ii) What is the probability that he wins the third game?
        (iii) In the long run, how often will he win?


7.48.   For a Markov chain, the transition matrix is P =                (i i)     with initial probability distribution
        p(0’  = (&,%). Find: (i) p i t ) ; (ii) pj;);        (iii) ~ ( 2 ) ; (iv) p y ) ; (v) the vector p(o)Pn approaches;
                                                 --
        (vi) the matrix P n approaches.



7.49.   For a Markov chain, the transition matrix                                        and the initial probability dis-

        tribution is   p(0) =   (+,a, 0). Find (i) p:$, (ii) pi:), (iii)     p(2),   (iv) p y ) .

7.50.   Each year a man trades his car for a new car. If he has a Buick, he trades it for a Plymouth.
        If he has a Plymouth, he trades it for a Ford. However, if he has a Ford, he is just as likely to
        trade it for a new Ford as to trade it for a Buick or a Plymouth. In 1955 he bought his first car
        which was a Ford.
        (i) Find the probability that he has a (a) 1957 Ford, ( b ) 1957 Buick, ( c ) 1958 Plymouth,
             (d) 1958 Ford.
        (ii) In the long run, how often will he have a Ford?

7.51.   There are 2 white marbles in urn A and 4 red marbles in urn B. At each step of the process a
        marble is selected from each urn, and the two marbles selected are interchanged. Let X, be the
        number of red marbles in urn A after n interchanges. (i) Find the transition matrix P. (ii) What
        is the probability that there are 2 red marbles in urn A after 3 steps? (iii) In the long run, what
        is the probability that there are 2 red marbles in urn A ?

7.52.   Solve the preceding problem in the case that there are 3 white marbles in urn A and 3 red marbles
        in urn B.
150                                              MARKOV CHAINS                                          [CHAP. 7


7.53.   A fair coin is tossed until 3 heads occur in a row. Let X, be the length of the sequence of heads
        ending at the nth trial. (See Example 7.24.) What is the probability that there are at least
        8 tosses of the coin?

7.54.   A player has 3 dollars. At each play of a game, he loses one
        dollar with probability 3 but wins two dollars with probability t.
        He stops playing if he has lost his 3 dollars or he has won at
        least 3 dollars.
        (i) Find the transition matrix of the Markov chain.
        (ii) What is the probability that there are at least 4 plays to
              the game?

7.55.   The diagram on the right shows four compartments with doors
        leading from one to another. A mouse in any compartment is
        equally likely to pass through each of the doors of the compart-
        ment. Find the transition matrix of the Markov chain.

MISCELLANEOUS PROBLEMS
7.56. Find the transition matrix corresponding to each transition diagram:




                                                                                     (ii)

7.57.   Draw a transition diagram for each transition matrix:
                                                                                       a1   a2   a3




7.58.   Consider the vector ei = (0, . . .,0, l,O, . . .,0) which has a 1 at the ith position and zeros elsewhere.
        Show that eiA is the ith row of the matrix A (whenever the product is defined).




                        Answers to Supplementary Problems
7.32.   (i) (-1, -1,12), (ii) (-7, -10,3),   (iii) (-6, -11,lO)


7.33.   AB =     (17 -10
                      -4),
                                           5 -1 13
                                  BA = (-3 -9
                                         -6 -3 -6
                                                 9)


7.34.   A2 =    (': :),      A3   = (27  18
                                     26 -1)


7.35.   An      (i ";">
7.36.   Only (iii).
CHAP. 71                                             MARKOV CHAINS                   151

7.37.   (i) (3/13,0, 2/13,5/13,3/13)
        (ii) (8/18,2/18,0, 1/18,3/18,0, 4/18)
        (iii) (4/45,24/45,6/45,0, 3/45,8/45)

7.38.   Only (ii) and (iv).
7.39.   (i) (6/11,5/11), (ii) (10/19,9/19), (iii) (6/13,8/13), (iv) (3, -15)
7.40.   (i) t = (4/13,8/13,1/13), (iii) t = (4/13,8/13,1/13)
7.41.   (i) t = (2/9,6/9,1/9), (ii) t = (5/16,6/16,4/16)
7.42.   (i) t = (2/11,4/11,1/11,4/11), (iii) t, (iv) t
                                                       /I 0 0 o\
7.43.

7.44.
        (i) No, (ii) not necessarily, e.g. P =
        Only (iii)
                                                       1: :: :]
                                                       \ o 0 0 I/
7.46.   60% of the time
7.47.   (i) 9/20, (ii) 87/200, (iii) 3/7 of the time

7.48.   (i) 9/16, (ii) 3/8, (iii) (37/64,27/64), (iv) 37/64, (v) (-6,.4), (Vi)
7.49.   (i) 3/8, (ii) 1/2, (iii) (7/16,2/16,7/16), (iv) 7/16




                     (:I I)
7.50.   (i) (a) 4/9, (b) 1/9, (c) 7/27, (d) 16/27.            (ii) 60% of the time


7.51.   (i) P =       Q   -& j#        (ii) 3/8   (iii) 2/6


                     10   1   0   o\
7.52.

                  \o      0   1 01
7.53.   81/128
                       1 0 0 0 0 0 0
                       q o o & o o o

7.54.




7.55.



7.57.                                                              (ii)




                                                                          *
                                              INDEX

Absorbing state, 134                                 Empty set, 1
Algebra of sets, 5                                   Equiprobable space, 42
                                                     Event, 38
Bayes’ theorem, 56                                    independent, 57
Bernoulli distribution, 106                          Expectation, 75, 83, 84
Binomial                                             Expected value, 75
  coefficients, 19
 theorem, 19,27                                      Factorial notation, 16
Binomial distribution, 105                           Failure (binomial distribution), 105
Birthday problem, 43                                 Family of sets, 5
                                                     Finite
C ( n , 4 ,21                                          equiprobable space, 42
Cells, 5                                               probability space, 41
Central limit theorem, 108                             sets, 4
Certain event, 38                                      stochastic process, 55
Chain (Markov), 130                                  Fixed vector, 127,129
Class of sets, 5                                     Function, 74
Column of a matrix, 126                                cumulative distribution, 86
Combinations, 21                                       density, 84
Combinatorial analysis, 16                             of random variables, 82
Complement of a set, 2                                 probability, 75
Component of a vector, 126
Conditional probability, 54                          Gaussian distribution, 106
  function, 63
Contained, 1                                         Image, 74
Continuous random variable, 84                       Impossible event, 38
Correlation, 80                                      Independent
Countable sets, 4                                      events, 57
Countably infinite, 4                                  random variables, 81,85
Counting, 16                                           trials, 58, 68
Covariance, 80                                       Indexed sets, 5
Cumulative distribution function, 85                 Infinite
                                                       sample spaces, 43
De Morgan’s laws, 3                                    sets, 4
Density function, 84                                 Initial probability distribution, 132
Dependent events, 57                                 Integers, 2
Diagonal, 134                                        Intersection of sets, 25
Diagram,                                             Interval, 2
 transition, 146
 tree, 9,23, 55                                      Joint
Difference of sets, 2                                  distribution, 79
Discrete                                               probability function, 79
 probability space, 43
 random variable, 83                                 Large numbers (law of), 86
Disjoint sets, 2
Distribution (of a random variable), 75, 83          Main diagonal, 134
Distribution,                                        Mapping, 74
 binomial, 105                                       Marginal distribution, 80
 Gaussian, 106                                       Markov chain, 130
 joint, 79                                           Matrix, 126
 multinomial, 109                                     stochastic, 127
 normal, 106                                         Mean, 75
 Poisson, 108                                        Member, 1
 standard normal, 107                                Multinomial
                                                      coefficients, 20
Element, 1                                            distribution, 109
Elementary event, 38                                 Multiplication theorem, 55



                                               152
                                 INDEX                                          153

Mutually exclusive events, 39            Repeated trials, 68
                                         Row of a matrix, 126
N (positive integers), 2
N(cc,u2),107                             Sample
Normal distribution, 106                   mean, 87
Null set, 1                                point, 38
                                           space, 38
Odds, 42                                 Sampling, 18
Ordered                                  Scalar multiplication, 126
 partitions, 22                          Set, 1
 samples, 18                             Square matrix, 126
                                         Standard deviation, 78,83,86
p ( k A), 108                            Standard
P(n,r), 17                                 normal distribution, 107
Partitions, 6,22, 66                       units, 107
Pascal’s triangle, 20                    Standardized random variable, 79
Permutations, 16                         State space, 130
  with repetitions, 17                   Stationary distribution, 133
Poisson distribution, 108                Stochastic
Positive integers, 2                       matrix, 128
Power set, 6                               process, 66
Preimage, 74                             Subset, 1
Probability, 38, 40                      Success (binomial distribution), 106
  conditional, 64
  function, 40, 76                       Tchebycheff’s inequality, 86
  product, 60                            Techniques of counting, 16
  vector, 127                            Transition
Process (stochastic), 66                   diagram, 146
Product                                    matrix, 130
  probability space, 60                  Tree diagram, 9,23, 66
  set, 4                                 Trials, independent, 68, 68

R (real numbers), 2                      Uncountable sets, 4
Random events, 42                        Uniform space, 42,43
Random variables, 74                     Union of sets, 2
 continuous, 84                          Universal set, 1
 discrete, 83
 function of, 82                         Variance, 78,83,84
 independent, 81,86                      Vector, 126
Range, 74                                 probability, 127
Real numbers, 2                          Venn diagrams, 3
Regular stochastic matrix, 128
Relative                                 Weighted average, 76
 complement, 2
 frequency, 38                           Z (integers), 2
                     Schaum's Outlines
               and the Power of Computers                    ...
                  The Ultimate Solution!

Now Available! An electronic, interactive version of Theory and
Problems of Electric Circuits from the Schaum's Outline Series.

MathSoft, Inc. has joined with McGraw-Hill to offer you an electronic version
of the Theory and Problems of Electric Circuits from the Schaum's Outline
Series. Designed for students, educators, and professionals, this resource
provides comprehensive interactive on-screen access to the entire Table of
Contents including over 390 solved problems using Mathcad technical
calculation software for PC Windows and Macintosh.

When used with Mathcad, this "live" electronic book makes your problem
solving easier with quick power to do a wide range of technical calculations.
Enter your calculations, add graphs, math and explanatory text anywhere on the
page and you're done - Mathcad does the calculating work for you. Print your
results in presentation-quality output for truly informative documents, complete
with equations in real math notation. As with all of Mathcad's Electronic
Books, Electric Circuits will save you even more time by giving you hundreds of
interactive formulas and explanations you can immediately use in your own
work.

Topics in Electric Circuits cover all the material in the Schaum's Outline
including circuit diagramming and analysis, current voltage and power relations
with related solution techniques, and DC and AC circuit analysis, including
transient analysis and Fourier Transforms. All topics are treated with "live"
math, so you can experiment with all parameters and equations in the book or
in your documents.




To obtain the latest prices and terms and to order Mathcad and the electronic
version of Theory and Problems of Electric Circuits from the Schaum's Outline
Series, call 1-800-628-4223or 617-577-1017.



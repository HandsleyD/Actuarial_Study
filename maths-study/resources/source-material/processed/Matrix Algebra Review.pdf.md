---
normalized_id: shared-pdf-reference-matrix-algebra-review
exam_code: SHARED
material_scope: matrix algebra review.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Matrix Algebra Review.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-matrix-algebra-review

          Introduction to Financial Econometrics
            Appendix Matrix Algebra Review
                                    Eric Zivot
                             Department of Economics
                             University of Washington
                                 January 3, 2000
                          This version: February 6, 2001


1     Matrix Algebra Review
A matrix is just an array of numbers. The dimension of a matrix is determined by
the number of its rows and columns. For example, a matrix A with n rows and m
columns is illustrated below
                                                    
                                   a11 a12 . . . a1m
                                  a21 a22 . . . a2m 
                                                    
                             A =  ..    ..       .. 
                           (n×m)  .      . ... . 
                                   an1 an2 . . . anm

where aij denotes the ith row and j th column element of A.
   A vector is simply a matrix with 1 column. For example,
                                               
                                             x1
                                            x2 
                                               
                                      x =  .. 
                                   (n×1)    . 
                                             xn
is an n × 1 vector with elements x1 , x2 , . . . , xn . Vectors and matrices are often written
in bold type (or underlined) to distinguish them from scalars (single elements of
vectors or matrices).
    The transpose of an n × m matrix A is a new matrix with the rows and columns
of A interchanged and is denoted A0 or A| . For example,
                                                                    
                                 ·                ¸              1 4
                                   1 2 3
                         A =                        , A0 =  2 5 
                       (2×3)       4    5     6         (3×2)
                                                                 3 6

                                              1
                                     
                                    1                             £        ¤
                          x     =  2 ,                  x0 =        1 2 3 .
                      (3×1)                           (1×3)
                                    3

    A symmetric matrix A is such that A = A0 . Obviously this can only occur if A
is a square matrix; i.e., the number of rows of A is equal to the number of columns.
For example, consider the 2 × 2 matrix
                                         ·      ¸
                                           1 2
                                   A=             .
                                           2 1

Clearly,                                                  ·           ¸
                                            0                 1 2
                                    A =A=                                 .
                                                              2 1

1.1     Basic Matrix Operations
1.1.1      Addition and subtraction
Matrix addition and subtraction are element by element operations and only apply
to matrices of the same dimension. For example, let
                               ·      ¸       ·     ¸
                                 4 9            2 0
                          A=            , B=          .
                                 2 1            0 7

Then
                      ·         ¸       ·             ¸       ·                  ¸           ·         ¸
                          4 9                   2 0               4+2 9+0                        6 9
           A+B =                    +                     =                          =                     ,
                          2 1                   0 7               2+0 1+7                        2 8
                      ·         ¸       ·             ¸       ·                  ¸           ·             ¸
                          4 9                   2 0               4−2 9−0                        2 9
           A−B =                    −                     =                          =                         .
                          2 1                   0 7               2−0 1−7                        2 −6

1.1.2      Scalar Multiplication
Here we refer to the multiplication of a matrix by a scalar number. This is also an
element-by-element operation. For example, let c = 2 and
                                       ·        ¸
                                         3 −1
                                  A=              .
                                         0 5

Then                            ·                                 ¸       ·          ¸
                                     2 · 3 2 · (−1)                           6 −2
                      c·A=                                            =                  .
                                    2 · (0)  2·5                              0 10




                                                          2
1.1.3   Matrix Multiplication
Matrix multiplication only applies to conformable matrices. A and B are conformable
matrices of the number of columns in A is equal to the number of rows in B. For
example, if A is m× n and B is m × p then A and B are conformable. The mechanics
of matrix multiplication is best explained by example. Let
                             ·       ¸            ·         ¸
                                1 2                 1 2 1
                        A =             and B =               .
                      (2×2)     3 4         (2×3)   3 4 2

Then
                                     ·           ¸ ·       ¸
                                         1 2         1 2 1
              A · B          =                    ·
             (2×2)   (2×3)               3 4         3 4 2
                                     ·                              ¸
                                 1·1+2·3 1·2+2·4 1·1+2·2
                             =
                                 3·1+4·3 3·2+4·4 3·1+4·2
                               ·          ¸
                                 7 10 5
                             =              = C
                                 15 22 11                 (2×3)

The resulting matrix C has 2 rows and 3 columns. In general, if A is n × m and B
is m × p then C = A · B is n × p.
    As another example, let
                              ·      ¸           · ¸
                                1 2                 2
                          A = 3 4 and B = 6 .
                             (2×2)                       (2×1)

Then
                                                    ·      ¸ · ¸
                                                        1 2   5
                               A · B             =          ·
                             (2×2)       (2×1)          3 4   6
                                                   ·            ¸
                                                     1·5+2·6
                                                 =
                                                     3·5+4·6
                                                   ·    ¸
                                                     17
                                                 =        .
                                                     39

   As a &nal example, let
                                               
                                          1       4
                                              
                                     x = 2 , y = 5 .
                                          3       6

Then                                        
                      £     ¤    4
                x0 y = 1 2 3 ·  5  = 1 · 4 + 2 · 5 + 3 · 6 = 32
                                 6

                                                    3
1.2    The Identity Matrix
The identity matrix plays a similar role as the number 1. Multiplying any number by
1 gives back that number. In matrix algebra, pre or post multiplying a matrix A by
a conformable identity matrix gives back the matrix A. To illustrate, let
                                         ·       ¸
                                           1 0
                                    I=
                                           0 1

denote the 2 dimensional identity matrix and let
                                     ·           ¸
                                        a11 a12
                                 A=
                                        a21 a22

denote an arbitrary 2 × 2 matrix. Then
                                   ·     ¸ ·           ¸
                                     1 0       a11 a12
                         I·A =             ·
                                     0 1       a21 a22
                                   ·         ¸
                                     a11 a12
                               =               =A
                                     a21 a22

and
                                        ·                 ¸ ·     ¸
                                            a11 a12           1 0
                           A·I =                            ·
                                            a21 a22           0 1
                                        ·                 ¸
                                            a11       a12
                                   =                        = A.
                                            a21       a22

1.3    Inverse Matrix
To be completed.

1.4    Representing Summation Using Vector Notation
Consider the sum
                                 n
                                 X
                                       xk = x1 + · · · + xk.
                                 k=1

Let x = (x1 , . . . , xn )0 be an n × 1 vector and 1 = (1, . . . , 1)0 be an n × 1 vector of
ones. Then
                                            
                                             1                          Xn
                    0
                           £            ¤   . 
                                             .
                 x 1 = x1 . . . xn ·  .  = x1 + · · · + xk =              xk
                                             1                          k=1


                                                  4
and                                        
                                     x1                       Xn
                  0
                      £         ¤  . 
                 1 x = 1 . . . 1 ·  ..  = x1 + · · · + xn =     xk .
                                     xn                       k=1

    Next, consider the sum of squared x values
                                    n
                                    X
                                          x2k = x21 + · · · + x2n .
                                    k=1

This sum can be conveniently represented as
                                        
                                      x1                    Xn
              0
                   £             ¤  .     2           2
             x x = x1 . . . xn ·  ..  = x1 + · · · + xn =     x2k .
                                      xn                    k=1


    Last, consider the sum of cross products
                                  n
                                  X
                                        xk yk = x1 y1 + · · · xn yn .
                                  k=1

This sum can be compactly represented by
                                     
                                   y1                        Xn
            0
                 £            ¤  . 
                                    .
           x y = x1 . . . xn ·  .  = x1 y1 + · · · xn yn =     xk yk .
                                   yn                        k=1


Note that x0 y = y0 x.

1.5     Representing Systems of Linear Equations Using Matrix
        Algebra
Consider the system of two linear equations

                                            x+y = 1                                             (1)
                                           2x − y = 1                                           (2)

which is illustrated in Figure xxx. Equations (1) and (2) represent two straight lines
which intersect at the point x = 23 and y = 13 . This point of intersection is determined
by solving for the values of x and y such that x + y = 2x − y 1 .
   1
     Soving for x gives x = 2y. Substituting this value into the equation x + y = 1 gives 2y + y = 1
and solving for y gives y = 1/3. Solving for x then gives x = 2/3.


                                                   5
     The two linear equations can be written in matrix form as
                               ·       ¸· ¸ · ¸
                                 1 1       x       1
                                                =
                                 2 −1      y       1
or
                                                 A·z=b
where                          ·           ¸          ·       ¸                ·       ¸
                                   1 1                    x                        1
                       A=                      , z=               and b =                  .
                                   2 −1                   y                        1
    If there was a (2 × 2) matrix B, with elements bij , such that B · A = I, where I
is the (2 × 2) identity matrix, then we could solve for the elements in z as follows. In
the equation A · z = b, pre-multiply both sides by B to give

                                   B·A·z           = B·b
                                                  =⇒ I · z = B · b
                                                  =⇒ z = B · b

or                 ·       ¸       ·             ¸·       ¸       ·                            ¸
                       x               b11 b12        1               b11 · 1 + b12 · 1
                               =                              =
                       y               b21 b22        1               b21 · 1 + b22 · 1
    If such a matrix B exists it is called the inverse of A and is denoted A−1 . In-
tuitively, the inverse matrix A−1 plays a similar role as the inverse of a number.
Suppose a is a number; e.g., a = 2. Then we know that a1 · a = a−1 a = 1. Similarly,
in matrix algebra A−1 A = I where I is the identity matrix. Next, consider solving
the equation ax = 1. By simple division we have that x = a1 x = a−1 x. Similarly, in
matrix algebra if we want to solve the system of equation Ax = b we multiply by
A−1 and get x = A−1 b.
    Using B = A−1 , we may express the solution for z as

                                                 z = A−1 b.

As long as we can determine the elements in A−1 then we can solve for the values of
x and y in the vector z. Since the system of linear equations has a solution as long as
the two lines intersect, we can determine the elements in A−1 provided the two lines
are not parallel.
    There are general numerical algorithms for &nding the elements of A−1 and typical
spreadsheet programs like Excel have these algorithms available. However, if A is a
(2 × 2) matrix then there is a simple formula for A−1 . Let A be a (2 × 2) matrix such
that                                    ·          ¸
                                          a11 a12
                                  A=                 .
                                          a21 a22


                                                      6
Then                                                    ·                  ¸
                             −1             1                a22 −a12
                         A        =                                            .
                                    a11 a22 − a21 a12       −a21 a11
By brute force matrix multiplication we can verify this formula
                                       ·                  ¸·           ¸
          −1                 1             a22 −a12          a11 a12
        A A =
                    a11 a22 − a21 a12 −a21 a11               a21 a22
                                       ·                                            ¸
                             1             a22 a11 − a12 a21    a22 a12 − a12 a22
                =
                    a11 a22 − a21 a12 −a21 a11 + a11 a21 −a21 a12 + a11 a22
                                       ·                                          ¸
                             1            a22 a11 − a12 a21           0
                =
                    a11 a22 − a21 a12               0        −a21 a12 + a11 a22
                    · a22 a11 −a12 a21                   ¸
                      a11 a22 −a21 a12
                                                0
                =                      −a21 a12 +a11 a22
                              0         a11 a22 −a21 a12
                    ·         ¸
                      1 0
                =               .
                      0 1

   Let s apply the above rule to &nd the inverse of A in our example:
                                    ·          ¸ · 1 1 ¸
                      −1       1      −1 −1
                     A =                         = 32 −1  3   .
                            −1 − 2 −2 1              3    3

Notice that                          · 1        ¸·           ¸       ·         ¸
                                           1
                         −1            3   3
                                                     1 1                 1 0
                       A A=            2   −1                    =                 .
                                       3   3
                                                     2 −1                0 1
Our solution for z is then

                                         A−1 b ¸ · ¸
                                     z = ·
                                            1   1
                                            3   3
                                                     1
                                       =    2  −1
                                                     1
                                         · 32 ¸ 3 · ¸
                                            3
                                                   x
                                       =    1   =
                                            3
                                                   y

so that x = 23 and y = 13 .
    In general, if we have n linear equations in n unknown variables we may write the
system of equations as

                             a11 x1 + a12 x2 + · · · + a1n xn = b1
                             a21 x1 + a22 x2 + · · · + a2n xn = b2
                                                            ..    .
                                                             . = ..
                             an1 x1 + an2 x2 + · · · + ann xn = bn



                                                 7
which we may then express in matrix form as
                                                    
                      a11 a12 · · · a1n      x1       b1
                    a21 a22 · · · a2n   x2   b2 
                                                    
                    ..               ..   ..  =  .. 
                    .                 .    .      . 
                      an1 an2 · · · ann      xn       bn
or
                                  A · x = b.
                                 (n×n)   (n×1)   (n×1)

The solution to the system of equations is given by

                                    x = A−1 b

where A−1 A = I and I is the (n × n) identity matrix. If the number of equations is
greater than two, then we generally use numerical algorithms to &nd the elements in
A−1 .


2    Further Reading
Excellent treatments of portfolio theory using matrix algebra are given in Ingersol
(1987), Huang and Litzenberger (1988) and Campbell, Lo and MacKinlay (1996).


3    Problems
To be completed


References
[1] Campbell, J.Y., Lo, A.W., and MacKinlay, A.C. (1997). The Econometrics of
    Financial Markets. Priceton, New Jersey: Princeton University Press.

[2] Huang, C.-F., and Litzenbeger, R.H. (1988). Foundations for Financial Eco-
    nomics. New York: North-Holland.

[3] Ingersoll, J.E. (1987). Theory of Financial Decision Making. Totowa, New Jersey:
    Rowman & Little&eld.




                                          8



---
normalized_id: shared-pdf-reference-matthews-elementary-linear-algebra
exam_code: SHARED
material_scope: matthews - elementary linear algebra.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Matthews - Elementary Linear Algebra.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-matthews-elementary-linear-algebra

 ELEMENTARY

LINEAR ALGEBRA




  K. R. MATTHEWS

 DEPARTMENT OF MATHEMATICS




  UNIVERSITY OF QUEENSLAND




       First Printing, 1991
Chapter 1

LINEAR EQUATIONS

1.1     Introduction to linear equations
A linear equation in n unknowns x1 , x2 , · · · , xn is an equation of the form

                         a1 x1 + a2 x2 + · · · + an xn = b,

where a1 , a2 , . . . , an , b are given real numbers.
    For example, with x and y instead of x1 and x2 , the linear equation
2x + 3y = 6 describes the line passing through the points (3, 0) and (0, 2).
    Similarly, with x, y and z instead of x1 , x2 and x3 , the linear equa-
tion 2x + 3y + 4z = 12 describes the plane passing through the points
(6, 0, 0), (0, 4, 0), (0, 0, 3).
    A system of m linear equations in n unknowns x1 , x2 , · · · , xn is a family
of linear equations


                      a11 x1 + a12 x2 + · · · + a1n xn = b1
                      a21 x1 + a22 x2 + · · · + a2n xn = b2
                                                       ..
                                                        .
                    am1 x1 + am2 x2 + · · · + amn xn = bm .

   We wish to determine if such a system has a solution, that is to find
out if there exist numbers x1 , x2 , · · · , xn which satisfy each of the equations
simultaneously. We say that the system is consistent if it has a solution.
Otherwise the system is called inconsistent.

                                         1
2                                           CHAPTER 1. LINEAR EQUATIONS

    Note that the above system can be written concisely as
                      n
                      X
                            aij xj = bi ,    i = 1, 2, · · · , m.
                      j=1

The matrix                                             
                           a11        a12     ···   a1n
                          a21        a22     ···   a2n 
                          ..                        .. 
                                                       
                          .                          . 
                              am1 am2 · · · amn
is called the coefficient matrix of the system, while the matrix
                                                     
                           a11 a12 · · · a1n b1
                          a21 a22 · · · a2n b2 
                          ..                 ..  .. 
                                                     
                          .                   .   . 
                           am1 am2 · · · amn bm

is called the augmented matrix of the system.
    Geometrically, solving a system of linear equations in two (or three)
unknowns is equivalent to determining whether or not a family of lines (or
planes) has a common point of intersection.

EXAMPLE 1.1.1 Solve the equation

                                   2x + 3y = 6.

Solution. The equation 2x + 3y = 6 is equivalent to 2x = 6 − 3y or
x = 3 − 23 y, where y is arbitrary. So there are infinitely many solutions.

EXAMPLE 1.1.2 Solve the system

                                x+y+z = 1
                                x − y + z = 0.

Solution. We subtract the second equation from the first, to get 2y = 1
and y = 12 . Then x = y − z = 12 − z, where z is arbitrary. Again there are
infinitely many solutions.

EXAMPLE 1.1.3 Find a polynomial of the form y = a0 +a1 x+a2 x2 +a3 x3
which passes through the points (−3, −2), (−1, 2), (1, 5), (2, 1).
1.1. INTRODUCTION TO LINEAR EQUATIONS                                         3

Solution. When x has the values −3, −1, 1, 2, then y takes corresponding
values −2, 2, 5, 1 and we get four equations in the unknowns a0 , a1 , a2 , a3 :

                       a0 − 3a1 + 9a2 − 27a3 = −2
                            a0 − a 1 + a 2 − a 3 = 2
                            a0 + a 1 + a 2 + a 3 = 5
                        a0 + 2a1 + 4a2 + 8a3 = 1.

This system has the unique solution a0 = 93/20, a1 = 221/120, a2 =
−23/20,
a3 = −41/120. So the required polynomial is

                             93 221    23     41 3
                     y =       +    x − x2 −     x .
                             20 120    20    120

    In [26, pages 33–35] there are examples of systems of linear equations
which arise from simple electrical networks using Kirchhoff’s laws for elec-
trical circuits.
   Solving a system consisting of a single linear equation is easy. However if
we are dealing with two or more equations, it is desirable to have a systematic
method of determining if the system is consistent and to find all solutions.
     Instead of restricting ourselves to linear equations with rational or real
coefficients, our theory goes over to the more general case where the coef-
ficients belong to an arbitrary field. A field F is a set F which possesses
operations of addition and multiplication which satisfy the familiar rules of
rational arithmetic. There are ten basic properties that a field must have:

                         THE FIELD AXIOMS.

  1. (a + b) + c = a + (b + c) for all a, b, c in F ;

  2. (ab)c = a(bc) for all a, b, c in F ;

  3. a + b = b + a for all a, b in F ;

  4. ab = ba for all a, b in F ;

  5. there exists an element 0 in F such that 0 + a = a for all a in F ;

  6. there exists an element 1 in F such that 1a = a for all a in F ;
4                                        CHAPTER 1. LINEAR EQUATIONS

     7. to every a in F , there corresponds an additive inverse −a in F , satis-
        fying
                                      a + (−a) = 0;

     8. to every non–zero a in F , there corresponds a multiplicative inverse
        a−1 in F , satisfying
                                     aa−1 = 1;

     9. a(b + c) = ab + ac for all a, b, c in F ;

    10. 0 6= 1.
                                                          a
   With standard definitions such as a − b = a + (−b) and   = ab−1 for
                                                          b
 6 0, we have the following familiar rules:
b=


                  −(a + b) = (−a) + (−b), (ab)−1 = a−1 b−1 ;
                   −(−a) = a, (a−1 )−1 = a;
                                       a    b
                  −(a − b) = b − a, ( )−1 = ;
                                       b    a
                    a c      ad + bc
                      +    =         ;
                    b d         bd
                       ac    ac
                           =    ;
                       bd    bd
                       ab    b     a     ac
                           =   , ¡b¢ = ;
                       ac    c     c
                                          b
                   −(ab) = (−a)b = a(−b);
                     ³a´   −a     a
                   −     =    =     ;
                      b     b    −b
                      0a = 0;
                   (−a)−1 = −(a−1 ).

    Fields which have only finitely many elements are of great interest in
many parts of mathematics and its applications, for example to coding the-
ory. It is easy to construct fields containing exactly p elements, where p is
a prime number. First we must explain the idea of modular addition and
modular multiplication. If a is an integer, we define a (mod p) to be the
least remainder on dividing a by p: That is, if a = bp + r, where b and r are
integers and 0 ≤ r < p, then a (mod p) = r.
    For example, −1 (mod 2) = 1, 3 (mod 3) = 0, 5 (mod 3) = 2.
1.1. INTRODUCTION TO LINEAR EQUATIONS                                          5

   Then addition and multiplication mod p are defined by

                          a ⊕ b = (a + b) (mod p)
                          a ⊗ b = (ab) (mod p).

For example, with p = 7, we have 3 ⊕ 4 = 7 (mod 7) = 0 and 3 ⊗ 5 =
15 (mod 7) = 1. Here are the complete addition and multiplication tables
mod 7:
     ⊕   0   1   2   3   4   5    6          ⊗     0   1   2   3   4   5   6
     0   0   1   2   3   4   5    6          0     0   0   0   0   0   0   0
     1   1   2   3   4   5   6    0          1     0   1   2   3   4   5   6
     2   2   3   4   5   6   0    1          2     0   2   4   6   1   3   5
     3   3   4   5   6   0   1    2          3     0   3   6   2   5   1   4
     4   4   5   6   0   1   2    3          4     0   4   1   5   2   6   3
     5   5   6   0   1   2   3    4          5     0   5   3   1   6   4   2
     6   6   0   1   2   3   4    5          6     0   6   5   4   3   2   1

    If we now let Zp = {0, 1, . . . , p − 1}, then it can be proved that Zp forms
a field under the operations of modular addition and multiplication mod p.
For example, the additive inverse of 3 in Z7 is 4, so we write −3 = 4 when
calculating in Z7 . Also the multiplicative inverse of 3 in Z7 is 5 , so we write
3−1 = 5 when calculating in Z7 .
    In practice, we write a ⊕ b and a ⊗ b as a + b and ab or a × b when dealing
with linear equations over Zp .
    The simplest field is Z2 , which consists of two elements 0, 1 with addition
satisfying 1 + 1 = 0. So in Z2 , −1 = 1 and the arithmetic involved in solving
equations over Z2 is very simple.

EXAMPLE 1.1.4 Solve the following system over Z2 :

                                 x+y+z = 0
                                      x + z = 1.

Solution. We add the first equation to the second to get y = 1. Then x =
1 − z = 1 + z, with z arbitrary. Hence the solutions are (x, y, z) = (1, 1, 0)
and (0, 1, 1).

   We use Q and R to denote the fields of rational and real numbers, re-
spectively. Unless otherwise stated, the field used will be Q.
6                                      CHAPTER 1. LINEAR EQUATIONS

1.2       Solving linear equations
We show how to solve any system of linear equations over an arbitrary field,
using the GAUSS–JORDAN algorithm. We first need to define some terms.

DEFINITION 1.2.1 (Row–echelon form) A matrix is in row–echelon
form if
    (i) all zero rows (if any) are at the bottom of the matrix and
    (ii) if two successive rows are non–zero, the second row starts with more
         zeros than the first (moving from left to right).

For example, the matrix                         
                                   0   1   0   0
                                  0   0   1   0 
                                                
                                  0   0   0   0 
                                   0   0   0   0
is in row–echelon form, whereas the matrix
                                          
                                0 1 0 0
                              0 1 0 0 
                                          
                              0 0 0 0 
                                0 0 0 0
is not in row–echelon form.
      The zero matrix of any size is always in row–echelon form.

DEFINITION 1.2.2 (Reduced row–echelon form) A matrix is in re-
duced row–echelon form if
     1. it is in row–echelon form,
     2. the leading (leftmost non–zero) entry in each non–zero row is 1,
     3. all other elements of the column in which the leading entry 1 occurs
        are zeros.

For example the matrices
                                                                
                   ·         ¸           0     1   2   0   0   2
                       1 0              0     0   0   1   0   3 
                                 and                            
                       0 1              0     0   0   0   1   4 
                                         0     0   0   0   0   0
1.2. SOLVING LINEAR EQUATIONS                                                   7

are in reduced row–echelon form, whereas the matrices
                                                 
                      1 0 0                1 2 0
                    0 1 0  and  0 1 0 
                      0 0 2                0 0 0

are not in reduced row–echelon form, but are in row–echelon form.
   The zero matrix of any size is always in reduced row–echelon form.
Notation. If a matrix is in reduced row–echelon form, it is useful to denote
the column numbers in which the leading entries 1 occur, by c1 , c2 , . . . , cr ,
with the remaining column numbers being denoted by cr+1 , . . . , cn , where
r is the number of non–zero rows. For example, in the 4 × 6 matrix above,
we have r = 3, c1 = 2, c2 = 4, c3 = 5, c4 = 1, c5 = 3, c6 = 6.
   The following operations are the ones used on systems of linear equations
and do not change the solutions.

DEFINITION 1.2.3 (Elementary row operations) There are three
types of elementary row operations that can be performed on matrices:

   1. Interchanging two rows:
      Ri ↔ Rj interchanges rows i and j.

   2. Multiplying a row by a non–zero scalar:
      Ri → tRi multiplies row i by the non–zero scalar t.

   3. Adding a multiple of one row to another row:
      Rj → Rj + tRi adds t times row i to row j.

DEFINITION 1.2.4 [Row equivalence]Matrix A is row–equivalent to ma-
trix B if B is obtained from A by a sequence of elementary row operations.

EXAMPLE 1.2.1 Working from left to right,
                                            
        1  2 0                        1   2 0
  A= 2    1 1  R2 → R2 + 2R3  4 −1 5 
        1 −1 2                        1 −1 2
                                            
            1  2 0                     2   4 0
  R2 ↔ R3  1 −1 2  R1 → 2R1  1 −1 2  = B.
            4 −1 5                     4 −1 5
8                                    CHAPTER 1. LINEAR EQUATIONS

Thus A is row–equivalent to B. Clearly B is also row–equivalent to A, by
performing the inverse row–operations R1 → 21 R1 , R2 ↔ R3 , R2 → R2 −2R3
on B.
   It is not difficult to prove that if A and B are row–equivalent augmented
matrices of two systems of linear equations, then the two systems have the
same solution sets – a solution of the one system is a solution of the other.
For example the systems whose augmented matrices are A and B in the
above example are respectively
                                          
              x + 2y = 0                   2x + 4y = 0
                 2x + y = 1         and         x−y = 2
                   x−y = 2                     4x − y = 5
                                          

and these systems have precisely the same solutions.


1.3     The Gauss–Jordan algorithm
We now describe the GAUSS–JORDAN ALGORITHM. This is a process
which starts with a given matrix A and produces a matrix B in reduced row–
echelon form, which is row–equivalent to A. If A is the augmented matrix
of a system of linear equations, then B will be a much simpler matrix than
A from which the consistency or inconsistency of the corresponding system
is immediately apparent and in fact the complete solution of the system can
be read off.

STEP 1.
    Find the first non–zero column moving from left to right, (column c1 )
and select a non–zero entry from this column. By interchanging rows, if
necessary, ensure that the first entry in this column is non–zero. Multiply
row 1 by the multiplicative inverse of a1c1 thereby converting a1c1 to 1. For
each non–zero element aic1 , i > 1, (if any) in column c1 , add −aic1 times
row 1 to row i, thereby ensuring that all elements in column c1 , apart from
the first, are zero.
    STEP 2. If the matrix obtained at Step 1 has its 2nd, . . . , mth rows all
zero, the matrix is in reduced row–echelon form. Otherwise suppose that
the first column which has a non–zero element in the rows below the first is
column c2 . Then c1 < c2 . By interchanging rows below the first, if necessary,
ensure that a2c2 is non–zero. Then convert a2c2 to 1 and by adding suitable
multiples of row 2 to the remaing rows, where necessary, ensure that all
remaining elements in column c2 are zero.
1.4. SYSTEMATIC SOLUTION OF LINEAR SYSTEMS.                                     9

   The process is repeated and will eventually stop after r steps, either
because we run out of rows, or because we run out of non–zero columns. In
general, the final matrix will be in reduced row–echelon form and will have
r non–zero rows, with leading entries 1 in columns c1 , . . . , cr , respectively.

EXAMPLE 1.3.1

                                         
  0 0     4 0                 2 2 −2 5
 2 2 −2 5  R1 ↔ R2  0 0            4 0 
  5 5 −1 5                    5 5 −1 5
             1 1 −1 52                                                5
                                                                     
                                                1            1 −1     2
     1
R1 → 2 R1   0 0   4 0      R3 → R3 − 5R1     0            0   4    0 
                                                                     15
             5 5 −1 5                           0            0   4 −2
                         5                                                 5
                                                                          
             1 1 −1      2
                                ½                               1 1 0      2
     1                            R1 → R1 + R2
R2 → 4 R2   0 0   1    0                                     0 0 1     0 
                                  R3 → R3 − 4R2
             0 0   4 − 15
                        2                                       0 0 0 − 152

              1 1 0 52
                                                                
                                                1            1 0 0
R3 → −2 R
     15 3
             0  0 1 0     R 1 → R 1 − 5
                                          R
                                        2 3
                                               0            0 1 0 
              0 0 0 1                           0            0 0 1
    The last matrix is in reduced row–echelon form.

REMARK 1.3.1 It is possible to show that a given matrix over an ar-
bitrary field is row–equivalent to precisely one matrix which is in reduced
row–echelon form.

A flow–chart for the Gauss–Jordan algorithm, based on [1, page 83] is pre-
sented in figure 1.1 below.


1.4     Systematic solution of linear systems.
Suppose a system of m linear equations in n unknowns x1 , · · · , xn has aug-
mented matrix A and that A is row–equivalent to a matrix B which is in
reduced row–echelon form, via the Gauss–Jordan algorithm. Then A and B
are m × (n + 1). Suppose that B has r non–zero rows and that the leading
entry 1 in row i occurs in column number ci , for 1 ≤ i ≤ r. Then

                       1 ≤ c1 < c2 < · · · , < cr ≤ n + 1.
10                                  CHAPTER 1. LINEAR EQUATIONS

                                    START
                                       ?
                             Input A, m, n
                                       ?
                                 i = 1, j = 1
                   -                   ?             ¾
                                       ?
                        Are the elements in the
                       jth column on and below
                         the ith row all zero?
                                                     @                    j =j+1
                       No                                @
                                                         R Yes                6
                             ?                             @
            Let apj be the first non–zero                    @
                                                             @
             element in column j on or                    Is j = n? -
                 below the ith row
                                                                    No
                                                          Yes

                             ?
                       Is p = i?
                                  PP
        6              Yes             P
                                       qPNo
                                         P
                                      Interchange the
                             ?       pth and ith rows
                                           ©©
                                      ©©
                                       ¼
                                 ©©                                ?
                             ©

             Divide the ith row by aij

                             ?
             Subtract aqj times the ith
             row from the qth row for
              for q = 1, . . . , m (q 6= i)

                             ?
                       Set ci = j

                             ?             Yes   6         Print A,
                                           -               c1 , . . . , c i
     i=i+1       Is i = m?
     j =j+1
                No´´                                               ?
        No      +́      Yes -
        ¾  Is j = n?                                         STOP




               Figure 1.1: Gauss–Jordan algorithm.
1.4. SYSTEMATIC SOLUTION OF LINEAR SYSTEMS.                                 11

Also assume that the remaining column numbers are cr+1 , · · · , cn+1 , where
                        1 ≤ cr+1 < cr+2 < · · · < cn ≤ n + 1.

   Case 1: cr = n + 1. The system is inconsistent. For the last non–zero
row of B is [0, 0, · · · , 1] and the corresponding equation is
                             0x1 + 0x2 + · · · + 0xn = 1,
which has no solutions. Consequently the original system has no solutions.
   Case 2: cr ≤ n. The system of equations corresponding to the non–zero
rows of B is consistent. First notice that r ≤ n here.
   If r = n, then c1 = 1, c2 = 2, · · · , cn = n and
                                                     
                                1 0 · · · 0 d1
                              0 1 · · · 0 d2 
                              ..                  .. 
                                                     
                              .                    . 
                                                     
                        B =  0 0 · · · 1 dn 
                             
                                                      .
                              0 0 ··· 0 0 
                                                     
                              ..                 .. 
                              .                   . 
                                    0 0 ··· 0        0
There is a unique solution x1 = d1 , x2 = d2 , · · · , xn = dn .
     If r < n, there will be more than one solution (infinitely many if the
field is infinite). For all solutions are obtained by taking the unknowns
xc1 , · · · , xcr as dependent unknowns and using the r equations correspond-
ing to the non–zero rows of B to express these unknowns in terms of the
remaining independent unknowns xcr+1 , . . . , xcn , which can take on arbi-
trary values:
                 x c1    = b1 n+1 − b1cr+1 xcr+1 − · · · − b1cn xcn
                         ..
                          .
                 x cr    = br n+1 − brcr+1 xcr+1 − · · · − brcn xcn .
In particular, taking xcr+1 = 0, . . . , xcn−1 = 0 and xcn = 0, 1 respectively,
produces at least two solutions.
EXAMPLE 1.4.1 Solve the system
                                     x+y = 0
                                     x−y = 1
                                   4x + 2y = 1.
12                                   CHAPTER 1. LINEAR EQUATIONS

Solution. The augmented matrix of the system is
                                         
                               1     1 0
                        A =  1 −1 1 
                               4     2 1

which is row equivalent to
                                         1
                                           
                                   1 0    2
                             B =  0 1 − 12  .
                                   0 0   0

   We read off the unique solution x = 12 , y = − 12 .
(Here n = 2, r = 2, c1 = 1, c2 = 2. Also cr = c2 = 2 < 3 = n + 1 and
r = n.)

EXAMPLE 1.4.2 Solve the system

                         2x1 + 2x2 − 2x3 = 5
                          7x1 + 7x2 + x3 = 10
                          5x1 + 5x2 − x3 = 5.

Solution. The augmented matrix is
                                      
                             2 2 −2 5
                      A= 7 7     1 10 
                             5 5 −1 5

which is row equivalent to
                                          
                                   1 1 0 0
                             B =  0 0 1 0 .
                                   0 0 0 1

   We read off inconsistency for the original system.
(Here n = 3, r = 3, c1 = 1, c2 = 3. Also cr = c3 = 4 = n + 1.)

EXAMPLE 1.4.3 Solve the system

                             x1 − x 2 + x 3 = 1
                             x1 + x2 − x3 = 2.
1.4. SYSTEMATIC SOLUTION OF LINEAR SYSTEMS.                              13

Solution. The augmented matrix is
                          ·              ¸
                             1 −1    1 1
                      A=
                             1    1 −1 2
which is row equivalent to
                                                3
                                 ·                  ¸
                                     1 0  0     2
                           B=                   1       .
                                     0 1 −1     2


   The complete solution is x1 = 32 , x2 = 12 + x3 , with x3 arbitrary.
(Here n = 3, r = 2, c1 = 1, c2 = 2. Also cr = c2 = 2 < 4 = n + 1 and
r < n.)

EXAMPLE 1.4.4 Solve the system
                              6x3 + 2x4 − 4x5 − 8x6 = 8
                              3x3 + x4 − 2x5 − 4x6 = 4
                 2x1 − 3x2 + x3 + 4x4 − 7x5 + x6 = 2
                   6x1 − 9x2 + 11x4 − 19x5 + 3x6 = 1.

Solution. The augmented matrix is
                                       
                      0  0 6 2 −4 −8 8
                     0  0 3 1 −2 −4 4 
                  A=
                     2 −3 1 4 −7
                                        
                                    1 2 
                      6 −9 0 11 −19 3 1

which is row equivalent to
                          1 − 32 0       11
                                            − 19             1
                                                                 
                                          6    6    0       24
                                           1
                        0    0 1          3 − 23   0         5
                                                              3
                                                                  
                  B=   0                                    1
                                                                  .
                              0 0         0    0    1         4
                                                                  
                          0   0 0         0    0    0        0
The complete solution is
                        1
                  x1 = 24 + 23 x2 − 11      19
                                     6 x4 + 6 x5 ,
                  x3 = 53 − 31 x4 + 23 x5 ,
                  x6 = 14 ,
with x2 , x4 , x5 arbitrary.
(Here n = 6, r = 3, c1 = 1, c2 = 3, c3 = 6; cr = c3 = 6 < 7 = n + 1; r < n.)
14                                   CHAPTER 1. LINEAR EQUATIONS

EXAMPLE 1.4.5 Find the rational number t for which the following sys-
tem is consistent and solve the system for this value of t.

                                 x+y = 2
                                 x−y = 0
                               3x − y = t.

Solution. The augmented matrix of the system is
                                         
                               1     1 2
                        A =  1 −1 0 
                               3 −1 t

which is row–equivalent to the simpler matrix
                                             
                                  1 1      2
                          B= 0 1          1 .
                                  0 0 t−2

Hence if t 6= 2 the system is inconsistent. If t = 2 the system is consistent
and
                                         
                          1 1 2       1 0 1
                    B =  0 1 1  →  0 1 1 .
                          0 0 0       0 0 0

We read off the solution x = 1, y = 1.


EXAMPLE 1.4.6 For which rationals a and b does the following system
have (i) no solution, (ii) a unique solution, (iii) infinitely many solutions?

                             x − 2y + 3z = 4
                             2x − 3y + az = 5
                             3x − 4y + 5z = b.

Solution. The augmented matrix of the system is
                                           
                              1 −2 3 4
                       A =  2 −3 a 5 
                              3 −4 5 b
1.4. SYSTEMATIC SOLUTION OF LINEAR SYSTEMS.                            15
                                       
  ½                  1 −2      3      4
    R2 → R2 − 2R1 
                     0  1 a−6       −3 
    R3 → R3 − 3R1
                     0  2     −4 b − 12
                                   
                 1 −2       3     4
R3 → R3 − 2R2  0   1   a−6      −3  = B.
                 0  0 −2a + 8 b − 6
   Case 1. a 6= 4. Then −2a + 8 6= 0 and we see that B can be reduced to
a matrix of the form                        
                            1 0 0       u
                          0 1 0        v    
                                       b−6
                            0 0 1 −2a+8

and we have the unique solution x = u, y = v, z = (b − 6)/(−2a + 8).
   Case 2. a = 4. Then
                                     
                          1 −2  3   4
                      B= 0  1 −2  −3  .
                          0  0  0 b−6

   If b 6= 6 we get no solution, whereas if b = 6 then
                                                                
         1 −2      3    4                              1 0 −1 −2
B =  0       1 −2 −3          R1 → R1 + 2R2  0 1 −2 −3 . We
         0    0    0    0                              0 0  0    0
read off the complete solution x = −2 + z, y = −3 + 2z, with z arbitrary.

EXAMPLE 1.4.7 Find the reduced row–echelon form of the following ma-
trix over Z3 :         ·            ¸
                         2 1 2 1
                                      .
                         2 2 1 0
Hence solve the system

                             2x + y + 2z = 1
                             2x + 2y + z = 0

over Z3 .

Solution.
16                                  CHAPTER 1. LINEAR EQUATIONS
·          ¸              ·                ¸ ·         ¸
  2 1 2 1                   2 1     2    1     2 1 2 1
             R2 → R2 − R1                   =
  2 2 1 0                   0 1 −1 −1          0 1 2 2
         ·          ¸                 ·          ¸
           1 2 1 2                      1 0 0 1
R1 → 2R1               R1 → R1 + R2                .
           0 1 2 2                      0 1 2 2
    The last matrix is in reduced row–echelon form.
    To solve the system of equations whose augmented matrix is the given
matrix over Z3 , we see from the reduced row–echelon form that x = 1 and
y = 2 − 2z = 2 + z, where z = 0, 1, 2. Hence there are three solutions
to the given system of linear equations: (x, y, z) = (1, 2, 0), (1, 0, 1) and
(1, 1, 2).


1.5    Homogeneous systems
A system of homogeneous linear equations is a system of the form

                     a11 x1 + a12 x2 + · · · + a1n xn = 0
                     a21 x1 + a22 x2 + · · · + a2n xn = 0
                                                      ..
                                                       .
                   am1 x1 + am2 x2 + · · · + amn xn = 0.

Such a system is always consistent as x1 = 0, · · · , xn = 0 is a solution.
This solution is called the trivial solution. Any other solution is called a
non–trivial solution.
   For example the homogeneous system

                                x−y = 0
                                x+y = 0

has only the trivial solution, whereas the homogeneous system

                              x−y+z = 0
                              x+y+z = 0

has the complete solution x = −z, y = 0, z arbitrary. In particular, taking
z = 1 gives the non–trivial solution x = −1, y = 0, z = 1.
   There is simple but fundamental theorem concerning homogeneous sys-
tems.
THEOREM 1.5.1 A homogeneous system of m linear equations in n un-
knowns always has a non–trivial solution if m < n.
1.6. PROBLEMS                                                               17

Proof. Suppose that m < n and that the coefficient matrix of the system
is row–equivalent to B, a matrix in reduced row–echelon form. Let r be the
number of non–zero rows in B. Then r ≤ m < n and hence n − r > 0 and
so the number n − r of arbitrary unknowns is in fact positive. Taking one
of these unknowns to be 1 gives a non–trivial solution.
REMARK 1.5.1 Let two systems of homogeneous equations in n un-
knowns have coefficient matrices A and B, respectively. If each row of B is
a linear combination of the rows of A (i.e. a sum of multiples of the rows
of A) and each row of A is a linear combination of the rows of B, then it is
easy to prove that the two systems have identical solutions. The converse is
true, but is not easy to prove. Similarly if A and B have the same reduced
row–echelon form, apart from possibly zero rows, then the two systems have
identical solutions and conversely.
    There is a similar situation in the case of two systems of linear equations
(not necessarily homogeneous), with the proviso that in the statement of
the converse, the extra condition that both the systems are consistent, is
needed.


1.6     PROBLEMS
1. Which of the following matrices of rationals is in reduced row–echelon
form?
                                                                    
      1 0 0 0 −3               0 1 0       0     5          0 1 0      0
(a)  0 0 1 0       4  (b)  0 0 1        0 −4  (c)  0 0 1          0 
      0 0 0 1       2          0 0 0 −1          3          0 1 0 −2
                                                                
      0 1 0 0       2           1 2 0 0 0                 0 0 0 0
     0 0 0 0 −1 
                       (e)  0 0 1 0 0  (f)  0 0 1 2 
                                                                  
(d) 
     0 0 0 1       4        0 0 0 0 1                0 0 0 1 
      0 0 0 0       0           0 0 0 0 0                 0 0 0 0
                     
      1 0 0 0       1
     0 1 0 0       2 
     0 0 0 1 −1 . [Answers: (a), (e), (g)]
(g)                  

      0 0 0 0       0
2. Find reduced row–echelon forms which are row–equivalent to the following
matrices:
                                                                      
    ·         ¸       ·         ¸        1 1 1                 2 0 0
      0 0 0             0 1 3
(a)               (b)              (c)  1 1 0  (d)  0 0 0  .
      2 4 0             1 2 4
                                         1 0 0               −4 0 0
18                                        CHAPTER 1. LINEAR EQUATIONS

[Answers:
                                                                        
      ·           ¸         ·            ¸            1 0 0          1 0 0
          1 2 0                 1 0 −2
(a)                   (b)                       (c)  0 1 0    (d) 0 0 0 .]
          0 0 0                 0 1  3
                                                      0 0 1          0 0 0
3. Solve the following systems of linear equations by reducing the augmented
matrix to reduced row–echelon form:

 (a)          x+y+z =      2              (b)         x1 + x2 − x3 + 2x4 = 10
            2x + 3y − z =  8                        3x1 − x2 + 7x3 + 4x4 = 1
              x − y − z = −8                     −5x1 + 3x2 − 15x3 − 6x4 = 9


 (c)        3x − y + 7z     =     0       (d)            2x2 + 3x3 − 4x4   =   1
                                  1
            2x − y + 4z     =     2                            2x3 + 3x4   =   4
              x−y+z         =     1                2x1 + 2x2 − 5x3 + 2x4   =   4
          6x − 4y + 10z     =     3                      2x1 − 6x3 + 9x4   =   7

[Answers: (a) x = −3, y = 19       1
                           4 , z = 4 ; (b) inconsistent;

(c) x = − 12 − 3z, y = − 32 − 2z, with z arbitrary;
(d) x1 = 19                5   17              3
          2 − 9x4 , x2 = − 2 + 4 x4 , x3 = 2 − 2 x4 , with x4 arbitrary.]

4. Show that the following system is consistent if and only if c = 2a − 3b
and solve the system in this case.

                                      2x − y + 3z = a
                                      3x + y − 5z = b
                                −5x − 5y + 21z = c.

[Answer: x = a+b  2
              5 + 5 z, y =
                           −3a+2b
                             5    + 19
                                     5 z, with z arbitrary.]

5. Find the value of t for which the following system is consistent and solve
the system for this value of t.

                                         x+y = 1
                                         tx + y = t
                                 (1 + t)x + 2y = 3.

[Answer: t = 2; x = 1, y = 0.]
1.6. PROBLEMS                                                             19

6. Solve the homogeneous system

                         −3x1 + x2 + x3 + x4 = 0
                           x1 − 3x2 + x3 + x4 = 0
                           x1 + x2 − 3x3 + x4 = 0
                           x1 + x2 + x3 − 3x4 = 0.

[Answer: x1 = x2 = x3 = x4 , with x4 arbitrary.]
7. For which rational numbers λ does the homogeneous system

                               x + (λ − 3)y = 0
                               (λ − 3)x + y = 0

have a non–trivial solution?
[Answer: λ = 2, 4.]
8. Solve the homogeneous system

                          3x1 + x2 + x3 + x4 = 0
                          5x1 − x2 + x3 − x4 = 0.

[Answer: x1 = − 14 x3 , x2 = − 14 x3 − x4 , with x3 and x4 arbitrary.]
9. Let A be the coefficient matrix of the following homogeneous system of
n equations in n unknowns:

                      (1 − n)x1 + x2 + · · · + xn = 0
                      x1 + (1 − n)x2 + · · · + xn = 0
                                               ··· = 0
                      x1 + x2 + · · · + (1 − n)xn = 0.

Find the reduced row–echelon form of A and hence, or otherwise, prove that
the solution of the above system is x1 = x2 = · · · = xn , with xn arbitrary.
               ·      ¸
                 a b
10. Let A =             be a matrix over a field F . Prove that A is row–
                 c d
               ·      ¸
                 1 0
equivalent to           if ad − bc 6= 0, but is row–equivalent to a matrix
                 0 1
whose second row is zero, if ad − bc = 0.
20                                        CHAPTER 1. LINEAR EQUATIONS

11. For which rational numbers a does the following system have (i) no
solutions (ii) exactly one solution (iii) infinitely many solutions?

                                   x + 2y − 3z = 4
                                   3x − y + 5z = 2
                          4x + y + (a2 − 14)z = a + 2.


[Answer: a = −4, no solution; a = 4, infinitely many solutions; a 6= ±4,
exactly one solution.]
12. Solve the following system of homogeneous equations over Z2 :

                                   x1 + x 3 + x 5 = 0
                                   x2 + x 4 + x 5 = 0
                             x1 + x 2 + x 3 + x 4 = 0
                                          x3 + x4 = 0.


[Answer: x1 = x2 = x4 + x5 , x3 = x4 , with x4 and x5 arbitrary elements of
Z2 .]
13. Solve the following systems of linear equations over Z5 :

            (a) 2x + y + 3z = 4                 (b) 2x + y + 3z = 4
                4x + y + 4z = 1                     4x + y + 4z = 1
                3x + y + 2z = 0                           x + y = 3.


[Answer: (a) x = 1, y = 2, z = 0; (b) x = 1 + 2z, y = 2 + 3z, with z an
arbitrary element of Z5 .]
14. If (α1 , . . . , αn ) and (β1 , . . . , βn ) are solutions of a system of linear equa-
tions, prove that

                      ((1 − t)α1 + tβ1 , . . . , (1 − t)αn + tβn )

is also a solution.
15. If (α1 , . . . , αn ) is a solution of a system of linear equations, prove that
the complete solution is given by x1 = α1 + y1 , . . . , xn = αn + yn , where
(y1 , . . . , yn ) is the general solution of the associated homogeneous system.
1.6. PROBLEMS                                                              21

16. Find the values of a and b for which the following system is consistent.
Also find the complete solution when a = b = 2.

                          x+y−z+w = 1
                         ax + y + z + w = b
                        3x + 2y +    aw = 1 + a.

[Answer: a 6= 2 or a = 2 = b; x = 1 − 2z, y = 3z − w, with z, w arbitrary.]
17. Let F = {0, 1, a, b} be a field consisting of 4 elements.

 (a) Determine the addition and multiplication tables of F . (Hint: Prove
     that the elements 1 + 0, 1 + 1, 1 + a, 1 + b are distinct and deduce that
     1 + 1 + 1 + 1 = 0; then deduce that 1 + 1 = 0.)

 (b) A matrix A, whose elements belong to F , is defined by
                                              
                                  1 a b a
                           A =  a b b 1 ,
                                  1 1 1 a

     prove that the reduced row–echelon form of A is given by the matrix
                                             
                                   1 0 0 0
                            B =  0 1 0 b .
                                   0 0 1 1
22   CHAPTER 1. LINEAR EQUATIONS
Chapter 2

MATRICES

2.1     Matrix arithmetic
A matrix over a field F is a rectangular array of elements from F . The sym-
bol Mm×n (F ) denotes the collection of all m × n matrices over F . Matrices
will usually be denoted by capital letters and the equation A = [aij ] means
that the element in the i–th row and j–th column of the matrix A equals
aij . It is also occasionally convenient to write aij = (A)ij . For the present,
all matrices will have rational entries, unless otherwise stated.

EXAMPLE 2.1.1 The formula aij = 1/(i + j) for 1 ≤ i ≤ 3, 1 ≤ j ≤ 4
defines a 3 × 4 matrix A = [aij ], namely
                                 1 1 1 1 
                                     2   3    4   5
                                                     
                               1        1    1   1
                                                      
                            A=
                               3        4    5   6
                                                      .
                                                      
                                                     
                                     1   1    1   1
                                     4   5    6   7

DEFINITION 2.1.1 (Equality of matrices) Matrices A and B are said
to be equal if A and B have the same size and corresponding elements are
equal; that is A and B ∈ Mm×n (F ) and A = [aij ], B = [bij ], with aij = bij
for 1 ≤ i ≤ m, 1 ≤ j ≤ n.

DEFINITION 2.1.2 (Addition of matrices) Let A = [aij ] and B =
[bij ] be of the same size. Then A + B is the matrix obtained by adding
corresponding elements of A and B; that is

                      A + B = [aij ] + [bij ] = [aij + bij ].

                                         23
24                                                         CHAPTER 2. MATRICES

DEFINITION 2.1.3 (Scalar multiple of a matrix) Let A = [aij ] and
t ∈ F (that is t is a scalar). Then tA is the matrix obtained by multiplying
all elements of A by t; that is

                                 tA = t[aij ] = [taij ].

DEFINITION 2.1.4 (Additive inverse of a matrix) Let A = [aij ] .
Then −A is the matrix obtained by replacing the elements of A by their
additive inverses; that is

                               −A = −[aij ] = [−aij ].

DEFINITION 2.1.5 (Subtraction of matrices) Matrix subtraction is
defined for two matrices A = [aij ] and B = [bij ] of the same size, in the
usual way; that is

                         A − B = [aij ] − [bij ] = [aij − bij ].

DEFINITION 2.1.6 (The zero matrix) For each m, n the matrix in
Mm×n (F ), all of whose elements are zero, is called the zero matrix (of size
m × n) and is denoted by the symbol 0.

   The matrix operations of addition, scalar multiplication, additive inverse
and subtraction satisfy the usual laws of arithmetic. (In what follows, s and
t will be arbitrary scalars and A, B, C are matrices of the same size.)
     1. (A + B) + C = A + (B + C);

     2. A + B = B + A;

     3. 0 + A = A;

     4. A + (−A) = 0;

     5. (s + t)A = sA + tA, (s − t)A = sA − tA;

     6. t(A + B) = tA + tB, t(A − B) = tA − tB;

     7. s(tA) = (st)A;

     8. 1A = A, 0A = 0, (−1)A = −A;

     9. tA = 0 ⇒ t = 0 or A = 0.
     Other similar properties will be used when needed.
2.1. MATRIX ARITHMETIC                                                      25

DEFINITION 2.1.7 (Matrix product) Let A = [aij ] be a matrix of
size m × n and B = [bjk ] be a matrix of size n × p; (that is the number
of columns of A equals the number of rows of B). Then AB is the m × p
matrix C = [cik ] whose (i, k)–th element is defined by the formula
                              n
                              X
                    cik =           aij bjk = ai1 b1k + · · · + ain bnk .
                              j=1

EXAMPLE 2.1.2
     ·         ¸·         ¸     ·               ¸ ·        ¸
         1 2        5 6   1×5+2×7 1×6+2×8            19 22
  1.                  =                            =         ;
         3 4        7 8   3×5+4×7 3×6+4×8            43 50
     ·     ¸·       ¸ ·         ¸ ·      ¸·     ¸
       5 6     1 2        23 34      1 2    5 6
  2.                  =          6=               ;
       7 8     3 4        31 46      3 4    7 8
     · ¸            ·      ¸
       1 £       ¤     3 4
  3.        3 4 =            ;
       2               6 8
             · ¸
     £     ¤ 1      £    ¤
  4. 3 4           = 11 ;
               2
     ·        ¸·        ¸ ·      ¸
       1 −1      1 −1        0 0
  5.                     =         .
       1 −1      1 −1        0 0
Matrix multiplication obeys many of the familiar laws of arithmetic apart
from the commutative law.
  1. (AB)C = A(BC) if A, B, C are m × n, n × p, p × q, respectively;
  2. t(AB) = (tA)B = A(tB), A(−B) = (−A)B = −(AB);
  3. (A + B)C = AC + BC if A and B are m × n and C is n × p;
  4. D(A + B) = DA + DB if A and B are m × n and D is p × m.
    We prove the associative law only:
First observe that (AB)C and A(BC) are both of size m × q.
Let A = [aij ], B = [bjk ], C = [ckl ]. Then
                                                            
                              Xp               p
                                               X   n
                                                   X
            ((AB)C)il =           (AB)ik ckl =      aij bjk  ckl
                                    k=1                   k=1   j=1
                                    p X
                                    X n
                            =                 aij bjk ckl .
                                    k=1 j=1
26                                                    CHAPTER 2. MATRICES

Similarly
                                       X p
                                       n X
                        (A(BC))il =              aij bjk ckl .
                                       j=1 k=1
However the double summations are equal. For sums of the form
                       X p
                       n X                   p X
                                             X n
                                 djk   and                djk
                       j=1 k=1               k=1 j=1

represent the sum of the np elements of the rectangular array [djk ], by rows
and by columns, respectively. Consequently
                           ((AB)C)il = (A(BC))il
for 1 ≤ i ≤ m, 1 ≤ l ≤ q. Hence (AB)C = A(BC).

     The system of m linear equations in n unknowns
                     a11 x1 + a12 x2 + · · · + a1n xn = b1
                     a21 x1 + a22 x2 + · · · + a2n xn = b2
                                                      ..
                                                       .
                    am1 x1 + am2 x2 + · · · + amn xn = bm
is equivalent to a single matrix equation
                                                   
                   a11 a12 · · · a1n        x1       b1
                 a21 a22 · · · a2n   x2   b2 
                 ..                ..   ..  =  ..  ,
                                                   
                 .                  .      .     . 
                  am1 am2 · · · amn         xn      bm
that is AX = B, where A = [aij ] is the coefficient matrix
                                                            of the system,
                                                             
          x1                                             b1
        x2                                           b2 
X =  .  is the vector of unknowns and B =  .  is the vector of
                                                          
        ..                                           .. 
        xn                                           bm
constants.
   Another useful matrix equation equivalent to the above system of linear
equations is
                                                        
             a11           a12                 a1n         b1
            a21        a22               a2n   b2 
        x1  .  + x 2  .  + · · · + x n  .  =  .  .
                                                        
              .
            .             .
                         .                     .
                                             .   .      .
              am1            am2                        amn      bm
2.2. LINEAR TRANSFORMATIONS                                                                 27

EXAMPLE 2.1.3 The system

                                    x+y+z = 1
                                    x − y + z = 0.

is equivalent to the matrix equation
                                                        
                           ·                     ¸     x   · ¸
                               1  1 1                 y = 1
                               1 −1 1                       0
                                                       z

and to the equation
                       ·       ¸        ·        ¸        ·       ¸       ·       ¸
                           1                 1                1               1
                   x               +y                +z               =               .
                           1                −1                1               0

2.2     Linear transformations
An n–dimensional column vector is an n × 1 matrix over F . The collection
of all n–dimensional column vectors is denoted by F n .
    Every matrix is associated with an important type of function called a
linear transformation.
DEFINITION 2.2.1 (Linear transformation) With A ∈ Mm×n (F ), we
associate the function TA : F n → F m defined by TA (X) = AX for all
X ∈ F n . More explicitly, using components, the above function takes the
form

                   y1 = a11 x1 + a12 x2 + · · · + a1n xn
                   y2 = a21 x1 + a22 x2 + · · · + a2n xn
                      ..
                       .
                   ym = am1 x1 + am2 x2 + · · · + amn xn ,

where y1 , y2 , · · · , ym are the components of the column vector TA (X).
   The function just defined has the property that

                       TA (sX + tY ) = sTA (X) + tTA (Y )                                 (2.1)

for all s, t ∈ F and all n–dimensional column vectors X, Y . For

   TA (sX + tY ) = A(sX + tY ) = s(AX) + t(AY ) = sTA (X) + tTA (Y ).
28                                                  CHAPTER 2. MATRICES

REMARK 2.2.1 It is easy to prove that if T : F n → F m is a function
satisfying equation 2.1, then T = TA , where A is the m × n matrix whose
columns are T (E1 ), . . . , T (En ), respectively, where E1 , . . . , En are the n–
dimensional unit vectors defined by
                                                     
                                 1                      0
                               0                     0 
                    E1 =  .  , . . . , E n =  .  .
                                                     
                               ..                    .. 
                               0                        1

One well–known example of a linear transformation arises from rotating
the (x, y)–plane in 2-dimensional Euclidean space, anticlockwise through θ
radians. Here a point (x, y) will be transformed into the point (x1 , y1 ),
where

                            x1 = x cos θ − y sin θ
                            y1 = x sin θ + y cos θ.

     In 3–dimensional Euclidean space, the equations
            x1 = x cos θ − y sin θ, y1 = x sin θ + y cos θ, z1 = z;
            x1 = x, y1 = y cos φ − z sin φ, z1 = y sin φ + z cos φ;
            x1 = x cos ψ − z sin ψ, y1 = y, z1 = x sin ψ + z cos ψ;

correspond to rotations about the positive z, x, y–axes, anticlockwise through
θ, φ, ψ radians, respectively.
    The product of two matrices is related to the product of the correspond-
ing linear transformations:
    If A is m×n and B is n×p, then the function TA TB : F p → F m , obtained
by first performing TB , then TA is in fact equal to the linear transformation
TAB . For if X ∈ F p , we have

                  TA TB (X) = A(BX) = (AB)X = TAB (X).

The following example is useful for producing rotations in 3–dimensional
animated design. (See [27, pages 97–112].)

EXAMPLE 2.2.1 The linear transformation resulting from successively
rotating 3–dimensional space about the positive z, x, y–axes, anticlockwise
through θ, φ, ψ radians respectively, is equal to TABC , where
2.2. LINEAR TRANSFORMATIONS                           (x, y)                         29
                                                  @
                                                  @                   ¡ l
                                                         @        ¡
                                                             @¡
                                                             ¡@
                                                         ¡        @
                                                     ¡                @ (x1 , y1 )
                                                 ¡
                                                ¡ θ
                                            ¡
                                        ¡
                                    ¡
                                ¡
                            ¡



                       Figure 2.1: Reflection in a line.


                                             
      cos θ   − sin θ 0         1   0      0
C =  sin θ    cos θ 0 , B =  0 cos φ − sin φ .
        0        0     1        0 sin φ cos φ
                         
      cos ψ   0 − sin ψ
A= 0         1      0    .
      sin ψ   0 cos ψ
   The matrix ABC is quite complicated:
                                                               
              cos ψ 0 − sin ψ          cos θ      − sin θ     0
   A(BC) =  0      1     0     cos φ sin θ cos φ cos θ − sin φ 
              sin ψ 0 cos ψ         sin φ sin θ sin φ cos θ cos φ
                                                                                  
   cos ψ cos θ − sin ψ sin φ sin θ − cos ψ sin θ − sin ψ sin φ sin θ − sin ψ cos φ
=           cos φ sin θ                      cos φ cos θ               − sin φ    .
   sin ψ cos θ + cos ψ sin φ sin θ − sin ψ sin θ + cos ψ sin φ cos θ cos ψ cos φ


EXAMPLE 2.2.2 Another example of a linear transformation arising from
geometry is reflection of the plane in a line l inclined at an angle θ to the
positive x–axis.
    We reduce the problem to the simpler case θ = 0, where the equations
of transformation are x1 = x, y1 = −y. First rotate the plane clockwise
through θ radians, thereby taking l into the x–axis; next reflect the plane in
the x–axis; then rotate the plane anticlockwise through θ radians, thereby
restoring l to its original position.
30                                               (x, y)CHAPTER 2. MATRICES
                                                 @        ¡ l
                                                     @     ¡
                                                         @¡(x , y )
                                                         ¡   1 1
                                                     ¡
                                                 ¡
                                                ¡
                                               ¡ θ
                                           ¡
                                       ¡
                                   ¡
                               ¡
                           ¡



                      Figure 2.2: Projection on a line.



     In terms of matrices, we get transformation equations
 ·      ¸      ·                 ¸·          ¸·                     ¸· ¸
     x1          cos θ − sin θ      1    0      cos (−θ) − sin (−θ)   x
           =
     y1          sin θ    cos θ     0 −1        sin (−θ)  cos (−θ)    y
               ·                 ¸·                 ¸· ¸
                 cos θ     sin θ      cos θ sin θ      x
           =
                 sin θ − cos θ      − sin θ cos θ      y
               ·                   ¸· ¸
                 cos 2θ     sin 2θ    x
           =                               .
                 sin 2θ − cos 2θ      y

The more general transformation
         ·     ¸     ·               ¸· ¸ · ¸
           x1          cos θ − sin θ   x   u
                 =a                      +    ,                       a > 0,
           y1           sin θ  cos θ   y   v

represents a rotation, followed by a scaling and then by a translation. Such
transformations are important in computer graphics. See [23, 24].


EXAMPLE 2.2.3 Our last example of a geometrical linear transformation
arises from projecting the plane onto a line l through the origin, inclined
at angle θ to the positive x–axis. Again we reduce that problem to the
simpler case where l is the x–axis and the equations of transformation are
x1 = x, y1 = 0.
    In terms of matrices, we get transformation equations
  ·     ¸      ·                ¸·       ¸·                      ¸· ¸
     x1          cos θ − sin θ      1 0     cos (−θ) − sin (−θ)      x
           =
     y1          sin θ    cos θ     0 0      sin (−θ)   cos (−θ)     y
2.3. RECURRENCE RELATIONS                                                        31
                ·             ¸·           ¸· ¸
                    cos θ 0  cos θ sin θ       x
            =
                    sin θ 0 − sin θ cos θ      y
                        2
              ·                       ¸· ¸
                    cos θ cos θ sin θ    x
            =                                .
                sin θ cos θ    sin2 θ    y

2.3     Recurrence relations
DEFINITION 2.3.1 (The identity matrix) The n × n matrix In =
[δij ], defined by δij = 1 if i = j, δij = 0 if i 6= j, is called the n × n identity
matrix of order n. In other words, the columns of the identity matrix of
order n are the unit vectors E1 , · · · , En , respectively.
                         ·        ¸
                            1 0
      For example, I2 =             .
                            0 1

THEOREM 2.3.1 If A is m × n, then Im A = A = AIn .

DEFINITION 2.3.2 (k–th power of a matrix) If A is an n×n matrix,
we define Ak recursively as follows: A0 = In and Ak+1 = Ak A for k ≥ 0.

For example A1 = A0 A = In A = A and hence A2 = A1 A = AA.
   The usual index laws hold provided AB = BA:

   1. Am An = Am+n , (Am )n = Amn ;

   2. (AB)n = An B n ;

   3. Am B n = B n Am ;

   4. (A + B)2 = A2 + 2AB + B 2 ;
                     n
                     X
                           n
   5. (A + B)n =              i n−i ;
                       ¡ ¢
                           i A B
                     i=0

   6. (A + B)(A − B) = A2 − B 2 .

We now state a basic property of the natural numbers.

AXIOM 2.3.1 (PRINCIPLE OF MATHEMATICAL INDUCTION)
If for each n ≥ 1, Pn denotes a mathematical statement and

  (i) P1 is true,
32                                                    CHAPTER 2. MATRICES

 (ii) the truth of Pn implies that of Pn+1 for each n ≥ 1,

then Pn is true for all n ≥ 1.
                                 ·           ¸
                                      7  4
EXAMPLE 2.3.1 Let A =                            . Prove that
                                     −9 −5
                           ·                      ¸
                               1 + 6n 4n
                    An =                              if n ≥ 1.
                                −9n 1 − 6n

Solution. We use the principle of mathematical induction.
     Take Pn to be the statement
                              ·              ¸
                           n     1 + 6n 4n
                         A =                   .
                                  −9n 1 − 6n

Then P1 asserts that
                   ·                   ¸ ·       ¸
               1     1+6×1     4×1          7  4
             A =                        =          ,
                      −9 × 1 1 − 6 × 1     −9 −5

which is true. Now let n ≥ 1 and assume that Pn is true. We have to deduce
that
             ·                            ¸ ·                       ¸
       n+1     1 + 6(n + 1)    4(n + 1)          7 + 6n    4n + 4
     A     =                               =                          .
                −9(n + 1) 1 − 6(n + 1)          −9n − 9 −5 − 6n

Now

      An+1 = A n
             · A                ¸·         ¸
               1 + 6n     4n          7  4
           =
                 −9n 1 − 6n        −9 −5
             ·                                               ¸
                 (1 + 6n)7 + (4n)(−9)   (1 + 6n)4 + (4n)(−5)
           =
               (−9n)7 + (1 − 6n)(−9) (−9n)4 + (1 − 6n)(−5)
             ·                     ¸
                 7 + 6n    4n + 4
           =                         ,
               −9n − 9 −5 − 6n

and “the induction goes through”.
   The last example has an application to the solution of a system of re-
currence relations:
2.4. PROBLEMS                                                           33

EXAMPLE 2.3.2 The following system of recurrence relations holds for
all n ≥ 0:
                          xn+1 = 7xn + 4yn
                          yn+1 = −9xn − 5yn .
Solve the system for xn and yn in terms of x0 and y0 .

Solution. Combine the above equations into a single matrix equation
                   ·      ¸ ·            ¸·      ¸
                     xn+1         7    4      xn
                            =                      ,
                     yn+1       −9 −5         yn
                          ·         ¸             ·     ¸
                              7   4                  xn
or Xn+1 = AXn , where A =              and Xn =           .
                            −9 −5                    yn
We see that
                     X1 = AX0
                     X2 = AX1 = A(AX0 ) = A2 X0
                        ..
                         .
                     Xn = A n X0 .
    (The truth of the equation Xn = An X0 for n ≥ 1, strictly speaking
follows by mathematical induction; however for simple cases such as the
above, it is customary to omit the strict proof and supply instead a few
lines of motivation for the inductive statement.)
    Hence the previous example gives
               ·     ¸             ·                 ¸·     ¸
                  xn                 1 + 6n    4n       x0
                       = Xn =
                  yn                  −9n 1 − 6n        y0
                                   ·                       ¸
                                      (1 + 6n)x0 + (4n)y0
                               =                             ,
                                     (−9n)x0 + (1 − 6n)y0
and hence xn = (1 + 6n)x0 + 4ny0 and yn = (−9n)x0 + (1 − 6n)y0 , for n ≥ 1.


2.4    PROBLEMS
  1. Let A, B, C, D be matrices defined by
                                             
                           3 0            1 5 2
                    A =  −1 2  , B =  −1 1 0  ,
                           1 1           −4 1 3
34                                                      CHAPTER 2. MATRICES
                                       
                                  −3 −1      ·      ¸
                                               4 −1
                             C=   2  1 , D=
                                                     .
                                               2  0
                                   4  3
        Which of the following matrices are defined? Compute those matrices
        which are defined.

                            A + B, A + C, AB, BA, CD, DC, D 2 .

        [Answers: A + C, BA, CD, D 2 ;
                                         
          0 −1            0 12         −14  3                    ·         ¸
                                                                     14 −4
         1    3  ,  −4 2 ,  10 −2 ,                                    .]
                                                                      8 −2
          5    4        −10 5           22 −4

                     ·          ¸
                         −1 0 1
     2. Let A =                   . Show that if B is a 3 × 2 such that AB = I2 ,
                          0 1 1
        then                                            
                                           a         b
                                  B =  −a − 1 1 − b 
                                          a+1        b
        for suitable numbers a and b. Use the associative law to show that
        (BA)2 B = B.
                 ·       ¸
                     a b
     3. If A =             , prove that A2 − (a + d)A + (ad − bc)I2 = 0.
                     c d

                     ·    ¸
                   4 −3
     4. If A =              , use the fact A2 = 4A − 3I2 and mathematical
                   1    0
        induction, to prove that

                                    (3n − 1)    3 − 3n
                             An =            A+        I2    if n ≥ 1.
                                        2          2



     5. A sequence of numbers x1 , x2 , . . . , xn , . . . satisfies the recurrence rela-
        tion xn+1 = axn + bxn−1 for n ≥ 1, where a and b are constants. Prove
        that                  ·        ¸          ·           ¸
                                xn+1                     xn
                                           =A                   ,
                                 xn                   xn−1
2.4. PROBLEMS                                                                      35
                   ·   ¸                   ·       ¸             ·    ¸
                  a b                        xn+1                  x1
    where A =            and hence express           in terms of        .
                  1 0                         xn                   x0
    If a = 4 and b = −3, use the previous question to find a formula for
    xn in terms of x1 and x0 .

    [Answer:
                                       3n − 1      3 − 3n
                              xn =            x1 +        x0 .]
                                          2           2
                   2a −a2
               ·             ¸
 6. Let A =                      .
                    1  0

     (a) Prove that

                                     (n + 1)an −nan+1
                                 ·                              ¸
                        n
                       A =                                           if n ≥ 1.
                                       nan−1   (1 − n)an

     (b) A sequence x0 , x1 , . . . , xn , . . . satisfies the recurrence relation xn+1 =
         2axn − a2 xn−1 for n ≥ 1. Use part (a) and the previous question
         to prove that xn = nan−1 x1 + (1 − n)an x0 for n ≥ 1.
              ·      ¸
                a b
 7. Let A =             and suppose that λ1 and λ2 are the roots of the
                c d
    quadratic polynomial x2 −(a+d)x+ad−bc. (λ1 and λ2 may be equal.)
    Let kn be defined by k0 = 0, k1 = 1 and for n ≥ 2
                                             n
                                             X
                                      kn =         λn−i i−1
                                                    1 λ2 .
                                             i=1

    Prove that
                            kn+1 = (λ1 + λ2 )kn − λ1 λ2 kn−1 ,
    if n ≥ 1. Also prove that
                       ½ n
                          (λ1 − λn2 )/(λ1 − λ2 )              if λ1 6= λ2 ,
                  kn =
                          nλn−1
                             1                                if λ1 = λ2 .

    Use mathematical induction to prove that if n ≥ 1,

                                 An = kn A − λ1 λ2 kn−1 I2 ,

    [Hint: Use the equation A2 = (a + d)A − (ad − bc)I2 .]
36                                                   CHAPTER 2. MATRICES
                                               ·       ¸
                                                   1 2
     8. Use Question 6 to prove that if A =              , then
                                                   2 1

                         3n                   (−1)n−1
                              ·         ¸               ·           ¸
                      n           1 1                       −1  1
                     A =                    +
                          2       1 1            2           1 −1

       if n ≥ 1.

     9. The Fibonacci numbers are defined by the equations F0 = 0, F1 = 1
        and Fn+1 = Fn + Fn−1 if n ≥ 1. Prove that
                              ÃÃ      √ !n Ã        √ !n !
                           1      1+ 5          1− 5
                     Fn = √                 −
                            5        2             2

       if n ≥ 0.

 10. Let r > 1 be an integer. Let a and b be arbitrary positive integers.
     Sequences xn and yn of positive integers are defined in terms of a and
     b by the recurrence relations

                                  xn+1 = xn + ryn
                                  yn+1 = xn + yn ,

       for n ≥ 0, where x0 = a and y0 = b.
       Use Question 6 to prove that
                              xn  √
                                 → r           as n → ∞.
                              yn

2.5      Non–singular matrices
DEFINITION 2.5.1 (Non–singular matrix)

   A square matrix A ∈ Mn×n (F ) is called non–singular or invertible if
there exists a matrix B ∈ Mn×n (F ) such that

                               AB = In = BA.

Any matrix B with the above property is called an inverse of A. If A does
not have an inverse, A is called singular.
2.5. NON–SINGULAR MATRICES                                                  37

THEOREM 2.5.1 (Inverses are unique)

   If A has inverses B and C, then B = C.

Proof. Let B and C be inverses of A. Then AB = In = BA and AC =
In = CA. Then B(AC) = BIn = B and (BA)C = In C = C. Hence because
B(AC) = (BA)C, we deduce that B = C.

REMARK 2.5.1 If A has an inverse, it is denoted by A−1 . So

                            AA−1 = In = A−1 A.

Also if A is non–singular, it follows that A−1 is also non–singular and

                                (A−1 )−1 = A.

THEOREM 2.5.2 If A and B are non–singular matrices of the same size,
then so is AB. Moreover

                             (AB)−1 = B −1 A−1 .

Proof.

         (AB)(B −1 A−1 ) = A(BB −1 )A−1 = AIn A−1 = AA−1 = In .

Similarly
                            (B −1 A−1 )(AB) = In .

REMARK 2.5.2 The above result generalizes to a product of m non–
singular matrices: If A1 , . . . , Am are non–singular n × n matrices, then the
product A1 . . . Am is also non–singular. Moreover
                                                     −1
                        (A1 . . . Am )−1 = A−1
                                            m . . . A1 .

(Thus the inverse of the product equals the product of the inverses in the
reverse order.)

EXAMPLE 2.5.1 If A and B are n × n matrices satisfying A2 = B 2 =
(AB)2 = In , prove that AB = BA.

Solution. Assume A2 = B 2 = (AB)2 = In . Then A, B, AB are non–
singular and A−1 = A, B −1 = B, (AB)−1 = AB.
    But (AB)−1 = B −1 A−1 and hence AB = BA.
38                                                         CHAPTER 2. MATRICES
                           ·     ¸                               ·     ¸
                            1 2                                    a b
EXAMPLE 2.5.2 A =                   is singular. For suppose B =
                            4 8                                    c d
is an inverse of A. Then the equation AB = I2 gives
                       ·      ¸·         ¸ ·        ¸
                         1 2      a b          1 0
                                          =
                         4 8      c d          0 1

and equating the corresponding elements of column 1 of both sides gives the
system

                                   a + 2c = 1
                                   4a + 8c = 0

which is clearly inconsistent.
                                   ·             ¸
                                       a b
THEOREM 2.5.3 Let A =                                and ∆ = ad − bc 6= 0. Then A is
                                       c d
non–singular. Also                           ·             ¸
                              −1        −1        d −b
                          A        =∆                          .
                                                 −c  a

REMARK 2.5.3 The expression ad −¯ bc is called¯  the determinant of A
                                        ¯ a b ¯
and is denoted by the symbols det A or ¯¯     ¯.
                                          c d ¯
                                                     ·             ¸
                                                          d −b
Proof.   Verify that the matrix B = ∆−1                                satisfies the equation
                                                         −c  a
AB = I2 = BA.

EXAMPLE 2.5.3 Let
                                          
                                     0 1 0
                               A =  0 0 1 .
                                     5 0 0

Verify that A3 = 5I3 , deduce that A is non–singular and find A−1 .

Solution. After verifying that A3 = 5I3 , we notice that
                         µ     ¶         µ     ¶
                           1 2             1 2
                       A     A = I3 =        A A.
                           5               5

Hence A is non–singular and A−1 = 15 A2 .
2.5. NON–SINGULAR MATRICES                                           39

THEOREM 2.5.4 If the coefficient matrix A of a system of n equations
in n unknowns is non–singular, then the system AX = B has the unique
solution X = A−1 B.

Proof. Assume that A−1 exists.

  1. (Uniqueness.) Assume that AX = B. Then

                             (A−1 A)X = A−1 B,
                                     In X = A−1 B,
                                          X = A−1 B.

  2. (Existence.) Let X = A−1 B. Then

                  AX = A(A−1 B) = (AA−1 )B = In B = B.

THEOREM 2.5.5 (Cramer’s rule for 2 equations in 2 unknowns)

The system

                              ax + by = e
                               cx + dy = f
                             ¯       ¯
                             ¯ a b ¯
has a unique solution if ∆ = ¯
                             ¯       ¯ 6= 0, namely
                                c d ¯

                                 ∆1                      ∆2
                           x=       ,            y=         ,
                                 ∆                       ∆
where                  ¯     ¯                            ¯     ¯
                       ¯ e b ¯                            ¯ a e ¯
                  ∆1 = ¯
                       ¯     ¯           and         ∆2 = ¯
                                                          ¯     ¯.
                         f d ¯                              c f ¯
                                      ¸  ·
                                 a b
                 6 0. Then A =
Proof. Suppose ∆ =                      has inverse
                                 c d
                                 ·         ¸
                        −1    −1    d −b
                      A =∆
                                   −c    a

and we know that the system
                                 ·       ¸       ·       ¸
                                     x               e
                             A               =
                                     y               f
40                                                   CHAPTER 2. MATRICES

has the unique solution
   · ¸          ·    ¸            ·        ¸·   ¸
     x       −1   e             1   d −b      e
         =A             =
     y            f             ∆ −c    a     f
                                  ·         ¸     ·  ¸ ·       ¸
                                1   de − bf     1 ∆1     ∆1 /∆
                           =                  =       =          .
                                ∆ −ce + af      ∆ ∆2     ∆2 /∆

Hence x = ∆1 /∆, y = ∆2 /∆.
COROLLARY 2.5.1 The homogeneous system

                                  ax + by = 0
                                 cx + dy = 0
                                      ¯     ¯
                                      ¯ a b ¯
has only the trivial solution if ∆ = ¯¯     ¯ 6= 0.
                                        c d ¯

EXAMPLE 2.5.4 The system

                                 7x + 8y = 100
                                 2x − 9y = 10

has the unique solution x = ∆1 /∆, y = ∆2 /∆, where
     ¯        ¯             ¯           ¯              ¯       ¯
     ¯ 7   8 ¯¯             ¯ 100    8 ¯¯              ¯ 7 100 ¯
∆=¯  ¯          = −79, ∆1 = ¯
                            ¯             = −980, ∆2 = ¯
                                                       ¯       ¯ = −130.
       2 −9 ¯                   10 −9 ¯                  2 10 ¯

So x = 980         130
        79 and y = 79 .

THEOREM 2.5.6 Let A be a square matrix. If A is non–singular, the
homogeneous system AX = 0 has only the trivial solution. Equivalently,
if the homogenous system AX = 0 has a non–trivial solution, then A is
singular.

Proof. If A is non–singular and AX = 0, then X = A−1 0 = 0.
REMARK 2.5.4 If A∗1 , . . . , A∗n denote the columns of A, then the equa-
tion
                 AX = x1 A∗1 + . . . + xn A∗n
holds. Consequently theorem 2.5.6 tells us that if there exist scalars x1 , . . . , xn ,
not all zero, such that

                            x1 A∗1 + . . . + xn A∗n = 0,
2.5. NON–SINGULAR MATRICES                                                  41

that is, if the columns of A are linearly dependent, then A is singular. An
equivalent way of saying that the columns of A are linearly dependent is that
one of the columns of A is expressible as a sum of certain scalar multiples
of the remaining columns of A; that is one column is a linear combination
of the remaining columns.
EXAMPLE 2.5.5
                                      
                                 1 2 3
                             A= 1 0 1 
                                 3 4 7

is singular. For it can be verified that A has reduced row–echelon form
                                           
                                    1 0 1
                                   0 1 1 
                                    0 0 0

and consequently AX = 0 has a non–trivial solution x = −1, y = −1, z = 1.

REMARK 2.5.5 More generally, if A is row–equivalent to a matrix con-
taining a zero row, then A is singular. For then the homogeneous system
AX = 0 has a non–trivial solution.

   An important class of non–singular matrices is that of the elementary
row matrices.
DEFINITION 2.5.2 (Elementary row matrices) There are three types,
Eij , Ei (t), Eij (t), corresponding to the three kinds of elementary row oper-
ation:
  1. Eij , (i 6= j) is obtained from the identity matrix In by interchanging
     rows i and j.

  2. Ei (t), (t 6= 0) is obtained by multiplying the i–th row of In by t.

  3. Eij (t), (i 6= j) is obtained from In by adding t times the j–th row of
     In to the i–th row.

EXAMPLE 2.5.6 (n = 3.)
                                                        
        1 0 0                 1  0 0                  1 0  0
E23 =  0 0 1  , E2 (−1) =  0 −1 0  , E23 (−1) =  0 1 −1  .
        0 1 0                 0  0 1                  0 0  1
42                                                       CHAPTER 2. MATRICES

The elementary row matrices have the following distinguishing property:

THEOREM 2.5.7 If a matrix A is pre–multiplied by an elementary row–
matrix, the resulting matrix is the one obtained by performing the corre-
sponding elementary row–operation on A.

EXAMPLE 2.5.7
                                       
            a b       1 0 0     a b       a b
      E23  c d  =  0 0 1   c d  =  e f  .
            e f       0 1 0     e f       c d

COROLLARY 2.5.2 The three types of elementary row–matrices are non–
singular. Indeed
         −1
     1. Eij = Eij ;

     2. Ei−1 (t) = Ei (t−1 );

     3. (Eij (t))−1 = Eij (−t).

Proof. Taking A = In in the above theorem, we deduce the following
equations:

                          Eij Eij       = In
                                 −1
                   Ei (t)Ei (t        ) = In = Ei (t−1 )Ei (t)   if t 6= 0
                  Eij (t)Eij (−t) = In = Eij (−t)Eij (t).

EXAMPLE 2.5.8 Find the 3 × 3 matrix A = E3 (5)E23 (2)E12 explicitly.
Also find A−1 .

Solution.
                                                         
                         0 1 0              0 1 0       0 1 0
     A = E3 (5)E23 (2)  1 0 0  = E3 (5)  1 0 2  =  1 0 2  .
                         0 0 1              0 0 1       0 0 5

To find A−1 , we have

                 A−1 = (E3 (5)E23 (2)E12 )−1
                           −1
                        = E12 (E23 (2))−1 (E3 (5))−1
                        = E12 E23 (−2)E3 (5−1 )
2.5. NON–SINGULAR MATRICES                                                    43
                                            
                                      1 0 0
                     = E12 E23 (−2)  0 1 0 
                                      0 0 51
                                             0 1 − 25
                                                   
                             1 0      0
                     = E12  0 1 − 25  =  1 0    0 .
                                      1             1
                             0 0      5      0 0    5

REMARK 2.5.6 Recall that A and B are row–equivalent if B is obtained
from A by a sequence of elementary row operations. If E1 , . . . , Er are the
respective corresponding elementary row matrices, then

              B = Er (. . . (E2 (E1 A)) . . .) = (Er . . . E1 )A = P A,

where P = Er . . . E1 is non–singular. Conversely if B = P A, where P is
non–singular, then A is row–equivalent to B. For as we shall now see, P is
in fact a product of elementary row matrices.

THEOREM 2.5.8 Let A be non–singular n × n matrix. Then

  (i) A is row–equivalent to In ,

 (ii) A is a product of elementary row matrices.

Proof. Assume that A is non–singular and let B be the reduced row–echelon
form of A. Then B has no zero rows, for otherwise the equation AX = 0
would have a non–trivial solution. Consequently B = In .
    It follows that there exist elementary row matrices E1 , . . . , Er such that
Er (. . . (E1 A) . . .) = B = In and hence A = E1−1 . . . Er−1 , a product of
elementary row matrices.

THEOREM 2.5.9 Let A be n × n and suppose that A is row–equivalent
to In . Then A is non–singular and A−1 can be found by performing the
same sequence of elementary row operations on In as were used to convert
A to In .

Proof. Suppose that Er . . . E1 A = In . In other words BA = In , where
B = Er . . . E1 is non–singular. Then B −1 (BA) = B −1 In and so A = B −1 ,
which is non–singular.¢−1
    Also A−1 = B −1        = B = Er ((. . . (E1 In ) . . .), which shows that A−1
                  ¡

is obtained from In by performing the same sequence of elementary row
operations as were used to convert A to In .
44                                              CHAPTER 2. MATRICES

REMARK 2.5.7 It follows from theorem 2.5.9 that if A is singular, then
A is row–equivalent to a matrix whose last row is zero.
                                   ·       ¸
                                      1 2
EXAMPLE 2.5.9 Show that A =                  is non–singular, find A−1 and
                                      1 1
express A as a product of elementary row matrices.

Solution. We form the partitioned matrix [A|I2 ] which consists of A followed
by I2 . Then any sequence of elementary row operations which reduces A to
I2 will reduce I2 to A−1 . Here
                                     ·               ¸
                                        1 2    1 0
                          [A|I2 ] =
                                        1 1    0 1
                                   ·                   ¸
                                      1    2     1 0
                R2 → R2 − R1
                                      0 −1     −1 1
                                  ·                 ¸
                                     1 2     1    0
                R2 → (−1)R2
                                     0 1     1 −1
                                    ·                   ¸
                                        1 0    −1     2
                R1 → R1 − 2R2                             .
                                        0 1     1 −1
     Hence A is row–equivalent to I2 and A is non–singular. Also
                                   ·          ¸
                             −1      −1    2
                           A =                  .
                                       1 −1

     We also observe that

                      E12 (−2)E2 (−1)E21 (−1)A = I2 .

Hence

                     A−1 = E12 (−2)E2 (−1)E21 (−1)
                       A = E21 (1)E2 (−1)E12 (2).

   The next result is the converse of Theorem 2.5.6 and is useful for proving
the non–singularity of certain types of matrices.

THEOREM 2.5.10 Let A be an n × n matrix with the property that
the homogeneous system AX = 0 has only the trivial solution. Then A is
non–singular. Equivalently, if A is singular, then the homogeneous system
AX = 0 has a non–trivial solution.
2.5. NON–SINGULAR MATRICES                                                      45

Proof. If A is n × n and the homogeneous system AX = 0 has only the
trivial solution, then it follows that the reduced row–echelon form B of A
cannot have zero rows and must therefore be In . Hence A is non–singular.
COROLLARY 2.5.3 Suppose that A and B are n × n and AB = In .
Then BA = In .
Proof. Let AB = In , where A and B are n × n. We first show that B
is non–singular. Assume BX = 0. Then A(BX) = A0 = 0, so (AB)X =
0, In X = 0 and hence X = 0.
    Then from AB = In we deduce (AB)B −1 = In B −1 and hence A = B −1 .
The equation BB −1 = In then gives BA = In .
   Before we give the next example of the above criterion for non-singularity,
we introduce an important matrix operation.
DEFINITION 2.5.3 (The transpose of a matrix) Let A be an m × n
matrix. Then At , the transpose of A, is the matrix obtained by interchanging
the rows and columns of A. In other words if A = [aij ], then At ji = aij .
                                                                 ¡ ¢

Consequently At is n × m.
   The transpose operation has the following properties:
     ¡ ¢t
  1. At = A;

  2. (A ± B)t = At ± B t if A and B are m × n;

  3. (sA)t = sAt if s is a scalar;

  4. (AB)t = B t At if A is m × n and B is n × p;

  5. If A is non–singular, then At is also non–singular and
                               ¡ t ¢−1 ¡ −1 ¢t
                                A      = A       ;

  6. X t X = x21 + . . . + x2n if X = [x1 , . . . , xn ]t is a column vector.
We prove only the fourth property. First check that both (AB)t and B t At
have the same size (p × m). Moreover, corresponding elements of both
matrices are equal. For if A = [aij ] and B = [bjk ], we have

                      (AB)t ki = (AB)ik
                     ¡       ¢

                                       Xn
                                  =       aij bjk
                                          j=1
46                                                     CHAPTER 2. MATRICES

                                        n
                                        X ¡ t¢ ¡ t¢
                                    =      B kj A ji
                                         j=1

                                    = B t At ki .
                                      ¡     ¢

    There are two important classes of matrices that can be defined concisely
in terms of the transpose operation.
DEFINITION 2.5.4 (Symmetric matrix) A real matrix A is called sym-
metric if At = A. In other words A is square (n × n say) and aji = aij for
all 1 ≤ i ≤ n, 1 ≤ j ≤ n. Hence
                                  ·       ¸
                                     a b
                               A=
                                     b c
is a general 2 × 2 symmetric matrix.
DEFINITION 2.5.5 (Skew–symmetric matrix) A real matrix A is called
skew–symmetric if At = −A. In other words A is square (n × n say) and
aji = −aij for all 1 ≤ i ≤ n, 1 ≤ j ≤ n.
REMARK 2.5.8 Taking i = j in the definition of skew–symmetric matrix
gives aii = −aii and so aii = 0. Hence
                                   ·       ¸
                                       0 b
                               A=
                                     −b 0
is a general 2 × 2 skew–symmetric matrix.
We can now state a second application of the above criterion for non–
singularity.
COROLLARY 2.5.4 Let B be an n × n skew–symmetric matrix. Then
A = In − B is non–singular.
Proof. Let A = In − B, where B t = −B. By Theorem 2.5.10 it suffices to
show that AX = 0 implies X = 0.
   We have (In − B)X = 0, so X = BX. Hence X t X = X t BX.
Taking transposes of both sides gives
                        (X t BX)t = (X t X)t
                       X t B t (X t )t = X t (X t )t
                       X t (−B)X = X t X
                         −X t BX = X t X = X t BX.
Hence X t X = −X t X and X t X = 0. But if X = [x1 , . . . , xn ]t , then X t X =
x21 + . . . + x2n = 0 and hence x1 = 0, . . . , xn = 0.
2.6. LEAST SQUARES SOLUTION OF EQUATIONS                                    47

2.6     Least squares solution of equations
Suppose AX = B represents a system of linear equations with real coeffi-
cients which may be inconsistent, because of the possibility of experimental
errors in determining A or B. For example, the system

                                    x = 1
                                    y = 2
                               x + y = 3.001

is inconsistent.
     It can be proved that the associated system At AX = At B is always
consistent and that any solution of this system minimizes the sum r12 + . . . +
rm2 , where r , . . . , r (the residuals) are defined by
             1           m

                        ri = ai1 x1 + . . . + ain xn − bi ,

for i = 1, . . . , m. The equations represented by At AX = At B are called the
normal equations corresponding to the system AX = B and any solution
of the system of normal equations is called a least squares solution of the
original system.
EXAMPLE 2.6.1 Find a least squares solution of the above inconsistent
system.
                                                        
                       1 0         · ¸                 1
                                      x
Solution. Here A =  0 1  , X =          , B =  2 .
                                      y
                       1 1                           3.001
                                
             ·         ¸ 1 0       ·         ¸
                1 0 1                2 1
Then At A =                 0 1 =             .
                0 1 1                 1 2
                            1 1
                                
            ·         ¸      1      ·         ¸
               1 0 1                  4.001
Also At B =                  2 =                .
               0 1 1                   5.001
                           3.001
So the normal equations are

                              2x + y = 4.001
                              x + 2y = 5.001

which have the unique solution
                                3.001           6.001
                          x=          ,    y=         .
                                  3               3
48                                                       CHAPTER 2. MATRICES

EXAMPLE 2.6.2 Points (x1 , y1 ), . . . , (xn , yn ) are experimentally deter-
mined and should lie on a line y = mx + c. Find a least squares solution to
the problem.

Solution. The points have to satisfy

                                 mx1 + c = y1
                                         ..
                                          .
                                 mxn + c = yn ,

or Ax = B, where
                                                     
                    x1          1         ·   ¸      y1
                   ..
                A= .           ..  , X = m , B =  ..  .
                                 .         c
                                                    . 
                           xn   1                    yn

The normal equations are given by (At A)X = At B. Here
                                 
                       ¸ x1 1          · 2
                                        x1 + . . . + x2n x1 + . . . + xn
        ·                                                                ¸
   t      x1 . . . xn  . . 
  AA=                     .. ..  =
           1 ... 1                      x1 + . . . + x n       n
                           xn 1

Also
                                            
                  ·                 ¸     y1   ·                         ¸
                      x1 . . . xn        ..    x 1 y1 + . . . + x n yn
         At B =                          . =                             .
                      1 ... 1                        y1 + . . . + y n
                                          yn

It is not difficult to prove that
                                               X
                      ∆ = det (At A) =                 (xi − xj )2 ,
                                             1≤i<j≤n

which is positive unless x1 = . . . = xn . Hence if not all of x1 , . . . , xn are
equal, At A is non–singular and the normal equations have a unique solution.
This can be shown to be
        1 X                                 1 X
  m=              (xi − xj )(yi − yj ), c =         (xi yj − xj yi )(xi − xj ).
        ∆                                   ∆
           1≤i<j≤n                                 1≤i<j≤n

REMARK 2.6.1 The matrix At A is symmetric.
2.7. PROBLEMS                                                                                  49

2.7     PROBLEMS
                  ·     ¸
                  1 4
 1. Let A =               . Prove that A is non–singular, find A−1 and
                −3 1
    express A as a product of elementary row matrices.
                    · 1       4
                                 ¸
               −1      13   − 13
    [Answer: A =        3     1    ,
                                13       13

      A = E21 (−3)E2 (13)E12 (4) is one such decomposition.]

 2. A square matrix D = [dij ] is called diagonal if dij = 0 for i 6= j. (That
    is the off–diagonal elements are zero.) Prove that pre–multiplication
    of a matrix A by a diagonal matrix D results in matrix DA whose
    rows are the rows of A multiplied by the respective diagonal elements
    of D. State and prove a similar result for post–multiplication by a
    diagonal matrix.
      Let diag (a1 , . . . , an ) denote the diagonal matrix whose diagonal ele-
      ments dii are a1 , . . . , an , respectively. Show that

              diag (a1 , . . . , an )diag (b1 , . . . , bn ) = diag (a1 b1 , . . . , an bn )

      and deduce that if a1 . . . an 6= 0, then diag (a1 , . . . , an ) is non–singular
      and
                  (diag (a1 , . . . , an ))−1 = diag (a−1           −1
                                                       1 , . . . , an ).


      Also prove that diag (a1 , . . . , an ) is singular if ai = 0 for some i.

                       
                0 0 2
 3. Let A =  1 2 6 . Prove that A is non–singular, find A−1 and
                3 7 9
    express A as a product of elementary row matrices.
                                               
                                 −12       7 −2
                                     9
      [Answers: A−1 =               2    −3  1 ,
                                     1
                                     2     0  0

      A = E12 E31 (3)E23 E3 (2)E12 (2)E13 (24)E23 (−9) is one such decompo-
      sition.]
50                                                    CHAPTER 2. MATRICES
                                                                     
                                                              1  2  k
     4. Find the rational number k for which the matrix A =  3 −1  1 
                                                              5  3 −5
        is singular. [Answer: k = −3.]
                          ·        ¸
                           1    2
     5. Prove that A =               is singular and find a non–singular matrix
                         −2 −4
        P such that P A has last row zero.
                 ·      ¸
                    1 4
     6. If A =            , verify that A2 − 2A + 13I2 = 0 and deduce that
                 −3 1
                 1
        A−1 = − 13 (A − 2I2 ).
                        
                  1 1 −1
     7. Let A =  0 0  1 .
                  2 1  2

           (i) Verify that A3 = 3A2 − 3A + I3 .
          (ii) Express A4 in terms of A2 , A and I3 and hence calculate A4
               explicitly.
          (iii) Use (i) to prove that A is non–singular and find A−1 explicitly.
                                                         
                                                −11 −8 −4
          [Answers: (ii) A4 = 6A2 − 8A + 3I3 =  12  9  4 ;
                                                 20 16  5
                                               
                                       −1 −3  1
          (iii) A−1 = A2 − 3A + 3I3 =  2  4 −1 .]
                                        0  1  0

     8.    (i) Let B be an n × n matrix such that B 3 = 0. If A = In − B, prove
               that A is non–singular and A−1 = In + B + B 2 .
               Show that the system of linear equations AX = b has the solution

                                      X = b + Bb + B 2 b.
                              
                        0 r s
          (ii) If B =  0 0 t , verify that B 3 = 0 and use (i) to determine
                        0 0 0
                       −1
               (I3 − B) explicitly.
2.7. PROBLEMS                                                                  51
                              
                    1 r s + rt
         [Answer:  0 1      t .]
                    0 0      1

  9. Let A be n × n.
      (i) If A2 = 0, prove that A is singular.
     (ii) If A2 = A and A 6= In , prove that A is singular.
 10. Use Question 7 to solve the system of equations
                                   x+y−z = a
                                           z = b
                               2x + y + 2z = c
    where a, b, c are given rationals. Check your answer using the Gauss–
    Jordan algorithm.
    [Answer: x = −a − 3b + c, y = 2a + 4b − c, z = b.]
 11. Determine explicitly the following products of 3 × 3 elementary row
     matrices.

    (i) E12 E23   (ii) E1 (5)E12   (iii) E12 (3)E21 (−3)   (iv) (E1 (100))−1
         −1
    (v) E12   (vi) (E12 (7))−1 (vii) (E12 (7)E31 (1))−1 .
                                                              
                    0 0 1             0 5 0               −8 3 0
    [Answers: (i)  1 0 0  (ii)  1 0 0  (iii)  −3 1 0 
                    0 1 0             0 0 1                0 0 1
          1                                                          
           100 0 0            0 1 0            1 −7 0                1 −7 0
    (iv)  0 1 0  (v)  1 0 0  (vi)  0            1 0  (vii)  0    1 0 .]
             0 0 1            0 0 1            0     0 1           −1   7 1

 12. Let A be the following product of 4 × 4 elementary row matrices:
                              A = E3 (2)E14 E42 (3).
    Find A and A−1 explicitly.
                                                              
                    0 3 0 1           0  0                   0 1
                   0 1 0 0     −1  0  1                   0 0 
                                    
    [Answers: A = 
                   0 0 2 0 , A =  0
                                                            1
                                                                 .]
                                         0                   2 0
                                                                 
                    1 0 0 0           1 −3                   0 0
52                                                  CHAPTER 2. MATRICES

 13. Determine which of the following matrices over Z2 are non–singular
     and find the inverse, where possible.
                                        
           1 1 0 1               1 1 0 1
          0 0 1 1 
                        (b)  0 1 1 1 .
                                          
     (a) 
          1 1 1 1             1 0 1 0 
           1 0 0 1               1 1 0 1
                                
                     1 1 1 1
                    1 0 0 1 
     [Answer: (a)  1 0 1 0 .]
                                 

                     1 1 1 0

 14. Determine which of the following matrices are non–singular and find
     the inverse, where possible.
                                                      
              1 1 1             2 2 4             4 6 −3
     (a)  −1 1 0  (b) 1 0 1  (c)  0 0               7 
              2 0 0             0 1 0             0 0    5
                                          
                             1 2 4 6                  
            2    0 0         0 1 2 0            1 2 3
     (d)  0 −5 0  (e)     0 0 1 2  (f) 4 5 6 .
                                                       
            0    0 7                              5 7 9
                               0 0 0 2
                                 1
                                        1                1          
                     0    0      2         −2   2   1         2    0 0
                                 1 
     [Answers: (a)  0    1      2   (b)  0    0   1  (d)  0 − 15 0 
                                             1
                     1 −1 −1                 2 −1 −1          0    0 17
                            
           1 −2      0 −3
          0     1 −2     2 
     (e)                    .]
          0     0   1 −1 
                          1
           0     0   0    2


 15. Let A be a non–singular n × n matrix. Prove that At is non–singular
     and that (At )−1 = (A−1 )t .
                      ·         ¸
                          a b
 16. Prove that A =                 has no inverse if ad − bc = 0.
                          c d

     [Hint: Use the equation A2 − (a + d)A + (ad − bc)I2 = 0.]
2.7. PROBLEMS                                                                             53
                                                     
                                           1  a b
 17. Prove that the real matrix A =  −a      1 c  is non–singular by
                                         −b −c 1
     proving that A is row–equivalent to I3 .

 18. If P −1 AP = B, prove that P −1 An P = B n for n ≥ 1.
               · 2      1
                            ¸           ·        ¸                      · 5    ¸
                   3    4                    1 3                  −1      12 0
 19. Let A =       1    3       ,P =               . Verify that P AP =
                   3    4                   −1 4                           0 1
     and deduce that
                                    ·         ¸           µ        ¶n ·           ¸
                                1       3 3           1        5           4 −3
                       An =                       +                                   .
                                7       4 4           7       12          −4  3

               ·            ¸
                   a b
 20. Let A =            be a Markov matrix; that is a matrix whose elements
                   c d
                                                                  ·      ¸
                                                                    b  1
     are non–negative and satisfy a+c = 1 = b+d. Also let P =              .
                                                                    c −1
     Prove that if A 6= I2 then
                                            ·                 ¸
                                   −1         1        0
       (i) P is non–singular and P AP =                         ,
                                              0 a+d−1
                       ·      ¸                    ·       ¸
                   1     b b                          0 1
      (ii) An →                 as n → ∞, if A 6=            .
                  b+c c c                             1 0

                                
              1 2              −1
 21. If X =  3 4  and Y =  3 , find XX t , X t X, Y Y t , Y t Y .
              5 6                4
                                                         
                  5 11 17     ·       ¸      1 −3 −4
                                35 44
     [Answers:  11 25 39  ,           ,  −3     9 12  , 26.]
                                44 56
                 17 39 61                   −4 12 16

 22. Prove that the system of linear equations
                                             x + 2y = 4
                                              x+y = 5
                                            3x + 5y = 12
     is inconsistent and find a least squares solution of the system.
     [Answer: x = 6, y = −7/6.]
54                                               CHAPTER 2. MATRICES

 23. The points (0, 0), (1, 0), (2, −1), (3, 4), (4, 8) are required to lie on a
     parabola y = a + bx + cx2 . Find a least squares solution for a, b, c.
     Also prove that no parabola passes through these points.
     [Answer: a = 15 , b = −2, c = 1.]

 24. If A is a symmetric n×n real matrix and B is n×m, prove that B t AB
     is a symmetric m × m matrix.

 25. If A is m × n and B is n × m, prove that AB is singular if m > n.

 26. Let A and B be n × n. If A or B is singular, prove that AB is also
     singular.
Chapter 3

SUBSPACES

3.1     Introduction
Throughout this chapter, we will be studying F n , the set of all n–dimensional
column vectors with components from a field F . We continue our study of
matrices by considering an important class of subsets of F n called subspaces.
These arise naturally for example, when we solve a system of m linear ho-
mogeneous equations in n unknowns.
    We also study the concept of linear dependence of a family of vectors.
This was introduced briefly in Chapter 2, Remark 2.5.4. Other topics dis-
cussed are the row space, column space and null space of a matrix over F ,
the dimension of a subspace, particular examples of the latter being the rank
and nullity of a matrix.


3.2     Subspaces of F n
DEFINITION 3.2.1 A subset S of F n is called a subspace of F n if
  1. The zero vector belongs to S; (that is, 0 ∈ S);
  2. If u ∈ S and v ∈ S, then u + v ∈ S; (S is said to be closed under
     vector addition);
  3. If u ∈ S and t ∈ F , then tu ∈ S; (S is said to be closed under scalar
     multiplication).

EXAMPLE 3.2.1 Let A ∈ Mm×n (F ). Then the set of vectors X ∈ F n
satisfying AX = 0 is a subspace of F n called the null space of A and is
denoted here by N (A). (It is sometimes called the solution space of A.)

                                      55
56                                                   CHAPTER 3. SUBSPACES

Proof. (1) A0 = 0, so 0 ∈ N (A); (2) If X, Y ∈ N (A), then AX = 0 and
AY = 0, so A(X + Y ) = AX + AY = 0 + 0 = 0 and so X + Y ∈ N (A); (3)
If X ∈ N (A) and t ∈ F , then A(tX) = t(AX) = t0 = 0, so tX ∈ N (A).
                         ·      ¸
                           1 0
    For example, if A =           , then N (A) = {0}, the set consisting of
                           0 1
                              ·       ¸
                                1 2
just the zero vector. If A =            , then N (A) is the set of all scalar
                                2 4
multiples of [−2, 1]t .

EXAMPLE 3.2.2 Let X1 , . . . , Xm ∈ F n . Then the set consisting of all
linear combinations x1 X1 + · · · + xm Xm , where x1 , . . . , xm ∈ F , is a sub-
space of F n . This subspace is called the subspace spanned or generated by
X1 , . . . , Xm and is denoted here by hX1 , . . . , Xm i. We also call X1 , . . . , Xm
a spanning family for S = hX1 , . . . , Xm i.

Proof. (1) 0 = 0X1 + · · · + 0Xm , so 0 ∈ hX1 , . . . , Xm i; (2) If X, Y ∈
hX1 , . . . , Xm i, then X = x1 X1 + · · · + xm Xm and Y = y1 X1 + · · · + ym Xm ,
so

      X +Y      = (x1 X1 + · · · + xm Xm ) + (y1 X1 + · · · + ym Xm )
                = (x1 + y1 )X1 + · · · + (xm + ym )Xm ∈ hX1 , . . . , Xm i.

(3) If X ∈ hX1 , . . . , Xm i and t ∈ F , then

               X = x 1 X1 + · · · + x m Xm
              tX = t(x1 X1 + · · · + xm Xm )
                   = (tx1 )X1 + · · · + (txm )Xm ∈ hX1 , . . . , Xm i.

For example, if A ∈ Mm×n (F ), the subspace generated by the columns of A
is an important subspace of F m and is called the column space of A. The
column space of A is denoted here by C(A). Also the subspace generated
by the rows of A is a subspace of F n and is called the row space of A and is
denoted by R(A).

EXAMPLE 3.2.3 For example F n = hE1 , . . . , En i, where E1 , . . . , En are
the n–dimensional unit vectors. For if X = [x1 , . . . , xn ]t ∈ F n , then X =
x 1 E1 + · · · + x n En .

EXAMPLE 3.2.4 Find a spanning family for the subspace S of R3 defined
by the equation 2x − 3y + 5z = 0.
3.2. SUBSPACES OF F N                                                                      57

Solution. (S is in fact the null space of [2, −3, 5], so S is indeed a subspace
of R3 .)
    If [x, y, z]t ∈ S, then x = 23 y − 25 z. Then
                    3            5
                                               3       5 
                    x        2y − 2z              2        −2
                  y =        y        = y 1 +z 0 
                    z           z                0          1
and conversely. Hence [ 32 , 1, 0]t and [− 25 , 0, 1]t form a spanning family for
S.
   The following result is easy to prove:
LEMMA 3.2.1 Suppose each of X1 , . . . , Xr is a linear combination of
Y1 , . . . , Ys . Then any linear combination of X1 , . . . , Xr is a linear combi-
nation of Y1 , . . . , Ys .
As a corollary we have
THEOREM 3.2.1 Subspaces hX1 , . . . , Xr i and hY1 , . . . , Ys i are equal if
each of X1 , . . . , Xr is a linear combination of Y1 , . . . , Ys and each of Y1 , . . . , Ys
is a linear combination of X1 , . . . , Xr .
COROLLARY 3.2.1 Subspaces hX1 , . . . , Xr , Z1 , . . . , Zt i and hX1 , . . . , Xr i
are equal if each of Z1 , . . . , Zt is a linear combination of X1 , . . . , Xr .
EXAMPLE 3.2.5 If X and Y are vectors in Rn , then
                              hX, Y i = hX + Y, X − Y i.
Solution. Each of X + Y and X − Y is a linear combination of X and Y .
Also
           1           1                      1          1
     X = (X + Y ) + (X − Y ) and Y = (X + Y ) − (X − Y ),
           2           2                      2          2
so each of X and Y is a linear combination of X + Y and X − Y .
   There is an important application of Theorem 3.2.1 to row equivalent
matrices (see Definition 1.2.4):
THEOREM 3.2.2 If A is row equivalent to B, then R(A) = R(B).
Proof. Suppose that B is obtained from A by a sequence of elementary row
operations. Then it is easy to see that each row of B is a linear combination
of the rows of A. But A can be obtained from B by a sequence of elementary
operations, so each row of A is a linear combination of the rows of B. Hence
by Theorem 3.2.1, R(A) = R(B).
58                                                       CHAPTER 3. SUBSPACES

REMARK 3.2.1 If A is row equivalent to B, it is not always true that
C(A) = C(B).
                        ·   ¸           ·      ¸
                       1 1                1 1
For example, if A =            and B =           , then B is in fact the
                       1 1                0 0
reduced row–echelon form of A. However we see that
                          ¿· ¸ · ¸À ¿· ¸À
                              1     1           1
                  C(A) =         ,        =
                              1     1           1
                        ¿·       ¸À
                             1
and similarly C(B) =                  .
                             0
                                          ·       ¸                ·       ¸
                                              1                        1
     Consequently C(A) 6= C(B), as                    ∈ C(A) but               6∈ C(B).
                                              1                        1


3.3     Linear dependence
We now recall the definition of linear dependence and independence of a
family of vectors in F n given in Chapter 2.

DEFINITION 3.3.1 Vectors X1 , . . . , Xm in F n are said to be linearly
dependent if there exist scalars x1 , . . . , xm , not all zero, such that

                            x1 X1 + · · · + xm Xm = 0.

In other words, X1 , . . . , Xm are linearly dependent if some Xi is expressible
as a linear combination of the remaining vectors.
    X1 , . . . , Xm are called linearly independent if they are not linearly depen-
dent. Hence X1 , . . . , Xm are linearly independent if and only if the equation

                             x 1 X1 + · · · + x m Xm = 0

has only the trivial solution x1 = 0, . . . , xm = 0.

EXAMPLE 3.3.1 The following three vectors in R3
                                              
               1               −1               −1
        X1 =  2  , X2 =  1  , X3 =  7 
               3                 2              12

are linearly dependent, as 2X1 + 3X2 + (−1)X3 = 0.
3.3. LINEAR DEPENDENCE                                                   59

REMARK 3.3.1 If X1 , . . . , Xm are linearly independent and

                 x 1 X1 + · · · + x m Xm = y 1 X1 + · · · + y m Xm ,

then x1 = y1 , . . . , xm = ym . For the equation can be rewritten as

                   (x1 − y1 )X1 + · · · + (xm − ym )Xm = 0

and so x1 − y1 = 0, . . . , xm − ym = 0.

THEOREM 3.3.1 A family of m vectors in F n will be linearly dependent
if m > n. Equivalently, any linearly independent family of m vectors in F n
must satisfy m ≤ n.

Proof. The equation
                            x 1 X1 + · · · + x m Xm = 0

is equivalent to n homogeneous equations in m unknowns. By Theorem 1.5.1,
such a system has a non–trivial solution if m > n.
   The following theorem is an important generalization of the last result
and is left as an exercise for the interested student:

THEOREM 3.3.2 A family of s vectors in hX1 , . . . , Xr i will be linearly
dependent if s > r. Equivalently, a linearly independent family of s vectors
in hX1 , . . . , Xr i must have s ≤ r.

    Here is a useful criterion for linear independence which is sometimes
called the left–to–right test:

THEOREM 3.3.3 Vectors X1 , . . . , Xm in F n are linearly independent if

 (a) X1 6= 0;

 (b) For each k with 1 < k ≤ m, Xk is not a linear combination of
     X1 , . . . , Xk−1 .

   One application of this criterion is the following result:

THEOREM 3.3.4 Every subspace S of F n can be represented in the form
S = hX1 , . . . , Xm i, where m ≤ n.
60                                                  CHAPTER 3. SUBSPACES

Proof. If S = {0}, there is nothing to prove – we take X1 = 0 and m = 1.
    So we assume S contains a non–zero vector X1 ; then hX1 i ⊆ S as S is a
subspace. If S = hX1 i, we are finished. If not, S will contain a vector X2 ,
not a linear combination of X1 ; then hX1 , X2 i ⊆ S as S is a subspace. If
S = hX1 , X2 i, we are finished. If not, S will contain a vector X3 which is
not a linear combination of X1 and X2 . This process must eventually stop,
for at stage k we have constructed a family of k linearly independent vectors
X1 , . . . , Xk , all lying in F n and hence k ≤ n.
   There is an important relationship between the columns of A and B, if
A is row–equivalent to B.

THEOREM 3.3.5 Suppose that A is row equivalent to B and let c1 , . . . , cr
be distinct integers satisfying 1 ≤ ci ≤ n. Then

 (a) Columns A∗c1 , . . . , A∗cr of A are linearly dependent if and only if the
     corresponding columns of B are linearly dependent; indeed more is
     true:

              x1 A∗c1 + · · · + xr A∗cr = 0 ⇔ x1 B∗c1 + · · · + xr B∗cr = 0.

 (b) Columns A∗c1 , . . . , A∗cr of A are linearly independent if and only if the
     corresponding columns of B are linearly independent.

  (c) If 1 ≤ cr+1 ≤ n and cr+1 is distinct from c1 , . . . , cr , then

         A∗cr+1 = z1 A∗c1 + · · · + zr A∗cr ⇔ B∗cr+1 = z1 B∗c1 + · · · + zr B∗cr .

Proof. First observe that if Y = [y1 , . . . , yn ]t is an n–dimensional column
vector and A is m × n, then

                           AY = y1 A∗1 + · · · + yn A∗n .

Also AY = 0 ⇔ BY = 0, if B is row equivalent to A. Then (a) follows by
taking yi = xcj if i = cj and yi = 0 otherwise.
   (b) is logically equivalent to (a), while (c) follows from (a) as

A∗cr+1 = z1 A∗c1 + · · · + zr A∗cr   ⇔ z1 A∗c1 + · · · + zr A∗cr + (−1)A∗cr+1 = 0
                                     ⇔ z1 B∗c1 + · · · + zr B∗cr + (−1)B∗cr+1 = 0
                                     ⇔ B∗cr+1 = z1 B∗c1 + · · · + zr B∗cr .
3.4. BASIS OF A SUBSPACE                                                    61

EXAMPLE 3.3.2 The matrix
                                 
                       1 1 5 1  4
                A =  2 −1 1 2  2 
                       3 0 6 0 −3

has reduced row–echelon form equal to
                                       
                             1 0 2 0 −1
                         B= 0 1 3 0  2 .
                             0 0 0 1  3

We notice that B∗1 , B∗2 and B∗4 are linearly independent and hence so are
A∗1 , A∗2 and A∗4 . Also

                     B∗3 = 2B∗1 + 3B∗2
                     B∗5 = (−1)B∗1 + 2B∗2 + 3B∗4 ,

so consequently

                      A∗3 = 2A∗1 + 3A∗2
                      A∗5 = (−1)A∗1 + 2A∗2 + 3A∗4 .


3.4     Basis of a subspace
We now come to the important concept of basis of a vector subspace.

DEFINITION 3.4.1 Vectors X1 , . . . , Xm belonging to a subspace S are
said to form a basis of S if

 (a) Every vector in S is a linear combination of X1 , . . . , Xm ;

 (b) X1 , . . . , Xm are linearly independent.

Note that (a) is equivalent to the statement that S = hX1 , . . . , Xm i as we
automatically have hX1 , . . . , Xm i ⊆ S. Also, in view of Remark 3.3.1 above,
(a) and (b) are equivalent to the statement that every vector in S is uniquely
expressible as a linear combination of X1 , . . . , Xm .

EXAMPLE 3.4.1 The unit vectors E1 , . . . , En form a basis for F n .
62                                                  CHAPTER 3. SUBSPACES

REMARK 3.4.1 The subspace {0}, consisting of the zero vector alone,
does not have a basis. For every vector in a linearly independent family
must necessarily be non–zero. (For example, if X1 = 0, then we have the
non–trivial linear relation

                             1X1 + 0X2 + · · · + 0Xm = 0

and X1 , . . . , Xm would be linearly dependent.)

However if we exclude this case, every other subspace of F n has a basis:
THEOREM 3.4.1 A subspace of the form hX1 , . . . , Xm i, where at least
one of X1 , . . . , Xm is non–zero, has a basis Xc1 , . . . , Xcr , where 1 ≤ c1 <
· · · < cr ≤ m.
     Proof. (The left–to–right algorithm). Let c1 be the least index k for which
Xk is non–zero. If c1 = m or if all the vectors Xk with k > c1 are linear
combinations of Xc1 , terminate the algorithm and let r = 1. Otherwise let
c2 be the least integer k > c1 such that Xk is not a linear combination of
Xc 1 .
     If c2 = m or if all the vectors Xk with k > c2 are linear combinations
of Xc1 and Xc2 , terminate the algorithm and let r = 2. Eventually the
algorithm will terminate at the r–th stage, either because cr = m, or because
all vectors Xk with k > cr are linear combinations of Xc1 , . . . , Xcr .
     Then it is clear by the construction of Xc1 , . . . , Xcr , using Corollary 3.2.1
that
 (a) hXc1 , . . . , Xcr i = hX1 , . . . , Xm i;

 (b) the vectors Xc1 , . . . , Xcr are linearly independent by the left–to–right
     test.
Consequently Xc1 , . . . , Xcr form a basis (called the left–to–right basis) for
the subspace hX1 , . . . , Xm i.
EXAMPLE 3.4.2 Let X and Y be linearly independent vectors in Rn .
Then the subspace h0, 2X, X, −Y, X + Y i has left–to–right basis consisting
of 2X, −Y .
A subspace S will in general have more than one basis. For example, any
permutation of the vectors in a basis will yield another basis. Given one
particular basis, one can determine all bases for S using a simple formula.
This is left as one of the problems at the end of this chapter.
   We settle for the following important fact about bases:
3.4. BASIS OF A SUBSPACE                                                            63

THEOREM 3.4.2 Any two bases for a subspace S must contain the same
number of elements.

Proof. For if X1 , . . . , Xr and Y1 , . . . , Ys are bases for S, then Y1 , . . . , Ys
form a linearly independent family in S = hX1 , . . . , Xr i and hence s ≤ r by
Theorem 3.3.2. Similarly r ≤ s and hence r = s.

DEFINITION 3.4.2 This number is called the dimension of S and is
written dim S. Naturally we define dim {0} = 0.

It follows from Theorem 3.3.1 that for any subspace S of F n , we must have
dim S ≤ n.

EXAMPLE 3.4.3 If E1 , . . . , En denote the n–dimensional unit vectors in
F n , then dim hE1 , . . . , Ei i = i for 1 ≤ i ≤ n.

The following result gives a useful way of exhibiting a basis.

THEOREM 3.4.3 A linearly independent family of m vectors in a sub-
space S, with dim S = m, must be a basis for S.

Proof. Let X1 , . . . , Xm be a linearly independent family of vectors in a
subspace S, where dim S = m. We have to show that every vector X ∈ S is
expressible as a linear combination of X1 , . . . , Xm . We consider the following
family of vectors in S: X1 , . . . , Xm , X. This family contains m + 1 elements
and is consequently linearly dependent by Theorem 3.3.2. Hence we have

                       x1 X1 + · · · + xm Xm + xm+1 X = 0,                       (3.1)

where not all of x1 , . . . , xm+1 are zero. Now if xm+1 = 0, we would have

                             x1 X1 + · · · + xm Xm = 0,

with not all of x1 , . . . , xm zero, contradictiong the assumption that X1 . . . , Xm
are linearly independent. Hence xm+1 6= 0 and we can use equation 3.1 to
express X as a linear combination of X1 , . . . , Xm :

                               −x1               −xm
                         X=         X1 + · · · +      Xm .
                               xm+1              xm+1
64                                                     CHAPTER 3. SUBSPACES

3.5      Rank and nullity of a matrix
We can now define three important integers associated with a matrix.
DEFINITION 3.5.1 Let A ∈ Mm×n (F ). Then
 (a) column rank A = dim C(A);

 (b) row rank A = dim R(A);

  (c) nullity A = dim N (A).
We will now see that the reduced row–echelon form B of a matrix A allows
us to exhibit bases for the row space, column space and null space of A.
Moreover, an examination of the number of elements in each of these bases
will immediately result in the following theorem:
THEOREM 3.5.1 Let A ∈ Mm×n (F ). Then
 (a) column rank A = row rank A;

 (b) column rank A+ nullity A = n.
Finding a basis for R(A): The r non–zero rows of B form a basis for R(A)
and hence row rank A = r.
   For we have seen earlier that R(A) = R(B). Also

                        R(B) = hB1∗ , . . . , Bm∗ i
                                = hB1∗ , . . . , Br∗ , 0 . . . , 0i
                                = hB1∗ , . . . , Br∗ i.

The linear independence of the non–zero rows of B is proved as follows: Let
the leading entries of rows 1, . . . , r of B occur in columns c1 , . . . , cr . Suppose
that
                          x1 B1∗ + · · · + xr Br∗ = 0.
Then equating components c1 , . . . , cr of both sides of the last equation, gives
x1 = 0, . . . , xr = 0, in view of the fact that B is in reduced row– echelon
form.
Finding a basis for C(A): The r columns A∗c1 , . . . , A∗cr form a basis for
C(A) and hence column rank A = r. For it is clear that columns c1 , . . . , cr
of B form the left–to–right basis for C(B) and consequently from parts (b)
and (c) of Theorem 3.3.5, it follows that columns c1 , . . . , cr of A form the
left–to–right basis for C(A).
3.5. RANK AND NULLITY OF A MATRIX                                                  65

Finding a basis for N (A): For notational simplicity, let us suppose that c1 =
1, . . . , cr = r. Then B has the form
                                                          
                            1 0 · · · 0 b1r+1 · · · b1n
                           0 1 · · · 0 b2r+1 · · · b2n 
                           .. ..      .   ..           .. 
                                                          
                           . . · · · ..    .  · · ·     . 
                                                          
                     B =  0 0 · · · 1 brr+1 · · · brn 
                          
                                                           .
                           0 0 ··· 0     0    · · ·  0    
                                                          
                           .. ..      .  ..           .. 
                           . . · · · ..   .   ··· . 
                            0 0 ··· 0          0     ···   0
Then N (B) and hence N (A) are determined by the equations

                     x1 = (−b1r+1 )xr+1 + · · · + (−b1n )xn
                        ..
                         .
                     xr = (−brr+1 )xr+1 + · · · + (−brn )xn ,

where xr+1 , . . . , xn are arbitrary elements of F . Hence the general vector X
in N (A) is given by
                                                               
                 x1                    −b1r+1                 −bn
            ..                          ..              .. 
            .                            .              . 
                                                               
                        = xr+1  −brr+1  + · · · + xn  −brn 
            xr                                                 
           
            xr+1                                                          (3.2)
                                         1   
                                                            0 
                                                                   
            ..                          ..                .. 
                                           
                                             
            .                           .               . 
                xn                   0                             1
                         = xr+1 X1 + · · · + xn Xn−r .

Hence N (A) is spanned by X1 , . . . , Xn−r , as xr+1 , . . . , xn are arbitrary. Also
X1 , . . . , Xn−r are linearly independent. For equating the right hand side of
equation 3.2 to 0 and then equating components r + 1, . . . , n of both sides
of the resulting equation, gives xr+1 = 0, . . . , xn = 0.
    Consequently X1 , . . . , Xn−r form a basis for N (A).
    Theorem 3.5.1 now follows. For we have

                           row rank A = dim R(A) = r
                       column rank A = dim C(A) = r.

Hence
                          row rank A = column rank A.
66                                              CHAPTER 3. SUBSPACES

Also

       column rank A + nullity A = r + dim N (A) = r + (n − r) = n.

DEFINITION 3.5.2 The common value of column rank A and row rank A
is called the rank of A and is denoted by rank A.

EXAMPLE 3.5.1 Given that the reduced row–echelon form of
                                         
                        1    1 5 1      4
                 A =  2 −1 1 2         2 
                        3    0 6 0 −3

equal to                                 
                               1 0 2 0 −1
                           B= 0 1 3 0  2 ,
                               0 0 0 1  3
find bases for R(A), C(A) and N (A).

Solution. [1, 0, 2, 0, −1], [0, 1, 3, 0, 2] and [0, 0, 0, 1, 3] form a basis for
R(A). Also
                                       
                       1         1          1
                A∗1 = 2 , A∗2 = −1 , A∗4 = 2 
                                      
                       3         0          0

form a basis for C(A).
   Finally N (A) is given by
       
             −2x3 + x5
                              
                                 −2
                                              
    x1                                        1
   x2   −3x3 − 2x5          −3        −2 
                                         
   x3  =     x3      = x 3  1  + x 5  0  = x 3 X1 + x 5 X2 ,
                                            
       
   x4       −3x5            0         −3 
    x5          x5                0           1

where x3 and x5 are arbitrary. Hence X1 and X2 form a basis for N (A).
   Here rank A = 3 and nullity A = 2.
                             ·      ¸            ·     ¸
                               1 2                 1 2
EXAMPLE 3.5.2 Let A =                 . Then B =          is the reduced
                               2 4                 0 0
row–echelon form of A.
3.6. PROBLEMS                                                                   67
                                              ¸·
                                            1
    Hence [1, 2] is a basis for R(A) and        is a basis for C(A). Also N (A)
                                            2
is given by the equation x1 = −2x2 , where x2 is arbitrary. Then
                       ·      ¸ ·         ¸       ·      ¸
                          x1        −2x2             −2
                                =           = x2
                          x2           x2             1
           ·      ¸
             −2
and hence           is a basis for N (A).
               1
    Here rank A = 1 and nullity A = 1.
                                ·       ¸             ·        ¸
                                   1 2                   1 0
EXAMPLE 3.5.3 Let A =                     . Then B =             is the reduced
                                   3 4                   0 1
row–echelon form of A.
    Hence [1, 0], [0, 1] form a basis for R(A) while [1, 3], [2, 4] form a basis
for C(A). Also N (A) = {0}.
    Here rank A = 2 and nullity A = 0.

   We conclude this introduction to vector spaces with a result of great
theoretical importance.

THEOREM 3.5.2 Every linearly independent family of vectors in a sub-
space S can be extended to a basis of S.

Proof. Suppose S has basis X1 , . . . , Xm and that Y1 , . . . , Yr is a linearly
independent family of vectors in S. Then

               S = hX1 , . . . , Xm i = hY1 , . . . , Yr , X1 , . . . , Xm i,

as each of Y1 , . . . , Yr is a linear combination of X1 , . . . , Xm .
    Then applying the left–to–right algorithm to the second spanning family
for S will yield a basis for S which includes Y1 , . . . , Yr .


3.6     PROBLEMS
   1. Which of the following subsets of R2 are subspaces?

       (a) [x, y] satisfying x = 2y;
       (b) [x, y] satisfying x = 2y and 2x = y;
       (c) [x, y] satisfying x = 2y + 1;
       (d) [x, y] satisfying xy = 0;
68                                                  CHAPTER 3. SUBSPACES

         (e) [x, y] satisfying x ≥ 0 and y ≥ 0.

        [Answer: (a) and (b).]

     2. If X, Y, Z are vectors in Rn , prove that

                        hX, Y, Zi = hX + Y, X + Z, Y + Zi.
                                                    
                             1            0              1
                            0          1            1 
     3. Determine if X1 =  1  , X2 =  1  and X3 =  1  are linearly
                                                     

                             2            2              3
                        4
        independent in R .

     4. For which real numbers λ are the following vectors linearly independent
        in R3 ?
                                                               
                           λ                 −1                 −1
                 X1 =  −1  , X2 =  λ  , X3 =  −1  .
                          −1                 −1                  λ

     5. Find bases for the row, column and null spaces of the following matrix
        over Q:                                      
                                    1 1 2 0 1
                                   2 2 5 0 3 
                             A=   0 0 0 1 3 .
                                                      

                                    8 11 19 0 11

     6. Find bases for the row, column and null spaces of the following matrix
        over Z2 :                                  
                                      1 0 1 0 1
                                     0 1 0 1 1 
                              A=    1 1 1 1 0 .
                                                    

                                      0 0 1 1 0

     7. Find bases for the row, column and null spaces of the following matrix
        over Z5 :                                    
                                    1 1 2 0 1 3
                                   2 1 4 0 3 2 
                             A=   0 0 0 1 3 0 .
                                                      

                                    3 0 2 4 3 2
3.6. PROBLEMS                                                                 69

  8. Find bases for the row, column and null spaces of the matrix A defined
     in section 1.6, Problem 17. (Note: In this question, F is a field of four
     elements.)

  9. If X1 , . . . , Xm form a basis for a subspace S, prove that

                         X1 , X1 + X 2 , . . . , X 1 + · · · + X m

     also form a basis for S.
              ·          ¸
                a b c
 10. Let A =               . Find conditions on a, b, c such that (a) rank A =
                1 1 1
     1; (b) rank A = 2.

     [Answer: (a) a = b = c; (b) at least two of a, b, c are distinct.]

 11. Let S be a subspace of F n with dim S = m. If X1 , . . . , Xm are vectors
     in S with the property that S = hX1 , . . . , Xm i, prove that X1 . . . , Xm
     form a basis for S.

 12. Find a basis for the subspace S of R3 defined by the equation

                                   x + 2y + 3z = 0.

     Verify that Y1 = [−1, −1, 1]t ∈ S and find a basis for S which includes
     Y1 .

 13. Let X1 , . . . , Xm be vectors in F n . If Xi = Xj , where i < j, prove that
     X1 , . . . Xm are linearly dependent.

 14. Let X1 , . . . , Xm+1 be vectors in F n . Prove that

                     dim hX1 , . . . , Xm+1 i = dim hX1 , . . . , Xm i

     if Xm+1 is a linear combination of X1 , . . . , Xm , but

                   dim hX1 , . . . , Xm+1 i = dim hX1 , . . . , Xm i + 1

     if Xm+1 is not a linear combination of X1 , . . . , Xm .
     Deduce that the system of linear equations AX = B is consistent, if
     and only if
                           rank [A|B] = rank A.
70                                                   CHAPTER 3. SUBSPACES

 15. Let a1 , . . . , an be elements of F , not all zero. Prove that the set of
     vectors [x1 , . . . , xn ]t where x1 , . . . , xn satisfy

                               a1 x1 + · · · + a n xn = 0

     is a subspace of F n with dimension equal to n − 1.

 16. Prove Lemma 3.2.1, Theorem 3.2.1, Corollary 3.2.1 and Theorem 3.3.2.

 17. Let R and S be subspaces of F n , with R ⊆ S. Prove that

                                   dim R ≤ dim S

     and that equality implies R = S. (This is a very useful way of proving
     equality of subspaces.)

 18. Let R and S be subspaces of F n . If R ∪ S is a subspace of F n , prove
     that R ⊆ S or S ⊆ R.

 19. Let X1 , . . . , Xr be a basis for a subspace S. Prove that all bases for S
     are given by the family Y1 , . . . , Yr , where
                                          r
                                          X
                                   Yi =         aij Xj ,
                                          j=1

     and where A = [aij ] ∈ Mr×r (F ) is a non–singular matrix.
Chapter 4

DETERMINANTS
                                     ·      ¸
                                  a11 a12
DEFINITION 4.0.1 If A =                       , we define the determinant of
                                  a21 a22
A, (also denoted by det A,) to be the scalar

                                det A = a11 a22 − a12 a21 .
              ¯                ¯
              ¯ a         a12 ¯¯
The notation ¯¯ 11               is also used for the determinant of A.
                a21       a22 ¯

If A is a real matrix, there is a geometrical interpretation of det A. If
P = (x1 , y1 ) and Q = (x2 , y2 ) are points in the plane,
                                                       ¯ forming¯ a triangle
                                                         x   y
with the origin O = (0, 0), then apart from sign, 12 ¯¯ 1 1 ¯¯ is the area
                                                       ¯        ¯
                                                         x 2 y2
of the triangle OP Q. For, using polar coordinates, let x1 = r1 cos θ1 and
                                                                            -
y1 = r1 sin θ1 , where r1 = OP and θ1 is the angle made by the ray OP with
the positive x–axis. Then triangle OP Q has area 21 OP · OQ sin α, where
α = ∠P OQ. If triangle OP Q has anti–clockwise orientation, then the ray
 -
OQ makes angle θ2 = θ1 + α with the positive x–axis. (See Figure 4.1.)
     Also x2 = r2 cos θ2 and y2 = r2 sin θ2 . Hence
                            1
       Area OP Q =            OP · OQ sin α
                            2
                            1
                      =       OP · OQ sin (θ2 − θ1 )
                            2
                            1
                      =       OP · OQ(sin θ2 cos θ1 − cos θ2 sin θ1 )
                            2
                            1
                      =       (OQ sin θ2 · OP cos θ1 − OQ cos θ2 · OP sin θ1 )
                            2

                                          71
72                                            CHAPTER 4. DETERMINANTS
                              y
                              6

                                         Q
                                         ¢@
                                        ¢  @
                                       ¢     @
                                   ¢              @
                                                  © P
                                  ¢          ©©
                                 ¢ α ©©
                                ¢©©θ
                              ¢©      1                 -x
                          O


                     Figure 4.1: Area of triangle OP Q.


                       1
                   =     (y2 x1 − x2 y1 )
                       2¯          ¯
                       1 ¯¯ x1 y1 ¯¯
                   =                 .
                       2 ¯ x 2 y2 ¯

Similarly,
      ¯      if triangle
                ¯        OP Q has clockwise orientation, then its area equals
        x 1 y 1
− 12 ¯¯
      ¯         ¯
                ¯.
        x 2 y2 ¯
   For a general triangle P1 P2 P3 , with Pi = (xi , yi ), i = 1, 2, 3, we can
take P1 as the origin. Then the above formula gives
             ¯                   ¯            ¯                    ¯
          1 ¯¯ x2 − x1 y2 − y1 ¯¯          1 ¯¯ x2 − x1 y2 − y1 ¯¯
                                    or − ¯                           ,
          2 ¯ x 3 − x 1 y3 − y 1 ¯         2 x 3 − x 1 y3 − y 1 ¯

according as vertices P1 P2 P3 are anti–clockwise or clockwise oriented.
   We now give a recursive definition of the determinant of an n × n matrix
A = [aij ], n ≥ 3.

DEFINITION 4.0.2 (Minor) Let Mij (A) (or simply Mij if there is no
ambiguity) denote the determinant of the (n − 1) × (n − 1) submatrix of A
formed by deleting the i–th row and j–th column of A. (Mij (A) is called
the (i, j) minor of A.)

    Assume that the determinant function has been defined for matrices of
size (n−1)×(n−1). Then det A is defined by the so–called first–row Laplace
                                                                                     73

expansion:

        det A = a11 M11 (A) − a12 M12 (A) + . . . + (−1)1+n M1n (A)
                Xn
              =     (−1)1+j a1j M1j (A).
                     j=1

For example, if A = [aij ] is a 3 × 3 matrix, the Laplace expansion gives

    det A = a11 M11 (A) − a12 M12 (A) + a13 M13 (A)
        ¯         ¯       ¯           ¯       ¯         ¯
        ¯ a22 a23 ¯       ¯ a21 a23 ¯         ¯ a21 a22 ¯
  = a11 ¯
        ¯         ¯ − a12 ¯
                          ¯           ¯ + a13 ¯
                                              ¯         ¯
          a32 a33 ¯         a31 a33 ¯           a31 a32 ¯
  = a11 (a22 a33 − a23 a32 ) − a12 (a21 a33 − a23 a31 ) + a13 (a21 a32 − a22 a31 )
  = a11 a22 a33 − a11 a23 a32 − a12 a21 a33 + a12 a23 a31 + a13 a21 a32 − a13 a22 a31 .

(The recursive definition also works for 2 × 2 determinants, if we define the
determinant of a 1 × 1 matrix [t] to be the scalar t:

             det A = a11 M11 (A) − a12 M12 (A) = a11 a22 − a12 a21 .)

EXAMPLE 4.0.1 If P1 P2 P3 is a triangle with Pi = (xi , yi ), i = 1, 2, 3,
then the area of triangle P1 P2 P3 is
                    ¯            ¯     ¯           ¯
                    ¯ x 1 y1 1 ¯       ¯ x 1 y1 1 ¯
                 1 ¯¯            ¯    1¯           ¯
                      x2 y2 1 ¯¯ or − ¯¯ x2 y2 1 ¯¯ ,
                 2¯ ¯                 2¯
                      x 3 y3 1 ¯         x 3 y3 1 ¯

according as the orientation of P1 P2 P3 is anti–clockwise or clockwise.

For from the definition of 3 × 3 determinants, we have
        ¯          ¯
        ¯ x 1 y1 1 ¯          µ ¯          ¯       ¯       ¯ ¯          ¯¶
     1 ¯¯          ¯       1       ¯ y2 1 ¯        ¯ x 2 1 ¯ ¯ x 2 y2 ¯
          x 2 y2 1 ¯ =          x1 ¯       ¯ − y 1 ¯ x 3 1 ¯ + ¯ x 3 y3 ¯
                   ¯               ¯       ¯       ¯       ¯   ¯        ¯
     2 ¯¯                  2         y 3 1
          x 3 y3 1 ¯
                              ¯                     ¯
                           1 ¯¯ x2 − x1 y2 − y1 ¯¯
                      =                               .
                           2 ¯ x 3 − x 1 y3 − y 1 ¯

    One property of determinants that follows immediately from the defini-
tion is the following:

THEOREM 4.0.1 If a row of a matrix is zero, then the value of the de-
terminant is zero.
74                                             CHAPTER 4. DETERMINANTS

    (The corresponding result for columns also holds, but here a simple proof
by induction is needed.)
   One of the simplest determinants to evaluate is that of a lower triangular
matrix.

THEOREM 4.0.2 Let A = [aij ], where aij = 0 if i < j. Then

                               det A = a11 a22 . . . ann .                        (4.1)

   An important special case is when A is a diagonal matrix.
   If A =diag (a1 , . . . , an ) then det A = a1 . . . an . In particular, for a scalar
matrix tIn , we have det (tIn ) = tn .

Proof. Use induction on the size n of the matrix.
    The result is true for n = 2. Now let n > 2 and assume the result true
for matrices of size n − 1. If A is n × n, then expanding det A along row 1
gives
                                   ¯                    ¯
                                   ¯ a22 0 . . . 0 ¯
                                   ¯                    ¯
                                   ¯ a32 a33 . . . 0 ¯
                    det A = a11 ¯ .
                                   ¯                    ¯
                                   ¯ ..
                                                        ¯
                                                        ¯
                                   ¯                    ¯
                                   ¯ an1 an2 . . . ann ¯
                           = a11 (a22 . . . ann )

by the induction hypothesis.
    If A is upper triangular, equation 4.1 remains true and the proof is again
an exercise in induction, with the slight difference that the column version
of theorem 4.0.1 is needed.

REMARK 4.0.1 It can be shown that the expanded form of the determi-
nant of an n × n matrix A consists of n! signed products ±a1i1 a2i2 . . . anin ,
where (i1 , i2 , . . . , in ) is a permutation of (1, 2, . . . , n), the sign being 1 or
−1, according as the number of inversions of (i1 , i2 , . . . , in ) is even or odd.
An inversion occurs when ir > is but r < s. (The proof is not easy and is
omitted.)

The definition of the determinant of an n × n matrix was given in terms
of the first–row expansion. The next theorem says that we can expand
the determinant along any row or column. (The proof is not easy and is
omitted.)
                                                                      75

THEOREM 4.0.3
                                  n
                                  X
                        det A =         (−1)i+j aij Mij (A)
                                  j=1


for i = 1, . . . , n (the so–called i–th row expansion) and
                                  n
                                  X
                        det A =         (−1)i+j aij Mij (A)
                                  i=1

for j = 1, . . . , n (the so–called j–th column expansion).

REMARK 4.0.2 The expression (−1)i+j obeys the chess–board pattern
of signs:
                                    
                      + − + ...
                     − + − ... 
                     + − + ... .
                                    
                       ..
                                    
                        .

   The following theorems can be proved by straightforward inductions on
the size of the matrix:

THEOREM 4.0.4 A matrix and its transpose have equal determinants;
that is
                      det At = det A.

THEOREM 4.0.5 If two rows of a matrix are equal, the determinant is
zero. Similarly for columns.

THEOREM 4.0.6 If two rows of a matrix are interchanged, the determi-
nant changes sign.

EXAMPLE 4.0.2 If P1 = (x1 , y1 ) and P2 = (x2 , y2 ) are distinct points,
then the line through P1 and P2 has equation
                              ¯          ¯
                              ¯ x y 1 ¯
                              ¯          ¯
                              ¯ x1 y1 1 ¯ = 0.
                              ¯          ¯
                              ¯ x 2 y2 1 ¯
76                                         CHAPTER 4. DETERMINANTS

For, expanding the determinant along row 1, the equation becomes

                               ax + by + c = 0,

where
            ¯      ¯                     ¯      ¯
            ¯ y1 1 ¯                     ¯ x1 1 ¯
          a=¯
            ¯      ¯ = y1 − y2 and b = − ¯
                                         ¯      ¯ = x2 − x1 .
              y2 1 ¯                       x2 1 ¯

This represents a line, as not both a and b can be zero. Also this line passes
through Pi , i = 1, 2. For the determinant has its first and i–th rows equal
if x = xi and y = yi and is consequently zero.
     There is a corresponding formula in three–dimensional geometry. If
P1 , P2 , P3 are non–collinear points in three–dimensional space, with Pi =
(xi , yi , zi ), i = 1, 2, 3, then the equation
                                 ¯              ¯
                                 ¯ x y z 1 ¯
                                 ¯              ¯
                                 ¯ x 1 y1 z 1 1 ¯
                                 ¯ x 2 y2 z 2 1 ¯ = 0
                                 ¯              ¯
                                 ¯              ¯
                                 ¯ x 3 y3 z 3 1 ¯

represents the plane through P1 , P2 , P3 . For, expanding the determinant
along row 1, the equation becomes ax + by + cz + d = 0, where
             ¯          ¯          ¯           ¯       ¯          ¯
             ¯ y1 z 1 1 ¯          ¯ x 1 z1 1 ¯        ¯ x 1 y1 1 ¯
             ¯          ¯          ¯           ¯       ¯          ¯
        a = ¯¯ y2 z2 1 ¯¯ , b = − ¯¯ x2 z2 1 ¯¯ , c = ¯¯ x2 y2 1 ¯¯ .
             ¯ y3 z 3 1 ¯          ¯ x 3 z3 1 ¯        ¯ x 3 y3 1 ¯

As we shall see in chapter 6, this represents a plane if at least one of a, b, c
is non–zero. However, apart from sign and a factor 12 , the determinant
expressions for a, b, c give the values of the areas of projections of triangle
P1 P2 P3 on the (y, z), (x, z) and (x, y) planes, respectively. Geometrically,
it is then clear that at least one of a, b, c is non–zero. It is also possible to
give an algebraic proof of this fact.
     Finally, the plane passes through Pi , i = 1, 2, 3 as the determinant has
its first and i–th rows equal if x = xi , y = yi , z = zi and is consequently
zero. We now work towards proving that a matrix is non–singular if its
determinant is non–zero.

DEFINITION 4.0.3 (Cofactor) The (i, j) cofactor of A, denoted by
Cij (A) (or Cij if there is no ambiguity) is defined by

                          Cij (A) = (−1)i+j Mij (A).
                                                                           77

REMARK 4.0.3 It is important to notice that Cij (A), like Mij (A), does
not depend on aij . Use will be made of this observation presently.

    In terms of the cofactor notation, Theorem 3.0.2 takes the form
THEOREM 4.0.7
                                             n
                                             X
                                 det A =           aij Cij (A)
                                             j=1

for i = 1, . . . , n and
                                             n
                                             X
                                 det A =           aij Cij (A)
                                             i=1
for j = 1, . . . , n.
    Another result involving cofactors is
THEOREM 4.0.8 Let A be an n × n matrix. Then
                                 n
                                 X
                           (a)         aij Ckj (A) = 0        if i 6= k.
                                 j=1

Also
                                 n
                                 X
                           (b)         aij Cik (A) = 0        if j 6= k.
                                 i=1

Proof.
   If A is n × n and i 6= k, let B be the matrix obtained from A by replacing
row k by row i. Then det B = 0 as B has two identical rows.
   Now expand det B along row k. We get
                                                   n
                                                   X
                             0 = det B =                 bkj Ckj (B)
                                                   j=1
                                                   Xn
                                            =            aij Ckj (A),
                                                   j=1

in view of Remark 4.0.3.
78                                       CHAPTER 4. DETERMINANTS

DEFINITION 4.0.4 (Adjoint) If A = [aij ] is an n × n matrix, the ad-
joint of A, denoted by adj A, is the transpose of the matrix of cofactors.
Hence                                             
                              C11 C21 · · · Cn1
                             C12 C22 · · · Cn2 
                    adj A =  .                 ..  .
                                                  
                             . .                . 
                              C1n C2n · · · Cnn
Theorems 4.0.7 and 4.0.8 may be combined to give

THEOREM 4.0.9 Let A be an n × n matrix. Then

                       A(adj A) = (det A)In = (adj A)A.

Proof.
                                       n
                                       X
                       (A adj A)ik =         aij (adj A)jk
                                       j=1
                                       Xn
                                   =         aij Ckj (A)
                                       j=1
                                   = δik det A
                                   = ((det A)In )ik .

Hence A(adj A) = (det A)In . The other equation is proved similarly.

COROLLARY 4.0.1 (Formula for the inverse) If det A 6= 0, then A
is non–singular and
                            1
                    A−1 =       adj A.
                          det A
EXAMPLE 4.0.3 The matrix
                                       
                                  1 2 3
                              A= 4 5 6 
                                  8 8 9

is non–singular. For
                        ¯     ¯    ¯     ¯    ¯     ¯
                        ¯ 5 6 ¯    ¯ 4 6 ¯    ¯ 4 5 ¯
               det A = ¯¯     ¯ − 2¯
                                   ¯ 8 9 ¯ + 3¯ 8 8 ¯
                                         ¯    ¯     ¯
                          8 9 ¯
                     = −3 + 24 − 24
                        = −3 6= 0.
                                                                       79

Also
                                     
                        C    C21 C31
                   1  11
          A−1   =       C12 C22 C32 
                  −3
                        C13 C23 C33
                       ¯¯      ¯   ¯           ¯      ¯     ¯
                          ¯ 5 6 ¯ −¯ 2       3 ¯¯
                                ¯   ¯                  ¯ 2 3 ¯ 
                                                       ¯     ¯
                       ¯ 8 9 ¯     ¯ 8      9 ¯       ¯ 5 6 ¯ 
                                                              
                                                              
                       ¯       ¯   ¯           ¯      ¯     ¯ 
                    1    ¯ 4 6 ¯   ¯ 1      3 ¯¯      ¯ 1 3 ¯ 
                = −  −¯
                         ¯     ¯   ¯               − ¯¯     ¯ 
                    3      8 9 ¯   ¯ 8      9 ¯         4 6 ¯ 
                                                               
                                                              
                       ¯       ¯   ¯           ¯      ¯     ¯ 
                       ¯ 4 5 ¯
                                ¯ −¯ 1       2 ¯¯
                                    ¯                  ¯ 1 2 ¯ 
                          ¯                            ¯     ¯
                          ¯ 8 8 ¯   ¯ 8      8 ¯       ¯ 4 5 ¯
                                    
                        −3     6 −3
                    1
                = −  12 −15      6 .
                    3
                        −8     8 −3

The following theorem is useful for simplifying and numerically evaluating
a determinant. Proofs are obtained by expanding along the corresponding
row or column.
THEOREM 4.0.10 The determinant is a linear function of each row and
column.
For example
     ¯ a11 + a011 a12 + a012 a13 + a013 ¯ ¯ a11 a12 a13 ¯ ¯ a011 a012 a013 ¯
     ¯                                   ¯ ¯               ¯ ¯             ¯
     ¯                                   ¯ ¯               ¯ ¯             ¯
(a) ¯¯    a21        a22        a23      ¯ = ¯ a21 a22 a23 ¯+¯ a21 a22 a23 ¯
                                         ¯ ¯               ¯ ¯             ¯
     ¯    a31        a32        a33      ¯ ¯ a31 a32 a33 ¯ ¯ a31 a32 a33 ¯
                   ¯                   ¯     ¯             ¯
                   ¯ ta11 ta12 ta13 ¯        ¯ a11 a12 a13 ¯
                   ¯                   ¯     ¯             ¯
              (b) ¯¯ a21 a22 a23 ¯¯ = t ¯¯ a21 a22 a23 ¯¯ .
                   ¯ a31 a32 a33 ¯           ¯ a31 a32 a33 ¯

COROLLARY 4.0.2 If a multiple of a row is added to another row, the
value of the determinant is unchanged. Similarly for columns.

Proof. We illustrate with a 3 × 3 example, but the proof is really quite
general.
      ¯                                  ¯ ¯               ¯ ¯               ¯
      ¯ a11 + ta21 a12 + ta22 a13 + ta23 ¯ ¯ a11 a12 a13 ¯ ¯ ta21 ta22 ta23 ¯
      ¯                                  ¯ ¯               ¯ ¯               ¯
      ¯
      ¯     a 21       a 22       a 23
                                         ¯ = ¯ a21 a22 a23 ¯ + ¯ a21 a22 a23 ¯
                                         ¯ ¯               ¯ ¯               ¯
      ¯     a31        a32        a33    ¯ ¯ a31 a32 a33 ¯ ¯ a31 a32 a33 ¯
80                                      CHAPTER 4. DETERMINANTS
     ¯                ¯      ¯              ¯
     ¯ a11   a12 a13 ¯¯      ¯ a21 a22 a23 ¯
     ¯                       ¯              ¯
  = ¯¯ a21   a22 a23 ¯¯ + t ¯¯ a21 a22 a23 ¯¯
     ¯ a31   a32 a33 ¯       ¯ a31 a32 a33 ¯
     ¯                ¯
     ¯ a11   a12 a13 ¯¯
     ¯
  = ¯¯ a21   a22 a23 ¯¯ + t × 0
     ¯ a31   a32 a33 ¯
     ¯                ¯
     ¯ a11   a12 a13 ¯¯
     ¯
  = ¯¯ a21   a22 a23 ¯¯ .
     ¯ a31   a32 a33 ¯

To evaluate a determinant numerically, it is advisable to reduce the matrix
to row–echelon form, recording any sign changes caused by row interchanges,
together with any factors taken out of a row, as in the following examples.

EXAMPLE 4.0.4 Evaluate the determinant
                        ¯         ¯
                        ¯ 1 2 3 ¯
                        ¯         ¯
                        ¯ 4 5 6 ¯.
                        ¯         ¯
                        ¯ 8 8 9 ¯

Solution. Using row operations R2 → R2 − 4R1 and R3 → R3 − 8R1 and
then expanding along the first column, gives
          ¯         ¯      ¯              ¯
          ¯ 1 2 3 ¯        ¯ 1     2    3 ¯ ¯            ¯
          ¯ 4 5 6 ¯ = ¯ 0 −3 −6 ¯ = ¯ −3 −6 ¯
          ¯         ¯      ¯              ¯ ¯            ¯
          ¯         ¯      ¯              ¯ ¯ −8 −15 ¯
          ¯ 8 8 9 ¯        ¯ 0 −8 −15 ¯
                               ¯          ¯      ¯     ¯
                               ¯ 1      2 ¯      ¯ 1 2 ¯
                       = −3 ¯¯                   ¯ 0 1 ¯ = −3.
                                          ¯ = −3 ¯     ¯
                                 −8 −15 ¯

EXAMPLE 4.0.5 Evaluate the determinant
                       ¯           ¯
                       ¯ 1 1 2 1 ¯
                       ¯           ¯
                       ¯ 3 1 4 5 ¯
                       ¯ 7 6 1 2 ¯.
                       ¯           ¯
                       ¯           ¯
                       ¯ 1 1 3 4 ¯

Solution.
               ¯                ¯    ¯              ¯
               ¯ 1   1   2   1 ¯¯    ¯ 1  1   2  1 ¯¯
               ¯                     ¯
               ¯ 3   1   4   5 ¯¯    ¯ 0 −2 −2   2 ¯¯
               ¯                  = ¯¯
                                     ¯ 0 −1 −13 −5 ¯
               ¯ 7   6   1   2 ¯¯                   ¯
               ¯
               ¯ 1   1   3   4  ¯    ¯ 0  0   1  3 ¯
                                                                       81
                                           ¯                     ¯
                                           ¯ 1   1     2      1 ¯¯
                                           ¯
                                           ¯ 0   1     1 −1 ¯¯
                                  =   −2 ¯¯
                                           ¯ 0 −1 −13 −5 ¯
                                                                 ¯
                                           ¯ 0   0     1      3 ¯
                                           ¯                  ¯
                                           ¯ 1 1     2     1 ¯¯
                                           ¯
                                           ¯ 0 1     1 −1 ¯¯
                                  =   −2 ¯¯
                                           ¯ 0 0 −12 −6 ¯
                                                              ¯
                                           ¯ 0 0     1     3 ¯
                                         ¯                  ¯
                                         ¯ 1 1     2     1  ¯
                                         ¯                  ¯
                                         ¯ 0 1     1 −1 ¯¯
                                  =   2 ¯¯
                                         ¯ 0 0     1     3 ¯¯
                                         ¯ 0 0 −12 −6 ¯
                                         ¯              ¯
                                         ¯ 1 1 2     1 ¯¯
                                         ¯
                                         ¯ 0 1 1 −1 ¯
                                  =   2 ¯¯              ¯ = 60.
                                         ¯ 0   0 1   3  ¯
                                                        ¯
                                         ¯ 0 0 0 30 ¯

EXAMPLE 4.0.6 (Vandermonde determinant) Prove that
            ¯          ¯
            ¯ 1 1 1 ¯
            ¯          ¯
            ¯ a b c ¯ = (b − a)(c − a)(c − b).
            ¯          ¯
            ¯ a2 b2 c2 ¯

Solution. Subtracting column 1 from columns 2 and 3 , then expanding
along row 1, gives
 ¯            ¯    ¯                       ¯
 ¯ 1 1 1 ¯         ¯ 1       0        0    ¯
 ¯            ¯    ¯                       ¯
 ¯ a b c ¯ = ¯ a
 ¯            ¯    ¯      b −  a    c −  a ¯
                                           ¯
 ¯ a2 b2 c2 ¯      ¯ a2 b2 − a2 c2 − a2 ¯
                   ¯                   ¯
                   ¯ b−a        c − a ¯¯
                 = ¯ 2
                   ¯
                     b − a 2 c2 − a 2 ¯
                                  ¯             ¯
                                  ¯ 1        1 ¯¯
                 = (b − a)(c − a) ¯
                                  ¯               = (b − a)(c − a)(c − b).
                                    b+a c+a ¯

REMARK 4.0.4 From theorems 4.0.6, 4.0.10 and corollary 4.0.2, we de-
duce

 (a) det (Eij A) = −det A,

 (b) det (Ei (t)A) = t det A, if t 6= 0,
82                                        CHAPTER 4. DETERMINANTS

 (c) det (Eij (t)A) =det A.

It follows that if A is row–equivalent to B, then det B = c det A, where c 6= 0.
Hence det B 6= 0 ⇔ det A 6= 0 and det B = 0 ⇔ det A = 0. Consequently
from theorem 2.5.8 and remark 2.5.7, we have the following important result:

THEOREM 4.0.11 Let A be an n × n matrix. Then

  (i) A is non–singular if and only if det A 6= 0;

 (ii) A is singular if and only if det A = 0;

(iii) the homogeneous system AX = 0 has a non–trivial solution if and
      only if det A = 0.

EXAMPLE 4.0.7 Find the rational numbers a for which the following
homogeneous system has a non–trivial solution and solve the system for
these values of a:

                              x − 2y + 3z = 0
                              ax + 3y + 2z = 0
                              6x + y + az = 0.

Solution. The coefficient determinant of the system is
               ¯         ¯    ¯                     ¯
               ¯ 1 −2 3 ¯     ¯ 1    −2          3 ¯¯
               ¯         ¯    ¯
          ∆ = ¯¯ a  3 2 ¯¯ = ¯¯ 0 3 + 2a 2 − 3a ¯¯
               ¯ 6  1 a ¯     ¯ 0     13 a − 18 ¯
                             ¯                 ¯
                             ¯ 3 + 2a 2 − 3a ¯
                           = ¯
                             ¯                 ¯
                                  13   a − 18 ¯
                           = (3 + 2a)(a − 18) − 13(2 − 3a)
                               = 2a2 + 6a − 80 = 2(a + 8)(a − 5).

So ∆ = 0 ⇔ a = −8 or a = 5 and these values of a are the only values for
which the given homogeneous system has a non–trivial solution.
   If a = −8, the coefficient matrix has reduced row–echelon form equal to
                                        
                                  1 0 −1
                                 0 1 −2 
                                  0 0  0
                                                                        83

and so the complete solution is x = z, y = 2z, with z arbitrary. If a = 5,
the coefficient matrix has reduced row–echelon form equal to
                                          
                                 1 0     1
                                0 1 −1 
                                 0 0     0
and so the complete solution is x = −z, y = z, with z arbitrary.
EXAMPLE 4.0.8 Find the values of t for which the following system is
consistent and solve the system in each case:

                                     x+y = 1
                                    tx + y = t
                            (1 + t)x + 2y = 3.

Solution. Suppose that the given system has a solution (x0 , y0 ). Then the
following homogeneous system

                                    x+y+z = 0
                                   tx + y + tz = 0
                         (1 + t)x + 2y + 3z = 0

will have a non–trivial solution

                        x = x0 ,    y = y0 ,   z = −1.

Hence the coefficient determinant ∆ is zero. However
    ¯              ¯ ¯                      ¯
    ¯ 1      1   1 ¯ ¯ 1         0      0   ¯ ¯          ¯
    ¯              ¯ ¯                      ¯ ¯ 1−t   0 ¯¯
∆=¯ t
    ¯        1 t ¯=¯ t
                   ¯   ¯       1−t      0 ¯=¯
                                            ¯  ¯           = (1−t)(2−t).
    ¯ 1+t 2 3 ¯ ¯ 1+t 1−t 2−t ¯                  1−t 2−t ¯

Hence t = 1 or t = 2. If t = 1, the given system becomes

                                   x+y = 1
                                   x+y = 1
                               2x + 2y = 3

which is clearly inconsistent. If t = 2, the given system becomes

                                   x+y = 1
                                   2x + y = 2
                               3x + 2y = 3
84                                        CHAPTER 4. DETERMINANTS

which has the unique solution x = 1, y = 0.

    To finish this section, we present an old (1750) method of solving a
system of n equations in n unknowns called Cramer’s rule . The method is
not used in practice. However it has a theoretical use as it reveals explicitly
how the solution depends on the coefficients of the augmented matrix.
THEOREM 4.0.12 (Cramer’s rule) The system of n linear equations
in n unknowns x1 , . . . , xn
                     a11 x1 + a12 x2 + · · · + a1n xn = b1
                     a21 x1 + a22 x2 + · · · + a2n xn = b2
                                                      ..
                                                       .
                    an1 x1 + an2 x2 + · · · + ann xn = bn
has a unique solution if ∆ = det [aij ] 6= 0, namely
                           ∆1        ∆2                ∆n
                     x1 =     , x2 =    , . . . , xn =    ,
                           ∆         ∆                 ∆
where ∆i is the determinant of the matrix formed by replacing the i–th
column of the coefficient matrix A by the entries b1 , b2 , . . . , bn .
Proof. Suppose the coefficient determinant ∆ 6= 0. Then by corollary 4.0.1,
                                    1
A−1 exists and is given by A−1 = ∆    adj A and the system has the unique
solution
                                                                 
        x1            b1               C11 C21 · · · Cn1             b1
                                     C12 C22 · · · Cn2   b2 
      x2          b2         1                                   
      ..  = A−1  ..  =           ..                   ..   .. 
                      
      .           .          ∆ .                       .  . 
       xn             bn               C1n C2n · · · Cnn             bn
                                                                       
                                       b1 C11 + b2 C21 + . . . + bn Cn1
                                 1  b2 C12 + b2 C22 + . . . + bn Cn2 
                                                                        
                             =                        ..                .
                                 ∆
                                    
                                                       .                
                                       bn C1n + b2 C2n + . . . + bn Cnn
However the i–th component of the last vector is the expansion of ∆i along
column i. Hence
                                                
                    x1           ∆1          ∆1 /∆
                   x2 
                               ∆2   ∆2 /∆ 
                            1                     
                   ..  =  ..  =             ..  .
                      
                   .  ∆ .                    .  
                      xn            ∆n          ∆n /∆
4.1. PROBLEMS                                                                   85

4.1      PROBLEMS
.
    1. If the points Pi = (xi , yi ), i = 1, 2, 3, 4 form a quadrilateral with ver-
       tices in anti–clockwise orientation, prove that the area of the quadri-
       lateral equals
                 µ¯         ¯ ¯              ¯ ¯           ¯ ¯          ¯¶
               1 ¯¯ x1 x2 ¯¯ ¯¯ x2 x3 ¯¯ ¯¯ x3 x4 ¯¯ ¯¯ x4 x1 ¯¯
                              +               +             +              .
               2 ¯ y1 y2 ¯ ¯ y2 y3 ¯ ¯ y3 y4 ¯ ¯ y4 y1 ¯
       (This formula generalizes to a simple polygon and is known as the
       Surveyor’s formula.)
    2. Prove that the following identity holds by expressing the left–hand
       side as the sum of 8 determinants:
                     ¯                     ¯    ¯          ¯
                     ¯ a+x b+y c+z ¯            ¯ a b c ¯
                     ¯                     ¯    ¯          ¯
                     ¯ x + u y + v z + w ¯ = 2¯ x y z ¯.
                     ¯                     ¯    ¯          ¯
                     ¯ u+a v+b w+c ¯            ¯ u v w ¯

    3. Prove that
                             n2    (n + 1)2 (n + 2)2 ¯¯
                        ¯                             ¯
                        ¯
                        ¯ (n + 1)2 (n + 2)2 (n + 3)2 ¯ = −8.
                        ¯
                        ¯                             ¯
                        ¯ (n + 2)2 (n + 3)2 (n + 4)2 ¯

    4. Evaluate the following determinants:
                                       ¯             ¯
           ¯                  ¯        ¯ 1  2  3  4  ¯
           ¯ 246 427 327 ¯             ¯             ¯
           ¯                  ¯        ¯ −2 1 −4  3 ¯¯
       (a) ¯ 1014 543 443 ¯
           ¯                  ¯    (b) ¯
                                       ¯               .
           ¯ −342 721 621 ¯            ¯ 3 −4 −1  2 ¯¯
                                       ¯ 4  3 −2 −1 ¯

       [Answers: (a) −29400000; (b) 900.]
    5. Compute the inverse of the matrix
                                            
                                      1 0 −2
                               A= 3 1     4 
                                      5 2 −3
       by first computing the adjoint matrix.
                                             
                             −11 −4        2
       [Answer: A−1 = −113
                            29      7 −10 .]
                                1 −2       1
86                                             CHAPTER 4. DETERMINANTS

     6. Prove that the following identities hold:
                     ¯                       ¯
                     ¯ 2a       2b    b −  c ¯
                                2a a + c ¯¯ = −2(a − b)2 (a + b),
                     ¯                       ¯
                (i) ¯ 2b
                     ¯
                     ¯ a+b a+b           b ¯
                      ¯                      ¯
                      ¯ b+c      b       c ¯¯
                                        a ¯¯ = 2a(b2 + c2 ).
                      ¯
                (ii) ¯¯ c      c+a
                      ¯ b        a    a+b ¯

     7. Let Pi = (xi , yi ), i = 1, 2, 3. If x1 , x2 , x3 are distinct, prove that there
        is precisely one curve of the form y = ax2 + bx + c passing through
        P1 , P2 and P3 .
     8. Let                                   
                                        1 1 −1
                                    A= 2 3  k .
                                        1 k  3
        Find the values of k for which det A = 0 and hence, or otherwise,
        determine the value of k for which the following system has more than
        one solution:
                                        x+y−z = 1
                                    2x + 3y + kz = 3
                                     x + ky + 3z = 2.
        Solve the system for this value of k and determine the solution for
        which x2 + y 2 + z 2 has least value.

        [Answer: k = 2; x = 10/21, y = 13/21, z = 2/21.]
     9. By considering the coefficient determinant, find all rational numbers a
        and b for which the following system has (i) no solutions, (ii) exactly
        one solution, (iii) infinitely many solutions:
                                     x − 2y + bz = 3
                                    ax +        2z = 2
                                    5x + 2y          = 1.
        Solve the system in case (iii).

        [Answer: (i) ab = 12 and a 6= 3, no solution; ab 6= 12, unique solution;
        a = 3, b = 4, infinitely many solutions; x = − 23 z + 23 , y = 35 z − 67 , with
        z arbitrary.]
4.1. PROBLEMS                                                            87

 10. Express the determinant of the matrix
                                                 
                                1 1    2      1
                              1 2     3      4   
                        B=   2 4
                                                  
                                       7   2t + 6 
                                2 2 6−t       t
     as as polynomial in t and hence determine the rational values of t for
     which B −1 exists.

     [Answer: det B = (t − 2)(2t − 1); t 6= 2 and t 6= 12 .]
 11. If A is a 3 × 3 matrix over a field and det A 6= 0, prove that
                    (i) det (adj A) = (det A)2 ,
                                        1
                    (ii) (adj A)−1 =        A = adj (A−1 ).
                                      det A
 12. Suppose that A is a real 3 × 3 matrix such that At A = I3 .
      (i) Prove that At (A − I3 ) = −(A − I3 )t .
      (ii) Prove that det A = ±1.
     (iii) Use (i) to prove that if det A = 1, then det (A − I3 ) = 0.
 13. If A is a square matrix such that one column is a linear combination of
     the remaining columns, prove that det A = 0. Prove that the converse
     also holds.
 14. Use Cramer’s rule to solve the system
                              −2x + 3y − z =  1
                                x + 2y − z =  4
                               −2x − y + z = −3.

     [Answer: x = 2, y = 3, z = 4.]
 15. Use remark 4.0.4 to deduce that
                  det Eij = −1,    det Ei (t) = t,   det Eij (t) = 1
     and use theorem 2.5.8 and induction, to prove that
                             det (BA) = det B det A,
     if B is non–singular. Also prove that the formula holds when B is
     singular.
88                                        CHAPTER 4. DETERMINANTS

 16. Prove that
     ¯                                     ¯
     ¯ a+b+c      a+b         a        a   ¯
     ¯                                     ¯
     ¯ a+b      a + b + c     a        a   ¯ = c2 (2b+c)(4a+2b+c).
                                           ¯
     ¯
     ¯
     ¯    a         a     a + b + c  a + b ¯
                                           ¯
     ¯    a         a       a+b     a+b+c ¯

 17. Prove that
         ¯                             ¯
         ¯ 1 + u1   u 1    u 1    u 1  ¯
         ¯                             ¯
         ¯ u2     1 + u2   u2     u2 ¯¯
         ¯
         ¯ u3                            = 1 + u 1 + u2 + u3 + u4 .
         ¯          u3   1 + u3   u3 ¯¯
         ¯ u4       u4     u4   1 + u4 ¯

 18. Let A ∈ Mn×n (F ). If At = −A, prove that det A = 0 if n is odd and
     1 + 1 6= 0 in F .

 19. Prove that            ¯                ¯
                           ¯ 1   1   1   1 ¯¯
                           ¯
                           ¯ r   1   1   1 ¯¯
                           ¯
                           ¯ r                = (1 − r)3 .
                           ¯     r   1   1 ¯¯
                           ¯ r   r   r   1 ¯

 20. Express the determinant
                                 ¯ 1 a2 − bc a4 ¯
                                 ¯              ¯
                                 ¯ 1 b2 − ca b4 ¯
                                 ¯              ¯
                                 ¯              ¯
                                 ¯ 1 c2 − ab c4 ¯

     as the product of one quadratic and four linear factors.

     [Answer: (b − a)(c − a)(c − b)(a + b + c)(b2 + bc + c2 + ac + ab + a2 ).]
Chapter 5

COMPLEX NUMBERS

5.1     Constructing the complex numbers
One way of introducing the field C of complex numbers is via the arithmetic
of 2 × 2 matrices.
DEFINITION 5.1.1 A complex number is a matrix of the form
                       ·        ¸
                          x −y
                                  ,
                          y   x

where x and y are real numbers.
                                  ·      ¸
                                  x 0
    Complex numbers of the form            are scalar matrices and are called
                                  0 x
real complex numbers and are denoted by the symbol {x}.
    The real complex numbers {x} and {y} are respectively
                                                 ·         ¸ called the real
                                                    x −y
part and imaginary part of the complex number               .
                                                    y   x
                         ·        ¸
                            0 −1
    The complex number              is denoted by the symbol i.
                            1   0
      We have the identities
·          ¸      ·        ¸ ·      ¸ ·     ¸ ·      ¸·     ¸
    x −y             x 0       0 −y     x 0     0 −1    y 0
              =              +       =       +
    y    x           0 x       y  0     0 x     1  0    0 y

             = {x} + i{y},
                 ·      ¸·      ¸ ·       ¸
                   0 −1    0 −1     −1  0
            i2 =                 =          = {−1}.
                   1  0    1  0      0 −1

                                      89
90                                    CHAPTER 5. COMPLEX NUMBERS

Complex numbers of the form i{y}, where y is a non–zero real number, are
called imaginary numbers.
    If two complex numbers are equal, we can equate their real and imaginary
parts:
             {x1 } + i{y1 } = {x2 } + i{y2 } ⇒ x1 = x2 and y1 = y2 ,
if x1 , x2 , y1 , y2 are real numbers. Noting that {0} + i{0} = {0}, gives the
useful special case is

                    {x} + i{y} = {0} ⇒ x = 0 and y = 0,

if x and y are real numbers.
    The sum and product of two real complex numbers are also real complex
numbers:
                   {x} + {y} = {x + y}, {x}{y} = {xy}.
Also, as real complex numbers are scalar matrices, their arithmetic is very
simple. They form a field under the operations of matrix addition and
multiplication. The additive identity is {0}, the additive inverse of {x} is
{−x}, the multiplicative identity is {1} and the multiplicative inverse of {x}
is {x−1 }. Consequently

           {x} − {y} = {x} + (−{y}) = {x} + {−y} = {x − y},
                                                   ½ ¾
             {x}          −1        −1       −1      x
                 = {x}{y} = {x}{y } = {xy } =           .
             {y}                                     y
It is customary to blur the distinction between the real complex number
{x} and the real number x and write {x} as x. Thus we write the complex
number {x} + i{y} simply as x + iy.
    More generally, the sum of two complex numbers is a complex number:

              (x1 + iy1 ) + (x2 + iy2 ) = (x1 + x2 ) + i(y1 + y2 );         (5.1)

and (using the fact that scalar matrices commute with all matrices under
matrix multiplication and {−1}A = −A if A is a matrix), the product of
two complex numbers is a complex number:

              (x1 + iy1 )(x2 + iy2 ) = x1 (x2 + iy2 ) + (iy1 )(x2 + iy2 )
              = x1 x2 + x1 (iy2 ) + (iy1 )x2 + (iy1 )(iy2 )
              = x1 x2 + ix1 y2 + iy1 x2 + i2 y1 y2
              = (x1 x2 + {−1}y1 y2 ) + i(x1 y2 + y1 x2 )
              = (x1 x2 − y1 y2 ) + i(x1 y2 + y1 x2 ),                       (5.2)
5.2. CALCULATING WITH COMPLEX NUMBERS                                     91

    The set C of complex numbers forms a field under the operations of
matrix addition and multiplication. The additive identity is 0, the additive
inverse of x + iy is the complex number (−x) + i(−y), the multiplicative
identity is 1 and the multiplicative inverse of the non–zero complex number
x + iy is the complex number u + iv, where
                                  x              −y
                          u=            and v = 2     .
                               x2 + y 2        x + y2

(If x + iy 6= 0, then x 6= 0 or y 6= 0, so x2 + y 2 6= 0.)
    From equations 5.1 and 5.2, we observe that addition and multiplication
of complex numbers is performed just as for real numbers, replacing i2 by
−1, whenever it occurs.
   A useful identity satisfied by complex numbers is

                           r2 + s2 = (r + is)(r − is).

This leads to a method of expressing the ratio of two complex numbers in
the form x + iy, where x and y are real complex numbers.

               x1 + iy1         (x1 + iy1 )(x2 − iy2 )
                           =
               x2 + iy2         (x2 + iy2 )(x2 − iy2 )
                                (x1 x2 + y1 y2 ) + i(−x1 y2 + y1 x2 )
                           =                                          .
                                              x22 + y22

The process is known as rationalization of the denominator.


5.2     Calculating with complex numbers
We can now do all the standard linear algebra calculations over the field of
complex numbers – find the reduced row–echelon form of an matrix whose el-
ements are complex numbers, solve systems of linear equations, find inverses
and calculate determinants.
   For example,
            ¯               ¯
            ¯ 1+i 2−i ¯
            ¯               ¯ = (1 + i)(8 − 2i) − 7(2 − i)
            ¯ 7     8 − 2i ¯
                              = (8 − 2i) + i(8 − 2i) − 14 + 7i
                                  = −4 + 13i 6= 0.
92                                  CHAPTER 5. COMPLEX NUMBERS

Then by Cramer’s rule, the linear system

                       (1 + i)z + (2 − i)w = 2 + 7i
                           7z + (8 − 2i)w = 4 − 9i

has the unique solution
                 ¯                 ¯
                 ¯ 2 + 7i 2 − i ¯
                 ¯                 ¯
                 ¯ 4 − 9i 8 − 2i ¯
         z =
                      −4 + 13i
                 (2 + 7i)(8 − 2i) − (4 − 9i)(2 − i)
             =
                              −4 + 13i
                 2(8 − 2i) + (7i)(8 − 2i) − {(4(2 − i) − 9i(2 − i)}
             =
                                     −4 + 13i
                 16 − 4i + 56i − 14i2 − {8 − 4i − 18i + 9i2 }
             =
                                   −4 + 13i
                 31 + 74i
             =
                 −4 + 13i
                 (31 + 74i)(−4 − 13i)
             =
                      (−4)2 + 132
                  838 − 699i
             =
                 (−4)2 + 132
                 838 699
             =       −      i
                 185 185
                    −698 229
and similarly w =        +     i.
                     185   185

    An important property enjoyed by complex numbers is that every com-
plex number has a square root:

THEOREM 5.2.1
If w is a non–zero complex number, then the equation z 2 = w has precisely
two solutions z ∈ C.
                                                     √
Proof. Case√  1. Suppose   b = 0. Then if a > 0, z =   a is a solution, while
if a < 0, i −a is a solution.
    Case 2. Suppose b 6= 0. Let z = x + iy, w = a + ib, x, y, a, b ∈ R. Then
the equation z 2 = w becomes

                    (x + iy)2 = x2 − y 2 + 2xyi = a + ib,
5.2. CALCULATING WITH COMPLEX NUMBERS                               93

so equating real and imaginary parts gives

                       x2 − y 2 = a     and   2xy = b.

Hence x 6= 0 and y = b/(2x). Consequently
                                 µ ¶
                                   b 2
                            x2 −        = a,
                                  2x

so 4x4 − 4ax2 − b2 = 0 and 4(x2 )2 − 4a(x2 ) − b2 = 0. Hence
                           √                      √
                  2   4a ± 16a2 + 16b2       a ± a2 + b2
                x =                       =               .
                              8                    2
                                                      √
However x2 > 0, so we must take the + sign, as a − a2 + b2 < 0. Hence
                        √                   s      √
                    a+ a +b 2    2             a + a2 + b2
                2
               x =                 , x=±                    .
                          2                          2

Then y is determined by y = b/(2x).

EXAMPLE 5.2.1 Solve the equation z 2 = 1 + i.

Solution. Put z = x + iy. Then the equation becomes

                   (x + iy)2 = x2 − y 2 + 2xyi = 1 + i,

so equating real and imaginary parts gives

                            x2 − y 2 = 1 and 2xy = 1.

Hence x 6= 0 and y = b/(2x). Consequently
                                µ ¶
                             2     1 2
                            x −         = 1,
                                  2x

so 4x4 − 4x2 − 1 = 0. Hence
                                    √             √
                        2      4±    16 + 16   1± 2
                       x =                   =      .
                                      8          2
Hence
                              √                  s      √
                   2 1+ 2                            1+ 2
                 x =                 and   x=±            .
                       2                               2
94                                 CHAPTER 5. COMPLEX NUMBERS

Then
                                1        1
                          y=      = ±√ p   √ .
                               2x     2 1+ 2
Hence the solutions are
                                   √
                           s                 
                                1+ 2      i
                   z = ±            +√ p   √ .
                                  2    2 1+ 2

                                        √
EXAMPLE 5.2.2 Solve the equation z 2 + ( 3 + i)z + 1 = 0.

Solution. Because every complex number has a square root, the familiar
formula                          √
                            −b ± b2 − 4ac
                         z=
                                  2a
for the solution of the general quadratic equation az 2 + bz + c = 0 can be
used, where now a(6= 0), b, c ∈ C. Hence

                            √        q√
                          −( 3 + i) ± ( 3 + i)2 − 4
                z =
                                     2
                            √        q      √
                          −( 3 + i) ± (3 + 2 3i − 1) − 4
                    =
                          √         p 2     √
                       −( 3 + i) ± −2 + 2 3i
                    =                           .
                                   2
                                    √
Now we have to solve w 2√ = −2 + 2 3i. Put w = x + iy. Then w 2 =
x2 − y 2 + 2xyi = −2 + 2 √3i and equating
                                        √ real and imaginary parts gives
 2    2                                               2      2
x − y = −2 and 2xy = 2 3. Hence y = 3/x and so x − 3/x = −2. So
x4 + 2x2 − 3√= 0 and (x2 + 3)(x 2
                           √ 2− 1) = 0. √ Hence x2 − 1 = 0 and x = ±1.
Then y = ± 3. Hence (1 + 3i) = −2 + 2 3i and the formula for z now
becomes
                  √            √
                − 3 − i ± (1 + 3i)
         z =
                    √    2    √                 √        √
                1 − 3 + (1 + 3)i          −1 − 3 − (1 + 3)i
            =                        or                        .
                        2                           2

EXAMPLE 5.2.3 Find the cube roots of 1.
5.3. GEOMETRIC REPRESENTATION OF C                                            95

Solution. We have to solve the equation z 3 = 1, or z 3 − 1 = 0. Now
z 3 − 1 = (z − 1)(z 2 + z + 1). So z 3 − 1 = 0 ⇒ z − 1 = 0 or z 2 + z + 1 = 0.
But                                        √                √
              2                       −1 ± 12 − 4     −1 ± 3i
             z +z+1=0⇒z =                          =             .
                                            2             2
                                                      √
So there are 3 cube roots of 1, namely 1 and (−1 ± 3i)/2.
    We state the next theorem without proof. It states that every non–
constant polynomial with complex number coefficients has a root in the
field of complex numbers.

THEOREM 5.2.2 (Gauss) If f (z) = an z n + an−1 z n−1 + · · · + a1 z + a0 ,
where an 6= 0 and n ≥ 1, then f (z) = 0 for some z ∈ C.

It follows that in view of the factor theorem, which states that if a ∈ F is
a root of a polynomial f (z) with coefficients from a field F , then z − a is a
factor of f (z), that is f (z) = (z − a)g(z), where the coefficients of g(z) also
belong to F . By repeated application of this result, we can factorize any
polynomial with complex coefficients into a product of linear factors with
complex coefficients:

                    f (z) = an (z − z1 )(z − z2 ) · · · (z − zn ).

There are available a number of computational algorithms for finding good
approximations to the roots of a polynomial with complex coefficients.


5.3     Geometric representation of C
Complex numbers can be represented as points in the plane, using the cor-
respondence x + iy ↔ (x, y). The representation is known as the Argand
diagram or complex plane. The real complex numbers lie on the x–axis,
which is then called the real axis, while the imaginary numbers lie on the
y–axis, which is known as the imaginary axis. The complex numbers with
positive imaginary part lie in the upper half plane, while those with negative
imaginary part lie in the lower half plane.
    Because of the equation

              (x1 + iy1 ) + (x2 + iy2 ) = (x1 + x2 ) + i(y1 + y2 ),

complex numbers add vectorially, using the parallellogram law. Similarly,
the complex number z1 − z2 can be represented by the vector from (x2 , y2 )
to (x1 , y1 ), where z1 = x1 + iy1 and z2 = x2 + iy2 . (See Figure 5.1.)
96                                  CHAPTER 5. COMPLEX NUMBERS



                            6                       © z1 + z 2
                                                ©©¡ µ¢
                                            © ©   ¡ ¢
                                          ©    ¡ ¢
                                   z 2 ©©     ¡ ¢
                                    ¢̧@     ¡ ¢
                                   ¢     @¡     ¢
                                  ¢      ¡@ ¢
                                ¢      ¡    R¢z
                                            @
                                            *
                                            ©
                               ¢ ¡ ©©           1
                              ¢ ¡ ©
                             ¢¡©©
                  ¾         ¢ ©
                            ©
                            ¡                            -
                            @
                              @
                                @
                                   R z1 − z 2
                                   @
                            ?

                Figure 5.1: Complex addition and subraction.


   The geometrical representation of complex numbers can be very useful
when complex number methods are used to investigate properties of triangles
and circles. It is very important in the branch of calculus known as Complex
Function theory, where geometric methods play an important role.
   We mention that the line through two distinct points P1 = (x1 , y1 ) and
P2 = (x2 , y2 ) has the form z = (1 − t)z1 + tz2 , t ∈ R, where z = x + iy is
any point on the line and zi = xi + iyi , i = 1, 2. For the line has parametric
equations
                    x = (1 − t)x1 + tx2 , y = (1 − t)y1 + ty2
and these can be combined into a single equation z = (1 − t)z1 + tz2 .
   Circles have various equation representations in terms of complex num-
bers, as will be seen later.


5.4      Complex conjugate
DEFINITION 5.4.1 (Complex conjugate) If z = x + iy, the complex
conjugate of z is the complex number defined by z = x − iy. Geometrically,
the complex conjugate of z is obtained by reflecting z in the real axis (see
Figure 5.2).
     The following properties of the complex conjugate are easy to verify:
5.4. COMPLEX CONJUGATE                                                  97

                                         6
                                                   z
                                               >
                                               ½
                                            ½      y
                                          ½
                             ¾           ½ x       -
                                         Z
                                           Z
                                             Z
                                                 ~z
                                                 Z

                                         ?

                  Figure 5.2: The complex conjugate of z: z.


  1. z1 + z2 = z1 + z2 ;
  2. −z = − z.
  3. z1 − z2 = z1 − z2 ;
  4. z1 z2 = z1 z2 ;
  5. (1/z) = 1/z;
  6. (z1 /z2 ) = z1 /z2 ;
  7. z is real if and only if z = z;
  8. With the standard convention that the real and imaginary parts are
     denoted by Re z and Im z, we have
                                     z+z               z−z
                            Re z =       ,   Im z =        ;
                                      2                 2i
  9. If z = x + iy, then zz = x2 + y 2 .

THEOREM 5.4.1 If f (z) is a polynomial with real coefficients, then its
non–real roots occur in complex–conjugate pairs, i.e. if f (z) = 0, then
f (z) = 0.

Proof. Suppose f (z) = an z n + an−1 z n−1 + · · · + a1 z + a0 = 0, where
an , . . . , a0 are real. Then
           0 = 0 = f (z) = an z n + an−1 z n−1 + · · · + a1 z + a0
                            = an z n + an−1 z n−1 + · · · + a1 z + a0
                            = an z n + an−1 z n−1 + · · · + a1 z + a0
                            = f (z).
98                                     CHAPTER 5. COMPLEX NUMBERS

EXAMPLE 5.4.1 Discuss the position of the roots of the equation
                                     z 4 = −1
in the complex plane.
Solution. The equation z 4 = −1 has real coefficients and so its roots come
in complex conjugate pairs. Also if z is a root, so is −z. Also there are
clearly no real roots and no imaginary roots. So there must be one root w
in the first quadrant, with all remaining roots being given by w, −w and
−w. In fact, as we shall soon see, the roots lie evenly spaced on the unit
circle.
     The following theorem is useful in deciding if a polynomial f (z) has a
multiple root a; that is if (z − a)m divides f (z) for some m ≥ 2. (The proof
is left as an exercise.)
THEOREM 5.4.2 If f (z) = (z − a)m g(z), where m ≥ 2 and g(z) is a
polynomial, then f 0 (a) = 0 and the polynomial and its derivative have a
common root.
From theorem 5.4.1 we obtain a result which is very useful in the explicit
integration of rational functions (i.e. ratios of polynomials) with real coeffi-
cients.
THEOREM 5.4.3 If f (z) is a non–constant polynomial with real coeffi-
cients, then f (z) can be factorized as a product of real linear factors and
real quadratic factors.
Proof. In general f (z) will have r real roots z1 , . . . , zr and 2s non–real
roots zr+1 , z r+1 , . . . , zr+s , z r+s , occurring in complex–conjugate pairs by
theorem 5.4.1. Then if an is the coefficient of highest degree in f (z), we
have the factorization
          f (z) = an (z − z1 ) · · · (z − zr ) ×
                     ×(z − zr+1 )(z − z r+1 ) · · · (z − zr+s )(z − z r+s ).
We then use the following identity for j = r + 1, . . . , r + s which in turn
shows that paired terms give rise to real quadratic factors:
                (z − zj )(z − z j ) = z 2 − (zj + z j )z + zj z j
                                    = z 2 − 2Re zj + (x2j + yj2 ),
where zj = xj + iyj .
     A well–known example of such a factorization is the following:
5.5. MODULUS OF A COMPLEX NUMBER                                                  99

                                            6
                                                      z
                                                |z|½½
                                                    >
                                                      y
                                                ½x
                                   ¾        ½        -




                                            ?

                           Figure 5.3: The modulus of z: |z|.



EXAMPLE 5.4.2 Find a factorization of z 4 +1 into real linear and quadratic
factors.

Solution. Clearly there are no real roots. Also we have the preliminary
factorization z 4 + 1 = (z√2 − i)(z 2 + i). Now the roots of z 2 − i are easily
                                                                           √
verified to be ±(1 + i)/ 2, so the roots of√z 2 + i must be ±(1 − i)/ 2.
In other words the roots are w = (1 + i)/ 2 and w, −w, −w. Grouping
conjugate–complex terms gives the factorization

              z 4 + 1 = (z − w)(z − w)(z + w)(z + w)
                          = (z 2 − 2zRe w + ww)(z 2 + 2zRe w + ww)
                                   √            √
                          = (z 2 − 2z + 1)(z 2 + 2z + 1).


5.5      Modulus of a complex number
DEFINITION 5.5.1 (Modulus) If z = x +           piy, the modulus of z is the
non–negative real number |z| defined by |z| = x2 + y 2 . Geometrically, the
modulus of z is the distance from z to 0 (see Figure 5.3).
   More generally, |z1 −z2 | is the distance between z1 and z2 in the complex
plane. For

      |z1 − z2 | = |(x1 + iy1 ) − (x2 + iy2 )| = |(x1 − x2 ) + i(y1 − y2 )|
                                                 p
                                               =    (x1 − x2 )2 + (y1 − y2 )2 .

The following properties of the modulus are easy to verify, using the identity
|z|2 = zz:

  (i)     |z1 z2 | = |z1 ||z2 |;
100                                                  CHAPTER 5. COMPLEX NUMBERS

 (ii)           |z −1 | = |z|−1 ;
                ¯ ¯
                ¯ z1 ¯ |z1 |
 (iii)          ¯ z2 ¯ |z2 | .
                ¯ ¯=

For example, to prove (i):

                      |z1 z2 |2 = (z1 z2 )z1 z2 = (z1 z2 )z1 z2
                                    = (z1 z1 )(z2 z2 ) = |z1 |2 |z2 |2 = (|z1 ||z2 |)2 .

Hence |z1 z2 | = |z1 ||z2 |.
                                                               (1 + i)4
EXAMPLE 5.5.1 Find |z| when z =                                             .
                                                           (1 + 6i)(2 − 7i)
Solution.
                                                    |1 + i|4
                                    |z| =
                                                |1 + 6i||2 − 7i|
                                                       √
                                                      ( 1 2 + 1 2 )4
                                          =     √         p
                                                  12 + 62 22 + (−7)2
                                                    4
                                          =     √ √ .
                                                  37 53
THEOREM 5.5.1 (Ratio formulae) If z lies on the line through z1 and
z2 :
                z = (1 − t)z1 + tz2 , t ∈ R,
we have the useful ratio formulae:
          ¯        ¯       ¯    ¯
          ¯ z − z1 ¯       ¯ t ¯
    (i)   ¯ z − z2 ¯ = ¯ 1 − t ¯
          ¯        ¯       ¯    ¯                     if z 6= z2 ,

                   ¯          ¯
                   ¯ z − z1 ¯
         (ii)      ¯          ¯
                   ¯ z1 − z 2 ¯     =    |t|.


    Circle equations. The equation |z − z0 | = r, where z0 ∈ C and r >
0, represents the circle centre z0 and radius r. For example the equation
|z − (1 + 2i)| = 3 represents the circle (x − 1)2 + (y − 2)2 = 9.
    Another useful circle equation is the circle of Apollonius :
                                 ¯       ¯
                                 ¯z − a¯
                                 ¯ z − b ¯ = λ,
                                 ¯       ¯
5.5. MODULUS OF A COMPLEX NUMBER                                                   101
                          y
                                            6




                  ¾                                                -x




                                            ?

        Figure 5.4: Apollonius circles: |z+2i|   1 3 1 5 4 8 2 8
                                        |z−2i| = 4 , 8 , 2 , 8 ; 1 , 3 , 1 , 5 .




where a and b are distinct complex numbers and λ is a positive real number,
λ 6= 1. (If λ = 1, the above equation represents the perpendicular bisector
of the segment joining a and b.)
    An algebraic proof that the above equation represents a circle, runs as
follows. We use the following identities:
     (i)        |z − a|2    =     |z|2 − 2Re (za) + |a|2
    (ii)    Re (z1 ± z2 )   =     Re z1 ± Re z2
    (iii)        Re (tz)    =     tRe z if t ∈ R.
   We have
     ¯       ¯
     ¯z − a¯                2   2        2
     ¯ z − b ¯ = λ ⇔ |z − a| = λ |z − b|
     ¯       ¯

  ⇔ |z|2 − 2Re {za} + |a|2 = λ2 (|z|2 − 2Re {zb} + |b|2 )
  ⇔ (1 − λ2 )|z|2 − 2Re {z(a − λ2 b)} = λ2 |b|2 − |a|2
                     a − λ2 b        λ2 |b|2 − |a|2
                ½ µ           ¶¾
  ⇔ |z|2 − 2Re z                 =
                      1 − λ2             1 − λ2
                     a − λ2 b       ¯ a − λ2 b ¯2 λ2 |b|2 − |a|2 ¯ a − λ2 b ¯2
                ½ µ           ¶¾    ¯          ¯                 ¯          ¯
       2
  ⇔ |z| − 2Re z                  +¯ ¯          ¯ =              +¯
                                                                 ¯          ¯ .
                      1 − λ2          1 − λ2 ¯         1 − λ2      1 − λ2 ¯
102                                      CHAPTER 5. COMPLEX NUMBERS

Now it is easily verified that

               |a − λ2 b|2 + (1 − λ2 )(λ2 |b|2 − |a|2 ) = λ2 |a − b|2 .

So we obtain
               ¯     ¯        ¯    µ      2
                                             ¶¯2    2        2
               ¯z − a¯
                     ¯ = λ ⇔ ¯z − a − λ b ¯ = λ |a − b|
                              ¯                ¯
               ¯
               ¯z − b¯        ¯      1 − λ2 ¯      |1 − λ2 |2
                                     a − λ2 b ¯¯ λ|a − b|
                              ¯    µ         ¶¯
                              ¯
                           ⇔ ¯¯z −               =        .
                                     1 − λ2 ¯ |1 − λ2 |
The last equation represents a circle centre z0 , radius r, where

                            a − λ2 b                  λ|a − b|
                     z0 =                and    r=              .
                            1 − λ2                    |1 − λ2 |
There are two special points on the circle of Apollonius, the points z1 and
z2 defined by
                       z1 − a              z2 − a
                               = λ and             = −λ,
                       z1 − b              z2 − b
or
                             a − λb               a + λb
                      z1 =           and z2 =            .                 (5.3)
                             1−λ                  1+λ
It is easy to verify that z1 and z2 are distinct points on the line through a
and b and that z0 = z1 +z2 . Hence the circle of Apollonius is the circle based
                           2

on the segment z1 , z2 as diameter.
EXAMPLE 5.5.2 Find the centre and radius of the circle
                |z − 1 − i| = 2|z − 5 − 2i|.
Solution. Method 1. Proceed algebraically and simplify the equation

                      |x + iy − 1 − i| = 2|x + iy − 5 − 2i|

or
                   |x − 1 + i(y − 1)| = 2|x − 5 + i(y − 2)|.
Squaring both sides gives

                 (x − 1)2 + (y − 1)2 = 4((x − 5)2 + (y − 2)2 ),

which reduces to the circle equation
                                       38    14
                        x2 + y 2 −        x − y + 38 = 0.
                                        3     3
5.6. ARGUMENT OF A COMPLEX NUMBER                                          103

Completing the square gives
                                      µ        ¶2     µ ¶2
                19        7               19           7          68
            (x − )2 + (y − )2 =                     +      − 38 =    ,
                 3        3                3           3           9
                                              q
so the centre is ( 19 ,
                    3 3
                        7
                          ) and the radius is   68
                                                 9 .
Method 2. Calculate the diametrical points z1 and z2 defined above by
equations 5.3:

                      z1 − 1 − i = 2(z1 − 5 − 2i)
                      z2 − 1 − i = −2(z2 − 5 − 2i).

We find z1 = 9 + 3i and z2 = (11 + 5i)/3. Hence the centre z0 is given by

                                  z1 + z 2   19 7
                           z0 =            =    + i
                                     2        3  3
and the radius r is given by
                         ¯µ      ¶           ¯ ¯         ¯ √
                         ¯ 19 7              ¯ ¯ 8 2 ¯       68
       r = |z1 − z0 | = ¯¯    + i − (9 + 3i)¯¯ = ¯¯− − i¯¯ =    .
                            3  3                    3 3      3

5.6     Argument of a complex number
                                                            p
Let z = x + iy be a non–zero complex number, r = |z| = x2 + y 2 . Then
we have x = r cos θ, y = r sin θ, where θ is the angle made by z with the
positive x–axis. So θ is unique up to addition of a multiple of 2π radians.

DEFINITION 5.6.1 (Argument) Any number θ satisfying the above
pair of equations is called an argument of z and is denoted by arg z. The
particular argument of z lying in the range −π < θ ≤ π is called the principal
argument of z and is denoted by Arg z (see Figure 5.5).

    We have z = r cos θ + ir sin θ = r(cos θ + i sin θ) and this representation
of z is called the polar representation or modulus–argument form of z.

EXAMPLE 5.6.1 Arg 1 = 0, Arg (−1) = π, Arg i = π2 , Arg (−i) = − π2 .

We note that y/x = tan θ if x 6= 0, so θ is determined by this equation up
to a multiple of π. In fact
                                               y
                           Arg z = tan−1         + kπ,
                                               x
104                                    CHAPTER 5. COMPLEX NUMBERS

                                         6
                                                       z
                                                  >
                                                  ½
                                             r½       y
                                          ½
                             ¾           ½θ           -
                                              x


                                         ?

                  Figure 5.5: The argument of z: arg z = θ.



where k = 0 if x > 0; k = 1 if x < 0, y > 0; k = −1 if x < 0, y < 0.
    To determine Arg z graphically, it is simplest to draw the triangle formed
by the points 0, x, z on the complex plane, mark in the positive acute angle
α between the rays 0, x and 0, z and determine Arg z geometrically, using
the fact that α = tan−1 (|y|/|x|), as in the following examples:

EXAMPLE 5.6.2 Determine the principal argument of z for the followig
complex numbers:

                    z = 4 + 3i, −4 + 3i, −4 − 3i, 4 − 3i.

Solution. Referring to Figure 5.6, we see that Arg z has the values

                            α, π − α, −π + α, −α,

where α = tan−1 43 .
    An important property of the argument of a complex number states that
the sum of the arguments of two non–zero complex numbers is an argument
of their product:

THEOREM 5.6.1 If θ1 and θ2 are arguments of z1 and z2 , then θ1 + θ2
is an argument of z1 z2 .

Proof. Let z1 and z2 have polar representations z1 = r1 (cos θ1 + i sin θ1 )
and z2 = r2 (cos θ2 + i sin θ2 ). Then

 z1 z2 = r1 (cos θ1 + i sin θ1 )r2 (cos θ2 + i sin θ2 )
        = r1 r2 (cos θ1 cos θ2 − sin θ1 sin θ2 + i(cos θ1 sin θ2 + sin θ1 cos θ2 ))
        = r1 r2 (cos (θ1 + θ2 ) + i sin (θ1 + θ2 )),
5.6. ARGUMENT OF
              y A COMPLEX NUMBER                                         y                   105
                            6                                            6
                                            4 + 3i        −4 + 3i
                                        >
                                        ½                   }
                                                            Z
                                    ½                           Z
                                ½                                   Z
           ¾                ½α              -x          ¾           αZ             -x



                            ?                                            ?
                            y                                            y
                            6                                            6



           ¾                                -x          ¾                          -x
                       α½                                                Zα
                       ½                                                  Z
                   ½                                                          Z
               ½
               =                                                                  ~ 4 − 3i
                                                                                  Z
             −4 − 3i
                            ?                                            ?

                            Figure 5.6: Argument examples.


which is the polar representation of z1 z2 , as r1 r2 = |z1 ||z2 | = |z1 z2 |. Hence
θ1 + θ2 is an argument of z1 z2 .
   An easy induction gives the following generalization to a product of n
complex numbers:
COROLLARY 5.6.1 If θ1 , . . . , θn are arguments for z1 , . . . , zn respectively,
then θ1 + · · · + θn is an argument for z1 · · · zn .
Taking θ1 = · · · = θn = θ in the previous corollary gives
COROLLARY 5.6.2 If θ is an argument of z, then nθ is an argument for
zn.

THEOREM 5.6.2 If θ is an argument of the non–zero complex number
z, then −θ is an argument of z −1 .

Proof. Let θ be an argument of z. Then z = r(cos θ +i sin θ), where r = |z|.
Hence

                           z −1 = r−1 (cos θ + i sin θ)−1
                                    = r−1 (cos θ − i sin θ)
                                    = r−1 (cos(−θ) + i sin(−θ)).
106                                    CHAPTER 5. COMPLEX NUMBERS

Now r −1 = |z|−1 = |z −1 |, so −θ is an argument of z −1 .
COROLLARY 5.6.3 If θ1 and θ2 are arguments of z1 and z2 , then θ1 − θ2
is an argument of z1 /z2 .
In terms of principal arguments, we have the following equations:
        (i)       Arg (z1 z2 ) = Arg z1 +Arg z2 + 2k1 π,
       (ii)       Arg (z −1 ) = −Arg z + 2k2 π,
       (iii)     Arg (z1 /z2 ) = Arg z1 −Arg z2 + 2k3 π,
       (iv) Arg (z1 · · · zn ) = Arg z1 + · · · +Arg zn + 2k4 π,
       (v)           Arg (z n ) = n Arg z + 2k5 π,
      where k1 , k2 , k3 , k4 , k5 are integers.
      In numerical examples, we can write (i), for example, as

                         Arg (z1 z2 ) ≡ Arg z1 + Arg z2 .

EXAMPLE 5.6.3 Find the modulus and principal argument of
                         Ã√      !17
                             3+i
                      z=
                            1+i

and hence express z in modulus–argument form.
                  √
                 | 3 + i|17     217
Solution. |z| =             =  √       = 217/2 .
                  |1 + i|17   ( 2)  17

                                    Ã√       !
                                         3+i
                 Arg z ≡ 17Arg
                                        1+i
                                      √
                          = 17(Arg ( 3 + i) − Arg (1 + i))
                               ³ π π ´ −17π
                          = 17     −      =         .
                                 6     4       12
Hence Arg z = −17π
               ¡     ¢
                  12   + 2kπ, where k is an integer. We see that k = 1 and
              7π
hence Arg z = 12 . Consequently z = 217/2 cos 7π             7π
                                           ¡                    ¢
                                                  12 + i sin 12 .

DEFINITION 5.6.2 If θ is a real number, then we define eiθ by

                               eiθ = cos θ + i sin θ.

More generally, if z = x + iy, then we define ez by

                                   ez = ex eiy .
5.7. DE MOIVRE’S THEOREM                                                107

For example,
                         iπ                             iπ
                       e 2 = i, eiπ = −1, e− 2 = −i.
The following properties of the complex exponential function are left as
exercises:
THEOREM 5.6.3           (i)          e z 1 ez 2     =   ez1 +z2 ,
                       (ii)    e z1 · · · e zn      =   ez1 +···+zn ,
                       (iii)                ez    6 =   0,
                                           −1
                       (iv)         (ez )           =   e−z ,
                       (v)         ez1 /ez2         =   ez1 −z2 ,
                       (vi)                 ez      =   ez .
THEOREM 5.6.4 The equation
                                         ez = 1
has the complete solution z = 2kπi, k ∈ Z.
Proof. First we observe that
                    e2kπi = cos (2kπ) + i sin (2kπ) = 1.
Conversely, suppose ez = 1, z = x + iy. Then ex (cos y + i sin y) = 1. Hence
ex cos y = 1 and ex sin y = 0. Hence sin y = 0 and so y = nπ, n ∈ Z. Then
ex cos (nπ) = 1, so ex (−1)n = 1, from which follows (−1)n = 1 as ex > 0.
Hence n = 2k, k ∈ Z and ex = 1. Hence x = 0 and z = 2kπi.


5.7     De Moivre’s theorem
The next theorem has many uses and is a special case of theorem 5.6.3(ii).
Alternatively it can be proved directly by induction on n.
THEOREM 5.7.1 (De Moivre) If n is a positive integer, then
                    (cos θ + i sin θ)n = cos nθ + i sin nθ.
As a first application, we consider the equation z n = 1.
THEOREM 5.7.2 The equation z n = 1 has n distinct solutions, namely
                               2kπi
the complex numbers ζk = e n , k = 0, 1, . . . , n − 1. These lie equally
spaced on the unit circle |z| = 1 and are obtained by starting at 1, moving
round the circle anti–clockwise, incrementing the argument in steps of 2πn .
(See Figure 5.7)
                                                                     2πi
   We notice that the roots are the powers of the special root ζ = e n .
108                                  CHAPTER 5. COMPLEX NUMBERS
                                        6


                                                     ζ2
                                               ¶¶
                                                7    |z| = 1
                                              ¶
                                             ¶     * 1
                                                   ©
                                                      ζ
                                           ¶2π/n©©
                                          ¶ ©©
                                         ¶©©2π/n
                                        ¶
                                        ©
                                        H           -      -
                                          HH2π/n        ζ0
                                             HH
                                                H
                                                  HH
                                                   j ζn−1




                     Figure 5.7: The nth roots of unity.



Proof. With ζk defined as above,
                           ³ 2kπi ´n    2kπi
                      ζkn = e n      = e n n = 1,

by De Moivre’s theorem. However |ζk | = 1 and arg ζk = 2kπ      n , so the com-
plex numbers ζk , k = 0, 1, . . . , n − 1, lie equally spaced on the unit circle.
Consequently these numbers must be precisely all the roots of z n − 1. For
the polynomial z n − 1, being of degree n over a field, can have at most n
distinct roots in that field.
    The more general equation z n = a, where a ∈, C, a 6= 0, can be reduced
to the previous case:
                                                                      iα
    Let α be argument of z, so that a = |a|eiα . Then if w = |a|1/n e n , we
have
                                           iα n
                                 ³            ´
                        wn =       |a|1/n e n
                                            ³ iα ´n
                             = (|a|1/n )n e n
                                = |a|eiα = a.

So w is a particular solution. Substituting for a in the original equation,
we get z n = wn , or (z/w)n = 1. Hence the complete solution is z/w =
5.7. DE MOIVRE’S THEOREM                                                                            109
                                                  6

                                                                     z1
                                                                ¢̧             |z| = (|a|)1/n
                                                               ¢
                                                           ¢
                                                          ¢     * z0
                                                                ©
                                                      ¢     © ©
                                                     ¢2π/n
                                                         ©©
                                                   ¢©©α
                                                  ¢©
                                                  P                   -
                                                    PP
                                                         PP
                                                            PP
                                                               PPq zn−1




                           Figure 5.8: The roots of z n = a.


 2kπi
e n , k = 0, 1, . . . , n − 1, or
                                          iα   2kπi                       i(α+2kπ)
                      zk = |a|1/n e n e n = |a|1/n e                          n      ,             (5.4)

k = 0, 1, . . . , n − 1. So the roots are equally spaced on the circle

                                          |z| = |a|1/n

and are generated from the special solution having argument equal to (arg a)/n,
by incrementing the argument in steps of 2π/n. (See Figure 5.8.)

EXAMPLE 5.7.1 Factorize the polynomial z 5 − 1 as a product of real
linear and quadratic factors.
                                    2πi        −2πi   4πi            −4πi
Solution. The roots are 1, e 5 , e 5 , e 5 , e 5 , using the fact that non–
real roots come in conjugate–complex pairs. Hence
                                      2πi             −2πi                   4πi           −4πi
         z 5 − 1 = (z − 1)(z − e 5 )(z − e             5       )(z − e 5 )(z − e            5 ).


Now
                     2πi         −2πi                                 2πi          −2πi
              (z − e 5 )(z − e    5       ) = z 2 − z(e 5 + e                       5     )+1
                                                      2
                                               = z        − 2z cos 2π
                                                                    5 + 1.
110                                         CHAPTER 5. COMPLEX NUMBERS

Similarly
                           4πi           −4πi
                  (z − e 5 )(z − e        5     ) = z 2 − 2z cos 4π
                                                                  5 + 1.

This gives the desired factorization.

EXAMPLE 5.7.2 Solve z 3 = i.

Solution. |i| = 1 and Arg i = π2 = α. So by equation 5.4, the solutions are

                                          i(α+2kπ)
                          zk = |i|1/3 e       3      , k = 0, 1, 2.

First, k = 0 gives
                                                      √
                                 iπ        π       π    3  i
                      z0 = e      6   = cos + i sin =     + .
                                           6       6   2   2

Next, k = 1 gives
                                                         √
                           5πi          5π         5π   − 3  i
                  z1 = e    6     = cos    + i sin    =     + .
                                         6          6    2   2

Finally, k = 2 gives

                                  9πi           9π         9π
                       z1 = e 6 = cos              + i sin    = −i.
                                                 6          6

      We finish this chapter with two more examples of De Moivre’s theorem.

EXAMPLE 5.7.3 If

                      C = 1 + cos θ + · · · + cos (n − 1)θ,
                      S = sin θ + · · · + sin (n − 1)θ,

prove that

                      sin nθ                              sin nθ
               C=         2
                           θ
                             cos (n−1)θ
                                   2    and S =               2
                                                                   sin (n−1)θ
                                                                         2    ,
                      sin 2                               sin 2θ

if θ 6= 2kπ, k ∈ Z.
5.8. PROBLEMS                                                                  111

Solution.

   C + iS = 1 + (cos θ + i sin θ) + · · · + (cos (n − 1)θ + i sin (n − 1)θ)
             = 1 + eiθ + · · · + ei(n−1)θ
             = 1 + z + · · · + z n−1 , where z = eiθ
               1 − zn
             =        , if z 6= 1, i.e. θ 6= 2kπ,
                1−z
                                  inθ     −inθ     inθ
                 1 − einθ   e 2 (e 2 − e 2 )
             =            =
                 1 − eiθ       iθ  −iθ   iθ
                             e 2 (e 2 − e 2 )
                         θ   sin nθ
             = ei(n−1) 2         2
                             sin 2θ
                                                         sin nθ
             = (cos (n − 1) 2θ + i sin (n − 1) 2θ )          2
                                                                   .
                                                          sin 2θ

The result follows by equating real and imaginary parts.

EXAMPLE 5.7.4 Express cos nθ and sin nθ in terms of cos θ and sin θ,
using the equation cos nθ + sin nθ = (cos θ + i sin θ)n .

Solution. The binomial theorem gives
(cos θ + i sin θ)n = cosn θ + n1 cosn−1 θ(i sin θ) + n2 cosn−2 θ(i sin θ)2 + · · ·
                             ¡ ¢                    ¡ ¢

                 + (i sin θ)n .
Equating real and imaginary parts gives
              cos nθ = cosn θ − n2 cosn−2 θ sin2 θ + · · ·
                               ¡ ¢

              sin nθ = n1 cosn−1 θ sin θ − n3 cosn−3 θ sin3 θ + · · · .
                       ¡ ¢                ¡ ¢



5.8     PROBLEMS
   1. Express the following complex numbers in the form x + iy, x, y real:
                                        2 + 3i         (1 + 2i)2
      (i) (−3 + i)(14 − 2i); (ii)              ; (iii)           .
                                        1 − 4i           1−i

      [Answers: (i) −40 + 20i; (ii) − 10   11            7   i
                                      17 + 17 i; (iii) − 2 + 2 .]

   2. Solve the following equations:
112                                    CHAPTER 5. COMPLEX NUMBERS

        (i)         iz + (2 − 10i)z   =    3z + 2i,

        (ii)    (1 + i)z + (2 − i)w   =    −3i
               (1 + 2i)z + (3 + i)w   =    2 + 2i.
                           9    i
       [Answers:(i) z = − 41 − 41 ; (ii) z = −1 + 5i, w = 19   8i
                                                           5 − 5 .]

  3. Express 1 + (1 + i) + (1 + i)2 + . . . + (1 + i)99 in the form x + iy, x, y
     real. [Answer: (1 + 250 )i.]

  4. Solve the equations: (i) z 2 = −8 − 6i; (ii) z 2 − (3 + i)z + 4 + 3i = 0.
       [Answers: (i) z = ±(1 − 3i); (ii) z = 2 − i, 1 + 2i.]

  5. Find the modulus and principal argument of each of the following
     complex numbers:
                                                               √
     (i) 4 + i; (ii) − 32 − 2i ; (iii) −1 + 2i; (iv) 12 (−1 + i 3).
                       √                    √                          √
       [Answers: (i)    17, tan−1 14 ; (ii) 210 , −π + tan−1 31 ; (iii) 5, π −
       tan−1 2.]

  6. Express the following complex numbers in modulus-argument form:
                            √ √
       (i) z = (1 + i)(1 + i 3)( 3 − i).
                              √
               (1 + i)5 (1 − i 3)5
      (ii) z =       √             .
                    ( 3 + i)4

       [Answers:
                √
       (i) z = 4 2(cos 5π         5π
                       12 + i sin 12 );    (ii) z = 27/2 (cos 11π         11π
                                                               12 + i sin 12 ).]

  7.    (i) If z = 2(cos π4 +i sin π4 ) and w = 3(cos π6 +i sin π6 ), find the polar
            form of
                                            5
            (a) zw; (b) wz ; (c) wz ; (d) wz 2 .
       (ii) Express the following complex numbers in the form x + iy:
                               ³ ´−6
            (a) (1 + i)12 ; (b) 1−i
                                √
                                  2
                                     .

       [Answers: (i): (a) 6(cos 5π         5π        2      π          π
                                12 + i sin 12 ); (b) 3 (cos 12 + i sin 12 );

       (c) 32 (cos − 12
                     π            π
                        + i sin − 12 ); (d) 32      11π        11π
                                             9 (cos 12 + i sin 12 );

       (ii): (a) −64; (b) −i.]
5.8. PROBLEMS                                                                      113

  8. Solve the equations:
                        √
         (i) z 2 = 1 + i 3; (ii) z 4 = i; (iii) z 3 = −8i; (iv) z 4 = 2 − 2i.
                                √
       [Answers: (i) z = ± ( √3+i)
                               2
                                   ; (ii) ik (cos π8 + i sin π8 ), k = 0, 1, 2, 3; (iii)
                √      √                       3
                                                      π            π
       z = 2i, − 3 − i, 3 − i; (iv) z = ik 2 8 (cos 16   − i sin 16  ), k = 0, 1, 2, 3.]

  9. Find the reduced row–echelon form of the complex matrix
                                                
                           2 + i −1 + 2i      2
                         1 + i −1 + i        1 .
                          1 + 2i −2 + i 1 + i
                       
                  1 i 0
       [Answer:  0 0 1 .]
                  0 0 0

 10.    (i) Prove that the line equation lx + my = n is equivalent to

                                          pz + pz = 2n,

            where p = l + im.
       (ii) Use (ii) to deduce that reflection in the straight line

                                           pz + pz = n

            is described by the equation

                                          pw + pz = n.

            [Hint: The complex number l + im is perpendicular to the given
            line.]
       (iii) Prove that the line |z −a| = |z −b| may be written as pz +pz = n,
             where p = b − a and n = |b|2 − |a|2 . Deduce that if z lies on the
             Apollonius circle |z−a|
                               |z−b| = λ, then w, the reflection of z in the line
            |z − a| = |z − b|, lies on the Apollonius circle |z−a|   1
                                                             |z−b| = λ .

 11. Let a and b be distinct complex numbers and 0 < α < π.

        (i) Prove that each of the following sets in the complex plane rep-
            resents a circular arc and sketch the circular arcs on the same
            diagram:
114                                 CHAPTER 5. COMPLEX NUMBERS

                           z−a
                       Arg       = α, −α, π − α, α − π.
                           z−b
                               z−a
           Also show that Arg        = π represents the line segment joining
                               z−b
                              z−a
           a and b, while Arg        = 0 represents the remaining portion of
                              z−b
           the line through a and b.
      (ii) Use (i) to prove that four distinct points z1 , z2 , z3 , z4 are con-
           cyclic or collinear, if and only if the cross–ratio
                                    z4 − z 1 z3 − z 1
                                            /
                                    z4 − z 2 z3 − z 2
           is real.
      (iii) Use (ii) to derive Ptolemy’s Theorem: Four distinct points A, B, C, D
            are concyclic or collinear, if and only if one of the following holds:

                          AB · CD + BC · AD = AC · BD
                         BD · AC + AD · BC = AB · CD
                          BD · AC + AB · CD = AD · BC.
Chapter 6

EIGENVALUES AND
EIGENVECTORS

6.1     Motivation

We motivate the chapter on eigenvalues by discussing the equation


                                  ax2 + 2hxy + by 2 = c,


where not all of a, h, b are zero. The expression ax2 + 2hxy + by 2 is called
a quadratic form in x and y and we have the identity

                                                     ·         ¸·       ¸
                                                         a h        x
          ax2 + 2hxy + by 2 =                                               = X t AX,
                                       £         ¤
                                           x y
                                                         h b        y

            ·       ¸             ·       ¸
                x                     a h
where X =               and A =             . A is called the matrix of the quadratic
                y                     h b
form.
     We now rotate the x, y axes anticlockwise through θ radians to new
x1 , y1 axes. The equations describing the rotation of axes are derived as
follows:
     Let P have coordinates (x, y) relative to the x, y axes and coordinates
(x1 , y1 ) relative to the x1 , y1 axes. Then referring to Figure 6.1:

                                             115
116                  CHAPTER 6. EIGENVALUES AND EIGENVECTORS
                                   y           P
                                   6           ¯@
                y1                            ¯ @     x1
                 I
                 @                        ¯    @¡
                                                µ
                     @                 ¯      ¡ R
                       @             ¯      ¡
                         @          ¯     ¡
                           @       ¯ ¡
                             @    ¯α ¡
                               @ ¯¡
            ¾                    ¯ θ
                                @¡         Q       -x
                                O@
                                   @
                                     @
                                         @
                                           @
                                             @
                                               @
                                                 R
                                                 @

                                   ?

                         Figure 6.1: Rotating the axes.



                     x = OQ = OP cos (θ + α)
                       = OP (cos θ cos α − sin θ sin α)
                       = (OP cos α) cos θ − (OP sin α) sin θ
                       = OR cos θ − PR sin θ
                       = x1 cos θ − y1 sin θ.

Similarly y = x1 sin θ + y1 cos θ.
   We can combine these transformation equations into the single matrix
equation:            · ¸ ·                        ¸·      ¸
                        x         cos θ − sin θ       x1
                            =                               ,
                        y          sin θ   cos θ      y1
                            · ¸           ·      ¸            ·                 ¸
                              x              x1                  cos θ − sin θ
or X = P Y , where X =              ,Y =           and P =                        .
                              y              y1                  sin θ    cos θ
We note that the columns of P give the directions of the positive x1 and y1
axes. Also P is an orthogonal matrix – we have P P t = I2 and so P −1 = P t .
The matrix P has the special property that det P = 1.
                                ·                  ¸
                                    cos θ − sin θ
   A matrix of the type P =                          is called a rotation matrix.
                                    sin θ   cos θ
We shall show soon that any 2 × 2 real orthogonal matrix with determinant
6.1. MOTIVATION                                                                 117

equal to 1 is a rotation matrix.
   We can also solve for the new coordinates in terms of the old ones:
               ·     ¸             ·                ¸· ¸
                 x1            t       cos θ sin θ      x
                       =Y =P X=                             ,
                 y1                  − sin θ cos θ      y
so x1 = x cos θ + y sin θ and y1 = −x sin θ + y cos θ. Then
                   X t AX = (P Y )t A(P Y ) = Y t (P t AP )Y.
Now suppose, as we later show, that it is possible to choose an angle θ so
that P t AP is a diagonal matrix, say diag(λ1 , λ2 ). Then
                               ·          ¸·       ¸
             t
                              ¤ λ1 0           x1
                                                     = λ1 x21 + λ2 y12
                     £
           X AX = x1 y1                                                (6.1)
                                   0 λ2        y1
and relative to the new axes, the equation ax2 + 2hxy + by 2 = c becomes
λ1 x21 + λ2 y12 = c, which is quite easy to sketch. This curve is symmetrical
about the x1 and y1 axes, with P1 and P2 , the respective columns of P ,
giving the directions of the axes of symmetry.
    Also it can be verified that P1 and P2 satisfy the equations
                       AP1 = λ1 P1 and AP2 = λ2 P2 .
                                                                  ·        ¸
                                                                      u1
These equations force a restriction on λ1 and λ2 . For if P1 =                 , the
                                                                      v1
first equation becomes
    ·       ¸·     ¸      ·    ¸    ·               ¸·    ¸ · ¸
       a h      u1          u1        a − λ1    h      u1    0
                     = λ1        or                        =    .
       h b      v1          v1          h    b − λ1    v1    0
Hence we are dealing with a homogeneous system of two linear equations in
two unknowns, having a non–trivial solution (u1 , v1 ). Hence
                         ¯                ¯
                         ¯ a − λ1     h   ¯
                         ¯                ¯ = 0.
                         ¯    h    b − λ1 ¯
Similarly, λ2 satisfies the same equation. In expanded form, λ1 and λ2
satisfy
                         λ2 − (a + b)λ + ab − h2 = 0.
This equation has real roots
                p                                    p
        a + b ± (a + b)2 − 4(ab − h2 )       a + b ± (a − b)2 + 4h2
    λ=                                    =                              (6.2)
                         2                               2
(The roots are distinct if a 6= b or h 6= 0. The case a = b and h = 0 needs
no investigation, as it gives an equation of a circle.)
    The equation λ2 − (a + b)λ + ab − h2 = 0 is called the eigenvalue equation
of the matrix A.
118                CHAPTER 6. EIGENVALUES AND EIGENVECTORS

6.2     Definitions and examples
DEFINITION 6.2.1 (Eigenvalue, eigenvector)
Let A be a complex square matrix. Then if λ is a complex number and
X a non–zero complex column vector satisfying AX = λX, we call X an
eigenvector of A, while λ is called an eigenvalue of A. We also say that X
is an eigenvector corresponding to the eigenvalue λ.

So in the above example P1 and P2 are eigenvectors corresponding to λ1
and λ2 , respectively.
                     · We ¸  shall give an algorithm which starts from the
                        a h
eigenvalues of A =             and constructs a rotation matrix P such that
                        h b
P t AP is diagonal.
     As noted above, if λ is an eigenvalue of an n × n matrix A, with
corresponding eigenvector X, then (A − λIn )X = 0, with X 6= 0, so
det (A − λIn ) = 0 and there are at most n distinct eigenvalues of A.
     Conversely if det (A − λIn ) = 0, then (A − λIn )X = 0 has a non–trivial
solution X and so λ is an eigenvalue of A with X a corresponding eigenvector.

DEFINITION 6.2.2 (Characteristic equation, polynomial)
The equation det (A − λIn ) = 0 is called the characteristic equation of A,
while the polynomial det (A − λIn ) is called the characteristic polynomial of
A. The characteristic polynomial of A is often denoted by chA (λ).
    Hence the eigenvalues of A are the roots of the characteristic polynomial
of A.
                             ·       ¸
                               a b
    For a 2 × 2 matrix A =             , it is easily verified that the character-
                                c d
istic polynomial is λ2 − (trace A)λ + det A, where trace A = a + d is the sum
of the diagonal elements of A.
                                                      ·        ¸
                                                        2 1
EXAMPLE 6.2.1 Find the eigenvalues of A =                        and find all eigen-
                                                        1 2
vectors.

Solution. The characteristic equation of A is λ2 − 4λ + 3 = 0, or

                               (λ − 1)(λ − 3) = 0.

Hence λ = 1 or 3. The eigenvector equation (A − λIn )X = 0 reduces to
                    ·               ¸· ¸ · ¸
                      2−λ      1       x       0
                                            =       ,
                        1    2−λ       y       0
6.2. DEFINITIONS AND EXAMPLES                                              119

or

                             (2 − λ)x + y = 0
                             x + (2 − λ)y = 0.

Taking λ = 1 gives

                                x+y = 0
                                x + y = 0,

which has solution x = −y, y arbitrary.·   Consequently
                                            ¸              the eigenvectors
                                         −y
corresponding to λ = 1 are the vectors        , with y 6= 0.
                                          y
    Taking λ = 3 gives

                               −x + y = 0
                                 x − y = 0,

which has solution x = y, y arbitrary.
                                  · Consequently
                                       ¸                the eigenvectors corre-
                                     y
sponding to λ = 3 are the vectors        , with y 6= 0.
                                     y
     Our next result has wide applicability:

THEOREM 6.2.1 Let A be a 2 × 2 matrix having distinct eigenvalues λ1
and λ2 and corresponding eigenvectors X1 and X2 . Let P be the matrix
whose columns are X1 and X2 , respectively. Then P is non–singular and
                                   ·         ¸
                         −1          λ1 0
                        P AP =                 .
                                      0 λ2

Proof. Suppose AX1 = λ1 X1 and AX2 = λ2 X2 . We show that the system
of homogeneous equations

                               xX1 + yX2 = 0

has only the trivial solution. Then by theorem 2.5.10 the matrix P =
[X1 |X2 ] is non–singular. So assume

                               xX1 + yX2 = 0.                             (6.3)

Then A(xX1 + yX2 ) = A0 = 0, so x(AX1 ) + y(AX2 ) = 0. Hence

                             xλ1 X1 + yλ2 X2 = 0.                         (6.4)
120               CHAPTER 6. EIGENVALUES AND EIGENVECTORS

Multiplying equation 6.3 by λ1 and subtracting from equation 6.4 gives
                              (λ2 − λ1 )yX2 = 0.
Hence y = 0, as (λ2 −λ1 ) 6= 0 and X2 6= 0. Then from equation 6.3, xX1 = 0
and hence x = 0.
   Then the equations AX1 = λ1 X1 and AX2 = λ2 X2 give
 AP = A[X1 |X2 ] = [AX1 |AX2 ] = [λ1 X1 |λ2 X2 ]
                                                ·          ¸    ·         ¸
                                                    λ1 0          λ1 0
                                  = [X1 |X2 ]                =P             ,
                                                     0 λ2          0 λ2
so                                    ·            ¸
                            −1           λ1 0
                          P AP =                     .
                                          0 λ2
                              ·        ¸
                                2 1
EXAMPLE 6.2.2 Let A =                    be the matrix of example 6.2.1. Then
                                1 2
     ·      ¸           · ¸
        −1                1
X1 =          and X2 =         are eigenvectors corresponding to eigenvalues
          1               1
                                     ·          ¸
                                        −1 1
1 and 3, respectively. Hence if P =               , we have
                                          1 1
                                        ·       ¸
                             −1            1 0
                           P AP =                  .
                                           0 3
    There are two immediate applications of theorem 6.2.1. The first is to the
calculation of An : If P −1 AP = diag (λ1 , λ2 ), then A = P diag (λ1 , λ2 )P −1
and
       µ ·            ¸      ¶n     ·           ¸n         · n          ¸
   n          λ1 0        −1          λ1 0           −1       λ1 0
 A = P                  P       =P                 P =P                   P −1 .
              0 λ2                     0 λ2                    0 λn2
The second application is to solving a system of linear differential equations

                               dx
                                    = ax + by
                               dt
                               dy
                                    = cx + dy,
                               dt
            ·       ¸
              a b
where A =             is a matrix of real or complex numbers and x and y
              c d
are functions of t. The system can be written in matrix form as Ẋ = AX,
where                   · ¸              · ¸ · dx ¸
                          x                ẋ      dt
                   X=         and Ẋ =         = dy    .
                          y                ẏ      dt
6.2. DEFINITIONS AND EXAMPLES                                                      121
                                                      ·        ¸
                                                          x1
We make the substitution X = P Y , where Y =                       . Then x1 and y1
                                                          y1
are also functions of t and
                                                               ·          ¸
                                              −1                   λ1 0
      Ẋ = P Ẏ = AX = A(P Y ), so Ẏ = (P         AP )Y =                    Y.
                                                                   0 λ2

Hence x˙1 = λ1 x1 and y˙1 = λ2 y1 .
    These differential equations are well–known to have the solutions x1 =
x1 (0)eλ1 t and x2 = x2 (0)eλ2 t , where x1 (0) is the value of x1 when t = 0.
[If dx
    dt = kx, where k is a constant, then

         d ³ −kt ´                dx
            e x = −ke−kt x + e−kt    = −ke−kt x + e−kt kx = 0.
         dt                       dt
Hence e−kt x is constant, so e−kt x = e−k0 x(0) = x(0). Hence x = x(0)ekt .]
         ·         ¸         ·      ¸
            x1 (0)        −1   x(0)
However              =P               , so this determines x1 (0) and y1 (0) in
            y1 (0)             y(0)
terms of x(0) and y(0). Hence ultimately x and y are determined as explicit
functions of t, using the equation X = P Y .
                                ·          ¸
                                   2 −3
EXAMPLE 6.2.3 Let A =                        . Use the eigenvalue method to
                                   4 −5
derive an explicit formula for An and also solve the system of differential
equations
                              dx
                                   = 2x − 3y
                              dt
                              dy
                                   = 4x − 5y,
                              dt
given x = 7 and y = 13 when t = 0.

Solution. The characteristic polynomial of A is λ2 +3λ+2 which has distinct
                                                                     · ¸
                                                                        1
roots λ1 = −1 and λ2 = −2. We find corresponding eigenvectors X1 =
                                                                        1
          · ¸                  ·      ¸
            3                    1 3
and X2 =       . Hence if P =           , we have P −1 AP = diag (−1, −2).
            4                    1 4
Hence
                                    ¢n
        An = P diag (−1, −2)P −1 = P diag ((−1)n , (−2)n )P −1
                ¡

                           (−1)n
                ·      ¸·                  ¸·           ¸
                  1 3                0           4 −3
            =
                  1 4         0    (−2)n       −1    1
122                      CHAPTER 6. EIGENVALUES AND EIGENVECTORS
                               ·          ¸·                 ¸·               ¸
                           n       1 3             1 0            4 −3
               = (−1)
                                   1 4             0 2n          −1    1
                                                  n
                               ·                    ¸·              ¸
                           n       1 3×2                     4 −3
               = (−1)
                                   1 4 × 2n                −1     1
                                   4 − 3 × 2n             −3 + 3 × 2n
                               ·                                      ¸
                           n
               = (−1)                                                   .
                                   4 − 4 × 2n             −3 + 4 × 2n

    To solve the differential equation system, make the substitution X =
P Y . Then x = x1 + 3y1 , y = x1 + 4y1 . The system then becomes

                                          ẋ1 = −x1
                                              ẏ1 = −2y1 ,

so x1 = x1 (0)e−t , y1 = y1 (0)e−2t . Now
        ·            ¸             ·          ¸       ·             ¸·        ¸           ·         ¸
            x1 (0)            −1       x(0)                 4 −3          7                   −11
                         =P                       =                                   =                 ,
            y1 (0)                     y(0)                −1  1         13                     6

so x1 = −11e−t and y1 = 6e−2t . Hence x = −11e−t + 3(6e−2t ) = −11e−t +
18e−2t , y = −11e−t + 4(6e−2t ) = −11e−t + 24e−2t .
    For a more complicated example we solve a system of inhomogeneous
recurrence relations.

EXAMPLE 6.2.4 Solve the system of recurrence relations

                                   xn+1 = 2xn − yn − 1
                                   yn+1 = −xn + 2yn + 2,

given that x0 = 0 and y0 = −1.

Solution. The system can be written in matrix form as

                                        Xn+1 = AXn + B,

where                              ·                  ¸             ·         ¸
                                        2 −1                            −1
                          A=                              and B =                 .
                                       −1  2                             2
It is then an easy induction to prove that

                         Xn = An X0 + (An−1 + · · · + A + I2 )B.                                            (6.5)
6.2. DEFINITIONS AND EXAMPLES                                                    123

Also it is easy to verify by the eigenvalue method that
                         1 1 + 3n 1 − 3n                3n
                           ·                 ¸
                    n                             1
                  A =                           =   U +    V,
                         2 1 − 3n 1 + 3n          2      2
             ·      ¸           ·           ¸
               1 1                   1 −1
where U =              and V =                . Hence
               1 1                 −1    1
                                                 n    (3n−1 + · · · + 3 + 1)
           An−1 + · · · + A + I2 =                 U+                        V
                                                 2              2
                                                 n    (3n−1 − 1)
                                         =         U+             V.
                                                 2        4
Then equation 6.5 gives
                    3n                 (3n−1 − 1)
           µ            ¶·    ¸ µ                   ¶·    ¸
             1              0     n                    −1
     Xn =      U+ V            +    U+            V         ,
             2       2     −1     2        4            2
which simplifies to
                                             (2n + 1 − 3n )/4
                        ·        ¸       ·                        ¸
                            xn
                                     =                                .
                            yn               (2n − 5 + 3n )/4
Hence xn = (2n − 1 + 3n )/4 and yn = (2n − 5 + 3n )/4.
REMARK 6.2.1 If (A − I2 )−1 existed (that is, if det (A − I2 ) 6= 0, or
equivalently, if 1 is not an eigenvalue of A), then we could have used the
formula
                 An−1 + · · · + A + I2 = (An − I2 )(A − I2 )−1 .      (6.6)
However the eigenvalues of A are 1 and 3 in the above problem, so formula 6.6
cannot be used there.
Our discussion of eigenvalues and eigenvectors has been limited to 2 × 2
matrices. The discussion is a more complicated for matrices of size greater
than two and is best left to a second course in linear algebra. Nevertheless
the following result is a useful generalization of theorem 6.2.1. The reader
is referred to [28, page 350] for a proof.
THEOREM 6.2.2 Let A be an n × n matrix having distinct eigenvalues
λ1 , . . . , λn and corresponding eigenvectors X1 , . . . , Xn . Let P be the matrix
whose columns are respectively X1 , . . . , Xn . Then P is non–singular and
                                                            
                                       λ1 0 · · · 0
                                     0 λ2 · · · 0 
                          P −1 AP =  .     ..   ..      ..  .
                                                            
                                     . .    .    .       . 
                                             0     0   · · · λn
124                    CHAPTER 6. EIGENVALUES AND EIGENVECTORS

Another useful result which covers the case where there are multiple eigen-
values is the following (The reader is referred to [28, pages 351–352] for a
proof):

THEOREM 6.2.3 Suppose the characteristic polynomial of A has the fac-
torization
           det (λIn − A) = (λ − c1 )n1 · · · (λ − ct )nt ,

where c1 , . . . , ct are the distinct eigenvalues of A. Suppose that for i =
1, . . . , t, we have nullity (ci In −A) = ni . For each i, choose a basis Xi1 , . . . , Xini
for the eigenspace N (ci In − A). Then the matrix

                         P = [X11 | · · · |X1n1 | · · · |Xt1 | · · · |Xtnt ]

is non–singular and P −1 AP is the following diagonal matrix
                                                                             
                                   c1 I n 1             0     ···      0
                                  0                c 2 In2   ···      0      
                       P −1 AP =  .                    ..     ..      ..     .
                                                                             
                                  ..                    .      .       .     
                                           0          0       · · · c t Int

(The notation means that on the diagonal there are n1 elements c1 , followed
by n2 elements c2 ,. . . , nt elements ct .)


6.3      PROBLEMS
                   ·     ¸
                   4 −3
   1. Let A =              . Find a non–singular matrix P such that P −1 AP =
                   1   0
       diag (1, 3) and hence prove that

                                            3n − 1    3 − 3n
                                    An =           A+        I2 .
                                               2         2
               ·           ¸
                   0.6 0.8
   2. If A =                 , prove that An tends to a limiting matrix
                   0.4 0.2
                                               ·               ¸
                                                   2/3 2/3
                                                   1/3 1/3

      as n → ∞.
6.3. PROBLEMS                                                           125

 3. Solve the system of differential equations
                                      dx
                                            = 3x − 2y
                                      dt
                                      dy
                                            = 5x − 4y,
                                      dt
    given x = 13 and y = 22 when t = 0.
    [Answer: x = 7et + 6e−2t , y = 7et + 15e−2t .]

 4. Solve the system of recurrence relations

                              xn+1 = 3xn − yn
                              yn+1 = −xn + 3yn ,

    given that x0 = 1 and y0 = 2.
    [Answer: xn = 2n−1 (3 − 2n ), yn = 2n−1 (3 + 2n ).]
              ·      ¸
                a b
 5. Let A =            be a real or complex matrix with distinct eigenvalues
                c d
    λ1 , λ2 and corresponding eigenvectors X1 , X2 . Also let P = [X1 |X2 ].
    (a) Prove that the system of recurrence relations

                                  xn+1 = axn + byn
                                  yn+1 = cxn + dyn

    has the solution      ·           ¸
                              xn
                                          = αλn1 X1 + βλn2 X2 ,
                              yn
    where α and β are determined by the equation
                           ·   ¸        ·    ¸
                             α       −1   x0
                                 =P            .
                             β            y0

    (b) Prove that the system of differential equations
                                      dx
                                             = ax + by
                                      dt
                                      dy
                                             = cx + dy
                                      dt
    has the solution     ·        ¸
                              x
                                      = αeλ1 t X1 + βeλ2 t X2 ,
                              y
126                CHAPTER 6. EIGENVALUES AND EIGENVECTORS

      where α and β are determined by the equation
                            ·   ¸        ·      ¸
                              α            x(0)
                                  = P −1          .
                              β            y(0)

               ·           ¸
                 a11 a12
  6. Let A =                 be a real matrix with non–real eigenvalues λ =
                 a21 a22
      a + ib and λ = a − ib, with corresponding eigenvectors X = U + iV
      and X = U − iV , where U and V are real vectors. Also let P be the
      real matrix defined by P = [U |V ]. Finally let a + ib = reiθ , where
      r > 0 and θ is real.

      (a) Prove that

                                    AU     = aU − bV
                                    AV     = bU + aV.

      (b) Deduce that                           ·          ¸
                                    −1              a −b
                                P        AP =                  .
                                                    b  a

       (c) Prove that the system of recurrence relations

                              xn+1 = a11 xn + a12 yn
                               yn+1 = a21 xn + a22 yn

          has the solution
                ·     ¸
                  xn
                        = rn {(αU + βV ) cos nθ + (βU − αV ) sin nθ},
                  yn

          where α and β are determined by the equation
                              ·   ¸        ·    ¸
                                α       −1   x0
                                    =P            .
                                β            y0

      (d) Prove that the system of differential equations

                                     dx
                                           = ax + by
                                     dt
                                     dy
                                           = cx + dy
                                     dt
6.3. PROBLEMS                                                           127

         has the solution
                · ¸
                  x
                       = eat {(αU + βV ) cos bt + (βU − αV ) sin bt},
                  y
         where α and β are determined by the equation
                            ·     ¸         ·       ¸
                               α         −1   x(0)
                                    =P                .
                               β              y(0)
                    · ¸       ·     ¸
                     x          x1
         [Hint: Let      =P           . Also let z = x1 + iy1 . Prove that
                     y           y1
                                        ż = (a − ib)z

         and deduce that

                      x1 + iy1 = eat (α + iβ)(cos bt + i sin bt).

         Then equate real and imaginary parts to solve for x1 , y1 and
         hence x, y.]
                                                    ·       ¸
                                                      a b
 7. (The case of repeated eigenvalues.) Let A =               and suppose
                                                      c d
    that the characteristic polynomial of A, λ2 − (a + d)λ + (ad − bc), has
    a repeated root α. Also assume that A 6= αI2 . Let B = A − αI2 .
     (i) Prove that (a − d)2 + 4bc = 0.
    (ii) Prove that B 2 = 0.
    (iii) Prove that BX2 6= ·0 for¸ some
                                       · vector
                                           ¸    X2 ; indeed, show that X2
                               1         0
          can be taken to be        or       .
                               0         1
    (iv) Let X1 = BX2 . Prove that P = [X1 |X2 ] is non–singular,

                        AX1 = αX1 and AX2 = αX2 + X1

         and deduce that                       ·         ¸
                                   −1              α 1
                               P        AP =                 .
                                                   0 α
 8. Use the previous result to solve system of the differential equations
                               dx
                                        = 4x − y
                               dt
                               dy
                                        = 4x + 8y,
                               dt
128               CHAPTER 6. EIGENVALUES AND EIGENVECTORS

      given that x = 1 = y when t = 0.
      [To solve the differential equation

                           dx
                              − kx = f (t),   k a constant,
                           dt
      multiply throughout by e−kt , thereby converting the left–hand side to
      dx −kt
      dt (e  x).]

      [Answer: x = (1 − 3t)e6t , y = (1 + 6t)e6t .]

  9. Let                                      
                                   1/2 1/2 0
                             A =  1/4 1/4 1/2  .
                                   1/4 1/4 1/2

       (a) Verify that det (λI3 − A), the characteristic polynomial of A, is
           given by
                                                1
                                   (λ − 1)λ(λ − ).
                                                4
      (b) Find a non–singular matrix P such that P −1 AP = diag (1, 0, 14 ).
       (c) Prove that
                                                       
                              1 1 1               2  2 −4
                           1               1 
                       An =  1 1 1  +          −1 −1  2 
                           3            3 · 4n
                              1 1 1              −1 −1  2

           if n ≥ 1.

 10. Let                                 
                                  5  2 −2
                              A= 2  5 −2  .
                                 −2 −2  5

       (a) Verify that det (λI3 − A), the characteristic polynomial of A, is
           given by
                                   (λ − 3)2 (λ − 9).

      (b) Find a non–singular matrix P such that P −1 AP = diag (3, 3, 9).
Chapter 7

Identifying second degree
equations

7.1     The eigenvalue method
In this section we apply eigenvalue methods to determine the geometrical
nature of the second degree equation

                   ax2 + 2hxy + by 2 + 2gx + 2f y + c = 0,                 (7.1)

where not all· of a, h,¸ b are zero.
                a h
    Let A =              be the matrix of the quadratic form ax2 + 2hxy + by 2 .
                h b
We saw in section 6.1, equation 6.2 that A has real eigenvalues λ1 and λ2 ,
given by
                     p                             p
              a+b−    (a − b)2 + 4h2        a + b + (a − b)2 + 4h2
       λ1 =                          , λ2 =                        .
                       2                             2
We show that it is always possible to rotate the x, y axes to x1 , x2 axes whose
positive directions are determined by eigenvectors X1 and X2 corresponding
to λ1 and λ2 in such a way that relative to the x1 , y1 axes, equation 7.1 takes
the form
                      a0 x2 + b0 y 2 + 2g 0 x + 2f 0 y + c = 0.             (7.2)

Then by completing the square and suitably translating the x1 , y1 axes,
to new x2 , y2 axes, equation 7.2 can be reduced to one of several standard
forms, each of which is easy to sketch. We need some preliminary definitions.

                                      129
130     CHAPTER 7. IDENTIFYING SECOND DEGREE EQUATIONS

DEFINITION 7.1.1 (Orthogonal matrix) An n × n real matrix P is
called orthogonal if
                        P t P = In .
It follows that if P is orthogonal, then det P = ±1. For
                    det (P t P ) = det P t det P = ( det P )2 ,
so (det P )2 = det In = 1. Hence det P = ±1.
    If P is an orthogonal matrix with det P = 1, then P is called a proper
orthogonal matrix.
THEOREM 7.1.1 If P is a 2 × 2 orthogonal matrix with det P = 1, then
                         ·                ¸
                           cos θ − sin θ
                    P =
                           sin θ    cos θ
for some θ.
REMARK 7.1.1 Hence, by the discusssion at the beginning of Chapter
6, if P is a proper orthogonal matrix, the coordinate transformation
                             · ¸        ·     ¸
                               x           x1
                                   =P
                               y           y1
represents a rotation of the axes, with new x1 and y1 axes given by the
repective columns of P .
Proof. Suppose that P t P = I2 , where ∆ = det P = 1. Let
                                  ·       ¸
                                     a b
                             P =            .
                                     c d
Then the equation
                                                 1
                               P t = P −1 =        adj P
                                                 ∆
gives                      ·         ¸       ·              ¸
                               a c                d −b
                                         =
                               b d               −c  a
Hence a = d, b = −c and so
                                       ·            ¸
                                           a −c
                                 P =                    ,
                                           c  a
where a2 + c2 = 1. But then the point (a, c) lies on the unit circle, so
a = cos θ and c = sin θ, where θ is uniquely determined up to multiples of
2π.
7.1. THE EIGENVALUE METHOD                                                            131
                                                      ·       ¸             ·     ¸
                                                          a                     c
DEFINITION 7.1.2 (Dot product). If X =                            and Y =           , then
                                                          b                     d
X · Y , the dot product of X and Y , is defined by

                                  X · Y = ac + bd.

The dot product has the following properties:

  (i) X · (Y + Z) = X · Y + X · Z;

 (ii) X · Y = Y · X;

(iii) (tX) · Y = t(X · Y );
                                  ·     ¸
                                      a
 (iv) X · X = a2 + b2 if X =              ;
                                      b

 (v) X · Y = X t Y .

The length of X is defined by
                                  p
                        ||X|| =       a2 + b2 = (X · X)1/2 .

We see that ||X|| is the distance between the origin O = (0, 0) and the point
(a, b).

THEOREM 7.1.2 (Geometrical interpretation of the dot product)
Let A = (x1 , y1 ) and B =
                         · (x2 ,¸y2 ) be points,
                                            · each
                                                 ¸ distinct from the origin
                           x1                 x2
O = (0, 0). Then if X =           and Y =         , we have
                           y1                 y2

                              X · Y = OA · OB cos θ,

where θ is the angle between the rays OA and OB.

Proof. By the cosine law applied to triangle OAB, we have

                     AB 2 = OA2 + OB 2 − 2OA · OB cos θ.                            (7.3)

Now AB 2 = (x2 − x1 )2 + (y2 − y1 )2 , OA2 = x21 + y12 , OB 2 = x22 + y22 .
   Substituting in equation 7.3 then gives

     (x2 − x1 )2 + (y2 − y1 )2 = (x21 + y12 ) + (x22 + y22 ) − 2OA · OB cos θ,
132     CHAPTER 7. IDENTIFYING SECOND DEGREE EQUATIONS

which simplifies to give

                    OA · OB cos θ = x1 x2 + y1 y2 = X · Y.

It follows from theorem 7.1.2 that if A = ·(x1 , y¸1 ) and B =·(x2 , ¸y2 ) are
                                             x1                 x2
points distinct from O = (0, 0) and X =               and Y =          , then
                                             y1                 y2
X · Y = 0 means that the rays OA and OB are perpendicular. This is the
reason for the following definition:

DEFINITION 7.1.3 (Orthogonal vectors) Vectors X and Y are called
orthogonal if
                        X · Y = 0.

There is also a connection with orthogonal matrices:

THEOREM 7.1.3 Let P be a 2 × 2 real matrix. Then P is an orthogonal
matrix if and only if the columns of P are orthogonal and have unit length.

Proof. P is orthogonal if and only if P t P = I2 . Now if P = [X1 |X2 ], the
matrix P t P is an important matrix called the Gram matrix of the column
vectors X1 and X2 . It is easy to prove that
                                     ·                   ¸
                    t                  X1 · X 1 X1 · X 2
                  P P = [Xi · Xj ] =                       .
                                       X2 · X 1 X2 · X 2

Hence the equation P t P = I2 is equivalent to
                   ·                     ¸ ·       ¸
                       X1 · X 1 X1 · X 2       1 0
                                           =         ,
                       X2 · X 1 X2 · X 2       0 1

or, equating corresponding elements of both sides:

                   X1 · X1 = 1, X1 · X2 = 0, X2 · X2 = 1,

which says that the columns of P are orthogonal and of unit length.
   The next theorem describes a fundamental property of real symmetric
matrices and the proof generalizes to symmetric matrices of any size.

THEOREM 7.1.4 If X1 and X2 are eigenvectors corresponding to distinct
eigenvalues λ1 and λ2 of a real symmetric matrix A, then X1 and X2 are
orthogonal vectors.
7.1. THE EIGENVALUE METHOD                                             133

Proof. Suppose
                         AX1 = λ1 X1 , AX2 = λ2 X2 ,                  (7.4)

where X1 and X2 are non–zero column vectors, At = A and λ1 6= λ2 .
   We have to prove that X1t X2 = 0. From equation 7.4,

                                X2t AX1 = λ1 X2t X1                   (7.5)

and
                                X1t AX2 = λ2 X1t X2 .                 (7.6)

From equation 7.5, taking transposes,

                              (X2t AX1 )t = (λ1 X2t X1 )t

so
                                X1t At X2 = λ1 X1t X2 .

Hence
                                X1t AX2 = λ1 X1t X2 .                 (7.7)

Finally, subtracting equation 7.6 from equation 7.7, we have

                                (λ1 − λ2 )X1t X2 = 0

and hence, since λ1 6= λ2 ,
                                         X1t X2 = 0.

THEOREM 7.1.5 Let A be a real 2 × 2 symmetric matrix with distinct
eigenvalues λ1 and λ2 . Then a proper orthogonal 2 × 2 matrix P exists such
that
                          P t AP = diag (λ1 , λ2 ).

Also the rotation of axes
                                 ·        ¸        ·        ¸
                                     x                 x1
                                              =P
                                     y                 y1

“diagonalizes” the quadratic form corresponding to A:

                              X t AX = λ1 x21 + λ2 y12 .
134    CHAPTER 7. IDENTIFYING SECOND DEGREE EQUATIONS

Proof. Let X1 and X2 be eigenvectors corresponding to λ1 and λ2 . Then
by theorem 7.1.4, X1 and X2 are orthogonal. By dividing X1 and X2 by
their lengths (i.e. normalizing X1 and X2 ) if necessary, we can assume that
X1 and X2 have unit length. Then by theorem 7.1.1, P = [X1 |X2 ] is an
orthogonal matrix. By replacing X1 by −X1 , if necessary, we can assume
that det P = 1. Then by theorem 6.2.1, we have
                                          ·          ¸
                                             λ1 0
                       P t AP = P −1 AP =              .
                                              0 λ2

Also under the rotation X = P Y ,

      X t AX = (P Y )t A(P Y ) = Y t (P t AP )Y = Y t diag (λ1 , λ2 )Y
               = λ1 x21 + λ2 y12 .

EXAMPLE 7.1.1 Let A be the symmetric matrix
                          ·         ¸
                             12 −6
                     A=               .
                            −6   7

Find a proper orthogonal matrix P such that P t AP is diagonal.

Solution. The characteristic equation of A is λ2 − 19λ + 48 = 0, or

                            (λ − 16)(λ − 3) = 0.

Hence A has distinct eigenvalues λ1 = 16 and λ2 = 3. We find corresponding
eigenvectors                ·     ¸           · ¸
                              −3                 2
                       X1 =         and X2 =         .
                                2                3
                       √
Now ||X1 || = ||X2 || = 13. So we take
                             ·            ¸                      ·       ¸
                      1              −3                 1            2
                X1 = √                        and X2 = √                     .
                      13              2                  13          3

Then if P = [X1 |X2 ], the proof of theorem 7.1.5 shows that
                                              ·          ¸
                                 t                16 0
                            P AP =                           .
                                                   0 3

However det P = −1, so replacing X1 by −X1 will give det P = 1.
7.1. THE EIGENVALUE METHOD                                                135


                                          y       y
                                                      2

                                              4


                                              2


                                                                      x
                             -4     -2                    2       4


                                              -2              x
                                                              2




                                              -4




           Figure 7.1: 12x2 − 12xy + 7y 2 + 60x − 38y + 31 = 0.



REMARK   · 7.1.2
              ¸      (A shortcut) Once we have · determined
                                                    ¸           one eigenvec-
            a                                   −b
tor X1 =        , the other can be taken to be        , as these these vectors
            b                                    a
are always orthogonal. Also P = [X1 |X2 ] will have det P = a2 + b2 > 0.

    We now apply the above ideas to determine the geometric nature of
second degree equations in x and y.

EXAMPLE 7.1.2 Sketch the curve determined by the equation

                 12x2 − 12xy + 7y 2 + 60x − 38y + 31 = 0.

Solution. With P taken to be the proper orthogonal matrix defined in the
previous example by
                          ·      √       √ ¸
                              3/√13 2/√13
                     P =                       ,
                            −2/ 13 3/ 13

then as theorem 7.1.1 predicts, P is a rotation matrix and the transformation
                            · ¸                 ·    ¸
                               x                  x1
                       X=           = PY = P
                               y                  y1
136    CHAPTER 7. IDENTIFYING SECOND DEGREE EQUATIONS

or more explicitly
                          3x1 + 2y1     −2x1 + 3y1
                     x=     √       ,y=   √        ,                    (7.8)
                              13             13
will rotate the x, y axes to positions given by the respective columns of P .
(More generally, we can always arrange for the x1 axis to point either into
the first or fourth
               ·    quadrant.)
                          ¸
                  12 −6
    Now A =                 is the matrix of the quadratic form
                 −6    7

                            12x2 − 12xy + 7y 2 ,

so we have, by Theorem 7.1.5

                     12x2 − 12xy + 7y 2 = 16x21 + 3y12 .

Then under the rotation X = P Y , our original quadratic equation becomes
                       60               38
       16x21 + 3y12 + √ (3x1 + 2y1 ) − √ (−2x1 + 3y1 ) + 31 = 0,
                        13               13
or
                               256     6
                16x21 + 3y12 + √ x1 + √ y1 + 31 = 0.
                                13     13
Now complete the square in x1 and y1 :
               µ              ¶    µ        ¶
                       16                2
            16 x21 + √ x1 + 3 y12 + √ y1 + 31 = 0,
                        13               13

    µ         ¶2    µ          ¶2      µ    ¶2   µ    ¶2
           8               1             8         1
  16 x1 + √      + 3 y1 + √       = 16 √       +3 √      − 31
           13               13           13        13
                                  = 48.                   (7.9)

Then if we perform a translation of axes to the new origin (x1 , y1 ) =
(− √813 , − √113 ):
                                    8             1
                      x 2 = x 1 + √ , y2 = y 1 + √ ,
                                     13           13
equation 7.9 reduces to
                               16x22 + 3y22 = 48,
or
                                x22  y2
                                    + 2 = 1.
                                3    16
7.1. THE EIGENVALUE METHOD                                                 137




                                    y




                                                  x




                             x2 y 2
              Figure 7.2:       + 2 = 1, 0 < b < a: an ellipse.
                             a2  b


This equation is now in one of the standard forms listed below as Figure 7.2
and is that of a whose centre is at (x2 , y2 ) = (0, 0) and whose axes of
symmetry lie along the x2 , y2 axes. In terms of the original x, y coordinates,
we find that the centre is (x, y) = (−2, 1). Also Y = P t X, so equations 7.8
can be solved to give
                             3x1 − 2y1        2x1 + 3y1
                      x1 =     √       , y1 =   √       .
                                 13               13
Hence the y2 –axis is given by
                                         8
                        0 = x 2 = x1 + √
                                         13
                                  3x − 2y    8
                                =   √      +√ ,
                                      13     13
or 3x − 2y + 8 = 0. Similarly the x2 axis is given by 2x + 3y + 1 = 0.
    This ellipse is sketched in Figure 7.1.
   Figures 7.2, 7.3, 7.4 and 7.5 are a collection of standard second degree
equations: Figure 7.2 is an ellipse; Figures 7.3 are hyperbolas (in both these
                                                    b
examples, the asymptotes are the lines y = ± x); Figures 7.4 and 7.5
                                                    a
represent parabolas.

EXAMPLE 7.1.3 Sketch y 2 − 4x − 10y − 7 = 0.
138     CHAPTER 7. IDENTIFYING SECOND DEGREE EQUATIONS




            y                                           y




                          x                                           x




                        x2 y 2               x2 y 2
      Figure 7.3: (i)      − 2 = 1;   (ii)      − 2 = −1, 0 < b, 0 < a.
                        a2  b                a2  b




            y
                                                            y



                              x                                           x




           Figure 7.4: (i) y 2 = 4ax, a > 0; (ii) y 2 = 4ax, a < 0.
7.1. THE EIGENVALUE METHOD                                                  139




            y
                                                           y



                           x                                            x




          Figure 7.5: (iii) x2 = 4ay, a > 0; (iv) x2 = 4ay, a < 0.


Solution. Complete the square:
                   y 2 − 10y + 25 − 4x − 32 = 0
                        (y − 5)2 = 4x + 32 = 4(x + 8),
or y12 = 4x1 , under the translation of axes x1 = x + 8, y1 = y − 5. Hence we
get a parabola with vertex at the new origin (x1 , y1 ) = (0, 0), i.e. (x, y) =
(−8, 5).
   The parabola is sketched in Figure 7.6.
EXAMPLE 7.1.4 Sketch the curve x2 − 4xy + 4y 2 + 5y − 9 = 0.
Solution. We have x2 − 4xy + 4y 2 = X t AX, where
                              ·            ¸
                                   1 −2
                          A=                 .
                                 −2      4
The characteristic equation of A is λ2 −5λ = 0, so A has distinct eigenvalues
λ1 = 5 and λ2 = 0. We find corresponding unit length eigenvectors
                              ·      ¸            · ¸
                           1       1           1    2
                    X1 = √             , X2 = √        .
                            5 −2                5 1
Then P = [X1 |X2 ] is a proper orthogonal matrix and under the rotation of
axes X = P Y , or
                                    x1 + 2y1
                            x =        √
                                        5
                                    −2x1 + y1
                            y =        √      ,
                                         5
140     CHAPTER 7. IDENTIFYING SECOND DEGREE EQUATIONS




                          y                y
                           1
                                               12


                                               8
                                                                  x
                                                                      1
                                               4

                                                                  x
                               -8    -4             4   8    12

                                               -4


                                               -8


                      Figure 7.6: y 2 − 4x − 10y − 7 = 0.


we have
                    x2 − 4xy + 4y 2 = λ1 x21 + λ2 y12 = 5x21 .
The original quadratic equation becomes
                     √
                2      5
              5x1 + √ (−2x1 + y1 ) − 9 = 0
                       5
                 2     2       √
              5(x1 − √ x1 ) + 5y1 − 9 = 0
                        5
                      1 2         √      √         √
              5(x1 − √ ) = 10 − 5y1 =      5(y1 − 2 5),
                        5
or 5x22 = − √15 y2 , where the x1 , y1 axes have been translated to x2 , y2 axes
using the transformation
                                     1               √
                        x2 = x1 − √ , y2 = y1 − 2 5.
                                      5
Hence √the vertex of the parabola is at (x2 , y2 ) = (0, 0), i.e. (x1 , y1 ) =
( √15 , 2 5), or (x, y) = ( 21 , 8 ). The axis of symmetry of the parabola is the
                           √5 5
line x2 = 0, i.e. x1 = 1/ 5. Using the rotation equations in the form
                                               x − 2y
                                    x1 =         √
                                                  5
7.2. A CLASSIFICATION ALGORITHM                                                      141



                                                   y

                                                   4

                                                                     y
                                                                      2
                                                   2

                                                                     x
                                 -4      -2               2    4
                                                                      x
                                                                          2
                                               -2


                                               -4




                    Figure 7.7: x2 − 4xy + 4y 2 + 5y − 9 = 0.


                                              2x + y
                                      y1 =     √ ,
                                                 5

we have
                        x − 2y   1
                          √    =√ ,           or       x − 2y = 1.
                            5     5
       The parabola is sketched in Figure 7.7.


7.2        A classification algorithm
There are several possible degenerate cases that can arise from the general
second degree equation. For example x2 + y 2 = 0 represents the point (0, 0);
x2 + y 2 = −1 defines the empty set, as does x2 = −1 or y 2 = −1; x2 = 0
defines the line x = 0; (x + y)2 = 0 defines the line x + y = 0; x2 − y 2 = 0
defines the lines x − y = 0, x + y = 0; x2 = 1 defines the parallel lines
x = ±1; (x + y)2 = 1 likewise defines two parallel lines x + y = ±1.
       We state without proof a complete classification 1 of the various cases
   1
    This classification forms the basis of a computer program which was used to produce
the diagrams in this chapter. I am grateful to Peter Adams for his programming assistance.
142     CHAPTER 7. IDENTIFYING SECOND DEGREE EQUATIONS

that can possibly arise for the general second degree equation

                    ax2 + 2hxy + by 2 + 2gx + 2f y + c = 0.            (7.10)

It turns out to be more convenient to first perform a suitable translation of
axes, before rotating the axes. Let
             ¯          ¯
             ¯ a h g ¯
        ∆ = ¯¯ h b f ¯¯ , C = ab − h2 , A = bc − f 2 , B = ca − g 2 .
             ¯          ¯
             ¯ g f c ¯

If C 6= 0, let          ¯     ¯                ¯     ¯
                        ¯ g h ¯                ¯ a g ¯
                       −¯
                        ¯     ¯               −¯
                                               ¯     ¯
                          f b ¯                  h f ¯
                    α=          ,          β=          .               (7.11)
                          C                      C
CASE 1. ∆ = 0.

(1.1) C 6= 0. Translate axes to the new origin (α, β), where α and β are
      given by equations 7.11:

                             x = x1 + α,    y = y1 + β.

      Then equation 7.10 reduces to

                              ax21 + 2hx1 y1 + by12 = 0.

       (a) C > 0: Single point (x, y) = (α, β).
       (b) C < 0: Two non–parallel lines intersecting in (x, y) = (α, β).
           The lines are
                                    √
                      y−β    −h ± −C
                          =                  if b 6= 0,
                      x−α          b
                                     y−β            a
                   x=α       and            = − , if b = 0.
                                     x−α           2h

(1.2) C = 0.

       (a) h = 0.
             (i) a = g = 0.
                (A) A > 0: Empty set.
                (B) A = 0: Single line y = −f /b.
7.2. A CLASSIFICATION ALGORITHM                                               143

              (C) A < 0: Two parallel lines
                                               √
                                          −f ± −A
                                       y=
                                              b
          (ii) b = f = 0.
              (A) B > 0: Empty set.
              (B) B = 0: Single line x = −g/a.
              (C) B < 0: Two parallel lines
                                              √
                                         −g ± −B
                                     x=
                                             a
      (b) h 6= 0.
           (i) B > 0: Empty set.
          (ii) B = 0: Single line ax + hy = −g.
         (iii) B < 0: Two parallel lines
                                                   √
                                  ax + hy = −g ±    −B.

CASE 2. ∆ 6= 0.

(2.1) C 6= 0. Translate axes to the new origin (α, β), where α and β are
      given by equations 7.11:

                            x = x1 + α,   y = y1 + β.

     Equation 7.10 becomes

                                                       ∆
                           ax21 + 2hx1 y1 + by12 = −     .                  (7.12)
                                                       C

     CASE 2.1(i) h = 0. Equation 7.12 becomes ax21 + by12 = −∆
                                                             C .

      (a) C < 0: Hyperbola.
      (b) C > 0 and a∆ > 0: Empty set.
      (c) C > 0 and a∆ < 0.
                                                       q
                                                           g 2 +f 2 −ac
           (i) a = b: Circle, centre (α, β), radius              a      .
          (ii) a 6= b: Ellipse.
144     CHAPTER 7. IDENTIFYING SECOND DEGREE EQUATIONS

      CASE 2.1(ii) h 6= 0.
      Rotate the (x1 , y1 ) axes with the new positive x2 –axis in the direction
      of
                                 [(b − a + R)/2, −h],
                 p
      where R = (a − b)2 + 4h2 .
      Then equation 7.12 becomes
                                                      ∆
                                λ1 x22 + λ2 y22 = −     .                (7.13)
                                                      C
      where
                     λ1 = (a + b − R)/2, λ2 = (a + b + R)/2,
      Here λ1 λ2 = C.

       (a) C < 0: Hyperbola.
           Here λ2 > 0 > λ1 and equation 7.13 becomes

                                     x22 y22   −∆
                                       2
                                         − 2 =     ,
                                     u    v    |∆|

           where                    s             s
                                        |∆|             |∆|
                               u=           ,v=             .
                                        Cλ1            −Cλ2

      (b) C > 0 and a∆ > 0: Empty set.
       (c) C > 0 and a∆ < 0: Ellipse.
           Here λ1 , λ2 , a, b have the same sign and λ1 6= λ2 and equa-
           tion 7.13 becomes
                                      x22 y22
                                         +    = 1,
                                      u2 v 2
           where                   r            r
                                       ∆            ∆
                               u=          ,v=          .
                                     −Cλ1          −Cλ2
(2.1) C = 0.

       (a) h = 0.
            (i) a = 0: Then b 6= 0 and g 6= 0. Parabola with vertex
                                       µ           ¶
                                          −A     f
                                              ,−     .
                                          2gb    b
7.2. A CLASSIFICATION ALGORITHM                                             145

               Translate axes to (x1 , y1 ) axes:

                                                   2g
                                         y12 = −      x1 .
                                                    b
           (ii) b = 0: Then a 6= 0 and f 6= 0. Parabola with vertex
                                       µ          ¶
                                           g −B
                                         − ,        .
                                           a 2f a

               Translate axes to (x1 , y1 ) axes:

                                                   2f
                                         x21 = −      y1 .
                                                    a
      (b) h 6= 0: Parabola. Let

                                           ga + bf
                                      k=           .
                                            a+b

           The vertex of the parabola is

                       (2akf − hk 2 − hac) a(k 2 + ac − 2kg)
                     µ                                       ¶
                                          ,                    .
                                d                  d

           Now translate to the vertex as the new origin, then rotate to
           (x2 , y2 ) axes with the positive x2 –axis along [sa, −sh], where
           s = sign (a).
           (The positive x2 –axis points into the first or fourth quadrant.)
           Then the parabola has equation

                                            −2st
                                    x22 = √         y2 ,
                                           a2 + h 2

           where t = (af − gh)/(a + b).

REMARK 7.2.1 If ∆ = 0, it is not necessary to rotate the axes. Instead
it is always possible to translate the axes suitably so that the coefficients of
the terms of the first degree vanish.

EXAMPLE 7.2.1 Identify the curve

                         2x2 + xy − y 2 + 6y − 8 = 0.                    (7.14)
146       CHAPTER 7. IDENTIFYING SECOND DEGREE EQUATIONS

Solution. Here
                                      1
                                 ¯          ¯
                                 ¯ 2     0 ¯¯
                                 ¯ 1  2
                            ∆ = ¯¯ 2 −1  3 ¯¯ = 0.
                                 ¯ 0  3 −8 ¯
Let x = x1 + α, y = y1 + β and substitute in equation 7.14 to get
      2(x1 + α)2 + (x1 + α)(y1 + β) − (y1 + β)2 + 4(y1 + β) − 8 = 0.         (7.15)
Then equating the coefficients of x1 and y1 to 0 gives
                                    4α + β = 0
                               α + 2β + 4 = 0,
which has the unique solution α = − 23 , β = 83 . Then equation 7.15 simplifies
to
                2x21 + x1 y1 − y12 = 0 = (2x1 − y1 )(x1 + y1 ),
so relative to the x1 , y1 coordinates, equation 7.14 describes two lines: 2x1 −
y1 = 0 or x1 + y1 = 0. In terms of the original x, y coordinates, these lines
become 2(x + 23 ) − (y − 83 ) = 0 and (x + 23 ) + (y − 83 ) = 0, i.e. 2x − y + 4 = 0
and x + y − 2 = 0, which intersect in the point
                                     2 8
                 (x, y) = (α, β) = (− , ).
                                     3 3
EXAMPLE 7.2.2 Identify the curve
                      x2 + 2xy + y 2 + +2x + 2y + 1 = 0.                     (7.16)
Solution. Here                     ¯        ¯
                                   ¯ 1 1 1 ¯
                                   ¯        ¯
                              ∆ = ¯¯ 1 1 1 ¯¯ = 0.
                                   ¯ 1 1 1 ¯
Let x = x1 + α, y = y1 + β and substitute in equation 7.16 to get
 (x1 +α)2 +2(x1 +α)(y1 +β)+(y1 +β)2 +2(x1 +α)+2(y1 +β)+1 = 0. (7.17)
Then equating the coefficients of x1 and y1 to 0 gives the same equation
                                2α + 2β + 2 = 0.
Take α = 0, β = −1. Then equation 7.17 simplifies to
                       x21 + 2x1 y1 + y12 = 0 = (x1 + y1 )2 ,
and in terms of x, y coordinates, equation 7.16 becomes
                      (x + y + 1)2 = 0, or x + y + 1 = 0.
7.3. PROBLEMS                                                                   147

7.3     PROBLEMS
 1. Sketch the curves

       (i) x2 − 8x + 8y + 8 = 0;

      (ii) y 2 − 12x + 2y + 25 = 0.

 2. Sketch the hyperbola
                                    4xy − 3y 2 = 8
      and find the equations of the asymptotes.

      [Answer: y = 0 and y = 34 x.]

 3. Sketch the ellipse
                                8x2 − 4xy + 5y 2 = 36
      and find the equations of the axes of symmetry.

      [Answer: y = 2x and x = −2y.]

 4. Sketch the conics defined by the following equations. Find the centre
    when the conic is an ellipse or hyperbola, asymptotes if an hyperbola,
    the vertex and axis of symmetry if a parabola:

       (i) 4x2 − 9y 2 − 24x − 36y − 36 = 0;
                               √        √
      (ii) 5x2 − 4xy + 8y 2 + 4 5x − 16 5y + 4 = 0;

      (iii) 4x2 + y 2 − 4xy − 10y − 19 = 0;

      (iv) 77x2 + 78xy − 27y 2 + 70x − 30y + 29 = 0.

      [Answers: (i) hyperbola, centre (3, −2), asymptotes 2x − 3y − 12 =
      0, 2x + 3y = 0;
                              √
      (ii) ellipse, centre (0, 5);
      (iii) parabola, vertex (− 75 , − 95 ), axis of symmetry 2x − y + 1 = 0;
                                 1    7
      (iv) hyperbola, centre (− 10 , 10 ), asymptotes 7x + 9y + 7 = 0 and
      11x − 3y − 1 = 0.]

 5. Identify the lines determined by the equations:

       (i) 2x2 + y 2 + 3xy − 5x − 4y + 3 = 0;
148    CHAPTER 7. IDENTIFYING SECOND DEGREE EQUATIONS

      (ii) 9x2 + y 2 − 6xy + 6x − 2y + 1 = 0;

      (iii) x2 + 4xy + 4y 2 − x − 2y − 2 = 0.

      [Answers: (i) 2x + y − 3 = 0 and x + y − 1 = 0; (ii) 3x − y + 1 = 0;
      (iii) x + 2y + 1 = 0 and x + 2y − 2 = 0.]
Chapter 8

THREE–DIMENSIONAL
GEOMETRY

8.1    Introduction
In this chapter we present a vector–algebra approach to three–dimensional
geometry. The aim is to present standard properties of lines and planes,
with minimum use of complicated three–dimensional diagrams such as those
involving similar triangles. We summarize the chapter:
    Points are defined as ordered triples of real numbers and the distance
between points P1 = (x1 , y1 , z1 ) and P2 = (x2 , y2 , z2 ) is defined by the
formula                p
               P1 P2 = (x2 − x1 )2 + (y2 − y1 )2 + (z2 − z1 )2 .
                            -
   Directed line segments AB are introduced as three–dimensional column
vectors: If A = (x1 , y1 , z1 ) and B = (x2 , y2 , z2 ), then
                                                  
                                 -     x2 − x 1
                                AB=  y2 − y1  .
                                        z2 − z 1
                                -
   If P is a point, we let P =OP and call P the position vector of P .
   With suitable definitions of lines, parallel lines, there are important ge-
ometrical interpretations of equality, addition and scalar multiplication of
vectors.
  (i) Equality of vectors: Suppose A, B, C, D are distinct points such that
                                      -    -                   -      -
      no three are collinear. Then AB=CD if and only if AB k CD and
       -     -
      AC k BD (See Figure 8.1.)

                                     149
150                CHAPTER 8. THREE–DIMENSIONAL GEOMETRY



                                          z
                                          6

                                                               B
                                                        µ QQ
                                                        ¡
                                                    ¡               Q
                                                ¡                       Q
                                                                            Q
                                              A¡
                                               Q
                                                                             -
                                                                             µ
                                                                             ¡
                                                                              Q D
                                                   Q
                                     O                 Q                    ¡ - y
                                      ¢                    Q            ¡
                                                               Q
                                     ¢                             Q¡
                                 ¢                                 C
                                ¢          -   -            -   -
                            ¢             AB= CD,          AC= BD
                          ¢®               -    -          -
                         x     AB + AC=AD
               Figure 8.1: Equality and addition of vectors.


 (ii) Addition of vectors obeys the parallelogram law: Let A, B, C be non–
      collinear. Then
                                          -        -           -
                                         AB + AC=AD,
                                                   -           -             -      -
      where D is the point such that AB k CD and AC k BD. (See Fig-
      ure 8.1.)
                                                           -            -
(iii) Scalar multiplication of vectors: Let AP = t AB, where A and B are
      distinct points. Then P is on the line AB,

                                              AP
                                                 = |t|
                                              AB

      and

      (a) P = A if t = 0, P = B if t = 1;
      (b) P is between A and B if 0 < t < 1;
       (c) B is between A and P if 1 < t;
      (d) A is between P and B if t < 0.

      (See Figure 8.2.)
8.1. INTRODUCTION                                                        151



                                            z
                                            6


                                                    A
                                                 @
                                                   @
                                                     @
                                                     R P
                                                       @
                                                         R B
                                                         @
                                       O                          - y
                                        ¢
                                       ¢        -       -
                                   ¢            AP = t AB, 0 < t < 1
                                  ¢
                              ¢
                            ¢®
                          x
                 Figure 8.2: Scalar multiplication of vectors.

                                                          
                                           a1             a2
     The dot product X ·Y of vectors X =  b1  and Y =  b2 , is defined
                                           c1             c2
by
                          X · Y = a1 a2 + b1 b2 + c1 c2 .
     The length ||X|| of a vector X is defined by

                                  ||X|| = (X · X)1/2

and the Cauchy–Schwarz inequality holds:

                             |X · Y | ≤ ||X|| · ||Y ||.

The triangle inequality for vector length now follows as a simple deduction:

                           ||X + Y || ≤ ||X|| + ||Y ||.

     Using the equation
                                                    -
                                   AB = || AB ||,
we deduce the corresponding familiar triangle inequality for distance:

                                  AB ≤ AC + CB.
152                   CHAPTER 8. THREE–DIMENSIONAL GEOMETRY

      The angle θ between two non–zero vectors X and Y is then defined by
                                     X ·Y
                        cos θ =                  ,   0 ≤ θ ≤ π.
                                  ||X|| · ||Y ||

This definition makes sense. For by the Cauchy–Schwarz inequality,
                                          X ·Y
                               −1 ≤                   ≤ 1.
                                       ||X|| · ||Y ||

      Vectors X and Y are said to be perpendicular or orthogonal if X · Y = 0.
      Vectors of unit length are called unit vectors. The vectors
                                                   
                            1             0             0
                     i= 0 , j= 1 , k= 0 
                                                  
                            0             0             1

are unit vectors and every vector is a linear combination of i, j and k:
                            
                             a
                            b  = ai + bj + ck.
                             c

     Non–zero vectors X and Y are parallel or proportional if the angle be-
tween X and Y equals 0 or π; equivalently if X = tY for some real number
t. Vectors X and Y are then said to have the same or opposite direction,
according as t > 0 or t < 0.
     We are then led to study straight lines. If A and B are distinct points,
it is easy to show that AP + P B = AB holds if and only if
                           -         -
                          AP = t AB, where 0 ≤ t ≤ 1.

      A line is defined as a set consisting of all points P satisfying
                                                                  -
               P = P0 + tX,       t ∈ R or equivalently P0 P = tX,

for some fixed point P0 and fixed non–zero vector X called a direction vector
for the line.
    Equivalently, in terms of coordinates,

                      x = x0 + ta, y = y0 + tb, z = z0 + tc,

where P0 = (x0 , y0 , z0 ) and not all of a, b, c are zero.
8.1. INTRODUCTION                                                        153

   There is then one and only one line passing passing through two distinct
points A and B. It consists of the points P satisfying
                                 -        -
                                 AP = t AB,

where t is a real number.
    The cross–product X×Y provides us with a vector which is perpendicular
to both X and Y . It is defined in terms of the components of X and Y :
    Let X = a1 i + b1 j + c1 k and Y = a2 i + b2 j + c2 k. Then

                           X × Y = ai + bj + ck,

where        ¯       ¯            ¯        ¯         ¯       ¯
             ¯ b1 c1 ¯            ¯ a 1 c1 ¯         ¯ a1 b1 ¯
           a=¯
             ¯       ¯,      b = −¯
                                  ¯        ¯,      c=¯
                                                     ¯       ¯.
               b2 c2 ¯              a 2 c2 ¯           a2 b2 ¯
   The cross–product enables us to derive elegant formulae for the distance
from a point to a line, the area of a triangle and the distance between two
skew lines.
   Finally we turn to the geometrical concept of a plane in three–dimensional
space.
   A plane is a set of points P satisfying an equation of the form

                       P = P0 + sX + tY, s, t ∈ R,                     (8.1)

where X and Y are non–zero, non–parallel vectors.
   In terms of coordinates, equation 8.1 takes the form

                           x = x0 + sa1 + ta2
                           y = y0 + sb1 + tb2
                           z = z0 + sc1 + tc2 ,

where P0 = (x0 , y0 , z0 ).
   There is then one and only one plane passing passing through three
non–collinear points A, B, C. It consists of the points P satisfying
                             -        -       -
                            AP = s AB +t AC,

where s and t are real numbers.
   The cross–product enables us to derive a concise equation for the plane
through three non–collinear points A, B, C, namely
                            -     -       -
                           AP ·(AB × AC) = 0.
154                  CHAPTER 8. THREE–DIMENSIONAL GEOMETRY

      When expanded, this equation has the form

                               ax + by + cz = d,
                                                                         -
where ai + bj + ck is a non–zero vector which is perpendicular to P1 P2 for
all points P1 , P2 lying in the plane. Any vector with this property is said to
be a normal to the plane.
    It is then easy to prove that two planes with non–parallel normal vectors
must intersect in a line.
    We conclude the chapter by deriving a formula for the distance from a
point to a plane.


8.2       Three–dimensional space
DEFINITION 8.2.1 Three–dimensional space is the set E 3 of ordered
triples (x, y, z), where x, y, z are real numbers. The triple (x, y, z) is called
a point P in E 3 and we write P = (x, y, z). The numbers x, y, z are called,
respectively, the x, y, z coordinates of P .

      The coordinate axes are the sets of points:
{(x, 0, 0)}   (x–axis), {(0, y, 0)} (y–axis), {(0, 0, z)}   (z–axis).
      The only point common to all three axes is the origin O = (0, 0, 0).
      The coordinate planes are the sets of points:
{(x, y, 0)}    (xy–plane), {(0, y, z)} (yz–plane), {(x, 0, z)} (xz–plane).
    The positive octant consists of the points (x, y, z), where x > 0, y >
0, z > 0.
    We think of the points (x, y, z) with z > 0 as lying above the xy–plane,
and those with z < 0 as lying beneath the xy–plane. A point P = (x, y, z)
will be represented as in Figure 8.3. The point illustrated lies in the positive
octant.

DEFINITION 8.2.2 The distance P1 P2 between points P1 = (x1 , y1 , z1 )
and P2 = (x2 , y2 , z2 ) is defined by the formula
                          p
               P1 P2 = (x2 − x1 )2 + (y2 − y1 )2 + (z2 − z1 )2 .

For example, if P = (x, y, z),
                                    p
                             OP =       x2 + y 2 + z 2 .
8.2. THREE–DIMENSIONAL SPACE                                                                    155




                                       z
                     (0, 0, z) 6
                                       Q
                                        Q
                                               Q
                                                   Q
                                                       Q
                                                           Q       P = (x, y, z)



                                   O                                    (0, y, 0)- y
                                    ¢QQ                                 ¢
                                   ¢    Q                           ¢
                               ¢                   Q               ¢
                                                       Q
                (x, 0, 0) ¢                                Q¢(x, y, 0)
                          ¢
                        ¢®
                     x
       Figure 8.3: Representation of three-dimensional space.


                         z
                         6
               (0, 0, z2 ) b
                               b
                                   b
                                           b
                         T                     b
               (0, 0, z1 ) T                       b
                                                       b
                               T                           b
                                                               b
                                   T                               bB
                                       T
                                   A
                                               (0, y1 , 0)                  (0, y2 , 0)   - y
                          b
                         ·T         ·           ¢
                            b
                        · T bb ·               ¢
                       ·    T     b
                                  ·          ¢
                     ·        T · bb        ¢
         (x1 , 0, 0)·          T·     b
                                        b ¢
       (x2 , 0, 0) ·                     b¢
                 ·
                ·
               ·
             ·
             Àx
                                                                        -
                     Figure 8.4: The vector AB.
156                   CHAPTER 8. THREE–DIMENSIONAL GEOMETRY

DEFINITION 8.2.3 If A = (x1 , y1 , z1 ) and B = (x2 , y2 , z2 ) we define
              -
the symbol AB to be the column vector
                                          
                           -     x2 − x 1
                          AB=  y2 − y1  .
                                  z2 − z 1
              -
We let P =OP and call P the position vector of P .
                           -
   The components of AB are the coordinates of B when the axes are
translated to A as origin of coordinates.
                   -
   We think of AB as being represented by the directed line segment from
A to B and think of it as an arrow whose tail is at A and whose head is at
B. (See Figure 8.4.)
                                         -
   Some mathematicians think of AB as representing the translation of
space which takes A into B.
                                           -
    The following simple properties of AB are easily verified and correspond
to how we intuitively think of directed line segments:
         -
  (i) AB= 0 ⇔ A = B;
         -        -
 (ii) BA= − AB;
         -     -      -
(iii) AB + BC=AC (the triangle law);
         -    -       -
(iv) BC=AC − AB= C − B;
 (v) if X is a vector and A a point, there is exactly one point B such that
         -
        AB= X, namely that defined by B = A + X.

      To derive properties of the distance function and the vector function
 -
P1 P2 , we need to introduce the dot product of two vectors in R3 .


8.3       Dot product
                                           
                                   a1      a2
DEFINITION 8.3.1 If X =  b1  and Y =  b2 , then X · Y , the
                                   c1      c2
dot product of X and Y , is defined by
                          X · Y = a1 a2 + b1 b2 + c1 c2 .
8.3. DOT PRODUCT                                                                                             157
                                                B                                                        B
                    6                       >
                                            ½                                  6                     ½
                                        ½                                                           ½
                                    ½                                                           ½
                                ½                                                           =
                                                                                            ½
                            A                                                           A
                                        -                                                   -
                    ¢                                                      ¢
                ¢                                                         ¢
               ¢                    -                                 ¢                         -
            ¢®              v =AB                                   ¢®                 −v =BA

                                Figure 8.5: The negative of a vector.
                                        B                   D                                 B
                                                                                              X
            6                       >
                                    ½                   ½
                                                        >           6                       > XX:
                                                                                            ½   zC
                                                                                                X
                                ½                   ½                                     ½ »»»»
                            ½                   ½                                        ½ »»
                        ½                   ½                                          »»
                                                                                       ½
                    A                   C                                          A
                            -                                                          -
           ¢                -           -                          ¢                   -        -        -
          ¢ (a)             AB=CD                                 ¢ (b)                AC=AB + BC
      ¢                                                       ¢                        -        -        -
    ¢®                                                      ¢®                         BC=AC − AB
Figure 8.6: (a) Equality of vectors; (b) Addition and subtraction of vectors.

The dot product has the following properties:
  (i) X · (Y + Z) = X · Y + X · Z;

 (ii) X · Y = Y · X;

(iii) (tX) · Y = t(X · Y );
                                                           
                                   a
(iv) X · X = a2 + b2 + c2 if X =  b ;
                                   c

 (v) X · Y = X t Y ;

(vi) X · X = 0 if and only if X = 0.
The length of X is defined by
                           p
                    ||X|| = a2 + b2 + c2 = (X · X)1/2 .
                                                                                                -
    We see that ||P|| = OP and more generally || P1 P2 || = P1 P2 , the
distance between P1 and P2 .
158                  CHAPTER 8. THREE–DIMENSIONAL GEOMETRY


                                   z
                                ck 6
                                    Q
                                    6Q
                                          Q
                                              Q
                                                  Q
                                                      Q   P = ai + bj + ck
                                                      ,
                                              ,
                                            ,
                                    k 6   ,
                                       ,j              bj
                                    O, -            -              - y
                                     ¢QQ              ¢
                                 i¢       Q         ¢
                                 ¢®         Q      ¢
                                              Q
                            ai ®¢               s¢
                                                Q
                                                   ai + bj
                               ¢
                             ¢®
                           x
       Figure 8.7: Position vector as a linear combination of i, j and k.

      Vectors having unit length are called unit vectors.
      The vectors
                                                  
                           1              0             0
                    i =  0 , j =  1 , k =  0 
                           0              0             1
are unit vectors. Every vector is a linear combination of i, j and k:
                           
                             a
                           b  = ai + bj + ck.
                             c

(See Figure 8.7.)
   It is easy to prove that

                                ||tX|| = |t| · ||X||,

if t is a real number. Hence if X is a non–zero vector, the vectors
                                           1
                                     ±         X
                                         ||X||
are unit vectors.
      A useful property of the length of a vector is

                     ||X ± Y ||2 = ||X||2 ± 2X · Y + ||Y ||2 .               (8.2)
8.3. DOT PRODUCT                                                       159

   The following important property of the dot product is widely used in
mathematics:
THEOREM 8.3.1 (The Cauchy–Schwarz inequality)
If X and Y are vectors in R3 , then
                           |X · Y | ≤ ||X|| · ||Y ||.                 (8.3)
Moreover if X 6= 0 and Y 6= 0, then
                  X · Y = ||X|| · ||Y || ⇔ Y = tX, t > 0,
                X · Y = −||X|| · ||Y || ⇔ Y = tX, t < 0.
Proof. If X = 0, then inequality 8.3 is trivially true. So assume X 6= 0.
Now if t is any real number, by equation 8.2,
             0 ≤ ||tX − Y ||2 = ||tX||2 − 2(tX) · Y + ||Y ||2
                               = t2 ||X||2 − 2(X · Y )t + ||Y ||2
                               = at2 − 2bt + c,
where a = ||X||2 > 0, b = X · Y, c = ||Y ||2 .
   Hence
                                   2b      c
                           a(t2 − t + ) ≥ 0
                                    a      a
                             b 2 ca − b2
                        µ     ¶
                         t−       +            ≥0 .
                            a          a2
Substituting t = b/a in the last inequality then gives
                                ac − b2
                                        ≥ 0,
                                  a2
so                                   √    √ √
                             |b| ≤    ac = a c
and hence inequality 8.3 follows.
   To discuss equality in the Cauchy–Schwarz inequality, assume X 6= 0
and Y 6= 0.
   Then if X · Y = ||X|| · ||Y ||, we have for all t
             ||tX − Y ||2 = t2 ||X||2 − 2tX · Y + ||Y ||2
                           = t2 ||X||2 − 2t||X|| · ||Y || + ||Y ||2
                           = ||tX − Y ||2 .
Taking t = ||X||/||Y || then gives ||tX − Y ||2 = 0 and hence tX − Y = 0.
Hence Y = tX, where t > 0. The case X ·Y = −||X||·||Y is proved similarly.
160                 CHAPTER 8. THREE–DIMENSIONAL GEOMETRY

COROLLARY 8.3.1 (The triangle inequality for vectors)
If X and Y are vectors, then

                          ||X + Y || ≤ ||X|| + ||Y ||.                     (8.4)

Moreover if X 6= 0 and Y 6= 0, then equality occurs in inequality 8.4 if and
only if Y = tX, where t > 0.

Proof.

                ||X + Y ||2 = ||X||2 + 2X · Y + ||Y ||2
                             ≤ ||X||2 + 2||X|| · ||Y || + ||Y ||2
                             = (||X|| + ||Y ||)2

and inequality 8.4 follows.
   If ||X + Y || = ||X|| + ||Y ||, then the above proof shows that

                             X · Y = ||X|| · ||Y ||.

Hence if X 6= 0 and Y 6= 0, the first case of equality in the Cauchy–Schwarz
inequality shows that Y = tX with t > 0.
    The triangle inequality for vectors gives rise to a corresponding inequality
for the distance function:

THEOREM 8.3.2 (The triangle inequality for distance)
If A, B, C are points, then

                              AC ≤ AB + BC.                                (8.5)

Moreover if B 6= A and B 6= C, then equality occurs in inequality 8.5 if and
          -     -
only if AB= r AC, where 0 < r < 1.

Proof.
                              -              -         -
                    AC = || AC || = || AB + BC ||
                                             -             -
                                     ≤ || AB || + || BC ||
                                     = AB + BC.

Moreover if equality occurs in inequality 8.5 and B 6= A and B 6= C, then
      -                 -
X =AB6= 0 and Y =BC6= 0 and the equation AC = AB + BC becomes
8.4. LINES                                                                   161

||X + Y || = ||X|| + ||Y ||. Hence the case of equality in the vector triangle
inequality gives
                           -              -
                     Y =BC= tX = t AB, where t > 0.

Then
                          -          -        -       -
                         BC = AC − AB= t AB
                          -                   -
                         AC = (1 + t) AB
                          -           -
                         AB = r AC,

where r = 1/(t + 1) satisfies 0 < r < 1.


8.4     Lines
DEFINITION 8.4.1 A line in E 3 is the set L(P0 , X) consisting of all
points P satisfying
                                                          -
             P = P0 + tX,      t ∈ R or equivalently P0 P = tX,             (8.6)

for some fixed point P0 and fixed non–zero vector X. (See Figure 8.8.)
    Equivalently, in terms of coordinates, equation 8.6 becomes

                    x = x0 + ta, y = y0 + tb, z = z0 + tc,

where not all of a, b, c are zero.

   The following familiar property of straight lines is easily verified.

THEOREM 8.4.1 If A and B are distinct points, there is one and only
                                                  -
one line containing A and B, namely L(A, AB) or more explicitly the line
            -       -
defined by AP = t AB, or equivalently, in terms of position vectors:
                                                          -
                  P = (1 − t)A + tB or P = A + t AB .                       (8.7)

   Equations 8.7 may be expressed in terms of coordinates: if A = (x1 , y1 , z1 )
and B = (x2 , y2 , z2 ), then

        x = (1 − t)x1 + tx2 , y = (1 − t)y1 + ty2 , z = (1 − t)z1 + tz2 .
162   CHAPTER 8. THREE–DIMENSIONAL GEOMETRY




                            z
                       @6
                        @             C
                         @           @
                                @      @
                                 @ P0 @
                                   @      @
                                     R P
                                     @      R D
                                            @
                                       @
                                         @
                       O                   @      - y
                        ¢                    @
                       ¢                       @
                   ¢                             @
                  ¢              -     -
              ¢
                                P0 P = t CD
            ¢®
           x
      Figure 8.8: Representation of a line.




                            z
                       @6
                        @
                         @
                             @ A
                              ¢̧@ P
                             ¢ ¡ @
                            ¢ ¡µ @ B
                           ¢ ¡ ©© *@
                          ¢¡©©       @
                     O© ¢¡©            @      - y
                      ¢                  @
                     ¢                     @
                   ¢                         @
                  ¢                   -
              ¢                 P = A + t AB, 0 < t < 1
            ¢®
           x
       Figure 8.9: The line segment AB.
8.4. LINES                                                                 163

   There is an important geometric significance in the number t of the above
equation of the line through A and B. The proof is left as an exercise:
THEOREM 8.4.2 (Joachimsthal’s ratio formulae)
If t is the parameter occurring in theorem 8.4.1, then
                                     ¯      ¯
                        AP           ¯ t ¯ AP
              (i) |t| =    ; (ii) ¯  ¯      ¯=        if P 6= B.
                        AB             1 − t¯ PB
   Also

(iii) P is between A and B if 0 < t < 1;

(iv) B is between A and P if 1 < t;

 (v) A is between P and B if t < 0.

(See Figure 8.9.)
   For example, t = 21 gives the mid–point P of the segment AB:
                                 1
                              P = (A + B).
                                 2
EXAMPLE 8.4.1 L is the line AB, where A = (−4, 3, 1), B = (1, 1, 0);
M is the line CD, where C = (2, 0, 2), D = (−1, 3, −2); N is the line EF ,
where E = (1, 4, 7), F = (−4, −3, −13). Find which pairs of lines intersect
and also the points of intersection.
Solution. In fact only L and N intersect, in the point (− 32 , 53 , 13 ). For
example, to determine if L and N meet, we start with vector equations for
L and N :                       -                -
                    P = A + t AB, Q = E + s EF ,
equate P and Q and solve for s and t:
    (−4i + 3j + k) + t(5i − 2j − k) = (i + 4j + 7k) + s(−5i − 7j − 20k),
which on simplifying, gives
                                5t + 5s = 5
                              −2t + 7s = 1
                              −t + 20s = 6
This system has the unique solution t = 32 , s = 31 and this determines a
corresponding point P where the lines meet, namely P = (− 32 , 53 , 13 ).
    The same method yields inconsistent systems when applied to the other
pairs of lines.
164                  CHAPTER 8. THREE–DIMENSIONAL GEOMETRY

EXAMPLE 8.4.2 If A = (5, 0, 7) and B = (2, −3, 6), find the points P
on the line AB which satisfy AP/P B = 3.

Solution. Use the formulae
                                 -
                                                ¯       ¯
                                                ¯ t ¯ AP
                  P = A + t AB          and     ¯ 1 − t ¯ = P B = 3.
                                                ¯       ¯

Then
                                   t
                                      = 3 or − 3,
                                  1−t
so t = 34 or t = 32 . The corresponding points are ( 11   9 25          1 9 11
                                                      4 , 4 , 4 ) and ( 2 , 2 , 2 ).

DEFINITION 8.4.2 Let X and Y be non–zero vectors. Then X is parallel
or proportional to Y if X = tY for some t ∈ R. We write XkY if X is parallel
to Y . If X = tY , we say that X and Y have the same or opposite direction,
according as t > 0 or t < 0.

DEFINITION 8.4.3 if A and B are distinct points on a line L, the non–
              -
zero vector AB is called a direction vector for L.

It is easy to prove that any two direction vectors for a line are parallel.

DEFINITION 8.4.4 Let L and M be lines having direction vectors X
and Y , respectively. Then L is parallel to M if X is parallel to Y . Clearly
any line is parallel to itself.

It is easy to prove that the line through a given point A and parallel to a
                                                     -
given line CD has an equation P = A + t CD.

THEOREM 8.4.3 Let X = a1 i + b1 j + c1 k and Y = a2 i + b2 j + c2 k be
non–zero vectors. Then X is parallel to Y if and only if
                 ¯       ¯ ¯           ¯ ¯         ¯
                 ¯ a1 b1 ¯ ¯ b1 c1 ¯ ¯ a1 c1 ¯
                 ¯ a2 b2 ¯ ¯ b2 c2 ¯ ¯ a2 c2 ¯ = 0.
                 ¯       ¯=¯           ¯=¯         ¯             (8.8)

Proof. The case of equality in the Cauchy–Schwarz inequality (theorem 8.3.1)
shows that X and Y are parallel if and only if

                                |X · Y | = ||X|| · ||Y ||.

Squaring gives the equivalent equality

             (a1 a2 + b1 b2 + c1 c2 )2 = (a21 + b21 + c21 )(a22 + b22 + c22 ),
8.4. LINES                                                                        165

which simplifies to

             (a1 b2 − a2 b1 )2 + (b1 c2 − b2 c1 )2 + (a1 c2 − a2 c1 )2 = 0,

which is equivalent to

              a1 b2 − a2 b1 = 0, b1 c2 − b2 c1 = 0, a1 c2 − a2 c1 = 0,

which is equation 8.8.
    Equality of geometrical vectors has a fundamental geometrical interpre-
tation:

THEOREM 8.4.4 Suppose A, B, C, D are distinct points such that no
                               -       -                     -     -          -   -
three are collinear. Then AB=CD if and only if AB k CD and AC k BD
(See Figure 8.1.)
             -        -
Proof. If AB=CD then

                               B − A = D − C,
                               C−A = D−B
         -        -           -      -           -       -
and so AC=BD. Hence AB k CD and AC k BD.
                                   -       -         -       -
     Conversely, suppose that AB k CD and AC k BD. Then
                          -        -                 -       -
                          AB= s CD         and   AC= t BD,

or
                  B − A = s(D − C) and           C − A = tD − B.
We have to prove s = 1 or equivalently, t = 1.
  Now subtracting the second equation above from the first, gives

                          B − C = s(D − C) − t(D − B),

so
                          (1 − t)B = (1 − s)C + (s − t)D.
If t 6= 1, then
                              1−s       s−t
                              B=  C+         D
                              1−t       1−t
and B would lie on the line CD. Hence t = 1.
166                     CHAPTER 8. THREE–DIMENSIONAL GEOMETRY

8.5       The angle between two vectors
DEFINITION 8.5.1 Let X and Y be non–zero vectors. Then the angle
between X and Y is the unique value of θ defined by

                                       X ·Y
                          cos θ =                  ,   0 ≤ θ ≤ π.
                                    ||X|| · ||Y ||

REMARK 8.5.1 By Cauchy’s inequality, we have

                                            X ·Y
                                −1 ≤                    ≤ 1,
                                         ||X|| · ||Y ||

so the above equation does define an angle θ.

      In terms of components, if X = [a1 , b1 , c1 ]t and Y = [a2 , b2 , c2 ]t , then

                                    a1 a2 + b1 b2 + c1 c2
                        cos θ = p 2            p                .                (8.9)
                                 a1 + b21 + c21 a22 + b22 + c22

The next result is the well-known cosine rule for a triangle.

THEOREM 8.5.1 (Cosine rule) If A, B, C are points with A 6= B and
                                                       -       -
A 6= C, then the angle θ between vectors AB and AC satifies

                                       AB 2 + AC 2 − BC 2
                            cos θ =                       ,                     (8.10)
                                           2AB · AC
or equivalently

                        BC 2 = AB 2 + AC 2 − 2AB · AC cos θ.

(See Figure 8.10.)

Proof. Let A = (x1 , y1 , z1 ), B = (x2 , y2 , z2 ), C = (x3 , y3 , z3 ). Then
                    -
                   AB = a1 i + b1 j + c1 k
                    -
                   AC = a2 i + b2 j + c2 k
                    -
                   BC = (a2 − a1 )i + (b2 − b1 )j + (c2 − c1 )k,

where
             ai = xi+1 − x1 , bi = yi+1 − y1 , ci = zi+1 − z1 , i = 1, 2.
8.5. THE ANGLE BETWEEN TWO VECTORS                                                             167


                                                z
                                                6

                                                                   B
                                                               ¡C
                                                           ¡        C
                                                      ¡                 C
                                                    A¡
                                                     Qθ
                                                                         C
                                                                             C
                                                       Q
                                           O               Q         C                   - y
                                                               Q
                                            ¢                      Q C
                                           ¢                        QC
                                       ¢                                         C
                                      ¢                        2                 2   2
                                  ¢             cos θ = AB 2AB·AC
                                                           +AC −BC
                                ¢®
                           x
                  Figure 8.10: The cosine rule for a triangle.


Now by equation 8.9,

                                               a1 a2 + b1 b2 + c1 c2
                            cos θ =                                  .
                                                    AB · AC
Also

       AB 2 + AC 2 − BC 2 = (a21 + b21 + c21 ) + (a22 + b22 + c22 )
                                           − ((a2 − a1 )2 + (b2 − b1 )2 + (c2 − c1 )2 )
                                = 2a1 a2 + 2b1 b2 + c1 c2 .

Equation 8.10 now follows, since
                            -         -
                           AB · AC= a1 a2 + b1 b2 + c1 c2 .

EXAMPLE 8.5.1 Let A = (2, 1, 0), B = (3, 2, 0), C = (5, 0, 1). Find
                                       -              -
the angle θ between vectors AB and AC.

Solution.
                                                      -        -
                                              AB · AC
                                      cos θ =         .
                                              AB · AC
Now
                       -                                   -
                     AB= i + j                  and       AC= 3i − j + k.
168                CHAPTER 8. THREE–DIMENSIONAL GEOMETRY


                                           z
                                           6

                                                            B
                                                        ¡C
                                                    ¡        C
                                                  ¡              C
                                                  Q
                                                  Q
                                               A¡
                                                Q¡
                                                                  C
                                                                      C
                                                  Q
                                      O             Q         C                   - y
                                                        Q
                                       ¢                    Q C
                                      ¢                      QC
                                  ¢                                       C
                                 ¢
                             ¢             AB 2 + AC 2 = BC 2
                           ¢®
                         x
        Figure 8.11: Pythagoras’ theorem for a right–angled triangle.


Hence
                                                      √
                    1 × 3 + 1 × (−1) + 0 × 1      2     2
         cos θ = √            p                =√ √ =√ .
                  12 + 12 + 02 32 + (−1)2 + 12   2 11  11
                   √
                  2
Hence θ = cos−1 √11 .

DEFINITION 8.5.2 If X and Y are vectors satisfying X · Y = 0, we say
X is orthogonal or perpendicular to Y .
                                                                                        -
REMARK 8.5.2 If A, B, C are points forming a triangle and AB is or-
              -                                             -                 -
thogonal to AC, then the angle θ between AB and AC satisfies cos θ = 0
and hence θ = π2 and the triangle is right–angled at A.
   Then we have Pythagoras’ theorem:

                             BC 2 = AB 2 + AC 2 .                                           (8.11)

We also note that BC ≥ AB and BC ≥ AC follow from equation 8.11. (See
Figure 8.11.)


EXAMPLE 8.5.2 Let A = (2, 9, 8), B = (6, 4, −2), C = (7, 15, 7). Show
      -        -
that AB and AC are perpendicular and find the point D such that ABDC
forms a rectangle.
8.5. THE ANGLE BETWEEN TWO VECTORS                                       169


                                        z
                                          6@ A
                                            C@
                                             C @
                                              C @
                                               C       @
                                                C      ¡@ P
                                                  C @¡@
                                                   C ¡ ÃÃ  @ B
                                                    C¡
                                                     Ã ÃÃ   @
                                       O       C              @ - y
                                        ¢                      @
                                       ¢
                                   ¢
                                  ¢
                              ¢
                            ¢®
                           x
                 Figure 8.12: Distance from a point to a line.


Solution.
         -       -
        AB · AC= (4i − 5j − 10k) · (5i + 6j − k) = 20 − 30 + 10 = 0.
         -           -
Hence AB and AC are perpendicular. Also, the required fourth point D
clearly has to satisfy the equation
                     -     -                                   -
                     BD=AC, or equivalently D − B =AC .

Hence
                     -
        D = B+ AC= (6i + 4j − 2k) + (5i + 6j − k) = 11i + 10j − 3k,

so D = (11, 10, −3).

THEOREM 8.5.2 (Distance from a point to a line) If C is a point
and L is the line through A and B, then there is exactly one point P on L
             -                              -
such that CP is perpendicular to AB, namely
                                                    -    -
                                            -      AC · AB
                         P = A + t AB,          t=         .           (8.12)
                                                    AB 2
Moreover if Q is any point on L, then CQ ≥ CP and hence P is the point
on L closest to C.
170                  CHAPTER 8. THREE–DIMENSIONAL GEOMETRY

      The shortest distance CP is given by
                                             -    -
                             q
                               AC 2 AB 2 − (AC · AB)2
                       CP =                           .                 (8.13)
                                        AB
(See Figure 8.12.)
                           -                        -                     -
Proof. Let P = A + t AB and assume that CP is perpendicular to AB.
Then
                                        -       -
                                        CP · AB = 0
                                                -
                                    (P − C)· AB = 0
                                    -           -
                           (A + t AB −C)· AB = 0
                                -       -       -
                               (CA +t AB)· AB = 0
                          -    -        -       -
                         CA · AB +t(AB · AB) = 0
                          -    -        -       -
                      − AC · AB +t(AB · AB) = 0,

so equation 8.12 follows.
    The inequality CQ ≥ CP , where Q is any point on L, is a consequence
of Pythagoras’ theorem.
                 -        -
      Finally, as CP and P A are perpendicular, Pythagoras’ theorem gives

                     CP 2 = AC 2 − P A2
                                            -
                           = AC 2 − ||t AB ||2
                           = AC 2 − t2 AB 2
                                     - - 2
                                       AC · AB 
                           = AC 2 −             AB 2
                                         AB 2
                                                -   -
                               AC 2 AB 2 − (AC · AB)2
                           =                          ,
                                         AB 2
as required.
EXAMPLE 8.5.3 The closest point on the line through A = (1, 2, 1) and
                                      17 19 20
B = (2, −1, 3) to the origin is P = ( 14 , 14 , 14 ) and the corresponding
                          5
                            √
shortest distance equals 14 42.
   Another application of theorem 8.5.2 is to the projection of a line segment
on another line:
8.5. THE ANGLE BETWEEN TWO VECTORS                                                                     171


                                          z                     C1
                                                                PP
                                          6                 ¡        PP
                                                        ¡                    PP
                                                                                     PP
                                A@                  ¡                                        P
                                          @   ¡                                              " C
                                                                                         "         2
                                           @¡@                                       "
                                                                                 "
                                           P1@¡                              "
                                              @                          "
                                                                     "
                                                    @ """"

                                     O               P@
                                                      2@
                                                        "
                                                                                              - y
                                      ¢                   @
                                     ¢                      @            B
                                 ¢                                   @
                                ¢
                            ¢
                          ¢®
                         x
        Figure 8.13: Projecting the segment C1 C2 onto the line AB.

THEOREM 8.5.3 (The projection of a line segment onto a line)
Let C1 , C2 be points and P1 , P2 be the feet of the perpendiculars from
C1 and C2 to the line AB. Then
                                                 -
                                P1 P2 = | C1 C2 ·n̂|,

where
                                               1 -
                                     n̂ =        AB .
                                              AB
Also
                                     C1 C2 ≥ P 1 P 2 .                                             (8.14)

(See Figure 8.13.)
Proof. Using equations 8.12, we have
                                          -                          -
                   P1 = A + t1 AB,              P2 = A + t2 AB,

where                      -              -                 -        -
                         AC1 · AB                    AC2 · AB
                    t1 =          ,             t2 =          .
                           AB 2                        AB 2
Hence
                    -                           -                        -
                  P1 P2 = (A + t2 AB) − (A + t1 AB)
                                                -
                         = (t2 − t1 ) AB,
172                    CHAPTER 8. THREE–DIMENSIONAL GEOMETRY

so
                                     -
                      P1 P2 = || P1 P2 || = |t2 − t1 |AB
                               ¯ -       -        -    -¯
                                                         ¯
                               ¯
                               ¯ AC2 · AB AC1 · AB ¯
                            = ¯¯       2
                                              −          ¯ AB
                               ¯ AB                AB 2 ¯¯
                               ¯ -         -¯
                               ¯              ¯
                               ¯C1 C2 · AB ¯
                               ¯              ¯
                            =           2
                                                AB
                               ¯ AB ¯
                               ¯ -        ¯
                            = ¯¯C1 C2 ·n̂¯¯ ,

where n̂ is the unit vector
                                     1 -
                                       AB .
                                    n̂ =
                                    AB
Inequality 8.14 then follows from the Cauchy–Schwarz inequality 8.3.

DEFINITION 8.5.3 Two non–intersecting lines are called skew if they
have non–parallel direction vectors.

Theorem 8.5.3 has an application to the problem of showing that two skew
lines have a shortest distance between them. (The reader is referred to
problem 16 at the end of the chapter.)
    Before we turn to the study of planes, it is convenient to introduce the
cross–product of two vectors.


8.6       The cross–product of two vectors
DEFINITION 8.6.1 Let X = a1 i + b1 j + c1 k and Y = a2 i + b2 j + c2 k.
Then X × Y , the cross–product of X and Y , is defined by

                               X × Y = ai + bj + ck,

where            ¯       ¯              ¯        ¯       ¯       ¯
                 ¯ b1 c1 ¯              ¯ a 1 c1 ¯       ¯ a1 b1 ¯
               a=¯
                 ¯       ¯,        b = −¯
                                        ¯        ¯,    c=¯
                                                         ¯       ¯.
                   b2 c2 ¯                a 2 c2 ¯         a2 b2 ¯

The vector cross–product has the following properties which follow from
properties of 2 × 2 and 3 × 3 determinants:

     (i) i × j = k,   j × k = i,   k × i = j;
8.6. THE CROSS–PRODUCT OF TWO VECTORS                                     173

 (ii) X × X = 0;

 (iii) Y × X = −X × Y ;

 (iv) X × (Y + Z) = X × Y + X × Z;

  (v) (tX) × Y = t(X × Y );

 (vi) (Scalar triple product formula) if Z = a3 i + b3 j + c3 k, then
                                  ¯            ¯
                                  ¯ a1 b1 c1 ¯
                                  ¯            ¯
                   X · (Y × Z) = ¯¯ a2 b2 c2 ¯¯ = (X × Y ) · Z;
                                  ¯ a3 b3 c3 ¯

(vii) X · (X × Y ) = 0 = Y · (X × Y );
                      p
(viii) ||X × Y || =       ||X||2 ||Y ||2 − (X · Y )2 ;

 (ix) if X and Y are non–zero vectors and θ is the angle between X and Y ,
      then
                         ||X × Y || = ||X|| · ||Y || sin θ.

(See Figure 8.14.)
    From theorem 8.4.3 and the definition of cross–product, it follows that
non–zero vectors X and Y are parallel if and only if X × Y = 0; hence by
(vii), the cross–product of two non–parallel, non–zero vectors X and Y , is
a non–zero vector perpendicular to both X and Y .
LEMMA 8.6.1 Let X and Y be non–zero, non–parallel vectors.
  (i) Z is a linear combination of X and Y , if and only if Z is perpendicular
      to X × Y ;
 (ii) Z is perpendicular to X and Y , if and only if Z is parallel to X × Y .
Proof. Let X and Y be non–zero, non–parallel vectors. Then
                                        X × Y 6= 0.
Then if X × Y = ai + bj + ck, we have
                             ¯           ¯
                             ¯ a b c ¯
       det [X × Y |X|Y ]t = ¯¯ a1 b1 c1 ¯¯ = (X × Y ) · (X × Y ) > 0.
                             ¯           ¯
                             ¯ a2 b2 c2 ¯
174                CHAPTER 8. THREE–DIMENSIONAL GEOMETRY


                                           z
                                           6

                                               I
                                               @       X ×Y
                                                   @
                                                     @        Y-
                                                     ¡@ @
                                                    X@
                                                     ¡
                                                       ¡ θ

                                                   ¡
                                                   ª
                                      O                            - y
                                       ¢
                                      ¢
                                  ¢
                                 ¢
                             ¢
                           ¢®
                         x
                  Figure 8.14: The vector cross–product.


Hence the matrix [X × Y |X|Y ] is non–singular. Consequently the linear
system
                      r(X × Y ) + sX + tY = Z                    (8.15)
has a unique solution r, s, t.
(i) Suppose Z = sX + tY . Then

        Z · (X × Y ) = sX · (X × Y ) + tY · (X × Y ) = s0 + t0 = 0.

Conversely, suppose that

                                  Z · (X × Y ) = 0.                      (8.16)

Now from equation 8.15, r, s, t exist satisfying

                         Z = r(X × Y ) + sX + tY.

Then equation 8.16 gives

            0 = (r(X × Y ) + sX + tY ) · (X × Y )
                = r||X × Y ||2 + sX · (X × Y ) + tY · (Y × X)
                = r||X × Y ||2 .

Hence r = 0 and Z = sX + tY , as required.
(ii) Suppose Z = λ(X × Y ). Then clearly Z is perpendicular to X and Y .
8.6. THE CROSS–PRODUCT OF TWO VECTORS                                  175

   Conversely suppose that Z is perpendicular to X and Y .
   Now from equation 8.15, r, s, t exist satisfying

                        Z = r(X × Y ) + sX + tY.

Then

                     sX · X + tX · Y    = X ·Z =0
                      sY · X + tY · Y   = Y · Z = 0,

from which it follows that

                        (sX + tY ) · (sX + tY ) = 0.

Hence sX + tY = 0 and so s = 0, t = 0. Consequently Z = r(X × Y ), as
required.
    The cross–product gives a compact formula for the distance from a point
to a line, as well as the area of a triangle.

THEOREM 8.6.1 (Area of a triangle)
If A, B, C are distinct non–collinear points, then
  (i) the distance d from C to the line AB is given by
                                        -      -
                                  || AB × AC ||
                               d=               ,                    (8.17)
                                       AB

 (ii) the area of the triangle ABC equals
                 -      -
              || AB × AC ||   ||A × B + B × C + C × A||
                            =                           .            (8.18)
                    2                     2
Proof. The area ∆ of triangle ABC is given by
                                    AB · CP
                              ∆=            ,
                                       2
where P is the foot of the perpendicular from C to the line AB. Now by
formula 8.13, we have
                                              -    -
                            q
                              AC 2 · AB 2 − (AC · AB)2
                  CP =
                                        AB
                                -       -
                             || AB × AC ||
                        =                  ,
                                  AB
176                   CHAPTER 8. THREE–DIMENSIONAL GEOMETRY

which, by property (viii) of the cross–product, gives formula 8.17. The
second formula of equation 8.18 follows from the equations
         -        -
        AB × AC = (B − A) × (C − A)
                      = {(B − A) × C} − {(C − A) × A}
                      = {(B × C − A × C)} − {(B × A − A × A)}
                      = B×C−A×C−B×A
                      = B × C + C × A + A × B,

as required.


8.7     Planes
DEFINITION 8.7.1 A plane is a set of points P satisfying an equation
of the form
                P = P0 + sX + tY, s, t ∈ R,                   (8.19)
where X and Y are non–zero, non–parallel vectors.

For example, the xy–plane consists of the points P = (x, y, 0) and corre-
sponds to the plane equation

                          P = xi + yj = O + xi + yj.

In terms of coordinates, equation 8.19 takes the form

                             x = x0 + sa1 + ta2
                             y = y0 + sb1 + tb2
                             z = z0 + sc1 + tc2 ,

where P0 = (x0 , y0 , z0 ) and (a1 , b1 , c1 ) and (a2 , b2 , c1 2 are non–zero and
non–proportional.

THEOREM 8.7.1 Let A, B, C be three non–collinear points. Then there
is one and only one plane through these points, namely the plane given by
the equation
                                            -       -
                            P = A + s AB +t AC,                             (8.20)
or equivalently
                               -        -       -
                              AP = s AB +t AC .                             (8.21)
(See Figure 8.15.)
8.7. PLANES                                                                 177


                                     z
                                     6


                                                         0
                                                    *PCP
                                                    ©
                                             C©
                                             *
                                             ©               PP
                                          A©               P-P P
                                           P               »»:
                                                             ©
                                         ­ PP
                                         Á      qP»»»»  ©  ©
                                        ­ »»B   »»PP  q© 0
                                    O» ­ »             B      - y
                                     ¢      -        -     -      -
                                    ¢      AB 0 = s AB, AC 0 = t AC
                                ¢
                               ¢            -        -        -
                           ¢               AP = s AB +t AC
                         ¢®
                        x
            Figure 8.15: Vector equation for the plane ABC.

Proof. First note that equation 8.20 is indeed the equation of a plane
                          -               -
through A, B and C, as AB and AC are non–zero and non–parallel and
(s, t) = (0, 0), (1, 0) and (0, 1) give P = A, B and C, respectively. Call
this plane P.
    Conversely, suppose P = P0 + sX + tY is the equation of a plane Q
passing through A, B, C. Then A = P0 + s0 X + t0 Y , so the equation for
Q may be written

            P = A + (s − s0 )X + (t − t0 )Y = A + s0 X + t0 Y ;

so in effect we can take P0 = A in the equation of Q. Then the fact that B
and C lie on Q gives equations

               B = A + s1 X + t1 Y,           C = A + s2 X + t2 Y,

or                  -                           -
                   AB= s1 X + t1 Y,           AC= s2 X + t2 Y.            (8.22)
Then equations 8.22 and equation 8.20 show that

                                         P ⊆ Q.
                                                                  -   -
Conversely, it is straightforward to show that because AB and AC are not
parallel, we have               ¯        ¯
                                ¯ s 1 t1 ¯
                                ¯ s2 t2 ¯ 6= 0.
                                ¯        ¯
178                  CHAPTER 8. THREE–DIMENSIONAL GEOMETRY


                                    D z                     C
                                         I6
                                         @                              P
                                           @               º¤       µ
                                                                    ¡
                                            @            ¤ ¡
                                                  @ ¡@  ¤ ¡
                                                   @¡ ¤
                                                     AHHH
                                                                    HH
                                                                         j B
                                                                         H

                                         O                                     - y
                                          ¢
                                         ¢         -            -       -
                                     ¢            AD=AB × AC
                                    ¢              -            -
                                ¢                 AD · AP = 0
                              ¢®
                          x
              Figure 8.16: Normal equation of the plane ABC.


Hence equations 8.22 can be solved for X and Y as linear combinations of
 -        -
AB and AC, allowing us to deduce that

                                              Q ⊆ P.

Hence
                                              Q = P.


THEOREM 8.7.2 (Normal equation for a plane) Let

              A = (x1 , y1 , z1 ), B = (x2 , y2 , z2 ), C = (x3 , y3 , z3 )

be three non–collinear points. Then the plane through A, B, C is given by
                                -             -        -
                               AP ·(AB × AC) = 0,                                    (8.23)

or equivalently,
                       ¯                              ¯
                       ¯ x − x 1 y − y1 z − z 1 ¯
                       ¯                              ¯
                       ¯ x2 − x1 y2 − y1 z2 − z1 ¯ = 0,                              (8.24)
                       ¯                              ¯
                       ¯ x 3 − x 1 y3 − y 1 z 3 − z 1 ¯

where P = (x, y, z). (See Figure 8.16.)
8.7. PLANES                                                                     179


                                           z
                                           6
                                                      KA ai + bj +»ck»
                                                        A »»»»         ¢
                                                       »
                                                     » A             ¢
                                                    ¢      A        ¢
                                                  ¢          »  » ¢
                                                 ¢ »»»»
                                               ¢» »
                                                      ax + by + cz = d
                                      O                               - y
                                       ¢
                                      ¢
                                  ¢
                                 ¢
                             ¢
                           ¢®
                         x
                 Figure 8.17: The plane ax + by + cz = d.


REMARK 8.7.1 Equation 8.24 can be written in more symmetrical form
as                 ¯               ¯
                   ¯ x y z 1 ¯
                   ¯               ¯
                   ¯ x 1 y1 z 1 1 ¯
                   ¯ x2 y2 z2 1 ¯ = 0.                      (8.25)
                   ¯               ¯
                   ¯               ¯
                   ¯ x 3 y3 z 3 1 ¯

Proof. Let P be the plane through A, B, C. Then by equation 8.21, we
                            -                                          -    -
have P ∈ P if and only if AP is a linear combination of AB and AC and so
                                                  -       -                     -
by lemma 8.6.1(i), using the fact that AB × AC6= 0 here, if and only if AP
                     -      -
is perpendicular to AB × AC. This gives equation 8.23.
    Equation 8.24 is the scalar triple product version of equation 8.23, taking
into account the equations
                -
               AP    = (x − x1 )i + (y − y1 )j + (z − z1 )k,
                -
               AB = (x2 − x1 )i + (y2 − y1 )j + (z2 − z1 )k,
                -
               AC = (x3 − x1 )i + (y3 − y1 )j + (z3 − z1 )k.


REMARK 8.7.2 Equation 8.24 gives rise to a linear equation in x, y and
z:
                     ax + by + cz = d,
180                  CHAPTER 8. THREE–DIMENSIONAL GEOMETRY

where ai + bj + ck 6= 0. For
   ¯                              ¯
   ¯ x − x 1 y − y1 z − z 1 ¯
   ¯                              ¯
   ¯ x 2 − x 1 y2 − y 1 z 2 − z 1 ¯ =
   ¯                              ¯
   ¯ x 3 − x 1 y3 − y 1 z 3 − z 1 ¯
        ¯                              ¯ ¯                              ¯
        ¯
        ¯     x        y         z     ¯ ¯
                                       ¯ ¯     x1       y1        z1    ¯
                                                                        ¯
        ¯ x2 − x1 y2 − y1 z2 − z1 ¯ − ¯ x2 − x1 y2 − y1 z2 − z1 ¯ (8.26)
        ¯                              ¯ ¯                              ¯
        ¯ x 3 − x 1 y3 − y 1 z 3 − z 1 ¯ ¯ x 3 − x 1 y3 − y 1 z 3 − z 1 ¯

and expanding the first determinant on the right–hand side of equation 8.26
along row 1 gives an expression

                                   ax + by + cz

where
     ¯                    ¯         ¯                     ¯       ¯                    ¯
     ¯ y − y 1 z2 − z 1 ¯
a = ¯¯ 2                  ¯ , b = − ¯ x 2 − x 1 z 2 − z 1 ¯ , c = ¯ x 2 − x 1 y2 − y 1 ¯ .
                                    ¯                     ¯       ¯                    ¯
       y3 − y 1 z 3 − z 1 ¯         ¯ x 3 − x 1 z3 − z 1  ¯       ¯ x 3 − x 1 y3 − y 1 ¯
                                        -        -
But a, b, c are the components of AB × AC, which in turn is non–zero, as
A, B, C are non–collinear here.
   Conversely if ai + bj + ck 6= 0, the equation

                                 ax + by + cz = d

does indeed represent a plane. For if say a 6= 0, the equation can be solved
for x in terms of y and z:
                   d               b           c 
                   x       −a            −a            −a
                 y  =  0  + y 1  + z 0 ,
                   z         0             0            1

which gives the plane
                               P = P0 + yX + zY,
where P0 = (− ad , 0, 0) and X = − ab i + j and Y = − ac i + k are evidently
non–parallel vectors.


REMARK 8.7.3 The plane equation ax + by + cz = d is called the normal
form, as it is easy to prove that if P1 and P2 are two points in the plane,
                                             -
then ai + bj + ck is perpendicular to P1 P2 . Any non–zero vector with this
property is called a normal to the plane. (See Figure 8.17.)
8.7. PLANES                                                               181

   By lemma 8.6.1(ii), it follows that every vector X normal to a plane
                                                             -      -
through three non–collinear points A, B, C is parallel to AB × AC, since
                        -        -
X is perpendicular to AB and AC.

EXAMPLE 8.7.1 Show that the planes

                  x + y − 2z = 1     and    x + 3y − z = 4

intersect in a line and find the distance from the point C = (1, 0, 1) to this
line.

Solution. Solving the two equations simultaneously gives
                             1 5                3 1
                        x = − + z,         y=    − z,                   (8.27)
                             2 2                2 2
where z is arbitrary. Hence
                                1   3      5   1
                xi + yj + zk = − i − j + z( i − j + k),
                                2   2      2   2
which is the equation of a line L through A = (− 12 , − 32 , 0) and having
direction vector 52 i − 21 j + k.
    We can now proceed in one of three ways to find the closest point on L
to A.
    One way is to use equation 8.17 with B defined by
                               - 5   1
                              AB= i − j + k.
                                 2   2
Another method minimizes the distance CP , where P ranges over L.
     A third way is to find an equation for the plane through C, having
5     1
2 i − 2 j + k as a normal. Such a plane has equation

                              5x − y + 2z = d,

where d is found by substituting the coordinates of C in the last equation.

                         d = 5 × 1 − 0 + 2 × 1 = 7.
                                                                           -
We now find the point P where the plane intersects the line L. Then CP
will be perpendicular to L and CP will be the required shortest distance
from C to L. We find using equations 8.27 that
                        1 5      3 1
                     5(− + z) − ( − z) + 2z = 7,
                        2 2      2 2
182                           CHAPTER 8. THREE–DIMENSIONAL GEOMETRY



                  z
                  6             a1 i + b 1 j + c 1 k
                                                ¢           a2 i + b 2 j + c 2 k
                                KA        »  » ¢
                                               X  X     ¢̧
                                A »»»» ¢            XX¢X
                                                           XX
                              »»A            ¢        ¢        X
                             ¢     A        ¢ L      ¢          ¢
                           ¢         » »  ¢
                                          X  XX                ¢
                          ¢ »»»»         ¢        XXX        ¢
                        »
                        ¢  »           ¢                XX¢
                      a1 x + b 1 y + c 1 z = d 1   a2 x + b 2 y + c 2 z = d 2
              O                                                             - y
                  ¢
              ¢
             ¢
            ¢
        ¢
      ¢®
   x
                        Figure 8.18: Line of intersection of two planes.

so z = 11               4 17 11
       15 . Hence P = ( 3 , 15 , 15 ).
   It is clear that through a given line and a point not on that line, there
passes exactly one plane. If the line is given as the intersection of two planes,
each in normal form, there is a simple way of finding an equation for this
plane. More explicitly we have the following result:

THEOREM 8.7.3 Suppose the planes
                                      a1 x + b 1 y + c 1 z = d 1                   (8.28)
                                      a2 x + b 2 y + c 2 z = d 2                   (8.29)
have non–parallel normals. Then the planes intersect in a line L.
   Moreover the equation
             λ(a1 x + b1 y + c1 z − d1 ) + µ(a2 x + b2 y + c2 z − d2 ) = 0,        (8.30)
where λ and µ are not both zero, gives all planes through L.

(See Figure 8.18.)
Proof. Assume that the normals a1 i + b1 j + c1 k and a2 i + b2 j + c2 k are
non–parallel. Then by theorem 8.4.3, not all of
             ¯       ¯         ¯         ¯         ¯        ¯
             ¯ a1 b1 ¯         ¯ b1 c1 ¯           ¯ a 1 c1 ¯
       ∆1 = ¯¯       ¯ , ∆2 = ¯
                               ¯ b2 c2 ¯ , ∆3 = ¯ a2 c2 ¯
                                         ¯         ¯        ¯         (8.31)
               a2 b2 ¯
8.7. PLANES                                                                          183

are zero. If say ∆1 6= 0, we can solve equations 8.28 and 8.29 for x and y in
terms of z, as we did in the previous example, to show that the intersection
forms a line L.
    We next have to check that if λ and µ are not both zero, then equa-
tion 8.30 represents a plane. (Whatever set of points equation 8.30 repre-
sents, this set certainly contains L.)

      (λa1 + µa2 )x + (λb1 + µb2 )y + (λc1 + µc2 )z − (λd1 + µd2 ) = 0.

Then we clearly cannot have all the coefficients

                     λa1 + µa2 ,    λb1 + µb2 ,     λc1 + µc2

zero, as otherwise the vectors a1 i + b1 j + c1 k and a2 i + b2 j + c2 k would be
parallel.
    Finally, if P is a plane containing L, let P0 = (x0 , y0 , z0 ) be a point not
on L. Then if we define λ and µ by

      λ = −(a2 x0 + b2 y0 + c2 z0 − d2 ),   µ = a 1 x 0 + b 1 y0 + c 1 z 0 − d 1 ,

then at least one of λ and µ is non–zero. Then the coordinates of P0 satisfy
equation 8.30, which therefore represents a plane passing through L and P 0
and hence identical with P.
EXAMPLE 8.7.2 Find an equation for the plane through P0 = (1, 0, 1)
and passing through the line of intersection of the planes

                   x + y − 2z = 1     and    x + 3y − z = 4.

Solution. The required plane has the form

                 λ(x + y − 2z − 1) + µ(x + 3y − z − 4) = 0,

where not both of λ and µ are zero. Substituting the coordinates of P 0 into
this equation gives

                        −2λ + µ(−4) = 0,          λ = −2µ.

So the required equation is

                −2µ(x + y − 2z − 1) + µ(x + 3y − z − 4) = 0,

or
                              −x + y + 3z − 2 = 0.
Our final result is a formula for the distance from a point to a plane.
184                 CHAPTER 8. THREE–DIMENSIONAL GEOMETRY
                                                  KA P0
                                                     A
                                             z         A
                                             6           A
                                                           KA ai + bj +»
                                                                       ck»
                                                             A »»»»        ¢
                                                       » A  »            ¢
                                                     ¢          A       ¢
                                                   ¢           P »»¢
                                                 ¢ »»»»
                                               ¢»»
                                                         ax + by + cz = d
                                        O                                  - y
                                         ¢
                                        ¢
                                    ¢
                                   ¢
                               ¢
                             ¢®
                           x
     Figure 8.19: Distance from a point P0 to the plane ax + by + cz = d.

THEOREM 8.7.4 (Distance from a point to a plane)
Let P0 = (x0 , y0 , z0 ) and P be the plane

                                   ax + by + cz = d.                             (8.32)
                                                               -
Then there is a unique point P on P such that P0 P is normal to P. Morever
                                        |ax0 + by0 + cz0 − d|
                         P0 P =            √
                                             a2 + b2 + c2
(See Figure 8.19.)
Proof. The line through P0 normal to P is given by

                          P = P0 + t(ai + bj + ck),

or in terms of coordinates

                   x = x0 + at,             y = y0 + bt,      z = z0 + ct.

Substituting these formulae in equation 8.32 gives

       a(x0 + at) + b(y0 + bt) + c(z0 + ct) = d
                             t(a2 + b2 + c2 ) = −(ax0 + by0 + cz0 − d),

so                                 µ                               ¶
                                        ax0 + by0 + cz0 − d
                        t=−                                            .
                                            a2 + b2 + c 2
8.8. PROBLEMS                                                                  185

Then
                      -
           P0 P = || P0 P || = ||t(ai + bj + ck)||
                                  p
                             = |t| a2 + b2 + c2
                               |ax0 + by0 + cz0 − d| p 2
                             =                         a + b2 + c2
                                     a2 + b2 + c 2
                               |ax0 + by0 + cz0 − d|
                             =      √                .
                                      a2 + b2 + c2

   Other interesting geometrical facts about lines and planes are left to the
problems at the end of this chapter.


8.8      PROBLEMS
.
    1. Find the point where the line through A = (3, −2, 7) and B =
       (13, 3, −8) meets the xz–plane.
       [Ans: (7, 0, 1).]

    2. Let A, B, C be non–collinear points. If E is the mid–point of the
                                                                  AF
       segment BC and F is the point on the segment EA satisfying EF = 2,
       prove that
                                       1
                                 F = (A + B + C).
                                       3
       (F is called the centroid of triangle ABC.)

    3. Prove that the points (2, 1, 4), (1, −1, 2), (3, 3, 6) are collinear.

    4. If A = (2, 3, −1) and B = (3, 7, 4), find the points P on the line AB
       satisfying PA/PB = 2/5.
       [Ans: 16     29 3
              ¡          ¢   ¡4 1      13
                                          ¢
                7 , 7 , 7 and 3 , 3 , − 3 .]


    5. Let M be the line through A = (1, 2, 3) parallel to the line joining
       B = (−2, 2, 0) and C = (4, −1, 7). Also N is the line joining E =
       (1, −1, 8) and F = (10, −1, 11). Prove that M and N intersect and
       find the point of intersection.
       [Ans: (7, −1, 10).]
186                 CHAPTER 8. THREE–DIMENSIONAL GEOMETRY

  6. Prove that the triangle formed by the points (−3, 5, 6), (−2, 7, 9) and
     (2, 1, 7) is a 30o , 60o , 90o triangle.

  7. Find the point on the line AB closest to the origin, where A =
     (−2, 1, 3) and B = (1, 2, 4). Also find this shortest distance.
           ¡ 16 13 35 ¢       q
     [Ans: − 11  , 11 , 11 and 150
                                 11 .]


  8. A line N is determined by the two planes
                    x + y − 2z = 1,    and    x + 3y − z = 4.
      Find the point P on N closest to the point C = (1, 0, 1) and find the
      distance P C.
                               √
                                 330
      [Ans: 34 , 17   11
            ¡            ¢
                    ,
                 15 15     and  15 .]

  9. Find a linear equation describing the plane perpendicular to the line
     of intersection of the planes x + y − 2z = 4 and 3x − 2y + z = 1 and
     which passes through (6, 0, 2).
      [Ans: 3x + 7y + 5z = 28.]

 10. Find the length of the projection of the segment AB on the line L,
     where A = (1, 2, 3), B = (5, −2, 6) and L is the line CD, where
     C = (7, 1, 9) and D = (−1, 5, 8).
      [Ans: 17
             3 .]

 11. Find a linear equation for the plane through A = (3, −1, 2), perpen-
     dicular to the line L joining B = (2, 1, 4) and C = (−3, −1, 7). Also
     find the point of intersection of L and the plane and hence determine
                                                                   ¢ q 293
     the distance from A to L. [Ans: 5x+2y−3z = 7, 111      52 131
                                                      ¡
                                                        38 38 38 ,
                                                          ,   ,         38 .]


 12. If P is a point inside the triangle ABC, prove that
                               P = rA + sB + tC,
      where r + s + t = 1 and r > 0, s > 0, t > 0.

 13. If B is the point where the perpendicular from A = (6, −1, 11) meets
     the plane 3x + 4y + 5z = 10, find B and the distance AB.
     [Ans: B = 123     −286 255
                                  and AB = √5950 .]
                 ¡              ¢
                   50 , 50 , 50
8.8. PROBLEMS                                                             187

 14. Prove that√the triangle with vertices (−3, 0, 2), (6, 1, 4), (−5, 1, 0)
     has area 12 333.

 15. Find an equation for the plane through (2, 1, 4), (1, −1, 2), (4, −1, 1).
     [Ans: 2x − 7y + 6z = 21.]

 16. Lines L and M are non–parallel in 3–dimensional space and are given
     by equations
                        P = A + sX, Q = B + tY.
      (i) Prove that there is precisely one pair of points P and Q such that
           -
          P Q is perpendicular to X and Y .
      (ii) Explain why P Q is the shortest distance between lines L and M.
           Also prove that
                                                    -
                                      | (X × Y )· AB|
                                 PQ =                 .
                                          kX × Y k

 17. If L is the line through A = (1, 2, 1) and C = (3, −1, 2), while M
     is the line through B = (1, 0, 2) and D = (2, 1, 3), prove that the
     shortest distance between L and M equals √1362 .

 18. Prove that the volume of the tetrahedron formed by four non–coplanar
     points Ai = (xi , yi , zi ), 1 ≤ i ≤ 4, is equal to
                          1        -     -        -
                            | (A1 A2 × A1 A3 )· A1 A4 |,
                          6
     which in turn equals the absolute value of the determinant
                                 ¯               ¯
                                 ¯ 1 x 1 y1 z 1 ¯
                                 ¯               ¯
                              1 ¯¯ 1 x2 y2 z2 ¯¯
                                                   .
                              6 ¯¯ 1 x3 y3 z3 ¯¯
                                 ¯ 1 x 4 y4 z 4 ¯


 19. The points A = (1, 1, 5), B = (2, 2, 1), C = (1, −2, 2) and D =
     (−2, 1, 2) are the vertices of a tetrahedron. Find the equation of the
     line through A perpendicular to the face BCD and the distance of A
     from this face. Also find the shortest distance between the skew lines
     AD and BC.
                                      √
     [Ans: P = (1 + t)(i + j + 5k); 2 3; 3.]
188
Chapter 9

FURTHER READING

Matrix theory has many applications to science, mathematics, economics
and engineering. Some of these applications can be found in the books
[2, 3, 4, 5, 11, 13, 16, 20, 26, 28].
For the numerical side of matrix theory, [6] is recommended. Its bibliography
is also useful as a source of further references.
For applications to:

  1. Graph theory, see [7, 13];

  2. Coding theory, see [8, 15];

  3. Game theory, see [13];

  4. Statistics, see [9];

  5. Economics, see [10];

  6. Biological systems, see [12];

  7. Markov non–negative matrices, see [11, 13, 14, 17];

  8. The general equation of the second degree in three variables, see [18];

  9. Affine and projective geometry, see [19, 21, 22];

 10. Computer graphics, see [23, 24].




                                     189
190
Bibliography

 [1] B. Noble. Applied Linear Algebra, 1969. Prentice Hall, NJ.

 [2] B. Noble and J.W. Daniel. Applied Linear Algebra, third edition, 1988.
     Prentice Hall, NJ.

 [3] R.P. Yantis and R.J. Painter. Elementary Matrix Algebra with Appli-
     cation, second edition, 1977. Prindle, Weber and Schmidt, Inc. Boston,
     Massachusetts.

 [4] T.J. Fletcher. Linear Algebra through its Applications, 1972. Van Nos-
     trand Reinhold Company, New York.

 [5] A.R. Magid. Applied Matrix Models, 1984. John Wiley and Sons, New
     York.

 [6] D.R. Hill and C.B. Moler. Experiments in Computational Matrix Alge-
     bra, 1988. Random House, New York.

 [7] N. Deo. Graph Theory with Applications to Engineering and Computer
     Science, 1974. Prentice–Hall, N. J.

 [8] V. Pless. Introduction to the Theory of Error–Correcting Codes, 1982.
     John Wiley and Sons, New York.

 [9] F.A. Graybill. Matrices with Applications in Statistics,        1983.
     Wadsworth, Belmont Ca.

[10] A.C. Chiang. Fundamental Methods of Mathematical Economics, sec-
     ond edition, 1974. McGraw–Hill Book Company, New York.

[11] N.J. Pullman. Matrix Theory and its Applications, 1976. Marcel Dekker
     Inc. New York.

                                   191
[12] J.M. Geramita and N.J. Pullman. An Introduction to the Application
     of Nonnegative Matrices to Biological Systems, 1984. Queen’s Papers
     in Pure and Applied Mathematics 68. Queen’s University, Kingston,
     Canada.

[13] M. Pearl. Matrix Theory and Finite Mathematics, 1973. McGraw–Hill
     Book Company, New York.

[14] J.G. Kemeny and J.L. Snell. Finite Markov Chains, 1967. Van Nostrand
     Reinhold, N.J.

[15] E.R. Berlekamp. Algebraic Coding Theory, 1968. McGraw–Hill Book
     Company, New York.

[16] G. Strang. Linear Algebra and its Applications, 1988. Harcourt Brace
     Jovanovich, San Diego.

[17] H. Minc. Nonnegative Matrices, 1988. John Wiley and Sons, New York.

[18] G.C. Preston and A.R. Lovaglia. Modern Analytic Geometry, 1971.
     Harper and Row, New York.

[19] J.A. Murtha and E.R. Willard. Linear Algebra and Geometry, 1969.
     Holt, Rinehart and Winston, Inc. New York.

[20] L.A. Pipes. Matrix Methods for Engineering, 1963. Prentice–Hall, Inc.
     N. J.

[21] D. Gans. Transformations and Geometries, 1969. Appleton–Century–
     Crofts, New York.

[22] J.N. Kapur. Transformation Geometry, 1976. Affiliated East–West
     Press, New Delhi.

[23] G.C. Reid. Postscript Language Tutorial and Cookbook, 1988. Addison–
     Wesley Publishing Company, New York.

[24] D. Hearn and M.P. Baker. Computer Graphics, 1989. Prentice–Hall,
     Inc. N. J.

[25] C.G. Cullen. Linear Algebra with Applications, 1988. Scott, Foresman
     and Company, Glenview, Illinois.

[26] R.E. Larson and B.H. Edwards. Elementary Linear Algebra, 1988. D.C.
     Heath and Company, Lexington, Massachusetts Toronto.

                                   192
[27] N. Magnenat–Thalman and D. Thalmann. State–of–the–art–in Com-
     puter Animation, 1989. Springer–Verlag Tokyo.

[28] W.K. Nicholson. Elementary Linear Algebra, 1990. PWS–Kent, Boston.




                                 193
Index

adjoint matrix 80                     cosine rule 172
angle between vectors 172             De Moivre’s theorem 110
Apollonius’ circle 103                dependent unknowns 11
Argand diagram 97                     determinant 74
asymptotes 143                             2 × 2 matrix 73
augmented matrix 2                         lower triangular 76
basis 63                                   scalar matrix 76
    left–to–right 64                       Laplace expansion 75
Cauchy-Schwarz inequality 165              diagonal matrix 76
centroid 192                          diagonal matrix 50
characteristic equation 122           differential equations 125
coefficient matrix 2, 27              direction vector 170
cofactor 78                           distance to a plane 190
column vector 27                      dot product 137, 162, 163
complex number 91                     eigenvalue 122
    imaginary part 91                 eigenvector 122
    real part 91                      elementary row matrix 42
    real 91                           elementary row operations 7
    imaginary 92                      ellipse 143, 144
    rationalization 93                factor theorem 97
    complex exponential 110           field 3
    modulus 101                            additive inverse 4
    square root 94                         multiplicative inverse 4
    argument 106                      Gauss’ theorem 97
    complex conjugate 99              Gauss-Jordan algorithm 8
    modulus-argument form 106         Gram matrix 138
    polar representation 106          homogeneous system 16
    ratio formulae 103                hyperbola 143
complex plane 97                      identity matrix 31
consistent system 1, 11               imaginary axis 98
cross-ratio 117                       inconsistent system 1
Cramer’s rule 40, 86                  independent unknowns 12

                                194
inversion 76                            vectors 174
invertible matrix 37               parabola 143
Joachimsthal 168                   parallel lines 170
least squares                           vectors 170
     normal equations 48           parallelogram law 156
     residuals 48                  perpendicular vectors 174
linear combination 17              plane 182
linear equation 1                       normal form 187
linear transformation 27                through 3 points 183, 184
     reflection 29                 position vector 161
     rotation 28                   positive octant 160
     projection 30                 real axis 97
linear independence 41, 60         recurrence relations 33, 35
     left–to–right test            row-echelon form 6
lower half plane 98                     reduced 6
Markov matrix 54                   row–equivalence 7
mathematical induction 32          rotation equations 28, 120
matrix 23                          scalar triple product 179
     addition 23                   skew lines 178
     additive inverse 24           subspace 57
     equality 23                        basis 63
     inverse 37                         column space 58
     orthogonal 136                     dimension 65
     power 32                           generated 58
     product 25                         null space 57
     proper orthogonal 136              row space 58
     rank 68                       Surveyor’s formula 87
     scalar multiple 24            system of equations 1
     singular 37                   Three–dimensional space 160
     skew–symmetric 47                  coordinate axes 160
     symmetric 47                       coordinate planes 160
     subtraction 24                     distance 161
     transpose 46                       line equation 167
minor 74                                projection on a line 177
modular addition 4                 triangle inequality 166
     multiplication 4              trivial solution 17
non–singular matrix 37, 50         unit vectors 28, 164
non–trivial solution 17            upper half plane 98
orthogonal                         vector
     matrix 120, 136                    cross-product 159, 179

                             195
    equality 156, 171
    length 137, 157, 164
    scalar multiplication 156, 168
    of unknowns 27
zero matrix 24




                                     196
SOLUTIONS TO PROBLEMS




     ELEMENTARY

   LINEAR ALGEBRA




     K. R. MATTHEWS

     DEPARTMENT OF MATHEMATICS




      UNIVERSITY OF QUEENSLAND




           First Printing, 1991
                    CONTENTS
PROBLEMS 1.6 ............................................ 1

PROBLEMS 2.4 ............................................ 12

PROBLEMS 2.7 ............................................ 18

PROBLEMS 3.6 ............................................ 32

PROBLEMS 4.1 ............................................ 45

PROBLEMS 5.8 ............................................ 58

PROBLEMS 6.3 ............................................ 69

PROBLEMS 7.3 ............................................ 83

PROBLEMS 8.8 ............................................ 91




                                                              i
                          SECTION 1.6
      ·            ¸           ·             ¸            ·          ¸
          0 0 0                   2 4 0              1       1 2 0
2. (i)             R1 ↔ R2                     R1 → 2 R1               ;
          2 4 0                   0 0 0                      0 0 0
     ·         ¸           ·              ¸                   ·            ¸
        0 1 3                  1 2 4                            1 0 −2
(ii)             R1 ↔ R2                    R1 → R1 − 2R2                    ;
        1 2 4                  0 1 3                            0 1      3
                                                     
         1 1 1                             1    1    0
                   R   →   R   −  R
(iii)  1 1 0  2            2      1 
                                           0    0 −1 
                   R3 → R3 − R1
         1 0 0                             0 −1 −1
                                                                
 R1 → R1 + R3        1 0       0                          1 0 0
                                      R → R2 + R3 
    R3 → −R3  0 1             1  2                      0 1 0 ;
                                        R3 → −R3
     R2 ↔ R3         0 0 −1                               0 0 1
                                                    
          2 0 0                                1 0 0
                      R3 → R3 + 2R1 
(iv)      0 0 0                                0 0 0 .
                        R1 → 12 R1
                 
         −4 0 0                                0 0 0
                                                                        
          1  1     1     2                             1    1    1       2
                                R → R2 − 2R1 
3. (a)  2   3 −1        8  2                         0    1 −3         4 
                                 R3 → R3 − R1
          1 −1 −1 −8                                   0 −2 −2 −10
                                                                        
                      1 0        4 −2                       1 0     4 2
  R1 → R1 − R2 
                      0 1 −3           4  R3 → −1 8 R3
                                                          0 1 −3 4 
 R3 → R3 + 2R2
                      0 0 −8 −2                             0 0     1 14
                                      
                      1 0 0 −3
 R1 → R1 − 4R3 
                      0 1 0 19      4
                                       .
 R2 → R2 + 3R3                       1
                      0 0 1          4
    The augmented matrix has been converted to reduced row–echelon form
and we read off the unique solution x = −3, y = 19       1
                                                 4 , z = 4.
                                                                       
        1   1 −1        2 10                         1   1 −1     2    10
                                  R → R2 − 3R1 
(b)  3 −1         7    4 1  2                      0 −4   10 −2 −29 
                                  R3 → R3 + 5R1
      −5    3 −15 −6 9                               0   8 −20    4    59
                                        
                  1    1 −1       2   10
R3 → R3 + 2R2  0 −4 10 −2 −29 .
                  0    0    0     0    1
    From the last matrix we see that the original system is inconsistent.



                                         1
                                         
      3   −1 7     0            1 −1 1 1
                1 
     2   −1 4  2  R ↔ R  2 −1
                                      4 12 
(c)                 1     3
                                            
     1   −1 1  1            3 −1 7 0 
      6   −4 10 3               6 −4 10 3
                                                                      −1   
                  1 −1 1       1                   1             0   3    2
 R2 → R2 − 2R1              −3  R1 → R1 + R2                          −3
                  0    1 2    2  R →R −R         0             1   2    2
                                                                            
 R3 → R3 − 3R1                      4    4    3 
                                                                            .
                0     2 4 −3                     0             0   0    0 
 R4 → R4 − 6R1                     R3 → R3 − 2R2
                  0    2 4 −3                      0             0   0    0
   The augmented matrix has been converted to reduced row–echelon form
and we read off the complete solution x = − 12 − 3z, y = − 32 − 2z, with z
arbitrary.
                                                            
         2 −1      3 a                         2 −1     3  a
4.  3         1 −5 b  R2 → R2 − R1  1           2 −8 b − a 
       −5 −5 21 c                           −5 −5 21       c
                                                                          
               1    2 −8 b − a                          1  2 −8         b−a
                                    R   → R    − 2R
R1 ↔ R2  2 −1          3     a  2          2      1 
                                                        0 −5     19 −2b + 3a 
                                    R3 → R3 + 5R1
             −5 −5 21         c                         0  5 −19 5b − 5a + c
                                            
                     1 2 −8        b−a
 R3 → R3 + R2            −19      2b−3a
                     0 1
  R2 → −1
                                             
             R              5         5
           5  2
                     0 0      0 3b − 2a + c
                                 (b+a)     
                    1 0 −2 5        5
R1 → R1 − 2R2  0 1 −19           2b−3a     .
                          5         5
                    0 0     0 3b − 2a + c
    From the last matrix we see that the original system is inconsistent if
3b − 2a + c 6= 0. If 3b − 2a + c = 0, the system is consistent and the solution
is
                         (b + a) 2          (2b − 3a) 19
                   x=            + z, y =             + z,
                            5      5            5         5
where z is arbitrary.
                                                               
         1     1 1                                1    1       1
                            R2 → R2 − tR1        0 1−t
5.  t         1 t                                            0 
                        R3 → R3 − (1 + t)R1
       1+t 2 3                                    0 1−t 2−t
                                      
                      1     1     1
 R3 → R3 − R2  0 1 − t           0  = B.
                      0     0    2−t
Case 1. t 6= 2. No solution.

                                      2
                                                
                         1    0 1          1 0 1
  Case 2. t = 2. B =  0 −1 0  →  0 1 0  .
                         0    0 0          0 0 0
     We read off the unique solution x = 1, y = 0.
  6. Method
           1.                                           
        −3    1  1    1                    −4    0   0   4
      1 −3               R1 → R1 − R4 
                1       R2 → R2 − R4  0 −4
                      1                             0   4 
                                                           
      1      1 −3    1                  0     0 −4    4 
                          R3 → R3 − R4
         1    1  1 −3                        1   1   1 −3
                                                      
       1 0 0 −1                                1 0 0 −1
      0 1 0 −1 
                    R4 → R4 − R3 − R2 − R1  0 1 0 −1  .
                                                        
  →  0 0 1 −1                             0 0 1 −1 
       1 1 1 −3                                0 0 0   0
       Hence the given homogeneous system has complete solution
                            x1 = x 4 , x2 = x 4 , x3 = x 4 ,
  with x4 arbitrary.
  Method 2. Write the system as
                            x1 + x2 + x3 + x4 = 4x1
                            x1 + x2 + x3 + x4 = 4x2
                            x1 + x2 + x3 + x4 = 4x3
                            x1 + x2 + x3 + x4 = 4x4 .
  Then it is immediate that any solution must satisfy x1 = x2 = x3 = x4 .
  Conversely, if x1 , x2 , x3 , x4 satisfy x1 = x2 = x3 = x4 , we get a solution.
  7.
               ·                ¸              ·               ¸
                   λ−3  1                           1  λ−3
                               R1 ↔ R2
                    1  λ−3                         λ−3  1
                                       ·                ¸
                                         1    λ−3
                    R2 → R2 − (λ − 3)R1                   = B.
                                         0 −λ2 + 6λ − 8
Case 1: −λ2 + 6λ − 8 6= 0. ·That is¸−(λ − 2)(λ − 4) 6= 0 or λ 6= 2, 4. Here B is
                              1 0
        row equivalent to            :
                              0 1
                            ·          ¸                        ·       ¸
                  1            1 λ−3                               1 0
        R2 → −λ2 +6λ−8 R2                R1 → R1 − (λ − 3)R2              .
                               0    1                              0 1
         Hence we get the trivial solution x = 0, y = 0.

                                           3
                                    ·                ¸
                                         1 −1
Case 2: λ = 2. Then B =                                  and the solution is x = y, with y
                                         0  0
          arbitrary.
                                    ·            ¸
                                         1 1
Case 3: λ = 4. Then B =                              and the solution is x = −y, with y
                                         0 0
          arbitrary.

  8.
                                                             1  1    1
             ·                  ¸                         ·              ¸
                 3  1 1  1                       1      1    3  3    3
                                    R1 →           R1
                 5 −1 1 −1                       3      5 −1 1 −1
                                                                  1     1      1
                                                           ·                     ¸
                                                             1    3     3      3
                                    R2 →         R2 − 5R1
                                                             0 − 83 − 32 − 83
                                                          1 13 13 13
                                                       ·               ¸
                                                 −3
                                    R2 →            R2
                                                  8       0 1 14 1
                                                              1 0 41 0
                                                           ·               ¸
                                                      1
                                    R1 →         R1 − R2                     .
                                                      3       0 1 14 1

  Hence the solution of the associated homogeneous system is
                                1           1
                          x1 = − x3 , x2 = − x3 − x 4 ,
                                4           4
  with x3 and x4 arbitrary.
  9.
                                                                      
      1−n   1             ···           1                R1 → R1 − Rn
                                                         −n 0 · · · n
     1   1 −  n          ···          1                R2 → R2 − Rn
                                                        0 −n · · · n 
  A= .     .                           ..              .. ....    .. 
                                                                     
     ..    ..                      
                          ···           .               .  . ···
                                                               .     . 
       1    1             ··· 1 − n   Rn−1 → Rn−1 − Rn    1 1 ··· 1 − n
                                                                     
          1 0 · · · −1                                    1 0 · · · −1
         0 1 · · · −1                                  0 1 · · · −1 
       → . .         ..   R  → R   − R     · · · − R 1  .. ..      ..  .
                                                                     
                            n     n     n−1
         .. .. · · ·
                         
                       .                                 . . ··· . 
          1 1 ··· 1 − n                                   0 0 ··· 0
  The last matrix is in reduced row–echelon form.
      Consequently the homogeneous system with coefficient matrix A has the
  solution
                       x1 = xn , x2 = xn , . . . , xn−1 = xn ,

                                                     4
       with xn arbitrary.
          Alternatively, writing the system in the form

                                      x1 + · · · + xn = nx1
                                      x1 + · · · + xn = nx2
                                                      ..
                                                       .
                                      x1 + · · · + xn = nxn

       shows that any solution must satisfy nx1 = nx2 = · · · = nxn , so x1 = x2 =
       · · · = xn . Conversely if x1 = xn , . . . , xn−1 = xn , we see that x1 , . . . , xn is a
       solution.
                      ·       ¸
                        a b
       10. Let A =              and assume that ad − bc 6= 0.
                        c d
    Case 1: a 6= 0.
                                                                                    b
                                  1 ab
            ·       ¸           ·      ¸               ·                                  ¸
               a b         1                             1                          a
                      R1 → a R1          R2 → R2 − cR1                            ad−bc
               c d                c d                    0                          a

                                   1 ab
                               ·          ¸                     ·         ¸
                    a                                               1 0
             R2 → ad−bc R2                    R1 → R1 − ab R2                 .
                                   0 1                              0 1
    Case 2: a = 0. Then bc 6= 0 and hence c 6= 0.

                                                  1 dc
                ·       ¸          ·      ¸     ·      ¸   ·      ¸
                   0 b               c d                     1 0
            A=            R1 ↔ R2            →           →          .
                   c d               0 b          0 1        0 1
                                                                ·     ¸
                                                                  1 0
      So in both cases, A has reduced row–echelon form equal to         .
                                                                  0 1
      11. We simplify the augmented matrix of the system using row operations:
                                                                         
         1   2     −3       4                        1   2    −3         4
                                 R → R2 − 3R1 
       3 −1       5        2  2                    0 −7      14      −10 
                 2               R3 → R3 − 4R1                2
         4   1 a − 14 a + 2                          0 −7 a − 2 a − 14
                                                                               8
                                                                              
R3 → R3 − R2     1 2       −3     4                         1 0        1       7
                                 10                                           10
 R2 → −1
       7 R2
                0 1       −2     7
                                      R1 → R1 − 2R2  0 1            −2       7
                                                                                 .
R1 → R1 − 2R2            2
                 0 0 a − 16 a − 4                                   2
                                                            0 0 a − 16 a − 4
           Denote the last matrix by B.




                                                    5
Case 1: a2 − 16 6= 0. i.e. a 6= ±4. Then
                                                        8a+25
                                                               
                                1        1 0 0
                        R3 → a2 −16 R3                 7(a+4)
                                                       10a+54
                        R1 → R1 − R3  0 1 0
                                                               
                                                       7(a+4)   
                        R2 → R2 + 2R3                     1
                                         0 0 1           a+4

        and we get the unique solution
                              8a + 25       10a + 54       1
                        x=             , y=          , z=     .
                              7(a + 4)      7(a + 4)      a+4

                                            8
                                             
                              1 0     1     7
Case 2: a = −4. Then B =  0 1 −2 10       7
                                              , so our system is inconsistent.
                              0 0     0 −8

                                     1 87
                                           
                             1 0
Case 3: a = 4. Then B =  0 1 −2 10      7
                                            . We read off that the system is
                             0 0     0 0
        consistent, with complete solution x = 78 − z, y = 10
                                                            7 + 2z, where z is
        arbitrary.

  12. We reduce the augmented array of the system to reduced row–echelon
  form:
                                                           
             1 0 1 0 1                          1 0 1 0 1
            0 1 0 1 1 
                           R3 → R3 + R1  0 1 0 1 1 
                                                             
           
            1 1 1 1 0                       0 1 0 1 1 
             0 0 1 1 0                          0 0 1 1 0
                                                                           
                   1      0    1   0   1                    1   0   0   1   1
                  0      1    0   1   1  R
                                          1 →  R 1 + R 4 
                                                           0   1   0   1   1 
    R3 → R3 + R2                                                             .
                  0      0    0   0   0    R3 ↔ R4       0   0   1   1   0 
                   0      0    1   1   0                    0   0   0   0   0
  The last matrix is in reduced row–echelon form and we read off the solution
  of the corresponding homogeneous system:

                          x1 = −x4 − x5 = x4 + x5
                          x2 = −x4 − x5 = x4 + x5
                          x3 = −x4 = x4 ,



                                           6
where x4 and x5 are arbitrary elements of Z2 . Hence there are four solutions:

                              x1 x2 x3 x4 x5
                              0 0 0 0 0
                              1 1 0 0 1 .
                              1 1 1 1 0
                              0 0 1 1 1

13. (a) We reduce the augmented matrix to reduced row–echelon form:
                                                    
                 2 1 3 4                    1 3 4 2
               4 1 4 1  R1 → 3R1  4 1 4 1 
                 3 1 2 0                    3 1 2 0
                                                         
                      1         3 4 2               1 3 4 2
      R2 → R2 + R1 
                      0         4 3 3  R2 → 4R2  0 1 2 2 
      R3 → R3 + 2R1
                      0         2 0 4               0 2 0 4
                                                           
                    1 0         3 1                   1 0 0 1
   R1 → R1 + 2R2                     R → R1 + 2R3 
                    0 1         2 2  1               0 1 0 2 .
   R3 → R3 + 3R2                      R2 → R2 + 3R3
                    0 0         1 0                   0 0 1 0
Consequently the system has the unique solution x = 1, y = 2, z = 0.
  (b) Again we reduce the augmented matrix to reduced row–echelon form:
                                                    
                 2 1 3 4                   1 1 0 3
                4 1 4 1  R1 ↔ R3  4 1 4 1 
                 1 1 0 3                   2 1 3 4
                                                   
                       1 1 0 3                1 1 0 3
       R2 → R2 + R1 
                       0 2 4 4  R2 → 3R2  0 1 2 2 
       R3 → R3 + 3R1
                       0 4 3 3                0 4 3 3
                                          
                                   1 0 3 1
                   R1 → R1 + 4R2 
                                   0 1 2 2 .
                   R3 → R3 + R2
                                   0 0 0 0
We read off the complete solution

                             x = 1 − 3z = 1 + 2z
                             y = 2 − 2z = 2 + 3z,

where z is an arbitrary element of Z5 .

                                      7
14. Suppose that (α1 , . . . , αn ) and (β1 , . . . , βn ) are solutions of the system
of linear equations
                         X  n
                                aij xj = bi , 1 ≤ i ≤ m.
                               j=1

Then
                         n
                         X                                 n
                                                           X
                               aij αj = bi      and              aij βj = bi
                         j=1                               j=1

for 1 ≤ i ≤ m.
    Let i = (1 − t)αi + tβi for 1 ≤ i ≤ m. Then ( 1 , . . . , n ) is a solution of
the given system. For
                  n
                  X                      n
                                         X
                         aij j       =         aij {(1 − t)αj + tβj }
                   j=1                   j=1
                                         n
                                         X                           n
                                                                     X
                                     =         aij (1 − t)αj +             aij tβj
                                         j=1                         j=1
                                     = (1 − t)bi + tbi
                                     = bi .

15. Suppose that (α1 , . . . , αn ) is a solution of the system of linear equations
                               n
                               X
                                     aij xj = bi ,    1 ≤ i ≤ m.                     (1)
                               j=1

Then the system can be rewritten as
                         n
                         X                n
                                          X
                               aij xj =         aij αj ,    1 ≤ i ≤ m,
                         j=1              j=1

or equivalently
                         n
                         X
                                aij (xj − αj ) = 0,         1 ≤ i ≤ m.
                         j=1

So we have
                               n
                               X
                                     aij yj = 0,      1 ≤ i ≤ m.
                               j=1

where xj − αj = yj . Hence xj = αj + yj , 1 ≤ j ≤ n, where (y1 , . . . , yn ) is
a solution of the associated homogeneous system. Conversely if (y1 , . . . , yn )

                                                 8
  is a solution of the associated homogeneous system and xj = αj + yj , 1 ≤
  j ≤ n, then reversing the argument shows that (x1 , . . . , xn ) is a solution of
  the system 1 .
  16. We simplify the augmented matrix using row operations, working to-
  wards row–echelon form:
                                                                      
     1 1 −1 1       1                        1   1     −1      1      1
                          R  →  R   − aR
   a 1     1 1     b  2         2      1 
                                             0 1−a 1+a 1−a b−a 
                          R3 → R3 − 3R1
     3 2    0 a 1+a                          0 −1       3    a−3 a−2
                                                    
                           1   1    −1      1     1
                R2 ↔ R3 
                           0   1    −3 3 − a 2 − a 
               R2 → −R2
                           0 1−a 1+a 1−a b−a
                                                                  
                         1 1   −1         1              1
   R3 → R3 + (a − 1)R2  0 1   −3       3−a            2−a          = B.
                                                     2
                         0 0 4 − 2a (1 − a)(a − 2) −a + 2a + b − 2
Case 1: a 6= 2. Then 4 − 2a 6= 0 and

                              1 1 −1      1                 1
                                                                      

                      B→     0   1  −3 3 − a              2−a         .
                                         a−1             −a2 +2a+b−2
                              0 0     1   2                  4−2a

        Hence we can solve for x, y and z in terms of the arbitrary variable w.

Case 2: a = 2. Then                            
                                   1 1 −1 1  1
                             B =  0 1 −3 1  0 .
                                   0 0  0 0 b−2
        Hence there is no solution if b 6= 2. However if b = 2, then
                                                                  
                         1 1 −1 1 1               1 0       2 0 1
                 B =  0 1 −3 1 0  →  0 1 −3 1 0 
                         0 0     0 0 0            0 0       0 0 0

        and we get the solution x = 1 − 2z, y = 3z − w, where w is arbitrary.

  17. (a) We first prove that 1 + 1 + 1 + 1 = 0. Observe that the elements

                          1 + 0,   1 + 1,       1 + a,    1+b



                                            9
are distinct elements of F by virtue of the cancellation law for addition. For
this law states that 1 + x = 1 + y ⇒ x = y and hence x 6= y ⇒ 1 + x 6= 1 + y.
   Hence the above four elements are just the elements 0, 1, a, b in some
order. Consequently
        (1 + 0) + (1 + 1) + (1 + a) + (1 + b) = 0 + 1 + a + b
             (1 + 1 + 1 + 1) + (0 + 1 + a + b) = 0 + (0 + 1 + a + b),
so 1 + 1 + 1 + 1 = 0 after cancellation.
    Now 1 + 1 + 1 + 1 = (1 + 1)(1 + 1), so we have x2 = 0, where x = 1 + 1.
Hence x = 0. Then a + a = a(1 + 1) = a · 0 = 0.
    Next a + b = 1. For a + b must be one of 0, 1, a, b. Clearly we can’t
have a + b = a or b; also if a + b = 0, then a + b = a + a and hence b = a;
hence a + b = 1. Then
                   a + 1 = a + (a + b) = (a + a) + b = 0 + b = b.
Similarly b + 1 = a. Consequently the addition table for F is
    +    0     1    a   b
    0    0     1    a   b
    1    1     0    b   a .
    a    a     b    0   1
    b    b     a    1   0
   We now find the multiplication table. First, ab must be one of 1, a, b;
however we can’t have ab = a or b, so this leaves ab = 1.
   Next a2 = b. For a2 must be one of 1, a, b; however a2 = a ⇒ a = 0 or
a = 1; also
    a2 = 1 ⇒ a2 − 1 = 0 ⇒ (a − 1)(a + 1) = 0 ⇒ (a − 1)2 = 0 ⇒ a = 1;
hence a2 = b. Similarly b2 = a. Consequently the multiplication table for F
is
    × 0 1 a b
     0 0 0 0 0
     1 0 1 a b .
     a 0 a b 1
    b 0 b 1 a

(b) We use the addition and multiplication tables for F :
                                                         
                1 a b a                             1 a b a
                              R → R2 + aR1 
         A= a b b 1  2                            0 0 a a 
                               R3 → R3 + R1
                1 1 1 a                             0 b a 0

                                        10
                                                  
                   1     a b a               1 a b a
                                 R → aR2 
        R2 ↔ R3  0      b a 0  2           0 1 b 0 
                                 R3 → bR3
                   0     0 a a               0 0 1 1
                                                      
                   1     0 a a                   1 0 0 0
                                 R → R1 + aR3 
   R1 ↔ R1 + aR2  0     1 b 0  1               0 1 0 b .
                                 R2 → R2 + bR3
                   0     0 1 1                   0 0 1 1
The last matrix is in reduced row–echelon form.




                                   11
                            Section 2.4
                    
                 a b
2. Suppose B =  c d  and that AB = I2 . Then
                 e f
                         
      ·          ¸   a b       ·     ¸ ·                  ¸
        −1 0 1      c d =      1 0        −a + e −b + f
                                       =                    .
         0 1 0                   0 1         c+e   d+f
                     e f
Hence
                          −a + e = 1 −b + f = 0
                                    ,           ;
                           c+e=0      d+f =1
                      e=a+1               f =b
                                    ,                 ;
                  c = −e = −(a + 1) d = 1 − f = 1 − b
                                           
                                  a     b
                         B =  −a − 1 1 − b  .
                                a+1     b
Next,

        (BA)2 B = (BA)(BA)B = B(AB)(AB) = BI2 I2 = BI2 = B

4. Let pn denote the statement
                                   n               n
                          An = (3 2−1) A + (3−3
                                              2
                                                )
                                                  I2 .

Then p1 asserts that A = (3−1)
                           2 A+
                                (3−3)
                                  2 I2 , which is true. So let n ≥ 1 and
assume pn . Then from (1),

                         n n               n)
                                                   o       n              n
                           (3 −1)
 An+1 = A · An = A            2   A + (3−3
                                         2    I2       = (3 2−1) A2 + (3−3
                                                                         2
                                                                           )
                                                                             A
             (3n −1)                     n)       n          n)       n
         =      2     (4A − 3I2 ) + (3−3
                                       2    A = (3 −1)4+(3−3
                                                       2        A + (3 −1)(−3)
                                                                        2      I2
                 n    n
             (4·3 −3 )−1            n+1
         =          2     A + (3−32 ) I2
             (3n+1 −1)           n+1
         =        2     A + (3−32 ) I2 .

Hence pn+1 is true and the induction proceeds.
5. The equation xn+1 = axn + bxn−1 is seen to be equivalent to
                     ·      ¸ ·         ¸·        ¸
                       xn+1       a b        xn
                              =
                        xn        1 0       xn−1

                                       12
or
                                   Xn = AXn−1 ,
             ·          ¸           ·     ¸
                 xn+1                 a b
where Xn =                  and A =         . Then
                  xn                  1 0

                                    Xn = A n X0

if n ≥ 1. Hence by Question 3,
                    ½ n
                                   (3 − 3n )
      ·      ¸                                  ¾·     ¸
        xn+1          (3 − 1)                       x1
                =              A+            I2
         xn              2             2            x0
                    ½ n        ·         ¸ · 3−3n            ¸¾ ·    ¸
                      (3 − 1) 4 −3                2      0        x1
                =                         +            3−3 n
                         2       1    0           0      2        x0
                                   3−3n
                     n
                                          (3n − 1)(−3) ·
                                                         
                       (3 − 1)2 + 2                             ¸
                                                             x1
                =                                       
                            3n −1               3−3n         x0
                                    2                   2

Hence, equating the (2, 1) elements gives

                         (3n − 1)      (3 − 3n )
                  xn =            x1 +           x0           if n ≥ 1
                             2             2

7. Note: λ1 + λ2 = a + d and λ1 λ2 = ad − bc.
Then

(λ1 + λ2 )kn − λ1 λ2 kn−1 = (λ1 + λ2 )(λn−1
                                        1   + λn−2
                                               1   λ2 + · · · + λ1 λn−2
                                                                    2   + λn−1
                                                                           2   )
                                  −λ1 λ2 (λn−2
                                           1   + λn−3
                                                  1   λ2 + · · · + λ1 λn−3
                                                                       2   + λn−2
                                                                              2   )


                  = (λn1 + λn−1
                            1   λ2 + · · · + λ1 λn−1
                                                 2   )
                        +(λn−1
                           1   λ2 + · · · + λ1 λn−1
                                                2   + λn2 )
                        −(λn−1
                           1   λ2 + · · · + λ1 λn−1
                                                2   )
                  = λn1 + λn−1
                           1   λ2 + · · · + λ1 λn−1
                                                2   + λn2 = kn+1

If λ1 = λ2 , we see

                 kn = λn−1
                       1   + λn−2
                              1   λ2 + · · · + λ1 λn−2
                                                   2   + λn−1
                                                          2
                      = λn−1
                         1   + λn−2
                                1   λ1 + · · · + λ1 λn−2
                                                     1   + λn−1
                                                            1
                      = nλn−1
                          1



                                          13
If λ1 6= λ2 , we see that

    (λ1 − λ2 )kn = (λ1 − λ2 )(λn−1
                               1   + λn−2
                                      1   λ2 + · · · + λ1 λn−2
                                                           2   + λn−1
                                                                  2   )
                        = λn1 + λn−1
                                 1   λ2 + · · · + λ1 λn−1
                                                      2
                            −(λn−1
                               1   λ2 + · · · + λ1 λn−1
                                                    2   + λn2 )
                        = λn1 − λn2 .
               λn −λn
Hence kn = λ11 −λ22 .
We have to prove
                             An = kn A − λ1 λ2 kn−1 I2 . ∗
   n=1:

               A1 = A; also k1 A − λ1 λ2 k0 I2 = k1 A − λ1 λ2 0I2
                                                    = A.

Let n ≥ 1 and assume equation ∗ holds. Then

                   An+1 = An · A = (kn A − λ1 λ2 kn−1 I2 )A
                                        = kn A2 − λ1 λ2 kn−1 A.

Now A2 = (a + d)A − (ad − bc)I2 = (λ1 + λ2 )A − λ1 λ2 I2 . Hence

               An+1 = kn (λ1 + λ2 )A − λ1 λ2 I2 − λ1 λ2 kn−1 A
                         = {kn (λ1 + λ2 ) − λ1 λ2 kn−1 }A − λ1 λ2 kn I2
                         = kn+1 A − λ1 λ2 kn I2 ,

and the induction goes through.
8. Here λ1 , λ2 are the roots of the polynomial x2 − 2x − 3 = (x − 3)(x + 1).
So we can take λ1 = 3, λ2 = −1. Then

                                 3n − (−1)n   3n + (−1)n+1
                          kn =              =              .
                                  3 − (−1)          4

Hence
                ½ n
                  3 + (−1)n+1
                                         ½ n−1
                                               + (−1)n
                              ¾                        ¾
          n                               3
      A       =                 A − (−3)                 I2
                        4                       4
                3n + (−1)n+1 1 2
                                         ½ n−1
                                               + (−1)n
                            ·      ¸                   ¾·       ¸
                                          3                 1 0
              =                      +3                           ,
                      4        2 1              4           0 1

                                            14
which is equivalent to the stated result.
9. In terms of matrices, we have
                ·        ¸ ·       ¸·      ¸
                  Fn+1         1 1     Fn
                           =                 for n ≥ 1.
                    Fn         1 0    Fn−1
              ·          ¸       ·           ¸n ·        ¸       ·         ¸n ·         ¸
                  Fn+1               1 1            F1               1 1            1
                             =                               =                              .
                   Fn                1 0            F0               1 0            0
Now λ1 , λ2 are√the roots of the√polynomial x2 − x − 1 here.
Hence λ1 = 1+2 5 and λ2 = 1−2 5 and
                                     ³  √ ´n−1     ³ √ ´n−1
                                      1+ 5          1− 5
                                        2       −      2
                         kn =               √    ³   √ ´
                                          1+ 5     1− 5
                                            2  −     2
                                     ³ √ ´n−1 ³ √ ´n−1
                                      1+ 5
                                        2       − 1−2 5
                                 =                   √                      .
                                                         5
Hence

                             An = kn A − λ1 λ2 kn−1 I2
                                      = kn A + kn−1 I2

So
          ·          ¸                       · ¸
              Fn+1                            1
                         = (kn A + kn−1 I2 )
               Fn                             0
                              · ¸            · ¸ ·           ¸
                                1             1    kn + kn−1
                         = kn       + kn−1       =             .
                                1             0       kn

Hence                                    ³     √ ´n−1   ³ √ ´n−1
                                             1+ 5        1− 5
                                               2      −    2
                     Fn = k n =                          √                      .
                                                          5

10. From Question 5, we know that
                      ·     ¸ ·       ¸n · ¸
                         xn       1 r     a
                             =               .
                         yn       1 1     b




                                                15
                                       ·       ¸
                                           1 r
Now by Question 7, with A =                      ,
                                           1 1
                                An = kn A − λ1 λ2 kn−1 I2
                      = kn A − (1 − r)kn−1 I2 ,
                  √            √
where λ1 = 1 + r and λ2 = 1 − r are the roots of the polynomial
x2 − 2x + (1 − r) and
                             λn − λ n
                        kn = 1 √ 2 .
                              2 r
Hence
   ·         ¸                                     ·       ¸
        xn                                             a
                 = (kn A − (1 − r)kn−1 I2 )
        yn                                             b
                   µ·           ¸ ·                               ¸¶ · ¸
                       kn kn r        (1 − r)kn−1          0          a
                 =                −
                       kn kn                0         (1 − r)kn−1     b
                   ·                                        ¸· ¸
                     kn − (1 − r)kn−1          kn r            a
                 =
                             kn          kn − (1 − r)kn−1       b
                   ·                              ¸
                     a(kn − (1 − r)kn−1 ) + bkn r
                 =                                  .
                      akn + b(kn − (1 − r)kn−1 )
Hence, in view of the fact that

         kn     λn − λn2      λn1 (1 − { λλ12 }n )
             = n−11      =                          → λ1 ,           as n → ∞,
        kn−1  λ1 − λn−12   λn−1
                            1     (1 − { λλ2 }n−1 )    1

we have
                   ·        ¸
                       xn            a(kn − (1 − r)kn−1 ) + bkn r
                                 =
                       yn            akn + b(kn − (1 − r)kn−1 )
                                         kn                  kn
                                     a( kn−1 − (1 − r)) + b kn−1 r
                                 =       kn        kn
                                      a kn−1 + b( kn−1 − (1 − r))
                                     a(λ1 − (1 − r)) + bλ1 r
                                 →
                                     aλ1 + b(λ1 − (1 − r))
                                       √                √
                                     a( r + r) + b(1 + r)r
                                 =          √       √
                                     a(1 + r) + b( r + r)
                                     √         √             √ √
                                       r{a(1 + r) + b(1 + r) r}
                                 =             √        √
                                          a(1 + r) + b( r + r)
                                     √
                                 =     r.


                                              16
                                  Section 2.7
             ·        ¯       ¸                   ·         ¯      ¸
                1 4 ¯¯ 1 0                          1 4 ¯¯ 1 0
1. [A|I2 ] =                      R2 → R2 + 3R1
               −3 1 ¯ 0 1                           0 13 ¯ 3 1
             ·      ¯               ¸                    ·      ¯            ¸
       1       1 4 ¯¯ 1         0                          1 0 ¯¯ 1/13 −4/13
R2 → 13 R2                             R1 → R1 − 4R2                           .
               0 1 ¯ 3/13 1/13                             0 1 ¯ 3/13   1/13
                                          ·                ¸
                                     −1     1/13 −4/13
    Hence A is non–singular and A =                          .
                                            3/13    1/13
    Moreover
                        E12 (−4)E2 (1/13)E21 (3)A = I2 ,
so
                            A−1 = E12 (−4)E2 (1/13)E21 (3).
Hence

     A = {E21 (3)}−1 {E2 (1/13)}−1 {E12 (−4)}−1 = E21 (−3)E2 (13)E12 (4).

2. Let D = [dij ] be an m × m diagonal matrix and let A = [ajk ] be an m × n
matrix. Then
                                  Xn
                        (DA)ik =     dij ajk = dii aik ,
                                            j=1

as dij = 0 if i 6= j. It follows that the ith row of DA is obtained by
multiplying the ith row of A by dii .
   Similarly, post–multiplication of a matrix by a diagonal matrix D results
in a matrix whose columns are those of A, multiplied by the respective
diagonal elements of D.
   In particular,

           diag (a1 , . . . , an )diag (b1 , . . . , bn ) = diag (a1 b1 , . . . , an bn ),

as the left–hand side can be regarded as pre–multiplication of the matrix
diag (b1 , . . . , bn ) by the diagonal matrix diag (a1 , . . . , an ).
    Finally, suppose that each of a1 , . . . , an is non–zero. Then a−1              −1
                                                                        1 , . . . , an
all exist and we have

      diag (a1 , . . . , an )diag (a−1           −1              −1              −1
                                    1 , . . . , an ) = diag (a1 a1 , . . . , an an )
                                                         = diag (1, . . . , 1) = In .

Hence diag (a1 , . . . , an ) is non–singular and its inverse is diag (a−1           −1
                                                                        1 , . . . , an ).


                                                17
    Next suppose that ai = 0. Then diag (a1 , . . . , an ) is row–equivalent to a
matix containing a zero row and is hence singular.
                     ¯                                                 
               0 0 2 ¯¯ 1 0 0                         1 2 6 0 1 0
3. [A|I3 ] =  1 2 6 ¯¯ 0 1 0  R1 ↔ R2  0 0 2 1 0 0 
               3 7 9 ¯ 0 0 1                          3 7 9 0 0 1
                                                                                  
                    1 2     6 0     1 0                          1 2    6 0      1 0
 R3 → R3 − 3R1  0 0        2 1     0 0  R2 ↔ R3  0 1 −9 0 −3 1 
                    0 1 −9 0 −3 1                                0 0    2 1      0 0
                                                                                       
                1 2     6    0   1 0                                1 0 24        0  7 −2
 R3 → 12 R3  0 1 −9         0 −3 1  R1 → R1 − 2R2  0 1 −9                      0 −3  1 
                0 0     1 1/2    0 0                                0 0     1 1/2    0  0
                                                
                     1 0 0 −12        7 −2
 R1 → R1 − 24R3 
                     0 1 0 9/2 −3            1 .
  R2 → R2 + 9R3
                     0 0 1 1/2        0      0
                                                               
                                          −12          7 −2
    Hence A is non–singular and A−1 =  9/2 −3                1 .
                                           1/2         0      0
     Also

            E23 (9)E13 (−24)E12 (−2)E3 (1/2)E23 E31 (−3)E12 A = I3 .

Hence

            A−1 = E23 (9)E13 (−24)E12 (−2)E3 (1/2)E23 E31 (−3)E12 ,

so
                A = E12 E31 (3)E23 E3 (2)E12 (2)E13 (24)E23 (−9).

4.
                                               
      1  2  k       1  2       k       1  2       k
A =  3 −1  1  →  0 −7  1 − 3k  →  0 −7  1 − 3k  = B.
      5  3 −5       0 −7 −5 − 5k       0  0 −6 − 2k

    Hence if −6 − 2k 6= 0, i.e. if k 6= −3, we see that B can be reduced to I3
and hence A is non–singular.
                                          
                             1     2 −3
    If k = −3, then B =  0 −7 10  = B and consequently A is singu-
                             0     0     0
lar, as it is row–equivalent to a matrix containing a zero row.

                                       18
           ·             ¸    ·       ¸
                1  2              1 2
5. E21 (2)                =             . Hence, as in the previous question,
               −2 −4              0 0
·          ¸
   1     2
             is singular.
  −2 −4
6. Starting from the equation A2 − 2A + 13I2 = 0, we deduce

                     A(A − 2I2 ) = −13I2 = (A − 2I2 )A.

Hence AB = BA = I2 , where B = −1
                               13 (A − 2I2 ). Consequently A is non–
singular and A−1 = B.
7. We assume the equation A3 = 3A2 − 3A + I3 .

       (ii) A4 = A3 A = (3A2 − 3A + I3 )A = 3A3 − 3A2 + A
                  = 3(3A2 − 3A + I3 ) − 3A2 + A = 6A2 − 8A + 3I3 .

(iii) A3 − 3A2 + 3A = I3 . Hence

                A(A2 − 3A + 3I3 ) = I3 = (A2 − 3A + 3I3 )A.

Hence A is non–singular and

                         A−1 = A2 − 3A + 3I3
                                              
                                 −1 −3       1
                             =  2     4 −1  .
                                   0   1     0

8. (i) If B 3 = 0 then

     (In − B)(In + B + B 2 ) = In (In + B + B 2 ) − B(In + B + B 2 )
                                   = (In + B + B 2 ) − (B + B 2 + B 3 )
                                   = In − B 3 = In − 0 = I n .

Similarly (In + B + B 2 )(In − B) = In .
   Hence A = In − B is non–singular and A−1 = In + B + B 2 .
   It follows that the system AX = b has the unique solution

                X = A−1 b = (In + B + B 2 )b = b + Bb + B 2 b.




                                         19
                                            
                  0 r s                 0 0 rt
   (ii) Let B =  0 0 t . Then B 2 =  0 0 0  and B 3 = 0. Hence
                  0 0 0                 0 0 0
from the preceding question

      (I3 − B)−1 = I3 + B + B 2
                                               
                      1 0 0        0 r s     0 0 rt
                 =  0 1 0 + 0 0 t + 0 0 0 
                      0 0 1        0 0 0     0 0 0
                                
                      1 r s + rt
                 =  0 1      t  .
                      0 0     1

9. (i) Suppose that A2 = 0. Then if A−1 exists, we deduce that A−1 (AA) =
A−1 0, which gives A = 0 and this is a contradiction, as the zero matrix is
singular. We conclude that A does not have an inverse.
    (ii). Suppose that A2 = A and that A−1 exists. Then

                            A−1 (AA) = A−1 A,

which gives A = In . Equivalently, if A2 = A and A 6= In , then A does not
have an inverse.
10. The system of linear equations

                              x+y−z = a
                                      z = b
                            2x + y + 2z = c

is equivalent to the matrix equation AX = B, where
                                                
                     1 1 −1              x           a
             A= 0 0
                            1 , X = y , B = b .
                                                
                     2 1     2           z           c

By Question 7, A−1 exists and hence the system has the unique solution
                                                     
                  −1 −3       1      a        −a − 3b + c
           X= 2          4 −1   b  =  2a + 4b − c  .
                    0     1   0      c             b

Hence x = −a − 3b + c, y = 2a + 4b − c, z = b.

                                     20
12.
                                                                   
                                                1        0   0    0
                                               0        1   0    0 
            A = E3 (2)E14 E42 (3) = E3 (2)E14 
                                               0
                                                                    
                                                         0   1    0 
                                                0        3   0    1
                                                              
                         0 3 0 1             0 3         0   1
                        0 1 0 0   0 1                 0   0 
              = E3 (2) 
                        0 0 1 0 = 0 0
                                                             .
                                                         2   0 
                         1 0 0 0             1 0         0   0

Also

                  A−1 = (E3 (2)E14 E42 (3))−1
                                       −1
                        = (E42 (3))−1 E14 (E3 (2))−1
                        = E42 (−3)E14 E3 (1/2)
                                                 
                                         1 0 0 0
                                       0 1 0 0 
                        = E42 (−3)E14            
                                       0 0 1/2 0 
                                         0 0 0 1
                                              
                                     0 0 0 1
                                    0 1 0 0 
                        = E42 (−3)            
                                    0 0 1/2 0 
                                     1 0 0 0
                                            
                            0 0       0 1
                           0 1       0 0 
                           0 0 1/2 0  .
                        =                   

                            1 −3 0 0

13. (All matrices in this question are over Z2 .)
                         ¯                                   ¯                 
            1 1 0 1 ¯¯ 1 0 0 0                   1   1   0   1 ¯¯   1   0   0   0
           0 0 1 1 ¯ 0 1 0 0                0     0   1   1 ¯¯   0   1   0   0 
 (a)       1 1 1 1 ¯ 0 0 1 0 → 0
                         ¯                                                     
                          ¯                          0   1   0 ¯¯   1   0   1   0 
            1 0 0 1 ¯ 0 0 0 1                    0   1   0   0 ¯    1   0   0   1
                         ¯                                   ¯                 
            1 1 0 1 ¯¯ 1 0 0 0                   1   0   0   1 ¯¯   0   0   0   1
           0 1 0 0 ¯ 1 0 0 1                0     1   0   0 ¯¯   1   0   0   1 
     →    0 0 1 0 ¯ 1 0 1 0 → 0
                          ¯                                                     
                          ¯                          0   1   0 ¯¯   1   0   1   0 
            0 0 1 1 ¯ 0 1 0 0                    0   0   0   1 ¯    1   1   1   0

                                      21
                                  ¯                  
           1       0       0    0 ¯¯    1   1   1   1
          0       1       0    0 ¯¯    1   0   0   1 
       → 
          0
                                                      .
                   0       1    0 ¯¯    1   0   1   0 
           0       0       0    1 ¯     1   1   1   0

Hence A is non–singular and
                                                  
                                               1
                                               1 1   1
                                               1
                                               0 1  0
                                       A−1 = 
                                             
                                                   .
                                              1
                                               1 0  0
                                               1
                                               1 0   1
                                                          
          1    1       0       1                 1 1 0     1
         0    1       1       1               0 1 1     1 
(b) A =                          R → R4 + R1              , so A is singular.
         1    0       1       0  4            1 0 1     0 
          1    1       0       1                 0 0 0     0
14.
                     ¯             R3 → 12 R3         ¯          
              1 1 1 ¯¯ 1 0 0                      1 0 0 ¯¯ 0 0  1/2
                                   R → R1 − R3 
      (a)  −1 1 0 ¯¯ 0 1 0  1                   0 1 0 ¯¯ 0 1  1/2 
                                   R2 → R2 + R3
              2 0 0   ¯  0 0 1                    0 1 1  ¯ 1 0 −1/2
                                     R1 ↔ R3
                              ¯              
                        1 0 0 ¯¯ 0    0 1/2
       R3 → R3 − R2  0 1 0 ¯¯ 0      1 1/2  .
                        0 0 1  ¯  1 −1 −1

Hence A−1 exists and
                                                   
                                           0  0 1/2
                                   A−1 =  0  1 1/2  .
                                           1 −1 −1

                    ¯                                 ¯       
              2 2 4 ¯¯ 1 0 0      R1 → R1 − 2R2   1 0 1 ¯¯ 0 1 0
      (b)  1 0 1 ¯¯ 0 1 0          R1 ↔ R2     0 1 0 ¯ 0
                                                         ¯   0 1 
              0 1 0 ¯ 0 0 1          R2 ↔ R3      0 2 2 ¯ 1 −2 0
                               ¯             
                         1 0 1 ¯¯ 0    1    0
       R3 → R3 − 2R2  0 1 0 ¯¯ 0      0    1 
                         0 0 2  ¯ 1 −2 −2
                          ¯               
                    1 0 1 ¯¯   0    1    0
       R3 → 12 R3  0 1 0 ¯¯   0    0    1 
                    0 0 1  ¯ 1/2 −1 −1

                                                    22
                           ¯            
                     1 0 0 ¯¯ −1/2  2  1
      R1 → R1 − R3  0 1 0 ¯¯    0  0  1 .
                     0 0 1  ¯  1/2 −1 −1

Hence A−1 exists and
                                         
                            −1/2   2    1
                  A−1 =        0  0    1 .
                              1/2 −1 −1
                                                          
        4 6 −3        1        4 6 −3                   4 6 −3
                 R → 7 R2 
(c)    0 0  7  2             0 0   1  R3 → R3 − R2  0 0  1 .
                 R3 → 15 R3
        0 0  5                 0 0   1                  0 0  0
Hence A is singular by virtue of the zero row.

                                  R1 → 12 R1
                 ¯                                   ¯              
       2     0 0 ¯¯ 1 0 0                        1 0 0 ¯¯ 1/2    0   0
(d)  0 −5 0 ¯¯ 0 1 0  R2 → −1         5 R2
                                                0 1 0 ¯    0 −1/5   0 .
                                        1
                                                        ¯
       0     0 7  ¯  0 0 1        R3 → 7 R3      0 0 1  ¯   0    0 1/7

Hence A−1 exists and A−1 = diag (1/2, −1/5, 1/7).
    (Of course this was also immediate from Question 2.)
                  ¯                                          ¯            
      1 2 4 6 ¯¯ 1 0 0 0                              1 0 0 6 ¯¯    1 −2 0 0
     0 1 2 0 ¯ 0 1 0 0                            0 1 2 0 ¯      0  1 0 0 
     0 0 1 2 ¯ 0 0 1 0  R1 → R1 − 2R2  0 0 1 2 ¯
(e)               ¯                                          ¯            
                   ¯                                            ¯   0  0 1 0 
      0 0 0 2 ¯ 0 0 0 1                               0 0 0 2 ¯     0  0 0 1
                                            ¯               
                                 1 0 0    6 ¯¯ 1 −2      0 0
                               0 1 0 −4 ¯ 0       1 −2 0 
            R2 → R2 − 2R3     0 0 1
                                             ¯               
                                          2 ¯ 0
                                             ¯     0     1 0 
                                 0 0 0    2 ¯ 0    0     0 1
                                         ¯                  
           R1 → R1 − 3R4        1 0 0 0 ¯¯ 1 −2       0 −3
           R2 → R2 + 2R4     0 1 0 0 ¯ 0
                                          ¯      1 −2      2 
                                                             .
            R3 → R3 − R4       0 0 1 0 ¯ 0
                                          ¯      0    1 −1 
              R4 → 12 R4        0 0 0 1 ¯ 0      0    0 1/2
Hence A−1 exists and
                                          
                               1 −2  0 −3
                              0  1 −2   2 
                       A−1 =              .
                              0  0  1 −1 
                               0  0  0 1/2

                                  23
(f)
                                                      
   1 2 3                   1  2  3                 1  2  3
 4 5 6  R2 → R2 − 4R1  0 −3 −6  R3 → R3 − R2  0 −3 −6  .
           R3 → R3 − 5R1
   5 7 9                   0 −3 −6                 0  0  0

Hence A is singular by virtue of the zero row.
15. Suppose that A is non–singular. Then

                           AA−1 = In = A−1 A.

Taking transposes throughout gives

                       (AA−1 )t = Int = (A−1 A)t
                      (A−1 )t At = In = At (A−1 )t ,

so At is non–singular and (At )−1 = (A−1 )t .
             ·      ¸
               a b
16. Let A =           , where ad − bc = 0. Then the equation
               c d

                     A2 − (a + d)A + (ad − bc)I2 = 0

reduces to A2 − (a + d)A = 0 and hence A2 = (a + d)A. From the last
equation, if A−1 exists, we deduce that A = (a + d)I2 , or
                       ·       ¸ ·                ¸
                          a b        a+d      0
                                =                   .
                          c d          0   a+d

Hence a = a + d, b = 0, c = 0, d = a + d and a = b = c = d = 0, which
contradicts the assumption that A is non–singular.
17.
                                                         
       1  a b                               1    a      b
                          R2 → R2 + aR1 
A =  −a  1 c                              0 1 + a2 c + ab 
                          R3 → R3 + bR1
      −b −c 1                               0 ab − c 1 + b2
                                                         
                                          1    a      b
                                 1                  c+ab 
                          R2 → 1+a 2 R2
                                         0    1    1+a2
                                          0 ab − c 1 + b2
                                                                           
                                                  1 a           b
                                                              c+ab
                          R3 → R3 − (ab − c)R2  0 1                         = B.
                                                                           
                                                              1+a2
                                                  0 0 1 + b2 + (c−ab)(c+ab)
                                                                   1+a2


                                     24
Now
                         (c − ab)(c + ab)                  c2 − (ab)2
              1 + b2 +                       = 1 + b2 +
                              1 + a2                         1 + a2
                                                 1 + a 2 + b2 + c2
                                             =                      6= 0.
                                                      1 + a2
Hence B can be reduced to I3 using four more row operations and conse-
quently A is non–singular.
18. The proposition is clearly true when n = 1. So let n ≥ 1 and assume
(P −1 AP )n = P −1 An P . Then

                     (P −1 AP )n+1 = (P −1 AP )n (P −1 AP )
                                       = (P −1 An P )(P −1 AP )
                                       = P −1 An (P P −1 )AP
                                       = P −1 An IAP
                                       = P −1 (An A)P
                                       = P −1 An+1 P

and the induction goes through.
            ·            ¸           ·          ¸                  ·        ¸
               2/3 1/4                   1 3                         4 −3
19. Let A =                and P =                . Then P −1 = 17            .
               1/3 3/4                  −1 4                         1    1
                                ·          ¸
                                  5/12 0
We then verify that P −1 AP =                . Then from the previous ques-
                                    0    1
tion,
                                      ¸n ·
                                              (5/12)n 0            (5/12)n 0
                         ·                                  ¸ ·                 ¸
  −1 n        −1     n      5/12 0
P A P = (P AP ) =                        =                   =                    .
                              0    1               0    1n            0     1

Hence
                  (5/12)n 0                            (5/12)n 0
              ·               ¸         ·         ¸·                ¸       ·          ¸
    n                             −1    1 3                             1       4 −3
A       = P                     P =
                     0    1           −1 4                0    1        7       1  1
                 (5/12)n
              ·                 ¸·      ¸
            1                 3    4 −3
        =
            7 −(5/12)n        4    1  1
                4(5/12)n + 3 (−3)(5/12)n + 3
              ·                                ¸
            1
        =
            7 −4(5/12)n + 4     3(5/12)n + 4
              ·     ¸            ·         ¸
            1 3 3        1     n    4 −3
        =             + (5/12)               .
            7 4 4        7         −4    3


                                            25
                         ·  ¸
                       3 3
Notice that An → 17           as n → ∞. This problem is a special case of
                       4 4
a more general result about Markov matrices.
              ·       ¸
                a b
20. Let A =             be a matrix whose elements are non–negative real
                c d
numbers satisfying

              a ≥ 0, b ≥ 0, c ≥ 0, d ≥ 0, a + c = 1 = b + d.
               ·       ¸
               b    1
Also let P =             and suppose that A 6= I2 .
               c −1
(i) det P = −b − c = −(b + c). Now b + c ≥ 0. Also if b + c = 0, then we
would have b = c = 0 and hence d = a = 1, resulting in A = I2 . Hence
det P < 0 and P is non–singular.
    Next,
                     ·          ¸·       ¸·           ¸
    −1           −1     −1 −1       a b      b      1
   P AP =
               b + c −c       b     c d      c −1
                     ·                     ¸·           ¸
                 −1      −a − c    −b − d       b     1
            =
               b + c −ac + bc −cb + bd          c −1
                     ·                     ¸·           ¸
                 −1        −1        −1         b     1
            =
               b + c −ac + bc −cb + bd          c −1
                     ·                                              ¸
                 −1              −b − c                    0
            =                                                         .
               b + c (−ac + bc)b + (−cb + bd)c −ac + bc + cb − bd

Now

              −acb + b2 c − c2 b + bdc = −cb(a + c) + bc(b + d)
                                        = −cb + bc = 0.

Also

            −(a + d − 1)(b + c) = −ab − ac − db − dc + b + c
                                   = −ac + b(1 − a) + c(1 − d) − bd
                                   = −ac + bc + cb − bd.

Hence
                     ·                                  ¸       ·             ¸
     −1         −1       −(b + c)         0                         1   0
 P        AP =                                              =                     .
               b+c          0     −(a + d − 1)(b + c)               0 a+d−1


                                        26
                                                                       ·       ¸
                                                                           0 1
(ii) We next prove that if we impose the extra restriction that A 6=             ,
                                                                           1 0
then |a + d − 1| < 1. This will then have the following consequence:
                         ·                  ¸
                           1        0
               A = P                          P −1
                           0 a+d−1
                         ·                  ¸n
                n          1        0
              A    = P                         P −1
                           0 a+d−1
                         ·                     ¸
                           1          0
                   = P                           P −1
                           0 (a + d − 1)n
                         ·        ¸
                           1 0
                   → P              P −1
                           0 0
                       ·         ¸·          ¸       ·       ¸
                         b     1      1 0       −1     −1 −1
                   =
                         c −1         0 0 b + c −c         b
                             ·        ¸·             ¸
                        −1      b 0       −1 −1
                   =
                       b+c c 0            −c       b
                             ·            ¸
                        −1      −b −b
                   =
                       b + c −c −c
                             ·        ¸
                         1      b b
                   =                    ,
                       b+c c c
where we have used the fact that (a + d − 1)n → 0 as n → ∞.
   We first prove the inequality |a + d − 1| ≤ 1:
                      a+d−1 ≤ 1+d−1=d≤1
                      a + d − 1 ≥ 0 + 0 − 1 = −1.
Next, if a + d − 1 = 1, we have a + d = 2; so a = 1 = d and hence c = 0 = b,
contradicting our assumption that A 6= I2 . Also if a + d −·1 = −1,  ¸ then
                                                               0 1
a + d = 0; so a = 0 = d and hence c = 1 = b and hence A =             .
                                                               1 0
22. The system is inconsistent: We work towards reducing the augmented
matrix:
                     ¯                                 ¯   
                1 2 ¯¯ 4                            1  2 ¯¯ 4
                               R 2 → R  2 −  R 1 
              1 1 ¯ 5                             0 −1 ¯¯ 1 
                      ¯        R3  → R 3  − 3R  1
                3 5 ¯ 12                            0 −1 ¯ 0
                                         ¯       
                                  1   2 ¯¯     4
              R3 → R3 − R2  0 −1 ¯¯           1 .
                                  0   0   ¯  −1

                                      27
The last row reveals inconsistency.
   The system in matrix form is AX = B, where
                                                
                      1 2           · ¸          4
                                     x
              A =  1 1 , X =          , B =  5 .
                                     y
                      3 5                       12
The normal equations are given by the matrix equation
                                 At AX = At B.
Now
                                             
                         ·            ¸  1 2      ·         ¸
                             1 1   3               11   18
              At A =                     1 1 =
                             2 1   5                18 30
                                         3 5
                                           
                         ·           ¸    4     ·    ¸
                             1 1   3             45
              At B =                      5 =         .
                             2 1   5              73
                                         12
Hence the normal equations are
                               11x + 18y = 45
                               18x + 30y = 73.
These may be solved, for example, by Cramer’s rule:
                             ¯         ¯
                             ¯ 45 18 ¯
                             ¯         ¯
                             ¯ 73 30 ¯    36
                       x = ¯           ¯=     =6
                             ¯ 11 18 ¯
                             ¯         ¯   6
                             ¯ 18 30 ¯
                             ¯         ¯
                             ¯ 11 45 ¯
                             ¯         ¯
                             ¯ 18 73 ¯    −7
                       y = ¯           ¯=     .
                             ¯ 11 18 ¯
                             ¯         ¯   6
                             ¯ 18 30 ¯

23. Substituting the coordinates of the five points into the parabola equation
gives the following equations:
                                          a =0
                                a+b+c         =   0
                              a + 2b + 4c     =   −1
                              a + 3b + 9c     =   4
                             a + 4b + 16c     =   8.

                                       28
The associated normal equations are given by
                                            
                     5 10 30           a      11
                   10 30 100   b  =  42  ,
                    30 100 354         c     160

which have the solution a = 1/5, b = −2, c = 1.
24. Suppose that A is symmetric, i.e. At = A and that AB is defined. Then

                      (B t AB)t = B t At (B t )t = B t AB,

so B t AB is also symmetric.
25. Let A be m × n and B be n × m, where m > n. Then the homogeneous
system BX = 0 has a non–trivial solution X0 , as the number of unknowns
is greater than the number of equations. Then

                       (AB)X0 = A(BX0 ) = A0 = 0

and the m × m matrix AB is therefore singular, as X0 6= 0.
26. (i) Let B be a singular n × n matrix. Then BX = 0 for some non–zero
column vector X. Then (AB)X = A(BX) = A0 = 0 and hence AB is also
singular.
    (ii) Suppose A is a singular n × n matrix. Then At is also singular and
hence by (i) so is B t At = (AB)t . Consequently AB is also singular




                                      29
                            Section 3.6
1. (a) Let S be the set of vectors [x, y] satisfying x = 2y. Then S is a vector
subspace of R2 . For

  (i) [0, 0] ∈ S as x = 2y holds with x = 0 and y = 0.

 (ii) S is closed under addition. For let [x1 , y1 ] and [x2 , y2 ] belong to S.
      Then x1 = 2y1 and x2 = 2y2 . Hence

                          x1 + x2 = 2y1 + 2y2 = 2(y1 + y2 )

      and hence
                        [x1 + x2 , y1 + y2 ] = [x1 , y1 ] + [x2 , y2 ]
      belongs to S.

(iii) S is closed under scalar multiplication. For let [x, y] ∈ S and t ∈ R.
      Then x = 2y and hence tx = 2(ty). Consequently

                                  [tx, ty] = t[x, y] ∈ S.

(b) Let S be the set of vectors [x, y] satisfying x = 2y and 2x = y. Then S is
a subspace of R2 . This can be proved in the same way as (a), or alternatively
we see that x = 2y and 2x = y imply x = 4x and hence x = 0 = y. Hence
S = {[0, 0]}, the set consisting of the zero vector. This is always a subspace.
(c) Let S be the set of vectors [x, y] satisfying x = 2y + 1. Then S doesn’t
contain the zero vector and consequently fails to be a vector subspace.
(d) Let S be the set of vectors [x, y] satisfying xy = 0. Then S is not
closed under addition of vectors. For example [1, 0] ∈ S and [0, 1] ∈ S, but
[1, 0] + [0, 1] = [1, 1] 6∈ S.
(e) Let S be the set of vectors [x, y] satisfying x ≥ 0 and y ≥ 0. Then S is
not closed under scalar multiplication. For example [1, 0] ∈ S and −1 ∈ R,
but (−1)[1, 0] = [−1, 0] 6∈ S.
2. Let X, Y, Z be vectors in Rn . Then by Lemma 3.2.1

                      hX + Y, X + Z, Y + Zi ⊆ hX, Y, Zi,

as each of X + Y, X + Z, Y + Z is a linear combination of X, Y, Z.



                                          30
     Also
                         1           1         1
                 X =       (X + Y ) + (X + Z) − (Y + Z),
                         2           2         2
                         1           1         1
                 Y   =     (X + Y ) − (X + Z) + (Y + Z),
                         2           2         2
                         −1            1         1
                 Z =        (X + Y ) + (X + Z) + (Y + Z),
                          2            2         2
so
                     hX, Y, Zi ⊆ hX + Y, X + Z, Y + Zi.
Hence
                     hX, Y, Zi = hX + Y, X + Z, Y + Zi.
                                             
                 1              0                  1
               0             1               1 
3. Let X1 =   1  , X2 =  1  and X3 =  1 . We have to decide if
                                              

                 2              2                  3
X1 , X2 , X3 are linearly independent, that is if the equation xX1 + yX2 +
zX3 = 0 has only the trivial solution. This equation is equivalent to the
folowing homogeneous system

                              x + 0y + z = 0
                              0x + y + z = 0
                               x+y+z = 0
                            2x + 2y + 3z = 0.

We reduce the coefficient matrix to reduced row–echelon form:
                                              
                          1 0 1          1 0 0
                        0 1 1         0 1 0 
                        1 1 1 → 0 0 1 
                                              

                          2 2 3          0 0 0

and consequently the system has only the trivial solution x = 0, y = 0, z =
0. Hence the given vectors are linearly independent.
4. The vectors
                                                     
                    λ                −1                −1
            X1 =  −1  ,      X2 =  λ  ,     X3 =  −1 
                   −1                −1                 λ


                                    31
are linearly dependent for precisely those values of λ for which the equation
xX1 + yX2 + zX3 = 0 has a non–trivial solution. This equation is equivalent
to the system of homogeneous equations
                              λx − y − z = 0
                            −x + λy − z = 0
                            −x − y + λz = 0.
Now the coefficient determinant of this system is
                    ¯              ¯
                    ¯ λ −1 −1 ¯
                                   ¯ = (λ + 1)2 (λ − 2).
                    ¯              ¯
                    ¯ −1    λ  −1
                    ¯              ¯
                    ¯ −1 −1      λ ¯
So the values of λ which make X1 , X2 , X3 linearly independent are those λ
satisfying λ 6= −1 and λ 6= 2.
5. Let A be the following matrix of rationals:
                                              
                              1 1 2 0 1
                            2 2 5 0 3 
                       A=  0 0 0 1 3 .
                                               

                              8 11 19 0 11
Then A has reduced row–echelon form
                                              
                             1 0 0        0 −1
                           0 1 0         0 0 
                      B=  0 0 1
                                               .
                                          0 1 
                             0 0 0        1 3
From B we read off the following:
 (a) The rows of B form a basis for R(A). (Consequently the rows of A
     also form a basis for R(A).)
 (b) The first four columns of A form a basis for C(A).
 (c) To find a basis for N (A), we solve AX = 0 and equivalently BX = 0.
     From B we see that the solution is
                                  x1 = x 5
                                  x2 = 0
                                  x3 = −x5
                                  x4 = −3x5 ,

                                     32
     with x5 arbitrary. Then
                                             
                                  x5          1
                              
                                  0 
                                     
                                            0 
                                               
                          X =  −x5  = x5 
                                    
                                            −1  ,
                                                
                               −3x5       −3 
                                  x5          1
     so [1, 0, −1, −3, 1]t is a basis for N (A).

6. In Section 1.6, problem 12, we found that the matrix
                                               
                                 1 0 1 0 1
                                0 1 0 1 1 
                          A=   1 1 1 1 0 
                                                

                                 0 0 1 1 0
has reduced row–echelon form
                                                    
                             1       0     0   1   1
                            0       1     0   1   1 
                         B=
                            0
                                                     .
                                     0     1   1   0 
                             0       0     0   0   0
From B we read off the following:
 (a) The three non–zero rows of B form a basis for R(A).
 (b) The first three columns of A form a basis for C(A).
 (c) To find a basis for N (A), we solve AX = 0 and equivalently BX = 0.
     From B we see that the solution is
                           x1 = −x4 − x5 = x4 + x5
                           x2 = −x4 − x5 = x4 + x5
                           x3 = −x4 = x4 ,
     with x4 and x5 arbitrary elements of Z2 . Hence
                                            
                           x4 + x 5           1      1
                         x4 + x 5         1   1 
                                            
                   X=       x4     = x4  1  +  0  .
                                             
                             x4           1   0 
                              x5              0      1
     Hence [1, 1, 1, 1, 0]t and [1, 1, 0, 0, 1]t form a basis for N (A).

                                      33
7. Let A be the following matrix over Z5 :
                                                   
                              1 1 2 0         1   3
                            2 1 4 0          3   2 
                       A=  0 0 0 1
                                                    .
                                              3   0 
                              3 0 2 4         3   2
We find that A has reduced row–echelon form B:
                                              
                             1 0 0 0 2 4
                            0 1 0 0 4 4 
                      B=   0 0 1 0 0 0 .
                                               

                             0 0 0 1 3 0
From B we read off the following:
 (a) The four rows of B form a basis for R(A). (Consequently the rows of
     A also form a basis for R(A).
 (b) The first four columns of A form a basis for C(A).
 (c) To find a basis for N (A), we solve AX = 0 and equivalently BX = 0.
     From B we see that the solution is
                         x1 = −2x5 − 4x6 = 3x5 + x6
                         x2 = −4x5 − 4x6 = x5 + x6
                         x3 = 0
                         x4 = −3x5 = 2x5 ,
     where x5 and x6 are arbitrary elements of Z5 . Hence
                                            
                                    3          1
                                  1         1 
                                            
                                  0         0 
                         X = x5  2  + x6  0  ,
                                             
                                            
                                  1         0 
                                       0            1

     so [3, 1, 0, 2, 1, 0]t and [1, 1, 0, 0, 0, 1]t form a basis for R(A).

8. Let F = {0, 1, a, b} be a field and let A be the following matrix over F :
                                              
                                    1 a b a
                           A =  a b b 1 .
                                    1 1 1 a

                                      34
In Section 1.6, problem 17, we found that A had reduced row–echelon form
                                            
                                  1 0 0 0
                           B =  0 1 0 b .
                                  0 0 1 1

   From B we read off the following:

 (a) The rows of B form a basis for R(A). (Consequently the rows of A
     also form a basis for R(A).

 (b) The first three columns of A form a basis for C(A).

 (c) To find a basis for N (A), we solve AX = 0 and equivalently BX = 0.
     From B we see that the solution is

                                   x1 = 0
                                   x2 = −bx4 = bx4
                                   x3 = −x4 = x4 ,

       where x4 is an arbitrary element of F . Hence
                                           
                                             0
                                           b 
                                   X = x4 
                                           1 ,
                                               

                                             1

       so [0, b, 1, 1]t is a basis for N (A).

9. Suppose that X1 , . . . , Xm form a basis for a subspace S. We have to
prove that
                    X1 , X1 + X 2 , . . . , X 1 + · · · + X m
also form a basis for S.
    First we prove the independence of the family: Suppose

            x1 X1 + x2 (X1 + X2 ) + · · · + xm (X1 + · · · + Xm ) = 0.

Then
                  (x1 + x2 + · · · + xm )X1 + · · · + xm Xm = 0.
Then the linear independence of X1 , . . . , Xm gives

                      x1 + x2 + · · · + xm = 0, . . . , xm = 0,

                                         35
form which we deduce that x1 = 0, . . . , xm = 0.
   Secondly we have to prove that every vector of S is expressible as a linear
combination of X1 , X1 + X2 , . . . , X1 + · · · + Xm . Suppose X ∈ S. Then

                            X = a 1 X1 + · · · + a m Xm .

We have to find x1 , . . . , xm such that

          X = x1 X1 + x2 (X1 + X2 ) + · · · + xm (X1 + · · · + Xm )
               = (x1 + x2 + · · · + xm )X1 + · · · + xm Xm .

Then

       a1 X1 + · · · + am Xm = (x1 + x2 + · · · + xm )X1 + · · · + xm Xm .

So if we can solve the system

                    x1 + x 2 + · · · + x m = a 1 , . . . , xm = a m ,

we are finished. Clearly these equations have the unique solution

               x1 = a1 − a2 , . . . , xm−1 = am − am−1 , xm = am .
                ·        ¸
                  a b c
10. Let A =                . If [a, b, c] is a multiple of [1, 1, 1], (that is,
                  1 1 1
a = b = c), then rank A = 1. For if

                                [a, b, c] = t[1, 1, 1],

then

       R(A) = h[a, b, c], [1, 1, 1]i = ht[1, 1, 1], [1, 1, 1]i = h[1, 1, 1]i,

so [1, 1, 1] is a basis for R(A).
    However if [a, b, c] is not a multiple of [1, 1, 1], (that is at least two
of a, b, c are distinct), then the left–to–right test shows that [a, b, c] and
[1, 1, 1] are linearly independent and hence form a basis for R(A). Conse-
quently rank A = 2 in this case.
11. Let S be a subspace of F n with dim S = m. Also suppose that
X1 , . . . , Xm are vectors in S such that S = hX1 , . . . , Xm i. We have to
prove that X1 , . . . , Xm form a basis for S; in other words, we must prove
that X1 , . . . , Xm are linearly independent.

                                           36
    However if X1 , . . . , Xm were linearly dependent, then one of these vec-
tors would be a linear combination of the remaining vectors. Consequently
S would be spanned by m − 1 vectors. But there exist a family of m lin-
early independent vectors in S. Then by Theorem 3.3.2, we would have the
contradiction m ≤ m − 1.
12. Let [x, y, z]t ∈ S. Then x + 2y + 3z = 0. Hence x = −2y − 3z and
                                                   
                x        −2y − 3z           −2         −3
              y =         y      = y 1  + z 0 .
                z            z                0         1

Hence [−2, 1, 0]t and [−3, 0, 1]t form a basis for S.
    Next (−1) + 2(−1) + 3(1) = 0, so [−1, −1, 1]t ∈ S.
    To find a basis for S which includes [−1, −1, 1]t , we note that [−2, 1, 0]t
is not a multiple of [−1, −1, 1]t . Hence we have found a linearly independent
family of two vectors in S, a subspace of dimension equal to 2. Consequently
these two vectors form a basis for S.
13. Without loss of generality, suppose that X1 = X2 . Then we have the
non–trivial dependency relation:

                    1X1 + (−1)X2 + 0X3 + · · · + 0Xm = 0.

14. (a) Suppose that Xm+1 is a linear combination of X1 , . . . , Xm . Then

                     hX1 , . . . , Xm , Xm+1 i = hX1 , . . . , Xm i

and hence
                dim hX1 , . . . , Xm , Xm+1 i = dim hX1 , . . . , Xm i.
(b) Suppose that Xm+1 is not a linear combination of X1 , . . . , Xm . If not
all of X1 , . . . , Xm are zero, there will be a subfamily Xc1 , . . . , Xcr which is
a basis for hX1 , . . . , Xm i.
    Then as Xm+1 is not a linear combination of Xc1 , . . . , Xcr , it follows that
Xc1 , . . . , Xcr , Xm+1 are linearly independent. Also

                hX1 , . . . , Xm , Xm+1 i = hXc1 , . . . , Xcr , Xm+1 i.

    Consequently

         dim hX1 , . . . , Xm , Xm+1 i = r + 1 = dim hX1 , . . . , Xm i + 1.


                                          37
   Our result can be rephrased in a form suitable for the second part of the
problem:
              dim hX1 , . . . , Xm , Xm+1 i = dim hX1 , . . . , Xm i
if and only if Xm+1 is a linear combination of X1 , . . . , Xm .
    If X = [x1 , . . . , xn ]t , then AX = B is equivalent to

                            B = x1 A∗1 + · · · + xn A∗n .

So AX = B is soluble for X if and only if B is a linear combination of the
columns of A, that is B ∈ C(A). However by the first part of this question,
B ∈ C(A) if and only if dim C([A|B]) = dim C(A), that is, rank [A|B] =
rank A.
15. Let a1 , . . . , an be elements of F , not all zero. Let S denote the set of
vectors [x1 , . . . , xn ]t , where x1 , . . . , xn satisfy

                              a1 x1 + · · · + an xn = 0.

Then S = N (A), where A is the row matrix [a1 , . . . , an ]. Now rank A = 1
as A 6= 0. So by the “rank + nullity” theorem, noting that the number of
columns of A equals n, we have

                dim N (A) = nullity (A) = n − rank A = n − 1.

16. (a) (Proof of Lemma 3.2.1) Suppose that each of X1 , . . . , Xr is a linear
combination of Y1 , . . . , Ys . Then
                                  s
                                  X
                          Xi =          aij Yj ,   (1 ≤ i ≤ r).
                                  j=1
               Pr
Now let X =       i=1 xi Xi be a linear combination of X1 , . . . , Xr . Then

                         X = x1 (a11 Y1 + · · · + a1s Ys )
                              + ···
                              + xr (ar1 Y1 + · · · + ars Ys )
                              = y1 Y1 + · · · + y s Ys ,

where yj = a1j x1 +· · ·+arj xr . Hence X is a linear combination of Y1 , . . . , Ys .
   Another way of stating Lemma 3.2.1 is

                       hX1 , . . . , Xr i ⊆ hY1 , . . . , Ys i,   (1)

                                             38
if each of X1 , . . . , Xr is a linear combination of Y1 , . . . , Ys .
   (b) (Proof of Theorem 3.2.1) Suppose that each of X1 , . . . , Xr is a linear
combination of Y1 , . . . , Ys and that each of Y1 , . . . , Ys is a linear combination
of X1 , . . . , Xr . Then by (a) equation (1) above

                               hX1 , . . . , Xr i ⊆ hY1 , . . . , Ys i

and
                               hY1 , . . . , Ys i ⊆ hX1 , . . . , Xr i.
Hence
                               hX1 , . . . , Xr i = hY1 , . . . , Ys i.

    (c) (Proof of Corollary 3.2.1) Suppose that each of Z1 , . . . , Zt is a linear
combination of X1 , . . . , Xr . Then each of X1 , . . . , Xr , Z1 , . . . , Zt is a linear
combination of X1 , . . . , Xr .
    Also each of X1 , . . . , Xr is a linear combination of X1 , . . . , Xr , Z1 , . . . , Zt ,
so by Theorem 3.2.1

                      hX1 , . . . , Xr , Z1 , . . . , Zt i = hX1 , . . . , Xr i.

   (d) (Proof of Theorem 3.3.2) Let Y1 , . . . , Ys be vectors in hX1 , . . . , Xr i
and assume that s > r. We have to prove that Y1 , . . . , Ys are linearly
dependent. So we consider the equation

                                  x1 Y1 + · · · + xs Ys = 0.
             Pr
Now Yi =        j=1 aij Xj , for 1 ≤ i ≤ s. Hence

                  x1 Y1 + · · · + xs Ys = x1 (a11 X1 + · · · + a1r Xr )
                                            + ···
                                            + xr (as1 X1 + · · · + asr Xr ).
                                            = y 1 X1 + · · · + y r Xr ,            (1)

where yj = a1j x1 + · · · + asj xs . However the homogeneous system

                                     y1 = 0, · · · , yr = 0

has a non–trivial solution x1 , . . . , xs , as s > r and from (1), this results in a
non–trivial solution of the equation

                                  x1 Y1 + · · · + xs Ys = 0.

                                                 39
Hence Y1 , . . . , Ys are linearly dependent.
17. Let R and S be subspaces of F n , with R ⊆ S. We first prove

                                  dim R ≤ dim S.

    Let X1 , . . . , Xr be a basis for R. Now by Theorem 3.5.2, because X1 , . . . , Xr
form a linearly independent family lying in S, this family can be extended
to a basis X1 , . . . , Xr , . . . , Xs for S. Then

                             dim S = s ≥ r = dim R.

Next suppose that dim R = dim S. Let X1 , . . . , Xr be a basis for R. Then
because X1 , . . . , Xr form a linearly independent family in S and S is a sub-
space whose dimension is r, it follows from Theorem 3.4.3 that X1 , . . . , Xr
form a basis for S. Then

                              S = hX1 , . . . , Xr i = R.

18. Suppose that R and S are subspaces of F n with the property that R ∪ S
is also a subspace of F n . We have to prove that R ⊆ S or S ⊆ R. We argue
by contradiction: Suppose that R 6⊆ S and S 6⊆ R. Then there exist vectors
u and v such that

                     u ∈ R and v 6∈ S,           v ∈ S and v 6∈ R.

Consider the vector u + v. As we are assuming R ∪ S is a subspace, R ∪ S is
closed under addition. Hence u + v ∈ R ∪ S and so u + v ∈ R or u + v ∈ S.
However if u + v ∈ R, then v = (u + v) − u ∈ R, which is a contradiction;
similarly if u + v ∈ S.
    Hence we have derived a contradiction on the asumption that R 6⊆ S and
S 6⊆ R. Consequently at least one of these must be false. In other words
R ⊆ S or S ⊆ R.
19. Let X1 , . . . , Xr be a basis for S.
    (i) First let

                          Y1 = a11 X1 + · · · + a1r Xr
                             ..
                              .                                                  (2)
                          Yr = ar1 X1 + · · · + arr Xr ,



                                            40
where A = [aij ] is non–singular. Then the above system of equations can
be solved for X1 , . . . , Xr in terms of Y1 , . . . , Yr . Consequently by Theorem
3.2.1
                           hY1 , . . . , Yr i = hX1 , . . . , Xr i = S.
It follows from problem 11 that Y1 , . . . , Yr is a basis for S.
    (ii) We show that all bases for S are given by equations 2. So suppose
that Y1 , . . . , Yr forms a basis for S. Then because X1 , . . . , Xr form a basis
for S, we can express Y1 , . . . , Yr in terms of X1 , . . . , Xr as in 2, for some
matrix A = [aij ]. We show A is non–singular by demonstrating that the
linear independence of Y1 , . . . , Yr implies that the rows of A are linearly
independent.
    So assume

              x1 [a11 , . . . , a1r ] + · · · + xr [ar1 , . . . , arr ] = [0, . . . , 0].

Then on equating components, we have

                               a11 x1 + · · · + ar1 xr = 0
                                                       ..
                                                        .
                               a1r x1 + · · · + arr xr = 0.

Hence

x1 Y1 + · · · + xr Yr = x1 (a11 X1 + · · · + a1r Xr ) + · · · + xr (ar1 X1 + · · · + arr Xr )
                        = (a11 x1 + · · · + ar1 xr )X1 + · · · + (a1r x1 + · · · + arr xr )Xr
                        = 0X1 + · · · + 0Xr = 0.

Then the linear independence of Y1 , . . . , Yr implies x1 = 0, . . . , xr = 0.
   (We mention that the last argument is reversible and provides an alter-
native proof of part (i).)




                                                 41
                                                  ©©
                                                   ¢ P2
                                                   ¡
                                                ©
                                               © ¡¢
                                           ©© ¡ ¢
                                    P 3 ©©     ¡ ¢
                                       ¢@    ¡ ¢
                                     ¢    @¡    ¢
                                    ¢     ¡@ ¢
                                  ¢     ¡    ©¢P1
                                             @
                                 ¢ ¡ ©©
                                ¢ ¡©©
                               ¢©
                                ¡©
                             ¢©
                              ¡
                         O




                          Section 4.1
    1. We first prove that the area of a triangle P1 P2 P3 , where the points
are in anti–clockwise orientation, is given by the formula
                  ½¯          ¯ ¯           ¯ ¯          ¯¾
                 1 ¯¯ x1 x2 ¯¯ ¯¯ x2 x3 ¯¯ ¯¯ x3 x1 ¯¯
                                +            +               .
                 2 ¯ y1 y2 ¯ ¯ y2 y3 ¯ ¯ y3 y1 ¯
Referring to the above diagram, we have

      Area P1 P2 P3 = Area OP1 P2 + Area OP2 P3 − Area OP1 P3
                         ¯        ¯    ¯        ¯    ¯        ¯
                      1 ¯¯ x1 x2 ¯¯ 1 ¯¯ x2 x3 ¯¯ 1 ¯¯ x1 x3 ¯¯
                    =               +             −             ,
                      2 ¯ y1 y2 ¯ 2 ¯ y2 y3 ¯ 2 ¯ y1 y3 ¯
which gives the desired formula.
   We now turn to the area of a quadrilateral. One possible configuration
occurs when the quadrilateral is convex as in figure (a) below. The interior
diagonal breaks the quadrilateral into two triangles P1 P2 P3 and P1 P3 P4 .
Then
              Area P1 P2 P3 P4 = Area P1 P2 P3 + Area P1 P3 P4

                 ½¯       ¯ ¯       ¯ ¯       ¯¾
             1    ¯ x1 x2 ¯ ¯ x2 x3 ¯ ¯ x3 x1 ¯
        =         ¯       ¯+¯       ¯+¯       ¯
                  ¯ y1 y2 ¯ ¯ y2 y3 ¯ ¯ y3 y1 ¯
             2

                                     42
                        P4                                           P3
                        H
                    ¶ HH                                        L
                  ¶         H P3                                  L
                 ¶          "                                      L
                          "
                ¶       "
       (a)    ¶     "
                      "
                                                   (b)        P4 LL
             ¶ "  "                                           ©© \ L
            ¶""                                            ©©      \ L
           ¶
           "                                           © ©           \ L
           ```                                         ```
                ```                                         ```
         P1           ```                            P1          ` ` `\ L
                            `                                          `\L
                                  P2                                             P2




                 ½¯        ¯ ¯         ¯ ¯         ¯¾
               1 ¯¯ x1 x3 ¯¯ ¯¯ x3 x4 ¯¯ ¯¯ x4 x1 ¯¯
             +               +           +
               2 ¯ y1 y3 ¯ ¯ y3 y4 ¯ ¯ y4 y1 ¯
              ½¯         ¯ ¯         ¯ ¯         ¯ ¯         ¯¾
             1 ¯¯ x1 x2 ¯¯ ¯¯ x2 x3 ¯¯ ¯¯ x3 x4 ¯¯ ¯¯ x4 x1 ¯¯
         =                +           +           +             ,
             2 ¯ y1 y2 ¯ ¯ y2 y3 ¯ ¯ y3 y4 ¯ ¯ y4 y1 ¯
after cancellation.
    Another possible configuration for the quadrilateral occurs when it is not
convex, as in figure (b). The interior diagonal P2 P4 then gives two triangles
P1 P2 P4 and P2 P3 P4 and we can proceed similarly as before.
2.
    ¯                   ¯ ¯                     ¯ ¯                    ¯
    ¯ a+x b+y c+z ¯ ¯ a               b     c   ¯ ¯ x       y     z    ¯
    ¯                   ¯ ¯                     ¯ ¯                    ¯
∆ = ¯ x + u y + v z + w ¯ = ¯ x + u y + v z + w ¯+¯ x + u y + v z + w ¯¯ .
    ¯                   ¯   ¯                   ¯ ¯
    ¯ u+a v+b w+c ¯ ¯ u+a v+b w+c ¯ ¯ u+a v+b w+c ¯

Now
¯             ¯ ¯             ¯ ¯             ¯
¯ a    b   c ¯¯ ¯¯ a   b   c ¯¯ ¯¯ a   b   c ¯¯
¯
¯ x+u y+v z+w ¯=¯ x    y   z ¯¯+¯¯ u   v   w ¯¯
¯             ¯ ¯
¯ u+a v+b w+c ¯ ¯ u+a v+b w+c ¯ ¯ u+a v+b w+c ¯

             ¯          ¯ ¯           ¯ ¯           ¯¯          ¯
             ¯ a   b c ¯¯ ¯¯ a b c ¯¯ ¯¯ a b c ¯¯ ¯¯ a b c ¯¯
             ¯
          = ¯¯ x   y z ¯¯ + ¯¯ x y z ¯¯ + ¯¯ u v w ¯¯ ¯¯ u v w ¯¯
             ¯ u   v w ¯ ¯ a b c ¯ ¯ u v w ¯¯ a b c ¯
             ¯          ¯
             ¯ a   b c ¯¯
             ¯
          = ¯¯ x   y z ¯¯ .
             ¯ u   v w ¯
Similarly
 ¯                   ¯ ¯         ¯    ¯       ¯ ¯         ¯
 ¯ x       y     z ¯¯ ¯¯ x y z ¯¯     ¯ x y z ¯ ¯ a b c ¯
 ¯                                    ¯       ¯ ¯         ¯
 ¯ x + u y + v z + w ¯ = ¯ u v w ¯ = −¯ a b c ¯ = ¯ x y z ¯.
 ¯                   ¯ ¯         ¯    ¯       ¯ ¯         ¯
 ¯ u+a v+b w+c ¯ ¯ a b c ¯            ¯ u v w ¯ ¯ u v w ¯

                                       43
              ¯           ¯
              ¯ a b c ¯
              ¯           ¯
Hence ∆ = 2 ¯¯ x y z ¯¯.
              ¯ u v w ¯

         n2     (n + 1)2 (n + 2)2 ¯¯ C3 → C3 − C2 ¯¯       n2
    ¯                              ¯                 ¯                         ¯
    ¯                                                           2n + 1 2n + 3 ¯¯
3. ¯¯ (n + 1)2 (n + 2)2 (n + 3)2 ¯¯ C2 → C2 − C1 ¯¯ (n + 1)2 2n + 3 2n + 5 ¯¯
    ¯
    ¯ (n + 2)2 (n + 3)2 (n + 4)2 ¯         =         ¯ (n + 2)2 2n + 5 2n + 7 ¯

                                        n2
                                   ¯                       ¯
                                   ¯            2n + 1 2 ¯¯
                    C3 → C3 − C2 ¯¯         2
                                   ¯ (n + 1) 2n + 3 2 ¯
                                                           ¯
                          =        ¯ (n + 2)2 2n + 5 2 ¯

                 R3 → R3 − R2 ¯¯ n2
                                ¯                      ¯
                                           2n + 1 2 ¯¯
                 R2 → R2 − R1 ¯¯ 2n + 1       2     0 ¯¯ = −8.
                        =       ¯ 2n + 3      2     0 ¯

4. (a)
     ¯              ¯ ¯                 ¯      ¯            ¯
     ¯ 246 427 327 ¯ ¯ 246 100 327 ¯           ¯ 246 1 327 ¯
     ¯              ¯ ¯                 ¯      ¯            ¯
     ¯ 1014 543 443 ¯ = ¯ 1014 100 443 ¯ = 100 ¯ 1014 1 443 ¯
     ¯              ¯ ¯                 ¯      ¯            ¯
     ¯ −342 721 621 ¯ ¯ −342 100 621 ¯         ¯ −342 1 621 ¯
        ¯            ¯
        ¯ 246 1 327 ¯           ¯          ¯
        ¯            ¯          ¯ 768 116 ¯
  = 100 ¯ 768 0 116 ¯ = 100(−1) ¯
        ¯            ¯          ¯          ¯ = −29400000.
        ¯ −588 0 294 ¯            −588 294 ¯

(b)
           ¯                  ¯ ¯                       ¯
           ¯ 1    2   3    4 ¯¯ ¯¯ 1    2      3    4 ¯¯
           ¯
           ¯ −2   1 −4     3 ¯¯ ¯¯ 0    5      2  11 ¯¯
           ¯
           ¯ 3 −4 −1             =¯
           ¯               2 ¯ ¯ 0 −10 −10 −10 ¯¯
                              ¯
           ¯ 4    3 −2 −1 ¯ ¯ 0 −5 −14 −17 ¯
           ¯                ¯       ¯                ¯
           ¯
           ¯    5   2   11  ¯
                            ¯
                                    ¯ 5
                                    ¯        2   11  ¯
                                                     ¯
         = ¯ −10 −10 −10 ¯ = −10 ¯ 1
           ¯                ¯       ¯        1    1 ¯¯
           ¯ −5 −14 −17 ¯           ¯ −5 −14 −17 ¯
               ¯               ¯
               ¯ 5 −3       6 ¯¯          ¯           ¯
               ¯                          ¯ −3     6 ¯¯
         = −10 ¯ 1
               ¯      0     0 ¯ = −10(−1) ¯
                               ¯          ¯              = 900.
               ¯ −5 −9 −12 ¯                −9 −12 ¯

           ¯        ¯ ¯          ¯
           ¯ 1 0 −2 ¯ ¯ 1 0 0 ¯ ¯          ¯
           ¯        ¯ ¯          ¯ ¯ 1 10 ¯
5. det A = ¯ 3 1
           ¯      4 ¯ = ¯ 3 1 10 ¯ = ¯
                    ¯   ¯        ¯   ¯     ¯ = −13.
           ¯ 5 2 −3 ¯ ¯ 5 2 7 ¯        2 7 ¯


                                    44
  Hence A is non–singular and
                                                       
                         C11 C21 C31           −11 −4   2
       1            1                    1 
A−1 =     adj A =        C12 C22 C32  =        29  7 −10  .
      −13         −13                    −13
                         C13 C23 C33             1 −2   1

6. (i)
    ¯                     ¯                 ¯                           ¯
    ¯ 2a     2b    b − c ¯¯                 ¯ 2a + 2b 2b + 2a b + a ¯
                             R → R1 + R2 ¯
             2a a + c ¯¯ 1
    ¯                                       ¯                           ¯
    ¯ 2b                                        2b        2a     a + c ¯¯
    ¯
    ¯ a+b a+b                     =         ¯
                     b ¯                    ¯ a+b       a+b        b ¯
        ¯                      ¯                      ¯                     ¯
        ¯ 2       2        1   ¯                      ¯     0       2     1 ¯
        ¯                      ¯ C1 → C 1 − C 2       ¯                     ¯
= (a+b) ¯ 2b
        ¯        2a a + c ¯    ¯                (a+b) ¯ 2(b − a) 2a a + c ¯¯
                                                      ¯
        ¯ a+b a+b                     =
                           b ¯                        ¯     0     a+b     b ¯
                              ¯          ¯
                              ¯ 2     1 ¯¯
           = 2(a + b)(a − b) ¯¯            = −2(a + b)(a − b)2 .
                                 a+b b ¯
(ii)
        ¯                   ¯                ¯                       ¯
        ¯ b+c     b      c ¯¯                ¯ c         b      c ¯¯
                              C → C1 − C2 ¯
                         a ¯¯ 1
        ¯                                    ¯
                                             ¯ −a c + a
        ¯ c     c+a                                             a ¯¯
        ¯                          =
        ¯ b       a   a+b   ¯                ¯ b−a       a    a+b ¯
                        ¯                  ¯     ¯                  ¯
                        ¯ c      b      0 ¯¯     ¯ c        b    0 ¯¯
          C3 → C3 − C1 ¯¯                        ¯
                        ¯ −a c + a 2a ¯ = 2a ¯ −a c + a 1 ¯
                                           ¯     ¯                  ¯
               =        ¯ b−a    a    2a   ¯     ¯ b−a      a    1 ¯
                       ¯              ¯
                       ¯ c     b   0 ¯¯        ¯        ¯
       R3 → R3 − R2                            ¯ c   b ¯¯
                                                          = 2a(c2 + b2 ).
                       ¯
                    2a ¯ −a c + a 1 ¯ = −2a ¯
                       ¯              ¯        ¯
             =         ¯ b −c 0 ¯                b −c ¯

7. Suppose that the curve y = ax2 + bx + c passes through the points
(x1 , y1 ), (x2 , y2 ), (x3 , y3 ), where xi 6= xj if i 6= j. Then
                            ax21 + bx1 + c = y1
                            ax22 + bx2 + c = y2
                            ax23 + bx3 + c = y3 .
The coefficient determinant is essentially a Vandermonde determinant:
¯ 2
¯ x1 x1 1 ¯ ¯ x21 x22 x23 ¯
             ¯ ¯               ¯     ¯             ¯
                                     ¯ 1 1 1 ¯
¯ 2          ¯ ¯               ¯     ¯             ¯
¯ x x2 1 ¯ = ¯ x1 x2 x3 ¯ = − ¯ x1 x2 x3 ¯ = −(x2 −x1 )(x3 −x1 )(x3 −x2 ).
¯ 2          ¯ ¯               ¯     ¯             ¯
¯ x2 x3 1 ¯ ¯ 1 1 1 ¯                ¯ x2 x2 x2 ¯
   3                                     1   2   3


                                      45
Hence the coefficient determinant is non–zero and by Cramer’s rule, there
is a unique solution for a, b, c.
                     ¯              ¯
                     ¯ 1 1 −1 ¯
                     ¯              ¯
8. Let ∆ = det A = ¯¯ 2 3        k ¯¯. Then
                     ¯ 1 k       3 ¯
                               ¯           ¯
                               ¯ 1  0   0 ¯¯ ¯¯            ¯
                C3 → C 3 + C 1 ¯
                               ¯                 1  k + 2 ¯¯
    ∆=                           2  1  k+2 ¯=¯
                                           ¯  ¯
                C2 → C2 − C1 ¯¯                 k−1   4 ¯
                                 1 k−1  4 ¯
           = 4 − (k − 1)(k + 2) = −(k 2 − k − 6) = −(k + 3)(k − 2).

Hence det A = 0 if and only if k = −3 or k = 2.
   Consequently if k 6= −3 and k 6= 2, then det A 6= 0 and the given system

                              x+y−z       =    1
                          2x + 3y + kz    =    3
                            x + ky + 3z = 2

has a unique solution. We consider the cases k = −3 and k = 2 separately.
k = −3 :
                                                               
               1    1 −1 1                          1   1 −1 1
                                R   →  R   − 2R
     AM =  2       3 −3 3  2           2      1 
                                                    0   1 −1 1 
                                 R3 → R3 − R1
               1 −3     3 2                         0 −4     4 1
                                            
                                    1 1 −1 1
                    R3 → R3 + 4R2  0 1 −1 1  ,
                                    0 0  0 5
from which we read off inconsistency.
k=2:
                                                       
                1 1 −1 1                         1 1 −1 1
                                 R → R2 − 2R1 
      AM =  2 3         2 3  2                 0 1  4 1 
                                  R3 → R3 − R1
                1 2      3 2                     0 1  4 1
                                           
                                   1 0 −5 0
                    R3 → R3 − R2  0 1  4 1 .
                                   0 0  0 0
We read off the complete solution x = 5z, y = 1 − 4z, where z is arbitrary.


                                    46
   Finally we have to determine the solution for which x2 + y 2 + z 2 is least.

 x2 + y 2 + z 2 = (5z)2 + (1 − 4z)2 + z 2 = 42z 2 − 8z + 1
                                            (µ         ¶2        µ ¶2 )
                            4       1                2       1     2
                = 42(z 2 − z + ) = 42          z−         +    −
                           21      42               21      42    21
                     (µ          ¶2       )
                               2       13
                = 42     z−         +       .
                              21      882

                                                    13
We see that the least value of x2 +y 2 +z 2 is 42× 882 = 13
                                                         21 and this occurs when
                                                                      2
z = 2/21, with corresponding values x = 10/21 and y = 1 − 4 × 21        = 13/21.
                         ¯
              1 −2 b ¯¯
9. Let ∆ = a
                   0 2 ¯¯ be the coefficient determinant of the given system.
              5     2 0 ¯
Then expanding along column 2 gives
                        ¯       ¯     ¯         ¯
                        ¯ a 2 ¯       ¯ 1 b ¯
             ∆ = 2¯     ¯       ¯ − 2¯¯         ¯ = −20 − 2(2 − ab)
                          5 0 ¯         a 2 ¯
                  = 2ab − 24 = 2(ab − 12).

Hence ∆ = 0 if and only if ab = 12. Hence if ab 6= 12, the given system has
a unique solution.
   If ab = 12 we must argue with care:
                                                            
                 1 −2 b 3             1 −2        b       3
   AM =  a         0 2 2  →  0 2a 2 − ab 2 − 3a 
                 5  2 0 1             0 12     −5b      −14
                                                                   
                 1 −2       b      3             1 −2       b     3
                          −5b      −7                     −5b     −7 
          →  0 1          12       6
                                        → 0 1
                                                           12      6
                                                         12−ab   6−2a
                 0 2a 2 − ab 2 − 3a              0 0        6      3
                                   
                 1 −2 b         3
          =  0 1 −5b    12
                               −7 
                                6     = B.
                              6−2a
                 0 0      0     3

Hence if 6 − 2a 6= 0, i.e. a 6= 3, the system has no solution.
   If a = 3 (and hence b = 4), then
                                                             
                   1 −2 4           3         1 0 −2/3 2/3
           B =  0 1 −5        3
                                    −7 
                                     6   → 0 1       −5
                                                       3
                                                             −7 
                                                              6   .
                   0 0         0    0         0 0     0      0

                                      47
Consequently the complete solution of the system is x = 32 + 23 z, y = −7   5
                                                                        6 + 3 z,
where z is arbitrary. Hence there are infinitely many solutions.
10.
      ¯                       ¯                     ¯                      ¯
      ¯ 1 1    2        1     ¯ R4 → R4 − 2R1 ¯ 1 1           2        1   ¯
      ¯                       ¯                     ¯                      ¯
      ¯ 1 2    3        4     ¯ R3 → R3 − 2R1 ¯ 0 1           1        3   ¯
 ∆ = ¯¯                       ¯                     ¯                      ¯
      ¯ 2 4    7     2t +   6 ¯
                              ¯  R 2 →  R 2 − R 1
                                                    ¯
                                                    ¯ 0   2   3     2t + 4 ¯
                                                                           ¯
      ¯ 2 2 6−t         t     ¯         =           ¯ 0 0 2−t t−2 ¯
      ¯                   ¯                    ¯                     ¯
      ¯ 1   1       3     ¯                    ¯ 1      1       3    ¯
      ¯                   ¯ R2 → R2 − 2R1 ¯                          ¯
   = ¯ 2
      ¯     3    2t + 4 ¯ ¯                    ¯  0     1    2t − 2 ¯¯
      ¯ 0 2−t t−2 ¯                  =         ¯
                                               ¯ 0 2−t t−2 ¯
      ¯               ¯            ¯              ¯
      ¯ 1     2t − 2 ¯¯            ¯ 1 2t − 2 ¯
   = ¯¯                 =  (t − 2) ¯              ¯ = (t − 2)(2t − 1).
        2−t t−2 ¯                  ¯ −1      1    ¯

Hence ∆ = 0 if and only if t = 2 or t = 12 . Consequently the given matrix
B is non–singular if and only if t 6= 2 and t 6= 12 .
11. Let A be a 3 × 3 matrix with det A 6= 0. Then

  (i)

                             A adj A = (det A)I3                   (1)
                  (det A) det ( adj A) = det (det A · I3 ) = (det A)3 .

        Hence, as det A 6= 0, dividing out by det A in the last equation gives

                                det ( adj A) = (det A)2 .

 (ii) . Also from equation (1)
                             µ              ¶
                                    1
                                        A       adj A = I3 ,
                                  det A
        so adj A is non–singular and
                                                    1
                                 ( adj A)−1 =           A.
                                                  det A
        Finally
                             A−1 adj (A−1 ) = (det A−1 )I3
        and multiplying both sides of the last equation by A gives
                                                               1
                         adj (A−1 ) = A(det A−1 )I3 =              A.
                                                             det A

                                        48
12. Let A be a real 3 × 3 matrix satisfying At A = I3 . Then


        (i) At (A − I3 ) = At A − At = I3 − At
                         = −(At − I3 ) = −(At − I3t ) = −(A − I3 )t .

Taking determinants of both sides then gives

             det At det (A − I3 ) = det (−(A − I3 )t )
             det A det (A − I3 ) = (−1)3 det (A − I3 )t
                                  = − det (A − I3 )           (1).

(ii) Also det AAt = det I3 , so

                         det At det A = 1 = (det A)2 .

Hence det A = ±1.
(iii) Suppose that det A = 1. Then equation (1) gives

                        det (A − I3 ) = − det (A − I3 ),

so (1 + 1) det (A − I3 ) = 0 and hence det (A − I3 ) = 0.
13. Suppose that column 1 is a linear combination of the remaining columns:

                         A∗1 = x2 A∗2 + · · · + xn A∗n .

Then                  ¯                                        ¯
                      ¯ x2 a12 + · · · + xn a1n a12 · · · a1n ¯
                      ¯                                        ¯
                      ¯ x2 a22 + · · · + xn a2n a22 · · · a2n ¯
              det A = ¯            ..            ..   ..   .. ¯ .
                      ¯                                        ¯
                      ¯
                      ¯             .             .    .    . ¯¯
                      ¯ x2 an2 + · · · + xn ann an2 · · · ann ¯

Now det A is unchanged in value if we perform the operation

                       C1 → C 1 − x 2 C2 − · · · − x n Cn :
                              ¯                       ¯
                              ¯ 0 a12 · · · a1n ¯
                              ¯                       ¯
                              ¯ 0 a22 · · · a2n ¯
                      det A = ¯ .    ..   ..      .. ¯ = 0.
                              ¯                       ¯
                              ¯ ..    .    .       . ¯¯
                              ¯
                              ¯ 0 an2 · · · ann ¯



                                       49
Conversely, suppose that det A = 0. Then the homogeneous system AX = 0
has a non–trivial solution X = [x1 , . . . , xn ]t . So

                          x1 A∗1 + · · · + xn A∗n = 0.

Suppose for example that x1 6= 0. Then
                         µ       ¶        µ     ¶
                              x2             xn
                  A∗1 = −          + ··· + −      A∗n
                              x1             x1
and the first column of A is a linear combination of the remaining columns.
14. Consider the system

                        −2x + 3y − z =         1
                           x + 2y − z =        4
                         −2x − y + z = −3
        ¯             ¯ ¯             ¯
        ¯ −2    3 −1 ¯¯ ¯¯ 0 7 −3 ¯¯          ¯       ¯
        ¯                                     ¯ 7 −3 ¯
Let ∆ = ¯ 1
        ¯       2 −1 ¯ = ¯ 1 2 −1 ¯ = − ¯
                      ¯   ¯           ¯       ¯       ¯ = −2 6= 0.
        ¯ −2 −1                                 3 −1 ¯
                    1 ¯   ¯ 0 3 −1    ¯
   Hence the system has a unique solution which can be calculated using
Cramer’s rule:
                         ∆1        ∆2            ∆3
                    x=      , y=       , z=         ,
                         ∆          ∆            ∆
where
                            ¯              ¯
                            ¯ 1
                            ¯       3 −1 ¯¯
                   ∆1 = ¯¯ 4        2 −1 ¯¯ = −4,
                            ¯ −3 −1      1 ¯
                            ¯              ¯
                            ¯ −2    1   −1 ¯
                            ¯              ¯
                   ∆2 = ¯ 1 ¯       4 −1 ¯¯ = −6,
                            ¯ −2 −3      1 ¯
                            ¯               ¯
                            ¯ −2    3    1  ¯
                            ¯               ¯
                   ∆3 = ¯ 1 ¯       2    4 ¯¯ = −8.
                            ¯ −2 −1 −3 ¯

          −4
Hence x = −2 = 2, y = −6          −8
                      −2 = 3, z = −2 = 4.
15. In Remark 4.0.4, take A = In . Then we deduce
 (a) det Eij = −1;

 (b) det Ei (t) = t;

                                      50
 (c) det Eij (t) = 1.

Now suppose that B is a non–singular n × n matrix. Then we know that B
is a product of elementary row matrices:

                                B = E1 · · · E m .

Consequently we have to prove that

                    det E1 · · · Em A = det E1 · · · Em det A.

We prove this by induction on m.
   First the case m = 1. We have to prove det E1 A = det E1 det A if E1 is
an elementary row matrix. This follows form Remark 4.0.4:

 (a) det Eij A = − det A = det Eij det A;

 (b) det Ei (t)A = t det A = det Ei (t) det A;

 (c) det Eij (t)A = det A = det Eij (t) det A.

Let m ≥ 1 and assume the proposition holds for products of m elementary
row matrices. Then

          det E1 · · · Em Em+1 A = det (E1 · · · Em )(Em+1 A)
                                  = det (E1 · · · Em ) det (Em+1 A)
                                  = det (E1 · · · Em ) det Em+1 det A
                                  = det ((E1 · · · Em )Em+1 ) det A

and the induction goes through.
   Hence det BA = det B det A if B is non–singular.
   If B is singular, problem 26, Chapter 2.7 tells us that BA is also singlular.
However singular matrices have zero determinant, so

                           det B = 0     det BA = 0,

so the equation det BA = det B det A holds trivially in this case.
16.             ¯                              ¯
                ¯ a+b+c  a+b      a        a   ¯
                ¯                              ¯
                ¯ a+b   a+b+c     a        a   ¯
                ¯                              ¯
                ¯
                ¯   a     a   a + b + c  a + b ¯
                                               ¯
                ¯   a     a     a+b     a+b+c ¯


                                       51
                             ¯                                ¯
            R1 → R1 − R2 ¯¯ c −c             0          0     ¯
                                                              ¯
            R2 → R2 − R3 ¯¯ b b + c −b − c            −b      ¯
                                                              ¯
            R3 → R3 − R4 ¯ 0 ¯      0        c        −c      ¯
                                                              ¯
                    =        ¯ a    a      a+b a+b+c ¯
               ¯                                ¯
               ¯ c       0      0         0     ¯    ¯                            ¯
               ¯                                ¯    ¯ 2b + c −b − c       −b     ¯
 C2 → C2 + C1 ¯ b 2b + c −b − c
               ¯                        −b      ¯    ¯                            ¯
                                                ¯ = c¯ 0          c        −c     ¯
      =        ¯ 0
               ¯         0      c       −c      ¯    ¯
                                                     ¯ 2a
                                                                                  ¯
               ¯ a
                                                ¯               a + b   a + b + c ¯
                        2a   a+b a+b+c ¯
                 ¯                              ¯
                 ¯ 2b + c −b − c    −2b  −  c   ¯      ¯                    ¯
 C3 → C3 + C2 ¯¯                                ¯    2 ¯ 2b + c
                                                       ¯          −2b − c ¯¯
              c¯ 0           c          0       ¯ = c ¯ 2a
                                                ¯
      =          ¯ 2a                                           2a + 2b + c ¯
                           a + b 2a + 2b + c ¯
                     ¯                ¯
          2
                     ¯ 1       −1     ¯ = c2 (2b + c)(4a + 2b + c).
                                      ¯
       = c (2b + c) ¯¯
                       2a 2a + 2b + c ¯
             ¯                             ¯
             ¯ 1 + u1   u1     u1     u1 ¯¯
             ¯
             ¯ u2     1 + u2   u2     u2 ¯¯
17. Let ∆ = ¯¯                               . Then using the operation
             ¯ u3       u3   1 + u3   u3 ¯¯
             ¯ u4       u4     u4   1 + u4 ¯

                         R1 → R1 + R2 + R3 + R4

we have                  ¯                          ¯
                         ¯ t     t       t      t   ¯
                         ¯                          ¯
                         ¯ u2 1 + u 2   u 2    u 2
                                                    ¯
                    ∆ = ¯¯                          ¯
                         ¯ u3   u3    1 + u3   u3 ¯¯
                         ¯ u4   u4      u4   1 + u4 ¯
(where t = 1 + u1 + u2 + u3 + u4 )
                                      ¯                          ¯
                                      ¯ 1     1       1      1   ¯
                                      ¯                          ¯
                                      ¯ u2 1 + u 2   u 2    u 2
                                                                 ¯
          = (1 + u1 + u2 + u3 + u4 ) ¯¯                          ¯
                                      ¯ u3   u3    1 + u3   u3 ¯¯
                                      ¯ u4   u4      u4   1 + u4 ¯

The last determinant equals
                                  ¯                  ¯
                                  ¯ 1     0   0   0 ¯¯
                    C2 → C2 − C1 ¯¯
                                    u     1   0   0 ¯¯
                    C3 → C3 − C1 ¯¯ 2                  = 1.
                                    u     0   1   0 ¯¯
                    C4 → C4 − C1 ¯¯ 3
                                    u4    0   0   1 ¯


                                     52
18. Suppose that At = −A, that A ∈ Mn×n (F ), where n is odd. Then

                      det At = det(−A)
                      det A = (−1)n det A = − det A.

Hence (1 + 1) det A = 0 and consequently det A = 0 if 1 + 1 6= 0 in F .
19.
 ¯                 ¯                  ¯               ¯
 ¯ 1
 ¯      1   1   1 ¯¯   C4 → C4 − C3 ¯¯ 1  0    0   0 ¯¯
 ¯ r    1   1   1 ¯¯   C → C3 − C2 ¯¯ r 1 − r  0   0 ¯¯
 ¯                   = 3                                = (1 − r)3 .
 ¯ r
 ¯      r   1   1 ¯¯   C2 → C 2 − C 1 ¯ r
                                      ¯   0   1−r  0 ¯¯
 ¯ r    r   r   1 ¯         =         ¯ r 0    0  1−r ¯

20.
      ¯ 1 a2 − bc a4 ¯ R2 → R2 − R1 ¯ 1        2 − bc          4
      ¯              ¯              ¯                             ¯
                                             a               a    ¯
      ¯ 1 b2 − ca b4 ¯ R3 → R3 − R1 ¯ 0 b2 − ca − a2 + bc b4 − a4 ¯
      ¯              ¯              ¯                             ¯
      ¯              ¯              ¯                             ¯
      ¯ 1 c2 − ab c4 ¯      =       ¯ 0 c2 − ab − a2 + bc c4 − a4 ¯

                ¯ 2
                ¯ b − ca − a2 + bc b4 − a4 ¯
                                               ¯
            =   ¯
                ¯ c2 − ab − a2 + bc c4 − a4 ¯
                                               ¯

                ¯ (b − a)(b + a) + c(b − a) (b − a)(b + a)(b2 + a2 ) ¯
                ¯                                                    ¯
            =   ¯                                                    ¯
                ¯ (c − a)(c + a) + b(c − a) (c − a)(c + a)(c2 + a2 ) ¯
                ¯ (b − a)(b + a + c) (b − a)(b + a)(b2 + a2 ) ¯
                ¯                                              ¯
            =   ¯
                ¯ (c − a)(c + a + b) (c − a)(c + a)(c2 + a2 ) ¯
                                                               ¯

                               ¯ b + a + c (b + a)(b2 + a2 ) ¯
                               ¯                             ¯
            =   (b − a)(c − a) ¯
                               ¯                             ¯
                                 c + a + b (c + a)(c2 + a2 ) ¯
                                           ¯ 1 (b + a)(b2 + a2 ) ¯
                                           ¯                     ¯
            =   (b − a)(c − a)(a + b + c) ¯¯                     ¯.
                                             1 (c + a)(c2 + a2 ) ¯

Finally
 ¯ 1 (b + a)(b2 + a2 ) ¯
 ¯                     ¯
                             3    2    2   3      3    2    2   3
 ¯ 1 (c + a)(c2 + a2 ) ¯ = (c + ac + ca + a ) − (b + ab + ba + a )
 ¯                     ¯

                           = (c3 − b3 ) + a(c2 − b2 ) + a2 (c − b)
                           = (c − b)(c2 + cb + b2 + a(c + b) + a2 )
                           = (c − b)(c2 + cb + b2 + ac + ab + a2 ).



                                      53
                                     Section 5.8
1.
         (i) (−3 + i)(14 − 2i) = (−3)(14 − 2i) + i(14 − 2i)
                                       = {(−3)14 − (−3)(2i)} + i(14) − i(2i)
                                       = (−42 + 6i) + (14i + 2) = −40 + 20i.

                              2 + 3i       (2 + 3i)(1 + 4i)
                       (ii)            =
                              1 − 4i       (1 − 4i)(1 + 4i)
                                           ((2 + 3i) + (2 + 3i)(4i)
                                       =
                                                   12 + 4 2
                                           −10 + 11i     −10 11
                                       =              =       + i.
                                               17          17    17

                   (1 + 2i)2           1 + 4i + (2i)2
           (iii)                 =
                     1−i                   1−i
                                       1 + 4i − 4     −3 + 4i
                                 =                =
                                          1−i          1−i
                                       (−3 + 4i)(1 + i)    −7 + i    7 1
                                 =                       =        = − + i.
                                               2              2      2 2
2. (i)
      iz + (2 − 10i)z = 3z + 2i            ⇔   z(i + 2 − 10i − 3) = 2i
                                                                      −2i
                                         =⇔ z(−1 − 9i) = 2i ⇔ z =
                                                                     1 + 9i
                                               −2i(1 − 9i)   −18 − 2i    −9 − i
                                           =               =          =         .
                                                 1 + 81        82           41
     (ii) The coefficient determinant is
          ¯               ¯
          ¯ 1+i 2−i ¯
          ¯ 1 + 2i 3 + i ¯ = (1 + i)(3 + i) − (2 − i)(1 + 2i) = −2 + i 6= 0.
          ¯               ¯

Hence Cramer’s rule applies: there is a unique solution given by
                    ¯                ¯
                    ¯ −3i 2 − i ¯
                    ¯                ¯
                    ¯ 2 + 2i 3 + i ¯      −3 − 11i
            z =                         =          = −1 + 5i
                    ¯    −2 + i        ¯   −2 + i
                    ¯ 1+i
                    ¯          −3i ¯¯
                    ¯ 1 + 2i 2 + 2i ¯      −6 + 7i    19 − 8i
           w =                           =         =          .
                          −2 + i           −2 + i        5

                                               54
3.
                                          (1 + i)100 − 1
     1 + (1 + i) + · · · + (1 + i)99 =
                                           (1 + i) − 1
                                          (1 + i)100 − 1
                                                         = −i (1 + i)100 − 1 .
                                                             ©              ª
                                     =
                                                 i
Now (1 + i)2 = 2i. Hence

            (1 + i)100 = (2i)50 = 250 i50 = 250 (−1)25 = −250 .

Hence −i (1 + i)100 − 1 = −i(−250 − 1) = (250 + 1)i.
        ©              ª

4. (i) Let z 2 = −8 − 6i and write z=x+iy, where x and y are real. Then

                         z 2 = x2 − y 2 + 2xyi = −8 − 6i,

so x2 − y 2 = −8 and 2xy = −6. Hence
                                               µ        ¶2
                                         2         −3
                         y = −3/x,       x −                 = −8,
                                                   x

so x4 + 8x2 − 9 = 0. This is a quadratic in x2 . Hence x2 = 1 or −9 and
consequently x2 = 1. Hence x = 1, y = −3 or x = −1 and y = 3. Hence
z = 1 − 3i or z = −1 + 3i.
(ii) z 2 − (3 + i)z + 4 + 3i = 0 has the solutions z = (3 + i ± d)/2, where d is
any complex number satisfying

                       d2 = (3 + i)2 − 4(4 + 3i) = −8 − 6i.

Hence by part (i) we can take d = 1 − 3i. Consequently

                         3 + i ± (1 − 3i)                                y
                    z=                    = 2 − i or 1 + 2i.
                                2                                        6
     (i) The number lies in the first quadrant of
                                                                            : 4+i
                                                                            »
                                                                         »»»α - x
         the complex plane.
                                                                     ¾
                         p           √
                |4 + i| = 42 + 12 = 17.

        Also Arg (4 + i) = α, where tan α = 1/4
                                                                         ?
        and 0 < α < π/2. Hence α = tan −1 (1/4).



                                          55
 (ii) The number lies in the third quadrant of                              y
      the complex plane.                                                    6
            ¯        ¯
            ¯ −3 − i ¯ |−3 − i|
            ¯ 2 ¯=                                         ¾                    -x
            ¯        ¯
                          2                                     α ³
                                           √                   )³
                                                               ³
            1p         2    2
                                 1√          10             −3−i
        =       (−3) + (−1) =       9+1=        .            2
            2                    2           2
     Also Arg ( −3−i                                                        ?
                   2 ) = −π + α, where tan α =
     1 3
     2 / 2 = 1/3 and 0 < α < π/2. Hence α =
     tan −1 (1/3).
                                                               −1 + 2i
(iii) The number lies in the second quadrant of                 KA    y
      the complex plane.                                        A           6
                                                                    A
                        p              √                                A
           | − 1 + 2i| = (−1)2 + 22 = 5.
                                                           ¾        α AA        -x
     Also Arg (−1 + 2i) = π − α, where tan α =
     2 and 0 < α < π/2. Hence α = tan −1 2.
                                                              √
                                                         −1     3           ?
                                                          2 + 2 i
(iv) The number lies in the second quadrant of              ]
                                                            J     y
     the complex plane.                                      J    6
                                                              J
           ¯ −1 + i√3 ¯ | − 1 + i√3|
           ¯          ¯                                        J
                                                               αJ
                      ¯=                                   ¾     J              -x
           ¯          ¯
                2               2
           ¯
           ¯          ¯
           1
             q           √        1√
       =       (−1)2 + ( 3)2 =      1 + 3 = 1.
           2                      2
                         √                                                  ?
                          3
     Also Arg ( −1
                 2 +     2 i)   = π − α, where
               √         √
     tan α = 23 / 12 =       3 and 0 < α < π/2.
     Hence α = π/3.
                        √     √
6. (i) Let z = (1 + i)(1 +3i)( 3 − i). Then
                                √ √
              |z| = |1 + i||1 + 3i|| 3 − i|
                    p          q      √ q√
                  =    12 + 12 12 + ( 3)2 ( 3)2 + (−1)2
                    √ √ √        √
                  =   2 4 4 = 4 2.
                                          √             √
     Arg z ≡ Arg (1 + i) + Arg (1 +           3) + Arg ( 3 − i) (mod 2π)

                                     56
                     π π π   5
               ≡       + − ≡ .
                     4  3 6 12
               5
Hence Arg z = 12 and the polar decomposition of z is
                          √
                              µ                  ¶
                                   5π         5π
                     z = 4 2 cos      + i sin      .
                                   12         12
                       5
                            √   5
  (ii) Let z = (1+i)
                   √
                     (1−i 3)
                  ( 3+i)4
                             . Then

                                           √       ¡√ ¢5 5
                         |(1 + i)|5 |(1 − i 3)|5     2 2
                   |z| =        √                =         = 27/2 .
                              |( 3 + i)|   4         24

                                      √ 5         √
   Arg z ≡ Arg (1 + i)5 + Arg (1 −     3i) − Arg ( 3 + i)4 (mod 2π)
                                       √           √
            ≡ 5Arg (1 + i) + 5Arg (1 − 3i) − 4Arg ( 3 + i)
                     µ     ¶
               π       −π       π     −13π   11π
            ≡ 5 +5           −4 ≡          ≡     .
               4        3       6      12     12

Hence Arg z = 11π
               12 and the polar decomposition of z is
                             µ                    ¶
                         7/2      11π         11π
                    z=2       cos     + i sin       .
                                   12          12

7. (i) Let z = 2(cos π4 + i sin π4 ) and w = 3(cos π6 + i sin π6 ). (Both of these
numbers are already in polar form.)
 (a) zw = 6(cos ( π4 + π6 ) + i sin ( π4 + π6 ))
      = 6(cos 5π         5π
              12 + i sin 12 ).

 (b) wz = 32 (cos ( π4 − π6 ) + i sin ( π4 − π6 ))
      = 32 (cos 12
                π          π
                   + i sin 12 ).
 (c) wz = 32 (cos ( π6 − π4 ) + i sin ( π6 − π4 ))
      = 23 (cos ( −π            −π
                  12 ) + i sin ( 12 )).
        5      5
 (d) wz 2 = 232 (cos ( 5π   2π           5π   2π
                        4 − 6 ) + i sin ( 4 − 6 ))
      = 32      11π        11π
         9 (cos 12 + i sin 12 ).

 (a) (1 + i)2 = 2i, so

                   (1 + i)12 = (2i)6 = 26 i6 = 64(i2 )3 = 64(−1)3 = −64.

                                             57
 (b) ( 1−i
       √ )2 = −i, so
         2

                    µ         ¶−6           Ãµ          ¶2 !−3
                        1−i                      1−i
                         √              =         √
                          2                         2
                                                         −1    −1  1
                                        = (−i)−3 =         3
                                                             =    = = −i.
                                                         i     −i  i

                                         √               √
8. (i) To solve the equation z 2 = 1 + 3i, we write 1 + 3i in modulus–
argument form:
                           √             π       π
                       1 + 3i = 2(cos + i sin ).
                                          3      3
Then the solutions are
                      µπ                   µπ
             √          3 + 2kπ             3 + 2kπ
                 µ               ¶                  ¶¶
        zk = 2 cos                 + i sin             , k = 0, 1.
                           2                   2

Now k = 0 gives the solution
                                                   Ã√       ! √
                √        π       π   √                3   i    3  i
         z0 =       2(cos + i sin ) = 2                 +    =√ +√ .
                         6       6                   2    2    2   2

Clearly z1 = −z0 .
  (ii) To solve the equation z 4 = i, we write i in modulus–argument form:
                                              π        π
                                    i = cos     + i sin .
                                              2        2
Then the solutions are
                  µπ                  µπ
                    2 + 2kπ            2 + 2kπ
                            ¶                  ¶
        zk = cos              + i sin           ,                k = 0, 1, 2, 3.
                       4                  4
        ³π      ´
           +2kπ
                  = cos π8 + kπ
                        ¡       ¢
Now cos 2 4                   2 , so
                                    µ   ¶       µ        ¶
                                 π kπ             π kπ
                zk       = cos     +      + sin      +
                                 8   2            8    2
                           ³    π        π ´k     π        π
                         =   cos + i sin      (cos + i sin )
                                2        2         8       8
                            k     π        π
                         = i (cos + i sin ).
                                  8        8


                                              58
Geometrically, the solutions lie equi–spaced on the unit circle at arguments
              π π π   5π π      9π π   π  13π
               ,  + =   ,  +π =   ,  +3 =     .
              8 8  2   8 8       8 8   2   8
Also z2 = −z0 and z3 = −z1 .
  (iii) To solve the equation z 3 = −8i, we rewrite the equation as
                                µ         ¶3
                                     z
                                               = 1.
                                    −2i

Then            µ    ¶               √                √
                  z            −1 + 3i         −1 − 3i
                       = 1,             , or             .
                 −2i               2                2
               √            √
Hence z = −2i, 3 + i or − 3 + i.
   Geometrically, the solutions lie equi–spaced on the circle |z| = 2, at
arguments
                    π π 2π        5π π      2π    3π
                     ,   +      =    ,   +2    =      .
                    6 6      3     6 6       3     2

  (iv) To solve z 4 = 2 − 2i, we write 2 − 2i in modulus–argument form:
                                    µ                   ¶
                                3/2       −π         −π
                     2 − 2i = 2       cos    + i sin      .
                                           4          4

Hence the solutions are
                  µ −π                 µ −π
                     4 + 2kπ              4 + 2kπ
                             ¶                    ¶
           3/8
     zk = 2 cos                + i sin             ,         k = 0, 1, 2, 3.
                        4                   4

We see the solutions can also be written as
                                   µ                     ¶
                             3/8 k     −π           −π
                   zk = 2 i cos             + i sin
                                        16          16
                                   ³   π           π  ´
                       = 23/8 ik cos       − i sin      .
                                       16          16
Geometrically, the solutions lie equi–spaced on the circle |z| = 23/8 , at ar-
guments
         −π −π π   7π −π   π  15π −π   π  23π
           ,   + =   ,   +2 =    ,   +3 =     .
         16 16  2  16 16   2   16 16   2   16
Also z2 = −z0 and z3 = −z1 .

                                      59
9.
                                                         
        2 + i −1 + 2i    2                     1      i   1
                              R → R1 − R2 
      1 + i −1 + i      1  1               1 + i −1 + i 1 
                              R3 → R3 − R2
       1 + 2i −2 + i 1 + i                     i     −1   i
                                                       
                             1 i 1                  1 i 1
       R2 → R2 − (1 + i)R1 
                             0 0 −i  R2 → iR2  0 0 1 
           R3 → R3 − iR1
                             0 0 0                  0 0 0
                                           
                                     1 i 0
                      R1 → R1 − R2  0 0 1  .
                                     0 0 0
The last matrix is in reduced row–echelon form.
10. (i) Let p = l + im and z = x + iy. Then

         pz + pz = (l − im)(x + iy) + (l + im)(x − iy)
                 = (lx + liy − imx + my) + (lx − liy + imx + my)
                 = 2(lx + my).

Hence pz + pz = 2n ⇔ lx + my = n.
  (ii) Let w be the complex number which results from reflecting the com-
plex number z in the line lx + my = n. Then because p is perpendicular to
the given line, we have

                      w − z = tp,   t ∈ R.          (a)

Also the midpoint w+z
                   2 of the segment joining w and z lies on the given line,
so
                µ     ¶      µ      ¶
                  w+z          w+z
              p          +p             = n,
                    2           2
                µ     ¶      µ      ¶
                  w+z          w+z
              p          +p             = n.            (b)
                    2           2
Taking conjugates of equation (a) gives

                          w − z = tp.         (c)

Then substituting in (b), using (a) and (c), gives
                       µ         ¶     µ         ¶
                         2w − tp         2z + tp
                     p             +p              =n
                            2               2

                                    60
and hence
                                 pw + pz = n.

  (iii) Let p = b − a and n = |b|2 − |a|2 . Then

                     |z − a| = |z − b| ⇔ |z − a|2 = |z − b|2
                    ⇔ (z − a)(z − a)     =   (z − b)(z − b)
                    ⇔ (z − a)(z − a)     =   (z − b)(z − b)
                ⇔ zz − az − za + aa      =   zz − bz − zb + bb
               ⇔ (b − a)z + (b − a)z     =   |b|2 − |a|2
                          ⇔ pz + pz = n.
                                 ¯     ¯
                                 ¯ z−a ¯
    Suppose z lies on the circle ¯ z−b ¯ and let w be the reflection of z in the
line pz + pz = n. Then by part (ii)

                                 pw + pz = n.

Taking conjugates gives pw + pz = n and hence
                                n − pw
                           z=                      (a)
                                   p

Substituting for z in the circle equation, using (a) gives
                    ¯ n−pw     ¯ ¯
                    ¯ p − a ¯ ¯¯ n − pw − pa ¯¯
                    ¯          ¯                 ¯
               λ = ¯ n−pw      ¯=                  .       (b)
                    ¯
                        p  − b ¯ ¯ n − pw − pb ¯

However

                      n − pa = |b|2 − |a|2 − (b − a)a
                                = bb − aa − ba + aa
                                = b(b − a) = bp.

Similarly n − pb = ap. Consequently (b) simplifies to
                          ¯         ¯ ¯       ¯ ¯       ¯
                          ¯ bp − pw ¯ ¯ b − w ¯ ¯ w − b ¯
                    λ=¯   ¯         ¯ = ¯     ¯ = ¯     ¯,
                            ap − pw ¯ ¯ a − w ¯ ¯ w − a ¯
            ¯     ¯
            ¯ w−a ¯ 1
which gives ¯ w−b ¯ = λ .



                                       61
11. Let a and b be distinct complex numbers and 0 < α < π.
    (i) When z1 lies on the circular arc shown, it subtends a constant angle
α. This angle is given by Arg (z1 − a) − Arg (z1 − b). However
               µ         ¶
                  z1 − a
           Arg              = Arg (z1 − a) − Arg (z1 − b) + 2kπ
                  z1 − b
                            = α + 2kπ.

It follows that k = 0, as 0 < α < π and −π < Arg θ ≤ π. Hence
                                 µ        ¶
                                   z1 − a
                             Arg            = α.
                                   z1 − b
Similarly if z2 lies on the circular arc shown, then
                       µ        ¶
                         z2 − a
                   Arg            = − = −(π − α) = α − π.
                         z2 − b
Replacing α by π − α, we deduce that if z4 lies on the circular arc shown,
then                        µ        ¶
                              z4 − a
                        Arg            = π − α,
                              z4 − b
while if z3 lies on the circular arc shown, then
                                  µ        ¶
                                    z3 − a
                             Arg             = −α.
                                    z3 − b
The straight line through a and b has the equation

                              z = (1 − t)a + tb,

                                     62
where t is real. Then 0 < t < 1 describes the segment ab. Also
                                 z−a    t
                                     =     .
                                 z−b   t−1
Hence z−a
        z−b is real and negative if z is on the segment a, but is real and
positive if z is on the remaining part of the line, with corresponding values
                                 µ      ¶
                                   z−a
                            Arg            = π, 0,
                                   z−b
respectively.
  (ii) Case (a) Suppose z1 , z2 and z3 are not collinear. Then these points
determine a circle. Now z1 and z2 partition this circle into two arcs. If z3
and z4 lie on the same arc, then
                         µ          ¶       µ          ¶
                           z3 − z 1           z4 − z 1
                    Arg               = Arg              ;
                           z3 − z 2           z4 − z 2
whereas if z3 and z4 lie on opposite arcs, then
                                 µ          ¶
                                   z3 − z 1
                             Arg              =α
                                   z3 − z 2
and                              µ              ¶
                                     z4 − z 1
                           Arg                      = α − π.
                                     z4 − z 2
Hence in both cases
    µ                   ¶        µ          ¶       µ          ¶
      z3 − z 1 z4 − z 1            z3 − z 1           z4 − z 1
Arg           /           ≡ Arg               − Arg                   (mod 2π)
      z3 − z 2 z4 − z 2            z3 − z 2           z4 − z 2
                          ≡ 0 or π.
In other words, the cross–ratio
                                 z3 − z 1 z4 − z 1
                                         /
                                 z3 − z 2 z4 − z 2
is real.
(b) If z1 , z2 and z3 are collinear, then again the cross–ratio is real.
    The argument is reversible.
  (iii) Assume that A, B, C, D are distinct points such that the cross–ratio
                                     z3 − z 1 z4 − z 1
                             r=              /
                                     z3 − z 2 z4 − z 2
is real. Now r cannot be 0 or 1. Then there are three cases:

                                          63
     (i) 0 < r < 1;

 (ii) r < 0;

(iii) r > 1.

Case (i). Here |r| + |1 − r| = 1. So
            ¯                   ¯ ¯     µ                 ¶¯
            ¯ z4 − z 1 z3 − z 2 ¯ ¯       z4 − z1 z3 − z2 ¯¯
            ¯ z4 − z2 · z3 − z1 ¯ + ¯1 − z4 − z2 · z3 − z1 ¯ = 1.
            ¯                   ¯   ¯


Multiplying both sides by the denominator |z4 − z2 ||z3 − z1 | gives after
simplification

            |z4 − z1 ||z3 − z2 | + |z2 − z1 ||z4 − z3 | = |z4 − z2 ||z3 − z1 |,

or
                       (a) AD · BC + AB · CD = BD · AC.
Case (ii). Here 1 + |r| = |1 − r|. This leads to the equation

                      (b)    BD · AC + AD · BC+ = AB · CD.

Case (iii). Here 1 + |1 − r| = |r|. This leads to the equation

                       (c)   BD · AC + AB · CD = AD · BC.

Conversely if (a), (b) or (c) hold, then we can reverse the argument to deduce
that r is a complex number satisfying one of the equations

             |r| + |1 − r| = 1,    1 + |r| = |1 − r|,     1 + |1 − r| = |r|,

from which we deduce that r is real.




                                            64
                                     Section 6.3
             ·       ¸
              4 −3
1. Let A =             . Then A has characteristic equation λ2 − 4λ + 3 = 0
              1    0
or (λ − 3)(λ − 1) = 0. Hence the eigenvalues of A are λ1 = 3 and λ2 = 1.
    λ1 = 3. The corresponding eigenvectors satisfy (A − λ1 I2 )X = 0, or
                            ·        ¸ · ¸
                              1 −3         0
                                      =        ,
                              1 −3         0

or equivalently x − 3y = 0. Hence
                        · ¸ ·        ¸    · ¸
                           x      3y       3
                              =        =y
                           y       y       1
                         ·     ¸
                             3
and we take X1 =                 .
                             1
                                                       · ¸
                                                         1
   Similarly for λ2 = 1 we find the eigenvector X2 =        .
                                                         1
                            ·       ¸
                              3 1
   Hence if P = [X1 |X2 ] =           , then P is non–singular and
                              1 1
                                                     ·          ¸
                                         −1              3 0
                                     P        AP =                  .
                                                         0 1

Hence                                          ·          ¸
                                                   3 0
                                     A=P                      P −1
                                                   0 1
and consequently

                                      3n 0
                                     ·         ¸
                     n
                 A           =   P               P −1
                                       0 1n
                                 ·         ¸· n        ¸ ·           ¸
                                   3 1        3     0      1    1 −1
                             =
                                   1 1         0 1n 2 −1           3
                                   · n+1        ¸·             ¸
                                 1 3         1         1 −1
                             =           n
                                 2     3     1      −1       3
                                   · n+1
                                            − 1 −3n+1 + 3
                                                               ¸
                                 1 3
                             =
                                 2     3n − 1      −3n + 3
                                 3n − 1       3 − 3n
                             =           A+           I2 .
                                    2            2

                                                   65
            ·          ¸
            3/5 4/5
2. Let A =               . Then we find that the eigenvalues are λ1 = 1 and
            2/5 1/5
λ2 = −1/5, with corresponding eigenvectors
                           · ¸                ·      ¸
                            2                    −1
                   X1 =          and X2 =              .
                            1                      1

Then if P = [X1 |X2 ], P is non–singular and
                   ·            ¸             ·        ¸
          −1           1    0                   1  0
         P AP =                     and A = P            P −1 .
                       0 −1/5                   0 −1/5

Hence
                              ·         ¸
                            1        0
                 An   =   P               P −1
                            0 (−1/5)n
                          ·     ¸
                            1 0
                      → P         P −1
                            0 0
                        ·       ¸·        ¸ ·      ¸
                          2 −1      1 0 1      1 1
                      =
                          1   1     0 0 3 −1 2
                          ·     ¸·          ¸
                        1 2 0         1 1
                      =
                        3 1 0       −1 2
                          ·     ¸ ·            ¸
                        1 2 2          2/3 2/3
                      =           =              .
                        3 1 1          1/3 1/3

3. The given system of differential equations is equivalent to Ẋ = AX,
where                   ·         ¸              · ¸
                           3 −2                   x
                    A=                and X =         .
                           5 −4                   y
                  ·       ¸
                    2 1
The matrix P =              is a non-singular matrix of eigenvectors corre-
                    5 1
sponding to eigenvalues λ1 = −2 and λ2 = 1. Then
                                     ·        ¸
                            −1          −2 0
                          P AP =                .
                                         0 1

The substitution X = P Y , where Y = [x1 , y1 ]t , gives
                                 ·        ¸
                                   −2 0
                            Ẏ =            Y,
                                    0 1


                                      66
or equivalently x˙1 = −2x1 and y˙1 = y1 .
    Hence x1 = x1 (0)e−2t and y1 = y1 (0)et . To determine x1 (0) and y1 (0),
we note that
      ·         ¸        ·      ¸         ·        ¸·     ¸ · ¸
         x1 (0)       −1   x(0)       1      1 −1      13        3
                  =P              =−                        =        .
         y1 (0)            y(0)       3 −5       2     22        7

Hence x1 = 3e−2t and y1 = 7et . Consequently
      x = 2x1 + y1 = 6e−2t + 7et     and       y = 5x1 + y1 = 15e−2t + 7et .
                                 ·        ¸
                                     xn
4. Introducing the vector Xn =                , the system of recurrence relations
                                     yn
                           xn+1 = 3xn − yn
                         yn+1 = −xn + 3yn ,
                                  ·         ¸
                                      3 −1
becomes Xn+1 = AXn , where A =                . Hence Xn = An X0 , where
                                    −1    3
     · ¸
        1
X0 =       .
        2
   To find An we can use the eigenvalue method. We get
                           1 2n + 4 n 2n − 4 n
                             ·                   ¸
                      n
                     A =                           .
                           2 2n − 4 n 2n + 4 n
Hence
                     1 2n + 4 n 2n − 4 n
                       ·                    ¸· ¸
                                                1
            Xn =           n − 4 n 2n + 4 n
                     2   2                      2
                     1 2 + 4n + 2(2n − 4n )
                       · n                      ¸
                 =
                     2 2n − 4n + 2(2n + 4n )
                     1 3 × 2 n − 4n          (3 × 2n − 4n )/2
                       ·              ¸ ·                     ¸
                 =                     =                        .
                     2 3 × 2 n + 4n          (3 × 2n + 4n )/2

Hence xn = 12 (3 × 2n − 4n ) and yn = 12 (3 × 2n + 4n ).
             ·      ¸
               a b
5. Let A =            be a real or complex matrix with distinct eigenvalues
               c d
λ1 , λ2 and corresponding eigenvectors X1 , X2 . Also let P = [X1 |X2 ].
   (a) The system of recurrence relations
                            xn+1 = axn + byn
                            yn+1 = cxn + dyn

                                      67
has the solution
          ·     ¸       ·      ¸ µ ·               ¸      ¶n ·    ¸
            xn        n   x0               λ1 0        −1      x0
                  = A           = P                  P
            yn            y0                0 λ2               y0
                      · n          ¸       ·     ¸
                         λ1 0                x0
                  = P           n     P −1
                          0 λ2               y0
                              · n          ¸·    ¸
                                λ1 0           α
                  = [X1 |X2 ]
                                 0 λn2         β
                              · n ¸
                                λ1 α
                  = [X1 |X2 ]            = λn1 αX1 + λn2 βX2 ,
                                λn2 β

where                          ·       ¸                  ·        ¸
                                   α              −1          x0
                                           =P                          .
                                   β                          y0
                                                                                    ·        ¸
                                                                                           x
(b) In matrix form, the system is Ẋ = AX, where X =                                           . We substitute
                                                                                           y
X = P Y , where Y = [x1 , y1 ]t . Then

                          Ẋ = P Ẏ = AX = A(P Y ),

so                                               ·                     ¸·              ¸
                                                      λ1 0                     x1
                   Ẏ = (P −1 AP )Y =                                                      .
                                                      0 λ2                     y1
Hence x˙1 = λ1 x1 and y˙1 = λ2 y1 . Then

                   x1 = x1 (0)eλ1 t          and          y1 = y1 (0)eλ2 t .

But                        ·            ¸             ·                ¸
                                 x(0)                     x1 (0)
                                            =P                             ,
                                 y(0)                     y1 (0)
so                  ·            ¸               ·             ¸           ·       ¸
                        x1 (0)              −1        x(0)                     α
                                     =P                            =                   .
                        y1 (0)                        y(0)                     β
Consequently x1 (0) = α and y1 (0) = β and

                                                    αeλ1 t
                · ¸          ·      ¸             ·        ¸
                  x              x1
                        = P           = [X1 |X2 ]
                  y              y1                 βeλ2 t
                           = αeλ1 t X1 + βeλ2 t X2 .



                                                 68
            ·        ¸
               a b
6. Let A =             be a real matrix with non–real eigenvalues λ = a + ib
               c d
and λ = a−ib, with corresponding eigenvectors X = U +iV and X = U −iV ,
where U and V are real vectors. Also let P be the real matrix defined by
P = [U |V ]. Finally let a + ib = reiθ , where r > 0 and θ is real.
(a) As X is an eigenvector corresponding to the eigenvalue λ, we have AX =
λX and hence

                  A(U + iV ) = (a + ib)(U + iV )
                  AU + iAV     = aU − bV + i(bU + aV ).

Equating real and imaginary parts then gives

                             AU   = aU − bV
                             AV   = bU + aV.

(b)
                                                          ·          ¸        ·          ¸
                                                               a b                 a b
AP = A[U |V ] = [AU |AV ] = [aU −bV |bU +aV ] = [U |V ]                  =P                  .
                                                              −b a                −b a

Hence, as P can be shown to be non–singular,
                                   ·         ¸
                          −1          a b
                        P AP =                 .
                                     −b a

(The fact that P is non–singular is easily proved by showing the columns of
P are linearly independent: Assume xU + yV = 0, where x and y are real.
Then we find

                 (x + iy)(U − iV ) + (x − iy)(U + iV ) = 0.

Consequently x+iy = 0 as U −iV and U +iV are eigenvectors corresponding
to distinct eigenvalues a − ib and a + ib and are hence linearly independent.
Hence x = 0 and y = 0.)
(c) The system of recurrence relations

                            xn+1 = axn + byn
                            yn+1 = cxn + dyn



                                     69
has solution
    ·      ¸       ·       ¸
       xn        n    x0
             = A
       yn             y0
                 ·            ¸n      ·     ¸
                       a b         −1   x0
             = P                 P
                     −b a               y0
                 ·                      ¸n ·     ¸
                      r cos θ r sin θ         α
             = P
                     −r sin θ r cos θ         β
                     ·                  ¸n ·     ¸
                   n     cos θ sin θ          α
             = Pr
                        − sin θ cos θ         β
                          ·                     ¸·   ¸
                n             cos nθ sin nθ        α
             = r [U |V ]
                             − sin nθ cos nθ       β
                          ·                        ¸
                n             α cos nθ + β sin nθ
             = r [U |V ]
                             −α sin nθ + β cos nθ
                n
             = r {(α cos nθ + β sin nθ)U + (−α sin nθ + β cos nθ)V }
              = rn {(cos nθ)(αU + βV ) + (sin nθ)(βU − αV )} .

(d) The system of differential equations
                                   dx
                                               = ax + by
                                   dt
                                   dy
                                               = cx + dy
                                   dt
is attacked using the substitution X = P Y , where Y = [x1 , y1 ]t . Then

                                   Ẏ = (P −1 AP )Y,

so                      ·          ¸       ·          ¸·        ¸
                            x˙1                 a b        x1
                                       =                            .
                            y˙1                −b a        y1
Equating components gives

                              x˙1 = ax1 + by1
                                  y˙1 = −bx1 + ay1 .

Now let z = x1 + iy1 . Then

              ż = x˙1 + iy˙1 = (ax1 + by1 ) + i(−bx1 + ay1 )
                                  = (a − ib)(x1 + iy1 ) = (a − ib)z.

                                                70
Hence

                     z = z(0)e(a−ib)t
              x1 + iy1 = (x1 (0) + iy1 (0))eat (cos bt − i sin bt).

Equating real and imaginary parts gives

                   x1 = eat {x1 (0) cos bt + y1 (0) sin bt}
                   y1 = eat {y1 (0) cos bt − x1 (0) sin bt} .

Now if we define α and β by
                         ·   ¸       ·      ¸
                           α      −1   x(0)
                               =P             ,
                           β           y(0)

we see that α = x1 (0) and β = y1 (0). Then
       · ¸            ·    ¸
         x              x1
               = P
          y             y1
                         · at                        ¸
                           e (α cos bt + β sin bt)
               = [U |V ]
                           eat (β cos bt − α sin bt)
                = eat {(α cos bt + β sin bt)U + (β cos bt − α sin bt)V }
                = eat {cos bt(αU + βV ) + sin bt(βU − αV )}.
                                                   ·     ¸
                                                   a b
7. (The case of repeated eigenvalues.) Let A =             and suppose that
                                                   c d
the characteristic polynomial of A, λ2 − (a + d)λ + (ad − bc), has a repeated
root α. Also assume that A 6= αI2 .

  (i)

                  λ2 − (a + d)λ + (ad − bc) = (λ − α)2
                                                = λ2 − 2αλ + α2 .

        Hence a + d = 2α and ad − bc = α2 and

                                    (a + d)2 = 4(ad − bc),
                              a2 + 2ad + d2 = 4ad − 4bc,
                       a2 − 2ad + d2 + 4bc = 0,
                             (a − d)2 + 4bc = 0.

                                       71
(ii) Let B − A − αI2 . Then
             B 2 = (A − αI2 )2 = A2 − 2αA + α2 I2
                               = A2 − (a + d)A + (ad − bc)I2 ,

    But by problem 3, chapter 2.4, A2 − (a + d)A + (ad − bc)I2 = 0, so
    B 2 = 0.
(iii) Now suppose that B 6= 0. Then BE1 6= 0 or BE2 6= 0, as BEi is the
      i–th column of B. Hence BX2 6= 0, where X2 = E1 or X2 = E2 .
(iv) Let X1 = BX2 and P = [X1 |X2 ]. We prove P is non–singular by
     demonstrating that X1 and X2 are linearly independent.
    Assume xX1 + yX2 = 0. Then
                           xBX2 + yX2 = 0
                       B(xBX2 + yX2 ) = B0 = 0
                        xB 2 X2 + yBX2 = 0
                         x0X2 + yBX2 = 0
                                 yBX2 = 0.
    Hence y = 0 as BX2 6= 0. Hence xBX2 = 0 and so x = 0.
    Finally, BX1 = B(BX2 ) = B 2 X2 = 0, so (A − αI2 )X1 = 0 and
                         AX1 = αX1 .                 (2)
    Also
                 X1 = BX2 = (A − αI2 )X2 = AX2 − αX2 .
    Hence
                       AX2 = X1 + αX2 .                (3)
    Then, using (2) and (3), we have
                  AP = A[X1 |X2 ] = [AX1 |AX2 ]
                                   = [αX1 |X1 + αX2 ]
                                               ·      ¸
                                                 α 1
                                   = [X1 |X2 ]          .
                                                 0 α
    Hence                              ·         ¸
                                           α 1
                              AP = P
                                           0 α
    and hence

                                 72
                                            ·         ¸
                                −1              α 1
                            P        AP =                 .
                                                0 α

8. The system of differential equations
                              ·         ¸is equivalent to the single matrix
                                 4 −1
equation Ẋ = AX, where A =               .
                                 4   8
   The characteristic polynomial of A is λ2 − 12λ + 36 = (λ − 6)2 , so we
can use the previous question with α = 6. Let
                                      ·           ¸
                                         −2 −1
                       B = A − 6I2 =                .
                                            4   2
              ·     ¸ · ¸              · ¸
                 −2       0              1
Then BX2 =             6=    , if X2 =      . Also let X1 = BX2 . Then if
                  4       0              0
P = [X1 |X2 ], we have               ·       ¸
                            −1          6 1
                           P AP =              .
                                        0 6
                                                        ·    ¸
                                                          x1
Now make the change of variables X = P Y , where Y =           . Then
                                                          y1
                                                ·             ¸
                                 −1                 6 1
                       Ẏ = (P        AP )Y =                     Y,
                                                    0 6

or equivalently x˙1 = 6x1 + y1 and y˙1 = 6y1 .
    Solving for y1 gives y1 = y1 (0)e6t . Consequently

                            x˙1 = 6x1 + y1 (0)e6t .

Multiplying both side of this equation by e−6t gives
                  d −6t
                     (e x1 ) = e−6t x˙1 − 6e−6t x1 = y1 (0)
                  dt
                       e−6t x1 = y1 (0)t + c,

where c is a constant. Substituting t = 0 gives c = x1 (0). Hence

                           e−6t x1 = y1 (0)t + x1 (0)

and hence
                          x1 = e6t (y1 (0)t + x1 (0)).

                                         73
However, since we are assuming x(0) = 1 = y(0), we have
    ·        ¸            ·      ¸
      x1 (0)           −1   x(0)
                = P
      y1 (0)                y(0)
                         ·         ¸· ¸         ·     ¸ ·     ¸
                      1      0 −1     1       1    −1     1/4
                =                         =             =       .
                     −4 −4 −2         1      −4 −6        3/2

Hence x1 = e6t ( 32 t + 14 ) and y1 = 23 e6t .
   Finally, solving for x and y,
                     · ¸          ·            ¸·        ¸
                       x            −2 1            x1
                               =
                       y              4 0           y1
                                               ¸ e ( t + 1)
                                                 6t 3              
                                  ·
                                    −2 1                 2     4
                               =                                    
                                      4 0                 3 6t
                                                          2e
                                     (−2)e6t ( 23 t + 14 ) + 32 e6t
                                                                   

                               =                                   
                                               6t  3       1
                                            4e ( 2 t + 4 )
                                  · 6t               ¸
                                    e (1 − 3t)
                               =                       .
                                    e6t (6t + 1)

Hence x = e6t (1 − 3t) and y = e6t (6t + 1).
9. Let                                         
                                    1/2 1/2 0
                              A =  1/4 1/4 1/2  .
                                    1/4 1/4 1/2
(a) We first determine the characteristic polynomial chA (λ).
                              ¯                               ¯
                              ¯ λ − 1/2        −1/2         0 ¯
                              ¯                               ¯
chA (λ) = det (λI3 − A) = ¯   ¯       1/4 λ − 1/4       −1/2 ¯¯
                              ¯ −1/4           −1/4 λ − 1/2 ¯
             µ       ¶ ¯                      ¯     ¯                ¯
                   1 ¯¯ λ − 1/4        −1/2 ¯¯ 1 ¯¯ 1/4        −1/2 ¯¯
         =     λ−                               +
                   2 ¯ −1/4 λ − 1/2 ¯ 2 ¯ −1/4 λ − 1/2 ¯
             µ       ¶ ½µ         ¶µ         ¶      ¾     ½    µ       ¶     ¾
                   1            1          1      1     1 −1        1      1
         =     λ−         λ−          λ−        −     +         λ−       −
                   2            4          2      8     2   4       2      8
             µ       ¶µ           ¶
                   1          3λ        λ
         =     λ−        λ2 −        −
                   2            4       8
               ½µ        ¶µ         ¶      ¾
                       1          3      1
         = λ      λ−        λ−        −
                       2          4      8

                                            74
            µ             ¶
                   5λ 1
         = λ λ2 −     +
                    4   4
                   µ      ¶
                        1
         = λ(λ − 1) λ −     .
                        4
(b) Hence the characteristic polynomial has no repeated roots and we can
use Theorem 6.2.2 to find a non–singular matrix P such that
                                                1
                         P −1 AP = diag(1, 0,     ).
                                                4
We take P = [X1 |X2 |X3 ], where X1 , X2 , X3 are eigenvectors corresponding
to the respective eigenvalues 1, 0, 14 .
Finding X1 : We have to solve (A − I3 )X = 0. we have
                                                             
                        −1/2     1/2       0         1 0 −1
           A − I3 =  1/4 −3/4           1/2  →  0 1 −1  .
                         1/4     1/4 −1/2            0 0     0
Hence the eigenspace consists of vectors X = [x, y, z]t satisfying x = z and
y = z, with z arbitrary. Hence
                                         
                                  z         1
                          X =  z  = z 1 
                                  z         1
and we can take X1 = [1, 1, 1]t .
Finding X2 : We solve AX = 0. We have
                                           
                       1/2 1/2 0        1 1 0
                A =  1/4 1/4 1/2  →  0 0 1  .
                       1/4 1/4 1/2      0 0 0
Hence the eigenspace consists of vectors X = [x, y, z]t satisfying x = −y
and z = 0, with y arbitrary. Hence
                                            
                                −y         −1
                        X =  y  = y 1 
                                 0          0
and we can take X2 = [−1, 1, 0]t .
   Finding X3 : We solve (A − 14 I3 )X = 0. We have
                                                    
                         1/4 1/2 0               1 0 2
                1
            A − I3 =  1/4 0 1/2  →  0 1 −1  .
                4
                         1/4 1/4 1/4             0 0 0

                                    75
Hence the eigenspace consists of vectors X = [x, y, z]t satisfying x = −2z
and y = z, with z arbitrary. Hence
                                             
                               −2z          −2
                        X=       z  = z 1 
                                  0           0

                          1, 1]t .
and we can take X3 = [−2,             
                             1 −1 −2
   Hence we can take P =  1       1 1 .
                             1     0 1
(c) A = P diag(1, 0, 14 )P −1 so An = P diag(1, 0, 41n )P −1 .
    Hence
                                                                 
                   1 −1 −2             1 0 0              1      1  1
                                                    1
       An =  1           1    1  0 0 0   0                  3 −3 
                                              1     3
                   1      0    1       0 0 4n            −1 −1      2
                                 2
                                                     
                      1 0 − 4n             1    1     1
                1               1 
            =         1 0       4n         0    3 −3 
                3                1
                      1 0       4n       −1 −1        2
                            2        2        4
                                                 
                      1 + 4n 1 + 4n 1 − 4n
                1
            =         1 − 41n 1 − 41n 1 + 42n 
                3
                      1 − 41n 1 − 41n 1 + 42n
                                                            
                      1 1 1                     2     2 −4
                1                      1    −1 −1
            =         1 1 1 +                             2 .
                3                    3 · 4n
                      1 1 1                   −1 −1        2

10. Let                               
                               5  2 −2
                           A= 2  5 −2  .
                              −2 −2  5
(a) We first determine the characteristic polynomial chA (λ).

                     ¯                                   ¯               ¯
                     ¯ λ − 5 −2       2                   ¯ λ − 5 −2   2 ¯¯
                                            R → R   + R
                                      2  3       3     2 ¯
                     ¯                                    ¯
          chA (λ) = ¯¯ −2 λ − 5                           ¯ −2 λ − 5   2 ¯¯
                                                =
                     ¯ 2         2   λ−5                  ¯ 0     λ−3 λ−3 ¯
                             ¯              ¯
                             ¯ λ − 5 −2 2 ¯
                             ¯              ¯
                  = (λ − 3) ¯¯ −2 λ − 5 2 ¯¯
                             ¯ 0      1   1 ¯

                                      76
                             ¯                     ¯
                             ¯ λ − 5 −2        4   ¯
                             ¯                     ¯
 C3 → C 3 − C 2   = (λ − 3) ¯¯ −2 λ − 5 −λ + 7 ¯¯
                             ¯ 0      1        0   ¯
                               ¯              ¯
                               ¯ λ−5    4     ¯
                  = −(λ − 3) ¯¯               ¯
                                  −2 −λ + 7 ¯
                  = −(λ − 3) {(λ − 5)(−λ + 7) + 8}
                  = −(λ − 3)(−λ2 + 5λ + 7λ − 35 + 8)
                  = −(λ − 3)(−λ2 + 12λ − 27)
                  = −(λ − 3)(−1)(λ − 3)(λ − 9)
                  = (λ − 3)2 (λ − 9).

We have to find bases for each of the eigenspaces N (A−9I3 ) and N (A−3I3 ).
   First we solve (A − 3I3 )X = 0. We have
                                                         
                             2     2 −2           1 1 −1
              A − 3I3 =  2        2 −2  →  0 0        0 .
                            −2 −2        2        0 0    0

Hence the eigenspace consists of vectors X = [x, y, z]t satisfying x = −y +z,
with y and z arbitrary. Hence
                                                 
                        −y + z            −1            1
                X=        y      = y 1  + z 0 ,
                           z               0            1

so X1 = [−1, 1, 0]t and X2 = [1, 0, 1]t form a basis for the eigenspace
corresponding to the eigenvalue 3.
    Next we solve (A − 9I3 )X = 0. We have
                                                    
                            −4     2 −2       1 0 1
              A − 9I3 =  2 −4 −2  →  0 1 1  .
                            −2 −2 −4          0 0 0

Hence the eigenspace consists of vectors X = [x, y, z]t satisfying x = −z
and y = −z, with z arbitrary. Hence
                                            
                               −z          −1
                        X =  −z  = z  −1 
                                 z          1

and we can take X3 = [−1, −1, 1]t as a basis for the eigenspace correspond-
ing to the eigenvalue 9.

                                     77
Then Theorem 6.2.3 assures us that P = [X1 |X2 |X3 ] is non–singular and
                                         
                                  3 0 0
                    P −1 AP =  0 3 0  .
                                  0 0 9




                                 78
            y      y                                                    y   y
                13.51                                                           1

                                                                            8
                9
                                                                            4
                4.5
                                                                                            x
                                   x                         -8    -4               4   8   x
                                   x1                                                           1
-9   -4.5               4.5   9   13.5
                                                                            -4
                -4.5

                                                                            -8
                -9




                Figure 1: (a): x2 − 8x + 8y + 8 = 0;        (b): y 2 − 12x + 2y + 25 = 0



                                         Section 7.3
            1. (i) x2 −8x+8y+8 = (x−4)2 +8(y−1). So the equation x2 −8x+8y+8 = 0
            becomes
                                   x21 + 8y1 = 0       (1)
            if we make a translation of axes x − 4 = x1 , y − 1 = y1 .
                However equation (1) can be written as a standard form
                                                   1
                                             y1 = − x21 ,
                                                   8
            which represents a parabola with vertex at (4, 1). (See Figure 1(a).)
            (ii) y 2 − 12x + 2y + 25 = (y + 1)2 − 12(x − 2). Hence y 2 − 12x + 2y + 25 = 0
            becomes
                                       y12 − 12x1 = 0         (2)
            if we make a translation of axes x − 2 = x1 , y + 1 = y1 .
                However equation (2) can be written as a standard form

                                             y12 = 12x1 ,

            which represents a parabola with vertex at (2, −1). (See Figure 1(b).)
                                                   ·         ¸            · ¸
                         2      t                    0     2                x
            2. 4xy − 3y = X AX, where A =                      and X =          . The
                                                     2 −3                   y
            eigenvalues of A are the roots of λ2 + 3λ − 4 = 0, namely λ1 = −4 and
            λ2 = 1.

                                                 79
    The eigenvectors corresponding to an eigenvalue λ are the non–zero vec-
tors [x, y]t satisfying
                       ·              ¸· ¸ · ¸
                         0−λ    2         x       0
                                              =       .
                          2  −3 − λ       y       0

λ1 = −4 gives equations

                              4x + 2y = 0
                                2x + y = 0

which has the solution y = −2x. Hence
                      · ¸ ·            ¸    ·    ¸
                        x           x          1
                            =            =x        .
                        y       −2x           −2
                                       √      √
A corresponding unit eigenvector is [1/ 5, −2/ 5]t .
λ2 = 1 gives equations

                              −x + 2y = 0
                               2x − 4y = 0

which has the solution x = 2y. Hence
                        · ¸ ·          ¸    · ¸
                          x        2y         2
                              =          =y       .
                          y         y         1
                                       √     √
A corresponding unit eigenvector is [2/ 5, 1/ 5]t .
   Hence if                     " 1      2
                                            #
                                    √     √
                             P =      5     5   ,
                                    −2
                                    √     √1
                                      5     5

then P is an orthogonal matrix. Also as det P = 1, P is a proper orthogonal
matrix and the equation
                            · ¸        ·     ¸
                              x           x1
                                  =P
                              y           y1

represents a rotation to new x1 , y1 axes whose positive directions are given
by the respective columns of P . Also
                                      ·       ¸
                             t          −4 0
                           P AP =               .
                                          0 1

                                     80
Then X t AX = −4x21 + y12 and the original equation 4xy − 3y 2 = 8 becomes
−4x21 + y12 = 8, or the standard form
                               −x21 y12
                                   +    = 1,
                                2    8
which represents an hyperbola.
   The asymptotes assist in drawing the curve. They are given by the
equations
                      −x21 y12
                          +     = 0, or y1 = ±2x1 .
                       2      8
Now                           · ¸ " √1 √      #· ¸
                ·      ¸                   −2
                   x1           x                 x
                         = Pt       = √25 √15        ,
                   y1           y       5   5
                                                   y
so
                              x − 2y                2x + y
                       x1 =     √ ,         y1 =     √ .
                                 5                     5
Hence the asymptotes are
                                          µ              ¶
                          2x + y              x − 2y
                           √     = ±2           √            ,
                             5                   5
which reduces to y = 0 and y = 4x/3. (See Figure 2(a).)
                                          ·          ¸           · ¸
                                              8 −2                 x
3. 8x2 − 4xy + 5y 2 = X t AX, where A =                and X =        . The
                                            −2     5               y
eigenvalues of A are the roots of λ2 − 13λ + 36 = 0, namely  √ λ1 √ = 4 and
λ2 =√9. Corresponding
           √ t          unit eigenvectors turn out to be [1/  5, 2/  5]t and
[−2/ 5, 1/ 5] . Hence if
                                  " 1 −2 #
                                    √         √
                              P =     5         5    ,
                                    √2        √1
                                      5         5

then P is an orthogonal matrix. Also as det P = 1, P is a proper orthogonal
matrix and the equation
                            · ¸        ·     ¸
                              x           x1
                                  =P
                              y           y1
represents a rotation to new x1 , y1 axes whose positive directions are given
by the respective columns of P . Also
                                      ·      ¸
                              t          4 0
                            P AP =             .
                                         0 9

                                       81
              y                                                                 y   2.85       x
                                                                                                   2


                   16                                                               1.9
                                          y                y
                                          2                 2
                   8                                                                0.95

                                          x                                                                  x
-16      -8              8           16                   -2.85    -1.9 -0.95               0.95       1.9   2.85

                   -8                                                               -0.95


                   -16                                                              -1.9

                             x                                                      -2.85
                                 2




                  Figure 2: (a): 4xy − 3y 2 = 8;               (b): 8x2 − 4xy + 5y 2 = 36


      Then X t AX = 4x21 + 9y12 and the original equation 8x2 − 4xy + 5y 2 = 36
      becomes 4x21 + 9y12 = 36, or the standard form
                                      x21 y12
                                         +     = 1,
                                       9    4
      which represents an ellipse as in Figure 2(b).
         The axes of symmetry turn out to be y = 2x and x = −2y.
      4. We give the sketch only for parts (i), (iii) and (iv). We give the working
      for (ii) only. See Figures 3(a) and 4(a) and 4(b), respectively.
          (ii) We have to investigate the equation
                                        √        √
                  5x2 − 4xy + 8y 2 + 4 5x − 16 5y + 4 = 0.                 (3)
                                                       ·            ¸            · ¸
                2           2       t                      5 −2                     x
      Here 5x − 4xy + 8y = X AX, where A =                            and X =           .
                                                         −2      8                  y
      The eigenvalues of A are the roots of λ2 − 13λ + 36 = 0, namely √      λ1√= 9 and
      λ2 √
         = 4. Corresponding
                  √ t          unit  eigenvectors turn out to be  [1/   5,  −2/  5]t and
      [2/ 5, 1/ 5] . Hence if
                                          " 1      2
                                                      #
                                                    √       √
                                              P =     5       5    ,
                                                    −2
                                                    √       √1
                                                      5       5

      then P is an orthogonal matrix. Also as det P = 1, P is a proper orthogonal
      matrix and the equation
                                  · ¸        ·     ¸
                                    x           x1
                                        =P
                                    y           y1

                                                    82
           y           y                                                     y y      4.5                x
                       1                                                      2                              2

               6
                                                                                      3

               3                                                                      1.5

                                         x                                                               x
-6    -3                   3     6                            -4.5   -3    -1.5              1.5     3   4.5
                                         x
                                             1
               -3                                                                     -1.5


                                                                                      -3
               -6

                                                                                      -4.5




√         (a): 4x2 − 9y 2 − 24x − 36y − 36 = 0;
Figure 3: √                                                                 (b): 5x2 − 4xy + 8y 2 +
  5x − 16 5y + 4 = 0


                   y             y                                                y
                                     2


                       9                                                              9


                       4.5                                                            4.5                y
                                                                                                         2

                                                 x                                                       x
     -9    -4.5                4.5       9                           -9    -4.5              4.5     9

                       -4.5                                                           -4.5


                       -9                        x                                    -9
                                                     2


                                                                                             x
                                                                                                 2




Figure 4: (a): 4x2 + y 2 − 4xy − 10y − 19 = 0;                            (b): 77x2 + 78xy − 27y 2 +
70x − 30y + 29 = 0




                                                         83
represents a rotation to new x1 , y1 axes whose positive directions are given
by the respective columns of P . Also
                                      ·      ¸
                              t          9 0
                            P AP =             .
                                         0 4

Moreover
                        5x2 − 4xy + 8y 2 = 9x21 + 4y12 .
To get the coefficients of x1 and y1 in the transformed form of equation (3),
we have to use the rotation equations
                       1                      1
                  x = √ (x1 + 2y1 ),     y = √ (−2x1 + y1 ).
                        5                      5
Then equation (3) transforms to

                       9x21 + 4y12 + 36x1 − 8y1 + 4 = 0,

or, on completing the square,

                        9(x1 + 2)2 + 4(y1 − 1)2 = 36,

or in standard form
                                     x22 y22
                                        +     = 1,
                                      4    9
where x2 = x1 + 2 and y2 = y1 − 1. Thus we have              √ an ellipse, centre
(x2 , y2 ) = (0, 0), or (x1 , y1 ) = (−2, 1), or (x, y) = (0, 5).
     The axes of symmetry are given by x2 = 0 and y2 = 0, or x1 + 2 = 0
and y1 − 1 = 0, or
              1                         1
             √ (x − 2y) + 2 = 0 and √ (2x + y) − 1 = 0,
               5                         5
                          √                  √
which reduce to x − 2y + 2 5 = 0 and 2x + y − 5 = 0. See Figure 3(b).
5. (i) Consider the equation

            2x2 + y 2 + 3xy − 5x − 4y + 3 = 0.         (4)
     ¯                   ¯      ¯            ¯     ¯             ¯
     ¯
     ¯    2 3/2 −5/2 ¯¯         ¯ 4
                                ¯     3 −5 ¯¯      ¯ 1
                                                   ¯       1 −1 ¯¯
∆ = ¯¯ 3/2    1      −2 ¯¯ = 8 ¯¯ 3   2 −4 ¯¯ = 8 ¯¯ 3     2 −4 ¯¯ = 0.
     ¯ −5/2 −2         3 ¯      ¯ −5 −4    6 ¯     ¯ −2 −2    2 ¯



                                       84
Let x = x1 + α, y = y1 + β and substitute in equation (4) to get

2(x1 + α)2 + (y1 + β)2 + 3(x1 + α)(y1 + β) − 5(x1 + α) − 4(y1 + β) + 3 = 0   (5).

Then equating the coefficients of x1 and y1 to 0 gives

                             4α + 3β − 5 = 0
                             3α + 2β − 4 = 0,

which has the unique solution α = 2, β = −1. Then equation (5) simplifies
to
               2x21 + y12 + 3x1 y1 = 0 = (2x1 + y1 )(x1 + y1 ).
So relative to the x1 , y1 coordinates, equation (4) describes two lines: 2x1 +
y1 = 0 and x1 + y1 = 0. In terms of the original x, y coordinates, these lines
become 2(x − 2) + (y + 1) = 0 and (x − 2) + (y + 1) = 0, i.e. 2x + y − 3 = 0
and x + y − 1 = 0, which intersect in the point

                          (x, y) = (α, β) = (2, −1).

   (ii) Consider the equation

                   9x2 + y 2 − 6xy + 6x − 2y + 1 = 0. (6)

Here                            ¯          ¯
                                ¯ 9 −3  3 ¯¯
                                ¯
                           ∆ = ¯¯ 3  1 −1 ¯¯ = 0,
                                ¯ 3 −1  1 ¯
as column 3 = − column 2.
    Let x = x1 + α, y = y1 + β and substitute in equation (6) to get

9(x1 + α)2 + (y1 + β)2 − 6(x1 + α)(y1 + β) + 6(x1 + α) − 2(y1 + β) + 1 = 0.

Then equating the coefficients of x1 and y1 to 0 gives

                             18α − 6β + 6 = 0
                            −6α + 2β − 2 = 0,

or equivalently −3α + β − 1 = 0. Take α = 0 and β = 1. Then equation (6)
simplifies to

              9x21 + y12 − 6x1 y1 = 0 = (3x1 − y1 )2 .        (7)


                                       85
In terms of x, y coordinates, equation (7) becomes

                 (3x − (y − 1))2 = 0, or 3x − y + 1 = 0.

   (iii) Consider the equation

              x2 + 4xy + 4y 2 − x − 2y − 2 = 0.            (8)

Arguing as in the previous examples, we find that any translation

                         x = x1 + α,      y = y1 + β

where 2α + 4β − 1 = 0 has the property that the coefficients of x1 and y1
will be zero in the transformed version of equation (8). Take β = 0 and
α = 1/2. Then (8) reduces to
                                                9
                        x21 + 4x1 y1 + 4y12 −     = 0,
                                                4
or (x1 + 2y1 )2 = 3/2. Hence x1 + 2y1 = ±3/2, with corresponding equations

                     x + 2y = 2 and        x + 2y = −1.




                                     86
                             Section 8.8
1. The given line has equations

                      x = 3 + t(13 − 3) = 3 + 10t,
                      y = −2 + t(3 + 2) = −2 + 5t,
                      z = 7 + t(−8 − 7) = 7 − 15t.

The line meets the plane y = 0 in the point (x, 0, z), where 0 = −2 + 5t, or
t = 2/5. The corresponding values for x and z are 7 and 1, respectively.
2. E = 21 (B + C), F = (1 − t)A + tE, where

                     AF     AF         AF/F E      2
                t=      =          =              = .
                     AE   AF + F E   (AF/F E) + 1  3
Hence
                                         µ          ¶
                                 1     2 1
                         F =       A+       (B + C)
                                 3     3 2
                                 1     1
                             =     A + (B + C)
                                 3     3
                                 1
                             =     (A + B + C).
                                 3
                                                                       -
3. Let A = (2, 1, 4), B = (1, −1, 2), C = (3, 3, 6). Then we prove AC=
  -
t AB for some real t. We have
                                              
                         -     1            - −1
                         AC=  2  ,    AB=  −2  .
                               2              −2
        -            -
Hence AC= (−1) AB and consequently C is on the line AB. In fact A is
between C and B, with AC = AB.
4. The points P on the line AB which satisfy AP = 52 P B are given by
            -
P = A + t AB, where |t/(1 − t)| = 2/5. Hence t/(1 − t) = ±2/5.
   The equation t/(1 − t) = 2/5 gives t = 2/7 and hence
                                               
                           2          1        16/7
                                 2
                 P =  3  +  4  =  29/7  .
                                 7
                         −1           5         3/7

                                       87
Hence P = (16/7, 29/7, 3/7).
   The equation t/(1 − t) = −2/5 gives t = −2/3 and hence
                                               
                          2         1           4/3
                                2
                P= 3 −  4 =                1/3  .
                                3
                        −1          5        −13/3

Hence P = (4/3, 1/3, −13/3).
                                        -
5. An equation for M is P = A + t BC, which reduces to

                                x = 1 + 6t
                                y = 2 − 3t
                                z = 3 + 7t.
                                    -
An equation for N is Q = E + s EF , which reduces to

                                x = 1 + 9s
                                y = −1
                                z = 8 + 3s.

To find if and where M and N intersect, we set P = Q and attempt to solve
for s and t. We find the unique solution t = 1, s = 2/3, proving that the
lines meet in the point

                (x, y, z) = (1 + 6, 2 − 3, 3 + 7) = (7, −1, 10).

6. Let A = (3, 5, 6), B = (−2, 7, 9), C = (2, 1, 7). Then
  (i)
                                        -    -
                       cos ∠ABC = (BA · BC)/(BA · BC),
               -                         -
        where BA= [−1, −2, −3]t and BC= [4, −6, −2]t . Hence
                                  −4 + 12 + 6    14   1
                    cos ∠ABC =     √ √        =√ √ = .
                                     14 56      14 56 2

        Hence ∠ABC = π/3 radians or 60◦ .




                                        88
 (ii)
                                            -   -
                       cos ∠BAC = (AB · AC)/(AB · AC),
               -                    -
        where AB= [1, 2, 3]t and AC= [5, −4, 1]t . Hence
                                       5−8+3
                            cos ∠BAC = √ √    = 0.
                                        14 42
        Hence ∠ABC = π/2 radians or 90◦ .
(iii)
                                            -   -
                       cos ∠ACB = (CA · CB)/(CA · CB),
               -                        -
        where CA= [−5, 4, −1]t and CB= [−4, 6, 2]t . Hence
                                                      √    √
                           20 + 24 − 2      42          42   3
               cos ∠ACB = √ √          =√ √ =√ =               .
                                42 56     42 56         56  2
        Hence ∠ACB = π/6 radians or 30◦ .

7. By Theorem 8.5.2, the closest point P on the line AB to the origin O is
                       -
given by P = A + t AB, where
                                -       -           -
                              AO · AB   −A· AB
                           t=      2
                                      =        .
                               AB        AB 2
Now                                 
                            -   −2     3
                       A· AB=   1 · 1  = −2.
                                    
                                 3     1
Hence t = 2/11 and
                                       
                      −2        3    −16/11
                             2   
                   P= 1 +     1 =   13/11 
                            11
                       3        1     35/11

and P = (−16/11, 13/11, 35/11).
   Consequently the shortest distance OP is given by
   sµ          µ ¶2 µ ¶2 √                    √                √
      −16 2
          ¶
                  13        35        1650      15 × 11 × 10    150
             +         +          =        =                 = √ .
       11         11        11        11            11           11

                                        89
Alternatively, we can calculate the distance OP 2 , where P is an arbitrary
point on the line AB and then minimize OP 2 :
                                                        
                       -       −2          3         −2 + 3t
            P = A + t AB=  1  + t  1  =  1 + t  .
                                 3         1          3+t

Hence

                   OP 2 = (−2 + 3t)2 + (1 + t)2 + (3 + t)2
                              2
                         = 11tµ − 4t + 14      ¶
                                2     4     14
                         = 11 t − t +
                                     11     11
                              Ã½         ¾2              !
                                       2       14      4
                         = 11     t−        +     −
                                      11       11 121
                              Ã½                   !
                                       2 2 150
                                         ¾
                         = 11     t−        +        .
                                      11       121

Consequently
                                              150
                                OP 2 ≥ 11 ×
                                              121
for all t; moreover
                                              150
                                OP 2 = 11 ×
                                              121
when t = 2/11.
8. We first find parametric equations for N by solving the equations

                               x + y − 2z = 1
                               x + 3y − z = 4.

The augmented matrix is
                               ·               ¸
                                   1 1 −2 1
                                                    ,
                                   1 3 −1 4

which reduces to           ·                            ¸
                               1 0 −5/2 −1/2
                                                            .
                               0 1  1/2  3/2
Hence x = − 12 + 52 z, y = 23 − z2 , with z arbitrary. Taking z = 0 gives a point
A = (− 12 , 32 , 0), while z = 1 gives a point B = (2, 1, 1).

                                       90
   Hence if C = (1, 0, 1), then the closest point on N to C is given by
            -                   -       -
P = A + t AB, where t = (AC · AB)/AB 2 .
   Now                                          
               -        3/2            -       5/2
              AC=  −3/2  and AB=  −1/2  ,
                         1                      1
so
                      3
                        × 5 + −3 × −1 + 1 × 1   11
                 t = 2 ¡ 2 ¢2 2 ¡ ¢22         = .
                           5
                              +  −1
                                      +1 2      15
                                2           2
Hence                                  
                                                  
                     −1/2           5/2        4/3
                              11 
                P =  3/2  +      −1/2  =  17/15  ,
                              15
                        0            1        11/15
so P = (4/3, 17/15, 11/15).
    Also the shortest distance P C is given by
                sµ                                      √
                         4 2          17 2       11 2
                           ¶    µ        ¶    µ     ¶
                                                         330
          PC =       1−      + 0−           + 1−      =      .
                         3            15         15      15

9. The intersection of the planes x + y − 2z = 4 and 3x − 2y + z = 1 is the
line given by the equations
                               9 3          11 7
                           x = + z, y =        + z,
                               5 5           5    5
where z is arbitrary. Hence the line L has a direction vector [3/5, 7/5, 1] t
or the simpler [3, 7, 5]t . Then any plane of the form 3x + 7y + 5z = d will
be perpendicualr to L. The required plane has to pass through the point
(6, 0, 2), so this determines d:
                        3 × 6 + 7 × 0 + 5 × 2 = d = 28.

10. The length of the projection of the segment AB onto the line CD is
given by the formula
                                        -        -
                                     | CD · AB |
                                                 .
                                        CD
        -                           -
Here CD= [−8, 4, −1]t and AB= [4, −4, 3]t , so
                -   -
            | CD · AB |             |(−8) × 4 + 4 × (−4) + (−1) × 3|
                            =             p
               CD                           (−8)2 + 42 + (−1)2
                                    | − 51|   51    17
                            =         √     =    = .
                                       81      9     3

                                            91
                                          -
11. A direction vector for L is given by BC= [−5, −2, 3]t . Hence the plane
through A perpendicular to L is given by

          −5x − 2y + 3z = (−5) × 3 + (−2) × (−1) + 3 × 2 = −7.
                                                                         -
The position vector P of an arbitrary point P on L is given by P = B+t BC,
or                                           
                          x         2          −5
                        y  =  1  + t  −2  ,
                          z         4           3
or equivalently x = 2 − 5t, y = 1 − 2t, z = 4 + 3t.
    To find the intersection of line L and the given plane, we substitute the
expressions for x, y, z found in terms of t into the plane equation and solve
the resulting linear equation for t:

                 −5(2 − 5t) − 2(1 − 2t) + 3(4 + 3t) = −7,

which gives t = −7/38. Hence P = 111      52 131
                                   ¡              ¢
                                     38 , 38 , 38   and
                     sµ
                             111 2          52 2        131 2
                                 ¶    µ        ¶    µ       ¶
          AP     =       3−        + −1 −          + 2−
                              38            38           38
                     √           √           √
                       11134      293 × 38     293
                 =            =            = √ .
                        38          38          38

12. Let P be a point inside the triangle ABC. Then the line through P and
parallel to AC will meet the segments AB and BC in D and E, respectively.
Then

                     P = (1 − r)D + rE,       0 < r < 1;
                     D = (1 − s)B + sA,       0 < s < 1;
                     E = (1 − t)B + tC,       0 < t < 1.


Hence

          P = (1 − r) {(1 − s)B + sA} + r {(1 − t)B + tC}
               = (1 − r)sA + {(1 − r)(1 − s) + r(1 − t)} B + rtC
               = αA + βB + C,


                                     92
where

          α = (1 − r)s,     β = (1 − r)(1 − s) + r(1 − t),          = rt.

Then 0 < α < 1, 0 <       < 1, 0 < β < (1 − r) + r = 1. Also

         α+β+       = (1 − r)s + (1 − r)(1 − s) + r(1 − t) + rt = 1.

13. The line AB is given by P = A + t[3, 4, 5]t , or

                 x = 6 + 3t,          y = −1 + 4t,   z = 11 + 5t.

Then B is found by substituting these expressions in the plane equation

                                3x + 4y + 5z = 10.

We find t = −59/50 and consequently
           µ                              ¶ µ               ¶
                177        236        295     123 −286 255
      B = 6−        , −1 −     , 11 −      =      ,    ,      .
                 50         50         50      50   50   50

Then
                                           
                              -     3
              AB = || AB || = ||t  4  ||
                                    5
                      p                 59 √       59
                 = |t| 32 + 42 + 52 =      × 50 = √ .
                                        50          50

14. Let A = (−3, 0, 2), B = (6, 1, 4), C = (−5, 1, 0). Then the area of
                      -       -
triangle ABC is 12 || AB × AC ||. Now
                                          
                  -       - 9      −2       −4
                 AB × AC=  1  ×  1  =  14  .
                            2      −2       11
         -      -         √
Hence || AB × AC || =      333.
15. Let A1 = (2, 1, 4), A2 = (1, −1, 2), A3 = (4, −1, 1). Then the point
P = (x, y, z) lies on the plane A1 A2 A3 if and only if
                            -           -        -
                          A1 P ·(A1 A2 × A1 A3 ) = 0,

                                            93
or              ¯              ¯
                ¯ x−2 y−1 z−4 ¯
                ¯              ¯
                ¯ −1   −2  −2 ¯¯ = 2x − 7y + 6z − 21 = 0.
                ¯
                ¯ 2    −2  −3 ¯

16. Non–parallel lines L and M in three dimensional space are given by
equations
                       P = A + sX, Q = B + tY.
                  -
     (i) Suppose P Q is orthogonal to both X and Y . Now
                -                                       -
                P Q= Q − P = (B + tY ) − (A + sX) =AB +tY − sX.

        Hence
                              -
                             (AB +tY + sX) · X = 0
                               -
                             (AB +tY + sX) · Y     = 0.

        More explicitly
                                                      -
                          t(Y · X) − s(X · X) = − AB ·X
                                                      -
                          t(Y · Y ) − s(X · Y ) = − AB ·Y.

        However the coefficient determinant of this system of linear equations
        in t and s is equal to
                 ¯                 ¯
                 ¯ Y · X −X · X ¯                  2
                 ¯ Y · Y −X · Y ¯ = −(X · Y ) + (X · X)(Y · Y )
                 ¯                 ¯

                                     = ||X × Y ||2 6= 0,

        as X 6= 0, Y 6= 0 and X and Y are not proportional (L and M are
        not parallel).
 (ii) P and Q can be viewed as the projections of C and D onto the line P Q,
      where C and D are arbitrary points on the lines L and M, respectively.
      Hence by equation (8.14) of Theorem 8.5.3, we have

                                     P Q ≤ CD.

        Finally we derive a useful formula for P Q. Again by Theorem 8.5.3
                                    -      -
                                | AB · P Q |      -
                           PQ =              = | AB ·n̂|,
                                    PQ

                                      94
                                                                     ¡
                                                                    ¡ L
                                                                ¡
                                                            ¡
                                      z                C¡                                  M           "
                                                        P   PP                                     "
                                      6                ¡            PP                         "
                                                   ¡                        PP             "
                                  @            ¡                                    PP""
                                      @   ¡                                          "
                                                                                    " D
                                       @¡@                                      "
                                                                            "
                                       ¡@¡                              "
                                      ¡ P @                         "
                                                    "
                                  ¡        @ """"
                                 ¡         Q@ "
                                            "
                                   O       " @                                        - y
                                    ¢    "      @
                                       "
                                   ¢ "            @
                                  ¢ "               @
                                 ¢
                             ¢
                           ¢®
                           x
                       -
                  1
     where n̂ =       P Q is a unit vector which is orthogonal to X and Y .
     Hence
                                      n̂ = t(X × Y ),
     where t = ±1/||X × Y ||. Hence
                                           -
                                      | AB ·(X × Y )|
                                 PQ =                 .
                                         ||X × Y ||



17. We use the formula of the previous question.
    Line L has the equation P = A + sX, where
                                           
                                 -       2
                           X =AC=  −3  .
                                         3

Line M has the equation Q = B + tY , where
                                     
                              -       1
                          Y =BD=  1  .
                                      1
                                                   √
Hence X × Y = [−6, 1, 5]t and ||X × Y || =          62.




                                          95
   Hence the shortest distance between lines AC and BD is equal to
                                ¯            ¯
                                ¯
                                ¯    0       −6 ¯¯
                                ¯ −2  ·  1 ¯
                -               ¯                ¯
             | AB ·(X × Y )|    ¯    1        5 ¯     3
                             =         √           =√ .
                ||X × Y ||                62          62

18. Let E be the foot of the perpendicular from A4 to the plane A1 A2 A3 .
Then
                                 1
                vol A1 A2 A3 A4 = ( area ∆A1 A2 A3 ) · A4 E.
                                 3
Now
                                    1     -       -
                   area ∆A1 A2 A3 = || A1 A2 × A1 A3 ||.
                                    2
Also A4 E is the length of the projection of A1 A4 onto the line A4 E. See
figure below.)
                     -
   Hence A4 E = | A1 A4 ·X|, where X is a unit direction vector for the line
A4 E. We can take
                                  -       -
                                 A1 A2 × A1 A3
                         X=       -       -       .
                              || A1 A2 × A1 A3 ||
Hence
                                                  -              -           -
                          1     -       -       | A1 A4 ·(A1 A2 × A1 A3 )|
     vol A1 A2 A3 A4 =      || A1 A2 × A1 A3 ||         -       -
                          6                        || A A × A A ||
                                                         1   2       1   3
                          1    -       -       -
                     =      | A1 A4 ·(A1 A2 × A1 A3 )|
                          6

                                     96
                           1    -       -        -
                      =      |(A1 A2 × A1 A3 )· A1 A4 |.
                           6

              -                  -                   -
19. We have CB= [1, 4, −1]t , CD= [−3, 3, 0]t , AD= [3, 0, 3]t . Hence
                           -     -
                          CB × CD= 3i + 3j + 15k,

so the vector i + j + 5k is perpendicular to the plane BCD.
    Now the plane BCD has equation x + y + 5z = 9, as B = (2, 2, 1) is on
the plane.
    Also the line through A normal to plane BCD has equation
                                                
                    x        1         1               1
                  y  =  1  + t  1  = (1 + t)  1  .
                    z        5         5               5

Hence x = 1 + t, y = 1 + t, z = 5(1 + t).
   [We remark that this line meets plane BCD in a point E which is given
by a value of t found by solving

                      (1 + t) + (1 + t) + 5(5 + 5t) = 9.

So t = −2/3 and E = (1/3, 1/3, 5/3).]
   The distance from A to plane BCD is

                  |1 × 1 + 1 × 1 + 5 × 5 − 9|    18  √
                          2     2    2
                                              = √ = 2 3.
                         1 +1 +5                  27
To find the distance between lines AD and BC, we first note that

 (a) The equation of AD is
                                              
                            1        3      1 + 3t
                      P =  1  + t 0  =  1 ;
                            5        3      5 + 3t

 (b) The equation of BC is

                                             
                         2          1       2+s
                   Q =  2  + s  4  =  2 + 4s  .
                         1         −1       1−s

                                      97
                                      ¢@
                                       C
                                     ¢ C@
                                   ¢    C @
                                  ¢      C      @
                                 ¢       C        @ B
                               ¢          C ©©    ¢
                              ¢          © C© ¢
                            ¢        ©© C ¢
                           ¢ ©©              E¢
                          ¢ ©
                          ©                   ¢
                        C @                  ¢
                            @              ¢
                               @         ¢
                                  @ ¢
                                     @¢
                                      D




       -
Then P Q= [1 + s − 3t, 1 + 4s, −4 − s − 3t]t and we find s and t by solving
               -    -            -     -
the equations P Q · AD= 0 and P Q · BC= 0, or

            (1 + s − 3t)3 + (1 + 4s)0 + (−4 − s − 3t)3 = 0
               (1 + s − 3t) + 4(1 + 4s) − (−4 − s − 3t) = 0.

Hence t = −1/2 = s.
   Correspondingly, P = (−1/2, 1, 7/2) and Q = (3/2, 0, 3/2).
   Thus we have found the closest points P and Q on the respective lines
AD and BC. Finally the shortest distance between the lines is
                                      -
                            P Q = || P Q || = 3.




                                     98



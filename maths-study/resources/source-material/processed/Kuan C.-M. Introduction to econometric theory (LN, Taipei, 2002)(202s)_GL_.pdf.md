---
normalized_id: shared-pdf-reference-kuan-c-m-introduction-to-econometric-theory-ln-taipei-2002-202s-gl
exam_code: SHARED
material_scope: kuan c.-m. introduction to econometric theory (ln, taipei, 2002)(202s)_gl_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Kuan C.-M. Introduction to econometric theory (LN, Taipei, 2002)(202s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-kuan-c-m-introduction-to-econometric-theory-ln-taipei-2002-202s-gl

     INTRODUCTION TO ECONOMETRIC THEORY




                                  CHUNG-MING KUAN

                                     Institute of Economics
                                        Academia Sinica

                               This version: September 15, 2000





c Chung-Ming Kuan. Address for correspondence: Institute of Economics, Academia Sinica, Taipei
115, Taiwan; e-mail: ckuan@ieas.econ.sinica.edu.tw.
Contents

1 Linear and Matrix Algebra                                                                  1
  1.1   Basic Notations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       1
  1.2   Matrix Operations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         2
  1.3   Matrix Determinant and Trace . . . . . . . . . . . . . . . . . . . . . . .            5
  1.4   Matrix Inverse . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        7
  1.5   Matrix Rank . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         8
  1.6   Eigenvalue and Eigenvector . . . . . . . . . . . . . . . . . . . . . . . . .          9
  1.7   Symmetric Matrix . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         11
  1.8   Orthogonal Projection . . . . . . . . . . . . . . . . . . . . . . . . . . . .        13
  References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     15

2 Statistical Concepts                                                                       17
  2.1   Distribution Functions . . . . . . . . . . . . . . . . . . . . . . . . . . . .       17
  2.2   Moments      . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   18
  2.3   Special Distributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      23
  2.4   Likelihood . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     27
  2.5   Estimation     . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   30
        2.5.1   Point Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . .       30
        2.5.2   Criteria for Point Estimators . . . . . . . . . . . . . . . . . . . .        30
        2.5.3   Interval Estimation . . . . . . . . . . . . . . . . . . . . . . . . . .      32
  2.6   Hypothesis Testing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       33
        2.6.1   Basic Concepts . . . . . . . . . . . . . . . . . . . . . . . . . . . .       33
        2.6.2   Construction of Tests . . . . . . . . . . . . . . . . . . . . . . . .        35
  References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     37

3 Classical Least Squares Theory                                                             39
  3.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     39

                                              i
ii                                                                                CONTENTS


     3.2   The Method of Ordinary Least Squares . . . . . . . . . . . . . . . . . .           40
           3.2.1   Simple Linear Regression . . . . . . . . . . . . . . . . . . . . . .       40
           3.2.2   Multiple Linear Regression . . . . . . . . . . . . . . . . . . . . .       42
           3.2.3   Geometric Interpretations . . . . . . . . . . . . . . . . . . . . . .      45
           3.2.4   Measures of Goodness of Fit . . . . . . . . . . . . . . . . . . . .        48
     3.3   Statistical Properties of the OLS Estimators . . . . . . . . . . . . . . . .       51
           3.3.1   Classical Conditions . . . . . . . . . . . . . . . . . . . . . . . . .     51
           3.3.2   Without the Normality Condition . . . . . . . . . . . . . . . . .          52
           3.3.3   With the Normality Condition . . . . . . . . . . . . . . . . . . .         56
     3.4   Hypotheses Testing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     58
           3.4.1   Tests for Linear Hypotheses . . . . . . . . . . . . . . . . . . . . .      58
           3.4.2   Power of the Tests . . . . . . . . . . . . . . . . . . . . . . . . . .     62
           3.4.3   An Alternative Approach . . . . . . . . . . . . . . . . . . . . . .        63
     3.5   Conﬁdence Regions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      65
     3.6   Multicollinearity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    66
           3.6.1   Near Multicollinearity . . . . . . . . . . . . . . . . . . . . . . . .     66
           3.6.2   Digress: Dummy Variables . . . . . . . . . . . . . . . . . . . . .         67
     3.7   Limitations of the Classical Conditions . . . . . . . . . . . . . . . . . . .      69
     Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    70
     References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   74

4 Generalized Least Squares Theory                                                            77
     4.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   77
     4.2   The Method of Generalized Least Squares . . . . . . . . . . . . . . . . .          78
           4.2.1   When y Does Not Have a Scalar Covariance Matrix . . . . . . .              78
           4.2.2   The GLS Estimator . . . . . . . . . . . . . . . . . . . . . . . . .        79
           4.2.3   Properties of the GLS Estimator . . . . . . . . . . . . . . . . . .        81
           4.2.4   FGLS Estimator . . . . . . . . . . . . . . . . . . . . . . . . . . .       82
     4.3   Heteroskedasticity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     83
           4.3.1   Tests for Heteroskedasticity . . . . . . . . . . . . . . . . . . . . .     83
           4.3.2   GLS Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . .       86
     4.4   Serial Correlation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   87
           4.4.1   A Simple Model of Serial Correlation . . . . . . . . . . . . . . . .       87
           4.4.2   An Alternative View . . . . . . . . . . . . . . . . . . . . . . . . .      89
           4.4.3   Tests for AR(1) Disturbances . . . . . . . . . . . . . . . . . . . .       91
           4.4.4   FGLS Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . .      93


c Chung-Ming Kuan, 2001
CONTENTS                                                                                 iii


  4.5   Linear Probability Model . . . . . . . . . . . . . . . . . . . . . . . . . .     95
  4.6   Seemingly Unrelated Regressions . . . . . . . . . . . . . . . . . . . . . .      96
  4.7   Models for Panel Data . . . . . . . . . . . . . . . . . . . . . . . . . . . .    99
        4.7.1   Fixed Eﬀects Model . . . . . . . . . . . . . . . . . . . . . . . . .     99
        4.7.2   Random Eﬀects Model . . . . . . . . . . . . . . . . . . . . . . . . 104
  4.8   Limitations of the FGLS Method . . . . . . . . . . . . . . . . . . . . . . 106
  Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
  References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108

5 Probability Theory                                                                    109
  5.1   Probability Space and Random Variables . . . . . . . . . . . . . . . . . 109
        5.1.1   Probability Space . . . . . . . . . . . . . . . . . . . . . . . . . . . 109
        5.1.2   Random Variables . . . . . . . . . . . . . . . . . . . . . . . . . . 111
        5.1.3   Moments and Norms . . . . . . . . . . . . . . . . . . . . . . . . . 112
  5.2   Conditional Distribution and Moments . . . . . . . . . . . . . . . . . . . 114
        5.2.1   Conditional Distributions . . . . . . . . . . . . . . . . . . . . . . 115
        5.2.2   Conditional Moments . . . . . . . . . . . . . . . . . . . . . . . . 115
  5.3   Modes of Convergence . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119
        5.3.1   Almost Sure Convergence . . . . . . . . . . . . . . . . . . . . . . 119
        5.3.2   Convergence in Probability . . . . . . . . . . . . . . . . . . . . . 121
        5.3.3   Convergence in Distribution . . . . . . . . . . . . . . . . . . . . . 123
  5.4   Order Notations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
  5.5   Law of Large Numbers . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
  5.6   Uniform Law of Large Numbers . . . . . . . . . . . . . . . . . . . . . . . 132
  5.7   Central Limit Theorem      . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
  Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138
  References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139

6 Asymptotic Least Squares Theory                                                       141
  6.1   When Regressors are Stochastic . . . . . . . . . . . . . . . . . . . . . . . 141
  6.2   Asymptotic Properties of the OLS Estimators . . . . . . . . . . . . . . . 143
        6.2.1   Consistency . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
        6.2.2   Asymptotic Normality . . . . . . . . . . . . . . . . . . . . . . . . 151
  6.3   Consistent Estimation of Covariance Matrix . . . . . . . . . . . . . . . . 156
        6.3.1   When Serial Correlations Are Absent       . . . . . . . . . . . . . . . 157
        6.3.2   When Serial Correlations Are Present . . . . . . . . . . . . . . . 159
  6.4   Large-Sample Tests . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 161

                                                              
                                                              c Chung-Ming Kuan, 2001
iv                                                                              CONTENTS


           6.4.1   Wald Test . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 162
           6.4.2   Lagrange Multiplier Test     . . . . . . . . . . . . . . . . . . . . . . 164
     6.5   Application: Autoregressive Models . . . . . . . . . . . . . . . . . . . . . 168
           6.5.1   Properties of the OLS estimators . . . . . . . . . . . . . . . . . . 168
           6.5.2   Diﬀerence Equation . . . . . . . . . . . . . . . . . . . . . . . . . 169
           6.5.3   Weak Stationarity . . . . . . . . . . . . . . . . . . . . . . . . . . 171
     6.6   Limitations of the Linear Speciﬁcation . . . . . . . . . . . . . . . . . . . 173
     Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 175
     References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 176

7 Nonlinear Least Squares Theory                                                          177
     7.1   Nonlinear Speciﬁcations . . . . . . . . . . . . . . . . . . . . . . . . . . . 177
     7.2   The Method of Nonlinear Least Squares . . . . . . . . . . . . . . . . . . 181
           7.2.1   Nonlinear Least Squares Estimator . . . . . . . . . . . . . . . . . 181
           7.2.2   Nonlinear Optimization Algorithms       . . . . . . . . . . . . . . . . 183
     7.3   Asymptotic Properties of the NLS Estimators . . . . . . . . . . . . . . . 188
           7.3.1   Consistency . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 188
           7.3.2   Asymptotic Normality . . . . . . . . . . . . . . . . . . . . . . . . 191
     7.4   Hypothesis Testing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 194
     Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 195
     References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 196





c Chung-Ming Kuan, 2001
Chapter 1

Linear and Matrix Algebra

This chapter summarizes some important results of linear and matrix algebra that are
instrumental in analyzing the statistical methods in subsequent chapters. The coverage
of these mathematical topics is rather brief but self-contained. Readers may also con-
sult other linear and matrix algebra textbooks for more detailed discussions; see e.g.,
Anton (1981), Basilevsky (1983), Graybill (1969), and Noble and Daniel (1977).
   In this chapter we ﬁrst introduce basic matrix notations (Section 1.1) and matrix
operations (Section 1.2). We then study the determinant and trace functions (Sec-
tion 1.3), matrix inverse (Section 1.4), and matrix rank (Section 1.5). After introducing
eigenvalue and diagonalization (Section 1.6), we discuss the properties of symmetric
matrix (Section 1.7) and orthogonal projection in a vector space (Section 1.8).


1.1     Basic Notations
A matrix is an array of numbers. In what follows, a matrix is denoted by an upper-case
alphabet in boldface (e.g., A), and its (i, j) th element (the element at the i th row and
j th column) is denoted by the corresponding lower-case alphabet with subscripts ij
(e.g., aij ). Speciﬁcally, a m × n matrix A contains m rows and n columns and can be
expressed as
                                      
               a11   a12   ...   a1n
                                    
         a                      a2n 
         21 a22 . . .               
      A= .    ..  ..             ..  .
         ..    .     .            . 
                                    
          am1 am2 . . .          amn
An n × 1 (1 × n) matrix is an n-dimensional column (row) vector. Every vector will be
denoted by a lower-case alphabet in boldface (e.g., z), and its i th element is denoted

                                            1
2                                   CHAPTER 1. LINEAR AND MATRIX ALGEBRA


by the corresponding lower-case alphabet with subscript i (e.g., zi ). An 1 × 1 matrix is
just a scalar. For a matrix A, its i th column is denoted as ai .

    A matrix is square if its number of rows equals the number of columns. A matrix is
said to be diagonal if its oﬀ-diagonal elements (i.e., aij , i = j) are all zeros and at least
one of its diagonal elements is non-zero, i.e., aii = 0 for some i = 1, . . . , n. A diagonal
matrix whose diagonal elements are all ones is an identity matrix, denoted as I; we also
write the n × n identity matrix as I n . A matrix A is said to be lower (upper) triangular
if aij = 0 for i < (>) j. We let 0 denote the matrix whose elements are all zeros.

    For a vector-valued function f : Rm → Rn , ∇θ f (θ) is the m × n matrix of the
ﬁrst-order derivatives of f with respect to the elements of θ:
                  ∂f1 (θ) ∂f2 (θ)                 
                      ∂θ1    ∂θ1    . . . ∂f∂θ
                                             n (θ)
                                                 1
                                                  
                  ∂f1 (θ) ∂f2 (θ) . . . ∂fn (θ) 
                  ∂θ2       ∂θ2            ∂θ2    
      ∇θ f (θ) = 
                      ..      ..             .
                                                   .
                                                   
                                    ..       ..   
                        .       .       .
                                                  
                    ∂f1 (θ) ∂f2 (θ)       ∂fn (θ)
                     ∂θm     ∂θm    ...    ∂θm

When n = 1, ∇θ f (θ) is the (column) gradient vector of f (θ). The m × m Hessian
matrix of the second-order derivatives of the real-valued function f (θ) is
                                 ∂ 2 f (θ) ∂ 2 f (θ)        ∂ 2 f (θ) 
                                   ∂θ1 ∂θ1   ∂θ1 ∂θ2   . . . ∂θ 1 ∂θm
                                 2                                    
                                  ∂  f  (θ) ∂ 2 f (θ)       ∂ 2 f (θ)
                                                                       
                                                      . . . ∂θ2 ∂θm 
       2                        
     ∇θ f (θ) = ∇θ (∇θ f (θ)) = 
                                   ∂θ2 ∂θ1   ∂θ2 ∂θ2
                                                                       .
                                       ..         ..    ..        ..   
                                       .          .       .       .   
                                                                      
                                      ∂ 2 f (θ)   ∂ 2 f (θ)          ∂ 2 f (θ)
                                      ∂θm ∂θ1     ∂θm ∂θ2     ...   ∂θm ∂θm


1.2     Matrix Operations
Two matrices are said to be of the same size if they have the same number of rows and
same number of columns. Matrix equality is deﬁned for two matrices of the same size.
Given two m × n matrices A and B, A = B if aij = bij for every i, j. The transpose of
an m × n matrix A, denoted as A , is the n × m matrix whose (i, j) th element is the
(j, i) th element of A. The transpose of a column vector is a row vector; the transpose
of a scalar is just the scalar itself. A matrix A is said to be symmetric if A = A , i.e.,
aij = aji for all i, j. Clearly, a diagonal matrix is symmetric, but a triangular matrix is
not.

    Matrix addition is also deﬁned for two matrices of the same size. Given two m × n
matrices A and B, their sum, C = A + B, is the m × n matrix with the (i, j) th element


c Chung-Ming Kuan, 2001
1.2. MATRIX OPERATIONS                                                                  3


cij = aij + bij . Note that matrix addition, if deﬁned, is commutative:

      A + B = B + A,

and associative:

      A + (B + C) = (A + B) + C.

Also, A + 0 = A.
   The scalar multiplication of the scalar c and matrix A is the matrix cA whose (i, j) th
element is caij . Clearly, cA = Ac, and −A = −1 × A. Thus, A + (−A) = A − A = 0.
Given two matrices A and B, the matrix multiplication AB is deﬁned only when the
number of columns of A is the same as the number of rows of B. Speciﬁcally, when A
is m × n and B is n × p, their product, C = AB, is the m × p matrix whose (i, j) th
element is
              
              n
      cij =         aik bkj .
              k=1

Matrix multiplication is not commutative, i.e., AB = BA; in fact, when AB is deﬁned,
BA need not be deﬁned. On the other hand, matrix multiplication is associative:

      A(BC) = (AB)C,

and distributive with respect to matrix addition:

      A(B + C) = AB + AC.

It is easy to verify that (AB) = B  A . For an m × n matrix A, I m A = AI n = A.
   The inner product of two d-dimensional vectors y and z is the scalar
              
              d
      yz =          yi zi .
              i=1

If y is m-dimensional and z is n-dimensional, their outer product is the matrix yz 
whose (i, j) th element is yi zj . In particular,

              
              d
       
      zz=            zi2 ,
              i=1

which is non-negative and induces the standard Euclidean norm of z as z = (z  z)1/2 .
The vector with Euclidean norm zero must be a zero vector; the vector with Euclidean
norm one is referred to as a unit vector. For example,
                   1 √3            1 1 1
     (1 0 0),      0         ,       √ √ √ ,
                      2 2              2 3 6

                                                             
                                                             c Chung-Ming Kuan, 2001
4                                    CHAPTER 1. LINEAR AND MATRIX ALGEBRA


are all unit vectors. A vector whose i th element is one and the remaining elements are
all zero is called the i th Cartesian unit vector.

    Let θ denote the angle between y and z. By the law of cosine,

      y − z2 = y2 + z2 − 2y z cos θ,

where the left-hand side is y2 + z2 − 2y  z. Thus, the inner product of y and z can
be expressed as

      y  z = yz cos θ.

When θ = π/2, cos θ = 0 so that y  z = 0. In this case, we say that y and z are orthogonal
to each other. A square matrix A is said to be orthogonal if A A = AA = I. Hence,
each column (row) vector of an orthogonal matrix is a unit vector and orthogonal to all
remaining column (row) vectors. When y = cz for some c = 0, θ = 0 or π, and y and
z are said to be linearly dependent.

    As −1 ≤ cos θ ≤ 1, we immediately obtain the so-called Cauchy-Schwarz inequality.

Lemma 1.1 (Cauchy-Schwarz) For two d-dimensional vectors y and z,

      |y  z| ≤ yz,

where the equality holds when y and z are linearly dependent.

    It follows from the Cauchy-Schwarz inequality that

      y + z2 = y2 + z2 + 2y  z

                  ≤ y2 + z2 + 2yz

                  = (y + z)2 .

This leads to the following triangle inequality.

Lemma 1.2 For two d-dimensional vectors y and z,

      y + z ≤ y + z,

where the equality holds when y = cz for some c > 0.

When y and z are orthogonal,

      y + z2 = y2 + z2 ,


c Chung-Ming Kuan, 2001
1.3. MATRIX DETERMINANT AND TRACE                                                   5


which is the celebrated Pythagoras theorem.

   A special type of matrix multiplication, known as the Kronecker product, is de-
ﬁned for matrices without size restrictions. Speciﬁcally, the Kronecker product of two
matrices A (m × n) and B (p × q) is the mp × nq matrix:
                                           
                 a11 B a12 B · · · a1n B
                                           
               a B a B ··· a B 
               21       22            2n   
     A⊗B =        .      .     .       .   .
                  ..     ..      ..    ..  
                                           
                am1 B am2 B · · · amn B

The Kronecker product is not commutative:

      A ⊗ B = B ⊗ A,

but it is associative:

      (A ⊗ B) ⊗ C = A ⊗ (B ⊗ C).

It also obeys the distributive law:

      A ⊗ (B + C) = A ⊗ B + A ⊗ C.

It can be veriﬁed that

      (A ⊗ B) = A ⊗ B  .

   Consider now diﬀerentiation involving vectors and matrices. Let a and θ be tow
d-dimensional vectors. We have

      ∇θ (a θ) = a.

For a symmetric matrix A,

      ∇θ (θ  Aθ) = 2Aθ,              ∇2θ (θ  Aθ) = 2A.


1.3     Matrix Determinant and Trace
Given a square matrix A, let Aij denote the sub-matrix obtained from A by deleting
its i th row and j th column. The determinant of A is
                 
                 m
      det(A) =     (−1)i+j aij det(Aij ),
                 i=1

                                                           
                                                           c Chung-Ming Kuan, 2001
6                                    CHAPTER 1. LINEAR AND MATRIX ALGEBRA


for any j = 1, . . . , n, where (−1)i+j det(Aij ) is called the cofactor of aij . This deﬁnition
is based on the cofactor expansion along the j th column. Equivalently, the determinant
can also be deﬁned using the cofactor expansion along the i th row:
                  
                  n
       det(A) =     (−1)i+j aij det(Aij ),
                  j=1

for any i = 1, . . . , m. The determinant of a scalar is the scalar itself; the determinant of
a 2 × 2 matrix A is simply a11 a22 − a12 a21 . A square matrix with non-zero determinant
is said to be nonsingular; otherwise, it is singular.
     Clearly, det(A) = det(A ). From the deﬁnition of determinant, it is straightforward
to see that for a scalar c and an n × n matrix A,

       det(cA) = cn det(A),

and that for a square matrix with a column (or row) of zeros, its determinant must be
zero. Also, the determinant of a diagonal or triangular matrix is simply the product of
all the diagonal elements. It can also be shown that the determinant of the product of
two square matrices of the same size is the product of their determinants:

       det(AB) = det(A) det(B) = det(BA).

Also, for an m × m matrix A and a p × p matrix B,

       det(A ⊗ B) = det(A)m det(B)p .

If A is an orthogonal matrix, we know AA = I so that

       det(I) = det(AA ) = [det(A)]2 .

As the determinant of the identity matrix is one, the determinant of an orthogonal
matrix must be either 1 or −1.
     The trace of a square matrix is the sum of its diagonal elements; i.e., trace(A) =
                                                                     
    i aii . For example, trace(I n ) = n. Clearly, trace(A) = trace(A ). The trace function
has the linear property:

       trace(cA + dB) = c trace(A) + d trace(B),

where c and d are scalars. It can also be shown that

       trace(AB) = trace(BA),

provided that both AB and BA are deﬁned. For two square matrices A andB,

       trace(A ⊗ B) = trace(A) trace(B).


c Chung-Ming Kuan, 2001
1.4. MATRIX INVERSE                                                                    7


1.4     Matrix Inverse
A nonsingular matrix A possesses a unique inverse A−1 in the sense that AA−1 =
A−1 A = I. A singular matrix cannot be inverted, however. Thus, saying that a matrix
is invertible is equivalent to saying that it is nonsingular.

   Given an invertible matrix A, its inverse can be calculated as
                 1
      A−1 =          F ,
              det(A)

where F is the matrix of cofactors, i.e., the (i, j) th element of F is the cofactor
(−1)i+j det(Aij ). The matrix F  is known as the adjoint of A. For example, when
A is 2 × 2,

                      1             a22   −a12
      A−1 =                                         .
              a11 a22 − a12 a21    −a21       a11

Matrix inversion and transposition can be interchanged, i.e., (A )−1 = (A−1 ) . For two
nonsingular matrices A and B of the same size, we have ABB −1 A−1 = I, so that

      (AB)−1 = B −1 A−1 .

Some special matrices can be easily inverted. For example, for a diagonal matrix A, A−1
is also diagonal with the diagonal elements a−1
                                             ii ; for an orthogonal matrix A, A
                                                                               −1
                                                                                  = A .

   A formula for computing the inverse of a partitioned matrix is
                  −1
        A B                 A−1 + A−1 BF −1 CA−1 −A−1 BF −1
                       =                                               ,
        C D                        −F −1 CA−1              F −1

where F = D − CA−1 B, or equivalently,
                  −1
        A B                       G−1               −G−1 BD −1
                       =                                                   ,
        C D                 −D−1 CG−1 D−1 + D−1 CG−1 BD −1

where G = A − BD −1 C, provided that the matrix inverses in the expressions above
are well deﬁned. In particular, if this matrix is block diagonal so that the oﬀ-diagonal
blocks are zero matrices, we have
                  −1
        A     0             A−1     0
                       =                  ,
         0    D              0     D−1

provided that A and D are invertible.

                                                                 
                                                                 c Chung-Ming Kuan, 2001
8                                       CHAPTER 1. LINEAR AND MATRIX ALGEBRA


1.5     Matrix Rank
The vectors z 1 , . . . , z n are said to be linearly independent if the only solution to

      c1 z 1 + c2 z 2 + · · · + cn z n = 0

is the trivial solution: c1 = · · · = cn = 0; otherwise, they are linearly dependent. When
two (three) vectors are linearly dependent, they are on the same line (plane).

    The column (row) rank of a matrix A is the maximum number of linearly indepen-
dent column (row) vectors of A. When the column (row) rank equals the number of
column (row) vectors, this matrix is said to be of full column (row) rank. The space
spanned by the vectors z 1 , . . . , z n is the collection of all linear combinations of these
vectors, denoted as span(z 1 , . . . , z n ). The space spanned by the column vectors of A
is therefore span(A), which is also known as the column space of A. A vector z is
in span(A) if it can be expressed as Ac for some vector c = 0. Similarly, the space
spanned by the row vectors of A is span(A ) and known as the row space of A. The
column (row) rank of A is the dimension of the column (row) space of A.

    Given an n × k matrix A with k ≤ n, suppose that A has row rank r ≤ n and
column rank c ≤ k. Without loss of generality, assume that the ﬁrst r row vectors are
linear independent. Hence, each row vector ai can be expressed as

      ai = qi1 a1 + qi2 a2 + · · · + qir ar ,       i = 1, . . . , n,

with the j th element

      aij = qi1 a1j + qi2 a2j + · · · + qir arj ,      i = 1, . . . , n, j = 1, . . . , k.

Fixing j, we immediately see that every column vector of A can be written as a linear
combination of the vectors q 1 , . . . , q r . As such, the column rank of A must be less than
or equal to r. Similarly, the column rank of A , which is also the row rank of A, must
be less than or equal to c. This proves the following result.

Lemma 1.3 The column rank and row rank of a matrix are equal.

By Lemma 1.3, we can then deﬁne the rank of A as the maximum number of linearly
independent column (or row) vectors of A, denoted as rank(A). Clearly, rank(A) =
rank(A ). An n × n matrix A is said to be of full rank if rank(A) = n.

    For an n × k matrix A, its left inverse is a k × n matrix A−1           −1
                                                               L such that AL A = I k .
Similarly, a right inverse of A is a k × n matrix A−1            −1
                                                   R such that AAR = I n . The left


c Chung-Ming Kuan, 2001
1.6. EIGENVALUE AND EIGENVECTOR                                                           9


and right inverses are not unique, however. It can be shown that a matrix possesses a
left (right) inverse if and only if it has full column (row) rank. Thus, for a square matrix
with full rank, it has both inverses, which are just the unique matrix inverse. Thus, a
nonsingular (invertible) matrix must be of full rank and vice versa.

   It can be shown that for two n × k matrices A and B,

      rank(A + B) ≤ rank(A) + rank(B).

If A is n × k and B is k × m,

      rank(A) + rank(B) − k ≤ rank(AB) ≤ min[rank(A), rank(B)].

For the Kronecker product, we have

      rank(A ⊗ B) = rank(A) rank(B).

If A is a nonsingular matrix, we have from the inequality above that

      rank(AB) ≤ rank(B) = rank(A−1 AB) ≤ rank(AB);

i.e., rank(AB) = rank(B). This also implies that for a nonsingular matrix C,

      rank(BC) = rank(C  B  ) = rank(B  ) = rank(B).

Thus, the rank of a matrix is preserved under nonsingular transformations.

Lemma 1.4 Let A (n × n) and C (k × k) be nonsingular matrices. Then for any n × k
matrix B,

      rank(B) = rank(AB) = rank(BC).




1.6     Eigenvalue and Eigenvector
Given a square matrix A, if Ac = λc for some scalar λ and non-zero vector c, then c
is an eigenvector of A corresponding to the eigenvalue λ. The system (A − λI)c = 0
has a non-trivial solution if and only if

      det(A − λI) = 0.

                                                              
                                                              c Chung-Ming Kuan, 2001
10                                     CHAPTER 1. LINEAR AND MATRIX ALGEBRA


This is known as the characteristic equation of A, from which we can solve for the
eigenvalues of A. Hence, eigenvalues (eigenvectors) are also referred to as characteristic
roots (characteristic vectors). Note that the eigenvalues and eigenvectors of a real-valued
matrix need not be real-valued.

     When A is n×n, the characteristic equation is an n th-order polynomial in λ and has
at most n distinct solutions. These solutions (eigenvalues) are usually complex-valued.
If some eigenvalues take the same value, there may exist several eigenvectors corre-
sponding to the same eigenvalue. Given an eigenvalue λ, let c1 , . . . , ck be associated
eigenvectors. Then,

       A(a1 c1 + a2 c2 + . . . + ak ck ) = λ(a1 c1 + a2 c2 + . . . + ak ck ),

so that any linear combination of these eigenvectors is again an eigenvector correspond-
ing to λ. That is, these eigenvectors are closed under scalar multiplication and vector
addition and form the eigenspace corresponding to λ. As such, for a common eigenvalue,
we are mainly concerned with those eigenvectors that are linearly independent.

     If A (n × n) possesses n distinct eigenvalues, each eigenvalue must correspond to
one eigenvector, unique up to scalar multiplications. It is therefore typical to normalize
eigenvectors such that they have Euclidean norm one. It can also be shown that if the
eigenvalues of a matrix are all distinct, their associated eigenvectors must be linearly
independent. Let C denote the matrix of these eigenvectors and Λ denote the diagonal
matrix with diagonal elements being the eigenvalues of A. We can write AC = CΛ.
As C is nonsingular, we have

       C −1 AC = Λ,           or      A = CΛC −1 .

In this case, A is said to be similar to Λ.

     When A has n distinct eigenvalues λ1 , . . . , λn , it is readily seen that

       det(A) = det(CΛC −1 ) = det(Λ) det(C) det(C −1 ) = det(Λ),

and

       trace(A) = trace(CΛC −1 ) = trace(C −1 CΛ) = trace(Λ).

This yields the following result.


c Chung-Ming Kuan, 2001
1.7. SYMMETRIC MATRIX                                                                  11


Lemma 1.5 Let A be an n × n matrix with distinct eigenvalues λ1 , . . . , λn . Then
                                   n
          det(A) = det(Λ) =             λi ,
                                  i=1

                                    
                                    n
       trace(A) = trace(Λ) =                 λi .
                                       i=1



   When A = CΛC −1 , we have A−1 = CΛ−1 C −1 . This shows that the eigenvectors
of A−1 are the same as those of A, and the corresponding eigenvalues are simply the
reciprocals of the eigenvalues of A. Similarly,

       A2 = (CΛC −1 )(CΛC −1 ) = CΛ2 C −1 ,

so that the eigenvectors of A2 are the same as those of A, and the corresponding
eigenvalues are the squares of the eigenvalues of A. This result generalizes immediately
to Ak .


1.7       Symmetric Matrix
More can be said about symmetric matrices. Let c1 and c2 be two eigenvectors of A
corresponding to the distinct eigenvalues λ1 and λ2 , respectively. If A is symmetric,
then

       c2 Ac1 = λ1 c2 c1 = λ2 c2 c1 .

As λ1 = λ2 , it must be true that c2 c1 = 0, so that they are orthogonal. Given linearly
independent eigenvectors that correspond to a common eigenvalue, they can also be
orthogonalized. Thus, a symmetric matrix is orthogonally diagonalizable, in the sense
that

       C  AC = Λ,           or         A = CΛC  ,

where Λ is again the diagonal matrix of the eigenvalues of A, and C is the orthogonal
matrix of associated eigenvectors.

   As nonsingular transformations preserve rank (Lemma 1.4), so do orthogonal trans-
formations. We thus have the result below.

Lemma 1.6 For a symmetric matrix A, rank(A) = rank(Λ), the number of non-zero
eigenvalues of A.

                                                             
                                                             c Chung-Ming Kuan, 2001
12                                        CHAPTER 1. LINEAR AND MATRIX ALGEBRA


     Moreover, when A is diagonalizable, the assertions of Lemma 1.5 remain valid,
whether or not the eigenvalues of A are distinct.

Lemma 1.7 Let A be an n × n symmetric matrix. Then,
                               n
         det(A) = det(Λ) =           λi ,
                              i=1
                                
                                n
       trace(A) = trace(Λ) =              λi .
                                    i=1



By Lemma 1.7, a symmetric matrix is nonsingular if its eigenvalues are all non-zero.

     A symmetric matrix A is said to be positive deﬁnite if b Ab > 0 for all vectors b = 0;
A is said to be positive semi-deﬁnite if b Ab ≥ 0 for all b = 0. A positive deﬁnite matrix
thus must be nonsingular, but a positive semi-deﬁnite matrix may be singular. Suppose
that A is a symmetric matrix orthogonally diagonalized as C  AC = Λ. If A is also
positive semi-deﬁnite, then for any b = 0,
                                
       b Λb = b (C  AC)b = b̃ Ab̃ ≥ 0,

where b̃ = Cb. This shows that Λ is also positive semi-deﬁnite, and all the diagonal
elements of Λ must be non-negative. It can be seen that the converse also holds.

Lemma 1.8 A symmetric matrix is positive deﬁnite (positive semi-deﬁnite) if, and only
if, its eigenvalues are all positive (non-negative).

     For a symmetric and positive deﬁnite matrix A, A−1/2 is such that A−1/2 A−1/2 =
A−1 . In particular, by orthogonal diagonalization,

       A−1 = CΛ−1 C  = (CΛ−1/2 C  )(CΛ−1/2 C  ),

so that we may choose A−1/2 = CΛ−1/2 C  . The inverse of A−1/2 is A1/2 = CΛ1/2 C  .
It follows that A1/2 A1/2 = A, and A−1/2 AA−1/2 = I. Note that Λ−1/2 C  is also a
legitimate choice of A−1/2 , yet it is not symmetric.

     Finally, we know that for two positive real numbers a and b, a ≥ b implies b−1 ≥ a−1 .
This result can be generalized to compare two positive deﬁnite matrices, as stated below
without proof.

Lemma 1.9 Given two symmetric and positive deﬁnite matrices A and B, if A − B
is positive semi-deﬁnite, then so is B −1 − A−1 .


c Chung-Ming Kuan, 2001
1.8. ORTHOGONAL PROJECTION                                                              13


1.8       Orthogonal Projection

A matrix A is said to be idempotent if A2 = A. Given a vector y in the Euclidean
space V , a projection of y onto a subspace S of V is a linear transformation of y to
S. The resulting projected vector can be written as P y, where P is the associated
transformation matrix. Given the projection P y in S, further projection to S should
have no eﬀect on P y, i.e.,

      P (P y) = P 2 y = P y.

Thus, a matrix P is said to be a projection matrix if it is idempotent.

   A projection of y onto S is orthogonal if the projection P y is orthogonal to the
diﬀerence between y and P y. That is,

      (y − P y) P y = y  (I − P ) P y = 0.

As y is arbitrary, the equality above holds if, and only if, (I − P ) P = 0. Consequently,
P = P  P and P  = P  P . This shows that P must be symmetric. Thus, a matrix is an
orthogonal projection matrix if, and only if, it is symmetric and idempotent. It can be
easily veriﬁed that the orthogonal projection P y must be unique.

   When P is an orthogonal projection matrix, it is easily seen that I −P is idempotent
because

      (I − P )2 = I − 2P + P 2 = I − P .

As I − P is also symmetric, it is an orthogonal projection matrix. Since (I − P )P = 0,
the projections P y and (I − P )y must be orthogonal. This shows that any vector y
can be uniquely decomposed into two orthogonal components:

      y = P y + (I − P )y.

Deﬁne the orthogonal complement of a subspace S ⊆ V as

      S ⊥ = {v ∈ V : v  s = 0, for all s ∈ S}.

If P is the orthogonal projection matrix that projects vectors onto S ⊆ V , we have
P s = s for any s ∈ S. It follows that (I − P )y is orthogonal to s and that (I − P )y
is the orthogonal projection of y onto S ⊥ .

                                                             
                                                             c Chung-Ming Kuan, 2001
14                                CHAPTER 1. LINEAR AND MATRIX ALGEBRA


     Intuitively, the orthogonal projection P y can be interpreted as the “best approxi-
mation” of y in S, in the sense that P y is the closest to y in terms of the Euclidean
norm. To see this, we observe that for any s ∈ S,

        y − s2 = y − P y + P y − s2

                 = y − P y2 + P y − s2 + 2(y − P y) (P y − s)

                 = y − P y2 + P y − s2 .

This establishes the following result.

Lemma 1.10 Let y be a vector in V and P y its orthogonal projection onto S ⊆ V .
Then,

       y − P y ≤ y − s,

for all s ∈ S.


     Let A be a symmetric and idempotent matrix and C be the orthogonal matrix that
diagonalizes A to Λ. Then,

       Λ = C  AC = C  A(CC  )AC = Λ2 .

This is possible only when the eigenvalues of A are zero and one. The result below now
follows from Lemmas 1.8.

Lemma 1.11 A symmetric and idempotent matrix is positive semi-deﬁnite with the
eigenvalues 0 and 1.

Moreover, trace(Λ) is the number of non-zero eigenvalues of A and hence rank(Λ).
When A is symmetric, rank(A) = rank(Λ) by Lemma 1.6, and trace(A) = trace(Λ) by
Lemma 1.7. Combining these results we have:

Lemma 1.12 For a symmetric and idempotent matrix A, rank(A) = trace(A), the
number of non-zero eigenvalues of A.


     Given an n × k matrix A, it is easy to see that A A and AA are symmetric
and positive semi-deﬁnite. Let x denote a vector orthogonal to the rows of A A; i.e.,
A Ax = 0. Hence x A Ax = 0, so that Ax must be a zero vector. That is, x is
also orthogonal to the rows of A. Conversely, Ax = 0 implies A Ax = 0. This shows


c Chung-Ming Kuan, 2001
1.8. ORTHOGONAL PROJECTION                                                         15


that the orthogonal complement of the row space of A is the same as the orthogonal
complement of the row space of A A. Hence, these two row spaces are also the same.
Similarly, the column space of A is the same as the column space of AA . It follows
from Lemma 1.3 that

     rank(A) = rank(A A) = rank(AA ).

In particular, if A (n × k) is of full column rank k < n, then A A is k × k and hence
of full rank k (nonsingular), but AA is n × n and hence singular. The result below is
now immediate.

Lemma 1.13 If A is an n × k matrix with full column rank k < n, then, A A is
symmetric and positive deﬁnite.


   Given an n × k matrix A with full column rank k < n, P = A(A A)−1 A is clearly
symmetric and idempotent and hence an orthogonal projection matrix. As

     trace(P ) = trace(A A(A A)−1 ) = trace(I k ) = k,

we have from Lemmas 1.11 and 1.12 that P has exactly k eigenvalues equal to 1 and
that rank(P ) = k. Similarly, rank(I − P ) = n − k. Moreover, any vector y ∈ span(A)
can be written as Ab for some non-zero vector b, and

     P y = A(A A)−1 A (Ab) = Ab = y.

This suggests that P must project vectors onto span(A). On the other hand, when
y ∈ span(A)⊥ , y is orthogonal to the column vectors of A so that A y = 0. It follows
that P y = 0 and (I − P )y = y. Thus, I − P must project vectors onto span(A)⊥ .
These results are summarized below.

Lemma 1.14 Let A be an n × k matrix with full column rank k. Then, A(A A)−1 A
orthogonally projects vectors onto span(A) and has rank k; I n − A(A A)−1 A orthog-
onally projects vectors onto span(A)⊥ and has rank n − k.


References

Anton, Howard (1981). Elementary Linear Algebra, third edition, New York: Wiley.

Basilevsky, Alexander (1983). Applied Matrix Algebra in the Statistical Sciences, New
     York: North-Holland.

                                                            
                                                            c Chung-Ming Kuan, 2001
16                               CHAPTER 1. LINEAR AND MATRIX ALGEBRA


Graybill, Franklin A. (1969). Introduction to Matrices with Applications in Statistics,
     second edition, Belmont, CA: Wadsworth.

Noble, Ben and James W. Daniel. Applied Linear Algebra, second edition, Englewood
     Cliﬀs, NJ: Prentice-Hall.





c Chung-Ming Kuan, 2001
Chapter 2

Statistical Concepts

In this chapter we summarize some basic probability and statistics results to be used in
subsequent chapters. We focus on ﬁnite-sample results of multivariate random vectors
and statistics; asymptotic properties require more profound mathematical tools and will
not be discussed until Chapter 5. The topics covered in this chapter can be found in
most of statistics textbooks; in particular, Amemiya (1994) is a useful reference.


2.1      Distribution Functions
Given a random experiment, let Ω denote the collection of all possible outcomes of this
experiment and IP denote the probability measure assigned to a certain collection of
events (subsets of Ω). If A is an event, IP(A) is such that 0 ≤ IP(A) ≤ 1 and measures
the likelihood of A. The larger is IP(A), the more likely is the event A to occur. A
d-dimensional random vector (Rd -valued random variable) is a function of the outcomes
ω ∈ Ω and takes values in Rd . Formal deﬁnitions of probability space and random
variables are given in Section 5.1.

   The (joint) distribution function of the Rd -valued random variable z is the non-
decreasing, right-continuous function Fz such that for ζ = (ζ1 . . . ζd ) ∈ Rd ,

       Fz (ζ) = IP{ω ∈ Ω : z1 (ω) ≤ ζ1 , . . . , zd (ω) ≤ ζd },

with

               lim            Fz (ζ) = 0,              lim          Fz (ζ) = 1.
       ζ1 →−∞, ... , ζd →−∞                    ζ1 →∞, ... , ζd →∞

Note that the distribution function of z is a standard point function deﬁned on Rd and
provides a convenient way to characterize the randomness of z. The (joint) density

                                                  17
18                                                     CHAPTER 2. STATISTICAL CONCEPTS


function of Fz , if exists, is the non-negative function fz such that
                ζd        ζ1
      Fz (ζ) =        ···       fz (s1 , . . . , sd ) ds1 · · · dsd ,
                    −∞           −∞

where the right-hand side is a Riemann integral. Clearly, the density function fz must
be integrated to one on Rd .
     The marginal distribution function of the i th component of z is

       Fzi (ζi ) = IP{ω ∈ Ω : zi (ω) ≤ ζi } = Fz (∞, . . . , ∞, ζi , ∞, . . . , ∞).

Thus, the marginal distribution function of zi is the joint distribution function without
restrictions on the other elements zj , j = i. The marginal density function of zi is the
non-negative function fzi such that
                  ζi
     Fzi (ζi ) =      fzi (s) ds.
                      −∞

It is readily seen that the marginal density function fzi can also be obtained from the
associated joint density function by integrating out the other elements:
                        
      fzi (si ) =   · · · fz (s1 , . . . , sd ) ds1 · · · dsi−1 dsi+1 · · · dsd .
                     R       R

     If there are two random vectors z 1 and z 2 , they are said to be independent if,
and only if, their joint distribution function is the product of all marginal distribution
functions:

       Fz1 ,z2 (ζ 1 , ζ 2 ) = Fz1 (ζ 1 ) Fz2 (ζ 2 );

otherwise, they are dependent. If random vectors possess density functions, they are
independent if, and only if, their joint density function is also the product of marginal
density functions. It is intuitively clear that functions of independent random variables
remain independent, as stated in the result below.

Lemma 2.1 If z 1 and z 2 are independent random vectors, then their transformations,
h1 (z 1 ) and h2 (z 2 ), are also independent random variables.


2.2      Moments
Given the d-dimensional random vector z with the distribution function Fz , the expec-
tation of the i th element zi is deﬁned as
                     
      IE(zi ) = · · · ζi dFz (ζ1 , . . . , ζd ),
                      Rd


c Chung-Ming Kuan, 2001
2.2. MOMENTS                                                                                          19


where the right-hand side is a Stieltjes integral; for more details about diﬀerent integrals
we refer to Rudin (1976). As this integral equals
                                                   
         ζi dFz (∞, . . . , ∞, ζi , ∞, . . . , ∞) =   ζi dFzi (ζi ),
        R                                             R

the expectation of zi can be taken with respect to either the joint distribution function
Fz or the marginal distribution function Fzi .

    We say that the random variable zi has a ﬁnite expected value (or the expectation
IE(zi ) exists) if IE |zi | < ∞. A random variable need not have a ﬁnite expected value;
if it does, this random variable is said to be integrable. More generally, the expectation
of a random vector is deﬁned elementwise. Thus, for a random vector z, IE(z) exists if
all IE(zi ), i = 1, . . . , d, exist, and z is integrable if all zi , i = 1, . . . , d, are integrable.

    It is easily seen that the expectation operator does not have any eﬀect on a constant;
that is, IE(b) = b for any constant b. For integrable random variables zi and zj , the
expectation operator is monotonic in the sense that

      IE(zi ) ≤ IE(zj ),

for any zi ≤ zj with probability one. Moreover, the expectation operator possesses the
linearity property:

      IE(azi + bzj ) = a IE(zi ) + b IE(zj ),

where a and b are two real numbers. This property immediately generalizes to integrable
random vectors.

Lemma 2.2 Let A (n × d) and B (n × c) be two non-stochastic matrices. Then for
any integrable random vectors z (d × 1) and y (c × 1),

      IE(Az + By) = A IE(z) + B IE(y).

If b is an n-dimensional nonstochastic vector, then IE(Az + b) = A IE(z) + b.


    More generally, let y = g(z) be a well-deﬁned, vector-valued function of z. The
expectation of y is
                              
      IE(y) = IE[g(z)] =            g(ζ) dFz (ζ).
                               Rd

When g(z) = zik , IE[g(z)] = IE(zik ) is known as the k th moment of zi , where k need not
be an integer. In particular, IE(zi ) is the ﬁrst moment of zi . When a random variable

                                                                       
                                                                       c Chung-Ming Kuan, 2001
20                                                   CHAPTER 2. STATISTICAL CONCEPTS


has ﬁnite k th moment, its moments of order less than k are also ﬁnite. Thus, if the k th
moment does not exist, then the moments of order greater than k also fail to exist. See
Section 2.3 for some examples of random variables that possess only low order moments.
A random vector is said to have ﬁnite k th moment if its elements all have ﬁnite k th
moment. A random variable with ﬁnite second moment is said to be square integrable;
a random vector is square integrable if its elements are all square integrable.

     The k th central moment of zi is IE[zi − IE(zi )]k . In particular, the second central
moment of the square integrable random variable zi is

       IE[zi − IE(zi )]2 = IE(zi2 ) − [IE(zi )]2 ,

which is a measure of dispersion of the values of zi . The second central moment is also
known as variance, denoted as var(·). The square root of variance is standard deviation.
It can be veriﬁed that, given the square integrable random variable zi and real numbers
a and b,

       var(azi + b) = var(azi ) = a2 var(zi ).

This shows that variance is location invariant but not scale invariant.

     When g(z) = zi zj , IE[g(z)] = IE(zi zj ) is the cross moment of zi and zj . The cross
central moment of zi and zj is

       IE[(zi − IE(zi ))(zj − IE(zj ))] = IE(zi zj ) − IE(zi ) IE(zj ),

which is a measure of the co-variation between these two random variables. The cross
central moment of two random variables is known as their covariance, denoted as
cov(·, ·). Clearly, cov(zi , zj ) = cov(zj , zi ) and cov(zi , zi ) = var(zi ). It can be seen
that for real numbers a, b, c, d,

       cov(azi + b, czj + d) = cov(azi , czj ) = ac cov(zi , zj ).

Thus, covariance is also location invariant but depends on the scale (measurement units)
of random variables.

     Observe that for any real numbers a and b,

       var(azi + bzj ) = a2 var(zi ) + b2 var(zj ) + 2ab cov(zi , zj ),

so that

       var(zi − azj ) = var(zi ) + a2 var(zj ) − 2a cov(zi , zj ),


c Chung-Ming Kuan, 2001
2.2. MOMENTS                                                                                   21


which must be non-negative. Setting a = cov(zi , zj )/ var(zj ), we have

      var(zi ) − cov(zi , zj )2 / var(zj ) ≥ 0.

In particular, when zi = azj + b for some real numbers a and b, we have var(zi ) =
a2 var(zj ) and cov(zi , zj ) = a var(zj ), so that

      var(zi ) − cov(zi , zj )2 / var(zj ) = 0.

This yields the Cauchy-Schwarz inequality for square integrable random variables.


Lemma 2.3 (Cauchy-Schwarz) Let zi , zj be two square integrable random variables.
Then,

      cov(zi , zj )2 ≤ var(zi ) var(zj ),

where the equality holds when zi = azj + b for some real numbers a and b.


cf. the Cauchy-Schwarz inequality (Lemma 1.1) in Section 1.2. This also suggests that
when two random variables are square integrable, their covariance must be ﬁnite.

    The correlation coeﬃcient of zi and zj is deﬁned as

                            cov(zi , zj )
      corr(zi , zj ) =                        .
                           var(zi ) var(zj )

By Lemma 2.3 we have

      −1 ≤ corr(zi , zj ) ≤ 1.

If corr(zi , zj ) = 0, zi and zj are said to be uncorrelated. If corr(zi , zj ) > 0, zi and zj are
said to be positively correlated; if corr(zi , zj ) < 0, zi and zj are negatively correlated.
When zi = azj + b, corr(zi , zj ) = 1 if a > 0 and −1 if a < 0. In both cases, zi and zj
are perfectly correlated. For two random variables zi and zj and real numbers a, b, c, d,

                                                        ac
      corr(azi + b, czj + d) = corr(azi , czj ) =             corr(zi , zj ).
                                                      |a| |c|

Thus, the correlation coeﬃcient is not only location invariant but also scale invariant,
apart from the sign change.

                                                                        
                                                                        c Chung-Ming Kuan, 2001
22                                                 CHAPTER 2. STATISTICAL CONCEPTS


     For a d-dimensional, square integrable random vector z, its variance-covariance ma-
trix is

          var(z) = IE[(z − IE(z))(z − IE(z)) ]
                                                                         
                        var(z1 )    cov(z1 , z2 ) · · ·   cov(z1 , zd )
                                                                       
                    cov(z , z )      var(z2 )    ···     cov(z2 , zd ) 
                            2 1                                        
                 =        .             .        ..           ..       .
                          ..            ..           .         .       
                                                                       
                      cov(zd , z1 ) cov(zd , z2 ) · · ·     var(zd )

As cov(zi , zj ) = cov(zj , zi ), var(z) must be symmetric. Moreover, var(z) is positive
semi-deﬁnite because it is the expectation of a matrix that is positive semi-deﬁnite with
probability one.

     For two random vectors y (c × 1) and z (d × 1), the d × c covariance matrix of z
and y is

       cov(z, y) = IE[(z − IE z)(y − IE y) ] = IE(zy  ) − IE(z) IE(y  ).

Two random vectors are uncorrelated if their covariance matrix is a zero matrix. If
y and z are independent, their joint distribution function is the product of individual
distribution functions. It follows that the cross moment of y and z is the product of
their individual ﬁrst moment: that

       IE(zy  ) = IE(z) IE(y  ).

This shows that independence implies cov(z, y) = 0. Uncorrelated random vectors are
not necessarily independent, however.

     Based on the properties of variance and covariance for random variables, we have
the following result for random vectors.


Lemma 2.4 Let A (n × d), B (n × c), and C (m × c) be non-stochastic matrices and b
an n-dimensional non-stochastic vector. Then for any square integrable random vectors
z (d × 1) and y (c × 1),

          var(Az + By) = A var(z)A + B var(y)B  + 2A cov(z, y)B  ,

            var(Az + b) = var(Az) = A var(z) A .




c Chung-Ming Kuan, 2001
2.3. SPECIAL DISTRIBUTIONS                                                               23


   Given two square integrable random vectors z and y, suppose that var(y) is positive
deﬁnite. As the variance-covariance matrix of (z  y  ) must be a positive semi-deﬁnite
matrix,

                                     var(z)     cov(z, y)              I
        [I − cov(z, y) var(y)−1 ]
                                    cov(y, z)    var(y)      − var(y)−1 cov(y, z)

           = var(z) − cov(z, y) var(y)−1 cov(y, z)

is also a positive semi-deﬁnite matrix. This establishes the multivariate version of the
Cauchy-Schwarz inequality for square integrable random vectors.

Lemma 2.5 (Cauchy-Schwarz) Let y, z be two square integrable random vectors.
Then,

      var(z) − cov(z, y) var(y)−1 cov(y, z)

is a positive semi-deﬁnite matrix.


   A random vector is said to be degenerate (have a singular distribution) if its variance-
covariance matrix is singular.      Let Σ be the variance-covariance matrix of the d-
dimensional random vector z. If Σ is singular, then there exists a non-zero vector
c such that Σc = 0. For this particular c, we have

      c Σc = IE[c (z − IE(z))]2 = 0.

It follows that c [z − IE(z)] = 0 with probability one; i.e, the elements of z are linearly
dependent with probability one. This implies that all the probability mass of z is
concentrated in a subspace of dimension less than d.


2.3       Special Distributions
In this section we discuss the multivariate normal (Gaussian) distribution and other
univariate distributions such as the chi-square, Student’s t, and Fisher’s F distributions.

   A random vector z is said to have a multivariate normal distribution with mean
µ and variance-covariance matrix Σ, denoted as z ∼ N (µ, Σ), if it has the density
function
                                                
                1              1        −1
                          exp − (z − µ) Σ (z − µ) .
        (2π)d/2 det(Σ)1/2      2

                                                              
                                                              c Chung-Ming Kuan, 2001
24                                               CHAPTER 2. STATISTICAL CONCEPTS


For d = 1, this is just the density of the univariate normal random variable. Note that
the multivariate normal density function is completely characterized by its mean vector
and variance-covariance matrix. A normal random variable has moments of all orders;
in particular, its even-order central moments are

       IE(z − µ)k = (k − 1) · · · 3 · 1 var(z)k/2 ,   k ≥ 2 and k is even,

and its odd-order central moments are all zeros. A normal random variable with mean
zero and variance one is usually called the standard normal random variable.

     When Σ is a diagonal matrix with diagonal elements σii , i = 1, . . . , d, the elements
of z are uncorrelated. Note that for normal random variables, uncorrelatedness implies
independence. In this case, the density function is simply the product of marginal
density functions for z1 , . . . , zd :
                                                       
                                        1  (zi − µi )2
                                           d
                1
                              exp −                      .
      (2π)d/2 ( di=1 σii )1/2           2
                                          i=1
                                                σii

When σii = σo2 , a constant, this joint density simpliﬁes to
                                           
                          1 
                              d
         1
                 exp − 2         (zi − µi )2 .
    (2πσo2 )d/2          2σo
                                i=1

Although uncorrelated normal random variables are also independent, we stress again
that this need not be true for other random variables.

     The result below shows that proper linear transformations of normal random vectors
remain normally distributed.

Lemma 2.6 Let z be a d-dimensional random vector distributed as N (µ, Σ). Also let
A be an n × d non-stochastic matrix with full row rank n < d and b be a d-dimensional
non-stochastic vector. Then,

       Az + b ∼ N (Aµ + b, AΣA ).




Lemma 2.6 implies that, when z ∼ N (µ, Σ), any sub-vector (element) of z also has a
multivariate (univariate) normal distribution; the converse need not be true, however.
It is also easily seen that

       Σ−1/2 (z − µ) ∼ N (0, I d ),


c Chung-Ming Kuan, 2001
2.3. SPECIAL DISTRIBUTIONS                                                           25


where Σ−1/2 is such that Σ−1/2 ΣΣ−1/2 = I, as deﬁned in Section 1.7. Proper standard-
ization of a normal random vector thus yields a normal random vector with independent
elements. If A is not of full row rank, var(Az) = AΣA does not have full rank, so
that Az is degenerate.

   Let z ∼ N (µ, I d ). The sum of squares of the elements of z is the non-central
chi-square random variable with d degrees of freedom and the non-centrality parameter
ν = µ µ, denoted as

      z  z ∼ χ2 (d; ν).

The density function of χ2 (d; ν) is
                    
                    ν + x d/2−1 1 
                                               ∞
                                           xi ν i
      f (x) = exp −       x                           ,          x > 0,
                      2        2d/2 i! 22i Γ(i + d/2)
                                           i=0

where Γ is the gamma function with
              ∞
     Γ(n) =      e−x xn−1 dx.
                0

It can be shown that a χ2 (d; ν) random variable has mean (d + ν) and variance 2d + 4ν.
When µ = 0, the non-centrality parameter ν = 0, and χ2 (d; 0) is known as the central
chi-square random variable, denoted as χ2 (d). The density of χ2 (d) is
                  x               1
      f (x) = exp −    xd/2−1 d/2         ,     x > 0,
                    2         2 Γ(d/2)
with mean d and variance 2d. The result below follows directly from Lemma 2.6.

Lemma 2.7 Let z be a d-dimensional random vector distributed as N (µ, Σ). Then,

      z  Σ−1 z ∼ χ2 (d; µ Σ−1 µ);

in particular, if µ = 0, z  Σ−1 z ∼ χ2 (d).

   Let w and x be two independent random variables such that w ∼ N (µ, 1) and
x ∼ χ2 (n). Then
       w
           ∼ t(n; µ),
        x/n
the non-central t distribution with n degrees of freedom and the non-centrality param-
eter µ. The density function of t(n; µ) is

                   nn/2 exp(−µ2 /2)        ∞     n + i + 1 µi  2x2 i/2
      f (x) =                                  Γ                           (sign x)i .
              Γ(n/2)Γ(1/2)(n + x2 )(n+1)/2 i=0        2      i! n + x2

                                                            
                                                            c Chung-Ming Kuan, 2001
26                                                     CHAPTER 2. STATISTICAL CONCEPTS


When µ = 0, t(n; µ) reduces to the central t distribution, denoted as t(n), which has
the density
                                                     −(n+1)/2
                 Γ((n + 1)/2)                    x2
       f (x) =                                1+                  .
               Γ(n/2)Γ(1/2)n1/2                  n

Note that a t(n) random variable is symmetric about zero, and its k th moment exists
only for k < n; when n > 2, its mean is zero and variance is n/(n − 2).

     As n tends to inﬁnity, it can be seen that
                  −(n+1)/2                       2
              x2                     x2         n/x2 −x /2           x2   −1/2
           1+                   = 1+                           1+                 → exp(−x2 /2).
              n                      n                                n

Also note that Γ(1/2) = π 1/2 and that for large n,

       Γ((n + 1)/2)
                    ≈ (n/2)1/2 .
          Γ(n/2)

Thus, when n tends to inﬁnity, the density of t(n) converges to

        1
       √ exp(−x2 /2),
        2π

the density of the standard normal random variable. When n = 1, the density for t(1)
becomes
                     1
       f (x) =              .
                 π[1 + x2 ]

This is also the density of the Cauchy random variable with the location parameter 0.
Note that the Cauchy random variable does not even have the ﬁrst moment.

     Let z1 and z2 be two independent random variables such that z1 ∼ χ2 (n1 ; ν1 ) and
z2 ∼ χ2 (n2 ; ν2 ). Then,

       z1 /n1
              ∼ F (n1 , n2 ; ν1 , ν2 ),
       z2 /n2

the non-central F distribution with the degrees of freedom n1 and n2 and the non-
centrality parameters ν1 and ν2 . The k th moment of F (n1 , n2 ; ν1 , ν2 ) exists when
k < n2 /2. In many statistical applications we usually encounter F (n1 , n2 ; ν1 , 0). When
n2 > 2, the mean of F (n1 , n2 ; ν1 , 0)is

       n2 (n1 + ν1 )
                     ;
       n1 (n2 − 2)


c Chung-Ming Kuan, 2001
2.4. LIKELIHOOD                                                                               27


when n2 > 4, the variance is
       n
                      1 + ν1 ) + (n1 + 2ν1 )(n2 − 2)
               2 (n           2
      2 2                                            .
        n1                 (n2 − 2)2 (n2 − 4)

If both ν1 and ν2 are zero, we have the central F distribution F (n1 , n2 ). When n2 > 2,
F (n1 , n2 ) has mean n2 /(n2 − 2); when n2 > 4, it has variance

       2n22 (n1 + n2 − 2)
                            .
      n1 (n2 − 2)2 (n2 − 4)

Note that if a random variable is distributed as t(n), its square has the F (1, n) distri-
bution.


2.4       Likelihood
Suppose that we postulate p as the joint probability function of the discrete random vari-
ables z1 , . . . , zT with the parameter vector θ. Plugging the observed values ζ1 , . . . , ζT
into p we then obtain a function of θ:

      L(θ) := p(ζ1 , . . . , ζT ; θ).

This function represents the probability (likelihood) that those observed values are
generated from the postulated probability function p; diﬀerent parameter values of
course result in diﬀerent probability values. Thus, L(θ) is also known as the likelihood
function of θ.

   Similarly, let f denote the postulated joint density function of the random vectors
z 1 , . . . , z T with the parameter vector θ. Then given the observed values ζ 1 , . . . , ζ T ,
the likelihood function of θ is

      L(θ) := f (ζ 1 , . . . , ζ T ; θ).

In what follows, we will use L and f interchangeably. Note, however, that a postu-
lated density function need not be the true density function that generates the random
variables.

   When f is diﬀerentiable and non-zero with probability one, the gradient vector of
log L(θ),

                            1
      ∇θ log L(θ) =            ∇ L(θ),
                           L(θ) θ

                                                                  
                                                                  c Chung-Ming Kuan, 2001
28                                                                     CHAPTER 2. STATISTICAL CONCEPTS


is known as the score vector, denoted as s(ζ 1 , . . . , ζ T ; θ). We can then write

       s(ζ 1 , . . . , ζ T ; θ)f (ζ 1 , . . . , ζ T ; θ) = ∇θ f (ζ 1 , . . . , ζ T ; θ).

For a given θ, the score vector may vary with the observed values ζ 1 , . . . , ζ T . Thus, we
can also treat the score vector as a random vector and denote it as s(z 1 , . . . , z T ; θ).

     When diﬀerentiation and integration can be interchanged,
                   
              ···             s(ζ 1 , . . . , ζ T ; θ) f (ζ 1 , . . . , ζ T ; θ) dζ 1 . . . dζ T
         Rd             Rd
                                  
              =              ···            ∇θ f (ζ 1 , . . . , ζ T ; θ) dζ 1 . . . dζ T
                        Rd             Rd
                                                                                               
              = ∇θ                     ···            f (ζ 1 , . . . , ζ T ; θ) dζ 1 . . . dζ T
                                Rd               Rd

              = ∇θ 1

              = 0.

The left-hand side is in eﬀect the expectation of the score vector with respect to f . If
there exists θ o such that f (ζ 1 , . . . , ζ T ; θ o ) is the true density function, we immediately
obtain the following result.


Lemma 2.8 If there exists θ o such that f (ζ 1 , . . . , ζ T ; θ o ) is the joint density function
of the random vectors z 1 , . . . , z T . Then under regularity conditions,

       IE[s(z 1 , . . . , z T ; θ o )] = 0,

where s(z 1 , . . . , z T ; θ o ) is the score evaluated at θ o , and IE is taken with respect to the
true density function.


Remark: Lemma 2.8 requires the conditions that ensure diﬀerentiability of the likelihood
function and interchangeability of diﬀerentiation and integration. We do not give those
conditions explicitly; see e.g., Amemiya (1985) for some suﬃcient conditions. This
comment also applies to Lemma 2.9.

     It is easy to see that the Hessian matrix of the log-likelihood function is

                                    1                1
       ∇2θ log L(θ) =                   ∇2θ L(θ) −      [∇ L(θ)][∇θ L(θ)] ,
                                   L(θ)            L(θ)2 θ


c Chung-Ming Kuan, 2001
2.4. LIKELIHOOD                                                                                                                         29


where the second term is just the outer product of the score vector, and
                   
                      1
              ···       ∇2θ L(θ) f (ζ 1 , . . . , ζ T ; θ) dζ 1 · · · dζ T
         Rd     Rd L(θ)
                     
            =     ···    ∇2θ f (ζ 1 , . . . , ζ T ; θ) dζ 1 · · · dζ T
                    Rd            Rd
                                                                                             
              = ∇2θ                   ···           f (ζ 1 , . . . , ζ T ; θ) dζ 1 · · · dζ T
                                 Rd         Rd

              = ∇2θ 1

              = 0.

It follows that
              
           ···               ∇2θ log L(θ) f (ζ 1 , . . . , ζ T ; θ) dζ 1 · · · dζ T
         Rd             Rd
                                     
              =−              ···               s(ζ 1 , . . . , ζ T ; θ)s(ζ 1 , . . . , ζ T ; θ) f (ζ 1 , . . . , ζ T ; θ) dζ 1 · · · dζ T ,
                         Rd            Rd

where the left-hand side is the expectation of the Hessian matrix and the right-hand
side is negative of the variance-covariance matrix of s(z 1 , . . . , z T ; θ), both with respect
to the postulated density function f . If f (ζ 1 , . . . , ζ T ; θ o ) is the true density function,
the variance-covariance matrix of s(z 1 , . . . , z T ; θ o ) is known as the information matrix.
Together with Lemma 2.8, we have the so-called information matrix equality.


Lemma 2.9 If there exists θ o such that f (ζ 1 , . . . , ζ T ; θ o ) is the joint density function
of the random vectors z 1 , . . . , z T . Then under regularity conditions,

       IE[∇2θ log L(θ o )] + var(s(z 1 , . . . , z T ; θ o )) = 0,

where ∇2θ log L(θ o ) is the Hessian matrix of log L evaluated at θ o , and IE and var are
taken with respect to the true density function.



Remark: When f is not the true density function, Lemma 2.8 and 2.9 need not hold.
That is, neither IE[s(z 1 , . . . , z T ; θ)] nor

       IE[∇2θ log L(θ)] + var(s(z 1 , . . . , z T ; θ))

is necessarily zero.

                                                                                                 
                                                                                                 c Chung-Ming Kuan, 2001
30                                               CHAPTER 2. STATISTICAL CONCEPTS


2.5      Estimation
2.5.1      Point Estimation

Let θ o denote a parameter vector associated with the joint distribution of T random
vectors z 1 , . . . , z T . A point estimator (or simply an estimator) for θ o is a function of
these random vectors:

       θ̂ = h(z 1 , . . . , z T ),

where h is some function. An estimator is clearly a random vector. Once the observed
values of z 1 , . . . , z T are plugged into this function, we obtain a point estimate. That is,
a point estimate is just a particular value that an estimator may assume.
     A simple principle of constructing estimators for moments is known as analog estima-
tion. This principle suggests to estimate population moments using their ﬁnite-sample
counterparts. For example, given a sample of T random variables z1 , . . . , zT with the
common k th moment IE(z1k ), the analog estimator for IE(z1k ) is simply the sample av-
erage of zik :

        1 k
            T
             z .
        T t=1 i

In particular, the sample mean z̄ is the analog estimator for the population mean.
     To estimate the parameter vector θ o , it is also natural to maximize the associated
likelihood function L(θ). The resulting solution is known as the maximum likelihood
estimator (MLE) for θ o , denoted as θ̃ or θ̃ T , where the subscript T indicates that this
is an estimator based on a sample of T observations. As the maximum of a function
is invariant with respect to monotonic transformations, it is quite common to compute
the MLE by maximizing the log-likelihood function log L(θ). It follows that the score
vector evaluated at θ̃ must be zero; i.e., s(ζ 1 , . . . , ζ T ; θ̃) = 0.

2.5.2      Criteria for Point Estimators

Let θ̂ be an estimator for θ o . The diﬀerence IE(θ̂) − θ o is called the bias of θ̂. An
estimator is said to be unbiased if it has zero bias, i.e.,

       IE(θ̂) = θ o ;

otherwise, it is biased. Unbiasedness does not ensure that an estimate is close to the true
parameter, however. In fact, it is even possible that all possible values of an unbiased
estimator deviate from the true parameter by a constant.


c Chung-Ming Kuan, 2001
2.5. ESTIMATION                                                                                 31


    Given two unbiased estimators, it is therefore natural to choose the one whose values
are more concentrated around the true parameter. For real-valued unbiased estimators,
this amounts to selecting an estimator with a smaller variance. If they are vector-
valued, we adopt the following eﬃciency criterion. An unbiased estimator θ̂ 1 is said to
be “better” (more eﬃcient) than an unbiased estimator θ̂ 2 if

      var(a θ̂ 2 ) ≥ var(a θ̂ 1 ),

for all non-zero vectors a. This is equivalent to the condition that

      a [var(θ̂ 2 ) − var(θ̂ 1 )]a ≥ 0,

i.e., var(θ̂ 2 ) − var(θ̂ 1 ) is a positive semi-deﬁnite matrix. Given a class of unbiased
estimators, if one of them is better than all other estimators in that class, it is the
“best” (most eﬃcient) within this class.

    More generally, we can compare estimators based on mean squared error (MSE):

      IE[(θ̂ − θ o )(θ̂ − θ o ) ]

              = IE[(θ̂ − IE(θ̂) + IE(θ̂) − θ o )(θ̂ − IE(θ̂) + IE(θ̂) − θ o ) ]

              = var(θ̂) + [IE(θ̂) − θ o ] [IE(θ̂) − θ o ] ,

where the second term is the outer product of the bias vector. An estimator θ̂1 (not
necessarily unbiased) is said to be better (more eﬃcient) than θ̂ 2 if MSE(θ̂ 2 ) − MSE(θ̂ 1 )
is a positive semi-deﬁnite matrix. Clearly, the MSE criterion reduces to the previous
variance-based criterion when estimators are unbiased.

    The following result shows that the inverse of the information matrix is a lower
bound, also known as the Cramér-Rao lower bound, for the variance-covariance matrix
of any unbiased estimator.


Lemma 2.10 (Cramér-Rao) If there exists θ o such that f (ζ 1 , . . . , ζ T ; θ o ) is the joint
density function of the random vectors z 1 , . . . , z T . Let θ̂ denote an unbiased estimator
for θ based on these random vectors. If var(s(z 1 , . . . , z T ; θ o )) is positive deﬁnite,

      var(θ̂) − var(s(z 1 , . . . , z T ; θ o ))−1

is a positive semi-deﬁnite matrix.

                                                                      
                                                                      c Chung-Ming Kuan, 2001
32                                                                    CHAPTER 2. STATISTICAL CONCEPTS


Proof: We ﬁrst note that for any unbiased estimator θ̂ for θ,
           
        ···    (θ̂ − θ) s(ζ 1 , . . . , ζ T ; θ) f (ζ 1 , . . . , ζ T ; θ) dζ 1 · · · dζ T
         Rd           Rd
                                
              =            ···            θ̂ s(ζ 1 , . . . , ζ T ; θ) f (ζ 1 , . . . , ζ T ; θ) dζ 1 · · · dζ T
                  Rd                 Rd
                                                                                               
              = ∇θ                   ···           θ̂ f (ζ 1 , . . . , ζ T ; θ) dζ 1 · · · dζ T
                             Rd               Rd

              = ∇θ θ

              = I,

where the third equality holds because θ̂ is unbiased for θ when f (ζ 1 , . . . , ζ T ; θ) is the
associated density function. Thus,

       cov(θ̂, s(z 1 , . . . , z T ; θ o )) = I.

The assertion now follows from Lemma 2.5, the multivariate version of the Cauchy-
Schwarz inequality.                       ✷

By Lemma 2.10, an unbiased estimator is the best if its variance-covariance matrix
achieves the Cramér-Rao lower bound; this is not a necessary condition, however.


2.5.3      Interval Estimation

While a point estimate is a particular value representing the unknown parameter, in-
terval estimation results in a range of values that may contain the unknown parameter
with certain probability.

     Suppose that there is an estimate θ̂ for the true parameter θo and a function q(θ̂, θo )
whose distribution is known. Then, given a probability value γ, we can ﬁnd suitable
values a and b such that

       IP{a < q(θ̂, θo ) < b} = γ.

Solving the inequality above for θo we may obtain an interval containing θo . This leads
to the probability statement:

       IP{α < θo < β} = γ,

where α and β depend on a, b, and θ̂. We can then conclude that we are γ × 100 percent
sure that the interval (α, β) contains θo . Here, γ is the conﬁdence coeﬃcient, and (α, β)


c Chung-Ming Kuan, 2001
2.6. HYPOTHESIS TESTING                                                                      33


is the associated conﬁdence interval for θo . Given the estimate θ̂, it is easily seen that
the larger the value of γ, the wider is the associated conﬁdence interval.

   Let A1 denote the event that a conﬁdence interval contains θ1 and A2 the event
that a conﬁdence interval contains θ2 . The intersection A = A1 ∩ A2 is thus the event
that a conﬁdence “box” covers both parameters. When A1 and A2 are independent
such that IP(A1 ) = IP(A2 ) = γ, we have IP(A) = γ 2 . When these two events are not
independent (e.g., the parameter estimators of θ1 and θ2 are correlated), it becomes
diﬃcult to determine IP(A). As such, ﬁnding a proper conﬁdence “box” based on
individual conﬁdence intervals is by no means an easy job. On the other hand, if a
function q(θ̂1 , θ̂2 , θ1 , θ2 ) with a known distribution is available, we can, for a given γ,
ﬁnd the values a and b such that

      IP{a < q(θ̂1 , θ̂2 , θ1 , θ2 ) < b} = γ.

By solving the inequality above for θ1 and θ2 we may obtain a conﬁdence region in
which the point (θ1 , θ2 ) lies with probability γ.


2.6     Hypothesis Testing
2.6.1     Basic Concepts

Given a sample of data, it is often desirable to check if certain characteristics of the
underlying random mechanism (population) are supported by these data. For this pur-
pose, a hypothesis of these characteristics must be speciﬁed, and a test is constructed so
as to generate a rule of rejecting or accepting (not rejecting) the postulated hypothesis.

   The hypothesis being tested is called the null hypothesis, denoted as H0 ; the other
states or values of the characteristics of interest form an alternative hypothesis, denoted
as H1 . Hypotheses are usually formulated in terms of the parameters of models. For
example, one may specify that H0 : θ o = a for some a and H1 : θ o = a. Here, H0 is
a simple hypothesis in the sense that the parameter vector being tested takes a single
value, but H1 is a composite hypothesis in that the parameter vector may take more
than one values. Given a sample of random variables z 1 , . . . , z T , a test statistic is a
function of these random variables, denoted as T (z 1 , . . . , z T ). The critical region C
of T (z 1 , . . . , z T ) is the range of its possible values that lead to rejection of the null
hypothesis. In what follows, the set

      Γ = {ζ 1 , . . . , ζ T : T (ζ 1 , . . . , ζ T ) ∈ C}

                                                                 
                                                                 c Chung-Ming Kuan, 2001
34                                                            CHAPTER 2. STATISTICAL CONCEPTS


will also be referred to as the critical region of T . The complement of the critical region,
C c , is the region containing the values of T (z 1 , . . . , z T ) that lead to acceptance of the
null hypothesis. We can also deﬁne

       Γc = {ζ 1 , . . . , ζ T : T (ζ 1 , . . . , ζ T ) ∈ C c }

as the acceptance region of T .
     A test may yield incorrect inferences. A test is said to commit the type I error if
it rejects the null hypothesis when the null hypothesis is in fact true; a test is said to
commit the type II error if it accepts the null hypothesis when the alternative hypothesis
is true. Suppose that we are interested in testing H0 : θ o = a against H1 : θ o = b. Let IP0
be the probability when θ o = a and IP1 the probability when θ o = b. The probability
of the type I error is then
                                                
       α = IP0 ((z 1 , . . . , z T ) ∈ Γ) =           f0 (ζ 1 , . . . , ζ T ; a) dζ 1 · · · dζ T ,
                                                  Γ

where f0 (z 1 , . . . , z T ; a) is the joint density with the parameter θ o = a. The value α is
also known as the size or signiﬁcance level of the test. The probability of the type II
error is
                                                 
       β = IP1 ((z 1 , . . . , z T ) ∈ Γc ) =             f1 (ζ 1 , . . . , ζ T ; b) dζ 1 · · · dζ T ,
                                                     Γc

where f1 (z 1 , . . . , z T ; b) is the joint density with the parameter θ o = b. Clearly, α
decreases when the critical region Γ is smaller; in the mean time, β increases due to a
larger Γc . Thus, there is usually a trade-oﬀ between these two error probabilities.
     Note, however, that the probability of the type II error cannot be deﬁned as above
when the alternative hypothesis is composite: θ o ∈ Θ1 , where Θ1 is a set of parameter
values in the parameter space. Consider now the probability 1−IP1 (Γc ) = IP1 (Γ), which
is the probability of rejecting the null hypothesis when H1 is true. Thus, both IP0 (Γ)
and IP1 (Γ) are the probabilities of rejecting the null hypothesis under two diﬀerent
parameter values. More generally, deﬁne the power function of the test as

       π(θ o ) = IPθo {(z 1 , . . . , z T ) ∈ Γ},

where θ o varies in the parameter space. In particular, π(a) = α. For θ o ∈ Θ1 , π(θ o )
describes the ability of a test that can correctly detect the falsity of the null hypothesis;
these probabilities are also referred to as the powers of the test. The probability of the
type II error under the composite alternative hypothesis θo ∈ Θ1 can now be deﬁned as

       β = max [1 − π(θ o )].
             θo ∈Θ1



c Chung-Ming Kuan, 2001
2.6. HYPOTHESIS TESTING                                                                             35


2.6.2     Construction of Tests

Given the null hypothesis θ o = a, the test statistic T (z 1 , . . . , z T ) is usually based on
the comparison of an estimator of θ o and the hypothesized value a. This statistic must
have a known distribution under the null hypothesis, which will be referred to as the
null distribution.

    Given the statistic T (z 1 , . . . , z T ), the probability IP0 (T (z 1 , . . . , z T ) ∈ C) can be
determined by the null distribution of T . If this probability is small, the event that
T (z 1 , . . . , z T ) ∈ C would be considered “unlikely” or “improbable” under the null
hypothesis, while the event that T (z 1 , . . . , z T ) ∈ C c would be considered “likely” or
“probable”. If the former event does occur (i.e., for data z 1 = ζ 1 , . . . , z T = ζ T ,
T (ζ 1 , . . . , ζ T ) falls in C), it constitutes an evidence against the null hypothesis, so that
the null hypothesis is rejected; otherwise, we accept (do not reject) the null hypothesis.
Therefore, one should specify a small signiﬁcance level α and determine the associated
critical region C by

       α = IP0 {T (z 1 , . . . , z T ) ∈ C}.

As such, we shall write the critical region for the signiﬁcance level α as Cα . This
approach ensures that, even though the decision of rejection might be wrong, the prob-
ability of making the type I error is no greater than α. A test statistic is said to be
signiﬁcant if it is in the critical region; otherwise, it is insigniﬁcant.

    Another approach is to reject the null hypothesis if

       IP0 {v : v > T (ζ 1 , . . . , ζ T )}

is small. This probability is the tail probability of the null distribution and also known
as the p-value of the statistic T . Although this approach does not require specifying
the critical region, it is virtually the same as the previous approach.

    The rationale of our test decision is that the null hypothesis is rejected because the
test statistic takes an unlikely value. It is then natural to expect that the calculated
statistic is relatively more likely under the alternative hypothesis. Given the null hy-
pothesis θ o = a and alternative hypothesis θ o ∈ Θ1 , we would like to have a test such
that

       π(a) ≤ π(θ o ),          θ o ∈ Θ1 .

A test is said to be unbiased if its size is no greater than the powers under the alternative
hypothesis. Moreover, we would like to have a test that can detect the falsity of the

                                                                      
                                                                      c Chung-Ming Kuan, 2001
36                                                  CHAPTER 2. STATISTICAL CONCEPTS


null hypothesis with probability approaching one when there is suﬃcient information.
That is, for every θ o ∈ Θ1 ,

        π(θ o ) = IPθo {T (z 1 , . . . , z T ) ∈ C} → 1,

as T → ∞. A test is said to be consistent if its power approaches one when the sample
size becomes inﬁnitely large.


Example 2.11 Given the sample of i.i.d. normal random variables z1 , . . . , zT with
mean µo and variance one. We would like to test the null hypothesis µo = 0. A natural
estimator for µo is the sample average z̄ = T −1           T
                                                           t=1 zt . It is well known that

        √
         T (z̄ − µo ) ∼ N (0, 1).
         √
Hence,    T z̄ ∼ N (0, 1) under the null hypothesis; that is, the null distribution of the
          √
statistic T z̄ is the standard normal distribution. Given the signiﬁcance level α, we
can determine the critical region Cα using
                 √
        α = IP0 ( T z̄ ∈ Cα ).

Let Φ denote the distribution function of the standard normal random variable. For
α = 0.05, we know
                    √
        0.05 = IP0 ( T z̄ > 1.645) = 1 − Φ(1.645).

The critical region is then (1.645, ∞); the null hypothesis is rejected if the calculated
                                                                                        √
statistic falls in this interval. When the null hypothesis is false, the distribution of T z̄
is no longer N (0, 1) but is N (µo , 1). Suppose that µo > 0. Then,
             √                     √                      √
        IP1 ( T z̄ > 1.645) = IP1 ( T (z̄ − µo ) > 1.645 − T µo ).
        √
Since       T (z̄ − µo ) ∼ N (0, 1) under the alternative hypothesis, we have the power:
             √                             √
        IP1 ( T z̄ > 1.645) = 1 − Φ(1.645 − T µo ).

Given that µo > 0, this probability must be greater than the test size (0.05), so that
                                                                  √
the test is unbiased. On the other hand, when T increases, 1.645 − T µo becomes even
smaller, so that the power improves. When T tends to inﬁnity, the power approaches
             √
one, so that T z̄ is a consistent test. ✷


c Chung-Ming Kuan, 2001
2.6. HYPOTHESIS TESTING                                                         37


References

Amemiya, Takeshi (1985). Advanced Econometrics, Cambridge, MA: Harvard Univer-
     sity Press.

Amemiya, Takeshi (1994). Introduction to Statistics and Econometrics, Cambridge,
     MA: Harvard University Press.

Rudin, Walter (1976). Principles of Mathematical Analysis, Third edition, New York,
     NY: McGraw-Hill.




                                                        
                                                        c Chung-Ming Kuan, 2001
38                        CHAPTER 2. STATISTICAL CONCEPTS





c Chung-Ming Kuan, 2001
Chapter 3


Classical Least Squares Theory

3.1    Introduction


Economists have proposed numerous hypotheses and theories in order to describe the
behavior of economic agents and the relationships between economic variables. Al-
though these propositions may be theoretically appealing and logically correct, they
need not be practically relevant unless they are supported by real world data. A theory
with empirical evidence is of course more convincing. Therefore, empirical analysis has
become an indispensable ingredient of contemporary economic research. By economet-
rics we mean the statistical and mathematical methods that can be used to analyze
empirical relationships between economic variables.



   A leading approach in econometrics is the regression analysis in which a regression
model of a collection of explanatory variables is speciﬁed to characterize the behavior
of the variable of interest. The simplest and most commonly used speciﬁcation is the
linear model. Once a linear model is speciﬁed, it remains to estimate unknown model
parameters, test economic and econometric hypotheses, and draw inferences from these
results. This chapter is concerned with the most important estimation method in lin-
ear regression, the method of ordinary least squares. Readers can also ﬁnd related
topics in many econometrics textbooks, e.g., Davidson and MacKinnon (1993), Gold-
berger (1991), Greene (2000), Harvey (1990), Intriligator et al. (1996), Johnston (1984),
Judge et al. (1988), Maddala (1992), Ruud (2000), and Theil (1971), among others.

                                           39
40                             CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


3.2     The Method of Ordinary Least Squares

Suppose that there is a variable, y, whose behavior over time (or across individual units)
is of interest to us. A theory may suggest that the behavior of y can be well characterized
by some function f of the variables x1 , . . . , xk . Then, f (x1 , . . . , xk ) may be viewed as
a “systematic” component of y provided that no other variables can further account for
the residual behavior, y − f (x1 , . . . , xk ). In the context of linear regression, the function
f is speciﬁed as a linear function. The method of ordinary least squares (OLS) enables
us to determine the linear weights (parameters) of this speciﬁcation.


3.2.1    Simple Linear Regression

In simple linear regression, only one variable x is designated to describe the behavior of
the variable y. The linear speciﬁcation is


       α + βx,


where α and β are unknown parameters. We can then write


       y = α + βx + e(α, β),


where e(α, β) = y − α − βx denotes the error resulted from this speciﬁcation. In what
follows, y will be referred to as the dependent variable (regressand), and x will be
referred to as an explanatory variable (regressor). Note that the regressor x itself may
be a function of some other variables, e.g., x = z 2 or x = log z.

     Suppose that we have T observations of the variables y and x. Given the linear
speciﬁcation above, our objective is to ﬁnd suitable α and β such that the resulting
linear function “best” ﬁts the data (yt , xt ), t = 1, . . . , T . Here, the generic subscript t
is used for both cross-section and time-series data. The OLS method suggests to ﬁnd a
straight line whose sum of squared errors is as small as possible. This amounts to ﬁnd
α and β that minimize the following OLS criterion function:

                  1              1
                     T               T
       Q(α, β) :=              2
                       e (α, β) =      (y − α − βxt )2 .
                  T t=1 t         T t=1 t

The solutions can be easily obtained by solving the ﬁrst order conditions.


c Chung-Ming Kuan, 2001
3.2. THE METHOD OF ORDINARY LEAST SQUARES                                                     41


   The ﬁrst order conditions of this minimization problem are:

                  2
                               T
      ∂Q(α, β)
               =−   (yt − α − βxt ) = 0,
        ∂α        T
                               t=1

                  2
                     T
      ∂Q(α, β)
               =−      (y − α − βxt )xt = 0.
        ∂β        T t=1 t

Solving for α and β we have the following solutions:
                  T
                  t=1 (yt − ȳ)(xt − x̄)
      β̂T =           T
                                         ,
                      t=1 (xt − x̄)
                                   2


      α̂T = ȳ − β̂T x̄,
                T                       T
where ȳ =      t=1 yt /T and x̄ =      t=1 xt /T . As α̂T and β̂T are obtained by minimizing the
OLS criterion function, they are known as the OLS estimators of α and β, respectively.
The subscript T of α̂T and β̂T signiﬁes that these solutions are obtained from a sample
of T observations. Note that if xt is a constant c for every t, then x̄ = c, and hence β̂T
cannot be computed.
   The function ŷ = α̂T + β̂T x is the estimated regression line with the intercept α̂T
and slope β̂T . We also say that this line is obtained by regressing y on (the constant one
and) the regressor x. The regression line so computed gives the “best” ﬁt of data, in
the sense that any other linear function of x would yield a larger sum of squared errors.
For a given xt , the OLS ﬁtted value is a point on the regression line:

      ŷt = α̂T + β̂T xt .

The diﬀerence between yt and ŷt is the t th OLS residual:

      êt := yt − ŷt ,

which corresponds to the error of the speciﬁcation as

      êt = et (α̂T , β̂T ).

Note that regressing y on x and regressing x on y lead to diﬀerent regression lines in
general, except when all (yt , xt ) lie on the same line; see Exercise 3.9.
Remark: Diﬀerent criterion functions would result in other estimators. For exam-
ple, the so-called least absolute deviation estimator can be obtained by minimizing the
average of the sum of absolute errors:

      1
           T
         |yt − α − βxt |,
      T
         t=1

                                                                   
                                                                   c Chung-Ming Kuan, 2001
42                               CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


which in turn determines a diﬀerent regression line. We refer to Manski (1991) for a
comprehensive discussion of this topic.

3.2.2     Multiple Linear Regression

More generally, we may specify a linear function with k explanatory variables to describe
the behavior of y:

       β1 x1 + β2 x2 + · · · + βk xk ,

so that

       y = β1 x1 + β2 x2 + · · · + βk xk + e(β1 , . . . , βk ),

where e(β1 , . . . , βk ) again denotes the error of this speciﬁcation. Given a sample of T
observations, this speciﬁcation can also be expressed as

       y = Xβ + e(β),                                                                 (3.1)

where β = (β1 β2 · · · βk ) is the vector of unknown parameters, y and X contain all
the observations of the dependent and explanatory variables, i.e.,
                                                 
             y1                x11 x12 · · · x1k
                                                 
           y                x                    
           2                21 x22 · · · x2k 
      y =  . ,        X = .        ..  ..    ..   ,
           ..               ..      .     .   .  
                                                 
             yT                xT 1 xT 2 · · · xT k

where each column of X contains T observations of an explanatory variable, and e(β)
is the vector of errors. It is typical to set the ﬁrst explanatory variable as the constant
one so that the ﬁrst column of X is the T × 1 vector of ones, . For convenience, we
also write e(β) as e and its element et (β) as et .

     Our objective now is to ﬁnd a k-dimensional regression hyperplane that “best” ﬁts
the data (y, X). In the light of Section 3.2.1, we would like to minimize, with respect
to β, the average of the sum of squared errors:
                  1             1
       Q(β) :=      e(β) e(β) = (y − Xβ) (y − Xβ).                                  (3.2)
                  T             T
This is a well-deﬁned problem provided that the basic identiﬁcation requirement below
holds for the speciﬁcation (3.1).

[ID-1] The T × k data matrix X is of full column rank k.


c Chung-Ming Kuan, 2001
3.2. THE METHOD OF ORDINARY LEAST SQUARES                                               43


     Under [ID-1], the number of regressors, k, must be strictly less than the number of
observations, T . This is so because if k > T , the rank of X must be less than or equal to
T , and hence X cannot have full column rank. Moreover, [ID-1] requires that any linear
speciﬁcation does not contain any “redundant” regressor; that is, any column vector of
X cannot be written as a linear combination of other column vectors. For example, X
contains a column of ones and a column of xt in simple linear regression. These two
columns would be linearly dependent if xt = c for every t. Thus, [ID-1] requires that xt
in simple linear regression is not a constant.

     The ﬁrst order condition of the OLS minimization problem is

       ∇β Q(β) = ∇β (y  y − 2y  Xβ + β  X  Xβ)/T = 0.

By the matrix diﬀerentiation results in Section 1.2, we have

       ∇β Q(β) = −2X  (y − Xβ)/T = 0.

Equivalently, we can write

       X  Xβ = X  y.                                                                (3.3)

These k equations, also known as the normal equations, contain exactly k unknowns.
Given [ID-1], X is of full column rank so that X  X is positive deﬁnite and hence
invertible by Lemma 1.13. It follows that the unique solution to the ﬁrst order condition
is

       β̂ T = (X  X)−1 X  y.                                                        (3.4)

Moreover, the second order condition is also satisﬁed because

       ∇2β Q(β) = 2(X  X)/T

is a positive deﬁnite matrix under [ID-1]. Thus, β̂ T is the unique minimizer of the OLS
criterion function and hence known as the OLS estimator of β. This result is formally
stated below.

Theorem 3.1 Given the speciﬁcation (3.1), suppose that [ID-1] holds. Then, the OLS
estimator β̂ T given by (3.4) uniquely minimizes the OLS criterion function (3.2).


     If X is not of full column rank, its column vectors are linearly dependent and there-
fore satisfy an exact linear relationship. This is the problem of exact multicollinearity.

                                                             
                                                             c Chung-Ming Kuan, 2001
44                                 CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


In this case, X  X is not invertible so that there exist inﬁnitely many solutions to the
normal equations X  Xβ = X  y. As such, the OLS estimator β̂ T cannot be uniquely
determined. See Exercise 3.4 for a geometric interpretation of this result. Exact mul-
ticollinearity usually arises from inappropriate model speciﬁcations. For example, in-
cluding both total income, total wage income, and total non-wage income as regressors
results in exact multicollinearity because total income is, by deﬁnition, the sum of wage
and non-wage income. See also Section 3.6.2 for another example. In what follows, the
identiﬁcation requirement for the linear speciﬁcation (3.1) is always assumed.

Remarks:

     1. Theorem 3.1 does not depend on the “true” relationship between y and X. That
        is, whether (3.1) is a correct speciﬁcation is irrelevant to the existence and unique-
        ness of the OLS estimator.

     2. It is easy to verify that the magnitudes of the coeﬃcient estimates β̂i , i = 1, . . . , k,
        are aﬀected by the measurement units of dependent and explanatory variables; see
        Exercise 3.7. As such, a larger coeﬃcient estimate does not necessarily imply that
        the associated regressor is more important in explaining the behavior of y. In fact,
        the coeﬃcient estimates are not directly comparable in general; cf. Exercise 3.5.

     Once the OLS estimator β̂ T is obtained, we can plug it into the original linear
speciﬁcation and obtain the vector of OLS ﬁtted values:

        ŷ = X β̂ T .

The vector of OLS residuals is then

        ê = y − ŷ = e(β̂ T ).

From the normal equations (3.3) we can deduce the following algebraic results. First,
the OLS residual vector must satisfy the normal equations:

        X  (y − Xβ) = X  e = 0,

so that X  ê = 0. When X contains a column of constants (i.e., a column of X is c,
where  is the vector of ones), X  ê = 0 implies

                  
                  T
         ê =         êt = 0.
                  t=1


c Chung-Ming Kuan, 2001
3.2. THE METHOD OF ORDINARY LEAST SQUARES                                             45


That is, the sum of OLS residuals must be zero. Second,
                 
      ŷ  ê = β̂ T X  ê = 0.

These results are summarized below.

Theorem 3.2 Given the speciﬁcation (3.1), suppose that [ID-1] holds. Then, the vector
of OLS ﬁtted values ŷ and the vector of OLS residuals ê have the following properties.

 (a) X  ê = 0; in particular, if X contains a column of constants,   T
                                                                       t=1 êt = 0.

 (b) ŷ  ê = 0.


Note that when  ê =  (y − ŷ) = 0, we have

        1         1
           T          T
              yt =      ŷ .
        T t=1      T t=1 t

That is, the sample average of the data yt is the same as the sample average of the ﬁtted
values ŷt when X contains a column of constants.

3.2.3     Geometric Interpretations

The OLS estimation result has nice geometric interpretations. These interpretations
have nothing to do with the stochastic properties to be discussed in Section 3.3, and
they are valid as long as the OLS estimator exists.

   In what follows, we write P = X(X  X)−1 X  which is an orthogonal projection
matrix that projects vectors onto span(X) by Lemma 1.14. The vector of OLS ﬁtted
values can be written as

      ŷ = X(X  X)−1 X  y = P y.

Hence, ŷ is the orthogonal projection of y onto span(X). The OLS residual vector is

      ê = y − ŷ = (I T − P )y,

which is the orthogonal projection of y onto span(X)⊥ and hence is orthogonal to ŷ
and X; cf. Theorem 3.2. Consequently, ŷ is the “best approximation” of y, given the
information contained in X, as shown in Lemma 1.10. Figure 3.1 illustrates a simple
case where there are only two explanatory variables in the speciﬁcation.

   The following results are useful in many applications.

                                                            
                                                            c Chung-Ming Kuan, 2001
46                                 CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


                                                                   y



                                           x2
                                                                       ê = (I − P )y


                               x2 β̂ 2                                  P y = x1 β̂ 1 + x2 β̂ 2




                                                                               x1
                                                         x1 β̂ 1

                  Figure 3.1: The orthogonal projection of y onto span(x1 ,x2 )



Theorem 3.3 (Frisch-Waugh-Lovell) Given the speciﬁcation

         y = X 1 β 1 + X 2 β 2 + e,

where X 1 is of full column rank k1 and X 2 is of full column rank k2 , let β̂ T =
          
(β̂ 1,T β̂ 2,T ) denote the corresponding OLS estimators. Then,

         β̂ 1,T = [X 1 (I − P 2 )X 1 ]−1 X 1 (I − P 2 )y,

         β̂ 2,T = [X 2 (I − P 1 )X 2 ]−1 X 2 (I − P 1 )y,

where P 1 = X 1 (X 1 X 1 )−1 X 1 and P 2 = X 2 (X 2 X 2 )−1 X 2 .

Proof: These results can be directly veriﬁed from (3.4) using the matrix inversion
formula in Section 1.4. Alternatively, write

         y = X 1 β̂ 1,T + X 2 β̂ 2,T + (I − P )y,

where P = X(X  X)−1 X  with X = [X 1 X 2 ]. Pre-multiplying both sides by X 1 (I −
P 2 ), we have

         X 1 (I − P 2 )y

               = X 1 (I − P 2 )X 1 β̂ 1,T + X 1 (I − P 2 )X 2 β̂ 2,T + X 1 (I − P 2 )(I − P )y.

The second term on the right-hand side vanishes because (I − P 2 )X 2 = 0. For the
third term, we know span(X 2 ) ⊆ span(X), so that span(X)⊥ ⊆ span(X 2 )⊥ . As each


c Chung-Ming Kuan, 2001
3.2. THE METHOD OF ORDINARY LEAST SQUARES                                                   47


column vector of I − P is in span(X)⊥ , I − P is not aﬀected if it is pojected onto
span(X 2 )⊥ . That is,

      (I − P 2 )(I − P ) = I − P .

Similarly, X 1 is in span(X), and hence (I − P )X 1 = 0. It follows that

      X 1 (I − P 2 )y = X 1 (I − P 2 )X 1 β̂ 1,T ,

from which we obtain the expression for β̂ 1,T . The proof for β̂ 2,T is similar.     ✷

   This result shows that β̂ 1,T can be computed from regressing (I − P 2 )y on (I −
P 2 )X 1 , where (I − P 2 )y and (I − P 2 )X 1 are the residual vectors of the “purging”
regressions of y on X 2 and X 1 on X 2 , respectively. Similarly, β̂ 2,T can be obtained by
regressing (I − P 1 )y on (I − P 1 )X 2 , where (I − P 1 )y and (I − P 1 )X 2 are the residual
vectors of the regressions of y on X 1 and X 2 on X 1 , respectively.

   From Theorem 3.3 we can deduce the following results. Consider the regression of
(I − P 1 )y on (I − P 1 )X 2 . By Theorem 3.3 we have

      (I − P 1 )y = (I − P 1 )X 2 β̂ 2,T + residual vector,                               (3.5)

where the residual vector is

      (I − P 1 )(I − P )y = (I − P )y.

Thus, the residual vector of (3.5) is identical to the residual vector of regressing y on
X = [X 1 X 2 ]. Note that (I − P 1 )(I − P ) = I − P implies P 1 = P 1 P . That is, the
orthogonal projection of y directly on span(X 1 ) is equivalent to performing iterated
projections of y on span(X) and then on span(X 1 ). The orthogonal projection part of
(3.5) now can be expressed as

      (I − P 1 )X 2 β̂ 2,T = (I − P 1 )P y = (P − P 1 )y.

These relationships are illustrated in Figure 3.2.

   Similarly, we have

      (I − P 2 )y = (I − P 2 )X 1 β̂ 1,T + residual vector,

where the residual vector is also (I − P )y, and the orthogonal projection part of this
regression is (P − P 2 )y. See also Davidson and MacKinnon (1993) for more details.

                                                               
                                                               c Chung-Ming Kuan, 2001
48                           CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


                                                       y



                               x2
                                                            ê = (I − P )y


                                                              Py
                                                                      (I − P 1 )y


                                                            (P − P 1 )y

                                                                             x1
                                                     P 1y

              Figure 3.2: An illustration of the Frisch-Waugh-Lovell Theorem



     Intuitively, Theorem 3.3 suggests that β̂ 1,T in eﬀect describes how X 1 characterizes
y, after the eﬀect of X 2 is excluded. Thus, β̂ 1,T is diﬀerent from the OLS estimator of
regressing y on X 1 because the eﬀect of X 2 is not controlled in the latter. These two
estimators would be the same if P 2 X 1 = 0, i.e., X 1 is orthogonal to X 2 . Also, β̂ 2,T
describes how X 2 characterizes y, after the eﬀect of X 1 is excluded, and it is diﬀerent
from the OLS estimator from regressing y on X 2 , unless X 1 and X 2 are orthogonal to
each other.

     As an application, consider the speciﬁcation with X = [X 1 X 2 ], where X 1 con-
tains the constant term and a time trend variable t, and X 2 includes the other k − 2
explanatory variables. This speciﬁcation is useful when the variables of interest exhibit
a trending behavior. Then, the OLS estimators of the coeﬃcients of X 2 are the same
as those obtained from regressing (detrended) y on detrended X 2 , where detrended y
and X 2 are the residuals of regressing y and X 2 on X 1 , respectively. See Exercise 3.11
for another application.


3.2.4     Measures of Goodness of Fit

We have learned that from previous sections that, when the explanatory variables in a
linear speciﬁcation are given, the OLS method yields the best ﬁt of data. In practice,
one may consdier a linear specﬁcation with diﬀerent sets of regressors and try to choose
a particular one from them. It is therefore of interest to compare the performance across


c Chung-Ming Kuan, 2001
3.2. THE METHOD OF ORDINARY LEAST SQUARES                                              49


diﬀerent speciﬁcations. In this section we discuss how to measure the goodness of ﬁt of
a speciﬁcation. A natural goodness-of-ﬁt measure is of course the sum of squared errors
ê ê. Unfortunately, this measure is not invariant with respect to measurement units of
the dependent variable and hence is not appropriate for model comparison. Instead, we
consider the following “relative” measures of goodness of ﬁt.

   Recall from Theorem 3.2(b) that ŷ  ê = 0. Then,

     y  y = ŷ  ŷ + ê ê + 2ŷ  ê = ŷ  ŷ + ê ê.

This equation can be written in terms of sum of squares:

     
     T             
                   T              
                                  T
          yt2 =          ŷt2 +       ê2t ,
     t=1
                t=1
                               t=1
                                      
       TSS           RSS           ESS

where TSS stands for total sum of squares and is a measure of total squared variations of
yt , RSS stands for regression sum of squares and is a measures of squared variations of
ﬁtted values, and ESS stands for error sum of squares and is a measure of squared vari-
ation of residuals. The non-centered coeﬃcient of determination (or non-centered R2 )
is deﬁned as the proportion of TSS that can be explained by the regression hyperplane:
               RSS     ESS
     R2 =          =1−     .                                                         (3.6)
               TSS     TSS
Clearly, 0 ≤ R2 ≤ 1, and the larger the R2 , the better the model ﬁts the data. In
particular, a model has a perfect ﬁt if R2 = 1, and it does not account for any variation
of y if R2 = 0. It is also easy to verify that this measure does not depend on the
measurement units of the dependent and explanatory variables; see Exercise 3.7.

   As ŷ  ŷ = ŷ  y, we can also write

               ŷ  ŷ     (ŷ  y)2
     R2 =              =                  .
               yy       (y  y)(ŷ  ŷ)

It follows from the discussion of inner product and Euclidean norm in Section 1.2 that
the right-hand side is just cos2 θ, where θ is the angle between y and ŷ. Thus, R2 can be
interpreted as a measure of the linear association between these two vectors. A perfect
ﬁt is equivalent to the fact that y and ŷ are collinear, so that y must be in span(X).
When R2 = 0, y is orthogonal to ŷ so that y is in span(X)⊥ .

   It can be veriﬁed that when a constant is added to all observations of the depen-
dent variable, the resulting coeﬃcient of determination also changes. This is clearly a

                                                               
                                                               c Chung-Ming Kuan, 2001
50                                   CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


drawback because a sensible measure of ﬁt should not be aﬀected by the location of the
dependent variable. Another drawback of the coeﬃcient of determination is that it is
non-decreasing in the number of variables in the speciﬁcation. That is, adding more
variables to a linear speciﬁcation will not reduce its R2 . To see this, consider a speciﬁ-
cation with k1 regressors and a more complex one containing the same k1 regressors and
additional k2 regressors. In this case, the former speciﬁcation is “nested” in the latter,
in the sense that the former can be obtained from the latter by setting the coeﬃcients
of those additional regressors to zero. Since the OLS method searches for the best ﬁt of
data without any constraint, the more complex model cannot have a worse ﬁt than the
speciﬁcations nested in it. See also Exercise 3.8.

     A measure that is invariant with respect to constant addition is the centered co-
eﬃcient of determination (or centered R2 ). When a speciﬁcation contains a constant
term,
        
        T             
                      T              
                                     T
          (yt − ȳ) =
                   2           ¯
                        (ŷt − ŷ) +
                                  2
                                       ê2t ,
        t=1                t=1             t=1
                                                       
        Centered TSS           Centered RSS         ESS

                        T
where ŷ¯ = ȳ =                                                      2
                        t=1 yt /T . Analogous to (3.6), the centered R is deﬁned as

                               Centered RSS         ESS
        Centered R2 =                       =1−              .                        (3.7)
                               Centered TSS     Centered TSS
Centered R2 also takes on values between 0 and 1 and is non-decreasing in the number
of variables in the speciﬁcation. In contrast with non-centered R2 , this measure excludes
the eﬀect of the constant term and hence is invariant with respect to constant addition.

     When a specﬁcation contains a constant term, we have
        
        T                       
                                T                               
                                                                T
          (yt − ȳ)(ŷt − ȳ) =   (ŷt − ȳ + êt )(ŷt − ȳ) =   (ŷt − ȳ)2 ,
        t=1                          t=1                                t=1
               T                 t
because        t=1 ŷt êt =     t=1 êt = 0 by Theorem 3.2. It follows that
                   T                               T
                   t=1 (ŷt − ȳ)                  t=1 (yt − ȳ)(ŷt − ȳ)]
                                 2             [                           2
        R2 =       T
                                   =          T                  T
                                                                                .
                   t=1 (yt − ȳ)              t=1 (yt − ȳ) ][ t=1 (ŷt − ȳ) ]
                                 2   [                     2                 2


That is, the centered R2 is also the squared sample correlation coeﬃcient of yt and ŷt ,
also known as the squared multiple correlation coeﬃcient. If a speciﬁcation does not
contain a constant term, the centered R2 may be negative; see Exercise 3.10.

     Both centered and non-centered R2 are still non-decreasing in the number of regres-
sors. As such, if one try to determine a speciﬁcation based on their R2 , the speciﬁcation


c Chung-Ming Kuan, 2001
3.3. STATISTICAL PROPERTIES OF THE OLS ESTIMATORS                                       51


with more regressors would be chosen. A modiﬁed measure is the adjusted R2 , R̄2 ,
which is the centered R2 adjusted for the degrees of freedom:

                        ê ê/(T − k)
      R̄2 = 1 −                             .
                  (y  y − T ȳ 2 )/(T − 1)

This measure can also be expressed in diﬀerent forms:

                  T −1                  k−1
      R̄2 = 1 −        (1 − R2 ) = R2 −      (1 − R2 ).
                  T −k                  T −k

That is, R̄2 is the centered R2 with a penalty term depending on model complexity
and explanatory ability. Observe that when k increases, (k − 1)/(T − k) increases but
1 − R2 decreases. Whether the penalty term is larger or smaller depends on the trade-
oﬀ between these two terms. Thus, R̄2 need not be increasing with the number of
explanatory variables. Clearly, R̄2 < R2 except for k = 1 or R2 = 1. It can also be
veriﬁed that R̄2 < 0 when R2 < (k − 1)/(T − 1).

Remark: As diﬀerent dependent variables have diﬀerent TSS, the associated speci-
ﬁcations are therefore not comparable in terms of their R2 . For example, R2 of the
speciﬁcations with y and log y as dependent variables are not comparable.


3.3     Statistical Properties of the OLS Estimators

Readers should have noticed that the previous results, which are either algebraic or
geometric, hold regardless of the random nature of data. To derive the statistical
properties of the OLS estimator, some probabilistic conditions must be imposed.


3.3.1    Classical Conditions

The following conditions on data are usually known as the classical conditions.

[A1] X is non-stochastic.

[A2] y is a random vector such that

      (i) IE(y) = Xβ o for some β o ;

      (ii) var(y) = σo2 I T for some σo2 > 0.

[A3] y is a random vector such that y ∼ N (Xβ o , σo2 I T ) for some β o and σo2 > 0.

                                                             
                                                             c Chung-Ming Kuan, 2001
52                            CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


     Condition [A1] is not crucial, but it is quite convenient for subsequent analysis.
Note that IE(y) is the “averaging” behavior of y and may be interpreted as a system-
atic component of y. [A2](i) thus ensures that the postulated linear function Xβ is a
speciﬁcation of this systematic component, correct up to unknown parameters. Con-
dition [A2](ii) regulates that the variance-covariance matrix of y depends only on one
parameter σo2 ; such a matrix is also known as a scalar covariance matrix. Under [A2](ii),
yt , t = 1, . . . , T , have the constant variance σo2 and are pairwise uncorrelated (but not
necessarily independent). Although conditions [A2] and [A3] impose the same struc-
tures for the mean and variance of y, the latter is much stronger because it also speciﬁes
the distribution of y. We have seen in Section 2.3 that uncorrelated normal random
variables are also independent. Therefore, yt , t = 1, . . . , T , are i.i.d. (independently
and identically distributed) normal random variables under [A3]. The linear speciﬁca-
tion (3.1) with [A1] and [A2] is known as the classical linear model, and (3.1) with [A1]
and [A3] is also known as the classical normal linear model. The limitations of these
conditions will be discussed in Section 3.7.

     In addition to β̂ T , the new unknown parameter var(yt ) = σo2 in [A2](ii) and [A3]
should be estimated as well. The OLS estimator for σo2 is

                 ê ê     1  2
                               T
       σ̂T2 =           =      êt ,                                                   (3.8)
                T −k      T −k
                              t=1


where k is the number of regressors. While β̂ T is a linear estimator in the sense that
it is a linear transformation of y, σ̂T2 is not. In the sections below we will derive the
properties of the OLS estimators β̂ T and σ̂T2 under these classical conditions.


3.3.2     Without the Normality Condition

Under the imposed classical conditions, the OLS estimators have the following statistical
properties.


Theorem 3.4 Consider the linear speciﬁcation (3.1).

 (a) Given [A1] and [A2](i), β̂ T is unbiased for β o .

 (b) Given [A1] and [A2], σ̂T2 is unbiased for σo2 .

 (c) Given [A1] and [A2], var(β̂ T ) = σo2 (X  X)−1 .



c Chung-Ming Kuan, 2001
3.3. STATISTICAL PROPERTIES OF THE OLS ESTIMATORS                                        53


Proof: Given [A1] and [A2](i), β̂ T is unbiased because

       IE(β̂ T ) = (X  X)−1 X  IE(y) = (X  X)−1 X  Xβ o = β o .

To prove (b), recall that (I T − P )X = 0 so that the OLS residual vector can be written
as

       ê = (I T − P )y = (I T − P )(y − Xβ o ).

Then, ê ê = (y − Xβ o ) (I T − P )(y − Xβ o ) which is a scalar, and
       IE(ê ê) = IE[trace{(y − Xβ o ) (I T − P )(y − Xβ o )}]

                = IE[trace{(y − Xβ o )(y − Xβ o ) (I T − P )}].
By interchanging the trace and expectation operators, we have from [A2](ii) that
       IE(ê ê) = trace{IE[(y − Xβ o )(y − Xβ o ) (I T − P )]}

                = trace{IE[(y − Xβ o )(y − Xβ o ) ](I T − P )}

                = trace{σo2 I T (I T − P )}

                = σo2 trace(I T − P ).
By Lemmas 1.12 and 1.14, trace(I T − P ) = rank(I T − P ) = T − k. Consequently,

       IE(ê ê) = σo2 (T − k),

so that

       IE(σ̂T2 ) = IE(ê ê)/(T − k) = σo2 .

This proves the unbiasedness of σ̂T2 . Given that β̂ T is a linear transformation of y, we
have from Lemma 2.4 that
       var(β̂ T ) = var((X  X)−1 X  y)

                 = (X  X)−1 X  (σo2 I T )X(X  X)−1

                 = σo2 (X  X)−1 .
This establishes (c).        ✷
     It can be seen that the unbiasedness of β̂ T does not depend on [A2](ii), the variance
property of y. It is also clear that when σ̂T2 is unbiased, the estimator

        β̂ T ) = σ̂T2 (X  X)−1
       var(

is also unbiased for var(β̂ T ). The result below, known as the Gauss-Markov theorem,
indicates that when [A1] and [A2] hold, β̂ T is not only unbiased but also the best (most
eﬃcient) among all linear unbiased estimators for β o .

                                                                    
                                                                    c Chung-Ming Kuan, 2001
54                                 CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


Theorem 3.5 (Gauss-Markov) Given the linear speciﬁcation (3.1), suppose that [A1]
and [A2] hold. Then the OLS estimator β̂ T is the best linear unbiased estimator (BLUE)
for β o .


Proof: Consider an arbitrary linear estimator β̌ T = Ay, where A is non-stochastic.
Writing A = (X  X)−1 X  + C, β̌ T = β̂ T + Cy. Then,

        var(β̌ T ) = var(β̂ T ) + var(Cy) + 2 cov(β̂ T , Cy).

By [A1] and [A2](i),

        IE(β̌ T ) = β o + CXβ o .

Since β o is arbitrary, this estimator would be unbiased if, and only if, CX = 0. This
property further implies that

        cov(β̂ T , Cy) = IE[(X  X)−1 X  (y − Xβ o )y  C  ]

                         = (X  X)−1 X  IE[(y − Xβ o )y  ]C 

                         = (X  X)−1 X  (σo2 I T )C 

                         = 0.

Thus,

        var(β̌ T ) = var(β̂ T ) + var(Cy) = var(β̂ T ) + σo2 CC  ,

where σo2 CC  is clearly a positive semi-deﬁnite matrix. This shows that for any linear
unbiased estimator β̌ T , var(β̌ T ) − var(β̂ T ) is positive semi-deﬁnite, so that β̂ T is more
eﬃcient.       ✷


Example 3.6 Given the data [y X], where X is a nonstochastic matrix and can be
partitioned as [X 1 X 2 ]. Suppose that IE(y) = X 1 b1 for some b1 and var(y) = σo2 I T
for some σo2 > 0. Consider ﬁrst the speciﬁcation that contains only X 1 but not X 2 :

        y = X 1 β 1 + e.

Let b̂1,T denote the resulting OLS estimator. It is clear that b̂1,T is still a linear estimator
and unbiased for b1 by Theorem 3.4(a). Moreover, it is the BLUE for b1 by Theorem 3.5
with the variance-covariance matrix

        var(b̂1,T ) = σo2 (X 1 X 1 )−1 ,


c Chung-Ming Kuan, 2001
3.3. STATISTICAL PROPERTIES OF THE OLS ESTIMATORS                                              55


by Theorem 3.4(c).

    Consider now the linear speciﬁcation that involves both X 1 and irrelevant regressors
X 2:

       y = Xβ + e = X 1 β 1 + X 2 β 2 + e.

Thus, this speciﬁcation cannot be a correct speciﬁcation unless some of the parameters
                                                         
(β 2 ) are restricted to zero. Let β̂ T = (β̂ 1,T β̂ 2,T ) be the OLS estimator of β. Using
Theorem 3.3, we ﬁnd
                                                                   
       IE(β̂ 1,T ) = IE [X 1 (I T − P 2 )X 1 ]−1 X 1 (I T − P 2 )y = b1 ,
                                                                   
       IE(β̂ 2,T ) = IE [X 2 (I T − P 1 )X 2 ]−1 X 2 (I T − P 1 )y = 0,


where P 1 = X 1 (X 1 X 1 )−1 X 1 and P 2 = X 2 (X 2 X 2 )−1 X 2 . This shows that β̂ T is
unbiased for (b1 0 ) . Also,

       var(β̂ 1,T ) = var([X 1 (I T − P 2 )X 1 ]−1 X 1 (I T − P 2 )y)

                   = σo2 [X 1 (I T − P 2 )X 1 ]−1 .

Given that P 2 is a positive semi-deﬁnite matrix,

       X 1 X 1 − X 1 (I T − P 2 )X 1 = X 1 P 2 X 1 ,

must also be positive semi-deﬁnite. It follows from Lemma 1.9 that

       [X 1 (I T − P 2 )X 1 ]−1 − (X 1 X 1 )−1

is a positive semi-deﬁnite matrix. This shows that b̂1,T is more eﬃcient than β̂ 1,T , as it
ought to be. When X 1 X 2 = 0, i.e., the columns of X 1 are orthogonal to the columns
of X 2 , we immediately have (I T − P 2 )X 1 = X 1 , so that β̂ 1,T = b̂1,T . In this case,
estimating a more complex speciﬁcation does not result in eﬃciency loss.                 ✷


Remark: The Gauss-Markov theorem does not apply to the estimators for the spec-
iﬁcation y = X 1 β 1 + X 2 β 2 + e because, unlike [A2](i), the true parameter vector
β o = (b1 0 ) is not arbitrary but involves the restriction that some of its elements must
be zero. This example thus shows that when this restriction is not taken into account,
the resulting OLS estimator, while being unbiased, is no longer the most eﬃcient.

                                                                          
                                                                          c Chung-Ming Kuan, 2001
56                                    CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


3.3.3      With the Normality Condition

We have learned that the normality condition [A3] is much stronger than [A2]. With
this stronger condition, more can be said about the OLS estimators.

Theorem 3.7 Given the linear speciﬁcation (3.1), suppose that [A1] and [A3] hold.

 (a) β̂ T ∼ N (β o , σo2 (X  X)−1 ).

 (b) (T − k)σ̂T2 /σo2 ∼ χ2 (T − k).

 (c) σ̂T2 has mean σo2 and variance 2σo4 /(T − k).


Proof: As β̂ T is a linear transformation of y, it is also normally distributed as

        β̂ T ∼ N (β o , σo2 (X  X)−1 ),

by Lemma 2.6, where its mean and variance-covariance matrix are as in Theorem 3.4(a)
and (c). To prove the assertion (b), we again write ê = (I T − P )(y − Xβ o ) and deduce

        (T − k)σ̂T2 /σo2 = ê ê/σo2 = y ∗ (I T − P )y ∗ ,

where y ∗ = (y − Xβ o )/σo . Let C be the orthogonal matrix that diagonalizes the
symmetric and idempotent matrix I T − P . Then, C  (I T − P )C = Λ. Since rank(I T −
P ) = T − k, Λ contains T − k eigenvalues equal to one and k eigenvalues equal to zero
by Lemma 1.11. Without loss of generality we can write

                                                                    I T −k 0
        y ∗ (I T − P )y ∗ = y ∗ C[C  (I T − P )C]C  y ∗ = η                η,
                                                                        0   0

where η = C  y ∗ . Again by Lemma 2.6, y ∗ ∼ N (0, I T ) under [A3]. Hence, η ∼
N (0, I T ), so that ηi are independent, standard normal random variables. Consequently,

                               
                               T −k
        y ∗ (I T − P )y ∗ =          ηi2 ∼ χ2 (T − k).
                               i=1

This proves (b). Noting that the mean of χ2 (T − k) is T − k and variance is 2(T − k),
the assertion (c) is just a direct consequence of (b).              ✷

     Suppose that we believe that [A3] is true and specify the log-likelihood function of
y as:
                             T          T          1
        log L(β, σ 2 ) = −     log(2π) − log σ 2 − 2 (y − Xβ) (y − Xβ).
                             2          2         2σ


c Chung-Ming Kuan, 2001
3.3. STATISTICAL PROPERTIES OF THE OLS ESTIMATORS                                         57


The ﬁrst order conditions of maximizing this log-likelihood are
                           1 
       ∇β log L(β, σ 2 ) =    X (y − Xβ) = 0,
                           σ2
                              T     1
      ∇σ2 log L(β, σ 2 ) = − 2 + 4 (y − Xβ) (y − Xβ) = 0,
                            2σ     2σ

and their solutions are the MLEs β̃ T and σ̃T2 . The ﬁrst k equations above are equivalent
to the OLS normal equations (3.3). It follows that the OLS estimator β̂ T is also the
MLE β̃ T . Plugging β̂ T into the ﬁrst order conditions we can solve for σ 2 and obtain

               (y − X β̂ T ) (y − X β̂ T )   ê ê
      σ̃T2 =                                =        ,                                 (3.9)
                           T                   T
which is diﬀerent from the OLS variance estimator (3.8).

   The conclusion below is stronger than the Gauss-Markov theorem (Theorem 3.5).

Theorem 3.8 Given the linear speciﬁcation (3.1), suppose that [A1] and [A3] hold.
Then the OLS estimators β̂ T and σ̂T2 are the best unbiased estimators for β o and σo2 ,
respectively.

Proof: The score vector is
                                                            
                                    1
                                   σ2
                                      X  (y − Xβ)
      s(β, σ 2 ) =                                          ,
                        − 2σT 2 + 2σ1 4 (y − Xβ) (y − Xβ)

and the Hessian matrix of the log-likelihood function is
                                                        
             − σ12 X  X         − σ14 X  (y − Xβ)
                                                        .
           1                                   
        − σ4 (y − Xβ) X 2σ4 − σ6 (y − Xβ) (y − Xβ)
                            T     1


It is easily veriﬁed that when [A3] is true, IE[s(β o , σo2 )] = 0, and the expected value of
the Hessian matrix evaluated at β o and σo2 is
                           
        − σ12 X  X   0
           o               .
              0     − 2σT 4
                              o


The information matrix equality (Lemma 2.9) ensures that the negative of this matrix
equals the information matrix. The inverse of the information matrix is then
                          
        σo2 (X  X)−1 0
                          ,
                      2σo4
              0        T

                                                                  
                                                                  c Chung-Ming Kuan, 2001
58                             CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


which is the Cramér-Rao lower bound by Lemma 2.10. Clearly, var(β̂ T ) achieves this
lower bound so that β̂ T must be the best unbiased estimator for β o . Although the
variance of σ̂T2 is greater than the lower bound, it can be shown that σ̂T2 is still the best
unbiased estimator for σo2 ; see Rao (1973, ) for a proof.      ✷

Remark: Comparing to the Gauss-Markov theorem, Theorem 3.8 gives a stronger
result at the expense of a stronger condition (the normality condition [A3]). The OLS
estimators now are the best (most eﬃcient) in a much larger class of estimators, namely,
the class of unbiased estimators. Note also that Theorem 3.8 covers σ̂T2 , whereas the
Gauss-Markov theorem does not.


3.4      Hypotheses Testing
After a speciﬁcation is estimated, it is often desirable to test various economic and
econometric hypotheses. Given the classical conditions [A1] and [A3], we consider the
linear hypothesis

       Rβ o = r,                                                                      (3.10)

where R is a q × k non-stochastic matrix with rank q < k, and r is a vector of pre-
speciﬁed, hypothetical values.

3.4.1     Tests for Linear Hypotheses

If the null hypothesis (3.10) is true, it is reasonable to expect that Rβ̂ T is “close” to
the hypothetical value r; otherwise, they should be quite diﬀerent. Here, the closeness
between Rβ̂ T and r must be justiﬁed by the null distribution of the test statistics.
     If there is only a single hypothesis, the null hypothesis (3.10) is such that R is a row
vector (q = 1) and r is a scalar. Note that a single hypothesis may involve two or more
parameters. Consider the following statistic:
              Rβ̂ T − r
                               .
        σo [R(X  X)−1 R ]1/2
By Theorem 3.7(a), β̂ T ∼ N (β o , σo2 (X  X)−1 ), and hence

       Rβ̂ T ∼ N (Rβ o , σo2 R(X  X)−1 R ).

Under the null hypothesis, we have
              Rβ̂ T − r              R(β̂ T − β o )
                        1/2 =                        ∼ N (0, 1).                    (3.11)
                    −1
        σo [R(X X) R ]          σo [R(X  X)−1 R ]1/2


c Chung-Ming Kuan, 2001
3.4. HYPOTHESES TESTING                                                                   59


Although the left-hand side has a known distribution, it cannot be used as a test statistic
because σo is unknown. Replacing σo by its OLS estimator σ̂T yields an operational
statistic:

                    Rβ̂ T − r
      τ=                             .                                                (3.12)
             σ̂T [R(X  X)−1 R ]1/2

The null distribution of τ is given in the result below.

Theorem 3.9 Given the linear speciﬁcation (3.1), suppose that [A1] and [A3] hold.
Then under the null hypothesis (3.10) with R a 1 × k vector,

      τ ∼ t(T − k),

where τ is given by (3.12).

Proof: We ﬁrst write the statistic τ as
                               
              Rβ̂ T − r             (T − k)σ̂T2 /σo2
    τ=                                               ,
        σo [R(X  X)−1 R ]1/2          T −k

where the numerator is distributed as N (0, 1) by (3.11), and (T − k)σ̂T2 /σo2 is distributed
as χ2 (T − k) by Theorem 3.7(b). Hence, the square of the denominator is a central χ2
random variable divided by its degrees of freedom T − k. The assertion follows if we
can show that the numerator and denominator are independent. Note that the random
components of the numerator and denominator are, respectively, β̂ T and ê ê, where β̂ T
and ê are two normally distributed random vectors with the covariance matrix

       cov(ê, β̂ T ) = IE[(I T − P )(y − Xβ o )y  X(X  X)−1 ]

                    = (I T − P ) IE[(y − Xβ o )y  ]X(X  X)−1

                    = σo2 (I T − P )X(X  X)−1

                    = 0.

Since uncorrelated normal random vectors are also independent, β̂ T is independent of
ê. By Lemma 2.1, we conclude that β̂ T is also independent of ê ê.      ✷

    The statistic τ is known as the t statistic, and its null distribution is t(T − k) by
Theorem 3.9. When the alternative hypothesis is Rβ o = r, this is a two-sided test;
when the alternative hypothesis is Rβ o > r (or Rβ o < r), this is a one-sided test. For
each test, we ﬁrst choose a small signiﬁcance level α and then determine the critical

                                                                   
                                                                   c Chung-Ming Kuan, 2001
60                            CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


region Cα . For the two-sided t test, we can ﬁnd the values ±tα/2 (T − k) from the t table
such that

       α = IP{τ < −tα/2 (T − k) or τ > tα/2 (T − k)}

         = 1 − IP{−tα/2 (T − k) ≤ τ ≤ tα/2 (T − k)}.

The critical region is then

       Cα = (−∞, −tα/2 (T − k)) ∪ (tα/2 (T − k), ∞),

and ±tα/2 (T − k) are the critical values at the signiﬁcance level α. For the alternative
hypothesis Rβ o > r, the critical region is (tα (T − k), ∞), where tα (T − k) is the critical
value such that

       α = IP{τ > tα (T − k)}.

Similarly, for the alternative Rβ o < r, the critical region is (−∞, −tα (T − k)).

     The null hypothesis is rejected at the signiﬁcance level α when τ falls in the critical
region. As α is small, the event {τ ∈ Cα } is unlikely under the null hypothesis. When
τ does take an extreme value relative to the critical values, it is an evidence against the
null hypothesis. The decision of rejecting the null hypothesis could be wrong, but the
probability of the type I error will not exceed α. When τ takes a “reasonable” value
in the sense that it falls in the complement of the critical region, the null hypothesis is
not rejected.


Example 3.10 To test a single coeﬃcient equal to zero: βi = 0, we choose R as the
transpose of the ith Cartesian unit vector:

       R = [ 0 ···     0 1 0 ···       0 ].

Let mii be the i th diagonal element of M −1 = (X  X)−1 . Then, R(X  X)−1 R = mii .
The t statistic for this hypothesis, also known as the t ratio, is

               β̂i,T
       τ=       √    ∼ t(T − k).
            σ̂T mii

When a t ratio rejects the null hypothesis, it is said that the corresponding estimated
coeﬃcient is signiﬁcantly diﬀerent from zero; econometric packages usually report t
ratios along with the coeﬃcient estimates.       ✷


c Chung-Ming Kuan, 2001
3.4. HYPOTHESES TESTING                                                                   61


Example 3.11 To test the single hypothesis βi + βj = 0, we set R as

      R = [ 0 ···         0 1 0 ···       0 1 0 ···      0 ].

Hence, R(X  X)−1 R = mii + 2mij + mjj , where mij is the (i, j) th element of M −1 =
(X  X)−1 . The t statistic is

                        β̂i,T + β̂j,T
      τ=                                ∼ t(T − k).     ✷
             σ̂T   (m + 2mij + mjj )1/2
                     ii




   Several hypotheses can also be tested jointly. Consider the null hypothesis Rβ o = r,
where R is now a q × k matrix (q ≥ 2) and r is a vector. This hypothesis involves q
single hypotheses. Similar to (3.11), we have under the null hypothesis that

      [R(X  X)−1 R ]−1/2 (Rβ̂ T − r)/σo ∼ N (0, I q ).

Therefore,

      (Rβ̂ T − r) [R(X  X)−1 R ]−1 (Rβ̂ T − r)/σo2 ∼ χ2 (q).                        (3.13)

Again, we can replace σo2 by its OLS estimator σ̂T2 to obtain an operational statistic:

             (Rβ̂ T − r) [R(X  X)−1 R ]−1 (Rβ̂ T − r)
      ϕ=                                                 .                             (3.14)
                                 σ̂T2 q

The next result gives the null distribution of ϕ.

Theorem 3.12 Given the linear speciﬁcation (3.1), suppose that [A1] and [A3] hold.
Then under the null hypothesis (3.10) with R a q × k matrix with rank q < k, we have

      ϕ ∼ F (q, T − k),

where ϕ is given by (3.14).

Proof: Note that
             (Rβ̂ T − r) [R(X  X)−1 R ]−1 (Rβ̂ T − r)/(σo2 q)
      ϕ=                                !                        .
                                    σ̂2
                            (T − k) σT2 (T − k)
                                      o


In view of (3.13) and the proof of Theorem 3.9, the numerator and denominator terms
are two independent χ2 random variables, each divided by its degrees of freedom. The
assertion follows from the deﬁnition of F random variable.             ✷

                                                                     
                                                                     c Chung-Ming Kuan, 2001
62                            CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


     The statistic ϕ is known as the F statistic. We reject the null hypothesis at the
signiﬁcance level α when ϕ is too large relative to the critical value Fα (q, T − k) of the
F table, where Fα (q, T − k) is such that

       α = IP{ϕ > Fα (q, T − k)}.

If there is only a single hypothesis, the F statistic is just the square of the corresponding
t statistic. When ϕ rejects the null hypothesis, it simply suggests that there is evidence
against at least one single hypothesis. The inference of a joint test is, however, not
necessary the same as the inference of individual tests; see also Section 3.5.

Example 3.13 Joint null hypothesis: Ho : β1 = b1 and β2 = b2 . The F statistic is
                                       −1              
         1     β̂1,T − b1    m11 m12            β̂1,T − b1
    ϕ= 2                                                     ∼ F (2, T − k),
        2σ̂T   β̂2,T − b2    m21 m22            β̂2,T − b2

where mij is as deﬁned in Example 3.11.           ✷

Remark: For the null hypothesis of s coeﬃcients being zero, if the corresponding F
statistic ϕ > 1 (ϕ < 1), dropping these s regressors will reduce (increase) R̄2 ; see
Exercise 3.12.

3.4.2     Power of the Tests

Recall that the power of a test is the probability of rejecting the null hypothesis when the
null hypothesis is indeed false. In this section, we consider the hypothesis Rβ o = r + δ,
where δ characterizes the deviation from the null hypothesis, and analyze the power
performance of the t and F tests.

Theorem 3.14 Given the linear speciﬁcation (3.1), suppose that [A1] and [A3] hold.
Then under the hypothesis that Rβ o = r + δ, where R is a q × k matrix with rank q < k,
we have

       ϕ ∼ F (q, T − k; δ  D−1 δ, 0),

where ϕ is given by (3.14), D = σo2 [R(X  X)−1 R ], and δ  D−1 δ is the non-centrality
parameter of the numerator term.

Proof: When Rβ o = r + δ,

        [R(X  X)−1 R ]−1/2 (Rβ̂ T − r)/σo

           = [R(X  X)−1 R ]−1/2 [R(β̂ T − β o ) + δ]/σo .


c Chung-Ming Kuan, 2001
3.4. HYPOTHESES TESTING                                                                     63


Given [A3],

      [R(X  X)−1 R ]−1/2 R(β̂ T − β o )/σo . ∼ N (0, I q ),

and hence

      [R(X  X)−1 R ]−1/2 (Rβ̂ T − r)/σo ∼ N (D−1/2 δ, I q ).

It follows from Lemma 2.7 that

      (Rβ̂ T − r) [R(X  X)−1 R ]−1 (Rβ̂ T − r)/σo2 ∼ χ2 (q; δ  D−1 δ),

which is the non-central χ2 distribution with q degrees of freedom and the non-centrality
parameter δ  D−1 δ. This is in contrast with (3.13) which has a central χ2 distribution
under the null hypothesis. As (T − k)σ̂T2 /σo2 is still distributed as χ2 (T − k) by The-
orem 3.7(b), the assertion follows because the numerator and denominator of ϕ are
independent.      ✷

   Clearly, when the null hypothesis is correct, we have δ = 0, so that ϕ ∼ F (q, T − k).
Theorem 3.14 thus includes Theorem 3.12 as a special case. In particular, for testing a
single hypothesis, we have

      τ ∼ t(T − k; D −1/2 δ),

which reduces to t(T − k) when δ = 0, as in Theorem 3.9.

   Theorem 3.14 implies that when Rβ o deviates farther from the hypothetical value
r, the non-centrality parameter δ  D−1 δ increases, and so does the power. We illustrate
this point using the following two examples, where the power are computed using the
GAUSS program. For the null distribution F (2, 20), the critical value at 5% level is 3.49.
Then for F (2, 20; ν1 , 0) with the non-centrality parameter ν1 = 1, 3, 5, the probabilities
that ϕ exceeds 3.49 are approximately 12.1%, 28.2%, and 44.3%, respectively. For the
null distribution F (5, 60), the critical value at 5% level is 2.37. Then for F (5, 60; ν1 , 0)
with ν1 = 1, 3, 5, the probabilities that ϕ exceeds 2.37 are approximately 9.4%, 20.5%,
and 33.2%, respectively. In both cases, the power increases with the non-centrality
parameter.

3.4.3     An Alternative Approach

Given the speciﬁcation (3.1), we may take the constraint Rβ o = r into account and
consider the constrained OLS estimation that ﬁnds the saddle point of the Lagrangian:
            1
      min     (y − Xβ) (y − Xβ) + (Rβ − r) λ,
        β,λ T


                                                                 
                                                                 c Chung-Ming Kuan, 2001
64                                 CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


where λ is the q × 1 vector of Lagrangian multipliers. It is straightforward to show that
the solutions are
       λ̈T = 2[R(X  X/T )−1 R ]−1 (Rβ̂ T − r),
                                                                                       (3.15)
                                   −1     
       β̈ T = β̂ T − (X X/T )            R λ̈T /2,

which will be referred to as the constrained OLS estimators.

     Given β̈ T , the vector of constrained OLS residuals is

       ë = y − X β̈ T = y − X β̂ T + X(β̂ T − β̈ T ) = ê + X(β̂ T − β̈ T ).

It follows from (3.15) that

       β̂ T − β̈ T = (X  X/T )−1 R λ̈T /2

                   = (X  X)−1 R [R(X  X)−1 R ]−1 (Rβ̂ T − r).

The inner product of ë is then

       ë ë = ê ê + (β̂ T − β̈ T ) X  X(β̂ T − β̈ T )

            = ê ê + (Rβ̂ T − r) [R(X  X)−1 R ]−1 (Rβ̂ T − r).

Note that the second term on the right-hand side is nothing but the numerator of the
F statistic (3.14). The F statistic now can be written as
            ë ë − ê ê   (ESSc − ESSu )/q
       ϕ=                   =                  ,                                       (3.16)
                    2
                 qσ̂T          ESSu /(T − k)

where ESSc = ë ë and ESSu = ê ê denote, respectively, the ESS resulted from con-
strained and unconstrained estimations. Dividing the numerator and denominator of
(3.16) by centered TSS (y  y − T ȳ 2 ) yields another equivalent expression for ϕ:
               (Ru2 − Rc2 )/q
       ϕ=                      ,                                                       (3.17)
            (1 − Ru2 )/(T − k)
where Rc2 and Ru2 are, respectively, the centered coeﬃcient of determination of con-
strained and unconstrained estimations. As the numerator of (3.17), Ru2 − Rc2 , can be
interpreted as the loss of ﬁt due to the imposed constraint, the F test is in eﬀect a
loss-of-ﬁt test. The null hypothesis is rejected when the constrained speciﬁcation ﬁts
data much worse.

Example 3.15 Consider the speciﬁcation: yt = β1 + β2 xt2 + β3 xt3 + et . Given the
hypothesis (constraint) β2 = β3 , the resulting constrained speciﬁcation is

       yt = β1 + β2 (xt2 + xt3 ) + et .


c Chung-Ming Kuan, 2001
3.5. CONFIDENCE REGIONS                                                                  65


By estimating these two speciﬁcations separately, we obtain ESSu and ESSc , from which
the F statistic can be easily computed.         ✷

Example 3.16 Test the null hypothesis that all the coeﬃcients (except the constant
term) equal zero. The resulting constrained speciﬁcation is yt = β1 + et , so that Rc2 = 0.
Then, (3.17) becomes
               Ru2 /(k − 1)
      ϕ=                       ∼ F (k − 1, T − k),
            (1 − Ru2 )/(T − k)
which requires only estimation of the unconstrained speciﬁcation. This test statistic is
also routinely reported by most of econometric packages and known as the “regression
F test.”     ✷


3.5     Conﬁdence Regions
In addition to point estimators for parameters, we may also be interested in ﬁnding
conﬁdence intervals for parameters. A conﬁdence interval for βi,o with the conﬁdence
coeﬃcient (1 − α) is the interval (g α , g α ) that satisﬁes

      IP{ g α ≤ βi,o ≤ g α } = 1 − α.

That is, we are (1 − α) × 100 percent sure that such an interval would include the true
parameter βi,o .

   From Theorem 3.9, we know
       "                                           #
                        β̂i,T − βi,o
     IP −tα/2 (T − k) ≤      √       ≤ tα/2 (T − k) = 1 − α,
                          σ̂T mii

where mii is the i th diagonal element of (X  X)−1 , and tα/2 (T − k) is the critical value
of the (two-sided) t test at the signiﬁcance level α. Equivalently, we have
         $                      √                                    √ %
      IP β̂i,T − tα/2 (T − k)σ̂T mii ≤ βi,o ≤ β̂i,T + tα/2 (T − k)σ̂T mii = 1 − α.

This shows that the conﬁdence interval for βi,o can be constructed by setting
                                   √
      g α = β̂i,T − tα/2 (T − k)σ̂T mii ,
                                   √
      g α = β̂i,T + tα/2 (T − k)σ̂T mii .

It should be clear that the greater the conﬁdence coeﬃcient (i.e., α smaller), the larger
is the magnitude of the critical values ±tα/2 (T − k) and hence the resulting conﬁdence
interval.

                                                               
                                                               c Chung-Ming Kuan, 2001
66                              CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


     The conﬁdence region for Rβ o with the conﬁdence coeﬃcient (1 − α) satisﬁes

        IP{(β̂ T − β o ) R [R(X  X)−1 R ]−1 R(β̂ T − β o )/(qσ̂T2 ) ≤ Fα (q, T − k)}

             = 1 − α,

where Fα (q, T − k) is the critical value of the F test at the signiﬁcance level α.

Example 3.17 The conﬁdence region for (β1,o = b1 , β2,o = b2 ). Suppose T − k = 30
and α = 0.05, then F0.05 (2, 30) = 3.32. In view of Example 3.13,
                                                                   
         1                                    −1             
                                                                       
                  β̂1,T − b1      m11 m12           β̂1,T − b1
     IP                                                          ≤ 3.32  = 0.95,
         2σ̂T2   β̂2,T − b2      m21 m22           β̂2,T − b2         


which results in an ellipse with the center (β̂1,T , β̂2,T ).      ✷

Remark: A point (β1,o , β2,o ) may be outside the joint conﬁdence ellipse but inside
the conﬁdence box formed by individual conﬁdence intervals. Hence, each t ratio may
show that the corresponding coeﬃcient is insigniﬁcantly diﬀerent from zero, while the F
test indicates that both coeﬃcients are not jointly insigniﬁcant. It is also possible that
(β1 , β2 ) is outside the conﬁdence box but inside the joint conﬁdence ellipse. That is,
each t ratio may show that the corresponding coeﬃcient is signiﬁcantly diﬀerent from
zero, while the F test indicates that both coeﬃcients are jointly insigniﬁcant. See also
an illustrative example in Goldberger (1991, Chap. 19).


3.6      Multicollinearity
In Section 3.2.2 we have seen that a linear speciﬁcation suﬀers from the problem of
exact multicollinearity if the basic identiﬁability requirement (i.e., X is of full column
rank) is not satisﬁed. In this case, the OLS estimator cannot be computed as (3.4).
This problem may be avoided by modifying the postulated speciﬁcations.


3.6.1     Near Multicollinearity

In practice, it is more common that explanatory variables are related to some extent but
do not satisfy an exact linear relationship. This is usually referred to as the problem of
near multicollinearity. But as long as there is no exact multicollinearity, parameters can
still be estimated by the OLS method, and the resulting estimator remains the BLUE
under [A1] and [A2].


c Chung-Ming Kuan, 2001
3.6. MULTICOLLINEARITY                                                                         67


    Nevertheless, there are still complaints about near multicollinearity in empirical
studies. In some applications, parameter estimates are very sensitive to small changes
in data. It is also possible that individual t ratios are all insigniﬁcant, but the regres-
sion F statistic is highly signiﬁcant. These symptoms are usually attributed to near
multicollinearity. This is not entirely correct, however. Write X = [xi X i ], where X i
is the submatrix of X excluding the i th column xi . By the result of Theorem 3.3, the
variance of β̂i,T can be expressed as

      var(β̂i,T ) = var([xi (I − P i )xi ]−1 xi (I − P i )y) = σo2 [xi (I − P i )xi ]−1 ,

where P i = X i (X i X i )−1 X i . It can also be veriﬁed that
                                    σo2
      var(β̂i,T ) =     T
                                                       ,
                        t=1 (xti − x̄i ) (1 − R (i))
                                        2      2


where R2 (i) is the centered coeﬃcient of determination from the auxiliary regression of
xi on X i . When xi is closely related to other explanatory variables, R2 (i) is high so
that var(β̂i,T ) would be large. This explains why β̂i,T are sensitive to data changes and
why corresponding t ratios are likely to be insigniﬁcant. Near multicollinearity is not a
necessary condition for these problems, however. Large var(β̂i,T ) may also arise due to
small variations of xti and/or large σo2 .

    Even when a large value of var(β̂i,T ) is indeed resulted from high R2 (i), there is
nothing wrong statistically. It is often claimed that “severe multicollinearity can make
an important variable look insigniﬁcant.” As Goldberger (1991) correctly pointed out,
this statement simply confuses statistical signiﬁcance with economic importance. These
large variances merely reﬂect the fact that parameters cannot be precisely estimated
from the given data set.

    Near multicollinearity is in fact a problem related to data and model speciﬁcation.
If it does cause problems in estimation and hypothesis testing, one may try to break the
approximate linear relationship by, e.g., adding more observations to the data set (if
plausible) or dropping some variables from the current speciﬁcation. More sophisticated
statistical methods, such as the ridge estimator and principal component regressions,
may also be used; details of these methods can be found in other econometrics textbooks.

3.6.2    Digress: Dummy Variables

A linear speciﬁcation may include some qualitative variables to indicate the presence or
absence of certain attributes of the dependent variable. These qualitative variables are
typically represented by dummy variables which classify data into diﬀerent categories.

                                                                         
                                                                         c Chung-Ming Kuan, 2001
68                             CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


     For example, let yi denote the annual salary of college teacher i and xi the years of
teaching experience. Consider the dummy variable: Di = 1 if i is a male and Di = 0 if
i is a female. Then, the speciﬁcation

       yi = α0 + α1 Di + βxi + ei

yields two regression lines with diﬀerent intercepts. The “male” regression line has the
intercept α0 + α1 , and the “female” regression line has the intercept α0 . We may test
the hypothesis α1 = 0 to see if there is a diﬀerence between the starting salaries of male
and female teachers.

     This speciﬁcation can be expanded to incorporate an interaction term between D
and x:

       yi = α0 + α1 Di + β0 xi + β1 (Di xi ) + ei ,

which yields two regression lines with diﬀerent intercepts and slopes. The slope of the
“male” regression line is mow β0 + β1 , whereas the slope of the “female” regression line
is β0 . By testing β1 = 0, we can check whether teaching experience is treated the same
in determining salaries for male and female teachers.

     Suppose that we want to know if the education level of the head of household aﬀects
family consumption pattern. We may classify data into three groups: below high school,
high school only, college or higher. Let D1i = 1 if i has a high school degree only and
D1i = 0 otherwise, and D2i = 1 if i has a college or higher degree and D2i = 0 otherwise.
Then, similar to the previous example, the following speciﬁcation,

       yi = α0 + α1 D1i + α2 D2i + βxi + ei ,

yields three regression lines. The below-high-school regression line has the intercept α0 ,
the high-school regression line has the intercept α0 + α1 , and the college regression line
has the intercept α0 + α2 . Various interesting hypotheses can be tested based on this
speciﬁcation.

Remark: The preceding examples show that, when a speciﬁcation contains a con-
stant term, the number of dummy variables is always one less than the number of
categories that dummy variables try to classify. Otherwise, the speciﬁcation has exact
multicollinearity; this is the so-called “dummy variable trap.”


c Chung-Ming Kuan, 2001
3.7. LIMITATIONS OF THE CLASSICAL CONDITIONS                                                69


3.7        Limitations of the Classical Conditions
The previous estimation and testing results are based on the classical conditions. As
these conditions may be violated in practice, it is important to understand their limi-
tations.

   Condition [A1] postulates that explanatory variables are non-stochastic. Although
this condition is quite convenient and facilitates our analysis, it is not practical. When
the dependent variable and regressors are economic variables, it does not make too
much sense to treat only the dependent variable as a random variable. This condition
may also be violated when a lagged dependent variable is included as a regressor, as in
many time-series analysis. Hence, it would be more reasonable to allow regressors to be
random as well.

   In [A2](i), the linear speciﬁcation Xβ is assumed to be correct up to some unknown
parameters. It is possible that the systematic component IE(y) is in fact a non-linear
function of X. If so, the estimated regression hyperplane could be very misleading. For
example, an economic relation may change from one regime to another at some time
point so that IE(y) is better characterized by a piecewise liner function. This is known
as the problem of structural change; see e.g., Exercise 3.14. Even when IE(y) is a linear
function, the speciﬁed X may include some irrelevant variables or omit some important
variables. Example 3.6 shows that in the former case, the OLS estimator β̂ T remains
unbiased but is less eﬃcient. In the latter case, it can be shown that β̂ T is biased but
with a smaller variance-covariance matrix; see Exercise 3.6.

   Condition [A2](ii) may also easily break down in many applications. For example,
when yt is the consumption of the t th household, it is likely that yt has smaller variation
for low-income families than for high-income families. When yt denotes the GDP growth
rate of the t th year, it is also likely that yt are correlated over time. In both cases, the
variance-covariance matrix of y cannot be expressed as σo2 I T . A consequence of the
failure of [A2](ii) is that the OLS estimator for var(β̂ T ), σ̂T2 (X  X)−1 , is biased, which
in turn renders the tests discussed in Section 3.4 invalid.

   Condition [A3] may fail when yt have non-normal distributions. Although the BLUE
property of the OLS estimator does not depend on normality, [A3] is crucial for deriving
the distribution results in Section 3.4. When [A3] is not satisﬁed, the usual t and F
tests do not have the desired t and F distributions, and their exact distributions are
typically unknown. This causes serious problems for hypothesis testing.

   Our discussion thus far suggests that the classical conditions are quite restrictive.

                                                                
                                                                c Chung-Ming Kuan, 2001
70                             CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


In subsequent chapters, we will try to relax these conditions and discuss more generally
applicable methods. These methods play an important role in contemporary empirical
studies.


Exercises
 3.1 Construct a linear regression model for each equation below:

                                                             x                eα+βx
           y = α xβ ,        y = α eβx ,          y=              ,    y=             .
                                                           αx − β           1 + eα+βx

 3.2 Use the general formula (3.4) to ﬁnd the OLS estimators from the speciﬁcations
      below:

            yt = α + βxt + e, t = 1, . . . , T,

            yt = α + β(xt − x̄) + e, t = 1, . . . , T,

            yt = βxt + e, t = 1, . . . , T.

      Compare the resulting regression lines.

 3.3 Given the speciﬁcation yt = α + βxt + e, t = 1, . . . , T , assume that the classical
      conditions hold. Let α̂T and β̂T be the OLS estimators for α and β, respectively.

       (a) Apply the general formula of Theorem 3.4(c) to show that
                                                  T    2
                                                  t=1 xt
                        var(α̂T ) = σo2         T
                                                                   ,
                                                t=1 (xt − x̄)
                                          T                  2

                                                  1
                        var(β̂T ) = σo2       T
                                                               ,
                                              t=1 (xt − x̄)
                                                           2

                                                      x̄
                 cov(α̂T , β̂T ) = −σo2         T
                                                                   .
                                                t=1 (xt − x̄)
                                                             2


           What kind of data can make the variances of the OLS estimators smaller?
      (b) Suppose that a prediction ŷT +1 = α̂T + β̂T xT +1 is made based on the new
           observation xT +1 . Show that

                   IE(ŷT +1 − yT +1 ) = 0,
                                                                              
                                                      1  (x     − x̄)2
                 var(ŷT +1 − yT +1 ) = σo2        1 + + TT +1                     .
                                                          t=1 (xt − x̄)
                                                      T                2


           What kind of xT +1 can make the variance of prediction error smaller?


c Chung-Ming Kuan, 2001
3.7. LIMITATIONS OF THE CLASSICAL CONDITIONS                                                      71


 3.4 Given the speciﬁcation (3.1), suppose that X is not of full column rank. Does
     there exist a unique ŷ ∈ span(X) that minimizes (y − ŷ) (y − ŷ)? If yes, is there
     a unique β̂ T such that ŷ = X β̂ T ? Why or why not?

 3.5 Given the estimated model

           yt = β̂1,T + β̂2,T xt2 + · · · + β̂k,T xtk + êt ,

     consider the standardized regression:

           yt∗ = β̂2,T
                   ∗
                       x∗t2 + · · · + β̂k,T
                                        ∗
                                            x∗tk + ê∗t ,

             ∗ are known as the beta coeﬃcients, and
     where β̂i,T

                   yt − ȳ                  xti − x̄i                êt
           yt∗ =           ,       x∗ti =             ,     :̂∗t =       ,
                     sy                        sxi                   sy

     with s2y = (T − 1)−1       T
                                t=1 (yt − ȳ) is the sample variance of yt and for each
                                             2

     i, s2xi = (T − 1)−1 Tt=1 (xti − x̄i )2 is the sample variance of xti . What is the
                            ∗ and β̂ ? Give an interpretation of the beta coeﬃcients.
     relationship between β̂i,T         i,T

 3.6 Given the following speciﬁcation

           y = X 1 β 1 + e,

     where X 1 (T × k1 ) is a non-stochastic matrix, let b̂1,T denote the resulting OLS
     estimator. Suppose that IE(y) = X 1 b1 + X 2 b2 for some b1 and b2 , where X 2
     (T × k2 ) is also a non-stochastic matrix and b2 = 0.

      (a) Is b̂1,T unbiased?
     (b) Is σ̂T2 unbiased?
      (c) What is var(b̂1,T )?
                                  
     (d) Let β̂ T = (β̂ 1,T β̂ 2,T ) denote the OLS estimator obtained from estimating
          the speciﬁcation: y = X 1 β 1 + X 2 β 2 + e. Compare var(β̂ 1,T ) and var(b̂T ).
      (e) Does your result in (d) change when X 1 X 2 = 0?

 3.7 Given the speciﬁcation (3.1), will the changes below aﬀect the resulting OLS
     estimator β̂ T , t ratios, and R2 ?

      (a) y ∗ = 1000 × y and X are used as the dependent and explanatory variables.
     (b) y and X ∗ = 1000 × X are used as the dependent and explanatory variables.

                                                                             
                                                                             c Chung-Ming Kuan, 2001
72                                   CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


      (c) y ∗ and X ∗ are used as the dependent and explanatory variables.

 3.8 Let Rk2 denote the centered R2 obtained from the model with k explanatory vari-
     ables.

      (a) Show that
                              
                              k              T
                                             t=1 (xti − x̄i )yt
                     Rk2 =          β̂iT       T
                                                                ,
                                               t=1 (yt − ȳ)
                                                             2
                              i=1
                                                                          T                       T
          where β̂iT is the ith element of β̂ T , x̄i =                   t=1 xti /T , and ȳ =   t=1 yt /T .

     (b) Show that Rk2 ≥ Rk−1
                          2 .


 3.9 Consider the following two regression lines: ŷ = α̂ + β̂x and x̂ = γ̂ + δ̂y. At
     which point do these two lines intersect? Using the result in Exercise 3.8 to show
     that these two regression lines coincide if and only if the centered R2 s for both
     regressions are one.

3.10 Given the speciﬁcation (3.1), suppose that X does not contain the constant term.
     Show that the centered R2 need not be bounded between zero and one if it is
     computed as (3.7).

3.11 Rearrange the matrix X as [xi X i ], where xi is the ith column of X. Let ui and
     v i denote the residual vectors of regressing y on X i and xi on X i , respectively.
     Deﬁne the partial correlation coeﬃcient of y and xi as
                              ui v i
              ri =                               .
                     (ui ui )1/2 (v i v i )1/2
     Let Ri2 and R2 be obtained from the regressions of y on X i and y on X, respec-
     tively.

      (a) Apply the Frisch-Waugh-Lovell Theorem to show
                                                     (I − P i )xi xi (I − P i )
                     I − P = (I − P i ) −                                        ,
                                                         xi (I − P i )xi
          where P = X(X  X)−1 X  and P i = X i (X i X i )−1 X i . Note that this result
          can also be derived using the matrix inversion formula (e.g. Greene (1993,
          p. 27)).
     (b) Show that (1 − R2 )/(1 − Ri2 ) = 1 − ri2 , and use this result to verify

                     R2 − Ri2 = ri2 (1 − Ri2 ).

          What does this result tell you?


c Chung-Ming Kuan, 2001
3.7. LIMITATIONS OF THE CLASSICAL CONDITIONS                                               73


      (c) Let τi denote the t ratio of β̂iT , the ith element of β̂ T obtained from regressing
          y on X. First show that τi2 = (T − k)ri2 /(1 − ri2 ), and use this result to verify

                 ri2 = τi2 /(τi2 + T − k).

      (d) Combine the results in (b) and (c) to show

                 R2 − Ri2 = τi2 (1 − R2 )/(T − k).

          What does this result tell you?

3.12 Suppose that a linear model with k explanatory variables has been estimated.

      (a) Show that σ̂T2 = Centered TSS(1 − R̄2 )/(T − 1). What does this result tell
          you?

      (b) Suppose that we want to test the hypothesis that s coeﬃcients are zero. Show
          that the F statistic can be written as

                         (T − k + s)σ̂c2 − (T − k)σ̂u2
                 ϕ=                                    ,
                                    sσ̂u2

          where σ̂c2 and σ̂u2 are the variance estimates of the constrained and uncon-
          strained models, respectively. Let a = (T − k)/s. Show that

                 σ̂c2   a+ϕ
                    2
                      =     .
                 σ̂u    a+1

      (c) Based on the results in (a) and (b), what can you say when ϕ > 1 and ϕ < 1?

3.13 For the linear speciﬁcation y = Xβ + e, an alternative expression of k − m linear
     restrictions on β can be expressed as β = Sθ + d, where θ is a m-dimensional
     vector of unknown parameters, S is a k × m matrix of pre-speciﬁed constants with
     full column rank, and c is a vector of pre-speciﬁed constants.

      (a) By incorporating this restriction into the speciﬁcation, ﬁnd the OLS estima-
          tor θ̂ of θ.

      (b) The constrained least squares estimator of β is β̂ c = S θ̂ + d. Show that

                 β̂ c = QS β̂ + (I − QS )d,

          where QS = S(S  X  XS)−1 S  X  X. Is this decomposition orthogonal?

                                                               
                                                               c Chung-Ming Kuan, 2001
74                          CHAPTER 3. CLASSICAL LEAST SQUARES THEORY


      (c) Show that

                  X β̂ c = P XS y + (I − P XS )Xd,

          where P XS = XS(S  X  XS)−1 S  X  . Use a graph to illustrate this result.

3.14 (The Chow Test) Consider the model of a one-time structural change at a known
     change point:

             y1          X1    0       βo        e1
                     =                      +         ,
             y2          X2 X2         δo        e2

     where y 1 and y 2 are T1 × 1 and T2 × 1, X 1 and X 2 are T1 × k and T2 × k,
     respectively. The null hypothesis is δ o = 0. How would you test this hypothesis
     based on the constrained and unconstrained models?


References

Davidson, Russell and James G. MacKinnon (1993). Estimation and Inference in Econo-
     metrics, New York, NY: Oxford University Press.

Goldberger, Arthur S. (1991). A Course in Econometrics, Cambridge, MA: Harvard
     University Press.

Greene, William H. (2000). Econometric Analysis, 4th ed., Upper Saddle River, NJ:
     Prentice Hall.

Harvey, Andrew C. (1990). The Econometric Analysis of Time Series, Second edition.,
     Cambridge, MA: MIT Press.

Intriligator, Michael D., Ronald G. Bodkin, and Cheng Hsiao (1996). Econometric
     Models, Techniques, and Applications, Second edition, Upper Saddle River, NJ:
     Prentice Hall.

Johnston, J. (1984). Econometric Methods, Third edition, New York, NY: McGraw-Hill.

Judge, Georgge G., R. Carter Hill, William E. Griﬃths, Helmut Lütkepohl, and Tsoung-
     Chao Lee (1988). Introduction to the Theory and Practice of Econometrics, Sec-
     ond edition, New York, NY: Wiley.

Maddala, G. S. (1992). Introduction to Econometrics, Second edition, New York, NY:
     Macmillan.


c Chung-Ming Kuan, 2001
3.7. LIMITATIONS OF THE CLASSICAL CONDITIONS                                        75


Manski, Charles F. (1991). Regression, Journal of Economic Literature, 29, 34–50.

Rao, C. Radhakrishna (1973). Linear Statistical Inference and Its Applications, Second
     edition, New York, NY: Wiley.

Ruud, Paul A. (2000). An Introduction to Classical Econometric Theory, New York,
     NY: Oxford University Press.

Theil, Henri (1971). Principles of Econometrics, New York, NY: Wiley.




                                                          
                                                          c Chung-Ming Kuan, 2001
76                    CHAPTER 3. CLASSICAL LEAST SQUARES THEORY





c Chung-Ming Kuan, 2001
Chapter 4


Generalized Least Squares
Theory

4.1    Introduction

In Chapter 3.7 we have seen that the classical conditions need not hold in practice.
Although these conditions have no eﬀect on the OLS method per se, they do aﬀect
the properties of the OLS estimators and resulting test statistics. In particular, when
the elements of y have unequal variances and/or are correlated, there is no guarantee
that the OLS estimator is the most eﬃcient within the class of linear unbiased (or the
class of unbiased) estimators. Moreover, hypothesis testing based on the standard OLS
estimator of the variance-covariance matrix becomes invalid.



   In this chapter, the method of generalized least squares (GLS) is introduced to im-
prove upon estimation eﬃciency. A drawback of the GLS method is that it is diﬃcult
to implement. In practice, certain structures (assumptions) must be imposed on var(y)
so that a feasible GLS estimator can be computed. This approach results in two further
diﬃculties, however. First, the postulated structures on var(y) need not be correctly
speciﬁed. Consequently, the resulting feasible GLS estimator may not be as eﬃcient
as one would like. Second, the ﬁnite-sample properties of feasible GLS estimators are
not easy to establish. Exact tests based on the feasible GLS results are thus not read-
ily available. More detailed discussions of the GLS theory can also be found in e.g.,
Amemiya (1985) and Greene (2000).

                                          77
78                        CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


4.2      The Method of Generalized Least Squares

4.2.1     When y Does Not Have a Scalar Covariance Matrix

Given the linear speciﬁcation (3.1):

       y = Xβ + e,

suppose that, in addition to the conditions [A1] and [A2](i),

       var(y) = Σo ,

where Σo is a positive deﬁnite matrix but cannot be written as σo2 I T for any positive
number σo2 . That is, the elements of y may not have a constant variance, nor are
they required to be uncorrelated. As [A1] and [A2](i) still hold, the OLS estimator β̂ T
remains unbiased by Theorem 3.4(a), and

       var(β̂ T ) = (X  X)−1 X  Σo X(X  X)−1 ,                                  (4.1)

in contrast with Theorem 3.4(c). In view of Theorem 3.5, there is no guarantee that
the OLS estimator is the BLUE for β o . Similarly, when [A3] fails such that

       y ∼ N (Xβ o , Σo ),

we have

       β̂ T ∼ N (β o , (X  X)−1 X  Σo X(X  X)−1 );

cf. Theorem 3.7(a). In this case, β̂ T need not be the BUE for β o .

     Apart from eﬃciency, a more serious consequence of the failure of [A3] is that the
statistical tests based on the standard OLS estimation results become invalid. Recall
that the OLS estimator for var(β̂ T ) is

        β̂ T ) = σ̂T2 (X  X)−1 ,
       var(

which is, in general, a biased estimator for (4.1). As the t and F statistics depend on
                 β̂ T ), they no longer have the desired t and F distributions under
the elements of var(
the null hypothesis. Consequently, the inferences based on these tests become invalid.


c Chung-Ming Kuan, 2001
4.2. THE METHOD OF GENERALIZED LEAST SQUARES                                                     79


4.2.2       The GLS Estimator

The GLS method focuses on the eﬃciency issue resulted from the failure of the classical
condition [A2](ii). Let G be a T ×T non-stochastic matrix. Consider the “transformed”
speciﬁcation

       Gy = GXβ + Ge,

where Gy denotes the transformed dependent variable and GX is the matrix of trans-
formed explanatory variables. It can be seen that GX also has full column rank k
provided that G is nonsingular. Thus, the identiﬁcation requirement for the speciﬁca-
tion (3.1) carries over under nonsingular transformations. It follows that β can still be
estimated by the following OLS estimator:

       (X  G GX)−1 X  G Gy.                                                             (4.2)

     Given that the original variables y and X satisfy [A1] and [A2](i), it is easily seen
that the transformed variables Gy and GX also satisfy these two conditions because
GX is non-stochastic and IE(Gy) = GXβ o . When var(y) = Σo ,

       var(Gy) = GΣo G .

If G is such that GΣo G = σo2 I T for some positive number σo2 , the condition [A2](ii)
would also hold. Since the classical conditions are all satisﬁed, the OLS estimator

       (X  G GX)−1 X  G Gy

is still the BLUE for β o by Theorem 3.5. This suggests that, as far as eﬃciency is
concerned, one should estimate β from the transformed speciﬁcation such that the
transformation matrix G is nonsingular and GΣo G = σo2 I T .

     To ﬁnd a desirable transformation matrix G, note that Σo is symmetric and positive
deﬁnite and that Σo can be orthogonally diagonalized as C  Σo C = Λ, where C is the
                                                                                          −1/2
matrix of eigenvectors corresponding to the matrix of eigenvalues Λ. For Σo                      =
     −1/2               −1/2
CΛ          C       (or Σo    = Λ−1/2 C  ), we have

       Σ−1/2
        o    Σo Σ−1/2
                 o     = IT .

This result immediately suggests that the desired matrix G should be proportional to
 −1/2                       −1/2
Σo      , i.e., G = c Σo           for some constant c. Given this choice of G, we have

       var(Gy) = GΣo G = c2 I T ,

                                                                    
                                                                    c Chung-Ming Kuan, 2001
80                               CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


a scalar covariance matrix, so that [A2](ii) also holds. It follows that the estimator (4.2)
                  −1/2
with G = c Σo             is the BLUE for β o . This estimator is known as the GLS estimator
and reads

       β̂ GLS = (c2 X  Σ−1  −1 2  −1        −1  −1  −1
                         o X) (c X Σo y) = (X Σo X) X Σo y.                            (4.3)

It should be clear that the GLS estimator cannot be computed unless Σo is known. As
                                                                                       −1/2
β̂ GLS does not depend on c, it suﬃces to choose the transformation matrix G = Σo             .
                   −1/2
     For G = Σo           , let y ∗ = Gy, X ∗ = GX, and e∗ = Ge. The transformed speciﬁca-
tion is

       y ∗ = X ∗ β + e∗ ,                                                              (4.4)

As the GLS estimator is the OLS estimator for the speciﬁcation (4.4), it can also be
interpreted as a minimizer of the following GLS criterion function:
                         1 ∗                           1
       Q(β; Σo ) =         (y − X ∗ β) (y ∗ − X ∗ β) = (y − Xβ) Σ−1
                                                                   o (y − Xβ).         (4.5)
                         T                             T
This is a generalized version of the standard OLS criterion function (3.2) because it is
the average of a weighted sum of squared errors. Thus, the GLS and OLS estimators
are not equivalent in general, except in some exceptional cases; see e.g. Exercise 4.1.

     Similar to the OLS method, deﬁne the vector of GLS ﬁtted values as

       ŷ GLS = X(X  Σ−1  −1  −1
                       o X) X Σo y.


The vector of GLS residuals is

       êGLS = y − ŷ GLS .

As X(X  Σ−1  −1  −1
          o X) X Σo is idempotent but not symmetric, ŷ GLS is an oblique (but
not orthogonal) projection of y onto span(X). It can also be veriﬁed that the vector of
GLS residuals is not orthogonal to X or any linear combination of the column vectors
of X, i.e.,

       êGLS X = y  [I T − Σ−1    −1  −1 
                              o X(X Σo X) X ]X = 0.


In fact, êGLS is orthogonal to span(Σ−1
                                      o X). It follows that


       ê ê ≤ êGLS êGLS .

This shows that the OLS method still yields a better ﬁt of original data.


c Chung-Ming Kuan, 2001
4.2. THE METHOD OF GENERALIZED LEAST SQUARES                                           81


Remark: A natural measure of goodness of ﬁt for the speciﬁcation (3.1) estimated
using the GLS method is
                                       êGLS êGLS
                 2
       Centered RGLS =1−                             ,
                                   Centered TSS of y
where the denominator is the TSS of the original dependent variable y. A major problem
of this measure is that it need not be bounded between zero and one; see Exercise 4.2.
       2
Thus, RGLS is not a proper criterion for model comparison. Using R2 from the trans-
formed speciﬁcation (4.4) is also inadequate because it can only measure the variation
of the transformed dependent variable y ∗ , but not the variation of the original variable
y.

4.2.3       Properties of the GLS Estimator

We have seen that the GLS estimator is, by construction, the BLUE for β o under [A1]
and [A2](i). Its variance-covariance matrix is

       var(β̂ GLS ) = var((X  Σ−1  −1  −1       −1  −1
                                o X) X Σo y) = (X Σo X) .                            (4.6)

These results are summarized below.

Theorem 4.1 (Aitken) Given the speciﬁcation (3.1), suppose that [A1] and [A2](i)
hold and that var(y) = Σo is a positive deﬁnite matrix. Then β̂ GLS is the BLUE for β o
with the variance-covariance matrix (X  Σ−1  −1
                                          o X) .


As the GLS estimator is the BLUE,

       var(β̂ T ) − var(β̂ GLS )

must be a positive semi-deﬁnite matrix. This can also be veriﬁed directly; see Exer-
cise 4.3.

     For convenience, we introduce the following condition.

[A3 ] y ∼ N (Xβ o , Σo ), where Σo is a positive deﬁnite matrix.

The following result is an immediate consequence of Theorem 3.7(a).

Theorem 4.2 Given the speciﬁcation (3.1), suppose that [A1] and [A3 ] hold. Then

       β̂ GLS ∼ N (β o , (X  Σ−1  −1
                               o X) ).




                                                              
                                                              c Chung-Ming Kuan, 2001
82                           CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


      Moreover, if we believe that [A3 ] is true, the log-likelihood function is

                            T          1               1
        log L(β; Σo ) = −     log(2π) − log(det(Σo )) − (y − Xβ) Σ−1
                                                                   o (y − Xβ).       (4.7)
                            2          2               2
The ﬁrst order conditions of maximizing this log-likelihood function with respect to β
are

        X  Σ−1
             o (y − Xβ) = 0,


so that the MLE is

        β̃ T = (X  Σ−1  −1  −1
                     o X) X Σo y.


Thus, when Σo is known, the GLS estimator is also the MLE under [A3 ]. The infor-
mation matrix is then
                                          ,
                                          ,
        IE[X  Σ−1
                o  (y − Xβ)(y − Xβ) −1
                                    Σ o X],             = X  Σ−1
                                                               o X.
                                                 β=βo

The variance-covariance matrix of the GLS estimator thus also achieves the Crámer-Rao
lower bound. We have shown:

Theorem 4.3 Given the speciﬁcation (3.1), suppose that [A1] and [A3 ] hold. Then
β̂ GLS is the BUE for β o .


      Under the null hypothesis Rβ o = r, it is readily seen from Theorem 4.2 that

        (Rβ̂ GLS − r) [R(X  Σ−1  −1  −1
                               o X) R ] (Rβ̂ GLS − r) ∼ χ (q).
                                                         2



The left-hand side can serve as a test statistic provided that Σo is known.


4.2.4      FGLS Estimator

In practice, Σo is typically unknown and must be estimated. Substituting an estimator
Σ̂T for Σo in (4.3) yields the feasible generalized least squares (FGLS) estimator
                        −1           −1
        β̂ FGLS = (X  Σ̂T X)−1 X  Σ̂T y.

which is readily computed from data. Note, however, that Σo contains too many
(T (T + 1)/2) parameters. Proper estimation of Σo would not be possible unless fur-
ther restrictions on Σo are imposed. Under diﬀerent assumptions on var(y), Σo has
a simpler structure with much fewer (say, p  T ) unknown parameters and may be


c Chung-Ming Kuan, 2001
4.3. HETEROSKEDASTICITY                                                                 83


properly estimated; see Sections 4.3 and 4.4. FGLS estimation crucially depends on
these assumptions.

    A clear disadvantage of FGLS estimators is that their ﬁnite sample properties are
usually unknown. Note that Σ̂T is, in general, a function of y, so that β̂ FGLS is a
complex function of the elements of y. It is therefore diﬃcult, if not impossible, to
derive the ﬁnite-sample properties, such as expectation, variance and distribution, of
β̂ FGLS . Consequently, the eﬃciency gain of an FGLS estimator is not at all clear, and
exact tests are not available. One must rely on the asymptotic properties of β̂ FGLS to
draw statistical inferences.


4.3     Heteroskedasticity
In this section, we consider a simpler structure of Σo such that Σo is diagonal with
possibly diﬀerent diagonal elements:
                                                           
                                        σ2 0 · · ·    0
                                       1                   
                                       0 σ2 · · ·    0     
                                            2              
      Σo = diag[σ12 , . . . , σT2 ] =  .  .          ..    ,                        (4.8)
                                       .. .. . . .    .    
                                                           
                                        0 0 ···       σT2

where diag is the operator that puts its arguments on the main diagonal of a matrix.
That is, the elements of y are uncorrelated but may have diﬀerent variances. When yt ,
t = 1, . . . , T , have a constant variance, they are said to be homoskedastic; otherwise,
they are heteroskedastic.

    To compute the GLS estimator, the desired transformation matrix is
                                    
                σ1−1  0 ···      0
                                    
               0 σ −1 · · ·     0 
        −1/2         2              
      Σo     = .     ..   ..    ..   .
               ..     .      .   . 
                                    
                 0    0 · · · σT−1

As Σo still contains T unknown parameters, an even simpler structure of Σo is needed
to ensure proper FGLS estimation.

4.3.1    Tests for Heteroskedasticity

It is clear that the OLS method would prevail unless there is evidence that Σo = σo2 I T .
It is therefore natural to ﬁrst study the tests of the null hypothesis of homoskedasticity

                                                                 
                                                                 c Chung-Ming Kuan, 2001
84                            CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


against some form of heteroskedasticity. Such tests are usually based on some simpliﬁed
parametric speciﬁcations of var(yt ).

     The simplest possible form of heteroskedastic yt is groupwise heteroskedasticity. Sup-
pose that data can be classiﬁed into two groups: group one contains T1 observations
with the constant variance σ12 , and group two contains T2 observations with the constant
variance σ22 . This assumption simpliﬁes Σo in (4.8) to a matrix of only two unknown
parameters:

                  σ12 I T1      0
       Σo =                             ,                                               (4.9)
                        0    σ22 I T2

The null hypothesis of homoskedasticity is σ12 = σ22 = σo2 ; the alternative hypothesis is,
without loss of generality, σ12 > σ22 .

     Consider now two regressions based on the observations of the group one and group
two, respectively. Let σ̂T2 1 and σ̂T2 2 denote the resulting OLS variance estimates. In-
tuitively, whether σ̂T2 1 is “close” to σ̂T2 2 constitutes an evidence for or against the null
hypothesis. Under [A1] and [A3 ] with (4.9),

       (T1 − k)σ̂T2 1 /σ12 ∼ χ2 (T1 − k),

       (T2 − k)σ̂T2 2 /σ22 ∼ χ2 (T2 − k),

by Theorem 3.7(b). As yt are independent, these two χ2 random variables are also mu-
tually independent. Note that σ̂T2 1 and σ̂T2 2 must be computed from separate regressions
so as to ensure independence. Then under the null hypothesis,
                                 
           σ̂T2 1 (T1 − k)σ̂T2 1   (T2 − k)σ̂T2 2
      ϕ := 2 = 2                                  ∼ F (T1 − k, T2 − k);
           σ̂T2    σo (T1 − k)      σo2 (T2 − k)

this is the F test for groupwise heteroskedasticity.

     More generally, the variances of yt may be changing with the values of a particular
explanatory variable, say xj . That is, for some constant c > 0,

       σt2 = c x2tj .

Thus, the larger the magnitude of xtj , the greater is σt2 . An interesting feature of this
speciﬁcation is that σt2 may take distinct values for every t, yet Σo contains only one
unknown parameter c. The null hypothesis is then σt2 = σo2 for all t, and the alternative
hypothesis is, without loss of generality,
        2
       σ(1) ≥ σ(2)
               2
                   ≥ . . . σ(T
                            2
                               ),



c Chung-Ming Kuan, 2001
4.3. HETEROSKEDASTICITY                                                                85

       2 denotes the i th largest variance. The so-called Goldfeld-Quandt test is of the
where σ(i)
same form as the F test for groupwise heteroskedasticity but with the following data
grouping procedure.

 (1) Rearrange observations according to the values of some explanatory variable xj
     in a descending order.

 (2) Divide the rearranged data set into three groups with T1 , Tm , and T2 observations,
     respectively.

 (3) Drop the Tm observations in the middle group and perform separate OLS regres-
     sions using the data in the ﬁrst and third groups.

 (4) The statistic is the ratio of the variance estimates:

            σ̂T2 1 /σ̂T2 2 ∼ F (T1 − k, T2 − k).

If the data are rearranged according to the values of xj in an ascending order, the
resulting statistic should be computed as

     σ̂T2 2 /σ̂T2 1 ∼ F (T2 − k, T1 − k).

In a time-series study, the variances may be decreasing (increasing) over time. In this
case, data rearrangement would not be needed. Note that dropping the observations in
the middle group enhances the test’s ability of discriminating variances in the ﬁrst and
third groups. It is usually suggested that no more than one third of the observations
should be dropped; it is also typical to set T1 ≈ T2 . Clearly, this test would be pow-
erful provided that one can correctly identify the source of heteroskedasticity (i.e., the
explanatory variable that determines variances). On the other hand, ﬁnding such an
explanatory variable may not be easy.

   An even more general form of heteroskedastic covariance matrix is such that the
diagonal elements

     σt2 = h(α0 + z t α1 ),

where h is some function and z t is a p × 1 vector of exogenous variables aﬀecting the
variances of yt . This assumption simpliﬁes Σo to a matrix of p + 1 unknown parameters.
Tests against this class of alternatives can be derived under the likelihood framework,
and their distributions can only be analyzed asymptotically. This will not be discussed
until Chapter ??.

                                                             
                                                             c Chung-Ming Kuan, 2001
86                         CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


4.3.2      GLS Estimation

If the test for groupwise heteroskedasticity rejects the null hypothesis, one might believe
that Σo is given by (4.9). Accordingly, the speciﬁed linear speciﬁcation may be written
as:
          y1         X1             e1
                =           β+           ,
          y2         X2             e2
where y 1 is T1 × 1, y 2 is T2 × 1, X 1 is T1 × k, and X 2 is T2 × k. A transformed
speciﬁcation is

          y 1 /σ1         X 1 /σ1            e1 /σ1
                    =               β+                ,
          y 2 /σ2         X 2 /σ2            e2 /σ2
where the transformed yt , t = 1, . . . , T , have constant variance one. It follows that the
GLS and FGLS estimators are, respectively,
                               −1                 
                X 1 X 1 X 2 X 2      X 1 y 1 X 2 y 2
      β̂ GLS =         +                     +           ,
                 σ12     σ22           σ12     σ22
                               −1                 
                X 1 X 1 X 2 X 2      X 1 y 1 X 2 y 2
     β̂ FGLS =         +                     +           ,
                 σ̂12    σ̂22          σ̂12    σ̂22
where σ̂T2 1 and σ̂T2 2 are, again, the OLS variance estimates obtained from separate re-
gressions using T1 and T2 observations, respectively. Observe that β̂ FGLS is not a linear
estimator in y so that its ﬁnite-sample properties are not clear.

      If the Goldfeld-Quandt test rejects the null hypothesis, one might believe that σt2 =
c x2tj . A transformed speciﬁcation is then
        yt             1                 xt,j−1        xt,j+1             x     e
            = βj + β1     + · · · + βj−1        + βj+1        + · · · + βk tk + t ,
        xtj           xtj                 xtj           xtj               xtj  xtj

where var(yt /xtj ) = c := σo2 . This is a very special case where the GLS estimator is
readily computed as the OLS estimator for the transformed speciﬁcation. Clearly, the
validity of the GLS method crucially depends on whether the explanatory variable xj
can be correctly identiﬁed.

      When σt2 = h(α0 + z t α1 ), it is typically diﬃcult to implement an FGLS estimator,
especially when h is nonlinear. If h is the identity function, one may regress the squared
OLS residuals ê2t on z t to obtain estimates for α0 and α1 . Of course, certain con-
straint must be imposed to ensure the ﬁtted values are non-negative. The ﬁnite-sample
properties of this estimator are diﬃcult to analyze, however.

Remarks:


c Chung-Ming Kuan, 2001
4.4. SERIAL CORRELATION                                                                                        87


       1. When a test for heteroskedasticity rejects the null hypothesis, there is really no
         guarantee that the alternative hypothesis (say, groupwise heteroskedasticity) must
         provide a correct description of var(yt ).

       2. When a form of heteroskedasticity is incorrectly speciﬁed, it is likely that the
         resulting FGLS estimator is less eﬃcient than the OLS estimator.

       3. As discussed in Section 4.2.3, the ﬁnite-sample properties of FGLS estimators and
         hence the exact tests are usually not available. One may appeal to asymptotic
         theory to construct proper tests.


4.4        Serial Correlation
Another leading example that var(y) = σo2 I T is when the elements of y are correlated
so that the oﬀ-diagonal elements of Σo are non-zero. This phenomenon is more com-
mon in time series data, though it is not necessary so. When time series data yt are
correlated over time, they are said to exhibit serial correlation. For cross-section data,
the correlations of yt are usually referred to as spatial correlation. We will concentrate
on serial correlation.

4.4.1       A Simple Model of Serial Correlation

Consider time series yt , t = 1, . . . , T , with the constant variance σo2 . Then, the correla-
tion coeﬃcient between yt and yt−i is
                                 cov(yt , yt−i )            cov(yt , yt−i )
         corr(yt , yt−i ) =                            =                   ,    i = 0, 1, 2, . . . , t − 1;
                                var(yt ) var(yt−i )             σo2

in particular, corr(yt , yt ) = 1. Such correlations are also known as the autocorrelations
of yt . Similarly, cov(yt , yt−i ), i = 0, 1, 2, . . . , t − 1, are known as the autocovariances of
yt .

       A very simple speciﬁcation of autocovariances is

         cov(yt , yt−i ) = cov(yt , yt+i ) = ci σo2 ,

where c is a constant, so that corr(yt , yt−i ) = ci . That is, the autocovariances and
autocorrelations depend only i, the time periods between two observations, but not on
t. Moreover, the correlations between two observations decay exponentially fast when i
increases. Equivalently, we may write

         cov(yt , yt−i ) = c cov(yt , yt−i+1 ).

                                                                                
                                                                                c Chung-Ming Kuan, 2001
88                            CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


Letting corr(yt , yt−i ) = ρi , we have

       ρi = c ρi−1 .                                                                                                  (4.10)

From this recursion we immediately see that c = ρ1 which must be bounded between
−1 and 1. It follows that var(y) is
                                                                            
                         1      ρ1           ρ21        ···         ρT1 −1
                                                                          
                
                       ρ1      1            ρ1         ···         ρT1 −2 
                                                                           
                       ρ21                             ···         ρT1 −3 
       Σo = σo2                ρ1           1                             .                                         (4.11)
                                                                      .. 
                        ..      ..          ..         ..                 
                         .       .           .            .            . 
                       ρT1 −1 ρT1 −2 ρ1T −3 · · ·                      1

To avoid singularity, ρ1 cannot be ±1.

     A novel feature of this speciﬁcation is that it, while permitting non-zero oﬀ-diagonal
elements of Σo , involves only two unknown parameters: σo2 and ρ1 . The transformation
matrix is then
                                                                                                                
                       1                           0                 0        ···         0             0
                                                                                                                
                   − √ ρ1 2                 √1                      0        ···         0             0        
                       1−ρ1                1−ρ21                                                                
                                                                                                                
                      0                 − √ ρ1 2              √1             ···         0             0        
               1                           1−ρ1                   1−ρ21                                        
                                                                                                                 .
       Σ−1/2 =
        o
               σo 
                  
                       ..
                        .
                                                   ..
                                                    .
                                                                     ..
                                                                      .
                                                                              ..
                                                                                   .
                                                                                          ..
                                                                                           .
                                                                                                        ..
                                                                                                         .
                                                                                                                 
                                                                                                                 
                                                                                                                
                                                                             ···       √1                       
                      0                           0                 0
                                                                                          1−ρ21
                                                                                                        0        
                                                                                                                
                       0                           0                 0        ···      − √ ρ1 2        √1
                                                                                           1−ρ1         1−ρ21

                                      −1/2
Note that this choice of Σo                  is not symmetric. As any matrix that is a constant
               −1/2
proportion to Σo    can also serve as a transformation matrix for GLS estimation, the
so-called Cochrane-Orcutt Transformation is based on
                                                                                                           
                                                           1 − ρ21            0        0 ···      0      0
                                                                                                           
                                                          −ρ1                1        0 ···      0      0 
                                                                                                           
                                                                                                          
                                                              0             −ρ1 1 · · ·          0      0 
        −1/2
       Vo                 −1/2
             = σo 1 − ρ1 Σo
                       2       =
                                                              ..             .. .. . .           ..
                                                                                                            
                                                                                                         ..  ,
                                                               .              .  .     .          .      . 
                                                                                                           
                                                              0              0        0 ···      1      0 
                                                                                                           
                                                               0              0        0 ···   −ρ1       1

which depends only on ρ1 .


c Chung-Ming Kuan, 2001
4.4. SERIAL CORRELATION                                                                        89


   The data from the Cochrane-Orcutt transformation are

        y1∗ = (1 − ρ21 )1/2 y1 ,       x∗1 = (1 − ρ21 )1/2 x1 ,
        yt∗ = yt − ρ1 yt−1 ,           x∗t = xt − ρ1 xt−1 ,       t = 2, · · · , T,

where xt is the t thcolumn of X  . It is then clear that

        var(y1∗ ) = (1 − ρ21 )σo2 ,

        var(yt∗ ) = σo2 + ρ21 σo2 − 2ρ21 σo2 = (1 − ρ21 )σo2 ,    t = 2, . . . , T.

Moreover, for each i,

        cov(yt∗ , yt−i
                   ∗
                       ) = cov(yt , yt−i ) − ρ1 cov(yt−1 , yt−i ) − ρ1 cov(yt , yt−i−1 )

                                   − ρ21 cov(yt−1 , yt−i−1 )

                        = 0.

Hence, the transformed variable yt∗ satisﬁes the classical conditions, as it ought to be.
Then provided that ρ1 is known, regressing yt∗ on x∗t yields the GLS estimator for β o .


4.4.2      An Alternative View

There is an alternative approach to generate the variance-covariance matrix (4.11).
Under [A2](i), let

      ' := y − Xβ o .

The vector ' is usually referred to as the vector of disturbances. Note that ' is not
the same as the residual vector ê. While the former is not observable because β o is
unknown, the later is obtained from OLS estimation and hence observable. Under [A2],
IE(') = 0 and

      var(y) = var(') = IE('' ).

The variance and covariance structure of y is thus the same as that of '.

   A time series is said to be weakly stationary if its mean, variance, and autocovari-
ances are all independent of the time index t. Thus, a weakly stationary series cannot
exhibit trending behavior and has relatively stable ﬂuctuations. In particular, a time se-
ries with zero mean, a constant variance, and zero autocovariances is weakly stationary
and also known as a white noise. Let {ut } be a white noise with IE(ut ) = 0, IE(u2t ) = σu2 ,

                                                                          
                                                                          c Chung-Ming Kuan, 2001
90                               CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


and IE(ut uτ ) = 0 for t = τ . Now suppose that the elements of ' is generated as a weakly
stationary AR(1) process (autoregressive process of order 1):

       :t = α1 :t−1 + ut ,                                                          (4.12)

with :0 = 0. By recursive substitution, (4.12) can be expressed as

              
              t−1
       :t =         αi1 ut−i ,                                                      (4.13)
              i=0

a weighted sum of current and previous random innovations (shocks).

     It follows from (4.13) that IE(:t ) = 0 and IE(ut , :t−s ) = 0 for all t and s ≥ 1. By
weak stationarity, var(:t ) is a constant, so that for all t,

       var(:t ) = α21 var(:t−1 ) + σu2 = σu2 /(1 − α21 ).

Clearly, the right-hand side would not be meaningful unless |α1 | < 1. The autocovari-
ance of :t and :t−1 is, by weak stationarity,

                                             σu2
       IE(:t :t−1 ) = α1 IE(:2t−1 ) = α1           .
                                           1 − α21

This shows that

       α1 = corr(:t , :t−1 ) = corr(yt , yt−1 ) = ρ1 .

Similarly,

                                                  σu2
       IE(:t :t−2 ) = α1 IE(:t−1 :t−2 ) = α21           ,
                                                1 − α21

so that

       corr(:t , :t−2 ) = α1 corr(:t , :t−1 ) = ρ21 .

More generally, we can write for i = 1, 2, . . . ,

       corr(:t , :t−i ) = ρ1 corr(:t , :t−i+1 ) = ρi1 ,

which depend only on i, the time diﬀerence between two :’s, but not on t. This is
precisely what we postulated in (4.10). The variance-covariance matrix Σo under this
structure is also (4.11) with σo2 = σu2 /(1 − ρ21 ).


c Chung-Ming Kuan, 2001
4.4. SERIAL CORRELATION                                                                   91


   The AR(1) structure of disturbances also permits a straightforward extension. Con-
sider the disturbances that are generated as an AR(p) process (autoregressive process
of order p):

      :t = α1 :t−1 + · · · + αp :t−p + ut ,                                           (4.14)

where the coeﬃcients α1 , . . . , αp should also be restricted to ensure weak stationarity;
we omit the details. Of course, :t may follow diﬀerent structures and are still serially
correlated. For example, :t may be generated as an MA(1) process (moving average
process of order 1):

      :t = ut + α1 ut−1 ,          |α1 | < 1,

where {ut } is a white noise; see e.g., Exercise 4.5.


4.4.3     Tests for AR(1) Disturbances

As the AR(1) structure of disturbances is one of the most commonly used speciﬁcation of
serial correlation, we now consider the tests of the null hypothesis of no serial correlation
(α1 = ρ1 = 0) against AR(1) disturbances. We discuss only the celebrated Durbin-
Watson test and Durbin’s h test; the discussion of other large-sample tests will be
deferred to Chapter 6.

   In view of the AR(1) structure, a natural estimator of ρ1 is the OLS estimator of
regressing the OLS residual êt on its immediate lag êt−1 :
                T
                t=2 êt êt−1
      ρ̂T =      T
                              .                                                       (4.15)
                        2
                 t=2 êt−1

The Durbin-Watson statistic is
               T
               t=2 (êt − êt−1 )
                                 2
      d=             T
                                   .
                           2
                     t=1 êt

When the sample size T is large, it can be seen that
                          T     2
                          t=2 êt−1   ê21 + ê2T
        d = 2 − 2ρ̂T       T
                                    −     T
                                  2              2
                           t=1 êt        t=1 êt

         ≈ 2(1 − ρ̂T ).

For 0 < ρ̂T ≤ 1 (−1 ≤ ρ̂T < 0), the Durbin-Watson statistic is such that 0 ≤ d < 2
(2 < d ≤ 4), which suggests that there is some positive (negative) serial correlation.

                                                               
                                                               c Chung-Ming Kuan, 2001
92                        CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


Hence, this test essentially checks whether ρ̂T is suﬃciently “close” to zero (i.e., d is
close to 2).

     A major diﬃculty of the Durbin-Watson test is that the exact null distribution of d
depends on the matrix X and therefore varies with data. As such, the critical values
of d cannot be tabulated. Nevertheless, it has been shown that the null distribution of
d lies between the distributions of a lower bound (dL ) and an upper bound (dU ) in the
following sense. Given the signiﬁcance level α, let d∗α , d∗L,α and d∗U,α denote, respectively,
the critical values of d, dL and dU . For example, IP{d < d∗α } = α). Then for each α,
d∗L,α < d∗α < d∗U,α . While the distribution of d is data dependent, the distributions of dL
and dU are independent of X. Thus, the critical values d∗L,α and d∗U,α can be tabulated.
One may rely on these critical values to construct a “conservative” decision rule.

     Speciﬁcally, when the alternative hypothesis is ρ1 > 0 (ρ1 < 0), the decision rule of
the Durbin-Watson test is:

 (1) Reject the null if d < d∗L,α (d > 4 − d∗L,α ).

 (2) Do not reject the null if d > d∗U,α (d < 4 − d∗U,α ).

 (3) Test is inconclusive if d∗L,α < d < d∗U,α (4 − d∗L,α > d > 4 − d∗U,α ).

This is not completely satisfactory because the test may yield no conclusion. Some
econometric packages such as SHAZAM now compute the exact Durbin-Watson dis-
tribution for each regression and report the exact p-values. When such as program is
available, this test does not have to rely on the critical values of dL and dU , and it is al-
ways conclusive. Note that the tabulated critical values of the Durbin-Watson statistic
are for the speciﬁcations with a constant term; the critical values for the speciﬁcations
without a constant term can be found in Farebrother (1980).

     Another problem with the Durbin-Watson statistic is that its null distribution holds
only under the classical conditions [A1] and [A3]. In the time series context, it is quite
common to include a lagged dependent variable as a regressor so that [A1] is violated.
A leading example is the speciﬁcation

       yt = β1 + β2 xt2 + · · · + βk xtk + γyt−1 + et .

This model can also be derived from certain behavioral assumptions; see Exercise 4.6.
It has been shown that the Durbin-Watson statistic under this speciﬁcation is biased
toward 2. That is, this test would not reject the null hypothesis even when serial
correlation is present. On the other hand, Durbin’s h test is designed speciﬁcally for


c Chung-Ming Kuan, 2001
4.4. SERIAL CORRELATION                                                                            93


the speciﬁcations that contain a lagged dependent variable. Let γ̂T be the OLS estimate
          T ) be the OLS estimate of var(γ̂T ). The h statistic is
of γ and var(γ̂

                          T
        h = ρ̂T                  ,
                    1 − T var(γ̂
                           T)

and its asymptotic null distribution is N (0, 1). A clear disadvantage of Durbin’s h test
                                      T ) ≥ 1/T . This test can also be derived as a
is that it cannot be calculated when var(γ̂
Lagrange Multiplier test; see Chapter ??

      If we have quarterly data and want to test for the fourth-order serial correlation,
the statistic analogous to the Durbin-Watson statistic is
                  T
                  t=5 (êt − êt−4 )
                                    2
        d4 =            T
                                      ;
                              2
                        t=1 êt

see Wallis (1972) for corresponding critical values.


4.4.4      FGLS Estimation

Recall that Σo depends on two parameters σo2 and ρ1 . We may use a generic notation
Σ(σ 2 , ρ) to denote this function of σ 2 and ρ. In particular, Σo = Σ(σo2 , ρ1 ). Similarly, we
may also write V (ρ) such that V o = V (ρ1 ). The transformed data based on V (ρ)−1/2
are

         y1 (ρ) = (1 − ρ2 )1/2 y1 ,       x1 (ρ) = (1 − ρ2 )1/2 x1 ,
         yt (ρ) = yt − ρyt−1 ,            xt (ρ) = xt − ρxt−1 ,        t = 2, · · · , T.

Hence, yt∗ = yt (ρ1 ) and x∗t = xt (ρ1 ).

      To obtain an FGLS estimator, we must ﬁrst estimate ρ1 by some estimator ρ̂T and
                                                         −1/2
then construct the transformation matrix as V̂ T                = V (ρ̂T )−1/2 . Here, ρ̂T may be com-
puted as in (4.15); other estimators for ρ1 may also be used, e.g., ρ̌T = ρ̂T (T −k)/(T −1).
The transformed data are then yt (ρ̂T ) and xt (ρ̂T ). An FGLS estimator is obtained by
regressing yt (ρ̂T ) on xt (ρ̂T ). Such an estimator is known as the Prais-Winsten estimator
or the Cochrane-Orcutt estimator when the ﬁrst observation is dropped in computation.

      The following iterative procedure is also commonly employed in practice.

 (1) Perform OLS estimation and compute ρ̂T as in (4.15) using the OLS residuals êt .

 (2) Perform the Cochrane-Orcutt transformation based on ρ̂T and compute the re-
        sulting FGLS estimate β̂ FGLS by regressing yt (ρ̂T ) on xt (ρ̂T ).

                                                                         
                                                                         c Chung-Ming Kuan, 2001
94                             CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


 (3) Compute a new ρ̂T as in (4.15) with êt replaced by the FGLS residuals

               êt,FGLS = yt − xt β̂ FGLS .

 (4) Repeat steps (2) and (3) until ρ̂T converges numerically, i.e., when ρ̂T from two
       consecutive iterations diﬀer by a value smaller than a pre-determined convergence
       criterion.

Note that steps (1) and (2) above already generate an FGLS estimator. More iterations
do not improve the asymptotic properties of the resulting estimator but may have a
signiﬁcant eﬀect in ﬁnite samples. This procedure can be extended easily to estimate
the speciﬁcation with higher-order AR disturbances.
     Alternatively, the Hildreth-Lu procedure adopts grid search to ﬁnd the ρ1 ∈ (−1, 1)
that minimizes the sum of squared errors of the model. This procedure is computation-
ally intensive, and it is diﬃcult to implement when :t have an AR(p) structure with
p > 2.
     In view of the log-likelihood function (4.7), we must compute det(Σo ). Clearly,
                           1            1
       det(Σo ) =            −1 =       −1/2
                                              .
                       det(Σo )   [det(Σo )]2
In terms of the notations in the AR(1) formulation, σo2 = σu2 /(1 − ρ21 ), and
                         1               1 −1/2
       Σ−1/2
        o    =                V −1/2
                                 o    =     Vo .
                     σo 1 − ρ1
                             2          σ u
             −1/2
As det(V o          ) = (1 − ρ21 )1/2 , we then have

       det(Σo ) = (σu2 )T (1 − ρ21 )−1 .

The log-likelihood function for given σu2 and ρ1 is

         log L(β; σu2 , ρ1 )
                  T          T           1                1
            =−      log(2π) − log(σu2 ) + log(1 − ρ21 ) − 2 (y ∗ − X ∗ β) (y ∗ − X ∗ β).
                  2          2           2               2σu
Clearly, when σu2 and ρ1 are known, the MLE of β is just the GLS estimator.
     If σu2 and ρ1 are unknown, the log-likelihood function reads:

         log L(β, σ 2 , ρ)
                  T          T           1               1
            =−      log(2π) − log(σ 2 ) + log(1 − ρ2 ) − 2 (1 − ρ2 )(y1 − x1 β)2
                  2          2           2              2σ
                              1 
                                  T
                        −         [(yt − xt β) − ρ(yt−1 − xt−1 β)]2 ,
                             2σ 2
                                 t=2


c Chung-Ming Kuan, 2001
4.5. LINEAR PROBABILITY MODEL                                                           95


which is a nonlinear function of the parameters. Nonlinear optimization methods are
therefore needed to compute the MLEs of β, σ 2 , and ρ. For a given β, estimating ρ
by regressing et (β) = yt − xt β on et−1 (β) is equivalent to maximizing the last term of
the log-likelihood function above. This does not yield an MLE because the other terms
involving ρ, namely,
      1                1
        log(1 − ρ2 ) − 2 (1 − ρ2 )(y1 − x1 β)2 ,
      2               2σ
have been ignored. This shows that the aforementioned iterative procedure does not
result in the MLEs.

Remark: Exact tests based on FGLS estimation results are not available because the
ﬁnite-sample distribution of the FGLS estimator is, again, unknown. Asymptotic theory
is needed to construct proper tests.


4.5      Linear Probability Model
In some applications researchers are interested in analyzing why consumers own a house
or participate a particular event. The ownership or the choice of participation are
typically represented by a binary variable that takes the values one and zero. If the
dependent variable in a linear regression is binary, we will see below that both the OLS
and FGLS methods are not appropriate.

   Let xt denote the t th column of X  . The t th observation of the linear speciﬁcation
y = Xβ + e can be expressed as

      yt = xt β + et .

For the binary dependent variable y whose t th observation is yt = 1 or 0, we know

      IE(yt ) = IP(yt = 1).

Thus, xt β is just a speciﬁcation of the probability that yt = 1. As such, the linear
speciﬁcation of binary dependent variables is usually referred to as the linear probability
model.

   When [A1] and [A2](i) hold for a linear probability model,

      IE(yt ) = IP(yt = 1) = xt β o ,

and the OLS estimator is unbiased for β o . Note, however, that the variance of yt is

      var(yt ) = IP(yt = 1)[1 − IP(yt = 1)].

                                                             
                                                             c Chung-Ming Kuan, 2001
96                            CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


Under [A1] and [A2](i),

       var(yt ) = xt β o (1 − xt β o ),

which varies with xt . Thus, the linear probability model suﬀers from the problem of
heteroskedasticity, and the OLS estimator is not the BLUE for β o . Apart from the
eﬃciency issue, the OLS method is still not appropriate for the linear probability model
because the OLS ﬁtted values need not be bounded between zero and one. When xt β̂ T
is negative or greater than one, it cannot be interpreted as a probability and hence
becomes meaningless.

     Although the GLS estimator is the BLUE, it is not available because β o , and hence
var(yt ), is unknown. Nevertheless, if yt are uncorrelated so that var(y) is diagonal, an
FGLS estimator may be obtained using the transformation matrix
      −1/2
                 -
    Σ̂T    = diag x1 β̂ T (1 − x1 β̂ T )]−1/2 , x2 β̂ T (1 − x2 β̂ T )]−1/2 , . . . ,
                                                                                           .
                                                              xT β̂ T (1 − xT β̂ T )]−1/2 ,

                                                                                                −1/2
where β̂ T is the OLS estimator of β o . Such an estimator breaks down when Σ̂T                        is
                                                                                 −1/2
not available (i.e., when xt β̂ T is negative or greater than one). Even when Σ̂T    can be
computed, there is still no guarantee that the FGLS ﬁtted values are bounded between
zero and one. This shows that the FGLS method may not always be a solution when
the OLS method fails.

     This example also illustrates the importance of data characteristics in estimation and
modeling. Without taking into account the binary nature of the dependent variable,
even the FGLS method may be invalid. More appropriate methods for speciﬁcations
with binary dependent variables will be discussed in Chapter ??.


4.6      Seemingly Unrelated Regressions
In many econometric practices, it is also important to jointly study the behavior of sev-
eral dependent variables. For example, the input demands of an ﬁrm may be described
using a system of linear regression functions in which each regression represents the
demand function of a particular input.

     Consider the speciﬁcation of a system of N equations, each with ki explanatory
variables and T observations. Speciﬁcally,

       y i = X i β i + ei ,       i = 1, 2, . . . , N,                                          (4.16)


c Chung-Ming Kuan, 2001
4.6. SEEMINGLY UNRELATED REGRESSIONS                                                                   97


where for each i, y i is T × 1, X i is T × ki , and β i is ki × 1. The system (4.16) is
also known as a speciﬁcation of seemingly unrelated regressions (SUR). Stacking the
equations of (4.16) yields
                                                                           
          y1             X1         0     ···   0          β1                e1
                                                          
       y   0                 X2 · · ·        0   β   e 
       2                                         2   2 
       . = .                  .. ..          ..  . + . .                                    (4.17)
       ..   ..                 .    .         .   ..   .. 
                                                          
        yN     0                    0     ···   XN     βN     eN
                                                  
          y                             X                   β                 e

                                                          N
This is a linear speciﬁcation (3.1) with k =              i=1 ki explanatory variables and T N obser-
vations. It is not too hard to see that the whole system (4.17) satisﬁes the identiﬁcation
requirement whenever every speciﬁcation of (4.16) does.

   Suppose that the classical conditions [A1] and [A2] hold for each speciﬁed linear
regression in the system. Then under [A2](i), there exists β o = (β o,1 . . . β o,N ) such
that IE(y) = Xβ o . The OLS estimator obtained from (4.17) is therefore unbiased.
Note, however, that [A2](ii) for each linear regression ensures only that, for each i,

      var(y i ) = σi2 I T ;

there is no restriction on the correlations between y i and y j . The variance-covariance
matrix of y is then
                                                                                              
                                    σ12 I T      cov(y 1 , y 2 )       ···   cov(y 1 , y N )
                                                                                            
                     cov(y , y )        σ22 I T      ···                    cov(y 2 , y N ) 
                            2   1                                                           
      var(y) = Σo =       .                .         ..                           ..        .     (4.18)
                          ..               ..            .                         .        
                                                                                            
                      cov(y N , y 1 ) cov(y N , y 2 ) · · ·                      2
                                                                                σN I T

That is, the vector of stacked dependent variables violates [A2](ii), even when each
individual dependent variable has a scalar variance-covariance matrix. Consequently,
the OLS estimator of the whole system, β̂ T N = (X  X)−1 X  y, is not the BLUE in
general. In fact, owing to the block-diagonal structure of X, β̂ T N simply consists of
N equation-by-equation OLS estimators and hence ignores the correlations between
equations and heteroskedasticity across equations.

   In practice, it is also typical to postulate that for i = j,

      cov(y i , y j ) = σij I T ,

                                                                                  
                                                                                  c Chung-Ming Kuan, 2001
98                           CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


that is, yit and yjt are contemporaneously correlated but yit and yjτ , t = τ , are serially
uncorrelated. Under this condition, (4.18) simpliﬁes to Σo = S o ⊗ I T with
                                   
               σ12 σ12 · · · σ1N
                                   
            σ                      
            21 σ2 · · · σ2N 
                       2
     So =  .        ..   ..    ..   .
            ..       .      .   .  
                                   
              σN 1 σN 2 · · · σN 2


As Σ−1    −1
    o = S o ⊗ I T , the GLS estimator of (4.17) is

        β̂ GLS = [X  (S −1         −1   −1
                         o ⊗ I T )X] X (S o ⊗ I T )y,

and its covariance matrix is [X  (S −1         −1
                                     o ⊗ I T )X] .

      It is readily veriﬁed that when σij = 0 for all i = j, S o becomes a diagonal matrix,
and so is Σo . The resulting GLS estimator thus reduces to the OLS estimator. This
should not be too surprising because estimating the SUR system would be unnecessary
if the dependent variables are in fact uncorrelated. (Note that the heteroskedasticity
across equations does not aﬀect this result.) If all the equations in the system have
the same regressors, i.e., X i = X 0 (say), the GLS estimator is also the same as the
OLS estimator; see e.g., Exercise 4.7. More generally, it can be shown that there would
not be much eﬃciency gain for GLS estimation if y i and y j are less correlated and/or
X i and X j are highly correlated; see e.g., Goldberger (1991, p. 328) for an illustrative
example.
                                                                      −1
      The FGLS estimator can be obtained by replacing S −1
                                                        o with Ŝ T N , where Ŝ T N is an
N × N matrix computed as
                     
                 ê1
                
            1 ê2 
                      -            .
    Ŝ T N =  .  ê1 ê2 . . . êN ,
            T  .. 
                     
                êN

where êi is the OLS residual vector of the i th equation. The elements of this matrix
are
               êi êi
         σ̂i2 =         ,   i = 1, . . . , N,
                 T
               êi êj
        σ̂ij =          ,   i = j, i, j = 1, . . . , N.
                 T
Note that Ŝ T N is of an outer product form and hence a positive semi-deﬁnite matrix.
One may also replace the denominator of σ̂i2 with T − ki and the denominator of σ̂ij


c Chung-Ming Kuan, 2001
4.7. MODELS FOR PANEL DATA                                                                     99


with T − max(ki , kj ). The resulting estimator Ŝ T N need not be positive semi-deﬁnite,
however.

Remark: The estimator Ŝ T N mentioned above is valid provided that var(y i ) = σi2 I T
and cov(y i , y j ) = σij I T . If these assumptions do not hold, FGLS estimation would be
much more complicated. This may happen when heteroskedasticity and serial correla-
tions are present in each equation, or when cov(yit , yjt ) changes over time.


4.7     Models for Panel Data
A data set that contains N cross-section units (individuals, families, ﬁrms, or countries),
each with some time-series observations, is known as a panel data set. Well known panel
data sets in the U.S. include the National Longitudinal Survey (NLS) of Labor Market
Experience and the Michigan Panel Study of Income Dynamics (PSID). Building these
data sets is very costly because they are obtained by tracking thousands of individuals
through time. Some panel data may be easier to establish; for example, the GDP data
for all G7 countries over 30 years also form a panel data set. Panel data permit analysis
of topics that could not be studied using only cross-section or time-series data. In this
section, we are mainly concerned with the panel data set that involves a large number
of cross-section units, each with a short time series.

4.7.1      Fixed Eﬀects Model

Given a panel data set, the basic linear speciﬁcation allowing for individual eﬀects (i.e.,
eﬀects that are changing across individual units but remain constant over time) is

      yit = xit β i + eit ,   i = 1, . . . , N,      t = 1, . . . , T,

where xit is k × 1 and β i depends only on i but not on t. Clearly, there is no time-
speciﬁc eﬀect in this speciﬁcation; this may be reasonable when only a short time series
is observed for each individual unit.

   Analogous to the notations in the SUR system (4.16), we can also write the speciﬁ-
cation above as

      y i = X i β i + ei ,     i = 1, 2, . . . , N,                                         (4.19)

where y i is T × 1, X i is T × k, and ei is T × 1. This is again a complex system involving
k × N parameters. Here, the dependent variable y and explanatory variables X are the
same across individual units such that y i and X i are simply their observations for each

                                                                          
                                                                          c Chung-Ming Kuan, 2001
100                                  CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


individual i. For example, y may be the family consumption expenditure, and each yi
contains family i’s annual consumption expenditures. By contrast, y i and X i may be
diﬀerent variables in a SUR system.

      When T is small (i.e., observed time series are short), estimating (4.19) is not feasible.
A simpler form of (4.19) is such that only the intercept terms change with i and the
other parameters remain constant across i:

        y i = T ai + Z i b + ei ,                i = 1, 2, . . . , N,                             (4.20)

where T is the T -dimensional vector of ones, [T Z i ] = X i and [ai b ] = β i . Thus,
individual eﬀects are completely captured by the intercept terms in (4.20). This sim-
pliﬁes (4.19) from kN to N + k − 1 parameters. Note that this speciﬁcation treats ai as
non-random parameters and is known as the ﬁxed eﬀects model. Stacking N equations
in (4.20) together we obtain
                                                                                      
         y1             0 ···                      0          a1            Z1           e1
              T                                                    
       y   0                                        a   Z      e 
       2               T ···                     0   2   2      2 
       . = .          .                          ..  . + . b +  . .                      (4.21)
       ..   ..        .. . . .                    .   ..   ..   .. 
                                                                   
          yN                     0    0     ···     T     aN     ZN     eN
                                                         
            y                             D                    a             Z            e

This is just a linear speciﬁcation (3.1) with N + k − 1 explanatory variables and T N
observations. Note that each column of D is in eﬀect a dummy variable for the i th
individual unit. In what follows, an individual unit will be referred to as a “group.”

      Let z it denote the t th column of Z i , where Z i is the i th block of Z  . For z it , the
i th group average over time is

               1
                     T
                        1
        z̄ i =    z it = Z i T ;
               T        T
                    t=1

for yit , the group average over time is
                 1 
        ȳ i =    y .
                 T i T
The overall sample average of z it (average over time and groups) is

              1 
                         N       T
                           1
        z̄ =       z it =    Z  N T ,
             NT           NT
                     i=1 t=1

and the overall sample average of yit is
                  1 
        ȳ =        y N T .
                 NT


c Chung-Ming Kuan, 2001
4.7. MODELS FOR PANEL DATA                                                                    101


Note that

           1 
               N
      z̄ =     z̄ i ,
           N
               i=1


so that the overall sample average is simply the sample mean of all group averages.
Similarly, ȳ is also the sample average of ȳ i .

    It can be seen that the speciﬁcation (4.21) satisﬁes the identiﬁcation requirement
provided that no column of Z i is a constant (i.e., there is no time invariant regressor
for each group). Once the identiﬁcation requirement is satisﬁed, the OLS estimator can
be computed. By Theorem 3.3, the OLS estimator for b is

      b̂N T = [Z  (I N T − P D )Z]−1 Z  (I N T − P D )y,                                 (4.22)

where P D = D(D  D)−1 D is a projection matrix. Thus, b̂N T can be obtained by
regressing (I N T − P D )y on (I N T − P D )Z.

    More speciﬁcally, write D = I N ⊗ T , so that

      P D = (I N ⊗ T )(I N ⊗ T T )−1 (I N ⊗ T ) = I N ⊗ T T /T.

It follows that I N T − P D = I N ⊗ (I T − T T /T ) and that
                                                     
                              y1            T ȳ 1
                                       
                         y    ȳ 
                           2    T    2 
      (I N T − P D )y =  .  −     ..   ,
                         ..        .   
                                       
                          yN      T ȳ N

where ȳ i is the group average of the elements in y i . The t th observation in the i th block
of (I N T − P D )y is then yit − ȳ i , the deviation of yit from its group average. Similarly,
                                                     
                              Z1             T z̄ 1
                                       
                         Z    z̄  
                         2   T 2 
      (I N T − P D )Z =  .  −     ..   ,
                         ..        .   
                                       
                          ZN            
                                  T z̄ N

with the t th observation in the i th block being (z it − z̄ i ) , the deviation of z it from its
group average. This shows that the OLS estimator (4.22) can be obtained by regressing

                                                                  
                                                                  c Chung-Ming Kuan, 2001
102                             CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


yit − ȳ i on z it − z̄ i , i = 1, . . . , N , and t = 1, . . . , T . That is,
                N                                 −1  N                                 
                                                       
                                                                    
        b̂N T =    (Z i − z̄ i T )(Z i − T z̄ i )        (Z i − z̄ i T )(y i − T ȳ i )
                     i=1                                           i=1
                                                                                               (4.23)
                N T                               −1  N T                            
                                                      
              =      (z it − z̄ i )(z it − z̄ i )           (z it − z̄ i )(yit − ȳ i ) .
                     i=1 t=1                                    i=1 t=1

This estimator is known as the within-groups estimator because it is based on the
observations that are deviations from their own group averages.

      Let âN T denote the OLS estimator of the vector a of individual eﬀects. By the facts
that

        D  ŷ = D  DâN T + D Z b̂N T ,

and that the OLS residual vector is orthogonal to D, âN T can be computed as

        âN T = (D D)−1 D (y − Z b̂N T ),                                                    (4.24)

with the i th element being
                    1 
        âN T,i =    ( y − T Z i b̂N T ) = ȳ i − z̄ i b̂N T .
                    T T i

      When the classical conditions [A1] and [A2](i) hold for every equation in (4.20), we
have

        IE(y i ) = T ai,o + Z i bo ,         i = 1, 2, . . . , N.

Then, the OLS estimators âN T and b̂N T are unbiased for ao and bo , where the i th
element of ao is ai,o . Similar to Section 4.6, to ensure the BLUE property of these
estimators, it is also required that var(y) is a scalar covariance matrix. This amounts
to requiring that var(y i ) = σo2 I T for all i and that cov(y i , y j ) = 0 for every i = j.
Under these conditions, the variance-covariance matrix of b̂N T is

        var(b̂N T ) = σo2 [Z  (I N T − P D )Z]−1
                                                                     −1
                               
                               N 
                                 T
                     = σo2         (z it − z̄ i )(z it − z̄ i )          .
                               i=1 t=1

It is also easy to verify that the covariance matrix of the i th element of âN T is
                           1 2
        var(âN T,i ) =     σ + z̄ i [var(b̂N T )]z̄ i ;                                      (4.25)
                           T o


c Chung-Ming Kuan, 2001
4.7. MODELS FOR PANEL DATA                                                                103


see Exercise 4.8. The OLS estimator for the regression variance σo2 is

                      1               N    T
        2
      σ̂N T =                     (yit − âN T,i − z it b̂N T )2 .
                NT − N − k + 1
                                       i=1 t=1

               2
Substituting σ̂N T into the formulae of var(b̂N T ) and var(âN T,i ) we immediately obtain
their OLS estimators. On the other hand, if var(y i ) = σi2 I T so that the variances of
yit are constant within each group but diﬀerent across groups, we have the problem of
heteroskedasticity. If cov(y i , y j ) = σij I T for some i = j, we have spatial correlations
among groups, even though observations are serially uncorrelated. In both cases, the
OLS estimators are no longer the BLUEs, and FGLS estimation is needed.

   Observe that when [A1] and [A2](i) hold for every equation in (4.20),

      IE(ȳ i ) = ai,o + Z̄ i bo ,      i = 1, 2, . . . , N.

One may then expect to estimate the parameters from a speciﬁcation based on group-
averages. In particular, the estimator
            N                         −1  N                       
                                           
      b̌b =    (z̄ i − z̄)(z̄ i − z̄)         (z̄ i − z̄)(ȳ i − ȳ)                  (4.26)
                i=1                               i=1

is the OLS estimator computed from the following speciﬁcation:

      ȳ i = a + z̄ i b + ei ,      i = 1, . . . , N.                                 (4.27)

This is so because the sample means of ȳ i and z̄ i are just their respective overall
averages: ȳ and z̄. The estimator (4.26) is known as the between-groups estimator
because it is based on the deviations of group averages from their overall averages. As
shown in Exercise 4.9, the between-groups estimator is biased for bo when ﬁxed eﬀects
are present. This should not be surprising because, while there are N + k − 1 parameters
in the ﬁxed eﬀects model, the speciﬁcation (4.27) contains only N observations and only
permits estimation of k parameters.

   Consider also a speciﬁcation ignoring individual eﬀects:

      y i = T a + Z i b + ei ,         i = 1, . . . , N.                              (4.28)

The OLS estimator of b is
           N T                           −1  N T                      
                                             
     b̌p =        (z it − z̄)(z it − z̄)           (z it − z̄)(yit − ȳ) .            (4.29)
                i=1 t=1                                  i=1 t=1


                                                                    
                                                                    c Chung-Ming Kuan, 2001
104                             CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


When [A1] and [A2](i) hold for every equation in (4.20), one can see that (4.28) is in
eﬀect a speciﬁcation that omits n − 1 relevant dummy variables. It follows that b̌p
is a biased estimator for bo . Alternatively, it can be shown that the estimator (4.29)
is a weighted sum of the between- and within-groups estimators and hence known as
the “pooled” estimator; see Exercise 4.10. The pooled estimator b̌p is therefore biased
because b̌b is. These examples show that neither the between-groups estimator nor the
pooled estimator is a proper choice for the ﬁxed eﬀects model.


4.7.2       Random Eﬀects Model

Given the speciﬁcation (4.20) that allows for individual eﬀects:

        y i = T ai + Z i b + ei ,     i = 1, 2, . . . , N,

we now treat ai as random variables rather than parameters. Writing ai = a + ui with
a = IE(ai ), the speciﬁcation above can be expressed as

        y i = T a + Z i b + T ui + ei ,      i = 1, 2, . . . , N.                (4.30)

where T ui and ei form the error term. This speciﬁcation diﬀers from the ﬁxed eﬀects
model in that the intercept terms do not vary across i. The presence of ui also makes
(4.30) diﬀerent from the speciﬁcation that does not allow for individual eﬀects. Here,
group heterogeneity due to individual eﬀects is characterized by the random variable ui
and absorbed into the error term. Thus, (4.30) is known as the random eﬀects model.

      As far as regression coeﬃcients are concerned, (4.30) and (4.28) are virtually the
same. As such, the OLS estimator of b is just the pooled estimator b̌p . The OLS
estimator of a is

        ǎp = ȳ − z̄  b̌p .

If the classical conditions [A1] and [A2](i) hold for each equation such that

        IE(y i ) = T ao + Z i bo ,    i = 1, . . . , N,

b̌p and ǎp are unbiased for bo and ao . Note, however, that the pooled estimator would
be biased if the individual eﬀects were ﬁxed, as shown in the preceding section.

      When [A1] and [A2](i) hold, we can write

        y i = T ao + Z i bo + ˇ'i ,                                               (4.31)


c Chung-Ming Kuan, 2001
4.7. MODELS FOR PANEL DATA                                                                                 105


where ˇ'i = T ui + 'i . That is, ˇ'i contains two components: the random eﬀects T ui
and the disturbance 'i which exists even when there is no random eﬀect. Thus,

      var(y i ) = σu2 T T + var('i ) + 2 cov(T ui , 'i ),

where σu2 is var(ui ). As the ﬁrst term on the right-hand side above is a full matrix,
var(y i ) is not a scalar covariance matrix in general. It follows that b̌p and ǎp are not
the BLUEs.

   To perform FGLS estimation, more conditions on var(y i ) are needed. If var('i ) =
σo2 I T and IE(ui 'i ) = 0, we obtain a simpler form of var(y i ):

      S o := var(y i ) = σu2 T T + σo2 I T .

Under additional conditions that IE(ui uj ) = 0, E(ui 'j ) = 0 and IE('i 'j ) = 0 for all
i = j, we have cov(y i , y j ) = 0. Hence, var(y) simpliﬁes to a block diagonal matrix:

      Σo := var(y) = I N ⊗ S o .

                                                                                                      −1/2
It can be veriﬁed that the desired transformation matrix for GLS estimation is Σo                            =
       −1/2
IN ⊗ S o , where
                         c
      S −1/2
        o    = IT −          ,
                         T T T
                                                                −1/2             −1/2
and c = 1−σo2 /(T σu2 +σo2 )1/2 . Transformed data are S o             y i and S o      Z i , i = 1, . . . , N ,
and their t th elements are, respectively, yit − cȳ i and z it − cz̄ i . If σo2 = 0 so that the
disturbances 'i are absent, we have c = 1, so that

      Σ−1/2
       o    = I N ⊗ (I T − T T /T ) = I N T − P D ,

as in the ﬁxed eﬀects model. Consequently, the GLS estimator of b is nothing but
the within-groups estimator (4.22). It can be shown that the GLS estimator is also a
weighted average of the within- and between-groups estimators.

   To compute the FGLS estimator, we must estimate σu2 and σo2 . Pre-multiplying
(4.31) by T /T yields

      ȳ i = ao + z̄ i bo + ui + ¯'i .

Taking the diﬀerence of y i and ȳ i we have

      y i − T ȳ i = (Z i − T z̄ i )bo + ('i − T ¯'i ),

                                                                         
                                                                         c Chung-Ming Kuan, 2001
106                             CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


which does not involve ui . This suggests that, even when random eﬀects are present,
we can also estimate bo from the speciﬁcation

        y i − T ȳ i = (Z i − T z̄ i )b + ei ,           i = 1, . . . , N.

It is readily seen that the OLS estimator based on this speciﬁcation is the within-groups
estimator b̂N T . As ui have been eliminated, we can estimate σo2 , the variance of :it , by

                       1               N       T
        σ̂'2 =                    [(yit − ȳ i ) − (z it − z̄ i ) b̂N T ]2 ,
                 NT − N − k + 1
                                        i=1 i=1

which is also the variance estimator in the ﬁxed eﬀects model.

      By (4.31),

        ȳ i = ao + z̄ i bo + ui + ¯'i .

This suggests that bo can be estimated from the speciﬁcation based on group averages:

        ȳ i = a + z̄ i b + ei ,       i = 1, . . . , N.

This speciﬁcation is the same as (4.27) so that the OLS estimator of b is the between-
groups estimator b̂b . The resulting OLS residuals are

        ěi = (ȳ i − ȳ) − (z̄ i − z̄) b̌b ,       i = 1, . . . , N.

We can estimate

                 'i ) = σu2 + σo2 /T
        var(ui + ¯

        N
        i=1 ěi /(N − k), from which the estimator for σu can be calculated as
by            2                                         2


                   1  2 σ̂'2
                          N
        σ̂u2 =        ěi − .
                 N −k      T
                         i=1

With these two estimators σ̂u2 and σ̂'2 we can construct the transformation matrix for the
FGLS estimator, Ŝ −1/2 . It is clear that the FGLS estimator is, again, a very complex
function of y.


4.8       Limitations of the FGLS Method
In this chapter we relax only the classical condition [A2](ii) while maintaining [A1]
and [A2](i). The limitations of [A1] and [A2](i) discussed in Chapter 3.7 therefore still


c Chung-Ming Kuan, 2001
4.8. LIMITATIONS OF THE FGLS METHOD                                                   107


exist. In particular, stochastic regressors and nonlinear speciﬁcations are excluded in
the present context.

   Although the GLS and FGLS methods are designed to improve on estimation eﬃ-
ciency when there is a non-scalar covariance matrix Σo , they also create further diﬃcul-
ties. First, the GLS estimator is usually not available, except in some exceptional cases.
Second, a convenient FGLS estimator is available at the expense of more conditions on
Σo . If these simplifying conditions are incorrectly imposed, the resulting FGLS estima-
tor may perform poorly. Third, the ﬁnite-sample properties of the FGLS estimator are
typically unknown. In general, we do not know if an FGLS estimator is unbiased, nor
do we know its eﬃciency relative to the OLS estimator and its exact distribution. It is
therefore diﬃcult to draw statistical inferences from FGLS estimation results.


Exercises
 4.1 Given the linear speciﬁcation y = Xβ + e, suppose that the conditions [A1] and
     [A2](ii) hold and that var(y) = Σo . If the matrix X contains k eigenvectors of
     Σo which are normalized to unit length. What are the resulting β̂ T and β̂ GLS ?
     Explain your result.
                2
 4.2 Show that RGLS need not be bounded between zero and one.

 4.3 Given the linear speciﬁcation y = Xβ + e, suppose that the conditions [A1] and
     [A2](i) hold and that var(y) = Σo . Show directly that

           var(β̂ T ) − var(β̂ GLS )

     is a positive semi-deﬁnite matrix.

 4.4 Suppose that y = Xβ o + ' and the elements of ' are :t = α1 :t−1 + ut , where
     α1 = 1 and {ut } is a white noise with mean zero and variance σu2 . What are the
     properties of :t ? Is {:t } still weakly stationary?

 4.5 Suppose that y = Xβ o + ' and the elements of ' are :t = ut + α1 ut−1 , where
     |α1 | < 1 and {ut } is a white noise with mean zero and variance σu2 . Calculate
     the variance, autocovariances, and autocorrelations of :t and compare them with
     those of AR(1) disturbances.

 4.6 Let yt denote investment expenditure that is determined by expected earning x∗t :

           yt = ao + bo x∗t + ut .

                                                             
                                                             c Chung-Ming Kuan, 2001
108                       CHAPTER 4. GENERALIZED LEAST SQUARES THEORY


      When x∗t is adjusted adaptively:

             x∗t = x∗t−1 + (1 − λo )(xt − x∗t−1 ),    0 < λo < 1,

      show that yt can be represented by a model with a lagged dependent variable and
      moving average disturbances.

 4.7 Given the SUR speciﬁcation (4.17), show that the GLS estimator is the same as
      the OLS estimator when X i = X 0 for all i. Give an intuitive explanation of this
      result.

 4.8 Given the speciﬁcation (4.20), suppose that [A1] and [A2](i) hold for each group
      equation, var(y i ) = σo2 I T and cov(y i , y j ) = 0 for i = j. Prove (4.25).

 4.9 Given the speciﬁcation (4.27), suppose that [A1] and [A2](i) hold for each group
      equation. Find the expected value of the between-groups estimator (4.26).

4.10 Given the speciﬁcation (4.28), show that the pooled estimator (4.29) is a weighted
      sum of the within- and between-groups estimators. What is its expected value
      when [A1] and [A2](i) hold for each group equation.


References

Amemiya, Takeshi (1985). Advanced Econometrics, Cambridge, MA: Harvard Univer-
      sity Press.

Farebrother, R. W. (1980). The Durbin-Watson test for serial correlation when there is
      no intercept in the regression, Econometrica, 48, 1553–1563.

Goldberger, Arthur S. (1991). A Course in Econometrics, Cambridge, MA: Harvard
      University Press.

Greene, William H. (2000). Econometric Analysis, Fourth ed., New York, NY: Macmil-
      lan.

Wallis, K. F. (1972). Testing for fourth order autocorrelation in quarterly regression
      equations, Econometrica, 40, 617–636.





c Chung-Ming Kuan, 2001
Chapter 5

Probability Theory

The purpose of this chapter is to summarize some important concepts and results in
probability theory to be used subsequently. We formally deﬁne random variables and
moments (unconditional and conditional) under a measure-theoretic framework. Our
emphasis is on important limiting theorems, such as the law of large numbers and central
limit theorem, which play a crucial role in the asymptotic analysis of many econometric
estimators and tests. Davidson (1994) provides a complete and thorough treatment of
the topics in this chapter; see also Bierens (1994), Gallant (1997) and White (1984) for a
concise coverage. Many results here are taken freely from these references. The readers
may also consult other real analysis and probability textbooks for related topics.


5.1     Probability Space and Random Variables

5.1.1   Probability Space

The probability space associated with a random experiment is determined by three com-
ponents: the outcome space Ω, a collection of events (subsets of Ω) F, and a probability
measure assigned to the elements in F. Given the subset A of Ω, its complement is
Ac = {ω ∈ Ω : ω ∈ A}.

   In the probability space (Ω, F, IP), F is a σ-algebra (σ-ﬁeld) in the sense that it
satisﬁes the following requirements:

  1. Ω ∈ F;

  2. if A ∈ F, then Ac ∈ F;

  3. if A1 , A2 , . . . are in F, then ∪∞
                                        n=1 An ∈ F.


                                            109
110                                                          CHAPTER 5. PROBABILITY THEORY


The ﬁrst and second properties imply that Ωc = ∅ is also in F. Combining the second
and third properties we have from de Morgan’s law that
     ∞      c      ∞
        5           6
           An =        Acn ∈ F.
          n=1              n=1

A σ-algebra is thus closed under complementation, countable union and countable in-
tersection.
      The probability measure IP : F → [0, 1] is a real-valued set function satisfying the
following axioms:

   1. IP(Ω) = 1;

   2. IP(A) ≥ 0 for all A ∈ F;
                                                                              ∞
   3. if A1 , A2 , . . . ∈ F are disjoint, then IP(∪∞
                                                    n=1 An ) =                n=1 IP(An ).

From these axioms we easily deduce that IP(∅) = 0, IP(Ac ) = 1 − IP(A), IP(A) ≤ IP(B)
if A ⊆ B, and

        IP(A ∪ B) = IP(A) + IP(B) − IP(A ∩ B).

Moreover, if {An } is an increasing (decreasing) sequence in F with the limiting set A,
then limn IP(An ) = IP(A).
      Let C be a collection of subsets of Ω. The intersection of all the σ-algebras that
contain C is the smallest σ-algebra containing C; see Exercise 5.1. This σ-algebra is
referred to as the σ-algebra generated by C, denoted as σ(C). When Ω = R, the Borel
ﬁeld is the σ-algebra generated by all open intervals (a, b) in R. Note that open intervals,
closed intervals [a, b], half-open intervals (a, b] or half lines (−∞, b] can be obtained from
each other by taking complement, union and/or intersection. For example,
                   ∞                                              ∞ 
                   6         1                                     5         1.
        (a, b] =      a, b +   ,                        (a, b) =      a, b −    .
                             n                                               n
                   n=1                                             n=1

Thus, the collection of all closed intervals (half-open intervals, half lines) generates the
same Borel ﬁeld. As such, open intervals, closed intervals, half-open intervals and half
lines are also known as Borel sets. The Borel ﬁeld on Rd , denoted as B d , is generated
by all open hypercubes:

        (a1 , b1 ) × (a2 , b2 ) × · · · × (ad , bd ).

Equivalently, B d can be generated by all closed (half-open) hypercubes, or by

        (−∞, b1 ] × (−∞, b2 ] × · · · × (−∞, bd ].


c Chung-Ming Kuan, 2001
5.1. PROBABILITY SPACE AND RANDOM VARIABLES                                                  111


5.1.2     Random Variables

Let B denote the Borel ﬁeld on R. A random variable z is a function z : Ω → R such
that for every B ∈ B, the inverse image of B under z is in F, i.e.,

       z −1 (B) = {ω : z(ω) ∈ B} ∈ F.

We also say that z is a F/B-measurable (or simply F-measurable) function. A Rd -
valued random variable z is a function z : Ω → Rd that is F/B d -measurable. Given the
random vector z, its inverse images z −1 (B) form a σ-algebra, denoted as σ(z). It can
be shown that σ(z) is the smallest σ-algebra contained in F such that z is measurable.
We usually interpret σ(z) as the set containing all the information associated with z.

   A function g : R → R is said to be B-measurable or Borel measurable if

       {ζ ∈ R : g(ζ) ≤ b} ∈ B.

If z is a random variable deﬁned on (Ω, F, IP), then g(z) is also a random variable deﬁned
on the same probability space provided that g is Borel measurable. Note that the func-
tions we usually encounter are indeed Borel measurable; non-measurable functions are
very exceptional and hence are not of general interest. Similarly, for the d-dimensional
random vector z, g(z) is a random variable provided that g is B d -measurable.

   Recall from Section 2.1 that the joint distribution function of z is the non-decreasing,
right-continuous function Fz such that for ζ = (ζ1 . . . ζd ) ∈ Rd ,

       Fz (ζ) = IP{ω ∈ Ω : z1 (ω) ≤ ζ1 , . . . , zd (ω) ≤ ζd },

with

               lim            Fz (ζ) = 0,              lim           Fz (ζ) = 1.
       ζ1 →−∞, ... , ζd →−∞                     ζ1 →∞, ... , ζd →∞

The marginal distribution function of the i th component of z is such that

       Fzi (ζi ) = IP{ω ∈ Ω : zi (ω) ≤ ζi } = Fz (∞, . . . , ∞, ζi , ∞, . . . , ∞).

Note that while IP is a set function deﬁned on F, the distribution function of z is a
point function deﬁned on Rd .

   Two random variables y and z are said to be (pairwise) independent if, and only if,
for any Borel sets B1 and B2 ,

       IP(y ∈ B1 and z ∈ B2 ) = IP(y ∈ B1 ) IP(z ∈ B2 ).

                                                                         
                                                                         c Chung-Ming Kuan, 2001
112                                                               CHAPTER 5. PROBABILITY THEORY


This immediately leads to the standard deﬁnition of independence: y and z are indepen-
dent if, and only if, their joint distribution is the product of their marginal distributions,
as in Section 2.1. A sequence of random variables {zi } is said to be totally independent
if
                                 
                 6
        IP           {zi ∈ Bi }       =           IP(zi ∈ Bi ),
                 all i                    all i

for any Borel sets Bi . In what follows, a totally independent sequence will be referred
to an independent sequence or a sequence of independent variables for convenience. For
an independent sequence, we have the following generalization of Lemma 2.1.

Lemma 5.1 Let {zi } be a sequence of independent random variables and hi , i =
1, 2, . . . , be Borel-measurable functions. Then {hi (zi )} is also a sequence of independent
random variables.

5.1.3        Moments and Norms

The expectation of the i th element of z is
               
     IE(zi ) =   zi (ω) d IP(ω),
                         Ω

where the right-hand side is a Lebesgue integral. In view of the distribution function
deﬁned above, a change of ω causes the realization of z to change so that
                             
     IE(zi ) =   ζi dFz (ζ) =   ζi dFzi (ζi ),
                         Rd                        R

where Fzi is the marginal distribution function of the i th component of z, as deﬁned in
Section 2.2. For the Borel measurable function g of z,
                                     
      IE[g(z)] =    g(z(ω)) d IP(ω) =    g(ζ) dFz (ζ).
                              Ω                            Rd

Other moments, such as variance and covariance, can also be deﬁned as Lebesgue inte-
grals with respect to the probability measure; see Section 2.2.

      A function g is said to be convex on a set S if for any a ∈ [0, 1] and any x, y in S,
                      
        g ax + (1 − a)y ≤ ag(x) + (1 − a)g(y);

g is concave on S if the inequality above is reversed. For example, g(x) = x2 is convex,
and g(x) = log x for x > 0 is concave. The result below is concerned with convex
(concave) transformations.


c Chung-Ming Kuan, 2001
5.1. PROBABILITY SPACE AND RANDOM VARIABLES                                              113


Lemma 5.2 (Jensen) For the Borel measurable function g that is convex on the sup-
port of the integrable random variable z, suppose that g(z) is also integrable. Then,

      g(IE(z)) ≤ IE[g(z)];

the inequality reverses if g is concave.


   For the random variable z with ﬁnite p th moment, let zp = [IE(z p )]1/p denote its
Lp -norm. Also deﬁne the inner product of two square integrable random variables zi
and zj as their cross moment:

      zi , zj = IE(zi zj ).

Then, L2 -norm can be obtained from the inner product as zi 2 = zi , zi 1/2 . It is easily
seen that for any c > 0 and p > 0,
                                               
      c IP(|z| ≥ c) = c
       p               p
                           1{ζ:|ζ|≥c} dFz (ζ) ≤               |ζ|p dFz (ζ) ≤ IE |z|p ,
                                                  {ζ:|ζ|≥c}

where 1{ζ:|ζ|≥c} is the indicator function which equals one if |ζ| ≥ c and equals zero
otherwise. This establishes the following result.

Lemma 5.3 (Markov) Let z be a random variable with ﬁnite p th moment. Then,

                      IE |z|p
      IP(|z| ≥ c) ≤           ,
                        cp
where c is a positive real number.

For p = 2, Lemma 5.3 is also known as the Chebyshev inequality. If c is small such that
IE |z|p /cp > 1, Markov’s inequality is trivial. When c tends to inﬁnity, the probability
that z assumes very extreme values will be vanishing at the rate c−p .

   Another useful result in probability theory is stated below without proof.

Lemma 5.4 (Hölder) Let y be a random variable with ﬁnite p th moment (p > 1) and
z a random variable with ﬁnite q th moment (q = p/(p − 1)). Then,

      IE |yz| ≤ yp zq .




For p = 2, we have IE |yz| ≤ y2 z2 . By noting that | IE(yz)| < IE |yz|, we immedi-
ately have the next result; cf. Lemma 2.3.

                                                                   
                                                                   c Chung-Ming Kuan, 2001
114                                                   CHAPTER 5. PROBABILITY THEORY


Lemma 5.5 (Cauchy-Schwartz) Let y and z be two square integrable random vari-
ables. Then,

        | IE(yz)| ≤ y2 z2 .



Let y = 1 and x = z p . Then for q > p and r = q/p, Hölder’s inequality also ensures
that

        IE |z p | ≤ xr yr/(r−1) = [IE(z pr )]1/r = [IE(z q )]p/q .

This shows that when a random variable has ﬁnite q th moment, it must also have ﬁnite
p th moment for any p < q, as stated below.

Lemma 5.6 (Liapunov) Let z be a random variable with ﬁnite q th moment. Then
for p < q, zp ≤ zq .

      The inequality below states that the Lp -norm of a ﬁnite sum is less than the sum of
individual Lp -norms.

Lemma 5.7 (Minkowski) Let zi , i = 1, . . . , n, be random variables with ﬁnite p th
moment (p ≥ 1). Then,
    7       7
    7n     7   n
    7       7
    7    zi 7 ≤    zi p .
    7       7
         i=1     p    i=1



When there are only two random variables in the sum, this is just the triangle inequality
for Lp -norms; see also Exercise 5.4.


5.2       Conditional Distribution and Moments
Given two events A and B in F, if it is known that B has occurred, the outcome space
is restricted to B, so that the outcomes of A must be in A ∩ B. The likelihood of A is
thus characterized by the conditional probability

        IP(A | B) = IP(A ∩ B)/ IP(B),

for IP(B) = 0. It can be shown that IP(·|B) satisﬁes the axioms for probability mea-
sures; see Exerise 5.5. This concept is readily extended to construct conditional density
function and conditional distribution function.


c Chung-Ming Kuan, 2001
5.2. CONDITIONAL DISTRIBUTION AND MOMENTS                                                     115


5.2.1    Conditional Distributions

Let y and z denote two integrable random vectors such that z has the density function
fz . For fz (ζ) = 0, deﬁne the conditional density function of z given y = η as

                           fz,y (ζ, η)
      fz|y (ζ | y = η) =               ,
                             fy (η)

which is clearly non-negative whenever it is deﬁned. This function also integrates to
one on Rd because
                                                
                                          1                                1
         fz|y (ζ | y = η) dζ =                        fz,y (ζ, η) dζ =         f (η) = 1.
        Rd                              fy (η)   Rd                      fy (η) y

Thus, fz|y is a legitimate density function. For example, the bivariate density function
of two random variables z and y forms a surface on the zy-plane. By ﬁxing y = η,
we obtain a cross section (slice) under this surface. Dividing the joint density by the
marginal density fy (η) amounts to adjusting the height of this slice so that the resulting
area integrates to one.

   Given the conditional density function fz|y , we have for A ∈ B d ,
                               
      IP(z ∈ A | y = η) =              fz|y (ζ | y = η) dζ.
                                   A

Note that this conditional probability is deﬁned even when IP(y = η) may be zero. In
particular, when

      A = (−∞, ζ1 ] × · · · × (−∞, ζd ],

we obtain the conditional distribution function:

      Fz|y (ζ | y = η) = IP(z1 ≤ ζ1 , . . . , zd ≤ ζd | y = η).

When z and y are independent, the conditional density (distribution) simply reduces
to the unconditional density (distribution).


5.2.2    Conditional Moments

Analogous to unconditional expectation, the conditional expectation of the integrable
random variable zi given the information y = η is
                      
     IE(zi | y = η) =    ζi dFz|y (ζi | y = η);
                           R

                                                                          
                                                                          c Chung-Ming Kuan, 2001
116                                           CHAPTER 5. PROBABILITY THEORY


IE(z | y = η) is deﬁned elementwise. By allowing y to vary across all possible values η,
we obtain the conditional expectation function IE(z | y) whose realization depends on
η, the realization of y. Thus, IE(z | y) is a function of y and hence a random vector.

      More generally, we can take a suitable σ-algebra as a conditioning set and deﬁne
IE(z | G), where G is a sub-σ-algebra of F. Similar to the discussion above, IE(z | G)
varies with the occurrence of each G ∈ G. Speciﬁcally, for the integrable random vector
z, IE(z | G) is the G-measurable random variable satisfying
                          
          IE(z | G) d IP =   z d IP,
         G                   G

for all G ∈ G. By setting G = σ(y), the σ-algebra generated by y, we can write

        IE(z | y) = IE[z | σ(y)],

which is interpreted as the expectation of z given all the information associated with
y. Note that the unconditional expectation IE(z) can be viewed as the expectation of
z conditional on the trivial σ-algebra {Ω, ∅}, i.e., the smallest σ-algebra that contains
no extra information from any random vectors.

      Similar to unconditional expectations, conditional expectations are monotonic: if
z ≥ x with probability one, then IE(z | G) ≥ IE(x | G) with probability one; in particular,
if z ≥ 0 with probability one, then IE(z | G) ≥ 0 with probability one. Moreover, If z
is independent of y, then IE(z | y) = IE(z). For example, if z is a constant vector c
which is independent of any random variable, then IE(z | y) = c. The linearity result
below is analogous to Lemma 2.2 for unconditional expectations.

Lemma 5.8 Let z (d × 1) and y (c × 1) be integrable random vectors and A (n × d)
and B (n × c) be non-stochastic matrices. Then with probability one,

        IE(Az + By | G) = A IE(z | G) + B IE(y | G).

If b (n × 1) is a non-stochastic vector, IE(Az + b | G) = A IE(z | G) + b with probability
one.


      From the deﬁnition of conditional expectation, we immediately have
                          
          IE(z | G) d IP =    z d IP;
         Ω                   Ω

that is, IE[IE(z | G)] = IE(z). This is known as the law of iterated expectations. As
IE(z) is also the conditional expectation with respect to the trivial (smallest) σ-algebra,


c Chung-Ming Kuan, 2001
5.2. CONDITIONAL DISTRIBUTION AND MOMENTS                                                             117


the equality above suggests that if conditional expectations are taken sequentially with
respect to diﬀerent σ-algebras, only the one with respect to a smaller σ-algebra matters.
For example, for k random vectors y 1 , . . . , y k ,

      IE[IE(z | y 1 , . . . , y k ) | y 1 , . . . , y k−1 ] = IE(z | y 1 , . . . , y k−1 ).

A more general result is given below; see Exercise 5.6.

Lemma 5.9 (Law of Iterated Expectations) Let G and H be two sub-σ-algebras of
F such that G ⊆ H. Then for the integrable random vector z,

      IE[IE(z | H) | G] = IE[IE(z | G) | H] = IE(z | G);

in particular, IE[IE(z | G)] = IE(z).


    For a G-measurable random vector z, the information in G does not improve on our
understanding of z, so that IE(z | G) = z with probability one. That is, z can be
treated as known in IE(z | G) and taken out from the conditional expectation. Thus,

      IE(zx | G) = z IE(x | G).

In particular, z can be taken out from the conditional expectation when z itself is a
conditioning variable. This result is generalized as follows.

Lemma 5.10 Let z be a G-measurable random vector. Then for any Borel-measurable
function g,

      IE[g(z)x | G] = g(z) IE(x | G),

with probability one.


    Two square integrable random variables z and y are said to be orthogonal if their
inner product IE(zy) = 0. This deﬁnition allows us to discuss orthogonal projection in
the space of square integrable random vectors. Let z be a square integrable random
variable and z̃ be a G-measurable random variable. Then, by Lemma 5.9 (law of iterated
expectations) and Lemma 5.10,
        8             9     - 8                    9.
      IE z − IE(z | G) z̃ = IE IE z − IE(z | G) z̃ | G
                                       8                          9
                                   = IE IE(z | G)z̃ − IE(z | G)z̃

                                   = 0.

                                                                                  
                                                                                  c Chung-Ming Kuan, 2001
118                                               CHAPTER 5. PROBABILITY THEORY


That is, the diﬀerence between z and its conditional expectation IE(z | G) must be
orthogonal to any G-measurable random variable. It can then be seen that for any
square integrable, G-measurable random variable z̃,

        IE(z − z̃)2 = IE[z − IE(z | G) + IE(z | G) − z̃]2

                    = IE[z − IE(z | G)]2 + IE[IE(z | G) − z̃]2

                    ≥ IE[z − IE(z | G)]2 .

where in the second equality the cross-product term vanishes because both IE(z | G)
and z̃ are G-measurable and hence orthogonal to z − IE(z | G). That is, among all
G-measurable random variables that are also square integrable, IE(z | G) is the closest
to z in terms of the L2 -norm. This shows that IE(z | G) is the orthogonal projection of
z onto the space of all G-measurable, square integrable random variables.

Lemma 5.11 Let z be a square integrable random variable. Then

        IE[z − IE(z | G)]2 ≤ IE(z − z̃)2 ,

for any G-measurable random variable z̃.


In particular, let G = σ(y), where y is a square integrable random vector. Lemma 5.11
implies that
          8              92             2
        IE z − IE z | σ(y)    ≤ IE z − h(y) ,

for any Borel-measurable function h such that h(y) is also square integrable. Thus,
IE[z | σ(y)] minimizes the L2 -norm z − h(y)2 , and its diﬀerence from z is orthogonal
to any function of y that is also square integrable. We may then say that, given all the
information generated from y, IE(z | σ(y)) is the “best approximation” of z in terms of
the L2 -norm (the best L2 predictor).

      The conditional variance-covariance matrix of z given y is
                                                           
        var(z | y) = IE [z − IE(z | y)][z − IE(z | y)] | y

                   = IE(zz  | y) − IE(z | y) IE(z | y) .

Similar to unconditional variance-covariance matrix, we have for non-stochastic matrices
A and b,

        var(Az + b | y) = A var(z | y) A ,


c Chung-Ming Kuan, 2001
5.3. MODES OF CONVERGENCE                                                             119


which is nonsingular provided that A has full row rank and var(z | y) is positive deﬁnite.
It can also be shown that
                                            
      var(z) = IE[var(z | y)] + var IE(z | y) ;

see Exercise 5.7. That is, the variance of y can be expressed as the sum of two com-
ponents: the mean of its conditional variance and the variance of its conditional mean.
This is also known as the decomposition of analysis of variance.

Example 5.12 Suppose that (y  x ) is distributed as a multivariate normal random
vector:
                                               
          y            µy          Σy    Σxy
              ∼N             ,                      .
          x            µx          Σxy   Σx
It is well known that the conditional distribution of y given x is also normal. Moreover,
it can be shown that

      IE(y | x) = µy − Σxy Σ−1
                             x (x − µx),

a linear function of x.     By the analysis-of-variance decomposition, the conditional
variance-covariance matrix of y is
                                        
      var(y | x) = var(y) − var IE(y | x) = Σy − Σxy Σ−1
                                                       x Σxy ,

which does not depend on x.


5.3       Modes of Convergence
Consider now a sequence of random variables {zn (ω)}n=1,2,... deﬁned on the probability
space (Ω, F, IP). For a given ω, {zn } is a realization (a sequence of sample values) of
the random element ω with the index n, and that for a given n, zn is a random variable
which assumes diﬀerent values depending on ω. In this section we will discuss various
modes of convergence for sequences of random variables.

5.3.1     Almost Sure Convergence

We ﬁrst introduce the concept of almost sure convergence (convergence with probability
one). Suppose that {zn } is a sequence of random variables and z is a random variable,
all deﬁned on the probability space (Ω, F, IP). The sequence {zn } is said to converge to
z almost surely if, and only if,

      IP(ω : zn (ω) → z(ω) as n → ∞) = 1,

                                                             
                                                             c Chung-Ming Kuan, 2001
120                                            CHAPTER 5. PROBABILITY THEORY

                        a.s.
denoted as zn −→ z or zn → z a.s. Note that for a given ω, the realization zn (ω) may
or may not converge to z(ω). Almost sure convergence requires that zn (ω) → z(ω) for
almost all ω ∈ Ω, except for those ω in a set with probability zero. That is, almost
all the realizations zn (ω) will be eventually close to z(ω) for all n suﬃciently large; the
event that zn will not approach z is improbable. When z n and z are both Rd -valued,
almost sure convergence is deﬁned elementwise. That is, z n → z a.s. if every element
of z n converges almost surely to the corresponding element of z.

      The following result shows that continuous transformation preserves almost sure
convergence.


Lemma 5.13 Let g : R → R be a function continuous on Sg ⊆ R.

                 a.s.                                                                     a.s.
  [a] If zn −→ z, where z is a random variable such that IP(z ∈ Sg ) = 1, then g(zn ) −→
         g(z).

                 a.s.                                                              a.s.
  [b] If zn −→ c, where c is a real number at which g is continuous, then g(zn ) −→ g(c).




Proof: Let Ω0 = {ω : zn (ω) → z(ω)} and Ω1 = {ω : z(ω) ∈ Sg }. Thus, for ω ∈ (Ω0 ∩Ω1 ),
continuity of g ensures that g(zn (ω)) → g(z(ω)). Note that

         (Ω0 ∩ Ω1 )c = Ωc0 ∪ Ωc1 ,

which has probability zero because IP(Ωc0 ) = IP(Ωc1 ) = 0. It follows that Ω0 ∩ Ω1 has
probability one. This proves that g(zn ) → g(z) with probability one. The second
assertion is just a special case of the ﬁrst result.   ✷

      Lemma 5.13 is easily generalized to Rd -valued random variables. For example,
      a.s.
z n −→ z implies

                           a.s.
         z1,n + z2,n −→ z1 + z2 ,
                           a.s.
             z1,n z2,n −→ z1 z2 ,
                           a.s.
          2
         z1,n    2
              + z2,n −→ z12 + z22 ,

where z1,n , z2,n are two elements of z n and z1 , z2 are the corresponding elements of z.
Also, provided that z2 = 0 with probability one, z1,n /z2,n → z1 /z2 a.s.


c Chung-Ming Kuan, 2001
5.3. MODES OF CONVERGENCE                                                                  121


5.3.2     Convergence in Probability

A weaker convergence concept is convergence in probability. A sequence of random
variables {zn } is said to converge to z in probability if for every : > 0,

        lim IP(ω : |zn (ω) − z(ω)| > :) = 0,
      n→∞

or equivalently,

        lim IP(ω : |zn (ω) − z(ω)| ≤ :) = 1,
      n→∞

                   IP
denoted as zn −→ z. We also say that z is the probability limit of zn , denoted as
plim zn = z. In particular, if the probability limit of zn is a constant c, all the probability
mass of zn will concentrate around c when n becomes large. For Rd -valued random
variables z n and z, convergence in probability is also deﬁned elementwise.

   In the deﬁnition of convergence in probability, the events Ωn (:) = {ω : |zn (ω) −
z(ω)| ≤ :} vary with n, and convergence is referred to the probabilities of such events:
pn = IP(Ωn (:)), rather than the random variables zn . By contrast, almost sure con-
vergence is related directly to the behaviors of random variables. For convergence in
probability, the event Ωn that zn will be close to z becomes highly likely when n tends
to inﬁnity, or its complement (zn will deviate from z by a certain distance) becomes
highly unlikely when n tends to inﬁnity. Whether zn will converge to z is not of any
concern in convergence in probability.

   More speciﬁcally, let Ω0 denote the set of ω such that zn (ω) converges to z(ω). For
ω ∈ Ω0 , there is some m such that ω is in Ωn (:) for all n > m. That is,
             5 ∞
             ∞ 6
      Ω0 ⊆              Ωn (:) ∈ F.
             m=1 n=m

As ∩∞
    n=m Ωn (:) is also in F and non-decreasing in m, it follows that
                   ∞ ∞                       ∞          
                     5 6                         6                       
     IP(Ω0 ) ≤ IP            Ωn (:) = lim IP        Ωn (:) ≤ lim IP Ωm (:) .
                                            m→∞                      m→∞
                        m=1 n=m                     n=m

This inequality proves that almost sure convergence implies convergence in probability,
but the converse is not true in general. We state this result below.
                         a.s.          IP
Lemma 5.14 If zn −→ z, then zn −→ z.

   The following well-known example shows that when there is convergence in proba-
bility, the random variables themselves may not even converge for any ω.

                                                                
                                                                c Chung-Ming Kuan, 2001
122                                               CHAPTER 5. PROBABILITY THEORY


Example 5.15 Let Ω = [0, 1] and IP be the Lebesgue measure (i.e., IP{(a, b]} = b − a
for (a, b] ⊆ [0, 1]). Consider the sequence {In } of intervals [0, 1], [0, 1/2), [1/2, 1], [0, 1/3),
[1/3, 2/3), [2/3, 1], . . . , and let zn = 1In be the indicator function of In : zn (ω) = 1 if
ω ∈ In and zn = 0 otherwise. When n tends to inﬁnity, In shrinks toward a singleton
which has the Lebesgue measure zero. For 0 < : < 1, we then have

        IP(|zn | > :) = IP(In ) → 0,
                     IP
which shows zn −→ 0. On the other hand, it is easy to see that each ω ∈ [0, 1] must
be covered by inﬁnitely many intervals. Thus, given any ω ∈ [0, 1], zn (ω) = 1 for
inﬁnitely many n, and hence zn (ω) does not converge to zero. Note that convergence in
probability permits zn to deviate from the probability limit inﬁnitely often, but almost
sure convergence does not, except for those ω in the set of probability zero.              ✷


      Intuitively, if var(zn ) vanishes asymptotically, the distribution of zn would shrink
toward its mean IE(zn ). If, in addition, IE(zn ) tends to a constant c (or IE(zn ) = c), then
zn ought to be degenerate at c in the limit. These observations suggest the following
suﬃcient conditions for convergence in probability; see Exercises 5.8 and 5.9. In many
cases, it is easier to establish convergence in probability by verifying these conditions.

Lemma 5.16 Let {zn } be a sequence of square integrable random variables. If IE(zn ) →
                                 IP
c and var(zn ) → 0, then zn −→ c.


      Analogous to Lemma 5.13, continuous functions also preserve convergence in prob-
ability.

Lemma 5.17 Let g : Rt R be a function continuous on Sg ⊆ R.
                IP                                                                               IP
  [a] If zn −→ z, where z is a random variable such that IP(z ∈ Sg ) = 1, then g(zn ) −→
        g(z).
                           IP
  [b] (Slutsky) If zn −→ c, where c is a real number at which g is continuous, then
                IP
        g(zn ) −→ g(c).


Proof: By the continuity of g, for each : > 0, we can ﬁnd a δ > 0 such that

        {ω : |zn (ω) − z(ω)| ≤ δ} ∩ {ω : z(ω) ∈ Sg }

                     ⊆ {ω : |g(zn (ω)) − g(z(ω))| ≤ :}.


c Chung-Ming Kuan, 2001
5.3. MODES OF CONVERGENCE                                                                 123


Taking complementation of both sides and noting that the complement of {ω : z(ω) ∈
Sg } has probability zero, we have

      IP(|g(zn ) − g(z)| > :) ≤ IP(|zn − z| > δ).

As zn converges to z in probability, the right-hand side converges to zero and so does
the left-hand side.        ✷

   Lemma 5.17 is readily generalized to Rd -valued random variables. For instance,
    IP
z n −→ z implies
                      IP
         z1,n + z2,n −→ z1 + z2 ,
                      IP
            z1,n z2,n −→ z1 z2 ,
                      IP
          2
         z1,n    2
              + z2,n −→ z12 + z22 ,

where z1,n , z2,n are two elements of z n and z1 , z2 are the corresponding elements of z.
                                                                IP
Also, provided that z2 = 0 with probability one, z1,n /z2,n −→ z1 /z2 .

5.3.3      Convergence in Distribution

Another convergence mode, known as convergence in distribution or convergence in law,
concerns the behavior of the distribution functions of random variables. Let Fzn and Fz
be the distribution functions of zn and z, respectively. A sequence of random variables
                                                                 D
{zn } is said to converge to z in distribution, denoted as zn −→ z, if

         lim Fzn (ζ) = Fz (ζ),
      n→∞

for every continuity point ζ of Fz . That is, regardless the distributions of zn , convergence
in distribution ensures that Fzn will be arbitrarily close to Fz for all n suﬃciently large.
The distribution Fz is thus known as the limiting distribution of zn . We also say that
                                                          A
zn is asymptotically distributed as Fz , denoted as zn ∼ Fz .
                                               D
   For random vectors {z n } and z, z n −→ z if the joint distributions Fzn converge
to Fz for every continuity point ζ of Fz . It is, however, more cumbersome to show
convergence in distribution for a sequence of random vectors. The so-called Cramér-
Wold device allows us to transform this multivariate convergence problem to a univariate
one. This result is stated below without proof.

Lemma 5.18 (Cramér-Wold Device) Let {z n } be a sequence of random vectors in
                  D                        D
Rd . Then z n −→ z if and only if α z n −→ α z for every α ∈ Rd such that α α = 1.

                                                                
                                                                c Chung-Ming Kuan, 2001
124                                                CHAPTER 5. PROBABILITY THEORY


      There is also a uni-directional relationship between convergence in probability and
convergence in distribution. To see this, note that for some arbitrary : > 0 and a
continuity point ζ of Fz , we have

          IP(zn ≤ ζ) = IP({zn ≤ ζ} ∩ {|zn − z| ≤ :}) + IP({zn ≤ ζ} ∩ {|zn − z| > :})

                      ≤ IP(z ≤ ζ + :) + IP(|zn − z| > :).

Similarly,

          IP(z ≤ ζ − :) ≤ IP(zn ≤ ζ) + IP(|zn − z| > :).
          IP
If zn −→ z, then by passing to the limit and noting that : is arbitrary, the inequalities
above imply

          lim IP(zn ≤ ζ) = IP(z ≤ ζ).
          n→∞

That is, Fzn (ζ) → Fz (ζ). The converse is not true in general, however.

      When zn converges in distribution to a real number c, it is not diﬃcult to show
that zn also converges to c in probability. In this case, these two convergence modes
are equivalent. To be sure, note that a real number c can be viewed as a degenerate
random variable with the distribution function:
             "
               0, ζ < c,
     F (ζ) =
               1, ζ ≥ c,

                                                                    D
which is a step function with a jump point at c. When zn −→ c, all the probability mass
                                                                              IP
of zn will concentrate at c as n becomes large; this is precisely what zn −→ c means.
More formally, for any : > 0,

          IP(|zn − c| > :) = 1 − [Fzn (c + :) − Fzn ((c − :)− )],
                                                                              D
where (c − :)− denotes the point adjacent to and less than c − :. Now, zn −→ c implies
that Fzn (c + :) − Fzn ((c − :)− ) converges to one, so that IP(|zn − c| > :) converges to
zero. We summarizes these results below.

                           IP               D                           IP
Lemma 5.19 If zn −→ z, thenzn −→ z. For a constant c, zn −→ c is equivalent to
      D
zn −→ c.


      The continuous mapping theorem below asserts that continuous functions preserve
convergence in distribution; cf. Lemmas 5.13 and 5.17.


c Chung-Ming Kuan, 2001
5.4. ORDER NOTATIONS                                                                         125


Lemma 5.20 (Continuous Mapping Theorem) Let g : R → R be a function con-
                                                                                         D
tinuous almost everywhere on R, except for at most countably many points. If zn −→ z,
               D
then g(zn ) −→ g(z).


For example, if zn converges in distribution to the standard normal random variable, the
limiting distribution of zn2 is χ2 (1). Generalizing this result to Rd -valued random vari-
ables, we can see that when z n converges in distribution to the d-dimensional standard
normal random variable, the limiting distribution of z n z n is χ2 (d).

   Two sequences of random variables {yn } and {zn } are said to be asymptotically
equivalent if their diﬀerences yn − zn converge to zero in probability. Intuitively, the
limiting distributions of two asymptotically equivalent sequences, if exist, ought to be
the same. This is stated in the next result without proof.

Lemma 5.21 Let {yn } and {zn } be two sequences of random vectors such that yn −
    IP              D               D
zn −→ 0. If zn −→ z, then yn −→ z.


The next result is concerned with two sequences of random variables such that one
converges in distribution and the other converges in probability.

Lemma 5.22 If yn converges in probability to a constant c and zn converges in dis-
                                   D                  D                     D
tribution to z, then yn + zn −→ c + z, yn zn −→ cz, and zn /yn −→ z/c if c = 0.




5.4        Order Notations
It is typical to use order notations to describe the behavior of a sequence of numbers,
whether it converges or not. Let {cn } denote a sequence of positive real numbers.

   1. Given a sequence {bn }, we say that bn is (at most) of order cn , denoted as bn =
         O(cn ), if there exists a ∆ < ∞ such that |bn |/cn ≤ ∆ for all suﬃciently large n.
         When cn diverges, bn cannot diverge faster than cn ; when cn converges to zero, the
         rate of convergence of bn is no slower than that of cn . For example, the polynomial
                                                                           n
         a + bn is O(n), and the partial sum of a bounded sequence         i=1 bi is O(n). Note
         that an O(1) sequence is a bounded sequence.

   2. Given a sequence {bn }, we say that bn is of smaller order than cn , denoted as
         bn = o(cn ), if bn /cn → 0. When cn diverges, bn must diverge slower than cn ; when
         cn converges to zero, the rate of convergence of bn should be faster than that of cn .

                                                                 
                                                                 c Chung-Ming Kuan, 2001
126                                              CHAPTER 5. PROBABILITY THEORY


        For example, the polynomial a + bn is o(n1+δ ) for any δ > 0, and the partial sum
          n
          i=1 α , |α| < 1, is o(n). Note that an o(1) sequence is a sequence that converges
               i

        to zero.

If bn is a vector (matrix), bn is said to be O(cn ) (o(cn )) if every element of bn is O(cn )
(o(cn )). It is also easy to verify the following results; see Exercise 5.10.

Lemma 5.23 Let {an } and {bn } be two non-stochastic sequences.

 (a) If an = O(nr ) and bn = O(ns ), then an bn = O(nr+s ) and an + bn = O(nmax(r,s) ).

 (b) If an = o(nr ) and bn = o(ns ), then an bn = o(nr+s ) and an + bn = o(nmax(r,s) ).

  (c) If an = O(nr ) and bn = o(ns ), then an bn = o(nr+s ) and an + bn = O(nmax(r,s) ).


      The order notations can be easily extended to describe the behavior of sequences of
random variables. A sequence of random variables {zn } is said to be Oa.s. (cn ) (or O(cn )
almost surely) if zn /cn is O(1) a.s., and it is said to be OIP (cn ) (or O(cn ) in probability)
if for every : > 0, there is some ∆ such that

        IP(|zn |/cn ≥ ∆) ≤ :,
                                                                                              a.s.
for all n suﬃciently large. Similarly, {zn } is oa.s. (cn ) (or o(cn ) almost surely) if zn /cn −→
                                                            IP
0, and it is oIP (cn ) (or o(cn ) in probability) if zn /cn −→ 0.
      If {zn } is Oa.s. (1) (oa.s (1)), we say that zn is bounded (vanishing) almost surely; if
{zn } is OIP (1) (oIP (1)), zn is bounded (vanishing) in probability. Note that Lemma 5.23
also holds for stochastic order notations. In particular, if a sequence of random variables
is bounded almost surely (in probability) and another sequence of random variables is
vanishing almost surely (in probability), the products of their corresponding elements
are vanishing almost surely (in probability). That is, yn = Oa.s. (1) and zn = oa.s (1),
then yn zn is oa.s (1).
                   D
      When zn −→ z, we have known that zn does not converge in probability to z in
general, but more can be said about the behavior of zn . Let ζ be a continuity point of
Fz . Then for any : > 0, we can choose a suﬃciently large ζ such that IP(|z| > ζ) < :/2.
          D
As zn −→ z, we can also choose n large enough such that

        IP(|zn | > ζ) − IP(|z| > ζ) < :/2,

which implies IP(|zn | > ζ) < :. This shows that:
                                                                                   D
Lemma 5.24 Let {zn } be a sequence of random vectors such that zn −→ z. Then
zn = OIP (1).


c Chung-Ming Kuan, 2001
5.5. LAW OF LARGE NUMBERS                                                           127


5.5     Law of Large Numbers
The law of large numbers is concerned with the averaging behavior of random variables
and is one of the most important results in probability theory. A sequence of integrable
random variables {zt } is said to obey a strong law of large numbers (SLLN) if

      1
         T
                         a.s.
           [z − IE(zt )] −→ 0,                                                     (5.1)
      T t=1 t

and it is said to obey a weak law of large numbers (WLLN) if

      1
         T
                        IP
        [zt − IE(zt )] −→ 0.                                                       (5.2)
      T
         t=1

Thus, a law of large numbers ensures that the sample average essentially follows its
mean behavior; random irregularities (deviations from the mean) are eventually “wiped
out” by averaging. For a sequence of random vectors (matrices), a SLLN (WLLN) is
deﬁned elementwise.

   According to these deﬁnitions, zt may or may not be independent random variables,
and they are not required to have a constant mean and hence may have non-identical
distributions. When IE(zt ) is a constant µo , the SLLN (5.1) and WLLN (5.2) read,
respectively,

      1  a.s.                   1
         T                         T
                                         IP
           z −→ µo ,                  z −→ µo .
      T t=1 t                    T t=1 t

Below are two well known strong laws.

Lemma 5.25 (Kolmogorov) Let {zt } be a sequence of i.i.d. random variables with
mean µo . Then

      1  a.s.
         T
           z −→ µo .
      T t=1 t



Note that i.i.d. random variables need not obey Kolmogorov’s SLLN if they do not
have a ﬁnite mean, e.g., the variables with the Cauchy distribution. Given that almost
sure convergence implies convergence in probability, the same condition in Lemma 5.25
ensures that {zt } obeys a WLLN.

                                                           
                                                           c Chung-Ming Kuan, 2001
128                                                       CHAPTER 5. PROBABILITY THEORY


Lemma 5.26 (Markov) Let {zt } be a sequence of independent random variables. If
for some δ > 0, IE |zt |1+δ are bounded for all t, then

        1
           T
                         a.s.
          [zt − IE(zt )] −→ 0,
        T
          t=1



From this result we can see that independent random variables may still obey a SLLN
even when they do not have a common distribution. Comparing to Kolmogorov’s SLLN,
Lemma 5.26 requires random variables to satisfy a stronger moment condition (their
(1 + δ) th moment must be bounded). A non-stochastic sequence, which can be viewed
as a sequence of independent random variables, obeys a SLLN if it is O(1).
      The results above show that a SLLN (WLLN) holds provided that random vari-
ables satisfy certain conditions. The suﬃcient conditions ensuring a SLLN (WLLN)
are usually imposed on the moments and dependence structure of random variables.
Speciﬁcally, {zt } would obey a SLLN (WLLN) if zt have bounded moments up to some
order and are asymptotically independent in a proper sense. In some cases, it suﬃces
to require corr(zt , zt−j ) converging to zero suﬃciently fast as j → ∞, as shown in the
example below. Intuitively, random variables without some bounded moment may be-
have wildly such that their random irregularities cannot be completely averaged out.
For random variables with strong correlations, the variation of their partial sums may
grow too rapidly and cannot be eliminated by simple averaging. Thus, a sequence of
random variables must be “well behaved” to ensure a SLLN (WLLN).

Example 5.27 Suppose that yt is generated as a weakly stationary AR(1) process:

       yt = αo yt−1 + :t ,         t = 1, 2, . . . ,

with y0 = 0 and |αo | < 1, where :t are i.i.d. random variables with mean zero and
variance σ 2 . In view of Section 4.4, we have IE(yt ) = 0, var(yt ) = σ 2 /(1 − α2o ), and
                                 σ2
       cov(yt , yt−j ) = αjo           .
                               1 − α2o
These results ensure that IE(T −1 Tt=1 yt ) = 0 and
          T                           −1
                     T              
                                      T
     var       yt =      var(yt ) + 2      (T − τ ) cov(yt , yt−τ )
                t=1        t=1                  τ =1

                           
                           T                      
                                                  T −1
                       ≤         var(yt ) + 2T           | cov(yt , yt−τ )|
                           t=1                    τ =1

                       = O(T ).


c Chung-Ming Kuan, 2001
5.5. LAW OF LARGE NUMBERS                                                                         129

                                
The latter result shows that var T −1            T
                                                 t=1 yt   = O(T −1 ) which converges to zero as T
approaches inﬁnity. It follows from Lemma 5.16 that

         1
             T
                IP
            yt −→ 0.
         T
            t=1

This shows that {yt } obeys a WLLN. Note that in this case, yt have a constant vari-
ance and cov(yt , yt−j ) goes to zero exponentially fast as j tends to inﬁnity. These two
properties in eﬀect ensure a WLLN. Similarly, it can be shown that

         1  2 IP
             T
            yt −→ IE(yt2 ) = var(yt ).
         T
            t=1

That is, {yt2 } also obeys a WLLN. These results are readily generalized to weakly
stationary AR(p) processes.            ✷


       It is more cumbersome to establish a strong law for weakly stationary processes.
The lemma below is convenient in practice; see Davidson (1994, p. 326) for a proof.

                                ∞
Lemma 5.28 Let yt =             j=−∞ πj ut−j , where ut are i.i.d. random variables with mean
                                                                        ∞
zero and variance σ 2 .       If πj are absolutely summable, i.e.,      j=−∞ |πj | < ∞, then
  T         a.s.
  t=1 yt /T −→ 0.


                                 ∞    j                                               ∞     j
In Example 5.27, yt =            j=0 αo :t−j   with |αo | < 1. It is clear that       j=0 |αo | < ∞.
Hence, Lemma 5.28 ensures that {yt } obeys a SLLN and the average of yt converges
to its mean (zero) almost surely. If yt = zt − µ, then the average of zt converges to
IE(zt ) = µ almost surely.

       More generally, it is also possible that a sequence of weakly dependent and hetero-
geneously distributed random variables obeys a SLLN (WLLN). This usually requires
stronger conditions on their moments and dependence structure.1 To avoid technicality,
we will not specify the regularity conditions that ensure a general SLLN (WLLN); see
White (1984) and Davidson (1994) for such conditions and the resulting strong and
weak laws. Instead, we use the following examples to illustrate why a WLLN and hence
a SLLN may fail to hold.
   1
       The notions of mixing sequence and mixingale allow the random variables to be dependent and
heterogeneously distributed. In their definitions, probabilistic structures are imposed to regulate the
dependence among random variables. Such sequences of random variables may obey a SLLN (WLLN)
if they are weakly dependent in the sense that the dependence of random variables zt on their distant
past zt−j eventually vanishes at a suitable rate as j tends to infinity.


                                                                           
                                                                           c Chung-Ming Kuan, 2001
130                                                              CHAPTER 5. PROBABILITY THEORY


Example 5.29 Consider the sequences {t} and {t2 }, t = 1, 2, . . . . It is well known that

         
         T
               t = T (T + 1)/2,
         t=1

      
      T
            t2 = T (T + 1)(2T + 1)/6.
      t=1

            T                         T    2
Hence,      t=1 t/T         and       t=1 t /T     both diverge. In this example, the elements of these
two sequences diverge so that their partial sums grow too rapidly. Thus, these sequences
do not obey a SLLN.                   ✷

Example 5.30 Suppose that :t are i.i.d. random variables with mean zero and variance
                                   a.s.
σ 2 . Thus, T −1            T
                            t=1 :t −→ 0 by Kolmogorv’s SLLN (Lemma 5.25).                     As IE |t:t |1+δ =
O(t1+δ ) which grows with t, {t:t } does not have bounded (1+δ) th moment and therefore
does not obey Markov’s SLLN (Lemma 5.26). Moreover, note that
             T             
                                   
                                    T
                                                              T (T + 1)(2T + 1)
      var            t:t        =         t2 var(:t ) = σ 2                     .
               t=1                  t=1
                                                                      6

By Exercise 5.11,               T                3/2 ). It follows that T −1        T                1/2 ) which
                                t=1 t:t = OIP (T                                    t=1 t:t = OIP (T
diverges in probability. Thus, {t:t } does not obey a WLLN either.                           ✷

Example 5.31 Suppose that yt is generated as a random walk:

      yt = yt−1 + :t ,                t = 1, 2, . . . ,

with y0 = 0, where :t are i.i.d. random variables with mean zero and variance σ 2 .
Clearly,

               
               t
      yt =           :i ,
               i=1

which has mean zero and unbounded variance tσ 2 . For s < t, write

                        
                        t
      yt = ys +                 :i = ys + vt−s ,
                       i=s+1

                        t
where vt−s =            i=s+1 :i is independent of ys . We then have


      cov(yt , ys ) = IE(ys2 ) = sσ 2 ,


c Chung-Ming Kuan, 2001
5.5. LAW OF LARGE NUMBERS                                                                                   131


for t > s. Consequently,
           T                          −1 
                    T               
                                      T    T
      var      yt =      var(yt ) + 2        cov(yt , yt−τ ).
                  t=1         t=1                  τ =1 t=τ +1

It can be veriﬁed that the ﬁrst term on the right-hand side is

       
       T                   
                           T
             var(yt ) =          tσ 2 = O(T 2 ),
       t=1                 t=1

and that the second term is
           
           T −1   
                  T                             
                                                T −1    
                                                        T
       2                 cov(yt , yt−τ ) = 2                  (t − τ )σ 2 = O(T 3 ).
           τ =1 t=τ +1                          τ =1 t=τ +1

                   T             3                      T               3/2 ) by Exercise 5.11. This shows
Thus, var(         t=1 yt ) = O(T ), so that            t=1 yt = OIP (T
that

       1
             T
          yt = OIP (T 1/2 ),
       T
            t=1

which diverges in probability. Note that in this case, yt have unbounded variances and
strong correlations over time. Due to these correlations, the variation of the partial
                                                                                       T
sum of yt grows much too fast. (Recall that the variance of                            t=1 yt is only O(T ) in
                                                                   T    2         2
Example 5.27.) Similarly, we can show that                         t=1 yt = OIP (T ); see Exercise 5.12 for
a special case. Thus, {yt2 } does not obey a WLLN when yt follows a random walk. As
{yt } and {yt2 } do not obey a WLLN, they cannot obey a SLLN. The conclusions above
will not be altered when {:t } is a white noise or a weakly stationary process.                         ✷


   The example below shows that a sequence of random variables need not obey a
WLLN even its partial sums are OIP (T ).

Example 5.32 Suppose that yt is generated as a random walk:

       yt = yt−1 + :t ,             t = 1, 2, . . . ,

with y0 = 0, as in Example 5.31. Then, the sequence {yt−1 :t } has mean zero and

                           2
       var(yt−1 :t ) = IE(yt−1 ) IE(:2t ) = (t − 1)σ 4 .

More interestingly, it can be seen that for s < t,

       cov(yt−1 :t , ys−1 :s ) = IE(yt−1 ys−1 :s ) IE(:t ) = 0.

                                                                                
                                                                                c Chung-Ming Kuan, 2001
132                                              CHAPTER 5. PROBABILITY THEORY


We then have
          T        
                      
                       T                 
                                         T
     var     yt−1 :t =   var(yt−1 :t ) =   (t − 1)σ 4 = O(T 2 ),
                t=1             t=1             t=1

and    T                                                 −1 T                           4
       t=1 yt−1 :t = OIP (T ). Note, however, that var(T    t=1 yt−1 :t ) converges to σ /2,
rather than 0. Thus, T −1 Tt=1 yt−1 :t cannot behave like a non-stochastic number in
the limit. This shows that {yt−1 :t } does not obey a WLLN, and hence also does not
obey a SLLN.          ✷


5.6       Uniform Law of Large Numbers
In econometric analysis, it is also common to deal with functions of random variables and
model parameters. For example, q(zt (ω)); θ) is a random variable for a given parameter
θ, and it is function of θ for a given ω. When θ is ﬁxed, it is not diﬃcult to impose
suitable conditions on q and zt such that {q(zt (ω); θ)} obeys a SLLN (WLLN), as
discussed in Section 5.5. When θ assumes values in the parameter space Θ, a SLLN
(WLLN) that does not depend on θ is then needed.

      More speciﬁcally, suppose that {q(zt ; θ)} obeys a SLLN for each θ ∈ Θ:

                    1
                          T
                                    a.s.
        QT (ω; θ) =    q(zt (ω); θ) −→ Q(θ),
                    T
                          t=1

where Q(θ) is a non-stochastic function of θ. As this convergent behavior may depend on
θ, Ωc0 (θ) = {ω : QT (ω; θ) → Q(θ)} varies with θ. When Θ is an interval of R, ∪θ∈Θ Ωc0 (θ)
is an uncountable union of non-convergence sets and hence may not have probability
zero, even though each Ωc0 (θ) does. Thus, the event that QT (ω; θ) → Q(θ) for all θ, i.e.,
∩θ∈Θ Ω0 (θ), may occur with probability less than one. In fact, the union of all Ωc0 (θ)
may not even be in F (only countable unions of the elements in F are guaranteed to
be in F). If so, we cannot conclude anything about stochastic convergence. Worse still
is when θ also depends on T , as in the case where θ is replaced by the estimator θ̃T .
There may not exist a ﬁnite T ∗ such that QT (ω; θ̃T ) are arbitrarily close to Q(ω; θ̃T ) for
all T > T ∗ .

      These observations suggest that we should study convergence that is uniform on the
parameter space Θ. In particular, QT (ω; θ) converges to Q(θ) uniformly in θ almost
surely (in probability) if the largest possible diﬀerence:

        sup |QT (θ) − Q(θ)| → 0,      a.s. (in probability).
        θ∈Θ


c Chung-Ming Kuan, 2001
5.6. UNIFORM LAW OF LARGE NUMBERS                                                              133


In what follows we always assume that this supremum is a random variables for all
T . The example below, similar to Example 2.14 of Davidson (1994), illustrates the
diﬀerence between uniform and pointwise convergence.

Example 5.33 Let zt be i.i.d. random variables with zero mean and
                              
                              
                                        0 ≤ θ ≤ 2T
                                                  1
                               T θ,                ,
    qT (zt (ω); θ) = zt (ω) +   1 − T θ, 2T
                                          1
                                            < θ ≤ T1 ,
                              
                              
                               0,       1
                                            < θ < ∞.  T

Observe that for θ ≥ 1/T and θ = 0,

                    1               1
                           T                    T
     QT (ω; θ) =       qT (zt ; θ) =    zt ,
                    T                T
                          t=1                   t=1

which converges to zero almost surely by Kolmogorov’s SLLN. Thus, for a given θ, we
                                                               a.s.
can always choose T large enough such that QT (ω; θ) −→ 0, where 0 is the pointwise
limit. On the other hand, it can be seen that Θ = [0, ∞) and
                                         a.s.
     sup |QT (ω; θ)| = |z̄T + 1/2| −→ 1/2,
     θ∈Θ

so that the uniform limit is diﬀerent from the pointwise limit.            ✷


   More generally, we consider a triangular array of functions qT t (z t ; θ), t = 1, 2, . . . , T ,
where z t are integrable random vectors and θ is the parameter vector taking values in
the parameter space Θ ∈ Rm . For notation simplicity, we will not explicitly write ω in
the functions. We say that {qT t (z t ; θ)} obeys a strong uniform law of large numbers
(SULLN) if

         1
              T
                                                 a.s.
     sup   [qT t (z t ; θ) − IE(qT t (z t ; θ))] −→ 0,                                        (5.3)
     θ∈Θ T
             t=1

cf. (5.1). Similarly, {qT t (z t ; θ)} is said to obey a weak uniform law of large numbers
(WULLN) if the convergence condition above holds in probability. If qT t is Rm -valued
functions, the SULLN (WULLN) is deﬁned elementwise.

   We have seen that pointwise convergence does not imply uniform convergence. A
natural question one would ask is: what additional conditions are needed to guarantee
uniform convergence? Now let

                  1
                      T
     QT (θ) =        [qT t (z t ; θ) − IE(qT t (z t ; θ))].
                  T
                     t=1

                                                                      
                                                                      c Chung-Ming Kuan, 2001
134                                                CHAPTER 5. PROBABILITY THEORY


Suppose that QT satisﬁes the following Lipschitz-type continuity requirement: for θ, θ †
in Θ,

        |QT (θ) − QT (θ † )| ≤ CT θ − θ †    a.s.,

where  ·  denotes the Euclidean norm, and CT is a random variable bounded almost
surely and does not depend on θ. Under this condition, QT (θ † ) can be made arbitrarily
close to QT (θ), provided that θ † is suﬃciently close to θ. Using the triangle inequality
and taking supremum over θ we have

        sup |QT (θ)| ≤ sup |QT (θ) − QT (θ † )| + |QT (θ † )|.
        θ∈Θ             θ∈Θ

Let ∆ denote an almost sure bound of CT . Then given any : > 0, choosing θ † such that
θ − θ †  < :/(2∆) implies
                                         :  :
        sup |QT (θ) − QT (θ † )| ≤ CT      ≤ ,
        θ∈Θ                             2∆  2

uniformly in T . Moreover, because QT (θ) converges to 0 almost surely for each θ in Θ,
|QT (θ † )| is also less than :/2 for suﬃciently large T . Consequently,

        sup |QT (θ)| ≤ :,
        θ∈Θ

for all T suﬃciently large. As these results hold almost surely, we have a SULLN for
QT (θ); the conditions ensuring a WULLN are analogous.

Lemma 5.34 Suppose that for each θ ∈ Θ, {qT t (z t ; θ)} obeys a SLLN (WLLN) and
that for θ, θ † ∈ Θ,

        |QT (θ) − QT (θ † )| ≤ CT θ − θ †    a.s.,

where CT is a random variable bounded almost surely (in probability) and does not
depend on θ. Then, {qT t (z t ; θ)} obeys a SULLN (WULLN).


      Lemma 5.34 is quite convenient for establishing a SULLN (WULLN) because it
requires only two conditions. First, the random functions must obey a standard SLLN
(WLLN) for each θ in the parameter space. Second, the random function must satisfy
a Lipschitz-type continuity condition. In particular, the continuity condition can be
veriﬁed by checking whether qT t is suﬃciently “smooth” in the second argument. Note,
however, that CT being bounded almost surely may imply that the random variables
in qT t are also bounded almost surely. This requirement is much too restrictive in


c Chung-Ming Kuan, 2001
5.7. CENTRAL LIMIT THEOREM                                                                    135


applications. Hence, a SULLN may not be readily obtained from Lemma 5.34. On
the other hand, a WULLN is practically more plausible because the requirement that
CT is OIP (1) is much weaker. For example, the boundedness of IE |CT | is suﬃcient for
CT being OIP (1) by Markov’s inequality. For more speciﬁc conditions ensuring these
requirements we refer to Gallant and White (1988) and Bierens (1994).


5.7     Central Limit Theorem
The central limit theorem ensures that the distributions of suitably normalized averages
will be essentially close to the standard normal distribution, regardless of the original
distributions of random variables. This result is very useful and convenient in applica-
tions because, as far as approximation is concerned, we only have to consider a single
distribution for normalized sample averages.

   Given a sequence of square integrable random variables {zt }, let z̄T = T −1            T
                                                                                           t=1 zt ,
µ̄T = T −1   T
             t=1 IE(zt ), and
                                   
                         
                         T
      σT2 = var T −1/2         zt       .
                         t=1

Then {zt } is said to obey a central limit theorem (CLT) if σT2 → σo2 > 0 such that
                                        √
        1    
             T
                                            T (z̄T − µ̄T ) D
        √      [zt − IE(zt )] =                           −→ N (0, 1).                      (5.4)
      σo T t=1                                   σo

Note that this deﬁnition requires neither IE(zt ) nor var(zt ) to be a constant; also, {zt }
may or may not be a sequence of independent variables. The following are two well
known CLTs.

Lemma 5.35 (Lindeberg-Lévy) Let {zt } be a sequence of i.i.d. random variables
with mean µo and variance σo2 > 0. Then,
      √
       T (z̄T − µo ) D
                    −→ N (0, 1).
            σo



A sequence of i.i.d. random variables need not obey this CLT if they do not have a ﬁnite
variance, e.g., random variables with t(2) distribution. Comparing to Lemma 5.25, one
can immediately see that the Lindeberg-Lévy CLT requires a stronger condition (i.e.,
ﬁnite variance) than does Kolmogorov’s SLLN.

                                                                         
                                                                         c Chung-Ming Kuan, 2001
136                                             CHAPTER 5. PROBABILITY THEORY


Remark: In this example, z̄T converges to µo in probability, and its variance σ 2 /T
vanishes when T tends to inﬁnity. To prevent having a degenerate distribution in the
limit, it is then natural to consider the normalized average T 1/2 (z̄T − µo ), which has a
constant variance σ 2 for all T . This explains why the normalizing factor T 1/2 is needed.
For a normalizing factor T a with a < 1/2, the normalized average still converges to zero
because its variance vanishes in the limit. For a normalizing factor T a with a > 1/2, the
normalized average diverges. In both cases, the resulting normalized averages cannot
have a well-behaved, non-degenerate distribution in the limit. Thus, it is usually said
that z̄T converges to µo at the rate T −1/2 .

Lemma 5.36 Let {zT t } be a triangular array of independent random variables with
mean µT t and variance σT2 t > 0 such that

                 1 2
                   T
        σ̄T2 =     σT t → σo2 > 0.
                 T
                   t=1

If for some δ > 0, IE |zT t |2+δ are bounded for all t, then
       √
         T (z̄T − µ̄T ) D
                       −→ N (0, 1).
              σo



Lemma 5.36 is a version of Liapunov’s CLT. Note that this result requires a stronger con-
dition (the (2+δ) th moment must be bounded) than does Markov’s SLLN (Lemma 5.26).

      The suﬃcient conditions that ensure a CLT are similar to but usually stronger
than those for a WLLN. That is, the sequence of random variables must have bounded
moment up to some higher order, and random variables must be asymptotically inde-
pendent of those in the distant past (such dependence must vanish suﬃciently fast).
Moreover, it is also required that every random variable in the sequence is asymptoti-
cally negligible, in the sense that no random variable is inﬂuential in aﬀecting the partial
sums. Although we will not specify these regularity conditions explicitly, we note that
weakly stationary AR and MA processes obey a CLT in general. A sequence of weakly
dependent and heterogeneously distributed random variables may also obey a CLT, de-
pending on its moment and dependence structure. The following are examples that a
CLT does not hold.

Example 5.37 Suppose that {:t } is a sequence of independent random variables with
mean zero, variance σ 2 , and bounded (2 + δ) th moment. From Example 5.29, we know


c Chung-Ming Kuan, 2001
5.7. CENTRAL LIMIT THEOREM                                                               137


var(   T               3                        −1/2 T
       t=1 t:t ) is O(T ), which implies that T      t=1 t:t still has a diverging variance
                 2
(of order O(T )). On the other hand, observe that
                              
                   1  t
                       T
                                        T (T + 1)(2T + 1) 2   σ2
       var                :         =                    σ  →    .
                 T 1/2   T t                   6T 3           3
                        t=1

It follows from Lemma 5.36 that
        √
           3  t
                T
                       D
                    : −→ N (0, 1).
       T 1/2 σ t=1 T t

These results show that {(t/T ):t } obeys a CLT, whereas {t:t } does not.          ✷


Example 5.38 Suppose that yt is generated as a random walk:

       yt = yt−1 + :t ,           t = 1, 2, . . . ,

with y0 = 0, where {:t } is a sequence of i.i.d. random variables with mean zero and
variance σ 2 . From Example 5.31 we have seen that {yt } and {yt2 } have unbounded vari-
ances and strong correlations over time. Hence, they do not obey a CLT. Example 5.32
also suggests that {yt−1 :t } does not obey a CLT.            ✷


   Given a sequence of square integrable random vectors {z t } in Rd , let

                 1
                    T
       z̄ T =       zt,
                 T
                   t=1


µ̄T = T −1        T
                  t=1 IE(z t ), and

                                     
                          1 
                              T
       ΣT = var          √       zt       .
                           T t=1

Then, {z t } is said to obey a CLT if ΣT → Σo , a positive deﬁnite matrix, such that

              1                              √
                         T
       Σ−1/2         [z t − IE(z t )] = Σ−1/2
                                                                 D
        o    √                           o      T (z̄ T − µ̄T ) −→ N (0, I d ).
               T t=1

By Lemma 5.18, this amounts to requiring that {α z t } obeys a CLT, for any α ∈ Rd
such that α α = 1.

                                                                     
                                                                     c Chung-Ming Kuan, 2001
138                                          CHAPTER 5. PROBABILITY THEORY


Exercises

 5.1 Let C be a collection of subsets of Ω. Show that the intersection of all the σ-
      algebras on Ω that contain C is the smallest σ-algebra containing C.

 5.2 Show that any half lines (−∞, b] and [a, ∞) can be generated by open intervals in
      R. Also show that any open interval (a, b) can be generated by closed intervals in
      R.

 5.3 Let y and z be two independent, integrable random variables. Show that IE(yz) =
      IE(y) IE(z).

 5.4 Let x and y be two random variables with ﬁnite p th moment (p > 1). Prove the
      following triangle inequality:

            x + yp ≤ xp + yp .

      Hint: Write IE |x + y|p = IE(|x + y||x + y|p−1 ) and apply Hölder’s inequality.

 5.5 In the probability space (Ω, F, IP) suppose that we know the event B in F has
      occurred. Show that the conditional probability IP(·|B) satisﬁes the axioms for
      probability measures.

 5.6 Prove the ﬁrst assertion of Lemma 5.9.

 5.7 Prove that for the square integrable random vectors z and y,

            var(z) = IE[var(z | y)] + var(IE(z | y)).


 5.8 A sequence of square integrable random variables {zn } is said to converge to a
      random variable z in L2 (in quadratic mean) if

            IE(zn − z)2 → 0.

      Prove that L2 convergence implies convergence in probability.
      Hint: Apply Chebychev’s inequality.

 5.9 Show that a sequence of square integrable random variables {zn } converges to a
      constant c in L2 if and only if IE(zn ) → c and var(zn ) → 0.

5.10 Prove Lemma 5.23.


c Chung-Ming Kuan, 2001
5.7. CENTRAL LIMIT THEOREM                                                                   139


5.11 Suppose that IE(zn2 ) = O(cn ), where {cn } is a sequence of positive real numbers.
                              1/2
     Show that zn = OIP (cn ).

5.12 Suppose that yt is generated as a Gaussian random walk:

           yt = yt−1 + :t ,         t = 1, 2, . . . ,

     with y0 = 0, where {:t } is a sequence of i.i.d. normal random variables with mean
                                                   T
     zero and variance σ 2 . Show that                  2          2
                                                   t=1 yt is OIP (T ).



References

Bierens, Herman J. (1994). Topics in Advanced Econometrics, New York, NY: Cam-
     bridge University Press.

Davidson, James (1994). Stochastic Limit Theory, New York, NY: Oxford University
     Press.

Gallant, A. Ronald (1997). An Introduction to Econometric Theory, Princeton, NJ:
     Princeton University Press.

Gallant, A. Ronald and Halbert White (1988). A Uniﬁed Theory of Estimation and
     Inference for Nonlinear Dynamic Models, Oxford, UK: Basil Blackwell.

White, Halbert (1984). Asymptotic Theory for Econometricians, Orlando, FL: Aca-
     demic Press.




                                                                         
                                                                         c Chung-Ming Kuan, 2001
140                       CHAPTER 5. PROBABILITY THEORY





c Chung-Ming Kuan, 2001
Chapter 6

Asymptotic Least Squares Theory

We have shown that the OLS estimator and related tests have good ﬁnite-sample prop-
erties under the classical conditions. These conditions are, however, quite restrictive
in practice, as discussed in Section 3.7. It is therefore natural to ask the following
questions. First, to what extent may we relax the classical conditions so that the OLS
method has broader applicability? Second, what are the properties of the OLS method
under more general conditions? The purpose of this chapter is to provide some answers
to these questions. In particular, the analysis in this chapter allows the observations
of each explanatory variable to be random variables, possibly weakly dependent and
heterogeneously distributed. This relaxation permits applications of the OLS method
to various data and models, but it also renders the analysis of ﬁnite-sample properties
diﬃcult. Nonetheless, it is relatively easy to analyze the asymptotic performance of the
OLS estimator and construct large-sample tests. As the asymptotic results are valid
under more general conditions, the OLS method remains a useful tool in a wide variety
of applications.


6.1     When Regressors are Stochastic

Given the linear speciﬁcation y = Xβ + e, suppose now that X is stochastic. In this
case, [A2](i) must also be modiﬁed because IE(y) cannot be a random vector Xβ o .
Even a condition on IE(y) is available, we are still unable to evaluate

      IE(β̂ T ) = IE[(X  X)−1 X  y],

because β̂ T now is a complex function of the elements of y and X. Similarly, a condition
on var(y) is of little use for calculating var(β̂ T ).

                                              141
142                               CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


      To ensure unbiasedness, it is typical to impose the condition: IE(y | X) = Xβ o for
some β o , instead of [A2](i). Under this condition,

         IE(β̂ T ) = IE[(X  X)−1 X  IE(y | X)] = β o ,

by Lemma 5.9 (law of iterated expectations). Note that the condition IE(y | X) = Xβ o
implies

         IE(y) = IE[IE(y | X)] = IE(X)β o ,

again by the law of iterated expectations. Hence, IE(y) can be obtained from IE(y |
X) but not conversely. This shows that, when X is allowed to be stochastic, the
unbiasedness property of β̂ T would hold under a stronger condition.

      Unfortunately, the condition IE(y | X) = Xβ o may not be realistic in some appli-
cations. To see this, let xt denote the t th column of X  and write the t th element of
IE(y | X) = Xβ o as

         IE(yt | x1 , . . . , xT ) = xt β o ,      t = 1, 2, . . . , T.

Consider time series data and the simple speciﬁcation that xt contains only one regressor
yt−1 :

         yt = βyt−1 + et ,           t = 1, 2, . . . , T.

In this case, the aforementioned condition reads:

         IE(yt | y1 , . . . , yT −1 ) = βo yt−1 ,

for some βo . Note that for t = 1, . . . , T − 1, IE(yt | y1 , . . . , yT −1 ) = yt by Lemma 5.10.
The condition above then requires yt = βo yt−1 with probability one. If {yt } is indeed
an AR(1) process: yt = βo yt−1 + :t such that :t has a continuous distribution, the
event that yt = βo yt−1 (i.e., :t = 0) can occur only with probability zero, violating the
imposed condition.

      Suppose that IE(y | X) = Xβ o and var(y | X) = σo2 I T . It is easy to see that

         var(β̂ T ) = IE[(X  X)−1 X  (y − Xβ o )(y − Xβ o ) X(X  X)−1 ]

                     = IE[(X  X)−1 X  var(y | X)X(X  X)−1 ]

                     = σo2 IE(X  X)−1 ,

which is diﬀerent from the variance-covariance matrix when X is non-stochastic; cf.
Theorem 3.4(c). It is not always reasonable to impose such a condition on var(y | X)


c Chung-Ming Kuan, 2001
6.2. ASYMPTOTIC PROPERTIES OF THE OLS ESTIMATORS                                                             143


either. Consider the previous example that xt = yt−1 . As IE(yt | y1 , . . . , yT −1 ) = yt ,
the conditional variance is

      var(yt | y1 , . . . , yT −1 ) = IE{[yt − IE(yt | y1 , . . . , yT −1 )]2 | y1 , . . . , yT −1 } = 0,

rather than a positive constant σo2 .

   Without the conditions on IE(y | X) and var(y | X), the mean and variance of the
OLS estimator remain unknown. Moreover, when X is stochastic, (X  X)−1 X  y need
not be normally distributed even when y is. Consequently, the results for hypothesis
testing discussed in Section 3.4 are invalid.


6.2     Asymptotic Properties of the OLS Estimators
Suppose that we observe the data (yt wt ) , where yt is the variable of interest (dependent
variable), and wt is an m × 1 vector of “exogenous” variables. Let W t denote the
collection of random vectors w1 , . . . , w t and Y t the collection of y1 , . . . , yt . The set
of Y t−1 and W t generates a σ-algebra which represents the information set up to time
t. To account for the behavior of yt , we choose the vector of explanatory variables xt
from the information set so that xt includes k elements of Y t−1 and W t . The linear
speciﬁcation y = Xβ + e can be expressed as

      yt = xt β + et ,          t = 1, 2, . . . , T,                                                       (6.1)

where xt is the t th column of X  , i.e., the t th observation of all explanatory variables.
Under the present framework, regressors may be lagged dependent variables (taken from
Y t−1 ) and lagged exogenous variables (taken from W t ). Including such variables in the
speciﬁcation is quite helpful in capturing the dynamic behavior of data.

6.2.1    Consistency

Gien the speciﬁcation (6.1), the OLS estimator can be written as
                                       T              −1  T            
                                                           
                      −1    
      β̂ T = (X X)          Xy=               xt xt             xt y t       .                             (6.2)
                                        t=1                t=1

The estimator β̂ T is said to be strongly consistent for the parameter vector β ∗ if β̂ T −→
                                                                                                             a.s.

β ∗ as T tends to inﬁnity; β̂ T is said to be weakly consistent for β ∗ if β̂ T −→ β ∗ . Strong
                                                                                               IP

consistency asserts that β̂ T will be eventually close to β ∗ when “enough” information
(a suﬃciently large sample) becomes available. Consistency is in sharp contrast with

                                                                                  
                                                                                  c Chung-Ming Kuan, 2001
144                            CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


unbiasedness. While an unbiased estimator of β ∗ is “correct” on average, there is no
guarantee that its values will be close to β ∗ , no matter how large the sample is.

      To establish strong (weak) consistency, we impose the following conditions.

[B1] {(yt wt ) } is a sequence of random vectors and xt is also a random vector con-
        taining some elements of Y t−1 and W t .

         (i) {xt xt } obeys a SLLN (WLLN) such that limT →∞ T −1        T          
                                                                         t=1 IE(xt xt ) exists
              and is nonsingular.
         (ii) {xt yt } obeys a SLLN (WLLN).

[B2] For some β o , IE(yt | Y t−1 , W t ) = xt β o for all t.

One approach in the time-series analysis is to analyze the behavior of yt based solely on
its past behavior (lagged values). In this case, xt contains only the elements of Y t−1 ,
and [B2] is modifed as IE(yt | Y t−1 ) = xt β o for all t.

      The condition [B1] explicitly allows the explanatory variables xt to be a random
vector which may contain one or more lagged dependent variables yt−j and current and
past exogenous variables wt . [B1] also admits non-stochastic regressors which can be
viewed as independent, degenerate random vectors. Moreover, [B1](i) and (ii) regulate
the behaviors of yt and xt such that {xt xt } and {xt yt } must obey a SLLN (WLLN). On
the other hand, the deterministic time trend t and random walk are excluded because
they do not obey a SLLN (WLLN); see Examples 5.29 and 5.31.

      Analogous to [A2](i), [B2] requires the linear function xt β to be a correct speciﬁ-
cation of the conditional mean function, up to some unknown parameters. When xt is
non-stochastic, [B2] implies [A2](i) because by the law of iterated expectations,

        IE(yt ) = IE[IE(yt | Y t−1 , W t )] = xt β o .

Recall from Section 5.2 that the conditional mean IE(yt | Y t−1 , W t ) is the orthogonal
projection of yt onto the space of all functions of the elements of Y t−1 and W t , where
orthogonality is deﬁned in terms of the cross moment, the inner product in L2 space.
Thus, the conditional mean function is the best approximation (in the mean squared
error sense) of yt based on the information generated by Y t−1 and W t .

      As xt β o is the orthogonal projection of yt under [B2], it must be true that, for any
function g and any vector z t containing the elements of Y t−1 and W t ,

        IE[g(z t )(yt − xt β o )] = 0,


c Chung-Ming Kuan, 2001
6.2. ASYMPTOTIC PROPERTIES OF THE OLS ESTIMATORS                                                   145


by Lemma 5.11. That is, any function of z t must be orthogonal to the diﬀerence between
yt and its orthogonal projection xt β o . If this condition does not hold for some g(z t ), it
should be clear that xt β o cannot be IE(yt | Y t−1 , W t ). In particular, if

      IE[xt (yt − xt β o )] = 0,

xt β o cannot be the conditional mean.

   Unlike [A2](ii), the imposed conditions do not rule out serially correlated yt , nor do
they require the conditional variance var(yt | Y t−1 , W t ) to be a constant. Moreover, {xt }
may also be a sequence of weakly dependent and heterogeneously distributed random
variables, as long as it obeys a SLLN (WLLN). To summarize, the conditions here allow
data to exhibit various forms of dependence and heterogeneity. By contrast, the classical
conditions admit only serially uncorrelated and homoskedastic data.

   Given [B1], deﬁne the following limits:

                        1                                               1
                                T                                            T
      M xx := lim             IE(xt xt ),                  M xy := lim        IE(xt yt ),
                   T →∞ T                                           T →∞ T
                          t=1                                              t=1

which are, respectively, the almost surely (probability) limits of the average of xt xt and
xt yt under a SLLN (WLLN). As matrix inversion is a continuous function and M xx is
invertible by [B1](i), Lemma 5.13 (Lemma 5.17) ensures that
                         −1
          1
            T
             xt xt             → M −1
                                    xx        a.s. (in probability).
          T
            t=1

It follows from (6.2) that
                                   −1                
                   1                       1
                      T                       T
      β̂ T =            x x                     xy         → M −1
                                                                xx M xy   a.s. (in probability).
                   T t=1 t t                T t=1 t t

This shows that the OLS estimator of β has a well-deﬁned limit under [B1].

Theorem 6.1 Given the linear speciﬁcation (6.1), suppose that [B1] holds. Then, β̂ T
is srongly (weakly) consistent for M −1
                                     xx M xy .


   Theorem 6.1 holds regardless of [B2]; that is, whether (6.1) is the correct speciﬁcation
or not is irrelevant.

Example 6.2 Given the simple AR(1) speciﬁcation

      yt = αyt−1 + et ,

                                                                          
                                                                          c Chung-Ming Kuan, 2001
146                           CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


suppose that {yt2 } and {yt yt−1 } obey a SLLN (WLLN). Then, Theorem 6.1 ensures that
the OLS estimator
                                T
                limT →∞ T1      t=2 IE(yt yt−1 )
        α̂T →                    T
                                                    a.s. (in probability).
                 limT →∞ T1               2
                                 t=2 IE(yt−1 )

If IE(yt ) = 0, var(yt ) = γ0 and cov(yt , yt−1 ) = γ1 for all t. This limit simpliﬁes to γ1 /γ0 .



      By the law of iterated expectations, [B2] implies

        IE(xt yt ) = IE[xt IE(yt | Y t−1 , W t )] = IE(xt xt )β o ,

which in turn yields M xy = M xx β o . Thus, [B1] and [B2] together determine the almost
sure (probability) limit in Theorem 6.1 as

        M −1
          xx M xy = β o .


We have established the following result.

Theorem 6.3 Given the linear speciﬁcation (6.1), suppose that [B1] and [B2] hold.
Then, β̂ T is strongly (weakly) consistent for the parameter vector β o in [B2].


We state consistency in two results so as to clarify the convergence behavior of the
OLS estimator. First, as long as the data obey a proper SLLN (WLLN), β̂ T converges
to “something.” Second, the almost sure (probability) limit would be β o if xt β is the
correct speciﬁcation for the conditional mean. These results are convenient for asserting
consistency. Once we believe (or are able to verify) that the data obey a SLLN (WLLN),
the conclusion of Theorem 6.1 immediately applies. If, further, we believe (or are able to
verify) that the speciﬁcation is correct for the conditional mean, we can conclude from
Theorem 6.3 that the OLS estimator is strongly (weakly) consistent for the parameter
of interest.

Example 6.4 Given the simple AR(1) speciﬁcation

        yt = αyt−1 + et ,

suppose that

        yt = αo yt−1 + ut ,


c Chung-Ming Kuan, 2001
6.2. ASYMPTOTIC PROPERTIES OF THE OLS ESTIMATORS                                      147


where |αo | < 1 and {ut } is a sequence of unobservable, independent random variables
with mean zero and variance σu2 . A process so generated is an AR(1) process. As all the
elements of Y t−1 are determined by us for s ≤ t − 1, it is then clear that these elements
and their functions must be independent of ut , by Lemma 5.1. It follows that αo yt−1
is the conditional mean IE(yt | Y t−1 ). Theorem 6.3 now ensures that α̂T → αo a.s. (in
probability). Note, however, that αo yt−1 need not be the conditional mean if {ut } is a
white noise sequence.

   Alternatively, we can establish consistency as follows. In view of Section 4.4, yt is
weakly stationary with mean zero, variance σu2 /(1 − α2o ) and

                               σu2
     cov(yt , yt−j ) = αjo           .
                             1 − α2o

It follows from Example 6.2 that

              cov(yt , yt−1 )
     α̂T →                    = αo       a.s. (in probability).
                var(yt−1 )

Comparing to Example 6.2 we can see that the more we know about data, the more
precise we can say about the limit of the OLS estimator.           ✷


   The examples below illustrate that when xt β o is not the desired conditional mean,
the OLS estimator still converges but may be inconsistent for β o .

Example 6.5 Consider the speciﬁcation

     yt = xt β + et ,

where xt is k1 × 1. Suppose that

     IE(yt | Y t−1 , W t ) = xt β o + z t γ o ,

where z t (k2 × 1) also contains the elements of Y t−1 and W t and is distinct from xt .
This is an example that a speciﬁcation omits relevant variables (z t in the conditional
mean). When [B1] holds,

     β̂ T → M −1
              xx M xy ,         a.s. (in probability),

by Theorem 6.1. In this case,

     IE(xt yt ) = IE(xt xt )β o + IE(xt z t )γ o ,

                                                                  
                                                                  c Chung-Ming Kuan, 2001
148                           CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


so that

      IE[xt (yt − xt β o )] = IE(xt z t )γ o ,

which is non-zero in general. This shows that xt β o cannot be the desired conditional
mean, and hence convergence to β o is not guaranteed. In fact, the almost sure (proba-
bility) limit of β̂ T is

      β ∗ = M −1                −1
              xx M xy = β o + M xx M xz γ o ,


where M xz = limT →∞             T           
                                 t=1 IE(xt z t )/T   is assumed to exist. This limit is not β o in
general. If the elements of xt are orthogonal to those of z t , i.e., IE(xt z t ) = 0, we have
M xz = 0 and β ∗ = β o . Then β̂ T converges to β o almost surely (in probability), despite
that the linear function is misspeciﬁed for the conditional mean function.              ✷

Example 6.6 Given the simple AR(1) speciﬁcation

      yt = αyt−1 + et ,

suppose that

      yt = αo yt−1 + ut + πo ut−1 ,

where |αo | < 1, |πo | < 1, and {ut } is a sequence of unobservable, independent random
variables with mean zero and variance σu2 . A process so generated is known as an
ARMA(1,1) process (autoregressive and moving average process of order (1,1)). It is
easily shown that αo yt−1 is not the conditional mean IE(yt | Y t−1 ) because

      IE[yt−1 (yt − αo yt−1 )] = IE[yt−1 (ut + πo ut−1 )] = πo σu2 ,

which is non-zero unless πo = 0. As {yt } is weakly stationary such that

                            2
      IE(yt yt−1 ) = αo IE(yt−1 ) + πo σu2 ,

          2 ) is a constant, we have from Example 6.2 that
where IE(yt−1

              IE(yt yt−1 )               σu2
      α̂T →         2 )    = αo + π o      2 )         a.s. (in probability).
               IE(yt−1                IE(yt−1

This shows that α̂T converges but is inconsistent for αo . This is the case because
yt − αo yt−1 are serially correlated and hence correlated with yt−1 . Clearly, α̂T would be
consistent for αo if πo = 0, i.e., yt −αo yt−1 are serially uncorrelated (in fact, independent)
and hence uncorrelated with yt−1 , as shown in Example 6.4.


c Chung-Ming Kuan, 2001
6.2. ASYMPTOTIC PROPERTIES OF THE OLS ESTIMATORS                                            149


    This conclusion will not be altered if the lagged dependent variable is one of the
regressors:

       yt = αyt−1 + xt β + et .

Suppose that

       yt = αo yt−1 + xt β o + :t ,

where :t are serially correlated. Then the OLS estimators for α and β are inconsistent
for αo and β o .       ✷


    In the examples above, yt can be written as

       y t = xt β ∗ + :t ,

where :t are disturbances. For Example 6.5, β ∗ = β o , :t = z t γ o + ut , and ut is such
that IE(ut | Y t−1 , W t ) = 0; for Example 6.6, β ∗ = αo , :t = ut + γo ut−1 , and {ut } is a
white noise sequence. By noting
                                     −1                         
                          1                  1
                             T                   T
       β̂ T = β ∗ +            x x                x (y − xt β ∗ ) ,                      (6.3)
                          T t=1 t t           T t=1 t t

we can see that β̂ T would converge to β ∗ provided that the second term on the right-
hand side vanishes in the limit. When xt are uncorrelated with the disturbances:
IE[xt (yt − xt β ∗ )] = 0 for all t, SLLN (WLLN) implies

        1
            T
           xt (yt − xt β ∗ ) → 0 a.s. (in probability),
        T
           t=1

        1
            T
             x x = O(1)         a.s. (in probability).
        T t=1 t t

It follows that the second term on the right-hand side of (6.3) does converge to zero
almost surely (in probability). Clearly, [B2] is a suﬃcient condition for IE[xt (yt −
xt β ∗ )] = 0 for β ∗ = β o .

    On the other hand, when IE[xt (yt − xt β ∗ )] = c = 0,

       1
           T
          xt (yt − xt β ∗ ) → c        a.s. (in probability),
       T
          t=1

                                                                        
                                                                        c Chung-Ming Kuan, 2001
150                            CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


so that β̂ T converges in probability to β ∗ + M −1                       ∗
                                                 xx c, which diﬀers from β by a ﬁxed
amount. That is, inconsistency would result if the regressor xt are correlated with the
disturbances :t . Such correlations may be due to the correlation between the included
and excluded variables (Example 6.5) or the correlation between the lagged dependent
variables and serially correlated disturbances (Example 6.6).

      While the eﬀect of SLLN or WLLN (condition [B1]) is important in establishing
OLS consistency, it will be shown below that [B1] is not a necessary condition.

Example 6.7 Given the simple linear time trend speciﬁcation:

        yt = a + b t + et ,

suppose that [B2] holds: IE(yt |Y t−1 ) = ao + bo t. We have learned from Example 5.29
that {t} and {t2 } do not obey a SLLN or a WLLN so that [B1] is violated. Nevertheless,
the OLS estimators of a and b remain consistent. In view of (6.3), the OLS estimator
of b is
                 T                           T              
                 t=1 t − 2                     t=1 t − 2
                            T +1                          T +1
                                   yt                            :t
        b̂T =
                  T              
                             T +1 2
                                      = bo +
                                                T              
                                                           T +1 2
                                                                    ,
                  t=1   t −    2                t=1   t −    2

                                                                                  T
where :t = yt − ao − bo t. We have seen in Example 5.30 that                      t=1 :t is OIP (T
                                                                                                   1/2 ) and
  T                 3/2 ).
  t=1 t:t is OIP (T           While the numerator term is OIP (T 3/2 ), the denominator grows
even faster:
      T           
               T + 1 2  2 T (T + 1)2
                        T
                                        T (T + 1)(T − 1)
            t−        =   t −         =                  = O(T 3 ).
                 2              4              12
          t=1                    t=1

                                                                             IP
The entire second term thus vanishes in the limit, and b̂T −→ bo . Similarly, we can
show
                       T +1        (4T + 2) Tt=1 :t − 6            T
                                                                   t=1 t:t
        âT = ȳ − b̂T      = ao +                                           .
                         2                  T (T − 1)
                                                      IP
As the second term above is OIP (T −1/2 ), âT −→ ao .              ✷

Example 6.8 Given a simple AR(1) speciﬁcation:

        yt = αyt−1 + et ,

suppose that yt is a random walk:

        yt = yt−1 + :t ,


c Chung-Ming Kuan, 2001
6.2. ASYMPTOTIC PROPERTIES OF THE OLS ESTIMATORS                                          151


where :t are i.i.d. random variables. We have seen in Example 5.31 that {yt } and {yt2 }
do not obey a SLLN (WLLN). By (6.3), the OLS estimator of α can be written as
                    T
                    t=1 yt−1 :t
      α̂T = 1 +      T
                                .
                          2
                     t=1 yt−1

From Examples 5.31 and 5.32 we know that the numerator on the right-hand side above
                                                                   IP
is OIP (T ), while the denominator is OIP (T 2 ). Consequently, α̂T −→ 1.

   When {:t } is a weakly stationary ARMA process and exhibits serial correlations,
yt−1 is not the conditional mean of yt because IE(yt−1 :t ) is non-zero. Nevertheless,
         T
         t=1 yt−1 :t  O (T )
          T
                     = IP 2 = OIP (T −1 ),                                               (6.4)
               2
          t=1 yt−1
                      OIP (T )

so that α̂T is still weakly consistent for 1.    ✷


Remark: Example 6.8 demonstrates that the OLS estimator may still be consistent
even when a lagged dependent variable and serially correlated disturbances are both
                                T    2
present. This is because        t=1 yt−1 in (6.4) grows much faster and hence is able to
                                                                             T    2
eliminate all the correlations between yt−1 and :t asymptotically. If        t=1 yt−1 and
   T
   t=1 yt−1 :t in (6.4) grow at the same rate, these correlations would not vanish in the
limit and therefore cause inconsistency, as shown in Example 6.6.


6.2.2    Asymptotic Normality

We say that β̂ T is asymptotically normally distributed (about β ∗ ) if
      √
       T (β̂ T − β ∗ ) −→ N (0, D o ),
                        D



where Do is a positive-deﬁnite matrix. That is, the sequence of properly normalized
β̂ T converges in distribution to a multivariate normal random vector. As Do is the
covariance matrix of the limiting normal distribution, it is also known as the asymptotic
                      √
covariance matrix of T (β̂ T − β ∗ ). Equivalently, we may also express asymptotic
normality by
             √
      D −1/2   T (β̂ T − β ∗ ) −→ N (0, I k ).
                                D
        o

                                                                            √
It should be emphasized that asymptotic normality here is referred to           T (β̂ T − β ∗ )
rather than β̂ T ; the latter has only a degenerate distribution in the limit by strong
(weak) consistency.

                                                             
                                                             c Chung-Ming Kuan, 2001
152                               CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY

              √
      When        T (β̂ T − β ∗ ) has a limiting distribution, it is OIP (1) by Lemma 5.24. There-
fore, β̂ T − β ∗ is necessarily OIP (T −1/2 ), so that β̂ T tend to β ∗ at the rate T −1/2 . Thus,
we know not only consistency but also the rate of convergence to β ∗ . An estimator that
                                                              √
is consistent at the rate T −1/2 is usually referred to as a “ T -consistent” estimator.
Some consistent estimators may converge more quickly. In Example 6.7, the estimator
b̂T of the slope coeﬃcient in the simple time trend speciﬁcation converges to bo at the
                                                       √
rate T −3/2 , whereas the estimator of the intercept is T -consistent. Also, the OLS
estimator for the AR(1) speciﬁcation is T -consistent when {yt } is a random walk but
√
  T -consistent when {yt } is a weakly stationary process; see Examples 6.8.

      To ensure asymptotic normality, we impose an additional condition.

[B3] For some β ∗ , {xt (yt − xt β ∗ )} is a sequence of random vectors with mean zero and
        obeys a CLT.


      If we write

        yt = xt β ∗ + :t ,

[B3] requires that IE(xt :t ) = 0, i.e., the regressors xt and disturbances :t are uncorre-
lated. Moreover,
                                              
                             1 
                                  T
        V T := var          √       xt :t          → V o,
                              T t=1

a positive-deﬁnite matrix, and
                                      
                       1 
                             T
        V −1/2
                                               D
          o           √       xt :t        −→ N (0, I k ).
                        T t=1

In view of (6.3), the normalized OLS estimator is
                                                        −1                    
        √                             1                          1 
                                           T                          T
            T (β̂ T − β ∗ ) =              x x                  √       xt :t
                                      T t=1 t t                    T t=1
                                                                                                          (6.5)
                                                        −1                                     
                                      1   
                                          T
                                                                                   1  
                                                                                      T
                              =                 xt xt         V 1/2
                                                                 o   V −1/2
                                                                       o          √       xt :t       .
                                      T                                             T t=1
                                          t=1

Given the SLLN (WLLN) condition [B1] and the CLT condition [B3], the ﬁrst term on
the right-hand side of (6.5) converges in probability to M −1
                                                           xx , and the last term in the



c Chung-Ming Kuan, 2001
6.2. ASYMPTOTIC PROPERTIES OF THE OLS ESTIMATORS                                                     153


square bracket converges in distribution to N (0, I k ). It follows from Lemma 5.22 that
(6.5) converges in distribution to

     M −1                           −1       −1
            1/2                   d
       xx V o N (0, I k ) = N (0, M xx V o M xx ),

        d
where = stands for equality in distribution. We have established the following asymp-
totic normality result.

Theorem 6.9 Given the linear speciﬁcation (6.1), suppose that [B1] and [B3] hold.
Then,
     √
      T (β̂ T − β ∗ ) −→ N (0, D o ),
                       D



where Do = M −1       −1
             xx V o M xx , or equivalently,
            √
     D −1/2   T (β̂ T − β ∗ ) −→ N (0, I k ),
                               D
       o

            −1/2        −1/2
where Do           =Vo         M xx .


   As long as we believe (or are able to verify) that the data have proper SLLN (WLLN)
and CLT eﬀects, we can invoke Theorem 6.9 and assert asymptotic normality of the
(properly normalized) OLS estimator. In particular, this result may hold for weakly
dependent and heterogeneously distributed data; neither independence nor normality is
required. By contrast, the normality property in Theorem 3.7(a) is an exact distribution
result for the OLS estimator, but it is valid only when yt are are independent, normal
random variables.

   When V o is unknown, let V̂ T denote a symmetric and positive deﬁnite matrix that
is consistent for V o . A weakly consistent estimator of Do is then
                                −1                            −1
                     1                              1
                       T                               T
     D̂ T =               x x            V̂ T            x x         .
                     T t=1 t t                       T t=1 t t

            IP                                   −1/2      IP    −1/2
As D̂ T −→ Do , we must have D̂T                           −→ Do        . It follows from Theorem 6.9 and
Lemma 5.19 that
        −1/2 √
                   T (β̂ T − β ∗ ) −→ D−1/2
                                      D                            d
     D̂ T                              o    N (0, Do ) = N (0, I k ).

The shows that Theorem 6.9 remains valid when the asymptotic covariance matrix Do
is replaced by a weakly consistent estimator D̂T . Note that D̂T does not have to be a
strongly consistent estimator here.

                                                                               
                                                                               c Chung-Ming Kuan, 2001
154                            CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


Theorem 6.10 Given the linear speciﬁcation (6.1), suppose that [B1] and [B3] hold.
Then,
          −1/2 √
                   T (β̂ T − β ∗ ) −→ N (0, I k ),
                                   D
      D̂T
                     T            −1              T            −1 and V̂    IP
where D̂ T = (       t=1 xt xt /T ) V̂ T (         t=1 xt xt /T )          T −→ V o .


Remark: Theorems 6.9 and 6.10 show that we may obtain asymptotic normality when
the condition [B2] for correct speciﬁcation is absent. Without [B2], there is no guarantee
that β̂ T would converge to β o , but it still converges to some limit β ∗ under [B1]. Then
the CLT eﬀect of [B3] suﬃces for asymptotic normality. When the asymptotic covariance
matrix V o is unknown, it is of paramount importance to ﬁnd a consistent estimator of
D o . Normalizing the OLS estimator with an inconsistent estimator of Do will, in
general, destroy asymptotic normality.

Example 6.11 Given the linear speciﬁcation

      yt = xt β + e,          t = 1, . . . , T,

suppose that the classical conditions [A1] and [A2] hold. If                  T       
                                                                              t=1 xt xt /T converges to
some limit M xx , then

                   1
                          T
      V o = lim       IE(:2t xt xt ) = σo2 M xx .
              T →∞ T
                         t=1

By invoking a suitable CLT, it can be shown that the classical conditions are suﬃcient
for [B3]. It follows from Theorem 6.9 that
      √
        T (β̂ T − β ∗ ) −→ N (0, D o ),
                         D



with a much simpler asymptotic covariance matrix:

      D o = M −1       −1    2   −1
              xx V o M xx = σo M xx .

Comparing to Theorem 3.7(a), yt here need not be normally distributed, and the asymp-
totic covariance matrix is determined by the limit of                   T        
                                                                        t=1 (xt xt )/T , which in matrix
notations can be written as X  X/T . A natural estimator of Do is

      D̂ T = σ̂T2 (X  X/T )−1 ,

where σ̂T2 is the OLS variance estimator. Theorem 6.10 then ensures
         1               √                   1
            (X  X/T )1/2 T (β̂ T − β ∗ ) =     (X  X)1/2 (β̂ T − β ∗ ) −→ N (0, I k ),
                                                                          D
        σ̂T                                 σ̂T


c Chung-Ming Kuan, 2001
6.2. ASYMPTOTIC PROPERTIES OF THE OLS ESTIMATORS                                        155


Taking the inner product of the left-hand side above we immediately conclude that

       (β̂ T − β ∗ ) (X  X)(β̂ T − β o ) D 2
                                          −→ χ (k).
                       σ̂T2

by Lemma 5.20. Note that the left-hand side is k times the F statistic (with R = I k )
in Section 3.4.1.        ✷

    The example below shows that even without the eﬀects of SLLN (WLLN) and CLT,
properly normalized OLS estimators may still have an asymptotic normal distribution.

Example 6.12 The simple linear time trend speciﬁcation,

      yt = a + b t + et ,

is a special case of the regression with non-stochastic regressors xt = [1 t] . Let âT and
b̂T denote the OLS estimators of a and b, respectively. We know that {xt xt } does not
obey a SLLN (WLLN) and that {t:t } does not obey a CLT. It is, however, easy to see
that for x̃t = [1 t/T ] ,

       1
           T
                               1       1/2
            x̃ x̃ →                         =: M ,
       T t=1 t t             1/2 1/3

so that {x̃t x̃t } obeys a SLLN. Example 5.37 also shows that {(t/T ):t } obeys a CLT.
These suggest that we may consider an alternative speciﬁcation:
                    t
      yt = a + b      + et .
                    T
The resulting OLS estimators are such that ãT = âT and b̃T = T b̂T .

    Suppose that

      yt = ao + bo t + :t ,

where :t are uncorrelated random variables with IE(:t ) = 0 and var(:t ) = σo2 . In view
of the preceding example we can then conclude that
                                         
        T 1/2 (âT − ao )    √   ãT − ao
                          = T             −→
                                               D
                                                 N (0, D o ),
         T 3/2 (b̂T − bo )       b̃T − T bo

with Do = σo2 M −1 , where

                     4   −6
      M −1 =                       .
                    −6    12

                                                              
                                                              c Chung-Ming Kuan, 2001
156                               CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


Moreover,
                                            
                     T 1/2 (âT − ao )
        D−1/2
         o
                                             −→
                                                D
                                                  N (0, I 2 ),
                     T 3/2 (b̂T − bo )

            −1/2
where D o          = σo−1 M 1/2 with

                       1   1/2
        M 1/2 =              √                .
                       0 1/(2 3)

Replacing σo by the OLS estimator σ̂T yields the same limiting result.                         ✷


6.3       Consistent Estimation of Covariance Matrix
We have seen in the preceding section that a consistent estimator of D o = M −1       −1
                                                                             xx V o M xx
is crucial for the asymptotic normality result. The matrix M xx can be consistently
estimated by its sample counterpart                       T       
                                                          t=1 xt xt /T ; it then remains to ﬁnd a consistent
estimator of
                                                 
                                  1 
                                         T
        V o = lim var            √       xt :t        ,
                T →∞               T t=1

where :t = yt − xt β ∗ . This section is concerned with consistent estimation of V o and
Do.

      In its most general form, V o can be expressed as the sum of variances and autoco-
variances:
                                                 
                                  1 
                                         T
        V o = lim var            √       xt :t
                T →∞               T t=1

                     1
                             T
             = lim         IE(:2t xt xt ) +                                                           (6.6)
                T →∞ T
                       t=1

                           1   -                                              .
                                  T −1       T
                       lim         IE(xt−τ :t−τ :t xt ) + IE(xt :t :t−τ xt−τ ) .
                      T →∞ T
                                  τ =1 t=τ +1

Let xij denote the j th element of xi . It can be seen that for t = s,

        IE(xt1 :t :s xs2 ) = IE(xs1 :s :t xt2 ),

in general. That is, the covariance matrix IE(xt−τ :t−τ :t xt ) need not be symmetric.
This matrix would be symmetric when, for example, {xt :t } is a multivariate, weakly


c Chung-Ming Kuan, 2001
6.3. CONSISTENT ESTIMATION OF COVARIANCE MATRIX                                          157


stationary process such that the autocovariances of its elements, IE(xti :t :s xsj ), do not
depend on t but only on the time diﬀerence t − s. When {xt :t } is indeed weakly
stationary, V o simpliﬁes to

                                                        T −1
                       1                       2 
                           T
       V o = lim          IE(:2t xt xt ) + lim     (T − τ ) IE(xt−τ :t−τ :t xt ).     (6.7)
                  T →∞ T                   T →∞ T
                          t=1                           τ =1

Clearly, if xt :t are serially uncorrelated, the second terms on the right-hand side of (6.6)
and (6.7) vanish; the remaining part of V o is relatively easy to estimate. When there
are serial correlations, estimating V o would be more cumbersome because it involves
an inﬁnite sum of autocovariances.


6.3.1      When Serial Correlations Are Absent

First observe that [B2] is equivalent to the condition that

       IE(:t |Y t−1 , W t ) = 0,

where :t = yt − xt β o . The sequence {:t } with the property above is known as the
martingale diﬀerence sequence with respect to the sequence of σ-algebras generated by
(Y t−1 , W t ).

   It is easy to see that if {:t } is a martingale diﬀerence sequence with respect to
{Y , W t }, its unconditional mean and autocovariances are also zero, yet it may not
  t−1

be a white noise; see Exercise 6.7. Note also that a white noise need not be a martingale
diﬀerence sequence. For the same reasons, we can verify that

       IE(xt :t ) = IE[xt IE(:t |Y t−1 , W t )] = 0.

and for any t = τ ,

       IE(xt :t :τ xτ ) = IE[xt IE(:t |Y t−1 , W t ):τ xτ ] = 0.

That is, {xt :t } is a sequence of uncorrelated, zero-mean random vectors under [B2]. In
this case, the covariance matrices (6.6) and (6.7) are

                       1
                           T
       V o = lim          IE(:2t xt xt ).                                              (6.8)
                  T →∞ T
                          t=1

Note that the simpler form of V o is a consequence of [B2], the correct speciﬁcation of
the conditional mean function. [B2] is not a necessary condition for (6.8), however.

                                                                     
                                                                     c Chung-Ming Kuan, 2001
158                                    CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


      If, in addition to [B2], :t are also conditionally homoskedastic:

        IE(:2t |Y t−1 , W t ) = σo2 ,

then (6.8) can be further simpliﬁed to

                      1
                               T
        V o = lim        IE[IE(:2t |Y t−1 , W t )xt xt ]
                 T →∞ T
                             t=1
                                         
                            1
                              T
                                       
                                                                                                   (6.9)
             = σo2      lim     IE(xt xt )
                       T →∞ T
                                       t=1

             = σo2 M xx .
As M xx can be consistently estimated by its sample counterpart, it remains to estimate
                                                                          T
σo2 . It turns out that the standard OLS estimator σ̂T2 =                 t=1 êt /(T − k) is consistent
                                                                                2

for σo2 , where êt are the OLS residuals; see Exercise 6.8. It follows that a consistent
estimator of V o is
                           
                  1
                    T
              2           
     V̂ T = σ̂T       xt xt .
                  T
                             t=1
                                                            √
In this case, the asymptotic covariance matrix of               T (β̂T − β o ) is also of a simpler form:

        D o = M −1       −1    2   −1
                xx V o M xx = σo M xx ,

which can be consistently estimated by
                            −1
                   1 T
     D̂ T = σ̂T2        x x     .                                                                (6.10)
                   T t=1 t t
This is the same as the estimator obtained in Example 6.11. Note again that, apart
from the factor T , D̂ T here is the estimated covariance matrix of β̂ T in the classical
least squares theory.
      More generally, when :t are conditionally heteroskedastic, i.e., IE(:2t |Y t−1 , W t ) are
random variables depending on t, then (6.8) cannot be simpliﬁed as before. To estimate
(6.8), it can be seen that

         1 2
             T
              [ê x x − IE(:2t xt xt )]
         T t=1 t t t

                   1  2
                         T
                                                   2    T
                 =     :t xt xt − IE(:2t xt xt ) −    :t xt (β̂ T − β o )xt xt +
                   T                                 T
                         t=1                                t=1

                          1 
                                   T
                              (β̂T − β o ) xt xt (β̂T − β o )xt xt .
                          T
                               t=1


c Chung-Ming Kuan, 2001
6.3. CONSISTENT ESTIMATION OF COVARIANCE MATRIX                                             159


The ﬁrst term on the right-hand side would converge to zero in probability if {:2t xt xt }
obeys a WLLN. By noting that under [B2],

      IE(:t xt xt xt ) = IE[IE(:t |Y t−1 , W t )xt xt xt ] = 0,

a suitable WLLN will ensure

        1
           T
           :t xt xt xt −→ 0.
                          IP
        T
          t=1

This, together with the fact that β̂T − β o is OIP (T −1/2 ), shows that the second term
also converges to zero in probability. Similarly, the third term also vanishes in the limit
by a suitable WLLN. These results together indicate that, as long as data have proper
WLLN eﬀects,

        1 2
           T
          [êt xt xt − IE(:2t xt xt )] −→ 0.
                                          IP
        T
          t=1

A consistent estimator of V o is therefore

             1 2
                   T
      V̂ T =   êt xt xt .                                                               (6.11)
             T
                  t=1

Thus, V o can be consistently estimated without modeling the conditional variance
IE(:2t |Y t−1 , W t ). An estimator of this form is known as a heteroskedasticity-consistent
covariance matrix estimator which is consistent when conditional heteroskedasticity is
present and of unknown form. Consequently, a consistent estimator of D o is
                         −1                              −1
               1                                   
                 T                T                  T
                                1                  1
      D̂ T =       xt xt           ê2t xt xt        xt xt     .                       (6.12)
               T                T                  T
                       t=1                 t=1                    t=1

This estimator was proposed by Eicker (1967) and White (1980) and known as the
Eicker-White covariance matrix estimator. While the estimator (6.10) is inconsistent
under conditionally heteroskedasticity, the Eicker-White estimator is “robust” in the
sense that it remains consistent under conditional homoskedasticity and heteroskedas-
ticity. Yet the Eicker-White estimator is less eﬃcient than (6.10) when :t are in fact
conditionally homoskedastic. That is, we obtain a more robust estimator at the expense
of (possible) eﬃciency loss.

6.3.2      When Serial Correlations Are Present

When {xt :t } exhibit serial correlations, it is still possible to estimate (6.6) and (6.7)
consistently. Let m(T ) denote a function of T which diverges to inﬁnity with T but

                                                                        
                                                                        c Chung-Ming Kuan, 2001
160                                    CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


at a slower rate. Suppose that the autocorrelations between xt :t and xt−τ :t−τ decay
suﬃciently fast such that

               
               T −1         
                            T
        1
                                      IE(xt :t :t−τ xt−τ ) → 0.
        T
            τ =m(T )+1 t=τ +1


That is, xt :t and xt−τ :t−τ are asymptotically uncorrelated in a proper way. Then for
large T , V o can be well approximated by

                 1                1  
                   T                 m(T ) T
        V ∗T =       var(xt :t ) +           IE(xt−τ :t−τ :t xt ) + IE(xt :t :t−τ xt−τ ).
                 T                 T
                      t=1                            τ =1 t=τ +1

Estimating V o now amounts to estimating V ∗T .

      White (1984) notes that a consistent estimator of V ∗T is its sample counterpart:

                 1 2             1   
                   T                m(T ) T
                                                                                   
        V̌ T =       êt xt xt +           xt−τ êt−τ êt xt + xt êt êt−τ xt−τ ,
                 T                T
                      t=1                      τ =1 t=τ +1


A major problem with this estimator is that V̌ T need not be positive semi-deﬁnite and
hence cannot be a well-deﬁned variance-covariance matrix. Newey and West (1987) show
that with a suitable weighting function wm(T ) (τ ), the estimator below is guaranteed to
be positive semi-deﬁnite while remaining consistent for V ∗T :

               1 2
                       T
        V̂ T =   êt xt xt +
               T
                      t=1
                                                                                                            (6.13)
                               
                               T −1                   
                                                      T
                       1                                                                               
                                      wm(T ) (τ )             xt−τ êt−τ êt xt + xt êt êt−τ xt−τ
                       T
                               τ =1                  t=τ +1

The estimator (6.13) is known as a heteroskedasticity and autocorrelation-consistent
(HAC) covariance matrix estimator and is valid when both conditional heteroskedastic-
ity and serial correlations are present but of an unknown form. The resulting consistent
estimator of Do is
                                       −1                          −1
                     1                                  1
                           T                                  T
        D̂ T =            x x                V̂ T            x x           ,                              (6.14)
                     T t=1 t t                           T t=1 t t

where V̂ T is given by (6.13); cf. the Eicker-White estimator (6.12). An estimator of
this type is usually referred to as the Newey-West covariance matrix estimator.


c Chung-Ming Kuan, 2001
6.4. LARGE-SAMPLE TESTS                                                               161


   In particular, Newey and West (1987) suggested the so-called Bartlett kernel for the
weighting function of V̂ T :
                   
                    1 − τ , if 0 ≤ τ ≤ 1,
                          m(T )        m(T )
     wm(T ) (τ ) =
                    0,         otherwise.

Gallant (1987) chose the Parzen kernel as the weighting function:
                                      
                   
                      −
                                  2             3
                                                  , if 0 ≤ m(T ) ≤ 1/2,
                             τ             τ                τ
                   
                    1   6           + 6
                          m(T )         m(T )
                                  3
     wm(T ) (τ ) =   2 1 − m(T                      if 1/2 ≤ m(T  ) ≤ 1,
                             τ                                  τ
                                   ,
                   
                   
                                )
                   
                    0,                             otherwise.

Consider the Bartlett kernel where wm(T ) (τ ) = 1 − τ /m(T ). For a ﬁxed m(T ), it is
decreasing in τ ; hence a smaller weight is assigned when two random variables are
separated for a long time period (i.e., τ is large). On the other hand, for a ﬁxed τ ,
wm(T ) (τ ) → 1 as m(T ) → ∞ and hence entails little loss asymptotically. In practice,
a ﬁnite number of m(T ) must be chosen to compute V̂ T . It is worth noting that a
small m(T ) may result in substantial ﬁnite-sample bias. For other choices of weight-
ing functions and a method of determining the approximation lags m(T ), we refer to
Andrews (1991).

   Comparing to the Eicker-White estimator, the Newey-West estimator is robust to
both conditional heteroskedasticity of :t and and serial correlations of xt :t , yet the
latter is less eﬃcient than the former when xt :t are not serially correlated. Finally, we
note that both the Eicker-White estimator (6.12) and the Newey-West estimator (6.14)
are non-parametric in nature because they do not rely on any parametric model of
conditional heteroskedasticity and serial correlations.


6.4     Large-Sample Tests
After learning the asymptotic properties of the OLS estimator under more general con-
ditions, it is now important to construct suitable tests and derive their limiting distri-
butions. In this section, we will study two large-sample tests for the linear hypothesis

      H0 : Rβ ∗ = r,

where R is a q × k (q < k) nonstochastic matrix with rank q, and r is a pre-speciﬁed
real vector, as in Section 3.4.

                                                              
                                                              c Chung-Ming Kuan, 2001
162                         CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


6.4.1     Wald Test

Given that the OLS estimator β̂ T is consistent for some parameter vector β ∗ , one
would expect that Rβ̂ T is “close” to Rβ ∗ when T becomes large. As Rβ ∗ = r under
the null hypothesis, whether Rβ̂ T is suﬃciently “close” to r constitutes an evidence for
or against the null hypothesis. The Wald test is based on the diﬀerence between Rβ̂ T
and r.
      When [B1] and [B3] hold, we have from Theorem 6.9 that
       √
        T R(β̂ T − β ∗ ) −→ N (0, RD o R ),
                          D


or equivalently,
            √
      Γ−1/2   T R(β̂ T − β ∗ ) −→ N (0, I q ),
                                D
       o

where Γo = RD o R = RM −1       −1 
                        xx V o M xx R . By Theorem 6.10, asymptotic normality
would not be aﬀected if Γo is replaced by its consistent estimator, e.g.,
                                      −1                  −1
                           1                     1
                               T                     T
                                                         
     Γ̂T = RD̂T R = R            xx        V̂ T        xx        R ,
                           T t=1 t t              T t=1 t t

where V̂ T is a consistent estimator of V o . That is,
       −1/2 √
              T R(β̂ T − β ∗ ) −→ N (0, I q ).
                                D
     Γ̂T                                                                                (6.15)

Under the null hypothesis, Rβ ∗ = r, the Wald test statistic is the inner product of
(6.15):
                              −1
        WT = T (Rβ̂ T − r) Γ̂T (Rβ̂ T − r).                                            (6.16)

The result below follows directly from the continuous mapping theorem (Lemma 5.20).

Theorem 6.13 Given the linear speciﬁcation (6.1), suppose that [B1] and [B3] hold.
Then, under the null hypothesis,
             D
        WT −→ χ2 (q).

where WT is given by (6.16) and q is the number of hypotheses.

      The Wald test has much wider applicability because it is valid for a wide variety
of data which may be non-Gaussian, heteroskedastic, and serially correlated. What
matter here are the asymptotic normality result of the OLS estimator and a consistent
estimator of V o . If an inconsistent estimator of V o is used in the test statistic, both D̂T
and Γ̂T become inconsistent, and, consequently, the Wald statistic WT will not have a
limiting χ2 distribution.


c Chung-Ming Kuan, 2001
6.4. LARGE-SAMPLE TESTS                                                                                  163


Example 6.14 Test of a subset of coeﬃcients being zero: Given the linear speciﬁcation

         yt = x1,t b1 + x2,t b2 + et ,

where x1,t is (k − s) × 1 and x2,t is s × 1, suppose that the speciﬁcation is correct for
the conditional mean with β o = [b1,o b2,o ] . If we want to verify whether

         IE(yt |Y t−1 , W t ) = x1,t b1,o ,

then the hypothesis is Rβ o = 0 with R = [0s×(k−s) I s ]. The Wald test statistic is

                   
                       -                                   .−1
         WT = T β̂ T R R(X  X/T )−1 V̂ T (X  X/T )−1 R
                                                                      D
                                                               Rβ̂ T −→ χ2 (s).

Note that this is a general expression of the Wald statistic; its exact form depends on
V̂ T .

     When V o can be consistently estimated by V̂ T =                            T     2     
                                                                                 t=1 êt xt xt /T ,
                                            T                                      −1
                                           
         WT = β̂ T R      R(X X)    −1
                                                    ê2t xt xt         
                                                                      (X X) −1   
                                                                                 R        Rβ̂ T .
                                              t=1

If the null hypothesis is that the i th coeﬃcient is zero, then R is the i th Cartesian unit
vector ci so that
             
                    D
      β̂i,T / dˆii −→ N (0, 1),                                                                        (6.17)

where dˆii is the i th diagonal element of D̂T /T :
                   T             
                    
              −1
     (X X)              êt xt xt (X  X)−1 .
                          2     

                        t=1

Note that dˆii is usually referred to as White’s estimate of the standard error of the i th
coeﬃcient. In view of (6.17), we can test the signiﬁcance of the i th coeﬃcient using the
t statistic with the OLS standard error replaced by the Eicker-White estimate of the
standard error. We can also base other t tests on the Eicker-White standard errors.

     When a consistent estimator of V o is V̂ T = σ̂T2 (X  X/T ), the Wald statistic becomes
              
                  -               .−1
      WT = β̂ T R R(X  X)−1 R      Rβ̂ T /σ̂T2 ,

which is nothing but s times the standard F -statistic. Therefore, for testing the i th
coeﬃcient being zero, the standard t ratio will still do. The diﬀerence is that, instead of
having an exact null distribution, the t ratio now has the asymptotic null distribution
N (0, 1).        ✷

                                                                                     
                                                                                     c Chung-Ming Kuan, 2001
164                          CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


Remark: The F -test-based version of the Wald test is appropriate only when V̂ T =
σ̂T2 (X  X/T ) is consistent for V o . We know that if :t are conditionally heteroskedastic
and/or xt :t are serially correlated, this estimator is not consistent for V o . Consequently,
the F -test-based version does not have a limiting χ2 distribution.


6.4.2       Lagrange Multiplier Test

From Section 3.4.3 we have seen that, given the constraint Rβ = r, the constrained
OLS estimator can be obtained by ﬁnding the saddle point of the Lagrangian:
        1
          (y − Xβ) (y − Xβ) + (Rβ − r) λ,
        T
where λ is the q × 1 vector of Lagrange multipliers. The underlying idea of the Lagrange
Multiplier (LM) test of this constraint is to check whether λ is suﬃciently “close” to
zero. Intuitively, λ can be interpreted as the “shadow price” of this constraint and
hence should be “small” when the constraint is valid (i.e., the null hypothesis is true);
otherwise, λ ought to be “large.” Again, the closeness between λ and zero must be
determined by the distribution of the estimator of λ.

      It is easy to ﬁnd the solutions to the Lagrangian above:

        λ̈T = 2[R(X  X/T )−1 R ]−1 (Rβ̂ T − r),

        β̈ T = β̂ T − (X  X/T )−1 R λ̈T /2.

Here, β̈ T is the constrained OLS estimator of β, and λ̈T is the basic ingredient of the
LM test. Let :t = yt − xt β ∗ , where β ∗ satisﬁes the constraint Rβ ∗ = r under the null
hypothesis and
                                           
                             1 
                                 T
        V o = lim var       √       xt :t       .
               T →∞           T t=1

Given [B1] and [B3],
        √            -                 .−1 √
            T λ̈T = 2 R(X  X/T )−1 R       T (Rβ̂ T − r)

                 −→ 2(RM −1   −1
                                  N (0, RD o R ).
                  D
                         xx R )


where Do = M −1       −1
             xx V o M xx and the limiting distribution of the right-hand side is
N (0, Λo ) with

        Λo = 4(RM −1   −1           −1  −1
                  xx R ) (RD o R )(RM xx R ) .



c Chung-Ming Kuan, 2001
6.4. LARGE-SAMPLE TESTS                                                                 165


We immediately have
           √
     Λ−1/2
                    D
      o      T λ̈T −→ N (0, I q ).

Similar as before, this result remains valid when Λo is replaced by a consistent estimator;
for example,
             -                 .−1 -                                   .
      Λ̈T = 4 R(X  X/T )−1 R      R(X  X/T )−1 V̈ T (X  X/T )−1 R
                        -                        .−1
                            R(X  X/T )−1 R           ,

where V̈ T is a consistent estimator of V o based on the constrained estimation result.
Typically, V̈ T involves xt and constrained OLS residuals ët = yt − xt β̈ T . Thus,
       −1/2 √         D
     Λ̈T       T λ̈T −→ N (0, I q ).                                                  (6.18)

and the LM statistic is the inner product of (6.18):
                           −1
      LMT = T λ̈T Λ̈T λ̈T ,                                                          (6.19)

The result below is again a consequence of the continuous mapping theorem.

Theorem 6.15 Given the linear speciﬁcation (6.1), suppose that [B1] and [B3] hold.
Then, under the null hypothesis,
               D
      LMT −→ χ2 (q),

where LMT is given by (6.19).

   Let ë = y − X β̈ T denote the vector of constrained OLS residuals. By noting that
the constrained OLS estimator must satisfy the constraint (i.e., Rβ̈ T = r), we can write

      Rβ̂ T − r = R(X  X/T )−1 X  (y − X β̈ T )/T

                   = R(X  X/T )−1 X  ë/T.

An alternative expression of λ̈T is then

      λ̈T = 2[R(X  X/T )−1 R ]−1 R(X  X/T )−1 X  ë/T.

It follows that the LM test statistic is algebraically equivalent to
                                  -                                  .−1
        LMT = T ë X(X  X)−1 R R(X  X/T )−1 V̈ T (X  X/T )−1 R
                                                                                     (6.20)
                                     −1     
                             R(X X)        X ë.

                                                              
                                                              c Chung-Ming Kuan, 2001
166                               CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


This expression shows that only constrained estimation is needed to compute the LM
statistic.

      A fundamental diﬀerence between the LM and Wald tests is that the former involves
only constrained estimation, whereas the latter requires unconstrained estimation. As
such, the Wald test would be more convenient if constrained speciﬁcations are diﬃcult
to estimate, such as a linear speciﬁcation with a nonlinear constraint. The LM test,
on the other hand, would be simpler if constrained estimation is easier to compute.
Similar to the Wald test, the LM test is also valid for a wide variety of data which
may be non-Gaussian, heteroskedastic, and serially correlated. Again, the asymptotic
normality result of the OLS estimator and consistent estimation of V o play a crucial
role in Theorem 6.15. If an inconsistent estimator of V o is used to construct Λ̈T , the
resulting LM test will not have a limiting χ2 distribution.

Example 6.16 Test of a subset of coeﬃcients being zero: Given the following speciﬁ-
cation:

         yt = x1,t b1 + et ,

suppose that we want to know whether

         IE(yt |Y t−1 , W t ) = x1,t b1,o + x2,t b2,o ,

where x1,t is (k − s) × 1 and x2,t is s × 1. The speciﬁcation would be correct for the
conditional mean if b2,o = 0. Letting β o = [b1,o b2,o ] , the null hypothesis is Rβ o = 0
with R = [0s×(k−s) I s ]. The speciﬁcation above is then a constrained version of

         yt = x1,t b1 + x2,t b2 + et .
                                                                             
For this speciﬁcation, the constrained OLS estimator is β̈ T = (b̈1,T 0 ) , where
                    T                 −1 T
                                         
         b̈1,T =          x1,t x1,t            x1,t yt = (X 1 X −1  
                                                                  ) X 1 y,
                    t=1                   t=1

which is obtained from the constrained speciﬁcation. The LM statistic now can be
computed as (6.20) with X = [X 1 X 2 ] and the vector of constrained OLS residuals
ë = y − X 1 b̈1,T .

      When V̈ T = σ̈T2 (X  X/T ) is consistent for V o under the null hypothesis, where
            T
σ̈T2 =      t=1 ët /(T − k + s), we have
                  2


                               1 -                 .−1
         (RD̈ T R )−1 =           R(X 
                                         X/T )−1 
                                                R      .
                              σ̈T2


c Chung-Ming Kuan, 2001
6.4. LARGE-SAMPLE TESTS                                                                    167


It can be veriﬁed that, by the Frisch-Waugh-Lovell Theorem,
       R(X  X)−1 R = [X 2 (I − P 1 )X 2 ]−1 ,

      R(X  X)−1 X  = [X 2 (I − P 1 )X 2 ]−1 X 2 (I − P 1 ),
where P 1 = X 1 (X 1 X 1 )−1 X 1 . The LM statistic now simpliﬁes to

      LMT = ë (I − P 1 )X 2 [X 2 (I − P 1 )X 2 ]−1 X 2 (I − P 1 )ë/σ̈T2

               = ë X 2 [X 2 (I − P 1 )X 2 ]−1 X 2 ë/σ̈T2 ,
because X 1 ë = 0 so that P 1 ë = 0. As σ̈T2 = ë ë/(T − k + s),
                  ë X(X  X)−1 X  ë
      LMT =                             = (T − k + s)R2 ,
                    ë ë/(T − k + s)
where R2 is the (non-centered) coeﬃcient of determination of regressing ë on X. If
                             T
the estimator σ̈T2 =               2
                             t=1 ët /T   is used, we simply have TR2 as the test statistic. It
must be emphasized that the simpler version of the LM statistic is valid only when
σ̈T2 (X  X/T ) is a consistent estimator of V o ; otherwise, TR2 does not have a limiting χ2
distribution. If the LM statistic is based on the heteroskedasticity-consistent covariance
matrix estimator:
               1 2
                   T
      V̈ T =        ë x x ,
               T t=1 t t t

it cannot be simpliﬁed to TR2 .
   As the LM test only requires constrained estimation, it is based on the simpler,
constrained speciﬁcation and checks whether additional s regressors should be included
as well. Comparing to Example 6.14, the Wald test checks whether the unconstrained
speciﬁcation should exclude s redundant regressors. Thus, the LM test permits testing
“up” (from a simplerr speciﬁcation), while the Wald test can be employed to test “down”
(from a more complex speciﬁcation).                 ✷


Remark: It can also be shown that the Wald and LM statistics are asymptotically
equivalent under the null hypothesis, i.e.,
                        IP
      WT − LMT −→ 0;

see Exercise 6.9. If V o is known, these two statistics turn out to be algebraically
equivalent. Note, however, that these two tests may result in conﬂicting statistical
inferences in ﬁnite samples. For instance, it can be shown that when there are no
heteroskedasticity and serial correlations, WT ≥ LMT in numerical values; see e.g.,
Godfrey (1988) for more details.

                                                                    
                                                                    c Chung-Ming Kuan, 2001
168                           CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


6.5       Application: Autoregressive Models
To analyze time series data, it is quite common to postulate an autoregressive (AR)
speciﬁcation, in the sense that the regressors are nothing but the lagged dependent
variables. In particular, an AR(p) speciﬁcation is such that

        yt = β0 + β1 yt−1 + · · · + βp yt−p + et ,      t = p + 1, . . . , T.

The speciﬁcation in Examples 6.6 and 6.8 is AR(1) without the constant term. The
OLS estimators of β0 , . . . , βp are obtained by regressing yt on η t−1 = [yt−1 . . . yt−p ]
for t = p + 1, . . . , T . The OLS variance estimator is
                     1       T
        σ̂T2 =                ê2t ,
                 T − 2p − 1
                             t=p+1

where ê2t are the OLS residuals. It is also common to compute the variance estimator
as the sum of squared residuals divided by T or T − p. The properties of the OLS
estimators depend crucially on whether yt are weakly stationary.

6.5.1      Properties of the OLS estimators

Recall that {yt } is weakly stationary if its mean, variance and autocovariances are all
independent of t. When {yt } is weakly stationary with ﬁnite fourth moment, both yt ,
yt η t−1 and η t−1 η t−1 obey a WLLN.
      Let µo = IE(yt ) and γj = cov(yt , yt−j ) for j = 0, ±1, ±2, . . . . Clearly, γ0 is the
variance of yt and γj = γ−j . Then,
                                                                  
                          γ0     γ1            γ2    ...    γp−1
                                                                
                         γ1     γ0            γ1    ...    γp−2 
                                                                
                         γ                                 γp−3 
      Γ = var(η t−1 ) =  2      γ1            γ0    ...         .
                         .                                   .. 
                         .       ..            ..   ..          
                         .        .             .      .      . 
                               γp−1 γp−2 γp−3 . . .          γ0
The WLLN eﬀect ensures:
                   1 
                     T
                           IP
                       yt −→ µo ,
                   T
                     t=p+1

           1 
             T
               yt η t−1 −→ [γ1 + µ2o . . . γp + µ2o ] ,
                         IP
           T
                 t=p+1

        1 
          T
            η t−1 η t−1 −→ Γ + µ2o  ,
                          IP
        T
           t=p+1



c Chung-Ming Kuan, 2001
6.5. APPLICATION: AUTOREGRESSIVE MODELS                                                 169


where  is the p × 1 vector of ones. It follows that
                                                
                                           µo
                                  −1 
                                      γ + µ2 
                                                 
           IP    1       µo         1       o 
     β̂ T −→                               ..   .
                µo  Γ + µ2o             .   
                                                
                                        γp + µ2o

In particular, if the speciﬁcation does not contain the constant term and ηt−1 contains
only yt−1 , the OLS estimator converges in probability to

      (γ1 + µ2o )/(γ0 + µ2o ).

When µo = 0, this probability limit simpliﬁes to γ1 /γ0 , which is precisely what we
obtained in Example 6.2.

   If yt is generated as an AR(p) process:

      yt = co + ψ1 yt−1 + ψ2 yt−2 + · · · + ψp yt−p + :t ,

the true parameters c, ψ1 , . . . , ψp must satisfy certain constraints so as to ensure weak
stationarity (see below). In addition, if

      IE(yt |Y t−1 ) = co + ψ1 yt−1 + ψ2 yt−2 + · · · + ψp yt−p ,

Theorem 6.3 ensures that the OLS estimators will converge in probability to the true pa-
rameters. Note, however, that {:t } may be a white noise but not a martingale diﬀerence
sequence.

   Whether the AR(p) speciﬁcation is a correct speciﬁcation for the conditional mean
function, the resulting OLS estimators, with suitable normalization, are asymptotically
normally distributed.

6.5.2    Diﬀerence Equation

Suppose that yt are generated according to the following ﬁrst-order diﬀerence equation:

      yt = ψ1 yt−1 + ut ,        t = 0, 1, 2, . . . .

It is easily veriﬁed that, by recursive substitution,

      yt+j = ψ1j+1 yt−1 + ψ1j ut + ψ1j−1 ut+1 + · · · + ψ1 ut+j−1 + ut+j .

Deﬁne the dynamic multiplier of ut on yt+j as

      ∂yt+j /∂ut = ψ1j ,

                                                                    
                                                                    c Chung-Ming Kuan, 2001
170                             CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


which is the eﬀect of a given change of ut on yt+j . When |ψ1 | < 1, the dynamic multiplier
approaches zero when j tends to inﬁnity so that the eﬀect of ut eventually dies out. As
yt does not depend much on what what happens in the distant past, the diﬀerence
equation is said to be stable. When |ψ1 | > 1, the diﬀerence equation is explosive in the
sense that the eﬀect of ut on future y’s grows exponentially fast. If ψ1 = 1, ut has a
constant eﬀect on future y’s.

      Consider now a p th-order diﬀerence equation:

        yt = ψ1 yt−1 + ψ2 yt−2 + · · · + ψp yt−p + ut ,

which can be expressed as a ﬁrst-order vector diﬀerence equation:

        η t = F η t−1 + ν t ,

with
                                                                                              
                    yt                      ψ1 ψ2 · · ·     ψp−1 ψp                           ut
                                                                                         
               yt−1                      1    0    ···      0        0                 0 
                                                                                         
                                                   ···               0                   
        η t =  yt−2  ,           F =     0    1             0           ,        νt =  0  .
                                                                     ..                . 
                  ..                     ..   ..            ..                         . 
                   .                      .    .   ···       .        .                . 
                yt−p+1                      0    0    ···      1        0                   0

Recursive substitution yields

        η t+j = F j+1 ηt−1 + F j ν t + F j−1 ν t+1 + · · · + F ν t+j−1 + ν t+j .

The dynamic multiplier of ν t on η t+j is

        ∇νt η t+j = F j ,

and its (m, n) th element is denoted as f j (m, n). It is straightforward to verify that

                                                               
                                                               j
        yt+j = f j+1 (1, 1)yt−1 + · · · + f j+1 (1, p)yt−p +         f i (1, 1)ut+j−i .
                                                               i=0

The dynamic multiplier of ut on yt+j is thus

        ∂yt+j /∂ut = f j (1, 1),

the (1, 1) th element of F j .

      Recall that the eigenvalues of F solve the equation: det(F − λI) = 0, which is
known as the em characteristic equation of F . This equation is of the following form:

        λp − ψ1 λp−1 − · · · − ψp−1 λ − ψp = 0.


c Chung-Ming Kuan, 2001
6.5. APPLICATION: AUTOREGRESSIVE MODELS                                                171


When all the eigenvalues of F are distinct, then F can be diagonalized by a nonsingular
matrix C such that C −1 F C = Λ, where Λ is the diagonal matrix with all the eigenval-
ues of F on its main diagonal. Writing F = CΛC −1 , we have F j = CΛj C −1 . When
all the eigenvalues of F are less than one in modulus (i.e., for any complex eigenvalue
λ∗ = a + bi, i = (−1)1/2 , |λ∗ | = (a2 + b2 )1/2 < 1), Λj tends to the zero matrix as j
                                                  j
goes to inﬁnity, and so does F j . In this case, f11 will be approaching zero, so that the
diﬀerence equation is stable. Thus, a p th-order diﬀerence equation is stable provided
that the eigenvalues of F (the roots of the characteristic equation) are all less than
one in modulus. This is equivalent to saying that these roots must lie inside the unit
circle on the complex plane. This condition requires that the coeﬃcients ψi must satisfy
certain constraints.

    If there is a root of the characteristic equation equals one in modulus (i.e., on the
unit circle), such a root is usually referred to as a unit root. When the characteristic
equation has a unit root with all remaining roots less than one in modulus,
                                    
                     1 0 ··· 0
                                    
                   0 0 ··· 0 
                                     −1
      lim F j = C  . . .            C ,
     j→∞           .. ..    . . ... 
                                    
                     0 0 ··· 0

so that its (1, 1) th element f j (1, 1) is a constant. If there is at least one eigenvalue
greater than one in modulus, this eigenvalue eventually dominates, and F j will explode.
The diﬀerence equation is then explosive.

    Alternatively, setting λ = 1/z and multiplying the characteristic equation by z p we
obtain:

      1 − ψ1 z − · · · − ψp−1 z p−1 − ψp z p = 0.

The condition that all the roots of the characteristic equation are inside the unit circle
is thus equivalent to requiring all the roots of the polynomial above being outside the
unit circle.


6.5.3     Weak Stationarity

Let B denote the back-shift operator in the sense that Byt = yt−1 . We will also write
B2 yt = B(Byt ) = yt−2 , B3 yt = B(B2 yt ) = yt−3 , and so on. This operator has no eﬀect
on constants, i.e., for any constant c, Bc = c. Hence, the back-shift operator has the

                                                             
                                                             c Chung-Ming Kuan, 2001
172                            CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


linear property:

        B(cyt + dzt ) = c(Byt ) + d(Bzt ) = cyt−1 + dzt−1 ,

for any constants c and d.

      Consider now the AR(p) process

        yt = c + ψ1 yt−1 + · · · + ψp yt−p + :t ,

which can be written compactly as

        Ψ(B)yt = c + :t ,

where Ψ(B) = 1 + ψ1 B + · · · + ψp Bp is a polynomial in B. When Ψ(B) = 1 − ψ1 B, it
is an AR(1) process. As discussed above, this system would be stable if all the roots of
Ψ(z) = 0 are outside the unit circle.

      Consider again an AR(1) process:

        (1 − ψ1 B)yt = c + :t .

Note that for large t,

        (1 + ψ1 B + ψ12 B2 + · · · + ψ1t Bt )(1 − ψ1 B)yt = (1 − ψ1t+1 Bt+1 )yt ≈ yt ,

provided that Bt+1 yt = y−1 is ﬁnite and |ψ1 | < 1. This suggests that, when |ψ1 | < 1,
the inverse of (1 − ψ1 B) can be deﬁned as

        (1 − ψ1 B)−1 = lim (1 + ψ1 B + ψ12 B2 + · · · + ψ1t Bt ),
                           t→∞

so that (1 − ψ1 B)−1 (1 − ψ1 B) = I, the identity operator. It follows that
                                             c
        yt = (1 − ψ1 B)−1 (c + :t ) =            + (1 − ψ1 B)−1 :t .
                                          1 − ψ1

      When {:t } is a white noise with mean zero and variance σ'2 , we ﬁnd IE(yt ) = c/(1 −
ψ1 ) and

        γ0 = (1 + ψ12 + ψ14 + · · · )σ'2 = σ'2 /(1 − ψ12 ),

        γ1 = (ψ1 + ψ13 + ψ15 + · · · )σ'2 = ψ1 [σ'2 /(1 − ψ12 )],

        γ2 = (ψ12 + ψ14 + ψ16 + · · · )σ'2 = ψ12 [σ'2 /(1 − ψ12 )],
           ..
            .
                     σ'2
        γj = ψ1j           .
                   1 − ψ12


c Chung-Ming Kuan, 2001
6.6. LIMITATIONS OF THE LINEAR SPECIFICATION                                                  173


Thus, yt have a constant mean, constant variance, and autocovariances depending on j
but not on t. This shows that {yt } is a weakly stationary process. On the other hand,
yt cannot be weakly stationary when the diﬀerence equation is not stable. Note also
that the autocovariances can be expressed as

      γj = ψ1j−1 γj−1 = ψ1j γ0 ,     j = 0, 1, 2, . . . ,

and the autocorrelations are ρj = ψ1j = ψ1 ρj−1 . That is, both the autocovariances and
autocorrelations have the same AR(1) structure. If we view the autocorrelations of a
process as its “memory,” a weakly stationary AR(1) process has exponentially decaying
memory and is also said to be of “short memory.”

   The previous results are readily generalized. For the AR(p) processes Ψ(B)yt =
c + :t , where Ψ(B) is a p th-order polynomial in B. When all the roots of Ψ(z) are
outside the unit circle, yt are weakly stationary with IE(yt ) = c/(1 − ψ1 − ψ2 − · · · − ψp ),
autocovariances: acut

      γ0 = ψ1 γ1 + ψ2 γ2 + · · · + ψp γp + σ'2 ,

      γj = ψ1 γj−1 + ψ2 γj−2 + · · · + ψp γj−p ,            j = 1, 2, . . . ,

and autocorrelations:

      ρj = ψ1 ρj−1 + ψ2 ρj−2 + · · · + ψp ρj−p ,            j = 1, 2, . . . .

The equation for autocorrelations is also known as the Yule-Walker equation which has
the same AR(p) structure. As the initial value ρ0 = 1, it is then clear that ρj → 0
exponentially fast as j tends to inﬁnity. Hence, a weakly stationary AR(p) process is
also a “short memory” process.


6.6     Limitations of the Linear Speciﬁcation
In this chapter the classical conditions are relaxed so as to allow for more general data
in linear regressions. Careful readers must have noticed that, aside from the conditions
on the stochastic properties of data, there is always a condition of correct speciﬁcation
([A2](i) in Chapter 3 and [B2] in this chapter). Such a condition may be too strong in
practice, as discussed in Section 3.7. In the context of this chapter, we also notice that,
while IE(yt |Y t−1 , W t ) must be a function of the elements of Y t−1 and W t , [B2] requires
this function being linear. A suﬃcient condition for linear conditional mean function
is that all the elements of Y t−1 and W t are jointly normally distributed; this condition

                                                                          
                                                                          c Chung-Ming Kuan, 2001
174                     CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


is also much too strong in practic, however. If joint normality is unlikely, there would
be no guarantee that [B2] is true. Hence, the OLS estimator may converge to some
parameter vector that does not have any meaningful interpretations. This suggests
that we should not conﬁne ourselves to linear speciﬁcations and may want to explore
nonlinear speciﬁcations instead. The least squares theory for nonlinear speciﬁcations is
the topic to which we now turn.





c Chung-Ming Kuan, 2001
6.6. LIMITATIONS OF THE LINEAR SPECIFICATION                                              175


Exercises

 6.1 Suppose that yt = xt β o + :t such that IE(:t ) = 0 for all t.

      (a) If {xt } and {:t } are two mutually independent sequences, i.e., xt and :τ are
          independent for any t and τ , is β̂ T unbiased?
      (b) If {xt } and {:t } are two mutually uncorrelated sequences, i.e., IE(xt :τ ) = 0
          for any t and τ , is β̂ T unbiased?

 6.2 Consider the speciﬁcation yt = xt β + et , where xt is k × 1. Suppose that

           IE(yt |Y t−1 , W t ) = z t γ o ,

     where z t is m × 1. Assuming suitable weak laws for xt and z t , what is the
     probability limit of the OLS estimator of β?

 6.3 Consider the speciﬁcation yt = xt β + zt γ + et , where xt is k1 × 1 and z t is k2 × 1.
     Suppose that

           IE(yt |Y t−1 , W t ) = xt β o .

     Assuming suitable weak laws for xt and z t , what are the probability limits of the
     OLS estimators of β and γ?

 6.4 Consider a linear speciﬁcation with xt = (1 dt ) , where dt is a one-time dummy:
     dt = 1 if t = t∗ , a particular date, and dt = 0 otherwise. What is

                1
                       T
            lim       IE(xt xt )?
           T →∞ T
                  t=1

     How can you prove (or disprove) OLS consistency?

 6.5 State the conditions under which the OLS estimator of seemingly unrelated re-
     gressions is consistent and asymptotically normally distributed.

 6.6 For Example 6.12, suppose that :t are serially correlated with unequal variances.
     Given the asymptotic normality result for the OLS estimators âT and b̂T .

 6.7 Given yt = xt β o , if {:t } is a martingale diﬀerence sequence with respect to
     {Y t−1 , W t }, prove that IE(:t ) = 0 and IE(:t :τ ) = 0 for all t = τ . Is {:t } a
     white noise? Why or why not?

                                                               
                                                               c Chung-Ming Kuan, 2001
176                      CHAPTER 6. ASYMPTOTIC LEAST SQUARES THEORY


 6.8 Given the conditions of Theorem 6.3, let :t = yt − xt β o such that IE(:2t |xt ) = σo2 .
      Prove that the standard OLS variance estimator σ̂T2 is weakly consistent for σo2 .
                                                               IP
 6.9 Prove that under the null hypothesis, WT − LMT −→ 0. Also show that when
      V o is known, WT = LMT .


References

Andrews, Donald W. K. (1991). Heteroskedasticity and autocorrelation consistent co-
      variance matrix estimation, Econometrica, 59, 817–858.

Davidson, James (1994). Stochastic Limit Theory, New York, NY: Oxford University
      Press.

Gallant, A. Ronald (1987). Nonlinear Statistical Models, New York, NY: Wiley.

Eicker, (1967).

Godfrey, L. G. (1988). Misspeciﬁcation Tests in Econometrics: The Lagrange Multiplier
      Principle and Other Approaches, New York, NY: Cambridge University Press.

Newey, Whitney K. and Kenneth West (1987). A simple positive semi-deﬁnite het-
      eroskedasticity and autocorrelation consistent covariance matrix, Econometrica,
      55, 703–708.

White, Halbert (1980). A heteroskedasticity-consistent covariance matrix estimator and
      a direct test for heteroskedasticity, Econometrica, 48, 817–838.

White, Halbert (1984). Asymptotic Theory for Econometricians, Orlando, FL: Aca-
      demic Press.





c Chung-Ming Kuan, 2001
Chapter 7

Nonlinear Least Squares Theory

For real world data, it is hard to believe that linear speciﬁcations are “universal” in
characterizing all economic relationships. A straightforward extension of linear speciﬁ-
cations is to consider speciﬁcations that are nonlinear in parameters. For example, the
function α+ βxγ oﬀers more ﬂexibility than the simple linear function α+ βx. Although
such an extension is quite natural, it also creates various diﬃculties. First, deciding an
appropriate nonlinear function is typically diﬃcult. Second, it is usually cumbersome to
estimate nonlinear speciﬁcations and analyze the properties of the resulting estimators.
Last, but not the least, estimation results of nonlinear speciﬁcation may not be easily
interpreted.

   Despite these diﬃculties, more and more empirical evidences show that many eco-
nomic relationships are in fact nonlinear. Examples include nonlinear production func-
tions, regime switching in output series, and time series models that can capture asym-
metric dynamic patterns. In this chapter, we concentrate on the estimation of and hy-
pothesis testing for nonlinear speciﬁcations. For more discussion of nonlinear regressions
we refer to Gallant (1987), Gallant and White (1988), Davidson and MacKinnon (1993)
and Bierens (1994).


7.1     Nonlinear Speciﬁcations
We consider the nonlinear speciﬁcation

      y = f (x; β) + e(β),                                                           (7.1)

where f is a given function with x an E × 1 vector of explanatory variables and β a
k × 1 vector of parameters, and e(β) denotes the error of the speciﬁcation. Note that for

                                           177
178                            CHAPTER 7. NONLINEAR LEAST SQUARES THEORY


a nonlinear speciﬁcation, the number of explanatory variables E need not be the same
as the number of parameters k. This formulation includes the linear speciﬁcation as a
special case with f (x; β) = x β and E = k. Clearly, nonlinear functions that can be
expressed in a linear form should be treated as linear speciﬁcations. For example, a
speciﬁcation involving a structural change is nonlinear in parameters:
           "
              α + βxt + et ,       t ≤ t∗ ,
      yt =
              (α + δ) + βxt + et , t > t∗ ,
but it is equivalent to the linear speciﬁcation:

        yt = α + δDt + βxt + et ,

where Dt = 0 if t ≤ t∗ and Dt = 1 if t > t∗ . Our discussion in this chapter focuses on
the speciﬁcations that cannot be expressed as linear functions.
      There are numerous nonlinear speciﬁcations considered in empirical applications. A
ﬂexible nonlinear speciﬁcation is
                     xγt − 1
        yt = α + β           + et ,
                         γ
where (xγt − 1)/γ is the so-called Box-Cox transform of xt , which yields diﬀerent func-
tions, depending on the value γ. For example, the Box-Cox transform yields xt − 1
when γ = 1, 1 − 1/xt when γ = −1, and a value close to ln xt when γ approaches
zero. This function is thus more ﬂexible than, e.g., the linear speciﬁcation α + βx and
nonlinear speciﬁcation α + βxγ . Note that the Box-Cox transformation is often applied
to positively valued variables.
      In the study of ﬁrm behavior, the celebrated CES (constant elasticity of substitution)
production function suggests characterizing the output y by the following nonlinear
function:
             8                   9−λ/γ
        y = α δL−γ + (1 − δ)K −γ       ,

where L denotes labor, K denotes capital, α, γ, δ and λ are parameters such that α > 0,
0 < δ < 1 and γ ≥ −1. The elasticity of substitution for a CES production function is
                 d ln(K/L)        1
        s=                   =         ≥ 0,
             d ln(MPL /MPK )   (1 + γ)
where MP denotes marginal product. This function includes the linear, Cobb-Douglas,
Leontief production functions as special cases. To estimate the CES production function,
the following nonlinear speciﬁcation is usually considered:
                   λ 8                      9
      ln y = ln α − ln δL−γ + (1 − δ)K −γ + e;
                   γ


c Chung-Ming Kuan, 2001
7.1. NONLINEAR SPECIFICATIONS                                                                 179


for a diﬀerent estimation strategy, see Exercise 7.3. On the other hand, the translog
(transcendental logarithmic) production function is nonlinear in variables but linear in
parameters:

        ln y = β1 + β2 ln L + β3 ln K + β4 (ln L)(ln K) + β5 (ln L)2 + β6 (ln K)2 ,

and hence can be estimated by the OLS method.

   In the time series context, a nonlinear AR(p) speciﬁcation is

        yt = f (yt−1 , . . . , yt−p ) + et .

For example, the exponential autoregressive (EXPAR) speciﬁcation takes the following
form:
               
               p
                 8                     9
        yt =         αj + βj exp −γyt−1
                                    2
                                           yt−j + et ,
               j=1

                                     2
where in some cases one may replace yt−1                                   2
                                         in the exponential function with yt−j for
j = 1, . . . , p. This speciﬁcation was designed to describe physical vibration whose
amplitude depends on the magnitude of yt−1 .

   As another example, consider the self-exciting threshold autoregressive (SETAR)
speciﬁcation:
           "
                  a0 + a1 yt−1 + · · · + ap yt−p + et , if yt−d ∈ (−∞, c],
        yt =
                  b0 + b1 yt−1 + · · · + bp yt−p + et ,      if yt−d ∈ (c, ∞),

where d is known as the “delay parameter” which is an integer between 1 and p, and c is
the “threshold parameter.” Note that the SETAR model is diﬀerent from the structural
change model in that the parameters switch from one regime to another depending on
whether a past realization yt−d exceeds the threshold value c. This speciﬁcation can be
easily extended to allow for r threshold parameters, so that the speciﬁcation switches
among r + 1 diﬀerent dynamic structures.

   The SETAR speciﬁcation above can be written as

                     
                     p                        
                                               p
        yt = a0 +          aj yt−j + ∆0 +            ∆j yt−j 1{yt−d >c} + et ,
                     j=1                       j=1

where aj + ∆j = bj , and 1 denotes the indicator function. To avoid abrupt changes of
parameters, one may replace the indicator function with a “smooth” function h so as

                                                                          
                                                                          c Chung-Ming Kuan, 2001
180                             CHAPTER 7. NONLINEAR LEAST SQUARES THEORY


to allow for smoother transitions of structures. It is typical to choose the function h as
a distribution function, e.g.,
                                     1
        h(yt−d ; c, δ) =                          ,
                           1 + exp[−(yt−d − c)/δ]

where c is still the threshold value and δ is a scale parameter. This leads to the following
smooth threshold autoregressive (STAR) speciﬁcation:

                    
                    p                   
                                         p
        yt = a0 +         aj yt−j + ∆0 +   ∆j yt−j h(yt−d ; c, δ) + et .
                    j=1                   j=1

Clearly, this speciﬁcation behaves similarly to a SETAR speciﬁcation when |(yt−d −c)/δ|
is very large. For more nonlinear time series models and their motivations we refer to
Tong (1990).

      Another well known nonlinear speciﬁcation is the so-called artiﬁcial neural network
which has been widely used in cognitive science, engineering, biology and linguistics. A
3-layer neural network can be expressed as
                                                             
                                        
                                        q           
                                                     p
      f (x1 . . . . , xp ; β) = g α0 +   αi h γi0 +   γij xj  ,
                                        i=1            j=1

where β is the parameter vector containing all α and γ, g and h are some pre-speciﬁed
functions. In the jargon of the neural network literature, this speciﬁcation contains
p “inputs units” in the input layer (each corresponding to an explanatory variable
xj ), q “hidden units” in the hidden (middle) layer with the i th hidden-unit activation
                  p
hi = h(γi0 +      j=1 γij xj ), and one “output unit” in the output layer with the activation
                 q
o = g(β0 +       i=1 βi hi ). The functions h and g are known as “activation functions,” the
parameters in these functions are “connection weights.” That is, the input values simul-
taneously activate q hidden units, and these hidden-unit activations in turn determine
the output value. The output value is supposed to capture the behavior of the “target”
(dependent) variable y. In the context of nonlinear regression, we can write
                                           
                  q            p
     y = g α0 +      αi h γi0 +     γij xj  + e,
                          i=1           j=1

For a multivariate target y, networks with multiple outputs can be constructed similarly
with g being a vector-valued function.

      In practice, it is typical to choose h as a “sigmoid” (S-shaped) function bounded
within a certain range. For example, two leading choices of h are the logistic function


c Chung-Ming Kuan, 2001
7.2. THE METHOD OF NONLINEAR LEAST SQUARES                                                   181


h(x) = 1/(1 + e−x ) which is bounded between 0 and 1 and the hyperbolic tangent
function

                ex − e−x
      h(x) =             ,
                ex + e−x

which is bounded between −1 and 1. The function g may be the identity function or the
same as h. Although the class of neural networks is highly nonlinear in parameters, it
possesses two appealing properties. First, a neural network is capable of approximating
any Borel-measurable function to any degree of accuracy, provided that the number of
hidden units q is suﬃciently large. Second, to achieve a given degree of approximation
accuracy, neural networks are relatively more parsimonious than, e.g., the polynomial
and trignometric expansions. For more details of artiﬁcial neural networks and their
relationships to econometrics we refer to Kuan and White (1994).


7.2     The Method of Nonlinear Least Squares

Formally, we consider the nonlinear speciﬁcation (7.1):

      y = f (x; β) + e(β),

where f : R2 × Θ1 → R, Θ1 denotes the parameter space, a subspace of Rk , and e(β) is
the speciﬁcation error. Given T observations of y and x, let
                                                                  
                y1                                      f (x1 ; β)
                                                                 
           y                                          f (x ; β) 
           2                                              2      
      y =  . ,             f (x1 , . . . , xT ; β) =      ..     .
           ..                                              .     
                                                                 
            yT                                           f (xT ; β)

The nonlinear speciﬁcation (7.1) now can be expressed as

      y = f (x1 , . . . , xT ; β) + e(β),

where e(β) is the vector of errors.


7.2.1      Nonlinear Least Squares Estimator

Our objective is to ﬁnd a k-dimensional surface that “best” ﬁts the data (yt , xt ), t =
1, . . . , T . Analogous to the OLS method, the method of nonlinear least squares (NLS)

                                                                         
                                                                         c Chung-Ming Kuan, 2001
182                              CHAPTER 7. NONLINEAR LEAST SQUARES THEORY


suggests to minimize the following NLS criterion function with respect to β:
                    1
        QT (β) =      [y − f (x1 , . . . , xT ; β)] [y − f (x1 , . . . , xT ; β)]
                    T
                                                                                                             (7.2)
                   1
                        T
                 =   [yt − f (xt ; β)]2 .
                   T
                       t=1

Note that QT is also a function of the data yt and xt ; we omit the arguments yt and xt
just for convenience.

      The ﬁrst order condition of the NLS minimization problem is a system of k nonlinear
equations with k unknowns:
                     2                                                         set
        ∇β QT (β) = − ∇β f (x1 , . . . , xT ; β) [y − f (x1 , . . . , xT ; β)] = 0,
                     T
where
                                       -                                                             .
        ∇β f (x1 , . . . , xT ; β) =       ∇β f (x1 ; β) ∇β f (x2 ; β) . . .         ∇β f (xT ; β)       ,

is a k×T matrix. A solution to this minimization problem is some β̄ ∈ Θ1 that solves the
ﬁrst order condition: ∇β QT (β̄) = 0, and satisﬁes the second order condition: ∇2β QT (β̄)
is positive deﬁnite. We thus impose the following identiﬁcation requirement; cf. [ID-1]
for linear speciﬁcations.

[ID-2] f (x; ·) is twice continuously diﬀerentiable in the second argument on Θ1 , such
that for given data (yt , xt ), t = 1, . . . , T , ∇2β QT (β) is positive deﬁnite at some interior
point of Θ1 .

      While [ID-2] ensures that a minimum of QT (β) can be found, it does not guarantee
the uniqueness of this solution. For a a given data set, there may exist multiple solutions
to the NLS minimization problem such that each solution is a local minimum of QT (β).
This result is stated below; cf. Theorem 3.1.

Theorem 7.1 Given the speciﬁcation (7.1), suppose that [ID-2] holds. Then, there
exists a solution that minimizes the NLS criterion function (7.2).


      Writing f (x1 , . . . , xT ; β) as f (β), we have
                      2                       2
        ∇2β QT (β) = − ∇2β f (β) [y − f (β)] + [∇β f (β)][∇β f (β)] .
                      T                       T
For linear regressions, f (β) = Xβ so that ∇β f (β) = X  and ∇2β f (β) = 0. It follows
that ∇2β QT (β) = 2(X  X)/T , which is positive deﬁnite if, and only if, X has full


c Chung-Ming Kuan, 2001
7.2. THE METHOD OF NONLINEAR LEAST SQUARES                                               183


column rank. This shows that [ID-2] is, in eﬀect, analogous to [ID-1] for the OLS
method. Comparing to the OLS method, the NLS minimization problem may not have
a closed-form solution because the ﬁrst order condition is a system of nonlinear functions
in general; see also Exercise 7.1.

The minimizer of QT (β) is known as the NLS estimator and will be denoted as β̂ T . Let
ŷ denote the vector of NLS ﬁtted values with the t th element ŷt = f (xt , β̂ T ), and ê
denote the vector of NLS residuals y − ŷ with the t th element êt = yt − ŷt . Denote the
transpose of ∇β f (β) as Ξ(β). Then by the ﬁrst order condition,

      Ξ(β̂ T ) ê = [∇θ f (β̂ T )]ê = 0.

That is, the residual vector is orthogonal to every column vector of Ξ(β̂ T ). Geometri-
cally, f (β) deﬁnes a surface on Θ1 , and for any β in Θ1 , Ξ(β) is a k-dimensional linear
subspace tangent at the point f (β). Thus, y is orthogonally projected onto this surface
at f (β̂ T ) so that the residual vector is orthogonal to the tangent space at that point. In
contrast with linear regressions, there may be more than one orthogonal projections and
hence multiple solutions to the NLS minimization problem. There is also no guarantee
that the sum of NLS residuals is zero; see Exercise 7.2.

Remark: The marginal response to the change of the i th regressor is ∂f (xt ; β)/∂xti .
Thus, one should be careful in interpreting the estimation results because a parameter
in a nonlinear speciﬁcation is not necessarily the marginal response to the change of a
regressor.

7.2.2    Nonlinear Optimization Algorithms

When a solution to the ﬁrst order condition of the NLS minimization problem cannot be
obtained analytically, the NLS estimates must be computed using numerical methods.
To optimizing a nonlinear function, an iterative algorithm starts from some initial value
of the argument in that function and then repeatedly calculates next available value
according to a particular rule until an optimum is reached approximately. It should be
noted that when there are multiple optima, an iterative algorithm may not be able to
locate the global optimum. In fact, it is more common that an algorithm gets stuck at
a local optimum, except in some special cases, e.g., when optimizing a globally concave
(convex) function. In the literature, several new methods, such as the simulated anneal-
ing algorithm, have been proposed to ﬁnd the global solution. These methods have not
yet been standard because they are typically diﬃcult to implement and computation-
ally very intensive. We will therefore conﬁne ourselves to those commonly used “local”

                                                               
                                                               c Chung-Ming Kuan, 2001
184                               CHAPTER 7. NONLINEAR LEAST SQUARES THEORY


methods.

      To minimize QT (β), a generic algorithm can be expressed as

        β (i+1) = β (i) + s(i) d(i) ,

so that the (i + 1) th iterated value β (i+1) is obtained from β (i) , the value from the pre-
vious iteration, by adjusting the amount s(i) d(i) , where d(i) characterizes the direction
of change in the parameter space and s(i) controls the amount of change. Diﬀerent al-
gorithms are resulted from diﬀerent choices of s and d. As maximizing QT is equivalent
to minimizing −QT , the methods discussed here are readily modiﬁed to the algorithms
for maximization problems.

      Consider the ﬁrst-order Taylor expansion of Q(β) about β † :

        QT (β) ≈ QT (β † ) + [∇β QT (β † )] (β − β † ).

Replacing β with β (i+1) and β † with β (i) we have
                           8          9
        QT β (i+1) ≈ QT β (i) + ∇β QT β (i) s(i) d(i) .

Note that this approximation is valid when β (i+1) is in the neighborhood of β (i) . Let
g(β) denote the gradient vector of QT : ∇β QT (β), and g(i) denote g(β) evaluated at
β (i) . If d(i) = −g(i) ,
                                8           9
        QT β (i+1) ≈ QT β (i) − s(i) g(i) g (i) .

As g (i)) g (i) is non-negative, we can ﬁnd a positive and small enough s such that QT
is decreasing. Clearly, when β (i) is already a minimum of QT , g (i) is zero so that no
further adjustment is possible. This suggests the following algorithm:

        β (i+1) = β (i) − s(i) g (i) .

Choosing d(i) = g (i) leads to:

        β (i+1) = β (i) + s(i) g (i) ,

which can be used to search for a maximum of QT .

    Given the search direction, one may want to choose s(i) such that the next value
                                   
of the objective function QT β (i+1) is a minimum. This suggests that the ﬁrst order
condition below should hold:
                 
      ∂QT β (i+1)              (i+1)  ∂β (i+1)
                    = ∇ β Q T  β                 = −g(i+1) g(i) = 0.
          ∂s(i)                          ∂s(i)


c Chung-Ming Kuan, 2001
7.2. THE METHOD OF NONLINEAR LEAST SQUARES                                                 185


Let H (i) denote the Hessian matrix of QT evaluated at β (i) :

      H (i) = ∇2β QT (β)|β=β(i) = ∇β g(β)|β=β(i) .

Then by Taylor’s expansion of g, we have
                                            
      g (i+1) ≈ g (i) + H (i) β (i+1) − β (i) = g (i) − H (i) s(i) g (i) .

It follows that

      0 = g (i+1) g (i) ≈ g (i) g (i) − s(i) g (i) H (i) g (i) ,

or equivalently,

                  g(i) g (i)
      s(i) =                      .
               g(i) H (i) g(i)

The step length s(i) is non-negative whenever H (i) is positive deﬁnite. The algorithm
derived above now reads

                                g (i) g (i)
      β (i+1) = β (i) −                          g (i) ,
                            g (i) H (i) g (i)

which is known as the steepest descent algorithm. If H (i) is not positive deﬁnite, s(i)
may be non-negative so that this algorithm may point to a wrong direction.

   As the steepest descent algorithm adjusts parameters along the opposite of the
gradient direction, it may run into diﬃculty when, e.g., the nonlinear function being
optimized is ﬂat around the optimum. The algorithm may iterate back and forth without
much progress in approaching an optimum. An alternative is to consider the second-
order Taylor expansion of Q(β) around some β † :

                                            1
      QT (β) ≈ QT (β † ) + g † (β − β † ) + (β − β † ) H † (β − β † ),
                                            2

where g† and H † are g and H evaluated at β † , respectively. From this expansion, the
ﬁrst order condition of QT (β) may be expressed as

      g † + H † (β − β † ) ≈ 0,

so that β ≈ β † − (H † )−1 g † . This suggests the following algorithm:
                             −1 (i)
      β (i+1) = β (i) − H (i)    g ,

                                                                       
                                                                       c Chung-Ming Kuan, 2001
186                            CHAPTER 7. NONLINEAR LEAST SQUARES THEORY

                                                               −1 (i)
where the step length is 1, and the direction vector is − H (i)    g . This is also
known as the Newton-Raphson algorithm. This algorithm is more diﬃcult to implement
because it involves matrix inversion at each iteration step.

      From Taylor’s expansion we can also see that
                             1            −1 (i)
        QT β (i+1) − QT β (i) ≈ − g (i) H (i)    g ,
                                 2
where the right-hand side is negative provided that H (i) is positive deﬁnite. When this
approximation is good, the Newton-Raphson algorithm usually (but not always) results
in a decrease in the value of QT . This algorithm may point to a wrong direction if
H (i) is not positive deﬁnite; this happens when, e.g., Q is concave at β i . When QT is
(locally) quadratic with the local minimum β ∗ , the second-order expansion about β ∗ is
exact, and hence

        β = β ∗ − H(β ∗ )−1 g(β ∗ ).

In this case, the Newton-Raphson algorithm can reach the minimum in a single step.
Alternatively, we may also add a step length to the Newton-Raphson algorithm:
                                    −1 (i)
        β (i+1) = β (i) − s(i) H (i)    g ,
                                                  
where s(i) may be found by minimizing Q β (i+1) . In practice, it is more typical to
                            
choose s(i) such that Q β (i) is decreasing at each iteration.

      A algorithm that avoids computing the second-order derivatives is the so-called
Gauss-Newton algorithm. When QT (β) is the NLS criterion function,
                2                      2
        H(β) = − ∇2β f (β)[y − f (β)] + Ξ(β) Ξ(β),
                T                      T
where Ξ(β) = ∇β f (β). It is therefore convenient to ignore the ﬁrst term on the right-
hand side and approximate H(β) by 2Ξ(β) Ξ(β)/T . There are some advantages of this
approximation. First, only the ﬁrst-order derivatives need to be computed. Second,
this approximation is guaranteed to be positive deﬁnite under [ID-2]. The resulting
algorithm is
                         8            9−1  (i) 8           9
        β (i+1) = β (i) + Ξ β (i) Ξ β (i)     Ξ β       y − f β (i) .

Observe that the adjustment term can be obtained as the OLS estimator of regressing
                   
y − f β (i) on Ξ β (i) ; this regression is thus known as the Gauss-Newton regression.
The iterated β values can be easily computed by performing the Gauss-Newton regres-
sion repeatedly. The performance of this algorithm may be quite diﬀerent from the


c Chung-Ming Kuan, 2001
7.2. THE METHOD OF NONLINEAR LEAST SQUARES                                                              187


Newton-Raphson algorithm because it utilizes only an approximation to the Hessian
matrix.

   To maintain a correct search direction of the steepest descent and Newton-Raphson
algorithms, it is important to ensure that H (i) is positive deﬁnite at each iteration. A
simple approach is to correct H (i) , if necessary, by adding an appropriate matrix to it.
A popular correction is

      H (i)
        c =H
             (i)
                 + c(i) I,

                                                                        (i)
where c(i) is a positive number chosen to “force” H c to be a positive deﬁnite matrix.
Let H̃ = H −1 . One may also compute
           (i)           (i)
      H̃ c = H̃                + cI,

because it is the inverse of H (i) that matters in the algorithm. Such a correction is used
in, for example, the so-called Marquardt-Levenberg algorithm.
                                                                               (i)
   The quasi-Newton method, on the other hand, corrects H̃                           iteratively by adding a
symmetric, correction matrix C (i) :
           (i+1)               (i)
      H̃             = H̃            + C (i) ,
                                          (0)
with the initial value H̃                         = I. This method includes the Davidon-Fletcher-Powell
(DFP) algorithm and the Broydon-Fletcher-Goldfarb-Shanno (BFGS) algorithm, where
the latter is the algorithm used in the GAUSS program. In the DFP algorithm,
                                            (i)               (i)
          (i)        δ (i) δ (i)        H̃ γ (i) γ (i) H̃
      C          =                   +                              ,
                     δ (i) γ (i)                    (i)
                                            γ (i) H̃ γ (i)

where δ(i) = β (i+1) − β (i) and γ (i) = g (i+1) − g (i) . The BFGS algorithm contains an
additional term in the correction matrix.

   To implement an iterative algorithm, one must choose a vector of initial values to
start the algorithm and a stopping rule to terminate the iteration procedure. Initial
values are usually speciﬁed by the researcher or by random number generation; prior in-
formation, if available, should also be taken into account. For example, if the parameter
is a probability, the algorithm may be initialized by, say, 0.5 or by a number randomly
generated from the uniform distribution on [0, 1]. Without prior information, it is also
typical to generate initial values from a normal distribution. In practice, one would
generate many sets of initial values and then choose the one that leads to a better result

                                                                              
                                                                              c Chung-Ming Kuan, 2001
188                           CHAPTER 7. NONLINEAR LEAST SQUARES THEORY


(for example, a better ﬁt of data). Of course, this search process is computationally
demanding.

      When an algorithm results in no further improvement, a stopping rule must be
invoked to terminate the iterations. Typically, an algorithm stops when one of the
following convergence criteria is met: for a pre-determined, small positive number c,
     7                7
  1. 7β (i+1) − β (i) 7 < c, where  ·  denotes the Euclidean norm,
     7      7
  2. 7g β (i) 7 < c, or
     ,                  ,
  3. ,QT β (i+1) − QT β (i) , < c.

For the Gauss-Newton algorithm, one may stop the algorithm when TR2 is “close” to
zero, where R2 is the coeﬃcient of determination of the Gauss-Newton regression. As the
residual vector must be orthogonal to the tangent space at the optimum, this stopping
rule amounts to checking whether the ﬁrst order condition is satisﬁed approximately.
In some cases, an algorithm may never meet its pre-set convergence criterion and hence
keeps on iterating. To circumvent this diﬃculty, an optimization program usually sets
a maximum number for iterations so that the program terminates automatically once
the number of iterations reaches this upper bound.



7.3       Asymptotic Properties of the NLS Estimators

7.3.1      Consistency

As the NLS estimator does not have an analytic form in general, a diﬀerent approach is
thus needed to establish NLS consistency. Intuitively, when the NLS objective function
QT (β) is close to IE[QT (β)] for all β, it is reasonable to expect that the minimizer of
QT (β), i.e., the NLS estimator β̂ T , is also close to a minimum of IE[QT (β)]. Given that
QT is nonlinear in β, a ULLN must be invoked to justify the closeness between QT (β)
and IE[QT (β)], as discussed in Section 5.6.

      To illustrate how consistency can be obtained, we consider a special case. Suppose
that IE[QT (β)] is a continuous function on the compact parameter space Θ1 such that
β o is its unique, global minimum. The NLS estimator β̂ T is such that

        QT (β̂ T ) = inf QT (β).
                    Θ1



c Chung-Ming Kuan, 2001
7.3. ASYMPTOTIC PROPERTIES OF THE NLS ESTIMATORS                                           189


Suppose also that QT has a SULLN eﬀect, i.e., there is a set Ω0 ⊆ Ω such that IP(Ω0 ) = 1
and
           ,                   ,
       sup ,QT (β) − IE[QT (β)], → 0,
       β∈Θ1

for all ω ∈ Ω0 . Set
                                                 
       :=     inf       IE[QT (β)] − IE[QT (β o )] ,
            β∈B ∩Θ1
               c


where B is an open neighborhood of β o . Then for ω ∈ Ω0 , we can choose T suﬃciently
large such that
                                       :
       IE[QT (β̂ T )] − QT (β̂ T ) <     ,
                                       2
and that
                                                             :
       QT (β̂ T ) − E[QT (β o )] ≤ QT (β o ) − E[QT (β o )] < ,
                                                             2
because the NLS estimator β̂ T minimizes QT (β). It follows that for ω ∈ Ω0 ,

       IE[QT (β̂ T )] − IE[QT (β o )]

                ≤ IE[QT (β̂ T )] − QT (β̂ T ) + QT (β̂ T ) − E[QT (β o )]

                < :,

for all T suﬃciently large. This shows that, comparing to all β outside the neighborhood
B of β o , β̂ T will eventually render IE[QT (β)] closer to IE[QT (β o )] with probability one.
Thus, β̂ T must be in B for large T . As B is arbitrary, β̂ T must converge to β o almost
surely. Convergence in probability of β̂ T to β o can be established using a similar
argument; see e.g., Amemiya (1985) and Exercise 7.4.

   The preceding discussion shows what matters for consistency is the eﬀect of a SULLN
(WULLN). Recall from Theorem 5.34 that, to ensure a SULLN (WULLN), QT should
obey a SLLN (WLLN) for each β ∈ Θ1 and also satisfy a Lipschitz-type continuity
condition:

       |QT (β) − QT (β † )| ≤ CT β − β †  a.s.,

with CT bounded almost surely (in probability). If the parameter space Θ1 is compact
and convex, we have from the mean-value theorem and the Cauchy-Schwartz inequality
that

       |QT (β) − QT (β † )| ≤ ∇β QT (β ∗ ) β − β †      a.s.,

                                                                     
                                                                     c Chung-Ming Kuan, 2001
190                                CHAPTER 7. NONLINEAR LEAST SQUARES THEORY


where β and β † are in Θ1 and β ∗ is the mean value of β and β † , in the sense that
|β ∗ − β o | < |β † − β o |. Hence, the Lipschitz-type condition would hold by setting

         CT = sup ∇β QT (β).
               β∈Θ1

Observe that in the NLS context,

                    1  2
                       T
                                                           
         QT (β) =         yt − 2yt f (xt ; β) + f (xt ; β)2 ,
                    T t=1

and

                           2
                              T
         ∇β QT (β) = −        ∇β f (xt ; β)[yt − f (xt ; β)].
                           T
                             t=1

Hence, ∇β QT (β) cannot be almost surely bounded in general. (It would be bounded
if, for example, yt are bounded random variables and both f and ∇β f are bounded
functions.) On the other hand, it is practically more plausible that ∇β QT (β) is bounded
in probability. It is the case when, for example, IE |∇β QT (β)| is bounded uniformly in
β. As such, we shall restrict our discussion below to WULLN and weak consistency of
β̂ T .

      To proceed we assume that the identiﬁcation requirement [ID-2] holds with proba-
bility one. The discussion above motivates the additional conditions given below.

[C1] {(yt wt ) } is a sequence of random vectors, and xt is vector containing some
         elements of Y t−1 and W t .

          (i) The sequences {yt2 }, {yt f (xt ; β)} and {f (xt ; β)2 } all obey a WLLN for each
              β in Θ1 , where Θ1 is compact and convex.
         (ii) yt , f (xt ; β) and ∇β f (xt ; β) all have bounded second moment uniformly in
              β.

[C2] There exists a unique parameter vector β o such that IE(yt | Y t−1 , W t ) = f (xt ; β o ).


Condition [C1] is analogous to [B1] so that stochastic regressors are allowed. [C1](i)
regulates that each components of QT (β) obey a standard WLLN. [C1](ii) implies

                             2 
                                  T
         IE |∇β QT (β)| ≤         ∇β f (xt ; β)2 yt 2 + ∇β f (xt ; β)2 f (xt ; β)2 ≤ ∆,
                             T
                                  t=1


c Chung-Ming Kuan, 2001
7.3. ASYMPTOTIC PROPERTIES OF THE NLS ESTIMATORS                                        191


for some ∆ which does not depend on β. This in turn implies ∇β QT (β) is bounded
in probability (uniformly in β) by Markov’s inequality. Condition [C2] is analogous to
[B2] and requires f (xt ; β) been a correct speciﬁcation of the conditional mean function.
Thus, β o globally minimizes IE[QT (β)] because the conditional mean must minimizes
mean-squared errors.

Theorem 7.2 Given the nonlinear speciﬁcation (7.1), suppose that [C1] and [C2] hold.
             IP
Then, β̂ T −→ β o .

   Theorem 7.2 is not completely satisfactory because it is concerned with the conver-
gence to the global minimum. As noted in Section 7.2.2, an iterative algorithm is not
guaranteed to ﬁnd a global minimum of the NLS objective function. Hence, it is more
reasonable to expect that the NLS estimator only converges to some local minimum
of IE[QT (β)]. A simple proof of such local consistency result is not yet available. We
therefore omit the details and assert only that the NLS estimator converges in proba-
bility to a local minimum β ∗ . Note that f (x; β ∗ ) is, at most, an approximation to the
conditional mean function.

7.3.2    Asymptotic Normality

Given that the NLS estimator β̂ T is weakly consistent for some β ∗ , we will sketch a
proof that, with more regularity conditions, the suitably normalized NLS estimator is
asymptotically distributed as a normal random vector.
   First note that by the mean-value expansion of ∇β QT (β̂ T ) about β ∗ ,

      ∇β QT (β̂ T ) = ∇β QT (β ∗ ) + ∇2β QT (β †T )(β̂ T − β ∗ ),

where β †T is a mean value between β̂ T and β ∗ . Clearly, the left-hand side is zero
because β̂ T is the NLS estimator and hence solves the ﬁrst order condition. By [ID-2],
the Hessian matrix ∇2β QT (β †T ) is invertible, so that
     √                                      √
       T (β̂ T − β ∗ ) = −[∇2β QT (β †T )]−1 T ∇β QT (β ∗ ).
                                  √
The asymptotic distribution of T (β̂ T − β ∗ ) is therefore the same as that of the right-
hand side.
   Let H T (β) = IE[∇2β QT (β)] and vec denote the operator such that vec(A) is the
vector resulted from stacking all the column vectors of A. By the triangle inequality,
      7 8 2            9      8         97
      7vec ∇ QT (β † ) − vec H T (β ∗ ) 7
              β     T
              7 8 2            9      8          97 7 8               9     8          97
           ≤ 7vec ∇β QT (β †T ) − vec H T (β †T ) 7 + 7vec H T (β †T ) − vec H T (β ∗ ) 7.

                                                                    
                                                                    c Chung-Ming Kuan, 2001
192                             CHAPTER 7. NONLINEAR LEAST SQUARES THEORY


The ﬁrst term on the right-hand side converges to zero in probability, provided that
∇2β QT (β) also obeys a WULLN. As β †T is a mean value between β̂ T and β ∗ , weak
consistency of β̂ T implies β †T also converges in probability to β ∗ . Under [ID-2], QT is
twice continuously diﬀerentiable so that H T (β) is continuous in β. Thus, H T (β †T ) −
H T (β ∗ ) also converges to zero in probability. Consequently, ∇2β QT (β †T ) is essentially
close to H T (β ∗ ), in the sense that they diﬀer by an oIP (1) term.
                                                                     √
    The result above shows that the normalized NLS estimator, T (β̂ T − β ∗ ), and
                   √
      −H T (β ∗ )−1 T ∇β QT (β ∗ )

are asymptotically equivalent and hence must have the same limiting distribution. Ob-
          √
serve that T ∇β QT (β ∗ ) is a partial sum:

      √                    2 
                               T
       T ∇β QT (β ∗ ) = − √       ∇β f (xt ; β ∗ )[yt − f (xt ; β ∗ )],
                            T t=1

and hence obeys a CLT under suitable regularity conditions. That is,
                 √
      (V ∗T )−1/2 T ∇β QT (β ∗ ) −→ N (0, I k ),
                                  D



where
                                                              
                        2 
                            T
      V ∗T = var       √                   ∗                ∗
                               ∇β f (xt ; β )[yt − f (xt ; β )] .
                         T t=1

Then for D∗T = H T (β ∗ )−1 V ∗T H T (β ∗ )−1 , we immediately obtain the following asymp-
totic normality result:
                              √
      (D ∗T )−1/2 H T (β ∗ )−1 T ∇β QT (β ∗ ) −→ N (0, I k ),
                                               D



which in turn implies
                 √
      (D ∗T )−1/2 T (β̂ T − β ∗ ) −→ N (0, I k ),
                                   D



As in linear regression, asymptotic normality of the normalized NLS estimator remains
valid when D∗T is replaced by its consistent estimator D̂T :

        −1/2 √
                 T (β̂ T − β ∗ ) −→ N (0, I k ),
                                 D
      D̂ T

Thus, ﬁnding a consistent estimator for D ∗T is important in practice.


c Chung-Ming Kuan, 2001
7.3. ASYMPTOTIC PROPERTIES OF THE NLS ESTIMATORS                                             193


   Consistent estimation of D∗T is completely analogous to that for linear regression;
see the discussion of Section 6.3. First observe that H T (β ∗ ) is

                       2  8
                          T
                                                98               9 
      H T (β ∗ ) =           IE ∇β f (xt ; β ∗ ) ∇β f (xt ; β ∗ )
                       T t=1

                                         2  2
                                            T
                                                                  8                  9
                                     −         IE ∇β f (xt ; β ∗ ) yt − f (xt ; β ∗ ) ,
                                         T t=1

which can be consistently estimated by its sample counterpart:

                2 8                                    9 2 
                  T
                                      98                     T
      Ĥ T =         ∇β f (xt ; β̂ T ) ∇β f (xt ; β̂ T ) −     ∇2β f (xt ; β̂ T )êt .
                T                                          T
                  t=1                                             t=1

When :t = yt − f (xt ; β ∗ ) are uncorrelated with ∇2β f (xt ; β ∗ ), H T (β ∗ ) depends only on
the expectation of the outer product of ∇β f (xt ; β ∗ ) so that Ĥ T simpliﬁes to

             2 8
                T
                                    98                9
      Ĥ T =       ∇β f (xt ; β̂ T ) ∇β f (xt ; β̂ T ) .
             T t=1

This estimator is analogous to            T       
                                          t=1 xt xt /T for M xx in linear regression.

   If β ∗ = β o so that f (xt ; β ∗ ) is the conditional mean of yt , we write V ∗T as

               4   28
                 T
                                         98               9
      V oT =       IE :t ∇β f (xt ; β o ) ∇β f (xt ; β o ) .
               T
                  t=1

When there is conditional homoskedasticity: IE(:2t |Y t−1 , W t ) = σo2 , V oT simpliﬁes to

           4σo2  8
                T
                                     98               9
       o
      VT =        IE ∇β f (xt ; β o ) ∇β f (xt ; β o )             ,
            T t=1

which can be consistently estimated by

               4σ̂T2 8
                     T
                                         98                9
      V̂ T =            ∇β f (xt ; β̂ T ) ∇β f (xt ; β̂ T ) ,
                T
                       t=1

                                                         T
with σ̂T2 a consistent estimator for σo2 . Typically, σ̂T2 =   2
                                                         t=1 êt /T . In the NLS context,
  T                                                            2
  t=1 êt is non-zero in general so that we may also compute σ̂T as


               1
                  T
      σ̂T2 =     (êt − ¯ê)2 ,
               T
                 t=1

                                                                         
                                                                         c Chung-Ming Kuan, 2001
194                                 CHAPTER 7. NONLINEAR LEAST SQUARES THEORY

                 T
where ¯ê =      t=1 êt /T . Combining V̂ T and Ĥ T we have
                                                                      −1
                          1 8
                            T
                                                98                9
        D̂ T = σ̂T2            ∇β f (xt ; β̂ T ) ∇β f (xt ; β̂ T )           .
                          T
                            t=1

This estimator is analogous to the OLS covariance matrix estimator σ̂T2 (X  X/T )−1 for
linear regressions.

      When there is conditional heteroskedasticity such that IE(:2t |Y t−1 , W t ) are functions
of the elements of Y t−1 and W t , V oT can be consistently estimated by

               4  28
                  T
                                          98                9
        V̂ T =       êt ∇β f (xt ; β̂ T ) ∇β f (xt ; β̂ T ) ,
               T t=1

so that
                                                                  −1
                      1 8
                        T
                                            98                9
        D̂ T =             ∇β f (xt ; β̂ T ) ∇β f (xt ; β̂ T )           V̂ T
                      T
                          t=1
                                                                            −1
                                1 8
                                  T
                                                      98                9
                                     ∇β f (xt ; β̂ T ) ∇β f (xt ; β̂ T )           .
                                T
                                  t=1

This is White’s heteroskedasticity-consistent covariance matrix estimator for nonlinear
regressions.

      As discussed earlier, the probability limit β ∗ of the NLS estimator is typically a
local minimum of IE[QT (β)] and hence not β o in general. In this case, {:t } is not a
martingale diﬀerence sequence with respect to Y t−1 and W t , and V ∗T must be estimated
using a Newey-West type estimator; see Exercise 7.7.


7.4       Hypothesis Testing
For testing linear restrictions of parameters, we again consider the null hypothesis

        H0 : Rβ ∗ = r,

where R is a q × k matrix and r is a q × 1 vector of pre-speciﬁed constants.

      The Wald test now evaluates the diﬀerence between the NLS estimates and the hypo-
thetical values. When the normalized NLS estimator, T 1/2 (β̂ T − β o ), has an asymptotic
normal distribution with the asymptotic covariance matrix D∗T , we have under the null
hypothesis that
               √                          √
     (Γ∗T )−1/2 T (Rβ̂ T − r) = (Γ∗T )−1/2 T R(β̂ T − β ∗ ) −→ N (0, I q ).
                                                             D




c Chung-Ming Kuan, 2001
7.4. HYPOTHESIS TESTING                                                                  195


where Γ∗T = RD ∗T R . Let D̂T be a consistent estimator for DT . Then, Γ̂T = RD̂T R
is also consistent for Γ∗T . It follows that the Wald statistic is

      WT = T (Rβ̂ T − r)Γ̂−1                      D
                          T (Rβ̂ T − r) −→ χ (q),
                                            2



which is of the same form as the Wald statistic in linear regressions.

    More generally, one may test for the nonlinear restriction of the form

      H0 : r(β ∗ ) = 0,

where r now is a Rq -valued nonlinear function that is continuously diﬀerentiable. It
is natural to consider basing the Wald test on r(β̂ T ). First note that linearization of
r(β̂ T ) about β ∗ yields

      r(β̂ T ) = r(β ∗ ) + [∇β r(β ∗ )] (β̂ T − β ∗ ) + oIP (1).

Letting R(β ∗ ) = [∇β r(β ∗ )] , a q × k matrix, we have under the null hypothesis that

      r(β̂ T ) = R(β ∗ )(β̂ T − β ∗ ) + oIP (1).

Similar as before,
                                      √
      (Γ∗T )−1/2 r(β̂ T ) = (Γ∗T )−1/2 T R(β ∗ )(β̂ T − β ∗ ) −→ N (0, I q ).
                                                               D



where in this case Γ∗T = R(β ∗ )D∗T R(β ∗ ) . This immediately suggests the following
Wald statistic:

      WT = T r(β̂ T ) Γ̂−1
                                      D
                         T r(β̂ T ) −→ χ (q),
                                        2



where Γ̂T = R(β̂ T )D̂T R(β̂ T ) is consistent for Γ∗T .

    A well known drawback of the Wald test is that it is not invariant with respect
to diﬀerent forms of a nonlinear hypothesis. For example, consider two equivalent
hypotheses: β1 β2 = 1 and β1 = 1/β2 . The Wald test for the former is based on
β̂1 β̂2 − 1, whereas the Wald test for the latter is based on β̂1 − β̂2−1 . It turns out that
these two tests perform very diﬀerently; see e.g., Gregory and Veall (1985) and Phillips
and Park (1988). In particular, the Wald test for β1 = 1/β2 rejects far too often when
the null hypothesis is indeed correct (i.e., the empirical size is much larger than the
nominal size). Moreover, these two tests result in conﬂicting conclusions quite often.
Hence, the inferences from testing nonlinear hypotheses should be drawn with care.


                                                                    
                                                                    c Chung-Ming Kuan, 2001
196                             CHAPTER 7. NONLINEAR LEAST SQUARES THEORY


Exercises

 7.1 Suppose that QT (β) is quadratic in β:

               QT (β) = a + b β + β  Cβ,

      where a is a scalar, b a vector and C a symmetric, positive deﬁnite matrix. Find
      the ﬁrst order condition of minimizing QT (β) and the resulting solution. Is the
      OLS criterion function (3.2) quadratic in β?
                                                            T
 7.2 Let :̂t = yt − ŷt denote the t th NLS residuals. Is   t=1 :̂t zero in general? Why or
      why not?

 7.3 Given the nonlinear speciﬁcation of the CES production function

                               λ 8 −γ               9
               ln y = ln α −     ln δL + (1 − δ)K −γ + e,
                               γ

      ﬁnd the second order Taylor expansion of ln y around γ = 0. How would you
      estimate this linearized function and how can you calculate the original parameters
      α, γ, δ and λ?

 7.4 Suppose that IE[QT (β)] is a continuous function on the compact parameter space
      Θ1 such that β o is its unique, global minimum. Also suppose that the NLS
      estimator β̂ T is such that

               IE[QT (β̂ T )] = inf IE[QT (β)].
                                Θ1


      Prove that when QT has a WULLN eﬀect, then β̂ T converges in probability to
      βo.

 7.5 Apply Theorem 7.2 to discuss the consistency property of the OLS estimator for
      the linear speciﬁcation yt = xt β + et .

 7.6 Let :t = yt − f (xt ; β o ). If {:t } is a martingale diﬀerence sequence with respect to
      Y t−1 and W t such that IE(:2t | Y t−1 , W t ) = σo2 , state the conditions under which
                 T
      σ̂T2 =           2                       2
                 t=1 êt /T is consistent for σo .

 7.7 Let :t = yt − f (xt ; β ∗ ), where β ∗ may not be the same as β o . If {:t } is not
      a martingale diﬀerence sequence with respect to Y t−1 and W t , give consistent
      estimators for V ∗T and D ∗T .


c Chung-Ming Kuan, 2001
7.4. HYPOTHESIS TESTING                                                         197


References

Amemiya, Takeshi (1985). Advanced Econometrics, Cambridge, MA: Harvard Univer-
     sity Press.

Davidson, Russell and James G. MacKinnon (1993). Estimation and Inference in Econo-
     metrics, New York, NY: Oxford University Press.

Bierens, Herman J. (1994). Topics in Advanced Econometrics, New York, NY: Cam-
     bridge University Press.

Gallant, A. Ronald (1987). Nonlinear Statistical Inference, New York, NY: John Wiley
     & Sons.

Gallant, A. Ronald and Halbert White (1988). A Uniﬁed Theory of Estimation and
     Inference for Nonlinear Dynamic Models, Oxford, UK: Basil Blackwell.

Gregory, Allan W. and Michael R. Veall (1985). Formulating Wald tests of nonlinear
     restrictions, Econometrica, 53, 1465–1468.

Kuan, Chung-Ming and Halbert White (1994). Artiﬁcial neural networks: An econo-
     metric perspective, Econometric Reviews, 13, 1–91.

Phillips, Peter C. B. and Joon Y. Park (1988). On the formulation of Wald tests of
     nonlinear restrictions, Econometrica, 56, 1065–1083.




                                                            
                                                            c Chung-Ming Kuan, 2001



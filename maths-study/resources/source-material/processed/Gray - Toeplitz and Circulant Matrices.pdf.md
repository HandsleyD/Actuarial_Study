---
normalized_id: shared-pdf-reference-gray-toeplitz-and-circulant-matrices
exam_code: SHARED
material_scope: gray - toeplitz and circulant matrices.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Gray - Toeplitz and Circulant Matrices.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-gray-toeplitz-and-circulant-matrices

Toeplitz and Circulant Matrices: A review


                                                           
                         t0        t−1 t−2 · · · t−(n−1)
                        t          t0 t−1               
                         1                              
                                                   ..   
                                                        
                           t2      t1 t0            .   
                                                        
                            ..            ...           
                             .                          
                           tn−1              ···       t0




                                Robert M. Gray
                        Information Systems Laboratory
                      Department of Electrical Engineering
                              Stanford University
                           Stanford, California 94305


                                  Revised March 2000
                     This document available as an
               Adobe portable document format (pdf) ﬁle at
           http://www-isl.stanford.edu/~gray/toeplitz.pdf




 Robert
 c       M. Gray, 1971, 1977, 1993, 1997, 1998, 2000.


     The preparation of the original report was ﬁnanced in part by the National
 Science Foundation and by the Joint Services Program at Stanford. Since then it
 has been done as a hobby.
ii

                                   Abstract
    In this tutorial report the fundamental theorems on the asymptotic be-
havior of eigenvalues, inverses, and products of “ﬁnite section” Toeplitz ma-
trices and Toeplitz matrices with absolutely summable elements are derived.
Mathematical elegance and generality are sacriﬁced for conceptual simplic-
ity and insight in the hopes of making these results available to engineers
lacking either the background or endurance to attack the mathematical lit-
erature on the subject. By limiting the generality of the matrices considered
the essential ideas and results can be conveyed in a more intuitive manner
without the mathematical machinery required for the most general cases. As
an application the results are applied to the study of the covariance matrices
and their factors of linear models of discrete time random processes.




                             Acknowledgements
   The author gratefully acknowledges the assistance of Ronald M. Aarts of
the Philips Research Labs in correcting many typos and errors in the 1993
revision, Liu Mingyu in pointing out errors corrected in the 1998 revision,
Paolo Tilli of the Scuola Normale Superiore of Pisa for pointing out an in-
correct corollary and providing the correction, and to David Neuhoﬀ of the
University of Michigan for pointing out several typographical errors and some
confusing notation.
Contents

1 Introduction                                                              3

2 The Asymptotic Behavior of Matrices                                        5

3 Circulant Matrices                                                        15

4 Toeplitz Matrices                                                         19
  4.1 Finite Order Toeplitz Matrices . . . . . . . . . . . . . . . . . .    23
  4.2 Toeplitz Matrices . . . . . . . . . . . . . . . . . . . . . . . . .   28
  4.3 Toeplitz Determinants . . . . . . . . . . . . . . . . . . . . . .     45

5 Applications to Stochastic Time Series                                    47
  5.1 Moving Average Sources . . . . . . . . . . . . . . . . . . . . .      48
  5.2 Autoregressive Processes . . . . . . . . . . . . . . . . . . . . .    51
  5.3 Factorization . . . . . . . . . . . . . . . . . . . . . . . . . . .   54
  5.4 Diﬀerential Entropy Rate of Gaussian Processes . . . . . . . .        57

Bibliography                                                                58




                                      1
2   CONTENTS
Chapter 1

Introduction

A toeplitz matrix is an n × n matrix Tn = tk,j where tk,j = tk−j , i.e., a matrix
of the form                                             
                             t0 t−1 t−2 · · · t−(n−1)
                          t     t0 t−1                  
                             1                          
                                                  ..    
                                                        
                   Tn = 
                             t2  t1 t0              .    .
                                                         
                                                                            (1.1)
                          ..              . ..          
                          .                             
                           tn−1            ···    t0
Examples of such matrices are covariance matrices of weakly stationary
stochastic time series and matrix representations of linear time-invariant dis-
crete time ﬁlters. There are numerous other applications in mathematics,
physics, information theory, estimation theory, etc. A great deal is known
about the behavior of such matrices — the most common and complete ref-
erences being Grenander and Szegö [1] and Widom [2]. A more recent text
devoted to the subject is Böttcher and Silbermann [15]. Unfortunately, how-
ever, the necessary level of mathematical sophistication for understanding
reference [1] is frequently beyond that of one species of applied mathemati-
cian for whom the theory can be quite useful but is relatively little under-
stood. This caste consists of engineers doing relatively mathematical (for an
engineering background) work in any of the areas mentioned. This apparent
dilemma provides the motivation for attempting a tutorial introduction on
Toeplitz matrices that proves the essential theorems using the simplest possi-
ble and most intuitive mathematics. Some simple and fundamental methods
that are deeply buried (at least to the untrained mathematician) in [1] are
here made explicit.

                                       3
4                                          CHAPTER 1. INTRODUCTION

    In addition to the fundamental theorems, several related results that nat-
urally follow but do not appear to be collected together anywhere are pre-
sented.
    The essential prerequisites for this report are a knowledge of matrix the-
ory, an engineer’s knowledge of Fourier series and random processes, calculus
(Riemann integration), and hopefully a ﬁrst course in analysis. Several of the
occasional results required of analysis are usually contained in one or more
courses in the usual engineering curriculum, e.g., the Cauchy-Schwarz and
triangle inequalities. Hopefully the only unfamiliar results are a corollary to
the Courant-Fischer Theorem and the Weierstrass Approximation Theorem.
The latter is an intuitive result which is easily believed even if not formally
proved. More advanced results from Lebesgue integration, functional analy-
sis, and Fourier series are not used.
    The main approach of this report is to relate the properties of Toeplitz
matrices to those of their simpler, more structured cousin — the circulant or
cyclic matrix. These two matrices are shown to be asymptotically equivalent
in a certain sense and this is shown to imply that eigenvalues, inverses, prod-
ucts, and determinants behave similarly. This approach provides a simpliﬁed
and direct path (to the author’s point of view) to the basic eigenvalue distri-
bution and related theorems. This method is implicit but not immediately
apparent in the more complicated and more general results of Grenander
in Chapter 7 of [1]. The basic results for the special case of a ﬁnite order
Toeplitz matrix appeared in [16], a tutorial treatment of the simplest case
which was in turn based on the ﬁrst draft of this work. The results were sub-
sequently generalized using essentially the same simple methods, but they
remain less general than those of [1].
    As an application several of the results are applied to study certain models
of discrete time random processes. Two common linear models are studied
and some intuitively satisfying results on covariance matrices and their fac-
tors are given. As an example from Shannon information theory, the Toeplitz
results regarding the limiting behavior of determinants is applied to ﬁnd the
diﬀerential entropy rate of a stationary Gaussian random process.
    We sacriﬁces mathematical elegance and generality for conceptual sim-
plicity in the hope that this will bring an understanding of the interesting
and useful properties of Toeplitz matrices to a wider audience, speciﬁcally
to those who have lacked either the background or the patience to tackle the
mathematical literature on the subject.
Chapter 2

The Asymptotic Behavior of
Matrices

In this chapter we begin with relevant deﬁnitions and a prerequisite theo-
rem and proceed to a discussion of the asymptotic eigenvalue, product, and
inverse behavior of sequences of matrices. The remaining chapters of this
report will largely be applications of the tools and results of this chapter to
the special cases of Toeplitz and circulant matrices.
   The eigenvalues λk and the eigenvectors (n-tuples) xk of an n × n matrix
M are the solutions to the equation

                                  M x = λx                                (2.1)

and hence the eigenvalues are the roots of the characteristic equation of M :

                            det(M − λI) = 0      .                        (2.2)

If M is Hermitian, i.e., if M = M ∗ , where the asterisk denotes conjugate
transpose, then a more useful description of the eigenvalues is the variational
description given by the Courant-Fischer Theorem [3, p. 116]. While we will
not have direct need of this theorem, we will use the following important
corollary which is stated below without proof.

Corollary 2.1 Deﬁne the Rayleigh quotient of an Hermitian matrix H and
a vector (complex n−tuple) x by

                           RH (x) = (x∗ Hx)/(x∗ x).                       (2.3)

                                      5
6       CHAPTER 2. THE ASYMPTOTIC BEHAVIOR OF MATRICES

Let ηM and ηm be the maximum and minimum eigenvalues of H, respectively.
Then
                     ηm = min RH (x) = min
                                       ∗
                                           x∗ Hx                   (2.4)
                                x                    x x=1
                       ηM = max RH (x) = max
                                x        ∗
                                             x∗ Hx                                        (2.5)
                                                     x x=1


   This corollary will be useful in specifying the interval containing the eigen-
values of an Hermitian matrix.
   The following lemma is useful when studying non-Hermitian matrices
and products of Hermitian matrices. Its proof is given since it introduces
and manipulates some important concepts.

Lemma 2.1 Let A be a matrix with eigenvalues αk . Deﬁne the eigenvalues
of the Hermitian matrix A∗ A to be λk . Then
                                
                                n−1           
                                              n−1
                                      λk ≥          |αk |2 ,                              (2.6)
                                k=0           k=0

with equality iﬀ (if and only if ) A is normal, that is, iﬀ A∗ A = AA∗ . (If A
is Hermitian, it is also normal.)


Proof.
   The trace of a matrix is the sum of the diagonal elements of a matrix.
The trace is invariant to unitary operations so that it also is equal to the
sum of the eigenvalues of a matrix, i.e.,
                                       
                                       n−1                     
                                                               n−1
                      Tr{A∗ A} =             (A∗ A)k,k =              λk .                (2.7)
                                       k=0                     k=0
Any complex matrix A can be written as
                                    A = W RW ∗ .                                          (2.8)
where W is unitary and R = {rk,j } is an upper triangular matrix [3, p. 79].
The eigenvalues of A are the principal diagonal elements of R. We have
                                                      n−1
                                                     n−1 
                Tr{A∗ A} = Tr{R∗ R} =                          |rj,k |2
                                                     k=0 j=0
                                                                                      .   (2.9)
                                
                                n−1                                  
                                                                      n−1
                            =          |αk |2 +          |rj,k |2 ≥          |αk |2
                                 k=0              k=j                k=0
                                                                                                                      7

Equation (2.9) will hold with equality iﬀ R is diagonal and hence iﬀ A is
normal.
    Lemma 2.1 is a direct consequence of Shur’s Theorem [3, pp. 229-231]
and is also proved in [1, p. 106].
    To study the asymptotic equivalence of matrices we require a metric or
equivalently a norm of the appropriate kind. Two norms — the operator or
strong norm and the Hilbert-Schmidt or weak norm — will be used here [1,
pp. 102-103].
    Let A be a matrix with eigenvalues αk and let λk be the eigenvalues of
the Hermitian matrix A∗ A. The strong norm A is deﬁned by

                       A = max
                            x
                               RA∗ A (x)1/2 = max
                                              ∗
                                                  [x∗ A∗ Ax]1/2 .                                                 (2.10)
                                                                     x x=1

From Corollary 2.1
                                                2                        ∆
                                       A            = max λk = λM .                                               (2.11)
                                                          k

The strong norm of A can be bounded below by letting eM be the eigenvector
of A corresponding to αM , the eigenvalue of A having largest absolute value:

                   A    2
                            = max
                              ∗
                                  x∗ A∗ Ax ≥ (e∗M A∗ )(AeM ) = |αM |2 .                                           (2.12)
                              x x=1

If A is itself Hermitian, then its eigenvalues αk are real and the eigenvalues
λk of A∗ A are simply λk = αk2 . This follows since if e(k) is an eigenvector of A
with eigenvalue αk , then A∗ Ae(k) = αk A∗ e(k) = αk2 e(k) . Thus, in particular,
if A is Hermitian then

                                      A = max |αk | = |αM |.                                                      (2.13)
                                                      k

   The weak norm of an n × n matrix A = {ak,j } is deﬁned by
                                    1/2                                                                1/2
                  n−1
                 n−1                                                                         
                                                                                              n−1
            −1                                        −1             ∗                   −1
 |A| = n                        2
                           |ak,j |          = (n Tr[A A])                    1/2
                                                                                   = n              λk          . (2.14)
                 k=0 j=0                                                                      k=0

From Lemma 2.1 we have
                                                               
                                                               n−1
                                                          −1
                                       |A| ≥ n
                                            2
                                                                     |αk |2 ,                                     (2.15)
                                                               k=0

with equality iﬀ A is normal.
8        CHAPTER 2. THE ASYMPTOTIC BEHAVIOR OF MATRICES

    The Hilbert-Schmidt norm is the “weaker” of the two norms since
                                                       
                                                       n−1
                                                  −1
                      A   2
                              = max λk ≥ n                   λk = |A|2 .           (2.16)
                                 k
                                                       k=0

    A matrix is said to be bounded if it is bounded in both norms.
    Note that both the strong and the weak norms are in fact norms in the
linear space of matrices, i.e., both satisfy the following three axioms:

    1.   A ≥ 0 , with equality iﬀ A = 0 , the all zero matrix.

    2.   A+B ≤ A          +     B
                                                                                   (2.17)
    3.   cA = |c|·    A
    .

The triangle inequality in (2.17) will be used often as is the following direct
consequence:
                          A−B ≥| A − B .                                 (2.18)
   The weak norm is usually the most useful and easiest to handle of the
two but the strong norm is handy in providing a bound for the product of
two matrices as shown in the next lemma.

Lemma 2.2 Given two n × n matrices G = {gk,j } and H = {hk,j }, then

                                |GH| ≤ G               ·|H|.                       (2.19)



Proof.
                                      
                 |GH|2 = n−1                  |       gi,k hk,j |2
                                     i    j       k

                                     
                          = n−1                            gi,k ḡi,m hk,j h̄m,j   (2.20)
                                     i    j       k    m

                                     
                          = n−1          h∗j G∗ Ghj ,
                                     j
                                                                            9

where ∗ denotes conjugate transpose and hj is the j th column of H. From
(2.10)
                       (h∗j G∗ Ghj )/(h∗j hj ) ≤ G 2
and therefore
                                         
                |GH|2 ≤ n−1      G   2
                                             h∗j hj = G   2
                                                              ·|H|2 .
                                         j


Lemma 2.2 is the matrix equivalent of 7.3a of [1, p. 103]. Note that the
lemma does not require that G or H be Hermitian.
    We will be considering n × n matrices that approximate each other when
n is large. As might be expected, we will use the weak norm of the diﬀerence
of two matrices as a measure of the “distance” between them. Two sequences
of n × n matrices An and Bn are said to be asymptotically equivalent if

  1. An and Bn are uniformly bounded in strong (and hence in weak) norm:

                            An       ,       Bn ≤ M < ∞                 (2.21)

     and

  2. An − Bn = Dn goes to zero in weak norm as n → ∞:

                         lim |An − Bn | = n→∞
                         n→∞
                                           lim |Dn | = 0.

Asymptotic equivalence of An and Bn will be abbreviated An ∼ Bn . If one
of the two matrices is Toeplitz, then the other is said to be asymptotically
Toeplitz. We can immediately prove several properties of asymptotic equiv-
alence which are collected in the following theorem.


Theorem 2.1

  1. If An ∼ Bn , then
                               lim |An | = lim |Bn |.                   (2.22)
                               n→∞            n→∞

  2. If An ∼ Bn and Bn ∼ Cn , then An ∼ Cn .

  3. If An ∼ Bn and Cn ∼ Dn , then An Cn ∼ Bn Dn .
10        CHAPTER 2. THE ASYMPTOTIC BEHAVIOR OF MATRICES

     4. If An ∼ Bn and A−1 n   , Bn−1 ≤ K < ∞, i.e., A−1          −1
                                                         n and Bn exist
        and are uniformly bounded by some constant independent of n, then
        A−1     −1
          n ∼ Bn .

     5. If An Bn ∼ Cn and    A−1
                              n  ≤ K < ∞, then Bn ∼ A−1
                                                     n Cn .


Proof.

     1. Eqs. (2.22) follows directly from (2.17).
                                                                     −→
     2. |An − Cn | = |An − Bn + Bn − Cn | ≤ |An − Bn | + |Bn − Cn | n→∞ 0

     3. Applying Lemma 2.2 yields

                 |An Cn − Bn Dn | = |An Cn − An Dn + An Dn − Bn Dn |
                                                                    −→
                    ≤ An     ·|Cn − Dn |+         Dn   ·|An − Bn | n→∞ 0.

     4. |A−1   −1      −1         −1    −1
          n − Bn | = |Bn Bn An − Bn An An

                                                               −→
                        ≤ Bn−1         ·   A−1
                                            n     ·|Bn − An | n→∞ 0.

     5. Bn − A−1      −1         −1
              n Cn = An An Bn − An Cn

                                                           −→
                            ≤ A−1
                               n           ·|An Bn − Cn | n→∞ 0.

    The above results will be useful in several of the later proofs.
    Asymptotic equality of matrices will be shown to imply that eigenvalues,
products, and inverses behave similarly. The following lemma provides a
prelude of the type of result obtainable for eigenvalues and will itself serve
as the essential part of the more general theorem to follow.

Lemma 2.3 Given two sequences of asymptotically equivalent matrices An
and Bn with eigenvalues αn,k and βn,k , respectively, then

                                 
                                 n−1                    
                                                        n−1
                       lim n−1         αn,k = lim n−1         βn,k .        (2.23)
                      n→∞                        n→∞
                                 k=0                    k=0
                                                                                           11

Proof.
  Let Dn = {dk,j } = An − Bn . Eq. (2.23) is equivalent to

                              n→∞
                                  lim n−1 Tr(Dn ) = 0.                                 (2.24)

Applying the Cauchy-Schwartz inequality [4, p. 17] to Tr(Dn ) yields
                                                 2
                                        n−1      
                                                      
                                                        n−1
                                                  
                  |Tr(Dn )|2 =          
                                        
                                             dk,k  ≤ n
                                                  
                                                            |dk,k |2
                                         k=0              k=0
                                                                            .
                                          n−1
                                         n−1 
                                  ≤ n              |dk,j |2 = n2 |Dn |2 .
                                         k=0 j=0


Dividing by n2 , and taking the limit, results in
                                                   −→
                      0 ≤ |n−1 Tr(Dn )|2 ≤ |Dn |2 n→∞ 0.                               (2.25)

which implies (2.24) and hence (2.23).
   Similarly to (2.23), if An and Bn are Hermitian then (2.22) and (2.15)
imply that
                                  
                                  n−1                       
                                                            n−1
                             −1
                     lim n
                     n→∞
                                         2
                                        αn,k    lim n−1
                                             = n→∞                 2
                                                                  βn,k .               (2.26)
                                  k=0                       k=0

    Note that (2.23) and (2.26) relate limiting sample (arithmetic) averages of
eigenvalues or moments of an eigenvalue distribution rather than individual
eigenvalues. Equations (2.23) and (2.26) are special cases of the following
fundamental theorem of asymptotic eigenvalue distribution.

Theorem 2.2 Let An and Bn be asymptotically equivalent sequences of ma-
trices with eigenvalues αn,k and βn,k , respectively. Assume that the eigenvalue
                                                                
                                                                n−1
                                          lim n−1
moments of either matrix converge, e.g., n→∞                           s
                                                                      αn,k exists and is ﬁnite
                                                                k=0
for any positive integer s. Then

                                  
                                  n−1                       
                                                            n−1
                      lim n−1
                     n→∞
                                         s
                                        αn,k    lim n−1
                                             = n→∞                 s
                                                                  βn,k .               (2.27)
                                  k=0                       k=0
12      CHAPTER 2. THE ASYMPTOTIC BEHAVIOR OF MATRICES

Proof.
                                                                   ∆
   Let An = Bn + Dn as in Lemma 2.3 and consider Asn − Bns = ∆n . Since
the eigenvalues of Asn are αn,k
                            s
                                , (2.27) can be written in terms of ∆n as
                                  lim n−1 Tr∆n = 0.
                                  n→∞
                                                                             (2.28)

The matrix ∆n is a sum of several terms each being a product of ∆n s and
Bn s but containing at least one Dn . Repeated application of Lemma 2.2 thus
gives
                                                 −→
                              |∆n | ≤ K  |Dn | n→∞ 0.                 (2.29)
where K  does not depend on n. Equation (2.29) allows us to apply Lemma
2.3 to the matrices Asn and Dns to obtain (2.28) and hence (2.27).
    Theorem 2.2 is the fundamental theorem concerning asymptotic eigen-
value behavior. Most of the succeeding results on eigenvalues will be appli-
cations or specializations of (2.27).
    Since (2.26) holds for any positive integer s we can add sums correspond-
ing to diﬀerent values of s to each side of (2.26). This observation immedi-
ately yields the following corollary.

Corollary 2.2 Let An and Bn be asymptotically equivalent sequences of ma-
trices with eigenvalues αn,k and βn,k , respectively, and let f (x) be any poly-
nomial. Then
                            
                            n−1                          
                                                         n−1
                  lim n−1
                 n→∞
                                               lim n−1
                                  f (αn,k ) = n→∞              f (βn,k ) .   (2.30)
                            k=0                          k=0



    Whether or not An and Bn are Hermitian, Corollary 2.2 implies that
(2.30) can hold for any analytic function f (x) since such functions can be
expanded into complex Taylor series, i.e., into polynomials. If An and Bn
are Hermitian, however, then a much stronger result is possible. In this
case the eigenvalues of both matrices are real and we can invoke the Stone-
Weierstrass approximation Theorem [4, p. 146] to immediately generalize
Corollary 2.3. This theorem, our one real excursion into analysis, is stated
below for reference.
Theorem 2.3 (Stone-Weierstrass) If F (x) is a continuous complex function
on [a, b], there exists a sequence of polynomials pn (x) such that
                                   lim pn (x) = F (x)
                                  n→∞
                                                                                       13

uniformly on [a, b].


   Stated simply, any continuous function deﬁned on a real interval can be
approximated arbitrarily closely by a polynomial. Applying Theorem 2.3 to
Corollary 2.2 immediately yields the following theorem:


Theorem 2.4 Let An and Bn be asymptotically equivalent sequences of Her-
mitian matrices with eigenvalues αn,k and βn,k , respectively. Since An and
Bn are bounded there exist ﬁnite numbers m and M such that

        m ≤ αn,k , βn,k ≤ M ,          n = 1, 2, . . .   k = 0, 1, . . . , n − 1.   (2.31)

Let F (x) be an arbitrary function continuous on [m, M ]. Then
                                 
                                 n−1                             
                                                                 n−1
                            −1                              −1
                    lim n
                    n→∞
                                       F [αn,k ] = n→∞
                                                    lim n              F [βn,k ]    (2.32)
                                 k=0                             k=0

if either of the limits exists.


    Theorem 2.4 is the matrix equivalent of Theorem (7.4a) of [1]. When two
real sequences {αn,k ; k = 0, 1, . . . , n−1} and {βn,k ; k = 0, 1, . . . , n−1} satisfy
(2.31)-(2.32), they are said to be asymptotically equally distributed [1, p. 62].
    As an example of the use of Theorem 2.4 we prove the following corollary
on the determinants of asymptotically equivalent matrices.


Corollary 2.3 Let An and Bn be asymptotically equivalent Hermitian matri-
ces with eigenvalues αn,k and βn,k , respectively, such that αn,k , βn,k ≥ m > 0.
Then
                      lim (det An )1/n = lim (det Bn )1/n .                 (2.33)
                     n→∞                 n→∞




Proof.
  From Theorem 2.4 we have for F (x) = ln x
                                 
                                 n−1                             
                                                                 n−1
                     lim n−1                      lim n−1
                                       ln αn,k = n→∞                   ln βn,k
                    n→∞
                                 k=0                             k=0
14      CHAPTER 2. THE ASYMPTOTIC BEHAVIOR OF MATRICES

and hence
                                                                                 
                                    
                                    n−1                                
                                                                       n−1
                          −1                                 −1
             lim exp n
            n→∞
                               ln         αn,k = lim exp n
                                                 n→∞
                                                                  ln         βn,k
                                    k=0                                k=0

or equivalently

               lim exp[n−1 ln det An ] = lim exp[n−1 ln det Bn ],
               n→∞                               n→∞

from which (2.33) follows.
    With suitable mathematical care the above corollary can be extended to
the case where αn,k , βn,k > 0, but there is no m satisfying the hypothesis of
the corollary, i.e., where the eigenvalues can get arbitrarily small but are still
strictly positive.
    In the preceding chapter the concept of asymptotic equivalence of matri-
ces was deﬁned and its implications studied. The main consequences have
been the behavior of inverses and products (Theorem 2.1) and eigenvalues
(Theorems 2.2 and 2.4). These theorems do not concern individual entries
in the matrices or individual eigenvalues, rather they describe an “average”
                                                                 −1 −→
behavior. Thus saying A−1          −1                     −1
                            n ∼ Bn means that that |An − Bn | n→∞ 0 and
says nothing about convergence of individual entries in the matrix. In certain
cases stronger results on a type of elementwise convergence are possible using
the stronger norm of Baxter [7, 8]. Baxter’s results are beyond the scope of
this report.
    The major use of the theorems of this chapter is that we can often study
the asymptotic behavior of complicated matrices by studying a more struc-
tured and simpler asymptotically equivalent matrix.
Chapter 3

Circulant Matrices

The properties of circulant matrices are well known and easily derived [3, p.
267],[19]. Since these matrices are used both to approximate and explain the
behavior of Toeplitz matrices, it is instructive to present one version of the
relevant derivations here.
    A circulant matrix C is one having the form
                                                                     
                             c0         c1     c2          · · · cn−1
                                                                ..   
                                                                     
                       cn−1            c0     c1   c2            .   
                                                                     
                                                          ...        
                    C=
                                       cn−1 c0 c1                    
                                                                      ,            (3.1)
                       ..              ...  ... ...                  
                       .                                       c2    
                                                                     
                                                                     
                                                               c1    
                             c1         ···         cn−1        c0
where each row is a cyclic shift of the row above it. The matrix C is itself
a special type of Toeplitz matrix. The eigenvalues ψk and the eigenvectors
y (k) of C are the solutions of
                                  Cy = ψ y                            (3.2)
or, equivalently, of the n diﬀerence equations
            
            m−1                   
                                  n−1
                  cn−m+k yk +           ck−m yk = ψ ym ; m = 0, 1, . . . , n − 1.   (3.3)
            k=0                   k=m

Changing the summation dummy variable results in
     
    n−1−m                
                         n−1
            ck yk+m +             ck yk−(n−m) = ψ ym ; m = 0, 1, . . . , n − 1.     (3.4)
      k=0               k=n−m


                                               15
16                                       CHAPTER 3. CIRCULANT MATRICES

One can solve diﬀerence equations as one solves diﬀerential equations — by
guessing an (hopefully) intuitive solution and then proving that it works.
Since the equation is linear with constant coeﬃcients a reasonable guess is
yk = ρk (analogous to y(t) = esτ in linear time invariant diﬀerential equa-
tions). Substitution into (3.4) and cancellation of ρm yields

                        
                       n−1−m                        
                                                    n−1
                                   ck ρk + ρ−n               ck ρk = ψ.
                         k=0                     k=n−m


Thus if we choose ρ−n = 1, i.e., ρ is one of the n distinct complex nth roots
of unity, then we have an eigenvalue

                                              
                                              n−1
                                        ψ=          c k ρk                        (3.5)
                                              k=0


with corresponding eigenvector
                                                                 
                         y = n−1/2 1, ρ, ρ2 , . . . , ρn−1 ,                      (3.6)

where the normalization is chosen to give the eigenvector unit energy. Choos-
ing ρj as the complex nth root of unity, ρj = e−2πij/n , we have eigenvalue

                                          
                                          n−1
                                   ψm =         ck e−2πimk/n                      (3.7)
                                          k=0


and eigenvector
                                                                         
                  y (m) = n−1/2 1, e−2πim/n , · · · , e−2πi(n−1)/n .

From (3.7) we can write
                                        C = U ∗ ΨU,                               (3.8)
where                                                   
              U =        y (0) |y (1) | · · · |y (n−1)
                                                                             
                    = n−1 e−2πimk/n ; m, k = 0, 1, . . . , n − 1

                                        Ψ = {ψk δk,j }
                                                                                    17

To verify (3.8) we note that the (k, j)th element of C, say ak,j , is

                                      
                                      n−1
                                 −1
                      ak,j = n              e2πim(k−j)/n ψm
                                      m=0


                                      
                                      n−1                     
                                                              n−1
                          = n−1             e2πim(k−j)/n            cr e2πimr/n   (3.9)
                                      m=0                     r=0


                                      
                                      n−1        
                                                 n−1
                          = n−1             cr         e2πim(k−j+r)/n .
                                      r=0        m=0

But we have
                                            
                
                n−1
                                                 n        k − j = −r mod n
                      2πim(k−j+r)/n
                      e                =
                m=0
                                                 0        otherwise

so that ak,j = c−(k−j) mod n . Thus (3.8) and (3.1) are equivalent. Furthermore
(3.9) shows that any matrix expressible in the form (3.8) is circulant.
    Since C is unitarily similar to a diagonal matrix it is normal. Note that
all circulant matrices have the same set of eigenvectors. This leads to the
following properties.


Theorem 3.1 Let C = {ck−j } and B = {bk−j } be circulant n × n matrices
with eigenvalues
                                            
                                            n−1
                               ψm =               ck e−2πimk/n
                                            k=0

                                       
                                       n−1
                              βm =               bk e−2πimk/n ,
                                       k=0

respectively.

  1. C and B commute and

                                  CB = BC = U ∗ γU ,

      where γ = {ψm βm δk,m }, and CB is also a circulant matrix.
18                                   CHAPTER 3. CIRCULANT MATRICES

     2. C + B is a circulant matrix and

                                     C + B = U ∗ ΩU,

        where Ω = {(ψm + βm )δk,m }

     3. If ψm = 0; m = 0, 1, . . . , n − 1, then C is nonsingular and

                                     C −1 = U ∗ Ψ−1 U

        so that the inverse of C can be straightforwardly constructed.



Proof.
   We have C = U ∗ ΨU and B = U ∗ ΦU where Ψ and Φ are diagonal matrices
with elements ψm δk,m and βm φk,m , respectively.

     1. CB = U ∗ ΨU U ∗ ΦU
        = U ∗ ΨΦU
        = U ∗ ΦΨU = BC
        Since ΨΦ is diagonal, (3.9) implies that CB is circulant.

     2. C + B = U ∗ (Ψ + Φ)U

     3. C −1 = (U ∗ ΨU )−1
        = U ∗ Ψ−1 U
        if Ψ is nonsingular.

    Circulant matrices are an especially tractable class of matrices since in-
verses, products, and sums are also circulants and hence both straightforward
to construct and normal. In addition the eigenvalues of such matrices can
easily be found exactly.
    In the next chapter we shall see that certain circulant matrices asymp-
totically approximate Toeplitz matrices and hence from Chapter 2 results
similar to those in Theorem 3 will hold asymptotically for Toeplitz matrices.
Chapter 4

Toeplitz Matrices

In this chapter the asymptotic behavior of inverses, products, eigenvalues,
and determinants of ﬁnite Toeplitz matrices is derived by constructing an
asymptotically equivalent circulant matrix and applying the results of the
previous chapters. Consider the inﬁnite sequence {tk ; k = 0, ±1, ±2, · · ·} and
deﬁne the ﬁnite (n × n) Toeplitz matrix Tn = {tk−j } as in (1.1). Toeplitz
matrices can be classiﬁed by the restrictions placed on the sequence tk . If
there exists a ﬁnite m such that tk = 0, |k| > m, then Tn is said to be a
ﬁnite order Toeplitz matrix. If tk is an inﬁnite sequence, then there are two
common constraints. The most general is to assume that the tk are square
summable, i.e., that
                               ∞
                               
                                     |tk |2 < ∞ .                          (4.1)
                              k=−∞

Unfortunately this case requires mathematical machinery beyond that as-
sumed in this paper; i.e., Lebesgue integration and a relatively advanced
knowledge of Fourier series. We will make the stronger assumption that the
tk are absolutely summable, i.e.,
                                 ∞
                                 
                                       |tk | < ∞.                          (4.2)
                                k=−∞

This assumption greatly simpliﬁes the mathematics but does not alter the
fundamental concepts involved. As the main purpose here is tutorial and we
wish chieﬂy to relay the ﬂavor and an intuitive feel for the results, this paper
will be conﬁned to the absolutely summable case. The main advantage of
(4.2) over (4.1) is that it ensures the existence and continuity of the Fourier

                                       19
20                                        CHAPTER 4. TOEPLITZ MATRICES

series f (λ) deﬁned by
                             ∞
                                                        
                                                         n
                   f (λ) =           tk eikλ = n→∞
                                                lim            tk eikλ .        (4.3)
                             k=−∞                       k=−n

Not only does the limit in (4.3) converge if (4.2) holds, it converges uniformly
for all λ, that is, we have that
                                                                      
                                        −n−1             ∞           
                      n                                             
            f (λ) −     t  eikλ 
                                      =         t  eikλ
                                                         +       t  eikλ 
                         k                     k               k      
                    k=−n                k=−∞            k=n+1         

                                                                       
                                           −n−1           ∞            
                                                                     
                                      ≤             ikλ 
                                                 tk e  +           ikλ  ,
                                                                  tk e 
                                          
                                          k=−∞           k=n+1         

                                           −n−1
                                                            ∞
                                                             
                                      ≤           |tk | +           |tk |
                                          k=−∞              k=n+1

where the righthand side does not depend on λ and it goes to zero as n → ∞
from (4.2), thus given / there is a single N , not depending on λ, such that
                                 
                                 
                     n          
            f (λ) −          ikλ 
                         tk e    ≤/ ,     all λ ∈ [0, 2π] , if n ≥ N.         (4.4)
                    k=−n         

Note that (4.2) is indeed a stronger constraint than (4.1) since
                                                           2
                             ∞
                                            
                                              ∞             
                                  |tk |2 ≤             |tk | .
                          k=−∞               k=−∞

Note also that (4.2) implies that f (λ) is bounded since
                                      ∞
                                      
                     |f (λ)| ≤             |tk eikλ |
                                     k=−∞

                                      ∞
                                               ∆
                              ≤            |tk | = M|f | < ∞ .
                                     k=−∞

The matrix Tn will be Hermitian if and only if f is real, in which case we
denote the least upper bound and greatest lower bound of f (λ) by Mf and
mf , respectively. Observe that max(|mf |, |Mf |) ≤ M|f | .
                                                                                    21

     Since f (λ) is the Fourier series of the sequence tk , we could alternatively
begin with a bounded and hence Riemann integrable function f (λ) on [0, 2π]
(|f (λ)| ≤ M|f | < ∞ for all λ) and deﬁne the sequence of n × n Toeplitz
matrices
                       2π
    Tn (f ) = (2π)−1          f (λ)e−i(k−j) dλ ; k, j = 0, 1, · · · , n − 1   .   (4.5)
                        0


As before, the Toeplitz matrices will be Hermitian iﬀ f is real. The as-
sumption that f (λ) is Riemann integrable implies that f (λ) is continuous
except possibly at a countable number of points. Which assumption is made
depends on whether one begins with a sequence tk or a function f (λ) —
either assumption will be equivalent for our purposes since it is the Riemann
integrability of f (λ) that simpliﬁes the bookkeeping in either case. Before
ﬁnding a simple asymptotic equivalent matrix to Tn , we use Corollary 2.1
to ﬁnd a bound on the eigenvalues of Tn when it is Hermitian and an upper
bound to the strong norm in the general case.



Lemma 4.1 Let τn,k be the eigenvalues of a Toeplitz matrix Tn (f ). If Tn (f )
is Hermitian, then
                           mf ≤ τn,k ≤ Mf .                             (4.6)

Whether or not Tn (f ) is Hermitian,

                                     Tn (f ) ≤ 2M|f |                             (4.7)

so that the matrix is uniformly bounded over n if f is bounded.




Proof.
  Property (4.6) follows from Corollary 2.1:

                        max τn,k = max(x∗ Tn x)/(x∗ x)                            (4.8)
                             k      x


                            min τn,k = min(x∗ Tn x)/(x∗ x)
                             k            x
22                                            CHAPTER 4. TOEPLITZ MATRICES

so that
                               n−1
                              n−1 
               x∗ Tn x =                tk−j xk x̄j
                              k=0 j=0

                              n−1 !
                               n−1                  2π                           "
                        =                (2π)−1               f (λ)ei(k−j)λ dλ xk x̄j       (4.9)
                              k=0 j=0                 0


                                      2π n−1
                                             
                                                        2
                                                        
                                                   ikλ 
                        =     (2π)−1       
                                           
                                                x ke     f (λ) dλ
                                                        
                                      0       k=0
and likewise
                          
                          n−1                          2π            
                                                                      n−1
                  ∗                              −1
                 x x=           |xk | = (2π)
                                    2
                                                                dλ|         xk eikλ |2 .   (4.10)
                          k=0                             0           k=0

Combining (4.9)-(4.10) results in
                          2π                       2
                                         n−1        
                                              ikλ 
                                dλf (λ)  xk e 
                            0                             x∗ Tn x
                 mf ≤          2π     
                                           k=0
                                                       =         ≤ Mf ,                   (4.11)
                                       n−1
                                       
                                                  2
                                                  
                                                           x∗ x
                                   dλ  xk eikλ 
                               0        k=0

which with (4.8) yields (4.6). Alternatively, observe in (4.11) that if e(k) is
the eigenvector associated with τn,k , then the quadratic form with x = e(k)
                      #
yields x∗ Tn x = τn,k n−1k=0 |xk | . Thus (4.11) implies (4.6) directly.
                                  2

    We have already seen in (2.13) that if Tn (f ) is Hermitian, then Tn (f ) =
             ∆
maxk |τn,k | = |τn,M |, which we have just shown satisﬁes |τn,M | ≤ max(|Mf |, |mf |)
which in turn must be less than M|f | , which proves (4.7) for Hermitian ma-
trices.. Suppose that Tn (f ) is not Hermitian or, equivalently, that f is not
real. Any function f can be written in terms of its real and imaginary parts,
f = fr + ifi , where both fr and fi are real. In particular, fr = (f + f ∗ )/2
and fi = (f − f ∗ )/2i. Since the strong norm is a norm,
                        Tn (f )     =         Tn (fr + ifi )

                                    =         Tn (fr ) + iTn (fi )

                                    ≤         Tn (fr )         +      Tn (fi )

                                    ≤ M|fr | + M|fi | .
4.1. FINITE ORDER TOEPLITZ MATRICES                                                     23

Since |(f ± f ∗ )/2 ≤ (|f | + |f ∗ |)/2 ≤ M|f | , M|fr | + M|fi | ≤ 2M|f | , proving (4.7).

   Note for later use that the weak norm between Toeplitz matrices has a
simpler form than (2.14). Let Tn = {tk−j } and Tn = {tk−j } be Toeplitz, then
by collecting equal terms we have


                                          n−1
                                         n−1 
                  |Tn − Tn |2 = n−1                |tk−j − tk−j |2
                                         k=0 j=0


                                              
                                              n−1
                                = n−1                (n − |k|)|tk − tk |2
                                         k=−(n−1)                            .     (4.12)

                                        
                                        n−1
                                =               (1 − |k|/n)|tk − tk |2
                                     k=−(n−1)




We are now ready to put all the pieces together to study the asymptotic
behavior of Tn . If we can ﬁnd an asymptotically equivalent circulant matrix
then all of the results of Chapters 2 and 3 can be instantly applied. The
main diﬀerence between the derivations for the ﬁnite and inﬁnite order case
is the circulant matrix chosen. Hence to gain some feel for the matrix chosen
we ﬁrst consider the simpler ﬁnite order case where the answer is obvious,
and then generalize in a natural way to the inﬁnite order case.




4.1       Finite Order Toeplitz Matrices

Let Tn be a sequence of ﬁnite order Toeplitz matrices of order m + 1, that is,
ti = 0 unless |i| ≤ m. Since we are interested in the behavior or Tn for large n
we choose n >> m. A typical Toeplitz matrix will then have the appearance
of the following matrix, possessing a band of nonzero entries down the central
diagonal and zeros everywhere else. With the exception of the upper left and
lower right hand corners that Tn looks like a circulant matrix, i.e. each row
24                                                 CHAPTER 4. TOEPLITZ MATRICES

is the row above shifted to the right one place.
                                                                                              
             t0    t−1 · · · t−m
                                                                                              
           t1     t0                                                                          
                                                                                              
           ..                                                                                 
           .                                                      0                           
                                                                                              
                           ..                          ..                                     
                                .                           .                                 
                                                                                              
                                                                                              
         tm                                                                                   
                                                                                              
                  ..                                                                          
                       .                                                                      
     T =
        
                                                                                               .
                                                                                               
                                                                                                      (4.13)
                           tm           ···   t1 t0 t−1 · · · t−m                             
                                                                                              
                                                                                              
                                                                                              
                                                                  ...                         
                                                                                     t−m      
                                                                                              
                                                                                 ..           
                                                                                  .           
                                                                                              
                                                                                              
                  0                                                               t0 t−1      
                                                                   tm    ···       t1 t0

We can make this matrix exactly into a circulant if we ﬁll in the upper right
and lower left corners with the appropriate entries. Deﬁne the circulant
matrix C in just this way, i.e.
                                                                                                         
          t0      t−1 · · · t−m                                                    tm    ···         t1
                                                                                                   ..  
                                                                                        ...            
     t1                                                                                             .  
                                                                                                       
                                                                                                   tm 
                                                                                                       
     .                                             ...                                                 
     ..                                                                                                
                                                                                                       
                                                                                                       
     tm                                                                           0                    
                                                                                                       
                                                                                                       
                                                                                                       
                 ...                                                                                   
                                                                                                       
                                                                                                       
                                                                                                       
    
 T =                                tm         t1 t0            t−1 · · ·         t−m                  
                                                                                                        
                                                                                        ...            
                                                                                                       
                                                                                                       
                                                                                                       
                                                                                                       
                                                                                                       
                                                                                                       
                                                                                                       
                                    0                                                              t−m 
                                                                                                       
                                                                                                       
     t−m                                                                                               
                                                                                                       
     ..          ...                                                                               ..  
     .                                                                                              .  
                                                                                                       
                                                                                        t0         t−1 
                                                                                                       
          t−1     ···                t−m                                     tm          · · · t1 t0
4.1. FINITE ORDER TOEPLITZ MATRICES                                                      25
                              (n)                                (n)    
                              c0     ···                          cn−1
                                                                        
                                                                        
                         (n)                                            
                         c           (n)
                                     c0      ···                         
                         n−1                                            
                                                                        
                       =
                        
                                                                         .
                                                                                     (4.14)
                                            ..                          
                                                 .                      
                                                                        
                                                                        
                                                                        
                               (n)                       (n)       (n)
                              c1                        cn−1      c0
                                                            (n)          (n)
Equivalently, C, consists of cyclic shifts of (c0 , · · · , cn−1 ) where
                           
                           
                            t−k            k = 0, 1, · · · , m
                           
                           
                    (n)
                   ck =                                                              (4.15)
                        
                         t(n−k)            k = n − m, · · · , n − 1
                        
                          0                 otherwise

Given Tn (f ), the circulant matrix deﬁned as in (4.14)-(4.15) is denoted Cn (f ).
    The matrix Cn (f ) is intuitively a candidate for a simple matrix asymp-
totically equivalent to Tn (f ) — we need only prove that it is indeed both
asymptotically equivalent and simple.


Lemma 4.2 The matrices Tn and Cn deﬁned in (4.13) and (4.14) are asymp-
totically equivalent, i.e., both are bounded in the strong norm and.

                                   lim |Tn − Cn | = 0.                                (4.16)
                                   n→∞




Proof. The tk are obviously absolutely summable, so Tn are uniformly
bounded by 2M|f | from Lemma 4.1. The matrices Cn are also uniformly
bounded since Cn∗ Cn is a circulant matrix with eigenvalues |f (2πk/n)|2 ≤
4M|f2 | . The weak norm of the diﬀerence is

                                           
                                           m
                |Tn − Cn |2 = n−1               k(|tk |2 + |t−k |2 )
                                          k=0
                                                                                  .
                                            
                                            m
                                                                           −→
                               ≤ mn−1                 (|tk |2 + |t−k |2 ) n→∞ 0
                                            k=0
26                                         CHAPTER 4. TOEPLITZ MATRICES

    The above Lemma is almost trivial since the matrix Tn − Cn has fewer
than m2 non-zero entries and hence the n−1 in the weak norm drives |Tn −Cn |
to zero.
    From Lemma 4.2 and Theorem 2.2 we have the following lemma:


Lemma 4.3 Let Tn and Cn be as in (4.13) and (4.14) and let their eigen-
values be τn,k and ψn,k , respectively, then for any positive integer s

                                   
                                   n−1                      
                                                            n−1
                         lim n−1
                        n→∞
                                          s
                                         τn,k    lim n−1
                                              = n→∞                s
                                                                  ψn,k .    (4.17)
                                   k=0                      k=0

In fact, for ﬁnite n,
                                                   
                                                   
                     −1  s              
                         n−1              n−1
                                       −1       s         −1/2
                    n
                    
                             τ n,k − n        ψn,k  ≤ Kn      ,           (4.18)
                           k=0                k=0

where K is not a function of n.



Proof.
    Equation (4.17) is direct from Lemma 4.2 and Theorem 2.2. Equation
(4.18) follows from Lemma 2.3 and Lemma 4.2.
    Lemma 4.3 is of interest in that for ﬁnite order Toeplitz matrices one can
ﬁnd the rate of convergence of the eigenvalue moments. It can be shown that
k ≤ sMfs−1 .
    The above two lemmas show that we can immediately apply the results
of Section II to Tn and Cn . Although Theorem 2.1 gives us immediate hope
of fruitfully studying inverses and products of Toeplitz matrices, it is not yet
clear that we have simpliﬁed the study of the eigenvalues. The next lemma
clariﬁes that we have indeed found a useful approximation.


Lemma 4.4 Let Cn (f ) be constructed from Tn (f ) as in (4.14) and let ψn,k
be the eigenvalues of Cn (f ), then for any positive integer s we have

                                 
                                 n−1                    2π
                    lim n−1             s
                                       ψn,k = (2π)−1          f s (λ) dλ.   (4.19)
                   n→∞                                  0
                                 k=0
4.1. FINITE ORDER TOEPLITZ MATRICES                                                     27

If Tn (f ) and hence Cn (f ) are Hermitian, then for any function F (x) contin-
uous on [mf , Mf ] we have
                           
                           n−1                             2π
                 lim n−1
                n→∞
                                  F (ψn,k ) = (2π)−1               F [f (λ)] dλ.     (4.20)
                           k=0                                0




Proof.
  From Chapter 3 we have exactly
                            
                            n−1
                                  ck e−2πijk/n
                                   (n)
               ψn,j =
                            k=0


                            
                            m                        
                                                     n−1
                     =            t−k e−2πijk/n +                 tn−k e−2πijk/n .   (4.21)
                            k=0                     k=n−m

                             
                             m
                     =              tk e−2πijk/n = f (2πjn−1 )
                            k=−m

Note that the eigenvalues of Cn are simply the values of f (λ) with λ uniformly
spaced between 0 and 2π. Deﬁning 2πk/n = λk and 2π/n = ∆λ we have
                            
                            n−1                           
                                                          n−1
                  lim n−1
                 n→∞
                                   s
                                  ψn,k =      lim n−1
                                             n→∞
                                                                  f (2πk/n)s
                            k=0                           k=0

                                                    
                                                    n−1
                                         =   lim          f (λk )s ∆λ/(2π)
                                             n→∞
                                                    k=0
                                                       2π
                                         = (2π)−1                 f (λ)s dλ,         (4.22)
                                                          0

where the continuity of f (λ) guarantees the existence of the limit of (4.22)
as a Riemann integral. If Tn and Cn are Hermitian than the ψn,k and f (λ)
are real and application of the Stone-Weierstrass theorem to (4.22) yields
(4.20). Lemma 4.2 and (4.21) ensure that ψn,k and τn,k are in the real interval
[mf , Mf ].
    Combining Lemmas 4.2-4.4 and Theorem 2.2 we have the following special
case of the fundamental eigenvalue distribution theorem.
28                                          CHAPTER 4. TOEPLITZ MATRICES

Theorem 4.1 If Tn (f ) is a ﬁnite order Toeplitz matrix with eigenvalues τn,k ,
then for any positive integer s
                                  
                                  n−1                     2π
                             −1
                   lim n                 s
                                        τn,k = (2π)−1           f (λ)s dλ.        (4.23)
                   n→∞                                     0
                                  k=0

Furthermore, if Tn (f ) is Hermitian, then for any function F (x) continuous
on [mf , Mf ]
                             
                             n−1                            2π
                        −1                            −1
                lim n
                n→∞
                                   F (τn,k ) = (2π)               F [f (λ)] dλ;   (4.24)
                             k=0                            0

i.e., the sequences τn,k and f (2πk/n) are asymptotically equally distributed.


    This behavior should seem reasonable since the equations Tn x = τ x and
Cn x = ψx, n > 2m + 1, are essentially the same nth order diﬀerence equation
with diﬀerent boundary conditions. It is in fact the “nice” boundary condi-
tions that make ψ easy to ﬁnd exactly while exact solutions for τ are usually
intractable.
    With the eigenvalue problem in hand we could next write down theorems
on inverses and products of Toeplitz matrices using Lemma 4.2 and the results
of Chapters 2-3. Since these theorems are identical in statement and proof
with the inﬁnite order absolutely summable Toeplitz case, we defer these
theorems momentarily and generalize Theorem 4.1 to more general Toeplitz
matrices with no assumption of ﬁne order.


4.2     Toeplitz Matrices
Obviously the choice of an appropriate circulant matrix to approximate a
Toeplitz matrix is not unique, so we are free to choose a construction with
the most desirable properties. It will, in fact, prove useful to consider two
slightly diﬀerent circulant approximations to a given Toeplitz matrix. Say
we have an absolutely summable sequence {tk ; k = 0, ±1, ±2, · · ·} with
                                           ∞
                                           
                        f (λ) =                tk eikλ
                                          k=−∞
                                                                       .          (4.25)
                                                  2π
                             tk = (2π)−1                f (λ)e−ikλ
                                                  0
4.2. TOEPLITZ MATRICES                                                                          29

                                                                                 (n)   (n)    (n)
Deﬁne Cn (f ) to be the circulant matrix with top row (c0 , c1 , · · · , cn−1 )
where
                                         
                                         n−1
                          ck = n−1
                            (n)
                                               f (2πj/n)e2πijk/n .                           (4.26)
                                         j=0

Since f (λ) is Riemann integrable, we have that for ﬁxed k
                                                    
                                                    n−1
                                        lim n−1
                            (n)
                      lim c        =                      f (2πj/n)e2πijk/n
                     n→∞ k              n→∞
                                                    j=0
                                                                                             (4.27)
                                                    2π
                                   = (2π)−1               f (λ)eikλ dλ = t−k
                                                    0
               (n)
and hence the ck are simply the sum approximations to the Riemann integral
giving t−k . Equations (4.26), (3.7), and (3.9) show that the eigenvalues ψn,m
of Cn are simply f (2πm/n); that is, from (3.7) and (3.9)
                            
                            n−1
                                  ck e−2πimk/n
                                  (n)
             ψn,m =
                            k=0
                                                                    
                            
                            n−1          
                                         n−1
                      =           n−1         f (2πj/n)e2πijk/n  e−2πimk/n
                            k=0          j=0                                           .     (4.28)
                                                                            %
                            
                            n−1                         
                                                        n−1
                      =           f (2πj/n) n−1               22πik(j−m)/n
                            j=0                         k=0


                      = f (2πm/n)
Thus, Cn (f ) has the useful property (4.21) of the circulant approximation
(4.15) used in the ﬁnite case. As a result, the conclusions of Lemma 4.4
hold for the more general case with Cn (f ) constructed as in (4.26). Equation
(4.28) in turn deﬁnes Cn (f ) since, if we are told that Cn is a circulant matrix
with eigenvalues f (2πm/n), m = 0, 1, · · · , n − 1, then from (3.9)
                                          
                                          n−1
                                  = n−1
                          (n)
                       ck                       ψn,m e2πimk/n
                                          m=0
                                                                             ,               (4.29)
                                          
                                          n−1
                                  = n−1         f (2πm/n)e2πimk/n
                                          m=0
30                                       CHAPTER 4. TOEPLITZ MATRICES

as in (4.26). Thus, either (4.26) or (4.28) can be used to deﬁne Cn (f ).
    The fact that Lemma 4.4 holds for Cn (f ) yields several useful properties
as summarized by the following lemma.



Lemma 4.5


     1. Given a function f of (4.25) and the circulant matrix Cn (f ) deﬁned by
        (4.26), then

                             ∞
                             
                      (n)
                     ck =           t−k+mn ,        k = 0, 1, · · · , n − 1.   (4.30)
                            m=−∞


        (Note, the sum exists since the tk are absolutely summable.)

     2. Given Tn (f ) where f (λ) is real and f (λ) ≥ mf > 0, then

                                   Cn (f )−1 = Cn (1/f ).


     3. Given two functions f (λ) and g(λ), then

                                  Cn (f )Cn (g) = Cn (f g).


Proof.


     1. Since e−2πimk/n is periodic with period n, we have that

                                     ∞
                                                         ∞
                                                          
                  f (2πj/n) =             tm ei2πjm/n
                                                               t−m e−i2πjm/n
                                   m=−∞                 m=−∞


                                   
                                   n−1   ∞
                                         
                              =                  t−1+mn e−2πijl/n
                                    l=0 m=−∞
4.2. TOEPLITZ MATRICES                                                                   31

      and hence from (4.26) and (3.9)

                                   
                                   n−1
                         = n−1
                   (n)
                  ck                     f (2πj/n)e2πijk/n
                                   j=0


                                    n−1
                                   n−1       ∞
                                              
                         = n−1                       t−1+mn e2πij(k−l)/n
                                   j=0 l=0 m=−∞

                                                                                .
                             
                             n−1    ∞
                                                             
                                                               n−1              
                         =                 t−1+mn n−1               e2πij(k−l)/n 
                             l=0 m=−∞                          j=0

                              ∞
                              
                         =           t−k+mn
                             m=−∞


  2. Since Cn (f ) has eigenvalues f (2πk/n) > 0, by Theorem 3.1, Cn (f )−1
     has eigenvalues 1/f (2πk/n), and hence from (4.29) and the fact that
     Cn (f )−1 is circulant we have Cn (f )−1 = Cn (1/f ).

  3. Follows immediately from Theorem 3.1 and the fact that, if f (λ) and
     g(λ) are Riemann integrable, so is f (λ)g(λ).


     Equation (4.30) points out a shortcoming of Cn (f ) for applications as
a circulant approximation to Tn (f ) — it depends on the entire sequence
{tk ; k = 0, ±1, ±2, · · ·} and not just on the ﬁnite collection of elements
{tk ; k = 0, ±1, · · · , ±n − 1} of Tn (f ). This can cause problems in practi-
cal situations where we wish a circulant approximation to a Toeplitz matrix
Tn when we only know Tn and not f . Pearl [13] discusses several coding and
ﬁltering applications where this restriction is necessary for practical reasons.
A natural such approximation is to form the truncated Fourier series
                                             
                                             n
                              fˆn (λ) =            tk eikλ ,                          (4.31)
                                            k=−n


which depends only on {tk ; k = 0, ±1, · · · , ±n − 1}, and then deﬁne the
circulant matrix
                              Ĉn = Cn (fˆn );                       (4.32)
32                                           CHAPTER 4. TOEPLITZ MATRICES

                                                                 (n)            (n)
that is, the circulant matrix having as top row (ĉ0 , · · · , ĉn−1 ) where

                                     
                                     n−1
                          = n−1
                    (n)
                   ĉk                     fˆn (2πj/n)e2πijk/n
                                     j=0

                                                                     
                                     
                                     n−1        
                                                n
                                −1                         2πijk/n
                          = n                       tm e                 e2πijk/n     (4.33)
                                     j=0     m=−n

                                                                          
                              
                              n                     
                                                    n−1
                          =           tm n−1             e2πij(k+m)/n  .
                              m=−n                  j=0


The last term in parentheses is from (3.9) 1 if m = −k or m = n − k, and
hence
                   (n)
                 ĉk = t−k + tn−k , k = 0, 1, · · · , n − 1.
Note that both Cn (f ) and Ĉn = Cn (fˆn ) reduces to the Cn (f ) of (4.15) for an
rth order Toeplitz matrix if n > 2r + 1.
    The matrix Ĉn does not have the property (4.28) of having eigenvalues
f (2πk/n) in the general case (its eigenvalues are fˆn (2πk/n), k = 0, 1, · · · , n −
1), but it does not have the desirable property to depending only on the
entries of Tn . The following lemma shows that these circulant matrices are
asymptotically equivalent to each other and Tm .


Lemma 4.6 Let Tn = {tk−j } where
                                       ∞
                                       
                                                |tk | < ∞
                                     k=−∞

and deﬁne as usual
                                                ∞
                                                
                                f (λ) =              tk eikλ .
                                              k=−∞

Deﬁne the circulant matrices Cn (f ) and Ĉn = Cn (fˆn ) as in (4.26) and (4.31)-
(4.32). Then,
                             Cn (f ) ∼ Ĉn ∼ Tn .                          (4.34)

Proof.
4.2. TOEPLITZ MATRICES                                                                         33

    Since both Cn (f ) and Ĉn are circulant matrices with the same eigenvec-
tors (Theorem 3.1), we have from part 2 of Theorem 3.1 and (2.14) and the
comment following it that
                                             
                                             n−1
               |Cn (f ) − Ĉn |2 = n−1             |f (2πk/n) − fˆn (2πk/n)|2 .
                                             k=0

Recall from (4.4) and the related discussion that fˆn (λ) uniformly converges
to f (λ), and hence given / > 0 there is an N such that for n ≥ N we have
for all k, n that
                        |f (2πk(n) − fˆn (2πk/n)|2 ≤ /
and hence for n ≥ N
                                                             
                                                             n−1
                                                        −1
                           |Cn (f ) − Ĉn | ≤ n2
                                                                   / = /.
                                                             i=0

Since / is arbitrary,
                                 lim |Cn (f ) − Ĉn | = 0
                                 n→∞

proving that
                                           Cn (f ) ∼ Ĉn .                                  (4.35)
Next, Ĉn = {tk−j } and use (4.12) to obtain

                                            
                                            n−1
                   |Tn − Ĉn |2 =                   (1 − |k|/n)|tk − tk |2 .
                                       k=−(n−1)

From (4.33) we have that
                            
                            
                            
                                (n)
                                                                      k≤0
                             ĉ|k|        = t|k| + tn−|k|
                       tk =                                                               (4.36)
                            
                             ĉ(n)
                                 n−k       = t−|n−k| + tk             k≥0

and hence
                                             
                                             n−1
         |Tn − Ĉn |2
                         = |tn−1 | +   2
                                                   (1 − k/n)(|tn−k |2 + |t−(n−k) |2 )
                                             k=0
                                                                                        .
                                             
                                             n−1
                         = |tn−1 |2 +              (k/n)(|tk |2 + |t−k |2 )
                                             k=0
34                                             CHAPTER 4. TOEPLITZ MATRICES

Since the {tk } are absolutely summable,
                                        lim |tn−1 |2 = 0
                                       n→∞

and given / > 0 we can choose an N large enough so that
                                     ∞
                                     
                                         |tk |2 + |t−k |2 ≤ /
                                 k=N

and hence
                               
                               n−1
  lim |Tn − Ĉn | =
 n→∞
                         lim
                        n→∞
                                     (k/n)(|tk |2 + |t−k |2 )
                               k=0

                               N −1                                                                    %
                                                                      
                                                                       n−1
                 =      lim            (k/n)(|tk |2 + |t−k |2 ) +            (k/n)(|tk |2 + |t−k |2 )       .
                        n→∞
                                k=0                                    k=N

                                         −1
                                                                       ∞
                                       
                                       N                                
                                −1
                 ≤      lim n
                        n→∞
                                              k(|tk | + |t−k | ) +
                                                   2           2
                                                                              (|tk |2 + |t−k |2 ) ≤ /
                                       k=0                              k=N

Since / is arbitrary,
                                      lim |Tn − Ĉn | = 0
                                     n→∞
and hence
                                             Tn ∼ Ĉn ,                                       (4.37)
which with (4.35) and Theorem 2.1 proves (4.34).
   We note that Pearl [13] develops a circulant matrix similar to Ĉn (de-
pending only on the entries of Tn ) such that (4.37) holds in the more general
case where (4.1) instead of (4.2) holds.
   We now have a circulant matrix Cn (f ) asymptotically equivalent to Tn
and whose eigenvalues, inverses and products are known exactly. We can
now use Lemmas 4.2-4.4 and Theorems 2.2-2.3 to immediately generalize
Theorem 4.1


Theorem 4.2 Let Tn (f ) be a sequence of Toeplitz matrices such that f (λ)
is Riemann integrable, e.g., f (λ) is bounded or the sequence tk is absolutely
summable. Then if τn,k are the eigenvalues of Tn and s is any positive integer
                                 
                                 n−1                       2π
                      lim n−1            s
                                        τn,k = (2π)−1              f (λ)s dλ.                 (4.38)
                      n→∞                                  0
                                 k=0
4.2. TOEPLITZ MATRICES                                                                 35

Furthermore, if Tn (f ) is Hermitian (f (λ) is real) then for any function F (x)
continuous on [mf , Mf ]

                              
                              n−1                             2π
                         −1                             −1
                 lim n              F (τn,k ) = (2π)                F [f (λ)] dλ.   (4.39)
                n→∞                                           0
                              k=0



    Theorem 4.2 is the fundamental eigenvalue distribution theorem of Szegö
[1]. The approach used here is essentially a specialization of Grenander’s [1,
ch. 7].
    Theorem 4.2 yields the following two corollaries.


Corollary 4.1 Let Tn (f ) be Hermitian and deﬁne the eigenvalue distribution
function Dn (x) = n−1 (number of τn,k ≤ x). Assume that
                                      
                                                   dλ = 0.
                                       λ:f (λ)=x

Then the limiting distribution D(x) = limn→∞ Dn (x) exists and is given by
                                                    
                              D(x) = (2π)−1                       dλ.
                                                     f (λ)≤x


    The technical condition of a zero integral over the region of the set of λ
for which f (λ) = x is needed to ensure that x is a point of continuity of the
limiting distribution.

Proof.
  Deﬁne the characteristic function
                                          
                                          
                                           1      mf ≤ α ≤ x
                         1x (α) =                                       .
                                          
                                          
                                              0    otherwise

We have
                                                    
                                                    n−1
                                  lim n−1
                          D(x) = n→∞                      1x (τn,k ) .
                                                    k=0

Unfortunately, 1x (α) is not a continuous function and hence Theorem 4.2 can-
not be immediately implied. To get around this problem we mimic Grenander
36                                              CHAPTER 4. TOEPLITZ MATRICES

and Szegö p. 115 and deﬁne two continuous functions that provide upper
and lower bounds to 1x and will converge to it in the limit. Deﬁne
                                           
                                           1             α≤x
                             x (α) =  1 − 
                            1+                            x<α≤x+/
                                          α−x

                                            0             x+/<α
                                        
                                        1  α≤x−/
                           1−    −
                            x (α) =
                               1   α−x+
                                            x−/<α≤x
                                    
                               0            x<α
The idea here is that the upper bound has an output of 1 everywhere 1x does,
but then it drops in a continuous linear fashion to zero at x + / instead of
immediately at x. The lower bound has a 0 everywhere 1x does and it rises
linearly from x to x − / to the value of 1 instead of instantaneously as does
1x . Clearly
                           1−                 +
                            x (α) < 1x (α) < 1x (α)

for all α.
                       −
    Since both 1+
                x and 1x are continuous, Theorem 4 can be used to conclude
that
                  
                  n−1
       lim n−1          1+
                         x (τn,k )
       n→∞
                  k=0
                                 
                            −1
             = (2π)                  1+
                                      x (f (λ)) dλ

                                                             
                            −1                           −1                        f (λ) − x
             = (2π)                        dλ + (2π)                        (1 −             ) dλ
                                 f (λ)≤x                      x<f (λ)≤x+              /
                                                             
             ≤ (2π)−1                      dλ + (2π)−1                      dλ
                                 f (λ)≤x                      x<f (λ)≤x+

and
                 
                 n−1
       lim n−1
      n→∞
                       1−
                        x (τn,k )
                 k=0
                       
                  −1
       = (2π)              1−
                            x (f (λ)) dλ

                                                    
                  −1                            −1                          f (λ) − (x − /)
       = (2π)                         dλ + (2π)                     (1 −                    ) dλ
                        f (λ)≤x−                    x−<f (λ)≤x                   /
4.2. TOEPLITZ MATRICES                                                                          37
                                                       
             −1                                  −1
       = (2π)                      dλ + (2π)                                   (x − f (λ)) dλ
                  f (λ)≤x−                              x−<f (λ)≤x
                  
             −1
       ≥ (2π)                      dλ
                  f (λ)≤x−
                                                   
             −1                                −1
       = (2π)                 dλ − (2π)                                       dλ
                  f (λ)≤x                              x−<f (λ)≤x

   These inequalities imply that for any / > 0, as n grows the sample average
   #
n−1 n−1
     k=0 1x (τn,k ) will be sandwitched between
                                                                     
                      (2π)−1                 dλ + (2π)−1                                  dλ
                                   f (λ)≤x                                x<f (λ)≤x+

and                                                                  
                         −1                                      −1
                  (2π)                       dλ − (2π)                                    dλ.
                               f (λ)≤x                                x−<f (λ)≤x

Since / can be made arbitrarily small, this means the sum will be sandwiched
between                              
                                  −1
                              (2π)           dλ
                                                        f (λ)≤x

and                                                                      
                            −1                                     −1
                       (2π)                    dλ − (2π)                              dλ.
                                     f (λ)≤x                                f (λ)=x

Thus if                                  
                                                        dλ = 0,
                                             f (λ)=x

then                                                         2π
                                                    −1
                         D(x) = (2π)                               1x [f (λ)]dλ
                                                             0
                                                                                     .
                                                    −1
                                        = (2π) v                              dλ
                                                                 f (λ)≤x




Corollary 4.2 For Tn (f ) Hermitian we have

                                        lim max τn,k = Mf
                                        n→∞     k

                                        lim min τn,k = mf .
                                        n→∞     k
38                                      CHAPTER 4. TOEPLITZ MATRICES

Proof.
  From Corollary 4.1 we have for any / > 0
                                            
                         D(mf + /) =                      dλ > 0.
                                            f (λ)≤mf +

The strict inequality follows from the continuity of f (λ). Since

                  lim n−1 {number of τn,k in [mf , mf + /]} > 0
                 n→∞

there must be eigenvalues in the interval [mf , mf + /] for arbitrarily small /.
Since τn,k ≥ mf by Lemma 4.1, the minimum result is proved. The maximum
result is proved similarly.
   We next consider the inverse of an Hermitian Toeplitz matrix.


Theorem 4.3 Let Tn (f ) be a sequence of Hermitian Toeplitz matrices such
that f (λ) is Riemann integrable and f (λ) ≥ 0 with equality holding at most
at a countable number of points.

     1. Tn (f ) is nonsingular

     2. If f (λ) ≥ mf > 0, then

                                  Tn (f )−1 ∼ Cn (f )−1 ,                           (4.40)

        where Cn (f ) is deﬁned in (4.29). Furthermore, if we deﬁne Tn (f ) −
        Cn (f ) = Dn then Tn (f )−1 has the expansion

             Tn (f )−1 = [Cn (f ) + Dn ]−1

                                                            −1
                       = Cn (f )−1 [I + Dn Cn (f )−1 ]
                                    &                                               '
                                                                                2
                     = Cn (f )−1 I + Dn Cn (f )−1 + (Dn Cn (f )−1 ) + · · ·
                                                                          (4.41)
        and the expansion converges (in weak norm) for suﬃciently large n.

     3. If f (λ) ≥ mf > 0, then
                                                  π
              Tn (f )−1 ∼ Tn (1/f ) = (2π)−1              dλei(k−j)λ /f (λ) ;       (4.42)
                                                    −π
4.2. TOEPLITZ MATRICES                                                                      39

     that is, if the spectrum is strictly positive then the inverse of a Toeplitz
     matrix is asymptotically Toeplitz. Furthermore if ρn,k are the eigenval-
     ues of Tn (f )−1 and F (x) is any continuous function on [1/Mf , 1/mf ],
     then
                          
                          n−1                         π
                lim n−1
               n→∞
                                F (ρn,k ) = (2π)−1          F [(1/f (λ)] dλ.           (4.43)
                          k=0                         −π



  4. If mf = 0, f (λ) has at least one zero, and the derivative of f (λ) exists
     and is bounded, then Tn (f )−1 is not bounded, 1/f (λ) is not integrable
     and hence Tn (1/f ) is not deﬁned and the integrals of (4.41) may not
     exist. For any ﬁnite θ, however, the following similar fact is true: If
     F (x) is a continuous function of [1/Mf , θ], then

                    
                    n−1                                     2π
          lim n−1         F [min(ρn,k , θ)] = (2π)−1              F [min(1/f (λ), θ)] dλ.
         n→∞                                                0
                    k=0
                                                                                       (4.44)

Proof.

  1. Since f (λ) > 0 except at possible a ﬁnite number of points, we have
     from (4.9)
                                                  2
                     ∗        1  π n−1
                                                  
                                               ikλ 
                    x Tn x =             x k e     f (λ)dλ > 0
                             2π −π k=0            

     so that for all n
                                         min τn,k > 0
                                          k

     and hence
                                               
                                               n−1
                                    det Tn =         τn,k = 0
                                               k=0

     so that Tn (f ) is nonsingular.

  2. From Lemma 4.6, Tn ∼ Cn and hence (4.40) follows from Theorem 2.1
     since f (λ) ≥ mf > 0 ensures that


                                 Tn−1 , Cn−1 ≤ 1/mf < ∞.
40                                       CHAPTER 4. TOEPLITZ MATRICES

       The series of (4.41) will converge in weak norm if

                                        |Dn Cn−1 | < 1                           (4.45)

       since
                                                                  −→
                     |Dn Cn−1 | ≤ Cn−1     ·|Dn | ≤ (1/mf )|Dn | n→∞ 0
       (4.45) must hold for large enough n. From (4.40), however, if n is large
       enough, then probably the ﬁrst term of the series is suﬃcient.

     3. We have

         |Tn (f )−1 − Tn (1/f )| ≤ |Tn (f )−1 − Cn (f )−1 | + |Cn (f )−1 − Tn (1/f )|.

       From (b) for any / > 0 we can choose an n large enough so that
                                                          /
                                |Tn (f )−1 − Cn (f )−1 | ≤ .                     (4.46)
                                                          2
       From Theorem 3.1 and Lemma 4.5, Cn (f )−1 = Cn (1/f ) and from
       Lemma 4.6 Cn (1/f ) ∼ Tn (1/f ). Thus again we can choose n large
       enough to ensure that

                                |Cn (f )−1 − Tn (1/f )| ≤ //2                    (4.47)

       so that for any / > 0 from (4.46)-(4.47) can choose n such that

                                 |Tn (f )−1 − Tn (1/f )| ≤ /

       which is (4.42). Equation (4.43) follows from (4.42) and Theorem 2.4.
       Alternatively, if G(x) is any continuous function on [1/Mf , 1/mf ] and
       (4.43) follows directly from Lemma 4.6 and Theorem 2.4 applied to
       G(1/x).

     4. When f (λ) has zeros (mf = 0) then from Corollary 4.2 lim minτn,k = 0
                                                             n→∞ k
        and hence
                             Tn−1 = max ρn,k = 1/ min τn,k             (4.48)
                                          k               k

       is unbounded as n → ∞. To prove that 1/f (λ) is not integrable and
       hence that Tn (1/f ) does not exist we deﬁne the sets

                       Ek = {λ : 1/k ≥ f (λ)/Mf > 1/(k + 1)}
                                                                                 (4.49)
                          = {λ : k ≤ Mf /f (λ) < k + 1}
4.2. TOEPLITZ MATRICES                                                         41

      since f (λ) is continuous on [0, Mf ] and has at least one zero all of these
      sets are nonzero intervals of size, say, |Ek |. From (4.49)
                             π                ∞
                                               
                                  dλ/f (λ) ≥         |Ek |k/Mf             (4.50)
                             −π                k=1

      since f (λ) is diﬀerentiable there is some ﬁnite value η such that
                                             
                                          df 
                                             
                                              ≤ η.                       (4.51)
                                          dλ 

      From (4.50) and (4.51)
                π                ∞
                                  
                     dλ/f (λ) ≥         (k/Mf )(1/k − 1/(k + 1)/η
                −π                k=1
                                                                    ,      (4.52)
                                             ∞
                                             
                             = (Mf η)−1            1/(k + 1)
                                             k=1

      which diverges so that 1/f (λ) is not integrable. To prove (4.44) let F (x)
      be continuous on [1/Mf , θ], then F [min(1/x, θ)] is continuous on [0, Mf ]
      and hence Theorem 2.4 yields (4.44). Note that (4.44) implies that the
      eigenvalues of Tn−1 are asymptotically equally distributed up to any
      ﬁnite θ as the eigenvalues of the sequence of matrices Tn [min(1/f, θ)].

   A special case of part 4 is when Tn (f ) is ﬁnite order and f (λ) has at least
one zero. Then the derivative exists and is bounded since
                                                      
                                                     
                                         m            
                          df /dλ =                ikλ 
                                             iktk e 
                                        
                                        k=−m          
                                                               .
                                         
                                         m
                                  ≤          |k||tk | < ∞
                                        k=−m

    The series expansion of part 2 is due to Rino [6]. The proof of part 4
is motivated by one of Widom [2]. Further results along the lines of part 4
regarding unbounded Toeplitz matrices may be found in [5].
    Extending (a) to the case of non-Hermitian matrices can be somewhat
diﬃcult, i.e., ﬁnding conditions on f (λ) to ensure that Tn (f ) is invertible.
42                                             CHAPTER 4. TOEPLITZ MATRICES

Parts (a)-(d) can be straightforwardly extended if f (λ) is continuous. For a
more general discussion of inverses the interested reader is referred to Widom
[2] and the references listed in that paper. It should be pointed out that when
discussing inverses Widom is concerned with the asymptotic behavior of ﬁnite
matrices. As one might expect, the results are similar. The results of Baxter
[7] can also be applied to consider the asymptotic behavior of ﬁnite inverses
in quite general cases.
    We next combine Theorems 2.1 and Lemma 4.6 to obtain the asymptotic
behavior of products of Toeplitz matrices. The case of only two matrices is
considered ﬁrst since it is simpler.


Theorem 4.4 Let Tn (f ) and Tn (g) be deﬁned as in (4.5) where f (λ) and
g(λ) are two bounded Riemann integrable functions. Deﬁne Cn (f ) and Cn (g)
as in (4.29) and let ρn,k be the eigenvalues of Tn (f )Tn (g)
     1.
                              Tn (f )Tn (g) ∼ Cn (f )Cn (g) = Cn (f g).                   (4.53)


                                       Tn (f )Tn (g) ∼ Tn (g)Tn (f ).                     (4.54)


                      
                      n−1                       2π
            lim n−1         ρsn,k = (2π)−1            [f (λ)g(λ)]s dλ s = 1, 2, . . . .   (4.55)
           n→∞                                  0
                      k=0

     2. If Tn (t) and Tn (g) are Hermitian, then for any F (x) continuous on
        [mf mg , Mf Mg ]
                              
                              n−1                            2π
                         −1                            −1
                 lim n
                n→∞
                                    F (ρn,k ) = (2π)               F [f (λ)g(λ)] dλ.      (4.56)
                              k=0                            0


     3.
                                         Tn (f )Tn (g) ∼ Tn (f g).                        (4.57)
     4. Let f1 (λ), .., fm (λ) be Riemann integrable. Then if the Cn (fi ) are de-
        ﬁned as in (4.29)
                                                                               
                              
                              m                       
                                                      m                  
                                                                         m
                                    Tn (fi ) ∼ Cn           fi ∼ Tn            fi .       (4.58)
                              i=1                     i=1                i=1
4.2. TOEPLITZ MATRICES                                                                                  43

                                                 
                                                 m
  5. If ρn,k are the eigenvalues of                    Tn (fi ), then for any positive integer s
                                                 i=1

                                                                 2π              s
                                    
                                    n−1                                
                                                                       m
                               −1
                     lim n
                     n→∞
                                          ρsn,k = (2π)−1                     fi (λ)        dλ        (4.59)
                                    k=0                          0     i=1


     If the Tn (fi ) are Hermitian, then the ρn,k are asymptotically real, i.e.,
     the imaginary part converges to a distribution at zero, so that
                                                                 2π                  s
                         
                         n−1                                           
                                                                       m
                    −1                       s             −1
            lim n              (Re[ρn,k ]) = (2π)                            fi (λ)        dλ.       (4.60)
           n→∞                                                   0
                         k=0                                           i=1


                                                  
                                                  n−1
                                     lim n−1
                                    n→∞
                                                         ([ρn,k ])2 = 0.                            (4.61)
                                                  k=0

Proof.

  1. Equation (4.53) follows from Lemmas 4.5 and 4.6 and Theorems 2.1
     and 3. Equation (4.54) follows from (4.53). Note that while Toeplitz
     matrices do not in general commute, asymptotically they do. Equation
     (4.55) follows from (4.53), Theorem 2.2, and Lemma 4.4.

  2. Proof follows from (4.53) and Theorem 2.4. Note that the eigenvalues
     of the product of two Hermitian matrices are real [3, p. 105].

  3. Applying Lemmas 4.5 and 4.6 and Theorem 2.1

             |Tn (f )Tn (g) − Tn (f g)| = |Tn (f )Tn (g) − Cn (f )Cn (g)
                                          +Cn (f )Cn (g) − Tn (f g)|
                                                                                                 .
                                                   ≤ |Tn (f )Tn (g) − Cn (f )Cn (g)|
                                                                             −→
                                                     +|Cn (f g) − Tn (f g)|n→∞   0

  4. Follows from repeated application of (4.53) and part (c).

  5. Equation (4.58) follows from (d) and Theorem 2.1. For the Hermitian
     case, however,
                 we cannot simply apply Theorem 2.4 since the eigenval-
     ues ρn,k of Tn (fi ) may not be real. We can show, however, that they
                 i
44                                                  CHAPTER 4. TOEPLITZ MATRICES

     are asymptotically real. Let ρn,k = αn,k + iβn,k where αn,k and βn,k are
     real. Then from Theorem 2.2 we have for any positive integer s

                       
                       n−1                                                   
                                                                             n−1
                  −1                            s                       −1          s
          lim n
         n→∞
                             (αn,k + iβn,k )         =      lim n
                                                           n→∞
                                                                                   ψn,k
                       k=0                                                   k=0
                                                                                                              ,   (4.62)
                                                                         2π  
                                                                               m
                                                                                                 s
                                                     = (2π)−1                             fi (λ)         dλ
                                                                         0          i=1
                                                                           
                                                                 
                                                                 m
     where ψn,k are the eigenvalues of Cn                               fi . From (2.14)
                                                                 i=1
                                                                                                2
                        
                        n−1                         
                                                    n−1                              m        
                   −1                        −1                                                 
               n              |ρn,k | = n
                                     2                     2
                                                          αn,k    2
                                                               + βn,k              ≤  Tn (fi ) .
                        k=0                         k=0                                   i=i

     From (4.57), Theorem 2.1 and Lemma 4.4
                            2                                             2
                  m                                              
                                                                     m          
              lim  Tn (fi )
                  
                                            =        lim 
                                                         Cn               fi 
             n→∞                                  n→∞ 
                        i=1                                          i=1
                                                                                                     .            (4.63)
                                                             2π                          2
                                                                         
                                                                         m
                                            = (2π)−1                           fi (λ)           dλ
                                                                0        i=1

     Subtracting (4.61) for s = 2 from (4.61) yields

                                                          
                                                          n−1
                                            lim n−1
                                           n→∞
                                                                 2
                                                                βn,k ≤ 0.
                                                          k=1

     Thus the distribution of the imaginary parts tends to the origin and
     hence                                            s
                                     
                                     n−1                             2π 
                                                                         m
                                −1
                        lim n
                       n→∞
                                            s
                                           αn,k = (2π)−1                            fi (λ)         dλ.
                                     k=0                            0         i=1


   Parts (d) and (e) are here proved as in Grenander and Szegö [1, pp.
105-106].
   We have developed theorems on the asymptotic behavior of eigenvalues,
inverses, and products of Toeplitz matrices. The basic method has been
to ﬁnd an asymptotically equivalent circulant matrix whose special simple
4.3. TOEPLITZ DETERMINANTS                                                        45

structure as developed in Chapter 3 could be directly related to the Toeplitz
matrices using the results of Chapter 2. We began with the ﬁnite order case
since the appropriate circulant matrix is there obvious and yields certain
desirable properties that suggest the corresponding circulant matrix in the
inﬁnite case. We have limited our consideration of the inﬁnite order case
to absolutely summable coeﬃcients or to bounded Riemann integrable func-
tions f (λ) for simplicity. The more general case of square summable tk or
bounded Lebesgue integrable f (λ) treated in Chapter 7 of [1] requires sig-
niﬁcantly more mathematical care but can be interpreted as an extension of
the approach taken here.


4.3     Toeplitz Determinants
The fundamental Toeplitz eigenvalue distribution theory has an interesting
application for characterizing the limiting behavior of determinants. Suppose
now that Tn (f ) is a sequence of Hermitian Toeplitz matrices such that that
f (λ) ≥ mf > 0. Let Cn = Cn (f ) denote the sequence of circulant matrices
constructed from f as in (4.26). Then from (4.28) the eigenvalues of Cn are
                                                        (
f (2πm/n) for m = 0, 1, . . . , n − 1 and hence detCn = n−1
                                                          m=0 f (2πm/n). This
in turn implies that
                            1     1              
                                               1 n−1         m
              ln (det(Cn )) n =     ln detCn =       ln f (2π ).
                                  n            n m=0         n
These sums are the Riemann approximations to the limiting integral, whence
                                                1
                                       1
                    lim ln (det(Cn )) n =
                   n→∞
                                                     ln f (2πλ) dλ.
                                                0
   Exponentiating, using the continuity of the logarithm for strictly positive
arguments, and changing the variables of integration yields
                                      1          1
                                                     ) 2π
                                                             ln f (λ) dλ.
                      lim (det(Cn )) = e
                                      n         2π       0
                      n→∞

This integral, the asymptotic equivalence of Cn and Tn (f ) (Lemma 4.6), and
Corollary 2.3 togther yield the following result ([1], p. 65)
Theorem 4.5 Let Tn (f ) be a sequence of Hermitian Toeplitz matrices such
that ln f (λ) is Riemann integrable and f (λ) ≥ mf > 0. Then
                                           1         1
                                                         ) 2π
                                                                ln f (λ) dλ.
                     lim (det(Tn (f ))) n = e 2π 0
                    n→∞
                                                                               (4.64)
46   CHAPTER 4. TOEPLITZ MATRICES
Chapter 5

Applications to Stochastic
Time Series

Toeplitz matrices arise quite naturally in the study of discrete time random
processes. Covariance matrices of weakly stationary processes are Toeplitz
and triangular Toeplitz matrices provide a matrix representation of causal
linear time invariant ﬁlters. As is well known and as we shall show, these
two types of Toeplitz matrices are intimately related. We shall take two
viewpoints in the ﬁrst section of this chapter section to show how they are
related. In the ﬁrst part we shall consider two common linear models of
random time series and study the asymptotic behavior of the covariance ma-
trix, its inverse and its eigenvalues. The well known equivalence of moving
average processes and weakly stationary processes will be pointed out. The
lesser known fact that we can deﬁne something like a power spectral density
for autoregressive processes even if they are nonstationary is discussed. In
the second part of the ﬁrst section we take the opposite tack — we start with
a Toeplitz covariance matrix and consider the asymptotic behavior of its tri-
angular factors. This simple result provides some insight into the asymptotic
behavior or system identiﬁcation algorithms and Wiener-Hopf factorization.
    The second section provides another application of the Toeplitz distri-
bution theorem to stationary random processes by deriving the Shannon
information rate of a stationary Gaussian random process.
    Let {Xk ; k ∈ I} be a discrete time random process. Generally we take
I = Z, the space of all integers, in which case we say that the process
is two-sided, or I = Z+ , the space of all nonnegative integers, in which
case we say that the process is one-sided. We will be interested in vector

                                     47
48    CHAPTER 5. APPLICATIONS TO STOCHASTIC TIME SERIES

representations of the process so we deﬁne the column vector (n−tuple) X n =
(X0 , X1 , . . . , Xn−1 )t , that is, X n is an n-dimensional column vector. The
mean vector is deﬁned by mn = E(X n ), which we usually assume is zero for
convenience. The n × n covariance matrix Rn = {rj,k } is deﬁned by

                      Rn = E[(X n − mn )(X n − mn )∗ ].                    (5.1)

This is the autocorrelation matrix when the mean vector is zero. Subscripts
will be dropped when they are clear from context. If the matrix Rn is
Toeplitz, say Rn = Tn (f ), then rk,j = rk−j and the process is said to be
                                                             ∞
                                                             
weakly stationary. In this case we can deﬁne f (λ) =              rk eikλ as the
                                                            k=−∞
power spectral density of the process. If the matrix Rn is not Toeplitz but
is asymptotically Toeplitz, i.e., Rn ∼ Tn (f ), then we say that the process is
asymptotically weakly stationary and once again deﬁne f (λ) as the power
spectral density. The latter situation arises, for example, if an otherwise sta-
tionary process is initialized with Xk = 0, k ≤ 0. This will cause a transient
and hence the process is strictly speaking nonstationary. The transient dies
out, however, and the statistics of the process approach those of a weakly
stationary process as n grows.
    The results derived herein are essentially trivial if one begins and deals
only with doubly inﬁnite matrices. As might be hoped the results for asymp-
totic behavior of ﬁnite matrices are consistent with this case. The problem is
of interest since one often has ﬁnite order equations and one wishes to know
the asymptotic behavior of solutions or one has some function deﬁned as a
limit of solutions of ﬁnite equations. These results are useful both for ﬁnding
theoretical limiting solutions and for ﬁnding reasonable approximations for
ﬁnite order solutions. So much for philosophy. We now proceed to investigate
the behavior of two common linear models. For simplicity we will assume
the process means are zero.


5.1      Moving Average Sources
By a linear model of a random process we mean a model wherein we pass
a zero mean, independent identically distributed (iid) sequence of random
variables Wk with variance σ 2 through a linear time invariant discrete time
ﬁltered to obtain the desired process. The process Wk is discrete time “white”
5.1. MOVING AVERAGE SOURCES                                                    49

noise. The most common such model is called a moving average process and
is deﬁned by the diﬀerence equation

                               
                               n                   
                                                   n
                        Un =         bk Wn−k =          bn−k Wk             (5.2)
                               k=0                k=0


                                 Un = 0; n < 0.

We assume that b0 = 1 with no loss of generality since otherwise we can
incorporate b0 into σ 2 . Note that (5.2) is a discrete time convolution, i.e.,
Un is the output of a ﬁlter with “impulse response” (actually Kronecker δ
response) bk and input Wk . We could be more general by allowing the ﬁlter
bk to be noncausal and hence act on future Wk ’s. We could also allow the
Wk ’s and Uk ’s to extend into the inﬁnite past rather than being initialized.
This would lead to replacing of (5.2) by

                             ∞
                                                  ∞
                                                   
                     Un =            bk Wn−k =           bn−k Wk .          (5.3)
                            k=−∞                  k=−∞

We will restrict ourselves to causal ﬁlters for simplicity and keep the initial
conditions since we are interested in limiting behavior. In addition, since
stationary distributions may not exist for some models it would be diﬃcult
to handle them unless we start at some ﬁxed time. For these reasons we take
(5.2) as the deﬁnition of a moving average.
    Since we will be studying the statistical behavior of Un as n gets arbitrarily
large, some assumption must be placed on the sequence bk to ensure that (5.2)
converges in the mean-squared sense. The weakest possible assumption that
will guarantee convergence of (5.2) is that
                                   ∞
                                   
                                         |bk |2 < ∞.                        (5.4)
                                 k=0


In keeping with the previous sections, however, we will make the stronger
assumption
                                     ∞
                                     
                                           |bk | < ∞.                       (5.5)
                                     k=0

As previously this will result in simpler mathematics.
50     CHAPTER 5. APPLICATIONS TO STOCHASTIC TIME SERIES

   Equation (5.2) can be rewritten as a matrix equation by deﬁning the
lower triangular Toeplitz matrix
                                                                           
                              1                                     0
                                                                           
                           b1           1                                  
                                                                           
                           b2           b1                                 
                                                                           
                     Bn = 
                           ...                 ..         ..               
                                                                            
                                                                                 (5.6)
                                        b2          .          .           
                                                                           
                                                                           
                                bn−1 . . .                 b2       b1 1
so that
                                      U n = Bn W n .                             (5.7)
If the ﬁlter bn were not causal, then Bn would not be triangular. If in addition
(5.3) held, i.e., we looked at the entire process at each time instant, then (5.7)
would require inﬁnite vectors and matrices as in Grenander and Rosenblatt
[12]. Since the covariance matrix of Wk is simply σ 2 In , where In is the n × n
identity matrix, we have for the covariance of Un :

                          = EU n (U n )∗ = EBn W n (W n )∗ Bn∗
                    (n)
                   RU
                                                                                 (5.8)
                          = σBn Bn∗
or, equivalently
                                          
                                          n−1
                          rk,j = σ 2            b−k b̄−j
                                          =0
                                                                        .        (5.9)
                                          min(k,j)
                                              
                                 = σ2                    b+(k−j) b̄
                                              =0

From (5.9) it is clear that rk,j is not Toeplitz because of the min(k, j) in the
sum. However, as we next show, as n → ∞ the upper limit becomes large
     (n)
and RU becomes asymptotically Toeplitz. If we deﬁne
                                              ∞
                                              
                                 b(λ) =             bk eikλ                     (5.10)
                                              k=0

then
                                       Bn = Tn (b)                              (5.11)
so that
                             RU = σ 2 Tn (b)Tn (b)∗ .
                                (n)
                                                                                (5.12)
5.2. AUTOREGRESSIVE PROCESSES                                                                51

We can now apply the results of the previous sections to obtain the following
theorem.


Theorem 5.1 Let Un be a moving average process with covariance matrix
                                      (n)
RUn . Let ρn,k be the eigenvalues of RU . Then
                              (n)
                            RU ∼ σ 2 Tn (|b|2 ) = Tn (σ 2 |b|2 )                          (5.13)
so that Un is asymptotically stationary. If m ≤ |b(γ)|2 ≤ M and F (x) is any
continuous function on [m, M ], then
                           
                           n−1                               2π
                      −1                               −1
              lim n
             n→∞
                                 F (ρn,k ) = (2π)                  F (σ 2 |b(λ)|2 ) dλ.   (5.14)
                           k=0                               0


If |b(λ)|2 ≥ m > 0, then
                                    (n) −1
                                 RU            ∼ σ −2 Tn (1/|b|2 ).                       (5.15)



Proof.
   (Theorems 4.2-4.4 and 2.4.)
   If the process Un had been initiated with its stationary distribution then
we would have had exactly
                                         (n)
                                       RU = σ 2 Tn (|b|2 ).
                                             (n) −1
More knowledge of the inverse RU        can be gained from Theorem 4.3, e.g.,
circulant approximations. Note that the spectral density of the moving av-
erage process is σ 2 |b(λ)|2 and that sums of functions of eigenvalues tend to
an integral of a function of the spectral density. In eﬀect the spectral density
determines the asymptotic density function for the eigenvalues of Rn and Tn .


5.2      Autoregressive Processes
Let Wk be as previously deﬁned, then an autoregressive process Xn is deﬁned
by
                                 
                                 n
                   Xn = −              ak Xn−k + Wk                n = 0, 1, . . .
                                 k=1
52    CHAPTER 5. APPLICATIONS TO STOCHASTIC TIME SERIES

                           Xn = 0                           n < 0.             (5.16)
Autoregressive process include nonstationary processes such as the Wiener
process. Equation (5.16) can be rewritten as a vector equation by deﬁning
the lower triangular matrix.
                                                                     
                                 1
                               
                                a1          1                       0 
                                                                       
                                                                     
                                            a1 1                     
                     An = 
                                               .. ..
                                                                      
                                                                              (5.17)
                                                 .   .               
                                                                     
                                                                     
                                                                     
                                   an−1                        a1 1

so that
                                       An X n = W n .
We have
                                    RW = An RX A∗n
                                       (n)           (n)
                                                                               (5.18)
since det An = 1 = 0, An is nonsingular so that

                                   RX = σ 2 A−1 −1∗
                                      (n)
                                             n An                              (5.19)

or
                                   (RX )−1 = σ 2 A∗n An
                                       (n)
                                                                               (5.20)
or equivalently, if (RX )−1 = {tk,j } then
                     (n)


                                                n−max(k,j)
                         
                         n                            
                tk,j =         ām−k am−j =                    am am+(k−j) .
                         m=0                          m=0

Unlike the moving average process, we have that the inverse covariance ma-
trix is the product of Toeplitz triangular matrices. Deﬁning
                                               ∞
                                               
                                      a(λ) =         ak eikλ                   (5.21)
                                               k=0

we have that
                           (RX )−1 = σ −2 Tn (a)∗ Tn (a)
                                (n)
                                                                               (5.22)
and hence the following theorem.
5.2. AUTOREGRESSIVE PROCESSES                                                             53

Theorem 5.2 Let Xn be an autoregressive process with covariance matrix
 (n)
RX with eigenvalues ρn,k . Then

                                  (RX )−1 ∼ σ −2 Tn (|a|2 ).
                                     (n)
                                                                                       (5.23)

If m ≤ |a(λ)|2 ≤ m , then for any function F (x) on [m , M  ] we have

                         
                         n−1                              2π
               lim n−1
              n→∞
                                F (1/ρn,k ) = (2π)−1            F (σ 2 |a(λ)|2 ) dλ,   (5.24)
                          k=0                             0


where 1/ρn,k are the eigenvalues of (RX )−1 . If |a(λ)|2 ≥ m > 0, then
                                               (n)


                                      (n)
                                    RX ∼ σ 2 Tn (1/|a|2 )                              (5.25)

so that the process is asymptotically stationary.



Proof.
     (Theorems 5.1.)
     Note that if |a(λ)|2 > 0, then 1/|a(λ)|2 is the spectral density of Xn . If
                             (n)
|a(λ)|2 has a zero, then RX may not be even asymptotically Toeplitz and
hence Xn may not be asymptotically stationary (since 1/|a(λ)|2 may not be
integrable) so that strictly speaking xk will not have a spectral density. It is
often convenient, however, to deﬁne σ 2 /|a(λ)|2 as the spectral density and it
often is useful for studying the eigenvalue distribution of Rn . We can relate
                                    (n)
σ 2 /|a(λ)|2 to the eigenvalues of RX even in this case by using Theorem 4.3
part 4.


Corollary 5.1 If Xk is an autoregressive process and ρn,k are the eigenvalues
of RX , then for any ﬁnite θ and any function F (x) continuous on [1/m , θ]
    (n)



              
              n−1                                 2π
    lim n−1
   n→∞
                    F [min(ρn,k , θ)] = (2π)−1           F [min(1/|a(γ)|2 , θ)] dλ.    (5.26)
              k=0                                    0
54    CHAPTER 5. APPLICATIONS TO STOCHASTIC TIME SERIES

Proof.
    (Theorem 5.2 and Theorem 4.3.)
    If we consider two models of a random process to be asymptotically equiv-
alent if their covariances are asymptotically equivalent, then from Theorems
5.1d and 5.2 we have the following corollary.


Corollary 5.2 Consider the moving average process deﬁned by

                                 U n = Tn (b)W n

and the autoregressive process deﬁned by

                                Tn (a)X n = W n .

Then the processes Un and Xn are asymptotically equivalent if

                                 a(λ) = 1/b(λ)

and M ≥ a(λ) ≥ m > 0 so that 1/b(λ) is integrable.



Proof.
  (Theorem 4.3 and Theorem 4.5.)

                                = σ 2 Tn (a)−1 Tn−1 (a)∗
                          (n)
                        RX

                                ∼ σ 2 Tn (1/a)Tn (1/a)∗

                                ∼ σ 2 Tn (1/a)∗ Tn (1/a).                (5.27)

Comparison of (5.27) with (5.12) completes the proof.
  The methods above can also easily be applied to study the mixed autoregressive-
moving average linear models [2].


5.3      Factorization
As a ﬁnal example we consider the problem of the asymptotic behavior of
triangular factors of a sequence of Hermitian covariance matrices Tn (f ). It is
5.3. FACTORIZATION                                                                  55

well known that any such matrix can be factored into the product of a lower
triangular matrix and its conjugate transpose [12, p. 37], in particular

                                   Tn (f ) = {tk,j } = Bn Bn∗ ,                 (5.28)

where Bn is a lower triangular matrix with entries

                      bk,j = {(det Tk ) det(Tk−1 )}−1/2 γ(j, k),
                       (n)
                                                                                (5.29)

where γ(j, k) is the determinant of the matrix Tk with the right hand col-
umn replaced by (tj,0 , tj,1 , . . . , tj,k−1 )t . Note in particular that the diagonal
elements are given by
                             (n)
                         bk,k = {(det Tk )/(det Tk−1 )}1/2 .                    (5.30)

Equation (5.29) is the result of a Gaussian elimination of a Gram-Schmidt
procedure. The factorization of Tn allows the construction of a linear model
of a random process and is useful in system identiﬁcation and other recursive
procedures. Our question is how Bn behaves for large n; speciﬁcally is Bn
asymptotically Toeplitz?
    Assume that f (λ) ≥ m > 0. Then ln f (λ) is integrable and we can perform
a Wiener-Hopf factorization of f (λ), i.e.,

                                     f (λ) = σ 2 |b(λ)|2

                                     b̄(λ) = b(−λ)
                                                 ∞
                                                               .               (5.31)
                                                          ikλ
                                     b(λ) =            bk e
                                                 k=0


                                        b0 = 1

From (5.28) and Theorem 4.4 we have

                         Bn Bn∗ = Tn (f ) ∼ Tn (σb)Tn (σb)∗ .                   (5.32)

We wish to show that (5.32) implies that

                                         Bn ∼ Tn (σb).                          (5.33)
56      CHAPTER 5. APPLICATIONS TO STOCHASTIC TIME SERIES

Proof.
    Since det Tn (σb) = σ n = 0, Tn (σb) is invertible. Likewise, since det Bn =
[det Tn (f )]1/2 we have from Theorem 4.3 part 1 that det Tn (f ) = 0 so that
Bn is invertible. Thus from Theorem 2.1 (e) and (5.32) we have

                      Tn−1 Bn = [Bn−1 Tn ]−1 ∼ Tn∗ Bn∗−1 = [Bn−1 Tn ]∗ .              (5.34)

Since Bn and Tn are both lower triangular matrices, so is Bn−1 and hence
Bn Tn and [Bn−1 Tn ]−1 . Thus (5.34) states that a lower triangular matrix is
asymptotically equivalent to an upper triangular matrix. This is only possible
if both matrices are asymptotically equivalent to a diagonal matrix, say Gn =
{gk,k δk,j }. Furthermore from (5.34) we have Gn ∼ G∗−1
   (n)
                                                      n
                                                   
                                            (n)
                                         |gk,k |2 δk,j ∼ In .                         (5.35)

Since Tn (σb) is lower triangular with main diagonal element σ, Tn (σb)−1
is lower triangular with all its main diagonal elements equal to 1/σ even
though the matrix Tn (σb)−1 is not Toeplitz. Thus gk,k = bk,k /σ. Since Tn (f )
                                                       (n)    (n)

is Hermitian, bk,k is real so that taking the trace in (5.35) yields

                                                  
                                                  n−1       
                                                         (n) 2
                                   lim σ −2 n−1
                                  n→∞
                                                        bk,k     = 1.                 (5.36)
                                                  k=0

   From (5.30) and Corollary 2.3, and the fact that Tn (σb) is triangular we
have that
                    
                    n−1
     lim σ −1 n−1         bk,k = σ −1 n→∞
                           (n)
                                       lim {(det Tn (f ))/(det Tn−1 (f ))}1/2
     n→∞
                    k=0

                                                                                            .
                                 = σ −1 n→∞
                                         lim {det Tn (f )}1/2n σ −1 n→∞
                                                                     lim {det Tn (σb)}1/n

                                 = σ −1 · σ = 1
                                                                                      (5.37)
Combining (5.36) and (5.37) yields

                                      lim |Bn−1 Tn − In | = 0.
                                     n→∞
                                                                                      (5.38)

Applying Theorem 2.1 yields (5.33).
5.4. DIFFERENTIAL ENTROPY RATE OF GAUSSIAN PROCESSES57

   Since the only real requirements for the proof were the existence of the
Wiener-Hopf factorization and the limiting behavior of the determinant, this
result could easily be extended to the more general case that ln f (λ) is in-
tegrable. The theorem can also be derived as a special case of more general
results of Baxter [8] and is similar to a result of Rissanen [11].


5.4      Diﬀerential Entropy Rate of Gaussian Pro-
         cesses
As a ﬁnal application of the Toeplitz eigenvalue distribution theorem, we
consider a property of a random process that arises in Shannon information
theory. Given a random process {Xn } for which a probability density func-
tion fX n (xn ) is for the random vector X n = (X0 , X1 , . . . , Xn−1 ) deﬁned for
all positive integers n, the Shannon diﬀerential entropy h(X n ) is deﬁned by
the integral                     
                     h(X n ) = −          fX n (xn ) log fX n (xn ) dxn

and the diﬀerential entropy rate is deﬁned by the limit
                                          1
                                       lim h(X n )
                               h(X) = n→∞
                                          n
if the limit exists. (See, for example, Cover and Thomas[14].) The logarithm
is usually taken as base 2 and the units are bits. We will use the Toeplitz
theorem to evaluate the diﬀerential entropy rate of a stationary Gaussian
random process.
    A stationary zero mean Gaussian random process is comletely described
by its mean correlation function RX (k, m) = RX (k − m) = E[(Xk − m)(Xk −
m)] or, equivalently, by its power spectral density function
                                          ∞
                                          
                            S(f ) =               RX (n)e−2πinf ,
                                      n=−∞


the Fourier transform of the covariance function. For a ﬁxed positive integer
n, the probability density function is
                                      1                                  −1
                                                         e− 2 (x −m ) Rn (x −m ) ,
                                                           1   n   n t        n   n
             fX n (xn ) =
                            (2π)n/2 det(R     n   )1/2
58    CHAPTER 5. APPLICATIONS TO STOCHASTIC TIME SERIES

where Rn is the n × n covariance matrix with entries RX (k, m), k, m =
0, 1, . . . , n − 1. A straightforward multidimensional integration using the
properties of Gaussian random vectors yields the diﬀerential entropy
                                    1
                        h(X n ) =     log(2πe)n detRn .
                                    2
    If we now identify the the covariance matrix Rn as the Toeplitz matrix
generated by the power spectral density, Tn (S), then from Theorem 4.5 we
have immediately that
                                    1             2
                            h(X) = log(2πe)σ∞                           (5.39)
                                    2
where
                            2     1  2π
                          σ∞  =          ln S(f ) df.                   (5.40)
                                 2π 0
    The Toeplitz distribution theorems have also found application in more
complicated information theoretic evaluations, including the channel capacity
of Gaussian channels [17, 18] and the rate-distortion functions of autoregres-
sive sources [9].
Bibliography

 [1] U. Grenander and G. Szegö, Toeplitz Forms and Their Applications,
     University of Calif. Press, Berkeley and Los Angeles, 1958.

 [2] H. Widom, “Toeplitz Matrices,” in Studies in Real and Complex Anal-
     ysis, edited by I.I. Hirschmann, Jr., MAA Studies in Mathematics,
     Prentice-Hall, Englewood Cliﬀs, NJ, 1965.

 [3] P. Lancaster, Theory of Matrices, Academic Press, NY, 1969.

 [4] W. Rudin, Principles of Mathematical Analysis, McGraw-Hill, NY,
     1964.

 [5] R.M. Gray, “On Unbounded Toeplitz Matrices and Nonstationary Time
     Series with an Application to Information Theory,” Information and
     Control, 24, pp. 181–196, 1974.

 [6] C.L. Rino, “The Inversion of Covariance Matrices by Finite Fourier
     Transforms,” IEEE Trans. on Info. Theory, IT-16, No. 2, March 1970,
     pp. 230–232.

 [7] G. Baxter, “A Norm Inequality for a ‘Finite-Section’ Wiener-Hopf Equa-
     tion,” Illinois J. Math., 1962, pp. 97–103.

 [8] G. Baxter, “An Asymptotic Result for the Finite Predictor,” Math.
     Scand., 10, pp. 137–144, 1962.

 [9] R.M. Gray, “Information Rates of Autoregressive Processes,” IEEE
     Trans. on Info. Theory, IT-16, No. 4, July 1970, pp. 412–421.

[10] F.R. Gantmacher, The Theory of Matrices, Chelsea Publishing Co., NY
     1960.

                                    59
60                                                         BIBLIOGRAPHY

[11] J. Rissanen and L. Barbosa, “Properties of Inﬁnite Covariance Matrices
     and Stability of Optimum Predictors,” Information Sciences, 1, 1969,
     pp. 221–236.

[12] U. Grenander and M. Rosenblatt, Statistical Analysis of Stationary
     Time Series, Wiley and Sons, NY, 1966, Chapter 1.

[13] J. Pearl, “On Coding and Filtering Stationary Signals by Discrete
     Fourier Transform,” IEEE Trans. on Info. Theory, IT-19, pp. 229–232,
     1973.

[14] T. A. Cover and J. A. Thomas, Elements of Information Theory, Wiley,
     New York, 1991.

[15] A. Böttcher and B. Silbermann, Introduction to Large Truncated Toeplitz
     Matrices, Springer, New York, 1999.

[16] R. M. Gray, “On the asymptotic eigenvalue distribvution of Toeplitz ma-
     trices,” IEEE Transactions on Information Theory, Vol. 18, November
     1972, pp. 725–730.

[17] B.S. Tsybakov, “On the transmission capacity of a discrete-time Gaus-
     sian channel with ﬁlter,” (in Russion),Probl. Peredach. Inform., Vol 6,
     pp. 78–82, 1970.

[18] B.S. Tsybakov, “Transmission capacity of memoryless Gaussian vector
     channels,” (in Russion),Probl. Peredach. Inform., Vol 1, pp. 26–40, 1965.

[19] P. J. Davis, Circulant Matrices, Wiley-Interscience, NY, 1979.



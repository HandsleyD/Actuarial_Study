---
normalized_id: shared-pdf-reference-computational-problems-and-methods
exam_code: SHARED
material_scope: computational problems and methods.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Computational Problems and Methods.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-computational-problems-and-methods

Chapter 12


COMPUTATIONAL PROBLEMS AND METHODS
RICHARD       E. QUANDT*

Princeton University




Contents

1.   Introduction                                                                                                  701
2.   Matrix methods                                                                                                702
     2.1.    Methods      for solving ,4a = c                                                                      703
     2.2.    Singular     value decomposition                                                                      706
     2.3.    Sparse matrix methods                                                                                 707
3.   Common functions requiring                          optimization                                              707
     3. I. Likelihood functions                                                                                    707
     3.2.    Generalized      distance      functions                                                              709
     3.3.    Functions     in optimal       control                                                                710
4.   Algorithms for optimizing                        functions     of many variables                              710
     4. I. Introduction                                                                                            710
     4.2.    Methods      employing        no derivatives                                                          712
     4.3.    Methods      employing        first and second derivatives                                            717
     4.4.    Methods      employing        first derivatives                                                       721
5.   Special purpose             algorithms           and simplifications                                          724
     5.1.    Jacobi and Gauss-Seidel             methods                                                           724
     5.2.    Parke’s Algorithm         A                                                                           727
     5.3.    The EM algorithm                                                                                      728
     5.4.    Simplified     Jacobian       computation                                                             729
6.   Further      aspects of algorithms                                                                            730
     6.1.    Computation        of derivatives                                                                     731
     6.2.    Linear searches                                                                                       735
     6.3.    Stopping     criteria                                                                                 737
     6.4.    Multiple optima                                                                                       738
7.   Particular         problems         in optimization                                                           740
     7.1.    Smoothing      of non-differentiable           functions                                              740


  *I am indebted to David A. Belsley, Angus Deaton,                       Ray C. Fair, Stephen   M. Goldfeld,   Jerry A.
Hausman. and Mark Plant for constructive comments.


Handbook of Econometrics, Volume I, Edited by Z. Griliches and M.D. Intriligator
0 North-Holland Publishing Company, 1983
700                                                                              R. E. Quad



      7.2.   Unbounded      likelihood   functions      and other false optima          742
      7.3.   Constraints   on the parameters                                            744
8.    Numerical integration                                                             747
      8. I. Monte Carlo integration                                                     749
      8.2.   Polynomial    approximations                                               750
      8.3.   Evaluation    of multivariate     normal     integrals                     751
      8.4.   Special cases of the multivariate          normal    integral              753
9.    The generation          of random        numbers                                  755
      9.1.   The generation     of uniformly     distributed      variables             756
      9.2.   The generation     of normally     distributed      variables              757
References                                                                              760
Ch. 12: Computational Problems                                                   701




1.   Introduction

The very substantial growth in econometric and statistical theory in the last 30
years has been at least matched by the explosive growth of computer technology
and computational methods and algorithms. For the average researcher 30 years
ago it was a problem of some moment to need the inverse of a matrix of relatively
small size, say 5 X 5. Many procedures that are routinely applied today were not
even attempted, even if they had been thought of.
   The impressive advances of hardware, software, and algorithmic technology
since that time have significantly advanced the state of econometrics; they have,
however, not been an unmixed blessing. On the one hand, new problems have
emerged which can trap the unwary. On the other hand, there has occurred an
increase in the capital/output     ratio in research. It is difficult to escape the
conclusion that, as a consequence, the average researcher today spends a higher
fraction of his time in data management, computer-program writing and adapta-
tion, in interpretation of masses of computed output and a lesser fraction of his
time in reasoning about the underlying problem than did his predecessor.
   The purpose of this chapter is to highlight some of the most important
computational methods and problems of today. The emphasis is on algorithms
and general procedures for solving problems and not on detailed implementation
in concrete computer programs or systems. Hence, names familiar to many such
as TSP, ESP, GREMLIN, TROLL, AUTOREG, SHAZAAM, etc. will not be
discussed. For some classical approaches to numerical analysis the reader is
referred to Hildebrand (1956). For detailed computer implementation              see
Carnahan, Luther and Wilkes (1969).
   Section 2 is devoted to certain matrix methods involved in estimating the
parameters of single and simultaneous equation models. Sections 3-7 cover
various aspects of numerical optimization. These methods become relevant
whenever the first-order conditions for a maximum are not linear in the parame-
ters to be estimated. Section 3 gives a survey of the typical functions that are
optimized. Section 4 discusses the basic theory of optimization. Section 5 covers
special purpose algorithms and simplifications useful in econometrics; Section 6
considers some further aspects of algorithms. Section 7 deals with very particular
difficulties encountered only in problems of certain types. Section 8 is devoted to
numerical integration and Section 9 to random number generation.
   The list is obviously incomplete and problems that are treated are covered only
in broad outlines. An extensive bibliography refers the interested reader to many
extensions.
IQ2                                                                     R. E. Quandt


2.    Matrix methods

As is well known, many commonly used estimators of the coefficients of econo-
metric equations are the solutions to equations of the form

      Ap=C,                                                                   (2.1)
where b represents the k-element coefficient vector estimated, A is a k x k matrix
(usually non-singular), c a k-element vector, and where A and c depend only on
the data. Some examples are discussed below. For the pertinent econometric
theory see Schmidt (1976), Theil(1971), and for computational aspects see Belsley
(1974).
(1)   Ordinary Least Squares. If the model is

      Y=   xp + u,                                                            (2.2)
where Y and u are n X 1 and X is n X k (and usually of rank k), then A = X’X and
c = X’Y.
   If linear restrictions are imposed on /? by




where R is p X k and of rank p, then A = X’X as before and c = X’Y +
R’( R( X’X)-‘R’)-‘(r - R( X’X)-‘X’Y). If the ridge estimator [Schmidt (1976)]
is required instead, c = X’Y as before but A = X’X + ~1, where s is a constant.
(2)   k-Class. Consider a full system of simultaneous equations

      YT+XB=U,

where Y and U are n X g, r is g X g and non-singular, X is n X k, and B is k x g.
To discuss single equations estimators consider the first equation of the system
written as




where Z, = [Y, X,], 8’= (y’ P’), and u.~ is the first column of U. Then the
following k-class estimators for 6 are immediate from A6 = c. Let A be given by

                            Y;X,
                           xix, 1 ’
Ch. 12: Computational Problems                                                                             703


where V, = Y, - X( X’X) - ‘X’Y, and c by

       c= [ ‘YP-$vY].


If k, = k, = 1, two-stage least squares results. If k, = k, = the smallest eigenvalue
h of



where Yp = [y Y,], we obtain limited information maximum likelihood esti-
mates. If k, = k, = 1 +(k - k* - g - 1)/n, where k* is the number of columns in
X,, we obtain Nagar’s 0( n - ’) unbiased estimator. Other estimators are obtained
by choosing k, and k, to be unequal.
   If W is a (g, + k*) x n matrix of instruments uncorrelated with u . , , instrumen-
tal variables estimators (as are the above) are given in general by setting A = W’Z
and c = w’y, which also includes the indirect least squares estimator.
(3)    Three-stage least squares. Write the full system as

       y; = zisi + ui,         i=l ,*a*,g,

and define y’ = ( y;, . . . ,yi), Z = diag( Zi) a block-diagonal matrix with Zi in the
ith position, bi as the two-stage least squares estimate of ai, and S the square
matrix with (ij)th element Sij = ( yi - Z$,>‘( yj - zjdj)/n. Then if A = Z’(S - ‘8
X( X’X) - ‘X’)Z and c = Z’( S - ’8 X( X’X) - ‘X’) y, we have the three-stage least
squares estimator.


2.1.    Methods for solving Ab = c

The computation of each of the above estimators, as well as of many others,
requires the inverse of A. Error in the inversion process accumulates as a result of
rounding error in each computation. Rounding error, in turn, is due to the fact
that the representation of numbers in a computer occupies a fixed number of
places. In a binary computer floating point numbers are of the form (*a)(2’),
where a, the mantissa, and b, the characteristic, are binary integers stored in the
computer and where the binary point “ .” and “2” are implied. The extent to
which rounding error may affect the results is indicated by the condition number
K, which is the ratio   of absolute value of the largest eigenvalue of A to the
absolute value of the smallest [Golub (1969) and Jennings (1980)].’ Various

   ‘Since the matrix A is positive definite in all our examples,   we may dispense   with the absolute   value
in the definition of the condition number.
704                                                                      R. E. Quandt


illustrative examples are provided by Golub (1969) and Wampler (1980). Con-
sider as an example a case of OLS in which A = X’X and assume




                          1
             1   1   1   1
             E   0   0   0
      X=0        E   0   0.
             0   0   E   0
            /0   0   0   E

The eigenvalues of A are 4+ s*, e*, E*, and E*. If E < 2-‘I*, where t is the number
of binary digits in the mantissa of a floating point number, A will be a matrix
with unity for each element and hence of rank 1 and not invertible. In general, the
bound for the relative or proportionate error in the solution of an OLS problem is
qrc, where n measures machine precision (e.g. 10 -6). Some principal matrix
methods for controlling rounding error are discussed briefly below; for detailed
application to econometric estimators see Belsley (1974), Golub (1969), and
Wampler (1980). We illustrate the methods with reference to the ordinary
regression model.
(1) Scaling. If the model is given by (2.2), it can also be written as Y = Za + U,
where Z = XB and B is a suitable diagonal matrix. The estimate for (Y is
ai = (Z’Z) - ‘Z’Y and fi = Bb. Choosing bjj as [l/c:= ,x;]‘/* generally improves
the conditioning of Z’Z.

(2) Cholesky factorization [Golub (1969), Klema (1973)]. If A is a positive
definite matrix of order k, A may be factored so that

      A= R’R,                                                                  (2.3)

where R is upper triangular. Error bounds for the factorization can be computed.
Replacing A by R’R:



and the solution proceeds in two steps: we first solve R’c = c which is a triangular
system and is solved easily; we next solve RP = t which is another triangular
system. Cholesky factorizations for the k x k matrix A can be obtained in two
ways [ Golub ( 1969)] :
(a)   Define
Ch. 12: Computational Problems                                                              705


and then let

                                        r/2
                                              ,        i= 2,...,k,




(b)   Define u)~ = aij for all i, j. Then set

        r,,=       (aip)r”,                 p=l,...,      k,

        rpj = a;j /rppY                  p=l      ,..., k, j> k,
                          aCaP.
      a;+‘=+-                 PI   PI
                                                  p=l    ,..., k,    i=p+l,...,   k, jai.
                              G         ’



The decompositions are themselves subject to rounding error and there is no
guarantee that (b) can be completed even if A is positive definite.

(3) The QR decomposition [Belsley (1974), Golub (1969) and Jennings (1980)].
For all n x k matrices X there exists an n x n orthogonal matrix Q and a k X k
upper triangular matrix R, such that


      QX=          “ol =R.
               [      1

Partitioning Q’= [Q,                    Q,] it follows that

      X= Q,R, = Q’R.

The solution of Ab = c in the ordinary least squares case is then particularly easy
since R;Q;Q,R,B = R;Q;Y or R,b = Q;Y, which is triangular system. The relative
error of its solution is small if the regression residuals are small and is given by
T/,lC”2+ TJ2K(Y-    x&Y-     x,)/j&      where n, and n2 are functions of machine
precision and K is the condition number of X’X [Jennings (1980)]. Moreover,
X’X= R’R and R is a Cholesky factorization of X’X. Two alternative methods
are often employed to obtain the QR decomposition.
(a) The Householder transformation. Let P = I - 2vo’, where 2) is a column
vector and where ~‘0 = 1. Then P is a Householder transformation. Define
X(r) = X and let X(P+ 1) = p(P)X(P), where P(P)= Z-2vpvi, v$, = 1, and vp is
706                                                                       R. E. Quandt


chosen to make X$‘+‘)=O for j=p+l,...,n.                 Then R=X(“+‘)      and Q=
Pck)Pck - I). . . P(l). For an application of Householder transformations to estimat-
ing regression coefficients subject to linear restrictions see Dent (1980).
(b) Gram-Schmidt     orthogonalization. Two such procedures are in use: the
classical and the modified methods. The former can be found in numerous
algebra texts [Hoffman and Kunze (1961)]. The latter is preferred from the
computational point of view, although in the absence of rounding errors they
produce identical answers [Golub (1969)]. For the modified method replace Q’R
by PS, where S has unity on the diagonal and P’P = diagonal. Now define

       x(p)=   (p ,,.._,pp_,,xy ,-.., .zq

where pi is the ith column of P and x(P) are columns defined below. Then at the
pth step we let pp = xp) and set dp = p;pp, spr = p;x!P)/d,,  and x!*+‘) = x!P) -
sprpp for p + 12 r s k.
   Some recent experimental results (Wampler (1980)) indicate that the QR
method with either the Householder transformation or the modified Gram-
Schmidt orthogonalization gives more accurate results than the Cholesky factori-
zation. For application see Belsley (1974), Dent (1977), and Jennings (1980).


2.2.    Singular value decomposition [Belsley (1974) and Chambers (1977)]

Any n x k matrix X can be decomposed as



where the columns of U and V are orthonormal eigenvectors of XX’ and of X’X,
respectively, and where 2 is diagonal and contains the square roots (positive) of
the eigenvalues of X’X and XX’. If X has rank r < k, then (2.4) can be written
with U as n X r, E as r X r, and V’as r X k.
   The singular value decomposition can be employed to compute the pseudoin-
verse of any matrix X, defined as X+ satisfying (a) XX+ X = X, (b) X+ XX+ = X+,
(c) (XX+)’ = XX+, and (d) ( X+ X)’ = X+ X. By substituting in (a) through (c) it
can be shown that X+ = VP u’, where 2’ is the same as 2 except that its
diagonal elements are the reciprocals of the non-zero diagonal elements of 2.
   Consider a regression model Y = Xf3 + u and the normal equations X’XB = X’Y.
Assume a case of exact multicollinearity so that the rank r of X satisfies r < k.
Replacing X by its singular value decomposition leads to

       v-v/3= x+Y.                                                              (2.5)
Ch. 12: Computationul Problems                                                  101


Substitution of b = Xf Y in the transformed normal equations (2.5) shows that
they remain satisfied and that X+ Y is a least squares estimate. It can be shown
further that B has shortest length in the set of all least squares estimates. The
singular value decomposition thus permits the computation of the shortest least
squares coefficient vector in the presence of multicollinearity. It can also be
employed for the computation, via the pseudoinverse, of least squares estimates
subject to linear restrictions on the coefficients [Gallant and Gerig (1980)]. For
the calculation of the singular value decomposition see Golub (1969) and
Bussinger and Golub (1969).


2.3.    Sparse matrix methods

In some applications, such as optimal control problems or in seemingly unrelated
regression models, there may occur matrices in which the non-zero elements are a
small fraction of the total number of elements. Computational efficiency can be
gained by not storing and manipulating the matrices in their full size but only
their non-zero elements and identification as to the location of these. The
resulting techniques are called sparse matrix techniques [see Drud (1977/78) and
Belsley (1980)]. Their use can result in dramatic reductions in computer time. Fair
(1976) reports that the time required to evaluate the Jacobian in full-information
maximum likelihood (see Section 3) was reduced by a factor of 28 when sparse
methods were employed.


3.     Common functions requiring optimization

The computation of econometric estimates characteristically requires the maximi-
zation or minimization of some function. Some of these possess first-order
conditions that are linear in the parameters to be estimated, and the matrix
techniques discussed in Section 2 have wide applicability in these cases. In many
other instances, however, the first-order conditions for an optimum cannot be
solved in closed form. In these cases one must either solve the equations
representing the first-order conditions by numerical methods or apply numerical
methods to the direct optimization of the function in question. The present
section briefly outlines some of the principal types of objective functions.


3.1.    Likelihood functions

Specific assumptions about the distribution of error terms characteristically
permit the derivation of the likelihood function. Maximum likelihood estimates
are desired because of their favorable asymptotic properties.
708                                                                            R. E. Quandt


   One of the most common models requiring numerical maximization for the
attainment of maximum likelihood estimates is the linear simultaneous equations
model

      Yr+   XB=U,                                                                    (3.1)
where Y is an n X g matrix of endogenous variables, X an n X k matrix of
predetermined variables, U an n X g matrix of error terms, r a g X g non-singular
matrix, and B a k X g matrix of coefficients. If it is assumed that the rows of U
are distributed identically and independently as N(0, z), where I: is a g X g
positive definite matrix, the likelihood function is

      L = (2a)_ g”‘21E(-‘/2(absI~j)“exp{-~tr[E-‘(Yr+               XB)‘(Yr+XB)]},

                                                                                     (3.2)
where I . I denotes taking the determinant and where lrl is the Jacobian of the
transformation U + Y [Schmidt (1976)]. The logarithm of the condensed likeli-
hood function is

      log,L = constant-        :loglsl   + tlog[ lrl12,                              (3.3)

where S has elements sjk = cy_ ,tiijCik and where aij is the ith residual in thejth
equation. If the system is non-linear and is given by

      .Zj(.Yi,xi,P> =   uij9        i=l ,*.., n; j=l   ,.**, g,                      (3.4)

eq. (3.3) becomes

      logL=constant-510glsl++                5 1og[15,1]2,                           (3.5)
                                             i=l

where 4. is the Jacobian matrix corresponding to the i th observation with typical
element Jik, = &+/ilyi,.    For a modification of (3.5) to perform robust estima-
tion, see Fair (1974a). It should be noted that most linear simultaneous equations
estimators that superficially might not be thought to be related to the maximiza-
tion of (3.5) are in fact approximate solutions to the first-order conditions
corresponding to (3.5) [Hendry (1976)].
   Another very common example is provided by the ordinary regression model
with error terms that obey a first-order Markov process ui = pui _ , + q, E -
N(0, a2Z). The log likelihood is

      log L = constant - flog u 2 +ilog(l-d)--$(Y-                XP)‘R’R(Y-     xp>,

                                                                                      (3.6)
Ch. 12: Computational Problems                                                    709


where R is the matrix


              I   (1-p2)“2       0
                                0 ...
                                 1
                                0 ...
                                                      0
                                                      0
                                                             0
                                                             0
                    -P
       R=
                     0     -p   1 ...                 0      0
                  ...................                . .. . . .
                     0      0   0 ...                -P      1

Additional specific likelihood functions are discussed in subsequent sections as
necessary.


3.2.     Generalized distance functions

A number of estimates are obtained by minimizing a suitable distance function. A
simple example is the non-linear least squares estimator of the parameters of

       .Yi=f(xj>B)+ui>                                                          (3.7)

obtained by minimizing


       DCl~,(~i-f(xi~P))‘*


More complicated examples arise in simultaneous equation estimation.
 If eqs. (3.4) are in reduced form,

       Yj=gj(xj,Pj)+ojP              j=l   ,***,g,                              (3.8)

where y/ = ( y, j,. . . ,ynj) and where xi and pj are the predetermined variables and
coefficients in the j th equation, a non-linear two-stage estimator is given by
minimizing

       D=      [r,-g,(~/,fl~)]‘X(X’X)-‘X’[~-g~(x~,~~)].

Stacking the equations in (3.7) as

       r=g(KB)+V

where y’= (y;,..., y;), we obtain an analogue of three-stage least squares by
710                                                                                           R. E. Quundt


minimizing.

        D=    [Y-g(X,8)]'[j2_'ex(x~x)-'X~][Y-g(x,p)l,

where fi is a consistent estimate of s2 in E( VP’) = 5281. [See Jorgenson and
Laffont (1974), Berndt, Hall, Hall and Hausman (1974), and Parke (1979).]


3.3.     Functions in optimal control

Consider a set of structural equations

        fj(Yj9x~9zi>P)=uij3                j=l   ,-..,g, .   i=l ,-.-, n,                             (3.9)

where the y, are vectors of g endogenous variables to be controlled, xi are vectors
of exogenous variables, and zi are vectors of control variables. Then the optimal
control problem is to minimize some loss function W( y,, . . . ,y,; x,, . . .,x,; z,, . . . ,
zn) subject to eqs. (3.9). A frequent assumption is that the loss function is
quadratic as in




where the vectors ai and matrices Ki are given [Fair (1974b), Chow (1975), and
Chow and Megdal (1978)].


4.      Algorithms for optimizing functions of many variables

4. I.    Introduction

The present section deals with the fundamental ideas of optimization algorithms.
Refinements and special problems encountered in individual cases are discussed
in Sections 5, 6, and 7. For the sake of convenience we adopt the convention that
functions are to be maximized; hence the problem is to

        maximizeF(x,,...,x,)                                                                          (4-l)

with respect to the elements of the vector x = (x,, . . . , x,,).~ Under                           normal

   *Obvious alterations       of the algorithms to be discussed   turn   them into methods   for minimizing
functions. Equivalently,      one may maximize - F(x).
Ch. 12: Compututionul   Problems                                                                    711


circumstances F(x) is taken to be twice continuously differentiable; however,
under some circumstances this assumption may be violated (see Section 7). Most
often maximization is unconstrained and the present section is exclusively re-
stricted to this case. Some techniques for dealing with constraints are discussed in
Section 7. Since 13F/ax = 0 is a necessary condition for maximizing F(x),
optimization methods can be adapted in a natural way to solving systems of
equations.
   Numerical methods of optimization characteristically assume that an initial
value x0 is given for vector of variables.3 ‘Algorithms are iterative procedures or
sequences of steps with the k th step defined by

      Xk+’ = Xk + hkdk 3
                                                                                                 (4.2)

where dk is a direction vector and hk a suitable constant. Algorithms differ in the
way in which they select Xkand dk.
   The classification of algorithms could be based on numerous criteria. We adopt
a simple classification according to whether the algorithm requires the evaluation
of no derivatives, or of first partial derivatives, or of first as well as second partial
derivatives.
   Algorithms have many characteristics of interest and the choice of an algorithm
represents a trade-off among these. Clearly, no “best” algorithm exists and the
mix of characteristics possessed by an algorithm will vary from problem to
problem to a greater or lesser extent. Two fundamental characteristics of algo-
rithms are of interest here: (a) their robustness, i.e. the degree to which they are
capable of providing an estimate 2 of the true maximum x* such that 112- x*(1< E
for some prespecified positive E, and (b) their cost. This latter measure is not
uniquely given by the specification of the algorithm but is dependent on the
actual charging scheme in effect for the various resources of a computer such as
execution time, core, I/O requests, etc. Cost is frequently and heuristically taken
to be proportional to the number of iterations (a concept not well defined when
comparing different algorithms) or the number of function evaluations. In any
event, the speed with which an algorithm can be expected to converge is a
relevant consideration. An algorithm is said to be quadratically convergent if it
attains the maximum of a quadratic function in a finite number of steps. Various
criteria exist for defining the speed of convergence. One of these may be stated in
terms of c=limksuplxk-x         * ( Ilk . Convergence is sublinear, linear, or superlinear

   3The choice of x0 may itself be a non-trivial task. Clearly, even approximate   information about the
shape of the function is valuable in that convergence     to the maximum is likely to be the faster the
closer x0 is to the location of the maximum. It is often asserted that in estimation problems x0 must
be a consistent estimate. This may well be essential for statistical reasons as in the computation    of
linearized maximum likelihood estimates [Rothenberg       and Leenders (1964)], but is not necessary for
computational   reasons.
712                                                                      R. E. Quandr


when xk converges to x* according to whether the asymptotic rate of convergence
satisfies c = 1, 0 -Cc < 1, or c = 0. Sublinear convergence to zero is provided by
l/k, linear by 2-k, and superlinear by k - k [Brent (1973)]. The notion of
quadratic convergence is important, for in the neighborhood of the maximum the
function F is approximately quadratic in the following sense. Let the Hessian
matrix of F(x) be G(x) = [ L?2F(x)/~xiaxj] and let G satisfy the Lipschitz
condition




for all x’, x2 in some domain R of F containing x* in its interior, where [lx’- x211
is the Euclidean norm and M is a matrix of constants and where IG(x’)- G(x2)1
denotes a matrix the elements of which are the absolute values of a2F(x’)/8xi axj
 - I~~F(x~)/c?x~~?x~.Then

       F(x) = F(x*)++(x     - x*)‘G(x*)(x   -x*)+Q(x)                          (4.3)

for x E R, where IQ(x)1 5 Mllx - x*l13. For x sufficiently near x* the first two
terms on the right-hand side of (4.3) provide a good approximation to F(x).


4.2.    Methodrr employing no derivatives

In principle, such methods are appealing because the computation of derivatives
is almost always computationally costly. Nevertheless, relatively few algorithms of
this type are in frequent use, particularly on problems of more than moderate
size.
   One class of derivative-free algorithms employs the notion of searching on a
suitable grid of lattice points. A simple procedure is to start at some point x0 and
evaluate the function at x0 and at the 2n lattice points x0 + hei, where e,
(i=l , . . . ,n) is a vector with unity in the i th position and zeros elsewhere and
where h is the preassigned lattice width. A step is taken from x0 to x’, where x’ is
the value of x0 f he, for which F(x’) = sup F(x” f hei). The procedure is
repeated starting from x1 until no improvement is found for the given value of h.
The value of h is then reduced and the search renewed. When h is finally reduced
to the preassigned level of accuracy, the search is terminated and the last value of
x taken as the location of the maximum. An algorithm in this class is that of
Berman ( 1969).
   Although the above algorithm is guaranteed to converge to a local maximum,
in practice it is prohibitively expensive to employ. A different and more efficient
version of search algorithms is that of Hooke and Jeeves (196 1). The Hooke and
Jeeves algorithm employs exploratory moves which are parallel to the coordinate
Ch. 12: Computational Problems                                                                    713


axes and pattern moves which represent the average direction of several past
moves together. If an exploratory move and a subsequent pattern move together
result in function improvement, they are both accepted; otherwise only an
exploratory move is made. Computation again begins with a prespecified value of
h and ends when h has been reduced to the desired accuracy.
   Search methods do have advantages over methods using (first and second)
derivatives. These are the assurance of eventual convergence and their indepen-
dence of the concavity or convexity of the function F(x). Nevertheless, in practice
they are not employed frequently. They tend to converge slowly even in the
immediate vicinity of the location of a maximum and, as a rule, are computa-
tionally very expensive. An even more serious problem is that algorithms that
change only one variable at a time may fail to converge altogether. Consider the
simple algorithm that changes at each iteration one variable according to


       f-b k+l) = maxF(x:
                   X
                                   ,..., xt_i,x,xi+i    ,..., xt).


Methods of this type are in common use; see for example the Cochrane-Orcutt
iterations used to maximize (3.6). These methods frequently work well if precau-
tions are taken to terminate iterations when function improvement becomes
small. Nevertheless, the gradient may remain strictly positive over the path taken
by an algorithm and Powell (1973) has given examples in which this algorithm
could cycle indefinitely around the edges of a hypercube.
   An alternative direct search method is the Simplex method of Nelder and Mead
(1965).4 The function is first evaluated at the n + 1 vertices x0,. . .,x” of an
(irregular) simplex in the space R” of variables. The corresponding function
values, denoted by 6 (i = 0,. . . , n), are assumed to be ordered F, > F,_, >,..., >
F,. Among the points thus examined, x” is currently the best, x0 the worst.
Compute the centroid c of the points not including the worst: c = x7= ,xj/n. The
steps of the algorithm are as follows:

(1) Reflect the simplex about the subsimplex given by x1,. . . ,x” by choosing a
point xr = c + a(c - x0) where (Y> 0 is a coefficient chosen for the algorithm. If
F,, the function value corresponding to x’, is such that F, -C F, < F,, then x’
replaces x0 and we return to Step 1.

(2) If F, > F,, then the simplex may profitably be stretched in the direction of x’
and an xs is defined by xs = c + p(x’ - c), where /I > 1 is a coefficient chosen for
the algorithm. If F, > F,, xs replaces x0. Otherwise x’ replaces x0. In either event
we return to Step 1.

  4Not to be confused     with the simplex method of linear programming.   See also‘Swum (1972) and,
for variants   and computational  experience, Parkinson and Hutchinson   (1972).
714                                                                                           R. E. Quundt


(3)   If F, < F,, then the simplex should be contracted. A positive y < 1 is chosen
and xc set to c+ y(x” - c) if F, < F, and to c + y(x’- c) if F, > F,. If F, >
max(F,, F,), xc replaces x0 and we return to Step 1. Otherwise the points other
than the best point x” are shrunk toward x” by a preselected proportion and we
return to Step 1.

   The algorithm is useful because it does not require derivatives. Unfortunately,
its performance depends on the values of the various (expansion, contraction,
reflection) coefficients and it is not easy to develop sound intuition as to desirable
values.
   An even more useful algorithm is the conjugate gradient method of Powell
(1964). The basic motivation of this method is its behavior in the case of
quadratic functions and its application to more general functions rests on
analogy, or at least the heuristic observation, that near a maximum well-behaved
functions are approximately quadratic.5
   Two direction vectors, p and q, are said to be conjugate relative to a symmetric
matrix A if p'Aq = 0. The essence of the algorithm is a sequence of n linear
searches of the function in n linearly independent, mutually conjugate directions.
Assume that n such directions, d,k,. . . , d,k, are given at the beginning of the kth
iteration and that the most recent estimate of the location of the maximum is xk.
The steps of an iteration are as follows.

(1) Calculatevaluesv,(r=l,...,               n) sequentially such that F(xk +C;,,v,d,b)                is a
maximum.

(2)   Replace d,k by d,k,, (r=l,...,n            - 1).

(3)   Replace d,k by cJ= ,vjdF.
(4) Calculate v such that F(xk + Cy= Ivjdf + v(C& ,vjdjk)) is a maximum and let
xk+’ be given by x k+l = xk +C;,,v/djk + v(Cj”=,vjd;).

   The justification of the algorithm rests upon its convergence in the case of
quadratic functions F(x) = x’Ax + b’x + c and is established by the following
theorems due to Powell (1964).

Theorem 4. I

Let d,,..., d,, m 5 n, be mutually conjugate directions in a subspace of dimen-
sion m and let x0 be the starting point in that subspace. Then the maximum of the
quadratic function F(x) in the subspace is found by searching along each
direction only once.

   ‘For details beyond those provided   here see also Goldfeld   and Quandt   (1972), Brent (1973), Murray
(1972), and Fletcher (1965).
Ch. 12: Computational Problem                                                        715


Proof

The location of the maximum can be written x0 + cy= ,vidi and parameters vi are
chosen so as to maximize F(x” + cy_ ,vidi). Substituting x0 +cy= ,vidi into the
quadratic it can be seen that terms involving d$4dj vanish by the assumption of
conjugacy. Hence, the maximum with respect to vi does not depend on the value
of any vj, j * i, proving the assertion.
Theorem 4.2

Let x0 and x1 be the locations of the maxima when the function is searched twice
in the direction d from two starting points. Then the direction x1 - x0 is conjugate
to d.
Proof

Any point x is the location of the maximum in the direction d if

        $F(x+vd)=O              atv=O.

Performing the differentiation       and alternately substituting x1 and x0 yields

      (2(x’)‘A + b’)d = (2(x0)/A + b’)d = 0

or

        (x’ - x”)‘Ad = 0.

   The convergence of the algorithm can then be proved by induction. Assume
that on the k th iteration of the algorithm the last k directions searched were
mutually conjugate. The xk which is the starting point of the next iteration and
the xk +Cv,d,k defined in it represent maxima involving the same search direc-
tions, hence their difference is also conjugate to the previously conjugate direc-
tions by the parallel property stated in Theorem 4.2. Thus, after two iterations
two conjugate directions exist, and after n iterations n such directions will exist,
each of which will have been searched once. Q.E.D.

   The conjugate gradient method is usually initiated by taking the columns of an
identity matrix as the search directions. In practice it is often a useful method,
although it has been conjectured that for problems in excess of lo-15 variables it
may not perform as well. The principal reason for this may be [see Zangwill
(1967)] that at some iteration the optimal value of vi in the linear search may be
zero. The resulting set of directions d,, . . . , d, then become linearly dependent and
henceforth the maximum can be found only over a proper subspace of the
716                                                                       R. E. Qmdt


original n-space. Near linear dependence and slow convergence can occur if vi is
approximately zero. There are at least three devices for coping with this, with no
clear evidence as to which is preferable.
(1) If the search directions become nearly linearly dependent, we may reset them
to the columns of the identity matrix.
(2) We may skip Step 3 of the algorithm and search again over the same n
directions used previously.
(3) We may replace the matrix of direction vectors with a suitably chosen
orthogonal matrix [Brent (1973)]. These vectors are computed on the assumption
that F( -) is quadratic and negative definite as follows.
   Let A be the matrix of the (approximating) quadratic function. A is generally
unknown (although it could be obtained at significant cost by evaluating the
Hessian of F). Let D be the matrix of direction vectors. Then, since the directions
are mutually conjugate with respect to A,

      D’AD = M,                                                                  (4.4)

where M is diagonal with negative diagonal elements. The linear search in each of
the n directions may be accomplished by evaluating F(xk + c{= ,vid:) at three
points v,!, vi’, and $ (j = 1,. . . , n) and fitting a parabola to the function values
(see Section 6). Thts involves computing the second differences of the function
values which are easily shown to be

      d;Adi = pi,                                                                (4.5)
where di is a column of D and pi is a diagonal element of M. Define R =
D( - M)1’2 and H=A-‘.       Then H= DM-‘D’=       - RR’. Since D and M are
known from the iteration, H can be computed. It remains to compute Q such that

      Q’HQ=M-’                                                                   (4.6)

and the columns of Q are orthogonal eigenvectors of A. If the quadratic
approximation is good, the resulting search directions are conjugate to a matrix
that is approximately the true Hessian and, hence, convergence can be expected
to be fast. In order to avoid bad rounding errors in the computation of
eigenvectors for a badly conditioned matrix it may be desirable to find the
singular value decomposition Q’R’S of the matrix R’, where Q is the matrix of
directions sought.
Ch. 12: Computational Problems                                                                      111


4.3.    Methods employing first and second derivatives

A reasonable starting point for very general methods is to approximate F(x) by a
second-order Taylor approximation about x0:

       F(x) = F(x’)+g(x’)‘(x               -   x0)+4(x - x')'G(x')(x        - x0),               (4.7)

where g(x’) denotes the gradient of F(x) evaluated at x0. Maximizing F by
setting its partial derivatives equal to zero yields

       g(x’)+G(x’)(x-x0)=0,                                                                      (4.8)

or, replacing x0 by the current value of x at the k th iteration and replacing x by
x“+ ‘, the new value sought is

       xk+l   --xk
                     -   [G(xk)]-‘g(xk),                                                         (4-9)
which forms the basis of iterating according to Newton-type                   algorithms.6 A very
general class of algorithms is obtained by writing (4.9) as

       xk+l   =xk
                     -   AkHkg(xk),                                                             (4.10)

where Xk is a suitable constant and Hk is a matrix. Eq. (4.10) is of the same
general form as (4.2) with - Hkg(xk) being the search direction. It can be shown
that search direction dk guarantees an improvement in the function if and only if
it can be written as - Hkg(xk), with the matrix Hk being negative definite [Bard
(1974)]. Numerous choices are available for hk as well as Hk; Ak = 1 and
Hk = [G(xk)] -’ yields Newton’s method. It is a method with the best asymptotic
rate of convergence c = 0.’ It is, however, clearly expensive since it requires the
evaluation of n first and n( n + 1)/2 second derivatives. Moreover, (4.8) corre-
sponds to a maximum only if the second-order conditions are satisfied, i.e. if
G (x k, is a negative definite matrix. Obviously this may be expected to be the case
if xk is near the maximum; if not, and if G(xk) is not negative definite, iterating
according to (4.9) will move the search in the “wrong” direction. A much simpler
alternative is to set Hk = - I. The resulting method may be called the steepest
ascent method. It locally always improves the value of the function but tends to

   6Chow (1968, 1973) recommended          this method for maximizing      the likelihood for systems of
simultaneous linear equations. Instead of directly maximizing the likelihood, he suggested the method
for solving the first-order condition. It is also called the Newton-Raphson      method. See also Hendry
(1977) for various applications.
   7See Parke (1979). Parke also discusses the asymptotic     rates of convergence of the steepest ascent
and univariate search methods. See also Dennis and More (1977).
718                                                                           R. E. Quandt


behave badly near the optimum in that it tends to overshoot (indeed, for arbitrary
fixed A it is not guaranteed to converge) and near ridges in that it induces motion
that is orthogonal to the contours of the function; these directions may well be
nearly orthogonal to the desirable direction of search. Newton’s method is useful
precisely where the steepest ascent method is likely to fail. If - G is positive
definite, we have the decompositions

      G = 5 A,P,P,‘,        G-’ = ;$, P;P;,Ai,                                     (4.11)
          i=l

where the hi are the eigenvalues and the Pi the orthogonal eigenvectors of G. The
eigenvectors point in the direction of the principal axes of the ellipsoid defined by
- y’Gy = constant and the quantities (- 1/Xi)‘12 give their lengths. Since the
eigenvectors are linearly independent, we can write g = c:= ,&P,. Hence, the step
defined by (4.9) can be expressed as




If one of the h’s, say the kth, is very small, i.e. if the quadratic approximation
defines ellipsoids that are highly elongated in the direction Pk, then the compo-
nent Pk receives a weight proportional to l/A, and the step will be nearly parallel
to the ridge.
   Several modifications exist for coping with the possibility that G might not be
negative definite.
(1)   Greenstadt (1967) replaces G by -~~=,IX,IP,P/.
(2) Marquardt (1963) suggests replacing G by G - arA, where (Y is a small
positive constant and A is a diagonal matrix with a,, = 1Gii] if Gii f 0 and ai, = 1
otherwise.
(3) In maximum likelihood problems, in which log L is to be maximized, it may
be possible to compute the value of [E( a210g L/&9&9’)] - ‘, where ti is the vector
of variables with respect to which one wishes to maximize. Setting Hk equal to
this matrix yields the method of scoring [Rao (1973), and Aitcheson and Silvey
(1960)].
(4)   In non-linear least squares problems [see eq. (3.7)] the objective function is
D = cy= , ( yi - f( xi, fi)) 2. The second derivative matrix is

        a20     2 5      a_f(xi7P)   af(xi,B)
      -=                                         -(.Y-j(xi,P))    a2i$iB)].
      WW’        i=l [      aP           W’
                                                                                    (4.12)
Ch. 12: Computational   Problems                                                                   719


If Hk is set equal to the first term of (4.12), it is guaranteed to be positive definite
and the resulting method is known as the Gauss or Gauss-Newton                  method
[Goldfeld and Quandt (1972), and Bard (1974)].

   A quadratic hill-climbing algorithm due to Goldfeld, Quandt and Trotter
(1966) attacks the non-negative-definiteness     of G directly and replaces G by
G - al, where (Yis chosen so that G - al is negative definite. In practice LY   = 0
when G is negative definite and (Y> A,,, where A,, is the largest eigenvalue of
G, when G is not negative definite. The justification for the algorithm is based on
the behavior of quadratic functions and is contained in the following theorems.’
Let Q(x) be an arbitrary quadratic function of x, let Q’(x) denote the vector of
first partial derivatives, and Q”(x) the matrix of second partial derivatives.
Define the iteration

                                                                                               (4.13)

and

      r(o) = ]]Xk+’- xk]J.

Then the following are true:

Theorem 4.3
For any ar such that Q”(xk)- C-XIis negative definite and any x such that
I]x - xkll = r(a), Q(xk+‘) 2 Q(xk).

Theorem 4.4
For all Q’(xk) f 0, the radius I$ a) is a strictly decreasing function of (Yfor all
a > x,,.

Theorem 4.5
Let R, = {xlllx - xkll 4 r(a)), and assume Q’(xk) * 0. Then the maximum of
Q(x) on R, is at the boundary point x k+’ if (Y= > 0 and at the interior point
xk -[Q”(xk)]-‘Q’(xk)    otherwise.
   The algorithm thus basically works as follows: at each step G(xk) is examined
for negative definiteness.     If G is negative definite, a step equal to
 -[G(xk)]-‘g(xk)   is taken.’ Otherwise the step taken is -[G(xk)-(~11~‘g(xk),
where (Yis taken to be X,, + Pllg(xk)ll. The quantity p is itself adjusted from

   ‘For proof see Goldfeld, Quandt and Trotter (1966).
   91n practice, the direction -[G(xk)]-‘g(xk)    IS computed and a one-dimensional      line search   is
performed since line searches arc computationally  efficient ways of improving the function value.
120                                                                          R. E. Quandt


iteration to iteration since the radius r(a) $ p- ‘. At each step the actual improve-
ment in the function is compared with the improvement in the quadratic Taylor
series approximation to it; if the comparison is unfavorable, p is increased and the
radius is shrunk. It should be noted that the resulting changes of CYnot only
change the step size (which may be overridden anyway by a subsequent line
search) but also change the direction of movement. In any event, the direction
will tend to be intermediate between that of a Newton step (CX= 0) and that of a
steepest ascent step (CX--) co). It also follows that if (Yis very large, convergence is
certain, albeit slow since xk+ ’= xk + g(xk)/a. The comparison of the present
method with Greenstadt’s suggests that the latter may make a non-optimal
correction in the step if F has “wrong” curvature in some direction. Assume, for
example, that X, = sup hi > 0. Using (4.1 l), the step according to the quadratic
hill-climbing method is given by

      xk+‘=xk_




and according to Greenstadt’s suggestion by


      xk+‘=xk_                                                                    (4.14)


 Since (Yis chosen so that A, - (Y-C0, we have 1l/(X, - CX)~     > I l/(Aj - a)1 for all
j=2 , . . . , n and hence the step will contain the direction P, with relatively largest
 weight, a fact that need not hold for (4.14). Thus, the step will be relatively closer
 to the direction in which the function is convex [Powell (1971)].
    A further refinement of the quadratic hill-climbing algorithm rests on the
 observation that recently successful directions of search may well be worth further
 searches. Thus, if the step from xk -’ to xk is given by xk - xk -’ = &Yk,     then the
 decomposition of any vector into its projection on 5 and its orthogonal comple-
 ment permits the component parallel to 5 to be emphasized. To distinguish an
 actual xk from arbitrary members of the coordinate system prevailing at the jth
 iteration, we use the notation x(j). Thus, the coordinate system prevailing at the
jth iteration may be transformed into a system prevailing at the (j + 1)th by

      x(j+ 1) = Bjx( j),

where Bj = I +(l - p)Mj and where 0 <p -C1 and Mj = [j(S~Sj)-‘~~. A sequence
of such transformations allows the original coordinate system and the one
prevailing at the jth iteration to be related by x(j) = Bx(0). Applying the
hill-climbing algorithm thus alters the original procedure from maximizing at
Ch. I.?: Computational   Problem                                                                        721


each step on a sphere to maximizing on a suitably oriented ellipsoid, since
x(j)‘x(i)    = x(O)‘B’Bx(O). Writing the function in the jth coordinate system as
F(x( j)) and differentiating, aF(x( j))/ax(O) = B’JF(x( j))/ax( j). Hence, the
gradient of F(x( j)) in terms of the original system is g(x( j)) =
(B - ‘)‘~YF’(x(j))/ax(O). By similar reasoning the Hessian is (B - ')'G(x(j))B   - ‘.
It follows that the step taken can be expressed in the x(j)-coordinate   system as
 -[(B-‘)‘G(x(j))B-‘-       cyI]-‘(B-‘)‘g(x(j)).    Premultiplying by B-’ yields the
step in the x(O)-coordinate system and is -(G(x(j))-aB’l3)‘g(x(j))           and is
equivalent to replacing I in (4.13) by a positive definite matrix BIB.”


4.4.    Methods employing first derivatives

A general theory of quadratically convergent algorithms has been given by Huang
(1970).” The objective of Huang’s theory is to derive a class of algorithms with
the following properties: (a) searches at each iteration are one-dimensional; (b)
the algorithms are quadratically convergent; (c) they calculate only function
values and first derivatives; and (d) at the kth iteration they only employ
information computed at the k th and (k - 1)th iterations.
   Requirement (a) states that at each iteration k = 1,2,. . . a direction dk be
chosen and a scalar X, be determined such that

       aF( Xk + h,dk)/ah,          = 0.                                                            (4.15)

This determines a displacement Axk = Xkdk or xk+’ = xk + Xkdk. Restricting
attention [by Property (b)] to quadratic functions F(x) = X’AX + b’x + c, it
follows that

       F(xk+‘)    = F(xk)+g;Axk           + Axk’AAxk,                                              (4.16)

where g, denotes the gradient g(xk) at xk. From the first order condition (4.15) it
follows that g;+ ,dk = 0. Since g k+, = g, +2AAxk and Axk = hkdk, the optimal
A, is given by


       A,= -
                  dk’&
                 2dk’Adk *

   “A final modification    pertains to the case when g = 0 to the required accuracy without having
achieved a negative definite G (x k). This is the case in which x k is a saddlepoint. Although such cases
may be only rarely encountered,       the following proposition    ensures that the algorithm      does not
terminate prematurely.   If g(xk) = 0 and if Amax > 0, the maximum of F within the sphere (lx - xk(l =<r
occurs at xk f rP,,,   where P,, is the eigenvector corresponding     to the X,,.    Thus, in such instances
a search direction is provided by the appropriate    eigenvector.
   “See also detailed discussion in Powell (1971), Broyden (1972), and Dennis and More (1977).
122                                                                      R. E. Quad


Substituting for Axk and hk in (4.16) yields


      F(Xkf’)-     F(Xk) = -     $:y$,
which is positive if A is negative definite, thus ensuring that the function is
monotone increasing over successive iterations. If it is further required that the
successive search directions be conjugate with respect to A, quadratic convergence
can be proved in straightforward fashion. Taking the search direction dk to be a
matrix multiple of the gradient

      dk = H”g,


produces an algorithm of the general form of (4.10) and for that reason these
algorithms may be called quasi-Newton algorithms. The conjugacy condition
places restrictions on the matrix H k; however, the restrictions will be observed if
Hk is updated according to

      Hk+’ = Hk + B,AxkAxk’+      tl,HkAgkAg;Hk

                 + e,[AxkAg;Hk   + HkAgkAxk’],                               (4.17)

where Ag, = &+ 1- g,. Different choices for 8,, t$, and 0, yield different mem-
bers of this class of algorithms. In any event, 0, and t9, m&satisfy

      1+ fl,Ag;HkAgk     + 83Axk’Agk = 0.                                    (4.18)

At the start, H’ is usually initialized to - Z (or Z for minimization). Some of the
alternatives are as follows.

(1) If 0, = l/Axk’Agk, t$ = - l/Ag;HkAgk, and 0, = 0, the resulting algorithm
is known as the Davidon-Fletcher-Powell     (DFP) algorithm [Davidon (1959), and
Fletcher and Powell (1963)]. In this case F(x) is not required to be quadratic for
convergence but very strict concavity conditions are required. If F(x) is not
concave, there is no assurance that convergence will take place. It should be noted
that the quantity giHkgk increases monotonically over the iterations; since
gLHkgk is negative for concave functions, this implies that the search direction
tends to become more nearly orthogonal to the gradient which can interfere with
speedy convergence.
Ch. 12: Computational Problems                                                                          723


   An important feature of DFP is contained in the following:
Theorem 4.6

If F(X) is quadratic, then H” = G - ‘. The convergence of H to the inverse Hessian
in the quadratic case is used in practice to obtain estimates of asymptotic
variances and covariances in the presence of maximum likelihood estimation.
However, care must exercised for if apparent convergence occurs in less than n
iterations, H will not contain usable quantities. It is important, therefore, that
computer implementations of DFP contain a restart facility by which computa-
tions can be (re)initiated not only with H’ = - I, but H’ = a previously computed
Hk.

(2) In order to make Hk approximate the inverse of the true Hessian G(x“), one
may set

      e,hk’dgk + e3Ag;HkAgk = 1                                                                    (4.19)

and also require (4.18) to hold. Obviously, the DFP algorithm satisfies (4.19). In
that case the required approximation holds because (4.18) and (4.19) imply
Hk + ‘Ag, = Axk, which is just the Taylor series approximation        gk+ I = g, +
G(xk)Axk.   A special case is the rank-one correction formula, according to which

      Hk+,   =   Hk   +             bxk - Hk‘kkl’
                          [Axk- HkAsk]
                               dxk’dgk      - Ltg;HkAgk              *

Several other algorithms are defined by Huang and Powell and the reader is
referred to Huang (1970) and Powell (197 1) for details.‘2
   Computational experience with many members of this class of algorithms is
lacking. The best documented member of the class is almost certainly DFP.
Overall its performance is good enough to make it a reasonable first choice for
many problems, although it is both generally less robust than some variants of
Newton’s method (particularly near the maximum) and less efficient computa-
tionally than algorithms especially tailored to a problem [see Parke’s (1979)
Algorithm A] or possessing special ad hoc features such as MINOPT [Belsley
(1980)]. The latter in particular makes a choice at each iteration whether to
employ a steepest ascent step or a Newton step, allowing the former to guide
computations at an initial point far from the optimum and the latter near it. It
can thus perform more efficiently than DFP. In general, however, DFP and other
members of the class must continue to be regarded as viable alternatives for many

    12A recent new member   of the class is due to Davidon   (1975) and is designed   to work without   any
line searches.
124                                                                     R. E. Quandt


problems. Two related reasons why members of the quasi-Newton class may fail
or perform poorly in practice are: (a) Hk+’ may become (nearly) singular and (b)
Hk+’ may fail to provide a good approximation to G -‘. The latter affects the
speed of convergence as a result of the following:
Theorem 4.7

If F(x) is a negative definite quadratic function and x* the location of the
maximum, then ~(‘(X*)-F(X~+‘))$[(K(R,)-~)/(K(R,)+~)](F(~*)-F(X~)),
where K( Rk) is the condition number of the matrix R, = G’12HkG112.
Hence, K(R,) should be small and decreasing which will be the case if Hk
increasingly approximates G - ‘. Oren and Luenberger (1974) designed a “self-
scaling” algorithm in this class which guarantees that K( Rk+ ,) 4 K( Rk), with
updating formulae given by


           ok = ( dg;Hkdgk)“’~
                                 [
                                     Axk
                                   A&Ax,
                                            -    HkA&
                                                         I
                                                Ag;HkAgk ’




where e,k and e6k are parameters to be chosen. In recent experiments various
self-scaling and other quasi-Newton algorithms gave satisfactory results [Van der
Hoek and Dikshoom (1979)].


5.      Special purpose algorithms and simplifications

There is no hard-and-fast dividing line between general and special purpose
algorithms. In the present section we discuss some algorithms that are either
especially suited for problems with a particular structure or contain more or less
ad hoc procedures that appear to be useful in particular contexts.


5. I.    Jacobi and Gauss - Seidel method

Both of these procedures are designed to solve systems of (linear or non-linear)
equations. In the context of maximizing a likelihood function, they are applied to
solving the first-order conditions, the likelihood equations. Both Jacobi’s method
Ch. 12: Computational Problems                                                              725


and the Gauss-Seidel method presuppose that the equation system can be solved
in a particular manner. In the former case we require a solution

     x =f(x),                                                                             (5.1)

where x is a vector of unknowns and f(x)               a vector-valued     function. Jacobi’s
method iterates according to




The Gauss-Seidel method is similar, except that the ith equation in (5.1),
i=l , . . . ,n, is assumed to have the structure xi = fi(x,, . . . ,xi _ ,, xi+ ,, . . . ,x,). A
further distinction may be obtained depending on whether in a given iteration of
the algorithm all n x’s are computed and then used only in the next iteration, or
whether an xi computed in a given iteration is used immediately in the computa-
tion of other x’s in that same iteration. There is some reason to think that the
latter procedure is more efficient [Fromm and Klein (1969)].
   Jacobi’s method was applied to Klein’s Model I by Chow (1968). As shown in
Section 3, the condensed log-likelihood function for a system of simultaneous
linear equations Yr + XB = U can be written as




where r is the matrix of coefficients associated with the jointly dependent
variables and S is the estimated covariance matrix of residuals with typical
element


     ‘ij   = i   kc,   UikUjk.



S itself is a function of the parameters in r and B and setting derivatives of L
with respect to the non-zero elements of r and B equal to zero yields equations of
the form of (5.1). Jacobi’s method or the Gauss-Seidel method are also routinely
applied to solving non-linear systems of simultaneous equations as is required for
the solution of stochastic control problems [Chow and Megdal (1978)] or for
simulating non-linear econometric models after estimation [Duesenberry et al.
(1969), and Fair (1976)].
   The objectives of simulation may be to assess the sources of uncertainty and
the quality of the predictions over several models or to estimate the effects and
the uncertainty of various policy variables [Fair (1980a, 1980b)]. Simulations are
stochastic if repeated trials are made in which either the error terms, or the
126                                                                       R. E. Quandt


coefficients employed in computing predictions, or exogenous variable values, or
all of these are drawn from some appropriate distribution. Whatever simulation
variant is chosen, the simulated endogenous variable values must be obtained by
solving the system of econometric equations, which is typically non-linear.
   A particularly interesting application is due to Fair (1979) in which models
with rational expectations in bond and stock markets are simulated. In these
models two layers of Gauss-Seidel alternate: for certain initial values of some
variables, Gauss-Seidel is used to solve the system for the remaining ones. These
solution values are used to obtain new values for the initial set of variables and
the system is solved again for the remaining variables, etc.
   Neither Jacobi’s nor the Gauss-Seidel method can be expected to converge in
general. A sufficient condition for convergence is that f(x) be continuous and a
contraction mapping; that is, given the distance function d over a compact region
R, f(x) is a contraction mapping if for x f x*, X, x* E R, and d(f(x), f(x*)) <
d(x, x*). An example of such a contraction mapping is provided by Ito (1980) in
connection with solving a two-market disequilibrium model with spillovers for
values of the endogenous variables. The equations of such models are

      yd=(Yb,X,+(Y,(z-?S)+E,,
      y”=cwbzxz+a,(f-kd)+E2,
      y = in( yd,f),
      Id=P~*Z,+P,(Y-~S)+&3,
      fs=p~,z,+Pz(r-~d)+&q,
       I = rnin(Zd, I”),


 where jjd = C&x, + E,, Y”= c&X~ + E*, Id = &,z, + Es, and p=/3&z2 + .Q. The
 x’s and z’s are exogenous variables and the E’Srandom errors. The yd, ys, Id, and
 I” are effective goods and labor demand and supply, respectively, the same
 symbols with a tilde (‘) represent notional demands and supplies, and y and I
 represent the actually transacted quantities. Ito shows that values of y and 1 may
 be calculated by Jacobi’s method (for given values of x’s, z’s, and E’S)by starting
 with arbitraryy and iif (Y,,(Y~,P,,&>O and if ~-cw,/~~>O for all i=1,2 and
j = 1,2.
    Some algorithms that appear to be principally gradient methods exploit the
 idea of a Jacobi or a Gauss-Seidel iteration. Thus, for estimating the parameters
 of systems of simultaneous equations, Dagenais (1978) first computes a Jacobi
 iteration of the parameter vector and then further displaces the parameter vector
 in the direction of the difference between the original value and the Jacobi iterate.
Ch. 12: Computational Problems                                                    121


This yields an iteration of the form x k+’ = xk + XHkgk, where Hk is a positive
definite matrix and A a scalar.


5.2.   Parke’s Algorithm A

An algorithm particularly suited for estimating the coefficients of linear or
non-linear simultaneous equations by full-information maximum likelihood or by
three-stage least squares is Parke’s (1979) Algorithm A, Algorithms that are
especially useful for simultaneous equation estimation have been used before. A
case in point is the procedure implemented by Chapman and Fair (1972) for
systems with autocorrelations of the residuals: their algorithm is a sequence of
pairs of Newton steps in which the first operates only on the coefficients of the
equations and the second on the autocorrelation coefficients.
   Algorithm A performs sequences of searches at each iteration in order to
exploit two empirical generalizations about the structure of simultaneous equa-
tions models: (a) that the coefficients in any one equation are more closely related
than those in separate equations, and (b) that change in the values of the residuals
of the equations usually has a substantial effect on the objective function. The
algorithm uses searches, no derivatives, and performs numerous searches at each
iteration; these facts make it superficially resemble the Powell (1964) class of
algorithms.
   The sequence of searches in an iteration may be briefly summarized as follows.
(a) For each equation in turn the coefficients of the equation are perturbed one
by one (and in a particular order) with the constant term being continually
readjusted so as to stabilize the residuals in the sense of holding the mean residual
constant. Finally, the constant term itself is perturbed and then the change in the
full set of coefficients for that equation is used as a search direction.
(b) After (a) is complete, the change in the coefficients for the system as a whole
is used as a search direction.
(c) The last (equation-by-equation)    search directions in (a) and the direction in
(b) are searched again.
   Searches in (a) are linear for linear equations but non-linear otherwise, since
the constant term is not, in general, a linear function of the other coefficients
when mean residuals are kept constant. The algorithm also provides for the case
in which there are constraints on the coefficients.
   General theorems about the convergence properties of Algorithm A are dif-
ficult to come by. On a small number of test problems the convergence rate of
Algorithm A compares favorably with a simple steepest ascent or a simple
univariate relaxation algorithm that searches parallel to the coordinate axes. No
728                                                                    R. E. Quandt


claim is made that Algorithm A’s convergence rate can approximate that of
Newton’s method (although the latter is very much more expensive per iteration
than the former), nor that Algorithm A will necessarily perform well on problems
other than simultaneous equation estimation. Computational experience so far is
fairly limited and appears to consist of estimates of two versions of the Fair
(1976) model [see Fair and Parke (1980) and Parke (1979)]. In spite of the scant
evidence the algorithm appears to be quite powerful in a rather sizeable model: in
the model of Fair and Parke (1980), Algorithm A estimates 107 coefficients.


5.3.    The EM algorithm

A particularly effective algorithm becomes possible in models involving incom-
plete data or latent or unobservable variables. The basic properties of the
algorithm are given in Dempster, Laird and Rubin (1977); particular applications
are treated in Hartley (1977a, 1977b) and Kiefer (1980).
   The incomplete data problem may be stated as follows. Consider a random
variable x with pdf f( x (d) and assume the existence of a mapping from x to y(x).
It is assumed that x is not observed but is known to be in a set X(y), where y
represents the observed data. The y-data are incomplete in the sense that a
y-observation does not unambiguously identify the corresponding x, but only
X(y). The y-data are generated by the density function




A simple example is a multinomial model with k possible outcomes but with the
restriction that for some pair of possible outcomes only their sum is observed.
Another example is the switching regression model with the structure
       yi =&xi + uti with probability X,                                     (5 -4)
       yi = &xi + uZi with probability 1 - A.

In this model the xi are exogenous variables, the pi unknown parameters, the ui
the usual error terms, and the yi the observed values of the dependent variables
[see Hartley (1977a) and Kiefer (1980)]. The probability X is unknown and we do
not observe whether a particular yi observation is generated by regime (5.4) or by
(5.5). Other cases where the method is applicable are censored or truncated data,
variance component estimation, estimation in disequilibrium models, etc.
   The essential steps of the EM algorithm are the E-step and the M-step which
are carried out at each iteration. At the k th iteration we have:
E-step: Given the current value Bk of the parameter vector and the observed data
y, calculate estimates for x k as E(x ]y, ti k).
Ch. 12: Computational    Problems                                               729


M-step: Using the estimated values xk, maximize the likelihood for the complete-
data problem n~=,f(x~l0)    to determine 19~+l.
   The most important feature of the EM algorithm is that if it converges to a 8*,
then 8* is a stationary point of the likelihood function L(B) = clogg(y,lQ.      It
has been suggested as a technique preferable to outright maximization of Z,( .) in
instances (see Section 7) in which the likelihood function is unbounded in
parameter space or, possibly, cases in which false apparent maxima exist. Whether
these problems can typically be avoided by using the EM algorithm is not yet
clear; nevertheless it is a powerful algorithm which may simplify as well as speed
up convergence in the class of problems to which it is applicable. As an example
we discuss the application to the switching regression model by Kiefer (1980).
   Assume that n observations are generated by (5.4) with i.i.d. normal errors and
the additional restriction that u: = oz.2 Let IV, be a diagonal matrix of order n
where the i th diagonal element wi represents the expected weight of the i th
observation in the first regime and let IV, = Z - IV,. Then, maximizing the
likelihood n;=,f(rilxi,    e), where B = (h, &, p,, a2) yields

       pj = (x~~x)-‘x~~Y,             j=1,2,

       e2=    5    (Y-    XPj)‘?(Y_   XPj),                                  (5.5)
             j=l



where X and Y are the matrices of observations on the x’s and on y. Regarding
regime choice as a Bernoulli experiment, h is estimated as

       X = tr(IV,)/n.

Given these estimates for 8, representing the M-step, one can obtain new
estimates for IV, since for the ith observation



                                                                              (5.6)

by Bayes’ Theorem. Since the right-hand side of (5.6) is easily computable, we can
alternate between E and M steps as required.


5.4.    Simplified Jacobian computation

If we are seeking FIML estimates for the coefficients of a system of simultaneous
linear equations, the transformation from the pdf of the error terms to the pdf of
730                                                                                          R. E. Qumdt


the jointly dependent variables involves the Jacobian 1rl of the transformation as
in eq. (5.2). In the event that the equation system is non-linear the term
(n/2)log[ ]rl]’ in (5.2) is replaced by




where Ji is the Jacobian corresponding to the i th observation. Clearly, the
evaluation of (5.7) is likely to be much more expensive than the corresponding
term in a linear system. Parke (1979), Fair and Parke (1980), and Belsley (1979)
report good success with approximations that do not compute all n terms in the
summation of (5.7). Various alternatives can be employed, such as approximating
(5.7) by (n/2)(log]J, I+ log]J,l) or by computing a somewhat larger number of
distinct Jacobians and interpolating for the missing ones. Fair and Parke report
an example in which computations start with the simpler approximation and
switch to a somewhat more expensive one with six Jacobians being computed for
98 data points. Belsley employs three Jacobian terms. All authors report that the
approximations work quite well. The two- and six-term Jacobian approximations
lead to substantially similar coefficient estimates and the corresponding objective
functions rank the coefficient vectors consistently. The three-term approximation
produces essentially the same results as the full Jacobian. It is difficult to predict
how this type of approximation will perform in general. The acceptability of the
approximation will surely depend on the degree of non-linearity: I3 the greater the
non-linearity the worse the approximation may be expected to be. The time
saving in computation may, however, be appreciable enough to recommend the
procedure in most if not all instances of non-linear models.




6.     Further aspects of algorithms

The previous two sections dealt with general as well as with special purpose
optimization algorithms in rather broad terms, i.e. in terms that emphasized the
general strategy and the key ideas of the algorithms in question. Most of these
algorithms share certain detailed aspects which have been neglected up to now.
The present section considers some of the salient aspects in this category. We
specifically discuss (a) the computation of derivatives, (b) the techniques of linear
searches, (c) stopping criteria, and (d) the problem of multiple optima.


     I3For some measures   of non-linearity   see Beale (1960) and Guttman   and Meeter (1965).
Ch. 12: Computational Problems                                                                             731


6.1.   Computation of derivatives

As shown above, many algorithms require that at least the first partial derivatives
of the function be calculated; Newton-type methods also require the computation
of second partial derivatives. Derivatives may be calculated analytically, i.e. by
writing computer programs that evaluate the formulae that result from formal
differentiation of the function in question or numerically by finite differencing.
The evidence is clear that, other things equal, the former is vastly preferable. Not
only do the various convergence properties presume the use of analytic deriva-
tives, but in terms of the required computer time analytic derivatives clearly
dominate their numerical counterparts, particularly for Newton-type methods
[Belsley (1980)]. Unfortunately, for all but the smallest problems the calculations
of analytic derivatives is highly labor intensive and in practice numerical deriva-
tives are often employed, although some computer programs for symbolic differ-
entiation exist (e.g. FORMAC). For numerical evaluation at least two choices
have to be made: (a) Should derivatives be evaluated symmetrically or unsymmet-
rically? (b) How should one choose the length of the interval over which function
differences are computed for arriving at a derivative approximation? First partial
derivatives at x0 are given by

       JF(xO)
       -=            F(xP    )...)   xy+q   )...)        xn”)-F(xP       )...)   xn”)
         8Xi                                                                                             (6-l)
                                                    ‘i


if evaluated unsymmetrically           about x0, and by


       aF(xO)
       -=            F(xP    )...)   x;+q   )...)        Xn”)-F(xF       )...)   x9--Ei   )...)   XII)
         f3Xi                                              2Ei                                           (6.2)


if evaluated symmetrically. If the value of F(x’) is already available (i.e. having
already been computed by the algorithm), (6.1) requires n and (6.2) 2n additional
function evaluations. Second direct partial derivatives are


       d*F( x0)
         8X,?


         =
               F(xy ,...,   x; - ei ,..., x,O)-2F(x;             ,...,   xn”)+F(xy ,..., x; + ei ,..., xn”)
                                                              &f
132                                                                                   R. E. Quandt


Second cross partial derivatives are

      a2F(Xo)
      axi
        ax,
            =[ F (x;,...,xv+ .ci,..., x0J + J,..., 4
                                   I
                                                       E.




                                       ,..., xn”)
                    - F(xp ,..., xi”+ ~~

                    - F(x: ,..., x; + q,...,xn”)+F(x; ,..., x;)],‘eiej                      (6.4)

or

                                                x; +   Ej   )...)




                                                                       )
                                                                     x,0

                    -F(x:      ,..., x;-E,   ,..., xj”+ej ,..., xn”)
                    - F(x: ,..., x; + q,...,x; - ej ,..., x;)
                    + F( x;, . . . ,x; - ei,. . . ,xi” - ej,. . . ,x,o)]/4eiej.             (6.5)

The symmetric version (6.5) requires (n - l)n/2 more function evaluations than
(6.4). The total number of function evaluations required for derivative calcula-
tions is:

                            First derivatives        Second derivatives              Total
      Unsymmetric                                       (3n2 + n)/2               3n(n + 1)/2
      Symmetric                    2::                      2n2                    2n(n + 1)

Further compromises are clearly possible and often implemented, such as when
first derivatives are calculated analytically and second derivatives numerically by
differencing first derivatives.
   An important question is how the values of &iand &j ought to be chosen. In
practice they are chosen as small but arbitrary proportions of xy and XT. For
example, Chow and Megdal(l978) choose &j= max( &xj, 6,) where rS, and 8, are
both 0.001. A procedure has been developed by Stewart (1967) for choosing the
intervals optimally. Consider for simplicity a function (p(x) of a single variable
and assume it to be the quadratic. Then, expanding +(x + E) about x and
evaluating at x = 0, the function can be written as

      +(&) = (Y.+ LX,&
                     + &Y2&2.

The first derivative can then be approximated                   by

                                                                                            (6.6)
Ch. 12: Computational Problems                                                                  133


The approximation (6.6) may be in error because it and all difference approxima-
tions to derivatives are Taylor series approximations and thus involve truncation
error. The relative magnitude of this error is




which clearly increases in the interval length E. Another error is introduced if E is
small since in the numerator of (6.6) two numbers of comparable size are
subtracted: in fixed word length computing serious rounding error may arise. We
need to know an error bound ?j such that the computed value C#I~    and true value $I
are related by (p, = +(l + n), where 1915 i’j. Then G(E) and (Y,,can be computed as
(P,(E) = (P(e)(l+ 77,) and aoc = a,(1 + nZ), where lq, 1 and 1~~1s ?j. If E is small so
that a0 = @I(E),(P,(E)- aoC = e(e)- a0 + n3cuo,where 1~1 5 2q. It follows that the
relative cancellation error is




which is decreasing in E if G(E) - CX~
                                     is increasing in E. Stewart suggests choosing E
so that the errors from the two sources are equal, which can be determined as the
solution of one of the cubic equations below, where E, = IsI :




Simplified versions of (6.7) as well as optimal solutions based on symmetric
approximations exist and are generally desirable.
   The computational cost of second derivative methods is significant enough to
make them less than fully practical for large problems. Fair (1973) has applied
such methods to problems with up to 40 variables, but problems not much larger
than these may well represent the practical upper bound for using Newton-type
methods for most researchers. How to economize on second derivative evalua-
tions has been a problem of high priority. A simple solution that works in practice
is to evaluate the matrix of second partial derivatives not at every iteration but at,
say, every second or third iteration. The degradation of convergence that may
occur is often more than made up by the savings in function evaluations.‘4 An

   141f the same Hessian is used for a number of iterations and happens to be a good estimate    of
E[ a210g L/H&S”], the method is an approximation    to the method of scoring.
134                                                                          R. E. Qumdt


important modification based on statistical theory is that of Berndt, Hall, Hall
and Hausman (1974) and is applicable to the maximization of likelihood func-
tions. The negative inverse of the matrix of second partial derivatives required for
computation is a sample estimate of

      -[q.gL-‘=            p!!zp!g]-1.

The (negative) expected value of the Hessian is thus, at the optimum, the
covariance matrix of the gradient. It may therefore be inexpensively approxi-
mated by using the first derivatives of the likelihood function. Given, for
example, the system of simultaneous non-linear equations

      fi(.Yi~Xi~e)=Ui~      i=l     ,***, n,

where fi is a row vector with a component for each of g equations, yi the vector of
jointly dependent variables, and xi the vector of predetermined variables, the
log-likelihood function can be written analogously to (5.2) as


      L = const - +log ]f’f] + k     log ]Ji 1,
                              i=l


where f is the n x g matrix containing as its rows fi, and where Ji =
af,(y,, xi, B)/Jy,. It is easy to show that the matrix of second partials can be
approximated by



       i=l


where pi = 8 log ]Ji I/ 83 and qi = ( a& / afl)(zf,‘f,) - %(. The use of this approxima-
tion can be powerful by eliminating many of the function evaluations required for
numerical derivatives. In addition, the approximation is positive definite and
iterations will move uphill along the likelihood function. In practice it appears to
work very well in many problems [Belsley (1980)], although it need not always
provide a good approximation to the Hessian, particularly in small samples and
at points not close to the optimum.
   In spite of the several useful techniques discussed above, it may occur that a
numerical approximation to the Hessian at the optimum is not negative definite.
Although some algorithms may, in principle, converge to saddlepoints, this must
generally be regarded as an unlikely event. The most plausible conclusion is that
the numerical approximation to the Hessian has failed. Such an outcome is most
frequent in cases where the function is extremely flat. It is clearly not an
Ch. 12: Compuiutionul   Problems                                                  135


acceptable outcome in any event, but particularly not in the case of maximum
likelihood estimation for then the negative inverse of the Hessian is used as an
estimate of the asymptotic covariance matrix. A heuristic technique that may
occasionally be employed with success in such cases is as follows. Choose
alternative values of the intervals .siover some fairly wide range and evaluate the
Hessian for each. For large si the truncation error, and for small si the cancella-
tion error, may predominate. For extreme values of the .si the estimates of the
Hessian are likely to be unstable in the sense that the values of si that are near to
each other do not yield Hessians that are comparable. There may exist a (problem
dependent) range of &i over which the estimates of the Hessian appear to be
stable. If such a range exists, it is likely to be associated with numerically more
accurate estimates of the Hessian.


6.2.   Linear searches

Many algorithms require at each iteration, say the k th, the computation of h,
such that F( x k + Xkdk) is maximized. It is clearly too expensive to require that
(4.15) be satisfied exactly. In fact, normally it appears not worthwhile to calculate
h, very accurately because of the excessive number of function evaluations this
tends to require. Three procedures are discussed briefly.

(1) Fibonacci search [Spang (1962)]. Assume that the location of a unique
maximum after p cycles of the linear search is known to be between x + h$d and
x + hid. Then two more test values, X{ and h$, are selected (Xi < h{ < $ < Xi).
If F(x + Afd) > F((x + X$d), the maximum is between x + X{d and x + h$d; the
new lower and upper limits are XP,+    ’= hP, and X$+’= X$, and the procedure is
repeated with the new interval. (The corresponding actions are obvious if the
inequality is reversed or if equality should be attained.) The values of X, and h,
after the pth shrinking of the interval are obtained as




and


       x:=&v-h:)+A”,
where V, denotes the i th Fibonacci number and N is a predetermined number of
shrinkages. The rationale for Fibonacci search rests on the relationship between
736                                                                       R. E. Quandt


the number of function evaluations and the size of the region covered when the
error in finding the maximum satisfies a certain bound. Assume specifically that
F(x + Ad) has a unique maximum in the interval [0, A,], where A, allows the
maximum to be found with an error bounded by unity in no more than N
function evaluations. Define X, as inf(A,). Then one can prove the following:
Theorem 6.1.

The sequence X, is the Fibonacci sequence. Thus, for a given error bound of
unity, the area searched increases with N fastest for the Fibonacci sequence;
conversely, for a bounded area the error declines fastest. However, in practice this
requires a prior determination of N. If the initial interval is large, the temptation
may be to use a large value of N which will result in a large number of function
evaluations at each line search. The method has been successful in applications
[ Daganzo, Bouthelier and Sheffi ( 1977)].

(2) Successive quadratic approximation [Powell (1964)]. Evaluate the function at
x + X,d, x + A 2d, and x + X, d and determine the stationary point of the quadratic
function of X fitted exactly to those points. The stationary point occurs at


h =I       (A;-A<)F(x+X,d)+(A;-A;)F(x+A,d)+(A;-A2,)F(x+X3d)
  4    2 (A,-X3)F(x+X,d)+(h,-X,)F(x+A,d)+(X,-X,)F(x+A,d)                            ’


If the stationary point is a maximum and if the proposed step is not greater than
a preassigned tolerance, the X corresponding to the smallest value of F(x + Ad) is
discarded and the computation repeated with the surviving three h’s. If h,
corresponds to a minimum or implies a step greater than the maximum allowed,
X4 is chosen to correspond to the largest permitted step, the A-value farthest from
X4 is discarded and the computation repeated. If a computed A, is within a
preassigned s-distance of X,, h z, and X,, it is accepted as the maximum and the
line search is terminated. [A more elaborate cubic interpolation scheme is
suggested by Davidon (1959). Dagenais (1978) first fits a quadratic from two
function values and the gradient, adds a third point which is the maximum of the
fitted quadratic, and then fits a cubic.]

(3) Powell (1971) and Bemdt, Hall, Hall and Hausman (1974) recommend the
following approximate procedure. First select an E such that 0 c E < f . Then find
hk such that

           F(xk + Akdk)-F(xk)      ~ 1_ E
      ES                                                                        (6.8)
                   Akg;dk
Ch. 12: Computational Problems                                                      131

Since the fraction in (6.8) approaches 1 as Xk-+ 0 and approaches zero or a
negative number as Xk-+ cc, a suitable value of Ak exists and can be found by
successive evaluations; the first Xk that satisfies (6.8) is then used.


6.3.    Stopping   criteria


An important part of every algorithm is the criterion it employs for terminating
computations. The ideal of reaching a point xk such thatLJF(xk)/dxi = 0 (i =
1, . . . , n) is not attainable in practice and the question is what compromise is most
reasonable. In the neighborhood of the maximum any algorithm is likely to take
small steps in the sense that Ix,!+’ - x,6] is likely to be small for all values of i
and in the sense that ]F(x“’ ‘)- F(xk) 1 is likely to be small; accordingly both of
these quantities have been employed as stopping criteria. In fact, it is theoretically
possible for either difference to become small while the other is large; it is thus
preferable to use both and continue iterating unless both criteria are satisfied. In
addition, since at the exact maximum the gradient in zero, gj& is also an obvious
choice for judging closeness to the maximum. Perhaps the most common is to test
the relative change in the variables and accordingly computations terminate if

             Ix;+’ -x:1
       maxmax(e,,     Ix:]) ‘e2’

where E, and &2are preassigned tolerances [see Powell (1964) and Berndt, Hall,
Hall and Hausman (1974)]. A variant is to terminate if




where E, is machine precision defined as p’-’ (for truncated arithmetic) or p’-‘/2
(for rounded arithmetic), where p is the base of arithmetic and r the number of
floating point digits [Brent (1973)]. Some algorithms employ a combination of
criteria and may terminate when any of the criteria are satisfied. Belsley (1980)
criticizes the gradient criterion as not being scale independent and ignoring
statistical considerations in the sense that a gradient component in the direction
of an insignificant parameter has the same weight as one in the direction of a
statistically significant one. He criticizes the relative variable-change criterion as
treating all variables equally (although the criterion is scale invariant). The
relative function-change criterion is not invariant with respect to the scaling of the
function. Belsley suggests a weighted-gradient stopping criterion - g; H- ‘g, < E,
where H- ’is the inverse Hessian. A similar suggestion in a least squares context
738                                                                                          R. E. Quandt


is contained in Dennis, Gay and Welsch (1979). This criterion is clearly scale
invariant and in maximum likelihood estimation it can be interpreted to weight
parameter estimates according to their (asymptotic) significance. Moreover, the
criterion may be recognized as the Lagrange multiplier test statistic and accord-
ingly iterations continue until the test statistic confirms that the gradient is small.
Computational experience with the criterion appears to be quite satisfactory and
it results in terminations that are relatively model independent.15


6.4.    Multiple optima

All algorithms discussed so far (with the possible exception of appropriately
designed grid searches) locate only local maxima. There is no guarantee that only
one maximum exists or, if more than one exists, that the maximum found is the
global maximum. There are, of course, numerous instances in which the likeli-
hood function can be proved to be globally concave, in which case a unique
maximum exists. Cases in point are the likelihood function associated with the
classical normal regression model or that of the probit or logit models. For the
latter two, in the simplest case, the dependent variable value at the ith observa-
tion, yi, is dichotomous:

                   with probability 1 - @(xl/I),
                   with probability @(x,/I),

where XI is the (row) vector of independent variables, p a (column) vector of
parameters, and @ a distribution function, normal for the probit model and
logistic for the logit model. The likelihood is

       L = ;jj[@(x;p)]yi[l          - @(xjp)]‘-yg,


and it is not difficult to show that




where e(z) = d@(z)/dz             is the probability density function, is negative definite
[Dhrymes (1978)].
   15Atermination criterion that is qualitatively different from all of the ones discussed is the criterion
employed in the Nelder and Mead (1965) algorithm. According to this criterion computations stop if
the sample variance of the function values at the vertices of the current simplex falls below a preset
tolerance.
Ch. i2: Computational Problem                                                    139


   In some cases the existence or the possibility of multiple maxima can be shown
analytically. Some illustrative examples are provided by Goldfeld and Quandt
(1972); a realistic example pertaining to pooling cross-section and time-series data
is discussed by Maddala (1971). Numerous instances exist in which a global
maximum has not necessarily been found [see Fair (1974a)]. When several
maxima exist, it is important to attempt to find the global maximum since it is
(customarily if not uniformly) implicit in the asymptotic justification for maxi-
mum likelihood estimation that the global maximum is attained.
   Unfortunately, mostly ad hoc methods are employed for locating multiple
optima. (a) The most common method is to select several (or many, if cost
considerations permit) starting values for the vector of unknowns and to reopti-
mize repeatedly using the algorithms discussed previously. If all starting points
lead to the same local optimum, the tendency is to declare it to be the unique
maximum with substantial confidence. (b) Assume that a local maximum has
been found at x0. Goldfeld and Quandt (1972) propose to find a solution to
F(x) = F(x’)+ E for small positive E; if there exists a solution to the equation, x0
cannot correspond to a global maximum. (c) A deflation method is suggested by
Brown and Gearhart (197 1) and explored by Salmon (1978) with a view towards
solving large-scale econometric models. It appears feasible to apply the method to
solving the first-order conditions of a maximum problem. The first-order condi-
tions are

      g(x) = 0                                                                (6.9)
and assume that (6.9) has been written as

      x = (P(x),                                                             (6.10)

as wouId be required to obtain a solution by the Jacobi or Gauss-Seidel    method.
Let x0 be a solution obtained by one of these methods. Define


      IIx-xo]]p=        ;~t(xi-xO)P]“P3
                    [
p   normally > 1, and consider solving


      g*(x) =      dx)       =x-+*(,+0.
                 llx - xOllp

This suggests iterations according to xk+t = $*(xk), where
140                                                                                         R. E. Quandt


leading to iterations defined by

       Xk+l,         l-
                               1                       1
                                                               $4X”)>                            (6.11)
                 i        llXk - xOllp1 Xk + llXk- xOllp

which shields the algorithm from the previously obtained solution x0. Additional
solutions give rise to similar deflators of g(x) until no further solutions are found.
Experience with the method appears to be limited to test examples and to solving
the Australian Treasury NlF7 macro model with 128 equations. Although the
method will share the difficulties of the Gauss-Seidel method and need not
converge after deflation even if a second solution exists, it appears to be an
interesting candidate for further study.


7.     Particular problems in optimization

In addition to the standard features of optimization algorithms and problems,
there occur in practice several particular problems that may be difficult to cope
with. Most of these are associated with special models; accordingly, their treat-
ment will be relatively brief.


7.1.    Smoothing of non-differentiable functions

These are several related contexts in which non-differentiable                     likelihood functions
may arise. One is the switching regression model

       yi = &xi + uli        if 7r’zi 5 0,
       yi =&xi + uZi if 7r’zi > 0,                                                                (7.1)

where &, &, and rr are unobserved parameter vectors and xi and zi are exogenous
variable vectors. Define D = D(a'z,) = 0 if ‘IT’Z~
                                                 5 0 and Di= 1 otherwise. Eqs.
(7.1) may then be rewritten as

       yi= (l-       Di)&xi+ D&xi+ uli(l-               Di)+u,,Di.                                P-2)
If uli and uZi are distributed as N(0, u:) and N(0, a:), the likelihood function is


       L = (2r)-n’2(        0F)-‘/‘exp       ( -i~,(~i-(l-Di)8;Xi-48;‘r)i/zo.i),

                                                                                                   (7.3)
Ch. 12: Computational   Problems                                                   141


where uf is defined as uf(1 - Di)2 + u;Df. The unknowns in this problem are &,
P a:, c,2, and the Di which are discrete; hence, derivatives with respect to the Di
dz not exist.
  An alternative model, first suggested by Tishler and Zang (1977) and shown to
be a special case of a general disequilibrium model by Goldfeld and Quandt
(1978), is

     Yli = Pixti>
     Y2i = Pix2i    3                                                           (7.4)
       y~=~n(y,i,Y2i)+Ui7

where yli  and yzi are not observed and yi is observed. The likelihood function
corresponding to (7.4) is




                                                                                 (7.5)


Rewriting &xl, - &xzi 5 0 as n’ti 5 0 shows that (7.5) is formally identical with
(7.3) with the added restriction that u,2 = u:. The function (7.3) is not differentia-
ble everywhere because of the discrete Di and function (7.5) exhibits the same
problem whenever the B’s pass through values at which the sorting of observa-
tions between the two types of products changes. Various types of smoothing
have been suggested to cope with this problem. The technique employed by
Goldfeld and Quandt (1972) replaces Di with the approximation




where u2 is a new parameter that has been interpreted as a measure of the extent
to which the approximation can reproduce the exact sorting of the data. Clearly,
other distribution functions might be used in the place of (7.6). Tischler and Zang
(1979) recommend several spline approximations of which the most promising
appears to be the quintic given by




              I1                                  if as 7r’zi,
742                                                                     R. E. Quandt


where (Yis a new (positive) parameter to be determined. In practice both types of
approximation appear to work well.



7.2.    Unbounded likelihood functions and other false optima

Ordinarily the value of the likelihood function is bounded. In certain classes of
models, usually dealing with unobserved or latent variables, the likelihood func-
tion may become unbounded. This is a serious difficulty in that any algorithm
that happens to locate a neighborhood within which the function is unbounded is
likely to break down; moreover, the point or points in parameter space at which
unboundedness occur have no desirable statistical properties. Three examples are
given.
   The first is a case in which unboundedness may occur under special circum-
stances but is unlikely to do so in general. It is the well-known tobit model:

       y; = P’x; + u;     if /Yxi + ui > 0,
       y, = 0             if p’xi + ui 2 0.                                   (7.8)


The likelihood function is


                      (-yi-~‘“i)2)i~[l-@(&q,
       L=H----
            i.El   dkexp                                                      (7.9)


where I and r are the sets of indices for which the two inequalities in (7.8) hold,
respectively, and where @( .) is the standard cumulative normal distribution.
Assume that p has k elements and that the number of elements in I is less than k.
Then if the xi (i E I) are linearly independent, there exists a value p* such that
yi -p*‘xi = 0, i E I. Assume further that /3*‘xi 5 0, i E f; i.e. that p*‘x is a
supporting hyperplane for the convex hull of the xi, i E 1 Then consider the
sequence of points obtained by letting u + 0. The product of terms for i E I
becomes unbounded, whereas the product of terms for i E r remains bounded
away from zero; hence L + CO.
   The second example is the well-known switching regression model [Quandt
(1972), and Quandt and Ramsey (1979)]:

       y, =/3:x,, + uli    with probability A,

       y, = &xl, + uzi     with probability 1 - h.
Ch. 12: Computational Problems                                                 743


The likelihood function with normal errors is


     L=fi [&exp{                      -+(yi-~‘xij2)
               +$$exp(               -f( yim$xir)].                         (7.10)


Choose a j3f such that the k th observation y, - fi:‘x, = 0 and let uf + 0. Then
hexp( - (yk - p*‘xk)*/2e3}/~u,      b ecomes unbounded, but (1 - A)exp{ - ( yi -
P;xi)2/2u,2)/J2 7~a2 remains bounded away from zero for all i; hence L + co.
  The third example is that of a simple disequilibrium model:

     Ylj = Pix,i       +   uliY



     Y*r   =   Pix2i   +   u2i3                                             (7.11)
      Yi   =   ~n(h,         Y2i).



The likelihood function with normal errors and uli and u2i independent is
              r
     L=fii--&exp(                     -+(   Yi-~;xli~)(l-O(   Yi-~x2i))


                                                                            (7.12)


An argument very similar to that employed in the case of the switching regression
model can be used to show that the simple disequilibrium model has an un-
bounded likelihood function [Quandt (1978a)]. In most instances there is an
infinity of points at which the likelihood function becomes unbounded: thus, for
example, j3: in (7.10) can be chosen in infinitely many ways so as to make one
residual exactly equal to zero. No completely satisfactory methods are known to
avoid the computational problems. A device employed frequently is to constrain
the variances by uf = cwuf, where (Yis selected a priori. This guarantees to solve
the computational problem at the cost of introducing m&specification. Other
methods [Hartley, (1977a, 1977b)] have suggested that adaptations of the EM
algorithm may tend to avert the problem. Although the problem is not encoun-
tered very frequently in practice, it must be considered a difficult one.
   Another problem with potentially equally bad computational consequences is
the appearance of “false optima”. A case in point is the likelihood function
corresponding to (7.11) when E(u,~u~~) = u,* + 0. Define rij = (y, - &xi)/uj as a
744                                                                                      R. E. Quandt


normalized residual. Then the following can be shown [Goldfeld and Quandt
(1978)].

(a) If values of p,, &, a:, and uf have been selected such that ril + riZ < 0 for all
i, then the likelihood function increases as the correlation, p, between U, and u2
approaches - 1.

(b) If ri2 - ri, > 0, when exp( - r;:)/uz > exp( - r,:)/a,               and ri2 - ri, < 0 other-
wise, then the likelihood function increases as P -+ 1.

The practical consequences of the result is that if values of parameters happen to
be achieved that satisfy the above conditions during the iterations of an algo-
rithm, then the algorithm may attempt to push the value of p arbitrarily close to
 f 1. Since the likelihood function is not defined at p = f 1, computation normally
fails at some point in such a neighborhood. Such a point is not a true local
maximum since the likehhood function is defined only over the open interval
 - 1~ p < 1, but it may computationally appear as one. There is as yet no obvious
method to guard against the occurrence of this problem. One might wish to
impose constraints so that the inequalities required by the difficulty do not hold.
However, this may be unsatisfactory since the inequalites may be satisfied even if
the true values of the /3’s and u ‘s are substituted.




7.3.   Constraints on the parameters

Classical constrained optimization problems arise if there are equality or inequal-
ity constraints on the parameters arising from the intrinsic aspects of the problem.
A case in point would be the requirement that the exponents of a Cobb-Douglas
production function add to unity. Another example, discussed by MacKinnon
(1979), is when economic considerations require that the Jacobian term in a
likelihood function have a particular sign (even though it is the absolute value of
the Jacobian that enters the likelihood function). Equality constraints, the more
common case, may often be handled adequately by using the constraints to
eliminate variables of optimization from the objective function.i6 In general,
problems of this type need to be handled by the methods of non-linear program-
ming. We briefly discuss only two classes of algorithms.

    16This has the added advantage of reducing the number of variables in the optimization. It follows
that whenever a subset of the first-order condition can be solved for a subset of variables, the
(likelihood) function should be condensed. It is not hard to show that the negative inverse Hessian of
the condensed log-likelihood function is the appropriate estimator of the asymptotic covariance matrix
of the variables that have not been condensed out.
Ch. 12: Computational Problems                                                   145

   Consider the constrained optimization problem:

     maximize      F(x)
     subject to    #;(x) 2 0,    i=l ,..., m.                                (7.13)

If none of the constraints in (7.13) is binding, then an iterative step may be taken
as if one were dealing with an unconstrained problem. If, however, one or more
constraints are binding, the question arises of how to choose a search direction. A
particular approach to this problem is provided by the Rosen gradient projection
method [Rosen (1960, 1961) and Walsh (1975)]. Assume that m, 5 m of the
constraints are binding and consider the subspace spanned by the constraint
gradients v#~, i=l,...,    m,. The key of Rosen’s algorithm is to choose as the
search direction the projection of the gradient of F(x), g, on the orthogonal
complement of the subspace spanned by the VI/J~. Denoting the matrix the
columns of which are v#~ by ‘k, the search direction is d = (I - ‘k( \k’\k)- ‘9’)g.
   A different class of algorithms converts a constrained maximization problem
into a sequence of unconstrained ones. This is usually accomplished by penalizing
the objective function for (near) violations of the constraint by adding to it
penalty or barrier functions [Fiacco and McCormick (1964), Osborne (1972), and
Walsh (1975)]. Thus, one might define &#,,. ..,J/,) = cy=“=,l~gJ/~(x) and con-
sider the unconstrained maximization of

      w= +)+YwbN
for some positive number y. Solve this unconstrained problem repeatedly for a
sequence of y + 0. It can be shown under general conditions that the correspond-
ing sequence of solutions, X, converges to the solution of (7.13). The obvious
advantage of this approach is that it converts the original problem into one which
is generally easier to solve. The disadvantage is that the single constrained
optimization problem has been replaced by a sequence of unconstrained prob-
lems, which can result in high computational cost.
   An interesting variant of this uses an augmented Lagrangean expression [Pierre
and Lowe (1975)]. Consider the standard Lagrangean:

     L(x,a) = F(x)+a’J,(x),                                                  (7.14)

where q(x) is the vector with elements qi(x) and (Ya vector of constants. Form
the augmented Lagrangean

     Jqv,P,,P*) = L( x9a)-P1 C #i(x>2-P2              C       4i(x)2,        (7.15)
                                    i E I,           i E I2
146                                                                       R. E. Quandt


where /3, and & are preassigned weights and where 1, = (i 1(Y~> 0), I, = (i 1(Y~= 0,
and qi(xi) 2 O}. The algorithm alternates between two steps: the maximization
step in which an unconstrained maximum of (7.15) is found and an adjustment
step in which the Lagrange multipliers are adjusted so as to equate the gradient of
the augmented Lagrangean to that of the simple Lagrangean and in which p, and
& may be increased. The procedure obtains its justification from the following:

Theorem 7. I

If x*, cy* solves the appropriate Kuhn-Tucker          conditions, then x* satisfies
sufficient conditions for an unconstrained maximum for L(x, (Y*,/?) and suffi-
ciently large fi if and only if x*, (Y*solves the non-linear programming problem.

   Constraints on the variables can also arise in a different manner. During the
optimization the variables may stray into a region in which the function is not
defined. This may occur in a number of different ways. In maximizing a function
such as (7.10) it is not possible to condense out the variances and an algorithm
may wish to take a trial step that would make a variance negative. Alternatively,
an equation to be estimated may involve functional forms that are defined only
for certain parameter values, say as in y, = log( 1 + axi) + ui. Technically, another
case is provided by a simultaneous linear equation model in which the number of
endogenous and exogenous variables is greater than the number of observations,
in which case the estimated covariance matrix of residuals will be singular and
consequently the likelihood function undefined [Parke (1979)]; in this case,
however, one would not actually attempt optimization.
   At least three ad hoc remedies may be employed, although none of them is
assured of success. First, in some cases it may be possible to reparameterize the
variables. Thus, if in (7.10) u: has a tendency to become negative, one may
replace it by ew. This may exchange one problem for another: in the transformed
space the likelihood function may become very flat. Alternatively, one may
continually test whether the current values of the variables are attempting to enter
a forbidden region and inhibit the algorithm from proceeding in such a direction,
either by returning to the algorithm an extremely unfavorable (pseudo-) function
value associated with the illegitimate point, or by shrinking the step size. The
former technique gives seriously erroneous estimates of derivatives. The latter
may slow down convergence considerably. In spite of these difficulties, these
ad hoc techniques are often employed and often work reasonably well. What must
be stressed, however, is that the latter two may be employed only to guard against
attempts to evaluate the function at points at which it is not defined; they ought
not be used to substitute for general non-linear programming in cases in which
the constraints represent economic restrictions. There is no a priori reason to
believe that just because an algorithm strays into a forbidden region in an
economic sense, the location of the maximum will also be in a forbidden region. If
Ch. 12: Computational   Problems                                               141


several local constrained optima exist, a casual use of the constraint within an
otherwise unconstrained maximization algorithm may well jeopardize locating the
desired point.


8.   Numerical integration

Normally, there are two econometric contexts in which numerical integration
becomes necessary. The first is Bayesian analysis in which, say, the moments
of the posterior density are required. An example is provided by Kloek and
Van Dijk (1978) who deal with the linear simultaneous equation model:

      Yr+ZB=U.                                                               (8.1)
Denoting those elements of r and B that are not constant terms by 8 and the
prior density of 13by p( 0) and assuming (a) that the constant terms have uniform
prior, (b) that the prior of the covariance matrix 2 is of the form 121-(G+‘)/2,
where G is the number of equations, and (c) that the constant terms and
covariance matrix elements have been integrated out, the marginal posterior of 8
can be shown to be proportional to

                                                                             (8.2)

where K(ol Y, Z) depends on the structural parameters other than constant terms
and on the observations. The moments are functions of 8, say g(B), and can be
written as




Kloek and Van Dijk (1978) consider various alternatives for p(d) in a small
model such as the normal and beta distributions for which the integrals in (8.3)
are not available in closed form.
   The second context in which numerical integration is required is in finding
maximum likelihood estimates in models with qualitative dependent variables, i.e.
variables that are endogenous and involve essential elements of discreteness.
Models of this type invariably contain some features that are not observable.
Simple cases in point are the following models, where greek letters denote
parameters, x’s exogenous variables, i indexes observations, and @( 0) denotes the
standard cumulative normal integral.
748                                                                                       R. E. Quandt


(a)   The Probit Model:

      y, = 1    if p’xi + ui > 0,
      y, = 0    otherwise,

where ui - N(0, 1). The likelihood function is




(b)    The Tobit Model which is stated in (7.8) with likelihood function (7.9).
(c) The Simple Disequilibrium Model which is stated in (7.11) with likelihood
function (7.12).
   In all of these likelihood functions @( .) appears which is not available in closed
form. Fortunately, simple and accurate approximations for the cumulative normal
integral exist in the univariate case as given, for example, by the FORTRAN
subroutines ERF and DERF. The problem becomes much more difficult in
problems in which multiple integrals of multivariate densities are required [see
Hausman and Wise (1978)]. An important example is provided by discrete choice
models in which an individual must chose among m possibilities. Let the i th
individual’s utility from choosing altemativej be




where ej = V(Cij, &) represents the systematic part of utility and where Cij are
objective measures of the individual’s and the alternative’s characteristics, /3 are
parameters, and &ijis a random variable. Then the probability that alternative k is
chosen is

      Pik=Pr{sijsqk-q,+eik                      forahjfk}.

If h(Ei,,..., eim) is the joint density of the eij, Pik is


             /-mm/--oo
                   (I,&- Q, + Ei& . . .
      Pik=                                     G’-Gm+Eith(ei ,,..., eim)deim...dci,deik         (8.4)
                                          /
                                              -C0

or

      pik   =/_‘~-“‘e    e   e   lU;k-U;mhk(rli,k,...,~i~k)dqil*...     dnimk,
                                                                                                (8.5)
                                  --oo
Ch. 12: Computational Problem                                                   749


where nijk = eij - &ik and where /zk(.) is the joint density of the (m - 1) qijk.
Hence, with m alternatives, an (m - 1)-fold integral must be evaluated. If there
are n individuals, the likelihood of a sample of observations is




where y,, = 1 if the i th individual chooses alternative j and zero otherwise and
where the Pij are replaced by the expressions in (8.4) or (8.5). Eq. (8.6) must then
be maximized with respect to the parameter vector /3; hence, every function
evaluation requires the evaluation of multiple integrals. If the errors &ij are
multivariate normally distributed with non-diagonal covariance matrix, as is
assumed by Hausman and Wise (1978), the integrals must be obtained numeri-
cally. A similar situation arises in the multimarket disequilibrium model of the
type given in Section 5: in general, the density function for the observable
variables in an m-market disequilibrium model involves an m-fold integral of the
m-variate normal distribution.
   In general, one would expect to make greater demands for accuracy in the case
of likelihood maximization for models with qualitative dependent variables than
in the case of computing the moments of posterior densities. In the latter case it
might be acceptable to have a 10 percent error from the point of view of
providing economic interpretation for the results. In the case of likelihood
maximization an average error of 10 percent in evaluating the likelihood function
is likely to cause serious problems of convergence. Hence, methods that are
suitable for one type of problem are not likely to be suitable for the other. In
what follows we do not distinguish systematically between univariate and multi-
variate integration.


8.1.    Monte Carlo integration

Assume that we require the integral

       I=      bf(x)dx.                                                        (8.7)
            / (1

Let g(x) be a probability density defined over (a, b). Then




and if g(x) is uniform,
750                                                                       R. E. Quandt


If n pointsx,,..., x, are selected randomly, cy=, f( x,)/n converges in probability
to E( f( x)) and I can be approximated by I, defined as

       za   =e i f(Xi).
                     i=l
                                                                                (8.8)

Clearly, E(Ia) = I and 1, is the sum of n i.i.d. random variables with mean 1/n
and variance w2 = (b - a)2a2/n2, where a2 = varf(x,) and may be estimated by
the sample variance. By the Central Limit Theorem, with probability a,

                           (b-a)a
       I&-4$Z,
                                6   ’

where z, satisfies @(z,)- @( - ZJ = a. The error decreases as n-II2 and is
independent of the dimensionality of the integral [Hammersley and Handscomb
(1964) and Shreider (1964)].
   A variance reducing technique is importance sampling. Write (8.7) as




where g(x) is a pdf over (a, b) as before. If points x,, . . . ,x, are generated with
pdf g(x), I is now estimated by

       I.=L$L&
          n
                                                                              (8.10)
                            I




The variance of f(x)/g(x)        can be made to equal zero by setting g(x) =
If(x)I/./:If(x)I  d x, which  is  not practical for it requires knowledge of the
integral in question. As a practical matter, g(x) is chosen so as to make the
variation in f(x)/g(x)   small: the implication is that x will be sampled relatively
more frequently in regions in which f(x) is large or important. Examples of
importance sampling are in Kloek and Van Dijk (1978) and Quandt (1978b).


8.2.    Polynomial approximations

If a function f(x) is approximated by a polynomial of degree n such that the
approximating polynomial agrees with it at n + 1 equally spaced points, it can be
written as


       f(x)=    2 ~k(MXkL
               k=O
Ch. 12: Computational   Problems                                                751


where the X,(x) are the Lagrangean polynomial coefficients. A class of integra-
tion formulae employ the integral of the approximating polynomial and are called
Newton-Cotes      formulae. Simpson’s Rule is a special case of Newton-Cotes
integration. [For an application see Richard and Tompa (1980).]
   Although simple to implement, Newton-Cotes        formulae can be subject to
serious error and there are cases where the approximation does not converge to
the true integral as n + cc. More stable are Gaussian Quadrature formulae using
n points of evaluation for which the approximation is exact if f(x) is polynomial
of degree s 2n - 1 [Hildebrand (1956) and Stroud and Secrest (1966)]. Gaussian
formulae are obtained from approximating polynomials, the coefficients of which
are derived by requiringf(x)   and the approximation to have the same values and
derivatives at n points. In more than one dimension it is customary to take the
Cartesian product of the points calculated by one-dimensional quadrature for-
mulae. If n is the number of points used in one dimension, the integrand will have
to be evaluated at nk points, where k is the multiplicity of the integral; hence,
multidimensional polynomial quadrature formulae tend to be too expensive in
problems such as likelihood function maximization in which the integrals have to
be computed many times. For a bivariate Simpson’s Rule see Zelmer (1971).



8.3.    Evaluation of multivariate normal integrals

Possibly the most common multivariate integration problem is that of integrating
the multivariate normal density. Let N( x )0,Z) be a multivariate normal density
for the k-dimensional vector variable x with mean 0 and covariance matrix 2. We
require


                                                                            (8.1 1)


Many fundamental relations concerning the bivariate, trivariate, and multivarii tte
normal integrals are contained in Johnson and Kotz (1972). The bivariate case
can be handled effectively by using Hausman and Wise’s (1978) modification of a
technique due to Owen (1956). For purposes of the method, one expresses the
bivariate integral as


       Z(h,   k;p) =          ’
                        24 1 - py2

                        x$” /” exp{-+(x2    -2pxy+y2)/(1-p2)}dxdy.
                            --oo -c0
752                                                                                   R. E. Quandr


If this is differentiated with respect to p, it can be integrated with respect to x and
y and the result reintegrated with respect to p. The result is

                                                                h-pk
                                                            k(l-p’)“’

                  ifhk>Oorifhk=OandhorkhO;

   I(h,k;   p)=;@(h)++@(k)-T


                  ifhk<Oorifhk=Oandhork<O,

where




and


      cj=(-q’_   2jl+1
                          [
                              l-exp(-$u2)   i     g
                                            i=o 2’i!   1    .


The Hausman-Wise modification works very fast and is suitable for use in
optimizing likelihood functions.
  Dutt (1976) represents I by Kendall’s tetrachoric series which leads to


            i D:,i+(i)k-2t
 I=(~)k-(f)kp’           t Dz*,jjf                                      0-e   +D:,ij..,k, i< j,
                         i=I                    i=l   k=2


where the individual terms are defined in Dutt (1976) and involve Gaussian
quadratures. The technique is recommended for up to k = 4, beyond which it is
likely to become expensive. Rules of thumb are suggested for selecting the degree
N of the Hermite polynomials needed in the computation of the D*‘s. In practice
it appears that poor choices of N can result either in costly computations or in
poor approximations. In any event, for k 2 3 it is likely to be too expensive a
method if integrals are required repetitively, as when a likelihood function is
being maximized.
   The multivariate normal integral (8.5) gives the probability that maxj[qj - q.,]
 $0. This observation allow5 Daganzo, Bouthelier and Sheffi (1977) to exploit an
Ch. I2: Computational   Problem                                                      153


approximation due to Clark (1961). Consider random variables x,, x2,. . . ,xk
distributed as N(p, E). It is not difficult to obtain exact formulae for
E(max(x,,x,)),    var(max(x,,x,)), and cov(max(x,,~~),xs).     If one were to as-
sume that max(x,, x2) is normally distributed, which it is not, then one can
recursively calculate the moments of max(x,, _. . ,xk) and, by the (incorrect)
distributional assumption, the univariate normal distribution which proxies that
of max(x,,..., xk), from which the required probability is easily obtained. The
behavior of the Clark probabilities is tested by Manski and Lerman (1981) in
choice problems involving three or five alternatives. They compare the computa-
tion of choice probabilities according to this method with a particular Monte
Carlo procedure. The Clark probabilities agree remarkably well with the Monte
Carlo results and are obtained with substantially smaller computational cost. It is
estimated that for comparable accuracy, the Monte Carlo approach may be as
much as 100 times more expensive. However, the Clark approximation tends to
be unsatisfactory when the variances of the x’s are relatively unequal [Danganzo
(1979)]. Why the Clark probabilities are as accurate as they are in other cases,
given that they are derived from a false assumption, is not known.



8.4.   Special cases of the multivariate normal integral

The normal integrals occurring in discrete choice models may have simpler
representations than (8.4) or (8.5) under certain circumstances. Two of these will
be examined briefly [Hausman (1980)]. As before, the subscript i denotes the ith
individual.

Case 1. If all .sij, j.= 1,. . . , m, in (8.4) are i.i.d. normal with mean zero and unit
variance, (8.4) becomes


                                                                                  (8.12)


which is substantially easier to evaluate than (8.4) without the simplifying
assumption, since it requires only a single-dimensional numerical integral [with
@( .) being efficiently evaluated by a partial fraction expansion routinely available
in program libraries].

Case 2.     Consider the special case in which

       Qj = Zij/3,                                                                (8.13)
154                                                                            R. E. Quandi


where z:j is a vector of p observable variables and j3 a coefficient vector. Assume
that j? is a random vector distributed normally with mean p,, and covariance
matrix Es. Let q = (q,, . . . , qm) be normal with mean zero and covariance matrix
EE and independent of p. The probability that the kth alternative is chosen is
then

      Pik = Pr{( zik - zij)‘/3 1 njjk    Vj * k}

           = Pr{ ( zik - zij)‘P, 2 njjk + ( zij - zi,)‘( /3 - /$)   Vj * k}.        (8.14)

Define the right-hand side in the last probability in (8.14) as Eijk. The random
vector Elk = (Eilk,...,Simk) is normal with mean zero and covariance matrix
,ZE= AZ,A' + ZE,Z’, where

                                    -1



                                1   -1
                                    -1
                                    -1


                                    -1

is (m - 1) x m and has zeros except on the main diagonal and the k th column and
where

              (‘il -

           I:
                       ‘i/c)’


      z=

             CZim   “i/c)’
and is (m - 1)x p. If we assume that ,ZB and ZE are both diagonal, it is easy to
verify that 2, can be written as



where ,ZBCkjis the matrix EE from which its k th row and column have been
deletedand Q=(zE2/2:uEI_i), i’=(l      l...l). Let (v,w)‘=(u ,,..., uk_i,uk+ ,,...,
~~tsn,~I,...,~p+I ) be a vector of m +  p elements independently and normally
distributed with mean zero and unit variance. Then
Ch. 12: Compututional    Problems


and substituting on the right, (8.14) becomes




                                                                               (8.15)


If F and G are the distribution functions of scalars v and w, respectively, the
following convolution formula holds [ Marsaglia ( 1963)] :

      Pr{v<c-w}=/Pr{v<c-w]w)dG=E[F(c-w)],

where c is a constant vector and the expectation is taken with respect to G. It
follows that (8.15) is




             ’@
                  ii
                        (‘i, -   'ij)'P,   +   ‘2’ /“e,]xexp{ F)d*,...dt,,,.
                                               I-1
                                                     4jlw,

                                                             i
                                                                               (8.16)

Hence, an (m - 1)-fold numerical integral has been transformed into a ( p + I)-fold
numerical integral which is computationally advantageous if m is relatively large
and p is small. [See Webster (1970) and particularly Hausman (1980) for details
and extensions.]

   It is an open question as to which method of integration of the multivariate
normal density is best in several dimensions from the combined points of view of
accuracy and cost. The issue is even less settled when multivariate integrals of
other density functions are required.


9.   The generation of random numbers

Monte Carlo or sampling experiments are the most common instances in econo-
metrics in which it is necessary to generate (pseudo-) random numbers. An
example is the following problem. Assume that an estimator 8(x,, . . . ,xn) can be
calculated from a sample {x,, . . . , xn}, where the xi are i.i.d. with pdf f(x). If
obtaining the sampling distribution of 4 analytically is an intractable problem,
one may prefer to obtain experimental evidence about its behavior by repeated
simulated drawings of samples of x’s and by examination of the resulting 4 ‘s. In
756                                                                         R. E. Quandr


order to enable one to perform such experiments, one must be able to sample
from arbitrary distributionsf(x)    [Cragg (1968)].
   The present section is devoted to the principal features of generating random
numbers and sampling from various distributions. It deals with the computational
features of various techniques, but not with the principles of the design of
sampling experiments [see, for example, Naylor (1971)]. Among the computa-
tional features of greatest interest are the accuracy with which f(x) is sampled
and the computational cost of the methods.


9.1.    The generation of uniformly distributed variables

A fundamental step in generating a variable, x, with pdf f(x), is first to generate
u distributed uniformly on (0,l). A common method of generating x is based on
the observation that the quantity y = F(x) = /Em f (t) d t is distributed as U(0, 1)
for any continuous f (x). Letting x, y denote random variables and X, jr particular
values, the assertion follows from




Given a sample of u,,..., u, from U(0, l), a corresponding      sample x,, . . .,x,, for
f(x) is obtained by solving

       ui = F( Xi),    i=l ,***,n.                                                (9.1)

Other uses of uniform deviates occur when some other function of uniform
variables has the required distribution (see next subsection for generating nor-
mally distributed variables) or when Monte Carlo integration is to be performed
(see Section 8).
   The most commonly employed generators of U(0,1) variables are based on the
recurrence relation

       Ri+I=hRi+p        (modM),                                                  (9.2)

where X, 1-1,M and R, are integers chosen by the user. Uniform variables are
obtained by calculating Ri+,/M, Ri+2/M, etc. Generators of the form of (9.2)
are congruential generators; they are called mixed or linear if p f 0 and simple or
multiplicative in the reverse case. All generators of type (9.2) have finite periods p
such that Ri+p = R,; the magnitude of p depends on X, CL:and M. It is obviously
desirable to choose these in such a manner as to make p large. The maximal p is
easy to find if M is of the form 2”. For p * 0, the maximalp is 2” and is obtained
if X = 1 (mod 4) and p is odd; for p = 0 the maximal period is 2”-’ if X = 3 or 5
Ch. I?: Computational Problems                                                     151


(mod 8) and R, is odd [Newman and Ode11 (197 l), Chambers (1977), and
Atkinson (1980)]. In practice, for computers with a word-length of 32 bits, M is
frequently chosen to be 231 or 2 3’- 1. The latter is particularly attractive since it
is prime and has period 2 3’- 2 which can be attained if A is a primitive root of M
[Hoaglin (1976)].
   The extent to which numbers R,/M can be thought to have been drawn from
U(0, 1) can be tested by numerous statistical techniques, such as run tests, tests
based on serial correlation properties including computation of the spectral
density function, x*-tests, Kolmogorov-Smirnov        tests, lattice tests, and many
others. None of these may reveal adequately the following number-theoretic fact:
that all n-tuples (Ri+,,..., R,,,)    lie on at most a certain number of parallel
hyperplanes in n-dimensional space. The extent to which the generated numbers
approximate the uniform distribution will depend on the separation between the
hyperplanes which can either be calculated explicitly or approximated from the
n-dimensional spectrum of the Ri. Computations by Hoaglin (1976) indicate that
for M= 231- 1 and p = 0, suitable values of h are 764261123, 1323257245,
 1078318381, 1203248318, 397204094, 2027812808. Comparable information for
M = 23’ does not yet appear to be available.
    Several ways exist to improve the quality of random number generators. A
simple device is to shuffle blocks of k successive random numbers R = ( Ri+ , , . . . ,
Ri+k)) into a set R*= (R*i+,,...,    R*i+k)’ by R* = PR, where P is a permutation
matrix and may itself be altered from time to time. A somewhat more time-con-
suming but desirable technique is shuffling with replacement [Hill and Holland
(1977)]. Two random number sequences R,, . . . , R, and S,, . . . ,S, are generated
from two different congruential generators. Select an integer k and set m = 2k. In
 the present application k will determine storage requirements and normally one
wouldsetk$8.SetT,=R          ,,..., T, = R,. Now examine a predetermined set of k
bits in S, which form an integer j’ such that for j = j’+ 1, 15 j $ m. The first
 random number to be selected is then 5. The content of q is replaced by R,, ,
 and the bits of S, are examined to select a new member of the array T,, . . . , T,.
Thus, elements of the sequence S provide index values for selecting from among
 the elements of T which are then replenished by the next unused element of the
 sequence R .




9.2.   The generation of norma@ distributed variables

Equation (9.1) is cumbersome to solve if F(xi) is the cumulative normal distribu-
tion and various alternative techniques are employed. A method for generating
variables distributed approximately as N(0, 1) is by appealing to the Central Limit
Theorem. The required variable might thus be computed as cl_ ,u,/n -
758                                                                         R. E. Quandt


0.5)/(1/&%).      Thi s method is currently regarded as not being sufficiently
accurate.
   Much more popular are transformations of pairs of uniform variables. One of
the most frequently used of these is the Box-Mtiller transformation yielding two
independent N(0, 1) variables x, and x2 according to the transformation [Box and
Mtiller (1958)]:

      x, = (-210g u1)1’2sin(2ru2),
                                                                                  (9.3)
      x* = (- 210g U,)“2cos(2~U2),

where u, and u2 are independent U(0, 1). The joint pdf of U, and u2 isf(u,, u2) = 1
and the pdf of x, and x2 is g(x,, x2) = lJ_‘(f(u,, u,), where J is the Jacobian
8(x)/a(u).     Its absolute value is easily shown to be ~?T/u,, and it follows that
g(x,, x2) = exp(-(xf     + $)/2}/21r.
   Since (9.3) requires the evaluation of trigonometric functions in addition to
logarithms, the Box-Mtiller method is fairly slow. What is more serious is that the
exact distribution of variables generated from (9.3) with the aid of uniform
variables obtained from a congruential generator such as (9.2) is not normal and
contains 2X discontinuities [Neave (1973)]. A more accurate and faster alternative
to (9.3) is to generate x,, x2 according to the Marsaglia-Bray transformation:




where u, and v2 are U( - 1,1) and are conditioned by V: + ~2”< 1. An argument
similar to that used above verifies that x, and x2 are independent N(0, 1) variables
[Marsaglia and Bray (1964)].
   By far the most effective techniques are the decomposition and the acceptance-
rejection methods, often used in combination. The basic rationale of these
techniques are described by Newman and Ode11 (1971); various details and
computational experience with different methods of this as well as of other types
are given by Ahrens and Dieter (1972) and Kinderman and Ramage (1976).
   Both techniques allow one to exploit the fact that it may be much easier to
generate random variables from one distribution than from another. Assume we
wish to sample from f(x) over some interval (a, b) and that #(x) is some other
pdf over the same interval (from which it may be particularly easy to sample).
Determine a coefficient (Y such that f(x) 5 C@(X) over (a, b). Then we may
sample fromf(x) by the following procedure. (1) Draw an x from +(x), say x (2)
Draw a uniform U(0, I) variate U. If u 6 f(a)/@(Y),          then we accept K Other-
wise we return to the first step. It is clear that the probabilities Pr{x s x0) will be
Ch. 12: Computational Problems                                                     159


proportional to I,“0f(x)dx for all x0 with the factor of proportionality simply
measuring the frequency with which step (2) leads to acceptance of x; hence, an
easy-to-sample distribution is employed, instead of the possibly difficult-to-sam-
ple f(x), to yield the same result.
   An interesting variant is the ratio-of-uniforms method [Robertson and Walls
(1980)]. To sample from pdf f(x), define the region R = {(u,                w)10=<u $
f I”‘( v/u)}. Generate u and 0 uniformly over R. Defining u = y and ZJ= xy, it is
easy to show that v/u is distributed with pdf f (x). The required procedure then is
(1) to generate u and 0, (2) reject (u, u) if (u, u) does not fall in the region R, or
(3) accept (u, v) and form x = u/u otherwise. Efficiency requires that step (2) not
be encountered too often. Robertson and Walls (1980) consider in detail sampling
from the normal, Cauchy, t-, and gamma distributions.
   A similar idea is exploited by decomposition methods in that they replace a
difficult-to-sample distribution with a finite mixture of relatively easy-to-sample
distributions. Consider f(x) and $,(x), with +,(x) being easy-to-sample. Then
choose (Y> 0 such that f(x)- a+,(x) 2 0. Unlessf(x) and +,(x) coincide,

      la (f(x)-      acp,(x))dx      = 1 - (Y> 0.
        -. 00

Hence, defining &(x) = (f(x)-      @,(x))/(l-    CX),it is clear that f(x) = a+,(x)+
(1- (Y)$~(x), an (a, 1- cu) weighted mixture of $P,,+~. If (p,(x) is easily sampled
and if a: can be chosen to be relatively large, we may sample from f( x) efficiently
by generating x from +,(x) with probability (Yand from cpz(x) with probability
1 - (Y.Clearly, the same type of decomposition may be applied to &(x) and a
decomposition scheme may set f(x)=~~_,aj$(x),               O<ol,<l,     j=l,...,m.  A
simple algorithm for sampling from N(0,1) is given by Newman and Ode11(1971).
Let u,, u2, and ug denote independent U(0, 1) variates. The normal density is
decomposed into four components with probabilities

      IY,= 0.8638554642,
      a2 = 0.110817965,
      a3 = 0.002699796063,
      a4 = 0.02262677245.

For each of the four possibilities we generate x as follows:

(1)   x = 2(u, + 242-t f.$ - 1.5).
(2)   x = 1.5(u, + lf2 - 1).
(3) x = the first normal variate from repeated Box-Mtiller       transformations   for
which Ix]> 3.
760                                                                                     R. E. Quandt

(4) Generate x = 6u, - 3 and y = 0.3 181471173~~ repeatedly if necessary until
y 5 q(x), and then accept x, where




                I
                  ae-x’/2-b(3-x2)-c(1.5-~x~),                         lxI< 1,

      #(x) =      ae-x’/2-d(3-~x~)2-c(1.5-~x~)2,                      ljlxl<1.5,

                  se-x2/2 - d(3-        I,x~)~,                       1.5j(x(<3,
                  0,                                                  otherwise,


where a = 15.75192787, b = 4.263583239, c = 1.944694161, and d = 2.1317916185.
More complicated algorithms are described by Kinderman and Ramage (1976)
and by Peterson and Kronmal (1982).



References

Ahrens, J. H. and U. Dieter (1972) “Computer Methods for Sampling from the Exponential and
  Normal Distributions”, Communications of the ACM, 15, 873-882.
Aitcheson, J. and S. D. Silvey (1960) “Maximum Likelihood Estimation Procedures and Associated
  Tests of Significance”, Journal of the Royal Statistical Society, Ser. B, 154- 171.
Atkinson, A. C. ( 1980) “Tests of Pseudo-Random-Numbers”, Applied Statistics, 29, 164- 171.
Bard, Y. (1974) Nonlinear Parameter Estimation. New York: Academic Press.
Beale, E. M. L. (1960) “Confidence Regions in Non-linear Estimation”, Journal of the Royal Statistical
  Society, Ser. B, 22,41-76.
Belsley, D. A. (1974) “Estimation of Systems of Simultaneous Equations and Computational Specifi-
  cations of GREMLIN,” Annals of Economic and Social Measurement, 3, 55 1-6 14.
Belsley, D. A. (1979) “On the Computational Competitiveness of Full Information Maximum
  Likelihood and Three Stage Least Squares in the Estimation of Nonlinear, Simultaneous-Equations
  Models”, Journal of Econometrics, 9, 3 15-342.
Belsley, D. A. (1980) “On the Efficient Computation of the Nonlinear Full-Information Maximum
  Likelihood Estimator”. Technical Renort no. 5. Center for Comnutational Research in Economics
  and Management Science, Vol. II, Cambridge, Mass.
Berman, G. (1979) “Lattice Approximations to the Minima of Functions of Several Variables”,
  Journal of the Association of Computing Machinery, 16, 286-294.
Berndt. E. K., B. H. Hall, R. E. Hall and J. A. Hausman (1974) “Estimation and Inference in
  Nonlinear Structural Models”, Annals of Economic and Social Measurement, 3, 653-666.
Box. G. E. P. and M. E. Miiller (1958) “A Note on the Generation of Random Normal Deviates”.
  Annals of Mathematical Statistics, 26: 610-611.
Brent, R. P. (1973) Algorithms for Minimization without Derivatives. Englewood Cliffs, N.J.: Prentice-
  Hall.
Brown, K. M. and W. B. Gearhart (1971) “Deflation Techniques for the Calculation of Further
  Solutions of a Nonlinear System”, Numerische Mathematik, 16, 334-342.
Broyden, C. G. (1972) “Quasi-Newton Methods”, in: W. Murray (ed.), Numerical Methoa!s for
   Unconstrained Optimization. New York: Academic Press.
Bussinger, P. A. and G. H. Golub (1969) “Singular Value Decomposition of a Complex Matrix”,
  Communications of the ACM, 12, 564-565.’
Camahan, B., H. A. Luther and J. D. Wilkes (1969) Applied Numerical Methods. New York: John
  Wiley & Sons.
Ch. 12: Computational    Problems                                                                  161

Chambers, J. M. (1977) Computational Metho& for Data Analysis. New York: John Wiley & Sons.
Chapman, D. R. and R. C. Fair (1972) “Full-Information Maximum Likelihood Program: User’s
  Guide”, Research Memo. no. 137, Econometric Research Program, Princeton University.
Chow, G. C. (1968) “Two Methods of Computing Full-Information Maximum Likelihood Estimates
  in Simultaneous Stochastic Equations”, Internutional Economic Review, 9, lOC- 112.
Chow, G. C. (1973) “On the Computation of Full Information Maximum Likelihood Estimates for
  Nonlinear Equation Systems”, The Review of Economics and Statistics, LV, 104- 109.
Chow, G. C. (1975) Analysis and Control of Dynamic Economic Systems. New York: John Wiley &
  Sons.
Chow, G. C. and S. B. Megdal(1978) “The Control of Large-Scale Nonlinear Econometric Systems”,
  IEEE   Transactions   on Automatic     Control, AC-23, 344-349.
Clark, C. E. (1961) “The Greatest of a Finite Set of Random Variables”, Operations Research, 9,
  145-162.
Cragg, J. C. (1968) “Some Effects of Incorrect Specifications on the Small Sample Properties of
  Several Simultaneous-Equation Estimators”, International Economic Review, 9, 63-86.
Dagenais, M. G. (1978) “The Computation of FIML Estimates as Iterative Generalized Least Squares
  Estimates in Linear and Nonlinear Simultaneous Equations Models”, Econometrica, 46, 135 I- 1362.
Daganzo, C. F. (1979) Multinomial Probit. New York: Academic Press.
Daganzo, C. F., F. Bouthelier and Y. Sheffi (1977) “Multinomial Probit and Qualitative Choice: A
  Computationally Efficient Algorithm”, Transportation Science, II, 339-358.       ’
Davidon, W. C. (1959) “Variable Metric Method for Minimization”, AEC Research and Development
  Report ANL-5990 (Rev.).
Davidon, W. C. (1975) “Optimally Conditioned Optimization Algorithms Without Line Searches”,
  Mathematical     Programming,     9, I-30.
Dempster, A. P., N. M. Laird and D. B. Rubin (1977) “Maximum Likelihood from Incomplete Data
  via the EM Algorithm”, Journal of the Royal Statistical Society, Ser. B, 39, l-38.   -
Dennis, J. E. Jr., D. M. Gay and R. E. Welsch (1979) “An Adaptive Nonlinear Least-Squares
  Algorithm”, Technical Report TR-1, Alfred T. Sloan School of Management, Massachusetts
  Institute of Technology.    _
Dennis, J. E. and J. J. More (1977) “Quasi-Newton Methods, Motivation and Theory”, SIAM Review,
  9, 46-89.
Dent, W. T. (1976) “Information         and Computation in Simultaneous Equation Systems”, Journal of
  Econometrics,    4, 89-95.
Dent, W. T. (1977) “On Numerical Computation in Simultaneous Equation Systems”, Annals of
  Economic and Social Measurement, 6, 123-125.
Dent, W. T. (1980) “On Restricted Estimation in Linear Models”, Journal of Econometrics, 12,49-58.
Dhrymes, P. J. (1978) Introductory Econometrics. New York: Springer-Verlag.
Drud, A. (1977/78) “An Optimization Code for Nonlinear Econometric Models Based on Sparse
  Matrix Techniques and Reduced Gradients”, Annals of Economic and Social Measurement, 6,
  563-580.
Duesenberry, J. S., G. Fromm, L. R. Klein and E. Kuh (eds.) (1969) The Brookings Model: Some
  Further Results. Chicago: Rand McNally.
Dutt, J. E. (1976) “Numerical Aspects of Multivariate Normal Probabilities in Econometric Models”,
  Annals of Economic and Social Measurement,         5, 547-561.
Fair, R. C. (1974a) “On the Robust Estimation of Econometric Models”, Annals of Economic and
  Social Measurement,     3, 661-678.
Fair, R. C. (1974b) “On the Solution of Optimal Control Problems as Maximization Problems”,
  Annals of Economic and Social Measurement,         3, 135- 154.
Fair, R. C. (1916) A Model of Macroeconomic Activity, Volume II: The Empirical Model. Cambridgi:
  Ballinger.
Fair, R. C. (1979) “An Analysis of a Macro-economic Model with Rational Expectations in the Bond
  and Stock Markets”, American Economic Reviao, 69, 539-552.
Fair, R. C. (1980a) “Estimating the Expected Predictive Accuracy of Econometric Models”, Interna-
  tional Economic Review, 21, 701-724.
Fair, R. C. (1980b) “Estimating the Uncertainty of Policy Effects in Nonlinear Models”, Econometrica,
  48, 1381-1391.
162                                                                                       R. E. Quandt

Fair, R. C. and W. R. Parke (1980) “Full Information Estimates of a Nonlinear Macroeconomic
  Model”, Journal of Econometrics, 13, 269-292.
Fiacco, A. V. and G. P. McCormick (1964) “Sequential Unconstrained Minimization Technicme for
  Nonlinear Programming, A Primal-Dual Method”, Management Science, IO, 36 I-366.      -
Fletcher, R. (1965) “Function Minimization Without Evaluating Derivatives-A Review”. Comouter
                                                                                         1
  Journul,    8,‘33-41.
Fletcher, R. and M. J. D. Powell (1963)“A Rapidly Convergent Descent Method for Minimization”,
  Computer Journal, 6, 163-168.
Fromm, G. and L. R. Klein (1969) “Solutions of the Complete System,” in: J. S. Duesenberry, G.
  Fromm, L. R. Klein and E. Kuh (eds.), The Brookings Model: Some Further Results. Chicago: Rand
  McNally.
Gallant, R. A. and T. M. Gerig (1980) “Computations for Constrained Linear Models”, Journal of
  Econometrics, 12, 59-84.
Goldfeld, S. M. and R. E. Quandt (I 972) Nonlinear Methods in Econometrics. Amsterdam: North-Hol-
  land Publishing Co.
Goldfeld, S. M. and R. E. Quandt (I 978) “Some Properties of the Simple Disequilibrium Model with
  Covariance”, Economics Letters, 1, 341-346.
Goldfeld, S. M., R. E. Quandt and H. F. Trotter (1966) “Maximization by Quadratic Hill-Climbing”,
  Econometrica,     34, 541-55 1.
Goldfeld, S. M., R. E. Quandt and H. F. Trotter (1968) “Maximization by Improved Quadratic
  Hill-Climbing and Other Methods”, Research Memo no. 95, Econometric Research Program,
  Princeton University.
Goldfeld, S. M. and R. E. Quandt (1979) “Recent Problems and Advances in Estimating Disequi-
  librium Models”, Paper given at the Western Economic Association Meeting, Las Vegas.
Golub, G. H. (1969) “Matrix Decompositions and Statistical Calculations”, in: Statistical Computa-
  tion. New York: Academic Press, pp. 365-397.
Greenstadt, J. (1967) “On the Relative Efficiencies of Gradient Methods”, Mathematics of Computa-
  tion, 21, 360-367.
Guttman, I. and D. A. Meeter (1965) “On Beale’s Measures of Non-Linearity”,          Technometrics,   7,
  623-637.
Hammersley, J. M. and D. C. Handscomb (1964) Monte Carlo Methods. London: Methuen.
Hartlev. M. J. (1977a) “On the Estimation of a General Switchina Regression Model Via Maximum
  Likelihood Methods”, Discussion Paper 415, Dept. of Economic;, State University of New York at
  Buffalo.
Hartley, M. J. (1977b) “On the Calculation of the Maximum Likelihood Estimator for a Model of
  Markets in Disequilibrium”, Discussion Paper 409, Dept. of Economics, State University of New
  York at Buffalo.
Hausman, J. A. (I 980) “ Les Modeles Probit de Choix Qualitatifs”, Cahiers du Seminaire d ‘Economitrie,
  21, 11-31.
Hausman, J. A. and D. A. Wise (1978) “A Conditional Probit Model For Qualitative Choice: Discrete
  Decisions Recognizing Interdependence and Heterogeneous Preferences”, Econometrica,         46,
  403-426.
Hendry, D. F. (1976) “The Structure of Simultaneous Equation Estimators”, Journal of Econometrics,
  4, 51-88.
Hendry, D. F. (1977) “Numerical Optimization Methods”, London School of Economics, mimeo.
Hildebrand, F. B. (I 956) Introduction to Numerical Analysis. New York: McGraw-Hill.
Hill, R. W. and P. W. Holland (1977) “Two Robust Alternatives to Least-Squares Regression”,
  Journal of the American    Statistical Association,   72, 828-833.
Hoaglin, D. C. (1976) “Theoretical Properties of Congruential Random Number Generators: An
   Empirical View”, Department of Statistics, Memo. Ng340, Harvard University.
Hoffman. K. and R. Kunze (1961) Lineur Algebra. Enelewood Cliffs. N.J.: Prentice-Hall.
Huang, H. Y. (1970) “Unified approach to Quad&ally             Convergent Algorithms for Function
   Minimization”, Journal of Optimization Theory and Applications, 5, 405-423.
Ito, T., (1980) “Methods of Estimation for Multimarket Disequilibrium Models”, Econometrica, 48,
  97-126.
Jennings, L. S. (1980) “Simultaneous Equations Estimation”, Journal of Econometrics,    12, 23-39.
Ch. 12: Computational      Problems                                                                                   763

Johnson, N. L. and S. Kotz (1972) Distributions in Statistics: Continuous Multivariate Distributions.
   New York: John Wiley & Sons.
Jorgenson, D. W. and J. J. Laffont (1974) “Efficient Estimation of Nonlinear Simultaneous                     Equations
   with Additive Disturbances”,        Annals of Economic and Social Meusurement, 3, 615-641.
Kiefer, N. M. (1980) “A Note on Switching Regressions and Logistic Discrimination”,                       Econometrica,
   48, 1065-1069.
Kinderman,      A. J. and J. G. Ramage (1976) “Computer              Generation     of Normal Random Variables”,
   Journal of the American Statistical Association, 71, 893-896.
Klema, V. (1973) “A Note on Matrix Factorization”,                 Annals of Economic and Social Measurement,
   2/3, 317-321.
Kloek, T. and H. K. van Dijk (1978) “Bayesian                  Estimates of Equation         Systems Parameters:       An
   Application     of Integration by Monte Carlo”, Econometrica, 46, I- 19.
Lootsma, F. A. (ed.) (1972) Numerical Methods for Non-Linear Optimization. New York: Academic
   Press.
MacKinnon,       J. G. (I 979) “Convenient      Singularities and Maximum Likelihood Estimation”,               Econom-
   ics Letters, 3, 41-44.
Maddala, G. S. (1971) “The Use of Variance Components                  Models in Pooling Cross Section and Time
   Series Data”, Econometrica, 39, 341-358.
Manski, C. F. and S. R. Lerman (1981) “On the Use of Simulated Frequencies                             to Approximate
   Choice Probabilities”,       in: C. F. Manski and D. McFadden             (eds.), Structural Analysis of Discrete
   Data (with Econometric Applications). Cambridge, MA: MIT Press.
Marsaglia, G. (1963) “Expressing         the Normal Distribution       with Covariance Matrix A + B in Terms of
   One with Covariance Matrix A”, Biometrika, 50, 535-538.
Marsaglia,     G. and T. A. Bray (1964) “A Convenient               Method for Generating         Normal Variables”,
   SIAM Review, 6,260-264.
Marquardt,      D. W. (1963) “An Algorithm          for Least Squares Estimation          of Nonlinear     Parameters”,
   SIAM Journal, 11, 431-441.
McCarthy,      M. D. and C. J. Palash (1977) “The Use of Almon- and Other Dummy-Variable
   Procedures to Increase the Efficiency of Maximization            Algorithms in Economic Control”, Annals of
   Economic and Social Measurement, 6, 225-230.
Murray, W. (1972) Numerical Methoa!s for Unconstrained Optimization. New York: Academic Press.
Naylor, T. H. (1971) Computer Simulation Experiments with Models of Economic Systems. New York:
   John Wiley & Sons.
Neave, H. R. (1973) “On Using the Box-Miiller                 Transformation      with Multiplicative      Congruential
   Pseudo-random       Number Generators”,        Applied Statistics, 22, 92-97.
Nelder, J. A. and R. Mead (1965) “A Simplex Method for Function Minimization”,                      Computer Journal,
   7, 308-313.
Newman, T. G. and P. L. Ode11 (1971) The Generation of Random Variates. New York: Hafner.
Oren, S. S. and D. G. Luenberger               (1974) “Self Scaling Variable Metric Algorithms,                 Part I”,
   Management Science, 20, 845-862.
Osborne, M. R. (1972) “On Penalty and Barrier Function Methods in Mathematical                          Programming”,
   in: S. Andersen, L. S. Jennings and D. M. Ryan (eds.), Optimization.                      St. Lucia: University of
   Queensland Press.
Owen, D. B. (I 956) “Tables for Computing Bivariate Normal Probabilities”,                    Annals of Mathematical
   Statistics, 27, 1075-1090.
Parke, W. R. (1979) “An Algorithm              for Full Information        Estimation”,     Ph.D. Dissertation,     Yale
   University.
Parkinson, J. M. and D. Hutchinson           (1972) “An Investigation       into the Efficiency of Variants on e
   Simplex Method,” in: F. A. Lootsman (ed.), Numerical Method% for Non-Linear Optimization. New
   York: Academic Press.
Peterson, A. V. and R. A. Kronmal (1982) “On Mixture Methods for the Computer Generation                                of
   Random Variables”, The American Statistician, 36, I84- 191.
Pierre, D. A. and M. J. Lowe (1975) Mathematical                    Programming        Via Augmented Lagrangians.
   Reading, MA: Addison-Wesley.
Powell, M. J. D. (1964) “An Efficient Method for Finding the Minimum of a Function of Several
   Variables without Calculating Derivatives”, Computer Journal, 7, 155- 162.
764                                                                                     R. E. Quandt

Powell, M. J. D. (1971) “Recent Advances in Unconstrained Optimization”, Mathematical Progrum-
  ming, I, 26-57.
Powell, M. J. D. ( 1973) “ On Search Directions for Minimization Algorithms”, Mathematical Program-
  ming, 4, 193-201.
Powell, M. J. D. (1976) “Some Convergence Properties of the Conjugate Gradient Method”,
   Muthemuticul Progrumming, 11,42-49.
Quandt, R. E. (1972) “A New Approach to Estimating Switching Regressions”, Journal of the
  American Statistical Association, 67, 306-310.
Quandt, R. E. (1978a) “Maximum Likelihood Estimation of Disequilibrium Models”, in: Pioneering
  Economics. Padova: Cedam.
Quandt, R. E. (1978b) “Tests of the Equilibrium vs. Disequilibrium Hypotheses”, International
  Economics Review, 19,435-452.
Quandt, R. E. and J. B. Ramsey (1978) “Estimating Mixtures of Normal Distributions and Switching
  Regressions”, Journal of the American Statistical Association, 73, 730-752.
Rao, C. R. (1973)Linear Statistical Inference und Its Applications (2nd edn.). New York: John Wiley &
   Sons.
Richard, J. F. and H. Tompa (1980) “On the Evaluation of Poly-t Density Functions”, Journul of
   Econometrics, 12, 335-352.
Riddell, W. C. (1975) “Recursive Estimation Algorithms for Economic Research”, Annuls of Economic
  and Social Measurement, 4, 397-406.
Robertson, I. and L. A. Walls (1980) “Random Number Generators for the Normal and Gamma
   Distributions Using the Ratio of Uniforms Method”, AERE-R 10032, Computer Science and
   Systems Division, AERE Harwell.
Rosen, J. B. (1960) “The Gradient Projection Method for Nonlinear Programming, Part I. Linear
   Constraints”, Journal of the Society of Industrial and Applied Mathematics, 8, 181-217.
Rosen, J. B. (196 1) “The Gradient Projection Method for Nonlinear Programming, Part II. Nonlinear
   Constraints”, Journal of the Society of Industrial and Applied Mathematics, 9, 5 14-532.
Rothenberg, T. J. and C. T. Leenders (1964) “Efficient Estimation of Simultaneous Equation
   Systems”, Econometricu, 32, 57-76.
Salmon, M. (1978)“The Detection of Successive Solutions to Nonlinear Econometric Models”, CRES
  Working Paper R/WP 30, ISSN 0313 7414.
Schmidt, P. (1976) Econometrics. New York: Marcel Dekker.
Shreider, Y. A. (1964) Method of Statistical Testing. Amsterdam: Elsevier.
Spang, H. A., III (1962) “A Review of Minimization Techniques for Nonlinear Functions”, SIAM
   Review, 4, 343-365.
Stewart, G. W. III (1967) “A Modification of Davidon’s Minimization Method to Accept Difference
  Approximation of Derivatives” Journul of the Association of Computing Machinery, 14, 72-83.
Stroud, A. H. and D. Secrest (1966) Gaussian Quadrature Formulas. Englewood Cliffs: Prentice-Hall.
Swarm, W. H. (1972) “Direct Search Methods”, in: W. Murray (ed.), Numerical Methods for
   Unconstrained Optimization. New York: Academic Press, pp. 13-28.
Theil, H. (1971) Principles of Econometrics. New York: John Wiley & Sons.
Tischler, A. and I. Zang (1977) “Maximum Likelihood Method for Switching Regression Models
   Without A Priori Conditions”, Tel Aviv University.
Tischler, A. and I. Zang (1979) “A Switching Regression Method Using Inequality Conditions”,
  Journal of Econometrics, 11, 259-274.
Van der Hoek, G. and M. W. Dijkshoom (1979) “A Numerical Comparison of Self Scaling Variable
   Metric Algorithms”, Report 7910/O, Erasmus University, Rotterdam.
Walsh, G. R. (1975) Methouk of Optimization. New York: John Wiley & Sons.
Wampler, R. H. (1980) “Test Procedures and Test Problems for Least Squares Algorithms”, Journal of
   Econometrics, 12, 3-22.
Webster, J. T. (1970) “On the Application of the Method of Das in Evaluating a Multivariate Normal
   Integral”, Biometrika, 57, 657-660.
Zangwill, W. I. (1967) “Mi mmizing a Function without Calculating Derivatives”, Computer Journal,
   10, 293-296.
Zellner, A. (I 97 I) An Introduction to Bayesian Inference in Econometrics. New York: John Wiley &
   Sons.



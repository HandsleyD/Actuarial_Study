---
normalized_id: shared-pdf-reference-prieve-a-course-in-fluid-mechanics-with-vector-field-theory
exam_code: SHARED
material_scope: prieve - a course in fluid mechanics with vector field theory.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Prieve - A Course in Fluid Mechanics with Vector Field Theory.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-prieve-a-course-in-fluid-mechanics-with-vector-field-theory

      A Course in Fluid Mechanics
       with Vector Field Theory
                                     by

                        Dennis C. Prieve
               Department of Chemical Engineering
                   Carnegie Mellon University
                     Pittsburgh, PA 15213




An electronic version of this book in Adobe PDF® format was made available to
           students of 06-703, Department of Chemical Engineering,
                     Carnegie Mellon University, Fall, 2000.




                   Copyright © 2000 by Dennis C. Prieve
06-703                                                                                        1                                                                             Fall, 2000


                                                                       Table of Contents

ALGEBRA OF VECTORS AND TENSORS ..............................................................................................................................1
    VECTOR M ULTIPLICATION ...................................................................................................................................................... 1
      Definition of Dyadic Product..............................................................................................................................................2
    DECOMPOSITION INTO SCALAR COMPONENTS.................................................................................................................... 3
    SCALAR FIELDS........................................................................................................................................................................... 3
    GRADIENT OF A SCALAR ........................................................................................................................................................... 4
      Geometric Meaning of the Gradient..................................................................................................................................6
      Applications of Gradient.....................................................................................................................................................7
    CURVILINEAR COORDINATES ................................................................................................................................................... 7
      Cylindrical Coordinates .....................................................................................................................................................7
      Spherical Coordinates.........................................................................................................................................................8
    DIFFERENTIATION OF VECTORS W.R.T . SCALARS................................................................................................................ 9
    VECTOR FIELDS......................................................................................................................................................................... 11
      Fluid Velocity as a Vector Field......................................................................................................................................11
    PARTIAL & M ATERIAL DERIVATIVES.................................................................................................................................. 12
CALCULUS OF VECTOR FIELDS ............................................................................................................................................14
    GRADIENT OF A SCALAR (EXPLICIT ).................................................................................................................................... 14
    DIVERGENCE , CURL , AND GRADIENT .................................................................................................................................... 16
      Physical Interpretation of Divergence............................................................................................................................16
      Calculation of ∇.v in R.C.C.S.........................................................................................................................................16
      Evaluation of ∇×v and ∇v in R.C.C.S............................................................................................................................18
      Evaluation of ∇.v, ∇×v and ∇v in Curvilinear Coordinates ...................................................................................19
      Physical Interpretation of Curl........................................................................................................................................20
VECTOR FIELD THEORY...........................................................................................................................................................22
    DIVERGENCE THEOREM........................................................................................................................................................... 23
      Corollaries of the Divergence Theorem..........................................................................................................................24
      The Continuity Equation...................................................................................................................................................24
      Reynolds Transport Theorem............................................................................................................................................26
    STOKES THEOREM.................................................................................................................................................................... 27
      Velocity Circulation: Physical Meaning .......................................................................................................................28
    DERIVABLE FROM A SCALAR POTENTIAL ........................................................................................................................... 29
    THEOREM III.............................................................................................................................................................................. 31
    TRANSPOSE OF A TENSOR, IDENTITY TENSOR .................................................................................................................... 31
    DIVERGENCE OF A TENSOR ..................................................................................................................................................... 32
INTRODUCTION TO CONTINUUM MECHANICS*.............................................................................................................34
    CONTINUUM HYPOTHESIS...................................................................................................................................................... 34
    CLASSIFICATION OF FORCES................................................................................................................................................... 36
HYDROSTATIC EQUILIBRIUM................................................................................................................................................37

FLOW OF IDEAL FLUIDS ..........................................................................................................................................................37
    EULER'S EQUATION .................................................................................................................................................................. 38
    KELVIN'S THEOREM.................................................................................................................................................................. 41
    IRROTATIONAL FLOW OF AN INCOMPRESSIBLE FLUID..................................................................................................... 42
       Potential Flow Around a Sphere .....................................................................................................................................45
       d'Alembert's Paradox.........................................................................................................................................................50


                                                            Copyright © 2000 by Dennis C. Prieve
06-703                                                                                         2                                                                              Fall, 2000
STREAM FUNCTION...................................................................................................................................................................53
    TWO-D FLOWS .......................................................................................................................................................................... 54
    A XISYMMETRIC FLOW (CYLINDRICAL)............................................................................................................................... 55
    A XISYMMETRIC FLOW (SPHERICAL).................................................................................................................................... 56
    ORTHOGONALITY OF ψ=CONST AND φ=CONST ................................................................................................................... 57
    STREAMLINES, PATHLINES AND STREAKLINES ................................................................................................................. 57
    PHYSICAL M EANING OF STREAMFUNCTION ....................................................................................................................... 58
    INCOMPRESSIBLE FLUIDS ........................................................................................................................................................ 60
VISCOUS FLUIDS ........................................................................................................................................................................62
    TENSORIAL NATURE OF SURFACE FORCES.......................................................................................................................... 62
    GENERALIZATION OF EULER'S EQUATION........................................................................................................................... 66
    M OMENTUM FLUX................................................................................................................................................................... 68
    RESPONSE OF ELASTIC SOLIDS TO UNIAXIAL STRESS ....................................................................................................... 70
    RESPONSE OF ELASTIC SOLIDS TO PURE SHEAR................................................................................................................. 72
    GENERALIZED HOOKE'S LAW ................................................................................................................................................. 73
    RESPONSE OF A VISCOUS FLUID TO PURE SHEAR ............................................................................................................... 75
    GENERALIZED NEWTON 'S LAW OF VISCOSITY.................................................................................................................... 76
    NAVIER-STOKES EQUATION ................................................................................................................................................... 77
    BOUNDARY CONDITIONS ........................................................................................................................................................ 78
EXACT SOLUTIONS OF N-S EQUATIONS ...........................................................................................................................80
    PROBLEMS WITH ZERO INERTIA ........................................................................................................................................... 80
      Flow in Long Straight Conduit of Uniform Cross Section..........................................................................................81
      Flow of Thin Film Down Inclined Plane ........................................................................................................................84
    PROBLEMS WITH NON-ZERO INERTIA.................................................................................................................................. 89
      Rotating Disk* ....................................................................................................................................................................89
CREEPING FLOW APPROXIMATION ...................................................................................................................................91
    CONE-AND-PLATE VISCOMETER ........................................................................................................................................... 91
    CREEPING FLOW A ROUND A SPHERE (Re→0).................................................................................................................... 96
      Scaling ..................................................................................................................................................................................97
      Velocity Profile....................................................................................................................................................................99
      Displacement of Distant Streamlines ........................................................................................................................... 101
      Pressure Profile................................................................................................................................................................ 103
    CORRECTING FOR INERTIAL TERMS.................................................................................................................................... 106
    FLOW A ROUND CYLINDER AS RE→0 ................................................................................................................................. 109
BOUNDARY-LAYER APPROXIMATION............................................................................................................................ 110
    FLOW A ROUND CYLINDER AS Re→ ∞................................................................................................................................ 110
    M ATHEMATICAL NATURE OF BOUNDARY LAYERS ........................................................................................................ 111
    M ATCHED-A SYMPTOTIC EXPANSIONS.............................................................................................................................. 115
    MAE’ S A PPLIED TO 2-D FLOW A ROUND CYLINDER...................................................................................................... 120
       Outer Expansion .............................................................................................................................................................. 120
       Inner Expansion............................................................................................................................................................... 120
       Boundary Layer Thickness............................................................................................................................................. 120
    PRANDTL’S B.L. EQUATIONS FOR 2-D FLOWS ................................................................................................................... 120
    A LTERNATE M ETHOD: PRANDTL’S SCALING THEORY .................................................................................................. 120
    SOLUTION FOR A FLAT PLATE ............................................................................................................................................ 120
       Time Out: Flow Next to Suddenly Accelerated Plate................................................................................................ 120
       Time In: Boundary Layer on Flat Plate....................................................................................................................... 120
       Boundary-Layer Thickness ............................................................................................................................................ 120
       Drag on Plate ................................................................................................................................................................... 120


                                                             Copyright © 2000 by Dennis C. Prieve
06-703                                                                                          3                                                                               Fall, 2000
     SOLUTION FOR A SYMMETRIC CYLINDER......................................................................................................................... 120
       Boundary-Layer Separation.......................................................................................................................................... 120
       Drag Coefficient and Behavior in the Wake of the Cylinder................................................................................... 120
THE LUBRICATION APPROXIMATION............................................................................................................................. 157
     TRANSLATION OF A CYLINDER A LONG A PLATE ............................................................................................................ 163
     CAVITATION............................................................................................................................................................................ 166
     SQUEEZING FLOW .................................................................................................................................................................. 167
     REYNOLDS EQUATION ........................................................................................................................................................... 171
TURBULENCE............................................................................................................................................................................ 176
     GENERAL NATURE OF TURBULENCE .................................................................................................................................. 176
     TURBULENT FLOW IN PIPES................................................................................................................................................. 177
     TIME-SMOOTHING.................................................................................................................................................................. 179
     TIME-SMOOTHING OF CONTINUITY EQUATION .............................................................................................................. 180
     TIME-SMOOTHING OF THE NAVIER-STOKES EQUATION ................................................................................................ 180
     A NALYSIS OF TURBULENT FLOW IN PIPES........................................................................................................................ 182
     PRANDTL’S M IXING LENGTH THEORY ............................................................................................................................... 184
     PRANDTL’S “UNIVERSAL” VELOCITY PROFILE................................................................................................................. 187
     PRANDTL’S UNIVERSAL LAW OF FRICTION ....................................................................................................................... 189
ELECTROHYDRODYNAMICS............................................................................................................................................... 120
     ORIGIN OF CHARGE ................................................................................................................................................................. 120
     GOUY-CHAPMAN M ODEL OF DOUBLE LAYER.................................................................................................................. 120
     ELECTROSTATIC BODY FORCES........................................................................................................................................... 120
     ELECTROKINETIC PHENOMENA .......................................................................................................................................... 120
     SMOLUCHOWSKI'S A NALYSIS (CA. 1918)............................................................................................................................. 120
     ELECTRO-OSMOSIS IN CYLINDRICAL PORES...................................................................................................................... 120
     ELECTROPHORESIS ................................................................................................................................................................. 120
     STREAMING POTENTIAL ....................................................................................................................................................... 120
SURFACE TENSION ................................................................................................................................................................. 120
     M OLECULAR ORIGIN.............................................................................................................................................................. 120
     BOUNDARY CONDITIONS FOR FLUID FLOW ...................................................................................................................... 120
INDEX........................................................................................................................................................................................... 211




                                                              Copyright © 2000 by Dennis C. Prieve
06-703                                               1                                           Fall, 2000


                         Algebra of Vectors and Tensors
    Whereas heat and mass are scalars, fluid mechanics concerns transport of momentum, which is a
vector. Heat and mass fluxes are vectors, momentum flux is a tensor. Consequently, the mathematical
description of fluid flow tends to be more abstract and subtle than for heat and mass transfer. In an
effort to make the student more comfortable with the mathematics, we will start with a review of the
algebra of vectors and an introduction to tensors and dyads. A brief review of vector addition and
multiplication can be found in Greenberg,♣ pages 132-139.

Scalar - a quantity having magnitude but no direction (e.g. temperature, density)

Vector - (a.k.a. 1st rank tensor) a quantity having magnitude and direction (e.g. velocity, force,
                momentum)

(2nd rank) Tensor - a quantity having magnitude and two directions (e.g. momentum flux,
              stress)


VECTOR MULTIPLICATION
    Given two arbitrary vectors a and b, there are three types of vector products
are defined:

                   Notation      Result     Definition

Dot Product           a.b         scalar     ab cosθ

Cross Product         a×b         vector    absinθn

where θ is an interior angle (0 ≤ θ ≤ π ) and n is a unit vector which is normal to both a and b. The
sense of n is determined from the "right-hand-rule"♦

Dyadic Product         ab         tensor




♣ Greenberg, M.D., Foundations Of Applied Mathematics, Prentice-Hall, 1978.

♦ The “right-hand rule”: with the fingers of the right hand initially pointing in the direction of the first
vector, rotate the fingers to point in the direction of the second vector; the thumb then points in the
direction with the correct sense. Of course, the thumb should have been normal to the plane containing
both vectors during the rotation. In the figure above showing a and b, a×b is a vector pointing into the
page, while b×a points out of the page.

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                               2                                          Fall, 2000

In the above definitions, we denote the magnitude (or length) of vector a by the scalar a. Boldface will
be used to denote vectors and italics will be used to denote scalars. Second-rank tensors will be
denoted with double-underlined boldface; e.g. tensor T.


Definition of Dyadic Product

    Reference: Appendix B from Happel & Brenner.♥ The word “dyad” comes from Greek: “dy”
means two while “ad” means adjacent. Thus the name dyad refers to the way in which this product is
denoted: the two vectors are written adjacent to one another with no space or other operator in
between.

     There is no geometrical picture that I can draw which will explain what a dyadic product is. It's best
to think of the dyadic product as a purely mathematical abstraction having some very useful properties:

Dyadic Product ab - that mathematical entity which satisfies the following properties (where a,
            b, v, and w are any four vectors):

1. ab.v = a(b.v) [which has the direction of a; note that ba.v = b(a.v) which has the direction of
   b. Thus ab ≠ ba since they don’t produce the same result on post-dotting with v.]

2. v.ab = (v.a)b [thus v.ab ≠ ab.v]

3. ab×v = a(b×v) which is another dyad

4. v×ab = (v×a)b

5. ab:vw = (a.w)(b.v) which is sometimes known as the inner-outer product or the double-dot
   product.*

6. a(v+w) = av+aw (distributive for addition)

7. (v+w)a = va+wa

8. (s+t)ab = sab+tab (distributive for scalar multiplication--also distributive for dot and cross
   product)

9. sab = (sa)b = a(sb)




♥ Happel, J., & H. Brenner, Low Reynolds Number Hydrodynamics, Noordhoff, 1973.

* Brenner defines this as (a. v)(b. w).Although the two definitions are not equivalent, either can be
used -- as long as you are consistent. In these notes, we will adopt the definition above and ignore
Brenner's definition.

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  3                                            Fall, 2000

DECOMPOSITION INTO SCALAR COMPONENTS
    Three vectors (say e 1, e 2, and e 3) are said to be linearly independent if none can be expressed
as a linear combination of the other two (e.g. i, j, and k). Given such a set of three LI vectors, any
vector (belonging to E3) can be expressed as a linear combination of this basis:

                                          v = v 1e 1 + v 2e 2 + v 3e 3

where the v i are called the scalar components of v.                       Usually, for convenience, we choose
orthonormal vectors as the basis:


                                         e i.e j = δ ij =
                                                            RS1 if i = j
                                                             T0 if i ≠ j
although this is not necessary. δ ij is called the Kronecker delta. Just as the familiar dot and cross
products can written in terms of the scalar components, so can the dyadic product:

                              vw = (v 1e 1+v 2e 2+v 3e 3)(w1e 1+w2e 2+w3e 3)

                                    = (v 1e 1)(w1e 1)+(v 1e 1)(w2e 2)+ ...

                                 = v 1w1e 1e 1+v 1w2e 1e 2+ ... (nine terms)

where the e ie j are nine distinct unit dyads. We have applied the definition of dyadic product to
perform these two steps: in particular items 6, 7 and 9 in the list above.

More generally any nth rank tensor (in E3) can be expressed as a linear combination of the 3n unit n-
ads. For example, if n=2, 3n=9 and an n-ad is a dyad. Thus a general second-rank tensor can be
decomposed as a linear combination of the 9 unit dyads:

              T = T11e 1e 1+T12e 1e 2+ ... = Σ i=1,3Σ j=1,3Tije ie j

Although a dyad (e.g. vw) is an example of a second-rank tensor, not all
2nd rank tensors T can be expressed as a dyadic product of two vectors.
To see why, note that a general second-rank tensor has nine scalar
components which need not be related to one another in any way. By
contrast, the 9 scalar components of dyadic product above involve only six
distinct scalars (the 3 components of v plus the 3 components of w).

After a while you get tired of writing the summation signs and limits. So an
abbreviation was adopted whereby repeated appearance of an index implies summation over the three
allowable values of that index:

                                                 T = Tije ie j



                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                4                                       Fall, 2000

This is sometimes called the Cartesian (implied) summation convention.


SCALAR FIELDS
     Suppose I have some scalar function of position (x,y,z) which is continuously differentiable, that
is

                                                 f = f(x,y,z)

and ∂f/∂x, ∂f/∂y, and ∂f/∂z exist and are continuous throughout some 3-D region in space. This
function is called a scalar field. Now consider f at a second point which is differentially close to the
first. The difference in f between these two points is
called the total differential of f:

           f(x+dx,y+dy,z+dz) - f(x,y,z) ≡ df

For any continuous function f(x,y,z), df is linearly related
to the position displacements, dx, dy and dz. That
linear relation is given by the Chain Rule of
differentiation:

                     ∂f      ∂f      ∂f
              df =      dx +    dy +    dz
                     ∂x      ∂y      ∂z

Instead of defining position using a particular coordinate
system, we could also define position using a position vector r:

                                              r = xi + yj + zk

The scalar field can be expressed as a function of a vector argument, representing position, instead of a
set of three scalars:

                                                  f = f(r)

Consider an arbitrary displacement away from the point r, which we denote as dr to emphasize that the
magnitude dr of this displacement is sufficiently small that f(r) can be linearized as a function of
position around r. Then the total differential can be written as




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                5                                         Fall, 2000
                        df = f ( r + dr ) − f ( r )


GRADIENT OF A SCALAR
We are now is a position to define an important vector associated
with this scalar field. The gradient (denoted as ∇f) is defined
such that the dot product of it and a differential displacement
vector gives the total differential:

                                                df ≡ dr.∇ f

EXAMPLE: Obtain an explicit formula for calculating the gradient in Cartesian* coordinates.

Solution:                                    r = xi + yj + zk

                                 r+dr = (x+dx)i + (y+dy)j + (z+dz)k

subtracting:                           dr = (dx)i + (dy)j + (dz)k

                                     ∇f = (∇f)xi + (∇f)yj + (∇f)zk

                                  dr.∇f = [(dx)i + ...].[(∇f)xi + ...]

                                   df = (∇f)xdx + (∇f)ydy + (∇f)zdz                                    (1)

Using the Chain rule:           df = (∂f/∂x)dx + (∂f/∂y)dy + (∂f/∂z)dz                                 (2)

According to the definition of the gradient, (1) and (2) are identical. Equating them and collecting terms:

                    [(∇f)x-(∂f/∂x)]dx + [(∇f)y-(∂f/∂y)]dy + [(∇f)z-(∂f/∂z)]dz = 0

Think of dx, dy, and dz as three independent variables which can assume an infinite number of values,
even though they must remain small. The equality above must hold for all values of dx, dy, and dz. The
only way this can be true is if each individual term separately vanishes:**




* Named after French philosopher and mathematician René Descartes (1596-1650), pronounced "day-
cart", who first suggested plotting f(x) on rectangular coordinates

** For any particular choice of dx, dy, and dz, we might obtain zero by cancellation of positive and
negative terms. However a small change in one of the three without changing the other two would cause
the sum to be nonzero. To ensure a zero-sum for all choices, we must make each term vanish
independently.

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                 6                                          Fall, 2000

So                            (∇f)x = ∂f/∂x, (∇f)y = ∂f/∂y, and (∇f)z = ∂f/∂z,

                                                ∂f    ∂f    ∂f
leaving                                  ∇f =      i+    j+    k
                                                ∂x    ∂y    ∂z

Other ways to denote the gradient include:

                                             ∇f = gradf = ∂f/∂r


Geometric Meaning of the Gradient

  1) direction: ∇f(r) is normal to the f=const surface passing through the point r in the direction of
     increasing f. ∇f also points in the direction of steepest ascent of f.

  2) magnitude: |∇f | is the rate of change of f with
     distance along this direction

What do we mean by an "f=const surface"? Consider an
example.

Example: Suppose the steady state temperature profile
in some heat conduction problem is given by:

                  T(x,y,z) = x 2 + y2 + z2

Perhaps we are interested in ∇T at the point (3,3,3)
where T=27. ∇T is normal to the T=const surface:

                                              x 2 + y2 + z2 = 27

which is a sphere of radius     27 .♣

Proof of 1). Let's use the definition to show that these geometric meanings are correct.

                                                 df = dr.∇f




♣ A vertical bar in the left margin denotes material which (in the interest of time) will be omitted from the
lecture.

                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                   7                                     Fall, 2000

Consider an arbitrary f. A portion of the f=const surface
containing the point r is shown in the figure at right. Choose a
dr which lies entirely on f=const. In other words, the surface
contains both r and r+dr, so

                             f(r) = f(r+dr)

and                      df = f(r+dr)-f(r) = 0

Substituting this into the definition of gradient:

                 df = 0 = dr.∇f = dr∇fcosθ

Since dr and ∇ f  are in general not zero, we are forced
to the conclusion that cosθ=0 or θ=90°. This means that ∇f is normal to dr which lies in the surface.

2) can be proved in a similar manner: choose dr to be parallel to ∇f. Does ∇f point toward higher or
lower values of f?


Applications of Gradient

•   find a vector pointing in the direction of steepest ascent of some scalar field

•   determine a normal to some surface (needed to apply b.c.’s like n.v = 0 for a boundary which is
    impermeable)

•   determine the rate of change along some arbitrary direction: if n is a unit vector pointing along some
    path, then

                                                            ∂f
                                                     n.∇f =
                                                            ∂s

    is the rate of change of f with distance (s) along this path given by n. ∂f ∂s is called the directed
    derivative of f.


CURVILINEAR COORDINATES
    In principle, all problems in fluid mechanics and transport could be solved using Cartesian
coordinates. Often, however, we can take advantage of symmetry in a problem by using another
coordinate system. This advantage takes the form of a reduction in the number of independent variables
(e.g. PDE becomes ODE). A familiar example of a non-Cartesian coordinate system is:




                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                     8                                   Fall, 2000

Cylindrical Coordinates

r = (x 2+y2)1/2                   x = rcosθ

θ = tan-1(y/x)                    y = rsinθ

z=z                                 z=z

Vectors are decomposed differently. Instead of

in R.C.C.S.:       v = v x i + v yj + v zk

in cylindrical coordinates, we write

in cyl. coords.:                             v = v re r + v θe θ + v ze z

where e r, e θ, and e z are new unit vectors pointing the r, θ and z directions. We also have a different
set of nine unit dyads for decomposing tensors:

                                        e re r, e re θ, e re z, e θe r, etc.

Like the Cartesian unit vectors, the unit vectors in cylindrical coordinates form an orthonormal set of
basis vectors for E3. Unlike Cartesian unit vectors, the orientation of e r and e θ depend on position. In
other words:
                                                     e r = e r(θ)

                                                     e θ = e θ(θ)




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                9                                           Fall, 2000

Spherical Coordinates




    Spherical coordinates (r,θ,φ ) are defined relative to Cartesian coordinates as suggested in the
figures above (two views of the same thing). The green surface is the xy-plane, the red surface is the
xz-plane, while the blue surface (at least in the left image) is the yz-plane. These three planes intersect at
the origin (0,0,0), which lies deeper into the page than (1,1,0). The straight red line, drawn from the
origin to the point (r,θ,φ )♣ has length r, The angle θ is the angle the red line makes with the z-axis (the
red circular arc labelled θ has radius r and is subtended by the angle θ). The angle φ (measured in the
xy-plane) is the angle the second blue plane (actually it’s one quadrant of a disk) makes with the xy-
plane (red). This plane which is a quadrant of a disk is a φ =const surface: all points on this plane have
the same φ coordinate. The second red (circular) arc labelled φ is also subtended by the angle φ .




♣ This particular figure was drawn using r = 1, θ = π /4 and φ = π /3.


                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                  10                                        Fall, 2000

A number of other φ =const planes are
shown in the figure at right, along with a
sphere of radius r=1. All these planes
intersect along the z-axis, which also passes
through the center of the sphere.

x = r sin θ cos φ         r = + x 2 + y2 + z2

y = r sin θ sin φ         θ = tan −1  x2 + y2 z 
                                                  
z = r cos θ               φ = tan −1 ( y x )


The position vector in spherical coordinates
is given by

          r = xi+yj+zk = r e r(θ,φ )

In this case all three unit vectors depend on
position:

                                 e r = e r(θ,φ ), e θ = e θ(θ,φ ), and e φ = e φ(φ )

where e r is the unit vector pointing the direction of increasing r, holding θ and φ fixed; e θ is the unit
vector pointing the direction of increasing θ, holding r and φ fixed; and e φ is the unit vector pointing the
direction of increasing φ , holding r and θ fixed.

These unit vectors are shown in the figure at right.
Notice that the surface φ =const is a plane containing the
point r itself, the projection of the point onto the xy-plane
and the origin. The unit vectors e r and e θ lie in this plane
as well as the Cartesian unit vector k (sometimes
                                                                                                    k
                                  denoted e z).

                                If we tilt this φ =const plane
                                into the plane of the page (as in the sketch at left), we can more easily see
                    θ           the relationship between these three unit vectors:

      unit circle on                                       e z = ( cos θ ) er − ( sin θ) e θ
        φ = const
         surface
                                This is obtained by determined from the geometry of the right triangle in
                                the figure at left. When any of the unit vectors is position dependent, we
                                say the coordinates are:



                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                    11                             Fall, 2000

curvilinear - at least one of the basis vectors is position dependent

This will have some profound consequences which we will get to shortly. But first, we need to take
“time-out” to define:


DIFFERENTIATION OF VECTORS W.R.T. SCALARS
    Suppose we have a vector v which depends on the scalar parameter t:

                                                   v = v(t)

For example, the velocity of a satellite depends on time. What do we mean by the “derivative” of a
vector with respect to a scalar. As in the Fundamental Theorem of Calculus, we define the derivative
as:

                                     dv              RS
                                           lim v (t + ∆t ) - v ( t )       UV
                                     dt
                                        =
                                          ∆t → 0      T
                                                      ∆t                    W
Note that dv/dt is also a vector.

EXAMPLE: Compute de r/dθ in cylindrical coordinates.

Solution: From the definition of the derivative:

                           de r
                                =
                                          RS
                                  lim e r (θ + ∆θ) − e r (θ )
                                                              =
                                                                 UV
                                                                 lim ∆e r       RS UV
                            dθ ∆θ → 0      T   ∆θ                 W
                                                                ∆θ → 0 ∆θ        T W

Since the location of the tail of a vector is not part
of the definition of a vector, let's move both
vectors to the origin (keeping the orientation
fixed). Using the parallelogram law, we obtain the
difference vector. Its magnitude is:

          e r (θ + ∆θ) − e r (θ ) = 2 sin ∆θ
                                          2

Its direction is parallel to e θ(θ+∆θ/2), so:

                               e r ( θ + ∆θ) − e r (θ ) = 2 sin ∆θ
                                                                2 θ   e
                                                                   e θ + ∆θ
                                                                         2      j
Recalling that sinx tends to x as x→0, we have



                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                  12                                       Fall, 2000

                                        l                          q
                                    lim e r ( θ + ∆θ) − e r ( θ) = ∆θ e θ θ
                                   ∆θ → 0
                                                                            ch
Dividing this by ∆θ, we obtain the derivative:

                                                  de r/dθ = e θ

Similarly,                                        de θ/dθ = -e r

    One important application of “differentiation with respect to a
scalar” is the calculation of velocity, given position as a function of
time. In general, if the position vector is known, then the velocity
can be calculated as the rate of change in position:

                               r = r(t)

                              v = dr/dt

Similarly, the acceleration vector a can be calculated as the
derivative of the velocity vector v:

                          a = dv/dt

EXAMPLE: Given the trajectory of an object in
cylindrical coordinates

               r = r(t), θ = θ(t), and z = z(t)

Find the velocity of the object.

Solution: First, we need to express r in in terms of the
unit vectors in cylindrical coordinates. Using the figure at
right, we note by inspection that*

                   r(r,θ,z) = re r(θ) + ze z

Now we can apply the Chain Rule:




                                                                                                   r + θe θ +
* Recalling that r = xi + yj + zk in Cartesian coordinates, you might be tempted to write r = re
ze z in cylindrical coordinates. Of course, this temptation gives the wrong result (in particular, the units
of length in the second term are missing).

                                     Copyright © 2000 by Dennis C. Prieve
06-703                                                    13                                   Fall, 2000

                        FG ∂r IJ dr + FG ∂r IJ dθ + FG ∂r IJ dz = er dr + reθ dθ + e zdz
                 dr =
                         H14∂r2K4θ3,z H14∂θ2K4r3,z H14∂z2K4r3,θ
                           er
                                       r
                                              bg
                                           de r θ              ez
                                            dθ
                                           123
                                             eθ


Dividing by dt, we obtain the velocity:


                                v=
                                     dr dr t
                                       =
                                                  bg
                                             er + r
                                                    dθ t
                                                         eθ +
                                                              dz tbg
                                                                   ez
                                                                        bg
                                     dt 12
                                         dt3      123dt       12
                                                               dt3
                                              vr               vθ      vz



VECTOR FIELDS
A vector field is defined just like a scalar field, except that it's a vector. Namely, a vector field is a
position-dependent vector:

                                                       v = v(r)

Common examples of vector fields include force fields, like the gravitational force or an electrostatic
force field. Of course, in this course, the vector field of greatest interest is:


Fluid Velocity as a Vector Field

    Consider steady flow around a submerged object. What do we mean by “fluid velocity?” There
are two ways to measure fluid velocity. First, we could add tracer particles to the flow and measure the
position of the tracer particles as a function of time; differentiating position with respect to time, we
would obtain the velocity.♦ A mathematical “tracer particle” is called a “material point:”

Material point - fluid element - a given set of fluid molecules whose location may change with
              time.♣



♦ Actually, this only works for steady flows.    In unsteady flows, pathlines, streaklines and streamlines
differ (see “Streamlines, Pathlines and Streaklines” on page 65).

♣ In a molecular-level description of gases or liquids, even nearby molecules have widely different
velocities which fluctuate with time as the molecules undergo collisions. We will reconcile the
molecular-level description with the more common continuum description in Chapter 4. For now, we
just state that by “location of a material point” we mean the location of the center of mass of the
molecules. The “point” needs to contain a statistically large number of molecules so that r(t) converges
to a smooth continuous function.

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  14                                      Fall, 2000

Suppose the trajectory of a material point is given by:

                                                     r = r(t)

                                                          dr
Then the fluid velocity at any time is               v=                                                (3)
                                                          dt

A second way to measure fluid velocity is similar to the “bucket-and-stopwatch method.” We measure
the volume of fluid crossing a surface per unit time:

                     n.v = lim      RS ∆q UV
                             ∆a → 0 T ∆ a W

where ∆a is the area of a surface element having a unit
normal n and ∆q is the volumetric flowrate of fluid crossing
∆a in the direction of n.

When ∆a is small enough so that this quotient has converged
in a mathematical sense and ∆a is small enough so that the surface is locally planar so we can denote its
orientation by a unit normal n, we can replace ∆a by da and ∆q by dq and rewrite this definition as:

                  dq = n.v da                  (4)

This is particularly convenient to compute the
volumetric flowrate across an arbitrary curved
surface, given the velocity profile. We just have to
sum up the contribution from each surface element:

                         z
                   Q = n.v da
                         A




PARTIAL & MATERIAL DERIVATIVES
    Let                                              f = f(r,t)

represent some unsteady scalar field (e.g. the unsteady temperature profile inside a moving fluid). There
are two types of time derivatives of unsteady scalar fields which we will find convenient to define. In the
example in which f represents temperature, these two time derivatives correspond to the rate of change
(denoted generically as df /dt) measured with a thermometer which either is held stationary in the
moving fluid or drifts along with the local fluid.

partial derivative - rate of change at a fixed spatial point:



                                   Copyright © 2000 by Dennis C. Prieve
06-703                                              15                                         Fall, 2000

                                            ∂f  df 
                                              =
                                            ∂t  dt dr =0

         where the subscript dr=0 denotes that we are evaluating the derivative along a path* on
         which the spatial point r is held fixed. In other words, there is no displacement in
         position during the time interval dt. As time proceeds, different material points occupy
         the spatial point r.

material derivative (a.k.a. substantial derivative) - rate of change within a particular material
       point (whose spatial coordinates vary with time):

                                           Df  df 
                                             =
                                           Dt  dt d r = vdt

         where the subscript dr = v dt denotes that a displacement in position (corresponding to
         the motion of the velocity) occurs: here v denotes the local fluid velocity. As time
         proceeds, the moving material occupies different spatial points, so r is not fixed. In
         other words, we are following along with the fluid as we measure the rate of change of
         f.

A relation between these two derivatives can be derived using a generalized vectorial form of the Chain
Rule. First recall that for steady (independent of t) scalar fields, the Chain Rule gives the total
differential (in invariant form) as

                                           b       g bg
                                   df ≡ f r + dr − f r = dr.∇f

When t is a variable, we just add another contribution to the total differential which arises from changes
in t, namely dt. The Chain Rule becomes

                                  b              g b g ∂∂ft dt + dr.∇f
                           df = f r + dr , t + dt − f r , t =


The first term has the usual Chain-Rule form for changes due to a scalar variable; the second term gives
changes due to a displacement in vectorial position r. Dividing by dt holding R fixed yields the material
derivative:




* By “path” I mean a constraint among the independent variables, which in this case are time and
position (e.g. x,y,z and t). For example, I might vary one of the independent variables (e.g. x) while
holding the others fixed. Alternatively, I might vary one of the independent variables (e.g. t) while
prescribing some related changes in the others (e.g. x(t), y(t) and z(t)). In the latter case, I am
prescribing (in parametric form) a trajectory through space, hence the name “path.”

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                     16                                            Fall, 2000

                        Df  df             ∂f  dt            dr 
                          ≡              =                 +              .∇f
                        Dt  dt  dr = v dt ∂t  dt  dr = v dt  dt  dr = vdt
                                                14243 14243
                                                                1                 v

                                                  Df ∂f
But (dr/dt) is just v, leaving:                     =   + v.∇f
                                                  Dt ∂t

This relationship holds for a tensor of any rank. For example, the material derivative of the velocity
vector is the acceleration a of the fluid, and it can be calculated from the velocity profile according to

                                                     D v ∂v
                                                a=      =    + v.∇v
                                                     Dt   ∂t

We will define ∇v in the next section.



                                   Calculus of Vector Fields
    Just like there were three kinds of vector multiplication which can be defined, there are three kinds
of differentiation with respect to position.

Shortly, we will provide explicit definitions of these                                Notation          Result
quantities in terms of surface integrals. Let me
                                                                    Divergence         ∇.v               scalar
introduce this type of definition using a more familiar
quantity:                                                             Curl              ∇×v              vector

                                                                     Gradient           ∇v               tensor
GRADIENT OF A SCALAR (EXPLICIT)
    Recall the previous definition for gradient:

f = f (r):                                            df = dr.∇f                              (implicit def’n of ∇f )

Such an implicit definition is like defining f ′ (x) as that function associated with f(x) which yields:

f = f (x):                                           df = (dx) f ′                            (implicit def’n of f ' )

An equivalent, but explicit, definition of derivative is provided by the Fundamental Theorem of the
Calculus:


                                  f ′ ( x) ≡
                                                 lim  RS
                                                      f ( x + ∆x ) − f ( x)
                                                                            =
                                                                             UV
                                                                              df
                                               ∆x → 0  T       ∆x             W
                                                                              dx
                                                                                              (explicit def’n of f ' )


We can provide an analogous definition of ∇f

                                      Copyright © 2000 by Dennis C. Prieve
06-703                                               17                                           Fall, 2000

                                                        R|        U|
                                         ∇f ≡
                                                 lim 1
                                                         S| z
                                                       nfda        V|                 (explicit def’n of ∇f )
                                                V→0 V
                                                          T A       W
where f = any scalar field

A = a set of points which constitutes any
      closed surface enclosing the point r
      at which ∇f is to be evaluated

V = volume of region enclosed by A

da = area of a differential element (subset) of
        A

n = unit normal to da, pointing out of region
        enclosed by A

lim (V→0) = limit as all dimensions of A shrink to zero (in other words, A collapses about the
       point at which ∇f is to be defined.)

What is meant by this surface integral? Imagine A to be the skin of a potato. To compute the integral:

  1) Carve the skin into a number of elements. Each element must be sufficiently small so that

         • element can be considered planar (i.e. n is practically constant over the element)

         • f is practically constant over the element

  2) For each element of skin, compute nf da

  3) Sum yields integral

This same type of definition can be used for each of the three spatial derivatives of a vector field:


DIVERGENCE, CURL, AND GRADIENT

                                                 R|           U|
Divergence                            ∇.v ≡       S| z V|
                                             lim 1 .
                                                   n vda
                                            V →0 V
                                                   T A W
                                            lim R| 1             U|
                                           V → 0 |V z
Curl                                 ∇×v ≡         S   n × v da   V|
                                                   T A             W

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                      18                               Fall, 2000

                                                             R|          U|
Gradient                                     ∇v ≡
                                                     lim 1
                                                              S| z
                                                           nvda           V|
                                                    V→0 V
                                                               T A         W
Physical Interpretation of Divergence

  Let the vector field v = v(r) represent the steady-state velocity profile in some 3-D region of space.
What is the physical meaning of ∇.v?

• n.v da = dq = volumetric flowrate out through da (cm3/s). This quantity is positive for
  outflow and negative for inflow.

• ∫A n.v da = net volumetric flowrate out of enclosed volume (cm3/s). This is also positive for
  a net outflow and negative for a net inflow.

• (1/V) ∫A n.v da = flowrate out per unit volume (s-1)

        R|> 0 for an expanding gas (perhaps T A or pB)
• ∇.v = S = 0 for an incompressible fluid (no room for accumulation)
         |T< 0 for a gas being compressed
• ∇.v = volumetric rate of expansion of a differential element of fluid per unit volume of that
  element (s-1)


Calculation of ∇.v in R.C.C.S.

Given:                                 v = v x(x,y,z)i + v y(x,y,z)j + v z(x,y,z)k

Evaluate ∇.v at (x o ,yo ,zo ).

Solution: Choose A to be surface of rectangular
parallelopiped of dimensions ∆x,∆y,∆z with one corner
at x o ,yo ,zo .

So we partition A into the six faces of the parallelopiped.
The integral will be computed separately over each face:

   z
   A
       n.v da =   z
                  A1
                      n.v da +   z
                                 A2
                                     n.v da + L +    z
                                                     A6
                                                         n.v da


Surface A1 is the x=x o face:                             n = -i

                                              n.v = -i.v = -v x(x o ,y,z)


                                        Copyright © 2000 by Dennis C. Prieve
06-703                                                        19                                      Fall, 2000


                                z                   z z
                                                 zo + ∆ z y o + ∆y
                                     n.vda =                         − v x ( xo , y , z ) dy dz
                                A1                 zo         yo


Using the Mean Value Theorem:                     = -v x (x o ,y′,z′)∆y∆z

where                                                  yo ≤ y′ ≤ yo +∆y

and                                                    zo ≤ z′ ≤ zo +∆z

Surface A2 is the x=x o +∆x face:                           n = +i

                                           n.v = i.v = v x(x o +∆x,y,z)


                            z                     z z
                                                z o + ∆z y o + ∆y
                                 n.v da =                          v x ( x o + ∆x , y, z ) dy dz
                            A1                    zo        yo


Using the Mean Value Theorem:                   = v x (x o +∆x,y″,z″)∆y∆z

where                                               yo ≤ y″ ≤ yo +∆y

and                                                    zo ≤ z″ ≤ zo +∆z

The sum of these two integrals is:

                        z z
                       A1
                            +
                                 A2
                                      = v x ( xo + ∆x, y ′′ , z ′′ ) − v x ( x o , y ′, z ′ ) ∆y ∆z


Dividing by V = ∆x∆y∆z:

                        1
                        V        z
                            A1 + A2
                                              v ( x + ∆x , y ′′ , z ′′) − v x ( xo , y ′, z ′)
                                      n.v da = x o
                                                                  ∆x


Letting ∆y and ∆z tend to zero:

                                R|             U| vx (xo + ∆x, yo , zo ) − vx ( xo , yo , zo )
                     lim    1
                ∆y , ∆z → 0 V
                                 S| z   n.v da  V| =                 ∆x
                                  T A +A W
                                      1     2


Finally, we take the limit as ∆x tends to zero:




                                       Copyright © 2000 by Dennis C. Prieve
06-703                                                    20                                      Fall, 2000

                                        R|           U| ∂v x
                               lim 1
                              V→0 V
                                         S| z n vda V| = ∂x x , y , z
                                                .
                                          T A +A W
                                            1         2                          o   o   o


Similarly, from the two y=const surfaces, we obtain:

                                        R|           U| ∂v y
                               lim 1
                              V→0 V
                                         S| z n vda V| = ∂y
                                                .
                                          T A +A W
                                             3        4      x , y ,z            o   o   o


and from the two z=const surfaces:

                                        R|             U| ∂vz
                               lim 1
                              V→0 V
                                         S| z   n.v da  V| = ∂z x , y ,z
                                          T A +A W
                                             5        6                          o   o   o


Summing these three contributions yields the divergence:

                                              ∂v   ∂v y ∂v z
                                         ∇.v = x +     +
                                               ∂x   ∂y   ∂z


Evaluation of ∇×v and ∇v in R.C.C.S.

In the same way, we could use the definition to determine expressions for the curl and the gradient.

                               F ∂vz − ∂vy I i + FG ∂vx − ∂vz IJ j + F ∂v y − ∂vx I k
                      ∇×v =    GH ∂y ∂z JK H ∂z ∂x K GH ∂x ∂y JK
The formula for curl in R.C.C.S. turns out to be expressible as a determinant of a matrix:

                  i     j   k
                  ∂     ∂    ∂     F
                                 ∂v z ∂v y            I FG
                                              ∂v x ∂v z    ∂v y ∂v x         IJ FG           I
                 ∂x    ∂y   ∂z
                               =   GH
                                  ∂y
                                     −
                                       ∂z
                                           i+
                                               ∂z
                                                  −
                                                    ∂xJK H
                                                        j+
                                                            ∂x
                                                               −
                                                                 ∂y
                                                                     k
                                                                              K H            JK
                 vx    vy   vz

But remember that the determinant is just a mnemonic device, not the definition of curl. The gradient
of the vector v is

                                                  3        3     ∂v j
                                        ∇v = Σ            Σ             ei e j
                                                 i =1     j =1   ∂xi




                                 Copyright © 2000 by Dennis C. Prieve
06-703                                                 21                                           Fall, 2000

where x 1 = x, x 2 = y, and x 3 = z, v 1 = v x, etc.


Evaluation of ∇ .v, ∇×v and ∇v in Curvilinear Coordinates

Ref: Greenberg, p175

    These surface-integral definitions can be applied to any coordinate system. On HWK #2, we
obtain ∇.v in cylindrical coordinates.

    More generally, we can express divergence, curl and gradient in terms of the metric coefficients
for the coordinate systems. If u,v,w are the three scalar coordinate variables for the curvilinear
coordinate system, and

               x = x(u,v,w)                       y = y(u,v,w)                       z = z(u,v,w)

can be determined, then the three metric coefficients — h1, h2 and h3 — are given by

                                           b g
                                         h1 u, v, w = x u2 + yu2 + z u2


                                        h2 b u, v, wg = x v2 + yv2 + z v2


                                        h3 bu, v , wg = x 2w + y w2 + z w2

where letter subscripts denote partial differentials while numerical subscripts denote component, and the
general expressions for evaluating divergence, curl and gradient are given by

                                           1 ∂f       1 ∂f       1 ∂f
gradient of scalar:                ∇f =         e1 +       e2 +       e
                                          h1 ∂u      h2 ∂v      h3 ∂w 3

divergence of vector:

                        ∇.v =
                                   1     LM b
                                         ∂
                                           h2 h3 v1 +
                                                       ∂
                                                       g      b
                                                         h1h3 v2 +
                                                                    ∂
                                                                       g         b     gOPQ
                                h1h2 h3 ∂uN           ∂v
                                                                      hh v
                                                                   ∂w 1 2 3

                                                  h1e 1 h2 e 2          h3 e 3
                                              1   ∂      ∂              ∂
curl of vector:                     ∇×v =
                                          h1 h2 h3 ∂u      ∂v             ∂w
                                                  h1 v1 h2 v2           h3 v3

These formulas have been evaluated for a number of common coordinate systems, including R.C.C.S.,
cylindrical and spherical coordinates. The results are tabulated in Appendix A of BSL (see pages 738-
741). These pages are also available online:



                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                22                                                      Fall, 2000

                                            rectangular coords.

                                             cylindrical coords:

                                              spherical coords:


Physical Interpretation of Curl

    To obtain a physical interpretation of ∇×v, let’s consider a particularly simple flow field which is
called solid-body rotation. Solid-body rotation is simply the velocity field a solid would experience if
it was rotating about some axis. This is also the velocity field eventually found in viscous fluids
undergoing steady rotation.

Imagine that we take a container of fluid                                    Ω
(like a can of soda pop) and we rotate the
can about its axis. After a transient period
whose duration depends on the dimensions
                                                                    Ω                    r
of the container, the steady-state velocity
                                                                                                       z
profile becomes solid-body rotation.                  side view

A material point imbedded in a solid would                                           r
move in a circular orbit at a constant angular                            e θ(θ (t) )            er(θ (t) )
speed equal to Ω radians per second. The                                v(t )
corresponding velocity is most easily
described using cylindrical coordinates with                                        r
the z-axis oriented perpendicular to the                                                            eθ( θ(0))
                                                                                             v(0)
plane of the orbit and passing through the
center of the orbit. Then the orbit lies in a                                    θ(t )                          er (θ (0))
z=const plane. The radius of the orbit is the
                                                                                             r
radial coordinate r which is also constant.
Only the θ-coordinate changes with time and                         top view
it increases linearly so that dθ dt = const =
Ω.

In parametric form in cylindrical coordinates,
the trajectory of a material point is given by

                                    r(t) = const, z(t) = const, θ(t) = Ω t

The velocity can be computed using the formulas developed in the example on page 12:


                              v=
                                      b g er + r dθbt g eθ + dzbt g ez = rΩeθ
                                   dr t
                                   1
                                   2dt3        123
                                                dt           1
                                                             2dt3
                                      0          rΩ            0


                                   Copyright © 2000 by Dennis C. Prieve
06-703                                               23                                        Fall, 2000

Alternatively, we could deduce v from the definition of derivative of a
vector with respect to a scalar:                                                       e θ (θ+∆θ )


           v=
              Dr
                 = lim
                        ∆r r d θ eθ
                           =        =r
                                       dθ
                                          e = rΩ e θ
                                                                                               (
                                                                                             eθ θ + ∆θ
                                                                                                    2     )
              Dt ∆t → 0 ∆t    dt       dt θ                                       r     ∆r
                                                                                               ∆s = r ∆θ
More generally, in invariant form (i.e. in any coordinate system) the
velocity profile corresponding to solid-body rotation is given by              ∆θ               eθ (θ )


                                               d i
                                             v rp = Ω × r p                                           (5)

where Ω is called the angular velocity vector and rp is the position vector* whose origin lies
somewhere along the axis of rotation. The magnitude of Ω is the rotation speed in radians per unit time.
It’s direction is the axis of rotation and the sense is given by the “right-hand rule.” In cylindrical
coordinates, the angular velocity is

                                                   Ω = Ωe z

and the position vector is                   rp = rer + zez

Taking the cross product of these two vectors (keeping the order the same as in (5)):

                                  bg
                                v r = rΩe z × e r + zΩe z × e z = rΩ e θ
                                        123           123
                                              eθ              0


To obtain this result we have used the fact that the cross product of any two parallel vectors vanishes
(because the sine of the angle between them is zero — recall definition of cross
product on p1).

The cross product of two distinct unit vectors in any right-handed coordinate
system yields a vector parallel to the third unit vector with a sense that can be
remembered using the figure at right. If the cross product of the two unit vectors
corresponds to a “clockwise” direction around this circle, the sense is positive; in
a “counter-clockwise” direction, the sense is negative. In this case, we are
crossing e z with e r which is clockwise; hence the cross product is +e θ.

Now that we have the velocity field, let’s compute the curl. In cylindrical coordinates, the formula for
the curl is obtained from p739 of BSL:



* The subscript “p” was added here to avoid confusing the cylindrical coordinate r with the magnitude

of the position vector. Note that in cylindrical coordinates, rp = r 2 + z2 ≠ r .

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                24                                          Fall, 2000

               ∇×v =
                         FG 1 ∂vz − ∂vθ IJ er + FG ∂vr − ∂vz IJeθ + FG 1 ∂brvθ g − 1 ∂vr IJ e z
                          H r ∂θ ∂z K H ∂z ∂r K H r ∂r r ∂θ K
Substituting                    vr = 0             v θ = rΩ                vz = 0

we obtain                                   ∇ × v = 2Ω e z = 2Ω

Thus the curl turns out to be twice the angular velocity of the fluid elements. While we have only shown
this for a particular flow field, the results turns out to be quite general:

                                                 ∇ × v = 2Ω



                                     Vector Field Theory
    There are three very powerful theorems which constitute “vector field theory:”

    • Divergence Theorem

    • Stokes Theorem

    • Irrotational ⇔ Conservative ⇔Derivable from potential


DIVERGENCE THEOREM
    This is also known as “Gauss♣ Divergence Theorem” or “Green’s Formula” (by Landau &
Lifshitz). Let v be any (continuously differentiable) vector field and choose A to be any (piecewise
smooth, orientable) closed surface; then

                z
                A
                            z
                    n.v da = ∇.v dV
                           V

where V is the region enclosed by A and n is the
outward pointing unit normal to the differential
surface element having area da. Although we will
not attempt to prove this theorem, we can offer the



♣ Carl Friedrich Gauss (1777-1855), German mathematician, physicist, and astronomer. Considered
the greatest mathematician of his time and the equal of Archimedes and Isaac Newton, Gauss made
many discoveries before age twenty. Geodetic survey work done for the governments of Hanover and
Denmark from 1821 led him to an interest in space curves and surfaces.

                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                  25                                           Fall, 2000

following rationalization. Consider the limit in which all dimensions of the region are very small, i.e.
V→0. When the region is sufficiently small, the integrand (which is assumed to vary continuously with
position)* is just a constant over the region:

                                              ∇.v = const. inside V

                                                            F I
                             z
                             A
                                          z
                                 n.v da = ∇.v dV = ∇.v
                                         V
                                                         b gG z dV J = b∇.v gV
                                                            HV K
Solving for the divergence, we get the definition back (recalling that this was derived for V→0):

                                               ∇.v =
                                                     1 .
                                                     V   z
                                                       n vda
                                                         A

Thus the divergence theorem is at least consistent with the definition of divergence.


Corollaries of the Divergence Theorem

    Although we have written the Divergence Theorem for vectors (tensors of rank 1), it can also be
applied to tensors of other rank:


                                              A
                                               z         z
                                                   nf da = ∇f dV
                                                         V


                                              z
                                              A
                                                         z
                                                  n.τ da = ∇.τ dV
                                                         V

One application of the divergence theorem is to simplify the evaluation of surface or volume integrals.
However, we will use GDT mainly to derive invariant forms of the equations of motion:

Invariant: independent of coordinate system.

To illustrate this application, let’s use GDT to derive the continuity equation in invariant form.




* This is a consequence of v being “continuously differentiable”, which means that all the partial
derivatives of all the scalar components of v exist and are continuous.

                                    Copyright © 2000 by Dennis C. Prieve
06-703                                               26                                          Fall, 2000

The Continuity Equation

    Let ρ(r,t) and v(r,t) be the density and fluid velocity. What relationship between them is imposed
by conservation of mass?

For any system, conservation of mass means:

         RS rate of acc. UV = RS net rate of UV
          Tof total massW Tmass enteringW
Let's now apply this principle to an arbitrary system
whose boundaries are fixed spatial points. Note
that this system, denoted by V can be macroscopic
(it doesn’t have to be differential). The boundaries
of the system are the set of fixed spatial points
denoted as A. Of course, fluid may readily cross
these mathematical boundaries.

Subdividing V into many small volume elements:

                                                  dm = ρdV

                                                  z z
                                            M = dm = ρ dV
                                                          V


                                      dM d            
                                          =      ∫ ρ dV  = ∫ ∂ρ dV
                                       dt   dt              ∂t
                                               V        V

where we have switched the order of differentiation and integration. This last equality is only valid if the
boundaries are independent of t. Now mass enters through the surface A. Subdividing A into small
area elements:

                                          n = outward unit normal

                              n.v da = vol. flowrate out through da (cm3/s)

                              ρ(n.v)da = mass flowrate out through da (g/s)

                     rate of 
                                   = ∫ ρ ( n.v ) da = ∫ n.( ρv ) da = ∫ ∇.(ρ v ) dV
                     mass leaving  A                  A              V

The third equality was obtained by applying GDT. Substituting into the general mass balance:



                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                  27                                     Fall, 2000


                                        V
                                         z   ∂ρ
                                             ∂t           z bg
                                                dV = − ∇. ρv dV
                                                          V

Since the two volume integrals have the same limits of integration (same domain), we can combine them:


                                         z LMN
                                         V
                                                 ∂ρ
                                                 ∂t
                                                        b gOPQ
                                                    + ∇. ρv dV = 0


Since V is arbitrary, and since this integral must vanish for all V, the integrand must vanish at every
point:*

                                                 ∂ρ
                                                 ∂t
                                                          b g
                                                    + ∇. ρv = 0


which is called the equation of continuity. Note that we were able to derive this result in its most
general vectorial form, without recourse to any coordinate system and using a finite (not differential)
control volume. In the special case in which ρ is a constant (i.e. depends on neither time nor position),
the continuity equation reduces to:

                                                     ∇.v = 0                                    ρ=const.

Recall that ∇.v represents the rate of expansion of fluid elements. “∇.v = 0” means that any flow into
a fluid element is matched by an equal flow out of the fluid element: accumulation of fluid inside any
volume is negligible small.


Reynolds Transport Theorem

   In the derivation above, the boundaries of the system were fixed spatial points. Sometimes it is
convenient to choose a system whose boundaries move. Then the accumulation term in the balance will




* If the domain V were not arbitrary, we would not be able to say the integrand vanishes for every point
in the domain. For example:


                                    z0
                                        2π
                                             cos θ dθ =   z   2π
                                                              0
                                                                   sinθ dθ = 0

                                         zb  2π
                                             0
                                                                   g
                                                   cos θ − sinθ dθ = 0

does not imply that cosθ = sinθ since the integral vanishes over certain domains, but not all domains.

                                 Copyright © 2000 by Dennis C. Prieve
06-703                                               28                                         Fall, 2000

involve time derivatives of volume integrals whose limits change with time. Similar to Liebnitz rule for
differentiating an integral whose limits depend on the differentiation variable, it turns out that:♣

                             F                I ∂S
                        d
                             GG z S (r, t)dV JJ = z ∂t dV + z S (r, t )(n.w)da                         (6)
                        dt
                              HV (t )         K V (t )     A( t )


where w is the local velocity of the boundary and S(t) is a tensor of any rank. If w = 0 at all points on
the boundary, the boundary is stationary and this equation reduces to that employed in our derivation of
the continuity equation. In the special case in which w equals the local fluid velocity v, this relation is
called the Reynolds Transport Theorem.♦

EXAMPLE: rederive the continuity equation using a control volume whose
boundaries move with the velocity of the fluid.

Solution: If the boundaries of the system move with the same velocity as
local fluid elements, then fluid elements near the boundary can never cross it
since the boundary moves with them. Since fluid is not crossing the
boundary, the system is closed.* For a closed system, conservation of mass
requires:

                                               RS
                                            d mass of
                                                      =0    UV
                                                T
                                            dt system        W
or
                                         dM d
                                          dt
                                             =
                                               dt    zb g
                                                    V t
                                                            ρ dV = 0                                   (7)


Notice that we now have to differentiate a volume integral whose limits of integration depend on the
variable with respect to which we are differentiating. Applying (6) with w=v (i.e. applying the Reynolds
Transport Theorem):




♣ For a proof, see G:163-4.

♦ Osborne Reynolds (1842-1912), Engineer, born in Belfast, Northern Ireland, UK.Best known for
his work in hydrodynamics and hydraulics, he greatly improved centrifugal pumps. The Reynolds
number takes its name from him.

* When we say “closed,” we mean no net mass enters or leaves the system; individual molecules might
cross the boundary as a result of Brownian motion. However, in the absence of concentration
gradients, as many molecules enter the system by Brownian motion as leave it by Brownian motion. v is
the mass-averaged velocity.

                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                     29                                 Fall, 2000

                        d                              ∂ρ
                               ∫    ρ( r, t ) dV  = ∫       dV + ∫ ρ( r, t )( n.v) da
                        dt                              ∂t
                            V (t )               V (t )        A( t )


which must vanish by (7). Applying the divergence theorem, we can convert the surface integral into a
volume integral. Combining the two volume integrals, we have


                                          zb g LMN
                                         V t
                                                     ∂ρ
                                                     ∂t
                                                           b gOPQ
                                                        + ∇. ρv dV = 0


which is the same as we had in the previous derivation, except that V is a function of time. However,
making this hold for all time and all initial V is really the same as holding for all V. The rest of the
derivation is the same as before.


STOKES THEOREM
     Let v be any (continuously differentiable) vector
field and choose A to be any (piecewise smooth,
orientable) open surface. Then

              zb
              A
                         g       z
                  n. ∇ × v da = v.dr
                                 C

where C is the closed curve forming the edge of A
(has direction) and n is the unit normal to A whose sense is related to the direction of C by the “right-
hand rule”. The above equation is called Stokes Theorem.♣


Velocity Circulation: Physical Meaning

    The contour integral appearing in Stokes’ Theorem is an important quantity called velocity
circulation. We will encounter this quantity in a few lectures when we discuss Kelvin’s Theorem. For
now, I’d like to use Stokes Theorem to provide some physical meaning to velocity circulation. Using
Stokes Theorem and the Mean Value Theorem, we can write the following:




♣ Sir George Gabriel Stokes (1819-1903): British (Irish born) mathematician and physicist, known for
his study of hydrodynamics. Lucasian professor of mathematics at Cambridge University 1849-1903
(longest-serving Lucasian professor); president of Royal Society (1885-1890).

                                     Copyright © 2000 by Dennis C. Prieve
06-703                                                    30                                     Fall, 2000
                             Stokes'                     Mean Value
                            Theorem                       Theorem
                 Ñ∫ v.d r        =     ∫ n.(∇ × v ) da         =       n.( ∇ × v ) A = 2 Ωn A
                 C                     A

Finally, we note from the meaning of curl that ∇×v is twice the angular velocity of fluid elements, so that
n.∇×v is the normal component of the angular velocity (i.e. normal to the surface A). Thus velocity
circulation is twice the average angular speed of fluid elements times the area of the surface whose edge
is the closed contour C.

Example: Compare “velocity circulation” and “angular
momentum” for a thin circular disk of fluid undergoing
solid-body rotation about its axis.

Solution: Choosing cylindrical coordinates with the z-
axis aligned with axis of rotation. Solid-body rotation
corresponds to the following velocity profile (see page
22):

                        v = rΩe θ

and                   ∇ × v = 2Ω e z

Finally the unit normal to the disk surface is n = e z. Then the velocity-circulation integral becomes


                         C
                            z           zb          g       z b          g
                                v.dr = n. ∇ × v da = e z . 2Ω e z da = 2ΩπR 2
                                        A                   A

According to L&L Vol I♣ page 25, the angular momentum L of a mass m undergoing motion at velocity
v is the lever arm r times the linear momentum (p = mv): i.e. L = r×p. Summing this over differential
fluid mass in our disk with dm = ρ dV, the net angular momentum of the disk is:

                                            z                      z
                                       L = (r × v )ρ dV = ρ∆z ( r × v )da
                                            V                      A

Since the disk is of uniform thickness ∆z and density ρ , we can write the second equation above. If the
disk is sufficiently thin that we can neglect the z contribution to the position vector, then we can
approximate r = re r in cylindrical coordinates.♦ Substituting into the second integral above




♣ Landau & Lifshitz,    Mechanics and Electrodynamics (Course of Theoretical Physics: Vol. 1),
Pergamon, 1959.

                                       Copyright © 2000 by Dennis C. Prieve
06-703                                                      31                                     Fall, 2000


                                   zd                             z
                                                                  R
                                        2
                                              i
                         L = ρ∆z r Ω e z da = ρ∆zΩ e z r 2 2πr dr =
                                                                               π 4
                                                                               2
                                                                                 R ρ∆zΩ e z
                                   A                              0

Dividing this by the velocity circulation integral:

                                       π 4
                                          R ρ∆zΩ
                                Lz
                            z        = 2         = 1 R 2 ρ∆z = 1 π  R 2 ∆z ρ = M
                                              2    4           4 π 123         4π
                                v.dr     2ΩπR                        V
                           C

where M is the mass of fluid in the disk. This could be rewritten as


                                                    z
                                                    C
                                                                 L
                                                        v.dr = 4π z
                                                                 M

So the velocity-circulation integral is just proportional to the angular momentum per unit mass.


DERIVABLE FROM A SCALAR POTENTIAL
    A very special class of vector fields consists of those vectors for which a scalar field exists such that
the vector can be represented as the gradient of the scalar:

Suppose:                                          v = v(r) and f = f(r)

If f exists such that:                                   v = ∇f

for all r in some domain, then f(r) is called the scalar potential of v and v is said to be derivable from
a potential in that domain.

An example of a vector field which is “derivable from a potential” is the
gravitational force near sea level:

                                        Fgrav = -Mgk

and the associated potential energy is:

                                         φ(z) = Mgz




♦ Actually this assumption isn’t necessary since any z-component of r will produce an r-component in
the cross-product and this r-component will integrate to zero as long as V is a body of rotation about
the same axis.

                                        Copyright © 2000 by Dennis C. Prieve
06-703                                                 32                                      Fall, 2000

Note that                            ∇φ = Mgk

is identical to the force, except for the sign (introduced by convention). This example also suggests why
φ is called the “potential” of v. Not every vector field has a potential. Which do? To answer this, let's
look at some special properties of such vector fields.

Property I:                                   if v=∇φ then ∇×v=0                             (irrotational)

Proof: Recall that ∇×(∇φ) = 0 (see HWK #2, Prob. 4e). A vector which has this property is said to be
irrotational. This name is an allusion to ∇×v representing the rotation rate if v is the fluid velocity.
∇×v=0 means the fluid elements are not rotating.

Property II:                                if v=∇φ then   z
                                                           C
                                                               v.dr = 0                    (conservative)


for any closed contour in the region.

Proof: Using Property I, we know that ∇×v=0. Then we can deduce the value of this closed-contour
integral from Stokes’ Theorem:

                                        Ñ∫ v.d r = ∫ n.(1
                                                        ∇ × v) da = 0
                                                        4243
                                        C          A           0

A vector field which has this property is said to be conservative. This name is an allusion to the special
case in which v represents a force, like gravity. Then v.dr (force times displacement) represents the
work required to move the object through the force field. Saying that the contour integral vanishes
means that the work required to lift a weight can be recovered when the weight falls. In other words,
energy is conserved.

If C is open, v=∇φ is still quite useful:

Property III: let Co be an open contour connecting points A and B.

                    If v=∇φ then ∫Cov.dr = φ(rB)-φ(rA)

for any contour connecting A and B.

Proof: Note that ∇φ .dr = dφ (from our definition of gradient). Then

                                    ∫ v ⋅ d r = ∫ d φ = φ (rB ) − φ (rA )
                                   Co            Co


We call this property path independence. Of course, Property II is just a special case of this for
which A=B so that φ(rB) - φ(rA) = 0.


                                   Copyright © 2000 by Dennis C. Prieve
06-703                                               33                                         Fall, 2000

THEOREM III
     We have just shown that properties I and II are implied by v = ∇φ; it turns out that the converse is
also true, although I’m not going to prove it here. We can distill these properties and their converse into
a single statement:

                    R| ∇ × v = 0 U| R| φ = φbrg exists U| R| z v.dr = 0 for every U|
                     S| for all r V| ⇔ S|such that v = ∇φV| ⇔ S|C                   V|
                      T in Region  W T      in Region     W T    closed C in Region  W
TRANSPOSE OF A TENSOR, IDENTITY TENSOR
      The transpose of a tensor τ is denoted τt and is defined so that:

                                               v.τ = τt.v

and                                            τ.v = v.τt

for all vectors v. For example:

if                                                τ = ab

then                                              τt = ba

More generally, in terms of scalar components of τ, we can write the relationship between a tensor and
its transpose as:

                                                 τtij = τji

Symmetric Tensor:                                  τt = τ

An example of a symmetric tensor is the dyad aa.

Identity Tensor: Also known as the Idem Factor. Denoted as I and defined so that:

                                              v.I = v = I.v

for any vector v. Clearly I is symmetric, but in addition, dotting it with another vector gives that vector
back (like multiplying by one). In any coordinate system, I can be calculated from:

                                                              ∂r
                                                I = ∇r =
                                                              ∂r




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                       34                                 Fall, 2000

where r is the position vector expressed in terms of the unit vectors in that coordinate system. Recalling
from p6 that gradient can be thought of as the partial derivative with respect to position, I can be
thought of as the derivative of the position vector with respect to itself. In R.C.C.S., recall that:

                                                 r = xi + yj + zk

                                                                      ∂r j
and                                       ∇r = ∑ ∑                       ee
                                                     i       j
                                                                      ∂xi i j

where rj is the j th component of the position vector r and x i is the ith coordinate. In Cartesian
coordinates, the position vector components are related to the coordinates according to:

                                 r1 = x 1 = x, r2 = x 2 = y, and r3 = x 3 = z:

                                                    ∂r j
then                                                             = δ ij
                                                    ∂xi

which is 0 if i≠j or 1 if i=j. This leaves:

                                               ∇r = ∑ ∑ ei e j *
                                                         i        j

so                                               I = ii + jj + kk

As a partial proof that I has the desired properties which make it the identity tensor, consider dotting it
with an arbitrary vector v:

                                   v.(ii+jj+kk) = v.ii + v.jj + v.kk

                                        = (v.i)i + (v.j)j + (v.k)k

                                              = v xi + v yj + v zk = v

Thus we have shown that v.I=v, as advertised.


DIVERGENCE OF A TENSOR
    In presenting the corollaries to the Divergence Theorem, we have already introduced the divergence
of a tensor. This quantity is defined just like divergence of a vector.



* This expression for the identity tensor is valid for any set of orthonormal unit vectors (not just the
Cartesian ones for which we have derived it here).

                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                                   35                                 Fall, 2000

                                                                         R|                   U|
                                                ∇.τ ≡
                                                          lim 1
                                                                n.τda     S| z                 V|
                                                         V →0 V
                                                                           T A                  W
Note that this definition uses a pre-dot not a
post-dot. In R.C.C.S.

                     τ = ΣΣτij e ie j

On the x=x o face:

                        n = -e 1


  n.τ = ∑ ∑ τ ij e1.ei e j = − ∑ τ 1 j                       ej
          i      j                          j       xo

Similarly, on the x=x o+∆x face, we obtain:

                                                                     n = +e 1


                                                 n.τ = ∑ τ 1 j                           ej
                                                                 j            x o + ∆x

After integrating over the area, we obtain:

                                z
                             A1 + A2
                                                             o
                                        n.τ da = ∑ τ 1 j | x o + ∆x −τ 1 j | x o e j ∆y∆z
                                                     j
                                                                                                    t
Dividing by V:

                                                                   RS τ 1 j |x + ∆x −τ 1 j |x UVe
                               1
                               V        z
                                    A1 + A2
                                                n.τda = ∑
                                                                 j T
                                                                                o
                                                                                 ∆x            Wj
                                                                                                        o




Taking the limit as V→0:

                                                 R|            U| ∂τ 1 j
                                      lim 1
                                     V→0 V
                                                  S| z   n.τda  V| = ∑ ∂x ej
                                                   T A +A W j
                                                         1           2


Adding on similar contributions from the y=const and z=const faces:




                                         Copyright © 2000 by Dennis C. Prieve
06-703                                                36                                         Fall, 2000
                                                           ∂τij
                                         ∇.τ = ∑∑                 ej
                                                  i   j
                                                           ∂xi

                ∂τ   ∂τ yx ∂τ zx   ∂τ xy ∂τ yy ∂τ zy   ∂τ xz ∂τ yz ∂τ zz 
         ∇.τ =  xx +      +      i +    +     +       j+    +     +      k
                ∂x    ∂y    ∂z   ∂x       ∂y    ∂z   ∂x       ∂y    ∂z 



                  Introduction to Continuum Mechanics*
    In this course, we will treat fluids like continua; in other words, we are going to ignore the molecular
granularity of matter. This is an assumption which we, as engineers, often make in describing transport
of heat, mass, or momentum although we don’t always state this assumption explicitly. To make the
nature of this assumption clearer, it might help to discuss the alternative.

    Fluids are composed of molecules. In principle, if you tell me the initial location of every molecule in
the fluid and its initial velocity, I can compute the position and velocity at some later time using
Newton’s laws of motion (i.e. F = ma). The difficulty with this approach is that the number of
molecules in any volume of fluid of interest to us make such a detailed calculation impractical. For
example:

                      1 cm3 of water → 3.3x1022 molecules → 10 million years

Even with a computer operating at 100 mfops, it would take 10 million years to do just one
multiplication for each molecule. Molecules of a liquid collide on the average of once every 10-12
seconds. To describe one second of real behavior, I would need 1012 × 10 million years. Clearly, this
is an absurd length of time. Although computers get faster every year, this will remain an absurdly long
time for the foreseeable future. The alternative is:


CONTINUUM HYPOTHESIS
    A detailed description at the molecular level is not required in order to predict macroscopic
behavior of any material. For example, it is not necessary to know the precise location of every
molecule of fluid; it turns out that all that is needed for most applications is the distribution of mass
described by the density profile ρ (r) of molecules in some region:




* Reference: G.E. Mase, "Continuum Mechanics," Schaum's Outline Series, McGraw-Hill, 1970.


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  37                                     Fall, 2000



                                       R|         U|
                     ρ( r ) =
                                 lim 1
                                V →0 V ∑
                                        S|
                                         mi        V|
                                       i T          W
where mi is the mass of molecule i, the sum is over all the molecules
inside surface A, and V is the volume. In fluid mechanics, as in heat and              r
mass transfer, we make an assumption known as the "continuum
hypothesis."

Basically this assumption is that the limit above will
converge long before the dimensions of V shrink to
molecular size.

Similarly, we don't need to know the translational,
rotational, vibrational and electronic energy of each
molecule. We usually need only to know the internal
energy per unit volume as a function of position, which in
turn, manifests itself macroscopically as temperature.

A more precise statement of the continuum hypothesis is:

Continuum Hypothesis - the region to be described can be subdivided into a set of
           (infinitesimal) volume elements, each of which simultaneously:

  1) is small enough to be considered uniform (i.e. any spatial variations in properties -- such as ρ , v,
     T, p -- inside the volume element are negligible); and

  2) is large enough to contain a statistically large number of molecules.

In other words, we are assuming that dV exists such that the two conditions above are both satisfied.
Materials which obey this “hypothesis” as said to behave as a continuum. Generally, the continuum
hypothesis works well provided all the dimensions of the system are large compared to molecular size.
An example of a situation in which the continuum hypothesis does not work is the flow of dilute gases in
small pores, where the mean free path (for the collision of molecules) is comparable to the dimensions of
the pore. This situation is called “Knudsen diffusion.”

The basic problem in continuum mechanics is to describe the response of material to stress. A
quantitative statement of that response is known as:

Constitutive Equation - model which describes how a material will respond to stress.

Familiar examples of constitutive equations include:



                                 Copyright © 2000 by Dennis C. Prieve
06-703                                               38                                          Fall, 2000

  1) Hooke's law of elasticity (solids)

  2) Newton's law of viscosity (fluids)

Many materials, like toothpaste and polymer melts, have characteristics of both solids and fluids and do
not obey either of these simple "laws." Such fluids are called viscoelastic.


CLASSIFICATION OF FORCES
    Having derived an equation (the Continuity equation) to describe the relationship among the
variables which is imposed by conservation of mass, the remaining fundamental principle of physics is
Newton’s second law (Σ iFi = ma) which, as it turns out, is equivalent to conservation of momentum.
To apply this principle, we will need to list the forces which can act on fluid systems. Forces tend to fall
into one of two different categories, depending on the range over which they act: long-range (compared
to molecular size) forces are computed as volume integrals (called “body forces”) and short-range
forces are computed as surface integrals (called “surface forces”).

Of course, gravitational forces have the longest range of any known force. For example, gravitational
forces between planets and the sun determine their orbits. In particular, all fluid elements (not just those
at the system boundary) feel a gravitational force of interaction with the rest of the universe outside the
system boundaries. Thus gravity is a “body force.”

body forces: those which act on every fluid element in body (e.g. gravity):

              dFg = (dm)g = ρg dV

At the other end of the spectrum are forces which
have very short range. If the range is of molecular
dimensions, then only fluid elements experience a
nonzero interaction with the universe outside the
system. Although interior fluid elements might
interact with one another through this short-range
force, this interaction is not considered in a force
balance, because the “action” and “reaction”
forces cancel, leaving no net contribution to the
force on the system. When only surface elements
feel a particular force from outside, that force is called a “surface force.”

At the molecular scale, pressure arises from the momentum transferred during collisions between
molecules outside and molecules inside the system. Since only surface molecules will be struck from
outside, pressure is a surface force.




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                             39                                        Fall, 2000

surface forces: those which act only on surfaces
       (including mathematical boundaries)

One example is hydrostatic pressure:

                    dFp = -pn da

where dFp is the force exerted on the system (through
the surface element da) by the fluid outside, and n is a
unit outward (to system) normal. For a proof that this
is the correct form for hydrostatic pressure, see
Batchelor, Section 1.3.



                               Hydrostatic Equilibrium
   If our material is a fluid and if it is at rest (no velocity and no acceleration), then gravity and
hydrostatic pressure forces are usually the only forces acting on the system. At equilibrium, the forces
must be balanced. Thus Newton’s♣ 2nd law, which generally requires ∑ Fi = Ma , reduces to
                                                                              i
∑ Fi = 0 at mechanical equilibrium.
 i

In our case, this means                      Fg + Fp = 0

                                             Fg = ∫VρgdV

                                      Fp = -∫Anpda = - ∫V∇pdV

To obtain this last result, we applied one of the corollaries of the Divergence Theorem. Substituting
back into the force balance and combining the two volume integrals leads to:

                                     Fg + Fp = ∫V[ρg-∇p]dV = 0

Since V is arbitrary, we conclude that the integrand vanishes:

                              ∇p = ρg




♣  Sir Isaac Newton (1642–1727), English mathematician and natural philosopher (physicist);
considered by many the greatest scientist of all time; invented differential calculus and formulated the
theories of universal gravitation, terrestrial mechanics, and color.

                                 Copyright © 2000 by Dennis C. Prieve
06-703                                              40                                          Fall, 2000

This says that the pressure increases in the direction of the acceleration of gravity (downward), which
correctly describes (for example) how the pressure increases with depth in an ocean.



                                    Flow of Ideal Fluids
    Now let's consider fluids in motion. The simplest analysis is for:

ideal fluid - deformation of fluid elements is an isentropic process (i.e. adiabatic and
              reversible):

                                            µ = 0 and k = 0

where µ is the viscosity and k is the thermal conductivity. Generally this means that any viscous forces
are negligible (since viscous forced represent friction arising between fluid elements and friction gives
rise to irreversibility). Furthermore, to keep the process adiabatic, the thermal conductivity must also be
negligible.


EULER'S EQUATION
    Suppose these conditions on the fluid are met. Thus consider the isentropic deformation of an ideal
fluid for an arbitrary macroscopic system. In addition to pressure and gravity, we must also consider
inertia when the system accelerates. Newton's law requires:

                     Ma = Σ iFi

Let r(t) denote the trajectory of one particular fluid
element inside the system. Then the velocity of the
fluid element is:

                             Dr
                       v=
                             Dt

while the acceleration is:

                             Dv
                       a=
                             Dt

We use the material derivative here, since we are following a particular material point. Multiplying the
acceleration by the mass of the fluid element gives the inertia:

                                          bdmga = ρbdV g DDtv

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  41                                      Fall, 2000

To get the net inertia of the entire system, we must repeat this calculation for each of the fluid elements
composing the system and add them up:

                                                             Dv
                                                 Ma = ∫ ρ       dV
                                                             Dt
                                                       V

I’ve put carets (<…>) around the Ma to indicate that this is the position-average inertia of the system
(since the local (dm)a varies from point to point within a general system). Newton's second law
requires us to equate this with the net force acting on the system:


                             z
                             V
                                 ρ
                                     Dv
                                     Dt                      z
                                        dV = F p + Fg = ρg dV − np da
                                                       V       123
                                                               A
                                                                       z
                                                                       z ∇p dV
                                                                       V


Using the divergence theorem to convert the surface integral into a volume integral, we have three
volume integrals over the same domain. Combining these three volume integrals leaves:



                                        V
                                         z LMN
                                             ρ
                                                 Dv
                                                 Dt
                                                                 OP
                                                    − ρg + ∇p dV = 0
                                                                  Q
Since this must hold for any choice of V, the integrand must vanish at each point in the domain. After
dividing by ρ :

                                                  Dv      1
                                                     = g − ∇p                                          (8)
                                                  Dt      ρ

which is called Euler's Equation (1755).*

           Significance: When combined with a statement of continuity, Euler’s equation of
                         motion provides as many equations as unknowns.

    Another relationship among the unknowns is the continuity equation (see page 27), which comes
from the mass balance.




* Euler, Leonhard, 1707-83, Swiss mathematician. The most prolific mathematician who ever lived, he
worked at the St. Petersburg Academy of Sciences, Russia (1727-41, 1766-83), and at the Berlin
Academy (1741-66). He contributed to areas of both pure and applied mathematics, including
calculus, analysis, number theory, topology, algebra, geometry, trigonometry, analytical mechanics,
hydrodynamics, and the theory of the moon's motion.

                                     Copyright © 2000 by Dennis C. Prieve
06-703                                             42                                         Fall, 2000
                                            ∂ρ
                                            ∂t
                                                    b g
                                               + ∇. ρv = 0


For an incompressible fluid, ρ = const. w.r.t. both time and position. Then the continuity equation
reduces to:

imcompressible fluid:                          ∇.v = 0,                                              (9)

      To see that we now have as many equations as unknowns, note that the unknowns in (8) and (9)
are

unknowns: 4 scalars                             v and p

which represents the 3 scalar components of v plus p, for a total of 4 scalar unknowns. To evaluate
these unknowns, we have equations (8) and (9):

equations: 4 scalars                      Euler + continuity

but Euler’s equation (8) is a vector equation, which can be expanded into 3 independent scalar
equations. When added to continuity (a scalar equation), we obtain a total of 4 independent scalar
equations, the same number as of scalar unknowns. Thus we are now in position to begin solving
problems involving fluid flow. We will call (8) and (9) “Euler’s equations of motion for incompressible
fluids.”

EXAMPLE. Water in a partially filled tank undergoes
uniform♣ acceleration a in the horizontal plane. Find the
angle θ of inclination of the water’s surface with respect to
the horizontal plane.

Solution. The key to solving this problem is to recognize that,
regardless of the angle of inclination, the pressure is equal to
1 atm everywhere on the free surface. Then the pressure
gradient ∇p must be normal to this plane. If we can find the
orientation of ∇p we will have the orientation of the free surface. Recall Euler's equation of motion for
an ideal fluid:

                                            Dv      1
                                               = g − ∇p
                                            2a
                                            Dt      ρ




♣ By “uniform acceleration” I mean the same acceleration is experienced at each point and at each time.
For a fluid, uniformity at each position occurs only in the steady state after a transient which is
nonuniform.

                                 Copyright © 2000 by Dennis C. Prieve
06-703                                             43                                         Fall, 2000

Dv/Dt is just the acceleration of the fluid in a stationary reference frame. At
steady state, all of the fluid will undergo the same uniform acceleration as the
tank; so Dv/Dt is just a. Solving for the gradient, we have

                                 1
                                   ∇p = g − a
                                 ρ

Using vector addition in the drawing at right, we can see that the angle of
inclination of the free surface (relative to the horizon) is just


                                            θ = tan −1
                                                         FG a IJ
                                                          H gK
     We were lucky in the previous example, because we knew the left-hand side of (8), so instead of 4
scalar unknowns, we only had one: p. The solution was relatively easy. In the more general problem,
the left-hand side of (8) is an unknown nonlinear partial differential equation:

                                       ∂v             1
                                          + v.∇v = g − ∇ p                                          (10)
                                       ∂t             ρ

In this form, we have expanded Dv Dt using the relationship between material derivative and partial
derivative (see page 15). Now we have 4 scalar unknowns: the three scalar components of v and
pressure: v x, v y, v z and p. Coupled with the continuity equation (for an incompressible fluid)

                                                ∇.v = 0

Euler’s equation also gives us 4 scalar equations. One important class of solutions has the form v = ∇φ ,
which is called “potential flow.” In the next section, we discuss how this form comes about and identify
which physical problems have this form.


KELVIN'S THEOREM
    An important precursor to the theory of potential flow is the principle of conservation of
circulation. Before stating this principle, let me define a quantity which Landau & Lifshitz♣ call the
velocity circulation:




♣ L.D. Landau and E.M. Lifshitz, Fluid Mechanics (Vol. 6 of a Course of Theoretical Physics),
Pergamon, New York, 1959.

                                 Copyright © 2000 by Dennis C. Prieve
06-703                                                       44                                   Fall, 2000

                         Γ ≡ v.dr z
                                  C
                                                             contours
                                                             of material points
for any closed contour. Recall that we showed on page at different times                              C( t2)
30 that this contour integral is associated with the average
angular momentum of fluid elements located on the surface
whose edge is C. Kelvin♦ showed that this velocity
circulation is conserved:                                                                    trajectory of a
                                                                                             material point
                              dΓ
                                 =0                                                       a material point
                              dt                                          C( t1)

for any set of material points forming a closed contour in
an ideal fluid. This result is called Kelvin's Theorem.

Partial proof:♥ Since the contour C is composed of material points, the time derivative of this contour
integral is like the material derivative:

                                           dΓ D             ?

                                                Dt Ñ∫         Ñ∫ Dt
                                              =       v .dr = Dv .dr
                                           dt
                                                         C         C

Since we are always integrating over the same set of material points, a boundary term does not arise
when we interchange integration and differentiation operators, although the set of spatial points is time-
dependent: C = C(t). Of course, we have not rigorously shown this step to be valid, thus we only claim
the proof is “partial.” Next, we substitute Euler’s equation and write each term as the gradient:

              dΓ
              dt
                 =   z FGH
                     C
                             g−
                                  1
                                  ρ
                                      IJ
                                    ∇p .dr =
                                       K       z FGH
                                               C
                                                       −∇φ g − ∇
                                                                    IJ
                                                                   p .
                                                                   ρ K       z FGH  pIJ
                                                                      dr = − ∇ φ g + .dr = 0
                                                                             C
                                                                                    ρ K
In the second equality above, we have introduced the potential energy per unit mass, φ g . Recall that
gravity is a conservative force field (see page 32). For an object of constant mass (e.g. a brick),
Theorem III guarantees that a scalar field φ (r) exists such that Fg = mg = -∇φ . For an object of




♦ Lord Kelvin (William Thomson), 1st Baron, 1824-1907, British mathematician and physicist; b.
Ireland. He was professor (1846-99) of natural philosophy at the Univ. of Glasgow. His work in
thermodynamics coordinating the various existing theories of heat established the law of the conservation
of energy as proposed by James Joule. He discovered what is now called the “Thomson effect” in
thermoelectricity and introduced the Kelvin scale, or absolute scale, of temperature. His work on the
transmission of messages by undersea cables made him a leading authority in this field.

♥ For a more rigorous proof, see Batchelor p269. For a more intuitive proof, see L&L, p15.


                                      Copyright © 2000 by Dennis C. Prieve
06-703                                                 45                                    Fall, 2000

constant mass, we could divide both sides of this equation by m and bring m inside the gradient
operator: g = -∇(φ /m). Similarly, a differential volume element dV would have a differential mass dm
and a differential potential energy dφ , such that g = -∇(dφ /dm). So generally we can write:

                                                   g = -∇φ g                                       (11)

                                                  potential energy
where                                      φg =                    .
                                                       mass

The next-to-last expression (in the equation for dΓ/dt) must vanish, because it has the form ∇s.dr = ds:
integrating any total differential around a closed contour yields zero. Thus


                                      C
                                       z   v.dr = const. w.r.t. time


Keep in mind that this applies only if C is composed of material points and only for ideal flow. Since C
is composed of material points (which in general move with different velocities), the contour may change
shape or move. Given the meaning of this contour integral (Γ = angular momentum), this result implies
that (in the absence of friction) angular momentum of fluid is a constant. In general, we change the
angular momentum of some object by applying a torque. So this result (i.e. Kelvin’s theorem) means
that (in the absence of friction) there is no way to apply a torque to ideal fluid
elements.

If you think about it, this makes sense: the usual way to apply a torque (with our
hands to a cylinder, say) is to hold the cylinder between our hands and then move
our hands in opposite directions, as shown in the sketch at right. We thus rely on
friction between our hands and the cylinder to exert the torque. If the cylinder
were greased and our hands slipped over its surface, we would not be able to
apply the torque. This is the essence of what Kelvin’s theorem is saying.


IRROTATIONAL FLOW OF AN INCOMPRESSIBLE FLUID
    As an example, consider towing a submerged object through an “ideal fluid” which is otherwise
stagnant.

                      v(r,t=0) = 0

Consider an arbitrary closed contour in the fluid far from
the disturbance caused by the motion of the submerged object. The contour integral vanishes since v
vanishes:

                                 z
                                 C
                                     v.dr = 0 for t=0          since v = 0



                                 Copyright © 2000 by Dennis C. Prieve
06-703                                                46                                       Fall, 2000

for every such contour C. Now at some later time the submerged object moves into the vicinity of C
which causes v to be nonzero. Despite this, Kelvin’s Theorem still requires

                                  z
                                  C
                                      v.dr = 0 for all t    although v ≠ 0


This is also true for every closed contour in the region (since every contour initially had zero value for
this integral).

Applying Theorem III:                        ∇×v = 0 for all r,t                                     (12)

which is sometimes called the persistence of irrotationality. Also from Theorem III, we know φ (r,t)
exists such that:

                                                  v = ∇φ                                             (13)

where φ is called the velocity potential.

             Significance: Knowing that the solution has the form given by (13) allows us to
                      decouple the four scalar equations represented by (8) and (9):

    Substituting (13) into (9) yields Laplace’s equation in the velocity potential:

(13) into (9):                                    ∇2φ = 0

Instead of 4 equations in 4 unknowns, we now have a single equation which can be solved for φ and v
= ∇φ, without any coupling to Euler’s equation (8). Although Euler was the first to suggest this
approach, this is called Laplace's Equation* after the French mathematician who solved this equation
in so many cases.

    Knowing the velocity profile v, we can now determine the pressure profile p from Euler's equation:

                                          ∂v             1
                                             + v.∇v = g − ∇ p                                        (14)
                                          ∂t             ρ

We will now integrate this vector equation to obtain a single scalar equation for the pressure profile.
Each term in (14) can be expressed as a gradient of something. For example, we’ve already seen in
(11) that:




* Pierre Simon de Laplace (1749-1827), French mathematician and astronomer, noted for his theory of
a nebular origin of the solar system and his investigations into gravity and the stability of planetary
motion.

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                               47                                      Fall, 2000

                                                 g = - ∇φ g


Similary, if ρ =const, then:
                                            1   ρ = const
                                              ∇p = ∇
                                                          p   FG IJ
                                            ρ             ρ    H K                                 (15)


For potential flow, the unsteady term becomes

                                          ∂v
                                             =
                                          ∂t ∂t
                                               ∂
                                                  b g FGH IJK
                                                 ∇φ = ∇
                                                        ∂φ
                                                        ∂t
                                                                                                   (16)


Finally, for the convective term, we can apply identity A.3:♦


                                                          123
                                                               b
                                     v.∇ v = 12 ∇v 2 − v × ∇ × v          g                        (17)
                                                                      0

where                                            v.v = v 2

where v = v. In our particular case, the second term vanishes because ∇×v = 0 for potential flow.
Substituting (11) and (15) through (17) into (14):

                                          F ∂φ + v 2 + φ + p I = 0
                                      ∇   GH ∂t 2 g ρ JK
which is called Bernoulli’s Equation.♣ It implies that

                                  ∂φ v 2        p
                                     +   + φ g + = const w.r.t. r                                  (18)
                                  ∂t   2        ρ

is spatially uniform, but it might depend on time. Once the velocity profile is obtained (by solving
Laplace’s equation), both φ and v are known, leaving p as the only unknown.




♦ “Identity A.3” in this equation refers to one of the mathematical identities summarized on the handout
titled “Useful Identities in Vector Notation”.

♣Daniel Bernoulli (1700-1782, Swiss) has often been called the first mathematical physicist; the teacher
of Leonhard Euler. His greatest work was his Hydrodynamica (1738), which included the principle
now known as Bernoulli's principle and anticipated the law of conservation of energy and the kinetic-
molecular theory of gases developed a century later. He also made important contributions to
probability theory, astronomy, and the theory of differential equations.

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                      48                                  Fall, 2000

Potential Flow Around a Sphere

     To solve a typical problem involving potential flow, we would first solve Laplace's equation to
obtain the velocity profile and then we can evaluate the pressure profile using Bernoulli's equation. Let's
illustrate the procedure using an example:

EXAMPLE: Find the velocity and pressure profiles for potential flow
caused by a sphere of radius R moving through a stagnant fluid with
velocity U.

Solution: If the fluid behaves ideally, it undergoes potential flow and
the velocity profile must satisfy Laplace’s equation:

P.D.E.:                                           ∇2φ = 0

Boundary conditions can be formulated by recognizing that fluid far from the sphere is unperturbed:

b.c. #1:                                    v = 0 far from sphere

while fluid near the sphere cannot penetrate the sphere. To express this mathematically, recall our
“bucket-and-stopwatch” method for defining fluid velocity (see page 13). Modifying it slightly to
account for the movement of the surface element at velocity U, the flowrate across a surface element of
area da is given by:

                                                   b
                                          dq = n. v − U da = 0   g
For an impenetrable sphere, the flowrate must vanish

b.c. #2:                                     b          g
                                          n. v − U = 0 on sphere

To solve this problem, we adopt a new reference frame
in which the origin moves along with the center of the
sphere. It turns out that the PDE does not change upon
this shift in reference frame for velocity: the new velocity
potential must also satisfy Laplace's equation:

P.D.E.:             ∇2φ = 0

However, the boundary conditions are changed.
In this moving coordinate system, the sphere
appears to be stationary and the fluid at infinity is
undergoing uniform flow

b.c. #1:       v → -U ≡ Uk as r→ ∞               (19)



                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                49                                          Fall, 2000

where U is the velocity of the sphere in the original stationary reference frame.

For a stationary sphere, no fluid entering the sphere means dq = n.v da = 0, or

b.c. #2:                                   n.v = v r = 0 at r=R

Next we rewrite the b.c.’s in terms of the velocity potential in spherical coordinates. In terms of velocity
potential, (19) becomes:

                                                 ∇φ = Uk

Now we need to translate k into the unit vectors in spherical coordinates.*




Referring to the figure above (see page 8), we note that e r, e θ, and e z = k all lie in the same Φ =const
plane (shaded region of left-hand figure above). If we shift all three unit vectors to the origin (recall that
the origin is not part of the definition of any vector) and re-orient the Φ =const plane to coincide with the
plane of the page, then we get the figure above at right, from trigonometry of the right triangle it is
apparent that

                                              b g b g
                                         k = cos θ e r − sinθ e θ

Thus the b.c. can be written as

as r→ ∞:                               ∇φ → U cos θ e r −
                                            123         14
                                                         U2 43θ e θ
                                                           sin
                                                 ∂φ         1 ∂φ
                                                 ∂r         r ∂θ

Equating corresponding components:

                                  ∂φ                       1 ∂φ
                                     = U cos θ     and          = U sinθ
                                  ∂r                       r ∂θ




* Here Φ is the spherical coordinate, while φ is the velocity potential. For more on spherical
coordinates, see BS&L p733.

                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                 50                                    Fall, 2000

Integrating either PDE leads to

b.c. #1:                          φ → Urcosθ + const           as      r→ ∞

where we have arbitrarily selected a value of zero for this “const”.* In order to translate b.c. #2, use
tables (see spherical coords♦ ) to express the gradient in spherical coordinates:

                                           v =∇φ
                                               ∂φ      1 ∂φ         1 ∂φ
                       vr er + vθ eθ + vΦ eΦ =    er +      eθ +            eΦ
                                               ∂r      r ∂θ      r sin θ ∂Φ

Dotting both sides by the unit vector n = e r, then using b.c. #2:

b.c. #2:                                    v r = ∂φ /∂ r = 0 at r=R

We look for a solution which is independent of Φ:

                       φ = φ (r,θ)

This implies that the fluid does not have any Φ -
component of velocity. In other words, the trajectory
of any fluid element remains entirely on a single
Φ =const surface. The sketch at right shows some
edge views of Φ =const planes (looking along the z-axis
which passes through the center of the sphere).

From p740 of BS&L, we have ∇2φ in spherical
coordinates:

                               1 ∂ 2 ∂φFG      IJ
                                               1    ∂
                                                      sinθ
                                                           ∂φ   FG          IJ
                              r 2 ∂r
                                     r
                                        H
                                       ∂r
                                          +
                                                K
                                            r sinθ ∂θ
                                             2             ∂θ
                                                              =0
                                                                 H           K                     (20)


                                              ∂φ /∂ r = 0 at r=R                                   (21)

                                            φ = Urcosθ as r→ ∞                                     (22)




* Like most energies in thermodynamics, the reference state for potential is arbitrary and can be chosen
solely for convenience.

♦ http://www.andrew.cmu.edu/course/06-703/Vops_sph.pdf


                                     Copyright © 2000 by Dennis C. Prieve
06-703                                                 51                                      Fall, 2000

Although there are systematic procedures, like “separation of variables,” for solving P.D.E.'s which
work in many cases, one should first check to see if there is a simple solution. The problem appears
formidible, but notice that the trivial solution:

                                                    φ=0?

satisfies the P.D.E. and the b.c. at r=R. Unfortunately, it does not satisfy the b.c. at r→ ∞, so we will
have to try another guess. Since the failure occurred with the b.c. at r→ ∞, we look there for the form
of our second guess:

                                                φ = Arcosθ ?

This too satisfies the P.D.E. and the b.c. at r→ ∞ (provided A=U) but to satisfy the b.c. at r=R, A must
be chosen as 0. The tells us that A should have different values at different r's. So we try a third guess
which is slightly more general than the second:

                                              φ(r,θ) = f(r)cosθ                                      (23)

Substituting (23) into (20)-(22), we find that cosθ cancels out, leaving:

                                           r 2 f ′′ + 2 rf ′ − 2 f = 0

                                                f ′ = 0 at r=R

                                               f = Ur as r→ ∞

Thus we have reduced the problem of solving the P.D.E. to one of solving an O.D.E. We recognize this
O.D.E. to be a Cauchy-Euler equation, ♣ which always has at least one solution of the form f = rn . The
general solution turns out to be:

                                               f(r) = Ar-2 + Br




                                                                         N
                                                                                    dn y
♣ The general form of an Nth -order Cauchy-Euler equation is
                                                                         ∑ an x n
                                                                              n
                                                                                = 0 . At least one of the
                                                               n=0         dx
N linearly independent solutions has the form y(x) = Ax α. Substituting this form leads to

                                     N
                         a 0 Ax α + ∑ an α( α − 1)( α − 2 )K(α − n + 1) Ax α = 0
                                    n =1

Dividing out the common factor Ax α, we obtain an Nth-order polynomial for α . Each distinct root of
the polynomial leads to a separate solution. In this example, the roots are α = -2 and +1.

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                 52                                    Fall, 2000

Using the b.c.'s, we can evaluate A and B. The particular solution to this problem is:


                         b g FGH     R3
                       f r = U r + 12 2
                                     r
                                             I
                                             JK
Substituting this back into (23) leaves:                                                 vr = 0

                                F         3I
                  φ br , θg = U G r + 2 2 J cos θ
                                      1 R
                                                                                         vθ (r , θ = π2 )

                                H rK
                                                                          vr ( r , π)
                                  L F RI 3O                                                   v r ( r ,0)
                         ∂φ
                             = U M1 − G J P cos θ                         vθ = 0              vθ = 0
                 vr =
                         ∂r       MN H r K PQ
                vθ =
                      1 ∂φ          F R3 I
                             = −U G 1 + 12 3 J sin θ
                                                                                          vr = 0
                                                                                          vθ (r ,θ = 3π )
                      r ∂θ          H rK                                                               2


Notice that for θ=π (θ=0), v θ=0 but v r decreases (in absolute
magnitude) from -U at r=∞ to 0 at r=R. At θ=π /2, v r=0 but v θ increases from U to (3/2)U. This
increase is necessary to make up for the decrease in flow caused by the sphere blocking part of the flow
path.
                                                                    U
Having solved for the velocity profile, we can determine the
pressure profile from Bernoulli's equation (18). Assuming steady                               R
state:

                      v2 p
                         + + φ g = const
                       2  ρ

independent of position. The "const" can be evaluated using any point where we know both the velocity
and the pressure. Suppose the pressure of the undisturbed fluid is known in the reference plane for the
gravitational potential (φ g = 0):

at r→∞, φ g = 0:                           p = p∞ and v 2 = U2

                                       v2 p        U 2 p∞
Thus                                      + + φg =    +
                                        2  ρ        2   ρ

or                                 b g                        e
                                  p r ,θ = p∞ − ρφ g + 12 ρ U 2 − v 2     j
where                                              b g2
                                 v 2 = v.v = v r r , θ + vθ r , θ b g
                                                                  2



                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                   53                              Fall, 2000

Substituting the known velocity profile, we obtain the pressure profile. Let's focus on the pressure
profile over the surface of the sphere:

for r=R:       b g
              p R, θ =                              e
                             p − ρφg + 1 ρU 2 9 cos 2 θ − 5
                             1∞4243    814442444         3
                                                                    j
                           hydrostatic head
                                 b g
                              ph R , θ
                                                 dynamic head
                                                         b g
                                                   p d R, θ


In the sketch at right, we plot the dynamic pressure (dropping the     pd
contribution from hydrostatic equilibrium). Note the location of     1 ρU 2
                                                                     2
regions having high and low pressure. The sphere is being pushed in
at the poles and allowed to expand at the equator. This is why a
large bubble rising through stagnant water tends to become distorted
from spherical shape. Such bubbles tend to become extended in the
horizontal plane and compressed in the vertical direction by the
higher pressure.




d'Alembert's Paradox

    What is the net force on a rigid sphere owing the pressure profile developed by potential flow
around it? The answer turns out to be:

                       z               zb            g         z
              F p = − n p da = − n ph + p d da = − n ph da − n pd da = −ρgV
                       A               A                       1
                                                               A424
                                                                  3
                                                                              z
                                                                              1
                                                                              A424
                                                                                 3
                                                                                               (24)

                                                                   ρg V           0

where V is the volume of the sphere.

Proof: first consider the contribution from dynamic pressure:

                                                         e
                                           pd ≡ 18 ρU 2 9 cos 2 θ − 5     j

                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                                54                                   Fall, 2000

The n in (24) is a unit vector normal to the surface, pointing outward. In spherical coordinates, with
their origin at the center of the sphere, this vector is the unit vector in the r-direction:

                                                               n = e r(θ,φ )

which direction depends on location on the surface. Although its length is a constant, its direction varies
with position of the sphere; thus n cannot be treated as a constant. Anticipating that any net force will
be parallel to the direction of fluid flow, we dot both sides of (24) by k:

                      Fp = k.Fp = −
                                                    z3  k.n p da
                                                    A cos θ

For the contribution from dynamic pressure, pd (r=R,θ) depends solely
on θ, so we choose the strip of width R dθ and length 2π Rsinθ as our
differential area da. On this strip θ is virtually constant.


                          z
                          π

                            1424               b gb
              Fdp = − cos θ pd R , θ 2πR sinθ R dθ
                                   3                               gb g
                          0                b
                                          f cos θ   g
                                  z
                                  π
                 = 2 πR       2
                                                 b gb
                                      cos θ f cos θ − sinθ dθ
                                                    14243
                                                                           g
                                  0                         d cos θ


                                                    ze
              x = cos θ                            −1
                 =        2 πR 2 × 18 ρU 2 x 9 x 2 − 5 dx = 0     j
                                                   1
                                                   1 442443
                                                           0

The nonzero contribution from (24) comes from the hydrostatic head. We will leave this calculation as
an exercise for the reader (HWK #4, Prob. 1). The net force due to pressure is

            Fp = −        ∫ ( p∞ − ρ φg ) n da − ∫                                 (           )
                                                                      1 ρU 2 9cos 2 θ − 5  n da =−ρ gV
                                                                      8                  
                   1444    424444
                                3                             144444         42444444          3
                    sphere                                    sphere
                                      −ρ g V                                           0

The net force on the sphere is the sum of its weight and the net pressure force:

                                      F p + Fg = −ρgV + ρ s gV = ρ s − ρ gV ≠ 0b           g
which is the difference in weight of the sphere and the weight of the fluid displaced by it. Because the
pressure force is independent of the speed of motion of the sphere through the fluid, the particle will
continue to accelerate forever, without ever reaching a “terminal velocity.” Of course, experiments
show that falling particles reach a terminal velocity which implies that the gravitational force is balanced


                                               Copyright © 2000 by Dennis C. Prieve
06-703                                                    55                                    Fall, 2000

by some other force. The other force is fluid drag (friction), which is not predicted by potential flow.
This serious discrepancy between the predictions of potential flow theory and experiment is known as:

d'Alembert's♣ paradox - potential flow predicts no drag but experiments indicate drag.

Despite this, potential flow is still useful:

Uses of potential flow – predicts lift (but not drag) on
       streamline objects moving through stagnant fluid
       at high Reynolds numbers (but still sub-sonic, i.e.
       v << c).

• correctly predicts v(r,t) and p(r,t) except very near the surface
  of the object (i.e. inside boundary layer) and in wake [see pressure profile on airfoil shown below].

• for asymmetric shapes (e.g. airplane wings), it correctly predicts a lift. [See lift force shown below as
  a function of the angle of attack.]




                               Figs. 1.12 and 1.13 taken from Schlichting, 6th ed., p22f.




♣ Jean le Rond d’Alembert (1717–83), French mathematician and philosopher, a leading figure of the
Enlightenment. His treatise on dynamics (1743) enunciated d'Alembert's principle, which permitted the
reduction of a problem in dynamics to one in statics. He did important work on the mechanics of rigid
bodies, the motions of fluids and vibrating strings, and the three-body problem in celestial mechanics.

                                     Copyright © 2000 by Dennis C. Prieve
06-703                                               56                                           Fall, 2000

                                       Stream Function
   Before we resolve d’Alembert’s paradox by adding viscous forces, let's step back for a moment
and review what we have accomplished for potential (or irrotational) flow. The mathematical problem
might be stated as: find v(x,t) such that:

                                                 ∇×v = 0                                                (25)

and                                             ∇.v = 0                                                 (26)

Eqs. (25) and (26) represent four partial differential equations in the components of the unknown vector
field.* Recognizing that the solution is derivable from a potential allows us compress these four
equations into one scalar equation in one unknown:

v=∇φ:                                           ∇2φ = 0

which is quite a remarkable trick. The potential is not the only scalar field which a vector field can be
expressed in terms of. Velocity can also be expressed in terms of a stream function.

Potential (φ ) — a scalar field whose relationship to v is carefully selected to automatically satisfy
               irrotationality

                                           v = ∇φ → ∇×v = 0

Whereas the relation between velocity and scalar potential is chosen to automatically satisfy (25), the
relationship between velocity and stream function is chosen to automatically satisfy (26):

                                          v = f(ψ) → ∇.v = 0

Stream Function (ψ ) — a scalar field whose relationship to v is carefully selected to
            automatically satisfy continuity.

It turns out that it is sufficient to express v as the curl of another vector. According to Identity C.6, the
divergence of the curl of any vector is zero (See HWK #2, Prob. 4d):

                                          v = ∇×u → ∇.v= 0

A vector which can be expressed as the curl of another vector is said to be solenoidal. u is called the
vector potential of v. Of course, knowing that v = ∇×u isn't always of much help because we just



* Although it might appear that we have overspecified the problem by specifying both the divergence
and curl (which represent four scalar equations in the three components of v), this turns out not to be
true. In general, both the divergence and curl must be specified throughout some region in space before
the vector field can be determined in that region.

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                       57                                 Fall, 2000

trade one unknown vector for another. Fortunately, there are several broad classes of flows for which
the form of the vector potential is known:


TWO-D FLOWS
     When nothing happens along one of the three directions in R.C.C.S., we have 2-D flow:

                                           v = v x(x,y)i + v y(x,y)j

or                                                v z = 0, ∂ /∂ z = 0

                                                  identity
                                                    E.3
                       v = ∇ × [ψ (x ,y ) e z ]      =       ∇ψ + ψ ∇ ×3
                                                                       ez
                                                                    12
For such a flow,♣                                                             0                      (27)
                            ∂ψ      ∂ψ             ∂ψ          ∂ψ
                          =    ex +    e y  × ez =    ex ×ez +    e y ×ez
                            ∂x      ∂y             ∂x 123 ∂y 1     424 3
                                                          −e              y                ex


In terms of its scalar components, the velocity is:

                                        ∂ψ                        ∂ψ
                                vx =                  vy = −                      vz = 0             (28)
                                        ∂y                        ∂x

Next we substitute this form for v into (26):

                                                                       identity
                                                                         C.6
                                     ∇.v = ∇. ∇ × ( ψe z )            =        0

which automatically satisfies continuity (26), for any choice of ψ(x,y). The scalar field ψ(x,y) is called
the stream function. For irrotational flow, the problem would be to determine ψ(x,y) such that (25) is
satisfied:

                                              ∇×[∇×(ψe z)] = 0

We can reduce this to a scalar equation. Using identity E.5 from handout:

                                 ∇×[∇×(ψe z)] = ∇[∇.(ψe z)] − ∇2(ψe z)




♣ “Identity E.3” in this equation refers to one of the mathematical identities summarized on the handout
titled “Useful Identities in Vector Notation”.

                                   Copyright © 2000 by Dennis C. Prieve
06-703                                               58                                         Fall, 2000

but                                      ∇.(ψe z) = ∂ψ/∂ z = 0

and                                        ∇2(ψe z) = (∇2ψ)e z

Thus                                         ∇×v = -(∇2ψ)e z

So for irrotational flow, the streamfunction must also satisfy Laplace's equation:

∇×v = 0:                                          ∇ 2ψ = 0

Unlike the scalar potential, the streamfunction can be used in all 2-D flows, including those for which the
flow is not irrotational. Indeed, we will use the streamfunction to solve Stokes flow of a viscous fluid
around a sphere, in which the fluid is not even ideal.


AXISYMMETRIC FLOW (CYLINDRICAL)
   Another general class of flows for which a streamfunction exists is axisymmetric flow. In cylindrical
coordinates (r,θ,z), this corresponds to:

                                        v = v r(r,z)e r + v z(r,z)e z

or                                         v θ = 0 and ∂ /∂θ = 0

Then ∇.v = 0 can be satisfied by seeking v of the form:

                                            v = ∇×[ f (r,z)e θ]

                                                ψ ( r, z ) 
or                                       v =∇×            eθ
                                                    r       

The second expression usually leads to somewhat simpler expressions for ∇×v and is the one used in
the table on p131 of BS&L:

                                           1 ∂ψ                      1 ∂ψ
                                  vr = −                      vz =
                                           r ∂z                      r ∂r

Computing the curl in cylindrical coordinates and setting it equal to zero leads to the following PDE in ψ
(the details are left as an exercise):

                                      FG E 2 ψ IJ e = 0 → E 2 ψ = 0
                           ∇×v = −
                                       H r Kθ


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                         59                             Fall, 2000

                                                     ∂2 ψ           1 ∂ψ ∂ 2 ψ
where                                 E 2ψ =                   −        +
                                                     ∂r 2           r ∂r ∂z 2

                                                          ∂ 2ψ          1 ∂ψ ∂ 2ψ
Note that E2ψ ≠ ∇2ψ :              ∇2ψ ( r , z ) =                  +        +
                                                             ∂r 2       r ∂ r ∂z 2


AXISYMMETRIC FLOW (SPHERICAL)
     In spherical coordinates (r,θ,φ ), axisymmetric flow means

                                           v = v r(r,θ)e r + v θ(r,θ)e θ

or                                           v φ = 0 and ∂ /∂φ = 0

where φ is the azimuthal angle. Then ∇.v=0 can be satisfied by seeking v of the form:

                                                v = ∇×[ψ'(r,θ)e φ]


                        v = ∇×
                                  LM ψbr, θg eφ OP = 1 ∂ψ er − 1 ∂ψ eθ
                                   N r sin θ Q 1r 24sin2θ4∂θ3 1r4sin2v θ4∂3r
or

                                                                    vr                    θ


Again, the second expression is the one used in the table on p131 of BS&L (except the signs are
reversed). Taking the curl (HWK #4, Prob. 6a):

                                                              eφ
                                       ∇×v = −                          E 2ψ = 0
                                                             r sin θ

which requires                                           E2ψ = 0


                                  E 2ψ =
                                              ∂2 ψ
                                                         +
                                                             sinθ ∂       FG
                                                                       1 ∂ψ          IJ
where
                                                ∂r   2
                                                              r            H
                                                                2 ∂θ sin θ ∂θ         K
Note that E2ψ ≠ ∇2ψ:

                                           ∂ 2ψ          2 ∂ψ         ∂         ∂ψ 
                         ∇2ψ ( r , θ ) =
                                                                  1
                                                     +        +           sin θ
                                           ∂r   2        r ∂r r sin θ ∂θ 
                                                                2                ∂θ 




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                             60                                            Fall, 2000

ORTHOGONALITY OF ψ =CONST AND φ=CONST
    A contour on which ψ=const is called a streamline. A contour on which φ=const is called a iso-
potential line. It turns out that these two contours are
orthogonal at any point in the fluid. To see this first note that

                          v = ∇φ

From the geometric meaning of gradient (see page 6 of
Notes), we know that ∇φ and hence v is normal to a
φ=const surface (see figure at right). Second, recall that v
can also be written in terms of streamfunction as

for R.C.C.S.              v = ∇ψ×k                           (29)

Recall that the cross product is a vector which is orthogonal
to two vectors being multiplied. Thus v, ∇ψ, and k are
mutually orthogonal. Since v and ∇φ point in the same
direction, ∇φ and ∇ψ must also be orthogonal.
                                                                Potential Flow Around Sphere. Lines lie
                                                                  in plane of page, which could be any
STREAMLINES, PATHLINES AND                                                   Φ =const. plane.
STREAKLINES
Streamline - a contour in the fluid whose tangent is
             everywhere parallel to v at a given instant of time.

Path Line - trajectory swept out by a fluid element.

Streak Line - a contour on which lie all fluid elements which earlier past through a given point in space
               (e.g. dye trace)

For steady flows, these three definitions describe the same contour but, more generally, they are
different.




                                 Copyright © 2000 by Dennis C. Prieve
06-703                                             61                                         Fall, 2000

PHYSICAL MEANING OF STREAMFUNCTION
     The precise meaning of streamfunction is somewhat
different for 2-D and axisymmetric flows. Let's focus on
2-D flows normal to a cylinder (not necessarily with ψ=ψ                               ∆Q = (ψ
                                                             2
                                                                                                2 - ψ1 )L
circular cross-section, axis corresponds to z-axis in
                                                                                     {
R.C.C.S.). To motivate the somewhat lengthy analysis
                                                          ψ=ψ1
which follows, we first state the physical meaning. First
                                                           ψ=0
we observe that material points follow trajectories which
can be described as ψ=const. Three such trajectories are
shown at right which lie in the xy-plane. When these
trajectories are (mathematically) translated along the z-
axis a distance L they sweep-out ψ=const surfaces.

No fluid crosses these surfaces: there are like the walls of a tube. Since no fluid leaves or enters this
“tube”, conservation of mass means the mass flowrate must be a constant at any point along the tube.
For an incompressible fluid, the volumentric flowrate is also constant. Suppose we denote the
volumetric flowrate between any two of these ψ=const surfaces as ∆Q; then it turns out that

                                            ∆Q
                                               = ψ 2 − ψ1
                                             L

Thus ψ might be interpreted as the volumetric flowrate per unit length between this particular streaming
surface and the one corresponding to
ψ=0.

    Now let’s show this. Consider an
arbitrary open contour (C) in the xy-
plane, cutting across the flow. Next,
consider the surface (A) formed by
translating this contour a distance L
parallel to the z-axis. The volumetric
flowrate across A is:

                                            Q = ∫An.vda

where n is a unit normal to A. Since nothing changes with z, we choose a short segment of the contour,
having length ds and of length L as our differential area element.

                                               da = L ds,

                                      Q            ?
The flowrate becomes:                   = ∫ n.v ds = ∫ ∇ψ.dr                                         (30)
                                      L
                                           C            C



                                 Copyright © 2000 by Dennis C. Prieve
06-703                                                62                                          Fall, 2000

where n is now normal to C and lies in the xy-plane.            The key to this proof is deriving the second
equality in the expression above.

First, v can be expressed in terms of the gradient of the streamfunction using (27):

                                               v = ∇ψ×k                                                (27)

Both v and ∇ψ lie in the plane of the page, whereas k is
perpendicular to this plane (points out of page). Post-crossing ∇ψ
by the unit vector k does not change the magnitude but rotates ∇ψ
by 90° clockwise. If instead, we pre-crossed by k we would rotate
∇ψ by 90° counter-clockwise. In either case, the cross product of
k and ∇ψ is a vector lying in the plane of the page and of the same
magnitude as ∇ψ.

                              The other term in the integrand of (30)
                              is n ds, where ds is the magnitude of a
                              differential displacement along the
                              contour, which we will call dr:

                                               ds = dr

                              Since n is a unit vector n ds has the
                              same magnitude as dr but is rotated by 90°. Both n ds and dr lie in the
                              plane of the page. Just as in (27), we can rotate one vector into the other
                              by crossing with k:

                                                              dr × k = n ds                            (31)

Substituting (27) and (31) into (30) yields

                        n.v ds = v.n ds = ( ∇ψ× k ).( dr × k ) = ∇ψ.dr = d ψ                           (32)

The 3rd equality above says that the dot product of the two rotated vectors is the same as the dot
product of the two vectors without rotation (since they are both rotated by the same amount). (32) into
(30) yields:

                            Q
                              =     ∫     n.v ds =     ∫      d ψ = ψ (Q ) − ψ ( P )
                            L
                                  C P→Q              C P →Q




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  63                                     Fall, 2000

To extract the physical meaning of this results, consider two
contours, denoted as C1 and C2 in the figure at right.
Notice that if C1 coincides with a streamline, the velocity is
parallel to the contour at every point any no fluid crosses it:

then:                    Q/L = 0

and                ψ(Q) = ψ(P) = ψ2

Thus          ψ = const. along a streamline

On the other hand, if the contour cuts across two
streamlines (see contour C2 in figure at right), then the difference in value of ψ corresponding to two
different streamlines is just the volumetric flowrate of fluid held between the two streamlines (per unit
length in the z-direction):

                                                  ∆ψ = ∆Q/L


INCOMPRESSIBLE FLUIDS
    By “incompressible fluid” we are usually referring to the assumption that the fluid’s density is not a
significant function of time or of position. In other words,

                                                ∂ρ
                                                ∂t
                                                        b g
                                                   + ∇. ρv = 0


can be replaced by                                 ∇.v = 0

For steady flows, ∂ρ /∂ t = 0 already and the main further requirement is that density gradients be
negligible


                                 b g                   b g                b g
                                       Identity C.1
                              ∇ ⋅ ρv        =         ρ ∇.v + v.∇ρ ≈ ρ ∇.v

Since flow causes the pressure to change, we might expect the fluid density to change — at least for
gases. As we shall see shortly, gases as well as liquids can be treated as incompressible for some kinds
of flow problems. Conversely, in other flow problems, neither gas nor liquid can be treated as
incompressible. So what is the real criteria?

    For an ideal fluid (i.e. no viscous dissipation to cause ∇T), density variations come about primarily
because of pressure variations. For an isentropic expansion, the compressibility of the fluid turns out to
be:




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                64                                       Fall, 2000

                                              FG ∂ρ IJ = 1
                                               H ∂p K S c2
where                                 c = speed of sound in the fluid

Thus changes in density caused by changes in pressure can be estimated as

                                                       1
                                               ∆ρ ≈         ∆p                                         (33)
                                                       c2

According to Bernoulli’s equation, pressure changes for steady flow are related to velocity changes:

                               p v2
                                +   = const.          or        ∆p = − 12 ρ ∆v 2                       (34)
                               ρ 2

                                                       ρ ∆v 2
(34) into (33):                               ∆ρ ≈ −
                                                       2 c2

The largest change in density corresponds to the largest change in v 2, which is v max2 - 0:

                                                              2
                                         ∆ρ      1  v max 
                                               =          
                                         ρ  max 2  c 

If the fraction change in density is small enough, then it can be neglected:

Criteria 1:                                      v max << c

for air at sea level:                    c = 342 m/s = 700 mph

for distilled water at 25°C:            c = 1500 m/s = 3400 mph

For unsteady flows, a second criteria must be met:

                                                            l
Criteria 2:                                        τ >>
                                                            c

where             τ = time over which significant changes in v occur

                          l = distance over which changes in v occur

                          l/c = time for sound to propagate a distance l

For steady flow τ = ∞ and Criteria 2 is always satisfied.


                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                65                                            Fall, 2000

Any fluid can be considered incompressible if both criteria are met.



                                            Viscous Fluids
     To resolve d’Alembert's paradox, we need to introduce another force into our force balance. This
force can be thought of as resulting from friction between the fluid elements. Friction gives rise to
viscous heating which represent an irreversible conversion of mechanical energy into heat. Indeed,
friction is the main difference between an ideal fluid and a real fluid.

                           friction → irreversible deformation → nonideal flow


TENSORIAL NATURE OF SURFACE FORCES
    Friction is a surface force like hydrostatic pressure, but unlike pressure, friction is not isotropic:

isotropic - independent of orientation (direction)

We say that pressure is isotropic because the magnitude of the pressure force is independent of the
orientation of the surface on which it acts. Recall:

                           dFp = -npda

                            |dFp | = pda

which is independent of n (orientation). Viscous friction does not
have this property:

                        |dFf| depends on n

but it's magnitude is proportional to da:

                                                 dFf ∝ da

Thus it makes sense to talk about the force per unit area, which we usually call pressure. In the more
general case in which the magnitude of the force per unit area might depend on the orientation of the
surface, we use the name stress. In general, all surface forces can be lumped together and written as

                                              dFsurf ≡ t(n) da




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                              66                                      Fall, 2000

where t(n) denotes the surface force per unit area acting on the body through the surface element whose
orientation is given by the unit outward normal n. We call this quantity the stress vector.* In what
follows, I will try to convince you that the effect of orientation of the surface can be expressed as

                                                t(n) = n.T

where T is called the stress tensor. While T depends on position and possibly time, it does not depend
on the orientation of the differential surface element da, which is given by n. T is sometimes call the
“state of stress” of the fluid.

    First, let’s try to understand better what we mean when we say a
material experiences some “stress”. Consider a block of some material
which bears some externally applied equilibrium load (see figure at
right). By “equilibrium” I mean there is no net force and no net torque
applied to the body: thus it is at mechanical equilibrium and has no
tendency to accelerate. The material might be a fluid or a solid, but what
we are about to say is easier to imagine if we think of material as a
solid block.

Now consider some mathematical surface inside the material
(indicated by the dotted line in the figure above). What are the
forces exerted across this mathematical surface? To answer this
question, suppose we actually separated the block into two pieces
by physically cutting along this surface without changing the loading.
Block “1” now experiences an unbalanced load -F while block “2”
experiences an unbalanced load +F. Once separated, both blocks
would tend to accelerate in opposite directions.

Why don’t the two halves accelerate when connected? Apparently, half “2” must have exerted a force
on half “1” which we denote as t(n1)A, where A is the area of the cut face, and which equals

                                               t(n1)A = +F

while half “1” exerted an equal but opposite force on half “2”

                                          t(n2)A = -F = -t(n1)A                                   (35)

When expressed per unit area, this internal force between the two halves (when they are physically
connected) is what we mean by the “stress” experienced by the material under load. Given that n1 =
-n2, (35) tells us that




* see Whitaker, Introduction to Fluid Mechanics, Chapt. 4.


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                 67                                    Fall, 2000

                                                b g
                                             t n 2 = − t −n 2b g
                                                                                  bg       b g
More generally, for any mathematically surface having orientation n, we can write t n = − t − n

or                                              b g
                                              t −n = − t +n  b g                                   (36)

In essence, this is just a statement of Newton’s Third Law (for every
action, there is an equal but opposite reaction).

     Now let’s generalize to three dimensions. Suppose we know the
distribution of stress (i.e. the “loading”) on all six faces of a block of
material. Furthermore, suppose this loading is an equilibrium loading
(no net force and no net torque on the block). Let’s try to calculate
the stress on a mathematical surface cutting through the material at an
arbitrary angle. Let the orientation of the mathematical surface be
given by the unit normal n.

Problem: given the surface stress on mutually perpendicular planes
[i.e. given t(i) for x=const plane, t(j) for y=const plane, and t(k) for
z=const plane], calculate the surface stress on a plane of arbitrary
orientation specified by the unit normal n.

Given:                                        t(i), t(j), and t(k)

Find:                                                 t(n)

Solution: We choose the tetrahedron ABCO as our “system.” For the surface forces to be balanced*

                                                zbg
                                                A
                                                    t n da = 0


We evaluate this surface integral by subdividing the surface A into the four faces of the tetrahedron:
planes ABC, BCO, AOC, and ABO. For each surface, we need to evaluate the outward normal n, the
stress vector t and the surface area A. The results are tabulated below:




* More generally, in our force balance, we should include body forces and inertia as well as surfaces



                                                                                       z
forces. If we let V→0 then the volume integrals for body forces and inertia vanish more rapidly than
surface forces. Thus for the surface A enclosing a tiny volume V, we must still require t da = 0 for the
                                                                                       A
surface of every differential volume element.

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                             68                                          Fall, 2000


                                         Outward                        Stress
                              Plane      Normal          Area           Vector
                              ABC           n             A               t(n)
                              BCO           -i            .
                                                        n iA             t(-i)
                              AOC           -j          n.jA             t(-j)
                              ABO          -k           n.kA             t(-k)

Applying the Mean Value Theorem to our surface integral:

                 z
                 A
                                 bg b gb g b gb g b gb gA
                     t da = 0 = t n + n.i t − i + n.j t − j + n.k t − k


Dividing by A cancels the A out of our expression for the integral. Taking the limit as all the dimensions
of the block vanish (i.e. as A→0) allows us to replace the unknown averages with their limit, which is
the value of the vector at the point that the tetrahedron collapses about.

                             t(n) + (n.i)t(-i) + (n.j)t(-j) + (n.k)t(-k) = 0

or                             t(n) = -(n.i)t(-i) - (n.j)t(-j) - (n.k)t(-k)                          (37)

Next we apply (36). Of course, we can replace n in (36) with i or j or k. Using (36) in (37):

                                t(n) = (n.i)t(i) + (n.j)t(j) + (n.k)t(k)

Recalling the definition of dyadic product, we could re-write this expression as

                                   t(n) = n.it(i) + n.jt(j) + n.kt(k)

                                 t(n) = n.[it(i) + jt(j) + kt(k)] = n.T

The sum (inside square brackets) of these three dyadic products is some second-rank tensor, which is
independent of n. We denote this tensor by T.

Significance: to calculate the surface force on some differential surface area da having orientation n, we
just multiply this expression for the stress by the area:

                                           dFsurf = n.T da                                           (38)

where T is called the stress tensor and dFsurf represents the net surface force (all contributions) acting
on the body whose outward normal is n. While T does not depend on n, it might depend on position
inside a solid which is nonuniformly stressed; thus

                                                T = T(r)



                                 Copyright © 2000 by Dennis C. Prieve
06-703                                                        69                                 Fall, 2000

represents the state of stress of the fluid. In terms of the components of the tensor, we say that

                      Tij = j th component of the force acting on a ri = const surface

To make this more understandable, it might help to express T in terms of other variables in a familiar
problem, say an ideal fluid.

For an ideal fluid:                                        T = -pI

To show that this is correct, we will compute the surface force and show that it reduces to the familiar
force due to pressure:

                      dFsurf = n.Tda = n.(-pI)da = -p(n.I)da = -pnda = dFp


GENERALIZATION OF EULER'S EQUATION
    Recall that Euler’s equation was derived by applying Newton's Second Law (F=ma) to any fluid
element. To generalize this result to include friction, we replace the “pressure force” by the surface
force.

Instead of:                     z
                                V
                                    ρ
                                        Dv
                                        Dt                         z
                                           dV = Fg + F p = ρg dV − np da
                                                                   V
                                                                            z
                                                                            A


we have:                    z
                            V
                                ρ
                                    Dv
                                    Dt                             z
                                       dV = Fg + Fsurf = ρg dV + n.T da
                                                                   V
                                                                            z  A

Applying the Divergence Theorem and combining the three volume integrals:


                                           z FGH
                                           V
                                                   ρ
                                                       Dv
                                                       Dt
                                                                       IJ
                                                                        K
                                                          − ρg − ∇.T dV = 0


Since this must result for all choices of V in some region, the integrand must vanish at every point in that
region, or:

                                                        Dv      1
                                                           = g + ∇.T                                   (39)
                                                        Dt      ρ

which is a more generalized version of Euler's Equation.

For an ideal fluid:                                        T = -pI




                                        Copyright © 2000 by Dennis C. Prieve
06-703                                               70                                           Fall, 2000
                                                             identity
                                                               C.11
and                                   ∇ ⋅ T = − ∇ ⋅ ( pI )      =       − ∇p

For a proof of identity C.11, see Hwk #3, Prob. 4. For a real fluid, there is an additional contribution
to T from friction:

For a real fluid:                               T = -pI + τ                                             (40)

where τ is called the viscous stress or the deviatoric stress (since it represents the deviation from
ideal). Note that:

CAUTION:                    τ in these notes (and in Whitaker) → - τ in BS&L

By convention, τij in these notes is positive for tensile stresses (which result from stretching a solid rod)
whereas τij in BS&L is positive for compressive stresses (which result from putting a fluid under
pressure). Although BS&L's notation might make more sense for fluids (which usually do not
experience tensile stresses), we will use the other convention because it is more commonly used in
continuum mechanics: in particular, this is the convention used by Whitaker.

    When written in terms of scalar components, the above equation between T and τ represents 9
equations in 10 unknowns (the nine components of τ plus p). Clearly p and τ cannot yet be uniquely
determined, given the state of stress T. One additional relationship is required. For a real fluid, we
somewhat arbitrarily define p as the average of the three diagonal components of T:

                                                        c h
                                               p ≡ − 13 T:I                                             (41)

where        T:I =  ∑∑ Tije ie j : ∑ e k e k  = ∑∑∑ Tij ( ei .e k ) ( e j .e k ) = ∑Tkk
                    i j            k                   1424     31   424   3 k
                                               i j k         δ ik        δ   jk


or, in Cartesian coords.:                  T:I = Txx+Tyy+Tzz

In any coordinate system, T:I is called the trace of T. Then p can be thought of as the isotropic
contribution to stress (that part of the normal stress which acts equally in all directions) while τ
represents the remainder, or the nonisotropic part. (40) might be regarded as decomposing τ into an
isotropic part and a nonisotropic part, which is a common thing to do with tensors.

     The choice of p made in (41) also represents the thermodynamic pressure; i.e. the hydrodynamic
p is now the same as the p appearing in the thermodynamic equation of state:

                                                ρ = ρ (p,T)

To summarize, we decompose the state of stress into two contributions: an isotropic pressure:



                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  71                                    Fall, 2000

                                                          c h
                                                   p = − 13 T:I

and a deviatoric stress:                        τ = T - (1/3)(T:I)I

Taking the divergence of (40):                  ∇. T = - ∇p + ∇. τ

and substituting it into Euler's Eq. (39):

                                               Dv
                                           ρ
                                               Dt
                                                  = ρg − ∇p +
                                                                   3
                                                                   ∇.τ
                                                                new for
                                                                real fluids



MOMENTUM FLUX
    Up to this point we have spoken of T as the stress on the fluid. T can also be thought of as
momentum flux. To convince yourself that momentum is being transported (like heat and mass),
consider the problem of unsteady simple shear flow. At time t=0, an initially quiescent fluid confined
between infinite parallel plates is disturbed by imposing motion on the upper plate. The velocity profile
gradually develops into linear shear flow.

Note that, like all other fluid elements, the fluid
element at y=h/2 undergoes acceleration:

                  ∂ v x/∂ t > 0 at y=h/2

In other words, the fluid element is gaining
momentum.      How can it acquire momentum?
Answer: momentum is transported to y=h/2 from
above through friction between fluid elements. There
are two directions associated with transport of
momentum:                                                         bv g
                                                                   x y=h
                                                                              2

  1) direction of the momentum being transported
     (in this example, x-momentum is transported)

  2) direction in which the momentum is transported
     (y)

For this reason momentum flux must be a 2nd rank
tensor. It turns out that:




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                              72                                          Fall, 2000

                                     -T = diffusive flux of momentum*

                                  ρvv = convective flux of momentum

In multicomponent systems, the flux of any species i due to convection is written as the product of
concentration and velocity:

                       conv. flux of species i = civ [=] mol-cm-2-s-1 [=] rate/area

where                                         ci [=] mol/cm3

More generally, by “flux,” I mean:

flux — that tensor (of whatever rank), which when pre-dotted by nda, gives the rate of
       transport through the surface element having area da in the direction of its unit normal
       n.

For example, the flux of fluid mass by convection is

                                     ρv [=] g-cm-2-s-1 [=] rate/area

Proof: pre-dotting by nda we obtain:

                                 (nda).(ρ v) = ρ n.vda = ρ (dq) [=] g/s

which represents the mass flowrate across da. Indeed the convective flux of total fluid mass also has the
form of concentration times velocity since

                                ρ = concentration of mass [=] mass/vol.

It might come as less of a surprize that ρvv is the convective flux of momentum if you realize that

                              ρv = conc. of momentum [=] momentum/vol.

After all, momentum is mass times velocity. So

                                 (ρv)v = ρvv = conv. flux of momentum

Example: Apply conservation of linear momentum to an arbitrary fluid system. Thus prove that T and
ρ vv are momentum fluxes, as claimed.

Solution: We choose a system that has fixed boundaries in the laboratory reference frame: in other
words, V ≠ V(t). Referring to the discussion above in which ρ v is the concentration of momentum, ρ vv



* "Diffusive" means it results from random collisions between molecules.


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                    73                                        Fall, 2000

is the momentum flux by convection, and -T is the momentum flux by diffusion, conservation of
momentum requires

                   d
                   dt
                   14
                      z                z
                        ρv dV = − n.ρvv da
                      V 243     1A4243
                                                            zc h
                                                          − n. −T da
                                                          1A4 4244     3
                                                                                  z
                                                                                + ρg dV
                                                                                 1 424
                                                                                   V    3
                  accumulation    in by convection        in by diffusion   in by external forces

Applying the divergence theorem, combining the resulting volume integrals, and invoking the result for
arbitrary V, we would obtain

                            ∂
                            ∂t
                                 b g
                               ρv +                     b g
                                                     ∇. ρvv
                                                     1424 3
                                                                      − ∇.T − ρg = 0
                            123
                           ∂ρ
                           ∂t
                                v+ρ
                                      ∂v
                                      ∂t
                                                    b g
                                                  ∇. ρv v + ρ v.∇ v


Expanding the partial time-derivative of the product and expanding the divergence of the dyadic product
using identity C.8

                          LM ∂ρ + ∇.bρvgOPv + ρ ∂v + ρv.∇v − ∇.T − ρg = 0
                           N1∂4t 42443Q ∂t
                                  0

Finally, we recognize the factor inside square brackets must vanish according to the general continuity
equation. After this term is dropped, the remainder is Euler's equation:

                                               ∂v
                                           ρ      + ρv.∇v = ∇.T + ρg
                                               ∂t

Comment: In writing the statement of conservation of momentum, we have a term representing
transport of momentum into the system by the action of external forces. Clearly, an object falling from
rest in a gravitational field acquires momentum through the action of gravity. Does this acquisition
represent transport to the body from outside, or does it represent a "generation" term? If it is
spontaneous momentum generation, then momentum is not conserved.

With a little reflection, we can convince ourselves that the action of gravity is “transport” and not
“generation.” Some of the earth's momentum is being transported to the falling object. When the object
eventually collides with the earth and comes to rest again, that momentum is transported back to the
earth. The total momentum of the universe has not changed: momentum is conserved.

Actually, the term we call “diffusion of momentum” also arises from the action of an external force: this
time it's the action of “surface” forces, rather than “body” forces.




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                              74                                            Fall, 2000

RESPONSE OF ELASTIC SOLIDS TO NORMAL (UNIAXIAL) STRESS
   By generalizing, the force balance plus the mass balance now contain more unknowns than
equations:

                                  τ , v, and p → 9+3+1 = 13 unknowns

                                Euler + Continuity → 3+1 = 4 equations

Missing is the constitutive equation which is an empirical description of how the fluid or solid material
responds to stress. Obtaining this relationship is an important objective of that field of science known as
continuum mechanics.

Let's start by considering solids, whose response is more familiar. Suppose I try to stretch a rectangular
bar by applying a tensile force, F.

We will attempt to describe the response of
the bar under conditions of mechanical
equilibrium. To have the bar stretch instead of
accelerating as a result of the force, I must
apply an equal but opposite force to the other
end. Let the x-axis be aligned with the
direction of the applied force:

                                                  Fx = |F|

At equilibrium, the length of the bar will increase by an amount δ x. Hooke's law tell us that:

                                                   F L
                                               δx ∝ x x
                                                   L y Lz

                                                Fx
but                                                   = Txx
                                               L y Lz

is the applied stress. The two subscripts on stress denote the two directions associated with it: the first
subscript denotes the orientation of the surface the force is applied to (x=const) while the second
denotes the direction of the applied force (x).

Since the deformation is proportional to the original length of the bar, it makes sense to define the
deformation per unit length, which is called:




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  75                                      Fall, 2000
                                                             δx
strain:                                             ε xx =
                                                             Lx

Later we will see that strain is a second-rank tensor. For now, we will interpret the order of the
subscripts as follows: the first subscript gives surface (in the above case, an x=const surface), while the
second subscript gives the direction of the deformation (in the above
case, the x-direction).

Experiments show that the strain increases with the applied stress as
shown in the figure at right. At low stress levels, the strain is directly
proportional to the applied stress: Hooke's law* for purely elastic
solids is:

                              Txx = Eε xx

                            E [=] force/area

where E is called the Young's Modulus. It turns out that deformation also occurs in the y and z
directions:

                                                ε yy = ε zz = - νε xx

where ν is called Poisson's ratio. For most materials

                                                0.28 < ν < 0.33


RESPONSE OF ELASTIC SOLIDS TO SHEAR STRESS
    Instead of a normal force, suppose I apply a shear force on the upper face. To keep the object
from translating, I must apply an equal but opposite force on the lower
face.

This generates a force couple or torque, which will cause the body to
spin. To prevent a steady increase in rotation speed, I must apply an
equal but opposite torque. Recalling that torque is force times lever
arm:

                              F x Ly = F y Lx




* Robert Hooke (1635-1703). English experimental physicist. Hooke’s law first stated in 1660.


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                               76                                        Fall, 2000

                                                Fx    Fy
Dividing by LxLyLz:                                 =
                                               Lx Lz L y Lz

or                                               Tyx = Txy

where Tyx = x-component of force/area acting on y=const surface. Note that this implies that the stress
tensor is symmetric. This turns out to be true for virtually all loadings.*

This loading produces a shear deformation in which

                                 δ x ∝ Ly

and                              δ y ∝ Lx

The corresponding definition of shear strain is:

                            F δx + δy I = ε = ε
                        1
                        2   GH L y Lx JK xy yx
Since we applied a symmetric stress, by applying forces in both the x and y directions, we average the
strains in the x and y directions to obtain a symmetric strain. Moreover, this definition yields a strain
which is invariant to rotation of the xy axes. As with normal stress, shear stress produces a shear strain
in direct proportion to the stress:

                                                Txy = 2Gε xy                                 (pure shear)

where G is call the modulus of elasticity for pure strain. Although the units are the same, the value
of 2G is different from that of E.


GENERALIZED HOOKE'S LAW
    Now let's try to generalize to some arbitrary loading which might involve both shear and normal
stresses.

Consider two arbitrary material points in
the material. Let x denote the position of
the second material point relative to the
first, before the load is applied. After the
load is applied, both material points




* For a proof based on the assumption of local equilibrium, see W:4.3


                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                    77                                   Fall, 2000

move as shown by the dashed lines in the figure at right. After the load the position of the second
material point relative to the first becomes x+δ , where

                                        δ (x) = relative displacement

of two material points initially located at x. The resulting strain can be generalized as:

                                            ε = 1 ∇δ + ∇δ t
                                                  2
                                                               b g
                                                       F ∂δ j + ∂δ i I
or                                         ε ij = 12   GH ∂xi ∂x j JK
Note that this general definition of strain reduces to earlier expression for strain in the cases of pure
normal or pure shear stress:

                            ε xx = 21
                                      FG ∂δ x + ∂δ x IJ = δ x and Txx = E ε xx
unixial normal stress:
                                       H ∂x ∂x K L x
                               F ∂δ y + ∂δ x I = 1 F δ y + δ x I and Txy = 2G ε xy
                     ε xy = 12 G
pure shear:
                               H ∂x ∂y JK 2 GH L x L y JK
If the strain components are all small, we might reasonably suppose that Hooke's law generalizes into a
linear relationship between any component of strain and the nine components of stress (or vice versa):

                                                      3    3
                                          Tij = ∑ ∑ Cijkl ε kl                                       (42)
                                                 k =1 l =1

There are then nine coefficients for each component of stress, making a total of 81 possible coefficients.
But just by requiring:

     •   symmetry of T (Tij=Tji)

     •   isotropy of material (e.g. same Young's modulus applies to uniaxial stress in x-direction as
         for y and z)

it can be shown that the number of independent constants is reduced from 81 to only 2. It is customary
to express the stress tensor as the sum of two tensors: one isotropic [(ε :I)I] and the remainder [ε -
(ε :I)I]. Denote the two independent constants as k 1 and k 2 and use them as weighting factors in the
sum:




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                  78                                    Fall, 2000

                                   T = k1  ε − ( ε:I ) I  + k2 ( ε:I ) I
                                           14  4244     3          123
                                              remainder            isotropic


This can be rearranged                              b
                                       T = k1 ε + k 2 − k1 ε:I Igd i
Sometimes the constants are choosen as the two coefficients in this new form

                                           T = 2ηε + λ ε:I I d i
which represents the generalization of Hooke's law of elasticity. Thus of G, E and ν, only two are
linearly independent properties of the material; using the above relationship we can show (HWK Set #5,
Prob. 1) that

                                                         E
                                                ν=         −1
                                                        2G


RESPONSE OF A VISCOUS FLUID TO PURE SHEAR
    Suppose I have a thin layer of fluid held between parallel plates and I apply a force Fx to the upper
plate. To cause deformation, rather than simple
                                                                                Lx
translation of the system, I must apply an equal but
opposite force to the lower plate.

As before, this produces a force couple or torque.
To keep the system from rotating, I must apply an
opposing torque. Once again this equilibrium state
corresponds to a symmetric stress tensor. From our
experience, we know that eventually the upper plate
will slide past the lower plate at some steady relative
speed Ux.

                              F x Ly
response:              Ux ∝
                              L x Lz

This speed represents a rate of deformation:

                                                         dδ x
                                                Ux =
                                                          dt

and the speed per unit thickness represents a rate of strain:




                                 Copyright © 2000 by Dennis C. Prieve
06-703                                                  79                                           Fall, 2000
                                             dδ x            F I
                                                  dt = d δ x = dε yx
                                    Ux
                                    Ly
                                       =
                                               Ly      dt L yGH JK
                                                                dt

Finally, the applied force divided by the area over which it's applied represents a shear stress:

                                          Fx
                                               = Tyx = τ yx = τ xy
                                         Lx Lz

Rewriting the proportionality as an equality, we have:

                                                             dε yx
                                                τ yx = µ
                                                              dt

which is called Newton's Law of Viscosity (1686). Alternatively, BSL point out that

                       U x dv x
                       Ly
                          =
                            dy
                                       and      cτ xy h BSL = −cτ xy hnotes = −µ dvdyx

GENERALIZED NEWTON'S LAW OF VISCOSITY
    This generalization of Newton's law of viscosity to arbitrary loading parallels that of Hooke's Law
with the strain tensor replaced by the rate of strain. The main difference is that now the deformation is a
function of time:

         δ (x,t) = displacement of material pt.
                    = deformation

The trajectory of a material point initially located at
x(0) is given by:

             x[x(0),t] = x(0) + δ [x(0),t]

Keeping the material point fixed (i.e. x(0) is constant)
while we take the time derivative is the same as taking the material derivative of position. Thus the rate
of deformation of fluid elements is:

                                                d δ Dx
                                                   =    =v                               (rate of deformation)
                                                dt   Dt

given by the fluid velocity. Just like we define the gradient of the deformation to be the strain:


                                                    2
                                                             b g
                                             ε = 1 ∇δ + ∇δ t ,                                          (strain)


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                        80                                     Fall, 2000

the gradient of the rate of deformation must be the rate of strain:

                    Dε                                    LM∇ Dδ + F ∇ Dδ I t OP = 1 ∇v + ∇v t (rate of strain)
               d=
                  Dt
                     = 12
                          D
                          Dt
                                  ∇δ + ∇δb g   t
                                                   = 21
                                                           MN Dt GH Dt JK PQ 2 b g
Newton’s law of viscosity is a linear relationship between the stress and the rate of strain. Generalizing
that linear relationship again leads to a relationship like (42), except that the strain tensor ε k l is replaced
by the rate of strain tensor dk l. Once again, in order for the stress tensor T or τ to be symmetric and
for the material to be isotropic, only two of the 81 coefficients Cijkl are independent. We use the two
independent coefficients to multiply the isotropic part of τ and its remainder:

                                                          e
                                         τ = 2µ d + κ − 23 µ d:I I jc h
where µ is the usual viscosity and κ is called the second coefficient of viscosity. d:I has a special
significance, which we will now point out. As we showed on page 70, d:I is the trace of d:

                                            d:I = d11 + d22 + d33

                                                    F ∂vi + ∂v j I
Writing in terms of the velocity v:                 GH ∂x j ∂xi JK
                                            d ij = 21


                                                 F ∂v ∂v I ∂v
                                        d11 = 21 G 1 + 1 J = 1
                                                 H ∂x1 ∂x1 K ∂x1
                                               ∂v1 ∂v 2 ∂v 3
so                                     d:I =      +    +     = ∇.v
                                               ∂x1 ∂x 2 ∂x 3

So the trace of the rate of deformation tensor is just the divergence of the velocity. Newton's law of
viscosity becomes:

                                                        e
                                         τ = 2µ d + κ − 23 µ ∇.v I jb g
For an incompressible fluid:                         ∇ .v = 0

                                         τ = 2µd = µ ∇v + ( ∇ v ) 
                                                                   t
leaving                                                                                       (incompressible)
                                                                    


NAVIER-STOKES EQUATION
    Once again, let’s go back to Euler's equation, generalized to account for the tensorial nature of
viscous friction:

                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                  81                                 Fall, 2000

                                           ρ Dv/Dt = ρ g - ∇p + ∇.τ

For an incompressible fluid, ∇.v=0 and

                                             τ = 2µd = µ[∇v+(∇v)t]

                                          ∇.τ = µ[∇.∇v + ∇.(∇v)t]

but using identity C.10:                     ∇.(∇v)t = ∇(∇.v) = 0

leaving                                      ∇.τ = µ∇.∇v = µ∇2v

                                                Dv
Euler's equation becomes:                   ρ      = ρg − ∇p + µ∇ 2 v                    (ρ ,µ=const)
                                                Dt

which is known as the Navier-Stokes Equation (1822).♣ Now we have as many equations as
unknowns:

                                                v, p → 4 unknowns

                                          N-SE, Continuity → 4 eqns


BOUNDARY CONDITIONS
   But to successfully model a flow problem, we need more than
a sufficient number of differential equations. We also need
boundary conditions.

A typical boundary is the interface between two immiscible
phases -- either two fluids or a fluid and a solid. One such
boundary condition which can generally be applied is the no slip
condition:

                           vI = vII




♣ Sir George Gabriel Stokes (1819-1903): British (Irish born) mathematician and physicist, known for
his study of hydrodynamics. Lucasian professor of mathematics at Cambridge University 1849-1903
(longest-serving Lucasian professor); president of Royal Society (1885-1890).

                                      Copyright © 2000 by Dennis C. Prieve
06-703                                               82                                        Fall, 2000

For example, in the problem of uniform flow around a stationary solid
sphere, this requires:

at r=a:                            vf = vs = 0

which means that there is no flow of fluid across the boundary:

at r=a:                                            vr = 0

We also assumed this boundary condition when we solved the potential
flow problem. But “no slip” also means:

at r=a:                                            vθ = 0

Note that our potential flow solution did not satisfy this second equation:

for pot’l flow:                                  v r(a,θ) = 0

                                        v θ(a,θ) = -(3/2)Usinθ ≠ 0

In addition to d'Alembert's paradox, potential flow fails to satisfy the no-slip condition.*

For a fluid-solid interface, in which the velocity of the solid phase is known, the no-slip condition is
sufficient. But in the case of fluid-fluid interface, the velocity of the second fluid is usually unknown.
Then no-slip just relates one unknown to another.

A second boundary condition can be obtained by considering the stresses
acting on the material on either side of the interface. Suppose we were
to apply a loading as on page 66 to a two-phase region straddling the
interface, as suggested in the figure at right. Note that the loading is
balanced: that is there is no net force on the system.

If we were to split the system into two parts along the
interface, each of the two halves would tend to accelerate.
This suggests that, when the two phases are in contact, each
exerts an “internal” force on the other, as shown in the figure
at right. These forces are equal but opposite:

                     F1on2 = - F2on1 = F




* Although "no slip" is usually applicable, there are at least two situations where no slip might not be
applicable: 1) when the mean-free path of gas molecules is comparable to the geometric dimension, and
2) when a liquid does not wet the solid.

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                              83                                          Fall, 2000

which might be thought of as “Newton’s Third Law”: for every action, there is an equal but opposite
reaction. Using (38) (on page 68) to express the forces in terms of the stress tensor:

                                        n2 .T1 A = −n1.T2 A = F

where A is the area of the interface and where ni is the normal to the interface pointing out of phase i.
However, from the geometry, we can deduce that

                                              n1 = − n 2 ≡ n

Newton’s Third Law becomes:                   n.T1 = n.T2                                             (43)

When the interface is highly curved (e.g. a small oil droplet in water), then surface tension can produce a
discontinuity in the normal components of the above force, which has not been included in the above
analysis [see L&L, Chapt. 7 or Hunter, Vol I., p237f]. The more general form of this boundary
conditon is

                                        n.(T1 - T2) = γ(∇s.n)n                                        (44)

where γ is another property of the fluid called the surface tension and

                                    ∇s ≡ (I - nn).∇

is the surface component of the ∇ operator. We will have more to say about this near
the end of the course. For now, we will neglect surface tension effects.

                          ∇s.n = curvature of surface [=] m-1

For a flat surface, n is independent of position along the surface so that ∇s.n = 0 and
(44) reduces to (43).



               Exact Solutions of N-S Equations
   Exact solution of the Navier-Stokes equations presents a formidible mathematical problem. By
“exact” I mean:

exact — neither viscous nor inertial terms are neglected (i.e. approximated by zero, as opposed
              to being identically zero)

One difficulty is the non-linear inertial term. Most of the powerful mathematical techniques (such as
eigenfunction expansions, used in “separation of variables”) only work when the P.D.E. is linear.




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                               84                                           Fall, 2000

     Of course, if we can neglect the higher-order viscous terms, then we can cope with the non-linearity
using a velocity potential, as we did earlier in solving problems in potential flow. However, viscous
terms are seldom completely negligible and leaving them in the equation makes the problem much more
difficult by increasing the order of the P.D.E. Nevertheless, it is possible to find exact solutions in
certain cases, usually when the inertial terms vanish in some natural way. We will now examine a few of
these problems having exact solutions.


PROBLEMS WITH ZERO INERTIA
    First, let’s consider problems in which the fluids elements travel along straight streamlines at constant
velocity. Then their acceleration vanishes identically.




Flow in Long Straight Conduit of Uniform Cross Section

    Suppose we have pressure-driven flow in a long straight
conduit whose cross section does not vary along the flow. In
mathematical terms, the conduit is a cylinder of arbitrary cross-
section. Define Cartesian coordinates such that the axis of the
cylinder corresponds to the z-axis. In a very long pipe, we expect
that v z will depend on z (as well as x and y) near the entrance and
exit of the pipe.

                           z




            Entrance             Fully            Exit
             region            developed         region

In particular, near the entrance, we say the velocity profile is “developing”; i.e. evolving with z. Outside
the entrance and exit regions v z will be independent of z. This situation is called fully developed flow.
For fully developed, steady flow:

                                                v z = v z(x,y)

                                                vx = vy = 0

Note that this automatically satisfies the Continuity Equation:

                                             ∇.v = ∂ v z/∂ z = 0


                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                85                                          Fall, 2000

For this form of solution, it turns out that the nonlinear inertial terms automatically vanish:

                                                  v.∇v = 0

To convince yourself of this, consider steady flow. Since the velocity of a fluid element is constant along
a straight streamline:

for steady flow:                           v.∇v = Dv/Dt = a = 0

In other words, fluids elements are not accelerating. Thus inertial forces are identically zero in steady
pipe flows. Strictly speaking, Reynolds number should not be thought of the ratio of inertial to viscous
forces in this problem, since inertia is zero for laminar flow although the Reynolds number is not zero.

For a steady flow, the N-S equations are:

                                            0 = µ∇2v - ∇p + ρ g

Note that for a vertical pipe:*                    p = p(z)

but more generally for a horizontal or inclined pipe:

                                                 p = p(x,y,z)

where the dependence on position in the cross section arises from the contribution to pressure from the
hydrostatic head (i.e. from g). For this and some other problems, it’s helpful to decompose the total
pressure into contributions from gravity (i.e. hydrostatic pressure, ph ) and from flow (called the
dynamic pressure, P)

                                                p = ph + P

                                                     4
                                              ∇ p = ∇ph + ∇P
                                                     ρg

From our earlier analysis of hydrostatic equilibrium (see page 39), we know that ∇ ph = ρg .

Note that                                      ∇ p − ρg = ∇P

Next, we substitute this into the N-S Equation. Expanding them in component form:




* In the absence of gravity, ∂ p/∂ x and ∂ p/∂ y must vanish: see the x- and y-components of (45).


                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                      86                                  Fall, 2000

x - component:                                       0=−
                                                         ∂P         U|
                                                         ∂x
                                                         ∂P
                                                            P= P z   V|    bg
                                                     0=−
y - component:
                                                         ∂y           |W
                                                                    dP
z-component:                                     0 = µ∇ 2 v z −                                       (45)
                                                                    dz

where we have written the last term as the total derivative instead of the partial derivative because the
first two equations require that P be a function of z alone. We can immediately deduce that P must be a
linear function of z

                                                             dP
                                                  µ∇ 2 v z =
                                                    b g f1bz g
                                                  123        dz
                                                   g x, y


since the dP/dz is independent of x and y, while the velocity profile is independent of z, so (45) requires
that the two functions of different variables be equal:

                                     g(x,y) = f(z) = const. w.r.t. x,y,z

which can only be true if both functions equal the same constant: thus P(z) must be a
linear function. For steady flow in a circular conduit of radius a, the “no-slip” b.c.
requires

at r = a:                               vz = 0                                   (46)

Since neither the b.c. nor the differential equation contain any dependence on θ, we
expect the solution to be axisymmetric about the z-axis:

                                                     v z = v z(r)

                                      1 d   FG
                                            dv   1 dP IJ
(45) becomes:
                                      r dr   H
                                           r z =
                                             dr  µ dz  K
                                                      = const


The general solution of this equation is:

                                        b g 41µ dP
                                     vz r =
                                                dz
                                                   r 2 + c1 ln r + c2


Requiring the solution to be bounded at the center of the tube (as r→0) forces us to choose c1=0 while
the remaining constant can be chosen to satisfy the no-slip condition (46). The particular solution is the
familiar parabolic velocity profile:



                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                      87                           Fall, 2000

               b g 41µ dPdz er 2 − a 2 j
           vz r =


The volumetric flowrate through the conduit
is computed from:


           z      a
                         z b gb g
     Q = n.v da = v z r 2 πr dr
           A
                 0



                                                 Q=
                                                       πa 4
                                                            −
                                                              dPFG       IJ
or
                                                        8µ    dz H        K
which is called Poisueille's Formula. This formula was been derived for a number of different cross
sections. In general


                                                  Q=
                                                       kA 2
                                                            −
                                                              dPFG       IJ
                                                        µ     dz H        K
where                                      A = cross-sectional area of duct

and where k is some constant which depends on the shape of the duct; e.g.

circle:                                          k = 1/8π = 0.0398

square:                                              k = 0.0351

                                                            ε
ellipse:
                                                        e
                                                     4π 1 + ε 2      j
where ε = b/a ≤ 1 is the ratio of the minor to major axis.


Flow of Thin Film Down Inclined Plane

     Suppose we have fluid overflowing some reservoir and
down an inclined plane surface. Although there might be
some entrance or exit effects (at the upstream and
downstream ends of the plane), if the plane is sufficiently
long compared to these regions, then what we see in
experiments is a region in which the fluid flows downward as
a film of uniform thickness. Let's try to analyze this central
region in which the film in uniform.



                                     Copyright © 2000 by Dennis C. Prieve
06-703                                               88                                           Fall, 2000

Let the x-axis be oriented parallel to the inclined plane in the direction of flow and let the y-axis be
perpendicular to the plane. One of the boundary conditions will no “no-slip” at the solid surface:

at y=0:                                            vx = 0

At the very least, there must be flow in the x-direction: otherwise there could be no viscous force to
balance gravity. In addition, the x-component must vary with y: v x must vanish at y=0 (no slip) and be
nonzero for y>0. The simplest form of solution which is consistent with those constraints is:

                                                v = v x(y)e x

Note that this form automatically satisfies the requirement of continuity for an incompressible fluid:

                                            ∇.v = ∂ v x/∂ x = 0

Substituting this velocity field into the Navier-Stokes equations:

x:                                    0 = - ∂ p/∂ x + µd2v x/dy2 + ρ gx                                  (47)

y:                                           0 = - ∂ p/∂ y + ρ gy                                        (48)

z:                                              0 = - ∂ p/∂ z

where                                       gx = g.e x = gcosβ

and                                         gy = g.e y = -gsinβ

Integrating (48) with respect to y:

                                         p(x,y) = - ρ gysinβ + c(x)                                      (49)

where the integration constant might depend on x, but cannot depend on z (according to z component
above) or y. Now let's turn to the boundary conditions. Continuity of stress across the interface
yields:

at y=δ :                          n.Tliq = n.Tgas = n.(-pgasI + τ gas)

Now the viscosity of air is about 0.001 times that of water. Then it is reasonable to treat the air as an
inviscid fluid: i.e. neglect τ gas. This leaves

                                        n.Tliq ≈ -npgas = -npatm                                         (50)

where patm=1atm. Now e y is the unit normal to the interface in this problem

                        e y.Tliq = e y.(-pI + τ ) = -pe y + τyxe x + τyye y + τyze z



                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                     89                              Fall, 2000

When v x = v x(y), the only nonzero components of the deviatoric stress tensor are τxy=τyx.* Dropping
the other terms, (50) becomes:

                                              -pe y + τyxe x = -e ypatm

Equating separate components:

x-component:                                        τyx(x,y=δ ) = 0                              (51)

y-component:                                       p(x,y=δ ) = patm

With this result, we can evaluate the integration constant in (49):

                                       p(x,y=δ ) = - ρ gδ sinβ + c(x) = patm

Thus                                           c(x) = patm + ρ gδ sinβ

(49) becomes:                               p(x,y) = patm + ρ g(δ -y)sinβ

Thus ∂ p/∂ x = 0 and (47) becomes:

                                                µd2v x/dy2 = - ρ gcosβ

No-slip at the wall requires:

at y=0:                                                   vx = 0

whereas if the stress in (51) is evaluated using Newton's
law of viscosity, we also require:

at y=δ :             τyx = µ dv x/dy = 0

Using these two boundary conditions, the velocity profile
can be uniquely determined:

                            L                       2O
             b g ρgδ2µcosβ MM2FGH δy IJK − FGH δyIJK PP
                    2
           vx y =
                            N                         Q

* For a Newtonian fluid, the 9 scalar components of the stress tensor are expressed in terms of the
derivatives of the velocity field on p145 of Whitaker. These expressions (except for a change in sign)
can be found on p88 of BSL or at the website for our course —

http://www.andrew.cmu.edu/course/06-703/NLV_RCCS.pdf.

                                      Copyright © 2000 by Dennis C. Prieve
06-703                                                        90                            Fall, 2000

By integrating over a plane perpendicular to the flow, we can evaluate the flowrate:


                   z              zz
                                  W   δ
             Q = n.v da =                 v x ( y ) dy dz
                   A              0   0


                            ρgWδ 3 cos β
                       Q=
                               3µ

where W is the width of the plane.

Time Out: The main novelty of this problem is the
treatment of the free surface. We treated the air as if it
was inviscid, although it has some viscosity. How important is the drag imposed by the air? This is the
subject of Hwk #6, Prob. 2

To answer this question, let’s consider a vertical film of water in
contact with a vertical film of air, as shown in the sketch at right.
Let’s re-solve the problem and see how large δ a must be for a given
δ w before we can neglect the effect of the air. For fully developed
flow, the velocity and pressure profiles should have the form:

                                 vx = vx ybg
                                 v y = vz = 0
                             b        g
                            p x, y , z = 1 atm

NSEx becomes:

                                                            d 2 v xw
for water:                                      0 = µw                 + ρw g
                                                             dy 2

                                                                d 2 v ax
for air:                                            0 = µa
                                                                   dy 2

where we have taken ρ a = 0. Applying “no slip” at each of the three interfaces

at y=0:                                                vw    bg
                                                        x 0 =0


at y=δ w:                                     vw  b g b g
                                               x δ w = v x δw ≡ U
                                                         a


at y= δ w+ δ a :                                  v ax bδ w + δ a g = 0



                                      Copyright © 2000 by Dennis C. Prieve
06-703                                                    91                                     Fall, 2000

The particular solutions to the two ODE’s are

                                    vw b g ρ2µwwg bδ w − yg y + U δyw
                                     x y =                                                            (52)


                                                    δ + δa − y
                                             bg
                                          v ax y = U w
                                                       δa
                                                                                                      (53)


The interfacial speed U is unknown, but is choosen to match the shear stress at the interface:

at y=δ w:                                         b g
                                            τ wyx δ w = τ ayx δ w  b g
For Newtonian fluids, the stresses can be related to velocity profile:

                                          dv xw                    dv ax
                                     µw                   = µa
                                           dy                       dy
                                                  y =δw                    y =δ w


Using the velocity profiles of (52) and (53), this stress matching yields:

                                                               U       U
                                     − 12 ρ w g δ w + µ w         = µa
                                                               δw      δa

                                                        ρ w gδ w
Solving for U:                                U =1
                                                      2 µw    µa
                                                               +
                                                          δw       δa

The flowrate of the water is

                                                                      µw µa
                                                                         +
                            z bg
                           δw                                     3 4
                     Q                   ρ w gδ w 1
                                                3
                                                           ρ w gδ w δ w δ a
                       =      v x y dy =
                                w
                                                  + Uδ w =                                            (54)
                     W                    12µ w    2        12µ w µ w µ a
                            0                                           +
                                                                                    δw   δa

If the air film is very thick, the flowrate becomes

                                                   ρ gδ 3
                                       Q∞
                                       W
                                          ≡ lim Q = w w
                                           δ a →∞   3µ w
                                                          lq                                          (55)


which is the same expression we had in the Notes when the viscosity of air was completely ignored.
Dividing (54) by (55):




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                               92                                           Fall, 2000

                                         µ   µ     µ    δ
                                       4 w + a    4 w + w
                                  Q   1 δ w δa   1 µ a δa
                                    =          =
                                 Q∞ 4 µ w µ a    4 µw δw
                                           +          +
                                        δ w δa     µ a δa

When the viscosity of water is 1000 times larger than air (i.e. µw = 1000 µa ), this gives

                                                        δ
                                                  4000 + w
                                            Q   1       δa
                                              =
                                           Q∞ 4         δ
                                                  1000 + w
                                                        δa

                                        Q
To reduce the flowrate by 1% means         = 0.99 , for which the air film thickness must be
                                        Q∞

                                              δ a = 0.074 δ w

So even if the air is stilled by a nearby boundary, the drag of the air on the free surface of the water will
be negligible (provided the boundary is not too close). In the absence of a rigid boundary in the air,
negligible error is made by treating the air as inviscid.

Time In!


PROBLEMS WITH NON-ZERO INERTIA
    L&L list only three flow problems in which both including viscous and inertial terms are important
and in which exact solutions are known:

    1) rotating disk
    2) converging (or diverging) flow between nonparallel planes




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                              93                                    Fall, 2000

     3) the submerged jet




Rotating Disk*

    We will now examine the solution of the first problem —
the rotating disk — because it is used as a model system for
transport experiments. An infinite plane disk immersed in a
viscous fluid rotates uniformly about its axis. Determine the
motion of the fluid caused by this motion of the disk. This
problem was first solved by von Karmen (1921) using
cylindrical coordinates with the z-axis coinciding with the axis
of rotation.

                              ω
Define:               ζ=z
                              ν

where             ν = µ/ρ [=] cm2/s

is called the kinematic viscosity.

Then:               v r(r,z) = rωF(ζ)

                    v θ(r,z) = rωG(ζ)

                     bg
                  v z z = νω H ζ     bg
                     p(z) = µωP(ζ)

Continuity and N-S become:                               1.0

                     2F + H' = 0                         0.8
                                                                     G
                                                                                 -H
r:               F2+F'H-G2-F" = 0                        0.6

θ:               2FG+HG'-G" = 0                          0.4

                                                         0.2                 F
z:                 P'+HH'-H" = 0
                                                           0
                                                               0         1       2    3           4
                                                                                 ζ


* See S:p93 (6th Ed); L&L:p79.


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                              94                                            Fall, 2000

where the prime (') denotes differentiation with respect to ζ. Boundary conditions take the form:

z=0:                F=H=P=0, G=1

z=∞:                    F=G=0

An important property of this solution is that the z-component of velocity depends only on z. For this
reason, convective heat and mass transfer problems becomes one-dimensional.

This is perhaps the only problem in which there is flow normal to a wall where the mass-transfer
coefficient can be determined analytically. For this reason, the rotating disk is a favorite tool of
researchers in mass transfer.



                           Creeping Flow Approximation
CONE-AND-PLATE VISCOMETER
The cone-and-plate viscometer consists of a flat plate, on which is
                                                                                    Ω
placed a pool of liquid whose viscosity is to be measured, and an
inverted cone which is lowered into the liquid until its apex just                                  θ
touches the plate. The cone is then rotated at some angular velocity,
Ω, and the torque required to turn the cone or to keep the plate                         α
stationary is measured.                                                                       ε

Spherical coordinates are most convenient to describe this problem,
since the surface of the cone and of the plate can be defined as
θ=const surfaces:

surface of cone:              θ=α                                                        z

surface of plate:            θ = π /2                                                     θ

The cone is undergoing solid-body rotation (see HWK #4, Prob. 3):                             r          y
for θ≤α :                  v(r) = Ω×r                                      x
                                                                                          φ
In spherical coordinates, the position vector is




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  95                                   Fall, 2000

                          r = re r(θ,φ )

while the angular velocity is (see figure and p49):

             Ω = Ω e z = Ω [(cosθ)e r - (sinθ)e θ]            (56)

Substituting into the expression for solid body rotation:

θ<α :               v = Ω×r = rΩsinθ e φ

The principle direction of flow is the φ-direction. “No-slip”
requires:

at θ=α :                                          v φ = rΩsinα

                                                  vr = vθ = 0

at θ=π /2:                                       vφ = vr = vθ = 0

The simplest velocity profile which is consistent with these boundary conditions is:

                                                  v φ = v φ(r,θ)

                                                  vr = vθ = 0

Next, I’d like to argue that the pressure profile can be expected to be independent of φ .

                                                   p = p(r,θ)

Since there exists only a φ -component of velocity, fluid streamlines will turn out to be circles (the
contour corresponding to r=const and θ=const). The circle corresponds to 0 ≤ φ ≤ 2π .

By analogy with the last problem, you might guess (incorrectly) that pressure must decrease along the
direction of flow. However, in steady flow p cannot continously decrease with φ for all φ . At the very
least, pressure must be periodic in φ ; in other words, p(r,θ,φ ) = p(r,θ,φ +2π ). So any decreases in
pressure over part of the cycle will have to be balanced by increases over the remaining part. Why
should the pressure be higher at some points along the streamline than at other? There is no geometrical
asymmetry with respect to φ and no reason to expect any φ -dependence in the pressure.

The velocity profile automatically satisfies continuity:

                                           ∇.v = (rsinθ)-1∂ v φ/∂φ = 0




                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                      96                                   Fall, 2000

Ignoring gravity, the Navier-Stokes equations in spherical coordinates become:♣

r:                                              - ρ v φ2/r = - ∂ p/∂ r                                (57)

θ:                                          - ρ v φ2cot θ/r = -r-1∂ p/∂θ                              (58)

                          R|S 1 ∂ Fr 2 ∂vφ I + 1 ∂ Fsin θ ∂vφ I − vφ U|V
φ:                  0=µ
                            |T r 2 ∂r GH ∂r JK r 2 sinθ ∂θ GH ∂θ JK r 2 sin2 θ |W                     (59)


Notice that the pressure and velocity fields have been separated. We can first solve the φ-component
for the velocity profile and then substitute the result into the r and θ-components to solve for the
pressure profile. Based on the boundary conditions, we might try a solution of the form:

                                                     v φ(r,θ) = rf(θ)

When this is substituted into the φ-equation above, the r-dependence cancels out, leaving a second
order ordinary differential equation in f(θ). The solution leads to:

                                                                  g ( θ)
                                               vφ = r Ω sin α                                         (60)
                                                                  g (α)

where

                            1      FG
                                1 + cosθ        IJ
              g( θ) = cotθ + ln
                            2       H
                                1 - cosθ
                                         sinθ
                                                 K
                                                                           g( θ )

This function is plotted in the figure at right. Notice that in the        π    2 .θ
                                                                                   0
center (i.e. for θ near π /2) the function is nearly linear. A
more careful asymptotic analysis would reveal that

                lim { g ( θ )} = 2ε + O ε5
               θ→ π2
                                          ( )                    (61)                        θ
                                                                                             π
                                                                                       0.5

where                    ε ≡ π2 − θ

Notice that this is a linear function of θ as expected from the plot above.




♣ http://www.andrew.cmu.edu/course/06-703/NSE_sph.pdf


                                      Copyright © 2000 by Dennis C. Prieve
06-703                                                       97                                      Fall, 2000

Velocity Profile for Shallow Cones. Most cone-
and-plate viscometers are designed with cone angles
near to π /2. The reason for this will be apparent in a
                                                                                         θ
moment. Note the arc lengths rε and rε 1 on the figure h=r ε1
at right. For shallow cones (i.e. as α →π /2), rε                           r        α       r           z=r ε
                                                                                ε1               ε
asymptotically becomes the vertical distance from some
arbitrary point (r,θ) in the fluid to the plate,


                      θ → π2
                               l q
                       lim rε = z


while rε 1 becomes the vertical distance between the plate at the cone:

                                                    lim {r ε1 } = h ( r )
                                                   θ1 → π2


So in this limit we can use (61) to replace

as α →π /2:                     bg
                               g θ → 2ε = 2
                                                   z
                                                   r

                                     h
and             g ( α ) → 2ε1 = 2          and         sin α → 1
                                     r

Then (60) simplifies to linear shear flow (at least locally)

                                                                   z
for α →π /2:                                            vφ = rΩ
                                                                   h

Notice that the rate of strain is independent of position:

                                         ∂vφ        rΩ      rΩ Ω
for α →π /2:                                   =          =    =   = const.
                                         ∂z        h ( r ) r ε1 ε1

This is an important advantage for a rheometer, since all the fluid experiences the same strain rate.
Later, we will show that stress is also spatially uniform for shallow cones.




                                     Copyright © 2000 by Dennis C. Prieve
06-703                                              98                                          Fall, 2000

Torque. To use this device as a viscometer, we need to interpret torque
measurements. So let’s try to evaluate the torque for a given velocity profile.
Recall that torque is force times lever arm:

                              T = (rsinα )F

                                      Using vector notation:

                                                         T = r×F

                                      In our problem, the force F is not
                                      concentrated at one point, but instead is
                                      distributed over the surface of the plate.
                                      Let’s consider the contribution to force and torque from some
                                      differential element of surface having area da.

                                      Once the velocity profile is known, we can evaluate the stress field
                                      from Newton’s law of viscosity. Given the stress field, we can
                                      calculate the force on any differential solid surface element of area
                                      da from:

                                                                   dF = n.Tda

                                      where n is a unit normal pointing out of the body dF acts on.
                                      Similarly, we calculated the contribution to the torque by crossing
                                      this force with the local lever arm:

                                                             dT = r×dF = r×(n.Tda)

                                    Let’s calculate the torque exerted by the fluid acting on the
stationary plate. Then we want to choose n to point out of the plate or

                                                  n = -e θ

The net force exerted on the lower surface is:

                                         F = ∫AdF = - ∫Ae θ.Tda

Similarly, the torque exerted on the lower surface is:

                                      T = ∫Ar×dF = ∫Ar×(-e θ.T)da                                     (62)

First let’s consider:                e θ.T = Tθre r + Tθθe θ + Tθφe φ



                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                    99                                     Fall, 2000

To evaluate the torque, we need to first cross this vector with the lever arm, which is the position vector.
In spherical coordinates, the position vector is:

                                              r(r,θ,φ ) = re r(θ,φ )

                         r×(e θ.T) = rTθr(e r×e r) + rTθθ(e r×e θ) + rTθφ(e r×e φ)

                                              = rTθθe φ - rTθφe θ

Anticipating that the torque vector T will have the same direction as the angular velocity Ω , we dot both
sides by e z which equals -e θ on the plate (θ = π /2):

           dT z
            da
                             c         h              c        h
                = −e θ. r × −e θ.T = e θ. r × e θ.T = e θ. rTθθ e φ − rTθφ e θ = −rTθφ


Now we substitute Newton’s law of viscosity:♣

                                             µ         ∂  vφ       1 ∂vθ 
                             Tθφ = τ θφ =        sin θ          +                                  (63)
                                             r       ∂θ  sin θ  sin θ ∂φ 

What’s left is to substitute our velocity profile from (60) into (63), which yields

                                 C                                                sin α
                     Tθφ =                      where                  C ≡ −2µΩ                        (64)
                                 2
                             sin θ                                                g (α)

and where α is the cone angle. On the surface of the flat plate, θ = π /2 and sinθ = 1. Tθφ (evaluated at
θ=π /2) will be independent of φ; then we can choose da to be a ring of radius r and thickness dr,
leaving:

                                           Tz = ∫0R(-rTθφ)(2π rdr)

                                                          sin α
                                           T = 23 πµ R3 Ω                                              (65)
                                                          g (α)

where R is the radius of the region of the plate which is wetted by the fluid.

Shear Stress and Torque for Shallow Cones. If the cone angle α is very shallow (i.e. α→π /2) then
Tθφ will be practically independent of position: from (64):




♣ http://www.andrew.cmu.edu/course/06-703/NLV_sph.pdf


                                     Copyright © 2000 by Dennis C. Prieve
06-703                                                   100                                   Fall, 2000
                                                                      −2µΩ
                                          lim       Tθφ ( θ ) = C =
                                       α → θ → π2                      2ε

for any θ. This means the entire fluid experiences the same stress. This has a number of important
advantages for rheological studies making the cone-and-plate viscometer one of the important
viscometric flows. Substituting (61) into (65)

                                                                      Ω
                                            lim [T     ] = 23 πµR3 ε
                                           ε→ 0

    Comment on Solution. There is a problem with our solution to NSE: when (60) is substituted
back into (57) and (58), there is no single function p(r,θ) which will satisfy them. In other words, (60)
is not an exact solution. It turns out that (60) is a reasonably good approximation if Ω is not too large.
The exact solution has the form:

                              g ( θ)
              v = r Ω sin α         e + O Ω2
                              g ( α) φ
                                             ( )
where O(Ω2) means that this term vanishes like Ω 2 as Ω →0.
The centripetal force on fluid elements undergoing a circular
orbit causes those fluid elements to be “thrown outward” in
the +r-direction. Since fluid elements near the rotating cone
are rotating faster than fluid elements near the stationary
plate, we have outflow near the cone supplied by inflow near
the plate. The resulting r- and θ-components of velocity are
called secondary flow, whereas the original φ -component is
call the primary flow.

     Ω 2 (the secondary flow) vanishes faster than Ω (the primary flow), so for small Ω, the leading term
is approximately correct. This is called the creeping-flow approximation.


CREEPING FLOW AROUND A SPHERE (Re→ 0)
    Let’s return to the problem of flow around a sphere
(or motion of a sphere through a stagnant fluid). For
boundary conditions, we impose “no slip” on the surface
of the sphere and far from the sphere the flow is
undisurbed:

at r=a:                   v=0

as r→∞:                  v→U


                                   Copyright © 2000 by Dennis C. Prieve
06-703                                              101                                         Fall, 2000

Here an exact solution to the Navier-Stokes equations is not possible. Of course, the vector equation
can be converted into a scalar equations using the stream function, but that yields a 4th order nonlinear
P.D.E. Although this could be solved numerically, considerable simplification can be obtained if either
the viscous terms or the inertial terms can be neglected — even if they are not identically zero. One
limiting case is creeping flow which corresponds to the limit in which the Reynolds number is small (i.e.
Re→0). In this limit the inertial terms in the Navier Stokes equations can usually be neglected.


Scaling

    To show that inertial terms are neglibible, let’s try to estimate the order of magnitude of viscous and
inertial terms for uniform flow at speed U over a sphere of radius R.

                                        ρv.∇v = −∇p + µ∇ 2
                                        123           123v
                                         inertia             viscous

We will use a technique called scaling (akin to dimensional analysis). We start by listing all the
parameters in the problem. In this problem, the parameters are

parameters:                                  U, R, ρ and µ

A characteristic value for each term in the equations of motion is then written as a product of these
parameters raised to some power:

                                        each term ∝ Ua Rb ρ cµd

For example, throughout most of the region, the fluid velocity is undisturbed:

                                                   |v| ≈ U

where the symbol “≈” should be read as “scales like” In “scaling” we ignore any position dependence
as well as any numerical coefficients, so |v| scales as U, although |v| might be significantly less than U
near the surface of the sphere. From the boundary conditions, v changes from 0 at r=R to U at r=∞.
To estimate the magnitude of the gradient ∇v we need to estimate over what distance most of this
change occurs. In the solution of the potential flow problem, the velocity profile along the rear
stagnation line is

                                    L    F RI 3O
                                                                             vr
                v r br , θ = 0g = U M1 − G J P cos θ
                                    MN H r K PQ                          U

We expect something similar for Stokes flow. Two of the nine                          U
                                                                                  3
scalar components of ∇v are                                                           R                r-R
                                                                         0
                                                                                  R       2R     3R


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                               102                                      Fall, 2000

                                        ∂v r      R3         U
                                             = 3U    cos θ ≈
                                         ∂r       r4         R

                                   1 ∂v r       F
                                              1 R3         I
                                   r ∂θ         GH
                                          = −U − 4 sinθ ≈
                                               r r
                                                          U
                                                          RJK
We again ignore the position dependence: we scale r as R and treat cosθ and sinθ as “1”. Then both
components above scale as U/R as do other components of ∇v associated with derivatives of v θ. So

                                                      ∆v U
                                             ∇v ≈       ≈
                                                      ∆r R

Likewise the velocity gradient can be expected to decay from a maximum value of U/R near the sphere
surface to zero in the bulk; this change occurs over a distance on the order of R.

                                              ∆ ∇v U R   U
                                     ∇2v ≈        ≈    =
                                               ∆r   R    R2

With these estimates, we can further estimate the magnitude of viscous and inertial forces:


                               inertia = ρ v.∇v ≈ ρ U      F U I ρU 2
                                                       b gGH R JK = R
                                                                U
                                      viscous = µ ∇ 2 v ≈ µ
                                                                R2

                                  inertia ρU 2 R ρUR
                                         ≈        =   = Re
                                  viscous µ U R 2   µ

where Re is the Reynolds number. So as Re→0, we should be able to neglect inertial forces

for Re<<1:                                 0 = −∇p + µ∇ 2 v                                        (66)

                                               ∇. v = 0

at r=R:                                          v=0

as r→∞:                                    v → U, p → p∞

Eq. (66), called Stokes Equation, is common to all low-Reynolds number problems; it’s not specific
to the sphere. A common trick to reduce the number of unknowns is to take the curl of both sides of
the equation:


                                 Copyright © 2000 by Dennis C. Prieve
06-703                                               103                                   Fall, 2000

                                          0 = - ∇×∇p + µ∇×∇2v                                    (67)

But                                             ∇×∇ p = 0

Moreover, using identity F.1,

                                          b g           b         g
                                ∇ 2 v = ∇ ∇.v − ∇ × ∇ × v = −curl 2 v
                                         123
                                            0

for incompressible flow. Then (67) becomes:

                                                curl 3v = 0                                      (68)


Velocity Profile

      We might try to seek a solution having the form of potential flow:

                                                  v = ∇φ                                         (69)

since                                       ∇×v = ∇×∇φ = 0

(68) is automatically satisfied. But we know that the potential flow solution for the sphere does not
satisfy the no slip boundary condition. On the other hand, the boundary conditions are axisymmetric:

                                             v φ = 0, ∂ /∂φ = 0

so we might seek a solution using the stream function:


                                          v=∇×
                                                   LMψ br , θg eφ OP
                                                    N r sinθ Q
Computing the curl in spherical coordinates using the tables (http://www.andrew.cmu.edu/course/06-
703/Vops_sph.pdf) (also see HWK #5, prob. 1):

                                  e φψ          1    ∂ψ         1 ∂ψ
                            curl          =v= 2         er −            eθ
                                  r sin θ    r sin θ ∂θ 14243
                                               14243           r sin θ ∂r
                                                       vr                  vθ


Taking the curl a second time, using the same tables:

                                    eφ ψ 
                             curl2          =∇×v = K=
                                                          eφ
                                                                − E 2ψ (        )                (70)
                                    r sin θ           r sin θ



                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                  104                                      Fall, 2000

where E2 is a partial differential operator given by:


                                   E 2ψ =
                                            ∂2 ψ
                                                    +
                                                        sinθ ∂     FG
                                                                  1 ∂ψ              IJ
                                             ∂r 2                   H
                                                         r 2 ∂θ sinθ ∂θ              K
Since we have to take the curl twice more, it might look like we have a lot of algebra to look forward
to. But, as it turns out, the rest is easy. We need to evaluate:


                                  3
                             curl v = curl   2(
                                                  ∇ × v ) = curl   2 φ
                                                                         e
                                                                               ( − E ψ ) 
                                                                                    2

                                                                             r sin θ    

where the second equality is (70). The argument of this final curl-squared has exactly the same form as
that of the left-hand side of Eq. (70), except that the scalar +ψ, which is a function of r,θ, is replaced by
-E2ψ, which is also a scalar function of r,θ. So all I have to do is to replace ψ by -E2ψ on the right-
hand side of (70):

                             R| eφ e− E 2 ψ j U| e φ 2 2
              curl v = curl S|                 V| =                  eφ
                  3         2
                                                    − E e− E ψ j =         E 2 eE 2 ψ j
                              T r sinθ W r sin θ                   r sin θ

To satisfy (68), which represents the curl of the Navier-Stokes equation, we choose the streamfunction
to satisfy:

                                               E2(E2ψ) = 0

Translating the boundary conditions at r=R in terms of stream function:

v r=0:                                             ∂ψ/∂θ = 0                                         at r=R

v θ=0:                                             ∂ψ/∂ r = 0

Translating the boundary conditions at r→∞ in terms of stream function (see HWK #5, Prob. 1a):

as r→∞:                                     ψ → (1/2)Ur2sin2θ                                           (71)

The trivial solution ψ = 0 satisfies the P.D.E. and the b.c. at r=R, but not the b.c. at r→∞. Based on
the form of this nonhomogeneous b.c., we guess the solution has the following form:

Try:                                         ψ(r,θ) = f(r)sin2θ

                         E2ψ = E2[f(r)sin2θ] = ... = (f"-2r-2f)sin2θ = g(r)sin2θ

where:                                        g(r) = f"-2r-2f

Then:                                  E2(E2ψ) = (g"-2r-2g)sin2θ

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                               105                                          Fall, 2000

The Navier-Stokes equation become

E2(E2ψ)=0:                                    g"-2r-2g = 0                                              (72)

def’n of g:                                  f"-2r-2f = g(r)                                            (73)

b.c. ’s:                                 f → (1/2)Ur2 as r→∞                                            (74)

                                            f = f ’ = 0 at r=R                                          (75)

These two coupled second-order O.D.E.’s can be combined to produce a single fourth-order O.D.E.
in f(r). The result is a Cauchy-Euler equation whose general solution is (see footnote on page 52):

                                     f(r) = c1r-1 + c2r + c3r2 + c4r4

Applying b.c. (74):                                 c4 = 0

                                                c3 = (1/2)U

As r becomes large, terms which are proportional to higher power of r dominate those of lower power.
To have the third term win over the fourth, requires us to kill the fourth term by setting its coefficient to
zero. The remaining constants are evaluated in a straightforward manner. The result is:

                                              LM R    r          FG r IJ 2 OP sin2 θ
                              ψ( r , θ) = UR 2 14 − 34 + 12
                                               MNr    R           H R K PQ                              (76)


                        L    3 R 1 F RI
                                        3O
      v r ( r , θ ) = U M1 − 2 + 2 G J P cos θ
                        NM r H r K QP
                          L   3 R 1F RI
                                         3O
     v θ ( r , θ ) = −U M1 − 4 − 4 G J P sin θ
                          MN r H r K PQ
The figure at right compares the streamlines for
Stokes flow with those for potential flow. The
streamlines correspond to values of the
streamfunction which are uniformly spaced at
about the same interval for both profiles.


Displacement of Distant Streamlines

    From the figure above, you can see that streamlines in Stokes flow are displaced away from the
sphere – even those streamlines which are quite distant – especially compared with potential flow, in


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                 106                                   Fall, 2000

which the distant streamlines become straight. It turns out that all streamlines are displaced away from
the sphere in Stokes flow.

Consider the streamline in the figure at right which
corresponds to ψ = ψ0. Far upstream, the
coordinates of the streamline correspond to r→∞
and θ→π such that rsinθ → const, which we will
denote as y (see Hwk #5, Prob. 1a). The
relationship between y and ψ0 can be deduced from
(71):


                                      r→∞
                                                 a f
                                       lim ψ r , θ → 12 U r1
                                                           2
                                                           4sin
                                                             24
                                                               2
                                                                3θ
                                      θ→ π                         y2


                                                   ψ 0 = 12 Uy 2                                   (77)

At the equatorial plane θ = π /2, the r coordinate of the streamline must satisfy (76):

                                                       LM R − 3 r90 + 1 F r90 I 2 OP
                          ψ( r90 , π2 ) = ψ 0 = UR2 41
                                                        MN r90 4 R 2 GH R JK PQ                    (78)


Eliminating ψ0 between (77) and (78):

                                                       3       1 R3
                                        y   2
                                                = r90 − Rr90 +
                                                   2
                                                       2       2 r90


                                    y = r90 1 −
                                                3 R
                                                      +FG IJ FG IJ
                                                        1 R 3
or
                                                2 r90   H K H K
                                                        2 r90

For distant streamlines, r90 will be very large compared to R, so that R/r90 << 1. Then the square-root
in the expression above is unity plus a small correction, which can be estimated as the first term in a
Taylor series expansion of the square-root function: 1 + ε = 1 + 12 ε +K

                                     L   3F R I
                             y = r90 M1 − G J + OGF  R I2 O
                                                        J  P        3
                                                             ≈ r90 − R
                                     NM 4 H r90 K H r90 K QP        4

where the “O(R/r90)2” means that these terms decay to zero like (R/r90)2 as R/r90→0. When R/r90 is
sufficiently small, we can neglect these terms compared to the others. This is how the second
(approximate) equality above was obtained.



                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                 107                                Fall, 2000

Finally                                    l
                                         lim
                                       r →∞
                                            r90 − yq = δ = 34 R
                                        90


Thus, even streamlines infinitely far away are displaced a distance equal to ¾ R.


Pressure Profile

    Once the velocity profile is known, the pressure can be determined from

                                                   ∇p = µ∇2v

                                       R| ∂p = 3µURr −3 cos θ
Substituting v:                         S| 1 ∂∂pr 3 −3
                                         |T r ∂θ = 2 µURr sinθ
and then integrating with p→p∞ at r→∞ as the b.c.
yields:

                                    cos θ
              b g
             p r , θ = p∞ −
                              3
                              2
                                µUR
                                     r2

This profile corresponds to a higher pressure on the
upstream side of the sphere (θ=π ) than on the
downstream side (θ=0). Thus it appears as if a
drag will be produced by this solution.

                                       - ∫Apnda = ... = 2πµRUk

is called the form drag which arises from normal stresses. This however is not the total drag. More
generally, we expect the net force exerted on the particle by the fluid is:

                              z
                        F = n.T da = − np da +
                              A              1
                                             4
                                               z
                                              A24
                                                3
                                                              z
                                                              1
                                                              A424
                                                                 3
                                                                  n.τ da = 6πµRUk

                                              2 πµRU k        4 πµ RUk
                                             (form drag)   (skin friction)


where A is the surface of the sphere r=R

                                                     n = er

From symmetry, we expect that this force will have only a z-component (the direction of bulk motion);
so let’s concentrate on finding that component:



                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                 108                                   Fall, 2000

                                              Fz = ∫Ak.(e r.T)da                                   (79)

Substituting                                      T = -pI + τ

                                          e r.T = -p(e r.I) + e r.τ

                                                = -pe r + e r.τ

                                        e r.τ = τrre r + τrθe θ + τrφe φ

For the determined velocity profile, Newton’s law of viscosity in spherical coordinates (W:146) yields
τrφ=0 for all r and τrr=0 at r=R:

at r=R:                                      e r.T = -pe r + τrθe θ

                                     k.(e r.T) = -p(k.e r) + τrθ(k.e θ)

Using k = e z from (56):        k.(e r.T) = -pcosθ - τrθsinθ

Finally, we can integrate using an azimuthal strip of width Rdθ and of
radius Rsinθ:

                              da = 2π (Rsinθ)(Rdθ)

(79) becomes:


                       z b g
                       π
         Fz = 2 πR 2                                 b g
                           − p R, θ sinθ cos θ − τ rθ R, θ sin2 θ dθ
                       0

Finally τrθ is expressed in terms of the velocity profile using Newton’s law of viscosity and subsequent
integration yields:

                                            Fz = 2πµRU + 4πµRU

We have already noted that the contribution from the pressure profile is call form drag. The second
contribution is call skin friction. The total drag force is

                                               Fdrag = 6πµRU                  (moving reference frame)




                                     Copyright © 2000 by Dennis C. Prieve
06-703                                             109                                         Fall, 2000

which is known as Stokes Law (1850).* In the expression above, U is the velocity the distant fluid
flowing around a stationary sphere. If we switch back to the original (stationary) reference frame (see
page 48f), Stokes Law becomes

                                           Fdrag = −6πµRU                    (stationary reference frame)

where now U is the velocity of the sphere moving through otherwise stagnant
fluid. Note that the drag force acts in a direction opposing the direction of Fdrag                  U
motion of the sphere.

    Experimental results for the drag force around submerged bodies are
usually expressed in terms of a dimensionless drag coefficient. The quantity that is used to make this
drag force dimensionless is

                                       1 ρU 2 [ =] K. E. = force
                                       2           vol      area

This quantity also can be shown (according to Bernoulli’s equation) to represent the ∆p required to stop
fluid which is flowing at speed U. Multiplying this by the projected area gives the force required to stop
the flow, which would otherwise pass through the sphere:

                                                     Fdrag
                                     CD =
                                            1
                                            2
                                              ρU 2 ×       :
                                                           πR 2
                                                       projected area

where π R2 is the projected area of the sphere; in other words, π R2 is the area of the sphere’s shadow
cast along the direction of flow. Using this definition, Stokes equation for the drag force on a sphere
yields:
                                                      12
                                               CD =
                                                      Re

                                                     ρUR
where                                         Re ≡
                                                      µ




* Sir George G. Stokes (1819-1903), born in Shreen, Ireland, educated at Cambridge; theoretical
physicist.

                                 Copyright © 2000 by Dennis C. Prieve
06-703                                            110                                       Fall, 2000




Comparison with experimental results confirm that this works very well for Re<0.1. The reproduction
above (taken from BSL, p192) uses the diameter for Reynolds number, rather than the radius. The
“friction factor” on the y-axis differs by a factor of two from the drag coefficient defined above.


CORRECTING FOR INERTIAL TERMS
    For larger Re, Stokes law underestimates the drag force. Of course, this is due to the increasing
importance of inertia which has been neglected. A number of investigators have attempted to extend the
validity of Stokes law by including inertial terms in the analysis. We will now summarize some of these
and hint at the difficulties involved.

First, note that as Re →0 for flow around a sphere, the NSE approximated by

                                            µ∇2v = ∇p

which is called Stokes equation. Stokes (1850) solved this equation to obtain:

                                            F = 6πµRU.

The usual approximation to solving differential equations containing a small parameter (i.e. Re) is to
perform a perturbation expansion. Basically, the idea is to perturb the small parameter away from
zero value by means of a Taylor series.




                                Copyright © 2000 by Dennis C. Prieve
06-703                                                      111                                         Fall, 2000

PERTURBATION EXPANSION
time out: Let’s illustrate the main idea behind this powerful mathematical technique by means of a
simple example (Example 25.1 from Greenberg). Find the solution y(x;ε ) to the following ODE
involving a small parameter which we denote as ε :

                                                y' + y + ε y2 = 0                                            (80)

subject to the initial condition:                 y(0) = cos ε                                               (81)

where the independent variable spans the range 0 ≤ x < ∞ and the parameter ε is small: 0 ≤ ε << 1.
Note that the solution of this problem is almost trivial in the special case of ε =0 (first-order linear ODE)

                                                  y(x;0) = e-x

but obtaining a solution when ε ≠ 0 is more challenging (because the ODE becomes nonlinear). The
general idea behind a perturbation expansion is to “perturb” the easily obtained solution away from ε =0
by seeking a solution in the form of a Taylor series expansion about ε =0:

                                                ∂y ( x; ε )        1 ∂ y ( x ;ε )
                                                                      2
                      y ( x; ε ) = y ( x; 0 ) +                 ε+                     ε2 + K
                                   123             ∂ε              2! ∂ε   2
                                    y0 ( x )    14 4244     ε=
                                                             30                   ε= 0
                                                                   1442443
                                                 y1 ( x )              y2 ( x )


Of course, this assumes that y(x,ε ) is “analytic” about ε =0.♣ It remains to be seen if the solution has
this property or not. Renaming the unknown coefficients (i.e. the partial derivates), we look for a
solution having the form

                                    y(x,ε ) = y0(x) + y1(x)ε + y2(x)ε 2 + ...                                (82)

Note that the coefficients y0, y1, y2 … are not functions of the parameter ε . Substituting (82) into (80):

             (y'0 + y'1ε + y'2ε 2 + ...) + (y0 + y1ε + y2ε 2 + ...) + ε (y0 + y1ε + y2ε 2 + ...)2 = 0        (83)

Next we expand the squared sum by distributing each term of the first series over each term in the
second series:

                  (y0 + y1ε + y2ε 2 + ...)2 = (y0 + y1ε + y2ε 2 + ...)(y0 + y1ε + y2ε 2 + ...)




♣ “Analytic” means that these partial derivatives exist and that the series converges to y(x,ε ).


                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                        112                                          Fall, 2000

                                         y0 + y1 ε + y2 ε2 + K
                                         y0 + y1 ε + y2 ε2 + K

                                         y02 + y0 y1ε + y0 y2 ε2 + K
                                                y0 y1ε + y12 ε2 + K
                                                         y0 y2 ε2 + K

                                                          (                )
                                         y02 + 2 y0 y1ε + y12 + 2 y0 y 2 ε 2 + K

Substituting this result for the squared sum in to (83) and collecting terms of like power in ε :

Solution continues … and will be completed in the next revision of the notes.



First, let’s write the equation in dimensionless form: we will denote the dimensionless variables using an
asterisk:

                v                    r                                         p − p∞                ρUR
         v* ≡                 r* ≡                ∇* ≡ R∇           p* ≡                  ε ≡ Re =
                U                    R                                         µU R                   µ

The Navier-Stokes equations for steady flow become:

                                             εv*.∇ * v * = ∇ *2 v * −∇ * p *

We then look for a solution having the form of a Taylor series expansion about ε = 0:

                           v*(r*,θ;ε ) = v0(r*,θ) + ε v1(r*,θ) + ε 2 v2(r*,θ) + ...

Similarly for the pressure profile. Substituting this infinite series into the Navier-Stokes equation
(dropping the *’s)

            b                 gb                        g e
          ε v 0 + εv 1 +L . ∇v 0 + ε∇v1 +L = ∇ 2 v 0 + ε∇ 2 v 1 +L − ∇ p0 + ε∇p1 +L j b                g
                          b              g          e               j e
                    0 ε 0 + v 0 .∇v 0 ε1 +L = ∇ 2 v 0 − ∇ p0 ε 0 + ∇ 2 v 1 − ∇ p1 ε 1 +L  j
Next we bring all terms to the right-hand side of the equation. We then collect terms of like order in the
small parameter (i.e. terms which are multiplied by ε raised to the same power). To obtain zero for the




                                         Copyright © 2000 by Dennis C. Prieve
06-703                                               113                                          Fall, 2000

sum for all values of ε we cannot rely on cancellation of positive and negative terms.♣ Instead, the
coefficient of each ε n must vanish separately. This leaves the following equations:

ε 0:                                        0 = ∇ 2 v 0 − ∇p0                                            (84)

ε 1:                                     v 0.∇ v 0 = ∇ 2 v1 − ∇p1                                        (85)

and so on ... Note that (84) is just Stokes equation. The solution for v0 can then be substituted into
(85) leaving a linear equation to be solved for v1 and p1.

This is the approach used by Whitehead (1889).♥ In many problems, this procedure works.
Unfortunately, the solution for the higher order terms in the current problem cannot satisfy the boundary
conditions. This result is known as Whitehead’s Paradox.♦ Another method must be used.

    As an alternative, Oseen (1910) used an entirely different approach. He approximated the inertial
terms and solved:

                                          ρ U.∇v = µ∇2v - ∇p

thus obtaining:                         F = 6πµRU[1 + (3/8)Re]

In principle, one could refine the solution further by substituting the resulting solution for v in place of U
and then re-solving for an improved v. In practice, although the Oseen equations are linear, their
solution is sufficiently difficult that no second approximations are known.

    In 1957, Proudman & Pearson obtained the next order correction using a different technique
called matched-asymptotic expansions. In this technique a different form for the expansion is sought
near the sphere (which is called the “inner expansion”):

r≈R:                          vi = v0i(r,θ)+v1i(r,θ)(Re)+v2i(r,θ)(Re)2+...




♣ If the sum of different functions of ε vanished for one particular value of ε (as a result of cancellation
of positive and negative terms), then this same sum of functions evaluated at a different value of ε would
not necessarily vanish. The only way we can guarantee that the sum vanishes for every value of ε is to
make every term vanish for value of ε . See also footnote on page 27 which concerns integrals rather
than sums.

♥Alfred North Whitehead (1861-1947), English mathematician and philosopher, who collaborated with
Bertrand Russell on Principia Mathematica (1910-13) and, from the mid-1920s, taught at Harvard
University and developed a comprehensive metaphysical theory.

♦ See Van Dyke, p152-3.


                                   Copyright © 2000 by Dennis C. Prieve
06-703                                               114                                      Fall, 2000

and far from the sphere (which is called the “outer expansion”):

r>>R:                      vo = v0o (ρ ,θ)+v1o (ρ ,θ)(Re)+v2o (ρ ,θ)(Re)2+...

where                                           ρ = rRe

The inner expansion is identical with Whitehead’s which can be made to satisfy the no slip condition at
r=R but the result does not have the correct form far from the sphere. Rather, the outer expansion is
made to satisfy the boundary condition far from the sphere and then appropriately match with the inner
solution to determine the remaining integration constants. The result is:

                            F = 6πµRU[1 + (3/8)Re + (9/40)Re2lnRe + ...]

The term inside square brackets can be thought of as a correction to Stokes equation:

                             Re =            0.01          0.1      1.0
                             [...] =         1.004         1.032    1.375

Comparing the bracketed term with unity gives some idea of the error incurred by neglecting inertia.


FLOW AROUND CYLINDER AS RE→ 0
   Now let’s look at the analogous problem of uniform flow normal to a cylinder at very low Reynolds
number. If we drop the inertial terms in the Navier-Stokes equation, we obtain:

                               µ∇2v = ∇p

                                 ∇. v = 0

r→∞:                              v→U

r=R:                              v=0

For flow normal to the cylinder, we expect the velocity profile to
correspond to 2-D flow:

                                          v z = 0 and ∂ /∂ z = 0

So that a solution can be found using the stream function:

                                            v = ∇×[ψ(r,θ)e z]

For slow enough flows, we expect that inertial terms can be neglected, leaving Stokes Equation (66).
After the pressure is eliminated (by taking the curl of Stokes equation), we obtain a single equation in
the unknown velocity profile :


                                 Copyright © 2000 by Dennis C. Prieve
06-703                                              115                                         Fall, 2000

recall (68):                     curl 3v = 0 = curl4(ψe z) = ∇2(∇2ψ)e z

The boundary conditions are determined in a manner similar to those for a sphere (see Hwk #7, Prob.
1):

r→∞:                                           ψ → Ursinθ

r=R:                                       ∂ψ/∂r = ∂ψ/∂θ = 0

Based on the b.c. at r→∞ (which is the only nonhomogeneous part of the problem), the stream function
should have the form:

                                            ψ(r,θ) = f(r)sinθ

Requiring                                      ∇2(∇2ψ) = 0

generates an ODE for f(r) whose general solution can be obtained. Unfortunately, none of the
particular solutions can satisfy all of the b.c.’s (see HWK #7, Prob. 1). This is known as:

Stokes Paradox (1850) - Stokes equation for uniform flow normal to a cylinder has no
             solution.

As it turns, the inertial terms dropped by Stokes are not entirely negligible -- no matter how small Re is.
Lamb (1911)♣ obtained a solution for the circular cylinder as Re→0 using Oseen’s approximation:

                                         ρ U.∇v = µ∇2v - ∇p

                                                ∇. v = 0

Lamb’s solution for the drag force per unit length of cylinder is:

                                            F     4πµ U
                                              =
                                            L 1 − γ − ln Re
                                                2        4

where γ = 0.577... is Euler’s constant. Notice that, unlike Stokes’ solution for the sphere, Re appears
explicitly in this result. No matter how small Re, this logarithm term in the denominator is never
negligible.




♣ Sir Horace Lamb (1839-1934), English mathematician who contributed to the field of mathematical
physics. He wrote Hydrodynamics (1895) which was, for many years, the standard work on
hydrodynamics. His many papers, principally on applied mathematics, detailed his researches on wave
propagation, electrical induction, earthquake tremors, and the theory of tides and waves

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                116                                      Fall, 2000

                           Boundary-Layer Approximation

FLOW AROUND CYLINDER AS Re→ ∞

                                          ρv.∇v = −∇p + µ∇ 2
                                          123           123v
                                          inertia             viscous

    We have just seen that restricting attention to the limiting case of very small Reynolds number allows
an analytical solution to the Navier-Stokes equation by neglecting or approximating the inertial terms.
Similarly, we might expect that, in the opposite limit of very large Reynolds number, we might be able to
obtain an approximate solution by neglecting or approximating the viscous terms.

    Let's return to the problem of flow normal to a cylinder, but at very large Re. If we just drop the
viscous terms from the Navier-Stokes equation, we get Euler's equation for an ideal fluid. Recall that
a solution which satisfies the differential equation and the boundary condition far from the cylinder is
potential flow. From HWK #4, Prob. 4a:


            a f LMN FH Rr IK OPQ cos θ
                                    2
                vr r , θ = U 1 −


                           L
        vθ ar , θ f = −U M1 +   F RI 2 O
                           N H r K PQ sin θ
At r=R:              vr a R, θf = 0

and            vθ a R, θ f = −2U sin θ

which violates the no-slip boundary condition. An exact
solution of the NSE's can be obtained numerically.
Comparing the solution for Re>>1 to the potential flow
solution (see figure at right), we see that the exact solution                   − vq
follows potential flow everywhere except in a narrow region                    U in θ
                                                                                 s


near the surface of the cylinder where the exact solution
turns downward in order to satisfy the no-slip condition.

In the potential flow solution the velocity gradient goes like

                                                    ∂v θ U
outside b.l.:                                           ≈
                                                     ∂r   R




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                              117                                           Fall, 2000

This is also the behavior of the exact solution outside the boundary layer. By contrast, near the surface
(inside the boundary layer) as the Reynolds number increases, the velocity gradient gets steeper. A
closer analysis (which we will perform in a few lectures) reveals

                                            ∂v        U
inside b.l.:                           lim  θ        ≈  Re
                                      Re→∞  ∂r r = R  R


The thickness of this region in which the two solutions differ decreases as the Re gets larger. This region
is known as the:

boundary layer: a very thin region near to a boundary in which the solution has a gradient
             which is orders of magnitude larger than its characteristic value outside the
             region.


MATHEMATICAL NATURE OF BOUNDARY LAYERS
   Boundary layers arise in solutions of differential equations in which the highest order derivative is
multiplied by a small parameter. To illustrate the mathematical singularity which results, consider a
simple example:

Example: find asymptotic solution to the following problem as ε → 0:

                                            ε y" + y' + y = 0

subject to:                                      y(0) = 0

                                                 y(1) = 1

Problem is to find the asymptotic behavior of y(x) as ε→ 0. This problem was presented Prandtl♣ (the
father of boundary-layer analysis) to his class on fluid mechanics at Goettingen U. during the winter
semester of 1931/2.

Solution: For ε sufficient small, you might guess that the first term can be neglected, leaving

                                                y' + y = 0

whose general solution is:                   y(x) = Aexp(-x)




♣ Ludwig Prandtl (1875-1953), German physicist who is considered to be the father of aerodynamics.
His discovery (1904) of the boundary layer, which adjoins the surface of a body moving in air or water,
led to an understanding of skin friction drag and of the way in which streamlining reduces the drag of
airplane wings and other moving bodies.

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                          118                                                              Fall, 2000

Now A can be chosen to satisfy either of the boundary conditions, but not both. To satisfy y(0) = 0, we
must choose A=0 which does not satisfy y(1) = 1:

                         y(0) = 0    →        A=0     →        y(x) = 0 for all x                →         y(1) = 0 ≠ 1

On the other hand, if we choose A=e to satisfy y(1) = 1, then we cannot satisfy y(0) = 0:

                      y(1) = 1   →         A=e    →       y(x) = exp(1-x) for all x                   →           y(0) = e ≠ 0

The reason we can’t satisfy both boundary conditions with this approximation is that, by neglecting the
first term, the order of the differential equation reduced from 2 to 1. With a first order O.D.E., we can
only satisfy one boundary condition. Thus ε=0 is singularly different from ε being arbitrarily small,
but not identically zero.

                                                  ε=0 → O.D.E. is 1st order

                                                 ε→ 0 → O.D.E. is 2nd order

Now the exact solution to this linear O.D.E. with constant coefficients is easily determined:

                                                                      FG x 1 − 4ε IJ
                                                         F 1 − x IJ H 2ε
                                           y( x; ε) = expG
                                                                    sinh
                                                                                   K
                                                         H 2 ε K sinhFG 1 1 − 4ε IJ
                                                                       H 2ε        K
                                                                                           1    x
   y( x, ε)                                                           y( x, ε)         e
                                                                                               ε = 0.005
                                                                             2.6                   0.01
              2
                                                                                                           0.02


                                                                             2.4

              1                                                                                                          0.05

                                                                             2.2



              0
                  0                  0.5                   1                       0                   0.1              0.2          0.3
                                                      x                                                                          x



Comparing the exact solution to that obtained by neglecting the term containing the small parameter for
the case of ε=0.05, we see that the approximation is good except near x=0. For smaller ε, the region
in which the exact and approximate solutions differ shrinks. To see what's happening to cause this
problem, let's take advantage of knowning the exact solution and deduce its asymptotic behavior inside
the boundary layer. In particular, let's look at the initial slope:

                                            Copyright © 2000 by Dennis C. Prieve
06-703                                                 119                                       Fall, 2000

                                                                      FG 1 IJ
                                    y ′ (0; ε) =
                                                   1 − 4ε
                                                                   exp
                                                                       H 2εK
                                                    2ε             FG 1 1 − 4ε IJ
                                                            sinh
                                                                    H 2ε        K
Now consider the limiting behavior as ε→ 0.

                                                    1 − 4ε → 1

and                                                 1/2ε → ∞

                                                          LM expFG 1 IJ OP
                                  lim y ′( 0; ε ) = lim M
                                                             1    H 2ε K P → ∞
                                                           MN sinhFGH 2ε IJK PPQ
                                 ε→ 0               ε → 0 M 2ε         1         ∞


Clearly this limit is highly indeterminant as both exp and sinh “blow up” fairly quickly as their arguments
become large. This indeterminancy cannot be resolved with the help of L’Hôpital's rule because, no
matter how many times you differentiate exp or sinh, they still “blow up.” The indeterminancy can be
resolved instead by comparing the asymptotic behavior of sinh with that of exp:

                                                      ez − e −z 1 z
Recall the definition of sinh:             sinh z =            ≈2e                               as z→ +∞
                                                          2

                                                   exp ( z )
so                                                           →2                                  as z→ +∞
                                                   sinh( z )

As z → +∞, the second term of this definition becomes negligible compared to the first. Thus the ratio
of exp to sinh approaches 2 and our expression above becomes:

                                             y'(0;ε→ 0) ≈ 1/ε → ∞

So the derivative of our function at this boundary is very strongly dependent on the value of the small
parameter. In particular, the derivative is not bounded in the limit ε→ 0. This singularity is the essential
nature of any boundary layer. In the above analysis, exp/sinh was bounded although both functions
become unbounded as their arguments becomes large. We say that the singularity of these two
functions in this limit is of the same order and we write this as:

                                           sinh(z) = O(ez) as z→ ∞




                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                      120                              Fall, 2000

which is called the Big "Oh" notation (Bachman-Landau♣). More generally, when we say that

                                              f(x) = O[g(x)] as x → a

we mean                                   f(x)/g(x) is bounded as x → a

Likewise, we could say that:                 y'(0,ε ) = O(ε -1) as ε→ 0

We could also show that                      y"(0,ε ) = O(ε -2) as ε→ 0

which means that the second derivative blows up even faster the the first. This notation gives us a
convenient way of describing the strength of a pole.

at x=0:                                          2
                                                 εy ′′ +     y{′     + y{ = 0                      (86)
                                                 e j Oeε −1 j 0
                                              O ε −1


Thus at the boundary, the first term of the O.D.E. is the same order of magnitude as the second term.
So no matter how small ε becomes, the first term can never be neglected. This is the root of the
problem. One way to obtain the correct order in ε of the solution using a Taylor series expansion
would be to transform the independent variable:

Let                                     X ≡ x/ε         and Y(X; ε ) ≡ y(x; ε )

                                                 dy dY dX        dY
                                          y′ =     =      = ε −1
                                                              2
Then
                                                 dx dX dx        dX
                                                              ε −1


                        d2y          FG IJ
                                   d dy    d
                                              ε −1
                                                   FG
                                                   dY    d
                                                           ε −1
                                                               IJ
                                                                dY dX     FG
                                                                      = ε −2
                                                                             d 2Y IJ
and            y ′′ =
                        dx   2
                               =
                                      H K
                                   dx dx
                                         =
                                           dx       H
                                                   dX
                                                      =
                                                        dX      K
                                                                dX dx      H dX 2  K2
                                                                                   ε −1

Note that if dY/dX and d2Y/dX2 are O(ε 0) as ε → 0, we will obtain the correct order for y' and y".
This is the basic idea behind “stretch transformation” which is part of the “inner expansion” which will
presented in the second half of the next section.




♣ This is the German mathematician Edmund Landau, not the Russian physist Lev Davidovich Landau.




                                      Copyright © 2000 by Dennis C. Prieve
06-703                                                    121                                         Fall, 2000

MATCHED-ASYMPTOTIC EXPANSIONS*
    Matched-asymptotic expansions is a very general technique for coping with singularities like
boundary layers. MAE is one type of singular perturbation expansion. Greenberg describes it as
“one of the most important advances in applied mathematics in this century.” Although the beginnings
go back to the 19th century and such names as Lindstedt and Poincaré,♣ it was not until the 1960's that
singular perturbation techniques became part of the standard analytical tools of engineers, scientists and
mathematicians. Since boundary layers frequently arise in transport phenomena, let’s apply this
technique to solve the simple problem posed by Prandtl.

EXAMPLE: Use Matched Asymptotic Expansions to find the asymptotic behavior of the solution
y(x;ε ) to the following problem as ε→ 0.

                                              ε y" + y' + y =0                                               (87)

subject to:                                        y(0) = 0

                                                   y(1) = 1

Solution: Following Prandtl (1905), we divide the domain into two regions:

inner region:                                0 ≤ x ≤ δ , y = yi                               satisfies inner b.c.

outer region:                                δ ≤ x ≤ 1 y = yo                                 satisfies outer b.c.

where δ is the thickness of the boundary layer located near x=0. Within each region, we seek a
solution which is a Taylor series expansion of the function y(x,ε ) about ε =0:

                                              ∂y ( x; ε )        1 ∂ y ( x ;ε )
                                                                    2
                    y ( x; ε ) = y ( x; 0 ) +                 ε+                     ε2 + K
                                 123             ∂ε              2! ∂ε2
                                  y0 ( x )    14 4244     ε=
                                                           30                   ε= 0
                                                                 1442443
                                               y1 ( x )              y2 ( x )


•   The outer problem. The solution outside the boundary layer can often be found as a regular
    perturbation expansion:




* The example problem introduced above was solved using MAE’s by Greenberg, p508ff.

♣(Jules) Henri Poincaré (1854-1912), French mathematician, theoretical astronomer, and philosopher
of science who influenced cosmogony, relativity, and topology and was a gifted interpreter of science to
a wide public



                                  Copyright © 2000 by Dennis C. Prieve
06-703                                               122                                        Fall, 2000

                                 yo (x,ε ) = y0(x) + y1(x)ε + y2(x)ε 2 + ...                         (88)

which is just a Taylor series expansion about ε=0. (88) into (87):

                           ε (y0"+ε y1"+...) + (y0'+ε y1'+...) + (y0+ε y1+...) = 0

Collecting terms of like power in ε:

                                   (y0'+y0)ε 0 + (y0"+y1'+y1)ε 1 + ... = 0

In order for this sum to vanish for all values of ε, each coefficient must separately vanish:

ε 0:                                            y0' + y0 = 0                                         (89)

ε 1:                                           y1' + y1 = -y0"                                       (90)

and similarly for higher order terms. Note that we have succeeded in obtaining a set of O.D.E.'s for the
set of coefficient functions whose solution can be easily uncoupled. If we start with (89), y0(x) can be
determined so that it is known when we solve (90). The outer solution must be subject to the outer
boundary condition:

                                                   y(1) = 1

Expanding this in a Taylor series about ε=0:

                       y0(1) + y1(1)ε + y2(1)ε 2 + ... = (1)ε 0 + (0)ε 1 + (0)ε 2 + ...

Thus                                               y0(1) = 1                                         (91)

                                                   y1(1) = 0

and so on. The solution to (89) subject to (91) is:

                                              y0(x) = exp(1-x)                                       (92)

We could now substitute (92) into (90) and obtain the solution for y1(x). Similarly, we could obtain
y2(x), y3(x) and so on. If we stop after the leading term, the outer solution becomes:

                                             yo = y0(x) + O(ε)

                                  yo (x,ε ) = exp(1-x) + O(ε)       as ε →0                          (93)

•      The inner problem. To cope with the boundary-layer, we transform the independent variable
       using a stretch transformation, whose general form is

                                                   x − x0
                                             X =            (n>0)
                                                     εn

                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                  123                                      Fall, 2000

where x 0 is the location of the boundary at which the boundary layer arises. In this transformation the
distance from the boundary (x-x 0) is magnified (“stretched”) by an amount depending on the small
parameter. In our problem, the boundary layer arises at x 0=0, so the transformation becomes

                                                             x
                                                     X =
                                                            εn

Rewriting (87) in terms of the new variables X and Y(X) ≡ y(x):

                                                         = ε − n Y&
                                                dy dY dX
                                         y′ =     =
                                                dx dX dx

Similarly                                          y ′′ = ε −2nY&&

where                                           Y& denotes dY/dX

Substituting into (87):                    ε 1 − 2 n Y&& + ε − n Y& + Y = 0                            (94)

The purpose of the stretch transformation is to make Y , Y& , Y&& all O(ε 0):

as ε→0 (X=const):                               Y , Y& , Y&& = O(ε 0)

whereas                                y,y',y" = O(ε 0),O(ε -n ),O(ε -2n )

Now we are in a position to choose a value for n. Recall from the exact solution [see (86)] that the
second-derivative term is not negligible inside the boundary layer. This is generally the most important
consideration in choosing n: we select the value of the parameter n such that we do not loose the term
containing the highest order derivative (afterall, dropping the highest order derivative is what lead to the
outer expansion, which we have shown fails in the inner region). To keep the highest order derivative,

•   This term must be lowest order♣ in ε (otherwise it will be swamped by a lower order term)

•   This term must not be the only term which has this order (if this is the only term of that order, O.D.E.
    requires it to vanish identically)

As a first attempt, we might try to make all terms of the same order:

                                                 1-2n = -n = 0




♣The “order” of a term with respect to a small parameter ε (as opposed to the order of the derivative)
refers to the exponent (power) to which ε is raised. For example, we say that a term which tends to
vanish like ε n as ε →0 is “of order n.”

                                    Copyright © 2000 by Dennis C. Prieve
06-703                                               124                                          Fall, 2000

which is impossible for any single value of n. Next, we might try balancing first and third:

                                             1-2n = 0 or n=1/2

Orders (i.e. the exponent of ε) of the three terms then are:

                                                  0, -1/2, 0

This is no good, because highest order derivative (i.e. the first term) is not lowest order in ε. Finally we
try to balance first and second term:

                                             1-2n = -n, or n=1

Now the orders of each term is:                   -1, -1, 0

which is OK. Using n=1, (94) becomes (after multiplying by ε):

                                              Y&& + Y& + εY = 0                                          (95)

Instead of (88), we seek a solution inside the boundary layer which has the following form:

for x ≤δ :                   yi(x,ε ) ≡ Y(X,ε ) = Y0(X) + Y1(X)ε + Y2(X)ε 2 + ...                        (96)

(96) into (95) and collecting term of like order in ε:

ε 0:                                            Y&&0 + Y&0 = 0

whose general solution is:                 Y0(X) = A + Bexp(-X)

Applying the inner boundary condition:            Y0(0) = 0

we can evaluate B = -A. This leaves us with

                                           Y0(X) = A[1-exp(-X)]                                          (97)

Similarly, we could determine Y1(X), Y2(X) and so on. If we stop after the leading term, we have for
our inner solution:

                                         yi = A[1-exp(-X)] + O(ε )

This remaining integration constant A must be chosen so as to match the inner and outer solutions. One
possible choice is to take the outer limit of the inner solution [denoted (yi)o ] and equate it with the inner
limit of the outer solution [denoted (yo )i]:




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                      125                                         Fall, 2000

                                       lim y i ( X , ε) = lim y o ( x, ε )
                                      X →∞
                                      1  442443 1         x →4
                                                             04244     3
                                            eyi j                      ey o j
                                                    o                           i




which is called the Primitive Matching Principle and was originally used by Prandtl. Taking the limit
of (93) as x →0 and the limit of (97) as X→∞:

                                                           A=e

The inner expansion becomes:               yi = e[1-exp(-X)] + O(ε)

which means that for x ≤δ :                    y ≈ e[1-exp(-x/ε )]

whereas for x ≥δ :                                      y ≈ exp(1-x)

A convenient choice of δ is where yi
and yo intersect. Of course, this
intersection point depends on ε:

                δ = δ (ε )                                                                   ε = 0.05

which is O(ε) in this problem. From
the figure at right, neither yi nor yo is a
good approximation to y in the vicinity
of δ . However, in most transport
problems, the quantity of greatest
interest is dy/dx at x=0 and dyi/dx
does seem to match dy/dx at x=0 quite
well. If required, yi and yo can be
blended together to obtain a single smooth function over the entire domain:

                                               yc = yi + yo - (yi)o

which is called the composite solution. For the present example, this is obtained by adding (92) and
(97), expressing them in the same independent variable, and subtracting e:

                                               e              j           e
                              y c = e1 − x + e 1 − e − x / ε − e = e e − x − e − x / ε   j




                                    Copyright © 2000 by Dennis C. Prieve
06-703                                               126                                   Fall, 2000

The plot at right compares yc (the dotted curve), and the
                                                                    3
exact y (the solid curve). Note that yc is a reasonably
good approximation to y. The agreement gets much                                yc
better as ε → 0. Better agreement could be obtained for
any ε by including the next order term in the expansions.           2
                                                                            y
Greenberg (p508f) obtains the second term in both the
inner and outer expansions; the corresponding composite
solution for ε = 0.05 is virtually indistinguishable from the       1
exact solution.


MAE’S APPLIED TO 2-D FLOW AROUND                                    0
                                                                        0            0.5          1
CYLINDER
    Let’s now try to apply MAE’s to solve the problem of flow
around a cylinder at high Reynolds number. First, let’s write the
equation in dimensionless form: we will denote the dimensionless
variables using an asterisk:

                v           r
           v* ≡        r* ≡         ∇* ≡ R∇
                U           R
                                                                  (98)
                p − p∞      µ
           p* ≡        ε≡      = Re − 1
                 ρU 2      ρUR

This nondimensionalizing differs from our previous attempt which was for the opposite limit of small
Reynolds number (see p112 of Notes). First, we have used ρ U2 to nondimensionalize the pressure
instead of µU/R. This is because the disturbance to pressure caused by flow is proportional to ρ U2 in
the potential flow solution (see Hwk #4, Prob. 4). The second difference is that ε is defined as the
reciprocal of the Reynolds numbers, rather than the Reynolds number itself. This choice makes ε a
small parameter in the limit Re→∞.

The Navier-Stokes equations for steady flow become:

                                     v *.∇ * v* = ε∇ *2 v * −∇ * p *                             (99)

and                                             ∇ *.v* = 0                                      (100)

Boundary conditions are

as r*→∞:                                 v* → e x    and p* → 0                                 (101)

at r*=1:                                            v* = 0                                      (102)




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                              127                                         Fall, 2000

Expecting a boundary layer to arise at r*=1 as Re→∞ (or as ε →0), we will now use the technique of
MAE to solve it:


Outer Expansion

    In the outer region, the regular perturbation expansion in powers of ε uses r* as the position
variable:

                          v*(r*,θ;ε ) = v0(r*,θ) + ε v1(r*,θ) + ε 2 v2(r*,θ) + ...

                         p*(r*,θ;ε ) = p 0(r*,θ) + ε p 1(r*,θ) + ε 2 p 2(r*,θ) + ...

Substituting this perturbation expansion into (99) through (101), collecting terms of like order in ε , and
setting their coefficients to zero, produces a series of well-posed mathematical problems for the
coefficient functions. The first problem (the only one we will worry about in this analysis) is (dropping
the *’s):

ε 0:                                         v0.∇v0 = -∇p0                                           (103)

                                                  ∇.v0 = 0                                           (104)

The outer expansion is required to satisfy the outer boundary condition:

as r→∞:                                  v0 → e x    and p0 → 0                                      (105)

Although we should not generally require the outer expansion to satisfy the inner b.c.’s, when we later
match inner and outer expansions (see footnote on page 130), the outer expansion will have to satisfy:

                                            v r0 = 0 at       r=1                                    (106)

Note that the viscous term does not appear in this result because the lowest order viscous term is
O(ε 1), whereas other terms are O(ε 0). It turns out that (103) through (106) is the same problem we
previous solved by potential flow:

                                                  v 0 = ∇φ

where φ (r,θ) is chosen to satisfy (104):         ∇2φ = 0

For potential flow, ∇×v0=0 and (103) becomes:

                                              e           j
                                            ∇ p0 + 21 vo2 = 0

which is just Bernoulli's equation for the pressure profile. After imposing the outer boundary conditions
in (105) (and v r=0 at r=1) we get the potential flow solution (see Hwk Set #4, Prob. 4). Eventually,
we will need the inner limit of the outer solution for matching:

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                            128                                   Fall, 2000

                                                          b
                                                      v ro r = 1,θ = 0        g
                                                      b
                                               v θo r = 1, θ = −2 sinθg                                     (107)

                                                         1 − 4 sin2 θ
                                              o
                                                  b
                                            p r = 1, θ =
                                                               2
                                                                  g                                         (108)



Inner Expansion

    For the inner expansion, we use a “stretched” radial coordinate:

                                            r * −1
                                      Y =                             or          r* = 1 + ε n Y            (109)
                                              ε n


and rename the tangential coordinate                          X=θ

Unlike our simple example problem in the last section, the stretching parameter n in this problem is not
an integer. More generally, the inner expansion should be a power series in ε n rather that a power
series in ε itself:

                              b g b g b g
                        v *θ r *, θ; ε = u0 X , Y + ε n u1 X , Y + ε 2 n u2 X , Y +K     b g                (110)

                         v *r b r*, θ; ε g = v 0 b X , Y g + ε n v1 b X , Y g + ε 2 n v2 b X , Y g +K       (111)

                        p * b r *, θ; ε g = p0 b X , Y g + ε n p1 b X , Y g + ε 2 n p2 b X , Y g +K         (112)

In cylindrical coordinates for 2-D flow, the equation of continuity (100) becomes:


                                      ∇ *.v* =
                                                1 ∂ r * vr
                                                           +
                                                              e
                                                              1 ∂v θ*
                                                                      =0
                                                                          *
                                                                              j
                                               r * ∂r *      r * ∂θ

We construct the first term using (109) through (111):

                                  e          je                               j
                       r * vr* = 1 + ε n Y v0 + ε n v1 +K = v0 + Yv0 + v1 ε n +K         b         g
          e
         ∂ r * v r*j = ∂Y ∂ v + bYv + v gε n +K = ∂v0 ε −n + FG v + Y ∂v0 + ∂v1 IJ ε 0 +K
              ∂r *     4
                       ∂r * ∂Y
                               0   0   1
                                                  ∂Y          H 0 ∂Y ∂Y K
                      ε −n




                                      Copyright © 2000 by Dennis C. Prieve
06-703                                               129                                  Fall, 2000

                      e
                  1 ∂ r * vr
                            *
                             =1
                                j b
                              1 +4ε2        g RS
                                    n −1 ∂v 0 − n       ∂vFG∂v
                                             ε + v 0 + Y 0 + 1 ε 0 +K
                                                                                IJ   UV
                 r * ∂r *
                                     Y43
                                         ∂Y
                                   1 − ε Y +K
                                   n           T        ∂Y H∂Y                   K    W
                                  ∂v          F ∂v I
                                 = 0 ε − n + G v0 + 1 J ε 0 +K
                                  ∂Y          H ∂Y K
In the analysis above, we needed to expand 1 + ε n Y b          g −1
                                                              as a power series in ε n . This was
accomplished using the Binomial Series, which will be quite useful in later problems as well:

                                              (     )       (     )(    )
                       (1 + x ) α = 1 + αx + α α − 1 x 2 + α α − 1 α − 2 x 3 +K
                                                2!               3!

which is just a Taylor series expansion about x=0. The Binomial Series is known to converge provided
x <1.

                                         ∂v θ* ∂u0      ∂u
Similarly                                     =    + ε n 1 +K
                                          ∂θ    ∂X      ∂X

The continuity equation becomes:

                                 ∂v 0 − n    FG
                                              ∂v  ∂u
                                     ε + v 0 + 1 + 0 ε 0 +K = 0
                                                                  IJ
                                 ∂Y           H
                                              ∂Y  ∂X               K
To satisfy “no slip” at the inner boundary, we must require:

at Y=0:                         u0 = u1 =K = 0       and      v 0 = v1 =K = 0                 (113)

Setting the coefficients of each term separately to zero:

                                             ∂v 0
ε -n :                                            =0       for all Y
                                             ∂Y

                                             v 0(Y) = const = 0




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                130                                          Fall, 2000

which means that v 0 must be constant inside the boundary layer. To satisfy the no-slip condition (113),
the constant must be zero. Then v 0 must vanish everywhere.♣ The next term of the continuity equation
is more useful:

                                                    ∂v  ∂u
ε 0:                                           v{0 + 1 + 0 = 0
                                                    ∂Y  ∂X
                                               0

                                                   ∂u0 ∂v1
or                                                    +    =0                                           (114)
                                                   ∂X   ∂Y

Next, we will look at the principle component of the NSE, which will be the component tangent to the
surface. For steady 2-D flow, the θ-component of (99) is (BSL, p85):

               ∂v  v ∂v           1 ∂p    ∂ 1 ∂ rv θ       LM F b gI + 1 ∂ 2 vθ + 2 ∂vr OP
                                                            NM GH  JK r 2 ∂2 θ r ∂θ QP
                         v v
NSEθ:        vr θ + θ θ + r θ = −      +ε
                ∂r  r ∂θ   r      r ∂θ    ∂r r ∂r

Next, we transform each term using (109) through (112) with v 0 = 0:

                             ∂u0      ∂u0        ∂p0      1 − 2 n ∂ u0
                                                                   2
                                 + u0     +K = −     +K+ ε             +K
                                                        4
NSEθ:                     v1                                                                            (115)
                             ∂3       ∂X         ∂X
                          12                             142∂4
                              Y 123                                Y32

                             e j
                           O ε0          e j
                                      O ε0             O ε0e j              e
                                                                        O ε1− 2n   j
As a general rule, we don't want to lose the highest order derivative inside the boundary layer, so we
want this term to be lowest order in ε, but not the only term with this order. The largest inertial terms
are O(ε 0), so we choose n such that 1-2n = 0:

1-2n = 0:                                            n = 12                                             (116)

After collecting like-power terms, the r-component of (99) is:

                                                − 1 2 ∂p0  ∂p
                                     0 +K = − ε           − 1 +K
                                     2
NSEr:                               u{
                                              1424    ∂3
                                                       Y   ∂Y
                                                           {
                                     ( )
                                   O ε0
                                                       (
                                                      O ε −1 2   )    ( )
                                                                     O ε0




♣This result could be used to evaluate the undetermined integration constant in the outer expansion.
Since v 0 represents the leading term in the inner expansion for v r, this result means that the outer limit of
the inner expansion for v r is zero, and this must match with the inner limit of the outer expansion.
Indeed, our expressions for the outer solution already make use of this result.

                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                 131                                            Fall, 2000

The lowest order term in this equation is ∂p0/∂Y. Since there is no other term with this order, we must
require that:

                                                    ∂p0
ε -1/2 of NSEr:                                         =0
                                                    ∂Y

which integrates to yield:                         p0 = c(X)

where the integration “constant” c(X) can be evaluated by matching the outer limit (Y→ ∞) of this inner
solution with the inner limit (r→ 1) of the outer solution (108):

                                                     1 − 4 sin2 X
                                                ( )
                                          p0 = c X =                                                      (117)
                                                           2

We still have two unknowns: u0 and v 1. We can formulate two equations from the above:

                                     ∂u0     ∂u   ∂ 2 u0
ε 0 of (115):                   u0       + v1 0 −        = 4sin X cos X                                   (118)
                                     ∂X      ∂Y   ∂Y 2

                                                 ∂u0 ∂v1
and (114):                                          +    =0                                               (119)
                                                 ∂X   ∂Y

No slip requires:

at Y=0:                                           u0 = v 1 = 0                                            (120)

Matching the outer limit of the inner solution with the inner limit of the outer solution requires:

as Y→ ∞:                                          u0 → -2sinX                                             (121)


Boundary Layer Thickness

    Recall the definition for “boundary layer” from page 117:

boundary layer: a very thin region near to a boundary in which the solution has a gradient which is
   orders of magnitude larger than its characteristic value outside the region.




                                     Copyright © 2000 by Dennis C. Prieve
06-703                                               132                                           Fall, 2000

So how thick is the boundary layer for 2-D flows like the
one we just analyzed? A typical profile for the tangential
component of velocity inside the boundary layer is sketched
at right. On the scale of this sketch, the velocity appears to

          e j which is the inner limit of the outer solution.
                i
approach v θo
Actually, the nearly horizontal dotted line isn’t quite
horizontal: it has a small negative slope, but its slope is so
small compared to the slope inside the boundary layer, that
the outer solution appears to be flat on the scale of this
drawing.

We might define the thickness of the boundary layer as the
distance we have to go away from the surface to reach the apparent plateau. From the geometry of this
sketch this distance, which we denote as δ , is approximated using


                                              evθo ji ≈ ∂vθi                                           (122)
                                                 δ         ∂y
                                                                     y =0

where all of the quantities in this equation have units. Let’s try to “scale” (122) and solve for δ . Recall
that the outer solution corresponds to potential flow. From HWK Set #4, Prob. 4:


                                         a f LMN FH Rr IK OPQ sin θ
                                                                2
                                        v θo r , θ = U 1 +



                                    e θ j = rlim vθo a r , θ f = 2U sin θ
                                         i
                                       o
so that                              v
                                             →R


                                                  evθo j ≈ U
                                                       i
or

In dimensionless quantities, the inner solution is given by (110). Substituting n = 1/2, we have

                             b g b g                        b g
                                v *θ r *, θ = u0 X , Y + ε1 2 u1 X , Y +K

          ∂v θi U ∂v *θ U ∂Y ∂ L                                          − U F ∂u0    I
                                    u0 b X , Y g + ε u1 b X , Y g +KO = ε
                                                             1                 1

           ∂y
               =       =
                                  M
                          ∂r * ∂Y N
                 R ∂r * R 4
                                                                 2
                                                                    P
                                                                    Q         G
                                                                            R 4
                                                                                2
                                                                                 ∂Y
                                                                                     +K
                                                                                       JJ
                          ε
                                 − 12
                                                                              G
                                                                              H Oeε j K   0



Dropping any multiplicative constants, we obtain



                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                 133                                   Fall, 2000

                                                ∂v θi
                                                      ≈ ε− 2
                                                          1 U

                                                 ∂y          R

Substituting this result into (122) and solving for the boundary-layer thickness δ :

                                                      ≈ ε− 2
                                                    U     1 U

                                                    δ        R

                                                              R
or                                            δ ≈ εR =
                                                              Re

Thus δ is proportional to R and inversely proportional to the square-root of Reynolds number. The
boundary layer gets ever thinner as the Reynolds numbers increases. This is true for all boundary layers
in 2-D flows.


PRANDTL’S B.L. EQUATIONS FOR 2-D FLOWS
     Let’s now summarize the mathematical problem which must be solved to obtain the velocity profile
inside the boundary layer. The mathematical problem is represented by equations (118)-(121). For
clarity, let’s rewrite these equations using variables having dimensions [recall (98), (110)-(112) and
(116)]. For example, u0 is given by (110) and (98) as

                                                          v
                                                u0 = v*θ = θ
                                                          U

while Y is given by (109) and (116) as

                                                                       12
                                   r * −1
                                        r − R −1 2  ρUR                   r−R
                              Y=      =      ε    =     
                                 ε1 2     R         µ                      R

                                                             12
                                                   ρUR          dr
so                                           dY =      
                                                   µ            R

                                            ∂2 u0   µ R 2 ∂2 vθ
Thus                                             =
                                            ∂Y 2   ρUR U ∂r 2

Making similar transformations to dimensional variables of each term, then multiplying both sides of the
equation by ρU 2 R , (118) becomes

                              v ∂v    ∂v      ∂2 vθ ρU 2
                           ρ  θ θ + vr θ  − µ      =     4sin θ cos θ                           (123)
                              R ∂θ    ∂r      ∂r 2   R

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                               134                                          Fall, 2000

                                              1 ∂vθ ∂vr
(119) becomes                                      +    =0                                            (124)
                                              R ∂θ   ∂r

(120) becomes                            vr = vθ = 0       at   r=R

(121) becomes                           v θ = -2Usinθ      at    r→∞

Notice that (123) and (124) are approximations to NSEθ and continuity in cylindrical coordinates.

    Although the above equations for the velocity
profile inside the boundary layer were derived for the
specific geometry of a circular cylinder, it turns out that
very similar equations are obtained for any 2-D flow,
provided we express them in terms of a local
Cartesian coordinate system (x,y).

•   x = arc length measured along the surface in the
    direction of flow

•   y = distance from the surface measured along a
    normal to the surface

The more general equations for any 2-D flow are given by

                                  FG ∂v x + vy ∂v x IJ = µ ∂ 2 vx − dp0 U|
                                 ρ vx
                                   H ∂x ∂y K ∂y 2 dx |V                                               (125)
                                           ∂v x ∂v y
                                                +        =0
                                                                         ||
                                            ∂x     ∂y                     W
where p0 is the inner limit of the pressure profile in potential flow, which is given by (117):

                                            b g r→R
                                         p0 x ≡ lim p PF r ,θ   b g
For boundary conditions, we impose “no slip” at the wall:

at y=0:                                      b g         b g
                                          v x x ,0 = v y x ,0 = 0

Remaining integration constants are evaluated by matching the outer limit of the inner solution with the
inner limit of the outer solution:

as y→∞:                                         b g
                                             v x x, y → U 0 x   bg
wher U0(x) is the inner limit of the outer solution for the tangential component of velocity:

                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                  135                                Fall, 2000

                                               b g r→R
                                            U 0 x ≡ lim vθPF r , θ b g
is the inner limit of the potential flow solution.

The the main difference from one geometry to another is a different potential flow solution applies to
different geometries. From Bernoulli’s equation, we have

                                             p0 ( x ) U 02 ( x )
                                                     +           = const
                                               ρ         2

Differentiating with respect to x and rearranging:

                                            1 dp0 1 dU 02      dU 0
                                        −        =2       = U0
                                            ρ dx     dx         dx

Substituting into (125):

                                ∂v x      ∂v    ∂2 v      dU0
                           vx        + v y x − ν 2x = U 0     = known f ( x )
                                 ∂x        ∂y   ∂y         dx
                                                                                                (126)
                                                 ∂v x ∂v y
                                                     +     =0
                                                  ∂x   ∂y

where ν ≡ µ/ρ. These PDE’s are called Prandtl’s boundary layer equations. Appropriate b.c.’s
include

at y=0:                                              vx = vy = 0

as y→∞:                                              v x → U0(x)




                                     Copyright © 2000 by Dennis C. Prieve
06-703                                               136                                    Fall, 2000

ALTERNATE METHOD: PRANDTL’S
SCALING THEORY*
     Now we will repeat the analysis of boundary
layers using Prandtl’s analysis, which is more
intuitive. Consider uniform flow normal to a long
cylinder. Of course this is 2-D flow:

                   v z = 0, ∂ /∂ z = 0

At high Reynolds number, we expect the viscous
terms to become negligible everywhere except
inside the boundary layer. Dropping the viscous
terms from the problem yields potential flow:

r-R>δ :                 v = ∇φ

where δ is the thickness of the boundary layer.

Prandtl’s analysis of this problem assumed that:

• outside the b.l., viscous << inertia, such that the velocity and pressure profiles are those obtained
  from potential flow. Recall the potential-flow solution from HWK 4, Prob. 3:

                                                   LM F R I 2 OP cosθ
                                                    MN GH r JK PQ
                                         v rPF = U 1 −                                     for r-R > δ


                                                      L F RI 2 O
                                         v θPF = −U M1 + G J P sinθ
                                                      MN H r K PQ
• δ <<R so that fluid elements inside b.l. don't “see” the curvature of the cylinder (we call this
  “Postulate #1”).

• inside the b.l., inertia ≈ viscous (we call this “Postulate #2”).

Defining a local Cartesian reference frame, the continuity and Navier-Stokes equations become:

                                               ∂v x ∂v y
continuity:                                        +     =0
                                                ∂x   ∂y




* Schlichting, 6th ed., p117-21.


                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                 137                                   Fall, 2000

                              ∂v x      ∂v x    1 ∂p    F
                                                        ∂ 2v x ∂ 2 v x   I
x:                         vx
                               ∂x
                                   + vy
                                         ∂y
                                             =−
                                                ρ ∂x
                                                     +ν GH
                                                         ∂x 2
                                                              +
                                                                ∂y 2
                                                                         JK
                              ∂v y      ∂v y    1 ∂p     F ∂2 v y ∂2 v y I
                                                     + νG
y:                         vx
                               ∂x
                                   + vy
                                         ∂y
                                             =−
                                                ρ ∂y     GH ∂x 2 + ∂y 2 JJK
where ν ≡ µ/ρ . Next, Prandtl estimated the order of magnitude of each term, hoping that some can be
dropped. This is called scaling. In this estimate, we are not concerned about factors of 2 or 3, but
with orders of magnitude: we will try to guess the asymptotic behavior of each term in terms of the
characteristic physical parameters. In particular, in scaling we try to express each term in the form of
the product of the physical parameters raised to some power: In this problem the physical parameters
are R, U, ν, and δ . Thus we will try to express each term as

                                                 Ra Ub νc δ d

Let’s start with the primary (x) component of velocity. Across the boundary layer, v x must vary
between zero at the surface (no-slip) and

at y=0:                                            vx = 0

at y≈δ :                                   v x = -v θPF = 2Usinθ

which is the potential flow solution. The assumption here
is that the outer edge of the b.l. corresponds to the inner
edge of the potential flow solution.

So                                                 vx ≈ U

                                            ∂v x ∆v x U
                                                ≈    ≈
                                             ∂y   ∆y   δ

                                          FG ∂vx IJ U − 0
                                             ∆
                                     2
                                   ∂ vx
                                        ≈
                                           H ∂y K ≈ δ ≈ U
                                    ∂y 2          ∆y         0−δ    δ2

Now x is measured along the surface of the cylinder.
Thinking of x as the arc length measured from the
forward stagnation point, then:

                     dx = -R dθ

Integrating with x=0 at θ=π:


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                      138                           Fall, 2000

                                                         x = R(π - θ)


Thus
                                ∂v x
                                 ∂x
                                       ∂v PF dθ
                                     =− θ
                                        ∂θ dx
                                                = 2U cos θ −
                                                             1
                                                             R
                                                               gFGH IJK
                                                               b
                                                               ≈
                                                                 U
                                                                 R

                          ∂ 2v x    ∂ 2 v θPF F dθ I 2               F   1I 2 U
Similarly,
                           ∂x 2
                                 =−           G J b
                                      ∂θ 2 H dx K
                                                       = 2U sin θ  gGH R JK ≈ R 2
                                                                       −


Next, we look at the equation of continuity:

                                                  ∂v y         ∂v x U
                                                          =−       ≈
                                                   ∂y           ∂x   R


Integrating across the b.l.:         vy =    z   ∂v y
                                                 ∂y
                                                         dy ≈ −
                                                                   2U cos θ
                                                                   142R43
                                                                            y≈
                                                                               Uδ
                                                                                R
                                                                    ∂v x ∂x


                                     ∂v y
                                            ≈
                                                  ∂ FG
                                                    −
                                                      2Uy cos θ dθ Uδ
                                                                   ≈    IJ
so
                                      ∂x         ∂θ  H   R      dx   R2  K0
                                                                         −1 R


Estimating the inertial and viscous terms in the x-component of N-S:

inertia:                                   v x∂ v x/∂ x ≈ (U)(U/R) = U2/R

                                       v y∂ v x/∂ y ≈ (Uδ /R)(U/δ ) = U2/R

viscous:                                          ν∂2v x/∂ x 2 ≈ νU/R2

                                                  ν∂2v x/∂ y2 ≈ νU/δ 2

Now let's summarize our results as to the magnitude of each term in the x-component of the NSE:

                                 ∂v     ∂v     1 ∂p    ∂2 v   ∂ 2v
x:                             vx x + vy x = −      + ν 2x + ν 2x
                               123∂x 123 ∂y    ρ ∂x    ∂x      ∂y
                                             123 123         123
                                U2           U2                ?          νU        νU
                                 R            R                           R2        δ2

Since δ <<R (according to “Postulate #1”), the first viscous term must be negligible compared to the
second:

δ <<R:                                             νU/R2 << νU/δ 2



                                     Copyright © 2000 by Dennis C. Prieve
06-703                                               139                                         Fall, 2000

                                          ∂ 2v x/∂ x 2 << ∂ 2v x/∂ y2

So we can neglect this term.

Ignoring the negligible term, we have established the following orders of magnitude for the terms in the
x-component of the Navier-Stokes equation:

                                   ∂v     ∂v     1 ∂p    ∂2 v
x:                               vx x + vy x = −      + ν 2x                                         (127)
                                 123∂x 123 ∂y    ρ ∂x    ∂y
                                               123 123
                                    U2         U2            ?          νU
                                     R          R                       δ2

Now let's apply Prandtl’s second postulate: Inside the boundary layer, viscous and inertial terms are of
the same magnitude:

                                             inertia ≈ viscous

                                              U2/R ≈ νU/δ 2

This allows us to estimate the thickness of the boundary layer:

                                         δ 2 = νR/U = R2/(RU/ν)

                                                        R
or                                              δ≈                                                   (128)
                                                        Re

where                                           Re ≡ RU/ν

is the Reynolds number. Note that this correctly predicts that the boundary layer gets thinner as

                                             δ→ 0 as Re→ ∞

The remaining term in (127) which has not yet been estimated is the pressure gradient. We can obtain
some idea of its magnitude by looking at the potential flow solution, in which the pressure profile is given
by Bernoulli's equation:

for y≥δ :                                   p/ρ + v 2/2 = const

Now the kinetic energy can be decomposed into contributions from the x- and y-components, whose
orders of magnitude we have already estimated:

                                           v 2 = v x2 + v y2 ≈ v x2

Now v x2≈U2 while v y2≈(Uδ /R)2, so v y2<<v x2 which leaves:



                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  140                                      Fall, 2000

                                              p/ρ ≈ const - v x2/2

Differentiating:                       (1/ρ )∂ p/∂ x ≈ v x∂ v x/∂ x ≈ U2/R                           (129)

So this means we cannot neglect the pressure gradient in (127) since it is the same order of magnitude
as the inertial terms. Scaling of the terms of the y-component of the Navier-Stokes equation yields:

                               ∂v y          ∂v y
                                            1 ∂p     ∂2 vy    ∂ 2v y
y:                          vx   + vy    =−       +ν       +ν                                        (130)
                            123∂x 123 ∂y    ρ ∂ y    ∂   2
                                                               ∂y 2
                                          123 123 123  x
                              U δ
                               2
                                           U 2δ            ?          νU δ    νU
                               R2           R2                            3
                                                                      R       δR

Substituting Eq. (128) for δ shows that viscous and inertial terms again have the same magnitude:

                                          U 2δ        U2       νR
                                                                  ≈ U 2 R− 2ν 2
                                                                     3    3  1
                              inertia ≈           ≈
                                            R2        R2       U

                                            ν U νU             U     3  −3 1
                              viscous ≈        ≈                  ≈ U 2R 2ν 2
                                            δR   R             νR

so                                                inertia ≈ viscous

What remains to be determined is the pressure gradient. At most, the pressure gradient in this equation
has the same order of magnitude as the other terms:

                                             (1/ρ )∂ p/∂ y ≤ U2δ /R2                                 (131)

Comparing this with the partial derivative in the other direction, by dividing (131) by (129):

                                  (∂ p/∂ y)/(∂ p/∂ x) ≤ δ /R → 0 as Re→ ∞

which means that variations in pressure across the boundary layer are becoming insignificant at large Re.
In other words, a good approximation would be to take:

                                                      p = p(x)

Since the pressure at the outer edge of the b.l. must correspond to that just outside, where potential
flow occurs, we can calculate this pressure using the Bernoulli's equation and the potential flow solution:

for y≥δ :                                      p/ρ + v 2/2 = const                                   (132)

In potential flow at r=R:                              vr = 0

                                          v 2(R,θ) = v θ2(R,θ) ≡ Uo 2(x)                             (133)


                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                 141                                       Fall, 2000

(133) into (132):                              p/ρ + Uo 2/2 = const

                                         (1/ρ )∂ p/∂ x + Uo dUo /dx = 0                              (134)

                               ∂v x      ∂v x    ∂ 2v x      dU 0
(134) into (127):           vx      + vy      −ν        = U0      = known                            (135)
                                ∂x        ∂y      ∂x 2        dx

The right-hand side of this equation is known because U0 is the inner limit of the potential-flow solution:

                                                b g r→R           b g
                                             U 0 x ≡ lim vθPF r , θ


Together with the continuity equation, we now have two equations in two unknowns:

2 unknowns:                                         v x and v y

2 equations:                                     (135), Continuity

which are known as Prandtl's Boundary-Layer Equations for 2-D flows.


SOLUTION FOR A FLAT PLATE
Reference: Schlichting, 6th ed., p125-33, Whitaker
p430-440.

    Before we continue with the analysis of flow
around a circular cylinder, let's look at the simpler
problem of flow tangent to a semi-infinite flat plate.
The analysis begins by computing the potential-flow
solution.

•     Step 1: find potential flow solution

If the plate is infinitesimally thin, the uniform velocity profile is not disturbed:

P.F.:                                           v = U for all (x,y)

and                                             p = p∞ for all (x,y)

Of course, this doesn't satisfy “no slip,” on the plate, but then neither did potential flow around a
cylinder.

Step 2: apply Prandtl’s b.l. equations

From this potential-flow solution, we can calculate the Uo appearing in Prandtl's equation:


                                     Copyright © 2000 by Dennis C. Prieve
06-703                                                 142                                    Fall, 2000

                                    Uo (x) = v xPF(x,0) = U (a const.)

                                               Uo dUo /dx = 0

Eq. (135) becomes:                  v x∂ v x/∂ x + v y∂ v x/∂ y = ν∂2v x/∂ y2

                                           ∂ v x/∂ x + ∂ v y/∂ y = 0

Appropriate boundary conditions are:

no slip:                                 v x = v y = 0 at y=0, x>0

and outside the boundary layer, we obtain potential flow:

                                             v x → U as y → ∞

Step 3: re-write the b.l. equations in terms of the streamfunction

We can contract the two equations into one by using the stream function:

                                              v = ∇×[ψ(x,y)k]

which automatically satisfies continuity. Written in terms of the stream function, the problem becomes:

                                          ψyψxy - ψxψyy = νψyyy                                    (136)

at y=0,x>0:                                      ψx = ψy = 0

as y→ ∞:                                           ψ → Uy

where the subscripts denote partial differentiation.




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  143                                               Fall, 2000




           The development of the laminar boundary layer along a flat plate is visualized by the hydrogen
         bubble method. A fine electrode wire is introduced upstream of the flat plate and a voltage pulse is
          applied reapeatedly at regular intervals. The boundary layer thickness is seen to increase with
           the distance downstream for the leading edge. Photo taken from Visualized Flow, Pergamon,
                                              New York, p17 (1988).

Flow visualization studies show that the boundary-
layer grows in thickness as you move downstream
from the leading edge (see sketch at right). This
can be rationalized by considering the inverse
problem of a plate moving through a stagnant fluid.

Focus your attention on an intially stationary fluid
element in the path of the moving plate. The longer
the fluid is disturbed by the moving plate, the more time there is for momentum to diffuse away from the
plate.


Time Out: Flow Next to Suddenly Accelerated Plate

First consider the much simpler problem of a infinite plate
suddenly put in motion at t=0. Initially, the fluid and wall are
at rest; but at time t=0 the wall is set in motion in the x-
direction with a steady speed U. The initial and boundary
conditions are:

at t=0 for all y>0:                     vx = 0

at y=0 for all t>0:                     vx = U

as y→∞:                                vx → 0


                                     Copyright © 2000 by Dennis C. Prieve
06-703                                             144                                       Fall, 2000

The solution can be expected to have the form: v x = v x(y,t), v y = v z = 0. The NSE becomes:

                                             ∂v x    ∂2 vx
                                                  =ν
                                              ∂t     ∂y 2

where ν ≡ µ/ρ. The solution to this problem is well known:*


                                          b g           FG y IJ
                                       v x y , t = U erfc
                                                         H 4νt K
                                                             R1 as η → 0
                                            z
                                            η
                                              e − η ′ dη′ → S
                                          2             2
                             erfc η ≡ 1 −
                                                             T0 as η → ∞
where
                                           π0
                                          144  2443
                                                erf η


is the complementary error function; the integral itself is the error function.

At any fixed t, the velocity decays monotonically from U at y=0 to zero as y→∞. As t gets larger,
more and more fluid begins to move; we say “the motion penetrates deeper into the fluid.” Suppose we
wanted to know how far from the wall we have to go before the velocity drops to 1% of the wall value.

                                    v x ( δ, t )         δ 
     b     g
v x y = δ, t = 0.01U :
                                        U
                                                 = erfc        = 0.01
                                                         4 νt 

                                 erf  δ  = 1 − erfc  δ  = 0.99
                                       4 νt             4 νt 

Looking up the appropriate value in a table of error functions, we obtain:

                                               δ
                                                    = 1825
                                                       .
                                               4 νt

or                                            δ = 3.65 νt                                        (137)

This gives us some idea how far the motion “penetrates” into the stagnant fluid. Notice that the
penetration depth increases with the square-root of time.




* see BSL, p124f.


                                 Copyright © 2000 by Dennis C. Prieve
06-703                                                    145                                Fall, 2000

Time In: Boundary Layer on Flat Plate

    Now let’s apply this result to our original problem: the boundary-layer next to a semi-infinite flat
plate. Fluid farther downstream from the leading edge has been in contact with the moving plate longer;
and estimate of the “contact time” is:

                                                        t = x/U                                   (138)

(138) into (137):                              δ ∝ ν t ∝ νx U                                     (139)

•      Step 4: solve b.l. equation using “similarity
       transform”

Judging from the boundary conditions alone, we
would expect v x to vary from 0 at y=0 to U at y=δ
with sort of a parabolic shape, with δ getting larger
as we move downstream. Notice that the basic
shape of this profile is not really changing with x,
only the range of y-values over which the solution departs from potential flow is increasing as we move
downstream. This suggests a solution of the form:

                                                    v x/U = f ' (y/δ )                            (140)

Let's define a new independent variable which is scaled to the boundary-layer thickness:

Let
                                             y
                                             bg
                                            δ x
                                                ≈
                                                          y
                                                         νx U
                                                              ≡ η x, y b g
To get this guess in terms of the stream function, recall:

                                                              ∂ψ
                                                       vx =
                                                              ∂y


                                  z                                z bg
                                 x, y                              η
thus                      ψ=                  b g
                                          v x x, y dy
                                          12
                                           4 4  3 {
                                                      = Uδ f ′ η dη = Uδ f η bg
                               x, y = 0      Uf ′     δ dη         0


substituting δ from (139):                      b g
                                              ψ x, y = ν Ux f η        bg                         (141)

In terms of f(η), the boundary-layer equations (136) become:

                                                    f f " + 2f "' = 0

subject to:                                     f = f ' = 0 at η=0

                                      Copyright © 2000 by Dennis C. Prieve
06-703                                               146                                         Fall, 2000

                                                f ' → 1 as η→ ∞

Now we have an ordinary two-point boundary-value problem, which can be easily solved. This
solution was first obtained by Blasius (1908), who was a Ph.D. student of Prandtl.




Notice that the velocity component normal to the plate (i.e. v y ) does not vanish far from the plate:

           R|S v y b x, yg U|V = 0.8604 ν ≠ 0
      y →∞ | T U |W
       lim
                                        Ux

Consider a fluid balance around the shaded
rectangle in the figure at right. Owing to the need
to meet the “no slip” condition on the surface of
the plane, the flowrate out the right side of the
system is less than the flow in the left side. The
excess has to go out the top, causing v y > 0 there.


Boundary-Layer Thickness

    The definition of boundary layer thickness is somewhat arbitrary. Although we are tempted to say
that δ is that value of y at which the boundary-layer solution for v x (y) equals U (potential flow), v x
approaches U only asymptotically as y→∞; therefore, this "definition" yields the unhelpful result that δ is
∞. There are several ways to assign a more meaningful finite value to δ (x).




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                   147                                   Fall, 2000

One way to define the boundary-layer thickness, δ,
is that value of y at which the velocity is 99% of the
asymptotic value.

•   Def'n 1:         v x (x,δ 1) = 0.99U0(x)

For flow over a flat plate, this convention yields:

                                  νx
                      bg
                   δ1 x = 5.0
                                  U

Another way to define δ was suggested by Nernst who was
concerned with boundary layers which arose in mass transfer
problems. Nernst chose the diffusion boundary-layer thickness
as the thickness of a hypothetical stagnant film which has the
same diffusion resistance.

                                     dc        c
                  Ny          = −D            = ∞
                       y =0          dy y = 0   δ

Graphically, this δ can be determined by drawing a tangent to
the concentration profile at the surface (y=0). By analogy,
concentration of mass is like concentration of momentum, which is just the fluid velocity.

If we define δ for momentum transfer in the same way, replacing concentration by v x , then:

                                         ∂v x       ∆v   U0 ( x) − 0
•   Def'n 2:                                       = x =
                                          ∂y y = 0  ∆y    δ2 − 0

For flow tangent to a flat plate, this definition yields:

                                                               νx
                                                    bg
                                                δ 2 x = 3.0
                                                               U

Recall that the normal component of the velocity profile was nonzero far from the plate:

                                           R|S v y b x, yg U|V = 0.8604 ν ≠ 0
                                      y →∞ | T U |W
                                       lim
                                                                        Ux

except far downstream from the leading edge:




                                     Copyright © 2000 by Dennis C. Prieve
06-703                                                  148                                  Fall, 2000

                                   R|S v y b x, yg U|V = lim RS0.8604 ν UV = 0
                              y →∞ | T U |W x → ∞T
                               lim
                                                                      Ux W
                              x→ ∞


This means that the streamline moves away from
the plate. A third definition for δ is the distance
the streamline is displaced away from the plate.

Suppose that, far upstream, a streamline is given
by

x →- ∞ :                y=a

Thus the streamline is initially a distance a from
the x-axis. If downstream from the leading edge
of the plate, the streamline is a distance b from
the x-axis, then the displacement of the streamline is given by:

                                                      δ 3 = b-a

To evaluate this displacement, recall (from the definition of streamline) that the flowrate in the x-
direction between y=0 and the streamline is the same all along the streamline. Thus:

                                                                  bg
                                                                  z
                                                                b x
                                              Q
                                           ψ=   = aU =                v x dy
                                              W
                                                                  0

where W is the width of the plate (assumed to be arbitrarily wide). Adding δ 3U to both sides:


                                                            z
                                                            b
                                       b          g
                                        a + δ 3 U = v x dy + δ 3U                                (142)
                                                            0

The left-hand side of this expression can be rewritten as:


                                        ba + δ 3 gU = bU = z U dy
                                                                      b
                                                                                                 (143)
                                                                      0



                                           z            z
                                           b            b
                                               U dy = v x dy + δ 3U
                                           0            0
(142) becomes:

                                                        zb
                                                        b
                                               δ 3U =       U − v x dyg
                                                        0


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                     149                                Fall, 2000

Of course, the upper limit b will depend on the particular streamline we have chosen. In other words,
different streamlines are displaced differently depending on how close to the plate they were initially.
Thus the displacement distance δ 3 is not unique. However, distant streamlines are all displaced by the
same distance (since the integral converges as b→∞). So let's define the boundary-layer thickness as
the displacement of external streamlines:


                                                       zb
                                                      ∞
•   Def'n 3:                                δ 3U =         U − v x dy g
                                                       0

For flow tangent to a flat plate, this yields:

                                                                      νx
                                                  bg
                                             δ 3 x = 172
                                                      .
                                                                      U

Notice that all three of these definitions yield a boundary-layer thickness which is proportional to
 νx U although the proportionality constant varies considerably.

                                                                 νx
                                                  bg
                                                  δ x ∝
                                                                 U
                                                                                                   (144)


We showed (see page 132) for any 2-D flow (which this is) that:

                                                       R              νR
                                                 δ≈       =                                        (145)
                                                       Re             U

where R is the radius of the cylinder. For noncircular cylinders, R is some characteristic dimension of
the cross section (e.g. the major or minor axis of an ellipse). A semi-infinite flat plate is somewhat
unusual in that it has no characteristic dimension. However, if the plate were finite with length L along
the direction of flow, it would seem natural to choose L as the characteristic length. If one can
reasonably assume that what happens downstream with a longer plate does not significantly effect the
boundary layer thickness for a plate of length L (i.e. “exit effects” don’t propagate upstream). For an
semi-infinite plate, the same result is obtained by choose x as the characteristic length; then

                                                 νx                          Ux
                                        δ≈                 and        Re ≡
                                                 U                            ν

which is consistent with (144) and with Prandtl's more general result.


Drag on Plate

The net force exerted by the fluid on the plate is calculated from:


                                    Copyright © 2000 by Dennis C. Prieve
06-703                                               150                                     Fall, 2000

                                 F = ∫An.Tda = - ∫Apnda + ∫An.τ da

Choosing n = +j on the upper surface and n = -j on the lower
surface, the integral involving the pressure vanishes owing to
cancellation of the contributions from the upper and lower
surfaces (the pressure is the same, but n has opposite direction
on the two surfaces). This leaves

                             xF ∂v x I
                  Fx = 2 µ    GG ∂y JJ dx
                             0H     y =0K


The “2” comes from addition of the two contributions from the upper and lower surface. Evaluating the
integral and expressing the result in dimensionless form:

                                                Fx
                                                     1.328
                                        C D ≡ 2Wx =
                                              1
                                                ρU 2   Re
                                             2

where Re ≡ Ux/ν. In defining drag coefficient this way, we have departed somewhat from the
convention which uses the projected area along the direction of flow (i.e., the area of the shadow cast
by the object if the light source were located very far upstream). In the case of a plate this projected
area is zero, so we have used the area of the plate instead.


SOLUTION FOR A SYMMETRIC CYLINDER
     Let’s now return to the problem of flow around a cylinder
at large Reynolds number. We follow the same general steps
as we did in solving flow tangent to a flat plate:

•   Step 1: find potential flow solution and U0(x)

We accomplished this in HWK #4, Prob. 4. The velocity
profile in the potential flow solution is

                                               L    F RI O
                                                        2
                                       v r = U M1 − G J P cos θ
                                               MN H r K PQ
                                                 L F RI 2 O
                                       v θ = −U M1 + G J P sin θ
                                                 MN H r K PQ
•   Step 2: apply Prandtl’s b.l. equations (see page 134)


                                 Copyright © 2000 by Dennis C. Prieve
06-703                                                151                                        Fall, 2000

                                       ∂vx      ∂v x    ∂ 2v x  dU 0
                                    vx     + vy      − ν 2 = U0
                                        ∂x       ∂y      ∂y      dx
                                                ∂vx ∂v y
                                                    +    =0
                                                 ∂x   ∂y

From this potential-flow solution, we can calculate the Uo appearing in Prandtl's equation:

                               bg        b g
                         U 0 x = − vθ R, θ = 2U               :
                                                              sinθ            = 2U sin
                                                                                         x
                                                         FG   x  IJ = sin x              R
                                                          H
                                                      sin π −
                                                                RK        R

where x is the arc length, measured from the forward stagnation line, and
θ is the polar coordinate, which is measured from the rear stagnation line.
The two are related by

                           b
                     x = R π−θ      g or θ = π − Rx
Prandtl’s boundary-layer equations (126) become

                  ∂vx      ∂v    ∂2 v    U2    x    x
             vx       + v y x − ν 2x = 4    sin cos
                   ∂x       ∂y   ∂y       R    R    R
                               ∂vx ∂v y
                                   +    =0
                                ∂x   ∂y

Appropriate boundary conditions are:

no slip:                                     v x = v y = 0 at y=0

and outside the boundary layer, we obtain potential flow:

                                           v x → U0(x) as y → ∞

The main difference between a circular cylinder and the flat plate the left-hand side of the first equation,
which represents a pressure gradient along the direction of flow inside the boundary layer.

                                                dU 0    1 dp
                                           U0        =−      ≠0
                                                 dx     ρ dx

•   Step 3: re-write the b.l. equations in terms of the streamfunction

In terms of the streamfunction, Prandtl’s boundary-layer equations are:


                                    Copyright © 2000 by Dennis C. Prieve
06-703                                              152                                          Fall, 2000

                                                            U2    x    x
                            ψ y ψ xy − ψ x ψ yy −νψ yyy = 4    sin cos
                                                          144R 42444
                                                                  R   3R
                                                                       dU 0
                                                                  U0
                                                                         dx

at y=0:                                        ψx = ψy = 0

as y→ ∞:                                       ψ → Uo (x)y

Blausius obtained the solution to this problem, which in fact works for cylinders of much more general
shape — not just circular cylinders.

What is required is that the potential flow solution must be an odd function of x:

                                    Uo (x) = u1x + u3x 3 + u5x 5 + ...

Then Blausius obtained a solution with the form (see S:154-158):

                              ψ(x,y) = (ν/u1)1/2[u1xf 1(η) + 4u3x 3f 3(η) +
                                     + 6u5x 5f 5(η;u1,u3,u5) + ...]

where                                        η = y(u1/ν)1/2

The velocity profile obtained this way for a circular cylinder is sketched below:




This result is quite different from what was obtained with the flat plate. With the flat plate, the velocity
profile v x as a function of y had the same shape for different x’s. Indeed the shape at different x’s were
similar and we were able to use a “similarity transform.” Here, for flow perpendicular to a circular
cylinder, the basic shape changes with x (or α or θ). In particular notice that the initial slope



                                  Copyright © 2000 by Dennis C. Prieve
06-703                                               153                                       Fall, 2000

b∂v x ∂yg y =0 is positive for α=0 and becomes zero for α=108.8°. At even larger α’s, the initial slope
becomes negative.

This turning around of the velocity profile coincides with a profound event called boundary-layer
separation. Separation does not occur on the flat plate. The main difference in Prandtl’s boundary-
layer equations which causes separation is the form of the pressure gradient.


Boundary-Layer Separation

    To see what boundary-layer separation is and why it comes about, let's first recall the potential flow
solution for the pressure on the surface of the cylinder. Using the velocity profile obtained in Hwk #4,
Prob. 4, we can calculate the kinetic energy per unit volume at any point in the flow

                            1 2       L1                  R 2 1 R 4O
                              v = U 2 M + b1 - 2 cos2 q gF I + F I P
                            2         N2                 Hr K 2 Hr K Q

Then using Bernoulli’s equation:




we can compute the pressure profile around the cylinder.

Consider a fluid element approaching the cylinder along
the stagnation line shown in the sketch at right. As the
fluid element moves toward the stagnation point A (θ =
π and r changes from ∞ to R), the pressure rises to a
maximum. Moving away from Point A along the
surface of the cylinder (r = R and θ decreases from π
to π /2), the fluid element now accelerates until reaching
its maximum speed and minimum pressure at Point B
and so on.




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                             154                  Fall, 2000

The results for the pressure changes or kinetic energy
changes during this journey are summarized on the graph
at right. Note that Bernoulli's equation balances an
increase in kinetic energy with a decrease in pressure
and vice versa. So that the sum of the two curves
equals a constant. Inside the boundary-layer, the same
pressure gradient applies but we also have viscous
dissipation in addition to kinetic energy. The upshot is:

just outside b.l.: potential flow (no irrev. loss of
    energy). The kinetic energy of the fluid at B is just
    enough to overcome the pressure hill at C. Fluid
    elements arrive at C with v=0 (no kinetic energy to
    spare).

inside b.l.: dp/dx same, but viscous dissipation
    consumes some of the kinetic energy, leaving
    insufficient energy to climb the pressure hill.

Consequently fluid elements in the boundary layer stop
their forward advance at some point before reaching C, which
we will label S. Fluid elements between S and C are driven
toward S by falling down the pressure hill.

To conserve mass, fluid must be pushed away from the cylinder
at S. This is known as separation of the boundary layer.

The x-component of flow is toward the separation point on
either side of S. Thus at y=0 dv x/dy>0 for x<x S and dv x/dy<0
for x>x S . At the separation point the derivative changes sign:




which serves as a convenient way to locate the separation point
in any mathematical solution to the flow problem.

Necessary conditions for separation include:

    1. decelerating flow or Dp/Dt>0

    2. irreversible losses of energy




                                 Copyright © 2000 by Dennis C. Prieve
06-703                                             155                                    Fall, 2000

Drag Coefficient and Behavior in the Wake of the Cylinder

    Blausius solution does not apply downstream from the separation point (i.e x>x s). Indeed, the
boundary layer is not thin enough to be described by Prandtl’s equations. Since the behavior on the
downstream side significantly inflences the drag and since this behavior is not predicted by Blausius
solution, Blausius solution does not correctly predict the drag force. Measurements of the drag
coefficient for flow normal to a circular cylinder are summarized below.




Several different regions are apparent in this log-log graph. Some of these correspond to major
changes in the shape of the velocity profile.

Re << 1. Upstream and downstream halves of streamline are                                   Re = 0.038

mirror images. This is what you would expect if you looked for a
streamfunction solution with the form (see Hwk #7, Prob. 2):

                   ψ(r,θ) = f(r)sinθ

Although inertial terms are never negligible. The measured drag
coefficients agree well with the prediction of Lamb.

As we increase the Reynolds number, inertia becomes more
important. Generally large inertia has a tendency to make
streamlines straight.

1 < Re < 6. Streamlines are no longer symmetric about θ=π /2.                                 Re = 1.1

Streamlines are somewhat farther from the cylinder on the
downstream side.

Drag coefficients are significantly smaller than predicted by Lamb.




                                 Copyright © 2000 by Dennis C. Prieve
06-703                                             156                                         Fall, 2000

                                  6 < Re < 40. Two stationary vortexes are formed in the wake of the
                                  cylinder -- a consequence of boundary-layer separation.

                                  Re > 40. Periodic vortex shedding. Large vortices, the size of the
                                  cylinder, are created on a periodic basis. These vortices detach and
                                  move downstream. Vortex shedding alternates between the top and
                                  bottom of the cylinder. Vortexes shed from the top have a vorticity
            Re = 19
                                  (∇×v) with a sign opposite from vortexes shed from the bottom.




                                                Re=140

These vortices persist many cylinder diameters downstream from the cylinder. Most of the irreversible
losses of energy occur in forming these vortices, whose ultimate fate is to dissipate their kinetic energy
as heat.

Re ≈ 4× 105 . Onset of turbulence in the boundary layer. Point of separation moves further back
toward rear stagnation point. Drag is significantly reduced -- almost a discontinuous drop.




                                 Copyright © 2000 by Dennis C. Prieve
06-703                                               157                                          Fall, 2000

The Lubrication Approximation
    Consider a plate sliding on a lubricating film past a
second stationary surface. If the distance separating the
two plates is small compared to the dimensions of the
plate, we can assume fully developed flow applies
through out most of the oil film. Then:

                                h− y
for h<<L:              bg
                    vx y = U
                                 h

                    p = p0 for all x,y


                      z bg
                      L
                 Q = v x y dy = 12 Uh
                      0
                                                       µU
                                           τ xy = τ yx = −
                                                        h
                                                   µULW
                                              Fx =
                                                     h

Since the pressure is same inside the film as outside the slide, the sliding motion of two parallel surfaces
produces no lateral component of force.

                       Fy = 0

Now suppose the slider is inclined ever so slightly
relative to the stationary plate. We might guess,
that if α is small enough, the velocity profile will
not be affected. But, owing to the inclination, h is
no longer independent of x, so our guess leads to:

             Q 1
              = Uh x = f x
             W 2
                          bg bg              (146)


which violates continuity. It turns out that
continuity is preserved by a nonzero pressure gradient, dp/dx, which causes pressure-driven flow. Thus
even the primary component of the velocity profile is affected by this slight inclination. More
significantly, it turns out that this inclination will produce a different pressure in the film from the fluid
outside the slider block which, tends to push the two surfaces together or apart.

                                                   Fy ≠ 0




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                     158                                          Fall, 2000

Let’s try to estimate this force. It turns out to be no
more difficult to obtain the result for an arbitrary gap                                     L
profile h(x) (see figure at right), since the essential
difficulty arises from the fact that h is not constant with
respect to x.
                                                                               y
Suppose the thickness of the gap is everywhere very                                                           hc
                                                                                                 h(x)
small compared to the dimensions of the slider block.                                   x

                  h(x) << L       for all x                                             U

Essentially, this is a geometry with two very different
length scales characterizing variations in the different directions x and y: we expect slow variations with
x and rapid variations with y. We will exploit this difference using a regular perturbation in the ratio of
the two length scales.

We will start by nondimensionalizing the equations of motion:

                                        x              y         v             vy
Let                              X≡             Y ≡            u≡ x       v≡
                                        L             hc          U             vc

L is an obvious choice for the characteristic value of x (since 0<x<L) and U is a obvious choice for the
characteristic value of v x (since v x = U at y=0). Since 0<y<h(x) some characteristic value hc of the
film thickness seems like a logical choice to scale y.* The choices of characteristic values for v y and p
are not obvious; so we will postpone a choice for now and just denote these values as v c and pc.

We seek a solution in the form of a regular perturbation:

                                                        h
where                                                 α≡ c
                                                         L

                         b        g         b         g          b g
                       v x x , y , α = Uu X , Y , α = U u0 X , Y + αu1 X , Y +K b g                         (147)

                  v y ( x , y , α ) = vc v ( X , Y , α ) = vc v0 ( X , Y ) + αv1 ( X , Y ) + K          (148)

                   b         g                  b          g          b g
                  p x, y , α − p ∞ = pc P X , Y , α = p c P0 X , Y + αP1 X , Y +K    b g                    (149)

As usual an important aspect of this form is that all derivatives of the dimensionless velocity components
u and v with respect to the dimensionless coordinates X and Y are O(α 0):




* For definiteness, we might select the largest value of h(x) to be hc.

                                      Copyright © 2000 by Dennis C. Prieve
06-703                                                  159                                       Fall, 2000

                            ∂ u/∂ X, ∂ u/∂ Y, ∂ v/∂ X and ∂ v/∂ Y       are    O(α 0)                 (150)

The choice of v c becomes apparent when we nondimensionalize the continuity equation:

                                               ∂v x ∂v y
continuity:                                        +     =0                                           (151)
                                                ∂x   ∂y

Substituting (147) and (148) into (151):

              U ∂u   v ∂v                   ∂u      1 vc ∂v                        ∂u    v ∂v
                   =− c              or        =−                             or      =− c
              L ∂X   hc ∂Y                  ∂X    hc L U ∂Y                        ∂X   αU ∂Y

(151) requires the two terms in the continuity equation to be equal but opposite; and to be exactly the
same order of α . Since ∂ u/∂ X and ∂ v/∂ Y are O(α 0) according to (150), we are forced to choose v c
such that vc αU is O(α 0). So let’s choose

                                                  v c = αU                                            (152)

Substituting (147)-(149) and (152) into (151), the leading term is

                                               ∂u0 ∂v0
ε 0:                                              +    =0                                             (153)
                                               ∂X   ∂Y

Next we examine the principle component of the Navier-Stokes equation:

                                 ∂v x     ∂v     1 ∂p          F
                                                         ∂ 2v x ∂ 2 v x             I
NSEx:                       vx
                                  ∂x
                                      + vy x = −
                                           ∂y    ρ ∂x
                                                      +ν
                                                          ∂x 2
                                                               GH
                                                               +
                                                                 ∂y 2
                                                                                    JK                (154)


Substituting (147)-(149) and (152) into (154):

                  U 2 ∂u αU 2 ∂u       p ∂P    U ∂2 u       U ∂2 u
                     u     +    v    =− c    +ν 2      + ν
                  1L424 ∂3
                         X 1 α4
                              L24 ∂3
                                   Y 1 ρ2
                                       4L ∂4
                                           X 14
                                           3   L 2∂4 2
                                                    X3
                                                         1
                                                           αL 2 ∂Y 2
                                                           44244 3
                                                                                   b g
                    Oαe j
                       0        0
                                     e j
                                   O α             0?           Oα  e j                 e j
                                                                                   O α −2


The last term in the equation is lowest-order in the small parameter α : it’s O(α -2). All the other terms in
the equation (except possibly for the pressure gradient) are O(α 0). Unless we have some other term in
the equation of the same order, we will be forced to take ∂ u
                                                                    2
                                                                       = 0, which yields linear shear flow
                                                                  ∂Y 2
to all orders in α . We already know that this solution violates macroscopic continuity. To avoid this
situation, we choose pc so that the pressure gradient term is also of O(α -2):




                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                   160                                          Fall, 2000
                                                                U          µU
                                     pc = ρL × ν                      =                                   (155)
                                               {

                                                    µ
                                                        ρ
                                                            b g
                                                            αL 2           α2 L


With this choice, the leading term in NSEx is

                                                ∂ 2 u0          ∂P0
α -2:                                                       =                                             (156)
                                                ∂Y   2          ∂X

So far we have two equations [(153) and (156)] in three unknows (u0, v 0 and P0). We need another
equation. So we turn to the secondary component of NSE:

                              ∂v y      ∂v y
                                           1 ∂p    ∂2 v y ∂2 v y      F                I
NSEy:                     vx    + vy    =−      +ν       +            GG               JJ
                             ∂x      ∂y    ρ ∂y    ∂x 2    ∂y 2        H                K
Introducing our dimensionless variables, we have:

            αU 2 ∂v
                 u    +
                        αUb g2
                             v
                               ∂v
                                  =−
                                        µU    ∂P
                                                 +ν
                                                    αU ∂ 2 v
                                                             +ν
                                                                αU ∂ 2 v
            1L424
                 bg
                   ∂3
                    X 1α4 L24∂3 Y
                                bg
                                            e jb g
                                     α 2 L αL ∂Y 14
                                     14243
                                                    L22∂4
                                                        X3 2
                                                              14
                                                                αL 2 ∂Y 2
                                                                 4244  3
                                                                                            b g
               O α        Oα                         Oα                           bg          e j
                                                                                             O α −1
                                                    e j
                                                 O α −3


After substituting the perturbation expansions (147)-(149), (152) and (155), then collecting terms, the
leading term is:

                                ∂P0
α -3:                               =0         or        P0 = const w. r. t. Y                            (157)
                                ∂Y

This conclusion suggests that the pressure gradient in (156) can be treated as a constant with respect to
Y:
                                      ∂ 2 u0 dP0
                                            =        = const w.r.t. y                              (158)
                                      ∂Y 2     dX

We might be tempted to set this pressure gradient to zero since:

                                           p(0) = p(L) = po

Of course the pressure gradient is zero when the two plates are parallel. But we already suspect that
the pressure gradient is needed to avoid linear shear flow, which violates continuity. So we avoid this
temptation and leave dP0/dX nonzero.




                                 Copyright © 2000 by Dennis C. Prieve
06-703                                                161                                 Fall, 2000

          From this point on, we will resort to the dimensional variables, using what we
         have learned from the leading terms of the perturbation expansion. In essence,
                   we are truncating (147)-(149) after the first nonzero term.

Integrating (158) twice:           b g 21µ dpdx y 2 + c1 bxg y + c2 b xg
                                v x x, y =


Boundary conditions are given by the “no slip” requirement:

                                              v x = 0 at y=h(x)

                                               v x = U at y=0

Evaluating the two integration constants leads to:


                               b g            FG   y  IJ + 1 dp e y2 − yhj
                            v x x, y =
                                               H
                                             U 1−
                                             1424 h3   K 12 µ44
                                                              dx 2443
                                         linear she ar flow      pressure - driven flow


The volumetric flowrate per unit width of plate is calculated as:


                                         z b g
                                         h
                                 Q                          Uh h 3 dp
                                   =         v x x , y dy =   −                               (159)
                                 W                           2 12µ dx
                                         0

Q can be made to be a constant at each x if dp/dx is allowed to take on non-zero values. The
necessary values can calculated from (159):

                                             dp 6µU 12µ Q
Q/W=const.:                                     =    −                                        (160)
                                             dx   h2   h3 W

Integrating with respect to x from x=0 where p=p0 to any other x.


                                                       z                    z
                                                       x                    x
                                  bg
                                p x − p0 = 6µU
                                                           dx
                                                               2
                                                                 − 12 µ
                                                                          Q dx
                                                                          W h3
                                                                                              (161)
                                                       0 h                 0

The pressure is the same at the downstream end of the gap. Then:


                                                           z                    z
                                                           L                    L
                               bg
                              p L − p0 = 0 = 6µU     2
                                                       − 12 µ
                                                               dx
                                                              Q dx
                                                              W h3
                                                 0 h           0

Knowing the overall pressure drop is zero allows us to compute the flowrate:



                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  162                                     Fall, 2000
                                                   Q UH
                                                     =                                              (162)
                                                   W   2

                                                    L             L
                                                        dx            dx
where                                        H = ∫                ∫ h3
                                                            2
                                                    0 h           0

is an average gap width. If h(x) is a linear function whose value changes from

                                                   h(0) = h1

to                                               h(L) = h2 < h1


                                H=2
                                          h1h2                  1 1 1
                                                                 =    +
                                                                        1  FG   IJ
then
                                         h1 + h2
                                                       or
                                                                H 2 h1 h2   H    K
which is called the “harmonic mean” of h1 and h2. (162) into (160) gives the pressure gradient:

                      dp 6µU
                         =     1−
                                  H FG      IJ
                      dx   h 2    h  H       K
Note that                  h2 < H < h1

at x=0:            h = h2 > H → dp/dx>0

at x=x H:            h = H → dp/dx=0

at x=L:            h = h1 < H → dp/dx<0

Thus H represents not only an average gap width (with respect to flowrate) but it is also the width at the
point where pressure is a maximum.

Now we are in a position to evaluate the force exerted on the plate by the fluid. The x-component of
the force is

                            L                           L       dv x              µU
                  Fx = W   ∫0   τ yx ( x, 0 ) dx = W   ∫0   µ
                                                                 dy y = 0
                                                                          dx = WL
                                                                                   h
                                                                                     + O (ε )


                                                      h −h
where                                              ε≡ 1 2
                                                        L

is the angle of tilt between the two plates (ε << 1). This result is the same (neglecting the O(ε )
correction) as would be obtained for two parallel plates. More interesting is the y-component. For a
linear gap:


                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                     163                                    Fall, 2000

                                                                       LMln h1 − 2bh1 − h2 g OP
                       Fy
                       W
                            =   z
                                0
                                    L
                                        p( x ) − p0 dx =
                                                            6µUL2
                                                           bh1 − h2 g2 N h2 h1 + h2 Q
Does this reduce to zero when the two surfaces are parallel (i.e. h1=h2)? Although it might appear that
Fy→∞ as h1→h2, it turns out that the terms inside the square brackets tend to zero faster than the
denominator outside the brackets. In the limiting case that

ε <<1:                                                h1 ≈ h2 ≈ h,

and                                             h1-h2 << min(h1,h2),

                                                                     3
                                                      = µU  
                                                 Fy    1     L
then we obtain:                                                          ε
                                                 W     2    h

So we do recover zero force for parallel plates. The main difference between two parallel- and two
nonparallel-plates is the occurance of the nonzero y-component of lift which would not occur for parallel
plates. Notice that Fy>0 if ε >0 (h1>h2) and Fy<0 if ε <0 (h1<h2). Thus either repulsion or attraction
of the two plates is possible, depending on the direction of
tilt relative to the direction of flow.


TRANSLATION OF A CYLINDER ALONG A
PLATE
    The lubrication approximations developed for the slider
block can be easily extended to other geometries. For
example, instead of a planar slider block, suppose I try to
drag a cylinder parallel to a plate. What will be the force
tending to push the two surfaces apart? The same
perturbation expansion done with the slider block applies
here, except we have a different profile h(x) for the gap
between the two surfaces.

To deduce the gap profile, recall the equation of a circle

               bx − xc g2 + b y − yc g2 = R2
where (x c, yc) is the location of the center of the circle and
R is its radius. Substituting the coordinates of the center in
our problem and y(x) = h(x), we have

                       b
                  x 2 + h − R − h0 2 = R2g
                                        Copyright © 2000 by Dennis C. Prieve
06-703                                                 164                                       Fall, 2000

Dividing by R2

                                         x2        F h − h0 − 1I 2 = 1
                                         R   2
                                               +
                                                   H R K
Recognizing that h-h0 is very small compared to R, we can use the Binomial Series, truncated after the
second term, to obtain an approximation to the second term:

              F h − h0 − 1I 2 = F1 − h − h0 I 2 = (1 − ε )2 = 1 − 2ε + Obε 2 g ≈ 1 − 2 h − h0
              H R K GG 123             R JJ                                              R
                                H ε K
The “1” cancels with the “1” on the right-hand side of the equation, leaving:

                                                         x2
                                               bg
                                              h x = h0 +
                                                         2R
                                                                                                     (163)


provided that h-h0 << R which requires that x remain small compared to R.

                                                    dh x
                                              α=      = << 1
                                                    dx R

where we have moved x=0 to the center of the gap, which is now symmetric about x=0. Although
(163) is only valid for x very small, it turns out virtually all of the contribution to the force comes from
the region where (163) is valid — provided that h0 is sufficiently small compared to R. In any case, let's
assume that (163) is valid. If that bothers you, then
replace the circular cylinder by a parabola.

    As with the flat slider, the pressure profile is
determined by the need to have the volumetric flowrate
through any x=const plane be the same for all such planes.
Eq. (159) becomes:

         Q Uh h 3 dp
           =  −       = const w.r.t. x                   (164)
         W   2 12µ dx

If we view Q/W as an unknown integration constant, then
we will need two boundary conditions to evaluate the two
integration constants we will have after integrating this.
Since the fluid held between the cylinder and the wall is in
contact with the same reservoir at either end of the gap, we can require:

                                          p = p0 at x = - ∞,+∞


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                               165                                      Fall, 2000

By “infinity”, we simply mean far from the origin. It might seem more reasonable to specify x=R, but if
R is sufficiently large compared to h0, no significant error will be incurred by extending the limit to
infinity. The counterpart to (161) is:


                                                     z                   z
                                                     x                   x
                                                          dx ′               dx ′
                                bg
                              p x − p∞ = 6µU
                                                           h2
                                                              − 12 µ
                                                                     Q
                                                                     W        3
                                                                                                    (165)
                                                     −∞                  −∞ h

Applying the other boundary condition at x=+∞ allow us to evaluate Q. The counterpart of (162) is
                                            Q UH
                                               =                                               (166)
                                            W      2


                                                 z
                                                 ∞
                                                      dx
                                                      h2
where                                     H = −∞

                                                            z
                                                            ∞
                                                                 dx
                                                                  3
                                                           −∞ h

is an average gap width.

Substituting (163):                             H = 43 h0

As long as h(x) is an even function of x, then                                p p0
p(x) must be odd:                                                             µU
                                                                                 h0
            h(x)=even → p(x)=odd

Thus the pressure profile given by (165) looks                                        2
as shown at right. The extrema correspond to:                                             3
                   dp/dx=0
                                                                                                    x
Subsituting (166) and dp/dx=0 into (164) yields:                                                    Rh0

dp/dx=0:                                     h = H = 43 h0

Substituting (163) and solving for x:

dp/dx=0:                                     x = ± 23 Rh0

Because p is an odd function, there will be no normal force tending to separate the two surfaces:




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                  166                                     Fall, 2000


                                                 z bg
                                        Fy       ∞
p=odd:                                       =        p x − p0 dx = 0
                                        W
                                                 −∞
                                             ∞
                                    Fx                           2R
                                       = ∫ τ xy ( x ) dx = 2πµ U
                                    W −∞                         h0


CAVITATION
    However, there is an important phenomenon which we have not discussed which can cause a lift
force to push the two surfaces apart. That phenomenon is

cavitation - formation of gas bubbles caused by a lowering of pressure

If the absolute pressure of the fluid drops below the vapor pressure of the liquid, we will have boiling of
the liquid and cavitation. Because pressures generated in lubrication problems can be significant
compared to atmospheric, cavitation is not an uncommon event.

sources of gas bubbles:

•   vapor of liquid (if p<pvapor)
•   air (if p<psaturation)

Many liquids are kept in contact with air at one atmosphere and therefore become saturated with air. If
the pressure on the liquid is suddenly lowered, the air will be supersaturated and air bubbles will form.

What effect will cavitation have on the pressure profile?
                                                                                    p − p0
Although an exact analysis would require consideration
of two-phase flow, we can anticipate that — at the very
least — the absolute pressure cannot drop below
saturation.
                                                                 psat − p0
If any of the negative portion of the pressure profile is
chopped off, the profile loses its anti-symmetry. A
repulsive force pushing the surfaces apart becomes
likely. The resulting profile might be expected to look
something like that shown at right.




                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                 167                                         Fall, 2000

SQUEEZING FLOW
    The above two problems both involve the sliding of two                                    Fz
surfaces past one another. A related lubrication problem is the
squeezing motion between two bodies. Consider the “squeezing”
motion in a thin film of liquid held between a circular disk and a
parallel flat plate in the limit in which h<<R. In the limit ε ≡ h/R
→ 0, a solution to the Navier-Stokes equation can be found via a
regular pertubation expansion of the form:

         b g b g                              b g b g
     v r r , z , ε = uc u ρ, ζ , ε = uc u0 ρ, ζ + εu1 ρ, ζ +K

      v z br , z , εg = Uvbρ, ζ, ε g = U v0 bρ, ζ g + εv1 bρ, ζg +K

                         pb r , z , ε g − p∞ = pc Pbρ, ζ, εg = pc p0 bρ, ζg + εp1 bρ, ζg +K

                                dh     h
where                     U ≡      , ε≡ ,          ρ≡ rR        and        ζ ≡ z h = z εR
                                dt     R

Note by using the arbitrary uc as our characteristic radial velocity, we are delaying the choice until we
have a chance to inspect the continuity equation:


continuity:
                                                  b g
                                             1 ∂ rv r  ∂v
                                                      + z =0                                           (167)
                                             r ∂r       ∂z


Nondimensionalizing:
                                                   b g
                                           uc 1 ∂ ρu U ∂v
                                                    +      =0
                                           R ρ ∂ρ     h ∂ζ

                                            εuc 1 ∂ ( ρu )    ∂v
Dividing by U/h:                                           =−                                          (168)
                                            {U 1ρ424∂ρ3 {     ∂ζ
                                                   O ( ε0 )     O ( ε0 )
                                              1


Boundary conditions on v z include:

at z=0 or ζ=0:                               vz = 0     or    v=0

at z=h or ζ=1:                               vz = U      or     v=1

This means that ∂v z ∂z (and ∂v ∂ζ ) is not zero; so that the other term in the continuity equation (167)
is not zero either. The only way the two sides of (168) can have the same order in ε is for the
coefficient to be O(ε 0). This is accomplished by choosing:

                                                   uc = ε -1U

                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                 168                                      Fall, 2000

Next we examine the principle component of the Navier-Stokes equation. Although the flow is caused
by motion in the z-direction, the r-component is much larger (uc >> U for ε << 1).


r:
                        ∂v     ∂v
                      vr r + vz r = −
                                       1 ∂p
                                            +
                                              µ ∂ 1 ∂ rv r      LM b g OP + µ ∂ 2 vr
                         ∂r     ∂z    ρ f ∂r ρ f ∂r r ∂r         N      Q ρ f ∂z 2
Here we have added the subscript “f ” on the fluid density to avoid confusion with the dimensionless
radial coordinate. Nondimensionalizing:


         eε −1U j2 u ∂u + ε −1U 2 v ∂u = − pc ∂p + µε−1U ∂ L 1 ∂bρu gO + µε−1U ∂ 2 u
             R       ∂ρ      εR     ∂ζ    ρ f R ∂ρ ρ f R 2 ∂ρ MN ρ ∂ρ PQ ρ b εRg 2 ∂ζ2
         14  4244    3 14243                       144424443 1f44244                3
              e j
            O ε −2               e j
                               O ε −2
                                                                        e j
                                                                   O ε −1                e j
                                                                                       O ε −3


Clearly, the first viscous term and both inertial terms are negligible compared to the second viscous
term. Unless we have some other term in the equation of the same order, we will be forced to take
∂2 u     = 0, which (after no slip is applied) yields u = 0 for all ζ. This would violate continuity. Thus
    ∂ζ 2
we choose pc so that the pressure derivative has the same order as the second viscous term:

                                        pc    µε −1U                 µU
                                            =                or pc =
                                                 b g
                                       ρ f R ρ f εR 2                ε3 R

Finally, we look at the secondary component of the Navier-Stokes equation:

                           ∂v z     ∂v
                                + vz z = −
                                            1 ∂p µ 1 ∂
                                                 +
                                                            ∂v
                                                           r z +
                                                                  FG
                                                                  µ ∂2 vz     IJ
z:                    vr
                            ∂r       ∂z    ρ f ∂z ρ f r ∂r   ∂r    H
                                                                 ρ f ∂z 2      K
Nondimensionalizing:


         eε −1U jU u ∂v + U 2 v ∂v = − µU ε 3 R ∂P + µ U 1 ∂ Fρ ∂v I + µ U ∂ 2 v
                                                          2 ρ ∂ρ GH ∂ρ JK ρ
                                       14243 144424443 1f4b4
              R
         144244      ∂ρ
                     3 1  εR
                           424  ∂ζ
                                3       ρ f εR  ∂ζ  ρ f R                   εRg 2 ∂ζ2
                                                                             244   3
              e j
             O ε −1            e j
                              O ε −1           e j
                                              O ε −4                    e j
                                                                       O ε0             e j
                                                                                       O ε −2


Note that ∂P ∂ζ is the lowest order term in this equation. Moreover, it is the only term which is O(ε -
4). Therefore when the perturbation expansions are substituted, and terms of like order are collected,
the leading term is




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                        169                               Fall, 2000
                                           ∂P0
ε -4:
                                            ∂ζ
                                               =0            or             bg
                                                                    P0 = P0 ρ                        (169)


so that the z-dependence of pressure can be neglected compared to the r-dependence. The resulting
problem to solve (going back to dimensional quantities) is:


Continuity:
                                                        b g
                                                 1 ∂ rv r  ∂v
                                                          + z =0                                     (170)
                                                 r ∂r       ∂z

                                              ∂ 2 vr        dp
NSEr:                                     µ             =      = const. w.r.t. z                     (171)
                                              ∂z 2          dr

Since the right-hand side is independent of z, we can integrate immediately to obtain the general solution:

                                                     dp z 2
                                          µv r =
                                                     dr 2
                                                                    bg
                                                            + c1 r z + c2 r bg
Boundary conditions are:

at z=0:                                                  vr = vz = 0

at z=h:                                                v r = 0, v z = -U

Applying the b.c.'s we get:

                             1 dp
                     vr =         z(z − h)                          (172)
                            2µ dr

As before, dp/dr is determined such that continuity is
satisfied. Now, however, macroscopic continuity requires:

              h
              ∫ vr ( r , z ) 2πrdz =      π
                                          { r 2U                    (173)
              01442443                    flow in
                                        through top
                  flow out through
                  walls of cylinder


(172) into (173) and requiring that the result be satisfied for
any r yields:

                         dp         r
                            = −6µU                                  (174)
                         dr        h3

Requiring that:             p(R) = p0


                                      Copyright © 2000 by Dennis C. Prieve
06-703                                                       170                              Fall, 2000

we can integrate to obtain the pressure profile:
                                                                               p − p0
                                       R2 − r 2
                  bg
                p r − p0 = 3µU
                                           h3

which is sketched at right. Substituting (174) into (172):

                                 LMF z I − F z I 2 OP
                 b g
              v r r , z = 3U
                             r
                             h    MNGH h JK GH h JK PQ             (175)


The other component of velocity can be determined by
applying microscopic continuity. Using (151) and (175):

                                   ∂v z    1 ∂ rvr  b g              LMF z I − F z I 2 OP
                                                                      MNGH h JK GH h JK PQ
                                                      6U
                                        =−         =−
                                    ∂z     r ∂r        h

Integrating subject to v z = 0 at z = 0:

                                                            z 2     z 3 
                                       v z ( r , z ) = −U  3   − 2                          (176)
                                                            h      h  

To calculate the force exerted by the plate on the fluid, we use
the unit normal pointing out of the fluid: n=k:

                           dF = k.T da

From the axisymmetry of the problem, we anticipate that there
will only be a z-component of this force, which we can calculate
by post dotting the above by k:

                  dFz = k.T.k da = (-p+τzz)da

In this problem, the normal component of the deviatoric stress (τzz) vanishes. Using (176):

                            τzz = µ ∂ v z/∂ z|z=h = µ(-U)[6zh-2 - 6z2h-3]|z=h = 0

This leaves just a contribution from the pressure. Since p(r,h) is independent of θ, we choose da =
(2π r)dr to be a thin annulus of radius r and thickness dr:


                                                         z
                                                         R
                                                                       3πµUR 4
                                       − Fz = 2π rp (r , h) dr =
                                                         0                 2h3



                                      Copyright © 2000 by Dennis C. Prieve
06-703                                                 171                                                 Fall, 2000

Notice that, for a fixed U, the force required becomes unbounded as h→ 0.


REYNOLDS EQUATION
    Sliding motion and squeezing motion are quite different. Yet the lubrication approximation for each
has a lot in common. In particular, note that in either case, pressure can be taken as as a constant along
a normal to either surface (compare (157) and (169)). In either case, the dominant velocity component
is tangent to the surfaces and the principle component of the NSE is approximated by a balance
between viscous shear stress on the surface with the pressure gradient along the surface (compare (158)
and (171)). It turns out that the lubrication approximation can be generalized to handle an arbitrary
combination of squeezing and sliding motion in 3-D.

    Consider two bodies of arbitrary (but smooth) shape                     v = U2 e x + V2 e y + W2 e z
moving slowly through a viscous fluid in the near vicinity of
each other. A rectangular Cartesian coordinate system is
                                                                                                            h2 ( x , y )
chosen so that the z-axis coincides with a straight line                             δ2
connecting the two surfaces at the points of minimum                                 δ1
approach. The origin is located at some arbitrary point                                                     h1 ( x , y )
along this line. δ i represents the distance (along the z-axis)
from the origin to the surface of body i (i = 1,2), while z=-
h1(x,y) and z=h2(x,y) describe a portion of their surfaces                  v = U1 e x + V1 e y + W1e z
nearest the origin. Let Rix and Riy be the radii of curvature
of body i in the x- and y-directions, respectively.

For distances hi(x,y) much less than both Rix and Riy, hi can be approximated by♣

                                                              x2    y2
                                       hi ( x, y ) = δ i +        +
                                                             2 Rix 2 Riy

The total distance between the two surfaces is

                                                                            x2   y2
                            h( x , y ) = h1 ( x , y) + h2 ( x, y ) = δ +       +
                                                                           2 Rx 2 R y

where δ = δ 1 + δ 2 and Rj (j = x,y) can be considered to be the radii of curvature of the film:




♣ Actually, this assumes that the principle radii of curvature of both surfaces lie either in the x- or y-
directions. Should one of the surfaces be rotated around the z-axis by an angle θ, the function acquires
an addition term which is proportional to xy sinθ cosθ.

                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                         172                               Fall, 2000
                                                1    1    1
                                                   =    +
                                                R j R1 j R2 j

As in the two previous examples, scaling leads us to the following equations for the velocity profile in the
film:
                                               ∂ 2 v x ∂p
                                             µ         =
                                                ∂z 2     ∂x
                                                         ∂2 v y         ∂p
                                                    µ               =
                                                           ∂z   2       ∂y

where the pressure profile is independent of z:

                                                      p = p(x,y)

Since pressure is independent of z, these equations can be easily integrated to yield the velocity profile in
the film, which again turns out to be the sum of linear shear flow (from the sliding motion) and a
parabolic pressure-driven flow.

                               ∂p 1 2                          ∆U
                       vx =          z − z( h2 − h1 ) − h1h2 +    ( z + h1 ) + U1                     (177)
                               ∂x 2µ                            h

                               ∂p 1 2                            ∆V
                       vy =          z − z ( h2 − h1 ) − h1 h2 +    ( z + h1 ) + V1
                               ∂y 2µ                              h

where                                ∆U ≡ U2-U1                and      ∆V ≡ V2-V1

Still unknown is the pressure profile, which is found by requiring the velocity profile to satisfy the
continuity equation. In particular, since pressure is independent of z, we will choose p to satisfy the
integral of the continuity equation with respect to z

                                                a          f
                                                 za fb g
                                             h2 x , y, t

                                                                ∇.v dz = 0
                                            − h1 x, y, t


Expanding the divergence and separating derivatives with respect to z from those with respect to x and
y:

                              h2                    h2
                                                            ∂v x ∂v y ∂vz 
                               ∫ ( ∇.v ) dz = ∫             ∂x
                                                                 +
                                                                   ∂y
                                                                      +
                                                                        ∂z
                                                                            dz = 0
                                                                           
                                                                                                      (178)
                              − h1                  − h1




                                     Copyright © 2000 by Dennis C. Prieve
06-703                                                                           173                                                Fall, 2000

Applying Leibnitz’ rule for differentiating an integral whose limits are functions of the differentiation
variable:

              h2 ( x , y )                                  h2 ( x, y )
         ∂                                                                  ∂v x                      ∂h                      ∂ ( −h1 )
         ∂x        ∫           vx ( x, y, z) dz =
                                                                 ∫           ∂x
                                                                                 dz + vx ( x, y , h2 ) 2 − vx ( x , y , −h1 )
                                                                                      14243 ∂x 14              4244      3 ∂x
              − h1 ( x , y )                                − h1 ( x, y )                    U2                     U1

                                       h2                            h2
                                              ∂vx       ∂                                              ∂h2     ∂h
so
                                        ∫      ∂x
                                                  dz =
                                                       ∂x             ∫     v x ( x, y, z ) dz − U 2
                                                                                                        ∂x
                                                                                                           − U1 1
                                                                                                               ∂x
                                                                                                                                          (179)
                                       −h
                                        1                            −h 1


Substituting the velocity profile (177) into (179) and integrating leads to:

                                            h2
                                                           h +h             ( h + h ) ∂p                    3

                                             ∫     vx dz = 1 2 ( U1 + U2 ) − 1 2
                                                             2                  12µ   ∂x
                                            − h1

                                        h2
                                   ∂                                         ∂h ∂h  ∂  h3 ∂p 
                                        ∫
                                                              1
Differentiating                               v x dz =          (U1 + U 2 )  1 + 2  −            
                                  ∂x                          2              ∂x  ∂x  ∂ x  12µ ∂x 
                                       − h1


where                                                                       h = h1 + h2

                                             h2
                                                     ∂v x         1 ∂  3 ∂p  1    ∂∆h
(179) becomes
                                             ∫        ∂x
                                                          dz = −         h   − ∆U
                                                                 12µ ∂x  ∂x  2     ∂x
                                                                                                                                          (180)
                                            −h   1


where                                                                       ∆h = h2 - h1

There is a very similar result for the integral of ∂v y ∂y :

                                             h2
                                                     ∂v y                  1 ∂  3 ∂p  1    ∂∆ h
                                              ∫h ∂y          dz = −               h   − ∆V
                                                                          12µ ∂y  ∂y  2     ∂y
                                                                                                                                          (181)
                                            − 1

Finally the result for the integral of ∂vz ∂z :

                                 h2                     h2
                                       ∂vz
                                 ∫      ∂z
                                           dz =
                                                        ∫−h dvz = v14243
                                                                   z ( x , y , h2 ) − 14
                                                                                      v z ( x , y , −h1 ) = ∆W
                                                                                           4244      3
                                                                                                                                          (182)
                                −h 1                         1          W           2         W         1




                                                      Copyright © 2000 by Dennis C. Prieve
06-703                                                       174                                  Fall, 2000

Adding (180), (181) and (182), setting to zero (to satisfy (178)) and rearranging:

                  ∂  FG ∂p
                           +
                              IJ
                              ∂ 3 ∂p      FG
                                     = −6µ∆U
                                             ∂∆h  IJ
                                                 − 6µ∆V
                                                        ∂∆h
                                                            + 12 µ∆W
                  ∂x  H
                     h3
                        ∂x   ∂yKh
                                  ∂y       H  ∂x   K     ∂y
                                                                                                      (183)


which is called Reynolds lubrication equation. The solution to this equation yields the pressure
profile in the gap for any prescribed translation of the two bodies. Outside the gap, the pressure must
approach the bulk pressure, which is taken to be zero

                                               p → 0 as (x 2+y2) → ∞

In the special case in which upper and lower surfaces are surfaces of revolution around the same axis,
polar coordinates (r,θ) are more convenient than (x,y) since then h1 = h1(r) and h2 = h2(r). (183) can
be written in invariant vector notation:

                                         (         )
                                   ∇ s ⋅ h3 ∇s p = −6µ ( v 2 − v1 ) ⋅(n 2 −n 1 )                      (184)

where vi is the velocity of body i (i = 1or 2) and ni are local normals to body i (not necessarily of unit
length). In particular ni is defined as:

                                                          ni = ∇f i

where                                           f 1(x,y,z) = h1(x,y) + z

and                                             f 2(x,y,z) = h2(x,y) – z

That ni are local normals to body i follows from the fact that f 1 is a constant on surface #1 (defined as z
= -h1) and f 2 is a constant on surface #2 (defined as z = +h2). If we decompose the velocity of the two
bodies into contributions along the z axis and in the xy plane

                                                       vi = vsi + Wie z

then (184) becomes


                          (         )
                   ∇ s ⋅ h3 ∇ s p = −6µ ( v s 2 − v s1 ) ⋅ ∇ s ( h2 − h1 ) +
                                    144444244444                      3            4µ∆
                                                                                  12
                                                                                  1   W
                                                                                     24
                                                                                      3               (185)
                                                       sliding motion          squeezing motion




                                        Copyright © 2000 by Dennis C. Prieve
06-703                                                  175                               Fall, 2000

Example #1. Let’s reformate the sliding-flow problem for
a plate sliding past a cylinder (see page 163). In this
problem the equation of the lower surface (the plate) is just

                         h1(x,y) = 0

The equation of the upper surface is

                                       x2
                        bg
                     h2 x = h0 +
                                       2R

The total gap between the two surfaces is

                                            2
                                         x
                 h( x ) = h1 + h2 = h0 +
                                         2R

For Reynolds equation, we also need

                                             ∆h = h2 - h1 = h(x)

The velocity of the lower surface is

                                          U1 = U       V1 = 0      W1 = 0

while the upper surface is stationary:

                                          U2 = 0       V2 = 0      W2 = 0

The following quantities appear in Reynolds equation

                                         ∆U = -U       ∆V = 0      ∆W = 0

                                            d   FGdp     IJ
                                                     = 6µU
                                                           dh
Reynolds equation becomes
                                            dx
                                               h3
                                                 Hdx      Kdx

which is identical to the derivative of (164). Solving this 2nd order ODE leads to the same pressure
profile we determined earlier.

Example #2.

Now let’s reformulate the squeezing flow problem on page 167. In this problem the equation of the
lower surface (the plate) is just

                                                     h1(x,y) = 0

The equation of the upper surface is                 h2(x,y) = h

                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                   176                             Fall, 2000

The total gap between the two surfaces is

                                                 h = h1 + h2 = h

For Reynolds equation, we also need

                                                 ∆h = h2 - h1 = h

The velocity of the upper surface is

                                         U2 = 0        V2 = 0      W2 = -U

while the lower surface is stationary:

                                          U1 = 0       V1 = 0        W1 = 0

The following quantities appear in Reynolds equation becomes

                                         ∆U = 0       ∆V = 0        ∆W = -U

(185) becomes                                    (            )
                                           ∇ s ⋅ h3 ∇ s p = −12µU                            (186)

Because the upper surface is a circular disk and the gap is uniform, we expect squeezing flow to be
axisymmetric in cylindrical coordinates. In other words, we expect that p = p(r) (i.e. no θ-
dependence). In cylindrical (r,θ,z) or polar coordinates (r,θ), the gradient is♣

                                                              ∂p
                                                     ∇s p =      e
                                                              ∂r r

while the divergence is                      (
                                         ∇ s ⋅ h 3∇ s p =) 1r drd  r dpdr 
                                           1 d  3 dp 
                                                            = −12µU
                                           r dr     dr 
(186) becomes                                      rh


Multiplying through by r and integrating:

                                                   dp
                                            rh 3      = −6µUr 2 + c
                                                   dr




♣ see http://www.andrew.cmu.edu/course/06-703/Vops_cyl.pdf


                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                   177                                          Fall, 2000
                                                dp          r   c
Dividing by rh3:                                   = −6 µU    +
                                                dr         h 3 rh 3

When this is integrated a second time, the second term will lead to a logarithmic singularity at r=0. To
keep pressure finite, we choose c=0 and then the above equation is identical to (174). Solving this 2nd
order ODE leads to the same pressure profile we determined earlier.

Example #3. Sliding of a plate past a sphere

n this problem the equation of the lower surface (the plate)
is just

                           h1(x,y) = 0

The equation of the upper surface is

                                         r2
                       h2 ( r ) = h0 +
                                         2R

The total gap between the two surfaces is

                                                r2
                   h ( r ) = h1 + h 2 = h 0 +
                                                2R

For Reynolds equation, we also need

                                                 ∆h = h2 - h1 = h(r)

The velocity of the sphere is purely along the x-axis

                                     v2 = vs2 = Ue x = e r Ucosθ - e θ Usinθ

                                           U2 = U       V2 = 0      W2 = 0

while the lower surface is stationary:               v1 = vs1 = 0

The following quantities appear in (185):

                                                                      dh
                                          ∇ s ( h2 − h1 ) = ∇ s h =      er
                                                                      dr

            ( v s 2 − v s1 ) ⋅ ∇s ( h2 − h1 ) = (U cos θ er − U sin θ e θ ) ⋅ 
                                                                                dh        dh
                                                                                  er  = U    cos θ
                                                                               dr        dr




                                      Copyright © 2000 by Dennis C. Prieve
06-703                                              178                                         Fall, 2000

                            1 ∂  3 ∂p  1 ∂  h 3 ∂p          dh
(185) becomes                     rh    +     
                                                
                                                        = −6µ U cos θ
                                                       
                            r ∂r     ∂r  r ∂θ  r ∂θ         dr




The solution for sphere of radius R, sliding along a plate at speed U in the x-direction, is:

                              6µUx
                  b g
                 p x, y =
                               b g2
                            5 h x, y

This produces no force in the z-direction (pressure profile is antisymmetric) but of course a force must
be applied to the sphere to get it to move:

                                       Fx =
                                              16
                                               5
                                                        R
                                                 πµUR ln + O δ 0
                                                        δ
                                                                e j                              as δ → 0


                                                Fy = Fz = 0




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                              179                                          Fall, 2000

                                            Turbulence

GENERAL NATURE OF TURBULENCE
In all the problems we have analyzed to date, the fluid elements travel along smooth predictable
trajectories. This state of affairs is called:

laminar flow - fluid elements travel along smooth deterministic trajectories

These trajectories are straight parallel lines for simple pipe flows. However, this is not the only solution
to the equations of motion. Consider the following experiment

Reynolds Experiment (1882) - inject a thin stream of dye into a fully developed flow in a pipe;
observe the dye downstream. (see S:37)

         Flow
     Direction                                                                            Re


                                                                                          1500


                                                                                          2340


                                                                                          7500



• for laminar flow: dye stream appears as a straight colored thread

As the total flow rate of fluid in the pipe is increased, a sudden change in the appearance of the dye
stream occurs. The thread of dye becomes more radially mixed with the fluid and, far enough
downstream, its outline becomes blurred.

• for turbulent flow: irregular radial fluctuations of dye thread

Using a pipe with a sharp-edge entrance, Reynolds determined the critical flow rate for a large number
of fluids and pipe sizes. He found in all cases, the transition occurred at a critical value of a
dimensionless group:

                                         ρ vz D
                                                   = 2300 ± 200
                                         4µ4
                                         12 3
                                            Re




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                                 180                                        Fall, 2000

where v z is the cross-sectional average velocity (= volumetric flowrate / pipe area). Today, we
know this dimensionless group as the Reynolds number.

origin of turbulence - instability of laminar-flow solution to N-S eqns

instability - small perturbations (caused by vibration, etc.) grow rather than decay with time.

That the laminar-flow solution is metastable for Re>2100 can be seen from Reynolds experiment
performed with a pipe in which disturbances are minimized:

         • reduce vibration

         • fluid enters pipe smoothly

         • smooth pipe wall

Under such conditions, laminar flow can be seem to persist up to Re = 104. However, just adding
some vibrations (disturbance) can reduce the critical Re to 2100. The onset of turbulence causes a
number of profound changes in the nature of the flow:

         • dye thread breaks up -- streamlines appear contorted and random

         • sudden increase in ∆p/L

         • local v z fluctuates wildly with time

         • similar fluctuations occur in v r and v θ

As a consequence of these changes, no simplification of the N-S equation is possible: v r, v θ, v z and p
all depend on r, θ, z and t.


TURBULENT FLOW IN PIPES
     Velocity profiles are often measured with a pitot tube, which is a device with a very slow response
time. As a consequence of this slow response time, the rapid fluctuations with time tend to average out.
In the descriptions which follow, we will partition the instantaneous velocity v into a time-averaged value
 v (denoted by the overbar) and a fluctuation v ′ (denoted by the prime):
                                                 v = v + v′

Cross-sectional area averages will be denoted by enclosing the symbol inside carets:




                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                           181                                                   Fall, 2000


                                                       z bg
                                                       R
                                                           v z r 2 πr dr
                                                                                       Q
                                               vz = 0 R                         =

                                                         z  0
                                                                2 πr dr
                                                                                      πR 2



    In laminar flow, the velocity profile for fully developed flow is parabolic in shape with a maximum
velocity occurring at the pipe center that is twice the
cross-sectional mean velocity:

In turbulent flow, the time-averaged velocity profile
has a flatter shape. Indeed as the Reynolds number
increases the shape changes such that the profile
becomes even flatter. The profile can be fit to the
following empirical equation:


             v z ( r ) = v z ,max
                                    FG R − r IJ 1/ n
                                     H RK
where the value of the parameter n depends on Re:

      Re =                   4.0x103             2.3x104           1.1x105             1.1x106     2.0x106     3.2x106
      n=                        6.0                 6.6               7.0                 8.8         10          10
      v max /<v z>             1.26                1.24              1.22                1.18        1.16        1.16

The reduction in the ratio of maximum to
                                                                          1.0
average velocity reflects the flattening of the
profile as n becomes larger. Of course, this
equation gives a “kink” in the profile at r=0                      vz     0.8
                                                                v z,max
and predicts infinite slope at r=R, so it
shouldn’t be applied too close to either                                  0.6
boundary although it gives a reasonable fit
otherwise.
                                                                          0.4

How big are the fluctuations relative to the
maximum velocity? Instantaneous speeds can                                0.2
be obtained for air flows using a hot-wire
anemometer. This is simply a very thin wire                               0.0
which is electrically heated above ambient by                                   0.0          0.2   0.4   0.6     0.8       1.0
passing a current through it. As a result of                                                                       R −r
electrical heating (I2R) the temperature of the                                                                     R
wire will depend on the heat transfer
coefficient, which in turn depends on the

                                         Copyright © 2000 by Dennis C. Prieve
06-703                                                   182                                     Fall, 2000

velocity of flow over the wire:

                                         v z ↑ --> h ↑ --> Twire-Tair ↓

It’s easy to determine the temperature of the wire from its electrical resistance, which generally increases
with temperature. The reason for making the wire very thin is to decrease its thermal inertia. Very thin
wires can respond rapidly to the rapid turbulent fluctuations in v z.

Anyway, the instantaneous speed can be measured. Then the
time-averaged speed and the fluctuations can be calculated. The
root-mean-square fluctuations depend on radial position, as
shown at right. Typically the axial fluctuations are less than 10%
of the maximum velocity whereas the radial fluctuations are
perhaps half of the axial.

Note that the fluctuations tend to vanish at the wall. This is a
result of no-slip (applies even in turbulent flow) which requires
that the instantaneous velocity must vanish at the wall for all time,
which implies that the time average and the instantaneous
fluctuations must vanish.


TIME-SMOOTHING
As we will see shortly, these fluctuations profoundly increase transport rates for heat, mass, and
momentum. However, in some applications, we would be content to predict the time-averaged velocity
profile. So let’s try to time-average the Navier-Stokes equations with the hope that the fluctuations will
average to zero.

First, we need to define what we mean by a time-averaged quantity. Suppose we have some property
like velocity or pressure which fluctuates with time:

                            s = s(t)

We can average over some time interval of half width ∆t:

               s(t ) ≡       z
                          1 t + ∆t
                         2∆t t − ∆t
                                          s (t ' )dt '


We allow that the time-averaged quantity might still
depend on time, but we have averaged out the rapid
fluctuations due to turbulence.

Now let’s define another quantity called the fluctuation
about the mean:


                                       Copyright © 2000 by Dennis C. Prieve
06-703                                                     183                               Fall, 2000
                                                s'( t ) ≡ s (t ) − s ( t )


TIME-SMOOTHING OF CONTINUITY EQUATION
The simple functional form of our experimentally measured velocity profile -- v z (r ) -- is exactly the
same as for laminar flow. This suggests, that if we are willing to settle for the time-averaged velocity
profile, then I might be able to get the result from the NSE. Let’s try to time-smooth the equation of
motion and see what happens. We will start with the equation of continuity for an incompressible flow:

                                                       ∇. v = 0

Integrating the continuity equation for an incompressible fluid and dividing by 2∆t:

                                  1 t + ∆t
                                          z
                                 2∆t t − ∆t
                                            ∇ ⋅ vdt ' =
                                                         1 t + ∆t
                                                        2 ∆t t − ∆t  z
                                                                    0dt ' = 0


Thus the right-hand-side of the equation remains zero. Let’s take a closer look at the left-hand side.
Interchanging the order of differentiation and integration:


                                 z
                             1 t + ∆t
                                       ∇ ⋅ vdt ' = ∇ ⋅
                                                            RS
                                                        1 t + ∆t
                                                                     z       UV
                                                                  vdt ' = ∇⋅ v
                            2∆t t − ∆t                       T
                                                       2∆t t − ∆t             W
Substituting this result for the left-hand side of the continuity equation, leaves:

                                                      ∇⋅v = 0

Thus the form of the continuity equation has not changed as a result of time-smoothing.


TIME-SMOOTHING OF THE NAVIER-STOKES EQUATION
Encouraged by this simplification, we try to time-smooth the Navier-Stokes equation:

                                         ∂v
                                     ρ      + ρv ⋅ ∇ v = −∇p + µ∇ 2 v + ρg
                                         ∂t

After integrating both sides with respect to time and dividing by 2∆t, we can break the integral of the
sum into the sum of the integrals. Most of the terms transform in much the same way as the left-hand
side of the continuity equation. The result is

                                         ∂v
                                     ρ      + ρv ⋅ ∇v = −∇p + µ∇ 2 v + ρg
                                         ∂t

With a little additional massaging (see Whitaker), the remaining term can be expressed as


                                     Copyright © 2000 by Dennis C. Prieve
06-703                                                 184                                        Fall, 2000

                                      ρv ⋅ ∇v = ρv ⋅ ∇v + ∇ ⋅ ρv ′v ′d     i
If the second term on the right-hand side were zero, then NSE after time-smoothing would have exactly
the same form as before time-smoothing. Unfortunately, this term is not zero. Although the average of
the fluctuations is zero, the average of the square of the fluctuations is not zero. So this second term
cannot be dropped. Thus the time-smoothed Navier-Stokes equation becomes:

                                 ∂v
                             ρ      + ρv ⋅ ∇v = −∇p + µ∇ 2 v + ρg + ∇ ⋅ τ ( t )
                                 ∂t

where                                           τ ( t ) = −ρv ′v ′

has units of stress or pressure and is called the Reynold’s stress. Sometimes it is also called the
turbulent stress to emphasize that arises from the turbulent nature of the flow. The existence of this
new term is why even the time-averaged velocity profile inside the pipe is different from that during
laminar flow. Of course, our empirical equation for the v z (r ) is also different from that for laminar flow.

Although we don’t yet know how to evaluate this Reynolds stress, we can add it to the viscous stress
and obtain a differential equation for their sum which we can solve for the simple case of pipe flow.
Here’s how we do it. First, recall that for incompressible Newtonian fluid, the stress is related to the
rate of strain by Newton’s law of viscosity. Time smoothing this constitutive equation yields:
                                             τ = µ ∇v + ∇v tb g
Taking the divergence:                          ∇ ⋅ τ = µ∇ 2 v

If we now make this substitution, NSE becomes

                                  ∂v
                              ρ      + ρv ⋅ ∇ v = −∇p + ∇ ⋅ τ + ρg + ∇ ⋅ τ ( t )
                                  ∂t                                                                   (165)
                                                = −∇p + ρg + ∇ ⋅ τ       (T)



where                                          τ (T ) = τ + τ (t )

is the total stress, i.e., the sum of the time-averaged viscous stress and the Reynolds stress. Thus we
see that the Reynolds stress appears in the equations of motion in the same manner as the viscous stress.
Indeed the sum of the two contributions plays the same role in turbulent flows that the viscous friction
played in laminar flow.




                                    Copyright © 2000 by Dennis C. Prieve
06-703                                                    185                                        Fall, 2000

ANALYSIS OF TURBULENT FLOW IN PIPES
We can make the same assumptions (i.e. the same guess) about the functional form of the time-
averaged velocity and pressure profile in turbulent flow that we made for laminar flow: we will assume
that the time-averaged velocity profile is axisymmetric (v θ=0, ∂ /∂θ=0) and fully developed (∂ /∂ z=0).

                                         v z = v z (r) v r = v θ = 0
                                                    p = p (z)

Then the z-component of (165) yields:

                                  ∂P 1 ∂           1 ∂τ θz   ∂τ zzT
                                                                         bT g   bg
                              0=−   +
                                     2
                                  ∂z 1r ∂4
                                           rτ rz −
                                         r 24
                                              (T )
                                                    e
                                                3 r 1∂θ
                                                      23 12
                                                           − j∂z3
                                     f bz g          bg
                                                    g r                  0      0


where P is the time-averaged dynamic pressure. This form of this equation was obtained using the
tables in BSL (top half of p85, eqn C), after replacing the instantaneous quantities by their time
averages, except that the instantaneous viscous stresses τ has been replaced by (minus) the total stress
τ(T). Expecting the time-averaged flow to be axisymmetric (∂/∂θ = 0) and fully developed (∂/∂z = 0,
except for pressure), the last two terms in this equation can be dropped and the second term is a
function of r only. This leaves us with the same equation we had for laminar flow: a function of r only
equal to a function of z only. The only way these two terms can sum to zero for all r and z is if both
equal a spatial constant:

                                                           ∆P
                                     dP 1 d
                                       =
                                     dz r dr
                                                     e
                                             rτ (rzT ) = −
                                                            L
                                                              j
                                                              <0


This implies that pressure P varies linearly with z. Solving for the total stress τ (rzT ) by integrating:

                                                 1 ∆P    c
                                   τ(rzT ) = −        r + = τ rz + τ rz ( t )                                (166)
                                                 2 L     r

The integration constant c was chosen to be zero to avoid having the stress unbounded at r=0. Now
this is the total stress: the sum of the Reynolds stress

                                                  τ (rzt) = −ρvr′ v z′




                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                        186                                 Fall, 2000

and a viscous contribution from time-smoothing Newton’s law of viscosity:

                                         dv z
                              τ rz = µ
                                          dr

The latter can be determined by differentiating the time-averaged
velocity profile. If we subtract this from the total we can determine
 τ (rzt) -- one of the components of the Reynolds stress tensor. The
result is shown in the figure at right. Notice that the turbulent stress
tends to vanish near the wall. This can be explained by noting that at
the wall, “no slip” between the fluid and the stationary wall requires
that the instanteous velocity, as well as its time average, must be zero:

           v z = v z = 0 ⇒ v z′ = 0 ⇒ τ (rzt) = −ρv r′ v ′z = 0

In terms of the relative importance of these two contributions to the total, one can define three regions:

    1. turbulent core: τ(t)>>τ. This covers most of the cross section of the pipe.

    2. laminar sublayer: τ(t)<<τ. Very near the wall, the fluctuations must vanish (along with the
       Reynolds stress) but the viscous stress are largest.

    3. transition zone: τ(t)≈τ . Neither completely dominates the other.

When applied to the situation of fully developed pipe flows, continuity is automatically satisfied and the
time-smoothed Navier-Stokes equations yields only one equation in 2 unknowns:

2 unknowns:                                     v z ( r ) and ρv r′ v ′z

Clearly another relationship is needed to complete the model. This missing relationship is the
constitutive equation relating the Reynolds stress to the time-smoothed velocity profile. One might
be tempted to define a quantity like the viscosity to relate stress to the time-averaged velocity.

                                                          ?            dv z
                                                   τ (rzt) = µ ( t )
                                                                        dr

But if you define the “turbulent viscosity” this way, its value turns out to depend strongly on position.

                                 µ(t )
                                       =
                                            RS
                                         ≈100                 near pipe centerline
                                  µ      0   T                at pipe wall

So unlike the usual viscosity, µ (t ) is not a material property (since it depends on position rather than
just the material).


                                   Copyright © 2000 by Dennis C. Prieve
06-703                                             187                                          Fall, 2000

PRANDTL’S MIXING LENGTH THEORY
The first successful constitutive equation for turbulence was posed by Prandtl in 1925. Prandtl imagined
that the fluctuations in instantaneous fluid velocity at some fixed point were caused by eddies of fluid
which migrate across the flow from regions having higher or lower time-averaged velocity.

eddy - a packet of fluid (much larger than a fluid element) which can undergo random migration across
streamlines of the time-smoothed velocity field.

These eddies have a longitudinal velocity which corresponds to the time-average velocity at their
previous location.

As this eddy moves across the streamlines, it
gradually exchanges momentum with the surrounding y
fluid which is moving at a different longitudinal                                   eddy migrating
velocity.      But this exchange does not occur                                     randomly
                                                                                    across flow
instantaneously. The eddy retains its original velocity
for a brief period of time. We might call this the
mixing time. During this time, the eddy migrates
laterally a distance l called the mixing length:                                      vx (y )

mixing length (l) - characteristic distance an eddy
migrates normal to the main flow before mixing

Although momentum exchange between eddies occurs continuously in actual turbulent flow, Prandtl
imagined that a migrating eddy keeps all of its original velocity until it migrated a distance l and then
suddenly it exchanges it. This is like molecules of a gas retaining its momentum until it collides with
another gas molecule, which causes a sudden exchange of momentum. Indeed, you might find it helpful
to think of the mixing length as being the analogue of mean-free-path in the kinetic theory of gases.
Recall that:

mean-free path - average distance a gas molecule
travels before colliding with another gas molecule.

Now suppose we are monitoring the instantaneous
velocity at a distance y from the wall when an eddy drifts
into our location from y+l. Because this migrating eddy
has a higher velocity than the average fluid at y, we will
observe an positive fluctuation when the eddy arrives.
To estimate the magnitude of the fluctuation, we can
expand the time-smoothed velocity profile in Taylor
series about y=y:




                                 Copyright © 2000 by Dennis C. Prieve
06-703                                                            188                                    Fall, 2000

                                                       dv x     1 d 2v x
                             vx ( y + l ) = vx ( y ) +       l+                               l2 +L
                                                        dy y    2 dx 2
                                                                                          y

Assuming that l is sufficiently small that we can truncate this series without introducing significant error:

                                     bv′x gabove = vx ( y + l ) − vx ( y) ≈ l dvdyx
where the subscript “above” is appended to remind us that is the fluctuation resulting from an eddy
migrating from above. At some later time, another eddy might migrate to our location from below,
producing a negative fluctuation in velocity:

                                 bv′x gbelow = vx ( y − l ) − vx ( y ) ≈ − l dvdyx
Of course the average fluctuation is zero: v ′x = 0 , but the average of the squares is not:


                           bv ′x g   2
                                         ≈ 12
                                                RS bv ′x g2        b g
                                                                 + v x′   2       UV ≈ l 2 FG dvx IJ 2
                                                 T       above            below    W H dy K                  (167)


Now let’s turn our attention to v ′y . This is related to how fast the eddies migrate, and the sign depends
on whether they are migrating upward or downward.

If the eddy migrates from above, it represents a
negative y-fluctuation (it is moving in the -y direction).
Such an eddy will have a greater x-velocity than the
fluid receiving it, consequently generating a positive x-
fluctuation:

          v y’ <0 → v x ’ >0 →              v x ’ v y’ <0

On the other hand, if the eddy migrates from below, it
represents a positive y-fluctuation but has less x-
velocity than the fluid receiving it, generating a negative x-fluctuation:

                                          v y’ >0 → v x ’ <0 →                v x ’ v y’ <0

Finally, if there is no vertical migration of eddies, there is no reason for the x-velocity to fluctuate:

                                                     v y’ = 0 → v x ’ = 0

These three statements suggest that the y-fluctuations are proportional to the x-fluctuations, with a
negative proportionality constant:

                                          Copyright © 2000 by Dennis C. Prieve
06-703                                                 189                                        Fall, 2000

                                                  v y' ≈ - α v x '

where α>0. Alternatively, we can write:

                                         v x 'v y' = - α (v x ')2

Time averaging and then substituting (167):

                                                                F
                                   v ′x v ′y = −α (v ′x ) = −αl G
                                                                  dv x I
                                                                         2

                                                                H dy JK
                                                       2              2



Absorbing the unknown α into the (still unknown) mixing length parameter:


                                     τ (xyt) = −ρv x′ v y′ = ρl 2
                                                                     FG dv x IJ 2
                                                                      H dy K                           (168)


Comparing this result with Newton’s law of viscosity:

                                                           dv x
                                                τ xy = µ
                                                            dy

we could conclude that an apparent turbulent viscosity is given by:

                                                             dvx
                                              µ()
                                                t
                                                  = ρl 2
                                                              dy

Of course, this viscosity is not a true fluid property, because it depends strongly on the velocity profile.

For this theory to be useful, we need a value for the “mixing length” l. There are two properties of l
which we can easily deduce. First of all, l was defined as the distance normal to the wall which the
eddy travels before becoming mixed with local fluid. Clearly, this mixing must occur before the eddy
“bumps” into the wall, so:

Property #1:                                         l<y

where y is the distance from the wall. Secondly, we know from no-slip that the fluctuations all vanish at
the wall. Consequently, the Reynolds stress must vanish at the wall. Since the velocity gradient does
not vanish, we must require that the mixing length vanish at the wall:

Property #2:                                     l=0 at y=0

If it’s not a constant, the next simplest functional relationship between l and y which satisfies both these
properties is:



                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                      190                                   Fall, 2000

                                                          l = ay                                       (169)

where a is some constant and 0<a<1.


PRANDTL’S “UNIVERSAL” VELOCITY PROFILE
The velocity profile in turbulent flow is essentially flat, except near the wall where the velocity gradients
are steep. Focussing attention on this region near the flow, Prandtl tried to deduce the form for the
velocity profile in turbulent flow. Recall from (166) that in pipe flow, the total stress varies linearly from
0 at the center line to a maximum value at the wall:

                                                        1 ∆P       r
                                         τ (rzT ) = −        r = τ0 < 0                                (170)
                                                        2 L        R

where we have defined                       τ0 ≡ -(1/2)(R/L)∆P > 0

which represents the stress on the wall. In the “turbulent core”, the Reynolds stress dominates the
“laminar” stress; then substituting (168) through (170):

                                                      τ (xyt ) ≈ τ rz
                                                                   (T )


                                                             2
                                                  dv 
                                         ρ l{2  x  ≈ τ0 1 − 
                                                               y
                                                                                                       (171)
                                                              R
                                          a2 y 2 
                                                    dy 


                                      dv x       F1 − y I = v * F1 − y I
                                                τ0

                                               ; H RK           H RK
or                               ay        =
                                       dy        ρ
                                                v*

The general solution to this 1st order ODE is

                                                                 +                      +
                           v dy+i = C +
                             +          2    y   2           y
                                          1 − + − tanh −1 1 − +                                        (172)
                                        a        a          R                       R

where C is the integration constant, v* is called the friction velocity and where we have introduced
dimensionless variables:

                                                            v
                                                        v+ = x
                                                            v*

                                               v*                            v*
                                       y+ =       y        and        R+ =      R
                                                ν                             ν


                                      Copyright © 2000 by Dennis C. Prieve
06-703                                                      191                       Fall, 2000

Near the wall (i.e. for y<<R or y+<<R+), we can simplify (172):

                                             y+                    y+
for y+<<R+:                             1−       +
                                                     = 1−           +
                                                                            d i
                                                                         + O y +2         (173)
                                             R                 2R

                                                     y+        1 4R +
                                tanh −1 1 −                =     ln     + O y+  d i
                                                     R+        2    y +


Dropping the higher-order terms:


                                    d i 2 − lnab4 R g + C + 1a ln y +
                                                   +
                                  v+ y+ =                                                 (174)
                                                 1442443
                                                               c

where c is a collection of constants.

This result can be derived more easily by starting over with a simplified (171):

                                  dv x                             dv x 1 dy 1 dy +
for y<<R:                    ay        = v*           or               =    =             (175)
                                   dy                              v * a y a y+
                                                                   {
                                                                   dv+

                                                           1
which integrates to                              v+ =        ln y + + c
                                                           a

where c is some integration constant. When
plotted on semi-log coordinates, experimental
velocity profiles do indeed show a linear
region which extends over a couple of
decades of y+ values:
                                                                               (6)
Moreover, the slope and intercept of this
straight line don't seem to depend on the
Reynolds number. Indeed, the slope and
intercept also don't seem to depend on the
shape of the conduit. Rectangular conduits
yields the same velocity profile on these
coordinates.    This is called Prandtl’s
Universal Velocity Profile:

y+>26:                                       v + = 2.5 ln y + + 5.5                       (176)



                                   Copyright © 2000 by Dennis C. Prieve
06-703                                                  192                                   Fall, 2000

which applies for y+>26 (the turbulent core). This coefficient of lny+ corresponds to a=0.4. so (169)
becomes:

                                                   l = 0.4 y

Recall that we reasoned that a had to be in the range of 0 to 1 to be physically realistic.

    In the laminar sublayer, Reynolds stress can be totally neglected, leaving just viscous stress. This
close the wall, the total stress is practically a constant equal to the wall shear stress τ0:

                                             R| τ xy ≈ τ (rzT )
y << R:                                       S|µ dvx = τ 0
                                               T dy
Then we can integrate the above ODE for v x , subject to v x = 0 at y=0 (i.e. no slip):

                                                     τ
                                                 vx = 0 y
                                                      µ

Dividing both sides by v* we can make the result dimensionless:

y+<5:                                              v+ = y+                                        (177)

which applies for 0<y+<5 (the laminar sublayer). Of course (176) also does not apply near the
center of the pipe, since the y+ ≈ R+ there, whereas (176) was derived by assuming that y+ << R+ (see
(173)).


PRANDTL’S UNIVERSAL LAW OF FRICTION
    Let’s try to figure deduce the analog of Poisueille's Formula (see page 86) for turbulent flow.
Poisueille's Formula is the relationship between volumetric flowrate through the pipe and pressure drop.
Volumetric flowrate Q is calculated by integrating the axial component of fluid velocity of the cross
section of the pipe:

                                    vz =
                                             Q
                                            πR 2
                                                    =
                                                         2
                                                        R2 0
                                                              z   R
                                                                      r v z (r ) dr


Now we are going to use (176) for the velocity profile, although we assumed in (175) that y<<R (where
y = R-r).




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                               193                                     Fall, 2000

Although the derivation of (176) assumed that
we are very close to the wall (y+<<R+, see
(173)), (176) works remarkly well right out
to the centerline y+=R+. The plot at right
shows the velocity profiles (with different wall
roughness on the walls) compared with
predictions based on (176). The ordinate is

vz ( R ) − vz ( r )
        v*
                       ( )         ( )
                    = v + R + − v + y + = 2.5ln R + + 5.5 − 2.5ln y + + 5.5 
                                                                            
                                                 R+
                 = 2.5 (ln R + − ln y + ) = 2.5ln +
                                                 y
                           R          R
                 = 2.5ln     = 2.5ln
                           y         R−r


Note that (176) predicts an infinite velocity-
difference at y=0, whereas the actual velocity
must be finite. Of course, (176) does not
apply right up to the wall because very near
the wall the Reynolds stresses are not
dominant.

Substituting (176) and integrating:

                                               LM FG v * R IJ + 1.75OP
                                      v z = v * 2.5 ln
                                                N H νK Q                                          (178)


Now the friction velocity can be related to the friction factor, whose usual definition can be expressed
in terms of the variables in this analysis:


                                               τ0      F v* I 2
                                                    = 2G     JJ
                                       f ≡
                                           1
                                             ρ vz
                                                  2    G
                                                       H K
                                                         v z
                                           2


                                                vz         2
Thus                                                 =
                                                v*         f

Likewise, the usual definition of Reynolds number yields




                                  Copyright © 2000 by Dennis C. Prieve
06-703                                            194                                     Fall, 2000

                                                  2 vz R
                                           Re ≡
                                                          ν

                                 v* R    vz R   v*   Re f
Thus                                  =       ×    =
                                  ν       ν
                                        123
                                           Re 2
                                                vz    2 2
                                                          ;
                                                          f 2


Relating v* to f and v z to Re, (178) can be written as:

                                    1
                                     f
                                       = 177      d
                                          . ln Re f − 0.60      i
or
                                  1
                                   f
                                     = 4.07 log10 Re  d             i
                                                                f − 0.60


which fits experimental data remarkable well. A slightly better fit can be obtained by adjusting the
coefficients:

                                   1
                                    f
                                                      d
                                      = 4.0 log 10 Re f − 0.40      i                         (179)


which is called Prandtl’s (universal) law of friction. It applies virtually over the entire range of
Reynolds numbers normally encountered for turbulent pipe flow: 2100 < Re < 5x106.




                                Copyright © 2000 by Dennis C. Prieve



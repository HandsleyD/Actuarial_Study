---
normalized_id: shared-pdf-reference-optimization-toolbox-matlab
exam_code: SHARED
material_scope: optimization toolbox-matlab.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Optimization Toolbox-Matlab.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-optimization-toolbox-matlab

Optimization Toolbox 3
               Solve standard and large-scale optimization problems

   The Optimization Toolbox extends the
   MATLAB® technical computing environment
   with tools and widely used algorithms for
   standard and large-scale optimization. These                 KEY FEATURES
   algorithms solve constrained and uncon-
                                                                ■ Tools for defining, solving, and assessing optimization
   strained continuous and discrete problems.
                                                                  problems
   The toolbox includes functions for linear
   programming, quadratic programming, non-                     ■ Solvers for nonlinear optimization and multi-objective
   linear optimization, nonlinear least squares,                  optimization
   nonlinear equations, multi-objective optimi-
                                                                ■ Solvers for nonlinear least-squares, data fitting, and nonlinear
   zation, and binary integer programming.
                                                                  equations
   MATLAB and the Optimization Toolbox
                                                                ■ Methods for solving quadratic and linear programming
   let you easily define models, gather data,
                                                                  problems
   manage model formulations, and analyze
   results. They give engineers and scientists                  ■ Methods for solving binary integer programming problems
   the tools needed to find optimal solutions,
   perform tradeoff analysis, balance multiple
   design alternatives, and quickly incorporate
   optimization methods in their algorithms
   and models.

   Toolbox functions, which can be accessed via
   the MATLAB command line, are written in the
   open MATLAB language. This means that you
   can inspect the algorithms, modify the source
   code, and create your own custom functions.




                   A blurred image is recovered using the
                   large-scale linear least squares algorithm
                   in the Optimization Toolbox.
      An optimization routine is run at the command line (left), and calls M-files defining the
      objective function (top right) and constraint equations (bottom right).




                                                                                                                The trust region method, which is based
Defining, Solving, and Assessing                                Nonlinear Optimization and Multi-
                                                                                                                on an interior-reflective Newton method,
Optimization Problems                                           Objective Optimization
                                                                                                                enables you to calculate Hessian-times-vector
The Optimization Toolbox includes the                           Unconstrained Nonlinear Optimization
                                                                                                                products in a function without having to
most widely used methods for performing                         The Optimization Toolbox uses three
                                                                                                                form the Hessian matrix explicitly. You can
minimization and maximization. The toolbox                      methods to solve unconstrained nonlinear
                                                                                                                also adjust the bandwidth of the precondi-
implements both standard and large-scale                        minimization problems: quasi-Newton,
                                                                                                                tioner used in the Newton iteration.
algorithms, enabling you to solve problems                      Nelder-Mead, and trust-region.
by exploiting their sparsity or structure. The                                                                  Constrained Nonlinear Optimization
                                                                The Quasi-Newton method uses a mixed
command-line interface gives you access to tools                                                                Constrained nonlinear optimization prob-
                                                                quadratic and cubic line search procedure
to define, run, and assess your optimization.                                                                   lems are composed of nonlinear objective
                                                                and the BFGS formula for updating the
                                                                                                                functions and may be subject to linear and
You can further manipulate and diagnose                         approximation of the Hessian matrix.
                                                                                                                nonlinear constraints. The Optimization
your optimization using the diagnostic
                                                                Nelder-Mead is a direct-search method that      Toolbox uses two methods to solve these
outputs from the optimization methods.
                                                                uses only function values (does not require     problems: trust-region and active set sequen-
Using an output function, you can also write
                                                                derivatives) and handles non-smooth objec-      tial quadratic programming.
results to files, create your own stopping
                                                                tive functions.
criteria, and write your own graphical user                                                                     Trust-region is used for bound constrained
interfaces to run the toolbox solvers.                          Trust-region is used for large-scale problems   problems or linear equalities only.
                                                                where sparsity or structure can be exploited.
                                                                                                                Active set sequential quadratic programming
                                                                                                                is used for general nonlinear optimization.
                                                                                                           A user-defined output function (top) plots the
                                                                                                           current iterate at each algorithm iteration (left).
                                                                                                           The Optimization Toolbox also provides details for
                                                                                                           each iteration (bottom).




Multi-Objective Optimization
Multi-objective optimization is concerned
with the minimization of multiple objective
functions that are subject to a set of con-
straints. The Optimization Toolbox provides
functions for solving two formulations of
multi-objective optimization problems: goal
attainment and minimax.
                                                 Nonlinear Least Squares, Data Fitting, and   Gauss-Newton is a line search method that
The goal attainment problem involves reduc-      Nonlinear Equations                          chooses a search direction based on the
ing the value of a linear or nonlinear vector    The Optimization Toolbox can solve           solution to a linear least squares problem.
function to attain the goal values given in a    nonlinear least squares problems,
                                                                                              The toolbox also includes a specialized inter-
goal vector. The relative importance of the      data fitting problems, and systems of
                                                                                              face for data-fitting problems to find the
goals is indicated using a weight vector. The    nonlinear equations.
                                                                                              member of a family of nonlinear functions that
goal attainment problem may also be subject
                                                 The toolbox uses three methods for           best fits a set of data points. The toolbox uses
to linear and nonlinear constraints.
                                                 solving nonlinear least squares problems:    the same methods for data-fitting problems as
The minimax problem involves minimizing          trust-region, Levenberg-Marquardt, and       it uses for nonlinear least-squares problems.
the worst-case value of a set of multivariate    Gauss-Newton.
                                                                                              The Optimization Toolbox implements a
functions, possibly subject to linear and non-
                                                 Trust-region is used for unconstrained and   dogleg trust region method for solving a
linear constraints.
                                                 bound constrained problems.                  system of nonlinear equations where there are
The Optimization Toolbox transforms both                                                      as many equations as unknowns. The toolbox
                                                 Levenberg-Marquardt is a line search
types of multi-objective problems into stan-                                                  can also solve this problem using either the
                                                 method whose search direction is a cross
dard constrained optimization problems and                                                    trust-region, the Levenberg-Marquandt, or
                                                 between the Gauss-Newton and steepest
then solves them using a sequential quadratic                                                 the Gauss-Newton method.
                                                 descent directions.
programming approach.
Quadratic and Linear Programming                                                               Binary Integer Programming                                                                     Required Products
Quadratic Programming                                                                          Binary integer programming problems                                                            MATLAB
Quadratic programming problems involve                                                         involve minimizing a linear objective func-
minimizing a multivariate quadratic func-                                                      tion subject to linear equality and inequality                                                 Related Products
tion subject to linear equality and inequality                                                 constraints. Each variable in the optimal                                                      Curve Fitting Toolbox. Perform model
constraints. The toolbox implements three                                                      solution must be either a 0 or a 1.                                                            fitting and analysis
methods for solving these problems: trust-
                                                                                               The Optimization Toolbox solves these prob-                                                    Genetic Algorithm and Direct Search
region, preconditioned conjugate gradient,
                                                                                               lems using a branch-and-bound algorithm that:                                                  Toolbox. Solve optimization problems using
and active set.
                                                                                                                                                                                              genetic and direct search algorithms
                                                                                               • Searches for a feasible binary integer
Trust-region is used for bound constrained
                                                                                                  solution                                                                                    Neural Network Toolbox. Design and
problems.
                                                                                                                                                                                              simulate neural networks
                                                                                               • Updates the best binary point found as the
Preconditioned conjugate gradient is used
                                                                                                  search tree grows                                                                           Spline Toolbox. Create and manipulate
for problems subject to equality constraints.
                                                                                                                                                                                              spline approximation models of data
                                                                                               • Verifies that no better solution is possible
Active set minimizes the objective at each
                                                                                                 by solving a series of linear programming                                                    Statistics Toolbox. Apply statistical
iteration over the active set (a subset of the
                                                                                                 relaxation problems                                                                          algorithms and probability models
constraints that are locally active) until it
reaches a solution.                                                                                                                                                                           For more information on related products, visit
                                                                                                                                                                                              www.mathworks.com/products/optimization
Linear Programming
Linear programming problems consist of a
                                                                                                                                                                                              Platform and System Requirements
linear expression for the objective function
                                                                                                                                                                                              For information on platform and system
and linear equality and inequality constraints.
                                                                                                                                                                                              requirements, visit www.mathworks.com/
Two methods are used to solve this type of
                                                                                                                                                                                              products/optimization ■
problem: simplex and interior point.
The interior point method is based on a
primal-dual predictor-corrector algorithm,
and is used for large-scale linear problems.

The simplex method is a systematic proce-                                                                                                                                                                              For demos, application examples,
dure for generating and testing candidate                                                                                                                                                                              tutorials, user stories, and pricing:

vertex solutions to a linear program.                                                                                                                                                                                  • Visit www.mathworks.com
                                                                                                                                                                                                                       • Contact The MathWorks directly
                                                                                                                                                                                                                         US & Canada 508-647-7000
                                                                                                                                                                                                                         Benelux                    +31 (0)182 53 76 44
                                                                                                                                                                                                                         France                     +33 (0)1 41 14 67 14
                                                                                                                                                                                                                         Germany                    +49 (0)241 470 750
                                                                                                                                                                                                                         Italy                      +39 (011) 2274 700
                                                                                                                                                                                                                         Korea                      +82 (0)2 6006 5114
                                                                                                                                                                                                                         Spain                      +34 93 362 13 00
                                                                                                                                                                                                                         Sweden                     +46 (8)505 317 00
                                                                                                                                                                                                                         Switzerland                +41 (0)31 950 60 20
                                                                                                                                                                                                                         UK                         +44 (0)1223 423 200
                                                                                                                                                                                                                       Visit www.mathworks.com to obtain
                                                                                                                                                                                                                       contact information for authorized
                                                                                                                                                                                                                       MathWorks representatives in countries
                                                                                                                                                                                                                       throughout Asia Pacific, Latin America,
                                                                                                                                                                                                                       the Middle East, Africa, and the rest
                                                                                                                                                                                                                       of Europe.




                                                                             Tel: 508.647.7000 info@mathworks.com www.mathworks.com                                                                                                                                8513v04 06/04

© 2004 by The MathWorks, Inc. MATLAB, Simulink, Stateflow, Handle Graphics, and Real-Time Workshop are registered trademarks, and TargetBox is a trademark of The MathWorks, Inc. Other product or brand names are trademarks or registered trademarks of their respective holders.


